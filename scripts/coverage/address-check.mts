/** The bounce the lesson address used to cause, and that it no longer does. */
import { subjectOfTopic, syllabusFor, topicById, allTopics } from '../../src/lib/education/syllabus'
import { subjectsFor } from '../../src/lib/education/subjects'
import type { Stage } from '../../src/lib/education/learner'

let pass = 0, fail = 0
const check = (name: string, ok: boolean) => {
  console.log((ok ? 'ok   ' : 'FAIL ') + name); ok ? pass++ : fail++
}

/* The exact failure: a maths topic in the address, english as the stored
   subject. Before, `everything` was built from english and the find missed. */
const english = syllabusFor('primary', 'english')!
check('a maths topic really is absent from the english outline',
  topicById(english, 'numbers-to-100') === null)
check('the address alone still finds its subject',
  subjectOfTopic('primary', 'numbers-to-100') === 'maths')

/* Every topic in every stage must be findable from its id alone, or some
   lesson address somewhere bounces. */
const STAGES: Stage[] = ['creche', 'primary', 'jhs', 'shs', 'tvet', 'uni']
let checked = 0, orphans: string[] = []
for (const stage of STAGES)
  for (const subject of subjectsFor(stage)) {
    const s = syllabusFor(stage, subject.id)
    if (!s) continue
    for (const t of allTopics(s)) {
      checked++
      if (subjectOfTopic(stage, t.id) !== subject.id) orphans.push(`${stage}/${subject.id}/${t.id}`)
    }
  }
check(`all ${checked} topic addresses resolve to their own subject`, orphans.length === 0)
if (orphans.length) console.log('   ' + orphans.slice(0, 10).join('\n   '))

check('a topic id belonging to nothing is still refused',
  subjectOfTopic('primary', 'no-such-topic') === null)

console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
