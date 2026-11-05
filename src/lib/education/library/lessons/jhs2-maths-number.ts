/**
 * Stored lessons for JHS 2 Mathematics: number, and handling data.
 *
 * Written at about grade 7, with a `brief` form on every topic.
 *
 * ── What these eight topics have in common ─────────────────────────────────
 *
 * Every one of them is a shorthand. Indices are shorthand for repeated
 * multiplication, standard form is shorthand for a number with too many
 * zeros, a base is shorthand for how many you bundle by, a percentage is
 * shorthand for a fraction of a hundred, a ratio is shorthand for a share,
 * an nth term is shorthand for a whole sequence, and an average is shorthand
 * for a list.
 *
 * So each lesson is written to expand the shorthand once, properly, and then
 * use it. A learner who has seen 2^5 written out as 2x2x2x2x2 even one time
 * does not need to memorise the laws of indices, because they can rebuild
 * any of them in ten seconds. That is the whole method here.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── indices ─────────────────────────────────────────────────────────────── */

teach({
  topicId: 'indices-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An index says how many times the base is multiplied by itself. '
      + 'Multiplying adds the indices. '
      + 'Dividing subtracts them. '
      + 'A power of a power multiplies them. '
      + 'Anything to the power 0 is 1, '
      + 'and a negative index means one over the positive one.',
    method: [
      'Check the bases are the same before using any law.',
      'Multiply means add the indices; divide means subtract.',
      'If you forget a law, write the powers out in full.',
    ],
  },

  why:
    'Kofi hears a piece of news and tells 2 friends. '
    + 'Each of those 2 tells 2 more, so 4 people hear it next. '
    + 'Each of those 4 tells 2 more, so 8 hear it. '
    + 'Writing out $2 \\times 2 \\times 2$ is easy enough for three rounds. '
    + 'Now answer this: how many people have heard it after twenty rounds, '
    + 'and how do you write that down '
    + 'without filling a whole page with twos? '
    + 'There is a short way of writing a long multiplication, '
    + 'and this topic is the rules for working with it.',

  notation:
    'In $2^5$, the 2 sits on the line '
    + 'and the 5 sits raised up beside it. '
    + 'It is said "two to the power five", or "two to the fifth". '
    + 'The 2 is called the base and the 5 is called the index. '
    + 'The index is also called the power, or the exponent. '
    + 'The raised position carries the whole meaning, '
    + 'so writing the 5 flat beside the 2 gives twenty five, '
    + 'which is the commonest way to lose a mark.',

  idea:
    'In $2^5$, the 2 is the base and the 5 is the index. '
    + 'It means 2 multiplied by itself 5 times. '
    + 'There are five laws, and not one of them has to be memorised: '
    + 'each appears by itself as soon as you write the powers out in '
    + 'full.',

  mechanism:
    'There is nothing to memorise here, '
    + 'and the learners who memorise are the ones who get it wrong. '
    + 'Write the powers out and every law appears by itself. '
    + '$2^3 \\times 2^4$ is $(2 \\times 2 \\times 2) \\times (2 \\times 2 \\times 2 \\times 2)$. '
    + 'Count the twos: there are seven. '
    + 'So you added the indices, and you did not have to be told to. '
    + 'Division is the same picture with cancelling. '
    + '$\\frac{2^5}{2^2}$ is $\\frac{2 \\times 2 \\times 2 \\times 2 \\times 2}{2 \\times 2}$, '
    + 'two cancel from each, and three are left. '
    + 'The two that confuse people are the ones you cannot write out, '
    + 'and both follow from division. '
    + 'Take $\\frac{2^3}{2^3}$. '
    + 'That is $\\frac{8}{8}$, which is 1. '
    + 'But by the subtraction rule it is $2^0$. '
    + 'So $2^0$ has to be 1, '
    + 'or arithmetic would contradict itself. '
    + 'Now take $\\frac{2^2}{2^5}$. '
    + 'Cancelling leaves $\\frac{1}{2^3}$. '
    + 'By the rule it is $2^{-3}$. '
    + 'So a negative index must mean one over the positive one. '
    + 'Neither is a convention somebody chose. '
    + 'Both are forced.',

  recap:
    'Multiplying a number by itself has a short name. '
    + '$3 \\times 3$ is called $3^2$, and it comes to 9. '
    + '$3 \\times 3 \\times 3$ is called $3^3$, and it comes to 27. '
    + 'The small raised number counts how many threes are being multiplied, '
    + 'and that small raised number is called the index. '
    + 'The number being multiplied, the 3 here, is called the base. '
    + 'This topic takes that small raised number '
    + 'and gives the rules for working with it.',

  method: [
    'Write the base and the index separately in your head.',
    'Check the bases match. The laws only work on one base.',
    'Multiplying: add the indices.',
    'Dividing: subtract the bottom index from the top.',
    'A power of a power: multiply the indices.',
    'Index 0 gives 1.',
    'A negative index: make it positive and put it under 1.',
    'If unsure, write the multiplication out in full and count.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Simplify $3^4 \\times 3^2$.',
      steps: [
        'Same base, and it is a multiplication.',
        'So add the indices: $4 + 2 = 6$.',
      ],
      answer: '$3^6$, which is 729.',
    },
    {
      level: 4,
      ask: 'Simplify $5^7 \\div 5^7$.',
      steps: [
        'Division, so subtract: $7 - 7 = 0$.',
        'So the answer is $5^0$.',
        'But anything divided by itself is 1.',
      ],
      answer: '1. This is why any number to the power 0 is 1.',
    },
    {
      level: 5,
      ask: 'Evaluate $2^{-4}$.',
      steps: [
        'A negative index means the reciprocal.',
        'Make the index positive: $2^4$ is 16.',
        'Put it under 1.',
      ],
      answer: '$\\frac{1}{16}$.',
    },
  ],

  traps: [
    {
      mistake: 'Adding the indices when the bases are different.',
      why: '2 cubed times 3 cubed is not 6 cubed or 2 to the sixth. '
        + 'The laws need one base.',
    },
    {
      mistake: 'Thinking a power of 0 gives 0.',
      why: 'It gives 1, because any number divided by itself is 1 '
        + 'and that is where the rule comes from.',
    },
    {
      mistake: 'Thinking a negative index gives a negative answer.',
      why: 'It gives a fraction. '
        + '2 to the power negative 3 is one eighth, not negative 8.',
    },
    {
      mistake: 'Multiplying the base by the index.',
      why: '2 cubed is 8, not 6. '
        + 'The index counts how many times, it is not a multiplier.',
    },
  ],

  extension:
    'A fractional index is a root. '
    + '$9^{\\frac{1}{2}}$ is 3, '
    + 'because the half index, used twice, must give 9 by the power of a '
    + 'power rule. '
    + 'The same reasoning that forced the 0 and negative cases forces this '
    + 'one.',

  figure: {
    alt: 'Two cubed times 2 to the fourth, written out in full as a '
      + 'bracket of three twos times a bracket of four twos. Counting '
      + 'them gives seven twos, which is 2 to the seventh, so the '
      + 'indices were added without anybody being told to add them.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">write the twos out and the law appears</text>'
      + '<text x="282" y="90" font-size="22" text-anchor="start" fill="currentColor" stroke="none">2</text>'
      + '<text x="298" y="76" font-size="14" text-anchor="start" fill="currentColor" stroke="none">3</text>'
      + '<text x="314" y="90" font-size="22" text-anchor="start" fill="currentColor" stroke="none">×  2</text>'
      + '<text x="358" y="76" font-size="14" text-anchor="start" fill="currentColor" stroke="none">4</text>'
      + '<line x1="320" y1="106" x2="320" y2="136"/>'
      + '<line x1="320" y1="136" x2="314.8" y2="127.4"/>'
      + '<line x1="320" y1="136" x2="325.2" y2="127.4"/>'
      + '<text x="320" y="166" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">(2 × 2 × 2) × (2 × 2 × 2 × 2)</text>'
      + '<line x1="150" y1="184" x2="490" y2="184" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="320" y="210" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">count them: seven twos</text>'
      + '<line x1="320" y1="224" x2="320" y2="252" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="320" y1="252" x2="314.8" y2="243.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="320" y1="252" x2="325.2" y2="243.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="300" y="286" font-size="24" text-anchor="start" fill="#0f8a4d" stroke="none">2</text>'
      + '<text x="318" y="268" font-size="16" text-anchor="start" fill="#0f8a4d" stroke="none">7</text>'
      + '<text x="320" y="334" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">so you added the indices, and nobody had to tell you</text>'
      + '<text x="320" y="368" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">division is the same picture, with twos cancelling</text>'
      + '<text x="320" y="394" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">and the index 0 and the negative index both follow from it</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each law of indices, and what it looks like written out in '
        + 'full',
      columns: ['The law', 'An example', 'Why it is true'],
      rows: [
        [
          'Multiplying, same base: add the indices',
          '2 cubed times 2 to the fourth is 2 to the seventh',
          'Write both out and count the twos. There are seven',
        ],
        [
          'Dividing, same base: subtract the indices',
          '2 to the fifth over 2 squared is 2 cubed',
          'Two twos cancel from each side, and three are left',
        ],
        [
          'A power of a power: multiply the indices',
          '2 cubed, all squared, is 2 to the sixth',
          'Three twos, taken twice over, is six twos',
        ],
        [
          'An index of 0: the answer is 1',
          '2 to the power 0 is 1',
          '2 cubed over 2 cubed is 8 over 8, and the rule says 2 to the 0',
        ],
        [
          'A negative index: take the reciprocal',
          '2 to the power negative 3 is one eighth',
          '2 squared over 2 to the fifth cancels to 1 over 2 cubed',
        ],
      ],
      note: 'Not one of these is a convention somebody chose. The last two '
        + 'are forced by the division rule, or arithmetic would '
        + 'contradict itself.',
    },
  ],
  questions: [
    {
      id: 'ind-1',
      ask: 'Simplify 4 squared times 4 cubed.',
      kind: 'choice',
      options: [
        '4 to the power 5',
        '4 to the power 6',
        '16 to the power 5',
      ],
      answer: '4 to the power 5',
      teach: 'Same base and multiplying, so add the indices: 2 + 3 = 5.',
      level: 3,
    },
    {
      id: 'ind-2',
      ask: 'What is 7 to the power 0?',
      kind: 'choice',
      options: ['1', '0', '7'],
      answer: '1',
      teach: '7 cubed over 7 cubed is 1, '
        + 'and by subtraction it is 7 to the power 0. So it must be 1.',
      level: 4,
    },
    {
      id: 'ind-3',
      ask: 'What is 3 to the power negative 2?',
      kind: 'choice',
      options: ['One ninth', 'Negative 9', 'Negative 6'],
      answer: 'One ninth',
      teach: 'A negative index means one over the positive power. '
        + '3 squared is 9, so the answer is one ninth.',
      level: 5,
    },
  ],
})

