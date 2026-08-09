import 'server-only';
import Link from 'next/link';
import {redirect} from 'next/navigation';
import {isAdmin} from './auth';
export async function AdminShell({children,title}:{children:React.ReactNode,title:string}){
 if(!(await isAdmin()))redirect('/admin/login');
 return <div className="admin"><aside className="sidebar"><div className="brand">SOLOSALON</div><nav className="nav">
 <Link href="/admin/calendar">Bookings</Link><Link href="/admin/availability">Availability</Link><Link href="/admin/services">Services</Link><Link href="/admin/clients">Clients</Link><Link href="/admin/settings">Profile</Link>
 </nav><form action="/api/admin/logout" method="post"><button className="ghost smallbtn">Log out</button></form></aside><main className="adminmain"><div className="toolbar"><h1>{title}</h1></div>{children}</main></div>
}
