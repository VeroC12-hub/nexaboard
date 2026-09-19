-- ============================================================================
-- NexaBoard Phase A, migration 005: curriculum, edu_attendance and assessment
--
-- These three tables are what every ministry-facing number is computed from.
-- Curriculum coverage in particular is the headline metric: "is Basic 8
-- Mathematics in this district actually being taught, and how far behind is
-- it", which is a question the ministry currently cannot answer without a
-- termly paper return.
--
-- Additive. Nothing here changes existing behaviour.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- curriculum indicators
--
-- Ghana's Standards-Based Curriculum nests as
--   Strand > Sub-strand > Content Standard > Indicator
-- and the indicator code encodes the whole path, e.g. B7.1.2.1.3 reads as
-- level B7, strand 1, sub-strand 2, content standard 1, indicator 3.
--
-- Held flat with denormalised parent names rather than as a four-level
-- self-referencing tree. Every query we actually run is "which indicators for
-- this subject and level" or "roll these up by strand", both of which are one
-- scan on a flat table and a recursive CTE on a tree. The hierarchy is fully
-- recoverable from the code, so nothing is lost.
-- ---------------------------------------------------------------------------

create table if not exists edu_curriculum_indicators (
  id                    uuid primary key default gen_random_uuid(),
  subject_id            uuid not null references edu_subjects(id) on delete cascade,
  level                 text not null,          -- 'B7', 'SHS2'
  code                  text not null unique,   -- 'B7.1.2.1.3'
  strand_no             int,
  strand_name           text,
  sub_strand_no         int,
  sub_strand_name       text,
  content_standard_code text,
  content_standard      text,
  indicator_text        text not null,
  -- Which term the curriculum expects this to be taught in. Drives the
  -- "behind schedule" calculation rather than raw percentage complete.
  expected_term         int check (expected_term between 1 and 3),
  created_at            timestamptz not null default now()
);

create index if not exists curriculum_subject_level_idx
  on edu_curriculum_indicators(subject_id, level);
create index if not exists curriculum_term_idx
  on edu_curriculum_indicators(subject_id, level, expected_term);

-- ---------------------------------------------------------------------------
-- edu_attendance
--
-- session_id is nullable and populated automatically when a pupil joins a
-- lesson, so an online class registers itself. A teacher taking a paper
-- register offline records the same rows with session_id null. Both feed the
-- same "days present out of days open" figure on the terminal report.
-- ---------------------------------------------------------------------------

create table if not exists edu_attendance (
  id               uuid primary key default gen_random_uuid(),
  school_id        uuid not null references edu_schools(id) on delete cascade,
  class_id         uuid not null references edu_classes(id) on delete cascade,
  student_id       uuid not null references edu_students(id) on delete cascade,
  term_id          uuid references edu_terms(id) on delete set null,
  session_id       uuid references sessions(id) on delete set null,
  attendance_date  date not null default current_date,
  status           text not null default 'present'
                     check (status in ('present','absent','late','excused')),
  recorded_by      uuid references edu_profiles(id) on delete set null,
  created_at       timestamptz not null default now(),
  -- One authoritative mark per pupil per day. A pupil who joins two lessons in
  -- a day is present once, not twice.
  unique (student_id, attendance_date)
);

create index if not exists attendance_school_idx on edu_attendance(school_id);
create index if not exists attendance_class_date_idx on edu_attendance(class_id, attendance_date);
create index if not exists attendance_term_idx on edu_attendance(term_id);

-- ---------------------------------------------------------------------------
-- edu_assessments
--
-- Covers everything from a class exercise to the end-of-term paper. `weight`
-- lets a school configure its own continuous-assessment split rather than
-- having a national ratio hardcoded, because that ratio is a policy decision
-- that changes and differs between basic and senior high.
-- ---------------------------------------------------------------------------

create table if not exists edu_assessments (
  id              uuid primary key default gen_random_uuid(),
  school_id       uuid not null references edu_schools(id) on delete cascade,
  class_id        uuid not null references edu_classes(id) on delete cascade,
  subject_id      uuid not null references edu_subjects(id) on delete restrict,
  term_id         uuid references edu_terms(id) on delete set null,
  session_id      uuid references sessions(id) on delete set null,
  title           text not null,
  kind            text not null default 'class_exercise'
                    check (kind in ('class_exercise','homework','test','project','exam')),
  max_score       numeric(6,2) not null default 100 check (max_score > 0),
  -- Relative contribution to the continuous-assessment component.
  weight          numeric(5,2) not null default 1 check (weight >= 0),
  assessed_on     date not null default current_date,
  indicator_codes text[] not null default '{}',
  created_by      uuid references edu_profiles(id) on delete set null,
  created_at      timestamptz not null default now()
);

create index if not exists assessments_school_idx on edu_assessments(school_id);
create index if not exists assessments_class_idx  on edu_assessments(class_id, subject_id);
create index if not exists assessments_term_idx   on edu_assessments(term_id);

create table if not exists edu_assessment_scores (
  id             uuid primary key default gen_random_uuid(),
  school_id      uuid not null references edu_schools(id) on delete cascade,
  assessment_id  uuid not null references edu_assessments(id) on delete cascade,
  student_id     uuid not null references edu_students(id) on delete cascade,
  score          numeric(6,2) check (score >= 0),
  remark         text,
  marked_by      uuid references edu_profiles(id) on delete set null,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now(),
  unique (assessment_id, student_id)
);

