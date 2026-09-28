/**
 * Load a national curriculum, so lessons can be filed against real objectives.
 *
 *   node tools/import-curriculum.mjs <curriculum.json> [...]          check only
 *   node tools/import-curriculum.mjs <curriculum.json> --commit       write
 *   node tools/import-curriculum.mjs <curriculum.json> --commit --supersede
 *
 * ── Why this exists ──────────────────────────────────────────────────────────
 *
 * capability.ts describes the gap this closes: "Load the national curriculum to
 * file lessons against objectives." Today a course whose school has filed
 * nothing runs on MODEL provenance, which is honest and teaches well, but it
 * cannot say that a topic is indicator B9.1.2.1.3, cannot say it is on the
 * BECE, and cannot say it carries eight marks. Those are checkable facts about
 * a real document, and docs/syllabus.md is blunt that the outlines in
 * src/lib/education/library/syllabus/ must never claim them.
 *
 * Loading the actual document raises those courses from MODEL to NATIONAL. It
 * does not change what the platform does. It changes what it is allowed to say.
 *
 * ── No new tables ────────────────────────────────────────────────────────────
 *
 * Everything this writes already exists, from migration 012:
 *
 *   edu_curricula            code, version, authority, effective_from
 *   edu_subject_offerings    subject taught at a level under that curriculum
 *   edu_strands
 *   edu_sub_strands
 *   edu_topics
 *   edu_learning_objectives  unique on (curriculum_id, full_code)
 *
 * Note that edu_curriculum_indicators, the flat precursor, was created in
 * migration 005 and deliberately dropped in 016 once objectives replaced it.
 * Nothing here recreates it. The hierarchy is the model.
 *
 * The version matters more than it looks. Migration 016 replaced string
 * indicator codes with references precisely so that a 2026 result read after a
 * syllabus reform keeps its 2026 meaning. That only holds if each published
 * document is loaded as its own version rather than edited in place, which is
 * why this tool will not quietly flip which version is active without
 * --supersede.
 *
 * ── Why a hand written JSON file ─────────────────────────────────────────────
 *
 * tools/nacca-fetch.sh already downloads the published NaCCA documents and
 * converts them to text. Nothing in this tool reads that text, because the
 * scope and sequence tables come out of pdftotext in a shape that has to be
 * interpreted, and an interpretation that is mostly right produces indicator
 * codes that are subtly wrong. A wrong code is the one failure mode that costs
 * a school its trust, since a teacher can check it against their own copy in
 * five seconds.
 *
 * So the conversion from the document to this file is done by a person reading
 * the document, and this tool's job is to refuse anything that does not line
 * up. It invents nothing: no subject it was not given, no objective text, no
 * expected term.
 *
 * ── The file ─────────────────────────────────────────────────────────────────
 *
 * See tools/examples/example-curriculum.NOT-A-REAL-CURRICULUM.json, which is a
 * format illustration and cannot be imported.
 */

import fs from 'node:fs'
import path from 'node:path'

import { createClient } from '@supabase/supabase-js'

/* Matches edu_learning_objectives.bloom_level. */
const BLOOM = ['REMEMBER', 'UNDERSTAND', 'APPLY', 'ANALYSE', 'EVALUATE', 'CREATE']

/* Matches edu_subjects.level_band. Only used when the file asks for a subject
   row to be created, and only from values the document itself supplies. */
const BANDS = ['kg', 'primary', 'jhs', 'shs', 'tvet', 'all']

const CURRICULUM_KEYS = ['code', 'version', 'name', 'authority', 'system', 'effectiveFrom', 'effectiveTo', 'isActive']
const OFFERING_KEYS = ['subject', 'level', 'isCore', 'isElective', 'creditValue', 'sortOrder', 'strands']
const STRAND_KEYS = ['code', 'name', 'sortOrder', 'subStrands']
const SUB_STRAND_KEYS = ['code', 'name', 'sortOrder', 'topics']
const TOPIC_KEYS = ['code', 'name', 'expectedPeriod', 'sortOrder', 'objectives']
const OBJECTIVE_KEYS = ['code', 'text', 'competency', 'bloom', 'expectedPeriod', 'sortOrder']

const argv = process.argv.slice(2)
const commit = argv.includes('--commit')
const supersede = argv.includes('--supersede')
const files = argv.filter(a => !a.startsWith('--'))

if (files.length === 0) {
  console.error('usage: node tools/import-curriculum.mjs <curriculum.json> [...] [--commit] [--supersede]')
  console.error('       without --commit nothing is written, which is the default on purpose')
  process.exit(2)
}

