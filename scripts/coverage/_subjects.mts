import '../../src/lib/education/library/syllabus/index'
import { subjectsFor } from '../../src/lib/education/subjects'
import { syllabusFor, allTopics } from '../../src/lib/education/syllabus'
import type { Stage } from '../../src/lib/education/learner'
for (const stage of ['creche','primary','jhs','shs','tvet','uni'] as Stage[]) {
  console.log(`\n== ${stage} ==`)
  for (const s of subslist(stage)) console.log(s)
}
function subslist(stage: Stage) {
  const out: string[] = []
  for (const sub of subjectsFor(stage)) {
    const syl = syllabusFor(stage, sub.id)
    const n = syl ? allTopics(syl).length : 0
    out.push(`  ${sub.id.padEnd(24)} ${sub.name.padEnd(34)} ${String(n).padStart(3)} topics`)
  }
  return out
}
