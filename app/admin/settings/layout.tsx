import { AdminShell } from '../../../lib/admin-ui';

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return <AdminShell title="Settings">{children}</AdminShell>;
}
