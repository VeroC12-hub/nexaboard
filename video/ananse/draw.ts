/**
 * The lesson, drawn with the games' own art.
 *
 * ── Why this imports the game files rather than redrawing anything ───────────
 *
 * `public/ananse/rig.js`, `kit.js` and `count.js` are plain browser scripts
 * that the games load with script tags. Imported here for their side effect,
 * they put the same three globals on `window` inside the Remotion bundle, and
 * the video draws with exactly the objects the game draws with.
 *
 * That is the whole point of doing it this way. A video that teaches counting
 * with one mango and a game that tests it with a slightly different mango are
 * two products, and the handover at the end is a change of subject. Here the
 * mango the child watches being counted is, literally, the same function call
 * the game makes.
 *
 * ── Why every frame is drawn from scratch ────────────────────────────────────
 *
 * Remotion renders frames out of order and across several browser tabs at once,
 * so nothing may carry over between them. Ananse's rig has springs in it, which
 * are state, so he is built fresh each frame and stepped forward from zero to
 * the moment being drawn. It sounds wasteful and is not: a step is a handful of
 * multiplications, and it buys a picture that is identical no matter which
 * worker renders it or in what order.
 */

import '../../public/ananse/rig.js'
import '../../public/ananse/kit.js'
import '../../public/ananse/count.js'

import { FPS } from './shell'

/* The three scripts above are not modules and have no types. */
type Any = any
const W = () => (window as Any)
const kit = () => W().AnanseKit
const Count = () => W().AnanseCount

export const LINE = () => kit().LINE

export interface Rect { x: number, y: number, w: number, h: number }
export interface Spot { x: number, y: number, index: number }

/* ── the kit, reached safely ───────────────────────────────────────────────── */

/**
 * The drawing primitives a lesson needs, without reaching for `window`.
 *
 * These are thin passthroughs to the same functions the games draw with. They
 * exist so that a new lesson never has a reason to edit this file or to touch
 * globals directly: everything it needs is an import.
 */

/** Fill the current path, then stroke it in the house outline colour. */
export function inked(
  ctx: CanvasRenderingContext2D, fill: string, width = 3.5,
) {
  kit().inkedOn(ctx, fill, kit().LINE, width)
}

/**
 * Outline a cluster of overlapping circles as one silhouette.
 *
 * Stroking a path of several arcs strokes the inside edges too and comes out
 * as a scribble. This draws the cluster larger in the outline colour first,
 * then again in the fill on top.
 */
export function blob(
  ctx: CanvasRenderingContext2D,
  circles: [number, number, number][], fill: string, width = 3,
) {
  kit().blobOn(ctx, circles, fill, width)
}

/** circle, square, triangle, star, heart or diamond, from the games' kit. */
export function shape(
  ctx: CanvasRenderingContext2D, name: string,
  x: number, y: number, r: number, fill: string,
  opts?: Record<string, unknown>,
) {
  kit().shape(ctx, name, x, y, r, fill, opts)
}

export const SHAPE_NAMES = (): string[] => kit().SHAPE_NAMES

/** One countable object from `count.js`: mango, orange, ball, fish, drum, star. */
export function drawOne(
  name: string, ctx: CanvasRenderingContext2D, r: number,
  opts?: Record<string, unknown>,
) {
  Count().draw(name, ctx, r, opts)
}

/** Eyes and a mouth, laid over whatever has just been drawn. */
export function faceOn(
  ctx: CanvasRenderingContext2D, r: number, opts?: Record<string, unknown>,
) {
  Count().face(ctx, r, opts)
}

/** Positions for `n` things inside a box, in rows that break at five. */
export function rowOf(n: number, box: Rect, per?: number): Spot[] {
  return Count().row(n, box, per)
}

/** How big each of `n` things should be to fit `box` without touching. */
export function sizeFor(n: number, box: Rect, per?: number): number {
  return Count().sizeFor(n, box, per)
}

/* ── the backdrop ──────────────────────────────────────────────────────────── */

/**
 * The classroom, painted once.
 *
 * The kit's scenes are loops, gradients and a few hundred shapes, which is
 * nothing once but is sixty times a second for a minute. Painted into an
 * offscreen canvas the first time it is asked for and blitted after that, which
 * is exactly what the games do with the same code.
 */
