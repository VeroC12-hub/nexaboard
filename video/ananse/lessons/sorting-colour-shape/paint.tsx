/**
 * Sorting by Colour and Shape: what each scene looks like.
 *
 * ── Why the objects are `shape()` and not counting things ────────────────────
 *
 * Everything else on the floor in these videos is a mango or a drum, drawn by
 * `count.js`. Not here. The lesson is about two properties varying
 * independently, so the objects have to be things whose colour and whose form
 * can be read off at a glance and are obviously separate facts about them. A
 * mango is mango coloured; there is no such thing as a blue one, and a child
 * asked to ignore that is being asked the wrong question. A plain red triangle
 * has exactly two facts about it and no third one to get in the way.
 *
 * ── Why the mats carry a picture as well as a word ───────────────────────────
 *
 * The audience cannot read. "RED" over the left mat is decoration to them. So
 * every mat label is a swatch or a shape outline first and the word second: the
 * picture tells them what the mat is for and the word is there to be met, not
 * to be relied on. The shape mats' emblems are drawn white on purpose, because
 * a blue circle emblem over the circle mat would teach that circles are blue.
 */

import React from 'react'
import { LessonVideo, FONT, type Painter } from '../../shell'
import {
  backdrop, blackboard, boardRect, chalk, himAt, inked, poseRig, shape,
  type Rect, type RigEvent,
} from '../../draw'
import {
  SORTING_LESSON, ITEMS, BY_COLOUR, BY_SHAPE,
  type Item, type Move, type Side,
} from './lesson'

/* ── the palette ───────────────────────────────────────────────────────────── */

const RED_FILL = '#e2513c'
const BLUE_FILL = '#3b7ddd'
const MAT_FILL = '#fff3d6'
const INK = '#3a2a16'

const fillOf = (item: Item) => (item.colour === 'red' ? RED_FILL : BLUE_FILL)

/* ── the floor ─────────────────────────────────────────────────────────────── */

/**
 * One radius for all six, in every scene, forever.
 *
 * The claim the video makes out loud is that nothing about the things changed
 * when the groups did. An object that grew when it became the subject would
 * contradict the narration in the only language a four year old is fluent in.
 */
const itemR = (h: number) => h * 0.075

/** Where the six sit before either sort, and between the two of them. */
const pileAt = (w: number, h: number, i: number) =>
  ({ x: w * 0.59 + (i - 2.5) * w * 0.118, y: h * 0.655 })

/**
 * The two mats.
 *
 * They stop short of the left edge because Ananse stands there and his back
 * legs reach about a radius and a half out from him. A mat drawn under his feet
 * reads as a mat he is standing on, which is not what it is.
 */
const matRect = (w: number, h: number, side: Side): Rect => ({
  x: side === 'left' ? w * 0.235 : w * 0.610,
  y: h * 0.50,
  w: w * 0.335,
  h: h * 0.30,
})

/** The three places on a mat, left to right, in the order they are filled. */
const slotAt = (w: number, h: number, side: Side, slot: number) => {
  const m = matRect(w, h, side)
  return { x: m.x + m.w / 2 + (slot - 1) * w * 0.115, y: h * 0.625 }
}

/** Which mat and which place an object ends up in, for a given sort. */
function placeIn(groups: Record<Side, number[]>, i: number) {
  const l = groups.left.indexOf(i)
  return l >= 0
    ? { side: 'left' as Side, slot: l }
    : { side: 'right' as Side, slot: groups.right.indexOf(i) }
}

const slotOf = (w: number, h: number, groups: Record<Side, number[]>, i: number) => {
  const p = placeIn(groups, i)
  return slotAt(w, h, p.side, p.slot)
}

/* ── moving things about ───────────────────────────────────────────────────── */

const clamp01 = (u: number) => Math.max(0, Math.min(1, u))
const fadeIn = (t: number, at: number, over: number) => clamp01((t - at) / over)

