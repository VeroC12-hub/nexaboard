# The four interfaces

One platform, four front ends, one set of data underneath. A learner meets the
interface built for them rather than a restyled version of somebody else's.

| Who | File | Shape |
|---|---|---|
| Creche, KG, Basic 1 to 2 | `KidApp` | Phone. Bottom tabs, drawn mascots, pictures carry the meaning, everything spoken on request |
| Basic 3 to JHS 3 | `TeenApp` | Phone. Top bar with points and days, daily goal in XP, weekday rings, subject rows |
| SHS, TVET, university | `ScholarApp` | Desktop. Dark sidebar, progress cards, week strip, recent work with scores. Drawer on a phone |
| Parents and schools | `Learners` | Desktop. Blue bar, a ring per child, who needs attention, and the detail as a table |

`skinFor` in `learner.ts` decides which, and it is the only thing that does.
The router, the home screen, the lesson and the questions all read it, so a
learner cannot be given the kid home screen and then an adult lesson, which is
exactly what happened before it existed.

---

## What is shared, and why that matters

**Everything below the surface.** The syllabus, the attempts, the mastery
model, the plan, the asking channel, the lessons, the questions and the games
are one implementation each.

The lesson and the questions are the clearest case. Four tiers, one set of
logic that streams a lesson, orders it by the plan, requests pictures and marks
answers. A `Page` component swaps the frame and three stylesheets restyle what
is inside it. Forking them per tier would have meant four copies with three of
them quietly rotting, and the fourth being the only one anybody tested.

Points, days learned and badges are the same numbers from the same attempts
through `rewards.ts` in every tier, which is why a learner moving from Basic 2
to Basic 3 keeps their count. A platform that resets a child's points because
they had a birthday has told them the points were never theirs.

---

## Why each one differs

### The youngest cannot read the navigation

Covered in full in `docs/kid-interface.md`. Bottom tabs because a thumb
reaches the bottom of a phone, 56px targets, "8 of 10" rather than 80%, and a
single control that reads whatever screen you are on.

### Basic 3 reads, and knows it

The interface comes down from 18.5px to 16px, the tinted playroom becomes
white with thin borders, and the mascots shrink to markers in circles.

That is not only about reading ability. A nine year old reads a playroom as
being for younger children, and an interface that feels like it is for younger
children is one they will not be seen using. The header carries points and
days because at this age the count is the first thing they check.

There are two places to be, so there is a top bar rather than a tab bar. Tabs
for two destinations are furniture.

### Senior high is as likely to be at a desk

The only tier that is desktop first. By SHS a learner may be at a school
computer, a laboratory machine or a laptop, and a single column of cards wastes
most of a wide screen. The reason a dashboard exists is to put the state of
everything in one glance, and one column cannot.

It still collapses to one column with a drawer, because the same learner checks
it on a phone between lectures.

The reference for this tier carried a course marketplace, an upgrade panel, a
list of instructors and a subscriptions table. None of that is this product:
nothing is for sale, nobody sells courses here, and the tutor is not a person
with a profile. Taking the layout and leaving the shop is the whole job of
reading a reference rather than copying one.

### A parent is answering one question

Not "how is my child doing" but "is anybody struggling, and with what". A
parent with four children and three minutes reads the first two rows.

So whoever needs help most is first, then whoever has gone quiet. The named
difficulty is above the fold and the percentage is in a table below it, because
"Counting backwards keeps going wrong, in Numeracy" is something a parent can
act on tonight and 68% is not.

---

## A bug that had been there a long time

The parent page computed **every** child's progress against `MATHS_JHS2`, the
one course written out in full, whatever they were actually studying.

So a KG child's row reported how they were doing on JHS 2 Mathematics, which is
to say it reported nothing, and the list of what they were finding hard was a
list of objectives they had never been shown. Each child is now read against
their own subjects for their own year, from the syllabus layer, the same way
their own screens are.

Verified with a seeded family of four: Ama in KG 2 shows *"Counting backwards
keeps going wrong, in Numeracy"*, which is a real topic from the real KG 2
syllabus. Under the old code that sentence named a JHS 2 Mathematics
objective.

---

## Faults found in Chrome

Every one of these was found by opening the thing, not by reading it.

| Fault | Cause |
|---|---|
| Every progress bar rendered empty, one measuring 44.8px tall instead of 10px | All five tracks are `<span>`, because they sit inside a `<button>` where a `<div>` is not allowed, and none set `display: block`. An inline element ignores `height` |
| The kid score read `2/3` with a tiny 2 | `.kid-score p` is more specific than `.kid-score-n`, so my own later rule beat my earlier one |
| The mascot sat hard left in a centred card | The app sets `svg { display: block }` globally, and `text-align` does not move a block |
| Back from a lesson stranded a KG learner in the adult topic outline | The lesson's back went to its own outline. When a caller deep-links, back belongs to the caller |
| A General Science learner saw Literature and Economics | Test data, not code: the programme id is `science`, not `general-science`. But it showed that an unresolvable id silently falls back to every subject, so the page now says when the list is not their own timetable |

---

## Not done

- **The lesson page is themed per tier but laid out once.** A scholar reading a
  lesson leaves their dashboard rather than reading inside it, because the
  sidebar is not part of that route. It looks right and it is not the same
  thing as a nested layout.
- **Only the kid tier speaks.** The teen and scholar interfaces have no voice
  control, which is correct for a reader and wrong for a learner in those years
  with a reading difficulty. Nothing in `speak.ts` prevents it.
- **The school tier is the parent tier.** A school with two hundred students
  gets a page designed for a parent with four children: no classes, no
  teachers, no filtering, and a table that will be two hundred rows long.
- **Nothing is generated ahead of anybody.** See issue 24.
