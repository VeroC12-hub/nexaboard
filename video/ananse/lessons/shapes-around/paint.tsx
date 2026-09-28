/**
 * Shapes in Our Environment: what each scene looks like.
 *
 * ── Why there is no classroom in this lesson ─────────────────────────────────
 *
 * Every other lesson opens on the room with the blackboard, and that is right
 * when the thing being taught is a symbol. Here the thing being taught is that
 * shapes are not symbols: they are already in the clock, the window, the roof
 * and the door, and they were there before anybody drew one. Put that lesson
 * on a blackboard and the blackboard contradicts it. So this one happens in
 * the yard, and nothing is ever written in chalk.
 *
 * ── The two step, which is the whole method ──────────────────────────────────
 *
 * Every object arrives as itself and only afterwards has its shape glow into
 * place on top of it. The gap matters: a child who only ever sees the glowing
 * version has been shown a picture of a clock with a ring on it, not a circle
 * found inside a clock. The timing of both steps is measured from the voice in
 * `lesson.ts`; what is here is only what they look like.
 */

import React from 'react'
import { LessonVideo, FONT, type Painter } from '../../shell'
import {
  backdrop, himAt, poseRig, shape, inked, LINE, type RigEvent,
} from '../../draw'
import { AROUND_LESSON, type Find } from './lesson'

const TAU = Math.PI * 2

const clamp = (v: number) => Math.max(0, Math.min(1, v))
const rise = (t: number, at: number, over = 0.34) => clamp((t - at) / over)

/** Arriving overshoots and settles, so there is a moment to look up for. */
const grow = (p: number) => (p >= 1 ? 1 : 0.35 + 0.65 * p + Math.sin(p * Math.PI) * 0.12)

/**
 * The kit's own proportions, written out again.
 *
 * `kit.shape` draws circle, square and triangle and this lesson draws its pure
 * shapes with it, so the shape a child sees glowing here is the same object
 * the Shape Hunt game will ask them to find. But a glow has to sit exactly on
 * the edge of the real thing underneath it, so the numbers below mirror
 * `SHAPES` in `public/ananse/kit.js`. If those move, every glow slides off its
 * object and one frame shows it.
 */
const SQ = 0.82
const TRI_X = 0.92
const TRI_Y = 0.72

/**
 * The rectangle, which the kit has no entry for, and which is given its own
 * width and height here rather than one radius.
 *
 * A door is a tall rectangle and a bank note is a wide one, and that is worth
 * having rather than working around: the two long sides and two short sides
 * are still two long and two short whichever way up the thing is standing. A
 * child who only ever meets wide rectangles decides tall ones are something
 * else.
 */
interface Glow {
  kind: string
  x: number
  y: number
  r: number
  hw?: number
  hh?: number
}

/** The outline of a shape, optionally scaled about its own centre. */
function glowPath(ctx: CanvasRenderingContext2D, g: Glow, k = 1) {
  ctx.beginPath()
  if (g.kind === 'circle') { ctx.arc(g.x, g.y, g.r * k, 0, TAU); return }
  if (g.kind === 'triangle') {
    const r = g.r * k
    ctx.moveTo(g.x, g.y - r)
    ctx.lineTo(g.x + TRI_X * r, g.y + TRI_Y * r)
    ctx.lineTo(g.x - TRI_X * r, g.y + TRI_Y * r)
    ctx.closePath()
    return
  }
  const hw = (g.hw === undefined ? SQ * g.r : g.hw) * k
  const hh = (g.hh === undefined ? SQ * g.r : g.hh) * k
  ctx.roundRect(g.x - hw, g.y - hh, hw * 2, hh * 2, g.r * 0.1)
}

/**
 * The shape lighting up inside the thing.
 *
 * Filled as well as outlined, because an outline alone reads as a ring drawn
 * around an object and the claim being made is about its inside. The halo that
 * springs outward once on arrival is what makes it look like the shape came
 * out of the object rather than being dropped onto it.
 */
