/** A school's curriculum overlays the national one, per subject. */
/* Loads every national outline into the registry as a side effect. Without
   it the national side of each comparison below is simply empty, which
   would make the fallback look broken when it is only unloaded. */
import '../../src/lib/education/library/syllabus/index'
import {
  defineCurriculum, register, syllabusFor, resolve, NATIONAL, allTopics,
} from '../../src/lib/education/syllabus'

let pass = 0, fail = 0
const check = (name: string, ok: boolean) => {
  console.log((ok ? 'ok   ' : 'FAIL ') + name); ok ? pass++ : fail++
}

const SCHOOL = 'school-st-marys'
defineCurriculum({ id: SCHOOL, name: "St Mary's", note: 'Our own scheme.' })

/* The school files its own Mathematics and nothing else. */
register({
  subjectId: 'maths',
  stage: 'primary',
  curriculum: SCHOOL,
  subject: 'Mathematics',
  source: 'SCHOOL',
  note: "St Mary's own scheme of work.",
  strands: [{
    id: 'own', name: 'Our strand',
    subStrands: [{
      id: 'own-a', name: 'Our sub strand',
      topics: [{ id: 'stmarys-counting', title: 'Our counting', outcome: 'Count our way.', year: 'Basic 1' }],
    }],
  }],
})

const theirMaths = syllabusFor('primary', 'maths', SCHOOL)
check("the school's own Mathematics is served to its learners",
  theirMaths?.source === 'SCHOOL' && allTopics(theirMaths).some(t => t.id === 'stmarys-counting'))

const theirEnglish = syllabusFor('primary', 'english', SCHOOL)
check('a subject the school did not file still comes from the national outline',
  theirEnglish !== null && theirEnglish.source !== 'SCHOOL')

const nationalMaths = syllabusFor('primary', 'maths', NATIONAL)
check("another school's learners are untouched by it",
  nationalMaths !== null && !allTopics(nationalMaths).some(t => t.id === 'stmarys-counting'))

check('a learner with no curriculum set gets the national one',
  syllabusFor('primary', 'maths')?.source === nationalMaths?.source)

check('an unknown curriculum falls back rather than failing',
  resolve('primary', 'maths', 'school-does-not-exist') !== null)

console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
