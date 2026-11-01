/**
 * Reading what the model sends back when it is asked for curriculum.
 *
 * Two tasks in `api/prompt.js` return JSON that becomes content a child is
 * taught from: `outline`, which is a subject's strands and topics, and
 * `taught`, which is one lesson in the parts `taught.ts` assembles from. This
 * module turns that JSON into those shapes, or refuses it.
 *
 * ── Why every field is checked, and why refusal is the safe answer ──────────
 *
 * The same reasoning `lesson-blocks.ts` gives for charts, with more at stake.
 * The failure that matters is not a crash. It is a lesson that renders
 * perfectly with a worked example whose steps do not reach its answer, or a
 * question whose correct option is not among its options, because both look
 * like content rather than like faults and a learner has no way to tell. So
 * anything incomplete is dropped, and anything structurally wrong refuses the
 * whole object. A topic with no stored lesson falls back to the live tutor and
 * then the primer, which is a worse lesson but never a wrong one.
 *
 * ── What this module deliberately cannot do ────────────────────────────────
 *
 * It cannot tell whether the teaching is any good. Nothing automatic can. That
 * is what `approved` is for: everything produced here is written with
 * `source: 'GENERATED'` and `approved: false`, and `taughtFor` refuses to serve
 * it until a person has read it. This module's job is only to guarantee that
 * what a reviewer is shown is structurally sound, so their attention goes on
 * the teaching rather than on spotting a malformed question.
 */

import type { Provenance } from './capability'
import type { Stage } from './learner'
import type { Strand, SubStrand, Syllabus, Topic } from './syllabus'
import type { LessonTable, Taught, Trap, Worked, WorkedStep } from './taught'
import type { Question } from './course'
import { cleanSvg } from './visuals'

/* ── reading the envelope ─────────────────────────────────────────────────── */

/**
 * The JSON object inside whatever the model actually sent.
 *
 * Asked for JSON and nothing else, a model still sometimes wraps it in a fence
 * or writes a sentence first. Both are recoverable and neither is worth
 * failing over, so the object is cut from the first brace to the last.
 */
function objectIn(raw: string): Record<string, unknown> | null {
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/i)
  const text = (fenced ? fenced[1] : raw).trim()
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  if (start === -1 || end <= start) return null
  try {
    const parsed = JSON.parse(text.slice(start, end + 1)) as unknown
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null
    return parsed as Record<string, unknown>
  } catch { return null }
}

const str = (v: unknown): string | null => {
  if (typeof v !== 'string') return null
  const t = v.trim()
  return t ? t : null
}

const strList = (v: unknown): string[] =>
  Array.isArray(v) ? v.map(str).filter((x): x is string => x !== null) : []

/** Ids are keys, so they are held to the shape ids are written in here. */
const id = (v: unknown): string | null => {
  const t = str(v)
  if (!t) return null
  const slug = t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  return slug ? slug : null
}

/* ── an outline ───────────────────────────────────────────────────────────── */

function readTopic(v: unknown, year: string): Topic | null {
  if (!v || typeof v !== 'object') return null
  const t = v as Record<string, unknown>
  const topicId = id(t.id)
  const title = str(t.title)
  const outcome = str(t.outcome)
  /* All three are load bearing. A topic with no outcome cannot be taught
     against, because the outcome is what the lesson has to reach. */
  if (!topicId || !title || !outcome) return null
  return { id: topicId, title, outcome, year: str(t.year) ?? year }
}

function readSubStrand(v: unknown, year: string): SubStrand | null {
  if (!v || typeof v !== 'object') return null
  const s = v as Record<string, unknown>
  const subId = id(s.id)
  const name = str(s.name)
  if (!subId || !name) return null
  const topics = Array.isArray(s.topics)
    ? s.topics.map(t => readTopic(t, year)).filter((t): t is Topic => t !== null)
    : []
  /* An empty sub-strand is not a fault, it is a heading with nothing under it,
     and it would show a learner a section they cannot open. */
  if (!topics.length) return null
  return { id: subId, name, topics }
}

