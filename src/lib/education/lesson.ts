import { supabase } from '../supabase'

/**
 * The lesson experience.
 *
 * Reads edu_lessons and edu_lesson_steps as Stage One defined them. There is no
 * second lesson model here and no content is synthesised: a lesson with no
 * authored steps returns an empty array, and the interface says so.
 *
 * The boundary this module holds: lesson progress is the learner's own record
 * of what they worked through. It is written to edu_learner_lesson_progress and
 * never to edu_assessment_results, because opening a lesson is not an
 * assessment and must never appear in a learner's official academic record.
 */

export type StepKind =
  | 'IDEA' | 'WORKED_EXAMPLE' | 'TRY' | 'CHECK' | 'PRACTICAL' | 'DISCUSSION' | 'REFLECTION'

export interface LessonStep {
  id: string
  sequence: number
  kind: StepKind
  title: string | null
  body: string | null
  payload: Record<string, unknown>
}

export interface LessonProgress {
  status: 'IN_PROGRESS' | 'COMPLETED'
  lastStep: number
  startedAt: string
  completedAt: string | null
}

export interface OpenLesson {
  id: string
  title: string
  summary: string | null
  minutes: number | null
  steps: LessonStep[]
  position: { subject: string; strand: string; subStrand: string; topic: string }
  curriculum: { code: string; version: string; isOfficial: boolean } | null
  objectives: { id: string; fullCode: string; text: string }[]
  progress: LessonProgress | null
}

/**
 * Opens an approved lesson.
 *
 * The approval filter is stated here as well as enforced by RLS. RLS is the
 * boundary; this makes the intent legible at the call site, so a later reader
 * cannot mistake an unapproved lesson for one that merely has no rows.
 *
 * Returns null when the lesson does not exist or is not approved, which from
 * the learner's side are deliberately the same answer.
 */
export async function openLesson(lessonId: string, studentId: string): Promise<OpenLesson | null> {
  const { data: lesson, error } = await supabase
    .from('edu_lessons')
    .select(`
      id, title, summary, duration_minutes, approval,
      edu_topics ( name,
        edu_sub_strands ( name,
          edu_strands ( name,
            edu_subject_offerings ( edu_subjects ( name ) ) ) ) ),
      edu_curricula ( code, version, is_active, system_code )
    `)
    .eq('id', lessonId)
    .eq('approval', 'APPROVED')
    .maybeSingle()
  if (error) throw error
  if (!lesson) return null

  const [steps, objectives, progress] = await Promise.all([
    supabase.from('edu_lesson_steps')
      .select('id, sequence, kind, title, body, payload')
      .eq('lesson_id', lessonId)
      .order('sequence'),
    supabase.from('edu_lesson_objectives')
      .select('edu_learning_objectives ( id, full_code, text )')
      .eq('lesson_id', lessonId),
    supabase.from('edu_learner_lesson_progress')
      .select('status, last_step, started_at, completed_at')
      .eq('lesson_id', lessonId)
      .eq('student_id', studentId)
      .maybeSingle(),
  ])

  const topic = lesson.edu_topics as unknown as {
    name: string
    edu_sub_strands: { name: string; edu_strands: { name: string
      edu_subject_offerings: { edu_subjects: { name: string } | null } | null } | null } | null
  } | null
  const sub = topic?.edu_sub_strands ?? null
  const strand = sub?.edu_strands ?? null
  const cur = lesson.edu_curricula as unknown as
    { code: string; version: string; is_active: boolean; system_code: string | null } | null

  return {
    id: lesson.id,
    title: lesson.title,
    summary: lesson.summary,
    minutes: lesson.duration_minutes,
    steps: (steps.data ?? []).map(s => ({
      id: s.id,
      sequence: s.sequence,
      kind: s.kind as StepKind,
      title: s.title,
      body: s.body,
      payload: (s.payload ?? {}) as Record<string, unknown>,
    })),
    position: {
      subject: strand?.edu_subject_offerings?.edu_subjects?.name ?? '',
      strand: strand?.name ?? '',
      subStrand: sub?.name ?? '',
      topic: topic?.name ?? '',
    },
    curriculum: cur
      ? { code: cur.code, version: cur.version, isOfficial: Boolean(cur.is_active && cur.system_code) }
      : null,
    objectives: (objectives.data ?? [])
      .map(o => o.edu_learning_objectives as unknown as { id: string; full_code: string; text: string } | null)
      .filter((o): o is NonNullable<typeof o> => o !== null)
      .map(o => ({ id: o.id, fullCode: o.full_code, text: o.text })),
    progress: progress.data
      ? {
          status: progress.data.status as LessonProgress['status'],
          lastStep: progress.data.last_step,
          startedAt: progress.data.started_at,
          completedAt: progress.data.completed_at,
        }
      : null,
  }
}

/**
 * Records how far the learner has reached.
 *
 * Deliberately never sets COMPLETED. Reaching the last step is "last viewed",
 * which is not the same as having completed the lesson, and conflating them
 * would mark a learner complete for scrolling to the end.
 *
 * last_step only advances. Going back to re-read an earlier step is normal and
 * must not look like losing progress.
 */
export async function recordStep(studentId: string, lessonId: string, step: number) {
  const { data: existing } = await supabase
    .from('edu_learner_lesson_progress')
    .select('last_step, status')
    .eq('student_id', studentId)
    .eq('lesson_id', lessonId)
    .maybeSingle()

  const furthest = Math.max(step, existing?.last_step ?? 0)

  const { error } = await supabase
    .from('edu_learner_lesson_progress')
    .upsert(
      {
        student_id: studentId,
        lesson_id: lessonId,
        last_step: furthest,
        status: existing?.status === 'COMPLETED' ? 'COMPLETED' : 'IN_PROGRESS',
      },
      { onConflict: 'student_id,lesson_id' },
    )
  if (error) throw error
}

/**
 * Marks the lesson complete.
 *
 * Only ever called from an explicit action by the learner. Writes to the
 * learner's own activity record; edu_assessment_results is untouched, because
 * finishing a lesson is not an assessment outcome.
 */
export async function completeLesson(studentId: string, lessonId: string, lastStep: number) {
  const { error } = await supabase
    .from('edu_learner_lesson_progress')
    .upsert(
      {
        student_id: studentId,
        lesson_id: lessonId,
        last_step: lastStep,
        status: 'COMPLETED',
        completed_at: new Date().toISOString(),
      },
      { onConflict: 'student_id,lesson_id' },
    )
  if (error) throw error
}

/** Clears completion so the learner can work through it again from the start. */
export async function restartLesson(studentId: string, lessonId: string) {
  const { error } = await supabase
    .from('edu_learner_lesson_progress')
    .upsert(
      { student_id: studentId, lesson_id: lessonId, last_step: 0, status: 'IN_PROGRESS', completed_at: null },
      { onConflict: 'student_id,lesson_id' },
    )
  if (error) throw error
}
