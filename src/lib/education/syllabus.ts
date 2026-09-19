/**
 * What a subject covers, from creche to university.
 *
 * This is the thing the AI teaches from. Not a course with paragraphs already
 * written in it, which is what `course.ts` holds and why only one of those
 * exists: an outline of what the subject contains, in the order a learner meets
 * it, which is small enough to write for every subject and rich enough for the
 * tutor to teach any line of it properly.
 *
 * The division of labour is the point. The syllabus says WHAT and in what
 * order. The learner's profile says HOW they want it taught. `adapt.ts` says
 * what has been learned about them since. The AI is handed all three and writes
 * the lesson. So a new subject costs an outline rather than a textbook, and
 * every learner gets a different lesson from the same line.
 *
 * ── Provenance, and the line that must not be crossed ────────────────────────
 *
 * Everything in `library/syllabus/` carries `source: 'MODEL'`. It is an honest
 * outline of what these subjects contain, from general knowledge of them, and
 * that is genuinely enough to teach from: nobody needs a filed document to
 * explain why you may take 7 from both sides.
 *
 * What it deliberately does NOT contain is anything only a real document could
 * say: no indicator codes, no "this carries eight marks", no "this is on the
 * BECE". A learner cannot tell when those are invented, and being wrong about
 * them costs exactly the trust a school is being asked for. `capability.ts`
 * sets that rule; this file obeys it.
 *
 * When a school files its scheme of work, or the national curriculum is loaded,
 * `resolve()` prefers it and the model outline steps aside. That is the whole
 * upgrade path: the platform teaches from day one and gets more exact, rather
 * than waiting for a document before it will say anything at all.
 */

import type { Provenance } from './capability'
import type { Stage } from './learner'

/** One teachable line of a subject. The unit the AI is asked to teach. */
export interface Topic {
  id: string
  title: string
  /** What the learner will be able to do, said plainly enough to show them. */
  outcome: string
  /**
   * The year this normally lands in, as the stage's own label.
   *
   * A learner is never blocked from a topic above their year, but the order
   * matters: a tutor that teaches simultaneous equations to somebody who cannot
   * yet solve one equation is wasting their afternoon.
   */
  year: string
  /**
   * Topic ids this stands on.
   *
   * Used to go backwards when a learner is failing something: the cause is
   * usually one of these rather than the topic in front of them.
   */
  needs?: string[]
}

export interface SubStrand {
  id: string
  name: string
  topics: Topic[]
}

/** The top level division of a subject, in the curriculum's own terms. */
export interface Strand {
  id: string
  name: string
  /** What this part of the subject is for, in one line, for the learner. */
  purpose: string
  subStrands: SubStrand[]
}

export interface Syllabus {
  subjectId: string
  stage: Stage
  /** The subject's name as the learner knows it. */
  subject: string
  source: Provenance
  /**
   * Shown to the learner, so where their material came from is never hidden.
   * Null when there is nothing worth saying, which is never true of MODEL.
   */
  note: string | null
  strands: Strand[]
}

/* ── the registry ─────────────────────────────────────────────────────────── */

const REGISTRY = new Map<string, Syllabus>()

const key = (stage: Stage, subjectId: string) => `${stage}:${subjectId}`

/** Put a syllabus in the registry. Called once per file in `library/syllabus`. */
export function register(s: Syllabus): Syllabus {
  REGISTRY.set(key(s.stage, s.subjectId), s)
  return s
}

/**
 * The best syllabus available for a subject at a stage.
 *
 * Only the model outlines are in here today. A school scheme or the national
 * curriculum arrives from the database, and `resolve` is where that overriding
 * happens, so every screen and every prompt asks one function and none of them
 * need to know which source won.
 */
export function syllabusFor(stage: Stage, subjectId: string): Syllabus | null {
  return REGISTRY.get(key(stage, subjectId)) ?? null
}

/** Every subject with an outline, for the subject list to be honest about. */
export function outlinedSubjects(stage: Stage): string[] {
  const out: string[] = []
  for (const [k, s] of REGISTRY) {
    if (k.startsWith(`${stage}:`)) out.push(s.subjectId)
  }
  return out
}

export const hasSyllabus = (stage: Stage, subjectId: string): boolean =>
  REGISTRY.has(key(stage, subjectId))

/* ── reading a syllabus ───────────────────────────────────────────────────── */

/** Every topic, in the order the subject intends. */
export function allTopics(s: Syllabus): Topic[] {
  return s.strands.flatMap(st => st.subStrands.flatMap(ss => ss.topics))
}

/**
 * The topics for one year.
 *
 * Falls back to the whole subject rather than to nothing. A learner whose year
 * label does not match anything written here, because they typed something
 * unusual or a stage's labels changed, still has a subject to study.
 */
export function topicsFor(s: Syllabus, year: string): Topic[] {
  const mine = allTopics(s).filter(t => t.year === year)
  return mine.length ? mine : allTopics(s)
}

export function topicById(s: Syllabus, id: string | null): Topic | null {
  if (!id) return null
  return allTopics(s).find(t => t.id === id) ?? null
}

/** Where a topic sits, so a lesson can say what part of the subject this is. */
export function placeOf(s: Syllabus, topicId: string):
  { strand: Strand, subStrand: SubStrand } | null {
  for (const strand of s.strands) {
    for (const subStrand of strand.subStrands) {
      if (subStrand.topics.some(t => t.id === topicId)) return { strand, subStrand }
    }
  }
  return null
}

/**
 * What a topic stands on, followed all the way down.
 *
 * A learner stuck on sharing in a ratio is usually not stuck on ratio. They are
 * stuck on division, or on fractions, and teaching the ratio again louder will
 * not reach it. This is how the tutor is told where to actually go.
 */
export function foundations(s: Syllabus, topicId: string, depth = 2): Topic[] {
  const seen = new Set<string>([topicId])
  const out: Topic[] = []
  let edge = [topicId]

  for (let d = 0; d < depth; d++) {
    const next: string[] = []
    for (const id of edge) {
      const t = topicById(s, id)
      for (const need of t?.needs ?? []) {
        if (seen.has(need)) continue
        seen.add(need)
        const found = topicById(s, need)
        if (found) { out.push(found); next.push(need) }
      }
    }
    if (!next.length) break
    edge = next
  }
  return out
}

/** How much subject there is, for a screen that should not overstate it. */
export function sizeOf(s: Syllabus): { strands: number, topics: number } {
  return { strands: s.strands.length, topics: allTopics(s).length }
}
