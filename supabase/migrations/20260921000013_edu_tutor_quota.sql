-- A limit on who may spend the tutor key, and how much.
--
-- ── The hole this closes ───────────────────────────────────────────────────
--
-- `/api/tutor` takes a POST from anybody, with no account, no token and no
-- counting of any kind, and answers it with a model call billed to
-- ANTHROPIC_API_KEY. Today that is harmless, because the key is not set and
-- the endpoint returns 501. The hour the key is added on Vercel, the address
-- becomes a public, unauthenticated, uncapped way to spend the owner's money,
-- and a short script could run a month's budget through it in an afternoon.
-- Nothing in the application would show it: the learners would see a working
-- tutor and the bill would arrive later.
--
-- So this is not a tidy up. It is the piece that has to exist before the key
-- goes on, and it is why the limit lives in the database rather than in the
-- function: a Vercel function is many instances, any of them cold, and a
-- counter in module memory was measured doing nothing at all. Migration
-- 000006 proves it with numbers: fourteen requests against a limit of twelve
-- all returned 200.
--
-- ── Who is counted ─────────────────────────────────────────────────────────
--
-- `who` is the signed in account when the request carries a session, and a
-- hash of the address when it does not. Learners without an account are real
-- and supported, so anonymous use is allowed and simply gets a smaller
-- allowance. The address is hashed in the endpoint before it arrives here,
-- because an IP is personal data and this table does not need to know it, it
-- only needs to tell one caller from another.
--
-- ── Why two limits ─────────────────────────────────────────────────────────
--
-- A per caller window stops one person hammering it. It does nothing about a
-- thousand callers, or one caller behind a thousand addresses, which is
-- exactly what an abusive script looks like. So there is also a cap on the
-- whole deployment per day, which is the circuit breaker: when it trips the
-- tutor goes quiet, every written lesson keeps working because they are on
-- the device, and the owner finds out from a quiet tutor instead of from an
-- invoice.

create table if not exists public.edu_tutor_call (
  id    bigserial primary key,

  -- The account id, or 'ip:<hash>' for somebody with no account.
  who   text not null,

  -- Which task was asked for: explain, lesson, retell, observe and the rest.
  -- Not used by the limit, and kept because the first question anybody asks
  -- after a spike is what was being generated.
  task  text not null default '',

  at    timestamptz not null default now()
);

create index if not exists edu_tutor_call_who_idx
  on public.edu_tutor_call (who, at desc);
create index if not exists edu_tutor_call_at_idx
  on public.edu_tutor_call (at desc);

-- Row level security on with no policies at all, so every browser request is
-- denied and only the service role reaches it. The same reasoning as
-- edu_signup_throttle: a client that could delete rows could clear its own
-- limit, and a client that could read them would be reading when other people
-- study.
alter table public.edu_tutor_call enable row level security;

-- Record this call and say what it costs the two limits.
--
-- One round trip, with the sweep done on the way through so nothing has to be
-- scheduled. Returns both counts rather than a yes or no, so the endpoint can
-- say which limit was reached and the owner can see how close the day is to
-- the cap without a second query.
create or replace function public.edu_tutor_rate(
  the_who       text,
  the_task      text default '',
  window_minutes int default 60
)
returns table (mine int, today int)
language plpgsql
security definer
set search_path = public
as $$
begin
  delete from public.edu_tutor_call
   where at < now() - interval '2 days';

  insert into public.edu_tutor_call (who, task) values (the_who, the_task);

  select count(*) into mine
    from public.edu_tutor_call
   where who = the_who
     and at > now() - make_interval(mins => window_minutes);

  select count(*) into today
    from public.edu_tutor_call
   where at > now() - interval '24 hours';

  return next;
end;
$$;

revoke all on function public.edu_tutor_rate(text, text, int) from public;
