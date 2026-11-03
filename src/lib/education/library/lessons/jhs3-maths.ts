/**
 * Stored lessons for JHS 3 Mathematics.
 *
 * Written at about grade 8, with a `brief` form on every topic.
 *
 * ── The examination year, so the lessons name what is marked ───────────────
 *
 * JHS 3 ends in the certificate examination, and these ten topics are where
 * most of its marks sit. So each lesson states the thing that actually loses
 * the mark, rather than only the method. In commercial arithmetic it is
 * which amount the percentage is of. In inequalities it is the one case
 * where the sign turns round. In bearings it is measuring from north
 * clockwise with three figures, every time. In scale drawing it is carrying
 * the units through the conversion.
 *
 * `linear-graphs-jhs` and `simultaneous-jhs` are written to meet: two
 * equations are two lines, and solving them is finding where the lines
 * cross. A learner who sees that has a check on every algebraic answer,
 * because they can draw it.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── commercial arithmetic ──────────────────────────────────────────────── */

teach({
  topicId: 'money-commercial',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Profit and loss are worked on the cost price. '
      + 'Discount and commission are worked on the marked price or the '
      + 'sales. '
      + 'Simple interest is principal times rate times time, over a '
      + 'hundred. '
      + 'Hire purchase totals the deposit and all the instalments.',
    method: [
      'Write down which amount the percentage is of.',
      'Profit and loss: on cost. Discount: on marked price.',
      'For hire purchase, add everything actually paid.',
    ],
  },

  idea:
    'Five calculations are set in this topic, '
    + 'and four of them are a percentage of something. '
    + 'The whole difficulty is which something. '
    + 'Profit and loss are measured against the cost price, '
    + 'discount against the marked price, '
    + 'commission against the value sold, '
    + 'and simple interest against the principal. '
    + 'The fifth, the hire purchase price, '
    + 'is not a percentage of anything: '
    + 'it is the deposit plus every instalment, added up, '
    + 'and it always comes to more than the cash price.',

  mechanism:
    'Every error in this topic is the same error: '
    + 'the percentage was taken of the wrong amount. '
    + 'So the first line of your working should name the base, '
    + 'and the rule is fixed by what each percentage is for. '
    + 'Profit is a return on what you put in, '
    + 'so it is measured against the cost price, '
    + 'because that is what you put in. '
    + 'A trader who buys at 80 and sells at 100 has made 20 on 80, '
    + 'which is 25 per cent, not 20 per cent. '
    + 'Discount is a reduction from an advertised price, '
    + 'so it is measured against the marked price, '
    + 'because that is what is being reduced. '
    + 'Once the base is written down the arithmetic cannot go wrong. '
    + 'Hire purchase is worth understanding rather than calculating, '
    + 'because the examination asks what it costs. '
    + 'Add the deposit to all the instalments '
    + 'and compare with the cash price, '
    + 'and the difference is what the credit cost. '
    + 'It is often a quarter of the price again, '
    + 'and nobody is cheating: '
    + 'the seller gave up the money for a year and is charging for it. '
    + 'Saying that plainly is more useful than calling it unfair, '
    + 'because the real question for a buyer '
    + 'is whether having the thing now is worth that much.',

  recap:
    'You can find a percentage of an amount '
    + 'and work out a percentage change. '
    + 'This applies both to money, '
    + 'where the only difficulty is which amount the percentage is of.',

  method: [
    'Write down the cost price, marked price and selling price you are '
      + 'given.',
    'Name which amount the percentage is of before calculating.',
    'Profit or loss: the difference, over the cost price.',
    'Discount: the reduction, over the marked price.',
    'Commission: the percentage of the value sold.',
    'Simple interest: principal times rate times time, over a hundred.',
    'Hire purchase: deposit plus all instalments.',
    'Compare with the cash price to find what the credit cost.',
    'Give the currency and round money to two decimal places.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A trader buys for 80 cedis and sells for 100. '
        + 'Find the percentage profit.',
      steps: [
        'Profit is 20.',
        'The base is the cost price, 80.',
        '$20 \\div 80 = 0.25$.',
      ],
      answer: '25 per cent.',
    },
    {
      level: 4,
      ask: 'Find the simple interest on 500 cedis at 6 per cent for 3 '
        + 'years.',
      steps: [
        'Interest is principal times rate times time over 100.',
        '$500 \\times 6 \\times 3 = 9000$.',
        'Divide by 100.',
      ],
      answer: '90 cedis.',
    },
    {
      level: 5,
      ask: 'A fridge costs 1200 cedis cash. '
        + 'On hire purchase it is 300 deposit and 12 monthly payments of '
        + '90. '
        + 'How much more does the credit cost?',
      steps: [
        '12 payments of 90 is 1080.',
        'Add the deposit: $1080 + 300 = 1380$.',
        'Compare with 1200.',
      ],
      answer: '180 cedis more. '
        + 'That is 15 per cent of the cash price, '
        + 'and it is the charge for paying over a year.',
    },
  ],

  traps: [
    {
      mistake: 'Working percentage profit on the selling price.',
      why: 'Profit is a return on what you put in, '
        + 'so the base is the cost price.',
    },
    {
      mistake: 'Working discount on the selling price after the discount.',
      why: 'Discount is a reduction from the marked price, '
        + 'so the marked price is the base.',
    },
    {
      mistake: 'Forgetting the deposit in a hire purchase total.',
      why: 'It was paid, so it counts.',
    },
    {
      mistake: 'Leaving the currency off an answer.',
      why: 'Money answers are marked with their unit.',
    },
  ],

  figure: {
    alt: 'Two bars. The upper bar is the cost price of 80 cedis. The lower '
      + 'bar is the selling price of 100 cedis, drawn as the same 80 with '
      + 'a further 20 on the end marked in green as the profit. An arrow '
      + 'from that profit to a green box reads 20 out of 80 is 25 per '
      + 'cent, and a second arrow to a red box reads 20 out of 100 is 20 '
      + 'per cent, which is wrong.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="26" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">the profit is a percentage of which bar?</text>'
      + '<text x="112" y="110" font-size="15" text-anchor="end" fill="currentColor" stroke="none">cost price</text>'
      + '<rect x="120" y="82" width="240" height="46"/>'
      + '<text x="240" y="112" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">80 cedis</text>'
      + '<text x="112" y="190" font-size="15" text-anchor="end" fill="currentColor" stroke="none">selling price</text>'
      + '<rect x="120" y="162" width="240" height="46"/>'
      + '<text x="240" y="192" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">80 cedis</text>'
      + '<rect x="360" y="162" width="60" height="46" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="430" y="186" font-size="15" fill="#0f8a4d" stroke="none">20 cedis</text>'
      + '<text x="430" y="204" font-size="15" fill="#0f8a4d" stroke="none">of profit</text>'
      + '<line x1="380" y1="210" x2="262" y2="248" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 256 250 L 268 238 L 272 252 Z" fill="#0f8a4d" stroke="none"/>'
      + '<rect x="24" y="254" width="230" height="70" rx="6" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="139" y="282" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">20 out of 80</text>'
      + '<text x="139" y="306" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">is 25 per cent</text>'
      + '<line x1="400" y1="210" x2="480" y2="248" stroke="#c8433a" stroke-width="3"/>'
      + '<path d="M 486 250 L 472 252 L 478 238 Z" fill="#c8433a" stroke="none"/>'
      + '<rect x="386" y="254" width="230" height="70" rx="6" stroke="#c8433a" stroke-width="3"/>'
      + '<text x="501" y="282" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">20 out of 100</text>'
      + '<text x="501" y="306" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">is 20 per cent: wrong</text>'
      + '<text x="320" y="366" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">profit is a return on what you put in,</text>'
      + '<text x="320" y="388" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so the base is what you put in</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each calculation, the amount the percentage is taken of, '
        + 'and how to work it out',
      columns: [
        'What you are finding',
        'The amount the percentage is of',
        'How to work it out',
      ],
      rows: [
        [
          'Percentage profit or loss',
          'The cost price, because that is what you put in',
          'The difference between the two prices, divided by the cost '
            + 'price, times a hundred',
        ],
        [
          'Discount',
          'The marked price, because that is what is being reduced',
          'That percentage of the marked price, then taken off it',
        ],
        [
          'Commission',
          'The value sold',
          'That percentage of the value sold',
        ],
        [
          'Simple interest',
          'The principal',
          'Principal times rate times time, divided by a hundred',
        ],
        [
          'Hire purchase price',
          'Nothing. It is a total, not a percentage',
          'The deposit plus every instalment, added up',
        ],
      ],
      note: 'Write the middle column down as the first line of your '
        + 'working. The hire purchase price always comes to more than the '
        + 'cash price, and the difference is what the credit cost.',
    },
  ],

  extension:
    'Compound interest adds each year’s interest to the principal, '
    + 'so the next year earns on more. '
    + 'Over long periods it is much larger than simple interest, '
    + 'and it is what a bank actually uses.',

  questions: [
    {
      id: 'com-1',
      ask: 'Percentage profit is worked out on which amount?',
      kind: 'choice',
      options: ['The cost price', 'The selling price', 'The profit'],
      answer: 'The cost price',
      teach: 'Profit is a return on what you put in.',
      level: 3,
    },
    {
      id: 'com-2',
      ask: 'Simple interest on 200 at 5 per cent for 2 years is:',
      kind: 'choice',
      options: ['20', '10', '50'],
      answer: '20',
      teach: '200 x 5 x 2 = 2000, divided by 100.',
      level: 4,
    },
    {
      id: 'com-3',
      ask: 'Why is a hire purchase price higher than the cash price?',
      kind: 'choice',
      options: [
        'The seller is charging for giving up the money for a time',
        'The goods are better quality',
        'Tax is added',
      ],
      answer: 'The seller is charging for giving up the money for a time',
      teach: 'The question for the buyer is whether having it now is worth '
        + 'that much.',
      level: 5,
    },
  ],
})

/* ── simultaneous linear equations ─────────────────────────────────────── */

