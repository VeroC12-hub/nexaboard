/**
 * Long and Short: what each scene looks like.
 *
 * ── Why this lesson draws its own things ─────────────────────────────────────
 *
 * `count.js` knows how to draw a mango, an orange, a ball, a fish, a drum and
 * a star, and every one of them is round. Roundness is exactly right when the
 * question is "how many" and exactly wrong when the question is "how far does
 * it reach": you cannot compare the length of two balls. So this lesson needs
 * long things, and long things are drawn here, in the one file that is allowed
 * to know what this lesson is about. Nothing shared was touched to get them.
 *
 * ── Why everything is a thick stroke with round caps ─────────────────────────
 *
 * A rope, a snake and a queue of ants are all, at this age, the same picture:
 * a heavy horizontal band that starts somewhere and ends somewhere. Drawing
 * them as an outlined stroke rather than a filled outline keeps the ends
 * honest, because a round cap ends exactly where the line ends. An outlined
 * polygon has a stroke width, and half of it hangs past the end, which is a
 * few pixels of lie in a lesson whose entire subject is where things end.
 */

import React from 'react'
import { LessonVideo, FONT, type Painter, type Scene } from '../../shell'
import {
  backdrop, blackboard, boardRect, himAt, poseRig, chalk, inked, blob, LINE,
  type RigEvent,
} from '../../draw'
import { LONG_SHORT_LESSON } from './lesson'

/* ── the stage ─────────────────────────────────────────────────────────────── */

/**
 * Where a length is allowed to begin.
 *
 * Ananse stands at 14.5% of the width and his legs reach about one and a half
 * radii either side of him, so he is finished by 25%. Everything measurable
 * starts at 30%, which leaves a gap he can gesture into and guarantees the red
 * start line never runs through him. A vertical line through a spider reads as
 * a thread, and a spider on a thread is a spider falling, not a spider
 * teaching.
 */
const START = 0.30

/** Rows for two things compared, and for three, as fractions of the height. */
const TWO = [0.600, 0.735]
const THREE = [0.565, 0.665, 0.765]

const ease = (p: number) =>
  p <= 0 ? 0 : p >= 1 ? 1 : (1 - Math.cos(p * Math.PI)) / 2

/** A cue time the timeline recorded, or far in the future if it never ran. */
const cue = (scene: Scene, key: string) => {
  const v = scene.data?.[key]
  return typeof v === 'number' ? v : 1e9
}

/** How far through its arrival something is. */
const pop = (t: number, at: number, over = 0.34) =>
  Math.max(0, Math.min(1, (t - at) / over))

/* ── the long things ───────────────────────────────────────────────────────── */

/** A gently waving spine from x0 to x1. Wave zero gives a straight one. */
function spine(
  ctx: CanvasRenderingContext2D,
  x0: number, x1: number, y: number, wave: number, phase: number,
) {
  ctx.beginPath()
  const steps = 36
  for (let i = 0; i <= steps; i++) {
    const p = i / steps
    const x = x0 + (x1 - x0) * p
    const yy = y + Math.sin(p * Math.PI * 2.4 + phase) * wave
    if (i === 0) ctx.moveTo(x, yy)
    else ctx.lineTo(x, yy)
  }
}

/** Stroke the current path as a fat outlined band. */
function fat(ctx: CanvasRenderingContext2D, thick: number, fill: string) {
  ctx.save()
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.strokeStyle = LINE()
  ctx.lineWidth = thick + 7
  ctx.stroke()
  ctx.strokeStyle = fill
  ctx.lineWidth = thick
  ctx.stroke()
  ctx.restore()
}

function rope(
  ctx: CanvasRenderingContext2D, x0: number, x1: number, y: number, thick: number,
) {
  spine(ctx, x0, x1, y, 0, 0)
  fat(ctx, thick, '#d8a95c')
  /* The twist marks are what stop it reading as a yellow pipe. They are kept
     well inside the band so none of them pokes out of the round cap. */
  ctx.save()
  ctx.strokeStyle = '#a4763a'
  ctx.lineWidth = Math.max(2.5, thick * 0.11)
  ctx.lineCap = 'round'
  const step = thick * 0.62
  for (let x = x0 + step * 0.7; x < x1 - step * 0.4; x += step) {
    ctx.beginPath()
    ctx.moveTo(x - thick * 0.2, y + thick * 0.28)
    ctx.lineTo(x + thick * 0.2, y - thick * 0.28)
    ctx.stroke()
  }
  ctx.restore()
}

