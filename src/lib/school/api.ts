import { supabase } from '../supabase'

/**
 * The real data layer for NEXA•EDU.
 *
 * Every function here talks to Supabase. There is no sample data in this file
 * and no fallback to invented numbers: if a query fails, the screen says so
 * rather than showing something plausible, because a dashboard that quietly
 * invents figures is worse than one that admits it is broken.
 *
 * Scope is enforced by RLS, not here. The rollup views are declared
 * security_invoker, so a district officer selecting all of v_district_summary
 * receives their own districts and nothing else. Adding a client-side scope
 * filter would duplicate that logic somewhere it can silently rot.
 */

export type Role =
  | 'student' | 'parent' | 'teacher' | 'head_teacher' | 'school_admin'
  | 'circuit_supervisor' | 'district_officer' | 'regional_officer' | 'national'

export interface Profile {
  id: string
  full_name: string
  role: Role
  school_id: string | null
  circuit_id: string | null
  district_id: string | null
  region_id: string | null
}

/* ------------------------------------------------------------------ auth -- */

export async function signIn(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) throw error
}

export async function signOut() {
  await supabase.auth.signOut()
}

/**
 * The signed-in user's profile.
 *
 * Returns null when nobody is signed in, and throws when a signed-in user has
 * no profile row, which is a real fault worth surfacing: every RLS helper keys
 * off this row, so without it the account can read nothing and the screens
 * would look merely empty rather than broken.
 */
export async function currentProfile(): Promise<Profile | null> {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data, error } = await supabase
    .from('edu_profiles')
    .select('id, full_name, role, school_id, circuit_id, district_id, region_id')
    .eq('id', user.id)
    .maybeSingle()

  if (error) throw error
  if (!data) throw new Error('Signed in, but this account has no profile. Ask an administrator to set your role.')
  return data as Profile
}

/* ------------------------------------------------------- national rollups -- */

export interface Summary {
  coverage_pct: number | null
  attendance_pct: number | null
  performance_pct: number | null
  indicators_behind: number
  students_enrolled: number | null
  schools: number | null
  teachers?: number | null
}

export async function nationalSummary(): Promise<Summary | null> {
  const { data, error } = await supabase.from('v_edu_national_summary').select('*').maybeSingle()
  if (error) throw error
  return data as Summary | null
}

export interface UnitRow {
  id: string
  name: string
  meta: string
  pct: number
  attendance: number | null
  students: number | null
}

const pct = (v: unknown) => (v === null || v === undefined ? 0 : Math.round(Number(v)))
const numOrNull = (v: unknown) => (v === null || v === undefined ? null : Number(v))

export async function regions(): Promise<UnitRow[]> {
  const { data, error } = await supabase
    .from('v_edu_region_summary')
    .select('region_id, region_name, districts, schools, coverage_pct, attendance_pct, students_enrolled')
    .order('region_name')
  if (error) throw error
  return (data ?? []).map(r => ({
    id: r.region_id,
    name: r.region_name,
    meta: `${Number(r.districts ?? 0)} districts · ${Number(r.schools ?? 0)} schools`,
    pct: pct(r.coverage_pct),
    attendance: numOrNull(r.attendance_pct),
    students: numOrNull(r.students_enrolled),
  }))
}

export async function districts(regionId: string): Promise<UnitRow[]> {
  const { data, error } = await supabase
    .from('v_edu_district_summary')
    .select('district_id, district_name, schools, coverage_pct, attendance_pct, students_enrolled')
    .eq('region_id', regionId)
    .order('district_name')
  if (error) throw error
  return (data ?? []).map(r => ({
    id: r.district_id,
    name: r.district_name,
    meta: `${Number(r.schools ?? 0)} schools`,
    pct: pct(r.coverage_pct),
    attendance: numOrNull(r.attendance_pct),
    students: numOrNull(r.students_enrolled),
  }))
}