teach({
  topicId: 'simultaneous-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Two equations with two unknowns have one solution, '
      + 'which satisfies both. '
      + 'Elimination makes one letter’s coefficients match and subtracts. '
      + 'Substitution puts one equation into the other. '
      + 'Always check your pair in BOTH equations.',
    method: [
      'Choose elimination when a coefficient can be matched easily.',
      'Choose substitution when one letter is already alone.',
      'Check the answer in both equations, not one.',
    ],
  },

  idea:
    'A pair of simultaneous equations is two equations '
    + 'that are both true for the same pair of values. '
    + 'Two methods are set, elimination and substitution, '
    + 'and either will work on any pair. '
    + 'Both do the same job, '
    + 'which is to get rid of one of the two letters '
    + 'so that what is left is an ordinary equation in one unknown. '
    + 'The answer is a pair, and it has to satisfy both equations, '
    + 'so it is checked in both.',

  mechanism:
    'The reason there is exactly one answer, '
    + 'and the reason the methods work, '
    + 'is clearest if you picture the two equations as two lines. '
    + 'Each equation on its own is satisfied by infinitely many pairs, '
    + 'which is why it draws a whole line. '
    + 'Asking for a pair that satisfies both '
    + 'is asking for a point on both lines, '
    + 'which is where they cross. '
    + 'Two straight lines cross once, '
    + 'unless they are parallel, in which case there is no solution, '
    + 'or they are the same line, in which case there are infinitely many. '
    + 'So the algebra is finding a crossing point, '
    + 'and you can always check it by drawing. '
    + 'Neither method is a trick, '
    + 'and neither is better than the other in general: '
    + 'each one is just a legitimate way of building a third true '
    + 'statement that has one letter fewer in it. '
    + 'And checking in both equations is not optional: '
    + 'an answer satisfying only one of them is a sign of exactly the '
    + 'arithmetic slip these questions produce.',

  recap:
    'You can solve one equation with one unknown. '
    + 'This has two unknowns, '
    + 'which needs two equations, '
    + 'and the work is getting down to one unknown.',

  method: [
    'Label the equations 1 and 2.',
    'Decide which letter to remove.',
    'Multiply one or both equations to match that letter’s coefficient.',
    'Add if the signs differ, subtract if they match.',
    'Solve the single equation that remains.',
    'Substitute back into the simpler original equation.',
    'Write the answer as a pair.',
    'Check the pair in both original equations.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Solve $x + y = 10$ and $x - y = 2$.',
      steps: [
        'Add the two equations: the y terms cancel.',
        '$2x = 12$, so $x = 6$.',
        'Substitute: $6 + y = 10$.',
      ],
      answer: '$x = 6$ and $y = 4$. '
        + 'Check both: $6 + 4 = 10$ and $6 - 4 = 2$.',
    },
    {
      level: 4,
      ask: 'Solve $2x + 3y = 16$ and $x - y = 3$.',
      steps: [
        'The second gives $x = y + 3$.',
        'Substitute: $2(y + 3) + 3y = 16$.',
        '$2y + 6 + 3y = 16$, so $5y = 10$ and $y = 2$.',
        'Then $x = 5$.',
      ],
      answer: '$x = 5$ and $y = 2$. '
        + 'Check: $10 + 6 = 16$ and $5 - 2 = 3$.',
    },
    {
      level: 5,
      ask: 'Why does a pair of simultaneous equations usually have exactly '
        + 'one solution?',
      steps: [
        'Each equation draws a straight line.',
        'A pair satisfying both is a point on both lines.',
        'Two straight lines cross at one point.',
      ],
      answer: 'Because each equation is a line, '
        + 'and the solution is where they cross. '
        + 'Two lines cross once, '
        + 'unless they are parallel, when there is no solution, '
        + 'or identical, when there are infinitely many.',
    },
  ],

  traps: [
    {
      mistake: 'Adding when you should subtract.',
      why: 'Add when the signs of the matched terms differ, '
        + 'subtract when they are the same.',
    },
    {
      mistake: 'Multiplying only one side of an equation.',
      why: 'Both sides, or the equation is no longer true.',
    },
    {
      mistake: 'Checking in only one equation.',
      why: 'An answer that fits one and not the other is the usual sign of '
        + 'an arithmetic slip.',
    },
    {
      mistake: 'Giving only one value as the answer.',
      why: 'The solution is a pair. Both letters are wanted.',
    },
  ],

  figure: {
    alt: 'A grid with x and y axes. Two straight lines are drawn on it. '
      + 'One runs down to the right and is labelled x plus y equals 10. '
      + 'The other runs up to the right and is labelled x minus y equals '
      + '2. They cross once, at the point 6 comma 4, which is marked with '
      + 'a green dot. A note says that this crossing point is the '
      + 'solution, and that parallel lines would never cross while '
      + 'identical lines would cross everywhere.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="24" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">the solution is where the two lines cross</text>'
      + '<line x1="124" y1="66" x2="124" y2="338" stroke-width="1"/>'
      + '<line x1="168" y1="66" x2="168" y2="338" stroke-width="1"/>'
      + '<line x1="212" y1="66" x2="212" y2="338" stroke-width="1"/>'
      + '<line x1="256" y1="66" x2="256" y2="338" stroke-width="1"/>'
      + '<line x1="300" y1="66" x2="300" y2="338" stroke-width="1"/>'
      + '<line x1="344" y1="66" x2="344" y2="338" stroke-width="1"/>'
      + '<line x1="80" y1="286" x2="356" y2="286" stroke-width="1"/>'
      + '<line x1="80" y1="242" x2="356" y2="242" stroke-width="1"/>'
      + '<line x1="80" y1="198" x2="356" y2="198" stroke-width="1"/>'
      + '<line x1="80" y1="154" x2="356" y2="154" stroke-width="1"/>'
      + '<line x1="80" y1="110" x2="356" y2="110" stroke-width="1"/>'
      + '<line x1="80" y1="66" x2="356" y2="66" stroke-width="1"/>'
      + '<line x1="72" y1="330" x2="362" y2="330"/>'
      + '<path d="M 360 322 L 376 330 L 360 338 Z" fill="currentColor" stroke="none"/>'
      + '<text x="382" y="336" font-size="15" fill="currentColor" stroke="none">x</text>'
      + '<line x1="80" y1="338" x2="80" y2="58"/>'
      + '<path d="M 72 60 L 80 44 L 88 60 Z" fill="currentColor" stroke="none"/>'
      + '<text x="80" y="36" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">y</text>'
      + '<text x="124" y="350" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">2</text>'
      + '<text x="212" y="350" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">6</text>'
      + '<text x="300" y="350" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">10</text>'
      + '<text x="72" y="291" font-size="13" text-anchor="end" fill="currentColor" stroke="none">2</text>'
      + '<text x="72" y="203" font-size="13" text-anchor="end" fill="currentColor" stroke="none">6</text>'
      + '<text x="72" y="115" font-size="13" text-anchor="end" fill="currentColor" stroke="none">10</text>'
      + '<line x1="80" y1="110" x2="300" y2="330"/>'
      + '<text x="86" y="100" font-size="15" fill="currentColor" stroke="none">x + y = 10</text>'
      + '<line x1="124" y1="330" x2="344" y2="110"/>'
      + '<text x="350" y="106" font-size="15" fill="currentColor" stroke="none">x - y = 2</text>'
      + '<circle cx="212" cy="242" r="7" fill="#0f8a4d" stroke="none"/>'
      + '<text x="224" y="234" font-size="15" fill="#0f8a4d" stroke="none">(6, 4)</text>'
      + '<text x="408" y="150" font-size="16" fill="#0f8a4d" stroke="none">they cross once,</text>'
      + '<text x="408" y="172" font-size="16" fill="#0f8a4d" stroke="none">and that one point</text>'
      + '<text x="408" y="194" font-size="16" fill="#0f8a4d" stroke="none">is the answer:</text>'
      + '<text x="408" y="216" font-size="16" fill="#0f8a4d" stroke="none">x = 6 and y = 4</text>'
      + '<text x="408" y="252" font-size="14" fill="currentColor" stroke="none">parallel lines never</text>'
      + '<text x="408" y="270" font-size="14" fill="currentColor" stroke="none">cross, so no solution</text>'
      + '<text x="408" y="294" font-size="14" fill="currentColor" stroke="none">identical lines cross</text>'
      + '<text x="408" y="312" font-size="14" fill="currentColor" stroke="none">everywhere, so endless</text>'
      + '<text x="320" y="386" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the algebra finds this point without drawing it</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The two methods, when to choose each, and why each is '
        + 'allowed',
      columns: [
        'Method',
        'What you do',
        'Choose it when',
        'Why it is allowed',
      ],
      rows: [
        [
          'Elimination',
          'Multiply one or both equations so that one letter has the same '
            + 'coefficient, then add or subtract to remove it',
          'A coefficient is already matched, or is easy to match',
          'Adding equal things to equal things keeps them equal, so what '
            + 'you build is a third true statement with one letter gone',
        ],
        [
          'Substitution',
          'Rearrange one equation to get a letter alone, then put that '
            + 'expression in place of the letter in the other',
          'One letter already stands alone, or nearly does',
          'If a letter equals something, that something may be written '
            + 'anywhere the letter appears',
        ],
      ],
      note: 'In elimination, add when the matched terms have opposite '
        + 'signs and subtract when their signs are the same.',
    },
    {
      caption: 'What the two lines can do, '
        + 'and how many solutions each case means',
      columns: [
        'What the lines do',
        'How many solutions',
        'What you see in the algebra',
      ],
      rows: [
        [
          'They cross once',
          'Exactly one pair',
          'One letter goes, and the other comes out with a single value',
        ],
        [
          'They are parallel',
          'None at all',
          'Both letters vanish and what is left is false, such as 0 = 5',
        ],
        [
          'They are the same line',
          'Endlessly many',
          'Both letters vanish and what is left is true, such as 0 = 0',
        ],
      ],
      note: 'The first row is the usual case. '
        + 'The other two are worth recognising, '
        + 'so that both letters vanishing does not look like a mistake.',
    },
  ],

  extension:
    'A word problem with two unknowns becomes a pair of equations. '
    + 'The method is the one you know. '
    + 'Name both letters. '
    + 'Write every quantity in terms of them. '
    + 'Then find the two separate statements of equality.',

  questions: [
    {
      id: 'sim-1',
      ask: 'Solving x + y = 7 and x - y = 1, what is x?',
      kind: 'choice',
      options: ['4', '3', '6'],
      answer: '4',
      teach: 'Adding the equations gives 2x = 8.',
      level: 3,
    },
    {
      id: 'sim-2',
      ask: 'When should you add the two equations rather than subtract?',
      kind: 'choice',
      options: [
        'When the matched terms have opposite signs',
        'When both are positive',
        'Always',
      ],
      answer: 'When the matched terms have opposite signs',
      teach: 'Opposite signs cancel on adding; '
        + 'like signs cancel on subtracting.',
      level: 4,
    },
    {
      id: 'sim-3',
      ask: 'What does the solution of a pair of equations represent on a '
        + 'graph?',
      kind: 'choice',
      options: [
        'Where the two lines cross',
        'The gradient of each line',
        'Where each line meets the y axis',
      ],
      answer: 'Where the two lines cross',
      teach: 'Which is why there is normally exactly one solution.',
      level: 5,
    },
  ],
})

/* ── linear inequalities ──────────────────────────────────────────────── */

