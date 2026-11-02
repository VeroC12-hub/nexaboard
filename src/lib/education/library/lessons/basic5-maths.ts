/**
 * Stored lessons for Basic 5 Mathematics.
 *
 * Written at about grade 5, with a `brief` form on every topic.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── rounding ─────────────────────────────────────────────────────────────── */

teach({
  topicId: 'rounding',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Rounding replaces a number with a nearby simpler one. '
      + 'Look at the digit to the right of where you are rounding. '
      + '5 or more rounds up, less than 5 rounds down.',
    method: [
      'Find the place you are rounding to.',
      'Look at the digit just to its right.',
      '5 or more: round up. Less than 5: round down.',
    ],
  },

  idea:
    'Rounding swaps a number for a simpler one close to it. '
    + '387 to the nearest ten is 390. To the nearest hundred it is 400. '
    + 'You lose a little accuracy and gain a number you can work with.',

  mechanism:
    'The rule about 5 is not arbitrary. '
    + 'You are choosing which of two neighbours is closer. '
    + '387 sits between 380 and 390, and it is nearer 390, so it goes up. '
    + 'The digit to the right tells you which half you are in, '
    + 'and nothing further right can change that. '
    + 'The harder question is when rounding is sensible at all. '
    + 'Rounding a crowd to the nearest hundred is useful. '
    + 'Rounding money you owe somebody is not.',

  recap:
    'You know what each place in a number is worth. '
    + 'Rounding is choosing which place to keep honest and which to let go.',

  method: [
    'Decide which place you are rounding to.',
    'Underline the digit in that place.',
    'Look at the digit immediately to its right.',
    'If it is 5 or more, add one to the underlined digit.',
    'If it is less than 5, leave the underlined digit alone.',
    'Replace everything to the right with noughts.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Round 387 to the nearest ten.',
      steps: [
        'The tens digit is 8.',
        'The digit to its right is 7, which is 5 or more.',
        'So round up: 8 becomes 9.',
      ],
      answer: '390.',
    },
    {
      level: 4,
      ask: 'Round 2,451 to the nearest thousand.',
      steps: [
        'The thousands digit is 2.',
        'The digit to its right is 4, which is less than 5.',
        'So leave the 2 alone.',
      ],
      answer: '2,000. The 451 does not matter once you know the 4.',
    },
    {
      level: 5,
      ask: 'Round 396 to the nearest ten.',
      steps: [
        'The tens digit is 9. To its right is 6, so round up.',
        '9 and one more is 10, so the tens place overflows.',
        'Carry it into the hundreds, the way you do when adding.',
      ],
      answer: '400.',
    },
  ],

  traps: [
    {
      mistake: 'Looking at all the digits to the right.',
      why: 'Only the next one matters. '
        + 'For 2,451 to the nearest thousand, the 4 settles it and the 51 '
        + 'is noise.',
    },
    {
      mistake: 'Rounding twice.',
      why: '2,449 to the nearest ten is 2,450, and rounding that to the '
        + 'nearest hundred gives 2,500. '
        + 'Done in one step from 2,449 it is 2,400. Round once, from the '
        + 'original.',
    },
    {
      mistake: 'Rounding when the exact number matters.',
      why: 'Rounding a price or a dose is wrong. '
        + 'Round for estimating, not for owing.',
    },
  ],

  extension:
    'Rounding is how you check a long calculation quickly. '
    + 'If 387 times 21 should be roughly 400 times 20, that is about 8,000. '
    + 'An answer of 812 or 81,270 is wrong and you knew it in two seconds.',

  figure: {
    alt: 'A number line from 380 to 390 with a tick for every whole number. '
      + '387 is marked with a green dot. The gap from 387 to 390 is marked '
      + 'as three, and the gap back to 380 is marked as seven, so 387 is '
      + 'nearer 390.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="50" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">which neighbour is nearer</text>'
      + '<line x1="40" y1="208" x2="600" y2="208" stroke-width="4"/>'
      + '<line x1="60" y1="196" x2="60" y2="220"/>'
      + '<text x="60" y="254" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">380</text>'
      + '<line x1="112" y1="196" x2="112" y2="220"/>'
      + '<line x1="164" y1="196" x2="164" y2="220"/>'
      + '<line x1="216" y1="196" x2="216" y2="220"/>'
      + '<line x1="268" y1="196" x2="268" y2="220"/>'
      + '<line x1="320" y1="196" x2="320" y2="220"/>'
      + '<text x="320" y="254" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">385</text>'
      + '<line x1="372" y1="196" x2="372" y2="220"/>'
      + '<line x1="424" y1="196" x2="424" y2="220"/>'
      + '<line x1="476" y1="196" x2="476" y2="220"/>'
      + '<line x1="528" y1="196" x2="528" y2="220"/>'
      + '<line x1="580" y1="196" x2="580" y2="220"/>'
      + '<text x="580" y="254" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">390</text>'
      + '<circle cx="424" cy="208" r="12" stroke="#0f8a4d" stroke-width="3" '
      + 'fill="#0f8a4d"/>'
      + '<text x="424" y="164" font-size="24" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">387</text>'
      + '<line x1="60" y1="300" x2="424" y2="300" stroke-width="3"/>'
      + '<line x1="60" y1="292" x2="60" y2="308"/>'
      + '<line x1="424" y1="292" x2="424" y2="308"/>'
      + '<text x="242" y="330" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">seven away</text>'
      + '<line x1="424" y1="300" x2="580" y2="300" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="580" y1="292" x2="580" y2="308" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="502" y="330" font-size="20" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">three away</text>'
      + '<text x="320" y="378" font-size="22" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">so 387 to the nearest ten is '
      + '390</text></svg>',
  },
  questions: [
    {
      id: 'rd-1',
      ask: 'Round 387 to the nearest ten.',
      kind: 'numeric',
      answer: '390',
      accept: ['three hundred and ninety'],
      teach: 'The digit after the tens is 7, so round up.',
      level: 3,
    },
    {
      id: 'rd-2',
      ask: 'Round 2,451 to the nearest thousand.',
      kind: 'numeric',
      answer: '2000',
      accept: ['2,000', 'two thousand'],
      teach: 'Look only at the next digit, which is 4. '
        + 'Less than 5, so round down. The 51 is irrelevant.',
      level: 4,
    },
    {
      id: 'rd-3',
      ask: 'Round 396 to the nearest ten.',
      kind: 'numeric',
      answer: '400',
      accept: ['four hundred'],
      teach: 'Rounding the 9 up makes 10 tens, which carries into the '
        + 'hundreds, exactly as in addition.',
      level: 5,
    },
  ],
})

/* ── division with remainders ─────────────────────────────────────────────── */

