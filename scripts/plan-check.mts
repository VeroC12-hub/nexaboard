// What plan does a learner with no history actually get?
//
//   npx tsx scripts/plan-check.mts
//
// Written because this was wrong in production and nothing would have caught
// it. A Basic 1 learner with no recorded preference was planned as video then
// prose: her two slots went to a medium that cannot be rendered and a medium
// she cannot read, and picture, game and questions were all reported to the
// tutor as deliberately left out. The lesson that reached her was nineteen
// paragraphs of prose.
//
// Every line below is a plan nobody should ever be given. Run it after touching
// RENDERABLE, fromStated or partsAllowed.

import { localPlan, RENDERABLE } from '../src/lib/education/plan-core'
import type { LearnerProfile } from '../src/lib/education/learner'

type Diet = LearnerProfile['diet']

const who = (stage: string, level: string, diet: Diet): LearnerProfile => ({
  id: 'check',
  fullName: 'Check',
  stage: stage as LearnerProfile['stage'],
  level,
  forChild: false,
  goal: '',
  approach: '',
  whenStuck: '',
  footing: '',
  diet,
  aiNotes: {},
} as LearnerProfile)

const CASES: Array<[string, string, Diet]> = [
  ['creche', 'KG 1', 'MIXED'],
  ['creche', 'KG 1', 'WATCH'],
  ['primary', 'Basic 1', 'MIXED'],
  ['primary', 'Basic 1', 'READ'],
  ['primary', 'Basic 4', 'MIXED'],
  ['jhs', 'JHS 2', 'MIXED'],
  ['shs', 'SHS 1', 'PRACTISE'],
]

console.log('renderable today:', RENDERABLE.join(', '), '\n')

let bad = 0
for (const [stage, level, diet] of CASES) {
  const plan = localPlan({ profile: who(stage, level, diet), attempts: [], asks: [] })
  const leads = plan.parts[0]?.medium ?? '(nothing)'
  const parts = plan.parts.map(p => p.medium).join(' then ')

  /* Two rules, and both were broken in production.

     A plan may not contain a medium that cannot be produced, and a learner who
     cannot read may not be taught by reading. Everything else is a judgement
     about her and is not this script's business. */
  const unbuildable = plan.parts.filter(p => !RENDERABLE.includes(p.medium))
  const young = stage === 'creche' || /basic ?[12]\b/i.test(level)
  const readsToANonReader = young && diet !== 'READ' && leads === 'prose'

  const problem = unbuildable.length
    ? `CANNOT BE BUILT: ${unbuildable.map(p => p.medium).join(', ')}`
    : readsToANonReader
      ? 'LEADS WITH PROSE TO A LEARNER WHO CANNOT READ'
      : ''
  if (problem) bad += 1

  console.log(`${stage.padEnd(8)} ${level.padEnd(9)} ${String(diet).padEnd(9)} -> ${parts.padEnd(34)} ${problem}`)
  console.log(`${' '.repeat(29)}without: ${plan.without.join(', ') || 'nothing'}`)
}

console.log(`\n${bad ? `${bad} plan(s) a learner should never get` : 'every plan is buildable and reaches the learner'}`)
process.exit(bad ? 1 : 0)