function snake(
  ctx: CanvasRenderingContext2D, x0: number, x1: number, y: number,
  thick: number, fill: string, t: number,
) {
  const phase = t * 1.7
  const wave = thick * 0.5
  spine(ctx, x0, x1, y, wave, phase)
  fat(ctx, thick, fill)

  /* Bands along the back, and then the head at the right hand end, sitting on
     the spine so it never drifts off the body as the wave moves. */
  ctx.save()
  ctx.strokeStyle = 'rgba(20,30,20,0.22)'
  ctx.lineWidth = Math.max(3, thick * 0.16)
  ctx.lineCap = 'round'
  for (let i = 1; i <= 6; i++) {
    const p = i / 7
    const x = x0 + (x1 - x0) * p
    const yy = y + Math.sin(p * Math.PI * 2.4 + phase) * wave
    ctx.beginPath()
    ctx.moveTo(x, yy - thick * 0.3)
    ctx.lineTo(x, yy + thick * 0.3)
    ctx.stroke()
  }
  ctx.restore()

  const hy = y + Math.sin(Math.PI * 2.4 + phase) * wave
  const hr = thick * 0.68
  ctx.beginPath()
  ctx.ellipse(x1 + hr * 0.25, hy, hr * 1.1, hr, 0, 0, Math.PI * 2)
  inked(ctx, fill, 3.5)
  /* Tongue, flicking on a slow cycle so he is alive without being busy. */
  const flick = Math.max(0, Math.sin(t * 2.6))
  if (flick > 0.15) {
    ctx.save()
    ctx.strokeStyle = '#e8506b'
    ctx.lineWidth = Math.max(2.5, thick * 0.1)
    ctx.lineCap = 'round'
    const tx = x1 + hr * 1.4
    ctx.beginPath()
    ctx.moveTo(tx, hy)
    ctx.lineTo(tx + hr * 0.9 * flick, hy - hr * 0.3 * flick)
    ctx.moveTo(tx, hy)
    ctx.lineTo(tx + hr * 0.9 * flick, hy + hr * 0.3 * flick)
    ctx.stroke()
    ctx.restore()
  }
  for (const s of [-1, 1]) {
    ctx.beginPath()
    ctx.arc(x1 + hr * 0.3, hy + s * hr * 0.4, hr * 0.28, 0, Math.PI * 2)
    inked(ctx, '#ffffff', 2)
    ctx.beginPath()
    ctx.arc(x1 + hr * 0.38, hy + s * hr * 0.4, hr * 0.13, 0, Math.PI * 2)
    ctx.fillStyle = LINE()
    ctx.fill()
  }
}

function pencil(
  ctx: CanvasRenderingContext2D, x0: number, x1: number, y: number, thick: number,
) {
  const len = x1 - x0
  const tip = Math.min(thick * 1.25, len * 0.24)
  const rub = Math.min(thick * 0.55, len * 0.14)
  ctx.beginPath()
  ctx.rect(x0 + rub, y - thick / 2, len - rub - tip, thick)
  inked(ctx, '#ffd93b', 4)
  ctx.beginPath()
  ctx.roundRect(x0, y - thick * 0.46, rub + thick * 0.14, thick * 0.92, thick * 0.26)
  inked(ctx, '#ff8fa3', 4)
  ctx.beginPath()
  ctx.moveTo(x1 - tip, y - thick / 2)
  ctx.lineTo(x1, y)
  ctx.lineTo(x1 - tip, y + thick / 2)
  ctx.closePath()
  inked(ctx, '#f2d8a8', 4)
  ctx.beginPath()
  ctx.moveTo(x1 - tip * 0.34, y - thick * 0.17)
  ctx.lineTo(x1, y)
  ctx.lineTo(x1 - tip * 0.34, y + thick * 0.17)
  ctx.closePath()
  inked(ctx, '#3b3b3b', 2)
}

