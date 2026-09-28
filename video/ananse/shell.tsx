/**
 * The parts of a lesson video that are the same in every lesson.
 *
 * ── Why this exists ──────────────────────────────────────────────────────────
 *
 * Counting 1 to 10 was built as one file: five painted scenes plus the canvas
 * host, the caption lookup, the music cues and the scene sequencing. That was
 * right for the first one, because until a thing exists twice you cannot know
 * which half of it is the pattern.
 *
 * It exists twice now, and the answer is that only the painting differs. Every
 * lesson has a classroom, Ananse, narration measured from the audio, a caption
 * under it, a note on each beat, a sting at each arrival, and a handover at the
 * end. None of that is worth writing again, and worse, writing it again means
 * nine slightly different caption lookups with nine copies of the off by one
 * bug that took a rendered frame to find.
 *
 * So a lesson is now: a list of lines to speak, a timeline built from how long
 * those lines take, and one painter per scene. Everything else is here.
 */

import React from 'react'
import {
  AbsoluteFill, Audio, Sequence, staticFile,
  useCurrentFrame, useVideoConfig,
} from 'remotion'

export const FPS = 30
export const frames = (seconds: number) => Math.round(seconds * FPS)

/**
 * Lines that have no audio, collected as timelines are built.
 *
 * Module level because a lesson's timeline is built once at import and the
 * warning has to reach the renderer, which never sees the builder.
 */
export const UNBAKED = new Set<string>()

/**
 * A rounded stack, not the games' Fredoka.
 *
 * The render runs in a headless browser on a worker machine that may have no
 * network, and a web font that fails to arrive is a video rendered in Times
 * New Roman with no way to tell until it is watched. System fonts cannot fail.
 */
export const FONT =
  '"Segoe UI Rounded", Nunito, ui-rounded, "Trebuchet MS", system-ui, sans-serif'

/* ── the shape of a lesson ─────────────────────────────────────────────────── */

export interface Cue {
  line: string
  /** Seconds from the start of its own scene. */
  at: number
  seconds: number
  key: string
}

/** The four Kenney steel drum stings, by what they are for. */
export type StingName = 'intro' | 'chime' | 'fanfare' | 'nudge'

export interface Sting { at: number, name: StingName }

export interface Scene {
  id: string
  seconds: number
  cues: Cue[]
  /**
   * Times at which a rising counting note plays, in order.
   *
   * The nth entry plays the nth note of the scale, so this is only for scenes
   * that count. A lesson about shapes leaves it out.
   */
  notes?: number[]
  stings?: Sting[]
  /** Whatever this lesson's painter needs. The shell never looks inside. */
  data?: Record<string, unknown>
}

export interface Lesson {
  id: string
  title: string
  scenes: Scene[]
  seconds: number
}

export type Painter = (
  ctx: CanvasRenderingContext2D, w: number, h: number, t: number, scene: Scene,
) => void

/* ── building a timeline from measured speech ──────────────────────────────── */

export interface Clip { key: string, seconds: number }

/**
 * A scene under construction.
 *
 * ── Why a builder and not a table of numbers ──────────────────────────────
 *
 * Because the numbers are not knowable until the voice has been recorded. A
 * line takes as long as it takes, and the next thing has to start after it,
 * so every time is the sum of everything before it. Written out by hand that
 * is a column of magic numbers that all shift the moment one line is
 * re-recorded.
 */
export class SceneBuilder {
  private t = 0
  readonly cues: Cue[] = []
  readonly notes: number[] = []
  readonly stings: Sting[] = []
  readonly data: Record<string, unknown> = {}

  constructor(
    readonly id: string,
    private readonly clips: Record<string, Clip>,
  ) {}

  /** The clock, in seconds from the start of this scene. */
  get now() { return this.t }

  /** Move the clock on without saying anything. */
  wait(seconds: number) { this.t += seconds; return this }

  /** Put the clock at an exact moment. */
  at(seconds: number) { this.t = seconds; return this }