teach({
  topicId: 'inequalities-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An inequality is solved like an equation, with one exception: '
      + 'multiplying or dividing by a negative number turns the sign round. '
      + 'On a number line, '
      + 'an open circle excludes the value and a filled circle includes it.',
    method: [
      'Solve as an equation until a negative multiplier appears.',
      'If you multiply or divide by a negative, flip the sign.',
      'Test one value from your answer in the original.',
    ],
  },

  idea:
    'An inequality says one side is less than, '
    + 'or greater than, or not more than, the other. '
    + 'You solve it the way you solve an equation. '
    + 'Do the same thing to both sides. '
    + 'There is one exception. '
    + 'If you multiply or divide by a NEGATIVE number, '
    + 'the sign turns round. '
    + 'The answer is a range, not a single value. '
    + 'It is drawn on a number line, '
    + 'with a circle at the end value '
    + 'and an arrow pointing the way the solution goes.',

  mechanism:
    'The sign reversing looks like a rule to memorise '
    + 'and is something you can see on the number line in one move. '
    + 'Start with something true: $2 < 5$. '
    + 'Multiply both sides by $-1$. '
    + 'You now have $-2$ and $-5$, '
    + 'and $-2$ is GREATER than $-5$, '
    + 'because it is nearer zero. '
    + 'So the order of the two numbers has swapped, '
    + 'which is exactly what multiplying by a negative does: '
    + 'it flips the number line end for end. '
    + 'Anything that was on the left is now on the right. '
    + 'That is why the sign has to turn round, '
    + 'and why it never happens when you add or subtract, '
    + 'since those slide the whole line without flipping it. '
    + 'If you can picture the flip you will never lose the mark. '
    + 'There is also a way to avoid the case entirely: '
    + 'move the unknown to whichever side keeps its coefficient positive. '
    + 'Instead of solving $-2x > 6$, '
    + 'add $2x$ to both sides and work with $0 > 6 + 2x$, '
    + 'which needs no flip at all. '
    + 'And whatever method you use, '
    + 'test one number from your answer in the original inequality, '
    + 'because that catches a missed flip immediately.',

  recap:
    'You can solve a linear equation by doing the same thing to both '
    + 'sides. '
    + 'This is the same work with one extra rule, '
    + 'and one picture explains the rule.',

  method: [
    'Simplify both sides.',
    'Collect the unknown on one side by adding or subtracting.',
    'Prefer the side that leaves its coefficient positive.',
    'Divide by the coefficient.',
    'If that coefficient was negative, reverse the sign.',
    'Write the solution with the unknown on the left.',
    'Draw the number line with the right kind of circle and an arrow.',
    'Test one value from your solution in the original inequality.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Solve $3x + 2 < 14$.',
      steps: [
        'Subtract 2: $3x < 12$.',
        'Divide by 3, which is positive, so no flip.',
      ],
      answer: '$x < 4$.',
    },
    {
      level: 4,
      ask: 'Solve $-2x > 6$.',
      steps: [
        'Divide both sides by negative 2.',
        'Dividing by a negative reverses the sign.',
      ],
      answer: '$x < -3$. '
        + 'Test $x = -4$: $-2 \\times -4 = 8$, which is greater than 6.',
    },
    {
      level: 5,
      ask: 'Why does multiplying an inequality by a negative number '
        + 'reverse it?',
      steps: [
        'Take $2 < 5$, which is true.',
        'Multiply by $-1$: you now have $-2$ and $-5$.',
        'And $-2 > -5$.',
        'So the order has swapped.',
      ],
      answer: 'Because multiplying by a negative flips the number line end '
        + 'for end, '
        + 'so whatever was smaller becomes larger. '
        + 'The sign must turn round to stay true.',
    },
  ],

  traps: [
    {
      mistake: 'Forgetting to reverse the sign after dividing by a '
        + 'negative.',
      why: 'The commonest error in the topic. '
        + 'Test a value and it shows up at once.',
    },
    {
      mistake: 'Reversing the sign after adding a negative number.',
      why: 'Only multiplying and dividing flip it. '
        + 'Adding slides the line without flipping it.',
    },
    {
      mistake: 'Using a filled circle for < or >.',
      why: 'Those exclude the value, so the circle is open.',
    },
    {
      mistake: 'Giving a single value as the answer.',
      why: 'An inequality is satisfied by a range.',
    },
  ],

  figure: {
    alt: 'Two number lines. On the upper one, 2 and 5 are marked, with 2 '
      + 'to the left of 5, under the words 2 is less than 5. Two arrows '
      + 'cross as they lead down to the lower line, where negative 5 and '
      + 'negative 2 are marked, with negative 5 now on the left and '
      + 'negative 2 on the right. The caption under it reads that '
      + 'negative 2 is greater than negative 5, so the sign turned round.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="24" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">multiplying by a negative flips the line</text>'
      + '<text x="320" y="56" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">2 is less than 5, which is true</text>'
      + '<line x1="50" y1="96" x2="590" y2="96"/>'
      + '<line x1="70" y1="90" x2="70" y2="102" stroke-width="1"/>'
      + '<line x1="220" y1="90" x2="220" y2="102" stroke-width="1"/>'
      + '<line x1="320" y1="88" x2="320" y2="104"/>'
      + '<line x1="420" y1="90" x2="420" y2="102" stroke-width="1"/>'
      + '<line x1="570" y1="90" x2="570" y2="102" stroke-width="1"/>'
      + '<text x="320" y="82" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">0</text>'
      + '<circle cx="420" cy="96" r="6" fill="#0f8a4d" stroke="none"/>'
      + '<text x="420" y="80" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">2</text>'
      + '<circle cx="570" cy="96" r="6" fill="#0f8a4d" stroke="none"/>'
      + '<text x="570" y="80" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">5</text>'
      + '<line x1="418" y1="106" x2="228" y2="172"/>'
      + '<path d="M 222 174 L 234 162 L 239 176 Z" fill="currentColor" stroke="none"/>'
      + '<line x1="568" y1="106" x2="78" y2="172"/>'
      + '<path d="M 72 174 L 84 162 L 89 176 Z" fill="currentColor" stroke="none"/>'
      + '<line x1="50" y1="186" x2="590" y2="186"/>'
      + '<line x1="70" y1="180" x2="70" y2="192" stroke-width="1"/>'
      + '<line x1="220" y1="180" x2="220" y2="192" stroke-width="1"/>'
      + '<line x1="320" y1="178" x2="320" y2="194"/>'
      + '<line x1="420" y1="180" x2="420" y2="192" stroke-width="1"/>'
      + '<line x1="570" y1="180" x2="570" y2="192" stroke-width="1"/>'
      + '<text x="320" y="210" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">0</text>'
      + '<circle cx="70" cy="186" r="6" fill="#0f8a4d" stroke="none"/>'
      + '<text x="70" y="212" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">-5</text>'
      + '<circle cx="220" cy="186" r="6" fill="#0f8a4d" stroke="none"/>'
      + '<text x="220" y="212" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">-2</text>'
      + '<text x="320" y="244" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">and now -2 is greater than -5</text>'
      + '<text x="320" y="286" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">adding or subtracting only slides the line, so no flip</text>'
      + '<text x="320" y="316" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">and you can dodge the case: keep the coefficient positive</text>'
      + '<circle cx="176" cy="362" r="7"/>'
      + '<text x="192" y="368" font-size="14" fill="currentColor" stroke="none">open: not included</text>'
      + '<circle cx="396" cy="362" r="7" fill="currentColor" stroke="none"/>'
      + '<text x="412" y="368" font-size="14" fill="currentColor" stroke="none">filled: included</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What you may do to an inequality, '
        + 'and what each thing does to the sign',
      columns: ['What you do to both sides', 'What the sign does', 'Why'],
      rows: [
        [
          'Add or subtract any number',
          'Nothing. It stays as it was',
          'Adding slides the whole number line along without turning it '
            + 'round',
        ],
        [
          'Multiply or divide by a positive number',
          'Nothing. It stays as it was',
          'The line is stretched or squeezed, but left stays left and '
            + 'right stays right',
        ],
        [
          'Multiply or divide by a negative number',
          'It reverses',
          'The line is flipped end for end, '
            + 'so whatever was the smaller is now the larger',
        ],
      ],
      note: 'Only the last row changes anything, '
        + 'and forgetting it is the commonest error in the topic. '
        + 'Test one number from your answer in the original inequality '
        + 'and a missed flip shows up at once.',
    },
    {
      caption: 'How to draw each kind of inequality on a number line',
      columns: [
        'The inequality',
        'Said in words',
        'The circle at the end value',
        'The arrow',
      ],
      rows: [
        [
          'x < 4',
          'x is less than 4',
          'Open, because 4 itself is not included',
          'To the left, away from 4',
        ],
        [
          'x > 4',
          'x is greater than 4',
          'Open, because 4 itself is not included',
          'To the right',
        ],
        [
          'x is not more than 4',
          'x is less than 4, or equal to it',
          'Filled, because 4 is included',
          'To the left',
        ],
        [
          'x is not less than 4',
          'x is greater than 4, or equal to it',
          'Filled, because 4 is included',
          'To the right',
        ],
      ],
      note: 'There is always an arrow, '
        + 'because an inequality is satisfied by a range '
        + 'and never by one value.',
    },
  ],

  extension:
    'Two inequalities can be combined. '
    + 'Take 2 less than x, and x not more than 5. '
    + 'That is written $2 < x \\le 5$. '
    + 'It is drawn as a segment with one open end and one filled end.',

  questions: [
    {
      id: 'inq-1',
      ask: 'Solve 2x < 10.',
      kind: 'choice',
      options: ['x < 5', 'x > 5', 'x < 20'],
      answer: 'x < 5',
      teach: 'Dividing by a positive number, so the sign does not change.',
      level: 3,
    },
    {
      id: 'inq-2',
      ask: 'Solve -3x < 9.',
      kind: 'choice',
      options: ['x > -3', 'x < -3', 'x < 3'],
      answer: 'x > -3',
      teach: 'Dividing by negative 3 reverses the sign.',
      level: 4,
    },
    {
      id: 'inq-3',
      ask: 'Which circle marks x < 4 on a number line?',
      kind: 'choice',
      options: [
        'An open circle at 4',
        'A filled circle at 4',
        'No circle',
      ],
      answer: 'An open circle at 4',
      teach: '4 itself is not included, so the circle is open.',
      level: 5,
    },
  ],
})

/* ── changing the subject of a formula ───────────────────────────────── */

teach({
  topicId: 'change-of-subject',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Changing the subject means getting one letter alone on one side. '
      + 'It is solving an equation, '
      + 'except that the answer is in letters instead of numbers. '
      + 'Undo the operations in reverse order.',
    method: [
      'Decide which letter you want alone.',
      'Work out what is being done to it, in order.',
      'Undo those operations backwards, on both sides.',
    ],
  },

  idea:
    'A formula such as $A = lw$ has $A$ as its subject, '
    + 'because $A$ is the letter standing alone. '
    + 'Changing the subject to $l$ means rearranging it to '
    + '$l = \\frac{A}{w}$. '
    + 'The rules are the rules of an equation: '
    + 'whatever you do to one side you do to the other. '
    + 'Each operation has one that undoes it, '
    + 'and the work is undoing them in the right order. '
    + 'The one case that needs more than that '
    + 'is a letter appearing in more than one term, '
    + 'which has to be collected and factorised first.',

  mechanism:
    'Learners who find this hard are usually treating it as a new topic, '
    + 'and it is solving an equation with letters in place of numbers. '
    + 'Compare them. '
    + 'To solve $3x + 2 = 14$ you subtract 2, then divide by 3. '
    + 'To make $x$ the subject of $y = 3x + 2$ '
    + 'you subtract 2, then divide by 3. '
    + 'The steps are identical, '
    + 'and only the thing on the other side looks unfamiliar. '
    + 'So the method is the one you already have: '
    + 'find what is being done to the letter you want, in order, '
    + 'then undo those things in the reverse order. '
    + 'Last done, first undone. '
    + 'In $y = 3x + 2$, $x$ is multiplied by 3 and then 2 is added, '
    + 'so you take the 2 away first and divide last. '
    + 'Doing it the other way round is the commonest error '
    + 'and it is the same error as in arithmetic. '
    + 'One case needs more than that. '
    + 'If the letter appears twice, '
    + 'no amount of undoing will isolate it, '
    + 'because each move affects one of the two places. '
    + 'You have to gather them onto one side and factorise, '
    + 'so that the letter appears once, in a bracket, '
    + 'and then it can be divided out. '
    + 'That is the only genuinely new step in the topic, '
    + 'and it is why factorising was worth learning.',

  recap:
    'You can solve an equation by undoing operations '
    + 'and you can factorise by taking out a common factor. '
    + 'This uses both, '
    + 'and the only difference is that the answer contains letters.',

  method: [
    'Write down which letter is to be the subject.',
    'List what is being done to it, in order.',
    'Undo those operations in reverse order, on both sides.',
    'Keep the wanted letter on one side throughout.',
    'If the letter appears twice, collect those terms together.',
    'Factorise so the letter appears once.',
    'Divide by the bracket.',
    'Check by substituting numbers into both forms.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Make $l$ the subject of $A = lw$.',
      steps: [
        '$l$ is multiplied by $w$.',
        'Undo it by dividing both sides by $w$.',
      ],
      answer: '$l = \\frac{A}{w}$.',
    },
    {
      level: 4,
      ask: 'Make $x$ the subject of $y = 3x + 2$.',
      steps: [
        '$x$ is multiplied by 3, then 2 is added.',
        'Undo the addition first: $y - 2 = 3x$.',
        'Then undo the multiplication.',
      ],
      answer: '$x = \\frac{y - 2}{3}$.',
    },
    {
      level: 5,
      ask: 'Make $x$ the subject of $ax = bx + c$.',
      steps: [
        '$x$ appears on both sides, so undoing cannot isolate it.',
        'Collect: $ax - bx = c$.',
        'Factorise: $x(a - b) = c$.',
        'Divide both sides by the bracket.',
      ],
      answer: '$x = \\frac{c}{a - b}$.',
    },
  ],

  traps: [
    {
      mistake: 'Undoing the operations in the wrong order.',
      why: 'Last done, first undone. '
        + 'In 3x + 2, the 2 comes off before the 3 is divided out.',
    },
    {
      mistake: 'Trying to isolate a letter that appears twice.',
      why: 'Collect the terms and factorise first. '
        + 'No sequence of undoing will do it.',
    },
    {
      mistake: 'Dividing only part of a side.',
      why: 'The whole side is divided. '
        + '(y - 2) over 3, not y - 2 over 3.',
    },
    {
      mistake: 'Taking a square root and keeping only the positive case '
        + 'without saying so.',
      why: 'A square root has two values. '
        + 'In a physical formula say which one you are keeping and why.',
    },
  ],

  figure: {
    alt: 'Two rows. The upper row runs left to right and shows what is '
      + 'done to x: x, then a box reading times 3, then a box reading add '
      + '2, arriving at y. The lower row runs right to left in green and '
      + 'undoes them in the opposite order: from y, a box reading take 2 '
      + 'away, then a box reading divide by 3, arriving back at x. To the '
      + 'right, four lines show the separate case of a letter appearing '
      + 'twice, collected and factorised.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="26" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">last done, first undone</text>'
      + '<text x="230" y="60" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">what is done to x, in order</text>'
      + '<text x="52" y="106" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">x</text>'
      + '<line x1="66" y1="100" x2="92" y2="100"/>'
      + '<path d="M 90 92 L 106 100 L 90 108 Z" fill="currentColor" stroke="none"/>'
      + '<rect x="110" y="76" width="100" height="48" rx="5"/>'
      + '<text x="160" y="106" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">times 3</text>'
      + '<line x1="210" y1="100" x2="236" y2="100"/>'
      + '<path d="M 234 92 L 250 100 L 234 108 Z" fill="currentColor" stroke="none"/>'
      + '<rect x="254" y="76" width="100" height="48" rx="5"/>'
      + '<text x="304" y="106" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">add 2</text>'
      + '<line x1="354" y1="100" x2="380" y2="100"/>'
      + '<path d="M 378 92 L 394 100 L 378 108 Z" fill="currentColor" stroke="none"/>'
      + '<text x="408" y="106" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">y</text>'
      + '<text x="408" y="216" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">y</text>'
      + '<line x1="394" y1="210" x2="368" y2="210" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 370 202 L 354 210 L 370 218 Z" fill="#0f8a4d" stroke="none"/>'
      + '<rect x="250" y="186" width="100" height="48" rx="5" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="300" y="210" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">take the 2</text>'
      + '<text x="300" y="228" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">away</text>'
      + '<line x1="250" y1="210" x2="224" y2="210" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 226 202 L 210 210 L 226 218 Z" fill="#0f8a4d" stroke="none"/>'
      + '<rect x="106" y="186" width="100" height="48" rx="5" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="156" y="210" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">divide</text>'
      + '<text x="156" y="228" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">by 3</text>'
      + '<line x1="106" y1="210" x2="80" y2="210" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 82 202 L 66 210 L 82 218 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="52" y="216" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">x</text>'
      + '<text x="230" y="266" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">and undone in the reverse order</text>'
      + '<text x="444" y="130" font-size="14" fill="currentColor" stroke="none">if the letter appears</text>'
      + '<text x="444" y="148" font-size="14" fill="currentColor" stroke="none">twice, no undoing will</text>'
      + '<text x="444" y="166" font-size="14" fill="currentColor" stroke="none">isolate it. collect and</text>'
      + '<text x="444" y="184" font-size="14" fill="currentColor" stroke="none">factorise first:</text>'
      + '<text x="444" y="212" font-size="15" fill="#0f8a4d" stroke="none">ax = bx + c</text>'
      + '<text x="444" y="234" font-size="15" fill="#0f8a4d" stroke="none">ax - bx = c</text>'
      + '<text x="444" y="256" font-size="15" fill="#0f8a4d" stroke="none">x(a - b) = c</text>'
      + '<text x="444" y="278" font-size="15" fill="#0f8a4d" stroke="none">x = c over (a - b)</text>'
      + '<text x="320" y="332" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">the same steps as solving an equation,</text>'
      + '<text x="320" y="356" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">with letters in the answer instead of a number</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each operation, and the one that undoes it',
      columns: ['What is being done to the letter', 'What undoes it'],
      rows: [
        [
          'Something is added to it',
          'Subtract that something, from both sides',
        ],
        [
          'Something is subtracted from it',
          'Add that something, to both sides',
        ],
        [
          'It is multiplied',
          'Divide both sides, and divide the whole of each side',
        ],
        [
          'It is divided',
          'Multiply both sides',
        ],
        [
          'It is squared',
          'Take the square root of both sides, '
            + 'and say which of the two roots you are keeping',
        ],
        [
          'Its square root is taken',
          'Square both sides',
        ],
      ],
      note: 'List what is being done, in order, then work down this table '
        + 'backwards through your list. Last done, first undone. '
        + 'The one case it does not cover is a letter appearing twice.',
    },
  ],

  extension:
    'This is how scientific formulas are used in practice. '
    + 'Density is mass over volume. '
    + 'A laboratory question often gives you the density '
    + 'and asks for the mass. '
    + 'So the formula is rearranged before any arithmetic happens.',

  questions: [
    {
      id: 'sub-1',
      ask: 'Make w the subject of A = l times w.',
      kind: 'choice',
      options: ['w = A over l', 'w = A times l', 'w = l over A'],
      answer: 'w = A over l',
      teach: 'w was multiplied by l, so divide both sides by l.',
      level: 3,
    },
    {
      id: 'sub-2',
      ask: 'In y = 2x - 5, which operation is undone first?',
      kind: 'choice',
      options: [
        'Adding 5',
        'Dividing by 2',
        'Either order works',
      ],
      answer: 'Adding 5',
      teach: 'Last done, first undone. The 5 was subtracted last.',
      level: 4,
    },
    {
      id: 'sub-3',
      ask: 'What must you do when the wanted letter appears twice?',
      kind: 'choice',
      options: [
        'Collect the terms and factorise',
        'Divide by it',
        'Choose one of them',
      ],
      answer: 'Collect the terms and factorise',
      teach: 'That makes it appear once, so it can be divided out.',
      level: 5,
    },
  ],
})

