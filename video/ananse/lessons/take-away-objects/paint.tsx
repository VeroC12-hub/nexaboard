/**
 * Simple Subtraction with Objects: what each scene looks like.
 *
 * ── Why three of the five scenes share one painter ───────────────────────────
 *
 * Counting 1 to 10 has a painter per scene because its scenes genuinely differ:
 * things arriving, things grouped, things lit in turn. Here the middle three
 * scenes are one picture in three states. Mangoes stand on the floor, some of
 * them leave, and what is left gets counted, and which of those is happening at
 * a given second is entirely a question of what time it is. Written as three
 * painters it would be the same eighty lines three times, and a fix to the
 * flight arc would have to be made three times or, more likely, twice.
 *
 * So `field` is the painter and the scene's `data` is its script.
 */

import React from 'react'
import {
  LessonVideo, FONT, type Painter, type Scene,
} from '../../shell'
import {
  backdrop, blackboard, boardRect, fieldRect, himAt, poseRig,
  drawOne, rowOf, sizeFor, beatNumeral, chalk, boardNumber,
  LINE, type RigEvent, type Spot,
} from '../../draw'
import { TAKE_AWAY_LESSON } from './lesson'

const THING = 'mango'

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six']

/** How long a mango takes to reach his mouth once it has let go. */
const FLIGHT = 0.6
/** How long before that it starts to wobble, so the leaving is announced. */
const WOBBLE = 0.45
/** How long he chews afterwards. */
const CHEW = 1.0
/** How long the outline of an eaten mango takes to fade once it is told to. */
const FADE = 0.7

const clamp = (n: number) => Math.max(0, Math.min(1, n))
/** Ease in and out, so nothing starts or stops at full speed. */
const ease = (p: number) => p * p * (3 - 2 * p)

interface Bite { at: number, index: number }

interface Script {
  total: number
  arrive: number[]
  bites: Bite[]
  numberBeats: number[]
  ghostFade: number | null
  sumAt: number | null
  sum: string | null
  label: string
}

function script(scene: Scene): Script {
  const d = (scene.data || {}) as Record<string, unknown>
  return {
    total: (d.total as number) || 0,
    arrive: (d.arrive as number[]) || [],
    bites: (d.bites as Bite[]) || [],
    numberBeats: (d.numberBeats as number[]) || [],
    ghostFade: (d.ghostFade as number) ?? null,
    sumAt: (d.sumAt as number) ?? null,
    sum: (d.sum as string) ?? null,
    label: (d.label as string) || '',
  }
}

/**
 * Where a mango is swallowed.
 *
 * The rig puts its head at 0.78 of a radius above the body centre and its mouth
 * a third of a head below that, and the body centre is 1.3 radii above the feet.
 * That lands here. It is worth the arithmetic: a mango that arcs to the middle
 * of his body reads as being thrown at him, not eaten.
 */
const mouthOf = (w: number, h: number) => {
  const him = himAt(w, h)
  return { x: him.x, y: him.feet - him.r * 1.83 }
}

/* ── one mango, in whichever state it is in ────────────────────────────────── */

