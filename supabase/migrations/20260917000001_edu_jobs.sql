-- Queue for the NEXA•EDU tutor.
--
-- A learner's page inserts a job, the worker on a machine you own claims it,
-- runs it through Claude Code on your own subscription, and writes the answer
-- back. Supabase is used rather than serverless memory because Vercel runs
-- many instances, so an in-memory queue loses jobs between the browser and the
-- worker.
--
-- This is what lets the hosted site teach with no API key on it.

create table if not exists public.edu_jobs (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  claimed_at  timestamptz,
  finished_at timestamptz,

  status      text not null default 'pending'
              check (status in ('pending', 'running', 'done', 'error')),

  -- explain, hint, method, lesson, questions, figure, illustration, clip,
  -- storyboard or observe
  task        text,
  subject     text,

  -- Only the video jobs use these. The worker renders a storyboard on its own
  -- machine and needs the style and the topic title to do it, and nothing else
  -- about the learner.
  style       text,
  topic_title text,

  -- The whole prompt, assembled by api/queue.js. The worker runs it and knows
  -- nothing about learners, so nothing here has to be interpreted twice.
  system      text,
  instruction text,

  answer      text
);

create index if not exists edu_jobs_pending_idx
  on public.edu_jobs (created_at)
  where status = 'pending';

-- Nothing in the browser talks to this table. The site reaches it with the
-- service key from a serverless function, so row level security stays on with
-- no policies, which denies every anonymous request.
alter table public.edu_jobs enable row level security;

-- Housekeeping. A finished explanation has already been read, and the question
-- text inside it is a learner's work, so it does not sit here indefinitely.
-- Safe to run repeatedly.
delete from public.edu_jobs
 where created_at < now() - interval '1 day';