/* ── standard form ───────────────────────────────────────────────────────── */

teach({
  topicId: 'standard-form',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Standard form writes a number as a digit between 1 and 10, '
      + 'times a power of ten. '
      + '4300 is $4.3 \\times 10^3$. '
      + '0.0043 is $4.3 \\times 10^{-3}$. '
      + 'The power counts how far the point moved.',
    method: [
      'Put the decimal point after the first non zero digit.',
      'Count how many places you moved it.',
      'Moving left gives a positive power, moving right a negative one.',
    ],
  },

  why:
    'The road from Accra to Kumasi is about 250 000 metres long. '
    + 'One sheet of exercise book paper is about 0.0001 metres thick. '
    + 'How many sheets, piled flat on each other, '
    + 'would stand as tall as that road is long? '
    + 'The dividing is easy. '
    + 'Writing those two numbers side by side without losing a zero is not, '
    + 'and one zero out of place makes the answer ten times wrong. '
    + 'This topic is a way of writing any number '
    + 'so that the zeros count themselves.',

  notation:
    'A number in standard form is written as a front part, '
    + 'then a multiplication sign, then 10 with a small raised number. '
    + 'So $4.3 \\times 10^3$ '
    + 'is said "four point three times ten to the power three". '
    + 'The raised number is the index, or the power. '
    + 'The front part has to be 1 or more and less than 10. '
    + 'So $43 \\times 10^2$ is the right size but the wrong form, '
    + 'and that is the commonest way to lose a mark.',

  idea:
    'A number is in standard form when it is written as a number between '
    + '1 and 10, multiplied by a power of ten. '
    + 'So 4300 becomes $4.3 \\times 10^3$, '
    + 'and 0.0043 becomes $4.3 \\times 10^{-3}$. '
    + 'Multiplying and dividing two of them is two separate jobs done '
    + 'at once: one on the front parts, and one on the powers.',

  mechanism:
    'The power of ten is not a separate fact to remember. '
    + 'It is a count of how far the decimal point moved, '
    + 'and the sign says which way. '
    + 'Multiplying by ten moves the point one place right and makes the '
    + 'number bigger. '
    + 'So if you moved the point left to tidy a big number, '
    + 'you made it smaller, '
    + 'and you must multiply by a positive power of ten to put the size '
    + 'back. '
    + 'If you moved the point right to tidy a small number, '
    + 'you made it bigger, '
    + 'so the power has to be negative to bring it back down. '
    + 'That is the whole rule, and it is self checking: '
    + 'a big number always ends with a positive power '
    + 'and a number less than 1 always ends with a negative one. '
    + 'If your answer has a big number and a negative power, '
    + 'you went the wrong way, and you can see it without redoing the '
    + 'question. '
    + 'Why anybody bothers is worth saying too. '
    + 'The mass of an electron and the distance to the sun cannot be '
    + 'written out and compared by eye. '
    + 'In standard form the power alone tells you the size, '
    + 'so comparing two numbers becomes comparing two small whole numbers.',

  recap:
    'Multiplying by 10 makes a number ten times bigger, '
    + 'and the digits slide one place to the left of the point. '
    + 'So $4.3 \\times 10 = 43$, and $4.3 \\times 100 = 430$. '
    + 'Dividing does the reverse, so $4.3 \\div 10 = 0.43$. '
    + 'Powers of ten have a short way of being written. '
    + '$10 \\times 10 \\times 10 = 1000$, and that is written $10^3$, '
    + 'where the 3 counts how many tens are multiplied. '
    + 'Standard form is that sliding of the point, written down as a power.',

  method: [
    'Place the decimal point just after the first non zero digit.',
    'Count the places you moved it.',
    'If you moved left, the power is positive.',
    'If you moved right, the power is negative.',
    'Check: a number over 10 has a positive power, under 1 a negative one.',
    'To multiply: multiply the fronts, add the powers.',
    'To divide: divide the fronts, subtract the powers.',
    'If the front is 10 or more, move the point once more and add 1 to the '
      + 'power.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Write 52 000 in standard form.',
      steps: [
        'Put the point after the 5: 5.2',
        'Count the places moved: 5.2 to 52000 is four places.',
        'The number is big, so the power is positive.',
      ],
      answer: '$5.2 \\times 10^4$.',
    },
    {
      level: 4,
      ask: 'Write 0.00067 in standard form.',
      steps: [
        'First non zero digit is 6, so 6.7',
        'The point moved right four places.',
        'The number is less than 1, so the power is negative.',
      ],
      answer: '$6.7 \\times 10^{-4}$.',
    },
    {
      level: 5,
      ask: 'Work out $(4 \\times 10^5) \\times (6 \\times 10^3)$, '
        + 'in standard form.',
      steps: [
        'Multiply the fronts: $4 \\times 6 = 24$.',
        'Add the powers: $5 + 3 = 8$.',
        'So $24 \\times 10^8$, but 24 is not between 1 and 10.',
        'Move the point: 2.4, and add 1 to the power.',
      ],
      answer: '$2.4 \\times 10^9$.',
    },
  ],

  traps: [
    {
      mistake: 'Leaving the front part as 24 or as 0.5.',
      why: 'It must be between 1 and 10. '
        + 'Move the point once more and adjust the power.',
    },
    {
      mistake: 'Getting the sign of the power backwards.',
      why: 'Check the size. '
        + 'A big number cannot have a negative power.',
    },
    {
      mistake: 'Counting the zeros instead of the places moved.',
      why: 'They are often the same and sometimes not. '
        + '0.0043 has three zeros and the power is negative 3, '
        + 'but 4300 has two zeros and the power is 3.',
    },
    {
      mistake: 'Multiplying the powers when multiplying the numbers.',
      why: 'Powers of the same base add when multiplied. '
        + 'That is the index law, unchanged.',
    },
  ],

  extension:
    'Scientists use standard form to compare orders of magnitude. '
    + 'If one quantity is $10^6$ and another is $10^9$, '
    + 'the second is a thousand times the first, '
    + 'which you read off the powers without doing any arithmetic.',

  figure: {
    alt: 'Three times ten to the fourth multiplied by four times ten '
      + 'cubed. The front parts give 3 times 4, which is 12, and the '
      + 'powers give 4 plus 3, which is 7. That makes 12 times ten to '
      + 'the seventh, which is not standard form because 12 is not '
      + 'between 1 and 10, so the point moves one place left to give '
      + '1.2 times ten to the eighth.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">front parts multiply, powers add</text>'
      + '<text x="130" y="92" font-size="20" text-anchor="start" fill="currentColor" stroke="none">3 × 10</text>'
      + '<text x="196" y="78" font-size="14" text-anchor="start" fill="currentColor" stroke="none">4</text>'
      + '<text x="300" y="92" font-size="20" text-anchor="start" fill="currentColor" stroke="none">×</text>'
      + '<text x="360" y="92" font-size="20" text-anchor="start" fill="currentColor" stroke="none">4 × 10</text>'
      + '<text x="426" y="78" font-size="14" text-anchor="start" fill="currentColor" stroke="none">3</text>'
      + '<line x1="140" y1="110" x2="200" y2="110" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="370" y1="110" x2="430" y2="110" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="255" y="134" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">3 times 4 is 12</text>'
      + '<line x1="206" y1="72" x2="300" y2="60"/>'
      + '<line x1="432" y1="72" x2="350" y2="60"/>'
      + '<text x="325" y="52" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">4 plus 3 is 7</text>'
      + '<line x1="320" y1="160" x2="320" y2="192"/>'
      + '<line x1="320" y1="192" x2="314.8" y2="183.4"/>'
      + '<line x1="320" y1="192" x2="325.2" y2="183.4"/>'
      + '<text x="320" y="224" font-size="22" text-anchor="middle" fill="#c8433a" stroke="none">12 × 10</text>'
      + '<text x="378" y="210" font-size="14" text-anchor="start" fill="#c8433a" stroke="none">7</text>'
      + '<text x="320" y="254" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">not standard form: 12 is not between 1 and 10</text>'
      + '<line x1="320" y1="270" x2="320" y2="300" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="320" y1="300" x2="314.8" y2="291.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="320" y1="300" x2="325.2" y2="291.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="320" y="334" font-size="22" text-anchor="middle" fill="#0f8a4d" stroke="none">1.2 × 10</text>'
      + '<text x="386" y="320" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">8</text>'
      + '<text x="320" y="384" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the point moved one place left, so the power went up by one</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What to do with the front parts, and what to do with the '
        + 'powers',
      columns: ['Operation', 'The front parts', 'The powers', 'Example'],
      rows: [
        [
          'Multiply',
          'Multiply them',
          'Add them',
          '3 times 10 to the 4, times 4 times 10 cubed, is 1.2 times 10 to the 8',
        ],
        [
          'Divide',
          'Divide them',
          'Subtract them',
          '8 times 10 to the 5, over 2 times 10 squared, is 4 times 10 cubed',
        ],
      ],
      note: 'If the front part comes out at 10 or more, move the point one '
        + 'place left and add 1 to the power. 12 times 10 to the 7 is the '
        + 'right value and is not standard form.',
    },
    {
      caption: 'The sign of the power is a check you get for nothing',
      columns: ['The number', 'In standard form', 'The power'],
      rows: [
        ['4300', '4.3 times 10 cubed', 'Positive, because the number is large'],
        [
          '0.0043',
          '4.3 times 10 to the power negative 3',
          'Negative, because the number is below 1',
        ],
      ],
      note: 'A large number with a negative power means you moved the point '
        + 'the wrong way, and you can see that without redoing the '
        + 'question.',
    },
  ],
  questions: [
    {
      id: 'stf-1',
      ask: 'Write 3 400 in standard form.',
      kind: 'choice',
      options: [
        '3.4 times 10 to the 3',
        '34 times 10 squared',
        '3.4 times 10 to the negative 3',
      ],
      answer: '3.4 times 10 to the 3',
      teach: 'The front part must be between 1 and 10, '
        + 'and a big number takes a positive power.',
      level: 3,
    },
    {
      id: 'stf-2',
      ask: 'Which power does 0.0082 need?',
      kind: 'choice',
      options: ['Negative 3', 'Negative 2', 'Positive 3'],
      answer: 'Negative 3',
      teach: '8.2 is reached by moving the point three places right, '
        + 'and a number under 1 takes a negative power.',
      level: 4,
    },
    {
      id: 'stf-3',
      ask: 'Why must a number less than 1 have a negative power of ten?',
      kind: 'choice',
      options: [
        'The point moved right, making the number bigger',
        'Because small numbers are negative',
        'To keep the front part under 10',
      ],
      answer: 'The point moved right, making the number bigger',
      teach: 'A negative power brings the size back down to what it was.',
      level: 5,
    },
  ],
})

