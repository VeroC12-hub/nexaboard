import { supabase } from '../supabase'

/**
 * Examination preparation.
 *
 * There is no examination model here. Which examination applies to a learner is
 * already configuration: edu_levels.examination_code names it and
 * edu_levels.exam_imminent says whether it is close. Both arrive through the
 * resolved LearnerContext, so nothing in this file decides that JHS leads to
 * BECE or that a final year is urgent.
 *
 * A learner whose level has no configured examination gets no examination
 * experience at all. That is the whole rule, and it is why kindergarten and
 * primary are never mentioned anywhere in this file.
 *
 * Practice runs on the §6 engine. edu_practice_questions gained an optional
 * provenance filter rather than gaining a twin, so examination practice and
 * ordinary practice are served, stripped and marked by the same code.
 */

export interface ExamTopic {
  objectiveId: string
  fullCode: string
  objectiveText: string
  subject: string
  topic: string
  questionCount: number
  /** Real years from the data. Empty when the provenance is incomplete. */
  years: number[]
  papers: string[]
}

export interface ExamPreparation {
  /** Resolved server-side from the learner's enrolment, never from the client. */
  code: string
  name: string
  authority: string | null
  imminent: boolean
  topics: ExamTopic[]
}

/**
 * What the learner has to prepare for, and what genuinely exists to prepare
 * with.
 *
 * Returns null when the learner's level has no configured examination. Returns
 * an examination with an empty topic list when one applies but no past
 * questions have been loaded, which is a different fact and must be shown
 * differently: "you have no examination" and "your examination has no material
 * yet" are not the same message.
 */
export async function examPreparation(
  contextExam: { code: string; label: string; imminent: boolean } | null,
): Promise<ExamPreparation | null> {
  if (!contextExam) return null

  const { data, error } = await supabase.rpc('edu_exam_preparation')
  if (error) throw error

  const rows = (data ?? []) as {
    exam_code: string; exam_name: string; exam_authority: string | null
    exam_imminent: boolean; objective_id: string; full_code: string
    objective_text: string; subject: string; topic: string
    question_count: number; years: number[] | null; papers: string[] | null
  }[]

  return {
    // The server's own resolution wins where it has one; the context supplies
    // the name when there is no material yet and therefore no row to read.
    code: rows[0]?.exam_code ?? contextExam.code,
    name: rows[0]?.exam_name ?? contextExam.label,
    authority: rows[0]?.exam_authority ?? null,
    imminent: rows[0]?.exam_imminent ?? contextExam.imminent,
    topics: rows.map(r => ({
      objectiveId: r.objective_id,
      fullCode: r.full_code,
      objectiveText: r.objective_text,
      subject: r.subject,
      topic: r.topic,
      questionCount: Number(r.question_count),
      years: (r.years ?? []).filter((y): y is number => y !== null).sort((a, b) => b - a),
      papers: r.papers ?? [],
    })),
  }
}

/** How the years available for a topic should read. Null when there are none. */
export function yearRange(years: number[]): string | null {
  if (years.length === 0) return null
  if (years.length === 1) return String(years[0])
  return `${years[years.length - 1]} to ${years[0]}`
}
