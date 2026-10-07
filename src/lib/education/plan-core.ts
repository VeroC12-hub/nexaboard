/**
 * Working out what a sitting is made of, with nothing but the learner's record.
 *
 * Split out of `plan.ts` so it can be run without a browser. That file imports
 * the Supabase client to read and write a saved plan, which made the planning
 * itself unrunnable outside Vite, so the one piece of logic in this product
 * that decides what a child is shown had no way to be checked at all.
 *
 * It shipped a plan that gave a Basic 1 learner video and prose: one medium
 * that cannot be rendered and one she cannot read, with picture, game and
 * questions all reported to the tutor as deliberately left out. Nineteen
 * paragraphs of prose reached a child who cannot read, and nothing anywhere
 * would have said so. `scripts/plan-check.mts` now does, and it can only do it
 * because this module stands on its own.
 *
 * Nothing here touches the network, the clock beyond `now`, or storage.
 */

import { askSignals, wantedMedium, type Ask } from './ask'
import {
  DECISIVE, MEDIUMS, NEEDS_READING, allEvidence, spread, untried, working,
  type Medium, type MediumEvidence,
} from './medium'
import type { Attempt } from './mastery'
import type { LearnerProfile } from './learner'

/**
 * The mediums a session can actually be built from today.
 *
 * The list is filtered against everywhere a plan is assembled, and its whole
 * job is to keep a medium that cannot be produced out of a learner's plan.
 * Video was in it before video worked, and the consequence was not a missing
 * video: it was a lesson with nothing in it at all.
 *
 * A real one, for a Basic 1 learner named Yaw. Nothing was known about her, so
 * the plan sampled from `fromStated`, which led with video. Her year group gets
 * two parts, so video and prose took both and picture, game and questions were
 * all marked deliberately left out, which the prompt faithfully turned into NO
 * image block, NO count block, no try block. Video then produced nothing,
 * because no storyboard job has ever run for a learner. What reached her was
 * nineteen paragraphs of unbroken prose, and the same prompt said at the top:
 * THIS LEARNER CANNOT READ.
 *
 * So video comes back into this list when a storyboard job has been seen to
 * produce a file a learner can play, and not before. Adding the string back is
 * the whole change; `askVideo`, `sharedVideo` and the worker's `storyboard`
 * task are all still here and still wired up.
 */
export const RENDERABLE: Medium[] = ['prose', 'picture', 'game', 'questions']

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
/**
 * Whether written words can teach this learner at all.
 *
 * The same boundary `readingLevel` draws in `api/prompt.js`: creche, and the
 * first two years of primary, are children still decoding words, so reading is
 * the obstacle rather than the medium. It is stated once here because two
 * things need it, and the two disagreeing is how a pre-reader ends up being
 * sent an essay.
 */
function preReader(profile: LearnerProfile): boolean {
  if (profile.stage === 'creche') return true
  return profile.stage === 'primary' && /basic ?[12]\b|^p ?[12]\b|^kg/i.test(profile.level)
}

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

/**
 * What she said she wanted, before anything is known about what works.
 *
 * Order matters more than it looks, because a young learner's sitting holds
 * only two parts and anything third is always cut. A fixed order therefore
 * decides what a whole year group never sees, whatever the budget says.
 *
 * That is what happened: the MIXED default led with video and prose, so for
 * every creche and Basic 1 learner the game was third and was dropped every
 * single time, while `games.ts` says in its own header that at this age a game
 * is the only one of the four that teaches: something to touch, one
 * instruction at a time, an answer they give rather than watch.
 *
 * So the sampling order starts from whether reading can carry the lesson. Not
 * a different plan for small children, which would be the predetermination
 * this module exists to avoid: the same sampling, in an order that does not
 * spend both slots on words a child cannot read.
 */
function fromStated(profile: LearnerProfile): Medium[] {
  const young = preReader(profile)
  switch (profile.diet) {
    case 'READ':
      /* Honoured even for a pre-reader, because she or the adult with her said
         it, and `wordless` below is what catches it if reading then fails. The
         picture is behind it so the sitting is not words alone. */
      return young ? ['prose', 'picture', 'questions'] : ['prose', 'questions']
    case 'WATCH':
      /* Video is not renderable yet, so what is left of watching is seeing it
         drawn. Without this a WATCH learner's plan fell through to the stated
         default and led with prose, which is the opposite of what she asked
         for. */
      return ['picture', 'game']
    case 'PRACTISE':
      return ['game', 'questions']
    default:
      /* MIXED is not a preference, it is the absence of one, so the first
         sittings sample across mediums to find out. A pre-reader samples the
         two that need no reading first. */
      return young
        ? ['game', 'picture', 'prose']
        : ['prose', 'game', 'picture']
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
