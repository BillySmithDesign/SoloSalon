import { AdminShell } from '../../../lib/admin-ui';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <AdminShell title="Services">{children}</AdminShell>;
}