class Faults {
  constructor(label) { this.label = label; this.list = [] }
  add(where, message) { this.list.push(`${where}: ${message}`) }
  get ok() { return this.list.length === 0 }
  report() {
    console.error(`\n  ${this.label}: ${this.list.length} problem(s), nothing imported`)
    for (const f of this.list.slice(0, 40)) console.error(`    ${f}`)
    if (this.list.length > 40) console.error(`    ... and ${this.list.length - 40} more`)
  }
}

const isString = v => typeof v === 'string' && v.trim().length > 0
const unknownKeys = (obj, allowed) => Object.keys(obj).filter(k => !allowed.includes(k))
const isPeriod = v => v === undefined || v === null || (Number.isInteger(v) && v >= 1 && v <= 12)

/* ── Shape validation ───────────────────────────────────────────────────────*/

function validateShape(doc, faults) {
  if (doc === null || typeof doc !== 'object' || Array.isArray(doc)) {
    faults.add('file', 'the top level must be an object with "curriculum" and "offerings"')
    return
  }
  for (const k of Object.keys(doc)) {
    if (k !== 'curriculum' && k !== 'offerings') faults.add('file', `unknown top level key "${k}"`)
  }

  const c = doc.curriculum
  if (c === null || typeof c !== 'object' || Array.isArray(c)) {
    faults.add('curriculum', 'missing')
  } else {
    for (const k of unknownKeys(c, CURRICULUM_KEYS)) faults.add('curriculum', `unknown key "${k}"`)
    if (!isString(c.code)) faults.add('curriculum.code', 'required, such as GES_SBC')
    if (!isString(c.version)) {
      faults.add('curriculum.version', 'required. A curriculum is versioned so that a result ' +
        'recorded under one syllabus keeps its meaning after a reform.')
    }
    if (!isString(c.name)) faults.add('curriculum.name', 'required, the document\'s own title')
    if (!isString(c.authority)) {
      faults.add('curriculum.authority', 'required, who published it, such as NaCCA. ' +
        'This is what lets the platform say where an objective came from.')
    }
    if (!isString(c.system)) faults.add('curriculum.system', 'required, an edu_systems code such as BASIC')
    if (c.effectiveFrom !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(String(c.effectiveFrom))) {
      faults.add('curriculum.effectiveFrom', 'must be a date as YYYY-MM-DD when given')
    }
    if (c.isActive !== undefined && typeof c.isActive !== 'boolean') {
      faults.add('curriculum.isActive', 'must be true or false when given')
    }
  }

  const offerings = doc.offerings
  if (!Array.isArray(offerings) || offerings.length === 0) {
    faults.add('offerings', 'required, a non empty array')
    return
  }

  /* Objective codes have to be unique inside the document as well as in the
     table, and a duplicate inside the file is almost always a copied block
     somebody forgot to edit, which would file two different objectives under
     one code. */
  const codes = new Map()

  offerings.forEach((o, i) => {
    const at = `offerings[${i}]`
    if (o === null || typeof o !== 'object' || Array.isArray(o)) { faults.add(at, 'must be an object'); return }
    for (const k of unknownKeys(o, OFFERING_KEYS)) faults.add(`${at}.${k}`, 'unknown key')

    if (isString(o.subject)) {
      // fine: must already be in edu_subjects
    } else if (o.subject !== null && typeof o.subject === 'object' && !Array.isArray(o.subject)) {
      if (!isString(o.subject.code) || !isString(o.subject.name) || !BANDS.includes(o.subject.levelBand)) {
        faults.add(`${at}.subject`, `as an object it needs code, name and levelBand (one of ${BANDS.join(', ')})`)
      }
    } else {
      faults.add(`${at}.subject`, 'required, either an existing subject code or ' +
        '{ code, name, levelBand } to create it')
    }

    if (!isString(o.level)) faults.add(`${at}.level`, 'required, an edu_levels code such as JHS_3')

    if (!Array.isArray(o.strands) || o.strands.length === 0) {
      faults.add(`${at}.strands`, 'required, a non empty array')
      return
    }

    o.strands.forEach((s, j) => {
      const sAt = `${at}.strands[${j}]`
      if (s === null || typeof s !== 'object') { faults.add(sAt, 'must be an object'); return }
      for (const k of unknownKeys(s, STRAND_KEYS)) faults.add(`${sAt}.${k}`, 'unknown key')
      if (!isString(s.code)) faults.add(`${sAt}.code`, 'required')
      if (!isString(s.name)) faults.add(`${sAt}.name`, 'required, the strand as the document names it')
      if (!Array.isArray(s.subStrands) || s.subStrands.length === 0) {
        faults.add(`${sAt}.subStrands`, 'required, a non empty array')
        return
      }

      s.subStrands.forEach((ss, k2) => {
        const ssAt = `${sAt}.subStrands[${k2}]`
        if (ss === null || typeof ss !== 'object') { faults.add(ssAt, 'must be an object'); return }
        for (const k of unknownKeys(ss, SUB_STRAND_KEYS)) faults.add(`${ssAt}.${k}`, 'unknown key')
        if (!isString(ss.code)) faults.add(`${ssAt}.code`, 'required')
        if (!isString(ss.name)) faults.add(`${ssAt}.name`, 'required')
        if (!Array.isArray(ss.topics) || ss.topics.length === 0) {
          faults.add(`${ssAt}.topics`, 'required, a non empty array')
          return
        }

        ss.topics.forEach((t, m) => {
          const tAt = `${ssAt}.topics[${m}]`
          if (t === null || typeof t !== 'object') { faults.add(tAt, 'must be an object'); return }
          for (const k of unknownKeys(t, TOPIC_KEYS)) faults.add(`${tAt}.${k}`, 'unknown key')
          if (!isString(t.code)) faults.add(`${tAt}.code`, 'required')
          if (!isString(t.name)) faults.add(`${tAt}.name`, 'required')
          if (!isPeriod(t.expectedPeriod)) {
            faults.add(`${tAt}.expectedPeriod`, 'must be a term or semester number between 1 and 12 when given. ' +
              'Leave it out where the document does not say, rather than guessing: ' +
              'it drives the behind schedule figure a district sees.')
          }
          if (!Array.isArray(t.objectives) || t.objectives.length === 0) {
            faults.add(`${tAt}.objectives`, 'required, a non empty array. ' +
              'A topic with no objectives files nothing, and the objective is what a lesson points at.')
            return
          }

          t.objectives.forEach((ob, n) => {
            const oAt = `${tAt}.objectives[${n}]`
            if (ob === null || typeof ob !== 'object') { faults.add(oAt, 'must be an object'); return }
            for (const k of unknownKeys(ob, OBJECTIVE_KEYS)) faults.add(`${oAt}.${k}`, 'unknown key')
            if (!isString(ob.code)) {
              faults.add(`${oAt}.code`, 'required, the indicator code as printed, such as B9.1.2.1.3')
            } else if (codes.has(ob.code.trim())) {
              faults.add(`${oAt}.code`, `"${ob.code.trim()}" already appears at ${codes.get(ob.code.trim())}. ` +
                'One code means one objective inside a curriculum version.')
            } else {
              codes.set(ob.code.trim(), oAt)
            }
            if (!isString(ob.text)) faults.add(`${oAt}.text`, 'required, the objective as the document words it')
            if (ob.bloom !== undefined && !BLOOM.includes(ob.bloom)) {
              faults.add(`${oAt}.bloom`, `must be one of ${BLOOM.join(', ')} when given`)
            }
            if (!isPeriod(ob.expectedPeriod)) {
              faults.add(`${oAt}.expectedPeriod`, 'must be between 1 and 12 when given')
            }
          })
        })
      })
    })
  })
}

