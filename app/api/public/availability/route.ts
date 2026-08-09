import{NextRequest,NextResponse}from'next/server';import{db}from'../../../../lib/db';import{SALON_ID}from'../../../../lib/config';
export async function GET(r:NextRequest){try{
 const u=new URL(r.url),serviceId=u.searchParams.get('service'),date=u.searchParams.get('date');
 if(!serviceId||!date)return NextResponse.json({slots:[]});
 const c=db(); const{data:s}=await c.from('services').select('*').eq('id',serviceId).eq('salon_id',SALON_ID).single(); if(!s)return NextResponse.json({slots:[]});
 const weekday=new Date(date+'T12:00:00').getDay(); const{data:h}=await c.from('working_hours').select('*').eq('salon_id',SALON_ID).eq('weekday',weekday).maybeSingle();
 if(!h?.enabled)return NextResponse.json({slots:[]});
 const start=new Date(date+'T'+String(h.start_time).slice(0,5)),end=new Date(date+'T'+String(h.end_time).slice(0,5));
 const occupiedDuration=(s.duration_minutes+(s.buffer_before_minutes||0)+(s.buffer_after_minutes||0))*60000;
 const dayStart=new Date(date+'T00:00:00').toISOString(),dayEnd=new Date(date+'T23:59:59').toISOString();
 const[{data:appointments},{data:blocks}]=await Promise.all([
  c.from('appointments').select('starts_at,ends_at').eq('salon_id',SALON_ID).eq('status','booked').gte('starts_at',dayStart).lte('starts_at',dayEnd),
  c.from('blocked_times').select('starts_at,ends_at').eq('salon_id',SALON_ID).lt('starts_at',dayEnd).gt('ends_at',dayStart)
 ]);
 const busy=[...(appointments||[]),...(blocks||[])],slots=[];
 for(let t=start.getTime();t+occupiedDuration<=end.getTime();t+=30*60000){
  const e=t+occupiedDuration;
  if(!busy.some((b:any)=>new Date(b.starts_at).getTime()<e&&new Date(b.ends_at).getTime()>t))slots.push({startsAt:new Date(t).toISOString()});
 }
 return NextResponse.json({slots});
}catch(e:any){return NextResponse.json({error:e.message},{status:500})}}