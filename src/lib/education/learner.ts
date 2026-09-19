/**
 * Who the learner is, in the terms that change how they are taught.
 *
 * The test applied to every question below is whether the answer alters what
 * the platform actually does. A profile that collects facts nobody acts on is a
 * form, and asking a child to fill in a form before they may learn is a good
 * way to lose them at the door. So there are six questions, each of them wired
 * to a decision, and every one can be skipped.
 */

/** The six stages the platform runs across, matching the front page. */
export type Stage = 'creche' | 'primary' | 'jhs' | 'shs' | 'tvet' | 'uni'

/**
 * The years within each stage.
 *
 * Kept per stage rather than as one long list, because asking a parent of a
 * four year old to scroll past SHS 3 to find Nursery is the kind of small
 * insult that makes people close a page.
 */
export const STAGE_YEARS: Record<Stage, string[]> = {
  creche:  ['Creche', 'Nursery', 'KG 1', 'KG 2'],
  primary: ['Basic 1', 'Basic 2', 'Basic 3', 'Basic 4', 'Basic 5', 'Basic 6'],
  jhs:     ['JHS 1', 'JHS 2', 'JHS 3'],
  shs:     ['SHS 1', 'SHS 2', 'SHS 3'],
  tvet:    ['Level 1', 'Level 2', 'Level 3'],
  uni:     ['Year 1', 'Year 2', 'Year 3', 'Year 4'],
}

/** Stages a small child cannot answer for themselves. */
export const ANSWERED_BY_ADULT: Stage[] = ['creche', 'primary']

export type Goal = 'KEEP_UP' | 'CATCH_UP' | 'EXAM' | 'GO_FURTHER'
export type Approach = 'SHOW_FIRST' | 'TRY_FIRST' | 'IDEA_FIRST'
export type WhenStuck = 'HINT' | 'EASIER' | 'WHOLE_METHOD'
export type Footing = 'SHAKY' | 'OKAY' | 'STRONG'

/**
 * What kind of material to lead with.
 *
 * Not a cosmetic preference. A learner who says video and is served walls of
 * text will stop coming back, and one on a metered connection who says reading
 * should not be handed a video by default. It decides what the platform reaches
 * for first, not what it is allowed to show.
 */
export type Diet = 'READ' | 'WATCH' | 'PRACTISE' | 'MIXED'

/**
 * One set of results the learner brought with them.
 *
 * Modelled as a record per term rather than a pile of files, because that is
 * what an academic history actually is. A learner arriving in SHS 2 may have
 * nine terms of reports behind them, from more than one school, and a list of
 * filenames could never say which was which.
 */
export interface HeldResult {
  id: string
  /** The year it belongs to, e.g. "JHS 2". */
  level: string
  /** Which term, or the word used where terms are not. */
  period: string
  /** Where it was earned. Blank is allowed: not everyone will remember. */
  school: string
  files: { name: string; size: number }[]
  addedAt: string
}

/** The periods a result can belong to. */
export const PERIODS = ['Term 1', 'Term 2', 'Term 3', 'End of year', 'Examination']

export interface LearnerProfile {
  /**
   * The learner's own identity, issued once and kept for life.
   *
   * This is the point of the whole platform's data model: a learner is never
   * owned by a school. Moving from KG to primary, changing town, leaving one
   * school for another, going up to university, none of it issues a new
   * person. The enrolment changes and the identity does not.
   */
  id: string
  name: string
  stage: Stage
  level: string
  /** True when a parent or guardian is setting this up for a child. */
  forChild: boolean
  goal: Goal
  approach: Approach
  whenStuck: WhenStuck
  footing: Footing
  /** What kind of material to lead with. */
  diet: Diet
  /**
   * The course they are offering, where the stage has courses.
   *
   * Senior high is not a list of subjects, it is four core subjects plus the
   * electives of one course. Without this the subject page showed a General
   * Science learner all thirty three subjects, including the eight they will
   * never sit. Null until asked, and null for every stage where the question
   * does not apply. See `programmes.ts`.
   */
  programme: string | null
  /** The subject being studied now. Null until they have chosen one. */
  subjectId: string | null
  /**
   * What the learner told the AI about how to teach them, per subject.
   *
   * Kept per subject rather than once for the learner, because "go over
   * fractions first" is a fact about their Mathematics and says nothing about
   * their English. Free text on purpose: the four dropdowns cover the common
   * cases and this is for the one thing only this learner knows.
   */
  aiNotes: Record<string, string>
  /** Results brought from before, kept on the device until a school verifies them. */
  results: HeldResult[]
  /** So the profile can be re-asked when the questions change. */
  version: number
}