/* ── number bases ────────────────────────────────────────────────────────── */

teach({
  topicId: 'number-bases',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The base says how many you bundle by before moving a column. '
      + 'In base ten the columns are 1, 10, 100. '
      + 'In base two they are 1, 2, 4, 8, 16. '
      + 'To convert to base ten, multiply each digit by its column and add.',
    method: [
      'Write the column values for that base above the digits.',
      'Multiply each digit by its column and add, to reach base ten.',
      'To leave base ten, divide repeatedly by the base and read the '
        + 'remainders upwards.',
    ],
  },

  why:
    'A seller at Makola counts sachet water in packs of 30. '
    + 'She has 4 full packs and 7 loose sachets. '
    + 'On her paper she writes 4, then 7. '
    + 'On your paper 47 means forty seven. '
    + 'On hers it means 127. '
    + 'Neither of you has made a mistake. '
    + 'So what has to be known about a written number '
    + 'before anybody can say what it is worth?',

  notation:
    'The base is written as a small number after the digits, sitting low. '
    + 'So 1011 in base two is written $1011_2$. '
    + 'It is said "one, zero, one, one, base two", one digit at a time. '
    + 'It is never said "one thousand and eleven", '
    + 'because base two has no thousands column. '
    + 'The small number is called the base. '
    + 'The commonest way to lose a mark is to leave it off the answer, '
    + 'because 1011 on its own is a different number in every base.',

  idea:
    'A base is how many units you gather before starting a new column, '
    + 'and the columns and the digits allowed both follow from it. '
    + 'To change to base ten, multiply each digit by its column value and '
    + 'add. '
    + 'To change from base ten, divide by the base again and again, '
    + 'and read the remainders from the bottom up. '
    + 'Adding in base two is ordinary adding, '
    + 'except that $1 + 1 = 10$, which means carry one.',

  mechanism:
    'The reason base ten feels natural and base two feels strange '
    + 'is only that one of them came first. '
    + 'Look at what 342 actually says. '
    + 'It says three hundreds, four tens, two units, '
    + 'and the columns are powers of ten because we bundle by ten. '
    + 'Nothing in arithmetic requires ten. '
    + 'We bundle by ten because we have ten fingers. '
    + 'Change the bundle size and every column changes with it, '
    + 'but the method does not change at all: '
    + 'each column is the base multiplied by the column to its right. '
    + 'So the single thing to write down before any conversion is the '
    + 'column values. '
    + 'Once they are on the page the question is ordinary arithmetic. '
    + 'Base two matters beyond the examination for one reason. '
    + 'A wire is either carrying current or it is not, '
    + 'which gives two states and no more, '
    + 'so a computer that stores anything at all must bundle by two. '
    + 'Every file on every machine is a number written in base two.',

  recap:
    'Place value means the position of a digit decides what it is worth. '
    + 'Take 342. '
    + 'The 2 sits in the units column, so it stands for 2. '
    + 'The 4 sits in the tens column, so it stands for 40. '
    + 'The 3 sits in the hundreds column, so it stands for 300. '
    + 'Add those three and you are back to 342. '
    + 'Each column is ten times the column to its right. '
    + 'This topic changes one thing only: '
    + 'how many you gather before moving to the next column.',

  method: [
    'Write the column values of the base above the digits.',
    'Check no digit is as large as the base. If one is, the number is '
      + 'wrong.',
    'To base ten: multiply each digit by its column and add them.',
    'From base ten: divide by the base, write the remainder, repeat.',
    'Read those remainders from the last one upwards.',
    'Adding in base two: 1 + 1 is 0 carry 1.',
    'Check your answer by converting it back.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Convert $1011_2$ to base ten.',
      steps: [
        'Columns from the right: 1, 2, 4, 8.',
        'Digits: 1, 0, 1, 1 reading from the left.',
        '$8 + 0 + 2 + 1$.',
      ],
      answer: '11.',
    },
    {
      level: 4,
      ask: 'Convert 25 in base ten to base two.',
      steps: [
        '$25 \\div 2 = 12$ remainder 1.',
        '$12 \\div 2 = 6$ remainder 0.',
        '$6 \\div 2 = 3$ remainder 0.',
        '$3 \\div 2 = 1$ remainder 1.',
        '$1 \\div 2 = 0$ remainder 1.',
        'Read the remainders upwards.',
      ],
      answer: '$11001_2$.',
    },
    {
      level: 5,
      ask: 'Add $1101_2$ and $1011_2$.',
      steps: [
        'Right column: $1 + 1 = 0$ carry 1.',
        'Next: $0 + 1$, plus the carried 1, gives 0 carry 1.',
        'Next: $1 + 0$, plus the carried 1, gives 0 carry 1.',
        'Next: $1 + 1$, plus the carried 1, gives 1 carry 1.',
        'Write the final carry.',
      ],
      answer: '$11000_2$. '
        + 'Check in base ten: $13 + 11 = 24$, and $11000_2$ is $16 + 8 = 24$.',
    },
  ],

  traps: [
    {
      mistake: 'Using a digit as big as the base.',
      why: 'There is no digit 2 in base two and no 5 in base five. '
        + 'If you have written one, a carry was missed.',
    },
    {
      mistake: 'Reading the remainders downwards.',
      why: 'The first remainder is the units column, so it goes last. '
        + 'Read upwards.',
    },
    {
      mistake: 'Saying 1 + 1 is 2 in base two.',
      why: 'There is no 2. It is 0 carry 1, written 10.',
    },
    {
      mistake: 'Converting without writing the column values first.',
      why: 'The columns are the whole method. '
        + 'Written down, the rest is ordinary arithmetic.',
    },
  ],

  extension:
    'Base sixteen is called hexadecimal. '
    + 'It needs six extra digits, and uses A to F for ten to fifteen. '
    + 'One hexadecimal digit is exactly four binary digits. '
    + 'So it shortens a long binary number without changing it.',

  figure: {
    alt: 'Three rows of columns. Base ten has columns 1000, 100, 10 and '
      + '1. Base two has 16, 8, 4, 2 and 1. Base five has 125, 25, 5 '
      + 'and 1. In every row each column is the base multiplied by the '
      + 'column to its right.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">write the column values down first</text>'
      + '<text x="60" y="82" font-size="16" text-anchor="start" fill="currentColor" stroke="none">base ten</text>'
      + '<path d="M 180 62 H 580 V 108 H 180 Z"/>'
      + '<line x1="280" y1="62" x2="280" y2="108"/>'
      + '<line x1="380" y1="62" x2="380" y2="108"/>'
      + '<line x1="480" y1="62" x2="480" y2="108"/>'
      + '<text x="230" y="92" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">1000</text>'
      + '<text x="330" y="92" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">100</text>'
      + '<text x="430" y="92" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">10</text>'
      + '<text x="530" y="92" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">1</text>'
      + '<text x="60" y="182" font-size="16" text-anchor="start" fill="currentColor" stroke="none">base two</text>'
      + '<path d="M 180 162 H 580 V 208 H 180 Z"/>'
      + '<line x1="260" y1="162" x2="260" y2="208"/>'
      + '<line x1="340" y1="162" x2="340" y2="208"/>'
      + '<line x1="420" y1="162" x2="420" y2="208"/>'
      + '<line x1="500" y1="162" x2="500" y2="208"/>'
      + '<text x="220" y="192" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">16</text>'
      + '<text x="300" y="192" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">8</text>'
      + '<text x="380" y="192" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">4</text>'
      + '<text x="460" y="192" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">2</text>'
      + '<text x="540" y="192" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">1</text>'
      + '<text x="60" y="282" font-size="16" text-anchor="start" fill="currentColor" stroke="none">base five</text>'
      + '<path d="M 180 262 H 580 V 308 H 180 Z"/>'
      + '<line x1="280" y1="262" x2="280" y2="308"/>'
      + '<line x1="380" y1="262" x2="380" y2="308"/>'
      + '<line x1="480" y1="262" x2="480" y2="308"/>'
      + '<text x="230" y="292" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">125</text>'
      + '<text x="330" y="292" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">25</text>'
      + '<text x="430" y="292" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">5</text>'
      + '<text x="530" y="292" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">1</text>'
      + '<text x="320" y="348" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">each column is the base times the column to its right</text>'
      + '<text x="320" y="384" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">so 1101 in base two is 8 plus 4 plus 1, which is 13</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The digits and the column values of each base',
      columns: ['Base', 'Digits it may use', 'Its columns, from the right'],
      rows: [
        ['Ten', '0 to 9', '1, 10, 100, 1000'],
        ['Two', '0 and 1', '1, 2, 4, 8, 16'],
        ['Five', '0 to 4', '1, 5, 25, 125'],
      ],
      note: 'A base never uses a digit as large as itself. Write the column '
        + 'values on the page before any conversion and the rest is '
        + 'arithmetic you already know.',
    },
    {
      caption: 'The same four amounts written in three different bases',
      columns: ['In base ten', 'In base two', 'In base five'],
      rows: [
        ['4', '100', '4'],
        ['7', '111', '12'],
        ['13', '1101', '23'],
        ['25', '11001', '100'],
      ],
      note: 'Nothing about the amount changed from column to column. Only '
        + 'the size of the bundle changed, and we bundle by ten only '
        + 'because we have ten fingers.',
    },
  ],
  questions: [
    {
      id: 'bas-1',
      ask: 'What is 101 in base two, in base ten?',
      kind: 'choice',
      options: ['5', '3', '101'],
      answer: '5',
      teach: 'The columns are 4, 2, 1. So 4 + 0 + 1 = 5.',
      level: 3,
    },
    {
      id: 'bas-2',
      ask: 'Which of these cannot be a base five number?',
      kind: 'choice',
      options: ['152', '143', '304'],
      answer: '152',
      teach: 'Base five uses only the digits 0 to 4, '
        + 'so a 5 cannot appear.',
      level: 4,
    },
    {
      id: 'bas-3',
      ask: 'Why do computers use base two?',
      kind: 'choice',
      options: [
        'A wire is either carrying current or it is not',
        'Base two is faster to add',
        'It uses fewer digits',
      ],
      answer: 'A wire is either carrying current or it is not',
      teach: 'Two states means bundling by two. '
        + 'Every file on a machine is a base two number.',
      level: 5,
    },
  ],
})

