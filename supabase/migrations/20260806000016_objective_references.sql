-- ============================================================================
-- Corrective migration 016: curriculum references become real, legacy removed.
--
-- sessions.indicator_codes and edu_assessments.indicator_codes were text[] of
-- codes matched by string against a flat table. That model had two faults at
-- once: no referential integrity, and no version. A code like 'B8.2.1.1.3'
-- matches any curriculum version, so a 2026 result read after a syllabus
-- reform would silently acquire the new meaning.
--
-- Replacing them with references to edu_learning_objectives fixes both. An
-- objective is unique on (curriculum_id, full_code), so pointing at one pins
-- the version permanently. This is why no curriculum_id column was added
-- anywhere: the reference already carries it.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- what a lesson actually covered
-- ---------------------------------------------------------------------------

create table if not exists edu_session_objectives (
  session_id   uuid not null references sessions(id) on delete cascade,
  objective_id uuid not null references edu_learning_objectives(id) on delete restrict,
  primary key (session_id, objective_id)
);

create index if not exists edu_session_objectives_obj_idx
  on edu_session_objectives(objective_id);

create table if not exists edu_assessment_objectives (
  assessment_id uuid not null references edu_assessments(id) on delete cascade,
  objective_id  uuid not null references edu_learning_objectives(id) on delete restrict,
  primary key (assessment_id, objective_id)
);

-- ---------------------------------------------------------------------------
-- backfill
--
-- Every code that resolves to an objective in an active curriculum is carried
-- across. Anything that does not resolve is deliberately left behind rather
-- than invented: an unmatched code was never a real curriculum reference, and
-- silently fabricating one would defeat the point of the change.
-- ---------------------------------------------------------------------------

insert into edu_session_objectives (session_id, objective_id)
select s.id, o.id
from sessions s
cross join lateral unnest(s.indicator_codes) as t(code)
join edu_learning_objectives o on o.full_code = t.code
join edu_curricula c on c.id = o.curriculum_id and c.is_active
on conflict do nothing;

insert into edu_assessment_objectives (assessment_id, objective_id)
select a.id, o.id
from edu_assessments a
cross join lateral unnest(a.indicator_codes) as t(code)
join edu_learning_objectives o on o.full_code = t.code
join edu_curricula c on c.id = o.curriculum_id and c.is_active
on conflict do nothing;

-- The string arrays are the duplicate representation. They go.
alter table sessions        drop column if exists indicator_codes;
alter table edu_assessments drop column if exists indicator_codes;

-- ---------------------------------------------------------------------------
-- views rebuilt on the hierarchy
--
-- Coverage is now objectives taught over objectives due, joined by identity
-- rather than by string. The matching that previously guarded against a typo'd
-- code pushing coverage above 100% is no longer needed: a foreign key cannot
-- reference an objective that does not exist.
-- ---------------------------------------------------------------------------

create or replace view v_edu_class_subject_coverage
with (security_invoker = true) as
select
  cs.school_id,
  cs.class_id,
  cs.offering_id,
  o.subject_id,
  c.level_code,
  count(distinct lo.id)                                          as indicators_total,
  count(distinct lo.id) filter (where taught.hit is not null)     as indicators_taught,
  count(distinct lo.id) filter (
    where t.term_number is not null and lo.expected_period <= t.term_number
  )                                                              as indicators_due,
  count(distinct lo.id) filter (
    where t.term_number is not null
      and lo.expected_period <= t.term_number
      and taught.hit is null
  )                                                              as indicators_behind,
  round(
    100.0 * count(distinct lo.id) filter (where taught.hit is not null)
          / nullif(count(distinct lo.id), 0)
  , 1)                                                           as coverage_pct
