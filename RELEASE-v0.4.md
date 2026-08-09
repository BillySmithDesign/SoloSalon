# SoloSalon v0.4

## Critical booking fix
v0.3.1 used `bookings` and `clients.name`, but the existing SoloSalon database uses `appointments` and `clients.full_name`.
That mismatch caused the Confirm appointment button to fail server-side.

v0.4 fixes:
- customer booking insertion
- live availability collision checks
- client creation/update
- visible booking errors/loading states
- success confirmation screen
- admin appointment list and cancellation
- client field compatibility

## Deploy
Replace repo contents with this package, commit and push to `main`.
No new Supabase migration is required for this booking fix if your existing v0.2/v0.3 database is already running.
