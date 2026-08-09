import {db} from './db';import {SALON_ID} from './config';
function zonedOffsetMs(date:Date,timeZone:string){const parts=new Intl.DateTimeFormat('en-US',{timeZone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).formatToParts(date);const m:any={};parts.forEach(p=>m[p.type]=p.value);const asUTC=Date.UTC(+m.year,+m.month-1,+m.day,+m.hour,+m.minute,+m.second);return asUTC-date.getTime()}
function localToUtc(date:string,time:string,tz:string){const [y,m,d]=date.split('-').map(Number),[hh,mm]=time.slice(0,5).split(':').map(Number);let guess=new Date(Date.UTC(y,m-1,d,hh,mm));let offset=zonedOffsetMs(guess,tz);let utc=new Date(guess.getTime()-offset);let offset2=zonedOffsetMs(utc,tz);if(offset2!==offset)utc=new Date(guess.getTime()-offset2);return utc}
function addMin(d:Date,m:number){return new Date(d.getTime()+m*60000)}
function overlaps(a:Date,b:Date,c:Date,d:Date){return a<d&&c<b}
export async function availability(serviceId:string,date:string){
 const c=db();
 const [{data:salon,error:se},{data:service,error:sve}]=await Promise.all([
  c.from('salons').select('*').eq('id',SALON_ID).single(),
  c.from('services').select('*').eq('salon_id',SALON_ID).eq('id',serviceId).eq('active',true).single()
 ]);if(se||sve||!salon||!service)throw new Error('Service or salon unavailable');
 const weekday=new Date(date+'T12:00:00Z').getUTCDay();
 const {data:hours}=await c.from('working_hours').select('*').eq('salon_id',SALON_ID).eq('weekday',weekday).maybeSingle();
 if(!hours?.enabled||!hours.start_time||!hours.end_time)return[];
 const start=localToUtc(date,hours.start_time,salon.timezone),end=localToUtc(date,hours.end_time,salon.timezone);
 const dayStart=new Date(start);dayStart.setUTCHours(dayStart.getUTCHours()-2);const dayEnd=new Date(end);dayEnd.setUTCHours(dayEnd.getUTCHours()+2);
 const [{data:appts},{data:blocks}]=await Promise.all([
  c.from('appointments').select('starts_at,ends_at').eq('salon_id',SALON_ID).eq('status','booked').lt('starts_at',dayEnd.toISOString()).gt('ends_at',dayStart.toISOString()),
  c.from('blocked_times').select('starts_at,ends_at').eq('salon_id',SALON_ID).lt('starts_at',dayEnd.toISOString()).gt('ends_at',dayStart.toISOString())
 ]);
 const busy=[...(appts||[]),...(blocks||[])].map((x:any)=>[new Date(x.starts_at),new Date(x.ends_at)]);
 const interval=salon.slot_interval_minutes||15,out:any[]=[];
 for(let cursor=start;addMin(cursor,service.buffer_before_minutes+service.duration_minutes+service.buffer_after_minutes)<=end;cursor=addMin(cursor,interval)){
   const bookingStart=cursor,actualStart=addMin(cursor,service.buffer_before_minutes),actualEnd=addMin(actualStart,service.duration_minutes),occupiedEnd=addMin(actualEnd,service.buffer_after_minutes);
   if(!busy.some(([a,b])=>overlaps(bookingStart,occupiedEnd,a,b)))out.push({startsAt:actualStart.toISOString(),endsAt:actualEnd.toISOString()});
 }
 return out;
}
