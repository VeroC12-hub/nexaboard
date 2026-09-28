/**
 * Number Bonds to 5: what each scene looks like.
 *
 * ── The one rule this lesson is built on ─────────────────────────────────────
 *
 * Nothing arrives and nothing leaves. Five mangoes are counted in at the start
 * of the teaching scene and after that the only thing on screen that ever moves
 * is the stick. Every earlier attempt at this lesson slid the parts apart to
 * "show" the split, and every one of them taught the wrong thing: a child who
 * watches two mangoes walk away from three has watched a subtraction. The five
 * has to stay a row of five, untouched, or the lesson says the opposite of what
 * it means to.
 *
 * So the split is drawn as a cut, not as a move: a stick between two mangoes
 * and a coloured band over each side. The mangoes themselves are the same five
 * objects in the same five places from the first frame to the last.
 */

import React from 'react'
import {
  LessonVideo, FONT, type Painter, type Scene,
} from '../../shell'
import {
  backdrop, blackboard, boardRect, fieldRect, himAt, poseRig,
  drawGroup, drawOne, layout, beatNumeral, chalk, boardNumber, inked,
  type Rect, type RigEvent, type Spot,
} from '../../draw'
import { BONDS_LESSON, type Split } from './lesson'

const THING = 'mango'

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five']

/** The part on the left of the stick, and the part on its right. */
const LEFT_TINT = '#ffd166'
const RIGHT_TINT = '#5ac8fa'
/** The stick itself, in the same yellow the counting ring uses. */
const STICK = '#ffd93b'

const clamp = (n: number) => Math.max(0, Math.min(1, n))
/** Ease in and out, so the stick never starts or stops at full speed. */
const ease = (p: number) => { const q = clamp(p); return q * q * (3 - 2 * q) }
/** How far through its arrival a thing is, given when its beat was. */
const pop = (t: number, at: number) => clamp((t - at) / 0.3)

/** How long the stick takes to walk from one gap to the next. */
const STEP = 0.45

function splitsOf(scene: Scene, key: string): Split[] {
  const d = (scene.data || {}) as Record<string, unknown>
  return (d[key] as Split[]) || []
}

/** The one in the list whose moment has come, or -1 before any of them. */
function current(list: Split[], t: number): number {
  let at = -1
  for (let i = 0; i < list.length; i++) if (t >= list[i].at) at = i
  return at
}

/* ── the floor ─────────────────────────────────────────────────────────────── */

/**
 * The six places the stick can stand, for a row of five.
 *
 * Between each neighbouring pair, and half a gap outside each end. The two
 * outside positions are the whole reason zero and five are in this lesson: a
 * stick with nothing on one side of it is what zero looks like, and it is much
 * easier to believe than an empty space where mangoes used to be.
 */
function stickXs(spots: Spot[]): number[] {
  const gap = spots[1].x - spots[0].x
  const xs = [spots[0].x - gap / 2]
  for (let i = 1; i < spots.length; i++) xs.push((spots[i - 1].x + spots[i].x) / 2)
  xs.push(spots[spots.length - 1].x + gap / 2)
  return xs
}

/**
 * A coloured wash over one part.
 *
 * ── Why a band and not two different coloured mangoes ────────────────────────
 *
 * Recolouring the fruit was the obvious idea and it is wrong twice over. A
 * green mango and a yellow mango are two kinds of thing, so the row stops being
 * five of anything, and the colours have to swap on every step, which is the
 * five changing under the child's eyes again. A band is laid over the top and
 * changes nothing underneath it: the mangoes stay identical, and the band says
 * only "this lot, here".
 */
function band(
  ctx: CanvasRenderingContext2D, from: Spot, to: Spot, r: number,
  fill: string, alpha: number,
) {
  if (alpha <= 0.01) return
  ctx.save()
  ctx.globalAlpha = alpha * 0.26
  ctx.fillStyle = fill
  ctx.beginPath()
  ctx.roundRect(
    from.x - r * 1.3, from.y - r * 1.45,
    (to.x - from.x) + r * 2.6, r * 2.9, r * 0.6,
  )
  ctx.fill()
  ctx.restore()
}

/**
 * The stick, drawn with the house outline so it belongs to the same world.
 *
 * It has a knob on top for one reason: a bare bar between two mangoes reads as
 * a gap in the floor, and a stick with a handle reads as something Ananse is
 * holding and moving on purpose.
 */
function stick(
  ctx: CanvasRenderingContext2D, x: number, y: number, r: number, alpha: number,
) {
  if (alpha <= 0.01) return
  const w = Math.max(6, r * 0.2)
  const top = y - r * 1.55
  const bottom = y + r * 1.35
  ctx.save()
  ctx.globalAlpha = clamp(alpha)
  ctx.beginPath()
  ctx.roundRect(x - w / 2, top, w, bottom - top, w / 2)
  inked(ctx, STICK, 3.5)
  ctx.beginPath()
  ctx.arc(x, top - w * 0.5, w * 0.95, 0, Math.PI * 2)
  inked(ctx, STICK, 3.5)
  ctx.restore()
}

/* ── the board ─────────────────────────────────────────────────────────────── */

