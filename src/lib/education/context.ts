import { supabase } from '../supabase'

/**
 * The education context engine.
 *
 * Resolves an authenticated learner into their complete educational context by
 * reading it, never by inferring it. Nothing in this file decides that JHS
 * leads to BECE, that a TVET group is called a trade, or that a five year old
 * should not see a ranking: every one of those is a row in edu_levels put
 * there by Stage One.
 *
 * The single rule the learner interface depends on: if a label, a feature or
 * an educational rule is not in the LearnerContext returned here, no component
 * may invent it.
 */

export type OutcomeModel = 'DEVELOPMENTAL' | 'NUMERIC' | 'COMPETENCY' | 'CREDIT' | 'COMPLETION'

export interface LearnerContext {
  /* identity */
  studentId: string
  studentName: string
  learnerId: string | null

  /* placement */
  educationSystem: string
  educationSystemLabel: string
  stage: string | null
  levelCode: string
  levelLabel: string
  institution: { id: string; name: string; code: string | null } | null
  group: { type: string; typeLabel: string; name: string; stream: string | null } | null
  programme: { id: string; name: string; kind: string } | null

  /* time */
  academicYear: string | null
  /**
   * Null when the learner's education structure has no periods at all, such as
   * a rolling TVET intake. `count` is how many the structure has, so nothing
   * downstream has to guess a range.
   */
  period: { number: number; noun: string; count: number } | null

  /* curriculum */
  curriculum: { id: string; code: string; version: string } | null
  offerings: { id: string; subjectId: string; subjectCode: string; subjectName: string; isCore: boolean }[]

  /* terminology, all from configuration */
  workLabel: string
  secondaryWorkLabel: string | null
  progressLabel: string

  /* rules */
  assessmentModel: string
  outcomeModel: OutcomeModel
  examination: { code: string; label: string; imminent: boolean } | null
  progression: string
  ageBand: string | null
  ranking: { enabled: boolean; visibility: string; scope: string; metric: string }
  features: string[]
}

/** Which typed outcome a level's assessment model produces. */
const OUTCOME_FOR: Record<string, OutcomeModel> = {
  DEVELOPMENTAL: 'DEVELOPMENTAL',
  SCHOOL_ASSESSMENT: 'NUMERIC',
  CONTINUOUS: 'NUMERIC',
  COMPETENCY: 'COMPETENCY',
  ACADEMIC_CREDIT: 'CREDIT',
}

type Labels = Record<string, Record<string, string>>

async function labels(): Promise<Labels> {
  const { data, error } = await supabase
    .from('edu_display_names')
    .select('kind, code, label')
    .eq('language', 'en')
  if (error) throw error
  const out: Labels = {}
  for (const r of data ?? []) {
    out[r.kind] ??= {}
    out[r.kind][r.code] = r.label
  }
  return out
}

/**
 * Resolves the signed-in learner.
 *
 * Returns null when the account is not a learner, which is a legitimate state
 * rather than an error: staff and officers sign into the same platform.
 */
