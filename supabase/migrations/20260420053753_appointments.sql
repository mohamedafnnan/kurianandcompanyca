-- Appointments table for booking requests
create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  service text not null,
  preferred_date date not null,
  preferred_time text not null,
  notes text,
  created_at timestamptz not null default now()
);

alter table public.appointments enable row level security;

-- Allow anyone (anon visitors) to submit a booking
create policy "Anyone can create appointment"
  on public.appointments
  for insert
  to anon, authenticated
  with check (true);

-- Contact messages
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

create policy "Anyone can create contact message"
  on public.contact_messages
  for insert
  to anon, authenticated
  with check (true);
