/** How hard the stored lessons are to read, per year group. Run: npx tsx scripts/coverage/reading-level.mts */
import '../../src/lib/education/library/syllabus/index'
import '../../src/lib/education/library/lessons/index'
import { allTaught } from '../../src/lib/education/taught-registry'
import { subjectsFor } from '../../src/lib/education/subjects'
import { syllabusFor, allTopics } from '../../src/lib/education/syllabus'
import type { Stage } from '../../src/lib/education/learner'

/** Rough syllable count: vowel groups, less a silent trailing e. */
function syllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, '')
  if (!w) return 0
  const groups = w.match(/[aeiouy]+/g)
  let n = groups ? groups.length : 1
  if (w.endsWith('e') && n > 1 && !/[aeiouy]e$/.test(w)) n -= 1
  return Math.max(1, n)
}

/** Flesch-Kincaid grade: the US school year someone needs to read it. */
function grade(text: string) {
  const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(Boolean)
  const words = text.split(/\s+/).map(w => w.replace(/[^A-Za-z'-]/g, '')).filter(Boolean)
  if (!sentences.length || !words.length) return null
  const syl = words.reduce((a, w) => a + syllables(w), 0)
  const wps = words.length / sentences.length
  const spw = syl / words.length
  return {
    grade: 0.39 * wps + 11.8 * spw - 15.59,
    wordsPerSentence: wps,
    longWords: words.filter(w => syllables(w) >= 3).length / words.length,
    words: words.length,
  }
}

/* Which year each topic belongs to. */
const yearOf = new Map<string, string>()
const STAGES: Stage[] = ['creche', 'primary', 'jhs', 'shs', 'tvet', 'uni']
for (const stage of STAGES)
  for (const subject of subjectsFor(stage)) {
    const s = syllabusFor(stage, subject.id); if (!s) continue
    for (const t of allTopics(s)) yearOf.set(t.id, t.year)
  }

/* What a child in each year can actually read, as a school grade. */
const EXPECT: Record<string, number> = {
  'KG 1': 0, 'KG 2': 0, 'Basic 1': 1, 'Basic 2': 2, 'Basic 3': 3,
  'Basic 4': 4, 'Basic 5': 5, 'Basic 6': 6,
  /* JHS and SHS were missing, so the one JHS lesson written so far sat at
     grade 10 and the check reported nothing. A check that does not cover a
     stage is worse than no check for it: it reads as a pass. */
  'JHS 1': 7, 'JHS 2': 8, 'JHS 3': 9,
  'SHS 1': 10, 'SHS 2': 11, 'SHS 3': 12,
}

const rows: Array<{ year: string, id: string, part: string, g: number, wps: number }> = []
for (const t of allTaught()) {
  const year = yearOf.get(t.topicId) ?? '?'
  const parts: Array<[string, string]> = [['idea', t.idea]]
  if (t.mechanism) parts.push(['mechanism', t.mechanism])
  if (t.recap) parts.push(['recap', t.recap])
  parts.push(['method', t.method.join(' ')])
  for (const [part, text] of parts) {
    const r = grade(text)
    if (r) rows.push({ year, id: t.topicId, part, g: r.grade, wps: r.wordsPerSentence })
  }
}

const byYear = new Map<string, typeof rows>()
for (const r of rows) {
  if (!byYear.has(r.year)) byYear.set(r.year, [])
  byYear.get(r.year)!.push(r)
}

console.log('year        parts   avg grade   expected   worst part')
let over = 0
for (const [year, rs] of [...byYear].sort()) {
  const avg = rs.reduce((a, r) => a + r.g, 0) / rs.length
  const worst = rs.reduce((a, r) => (r.g > a.g ? r : a))
  const want = EXPECT[year]
  const flag = want !== undefined && avg > want + 1 ? '  TOO HARD' : ''
  if (flag) over++
  console.log(
    `${year.padEnd(11)} ${String(rs.length).padStart(4)}   ${avg.toFixed(1).padStart(8)}   `
    + `${want === undefined ? '   -' : String(want).padStart(4)}       `
    + `${worst.id}/${worst.part} ${worst.g.toFixed(1)}${flag}`)
}
console.log(`\n${over} year group(s) above what a child that age can read alone.`)