teach({
  topicId: 'division-remainder',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'When a number does not divide evenly, what is left is the remainder. '
      + 'What you do with it depends on the story, not on the arithmetic.',
    method: [
      'Divide as far as you can.',
      'Whatever is left over is the remainder.',
      'Ask what the story needs you to do with it.',
    ],
  },

  idea:
    'Not every division comes out evenly. '
    + '26 divided by 4 is 6, with 2 left over. '
    + 'That 2 is the remainder, and it is part of the answer.',

  mechanism:
    'Here is the part that is really being taught. '
    + 'The arithmetic always gives the same answer, and the story does not. '
    + 'Whether the leftover has to be carried, kept, shared further '
    + 'or thrown away is decided by what the question is about, '
    + 'and nothing in the division itself can tell you. '
    + 'Same sum, three different answers. '
    + 'The arithmetic is the easy half.',

  recap:
    'You can divide by sharing and by grouping, '
    + 'and you have already seen a leftover. '
    + 'This is about what to do with it.',

  method: [
    'Divide as far as the numbers allow.',
    'Write the whole number answer.',
    'Write what is left over as the remainder.',
    'Check: answer times divisor, plus remainder, should give the total.',
    'Now read the question again.',
    'Ask what the story needs: round up, ignore it, or share it further.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is 26 divided by 4?',
      steps: [
        '4 times 6 is 24.',
        '26 take away 24 is 2.',
      ],
      answer: '6 remainder 2. Check: 6 times 4 is 24, and 24 and 2 is 26.',
    },
    {
      level: 4,
      ask: '26 children travel in cars that hold 4. How many cars?',
      steps: [
        '26 divided by 4 is 6 remainder 2.',
        'Six cars carry 24 children.',
        'Two children are still standing there.',
      ],
      answer: '7 cars. The remainder forces an extra car.',
    },
    {
      level: 5,
      ask: 'A rope 26 metres long is cut into 4 metre pieces. '
        + 'How many pieces, and what about the rest?',
      steps: [
        '26 divided by 4 is 6 remainder 2.',
        'Six full pieces.',
        'The 2 metres left is not a 4 metre piece.',
      ],
      answer: '6 pieces, with 2 metres left over. '
        + 'Here the remainder is ignored rather than rounded up.',
    },
  ],

  traps: [
    {
      mistake: 'Always rounding up.',
      why: 'Cars round up, rope does not. '
        + 'Read the story.',
    },
    {
      mistake: 'Writing the remainder as a decimal without thinking.',
      why: '6.5 cars means nothing. '
        + 'Some things cannot be half of themselves.',
    },
    {
      mistake: 'Forgetting to check.',
      why: 'Answer times divisor plus remainder should give the total back. '
        + 'It catches most slips.',
    },
  ],

  extension:
    'The remainder can also be written as a fraction of the divisor. '
    + '26 divided by 4 is 6 and two quarters, which is 6 and a half. '
    + 'That is right for rope and cloth and wrong for cars, '
    + 'and knowing which is which is the whole skill.',

  figure: {
    alt: '26 counters sorted into six groups of four, with two counters left '
      + 'over on their own in a green box. Under them it says 26 divided by '
      + '4 is 6, with 2 left over.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="50" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">26 shared into fours</text>'
      + '<polygon points="48,118 124,118 124,212 48,212" stroke-width="3"/>'
      + '<circle cx="68" cy="146" r="13" fill="currentColor"/>'
      + '<circle cx="104" cy="146" r="13" fill="currentColor"/>'
      + '<circle cx="68" cy="182" r="13" fill="currentColor"/>'
      + '<circle cx="104" cy="182" r="13" fill="currentColor"/>'
      + '<polygon points="144,118 220,118 220,212 144,212" '
      + 'stroke-width="3"/>'
      + '<circle cx="164" cy="146" r="13" fill="currentColor"/>'
      + '<circle cx="200" cy="146" r="13" fill="currentColor"/>'
      + '<circle cx="164" cy="182" r="13" fill="currentColor"/>'
      + '<circle cx="200" cy="182" r="13" fill="currentColor"/>'
      + '<polygon points="240,118 316,118 316,212 240,212" '
      + 'stroke-width="3"/>'
      + '<circle cx="260" cy="146" r="13" fill="currentColor"/>'
      + '<circle cx="296" cy="146" r="13" fill="currentColor"/>'
      + '<circle cx="260" cy="182" r="13" fill="currentColor"/>'
      + '<circle cx="296" cy="182" r="13" fill="currentColor"/>'
      + '<polygon points="336,118 412,118 412,212 336,212" '
      + 'stroke-width="3"/>'
      + '<circle cx="356" cy="146" r="13" fill="currentColor"/>'
      + '<circle cx="392" cy="146" r="13" fill="currentColor"/>'
      + '<circle cx="356" cy="182" r="13" fill="currentColor"/>'
      + '<circle cx="392" cy="182" r="13" fill="currentColor"/>'
      + '<polygon points="432,118 508,118 508,212 432,212" '
      + 'stroke-width="3"/>'
      + '<circle cx="452" cy="146" r="13" fill="currentColor"/>'
      + '<circle cx="488" cy="146" r="13" fill="currentColor"/>'
      + '<circle cx="452" cy="182" r="13" fill="currentColor"/>'
      + '<circle cx="488" cy="182" r="13" fill="currentColor"/>'
      + '<polygon points="528,118 604,118 604,212 528,212" '
      + 'stroke-width="3"/>'
      + '<circle cx="548" cy="146" r="13" fill="currentColor"/>'
      + '<circle cx="584" cy="146" r="13" fill="currentColor"/>'
      + '<circle cx="548" cy="182" r="13" fill="currentColor"/>'
      + '<circle cx="584" cy="182" r="13" fill="currentColor"/>'
      + '<polygon points="250,250 390,250 390,318 250,318" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<circle cx="300" cy="284" r="13" stroke="#0f8a4d" stroke-width="3" '
      + 'fill="#0f8a4d"/>'
      + '<circle cx="340" cy="284" r="13" stroke="#0f8a4d" stroke-width="3" '
      + 'fill="#0f8a4d"/>'
      + '<text x="320" y="354" font-size="22" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">six groups of four, and 2 left '
      + 'over</text></svg>',
  },
  tables: [{
    caption: 'The same sum three times, and three different answers',
    columns: [
      'The story',
      'The sum',
      'What the 2 left over means',
      'The answer',
    ],
    rows: [
      [
        '26 children, 4 to a car',
        '6 remainder 2',
        'They still need a ride',
        '7 cars',
      ],
      [
        '26 cedis shared between 4',
        '6 remainder 2',
        'Share it further, or keep it',
        '6 cedis each',
      ],
      [
        '26 metres of rope cut into 4 metre lengths',
        '6 remainder 2',
        'It is offcut',
        '6 lengths',
      ],
    ],
    note: 'The arithmetic is the easy half. Reading the question again is '
      + 'the other half.',
  }],
  questions: [
    {
      id: 'dr-1',
      ask: 'What is the remainder when 26 is divided by 4?',
      kind: 'numeric',
      answer: '2',
      accept: ['two'],
      teach: '4 times 6 is 24, and 26 take away 24 leaves 2.',
      level: 3,
    },
    {
      id: 'dr-2',
      ask: '26 children, 4 to a car. How many cars are needed?',
      kind: 'numeric',
      answer: '7',
      accept: ['seven'],
      teach: 'Six cars hold 24. The last two children still need a car, '
        + 'so the remainder forces a seventh.',
      level: 4,
    },
    {
      id: 'dr-3',
      ask: 'Should you always round a remainder up?',
      kind: 'choice',
      options: ['Yes', 'No, it depends on the story'],
      answer: 'No, it depends on the story',
      teach: 'Cars round up. Offcut rope is just left over. '
        + 'Same arithmetic, different answers.',
      level: 5,
    },
  ],
})

