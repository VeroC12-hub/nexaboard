/**
 * Choice questions whose answer is not one of their options, and where the
 * correct option sits as written.
 *
 * Run: npx tsx scripts/coverage/answer-position.mts
 *
 * "Answer not among the options" must be 0: a learner cannot pick it.
 */

import { allTaught } from '../../src/lib/education/taught-registry'
import '../../src/lib/education/library/lessons/index'

let choice = 0
const bad: string[] = []
const pos = new Map<number, number>()
for (const t of allTaught()) {
  for (const q of t.questions ?? []) {
    if (q.kind !== 'choice') continue
    choice++
    const i = (q.options ?? []).indexOf(q.answer)
    if (i < 0) { bad.push(`${t.topicId} / ${q.id}`); continue }
    pos.set(i, (pos.get(i) ?? 0) + 1)
  }
}
console.log(`Choice questions: ${choice}`)
console.log(`Answer not among the options: ${bad.length}`)
for (const b of bad.slice(0, 40)) console.log('  ' + b)
console.log('Correct option as written, by position:')
for (const [i, n] of [...pos].sort((a, b) => a[0] - b[0])) console.log(`  ${String.fromCharCode(65 + i)}: ${n}`)