const backdrops = new Map<string, HTMLCanvasElement>()

export function backdrop(name: string, w: number, h: number): HTMLCanvasElement {
  const key = `${name}:${w}x${h}`
  const had = backdrops.get(key)
  if (had) return had
  const off = document.createElement('canvas')
  off.width = w
  off.height = h
  const g = off.getContext('2d')!
  const scene = kit().SCENES[name] || kit().SCENES.room
  scene(g, w, h)
  backdrops.set(key, off)
  return off
}

/* ── him ───────────────────────────────────────────────────────────────────── */

export interface RigEvent {
  at: number
  mood?: string
  look?: [number, number]
  hop?: number
}

/**
 * Ananse, posed at `seconds` into the scene.
 *
 * Built and stepped from zero every time, so the pose is a pure function of the
 * time and nothing else. `events` are applied as the clock passes them, which
 * is how a mood change or a hop lands on the right frame rather than on the
 * frame that happened to be rendered first.
 */
export function poseRig(ctx: CanvasRenderingContext2D, seconds: number, events: RigEvent[] = []) {
  const rig = new (W().Ananse)(ctx)
  const dt = 1 / FPS
  const steps = Math.max(0, Math.round(seconds * FPS))
  let next = 0
  for (let i = 0; i <= steps; i++) {
    const t = i * dt
    while (next < events.length && events[next].at <= t) {
      const e = events[next++]
      if (e.mood) rig.setMood(e.mood)
      if (e.look) rig.look(e.look[0], e.look[1])
      if (e.hop) rig.hop(e.hop)
    }
    rig.step(dt)
  }
  return rig
}

/* ── the room's furniture ──────────────────────────────────────────────────── */


export const boardRect = (w: number, h: number): Rect =>
  ({ x: w * 0.2, y: h * 0.055, w: w * 0.6, h: h * 0.33 })

/**
 * The floor the counting happens on.
 *
 * Taller and wider than it was. The objects being counted have to be the
 * biggest thing in the frame after the blackboard, and they were not: ten of
 * them came out smaller than the spider standing next to them.
 */
/**
 * The floor the counting happens on.
 *
 * It starts below the wall, not at it. The room's skirting board is at 52% of
 * the height, and a field that began above that put the back row of a two row
 * group halfway up the wall: five mangoes hanging in the air with their
 * shadows on the floor below them.
 */
export const fieldRect = (w: number, h: number): Rect =>
  ({ x: w * 0.22, y: h * 0.485, w: w * 0.74, h: h * 0.345 })

/**
 * Where he stands while the counting happens.
 *
 * Eight legs reach about one and a half radii either side of him, so at 11.5%
 * of the width his left ones were over the edge of the frame. Sized and placed
 * so the whole animal is on screen with room to spare.
 */
export const himAt = (w: number, h: number) =>
  ({ x: w * 0.145, feet: h * 0.82, r: h * 0.115 })

