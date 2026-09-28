/**
 * Simple Addition with Objects: what each scene looks like.
 *
 * ── Why the positions are worked out here instead of by `drawGroup` ──────────
 *
 * `drawGroup` lays n things out inside a box, which is exactly right when the
 * things are a group. Here they are two groups becoming one, and the only way
 * to say that with a box is to shrink one box and grow another, which resizes
 * the mangoes halfway through. A mango that gets smaller as it joins the pile
 * is a mango the child has reason to doubt is the same mango.
 *
 * So every mango keeps one radius for the whole scene and only its centre
 * moves, interpolated between where it stands apart and where it stands in the
 * finished row. Nothing is added, nothing is removed, nothing is rescaled: the
 * three and the two that are counted at the start are the same five objects
 * that get counted at the end, which is the entire claim addition makes.
 */

import React from 'react'
import {
  LessonVideo, FONT, type Painter, type Scene,
} from '../../shell'
import {
  backdrop, blackboard, boardRect, fieldRect, himAt, poseRig,
  drawGroup, drawOne, beatNumeral, chalk, inked,
  type Rect, type RigEvent, type Spot,
} from '../../draw'
import { ADD_LESSON, type Sum } from './lesson'

const THING = 'mango'

/** The plus sign, and the ring round whatever is being counted. */
const MARK = '#ffd93b'

const clamp = (n: number) => Math.max(0, Math.min(1, n))
const ease = (p: number) => { const q = clamp(p); return q * q * (3 - 2 * q) }

/** How long the two groups take to walk into one another. */
const MERGE = 0.9
/** How long the ring stays on a mango after its beat. */
const RING = 1.5

function sumOf(scene: Scene): Sum | null {
  const d = (scene.data || {}) as Record<string, unknown>
  return (d.sum as Sum) ?? null
}

/* ── where the mangoes stand ───────────────────────────────────────────────── */

interface Field {
  r: number
  /** Centre of mango `i` while the two groups are still apart. */
  apart: (i: number) => number
  /** Centre of mango `i` once they are one row. */
  joined: (i: number) => number
  /** Where the plus sign goes: the middle of the gap between the groups. */
  plusX: number
  y: number
}

/**
 * One row of `a` things, a gap, then one row of `b` things, all the same size.
 *
 * The gap is one and a bit spacings wide, which is the narrowest it can be and
 * still read as two groups rather than one row with a stumble in it. Wider and
 * the second group starts leaving the frame; the totals in this lesson stop at
 * six for that reason and not by accident.
 */
function field(w: number, h: number, a: number, b: number): Field {
  const box: Rect = fieldRect(w, h)
  const total = a + b
  const r = Math.min(box.h * 0.3, (box.w * 0.84) / ((total - 1) * 2.35 + 2.4))
  const step = r * 2.35
  const gap = step * 1.7
  /* Pushed right of centre, away from Ananse. His eight legs reach about one
     and a half radii either side of him and the leftmost mango has to clear
     them, or a frame of the two of them reads as him holding it. */
  const cx = box.x + box.w * 0.55
  const y = box.y + box.h * 0.46

  const apartWidth = (a - 1) * step + gap + (b - 1) * step
  const apartStart = cx - apartWidth / 2
  const joinedStart = cx - ((total - 1) * step) / 2

  return {
    r,
    y,
    apart: (i: number) => i < a
      ? apartStart + i * step
      : apartStart + (a - 1) * step + gap + (i - a) * step,
    joined: (i: number) => joinedStart + i * step,
    plusX: apartStart + (a - 1) * step + gap / 2,
  }
}

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
 * The ring round the one being counted.
 *
 * Lifted deliberately from what `drawGroup` draws, because this lesson cannot
 * use `drawGroup` for its moving mangoes and a different highlight in the same
 * lesson would be a second thing to learn. Same colour, same dashes, same
 * crawl, so the ring in the counting lesson and the ring here are one idea.
 */
function ring(
  ctx: CanvasRenderingContext2D, x: number, y: number, r: number, t: number,
) {
  ctx.save()
  ctx.globalAlpha = 0.28
  ctx.fillStyle = MARK
  ctx.beginPath()
  ctx.arc(x, y, r * 1.34, 0, Math.PI * 2)
  ctx.fill()
  ctx.globalAlpha = 1
  ctx.strokeStyle = MARK
  ctx.lineWidth = Math.max(5, r * 0.2)
  ctx.setLineDash([r * 0.46, r * 0.3])
  ctx.lineDashOffset = -t * r * 1.6
  ctx.beginPath()
  ctx.arc(x, y, r * 1.2, 0, Math.PI * 2)
  ctx.stroke()
  ctx.restore()
}

