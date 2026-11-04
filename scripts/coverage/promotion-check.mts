/**
 * The promotion examination, checked without a browser.
 *
 * Sitting it by hand needs a quarter of a year's topics worked first, which
 * is eighteen lessons before the button even appears. That is right for a
 * learner and useless for checking the thing works, so this drives the same
 * pure functions the screen calls.
 *
 * Run: npx tsx scripts/coverage/promotion-check.mts
 */

import {
  attemptsFrom, attemptsFromPaper, examFor, markExam, markPaper,
  nextClassOf, paperFor, PASS, PER_SUBJECT,
} from '../../src/lib/education/promotion'
import { STAGE_YEARS, type LearnerProfile, type Stage } from '../../src/lib/education/learner'
import type { Attempt } from '../../src/lib/education/mastery'

import '../../src/lib/education/library/syllabus/index'
await import('../../src/lib/education/library/lessons/by-stage/creche')
await import('../../src/lib/education/library/lessons/by-stage/primary')
await import('../../src/lib/education/library/lessons/by-stage/jhs')
await import('../../src/lib/education/library/lessons/by-stage/shs')

let bad = 0
const ok = (what: string, cond: boolean, saw?: unknown) => {
  if (!cond) { bad++; console.log('  FAIL', what, saw === undefined ? '' : saw) }
  else console.log('  ok  ', what)
}

/* ── where each class leads ─────────────────────────────────────────────── */

console.log('The chain:')
for (const stage of ['creche', 'primary', 'jhs', 'shs'] as Stage[]) {
  for (const level of STAGE_YEARS[stage]) {
    const next = nextClassOf(stage, level)
    console.log(
      '  ', (stage + ' ' + level).padEnd(18), '->',
      next ? `${next.stage} ${next.level}${next.newStage ? '   (new stage)' : ''}` : 'end',
    )
  }
}

console.log()
console.log('Boundaries:')
ok('JHS 1 goes to JHS 2', nextClassOf('jhs', 'JHS 1')?.level === 'JHS 2')
ok('JHS 3 goes to SHS 1', nextClassOf('jhs', 'JHS 3')?.level === 'SHS 1')
ok('JHS 3 is a new stage', nextClassOf('jhs', 'JHS 3')?.newStage === true)
ok('JHS 2 is not a new stage', nextClassOf('jhs', 'JHS 2')?.newStage === false)
ok('KG 2 goes to Basic 1', nextClassOf('creche', 'KG 2')?.level === 'Basic 1')
ok('Basic 6 goes to JHS 1', nextClassOf('primary', 'Basic 6')?.level === 'JHS 1')
ok('SHS 3 is the end', nextClassOf('shs', 'SHS 3') === null)
ok('an unknown year is an end', nextClassOf('jhs', 'Form 4') === null)

/* ── a paper, marked ────────────────────────────────────────────────────── */

const learner = (stage: Stage, level: string): LearnerProfile => ({
  id: 'test', name: 'Test', results: [], stage, level,
  forChild: false, goal: 'KEEP_UP', approach: 'TRY_FIRST', whenStuck: 'HINT',
  footing: 'OKAY', diet: 'MIXED', depth: 'FULL', aiNotes: {}, version: 6,
} as unknown as LearnerProfile)

console.log()
for (const [stage, level] of [
  ['jhs', 'JHS 2'], ['primary', 'Basic 4'], ['shs', 'SHS 2'], ['creche', 'KG 1'],
] as Array<[Stage, string]>) {
  const p = learner(stage, level)
  const exam = examFor(p)
  console.log(`${level}: ${exam.sections.length} subjects, ${exam.total} questions`
    + `, moves to ${exam.next ? exam.next.level : 'nowhere'}`)
}

console.log()
console.log('Marking, on JHS 2:')
const p = learner('jhs', 'JHS 2')
const exam = examFor(p)
const all = exam.sections.flatMap(s => s.questions.map(x => x.question))

const every = new Map(all.map(q => [q.id, q.answer]))
const perfect = markExam(exam, every)
ok('every answer right is a pass', perfect.passed)
ok('and scores full marks', perfect.right === exam.total, `${perfect.right}/${exam.total}`)
ok('and names the next class', perfect.moveTo?.level === 'JHS 3')

const none = markExam(exam, new Map())
ok('an unanswered paper fails', !none.passed)
ok('and moves nobody', none.moveTo === null)

/* Exactly the pass mark, which is the edge that matters: half must pass, not
   fail, because "50 per cent to pass" is what the learner was told. */
const half = new Map<string, string>()
all.slice(0, Math.ceil(all.length / 2)).forEach(q => half.set(q.id, q.answer))
const edge = markExam(exam, half)
ok('exactly half is a pass', edge.passed, `${edge.right}/${edge.total}`)

const under = new Map<string, string>()
all.slice(0, Math.floor(all.length / 2) - 1).forEach(q => under.set(q.id, q.answer))
ok('just under half fails', !markExam(exam, under).passed)

ok('answers become attempts', attemptsFrom(exam, every).length === all.length)
ok('and are filed against topics, not questions',
  attemptsFrom(exam, every).every(a => !all.some(q => q.id === a.objectiveId)))
ok('an unanswered question is not an attempt', attemptsFrom(exam, new Map()).length === 0)

/* ── one subject's paper ────────────────────────────────────────────────── */

console.log()
console.log('Papers, on JHS 2:')
const maths = paperFor(p, 'maths')
ok('Mathematics has a paper', maths !== null)
if (maths) {
  ok(`it is ${PER_SUBJECT} questions`, maths.questions.length === PER_SUBJECT,
    maths.questions.length)
  const spreadOver = new Set(maths.questions.map(q => q.topicId)).size
  ok('spread over several topics', spreadOver > 1, `${spreadOver} topics`)
  ok('the same paper twice', 
    paperFor(p, 'maths')!.questions.map(q => q.question.id).join()
      === maths.questions.map(q => q.question.id).join())

  const right = new Map(maths.questions.map(q => [q.question.id, q.question.answer]))
  const mark = markPaper(maths, right)
  ok('full marks on a paper', mark.right === mark.total, `${mark.right}/${mark.total}`)
  ok('an empty paper scores nothing', markPaper(maths, new Map()).right === 0)
  ok('a paper files attempts against topics',
    attemptsFromPaper(maths, right).every(
      a => maths.questions.some(q => q.topicId === a.objectiveId)))
}
ok('a subject not on the timetable has no paper', paperFor(p, 'no-such-subject') === null)

console.log()
console.log('Every class can sit one:')
for (const [stage, level] of [
  ['creche', 'KG 1'], ['primary', 'Basic 4'], ['jhs', 'JHS 1'],
  ['jhs', 'JHS 3'], ['shs', 'SHS 2'],
] as Array<[Stage, string]>) {
  const e = examFor(learner(stage, level))
  ok(`${level} has papers`, e.sections.length > 0,
    `${e.sections.length} subjects, ${e.total} questions`)
}

console.log()
console.log(bad === 0 ? 'ALL CHECKS PASSED' : `${bad} CHECK(S) FAILED`)
process.exit(bad === 0 ? 0 : 1)