/** The contact shadow that puts a thing on the floor rather than over it. */
function shadow(
  ctx: CanvasRenderingContext2D, x: number, y: number, r: number, amount: number,
) {
  ctx.save()
  ctx.globalAlpha = 0.14 * clamp(amount)
  ctx.fillStyle = '#5a3a1c'
  ctx.beginPath()
  ctx.ellipse(x, y + r * 0.98, r * 0.62 * clamp(amount), r * 0.15, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

/**
 * The hole a mango left behind.
 *
 * ── Why it is there at all, and why it goes ──────────────────────────────────
 *
 * While the eating is being talked about, the gaps are the evidence. Without
 * them the five simply becomes three between one shot and the next, and a child
 * has no reason to believe anything left.
 *
 * But they cannot still be there when the counting starts. Five outlines with
 * three mangoes in them is a picture of five places, and a child counting
 * places would get five and would not be wrong. So they fade first, and the
 * last count is over three mangoes and an empty floor.
 */
function ghost(
  ctx: CanvasRenderingContext2D, s: Spot, r: number, alpha: number,
) {
  if (alpha <= 0.01) return
  ctx.save()
  ctx.globalAlpha = alpha * 0.34
  ctx.strokeStyle = LINE()
  ctx.lineWidth = Math.max(2, r * 0.09)
  ctx.setLineDash([r * 0.3, r * 0.26])
  ctx.beginPath()
  ctx.ellipse(s.x, s.y, r * 0.78, r * 0.86, 0, 0, Math.PI * 2)
  ctx.stroke()
  ctx.restore()
}

/**
 * A mango on its way to being eaten.
 *
 * Up and across on an arc, spinning, shrinking as it goes in. A straight line
 * at a constant size looks like a sprite being moved; the arc is what reads as
 * a thing being picked up and put in a mouth.
 */
function flight(
  ctx: CanvasRenderingContext2D, s: Spot, r: number, p: number,
  to: { x: number, y: number }, index: number, t: number,
) {
  const e = ease(p)
  const x = s.x + (to.x - s.x) * e
  const y = s.y + (to.y - s.y) * e - Math.sin(Math.PI * p) * r * 2.1
  const size = r * (1 - 0.72 * e)
  ctx.save()
  ctx.globalAlpha = 1 - clamp((p - 0.82) / 0.18)
  ctx.translate(x, y)
  drawOne(THING, ctx, size, { t, index, spin: p * Math.PI * 1.7 })
  ctx.restore()
}

/* ── the painter the middle three scenes share ─────────────────────────────── */

const field: Painter = (ctx, w, h, t, scene) => {
  const s = script(scene)
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)

  /* ── the board ───────────────────────────────────────────────────────── */

  let counted = 0
  for (const b of s.numberBeats) if (t >= b) counted++

  if (s.sumAt !== null && t >= s.sumAt && s.sum) {
    /**
     * The sentence appears only once the counting is done.
     *
     * Written up front it is a fact to be believed, and the mangoes become an
     * illustration of it. Written afterwards it is a record of something the
     * child has just watched happen, which is the only order in which it means
     * anything at this age.
     */
    const on = clamp((t - s.sumAt) / 0.45)
    chalk(ctx, s.sum, board.x + board.w / 2, board.y + board.h * 0.5,
      board.h * 0.38 * (0.86 + on * 0.14), FONT, on)
  } else if (counted > 0) {
    const since = t - s.numberBeats[counted - 1]
    boardNumber(ctx, counted, board, FONT,
      1 + Math.max(0, 1 - since / 0.28) * 0.14, WORDS[counted])
  } else {
    chalk(ctx, s.label, board.x + board.w / 2, board.y + board.h * 0.5,
      board.h * 0.24, FONT, 0.9)
  }

  /* ── the floor ───────────────────────────────────────────────────────── */

  const box = fieldRect(w, h)
  /* Laid out for the number that started, so a mango that is still there never
     slides sideways when its neighbour is eaten. The gap is the whole point. */
  const spots = rowOf(s.total, box)
  const r = sizeFor(s.total, box)
  const mouth = mouthOf(w, h)

  /* Which mangoes are still standing, in order, so the count can ring them. */
  const standing: number[] = []
  for (let i = 0; i < s.total; i++) {
    if (!s.bites.some(b => b.index === i)) standing.push(i)
  }
  const lit = counted > 0 ? standing[counted - 1] : -1

  const flying: { i: number, p: number }[] = []

  for (let i = 0; i < s.total; i++) {
    const spot = spots[i]
    const at = s.arrive[i] ?? 0
    if (t < at) continue
    const pop = at < 0 ? 1 : clamp((t - at) / 0.3)
    const bite = s.bites.find(b => b.index === i)

    if (bite && t >= bite.at) {
      const p = (t - bite.at) / FLIGHT
      if (p < 1) { flying.push({ i, p }) } else {
        const fade = s.ghostFade === null ? 1 : 1 - clamp((t - s.ghostFade) / FADE)
        ghost(ctx, spot, r, fade)
      }
      continue
    }

    shadow(ctx, spot.x, spot.y, r, pop)

    if (lit === i) {
      /* The same ring the counting lesson uses, for the same reason: it is
         drawn on the thing itself, so it cannot end up pointing at a gap. */
      ctx.save()
      ctx.globalAlpha = 0.28
      ctx.fillStyle = '#ffd93b'
      ctx.beginPath()
      ctx.arc(spot.x, spot.y, r * 1.34, 0, Math.PI * 2)
      ctx.fill()
      ctx.globalAlpha = 1
      ctx.strokeStyle = '#ffd93b'
      ctx.lineWidth = Math.max(5, r * 0.2)
      ctx.setLineDash([r * 0.46, r * 0.3])
      ctx.lineDashOffset = -t * r * 1.6
      ctx.beginPath()
      ctx.arc(spot.x, spot.y, r * 1.2, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    }

    /* A mango about to be eaten shivers first. Something that vanishes without
       warning was never seen leaving, and then nothing was taken away. */
    let lean = 0
    let lift = 0
    if (bite) {
      const warn = clamp((t - (bite.at - WOBBLE)) / WOBBLE)
      lean = Math.sin(t * 34) * 0.14 * warn
      lift = warn * r * 0.16
    }

    ctx.save()
    ctx.translate(spot.x, spot.y - lift)
    ctx.rotate(lean)
    drawOne(THING, ctx, r, { t, index: i, face: true, bob: true, pop })
    ctx.restore()

    if (lit === i) {
      beatNumeral(ctx, counted, spot, r, t - s.numberBeats[counted - 1], FONT)
    }
  }

  /* ── him ─────────────────────────────────────────────────────────────── */

  const him = himAt(w, h)
  const events: RigEvent[] = [{ at: 0, mood: 'hello' }]
  for (let i = 0; i < s.numberBeats.length; i++) {
    const spot = spots[standing[i]]
    if (!spot) continue
    events.push({ at: s.numberBeats[i], look: [spot.x, spot.y], hop: 90 })
  }
  for (const b of s.bites) {
    events.push({ at: b.at - WOBBLE, look: [spots[b.index].x, spots[b.index].y] })
    events.push({ at: b.at + FLIGHT, hop: 150, look: [w * 0.5, h * 0.42] })
  }
  events.sort((a, c) => a.at - c.at)
  const rig = poseRig(ctx, t, events)

  /**
   * The crunch.
   *
   * `eat` is on the rig, but `poseRig` only replays moods, looks and hops, and
   * `draw.ts` is shared with four other lessons being written this week, so it
   * is not mine to extend. Chewing is one number that counts down, and setting
   * it from the clock here gives exactly what `eat` would have, while staying a
   * pure function of `t`: the same frame comes out the same whichever worker
   * renders it and in whatever order.
   */
  let chew = 0
  for (const b of s.bites) {
    const landed = b.at + FLIGHT
    if (t >= landed) chew = Math.max(chew, CHEW - (t - landed))
  }
  rig.chew = Math.max(0, chew)
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)

  /* Drawn last, so the mango passes in front of him and disappears at his face
     rather than behind his shoulder. */
  for (const f of flying) flight(ctx, spots[f.i], r, f.p, mouth, f.i, t)
}

/* ── the two scenes that are only him talking ──────────────────────────────── */

const intro: Painter = (ctx, w, h, t) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)

  const on = clamp((t - 0.5) / 1.1)
  chalk(ctx, 'Taking Away', board.x + board.w / 2, board.y + board.h * 0.42,
    board.h * 0.24, FONT, on)
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

  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.5, h * 0.5] },
    { at: 0.45, hop: 260 },
    { at: 2.8, hop: 180 },
  ])
  const r = h * 0.15
  const feet = h * 0.78
  rig.draw(w * 0.5, feet - r * 1.3, r, feet)
}

