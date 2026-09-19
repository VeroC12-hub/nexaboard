-- ============================================================================
-- NexaBoard: session RLS lockdown
--
-- HELD BACK ON PURPOSE. Lives in supabase/deferred/ rather than
-- supabase/migrations/ so that `supabase db push` cannot apply it by accident.
-- Move it into migrations/ when the demonstration is over.
--
-- ---------------------------------------------------------------------------
-- WHAT IS STILL OPEN UNTIL THIS RUNS
-- ---------------------------------------------------------------------------
--
-- The current live policies are:
--   sessions:             select using (status = 'active')
--   session_messages:     select using (true)
--   session_participants: select using (true)
--
-- Because RLS cannot see the client's WHERE clause, filtering by join_code in
-- the query provides no protection. Until this migration runs, any anonymous
-- visitor with the project's public anon key can read:
--   * every active session row, whiteboard_state included
--   * every chat message ever sent, with no session scoping at all
--   * every participant name in the database
--
-- That is acceptable for a demonstration with invented data. It is not
-- acceptable once a single real pupil's name is in the database. Do not point
-- a real school at this project before applying this file.
--
-- ---------------------------------------------------------------------------
-- WHAT THIS CHANGES, AND WHAT MUST SHIP WITH IT
-- ---------------------------------------------------------------------------
--
-- Guests get a real identity via Supabase anonymous sign-in, so auth.uid() is
-- populated even for a pupil who typed a code into a box. Participation becomes
-- a row linking that uid to a session, and every policy keys off it. The
-- join_code is consumed only inside join_session(), so knowing a code grants
-- access to exactly one session and never enumerates others.
--
-- BREAKING. The client must change in the same deploy:
--   * Join.tsx does `select ... where join_code = X` to verify the code before
--     joining. That returns zero rows once the open policy is gone. Replace
--     with signInAnonymously() then the join_session() RPC, which returns the
--     session title for the confirmation screen.
--   * Join.tsx inserts into session_participants directly. There is no insert
--     policy afterwards; join_session() is the only way in.
--   * The localStorage participant-id trust model goes away entirely. Identity
--     is the anonymous JWT, and the partial unique index on
--     (session_id, user_id) handles rejoin.
--
-- Prerequisite: migration 003 must already be applied (helpers and RPC).
-- Enable anonymous sign-ins in the Supabase dashboard before deploying.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- remove the open policies
-- ---------------------------------------------------------------------------

drop policy if exists "Anyone can read active sessions"    on sessions;
drop policy if exists "Teachers manage own sessions"       on sessions;
drop policy if exists "Anyone can insert participants"     on session_participants;
drop policy if exists "Anyone can read participants"       on session_participants;
drop policy if exists "Teachers can update participants in their sessions" on session_participants;
drop policy if exists "Participants can update themselves" on session_participants;
drop policy if exists "Anyone can insert messages"         on session_messages;
drop policy if exists "Anyone can read messages"           on session_messages;
drop policy if exists "Anyone can insert board requests"   on board_requests;
drop policy if exists "Anyone can read board requests"     on board_requests;
drop policy if exists "Teachers can update board requests in their sessions" on board_requests;

-- ---------------------------------------------------------------------------
-- sessions
-- ---------------------------------------------------------------------------

drop policy if exists sessions_read on sessions;
create policy sessions_read on sessions
  for select to anon, authenticated
  using (can_view_session(id));

drop policy if exists sessions_insert on sessions;
create policy sessions_insert on sessions
  for insert to authenticated
  with check (
    teacher_id = auth.uid()
    and (school_id is null or is_school_staff(school_id))
  );

drop policy if exists sessions_update on sessions;
create policy sessions_update on sessions
  for update to authenticated
  using (teacher_id = auth.uid())
  with check (teacher_id = auth.uid());

drop policy if exists sessions_delete on sessions;
create policy sessions_delete on sessions
  for delete to authenticated
  using (teacher_id = auth.uid());

-- ---------------------------------------------------------------------------
-- session_participants
--
-- No insert policy by design. Joining goes through join_session() only.
-- ---------------------------------------------------------------------------

drop policy if exists session_participants_read on session_participants;
create policy session_participants_read on session_participants
  for select to anon, authenticated
  using (can_view_session(session_id));

drop policy if exists session_participants_update_self on session_participants;
create policy session_participants_update_self on session_participants
  for update to anon, authenticated
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists session_participants_update_teacher on session_participants;
create policy session_participants_update_teacher on session_participants
  for update to authenticated
  using (owns_session(session_id))
  with check (owns_session(session_id));

-- ---------------------------------------------------------------------------
-- session_messages
-- ---------------------------------------------------------------------------

drop policy if exists session_messages_read on session_messages;
create policy session_messages_read on session_messages
  for select to anon, authenticated
  using (can_view_session(session_id));

drop policy if exists session_messages_insert on session_messages;
create policy session_messages_insert on session_messages
  for insert to anon, authenticated
  with check (
    is_session_participant(session_id) or owns_session(session_id)
  );

-- ---------------------------------------------------------------------------
-- board_requests
-- ---------------------------------------------------------------------------

drop policy if exists board_requests_read on board_requests;
create policy board_requests_read on board_requests
  for select to anon, authenticated
  using (can_view_session(session_id));

drop policy if exists board_requests_insert on board_requests;
create policy board_requests_insert on board_requests
  for insert to anon, authenticated
  with check (is_session_participant(session_id));

drop policy if exists board_requests_update on board_requests;
create policy board_requests_update on board_requests
  for update to authenticated
  using (owns_session(session_id))
  with check (owns_session(session_id));