/**
 * The pair, written as a pair.
 *
 * Both numbers the same size and the same distance from the middle, because
 * neither of them is the answer. A bond is one fact with two halves, and the
 * moment one half is written larger or first it becomes a sum with a result,
 * which is the lesson after this one.
 */
function pairOnBoard(
  ctx: CanvasRenderingContext2D, r: Rect, left: number, age: number,
) {
  const grow = 1 + Math.max(0, 1 - age / 0.3) * 0.14
  const mid = r.y + r.h * 0.44
  chalk(ctx, String(left), r.x + r.w * 0.26, mid, r.h * 0.4 * grow, FONT)
  chalk(ctx, 'and', r.x + r.w * 0.5, mid + r.h * 0.03, r.h * 0.14, FONT, 0.8)
  chalk(ctx, String(5 - left), r.x + r.w * 0.74, mid, r.h * 0.4 * grow, FONT)
  chalk(ctx, 'MAKE FIVE', r.x + r.w * 0.5, r.y + r.h * 0.84, r.h * 0.13, FONT, 0.82)
}

/* ── 1. the title ──────────────────────────────────────────────────────────── */

const intro: Painter = (ctx, w, h, t) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)

  const on = clamp((t - 0.5) / 1.1)
  chalk(ctx, 'Number Bonds to 5', board.x + board.w / 2, board.y + board.h * 0.42,
    board.h * 0.22, FONT, on)
  chalk(ctx, '5 = ? and ?', board.x + board.w / 2, board.y + board.h * 0.76,
    board.h * 0.17, FONT, clamp((t - 1.4) / 0.8) * 0.9)

  /* Alone and at presenting size. Nothing else is on the floor yet, so the
     frame is his and there is no chance of him standing on the lesson. */
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.5, h * 0.42] },
    { at: 0.45, hop: 260 },
    { at: 2.8, hop: 180 },
  ])
  const r = h * 0.15
  const feet = h * 0.78
  rig.draw(w * 0.5, feet - r * 1.3, r, feet)
}

/* ── 2 and 3. the stick walks ──────────────────────────────────────────────── */

/**
 * The teaching scene and the practice scene are the same picture.
 *
 * One counts the five in first and cuts it three ways, the other cuts it the
 * other three ways. That is a difference of what is in `data`, not a difference
 * of what is drawn, so it is one painter registered twice. Written as two it
 * would be the same eighty lines with three numbers changed, and the second
 * copy is where the bug would live.
 */
const walk: Painter = (ctx, w, h, t, scene) => {
  const beats = scene.notes || []
  const splits = splitsOf(scene, 'splits')

  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)

  const box = fieldRect(w, h)
  const { spots, r } = layout(5, box)
  const xs = stickXs(spots)

  let landed = 0
  for (const at of beats) if (t >= at) landed++
  const now = current(splits, t)

  /* Before the stick appears the board is doing the counting lesson's job, so
     it uses the counting lesson's board: numeral, word, ten frame. The moment
     the stick arrives it becomes a pair and stays one. */
  if (now < 0) {
    if (landed > 0) {
      const since = t - beats[landed - 1]
      boardNumber(ctx, landed, board, FONT,
        1 + Math.max(0, 1 - since / 0.28) * 0.14, WORDS[landed])
    } else {
      chalk(ctx, 'How many?', board.x + board.w / 2, board.y + board.h * 0.5,
        board.h * 0.22, FONT, 0.9)
    }
  } else {
    pairOnBoard(ctx, board, splits[now].left, t - splits[now].at)
  }

  /* Where the stick is: walking from the last gap to this one. On the first
     split there is nowhere to walk from, so it fades in where it stands. */
  let stickX = 0
  let stickAlpha = 0
  if (now >= 0) {
    const to = xs[splits[now].left]
    const from = now > 0 ? xs[splits[now - 1].left] : to
    const p = ease((t - splits[now].at) / STEP)
    stickX = from + (to - from) * p
    stickAlpha = now > 0 ? 1 : ease((t - splits[now].at) / 0.3)
  }

  /* The bands are drawn from the stick's live position, not from the split it
     is heading for, so a mango changes side at the instant the stick passes it
     rather than a moment early. That crossing is the whole event. */
  if (stickAlpha > 0.01) {
    const leftSide = spots.filter(s => s.x < stickX)
    const rightSide = spots.filter(s => s.x >= stickX)
    if (leftSide.length) {
      band(ctx, leftSide[0], leftSide[leftSide.length - 1], r, LEFT_TINT, stickAlpha)
    }
    if (rightSide.length) {
      band(ctx, rightSide[0], rightSide[rightSide.length - 1], r, RIGHT_TINT, stickAlpha)
    }
  }

  /* `shown` is five for the whole of the practice scene, because that scene has
     no beats at all: the five are already standing there and counting them
     again would say something had changed. */
  const shown = beats.length ? (now >= 0 ? 5 : landed) : 5
  drawGroup(ctx, THING, 5, box, {
    t,
    shown,
    face: true,
    pops: beats.length ? beats.map(at => pop(t, at)) : undefined,
    lit: now < 0 && landed > 0 ? landed - 1 : undefined,
  })

  if (now < 0 && landed > 0) {
    beatNumeral(ctx, landed, spots[landed - 1], r, t - beats[landed - 1], FONT)
  }

  stick(ctx, stickX, spots[0].y, r, stickAlpha)

  const him = himAt(w, h)
  const events: RigEvent[] = [{ at: 0, mood: 'hello', look: [w * 0.55, h * 0.6] }]
  for (const at of beats) events.push({ at, look: [spots[0].x, spots[0].y], hop: 90 })
  /* He looks at the stick, not at the board. The child follows his eyes, and
     the thing worth looking at is the cut. */
  for (const s of splits) {
    events.push({ at: s.at, look: [xs[s.left], spots[0].y], hop: 120 })
  }
  const rig = poseRig(ctx, t, events)
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

