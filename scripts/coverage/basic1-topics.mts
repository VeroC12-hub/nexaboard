/** The Basic 1 topics, with ids and outcomes. Run: npx tsx scripts/coverage/basic1-topics.mts */

import { subjectsFor } from '../../src/lib/education/subjects'
import { syllabusFor, topicsFor, allTopics } from '../../src/lib/education/syllabus'

for (const subject of subjectsFor('primary')) {
  const syllabus = syllabusFor('primary', subject.id)
  if (!syllabus) continue
  const scoped = topicsFor(syllabus, 'Basic 1')
  const topics = scoped.length ? scoped : allTopics(syllabus)
  if (!topics.length) continue

  console.log(`\n## ${subject.name}  (${topics.length})`)
  for (const t of topics) {
    console.log(`- ${t.id}`)
    console.log(`    title:   ${t.title}`)
    console.log(`    outcome: ${t.outcome}`)
  }
}