function glowOn(ctx: CanvasRenderingContext2D, g: Glow, age: number) {
  const p = clamp(age / 0.45)
  if (p <= 0) return
  const pulse = 0.5 + 0.5 * Math.sin(age * 3.2)

  if (p < 1) {
    ctx.save()
    ctx.globalAlpha = 0.5 * (1 - p)
    ctx.strokeStyle = '#ffd93b'
    ctx.lineWidth = Math.max(4, g.r * 0.1)
    ctx.lineJoin = 'round'
    glowPath(ctx, g, 1 + 0.3 * (1 - p))
    ctx.stroke()
    ctx.restore()
  }

  ctx.save()
  glowPath(ctx, g)
  ctx.globalAlpha = 0.32 * p
  ctx.fillStyle = '#ffd93b'
  ctx.fill()
  ctx.globalAlpha = p
  ctx.strokeStyle = '#ffd93b'
  ctx.lineWidth = Math.max(5, g.r * 0.13) * (0.85 + 0.3 * pulse)
  ctx.lineJoin = 'round'
  ctx.stroke()
  ctx.restore()
}

/**
 * A word on a dark lozenge.
 *
 * The other lessons write the name in chalk on the board. There is no board
 * out here, and white text laid straight over a bright sky or red earth is
 * unreadable half the time, so the name gets its own dark ground to sit on.
 */
