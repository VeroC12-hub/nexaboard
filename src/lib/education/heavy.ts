/**
 * The generated games: a new one every time, for learners who cannot read yet.
 *
 * ── The problem this solves ─────────────────────────────────────────────────
 *
 * A fixed set of games is a countdown. A child plays the six, learns the six,
 * and the app is finished with nothing left to come back for. Worse, the six
 * were the same six regardless of topic, so the novelty ran out long before the
 * curriculum did.
 *
 * So no fixed set. Every sitting composes a game that has not been played
 * before: a different scene, a different thing to do, different objects moving
 * differently. There are more valid games in the grammar below than a child
 * could play in years of schooling, and the AI can invent more of it than the
 * grammar was written with.
 *
 * ── Why the model does not write the game ───────────────────────────────────
 *
 * This is the decision everything else follows from.
 *
 * A model can write a whole playable game as code. It can also write one where
 * the basket holds five mangoes and the answer key says four. Put that in front
 * of a five year old and the platform has taught them something false, marked
 * them wrong for being right, written that into their mastery record, and the
 * adaptation then pitches the next lesson to a fiction. For a child who cannot
 * read the screen and cannot argue back, there is no recovery from that.
 *
 * So the model does not own the arithmetic. It writes a **spec**: the scene,
 * the verb, the objects, the motion, the words. The engine reads the spec, lays
 * out the actual items, counts what it actually laid out, and decides the
 * verdict itself. The truth is computed at the point of play, from the things
 * on screen, by code that was written once and reviewed.
 *
 * That is what makes unlimited generation safe here rather than reckless. A
 * generated game can be dull, or oddly dressed, or a bad fit for a topic. It
 * cannot be wrong about a number.
 *
 * ── The three sources of a game ─────────────────────────────────────────────
 *
 * 1. `composeSpec` below. Invents a valid spec locally, instantly, offline,
 *    free, with no model involved. This is the floor: a child on a dead
 *    connection still gets a game they have not played, and it is what plays
 *    while a richer one is being written.
 * 2. The `game` task in `api/prompt.js`. Claude writes a spec pitched at the
 *    topic and at what this child has been getting wrong, with scenes and
 *    wording the grammar would not have invented. Slower, so it is generated
 *    ahead of the child rather than while they wait, and kept once written.
 * 3. An engine export dropped into `public/games/`. GDevelop, Construct, Godot
 *    and Phaser all publish a folder with an HTML entry point, so anything that
 *    speaks the protocol below plays here. Megabytes over mobile data, so it is
 *    per topic and opt in, never the default.
 *
 * ── Why an iframe ──────────────────────────────────────────────────────────
 *
 * The game runs in a sandboxed frame with no same-origin permission, so it gets
 * an opaque origin: our storage, our accounts and our session are unreachable
 * from inside it. That matters more once games are generated than it did when
 * they were all written by hand, and it is what lets somebody else's engine
 * export run without being trusted.
 *
 * ── The protocol ───────────────────────────────────────────────────────────
 *
 * The game posts, the app listens:
 *
 * | Message | Meaning |
 * |---|---|
 * | `ready` | Loaded, asking for its spec. |
 * | `say` | Read this line out. The app owns the voice, so there is one voice and one mute switch. |
 * | `attempt` | A round was answered. Recorded exactly as a written question is. |
 * | `done` | The set is finished. |
 *
 * The app posts `setup` back once. Everything is marked `nx: 1`, because a
 * browser page receives a constant trickle of messages from extensions and
 * devtools.
 *
 * `public/games/engine.js` holds the other half of this, written out separately
 * because it is not part of the bundle and cannot import from here.
 */

import { THINGS, rangeFor } from './games'
import type { Stage } from './learner'
import { lastGoal, pickWeighted, playsFor, weightsFor } from './taste'

/* ── the grammar ──────────────────────────────────────────────────────────── */

/**
 * What the child actually does. The verb of the game.
 *
 * Seven, because between them they cover what early maths and early literacy
 * ask a child to do. Everything else in a game is dressing on one of these.
 */
