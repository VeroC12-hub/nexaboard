-- Somewhere to count sign up attempts that survives the next request.
--
-- ── Why the in-memory version did not work ─────────────────────────────────
--
-- `api/signup.js` holds the service key, because creating a learner with no
-- email address needs the Admin API, and the Admin API is not subject to the
-- per IP limits Supabase applies to ordinary sign ups. So the endpoint has to
-- do its own counting.
--
-- It counted in a module level Map, and that was measured doing nothing at
-- all: fourteen consecutive requests against a limit of twelve all returned
-- 200. Two separate reasons, and each one is enough on its own.
--
--   In development, `tools/vite-api.mjs` imports the handler fresh on every
--   request, by design, so that editing a prompt and asking again shows the
--   new wording. A module level variable therefore begins every request empty.
--
--   In production, a Vercel function is many instances and any of them may be
--   cold. State in one instance's memory is invisible to the next request and
--   gone after an idle period.
--
-- A limiter that does not limit is worse than no limiter, because the comment
-- above it tells the next reader the endpoint is protected. So the counter
-- moves somewhere both instances and restarts can see.
--
-- ── On storing an address at all ───────────────────────────────────────────
--
-- An IP address identifies a person more often than not, so this table holds
-- personal data and is treated that way: nothing else is recorded with it, no
-- name, no handle, no outcome, so a row cannot be tied back to an account or
-- to a child. Rows are deleted after an hour, which is six times the window
-- they are consulted over and the shortest retention the sweep can guarantee.
--
-- Storing the address hashed was considered and rejected as false comfort: the
-- space of IPv4 addresses is small enough to reverse a plain hash of one by
-- brute force in seconds, so a hash here would look like protection without
-- being any. Short retention is the honest control.

create table if not exists public.edu_signup_throttle (
  id  bigserial primary key,
  ip  text not null,
  at  timestamptz not null default now()
);

create index if not exists edu_signup_throttle_idx
  on public.edu_signup_throttle (ip, at desc);

-- Nobody but the service role.
--
-- Row level security is on with NO policies at all, which denies every
-- authenticated and anonymous request by default. The service role bypasses
-- RLS, so `api/signup.js` reaches it and a browser never can. That matters
-- more here than on most tables: a client that could delete rows could clear
-- its own limit, and a client that could read them would be reading other
-- people's addresses.
alter table public.edu_signup_throttle enable row level security;

-- Delete attempts older than an hour, and return how many are left for this
-- address inside the window.
--
-- One round trip rather than three, and it does the sweep on the way through
-- so nothing has to be scheduled. `security definer` because the caller is
-- already the service role, and pinning the search path is the standard
-- precaution for a definer function regardless of who calls it today.
create or replace function public.edu_signup_rate(
  the_ip text,
  window_minutes int default 10
)
returns int
language plpgsql
security definer
set search_path = public
as $$
declare
  n int;
begin
  delete from public.edu_signup_throttle
   where at < now() - interval '1 hour';

  insert into public.edu_signup_throttle (ip) values (the_ip);

  select count(*) into n
    from public.edu_signup_throttle
   where ip = the_ip
     and at > now() - make_interval(mins => window_minutes);

  return n;
end;
$$;

-- Not reachable from a browser. The endpoint calls it with the service key.
revoke all on function public.edu_signup_rate(text, int) from public;