/**
 * A learner identifier, in the form the architecture already commits to.
 *
 * Deliberately not derived from a name, a school or a phone number. Any of
 * those can change, and an identity that changes when your circumstances do is
 * not an identity.
 */
export function newLearnerId(now = new Date()): string {
  const n = Math.floor(1000 + Math.random() * 9000)
  return `EDU-${now.getFullYear()}-${n}`
}

/**
 * Whether this learner gets the youngest interface.
 *
 * Creche plus the first two years of primary, which is the same line the rest
 * of the platform already draws between a learner who can be taught by prose
 * and one who cannot yet read it. Beyond it the reading is the point rather
 * than the obstacle.
 *
 * Shared from here rather than from a screen, because the router, the lesson
 * and the questions all have to agree: a learner who gets the kid home screen
 * and then an adult lesson has been handed the worst of both.
 */
/**
 * Which of the four interfaces this learner gets.
 *
 * | | Who | Why it differs |
 * |---|---|---|
 * | `kid` | creche, KG, Basic 1 to 2 | Cannot read the navigation. Pictures carry the meaning, tabs at the bottom, everything spoken on request |
 * | `teen` | Basic 3 to JHS 3 | Reads. Words carry the meaning again, and a playroom reads as being for younger children |
 * | `scholar` | SHS, TVET, university | As likely to be at a desk as on a phone, so a dashboard rather than a column |
 *
 * One function, so the router, the home screen, the lesson and the questions
 * cannot disagree. A learner given the kid home screen and then an adult
 * lesson has been handed the worst of both, which is exactly what happened
 * before this existed.
 */
export type Skin = 'kid' | 'teen' | 'scholar'

export function skinFor(p: Pick<LearnerProfile, 'stage' | 'level'>): Skin {
  if (isYoung(p)) return 'kid'
  if (p.stage === 'primary' || p.stage === 'jhs') return 'teen'
  return 'scholar'
}

export function isYoung(p: Pick<LearnerProfile, 'stage' | 'level'>): boolean {
  if (p.stage === 'creche') return true
  return p.stage === 'primary' && /basic ?[12]\b|^p ?[12]\b/i.test(p.level)
}

export const PROFILE_VERSION = 6

export const DEFAULT_PROFILE: LearnerProfile = {
  id: '',
  name: '',
  results: [],
  stage: 'jhs',
  level: 'JHS 2',
  forChild: false,
  goal: 'KEEP_UP',
  approach: 'TRY_FIRST',
  whenStuck: 'HINT',
  footing: 'OKAY',
  diet: 'MIXED',
  programme: null,
  subjectId: null,
  aiNotes: {},
  version: PROFILE_VERSION,
}

/**
 * Where a learner starts.
 *
 * Someone who says they are shaky is not served level 3 questions on their
 * first attempt, because failing four in a row on day one teaches them that the
 * platform is not for them. Someone confident is not made to sit through the
 * easiest band either, which is just as quick a way to lose them.
 */
export function startingLevel(p: LearnerProfile): number {
  switch (p.footing) {
    case 'SHAKY': return 1
    case 'STRONG': return 3
    default: return 2
  }
}

/**
 * Whether the explanation comes before the questions.
 *
 * This is the one preference that changes the shape of a topic rather than its
 * difficulty, so it is worth asking about rather than guessing.
 */
export function opensWithTeaching(p: LearnerProfile): boolean {
  return p.approach !== 'TRY_FIRST'
}

/** What a wrong answer should offer, beyond saying what went wrong. */
export function reliefFor(p: LearnerProfile): { label: string; kind: WhenStuck } {
  switch (p.whenStuck) {
    case 'EASIER': return { label: 'Give me an easier one', kind: 'EASIER' }
    case 'WHOLE_METHOD': return { label: 'Show me the whole method', kind: 'WHOLE_METHOD' }
    default: return { label: 'Give me a hint', kind: 'HINT' }
  }
}

/**
 * The one line the learner sees on their own course, in their own terms.
 *
 * Written from the goal because that is what they told us they came for, and a
 * platform that repeats your reason back to you is one that was listening.
 */
export function purposeLine(p: LearnerProfile): string {
  switch (p.goal) {
    case 'CATCH_UP': return 'Catching up on what was missed.'
    case 'EXAM': return 'Working towards the examination.'
    case 'GO_FURTHER': return 'Going past what class has covered.'
    default: return 'Keeping up with class.'
  }
}

/** How the platform greets them, by the clock, using their name if they gave one. */
export function greeting(p: LearnerProfile, now = new Date()): string {
  const h = now.getHours()
  const part = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'
  return p.name.trim() ? `${part}, ${p.name.trim()}` : part
}