export type Goal =
  /** Put a given number of things into a container. Counting, one to one. */
  | 'collect'
  /** Tap the things that match a rule, while they move. Recognition. */
  | 'pop'
  /** Drag things into bins by a property. Classification. */
  | 'sort'
  /** Drag things into a sequence. Order, what comes next, the missing one. */
  | 'order'
  /** Pair a thing with its partner. Numeral to quantity, letter to picture. */
  | 'match'
  /** Make two sides the same. Comparison, and later equality. */
  | 'balance'
  /** Make a total out of parts. Addition, partitioning. */
  | 'build'

export const GOALS: Goal[] = [
  'collect', 'pop', 'sort', 'order', 'match', 'balance', 'build',
]

/** How the things behave. Changes the feel and the difficulty, never the answer. */
export type Motion = 'still' | 'fall' | 'drift' | 'bob' | 'orbit'

export const MOTIONS: Motion[] = ['still', 'fall', 'drift', 'bob', 'orbit']

/**
 * Where it happens.
 *
 * Places a Ghanaian child has been, because a game set in a snowy forest is a
 * puzzle before it is a game. The engine draws each one from a handful of
 * shapes and a gradient, so a new scene costs nothing to load.
 */
export type Scene =
  | 'market' | 'farm' | 'road' | 'river' | 'school' | 'yard' | 'beach' | 'night'

export const SCENES: Scene[] = [
  'market', 'farm', 'road', 'river', 'school', 'yard', 'beach', 'night',
]

/** What the round is about, which decides what the engine lays out. */
export type Subject =
  | 'count'    /** how many things */
  | 'numeral'  /** the written number */
  | 'compare'  /** more, fewer, the same */
  | 'sequence' /** order, next, missing */
  | 'letter'   /** first sound, letter name */
  | 'shape'    /** circle, square, triangle */
  | 'size'     /** big, small, long, short */
  | 'sum'      /** parts making a total */

export interface Thing {
  emoji: string
  one: string
  many: string
}

/**
 * One game, fully described.
 *
 * Everything here is dressing, wording and shape. Nothing here is an answer:
 * see the note at the top of the file.
 */
export interface GameSpec {
  /** What it is called, in words a child hears rather than reads. */
  title: string
  /** The verb. */
  goal: Goal
  /** What it is teaching. */
  subject: Subject
  /** How the things behave. */
  motion: Motion
  /** Where it happens. */
  scene: Scene
  /** The objects in play. */
  things: Thing[]
  /** The number ceiling for this learner. */
  max: number
  /** How many rounds before handing back. */
  rounds: number
  /**
   * Spoken before the first round, to set the scene. One sentence.
   *
   * The per round instruction is built by the engine, not here, because it has
   * to name the actual number the engine chose.
   */
  intro: string
  /** Bigger targets, slower motion, fewer things on screen. */
  tiny: boolean
  /** Where this came from, so a spec that plays badly can be traced. */
  source: 'composed' | 'model' | 'imported'
}

/* ── which goals suit which subject ───────────────────────────────────────── */

/**
 * The valid pairings.
 *
 * Not every verb can teach every thing. Sorting does not teach counting on,
 * and ordering does not teach first sounds. Keeping this as a table rather than
 * trusting the caller is what stops a generated spec being nonsense: a spec
 * that pairs a goal with a subject it cannot teach is refused before it plays.
 */
const GOALS_FOR: Record<Subject, Goal[]> = {
  count: ['collect', 'pop', 'match', 'build'],
  numeral: ['match', 'pop', 'order', 'collect'],
  compare: ['balance', 'sort', 'pop'],
  sequence: ['order', 'pop', 'build'],
  letter: ['pop', 'match', 'sort', 'collect'],
  shape: ['sort', 'match', 'pop', 'order'],
  size: ['order', 'sort', 'balance', 'pop'],
  sum: ['build', 'balance', 'collect'],
}

