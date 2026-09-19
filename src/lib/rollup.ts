import { supabase } from './supabase'

/**
 * Data access for the supervision drill-down.
 *
 * Every query below is unfiltered by scope on purpose. The rollup views are
 * declared security_invoker, so RLS decides what comes back: a district officer
 * selecting all of v_district_summary receives their own districts and nothing
 * else. Adding a client-side scope filter here would duplicate that logic in a
 * place where getting it wrong is invisible, so we do not.
 */

export type Level = 'national' | 'region' | 'district' | 'circuit' | 'school' | 'class'

export interface Crumb {
  level: Level
  id: string | null
  label: string
}

/** One row in the register, whatever level we are looking at. */
export interface Unit {
  id: string
  name: string
  /** Secondary line: school code, level badge, teacher name. */
  meta?: string
  coveragePct: number | null
  attendancePct: number | null
  performancePct: number | null
  indicatorsTotal: number
  indicatorsTaught: number
  indicatorsDue: number
  indicatorsBehind: number
  students: number | null
  /** Null when this row is a leaf and cannot be opened further. */
  childLevel: Level | null
}

/** The headline figures for the unit currently in view. */
export interface Summary {
  coveragePct: number | null
  attendancePct: number | null
  performancePct: number | null
  indicatorsBehind: number
  students: number | null
  schools: number | null
}

const num = (v: unknown): number | null =>
  v === null || v === undefined ? null : Number(v)

const int = (v: unknown): number => (v === null || v === undefined ? 0 : Number(v))

export const LEVEL_LABEL: Record<Level, string> = {
  national: 'Ghana',
  region: 'Region',
  district: 'District',
  circuit: 'Circuit',
  school: 'School',
  class: 'Class',
}

/** What you are looking at a list of, when you are at this level. */
export const CHILD_NOUN: Record<Level, string> = {
  national: 'Regions',
  region: 'Districts',
  district: 'Circuits',
  circuit: 'Schools',
  school: 'Classes',
  class: 'Subjects',
}

// ---------------------------------------------------------------------------
// children of the current unit
// ---------------------------------------------------------------------------