/* ── percentage increase and decrease ───────────────────────────────────── */

teach({
  topicId: 'percentage-change',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Percentage change is the change divided by the ORIGINAL, times 100. '
      + 'To increase by 20 per cent, multiply by 1.2. '
      + 'To decrease by 20 per cent, multiply by 0.8. '
      + 'To find the original after a change, divide by that multiplier.',
    method: [
      'Identify the original amount. Everything is measured against it.',
      'Change divided by original, times 100, gives the percentage.',
      'To undo a change, divide by the multiplier rather than reversing the '
        + 'percentage.',
    ],
  },

  why:
    'A bag of rice in Makola cost 180 cedis in January. '
    + 'In June the same bag costs 225 cedis. '
    + 'Everybody can see the price has gone up. '
    + 'But by how much has it gone up, '
    + 'as a figure you could set beside the rise in the price of oil? '
    + 'The difference is 45 cedis, and that does not answer it, '
    + 'because 45 cedis on a bag of rice '
    + 'and 45 cedis on a motorbike are not the same rise at all. '
    + 'You need a way of measuring a change against the thing that changed, '
    + 'and that is what this topic gives you.',

  notation:
    'The sign % is said "per cent", and it means "out of a hundred", '
    + 'so 20% is said "twenty per cent". '
    + 'The amount a percentage is taken of has a name worth using: '
    + 'it is the original. '
    + 'A percentage on its own says nothing until you name its original, '
    + 'so "a rise of 20%" must always be a rise of 20% of something. '
    + 'In a calculation, 20% is the number 0.2, not the number 20, '
    + 'and multiplying by 20 instead of 0.2 '
    + 'is the commonest way to lose a mark.',

  idea:
    'A percentage change compares the change to what you started with. '
    + 'The change divided by the original, multiplied by 100, '
    + 'gives the percentage. '
    + 'Going the other way, an increase of 20 per cent means multiplying by '
    + '1.2, '
    + 'because you keep the whole, which is 1, and add 0.2 of it. '
    + 'A decrease of 20 per cent means multiplying by 0.8. '
    + 'And when the amount after a change is given, '
    + 'you find the original by dividing by that same multiplier.',

  mechanism:
    'Two errors cause nearly every lost mark in this topic, '
    + 'and both come from forgetting what the percentage is a percentage '
    + 'of. '
    + 'A percentage is always of the original. '
    + 'So when a price rises from 50 to 60, '
    + 'the change is 10 and the original is 50, giving 20 per cent. '
    + 'Dividing by 60 would answer a question nobody asked. '
    + 'The second error is undoing a change by applying the opposite '
    + 'percentage, '
    + 'and it is worth seeing exactly why that fails. '
    + 'Take 100, increase by 10 per cent, and you have 110. '
    + 'Now decrease 110 by 10 per cent. '
    + 'The 10 per cent is now ten per cent of 110, which is 11, '
    + 'so you land on 99 and not 100. '
    + 'The second percentage was taken of a different number from the '
    + 'first. '
    + 'This is why you must divide by the multiplier instead: '
    + '$110 \\div 1.1$ is exactly 100. '
    + 'And it is why a shop that raises a price by 20 per cent '
    + 'and later takes 20 per cent off is not back where it started.',

  recap:
    'Per cent means "out of a hundred". '
    + 'So 20 per cent is 20 out of every 100. '
    + 'That is the fraction $\\frac{20}{100}$, which is the decimal 0.2. '
    + 'To find 20 per cent of 150 cedis, multiply 150 by 0.2, '
    + 'which gives 30 cedis. '
    + 'That one skill, a percentage of an amount, is what this stands on. '
    + 'This topic turns it round and asks the two harder questions: '
    + 'what percentage is a change, '
    + 'and what was the amount before the change happened?',

  method: [
    'Write down which number is the original.',
    'For the percentage change: change divided by original, times 100.',
    'To increase by a percentage, multiply by 1 plus the decimal.',
    'To decrease, multiply by 1 minus the decimal.',
    'To find the original from the new amount, divide by that multiplier.',
    'Never undo a change by subtracting the same percentage.',
    'Check the answer is the right side of the original.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A price rises from 40 cedis to 50 cedis. '
        + 'What is the percentage increase?',
      steps: [
        'The change is 10.',
        'The original is 40.',
        '$10 \\div 40 = 0.25$.',
      ],
      answer: '25 per cent.',
    },
    {
      level: 4,
      ask: 'A trader increases a price of 80 cedis by 15 per cent. '
        + 'Find the new price.',
      steps: [
        '15 per cent as a decimal is 0.15.',
        'Keep the whole and add it: multiply by 1.15.',
        '$80 \\times 1.15$.',
      ],
      answer: '92 cedis.',
    },
    {
      level: 5,
      ask: 'After a 25 per cent discount a bag costs 90 cedis. '
        + 'What was the original price?',
      steps: [
        'A 25 per cent decrease means multiplying by 0.75.',
        'So 90 is 0.75 of the original.',
        'Divide to undo: $90 \\div 0.75$.',
      ],
      answer: '120 cedis. '
        + 'Check: 25 per cent of 120 is 30, and $120 - 30 = 90$.',
    },
  ],

  traps: [
    {
      mistake: 'Dividing the change by the new amount.',
      why: 'A percentage change is always of the original. '
        + 'The new amount answers a different question.',
    },
    {
      mistake: 'Undoing a 20 per cent rise by taking 20 per cent off.',
      why: 'The second 20 per cent is of a bigger number, '
        + 'so you land below where you began. Divide by 1.2 instead.',
    },
    {
      mistake: 'Taking 25 per cent off 90 to find the original.',
      why: 'That treats 90 as the original when it is the result. '
        + 'Divide by 0.75.',
    },
    {
      mistake: 'Adding the percentage to the multiplier wrongly.',
      why: 'A 15 per cent rise is x 1.15, not x 1.5. '
        + 'Write the percentage as a decimal first.',
    },
  ],

  extension:
    'Compound interest is this repeated. '
    + 'Interest of 10 per cent for three years is multiplying by 1.1 three '
    + 'times, '
    + 'which is not the same as 30 per cent, '
    + 'because each year is a percentage of a larger amount than the last.',

  figure: {
    alt: 'One hundred increased by 10 per cent gives 110. Taking 10 per '
      + 'cent off 110 removes 11, not 10, so it lands on 99 and not '
      + 'back on 100. Dividing 110 by 1.1 gives exactly 100, which is '
      + 'how a change is undone.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">the second percentage is of a different number</text>'
      + '<text x="90" y="104" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">100</text>'
      + '<line x1="140" y1="98" x2="250" y2="98"/>'
      + '<line x1="250" y1="98" x2="241.4" y2="103.2"/>'
      + '<line x1="250" y1="98" x2="241.4" y2="92.8"/>'
      + '<text x="195" y="78" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">add 10 per cent</text>'
      + '<text x="195" y="122" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">which is 10</text>'
      + '<text x="300" y="104" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">110</text>'
      + '<line x1="350" y1="98" x2="460" y2="98" stroke="#c8433a" stroke-width="3"/>'
      + '<line x1="460" y1="98" x2="451.4" y2="103.2" stroke="#c8433a" stroke-width="3"/>'
      + '<line x1="460" y1="98" x2="451.4" y2="92.8" stroke="#c8433a" stroke-width="3"/>'
      + '<text x="405" y="78" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">take 10 per cent off</text>'
      + '<text x="405" y="122" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">but now that is 11</text>'
      + '<text x="516" y="104" font-size="24" text-anchor="middle" fill="#c8433a" stroke="none">99</text>'
      + '<text x="320" y="176" font-size="18" text-anchor="middle" fill="#c8433a" stroke="none">so you land on 99, and not back on 100</text>'
      + '<text x="300" y="244" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">110</text>'
      + '<line x1="350" y1="238" x2="460" y2="238" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="460" y1="238" x2="451.4" y2="243.2" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="460" y1="238" x2="451.4" y2="232.8" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="405" y="218" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">divide by 1.1</text>'
      + '<text x="516" y="244" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">100</text>'
      + '<text x="320" y="306" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">undo a change by dividing by its multiplier</text>'
      + '<text x="320" y="344" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">a rise of 20 per cent is multiplying by 1.2</text>'
      + '<text x="320" y="374" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">and a fall of 20 per cent is multiplying by 0.8</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The multiplier for each change, and how to undo it',
      columns: ['The change', 'Multiply by', 'To undo it'],
      rows: [
        ['An increase of 20 per cent', '1.2', 'Divide by 1.2'],
        ['A decrease of 20 per cent', '0.8', 'Divide by 0.8'],
        ['An increase of 5 per cent', '1.05', 'Divide by 1.05'],
        ['A decrease of 15 per cent', '0.85', 'Divide by 0.85'],
      ],
      note: 'A percentage is always of the original. That is why undoing a '
        + 'change means dividing by the multiplier, and why a shop that '
        + 'raises a price by 20 per cent and later takes 20 per cent off '
        + 'is not back where it started.',
    },
  ],
  questions: [
    {
      id: 'pcc-1',
      ask: 'A price falls from 200 to 150. What is the percentage decrease?',
      kind: 'choice',
      options: ['25 per cent', '33 per cent', '50 per cent'],
      answer: '25 per cent',
      teach: 'The change is 50 and the original is 200. '
        + '50 divided by 200 is 0.25.',
      level: 3,
    },
    {
      id: 'pcc-2',
      ask: 'What do you multiply by to increase an amount by 8 per cent?',
      kind: 'choice',
      options: ['1.08', '0.08', '1.8'],
      answer: '1.08',
      teach: 'Keep the whole, which is 1, and add the 0.08.',
      level: 4,
    },
    {
      id: 'pcc-3',
      ask: 'A price rose 10 per cent, then fell 10 per cent. '
        + 'Where is it now?',
      kind: 'choice',
      options: [
        'Slightly below the original',
        'Exactly the original',
        'Slightly above the original',
      ],
      answer: 'Slightly below the original',
      teach: 'The fall was ten per cent of a bigger number than the rise '
        + 'was, so it took more away than was added.',
      level: 5,
    },
  ],
})

