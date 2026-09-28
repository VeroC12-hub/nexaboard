/**
 * Number Order: Before and After. What each scene looks like.
 *
 * ── Why the number line is drawn here and not in `draw.ts` ───────────────────
 *
 * `boardNumber` is the shared way to show a quantity: a numeral, its word and
 * a ten frame. That is the right picture when the question is how many, and it
 * is the wrong one here, because this lesson is not about quantity at all. Six
 * is not taught as six dots; it is taught as the place between five and seven.
 * So the line is a row of cards drawn in this file, and the board above keeps
 * using chalk for the three numerals under discussion. Nothing shared changed.
 *
 * ── Why the row never moves ──────────────────────────────────────────────────
 *
 * Every scene lays the ten cards down at exactly the same coordinates, from
 * the first frame to the last. "Before is the left" is only learnable if left
 * means the same thing for a whole minute, and a row that recentres itself
 * when a card is missing quietly destroys the one fact being taught. That is
 * why a missing card leaves a hole rather than closing the gap.
 */

import React from 'react'
import { LessonVideo, FONT, type Painter, type Scene } from '../../shell'
import {
  backdrop, blackboard, boardRect, himAt, poseRig, chalk, inked, LINE,
  type RigEvent,
} from '../../draw'
import { BEFORE_AFTER_LESSON } from './lesson'

/* ── the line ──────────────────────────────────────────────────────────────── */

/**
 * The row runs from 29% of the width to the right hand edge.
 *
 * Ananse stands at 14.5% and is finished by about 25%, so the first card
 * clears him with room to spare. Ten cards at 6.6% pitch is the widest the row
 * can be while still leaving a gap between each card, and the gaps matter: a
 * row of touching cards reads as one long object, and this lesson needs ten
 * separate places.
 */
const X0 = 0.29
const PITCH = 0.066
const CARD_W = 0.052
const CARD_H = 0.155
const CY = 0.60

const RAIL_Y = CY + CARD_H / 2 + 0.012
const ARROW_Y = 0.715
const TAG_Y = 0.768

interface Card { x: number, y: number, w: number, h: number }

const cardAt = (n: number, w: number, h: number): Card => ({
  x: w * (X0 + (n - 0.5) * PITCH),
  y: h * CY,
  w: w * CARD_W,
  h: h * CARD_H,
})

const ease = (p: number) =>
  p <= 0 ? 0 : p >= 1 ? 1 : (1 - Math.cos(p * Math.PI)) / 2

const cue = (scene: Scene, key: string) => {
  const v = scene.data?.[key]
  return typeof v === 'number' ? v : 1e9
}

const pop = (t: number, at: number, over = 0.34) =>
  Math.max(0, Math.min(1, (t - at) / over))

/** The track the cards stand on, which is what makes the row a line. */
function rail(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const a = cardAt(1, w, h)
  const b = cardAt(10, w, h)
  const pad = a.w * 0.4
  ctx.beginPath()
  ctx.roundRect(
    a.x - a.w / 2 - pad, h * RAIL_Y - h * 0.011,
    (b.x - a.x) + a.w + pad * 2, h * 0.022, h * 0.011,
  )
  inked(ctx, '#a9703c', 3.5)
}

/**
 * One numbered card.
 *
 * `grow` is its arrival, 0 to 1, and is applied as a scale about its own
 * centre so a card that is landing never shifts the cards beside it.
 */
function card(
  ctx: CanvasRenderingContext2D, n: number, c: Card,
  opts: { grow?: number, lit?: number, wheels?: boolean, fade?: number, drop?: number },
) {
  const grow = opts.grow === undefined ? 1 : opts.grow
  const fade = opts.fade === undefined ? 1 : opts.fade
  if (grow <= 0.01 || fade <= 0.01) return
  const lit = opts.lit || 0

  ctx.save()
  ctx.globalAlpha = Math.min(1, fade)
  ctx.translate(c.x, c.y + (opts.drop || 0))
  ctx.scale(grow * (1 + lit * 0.1), grow * (1 + lit * 0.1))

  if (lit > 0.02) {
    ctx.save()
    ctx.globalAlpha = 0.3 * lit
    ctx.fillStyle = '#ffd93b'
    ctx.beginPath()
    ctx.roundRect(-c.w * 0.78, -c.h * 0.66, c.w * 1.56, c.h * 1.32, c.h * 0.24)
    ctx.fill()
    ctx.restore()
  }

  ctx.beginPath()
  ctx.roundRect(-c.w / 2, -c.h / 2, c.w, c.h, c.h * 0.16)
  inked(ctx, lit > 0.5 ? '#ffd93b' : '#fdf3d7', 4)

  ctx.font = `800 ${Math.round(c.h * 0.56)}px ${FONT}`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = LINE()
  ctx.fillText(String(n), 0, c.h * 0.03)

  /* Wheels only in the last scene, where the row turns into the train the
     child is about to play with. Same row, same numbers, new clothes. */
  if (opts.wheels) {
    for (const s of [-1, 1]) {
      ctx.beginPath()
      ctx.arc(s * c.w * 0.26, c.h * 0.58, c.h * 0.13, 0, Math.PI * 2)
      inked(ctx, '#3f3f46', 3)
    }
  }
  ctx.restore()
}

