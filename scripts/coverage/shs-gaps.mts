/** Which SHS subjects have an outline and which do not. Run: npx tsx scripts/coverage/shs-gaps.mts */

import { subjectsFor } from '../../src/lib/education/subjects'
import { syllabusFor, allTopics } from '../../src/lib/education/syllabus'

const subjects = subjectsFor('shs')
const has = (id: string) => {
  const s = syllabusFor('shs', id)
  return s ? allTopics(s).length : 0
}

const missing = subjects.filter(s => has(s.id) === 0)
const have = subjects.filter(s => has(s.id) > 0)

console.log(`MISSING OUTLINES (${missing.length}):`)
for (const s of missing) console.log(`  - ${s.name}  [${s.id}]`)

console.log(`\nHAVE OUTLINES (${have.length}):`)
for (const s of have) console.log(`  - ${s.name}: ${has(s.id)} topics`)
