/**
 * Load a real past examination paper.
 *
 *   node tools/import-papers.mjs <paper.json> [more.json ...]         check only
 *   node tools/import-papers.mjs <paper.json> --commit                write
 *   node tools/import-papers.mjs <paper.json> --commit --approve      write and serve
 *
 * ── Why this exists ──────────────────────────────────────────────────────────
 *
 * capability.ts says one thing about past questions that it says about nothing
 * else on the platform: "Add real past papers. These are never generated." A
 * question the AI invented and presented as a BECE question is a lie told to a
 * child about the examination they are about to sit. They will revise from it.
 *
 * So there had to be a way in for the real thing, and this is it.
 *
 * ── Why a hand written JSON file and not a PDF reader ────────────────────────
 *
 * A PDF scraper was the obvious idea and it is the wrong one. Ghanaian past
 * papers circulate as photocopies and phone photographs. Anything that reads
 * them has to guess: where question 4 ends and 5 begins, whether that mark is
 * a minus sign or a dash, which of the five options was (d). A scraper that is
 * ninety five per cent right produces a question bank that is five per cent
 * wrong, and nobody can tell which five, which is a worse position than having
 * no past papers at all.
 *
 * A structured file moves the guessing to a person who can see the paper. It
 * costs an afternoon per paper and it buys certainty. It also means a teacher
 * can contribute one from a laptop in Kumasi with no tooling beyond a text
 * editor or a spreadsheet exported to JSON, which a scraper does not.
 *
 * ── What the format cannot say ───────────────────────────────────────────────
 *
 * There is no `origin` field and no `generated` field. There is no way to spell
 * "the AI wrote this" in the input, because the importer writes origin
 * IMPORTED on every row and migration 20260921000010 refuses a paper to any
 * other origin. A generated question cannot reach the past question store
 * through this tool, and it cannot reach it around this tool either.
 *
 * Every question must name the paper, the year, the paper part and its own
 * number in that paper. A question with no provenance is not imported as
 * anonymous: the file is rejected. Provenance is the feature.
 *
 * ── Licensing, said plainly ──────────────────────────────────────────────────
 *
 * Copyright in WASSCE and BECE papers belongs to WAEC. This tool cannot get
 * you a paper and neither can anyone else who does not hold that right. What it
 * does is make you write down, in the file, what right you have: `licence` has
 * no UNKNOWN value and `licenceNote` cannot be blank. If you cannot fill them
 * in honestly, the paper does not go in.
 *
 * ── Deliberately not checked ─────────────────────────────────────────────────
 *
 * The owner's standing rule is no em dashes or en dashes in our prose, and the
 * rest of this repository is checked for them. Imported stems are not. A past
 * paper is a quotation, and silently editing the punctuation of a question a
 * child will meet in an examination hall would be a small falsification of the
 * document. Our words obey the rule; WAEC's words are reproduced.
 */

import fs from 'node:fs'
import path from 'node:path'

import { createClient } from '@supabase/supabase-js'

/* ── The shapes the file may use ─────────────────────────────────────────────
   Mirrors edu_questions.kind exactly. A kind outside this list is a typo or a
   question type the platform cannot mark, and both are worth stopping for. */
const KINDS = [
  'MULTIPLE_CHOICE', 'TRUE_FALSE', 'SHORT_ANSWER', 'NUMERIC',
  'STRUCTURED', 'ESSAY', 'PRACTICAL', 'FILE_SUBMISSION', 'MATCHING',
]

/* The kinds the server can mark without a human, from edu_submit_practice. A
   question of one of these kinds still only counts as auto markable when it
   actually carries an answer key, because a key the importer invented would be
   marking a child against a guess. */
const MARKABLE = ['MULTIPLE_CHOICE', 'TRUE_FALSE', 'NUMERIC', 'SHORT_ANSWER']

const DIFFICULTIES = ['FOUNDATION', 'CORE', 'EXTENSION']

/* Matches edu_exam_papers.licence. No UNKNOWN, on purpose. */
const LICENCES = ['OWNED', 'PERMISSION_GRANTED', 'PUBLIC_DOMAIN', 'OPEN_LICENCE', 'SCHOOL_MOCK']

/* Keys the format accepts. Anything else is refused rather than ignored: a
   field the importer silently drops is a field the person thought they had
   filled in, and on a paper that matters. */
