/**
 * Getting ahead of the learner, and making one copy of what is not hers.
 *
 * ── The problem, in the owner's own words ───────────────────────────────────
 *
 * From `NEXAEDU_OPEN_ISSUES.md`, issue 17: a complete lesson takes five to
 * eight minutes on the free route, because opening a topic asks for the
 * lesson, a diagram, a photograph, a clip and a film, and one worker answers
 * one job at a time. Issue 24 names the fix: "If she asks for video on most
 * topics, render the video for her next topic while she is still on this one,
 * and it is already there." Issue 17 names the other half, and ranks it first:
 * "Cache what is not personal. A storyboard for counting to five, and the
 * video rendered from it, are identical for every learner in the country."
 *
 * Both halves are this file. They are one file because they are one mechanism:
 * a shared artifact is what makes prefetching cheap enough to be worth doing,
 * and prefetching is what fills the shared store before anybody is waiting on
 * it.
 *
 * ── What is shared and what is never shared ─────────────────────────────────
 *
 * The line is the one issue 17 draws, and it is not negotiable here:
 *
 *   shared        the lesson film, a photograph, a clip. None of them is a
 *                 function of a child. A clip of rain falling on a hillside
 *                 is the same clip for every learner in Ghana.
 *
 *   never shared  the lesson, the explanations, the hints, the questions, the
 *                 plan. Those are the product of this learner's record and
 *                 sharing them would be both wrong and useless.
 *
 *   not shared,   a figure. It is written by the model from the lesson text in
 *   on purpose    front of THIS learner, so its labels can name the worked
 *                 example only she was shown, and it also costs nothing: no
 *                 renderer, no GPU, no money. Caching it would trade the one
 *                 thing that is genuinely hers for a saving that is not worth
 *                 having. See `illustrate.ts` on why a figure is different.
 *
 * ── Why the shared artifacts are built from an empty brief ──────────────────
 *
 * This is the part that looks odd, so it is worth stating plainly. A film
 * asked for through `askVideo` normally carries a `LearnerBrief`: her first
 * name, her year, what she has been getting wrong, what she has asked for.
 * Anything built here is asked for with `sharedBrief` instead, which carries
 * the subject, the topic's own year from the syllabus, and nothing else at
 * all.
 *
 * That is deliberate and it is the whole basis of the key. If the artifact
 * were written from her brief then it would be about her, and putting it in a
 * store keyed on the topic would mean handing one child's film, with her
 * mistakes in it, to forty others. So the brief is emptied first and the key
 * is then honest: topic, style, subject, and nothing that identifies a child.
 *
 * The cost is real and worth naming: a shared film is written from the topic
 * rather than from the lesson she was just taught, so it cannot refer back to
 * her worked example. For the film that is a small loss, because a storyboard
 * was mostly a function of the topic anyway, and the diagram, which is the
 * thing that actually teaches, stays personal.
 *
 * ── Why the store doubles as a claim board ──────────────────────────────────
 *
 * Forty children in one classroom opening the same topic in the same minute
 * would queue forty identical jobs behind one worker, and the fortieth would
 * wait out thirty nine renders of her own film. A cache written when the work
 * finishes does nothing about that: at the moment they all look, it is empty
 * for all of them.
 *
 * So the row goes in BEFORE the work starts, marked pending. The first device
 * to insert it wins, by `on conflict do nothing`, and every other device sees
 * the claim and waits for the artifact instead of making its own. That is the
 * stampede fix, and it is why `status` is in the table.
 *
 * ── Why prefetching must never be allowed to matter ─────────────────────────
 *
 * A prefetch that makes the current page slower is worse than no prefetch. On
 * the free route there is one worker and no priority column on `edu_jobs`, so
 * a job queued ahead genuinely does sit in front of a job she submits a moment
 * later. Nothing in a browser can take it back.
 *
 * Everything in `runAhead` follows from that:
 *
 *   - It does not start until the caller says nothing on the page is waiting,
 *     and it re-asks immediately before each submission rather than trusting
 *     the answer it got a minute ago.
 *   - It submits one job at a time, never a batch, so the most it can ever
 *     cost her is one job of latency rather than five.
 *   - It looks in the shared store first, and the common case in a classroom
 *     or a second sitting is that it finds the artifact and queues nothing.
 *   - It takes the immediate next topic only. Two topics ahead is speculation
 *     paid for by the child in front of you.
 *   - It walks away from a topic somebody else has claimed rather than waiting
 *     on it, because a prefetch has nothing to wait for.
 *   - It is cancellable, and a cancel is honoured between every step.
 *
 * The residual risk, said out loud: one prefetch job may already be on the
 * queue when she asks for something. The real fix for that is a priority
 * column on `edu_jobs` and an ordering in `api/queue.js` that prefers what
 * somebody is waiting for. That is a change to the queue and not to this file,
 * and it is recorded in the issues.
 *
 * ── Why the plan decides what is prefetched ─────────────────────────────────
 *
 * Because rendering a film for a learner whose plan has no film in it is pure
 * waste: minutes of the only worker, spent on something she will never open.
 * `plan.ts` already says which media she actually gets, in order, so that is
 * what is read. A plan that has settled, at that: a plan still guessing from
 * her sign-up form is not evidence of anything, and acting on it would spend
 * the worker on a guess.
 */

