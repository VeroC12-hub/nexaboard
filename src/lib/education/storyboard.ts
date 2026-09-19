/**
 * A lesson video, as data.
 *
 * ── Why a storyboard and not a prompt ────────────────────────────────────────
 *
 * Every diffusion video model shares one disqualifying limit for teaching: it
 * cannot write. Ask Wan, Kling or Pika for "count the mangoes, one, two, three"
 * and you get pretty footage with nonsense glyphs where the numbers should be.
 * That rules them out of exactly the rows a school cares about: animated
 * diagrams, worked examples, anything counted or labelled.
 *
 * So the video is not generated as pixels. Claude writes a storyboard, which is
 * plain data, and Remotion renders it: React components, a headless browser,
 * real DOM. Every number, every label and every equation is therefore exactly
 * what was intended, because it is text in a page rather than a guess at what
 * text looks like.
 *
 * It also renders on a CPU, which is the difference between a video this
 * platform can make and one it cannot: the machine this was built on has
 * integrated graphics and no CUDA.
 *
 * ── Every stage gets a different film ───────────────────────────────────────
 *
 * A four year old and a university student do not need the same video, and the
 * difference is not decoration:
 *
 *   creche   one idea, enormous type, objects appearing one at a time, counted
 *            out loud, ending by handing over to a game
 *   primary  an animated diagram with a character narrating, still one idea
 *   jhs/shs  an explainer: the question, the method worked line by line, the trap
 *   tvet     the same, with the quantity being a real workshop quantity
 *   uni      technical, dense, no hand holding, derivation on screen
 *
 * `STYLES` below is that table, and it is what `api/prompt.js` hands the model
 * so a storyboard for KG cannot come back looking like a lecture.
 */

import type { Stage } from './learner'

/** What one scene puts on screen. */
export interface Scene {
  /**
   * What is said over it, which is also the subtitle.
   *
   * Written to be spoken: short sentences, no parentheses, no symbols that
   * cannot be read aloud. A narrator that has to say "open bracket" has been
   * handed the wrong script.
   */
  say: string
  /** Seconds. The renderer gives a scene at least as long as its narration. */
  seconds: number
  /**
   * The heading, large and brief. Real text, so it may carry a number, a word
   * or an equation and be trusted.
   */
  title?: string
  /**
   * What appears, in order, one at a time.
   *
   * For the youngest this is how counting is shown: three mangoes arriving one
   * per beat, with the count rising beside them, which is the whole lesson.
   */
  items?: string[]
  /** Inline maths, rendered by KaTeX, so it is correct rather than drawn. */
  maths?: string
  /** Lines of working, revealed one at a time, for a worked example. */
  steps?: string[]
  /** A caption under everything, small. */
  note?: string

  /**
   * The narration, once it has been spoken to a file.
   *
   * A path relative to Remotion's public folder, filled in by the worker after
   * the storyboard is written and before it is rendered. Absent when the
   * machine has no voice, in which case the scene still shows its subtitle.
   */
  audio?: string
  /** How long that file runs, so the scene can be at least that long. */
  audioSeconds?: number
}

export interface Storyboard {
  topicId: string
  topic: string
  /** Which of the five films this is, from the stage. */
  style: keyof typeof STYLES
  scenes: Scene[]
}

export const STYLES = {
  early: {
    stages: ['creche'] as Stage[],
    /** Very large type, almost no words, one idea, objects counted in. */
    titleSize: 92,
    saySize: 44,
    itemSize: 120,
    palette: { back: '#fffbe9', ink: '#14243a', accent: '#f2b517' },
    maxScenes: 4,
    secondsEach: 5,
  },
  child: {
    stages: ['primary'] as Stage[],
    titleSize: 68,
    saySize: 34,
    itemSize: 84,
    palette: { back: '#f4fbf6', ink: '#14243a', accent: '#0f8a4d' },
    maxScenes: 6,
    secondsEach: 6,
  },
  school: {
    stages: ['jhs', 'shs'] as Stage[],
    titleSize: 54,
    saySize: 28,
    itemSize: 56,
    palette: { back: '#f7f9f6', ink: '#16233d', accent: '#0f8a4d' },
    maxScenes: 8,
    secondsEach: 8,
  },
  trade: {
    stages: ['tvet'] as Stage[],
    titleSize: 54,
    saySize: 28,
    itemSize: 56,
    palette: { back: '#f8f7f3', ink: '#1d2430', accent: '#c8433a' },
    maxScenes: 8,
    secondsEach: 8,
  },
  advanced: {
    stages: ['uni'] as Stage[],
    titleSize: 46,
    saySize: 24,
    itemSize: 48,
    palette: { back: '#ffffff', ink: '#101828', accent: '#2d7ff9' },
    maxScenes: 10,
    secondsEach: 9,
  },
} as const

export type StyleName = keyof typeof STYLES

export function styleFor(stage: Stage): StyleName {
  for (const [name, s] of Object.entries(STYLES)) {
    if ((s.stages as Stage[]).includes(stage)) return name as StyleName
  }
  return 'school'
}

/** Frames per second. Low on purpose: this is type and diagrams, not footage. */
export const FPS = 30

/** The longest a lesson video may be. Past this nobody is watching. */
export const MAX_SECONDS = 90

/**
 * How long the whole thing runs.
 *
 * A scene is never shorter than its narration needs, at a deliberately slow
 * reading speed, because the commonest fault in generated video is text that
 * disappears before a child has finished reading it.
 */
const WORDS_PER_SECOND = 2.2

