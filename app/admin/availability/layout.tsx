import { AdminShell } from '../../../lib/admin-ui';

export default function AvailabilityLayout({ children }: { children: React.ReactNode }) {
  return <AdminShell title="Availability">{children}</AdminShell>;
}
