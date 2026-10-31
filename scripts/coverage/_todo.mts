import { subjectsFor } from '../../src/lib/education/subjects'
import { syllabusFor, allTopics } from '../../src/lib/education/syllabus'
import { hasTaught } from '../../src/lib/education/taught-registry'
const year = process.argv[2] ?? 'Basic 5'
let n = 0
for (const subject of subjectsFor('primary')) {
  const s = syllabusFor('primary', subject.id); if (!s) continue
  for (const t of allTopics(s)) {
    if (t.year === year && !hasTaught(t.id)) { n++; console.log(`[${subject.id}] ${t.id}: ${t.title} -> ${t.outcome}`) }
  }
}
console.log(`\n${year}: ${n} to write`)
