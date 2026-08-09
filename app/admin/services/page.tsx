'use client';

import { useEffect, useState } from 'react';

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [form, setForm] = useState<any>({
    category:'Services', name:'', description:'', duration_minutes:60,
    price_cents:0, active:true, sort_order:10
  });

  async function load() {
    const response = await fetch('/api/admin/services');
    const data = await response.json();
    setServices(data.services || []);
  }

  useEffect(() => { load(); }, []);

  async function save() {
    await fetch('/api/admin/services', {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body:JSON.stringify(form),
    });
    setForm({ category:'Services', name:'', description:'', duration_minutes:60, price_cents:0, active:true, sort_order:10 });
    load();
  }

  return <>
    <div className="card">
      <h3>Add service</h3>
      <div className="grid two">
        <input placeholder="Category" value={form.category} onChange={e=>setForm({...form,category:e.target.value})}/>
        <input placeholder="Service name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
        <input type="number" placeholder="Minutes" value={form.duration_minutes} onChange={e=>setForm({...form,duration_minutes:+e.target.value})}/>
        <input type="number" placeholder="Price $" value={(form.price_cents||0)/100} onChange={e=>setForm({...form,price_cents:Math.round(+e.target.value*100)})}/>
      </div>
      <textarea style={{marginTop:10}} placeholder="Short description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/>
      <button style={{marginTop:10}} disabled={!form.name} onClick={save}>Add service</button>
    </div>
    <div className="card" style={{marginTop:14}}>
      <table className="table"><tbody>
        {services.map(s=><tr key={s.id}>
          <td><b>{s.name}</b><div className="muted">{s.category}</div></td>
          <td>{s.duration_minutes} min</td>
          <td>{s.price_cents==null?'POA':'$'+(s.price_cents/100).toFixed(0)}</td>
        </tr>)}
      </tbody></table>
    </div>
  </>;
}
