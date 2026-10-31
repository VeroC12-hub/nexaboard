# Loading real material: past papers and the national curriculum

Two importers, both under `tools/`, both refusing to write anything until you
pass `--commit`.

| Tool | Loads | Raises |
|---|---|---|
| `tools/import-curriculum.mjs` | a published curriculum: offerings, strands, sub-strands, topics, objectives | `lessons` from MODEL to NATIONAL |
| `tools/import-papers.mjs` | one real examination paper and its questions | `pastQuestions` from MODEL to NATIONAL |

Those two lines are the last two entries in `RAISES` in
`src/lib/education/capability.ts`. Nothing else in the platform changes when
you run these: the same screens, the same engine, the same
`practiceForObjective`. What changes is what the platform is allowed to say,
which is the whole argument of `capability.ts`.

---

## Before either one

```
export SUPABASE_URL=...
export SUPABASE_SERVICE_KEY=...
```

Both tables are write protected to the national role under RLS, so both tools
run with the service key and neither is reachable from a browser session.
Creating a provenance claim is not self service.

Run the curriculum first. A past paper's questions cite objective codes, and a
code that does not resolve rejects the paper.

---

## The curriculum

```
node tools/import-curriculum.mjs waec-jhs.json            # check only
node tools/import-curriculum.mjs waec-jhs.json --commit
```

The file is JSON, written by a person reading the document. Format:
`tools/examples/example-curriculum.NOT-A-REAL-CURRICULUM.json`, which is a
shape illustration and is built so that it cannot be imported.

`tools/nacca-fetch.sh` downloads the published NaCCA PDFs and converts them to
text. Use it to read from, not to import from. Nothing automated interprets
those tables, because an indicator code that is subtly wrong is the one mistake
a teacher checks in five seconds and never forgives.

No new tables. Everything goes into the hierarchy migration 012 already
defines, and `edu_curricula` already carries the code, version, name,
authority and effective date, which is the curriculum's provenance.

Three things the tool will not do:

- **Invent a level.** `edu_levels` is platform configuration. A level code that
  is not there is an error, not something to create.
- **Invent a subject code.** A bare subject string must already exist in
  `edu_subjects`. To have one created, give it as
  `{ "code": ..., "name": ..., "levelBand": ... }` so the code comes from you.
- **Edit an objective in place.** An objective code already stored under this
  version is left exactly as it is. A document that disagrees with what is
  stored is a reform, and a reform is a new `version`. Migration 016 explains
  why at length: a 2026 result must keep its 2026 meaning forever.

Publishing a reformed syllabus as the active one therefore needs `--supersede`,
which retires the previous version and sets its `effective_to`. The retired
version keeps every row it has, so old results still resolve.

---

## A past paper

```
node tools/import-papers.mjs bece-2019-maths-p2.json                      # check only
node tools/import-papers.mjs bece-2019-maths-p2.json --commit             # import, IN_REVIEW
node tools/import-papers.mjs bece-2019-maths-p2.json --commit --approve   # import and serve
```

One file per paper. Format:
`tools/examples/example-paper.NOT-A-REAL-PAPER.json`, which again cannot be
imported.

Every question must carry the examination, the year, the paper part and its own
number as printed, plus the objective it tests. A question missing any of those
does not go in as anonymous: the whole file is rejected, and the reason is
printed per question so one pass gives you the whole list.

Imported questions land as `IN_REVIEW` and are served to nobody until somebody
has read them back against the paper. Transcription is not verification, and a
mistyped past question is exactly the failure the feature exists to prevent.
`--approve` skips that step; use it only when you were the one checking.

A paper without its marking scheme is still worth loading. Questions with no
answer key are imported as not auto markable, so the learner is told a person
will mark it rather than being marked against a key the importer made up.

### Why JSON and not a PDF reader

Ghanaian past papers circulate as photocopies and phone photographs. Anything
that reads them has to guess where question 4 ends, whether a mark is a minus
sign, which option was (d). A reader that is ninety five per cent right gives
you a bank that is five per cent wrong with no way to tell which five, which is
worse than having no past papers at all. A structured file moves the guessing to
a person holding the paper, and it means a teacher with a text editor can
contribute one.

### Licensing, said plainly

**Copyright in every WASSCE and BECE paper belongs to WAEC.** This tool cannot
get you a paper, and neither can anyone else who does not hold that right.

So `edu_exam_papers.licence` has five values and none of them is UNKNOWN:
`OWNED`, `PERMISSION_GRANTED`, `PUBLIC_DOMAIN`, `OPEN_LICENCE`, `SCHOOL_MOCK`.
`licence_note` cannot be blank and is where you write who granted the right,
when, and on what terms. If you cannot fill those two fields in honestly, the
paper does not go in. That is the schema asking the question rather than a
README hoping you thought about it.

The realistic first paths are a school's own mock papers, loaded as
`SCHOOL_MOCK` with the school's consent, and written permission from WAEC as
`PERMISSION_GRANTED`.

---

## Why a generated question can never become a past question

Migration `20260921000010_past_paper_provenance.sql`, in four parts. None of
them is a rule in application code that a later feature could forget.

1. **Provenance is a foreign key.** `edu_questions.paper_id` points at
   `edu_exam_papers`, a row somebody had to create on purpose, with a licence.
   A check constraint makes the whole set all or nothing: either no examination
   claim at all, or a paper, a question number, and the three display columns
   together.

2. **A paper is refused to any origin that could have written the question
   itself.** `origin AI_DRAFTED` is the generator, `origin AUTHORED` is us.
   Neither can hold a `paper_id`. Only `IMPORTED`, `PUBLISHER` or `TEACHER`
   can, and the importer writes `IMPORTED`. The constraint is checked on update
   as well as insert, so an existing generated question cannot acquire a paper
   later.

3. **`origin` is immutable.** Without this, part 2 is a speed bump: relabel the
   row, then attach the paper. A trigger refuses any change to `origin`. What
   wrote a question is a fact about its past, not an editable property, and a
   row recorded wrongly is deleted and written again, which leaves a trace.

4. **The text columns are derived, not asserted.** A trigger copies
   `source_exam`, `source_year` and `source_paper` off the paper row on every
   write, and blanks them when there is no paper. Free text provenance is
   unreachable: a question that says BECE 2019 says it because a row for BECE
   2019 exists. The serving path from migration 026 keeps reading the same
   three columns it reads today, so nothing near the answer keys was rewritten.

And when the store is empty, which it is today, `sourceOf('pastQuestions')` in
`capability.ts` returns MODEL, `NEEDS_A_REAL_DOCUMENT` marks the feature
unavailable, and the platform says there are no past papers. It does not fall
through to practice questions. The count that decision reads has a server side
source now, `edu_past_question_count(offering_id)`, which counts only approved
questions with a `paper_id`, so it cannot be filled by generated rows even by
accident.

`v_edu_past_paper_inventory` lists what has been loaded, per paper, with its
licence and how much of it is still unchecked. Counts only, no stems.