export async function fetchChildren(level: Level, id: string | null): Promise<Unit[]> {
  switch (level) {
    case 'national': {
      const { data, error } = await supabase
        .from('v_region_summary')
        .select('region_id, region_name, districts, schools, coverage_pct, attendance_pct, performance_pct, indicators_behind, students_enrolled')
        .order('region_name')
      if (error) throw error
      return (data ?? []).map(r => ({
        id: r.region_id,
        name: r.region_name,
        meta: `${int(r.districts)} districts · ${int(r.schools)} schools`,
        coveragePct: num(r.coverage_pct),
        attendancePct: num(r.attendance_pct),
        performancePct: num(r.performance_pct),
        indicatorsTotal: 0,
        indicatorsTaught: 0,
        indicatorsDue: 0,
        indicatorsBehind: int(r.indicators_behind),
        students: int(r.students_enrolled),
        childLevel: 'region',
      }))
    }

    case 'region': {
      const { data, error } = await supabase
        .from('v_district_summary')
        .select('district_id, district_name, schools, coverage_pct, attendance_pct, performance_pct, indicators_behind, students_enrolled')
        .eq('region_id', id)
        .order('district_name')
      if (error) throw error
      return (data ?? []).map(r => ({
        id: r.district_id,
        name: r.district_name,
        meta: `${int(r.schools)} schools`,
        coveragePct: num(r.coverage_pct),
        attendancePct: num(r.attendance_pct),
        performancePct: num(r.performance_pct),
        indicatorsTotal: 0,
        indicatorsTaught: 0,
        indicatorsDue: 0,
        indicatorsBehind: int(r.indicators_behind),
        students: int(r.students_enrolled),
        childLevel: 'district',
      }))
    }

    case 'district': {
      const { data, error } = await supabase
        .from('v_circuit_summary')
        .select('circuit_id, circuit_name, schools, coverage_pct, attendance_pct, performance_pct, indicators_behind, students_enrolled')
        .eq('district_id', id)
        .order('circuit_name')
      if (error) throw error
      return (data ?? []).map(r => ({
        id: r.circuit_id,
        name: r.circuit_name,
        meta: `${int(r.schools)} schools`,
        coveragePct: num(r.coverage_pct),
        attendancePct: num(r.attendance_pct),
        performancePct: num(r.performance_pct),
        indicatorsTotal: 0,
        indicatorsTaught: 0,
        indicatorsDue: 0,
        indicatorsBehind: int(r.indicators_behind),
        students: int(r.students_enrolled),
        childLevel: 'circuit',
      }))
    }

    case 'circuit': {
      const { data, error } = await supabase
        .from('v_school_summary')
        .select('school_id, school_name, ges_code, school_type, coverage_pct, attendance_pct, performance_pct, indicators_behind, students_enrolled')
        .eq('circuit_id', id)
        .order('school_name')
      if (error) throw error
      return (data ?? []).map(r => ({
        id: r.school_id,
        name: r.school_name,
        meta: [r.ges_code, `${int(r.students_enrolled)} pupils`].filter(Boolean).join(' · '),
        coveragePct: num(r.coverage_pct),
        attendancePct: num(r.attendance_pct),
        performancePct: num(r.performance_pct),
        indicatorsTotal: 0,
        indicatorsTaught: 0,
        indicatorsDue: 0,
        indicatorsBehind: int(r.indicators_behind),
        students: int(r.students_enrolled),
        childLevel: 'school',
      }))
    }

    case 'school': {
      // Coverage is stored per class-and-subject, so classes are assembled by
      // folding those rows together. Two small queries rather than one wide
      // join keeps the payload down on a metered connection.
      const [{ data: classes, error: cErr }, { data: cov, error: vErr }] = await Promise.all([
        supabase.from('classes').select('id, name, level').eq('school_id', id).order('name'),
        supabase
          .from('v_class_subject_coverage')
          .select('class_id, indicators_total, indicators_taught, indicators_due, indicators_behind, coverage_pct')
          .eq('school_id', id),
      ])
      if (cErr) throw cErr
      if (vErr) throw vErr

      const byClass = new Map<string, { total: number; taught: number; due: number; behind: number }>()
      for (const row of cov ?? []) {
        const acc = byClass.get(row.class_id) ?? { total: 0, taught: 0, due: 0, behind: 0 }
        acc.total += int(row.indicators_total)
        acc.taught += int(row.indicators_taught)
        acc.due += int(row.indicators_due)
        acc.behind += int(row.indicators_behind)
        byClass.set(row.class_id, acc)
      }

      return (classes ?? []).map(c => {
        const a = byClass.get(c.id) ?? { total: 0, taught: 0, due: 0, behind: 0 }
        return {
          id: c.id,
          name: c.name,
          meta: c.level ?? undefined,
          coveragePct: a.total ? Math.round((1000 * a.taught) / a.total) / 10 : null,
          attendancePct: null,
          performancePct: null,
          indicatorsTotal: a.total,
          indicatorsTaught: a.taught,
          indicatorsDue: a.due,
          indicatorsBehind: a.behind,
          students: null,
          childLevel: 'class',
        }
      })
    }

    case 'class': {
      const [{ data: cov, error: vErr }, { data: subs, error: sErr }] = await Promise.all([
        supabase
          .from('v_class_subject_coverage')
          .select('subject_id, indicators_total, indicators_taught, indicators_due, indicators_behind, coverage_pct')
          .eq('class_id', id),
        supabase.from('subjects').select('id, name'),
      ])
      if (vErr) throw vErr
      if (sErr) throw sErr

      const name = new Map((subs ?? []).map(s => [s.id, s.name]))
      return (cov ?? [])
        .map(r => ({
          id: r.subject_id,
          name: name.get(r.subject_id) ?? 'Subject',
          meta:
            int(r.indicators_behind) > 0
              ? `${int(r.indicators_behind)} behind of ${int(r.indicators_due)} due`
              : `${int(r.indicators_taught)} of ${int(r.indicators_total)} taught`,
          coveragePct: num(r.coverage_pct),
          attendancePct: null,
          performancePct: null,
          indicatorsTotal: int(r.indicators_total),
          indicatorsTaught: int(r.indicators_taught),
          indicatorsDue: int(r.indicators_due),
          indicatorsBehind: int(r.indicators_behind),
          students: null,
          // Subjects are the floor of this view. Opening one goes to its
          // uncovered indicators rather than another register.
          childLevel: null,
        }))
        .sort((a, b) => a.name.localeCompare(b.name))
    }
  }
}

