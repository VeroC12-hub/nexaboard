/**
 * Circle, Square, Triangle and Rectangle: what each scene looks like.
 *
 * One painter per scene. The classroom, the blackboard, the rig and the chalk
 * all live in `../../draw`. What is here is only what is true of this lesson.
 *
 * ── Why a property is demonstrated and never merely stated ───────────────────
 *
 * "A square has four sides" is a sentence a four year old can repeat back
 * without having looked at anything. Four marks appearing one at a time along
 * four edges is a thing they have to watch, and at the end the four marks are
 * visibly the same length, which is the half of the definition that the
 * sentence leaves out and the half that separates a square from a rectangle.
 * Every scene below exists to put the property on the screen rather than in
 * the narration.
 */

import React from 'react'
import { LessonVideo, FONT, type Painter } from '../../shell'
import {
  backdrop, blackboard, boardRect, fieldRect, himAt, poseRig,
  chalk, shape, inked, LINE, type RigEvent,
} from '../../draw'
import { SHAPES_LESSON, type Step } from './lesson'

/* ── the four, and how they are built ──────────────────────────────────────── */

const FILL: Record<string, string> = {
  circle: '#e8543c', square: '#3f9ede', triangle: '#6cbf42', rect: '#f2c33b',
}

const WORD: Record<string, string> = {
  circle: 'CIRCLE', square: 'SQUARE', triangle: 'TRIANGLE', rect: 'RECTANGLE',
}

const FACT: Record<string, string> = {
  circle: 'no corners', square: '4 sides, all the same',
  triangle: '3 corners', rect: '2 long, 2 short',
}

/**
 * The kit's own proportions, written out again.
 *
 * `kit.shape` draws circle, square and triangle, and the lesson draws them
 * with it so the shape a child meets here is the same object the puzzle game
 * hands them. But a mark laid along an edge has to sit exactly on that edge,
 * and the kit does not expose where its edges are, so the numbers below mirror
 * `SHAPES` in `public/ananse/kit.js` exactly. If those ever move, the ticks
 * come off the outline and it is obvious in one frame.
 */
const SQ = 0.82
const TRI_X = 0.92
const TRI_Y = 0.72

/**
 * The rectangle, which the kit has no entry for.
 *
 * Two to one, because the point of this lesson is the contrast with the
 * square and a lazy rectangle that is only slightly wide reads as a squashed
 * square. Its long sides are twice its short ones and a child can see that
 * without being told.
 */
const RECT_W = 1.45
const RECT_H = 0.72

type Pt = [number, number]

/** The corners of a shape, in the order the lesson counts them. */
function cornersOf(kind: string, x: number, y: number, r: number): Pt[] {
  if (kind === 'triangle') {
    return [
      [x, y - r], [x + TRI_X * r, y + TRI_Y * r], [x - TRI_X * r, y + TRI_Y * r],
    ]
  }
  const hw = (kind === 'rect' ? RECT_W : SQ) * r
  const hh = (kind === 'rect' ? RECT_H : SQ) * r
  return [
    [x - hw, y - hh], [x + hw, y - hh], [x + hw, y + hh], [x - hw, y + hh],
  ]
}

/** The path of a shape, for glows, holes and outlines. */
function pathOf(
  ctx: CanvasRenderingContext2D, kind: string, x: number, y: number, r: number,
) {
  ctx.beginPath()
  if (kind === 'circle') { ctx.arc(x, y, r, 0, Math.PI * 2); return }
  if (kind === 'triangle') {
    const c = cornersOf(kind, x, y, r)
    ctx.moveTo(c[0][0], c[0][1])
    ctx.lineTo(c[1][0], c[1][1])
    ctx.lineTo(c[2][0], c[2][1])
    ctx.closePath()
    return
  }
  const hw = (kind === 'rect' ? RECT_W : SQ) * r
  const hh = (kind === 'rect' ? RECT_H : SQ) * r
  ctx.roundRect(x - hw, y - hh, hw * 2, hh * 2, r * 0.1)
}

