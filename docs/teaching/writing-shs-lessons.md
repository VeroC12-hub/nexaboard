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
single import line in that folder's `index.ts`. The syllabus outlines are
already complete for SHS and are not to be edited.

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
      questions: [{
        id: string, ask: string, kind: 'choice' | 'numeric',
        options: string[], answer: string, teach: string, level: number,
      }],
    })

`figure` is optional and belongs only where a picture genuinely carries the
idea. `topicId` must match the syllabus id exactly or the address check
fails.

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
