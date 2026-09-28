/**
 * Big and Small: what each scene looks like.
 *
 * ── Why everything stands on one line ────────────────────────────────────────
 *
 * Every object in this video, and Ananse himself, has its feet on the same y.
 * In any other lesson that is tidiness. Here it is the measurement: two things
 * at different heights up the frame read as one being nearer, and a child
 * comparing sizes cannot tell "bigger" from "closer" if the picture offers them
 * both. One ground line takes the second reading away.
 *
 * ── Why the sizes are exactly two to one ─────────────────────────────────────
 *
 * Small, middle and big are `h * 0.0435`, `h * 0.087` and `h * 0.174`: each one
 * double the last. Anything subtler and the middle scene becomes a test of
 * eyesight instead of a lesson about neighbours. The big one is as large as it
 * can be and still clear the chalk ledge above it with its feet on the ground
 * line, which is what fixes all three.
 */

import React from 'react'
import { LessonVideo, FONT, type Painter } from '../../shell'
import {
  backdrop, blackboard, boardRect, chalk, himAt, poseRig, drawOne,
  type Rect, type RigEvent,
} from '../../draw'
import { BIG_SMALL_LESSON } from './lesson'

/* ── the ground, and the three sizes ───────────────────────────────────────── */

/** The one line every object and Ananse stands on. */
const GROUND = (h: number) => h * 0.785

const SMALL = (h: number) => h * 0.0435
const MID = (h: number) => h * 0.087
const BIG = (h: number) => h * 0.174

/** Where the thing being talked about stands, in every scene that has one. */
const SUBJECT_X = (w: number) => w * 0.48
/** Where its neighbour stands. Far enough that they never share an outline. */
const PARTNER_X = (w: number) => w * 0.78

/* ── time ──────────────────────────────────────────────────────────────────── */

const clamp01 = (u: number) => Math.max(0, Math.min(1, u))
const fadeIn = (t: number, at: number, over: number) => clamp01((t - at) / over)
const ease = (u: number) => { const p = clamp01(u); return p * p * (3 - 2 * p) }

/** How long a thing takes to roll in from off screen, or roll back out. */
const ROLL = 0.75

/* ── drawing ───────────────────────────────────────────────────────────────── */

/**
 * One object, standing on the ground line.
 *
 * `spin` is passed straight through to `count.js`, which rotates the object but
 * not its face. A ball arriving without it slides like a box; with it, the turn
 * of the pattern says the distance it travelled, which is the only cue a flat
 * drawing has for weight.
 */
