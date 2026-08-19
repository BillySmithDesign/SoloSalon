import { NextResponse } from 'next/server';
import { db } from '../../../lib/db';
import { SALON_ID } from '../../../lib/config';

export async function GET() {
  const checks: Record<string, { ok: boolean; message: string }> = {};

  checks.supabaseUrl = {
    ok: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
    message: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Supabase URL configured' : 'Missing NEXT_PUBLIC_SUPABASE_URL',
  };

  checks.serviceKey = {
    ok: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
    message: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'Supabase service key configured' : 'Missing SUPABASE_SERVICE_ROLE_KEY',
  };

  checks.adminPassword = {
    ok: Boolean(process.env.OPENBOOK_ADMIN_PASSWORD),
    message: process.env.OPENBOOK_ADMIN_PASSWORD ? 'Admin password configured' : 'Missing OPENBOOK_ADMIN_PASSWORD',
  };

  checks.sessionSecret = {
    ok: Boolean(process.env.OPENBOOK_SESSION_SECRET),
    message: process.env.OPENBOOK_SESSION_SECRET ? 'Session secret configured' : 'Missing OPENBOOK_SESSION_SECRET',
  };

  if (checks.supabaseUrl.ok && checks.serviceKey.ok) {
    try {
      const client = db();
      const { data: salon, error: salonError } = await client
        .from('salons')
        .select('id,name')
        .eq('id', SALON_ID)
        .maybeSingle();

      checks.salon = {
        ok: Boolean(salon) && !salonError,
        message: salon ? `Salon record found: ${salon.name}` : 'Salon record not found',
      };

      const { error: serviceError } = await client.from('services').select('id').limit(1);

      checks.servicesTable = {
        ok: !serviceError,
        message: serviceError ? 'Services table unavailable' : 'Services table available',
      };
    } catch (error: any) {
      checks.database = {
        ok: false,
        message: error?.message || 'Database check failed',
      };
    }
  }

  const ready = Object.values(checks).every((check) => check.ok);
  return NextResponse.json({ ready, checks });
}
