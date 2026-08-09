create extension if not exists btree_gist;

create table if not exists salons (
  id uuid primary key,
  slug text unique not null,
  name text not null,
  email text,
  phone text,
  timezone text not null default 'Australia/Adelaide',
  booking_window_days int not null default 60,
  slot_interval_minutes int not null default 15,
  client_confirmation_enabled boolean not null default true,
  salon_notification_enabled boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  salon_id uuid not null references salons(id) on delete cascade,
  category text not null default 'Services',
  name text not null,
  description text not null default '',
  duration_minutes int not null check (duration_minutes > 0),
  price_cents int,
  buffer_before_minutes int not null default 0,
  buffer_after_minutes int not null default 0,
  active boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists working_hours (
  id uuid primary key default gen_random_uuid(),
  salon_id uuid not null references salons(id) on delete cascade,
  weekday int not null check (weekday between 0 and 6),
  start_time time,
  end_time time,
  enabled boolean not null default true,
  unique(salon_id, weekday)
);

create table if not exists blocked_times (
  id uuid primary key default gen_random_uuid(),
  salon_id uuid not null references salons(id) on delete cascade,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  label text not null default 'Blocked',
  check (ends_at > starts_at)
);

create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  salon_id uuid not null references salons(id) on delete cascade,
  full_name text not null,
  email text,
  phone text,
  notes text not null default '',
  created_at timestamptz not null default now()
);

create unique index if not exists clients_email_unique
on clients(salon_id, lower(email)) where email is not null and email <> '';

create table if not exists appointments (
  id uuid primary key default gen_random_uuid(),
  salon_id uuid not null references salons(id) on delete cascade,
  service_id uuid not null references services(id),
  client_id uuid not null references clients(id),
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  status text not null default 'booked' check (status in ('booked','cancelled')),
  cancellation_token uuid not null default gen_random_uuid(),
  notes text not null default '',
  created_at timestamptz not null default now(),
  check (ends_at > starts_at)
);

alter table appointments drop constraint if exists appointments_no_overlap;
alter table appointments add constraint appointments_no_overlap
exclude using gist (
  salon_id with =,
  tstzrange(starts_at, ends_at, '[)') with &&
) where (status = 'booked');

create index if not exists appointments_salon_starts_idx on appointments(salon_id, starts_at);
create index if not exists blocked_times_salon_starts_idx on blocked_times(salon_id, starts_at);

insert into salons(id,slug,name,email,phone,timezone)
values('11111111-1111-1111-1111-111111111111','demo','OpenBook Demo Salon','owner@example.com','0400 000 000','Australia/Adelaide')
on conflict(id) do nothing;

insert into services(salon_id,category,name,description,duration_minutes,price_cents,sort_order)
select '11111111-1111-1111-1111-111111111111','Blonde','Full Head Foils & Toner','Bright, dimensional blonde with toner and finish.',135,25500,1
where not exists(select 1 from services where salon_id='11111111-1111-1111-1111-111111111111');

insert into services(salon_id,category,name,description,duration_minutes,price_cents,sort_order)
select '11111111-1111-1111-1111-111111111111','Blonde','Lived-in Half Head Foils','Soft, lower-maintenance brightness and dimension.',120,21000,2
where not exists(select 1 from services where salon_id='11111111-1111-1111-1111-111111111111' and name='Lived-in Half Head Foils');

insert into services(salon_id,category,name,description,duration_minutes,price_cents,sort_order)
select '11111111-1111-1111-1111-111111111111','Cut & Style','Cut & Blow Dry','Consultation, tailored cut and polished finish.',60,9500,3
where not exists(select 1 from services where salon_id='11111111-1111-1111-1111-111111111111' and name='Cut & Blow Dry');

insert into services(salon_id,category,name,description,duration_minutes,price_cents,sort_order)
select '11111111-1111-1111-1111-111111111111','Extensions','Hair Extension Consultation','Discuss length, volume, colour match and extension options.',30,0,4
where not exists(select 1 from services where salon_id='11111111-1111-1111-1111-111111111111' and name='Hair Extension Consultation');

insert into working_hours(salon_id,weekday,start_time,end_time,enabled) values
('11111111-1111-1111-1111-111111111111',0,null,null,false),
('11111111-1111-1111-1111-111111111111',1,null,null,false),
('11111111-1111-1111-1111-111111111111',2,'09:00','17:00',true),
('11111111-1111-1111-1111-111111111111',3,'09:00','16:00',true),
('11111111-1111-1111-1111-111111111111',4,'09:00','17:00',true),
('11111111-1111-1111-1111-111111111111',5,null,null,false),
('11111111-1111-1111-1111-111111111111',6,null,null,false)
on conflict(salon_id,weekday) do nothing;