/** One shape, filled and inked, the same way the games draw theirs. */
function drawShape(
  ctx: CanvasRenderingContext2D, kind: string, x: number, y: number, r: number,
) {
  if (kind !== 'rect') { shape(ctx, kind, x, y, r, FILL[kind]); return }
  pathOf(ctx, kind, x, y, r)
  inked(ctx, FILL.rect, 3.5)
  /* The kit puts one highlight top left on everything it draws. The rectangle
     is drawn here rather than there, so it has to be given the same light or
     it sits in the row looking like a sticker among toys. */
  ctx.save()
  ctx.globalAlpha = 0.28
  ctx.fillStyle = '#ffffff'
  ctx.beginPath()
  ctx.ellipse(x - RECT_W * r * 0.42, y - RECT_H * r * 0.46,
    r * 0.34, r * 0.16, -0.5, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

/**
 * The socket a shape drops into, for the handover.
 *
 * The kit draws one with `hole: true`, but only for shapes it knows, and it
 * does not know the rectangle. Four holes where three come from one routine
 * and one from another would not match, so all four come from here.
 */
function holeOf(
  ctx: CanvasRenderingContext2D, kind: string, x: number, y: number, r: number,
) {
  ctx.save()
  pathOf(ctx, kind, x, y, r)
  ctx.fillStyle = 'rgba(60,36,14,0.55)'
  ctx.fill()
  ctx.clip()
  ctx.fillStyle = 'rgba(255,255,255,0.22)'
  ctx.fillRect(x - r * 2, y + r * 0.45, r * 4, r * 0.9)
  ctx.restore()
}

/* ── small drawing helpers ─────────────────────────────────────────────────── */

const clamp = (v: number) => Math.max(0, Math.min(1, v))
const rise = (t: number, at: number, over = 0.34) => clamp((t - at) / over)

/**
 * The scale of something arriving.
 *
 * It overshoots and settles rather than fading up. A shape that fades in has
 * no moment of arrival, and the moment of arrival is what makes a child look
 * back at the screen.
 */
const grow = (p: number) => (p >= 1 ? 1 : 0.35 + 0.65 * p + Math.sin(p * Math.PI) * 0.12)

/** A mark laid along one edge, drawn out from its middle. */
function edgeBar(
  ctx: CanvasRenderingContext2D, a: Pt, b: Pt, width: number,
  colour: string, open: number,
) {
  if (open <= 0) return
  const mx = (a[0] + b[0]) / 2
  const my = (a[1] + b[1]) / 2
  /* Pulled in a little at both ends so the corners stay visible: a bar that
     runs corner to corner hides the very thing the next shape is about. */
  const k = 0.86 * open
  ctx.save()
  ctx.strokeStyle = colour
  ctx.lineWidth = width
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(mx + (a[0] - mx) * k, my + (a[1] - my) * k)
  ctx.lineTo(mx + (b[0] - mx) * k, my + (b[1] - my) * k)
  ctx.stroke()
  ctx.restore()
}

/** A numeral with a dark keyline, readable over any fill. */
function tag(
  ctx: CanvasRenderingContext2D, text: string, x: number, y: number,
  size: number, colour = '#ffd93b', alpha = 1,
) {
  if (alpha <= 0) return
  ctx.save()
  ctx.globalAlpha = clamp(alpha)
  ctx.font = `700 ${Math.round(size)}px ${FONT}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.lineJoin = 'round'
  ctx.miterLimit = 2
  ctx.strokeStyle = LINE()
  ctx.lineWidth = size * 0.26
  ctx.strokeText(text, x, y)
  ctx.fillStyle = colour
  ctx.fillText(text, x, y)
  ctx.restore()
}

/** The push away from the middle that keeps a label off the shape. */
function outward(from: Pt, x: number, y: number, by: number): Pt {
  const dx = from[0] - x
  const dy = from[1] - y
  const len = Math.hypot(dx, dy) || 1
  return [from[0] + (dx / len) * by, from[1] + (dy / len) * by]
}

/** The floor band, and the middle of it, which is where a shape stands. */
const stage = (w: number, h: number) => {
  const f = fieldRect(w, h)
  return { cy: f.y + f.h * 0.42, r: f.h * 0.45, f }
}

/* ── 1. he introduces the four ─────────────────────────────────────────────── */

const intro: Painter = (ctx, w, h, t, scene) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)

  /* Written on rather than already there, so the first seconds have something
     moving in them while he is still saying hello. */
  const on = clamp((t - 0.5) / 1.1)
  chalk(ctx, 'Four Shapes', board.x + board.w / 2, board.y + board.h * 0.42,
    board.h * 0.26, FONT, on)
  if (on > 0.05) {
    const line = board.w * 0.46 * on
    ctx.save()
    ctx.globalAlpha = 0.75 * on
    ctx.strokeStyle = '#f4f1e6'
    ctx.lineWidth = Math.max(3, board.h * 0.022)
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(board.x + board.w / 2 - line / 2, board.y + board.h * 0.66)
    ctx.lineTo(board.x + board.w / 2 + line / 2, board.y + board.h * 0.66)
    ctx.stroke()
    ctx.restore()
  }

  /* They land left to right in the order he says them, one every third of a
     second, which is about the pace of the sentence. */
  const row = (scene.data?.row as number) ?? 1e9
  const { f } = stage(w, h)
  const cy = f.y + f.h * 0.45
  const r = f.h * 0.27
  const xs = [0.34, 0.50, 0.66, 0.82]
  const kinds = ['circle', 'square', 'triangle', 'rect']
  for (let i = 0; i < 4; i++) {
    const p = rise(t, row + i * 0.33, 0.3)
    if (p <= 0) continue
    drawShape(ctx, kinds[i], w * xs[i], cy, r * grow(p))
  }

  /* Beside the shapes, not on top of them, so he is small here rather than
     centre stage: the four are the thing being introduced, he is the one
     doing the introducing. */
  const him = himAt(w, h)
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.5, h * 0.5] },
    { at: 0.45, hop: 240 },
    { at: row, look: [w * 0.55, cy], hop: 170 },
  ])
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

/* ── 2. one shape at a time, proving its own property ──────────────────────── */

const teach: Painter = (ctx, w, h, t, scene) => {
  const steps = (scene.data?.steps || []) as Step[]
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)

  let step: Step | undefined
  for (const s of steps) if (t >= s.at) step = s
  if (!step) return

  const since = t - step.at
  const { cy, r: base } = stage(w, h)
  const cx = w * 0.56
  const r = base * grow(rise(t, step.at, 0.36))

  /* The name goes up with the shape and the property under it a beat later,
     so the board reads as a caption to what is happening rather than a list
     the child is meant to have read first. */
  chalk(ctx, WORD[step.kind], board.x + board.w / 2, board.y + board.h * 0.4,
    board.h * 0.27, FONT, clamp(since / 0.5))
  chalk(ctx, FACT[step.kind], board.x + board.w / 2, board.y + board.h * 0.76,
    board.h * 0.15, FONT, clamp((since - 1.2) / 0.7) * 0.9)

  drawShape(ctx, step.kind, cx, cy, r)

  const heavy = Math.max(6, r * 0.11)
  const corners = cornersOf(step.kind, cx, cy, r)

  /**
   * A circle: a dot runs the whole way round and never turns.
   *
   * Nothing is marked, because there is nothing to mark, and that absence is
   * the lesson. The trail is what makes it land: by the time the dot gets
   * home there is an unbroken ring behind it with no kink anywhere in it.
   */
  if (step.kind === 'circle' && step.run !== undefined && step.runEnd !== undefined) {
    const p = clamp((t - step.run) / Math.max(0.3, step.runEnd - step.run))
    if (p > 0) {
      const a0 = -Math.PI / 2
      const a1 = a0 + p * Math.PI * 2
      ctx.save()
      ctx.strokeStyle = '#ffd93b'
      ctx.lineWidth = heavy
      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.arc(cx, cy, r, a0, a1)
      ctx.stroke()
      ctx.restore()
      const dx = cx + Math.cos(a1) * r
      const dy = cy + Math.sin(a1) * r
      ctx.beginPath()
      ctx.arc(dx, dy, r * 0.13, 0, Math.PI * 2)
      inked(ctx, '#fffaf0', 3)
      /* Home again: the ring breathes once so the lap has an ending. */
      if (p >= 1) {
        const pulse = Math.sin((t - step.runEnd) * 3.4)
        ctx.save()
        ctx.globalAlpha = 0.35 + 0.25 * pulse
        ctx.strokeStyle = '#ffd93b'
        ctx.lineWidth = heavy * 0.8
        ctx.beginPath()
        ctx.arc(cx, cy, r * (1.22 + 0.04 * pulse), 0, Math.PI * 2)
        ctx.stroke()
        ctx.restore()
      }
    }
  }

  /**
   * A square: each side gets a bar, and the bars stay.
   *
   * Cumulative on purpose. One bar at a time that vanishes again teaches
   * counting to four; four bars sitting there at the end teaches that the
   * four are the same length, which is the fact the rectangle will break.
   */
  if (step.kind === 'square' && step.marks) {
    for (let i = 0; i < step.marks.length; i++) {
      const p = rise(t, step.marks[i], 0.26)
      if (p <= 0) continue
      const a = corners[i]
      const b = corners[(i + 1) % corners.length]
      edgeBar(ctx, a, b, heavy, '#ffd93b', p)
      const mid: Pt = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
      const at = outward(mid, cx, cy, r * 0.34)
      tag(ctx, String(i + 1), at[0], at[1], r * 0.4, '#ffd93b', p)
    }
  }

  /* A triangle: each corner gets a peg and a number, and they stay for the
     same reason the square's bars do. */
  if (step.kind === 'triangle' && step.marks) {
    for (let i = 0; i < step.marks.length; i++) {
      const p = rise(t, step.marks[i], 0.26)
      if (p <= 0) continue
      const c = corners[i]
      ctx.save()
      ctx.globalAlpha = p
      ctx.beginPath()
      ctx.arc(c[0], c[1], r * 0.15 * (0.6 + 0.4 * p), 0, Math.PI * 2)
      inked(ctx, '#ffd93b', 3.5)
      ctx.restore()
      const at = outward(c, cx, cy, r * 0.42)
      tag(ctx, String(i + 1), at[0], at[1], r * 0.4, '#ffd93b', p)
    }
  }

  /**
   * A rectangle: the long pair in one colour, the short pair in another.
   *
   * Two colours rather than two numbers, because the child is not being asked
   * how many sides there are here, they already know that from the square.
   * They are being asked to see that the four split into two kinds, and a
   * colour does that in one glance where a label would have to be read.
   */
  if (step.kind === 'rect') {
    const longP = step.long === undefined ? 0 : rise(t, step.long, 0.3)
    const shortP = step.short === undefined ? 0 : rise(t, step.short, 0.3)
    edgeBar(ctx, corners[0], corners[1], heavy, '#3f9ede', longP)
    edgeBar(ctx, corners[2], corners[3], heavy, '#3f9ede', longP)
    edgeBar(ctx, corners[1], corners[2], heavy, '#e0679f', shortP)
    edgeBar(ctx, corners[3], corners[0], heavy, '#e0679f', shortP)
  }

  const him = himAt(w, h)
  const events: RigEvent[] = [{ at: 0, mood: 'hello', look: [cx, cy] }]
  for (const s of steps) events.push({ at: s.at, look: [cx, cy], hop: 150 })
  const rig = poseRig(ctx, t, events)
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

/* ── 3. the square and the rectangle, side by side ─────────────────────────── */

const practise: Painter = (ctx, w, h, t, scene) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)
  chalk(ctx, 'Which is which?', board.x + board.w / 2, board.y + board.h * 0.5,
    board.h * 0.24, FONT, clamp(t / 0.6) * 0.95)

  const { cy, r: base } = stage(w, h)
  const r = base * 0.96
  const sqX = w * 0.37
  const reX = w * 0.72
  const sq = (scene.data?.sq as number) ?? 1e9
  const re = (scene.data?.re as number) ?? 1e9

  /* Named above rather than below. Under them is where the caption band and
     the floor shadow are, and a word down there is read as belonging to the
     sentence being spoken instead of to the shape. */
  tag(ctx, 'SQUARE', sqX, cy - r * 1.28, r * 0.24, '#fffaf0')
  tag(ctx, 'RECTANGLE', reX, cy - r * 1.28, r * 0.24, '#fffaf0')

  drawShape(ctx, 'square', sqX, cy, r)
  drawShape(ctx, 'rect', reX, cy, r)

  const heavy = Math.max(6, r * 0.11)
  const sc = cornersOf('square', sqX, cy, r)
  const rc = cornersOf('rect', reX, cy, r)

  /* All four of the square's sides light at once and in one colour: sameness
     cannot be shown one side at a time. */
  const sp = rise(t, sq, 0.4)
  for (let i = 0; i < 4; i++) {
    edgeBar(ctx, sc[i], sc[(i + 1) % 4], heavy, '#ffd93b', sp)
  }

  /* The rectangle keeps the two colours it was taught with in the scene
     before, so this is recognised as the same fact rather than a new one. */
  const rp = rise(t, re, 0.4)
  edgeBar(ctx, rc[0], rc[1], heavy, '#3f9ede', rp)
  edgeBar(ctx, rc[2], rc[3], heavy, '#3f9ede', rp)
  edgeBar(ctx, rc[1], rc[2], heavy, '#e0679f', rp)
  edgeBar(ctx, rc[3], rc[0], heavy, '#e0679f', rp)

  const him = himAt(w, h)
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.55, cy] },
    { at: sq, look: [sqX, cy], hop: 150 },
    { at: re, look: [reX, cy], hop: 150 },
  ])
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

/* ── 4. all four together, named one at a time ─────────────────────────────── */

const recap: Painter = (ctx, w, h, t, scene) => {
  const calls = (scene.data?.calls || []) as { kind: string, at: number }[]
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)

  let call: { kind: string, at: number } | undefined
  for (const c of calls) if (t >= c.at) call = c

  if (call) {
    chalk(ctx, WORD[call.kind], board.x + board.w / 2, board.y + board.h * 0.5,
      board.h * 0.27, FONT, clamp((t - call.at) / 0.25))
  } else {
    chalk(ctx, 'All four', board.x + board.w / 2, board.y + board.h * 0.5,
      board.h * 0.24, FONT, 0.9)
  }

  const { f } = stage(w, h)
  const cy = f.y + f.h * 0.45
  const r = f.h * 0.27
  const xs = [0.31, 0.49, 0.67, 0.85]
  const kinds = ['circle', 'square', 'triangle', 'rect']

  for (let i = 0; i < 4; i++) {
    /**
     * The named one jumps.
     *
     * A ring or a spotlight would do the job too, but a jump is the one
     * signal a child does not have to be taught to read, and it keeps all
     * four on screen at full size while one of them is being picked out.
     */
    const c = calls.find(one => one.kind === kinds[i])
    const age = c ? t - c.at : -1
    const hop = age >= 0 && age < 0.65 ? Math.sin((age / 0.65) * Math.PI) : 0
    drawShape(ctx, kinds[i], w * xs[i], cy - r * 0.34 * hop, r * (1 + 0.16 * hop))
  }

  const him = himAt(w, h)
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.55, cy] },
    ...calls.map((c, i) => ({
      at: c.at, look: [w * xs[i], cy] as [number, number], hop: 170,
    })),
  ])
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

/* ── 5. handing over to the shape puzzle ───────────────────────────────────── */

const handover: Painter = (ctx, w, h, t) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)
  chalk(ctx, 'Your turn!', board.x + board.w / 2, board.y + board.h * 0.36,
    board.h * 0.3, FONT, clamp(t / 0.5))
  chalk(ctx, 'Drag each shape into its hole', board.x + board.w / 2,
    board.y + board.h * 0.76, board.h * 0.14, FONT, clamp((t - 0.8) / 0.6))

  /**
   * The screen the game opens on, near enough.
   *
   * Holes in a row above, loose shapes below, which is exactly what Shape
   * Puzzle shows. The handover is not a change of subject if the last frame
   * of the video is the first frame of the game.
   */
  const { f } = stage(w, h)
  const r = f.h * 0.22
  const kinds = ['circle', 'square', 'triangle', 'rect']
  const xs = [0.33, 0.50, 0.67, 0.84]
  const holeY = f.y + f.h * 0.22
  const loose = f.y + f.h * 0.72

  for (let i = 0; i < 4; i++) {
    holeOf(ctx, kinds[i], w * xs[i], holeY, r)
  }
  for (let i = 0; i < 4; i++) {
    /* They shuffle gently so the row reads as pieces waiting to be picked up
       rather than as pieces already placed. */
    const wob = Math.sin(t * 2.1 + i * 1.3) * r * 0.08
    drawShape(ctx, kinds[3 - i], w * xs[i] + wob, loose, r)
  }

  const him = himAt(w, h)
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.5, h * 0.45] },
    { at: 0.4, hop: 280 },
    { at: 2.4, hop: 200 },
  ])
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

export const PAINTERS: Record<string, Painter> = {
  intro, teach, practise, recap, handover,
}

export const ShapesFourLesson: React.FC = () => (
  <LessonVideo lesson={SHAPES_LESSON} painters={PAINTERS} />
)

export { SHAPES_LESSON }
