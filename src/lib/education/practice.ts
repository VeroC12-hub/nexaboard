import { supabase } from '../supabase'

/**
 * Practice.
 *
 * Practice is the learner training and checking their own understanding. It is
 * not an assessment, and nothing in this module writes to
 * edu_assessment_results. A learner's official record must not move because
 * they practised.
 *
 * Questions never arrive by reading edu_questions: that table is closed to
 * learners, and every question here comes from edu_practice_questions, which
 * strips answer keys server-side. Marking is likewise server-side, in
 * edu_submit_practice. Neither the key nor the verdict is ever the client's to
 * decide, so nothing in this file computes correctness.
 */

export type QuestionKind =
  | 'MULTIPLE_CHOICE' | 'TRUE_FALSE' | 'SHORT_ANSWER' | 'NUMERIC'
  | 'STRUCTURED' | 'ESSAY' | 'PRACTICAL' | 'FILE_SUBMISSION' | 'MATCHING'

export interface PracticeQuestion {
  id: string
  kind: QuestionKind
  stem: string
  /** Only what is needed to answer. Contains no answer key. */
  options: { key: string; text: string }[]
  unit: string | null
  placeholder: string | null
  marks: number
  difficulty: string | null
  autoMarkable: boolean
  /** Real provenance or nothing. Never inferred. */
  source: { exam: string; year: number | null; paper: string | null } | null
  attempts: number
  lastCorrect: boolean | null
}

export interface Marked {
  /** Null when the question needs human assessment. Never a guess. */
  isCorrect: boolean | null
  /** Only what the question actually stores. Null when none was written. */
  explanation: string | null
  marks: number
  needsReview: boolean
}

/** How much practice exists for an objective, counting only what can be served. */
export async function practiceCount(objectiveId: string): Promise<number> {
  const { data, error } = await supabase.rpc('edu_practice_count', { p_objective_id: objectiveId })
  if (error) throw error
  return Number(data ?? 0)
}

/**
 * The practice set for one objective.
 *
 * Scoped to an objective by design. There is no call that returns questions in
 * bulk, so the bank cannot be enumerated through this module.
 */
export async function practiceForObjective(
  objectiveId: string,
  /**
   * When given, only genuine past questions from that examination are served.
   * The same function, the same whitelist, the same marking: examination
   * practice is not a separate engine.
   */
  sourceExam?: string,
): Promise<PracticeQuestion[]> {
  const { data, error } = await supabase.rpc('edu_practice_questions', {
    p_objective_id: objectiveId,
    p_source_exam: sourceExam ?? null,
  })
  if (error) throw error
  return (data ?? []).map((q: {
    id: string; kind: string; stem: string; payload: Record<string, unknown> | null
    marks: string | number; difficulty: string | null; auto_markable: boolean
    source_exam: string | null; source_year: number | null; source_paper: string | null
    attempts: number; last_correct: boolean | null
  }) => ({
    id: q.id,
    kind: q.kind as QuestionKind,
    stem: q.stem,
    options: (q.payload?.options as { key: string; text: string }[] | undefined) ?? [],
    unit: (q.payload?.unit as string | undefined) ?? null,
    placeholder: (q.payload?.placeholder as string | undefined) ?? null,
    marks: Number(q.marks),
    difficulty: q.difficulty,
    autoMarkable: q.auto_markable,
    source: q.source_exam
      ? { exam: q.source_exam, year: q.source_year, paper: q.source_paper }
      : null,
    attempts: Number(q.attempts ?? 0),
    lastCorrect: q.last_correct,
  }))
}

/**
 * Submits one answer and returns how it was marked.
 *
 * The verdict comes back from the server. A question requiring human assessment
 * returns isCorrect: null with needsReview: true, which the interface must show
 * as awaiting review rather than converting into a score.
 */
export async function submitAnswer(questionId: string, answer: unknown): Promise<Marked> {
  const { data, error } = await supabase.rpc('edu_submit_practice', {
    p_question_id: questionId,
    p_response: { answer },
  })
  if (error) throw error
  const r = (Array.isArray(data) ? data[0] : data) as {
    is_correct: boolean | null; explanation: string | null
    marks: string | number; needs_review: boolean
  }
  return {
    isCorrect: r?.is_correct ?? null,
    explanation: r?.explanation ?? null,
    marks: Number(r?.marks ?? 0),
    needsReview: Boolean(r?.needs_review),
  }
}

/**
 * What a completed practice set amounts to.
 *
 * Questions awaiting review are counted separately and never folded into the
 * score, because a mark that does not exist yet must not be reported as zero.
 */
export interface PracticeSummary {
  answered: number
  correct: number
  incorrect: number
  awaitingReview: number
  /** Null when nothing was automatically marked, so there is no score to give. */
  percentage: number | null
}

export function summarise(marks: Map<string, Marked>): PracticeSummary {
  const all = [...marks.values()]
  const auto = all.filter(m => !m.needsReview)
  const correct = auto.filter(m => m.isCorrect === true).length
  return {
    answered: all.length,
    correct,
    incorrect: auto.filter(m => m.isCorrect === false).length,
    awaitingReview: all.filter(m => m.needsReview).length,
    percentage: auto.length > 0 ? Math.round((correct / auto.length) * 100) : null,
  }
}
