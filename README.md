# SoloSalon v0.3.1

Complete Next.js application.

## Important
This release restores the missing `app/layout.tsx` and imports `app/globals.css`, fixing the unstyled booking page.

## Deploy
1. Replace the repository contents with this package.
2. If you have already run the v0.3 migration, no need to repeat the ALTER statements; the SQL uses `if not exists`.
3. In Supabase SQL Editor run `supabase/migrate-v0.2-to-v0.3.1.sql`.
4. Keep these Vercel environment variables:
   - NEXT_PUBLIC_SUPABASE_URL
   - SUPABASE_SERVICE_ROLE_KEY
   - OPENBOOK_SALON_ID
   - OPENBOOK_TIMEZONE
   - OPENBOOK_ADMIN_PASSWORD
   - OPENBOOK_SESSION_SECRET
5. Commit/push to main and let Vercel redeploy.