/** Motions that would make a goal unplayable rather than harder. */
const MOTION_BANS: Partial<Record<Goal, Motion[]>> = {
  /* Dragging something that is falling is not a challenge, it is a fight. */
  order: ['fall', 'orbit'],
  sort: ['fall', 'orbit'],
  build: ['fall', 'orbit'],
  balance: ['fall', 'orbit', 'drift'],
  collect: ['orbit'],
}

export function goalsFor(subject: Subject): Goal[] {
  return GOALS_FOR[subject] ?? []
}

export function motionsFor(goal: Goal): Motion[] {
  const banned = MOTION_BANS[goal] ?? []
  return MOTIONS.filter(m => !banned.includes(m))
}

/**
 * How many games the grammar holds, counted two ways.
 *
 * Worth stating honestly, because the first version of this claimed a number
 * that multiplied in the scenes and the motions, and a child does not
 * experience a new backdrop as a new game. `distinct` is verbs against
 * subjects, which is what somebody playing would count. `dressed` is every
 * valid variation of those, which is the bigger number and the weaker claim.
 */
export function grammarSize(): { distinct: number, dressed: number } {
  let distinct = 0
  let dressed = 0
  for (const subject of Object.keys(GOALS_FOR) as Subject[]) {
    for (const goal of goalsFor(subject)) {
      /* What a child would call a different game. */
      distinct += 1
      /* Every valid way of dressing those, which is a much larger number and
         a much smaller claim. Counted separately so the two are never
         confused again. */
      dressed += motionsFor(goal).length * SCENES.length
    }
  }
  return { distinct, dressed }
}

/* ── what a topic is about ────────────────────────────────────────────────── */

/**
 * Which subjects a topic could be taught with, from its title.
 *
 * Matched on words, which will always overreach, so each pattern is narrow and
 * an empty result is a valid answer. A game bolted onto a topic it does not fit
 * is a distraction wearing the costume of teaching.
 */
const SUBJECT_WORDS: Array<[Subject, RegExp, RegExp?]> = [
  ['count', /count|how many|one to one|tally|number name|how much/i],
  ['numeral', /numeral|number symbol|writing numbers|reading numbers|recognis\w+ numbers|figures/i],
  ['compare', /more|fewer|less|compar|greater|bigger|heavier|lighter|which is|equal|same as/i],
  ['sequence', /pattern|sequence|next|missing|count(ing)? (on|back)|one more|one less|order|number line|skip count/i],
  [
    'letter',
    /sound|phonic|blend|rhym|syllable|begins? with|initial|letter name|alphabet/i,
    /standing for numbers|forming|handwrit|book|expression|fluen|comprehen|punctuat/i,
  ],
  ['shape', /shape|circle|square|triangle|rectangle|solid|space|sort/i],
  ['size', /size|long|short|tall|heavy|light|measur|capacity|mass|length/i],
  ['sum', /add|sum|total|plus|subtract|take away|minus|partition|make ?up|number bond/i],
]

export function subjectsOf(topicTitle: string): Subject[] {
  const out: Subject[] = []
  for (const [subject, yes, no] of SUBJECT_WORDS) {
    if (yes.test(topicTitle) && !(no && no.test(topicTitle))) out.push(subject)
  }
  return out
}

/** Whether this topic can be played at all, at this stage. */
export function playable(stage: Stage, topicTitle: string): boolean {
  if (stage !== 'creche' && stage !== 'primary' && stage !== 'jhs') return false
  return subjectsOf(topicTitle).length > 0
}

/* ── who gets one, and whether it leads ───────────────────────────────────── */

export type Standing = 'leads' | 'offered' | 'none'

/**
 * Whether the game is the lesson or an option beside it.
 *
 * Through Basic 2 the game leads and the written lesson is the note the adult
 * reads, because a child who cannot read cannot be taught by prose. From
 * Basic 3 the reading is the point, so the lesson leads and the game is offered
 * underneath it: still there, still theirs to choose, no longer the way the
 * topic is taught.
 */
