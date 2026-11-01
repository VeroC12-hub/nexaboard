/** Stored lessons per year group. Run: npx tsx scripts/coverage/year-coverage.mts */
import { subjectsFor } from '../../src/lib/education/subjects'
import { syllabusFor, allTopics } from '../../src/lib/education/syllabus'
import { hasTaught } from '../../src/lib/education/taught-registry'
import type { Stage } from '../../src/lib/education/learner'

/* The whole lesson library, in one import.

   The app loads lessons one stage at a time, so importing `subjects.ts` no
   longer fills the registry the way it used to. A script runs in node with
   no download to pay for and needs every stage, so it asks for all of them
   explicitly. Without this line the counts below are silently zero. */
import '../../src/lib/education/library/lessons/index'

const STAGES: Stage[] = ['creche', 'primary', 'jhs', 'shs', 'tvet', 'uni']
for (const stage of STAGES) {
  const years = new Map<string, { n: number, done: number }>()
  for (const subject of subjectsFor(stage)) {
    const s = syllabusFor(stage, subject.id)
    if (!s) continue
    for (const t of allTopics(s)) {
      const y = years.get(t.year) ?? { n: 0, done: 0 }
      y.n++
      if (hasTaught(t.id)) y.done++
      years.set(t.year, y)
    }
  }
  if (!years.size) continue
  console.log(`\n== ${stage} ==`)
  for (const [y, v] of [...years].sort())
    console.log(`  ${y.padEnd(12)} ${String(v.done).padStart(3)} of ${String(v.n).padStart(3)}`
      + (v.done === v.n ? '   DONE' : ''))
}