/* ── factors and multiples ────────────────────────────────────────────────── */

teach({
  topicId: 'factors-multiples',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A factor divides into a number exactly. '
      + 'A multiple is what you get by multiplying it. '
      + '3 is a factor of 12, and 12 is a multiple of 3.',
    method: [
      'For factors, test 1, 2, 3 upwards and keep the ones that divide exactly.',
      'Factors come in pairs, so write both each time.',
      'For multiples, count up in that number.',
    ],
  },

  idea:
    'A factor of a number divides into it with nothing left over. '
    + 'A multiple is what you get when you multiply the number by '
    + 'something. '
    + 'Factors are finite. Multiples are not.',

  mechanism:
    'Factors always come in pairs, and that is what makes finding them '
    + 'quick. '
    + 'If 3 divides into 12 then so does 4, because 3 times 4 is 12. '
    + 'So you only have to test upwards until the pairs meet in the middle. '
    + 'For 12 you test 1, 2, 3 and then stop, '
    + 'because 4 has already turned up as 3’s partner. '
    + 'That halves the work and it also tells you when you are finished, '
    + 'which guessing never does.',

  recap:
    'You know your tables, and you know division. '
    + 'A factor is a division that comes out exactly.',

  method: [
    'To find factors, start at 1 and test each number in turn.',
    'Does it divide exactly? Then it is a factor, and so is its partner.',
    'Write both down each time.',
    'Stop when the pairs start repeating.',
    'For multiples, just count up in the number.',
    'For the highest common factor, list both sets and take the largest shared.',
  ],

  worked: [
    {
      level: 3,
      ask: 'List all the factors of 12.',
      steps: [
        '1 divides in, partner 12.',
        '2 divides in, partner 6.',
        '3 divides in, partner 4.',
        'Next would be 4, which we already have.',
      ],
      answer: '1, 2, 3, 4, 6 and 12.',
    },
    {
      level: 4,
      ask: 'What is the highest common factor of 12 and 18?',
      steps: [
        'Factors of 12: 1, 2, 3, 4, 6, 12.',
        'Factors of 18: 1, 2, 3, 6, 9, 18.',
        'Shared: 1, 2, 3, 6.',
      ],
      answer: '6.',
    },
    {
      level: 5,
      ask: 'Why do you not have to test past the middle when finding factors?',
      steps: [
        'Every factor has a partner that multiplies with it.',
        'Once you reach a number you have already written as a partner, '
          + 'the rest are repeats.',
      ],
      answer: 'Because factors come in pairs, '
        + 'so everything past the meeting point has already been found.',
    },
  ],

  traps: [
    {
      mistake: 'Mixing up factors and multiples.',
      why: 'Factors go into the number. '
        + 'Multiples come out of it. '
        + '3 is a factor of 12; 12 is a multiple of 3.',
    },
    {
      mistake: 'Forgetting 1 and the number itself.',
      why: 'Both are always factors. '
        + 'Missing them loses the first and last of every list.',
    },
    {
      mistake: 'Trying to list all the multiples.',
      why: 'There is no end to them. '
        + 'List as many as the question needs and stop.',
    },
  ],

  extension:
    'A number whose only factors are 1 and itself is called a prime. '
    + '2, 3, 5, 7, 11 and 13 are the first few. '
    + 'Every other number can be built by multiplying primes together, '
    + 'and in only one way, which is a surprisingly deep fact.',

  figure: {
    alt: 'The factors of 12 drawn as three pairs, each pair joined by a '
      + 'dotted green line marked times makes 12: 1 with 12, 2 with 6, and '
      + '3 with 4. Under them it says test upwards until the pairs meet, '
      + 'and then you are finished.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="54" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the factors of 12 come in '
      + 'pairs</text><polygon points="110,130 190,130 190,182 110,182"/>'
      + '<text x="150" y="166" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">1</text>'
      + '<polygon points="450,130 530,130 530,182 450,182"/>'
      + '<text x="490" y="166" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">12</text>'
      + '<line x1="196" y1="156" x2="250" y2="156" stroke="#0f8a4d" '
      + 'stroke-width="3" stroke-dasharray="7 7"/>'
      + '<line x1="390" y1="156" x2="444" y2="156" stroke="#0f8a4d" '
      + 'stroke-width="3" stroke-dasharray="7 7"/>'
      + '<text x="320" y="162" font-size="17" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">times makes 12</text>'
      + '<polygon points="110,200 190,200 190,252 110,252"/>'
      + '<text x="150" y="236" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">2</text>'
      + '<polygon points="450,200 530,200 530,252 450,252"/>'
      + '<text x="490" y="236" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">6</text>'
      + '<line x1="196" y1="226" x2="250" y2="226" stroke="#0f8a4d" '
      + 'stroke-width="3" stroke-dasharray="7 7"/>'
      + '<line x1="390" y1="226" x2="444" y2="226" stroke="#0f8a4d" '
      + 'stroke-width="3" stroke-dasharray="7 7"/>'
      + '<text x="320" y="232" font-size="17" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">times makes 12</text>'
      + '<polygon points="110,270 190,270 190,322 110,322"/>'
      + '<text x="150" y="306" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">3</text>'
      + '<polygon points="450,270 530,270 530,322 450,322"/>'
      + '<text x="490" y="306" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">4</text>'
      + '<line x1="196" y1="296" x2="250" y2="296" stroke="#0f8a4d" '
      + 'stroke-width="3" stroke-dasharray="7 7"/>'
      + '<line x1="390" y1="296" x2="444" y2="296" stroke="#0f8a4d" '
      + 'stroke-width="3" stroke-dasharray="7 7"/>'
      + '<text x="320" y="302" font-size="17" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">times makes 12</text>'
      + '<text x="320" y="378" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">test upwards until the pairs '
      + 'meet, then you are finished</text></svg>',
  },
  tables: [{
    caption: 'How factors and multiples differ',
    columns: ['Question', 'Factors of 12', 'Multiples of 3'],
    rows: [
      ['What they are', '1, 2, 3, 4, 6 and 12', '3, 6, 9, 12, 15 and on'],
      [
        'How you find them',
        'Divide 12 and look for no remainder',
        'Count up in threes',
      ],
      [
        'How many there are',
        'Six of them, and that is all',
        'They never run out',
      ],
    ],
    note: 'Factors are finite. Multiples are not.',
  }],
  questions: [
    {
      id: 'fm-1',
      ask: 'How many factors does 12 have?',
      kind: 'numeric',
      answer: '6',
      accept: ['six'],
      teach: '1, 2, 3, 4, 6 and 12. Six of them, in three pairs.',
      level: 3,
    },
    {
      id: 'fm-2',
      ask: 'Is 12 a factor or a multiple of 3?',
      kind: 'choice',
      options: ['A factor', 'A multiple'],
      answer: 'A multiple',
      teach: '3 goes into 12, so 3 is the factor. '
        + '12 comes out of multiplying 3, so it is the multiple.',
      level: 4,
    },
    {
      id: 'fm-3',
      ask: 'What is the highest common factor of 12 and 18?',
      kind: 'numeric',
      answer: '6',
      accept: ['six'],
      teach: 'Both lists share 1, 2, 3 and 6. The largest shared one is 6.',
      level: 4,
    },
  ],
})