function cane(
  ctx: CanvasRenderingContext2D, x0: number, x1: number, y: number, thick: number,
) {
  ctx.beginPath()
  ctx.roundRect(x0, y - thick / 2, x1 - x0, thick, thick * 0.3)
  inked(ctx, '#8fc45a', 4)
  /* The joints are the only thing that says sugarcane rather than green bar,
     so they are drawn heavy and evenly spaced. */
  ctx.save()
  ctx.strokeStyle = '#4e7f2c'
  ctx.lineWidth = Math.max(3, thick * 0.14)
  const step = Math.max(thick * 0.9, (x1 - x0) / 6)
  for (let x = x0 + step; x < x1 - step * 0.3; x += step) {
    ctx.beginPath()
    ctx.moveTo(x, y - thick * 0.42)
    ctx.lineTo(x, y + thick * 0.42)
    ctx.stroke()
  }
  ctx.restore()
  /* Two leaves off the far end, pointing away from the measurement so they
     cannot be mistaken for extra length. */
  for (const s of [-1, 1]) {
    ctx.beginPath()
    ctx.moveTo(x1 - thick * 0.2, y)
    ctx.quadraticCurveTo(
      x1 - thick * 0.9, y + s * thick * 1.0, x1 - thick * 1.9, y + s * thick * 0.55,
    )
    ctx.quadraticCurveTo(x1 - thick * 0.9, y + s * thick * 0.4, x1 - thick * 0.2, y)
    inked(ctx, '#6faa3d', 3)
  }
}

/**
 * A queue of ants from x0 to x1.
 *
 * Ants are the one long thing here that is made of countable pieces, which is
 * why they are in the lesson: a child who has just done Counting 1 to 10 will
 * reach for counting, and the answer to "which is longest" is not "the one
 * with the most ants". The queue is spaced by a fixed gap so its length is a
 * length and not a head count.
 */
function ants(
  ctx: CanvasRenderingContext2D, x0: number, x1: number, y: number,
  thick: number, t: number,
) {
  const r = thick * 0.34
  const gap = r * 3.4
  const n = Math.max(2, Math.floor((x1 - x0) / gap))
  const step = (x1 - x0) / n
  for (let i = 0; i <= n; i++) {
    const x = x0 + i * step
    const bob = Math.sin(t * 5 + i * 0.9) * r * 0.16
    const yy = y + bob
    ctx.save()
    ctx.strokeStyle = LINE()
    ctx.lineWidth = Math.max(2, r * 0.22)
    ctx.lineCap = 'round'
    for (const s of [-1, 1]) {
      for (let k = -1; k <= 1; k++) {
        ctx.beginPath()
        ctx.moveTo(x + k * r * 0.5, yy)
        ctx.lineTo(x + k * r * 0.5 + s * r * 0.2, yy + s * r * 0.95)
        ctx.stroke()
      }
    }
    ctx.beginPath()
    ctx.moveTo(x + r * 0.85, yy - r * 0.25)
    ctx.lineTo(x + r * 1.5, yy - r * 0.95)
    ctx.moveTo(x + r * 0.85, yy - r * 0.25)
    ctx.lineTo(x + r * 1.3, yy - r * 1.1)
    ctx.stroke()
    ctx.restore()
    blob(ctx, [
      [x - r * 1.0, yy, r * 0.62],
      [x, yy, r * 0.75],
      [x + r * 1.0, yy, r * 0.58],
    ], '#5b3b2a', 3)
  }
}

/* ── the teaching aid ──────────────────────────────────────────────────────── */

/**
 * The dashed red start line: the entire point of the video.
 *
 * It is red because nothing else on screen is, and dashed because a solid line
 * would read as a wall the objects are resting against rather than a mark they
 * are measured from.
 */
function startLine(
  ctx: CanvasRenderingContext2D, x: number, y0: number, y1: number, alpha: number,
) {
  if (alpha <= 0.01) return
  ctx.save()
  ctx.globalAlpha = Math.min(1, alpha)
  ctx.strokeStyle = '#e8402f'
  ctx.lineWidth = 6
  ctx.lineCap = 'round'
  ctx.setLineDash([16, 12])
  ctx.beginPath()
  ctx.moveTo(x, y0)
  ctx.lineTo(x, y1)
  ctx.stroke()
  ctx.restore()
}

