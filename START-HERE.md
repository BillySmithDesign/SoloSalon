# Start Here — SoloSalon for Complete Beginners

This guide is for someone who has **never used GitHub, Supabase or Vercel before**.

You do not need to be a programmer.

Allow around 20–30 minutes for your first setup.

## What you are about to do

SoloSalon uses three services:

- **GitHub** stores your copy of the SoloSalon files.
- **Supabase** stores your services, clients, bookings and availability.
- **Vercel** puts SoloSalon online.

You will create a free account with each service.

## 1. Create your GitHub account

1. Go to GitHub and create a free account.
2. Open the SoloSalon repository.
3. Click **Fork** near the top-right.
4. Leave the repository name as `SoloSalon`.
5. Click **Create fork**.

You now have your own copy of SoloSalon.

## 2. Create your Supabase database

1. Create a free Supabase account.
2. Click **New project**.
3. Give it a name such as `My Salon Booking`.
4. Create a strong database password and save it somewhere safe.
5. Choose a region reasonably close to you.
6. Wait for the project to finish creating.

Now open:

**SQL Editor → New query**

In your GitHub SoloSalon repository, open:

```text
supabase/fresh-install.sql
```

Copy the entire file, paste it into the Supabase SQL Editor, then click **Run**.

If Supabase reports success, your database is ready.

## 3. Copy two Supabase values

In Supabase, open the project API settings.

You need:

- **Project URL**
- **service_role key**

Keep the `service_role` key private.

Never paste your real service key into a public GitHub file.

## 4. Create your Vercel account

1. Create a Vercel account.
2. Choose **Continue with GitHub** if offered.
3. Allow Vercel to access your SoloSalon repository.
4. Choose **Add New → Project**.
5. Find your `SoloSalon` repository.
6. Click **Import**.

## 5. Add environment variables

Before deploying, find **Environment Variables** in the Vercel project.

Add these one at a time.

### NEXT_PUBLIC_SUPABASE_URL
Paste your Supabase Project URL.

### SUPABASE_SERVICE_ROLE_KEY
Paste your Supabase service_role key.

### OPENBOOK_SALON_ID
Use exactly:

```text
11111111-1111-1111-1111-111111111111
```

### OPENBOOK_ADMIN_PASSWORD
Choose the password you want to use for SoloSalon admin.

### OPENBOOK_SESSION_SECRET
Enter a long random string of at least 32 characters.

### OPENBOOK_TIMEZONE
For Adelaide:

```text
Australia/Adelaide
```

Use your own timezone if you are elsewhere.

## 6. Deploy

Click **Deploy** in Vercel.

When the build finishes, Vercel will give you an address similar to:

```text
https://my-solosalon.vercel.app
```

## 7. Run the installation check

Open:

```text
https://YOUR-DOMAIN.vercel.app/setup-check
```

You want every item to show a checkmark.

If something fails, see [TROUBLESHOOTING.md](TROUBLESHOOTING.md).

## 8. Configure your salon

Open:

```text
https://YOUR-DOMAIN.vercel.app/admin
```

Log in using the password you entered as `OPENBOOK_ADMIN_PASSWORD`.

Configure your business details, services, prices, durations and working hours.

## 9. Share your booking link

Your public booking page is:

```text
https://YOUR-DOMAIN.vercel.app/book
```

You can use this link on Instagram, Linktree, Facebook, Google Business, email, SMS or your own website.

That's it — you are running your own SoloSalon booking system.
