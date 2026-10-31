/**
 * How many of the youngest learners' topics actually have a game.
 *
 * Asked before designing a home screen made of games: `playable()` only
 * returns true where a game genuinely fits the topic, so a shelf of games is
 * only a viable front door if most topics have one. Counts per year group, and
 * prints the topics that have none so the gaps are a list rather than a number.
 *
 * Run: npx tsx scripts/coverage/game-coverage.mts
 */

import { subjectsFor } from '../../src/lib/education/subjects'
import { syllabusFor, topicsFor, allTopics } from '../../src/lib/education/syllabus'
import { playable, standingFor } from '../../src/lib/education/heavy'
import type { Stage } from '../../src/lib/education/learner'

const YEARS: Array<[Stage, string]> = [
  ['creche', 'Creche'],
  ['creche', 'Nursery'],
  ['creche', 'KG 1'],
  ['creche', 'KG 2'],
  ['primary', 'Basic 1'],
  ['primary', 'Basic 2'],
  ['primary', 'Basic 3'],
]

for (const [stage, year] of YEARS) {
  let total = 0
  let withGame = 0
  let leads = 0
  const missing: string[] = []

  for (const subject of subjectsFor(stage)) {
    const syllabus = syllabusFor(stage, subject.id)
    if (!syllabus) continue
    const scoped = topicsFor(syllabus, year)
    const topics = scoped.length ? scoped : allTopics(syllabus)

    for (const topic of topics) {
      total++
      if (playable(stage, topic.title)) {
        withGame++
        if (standingFor(stage, year, topic.title) === 'leads') leads++
      } else {
        missing.push(`${subject.name}: ${topic.title}`)
      }
    }
  }

  const pct = total ? Math.round((withGame / total) * 100) : 0
  console.log(`\n${year}  (${stage})`)
  console.log(`  topics in this year: ${total}`)
  console.log(`  have a game:         ${withGame}  (${pct}%)`)
  console.log(`  game leads:          ${leads}`)
  if (missing.length) {
    console.log(`  no game (${missing.length}):`)
    for (const m of missing.slice(0, 12)) console.log(`    - ${m}`)
    if (missing.length > 12) console.log(`    ... and ${missing.length - 12} more`)
  }
}
