# 10-minute setup

### Supabase
Create a project at Supabase, then paste the entire contents of `supabase/schema.sql` into SQL Editor and Run.

From Project Settings → API copy:
- Project URL → `NEXT_PUBLIC_SUPABASE_URL`
- service_role key → `SUPABASE_SERVICE_ROLE_KEY`

Never expose the service-role key in client code.

### Local
Copy `.env.example` to `.env.local`, fill the values, then:

```bash
npm install
npm run dev
```

### Vercel
Create a new Vercel project from the repo and add every required variable from `.env.example`.

### Email
Email is optional. With no `RESEND_API_KEY`, bookings still work; email is simply skipped.