/** Smoothstep, so nothing starts or stops with a jerk. */
const ease = (u: number) => { const p = clamp01(u); return p * p * (3 - 2 * p) }

/** How long one object takes to walk from wherever it is to wherever it goes. */
const MOVE = 0.55

interface Point { x: number, y: number }

/**
 * A hop from one place to another.
 *
 * The arc is the whole reason this is not a straight tween. A thing sliding
 * sideways across a floor is being pushed by somebody; a thing that lifts,
 * travels and lands went there itself, which is the reading that makes the
 * six objects feel like they are being sorted rather than shoved.
 */
function glide(a: Point, b: Point, u: number, h: number): Point {
  const p = clamp01(u)
  const lift = Math.sin(p * Math.PI) * h * 0.055
  return {
    x: a.x + (b.x - a.x) * ease(p),
    y: a.y + (b.y - a.y) * ease(p) - lift,
  }
}

/* ── the mats, drawn ───────────────────────────────────────────────────────── */

type Emblem = { swatch: string } | { form: string }
interface MatLabel { text: string, emblem: Emblem }

const COLOUR_LABELS: Record<Side, MatLabel> = {
  left: { text: 'RED', emblem: { swatch: RED_FILL } },
  right: { text: 'BLUE', emblem: { swatch: BLUE_FILL } },
}
const SHAPE_LABELS: Record<Side, MatLabel> = {
  left: { text: 'CIRCLES', emblem: { form: 'circle' } },
  right: { text: 'TRIANGLES', emblem: { form: 'triangle' } },
}
/* The reveal puts a colour mat and a shape mat side by side, which is the only
   time in the video the child is offered both sorts at once. */
const SAME_LABELS: Record<Side, MatLabel> = {
  left: { text: 'RED', emblem: { swatch: RED_FILL } },
  right: { text: 'CIRCLES', emblem: { form: 'circle' } },
}

/**
 * The emblem is a square for a colour and the shape itself for a shape.
 *
 * A round swatch would have been a circle, and a circle on the RED mat is a
 * second claim nobody made. The square is the one form that is not being sorted
 * for, so it reads as "this colour" and nothing else.
 */
function emblemOn(
  ctx: CanvasRenderingContext2D, e: Emblem, x: number, y: number, r: number,
) {
  if ('swatch' in e) shape(ctx, 'square', x, y, r, e.swatch, { line: 3 })
  else shape(ctx, e.form, x, y, r, '#ffffff', { line: 3, gloss: false })
}

function matBody(
  ctx: CanvasRenderingContext2D, w: number, h: number, side: Side, alpha: number,
) {
  if (alpha <= 0.01) return
  const m = matRect(w, h, side)
  ctx.save()
  ctx.globalAlpha = alpha
  ctx.beginPath()
  ctx.roundRect(m.x, m.y, m.w, m.h, m.h * 0.13)
  inked(ctx, MAT_FILL, 4)
  ctx.restore()
}

/**
 * The label along the bottom of the mat, under the objects rather than over
 * them.
 *
 * Above the mat is where the six are still piled up in the moment before they
 * are sorted, and a word behind a pile of counters is a word nobody reads.
 * Drawn separately from the mat itself so that a relabelling can crossfade two
 * words over one mat that never moves.
 */
function matLabel(
  ctx: CanvasRenderingContext2D, w: number, h: number,
  side: Side, label: MatLabel, alpha: number,
) {
  if (alpha <= 0.01) return
  const m = matRect(w, h, side)
  const size = h * 0.05
  ctx.save()
  ctx.globalAlpha = alpha
  ctx.font = `800 ${Math.round(size)}px ${FONT}`
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'left'
  const er = size * 0.58
  const gap = size * 0.42
  const tw = ctx.measureText(label.text).width
  const x0 = m.x + m.w / 2 - (er * 2 + gap + tw) / 2
  const y = m.y + m.h * 0.815
  emblemOn(ctx, label.emblem, x0 + er, y, er)
  ctx.fillStyle = INK
  ctx.fillText(label.text, x0 + er * 2 + gap, y)
  ctx.restore()
}

