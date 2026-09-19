import { supabase } from '../supabase'

/**
 * Carrying on from where the learner stopped.
 *
 * Two questions, both answered from the progress and curriculum records that
 * already exist. There is no second progress model here and nothing is stored:
 * "where was I" is derived from edu_learner_lesson_progress, and "what comes
 * next" is derived from the sequence the curriculum already declares.
 */

export interface Waypoint {
  lessonId: string
  lessonTitle: string
  subjectName: string
  topicName: string
  offeringId: string
  objectiveId: string | null
  /** Where in the lesson they had reached, when they had started it. */
  lastStep: number
  status: 'IN_PROGRESS' | 'NOT_STARTED'
  /** Position of this lesson within its topic, for "Lesson 2 of 4". */
  position: { index: number; total: number } | null
}

/** The shape returned when a lesson is read with its place in the curriculum. */
const LESSON_WITH_PLACE = `
  id, title, sequence, topic_id,
  edu_topics ( id, name,
    edu_sub_strands ( edu_strands (
      edu_subject_offerings ( id, edu_subjects ( name ) ) ) ) ),
  edu_lesson_objectives ( objective_id )
`

type LessonRow = {
  id: string; title: string; sequence: number; topic_id: string
  edu_topics: { id: string; name: string
    edu_sub_strands: { edu_strands: { edu_subject_offerings: {
      id: string; edu_subjects: { name: string } | null } | null } | null } | null } | null
  edu_lesson_objectives: { objective_id: string }[]
}

function place(l: LessonRow) {
  const off = l.edu_topics?.edu_sub_strands?.edu_strands?.edu_subject_offerings ?? null
  return {
    subjectName: off?.edu_subjects?.name ?? '',
    offeringId: off?.id ?? '',
    topicName: l.edu_topics?.name ?? '',
    objectiveId: l.edu_lesson_objectives?.[0]?.objective_id ?? null,
  }
}

/** How many lessons the topic has, and which one this is. */
async function positionInTopic(topicId: string, lessonId: string) {
  const { data } = await supabase
    .from('edu_lessons')
    .select('id')
    .eq('topic_id', topicId)
    .eq('approval', 'APPROVED')
    .order('sequence')
  const list = data ?? []
  const i = list.findIndex(l => l.id === lessonId)
  return i === -1 ? null : { index: i + 1, total: list.length }
}

/**
 * Where the learner should carry on.
 *
 * Prefers a lesson genuinely part-finished, most recently touched first, because
 * that is what "continue" means to a person. Falls back to the first lesson they
 * have not started, so a learner who has finished everything so far is offered
 * the next thing rather than nothing.
 *
 * Returns null when there is nothing to continue, which the interface must show
 * as an honest empty state rather than inventing a suggestion.
 */
export async function continueLearning(studentId: string): Promise<Waypoint | null> {
  // 1. Something already started and not finished.
  const { data: open } = await supabase
    .from('edu_learner_lesson_progress')
    .select(`last_step, updated_at, edu_lessons ( ${LESSON_WITH_PLACE} )`)
    .eq('student_id', studentId)
    .eq('status', 'IN_PROGRESS')
    .order('updated_at', { ascending: false })
    .limit(1)

  const started = (open ?? [])[0]
  if (started?.edu_lessons) {
    const l = started.edu_lessons as unknown as LessonRow
    return {
      lessonId: l.id, lessonTitle: l.title, lastStep: started.last_step,
      status: 'IN_PROGRESS', position: await positionInTopic(l.topic_id, l.id), ...place(l),
    }
  }

  // 2. Otherwise the earliest approved lesson they have never opened.
  const { data: done } = await supabase
    .from('edu_learner_lesson_progress')
    .select('lesson_id')
    .eq('student_id', studentId)
  const seen = new Set((done ?? []).map(d => d.lesson_id))

  const { data: all } = await supabase
    .from('edu_lessons')
    .select(LESSON_WITH_PLACE)
    .eq('approval', 'APPROVED')
    .order('sequence')

  const next = (all ?? []).find(l => !seen.has(l.id)) as unknown as LessonRow | undefined
  if (!next) return null

  return {
    lessonId: next.id, lessonTitle: next.title, lastStep: 0,
    status: 'NOT_STARTED', position: await positionInTopic(next.topic_id, next.id), ...place(next),
  }
}

/**
 * The lesson that follows this one.
 *
 * Looks first within the same topic, then at the start of the next topic in the
 * same subject, following the order the curriculum itself declares. Returns
 * null at the end of a subject, where the honest answer is that there is
 * nothing after this rather than a loop back to the beginning.
 */
export async function nextLesson(currentLessonId: string): Promise<Waypoint | null> {
  const { data: cur } = await supabase
    .from('edu_lessons')
    .select('id, sequence, topic_id, edu_topics ( sub_strand_id, sort_order )')
    .eq('id', currentLessonId)
    .maybeSingle()
  if (!cur) return null

  const topic = cur.edu_topics as unknown as { sub_strand_id: string; sort_order: number } | null

  // Within the same topic.
  const { data: sameTopic } = await supabase
    .from('edu_lessons')
    .select(LESSON_WITH_PLACE)
    .eq('topic_id', cur.topic_id)
    .eq('approval', 'APPROVED')
    .gt('sequence', cur.sequence)
    .order('sequence')
    .limit(1)

  let found = (sameTopic ?? [])[0] as unknown as LessonRow | undefined

  // Otherwise the first lesson of the next topic in the same sub-strand.
  if (!found && topic) {
    const { data: nextTopic } = await supabase
      .from('edu_topics')
      .select('id')
      .eq('sub_strand_id', topic.sub_strand_id)
      .gt('sort_order', topic.sort_order)
      .order('sort_order')
      .limit(1)

    const t = (nextTopic ?? [])[0]
    if (t) {
      const { data: first } = await supabase
        .from('edu_lessons')
        .select(LESSON_WITH_PLACE)
        .eq('topic_id', t.id)
        .eq('approval', 'APPROVED')
        .order('sequence')
        .limit(1)
      found = (first ?? [])[0] as unknown as LessonRow | undefined
    }
  }

  if (!found) return null
  return {
    lessonId: found.id, lessonTitle: found.title, lastStep: 0,
    status: 'NOT_STARTED', position: await positionInTopic(found.topic_id, found.id),
    ...place(found),
  }
}