/* ── Resolving against the database ─────────────────────────────────────────*/

async function resolve(db, doc, faults) {
  const c = doc.curriculum
  const out = { subjects: new Map(), createSubjects: [] }

  const { data: system, error: sysErr } = await db
    .from('edu_systems').select('code').eq('code', c.system).maybeSingle()
  if (sysErr) throw sysErr
  if (!system) faults.add('curriculum.system', `"${c.system}" is not a known education system`)

  const { data: existing, error: exErr } = await db
    .from('edu_curricula').select('id, code, version, is_active')
    .eq('code', c.code).eq('version', c.version).maybeSingle()
  if (exErr) throw exErr
  out.existing = existing

  /* Migration 012 holds a unique index allowing one active version per code.
     Loading a reformed syllabus as active therefore has to retire the old one,
     and that is a decision about what a school's reports mean, not a detail to
     do silently. */
  if (c.isActive !== false) {
    const { data: actives, error: actErr } = await db
      .from('edu_curricula').select('id, version')
      .eq('code', c.code).eq('is_active', true)
    if (actErr) throw actErr
    out.activeOthers = (actives ?? []).filter(a => a.version !== c.version)
    if (out.activeOthers.length > 0 && !supersede) {
      faults.add('curriculum.isActive', `version ${out.activeOthers.map(a => a.version).join(', ')} ` +
        `of ${c.code} is already the active one. Pass --supersede to retire it and make ` +
        `${c.version} active, or set isActive false to load this version as history.`)
    }
  } else {
    out.activeOthers = []
  }

  for (const [i, o] of doc.offerings.entries()) {
    const at = `offerings[${i}]`

    const wanted = typeof o.subject === 'string' ? o.subject : o.subject.code
    if (!out.subjects.has(wanted)) {
      const { data: rows, error } = await db
        .from('edu_subjects').select('id, code, name').eq('code', wanted)
      if (error) throw error
      if (rows && rows.length === 1) {
        out.subjects.set(wanted, rows[0])
      } else if (typeof o.subject === 'string') {
        faults.add(`${at}.subject`, `"${wanted}" is not in edu_subjects. ` +
          'Give it as { code, name, levelBand } to have it created, ' +
          'rather than having a code guessed for it.')
      } else {
        out.createSubjects.push(o.subject)
        out.subjects.set(wanted, null)
      }
    }

    const { data: level, error: lvlErr } = await db
      .from('edu_levels').select('code').eq('code', o.level).maybeSingle()
    if (lvlErr) throw lvlErr
    if (!level) {
      faults.add(`${at}.level`, `"${o.level}" is not in edu_levels. ` +
        'Levels are platform configuration and are not created from a curriculum file.')
    }
  }

  /* An objective code that already exists in this version, filed under a
     different topic, means the document being loaded disagrees with what is
     already stored. That is a reform, which is a new version, not an edit. */
  if (existing) {
    const codes = []
    for (const o of doc.offerings) {
      for (const s of o.strands) {
        for (const ss of s.subStrands) {
          for (const t of ss.topics) {
            for (const ob of t.objectives) codes.push(ob.code.trim())
          }
        }
      }
    }
    out.alreadyStored = new Set()
    for (let i = 0; i < codes.length; i += 200) {
      const { data, error } = await db
        .from('edu_learning_objectives').select('full_code')
        .eq('curriculum_id', existing.id).in('full_code', codes.slice(i, i + 200))
      if (error) throw error
      for (const row of data ?? []) out.alreadyStored.add(row.full_code)
    }
  } else {
    out.alreadyStored = new Set()
  }

  return out
}

