SoloSalon build fix

Copy the app/ folder from this ZIP over the app/ folder in your SoloSalon repo.

This fixes the Next.js 16 error caused by client admin pages importing lib/admin-ui.tsx, which imports server-only next/headers.

After copying:
1. Commit and push to main.
2. Vercel should redeploy automatically.
3. Send the next build log if anything else fails.
