# Writing the SHS lessons

A working brief for anybody, person or agent, picking up the unfinished part
of the lesson library. It exists because the job is too long for one sitting
and is therefore done in many: each session writes a block, commits it, and
the next session has to be able to start from the repository alone, with no
memory of the last one.

## What is left

Lessons for the untaught SHS topics. Creche, primary and JHS are finished.
TVET and university are deliberately out of scope: their topics stay
outlined and untaught, and their syllabus files are not to be changed.

The queue is derived from the repository rather than written down here, so it
cannot go stale:

    npx tsx scripts/coverage/_todo.mts shs "SHS 1"

and the same for `SHS 2` and `SHS 3`. Each line is
`[subjectId] topicId: Title -> outcome`.

Take SHS 1 first, then SHS 2, then SHS 3. Within a year take the largest
subjects first: Core Mathematics, English, General Science, Additional
Mathematics, Physics, Chemistry, Biology, Social Studies, Government,
Economics, Geography, Literature, ICT, and then the rest.

Work in blocks of roughly seven to twelve topics, one subject at a time.

## Where lessons live

One file per block in `src/lib/education/library/lessons/`, registered by a
single import line in **`src/lib/education/library/lessons/by-stage/shs.ts`**.

Not `index.ts`. The library is now split by stage and loaded on demand, so
`index.ts` only pulls in the four `by-stage` files and exists for the
coverage scripts. A lesson registered there instead of in `by-stage/shs.ts`
passes every check and is never served to a learner, which is the worst kind
of mistake this repository can make: silent, and invisible to the person who
made it.

The syllabus outlines are already complete for SHS and are not to be
edited.

## The shape of a lesson

    import { teach } from '../../taught-registry'

    teach({
      topicId: 'exact-id-from-the-syllabus',
      source: 'WRITTEN',
      approved: true,
      brief: { idea: string, method: string[] },
      idea: string,
      mechanism: string,
      recap: string,
      method: string[],
      worked: [{ level: number, ask: string, steps: string[], answer: string }],
      traps: [{ mistake: string, why: string }],
      extension: string,
      figure: { alt: string, svg: string },
      tables: [{
        caption: string, columns: string[], rows: string[][], note?: string,
      }],
      questions: [{
        id: string, ask: string, kind: 'choice' | 'numeric',
        options: string[], answer: string, teach: string, level: number,
      }],
    })

`topicId` must match the syllabus id exactly or the address check fails.

## Pictures and tables are not optional any more

This is the rule that changed most recently, and it is the most important one
on the page. At the time it was written, 462 of 508 finished lessons were
paragraphs and nothing else: 46 figures in the whole library and not one
table. A learner opening any of them meets a wall of text, and in subjects
that are mostly spatial, geometry, apparatus, maps, circuits, cells, graphs,
the text is doing work a drawing would do better.

**Every lesson you write now carries at least one of a figure or a table**,
and most carry both. The test is not decoration, it is this: look at the
`idea` and the `mechanism` you have written and ask whether any part of it is
describing a shape, a position, a process with stages, or a set of values. If
it describes a shape or a position, that part belongs in `figure`. If it
lists values, properties, differences or forms, that part belongs in a table
and should come out of the prose entirely.

    tables: [{
      caption: 'What each soil type does with water',
      columns: ['Soil', 'Drainage', 'Holds nutrients', 'Best for'],
      rows: [
        ['Sandy', 'Very fast', 'Poorly', 'Cassava, groundnut'],
        ['Clay', 'Very slow', 'Well', 'Rice in valley bottoms'],
        ['Loam', 'Moderate', 'Well', 'Maize, vegetables'],
      ],
      note: 'Loam is the mixture, which is why it is the one farmers want.',
    }]

Rules for a table. Two columns at least and two rows at least, or it is a
sentence written sideways. Every row the same length as `columns`. The first
column is what the row is about, because it is rendered as the row heading.
The `caption` is required and is a sentence, not a label: it is read aloud in
place of the table for a learner on the spoken lesson, so "What each soil
type does with water" and never "Table 1". Cells are plain text, short, no
markup. Four to six rows is usually right; a table of twenty rows is a
reference sheet and belongs in `extension` or nowhere.

