/**
 * Moving up a class.
 *
 * ── Why this exists ─────────────────────────────────────────────────────────
 *
 * A learner's year was set once, when the profile was made, and nothing in the
 * app could ever change it. Somebody who finished JHS 1 stayed in JHS 1 for
 * ever, being offered the same topics they had already done, and the only way
 * out was to edit the profile and claim a year they had not been tested on.
 * That is not a progression, it is a form field.
 *
 * So there is an examination, and passing it moves you. JHS 1 to JHS 2 the
 * same as JHS 3 to SHS 1: the end of a stage is not a special case, it is just
 * the point where the next year happens to live under a different heading.
 *
 * ── What it is not ──────────────────────────────────────────────────────────
 *
 * This is not BECE or WASSCE and must never be presented as one. Those are sat
 * with an invigilator and awarded by WAEC, and a result from a phone cannot
 * stand in for either. This is the app's own check that a learner is ready for
 * next year's work, which is a thing a school does internally every June and a
 * thing a learner on their own has no way to do at all.
 *
 * `examination.ts` is the other one, and they do not overlap: that prepares a
 * candidate for a national paper, this decides what the app teaches next.
 */

import { STAGE_YEARS, type LearnerProfile, type Stage } from './learner'
import { isRight, type Question } from './course'
import type { Attempt } from './mastery'
import { allTopics, syllabusFor, topicsFor, type Topic } from './syllabus'
import { subjectsForLearner } from './subjects'
import { timetableFor } from './programmes'
import { taughtFor } from './taught-registry'

/** Where a learner goes when they pass. `null` at the end of schooling. */
export interface NextClass {
  stage: Stage
  level: string
  /** True when this crosses into a new stage, which is worth saying out loud. */
  newStage: boolean
}

/**
 * The stages, in the order a Ghanaian learner moves through them.
 *
 * TVET and university are deliberately not in the chain. TVET is entered from
 * JHS or SHS by choice rather than by passing, and nothing in this app should
 * quietly decide that a learner is going to university, so both are ends.
 */
const ORDER: Stage[] = ['creche', 'primary', 'jhs', 'shs']

/** The class after this one, across a stage boundary where there is one. */
export function nextClassOf(stage: Stage, level: string): NextClass | null {
  const years = STAGE_YEARS[stage] ?? []
  const at = years.indexOf(level)

  /* A level the stage does not list. Guessing where to send them would be
     worse than saying nothing, so this is an end. */
  if (at === -1) return null

  if (at + 1 < years.length) {
    return { stage, level: years[at + 1], newStage: false }
  }

  const nextStage = ORDER[ORDER.indexOf(stage) + 1]
  if (!nextStage) return null
  const first = STAGE_YEARS[nextStage]?.[0]
  if (!first) return null
  return { stage: nextStage, level: first, newStage: true }
}

/* ── the paper ────────────────────────────────────────────────────────────── */

/**
 * One question on the paper, and the topic it came from.
 *
 * The topic is carried rather than inferred later because an attempt is
 * recorded against a topic everywhere else in the app: the dashboard counts
 * topics worked, the plan picks the next topic, and mastery is per topic. An
 * examination that filed its answers under question ids would record thirty
 * six attempts that belong to no topic, so nothing would count and the
 * learner's progress bar would not move for a paper they had just sat.
 */
export interface ExamQuestion {
  topicId: string
  question: Question
}

/** One subject's section of the paper. */
export interface ExamSection {
  subjectId: string
  subjectName: string
  questions: ExamQuestion[]
}

export interface Exam {
  /** The class being left, for the heading. */
  level: string
  next: NextClass | null
  sections: ExamSection[]
  total: number
}

/**
 * How long one subject's paper is.
 *
 * This was four, on the reasoning that a learner will not finish a long one.
 * That produced something nobody would call an examination: four questions
 * decided whether you repeated the year.
 *
 * A real end of year paper is per subject and sat over several days, so that
 * is the shape now. Twenty objective questions is the length of a school's own
 * end of year objective paper, and nine subjects at twenty is a hundred and
 * eighty questions, which is exactly why they are not sat in one sitting.
 * Each subject is its own paper, sat when the learner chooses, and the marks
 * are kept until the whole set is done.
 *
 * Where a subject has fewer than twenty written questions the paper is as long
 * as the subject allows, rather than padded with repeats.
 */
export const PER_SUBJECT = 20

/** The pass mark, as a fraction. Half, which is the usual school rule here. */
export const PASS = 0.5

/**
 * Spread questions across a subject's topics rather than taking the first few.
 *
 * Twenty questions from one topic tests one topic. Twenty taken a round at a
 * time from every topic of the year tests the year, which is what this paper
 * is for. Walking the topics in order rather than shuffling means the same
 * learner sitting twice meets the same paper and cannot shop for an easier one
 * by resitting.
 */
