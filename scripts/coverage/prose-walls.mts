/**
 * Walls of prose, and where they are.
 *
 * ── What this answers ───────────────────────────────────────────────────────
 *
 * The owner read a lesson and said he would not learn from it. The content was
 * not the fault: the lesson he read teaches base and index from nothing and
 * derives all five laws rather than listing them. The fault was the shape. It
 * arrives as unbroken blocks of text, and a reader bounces off a wall however
 * good the bricks are.
 *
 * So this counts the walls and says which stage and subject they are in,
 * because "the lessons are too dense" is not actionable and "two hundred SHS
 * lessons have one paragraph over four hundred words" is.
 *
 * ── Why it walks the syllabus rather than the registry ──────────────────────
 *
 * A `Taught` does not carry its own id. It is keyed by topic id in the
 * registry, so `allTaught()` hands back objects with no way to say which topic
 * they belong to. Grouping by `t.id` silently produced "200 unknown", which
 * looked like every wall living in one lesson. Walking the outline and looking
 * each topic up is the only way to attribute them.
 *
 * ── Why it measures the assembled lesson ────────────────────────────────────
 *
 * `assemble` chooses which parts a learner is shown and in what order, so the
 * source file is not what anybody reads. A paragraph that is never assembled
 * for a default learner is not a wall they will ever hit.
 *
 * Run: npx tsx scripts/coverage/prose-walls.mts
 */

import { allTaught, taughtFor } from '../../src/lib/education/taught-registry'
import { assemble } from '../../src/lib/education/taught'
import { allTopics, syllabusFor } from '../../src/lib/education/syllabus'
import { subjectsFor } from '../../src/lib/education/subjects'
import type { LearnerProfile, Stage } from '../../src/lib/education/learner'

import '../../src/lib/education/library/syllabus/index'
await import('../../src/lib/education/library/lessons/by-stage/creche')
await import('../../src/lib/education/library/lessons/by-stage/primary')
await import('../../src/lib/education/library/lessons/by-stage/jhs')
await import('../../src/lib/education/library/lessons/by-stage/shs')

/** The commonest learner: nothing stated, so every default applies. */
const READER = {
  goal: 'KEEP_UP', footing: 'OKAY', diet: 'MIXED',
  approach: 'IDEA_FIRST', depth: 'FULL',
} as unknown as LearnerProfile

/**
 * Where the line is.
 *
 * 150 words is about a screenful on a phone and is where a paragraph starts
 * being skimmed. 400 is where it stops being read at all. Three thresholds
 * rather than one, because the right place to draw the line is a judgement
 * and the numbers should support making it rather than assume it.
 */
const TIERS: Array<[string, number]> = [['150+', 150], ['250+', 250], ['400+', 400]]

/** The worst tier is the one the fix list is built from. */
const WALL = 400

const STAGES: Stage[] = ['creche', 'primary', 'jhs', 'shs']

/** Which stage and subject owns each topic id. */
const where = new Map<string, { stage: Stage, subject: string }>()
for (const stage of STAGES) {
  for (const s of subjectsFor(stage)) {
    const syl = syllabusFor(stage, s.id)
    if (!syl) continue
    for (const t of allTopics(syl)) where.set(t.id, { stage, subject: s.name })
  }
}

const tiers = new Map<string, number>()
const bySubject = new Map<string, number>()
const worst: Array<{ words: number, topicId: string, heading: string }> = []
const hit = new Set<string>()
let walls = 0

for (const [topicId, w] of where) {
  const t = taughtFor(topicId)
  if (!t) continue

  for (const p of assemble(t, READER).pieces) {
    if (!p.text) continue

    /* The longest PARAGRAPH, not the longest section.

       `blocksOf` splits prose on a blank line and the lesson page renders one
       paragraph per block, so a nine hundred word section broken into six
       paragraphs is six paragraphs and not a wall. Measuring the whole section
       counted those as walls and did not move when breaks were added, which is
       how this was found. */
    const n = Math.max(...p.text.split(/\n\s*\n/)
      .map(part => part.trim().split(/\s+/).filter(Boolean).length))

    for (const [label, min] of TIERS) {
      if (n >= min) {
        const key = `${w.stage} ${label}`
        tiers.set(key, (tiers.get(key) ?? 0) + 1)
      }
    }

    if (n < WALL) continue
    walls++
    hit.add(topicId)
    const key = `${w.stage}  ${w.subject}`
    bySubject.set(key, (bySubject.get(key) ?? 0) + 1)
    worst.push({ words: n, topicId, heading: p.heading ?? p.kind })
  }
}

console.log('Long paragraphs, by stage and length:')
for (const stage of STAGES) {
  const row = TIERS
    .map(([label]) => `${label} ${String(tiers.get(`${stage} ${label}`) ?? 0).padStart(4)}`)
    .join('   ')
  console.log('  ' + stage.padEnd(9) + row)
}

console.log('')
console.log(`Paragraphs over ${WALL} words: ${walls}`)
console.log(`Lessons carrying one: ${hit.size} of ${allTaught().length}`)

console.log('')
console.log('By subject:')
for (const [k, v] of [...bySubject].sort((a, b) => b[1] - a[1])) {
  console.log('  ', String(v).padStart(4), k)
}

console.log('')
console.log('The twenty worst:')
for (const w of worst.sort((a, b) => b.words - a.words).slice(0, 20)) {
  console.log('  ', String(w.words).padStart(4), 'words ', w.topicId.padEnd(32), w.heading)
}
