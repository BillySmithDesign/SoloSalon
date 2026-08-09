export const SALON_ID=process.env.OPENBOOK_SALON_ID||'11111111-1111-1111-1111-111111111111';
export const TZ=process.env.OPENBOOK_TIMEZONE||'Australia/Adelaide';
export const configured=Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL&&process.env.SUPABASE_SERVICE_ROLE_KEY);