/* ── Writing ────────────────────────────────────────────────────────────────
   Every level is found by its natural key before it is created, so a re-run
   adds what is new and leaves what is there. Nothing is updated in place:
   correcting a loaded objective is a version, for the reason migration 016
   gives at length. */

async function findOrCreate(db, table, key, extra) {
  const { data: found, error: findErr } = await db
    .from(table).select('id').match(key).maybeSingle()
  if (findErr) throw findErr
  if (found) return { id: found.id, created: false }
  const { data, error } = await db.from(table).insert({ ...key, ...extra }).select('id').single()
  if (error) throw error
  return { id: data.id, created: true }
}

async function write(db, doc, resolved) {
  const c = doc.curriculum
  const count = { subjects: 0, offerings: 0, strands: 0, subStrands: 0, topics: 0, objectives: 0, skipped: 0 }

  for (const s of resolved.createSubjects) {
    const { data, error } = await db.from('edu_subjects')
      .insert({ code: s.code, name: s.name, level_band: s.levelBand })
      .select('id, code, name').single()
    if (error) throw error
    resolved.subjects.set(s.code, data)
    count.subjects++
  }

  const wantActive = c.isActive !== false
  const curriculum = await findOrCreate(db, 'edu_curricula',
    { code: c.code, version: c.version },
    {
      name: c.name,
      authority: c.authority,
      system_code: c.system,
      effective_from: c.effectiveFrom ?? null,
      effective_to: c.effectiveTo ?? null,
      // Inactive first when another version holds the active slot, so the
      // unique index cannot be hit before that version has been retired.
      is_active: wantActive && resolved.activeOthers.length === 0,
    })

  if (wantActive && resolved.activeOthers.length > 0) {
    // --supersede was required to get here. The retiring version keeps every
    // row it has: results recorded against it still resolve.
    for (const old of resolved.activeOthers) {
      const { error } = await db.from('edu_curricula')
        .update({ is_active: false, effective_to: c.effectiveFrom ?? null })
        .eq('id', old.id)
      if (error) throw error
      console.log(`    retired ${c.code} ${old.version}, its objectives and results are untouched`)
    }
    const { error } = await db.from('edu_curricula')
      .update({ is_active: true }).eq('id', curriculum.id)
    if (error) throw error
  }

  for (const o of doc.offerings) {
    const subjectCode = typeof o.subject === 'string' ? o.subject : o.subject.code
    const subject = resolved.subjects.get(subjectCode)

    const offering = await findOrCreate(db, 'edu_subject_offerings',
      { curriculum_id: curriculum.id, subject_id: subject.id, level_code: o.level },
      {
        is_core: o.isCore ?? false,
        is_elective: o.isElective ?? false,
        credit_value: o.creditValue ?? null,
        sort_order: o.sortOrder ?? 0,
      })
    if (offering.created) count.offerings++

    for (const [si, s] of o.strands.entries()) {
      const strand = await findOrCreate(db, 'edu_strands',
        { offering_id: offering.id, code: s.code },
        { name: s.name, sort_order: s.sortOrder ?? si })
      if (strand.created) count.strands++

      for (const [ssi, ss] of s.subStrands.entries()) {
        const subStrand = await findOrCreate(db, 'edu_sub_strands',
          { strand_id: strand.id, code: ss.code },
          { name: ss.name, sort_order: ss.sortOrder ?? ssi })
        if (subStrand.created) count.subStrands++

        for (const [ti, t] of ss.topics.entries()) {
          const topic = await findOrCreate(db, 'edu_topics',
            { sub_strand_id: subStrand.id, code: t.code },
            {
              name: t.name,
              expected_period: t.expectedPeriod ?? null,
              sort_order: t.sortOrder ?? ti,
            })
          if (topic.created) count.topics++

          for (const [oi, ob] of t.objectives.entries()) {
            const code = ob.code.trim()
            if (resolved.alreadyStored.has(code)) { count.skipped++; continue }
            const { error } = await db.from('edu_learning_objectives').insert({
              topic_id: topic.id,
              curriculum_id: curriculum.id,
              full_code: code,
              text: ob.text,
              competency: ob.competency ?? null,
              bloom_level: ob.bloom ?? null,
              expected_period: ob.expectedPeriod ?? t.expectedPeriod ?? null,
              sort_order: ob.sortOrder ?? oi,
            })
            if (error) throw error
            resolved.alreadyStored.add(code)
            count.objectives++
          }
        }
      }
    }
  }

  return { curriculumId: curriculum.id, ...count }
}