/* ── graphs of linear relations ──────────────────────────────────────── */

teach({
  topicId: 'linear-graphs-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A rule like y = 2x + 1 draws a straight line. '
      + 'The number multiplying x is the gradient, which is the steepness. '
      + 'The number on its own is the intercept, '
      + 'where the line crosses the y axis. '
      + 'Gradient is rise over run.',
    method: [
      'Make a table of at least three points before plotting.',
      'Read the gradient as rise over run between two clear points.',
      'Read the intercept where the line crosses the y axis.',
    ],
  },

  idea:
    'A relation like $y = 2x + 1$ gives a $y$ for every $x$, '
    + 'and plotting those pairs gives a straight line. '
    + 'Every such line can be written as $y = mx + c$, '
    + 'where $m$ is the gradient and $c$ is the $y$ intercept. '
    + 'Those two numbers are the whole of the line: '
    + 'given them you can draw it, '
    + 'and given the line you can read them back off it.',

  mechanism:
    'The gradient is the only idea here, and it repays understanding '
    + 'because it is the same idea as speed from the JHS 2 motion lesson. '
    + 'Gradient is change in y divided by change in x, '
    + 'and speed is change in distance divided by change in time. '
    + 'They are the same calculation on different axes, '
    + 'which is why a distance time graph has speed as its slope. '
    + 'So gradient is not a property of the drawing. '
    + 'It is the rate at which one quantity changes with the other, '
    + 'and that is why it is worth reading off a graph at all. '
    + 'Two practical things follow. '
    + 'First, choose two points far apart and on grid crossings '
    + 'when you measure a gradient, '
    + 'because a small triangle magnifies your reading error. '
    + 'Second, three points are enough to plot a straight line '
    + 'and two are not, '
    + 'because with two you cannot tell that one of them is wrong, '
    + 'and with three a mistake shows up as a point off the line. '
    + 'The intercept is simpler but worth saying. '
    + '$c$ is the value of $y$ when $x$ is zero, '
    + 'so in a real situation it is the starting amount: '
    + 'the fixed charge before any units are used, '
    + 'the distance already travelled when timing began.',

  recap:
    'You can plot points in four quadrants '
    + 'and you have met the rule of a mapping. '
    + 'This draws the rule, '
    + 'and reads two numbers back off the picture.',

  method: [
    'Make a table with at least three values of x.',
    'Work out y for each, showing the substitution.',
    'Draw and label the axes with an even scale.',
    'Plot the points and join them with a ruler.',
    'For the gradient, pick two points far apart on grid crossings.',
    'Gradient is the change in y over the change in x.',
    'Read the intercept where the line crosses the y axis.',
    'Write the rule in the form y = mx + c.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is the gradient and intercept of $y = 3x - 4$?',
      steps: [
        'Compare it with $y = mx + c$.',
      ],
      answer: 'Gradient 3, y intercept negative 4.',
    },
    {
      level: 4,
      ask: 'A line passes through $(1, 3)$ and $(4, 12)$. '
        + 'Find its gradient.',
      steps: [
        'Change in $y$: $12 - 3 = 9$.',
        'Change in $x$: $4 - 1 = 3$.',
        'Divide.',
      ],
      answer: '3.',
    },
    {
      level: 5,
      ask: 'Why should you plot three points rather than two '
        + 'when drawing a straight line?',
      steps: [
        'Two points always lie on a line, whatever they are.',
        'So an error in one cannot be noticed.',
        'With three, a wrong point is off the line.',
      ],
      answer: 'Because any two points lie on some line, '
        + 'so a mistake is invisible. '
        + 'A third point either confirms the line or shows an error.',
    },
  ],

  traps: [
    {
      mistake: 'Calculating gradient as change in x over change in y.',
      why: 'It is rise over run: y over x.',
    },
    {
      mistake: 'Using two points close together to measure a gradient.',
      why: 'A small triangle multiplies your reading error. '
        + 'Use points far apart.',
    },
    {
      mistake: 'Joining plotted points freehand.',
      why: 'A straight line needs a ruler, '
        + 'and marks are given for the line itself.',
    },
    {
      mistake: 'An uneven scale on an axis.',
      why: 'Every point is then misplaced, '
        + 'and nothing in your working will show it.',
    },
  ],

  figure: {
    alt: 'A grid with x and y axes, carrying the straight line y equals 2x '
      + 'plus 1. A green dot at the point 0 comma 1 marks the y '
      + 'intercept. A green dashed right angled triangle on the line runs '
      + '2 units across and 4 units up, labelled run 2 and rise 4, and a '
      + 'note says the gradient is 4 over 2, which is 2. A further note '
      + 'warns that a small triangle magnifies your reading error.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="24" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">the gradient and the intercept, read off the line</text>'
      + '<line x1="86" y1="46" x2="86" y2="364" stroke-width="1"/>'
      + '<line x1="214" y1="46" x2="214" y2="364" stroke-width="1"/>'
      + '<line x1="278" y1="46" x2="278" y2="364" stroke-width="1"/>'
      + '<line x1="342" y1="46" x2="342" y2="364" stroke-width="1"/>'
      + '<line x1="78" y1="350" x2="374" y2="350" stroke-width="1"/>'
      + '<line x1="78" y1="222" x2="374" y2="222" stroke-width="1"/>'
      + '<line x1="78" y1="158" x2="374" y2="158" stroke-width="1"/>'
      + '<line x1="78" y1="94" x2="374" y2="94" stroke-width="1"/>'
      + '<line x1="70" y1="286" x2="380" y2="286"/>'
      + '<path d="M 378 278 L 394 286 L 378 294 Z" fill="currentColor" stroke="none"/>'
      + '<text x="400" y="292" font-size="15" fill="currentColor" stroke="none">x</text>'
      + '<line x1="150" y1="370" x2="150" y2="48"/>'
      + '<path d="M 142 50 L 150 34 L 158 50 Z" fill="currentColor" stroke="none"/>'
      + '<text x="150" y="26" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">y</text>'
      + '<text x="86" y="304" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">-2</text>'
      + '<text x="214" y="304" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">2</text>'
      + '<text x="278" y="304" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">4</text>'
      + '<text x="342" y="304" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">6</text>'
      + '<text x="142" y="227" font-size="13" text-anchor="end" fill="currentColor" stroke="none">2</text>'
      + '<text x="142" y="163" font-size="13" text-anchor="end" fill="currentColor" stroke="none">4</text>'
      + '<text x="142" y="99" font-size="13" text-anchor="end" fill="currentColor" stroke="none">6</text>'
      + '<text x="142" y="355" font-size="13" text-anchor="end" fill="currentColor" stroke="none">-2</text>'
      + '<line x1="102" y1="350" x2="246" y2="62"/>'
      + '<circle cx="150" cy="254" r="7" fill="#0f8a4d" stroke="none"/>'
      + '<text x="162" y="268" font-size="15" fill="#0f8a4d" stroke="none">(0, 1)</text>'
      + '<line x1="182" y1="190" x2="246" y2="190" stroke="#0f8a4d" stroke-width="3" stroke-dasharray="7 5"/>'
      + '<line x1="246" y1="190" x2="246" y2="62" stroke="#0f8a4d" stroke-width="3" stroke-dasharray="7 5"/>'
      + '<text x="214" y="208" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">run 2</text>'
      + '<text x="254" y="128" font-size="14" fill="#0f8a4d" stroke="none">rise 4</text>'
      + '<text x="412" y="92" font-size="17" fill="currentColor" stroke="none">y = 2x + 1</text>'
      + '<text x="412" y="130" font-size="15" fill="#0f8a4d" stroke="none">the 2 is the gradient:</text>'
      + '<text x="412" y="150" font-size="15" fill="#0f8a4d" stroke="none">4 up for 2 across</text>'
      + '<text x="412" y="182" font-size="15" fill="#0f8a4d" stroke="none">the 1 is the intercept:</text>'
      + '<text x="412" y="202" font-size="15" fill="#0f8a4d" stroke="none">y when x is zero</text>'
      + '<text x="412" y="242" font-size="14" fill="currentColor" stroke="none">choose two points far</text>'
      + '<text x="412" y="260" font-size="14" fill="currentColor" stroke="none">apart, on crossings:</text>'
      + '<text x="412" y="278" font-size="14" fill="currentColor" stroke="none">a small triangle</text>'
      + '<text x="412" y="296" font-size="14" fill="currentColor" stroke="none">magnifies your error</text>'
      + '<text x="320" y="388" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">plot three points, not two: with two you cannot tell one is wrong</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Reading the gradient and the intercept, '
        + 'off the rule and off the graph',
      columns: ['What you want', 'From the rule', 'From the graph'],
      rows: [
        [
          'The gradient, m',
          'The number multiplying x',
          'Pick two points far apart on grid crossings: '
            + 'the change in y divided by the change in x',
        ],
        [
          'The y intercept, c',
          'The number standing on its own',
          'The value of y where the line crosses the y axis',
        ],
        [
          'The y for a given x',
          'Put that x in and work the rule out',
          'Go up from that x to the line, then across to the y axis',
        ],
        [
          'The x for a given y',
          'Put that y in and solve for x',
          'Go across from that y to the line, then down to the x axis',
        ],
      ],
      note: 'A positive gradient rises to the right, a negative one '
        + 'falls, and a gradient of zero is a horizontal line.',
    },
    {
      caption: 'Gradient is one calculation under several names',
      columns: [
        'What the graph plots',
        'The change in the upward quantity divided by the change in the '
          + 'sideways one is then called',
        'What it tells you',
      ],
      rows: [
        [
          'y against x',
          'The gradient',
          'How much y rises for each unit x moves right',
        ],
        [
          'Distance against time',
          'The speed',
          'How far the thing travels in each unit of time',
        ],
        [
          'Cost against units used',
          'The rate per unit',
          'What one more unit adds to the bill',
        ],
      ],
      note: 'The intercept has the same double life. '
        + 'On a cost graph it is the fixed charge before any units are '
        + 'used; on a distance graph it is the distance already travelled '
        + 'when the timing began.',
    },
  ],

  extension:
    'Draw two linear graphs on the same axes. '
    + 'They cross at the solution of the two equations together. '
    + 'That is the graphical method for simultaneous equations. '
    + 'It is also a free check on your algebra.',

  questions: [
    {
      id: 'lin-1',
      ask: 'In y = mx + c, what does c give?',
      kind: 'choice',
      options: [
        'Where the line crosses the y axis',
        'The gradient',
        'The value of x',
      ],
      answer: 'Where the line crosses the y axis',
      teach: 'It is the value of y when x is zero.',
      level: 3,
    },
    {
      id: 'lin-2',
      ask: 'Gradient is calculated as:',
      kind: 'choice',
      options: [
        'change in y over change in x',
        'change in x over change in y',
        'y plus x',
      ],
      answer: 'change in y over change in x',
      teach: 'Rise over run, the same calculation as speed on a distance '
        + 'time graph.',
      level: 4,
    },
    {
      id: 'lin-3',
      ask: 'What does a horizontal line mean about the gradient?',
      kind: 'choice',
      options: ['It is zero', 'It is one', 'It cannot be found'],
      answer: 'It is zero',
      teach: 'y does not change as x moves, so the rise is zero.',
      level: 5,
    },
  ],
})

