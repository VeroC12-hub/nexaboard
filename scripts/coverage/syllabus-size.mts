/**
 * How much syllabus there is, subject by subject.
 *
 * The outline is what everything else stands on: the lesson writers fill in
 * objectives that already exist here and never add any, so a subject with
 * three objectives for a year stays a three objective year however many
 * lessons get written. This prints the real size so that gap is visible.
 *
 * Run: npx tsx scripts/coverage/syllabus-size.mts
 */

import { allTopics, syllabusFor, topicsFor } from '../../src/lib/education/syllabus'
import { subjectsFor } from '../../src/lib/education/subjects'
import { STAGE_YEARS, type Stage } from '../../src/lib/education/learner'
import { taughtFor } from '../../src/lib/education/taught-registry'
import '../../src/lib/education/library/syllabus/index'
await import('../../src/lib/education/library/lessons/by-stage/creche')
await import('../../src/lib/education/library/lessons/by-stage/primary')
await import('../../src/lib/education/library/lessons/by-stage/jhs')
await import('../../src/lib/education/library/lessons/by-stage/shs')

/** A lesson counts as finished when it has enough questions to pass a topic. */
const ENOUGH = 8

const STAGES: Stage[] = ['creche', 'primary', 'jhs', 'shs']

let grand = 0
let grandTaught = 0
let grandReady = 0

for (const stage of STAGES) {
  const years = STAGE_YEARS[stage] ?? []
  const subs = subjectsFor(stage)

  console.log('')
  console.log('='.repeat(78))
  console.log(`${stage.toUpperCase()}   ${subs.length} subjects offered`)
  console.log('='.repeat(78))
  console.log('subject'.padEnd(32)
    + 'topics'.padStart(8) + 'taught'.padStart(8) + 'ready'.padStart(8)
    + '   gap')
  console.log('-'.repeat(78))

  let stageTotal = 0
  let stageTaught = 0
  let stageReady = 0
  const empty: string[] = []

  for (const s of subs) {
    const syl = syllabusFor(stage, s.id)
    if (!syl) { empty.push(s.name); continue }
    const topics = allTopics(syl)
    const taught = topics.filter(t => taughtFor(t.id)).length
    const ready = topics.filter(t => {
      const l = taughtFor(t.id)
      return l && (l.questions ?? []).length >= ENOUGH
    }).length

    stageTotal += topics.length
    stageTaught += taught
    stageReady += ready

    /* The gap that matters to a learner: a topic they can open and finish. */
    const gap = topics.length - ready
    console.log(
      s.name.slice(0, 31).padEnd(32)
      + String(topics.length).padStart(8)
      + String(taught).padStart(8)
      + String(ready).padStart(8)
      + '   ' + (gap === 0 ? 'done' : String(gap)),
    )
  }

  for (const n of empty) {
    console.log(n.slice(0, 31).padEnd(32) + '       0       0       0   no outline')
  }

  console.log('-'.repeat(78))
  console.log('TOTAL'.padEnd(32)
    + String(stageTotal).padStart(8)
    + String(stageTaught).padStart(8)
    + String(stageReady).padStart(8)
    + '   ' + (stageTotal - stageReady))

  grand += stageTotal
  grandTaught += stageTaught
  grandReady += stageReady
}

console.log('')
console.log('EVERY STAGE'.padEnd(32)
  + String(grand).padStart(8)
  + String(grandTaught).padStart(8)
  + String(grandReady).padStart(8)
  + '   ' + (grand - grandReady))
console.log('')
console.log('topics  objectives the outline declares')
console.log('taught  with a written lesson')
console.log(`ready   with a lesson AND ${ENOUGH}+ questions, so a learner can finish it`)
console.log('gap     topics a learner cannot finish today')
