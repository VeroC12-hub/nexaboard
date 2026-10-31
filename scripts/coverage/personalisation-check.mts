import '../../src/lib/education/library/syllabus/index'
import '../../src/lib/education/library/lessons/index'
import { taughtFor } from '../../src/lib/education/taught-registry'
import { assemble } from '../../src/lib/education/taught'
import type { LearnerProfile } from '../../src/lib/education/learner'

const base = {
  id: 'x', name: 'x', version: 6, stage: 'primary', level: 'Basic 2',
  forChild: true, programme: null, subjectId: 'maths', results: [], aiNotes: {},
} as unknown as LearnerProfile

/* Depth is included because it is the axis that actually changes the words.
   Without it these four differed only in which blocks appeared, and two of
   them came out byte for byte identical. */
const people: Array<[string, Partial<LearnerProfile>]> = [
  ['shaky, catching up, shown, gist',
   { footing: 'SHAKY', goal: 'CATCH_UP', approach: 'SHOW_FIRST', diet: 'WATCH', whenStuck: 'METHOD', depth: 'BRIEF' }],
  ['strong, go further, doing, all',
   { footing: 'STRONG', goal: 'GO_FURTHER', approach: 'TRY_FIRST', diet: 'PRACTISE', whenStuck: 'HINT', depth: 'DEEP' }],
  ['middling, keep up, idea first',
   { footing: 'OK', goal: 'KEEP_UP', approach: 'IDEA_FIRST', diet: 'READ', whenStuck: 'HINT', depth: 'FULL' }],
  ['exam, strong, read, gist',
   { footing: 'STRONG', goal: 'EXAM', approach: 'IDEA_FIRST', diet: 'READ', whenStuck: 'EASIER', depth: 'BRIEF' }],
]

const t = taughtFor('tens-and-ones')!
const texts = new Map<string, string>()

for (const [who, over] of people) {
  const a = assemble(t, { ...base, ...over } as LearnerProfile)
  const prose = a.pieces
    .map(p => p.text ?? (p.lines ? p.lines.join(' ') : ''))
    .filter(Boolean).join(' ')
  const words = prose.split(/\s+/).filter(Boolean).length
  console.log(`\n${who}`)
  console.log(`  parts : ${a.pieces.map(p => p.kind).join(' > ')}`)
  console.log(`  words : ${words}`)
  console.log(`  why   : ${a.because}`)
  texts.set(who, prose)
}

/* How much of the actual wording differs between any two learners? */
const all = [...texts.entries()]
console.log('\n--- how much of the WORDING differs between two learners ---')
for (let i = 0; i < all.length; i++)
  for (let j = i + 1; j < all.length; j++) {
    const A = new Set(all[i][1].split(/(?<=\.)\s+/))
    const B = new Set(all[j][1].split(/(?<=\.)\s+/))
    const shared = [...A].filter(s => B.has(s)).length
    const union = new Set([...A, ...B]).size
    console.log(`  ${Math.round((shared / union) * 100)}% of sentences identical`
      + `   (${all[i][0].slice(0, 22)} vs ${all[j][0].slice(0, 22)})`)
  }
