/**
 * What a lesson is actually made of, counted over the whole library.
 *
 * The complaint this answers is "it is too much writing". That is a claim
 * about shape, not about content, and shape is measurable: how many words a
 * learner reads before anything that is not a paragraph, how many lessons
 * carry a picture at all, how far down the page the picture is put, whether
 * the mathematics is set as mathematics or spelled out in words.
 *
 * Run: npx tsx scripts/lesson-shape.mts
 *
 * It imports the same registry and the same `assemble` the app uses, with a
 * default profile, so the numbers are what a learner is really given rather
 * than what the files look like.
 */

import { allTaught } from '../src/lib/education/taught-registry'
import { assemble } from '../src/lib/education/taught'
import type { Piece, Taught } from '../src/lib/education/taught'
import type { LearnerProfile } from '../src/lib/education/learner'

/* Every stage's lessons, loaded the way `by-stage` groups them. */
await import('../src/lib/education/library/lessons/by-stage/creche')
await import('../src/lib/education/library/lessons/by-stage/primary')
await import('../src/lib/education/library/lessons/by-stage/jhs')
await import('../src/lib/education/library/lessons/by-stage/shs')

/** The commonest learner: no preferences stated, so every default applies. */
const DEFAULT = {
  goal: 'KEEP_UP',
  footing: 'OK',
  diet: 'READ',
  approach: 'IDEA_FIRST',
  depth: 'FULL',
} as unknown as LearnerProfile

const words = (s: string | undefined): number =>
  s ? s.trim().split(/\s+/).filter(Boolean).length : 0

const PROSE: Piece['kind'][] = ['idea', 'mechanism', 'recap', 'extension']

/** Words in a piece, whatever shape it is. */
function pieceWords(p: Piece): number {
  if (p.text) return words(p.text)
  if (p.lines) return p.lines.reduce((n, l) => n + words(l), 0)
  if (p.worked) return words(p.worked.ask) + p.worked.steps.reduce(
    (n, s) => n + words(typeof s === 'string' ? s : s.math + ' ' + (s.why ?? '')), 0)
  return 0
}

const isProse = (p: Piece): boolean => PROSE.includes(p.kind)

/** Does this lesson set any mathematics, rather than spelling it out? */
function hasMaths(t: Taught): boolean {
  const all = [t.idea, t.mechanism ?? '', t.recap ?? '', t.extension ?? '',
    ...(t.method ?? []),
    ...(t.worked ?? []).flatMap(w => [w.ask, w.answer,
      ...w.steps.map(s => (typeof s === 'string' ? s : s.math))]),
  ].join(' ')
  return /\$[^$]+\$/.test(all)
}

interface Row {
  id: string
  totalWords: number
  wordsBeforeBreak: number
  firstBreakAt: number | null
  pieces: number
  figure: boolean
  figureAt: number | null
  tables: number
  maths: boolean
  questionShown: boolean
  why: boolean
  notation: boolean
}

const rows: Row[] = []

for (const t of allTaught()) {
  const { pieces } = assemble(t, DEFAULT)
  let before = 0
  let firstBreak: number | null = null
  pieces.forEach((p, i) => {
    if (firstBreak === null && !isProse(p)) firstBreak = i
    if (firstBreak === null) before += pieceWords(p)
  })
  const figureAt = pieces.findIndex(p => p.kind === 'figure')
  rows.push({
    id: t.topicId,
    totalWords: pieces.reduce((n, p) => n + pieceWords(p), 0),
    wordsBeforeBreak: before,
    firstBreakAt: firstBreak,
    pieces: pieces.length,
    figure: !!t.figure,
    figureAt: figureAt < 0 ? null : figureAt,
    tables: t.tables?.length ?? 0,
    maths: hasMaths(t),
    questionShown: pieces.some(p => p.kind === 'question'),
    why: !!t.why,
    notation: !!t.notation,
  })
}

const n = rows.length
const sum = (f: (r: Row) => number): number => rows.reduce((a, r) => a + f(r), 0)
const avg = (f: (r: Row) => number): string => (sum(f) / n).toFixed(0)
const pct = (f: (r: Row) => boolean): string =>
  `${rows.filter(f).length} of ${n} (${Math.round(100 * rows.filter(f).length / n)}%)`

const median = (f: (r: Row) => number): number => {
  const v = rows.map(f).sort((a, b) => a - b)
  return v[Math.floor(v.length / 2)]
}

console.log(`\nLESSONS: ${n}\n`)
console.log(`Words in a lesson, average ${avg(r => r.totalWords)}, median ${median(r => r.totalWords)}`)
console.log(`Words of unbroken prose before the first non-prose block:`)
console.log(`  average ${avg(r => r.wordsBeforeBreak)}, median ${median(r => r.wordsBeforeBreak)}`)
console.log(`  over 400 words: ${pct(r => r.wordsBeforeBreak > 400)}`)
console.log(`  over 700 words: ${pct(r => r.wordsBeforeBreak > 700)}`)
console.log(``)
console.log(`Has a picture at all:      ${pct(r => r.figure)}`)
console.log(`Picture in the last third: ${pct(r => r.figureAt !== null && r.figureAt >= Math.floor(r.pieces * 2 / 3))}`)
console.log(`Has at least one table:    ${pct(r => r.tables > 0)}`)
console.log(`Sets any mathematics:      ${pct(r => r.maths)}`)
console.log(`Says what it is for:       ${pct(r => r.why)}`)
console.log(`Says how to read it:       ${pct(r => r.notation)}`)
console.log(`Question inside the lesson:${pct(r => r.questionShown)}`)
console.log(``)

const worst = rows.slice().sort((a, b) => b.wordsBeforeBreak - a.wordsBeforeBreak).slice(0, 12)
console.log(`Longest walls of prose before anything else:`)
for (const r of worst) {
  console.log(`  ${String(r.wordsBeforeBreak).padStart(5)} words  ${r.id}`
    + `${r.figure ? '' : '  (no picture)'}${r.tables ? '' : '  (no table)'}`)
}
console.log(``)