// ---------------------------------------------------------------------------
// headline figures for the current unit
// ---------------------------------------------------------------------------

export async function fetchSummary(level: Level, id: string | null): Promise<Summary> {
  const empty: Summary = {
    coveragePct: null,
    attendancePct: null,
    performancePct: null,
    indicatorsBehind: 0,
    students: null,
    schools: null,
  }

  const shape = (r: Record<string, unknown> | null): Summary =>
    r
      ? {
          coveragePct: num(r.coverage_pct),
          attendancePct: num(r.attendance_pct),
          performancePct: num(r.performance_pct),
          indicatorsBehind: int(r.indicators_behind),
          students: num(r.students_enrolled),
          schools: num(r.schools),
        }
      : empty

  switch (level) {
    case 'national': {
      const { data } = await supabase.from('v_national_summary').select('*').maybeSingle()
      return shape(data)
    }
    case 'region': {
      const { data } = await supabase.from('v_region_summary').select('*').eq('region_id', id).maybeSingle()
      return shape(data)
    }
    case 'district': {
      const { data } = await supabase.from('v_district_summary').select('*').eq('district_id', id).maybeSingle()
      return shape(data)
    }
    case 'circuit': {
      const { data } = await supabase.from('v_circuit_summary').select('*').eq('circuit_id', id).maybeSingle()
      return shape(data)
    }
    case 'school': {
      const { data } = await supabase.from('v_school_summary').select('*').eq('school_id', id).maybeSingle()
      return shape(data)
    }
    case 'class':
      // Rolled up from the subject rows the register already fetched, so there
      // is no extra round trip here.
      return empty
  }
}

// ---------------------------------------------------------------------------
// the leaf: what a class is actually behind on
// ---------------------------------------------------------------------------

export interface UncoveredIndicator {
  code: string
  strand: string | null
  text: string
  subject: string
  expectedTerm: number | null
}

export async function fetchUncovered(classId: string, subjectId: string): Promise<UncoveredIndicator[]> {
  const { data, error } = await supabase
    .from('v_uncovered_indicators')
    .select('indicator_code, strand_name, indicator_text, subject_name, expected_term')
    .eq('class_id', classId)
    .eq('subject_id', subjectId)
    .order('indicator_code')
  if (error) throw error
  return (data ?? []).map(r => ({
    code: r.indicator_code,
    strand: r.strand_name,
    text: r.indicator_text,
    subject: r.subject_name,
    expectedTerm: r.expected_term,
  }))
}

/**
 * Where a signed-in user should start.
 *
 * An officer's own scope is their entry point, so a district officer opens
 * straight onto their district rather than a national view they cannot read.
 */
export async function fetchEntryPoint(): Promise<Crumb[]> {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return [{ level: 'national', id: null, label: 'Ghana' }]

  const { data: p } = await supabase
    .from('profiles')
    .select('role, school_id, circuit_id, district_id, region_id')
    .eq('id', user.id)
    .maybeSingle()

  if (!p) return [{ level: 'national', id: null, label: 'Ghana' }]

  const named = async (table: string, col: string, id: string) => {
    const { data } = await supabase.from(table).select('name').eq(col, id).maybeSingle()
    return (data?.name as string) ?? 'Unnamed'
  }

  if (p.role === 'regional_officer' && p.region_id)
    return [{ level: 'region', id: p.region_id, label: await named('regions', 'id', p.region_id) }]

  if (p.role === 'district_officer' && p.district_id)
    return [{ level: 'district', id: p.district_id, label: await named('districts', 'id', p.district_id) }]

  if (p.role === 'circuit_supervisor' && p.circuit_id)
    return [{ level: 'circuit', id: p.circuit_id, label: await named('circuits', 'id', p.circuit_id) }]

  if ((p.role === 'head_teacher' || p.role === 'school_admin' || p.role === 'teacher') && p.school_id)
    return [{ level: 'school', id: p.school_id, label: await named('schools', 'id', p.school_id) }]

  return [{ level: 'national', id: null, label: 'Ghana' }]
}