function readStrand(v: unknown, year: string): Strand | null {
  if (!v || typeof v !== 'object') return null
  const s = v as Record<string, unknown>
  const strandId = id(s.id)
  const name = str(s.name)
  if (!strandId || !name) return null
  const subStrands = Array.isArray(s.subStrands)
    ? s.subStrands.map(x => readSubStrand(x, year)).filter((x): x is SubStrand => x !== null)
    : []
  if (!subStrands.length) return null
  return {
    id: strandId,
    name,
    /* A purpose is for the learner and is worth having, but a strand with
       topics and no purpose line is still teachable, so this one falls back
       rather than refusing. */
    purpose: str(s.purpose) ?? name,
    subStrands,
  }
}

/**
 * An outline for one subject, or null.
 *
 * `curriculum` is whose it is, which is the whole reason this exists: a school
 * filing its own subject files it under its own curriculum and the national
 * outline is left alone.
 */
export function readOutline(raw: string, meta: {
  subjectId: string
  stage: Stage
  year: string
  curriculum: string
  source?: Provenance
}): Syllabus | null {
  const obj = objectIn(raw)
  if (!obj) return null

  const strands = Array.isArray(obj.strands)
    ? obj.strands.map(s => readStrand(s, meta.year)).filter((s): s is Strand => s !== null)
    : []
  if (!strands.length) return null

  /* Ids are the keys everything downstream hangs on, so a duplicate is not a
     cosmetic problem: two topics with one id means one of them can never be
     opened. Refuse rather than silently serve the first. */
  const seen = new Set<string>()
  for (const strand of strands) {
    for (const sub of strand.subStrands) {
      for (const topic of sub.topics) {
        if (seen.has(topic.id)) return null
        seen.add(topic.id)
      }
    }
  }

  return {
    subjectId: meta.subjectId,
    stage: meta.stage,
    curriculum: meta.curriculum,
    subject: str(obj.subject) ?? meta.subjectId,
    source: meta.source ?? 'GENERATED',
    note: 'Written by the tutor for this school, and not yet reviewed.',
    strands,
  }
}

/* ── a stored lesson ──────────────────────────────────────────────────────── */

function readWorked(v: unknown): Worked | null {
  if (!v || typeof v !== 'object') return null
  const w = v as Record<string, unknown>
  const ask = str(w.ask)
  const answer = str(w.answer)
  /* Either shape: a sentence, or a line of mathematics with its reason. The
     second is what a maths topic should produce, and the first is what every
     lesson written before it did. */
  const steps = (Array.isArray(w.steps) ? w.steps : [])
    .map((raw): string | WorkedStep | null => {
      if (typeof raw === 'string') return raw.trim() || null
      if (!raw || typeof raw !== 'object') return null
      const o = raw as Record<string, unknown>
      const math = str(o.math)
      if (!math) return null
      const why = str(o.why)
      return why ? { math, why } : { math }
    })
    .filter((x): x is string | WorkedStep => x !== null)
  /* A worked example with no steps is an answer, and an answer with no working
     is the one thing a worked example exists not to be. */
  if (!ask || !answer || !steps.length) return null
  const level = Number(w.level)
  return {
    level: Number.isFinite(level) ? Math.min(5, Math.max(1, Math.round(level))) : 1,
    ask,
    steps,
    answer,
  }
}

/**
 * A table the tutor wrote.
 *
 * Rejected unless it is rectangular, because a ragged table is worse than no
 * table: a row with a cell missing silently shifts every value after it into
 * the wrong column, and the learner cannot see that it happened. Short rows
 * are padded and long ones are cut rather than dropping the table, since a
 * model that produced good data and miscounted one cell has still produced
 * good data.
 *
 * A caption is required for the reason given on `LessonTable`: it is what a
 * spoken lesson reads in place of the grid, so a table without one is
 * inaudible rather than merely unlabelled.
 */
