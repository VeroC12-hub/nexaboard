/**
 * The early years games, one at a time.
 *
 * Each is a costume over a verb the engine already has. See `costumes.ts` for
 * why that is the right shape and for the line a costume may not cross.
 */

import { dress } from '../../costumes'

/* ── 1. Count the Apples ──────────────────────────────────────────────────── */

/**
 * Bright farm, large apples, a friendly character. Drag the number asked for
 * into the basket.
 *
 * `collect` already does the hard part: things that drag, a basket that knows
 * what is in it, a Done button that will not accept an empty answer, and the
 * count checked by the engine rather than by anything written here. What was
 * missing was that it looked like an exercise. It is an orchard now, with
 * Kofi standing in it and apples that are apples rather than apples printed on
 * white cards.
 *
 * Deliberately *not* restricted to the word "apple" in a topic title. It is a
 * counting game, so it suits counting, and the apples are the costume. A
 * platform that only offered it for lessons literally about apples would offer
 * it approximately never.
 */
dress({
  id: 'count-the-apples',
  name: 'Count the Apples',
  goal: 'collect',
  subject: 'count',
  scene: 'orchard',
  stages: ['creche', 'primary'],
  suits: /count|how many|number|one to one|more|fewer|add|altogether|group/i,
  /* Counting *backwards* is a different idea and has its own games; putting
     apples in a basket teaches nothing about it. */
  not: /backward|back from|take away|subtract|minus|letter|sound|shape|write/i,
  look: 'bare',
  things: [
    { emoji: '🍎', one: 'apple', many: 'apples', draw: 'apple' },
  ],
  intro: 'Kofi is picking apples on the farm. Let us help him.',
  character: {
    body: 'child',
    name: 'Kofi',
    colours: ['#8a5a2b', '#f2b517'],
    at: 0.14,
  },
})

/* ── 2. Number Balloon Pop ────────────────────────────────────────────────── */

/**
 * Balloons drift up the screen with a number on each. Pop the one called out.
 *
 * `pop` already does the work: things that move, a tap that is judged against
 * a truth the engine computed, and a round that ends on one answer. What this
 * adds is that a balloon now behaves like a balloon. Three things had to
 * change in the engine for that, and all three were wrong before rather than
 * missing:
 *
 *   - Balloons went whichever way the grammar felt like, including down. So a
 *     costume may now name its own motion, and this one asks for `rise`.
 *   - A tapped balloon got a coloured ring and stayed whole. It bursts now.
 *   - The balloon was an ellipse with a string under it. It has a neck and a
 *     knot, which is the whole difference between a balloon and an egg.
 *
 * Numerals rather than counting on purpose. Count the Apples already asks how
 * many, and a child who can count to five still has to learn that the mark
 * "5" is the same idea. That is a separate skill and it is the one this game
 * drills, which is also why it is second: it is the other half of the first.
 */
dress({
  id: 'number-balloon-pop',
  name: 'Number Balloon Pop',
  goal: 'pop',
  subject: 'numeral',
  scene: 'yard',
  stages: ['creche', 'primary'],
  suits: /number|numeral|digit|figure|count|how many|recognis|recogniz|read.*number|zero|one to ten/i,
  /* Counting things and naming the written mark are different lessons, and
     this game only teaches the second. A lesson about words or shapes gets
     nothing from it at all. */
  not: /letter|sound|phonic|shape|colour|color|word|write|backward|add|subtract|take away/i,
  look: 'balloon',
  motion: 'rise',
  things: [
    { emoji: '🎈', one: 'balloon', many: 'balloons' },
  ],
  intro: 'Ama has balloons with numbers on them. Pop the one we say.',
  character: {
    body: 'child',
    name: 'Ama',
    colours: ['#7a4a22', '#e0715c'],
    at: 0.12,
  },
})
