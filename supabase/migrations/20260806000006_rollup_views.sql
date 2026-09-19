-- ============================================================================
-- NexaBoard Phase A, migration 006: rollup views
--
-- Powers the national > region > district > circuit > school > class drill-down.
--
-- ---------------------------------------------------------------------------
-- WHY EVERY VIEW SAYS security_invoker = true
-- ---------------------------------------------------------------------------
--
-- A Postgres view executes with the privileges of the view's OWNER, not the
-- caller. These views are created by the migration role, which owns the
-- underlying tables and is therefore exempt from their RLS policies. A plain
-- view over edu_attendance would hand every caller the edu_attendance of every school
-- in the country, silently, with no policy anywhere looking wrong.
--
-- security_invoker = true (Postgres 15+) makes the view run as the caller, so
-- the policies from migrations 002 and 005 apply normally. A district officer
-- selecting from v_edu_district_summary sees their own edu_districts and nothing else,
-- with no filtering in the view itself and none needed in the client.
--
-- This is the single most important line in the file. If a view is added later
-- without it, the drill-down keeps working and the leak is invisible.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- curriculum coverage, per class and subject
--
-- The taught set is derived from sessions.indicator_codes, matched back against
-- the curriculum rather than counted raw. Matching matters: a typo'd or
-- retired code in a lesson tag would otherwise push coverage above 100% and
-- discredit the whole dashboard in front of the people we least want to
-- discredit it in front of.
-- ---------------------------------------------------------------------------

create or replace view v_edu_class_subject_coverage
with (security_invoker = true) as
select
  cs.school_id,
  cs.class_id,
  cs.subject_id,
  c.level,
  count(distinct ci.code)                                        as indicators_total,
  count(distinct ci.code) filter (where taught.hit is not null)  as indicators_taught,
  -- Due: what the curriculum expected to be covered by the term the school is
  -- currently in. Total alone cannot answer "are they behind", because a class
  -- at 40% in term one is on schedule and a class at 40% in term three is not.
  count(distinct ci.code) filter (
    where t.term_number is not null and ci.expected_term <= t.term_number
  )                                                              as indicators_due,
  count(distinct ci.code) filter (
    where t.term_number is not null
      and ci.expected_term <= t.term_number
      and taught.hit is null
  )                                                              as indicators_behind,
  round(
    100.0 * count(distinct ci.code) filter (where taught.hit is not null)
          / nullif(count(distinct ci.code), 0)
  , 1)                                                           as coverage_pct
from edu_class_subjects cs
join edu_classes c
  on c.id = cs.class_id
left join edu_terms t
  on t.school_id = cs.school_id and t.is_current
left join edu_curriculum_indicators ci
  on ci.subject_id = cs.subject_id
 and ci.level      = c.level
left join lateral (
  select 1 as hit
  from sessions s
  where s.class_id   = cs.class_id
    and s.subject_id = cs.subject_id
    and ci.code = any (s.indicator_codes)
  limit 1
) taught on true
group by cs.school_id, cs.class_id, cs.subject_id, c.level;

-- ---------------------------------------------------------------------------
-- school level, scoped to the school's current term
--
-- Each of these returns exactly one row per school so they can be joined
-- together without fanning out.
-- ---------------------------------------------------------------------------

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

create or replace view v_edu_school_attendance
with (security_invoker = true) as
select
  s.id                                                             as school_id,
  t.id                                                             as term_id,
  count(a.id)                                                      as marks_recorded,
  count(a.id) filter (where a.status in ('present','late'))        as marks_present,
  round(
    100.0 * count(a.id) filter (where a.status in ('present','late'))
          / nullif(count(a.id), 0)
  , 1)                                                             as attendance_pct
from edu_schools s
left join edu_terms t
  on t.school_id = s.id and t.is_current
left join edu_attendance a
  on a.school_id = s.id and a.term_id = t.id
group by s.id, t.id;

create or replace view v_edu_school_performance
with (security_invoker = true) as
select
  s.id                                                       as school_id,
  t.id                                                       as term_id,
  count(sc.id)                                               as scores_recorded,
  round(avg(100.0 * sc.score / nullif(a.max_score, 0)), 1)   as performance_pct
from edu_schools s
left join edu_terms t
  on t.school_id = s.id and t.is_current
left join edu_assessments a
  on a.school_id = s.id and a.term_id = t.id
left join edu_assessment_scores sc
  on sc.assessment_id = a.id and sc.score is not null
group by s.id, t.id;

-- One row per school, everything the school card on a dashboard needs.
create or replace view v_edu_school_summary
with (security_invoker = true) as
select
  s.id                as school_id,
  s.name              as school_name,
  s.ges_code,
  s.school_type,
  s.ownership,
  s.district_id,
  s.circuit_id,
  d.region_id,
  cov.coverage_pct,
  cov.indicators_behind,
  att.attendance_pct,
  perf.performance_pct,
  (select count(*) from edu_enrolments e
    where e.school_id = s.id and e.status = 'active')       as students_enrolled,
  (select count(*) from edu_profiles p
    where p.school_id = s.id and p.is_active
      and p.role in ('teacher','head_teacher'))             as teachers,
  (select count(*) from sessions ss
    where ss.school_id = s.id)                              as lessons_taught