/* ── ratio, rate and proportion ─────────────────────────────────────────── */

teach({
  topicId: 'ratio-proportion-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'To share in a ratio, add the parts, divide the total by that, '
      + 'then multiply each part. '
      + 'A rate compares two different units, such as cedis per kilo. '
      + 'In direct proportion both grow together. '
      + 'In inverse proportion one grows as the other shrinks, '
      + 'and their product stays the same.',
    method: [
      'Add the ratio parts to find how many shares there are.',
      'Find the value of one share.',
      'For proportion, ask whether doubling one doubles or halves the '
        + 'other.',
    ],
  },

  why:
    'Two sisters sell oranges together in Kaneshie market. '
    + 'Ama put in 300 cedis of her own money and Akos put in 200. '
    + 'At the end of the week they have 750 cedis to share. '
    + 'Split it down the middle and each gets 375, '
    + 'and Ama is right to say that is not fair, because she put in more. '
    + 'Give each one back exactly what she put in '
    + 'and 250 cedis are left sitting on the table. '
    + 'How do you divide the 750 '
    + 'so that it is shared in the same proportions as the money put in?',

  notation:
    'A ratio is written with two dots between the parts, as $3 : 2$, '
    + 'and it is said "three to two". '
    + 'The two dots are called a colon. '
    + 'The order follows the order of the names, '
    + 'so "share between Ama and Akos in the ratio $3 : 2$" '
    + 'gives Ama the 3 parts. '
    + 'The parts add up to the whole, '
    + 'so $3 : 2$ means three fifths and two fifths. '
    + 'A rate is written with the word "per", or with a stroke as 12 cedis/kg, '
    + 'and "per" always means "for each one of". '
    + 'Swapping the order of a ratio is the commonest way to lose a mark.',

  idea:
    'A ratio compares amounts of the same kind: 3 to 2. '
    + 'To share 200 in the ratio 3 to 2, '
    + 'add the parts to get 5 shares, '
    + 'divide 200 by 5 to get 40 for one share, '
    + 'then give 120 and 80. '
    + 'A rate compares amounts of different kinds, '
    + 'such as 12 cedis per kilo or 60 kilometres per hour. '
    + 'Two quantities can also be tied together, so that changing one '
    + 'changes the other in a fixed way, and there are two kinds of '
    + 'that.',

  mechanism:
    'The idea that makes every ratio question easy is the share. '
    + 'A ratio of 3 to 2 does not mean 3 and 2. '
    + 'It means five equal shares, three of them going one way and two the '
    + 'other. '
    + 'So the first thing you do, always, is add the parts, '
    + 'because that tells you how many shares exist, '
    + 'and one share is the only number you actually need. '
    + 'Everything else is multiplying it. '
    + 'Telling direct from inverse proportion needs one test and not a '
    + 'definition. '
    + 'Ask what happens when you double the first quantity. '
    + 'Two workers take half the time one worker takes, '
    + 'so doubling the workers halved the time, and that is inverse. '
    + 'Two kilos cost twice what one kilo costs, '
    + 'so doubling the weight doubled the price, and that is direct. '
    + 'The check is that direct keeps the quotient fixed '
    + 'and inverse keeps the product fixed, '
    + 'which means you can verify your own answer. '
    + 'If 4 workers take 6 days, the product is 24. '
    + 'So 3 workers must take 8, because $3 \\times 8$ is also 24.',

  recap:
    'A ratio says how two amounts compare, '
    + 'without saying how big either one is. '
    + 'If a group has 2 boys for every 3 girls, '
    + 'the ratio of boys to girls is 2 to 3. '
    + 'That same ratio fits a group of 4 boys and 6 girls, '
    + 'and a group of 20 boys and 30 girls, '
    + 'because each one still has 2 boys for every 3 girls. '
    + 'The order matters: 2 to 3 of boys to girls '
    + 'does not say the same thing as 3 to 2. '
    + 'This topic takes that comparison and uses it to share out real amounts, '
    + 'and to handle rates.',

  method: [
    'For a share: add the parts to get the number of shares.',
    'Divide the total by that to find one share.',
    'Multiply one share by each part.',
    'Check the parts add back to the total.',
    'For a rate: write the units, such as cedis per kilo, and keep them.',
    'For proportion: double one quantity and see what the other does.',
    'Direct means the quotient is constant. Inverse means the product is.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Share 350 cedis between two people in the ratio 4 to 3.',
      steps: [
        '$4 + 3 = 7$ shares.',
        '$350 \\div 7 = 50$ for one share.',
        '4 shares is 200 and 3 shares is 150.',
      ],
      answer: '200 cedis and 150 cedis.',
    },
    {
      level: 4,
      ask: 'If 5 kilos of rice cost 60 cedis, what do 8 kilos cost?',
      steps: [
        'More rice costs more, so this is direct.',
        'One kilo costs $60 \\div 5$, which is 12.',
        '8 kilos is $8 \\times 12$.',
      ],
      answer: '96 cedis.',
    },
    {
      level: 5,
      ask: '6 workers build a wall in 10 days. '
        + 'How long would 4 workers take, at the same rate?',
      steps: [
        'Fewer workers means more days, so this is inverse.',
        'For inverse, the product stays the same: $6 \\times 10 = 60$.',
        'So $4 \\times \\text{days} = 60$.',
      ],
      answer: '15 days.',
    },
  ],

  traps: [
    {
      mistake: 'Treating 3 to 2 as the amounts 3 and 2.',
      why: 'It is five shares, three one way and two the other. '
        + 'Add the parts first.',
    },
    {
      mistake: 'Using direct proportion on a workers and days question.',
      why: 'More workers means fewer days. '
        + 'Test it by doubling one quantity before you choose a method.',
    },
    {
      mistake: 'Dropping the units from a rate.',
      why: 'Cedis per kilo and kilos per cedi are reciprocals. '
        + 'The units tell you which one you have.',
    },
    {
      mistake: 'Not checking that the shares add to the total.',
      why: 'It is a free check and it catches most arithmetic slips.',
    },
  ],

  extension:
    'A scale on a map is a ratio with units removed: '
    + '1 to 50 000 means one centimetre on the paper is 50 000 centimetres '
    + 'on the ground. '
    + 'Every scale drawing question is the share method applied to length.',

  figure: {
    alt: 'A bar of 200 divided into five equal shares of 40. The first '
      + 'three shares are marked as one side of the ratio, giving 120, '
      + 'and the remaining two as the other, giving 80.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">a ratio of 3 to 2 means five equal shares</text>'
      + '<path d="M 60 86 H 580 V 156 H 60 Z"/>'
      + '<line x1="164" y1="86" x2="164" y2="156"/>'
      + '<line x1="268" y1="86" x2="268" y2="156"/>'
      + '<line x1="372" y1="86" x2="372" y2="156"/>'
      + '<line x1="476" y1="86" x2="476" y2="156"/>'
      + '<text x="112" y="128" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">40</text>'
      + '<text x="216" y="128" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">40</text>'
      + '<text x="320" y="128" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">40</text>'
      + '<text x="424" y="128" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">40</text>'
      + '<text x="528" y="128" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">40</text>'
      + '<line x1="60" y1="172" x2="368" y2="172" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="214" y="198" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">three shares, so 120</text>'
      + '<line x1="372" y1="172" x2="580" y2="172"/>'
      + '<text x="476" y="198" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">two shares, so 80</text>'
      + '<text x="320" y="250" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">add the parts first: 3 and 2 make 5 shares</text>'
      + '<text x="320" y="282" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">then 200 divided by 5 is 40, and one share is all you need</text>'
      + '<text x="320" y="334" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">double the first quantity and watch the second</text>'
      + '<text x="320" y="364" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">if it doubles, that is direct. if it halves, that is inverse</text>'
      + '<text x="320" y="392" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">direct keeps the quotient fixed, inverse keeps the product fixed</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Direct and inverse proportion, and the one test that tells '
        + 'them apart',
      columns: ['The question', 'Direct proportion', 'Inverse proportion'],
      rows: [
        ['Double the first quantity', 'The second doubles too', 'The second halves'],
        [
          'An example',
          'Two kilos cost twice what one kilo costs',
          'Two workers take half the time one worker takes',
        ],
        [
          'What stays the same',
          'One divided by the other',
          'The two multiplied together',
        ],
        [
          'Your own check',
          'The quotient is the same for every pair',
          'The product is the same for every pair',
        ],
      ],
      note: 'If 4 workers take 6 days, the product is 24, so 3 workers must '
        + 'take 8 days, because 3 times 8 is also 24. That is a check you '
        + 'can run on your own answer.',
    },
  ],
  questions: [
    {
      id: 'rat-1',
      ask: 'Share 120 in the ratio 1 to 3. What are the two amounts?',
      kind: 'choice',
      options: ['30 and 90', '40 and 80', '1 and 3'],
      answer: '30 and 90',
      teach: '1 + 3 = 4 shares, so one share is 30.',
      level: 3,
    },
    {
      id: 'rat-2',
      ask: 'Workers and the days a job takes are in which kind of '
        + 'proportion?',
      kind: 'choice',
      options: ['Inverse', 'Direct', 'Neither'],
      answer: 'Inverse',
      teach: 'More workers means fewer days, '
        + 'and the product of the two stays the same.',
      level: 4,
    },
    {
      id: 'rat-3',
      ask: 'If 8 taps fill a tank in 3 hours, how long do 6 taps take?',
      kind: 'choice',
      options: ['4 hours', '2 hours and 15 minutes', '5 hours'],
      answer: '4 hours',
      teach: 'Inverse, so the product is fixed: 8 x 3 = 24, '
        + 'and 6 x 4 = 24.',
      level: 5,
    },
  ],
})