/* ── adding and subtracting fractions ─────────────────────────────────────── */

teach({
  topicId: 'add-fractions',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'You can only add fractions whose bottoms match. '
      + 'Make the bottoms the same first, then add the tops. '
      + 'The bottom does not change.',
    method: [
      'Check the bottom numbers. Same? Add the tops.',
      'Different? Change one or both so they match.',
      'Add the tops. Leave the bottom alone.',
    ],
  },

  idea:
    'Two quarters and one quarter make three quarters. '
    + 'You add the tops and leave the bottom alone. '
    + 'But a half plus a quarter cannot be added as they stand, '
    + 'because the pieces are different sizes.',

  mechanism:
    'The bottom number is the size of the piece, '
    + 'so adding fractions with different bottoms is like adding '
    + 'a bag of oranges to a bag of mangoes and calling the answer fruit: '
    + 'you cannot say how many of what. '
    + 'Making the bottoms match is turning both into the same kind of piece. '
    + 'A half becomes two quarters, and now both are quarters, '
    + 'so they can be counted together. '
    + 'The bottom stays the same in the answer because the pieces are still '
    + 'that size. Only how many you have changed.',

  recap:
    'You can find equivalent fractions by multiplying top and bottom by the '
    + 'same number. '
    + 'That is the tool this topic needs.',

  method: [
    'Look at the two bottom numbers.',
    'The same? Add or subtract the tops and keep the bottom.',
    'Different? Find a number both bottoms divide into.',
    'Change each fraction to that bottom, multiplying top and bottom alike.',
    'Now add or subtract the tops.',
    'Simplify the answer if you can.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is one fifth plus two fifths?',
      steps: [
        'The bottoms already match.',
        'Add the tops: 1 and 2 is 3.',
        'The bottom stays 5.',
      ],
      answer: 'Three fifths.',
    },
    {
      level: 4,
      ask: 'What is a half plus a quarter?',
      steps: [
        'The bottoms are 2 and 4, so they differ.',
        '4 works for both: a half is two quarters.',
        'Now two quarters plus one quarter.',
      ],
      answer: 'Three quarters.',
    },
    {
      level: 5,
      ask: 'What is two thirds take away one quarter?',
      steps: [
        'Bottoms are 3 and 4. Both divide into 12.',
        'Two thirds is eight twelfths. One quarter is three twelfths.',
        '8 take away 3 is 5.',
      ],
      answer: 'Five twelfths.',
    },
  ],

  traps: [
    {
      mistake: 'Adding the bottoms as well as the tops.',
      why: 'A half plus a half is not two quarters, it is one whole. '
        + 'The bottom is the piece size and it does not change.',
    },
    {
      mistake: 'Adding fractions with different bottoms as they stand.',
      why: 'The pieces are different sizes, so the count means nothing. '
        + 'Match the bottoms first.',
    },
    {
      mistake: 'Leaving the answer unsimplified.',
      why: 'Two quarters should be written as a half. '
        + 'The answer is not finished until nothing divides into both.',
    },
  ],

  extension:
    'The number you make both bottoms into is called a common denominator, '
    + 'and multiplying the two bottoms together always gives one. '
    + 'It is not always the smallest, '
    + 'so you may have more simplifying to do at the end, '
    + 'but it always works and it never requires a guess.',

  figure: {
    alt: 'A half and a quarter drawn as two bars of the same whole. The half '
      + 'is then cut down the middle so that it is two quarters, and the '
      + 'two bars together make three quarters of the whole. Under it says '
      + 'make the pieces the same size, then count them.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a half plus a quarter</text>'
      + '<polygon points="50,80 160,80 160,132 50,132" stroke="#0f8a4d" '
      + 'stroke-width="3" fill="#0f8a4d" fill-opacity="0.18"/>'
      + '<polygon points="160,80 270,80 270,132 160,132" stroke-width="3"/>'
      + '<text x="160" y="158" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">one half</text>'
      + '<text x="320" y="116" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">plus</text>'
      + '<polygon points="370,80 425,80 425,132 370,132" stroke="#0f8a4d" '
      + 'stroke-width="3" fill="#0f8a4d" fill-opacity="0.18"/>'
      + '<polygon points="425,80 480,80 480,132 425,132" stroke-width="3"/>'
      + '<polygon points="480,80 535,80 535,132 480,132" stroke-width="3"/>'
      + '<polygon points="535,80 590,80 590,132 535,132" stroke-width="3"/>'
      + '<text x="480" y="158" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">one quarter</text>'
      + '<line x1="320" y1="182" x2="320" y2="222"/>'
      + '<polyline points="310,209 320,222 330,209"/>'
      + '<polygon points="50,244 105,244 105,296 50,296" stroke="#0f8a4d" '
      + 'stroke-width="3" fill="#0f8a4d" fill-opacity="0.18"/>'
      + '<polygon points="105,244 160,244 160,296 105,296" stroke="#0f8a4d" '
      + 'stroke-width="3" fill="#0f8a4d" fill-opacity="0.18"/>'
      + '<polygon points="160,244 215,244 215,296 160,296" '
      + 'stroke-width="3"/>'
      + '<polygon points="215,244 270,244 270,296 215,296" '
      + 'stroke-width="3"/>'
      + '<text x="160" y="322" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">two quarters</text>'
      + '<text x="320" y="280" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">plus</text>'
      + '<polygon points="370,244 425,244 425,296 370,296" stroke="#0f8a4d" '
      + 'stroke-width="3" fill="#0f8a4d" fill-opacity="0.18"/>'
      + '<polygon points="425,244 480,244 480,296 425,296" '
      + 'stroke-width="3"/>'
      + '<polygon points="480,244 535,244 535,296 480,296" '
      + 'stroke-width="3"/>'
      + '<polygon points="535,244 590,244 590,296 535,296" '
      + 'stroke-width="3"/>'
      + '<text x="480" y="322" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">one quarter</text>'
      + '<text x="320" y="376" font-size="22" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">now the pieces match: three '
      + 'quarters</text></svg>',
  },
  questions: [
    {
      id: 'af-1',
      ask: 'What is one fifth plus two fifths? Give the top number.',
      kind: 'numeric',
      answer: '3',
      accept: ['three', '3/5', 'three fifths'],
      teach: 'Bottoms already match, so add the tops. '
        + 'The bottom stays 5.',
      level: 3,
    },
    {
      id: 'af-2',
      ask: 'What is a half plus a quarter?',
      kind: 'choice',
      options: ['Two sixths', 'Three quarters', 'One third'],
      answer: 'Three quarters',
      teach: 'Turn the half into two quarters first. '
        + 'Then two quarters and one quarter is three quarters.',
      level: 4,
    },
    {
      id: 'af-3',
      ask: 'Why can you not add a half and a quarter as they stand?',
      kind: 'choice',
      options: [
        'The pieces are different sizes',
        'The numbers are too small',
        'You can, the answer is two sixths',
      ],
      answer: 'The pieces are different sizes',
      teach: 'Counting different sized pieces together gives a number that '
        + 'means nothing. Match the bottoms first.',
      level: 4,
    },
  ],
})