/* ── 4. one and four above four and one ────────────────────────────────────── */

/** A small row of five with a stick in it, used twice in the mirror scene. */
function miniRow(
  ctx: CanvasRenderingContext2D, left: number,
  cx: number, y: number, r: number, t: number, arrive: number,
) {
  const p = clamp((t - arrive) / 0.4)
  if (p <= 0) return
  const gap = r * 2.4
  const xs: number[] = []
  for (let i = 0; i < 5; i++) xs.push(cx + (i - 2) * gap)

  const spot = (i: number): Spot => ({ x: xs[i], y, index: i })
  if (left > 0) band(ctx, spot(0), spot(left - 1), r, LEFT_TINT, p)
  if (left < 5) band(ctx, spot(left), spot(4), r, RIGHT_TINT, p)

  for (let i = 0; i < 5; i++) {
    ctx.save()
    ctx.globalAlpha = 0.14 * p
    ctx.fillStyle = '#5a3a1c'
    ctx.beginPath()
    ctx.ellipse(xs[i], y + r * 0.98, r * 0.6 * p, r * 0.15, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

    ctx.save()
    ctx.translate(xs[i], y)
    drawOne(THING, ctx, r, { t, index: i, face: true, bob: true, pop: p })
    ctx.restore()
  }
  stick(ctx, cx + (left - 2.5) * gap, y, r, p)
}

const mirror: Painter = (ctx, w, h, t, scene) => {
  const pairs = splitsOf(scene, 'pairs')
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)

  chalk(ctx, '1 and 4', board.x + board.w / 2, board.y + board.h * 0.3,
    board.h * 0.26, FONT, pairs.length ? clamp((t - pairs[0].at) / 0.4) : 0)
  chalk(ctx, '4 and 1', board.x + board.w / 2, board.y + board.h * 0.62,
    board.h * 0.26, FONT, pairs.length > 1 ? clamp((t - pairs[1].at) / 0.4) : 0)
  chalk(ctx, 'BOTH MAKE FIVE', board.x + board.w / 2, board.y + board.h * 0.88,
    board.h * 0.12, FONT, clamp((t - 1.6) / 0.6) * 0.85)

  /**
   * Two rows, hand placed rather than taken from `fieldRect`.
   *
   * The shared field is one row of things as big as the floor allows, which is
   * right everywhere else and wrong here: two of those rows stacked would reach
   * into the caption band. These are sized to leave the bottom eighteen percent
   * of the frame alone, and the two rows are the same size as each other to the
   * pixel, because the entire claim being made is that they are the same five.
   */
  const r = h * 0.062
  const cx = w * 0.57
  if (pairs.length) miniRow(ctx, pairs[0].left, cx, h * 0.585, r, t, pairs[0].at)
  if (pairs.length > 1) miniRow(ctx, pairs[1].left, cx, h * 0.735, r, t, pairs[1].at)

  const him = himAt(w, h)
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [cx, h * 0.6] },
    ...pairs.map(p => ({ at: p.at, look: [cx, h * 0.66] as [number, number], hop: 180 })),
  ])
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

/* ── 5. over to the game ───────────────────────────────────────────────────── */

const handover: Painter = (ctx, w, h, t) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)
  chalk(ctx, 'Your turn!', board.x + board.w / 2, board.y + board.h * 0.36,
    board.h * 0.3, FONT, clamp(t / 0.5))
  /* What the game actually asks, in the game's own words. The button opens
     Feed Ananse, so the board says feed. */
  chalk(ctx, 'Count the mangoes and feed Ananse', board.x + board.w / 2,
    board.y + board.h * 0.76, board.h * 0.14, FONT, clamp((t - 0.8) / 0.6))

  const box = fieldRect(w, h)
  drawGroup(ctx, THING, 5, { ...box, y: box.y + box.h * 0.12, h: box.h * 0.72 },
    { t, face: true, party: true })

  const him = himAt(w, h)
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.5, h * 0.45] },
    { at: 0.4, hop: 280 },
    { at: 2.4, hop: 200 },
  ])
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

export const PAINTERS: Record<string, Painter> = {
  intro, teach: walk, practise: walk, mirror, handover,
}

export const BondsLesson: React.FC = () => (
  <LessonVideo lesson={BONDS_LESSON} painters={PAINTERS} />
)

export { BONDS_LESSON }
