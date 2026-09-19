/**
 * What this learner gets, decided for this learner.
 *
 * ── What this replaces ──────────────────────────────────────────────────────
 *
 * `standingFor` in `heavy.ts` decided the shape of a session by stage: every
 * creche learner got a game first with the prose demoted to a note for the
 * adult, every Basic 3 learner got a lesson with a game offered underneath.
 *
 * That is a rule about five year olds, not a judgement about a particular five
 * year old. It meant every learner of an age met the same shaped session
 * however differently they learn, and the AI only ever chose the content that
 * went inside boxes somebody else had already drawn.
 *
 * This module draws the boxes instead, per learner, from what she has asked for
 * and how she has actually done. It is allowed to return one medium and nothing
 * else: video only, with no words at all, for a learner whose record shows she
 * answers after watching and falls apart when reading. That outcome is the
 * point of the module rather than an edge case in it.
 *
 * ── What it reads, in order of weight ───────────────────────────────────────
 *
 * 1. **What she asked for** (`ask.ts`). She selected a word and asked to be
 *    shown it instead of told it. Nothing else here is as direct, so nothing
 *    else outranks it.
 * 2. **How she did in each medium** (`medium.ts`). Slower and indirect, but it
 *    catches what she would not think to say.
 * 3. **What she said at the start** (`profile.diet`). Only until there is
 *    anything better, which is the first session or two.
 *
 * Her stage appears nowhere in the ordering. It affects how many parts a
 * sitting holds, because attention is genuinely shorter at four than at
 * fourteen, and nothing else.
 *
 * ── Why a plan is cached rather than awaited ────────────────────────────────
 *
 * A model-written plan is small but the free queue is still tens of seconds,
 * and a learner opening a topic cannot wait for permission to be taught. So
 * the local plan below is produced instantly from the same evidence, the model
 * is asked in the background, and its answer is kept for next time. Her diet
 * is a fact about her rather than about a topic, so a plan is per learner and
 * per subject and stays useful across topics.
 */

import { asksFor, askSignals, wantedMedium, type Ask } from './ask'
import {
  DECISIVE, MEDIUMS, NEEDS_READING, allEvidence, spread, untried, working,
  type Medium, type MediumEvidence,
} from './medium'
import type { Attempt } from './mastery'
import type { LearnerProfile } from './learner'

/** The mediums a session can actually be built from today. */
export const RENDERABLE: Medium[] = ['prose', 'video', 'picture', 'game', 'questions']

export interface Part {
  medium: Medium
  /** Why this is here, in a clause a parent could read. */
  why: string
}

export interface Plan {
  /** In order. May be a single part, and that single part may not be prose. */
  parts: Part[]
  /** Left out on purpose, which is different from left out by accident. */
  without: Medium[]
  /** One sentence for whoever is sitting with her. */
  because: string
  /**
   * Whether written words can be relied on at all.
   *
   * True means the session must work with the sound off and nothing read: the
   * prose is still there for the adult, but it is not the way the topic is
   * taught. This is the flag that makes "video only, no words" real rather
   * than merely ordered differently.
   */
  wordless: boolean
  source: 'model' | 'evidence' | 'stated'
  /** When it was worked out, so a stale one can be refreshed. */
  at: string
}

/* ── how many parts a sitting holds ───────────────────────────────────────── */

/**
 * Attention, not ability.
 *
 * The only place a learner's age is allowed to influence anything here. A four
 * year old will not sit through four parts and a sixth former will not learn
 * anything from one, and neither fact says anything about which medium suits
 * whom.
 */
function partsAllowed(profile: LearnerProfile): number {
  if (profile.stage === 'creche') return 2
  if (profile.stage === 'primary') return /basic ?[12]\b/i.test(profile.level) ? 2 : 3
  return 3
}

/* ── the local plan ───────────────────────────────────────────────────────── */

const WHY: Record<Medium, string> = {
  prose: 'reading it',
  video: 'watching it',
  picture: 'seeing it drawn',
  game: 'doing it',
  questions: 'answering questions on it',
  talk: 'talking it through',
}

/** What she said she wanted, before anything is known about what works. */
function fromStated(profile: LearnerProfile): Medium[] {
  switch (profile.diet) {
    case 'READ': return ['prose', 'questions']
    case 'WATCH': return ['video', 'picture']
    case 'PRACTISE': return ['game', 'questions']
    default:
      /* MIXED is not a preference, it is the absence of one. So the first
         sittings deliberately sample across mediums, which is the fastest
         honest way to find out, and asking is available from the first
         screen either way. */
      return ['video', 'prose', 'game']
  }
}

/**
 * Work out a plan from the evidence, with no model involved.
 *
 * Instant, free, offline, and the floor under everything: a learner whose
 * connection is dead still gets a session shaped for her rather than a session
 * shaped for her year.
 */
