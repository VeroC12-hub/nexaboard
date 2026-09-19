import { supabase } from '../supabase'
import type { LearnerContext } from './context'

/**
 * Curriculum navigation.
 *
 * Reads the Stage One hierarchy and nothing else. There is no second
 * curriculum model here: every function returns rows from
 * edu_subject_offerings, edu_strands, edu_sub_strands, edu_topics and
 * edu_learning_objectives as they already exist.
 *
 * Two rules this module exists to hold:
 *
 *   Terminology is never decided here. Period nouns, work labels and level
 *   names come from the resolved LearnerContext, which read them from
 *   configuration. Nothing in this file knows that a university calls a period
 *   a semester.
 *
 *   "No content authored yet" and "learner has not started" are different
 *   facts and stay different all the way to the screen. Collapsing them into
 *   0% would tell a learner they have failed to start something that does not
 *   exist.
 */

export type ProgressState = 'NO_CONTENT' | 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED'

export interface Offering {
  id: string
  subjectId: string
  subjectCode: string
  subjectName: string
  isCore: boolean
  levelCode: string
  curriculum: { code: string; version: string; isOfficial: boolean } | null
}

export interface TopicNode {
  id: string
  code: string
  name: string
  expectedPeriod: number | null
  objectiveCount: number
}

export interface StrandNode {
  id: string
  code: string
  name: string
  subStrands: { id: string; code: string; name: string; topics: TopicNode[] }[]
}

export interface ObjectiveRow {
  id: string
  fullCode: string
  text: string
  expectedPeriod: number | null
  state: ProgressState
  lessonsTotal: number
  lessonsCompleted: number
}

/**
 * A curriculum is treated as official unless it is explicitly inactive and
 * carries no education system. The demo curriculum is both, which is how the
 * interface can mark it unmistakably without hard-coding its code.
 */
const isOfficial = (c: { is_active: boolean; system_code: string | null } | null) =>
  Boolean(c && c.is_active && c.system_code)

/** Offerings for a level. Used for the learner's own level and for Explore. */
export async function offeringsForLevel(levelCode: string): Promise<Offering[]> {
  const { data, error } = await supabase
    .from('edu_subject_offerings')
    .select('id, is_core, level_code, edu_subjects(id, code, name), edu_curricula(code, version, is_active, system_code)')
    .eq('level_code', levelCode)
    .order('sort_order')
  if (error) throw error

  return (data ?? [])
    .map(o => {
      const s = o.edu_subjects as unknown as { id: string; code: string; name: string } | null
      const c = o.edu_curricula as unknown as { code: string; version: string; is_active: boolean; system_code: string | null } | null
      if (!s) return null
      return {
        id: o.id,
        subjectId: s.id,
        subjectCode: s.code,
        subjectName: s.name,
        isCore: o.is_core,
        levelCode: o.level_code,
        curriculum: c ? { code: c.code, version: c.version, isOfficial: isOfficial(c) } : null,
      }
    })
    .filter((x): x is Offering => x !== null)
}

/** Every level the learner may explore, ordered as configuration orders them. */
export async function exploreLevels(): Promise<{ code: string; label: string; system: string }[]> {
  const [{ data: levels, error }, { data: names }] = await Promise.all([
    supabase.from('edu_levels').select('code, system_code, sort_order').eq('is_active', true).order('sort_order'),
    supabase.from('edu_display_names').select('code, label').eq('kind', 'LEVEL').eq('language', 'en'),
  ])
  if (error) throw error
  const label = new Map((names ?? []).map(n => [n.code, n.label]))
  return (levels ?? []).map(l => ({
    code: l.code,
    label: label.get(l.code) ?? l.code,
    system: l.system_code,
  }))
}

/**
 * The strand tree for an offering.
 *
 * objectiveCount is carried on each topic so the navigator can show "no
 * content yet" before the learner opens it, rather than after.
 */
export async function hierarchyFor(offeringId: string): Promise<StrandNode[]> {
  const { data, error } = await supabase
    .from('edu_strands')
    .select(`
      id, code, name, sort_order,
      edu_sub_strands (
        id, code, name, sort_order,
        edu_topics ( id, code, name, expected_period, sort_order,
                     edu_learning_objectives ( id ) )
      )
    `)
    .eq('offering_id', offeringId)
    .order('sort_order')
  if (error) throw error

  type Raw = NonNullable<typeof data>[number]
  return (data ?? []).map((s: Raw) => ({
    id: s.id,
    code: s.code,
    name: s.name,
    subStrands: ((s.edu_sub_strands ?? []) as unknown as {
      id: string; code: string; name: string; sort_order: number
      edu_topics: { id: string; code: string; name: string; expected_period: number | null
                    sort_order: number; edu_learning_objectives: { id: string }[] }[]
    }[])
      .sort((a, b) => a.sort_order - b.sort_order)
      .map(ss => ({
        id: ss.id,
        code: ss.code,
        name: ss.name,
        topics: (ss.edu_topics ?? [])
          .sort((a, b) => a.sort_order - b.sort_order)
          .map(t => ({
            id: t.id,
            code: t.code,
            name: t.name,
            expectedPeriod: t.expected_period,
            objectiveCount: (t.edu_learning_objectives ?? []).length,
          })),
      })),
  }))
}

