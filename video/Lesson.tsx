/**
 * A lesson video, as React.
 *
 * Every frame of the finished MP4 is this component rendered at one instant,
 * screenshotted by a headless browser and encoded by ffmpeg. Which is the whole
 * reason this exists: the text on screen is real DOM, so a number is the number
 * that was meant, an equation is set by KaTeX, and a label is spelt correctly.
 * No diffusion model can promise any of that.
 *
 * It renders on a CPU. On the machine this was built on, which has integrated
 * graphics and no CUDA, that is the difference between a platform that can make
 * video and one that cannot.
 *
 * Kept deliberately plain: type, colour, and things arriving one at a time.
 * A four year old counting mangoes needs each mango to land on its own beat far
 * more than it needs a camera move.
 */

import {
  AbsoluteFill, Audio, Sequence, staticFile,
  useCurrentFrame, useVideoConfig, interpolate,
} from 'remotion'
import katex from 'katex'
/* KaTeX emits the equation twice: once as HTML for sighted readers and once as
   MathML for screen readers, and its stylesheet is what hides the second copy.
   Without this import every equation rendered twice, one under the other, on
   the finished video. The app gets this via index.css; the video bundle is
   separate and needed its own. */
import 'katex/dist/katex.min.css'
import {
  FPS, STYLES, sceneSeconds,
  type Scene, type Storyboard, type StyleName,
} from '../src/lib/education/storyboard'

/**
 * Words the model sometimes sends where a picture belongs.
 *
 * It is asked for the emoji character and mostly sends it, but it wrote the
 * word "mango" five times in the first storyboard it produced. A four year old
 * counting mangoes cannot read the word, so a written one is not a smaller
 * version of the picture, it is nothing at all. Mapped rather than refused,
 * because the count is still right and the scene is still worth rendering.
 */
const AS_PICTURE: Record<string, string> = {
  mango: '🥭', mangoes: '🥭',
  banana: '🍌', bananas: '🍌',
  groundnut: '🥜', groundnuts: '🥜',
  fish: '🐟',
  egg: '🥚', eggs: '🥚',
  corn: '🌽', cob: '🌽', 'cob of corn': '🌽',
  tomato: '🍅', tomatoes: '🍅',
  ball: '⚽', balls: '⚽',
  orange: '🍊', oranges: '🍊',
  star: '⭐', stars: '⭐',
  stone: '🪨', stones: '🪨',
  leaf: '🍃', leaves: '🍃',
  cup: '🥤', cups: '🥤',
  book: '📗', books: '📗',
  pencil: '✏️', pencils: '✏️',
}

const asPicture = (item: string): string =>
  AS_PICTURE[item.trim().toLowerCase()] ?? item

/** Ease in, and never out: things arrive and stay, which is calmer to watch. */
function arrive(frame: number, at: number, over = 12): number {
  return interpolate(frame, [at, at + over], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
}

function Maths({ latex, size, colour }: { latex: string, size: number, colour: string }) {
  /* A malformed equation shows as its own source rather than as an error, the
     same rule the lesson pages follow. A video is rendered once and watched
     many times, so a red KaTeX error baked into every frame would be worse
     here than anywhere else in the product. */
  let html: string
  try {
    html = katex.renderToString(latex, { throwOnError: false, displayMode: true })
  } catch {
    html = ''
  }
  if (!html) {
    return <div style={{ fontSize: size, color: colour, fontFamily: 'monospace' }}>{latex}</div>
  }
  return (
    <div
      style={{ fontSize: size, color: colour }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

function OneScene({ scene, style }: { scene: Scene, style: StyleName }) {
  const frame = useCurrentFrame()
  const s = STYLES[style]
  const { back, ink, accent } = s.palette

  return (
    <AbsoluteFill
      style={{
        backgroundColor: back,
        color: ink,
        fontFamily: 'ui-sans-serif, system-ui, "Segoe UI", Roboto, sans-serif',
        padding: 90,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
      {scene.title && (
        <div
          style={{
            fontSize: s.titleSize,
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            marginBottom: 36,
            opacity: arrive(frame, 0),
          }}>
          {scene.title}
        </div>
      )}

      {/* One at a time, on a beat. This is how counting is taught: the third
          mango and the numeral 3 land together, so the word, the symbol and the
          amount are one event rather than three facts. */}
      {scene.items && (
        <div style={{ display: 'flex', gap: 28, alignItems: 'center', marginBottom: 30 }}>
          {scene.items.map((item, i) => (
            <div
              key={i}
              style={{
                fontSize: s.itemSize,
                opacity: arrive(frame, 14 + i * 18),
                transform: `scale(${0.8 + 0.2 * arrive(frame, 14 + i * 18)})`,
              }}>
              {asPicture(item)}
            </div>
          ))}
          {style === 'early' && (
            <div
              style={{
                fontSize: s.titleSize,
                fontWeight: 800,
                color: accent,
                marginLeft: 18,
                opacity: arrive(frame, 14 + (scene.items.length - 1) * 18),
              }}>
              {scene.items.length}
            </div>
          )}
        </div>
      )}

      {scene.maths && (
        <div style={{ margin: '10px 0 28px', opacity: arrive(frame, 18) }}>
          <Maths latex={scene.maths} size={s.itemSize * 0.6} colour={ink} />
        </div>
      )}

      {/* Working, revealed line by line, so a learner can follow a method
          rather than meet it finished. */}
      {scene.steps && (
        <div style={{ display: 'grid', gap: 14, marginBottom: 26, textAlign: 'left' }}>
          {scene.steps.map((step, i) => (
            <div
              key={i}
              style={{
                fontSize: s.saySize,
                opacity: arrive(frame, 20 + i * 24),
                color: i === scene.steps!.length - 1 ? accent : ink,
                fontWeight: i === scene.steps!.length - 1 ? 700 : 400,
              }}>
              {step}
            </div>
          ))}
        </div>
      )}

      {/* What is said, on screen as well as spoken, because a learner on a
          borrowed phone in a noisy room is reading rather than listening. */}
      <div
        style={{
          fontSize: s.saySize,
          lineHeight: 1.45,
          maxWidth: 1400,
          opacity: arrive(frame, 6),
        }}>
        {scene.say}
      </div>

      {scene.note && (
        <div
          style={{
            marginTop: 26,
            fontSize: s.saySize * 0.62,
            opacity: arrive(frame, 30) * 0.75,
          }}>
          {scene.note}
        </div>
      )}

      {/* The narration, if this machine had a voice. Inside the scene rather
          than laid over the whole film, so a line always starts with the scene
          it belongs to however the timings shift. */}
      {scene.audio && <Audio src={staticFile(scene.audio)} />}
    </AbsoluteFill>
  )
}

export const Lesson: React.FC<{ board: Storyboard }> = ({ board }) => {
  const { fps } = useVideoConfig()
  let at = 0
  return (
    <AbsoluteFill style={{ backgroundColor: STYLES[board.style].palette.back }}>
      {board.scenes.map((scene, i) => {
        const frames = Math.round(sceneSeconds(scene, board.style) * fps)
        const from = at
        at += frames
        return (
          <Sequence key={i} from={from} durationInFrames={frames}>
            <OneScene scene={scene} style={board.style} />
          </Sequence>
        )
      })}
    </AbsoluteFill>
  )
}

export { FPS }