from edu_schools s
left join edu_districts d          on d.id = s.district_id
left join v_edu_school_coverage cov    on cov.school_id  = s.id
left join v_edu_school_attendance att  on att.school_id  = s.id
left join v_edu_school_performance perf on perf.school_id = s.id
where s.is_active;

-- ---------------------------------------------------------------------------
-- circuit, district, region, national
--
-- Each level averages the level below. Averaging school percentages rather
-- than recomputing from raw rows means a 40-pupil school counts the same as a
-- 900-pupil one, which is the right shape for a supervision dashboard: it
-- surfaces the small struggling school instead of burying it.
-- ---------------------------------------------------------------------------

create or replace view v_edu_circuit_summary
with (security_invoker = true) as
select
  cr.id                                     as circuit_id,
  cr.name                                   as circuit_name,
  cr.district_id,
  count(ss.school_id)                       as schools,
  round(avg(ss.coverage_pct), 1)            as coverage_pct,
  round(avg(ss.attendance_pct), 1)          as attendance_pct,
  round(avg(ss.performance_pct), 1)         as performance_pct,
  coalesce(sum(ss.indicators_behind), 0)    as indicators_behind,
  coalesce(sum(ss.students_enrolled), 0)    as students_enrolled
from edu_circuits cr
left join v_edu_school_summary ss on ss.circuit_id = cr.id
group by cr.id, cr.name, cr.district_id;

create or replace view v_edu_district_summary
with (security_invoker = true) as
select
  d.id                                      as district_id,
  d.name                                    as district_name,
  d.region_id,
  count(ss.school_id)                       as schools,
  round(avg(ss.coverage_pct), 1)            as coverage_pct,
  round(avg(ss.attendance_pct), 1)          as attendance_pct,
  round(avg(ss.performance_pct), 1)         as performance_pct,
  coalesce(sum(ss.indicators_behind), 0)    as indicators_behind,
  coalesce(sum(ss.students_enrolled), 0)    as students_enrolled,
  coalesce(sum(ss.teachers), 0)             as teachers
from edu_districts d
left join v_edu_school_summary ss on ss.district_id = d.id
group by d.id, d.name, d.region_id;

create or replace view v_edu_region_summary
with (security_invoker = true) as
select
  r.id                                      as region_id,
  r.name                                    as region_name,
  count(distinct ds.district_id)            as districts,
  coalesce(sum(ds.schools), 0)              as schools,
  round(avg(ds.coverage_pct), 1)            as coverage_pct,
  round(avg(ds.attendance_pct), 1)          as attendance_pct,
  round(avg(ds.performance_pct), 1)         as performance_pct,
  coalesce(sum(ds.indicators_behind), 0)    as indicators_behind,
  coalesce(sum(ds.students_enrolled), 0)    as students_enrolled,
  coalesce(sum(ds.teachers), 0)             as teachers
from edu_regions r
left join v_edu_district_summary ds on ds.region_id = r.id
group by r.id, r.name;

create or replace view v_edu_national_summary
with (security_invoker = true) as
select
  count(distinct rs.region_id)              as regions,
  coalesce(sum(rs.districts), 0)            as districts,
  coalesce(sum(rs.schools), 0)              as schools,
  round(avg(rs.coverage_pct), 1)            as coverage_pct,
  round(avg(rs.attendance_pct), 1)          as attendance_pct,
  round(avg(rs.performance_pct), 1)         as performance_pct,
  coalesce(sum(rs.indicators_behind), 0)    as indicators_behind,
  coalesce(sum(rs.students_enrolled), 0)    as students_enrolled,
  coalesce(sum(rs.teachers), 0)             as teachers
from v_edu_region_summary rs;

-- ---------------------------------------------------------------------------
-- behind-schedule detail
--
-- The question a circuit supervisor actually asks: not "what is coverage" but
-- "which edu_classes are behind, and on what". Lists indicators the curriculum
-- expected by the current term that no lesson has yet been tagged with.
-- ---------------------------------------------------------------------------

create or replace view v_edu_uncovered_indicators
with (security_invoker = true) as
select
  cs.school_id,
  cs.class_id,
  c.name            as class_name,
  cs.subject_id,
  sub.name          as subject_name,
  ci.code           as indicator_code,
  ci.strand_name,
  ci.indicator_text,
  ci.expected_term
from edu_class_subjects cs
join edu_classes  c   on c.id  = cs.class_id
join edu_subjects sub on sub.id = cs.subject_id
join edu_terms    t   on t.school_id = cs.school_id and t.is_current
join edu_curriculum_indicators ci
  on ci.subject_id = cs.subject_id
 and ci.level      = c.level
 and ci.expected_term <= t.term_number
where not exists (
  select 1
  from sessions s
  where s.class_id   = cs.class_id
    and s.subject_id = cs.subject_id
    and ci.code = any (s.indicator_codes)
);

-- ---------------------------------------------------------------------------
-- grants
--
-- RLS still governs what comes back; these grants only make the views callable.
-- ---------------------------------------------------------------------------

grant select on
  v_edu_class_subject_coverage,
  v_edu_school_coverage,
  v_edu_school_attendance,
  v_edu_school_performance,
  v_edu_school_summary,
  v_edu_circuit_summary,
  v_edu_district_summary,
  v_edu_region_summary,
  v_edu_national_summary,
  v_edu_uncovered_indicators
to authenticated;
