# NexaBoard: School Platform Build Plan

Written 2026-08-06. Target: a complete school platform that a private school can run on
today, and that Ghana Education Service could standardise on later.

---

## 1. Where we actually are

Built and working:

- Live classroom board (ink, maths via KaTeX, graphs, images, geometry tools, laser pointer, pages)
- Student boards, student work panel, class questions, chat, video call
- Notes editor with pages and multiple documents
- CAD/DXF viewer, code editor, charts
- Session persistence to `sessions.whiteboard_state`

What the data model says about our limits:

```
sessions             teacher_id -> auth.users, join_code, whiteboard_state
session_participants session_id, name, is_active        <-- anonymous, ephemeral
session_messages     session_id, sender_name
board_requests       session_id, participant_id
```

There is no student. There is no class. There is no school. A participant is a name typed
into a box that stops existing when the session ends. Every single thing on the wish list
(textbooks, homework, marks, report cards, GES reporting) needs a learner who persists
across sessions, terms and years. That is the wall we are at.

### Security debt to clear before any real school data lands

Current RLS is demo-grade and would be a breach at scale:

- `"Anyone can read active sessions" on sessions for select using (status = 'active')`
  means any anonymous visitor can read every active session row in the database, including
  `whiteboard_state`, across every school.
- `"Anyone can read messages" on session_messages for select using (true)` has no session
  scoping at all. Every chat message ever sent is world-readable.
- `"Anyone can read participants"` likewise exposes every student name in the system.

This is fine for a demo with join codes. It is disqualifying for a platform holding
children's records. Fixing it is part of Phase A, not a later hardening pass.

---

## 2. The one architectural decision that matters

**Identity and org hierarchy first. Everything else hangs off it.**

If we get this right, features compose. If we get it wrong, every feature after it needs a
rewrite. Proposed spine:

```
district
  circuit
    school (ges_school_code, name, type: basic|shs|private)
      academic_year (2026/2027)
        term (1|2|3)
      class (Basic 7 Gold, SHS 2 Science A)
        enrolment      student  <-> class <-> academic_year
        assignment     teacher  <-> class <-> subject
      subject (from curriculum, not free text)
```

And one `profiles` table keyed to `auth.users` carrying a role:

`student | teacher | head_teacher | circuit_supervisor | district_officer | national | parent`

Rules I would hold to:

1. **Every row that holds school data carries `school_id`.** RLS is then one predicate,
   not a per-table puzzle. Test it with an automated cross-tenant suite, not by eye.
2. **Sessions become lessons.** A lesson belongs to class + subject + date. The board state
   we already save is then automatically filed as that lesson's notes. The teacher does
   nothing extra and the archive builds itself. This is the cheapest big win available to
   us, because the hard part is already built.
3. **Keep join codes for guests.** Demo lessons, visiting facilitators, revision sessions.
   The anonymous path stays, it just stops being the only path.

---

## 3. Curriculum codes: the second decision

Ghana's Standards-Based Curriculum and Common Core Programme are already structured:

```
Strand -> Sub-strand -> Content Standard -> Indicator   (e.g. B7.1.2.1.3)
```

**Tag everything with the indicator code.** Lessons, textbook pages, questions, homework,
video clips, student mistakes. Do it from the first row of content we ingest.

The payoff is that these all become free, rather than separate features:

- Curriculum coverage reports for heads and circuit supervisors ("Basic 8 Maths is 4 weeks behind on Strand 2")
- Remediation ("Kofi fails every question tagged B7.2.1.1.2, here is the lesson and the textbook page")
- Search that actually works
- Auto-generated schemes of work
- BECE/WASSCE readiness scored per indicator

Retrofitting these codes onto thousands of untagged resources later is a project on its
own. Tagging as we ingest costs almost nothing.

---

## 4. Build layers

### Layer 0: Spine (blocking)
Org hierarchy, profiles, roles, enrolment, teaching assignments, academic year and term,
proper RLS with cross-tenant tests. Auth that works without email (see section 6).

### Layer 1: Teaching (extends what exists)
- Lessons filed to class + subject + timetable slot, board state auto-archived
- **Lesson notes, scheme of work, weekly forecast, head teacher vetting.** This is the
  paperwork every Ghanaian teacher already does by hand and hates. It is our adoption
  wedge, not report cards.
