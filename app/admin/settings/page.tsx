'use client';

import { useEffect, useState } from 'react';

export default function SettingsPage() {
  const [form,setForm]=useState<any>();

  useEffect(()=>{
    fetch('/api/admin/settings').then(r=>r.json()).then(j=>setForm(j.salon));
  },[]);

  if(!form) return <p>Loading…</p>;

  async function save(){
    const r=await fetch('/api/admin/settings',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(form)
    });
    if(r.ok) alert('Saved');
  }

  return <div className="card">
    <div className="grid two">
      <input value={form.name||''} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Salon name"/>
      <input value={form.email||''} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Salon email"/>
      <input value={form.phone||''} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Salon phone"/>
      <input value={form.timezone||''} onChange={e=>setForm({...form,timezone:e.target.value})} placeholder="Timezone"/>
    </div>
    <label><input type="checkbox" checked={form.client_confirmation_enabled} onChange={e=>setForm({...form,client_confirmation_enabled:e.target.checked})}/> Email confirmation to client</label><br/>
    <label><input type="checkbox" checked={form.salon_notification_enabled} onChange={e=>setForm({...form,salon_notification_enabled:e.target.checked})}/> Email new booking to salon</label><br/>
    <button style={{marginTop:12}} onClick={save}>Save settings</button>
  </div>;
}
