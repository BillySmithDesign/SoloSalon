# SoloSalon Deployment Reference

For a complete beginner-friendly walkthrough, use [START-HERE.md](START-HERE.md).

## New installation

Run this file in the Supabase SQL Editor:

```text
supabase/fresh-install.sql
```

## Environment variables

Required:

```text
NEXT_PUBLIC_SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
OPENBOOK_SALON_ID
OPENBOOK_ADMIN_PASSWORD
OPENBOOK_SESSION_SECRET
OPENBOOK_TIMEZONE
```

## Local build

```bash
npm install
npm run build
```

## Main routes

```text
/book
/admin
/setup-check
```