export function standingFor(stage: Stage, year: string, topicTitle: string): Standing {
  if (!playable(stage, topicTitle)) return 'none'
  if (stage === 'creche') return 'leads'
  if (stage === 'primary') {
    return /basic ?[12]\b|^p ?[12]\b/i.test(year) ? 'leads' : 'offered'
  }
  return 'offered'
}

/* ── never the same game twice ────────────────────────────────────────────── */

const SEEN_KEY = 'nexaedu_played'
/** How many recent games to remember. Six is about a week of sittings. */
const REMEMBER = 12

/**
 * What makes two games feel like the same game.
 *
 * The verb and what it is teaching, and deliberately **not** the scene or the
 * motion. This was wrong in the first version, which counted the backdrop as
 * part of a game's identity: a child got dragging into a basket at the market,
 * then dragging into a basket on the farm, and the second one was recorded as
 * a game they had not played. It was the same game with a different sky, and
 * they knew it immediately.
 *
 * Scene and motion are dressing. Identity is what your hands do.
 */
export function fingerprint(spec: Pick<GameSpec, 'goal' | 'subject'>): string {
  return `${spec.goal}:${spec.subject}`
}

function seen(learnerId: string): string[] {
  try {
    const raw = localStorage.getItem(`${SEEN_KEY}:${learnerId}`)
    const rows = raw ? JSON.parse(raw) : []
    return Array.isArray(rows) ? rows.filter(r => typeof r === 'string') : []
  } catch {
    /* Blocked storage means every game is new, which is the safe direction. */
    return []
  }
}

/**
 * Remember that this one has been played.
 *
 * This is the part that actually keeps a child coming back, more than the
 * generation does. A generator that can make a thousand games but happens to
 * make the same one twice in a row has, to the child, made one game.
 */
export function remember(learnerId: string, spec: GameSpec): void {
  try {
    const rows = [fingerprint(spec), ...seen(learnerId)].slice(0, REMEMBER)
    localStorage.setItem(`${SEEN_KEY}:${learnerId}`, JSON.stringify(rows))
  } catch {
    /* Losing the history costs novelty, not correctness. */
  }
}

/* ── composing one locally ────────────────────────────────────────────────── */

const pickOne = <T,>(xs: readonly T[]): T => xs[Math.floor(Math.random() * xs.length)]

function shuffled<T>(xs: readonly T[]): T[] {
  return [...xs].sort(() => Math.random() - 0.5)
}

/** Scene words, so the spoken intro is about somewhere rather than nowhere. */
const SCENE_WORDS: Record<Scene, string> = {
  market: 'at the market',
  farm: 'on the farm',
  road: 'by the roadside',
  river: 'down at the river',
  school: 'in the classroom',
  yard: 'out in the yard',
  beach: 'on the beach',
  night: 'after dark',
}

const GOAL_WORDS: Record<Goal, string> = {
  collect: 'Let us fill the basket',
  pop: 'Let us catch some things',
  sort: 'Let us put things where they belong',
  order: 'Let us line things up',
  match: 'Let us find the pairs',
  balance: 'Let us make both sides the same',
  build: 'Let us make the number together',
}

/**
 * Invent a game, here, now, with no model and no network.
 *
 * Avoids the shapes this learner has played recently, and falls back to
 * allowing a repeat rather than refusing to make a game, because a child
 * tapping play must always get something.
 */