/** A pill of text beside a thing, naming what it is. */
function tag(
  ctx: CanvasRenderingContext2D, text: string, x: number, y: number,
  size: number, fill: string, alpha: number,
) {
  if (alpha <= 0.02) return
  ctx.save()
  ctx.globalAlpha = Math.min(1, alpha)
  ctx.font = `700 ${Math.round(size)}px ${FONT}`
  const pw = ctx.measureText(text).width + size * 1.2
  const ph = size * 1.75
  ctx.beginPath()
  ctx.roundRect(x, y - ph / 2, pw, ph, ph / 2)
  inked(ctx, fill, 3.5)
  ctx.font = `700 ${Math.round(size)}px ${FONT}`
  ctx.fillStyle = LINE()
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, x + pw / 2, y + size * 0.06)
  ctx.restore()
}

/** Two chalk words on the board with a long dash and a short dash under them. */
function boardWords(
  ctx: CanvasRenderingContext2D, b: { x: number, y: number, w: number, h: number },
  alpha: number,
) {
  if (alpha <= 0.02) return
  chalk(ctx, 'LONG', b.x + b.w * 0.27, b.y + b.h * 0.42, b.h * 0.2, FONT, alpha)
  chalk(ctx, 'SHORT', b.x + b.w * 0.73, b.y + b.h * 0.42, b.h * 0.2, FONT, alpha)
  ctx.save()
  ctx.globalAlpha = 0.85 * alpha
  ctx.strokeStyle = '#f4f1e6'
  ctx.lineWidth = Math.max(4, b.h * 0.035)
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(b.x + b.w * 0.09, b.y + b.h * 0.7)
  ctx.lineTo(b.x + b.w * 0.45, b.y + b.h * 0.7)
  ctx.moveTo(b.x + b.w * 0.65, b.y + b.h * 0.7)
  ctx.lineTo(b.x + b.w * 0.81, b.y + b.h * 0.7)
  ctx.stroke()
  ctx.restore()
}

/** The room, the board and him, which every scene starts with. */
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

const intro: Painter = (ctx, w, h, t) => {
  const b = room(ctx, w, h)
  const on = Math.min(1, Math.max(0, (t - 0.5) / 1.1))
  chalk(ctx, 'Long and Short', b.x + b.w / 2, b.y + b.h * 0.42,
    b.h * 0.24, FONT, on)
  /* The rule under the title grows from nothing to full width, which is itself
     a long and a short, before either word has been said. */
  if (on > 0.05) {
    const len = b.w * 0.56 * on
    ctx.save()
    ctx.globalAlpha = 0.75 * on
    ctx.strokeStyle = '#f4f1e6'
    ctx.lineWidth = Math.max(3, b.h * 0.022)
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(b.x + b.w / 2 - len / 2, b.y + b.h * 0.68)
    ctx.lineTo(b.x + b.w / 2 + len / 2, b.y + b.h * 0.68)
    ctx.stroke()
    ctx.restore()
  }
  const r = h * 0.15
  const feet = h * 0.78
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.5, h * 0.5] },
    { at: 0.45, hop: 260 },
    { at: 2.8, hop: 180 },
  ])
  rig.draw(w * 0.5, feet - r * 1.3, r, feet)
}

/* ── 2. teach: one long thing, one short thing, both from the same line ────── */

const teach: Painter = (ctx, w, h, t, scene) => {
  const b = room(ctx, w, h)
  const tRope = cue(scene, 'rope')
  const tPen = cue(scene, 'pencil')
  const tLab = cue(scene, 'labels')

  boardWords(ctx, b, pop(t, tLab, 0.5))
  if (t < tLab) {
    chalk(ctx, 'Long and Short', b.x + b.w / 2, b.y + b.h * 0.46,
      b.h * 0.2, FONT, 0.9)
  }

  const x0 = w * START
  const thick = h * 0.055
  const yA = h * TWO[0]
  const yB = h * TWO[1]
  startLine(ctx, x0 - thick * 0.55, yA - thick * 1.1, yB + thick * 1.1, 0.75)

  /* Each one slides in from its own left, so its left end lands on the red
     line rather than growing out of it. A thing that grows looks like it is
     being made longer, which is the wrong idea in this lesson. */
  const pr = ease(pop(t, tRope, 0.45))
  if (pr > 0) {
    const len = w * 0.44 * pr
    rope(ctx, x0, x0 + len, yA, thick)
    tag(ctx, 'long', x0 + w * 0.44 + thick * 0.6, yA, h * 0.042, '#ffd93b',
      pop(t, tRope + 0.5, 0.4))
  }
  const pp = ease(pop(t, tPen, 0.4))
  if (pp > 0) {
    const len = w * 0.15 * pp
    pencil(ctx, x0, x0 + len, yB, thick)
    tag(ctx, 'short', x0 + w * 0.15 + thick * 0.6, yB, h * 0.042, '#8fd3ff',
      pop(t, tPen + 0.45, 0.4))
  }

  him(ctx, w, h, t, [
    { at: 0, mood: 'hello', look: [w * 0.55, yA] },
    { at: tRope, look: [w * 0.6, yA], hop: 140 },
    { at: tPen, look: [w * 0.4, yB], hop: 140 },
    { at: tLab, mood: 'hello', hop: 200 },
  ])
}