/* ── decimals ─────────────────────────────────────────────────────────────── */

teach({
  topicId: 'decimals',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A decimal point separates whole numbers from parts of one. '
      + 'The first place after it is tenths, the next is hundredths. '
      + '0.5 is a half, and it is also 50%.',
    method: [
      'Read the whole number, then the point, then each digit in turn.',
      'To compare, line up the points and compare place by place.',
      'Remember 0.5 is a half, 0.25 a quarter, 0.1 a tenth.',
    ],
  },

  idea:
    'A decimal shows parts of a whole using the same place system as '
    + 'ordinary numbers. '
    + 'The first place after the point is tenths, the second hundredths. '
    + 'So 0.5 is five tenths, which is a half. '
    + 'The same amount can be written as a fraction, a decimal or a percentage.',

  mechanism:
    'The places keep halving in value the way they keep multiplying going '
    + 'left. '
    + 'Each step right is worth one tenth of the step before. '
    + 'That is why comparing decimals works by place and not by length. '
    + '0.5 is bigger than 0.45, even though 45 looks bigger than 5, '
    + 'because the 5 is five tenths and the 4 is only four tenths. '
    + 'You compare the first place first, exactly as with whole numbers, '
    + 'and the number of digits afterwards is irrelevant.',

  recap:
    'You know that each place in a number has a value, '
    + 'and you know that a half can be written as one over two. '
    + 'Decimals join those two ideas.',

  method: [
    'Read the whole part, then say "point", then each digit separately.',
    '3.45 is three point four five, not three point forty five.',
    'To compare, write the numbers with their points lined up.',
    'Compare the tenths first, then the hundredths.',
    'Pad with noughts if it helps: 0.5 becomes 0.50.',
    'Learn the common ones by heart. They save working anything out.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is 0.5 as a fraction?',
      steps: [
        'The first place after the point is tenths.',
        'So 0.5 is five tenths.',
        'Five tenths simplifies to one half.',
      ],
      answer: 'One half.',
    },
    {
      level: 4,
      ask: 'Which is bigger, 0.5 or 0.45?',
      steps: [
        'Line up the points and pad: 0.50 and 0.45.',
        'Compare the tenths: 5 against 4.',
      ],
      answer: '0.5 is bigger, even though 45 looks like a larger number.',
    },
    {
      level: 5,
      ask: 'Write three quarters as a decimal and as a percentage.',
      steps: [
        'Three quarters is 75 out of 100.',
        '75 hundredths is 0.75.',
        'Out of a hundred is what percentage means.',
      ],
      answer: '0.75, and 75%.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking more digits means a bigger number.',
      why: '0.45 has more digits than 0.5 and is smaller. '
        + 'Compare place by place from the left.',
    },
    {
      mistake: 'Reading 3.45 as three point forty five.',
      why: 'Say the digits separately: three point four five. '
        + 'Reading them as a whole number hides what the places mean.',
    },
    {
      mistake: 'Lining up the right hand ends when adding.',
      why: 'Line up the decimal points, not the ends. '
        + 'That is what keeps tenths above tenths.',
    },
  ],

  extension:
    'Money is decimals you already use. '
    + '2 cedis 50 pesewas is 2.50, and the two places after the point '
    + 'are there because there are 100 pesewas in a cedi. '
    + 'Every rule here you have been applying at the market for years.',

  figure: {
    alt: 'A number line from 0 to 1 marked in tenths. 0.45 is marked in red '
      + 'just before the fifth tick and 0.5 is marked in green on it, so '
      + '0.5 sits further to the right. Under it says compare the tenths '
      + 'first: four tenths is less than five tenths.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="50" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">which is bigger, 0.45 or '
      + '0.5</text>'
      + '<line x1="50" y1="208" x2="590" y2="208" stroke-width="4"/>'
      + '<line x1="50" y1="196" x2="50" y2="220"/>'
      + '<line x1="104" y1="196" x2="104" y2="220"/>'
      + '<line x1="158" y1="196" x2="158" y2="220"/>'
      + '<line x1="212" y1="196" x2="212" y2="220"/>'
      + '<line x1="266" y1="196" x2="266" y2="220"/>'
      + '<line x1="320" y1="196" x2="320" y2="220"/>'
      + '<line x1="374" y1="196" x2="374" y2="220"/>'
      + '<line x1="428" y1="196" x2="428" y2="220"/>'
      + '<line x1="482" y1="196" x2="482" y2="220"/>'
      + '<line x1="536" y1="196" x2="536" y2="220"/>'
      + '<line x1="590" y1="196" x2="590" y2="220"/>'
      + '<text x="50" y="256" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">0</text>'
      + '<text x="590" y="256" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">1</text>'
      + '<text x="320" y="256" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">0.5</text>'
      + '<circle cx="293" cy="208" r="11" stroke="#c8433a" stroke-width="3" '
      + 'fill="#c8433a"/>'
      + '<text x="250" y="160" font-size="20" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">0.45</text>'
      + '<circle cx="320" cy="208" r="11" stroke="#0f8a4d" stroke-width="3" '
      + 'fill="#0f8a4d"/>'
      + '<text x="372" y="160" font-size="20" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">0.5</text>'
      + '<text x="320" y="332" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">four tenths is less than five '
      + 'tenths</text>'
      + '<text x="320" y="366" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">so the digits after it cannot '
      + 'rescue it</text></svg>',
  },
  tables: [{
    caption: 'The same amount written as a fraction, a decimal and a '
      + 'percentage',
    columns: ['Fraction', 'Decimal', 'Percentage'],
    rows: [
      ['One tenth', '0.1', '10 per cent'],
      ['One quarter', '0.25', '25 per cent'],
      ['One half', '0.5', '50 per cent'],
      ['Three quarters', '0.75', '75 per cent'],
    ],
    note: 'These four are worth knowing by heart, because they turn up '
      + 'constantly and save working anything out.',
  }],
  questions: [
    {
      id: 'dc-1',
      ask: 'What fraction is 0.5?',
      kind: 'choice',
      options: ['A half', 'A fifth', 'A quarter'],
      answer: 'A half',
      teach: 'Five tenths, which simplifies to one half.',
      level: 3,
    },
    {
      id: 'dc-2',
      ask: 'Which is bigger, 0.5 or 0.45?',
      kind: 'choice',
      options: ['0.5', '0.45'],
      answer: '0.5',
      teach: 'Compare tenths first: 5 beats 4. '
        + 'Extra digits do not make a decimal larger.',
      level: 4,
    },
    {
      id: 'dc-3',
      ask: 'What is 0.75 as a percentage?',
      kind: 'numeric',
      answer: '75',
      accept: ['75%', 'seventy five'],
      teach: '0.75 is 75 hundredths, and per cent means out of a hundred.',
      level: 5,
    },
  ],
})