/** A fat plus sign, outlined like everything else in the room. */
function plusSign(
  ctx: CanvasRenderingContext2D, x: number, y: number, r: number, alpha: number,
) {
  if (alpha <= 0.01) return
  const arm = r * 0.92
  const thick = r * 0.3
  ctx.save()
  ctx.globalAlpha = clamp(alpha)
  ctx.beginPath()
  ctx.roundRect(x - arm / 2, y - thick / 2, arm, thick, thick / 2)
  inked(ctx, MARK, 3.5)
  ctx.beginPath()
  ctx.roundRect(x - thick / 2, y - arm / 2, thick, arm, thick / 2)
  inked(ctx, MARK, 3.5)
  ctx.restore()
}

/* ── the board ─────────────────────────────────────────────────────────────── */

/**
 * The sum, built up one mark at a time as it is earned.
 *
 * Each slot is written the moment the thing it records has happened and not a
 * frame before: the left numeral while the first pile is being counted, the
 * right one while the second is, the plus when the word plus is said, and the
 * equals and the total only after the whole lot has been counted out loud. Read
 * from the top, the board is a transcript of what the child just did.
 */
function sumOnBoard(
  ctx: CanvasRenderingContext2D, r: Rect,
  aShown: number, bShown: number, plusOn: number, total: number, solvedOn: number,
) {
  const mid = r.y + r.h * 0.44
  const big = r.h * 0.36
  const slot = (f: number) => r.x + r.w * f
  if (aShown > 0) chalk(ctx, String(aShown), slot(0.18), mid, big, FONT)
  if (plusOn > 0.01) {
    chalk(ctx, '+', slot(0.34), mid, big, FONT, plusOn)
    chalk(ctx, 'PLUS', slot(0.34), r.y + r.h * 0.8, r.h * 0.12, FONT, plusOn * 0.85)
  }
  if (bShown > 0) chalk(ctx, String(bShown), slot(0.5), mid, big, FONT)
  if (solvedOn > 0.01) {
    chalk(ctx, '=', slot(0.66), mid, big, FONT, solvedOn)
    /* The total swells as it lands. It is the only number on the board the
       child did not watch being counted up one at a time, so it gets the one
       piece of emphasis in the scene. */
    chalk(ctx, String(total), slot(0.82), mid, big * (1 + (1 - solvedOn) * 0.3),
      FONT, solvedOn)
  }
}

/* ── 1. the title ──────────────────────────────────────────────────────────── */

const intro: Painter = (ctx, w, h, t) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)

  const on = clamp((t - 0.5) / 1.1)
  chalk(ctx, 'Putting Groups Together', board.x + board.w / 2,
    board.y + board.h * 0.42, board.h * 0.2, FONT, on)
  chalk(ctx, '2 + 2 = ?', board.x + board.w / 2, board.y + board.h * 0.76,
    board.h * 0.18, FONT, clamp((t - 1.4) / 0.8) * 0.9)

  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.5, h * 0.42] },
    { at: 0.45, hop: 260 },
    { at: 2.8, hop: 180 },
  ])
  const r = h * 0.15
  const feet = h * 0.78
  rig.draw(w * 0.5, feet - r * 1.3, r, feet)
}

/* ── 2 and 3. a sum, done ──────────────────────────────────────────────────── */

/**
 * Both sums are the same picture with different numbers, so they are one
 * painter registered twice. The scene's `data` is the script and the beats in
 * `scene.notes` are the clock: the first `a` of them count the left pile, the
 * next `b` count the right pile, and the rest count the whole lot after it has
 * come together.
 */
