import '../../src/lib/education/library/syllabus/index'
import '../../src/lib/education/library/lessons/index'
import { allTaught } from '../../src/lib/education/taught-registry'
import { subjectsFor } from '../../src/lib/education/subjects'
import { syllabusFor, allTopics } from '../../src/lib/education/syllabus'
import type { Stage } from '../../src/lib/education/learner'
function syl(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, '')
  if (!w) return 0
  const g = w.match(/[aeiouy]+/g)
  let n = g ? g.length : 1
  if (w.endsWith('e') && n > 1 && !/[aeiouy]e$/.test(w)) n -= 1
  return Math.max(1, n)
}
function grade(text: string) {
  const s = text.split(/[.!?]+/).map(x => x.trim()).filter(Boolean)
  const w = text.split(/\s+/).map(x => x.replace(/[^A-Za-z'-]/g, '')).filter(Boolean)
  if (!s.length || !w.length) return 0
  const sy = w.reduce((a, x) => a + syl(x), 0)
  return 0.39 * (w.length / s.length) + 11.8 * (sy / w.length) - 15.59
}
const yearOf = new Map<string, string>()
for (const stage of ['creche','primary','jhs','shs','tvet','uni'] as Stage[])
  for (const sub of subjectsFor(stage)) {
    const s = syllabusFor(stage, sub.id); if (!s) continue
    for (const t of allTopics(s)) yearOf.set(t.id, t.year)
  }
const want = process.argv[2] ?? 'JHS 2'
const limit = Number(process.argv[3] ?? 12)
for (const t of allTaught()) {
  if ((yearOf.get(t.topicId) ?? '?') !== want) continue
  const parts: Array<[string, string]> = [['idea', t.idea]]
  if (t.mechanism) parts.push(['mechanism', t.mechanism])
  if (t.recap) parts.push(['recap', t.recap])
  if (t.extension) parts.push(['extension', t.extension])
  if (t.brief?.idea) parts.push(['brief.idea', t.brief.idea])
  for (const [name, text] of parts) {
    const g = grade(text)
    if (g > limit) console.log(`${g.toFixed(1)}  ${t.topicId}/${name}`)
  }
}