export async function resolveLearnerContext(): Promise<LearnerContext | null> {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data: student, error: sErr } = await supabase
    .from('edu_students')
    .select('id, full_name, student_code, school_id')
    .eq('user_id', user.id)
    .maybeSingle()
  if (sErr) throw sErr
  if (!student) return null

  // The current enrolment is the whole placement. Historical enrolments are
  // never overwritten, so "current" is the one in the current academic year.
  const { data: enrolments, error: eErr } = await supabase
    .from('edu_enrolments')
    .select(`
      status, programme_id,
      edu_programmes ( id, name, kind ),
      edu_academic_years ( id, name, is_current ),
      edu_classes (
        id, name, stream, level_code,
        edu_schools ( id, name, ges_code ),
        edu_class_subjects (
          edu_subject_offerings (
            id, is_core,
            edu_subjects ( id, code, name ),
            edu_curricula ( id, code, version )
          )
        )
      )
    `)
    .eq('student_id', student.id)
    .eq('status', 'active')
  if (eErr) throw eErr

  type Row = NonNullable<typeof enrolments>[number]
  const current = (enrolments ?? []).find(
    (e: Row) => (e.edu_academic_years as unknown as { is_current: boolean } | null)?.is_current,
  ) ?? (enrolments ?? [])[0]
  if (!current) return null

  const cls = current.edu_classes as unknown as {
    id: string; name: string; stream: string | null; level_code: string
    edu_schools: { id: string; name: string; ges_code: string | null } | null
    edu_class_subjects: { edu_subject_offerings: {
      id: string; is_core: boolean
      edu_subjects: { id: string; code: string; name: string } | null
      edu_curricula: { id: string; code: string; version: string } | null
    } | null }[]
  } | null

  const levelCode = cls?.level_code
  if (!levelCode) return null

  const [{ data: level, error: lErr }, L] = await Promise.all([
    supabase.from('edu_levels').select('*').eq('code', levelCode).maybeSingle(),
    labels(),
  ])
  if (lErr) throw lErr
  if (!level) throw new Error(`Level ${levelCode} is not configured. Stage One configuration is incomplete.`)

  // Period comes from the school's current term, named by the level's period
  // pattern, so a university reads "Semester" where a school reads "Term".
  const { data: term } = await supabase
    .from('edu_terms')
    .select('term_number')
    .eq('school_id', student.school_id)
    .eq('is_current', true)
    .maybeSingle()

  // The pattern decides both what a period is called and how many exist. A
  // pattern with no periods_per_year (a rolling intake) has no period concept
  // at all, so the learner gets period: null and every period affordance
  // disappears rather than showing an invented range.
  let pattern: { period_noun: string; periods_per_year: number | null } | null = null
  if (level.period_pattern) {
    const { data: pat } = await supabase
      .from('edu_period_patterns')
      .select('period_noun, periods_per_year')
      .eq('code', level.period_pattern)
      .maybeSingle()
    pattern = pat ?? null
  }
  const periodCount = pattern?.periods_per_year ?? null

  const offerings = (cls?.edu_class_subjects ?? [])
    .map(cs => cs.edu_subject_offerings)
    .filter((o): o is NonNullable<typeof o> => o !== null && o.edu_subjects !== null)
    .map(o => ({
      id: o.id,
      subjectId: o.edu_subjects!.id,
      subjectCode: o.edu_subjects!.code,
      subjectName: o.edu_subjects!.name,
      isCore: o.is_core,
    }))

  const curriculumRow = (cls?.edu_class_subjects ?? [])
    .map(cs => cs.edu_subject_offerings?.edu_curricula)
    .find(Boolean) ?? null

  const school = cls?.edu_schools ?? null
  const programme = current.edu_programmes as unknown as { id: string; name: string; kind: string } | null
  const year = current.edu_academic_years as unknown as { name: string } | null

  return {
    studentId: student.id,
    studentName: student.full_name,
    learnerId: student.student_code,

    educationSystem: level.system_code,
    educationSystemLabel: L.SYSTEM?.[level.system_code] ?? level.system_code,
    stage: level.stage_code,
    levelCode: level.code,
    levelLabel: L.LEVEL?.[level.code] ?? level.code,
    institution: school ? { id: school.id, name: school.name, code: school.ges_code } : null,
    group: cls ? {
      type: level.group_type,
      typeLabel: L.GROUP_TYPE?.[level.group_type] ?? level.group_type,
      name: cls.name,
      stream: cls.stream,
    } : null,
    programme: programme ? { id: programme.id, name: programme.name, kind: programme.kind } : null,

    academicYear: year?.name ?? null,
    period: term && periodCount && periodCount > 0
      ? { number: term.term_number, noun: pattern?.period_noun ?? 'Term', count: periodCount }
      : null,

    curriculum: curriculumRow
      ? { id: curriculumRow.id, code: curriculumRow.code, version: curriculumRow.version }
      : null,
    offerings,

    workLabel: L.WORK?.[level.primary_work] ?? level.primary_work,
    secondaryWorkLabel: level.secondary_work ? (L.WORK?.[level.secondary_work] ?? level.secondary_work) : null,
    progressLabel: L.PROGRESS?.[level.assessment_model] ?? 'Progress',

    assessmentModel: level.assessment_model,
    outcomeModel: OUTCOME_FOR[level.assessment_model] ?? 'NUMERIC',
    examination: level.examination_code
      ? {
          code: level.examination_code,
          label: L.EXAM?.[level.examination_code] ?? level.examination_code,
          imminent: level.exam_imminent,
        }
      : null,
    progression: level.progression,
    ageBand: level.age_band,
    ranking: {
      enabled: level.ranking_enabled,
      visibility: level.ranking_visibility,
      scope: level.ranking_scope,
      metric: level.ranking_metric,
    },
    features: (level.features as string[]) ?? [],
  }
}

/** The only permitted way to ask whether a learner may see something. */
export function has(ctx: LearnerContext, feature: string): boolean {
  return ctx.features.includes(feature)
}

/**
 * Whether a ranking may be shown to this learner.
 *
 * Not a component's decision. Staff-only visibility means the school sees a
 * position and the learner does not, which is the configured default for
 * primary.
 */
export function showsRankingToLearner(ctx: LearnerContext): boolean {
  return ctx.ranking.enabled && ctx.ranking.visibility === 'LEARNER'
}