import { supabase } from '../supabase'
import { askVideo } from './ai'
import type { LearnerBrief, SyllabusPlace, TutorStage } from './ai'
import { illustrate } from './illustrate'
import type { LearnerProfile } from './learner'
import type { Medium } from './medium'
import type { Plan } from './plan'
import { styleFor } from './storyboard'
import {
  allTopics, foundations, placeOf, topicsFor,
  type Syllabus, type Topic,
} from './syllabus'
import { likelyKind, type Visual } from './visuals'

/* ── what may be shared ───────────────────────────────────────────────────── */

/**
 * The kinds of artifact that belong to a topic rather than to a child.
 *
 * `figure` is absent on purpose, for the reason in the header.
 */
export type SharedKind = 'video' | 'illustration' | 'clip'

/** A finished film, in the shape `askVideo` already returns. */
export interface MadeVideo {
  url: string
  scenes: number
  narrated: number
}

/** Everything that identifies a shared artifact, and nothing else. */
export interface ArtifactKey {
  kind: SharedKind
  subjectId: string
  topicId: string
  /** One of the five film styles, from the syllabus's stage. */
  style: string
}

/**
 * The key, as one string.
 *
 * Four parts, all of them facts about the syllabus. Read it once and satisfy
 * yourself that nothing in it could identify a learner, because that is the
 * only guarantee the shared store rests on.
 */
export function sharedKey(k: ArtifactKey): string {
  const tidy = (v: string) => v.trim().toLowerCase().replace(/[^a-z0-9.-]+/g, '_').slice(0, 80)
  return [k.kind, tidy(k.subjectId), tidy(k.topicId), tidy(k.style)].join(':')
}

/* ── the empty brief ──────────────────────────────────────────────────────── */

/**
 * A learner who is not anybody.
 *
 * Every field is the neutral one. `ai.ts` narrows a brief down to a handful of
 * fields before it leaves the browser, and all of them come out of this blank:
 * no name, no note, nothing she got wrong, nothing she asked for, no id. The
 * year is the only thing overridden, and it comes from the topic rather than
 * from her.
 */
const NOBODY: LearnerProfile = {
  id: '',
  name: '',
  stage: 'jhs',
  level: '',
  forChild: false,
  goal: 'KEEP_UP',
  approach: 'IDEA_FIRST',
  whenStuck: 'HINT',
  footing: 'OKAY',
  diet: 'MIXED',
  programme: null,
  subjectId: null,
  aiNotes: {},
  results: [],
  version: 0,
}

/**
 * The brief a shared artifact is asked for with.
 *
 * The stage and the year are the topic's own, from the syllabus, so two
 * learners of different years studying the same syllabus line still get the
 * same artifact and the key stays true.
 */
export function sharedBrief(syllabus: Syllabus, topic: Topic): LearnerBrief {
  return {
    subjectId: syllabus.subjectId,
    subjectName: syllabus.subject,
    profile: { ...NOBODY, stage: syllabus.stage, level: topic.year },
  }
}

/**
 * Where a topic sits, for the prompt.
 *
 * The same shape the lesson page builds, with one difference that matters: the
 * style comes from the syllabus's stage and not from the learner's, because
 * the style is part of the key.
 */
