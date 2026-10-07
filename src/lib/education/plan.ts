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
 *
 * ── Where a plan is kept ────────────────────────────────────────────────────
 *
 * In `edu_learner_plan`, against her account, and mirrored into `localStorage`.
 *
 * The mirror is a cache and not the record. It is read first because it is
 * synchronous and a session has to lay itself out now, and it is written on
 * every load from the server so a second device catches up the first time she
 * opens a topic on it.
 *
 * It used to be only `localStorage`, which meant a learner signing in on a
 * school tablet met a platform that had forgotten how she learns and went back
 * to guessing from her sign-up form. Her diet is a fact about her, not about
 * the browser she opened.
 */

import { supabase } from '../supabase'
import { asksFor, type Ask } from './ask'
import type { Attempt } from './mastery'
import type { LearnerProfile } from './learner'

/* ── the planning itself ──────────────────────────────────────────────────────
   Lives in `plan-core.ts` and is re-exported here, so that every screen can go
   on importing from './plan' and the logic can still be run without a browser.
   Splitting it was not tidying: the planning had no way to be checked while it
   depended on this file's Supabase import. */
export {
  RENDERABLE, localPlan, readPlan, leadsWith, includes, rank,
  type Part, type Plan,
} from './plan-core'
import { localPlan, type Plan } from './plan-core'

/* ── keeping one ──────────────────────────────────────────────────────────── */

const KEY = 'nexaedu_plan'
const TABLE = 'edu_learner_plan'

/** A plan older than this is worth asking about again. */
const STALE_MS = 3 * 24 * 60 * 60 * 1000

const keyFor = (learnerId: string, subjectId: string) => `${KEY}:${learnerId}:${subjectId}`

/** Anything that is not a plan with parts in it is not a plan. */
function usable(value: unknown): Plan | null {
  const p = value as Plan | null
  return p && Array.isArray(p.parts) && p.parts.length ? p : null
}

/**
 * The cached copy, read synchronously.
 *
 * A session lays itself out the moment a topic opens, so there has to be an
 * answer available without waiting for the network. This is that answer. It is
 * a mirror of the row, never the record.
 */
export function savedPlan(learnerId: string, subjectId: string): Plan | null {
  try {
    const raw = localStorage.getItem(keyFor(learnerId, subjectId))
    return raw ? usable(JSON.parse(raw)) : null
  } catch {
    return null
  }
}

/**
 * The plan on her account, whichever device she is on.
 *
 * Awaited by whoever can afford to wait, which is anything loading a subject
 * rather than laying out a session. It refreshes the cache as a side effect,
 * so the next synchronous read on this device is right.
 *
 * A failure here is not an error worth showing anybody: `localPlan` produces a
 * perfectly good plan from evidence this device already has.
 */
export async function accountPlan(
  learnerId: string, subjectId: string,
): Promise<Plan | null> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select('plan')
      .eq('learner_id', learnerId)
      .eq('subject_id', subjectId)
      .maybeSingle()
    if (error || !data) return null
    const plan = usable(data.plan)
    if (plan) cache(learnerId, subjectId, plan)
    return plan
  } catch {
    return null
  }
}

function cache(learnerId: string, subjectId: string, plan: Plan): void {
  try {
    localStorage.setItem(keyFor(learnerId, subjectId), JSON.stringify(plan))
  } catch {
    /* Losing the cache costs one model call, not the session. */
  }
}

/**
 * Keep a plan.
 *
 * The cache is written first and synchronously, because the caller is usually
 * about to lay out a session with it and must not wait. The row follows, and
 * if it fails the plan is still right on this device and will be written again
 * next time.
 */
export function savePlan(learnerId: string, subjectId: string, plan: Plan): void {
  cache(learnerId, subjectId, plan)
  void supabase
    .from(TABLE)
    .upsert({
      learner_id: learnerId,
      subject_id: subjectId,
      plan,
      source: plan.source,
    }, { onConflict: 'learner_id,subject_id' })
    .then(({ error }) => {
      if (error) {
        /* Said once, quietly, because it is a real failure of the promise that
           her diet follows her account, and it is invisible otherwise. */
        console.warn('[plan] could not save to the account:', error.message)
      }
    })
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