create index if not exists assessment_scores_school_idx  on edu_assessment_scores(school_id);
create index if not exists assessment_scores_student_idx on edu_assessment_scores(student_id);

drop trigger if exists assessment_scores_set_updated_at on edu_assessment_scores;
create trigger assessment_scores_set_updated_at before update on edu_assessment_scores
  for each row execute function edu_set_updated_at();

-- A score cannot exceed the assessment it belongs to. Enforced by trigger
-- because a check constraint cannot reach another table.
create or replace function edu_check_score_within_max()
returns trigger
language plpgsql
as $$
declare
  v_max numeric;
begin
  if new.score is null then
    return new;
  end if;
  select max_score into v_max from edu_assessments where id = new.assessment_id;
  if new.score > v_max then
    raise exception 'score % exceeds maximum % for this assessment', new.score, v_max
      using errcode = '23514';
  end if;
  return new;
end;
$$;

drop trigger if exists assessment_scores_within_max on edu_assessment_scores;
create trigger assessment_scores_within_max
  before insert or update on edu_assessment_scores
  for each row execute function edu_check_score_within_max();

-- ---------------------------------------------------------------------------
-- RLS
--
-- Same two rules as migration 002: staff and officers go through
-- edu_can_access_school(); pupils and guardians get narrow, explicit access to
-- their own rows only.
-- ---------------------------------------------------------------------------

alter table edu_curriculum_indicators enable row level security;
alter table edu_attendance            enable row level security;
alter table edu_assessments           enable row level security;
alter table edu_assessment_scores     enable row level security;

-- Curriculum is national reference data.
drop policy if exists curriculum_read on edu_curriculum_indicators;
create policy curriculum_read on edu_curriculum_indicators
  for select to authenticated using (true);

drop policy if exists curriculum_write on edu_curriculum_indicators;
create policy curriculum_write on edu_curriculum_indicators
  for all to authenticated using (edu_is_national()) with check (edu_is_national());

-- edu_attendance -----------------------------------------------------------------

drop policy if exists attendance_read_staff on edu_attendance;
create policy attendance_read_staff on edu_attendance
  for select to authenticated using (edu_can_access_school(school_id));

drop policy if exists attendance_read_self on edu_attendance;
create policy attendance_read_self on edu_attendance
  for select to authenticated
  using (
    exists (
      select 1 from edu_students st
      where st.id = edu_attendance.student_id
        and (st.user_id = auth.uid() or st.guardian_user_id = auth.uid())
    )
  );

-- Class teachers and subject teachers record edu_attendance; heads can correct it.
drop policy if exists attendance_write on edu_attendance;
create policy attendance_write on edu_attendance
  for all to authenticated
  using (edu_teaches_class(class_id) or edu_can_manage_school(school_id))
  with check (edu_teaches_class(class_id) or edu_can_manage_school(school_id));

-- edu_assessments ----------------------------------------------------------------

drop policy if exists assessments_read_staff on edu_assessments;
create policy assessments_read_staff on edu_assessments
  for select to authenticated using (edu_can_access_school(school_id));

-- A pupil sees the edu_assessments set for their own class, so they know what work
-- exists. Scores are governed separately below.
drop policy if exists assessments_read_student on edu_assessments;
create policy assessments_read_student on edu_assessments
  for select to authenticated using (class_id = edu_auth_student_class_id());

drop policy if exists assessments_write on edu_assessments;
create policy assessments_write on edu_assessments
  for all to authenticated
  using (edu_teaches_class(class_id) or edu_can_manage_school(school_id))
  with check (edu_teaches_class(class_id) or edu_can_manage_school(school_id));

-- edu_assessment_scores ----------------------------------------------------------
--
-- Deliberately narrower than edu_assessments. A pupil reads their OWN score only,
-- never a classmate's, so nothing here can be used to reconstruct a class
-- ranking that the school has not chosen to publish.

drop policy if exists assessment_scores_read_staff on edu_assessment_scores;
create policy assessment_scores_read_staff on edu_assessment_scores
  for select to authenticated using (edu_can_access_school(school_id));

drop policy if exists assessment_scores_read_self on edu_assessment_scores;
create policy assessment_scores_read_self on edu_assessment_scores
  for select to authenticated
  using (
    exists (
      select 1 from edu_students st
      where st.id = edu_assessment_scores.student_id
        and (st.user_id = auth.uid() or st.guardian_user_id = auth.uid())
    )
  );

drop policy if exists assessment_scores_write on edu_assessment_scores;
create policy assessment_scores_write on edu_assessment_scores
  for all to authenticated
  using (
    exists (
      select 1 from edu_assessments a
      where a.id = edu_assessment_scores.assessment_id
        and (edu_teaches_class(a.class_id) or edu_can_manage_school(a.school_id))
    )
  )
  with check (
    exists (
      select 1 from edu_assessments a
      where a.id = edu_assessment_scores.assessment_id
        and (edu_teaches_class(a.class_id) or edu_can_manage_school(a.school_id))
    )
  );