/* ── 3. trick: the wrong answer, then the line ─────────────────────────────── */

/**
 * The blue snake is shorter and lies further to the right.
 *
 * Those two numbers are the lesson. 0.31 of the width is genuinely less than
 * the green snake's 0.40, and the 0.145 head start makes its nose finish
 * further right than the green one's. Every child who answers by looking at
 * the right hand ends will say blue, and they are meant to.
 */
const GREEN_LEN = 0.40
const BLUE_LEN = 0.31
const BLUE_OFFSET = 0.145

const trick: Painter = (ctx, w, h, t, scene) => {
  const b = room(ctx, w, h)
  const tIn = cue(scene, 'in')
  const tLine = cue(scene, 'line')
  const tSlide = cue(scene, 'slide')
  const tGreen = cue(scene, 'green')
  const tBlue = cue(scene, 'blue')
  const tShock = cue(scene, 'shock')

  if (t < tLine) {
    chalk(ctx, 'Which is longer?', b.x + b.w / 2, b.y + b.h * 0.46,
      b.h * 0.2, FONT, 0.9)
  } else {
    chalk(ctx, 'Same start', b.x + b.w / 2, b.y + b.h * 0.36,
      b.h * 0.22, FONT, pop(t, tLine, 0.5))
    chalk(ctx, 'then look at the ends', b.x + b.w / 2, b.y + b.h * 0.74,
      b.h * 0.13, FONT, pop(t, tLine + 0.5, 0.5) * 0.9)
  }

  const x0 = w * START
  const thick = h * 0.055
  const yA = h * TWO[0]
  const yB = h * TWO[1]

  startLine(ctx, x0 - thick * 0.55, yA - thick * 1.1, yB + thick * 1.1,
    pop(t, tLine, 0.4))

  const arrive = ease(pop(t, tIn, 0.5))
  if (arrive <= 0) {
    him(ctx, w, h, t, [{ at: 0, mood: 'hello', look: [w * 0.55, yA] }])
    return
  }

  /* The slide is the only movement in the scene that matters, so it is slow
     enough to follow with the eye and eased at both ends. Snapped, the child
     sees a new picture instead of the same snake moving. */
  const slid = 1 - ease(pop(t, tSlide, 1.3))
  const greenEnd = x0 + w * GREEN_LEN
  const blueStart = x0 + w * BLUE_OFFSET * slid
  const blueEnd = blueStart + w * BLUE_LEN

  /* Offscreen entry uses the same left offset for both, so at the moment the
     question is asked the picture is already the misleading one. */
  const inset = (1 - arrive) * w * 0.4
  snake(ctx, x0 - inset, greenEnd - inset, yA, thick, '#63c15c', t)
  snake(ctx, blueStart - inset, blueEnd - inset, yB, thick, '#5aa6f0', t)

  tag(ctx, 'longer', greenEnd + thick * 1.4, yA, h * 0.042, '#ffd93b',
    pop(t, tGreen, 0.4))
  tag(ctx, 'shorter', x0 + w * BLUE_LEN + thick * 1.4, yB, h * 0.042, '#8fd3ff',
    pop(t, tBlue, 0.4))

  him(ctx, w, h, t, [
    { at: 0, mood: 'hello', look: [w * 0.55, yB] },
    { at: tIn, look: [w * 0.7, yB] },
    /* Scheming while he gives the confident wrong answer, caught the moment
       he notices the tails, and friendly again once it is sorted out. */
    { at: cue(scene, 'guess'), mood: 'scheming', look: [blueEnd, yB] },
    { at: tShock, mood: 'caught', look: [x0, yB], hop: 220 },
    { at: tLine, look: [x0, yA] },
    { at: tGreen, mood: 'hello', look: [greenEnd, yA], hop: 180 },
    { at: tBlue, look: [x0 + w * BLUE_LEN, yB] },
  ])
}