export function localPlan({
  profile, attempts, asks,
}: {
  profile: LearnerProfile
  attempts: Attempt[]
  asks: Ask[]
}): Plan {
  const room = partsAllowed(profile)
  const evidence = allEvidence(attempts)
  const judged = working(attempts)
  const gap = spread(attempts)
  const byMedium = new Map(evidence.map(e => [e.medium, e]))

  const readingIsBad = (): boolean => {
    const rows = ['prose', 'questions']
      .map(m => byMedium.get(m as Medium))
      .filter((e): e is MediumEvidence => !!e && e.accuracy !== null)
    if (!rows.length) return false
    const best = Math.max(...rows.map(e => e.accuracy ?? 0))
    return best < 0.45
  }

  /* 1. What she has asked for, which outranks everything else here. */
  const asked = wantedMedium(asks)

  /* 2. What is working, when enough is known to say. */
  let chosen: Medium[] = []
  let source: Plan['source'] = 'stated'

  if (judged.length && gap !== null && gap >= DECISIVE) {
    /* A real difference. Narrow to what works, which is allowed to mean one
       thing and nothing else. */
    const best = judged[0].accuracy ?? 0
    chosen = judged
      .filter(e => (e.accuracy ?? 0) >= best - 0.08)
      .map(e => e.medium)
      .filter(m => RENDERABLE.includes(m))
    source = 'evidence'
  } else if (judged.length) {
    /* Nothing decisive. Stay broad: narrowing on noise would be the old
       predetermination with a new justification. */
    chosen = judged
      .filter(e => (e.accuracy ?? 0) >= 0.4)
      .map(e => e.medium)
      .filter(m => RENDERABLE.includes(m))
    source = 'evidence'
  }

  if (!chosen.length) {
    chosen = fromStated(profile).filter(m => RENDERABLE.includes(m))
    source = 'stated'
  }

  /* Her own request leads, wherever it came in the ranking. */
  if (asked && RENDERABLE.includes(asked)) {
    chosen = [asked, ...chosen.filter(m => m !== asked)]
    source = 'evidence'
  }

  /**
   * One untried medium, when there is room and nothing is known about it.
   *
   * Not a hedge. A plan that only ever uses what already works stops
   * collecting evidence about everything else, so the record freezes and a
   * learner whose reading starts working six months from now can never be
   * found out. Including one untried thing is what keeps the conclusion
   * correctable, and it is the same reasoning as the floor in `medium.ts`.
   */
  const never = untried(attempts).filter(m => RENDERABLE.includes(m) && !chosen.includes(m))
  if (never.length && chosen.length < room) chosen = [...chosen, never[0]]

  const parts = chosen.slice(0, room).map(m => ({ medium: m, why: WHY[m] }))
  const kept = new Set(parts.map(p => p.medium))
  const without = RENDERABLE.filter(m => !kept.has(m))

  /* Words are not to be relied on when reading is going badly and something
     that does not need reading is going better. */
  const leadNeedsReading = parts.length ? NEEDS_READING[parts[0].medium] : true
  const wordless = readingIsBad() && !leadNeedsReading

  const s = askSignals(asks)
  const because = parts.length === 1
    ? `Only ${WHY[parts[0].medium]}, because that is what has been working for her.`
    : source === 'stated'
      ? `Trying ${parts.map(p => WHY[p.medium]).join(', then ')},`
        + ' because nothing is known yet about what suits her.'
      : `Mostly ${WHY[parts[0].medium]}`
        + (parts.length > 1 ? `, then ${parts.slice(1).map(p => WHY[p.medium]).join(', ')}` : '')
        + (s.total ? ', from what she has asked for and how she has been doing.' : '.')

  return {
    parts,
    without,
    because,
    wordless,
    source,
    at: new Date().toISOString(),
  }
}

/* ── accepting a plan the model wrote ─────────────────────────────────────── */

const isMedium = (v: unknown): v is Medium =>
  typeof v === 'string' && (MEDIUMS as string[]).includes(v)

/**
 * Read a plan from the model, refusing anything that could not be taught.
 *
 * Strict on shape, generous on intent. The model is allowed to do the drastic
 * thing this module exists for, so there is deliberately **no floor** here
 * requiring prose, or a game, or a minimum number of parts. What is refused is
 * only what cannot be rendered or cannot be understood.
 *
 * One thing is not taken from the reply: how many parts a sitting holds. That
 * comes from the learner's attention, and a model enthusiastic about its own
 * plan would otherwise hand a four year old six of them.
 */