/**
 * The same question, worded for whoever is answering.
 *
 * A parent setting this up for a six year old and a university student are
 * both filling in this form, and a single phrasing would be wrong for one of
 * them. `you` becomes `they`, and the subject changes with the stage.
 */
export function voice(p: { forChild: boolean; name: string }) {
  const who = p.forChild ? (p.name.trim() || 'your child') : 'you'
  return {
    who,
    they: p.forChild ? 'they' : 'you',
    their: p.forChild ? 'their' : 'your',
    them: p.forChild ? 'them' : 'you',
  }
}

const STORE = 'nexaedu_profile_v1'

export function loadProfile(): LearnerProfile | null {
  try {
    const raw = localStorage.getItem(STORE)
    if (!raw) return null
    const p = JSON.parse(raw) as LearnerProfile
    return p.version === PROFILE_VERSION ? p : null
  } catch { return null }
}

export function saveProfile(p: LearnerProfile) {
  try { localStorage.setItem(STORE, JSON.stringify(p)) } catch { /* blocked */ }
}

export function clearProfile() {
  try { localStorage.removeItem(STORE) } catch { /* blocked */ }
}

/* ── the questions, as data so the flow is one loop rather than six screens ── */

export interface Choice<T> {
  value: T
  label: string
  note: string
  /**
   * The same answer, worded for an adult answering about a child.
   *
   * Without this the question reads "How does Abena like to be taught?" and the
   * answer reads "Let me try", which is nobody's voice. Only the options that
   * actually change are given one.
   */
  childLabel?: string
}

/** Pick the wording that matches whoever is answering. */
export function labelFor<T>(c: Choice<T>, forChild: boolean): string {
  return forChild && c.childLabel ? c.childLabel : c.label
}

export const GOALS: Choice<Goal>[] = [
  { value: 'KEEP_UP',    label: 'Keep up with class',     note: 'Stay level with what is being taught now.' },
  { value: 'CATCH_UP',   label: 'Catch up on what I missed', childLabel: 'Catch up on what they missed', note: 'Go back and close the gaps first.' },
  { value: 'EXAM',       label: 'Get ready for an exam',  note: 'Work towards the paper, past questions included.' },
  { value: 'GO_FURTHER', label: 'Go further than class',  note: 'Push past what has been covered.' },
]

export const APPROACHES: Choice<Approach>[] = [
  { value: 'SHOW_FIRST', label: 'Show me a worked example first', childLabel: 'Show a worked example first', note: 'See it done, then do it.' },
  { value: 'TRY_FIRST',  label: 'Let me try, then explain',       childLabel: 'Let them try, then explain',  note: 'Attempt it cold, learn from what went wrong.' },
  { value: 'IDEA_FIRST', label: 'Explain the idea properly first', note: 'Understand why before touching a question.' },
]

export const WHEN_STUCK: Choice<WhenStuck>[] = [
  { value: 'HINT',         label: 'A small hint',          note: 'A nudge, so the answer is still yours.' },
  { value: 'EASIER',       label: 'An easier question',    note: 'Build back up from something that works.' },
  { value: 'WHOLE_METHOD', label: 'The whole method again', note: 'Start again from the beginning of the idea.' },
]

export const DIETS: Choice<Diet>[] = [
  { value: 'MIXED',    label: 'A mix',            note: 'Whatever suits the topic.' },
  { value: 'READ',     label: 'Reading',          note: 'Explanations written out in full.' },
  { value: 'WATCH',    label: 'Watching',         note: 'Shown and talked through.' },
  { value: 'PRACTISE', label: 'Straight practice', note: 'Learn it by doing questions.' },
]

export const FOOTINGS: Choice<Footing>[] = [
  { value: 'SHAKY',  label: 'Shaky',  note: 'Start gently.' },
  { value: 'OKAY',   label: 'Alright', note: 'Start in the middle.' },
  { value: 'STRONG', label: 'Strong', note: 'Start with something harder.' },
]

export const LEVELS = ['JHS 1', 'JHS 2', 'JHS 3', 'SHS 1', 'SHS 2', 'SHS 3']

/** A profile good enough to start on, for someone who does not want to answer. */
export function quickProfile(stage: Stage): LearnerProfile {
  return {
    ...DEFAULT_PROFILE,
    id: newLearnerId(),
    stage,
    level: STAGE_YEARS[stage][Math.floor(STAGE_YEARS[stage].length / 2)],
    forChild: ANSWERED_BY_ADULT.includes(stage),
  }
}
