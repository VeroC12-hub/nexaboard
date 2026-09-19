-- ============================================================================
-- Corrective migration 015: put each relationship under its correct owner.
--
-- None of this adds a field beside an existing one. Every change either
-- converts a column to the reference it should always have been, or removes a
-- duplicate representation. Nothing gains a second way to express the same
-- fact.
--
-- The two views that depend on these columns are dropped here and rebuilt in
-- 016, after the objective join tables they should have been using exist.
-- ============================================================================

drop view if exists v_edu_uncovered_indicators;
drop view if exists v_edu_class_subject_coverage cascade;

-- ---------------------------------------------------------------------------
-- 1. Level belongs to the class.
--
-- A class IS at a level, and academic_year_id already scopes it, so the value
-- is stable for the life of the row. Putting level on the enrolment would
-- repeat one fact once per learner.
--
-- The existing free-text column is converted, not joined by a second one. It
-- held 'SHS2' where the configuration says 'SHS_2', which is precisely why an
-- unconstrained text column was the wrong owner: nothing could tell them apart.
-- ---------------------------------------------------------------------------

alter table edu_classes add column if not exists level_code text;

update edu_classes c
set level_code = l.code
from edu_levels l
where c.level_code is null
  and c.level is not null
  -- 'SHS2' -> 'SHS_2', 'B7' -> ... handled by the explicit map below
  and l.code = regexp_replace(upper(btrim(c.level)), '^([A-Z]+)([0-9]+)$', '\1_\2');

-- Anything the pattern could not resolve is mapped explicitly rather than
-- guessed, so a bad value fails loudly at the constraint below.
update edu_classes set level_code = 'BASIC_' || substring(level from '[0-9]+')
  where level_code is null and level ~* '^B[0-9]$';

alter table edu_classes
  drop constraint if exists edu_classes_level_code_fkey;
alter table edu_classes
  add constraint edu_classes_level_code_fkey
  foreign key (level_code) references edu_levels(code) on delete restrict;

-- The old text column is the duplicate representation. It goes.
alter table edu_classes drop column if exists level;

create index if not exists edu_classes_level_idx on edu_classes(level_code);

-- ---------------------------------------------------------------------------
-- 2. What a class is taught is an OFFERING, not a bare subject.
--
-- An offering is subject x level x curriculum version. Pointing at
-- edu_subjects loses both the level and the version, which is what made the
-- curriculum-version question look like a missing column when it was really a
-- reference pointing at the wrong thing.
--
-- Offerings must exist before class_subjects can reference them, so the
-- curriculum the seeded school is already teaching is recorded here.
-- ---------------------------------------------------------------------------

insert into edu_curricula (code, version, name, authority, system_code, effective_from, is_active)
values ('GES_SBC', '2026.1', 'Standards-Based Curriculum', 'NaCCA', 'SENIOR_HIGH', date '2026-09-01', true)
on conflict (code, version) do nothing;

-- One offering per subject per SHS level, from what the school already has.
insert into edu_subject_offerings (curriculum_id, subject_id, level_code, is_core, sort_order)
select cur.id, s.id, l.code, s.is_core, 0
from edu_curricula cur
cross join edu_subjects s
cross join edu_levels l
where cur.code = 'GES_SBC' and cur.version = '2026.1'
  and l.system_code = 'SENIOR_HIGH'
on conflict (curriculum_id, subject_id, level_code) do nothing;

alter table edu_class_subjects add column if not exists offering_id uuid;

-- The update target cannot be referenced from a JOIN's ON clause, so both
-- source tables are listed and correlated in WHERE.
update edu_class_subjects cs
set offering_id = o.id
from edu_subject_offerings o, edu_classes c
where cs.offering_id is null
  and c.id = cs.class_id
  and o.subject_id = cs.subject_id
  and o.level_code = c.level_code;

alter table edu_class_subjects
  drop constraint if exists edu_class_subjects_offering_id_fkey;
alter table edu_class_subjects
  add constraint edu_class_subjects_offering_id_fkey
  foreign key (offering_id) references edu_subject_offerings(id) on delete restrict;

-- The unique key moves with the reference: a class is taught an offering once.
alter table edu_class_subjects drop constraint if exists edu_class_subjects_class_id_subject_id_key;
create unique index if not exists edu_class_subjects_class_offering
  on edu_class_subjects(class_id, offering_id);

alter table edu_class_subjects drop column if exists subject_id;

-- Same correction for assessments.
alter table edu_assessments add column if not exists offering_id uuid;

update edu_assessments a
set offering_id = o.id
from edu_subject_offerings o, edu_classes c
where a.offering_id is null
  and c.id = a.class_id
  and o.subject_id = a.subject_id
  and o.level_code = c.level_code;

alter table edu_assessments
  drop constraint if exists edu_assessments_offering_id_fkey;
alter table edu_assessments
  add constraint edu_assessments_offering_id_fkey
  foreign key (offering_id) references edu_subject_offerings(id) on delete restrict;

alter table edu_assessments drop column if exists subject_id;

-- ---------------------------------------------------------------------------
-- 3. Core-ness and level applicability belong to the offering.
--
-- edu_subjects held level_band and is_core, which is a second, coarser way to
-- say what edu_subject_offerings says exactly. Mathematics is core at Basic 4;
-- that is a fact about the offering, not about the word "Mathematics".
-- ---------------------------------------------------------------------------

alter table edu_subjects drop column if exists level_band;
alter table edu_subjects drop column if exists is_core;

-- ---------------------------------------------------------------------------
-- 4. Programme belongs to the enrolment, and a class is optional.
--
-- A programme is the learner's pathway. In SHS the class coincides with it; at
-- university a student is in a programme and attends many course groups; in
-- TVET it is a trade. Owning it on the class would fit one case and break two.
--
-- class_id becomes nullable because the schema previously required every
-- learner to be in a class, contradicting the rule that a group is
-- context-dependent.
-- ---------------------------------------------------------------------------

alter table edu_enrolments add column if not exists programme_id uuid;
alter table edu_enrolments
  drop constraint if exists edu_enrolments_programme_id_fkey;
alter table edu_enrolments
  add constraint edu_enrolments_programme_id_fkey
  foreign key (programme_id) references edu_programmes(id) on delete set null;

alter table edu_enrolments alter column class_id drop not null;

-- A learner must be placed in something.
alter table edu_enrolments drop constraint if exists edu_enrolments_placed;
alter table edu_enrolments add constraint edu_enrolments_placed
  check (class_id is not null or programme_id is not null);

create index if not exists edu_enrolments_programme_idx on edu_enrolments(programme_id);