/** A blackboard, which is what makes the room a classroom. */
export function blackboard(ctx: CanvasRenderingContext2D, r: Rect) {
  ctx.save()
  /* Frame first, slightly proud, so the board sits inside it. */
  ctx.beginPath()
  ctx.roundRect(r.x - r.w * 0.022, r.y - r.h * 0.04, r.w * 1.044, r.h * 1.08, r.h * 0.05)
  kit().inkedOn(ctx, '#a9703c', LINE(), 5)
  ctx.beginPath()
  ctx.roundRect(r.x, r.y, r.w, r.h, r.h * 0.035)
  kit().inkedOn(ctx, '#2f4636', LINE(), 4)
  /* Chalk dust along the bottom, which is the one detail that sells it. */
  ctx.save()
  ctx.beginPath()
  ctx.roundRect(r.x, r.y, r.w, r.h, r.h * 0.035)
  ctx.clip()
  ctx.globalAlpha = 0.12
  ctx.fillStyle = '#ffffff'
  ctx.beginPath()
  ctx.ellipse(r.x + r.w * 0.5, r.y + r.h * 1.02, r.w * 0.44, r.h * 0.12, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
  /* The chalk ledge. */
  ctx.beginPath()
  ctx.roundRect(r.x + r.w * 0.04, r.y + r.h * 1.05, r.w * 0.92, r.h * 0.055, r.h * 0.025)
  kit().inkedOn(ctx, '#c08a4a', LINE(), 3.5)
  ctx.restore()
}

/** Chalk lettering, for anything written on the board. */
export function chalk(
  ctx: CanvasRenderingContext2D, text: string, x: number, y: number,
  size: number, font: string, alpha = 1,
) {
  ctx.save()
  ctx.globalAlpha = alpha
  ctx.font = `600 ${Math.round(size)}px ${font}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.lineJoin = 'round'
  /* Chalk has no outline, it has a soft edge. Two passes, the wider one faint,
     which reads as dust round the stroke rather than as a drawn border. */
  ctx.strokeStyle = 'rgba(255,255,255,0.22)'
  ctx.lineWidth = size * 0.16
  ctx.strokeText(text, x, y)
  ctx.fillStyle = '#f4f1e6'
  ctx.fillText(text, x, y)
  ctx.restore()
}

/**
 * The big numeral on the board, and a row of tally marks under it.
 *
 * The tally is not decoration. A numeral on its own is a symbol a child has to
 * have been taught; a numeral with four strokes under it is a symbol next to
 * the thing it means, and that pairing is the entire content of this lesson.
 */
/**
 * A ten frame: two rows of five cells, filled up to `n`.
 *
 * ── Why this replaced the tally marks ────────────────────────────────────────
 *
 * Tally is a counting notation adults use and children meet late. A ten frame
 * is the standard early years picture of a quantity, and it has one property
 * tally does not: it is laid out two rows of five, which is exactly how the
 * mangoes are laid out on the floor below it. The board and the floor show the
 * same arrangement of the same number, so the child is not asked to connect two
 * unrelated pictures.
 *
 * Both were on the board for a while and it was crowded, which is worse than
 * either. Tally lost.
 */
function tenFrame(ctx: CanvasRenderingContext2D, n: number, r: Rect) {
  const cols = 5
  const rows = 2
  const cw = r.w / cols
  const ch = r.h / rows
  const dot = Math.min(cw, ch) * 0.3

  ctx.save()
  ctx.strokeStyle = 'rgba(244,241,230,0.55)'
  ctx.lineWidth = Math.max(2, Math.min(cw, ch) * 0.05)
  ctx.beginPath()
  ctx.rect(r.x, r.y, r.w, r.h)
  for (let c = 1; c < cols; c++) {
    ctx.moveTo(r.x + c * cw, r.y)
    ctx.lineTo(r.x + c * cw, r.y + r.h)
  }
  ctx.moveTo(r.x, r.y + ch)
  ctx.lineTo(r.x + r.w, r.y + ch)
  ctx.stroke()

  ctx.fillStyle = '#f4f1e6'
  for (let i = 0; i < Math.min(n, 10); i++) {
    const row = Math.floor(i / cols)
    const col = i - row * cols
    ctx.beginPath()
    ctx.arc(r.x + (col + 0.5) * cw, r.y + (row + 0.5) * ch, dot, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.restore()
}

/**
 * The board: the numeral, the number word, and the quantity, together.
 *
 * All three at once and side by side rather than stacked, because the thing
 * being taught is that they are the same fact in three notations. Stacked they
 * read as a list; side by side they read as an equation.
 */
export function boardNumber(
  ctx: CanvasRenderingContext2D, n: number, r: Rect, font: string,
  grow = 1, word?: string,
) {
  const leftX = r.x + r.w * 0.23
  chalk(ctx, String(n), leftX, r.y + r.h * 0.42, r.h * 0.5 * grow, font)
  if (word) {
    chalk(ctx, word.toUpperCase(), leftX, r.y + r.h * 0.81, r.h * 0.15, font, 0.85)
  }
  tenFrame(ctx, n, {
    x: r.x + r.w * 0.46, y: r.y + r.h * 0.24, w: r.w * 0.46, h: r.h * 0.5,
  })
}

/* ── the things being counted ──────────────────────────────────────────────── */

export function layout(n: number, box: Rect): { spots: Spot[], r: number } {
  return { spots: Count().row(n, box), r: Count().sizeFor(n, box) }
}

/**
 * Draw `shown` of `n` things, each arriving on its own beat.
 *
 * The positions are computed for the full `n` from the start, so a mango that
 * has landed never shifts sideways when the next one arrives. Watching the row
 * re-flow on every beat is the single most distracting thing a counting
 * animation can do: it makes the child recount from the left every time.
 */
export function drawGroup(
  ctx: CanvasRenderingContext2D, thing: string, n: number, box: Rect,
  opts: {
    shown?: number, t: number, face?: boolean, pops?: number[],
    lit?: number, party?: boolean,
  },
) {
  const { spots, r } = layout(n, box)
  const shown = opts.shown === undefined ? n : opts.shown
  for (let i = 0; i < Math.min(shown, n); i++) {
    const s = spots[i]
    const pop = opts.pops ? opts.pops[i] : 1
    if (pop <= 0) continue

    /* A contact shadow, so they are standing on the floor of the room. */
    ctx.save()
    ctx.globalAlpha = 0.14 * Math.min(1, pop)
    ctx.fillStyle = '#5a3a1c'
    ctx.beginPath()
    ctx.ellipse(s.x, s.y + r * 0.98, r * 0.62 * pop, r * 0.15, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

    /**
     * The one being counted right now wears a ring.
     *
     * ── Why there is no arrow as well ─────────────────────────────────────
     *
     * There was, briefly, bobbing over the top of it. With ten laid out in two
     * rows there is nowhere for it to go: above a mango in the back row is
     * empty wall, and above one in the front row is the mango behind it, so
     * half the time the arrow was tucked behind the thing it was not pointing
     * at.
     *
     * The ring cannot collide with anything, because it is drawn on the thing
     * itself. So it does the whole job, and it is drawn heavy enough and with
     * a glow behind it to be unmistakable at the size ten of them come out at.
     */
    if (opts.lit === i) {
      ctx.save()
      ctx.globalAlpha = 0.28
      ctx.fillStyle = '#ffd93b'
      ctx.beginPath()
      ctx.arc(s.x, s.y, r * 1.34, 0, Math.PI * 2)
      ctx.fill()
      ctx.globalAlpha = 1
      ctx.strokeStyle = '#ffd93b'
      ctx.lineWidth = Math.max(5, r * 0.2)
      ctx.setLineDash([r * 0.46, r * 0.3])
      ctx.lineDashOffset = -opts.t * r * 1.6
      ctx.beginPath()
      ctx.arc(s.x, s.y, r * 1.2, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    }

    ctx.save()
    ctx.translate(s.x, s.y)
    Count().draw(thing, ctx, r, {
      t: opts.t, index: i, face: opts.face, bob: opts.face, party: opts.party, pop,
    })
    ctx.restore()
  }
  return { spots, r }
}

/** The numeral that flies up beside a thing as it lands. */
export function beatNumeral(
  ctx: CanvasRenderingContext2D, n: number, s: Spot, r: number,
  age: number, font: string,
) {
  if (age < 0) return
  const rise = Math.min(1, age / 0.34)
  const fade = 1 - Math.max(0, (age - 0.9) / 0.5)
  if (fade <= 0) return
  ctx.save()
  ctx.globalAlpha = Math.max(0, Math.min(1, fade))
  /**
   * Up and to the right, and not far.
   *
   * Straight up by nearly two radii put the seventh mango's numeral in the
   * middle of the second mango of the row above, which reads as labelling the
   * wrong one. The gap between columns is wider than the gap between rows, so
   * the shoulder is the only place a numeral can sit and still obviously
   * belong to the thing underneath it.
   */
  const y = s.y - r * (0.72 + rise * 0.24)
  const x = s.x + r * 0.86
  const size = r * 0.95 * (0.6 + rise * 0.4)
  ctx.font = `700 ${Math.round(size)}px ${font}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.lineJoin = 'round'
  ctx.miterLimit = 2
  ctx.strokeStyle = LINE()
  ctx.lineWidth = size * 0.26
  ctx.strokeText(String(n), x, y)
  ctx.fillStyle = '#ffd93b'
  ctx.fillText(String(n), x, y)
  ctx.restore()
}