export async function schoolsIn(districtId: string): Promise<UnitRow[]> {
  const { data, error } = await supabase
    .from('v_edu_school_summary')
    .select('school_id, school_name, ges_code, coverage_pct, attendance_pct, students_enrolled')
    .eq('district_id', districtId)
    .order('school_name')
  if (error) throw error
  return (data ?? []).map(r => ({
    id: r.school_id,
    name: r.school_name,
    meta: [r.ges_code, `${Number(r.students_enrolled ?? 0)} learners`].filter(Boolean).join(' · '),
    pct: pct(r.coverage_pct),
    attendance: numOrNull(r.attendance_pct),
    students: numOrNull(r.students_enrolled),
  }))
}

export async function schoolSummary(schoolId: string) {
  const { data, error } = await supabase
    .from('v_edu_school_summary')
    .select('*')
    .eq('school_id', schoolId)
    .maybeSingle()
  if (error) throw error
  return data
}

/* -------------------------------------------------------------- classroom -- */

export interface ClassRow {
  id: string
  name: string
  level_code: string | null
  students: number
}

export async function classesForSchool(schoolId: string): Promise<ClassRow[]> {
  const { data, error } = await supabase
    .from('edu_classes')
    .select('id, name, level_code, edu_enrolments(count)')
    .eq('school_id', schoolId)
    .order('name')
  if (error) throw error
  return (data ?? []).map(c => ({
    id: c.id,
    name: c.name,
    level_code: c.level_code,
    students: (c.edu_enrolments as unknown as { count: number }[])?.[0]?.count ?? 0,
  }))
}

/** Classes this teacher is responsible for, as class teacher or subject teacher. */
export async function myClasses(userId: string): Promise<ClassRow[]> {
  const { data, error } = await supabase
    .from('edu_class_subjects')
    .select('class_id, edu_classes(id, name, level_code)')
    .eq('teacher_id', userId)
  if (error) throw error

  const seen = new Set<string>()
  const out: ClassRow[] = []
  for (const row of data ?? []) {
    const c = row.edu_classes as unknown as { id: string; name: string; level_code: string | null } | null
    if (c && !seen.has(c.id)) {
      seen.add(c.id)
      out.push({ id: c.id, name: c.name, level_code: c.level_code, students: 0 })
    }
  }
  return out.sort((a, b) => a.name.localeCompare(b.name))
}

export interface LearnerRow {
  student_id: string
  full_name: string
  student_code: string | null
}

export async function learnersInClass(classId: string): Promise<LearnerRow[]> {
  const { data, error } = await supabase
    .from('edu_enrolments')
    .select('student_id, edu_students(id, full_name, student_code)')
    .eq('class_id', classId)
    .eq('status', 'active')
  if (error) throw error
  return (data ?? [])
    .map(e => {
      const s = e.edu_students as unknown as { id: string; full_name: string; student_code: string | null } | null
      return s ? { student_id: s.id, full_name: s.full_name, student_code: s.student_code } : null
    })
    .filter((x): x is LearnerRow => x !== null)
    .sort((a, b) => a.full_name.localeCompare(b.full_name))
}

/* ------------------------------------------------------------- attendance -- */

export type AttendanceStatus = 'present' | 'absent' | 'late' | 'excused'

export async function attendanceFor(classId: string, on: string) {
  const { data, error } = await supabase
    .from('edu_attendance')
    .select('student_id, status')
    .eq('class_id', classId)
    .eq('attendance_date', on)
  if (error) throw error
  const map: Record<string, AttendanceStatus> = {}
  for (const r of data ?? []) map[r.student_id] = r.status as AttendanceStatus
  return map
}

/**
 * Records the register.
 *
 * Upserts on (student_id, attendance_date), the unique constraint from
 * migration 005, so re-taking a register corrects it rather than creating a
 * second row for the same pupil on the same day.
 */
