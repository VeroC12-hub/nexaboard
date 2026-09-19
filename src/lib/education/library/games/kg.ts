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