export function composeSpec({
  stage, year, accuracy, topicTitle, learnerId,
}: {
  stage: Stage
  year: string
  accuracy: number | null
  topicTitle: string
  learnerId: string
}): GameSpec | null {
  const subjects = subjectsOf(topicTitle)
  if (!subjects.length) return null

  const recent = seen(learnerId)
  const tiny = stage === 'creche'

  /* Every valid shape for this topic, then the ones they have not just
     played, in a random order. */
  const options: Array<{ subject: Subject, goal: Goal, motion: Motion, scene: Scene }> = []
  for (const subject of subjects) {
    for (const goal of goalsFor(subject)) {
      for (const motion of motionsFor(goal)) {
        for (const scene of SCENES) options.push({ subject, goal, motion, scene })
      }
    }
  }
  if (!options.length) return null

  /**
   * Which verb, and this is the part that decides whether the games feel like
   * one game or like a shelf of them.
   *
   * The first version preferred a verb they had **not** just done, reasoning
   * that a new thing to do beats the same thing in a new place. True for the
   * second game and false by the tenth: a child who loves popping was steered
   * away from popping, every time, by design. That is the opposite of
   * personalisation, and it is why every child ended up with the same spread
   * whatever they enjoyed.
   *
   * So the verb is now weighted by what this learner actually finishes, from
   * `taste.ts`, with three rules that survive it:
   *
   *   - never the verb they just played, because immediate repetition is what
   *     makes a shelf feel like one game
   *   - a verb they have never met outranks a favourite, because a child
   *     cannot prefer something they have not been shown
   *   - nothing reaches zero, because the seven verbs teach seven different
   *     things and a child served only their favourite never learns the rest
   */
  const plays = playsFor(learnerId)
  const justPlayed = lastGoal(plays)

  const pool = shuffled(options)
  const fresh = pool.filter(o => o.goal !== justPlayed)
  const usable = fresh.length ? fresh : pool

  /* Weight per verb, then applied to every dressing of it, so the scene and
     the motion stay an even shuffle and only the verb is steered. */
  const weights = weightsFor([...new Set(usable.map(o => o.goal))], plays)

  /* Among dressings of the chosen verb, still prefer one this learner has not
     had recently. The scene is not the game, but the same verb in the same
     place twice running is worth avoiding where it is free to do so. */
  const chosen = pickWeighted(usable, o =>
    (weights.get(o.goal) ?? 1) * (recent.includes(fingerprint(o)) ? 0.35 : 1))
    ?? pickOne(usable)

  return {
    title: GOAL_WORDS[chosen.goal],
    goal: chosen.goal,
    subject: chosen.subject,
    motion: chosen.motion,
    scene: chosen.scene,
    things: shuffled(THINGS.map(t => ({ emoji: t.emoji, one: t.one, many: t.many }))).slice(0, 5),
    max: rangeFor(stage, year, accuracy),
    rounds: tiny ? 5 : stage === 'primary' ? 6 : 8,
    intro: `${GOAL_WORDS[chosen.goal]} ${SCENE_WORDS[chosen.scene]}.`,
    tiny,
    source: 'composed',
  }
}

/* ── accepting one from the model ─────────────────────────────────────────── */

const isSubject = (v: unknown): v is Subject =>
  typeof v === 'string' && v in GOALS_FOR

/**
 * Read a spec the model wrote, refusing anything the engine could not play.
 *
 * Strict on the shape and forgiving on the dressing. A bad scene name becomes a
 * plain one; a goal that cannot teach the subject is refused outright, because
 * a game that cannot teach what the topic is about is not a game we want to
 * serve however nicely it is worded.
 *
 * The numbers are taken from the learner rather than the reply. The model is
 * not asked how hard to make it and is not trusted with it: the ceiling comes
 * from the year and the record, as it does everywhere else.
 */