/* ── number sequences ───────────────────────────────────────────────────── */

teach({
  topicId: 'sequences-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Find the difference between terms. '
      + 'If it is constant, the sequence is linear '
      + 'and the nth term is that difference times n, plus a fixed number. '
      + 'Work the fixed number out by testing $n = 1$.',
    method: [
      'Write the differences underneath.',
      'A constant difference d gives dn plus something.',
      'Put n equal to 1 to find the something.',
    ],
  },

  why:
    'A chair maker in Suame starts the week with 7 chairs finished. '
    + 'He finishes 4 more every day. '
    + 'By Monday evening he has 11, by Tuesday 15, by Wednesday 19. '
    + 'A shop asks him for 87 chairs '
    + 'and wants to know which day they will be ready. '
    + 'Writing out the days one by one would get him there in the end. '
    + 'This topic gives him the one line that answers it straight away.',

  notation:
    'Each number in a sequence is called a term. '
    + 'The terms are counted from the first one, '
    + 'so in 5, 8, 11 the first term is 5 and the third term is 11. '
    + 'The position of a term is written $n$, '
    + 'so the nth term means the term in position $n$. '
    + 'A formula like $3n + 2$ is said "three n plus two", '
    + 'and $3n$ means 3 times $n$ with the multiplication sign left out. '
    + 'To use it, put the position where the $n$ is: '
    + 'the fourth term is $3 \\times 4 + 2$, which is 14. '
    + 'Doing the adding before the multiplying '
    + 'is the commonest way to lose a mark.',

  idea:
    'A sequence is a list of numbers made by a rule. '
    + 'The nth term is a formula that gives any term you ask for, '
    + 'without working through all the ones before it. '
    + 'If the difference between consecutive terms is always the same, '
    + 'the sequence is linear, '
    + 'and the nth term is that common difference times n, '
    + 'plus a fixed number that shifts the whole sequence. '
    + 'So 5, 8, 11, 14 has a difference of 3, '
    + 'making the nth term $3n + 2$.',

  mechanism:
    'Most learners find the nth term by guessing and checking, '
    + 'and there is a method that never fails, '
    + 'so it is worth seeing why it works. '
    + 'The sequence 3, 6, 9, 12 is just $3n$. '
    + 'Term one is 3, term two is 6, and so on. '
    + 'Now look at 5, 8, 11, 14. '
    + 'The differences are also 3, so this sequence climbs at exactly the '
    + 'same rate, '
    + 'which means it has to be $3n$ with something added to every term. '
    + 'Compare them: $3n$ gives 3, 6, 9, 12, and ours gives 5, 8, 11, 14. '
    + 'Every term is 2 more. '
    + 'So the nth term is $3n + 2$, '
    + 'and that is not a guess, it is a comparison. '
    + 'Shorter still: put $n = 1$ in $dn$ and see how far off you are. '
    + 'This also tells you when the method does not apply. '
    + 'If the differences are not constant, '
    + 'the sequence is not linear and $dn + c$ cannot describe it. '
    + 'Then look at the differences of the differences, '
    + 'or ask whether each term is multiplied rather than added to.',

  recap:
    'Look at the list 5, 8, 11, 14. '
    + 'Each number is 3 more than the one before it. '
    + 'Subtract any two numbers that sit next to each other '
    + 'and you get 3 every time: $8 - 5 = 3$, '
    + 'and $11 - 8 = 3$. '
    + 'That fixed step is called the common difference, '
    + 'and with it you can keep the list going: '
    + 'the next number is $14 + 3$, which is 17. '
    + 'This topic turns that step into a formula, '
    + 'so the hundredth number can be given '
    + 'without writing the ninety nine before it.',

  method: [
    'Write the sequence with space underneath.',
    'Write the difference between each pair of terms.',
    'If the differences are equal, call that value d.',
    'Start with dn as your formula.',
    'Put n equal to 1 and compare with the real first term.',
    'Add the difference as a constant.',
    'Test the formula on the third or fourth term.',
    'If the differences are not equal, the sequence is not linear.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give the next two terms of 7, 11, 15, 19.',
      steps: [
        'The difference is 4 each time.',
        'Keep adding 4.',
      ],
      answer: '23 and 27.',
    },
    {
      level: 4,
      ask: 'Find the nth term of 4, 7, 10, 13.',
      steps: [
        'The common difference is 3, so start with $3n$.',
        'When $n = 1$, $3n$ gives 3, but the term is 4.',
        'So add 1.',
      ],
      answer: '$3n + 1$. '
        + 'Check $n = 4$: $12 + 1 = 13$.',
    },
    {
      level: 5,
      ask: 'Find the 50th term of 100, 96, 92, 88.',
      steps: [
        'The difference is negative 4, so start with $-4n$.',
        'When $n = 1$, $-4n$ gives $-4$, but the term is 100.',
        'So add 104: the nth term is $104 - 4n$.',
        'Put $n = 50$: $104 - 200$.',
      ],
      answer: '$-96$.',
    },
  ],

  traps: [
    {
      mistake: 'Writing the nth term as the first term plus the difference '
        + 'times n.',
      why: 'That is off by one difference. '
        + 'Always test n equals 1 against the real first term.',
    },
    {
      mistake: 'Using dn + c when the differences are not constant.',
      why: 'The formula describes a straight climb only. '
        + 'Unequal differences mean a different kind of sequence.',
    },
    {
      mistake: 'Forgetting the difference can be negative.',
      why: 'A falling sequence has a negative d, and the method is '
        + 'unchanged.',
    },
    {
      mistake: 'Not checking the formula on a later term.',
      why: 'A formula that fits the first term and nothing else is common. '
        + 'One check catches it.',
    },
  ],

  extension:
    'When the differences are not constant but the differences OF the '
    + 'differences are, '
    + 'the sequence is quadratic and its nth term contains $n^2$. '
    + '1, 4, 9, 16 is the clearest case.',

  figure: {
    alt: 'Two rows of numbers. The top row is 3n, giving 3, 6, 9 and 12. '
      + 'The bottom row is the sequence 5, 8, 11 and 14. An arrow '
      + 'between each pair is marked plus 2, so the nth term is 3n plus '
      + '2.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">compare it with 3n, and read off the difference</text>'
      + '<text x="80" y="110" font-size="16" text-anchor="start" fill="currentColor" stroke="none">3n gives</text>'
      + '<text x="80" y="182" font-size="16" text-anchor="start" fill="currentColor" stroke="none">ours gives</text>'
      + '<text x="260" y="110" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">3</text>'
      + '<text x="260" y="182" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">5</text>'
      + '<line x1="260" y1="124" x2="260" y2="158" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="260" y1="158" x2="254.8" y2="149.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="260" y1="158" x2="265.2" y2="149.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="284" y="148" font-size="15" text-anchor="start" fill="#0f8a4d" stroke="none">plus 2</text>'
      + '<text x="360" y="110" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">6</text>'
      + '<text x="360" y="182" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">8</text>'
      + '<line x1="360" y1="124" x2="360" y2="158" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="360" y1="158" x2="354.8" y2="149.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="360" y1="158" x2="365.2" y2="149.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="384" y="148" font-size="15" text-anchor="start" fill="#0f8a4d" stroke="none">plus 2</text>'
      + '<text x="460" y="110" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">9</text>'
      + '<text x="460" y="182" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">11</text>'
      + '<line x1="460" y1="124" x2="460" y2="158" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="460" y1="158" x2="454.8" y2="149.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="460" y1="158" x2="465.2" y2="149.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="484" y="148" font-size="15" text-anchor="start" fill="#0f8a4d" stroke="none">plus 2</text>'
      + '<text x="560" y="110" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">12</text>'
      + '<text x="560" y="182" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">14</text>'
      + '<line x1="560" y1="124" x2="560" y2="158" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="560" y1="158" x2="554.8" y2="149.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="560" y1="158" x2="565.2" y2="149.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="584" y="148" font-size="15" text-anchor="start" fill="#0f8a4d" stroke="none">plus 2</text>'
      + '<text x="320" y="244" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">the differences are 3, so it climbs at the rate of 3n</text>'
      + '<text x="320" y="278" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">and every term is 2 more than 3n</text>'
      + '<text x="320" y="318" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">so the nth term is 3n plus 2</text>'
      + '<text x="320" y="356" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">that is a comparison, and not a guess</text>'
      + '<text x="320" y="386" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">shorter still: put n equal to 1 in 3n and see how far off you are</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What the differences tell you, and what to do with each kind',
      columns: ['What the differences do', 'What kind of sequence it is', 'What to do'],
      rows: [
        [
          'They are all the same',
          'Linear',
          'The nth term is that difference times n, plus a fixed number',
        ],
        [
          'They change by a fixed amount themselves',
          'Quadratic',
          'Look at the differences of the differences',
        ],
        [
          'Each term is the one before multiplied by a fixed number',
          'Geometric',
          'Ask what it is multiplied by, not what is added',
        ],
        [
          'They follow nothing regular',
          'Neither of those',
          'Look for another pattern, such as square numbers or primes',
        ],
      ],
      note: 'The first row is the only one where dn plus c applies, so '
        + 'checking the differences first also tells you when the method '
        + 'does not work.',
    },
  ],
  questions: [
    {
      id: 'seq-1',
      ask: 'What is the next term of 2, 9, 16, 23?',
      kind: 'choice',
      options: ['30', '29', '31'],
      answer: '30',
      teach: 'The difference is 7 each time.',
      level: 3,
    },
    {
      id: 'seq-2',
      ask: 'What is the nth term of 5, 10, 15, 20?',
      kind: 'choice',
      options: ['5n', '5n + 5', 'n + 5'],
      answer: '5n',
      teach: 'The difference is 5, and when n is 1 the formula 5n already '
        + 'gives 5, so nothing is added.',
      level: 4,
    },
    {
      id: 'seq-3',
      ask: 'The differences of a sequence are not all the same. '
        + 'What does that tell you?',
      kind: 'choice',
      options: [
        'The nth term is not of the form dn + c',
        'The sequence has no rule',
        'You made an arithmetic error',
      ],
      answer: 'The nth term is not of the form dn + c',
      teach: 'dn + c describes a constant climb only. '
        + 'Look at the differences of the differences next.',
      level: 5,
    },
  ],
})

/* ── charts and graphs ──────────────────────────────────────────────────── */

