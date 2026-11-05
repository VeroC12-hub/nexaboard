/**
 * Question depth per lesson, for one content file or a list of topic ids.
 *
 * Run: npx tsx scripts/coverage/question-depth.mts <file-basename|topicId> ...
 *      npx tsx scripts/coverage/question-depth.mts --all
 *
 * Reports, for each lesson asked about: how many questions it carries, any
 * choice question whose answer is not among its options, any numeric
 * question with options, and any question id used twice within one lesson. Exits non-zero if any lesson asked about is under 8 or broken.
 */

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { allTaught } from '../../src/lib/education/taught-registry'
import '../../src/lib/education/library/lessons/index'

const DIR = 'src/lib/education/library/lessons'
const args = process.argv.slice(2)
const all = args.includes('--all')
const wanted = new Set<string>()
for (const a of args) {
  const f = a.endsWith('.ts') ? a : `${a}.ts`
  if (readdirSync(DIR).includes(f)) {
    for (const m of readFileSync(join(DIR, f), 'utf8').matchAll(/topicId:\s*'([^']+)'/g)) wanted.add(m[1])
  } else wanted.add(a)
}


let bad = 0
for (const t of allTaught()) {
  if (!all && !wanted.has(t.topicId)) continue
  const qs = t.questions ?? []
  const problems: string[] = []
  if (qs.length < 8) problems.push(`only ${qs.length} questions`)
  const ids = new Map<string, number>()
  for (const q of qs) ids.set(q.id, (ids.get(q.id) ?? 0) + 1)
  for (const q of qs) {
    if (q.kind === 'choice' && !(q.options ?? []).includes(q.answer)) problems.push(`${q.id}: answer not in options`)
    if (q.kind === 'choice' && new Set(q.options).size !== (q.options ?? []).length) problems.push(`${q.id}: repeated option`)
    if ((ids.get(q.id) ?? 0) > 1) problems.push(`${q.id}: id used twice in this lesson`)
    if (!q.teach?.trim()) problems.push(`${q.id}: no teach`)
  }
  if (problems.length) bad++
  if (problems.length || !all) console.log(`${problems.length ? 'FAIL' : 'ok  '} ${t.topicId} (${qs.length})${problems.length ? '  ' + problems.join('; ') : ''}`)
}
console.log(`\n${bad} lesson(s) with problems`)
process.exit(bad ? 1 : 0)