function pill(
  ctx: CanvasRenderingContext2D, text: string, x: number, y: number,
  size: number, alpha = 1,
) {
  if (alpha <= 0) return
  ctx.save()
  ctx.globalAlpha = clamp(alpha)
  ctx.font = `700 ${Math.round(size)}px ${FONT}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  const wide = ctx.measureText(text).width + size * 1.3
  ctx.beginPath()
  ctx.roundRect(x - wide / 2, y - size * 0.78, wide, size * 1.56, size * 0.78)
  ctx.fillStyle = 'rgba(16,42,66,0.82)'
  ctx.fill()
  ctx.strokeStyle = LINE()
  ctx.lineWidth = Math.max(2, size * 0.09)
  ctx.stroke()
  ctx.fillStyle = '#ffd93b'
  ctx.fillText(text, x, y)
  ctx.restore()
}

/* ── the everyday things ───────────────────────────────────────────────────── */

/** A wall clock. Its face is the circle. */
function clockObj(ctx: CanvasRenderingContext2D, x: number, y: number, r: number): Glow {
  ctx.beginPath()
  ctx.arc(x, y, r * 1.12, 0, TAU)
  inked(ctx, '#a9703c', 4)
  ctx.beginPath()
  ctx.arc(x, y, r, 0, TAU)
  inked(ctx, '#f6f1e2', 3.5)

  ctx.save()
  ctx.strokeStyle = LINE()
  ctx.lineCap = 'round'
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * TAU
    const big = i % 3 === 0
    ctx.lineWidth = big ? r * 0.08 : r * 0.045
    const inner = big ? 0.7 : 0.78
    ctx.beginPath()
    ctx.moveTo(x + Math.cos(a) * r * inner, y + Math.sin(a) * r * inner)
    ctx.lineTo(x + Math.cos(a) * r * 0.88, y + Math.sin(a) * r * 0.88)
    ctx.stroke()
  }
  /* Hands parked at three o'clock and kept still. A sweeping hand would pull
     the eye to the middle of the face exactly while the child is being asked
     to look at its edge. */
  ctx.lineCap = 'round'
  ctx.lineWidth = r * 0.1
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x + r * 0.46, y)
  ctx.stroke()
  ctx.lineWidth = r * 0.07
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x, y - r * 0.66)
  ctx.stroke()
  ctx.restore()

  ctx.beginPath()
  ctx.arc(x, y, r * 0.09, 0, TAU)
  inked(ctx, '#e8543c', 2.5)
  return { kind: 'circle', x, y, r }
}

/** A window with four panes. The frame is the square. */
function windowObj(ctx: CanvasRenderingContext2D, x: number, y: number, r: number): Glow {
  const a = SQ * r
  ctx.beginPath()
  ctx.roundRect(x - a * 1.16, y + a * 0.96, a * 2.32, a * 0.24, a * 0.08)
  inked(ctx, '#8a5a2b', 3.5)

  ctx.beginPath()
  ctx.roundRect(x - a, y - a, a * 2, a * 2, r * 0.1)
  inked(ctx, '#a9703c', 4)

  const p = a * 0.82
  ctx.beginPath()
  ctx.rect(x - p, y - p, p * 2, p * 2)
  inked(ctx, '#8fd2f5', 3)

  ctx.save()
  ctx.strokeStyle = '#a9703c'
  ctx.lineWidth = a * 0.17
  ctx.beginPath()
  ctx.moveTo(x, y - p)
  ctx.lineTo(x, y + p)
  ctx.moveTo(x - p, y)
  ctx.lineTo(x + p, y)
  ctx.stroke()
  ctx.strokeStyle = LINE()
  ctx.lineWidth = 2.5
  ctx.stroke()
  ctx.restore()
  return { kind: 'square', x, y, r }
}

/** A little house. The roof is the triangle, so the walls sit under it. */
function houseObj(ctx: CanvasRenderingContext2D, x: number, y: number, r: number): Glow {
  const bx = TRI_X * r * 0.8
  const base = y + TRI_Y * r
  const tall = r * 0.85

  ctx.beginPath()
  ctx.rect(x - bx, base - 2, bx * 2, tall)
  inked(ctx, '#e8d9b8', 3.5)

  ctx.beginPath()
  ctx.roundRect(x - bx * 0.26, base + tall * 0.34, bx * 0.52, tall * 0.66, r * 0.05)
  inked(ctx, '#a9703c', 3)

  ctx.beginPath()
  ctx.rect(x + bx * 0.4, base + tall * 0.22, bx * 0.34, tall * 0.3)
  inked(ctx, '#8fd2f5', 2.5)

  /* Roof last, so it covers the top edge of the walls and reads as resting on
     them rather than as a triangle parked behind a box. */
  ctx.beginPath()
  ctx.moveTo(x, y - r)
  ctx.lineTo(x + TRI_X * r, base)
  ctx.lineTo(x - TRI_X * r, base)
  ctx.closePath()
  inked(ctx, '#c4442e', 4)
  return { kind: 'triangle', x, y, r }
}

/** A door standing in its frame. Tall, and still a rectangle. */
function doorObj(
  ctx: CanvasRenderingContext2D, x: number, y: number, hw: number, hh: number,
): Glow {
  ctx.beginPath()
  ctx.roundRect(x - hw * 1.14, y - hh * 1.07, hw * 2.28, hh * 2.14, hw * 0.1)
  inked(ctx, '#8a5a2b', 4)

  ctx.beginPath()
  ctx.roundRect(x - hw, y - hh, hw * 2, hh * 2, hw * 0.1)
  inked(ctx, '#b05a2e', 3.5)

  for (let i = 0; i < 2; i++) {
    ctx.beginPath()
    ctx.roundRect(
      x - hw * 0.56, y - hh * 0.78 + i * hh * 0.86,
      hw * 1.12, hh * 0.64, hw * 0.08,
    )
    inked(ctx, '#9c4d26', 2.5)
  }

  ctx.beginPath()
  ctx.arc(x + hw * 0.72, y + hh * 0.06, hw * 0.13, 0, TAU)
  inked(ctx, '#f2c33b', 2.5)
  return { kind: 'rect', x, y, r: Math.min(hw, hh), hw, hh }
}

/** A coin. */
function coinObj(ctx: CanvasRenderingContext2D, x: number, y: number, r: number): Glow {
  ctx.beginPath()
  ctx.arc(x, y, r, 0, TAU)
  inked(ctx, '#f2c33b', 3.5)
  ctx.beginPath()
  ctx.arc(x, y, r * 0.76, 0, TAU)
  inked(ctx, '#e8a93c', 2.5)
  shape(ctx, 'star', x, y, r * 0.44, '#f6d96a')
  return { kind: 'circle', x, y, r }
}

/** A biscuit tin, seen face on. */
function tinObj(ctx: CanvasRenderingContext2D, x: number, y: number, r: number): Glow {
  const a = SQ * r
  ctx.beginPath()
  ctx.roundRect(x - a, y - a, a * 2, a * 2, r * 0.1)
  inked(ctx, '#3f9ede', 3.5)
  ctx.beginPath()
  ctx.roundRect(x - a, y - a, a * 2, a * 0.5, r * 0.09)
  inked(ctx, '#2e77b8', 3)
  ctx.beginPath()
  ctx.roundRect(x - a * 0.66, y - a * 0.12, a * 1.32, a * 0.72, r * 0.07)
  inked(ctx, '#f6f1e2', 2.5)
  return { kind: 'square', x, y, r }
}

/** A slice of watermelon, point up, rind along the base. */
function melonObj(ctx: CanvasRenderingContext2D, x: number, y: number, r: number): Glow {
  const base = y + TRI_Y * r
  const tri = () => {
    ctx.beginPath()
    ctx.moveTo(x, y - r)
    ctx.lineTo(x + TRI_X * r, base)
    ctx.lineTo(x - TRI_X * r, base)
    ctx.closePath()
  }
  tri()
  inked(ctx, '#e8543c', 3.5)

  /* The rind is painted inside the slice and clipped to it, so the triangle
     stays one triangle. A rind drawn as its own strip along the bottom would
     give the child two shapes to look at and one of them would be wrong. */
  ctx.save()
  tri()
  ctx.clip()
  ctx.fillStyle = '#f6f1e2'
  ctx.fillRect(x - r * 1.1, base - r * 0.3, r * 2.2, r * 0.12)
  ctx.fillStyle = '#6cbf42'
  ctx.fillRect(x - r * 1.1, base - r * 0.19, r * 2.2, r * 0.3)
  ctx.restore()

  ctx.save()
  ctx.fillStyle = LINE()
  for (let i = 0; i < 3; i++) {
    ctx.beginPath()
    ctx.ellipse(x + (i - 1) * r * 0.38, base - r * (0.46 + (i % 2) * 0.22),
      r * 0.07, r * 0.1, 0, 0, TAU)
    ctx.fill()
  }
  ctx.restore()

  tri()
  ctx.save()
  ctx.strokeStyle = LINE()
  ctx.lineWidth = 3.5
  ctx.lineJoin = 'round'
  ctx.stroke()
  ctx.restore()
  return { kind: 'triangle', x, y, r }
}

/** A bank note. */
function noteObj(
  ctx: CanvasRenderingContext2D, x: number, y: number, hw: number, hh: number,
): Glow {
  ctx.beginPath()
  ctx.roundRect(x - hw, y - hh, hw * 2, hh * 2, hh * 0.14)
  inked(ctx, '#9fd2a8', 3.5)
  ctx.beginPath()
  ctx.ellipse(x - hw * 0.54, y, hw * 0.22, hh * 0.52, 0, 0, TAU)
  inked(ctx, '#d8ecd8', 2.5)
  ctx.beginPath()
  ctx.roundRect(x + hw * 0.24, y - hh * 0.36, hw * 0.54, hh * 0.72, hh * 0.12)
  inked(ctx, '#7bbd8c', 2.5)
  ctx.save()
  ctx.strokeStyle = 'rgba(40,90,55,0.45)'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.roundRect(x - hw * 0.9, y - hh * 0.8, hw * 1.8, hh * 1.6, hh * 0.1)
  ctx.stroke()
  ctx.restore()
  return { kind: 'rect', x, y, r: Math.min(hw, hh), hw, hh }
}

/** One everyday thing, drawn at size `s`, handing back the shape inside it. */
function paintThing(
  ctx: CanvasRenderingContext2D, thing: string, x: number, y: number, s: number,
): Glow {
  switch (thing) {
    case 'clock': return clockObj(ctx, x, y, s)
    case 'window': return windowObj(ctx, x, y, s)
    case 'roof': return houseObj(ctx, x, y, s)
    case 'door': return doorObj(ctx, x, y, s * 0.62, s * 1.02)
    case 'coin': return coinObj(ctx, x, y, s)
    case 'tin': return tinObj(ctx, x, y, s)
    case 'melon': return melonObj(ctx, x, y, s)
    default: return noteObj(ctx, x, y, s * 1.45, s * 0.72)
  }
}

const NAMED: Record<string, string> = {
  clock: 'CIRCLE', window: 'SQUARE', roof: 'TRIANGLE', door: 'RECTANGLE',
  coin: 'CIRCLE', tin: 'SQUARE', melon: 'TRIANGLE', note: 'RECTANGLE',
}

/**
 * Where each of the four big objects stands, in fractions of the frame.
 *
 * Not one shared spot, because these are different heights. A house is tall
 * and a clock is not, and a single centre line would either float the clock or
 * push the roof off the top. Each is placed so that the whole object sits
 * between the sky and the caption band, and so that the name lozenge always
 * lands clear of it at the same height.
 */
const SPOT: Record<string, { x: number, y: number, s: number }> = {
  clock: { x: 0.58, y: 0.585, s: 0.135 },
  window: { x: 0.58, y: 0.585, s: 0.145 },
  roof: { x: 0.58, y: 0.475, s: 0.115 },
  door: { x: 0.58, y: 0.575, s: 0.150 },
}

/** The row of second examples, and the pure shapes in the recap. */
const ROW_X = [0.32, 0.48, 0.64, 0.80]
const PURE = ['circle', 'square', 'triangle', 'rect']

/* ── 1. he takes them outside ──────────────────────────────────────────────── */

const intro: Painter = (ctx, w, h, t) => {
  ctx.drawImage(backdrop('yard', w, h), 0, 0)

  pill(ctx, 'Shapes All Around Us', w * 0.5, h * 0.1, h * 0.052, clamp((t - 0.4) / 0.7))

  /* The four float in the sky rather than sitting on the ground, which is the
     only place in this video they are allowed to be abstract: here they are
     still the idea, and everything after this finds them in a real thing. */
  for (let i = 0; i < 4; i++) {
    const p = rise(t, 0.9 + i * 0.22, 0.4)
    if (p <= 0) continue
    const r = h * 0.062 * grow(p)
    const y = h * 0.245 + Math.sin(t * 1.5 + i * 1.2) * h * 0.014
    const x = w * (0.32 + i * 0.12)
    if (PURE[i] === 'rect') {
      ctx.beginPath()
      ctx.roundRect(x - r * 1.45, y - r * 0.72, r * 2.9, r * 1.44, r * 0.1)
      inked(ctx, '#f2c33b', 3.5)
    } else {
      shape(ctx, PURE[i], x, y, r,
        PURE[i] === 'circle' ? '#e8543c' : PURE[i] === 'square' ? '#3f9ede' : '#6cbf42')
    }
  }

  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.5, h * 0.45] },
    { at: 0.45, hop: 260 },
    { at: 2.8, hop: 190 },
  ])
  const r = h * 0.15
  const feet = h * 0.78
  rig.draw(w * 0.5, feet - r * 1.3, r, feet)
}

/* ── 2. four everyday things, each with a shape inside it ──────────────────── */

const teach: Painter = (ctx, w, h, t, scene) => {
  const finds = (scene.data?.finds || []) as Find[]
  ctx.drawImage(backdrop('yard', w, h), 0, 0)

  let find: Find | undefined
  for (const f of finds) if (t >= f.at) find = f
  if (!find) return

  const spot = SPOT[find.thing]
  const s = h * spot.s * grow(rise(t, find.at, 0.36))
  const x = w * spot.x
  const y = h * spot.y

  const glow = paintThing(ctx, find.thing, x, y, s)
  glowOn(ctx, glow, t - find.lit)

  /* The name arrives with the glow, never before it. Naming the shape while
     the object is still only an object is the one order this lesson must not
     be shown in. */
  pill(ctx, NAMED[find.thing], x, h * 0.785, h * 0.05, rise(t, find.lit, 0.4))

  const him = himAt(w, h)
  const events: RigEvent[] = [{ at: 0, mood: 'hello', look: [x, y] }]
  for (const f of finds) {
    events.push({ at: f.at, look: [w * SPOT[f.thing].x, h * SPOT[f.thing].y], hop: 150 })
    events.push({ at: f.lit, hop: 190 })
  }
  const rig = poseRig(ctx, t, events)
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

/* ── 3. four different things, the same four shapes ────────────────────────── */

const practise: Painter = (ctx, w, h, t, scene) => {
  const finds = (scene.data?.finds || []) as Find[]
  ctx.drawImage(backdrop('yard', w, h), 0, 0)

  const cy = h * 0.655
  const s = h * 0.095

  /* All four stay on screen the whole scene. "Which one is a circle" is only
     a question if the three that are not are sitting right there next to it. */
  for (let i = 0; i < finds.length; i++) {
    const f = finds[i]
    const age = t - f.lit
    /* The named one lifts a little. A child reads a hop as "this one" without
       having to be taught what a highlight means. */
    const hop = age >= 0 && age < 0.7 ? Math.sin((age / 0.7) * Math.PI) : 0
    const x = w * ROW_X[i]
    const y = cy - s * 0.3 * hop
    const glow = paintThing(ctx, f.thing, x, y, s)
    if (age >= 0) glowOn(ctx, glow, age)
  }

  let named: { f: Find, i: number } | undefined
  for (let i = 0; i < finds.length; i++) if (t >= finds[i].lit) named = { f: finds[i], i }
  if (named) {
    pill(ctx, NAMED[named.f.thing], w * ROW_X[named.i], h * 0.79, h * 0.044,
      rise(t, named.f.lit, 0.35))
  }

  const him = himAt(w, h)
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.55, cy] },
    ...finds.map((f, i) => ({
      at: f.lit, look: [w * ROW_X[i], cy] as [number, number], hop: 170,
    })),
  ])
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

/* ── 4. what they now know ─────────────────────────────────────────────────── */

const recap: Painter = (ctx, w, h, t, scene) => {
  ctx.drawImage(backdrop('yard', w, h), 0, 0)
  const showAt = (scene.data?.showAt as number) ?? 0

  const cy = h * 0.615
  const words = ['CIRCLE', 'SQUARE', 'TRIANGLE', 'RECTANGLE']

  for (let i = 0; i < 4; i++) {
    const p = rise(t, showAt + i * 0.3, 0.32)
    if (p <= 0) continue
    const r = h * 0.088 * grow(p)
    const x = w * (0.31 + i * 0.18)
    if (PURE[i] === 'rect') {
      ctx.beginPath()
      ctx.roundRect(x - r * 1.45, cy - r * 0.72, r * 2.9, r * 1.44, r * 0.1)
      inked(ctx, '#f2c33b', 3.5)
    } else {
      shape(ctx, PURE[i], x, cy, r,
        PURE[i] === 'circle' ? '#e8543c' : PURE[i] === 'square' ? '#3f9ede' : '#6cbf42')
    }
    pill(ctx, words[i], x, h * 0.775, h * 0.036, p)
  }

  const him = himAt(w, h)
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.55, cy] },
    { at: showAt, hop: 180 },
    { at: showAt + 1.4, hop: 150 },
  ])
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

/* ── 5. handing over to the shape hunt ─────────────────────────────────────── */

/**
 * The last frame of the video is the first frame of the game.
 *
 * Shape Hunt shows a picture with several things in it and asks for one named
 * shape. So this scene stops teaching, puts the four objects back as a single
 * picture with nothing glowing, and asks the question the game is about to
 * ask. Nothing is highlighted, on purpose: the answer is the child's now.
 */
const handover: Painter = (ctx, w, h, t) => {
  ctx.drawImage(backdrop('yard', w, h), 0, 0)

  paintThing(ctx, 'roof', w * 0.32, h * 0.48, h * 0.095)
  paintThing(ctx, 'window', w * 0.55, h * 0.58, h * 0.085)
  paintThing(ctx, 'door', w * 0.71, h * 0.6, h * 0.11)
  paintThing(ctx, 'clock', w * 0.88, h * 0.5, h * 0.072)

  /* It breathes so the eye comes back to the question after wandering over
     the picture, which is exactly the loop the game wants the child in. */
  const beat = 1 + Math.sin(t * 2.4) * 0.02
  pill(ctx, 'Find the triangle!', w * 0.52, h * 0.17, h * 0.056 * beat, clamp(t / 0.5))

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

export const ShapesAroundLesson: React.FC = () => (
  <LessonVideo lesson={AROUND_LESSON} painters={PAINTERS} />
)

export { AROUND_LESSON }