from edu_class_subjects cs
join edu_classes c            on c.id = cs.class_id
join edu_subject_offerings o  on o.id = cs.offering_id
left join edu_terms t         on t.school_id = cs.school_id and t.is_current
left join edu_strands str     on str.offering_id = o.id
left join edu_sub_strands ss  on ss.strand_id = str.id
left join edu_topics tp       on tp.sub_strand_id = ss.id
left join edu_learning_objectives lo on lo.topic_id = tp.id
left join lateral (
  select 1 as hit
  from edu_session_objectives so
  join sessions s on s.id = so.session_id
  where so.objective_id = lo.id
    and s.class_id = cs.class_id
  limit 1
) taught on true
group by cs.school_id, cs.class_id, cs.offering_id, o.subject_id, c.level_code;

create or replace view v_edu_uncovered_indicators
with (security_invoker = true) as
select
  cs.school_id,
  cs.class_id,
  c.name            as class_name,
  o.subject_id,
  sub.name          as subject_name,
  lo.full_code      as indicator_code,
  str.name          as strand_name,
  lo.text           as indicator_text,
  lo.expected_period as expected_term
from edu_class_subjects cs
join edu_classes c            on c.id = cs.class_id
join edu_subject_offerings o  on o.id = cs.offering_id
join edu_subjects sub         on sub.id = o.subject_id
join edu_terms t              on t.school_id = cs.school_id and t.is_current
join edu_strands str          on str.offering_id = o.id
join edu_sub_strands ss       on ss.strand_id = str.id
join edu_topics tp            on tp.sub_strand_id = ss.id
join edu_learning_objectives lo on lo.topic_id = tp.id
where lo.expected_period <= t.term_number
  and not exists (
    select 1
    from edu_session_objectives so
    join sessions s on s.id = so.session_id
    where so.objective_id = lo.id
      and s.class_id = cs.class_id
  );

-- v_edu_school_coverage was dropped by the cascade in 015; it reads the
-- rebuilt view unchanged.
create or replace view v_edu_school_coverage
with (security_invoker = true) as
select
  s.id                                          as school_id,
  round(avg(cov.coverage_pct), 1)               as coverage_pct,
  coalesce(sum(cov.indicators_behind), 0)       as indicators_behind,
  count(cov.class_id)                           as class_subjects_tracked
from edu_schools s
left join v_edu_class_subject_coverage cov on cov.school_id = s.id
group by s.id;

-- ---------------------------------------------------------------------------
-- the legacy model goes
--
-- edu_curriculum_indicators was the flat precursor to
-- strand > sub-strand > topic > objective. Nothing references it now.
-- ---------------------------------------------------------------------------

drop table if exists edu_curriculum_indicators;

-- ---------------------------------------------------------------------------
-- RLS on the new join tables
-- ---------------------------------------------------------------------------

alter table edu_session_objectives    enable row level security;
alter table edu_assessment_objectives enable row level security;

drop policy if exists edu_session_objectives_read on edu_session_objectives;
create policy edu_session_objectives_read on edu_session_objectives
  for select to anon, authenticated
  using (edu_can_view_session(session_id));

drop policy if exists edu_session_objectives_write on edu_session_objectives;
create policy edu_session_objectives_write on edu_session_objectives
  for all to authenticated
  using (edu_owns_session(session_id)) with check (edu_owns_session(session_id));

drop policy if exists edu_assessment_objectives_read on edu_assessment_objectives;
create policy edu_assessment_objectives_read on edu_assessment_objectives
  for select to authenticated
  using (exists (select 1 from edu_assessments a
                 where a.id = edu_assessment_objectives.assessment_id
                   and edu_can_access_school(a.school_id)));

drop policy if exists edu_assessment_objectives_write on edu_assessment_objectives;
create policy edu_assessment_objectives_write on edu_assessment_objectives
  for all to authenticated
  using (exists (select 1 from edu_assessments a
                 where a.id = edu_assessment_objectives.assessment_id
                   and edu_is_school_staff(a.school_id)))
  with check (exists (select 1 from edu_assessments a
                      where a.id = edu_assessment_objectives.assessment_id
                        and edu_is_school_staff(a.school_id)));

grant select on v_edu_class_subject_coverage, v_edu_uncovered_indicators,
                v_edu_school_coverage to authenticated;
