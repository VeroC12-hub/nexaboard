/**
 * Carrying a learner to another device.
 *
 * The platform promises one identity from creche to university, and an identity
 * that exists only in one browser's storage is not one. But the usual answer,
 * an account with an email address, is closed to most of the people this is
 * built for: a Basic 4 pupil has no email, and phone verification costs money
 * per message on a product meant to be free.
 *
 * So a learner can be carried instead of logged in. The profile and the shape
 * of the progress are packed into a short code, which is read on the other
 * device. It needs no server, no signal and no account, which also means it
 * works in a village with one shared phone and no data left.
 *
 * When a school eventually connects, this becomes the migration path rather
 * than the mechanism: the code identifies who is arriving, and the school's
 * own records take over as the source of truth.
 */

import type { LearnerProfile, Stage } from './learner'
import { PROFILE_VERSION, STAGE_YEARS } from './learner'
import type { Attempt } from './mastery'

/** Order matters: these are stored as an index, so never reorder them. */
const STAGES: Stage[] = ['creche', 'primary', 'jhs', 'shs', 'tvet', 'uni']
const GOALS = ['KEEP_UP', 'CATCH_UP', 'EXAM', 'GO_FURTHER'] as const
const APPROACHES = ['SHOW_FIRST', 'TRY_FIRST', 'IDEA_FIRST'] as const
const STUCK = ['HINT', 'EASIER', 'WHOLE_METHOD'] as const
const FOOTINGS = ['SHAKY', 'OKAY', 'STRONG'] as const
const DIETS = ['READ', 'WATCH', 'PRACTISE', 'MIXED'] as const

export interface Carried {
  profile: LearnerProfile
  attempts: Attempt[]
}

/* ── text encoding, without depending on a library ────────────────────────── */

function toBase64Url(s: string): string {
  const bytes = new TextEncoder().encode(s)
  let bin = ''
  for (const b of bytes) bin += String.fromCharCode(b)
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function fromBase64Url(s: string): string {
  const pad = s.replace(/-/g, '+').replace(/_/g, '/')
  const bin = atob(pad + '==='.slice((pad.length + 3) % 4))
  const bytes = Uint8Array.from(bin, c => c.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

/**
 * A short checksum, so a mistyped code fails loudly rather than producing a
 * plausible but wrong learner.
 */
function check(s: string): string {
  let h = 5381
  for (let i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0
  return h.toString(36).slice(0, 4).toUpperCase()
}

/**
 * Pack a learner into a code.
 *
 * Every field is shortened to a single character where it can be, because the
 * code has to be readable off one phone and typed into another by a child. The
 * progress travels as counts per objective rather than as every attempt: the
 * adaptive model only ever reads the summary, so sending the full history would
 * multiply the length for nothing.
 */
export function pack({ profile: p, attempts }: Carried): string {
  const years = STAGE_YEARS[p.stage]
  const tally = new Map<string, { n: number; ok: number; at: string }>()
  for (const a of attempts) {
    if (a.isCorrect === null) continue
    const t = tally.get(a.objectiveId) ?? { n: 0, ok: 0, at: a.at }
    t.n += 1
    if (a.isCorrect) t.ok += 1
    if (a.at > t.at) t.at = a.at
    tally.set(a.objectiveId, t)
  }

  const body = JSON.stringify({
    i: p.id,
    n: p.name,
    s: STAGES.indexOf(p.stage),
    y: Math.max(0, years.indexOf(p.level)),
    c: p.forChild ? 1 : 0,
    g: GOALS.indexOf(p.goal),
    a: APPROACHES.indexOf(p.approach),
    k: STUCK.indexOf(p.whenStuck),
    f: FOOTINGS.indexOf(p.footing),
    d: DIETS.indexOf(p.diet),
    j: p.subjectId,
    q: p.programme,
    m: p.aiNotes,
    r: p.results.length,
    p: [...tally].map(([id, t]) => [id, t.n, t.ok, t.at.slice(0, 10)]),
  })

  const payload = toBase64Url(body)
  return `NE1-${payload}-${check(payload)}`
}

export interface Unpacked {
  ok: true
  carried: Carried
}
export interface Unreadable {
  ok: false
  why: string
}

/** Read a code back into a learner, or say plainly why it cannot be read. */
export function unpack(code: string): Unpacked | Unreadable {
  const tidy = code.trim().replace(/\s+/g, '')
  const parts = tidy.split('-')
  if (parts.length < 3 || parts[0].toUpperCase() !== 'NE1') {
    return { ok: false, why: 'That does not look like a transfer code. It should start with NE1.' }
  }
  const sum = parts[parts.length - 1].toUpperCase()
  const payload = parts.slice(1, -1).join('-')
  if (check(payload) !== sum) {
    return { ok: false, why: 'The code is incomplete or has a typo in it. Check it and try again.' }
  }

  try {
    const d = JSON.parse(fromBase64Url(payload)) as {
      i: string; n: string; s: number; y: number; c: number
      g: number; a: number; k: number; f: number; d: number; r: number
      j?: string | null; q?: string | null; m?: Record<string, string>
      p: [string, number, number, string][]
    }
    const stage = STAGES[d.s] ?? 'jhs'
    const years = STAGE_YEARS[stage]

    const profile: LearnerProfile = {
      id: d.i,
      name: d.n ?? '',
      stage,
      level: years[d.y] ?? years[0],
      forChild: d.c === 1,
      goal: GOALS[d.g] ?? 'KEEP_UP',
      approach: APPROACHES[d.a] ?? 'TRY_FIRST',
      whenStuck: STUCK[d.k] ?? 'HINT',
      footing: FOOTINGS[d.f] ?? 'OKAY',
      diet: DIETS[d.d] ?? 'MIXED',
      programme: d.q ?? null,
      subjectId: d.j ?? null,
      // Their own instructions to the AI travel with them: losing those would
      // mean re-teaching the platform what it already knew about this learner.
      aiNotes: d.m ?? {},
      // Files themselves do not travel in a code. The learner still holds them
      // on the old device, and a school confirms them either way, so claiming
      // they had arrived would be a lie.
      results: [],
      version: PROFILE_VERSION,
    }

    // Rebuild a history with the same shape as the real one. The adaptive model
    // reads counts and recency, and both survive.
    const attempts: Attempt[] = []
    for (const [objectiveId, n, ok, day] of d.p ?? []) {
      for (let i = 0; i < n; i++) {
        attempts.push({
          objectiveId,
          isCorrect: i < ok,
          hintUsed: false,
          at: `${day}T12:00:00.000Z`,
        })
      }
    }

    return { ok: true, carried: { profile, attempts } }
  } catch {
    return { ok: false, why: 'That code could not be read. Copy it again from the other device.' }
  }
}

/** Broken into groups, so it can be read aloud and typed without losing place. */
export function readable(code: string): string {
  const [tag, ...rest] = code.split('-')
  const body = rest.slice(0, -1).join('-')
  const sum = rest[rest.length - 1]
  const grouped = body.match(/.{1,4}/g)?.join(' ') ?? body
  return `${tag}-${grouped}-${sum}`
}