const PAPER_KEYS = [
  'exam', 'year', 'paper', 'subject', 'curriculum', 'curriculumVersion',
  'level', 'title', 'licence', 'licenceNote', 'sourceReference',
]
const QUESTION_KEYS = [
  'number', 'kind', 'stem', 'objective', 'marks', 'options', 'answer',
  'accepted', 'tolerance', 'unit', 'placeholder', 'explanation', 'difficulty',
]

/* ── Reading the arguments ────────────────────────────────────────────────── */

const argv = process.argv.slice(2)
const commit = argv.includes('--commit')
const approve = argv.includes('--approve')
const files = argv.filter(a => !a.startsWith('--'))

if (files.length === 0) {
  console.error('usage: node tools/import-papers.mjs <paper.json> [...] [--commit] [--approve]')
  console.error('       without --commit nothing is written, which is the default on purpose')
  process.exit(2)
}

/* ── Errors are collected, not thrown ────────────────────────────────────────
   One pass reports every fault in the file. A person transcribing a paper wants
   the whole list, not the first line that failed on each of forty runs. */
class Faults {
  constructor(label) { this.label = label; this.list = [] }
  add(where, message) { this.list.push(`${where}: ${message}`) }
  get ok() { return this.list.length === 0 }
  report() {
    console.error(`\n  ${this.label}: ${this.list.length} problem(s), nothing imported`)
    for (const f of this.list) console.error(`    ${f}`)
  }
}

const isString = v => typeof v === 'string' && v.trim().length > 0
const unknownKeys = (obj, allowed) => Object.keys(obj).filter(k => !allowed.includes(k))

/* ── Shape validation, before the database is touched at all ─────────────── */

function validateShape(doc, faults) {
  if (doc === null || typeof doc !== 'object' || Array.isArray(doc)) {
    faults.add('file', 'the top level must be an object with "paper" and "questions"')
    return
  }
  for (const k of Object.keys(doc)) {
    if (k !== 'paper' && k !== 'questions') {
      faults.add('file', `unknown top level key "${k}"`)
    }
  }

  const p = doc.paper
  if (p === undefined || p === null || typeof p !== 'object' || Array.isArray(p)) {
    faults.add('paper', 'missing. Every question needs a document to belong to.')
  } else {
    for (const k of unknownKeys(p, PAPER_KEYS)) faults.add('paper', `unknown key "${k}"`)
    if (!isString(p.exam)) faults.add('paper.exam', 'required, an edu_examinations code such as BECE')
    if (!Number.isInteger(p.year) || p.year < 1950 || p.year > 2100) {
      faults.add('paper.year', 'required, a whole year between 1950 and 2100')
    }
    if (!isString(p.paper)) {
      faults.add('paper.paper', 'required, the paper part as printed, such as "Paper 2"')
    }
    if (!isString(p.subject)) faults.add('paper.subject', 'required, a subject code or name')
    if (!isString(p.curriculum)) {
      faults.add('paper.curriculum', 'required, the curriculum code whose objectives the questions cite')
    }
    if (!LICENCES.includes(p.licence)) {
      faults.add('paper.licence', `required, one of ${LICENCES.join(', ')}. ` +
        'There is no UNKNOWN. Copyright in WASSCE and BECE papers belongs to WAEC, ' +
        'so state the right you hold or do not load the paper.')
    }
    if (!isString(p.licenceNote)) {
      faults.add('paper.licenceNote', 'required, who granted the right, when, and on what terms')
    }
  }

  const qs = doc.questions
  if (!Array.isArray(qs) || qs.length === 0) {
    faults.add('questions', 'required, a non empty array')
    return
  }

  const seen = new Map()
  qs.forEach((q, i) => {
    const at = `questions[${i}]`
    if (q === null || typeof q !== 'object' || Array.isArray(q)) {
      faults.add(at, 'must be an object')
      return
    }
    for (const k of unknownKeys(q, QUESTION_KEYS)) {
      // origin and approval are named explicitly because someone will try.
      const why = (k === 'origin' || k === 'approval' || k === 'generated')
        ? 'the format has no such field. Every imported question is origin IMPORTED, ' +
          'and the database refuses a paper to anything else.'
        : 'unknown key'
      faults.add(`${at}.${k}`, why)
    }

    const num = typeof q.number === 'number' ? String(q.number) : q.number
    if (!isString(num)) {
      faults.add(`${at}.number`, 'required, the question number as printed, such as "4" or "4(b)(ii)". ' +
        'A question with no number has no provenance and cannot be imported.')
    } else if (seen.has(num.trim())) {
      faults.add(`${at}.number`, `"${num.trim()}" is already used by questions[${seen.get(num.trim())}]. ` +
        'One paper has one question of each number.')
    } else {
      seen.set(num.trim(), i)
    }

    if (!KINDS.includes(q.kind)) faults.add(`${at}.kind`, `required, one of ${KINDS.join(', ')}`)
    if (!isString(q.stem)) faults.add(`${at}.stem`, 'required, the question as printed')
    if (!isString(q.objective)) {
      faults.add(`${at}.objective`, 'required, the curriculum code this question tests, such as B9.1.2.1.3. ' +
        'A past question filed against no objective can never be served, ' +
        'because practiceForObjective asks by objective.')
    }
    if (q.marks !== undefined && !(typeof q.marks === 'number' && q.marks > 0)) {
      faults.add(`${at}.marks`, 'must be a positive number when given')
    }
    if (q.difficulty !== undefined && !DIFFICULTIES.includes(q.difficulty)) {
      faults.add(`${at}.difficulty`, `must be one of ${DIFFICULTIES.join(', ')} when given`)
    }

    if (q.kind === 'MULTIPLE_CHOICE') {
      if (!Array.isArray(q.options) || q.options.length < 2) {
        faults.add(`${at}.options`, 'a multiple choice question needs its options, as [{ key, text }]')
      } else {
        q.options.forEach((o, j) => {
          if (o === null || typeof o !== 'object' || !isString(o.key) || !isString(o.text)) {
            faults.add(`${at}.options[${j}]`, 'each option needs a key and its text')
          }
        })
        if (isString(q.answer) && !q.options.some(o => o && o.key === q.answer)) {
          faults.add(`${at}.answer`, `"${q.answer}" is not one of the options`)
        }
      }
    }
    if (q.kind === 'TRUE_FALSE' && q.answer !== undefined && typeof q.answer !== 'boolean') {
      faults.add(`${at}.answer`, 'must be true or false')
    }
    if (q.kind === 'NUMERIC' && q.answer !== undefined && typeof q.answer !== 'number') {
      faults.add(`${at}.answer`, 'must be a number')
    }
    if (q.kind === 'SHORT_ANSWER' && q.accepted !== undefined) {
      if (!Array.isArray(q.accepted) || !q.accepted.every(isString)) {
        faults.add(`${at}.accepted`, 'must be an array of accepted answer strings')
      }
    }
  })
}