const putTogether: Painter = (ctx, w, h, t, scene) => {
  const sum = sumOf(scene)
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)
  if (!sum) return

  const { a, b } = sum
  const total = a + b
  const beats = scene.notes || []
  const countA = beats.slice(0, a)
  const countB = beats.slice(a, a + b)
  const countAll = beats.slice(a + b)
  const f = field(w, h, a, b)

  /* One number for the whole layout: 0 while the groups stand apart, 1 once
     they are a single row. Every position in the frame is a function of it. */
  const merged = ease((t - sum.merge) / MERGE)

  /**
   * Which mango wears the ring, and what number is flying off it.
   *
   * Written as three passes in time order with the later ones overwriting the
   * earlier, so overlapping beats always resolve to the latest one. Taking the
   * first match instead is the bug the shell's caption lookup already had, and
   * it looks identical here: the ring on the fourth mango and the numeral
   * beside it reading two.
   */
  let lit = -1
  let label = 0
  let labelAt = -1
  for (let i = 0; i < countA.length; i++) {
    if (t >= countA[i]) { lit = i; label = i + 1; labelAt = countA[i] }
  }
  for (let i = 0; i < countB.length; i++) {
    if (t >= countB[i]) { lit = a + i; label = i + 1; labelAt = countB[i] }
  }
  for (let i = 0; i < countAll.length; i++) {
    if (t >= countAll[i]) { lit = i; label = i + 1; labelAt = countAll[i] }
  }
  /* The ring lets go a moment after the count, so the frame is quiet while he
     is talking rather than pointing at a mango nobody is discussing. */
  if (labelAt >= 0 && t - labelAt > RING) lit = -1

  const aShown = countA.filter(at => t >= at).length
  const bShown = countB.filter(at => t >= at).length
  sumOnBoard(ctx, board, aShown, bShown,
    clamp((t - sum.plus) / 0.4), total, clamp((t - sum.solved) / 0.4))

  /* The sign lives in the gap, so it has to be gone by the time the gap is.
     It fades out over the first third of the walk, which is early enough that
     it never looks squeezed and late enough to have been seen. */
  plusSign(ctx, f.plusX, f.y, f.r,
    clamp((t - sum.plus) / 0.35) * (1 - clamp((merged - 0.05) / 0.3)))

  for (let i = 0; i < total; i++) {
    const x = f.apart(i) + (f.joined(i) - f.apart(i)) * merged
    /* A small hop in the middle of the walk. Sliding flat across the floor
       reads as the picture being rearranged; a hop reads as the mangoes doing
       it, and the mangoes doing it is the story. */
    const y = f.y - Math.sin(merged * Math.PI) * f.r * 0.22
    /* They are already standing there when the scene opens. This is a lesson
       about combining, not about arriving, so the only arrival is a quick
       settle in the first half second before anyone counts anything. */
    const here = clamp((t - 0.15 - i * 0.07) / 0.3)
    if (here <= 0) continue

    shadow(ctx, x, f.y, f.r, here)
    if (lit === i) ring(ctx, x, y, f.r, t)
    ctx.save()
    ctx.translate(x, y)
    drawOne(THING, ctx, f.r, { t, index: i, face: true, bob: true, pop: here })
    ctx.restore()
  }

  if (lit >= 0 && label > 0) {
    const x = f.apart(lit) + (f.joined(lit) - f.apart(lit)) * merged
    const spot: Spot = { x, y: f.y, index: lit }
    beatNumeral(ctx, label, spot, f.r, t - labelAt, FONT)
  }

  const him = himAt(w, h)
  const watch: [number, number] = lit >= 0
    ? [f.apart(lit) + (f.joined(lit) - f.apart(lit)) * merged, f.y]
    : [f.plusX, f.y]
  const events: RigEvent[] = [{ at: 0, mood: 'hello', look: watch }]
  for (const at of beats) events.push({ at, look: watch, hop: 90 })
  events.push({ at: sum.merge, look: watch, hop: 150 })
  events.push({ at: sum.solved, hop: 240 })
  const rig = poseRig(ctx, t, events)
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

/* ── 4. what was done ──────────────────────────────────────────────────────── */

const recap: Painter = (ctx, w, h, t, scene) => {
  const d = (scene.data || {}) as Record<string, unknown>
  const sums = (d.sums as string[]) || []
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)

  chalk(ctx, 'Put them together, then count them all',
    board.x + board.w / 2, board.y + board.h * 0.22, board.h * 0.13, FONT,
    clamp(t / 0.5) * 0.9)
  /* Both sums stay up, side by side and the same size. They were done the same
     way and neither is the example, so neither gets the bigger half of the
     board. */
  sums.forEach((line, i) => {
    chalk(ctx, line, board.x + board.w * (i === 0 ? 0.28 : 0.72),
      board.y + board.h * 0.62, board.h * 0.24, FONT,
      clamp((t - 0.4 - i * 0.45) / 0.5))
  })

  drawGroup(ctx, THING, 5, fieldRect(w, h), { t, face: true })

  const him = himAt(w, h)
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.55, h * 0.6] },
    { at: 0.6, hop: 190 },
    { at: 3.2, hop: 160 },
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
  /* The game the button opens is Feed Ananse, so the board says what that game
     asks for rather than something that merely sounds encouraging. */
  chalk(ctx, 'Count out the mangoes and feed Ananse', board.x + board.w / 2,
    board.y + board.h * 0.76, board.h * 0.13, FONT, clamp((t - 0.8) / 0.6))

  const box = fieldRect(w, h)
  drawGroup(ctx, THING, 6, { ...box, y: box.y + box.h * 0.12, h: box.h * 0.72 },
    { t, face: true, party: true })

  const him = himAt(w, h)
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hungry', look: [w * 0.5, h * 0.45] },
    { at: 0.4, hop: 280 },
    { at: 2.4, hop: 200 },
  ])
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

export const PAINTERS: Record<string, Painter> = {
  intro, teach: putTogether, practise: putTogether, recap, handover,
}

export const AddLesson: React.FC = () => (
  <LessonVideo lesson={ADD_LESSON} painters={PAINTERS} />
)

export { ADD_LESSON }
