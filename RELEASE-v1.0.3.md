# SoloSalon v1.0.3

Branding, sharing and trust-marker release.

## Added
- SoloSalon favicon
- Open Graph/social sharing card matching the existing cream/brown landing page
- Canonical metadata for https://solosalon.vercel.app/
- Twitter/social metadata
- GitHub trust marker
- Vercel trust marker

## Build fix
This is a complete application package and includes `app/globals.css`, so the root layout import resolves correctly.

## Database
No Supabase migration is required.

## OG image fix
- Added a real static `public/og-image.png` (1200×630)
- Metadata now references `/og-image.png` directly