/**
 * The hole a card leaves behind.
 *
 * Dashed, empty, and exactly the size of the card that is not there, so the
 * row still has ten places in it. The question mark is deliberately late: the
 * first second of the hole is for looking at the neighbours, and a question
 * mark sitting there from the start invites a guess instead.
 */
function slot(
  ctx: CanvasRenderingContext2D, c: Card, alpha: number, ask: number,
) {
  if (alpha <= 0.02) return
  ctx.save()
  ctx.globalAlpha = Math.min(1, alpha)
  ctx.strokeStyle = LINE()
  ctx.lineWidth = 5
  ctx.setLineDash([13, 10])
  ctx.beginPath()
  ctx.roundRect(c.x - c.w / 2, c.y - c.h / 2, c.w, c.h, c.h * 0.16)
  ctx.stroke()
  ctx.setLineDash([])
  if (ask > 0.02) {
    ctx.globalAlpha = Math.min(1, alpha) * Math.min(1, ask)
    ctx.font = `800 ${Math.round(c.h * 0.5)}px ${FONT}`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = '#e8402f'
    ctx.fillText('?', c.x, c.y + c.h * 0.03)
  }
  ctx.restore()
}

/** A flat arrow from one card to the next, growing out as it is explained. */
function arrow(
  ctx: CanvasRenderingContext2D, xa: number, xb: number, y: number,
  colour: string, p: number,
) {
  if (p <= 0.03) return
  const end = xa + (xb - xa) * Math.min(1, p)
  const dir = end >= xa ? 1 : -1
  ctx.save()
  ctx.strokeStyle = colour
  ctx.fillStyle = colour
  ctx.lineWidth = 7
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(xa, y)
  ctx.lineTo(end - dir * 16, y)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(end, y)
  ctx.lineTo(end - dir * 22, y - 13)
  ctx.lineTo(end - dir * 22, y + 13)
  ctx.closePath()
  ctx.fill()
  ctx.restore()
}

/** A word in a pill, centred on x, used to name a neighbour. */
function pill(
  ctx: CanvasRenderingContext2D, text: string, cx: number, cy: number,
  size: number, fill: string, alpha: number,
) {
  if (alpha <= 0.02) return
  ctx.save()
  ctx.globalAlpha = Math.min(1, alpha)
  ctx.font = `700 ${Math.round(size)}px ${FONT}`
  const pw = ctx.measureText(text).width + size * 1.3
  const ph = size * 1.8
  ctx.beginPath()
  ctx.roundRect(cx - pw / 2, cy - ph / 2, pw, ph, ph / 2)
  inked(ctx, fill, 3.5)
  ctx.font = `700 ${Math.round(size)}px ${FONT}`
  ctx.fillStyle = LINE()
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, cx, cy + size * 0.06)
  ctx.restore()
}

/** The whole row, with whichever card is lit and whichever is away. */
function row(
  ctx: CanvasRenderingContext2D, w: number, h: number,
  opts: {
    lit?: number, litAmount?: number, grow?: (n: number) => number,
    wheels?: boolean, away?: number, awayFade?: number, awayDrop?: number,
  } = {},
) {
  rail(ctx, w, h)
  for (let n = 1; n <= 10; n++) {
    const c = cardAt(n, w, h)
    if (n === opts.away) {
      card(ctx, n, c, {
        wheels: opts.wheels,
        fade: opts.awayFade, drop: opts.awayDrop,
      })
      continue
    }
    card(ctx, n, c, {
      grow: opts.grow ? opts.grow(n) : 1,
      lit: n === opts.lit ? (opts.litAmount === undefined ? 1 : opts.litAmount) : 0,
      wheels: opts.wheels,
    })
  }
}

