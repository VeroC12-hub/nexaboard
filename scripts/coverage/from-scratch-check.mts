/**
 * Does a lesson teach its topic, or point at something it is not teaching?
 *
 * Run: npx tsx scripts/coverage/from-scratch-check.mts
 *
 * ── Why this check exists ──────────────────────────────────────────────────
 *
 * The owner's instruction: "the thing is referencing something which he is
 * supposed to teach, there should be no referencing, it should teach you
 * from scratch for every topic".
 *
 * A reference is a sentence that stands in for teaching. "You know the laws
 * of indices", "recall that", "as you saw last year", "we met this in Basic
 * 5". Each one is a place where the lesson had a thing to explain and
 * pointed at it instead, and a reader who does not have the thing being
 * pointed at is stopped there with nothing to do about it. A learner on a
 * phone in a village cannot go and find Basic 5.
 *
 * It is not the same fault as `groundwork-check.mts`, which looks only at how
 * the groundwork section opens. This counts references anywhere in a lesson,
 * including the idea and the reasoning, which is where most of them are.
 */

import { allTaught } from '../../src/lib/education/taught-registry'
import type { Taught } from '../../src/lib/education/taught'

await import('../../src/lib/education/library/lessons/by-stage/creche')
await import('../../src/lib/education/library/lessons/by-stage/primary')
await import('../../src/lib/education/library/lessons/by-stage/jhs')
await import('../../src/lib/education/library/lessons/by-stage/shs')

/* Each pattern is a way of pointing instead of teaching. Deliberately
   literal: a crude count that is easy to audit beats a clever one nobody
   trusts. */
const REFERS: Array<[string, RegExp]> = [
  ['you know / you have met', /\byou (already )?(know|have met|have used|have seen|have learned|have learnt|met|learned|learnt)\b/gi],
  ['recall / remember that', /\b(recall|remember) (that|how|what)\b/gi],
  ['as you saw / as we saw', /\bas (you|we) (saw|did|learned|learnt|noted|said)\b/gi],
  ['last year / earlier class', /\b(last year|previous year|earlier (class|year|grade)|in (basic|jhs|shs) ?\d)\b/gi],
  ['covered elsewhere', /\b(covered|taught|explained|dealt with) (in|elsewhere|earlier|before|already)\b/gi],
  ['you should know', /\byou (should|must) (know|have|already)\b/gi],
]

const proseOf = (t: Taught): string => [
  t.idea, t.mechanism ?? '', t.recap ?? '', t.extension ?? '', t.why ?? '', t.notation ?? '',
  ...(t.method ?? []),
  ...(t.traps ?? []).flatMap(x => [x.mistake, x.why]),
  ...(t.worked ?? []).flatMap(w => [w.ask, w.answer,
    ...w.steps.map(s => (typeof s === 'string' ? s : [s.math, s.why ?? ''].join(' ')))]),
].join('\n')

const all = allTaught()
let lessonsWith = 0
const perPattern = new Map<string, number>()
const worst: Array<{ id: string, n: number }> = []

for (const t of all) {
  const prose = proseOf(t)
  let n = 0
  for (const [name, re] of REFERS) {
    const hits = prose.match(re)
    if (!hits) continue
    n += hits.length
    perPattern.set(name, (perPattern.get(name) ?? 0) + hits.length)
  }
  if (n) { lessonsWith++; worst.push({ id: t.topicId, n }) }
}

const total = [...perPattern.values()].reduce((a, b) => a + b, 0)
console.log(`\nLESSONS: ${all.length}`)
console.log(`Lessons that point at something instead of teaching it: ${lessonsWith}`
  + ` (${Math.round(100 * lessonsWith / all.length)}%)`)
console.log(`References in all: ${total}\n`)
for (const [k, v] of [...perPattern.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(v).padStart(5)}  ${k}`)
}
console.log(`\nMost references in one lesson:`)
for (const w of worst.sort((a, b) => b.n - a.n).slice(0, 12)) {
  console.log(`  ${String(w.n).padStart(3)}  ${w.id}`)
}
console.log(``)