export function readPlan(raw: unknown, profile: LearnerProfile): Plan | null {
  if (!raw || typeof raw !== 'object') return null
  const m = raw as Record<string, unknown>

  const seen = new Set<Medium>()
  const parts: Part[] = []

  if (Array.isArray(m.parts)) {
    for (const item of m.parts) {
      const row = item as Record<string, unknown>
      const medium = row?.medium
      if (!isMedium(medium) || !RENDERABLE.includes(medium) || seen.has(medium)) continue
      seen.add(medium)
      const why = typeof row.why === 'string'
        ? row.why.replace(/\s+/g, ' ').trim().slice(0, 90)
        : ''
      parts.push({ medium, why: why || WHY[medium] })
    }
  }

  /* A plan with nothing in it is not a plan. */
  if (!parts.length) return null

  const room = partsAllowed(profile)
  const kept = parts.slice(0, room)
  const keptSet = new Set(kept.map(p => p.medium))

  const because = typeof m.because === 'string'
    ? m.because.replace(/\s+/g, ' ').trim().slice(0, 240)
    : ''

  return {
    parts: kept,
    without: RENDERABLE.filter(x => !keptSet.has(x)),
    because: because || 'Chosen by your tutor from how this learner has been doing.',
    /* The model may say so, and it is also inferred: a plan whose first part
       needs no reading, from a model that left prose out, is wordless whether
       it used the word or not. */
    wordless: m.wordless === true
      || (!NEEDS_READING[kept[0].medium] && !keptSet.has('prose')),
    source: 'model',
    at: new Date().toISOString(),
  }
}

/* ── what the session actually does with it ───────────────────────────────── */

/** What leads. The first thing she meets when she opens a topic. */
export function leadsWith(plan: Plan): Medium {
  return plan.parts[0]?.medium ?? 'prose'
}

/** Whether a medium is in the plan at all. */
export function includes(plan: Plan, medium: Medium): boolean {
  return plan.parts.some(p => p.medium === medium)
}

/**
 * The order to show things in, for a medium that is in the plan.
 *
 * Lower is earlier. Used by the lesson page to put its blocks in the order
 * this learner needs them rather than the order the page was written in.
 */
export function rank(plan: Plan, medium: Medium): number {
  const i = plan.parts.findIndex(p => p.medium === medium)
  return i === -1 ? 99 : i
}

/* ── keeping one ──────────────────────────────────────────────────────────── */

const KEY = 'nexaedu_plan'

/** A plan older than this is worth asking about again. */
const STALE_MS = 3 * 24 * 60 * 60 * 1000

const keyFor = (learnerId: string, subjectId: string) => `${KEY}:${learnerId}:${subjectId}`

export function savedPlan(learnerId: string, subjectId: string): Plan | null {
  try {
    const raw = localStorage.getItem(keyFor(learnerId, subjectId))
    if (!raw) return null
    const p = JSON.parse(raw) as Plan
    return Array.isArray(p?.parts) && p.parts.length ? p : null
  } catch {
    return null
  }
}

export function savePlan(learnerId: string, subjectId: string, plan: Plan): void {
  try {
    localStorage.setItem(keyFor(learnerId, subjectId), JSON.stringify(plan))
  } catch {
    /* Losing it costs one model call, not the session. */
  }
}

/**
 * Whether to ask the model for a fresh plan.
 *
 * Time, and evidence. A plan written before she had answered anything is worth
 * revisiting once she has, and a plan written from her old asks is worth
 * revisiting once she has asked for something different. Otherwise it stands,
 * because re-deciding how to teach somebody every time they open a topic is
 * both expensive and unstable.
 */
export function planIsStale(plan: Plan | null, attempts: Attempt[], asks: Ask[]): boolean {
  if (!plan) return true
  if (plan.source !== 'model') return true
  if (Date.now() - Date.parse(plan.at) > STALE_MS) return true

  const since = Date.parse(plan.at)
  const newAttempts = attempts.filter(a => Date.parse(a.at) > since).length
  const newAsks = asks.filter(a => Date.parse(a.at) > since).length
  return newAttempts >= 6 || newAsks >= 3
}

/**
 * The plan to use right now, and whether to go and get a better one.
 *
 * Never returns null and never waits: there is always a plan, because there is
 * always a local one.
 */
export function planNow({
  profile, subjectId, attempts, asks,
}: {
  profile: LearnerProfile
  subjectId: string
  attempts: Attempt[]
  asks: Ask[]
}): { plan: Plan, refresh: boolean } {
  const saved = savedPlan(profile.id, subjectId)
  const stale = planIsStale(saved, attempts, asks)
  return {
    plan: saved ?? localPlan({ profile, attempts, asks }),
    refresh: stale,
  }
}

/** Everything the model needs to write one, as sentences. */
export function planRequest(learnerId: string, attempts: Attempt[]): {
  asks: Ask[]
  attempts: Attempt[]
} {
  return { asks: asksFor(learnerId), attempts }
}