/* ── The answer key, and when there is not one ───────────────────────────────
   A past paper is often circulated without its marking scheme. That is fine:
   the question is still real and still worth practising. It is imported as not
   auto markable, so the learner is told it needs human marking, rather than
   marked against a key the importer made up. */
function payloadFor(q) {
  const payload = {}
  if (q.options !== undefined) payload.options = q.options
  if (q.unit !== undefined) payload.unit = q.unit
  if (q.placeholder !== undefined) payload.placeholder = q.placeholder
  if (q.answer !== undefined) payload.answer = q.answer
  if (q.accepted !== undefined) payload.accepted = q.accepted
  if (q.tolerance !== undefined) payload.tolerance = q.tolerance

  const hasKey = q.kind === 'SHORT_ANSWER'
    ? Array.isArray(q.accepted) && q.accepted.length > 0
    : q.answer !== undefined
  return { payload, autoMarkable: MARKABLE.includes(q.kind) && hasKey }
}

/* ── Resolving the file's names against what is really in the database ───── */

async function resolve(db, doc, faults) {
  const p = doc.paper
  const out = {}

  const { data: exam, error: examErr } = await db
    .from('edu_examinations').select('code, name, is_active').eq('code', p.exam).maybeSingle()
  if (examErr) throw examErr
  if (!exam) {
    faults.add('paper.exam', `"${p.exam}" is not a known examination. ` +
      'Add it to edu_examinations first, rather than inventing a code here.')
  } else if (!exam.is_active) {
    faults.add('paper.exam', `"${p.exam}" is marked inactive`)
  }
  out.exam = exam

  const { data: subjects, error: subErr } = await db
    .from('edu_subjects').select('id, code, name')
    .or(`code.eq.${p.subject},name.eq.${p.subject}`)
  if (subErr) throw subErr
  if (!subjects || subjects.length === 0) {
    faults.add('paper.subject', `"${p.subject}" matches no row in edu_subjects, by code or by name`)
  } else if (subjects.length > 1) {
    faults.add('paper.subject', `"${p.subject}" is ambiguous, it matches ${subjects.length} subjects. Use the code.`)
  } else {
    out.subject = subjects[0]
  }

  // The curriculum version pins what the objective codes mean. Migration 012
  // allows at most one active version per code, so omitting the version means
  // the active one, which is what a teacher expects and what 016 relies on.
  let curQuery = db.from('edu_curricula').select('id, code, version, name').eq('code', p.curriculum)
  curQuery = p.curriculumVersion ? curQuery.eq('version', p.curriculumVersion) : curQuery.eq('is_active', true)
  const { data: curricula, error: curErr } = await curQuery
  if (curErr) throw curErr
  if (!curricula || curricula.length === 0) {
    faults.add('paper.curriculum', `no curriculum ${p.curriculum}` +
      (p.curriculumVersion ? ` version ${p.curriculumVersion}` : ' is active') +
      '. Load the curriculum first with tools/import-curriculum.mjs.')
  } else if (curricula.length > 1) {
    faults.add('paper.curriculum', `${p.curriculum} resolves to ${curricula.length} versions, name one with curriculumVersion`)
  } else {
    out.curriculum = curricula[0]
  }

  if (p.level !== undefined) {
    const { data: level, error: lvlErr } = await db
      .from('edu_levels').select('code').eq('code', p.level).maybeSingle()
    if (lvlErr) throw lvlErr
    if (!level) faults.add('paper.level', `"${p.level}" is not a known level code`)
    out.level = level
  }

  // Objectives. Unresolved codes reject the whole file rather than being
  // dropped, which is the opposite of migration 016's backfill and for the
  // opposite reason: 016 was carrying across history that already existed,
  // where a missing objective meant the reference was never real. Here the
  // question is real and the code is ours to get right, so a code that does
  // not resolve means the transcription or the curriculum is wrong, and
  // importing the rest would leave a paper with holes nobody notices.
  out.objectives = new Map()
  if (out.curriculum) {
    const codes = [...new Set(doc.questions.map(q => q && q.objective).filter(isString))]
    for (let i = 0; i < codes.length; i += 200) {
      const slice = codes.slice(i, i + 200)
      const { data, error } = await db
        .from('edu_learning_objectives').select('id, full_code')
        .eq('curriculum_id', out.curriculum.id).in('full_code', slice)
      if (error) throw error
      for (const row of data ?? []) out.objectives.set(row.full_code, row.id)
    }
    for (const code of codes) {
      if (!out.objectives.has(code)) {
        faults.add('questions', `objective "${code}" is not in ${out.curriculum.code} ${out.curriculum.version}`)
      }
    }
  }

  return out
}