/* ── the board ─────────────────────────────────────────────────────────────── */

/**
 * The number under discussion, with its two neighbours either side.
 *
 * Laid out left to right in the same order as the floor below it, so the board
 * is a second copy of the same fact rather than a second thing to read.
 */
function boardTrio(
  ctx: CanvasRenderingContext2D, b: { x: number, y: number, w: number, h: number },
  mid: string, before: string, after: string, aB: number, aA: number,
) {
  chalk(ctx, mid, b.x + b.w * 0.5, b.y + b.h * 0.46, b.h * 0.42, FONT, 1)
  if (aB > 0.02) {
    chalk(ctx, before, b.x + b.w * 0.19, b.y + b.h * 0.46, b.h * 0.28, FONT, aB)
    chalk(ctx, 'before', b.x + b.w * 0.19, b.y + b.h * 0.85, b.h * 0.12, FONT, aB * 0.9)
  }
  if (aA > 0.02) {
    chalk(ctx, after, b.x + b.w * 0.81, b.y + b.h * 0.46, b.h * 0.28, FONT, aA)
    chalk(ctx, 'after', b.x + b.w * 0.81, b.y + b.h * 0.85, b.h * 0.12, FONT, aA * 0.9)
  }
}

function room(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const b = boardRect(w, h)
  blackboard(ctx, b)
  return b
}

function him(
  ctx: CanvasRenderingContext2D, w: number, h: number, t: number, events: RigEvent[],
) {
  const at = himAt(w, h)
  const rig = poseRig(ctx, t, events)
  rig.draw(at.x, at.feet - at.r * 1.3, at.r, at.feet)
}

/* ── 1. intro ──────────────────────────────────────────────────────────────── */

/**
 * He stays in his usual place on the left for the opening.
 *
 * Counting 1 to 10 opens with him centre stage and twice the size, which works
 * because nothing else is on screen yet. Here the row lands halfway through
 * the scene and it runs across the middle, so a centred Ananse would have to
 * either move or be stood on. The title writing itself carries the first few
 * seconds instead.
 */
const intro: Painter = (ctx, w, h, t, scene) => {
  const b = room(ctx, w, h)
  const tRow = cue(scene, 'row')
  const on = Math.min(1, Math.max(0, (t - 0.5) / 1.1))
  chalk(ctx, 'Before and After', b.x + b.w / 2, b.y + b.h * 0.42,
    b.h * 0.22, FONT, on)
  chalk(ctx, 'the numbers 1 to 10', b.x + b.w / 2, b.y + b.h * 0.76,
    b.h * 0.13, FONT, Math.min(1, Math.max(0, (t - 1.4) / 0.7)) * 0.85)

  /* One card every fifth of a second, left to right. Fast enough not to stall
     the scene, slow enough that the eye follows the direction of travel. */
  row(ctx, w, h, { grow: n => ease(pop(t, tRow + (n - 1) * 0.2, 0.28)) })

  him(ctx, w, h, t, [
    { at: 0, mood: 'hello', look: [w * 0.5, h * 0.45] },
    { at: 0.45, hop: 240 },
    { at: tRow, look: [w * 0.4, h * CY] },
    { at: tRow + 1.6, look: [w * 0.85, h * CY], hop: 170 },
  ])
}

/* ── 2. teach: stand on five ───────────────────────────────────────────────── */

const teach: Painter = (ctx, w, h, t, scene) => {
  const b = room(ctx, w, h)
  const tLit = cue(scene, 'litAt')
  const tBefore = cue(scene, 'before')
  const tAfter = cue(scene, 'after')

  const aB = pop(t, tBefore, 0.5)
  const aA = pop(t, tAfter, 0.5)
  boardTrio(ctx, b, '5', '4', '6', aB, aA)

  const c5 = cardAt(5, w, h)
  const c4 = cardAt(4, w, h)
  const c6 = cardAt(6, w, h)
  row(ctx, w, h, { lit: 5, litAmount: pop(t, tLit, 0.3) })

  /* The arrows leave the lit card and run outwards, so the direction is a
     movement the child watches rather than a symbol they have to decode. */
  arrow(ctx, c5.x, c4.x, h * ARROW_Y, '#5aa6f0', pop(t, tBefore, 0.45))
  arrow(ctx, c5.x, c6.x, h * ARROW_Y, '#63c15c', pop(t, tAfter, 0.45))
  pill(ctx, 'before', c4.x, h * TAG_Y, h * 0.036, '#8fd3ff', pop(t, tBefore + 0.3, 0.4))
  pill(ctx, 'after', c6.x, h * TAG_Y, h * 0.036, '#a9e79f', pop(t, tAfter + 0.3, 0.4))

  him(ctx, w, h, t, [
    { at: 0, mood: 'hello', look: [c5.x, c5.y] },
    { at: tLit, look: [c5.x, c5.y], hop: 200 },
    { at: tBefore, look: [c4.x, c4.y], hop: 140 },
    { at: tAfter, look: [c6.x, c6.y], hop: 140 },
    { at: cue(scene, 'rule'), look: [w * 0.5, h * 0.44], hop: 210 },
  ])
}

