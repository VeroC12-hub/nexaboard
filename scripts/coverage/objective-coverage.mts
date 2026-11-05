/**
 * Every syllabus objective, and whether it can be finished.
 *
 * Run: npx tsx scripts/coverage/objective-coverage.mts [--list]
 *
 * An objective here is one syllabus topic: it has an `outcome` line, and a
 * learner finishes it by being taught it and then answering questions on it.
 * So two things are counted per stage: whether a written, approved lesson
 * exists, and whether that lesson carries enough questions (THRESHOLD) to
 * decide progress on more than a couple of answers.
 *
 * `--list` prints every objective that falls short, by stage and subject, so
 * the next session can start from the list rather than from a search.
 */

import { subjectsFor } from '../../src/lib/education/subjects'
import { syllabusFor, allTopics } from '../../src/lib/education/syllabus'
import { taughtFor } from '../../src/lib/education/taught-registry'
import type { Stage } from '../../src/lib/education/learner'
import '../../src/lib/education/library/lessons/index'

const THRESHOLD = 8
const STAGES: Stage[] = ['creche', 'primary', 'jhs', 'shs']
const list = process.argv.includes('--list')

const median = (xs: number[]) => {
  if (!xs.length) return 0
  const s = [...xs].sort((a, b) => a - b)
  const m = Math.floor(s.length / 2)
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2
}

let T = 0, W = 0, D = 0
const allCounts: number[] = []
const missing: string[] = []
const thin: string[] = []

console.log(`stage     objectives  lesson  missing  >=${THRESHOLD}q  thin  median q`)
for (const stage of STAGES) {
  let total = 0, written = 0, deep = 0
  const counts: number[] = []
  const seen = new Set<string>()
  for (const subject of subjectsFor(stage)) {
    const syllabus = syllabusFor(stage, subject.id)
    if (!syllabus) continue
    for (const topic of allTopics(syllabus)) {
      if (seen.has(topic.id)) continue
      seen.add(topic.id)
      total++
      const t = taughtFor(topic.id)
      if (!t) { missing.push(`${stage}\t${subject.id}\t${topic.year}\t${topic.id}`); continue }
      written++
      const n = t.questions?.length ?? 0
      counts.push(n)
      if (n >= THRESHOLD) deep++
      else thin.push(`${stage}\t${subject.id}\t${topic.year}\t${topic.id}\t${n}`)
    }
  }
  T += total; W += written; D += deep
  allCounts.push(...counts)
  console.log(`${stage.padEnd(9)} ${String(total).padStart(10)}  ${String(written).padStart(6)}  ${String(total - written).padStart(7)}  ${String(deep).padStart(5)}  ${String(written - deep).padStart(4)}  ${String(median(counts)).padStart(8)}`)
}
console.log(`${'ALL'.padEnd(9)} ${String(T).padStart(10)}  ${String(W).padStart(6)}  ${String(T - W).padStart(7)}  ${String(D).padStart(5)}  ${String(W - D).padStart(4)}  ${String(median(allCounts)).padStart(8)}`)
console.log(`\nFinished (lesson with ${THRESHOLD}+ questions): ${D} of ${T} (${Math.round((D / T) * 100)}%)`)

if (list) {
  console.log('\nMISSING (stage, subject, year, topic)')
  for (const m of missing) console.log('  ' + m)
  console.log(`\nTHIN, under ${THRESHOLD} questions (stage, subject, year, topic, questions)`)
  for (const t of thin) console.log('  ' + t)
}
