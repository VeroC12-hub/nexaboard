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
 * How many questions each subject contributes.
 *
 * Small on purpose. A paper a learner will not finish tells you nothing about
 * what they know, only about their patience, and a nine subject timetable at
 * ten questions each is ninety questions on a phone.
 */
const PER_SUBJECT = 4

/** The pass mark, as a fraction. Half, which is the usual school rule here. */
export const PASS = 0.5

/**
 * Spread questions across a subject's topics rather than taking the first few.
 *
 * Four questions from one topic tests one topic. Four questions from four
 * topics tests the year, which is what this paper is for. Walking the topics
 * in order and taking one from each until the quota is full does that without
 * randomness, so the same learner sitting twice meets the same paper and
 * cannot shop for an easy one by resitting.
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

/* ── being allowed to sit it ──────────────────────────────────────────────── */

/** Whether a learner may sit, and the sentence to show them when they may not. */
export interface Eligibility {
  ready: boolean
  why: string
}

/**
 * How much of the year must be touched before sitting.
 *
 * Not a hurdle for its own sake. A learner who has opened nothing will fail,
 * and failing on their first day teaches them that the app thinks they are
 * behind. A quarter of their own year's topics is enough to mean they have
 * actually been studying here, and low enough that somebody who arrived
 * already knowing the work is not held back for a term.
 */
const TOUCHED = 0.25

export function eligibility(profile: LearnerProfile, attempts: Attempt[]): Eligibility {
  const exam = examFor(profile)

  if (!exam.next) {
    return {
      ready: false,
      why: `${profile.level} is the last class this app carries, `
        + 'so there is nowhere to move up to.',
    }
  }
  if (!exam.sections.length) {
    return { ready: false, why: 'There are no questions written for this class yet.' }
  }

  const topics = yearTopics(profile).flatMap(s => s.topics.map(t => t.id))
  const worked = new Set(attempts.map(a => a.objectiveId))
  const done = topics.filter(t => worked.has(t)).length
  const need = Math.ceil(topics.length * TOUCHED)

  if (done < need) {
    const left = need - done
    return {
      ready: false,
      why: `Work through ${left} more ${left === 1 ? 'topic' : 'topics'} of `
        + `${profile.level} first. The examination covers the whole year, and `
        + 'sitting it before you have studied only tells you what you already knew.',
    }
  }
  return { ready: true, why: '' }
}