export function sharedPlace(syllabus: Syllabus, topic: Topic): SyllabusPlace {
  const place = placeOf(syllabus, topic.id)
  return {
    style: styleFor(syllabus.stage),
    strand: place?.strand.name,
    subStrand: place?.subStrand.name,
    topic: topic.title,
    outcome: topic.outcome,
    builds: foundations(syllabus, topic.id, 1).map(t => t.outcome),
    year: topic.year,
    source: syllabus.source,
  }
}

const keyFor = (kind: SharedKind, syllabus: Syllabus, topic: Topic): ArtifactKey => ({
  kind,
  subjectId: syllabus.subjectId,
  topicId: topic.id,
  style: styleFor(syllabus.stage),
})

/* ── the store ────────────────────────────────────────────────────────────── */

const TABLE = 'edu_shared_artifact'

/** How long a claim is respected before it is treated as abandoned. */
const CLAIM_GOOD_FOR_MS = 8 * 60 * 1000

/** How often to look while somebody else's claim is being honoured. */
const LOOK_MS = 4000

/** The longest anybody waits on somebody else's claim before giving up on it. */
const WATCH_LIMIT_MS = 7 * 60 * 1000

/**
 * How long a finished artifact is trusted, and why it is not for ever.
 *
 * This is the one deliberately pessimistic number in the file. What is stored
 * is a url, and today those urls are not ours: `/api/render` hands back
 * whatever the render service returned and nothing is downloaded, which is
 * issue 14, and a rendered film is still written to a path on somebody's
 * laptop, which is issue 18. Those urls expire. A cache that served them for
 * ever would turn issue 14 from "the photograph is gone tomorrow" into "the
 * photograph is gone tomorrow for every learner in the country", which is
 * worse than no cache at all.
 *
 * So half a day: long enough to cover a school day and a whole classroom
 * opening the same topic, short enough that a broken image is unlikely. A
 * stale row is not read, and is taken over and replaced by whoever meets it:
 * the update policy holds a ready row immutable only for as long as this
 * number says the client still trusts it, so the two MUST agree. If the
 * policy's interval were ever shorter than this, there would be a window
 * where a row is served and replaceable at once; if it were much longer, an
 * expired row could not be renewed at all and the cache would quietly stop
 * working one topic at a time.
 *
 * The moment the worker uploads to Supabase Storage and hands back a url we
 * own, this becomes months and the whole of issue 14 closes with it.
 */
const SHELF_MS = 12 * 60 * 60 * 1000

/**
 * How many times round the claim loop before giving up.
 *
 * Every branch either returns or changes the row, so a third lap means two
 * devices are racing each other and something is wrong. Better to fall back to
 * making it locally than to spin.
 */
const LAPS = 3

interface Row {
  status: 'pending' | 'ready' | 'failed'
  artifact: unknown
  claimed_at: string
  ready_at: string | null
}

/**
 * Work already in progress on THIS device.
 *
 * The database stops forty devices duplicating a job. It does not stop one
 * page asking twice, which is what a re-render or a child pressing a button
 * again looks like, and a round trip is slower than a map lookup. So both
 * guards exist and they guard different things.
 */
const inFlight = new Map<string, Promise<unknown>>()

const wait = (ms: number) => new Promise(res => setTimeout(res, ms))

/** Every read and write here is best effort: a cache that fails is not an error. */
async function look(key: string): Promise<Row | null> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select('status,artifact,claimed_at,ready_at')
      .eq('cache_key', key)
      .maybeSingle()
    if (error || !data) return null
    return data as Row
  } catch {
    return null
  }
}

/**
 * Take the work, if nobody else has.
 *
 * `ignoreDuplicates` makes this an insert with "on conflict do nothing", so
 * the winner is decided by the primary key inside the database and not by two
 * browsers agreeing about who looked first. An empty result means somebody
 * else got there, which is a success for the classroom and a signal to wait.
 */
async function claim(key: string, k: ArtifactKey): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .upsert({
        cache_key: key,
        kind: k.kind,
        subject_id: k.subjectId,
        topic_id: k.topicId,
        style: k.style,
        status: 'pending',
        artifact: null,
        claimed_at: new Date().toISOString(),
      }, { onConflict: 'cache_key', ignoreDuplicates: true })
      .select('cache_key')
    if (error) return false
    return !!data && data.length > 0
  } catch {
    return false
  }
}