/* ── transformations ────────────────────────────────────────────────── */

teach({
  topicId: 'transformations-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A reflection flips a shape across a line. '
      + 'A rotation turns it about a point. '
      + 'A translation slides it. '
      + 'An enlargement changes its size from a centre. '
      + 'The first three keep the shape and size; only enlargement changes '
      + 'size.',
    method: [
      'State what the transformation needs: a line, a point, a vector, '
        + 'or a centre and a factor.',
      'Transform one vertex at a time.',
      'Check that lengths are unchanged, unless it is an enlargement.',
    ],
  },

  idea:
    'Four transformations are set, '
    + 'and each needs a particular piece of information '
    + 'before it can be carried out at all: '
    + 'a line, or a centre with an angle and a direction, '
    + 'or a vector, or a centre with a scale factor. '
    + 'Three of the four leave every length and every angle as it was, '
    + 'so the image is congruent to the object. '
    + 'The fourth, enlargement, changes the lengths '
    + 'and leaves the angles alone, '
    + 'so its image is similar rather than congruent.',

  mechanism:
    'The mistake that costs marks is working on the whole shape at once, '
    + 'and the cure is to work one vertex at a time, '
    + 'because every one of these transformations is defined for a POINT. '
    + 'A reflection is a rule about where a point goes. '
    + 'Apply it to each corner, then join the images, '
    + 'and the shape takes care of itself. '
    + 'Trying to picture the whole triangle flipping is how corners end up '
    + 'misplaced. '
    + 'The second useful idea is to know what each transformation '
    + 'preserves, '
    + 'because it gives you a free check on your own work. '
    + 'If a length comes out wrong under a transformation that should not '
    + 'change lengths, '
    + 'a vertex is misplaced, '
    + 'and you have found it without being told the answer.',

  recap:
    'You can plot points in four quadrants. '
    + 'This moves them by four rules, '
    + 'and each rule is applied to one point at a time.',

  method: [
    'Identify the transformation and what information it needs.',
    'Write down that information: line, centre, angle, vector or factor.',
    'Label the vertices of the object.',
    'Transform one vertex at a time and label each image.',
    'Join the images in the same order.',
    'For a reflection, check each image is the same perpendicular '
      + 'distance from the line.',
    'For a rotation, check the distance from the centre is unchanged.',
    'For an enlargement, check each length is the factor times the '
      + 'original.',
    'State the transformation fully when describing one.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Reflect the point $(3, 2)$ in the y axis.',
      steps: [
        'The y axis is the line $x = 0$.',
        'The distance across is 3, so the image is 3 on the other side.',
        'The height does not change.',
      ],
      answer: '$(-3, 2)$.',
    },
    {
      level: 4,
      ask: 'A triangle is enlarged by scale factor 3 from the origin. '
        + 'Where does the vertex $(2, 1)$ go?',
      steps: [
        'Every distance from the centre is multiplied by 3.',
        'The centre is the origin, so multiply both coordinates.',
      ],
      answer: '$(6, 3)$.',
    },
    {
      level: 5,
      ask: 'Why is a transformation with scale factor one half '
        + 'still called an enlargement?',
      steps: [
        'An enlargement multiplies every distance from the centre by the '
          + 'factor.',
        'A factor of one half halves them.',
        'The operation is the same; only the factor differs.',
      ],
      answer: 'Because the word names the operation, '
        + 'which is multiplying every distance from a centre by a factor. '
        + 'A factor below 1 makes the image smaller, '
        + 'and it is still that operation.',
    },
  ],

  traps: [
    {
      mistake: 'Transforming the whole shape by eye.',
      why: 'Each rule is defined for a point. '
        + 'Do one vertex at a time and join them.',
    },
    {
      mistake: 'Describing a rotation without its direction.',
      why: 'A full description needs the centre, the angle AND the '
        + 'direction.',
    },
    {
      mistake: 'Changing the lengths in a reflection or rotation.',
      why: 'Those preserve length. '
        + 'A changed side means a misplaced vertex.',
    },
    {
      mistake: 'Measuring an enlargement from the wrong point.',
      why: 'Distances are measured from the centre of enlargement, '
        + 'not from the origin unless that is the centre.',
    },
  ],

  figure: {
    alt: 'Four small panels, one for each transformation, each showing a '
      + 'triangle and its image in green. Reflection: the image stands at '
      + 'the same distance on the other side of a dashed mirror line, the '
      + 'same size. Rotation: the image is turned a quarter turn '
      + 'anticlockwise about a marked centre, with an arc showing the '
      + 'turn. Translation: the image is slid across and up, with a '
      + 'dashed arrow for the vector. Enlargement: the image is twice the '
      + 'size, with dashed rays from a marked centre through each pair of '
      + 'matching vertices. In the first three the image is the same size '
      + 'as the object. Only the enlargement changes size.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="28" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">four rules, and what each one needs</text>'
      + '<rect x="8" y="46" width="306" height="182" rx="6" stroke-width="1"/>'
      + '<text x="160" y="68" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">reflection</text>'
      + '<line x1="160" y1="80" x2="160" y2="196" stroke-dasharray="8 5"/>'
      + '<path d="M 76 192 L 126 192 L 76 128 Z"/>'
      + '<path d="M 244 192 L 194 192 L 244 128 Z" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="160" y="216" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">needs a mirror line</text>'
      + '<rect x="326" y="46" width="306" height="182" rx="6" stroke-width="1"/>'
      + '<text x="480" y="68" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">rotation</text>'
      + '<circle cx="480" cy="192" r="5" fill="currentColor" stroke="none"/>'
      + '<path d="M 490 192 L 550 192 L 550 146 Z"/>'
      + '<path d="M 480 182 L 480 122 L 434 122 Z" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 520 192 A 40 40 0 0 0 480 152" stroke-dasharray="6 4"/>'
      + '<path d="M 472 156 L 479 142 L 487 154 Z" fill="currentColor" stroke="none"/>'
      + '<text x="528" y="166" font-size="12" fill="currentColor" stroke="none">a quarter turn</text>'
      + '<text x="480" y="216" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">needs a centre, an angle and a direction</text>'
      + '<rect x="8" y="236" width="306" height="160" rx="6" stroke-width="1"/>'
      + '<text x="160" y="254" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">translation</text>'
      + '<path d="M 50 368 L 100 368 L 50 318 Z"/>'
      + '<path d="M 180 328 L 230 328 L 180 278 Z" stroke="#0f8a4d" stroke-width="3"/>'
      + '<line x1="70" y1="342" x2="186" y2="306" stroke-dasharray="7 5"/>'
      + '<path d="M 188 314 L 196 302 L 182 300 Z" fill="currentColor" stroke="none"/>'
      + '<text x="160" y="390" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">needs a vector: across and up</text>'
      + '<rect x="326" y="236" width="306" height="160" rx="6" stroke-width="1"/>'
      + '<text x="480" y="254" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">enlargement</text>'
      + '<circle cx="355" cy="362" r="5" fill="currentColor" stroke="none"/>'
      + '<line x1="355" y1="362" x2="435" y2="322" stroke-width="1" stroke-dasharray="6 4"/>'
      + '<line x1="355" y1="362" x2="495" y2="322" stroke-width="1" stroke-dasharray="6 4"/>'
      + '<line x1="355" y1="362" x2="435" y2="262" stroke-width="1" stroke-dasharray="6 4"/>'
      + '<path d="M 395 342 L 425 342 L 395 312 Z"/>'
      + '<path d="M 435 322 L 495 322 L 435 262 Z" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="512" y="296" font-size="12" fill="currentColor" stroke="none">factor 2</text>'
      + '<text x="480" y="390" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">needs a centre and a scale factor</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What each transformation needs, '
        + 'what it does to a point, and what it leaves unchanged',
      columns: [
        'Transformation',
        'What it needs before you can start',
        'What it does to a point',
        'What it leaves unchanged',
      ],
      rows: [
        [
          'Reflection',
          'A mirror line',
          'Moves it to the same distance on the other side of the line, '
            + 'along a perpendicular',
          'Lengths and angles, so the image is congruent',
        ],
        [
          'Rotation',
          'A centre, an angle, and a direction',
          'Turns it about the centre through that angle',
          'Lengths and angles, so the image is congruent',
        ],
        [
          'Translation',
          'A vector: so many units across and so many up',
          'Slides it by that vector',
          'Lengths and angles, so the image is congruent',
        ],
        [
          'Enlargement',
          'A centre and a scale factor',
          'Multiplies its distance from the centre by the factor',
          'Angles only, so the image is similar but not congruent',
        ],
      ],
      note: 'Work one vertex at a time, '
        + 'because every rule in the third column is a rule about a '
        + 'POINT. Transform each corner, then join the images in the same '
        + 'order, and the shape takes care of itself.',
    },
    {
      caption: 'Two things that look like mistakes and are not',
      columns: ['What you see', 'What is actually happening'],
      rows: [
        [
          'A point of the object has not moved at all after a reflection',
          'It was sitting on the mirror line. Points on the line stay '
            + 'where they are, which is why a shape touching the line '
            + 'shares those points with its image',
        ],
        [
          'A scale factor between 0 and 1 has made the shape smaller, '
            + 'and it is still called an enlargement',
          'The word names the operation, which is multiplying every '
            + 'distance from a centre by a factor. It does not describe '
            + 'the outcome',
        ],
      ],
      note: 'When a question asks you to describe a transformation, '
        + 'give everything the second column of the first table asks for. '
        + 'A rotation without its direction is not a full description.',
    },
  ],

  extension:
    'Two transformations done one after another '
    + 'can often be replaced by a single one. '
    + 'Two reflections in parallel lines give a translation, '
    + 'and two in lines that cross give a rotation about the crossing '
    + 'point.',

  questions: [
    {
      id: 'trn-1',
      ask: 'Which transformation changes the size of a shape?',
      kind: 'choice',
      options: ['Enlargement', 'Rotation', 'Translation'],
      answer: 'Enlargement',
      teach: 'The other three keep lengths and angles unchanged.',
      level: 3,
    },
    {
      id: 'trn-2',
      ask: 'What does a rotation need to be fully described?',
      kind: 'choice',
      options: [
        'A centre, an angle and a direction',
        'A centre and an angle',
        'An angle only',
      ],
      answer: 'A centre, an angle and a direction',
      teach: 'Leaving out the direction loses the mark.',
      level: 4,
    },
    {
      id: 'trn-3',
      ask: 'What happens to a point lying on the mirror line?',
      kind: 'choice',
      options: [
        'It does not move',
        'It moves to the other side',
        'It disappears',
      ],
      answer: 'It does not move',
      teach: 'Its distance from the line is zero, so its image is itself.',
      level: 5,
    },
  ],
})

/* ── bearings ───────────────────────────────────────────────────────── */