/** Both mats at once, with one label set crossfading into another. */
function drawMats(
  ctx: CanvasRenderingContext2D, w: number, h: number, alpha: number,
  from: Record<Side, MatLabel>, to?: Record<Side, MatLabel>, swap = 0,
) {
  for (const side of ['left', 'right'] as Side[]) {
    matBody(ctx, w, h, side, alpha)
    matLabel(ctx, w, h, side, from[side], alpha * (1 - swap))
    if (to) matLabel(ctx, w, h, side, to[side], alpha * swap)
  }
}

/* ── the objects, drawn ────────────────────────────────────────────────────── */

function drawItem(
  ctx: CanvasRenderingContext2D, item: Item, p: Point, r: number,
  opts: { alpha?: number, ring?: number, t?: number, lift?: number } = {},
) {
  const alpha = opts.alpha === undefined ? 1 : opts.alpha
  if (alpha <= 0.01) return
  const lift = opts.lift || 0
  ctx.save()
  ctx.globalAlpha = alpha

  /* A contact shadow, so it is standing on the floor of the room and not
     floating in front of it. It is drawn from the unlifted position, because
     the shadow is what says where the floor is and one that rises with the
     thing above it reads as the whole room tilting. */
  ctx.save()
  ctx.globalAlpha = alpha * 0.15
  ctx.fillStyle = '#5a3a1c'
  ctx.beginPath()
  ctx.ellipse(p.x, p.y + lift + r * 1.02, r * 0.66, r * 0.16, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()

  /* The same dashed ring the counting lesson puts on the object being counted,
     so a child who has watched that one already knows what it means. */
  if (opts.ring && opts.ring > 0.01) {
    ctx.save()
    ctx.globalAlpha = alpha * opts.ring * 0.3
    ctx.fillStyle = '#ffd93b'
    ctx.beginPath()
    ctx.arc(p.x, p.y, r * 1.4, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalAlpha = alpha * opts.ring
    ctx.strokeStyle = '#ffd93b'
    ctx.lineWidth = Math.max(5, r * 0.19)
    ctx.setLineDash([r * 0.46, r * 0.3])
    ctx.lineDashOffset = -(opts.t || 0) * r * 1.6
    ctx.beginPath()
    ctx.arc(p.x, p.y, r * 1.26, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()
  }

  shape(ctx, item.form, p.x, p.y, r, fillOf(item), { line: 4 })
  ctx.restore()
}

/* ── him ───────────────────────────────────────────────────────────────────── */

/** Ananse watching the sort, hopping as each object lands where it belongs. */
function presenter(
  ctx: CanvasRenderingContext2D, w: number, h: number, t: number,
  events: RigEvent[],
) {
  const him = himAt(w, h)
  const rig = poseRig(ctx, t, [{ at: 0, mood: 'hello' }, ...events])
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

/** The heading chalked at the top of the board, written on as he speaks. */
function heading(
  ctx: CanvasRenderingContext2D, w: number, h: number, text: string, t: number,
) {
  const board = boardRect(w, h)
  blackboard(ctx, board)
  const on = fadeIn(t, 0.3, 0.9)
  chalk(ctx, text, board.x + board.w / 2, board.y + board.h * 0.5,
    board.h * 0.27, FONT, on)
  return board
}

/* ── the scenes ────────────────────────────────────────────────────────────── */

const intro: Painter = (ctx, w, h, t) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)

  const on = fadeIn(t, 0.5, 1.1)
  chalk(ctx, 'Sorting', board.x + board.w / 2, board.y + board.h * 0.38,
    board.h * 0.3, FONT, on)
  chalk(ctx, 'by colour and by shape', board.x + board.w / 2,
    board.y + board.h * 0.74, board.h * 0.15, FONT, fadeIn(t, 1.1, 0.8))

  /**
   * The six he is about to sort, already on the board behind him.
   *
   * They are the subject of the next three scenes and this is the only cheap
   * moment to let a child meet them, while the words being said are just a
   * greeting and there is nothing else to attend to.
   */
  const r = h * 0.038
  ITEMS.forEach((item, i) => {
    const a = fadeIn(t, 1.6 + i * 0.16, 0.3)
    if (a <= 0.01) return
    ctx.save()
    ctx.globalAlpha = a
    shape(ctx, item.form, w * 0.5 + (i - 2.5) * r * 2.9, h * 0.47, r * a,
      fillOf(item), { line: 3 })
    ctx.restore()
  })

  /* Centre stage and bigger than he is anywhere else, with the floor to
     himself. He is the reason a child stays for scene two. */
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.5, h * 0.5] },
    { at: 0.45, hop: 260 },
    { at: 2.8, hop: 180 },
  ])
  const feet = h * 0.79
  rig.draw(w * 0.5, feet - h * 0.15 * 1.3, h * 0.15, feet)
}

