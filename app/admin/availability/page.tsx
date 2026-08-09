'use client';

import { useEffect, useState } from 'react';

const names=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export default function AvailabilityPage() {
  const [hours,setHours]=useState<any[]>([]);
  const [blocks,setBlocks]=useState<any[]>([]);
  const [form,setForm]=useState({starts_at:'',ends_at:'',label:'Blocked'});

  async function load() {
    const a=await fetch('/api/admin/availability').then(r=>r.json());
    const b=await fetch('/api/admin/blocks').then(r=>r.json());
    setHours(a.hours||[]);
    setBlocks(b.blocks||[]);
  }

  useEffect(()=>{load()},[]);

  async function saveHours() {
    await fetch('/api/admin/availability',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({hours})});
    alert('Saved');
  }

  async function addBlock() {
    if(!form.starts_at||!form.ends_at) return;
    await fetch('/api/admin/blocks',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...form,starts_at:new Date(form.starts_at).toISOString(),ends_at:new Date(form.ends_at).toISOString()})});
    setForm({starts_at:'',ends_at:'',label:'Blocked'});
    load();
  }

  return <>
    <div className="card">
      <h3>Regular working hours</h3>
      {hours.map((h,i)=><div className="inline" style={{margin:'8px 0'}} key={h.weekday}>
        <label><input type="checkbox" checked={h.enabled} onChange={e=>{const n=[...hours];n[i]={...h,enabled:e.target.checked};setHours(n)}}/> {names[h.weekday]}</label>
        <input type="time" value={(h.start_time||'09:00').slice(0,5)} onChange={e=>{const n=[...hours];n[i]={...h,start_time:e.target.value};setHours(n)}}/>
        <input type="time" value={(h.end_time||'17:00').slice(0,5)} onChange={e=>{const n=[...hours];n[i]={...h,end_time:e.target.value};setHours(n)}}/>
      </div>)}
      <button onClick={saveHours}>Save hours</button>
    </div>
    <div className="card" style={{marginTop:14}}>
      <h3>Block time</h3>
      <div className="grid two">
        <input type="datetime-local" value={form.starts_at} onChange={e=>setForm({...form,starts_at:e.target.value})}/>
        <input type="datetime-local" value={form.ends_at} onChange={e=>setForm({...form,ends_at:e.target.value})}/>
      </div>
      <input style={{marginTop:8}} placeholder="Reason / label" value={form.label} onChange={e=>setForm({...form,label:e.target.value})}/>
      <button style={{marginTop:8}} onClick={addBlock}>Block time</button>
      {blocks.map(b=><p key={b.id}><b>{b.label}</b> · {new Date(b.starts_at).toLocaleString('en-AU')} → {new Date(b.ends_at).toLocaleTimeString('en-AU')}</p>)}
    </div>
  </>;
}
