-- NexaBoard Database Schema
-- Run this in your Supabase SQL Editor

-- Sessions table
create table if not exists sessions (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid references auth.users(id) on delete cascade not null,
  title text not null,
  subject text default 'General',
  join_code text unique not null,
  status text default 'active' check (status in ('active', 'ended')),
  whiteboard_state jsonb,
  created_at timestamptz default now(),
  ended_at timestamptz
);

-- Session participants (students - anonymous)
create table if not exists session_participants (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references sessions(id) on delete cascade not null,
  name text not null,
  is_active boolean default true,
  has_board_access boolean default false,
  hand_raised boolean default false,
  joined_at timestamptz default now()
);

-- Chat messages
create table if not exists session_messages (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references sessions(id) on delete cascade not null,
  participant_id uuid references session_participants(id) on delete set null,
  sender_name text not null,
  is_teacher boolean default false,
  content text not null,
  created_at timestamptz default now()
);

-- Board access requests
create table if not exists board_requests (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references sessions(id) on delete cascade not null,
  participant_id uuid references session_participants(id) on delete cascade not null,
  participant_name text not null,
  status text default 'pending' check (status in ('pending', 'granted', 'denied')),
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table sessions enable row level security;
alter table session_participants enable row level security;
alter table session_messages enable row level security;
alter table board_requests enable row level security;

-- Sessions policies (teachers manage their own, anyone can read active ones by join_code)
create policy "Teachers manage own sessions"
  on sessions for all
  using (auth.uid() = teacher_id);

create policy "Anyone can read active sessions"
  on sessions for select
  using (status = 'active');

-- Participants policies (open for students to join)
create policy "Anyone can insert participants"
  on session_participants for insert
  with check (true);

create policy "Anyone can read participants"
  on session_participants for select
  using (true);

create policy "Teachers can update participants in their sessions"
  on session_participants for update
  using (
    exists (
      select 1 from sessions
      where sessions.id = session_participants.session_id
      and sessions.teacher_id = auth.uid()
    )
  );

create policy "Participants can update themselves"
  on session_participants for update
  using (id::text = current_setting('request.jwt.claims', true)::json->>'participant_id');

-- Messages policies
create policy "Anyone can insert messages"
  on session_messages for insert
  with check (true);

create policy "Anyone can read messages"
  on session_messages for select
  using (true);

-- Board requests policies
create policy "Anyone can insert board requests"
  on board_requests for insert
  with check (true);

create policy "Anyone can read board requests"
  on board_requests for select
  using (true);

create policy "Teachers can update board requests in their sessions"
  on board_requests for update
  using (
    exists (
      select 1 from sessions
      where sessions.id = board_requests.session_id
      and sessions.teacher_id = auth.uid()
    )
  );

-- Enable realtime for all tables
alter publication supabase_realtime add table sessions;
alter publication supabase_realtime add table session_participants;
alter publication supabase_realtime add table session_messages;
alter publication supabase_realtime add table board_requests;