/* ── the missing number ───────────────────────────────────────────────────── */

teach({
  topicId: 'missing-number',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'To find a missing number, undo what was done to it. '
      + 'Adding is undone by subtracting. '
      + 'Multiplying is undone by dividing.',
    method: [
      'Find the box and see what was done to it.',
      'Do the opposite to the other side.',
      'Check by putting your answer back in.',
    ],
  },

  idea:
    'A number sentence with a gap, like 7 plus something equals 12, '
    + 'is asking what belongs in the gap. '
    + 'You find it by undoing. '
    + '12 take away 7 is 5, so the missing number is 5.',

  mechanism:
    'Every operation has an opposite that cancels it, '
    + 'so if something was added to the box, you subtract to get the box '
    + 'alone. '
    + 'This is exactly what algebra does later with letters instead of boxes, '
    + 'which is why it is worth doing properly now: '
    + 'the habit of asking "what was done to it, and what undoes that" '
    + 'is the whole method, and it never changes.',

  recap:
    'You know that adding undoes subtracting, '
    + 'because you have been using it to check your answers. '
    + 'Here it does the work rather than the checking.',

  method: [
    'Find the gap.',
    'Ask what has been done to it: added, subtracted, multiplied, divided.',
    'Do the opposite to the number on the other side.',
    'That gives you the missing number.',
    'Put your answer into the original sentence and check it is true.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Find the missing number: 7 plus ? equals 12.',
      steps: [
        'Something was added to 7.',
        'The opposite of adding is subtracting.',
        '12 take away 7.',
      ],
      answer: '5. Check: 7 and 5 is 12.',
    },
    {
      level: 4,
      ask: 'Find the missing number: ? times 4 equals 36.',
      steps: [
        'The box was multiplied by 4.',
        'The opposite is dividing by 4.',
        '36 divided by 4.',
      ],
      answer: '9. Check: 9 times 4 is 36.',
    },
    {
      level: 5,
      ask: 'Find the missing number: 20 take away ? equals 8.',
      steps: [
        'Be careful: the box is what was taken away.',
        'If 20 take away the box leaves 8, the box is the part removed.',
        'So the box is 20 take away 8.',
      ],
      answer: '12. Check: 20 take away 12 is 8.',
    },
  ],

  traps: [
    {
      mistake: 'Guessing numbers until one works.',
      why: 'It works for small numbers and fails for large ones. '
        + 'Undoing always works.',
    },
    {
      mistake: 'Subtracting the wrong way round.',
      why: 'For 20 minus box equals 8, the answer is 20 take away 8, not '
        + '8 take away 20. '
        + 'Think about what the box is in the story.',
    },
    {
      mistake: 'Not checking.',
      why: 'Putting the answer back in takes five seconds '
        + 'and catches almost every error.',
    },
  ],

  extension:
    'Replace the box with a letter and you have algebra. '
    + '7 plus x equals 12 is the same question written the way you will see '
    + 'it in JHS. '
    + 'Nothing about the method changes, only the symbol in the gap.',

  figure: {
    alt: 'The number sentence 7 plus a box equals 12, with a green arrow '
      + 'beneath it showing the undoing: 12 take away 7 is 5. The box is '
      + 'then filled in with 5 and the sentence is checked.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="52" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">what was done to it, and what '
      + 'undoes that</text>'
      + '<text x="110" y="160" font-size="44" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">7</text>'
      + '<text x="190" y="160" font-size="40" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">plus</text>'
      + '<polygon points="255,112 315,112 315,172 255,172" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="400" y="160" font-size="36" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">equals</text>'
      + '<text x="530" y="160" font-size="44" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">12</text>'
      + '<line x1="530" y1="186" x2="530" y2="230" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<line x1="285" y1="230" x2="530" y2="230" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<line x1="285" y1="230" x2="285" y2="248" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<polyline points="275,234 285,254 295,234" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<text x="410" y="288" font-size="21" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">take the 7 away from the 12</text>'
      + '<text x="320" y="344" font-size="36" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">12 take away 7 is 5</text>'
      + '<text x="320" y="384" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">so the box is 5, and 7 plus 5 is '
      + '12</text></svg>',
  },
  tables: [{
    caption: 'Each operation, and the one that undoes it',
    columns: ['If this was done to the gap', 'Do this to the other side'],
    rows: [
      ['Something was added', 'Subtract it'],
      ['Something was subtracted', 'Add it'],
      ['It was multiplied', 'Divide'],
      ['It was divided', 'Multiply'],
    ],
    note: 'This is exactly what algebra does later with letters instead of '
      + 'boxes, which is why the habit is worth forming now.',
  }],
  questions: [
    {
      id: 'mn-1',
      ask: '7 plus ? equals 12. What is the missing number?',
      kind: 'numeric',
      answer: '5',
      accept: ['five'],
      teach: 'Undo the adding by subtracting: 12 take away 7.',
      level: 3,
    },
    {
      id: 'mn-2',
      ask: '? times 4 equals 36. What is the missing number?',
      kind: 'numeric',
      answer: '9',
      accept: ['nine'],
      teach: 'Undo multiplying by dividing: 36 divided by 4.',
      level: 4,
    },
    {
      id: 'mn-3',
      ask: '20 take away ? equals 8. What is the missing number?',
      kind: 'numeric',
      answer: '12',
      accept: ['twelve'],
      teach: 'The box is the part removed, so it is 20 take away 8. '
        + 'Check: 20 take away 12 is 8.',
      level: 5,
    },
  ],
})

/* ── angles ───────────────────────────────────────────────────────────────── */

