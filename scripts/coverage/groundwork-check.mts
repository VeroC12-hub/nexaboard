/**
 * Whether the groundwork section teaches the groundwork, or only claims it.
 *
 * Run: npx tsx scripts/coverage/groundwork-check.mts
 *
 * ── Why this check exists ──────────────────────────────────────────────────
 *
 * `Taught.recap` is the section headed "First, the thing it stands on", and
 * until recently it was shown only to a learner who had ticked "catching up"
 * or "shaky". Showing it to everybody revealed what it actually says. The
 * logarithms lesson opens its groundwork with:
 *
 *     You know the laws of indices, including zero, negative and fractional.
 *
 * To a reader who does not know the laws of indices, that sentence is worse
 * than no sentence: it names the thing they are missing, asserts they have
 * it, and moves on. The owner read it on screen and asked "what is this",
 * which is the correct response.
 *
 * It is not one lesson. This prints how many groundwork sections open by
 * telling the reader what they already know rather than by teaching it.
 *
 * ── What counts as the fault ───────────────────────────────────────────────
 *
 * An opening of the form "You know...", "You have met...", "By now...". The
 * test is deliberately crude and only looks at the opening, because the fix
 * is a rewrite of the whole section anyway and the opening is a reliable
 * flag for it. A section that opens "An index is the small number that says
 * how many times to multiply" passes, and that is the shape wanted.
 *
 * Reports and exits zero, like the other coverage checks: it directs work,
 * it does not block commits. The rule lives in
 * `docs/teaching/teaching-from-zero.md`.
 */

import { allTaught } from '../../src/lib/education/taught-registry'

await import('../../src/lib/education/library/lessons/by-stage/creche')
await import('../../src/lib/education/library/lessons/by-stage/primary')
await import('../../src/lib/education/library/lessons/by-stage/jhs')
await import('../../src/lib/education/library/lessons/by-stage/shs')

const ASSERTS = /^(you (already )?(know|have|can|met|learned|learnt)|by now|this assumes|you should (know|have))/i

const all = allTaught()
const withRecap = all.filter(t => t.recap)
const asserting = withRecap.filter(t => ASSERTS.test(t.recap!.trim()))

console.log(`\nLESSONS: ${all.length}`)
console.log(`With a groundwork section: ${withRecap.length}`)
console.log(`Opening by asserting what the reader knows: ${asserting.length}`
  + ` (${Math.round(100 * asserting.length / withRecap.length)}% of those)`)
console.log(`Teaching it instead: ${withRecap.length - asserting.length}`)
console.log(`\nCommonest openings:`)

const counts = new Map<string, number>()
for (const t of withRecap) {
  const first = t.recap!.trim().split(/\s+/).slice(0, 3).join(' ')
  counts.set(first, (counts.get(first) ?? 0) + 1)
}
for (const [k, v] of [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10)) {
  console.log(`  ${String(v).padStart(4)}  "${k} ..."`)
}

console.log(`\nWorst first, by how much rests on them:`)
for (const t of asserting.slice(0, 10)) {
  console.log(`  ${t.topicId}`)
}
console.log(``)
