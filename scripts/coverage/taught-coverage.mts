/** How many topics have a written, approved lesson. Run: npx tsx scripts/coverage/taught-coverage.mts */

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

let grandTotal = 0
let grandWritten = 0

for (const stage of STAGES) {
  let total = 0
  let written = 0
  for (const subject of subjectsFor(stage)) {
    const syllabus = syllabusFor(stage, subject.id)
    if (!syllabus) continue
    for (const topic of allTopics(syllabus)) {
      total++
      if (hasTaught(topic.id)) written++
    }
  }
  grandTotal += total
  grandWritten += written
  const pct = total ? Math.round((written / total) * 100) : 0
  console.log(`${stage.padEnd(8)} ${String(written).padStart(4)} of ${String(total).padStart(4)}  (${pct}%)`)
}

console.log(`${'ALL'.padEnd(8)} ${String(grandWritten).padStart(4)} of ${String(grandTotal).padStart(4)}  (${Math.round((grandWritten / grandTotal) * 100)}%)`)