teach({
  topicId: 'bearings-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A bearing is measured from north, clockwise, '
      + 'and written with three figures: 045, not 45. '
      + 'The back bearing is 180 more, or 180 less if that goes over 360. '
      + 'Always draw a north line at the point you are measuring from.',
    method: [
      'Draw a north line at the starting point.',
      'Measure clockwise from it.',
      'Write three figures, adding a leading zero if needed.',
    ],
  },

  idea:
    'A bearing gives a direction as an angle from north, '
    + 'measured clockwise, and written with three figures. '
    + 'Due east is 090, due south is 180, due west is 270. '
    + 'Which point you measure at decides the answer. '
    + 'The bearing of B from A is measured at A, '
    + 'from a north line drawn at A, '
    + 'and the bearing of A from B, the back bearing, '
    + 'is measured at B instead. '
    + 'A journey problem is solved by drawing the legs to scale '
    + 'with a north line at every turning point.',

  mechanism:
    'Bearings are not difficult and are lost on carelessness, '
    + 'because three conventions have to hold at once '
    + 'and dropping any one of them gives a wrong answer that looks '
    + 'perfectly reasonable. '
    + 'So the habit to build is mechanical: '
    + 'before measuring anything, draw the north line at the point you are '
    + 'measuring FROM. '
    + 'Half the errors in this topic are measuring from the wrong end of '
    + 'the journey, '
    + 'and a north line drawn at the right point makes that impossible. '
    + 'The back bearing follows from the geometry rather than being a '
    + 'rule. '
    + 'The two north lines, at A and at B, are parallel, '
    + 'and the line between the points crosses both, '
    + 'so the two bearings are related by the angles on a straight line. '
    + 'That is where the 180 comes from, '
    + 'and it is why you subtract instead of adding when the sum would pass '
    + '360: '
    + 'a bearing is only ever between 000 and 360. '
    + 'The three figure convention has a practical reason too. '
    + 'A bearing is read aloud over a radio, '
    + 'and zero four five cannot be mistaken for anything, '
    + 'while forty five could be heard as four or five.',

  recap:
    'You can measure an angle with a protractor '
    + 'and you know the compass directions. '
    + 'This gives directions as angles, '
    + 'with three conventions that must all be kept.',

  method: [
    'Mark the starting point and draw a north line at it.',
    'Draw the line to the destination.',
    'Measure the angle from north, going clockwise.',
    'Write it with three figures.',
    'For the back bearing, add 180, or subtract 180 if that exceeds 360.',
    'For a journey, draw each leg to scale with a north line at each '
      + 'turn.',
    'State the scale you used.',
    'Measure the final distance and convert it with the scale.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is the bearing of due west?',
      steps: [
        'From north, clockwise: east is 090, south is 180.',
        'Continue to west.',
      ],
      answer: '270.',
    },
    {
      level: 4,
      ask: 'The bearing of B from A is 070. '
        + 'What is the bearing of A from B?',
      steps: [
        'The back bearing is 180 more.',
        '$70 + 180 = 250$.',
      ],
      answer: '250.',
    },
    {
      level: 5,
      ask: 'The bearing of Q from P is 240. '
        + 'Find the bearing of P from Q.',
      steps: [
        'Adding 180 would give 420, which is over 360.',
        'So subtract 180 instead.',
      ],
      answer: '060. '
        + 'A bearing is always between 000 and 360, '
        + 'and it is written with three figures.',
    },
  ],

  traps: [
    {
      mistake: 'Measuring from the nearest compass direction.',
      why: 'Always from north, and always clockwise.',
    },
    {
      mistake: 'Writing 45 instead of 045.',
      why: 'A bearing has three figures. '
        + 'The leading zero is part of it.',
    },
    {
      mistake: 'Drawing the north line at the wrong point.',
      why: 'The bearing of B from A is measured at A. '
        + 'Drawing the line first prevents this.',
    },
    {
      mistake: 'Adding 180 when the result passes 360.',
      why: 'Subtract instead. '
        + 'A bearing is never more than 360.',
    },
  ],

  figure: {
    alt: 'Two points, A low on the left and B up to the right. A north '
      + 'line is drawn upward at each of them, and the two north lines '
      + 'are parallel. The line from A to B crosses both. At A an arc from '
      + 'the north line clockwise to the line AB is marked 070, the '
      + 'bearing of B from A. At B a much larger arc from its own north '
      + 'line clockwise round to the direction back towards A is marked '
      + '250, the bearing of A from B. A note says the north lines are '
      + 'parallel and the line between the points crosses both, which is '
      + 'where the 180 comes from.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">where the 180 in a back bearing comes from</text>'
      + '<line x1="160" y1="300" x2="160" y2="104"/>'
      + '<path d="M 152 106 L 160 90 L 168 106 Z" fill="currentColor" stroke="none"/>'
      + '<text x="160" y="80" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">N</text>'
      + '<line x1="386" y1="218" x2="386" y2="86"/>'
      + '<path d="M 378 88 L 386 72 L 394 88 Z" fill="currentColor" stroke="none"/>'
      + '<text x="386" y="62" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">N</text>'
      + '<line x1="160" y1="300" x2="386" y2="218"/>'
      + '<circle cx="160" cy="300" r="5" fill="currentColor" stroke="none"/>'
      + '<text x="146" y="314" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">A</text>'
      + '<circle cx="386" cy="218" r="5" fill="currentColor" stroke="none"/>'
      + '<text x="398" y="230" font-size="17" fill="currentColor" stroke="none">B</text>'
      + '<path d="M 160 250 A 50 50 0 0 1 207 283" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="196" y="256" font-size="15" fill="#0f8a4d" stroke="none">070</text>'
      + '<path d="M 386 172 A 46 46 0 1 1 343 234" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="408" y="268" font-size="15" fill="#0f8a4d" stroke="none">250</text>'
      + '<text x="452" y="120" font-size="15" fill="currentColor" stroke="none">the two north lines</text>'
      + '<text x="452" y="140" font-size="15" fill="currentColor" stroke="none">are parallel, and the</text>'
      + '<text x="452" y="160" font-size="15" fill="currentColor" stroke="none">line AB crosses both,</text>'
      + '<text x="452" y="186" font-size="15" fill="#0f8a4d" stroke="none">so the two bearings</text>'
      + '<text x="452" y="206" font-size="15" fill="#0f8a4d" stroke="none">differ by 180</text>'
      + '<text x="320" y="352" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the bearing of B from A is 070, and it is measured at A</text>'
      + '<text x="320" y="378" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the bearing of A from B is 250, and it is measured at B</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The three conventions a bearing keeps, '
        + 'and what breaks if you drop one',
      columns: [
        'The convention',
        'What it means',
        'What happens if you drop it',
      ],
      rows: [
        [
          'Measured from north',
          'From the north line every time, never from the nearest axis',
          'An answer that looks reasonable and is wrong by up to 90 '
            + 'degrees',
        ],
        [
          'Measured clockwise',
          'Clockwise from north, never whichever way round is shorter',
          'A bearing that should be 300 comes out as 060',
        ],
        [
          'Written with three figures',
          'A leading zero where one is needed: 045, never 45',
          'Marks lost on the page, and over a radio forty five can be '
            + 'heard as four, or as five',
        ],
      ],
      note: 'Before measuring anything, draw the north line at the point '
        + 'you are measuring FROM. Half the errors in this topic are '
        + 'measuring from the wrong end of the journey, and a north line '
        + 'at the right point makes that impossible.',
    },
    {
      caption: 'Finding a back bearing, with the two cases it falls into',
      columns: [
        'The bearing you are given',
        'Which case it is',
        'The back bearing',
      ],
      rows: [
        [
          '090',
          'Adding 180 stays under 360, so add',
          '270',
        ],
        [
          '070',
          'Adding 180 stays under 360, so add',
          '250',
        ],
        [
          '240',
          'Adding 180 would pass 360, so subtract instead',
          '060',
        ],
        [
          '315',
          'Adding 180 would pass 360, so subtract instead',
          '135',
        ],
      ],
      note: 'This is one rule and not two. A bearing lies between 000 and '
        + '360, so you add or subtract whichever keeps it there, '
        + 'and the answer is written with three figures as well.',
    },
  ],

  extension:
    'Sometimes a journey has two legs at right angles. '
    + 'Then you can finish it with Pythagoras instead of measuring. '
    + 'That gives an exact distance, '
    + 'rather than one read off a drawing.',

  questions: [
    {
      id: 'bea-1',
      ask: 'From which direction is a bearing measured?',
      kind: 'choice',
      options: ['North, clockwise', 'North, anticlockwise', 'East'],
      answer: 'North, clockwise',
      teach: 'And written with three figures.',
      level: 3,
    },
    {
      id: 'bea-2',
      ask: 'How should a bearing of forty five degrees be written?',
      kind: 'choice',
      options: ['045', '45', '45.0'],
      answer: '045',
      teach: 'Three figures, with a leading zero where needed.',
      level: 4,
    },
    {
      id: 'bea-3',
      ask: 'The bearing of Y from X is 300. The bearing of X from Y is:',
      kind: 'choice',
      options: ['120', '480', '060'],
      answer: '120',
      teach: '300 + 180 is 480, which is over 360, so subtract 180 '
        + 'instead.',
      level: 5,
    },
  ],
})

/* ── volume and surface area ───────────────────────────────────────── */

