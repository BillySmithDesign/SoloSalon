alter table salons add column if not exists stylist_name text;
alter table salons add column if not exists instagram_url text;
alter table salons add column if not exists facebook_url text;
alter table salons add column if not exists tiktok_url text;
alter table salons add column if not exists location_text text;
alter table salons add column if not exists profile_image_url text;
alter table salons add column if not exists booking_message text;
alter table salons add column if not exists onboarding_complete boolean not null default false;
