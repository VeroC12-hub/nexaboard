/**
 * The browser's side of the AI.
 *
 * Four things are asked of it, and they all travel the same way:
 *
 *   explain / hint / method   the tutor, on a question just answered
 *   lesson                    teach a topic from the syllabus
 *   questions                 practice questions for a topic
 *   observe                   one line about how this learner works
 *
 * There are two routes, tried in the order that costs nothing:
 *
 *   1. /api/tutor   the Anthropic API, if the deployment has a key. Streams.
 *   2. /api/queue   a job for a machine you own that is signed into Claude
 *                   Code, which answers on your own subscription. No key, and
 *                   nothing billed per token.
 *
 * The second is the one that normally runs. It costs a wait of a few seconds
 * rather than text appearing as it is written, so the waiting is said out loud
 * on screen rather than hidden behind a spinner.
 *
 * No key ever comes here, on either route.
 *
 * The rule both routes keep is that the AI is an addition and never a
 * dependency. Where a written course exists it is used and this file is not
 * needed at all; where one does not, a failure here ends with the syllabus
 * still on screen and a plain sentence saying the tutor is unavailable.
 */

import type { LearnerProfile } from './learner'
import type { Question } from './course'

/** What is being asked for. */
export type TutorTask =
  | 'explain' | 'hint' | 'method'
  | 'lesson' | 'questions'
  | 'figure' | 'illustration' | 'clip' | 'storyboard'
  | 'observe'
  /** The only task that decides the form of teaching rather than its content. */
  | 'plan'

/** Raised when no route is configured, so the UI can say that specifically. */
export class TutorOff extends Error {}

/** How the answer is arriving, so the page can say something true while it waits. */
export type TutorStage = 'sent' | 'queued' | 'writing'

/** How long to wait for a queued job before giving up on the worker. */
const QUEUE_DEADLINE_MS = 4 * 60 * 1000
const POLL_MS = 1200

/**
 * Where a topic sits in its subject, as the prompt needs it.
 *
 * Built by the caller from `syllabus.ts`, because the syllabus is in the bundle
 * and sending the few lines that matter is cheaper and clearer than teaching
 * the server about subjects.
 */
export interface SyllabusPlace {
  strand?: string
  subStrand?: string
  topic: string
  outcome?: string
  /** Outcomes of the topics this one stands on. */
  builds?: string[]
  year?: string
  source?: string
  /** Which of the five video styles a storyboard should be written in. */
  style?: string
}

/** What the AI is told about the learner. Narrow on purpose: see `brief`. */
export interface LearnerBrief {
  subjectId: string
  subjectName: string
  profile: LearnerProfile
  /** Titles of objectives or topics they keep getting wrong. */
  stuckOn?: string[]
  /** Observations accumulated by `adapt.ts`. */
  learned?: string[]
  /** The one computed line about how they are going. */
  pace?: string | null
  /**
   * What the learner has asked for, as sentences, from `ask.ts`.
   *
   * Outranks everything else in the brief, and the prompt says so, because it
   * came from her rather than from watching her.
   */
  asked?: string
  /** How she has done in each kind of material, from `medium.ts`. */
  mediums?: string
}

export interface TutorHandlers {
  /** Called with each piece of text as it arrives. */
  onText: (chunk: string) => void
  /** Called when the way the answer is coming changes, for honest waiting copy. */
  onStage?: (stage: TutorStage) => void
}

/**
 * The slice of the profile the AI is allowed to see.
 *
 * Deliberately narrow. It needs the year, the preferences, the note the learner
 * wrote about this subject, and what has been noticed since. It does not need
 * their id, their account, their other subjects, or their uploaded results, so
 * none of that leaves the browser.
 */
function brief(l: LearnerBrief) {
  return {
    name: l.profile.name.trim().split(' ')[0] || '',
    level: l.profile.level,
    goal: l.profile.goal,
    approach: l.profile.approach,
    diet: l.profile.diet,
    footing: l.profile.footing,
    whenStuck: l.profile.whenStuck,
    note: l.profile.aiNotes[l.subjectId] ?? '',
    stuckOn: l.stuckOn ?? [],
    learned: l.learned ?? [],
    pace: l.pace ?? null,
    /* What she asked for, in her own words, and how she has done in each kind
       of material. Both are sentences rather than numbers, and both are new:
       the tutor used to be told what a learner got wrong and never how they
       learn. Still no id, no account and no other subject. */
    asked: l.asked ?? '',
    mediums: l.mediums ?? '',
  }
}

