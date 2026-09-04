# SoloSalon

**Free, open-source online booking for solo stylists, home salons and independent salon operators.**

SoloSalon exists because running a small home salon should not require another expensive monthly software subscription.

The project was created as a practical alternative to the large paid booking platforms used across the hair and beauty industry. It is deliberately smaller and simpler: the goal is not to recreate a giant salon-management suite, but to give an individual operator the essential tools needed to accept online appointments, control availability, manage services and keep basic client details.

SoloSalon is offered as open source to help small home salons and independent operators succeed. You can use it, customise it, host it yourself, fork it and build on it.

## What it includes

- Online customer booking page
- Services, pricing and appointment duration
- Working days and hours
- Blocked time and time off
- Basic client details
- Appointment list and cancellation
- Stylist/business profile
- Social links
- Mobile-friendly admin
- Supabase database
- Vercel deployment
- Booking link suitable for Instagram, Linktree, Facebook and Google Business
- Website embed option

## Who it is for

SoloSalon is designed primarily for home salons, freelance hairdressers, independent stylists, solo beauty businesses and anyone who wants a simple booking system without paying for a large software suite.

## Cost

The SoloSalon software itself is free.

You will need your own Supabase and Vercel accounts. Both offer free tiers that are useful for testing and many small deployments, although their limits and pricing can change.


## Public project homepage

SoloSalon now includes a single-fold marketing homepage at:

```text
/
```

The homepage explains the open-source philosophy and links visitors to:

- the live booking demo at `/book`
- the source code on GitHub

Main routes:

```text
/             Project landing page
/book         Customer booking page / demo
/admin        Stylist admin
/setup-check  Installation checker
```


## Never used GitHub before?

That is completely fine.

**Start here: [START-HERE.md](START-HERE.md)**

The guide assumes you have never used GitHub, Supabase or Vercel before.

## The short version

1. Create a GitHub account.
2. Fork SoloSalon.
3. Create a Supabase project.
4. Paste `supabase/fresh-install.sql` into the Supabase SQL Editor and run it.
5. Create a Vercel account.
6. Import your SoloSalon repository.
7. Add the environment variables from `.env.example`.
8. Deploy.
9. Open `/setup-check`.
10. Open `/admin` and configure your salon.

## Important links after deployment

Customer booking page:

```text
https://YOUR-DOMAIN.vercel.app/book
```

Admin:

```text
https://YOUR-DOMAIN.vercel.app/admin
```

Installation checker:

```text
https://YOUR-DOMAIN.vercel.app/setup-check
```

## Instagram, Linktree and social media

Use your normal booking link:

```text
https://YOUR-DOMAIN.vercel.app/book
```

That can be placed directly into Instagram, Linktree, Facebook, Google Business, SMS messages or email.

## Add SoloSalon to your own website

See [WEBSITE-INTEGRATION.md](WEBSITE-INTEGRATION.md).

## Managed setup — coming soon

A managed setup and hosting option is planned for salon owners who want SoloSalon but would rather have somebody configure and maintain the technical side for them.

The self-hosted open-source version will remain available.

## Philosophy

SoloSalon is intentionally focused.

Large salon platforms already provide payroll, inventory, marketplace discovery, staff commissions, complex reporting and dozens of other features.

SoloSalon focuses on one core job:

**Let a client choose a service, see genuine availability and book quickly.**

## Licence

SoloSalon is licensed under the **Apache License 2.0**.

You may use it personally or commercially, modify it, redistribute it and build upon it.

If you redistribute SoloSalon or use a substantial portion of the project, please retain the included `LICENSE` and `NOTICE` files. Attribution to the SoloSalon project is appreciated.

## Important

SoloSalon is provided as-is. Anyone using it for real customer bookings is responsible for their own privacy obligations, security, backups and compliance with applicable laws.