- Attendance: auto from who joined the lesson, plus a manual register for offline classes
- Timetable

### Layer 2: Content and textbooks
- Library of textbooks, curriculum documents, past questions, teacher-uploaded material
- Tagged by indicator code
- Download-for-offline with expiry, because PDFs over mobile data is the whole problem
- Per-school and national scopes, so a school's own material stays private

### Layer 3: Assessment
- Question bank tagged by indicator, WAEC-style item types
- Homework and assignments where **the board and the equation editor are the answer surface**.
  We already built the hardest part of this. A student submitting worked algebra as real
  maths rather than a blurry photo is a genuine differentiator.
- Continuous assessment records plus end-of-term exams (weighting configurable per school,
  confirm the current GES ratio before hardcoding anything)
- Auto-computed terminal report cards: subject scores, class position, subject position,
  conduct, interest, attendance out of days open
- BECE and WASSCE past questions by year with readiness scoring

### Layer 4: School administration
- Staff records, register, SPIP support, head teacher dashboard
- Fees and payments: **defer.** Money brings compliance, reconciliation and disputes.
  Do not carry that weight until the academic side is adopted.

### Layer 5: GES rollup
- Circuit supervisor sees their schools, district sees circuits, region sees districts,
  national sees all. Same tables, different RLS scope, no separate product.
- Curriculum coverage, attendance trends, performance, teacher activity
- EMIS-compatible export. Do not try to replace EMIS, feed it.

---

## 5. Non-negotiables for national scale

**Offline-first.** If it does not work on a shared low-end Android on a weak connection in
a rural district, GES cannot standardise on it, no matter how good the board is. PWA,
IndexedDB, a sync queue with conflict resolution. This is a foundation decision, not a
feature. Retrofitting offline is close to a rewrite.

**Data cost is the adoption ceiling.** Measure payload in kilobytes and treat regressions
as bugs. Keep the board on incremental broadcast, never full-state. Pursue zero-rating
with the networks early, it is a commercial conversation with a long lead time.

**Power and devices.** Sessions must survive the tab dying. Assume the teacher's phone is
the only device in the room.

**Child data protection.** Ghana's Data Protection Act 2012 (Act 843) and Data Protection
Commission registration are procurement gates, not nice-to-haves. Data residency,
retention, subject access, parental consent. Worth getting counsel on before we hold real
learner records.

**Multi-tenancy correctness.** One cross-school data leak ends the GES conversation
permanently. Automated RLS tests in CI.

---

## 6. Auth has to change

Supabase email auth does not fit. Many teachers and most basic-school students have no
working email address. Options, in the order I would try them:

1. Phone plus OTP for teachers and heads (SMS cost is real, budget it)
2. School-issued username plus PIN for students, provisioned in bulk by the school, reset
   by the teacher. No email, no SMS cost, works for a Basic 4 pupil.
3. Ghana Card / national learner ID linkage later, if and when GES requires it

Students should not be doing email verification. That flow alone would sink classroom use.

---

## 7. Sequencing, and my actual recommendation

Do not build layers 0 to 5 in order and launch in two years. Pick a wedge.

**Sell one school completely, then sell up the chain.** GES adopts what already works in
schools, it does not adopt decks. A single private or model school in Accra running
end-to-end gives us revenue, real usage data, and the reference that makes the district
conversation possible.

- **Phase A, school in a box:** spine, real RLS, lessons auto-filed, lesson notes and
  vetting, attendance, terminal report cards. Sellable on its own.
- **Phase B:** content library, indicator tagging, homework on the board.
- **Phase C:** assessment engine, BECE and WASSCE prep.
- **Phase D:** circuit, district and national rollup, EMIS export.

Offline-first and the auth change belong in Phase A. They are the two things that are
painful to add later and cheap to add now.

The board is genuinely good and it is our moat. Nothing else in this market lets a teacher
write real mathematics live and have a student answer in real mathematics. Phase A is what
turns that from a tool into a platform.

---

## 8. Outstanding before we start

Four items from the current build are still unverified because the browser extension has
been disconnected: Student Work catch-up, notes pages, multiple documents, and the save
badge on a real session. Worth clearing these before adding a schema this large on top.
