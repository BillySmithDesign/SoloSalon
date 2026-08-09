import{NextRequest,NextResponse}from'next/server';import{db}from'../../../../lib/db';import{SALON_ID}from'../../../../lib/config';
export async function POST(r:NextRequest){try{
 const b=await r.json(); if(!b.serviceId||!b.startsAt||!b.name||!b.email||!b.phone)return NextResponse.json({error:'Please complete all details.'},{status:400});
 const c=db(); const{data:s,error:se}=await c.from('services').select('*').eq('id',b.serviceId).eq('salon_id',SALON_ID).eq('active',true).single();
 if(se||!s)throw new Error('Service not found');
 const start=new Date(b.startsAt),end=new Date(start.getTime()+s.duration_minutes*60000);
 let{data:client,error:ce}=await c.from('clients').select('*').eq('salon_id',SALON_ID).ilike('email',b.email).maybeSingle();
 if(ce)throw ce;
 if(!client){const x=await c.from('clients').insert({salon_id:SALON_ID,full_name:b.name,email:b.email,phone:b.phone}).select().single();if(x.error)throw x.error;client=x.data}
 else{await c.from('clients').update({full_name:b.name,phone:b.phone}).eq('id',client.id)}
 const{data,error}=await c.from('appointments').insert({salon_id:SALON_ID,service_id:s.id,client_id:client.id,starts_at:start.toISOString(),ends_at:end.toISOString(),status:'booked'}).select().single();
 if(error){if(error.code==='23P01')return NextResponse.json({error:'That time was just booked. Please choose another.'},{status:409});throw error}
 return NextResponse.json({appointment:data,service:s});
}catch(e:any){return NextResponse.json({error:e.message||'Booking failed'},{status:500})}}