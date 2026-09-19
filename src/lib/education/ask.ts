/**
 * What the learner asked for, in her own words.
 *
 * ── Why this is a separate store ────────────────────────────────────────────
 *
 * The platform already keeps notes about a learner in `adapt.ts`, but those are
 * the **tutor's** notes: things a model concluded by watching answers go right
 * and wrong. This store is the learner's own side of it, and the two are kept
 * apart on purpose.
 *
 * A note written by the model is an inference and can be wrong. "She seems to
 * struggle with two step problems" is a guess from six answers. When the
 * learner selects the word "fewer" and says she does not know what it means,
 * that is not a guess about her, it is a fact from her. The second must never
 * be overwritten, summarised away or outvoted by the first, which is what
 * would happen if they shared one capped list.
 *
 * ── Why asking beats watching ───────────────────────────────────────────────
 *
 * Right and wrong per medium, which is what `medium.ts` measures, needs about
 * six answers before it can say anything and a dozen before it can see a
 * trend. That is a week or two of use. It is also indirect: a learner doing
 * badly on reading might be meeting harder material, not the wrong medium.
 *
 * An ask is immediate, precise and unconfounded. It arrives on the first
 * screen of the first session, it names the exact thing that was not
 * understood, and it says what she wants done about it. It also catches the
 * failure that watching cannot see at all: the learner who opens a lesson,
 * understands nothing, and closes it leaves no trace in an answer log.
 *
 * So asks are the primary signal and the watched numbers are the background
 * one. `plan.ts` reads both, and this one carries more weight.
 */

import type { Medium } from './medium'

/** What she wants doing about the thing she pointed at. */
export type Want =
  /** Say it again differently, in words. */
  | 'explain'
  /** Draw it. Claude decides whether that means a diagram or a photograph. */
  | 'picture'
  /** Film it. Slow, so it is promised rather than delivered on the spot. */
  | 'video'
  /** Read it out. No model involved, so it is instant. */
  | 'aloud'
  /** No selection and no words: the whole thing is not landing. */
  | 'lost'

export const WANTS: Want[] = ['explain', 'picture', 'video', 'aloud', 'lost']

/** How each request is described back to her, and to a parent reading over. */
export const WANT_WORDS: Record<Want, string> = {
  explain: 'explain this',
  picture: 'draw this',
  video: 'show this in a video',
  aloud: 'read this out',
  lost: 'I do not understand',
}

/**
 * Which medium a request is a vote for.
 *
 * An ask is the strongest possible statement of preference, because she named
 * it rather than picking it off a list somebody else wrote. `lost` votes for
 * nothing: it says the current medium is failing and does not say what should
 * replace it.
 */
export const WANT_MEDIUM: Record<Want, Medium | null> = {
  explain: 'prose',
  picture: 'picture',
  video: 'video',
  aloud: 'video',
  lost: null,
}

export type AnswerKind = 'text' | 'figure' | 'picture' | 'video' | 'spoken'

export interface Answer {
  kind: AnswerKind
  /**
   * `waiting` matters as much as the other two.
   *
   * A video is minutes away, so the record has to be able to hold a promise
   * rather than only a result. Without this the page could not show that
   * something is coming, and a child would ask twice.
   */
  status: 'waiting' | 'ready' | 'failed'
  /** Prose, SVG, or a URL, depending on `kind`. Empty while waiting. */
  body: string
  at: string
}

export interface Ask {
  id: string
  topicId: string
  /** ISO timestamp. */
  at: string
  /** The exact text she pointed at, or null when she asked about the lot. */
  about: string | null
  want: Want
  /** Her own question, when she typed or said one. */
  words: string | null
  /** What she was being taught in when she asked. */
  medium: Medium
  answer: Answer | null
  /**
   * Whether the answer helped, if she said.
   *
   * `false` is the single most useful value in this file. An answer that did
   * not land is the one thing a tutor most needs to know and the one thing a
   * right-and-wrong log can never tell it: she was given an explanation, it
   * failed, and the next attempt must be a different shape rather than the
   * same shape said louder.
   */
  helped: boolean | null
}

/* ── the store ────────────────────────────────────────────────────────────── */

const KEY = 'nexaedu_asks'

/**
 * How many to keep.
 *
 * Generous, because these are short and they are the best record the platform
 * has of a particular learner. A cap exists at all only so that a device does
 * not fill up after a year.
 */
const KEEP = 300

/** Her words are capped, not to distrust her, but because they reach prompts. */
const ABOUT_CAP = 400
const WORDS_CAP = 400

const keyFor = (learnerId: string) => `${KEY}:${learnerId}`

function clean(s: string | null | undefined, cap: number): string | null {
  if (typeof s !== 'string') return null
  const out = s.replace(/\s+/g, ' ').trim().slice(0, cap)
  return out || null
}

export function asksFor(learnerId: string, topicId?: string): Ask[] {
  try {
    const raw = localStorage.getItem(keyFor(learnerId))
    const rows = raw ? JSON.parse(raw) : []
    if (!Array.isArray(rows)) return []
    const all = rows.filter(r => r && typeof r.id === 'string') as Ask[]
    return topicId ? all.filter(a => a.topicId === topicId) : all
  } catch {
    /* Blocked storage loses the history, not the lesson. */
    return []
  }
}

function write(learnerId: string, rows: Ask[]): void {
  try {
    localStorage.setItem(keyFor(learnerId), JSON.stringify(rows.slice(-KEEP)))
  } catch {
    /* Full or blocked. Losing a record must never break the asking. */
  }
}

