# OpenBook Salon MVP v0.2

A conversion-first, open-source salon appointment booking MVP.

## What works
- Customer booking: category → service → date → available time → details → confirmation.
- Real availability from working hours, appointment duration, service buffers, blocks and existing bookings.
- PostgreSQL database-level overlap protection prevents race-condition double bookings.
- Salon admin login.
- Admin calendar + cancellation.
- Services: add/manage basic services.
- Availability: regular hours + blocked time.
- Client list.
- Salon settings and optional client/salon booking emails via Resend.
- Secure customer cancellation link.
- Schema is `salon_id`-scoped from day one.

## Set up
1. Create a free Supabase project.
2. Open Supabase SQL Editor and run `supabase/schema.sql`.
3. Copy `.env.example` to `.env.local` and add your Supabase URL/service-role key.
4. Set `OPENBOOK_ADMIN_PASSWORD` and a long random `OPENBOOK_SESSION_SECRET`.
5. Optional: add `RESEND_API_KEY`.
6. `npm install`
7. `npm run dev`
8. Customer: `/book`
9. Salon: `/admin`

## Deployment
Deploy to Vercel and add the same environment variables.

## MVP security model
The browser never receives the Supabase service-role key. Public booking and admin mutations run through server-side Next.js routes. Admin access is a signed HTTP-only cookie protected by the configured single-owner password.

## Still intentionally out of scope
Payments, POS, payroll, stock, SMS, reporting suite, multi-staff/resource scheduling, memberships and product sales.

## Next product milestone
Polish the admin calendar, add edit/reschedule from admin, Square one-time importer, and reusable embed mode for a salon's existing website.