/* ── Writing ─────────────────────────────────────────────────────────────────
   The paper row first, because a question cannot exist without it. Then the
   questions, one at a time, each with its objective link.

   source_exam, source_year and source_paper are deliberately not sent. The
   trigger in migration 20260921000010 derives them from the paper row, so this
   tool cannot write a provenance string that no document backs. */

async function write(db, doc, resolved) {
  const p = doc.paper
  const key = {
    exam_code: p.exam,
    year: p.year,
    paper_label: p.paper.trim(),
    subject_id: resolved.subject.id,
  }

  const { data: existing, error: findErr } = await db
    .from('edu_exam_papers').select('id').match(key).maybeSingle()
  if (findErr) throw findErr

  let paperId = existing?.id
  if (!paperId) {
    const { data, error } = await db.from('edu_exam_papers').insert({
      ...key,
      level_code: p.level ?? null,
      title: p.title ?? null,
      licence: p.licence,
      licence_note: p.licenceNote,
      source_reference: p.sourceReference ?? null,
    }).select('id').single()
    if (error) throw error
    paperId = data.id
    console.log(`  paper created: ${p.exam} ${p.year} ${key.paper_label}, ${resolved.subject.name}`)
  } else {
    console.log(`  paper already loaded: ${p.exam} ${p.year} ${key.paper_label}, ${resolved.subject.name}`)
  }

  // Which numbers are already in, so a second run is a no-op rather than a
  // duplicate. The unique index would refuse it anyway; this makes the refusal
  // a line of output instead of an error.
  const { data: had, error: hadErr } = await db
    .from('edu_questions').select('source_question_no').eq('paper_id', paperId)
  if (hadErr) throw hadErr
  const alreadyIn = new Set((had ?? []).map(r => r.source_question_no))

  let inserted = 0
  let skipped = 0
  let unmarkable = 0

  for (const q of doc.questions) {
    const number = String(q.number).trim()
    if (alreadyIn.has(number)) { skipped++; continue }

    const { payload, autoMarkable } = payloadFor(q)
    if (!autoMarkable) unmarkable++

    const { data, error } = await db.from('edu_questions').insert({
      curriculum_id: resolved.curriculum.id,
      kind: q.kind,
      stem: q.stem,
      payload,
      explanation: q.explanation ?? null,
      marks: q.marks ?? 1,
      difficulty: q.difficulty ?? null,
      paper_id: paperId,
      source_question_no: number,
      auto_markable: autoMarkable,
      // The only origin this tool can write, and the only one the database
      // will accept alongside a paper.
      origin: 'IMPORTED',
      // Transcription is not verification. A paper is typed in as IN_REVIEW and
      // is served to nobody until a person has read it against the document,
      // because a mistyped past question is the exact failure this whole
      // feature exists to prevent.
      approval: approve ? 'APPROVED' : 'IN_REVIEW',
    }).select('id').single()
    if (error) throw error

    const { error: linkErr } = await db.from('edu_question_objectives')
      .insert({ question_id: data.id, objective_id: resolved.objectives.get(q.objective) })
    if (linkErr) throw linkErr
    inserted++
  }

  return { inserted, skipped, unmarkable, approved: approve }
}

