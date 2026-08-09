'use client';

import { useEffect, useState } from 'react';

export default function CalendarPage() {
  const [appointments, setAppointments] = useState<any[]>([]);

  async function load() {
    const response = await fetch('/api/admin/appointments');
    const data = await response.json();
    setAppointments(data.appointments || []);
  }

  useEffect(() => { load(); }, []);

  async function cancel(id: string) {
    await fetch('/api/admin/appointments', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: 'cancelled' }),
    });
    load();
  }

  return <div className="daygrid">
    {appointments.length ? appointments.map((a) => (
      <div className="appt" key={a.id}>
        <div>
          <b>{new Date(a.starts_at).toLocaleString('en-AU', { weekday:'short', day:'numeric', month:'short', hour:'numeric', minute:'2-digit' })}</b>
          <div>{a.clients.full_name} · {a.services.name}</div>
          <div className="muted">{a.clients.phone} · {a.clients.email}</div>
        </div>
        {a.status === 'booked' && <button className="danger smallbtn" onClick={() => cancel(a.id)}>Cancel</button>}
      </div>
    )) : <div className="card"><h3>No upcoming appointments</h3><p className="muted">Bookings will appear here immediately.</p></div>}
  </div>;
}