/* ── One file ───────────────────────────────────────────────────────────────*/

function tally(doc) {
  let strands = 0, subStrands = 0, topics = 0, objectives = 0
  for (const o of doc.offerings) {
    for (const s of o.strands) {
      strands++
      for (const ss of s.subStrands) {
        subStrands++
        for (const t of ss.topics) { topics++; objectives += t.objectives.length }
      }
    }
  }
  return { offerings: doc.offerings.length, strands, subStrands, topics, objectives }
}

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

  const c = doc.curriculum
  const t = tally(doc)
  console.log(`\n  ${label}`)
  console.log(`    ${c.code} ${c.version}, ${c.name}`)
  console.log(`    published by ${c.authority}${c.effectiveFrom ? `, effective ${c.effectiveFrom}` : ''}`)
  console.log(`    ${t.offerings} offering(s), ${t.strands} strand(s), ${t.subStrands} sub-strand(s), ` +
              `${t.topics} topic(s), ${t.objectives} objective(s)`)
  if (resolved.createSubjects.length > 0) {
    console.log(`    would create ${resolved.createSubjects.length} subject row(s): ` +
                resolved.createSubjects.map(s => s.code).join(', '))
  }
  if (resolved.alreadyStored.size > 0) {
    console.log(`    ${resolved.alreadyStored.size} objective(s) are already stored and will be left alone`)
  }

  if (!commit) {
    console.log('    checks passed. Nothing written. Re-run with --commit.')
    return true
  }

  const r = await write(db, doc, resolved)
  console.log(`    written: ${r.offerings} offering(s), ${r.strands} strand(s), ` +
              `${r.subStrands} sub-strand(s), ${r.topics} topic(s), ${r.objectives} objective(s)`)
  if (r.subjects > 0) console.log(`    ${r.subjects} subject row(s) created`)
  if (r.skipped > 0) console.log(`    ${r.skipped} objective(s) already present, left as they were`)
  console.log('    courses under this curriculum now read as NATIONAL rather than MODEL')
  return true
}

/* ── Main ───────────────────────────────────────────────────────────────────*/

const url = process.env.SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_KEY

if (!url || !serviceKey) {
  console.error('SUPABASE_URL and SUPABASE_SERVICE_KEY must be set.')
  console.error('Curriculum tables are write protected to the national role under RLS,')
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