function spread(topics: Topic[], want: number): ExamQuestion[] {
  const pools = topics
    .map(t => ({ topicId: t.id, questions: taughtFor(t.id)?.questions ?? [] }))
    .filter(p => p.questions.length > 0)
  if (!pools.length) return []

  const out: ExamQuestion[] = []
  for (let round = 0; out.length < want; round++) {
    /* Every pool exhausted before the quota was met: take what there is
       rather than looping for ever. */
    if (pools.every(p => round >= p.questions.length)) break
    for (const pool of pools) {
      if (out.length >= want) break
      if (round < pool.questions.length) {
        out.push({ topicId: pool.topicId, question: pool.questions[round] })
      }
    }
  }
  return out
}

/** Every topic of this learner's own year, across their own timetable. */
function yearTopics(profile: LearnerProfile): Array<{ id: string, name: string, topics: Topic[] }> {
  const allowed = timetableFor(profile.stage, profile.programme, profile.electives)
  const out: Array<{ id: string, name: string, topics: Topic[] }> = []

  for (const s of subjectsForLearner(profile.stage, profile.programme, profile.electives)) {
    if (allowed && !allowed.includes(s.id)) continue
    const syllabus = syllabusFor(profile.stage, s.id, profile.curriculum)
    if (!syllabus) continue
    /* Their year, or the whole subject where the year holds nothing, which is
       the same fallback the dashboard uses so the two cannot disagree. */
    const mine = topicsFor(syllabus, profile.level)
    out.push({ id: s.id, name: s.name, topics: mine.length ? mine : allTopics(syllabus) })
  }
  return out
}

/**
 * The paper for this learner's current class.
 *
 * Built from their own timetable and their own year, so a General Science
 * candidate is not examined on Literature and a JHS 2 learner is not examined
 * on JHS 3 work. Subjects with no written questions are left out rather than
 * padded, because a section of nothing would read as a subject they are not
 * expected to know.
 */
export function examFor(profile: LearnerProfile): Exam {
  const sections: ExamSection[] = []

  for (const s of yearTopics(profile)) {
    const questions = spread(s.topics, PER_SUBJECT)
    if (questions.length) {
      sections.push({ subjectId: s.id, subjectName: s.name, questions })
    }
  }

  return {
    level: profile.level,
    next: nextClassOf(profile.stage, profile.level),
    sections,
    total: sections.reduce((n, s) => n + s.questions.length, 0),
  }
}

/**
 * One subject's paper, which is what a learner actually sits.
 *
 * `examFor` builds the whole examination and is still what the standing is
 * measured against. This is the paper in front of them on the day.
 */
export function paperFor(profile: LearnerProfile, subjectId: string): ExamSection | null {
  const subject = yearTopics(profile).find(s => s.id === subjectId)
  if (!subject) return null
  const questions = spread(subject.topics, PER_SUBJECT)
  if (!questions.length) return null
  return { subjectId: subject.id, subjectName: subject.name, questions }
}

/** Mark one subject's paper. */
export function markPaper(
  paper: ExamSection, given: Map<string, string>, at = new Date().toISOString(),
): PaperMark {
  return {
    subjectId: paper.subjectId,
    right: paper.questions.filter(
      ({ question: q }) => isRight(q, given.get(q.id) ?? '')).length,
    total: paper.questions.length,
    at,
  }
}

/** The answers on one paper, as attempts against their topics. */
export function attemptsFromPaper(
  paper: ExamSection, given: Map<string, string>, at = new Date().toISOString(),
): Attempt[] {
  const out: Attempt[] = []
  for (const { topicId, question: q } of paper.questions) {
    const answer = given.get(q.id)
    if (answer === undefined) continue
    out.push({
      objectiveId: topicId,
      isCorrect: isRight(q, answer),
      /* Nothing is hinted in an examination. That is what makes it one. */
      hintUsed: false,
      at,
    })
  }
  return out
}

/* ── marking ──────────────────────────────────────────────────────────────── */

export interface SubjectMark {
  subjectId: string
  subjectName: string
  right: number
  total: number
}

export interface ExamResult {
  right: number
  total: number
  /** Right over total, 0 when the paper was empty. */
  share: number
  passed: boolean
  bySubject: SubjectMark[]
  /** Where they go now, when they passed and there is anywhere to go. */
  moveTo: NextClass | null
}

/** Mark a sat paper. `given` is keyed by question id. */
export function markExam(exam: Exam, given: Map<string, string>): ExamResult {
  const bySubject: SubjectMark[] = exam.sections.map(s => ({
    subjectId: s.subjectId,
    subjectName: s.subjectName,
    right: s.questions.filter(
      ({ question: q }) => isRight(q, given.get(q.id) ?? '')).length,
    total: s.questions.length,
  }))

  const right = bySubject.reduce((n, s) => n + s.right, 0)
  const total = exam.total
  const share = total ? right / total : 0
  /* An empty paper is not a pass. Nobody has shown anything. */
  const passed = total > 0 && share >= PASS

  return { right, total, share, passed, bySubject, moveTo: passed ? exam.next : null }
}

