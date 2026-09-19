# NEXA•EDU Product Architecture

The living map of the ecosystem. **Every time something is built, this file is
updated.** Its purpose is to stop any one part being built in ignorance of how
it relates to the rest.

Status legend: **Built** · **Partial** · **Planned**

---

## 1. Product architecture

The product is one ecosystem with role-specific applications over shared
infrastructure. It is not a set of dashboards that happen to share a login.

| # | Area | Status | Notes |
|---|---|---|---|
| 1 | Identity and Access | Partial | Supabase auth, `edu_profiles`, role from database, RLS live |
| 2 | Learner Platform | Partial | Library, lessons, practice, mastery, path, progress built |
| 3 | Teacher Platform | Partial | Day, classes, planner, register, marking, CPD built |
| 4 | Parent Platform | Built | §5 below |
| 5 | School Platform | Partial | Overview, notes vetting, attendance, staff and roll |
| 6 | University Platform | Planned | Phase 8 |
| 7 | TVET Platform | Partial | Skills and competency screens only |
| 8 | Government Platform | Partial | National, region, district drill-down |
| 9 | Employer Platform | Planned | Phase 10 |
| 10 | Content and Curriculum Platform | Partial | Catalogue, syllabus, library |
| 11 | Assessment Platform | Partial | Practice engine, marking; no authoring yet |
| 12 | AI Platform | Partial | Tutor and staff assistants scripted, not grounded |
| 13 | Digital Education Passport | Partial | Timeline, certificates, access control |
| 14 | Career and Opportunity Platform | Built | Career path, universities, opportunities |
| 15 | Certification Platform | Partial | Held certificates, public verification |
| 16 | Communication Platform | Partial | Parent messages only |
| 17 | Analytics Platform | Partial | Rollup views, drill-down |
| 18 | Administration Platform | Planned | Must stay separate from Government (§36) |
| 19 | Data Governance | Planned | Audit, consent, retention (§35) |

---

## 2. The Learner

The central object. Everything else attaches to it.

```
Learner
├── Identity              edu_profiles, edu_students
├── Demographics         edu_students
├── Guardian links       edu_students.guardian_user_id
├── Current institution  edu_enrolments → edu_classes → edu_schools
├── Education history    edu_enrolments across academic years
├── Curriculum           edu_curriculum_indicators
├── Subjects             edu_subjects, edu_class_subjects
├── Lessons              sessions (filed to class + subject)
├── Assignments          edu_assessments
├── Results              edu_assessment_scores
├── Attendance           edu_attendance
├── Skills               planned
├── Projects             planned
├── Achievements         planned
├── Certifications       planned
├── Career goals         planned
└── Passport             derived view over all of the above
```

**Rule.** A learner record is never owned by a school. A school is an
institution *connected to* a learner. Changing school changes the enrolment,
never the identity. This is why `edu_students` exists separately from
`edu_enrolments`, and why `edu_students.user_id` is nullable: a pupil exists
before they have a login.

---

## 3. Identity architecture

**Education Learner ID**, format `EDU-YYYY-NNNN`. It is the platform's
education identity and does **not** replace the Ghana Card.

```
Education Learner ID
├── Official identity reference   optional, Ghana Card when it exists
├── School records
├── Examination records
├── University records
├── TVET records
├── Skills
└── Certifications
```

A child with no Ghana Card must still be able to participate in full.
Identity verification and national ID integration are therefore **separate
services**, not preconditions. Nothing in the platform may require a Ghana Card
to function.

---

## 4. Roles and permissions

Permissions are declared in `src/lib/school/permissions.ts` and are the single
source of truth for what a role may do. **Built before dashboards, on purpose:**
a dashboard that decides its own permissions is a dashboard that disagrees with
the database.

Two enforcement layers, and only one of them counts:

- **UI**: `can(role, capability)` decides what is *shown*.
- **Database**: RLS decides what is *allowed*. Hiding a button stops nobody.

### Roles

`student` · `parent` · `teacher` · `head_teacher` · `school_admin` ·
`circuit_supervisor` · `district_officer` · `regional_officer` · `national`

### Explicit denials

These are written as capabilities the role does not hold, so the refusal is
visible in code rather than implied by absence:

| Role | Cannot |
|---|---|
| Learner | modify official grades, attendance, or institutional records |
| Teacher | alter government statistics, reach learners outside their institution, change official records without permission |
| School | see other institutions' data |
| Government | read an individual learner's private AI conversations |

---

## 5. Parent platform — **Built**

Dashboard shows: attendance, assignments, learning progress, strong areas,
areas needing attention, teacher feedback, upcoming assessments, recommended
activities.

Deliberate constraint: parents see **one interpreted conclusion**, not eight
figures to decode. "Twenty minutes on reading comprehension, twice a week" is
actionable; "English 72%" is not.

---

## Route structure (§57)

```
/school                     current single-mount shell
  ├── learner/…             portal, library, lessons, practice, mastery, path,
  │                         progress, exams, skills, certificates, passport,
  │                         career, universities, opportunities, tutor
  ├── teacher/…             overview, classes, planner, attendance,
  │                         assessments, curriculum, library, ai, cpd
  ├── parent/…              my child, progress, messages, portfolio
  ├── school/…              overview, lesson notes, attendance, people
  └── government/…          national, regions, districts, curriculum, ai
```

Routes are currently a screen switcher inside `SchoolApp.tsx`. Splitting to
real paths is Phase 1 remaining work.

---

## Database

Namespaced `edu_` throughout. This database is shared with two other
applications, so a bare `profiles` or `app_role` collides. Live tables:

`edu_regions` `edu_districts` `edu_circuits` `edu_schools` `edu_profiles`
`edu_academic_years` `edu_terms` `edu_subjects` `edu_classes`
`edu_class_subjects` `edu_students` `edu_enrolments`
`edu_curriculum_indicators` `edu_attendance` `edu_assessments`
`edu_assessment_scores`

Views: `v_edu_national_summary` `v_edu_region_summary` `v_edu_district_summary`
`v_edu_circuit_summary` `v_edu_school_summary` `v_edu_class_subject_coverage`
`v_edu_uncovered_indicators` and three school-level rollups.

All views are `security_invoker = true`, so RLS applies to the caller rather
than the view owner. Without it every officer would see the whole country.

---

## Design system

Deep blue primary, white, slate, light blue. Green success, amber attention,
red critical. Restrained; no gradients as decoration. Sidebar 232px, content
max 1180px. Tokens in `src/styles/school.css`, scoped under `.nb-school` so
Phase 1 (the board) cannot be affected.

---

## Open decisions

- **Ama's level.** Blueprint §5 and §12 place her in **JHS 2** doing linear
  equations; earlier build had her in SHS 2 doing coordinate geometry. Parent
  platform follows the blueprint. Learner platform still needs realigning.
- **Routing.** Screen switcher today, real routes needed.
- **AI grounding.** §50 requires retrieval over approved curriculum before any
  model is connected. Until then the tutor stays scripted rather than wrong.
