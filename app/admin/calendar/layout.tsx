import { AdminShell } from '../../../lib/admin-ui';

export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return <AdminShell title="Calendar">{children}</AdminShell>;
}