Rules for a figure. Hand written SVG, no external images, no fonts that may
not exist, and a `viewBox` so it scales. Label the parts in the drawing
itself, because a diagram whose labels live in the prose is two things the
learner has to join up. `alt` is a full sentence describing what the drawing
shows, not "diagram of a triangle": it is what a blind learner is given
instead of the picture. Keep it plain: lines, circles, rectangles, text, one
or two colours. The renderer strips anything executable, so a clever SVG will
simply not appear.

Check your block with:

    npx tsx scripts/coverage/visual-coverage.mts shs

Your subject must not be sitting at zero when you finish.

Read `shs-maths-number.ts` in that folder before writing anything. It is the
reference for SHS: match its register, its density and its house style. For a
second example read `jhs3-maths.ts`.

## House style

This matters as much as the content, because the library has to read as one
voice rather than as a pile of contributions.

Never use em dashes or en dashes in lesson prose. Commas, colons, or the word
"to" for a range. This is a standing instruction from the owner of the repo.

Apostrophes in lesson prose are the typographic character, written directly
inside single quoted TypeScript strings. No escapes.

Mathematics is written in words and plain ASCII, never LaTeX: "n(A union B)
equals n(A) plus n(B) minus n(A intersect B)", "x squared", "the square root
of 2". The renderer shows plain text.

`mechanism` is the heart of each lesson and the part that cannot be
skimped. It says why the method works and names the specific place marks are
lost, with a concrete example. A general warning to be careful is not a
mechanism.

What changes at SHS is that the reason carries marks of its own, so an SHS
lesson says what has to be written down, not only what has to be worked out:
the theorem quoted beside the step, the law named when it is used.

Ghanaian context wherever it is natural: cedis, local crops and trades,
place names, WASSCE framing.

Three to four worked examples rising in level, three to four traps, three to
five questions.

Where a topic needs equipment a school may not own, and the technical and
applied subjects are full of these, write it so the examinable part can be
learned on paper and say plainly where the real machine is needed. Do not
pretend the equipment is there.

## Checks that must pass before every commit

From the repository root:

1. `npx tsc -b` clean. This is the only real type check: `tsconfig.json`
   has `"files": []`, so bare `tsc` checks nothing.
2. `npx eslint src/lib/education/library/lessons/` clean. There is no eslint
   config for `scripts/coverage/*.mts`, so an error naming those files is
   expected and harmless.
3. `npx tsx scripts/coverage/address-check.mts` passing all four.
4. `npx tsx scripts/coverage/reading-level.mts` reporting zero year groups
   above expectation. SHS expects grade 10 to 12. A part above 12 is
   rewritten in shorter sentences and plainer words. Do not cut content to
   pass, and do not touch the EXPECT table. Find the offenders with
   `npx tsx scripts/coverage/_worst.mts "SHS 1" 40`.
5. `npx tsx scripts/coverage/taught-coverage.mts` to confirm the block
   landed.
6. `npx tsx scripts/coverage/visual-coverage.mts shs` to confirm the subject
   you just wrote is not at zero figures and zero tables. This one reports
   rather than fails, because failing it would block the whole library until
   several hundred older lessons are backfilled, so it is on you to read it.

Never commit a secret. `.env` and `.env.local` are ignored and stay that
way; no key value is ever printed or committed. Check `git diff --cached`
before each commit.

## Committing

One commit per block, on the branch `nexaedu` and never on master. The
message is plain prose naming the subject and the count, for example
`SHS 1 Core Mathematics: algebra and functions, nine topics`. Push after
every commit, so a session that is cut off mid job loses only the block it
was in the middle of.

No pull request, no merge to master, no deployment. Those decisions belong to
the owner.

## Environment notes

Many source files are CRLF. A patch script must detect the line ending
rather than assume, `nl = '\r\n' if '\r\n' in s else '\n'`. Helper scripts
stay outside the repository and are not committed. The temporary coverage
helpers `_todo.mts`, `_worst.mts` and `_subjects.mts` are committed on
purpose and stay.