/** Everything one request carries. Only `task` and the learner are always present. */
interface Job {
  task: TutorTask
  learner: LearnerBrief
  syllabus?: SyllabusPlace
  /* explain, hint, method */
  question?: string
  answer?: string
  given?: string
  /* lesson */
  askedFor?: string
  /* questions */
  count?: number
  level?: number
  avoid?: string[]
  /* observe */
  topic?: string
  round?: RoundEntry[]
  /* figure, illustration, clip, storyboard */
  lesson?: string
  /** Which of the five video styles a storyboard should follow. */
  style?: string
}

/** One answered question, as the observer is shown it. */
export interface RoundEntry {
  ask: string
  answer: string
  given: string
  correct: boolean
  hinted: boolean
}

const payload = (j: Job) => JSON.stringify({
  task: j.task,
  subjectId: j.learner.subjectId,
  subjectName: j.learner.subjectName,
  learner: brief(j.learner),
  syllabus: j.syllabus ?? null,
  question: j.question ?? '',
  answer: j.answer ?? '',
  given: j.given ?? '',
  topic: j.topic ?? j.syllabus?.topic ?? '',
  askedFor: j.askedFor ?? '',
  lesson: j.lesson ?? '',
  style: j.style ?? j.syllabus?.style ?? '',
  count: j.count,
  level: j.level,
  avoid: j.avoid ?? [],
  round: j.round ?? [],
})

const wait = (ms: number) => new Promise(res => setTimeout(res, ms))

async function errorFrom(res: Response, fallback: string): Promise<string> {
  const said = await res.json().catch(() => null)
  return said && typeof said.error === 'string' ? said.error : fallback
}

/* ── the transport ────────────────────────────────────────────────────────── */

async function run(j: Job, handlers: TutorHandlers, signal?: AbortSignal): Promise<void> {
  const direct = await askDirect(j, handlers, signal)
  if (direct) return
  await askQueue(j, handlers, signal)
}

/** Collect a whole answer, for the callers that cannot use it in pieces. */
async function runToEnd(j: Job, signal?: AbortSignal, onStage?: (s: TutorStage) => void) {
  let text = ''
  await run(j, { onText: chunk => { text += chunk }, onStage }, signal)
  return text
}

/**
 * The paid route: the Anthropic API, through /api/tutor.
 *
 * Returns false when this deployment has no key, which is the normal case and
 * not a failure. A real failure throws, because falling through to the queue
 * after a genuine error would double the wait for the same bad request.
 */
async function askDirect(
  j: Job,
  { onText, onStage }: TutorHandlers,
  signal?: AbortSignal,
): Promise<boolean> {
  let res: Response
  try {
    res = await fetch('/api/tutor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal,
      body: payload(j),
    })
  } catch (e) {
    if (signal?.aborted) throw e
    /* The endpoint is not there at all. Let the queue have its turn. */
    return false
  }

  /* 404: the function is absent, which is what a bare dev server looks like.
     501: deployed but no key, which is the ordinary case. Both mean "try the
     other route", not "something went wrong". */
  if (res.status === 404 || res.status === 501) return false

  if (!res.ok) throw new Error(await errorFrom(res, 'The tutor could not be reached.'))

  /* A 200 carrying index.html, which is what a catch-all rewrite in front of a
     missing function produces. Streaming a web page into a lesson would be
     worse than saying nothing. */
  const type = res.headers.get('Content-Type') ?? ''
  if (!type.includes('text/plain')) return false

  onStage?.('writing')

  if (!res.body) {
    onText(await res.text())
    return true
  }

  const reader = res.body.getReader()
  const decode = new TextDecoder()
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    /* stream: true so a multi-byte character split across two chunks is held
       until its remaining bytes arrive, instead of arriving as a question mark. */
    onText(decode.decode(value, { stream: true }))
  }
  const tail = decode.decode()
  if (tail) onText(tail)
  return true
}

/**
 * The free route: a job for the machine you own.
 *
 * Submit, then poll. The worker posts the answer in parts while it is still
 * running, so only what is new since the last look is handed on.
 */