/** The six arrive in a row, then walk onto the red mat and the blue mat. */
const colour: Painter = (ctx, w, h, t, scene) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  heading(ctx, w, h, 'By colour', t)

  const plan = (scene.data?.plan || []) as Move[]
  const matsAt = (scene.data?.matsAt as number) || 0
  drawMats(ctx, w, h, fadeIn(t, matsAt, 0.5), COLOUR_LABELS)

  const r = itemR(h)
  ITEMS.forEach((item, i) => {
    const from = pileAt(w, h, i)
    const m = plan.find(p => p.i === i)
    const p = m && t >= m.at
      ? glide(from, slotAt(w, h, m.side, m.slot), (t - m.at) / MOVE, h)
      : from
    drawItem(ctx, item, p, r, { alpha: fadeIn(t, 0.3 + i * 0.09, 0.3), t })
  })

  presenter(ctx, w, h, t, plan.map(m => {
    const s = slotAt(w, h, m.side, m.slot)
    return { at: m.at, look: [s.x, s.y] as [number, number], hop: 120 }
  }))
}

/**
 * The same six swept back together and sorted again, this time by shape.
 *
 * It opens on the colour sort still standing, because the cut between this
 * scene and the last one is the one moment a child could believe a fresh set of
 * objects was brought out. Nothing is allowed to move until he says he is
 * mixing them up.
 */
const byShape: Painter = (ctx, w, h, t, scene) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  heading(ctx, w, h, 'By shape', t)

  const plan = (scene.data?.plan || []) as Move[]
  const mixAt = (scene.data?.mixAt as number) || 0
  /* The mats stay put and only their labels change. Swapping the mats
     themselves would say that these are different mats, and the claim is that
     everything except the rule is the same as it was. */
  drawMats(ctx, w, h, 1, COLOUR_LABELS, SHAPE_LABELS, ease(fadeIn(t, mixAt, 0.45)))

  const r = itemR(h)
  ITEMS.forEach((item, i) => {
    const start = slotOf(w, h, BY_COLOUR, i)
    const middle = pileAt(w, h, i)
    let p = t >= mixAt ? glide(start, middle, (t - mixAt) / MOVE, h) : start
    const m = plan.find(q => q.i === i)
    if (m && t >= m.at) {
      p = glide(middle, slotAt(w, h, m.side, m.slot), (t - m.at) / MOVE, h)
    }
    drawItem(ctx, item, p, r, { t })
  })

  presenter(ctx, w, h, t, [
    { at: mixAt, look: [w * 0.59, h * 0.62], hop: 200 },
    ...plan.map(m => {
      const s = slotAt(w, h, m.side, m.slot)
      return { at: m.at, look: [s.x, s.y] as [number, number], hop: 120 }
    }),
  ])
}