function standing(
  ctx: CanvasRenderingContext2D, name: string,
  x: number, ground: number, r: number, t: number,
  opts: { alpha?: number, pop?: number, spin?: number, lift?: number } = {},
) {
  const alpha = opts.alpha === undefined ? 1 : opts.alpha
  if (alpha <= 0.01) return
  /* A lift moves the object and not its shadow. The shadow is what says where
     the ground is, and a shadow that rises with the thing above it reads as the
     whole floor tilting. */
  const y = ground - r - (opts.lift || 0)

  ctx.save()
  ctx.globalAlpha = alpha * 0.15
  ctx.fillStyle = '#5a3a1c'
  ctx.beginPath()
  ctx.ellipse(x, ground + r * 0.04, r * 0.72, r * 0.15, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()

  ctx.save()
  ctx.globalAlpha = alpha
  ctx.translate(x, y)
  drawOne(name, ctx, r, { t, pop: opts.pop, spin: opts.spin })
  ctx.restore()
}

/**
 * The dashed ring that says "this one".
 *
 * The same ring the counting lesson puts on the object being counted, so a
 * child who has watched that one already knows it means look here. It matters
 * more in this lesson than in that one: the word on the board is about exactly
 * one of the two things on screen, and without the ring it is a coin toss.
 */
function ringOn(
  ctx: CanvasRenderingContext2D, x: number, ground: number, r: number,
  t: number, alpha: number,
) {
  if (alpha <= 0.01) return
  const y = ground - r
  ctx.save()
  ctx.globalAlpha = alpha * 0.28
  ctx.fillStyle = '#ffd93b'
  ctx.beginPath()
  ctx.arc(x, y, r * 1.36, 0, Math.PI * 2)
  ctx.fill()
  ctx.globalAlpha = alpha
  ctx.strokeStyle = '#ffd93b'
  ctx.lineWidth = Math.max(5, r * 0.18)
  ctx.setLineDash([r * 0.46, r * 0.3])
  ctx.lineDashOffset = -t * r * 1.6
  ctx.beginPath()
  ctx.arc(x, y, r * 1.22, 0, Math.PI * 2)
  ctx.stroke()
  ctx.restore()
}

/**
 * The word, written at the size it means.
 *
 * "BIG" fills half the board and "small" is a sixth of its height. The audience
 * cannot read either of them, which is precisely why they are drawn this way:
 * the shape of the word on the board is the only part of it a four year old can
 * use, so it is made to carry the meaning on its own.
 */
function sizeWord(
  ctx: CanvasRenderingContext2D, board: Rect, big: boolean, alpha: number,
  x = board.x + board.w / 2,
) {
  if (alpha <= 0.01) return
  chalk(ctx, big ? 'BIG' : 'small', x, board.y + board.h * 0.52,
    board.h * (big ? 0.44 : 0.17), FONT, alpha)
}

/** Ananse on the same ground line as the objects, so he is a ruler too. */
function presenter(
  ctx: CanvasRenderingContext2D, w: number, h: number, t: number,
  events: RigEvent[],
) {
  const him = himAt(w, h)
  const feet = GROUND(h)
  const rig = poseRig(ctx, t, [{ at: 0, mood: 'hello' }, ...events])
  rig.draw(him.x, feet - him.r * 1.3, him.r, feet)
}

const room = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)
  return board
}

/* ── the scenes ────────────────────────────────────────────────────────────── */

const intro: Painter = (ctx, w, h, t) => {
  const board = room(ctx, w, h)

  const on = fadeIn(t, 0.5, 1.1)
  chalk(ctx, 'Big and Small', board.x + board.w / 2, board.y + board.h * 0.42,
    board.h * 0.26, FONT, on)
  if (on > 0.05) {
    const line = board.w * 0.5 * on
    ctx.save()
    ctx.globalAlpha = 0.75 * on
    ctx.strokeStyle = '#f4f1e6'
    ctx.lineWidth = Math.max(3, board.h * 0.022)
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(board.x + board.w / 2 - line / 2, board.y + board.h * 0.68)
    ctx.lineTo(board.x + board.w / 2 + line / 2, board.y + board.h * 0.68)
    ctx.stroke()
    ctx.restore()
  }

  /* Centre stage and bigger than he is anywhere else, with the floor to
     himself. He is the reason a child stays for scene two. */
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.5, h * 0.5] },
    { at: 0.45, hop: 260 },
    { at: 2.8, hop: 180 },
  ])
  const feet = GROUND(h)
  rig.draw(w * 0.5, feet - h * 0.15 * 1.3, h * 0.15, feet)
}

/** Two drums at four to one, named one at a time. */
const pair: Painter = (ctx, w, h, t, scene) => {
  const board = room(ctx, w, h)
  const d = scene.data || {}
  const showAt = (d.showAt as number) || 0
  const bigAt = (d.bigAt as number) || 0
  const smallAt = (d.smallAt as number) || 0
  const g = GROUND(h)

  /* Left and right on the board, over the drum each word belongs to, because
     one word centred would belong to both of them. */
  sizeWord(ctx, board, true, fadeIn(t, bigAt, 0.4), board.x + board.w * 0.3)
  sizeWord(ctx, board, false, fadeIn(t, smallAt, 0.4), board.x + board.w * 0.76)

  const bigX = w * 0.45
  const smallX = w * 0.75
  standing(ctx, 'drum', bigX, g, BIG(h), t, { pop: fadeIn(t, showAt, 0.42) })
  standing(ctx, 'drum', smallX, g, SMALL(h), t, { pop: fadeIn(t, showAt + 0.3, 0.42) })

  /* The ring moves off the big drum as it arrives on the small one, so exactly
     one thing is ever being named. */
  ringOn(ctx, bigX, g, BIG(h), t, fadeIn(t, bigAt, 0.3) * (1 - fadeIn(t, smallAt, 0.3)))
  ringOn(ctx, smallX, g, SMALL(h), t, fadeIn(t, smallAt, 0.3))

  presenter(ctx, w, h, t, [
    { at: showAt, look: [bigX, g - BIG(h)], hop: 180 },
    { at: bigAt, look: [bigX, g - BIG(h)], hop: 130 },
    { at: smallAt, look: [smallX, g - SMALL(h)], hop: 130 },
  ])
}