/** Every answer on a sat paper, as attempts, so the plan learns from it too. */
export function attemptsFrom(
  exam: Exam,
  given: Map<string, string>,
  at = new Date().toISOString(),
): Attempt[] {
  const out: Attempt[] = []
  for (const s of exam.sections) {
    for (const { topicId, question: q } of s.questions) {
      const answer = given.get(q.id)
      if (answer === undefined) continue
      out.push({
        /* The topic, not the question. See `ExamQuestion`. */
        objectiveId: topicId,
        isCorrect: isRight(q, answer),
        /* Nothing is hinted in an examination. That is what makes it one. */
        hintUsed: false,
        at,
      })
    }
  }
  return out
}

/* ── one subject's paper at a time ────────────────────────────────────────── */

/**
 * The marks already in the bag, kept per learner and per class.
 *
 * Kept on the device rather than in memory because an end of year examination
 * is not sat in one sitting. A learner who sat Mathematics on Monday and
 * closes the app has not withdrawn from the examination, and losing their
 * Mathematics mark because the tab was closed would be the worst possible
 * answer to having done the work.
 *
 * Keyed by class as well as learner, so moving up starts a clean set and a
 * learner who repeats a year is not credited with last year's papers.
 */
export interface PaperMark {
  subjectId: string
  right: number
  total: number
  /** ISO, so a result can say when it was sat. */
  at: string
}

const BAG = 'lp.promotion.'

const bagKey = (learnerId: string, level: string) =>
  BAG + learnerId + '.' + level.replace(/\s+/g, '-').toLowerCase()

/** Papers already sat for this class. Empty on any failure to read. */
export function papersSat(learnerId: string, level: string): PaperMark[] {
  try {
    const raw = localStorage.getItem(bagKey(learnerId, level))
    if (!raw) return []
    const got: unknown = JSON.parse(raw)
    return Array.isArray(got) ? got as PaperMark[] : []
  } catch {
    /* Private browsing, blocked storage, or something else wrote here. An
       empty bag means "sit them again", which is recoverable. Throwing here
       would take the whole screen down. */
    return []
  }
}

/** Record one subject's paper, replacing any earlier sitting of it. */
export function recordPaper(
  learnerId: string, level: string, mark: PaperMark,
): PaperMark[] {
  const kept = papersSat(learnerId, level).filter(m => m.subjectId !== mark.subjectId)
  const next = [...kept, mark]
  try {
    localStorage.setItem(bagKey(learnerId, level), JSON.stringify(next))
  } catch { /* Nothing can be done about it here, and the mark is still shown. */ }
  return next
}

/** Clear the bag, which is what moving up or deliberately starting again does. */
export function clearPapers(learnerId: string, level: string): void {
  try { localStorage.removeItem(bagKey(learnerId, level)) } catch { /* as above */ }
}

/* ── where the learner stands ─────────────────────────────────────────────── */

export interface PaperStanding {
  subjectId: string
  subjectName: string
  /** How long this subject's paper is. */
  length: number
  mark: PaperMark | null
}

export interface Standing {
  level: string
  next: NextClass | null
  papers: PaperStanding[]
  sat: number
  /** Marks over questions, across the papers actually sat. */
  right: number
  total: number
  share: number
  /** Every paper sat, and the aggregate at or above the pass mark. */
  complete: boolean
  passed: boolean
}

/**
 * The whole examination, as it stands.
 *
 * Aggregate rather than every subject separately, which is how a Ghanaian
 * school decides promotion: a learner who is strong in seven subjects and weak
 * in two moves up, and one who is weak in seven does not. Requiring a pass in
 * every single subject would hold back most of a real class.
 */
export function standingOfExam(profile: LearnerProfile): Standing {
  const marks = new Map(
    papersSat(profile.id, profile.level).map(m => [m.subjectId, m]))

  const papers: PaperStanding[] = []
  for (const s of yearTopics(profile)) {
    const length = spread(s.topics, PER_SUBJECT).length
    if (!length) continue
    papers.push({
      subjectId: s.id,
      subjectName: s.name,
      length,
      mark: marks.get(s.id) ?? null,
    })
  }

  const sat = papers.filter(p => p.mark).length
  const right = papers.reduce((n, p) => n + (p.mark?.right ?? 0), 0)
  const total = papers.reduce((n, p) => n + (p.mark?.total ?? 0), 0)
  const share = total ? right / total : 0
  const complete = papers.length > 0 && sat === papers.length

  return {
    level: profile.level,
    next: nextClassOf(profile.stage, profile.level),
    papers,
    sat,
    right,
    total,
    share,
    complete,
    passed: complete && share >= PASS,
  }
}