async function askQueue(
  j: Job,
  { onText, onStage }: TutorHandlers,
  signal?: AbortSignal,
): Promise<void> {
  onStage?.('sent')

  const res = await fetch('/api/queue', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal,
    body: payload(j),
  })

  if (res.status === 404 || res.status === 501) {
    throw new TutorOff(await errorFrom(res,
      'No tutor is set up for this deployment.'))
  }
  if (!res.ok) throw new Error(await errorFrom(res, 'The tutor could not be reached.'))

  const { id } = await res.json() as { id?: string }
  if (!id) throw new Error('The tutor did not take the request.')

  onStage?.('queued')

  const until = Date.now() + QUEUE_DEADLINE_MS
  let sent = 0

  for (;;) {
    if (signal?.aborted) return
    await wait(POLL_MS)
    if (signal?.aborted) return

    const look = await fetch(`/api/queue?id=${encodeURIComponent(id)}`, { signal })
    if (!look.ok) throw new Error(await errorFrom(look, 'The tutor stopped answering.'))

    const job = await look.json() as { status?: string, answer?: string | null }
    const answer = job.answer ?? ''

    if (answer.length > sent) {
      onStage?.('writing')
      onText(answer.slice(sent))
      sent = answer.length
    }

    if (job.status === 'done') return
    if (job.status === 'error') {
      /* The worker writes a sentence for the learner into the answer itself.
         Anything already shown stays, so this only speaks when nothing was. */
      if (sent > 0) return
      throw new Error(answer || 'The tutor could not answer just now.')
    }

    if (Date.now() > until) {
      if (sent > 0) return
      throw new Error('The tutor is not answering. It may be switched off at the moment.')
    }
  }
}

/* ── what the app actually calls ──────────────────────────────────────────── */

/** The tutor, on a question the learner has just answered. */
export function askTutor(
  r: {
    task: 'explain' | 'hint' | 'method'
    question: string
    answer?: string
    given?: string
    learner: LearnerBrief
    syllabus?: SyllabusPlace
  },
  handlers: TutorHandlers,
  signal?: AbortSignal,
): Promise<void> {
  return run({ ...r }, handlers, signal)
}

/** Teach a topic from the syllabus. Streams, because a lesson is long. */
export function askLesson(
  r: { learner: LearnerBrief, syllabus: SyllabusPlace, askedFor?: string },
  handlers: TutorHandlers,
  signal?: AbortSignal,
): Promise<void> {
  return run({ task: 'lesson', ...r }, handlers, signal)
}

/**
 * Practice questions for a topic.
 *
 * Returns whole questions or throws. A half parsed question is worse than no
 * question: a learner would be marked wrong against an answer that was never
 * there, so anything that does not survive `readQuestions` is discarded.
 */
export async function askQuestions(
  r: {
    learner: LearnerBrief
    syllabus: SyllabusPlace
    count?: number
    level?: number
    avoid?: string[]
  },
  signal?: AbortSignal,
  onStage?: (s: TutorStage) => void,
): Promise<Question[]> {
  const text = await runToEnd({ task: 'questions', ...r }, signal, onStage)
  const questions = readQuestions(text, r.syllabus.topic)
  if (!questions.length) throw new Error('No usable questions came back. Try again.')
  return questions
}

/**
 * Ask for a visual brief.
 *
 * Returns the raw reply rather than a parsed object, because the three kinds
 * come back in different shapes: a figure is an SVG, the other two are JSON,
 * and any of them may be the model declining. `visuals.ts` reads it, so the
 * knowledge of those shapes stays in one place.
 */
export async function askVisual(
  r: {
    task: 'figure' | 'illustration' | 'clip' | 'storyboard'
    learner: LearnerBrief
    syllabus: SyllabusPlace
    lesson?: string
    askedFor?: string
  },
  signal?: AbortSignal,
): Promise<string> {
  return runToEnd({ ...r }, signal)
}

/**
 * Ask how this learner should be taught.
 *
 * The only call in this file whose answer changes the shape of a session
 * rather than its contents. Returns the raw JSON text for `plan.ts` to read
 * and sanitise, because deciding what is acceptable in a plan is a decision
 * about teaching and belongs next to the type it produces, not here.
 *
 * Short, so it is quick even on the free route, and asked for in the
 * background rather than while a learner waits to be taught.
 */
export async function askPlan(
  r: { learner: LearnerBrief, syllabus?: SyllabusPlace },
  signal?: AbortSignal,
): Promise<string> {
  return runToEnd({ task: 'plan', ...r }, signal)
}

