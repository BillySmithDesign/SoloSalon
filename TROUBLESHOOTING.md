# SoloSalon Troubleshooting

## "Supabase is not configured"

Your Vercel environment variables are missing or incorrect.

Check:

```text
NEXT_PUBLIC_SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
```

After changing Vercel environment variables, redeploy the project.

## Booking page loads but has no services

Open:

```text
/setup-check
```

Then confirm the Supabase SQL installation completed successfully.

Also log into `/admin` and confirm your services exist and are enabled.

## Page is completely unstyled

Confirm these files exist:

```text
app/layout.tsx
app/globals.css
```

`app/layout.tsx` must include:

```ts
import './globals.css';
```

## Vercel says "No Next.js version detected"

`package.json` must be at the top level of your GitHub repository.

Also confirm your Vercel Root Directory has not been changed to the wrong folder.

## Admin password does not work

Check:

```text
OPENBOOK_ADMIN_PASSWORD
```

in Vercel Environment Variables, then redeploy.

## I changed something but the site did not update

Open Vercel → Deployments and confirm the latest GitHub commit deployed successfully.

## Booking submission fails

Check `/setup-check` first.

Then confirm the services, clients and appointments tables exist in Supabase and your environment variables are configured.

## Completely stuck?

A managed setup option is planned for users who would prefer someone else to configure and host SoloSalon for them.