/** A new ask, stored, and returned so the caller can follow its answer. */
export function record(learnerId: string, ask: {
  topicId: string
  about?: string | null
  want: Want
  words?: string | null
  medium: Medium
}): Ask {
  const row: Ask = {
    id: `ask-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    topicId: ask.topicId,
    at: new Date().toISOString(),
    about: clean(ask.about, ABOUT_CAP),
    want: WANTS.includes(ask.want) ? ask.want : 'explain',
    words: clean(ask.words, WORDS_CAP),
    medium: ask.medium,
    answer: null,
    helped: null,
  }
  write(learnerId, [...asksFor(learnerId), row])
  return row
}

export function answered(learnerId: string, askId: string, answer: Answer): void {
  const rows = asksFor(learnerId).map(a => (a.id === askId ? { ...a, answer } : a))
  write(learnerId, rows)
}

/** She said whether it helped. Recorded against the ask it was about. */
export function helped(learnerId: string, askId: string, did: boolean): void {
  const rows = asksFor(learnerId).map(a => (a.id === askId ? { ...a, helped: did } : a))
  write(learnerId, rows)
}

/* ── what the asks add up to ──────────────────────────────────────────────── */

export interface AskSignals {
  /** How many she has made, ever. */
  total: number
  /** How many in the last week, which is what "lately" means here. */
  lately: number
  /** Requests per medium, her own votes for how to be taught. */
  wants: Record<Want, number>
  /**
   * Of the answers she judged, how many failed her.
   *
   * null when she has never said. High means the tutor keeps answering in a
   * shape that does not reach her, which is a fact about the tutor.
   */
  failRate: number | null
  /** How often she gives up on the whole thing rather than a part of it. */
  lostCount: number
}

const WEEK = 7 * 24 * 60 * 60 * 1000

export function askSignals(asks: Ask[], now = Date.now()): AskSignals {
  const wants = { explain: 0, picture: 0, video: 0, aloud: 0, lost: 0 } as Record<Want, number>
  for (const a of asks) wants[a.want] = (wants[a.want] ?? 0) + 1

  const judged = asks.filter(a => a.helped !== null)

  return {
    total: asks.length,
    lately: asks.filter(a => now - Date.parse(a.at) < WEEK).length,
    wants,
    failRate: judged.length ? judged.filter(a => a.helped === false).length / judged.length : null,
    lostCount: wants.lost,
  }
}

/**
 * The medium she asks for most, when she asks for one clearly.
 *
 * Returns null unless there is a clear leader over at least three requests.
 * Two asks is a mood, not a preference, and narrowing a child's whole diet on
 * the strength of two taps would be exactly the predetermination this layer
 * exists to remove, only faster and with more confidence.
 */
export function wantedMedium(asks: Ask[]): Medium | null {
  const votes = new Map<Medium, number>()
  for (const a of asks) {
    const m = WANT_MEDIUM[a.want]
    if (m) votes.set(m, (votes.get(m) ?? 0) + 1)
  }
  if (!votes.size) return null

  const ranked = [...votes.entries()].sort((x, y) => y[1] - x[1])
  const [top, count] = ranked[0]
  if (count < 3) return null
  const runnerUp = ranked[1]?.[1] ?? 0
  return count > runnerUp ? top : null
}

/**
 * Her side of it, as sentences, for the prompt.
 *
 * Words rather than counts, for the same reason `medium.ts` uses words: a tutor
 * told "picture: 7" reasons about a tally, and a tutor told "she keeps asking
 * to be shown things rather than told them" reasons about a child. Her exact
 * phrases are quoted, because they are the most specific information in the
 * entire system and paraphrasing them throws that away.
 */
export function askBrief(asks: Ask[]): string {
  if (!asks.length) {
    return 'This learner has not asked for anything yet, so nothing is known'
      + ' about what she wants from her own mouth.'
  }

  const s = askSignals(asks)
  const lines: string[] = []

  const ranked = WANTS
    .map(w => ({ w, n: s.wants[w] }))
    .filter(x => x.n > 0)
    .sort((a, b) => b.n - a.n)

  lines.push('She has asked ' + s.total + ' times. Most often: '
    + ranked.slice(0, 3).map(x => `${WANT_WORDS[x.w]} (${x.n})`).join(', ') + '.')

  /* Her actual words, newest first, because these are the point. */
  const said = asks.filter(a => a.words).slice(-5).reverse()
  if (said.length) {
    lines.push('In her own words: '
      + said.map(a => `"${a.words}"` + (a.about ? ` (about "${a.about}")` : '')).join('; ') + '.')
  }

  const spans = asks.filter(a => a.about && !a.words).slice(-5).reverse()
  if (spans.length) {
    lines.push('She pointed at these without saying more: '
      + spans.map(a => `"${a.about}"`).join('; ') + '.')
  }

  if (s.failRate !== null && s.failRate >= 0.4) {
    lines.push('She has told you that '
      + Math.round(s.failRate * 100) + ' per cent of your answers did not help her,'
      + ' so change the shape of the answer rather than the wording.')
  } else if (s.failRate !== null) {
    lines.push('Most of your answers have helped her when she said.')
  }

  if (s.lostCount >= 2) {
    lines.push('She has said she does not understand the whole thing '
      + s.lostCount + ' times, which is about how it is being taught'
      + ' and not about one sentence in it.')
  }

  const wanted = wantedMedium(asks)
  if (wanted) {
    lines.push('Taken together she is asking to be taught in ' + wanted
      + '. Give her that, and do not make her ask again for it every time.')
  }

  return lines.join(' ')
}