/**
 * One red circle, two mats, and nothing else to look at.
 *
 * ── Why five of the six leave ────────────────────────────────────────────────
 *
 * With all six on screen the claim "it can go here or it can go there" is a
 * claim about a crowd, and a child tracking six objects has no attention left
 * to spend on which group any one of them is in. Emptying the frame costs a
 * second and buys the only idea in the video.
 */
const same: Painter = (ctx, w, h, t, scene) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  heading(ctx, w, h, 'The same thing', t)

  const d = scene.data || {}
  const soloAt = (d.soloAt as number) || 0
  const leftAt = (d.leftAt as number) || 0
  const backAt = (d.backAt as number) || 0
  const rightAt = (d.rightAt as number) || 0

  drawMats(ctx, w, h, 1, SHAPE_LABELS, SAME_LABELS, ease(fadeIn(t, soloAt, 0.5)))

  const r = itemR(h)

  /* The other five fade where they stand rather than walking off. They are not
     going anywhere in the story, they are simply no longer the subject, and a
     five object exit would be the most interesting thing on screen at the exact
     moment it stops mattering. */
  const gone = fadeIn(t, soloAt, 0.45)
  ITEMS.forEach((item, i) => {
    if (i === 0) return
    drawItem(ctx, item, slotOf(w, h, BY_SHAPE, i), r, { alpha: 1 - gone, t })
  })

  /* Between the two mats and above them, belonging to neither yet. */
  const middle = { x: w * 0.575, y: h * 0.555 }
  const hero = ITEMS[0]
  let p = t >= soloAt
    ? glide(slotOf(w, h, BY_SHAPE, 0), middle, (t - soloAt) / MOVE, h)
    : slotOf(w, h, BY_SHAPE, 0)
  if (t >= leftAt) p = glide(middle, slotAt(w, h, 'left', 1), (t - leftAt) / MOVE, h)
  if (t >= backAt) p = glide(slotAt(w, h, 'left', 1), middle, (t - backAt) / MOVE, h)
  if (t >= rightAt) p = glide(middle, slotAt(w, h, 'right', 1), (t - rightAt) / MOVE, h)
  drawItem(ctx, hero, p, r, { t, ring: fadeIn(t, soloAt + 0.3, 0.4) })

  presenter(ctx, w, h, t, [
    { at: soloAt, look: [middle.x, middle.y], hop: 190 },
    { at: leftAt, look: [slotAt(w, h, 'left', 1).x, h * 0.625], hop: 140 },
    { at: backAt, look: [middle.x, middle.y] },
    { at: rightAt, look: [slotAt(w, h, 'right', 1).x, h * 0.625], hop: 140 },
  ])
}

/** The recap. No sorting game exists yet, so this is where the video ends. */
const home: Painter = (ctx, w, h, t) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)
  chalk(ctx, 'Well done!', board.x + board.w / 2, board.y + board.h * 0.36,
    board.h * 0.29, FONT, fadeIn(t, 0.1, 0.5))
  chalk(ctx, 'Now go and sort your own things', board.x + board.w / 2,
    board.y + board.h * 0.76, board.h * 0.14, FONT, fadeIn(t, 0.9, 0.6))

  /* All six back in one row and unsorted, which is where they started and where
     the child's own socks are. */
  const r = itemR(h)
  ITEMS.forEach((item, i) => {
    const p = pileAt(w, h, i)
    const bob = Math.abs(Math.sin(t * 2.3 + i * 0.7)) * h * 0.022
    drawItem(ctx, item, { x: p.x, y: p.y - bob }, r, { t, lift: bob })
  })

  presenter(ctx, w, h, t, [
    { at: 0.4, look: [w * 0.59, h * 0.6], hop: 260 },
    { at: 2.6, hop: 200 },
    { at: 5.0, hop: 220 },
  ])
}

export const PAINTERS: Record<string, Painter> = {
  intro, colour, shape: byShape, same, home,
}

export const SortingLesson: React.FC = () => (
  <LessonVideo lesson={SORTING_LESSON} painters={PAINTERS} />
)

export { SORTING_LESSON }