  private clip(line: string): Clip {
    const c = this.clips[line]
    if (c) return c

    /**
     * A line with no audio yet.
     *
     * ── Why this guesses instead of throwing ──────────────────────────────
     *
     * It used to throw, which meant a lesson could not be imported, which
     * meant its timeline had never once been executed and its painters had
     * never once been run. Nine lessons reached that state at the same time,
     * all of them verified by nothing but the compiler, and the only way to
     * find a crash in any of them was to spend the narration budget first and
     * look afterwards. That is exactly the wrong order to find out.
     *
     * So an unbaked line becomes a silent placeholder of roughly the length it
     * will be when spoken, and the lesson renders as a preview.
     *
     * The estimate is fitted to the eighteen clips that have actually been
     * recorded: 0.054 seconds a character plus half a second of fixed cost for
     * the breath at the start and the stop at the end. It was first written by
     * hand as one character every seventh of a second, which turned out to be
     * two and a half times too slow, and every preview came out at two to three
     * minutes instead of one. Guessing at a number that has already been
     * measured is how that happens.
     *
     * Nothing about this makes an unbaked lesson shippable. The placeholder
     * carries no audio key so no sound plays, `LessonVideo` stamps a red band
     * across every frame, and `tools/lesson-check.mjs` still fails the lesson
     * outright. It is a way to look, not a way to publish.
     */
    UNBAKED.add(line)
    return { key: '', seconds: Math.max(0.6, line.length * 0.0538 + 0.506) }
  }

  /** Speak a line here, and move the clock past it plus `gap`. */
  say(line: string, gap = 0) {
    const c = this.clip(line)
    this.cues.push({ line, at: this.t, ...c })
    this.t += c.seconds + gap
    return this
  }

  /** Speak a line here without moving the clock, for things said over action. */
  under(line: string) {
    this.cues.push({ line, at: this.t, ...this.clip(line) })
    return this
  }

  /** A counting beat: the line, its note, and the beat time recorded. */
  beat(line: string, least = 1.15) {
    const c = this.clip(line)
    this.cues.push({ line, at: this.t, ...c })
    this.notes.push(this.t)
    this.t += Math.max(c.seconds + 0.3, least)
    return this
  }

  sting(name: StingName, at = this.t) {
    this.stings.push({ at, name })
    return this
  }

  set(key: string, value: unknown) { this.data[key] = value; return this }

  build(): Scene {
    return {
      id: this.id,
      seconds: this.t,
      cues: this.cues,
      notes: this.notes.length ? this.notes : undefined,
      stings: this.stings.length ? this.stings : undefined,
      data: this.data,
    }
  }
}

export function lesson(
  id: string, title: string, scenes: Scene[],
): Lesson {
  return { id, title, scenes, seconds: scenes.reduce((n, s) => n + s.seconds, 0) }
}

/** Where each scene starts, in seconds from the top. */
export function starts(l: Lesson): number[] {
  const out: number[] = []
  let t = 0
  for (const s of l.scenes) { out.push(t); t += s.seconds }
  return out
}

/* ── the canvas ────────────────────────────────────────────────────────────── */

export const Stage: React.FC<{
  paint: (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => void
}> = ({ paint }) => {
  const frame = useCurrentFrame()
  const { width, height, fps } = useVideoConfig()
  const ref = React.useRef<HTMLCanvasElement>(null)

  /* Layout, not effect: this has to have run before the frame is captured, and
     a plain effect is allowed to be late. */
  React.useLayoutEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, width, height)
    paint(ctx, width, height, frame / fps)
  })

  return (
    <canvas
      ref={ref}
      width={width}
      height={height}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  )
}

/* ── captions ──────────────────────────────────────────────────────────────── */

/**
 * The line being said, burned across the bottom.
 *
 * ── The bug this has already had ──────────────────────────────────────────
 *
 * It takes the LATEST line that has started, not the first one still inside
 * its window. On a fast counting beat the windows overlap, and taking the
 * first match meant the board read six, the ring was on the sixth object, and
 * the caption underneath said "Five.". Written once here so it cannot be got
 * wrong again in the next eight lessons.
 */