export async function saveAttendance(args: {
  schoolId: string
  classId: string
  termId: string | null
  on: string
  marks: { student_id: string; status: AttendanceStatus }[]
  recordedBy: string
}) {
  const rows = args.marks.map(m => ({
    school_id: args.schoolId,
    class_id: args.classId,
    term_id: args.termId,
    student_id: m.student_id,
    status: m.status,
    attendance_date: args.on,
    recorded_by: args.recordedBy,
  }))
  const { error } = await supabase
    .from('edu_attendance')
    .upsert(rows, { onConflict: 'student_id,attendance_date' })
  if (error) throw error
}

/* ------------------------------------------------------------- assessment -- */

export async function assessmentsForClass(classId: string) {
  const { data, error } = await supabase
    .from('edu_assessments')
    .select('id, title, kind, max_score, assessed_on, offering_id')
    .eq('class_id', classId)
    .order('assessed_on', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function scoresFor(assessmentId: string) {
  const { data, error } = await supabase
    .from('edu_assessment_scores')
    .select('student_id, score, remark')
    .eq('assessment_id', assessmentId)
  if (error) throw error
  return data ?? []
}

export async function saveScore(args: {
  schoolId: string
  assessmentId: string
  studentId: string
  score: number
  markedBy: string
}) {
  const { error } = await supabase.from('edu_assessment_scores').upsert({
    school_id: args.schoolId,
    assessment_id: args.assessmentId,
    student_id: args.studentId,
    score: args.score,
    marked_by: args.markedBy,
  }, { onConflict: 'assessment_id,student_id' })
  if (error) throw error
}

/* --------------------------------------------------------------- lessons -- */

/** Lessons filed to a class, newest first. A guest session has no class. */
export async function lessonsForClass(classId: string) {
  const { data, error } = await supabase
    .from('sessions')
    .select('id, title, topic, lesson_date, subject_id, status, edu_session_objectives(objective_id)')
    .eq('class_id', classId)
    .order('lesson_date', { ascending: false })
    .limit(50)
  if (error) throw error
  return data ?? []
}

export async function lessonsToday(teacherId: string, on: string) {
  const { data, error } = await supabase
    .from('sessions')
    .select('id, title, topic, lesson_date, class_id, subject_id, status, edu_classes(name)')
    .eq('teacher_id', teacherId)
    .eq('lesson_date', on)
    .order('created_at')
  if (error) throw error
  return data ?? []
}

/* ------------------------------------------------------------- curriculum -- */

/**
 * Objectives for an offering, through the curriculum hierarchy.
 *
 * Takes an offering rather than a subject and a level: an offering already
 * pins subject, level and curriculum version, which is what makes the
 * objectives returned here the right ones for a particular cohort.
 */
export async function objectivesForOffering(offeringId: string) {
  const { data, error } = await supabase
    .from('edu_strands')
    .select('name, edu_sub_strands(name, edu_topics(name, expected_period, edu_learning_objectives(full_code, text, expected_period)))')
    .eq('offering_id', offeringId)
    .order('sort_order')
  if (error) throw error
  return data ?? []
}

export async function uncoveredFor(classId: string, subjectId: string) {
  const { data, error } = await supabase
    .from('v_edu_uncovered_indicators')
    .select('indicator_code, strand_name, indicator_text, expected_term')
    .eq('class_id', classId)
    .eq('subject_id', subjectId)
    .order('indicator_code')
  if (error) throw error
  return data ?? []
}

/* ------------------------------------------------------------ diagnostics -- */

/**
 * Whether the database has actually been migrated.
 *
 * Used by the shell to tell the difference between "no data yet" and "the
 * tables do not exist", which are very different problems and look identical
 * on screen otherwise.
 */
export async function schemaReady(): Promise<{ ready: boolean; missing: string }> {
  const { error } = await supabase.from('edu_profiles').select('id').limit(1)
  if (!error) return { ready: true, missing: '' }
  return { ready: false, missing: error.message }
}