/**
 * One ball, and whatever happens to be standing next to it.
 *
 * ── Why the ball never moves ─────────────────────────────────────────────────
 *
 * It is at `SUBJECT_X` from the first frame to the last, at the same radius,
 * while its neighbour rolls in and out. The narration ends by saying nothing
 * about the ball changed, and a ball that had shuffled across the floor to make
 * room would have made that a lie in the only language the audience reads.
 */
const middle: Painter = (ctx, w, h, t, scene) => {
  const board = room(ctx, w, h)
  const d = scene.data || {}
  const smallAt = (d.smallAt as number) || 0
  const awayAt = (d.awayAt as number) || 0
  const bigAt = (d.bigAt as number) || 0
  const g = GROUND(h)
  const sx = SUBJECT_X(w)
  const px = PARTNER_X(w)
  const r = MID(h)

  /* The question stays up for as long as it has no answer, which is the point
     of it. It leaves the moment a neighbour arrives and an answer exists. */
  chalk(ctx, 'Big or small?', board.x + board.w / 2, board.y + board.h * 0.5,
    board.h * 0.24, FONT, fadeIn(t, 0.4, 0.6) * (1 - fadeIn(t, smallAt, 0.35)))
  sizeWord(ctx, board, true, fadeIn(t, smallAt, 0.4) * (1 - fadeIn(t, bigAt, 0.35)))
  sizeWord(ctx, board, false, fadeIn(t, bigAt, 0.4))

  /* The tiny one rolls in from off the right edge, waits while it is the reason
     our ball is big, and rolls back the way it came. */
  const inU = ease(fadeIn(t, smallAt, ROLL))
  const outU = ease(fadeIn(t, awayAt, ROLL))
  const offX = w * 1.18
  const tinyX = offX + (px - offX) * inU + (offX - px) * outU
  if (inU > 0 && outU < 1) {
    standing(ctx, 'ball', tinyX, g, SMALL(h), t,
      { spin: (tinyX - offX) / SMALL(h) })
  }

  /* Then a big one from further out still, which is why it is later. */
  const bigU = ease(fadeIn(t, bigAt, ROLL))
  const bigOff = w * 1.32
  const bigX = bigOff + (px - bigOff) * bigU
  if (bigU > 0) {
    standing(ctx, 'ball', bigX, g, BIG(h), t, { spin: (bigX - bigOff) / BIG(h) })
  }

  standing(ctx, 'ball', sx, g, r, t, { pop: fadeIn(t, 0.3, 0.4) })
  /* The ring is on our ball the whole time it is being called something, and it
     is called two opposite things without ever leaving the ring. */
  ringOn(ctx, sx, g, r, t, fadeIn(t, smallAt + 0.2, 0.35))

  presenter(ctx, w, h, t, [
    { at: 0.3, look: [sx, g - r], hop: 170 },
    { at: smallAt, look: [px, g - SMALL(h)], hop: 140 },
    { at: smallAt + 0.9, look: [sx, g - r] },
    { at: bigAt, look: [px, g - BIG(h)], hop: 160 },
    { at: bigAt + 1.0, look: [sx, g - r] },
  ])
}