function readTable(v: unknown): LessonTable | null {
  if (!v || typeof v !== 'object') return null
  const t = v as Record<string, unknown>
  const caption = str(t.caption)
  const columns = strList(t.columns)
  if (!caption || columns.length < 2) return null

  const rows = (Array.isArray(t.rows) ? t.rows : [])
    .map(r => strList(r))
    .filter(r => r.length > 0)
    .map(r => columns.map((_, i) => r[i] ?? ''))
  /* One row is a sentence written sideways. */
  if (rows.length < 2) return null

  return { caption, columns, rows, ...(str(t.note) ? { note: str(t.note)! } : {}) }
}

function readTrap(v: unknown): Trap | null {
  if (!v || typeof v !== 'object') return null
  const t = v as Record<string, unknown>
  const mistake = str(t.mistake)
  const why = str(t.why)
  /* Both halves or neither. A mistake with no cause is "be careful", which is
     the thing the traps section is meant to replace. */
  if (!mistake || !why) return null
  return { mistake, why }
}

function readQuestion(v: unknown, n: number, topicId: string): Question | null {
  if (!v || typeof v !== 'object') return null
  const q = v as Record<string, unknown>
  const ask = str(q.ask)
  const answer = str(q.answer)
  const teach = str(q.teach)
  if (!ask || !answer || !teach) return null

  const kind = q.kind === 'numeric' ? 'numeric' : 'choice'
  const options = strList(q.options)

  /* The failure this catches is the dangerous one: a multiple choice question
     whose correct answer is not among the choices renders perfectly and cannot
     be answered correctly by anybody. */
  if (kind === 'choice') {
    if (options.length < 2) return null
    if (!options.includes(answer)) return null
  }

  const level = Number(q.level)
  return {
    id: id(q.id) ?? `${topicId}-${n}`,
    ask,
    kind,
    ...(kind === 'choice' ? { options } : {}),
    answer,
    ...(strList(q.accept).length ? { accept: strList(q.accept) } : {}),
    teach,
    level: Number.isFinite(level) ? Math.min(5, Math.max(1, Math.round(level))) : 1,
  }
}

/**
 * One stored lesson in parts, or null.
 *
 * Always `GENERATED` and never approved, whatever the model put in those
 * fields. They are not its decision: the point of the flag is that a person
 * said yes, and a model asserting it has said yes defeats the only safeguard
 * between generated material and a child.
 */
export function readTaught(raw: string, topicId: string): Taught | null {
  const obj = objectIn(raw)
  if (!obj) return null

  const idea = str(obj.idea)
  const method = strList(obj.method)
  /* The two parts every learner is given, whatever their preferences. Without
     either there is no lesson to assemble. */
  if (!idea || !method.length) return null

  const figureRaw = obj.figure && typeof obj.figure === 'object'
    ? obj.figure as Record<string, unknown>
    : null
  const svg = figureRaw ? cleanSvg(String(figureRaw.svg ?? '')) : null
  const alt = figureRaw ? str(figureRaw.alt) : null

  const tables = Array.isArray(obj.tables)
    ? obj.tables.map(readTable).filter((t): t is LessonTable => t !== null)
    : []

  const worked = Array.isArray(obj.worked)
    ? obj.worked.map(readWorked).filter((w): w is Worked => w !== null)
    : []
  const traps = Array.isArray(obj.traps)
    ? obj.traps.map(readTrap).filter((t): t is Trap => t !== null)
    : []
  const questions = Array.isArray(obj.questions)
    ? obj.questions
      .map((q, i) => readQuestion(q, i + 1, topicId))
      .filter((q): q is Question => q !== null)
    : []

  return {
    topicId,
    source: 'GENERATED',
    approved: false,
    idea,
    ...(str(obj.mechanism) ? { mechanism: str(obj.mechanism)! } : {}),
    ...(str(obj.recap) ? { recap: str(obj.recap)! } : {}),
    method,
    ...(worked.length ? { worked } : {}),
    ...(traps.length ? { traps } : {}),
    ...(str(obj.extension) ? { extension: str(obj.extension)! } : {}),
    /* A figure needs both halves: the drawing, and the words a screen reader
       and a blind learner get instead of it. */
    ...(svg && alt ? { figure: { alt, svg } } : {}),
    ...(tables.length ? { tables } : {}),
    ...(questions.length ? { questions } : {}),
  }
}