const handover: Painter = (ctx, w, h, t) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)
  chalk(ctx, 'Your turn!', board.x + board.w / 2, board.y + board.h * 0.36,
    board.h * 0.3, FONT, clamp(t / 0.5))
  /* What the game actually asks, in the game's own words. The button opens
     Feed Ananse, so it says feed. */
  chalk(ctx, 'Count the mangoes and feed Ananse', board.x + board.w / 2,
    board.y + board.h * 0.76, board.h * 0.13, FONT, clamp((t - 0.8) / 0.6))

  const box = fieldRect(w, h)
  const small = { ...box, y: box.y + box.h * 0.12, h: box.h * 0.72 }
  const spots = rowOf(5, small)
  const r = sizeFor(5, small)
  for (let i = 0; i < 5; i++) {
    shadow(ctx, spots[i].x, spots[i].y, r, 1)
    ctx.save()
    ctx.translate(spots[i].x, spots[i].y)
    drawOne(THING, ctx, r, { t, index: i, face: true, bob: true })
    ctx.restore()
  }

  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.5, h * 0.45] },
    { at: 0.4, hop: 280 },
    { at: 2.4, hop: 200 },
  ])
  const him = himAt(w, h)
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

export const PAINTERS: Record<string, Painter> = {
  intro, five: field, away: field, again: field, handover,
}

export const TakeAwayLesson: React.FC = () => (
  <LessonVideo lesson={TAKE_AWAY_LESSON} painters={PAINTERS} />
)

export { TAKE_AWAY_LESSON }