/**
 * Take over a claim nobody finished.
 *
 * Matched on the exact `claimed_at` we read, which turns this into a compare
 * and swap: two devices both deciding a stale claim is theirs cannot both
 * succeed, because the first one to write moves the timestamp out from under
 * the second.
 */
async function retake(key: string, was: Row): Promise<boolean> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .update({ status: 'pending', claimed_at: new Date().toISOString(), artifact: null })
      .eq('cache_key', key)
      .eq('claimed_at', was.claimed_at)
      .select('cache_key')
    if (error) return false
    return !!data && data.length > 0
  } catch {
    return false
  }
}

/** Put the finished artifact in, or mark the attempt failed so the next one retries. */
async function settle(key: string, artifact: unknown | null): Promise<void> {
  try {
    await supabase
      .from(TABLE)
      .update(artifact
        ? { status: 'ready', artifact, ready_at: new Date().toISOString() }
        : { status: 'failed', artifact: null })
      .eq('cache_key', key)
      .eq('status', 'pending')
  } catch {
    /* The artifact is already on her page. Losing the donation costs the next
       learner one render, not this one her lesson. */
  }
}

const claimIsFresh = (row: Row): boolean =>
  Date.now() - Date.parse(row.claimed_at) < CLAIM_GOOD_FOR_MS

/** Whether a finished artifact is still young enough for its url to work. */
const stillGood = (row: Row): boolean => {
  const at = Date.parse(row.ready_at ?? '')
  return Number.isFinite(at) && Date.now() - at < SHELF_MS
}

/** Poll somebody else's claim until it lands, fails, or runs out of time. */
async function watch<T>(
  key: string,
  read: (artifact: unknown) => T | null,
  signal?: AbortSignal,
): Promise<T | null> {
  const until = Date.now() + WATCH_LIMIT_MS
  for (;;) {
    if (signal?.aborted) return null
    await wait(LOOK_MS)
    if (signal?.aborted) return null

    const row = await look(key)
    if (!row) return null
    if (row.status === 'ready') return stillGood(row) ? read(row.artifact) : null
    if (row.status === 'failed') return null
    if (!claimIsFresh(row)) return null
    if (Date.now() > until) return null
  }
}

interface ObtainOptions<T> {
  /** Rebuild the artifact from what was stored, or reject it. */
  read: (artifact: unknown) => T | null
  /** Make it, when this device is the one that won the claim. */
  make: () => Promise<T | null>
  /**
   * Whether to wait on somebody else's claim.
   *
   * True for a learner looking at the topic now: she wants the film and
   * waiting for somebody else's render is far quicker than starting her own.
   * False when getting ahead: there is nothing to wait for, so a topic
   * somebody else has claimed is a topic already handled.
   */
  wait: boolean
  signal?: AbortSignal
}

/**
 * The one path to a shared artifact: from the store, or made and donated.
 *
 * Every caller in this file goes through here, so the claim rules, the
 * deduplication and the best effort handling of a store that is simply not
 * there yet all live in one place.
 */
async function obtain<T>(k: ArtifactKey, o: ObtainOptions<T>): Promise<T | null> {
  const key = sharedKey(k)

  const flying = inFlight.get(key) as Promise<T | null> | undefined
  if (flying) return flying

  const run = (async (): Promise<T | null> => {
    for (let lap = 0; lap < LAPS; lap++) {
      if (o.signal?.aborted) return null

      const row = await look(key)

      if (row?.status === 'ready') {
        const fresh = stillGood(row)
        const got = fresh ? o.read(row.artifact) : null
        if (got) return got

        /* Nothing usable here. What to do about it depends on which kind of
           unusable it is, and the two kinds are genuinely different.

           Expired: the url has aged out, this learner has to render anyway,
           and the row is now writable because the update policy only holds a
           ready row immutable for as long as the client still believes it.
           So fall through to `retake` and donate the replacement. Leaving it
           alone instead is what would turn the cache into an obstacle: the
           row would sit there unbelieved and unreplaceable, and every learner
           afterwards would pay a round trip and then render the film herself,
           for ever. The interval in the policy and SHELF_MS above have to
           agree for this to work, and the migration says so too.

           Fresh but unreadable: the artifact is malformed, and this row is
           inside its immutable window on purpose, so the database will refuse
           the write. Take a private copy rather than spending LAPS round
           trips learning that. One bad artifact costs each learner a render
           until it expires, which is the price of not letting any device
           overwrite a good film with a worse one. */
        if (fresh) return o.make()
      }

      if (row?.status === 'pending' && claimIsFresh(row)) {
        if (!o.wait) return null
        const landed = await watch(key, o.read, o.signal)
        if (landed) return landed
        continue
      }

      const mine = row ? await retake(key, row) : await claim(key, k)
      if (!mine) continue

      /* Settled either way, including when this was cancelled halfway. A
         cancelled attempt that left the row pending would block the topic for
         every other device until the claim went stale, which is eight minutes
         of a classroom waiting on a tab somebody closed. Marking it failed
         hands the work straight back. */
      const made = await o.make()
      await settle(key, made ?? null)
      return made
    }

    /* Out of laps, which means the store is contended or unreachable. Make it
       for this learner and leave the store alone. A cache is never allowed to
       be the reason somebody is not taught. */
    return o.signal?.aborted ? null : o.make()
  })()

  inFlight.set(key, run)
  try {
    return await run
  } finally {
    inFlight.delete(key)
  }
}

