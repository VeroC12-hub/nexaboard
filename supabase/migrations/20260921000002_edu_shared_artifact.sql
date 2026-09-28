-- One copy of everything that is not about a particular child.
--
-- A storyboard for counting to five, and the film rendered from it, are the
-- same artifact for every learner in Ghana. So is a photograph of two soil
-- types and a clip of rain falling on a hillside. Today each of those is made
-- again from nothing every time somebody opens the topic: on the free route
-- that is one worker, one job at a time, and a learner who wants the film
-- waits several minutes for a file that already exists on forty other
-- devices. NEXAEDU_OPEN_ISSUES.md issues 14, 17 and 24 all describe the same
-- hole, and this is the table that fills it.
--
-- ── Why this is not just a cache ────────────────────────────────────────────
--
-- It is also the claim board that stops a stampede. Forty children in one
-- classroom opening the same topic in the same minute would otherwise queue
-- forty identical jobs behind one worker, and the fortieth child would wait
-- out thirty nine renders of her own film. So a row is inserted BEFORE the
-- work starts, marked pending, and every other device that finds it leaves
-- the topic alone and takes the finished artifact when it lands.
--
-- That is why status lives here rather than the row appearing only once there
-- is something to show. A cache written at the end prevents repeated work
-- tomorrow; a claim written at the start prevents it this minute, which is
-- the failure a classroom actually meets.
--
-- ── What may and may not go in it ───────────────────────────────────────────
--
-- The rule from issue 17: only the lesson and the explanations are genuinely
-- per learner. Everything here is keyed on the syllabus and nothing else, and
-- the client builds these artifacts from a deliberately empty learner brief,
-- so no row can be about a child even by accident. There is no learner
-- column, on purpose, and there never should be: the moment one appears the
-- table has stopped being shareable and every promise in this comment is off.
--
-- Three kinds are held, and a fourth is deliberately absent:
--
--   video         the rendered lesson film, as the url the worker produced,
--                 plus its scene count. Written from the topic alone.
--   illustration  a still with no writing in it, and its rendered url.
--   clip          a few seconds of something happening, and its url.
--
--   figure        NOT cached. A diagram is written by the model from the
--                 lesson text in front of this learner, so its labels can
--                 name the worked example only she was shown. It is also the
--                 one kind that costs nothing to render, needing no GPU and
--                 no renderer at all. Both reasons point the same way, so it
--                 is left out rather than keyed on a topic it is not really a
--                 function of.
--
-- ── Why the key is one text column ──────────────────────────────────────────
--
-- Because the key IS the identity of the artifact, and it has to be
-- insertable with "on conflict do nothing" from a browser, which is how the
-- claim is won without a lock. The parts are kept as their own columns beside
-- it so the table can be read by a person and cleaned up by topic, but
-- nothing ever looks an artifact up by them.

create table if not exists public.edu_shared_artifact (
  -- kind:subject:topic:style, built by `sharedKey` in
  -- src/lib/education/ahead.ts. Nothing in it identifies anybody, and that
  -- can be checked by reading it.
  cache_key   text primary key,

  kind        text not null
              check (kind in ('video', 'illustration', 'clip')),
  subject_id  text not null,
  topic_id    text not null,

  -- One of the five film styles from `storyboard.ts`, decided from the
  -- syllabus's own stage rather than from the learner, so a KG film cannot
  -- come back as a lecture and two learners of one stage share one render.
  style       text not null,

  status      text not null default 'pending'
              check (status in ('pending', 'ready', 'failed')),

  -- The finished thing, in the shape the client already puts on a page: a url
  -- plus scene counts for a film, a whole visual brief plus its url for the
  -- other two. Json because those shapes belong to `visuals.ts`, are still
  -- moving, and because nothing in the database ever looks inside them.
  artifact    jsonb,

  -- When the claim was taken. A pending row older than the client's deadline
  -- belongs to a maker who closed the tab or lost the network, and is offered
  -- again rather than blocking the topic for ever.
  claimed_at  timestamptz not null default now(),
  ready_at    timestamptz,
  created_at  timestamptz not null default now()
);

create index if not exists edu_shared_artifact_topic_idx
  on public.edu_shared_artifact (subject_id, topic_id);

-- ── Who may read and who may write ─────────────────────────────────────────
--
-- Read: anybody, signed in or not. There is nothing in here to protect, and a
-- learner on a shared device with no account is exactly the learner who most
-- needs the film to already exist.
--
-- Write: signed in only. An artifact reaching a classroom with nobody's name
-- against it is the failure issue 15 is about, and an anonymous writer cannot
-- be traced when a bad one does. The consequence, said plainly: a deployment
-- whose learners are still local accounts, which is issue 1, reads this cache
-- and never fills it. That is the right way round.
alter table public.edu_shared_artifact enable row level security;

drop policy if exists edu_shared_artifact_read on public.edu_shared_artifact;
create policy edu_shared_artifact_read
  on public.edu_shared_artifact for select
  to anon, authenticated
  using (true);

