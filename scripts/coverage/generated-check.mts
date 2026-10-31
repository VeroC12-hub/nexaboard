/**
 * Does the reader refuse what it should refuse?
 *
 * These are the failures that render perfectly and are wrong, which is the
 * whole reason `generated.ts` exists. Run: npx tsx scripts/coverage/generated-check.mts
 */

import { readOutline, readTaught } from '../../src/lib/education/generated'

let pass = 0
let fail = 0

function check(name: string, got: boolean, want: boolean) {
  if (got === want) { pass++; console.log(`  ok    ${name}`) }
  else { fail++; console.log(`  FAIL  ${name}  (wanted ${want ? 'accepted' : 'refused'})`) }
}

const good = JSON.stringify({
  topicId: 'tens-and-ones',
  idea: 'A number is made of tens and ones.',
  mechanism: 'The place a digit sits says what it is worth.',
  method: ['Count the tens first.', 'Then the ones.'],
  worked: [{ level: 1, ask: 'What is 34?', steps: ['3 tens is thirty.'], answer: '34.' }],
  traps: [{ mistake: 'Reading 34 as three four.', why: 'The 3 is thirty.' }],
  questions: [{
    id: 'tao-1', ask: 'Which is bigger?', kind: 'choice',
    options: ['29', '31'], answer: '31', teach: 'Three tens beat two.', level: 1,
  }],
})

console.log('A stored lesson')
check('a sound lesson is accepted', readTaught(good, 'tens-and-ones') !== null, true)
check('wrapped in a code fence is still accepted',
  readTaught('Here you go:\n```json\n' + good + '\n```', 'tens-and-ones') !== null, true)
check('no idea is refused',
  readTaught(JSON.stringify({ method: ['a'] }), 't') !== null, false)
check('no method is refused',
  readTaught(JSON.stringify({ idea: 'a' }), 't') !== null, false)
check('not JSON at all is refused', readTaught('I cannot do that.', 't') !== null, false)

/* The dangerous one: it renders, and nobody can answer it correctly. */
const wrongChoice = JSON.stringify({
  idea: 'a', method: ['b'],
  questions: [{
    ask: 'Which?', kind: 'choice', options: ['A', 'B'], answer: 'C',
    teach: 'because', level: 1,
  }],
})
const t1 = readTaught(wrongChoice, 't')
check('a choice question whose answer is not an option is dropped',
  (t1?.questions ?? []).length === 0, true)

const workedNoSteps = JSON.stringify({
  idea: 'a', method: ['b'],
  worked: [{ level: 1, ask: 'What?', steps: [], answer: '4.' }],
})
check('a worked example with no steps is dropped',
  (readTaught(workedNoSteps, 't')?.worked ?? []).length === 0, true)

const halfTrap = JSON.stringify({
  idea: 'a', method: ['b'], traps: [{ mistake: 'Being careless.' }],
})
check('a trap with no cause is dropped',
  (readTaught(halfTrap, 't')?.traps ?? []).length === 0, true)

const figureNoAlt = JSON.stringify({
  idea: 'a', method: ['b'],
  figure: { svg: '<svg viewBox="0 0 640 400"><text x="10" y="20">hi</text></svg>' },
})
check('a figure with no alt text is dropped',
  readTaught(figureNoAlt, 't')?.figure === undefined, true)

const claimsApproved = JSON.stringify({
  idea: 'a', method: ['b'], approved: true, source: 'WRITTEN',
})
const t2 = readTaught(claimsApproved, 't')
check('a model cannot approve its own lesson', t2?.approved === false, true)
check('a model cannot claim it was written by hand', t2?.source === 'GENERATED', true)

console.log('\nAn outline')
const meta = { subjectId: 'maths', stage: 'primary' as const, year: 'Basic 2', curriculum: 'school-x' }

const outline = JSON.stringify({
  subject: 'Mathematics',
  strands: [{
    id: 'number', name: 'Number', purpose: 'What numbers do.',
    subStrands: [{
      id: 'counting', name: 'Counting',
      topics: [{ id: 'tens-and-ones', title: 'Tens and ones', outcome: 'Split a number into tens and ones.' }],
    }],
  }],
})
check('a sound outline is accepted', readOutline(outline, meta) !== null, true)
check('it is filed under the school curriculum',
  readOutline(outline, meta)?.curriculum === 'school-x', true)
check('it is generated and says so',
  readOutline(outline, meta)?.source === 'GENERATED', true)

const noTopics = JSON.stringify({
  strands: [{ id: 's', name: 'S', subStrands: [{ id: 'x', name: 'X', topics: [] }] }],
})
check('a strand with no topics is refused', readOutline(noTopics, meta) !== null, false)

const noOutcome = JSON.stringify({
  strands: [{
    id: 's', name: 'S',
    subStrands: [{ id: 'x', name: 'X', topics: [{ id: 'a', title: 'A' }] }],
  }],
})
check('a topic with no outcome is refused', readOutline(noOutcome, meta) !== null, false)

const duplicate = JSON.stringify({
  strands: [{
    id: 's', name: 'S',
    subStrands: [{
      id: 'x', name: 'X',
      topics: [
        { id: 'a', title: 'A', outcome: 'Do A.' },
        { id: 'a', title: 'Also A', outcome: 'Do A again.' },
      ],
    }],
  }],
})
check('a duplicate topic id is refused', readOutline(duplicate, meta) !== null, false)

console.log(`\n${pass} passed, ${fail} failed`)
if (fail) process.exitCode = 1
