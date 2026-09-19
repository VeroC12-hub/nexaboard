// What the syllabus layer actually holds, and whether it is coherent.
// Run through tsx so the TypeScript modules load directly.
import { SUBJECTS, readinessOf, shapeOf } from './src/lib/education/subjects.ts'
import { syllabusFor, allTopics, foundations, placeOf, topicsFor } from './src/lib/education/syllabus.ts'

const stages = Object.keys(SUBJECTS)
let totalTopics = 0
let totalSubjects = 0
let outlined = 0
const problems = []

for (const stage of stages) {
  const rows = []
  for (const s of SUBJECTS[stage]) {
    totalSubjects += 1
    const r = readinessOf(stage, s)
    const shape = shapeOf(stage, s.id)
    if (r !== 'none') outlined += 1
    if (shape) totalTopics += shape.topics
    rows.push(`${s.name} [${r}${shape ? ' ' + shape.strands + 'str/' + shape.topics + 'top' : ''}]`)

    const syl = syllabusFor(stage, s.id)
    if (!syl) {
      if (r !== 'none') problems.push(`${stage}:${s.id} readiness ${r} but no syllabus`)
      continue
    }

    // Every id unique, every `needs` resolvable, every topic placeable.
    const topics = allTopics(syl)
    const ids = new Set()
    for (const t of topics) {
      if (ids.has(t.id)) problems.push(`${stage}:${s.id} duplicate topic id ${t.id}`)
      ids.add(t.id)
      if (!t.title || !t.outcome || !t.year) problems.push(`${stage}:${s.id} incomplete topic ${t.id}`)
      if (!placeOf(syl, t.id)) problems.push(`${stage}:${s.id} ${t.id} not placeable`)
      // A dash slipped into prose is the one style rule this repo keeps everywhere.
      if (/[—–]/.test(t.title + t.outcome)) problems.push(`${stage}:${s.id} ${t.id} has a dash`)
    }
    for (const t of topics) {
      for (const need of t.needs ?? []) {
        if (!ids.has(need)) problems.push(`${stage}:${s.id} ${t.id} needs missing ${need}`)
      }
    }
    if (syl.source !== 'MODEL') problems.push(`${stage}:${s.id} unexpected source ${syl.source}`)
    if (!syl.note) problems.push(`${stage}:${s.id} MODEL outline with no note`)

    // Nothing may claim an indicator code or an examination fact.
    const blob = JSON.stringify(syl)
    if (/\bB\d\.\d+\.\d+\.\d+/.test(blob)) problems.push(`${stage}:${s.id} contains an indicator code`)
    if (/\b(BECE|WASSCE)\b/.test(blob)) problems.push(`${stage}:${s.id} names an examination`)
    if (/\b\d+ marks?\b/i.test(blob)) problems.push(`${stage}:${s.id} claims marks`)
  }
  console.log('\n' + stage.toUpperCase())
  for (const r of rows) console.log('  ' + r)
}

console.log('\n---------------------------------------------')
console.log('subjects listed      ' + totalSubjects)
console.log('subjects openable    ' + outlined)
console.log('topics written       ' + totalTopics)

// Year filtering and foundation walking, on a real case.
const jhsMaths = syllabusFor('jhs', 'maths')
console.log('\nJHS 2 maths topics:  ' + topicsFor(jhsMaths, 'JHS 2').length
  + ' of ' + allTopics(jhsMaths).length)
console.log('ratio stands on:     '
  + foundations(jhsMaths, 'ratio-proportion-jhs').map(t => t.title).join(', '))
const place = placeOf(jhsMaths, 'pythagoras-jhs')
console.log('pythagoras sits in:  ' + place.strand.name + ' / ' + place.subStrand.name)

console.log('\nproblems: ' + problems.length)
for (const p of problems.slice(0, 40)) console.log('  ' + p)