teach({
  topicId: 'angles-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An angle measures turn. A right angle is 90 degrees, a square corner. '
      + 'Less than that is acute. More is obtuse.',
    method: [
      'Compare the angle with a square corner.',
      'Smaller is acute, larger is obtuse, exactly equal is a right angle.',
      'To measure, put the protractor centre on the point and read the scale.',
    ],
  },

  idea:
    'An angle measures how much something has turned. '
    + 'You name one by comparing its opening with a square corner, '
    + 'such as the corner of a book or a door frame.',

  mechanism:
    'The thing to understand is that an angle is about turn, not about '
    + 'length. '
    + 'Two lines drawn long and two drawn short can make exactly the same '
    + 'angle. '
    + 'Learners often judge by how far apart the ends are, '
    + 'which gives the wrong answer as soon as the lines differ in length. '
    + 'Look at the opening at the point, not at the gap at the far end.',

  recap:
    'You can name shapes by their sides and corners. '
    + 'An angle is what is happening at a corner, measured.',

  method: [
    'Find the point where the two lines meet.',
    'Compare the opening with a square corner, such as a book corner.',
    'Smaller means acute, larger means obtuse, the same means a right angle.',
    'To measure, place the protractor centre exactly on the point.',
    'Line one arm up with the nought line.',
    'Read where the other arm crosses the scale.',
    'Check your reading against your estimate. They should agree roughly.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What kind of angle is the corner of a page?',
      steps: [
        'It is a square corner.',
      ],
      answer: 'A right angle, 90 degrees.',
    },
    {
      level: 4,
      ask: 'An angle measures 130 degrees. What kind is it?',
      steps: [
        'It is more than 90.',
        'It is less than 180, which would be a straight line.',
      ],
      answer: 'Obtuse.',
    },
    {
      level: 5,
      ask: 'Two angles look different because one has much longer arms. '
        + 'Are they different angles?',
      steps: [
        'An angle measures turn at the point.',
        'Arm length is not part of it.',
        'Measure both with a protractor.',
      ],
      answer: 'Not necessarily. '
        + 'Long arms make the ends further apart without changing the turn.',
    },
  ],

  traps: [
    {
      mistake: 'Judging an angle by how long the arms are.',
      why: 'Length has nothing to do with it. '
        + 'The turn at the point is the angle.',
    },
    {
      mistake: 'Reading the wrong scale on the protractor.',
      why: 'There are two sets of numbers. '
        + 'Check your answer against your estimate: '
        + 'if you thought it was acute, it cannot be 140.',
    },
    {
      mistake: 'Not putting the protractor centre on the point.',
      why: 'Everything is measured from that point. '
        + 'A protractor slightly off gives a reading that is confidently wrong.',
    },
  ],

  extension:
    'Angles on a straight line add to 180 degrees, '
    + 'and angles all the way round a point add to 360. '
    + 'Those two facts let you work out an angle you cannot reach to measure, '
    + 'which is how surveyors and builders use them.',

  figure: {
    alt: 'Two angles with exactly the same opening, one drawn with short '
      + 'arms and one with long arms. Both are marked as the same angle in '
      + 'green. A red dotted line joins the far ends of each pair of arms, '
      + 'with a note that these far gaps differ while the angle does not.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="48" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the same angle, drawn two '
      + 'ways</text><line x1="80" y1="300" x2="200" y2="300"/>'
      + '<line x1="80" y1="300" x2="184" y2="240"/>'
      + '<path d="M 116 300 A 36 36 0 0 0 111 282" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="140" y="346" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">short arms</text>'
      + '<line x1="330" y1="300" x2="600" y2="300"/>'
      + '<line x1="330" y1="300" x2="564" y2="165"/>'
      + '<path d="M 366 300 A 36 36 0 0 0 361 282" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="450" y="346" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">long arms</text>'
      + '<text x="320" y="382" font-size="22" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">the opening at the point is the '
      + 'angle</text>'
      + '<line x1="184" y1="240" x2="200" y2="300" stroke="#c8433a" '
      + 'stroke-width="3" stroke-dasharray="7 7"/>'
      + '<line x1="564" y1="165" x2="600" y2="300" stroke="#c8433a" '
      + 'stroke-width="3" stroke-dasharray="7 7"/>'
      + '<text x="620" y="124" font-size="17" text-anchor="end" '
      + 'fill="#c8433a" stroke="none">these far gaps differ,</text>'
      + '<text x="620" y="148" font-size="17" text-anchor="end" '
      + 'fill="#c8433a" stroke="none">the angle does not</text></svg>',
  },
  tables: [{
    caption: 'Naming an angle by comparing it with a square corner',
    columns: ['The opening', 'Its name', 'In degrees'],
    rows: [
      ['Smaller than a square corner', 'Acute', 'Less than 90'],
      ['Exactly a square corner', 'Right angle', '90'],
      [
        'Bigger, but less than a straight line',
        'Obtuse',
        'More than 90 and less than 180',
      ],
    ],
    note: 'The corner of a book or a door frame is a square corner, so you '
      + 'can carry one about with you.',
  }],
  questions: [
    {
      id: 'an-1',
      ask: 'How many degrees in a right angle?',
      kind: 'numeric',
      answer: '90',
      accept: ['ninety'],
      teach: 'A square corner is 90 degrees. '
        + 'Everything else is measured against it.',
      level: 3,
    },
    {
      id: 'an-2',
      ask: 'An angle of 130 degrees is:',
      kind: 'choice',
      options: ['Acute', 'Obtuse', 'A right angle'],
      answer: 'Obtuse',
      teach: 'More than 90 and less than 180 makes it obtuse.',
      level: 4,
    },
    {
      id: 'an-3',
      ask: 'Does making the arms of an angle longer change the angle?',
      kind: 'choice',
      options: ['Yes', 'No'],
      answer: 'No',
      teach: 'An angle measures the turn at the point. '
        + 'Arm length only changes how far apart the ends look.',
      level: 5,
    },
  ],
})

/* ── perimeter and area ───────────────────────────────────────────────────── */