/* ── 4. practise: three things, one honest line ────────────────────────────── */

const practise: Painter = (ctx, w, h, t, scene) => {
  const b = room(ctx, w, h)
  const tIn = cue(scene, 'in')
  const tLong = cue(scene, 'longest')
  const tShort = cue(scene, 'shortest')

  chalk(ctx, 'Which is longest?', b.x + b.w / 2, b.y + b.h * 0.46,
    b.h * 0.19, FONT, 0.92)

  const x0 = w * START
  const thick = h * 0.048
  const y = THREE.map(f => h * f)
  startLine(ctx, x0 - thick * 0.6, y[0] - thick * 1.2, y[2] + thick * 1.2, 0.8)

  /* They arrive one after another, left to right, so the child watches three
     separate lengths rather than one picture of three bars. */
  const lens = [0.34, 0.22, 0.46]
  const p = lens.map((_, i) => ease(pop(t, tIn + i * 0.4, 0.45)))

  if (p[0] > 0) rope(ctx, x0, x0 + w * lens[0] * p[0], y[0], thick)
  if (p[1] > 0) cane(ctx, x0, x0 + w * lens[1] * p[1], y[1], thick)
  if (p[2] > 0) ants(ctx, x0, x0 + w * lens[2] * p[2], y[2], thick, t)

  tag(ctx, 'longest', x0 + w * lens[2] + thick * 1.6, y[2], h * 0.04, '#ffd93b',
    pop(t, tLong, 0.4))
  tag(ctx, 'shortest', x0 + w * lens[1] + thick * 1.6, y[1], h * 0.04, '#8fd3ff',
    pop(t, tShort, 0.4))

  him(ctx, w, h, t, [
    { at: 0, mood: 'hello', look: [w * 0.55, y[1]] },
    { at: tIn, look: [w * 0.6, y[0]] },
    { at: tIn + 0.8, look: [w * 0.6, y[2]] },
    { at: tLong, look: [x0 + w * lens[2], y[2]], hop: 200 },
    { at: tShort, look: [x0 + w * lens[1], y[1]], hop: 160 },
  ])
}

/* ── 5. recap, and an exercise that needs no screen ────────────────────────── */

const recap: Painter = (ctx, w, h, t, scene) => {
  const b = room(ctx, w, h)
  const t1 = cue(scene, 'rule1')
  const t2 = cue(scene, 'rule2')
  const tHome = cue(scene, 'home')

  boardWords(ctx, b, pop(t, t1, 0.4))
  chalk(ctx, 'start at the same line', b.x + b.w / 2, b.y + b.h * 0.92,
    b.h * 0.12, FONT, pop(t, t2, 0.5) * 0.9)

  const x0 = w * START
  const thick = h * 0.055
  const yA = h * TWO[0]
  const yB = h * TWO[1]
  startLine(ctx, x0 - thick * 0.55, yA - thick * 1.1, yB + thick * 1.1, 0.8)
  rope(ctx, x0, x0 + w * 0.44, yA, thick)
  pencil(ctx, x0, x0 + w * 0.15, yB, thick)
  tag(ctx, 'long', x0 + w * 0.44 + thick * 0.6, yA, h * 0.042, '#ffd93b',
    pop(t, t1, 0.4))
  tag(ctx, 'short', x0 + w * 0.15 + thick * 0.6, yB, h * 0.042, '#8fd3ff',
    pop(t, t1 + 0.3, 0.4))

  him(ctx, w, h, t, [
    { at: 0, mood: 'hello', look: [w * 0.55, yA] },
    { at: t1, look: [w * 0.6, yA], hop: 180 },
    { at: t2, look: [x0, yB] },
    /* He turns out of the picture and looks at the child for the send off,
       because the last thing said is an instruction for the real room. */
    { at: tHome, look: [w * 0.5, h * 0.42], hop: 250 },
  ])
}

export const PAINTERS: Record<string, Painter> = {
  intro, teach, trick, practise, recap,
}

export const LongAndShortLesson: React.FC = () => (
  <LessonVideo lesson={LONG_SHORT_LESSON} painters={PAINTERS} />
)

export { LONG_SHORT_LESSON }