/* ── reading artifacts back ───────────────────────────────────────────────── */

const text = (v: unknown, max: number): string =>
  typeof v === 'string' ? v.trim().slice(0, max) : ''

function readVideo(artifact: unknown): MadeVideo | null {
  if (!artifact || typeof artifact !== 'object') return null
  const a = artifact as Record<string, unknown>
  const url = text(a.url, 600)
  if (!url) return null
  return {
    url,
    scenes: Number(a.scenes) || 0,
    narrated: Number(a.narrated) || 0,
  }
}

/**
 * Rebuild a visual from the store.
 *
 * The id is minted fresh rather than stored, because an id is a handle for one
 * page's list of visuals and two learners holding the same one would be a
 * React key collision waiting to happen. Nothing else is invented: the
 * caption, the alt text and the url are whatever was donated.
 */
function readVisual(kind: 'illustration' | 'clip', topicId: string) {
  return (artifact: unknown): Visual | null => {
    if (!artifact || typeof artifact !== 'object') return null
    const a = artifact as Record<string, unknown>
    const url = text(a.url, 600)
    const caption = text(a.caption, 300)
    const alt = text(a.alt, 400)
    /* No url means nothing to show, and no alt text means a picture nobody can
       see, which `visuals.ts` treats as not a picture at all. */
    if (!url || !alt) return null
    return {
      kind,
      id: `${topicId}-${kind}-${Date.now().toString(36)}`,
      topicId,
      caption,
      body: text(a.body, 2000),
      alt,
      url,
      madeBy: text(a.madeBy, 120) || undefined,
    }
  }
}

/* ── what the lesson page calls ───────────────────────────────────────────── */

/**
 * The film for a topic, from the shared store if anybody has already made it.
 *
 * A drop-in replacement for the `askVideo` call the lesson page makes today,
 * with two differences. It returns instantly when another learner has already
 * rendered this topic, which in a classroom is most of the time. And it is
 * written from the topic rather than from this learner's lesson text, which is
 * the price of it being shareable at all: see the header.
 *
 * Returns null for all the ordinary reasons a film does not arrive: no worker,
 * no renderer, the model declining. A lesson without a film is a lesson.
 */
export function sharedVideo(
  r: { syllabus: Syllabus, topic: Topic },
  signal?: AbortSignal,
  onStage?: (s: TutorStage) => void,
): Promise<MadeVideo | null> {
  return obtain<MadeVideo>(keyFor('video', r.syllabus, r.topic), {
    read: readVideo,
    make: () => askVideo(
      {
        learner: sharedBrief(r.syllabus, r.topic),
        syllabus: sharedPlace(r.syllabus, r.topic),
      },
      signal,
      onStage,
    ).catch(() => null),
    wait: true,
    signal,
  })
}

/**
 * A photograph or a clip for a topic, shared the same way.
 *
 * `figure` is not accepted here, and that is enforced by the type rather than
 * by a check: a diagram is personal and is asked for through `illustrate`
 * directly, exactly as it is today.
 */