export function sceneSeconds(scene: Scene, style: StyleName): number {
  const asked = Number(scene.seconds) || STYLES[style].secondsEach

  /* When the line has actually been spoken, its real length decides. Estimating
     from the word count was wrong by a second or more either way, which either
     cut the voice off mid sentence or left the scene sitting in silence. */
  const spoken = Number(scene.audioSeconds) || 0
  if (spoken > 0) return Math.max(asked, spoken + 0.7, 2)

  const words = scene.say.trim().split(/\s+/).filter(Boolean).length
  const needed = words / WORDS_PER_SECOND + 0.8
  return Math.max(asked, needed, 2)
}

export function totalSeconds(board: Storyboard): number {
  const sum = board.scenes.reduce((n, s) => n + sceneSeconds(s, board.style), 0)
  return Math.min(MAX_SECONDS, Math.round(sum))
}

/* ── reading one back ─────────────────────────────────────────────────────── */

const clean = (v: unknown, max: number): string =>
  typeof v === 'string' ? v.trim().replace(/\s+/g, ' ').slice(0, max) : ''

/**
 * Put back the backslashes JSON ate.
 *
 * In JSON a lone backslash before f is not two characters, it is one: a form
 * feed. Models write \\frac with a single backslash constantly, and the result
 * arrives as an invisible control character followed by "rac". KaTeX then
 * renders the wreckage in red, which is what happened to the first worked
 * example this rendered: a red arrow and the literal text "rac{240}{8} = 30".
 *
 * It arrives two ways, and only one of them is obvious:
 *
 *   1. As invalid JSON, when the control character sits raw in the source.
 *      JSON.parse throws, so nothing is salvaged unless the source is repaired
 *      before parsing.
 *   2. As perfectly valid JSON, when whatever produced it escaped the control
 *      character properly. The parse succeeds and the damage is already inside
 *      the value, silent and invisible.
 *
 * The second is the dangerous one, because everything downstream looks healthy.
 * So both are repaired: the source before parsing, and the value after.
 *
 * Nothing legitimate is lost either way. A form feed has no business in a
 * lesson, and every character here is unambiguous about which escape produced
 * it.
 */
/* Matching control characters is the whole purpose of this table: they are
   what a mangled LaTeX escape becomes, and they cannot be found without
   being named. */
/* eslint-disable no-control-regex */
const MANGLED: Array<[RegExp, string]> = [
  [/\u000c/g, 'f'],   // \\frac, \\forall
  [/\u0008/g, 'b'],   // \\begin, \\binom
  [/\u000b/g, 'v'],   // \\vec
  [/\r/g, 'r'],       // \\right, \\rho
  [/\t/g, 't'],       // \\times, \\theta, \\text
]
/* eslint-enable no-control-regex */

/** For the JSON source: the replacement must survive being parsed. */
function repairJson(json: string): string {
  let out = json
  for (const [bad, letter] of MANGLED) out = out.replace(bad, '\\\\' + letter)
  return out
}

/** For a value already parsed: the backslash goes in directly. */
function repairLatex(latex: string): string {
  let out = latex
  for (const [bad, letter] of MANGLED) out = out.replace(bad, '\\' + letter)
  return out
}

const list = (v: unknown, max: number, each: number): string[] =>
  Array.isArray(v)
    ? v.map(x => clean(x, each)).filter(Boolean).slice(0, max)
    : []

/**
 * Pull a storyboard out of what the model returned.
 *
 * Same tolerance as everywhere else, and the same refusal: a half storyboard
 * would render a video with a missing scene, which is worse than no video.
 * Returns null unless there is at least one scene that actually says something.
 */
export function readStoryboard(
  text: string,
  topicId: string,
  topic: string,
  style: StyleName,
): Storyboard | null {
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  if (start === -1 || end <= start) return null

  const source = text.slice(start, end + 1)

  /* Parsed as it came first. A control character inside a JSON string is
     illegal, so under-escaped LaTeX does not merely arrive damaged, it makes
     the whole parse throw, and repairing afterwards would be too late.
     Repairing before would corrupt the tabs and newlines that are legal
     whitespace BETWEEN tokens, so the repair only runs on the failure. */
  let parsed: unknown
  try {
    parsed = JSON.parse(source)
  } catch {
    try {
      parsed = JSON.parse(repairJson(source))
    } catch {
      return null
    }
  }

  const raw = (parsed as { scenes?: unknown }).scenes
  if (!Array.isArray(raw)) return null

  const limit = STYLES[style].maxScenes
  const scenes: Scene[] = []
  for (const row of raw.slice(0, limit)) {
    if (!row || typeof row !== 'object') continue
    const o = row as Record<string, unknown>
    const say = clean(o.say, 400)
    if (!say) continue
    scenes.push({
      say,
      seconds: Number(o.seconds) || STYLES[style].secondsEach,
      title: clean(o.title, 90) || undefined,
      items: list(o.items, 10, 24).length ? list(o.items, 10, 24) : undefined,
      /* Repaired after parsing too: valid JSON can carry a properly escaped
         form feed, and then the parse succeeds and the equation is already
         ruined. That is the case that broke the first video. */
      maths: (typeof o.maths === 'string'
        ? clean(repairLatex(o.maths), 200)
        : '') || undefined,
      steps: list(o.steps, 6, 120).length ? list(o.steps, 6, 120) : undefined,
      note: clean(o.note, 160) || undefined,
      /* Set by the worker after the voice has been recorded, never by the
         model, so a storyboard cannot ask for an arbitrary file to be played. */
      audio: undefined,
      audioSeconds: undefined,
    })
  }
  if (!scenes.length) return null
  return { topicId, topic, style, scenes }
}