teach({
  topicId: 'volume-surface-area',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The volume of any prism is the area of its cross section '
      + 'times its length. '
      + 'A cylinder is a prism with a circular cross section, '
      + 'so its volume is pi r squared times h. '
      + 'Surface area is the total of all the faces, '
      + 'and for a cylinder the curved part unrolls into a rectangle.',
    method: [
      'Find the cross section and its area first.',
      'Multiply by the length or height.',
      'For surface area, list every face and add them.',
    ],
  },

  idea:
    'A prism has the same cross section all along its length, '
    + 'and its volume is the area of that cross section times the length. '
    + 'That one sentence covers every prism you will meet, '
    + 'so there is nothing here to memorise. '
    + 'Surface area is different: it is the total of all the faces, '
    + 'there is no single formula for it, '
    + 'and the work is listing every face before adding anything. '
    + 'Volume is given in cubic units and surface area in square units, '
    + 'and an answer with the wrong unit is marked wrong '
    + 'even when the number is right.',

  mechanism:
    'One idea covers every prism, '
    + 'and knowing it means there are no formulas to memorise. '
    + 'A prism is a cross section repeated along a length. '
    + 'So its volume is that area, laid down once for every unit of '
    + 'length, '
    + 'which is area times length. '
    + 'A cuboid is a rectangle repeated, '
    + 'a triangular prism is a triangle repeated, '
    + 'and a cylinder is a circle repeated. '
    + 'They look like three formulas and they are one. '
    + 'Surface area needs a different habit, '
    + 'because there is no single formula and the marks are lost by '
    + 'forgetting a face. '
    + 'So list them before you add anything, '
    + 'and read the question for the word open. '
    + 'The curved surface is the part learners cannot picture, '
    + 'and there is a way to see it: '
    + 'take the label off a tin and flatten it. '
    + 'It is a rectangle. '
    + 'Its height is the height of the tin, '
    + 'and its width was wrapped once round the tin, so it is the '
    + 'circumference. '
    + 'Hence $2\\pi r h$, '
    + 'which you can rebuild from a tin label rather than remember. '
    + 'Finally the units, which follow from the multiplying. '
    + 'Volume multiplies three lengths, so it is cubic. '
    + 'Area multiplies two, so it is square.',

  recap:
    'You can find the area of a rectangle, a triangle and a circle. '
    + 'This stacks those areas along a length to get a volume, '
    + 'and adds up faces to get a surface area.',

  method: [
    'Identify the cross section: the face that repeats.',
    'Find its area.',
    'Multiply by the length or height for the volume.',
    'Give the volume in cubic units.',
    'For surface area, list every face separately.',
    'Check whether the solid is open or closed.',
    'For a cylinder, use 2 pi r h for the curved surface.',
    'Add the faces and give the answer in square units.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Find the volume of a cuboid 5 cm by 3 cm by 4 cm.',
      steps: [
        'Cross section $5 \\times 3 = 15$ square cm.',
        'Multiply by the height 4.',
      ],
      answer: '60 cubic cm.',
    },
    {
      level: 4,
      ask: 'Find the volume of a cylinder of radius 7 cm and height 10 cm, '
        + 'using 22 over 7.',
      steps: [
        'Cross section is $\\pi r^2$: '
          + '$\\frac{22}{7} \\times 49 = 154$.',
        'Multiply by the height.',
      ],
      answer: '1540 cubic cm.',
    },
    {
      level: 5,
      ask: 'Why is the curved surface area of a cylinder $2\\pi r h$?',
      steps: [
        'Unroll the curved surface and it is a rectangle.',
        'Its height is the height of the cylinder.',
        'Its width went once round the cylinder, so it is the '
          + 'circumference.',
        'Circumference is $2\\pi r$.',
      ],
      answer: 'Because it unrolls into a rectangle '
        + 'of height $h$ and width equal to the circumference, $2\\pi r$, '
        + 'so the area is $2\\pi r h$.',
    },
  ],

  traps: [
    {
      mistake: 'Forgetting a face in a surface area.',
      why: 'List them all before adding. '
        + 'A cuboid has six; a closed cylinder has three.',
    },
    {
      mistake: 'Including both circles for an open cylinder.',
      why: 'Read the question. '
        + 'An open tin has one circle, or none if both ends are open.',
    },
    {
      mistake: 'Giving a volume in square units.',
      why: 'Volume multiplies three lengths, so the unit is cubic.',
    },
    {
      mistake: 'Using the diameter as the radius in pi r squared.',
      why: 'Halve it first. '
        + 'Writing both down before starting prevents this.',
    },
  ],

  figure: {
    alt: 'A cylinder on the left, with its height marked h and the radius '
      + 'of its top marked r. A green arrow labelled unroll it leads to a '
      + 'rectangle on the right. The rectangle is as tall as the cylinder, '
      + 'so its height is also h, and its width is the circumference of '
      + 'the cylinder, two pi r, because it went once round. Its area is '
      + 'therefore two pi r times h.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="28" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">the curved surface unrolls into a rectangle</text>'
      + '<ellipse cx="140" cy="92" rx="56" ry="18"/>'
      + '<line x1="84" y1="92" x2="84" y2="248"/>'
      + '<line x1="196" y1="92" x2="196" y2="248"/>'
      + '<path d="M 84 248 A 56 18 0 0 0 196 248"/>'
      + '<path d="M 84 248 A 56 18 0 0 1 196 248" stroke-dasharray="6 5"/>'
      + '<line x1="140" y1="92" x2="196" y2="92" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="166" y="84" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">r</text>'
      + '<line x1="216" y1="92" x2="216" y2="248"/>'
      + '<line x1="210" y1="92" x2="222" y2="92"/>'
      + '<line x1="210" y1="248" x2="222" y2="248"/>'
      + '<text x="230" y="176" font-size="16" fill="currentColor" stroke="none">h</text>'
      + '<line x1="252" y1="170" x2="294" y2="170" stroke="#0f8a4d" stroke-width="4"/>'
      + '<path d="M 292 160 L 312 170 L 292 180 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="282" y="150" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">unroll it</text>'
      + '<line x1="330" y1="74" x2="600" y2="74"/>'
      + '<line x1="330" y1="68" x2="330" y2="80"/>'
      + '<line x1="600" y1="68" x2="600" y2="80"/>'
      + '<text x="465" y="58" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">the circumference: 2 pi r</text>'
      + '<rect x="330" y="92" width="270" height="156" rx="4" stroke="#0f8a4d" stroke-width="3"/>'
      + '<line x1="618" y1="92" x2="618" y2="248"/>'
      + '<line x1="612" y1="92" x2="624" y2="92"/>'
      + '<line x1="612" y1="248" x2="624" y2="248"/>'
      + '<text x="610" y="176" font-size="16" text-anchor="end" fill="currentColor" stroke="none">h</text>'
      + '<text x="465" y="176" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">area = 2 pi r times h</text>'
      + '<text x="320" y="300" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">the volume is one idea: cross section times length</text>'
      + '<text x="320" y="330" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">a cuboid is a rectangle repeated, a cylinder is a circle repeated</text>'
      + '<text x="320" y="364" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">volume in cubic units, surface area in square units</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'One idea for every prism: the cross section, times the '
        + 'length',
      columns: [
        'Solid',
        'The cross section that repeats',
        'The area of that cross section',
        'So the volume is',
      ],
      rows: [
        [
          'Cuboid',
          'A rectangle',
          'Length times width',
          'Length times width times height',
        ],
        [
          'Triangular prism',
          'A triangle',
          'Half the base times the perpendicular height',
          'That area, times the length of the prism',
        ],
        [
          'Cylinder',
          'A circle',
          'Pi times the radius squared',
          'Pi times the radius squared, times the height',
        ],
      ],
      note: 'These read as three formulas and they are one. '
        + 'A prism is a cross section laid down once for every unit of '
        + 'length, so the volume is that area times the length.',
    },
    {
      caption: 'The faces to list for a surface area, '
        + 'and what each one comes to',
      columns: ['Solid', 'The faces it has', 'What they come to'],
      rows: [
        [
          'Cuboid',
          'Six, in three matching pairs',
          'Length times width, length times height, and width times '
            + 'height, each one counted twice',
        ],
        [
          'Closed cylinder',
          'Two circles and one curved surface',
          'Pi times the radius squared, twice, '
            + 'plus the circumference times the height',
        ],
        [
          'Cylinder open at one end, such as a tin with no lid',
          'One circle and one curved surface',
          'Pi times the radius squared, once, '
            + 'plus the circumference times the height',
        ],
        [
          'Pipe, open at both ends',
          'The curved surface, and nothing else',
          'The circumference times the height',
        ],
      ],
      note: 'There is no single formula in this table, '
        + 'and the marks are lost by forgetting a face. '
        + 'Read the question for the word open, '
        + 'and write the list out before you add anything.',
    },
  ],

  extension:
    'A cone and a pyramid are not prisms, '
    + 'because the cross section shrinks to a point. '
    + 'Each has exactly a third of the volume '
    + 'of the prism on the same base with the same height, '
    + 'which is a result worth knowing before it is proved.',

  questions: [
    {
      id: 'vol-1',
      ask: 'The volume of any prism is:',
      kind: 'choice',
      options: [
        'cross sectional area times length',
        'length times width',
        'the sum of its faces',
      ],
      answer: 'cross sectional area times length',
      teach: 'One rule for cuboids, triangular prisms and cylinders alike.',
      level: 3,
    },
    {
      id: 'vol-2',
      ask: 'How many faces does a closed cylinder have?',
      kind: 'choice',
      options: ['Three', 'Two', 'Six'],
      answer: 'Three',
      teach: 'Two circles and one curved surface.',
      level: 4,
    },
    {
      id: 'vol-3',
      ask: 'What shape does the curved surface of a cylinder unroll into?',
      kind: 'choice',
      options: ['A rectangle', 'A circle', 'A triangle'],
      answer: 'A rectangle',
      teach: 'Height h and width equal to the circumference, '
        + 'which gives 2 pi r h.',
      level: 5,
    },
  ],
})

/* ── scale drawing ───────────────────────────────────────────────── */

teach({
  topicId: 'scale-drawing',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A scale says how a length on the drawing relates to the real '
      + 'length. '
      + '1 to 100 means one centimetre on paper is one hundred centimetres '
      + 'real. '
      + 'Convert the real lengths to drawing lengths before drawing, '
      + 'and state the scale on the drawing.',
    method: [
      'Write the scale down and state its units.',
      'Divide every real length by the scale to get the drawing length.',
      'Measure the answer off the drawing and multiply back.',
    ],
  },

  idea:
    'A scale drawing represents something larger or smaller '
    + 'with every length reduced or increased in the same ratio. '
    + 'A scale of 1 to 100 means one unit on the drawing '
    + 'stands for one hundred of the same units in reality. '
    + 'The work has two halves and they go in opposite directions: '
    + 'to draw, you divide by the scale factor, '
    + 'and to read an answer off the drawing, you multiply. '
    + 'A map scale such as 1 to 50 000 works in exactly the same way, '
    + 'and converting the answer to a sensible unit afterwards '
    + 'is a separate job from the scale.',

  mechanism:
    'The scale itself is simple and the units are where marks go. '
    + 'A scale is a pure ratio with no units at all, '
    + 'which is exactly what makes it easy to get wrong: '
    + '1 to 50 000 does not say centimetres anywhere. '
    + 'It says that any length on the map, in whatever unit you measure '
    + 'it, '
    + 'stands for 50 000 of that same unit on the ground. '
    + 'So measure in centimetres and your answer is in centimetres, '
    + 'and then you convert. '
    + 'Nearly every lost mark in this topic is a learner who measured 4 cm, '
    + 'multiplied correctly to get 200 000, '
    + 'and then wrote metres. '
    + 'So write the unit at every line of the working, '
    + 'and do the conversion as a separate, visible step. '
    + 'The other thing worth knowing is why scale drawing is used at all, '
    + 'because it tells you when it is good enough. '
    + 'A scale drawing lets you MEASURE an answer '
    + 'instead of calculating one, '
    + 'which is why it solves journey and surveying problems '
    + 'that would otherwise need trigonometry. '
    + 'The cost is accuracy: '
    + 'your answer is only as good as your drawing, '
    + 'so a sharp pencil and a large scale matter, '
    + 'and an answer read off a drawing should be given to a sensible '
    + 'precision, '
    + 'not to three decimal places it cannot support.',

  recap:
    'You know ratio and you can measure accurately with a ruler and '
    + 'protractor. '
    + 'A scale drawing is a ratio applied to every length in a picture.',

  method: [
    'Write the scale and decide the units you will work in.',
    'List the real lengths.',
    'Divide each by the scale factor to get drawing lengths.',
    'Check the drawing will fit the paper; if not, choose another scale.',
    'Draw accurately, with a sharp pencil.',
    'Mark the angles with a protractor.',
    'Write the scale on the drawing.',
    'To answer, measure the drawing and multiply by the scale factor.',
    'Convert units as a separate written step.',
  ],

  worked: [
    {
      level: 3,
      ask: 'On a scale of 1 to 100, how long is a line representing 6 '
        + 'metres?',
      steps: [
        '6 metres is 600 cm.',
        'Divide by 100.',
      ],
      answer: '6 cm.',
    },
    {
      level: 4,
      ask: 'On a map of scale 1 to 50 000, two towns are 4 cm apart. '
        + 'How far apart are they really?',
      steps: [
        '4 x 50 000 = 200 000 cm.',
        '200 000 cm is 2000 m.',
        '2000 m is 2 km.',
      ],
      answer: '2 kilometres.',
    },
    {
      level: 5,
      ask: 'Why does a scale have no units?',
      steps: [
        'A scale is a ratio of two lengths.',
        'The units cancel in a ratio.',
        'So it holds whatever unit you measure in.',
      ],
      answer: 'Because it is a ratio, and the units cancel. '
        + '1 to 50 000 means any length stands for 50 000 of the same '
        + 'unit, '
        + 'which is why the conversion must be done as its own step.',
    },
  ],

  traps: [
    {
      mistake: 'Forgetting to convert after multiplying by the scale.',
      why: '200 000 cm is not 200 000 m. '
        + 'Do the conversion as a separate written step.',
    },
    {
      mistake: 'Treating the scale as having units.',
      why: 'It is a pure ratio. '
        + 'The unit comes from what you measured.',
    },
    {
      mistake: 'Choosing a scale that does not fit the paper.',
      why: 'Check the largest length first, before drawing anything.',
    },
    {
      mistake: 'Giving an answer measured off a drawing to three decimal '
        + 'places.',
      why: 'The drawing cannot support that precision. '
        + 'Round sensibly.',
    },
  ],

  figure: {
    alt: 'A small map with two towns P and Q marked on it, four '
      + 'centimetres apart, at a scale of one to fifty thousand. Below '
      + 'the map the conversion runs as a chain of boxes joined by '
      + 'arrows: four centimetres on the map, times fifty thousand, gives '
      + 'two hundred thousand centimetres; divided by a hundred, two '
      + 'thousand metres; divided by a thousand, two kilometres.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="26" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">the units are where the marks go</text>'
      + '<rect x="40" y="50" width="250" height="140" rx="4"/>'
      + '<circle cx="80" cy="160" r="6" fill="currentColor" stroke="none"/>'
      + '<text x="68" y="174" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">P</text>'
      + '<circle cx="250" cy="100" r="6" fill="currentColor" stroke="none"/>'
      + '<text x="262" y="96" font-size="15" fill="currentColor" stroke="none">Q</text>'
      + '<line x1="80" y1="160" x2="250" y2="100" stroke-dasharray="7 5"/>'
      + '<text x="165" y="210" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">4 cm on the map</text>'
      + '<text x="165" y="232" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">scale 1 to 50 000</text>'
      + '<text x="147" y="258" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">times</text>'
      + '<text x="147" y="274" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">50 000</text>'
      + '<text x="323" y="258" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">divide</text>'
      + '<text x="323" y="274" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">by 100</text>'
      + '<text x="473" y="258" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">divide</text>'
      + '<text x="473" y="274" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">by 1000</text>'
      + '<rect x="14" y="286" width="110" height="60" rx="5"/>'
      + '<text x="69" y="312" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">4 cm</text>'
      + '<text x="69" y="332" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">on the map</text>'
      + '<line x1="126" y1="316" x2="156" y2="316" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M 154 309 L 168 316 L 154 323 Z" fill="#0f8a4d" stroke="none"/>'
      + '<rect x="170" y="286" width="130" height="60" rx="5"/>'
      + '<text x="235" y="322" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">200 000 cm</text>'
      + '<line x1="302" y1="316" x2="332" y2="316"/>'
      + '<path d="M 330 309 L 344 316 L 330 323 Z" fill="currentColor" stroke="none"/>'
      + '<rect x="346" y="286" width="104" height="60" rx="5"/>'
      + '<text x="398" y="322" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">2000 m</text>'
      + '<line x1="452" y1="316" x2="482" y2="316"/>'
      + '<path d="M 480 309 L 494 316 L 480 323 Z" fill="currentColor" stroke="none"/>'
      + '<rect x="496" y="286" width="100" height="60" rx="5" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="546" y="322" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">2 km</text>'
      + '<text x="320" y="382" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">write the unit on every line, and convert as its own visible step</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Going from the drawing to reality and back again',
      columns: ['What you have', 'What you do with it', 'What you get'],
      rows: [
        [
          'A real length, and you want to draw it',
          'Divide by the scale factor',
          'The length to draw, in whatever unit you measured the real one '
            + 'in',
        ],
        [
          'A length measured off the drawing',
          'Multiply by the scale factor',
          'The real length, in the same unit you measured with',
        ],
        [
          'A real length in centimetres, and you want metres',
          'Divide by 100',
          'Metres',
        ],
        [
          'A real length in metres, and you want kilometres',
          'Divide by 1000',
          'Kilometres',
        ],
      ],
      note: 'The first two rows are the scale. '
        + 'The last two are ordinary conversion and have nothing to do '
        + 'with the scale, which is exactly why they belong on separate '
        + 'lines of the working.',
    },
    {
      caption: 'What a scale drawing keeps, what it changes, '
        + 'and what it costs',
      columns: ['What about the drawing', 'What the scale does to it'],
      rows: [
        [
          'Every length',
          'Divided by the scale factor, and every one of them by the same '
            + 'amount',
        ],
        [
          'Every angle',
          'Nothing. A scale drawing has the same angles as the real thing',
        ],
        [
          'The units of the scale itself',
          'There are none. A scale is a pure ratio, so 1 to 50 000 holds '
            + 'in whatever unit you choose to measure in',
        ],
        [
          'The accuracy of your answer',
          'Limited by the drawing. So use a sharp pencil, the largest '
            + 'scale that fits the paper, and a sensible number of figures '
            + 'in the answer',
        ],
      ],
      note: 'A scale drawing lets you measure an answer instead of '
        + 'calculating one, which is why it solves journey and surveying '
        + 'problems that would otherwise need trigonometry.',
    },
  ],

  extension:
    'Scale is how a bearings journey is solved without trigonometry: '
    + 'draw each leg to scale at its correct bearing, '
    + 'then measure the line from start to finish and convert it. '
    + 'The drawing has done the calculation.',

  questions: [
    {
      id: 'scl-1',
      ask: 'On a scale of 1 to 200, a 4 cm line represents:',
      kind: 'choice',
      options: ['800 cm', '50 cm', '204 cm'],
      answer: '800 cm',
      teach: 'Multiply the drawing length by the scale factor.',
      level: 3,
    },
    {
      id: 'scl-2',
      ask: 'On a 1 to 50 000 map, 1 cm represents:',
      kind: 'choice',
      options: ['500 metres', '50 metres', '5 kilometres'],
      answer: '500 metres',
      teach: '50 000 cm is 500 m, which is half a kilometre.',
      level: 4,
    },
    {
      id: 'scl-3',
      ask: 'What does a scale drawing let you do?',
      kind: 'choice',
      options: [
        'Measure an answer instead of calculating it',
        'Work without a ruler',
        'Change the angles',
      ],
      answer: 'Measure an answer instead of calculating it',
      teach: 'The cost is that your answer is only as accurate as your '
        + 'drawing.',
      level: 5,
    },
  ],
})