/**
 * Objectives in a topic, each with the learner's real state.
 *
 * State comes from v_edu_objective_progress, which already separates
 * NO_CONTENT from NOT_STARTED. This function does not compute progress; it
 * reports it.
 */
export async function objectivesInTopic(topicId: string, studentId: string): Promise<ObjectiveRow[]> {
  const [{ data: objs, error }, { data: prog }] = await Promise.all([
    supabase
      .from('edu_learning_objectives')
      .select('id, full_code, text, expected_period, sort_order')
      .eq('topic_id', topicId)
      .order('sort_order'),
    supabase
      .from('v_edu_objective_progress')
      .select('objective_id, state, lessons_total, lessons_completed')
      .eq('student_id', studentId)
      .eq('topic_id', topicId),
  ])
  if (error) throw error

  const byId = new Map((prog ?? []).map(p => [p.objective_id, p]))
  return (objs ?? []).map(o => {
    const p = byId.get(o.id)
    return {
      id: o.id,
      fullCode: o.full_code,
      text: o.text,
      expectedPeriod: o.expected_period,
      state: (p?.state ?? 'NO_CONTENT') as ProgressState,
      lessonsTotal: Number(p?.lessons_total ?? 0),
      lessonsCompleted: Number(p?.lessons_completed ?? 0),
    }
  })
}

/* ----------------------------------------------------------- objective page */

export interface ObjectiveDetail {
  id: string
  fullCode: string
  text: string
  competency: string | null
  expectedPeriod: number | null
  position: { strand: string; subStrand: string; topic: string; subject: string
              curriculum: { code: string; version: string; isOfficial: boolean } | null }
  /**
   * What the curriculum explicitly records as useful to learn first.
   *
   * A set, not a chain: an objective may have any number of prerequisites, and
   * they may sit in other subjects. Nothing here is inferred; every entry is a
   * row in edu_objective_prerequisites.
   *
   * `offeringId` is the prerequisite's own offering, so opening one navigates
   * into the subject it actually belongs to rather than the one the learner
   * happened to come from.
   */
  prerequisites: {
    id: string
    fullCode: string
    text: string
    strength: string
    subject: string
    topic: string
    offeringId: string | null
    /** From the existing progress view. NO_CONTENT is not zero progress. */
    state: ProgressState
    lessonsTotal: number
    lessonsCompleted: number
  }[]
  lessons: { id: string; title: string; summary: string | null; minutes: number | null; steps: number }[]
  resources: { id: string; title: string; kind: string; sizeBytes: number | null
               durationSeconds: number | null; hasLite: boolean; downloadable: boolean }[]
  practiceCount: number
  progress: { state: ProgressState; lessonsTotal: number; lessonsCompleted: number }
}

/**
 * Everything a learner may see for one objective.
 *
 * Approval filtering is applied in the query as well as by RLS. The policy is
 * the enforcement; the filter makes the intent visible at the call site, so a
 * later reader cannot mistake unapproved content for something merely absent.
 */