teach({
  topicId: 'perimeter-area',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Perimeter is the distance all the way round. '
      + 'Area is how much surface is inside. '
      + 'For a rectangle, perimeter is all four sides added, area is length '
      + 'times width.',
    method: [
      'Perimeter: add all the sides.',
      'Area: multiply length by width.',
      'Perimeter is in metres, area in square metres.',
    ],
  },

  idea:
    'Perimeter is the distance round the edge of a shape. '
    + 'Area is the amount of surface inside it. '
    + 'They are different kinds of thing, '
    + 'which is why they are measured in different units '
    + 'and why knowing one tells you very little about the other.',

  mechanism:
    'Perimeter is a length and area is a covering, '
    + 'which is why one is counted in metres and the other in squares. '
    + 'You can see the difference by asking what each is for: '
    + 'fence is sold by length and tiles cover surface. '
    + 'The most useful thing to know is that they do not move together: '
    + 'two fields with the same perimeter can have very different areas.',

  recap:
    'You can measure in metres and centimetres, '
    + 'and you can multiply two numbers. '
    + 'That is everything this needs.',

  method: [
    'For perimeter, add the lengths of all the sides.',
    'For a rectangle you can add length and width, then double it.',
    'For area of a rectangle, multiply length by width.',
    'Write the units: metres for perimeter, square metres for area.',
    'Ask which the question needs: going round, or covering.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A rectangle is 5 m by 3 m. What is its perimeter?',
      steps: [
        'The sides are 5, 3, 5 and 3.',
        'Add them: 5 and 3 is 8, doubled is 16.',
      ],
      answer: '16 metres.',
    },
    {
      level: 4,
      ask: 'What is the area of that rectangle?',
      steps: [
        'Area of a rectangle is length times width.',
        '5 times 3.',
      ],
      answer: '15 square metres.',
    },
    {
      level: 5,
      ask: 'One field is 8 m by 2 m. Another is 5 m by 5 m. '
        + 'Compare their perimeters and areas.',
      steps: [
        'First perimeter: 8 and 2 is 10, doubled is 20.',
        'Second perimeter: 5 and 5 is 10, doubled is 20. The same.',
        'First area: 8 times 2 is 16.',
        'Second area: 5 times 5 is 25.',
      ],
      answer: 'Same perimeter, different area. '
        + 'The square one holds nine square metres more.',
    },
  ],

  traps: [
    {
      mistake: 'Using the same unit for both.',
      why: 'Perimeter is metres, area is square metres. '
        + 'The unit tells the reader which you measured.',
    },
    {
      mistake: 'Assuming a bigger perimeter means a bigger area.',
      why: 'An 8 by 2 field and a 5 by 5 field have the same perimeter '
        + 'and very different areas.',
    },
    {
      mistake: 'Multiplying all four sides for area.',
      why: 'Area is length times width, two numbers. '
        + 'Multiplying four gives something that means nothing.',
    },
  ],

  extension:
    'Of all rectangles with a given perimeter, the square has the largest '
    + 'area. '
    + 'A farmer with a fixed length of fencing gets the most land by making '
    + 'the field square, '
    + 'which is a piece of mathematics with an immediate use.',

  figure: {
    alt: 'Two rectangles tiled into unit squares. The first is five by three '
      + 'and holds fifteen squares. The second is seven by one and holds '
      + 'seven. Both have their edges traced in green and both edges '
      + 'measure sixteen, so the same perimeter goes with very different '
      + 'areas.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the same perimeter, different '
      + 'areas</text>'
      + '<polygon points="60,100 100,100 100,140 60,140" stroke-width="2"/>'
      + '<polygon points="60,140 100,140 100,180 60,180" stroke-width="2"/>'
      + '<polygon points="60,180 100,180 100,220 60,220" stroke-width="2"/>'
      + '<polygon points="100,100 140,100 140,140 100,140" '
      + 'stroke-width="2"/>'
      + '<polygon points="100,140 140,140 140,180 100,180" '
      + 'stroke-width="2"/>'
      + '<polygon points="100,180 140,180 140,220 100,220" '
      + 'stroke-width="2"/>'
      + '<polygon points="140,100 180,100 180,140 140,140" '
      + 'stroke-width="2"/>'
      + '<polygon points="140,140 180,140 180,180 140,180" '
      + 'stroke-width="2"/>'
      + '<polygon points="140,180 180,180 180,220 140,220" '
      + 'stroke-width="2"/>'
      + '<polygon points="180,100 220,100 220,140 180,140" '
      + 'stroke-width="2"/>'
      + '<polygon points="180,140 220,140 220,180 180,180" '
      + 'stroke-width="2"/>'
      + '<polygon points="180,180 220,180 220,220 180,220" '
      + 'stroke-width="2"/>'
      + '<polygon points="220,100 260,100 260,140 220,140" '
      + 'stroke-width="2"/>'
      + '<polygon points="220,140 260,140 260,180 220,180" '
      + 'stroke-width="2"/>'
      + '<polygon points="220,180 260,180 260,220 220,220" '
      + 'stroke-width="2"/>'
      + '<polygon points="60,100 260,100 260,220 60,220" stroke="#0f8a4d" '
      + 'stroke-width="5"/>'
      + '<text x="160" y="252" font-size="20" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">edge: 16 metres</text>'
      + '<text x="160" y="282" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">inside: 15 squares</text>'
      + '<polygon points="340,140 380,140 380,180 340,180" '
      + 'stroke-width="2"/>'
      + '<polygon points="380,140 420,140 420,180 380,180" '
      + 'stroke-width="2"/>'
      + '<polygon points="420,140 460,140 460,180 420,180" '
      + 'stroke-width="2"/>'
      + '<polygon points="460,140 500,140 500,180 460,180" '
      + 'stroke-width="2"/>'
      + '<polygon points="500,140 540,140 540,180 500,180" '
      + 'stroke-width="2"/>'
      + '<polygon points="540,140 580,140 580,180 540,180" '
      + 'stroke-width="2"/>'
      + '<polygon points="580,140 620,140 620,180 580,180" '
      + 'stroke-width="2"/>'
      + '<polygon points="340,140 620,140 620,180 340,180" stroke="#0f8a4d" '
      + 'stroke-width="5"/>'
      + '<text x="480" y="252" font-size="20" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">edge: 16 metres</text>'
      + '<text x="480" y="282" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">inside: 7 squares</text>'
      + '<text x="320" y="350" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">fencing needs the edge, tiling '
      + 'needs the inside</text></svg>',
  },
  tables: [{
    caption: 'How perimeter and area differ',
    columns: ['Question', 'Perimeter', 'Area'],
    rows: [
      ['What it is', 'The distance round the edge', 'The surface inside'],
      ['What it is measured in', 'Metres', 'Square metres'],
      ['What you need it for', 'Fencing a field', 'Laying tiles'],
      ['For a 5 metre by 3 metre rectangle', '16 metres', '15 square metres'],
    ],
    note: 'They do not move together. Two fields with the same perimeter can '
      + 'have very different areas.',
  }],
  questions: [
    {
      id: 'pa-1',
      ask: 'A rectangle is 5 m by 3 m. What is its perimeter in metres?',
      kind: 'numeric',
      answer: '16',
      accept: ['sixteen'],
      teach: 'Add length and width, which is 8, then double it.',
      level: 3,
    },
    {
      id: 'pa-2',
      ask: 'What is the area of a 5 m by 3 m rectangle, in square metres?',
      kind: 'numeric',
      answer: '15',
      accept: ['fifteen'],
      teach: 'Length times width. '
        + 'The unit is square metres because area covers surface.',
      level: 4,
    },
    {
      id: 'pa-3',
      ask: 'Two fields have the same perimeter. Must they have the same area?',
      kind: 'choice',
      options: ['Yes', 'No'],
      answer: 'No',
      teach: '8 by 2 and 5 by 5 both have a perimeter of 20, '
        + 'and areas of 16 and 25.',
      level: 5,
    },
  ],
})