teach({
  topicId: 'charts-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A bar chart compares amounts. '
      + 'A pie chart shows parts of one whole. '
      + 'A pictogram uses a symbol with a stated value. '
      + 'For a pie chart, each category’s angle is its share of '
      + '$360^\\circ$.',
    method: [
      'Choose the chart from the question: comparing, or showing shares.',
      'Label both axes and give the chart a title.',
      'For a pie chart, divide each amount by the total and multiply by '
        + '360.',
    ],
  },

  why:
    'A JHS form of 40 pupils is asked how they get to school. '
    + '18 walk, 12 come by tro-tro, 6 by taxi and 4 by bicycle. '
    + 'Those four numbers are correct, '
    + 'and a parent reading them out takes almost nothing in. '
    + 'The head teacher wants to see in one glance '
    + 'that nearly half the form walks. '
    + 'A list of numbers cannot show that, '
    + 'and this topic is how you turn the list into a picture that can.',

  notation:
    'An angle is written with a small raised circle after the figure, '
    + 'as in $162^\\circ$. '
    + 'A full circle is $360^\\circ$, '
    + 'so the sector angles of a pie chart must add up to 360. '
    + 'The note that says what one symbol stands for is called the key, '
    + 'and the one that says what one square of the grid is worth '
    + 'is called the scale. '
    + 'A chart with neither cannot be read at all, '
    + 'and leaving it off is the commonest way to lose a mark.',

  idea:
    'A bar chart has bars of equal width whose heights show the amounts, '
    + 'and it is used to compare separate categories. '
    + 'A pie chart is a circle divided into sectors, '
    + 'and it shows how one whole is split up. '
    + 'Each sector angle is the category divided by the total, '
    + 'multiplied by $360^\\circ$. '
    + 'A pictogram uses a repeated symbol, '
    + 'with a key saying what one symbol stands for. '
    + 'Every chart needs a title, labels, and a stated scale or key, '
    + 'because without them the drawing cannot be read.',

  mechanism:
    'Choosing the chart is the part that carries marks, '
    + 'and it comes down to one question: '
    + 'does the data add up to a whole that matters? '
    + 'The marks of five pupils do not. '
    + 'There is no meaningful total, '
    + 'so a pie chart of them would show a share of something that does '
    + 'not exist, '
    + 'and a bar chart is right. '
    + 'How a family spends its income does add up to a whole, '
    + 'and the interesting thing is what fraction goes where, '
    + 'so a pie chart is right. '
    + 'The arithmetic of the pie chart follows from the same idea. '
    + 'The circle is the whole, and a whole turn is 360 degrees, '
    + 'so a category that is one quarter of the total gets one quarter of '
    + '360. '
    + 'Dividing by the total and multiplying by 360 is just that, written '
    + 'once. '
    + 'The check is free: your angles must add to 360. '
    + 'There is one more thing worth knowing, '
    + 'because it is how charts mislead. '
    + 'A bar chart whose vertical axis starts at 90 instead of 0 '
    + 'makes a difference of two look enormous. '
    + 'Nothing in it is false. '
    + 'It is the axis that is lying, which is why reading the axis is the '
    + 'first thing you do with somebody else’s chart.',

  recap:
    'A bar chart turns each amount into the height of a bar. '
    + 'If 18 pupils walk, the bar for walking is drawn 18 units tall, '
    + 'and the taller bar is always the bigger amount. '
    + 'A pictogram does the same with a repeated picture instead of a bar. '
    + 'A note at the side says what one picture is worth, '
    + 'so if one bus stands for 4 pupils, three buses stand for 12. '
    + 'Both need a title and labels, '
    + 'or a reader cannot tell what is being counted. '
    + 'This topic keeps those two and adds the pie chart, '
    + 'which shows the shares of one whole.',

  method: [
    'Ask whether the data forms a meaningful whole.',
    'A whole with shares: pie chart. Separate comparisons: bar chart.',
    'For a bar chart, choose a scale that starts at zero.',
    'Keep the bars equal in width and leave gaps between them.',
    'Label both axes and give a title.',
    'For a pie chart, total the data first.',
    'For each category: amount over total, times 360.',
    'Check the angles add to 360.',
    'For a pictogram, state what one symbol represents.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A pictogram uses one circle for 10 pupils. '
        + 'How is 35 pupils shown?',
      steps: [
        'Each circle is 10.',
        '35 is three tens and a half of ten.',
      ],
      answer: 'Three full circles and a half circle.',
    },
    {
      level: 4,
      ask: 'In a class of 40, 10 chose football. '
        + 'What angle does football get in a pie chart?',
      steps: [
        '10 out of 40 is one quarter.',
        'One quarter of $360^\\circ$.',
      ],
      answer: '$90^\\circ$.',
    },
    {
      level: 5,
      ask: 'A bar chart makes two schools look very different, '
        + 'but their results are 94 and 96 per cent. '
        + 'How was the impression created?',
      steps: [
        'A difference of 2 should look small.',
        'Look at where the vertical axis starts.',
        'If it starts at 90, the bars are 4 and 6 units tall.',
        'One then looks half again as tall as the other.',
      ],
      answer: 'The vertical axis does not start at zero, '
        + 'so a difference of two per cent fills most of the chart. '
        + 'Nothing is false, but the axis misleads.',
    },
  ],

  traps: [
    {
      mistake: 'Drawing a pie chart of data that has no meaningful total.',
      why: 'A sector shows a share of a whole. '
        + 'If the whole is meaningless, so is the share.',
    },
    {
      mistake: 'Leaving off the axis labels or the key.',
      why: 'The chart cannot be read without them, '
        + 'and marks are given for them specifically.',
    },
    {
      mistake: 'Angles that do not add to 360.',
      why: 'They must. '
        + 'If they do not, one division was done wrongly.',
    },
    {
      mistake: 'Reading a bar chart without checking where the axis '
        + 'starts.',
      why: 'An axis that starts above zero exaggerates every difference.',
    },
  ],

  extension:
    'A line graph joins points to show change over time. '
    + 'Use it only when the values in between really exist. '
    + 'Temperature during a day does. '
    + 'Favourite subjects do not.',

  figure: {
    alt: 'The same two marks, 94 and 98, drawn as bars twice. On the '
      + 'left the vertical axis starts at 0 and the two bars look '
      + 'almost the same height. On the right the axis starts at 90 and '
      + 'one bar looks twice the other, although nothing in the numbers '
      + 'has changed.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">the bars did not change, the axis did</text>'
      + '<line x1="80" y1="250" x2="80" y2="90" stroke-width="3"/>'
      + '<line x1="80" y1="250" x2="280" y2="250" stroke-width="3"/>'
      + '<path d="M 120 100 H 170 V 250 H 120 Z"/>'
      + '<path d="M 200 93 H 250 V 250 H 200 Z"/>'
      + '<text x="68" y="254" font-size="13" text-anchor="end" fill="currentColor" stroke="none">0</text>'
      + '<text x="68" y="110" font-size="13" text-anchor="end" fill="currentColor" stroke="none">90</text>'
      + '<text x="68" y="94" font-size="13" text-anchor="end" fill="currentColor" stroke="none">100</text>'
      + '<text x="145" y="272" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Ama</text>'
      + '<text x="225" y="272" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Kofi</text>'
      + '<text x="180" y="302" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">axis from 0</text>'
      + '<text x="180" y="326" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">a small difference</text>'
      + '<line x1="380" y1="250" x2="380" y2="90" stroke-width="3"/>'
      + '<line x1="380" y1="250" x2="580" y2="250" stroke-width="3"/>'
      + '<path d="M 420 186 H 470 V 250 H 420 Z"/>'
      + '<path d="M 500 122 H 550 V 250 H 500 Z"/>'
      + '<text x="368" y="254" font-size="13" text-anchor="end" fill="currentColor" stroke="none">90</text>'
      + '<text x="368" y="94" font-size="13" text-anchor="end" fill="currentColor" stroke="none">100</text>'
      + '<text x="445" y="272" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Ama</text>'
      + '<text x="525" y="272" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Kofi</text>'
      + '<text x="480" y="302" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">axis from 90</text>'
      + '<text x="480" y="326" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">the same two marks, 94 and 98</text>'
      + '<text x="320" y="366" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">nothing in the second chart is false</text>'
      + '<text x="320" y="392" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">it is the axis that is lying, so read the axis first</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Which chart to use, and the question that decides it',
      columns: ['The data', 'Does it add to a whole that matters', 'The chart'],
      rows: [
        ['The marks of five pupils', 'No, there is no meaningful total', 'Bar chart'],
        [
          'How a family spends its income',
          'Yes, and the share is the interesting part',
          'Pie chart',
        ],
        [
          'The rainfall in each month of a year',
          'No, a yearly total is not the point',
          'Bar chart',
        ],
        [
          'The religions of everybody in a class',
          'Yes, every pupil is in exactly one group',
          'Pie chart',
        ],
        ['The bicycles counted in four villages', 'No', 'Pictogram, or a bar chart'],
      ],
      note: 'Every chart needs a title, labels, and a stated scale or key. '
        + 'Without them the drawing cannot be read at all.',
    },
    {
      caption: 'Working out the angle of each sector of a pie chart',
      columns: [
        'What the money went on',
        'Amount in cedis',
        'Share of the total',
        'Its angle',
      ],
      rows: [
        ['Food', '200', 'One half', '180 degrees'],
        ['Rent', '100', 'One quarter', '90 degrees'],
        ['School fees', '60', 'Fifteen hundredths', '54 degrees'],
        ['Transport', '40', 'One tenth', '36 degrees'],
      ],
      note: 'Divide the amount by the total of 400 and multiply by 360. The '
        + 'check is free: the angles must add to 360, and these do.',
    },
  ],
  questions: [
    {
      id: 'cha-1',
      ask: 'Which chart shows how one whole is divided?',
      kind: 'choice',
      options: ['A pie chart', 'A bar chart', 'A pictogram'],
      answer: 'A pie chart',
      teach: 'Each sector is a share of the whole circle.',
      level: 3,
    },
    {
      id: 'cha-2',
      ask: 'A category is 15 out of 60. What is its pie chart angle?',
      kind: 'choice',
      options: ['90 degrees', '60 degrees', '150 degrees'],
      answer: '90 degrees',
      teach: '15 over 60 is one quarter, and a quarter of 360 is 90.',
      level: 4,
    },
    {
      id: 'cha-3',
      ask: 'What is the first thing to check on somebody else’s bar chart?',
      kind: 'choice',
      options: [
        'Whether the axis starts at zero',
        'The colour of the bars',
        'How many bars there are',
      ],
      answer: 'Whether the axis starts at zero',
      teach: 'An axis starting above zero makes small differences look '
        + 'large.',
      level: 5,
    },
  ],
})

