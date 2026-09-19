/**
 * Sample content for the Phase 2 front end.
 *
 * Everything the school platform shows lives here, in one file, so that
 * swapping to live Supabase queries later is a change of source rather than a
 * rewrite of every screen. Each export matches the shape the real query will
 * return.
 *
 * All figures are invented. They are plausible for Ghana, not sourced.
 */

export interface Unit {
  id: string
  name: string
  meta: string
  /** How far through the syllabus, 0 to 100. */
  pct: number
}

export interface Series {
  name: string
  hex: string
  values: number[]
}

/** One thread per district in the kente band. */
export const DISTRICT_THREADS: number[] = (() => {
  const out: number[] = []
  let seed = 7
  for (let i = 0; i < 261; i++) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    out.push(28 + (seed % 60))
  }
  return out
})()

export const REGIONS: Unit[] = [
  { id: 'gar', name: 'Greater Accra', meta: '4,118 schools', pct: 70 },
  { id: 'ash', name: 'Ashanti',       meta: '6,482 schools', pct: 64 },
  { id: 'eas', name: 'Eastern',       meta: '4,406 schools', pct: 63 },
  { id: 'bon', name: 'Bono',          meta: '1,733 schools', pct: 61 },
  { id: 'cen', name: 'Central',       meta: '3,297 schools', pct: 60 },
  { id: 'wes', name: 'Western',       meta: '2,510 schools', pct: 58 },
  { id: 'vol', name: 'Volta',         meta: '2,884 schools', pct: 57 },
  { id: 'uea', name: 'Upper East',    meta: '1,542 schools', pct: 52 },
  { id: 'uwe', name: 'Upper West',    meta: '1,188 schools', pct: 50 },
  { id: 'nor', name: 'Northern',      meta: '2,206 schools', pct: 49 },
]

export const DISTRICTS: Unit[] = [
  { id: 'tam', name: 'Tamale Metropolitan', meta: '214 schools', pct: 58 },
  { id: 'sav', name: 'Savelugu Municipal',  meta: '161 schools', pct: 51 },
  { id: 'kum', name: 'Kumbungu',            meta: '96 schools',  pct: 47 },
  { id: 'kar', name: 'Karaga',              meta: '118 schools', pct: 42 },
  { id: 'gus', name: 'Gushegu Municipal',   meta: '134 schools', pct: 40 },
  { id: 'nan', name: 'Nanton',              meta: '88 schools',  pct: 38 },
]

export const SCHOOLS: Unit[] = [
  { id: 's1', name: 'Karaga Islamic Basic School', meta: '331 learners', pct: 67 },
  { id: 's2', name: 'Karaga M/A Basic School',     meta: '412 learners', pct: 38 },
  { id: 's3', name: 'Nyoglo D/A Junior High',      meta: '194 learners · 2 vacancies', pct: 29 },
  { id: 's4', name: 'Pishigu D/A Basic School',    meta: '286 learners · no maths teacher', pct: 22 },
]

/**
 * Series colours come from the validated light-surface set
 * (#4a9e26 #2f5aa8 #c2701a #a3378f). Navy is deliberately absent: at L 0.29 it
 * reads as grey in a chart and fails the chroma floor.
 */
export const COVERAGE_SERIES: Series[] = [
  { name: 'Greater Accra', hex: '#2f5aa8', values: [9, 18, 27, 36, 44, 51, 57, 62, 66, 69, 70, 70] },
  { name: 'National',      hex: '#4a9e26', values: [8, 16, 24, 31, 38, 44, 49, 53, 57, 59, 61, 61] },
  { name: 'Northern',      hex: '#c2701a', values: [6, 12, 18, 23, 28, 33, 37, 41, 44, 46, 48, 49] },
]

export const SUBJECT_MARKS: Unit[] = [
  { id: 'emaths', name: 'Elective Mathematics', meta: 'Strong on algebra and coordinate geometry', pct: 81 },
  { id: 'phys',   name: 'Physics',              meta: 'Steady all term', pct: 74 },
  { id: 'cmaths', name: 'Core Mathematics',     meta: 'Steady', pct: 70 },
  { id: 'chem',   name: 'Chemistry',            meta: 'Losing marks on mole calculations', pct: 54 },
]

