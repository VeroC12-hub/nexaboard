import { subjectsFor } from '../../src/lib/education/subjects'
import { syllabusFor, allTopics } from '../../src/lib/education/syllabus'
import { hasTaught } from '../../src/lib/education/taught-registry'
import type { Stage } from '../../src/lib/education/learner'

/* The whole lesson library, in one import.

   The app loads lessons one stage at a time, so importing `subjects.ts` no
   longer fills the registry the way it used to. A script runs in node with
   no download to pay for and needs every stage, so it asks for all of them
   explicitly. Without this line the counts below are silently zero. */
import '../../src/lib/education/library/lessons/index'
const stage = (process.argv[2] ?? 'jhs') as Stage
const want = process.argv[3]
const bySub = new Map<string, number>()
for (const subject of subjectsFor(stage)) {
  const s = syllabusFor(stage, subject.id); if (!s) continue
  for (const t of allTopics(s)) {
    if (hasTaught(t.id)) continue
    if (want && t.year !== want) continue
    bySub.set(subject.id, (bySub.get(subject.id) ?? 0) + 1)
    if (want) console.log(`[${subject.id}] ${t.id}: ${t.title} -> ${t.outcome}`)
  }
}
if (!want) for (const [k, v] of [...bySub].sort((a, b) => b[1] - a[1])) console.log(`${k.padEnd(22)} ${v}`)
