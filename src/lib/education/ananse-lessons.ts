/**
 * The hand built lessons: a video, a check, and a game, per objective.
 *
 * ── Why this registry exists ─────────────────────────────────────────────────
 *
 * A lesson is three things that have to agree with each other: a film that
 * teaches an idea, one or two questions that ask whether it landed, and a game
 * that makes the child do it. If the film counts mangoes and the game counts
 * apples, the handover is a change of subject and the child has to start again.
 *
 * Keeping the three named in one place is what stops that drifting. It is also
 * the only place that knows a lesson exists at all, so the learner screens can
 * ask "is there a film for this topic" without hunting through a folder.
 *
 * ── What is deliberately not here ────────────────────────────────────────────
 *
 * The objects. Those live in `public/ananse/count.js`, which both the video
 * renderer and the game load, so the mango is one drawing in one file. This
 * registry names the mango by topic, not by shape.
 *
 * ── On the video urls ────────────────────────────────────────────────────────
 *
 * Local paths under `public/` today, which works in development and on a
 * deployment, because Vite ships `public/` as static files. That is fine for a
 * handful of one megabyte films and wrong for forty: the renders belong in
 * Supabase Storage, uploaded by the worker that made them, and `video` becomes
 * a signed url. Changing that is changing this field and nothing else, which is
 * why it is a field.
 */

import type { Medium } from './medium'

/** One question asked between the film and the game. */
export interface Check {
  /**
   * Asked aloud as well as shown, because the audience cannot read.
   *
   * Kept to something a four year old can answer by looking at the choices,
   * never by reading the question.
   */
  ask: string
  /** Two or three, never four: a wrong guess should cost something. */
  choices: string[]
  /** Index into `choices`. */
  answer: number
  /** Said when they get it wrong, and it explains rather than scolds. */
  because: string
}

export interface AnanseLesson {
  /** Matches a syllabus objective id, so progress lands where it belongs. */
  objectiveId: string
  title: string
  /** The rendered film. */
  video: string
  /** Roughly, for the screen to say before they commit to watching. */
  seconds: number
  /**
   * The game, as a page under `public/ananse/`.
   *
   * Framed rather than linked. It reports `ready`, `attempt` and `done` over
   * the same protocol the generated games use, so the mastery record is
   * written in one place by one validator.
   */
  game: string
  /** What the game asks them to do, in the words the game itself uses. */
  callToAction: string
  checks: Check[]
}

/**
 * Counting 1 to 10.
 *
 * The only complete one today: the film is rendered and narrated, the game is
 * Feed Ananse, and both draw the same mango from `count.js`.
 *
 * ── The honest gap in it ─────────────────────────────────────────────────────
 *
 * The film teaches one to ten. Feed Ananse asks for two to five, because it
 * was built to five before the film existed. So a child is taught more than
 * they are then asked, which is the safe direction to be wrong in, but it is
 * still wrong. The fix is a counting game that goes to ten, which does not
 * exist yet.
 */
const COUNT_TO_TEN: AnanseLesson = {
  objectiveId: 'count-to-ten',
  title: 'Counting 1 to 10',
  video: '/ananse/video/count-1-to-10.mp4',
  seconds: 60,
  game: '/ananse/mangoes.html',
  callToAction: 'Count the mangoes and feed Ananse',
  checks: [
    {
      /* Deliberately the group they were shown last and counted twice, so a
         child who watched can answer it and a child who did not cannot. */
      ask: 'How many mangoes did we count?',
      choices: ['5', '10', '3'],
      answer: 1,
      because: 'We counted all the way to ten.',
    },
    {
      ask: 'Which number comes after four?',
      choices: ['3', '5', '10'],
      answer: 1,
      because: 'Four, then five. Five comes next.',
    },
  ],
}

const ALL: AnanseLesson[] = [COUNT_TO_TEN]

/** The lesson for an objective, if one has been built. */
export function lessonFor(objectiveId: string): AnanseLesson | null {
  return ALL.find(l => l.objectiveId === objectiveId) ?? null
}

/** Every objective that has a film, for a screen that wants to offer them. */
export function withLessons(): string[] {
  return ALL.map(l => l.objectiveId)
}

/**
 * Which medium each stage of a lesson counts as.
 *
 * ── Why this matters more than it looks ──────────────────────────────────────
 *
 * `mastery.ts` records a `via` on every attempt, and the comment there is
 * blunt about why: without it the platform can say a learner is shaky on
 * counting and cannot say they are shaky when they read it and secure when
 * they watch it.
 *
 * One pass through a lesson produces an attempt in three different media
 * against the same objective. That makes this the most informative single
 * thing a child can do in the product, and it is a by-product of the shape of
 * the lesson rather than something extra anybody has to do.
 */
export const STAGE_MEDIUM: Record<'watch' | 'check' | 'play', Medium> = {
  watch: 'video',
  check: 'questions',
  play: 'game',
}
