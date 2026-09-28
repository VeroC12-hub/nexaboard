/**
 * Counting 1 to 10: what each scene looks like.
 *
 * One painter per scene. Everything shared, the classroom, the blackboard, the
 * rig, the ten frame, the group layout, lives in `../../draw`, and everything
 * about being a video at all lives in `../../shell`. What is left here is only
 * what is true of this lesson and no other.
 */

import React from 'react'
import {
  LessonVideo, FONT, type Painter, type Scene,
} from '../../shell'
import {
  backdrop, blackboard, boardRect, fieldRect, himAt, poseRig,
  drawGroup, beatNumeral, chalk, boardNumber, type RigEvent,
} from '../../draw'
import { COUNT_LESSON } from './lesson'

const THING = 'mango'

const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
  'six', 'seven', 'eight', 'nine', 'ten']

/** How far through its arrival a thing is, given when its beat was. */
const pop = (t: number, at: number) => Math.max(0, Math.min(1, (t - at) / 0.3))

const intro: Painter = (ctx, w, h, t) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)

  /* The title writes itself on, which gives the first four seconds something
     to watch while he is still saying hello. */
  const on = Math.min(1, Math.max(0, (t - 0.5) / 1.1))
  chalk(ctx, 'Counting 1 to 10', board.x + board.w / 2, board.y + board.h * 0.42,
    board.h * 0.24, FONT, on)
  if (on > 0.05) {
    const line = board.w * 0.52 * on
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

  /* Centre stage, and bigger than he is anywhere else. He is the reason a
     child stays for scene two. Feet above the caption, not behind it. */
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.5, h * 0.5] },
    { at: 0.45, hop: 260 },
    { at: 2.6, hop: 180 },
  ])
  const r = h * 0.15
  const feet = h * 0.78
  rig.draw(w * 0.5, feet - r * 1.3, r, feet)
}

const count: Painter = (ctx, w, h, t, scene) => {
  const beats = scene.notes || []
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)

  let landed = 0
  for (const b of beats) if (t >= b) landed++

  if (landed > 0) {
    /* The numeral swells on the beat and settles, so the board and the floor
       are visibly the same event. */
    const since = t - beats[landed - 1]
    boardNumber(ctx, landed, board, FONT,
      1 + Math.max(0, 1 - since / 0.28) * 0.14, WORDS[landed])
  } else {
    chalk(ctx, 'How many?', board.x + board.w / 2, board.y + board.h * 0.5,
      board.h * 0.24, FONT, 0.9)
  }

  const box = fieldRect(w, h)
  const { spots, r } = drawGroup(ctx, THING, 10, box, {
    t, shown: landed, pops: beats.map(b => pop(t, b)),
  })

  if (landed > 0) {
    beatNumeral(ctx, landed, spots[landed - 1], r, t - beats[landed - 1], FONT)
  }

  const him = himAt(w, h)
  const look = landed > 0 ? spots[landed - 1] : { x: w * 0.5, y: h * 0.6 }
  const events: RigEvent[] = [{ at: 0, mood: 'hello' }]
  for (const b of beats) {
    events.push({ at: b, look: [look.x, look.y] as [number, number], hop: 90 })
  }
  const rig = poseRig(ctx, t, events)
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

const groups: Painter = (ctx, w, h, t, scene) => {
  const shown = (scene.data?.groups || []) as { n: number, at: number }[]
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)

  let g = shown[0]
  for (const one of shown) if (t >= one.at) g = one
  if (!g) return

  const since = t - g.at
  boardNumber(ctx, g.n, board, FONT,
    1 + Math.max(0, 1 - since / 0.3) * 0.12, WORDS[g.n])

  /**
   * Each group arrives in its own way.
   *
   * Three bounce in one after another, slow enough to watch each one land.
   * Five comes in as a run, because five is a hand and the point is the whole
   * hand. Ten is already there and celebrating, because by then the child has
   * met it twice and what is left is the feeling of ten.
   */
  const stagger = g.n <= 3 ? 0.26 : g.n <= 5 ? 0.13 : 0
  const pops = new Array(g.n).fill(0).map((_, i) =>
    Math.min(1, Math.max(0, (since - i * stagger) / 0.34)))
  drawGroup(ctx, THING, g.n, fieldRect(w, h), {
    t, face: true, pops, party: g.n >= 10,
  })

  const him = himAt(w, h)
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.55, h * 0.6] },
    ...shown.map(one => ({ at: one.at, hop: 210 })),
  ])
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

const together: Painter = (ctx, w, h, t, scene) => {
  const beats = scene.notes || []
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)

  let lit = -1
  for (let i = 0; i < beats.length; i++) if (t >= beats[i]) lit = i
  const n = lit >= 0 ? lit + 1 : 0

  if (n > 0) {
    boardNumber(ctx, n, board, FONT,
      1 + Math.max(0, 1 - (t - beats[lit]) / 0.2) * 0.1, WORDS[n])
  } else {
    chalk(ctx, 'All together', board.x + board.w / 2, board.y + board.h * 0.5,
      board.h * 0.22, FONT, 0.9)
  }

  /* All ten are on screen throughout. This pass is about hearing the run of
     numbers over a group that does not change, which is a different skill from
     watching them arrive. */
  const { spots } = drawGroup(ctx, THING, 10, fieldRect(w, h), {
    t, face: true, lit: lit >= 0 ? lit : undefined,
  })

  const him = himAt(w, h)
  const target = lit >= 0 ? spots[lit] : { x: w * 0.55, y: h * 0.6 }
  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [target.x, target.y] },
    ...beats.filter(b => b <= t).map(b => ({
      at: b, look: [target.x, target.y] as [number, number],
    })),
  ])
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

const handover: Painter = (ctx, w, h, t) => {
  ctx.drawImage(backdrop('room', w, h), 0, 0)
  const board = boardRect(w, h)
  blackboard(ctx, board)
  chalk(ctx, 'Your turn!', board.x + board.w / 2, board.y + board.h * 0.36,
    board.h * 0.3, FONT, Math.min(1, t / 0.5))
  /* The cue says what the game actually asks, not what would sound good. The
     game the button opens is Feed Ananse, so it says feed. */
  chalk(ctx, 'Tap the mangoes to feed Ananse', board.x + board.w / 2,
    board.y + board.h * 0.76, board.h * 0.14, FONT,
    Math.min(1, Math.max(0, (t - 0.8) / 0.6)))

  const box = fieldRect(w, h)
  drawGroup(ctx, THING, 10, { ...box, y: box.y + box.h * 0.12, h: box.h * 0.72 },
    { t, face: true })

  const rig = poseRig(ctx, t, [
    { at: 0, mood: 'hello', look: [w * 0.5, h * 0.45] },
    { at: 0.4, hop: 280 },
    { at: 2.4, hop: 200 },
  ])
  const him = himAt(w, h)
  rig.draw(him.x, him.feet - him.r * 1.3, him.r, him.feet)
}

export const PAINTERS: Record<string, Painter> = {
  intro, count, groups, together, handover,
}

export const CountLesson: React.FC = () => (
  <LessonVideo lesson={COUNT_LESSON} painters={PAINTERS} />
)

export { COUNT_LESSON }