/* ── One file ───────────────────────────────────────────────────────────────*/

async function importFile(db, file) {
  const label = path.basename(file)
  const faults = new Faults(label)

  let doc
  try {
    doc = JSON.parse(fs.readFileSync(file, 'utf8'))
  } catch (e) {
    console.error(`\n  ${label}: not readable as JSON, ${e.message}`)
    return false
  }

  validateShape(doc, faults)
  if (!faults.ok) { faults.report(); return false }

  const resolved = await resolve(db, doc, faults)
  if (!faults.ok) { faults.report(); return false }

  const p = doc.paper
  console.log(`\n  ${label}`)
  console.log(`    ${p.exam} ${p.year} ${p.paper}, ${resolved.subject.name}`)
  console.log(`    ${doc.questions.length} question(s), against ${resolved.curriculum.code} ${resolved.curriculum.version}`)
  console.log(`    licence ${p.licence}: ${p.licenceNote}`)

  if (!commit) {
    const withoutKey = doc.questions.filter(q => !payloadFor(q).autoMarkable).length
    console.log(`    checks passed. ${withoutKey} question(s) would need human marking.`)
    console.log('    nothing written. Re-run with --commit.')
    return true
  }

  const r = await write(db, doc, resolved)
  console.log(`    ${r.inserted} imported, ${r.skipped} already present`)
  if (r.unmarkable > 0) {
    console.log(`    ${r.unmarkable} carry no answer key, so they are marked by a person, not guessed`)
  }
  console.log(r.approved
    ? '    approved, so they are served now'
    : '    left IN_REVIEW. Nothing is served until a person checks it against the paper.')
  return true
}

/* ── Main ───────────────────────────────────────────────────────────────────*/

const url = process.env.SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_KEY

if (!url || !serviceKey) {
  console.error('SUPABASE_URL and SUPABASE_SERVICE_KEY must be set.')
  console.error('Writing curriculum and examination reference data is national only under RLS,')
  console.error('so this runs with the service key and never from a browser session.')
  process.exit(2)
}

const db = createClient(url, serviceKey, { auth: { persistSession: false } })

console.log(commit ? 'importing' : 'checking only, nothing will be written')

let failed = 0
for (const file of files) {
  try {
    if (!(await importFile(db, file))) failed++
  } catch (e) {
    console.error(`\n  ${path.basename(file)}: ${e.message ?? e}`)
    failed++
  }
}

console.log(`\n${files.length - failed} of ${files.length} file(s) ${commit ? 'imported' : 'valid'}`)
process.exit(failed > 0 ? 1 : 0)
