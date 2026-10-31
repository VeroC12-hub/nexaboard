/**
 * How much syllabus each stage actually has.
 *
 * The companion to `game-coverage.mts`. Before working on the older learners'
 * lessons it is worth knowing which of their subjects have an outline at all:
 * a subject with no syllabus has no topics, so nothing can be taught from it
 * and the tutor has nothing to be told about where a topic sits.
 *
 * Run: npx tsx scripts/coverage/syllabus-coverage.mts
 */

import { subjectsFor } from '../../src/lib/education/subjects'
import { syllabusFor, allTopics } from '../../src/lib/education/syllabus'
import type { Stage } from '../../src/lib/education/learner'

const STAGES: Stage[] = ['creche', 'primary', 'jhs', 'shs', 'tvet', 'uni']

for (const stage of STAGES) {
  const subjects = subjectsFor(stage)
  let withSyllabus = 0
  let topics = 0
  const empty: string[] = []

  for (const subject of subjects) {
    const syllabus = syllabusFor(stage, subject.id)
    if (syllabus) {
      const all = allTopics(syllabus)
      if (all.length) {
        withSyllabus++
        topics += all.length
        continue
      }
    }
    empty.push(subject.name)
  }

  console.log(`\n${stage}`)
  console.log(`  subjects offered:   ${subjects.length}`)
  console.log(`  with an outline:    ${withSyllabus}`)
  console.log(`  topics in total:    ${topics}`)
  if (empty.length) {
    console.log(`  no outline (${empty.length}):`)
    for (const e of empty.slice(0, 14)) console.log(`    - ${e}`)
    if (empty.length > 14) console.log(`    ... and ${empty.length - 14} more`)
  }
}
