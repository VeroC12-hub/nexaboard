/** Stored lessons per year group. Run: npx tsx scripts/coverage/year-coverage.mts */
import { subjectsFor } from '../../src/lib/education/subjects'
import { syllabusFor, allTopics } from '../../src/lib/education/syllabus'
import { hasTaught } from '../../src/lib/education/taught-registry'
import type { Stage } from '../../src/lib/education/learner'

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