export function sharedVisual(
  r: { kind: 'illustration' | 'clip', syllabus: Syllabus, topic: Topic },
  signal?: AbortSignal,
): Promise<Visual | null> {
  return obtain<Visual>(keyFor(r.kind, r.syllabus, r.topic), {
    read: readVisual(r.kind, r.topic.id),
    make: () => illustrate(
      {
        kind: r.kind,
        topicId: r.topic.id,
        learner: sharedBrief(r.syllabus, r.topic),
        syllabus: sharedPlace(r.syllabus, r.topic),
      },
      signal,
    ).catch(() => null),
    wait: true,
    signal,
  })
}

/* ── which topic is next ──────────────────────────────────────────────────── */

/**
 * The topic she will open next, from where she is in her year.
 *
 * The syllabus is already in the order a learner meets a subject, and
 * `topicsFor` is already the list her year gets, so next means the line after
 * this one in that list. Nothing cleverer: a prediction that tried to be
 * cleverer would be wrong more often and would spend the only worker being
 * wrong.
 *
 * Falls back to the whole subject's order when the topic she is on is not in
 * her year, which is what happens when she is reading ahead or going back over
 * something. Returns null at the end of the list, where there is nothing to
 * get ahead of.
 */
export function nextTopic(
  syllabus: Syllabus,
  level: string,
  currentTopicId: string,
): Topic | null {
  const mine = topicsFor(syllabus, level)
  const here = mine.findIndex(t => t.id === currentTopicId)
  if (here !== -1) return mine[here + 1] ?? null

  const everything = allTopics(syllabus)
  const there = everything.findIndex(t => t.id === currentTopicId)
  if (there === -1) return null
  return everything[there + 1] ?? null
}

/* ── which media are worth getting ahead on ───────────────────────────────── */

/**
 * What a medium in her plan means for the shared store.
 *
 * Only two of them mean anything here. Prose, questions and a game are made
 * from her record and cannot be shared, so there is nothing to put in the
 * store ahead of her and nothing would be saved by trying. Talk is not
 * rendered at all yet.
 */
const SHAREABLE: Partial<Record<Medium, true>> = { video: true, picture: true }

/**
 * The most that is ever queued ahead of her.
 *
 * Two artifacts, on one worker, is already up to four minutes of somebody
 * else's machine spent on a topic she has not opened. A third would be
 * speculation paid for by the child in front of you.
 */
const AHEAD_LIMIT = 2

/**
 * Which shared artifacts her next topic is worth having ready.
 *
 * Read off `Plan.parts`, in the plan's own order, so what is rendered ahead is
 * what she actually gets rather than what the platform can make. A plan with
 * no film in it produces no film: that is the point of reading the plan at all
 * rather than prefetching everything.
 *
 * A `picture` becomes whichever of a still or a clip the topic wants, by the
 * same `likelyKind` call the lesson page uses, so the artifact that is made
 * ahead is the one the page would have asked for first.
 */
export function aheadKinds(plan: Plan, subjectId: string, topic: Topic): SharedKind[] {
  const out: SharedKind[] = []
  for (const part of plan.parts) {
    if (!SHAREABLE[part.medium]) continue
    if (part.medium === 'video') {
      if (!out.includes('video')) out.push('video')
      continue
    }
    const wants = likelyKind(topic.title, subjectId)
    const kind: SharedKind = wants === 'clip' ? 'clip' : 'illustration'
    if (!out.includes(kind)) out.push(kind)
  }
  return out.slice(0, AHEAD_LIMIT)
}

/**
 * Whether a plan is settled enough to spend the worker on.
 *
 * A plan whose source is `stated` came off her sign-up form and is a guess
 * about a learner nobody has watched yet. Rendering a film on the strength of
 * it is spending the only worker on that guess, so it is not done. Once the
 * plan comes from her record, or from the tutor, or a teacher has confirmed
 * the row, it is evidence and worth acting on.
 */
export const planIsSettled = (plan: Plan, confirmed = false): boolean =>
  confirmed || plan.source === 'model' || plan.source === 'evidence'

/* ── getting ahead ────────────────────────────────────────────────────────── */

/** A prefetch in progress. Cancel it when she leaves the topic. */
export interface Ahead {
  /** Stop. Honoured between every step, and before anything is ever queued. */
  cancel: () => void
  /** Resolves when there is nothing more to do. Never rejects. */
  done: Promise<void>
}