/* ── probability ─────────────────────────────────────────────────── */

teach({
  topicId: 'probability-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Probability is the number of favourable outcomes '
      + 'over the total number of outcomes. '
      + 'The outcomes must be equally likely. '
      + 'It is always between 0 and 1. '
      + 'For two independent events both happening, multiply. '
      + 'For something NOT happening, subtract from 1.',
    method: [
      'Count the total outcomes and the favourable ones.',
      'Check the outcomes really are equally likely.',
      'For both of two independent events, multiply the probabilities.',
    ],
  },

  idea:
    'The probability of an event is '
    + 'the number of outcomes that give it, '
    + 'divided by the total number of equally likely outcomes. '
    + 'So the probability of a 3 on a fair die is $\\frac{1}{6}$. '
    + 'A probability of 0 means impossible and 1 means certain, '
    + 'and every probability lies between the two. '
    + 'Everything else in the topic follows from that one definition, '
    + 'including what to do about an event NOT happening '
    + 'and about two events both happening. '
    + 'The word to watch for is equally. '
    + 'The definition says nothing at all '
    + 'about outcomes that are not equally likely.',

  mechanism:
    'Two things in this topic are worth more than the arithmetic. '
    + 'The first is that the formula depends on the outcomes being equally '
    + 'likely, '
    + 'and learners apply it where they are not. '
    + 'Asking for the probability that it rains tomorrow '
    + 'is not one over two just because there are two possibilities, '
    + 'because rain and no rain are not equally likely. '
    + 'The formula is for a fair die, a fair coin, '
    + 'a well shuffled pack, a bag of counted beads. '
    + 'Check the equal likelihood before you count anything. '
    + 'The second is why independent probabilities multiply, '
    + 'which is easier to see than to accept. '
    + 'Toss a coin twice and write out every result: '
    + 'there are four, all equally likely, and only one of them is two '
    + 'heads, so the probability is $\\frac{1}{4}$, '
    + 'which is also $\\frac{1}{2} \\times \\frac{1}{2}$. '
    + 'The multiplication is not a rule imposed on the problem. '
    + 'It is what counting the combinations gives, '
    + 'because each outcome of the first event '
    + 'can pair with each outcome of the second. '
    + 'And that is also why multiplying makes the answer smaller: '
    + 'asking for two things to happen is asking for more, '
    + 'so it must be less likely than either alone, '
    + 'which is a check you can apply to any answer you get.',

  recap:
    'You can write fractions and multiply them, '
    + 'and you have met the idea that some things are more likely than '
    + 'others. '
    + 'This measures the likelihood as a number.',

  method: [
    'List or count all the possible outcomes.',
    'Check they are equally likely.',
    'Count the outcomes that give the event.',
    'Write the probability as a fraction, and simplify.',
    'Check the answer is between 0 and 1.',
    'For NOT happening, subtract from 1.',
    'For both of two independent events, multiply.',
    'Check that a "both" answer came out smaller than either part.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A bag holds 3 red and 5 blue beads. '
        + 'What is the probability of drawing red?',
      steps: [
        'Total outcomes: 8 beads.',
        'Favourable: 3 red.',
      ],
      answer: '$\\frac{3}{8}$.',
    },
    {
      level: 4,
      ask: 'A fair die is rolled. '
        + 'What is the probability of NOT getting a 6?',
      steps: [
        'The probability of a 6 is $\\frac{1}{6}$.',
        'Subtract it from 1.',
      ],
      answer: '$\\frac{5}{6}$.',
    },
    {
      level: 5,
      ask: 'A coin is tossed twice. '
        + 'Find the probability of two heads, and explain the method.',
      steps: [
        'The four equally likely results are HH, HT, TH, TT.',
        'Only HH gives two heads.',
        'So the probability is $\\frac{1}{4}$.',
        'And $\\frac{1}{2} \\times \\frac{1}{2}$ is also '
          + '$\\frac{1}{4}$.',
      ],
      answer: '$\\frac{1}{4}$. '
        + 'Multiplying works because each outcome of the first toss '
        + 'pairs with each outcome of the second, '
        + 'giving four equally likely results.',
    },
  ],

  traps: [
    {
      mistake: 'Using the formula where outcomes are not equally likely.',
      why: 'Rain tomorrow is not one over two. '
        + 'The formula needs a fair die or a counted bag.',
    },
    {
      mistake: 'Adding probabilities for two events both happening.',
      why: 'Adding is for one OR the other. '
        + 'Both means multiply.',
    },
    {
      mistake: 'Giving a probability greater than 1.',
      why: 'Impossible. Check every answer against 0 and 1.',
    },
    {
      mistake: 'Forgetting that a drawn bead may not be replaced.',
      why: 'Without replacement the second draw has one fewer bead, '
        + 'so the events are not independent.',
    },
  ],

  figure: {
    alt: 'A two by two grid of the results of tossing a coin twice. The '
      + 'rows are the first toss, head or tail, and the columns are the '
      + 'second toss, head or tail. The four cells read HH, HT, TH and '
      + 'TT, and the HH cell is outlined in green. A note says four '
      + 'results, all equally likely, one of them HH, so the chance is a '
      + 'quarter, which is also a half times a half.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="320" y="28" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">why two independent probabilities multiply</text>'
      + '<text x="310" y="62" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">second toss</text>'
      + '<text x="255" y="92" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">H</text>'
      + '<text x="365" y="92" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">T</text>'
      + '<text x="150" y="182" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">first</text>'
      + '<text x="150" y="200" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">toss</text>'
      + '<text x="186" y="152" font-size="18" text-anchor="end" fill="currentColor" stroke="none">H</text>'
      + '<text x="186" y="232" font-size="18" text-anchor="end" fill="currentColor" stroke="none">T</text>'
      + '<rect x="200" y="100" width="110" height="80" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="255" y="148" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">HH</text>'
      + '<rect x="310" y="100" width="110" height="80"/>'
      + '<text x="365" y="148" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">HT</text>'
      + '<rect x="200" y="180" width="110" height="80"/>'
      + '<text x="255" y="228" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">TH</text>'
      + '<rect x="310" y="180" width="110" height="80"/>'
      + '<text x="365" y="228" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">TT</text>'
      + '<text x="450" y="122" font-size="15" fill="currentColor" stroke="none">four results, all</text>'
      + '<text x="450" y="142" font-size="15" fill="currentColor" stroke="none">equally likely</text>'
      + '<text x="450" y="176" font-size="15" fill="#0f8a4d" stroke="none">one of them is HH,</text>'
      + '<text x="450" y="196" font-size="15" fill="#0f8a4d" stroke="none">so the chance is</text>'
      + '<text x="450" y="216" font-size="15" fill="#0f8a4d" stroke="none">one quarter</text>'
      + '<text x="450" y="250" font-size="15" fill="#0f8a4d" stroke="none">and one half times</text>'
      + '<text x="450" y="270" font-size="15" fill="#0f8a4d" stroke="none">one half is a quarter</text>'
      + '<text x="320" y="320" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the multiplying is not a rule imposed on the problem,</text>'
      + '<text x="320" y="344" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">it is what counting the combinations gives</text>'
      + '<text x="320" y="380" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">asking for two things is asking for more, so it must be less likely</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The four things a question can ask for, '
        + 'and the check on each answer',
      columns: [
        'What you are finding',
        'How to work it out',
        'The check on your answer',
      ],
      rows: [
        [
          'The probability of one event',
          'The outcomes that give it, divided by the total number of '
            + 'equally likely outcomes',
          'It lies between 0 and 1',
        ],
        [
          'The probability that it does NOT happen',
          'One, less the probability that it does',
          'The two of them add to exactly 1',
        ],
        [
          'The probability of both of two independent events',
          'Multiply the two probabilities together',
          'It is smaller than either of the two parts on its own',
        ],
        [
          'Whether two events are independent at all',
          'Ask whether the first one changes the chances of the second',
          'If it does, they are not independent, and multiplying is '
            + 'simply wrong',
        ],
      ],
      note: 'Every row rests on the outcomes being equally likely. '
        + 'Check that before you count anything.',
    },
    {
      caption: 'Where outcomes can be taken as equally likely, '
        + 'and where they cannot',
      columns: ['The situation', 'Equally likely?', 'Why'],
      rows: [
        [
          'A fair die',
          'Yes',
          'Six faces, and no reason for any one of them to come up more '
            + 'often than another',
        ],
        [
          'A fair coin',
          'Yes',
          'Two sides, and the same for each of them',
        ],
        [
          'A well shuffled pack of cards',
          'Yes',
          'Shuffling is the thing that makes every position equally '
            + 'likely',
        ],
        [
          'A bag of counted beads, drawn without looking',
          'Yes',
          'Every bead has the same chance of being the one that comes out',
        ],
        [
          'Whether it rains tomorrow',
          'No',
          'There are two possibilities, but rain and no rain are nothing '
            + 'like equally likely',
        ],
      ],
      note: 'The last row is the commonest wrong answer in the topic. '
        + 'Two possibilities does not make the chance one over two.',
    },
  ],

  extension:
    'When a bead is NOT replaced, the second probability changes, '
    + 'because the bag has changed. '
    + 'Those events are dependent, '
    + 'and the second fraction is written for the bag as it then stands.',

  questions: [
    {
      id: 'prb-1',
      ask: 'The probability of a certain event is:',
      kind: 'choice',
      options: ['1', '0', '100'],
      answer: '1',
      teach: '0 is impossible, and everything else lies between.',
      level: 3,
    },
    {
      id: 'prb-2',
      ask: 'The probability of rain is 0.3. '
        + 'The probability of no rain is:',
      kind: 'choice',
      options: ['0.7', '0.3', '1.3'],
      answer: '0.7',
      teach: 'All the probabilities add to 1.',
      level: 4,
    },
    {
      id: 'prb-3',
      ask: 'Why do independent probabilities multiply?',
      kind: 'choice',
      options: [
        'Each outcome of one pairs with each outcome of the other',
        'Because the answer must be smaller',
        'It is a rule with no reason',
      ],
      answer: 'Each outcome of one pairs with each outcome of the other',
      teach: 'Two coin tosses give four equally likely results, '
        + 'and only one is two heads.',
      level: 5,
    },
  ],
})