/* ── 3. practise: eight, then the honest nothing in front of one ───────────── */

const practise: Painter = (ctx, w, h, t, scene) => {
  const b = room(ctx, w, h)
  const t8 = cue(scene, 'eightAt')
  const t8s = cue(scene, 'eightSides')
  const t1 = cue(scene, 'oneAt')
  const tAsk = cue(scene, 'oneAsk')
  const tNone = cue(scene, 'none')

  const onOne = t >= t1
  const lit = onOne ? 1 : 8
  const c = cardAt(lit, w, h)
  const left = cardAt(lit - 1, w, h)
  const right = cardAt(lit + 1, w, h)

  if (!onOne) {
    boardTrio(ctx, b, '8', '7', '9', pop(t, t8s, 0.5), pop(t, t8s + 0.6, 0.5))
  } else {
    /* The board says "none" in words rather than leaving a blank, because a
       blank on a blackboard reads as something not written yet. */
    boardTrio(ctx, b, '1', 'none', '2', pop(t, tNone, 0.5), pop(t, tAsk, 0.5))
  }

  row(ctx, w, h, { lit, litAmount: pop(t, onOne ? t1 : t8, 0.3) })

  if (!onOne) {
    arrow(ctx, c.x, left.x, h * ARROW_Y, '#5aa6f0', pop(t, t8s, 0.45))
    arrow(ctx, c.x, right.x, h * ARROW_Y, '#63c15c', pop(t, t8s + 0.6, 0.45))
    pill(ctx, 'before', left.x, h * TAG_Y, h * 0.036, '#8fd3ff', pop(t, t8s + 0.3, 0.4))
    pill(ctx, 'after', right.x, h * TAG_Y, h * 0.036, '#a9e79f', pop(t, t8s + 0.9, 0.4))
  } else {
    arrow(ctx, c.x, right.x, h * ARROW_Y, '#63c15c', pop(t, tAsk, 0.45))
    pill(ctx, 'after', right.x, h * TAG_Y, h * 0.036, '#a9e79f', pop(t, tAsk + 0.3, 0.4))
    /**
     * Nothing to the left of one, drawn as nothing.
     *
     * The arrow points off the front of the rail and stops in bare floor. It
     * stops short of Ananse: he is finished by 25% of the width, and this ends
     * at 26.5%, because an arrow that runs into him turns the answer into a
     * joke about the spider.
     */
    const stop = w * 0.265
    arrow(ctx, c.x, stop, h * ARROW_Y, '#e8402f', pop(t, tAsk + 0.4, 0.5))
    pill(ctx, 'nothing', (c.x + stop) / 2, h * TAG_Y, h * 0.036, '#ffb3aa',
      pop(t, tNone, 0.4))
  }

  him(ctx, w, h, t, [
    { at: 0, mood: 'hello', look: [c.x, c.y] },
    { at: t8, look: [cardAt(8, w, h).x, c.y], hop: 200 },
    { at: t8s, look: [cardAt(7, w, h).x, c.y] },
    { at: t8s + 1.2, look: [cardAt(9, w, h).x, c.y] },
    { at: t1, look: [cardAt(1, w, h).x, c.y], hop: 200 },
    /* Caught while the question hangs: he is as stuck as the child is, and
       then delighted, because "nothing" is a real answer and not a failure. */
    { at: tAsk, mood: 'caught', look: [w * 0.26, h * CY] },
    { at: tNone, mood: 'hello', look: [w * 0.5, h * 0.44], hop: 240 },
  ])
}

/* ── 4. gap: a card runs away, twice ───────────────────────────────────────── */

/**
 * Seven first, then three.
 *
 * Seven sits in the middle of the row where both neighbours are visible and
 * unremarkable. Three is near the front, which is harder, because a child who
 * has only learned to recount from one gets there quickly and has to notice
 * that the gap is not where they stopped. Two different numbers so the answer
 * cannot be remembered from the first go.
 */