export const Caption: React.FC<{ scene: Scene }> = ({ scene }) => {
  const frame = useCurrentFrame()
  const t = frame / FPS
  let cue: Cue | undefined
  for (const c of scene.cues) {
    if (t >= c.at && t < c.at + c.seconds + 0.34) cue = c
  }
  if (!cue) return null
  return (
    <AbsoluteFill style={{ justifyContent: 'flex-end', alignItems: 'center', padding: '0 6%' }}>
      <div
        style={{
          marginBottom: '4.5%',
          padding: '0.55em 1.1em',
          borderRadius: 999,
          background: 'rgba(16,42,66,0.72)',
          color: '#ffffff',
          fontFamily: FONT,
          fontSize: 34,
          fontWeight: 600,
          textAlign: 'center',
          lineHeight: 1.25,
          maxWidth: '86%',
        }}
      >
        {cue.line}
      </div>
    </AbsoluteFill>
  )
}

/* ── music ─────────────────────────────────────────────────────────────────── */

/**
 * A note per counting beat, and a sting at each arrival.
 *
 * ── Why the notes climb ───────────────────────────────────────────────────
 *
 * The pitch rises with the count, which is what every counting song a child
 * has heard does and the reason they work: "how many" and "how high" become
 * the same sensation. C major pentatonic, so no two notes can clash however
 * fast anything happens.
 */
export const Music: React.FC<{ scene: Scene }> = ({ scene }) => (
  <>
    {(scene.notes || []).map((at, i) => (
      <Sequence key={`note-${i}`} from={frames(at)} durationInFrames={frames(1.1) + 2}>
        <Audio
          src={staticFile(`ananse/music/count-${String(Math.min(i + 1, 10)).padStart(2, '0')}.wav`)}
          volume={0.48}
        />
      </Sequence>
    ))}
    {(scene.stings || []).map((s, i) => (
      <Sequence key={`sting-${i}`} from={frames(s.at)} durationInFrames={frames(1.8) + 2}>
        <Audio src={staticFile(`ananse/music/${s.name}.mp3`)} volume={0.52} />
      </Sequence>
    ))}
  </>
)

/* ── the whole thing ───────────────────────────────────────────────────────── */

const SceneView: React.FC<{ scene: Scene, paint: Painter }> = ({ scene, paint }) => (
  <AbsoluteFill>
    <Stage paint={(ctx, w, h, t) => paint(ctx, w, h, t, scene)} />
    {scene.cues.filter(c => c.key).map((cue, i) => (
      <Sequence
        key={`${cue.line}-${i}`}
        from={frames(cue.at)}
        durationInFrames={frames(cue.seconds) + 2}
      >
        <Audio src={staticFile(`games/voice/${cue.key}.mp3`)} />
      </Sequence>
    ))}
    <Music scene={scene} />
    <Caption scene={scene} />
  </AbsoluteFill>
)

/**
 * A lesson video.
 *
 * `painters` is keyed by scene id. A scene with no painter draws nothing,
 * which is a loud enough failure to notice on the first render.
 */
export const LessonVideo: React.FC<{
  lesson: Lesson
  painters: Record<string, Painter>
}> = ({ lesson: l, painters }) => {
  const at = starts(l)
  const silent = l.scenes.some(s => s.cues.some(c => !c.key))
  return (
    <AbsoluteFill style={{ backgroundColor: '#1b2b1b' }}>
      {l.scenes.map((scene, i) => (
        <Sequence
          key={`${scene.id}-${i}`}
          from={frames(at[i])}
          durationInFrames={frames(scene.seconds)}
        >
          <SceneView scene={scene} paint={painters[scene.id] || (() => {})} />
        </Sequence>
      ))}
      {/**
        * Unmistakable, on every frame, when any line is unbaked.
        *
        * A preview with estimated timings and no voice looks very like a
        * finished video in a thumbnail, and the whole point of previewing is
        * to look at it, so the warning has to survive being looked at.
        */}
      {silent && (
        <AbsoluteFill style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
          <div
            style={{
              marginTop: 10,
              padding: '0.3em 1.2em',
              borderRadius: 999,
              background: '#c4241a',
              color: '#ffffff',
              fontFamily: FONT,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            PREVIEW, NOT BAKED: timings estimated, no voice
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  )
}