drop policy if exists edu_shared_artifact_claim on public.edu_shared_artifact;
create policy edu_shared_artifact_claim
  on public.edu_shared_artifact for insert
  to authenticated
  with check (status = 'pending' and artifact is null);

-- A ready row is immutable, and that is the one thing here worth enforcing in
-- the database.
--
-- It means the first learner to finish an artifact settles it, and no later
-- device can replace a good film with a worse one, or with something a child
-- should not see. A pending row nobody finished, and a failed one, stay
-- writable so the next learner can take the work over.
--
-- What this policy cannot do is stop a signed-in learner writing a bad
-- artifact into a row nobody has claimed yet, because the browser is the only
-- place the artifact exists today. The proper home for that check is the
-- review gate in issue 15, on a serverless function holding the service key.
-- Until that exists this table trusts signed-in learners, and says so here
-- rather than pretending otherwise.
--
-- ── Why an EXPIRED ready row is writable, and a fresh one is not ───────────
--
-- The second half of the `using` clause is load bearing, and leaving it out
-- turns this table from a cache into a permanent obstacle.
--
-- `stillGood` in ahead.ts stops believing a ready row once it is older than
-- SHELF_MS, and returns null so the learner generates her own. If a ready row
-- were immutable for ever, she could never write the fresh artifact back: the
-- row would sit there, stale and unbelieved and unreplaceable, and every
-- learner for the rest of the product's life would pay a pointless round trip
-- to the cache and then render the film anyway. The cache would switch itself
-- off, one topic at a time, twelve hours after each topic was first opened.
--
-- So immutability is scoped to the window in which the artifact is actually
-- trusted. Inside it the first finisher settles the topic and nobody can
-- replace a good film with a worse one, which is the whole point. Outside it
-- the row is expired, the client has already stopped serving it, and letting
-- it be renewed is strictly better than leaving a corpse in the way.
--
-- The interval here MUST be greater than or equal to SHELF_MS in ahead.ts, or
-- there is a window where the client will not serve a row and cannot refresh
-- it either, which is the bug this paragraph exists to prevent.
drop policy if exists edu_shared_artifact_finish on public.edu_shared_artifact;
create policy edu_shared_artifact_finish
  on public.edu_shared_artifact for update
  to authenticated
  using (
    status <> 'ready'
    or ready_at is null
    or ready_at < now() - interval '12 hours'
  )
  with check (true);

-- No delete policy. Nothing in here belongs to anybody, so nobody has
-- standing to remove it, and the housekeeping below runs with the service
-- role instead.

-- ── Housekeeping ───────────────────────────────────────────────────────────
--
-- This was three bare `delete` statements. A migration runs once, so they
-- swept a table that was empty at the time and then never ran again: the
-- comment said "safe to run repeatedly" and nothing ever repeated them. It is
-- a function now, so there is something a schedule or a worker can actually
-- call.
--
-- Nothing calls it yet. That is a deliberate half measure rather than an
-- oversight: pg_cron is not enabled on this project, and the client already
-- refuses to serve anything past its shelf life, so an unswept row wastes
-- storage and never teaches anybody the wrong thing. Correctness does not
-- depend on this running. Only the size of the table does.
--
-- To run it by hand, or from the worker:
--   select public.edu_shared_artifact_sweep();
create or replace function public.edu_shared_artifact_sweep()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  gone integer;
begin
  with swept as (
    delete from public.edu_shared_artifact
     where
       -- Failed a day ago: try the topic again rather than writing it off.
       (status = 'failed' and created_at < now() - interval '1 day')
       -- Claimed and abandoned: the maker closed the tab or lost the network,
       -- and no worker could still be on it after two hours.
       or (status = 'pending' and claimed_at < now() - interval '2 hours')
       -- Expired.
       --
       -- What is stored is a url, and today those urls are not ours:
       -- `/api/render` hands back whatever the render service returned and
       -- nothing is downloaded, which is issue 14, and a rendered film is
       -- still a path on somebody's laptop, which is issue 18. Those urls
       -- expire. Keeping them for ever would turn "the photograph is gone
       -- tomorrow" into "the photograph is gone tomorrow for every learner in
       -- the country", which is worse than having no cache.
       --
       -- A day, against SHELF_MS of twelve hours in ahead.ts, deliberately
       -- double: the client stops trusting a row well before anything deletes
       -- it, so a learner never races this. When the worker uploads to
       -- Supabase Storage and hands back a url we own, this becomes months and
       -- issue 14 closes with it.
       or (status = 'ready' and ready_at < now() - interval '1 day')
    returning 1
  )
  select count(*) into gone from swept;
  return gone;
end;
$$;

-- Not granted to anon or authenticated. A learner has no standing to delete
-- an artifact that belongs to nobody, which is why there is no delete policy
-- above either, and `security definer` would hand her exactly the power that
-- policy withholds.
revoke all on function public.edu_shared_artifact_sweep() from public;

-- Once, now, so the function is known to run rather than merely to compile.
select public.edu_shared_artifact_sweep();