export function readSpec(raw: unknown, floor: {
  max: number, rounds: number, tiny: boolean, things: Thing[],
}): GameSpec | null {
  if (!raw || typeof raw !== 'object') return null
  const m = raw as Record<string, unknown>

  if (!isSubject(m.subject)) return null
  const subject = m.subject
  const goal = m.goal
  if (typeof goal !== 'string' || !goalsFor(subject).includes(goal as Goal)) return null

  const motion = motionsFor(goal as Goal)
    .includes(m.motion as Motion) ? m.motion as Motion : 'still'
  /* An unknown scene is dressing we do not have, so it becomes one we do
     rather than a refusal. */
  const scene: Scene = SCENES.includes(m.scene as Scene) ? m.scene as Scene : 'yard'

  /* The model may name its own objects, which is most of where its value is:
     a game about loading a trotro or fetching water is one the grammar would
     never have invented. Capped, cleaned, and dropped back to the known list
     if nothing survives. */
  const things: Thing[] = Array.isArray(m.things)
    ? m.things
      .map(t => t as Record<string, unknown>)
      .filter(t => t && typeof t.emoji === 'string' && typeof t.one === 'string')
      .slice(0, 6)
      .map(t => ({
        /* One glyph. A "thing" that is a sentence breaks every layout. */
        emoji: [...String(t.emoji)].slice(0, 2).join(''),
        one: String(t.one).replace(/\s+/g, ' ').trim().slice(0, 20),
        many: String(t.many ?? t.one).replace(/\s+/g, ' ').trim().slice(0, 24),
      }))
      .filter(t => t.emoji && t.one)
    : []

  const text = (v: unknown, cap: number, fallback: string): string => {
    const s = typeof v === 'string' ? v.replace(/\s+/g, ' ').trim().slice(0, cap) : ''
    return s || fallback
  }

  return {
    title: text(m.title, 40, GOAL_WORDS[goal as Goal]),
    goal: goal as Goal,
    subject,
    motion,
    scene,
    things: things.length >= 2 ? things : floor.things,
    max: floor.max,
    rounds: floor.rounds,
    intro: text(m.intro, 120, GOAL_WORDS[goal as Goal] + '.'),
    tiny: floor.tiny,
    source: 'model',
  }
}

/** What a model-written spec is measured against, and falls back to. */
export function floorFor(stage: Stage, year: string, accuracy: number | null) {
  return {
    max: rangeFor(stage, year, accuracy),
    rounds: stage === 'creche' ? 5 : stage === 'primary' ? 6 : 8,
    tiny: stage === 'creche',
    things: shuffled(THINGS.map(t => ({ emoji: t.emoji, one: t.one, many: t.many }))).slice(0, 5),
  }
}

/* ── the protocol ─────────────────────────────────────────────────────────── */

export interface Setup {
  nx: 1
  type: 'setup'
  spec: GameSpec
}

export type FromGame =
  | { nx: 1, type: 'ready' }
  | { nx: 1, type: 'say', text: string }
  | { nx: 1, type: 'attempt', correct: boolean }
  | { nx: 1, type: 'done', right: number, rounds: number }

/**
 * Whether a message is one of ours, and shaped as it claims to be.
 *
 * Deliberately strict and deliberately dull. Everything arriving here came from
 * outside the app: today from a page in this repository, tomorrow possibly from
 * an engine export nobody here wrote. The caller has already checked which
 * frame it came from; this checks it says something we understand, with values
 * of the type it promises, before any of it is spoken aloud or written into a
 * child's record.
 */
export function fromGame(data: unknown): FromGame | null {
  if (!data || typeof data !== 'object') return null
  const m = data as Record<string, unknown>
  if (m.nx !== 1) return null

  switch (m.type) {
    case 'ready':
      return { nx: 1, type: 'ready' }

    case 'say': {
      /* Spoken, so flattened to one line and capped. A sentence is all a game
         ever has to say, and an unbounded string handed to a speech engine is
         a way to make a phone unresponsive. */
      if (typeof m.text !== 'string') return null
      const text = m.text.replace(/\s+/g, ' ').trim().slice(0, 160)
      return text ? { nx: 1, type: 'say', text } : null
    }

    case 'attempt':
      /* Not truthy: a round either was or was not answered correctly, and
         anything else is a bug that must not reach the mastery record. */
      if (typeof m.correct !== 'boolean') return null
      return { nx: 1, type: 'attempt', correct: m.correct }

    case 'done': {
      const right = Number(m.right)
      const rounds = Number(m.rounds)
      if (!Number.isFinite(right) || !Number.isFinite(rounds)) return null
      return {
        nx: 1,
        type: 'done',
        right: Math.max(0, Math.min(99, Math.round(right))),
        rounds: Math.max(0, Math.min(99, Math.round(rounds))),
      }
    }

    default:
      return null
  }
}

/** The one page that plays any spec. Same origin, then sandboxed into none. */
export const ENGINE_PATH = '/games/play.html'