const gap: Painter = (ctx, w, h, t, scene) => {
  const b = room(ctx, w, h)
  const tGone = cue(scene, 'goneAt')
  const tClue = cue(scene, 'clue')
  const tBack = cue(scene, 'back')
  const tGone2 = cue(scene, 'gone2At')
  const tClue2 = cue(scene, 'clue2')
  const tBack2 = cue(scene, 'back2')

  const second = t >= tGone2
  const missing = second ? 3 : 7
  const from = second ? tGone2 : tGone
  const clue = second ? tClue2 : tClue
  const back = second ? tBack2 : tBack

  const c = cardAt(missing, w, h)
  const left = cardAt(missing - 1, w, h)
  const right = cardAt(missing + 1, w, h)

  chalk(ctx, 'Which is missing?', b.x + b.w / 2, b.y + b.h * 0.3,
    b.h * 0.19, FONT, 0.92)
  if (t >= clue) {
    chalk(ctx, `${missing - 1}   ?   ${missing + 1}`, b.x + b.w / 2,
      b.y + b.h * 0.72, b.h * 0.3, FONT, pop(t, clue, 0.4))
  }
  if (t >= back) {
    chalk(ctx, `${missing - 1}   ${missing}   ${missing + 1}`, b.x + b.w / 2,
      b.y + b.h * 0.72, b.h * 0.3, FONT, pop(t, back, 0.3))
  }

  /* It runs away downwards and fades, then comes back down from above. Both
     moves stay well clear of the caption band. */
  const out = ease(pop(t, from, 0.45))
  const home = ease(pop(t, back, 0.5))
  const awayFade = t >= back ? home : 1 - out
  const awayDrop = t >= back ? -(1 - home) * h * 0.22 : out * h * 0.09

  row(ctx, w, h, {
    away: missing,
    awayFade,
    awayDrop,
    lit: t >= back ? missing : undefined,
    litAmount: home,
  })
  if (t < back) {
    slot(ctx, c, out, pop(t, from + 1.1, 0.4))
  }

  pill(ctx, 'before', left.x, h * TAG_Y, h * 0.036, '#8fd3ff', pop(t, clue, 0.4))
  pill(ctx, 'after', right.x, h * TAG_Y, h * 0.036, '#a9e79f',
    pop(t, clue + 0.5, 0.4))

  him(ctx, w, h, t, [
    { at: 0, mood: 'hello', look: [c.x, c.y] },
    { at: from, mood: 'caught', look: [c.x, c.y], hop: 230 },
    { at: clue, look: [left.x, c.y] },
    { at: clue + 0.8, look: [right.x, c.y] },
    { at: back, mood: 'hello', look: [c.x, c.y], hop: 260 },
  ])
}

/* ── 5. handing over to Number Train ───────────────────────────────────────── */

/**
 * The row grows wheels and loses a carriage.
 *
 * The game the button opens shows exactly this: numbered carriages with one
 * gap, and a number to drag into it. Ending on the game's own picture means
 * the first screen of the game is not a new thing to work out, it is the thing
 * that was on screen a second ago.
 */
const handover: Painter = (ctx, w, h, t, scene) => {
  const b = room(ctx, w, h)
  const tTrain = cue(scene, 'train')

  chalk(ctx, 'Your turn!', b.x + b.w / 2, b.y + b.h * 0.36,
    b.h * 0.3, FONT, Math.min(1, t / 0.5))
  chalk(ctx, 'Drag the missing number in', b.x + b.w / 2, b.y + b.h * 0.78,
    b.h * 0.13, FONT, pop(t, tTrain, 0.6))

  const missing = 4
  const c = cardAt(missing, w, h)
  row(ctx, w, h, { wheels: true, away: missing, awayFade: 0 })
  slot(ctx, c, 1, pop(t, 0.6, 0.5))

  him(ctx, w, h, t, [
    { at: 0, mood: 'hello', look: [w * 0.5, h * 0.45] },
    { at: 0.4, hop: 280 },
    { at: tTrain, look: [c.x, c.y], hop: 220 },
  ])
}

export const PAINTERS: Record<string, Painter> = {
  intro, teach, practise, gap, handover,
}

export const BeforeAndAfterLesson: React.FC = () => (
  <LessonVideo lesson={BEFORE_AFTER_LESSON} painters={PAINTERS} />
)

export { BEFORE_AFTER_LESSON }