/* ── mean, median and mode ──────────────────────────────────────────────── */

teach({
  topicId: 'averages-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The mean is the total divided by how many. '
      + 'The median is the middle value when they are in order. '
      + 'The mode is the most common value. '
      + 'One extreme value drags the mean and leaves the median where it '
      + 'was.',
    method: [
      'Mean: add them all and divide by the count.',
      'Median: put them in order first, then find the middle.',
      'Ask whether any value is far from the rest before choosing.',
    ],
  },

  why:
    'Nine people work in a small shop in Tamale. '
    + 'Eight of them are paid 600 cedis a month. '
    + 'The owner pays himself 6000. '
    + 'Add the nine wages and divide by nine, '
    + 'and the answer is 1200 cedis a month. '
    + 'Not one person in that shop earns 1200. '
    + 'The adding was right and the dividing was right, '
    + 'and the number is still a lie about the shop. '
    + 'Which number would have told the truth, '
    + 'and what would tell you to pick that one?',

  notation:
    'The mean has a symbol: a letter with a short bar over it, '
    + 'written as $\\bar{x}$ and said "x bar". '
    + 'The word "average" on its own is not precise, '
    + 'because all three of these are averages, '
    + 'so a question that says "average" and nothing more means the mean. '
    + 'The range is one number, the largest take away the smallest, '
    + 'so the range of 4, 6, 10 is 6, not "4 to 10". '
    + 'Giving the range as two numbers '
    + 'is the commonest way to lose a mark.',

  idea:
    'An average is one number standing for a whole list, and there are '
    + 'three of them, each found differently and each fair in a '
    + 'different situation. '
    + 'The range is not an average at all: it describes the spread '
    + 'rather than the middle.',

  mechanism:
    'The examination asks which average is fair, '
    + 'and that question has a real answer, '
    + 'so it is worth understanding rather than guessing. '
    + 'The mean uses every value, which is usually its strength '
    + 'and is exactly its weakness when one value is extreme. '
    + 'Take wages in a small workshop: '
    + '400, 420, 450, 430, and the owner on 5000. '
    + 'The mean is about 1340, '
    + 'which is more than any of the four workers earns, '
    + 'so it describes nobody in the room. '
    + 'The median is 430, which describes the typical worker exactly. '
    + 'So an extreme value pulls the mean towards itself '
    + 'and leaves the median where it was, '
    + 'because the median only cares about position in the order. '
    + 'The mode has its own use. '
    + 'For shoe sizes or favourite subjects the mean is meaningless, '
    + 'since there is no such thing as an average favourite subject, '
    + 'but the most common one is exactly what a shopkeeper needs. '
    + 'So the rule is this. '
    + 'Use the mean when the values are fairly even. '
    + 'Use the median when one or two values are far from the rest. '
    + 'Use the mode when the data is categories rather than numbers.',

  recap:
    'The mean is the one most people call the average. '
    + 'Add all the numbers in the list, '
    + 'then divide by how many numbers there are. '
    + 'Take the list 4, 6, 8, 10. '
    + 'They add up to 28, and there are 4 of them, '
    + 'so the mean is $28 \\div 4$, which is 7. '
    + 'That single number stands for the whole list. '
    + 'This topic keeps the mean, '
    + 'and adds two more averages for the lists where the mean misleads.',

  method: [
    'Count how many values there are.',
    'Mean: add them all, divide by the count.',
    'Median: write them in order, then take the middle.',
    'If the count is even, average the two middle values.',
    'Mode: find the value appearing most often.',
    'Look for any value far from the rest.',
    'If there is one, say the median is the fairer summary and why.',
    'For categories, use the mode.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Find the mean of 4, 7, 9, 10, 10.',
      steps: [
        'Add them: $4 + 7 + 9 + 10 + 10 = 40$.',
        'There are 5 values.',
      ],
      answer: '8.',
    },
    {
      level: 4,
      ask: 'Find the median of 12, 5, 9, 20, 7, 11.',
      steps: [
        'Put them in order: 5, 7, 9, 11, 12, 20.',
        'Six values, so take the middle two: 9 and 11.',
        'Average them.',
      ],
      answer: '10.',
    },
    {
      level: 5,
      ask: 'Five people earn 400, 420, 430, 450 and 5000 cedis. '
        + 'Which average describes the group fairly, and why?',
      steps: [
        'The mean is $6700 \\div 5$, which is 1340.',
        'Nobody earns near 1340 except the one person far above it.',
        'The median is the third value in order, 430.',
        'Four of the five earn close to 430.',
      ],
      answer: 'The median, 430. '
        + 'The single large wage drags the mean up to 1340, '
        + 'which describes nobody in the group.',
    },
  ],

  traps: [
    {
      mistake: 'Finding the median without putting the list in order.',
      why: 'The median is about position in the order. '
        + 'Unordered, the middle value means nothing.',
    },
    {
      mistake: 'Taking one middle value when the count is even.',
      why: 'There are two. The median is their mean.',
    },
    {
      mistake: 'Using the mean when one value is far from the rest.',
      why: 'The mean is pulled towards the extreme value '
        + 'and stops describing the typical case.',
    },
    {
      mistake: 'Calling the range an average.',
      why: 'The range measures spread, not the middle.',
    },
  ],

  extension:
    'For grouped data you cannot find the exact mean, '
    + 'because the individual values are no longer there. '
    + 'You use the midpoint of each group instead, '
    + 'which gives an estimate and should be called one.',

  figure: {
    alt: 'Five wages marked on a line. Four workers are bunched together '
      + 'between 400 and 450, and the owner is far out at 5,000. The '
      + 'median sits with the four workers at 430, and the mean has '
      + 'been pulled out to about 1,340, which is more than any worker '
      + 'earns.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">one large value pulls the mean and leaves the median</text>'
      + '<line x1="60" y1="220" x2="580" y2="220" stroke-width="4"/>'
      + '<circle cx="60" cy="220" r="3" fill="currentColor"/>'
      + '<circle cx="66" cy="220" r="3" fill="currentColor"/>'
      + '<circle cx="72" cy="220" r="3" fill="currentColor"/>'
      + '<circle cx="78" cy="220" r="3" fill="currentColor"/>'
      + '<line x1="92" y1="192" x2="78" y2="212"/>'
      + '<text x="96" y="170" font-size="14" text-anchor="start" fill="currentColor" stroke="none">four workers,</text>'
      + '<text x="96" y="190" font-size="14" text-anchor="start" fill="currentColor" stroke="none">on 400 to 450</text>'
      + '<circle cx="574" cy="220" r="9" fill="#c8433a" stroke="#c8433a"/>'
      + '<text x="574" y="170" font-size="14" text-anchor="end" fill="#c8433a" stroke="none">the owner,</text>'
      + '<text x="574" y="190" font-size="14" text-anchor="end" fill="#c8433a" stroke="none">on 5,000</text>'
      + '<line x1="72" y1="206" x2="72" y2="300" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="84" y="322" font-size="15" text-anchor="start" fill="#0f8a4d" stroke="none">the median, 430</text>'
      + '<text x="84" y="344" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">the typical worker, exactly</text>'
      + '<line x1="166" y1="206" x2="166" y2="252" stroke="#c8433a" stroke-width="4"/>'
      + '<text x="178" y="270" font-size="15" text-anchor="start" fill="#c8433a" stroke="none">the mean, about 1,340</text>'
      + '<text x="178" y="292" font-size="13" text-anchor="start" fill="#c8433a" stroke="none">more than any worker earns, so it describes nobody</text>'
      + '<text x="320" y="384" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the median only cares about position in the order</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The three averages and the range, and when each one is fair',
      columns: ['Measure', 'How to find it', 'When it is the fair one'],
      rows: [
        [
          'Mean',
          'Add them all and divide by how many there are',
          'When the values are fairly even',
        ],
        [
          'Median',
          'Put them in order and take the middle one, or the mean of the middle two',
          'When one or two values are far from the rest',
        ],
        [
          'Mode',
          'The value that appears most often',
          'When the data is categories rather than numbers',
        ],
        [
          'Range',
          'The largest minus the smallest',
          'Never. It is not an average at all: it describes the spread',
        ],
      ],
      note: 'There is no such thing as an average favourite subject, but '
        + 'there is a most common one, and that is exactly what a '
        + 'shopkeeper needs.',
    },
    {
      caption: 'The same five wages, measured four ways',
      columns: ['Measure', 'Its value', 'Who or what it describes'],
      rows: [
        [
          'Mean',
          'About 1,340 cedis',
          'Nobody in the room, because the owner pulls it upwards',
        ],
        ['Median', '430 cedis', 'The typical worker, exactly'],
        ['Mode', 'There is none', 'Nothing, because no wage repeats'],
        ['Range', '4,600 cedis', 'How far apart the top and the bottom are'],
      ],
      note: 'The wages are 400, 420, 430, 450 and the owner on 5,000. The '
        + 'mean uses every value, which is its strength until one value '
        + 'is extreme.',
    },
  ],
  questions: [
    {
      id: 'avg-1',
      ask: 'What is the mode of 3, 5, 5, 7, 9?',
      kind: 'choice',
      options: ['5', '5.8', '7'],
      answer: '5',
      teach: 'The mode is the value appearing most often.',
      level: 3,
    },
    {
      id: 'avg-2',
      ask: 'What must you do before finding a median?',
      kind: 'choice',
      options: [
        'Put the values in order',
        'Add them up',
        'Find the range',
      ],
      answer: 'Put the values in order',
      teach: 'The median is defined by position in the ordered list.',
      level: 4,
    },
    {
      id: 'avg-3',
      ask: 'One value in a list is far above all the others. '
        + 'Which average is fairer?',
      kind: 'choice',
      options: ['The median', 'The mean', 'The range'],
      answer: 'The median',
      teach: 'The extreme value drags the mean towards it. '
        + 'The median only cares about position, so it stays put.',
      level: 5,
    },
  ],
})