export async function objectiveDetail(objectiveId: string, studentId: string): Promise<ObjectiveDetail | null> {
  const { data: o, error } = await supabase
    .from('edu_learning_objectives')
    .select(`
      id, full_code, text, competency, expected_period,
      edu_topics ( name,
        edu_sub_strands ( name,
          edu_strands ( name,
            edu_subject_offerings ( edu_subjects ( name ),
                                    edu_curricula ( code, version, is_active, system_code ) ) ) ) )
    `)
    .eq('id', objectiveId)
    .maybeSingle()
  if (error) throw error
  if (!o) return null

  const topic = o.edu_topics as unknown as {
    name: string
    edu_sub_strands: { name: string; edu_strands: { name: string
      edu_subject_offerings: { edu_subjects: { name: string } | null
        edu_curricula: { code: string; version: string; is_active: boolean; system_code: string | null } | null } | null } | null } | null
  } | null
  const sub = topic?.edu_sub_strands ?? null
  const strand = sub?.edu_strands ?? null
  const offering = strand?.edu_subject_offerings ?? null
  const cur = offering?.edu_curricula ?? null

  const [prereq, lessons, resources, questions, progress] = await Promise.all([
    // The prerequisite's own place in the curriculum, followed through the real
    // foreign keys. Nothing is matched on a code or a display name.
    supabase.from('edu_objective_prerequisites')
      .select(`
        strength,
        prerequisite:edu_learning_objectives!edu_objective_prerequisites_prerequisite_id_fkey(
          id, full_code, text,
          edu_topics ( name,
            edu_sub_strands ( edu_strands (
              edu_subject_offerings ( id, edu_subjects ( name ) ) ) ) )
        )
      `)
      .eq('objective_id', objectiveId),
    supabase.from('edu_lesson_objectives')
      .select('edu_lessons!inner(id, title, summary, duration_minutes, approval, edu_lesson_steps(id))')
      .eq('objective_id', objectiveId)
      .eq('edu_lessons.approval', 'APPROVED'),
    supabase.from('edu_content_objectives')
      .select('edu_content_items!inner(id, title, kind, size_bytes, duration_seconds, lite_uri, is_downloadable, approval)')
      .eq('objective_id', objectiveId)
      .eq('edu_content_items.approval', 'APPROVED'),
    // Counted through the function, not by reading the link table. The table is
    // closed to learners, and counting it directly counted unapproved questions
    // as available practice.
    supabase.rpc('edu_practice_count', { p_objective_id: objectiveId }),
    supabase.from('v_edu_objective_progress')
      .select('state, lessons_total, lessons_completed')
      .eq('student_id', studentId).eq('objective_id', objectiveId).maybeSingle(),
  ])

  // Prerequisite state comes from the same view the objective page already
  // uses, so a prerequisite and the objective it belongs to can never report
  // progress differently. No prerequisite-progress model exists.
  type PrereqRow = {
    strength: string
    prerequisite: {
      id: string; full_code: string; text: string
      edu_topics: { name: string
        edu_sub_strands: { edu_strands: { edu_subject_offerings: {
          id: string; edu_subjects: { name: string } | null } | null } | null } | null } | null
    } | null
  }
  const prereqRows = (prereq.data ?? []) as unknown as PrereqRow[]
  const prereqIds = prereqRows.map(p => p.prerequisite?.id).filter((x): x is string => Boolean(x))

  const prereqProgress = new Map<string, { state: ProgressState; total: number; done: number }>()
  if (prereqIds.length > 0) {
    const { data: pp } = await supabase
      .from('v_edu_objective_progress')
      .select('objective_id, state, lessons_total, lessons_completed')
      .eq('student_id', studentId)
      .in('objective_id', prereqIds)
    for (const r of pp ?? []) {
      prereqProgress.set(r.objective_id, {
        state: r.state as ProgressState,
        total: Number(r.lessons_total ?? 0),
        done: Number(r.lessons_completed ?? 0),
      })
    }
  }

  return {
    id: o.id,
    fullCode: o.full_code,
    text: o.text,
    competency: o.competency,
    expectedPeriod: o.expected_period,
    position: {
      strand: strand?.name ?? '',
      subStrand: sub?.name ?? '',
      topic: topic?.name ?? '',
      subject: offering?.edu_subjects?.name ?? '',
      curriculum: cur ? { code: cur.code, version: cur.version, isOfficial: isOfficial(cur) } : null,
    },
    prerequisites: prereqRows.map(p => {
      const q = p.prerequisite
      if (!q) return null
      const off = q.edu_topics?.edu_sub_strands?.edu_strands?.edu_subject_offerings ?? null
      const pr = prereqProgress.get(q.id)
      return {
        id: q.id,
        fullCode: q.full_code,
        text: q.text,
        strength: p.strength,
        subject: off?.edu_subjects?.name ?? '',
        topic: q.edu_topics?.name ?? '',
        offeringId: off?.id ?? null,
        // Absent from the view means no row was produced for this pairing,
        // which is the same as having no authored content.
        state: pr?.state ?? 'NO_CONTENT',
        lessonsTotal: pr?.total ?? 0,
        lessonsCompleted: pr?.done ?? 0,
      }
    }).filter((x): x is NonNullable<typeof x> => x !== null),
    lessons: (lessons.data ?? []).map(l => {
      const x = l.edu_lessons as unknown as { id: string; title: string; summary: string | null
        duration_minutes: number | null; edu_lesson_steps: { id: string }[] }
      return { id: x.id, title: x.title, summary: x.summary, minutes: x.duration_minutes,
               steps: (x.edu_lesson_steps ?? []).length }
    }),
    resources: (resources.data ?? []).map(r => {
      const x = r.edu_content_items as unknown as { id: string; title: string; kind: string
        size_bytes: number | null; duration_seconds: number | null; lite_uri: string | null; is_downloadable: boolean }
      return { id: x.id, title: x.title, kind: x.kind, sizeBytes: x.size_bytes,
               durationSeconds: x.duration_seconds, hasLite: Boolean(x.lite_uri), downloadable: x.is_downloadable }
    }),
    practiceCount: Number(questions.data ?? 0),
    progress: {
      state: (progress.data?.state ?? 'NO_CONTENT') as ProgressState,
      lessonsTotal: Number(progress.data?.lessons_total ?? 0),
      lessonsCompleted: Number(progress.data?.lessons_completed ?? 0),
    },
  }
}

/**
 * The period label for a topic, in the learner's own vocabulary.
 *
 * The noun comes from the resolved context, which read it from the level's
 * period pattern. A university learner sees "Semester 1" from the same call
 * that gives a JHS learner "Term 1", with no branch here.
 */
export function periodLabel(ctx: LearnerContext, period: number | null): string | null {
  if (period === null || !ctx.period) return null
  return `${ctx.period.noun} ${period}`
}
