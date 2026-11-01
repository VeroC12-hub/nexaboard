/**
 * How much of the library is something other than paragraphs.
 *
 * Run: npx tsx scripts/coverage/visual-coverage.mts
 *      npx tsx scripts/coverage/visual-coverage.mts shs     (one stage, by subject)
 *
 * ── Why this check exists ──────────────────────────────────────────────────
 *
 * The first five checks measure whether a lesson is correct, addressable and
 * readable. None of them could see the thing a learner notices first, which
 * is whether the page is a wall of text. When this script was written the
 * answer across 508 lessons was 48 figures and no tables at all, with every
 * creche and KG lesson, written for children who cannot read, carrying no
 * picture of any kind.
 *
 * A number nobody prints is a number nobody fixes, so this prints it.
 *
 * ── What counts ────────────────────────────────────────────────────────────
 *
 * A figure or a table. Not because they are interchangeable, they are not: a
 * figure shows a thing that is spatial, and a table holds data that was never
 * prose. But a lesson with neither is a lesson that has nothing on the page
 * except paragraphs, and that is what this measures.
 *
 * It reports and exits zero on purpose. A failing check here would block
 * every commit in the library until a backfill of several hundred lessons was
 * finished, which would stop the work rather than direct it. The rule that
 * holds new lessons to this lives in `docs/teaching/writing-shs-lessons.md`,
 * where a person or an agent writing a block reads it, and the number below
 * is how anybody can see whether the rule is being kept.
 */

import { subjectsFor } from '../../src/lib/education/subjects'
import { syllabusFor, allTopics } from '../../src/lib/education/syllabus'
import { taughtFor } from '../../src/lib/education/taught-registry'
import type { Stage } from '../../src/lib/education/learner'
import '../../src/lib/education/library/lessons/index'

const STAGES: Stage[] = ['creche', 'primary', 'jhs', 'shs', 'tvet', 'uni']

const only = process.argv[2] as Stage | undefined

interface Count { taught: number, figure: number, table: number, bare: number }
const zero = (): Count => ({ taught: 0, figure: 0, table: 0, bare: 0 })

function tally(into: Count, topicId: string) {
  const t = taughtFor(topicId)
  if (!t) return
  into.taught++
  const hasFigure = Boolean(t.figure)
  const hasTable = Boolean(t.tables?.length)
  if (hasFigure) into.figure++
  if (hasTable) into.table++
  if (!hasFigure && !hasTable) into.bare++
}

const pct = (n: number, of: number) => (of ? Math.round((n / of) * 100) : 0)

function line(name: string, c: Count) {
  if (!c.taught) return
  console.log(
    `${name.padEnd(26)} ${String(c.taught).padStart(4)} taught  `
    + `${String(c.figure).padStart(4)} figure  `
    + `${String(c.table).padStart(4)} table  `
    + `${String(c.bare).padStart(4)} neither (${String(pct(c.bare, c.taught)).padStart(3)}%)`,
  )
}

/* One stage, broken down by subject: the view for somebody about to write a
   block, who needs to know which subject is at zero. */
if (only) {
  const total = zero()
  for (const subject of subjectsFor(only)) {
    const syllabus = syllabusFor(only, subject.id)
    if (!syllabus) continue
    const c = zero()
    for (const topic of allTopics(syllabus)) tally(c, topic.id)
    for (const k of ['taught', 'figure', 'table', 'bare'] as const) total[k] += c[k]
    line(subject.id, c)
  }
  console.log('')
  line('ALL ' + only, total)
} else {
  const total = zero()
  for (const stage of STAGES) {
    const c = zero()
    for (const subject of subjectsFor(stage)) {
      const syllabus = syllabusFor(stage, subject.id)
      if (!syllabus) continue
      for (const topic of allTopics(syllabus)) tally(c, topic.id)
    }
    for (const k of ['taught', 'figure', 'table', 'bare'] as const) total[k] += c[k]
    line(stage, c)
  }
  console.log('')
  line('ALL', total)
  console.log('')
  console.log(
    `${total.bare} of ${total.taught} lessons are paragraphs and nothing else.`,
  )
}