/**
 * Ask for a lesson video.
 *
 * Two stages happen behind this one call: the model writes a storyboard, and
 * then the worker machine renders it, because rendering needs a headless
 * browser and ffmpeg. So this takes minutes rather than seconds, and what
 * comes back is the url of a finished file.
 *
 * Returns null when no video could be made, which includes the ordinary case
 * of no worker being available. A lesson without a video is a lesson.
 */
export async function askVideo(
  r: {
    learner: LearnerBrief
    syllabus: SyllabusPlace
    lesson?: string
  },
  signal?: AbortSignal,
  onStage?: (s: TutorStage) => void,
): Promise<{ url: string, scenes: number, narrated: number } | null> {
  const text = await runToEnd(
    { task: 'storyboard', ...r, style: r.syllabus.style },
    signal,
    onStage,
  )
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  if (start === -1 || end <= start) return null
  try {
    const said = JSON.parse(text.slice(start, end + 1)) as {
      video?: string
      scenes?: number
      narrated?: number
      error?: string
    }
    if (!said.video) {
      if (said.error) console.info('[video] ' + said.error)
      return null
    }
    return {
      url: said.video,
      scenes: Number(said.scenes) || 0,
      narrated: Number(said.narrated) || 0,
    }
  } catch {
    return null
  }
}

/**
 * Ask what was learned about this learner from a round of work.
 *
 * Returns the note, or empty when there was nothing worth recording. Never
 * throws: an observation is a nice to have, and a learner who has just finished
 * a round should not be shown an error because the bookkeeping failed.
 */
export async function observeRound(
  r: { learner: LearnerBrief, syllabus: SyllabusPlace, round: RoundEntry[] },
  signal?: AbortSignal,
): Promise<string> {
  try {
    const text = await runToEnd({ task: 'observe', ...r }, signal)
    const tidy = text.trim()
    return /^nothing new\.?$/i.test(tidy) ? '' : tidy
  } catch {
    return ''
  }
}

/* ── reading questions back ───────────────────────────────────────────────── */

/**
 * Pull questions out of whatever came back.
 *
 * The model is told to reply with one JSON object and nothing else, and mostly
 * does. This handles the rest: a code fence around it, a sentence before it, a
 * trailing comma. Anything still unreadable yields nothing rather than a
 * half question, for the reason given on `askQuestions`.
 */
export function readQuestions(text: string, topicId: string): Question[] {
  const raw = extractJson(text)
  if (!raw) return []

  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    return []
  }

  const list = (parsed as { questions?: unknown })?.questions
  if (!Array.isArray(list)) return []

  const out: Question[] = []
  list.forEach((row, i) => {
    if (!row || typeof row !== 'object') return
    const q = row as Record<string, unknown>
    const ask = typeof q.ask === 'string' ? q.ask.trim() : ''
    const answer = typeof q.answer === 'string' ? q.answer.trim()
      : typeof q.answer === 'number' ? String(q.answer) : ''
    if (!ask || !answer) return

    const kind = q.kind === 'choice' ? 'choice' : 'numeric'
    const options = Array.isArray(q.options)
      ? q.options.filter((o): o is string => typeof o === 'string' && !!o.trim())
      : []
    /* A multiple choice question whose answer is not among the options cannot
       be answered correctly, so it is served as a written one instead. */
    const choice = kind === 'choice' && options.length >= 2 && options.includes(answer)

    const level = Number(q.level)
    out.push({
      id: `${topicId}-ai-${i + 1}`,
      ask,
      kind: choice ? 'choice' : 'numeric',
      ...(choice ? { options } : {}),
      answer,
      accept: Array.isArray(q.accept)
        ? q.accept.filter((a): a is string => typeof a === 'string' && !!a.trim())
        : [],
      teach: typeof q.teach === 'string' && q.teach.trim()
        ? q.teach.trim()
        : 'Work back through the method and check each step against the question.',
      level: Number.isFinite(level) ? Math.min(5, Math.max(1, Math.round(level))) : 3,
    })
  })
  return out
}

/** The outermost {...} in a string, fence or prose around it notwithstanding. */
function extractJson(text: string): string | null {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i)
  const body = fenced ? fenced[1] : text
  const start = body.indexOf('{')
  const end = body.lastIndexOf('}')
  if (start === -1 || end <= start) return null
  return body.slice(start, end + 1)
}