export interface AheadOptions {
  syllabus: Syllabus
  /** Her year label, so the next topic comes from her year and not the subject. */
  level: string
  /** The topic she is on right now. */
  currentTopicId: string
  /** How she is taught, from `plan.ts`. It decides what is worth making. */
  plan: Plan
  /** True when `edu_learner_plan.confirmed` is set for her and this subject. */
  confirmed?: boolean
  /**
   * Whether anything on the page is still waiting on the tutor or the renderer.
   *
   * Asked again immediately before each submission rather than once at the
   * start, because a learner who presses "teach it differently" halfway
   * through must not find a prefetch job already in front of her.
   */
  busy: () => boolean
  /** How long the page must stay quiet before anything is queued ahead. */
  quietMs?: number
}

/** How long the page must be quiet, by default, before getting ahead of her. */
const QUIET_MS = 20_000

/** How often to re-ask whether the page has gone quiet. */
const ASK_MS = 2000

/** The longest to keep waiting for a quiet page before giving up on the topic. */
const PATIENCE_MS = 5 * 60 * 1000

/**
 * Render her next topic while she is still on this one.
 *
 * Nothing is queued until the page has been quiet for `quietMs` continuously,
 * one artifact is queued at a time, and the store is checked first so the
 * common classroom case queues nothing at all. See the header on why all three
 * matter more than the prefetch itself.
 *
 * Never throws and never reports anything to the learner. A prefetch that
 * failed is a topic that takes as long as it does today, which is the state
 * everything already copes with.
 */
export function runAhead(o: AheadOptions): Ahead {
  const ctrl = new AbortController()
  const quietFor = o.quietMs ?? QUIET_MS

  /** Wait for a page that is not waiting on anything. False means give up. */
  const quiet = async (): Promise<boolean> => {
    const until = Date.now() + PATIENCE_MS
    let since: number | null = null
    for (;;) {
      if (ctrl.signal.aborted) return false
      if (Date.now() > until) return false
      if (o.busy()) since = null
      else {
        since ??= Date.now()
        if (Date.now() - since >= quietFor) return true
      }
      await wait(ASK_MS)
    }
  }

  const done = (async () => {
    if (!planIsSettled(o.plan, o.confirmed)) return

    const topic = nextTopic(o.syllabus, o.level, o.currentTopicId)
    if (!topic) return

    const kinds = aheadKinds(o.plan, o.syllabus.subjectId, topic)
    if (!kinds.length) return

    for (const kind of kinds) {
      /* Re-asked for every kind, not once for the batch, so a page that goes
         busy after the first artifact stops the second. */
      if (!(await quiet())) return

      if (kind === 'video') {
        await obtain<MadeVideo>(keyFor('video', o.syllabus, topic), {
          read: readVideo,
          make: () => askVideo(
            {
              learner: sharedBrief(o.syllabus, topic),
              syllabus: sharedPlace(o.syllabus, topic),
            },
            ctrl.signal,
          ).catch(() => null),
          wait: false,
          signal: ctrl.signal,
        })
      } else {
        await obtain<Visual>(keyFor(kind, o.syllabus, topic), {
          read: readVisual(kind, topic.id),
          make: () => illustrate(
            {
              kind,
              topicId: topic.id,
              learner: sharedBrief(o.syllabus, topic),
              syllabus: sharedPlace(o.syllabus, topic),
            },
            ctrl.signal,
          ).catch(() => null),
          wait: false,
          signal: ctrl.signal,
        })
      }
    }
  })().catch(() => {
    /* Deliberately silent. Nothing on screen depends on this having worked. */
  })

  return { cancel: () => ctrl.abort(), done }
}

/* ── looking, without making ──────────────────────────────────────────────── */

/**
 * Whether a topic's film is already sitting in the store.
 *
 * For a screen that wants to say "ready to watch" on a topic card without
 * starting anything. Cheap: one read, no claim, no job. Null when the store is
 * not reachable, which reads the same as not there and is the right answer for
 * a card either way.
 */
export async function alreadyMade(
  kind: SharedKind,
  syllabus: Syllabus,
  topic: Topic,
): Promise<boolean> {
  const row = await look(sharedKey(keyFor(kind, syllabus, topic)))
  return !!row && row.status === 'ready' && stillGood(row)
}