export const TEACHER_CLASSES: Unit[] = [
  { id: 'c1', name: 'SHS 2 Science A', meta: 'Elective Maths · 41 students', pct: 78 },
  { id: 'c2', name: 'SHS 1 Gold',      meta: 'Core Maths · 41 students',     pct: 81 },
  { id: 'c3', name: 'SHS 1 Silver',    meta: 'Core Maths · 28 students',     pct: 74 },
  { id: 'c4', name: 'SHS 3 Science B', meta: 'Elective Maths · 38 students', pct: 52 },
]

export const STUDENT_LESSONS: Unit[] = [
  { id: 'l1', name: 'Equation of a circle',      meta: 'Elective Maths · today · Mrs Adjei', pct: 100 },
  { id: 'l2', name: 'The straight line',          meta: 'Elective Maths · last Thursday',     pct: 100 },
  { id: 'l3', name: 'Waves and sound',            meta: 'Physics · Tuesday',                  pct: 100 },
  { id: 'l4', name: 'Rates of reaction',          meta: 'Chemistry · Monday',                 pct: 100 },
  { id: 'l5', name: "Newton's laws of motion",    meta: 'Physics · 24 July',                  pct: 100 },
]

export interface Marking {
  name: string
  meta: string
  score?: string
  tone: 'good' | 'warn' | 'crit' | 'flat'
}

export const MARKING: Marking[] = [
  { name: 'Ama Mensah',    meta: 'Handed in yesterday · answered on the board', tone: 'flat' },
  { name: 'Yaw Boateng',   meta: 'Handed in yesterday · photo',                 tone: 'flat' },
  { name: 'Efua Danso',    meta: 'Handed in today · answered on the board',     tone: 'flat' },
  { name: 'Kojo Antwi',    meta: 'Full working shown', score: '18 / 20',        tone: 'good' },
  { name: 'Abena Sarpong', meta: 'Lost marks completing the square', score: '11 / 20', tone: 'crit' },
]

export const CPD_COURSES: Unit[] = [
  { id: 'p1', name: 'Teaching coordinate geometry',    meta: '6 points · 4 hours · matches your subject', pct: 0 },
  { id: 'p2', name: 'Helping learners who fall behind', meta: '8 points · 6 hours', pct: 0 },
  { id: 'p3', name: 'Assessment without over-testing',  meta: '6 points · 4 hours', pct: 0 },
]

export interface TutorTurn { who: 'me' | 'ai'; text: string }

export const TUTOR: TutorTurn[] = [
  { who: 'me', text: "Explain Newton's second law" },
  { who: 'ai', text: 'The bigger the force on something, the faster its speed changes. And the heavier it is, the harder it is to change. Written down: force = mass × acceleration.' },
  { who: 'me', text: "I don't understand" },
  { who: 'ai', text: 'Think about pushing a trolley at Melcom. An empty one shoots off with a small push. Load it with cement and the same push barely moves it. Same push, more mass, less acceleration.' },
  { who: 'me', text: 'Give me a question' },
  { who: 'ai', text: 'A 3 kg block is pushed with a force of 12 N. What is its acceleration?' },
  { who: 'me', text: '4' },
  { who: 'ai', text: 'Correct, 12 ÷ 3 = 4 m/s². You had this wrong in the June test, so that is real progress.' },
]

export interface Stage {
  title: string
  when: string
  pill?: { text: string; tone: 'good' | 'flat' }
  future?: boolean
}

export const PASSPORT_STAGES: Stage[] = [
  { title: 'Kindergarten',   when: '2018 to 2019 · Christ the King, Accra' },
  { title: 'Primary 1 to 6', when: '2019 to 2025 · Christ the King, Accra' },
  { title: 'Junior High',    when: '2025 to 2028 · Achimota Basic', pill: { text: 'BECE aggregate 09', tone: 'flat' } },
  { title: 'Senior High',    when: "2028 to 2031 · Wesley Girls', General Science", pill: { text: 'now', tone: 'good' } },
  { title: 'University or TVET',           when: 'ahead', future: true },
  { title: 'Work and lifelong learning',   when: 'ahead', future: true },
]