/** The same move run again with oranges, with the child asked to answer first. */
const yourturn: Painter = (ctx, w, h, t, scene) => {
  const board = room(ctx, w, h)
  const d = scene.data || {}
  const showAt = (d.showAt as number) || 0
  const ringAt = (d.ringAt as number) || 0
  const awayAt = (d.awayAt as number) || 0
  const bigAt = (d.bigAt as number) || 0
  const g = GROUND(h)
  const sx = SUBJECT_X(w)
  const px = PARTNER_X(w)
  const r = MID(h)

  chalk(ctx, 'Which one is big?', board.x + board.w / 2, board.y + board.h * 0.5,
    board.h * 0.21, FONT, fadeIn(t, 0.3, 0.6) * (1 - fadeIn(t, ringAt, 0.3)))
  sizeWord(ctx, board, true, fadeIn(t, ringAt, 0.35) * (1 - fadeIn(t, bigAt, 0.35)))
  sizeWord(ctx, board, false, fadeIn(t, bigAt, 0.4))

  const outU = ease(fadeIn(t, awayAt, ROLL))
  const offX = w * 1.18
  const smallX = px + (offX - px) * outU
  if (outU < 1) {
    standing(ctx, 'orange', smallX, g, SMALL(h), t,
      { pop: fadeIn(t, showAt, 0.42), spin: (smallX - px) / SMALL(h) })
  }

  const bigU = ease(fadeIn(t, bigAt, ROLL))
  const bigOff = w * 1.32
  const bigX = bigOff + (px - bigOff) * bigU
  if (bigU > 0) {
    standing(ctx, 'orange', bigX, g, BIG(h), t, { spin: (bigX - bigOff) / BIG(h) })
  }

  standing(ctx, 'orange', sx, g, r, t, { pop: fadeIn(t, showAt, 0.42) })
  ringOn(ctx, sx, g, r, t, fadeIn(t, ringAt, 0.35))

  presenter(ctx, w, h, t, [
    { at: showAt, look: [sx, g - r], hop: 170 },
    /* Nothing happens while the question hangs. He looks at the child, not at
       the oranges, because the oranges are not the ones being asked. */
    { at: showAt + 0.8, look: [w * 0.5, h * 0.72] },
    { at: ringAt, look: [sx, g - r], hop: 150 },
    { at: bigAt, look: [px, g - BIG(h)], hop: 160 },
    { at: bigAt + 1.0, look: [sx, g - r] },
  ])
}

/** The recap. No big and small game exists yet, so this is where it ends. */
const home: Painter = (ctx, w, h, t) => {
  const board = room(ctx, w, h)
  chalk(ctx, 'Well done!', board.x + board.w / 2, board.y + board.h * 0.36,
    board.h * 0.29, FONT, fadeIn(t, 0.1, 0.5))
  chalk(ctx, 'Find two things and look at them together',
    board.x + board.w / 2, board.y + board.h * 0.76, board.h * 0.13, FONT,
    fadeIn(t, 0.9, 0.6))

  /* One last pair, left standing side by side while he says goodbye. Two, not
     three: a row of sizes would be a lesson about order, which is a different
     video and one this one never gave them. */
  const g = GROUND(h)
  const bob = (i: number) => Math.abs(Math.sin(t * 2.2 + i * 0.9)) * h * 0.014
  standing(ctx, 'orange', w * 0.47, g, BIG(h), t,
    { pop: fadeIn(t, 0.2, 0.45), lift: bob(0) })
  standing(ctx, 'orange', w * 0.76, g, SMALL(h), t,
    { pop: fadeIn(t, 0.45, 0.45), lift: bob(1) })

  presenter(ctx, w, h, t, [
    { at: 0.4, look: [w * 0.5, h * 0.62], hop: 260 },
    { at: 2.8, hop: 200 },
    { at: 5.2, hop: 220 },
  ])
}

export const PAINTERS: Record<string, Painter> = {
  intro, pair, middle, yourturn, home,
}

export const BigSmallLesson: React.FC = () => (
  <LessonVideo lesson={BIG_SMALL_LESSON} painters={PAINTERS} />
)

export { BIG_SMALL_LESSON }
