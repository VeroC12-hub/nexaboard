/**
 * Stored lessons for JHS 1 Mathematics.
 *
 * Written at about grade 7, with a `brief` form on every topic.
 *
 * ── What changes at JHS ────────────────────────────────────────────────────
 *
 * Primary mathematics is mostly about getting the right answer. JHS starts
 * asking for the reason as well, and examinations award marks for it. So
 * these lessons give the reason for every rule rather than the rule alone,
 * and several of them exist mainly to kill a trick the learner was taught
 * in primary that is about to start failing: "two minuses make a plus" and
 * "to divide fractions, flip and multiply" are both repeated everywhere and
 * explained almost nowhere.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── whole numbers and place value ────────────────────────────────────────── */

teach({
  topicId: 'whole-numbers-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Each place is ten times the one to its right. '
      + 'Standard form writes a number as a value between 1 and 10 '
      + 'multiplied by a power of ten.',
    method: [
      'Group digits in threes from the right to read a large number.',
      'For standard form, move the point until one digit sits before it.',
      'The number of places you moved is the power of ten.',
    ],
  },

  why:
    'Ghana has about 34,000,000 people, and the sun is '
    + '150,000,000 kilometres away. '
    + '000007 metres wide. '
    + 'Writing out all those noughts is slow, and one dropped '
    + 'nought changes the whole answer. '
    + 'How do you write a number that big, or that small, so that '
    + 'it is short and still exact?',

  notation:
    '4 times $10^7$, and it is said aloud as three point four '
    + 'times ten to the power seven. '
    + 'The first part must be at least 1 and less than 10, and it '
    + 'is called the mantissa. '
    + 'The raised 7 is the power, or index, and it says how many '
    + 'places the decimal point moves. '
    + 'Writing 34 times $10^6$ instead is the commonest way to '
    + 'lose a mark, because 34 is not less than 10.',

  idea:
    'Place value does not stop at thousands. '
    + 'Each place is worth ten times the one to its right, for ever. '
    + 'When numbers get large or small, standard form writes them compactly: '
    + 'a number between 1 and 10, multiplied by a power of ten.',

  mechanism:
    'Standard form exists because very large and very small numbers are hard '
    + 'to read and easy to miscount. '
    + 'Writing 0.00000045 invites somebody to lose a nought. '
    + 'Writing it as $4.5 \\times 10^{-7}$ does not, '
    + 'and it makes two numbers instantly comparable: '
    + 'you compare the powers first and only look at the digits if those tie. '
    + 'The rule for finding the power is not arbitrary. '
    + 'Moving the point one place left divides by ten, '
    + 'so you must multiply by ten once to put it back. '
    + 'The power is simply a record of how many times you did that.',

  recap:
    'Place value means the position of a digit decides what it '
    + 'is worth. '
    + 'In 4,382 the 3 is not worth 3. '
    + 'It sits in the hundreds place, so it is worth 300. '
    + 'Each place to the left is worth ten times the place on its '
    + 'right: ones, tens, hundreds, thousands. '
    + 'This lesson carries that same pattern much further, and '
    + 'gives a short way of writing the numbers it reaches.',

  method: [
    'To read a large number, group the digits in threes from the right.',
    'For standard form, place the point so exactly one non-zero digit sits '
      + 'before it.',
    'Count how many places you moved it.',
    'Moved left: the power is positive. Moved right: negative.',
    'Check by moving it back and seeing you get the original.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Write 45,000 in standard form.',
      steps: [
        'Place the point after the 4: 4.5',
        'The point moved 4 places to the left.',
      ],
      answer: '$4.5 \\times 10^4$.',
    },
    {
      level: 4,
      ask: 'Write 0.0032 in standard form.',
      steps: [
        'One non-zero digit before the point gives 3.2',
        'The point moved 3 places to the right.',
        'Moving right makes the power negative.',
      ],
      answer: '$3.2 \\times 10^{-3}$.',
    },
    {
      level: 5,
      ask: 'Which is larger, $3.1 \\times 10^5$ or $9.8 \\times 10^4$?',
      steps: [
        'Compare the powers first: 5 beats 4.',
        'A larger power wins regardless of the digits in front.',
      ],
      answer: 'The first. 310,000 against 98,000.',
    },
  ],

  traps: [
    {
      mistake: 'Leaving more than one digit before the point.',
      why: '$45 \\times 10^3$ is the right value and is not standard form. '
        + 'Exactly one non-zero digit goes before the point.',
    },
    {
      mistake: 'Getting the sign of the power backwards.',
      why: 'Small numbers take negative powers. '
        + 'Check by converting back: if you get the original, it is right.',
    },
    {
      mistake: 'Comparing the digits before the powers.',
      why: '9.8 looks bigger than 3.1 and the number is smaller. '
        + 'The power decides first.',
    },
  ],

  extension:
    'Scientists use standard form because the quantities they work with span '
    + 'an enormous range: the mass of an electron and the distance to a star '
    + 'written out in full would be unreadable and easy to mistype. '
    + 'Calculators show it as E notation for the same reason.',

  figure: {
    alt: 'Two numbers with the decimal point moved. In 45000 the point '
      + 'moves four places left to sit between the 4 and the 5, so the '
      + 'power of ten is 4. In 0.0032 it moves three places right to '
      + 'sit between the 3 and the 2, so the power of ten is negative '
      + '3.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="40" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">moving the point, and counting the moves</text>'
      + '<text x="120" y="124" font-size="30" text-anchor="middle" fill="currentColor" stroke="none">4</text>'
      + '<text x="155" y="124" font-size="30" text-anchor="middle" fill="currentColor" stroke="none">5</text>'
      + '<text x="190" y="124" font-size="30" text-anchor="middle" fill="currentColor" stroke="none">0</text>'
      + '<text x="225" y="124" font-size="30" text-anchor="middle" fill="currentColor" stroke="none">0</text>'
      + '<text x="260" y="124" font-size="30" text-anchor="middle" fill="currentColor" stroke="none">0</text>'
      + '<text x="288" y="124" font-size="30" text-anchor="middle" fill="currentColor" stroke="none">.</text>'
      + '<line x1="284" y1="150" x2="138" y2="150" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="138" y1="150" x2="146.6" y2="144.8" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="138" y1="150" x2="146.6" y2="155.2" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="211" y="180" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">4 jumps left</text>'
      + '<text x="470" y="124" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">so the power is 4</text>'
      + '<text x="120" y="254" font-size="30" text-anchor="middle" fill="currentColor" stroke="none">0</text>'
      + '<text x="143" y="254" font-size="30" text-anchor="middle" fill="currentColor" stroke="none">.</text>'
      + '<text x="166" y="254" font-size="30" text-anchor="middle" fill="currentColor" stroke="none">0</text>'
      + '<text x="201" y="254" font-size="30" text-anchor="middle" fill="currentColor" stroke="none">0</text>'
      + '<text x="236" y="254" font-size="30" text-anchor="middle" fill="currentColor" stroke="none">3</text>'
      + '<text x="271" y="254" font-size="30" text-anchor="middle" fill="currentColor" stroke="none">2</text>'
      + '<line x1="145" y1="280" x2="253" y2="280" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="253" y1="280" x2="244.4" y2="285.2" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="253" y1="280" x2="244.4" y2="274.8" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="199" y="310" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">3 jumps right</text>'
      + '<text x="470" y="254" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">so the power is negative 3</text>'
      + '<text x="320" y="366" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">moved left: positive power. moved right: negative power.</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The same numbers written in ordinary form and in standard form',
      columns: ['Ordinary form', 'Standard form', 'Power of ten'],
      rows: [
        ['45,000', '4.5 times 10 to the power 4', 'Positive 4'],
        ['310,000', '3.1 times 10 to the power 5', 'Positive 5'],
        ['98,000', '9.8 times 10 to the power 4', 'Positive 4'],
        ['0.0032', '3.2 times 10 to the power negative 3', 'Negative 3'],
        ['0.00000045', '4.5 times 10 to the power negative 7', 'Negative 7'],
      ],
      note: 'Every one of these is a number between 1 and 10 multiplied by '
        + 'a power of ten. That is the whole definition.',
    },
  ],
  questions: [
    {
      id: 'wn-1',
      ask: 'Write 45,000 in standard form. What is the power of ten?',
      kind: 'numeric',
      answer: '4',
      accept: ['four'],
      teach: 'The point moves four places left to sit after the 4, '
        + 'so the power is 4.',
      level: 3,
    },
    {
      id: 'wn-2',
      ask: 'In standard form, how many digits go before the decimal point?',
      kind: 'numeric',
      answer: '1',
      accept: ['one'],
      teach: 'Exactly one non-zero digit. '
        + '45 times 10 cubed is the right value but not standard form.',
      level: 4,
    },
    {
      id: 'wn-3',
      ask: 'Which is larger: 3.1 x 10^5 or 9.8 x 10^4?',
      kind: 'choice',
      options: ['3.1 x 10^5', '9.8 x 10^4'],
      answer: '3.1 x 10^5',
      teach: 'Compare the powers first. '
        + '5 beats 4, so the digits in front never get a say.',
      level: 5,
    },
  ],
})

/* ── integers ─────────────────────────────────────────────────────────────── */

teach({
  topicId: 'integers',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Integers include negative numbers. '
      + 'Subtracting a negative adds, because taking away a debt leaves you '
      + 'better off.',
    method: [
      'Adding a negative moves left on the number line.',
      'Subtracting a negative moves right.',
      'Two signs the same multiply to a plus; different signs give a minus.',
    ],
  },

  why:
    'You have 20 cedis on your mobile money and you send 50 '
    + 'cedis to a friend. '
    + 'The balance that shows is not 30, and it is not nothing '
    + 'either. '
    + 'It shows minus 30, which means you owe 30 cedis. '
    + 'What kind of number is that, and how do you add and '
    + 'subtract with it?',

  notation:
    'A negative number is written with a minus sign in front, '
    + 'so minus three is written $-3$ and said aloud as negative '
    + 'three. '
    + 'The same sign is also used for subtracting, which is why '
    + 'two of them can end up side by side. '
    + 'When that happens the second one goes in brackets, as in '
    + '$5 - (-3)$, said five subtract negative three. '
    + 'Writing that without the brackets is the commonest way to '
    + 'lose a mark.',

  idea:
    'Integers are the whole numbers together with their negatives. '
    + 'They measure things that can go below nothing: '
    + 'a debt, a temperature below freezing, a loss. '
    + 'The rules that cause trouble are the ones with two signs.',

  mechanism:
    'Everybody is told that two minuses make a plus and almost nobody is told '
    + 'why, which is exactly why it is misremembered under pressure. '
    + 'Think about money. '
    + 'A negative is a debt, and taking a debt away leaves you better off, '
    + 'which is what subtracting a negative means and why it adds. '
    + 'Multiplying works the same way: a count of debts is a bigger debt, '
    + 'and an extra minus in front reverses whatever you had. '
    + 'The number line says the same thing: a minus turns you round, '
    + 'and two turns put you facing the way you started.',

  recap:
    'A number line is a straight line with the numbers marked '
    + 'along it in order. '
    + 'On it, adding means moving to the right and subtracting '
    + 'means moving to the left. '
    + 'Start at 5, subtract 3, and you move three steps left to '
    + '2. '
    + 'If you keep moving left past 0 you do not stop, and the '
    + 'numbers on that side are written with a minus sign in '
    + 'front. '
    + 'Those numbers are what this lesson is about.',

  method: [
    'Adding a positive moves right. Adding a negative moves left.',
    'Subtracting a positive moves left. Subtracting a negative moves right.',
    'For multiplying and dividing, work out the digits first.',
    'Then the sign: same signs give a positive, different signs a negative.',
    'Check against sense: a debt times a count should still be a debt.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is negative 7 plus 3?',
      steps: [
        'Start at negative 7 on the line.',
        'Adding 3 moves three places right.',
      ],
      answer: 'Negative 4.',
    },
    {
      level: 4,
      ask: 'What is 5 minus negative 3?',
      steps: [
        'Subtracting a negative moves right.',
        'So this is 5 plus 3.',
      ],
      answer: '8. Taking away a debt of 3 leaves you 3 better off.',
    },
    {
      level: 5,
      ask: 'What is negative 6 times negative 4, and why is it positive?',
      steps: [
        'Digits first: 6 times 4 is 24.',
        'Signs: both negative, so the answer is positive.',
        'Negative 6 times 4 would be negative 24. The second minus reverses '
          + 'it.',
      ],
      answer: '24. The second negative reverses the first one.',
    },
  ],

  traps: [
    {
      mistake: 'Applying the two minuses rule to addition.',
      why: 'Negative 3 plus negative 4 is negative 7, not positive. '
        + 'The rule is about subtracting and multiplying, not adding.',
    },
    {
      mistake: 'Doing signs and digits together.',
      why: 'Work out the digits, then decide the sign. '
        + 'Two separate steps make two separate mistakes less likely.',
    },
    {
      mistake: 'Reading negative 3 squared as negative 9.',
      why: 'If the negative is inside the bracket it is squared too, '
        + 'giving 9. Without a bracket, only the 3 is squared.',
    },
  ],

  extension:
    'A bank statement is integers in daily use: '
    + 'deposits positive, withdrawals negative, '
    + 'and a reversed charge is a subtraction of a negative '
    + 'that leaves you better off. '
    + 'If the rule ever slips, ask what it would mean in money.',

  figure: {
    alt: 'A number line from negative 8 to 8. An arrow above it starts '
      + 'at 5 and moves three places right to 8, labelled as '
      + 'subtracting negative 3. Below it, a red box saying you owe 3 '
      + 'cedis, an arrow saying the debt is taken off you, and a green '
      + 'box saying you are 3 better off, so 5 minus negative 3 is 8.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">subtracting a negative moves you right</text>'
      + '<line x1="60" y1="150" x2="580" y2="150" stroke-width="4"/>'
      + '<line x1="60.0" y1="140" x2="60.0" y2="160"/>'
      + '<line x1="92.5" y1="140" x2="92.5" y2="160"/>'
      + '<line x1="125.0" y1="140" x2="125.0" y2="160"/>'
      + '<line x1="157.5" y1="140" x2="157.5" y2="160"/>'
      + '<line x1="190.0" y1="140" x2="190.0" y2="160"/>'
      + '<line x1="222.5" y1="140" x2="222.5" y2="160"/>'
      + '<line x1="255.0" y1="140" x2="255.0" y2="160"/>'
      + '<line x1="287.5" y1="140" x2="287.5" y2="160"/>'
      + '<line x1="320.0" y1="140" x2="320.0" y2="160"/>'
      + '<line x1="352.5" y1="140" x2="352.5" y2="160"/>'
      + '<line x1="385.0" y1="140" x2="385.0" y2="160"/>'
      + '<line x1="417.5" y1="140" x2="417.5" y2="160"/>'
      + '<line x1="450.0" y1="140" x2="450.0" y2="160"/>'
      + '<line x1="482.5" y1="140" x2="482.5" y2="160"/>'
      + '<line x1="515.0" y1="140" x2="515.0" y2="160"/>'
      + '<line x1="547.5" y1="140" x2="547.5" y2="160"/>'
      + '<line x1="580.0" y1="140" x2="580.0" y2="160"/>'
      + '<text x="60.0" y="184" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">-8</text>'
      + '<text x="125.0" y="184" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">-6</text>'
      + '<text x="190.0" y="184" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">-4</text>'
      + '<text x="255.0" y="184" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">-2</text>'
      + '<text x="320.0" y="184" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">0</text>'
      + '<text x="385.0" y="184" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">2</text>'
      + '<text x="450.0" y="184" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">4</text>'
      + '<text x="515.0" y="184" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">6</text>'
      + '<text x="580.0" y="184" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">8</text>'
      + '<circle cx="482.5" cy="150" r="8" fill="#0f8a4d" stroke="#0f8a4d"/>'
      + '<text x="455" y="118" font-size="19" text-anchor="end" fill="currentColor" stroke="none">start at 5</text>'
      + '<line x1="482.5" y1="112" x2="580.0" y2="112" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="580.0" y1="112" x2="571.4" y2="117.2" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="580.0" y1="112" x2="571.4" y2="106.8" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="531" y="96" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">3 right</text>'
      + '<text x="320" y="224" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">the same thing in money</text>'
      + '<text x="320" y="250" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the debt is taken off you</text>'
      + '<path d="M 60 266 H 250 V 332 H 60 Z" stroke="#c8433a"/>'
      + '<text x="155" y="296" font-size="19" text-anchor="middle" fill="#c8433a" stroke="none">you owe 3 cedis</text>'
      + '<text x="155" y="318" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">that is negative 3</text>'
      + '<line x1="258" y1="299" x2="382" y2="299"/>'
      + '<line x1="382" y1="299" x2="373.4" y2="304.2"/>'
      + '<line x1="382" y1="299" x2="373.4" y2="293.8"/>'
      + '<path d="M 390 266 H 580 V 332 H 390 Z" stroke="#0f8a4d"/>'
      + '<text x="485" y="296" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">you are 3 better off</text>'
      + '<text x="485" y="318" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">that is plus 3</text>'
      + '<text x="320" y="366" font-size="22" text-anchor="middle" fill="#0f8a4d" stroke="none">so 5 minus negative 3 is 8</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The four sign rules read as money',
      columns: ['The line', 'What it means in money', 'The answer'],
      rows: [
        [
          '5 minus negative 3',
          'A debt of 3 is taken off you',
          '8, so you are better off',
        ],
        [
          'negative 3 plus negative 4',
          'A second debt of 4 arrives',
          'negative 7, a bigger debt',
        ],
        ['3 times negative 4', 'Three separate debts of 4', 'negative 12'],
        ['negative 6 times negative 4', 'Six debts of 4 taken off you', '24'],
      ],
      note: 'If a sign rule ever slips, ask what the line would mean in '
        + 'money. The two minuses rule belongs to subtracting and '
        + 'multiplying, never to adding.',
    },
  ],
  questions: [
    {
      id: 'int-1',
      ask: 'What is negative 7 plus 3?',
      kind: 'numeric',
      answer: '-4',
      accept: ['negative 4', 'minus 4', '−4'],
      teach: 'Start at negative 7 and move three right.',
      level: 3,
    },
    {
      id: 'int-2',
      ask: 'What is 5 minus negative 3?',
      kind: 'numeric',
      answer: '8',
      accept: ['eight'],
      teach: 'Subtracting a negative moves right, so it is 5 plus 3. '
        + 'Taking away a debt leaves you better off.',
      level: 4,
    },
    {
      id: 'int-3',
      ask: 'What is negative 3 plus negative 4?',
      kind: 'numeric',
      answer: '-7',
      accept: ['negative 7', 'minus 7', '−7'],
      teach: 'Negative 7. The two minuses rule is about subtracting and '
        + 'multiplying, not adding. Two debts make a bigger debt.',
      level: 5,
    },
  ],
})

/* ── approximation and significant figures ───────────────────────────────── */

teach({
  topicId: 'surds-approx',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Significant figures count from the first non-zero digit. '
      + 'Estimating first tells you roughly what the answer should be, '
      + 'so a wrong one stands out.',
    method: [
      'Find the first non-zero digit. Count from there.',
      'Look at the next digit: 5 or more rounds up.',
      'Estimate by rounding everything to one significant figure first.',
    ],
  },

  why:
    '82 metres and wants the floor area. '
    + '6934 square metres. '
    + '0034 of a square metre. '
    + 'Keeping four decimal places here is not more correct, only '
    + 'longer, so how many digits should the answer actually '
    + 'keep?',

  notation:
    'f. '
    + 'is said aloud as three significant figures. '
    + 'p. '
    + 'in the same way. '
    + '00456 has three significant figures but five decimal '
    + 'places. '
    + 'Rounding to the wrong one of the two is the commonest way '
    + 'to lose a mark, so read which one the question asked for '
    + 'before you round anything.',

  idea:
    'Significant figures count the digits that carry information, '
    + 'starting from the first non-zero one. '
    + '0.00456 has three significant figures, not five: '
    + 'the leading noughts only place the number, they do not measure it.',

  mechanism:
    'The point of estimating is not to get the answer. '
    + 'It is to know what the answer should look like before you work it out, '
    + 'so that a mistake announces itself. '
    + 'Round everything to one significant figure, do the easy sum in your '
    + 'head, and you have a rough target. '
    + 'If 387 times 21 should be about 400 times 20, which is 8,000, '
    + 'then an answer of 812 or 81,270 is wrong, and you can see it in two '
    + 'seconds without checking a single step. '
    + 'This catches the mistakes that matter most: '
    + 'misplaced decimal points and dropped digits, '
    + 'which are large and silent.',

  recap:
    'Rounding means swapping a number for a nearby one that is '
    + 'easier to use. '
    + 'To round 384 to the nearest ten, look at the digit after '
    + 'the tens place. '
    + 'It is 4, which is less than 5, so the tens digit stays and '
    + '384 becomes 380. '
    + 'Had that digit been 5 or more, the tens digit would go up '
    + 'by one, so 386 becomes 390. '
    + 'This lesson rounds a different way: not by which place you '
    + 'stop at, but by how many digits you keep.',

  method: [
    'Find the first non-zero digit. That is the first significant figure.',
    'Count across from there to the number of figures you want.',
    'Look at the next digit along.',
    'Five or more: round up. Less than five: leave it.',
    'Keep enough noughts to hold the places.',
    'To estimate, round each number to one significant figure, then compute.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How many significant figures does 0.00456 have?',
      steps: [
        'Start counting at the 4, the first non-zero digit.',
        '4, 5, 6.',
      ],
      answer: 'Three. The leading noughts only place the number.',
    },
    {
      level: 4,
      ask: 'Round 3,847 to two significant figures.',
      steps: [
        'The first two significant figures are 3 and 8.',
        'The next digit is 4, which is less than 5.',
        'Keep the noughts to hold the places.',
      ],
      answer: '3,800.',
    },
    {
      level: 5,
      ask: 'Estimate 387 times 21, and say what it catches.',
      steps: [
        'Round each to one significant figure: 400 and 20.',
        '400 times 20 is 8,000.',
      ],
      answer: 'About 8,000. An answer of 812 or 81,270 is now obviously '
        + 'wrong, and those are the usual slips.',
    },
  ],

  traps: [
    {
      mistake: 'Counting leading noughts as significant.',
      why: 'In 0.00456 they place the number, they do not measure it. '
        + 'Count from the 4.',
    },
    {
      mistake: 'Dropping the noughts when rounding a large number.',
      why: '3,847 to two significant figures is 3,800, not 38. '
        + 'The noughts hold the places.',
    },
    {
      mistake: 'Skipping the estimate because the calculator is reliable.',
      why: 'The calculator is. Your typing is not. '
        + 'The estimate checks what you entered, not what it computed.',
    },
  ],

  extension:
    'A measurement cannot be more accurate than the instrument that made it. '
    + 'Writing 4.286 metres from a tape marked in centimetres claims '
    + 'an accuracy you did not have. '
    + 'Significant figures are how a scientist states how much they actually '
    + 'know.',

  figure: {
    alt: 'The sum 387 times 21 with each number rounded to one '
      + 'significant figure, giving 400 times 20, which is about 8,000. '
      + 'Beside it three possible answers: 812 marked far too small, '
      + '8,127 marked about right, and 81,270 marked ten times too big.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="40" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">the estimate is a net that catches a big slip</text>'
      + '<text x="150" y="100" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">387 times 21</text>'
      + '<line x1="150" y1="118" x2="150" y2="158"/>'
      + '<line x1="150" y1="158" x2="144.8" y2="149.4"/>'
      + '<line x1="150" y1="158" x2="155.2" y2="149.4"/>'
      + '<text x="150" y="186" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">400 times 20</text>'
      + '<text x="150" y="222" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">each rounded to one figure</text>'
      + '<text x="150" y="268" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">about 8,000</text>'
      + '<line x1="300" y1="70" x2="300" y2="370"/>'
      + '<text x="330" y="100" font-size="19" text-anchor="start" fill="currentColor" stroke="none">an answer of</text>'
      + '<text x="340" y="150" font-size="24" text-anchor="start" fill="#c8433a" stroke="none">812</text>'
      + '<text x="400" y="150" font-size="19" text-anchor="start" fill="#c8433a" stroke="none">far too small</text>'
      + '<text x="340" y="204" font-size="24" text-anchor="start" fill="#0f8a4d" stroke="none">8,127</text>'
      + '<text x="430" y="204" font-size="19" text-anchor="start" fill="#0f8a4d" stroke="none">about right</text>'
      + '<text x="340" y="258" font-size="24" text-anchor="start" fill="#c8433a" stroke="none">81,270</text>'
      + '<text x="445" y="258" font-size="19" text-anchor="start" fill="#c8433a" stroke="none">ten times too big</text>'
      + '<text x="330" y="320" font-size="18" text-anchor="start" fill="currentColor" stroke="none">and you knew it in two seconds,</text>'
      + '<text x="330" y="348" font-size="18" text-anchor="start" fill="currentColor" stroke="none">without checking a single step</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Rounding 3,847 to each number of significant figures',
      columns: ['Figures kept', 'It becomes', 'Why'],
      rows: [
        ['One', '4,000', 'The next digit is 8, so round up'],
        ['Two', '3,800', 'The next digit is 4, so leave it'],
        ['Three', '3,850', 'The next digit is 7, so round up'],
        ['Four', '3,847', 'Nothing is left to drop'],
      ],
      note: 'The noughts hold the places. Rounding to two figures gives '
        + '3,800 and never 38.',
    },
  ],
  questions: [
    {
      id: 'sf-1',
      ask: 'How many significant figures in 0.00456?',
      kind: 'numeric',
      answer: '3',
      accept: ['three'],
      teach: 'Count from the first non-zero digit. '
        + 'The leading noughts place the number rather than measure it.',
      level: 3,
    },
    {
      id: 'sf-2',
      ask: 'Round 3,847 to two significant figures.',
      kind: 'numeric',
      answer: '3800',
      accept: ['3,800', 'three thousand eight hundred'],
      teach: 'The next digit is 4, so round down, and keep the noughts to '
        + 'hold the places.',
      level: 4,
    },
    {
      id: 'sf-3',
      ask: 'Estimate 387 times 21 to the nearest thousand.',
      kind: 'numeric',
      answer: '8000',
      accept: ['8,000', 'eight thousand'],
      teach: '400 times 20. The estimate is there to catch a misplaced '
        + 'decimal point, which is the mistake that costs most.',
      level: 5,
    },
  ],
})

/* ── the four operations on fractions ─────────────────────────────────────── */

teach({
  topicId: 'fraction-operations',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Adding needs a common bottom. Multiplying does not. '
      + 'Dividing flips the second fraction, because dividing by a half '
      + 'asks how many halves fit in.',
    method: [
      'Add or subtract: make the bottoms match, then work on the tops.',
      'Multiply: tops together, bottoms together.',
      'Divide: flip the second fraction and multiply.',
    ],
  },

  why:
    'You have 3 litres of palm oil and bottles that hold half a litre. '
    + 'You want to know how many bottles you can fill. '
    + 'Dividing usually makes a number smaller, '
    + 'so 3 divided by a half ought to come out under 3. '
    + 'But you can see with your own eyes that 3 litres '
    + 'fills more than 3 half-litre bottles. '
    + 'So why does dividing here make the answer bigger?',

  notation:
    'A fraction is written with one number above a line '
    + 'and another below it. '
    + 'The number on top is called the numerator. '
    + 'The one below is the denominator. '
    + 'So 3 over 4 is said "three quarters", '
    + 'or "three over four" while you are working. '
    + 'The commonest way to lose a mark in division '
    + 'is to flip the first fraction instead of the second.',

  idea:
    'The four operations on fractions follow different rules. '
    + 'That is what makes them confusing. '
    + 'One of them is worth understanding instead of memorising. '
    + 'It is division, because the flip has a reason behind it.',

  mechanism:
    'The flip is the one worth understanding, '
    + 'because memorised without a reason it gets applied to multiplication '
    + 'too. '
    + 'Ask what dividing means: how many of these fit into that. '
    + '3 divided by a half is asking how many halves fit into 3. '
    + 'The answer is 6, which is 3 times 2. '
    + 'Dividing by a half doubled the number, '
    + 'because halves are small and many of them fit. '
    + 'So dividing by a fraction less than one makes the answer bigger, '
    + 'which feels wrong until you see what the question was actually '
    + 'asking.',

  recap:
    'A fraction is a number written as one number over another. '
    + 'In three quarters, the 4 underneath says the whole was cut '
    + 'into 4 equal parts. '
    + 'The 3 on top says you have 3 of them. '
    + 'Two fractions can be the same amount written differently. '
    + 'Cut each quarter in two and three quarters becomes six eighths. '
    + 'That is called an equivalent fraction, '
    + 'and it is made by multiplying top and bottom '
    + 'by the same number. '
    + 'It is also how you add fractions with different bottoms: '
    + 'turn them into eighths first, then add the tops. '
    + 'Multiplying and dividing are the two that are new here.',

  method: [
    'Adding or subtracting: find a bottom both divide into, convert, then '
      + 'add the tops.',
    'Multiplying: multiply the tops, multiply the bottoms.',
    'Cancel before multiplying where you can. It keeps the numbers small.',
    'Dividing: flip the second fraction, then multiply.',
    'Turn mixed numbers into improper fractions before doing anything.',
    'Simplify at the end.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is two thirds times three quarters?',
      steps: [
        'Tops: 2 times 3 is 6.',
        'Bottoms: 3 times 4 is 12.',
        'Six twelfths simplifies.',
      ],
      answer: 'One half.',
    },
    {
      level: 4,
      ask: 'What is three quarters divided by one half?',
      steps: [
        'Flip the second: one half becomes two over one.',
        'Now multiply: 3 times 2 is 6, and 4 times 1 is 4.',
        'Six quarters simplifies.',
      ],
      answer: 'One and a half.',
    },
    {
      level: 5,
      ask: 'Why is 3 divided by a half equal to 6 and not 1.5?',
      steps: [
        'Dividing asks how many fit in.',
        'How many halves fit into 3?',
        'Six of them.',
      ],
      answer: '6. Dividing by something smaller than one gives a larger '
        + 'answer, because many of them fit.',
    },
  ],

  traps: [
    {
      mistake: 'Finding a common bottom before multiplying.',
      why: 'Multiplying does not need one. '
        + 'It wastes time and makes the numbers large.',
    },
    {
      mistake: 'Flipping the first fraction instead of the second.',
      why: 'Only the one you are dividing by gets flipped. '
        + 'Check against 3 divided by a half: the answer must be 6.',
    },
    {
      mistake: 'Leaving a mixed number in place.',
      why: 'Convert to an improper fraction first. '
        + 'Multiplying a mixed number as it stands gives nonsense.',
    },
  ],

  extension:
    'Dividing by a fraction turns up constantly in real work: '
    + 'how many half metre lengths from a 7 metre roll, '
    + 'how many three quarter cups from a bag of flour. '
    + 'Every one of those is the question "how many of these fit into that", '
    + 'which is why the answers come out larger than you expect.',

  figure: {
    alt: 'A bar three units long, drawn above the same bar cut into six '
      + 'half units numbered 1 to 6, which shows that six halves fit '
      + 'into 3, so 3 divided by one half is 6.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="40" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">dividing asks how many of these fit into that</text>'
      + '<text x="60" y="84" font-size="19" text-anchor="start" fill="currentColor" stroke="none">a length of 3</text>'
      + '<path d="M 60 96 H 540 V 156 H 60 Z"/>'
      + '<line x1="220" y1="96" x2="220" y2="156"/>'
      + '<line x1="380" y1="96" x2="380" y2="156"/>'
      + '<text x="140" y="134" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text>'
      + '<text x="300" y="134" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text>'
      + '<text x="460" y="134" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">1</text>'
      + '<text x="60" y="196" font-size="19" text-anchor="start" fill="#0f8a4d" stroke="none">the same length cut into halves</text>'
      + '<path d="M 60 208 H 540 V 268 H 60 Z" stroke="#0f8a4d"/>'
      + '<line x1="140" y1="208" x2="140" y2="268" stroke="#0f8a4d"/>'
      + '<line x1="220" y1="208" x2="220" y2="268" stroke="#0f8a4d"/>'
      + '<line x1="300" y1="208" x2="300" y2="268" stroke="#0f8a4d"/>'
      + '<line x1="380" y1="208" x2="380" y2="268" stroke="#0f8a4d"/>'
      + '<line x1="460" y1="208" x2="460" y2="268" stroke="#0f8a4d"/>'
      + '<text x="100" y="246" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">1</text>'
      + '<text x="180" y="246" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">2</text>'
      + '<text x="260" y="246" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">3</text>'
      + '<text x="340" y="246" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">4</text>'
      + '<text x="420" y="246" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">5</text>'
      + '<text x="500" y="246" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">6</text>'
      + '<text x="320" y="306" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">six halves fit into 3</text>'
      + '<text x="320" y="344" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">so 3 divided by one half is 6, which is 3 times 2</text>'
      + '<text x="320" y="378" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">halves are small, so many of them fit</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What each operation needs, and what it does to the size of the '
        + 'answer',
      columns: ['Operation', 'Bottoms must match', 'Worked on a half', 'The answer'],
      rows: [
        ['Add', 'Yes', 'one half plus one quarter', 'Three quarters, larger'],
        ['Subtract', 'Yes', 'one half minus one quarter', 'One quarter, smaller'],
        ['Multiply', 'No', '3 times one half', 'One and a half, smaller than 3'],
        ['Divide', 'No', '3 divided by one half', '6, larger than 3'],
      ],
      note: 'Multiplying by a fraction below one makes the answer smaller. '
        + 'Dividing by one makes it larger, because you are asking how '
        + 'many of them fit in.',
    },
  ],
  questions: [
    {
      id: 'fo-1',
      ask: 'Do you need a common denominator to multiply fractions?',
      kind: 'choice',
      options: ['No', 'Yes'],
      answer: 'No',
      teach: 'Only adding and subtracting need one. '
        + 'Multiply tops together and bottoms together.',
      level: 3,
    },
    {
      id: 'fo-2',
      ask: 'What is 3 divided by one half?',
      kind: 'numeric',
      answer: '6',
      accept: ['six'],
      teach: 'How many halves fit into 3? Six. '
        + 'Dividing by something less than one makes the answer bigger.',
      level: 4,
    },
    {
      id: 'fo-3',
      ask: 'When dividing fractions, which one do you flip?',
      kind: 'choice',
      options: ['The second', 'The first', 'Both'],
      answer: 'The second',
      teach: 'The one you are dividing by. '
        + 'Check against 3 divided by a half: it must come to 6.',
      level: 5,
    },
  ],
})

/* ── substitution ─────────────────────────────────────────────────────────── */

teach({
  topicId: 'substitution',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Substitution puts a number in place of a letter and works the '
      + 'expression out. '
      + 'Use brackets when you substitute, and follow the order of '
      + 'operations.',
    method: [
      'Write the expression out with brackets where each letter was.',
      'Put the numbers inside the brackets.',
      'Work through: brackets, powers, times and divide, then add and '
        + 'subtract.',
    ],
  },

  why:
    'A tro-tro mate charges 2 cedis to board and 1 cedi more '
    + 'for every stop you pass. '
    + 'As a rule, the fare is 2 plus 1 times the number of stops. '
    + 'Now one passenger going seven stops asks what to pay, and '
    + 'another going three stops asks as well. '
    + 'How do you get a number out of a rule written in letters, '
    + 'without doing the whole thing again from the start each '
    + 'time?',

  notation:
    'A number written next to a letter means multiply, so 2a '
    + 'means 2 times a. '
    + 'Two letters written together mean the same thing, so ab '
    + 'means a times b. '
    + 'A raised number applies only to the letter it sits on, so '
    + '$3a^2$ means 3 times a times a, and not 3a times 3a. '
    + 'Doubling instead of squaring is the commonest way to lose '
    + 'a mark: when a is 5, $a^2$ is 25 and not 10.',

  idea:
    'Substitution means replacing each letter with its value '
    + 'and then working the expression out. '
    + 'If a is 3 and b is 4, then 2a plus b is 2 times 3 plus 4, which is 10.',

  mechanism:
    'Two things cause almost every mistake here, and brackets fix both. '
    + 'The first is a negative value, which loses its sign when it is '
    + 'squared without one. '
    + 'The second is an implied multiplication: 2a means 2 times a, and '
    + 'running the two digits together looks perfectly plausible on the '
    + 'page. '
    + 'A bracket makes both of them impossible to write.',

  recap:
    'A letter can stand in for a number. '
    + 'If a bag of rice costs c cedis, then two bags cost 2c, '
    + 'whatever c turns out to be. '
    + 'There is also a fixed order for working any calculation '
    + 'out: brackets first, then powers, then multiply and '
    + 'divide, then add and subtract. '
    + 'So 2 plus 3 times 4 is 14 and not 20, because the '
    + 'multiplying is done before the adding. '
    + 'This lesson uses both of those ideas at once.',

  method: [
    'Copy the expression, putting a bracket where each letter was.',
    'Write the value inside each bracket.',
    'Now work it out: brackets first, then powers.',
    'Then multiply and divide, left to right.',
    'Then add and subtract, left to right.',
    'Check a negative value gave the sign you expected.',
  ],

  worked: [
    {
      level: 3,
      ask: 'If a is 3 and b is 4, what is 2a plus b?',
      steps: [
        'Write it as 2 times (3) plus (4).',
        '2 times 3 is 6.',
        '6 plus 4.',
      ],
      answer: '10.',
    },
    {
      level: 4,
      ask: 'If x is negative 2, what is x squared?',
      steps: [
        'Write it as (negative 2) squared.',
        'Negative 2 times negative 2.',
        'Same signs give a positive.',
      ],
      answer: '4. Without the bracket people write negative 4.',
    },
    {
      level: 5,
      ask: 'If p is 2 and q is 5, what is 3p squared plus 2q?',
      steps: [
        'Write it as 3 times (2) squared plus 2 times (5).',
        'Powers before multiplying: (2) squared is 4.',
        '3 times 4 is 12. 2 times 5 is 10.',
      ],
      answer: '22. Only the p is squared, not the 3p.',
    },
  ],

  traps: [
    {
      mistake: 'Substituting without brackets.',
      why: 'It is the single cause of most sign errors. '
        + 'Brackets take a second and prevent them.',
    },
    {
      mistake: 'Squaring the coefficient as well.',
      why: '3p squared means 3 times p squared. '
        + 'Only the p is squared unless a bracket says otherwise.',
    },
    {
      mistake: 'Working left to right and ignoring the order.',
      why: 'Powers come before multiplying, and multiplying before adding. '
        + 'The order is not a preference.',
    },
  ],

  extension:
    'Every formula you will use in science is substitution: '
    + 'speed equals distance over time, area equals length times width. '
    + 'The algebra is trivial and the marks are lost on signs and on the '
    + 'order, which is exactly what the bracket habit protects.',

  figure: {
    alt: 'The expression 3p squared plus 2q, with p as 2 and q as 5, '
      + 'rewritten with a bracket where each letter was, as 3 times (2) '
      + 'squared plus 2 times (5). Then the order of operations: powers '
      + 'first giving 3 times 4 plus 2 times 5, then multiplying to '
      + 'give 12 plus 10, then adding to give 22.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="38" font-size="23" text-anchor="middle" fill="currentColor" stroke="none">put a bracket where each letter was</text>'
      + '<text x="250" y="100" font-size="27" text-anchor="start" fill="currentColor" stroke="none">3p</text>'
      + '<text x="284" y="84" font-size="17" text-anchor="start" fill="currentColor" stroke="none">2</text>'
      + '<text x="295" y="100" font-size="27" text-anchor="start" fill="currentColor" stroke="none">+ 2q</text>'
      + '<text x="320" y="132" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">with p as 2 and q as 5</text>'
      + '<line x1="320" y1="146" x2="320" y2="180"/>'
      + '<line x1="320" y1="180" x2="314.8" y2="171.4"/>'
      + '<line x1="320" y1="180" x2="325.2" y2="171.4"/>'
      + '<text x="200" y="214" font-size="27" text-anchor="start" fill="#0f8a4d" stroke="none">3 × (2)</text>'
      + '<text x="297" y="198" font-size="17" text-anchor="start" fill="#0f8a4d" stroke="none">2</text>'
      + '<text x="308" y="214" font-size="27" text-anchor="start" fill="#0f8a4d" stroke="none">+ 2 × (5)</text>'
      + '<text x="150" y="272" font-size="19" text-anchor="start" fill="currentColor" stroke="none">powers first</text>'
      + '<text x="320" y="272" font-size="19" text-anchor="start" fill="currentColor" stroke="none">3 × 4 + 2 × 5</text>'
      + '<text x="150" y="308" font-size="19" text-anchor="start" fill="currentColor" stroke="none">then multiply</text>'
      + '<text x="320" y="308" font-size="19" text-anchor="start" fill="currentColor" stroke="none">12 + 10</text>'
      + '<text x="150" y="344" font-size="19" text-anchor="start" fill="currentColor" stroke="none">then add</text>'
      + '<text x="320" y="344" font-size="19" text-anchor="start" fill="#0f8a4d" stroke="none">22</text>'
      + '<text x="320" y="384" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">only the p is squared, because only the p is in a bracket</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Two mistakes the bracket makes impossible to write',
      columns: ['Expression', 'The value', 'Without a bracket', 'With a bracket'],
      rows: [
        [
          'x squared',
          'x is negative 2',
          'negative 2 squared, read as negative 4',
          '(negative 2) squared, which is 4',
        ],
        ['2a', 'a is 3', '23, the two digits run together', '2 times (3), which is 6'],
        [
          '3p squared',
          'p is 2',
          '3 times 2, all squared, which is 36',
          '3 times (2) squared, which is 12',
        ],
      ],
      note: 'The habit costs a second and removes a whole class of error.',
    },
  ],
  questions: [
    {
      id: 'sub-1',
      ask: 'If a is 3 and b is 4, what is 2a + b?',
      kind: 'numeric',
      answer: '10',
      accept: ['ten'],
      teach: '2 times 3 is 6, plus 4 is 10. '
        + '2a means 2 times a, not the digits side by side.',
      level: 3,
    },
    {
      id: 'sub-2',
      ask: 'If x is negative 2, what is x squared?',
      kind: 'numeric',
      answer: '4',
      accept: ['four'],
      teach: 'Write (negative 2) squared. '
        + 'Two negatives multiplied give a positive.',
      level: 4,
    },
    {
      id: 'sub-3',
      ask: 'If p is 2, what is 3p squared?',
      kind: 'numeric',
      answer: '12',
      accept: ['twelve'],
      teach: 'Only the p is squared: 3 times 4. '
        + 'Squaring the 3 as well would give 36.',
      level: 5,
    },
  ],
})

/* ── simplifying expressions ──────────────────────────────────────────────── */

teach({
  topicId: 'collecting-terms',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Like terms have exactly the same letter and the same power. '
      + '3x and 5x can be added. 3x and 3x squared cannot.',
    method: [
      'Group terms with the same letter and power.',
      'Add or subtract their numbers, keeping the letter part unchanged.',
      'Terms that do not match stay separate.',
    ],
  },

  why:
    'A mason is pricing a job. '
    + 'He needs 3 bags of cement, 2 trips of sand, 5 more bags of '
    + 'cement and 1 more trip of sand. '
    + 'He will tell you 8 bags and 3 trips, but he will never say '
    + '11 of anything. '
    + 'Why can the bags be added to the bags, and the trips to '
    + 'the trips, but never a bag to a trip?',

  notation:
    'Terms that can be put together are called like terms, and '
    + 'they carry the same letter raised to the same power. '
    + 'The number in front of a term is called its coefficient, '
    + 'so in 7x the coefficient is 7. '
    + 'A letter standing alone has a coefficient of 1, so x means '
    + '1x. '
    + 'Treating $x$ and $x^2$ as like terms is the commonest way '
    + 'to lose a mark: the power is different, so $3x + 2x^2$ '
    + 'cannot be shortened at all.',

  idea:
    'Simplifying means collecting terms that are alike, '
    + 'which means terms carrying the same letter raised to the same '
    + 'power. '
    + 'Terms that do not match are left exactly where they are, '
    + 'because they are not the same kind of thing.',

  mechanism:
    'The reason is what the letters stand for. '
    + 'x is a length and x squared is an area. '
    + 'You cannot add a length to an area any more than you can add '
    + '3 metres to 3 square metres and get 6 of anything. '
    + 'So "like terms" is not a rule about appearance. '
    + 'It is a rule about whether the two things are the same kind of '
    + 'quantity, '
    + 'and the letter with its power is what tells you.',

  recap:
    'In algebra a letter stands for a number, and a number in '
    + 'front of a letter means multiply. '
    + 'So 3x means three lots of x, and if x is 4 then 3x is 12. '
    + 'A piece like 3x, with its own sign and its own letter, is '
    + 'called a term. '
    + 'An expression is simply terms added together or '
    + 'subtracted. '
    + 'This lesson tidies an expression by gathering the terms '
    + 'that match.',

  method: [
    'Look at each term: its number, its letter, and its power.',
    'Two terms are alike only if the letter and the power both match.',
    'Add or subtract the numbers of like terms.',
    'Leave the letter part exactly as it was.',
    'Carry each term with the sign in front of it.',
    'Unlike terms stay separate. That is a finished answer, not a stuck one.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Simplify 3x plus 5x.',
      steps: [
        'Both are x to the power one.',
        'Add the numbers: 3 and 5.',
      ],
      answer: '8x.',
    },
    {
      level: 4,
      ask: 'Simplify 4a plus 3b minus 2a.',
      steps: [
        'The a terms: 4a minus 2a is 2a.',
        'The b term has nothing to pair with.',
      ],
      answer: '2a plus 3b. It is finished, even though two terms remain.',
    },
    {
      level: 5,
      ask: 'Why can 3x and 3x squared not be collected?',
      steps: [
        'x is a length. x squared is an area.',
        'They are different kinds of quantity.',
      ],
      answer: 'Because they are not the same kind of thing, '
        + 'the way metres and square metres are not.',
    },
  ],

  traps: [
    {
      mistake: 'Collecting terms with different powers.',
      why: '3x plus 3x squared is not 6x cubed or anything else. '
        + 'It stays as it is.',
    },
    {
      mistake: 'Losing the sign in front of a term.',
      why: 'In 4a minus 2a the second term is negative 2a. '
        + 'Carry the sign with the term, always.',
    },
    {
      mistake: 'Thinking an answer with two terms is unfinished.',
      why: '2a plus 3b is fully simplified. '
        + 'Not everything collapses to one term.',
    },
  ],

  extension:
    'This is why units matter in science. '
    + 'An equation whose two sides have different units is wrong '
    + 'before you check a single number, '
    + 'and it is the same reasoning as refusing to add x to x squared.',

  figure: {
    alt: 'A line labelled x beside a square of side x labelled x '
      + 'squared. The line is marked as a length of 3 metres and the '
      + 'square as an area of 3 square metres, with a note that 3 '
      + 'metres plus 3 square metres is not 6 of anything, so 3x plus '
      + '3x squared stays as it is.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="40" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">x is a length and x squared is an area</text>'
      + '<line x1="70" y1="150" x2="250" y2="150" stroke-width="4"/>'
      + '<line x1="70" y1="138" x2="70" y2="162"/>'
      + '<line x1="250" y1="138" x2="250" y2="162"/>'
      + '<text x="160" y="130" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">x</text>'
      + '<text x="160" y="188" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">a length</text>'
      + '<text x="160" y="214" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">3 metres</text>'
      + '<path d="M 380 90 H 530 V 240 H 380 Z"/>'
      + '<text x="455" y="80" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">x</text>'
      + '<text x="366" y="172" font-size="18" text-anchor="end" fill="currentColor" stroke="none">x</text>'
      + '<text x="455" y="172" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">x squared</text>'
      + '<text x="455" y="272" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">an area</text>'
      + '<text x="455" y="298" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">3 square metres</text>'
      + '<text x="320" y="348" font-size="21" text-anchor="middle" fill="#c8433a" stroke="none">3 metres plus 3 square metres is not 6 of anything</text>'
      + '<text x="320" y="382" font-size="21" text-anchor="middle" fill="#0f8a4d" stroke="none">so 3x plus 3x squared stays as it is</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Which pairs of terms can be collected, and which cannot',
      columns: ['The pair', 'Same letter', 'Same power', 'Collect them'],
      rows: [
        ['3x and 5x', 'Yes', 'Yes', 'Yes, giving 8x'],
        ['4a and minus 2a', 'Yes', 'Yes', 'Yes, giving 2a'],
        ['4a and 3b', 'No', 'Yes', 'No, they stay separate'],
        ['3x and 3x squared', 'Yes', 'No', 'No, a length and an area'],
      ],
      note: 'An answer with two terms left in it, like 2a plus 3b, is '
        + 'finished rather than stuck.',
    },
  ],
  questions: [
    {
      id: 'ct-1',
      ask: 'Simplify 3x + 5x.',
      kind: 'choice',
      options: ['8x', '8x squared', '15x'],
      answer: '8x',
      teach: 'Add the numbers and keep the letter part unchanged.',
      level: 3,
    },
    {
      id: 'ct-2',
      ask: 'Can 3x and 3x squared be collected?',
      kind: 'choice',
      options: ['No', 'Yes'],
      answer: 'No',
      teach: 'One is a length and one is an area. '
        + 'Different kinds of quantity cannot be added.',
      level: 4,
    },
    {
      id: 'ct-3',
      ask: 'Simplify 4a + 3b - 2a. What is the coefficient of a?',
      kind: 'numeric',
      answer: '2',
      accept: ['two', '2a'],
      teach: '4a minus 2a is 2a. The 3b has nothing to pair with and stays.',
      level: 5,
    },
  ],
})

/* ── factors, multiples, HCF and LCM ──────────────────────────────────────── */

teach({
  topicId: 'factors-multiples-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Break both numbers into primes. '
      + 'HCF multiplies the primes they share. '
      + 'LCM takes the highest power of every prime that appears.',
    method: [
      'Write each number as a product of primes.',
      'HCF: multiply the primes common to both.',
      'LCM: take every prime, at its highest power, and multiply.',
    ],
  },

  why:
    'A trader has 84 oranges and 126 limes. '
    + 'She wants to make gift bundles that are all exactly alike, '
    + 'with no fruit left over, and she wants them as large as '
    + 'possible. '
    + 'Listing every factor of 126 by hand would fill a page. '
    + 'How do you find the right bundle size without writing all '
    + 'those factors out?',

  notation:
    'The highest common factor is written HCF and the lowest '
    + 'common multiple LCM, and each is said as its letters. '
    + 'A number broken into primes is written with powers, so 12 '
    + 'breaks down as $2^2$ times 3, said two squared times '
    + 'three. '
    + 'Swapping the two is the commonest way to lose a mark, so '
    + 'check this: the HCF of two numbers is never bigger than '
    + 'either of them, and the LCM is never smaller than either.',

  idea:
    'Every whole number breaks into primes in exactly one way. '
    + '12 is 2 times 2 times 3. 18 is 2 times 3 times 3. '
    + 'From those two breakdowns you can read off both the highest common '
    + 'factor and the lowest common multiple.',

  mechanism:
    'Listing factors works for small numbers and collapses for large ones. '
    + 'Prime factorisation does not, and the reason it works is that '
    + 'the primes are the building blocks. '
    + 'A common factor can only be built from blocks both numbers have, '
    + 'so the HCF is what they share. '
    + 'A common multiple must contain every block each number needs, '
    + 'so the LCM takes the highest power of each. '
    + 'Once you see it as blocks, you are not remembering two procedures, '
    + 'you are reading two answers off one breakdown.',

  recap:
    'A factor of a number is a whole number that divides into '
    + 'it and leaves nothing over. '
    + 'The factors of 12 are 1, 2, 3, 4, 6 and 12, because each '
    + 'of those divides 12 exactly. '
    + 'A prime number has only two factors, itself and 1, so 2, '
    + '3, 5, 7 and 11 are prime and 12 is not. '
    + 'The highest common factor of two numbers is the biggest '
    + 'number that is a factor of both, and for 12 and 18 it is '
    + '6. '
    + 'This lesson finds that same thing by a method that still '
    + 'works when the numbers are far too big to list.',

  method: [
    'Divide each number by the smallest prime that goes into it.',
    'Keep dividing until you reach 1.',
    'Write each number as its primes multiplied together.',
    'HCF: take the primes in both, at the lower power, and multiply.',
    'LCM: take every prime that appears, at the higher power, and multiply.',
    'Check: HCF times LCM should equal the two numbers multiplied together.',
  ],

  worked: [
    {
      level: 4,
      ask: 'Find the HCF of 12 and 18.',
      steps: [
        '12 is 2 times 2 times 3.',
        '18 is 2 times 3 times 3.',
        'Shared: one 2 and one 3.',
      ],
      answer: '6.',
    },
    {
      level: 5,
      ask: 'Find the LCM of 12 and 18.',
      steps: [
        'Primes appearing: 2 and 3.',
        'Highest power of 2 is two of them, from the 12.',
        'Highest power of 3 is two of them, from the 18.',
        '2 times 2 times 3 times 3.',
      ],
      answer: '36.',
    },
    {
      level: 5,
      ask: 'Two buses leave together, one every 12 minutes and one every 18. '
        + 'When do they next leave together?',
      steps: [
        'This asks for a time that is a multiple of both.',
        'The first such time is the LCM.',
      ],
      answer: 'After 36 minutes.',
    },
  ],

  traps: [
    {
      mistake: 'Mixing up which one is which.',
      why: 'HCF is a factor, so it is smaller than both numbers. '
        + 'LCM is a multiple, so it is larger. '
        + 'If your answer is on the wrong side, you have swapped them.',
    },
    {
      mistake: 'Taking the lower power for the LCM.',
      why: 'The LCM must be divisible by both, '
        + 'so it needs the highest power of each prime.',
    },
    {
      mistake: 'Forgetting a prime that appears in only one number.',
      why: 'The LCM needs every prime that appears anywhere, '
        + 'not only the shared ones.',
    },
  ],

  extension:
    'The fact that every number factorises into primes in exactly one way '
    + 'is called the fundamental theorem of arithmetic, '
    + 'and it is the reason both of these methods are reliable. '
    + 'Without uniqueness, two people could get two different HCFs.',

  figure: {
    alt: 'Two factor trees side by side. 12 splits into 2 and 6, and the '
      + '6 into 2 and 3, so 12 is 2 times 2 times 3. 18 splits into 2 '
      + 'and 9, and the 9 into 3 and 3, so 18 is 2 times 3 times 3. The '
      + 'shared blocks are one 2 and one 3, giving a highest common '
      + 'factor of 6, and every block at its highest count gives a '
      + 'lowest common multiple of 36.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">one breakdown, two answers</text>'
      + '<text x="170" y="80" font-size="26" text-anchor="middle" fill="currentColor" stroke="none">12</text>'
      + '<line x1="170" y1="92" x2="120" y2="130"/>'
      + '<line x1="170" y1="92" x2="220" y2="130"/>'
      + '<text x="112" y="152" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">2</text>'
      + '<text x="228" y="152" font-size="26" text-anchor="middle" fill="currentColor" stroke="none">6</text>'
      + '<line x1="228" y1="170" x2="190" y2="206"/>'
      + '<line x1="228" y1="170" x2="268" y2="206"/>'
      + '<text x="182" y="228" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">2</text>'
      + '<text x="274" y="228" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">3</text>'
      + '<text x="170" y="266" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">12 is 2 × 2 × 3</text>'
      + '<text x="470" y="80" font-size="26" text-anchor="middle" fill="currentColor" stroke="none">18</text>'
      + '<line x1="470" y1="92" x2="420" y2="130"/>'
      + '<line x1="470" y1="92" x2="520" y2="130"/>'
      + '<text x="412" y="152" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">2</text>'
      + '<text x="528" y="152" font-size="26" text-anchor="middle" fill="currentColor" stroke="none">9</text>'
      + '<line x1="528" y1="170" x2="490" y2="206"/>'
      + '<line x1="528" y1="170" x2="568" y2="206"/>'
      + '<text x="482" y="228" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">3</text>'
      + '<text x="574" y="228" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">3</text>'
      + '<text x="470" y="266" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">18 is 2 × 3 × 3</text>'
      + '<text x="320" y="316" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">shared blocks: one 2 and one 3, so the HCF is 6</text>'
      + '<text x="320" y="350" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">highest count of each block: 2 × 2 × 3 × 3, so the LCM is 36</text>'
      + '<text x="320" y="384" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">check: 6 times 36 is 216, and 12 times 18 is 216</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Reading the HCF and the LCM off one pair of breakdowns',
      columns: [
        'Prime',
        'How many in 12',
        'How many in 18',
        'The HCF takes',
        'The LCM takes',
      ],
      rows: [
        ['2', 'Two', 'One', 'One, the lower count', 'Two, the higher count'],
        ['3', 'One', 'Two', 'One, the lower count', 'Two, the higher count'],
      ],
      note: 'The lower count for the HCF and the higher count for the LCM. '
        + 'That one difference is the whole of both methods.',
    },
  ],
  questions: [
    {
      id: 'hcf-1',
      ask: 'What is the HCF of 12 and 18?',
      kind: 'numeric',
      answer: '6',
      accept: ['six'],
      teach: 'They share one 2 and one 3, so 6.',
      level: 4,
    },
    {
      id: 'hcf-2',
      ask: 'What is the LCM of 12 and 18?',
      kind: 'numeric',
      answer: '36',
      accept: ['thirty six', 'thirty-six'],
      teach: 'Take the highest power of each prime: two 2s and two 3s.',
      level: 5,
    },
    {
      id: 'hcf-3',
      ask: 'Which is always larger, the HCF or the LCM?',
      kind: 'choice',
      options: ['The LCM', 'The HCF'],
      answer: 'The LCM',
      teach: 'An HCF is a factor so it cannot exceed either number. '
        + 'An LCM is a multiple so it cannot be smaller than either.',
      level: 4,
    },
  ],
})

/* ── linear equations ─────────────────────────────────────────────────────── */

teach({
  topicId: 'linear-equations',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An equation says two things are equal. '
      + 'Whatever you do to one side you must do to the other, '
      + 'or they stop being equal.',
    method: [
      'Undo what was done to the unknown, in reverse order.',
      'Do the same thing to both sides every time.',
      'Put your answer back into the original to check.',
    ],
  },

  why:
    'A seamstress is paid 15 cedis for every dress she sews and '
    + 'nothing else. '
    + 'At the end of the week she has 195 cedis. '
    + 'Nobody counted the dresses. '
    + 'How many did she sew, and how do you reach that number '
    + 'without guessing one and trying it?',

  notation:
    'An equals sign says the two sides are the same amount. '
    + 'It is not an instruction to work something out. '
    + 'The letter standing for the unknown amount is usually x, '
    + 'and $3x + 5 = 20$ is said three x plus five equals twenty. '
    + 'Writing a chain such as 20 subtract 5 equals 15 equals 5 '
    + 'is the commonest way to lose a mark, because it says 15 '
    + 'and 5 are the same number.',

  idea:
    'An equation is a claim that two amounts are the same. '
    + 'Solving it means finding the value of the unknown that makes the claim '
    + 'true. '
    + 'You do that by undoing whatever was done to the unknown, '
    + 'doing the same thing to both sides each time.',

  mechanism:
    'The rule about both sides is not a convention, it is the whole meaning '
    + 'of the equals sign. '
    + 'An equation is a balance. '
    + 'Take 3 from one side only and it no longer balances, '
    + 'so the new line is simply a false statement '
    + 'and everything after it is worthless. '
    + 'That also explains why checking works: '
    + 'if your value makes the original true, '
    + 'then every balanced step you took preserved the truth, '
    + 'and the answer is right whatever the working looked like.',

  recap:
    'Finding a missing number means undoing what was done to '
    + 'it. '
    + 'If a number plus 7 is 12, then the number is 12 take away '
    + '7, which is 5. '
    + 'Undoing works because adding and subtracting are '
    + 'opposites, and so are multiplying and dividing. '
    + 'Putting a value back in to test it is called substituting: '
    + 'put 5 where the number was and 5 plus 7 is 12, which shows '
    + 'it is right. '
    + 'This lesson does both, and the undoing is the solving '
    + 'while the putting back is the checking.',

  method: [
    'Look at what has been done to the unknown.',
    'Undo it in reverse order: the last thing done is the first undone.',
    'Do the same operation to both sides, every time.',
    'Keep going until the unknown is alone.',
    'Substitute your answer into the original equation.',
    'If both sides come out equal, it is right.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Solve $2x + 5 = 17$.',
      steps: [
        'The 5 was added last, so take 5 from both sides: $2x = 12$.',
        'Divide both sides by 2.',
      ],
      answer: '$x = 6$. Check: 2 times 6 plus 5 is 17.',
    },
    {
      level: 4,
      ask: 'Solve $5x - 3 = 2x + 9$.',
      steps: [
        'Take 2x from both sides: $3x - 3 = 9$.',
        'Add 3 to both sides: $3x = 12$.',
        'Divide both sides by 3.',
      ],
      answer: '$x = 4$. Check: 20 minus 3 is 17, and 8 plus 9 is 17.',
    },
    {
      level: 5,
      ask: 'Why must you do the same thing to both sides?',
      steps: [
        'The equals sign claims the two sides are the same amount.',
        'Change one and the claim stops being true.',
        'Every line after that is false.',
      ],
      answer: 'Because the equals sign is the claim being preserved. '
        + 'Break it and the rest of the working means nothing.',
    },
  ],

  traps: [
    {
      mistake: 'Operating on one side only.',
      why: 'The equation stops being true at that line, '
        + 'and nothing after it can be trusted.',
    },
    {
      mistake: 'Undoing in the wrong order.',
      why: 'For $2x + 5$, the 5 went on last, so it comes off first. '
        + 'Dividing by 2 first means dividing the 5 too.',
    },
    {
      mistake: 'Not checking.',
      why: 'Substituting back takes ten seconds '
        + 'and is the only thing that tells you the answer is right '
        + 'rather than merely tidy.',
    },
  ],

  extension:
    'Every equation you will meet later is solved by the same principle, '
    + 'however complicated it looks: '
    + 'do the same to both sides, and undo in reverse order. '
    + 'The operations get harder. The principle never changes.',

  figure: {
    alt: 'A balance in three stages. First the left pan holds 2x plus 5 '
      + 'and the right pan holds 17. Taking 5 from both sides leaves 2x '
      + 'against 12. Dividing both sides by 2 leaves x equals 6, and '
      + 'the check is that 2 times 6 plus 5 is 17.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">an equation balances, so do the same to both sides</text>'
      + '<path d="M 140 56 H 270 V 88 H 140 Z"/>'
      + '<text x="205" y="79" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">2x + 5</text>'
      + '<path d="M 370 56 H 500 V 88 H 370 Z"/>'
      + '<text x="435" y="79" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">17</text>'
      + '<line x1="120" y1="92" x2="520" y2="92" stroke-width="4"/>'
      + '<path d="M 320 92 L 300 124 L 340 124 Z"/>'
      + '<text x="320" y="146" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">take 5 from both sides</text>'
      + '<line x1="320" y1="152" x2="320" y2="170" stroke="#0f8a4d"/>'
      + '<line x1="320" y1="170" x2="314.8" y2="161.4" stroke="#0f8a4d"/>'
      + '<line x1="320" y1="170" x2="325.2" y2="161.4" stroke="#0f8a4d"/>'
      + '<path d="M 140 176 H 270 V 208 H 140 Z"/>'
      + '<text x="205" y="199" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">2x</text>'
      + '<path d="M 370 176 H 500 V 208 H 370 Z"/>'
      + '<text x="435" y="199" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">12</text>'
      + '<line x1="120" y1="212" x2="520" y2="212" stroke-width="4"/>'
      + '<path d="M 320 212 L 300 244 L 340 244 Z"/>'
      + '<text x="320" y="266" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">divide both sides by 2</text>'
      + '<line x1="320" y1="272" x2="320" y2="290" stroke="#0f8a4d"/>'
      + '<line x1="320" y1="290" x2="314.8" y2="281.4" stroke="#0f8a4d"/>'
      + '<line x1="320" y1="290" x2="325.2" y2="281.4" stroke="#0f8a4d"/>'
      + '<text x="320" y="322" font-size="26" text-anchor="middle" fill="#0f8a4d" stroke="none">x = 6</text>'
      + '<text x="320" y="356" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">check: 2 times 6 plus 5 is 17</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each thing done to the unknown, and the step that undoes it',
      columns: ['Done to the unknown', 'The step that undoes it'],
      rows: [
        ['Added 5', 'Take 5 from both sides'],
        ['Took 3 away', 'Add 3 to both sides'],
        ['Multiplied by 2', 'Divide both sides by 2'],
        ['Divided by 4', 'Multiply both sides by 4'],
      ],
      note: 'The last thing done to the unknown is the first thing undone, '
        + 'which is why the order runs backwards.',
    },
  ],
  questions: [
    {
      id: 'le-1',
      ask: 'Solve 2x + 5 = 17.',
      kind: 'numeric',
      answer: '6',
      accept: ['six', 'x=6'],
      teach: 'Take 5 from both sides, then divide both by 2. '
        + 'Check: 2 times 6 plus 5 is 17.',
      level: 3,
    },
    {
      id: 'le-2',
      ask: 'Solve 5x - 3 = 2x + 9.',
      kind: 'numeric',
      answer: '4',
      accept: ['four', 'x=4'],
      teach: 'Take 2x from both sides, add 3 to both, then divide by 3.',
      level: 4,
    },
    {
      id: 'le-3',
      ask: 'Why must the same be done to both sides?',
      kind: 'choice',
      options: [
        'Otherwise the two sides stop being equal',
        'It is a convention',
        'To keep the working neat',
      ],
      answer: 'Otherwise the two sides stop being equal',
      teach: 'The equals sign is the claim you are preserving. '
        + 'Break it and every later line is false.',
      level: 5,
    },
  ],
})

/* ── angles ───────────────────────────────────────────────────────────────── */

teach({
  topicId: 'angles-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Angles on a straight line add to 180, at a point to 360. '
      + 'With parallel lines, alternate angles are equal '
      + 'and co-interior angles add to 180.',
    method: [
      'Name the fact you are using every time.',
      'Look for a straight line, a point, or a pair of parallel lines.',
      'Write the reason beside each step, because marks are given for it.',
    ],
  },

  why:
    'A carpenter is fitting a roof. '
    + 'Two of the angles where the timbers meet can be measured '
    + 'with his bevel, but the third is tight against the wall '
    + 'where no tool will fit. '
    + 'The timber has to be cut before it goes up, so measuring '
    + 'it afterwards is no use to him. '
    + 'How do you find an angle you cannot reach?',

  notation:
    'An angle is named by three letters, as in angle ABC, and '
    + 'the middle letter is always the corner where the turn '
    + 'happens. '
    + 'So angle ABC and angle CBA are the same angle, but angle '
    + 'BAC is a different one. '
    + 'The small raised circle is the degree sign, so 90° is said '
    + 'ninety degrees. '
    + 'Arrowheads drawn on two lines mean those lines are '
    + 'parallel, and missing those arrows is the commonest way to '
    + 'lose a mark, because the parallel-line facts are what the '
    + 'question was built on.',

  idea:
    'A few angle facts solve most problems at this level. '
    + 'Each one is tied to something you can look for in the diagram: '
    + 'a straight line, a full turn, or a pair of lines marked parallel. '
    + 'Finding the fact is the work, and naming it is the mark.',

  mechanism:
    'At JHS the answer alone stops being enough, and that is deliberate. '
    + 'Marks are given for the reason, '
    + 'because an angle found by guessing from the diagram and one found by '
    + 'a fact look identical on the page. '
    + 'Naming the reason is how you show which you did. '
    + 'It also helps you: '
    + 'if you cannot name a fact for a step, you have assumed something, '
    + 'and the commonest wrong assumption is that lines are parallel '
    + 'because they look it. '
    + 'Only the arrows on the diagram say that.',

  recap:
    'An angle is the amount of turn between two lines that '
    + 'meet. '
    + 'It is measured in degrees, and a quarter turn is 90 '
    + 'degrees. '
    + 'An angle of exactly 90 degrees is called a right angle, '
    + 'and the corner of this page is one. '
    + 'An angle smaller than that is called acute, and one '
    + 'between 90 and 180 degrees is called obtuse. '
    + 'Those names and that measure are all this lesson needs, '
    + 'and from here the angles are worked out rather than '
    + 'measured.',

  method: [
    'Mark every fact the question gives you on the diagram.',
    'Look for a straight line: those angles add to 180.',
    'Look for a point: those add to 360.',
    'Look for arrows marking parallel lines.',
    'Between parallels, find the Z shape for alternate angles.',
    'Write the reason beside every step.',
    'Check the total makes sense for the shape.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Two angles sit on a straight line. One is 125 degrees. '
        + 'What is the other?',
      steps: [
        'Angles on a straight line add to 180.',
        '180 minus 125.',
      ],
      answer: '55 degrees, because angles on a straight line add to 180.',
    },
    {
      level: 4,
      ask: 'A line crosses two parallel lines. One alternate angle is 70 '
        + 'degrees. What is the other?',
      steps: [
        'Alternate angles between parallel lines are equal.',
      ],
      answer: '70 degrees, because alternate angles are equal.',
    },
    {
      level: 5,
      ask: 'Why must you write the reason and not just the answer?',
      steps: [
        'A guessed angle and a derived one look the same on the page.',
        'The reason is the only evidence you used a fact.',
        'Marks are given for it.',
      ],
      answer: 'Because the reason is what shows the answer was derived rather '
        + 'than measured off the diagram.',
    },
  ],

  traps: [
    {
      mistake: 'Assuming lines are parallel because they look it.',
      why: 'Only the arrows say so. '
        + 'Diagrams are not drawn to scale and often mislead deliberately.',
    },
    {
      mistake: 'Measuring the diagram with a protractor.',
      why: 'The diagram is a sketch. '
        + 'The numbers given are the truth, not the drawing.',
    },
    {
      mistake: 'Giving the answer with no reason.',
      why: 'At JHS the reason carries marks. '
        + 'A correct answer with no reason loses them.',
    },
  ],

  extension:
    'That angles on a straight line add to 180 and the angles of a triangle '
    + 'also add to 180 is not a coincidence. '
    + 'Draw a line through one vertex parallel to the opposite side '
    + 'and the three angles of the triangle land on that straight line.',

  figure: {
    alt: 'Two parallel lines, each marked with an arrow, crossed by a '
      + 'slanting line. The angle below the upper parallel on one side '
      + 'of the slant and the angle above the lower parallel on the '
      + 'other side form a Z shape, and both are marked 70 degrees, '
      + 'because alternate angles between parallel lines are equal.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">the Z shape: alternate angles are equal</text>'
      + '<line x1="70" y1="140" x2="570" y2="140"/>'
      + '<line x1="70" y1="270" x2="570" y2="270"/>'
      + '<path d="M 108 132 L 120 140 L 108 148"/>'
      + '<path d="M 108 262 L 120 270 L 108 278"/>'
      + '<line x1="170" y1="330" x2="430" y2="80"/>'
      + '<line x1="240" y1="140" x2="368" y2="140" stroke="#0f8a4d" stroke-width="5"/>'
      + '<line x1="368" y1="140" x2="232" y2="270" stroke="#0f8a4d" stroke-width="5"/>'
      + '<line x1="232" y1="270" x2="360" y2="270" stroke="#0f8a4d" stroke-width="5"/>'
      + '<text x="323" y="162" font-size="22" text-anchor="middle" fill="#0f8a4d" stroke="none">70</text>'
      + '<text x="292" y="252" font-size="22" text-anchor="middle" fill="#0f8a4d" stroke="none">70</text>'
      + '<text x="75" y="120" font-size="16" text-anchor="start" fill="currentColor" stroke="none">arrows mark these lines parallel</text>'
      + '<text x="320" y="360" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">so if one of them is 70 degrees, so is the other</text>'
      + '<text x="320" y="388" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">no measuring: the drawing is a sketch, the facts are the truth</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each angle fact, and the shape in the diagram that signals it',
      columns: ['The fact', 'What to look for', 'The angles'],
      rows: [
        [
          'Angles on a straight line',
          'Two angles meeting on one line',
          'Add to 180 degrees',
        ],
        ['Angles at a point', 'Angles filling one full turn', 'Add to 360 degrees'],
        ['Vertically opposite angles', 'Two lines crossing', 'Equal'],
        ['Alternate angles', 'A Z shape between the parallels', 'Equal'],
        ['Corresponding angles', 'An F shape between the parallels', 'Equal'],
        ['Co-interior angles', 'A C shape between the parallels', 'Add to 180 degrees'],
      ],
      note: 'The last three count only where arrows mark the lines '
        + 'parallel. Write the fact beside every step, because the marks '
        + 'are given for the reason.',
    },
  ],
  questions: [
    {
      id: 'ang-1',
      ask: 'Two angles on a straight line. One is 125 degrees. '
        + 'What is the other?',
      kind: 'numeric',
      answer: '55',
      accept: ['fifty five', 'fifty-five'],
      teach: 'Angles on a straight line add to 180, so 180 minus 125.',
      level: 3,
    },
    {
      id: 'ang-2',
      ask: 'Alternate angles between parallel lines are:',
      kind: 'choice',
      options: ['Equal', 'Adding to 180', 'Adding to 360'],
      answer: 'Equal',
      teach: 'Alternate and corresponding angles are equal. '
        + 'Co-interior angles are the pair that adds to 180.',
      level: 4,
    },
    {
      id: 'ang-3',
      ask: 'How can you tell that two lines in a diagram are parallel?',
      kind: 'choice',
      options: [
        'Arrows mark them',
        'They look parallel',
        'They never meet on the page',
      ],
      answer: 'Arrows mark them',
      teach: 'Diagrams are not to scale. '
        + 'Assuming from appearance is the commonest way to lose these marks.',
      level: 5,
    },
  ],
})

/* ── triangles and polygons ───────────────────────────────────────────────── */

teach({
  topicId: 'triangles-polygons',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The angles of a triangle add to 180. '
      + 'A polygon of n sides splits into n minus 2 triangles, '
      + 'so its angles add to (n minus 2) times 180.',
    method: [
      'Triangle: the three angles add to 180.',
      'Polygon: count the sides, subtract 2, multiply by 180.',
      'Classify a triangle by its sides, or by its largest angle.',
    ],
  },

  why:
    'A tiler is laying tiles that have six sides each, and he '
    + 'wants them to meet flat with no gaps. '
    + 'To know whether they will, he needs the angle at each '
    + 'corner of a tile. '
    + 'There is no protractor in his bag and the tiles are '
    + 'already cut. '
    + 'How do you work out the corner angle of a six-sided shape '
    + 'from the number of sides alone?',

  notation:
    'A triangle is named by its corners, so triangle ABC has '
    + 'corners A, B and C. '
    + 'Short dashes drawn across two sides mean those sides are '
    + 'the same length, and matching arcs at two corners mean '
    + 'those angles are equal. '
    + 'The angle rule for a shape with n sides is read as n minus '
    + '2, all times 180, where n is the number of sides. '
    + 'Forgetting to subtract the 2 is the commonest way to lose '
    + 'a mark, so test it on a triangle, where n is 3 and the '
    + 'answer has to come out as 180.',

  idea:
    'The angles inside a triangle always add to 180 degrees. '
    + 'For a polygon with n sides they add to $(n - 2) \\times 180$. '
    + 'A triangle also carries two names, one taken from its sides and '
    + 'one from its angles.',

  mechanism:
    'The polygon formula is not something to memorise. '
    + 'Take any polygon, pick one corner, and draw lines from it to every '
    + 'other corner. '
    + 'You always get two fewer triangles than the shape has sides. '
    + 'Each triangle contributes 180 degrees, so the total is '
    + '$(n - 2) \\times 180$. '
    + 'If you forget the formula you can rebuild it on the page in ten '
    + 'seconds, which is better than remembering it.',

  recap:
    'Angles on a straight line add up to 180 degrees. '
    + 'So if one angle on a line is 60°, the angle beside it must '
    + 'be 120°, because the two together have to make 180°. '
    + 'A shape with straight sides is named by how many sides it '
    + 'has: three sides is a triangle, four is a quadrilateral, '
    + 'five is a pentagon. '
    + 'This lesson puts those two facts together and finds the '
    + 'angles inside any such shape.',

  method: [
    'For a triangle, the three angles add to 180.',
    'Two known angles give the third by subtraction.',
    'For a polygon, count the sides.',
    'Subtract 2, then multiply by 180.',
    'For a regular polygon, divide that total by the number of sides.',
    'Name a triangle by its sides first, then by its largest angle.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A triangle has angles of 65 and 70 degrees. What is the third?',
      steps: [
        'They add to 180.',
        '65 plus 70 is 135.',
        '180 minus 135.',
      ],
      answer: '45 degrees.',
    },
    {
      level: 4,
      ask: 'What do the angles of a pentagon add to?',
      steps: [
        'A pentagon has 5 sides.',
        '5 minus 2 is 3 triangles.',
        '3 times 180.',
      ],
      answer: '540 degrees.',
    },
    {
      level: 5,
      ask: 'What is each angle of a regular hexagon?',
      steps: [
        '6 sides, so 4 triangles, so 720 degrees in total.',
        'Regular means all angles equal.',
        '720 divided by 6.',
      ],
      answer: '120 degrees.',
    },
  ],

  traps: [
    {
      mistake: 'Using n times 180 for a polygon.',
      why: 'It is n minus 2. '
        + 'Draw the triangles from one corner and count them if you forget.',
    },
    {
      mistake: 'Assuming a polygon is regular.',
      why: 'Only a regular polygon has equal angles. '
        + 'The total is the same either way, the share is not.',
    },
    {
      mistake: 'Calling an isosceles triangle equilateral.',
      why: 'Isosceles has two equal sides, equilateral has three. '
        + 'Count them.',
    },
  ],

  extension:
    'The exterior angles of any polygon always add to 360, '
    + 'no matter how many sides it has. '
    + 'Walk right round the outside of the shape and you have turned through '
    + 'one full circle, which is why.',

  figure: {
    alt: 'A quadrilateral, a pentagon and a hexagon, each with lines '
      + 'drawn from one corner to every other corner. The quadrilateral '
      + 'splits into 2 triangles and its angles add to 360 degrees, the '
      + 'pentagon into 3 and 540 degrees, and the hexagon into 4 and '
      + '720 degrees.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">split from one corner, and count the triangles</text>'
      + '<path d="M 60 220 L 70 110 L 190 90 L 200 210 Z"/>'
      + '<line x1="60" y1="220" x2="190" y2="90" stroke="#0f8a4d"/>'
      + '<text x="130" y="258" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">4 sides</text>'
      + '<text x="130" y="284" font-size="19" text-anchor="middle" fill="#0f8a4d" stroke="none">2 triangles</text>'
      + '<text x="130" y="310" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">360 degrees</text>'
      + '<path d="M 320 83 L 389 133 L 362 213 L 278 213 L 252 133 Z"/>'
      + '<line x1="320" y1="83" x2="362" y2="213" stroke="#0f8a4d"/>'
      + '<line x1="320" y1="83" x2="278" y2="213" stroke="#0f8a4d"/>'
      + '<text x="320" y="258" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">5 sides</text>'
      + '<text x="320" y="284" font-size="19" text-anchor="middle" fill="#0f8a4d" stroke="none">3 triangles</text>'
      + '<text x="320" y="310" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">540 degrees</text>'
      + '<path d="M 500 83 L 562 119 L 562 191 L 500 227 L 438 191 L 438 119 Z"/>'
      + '<line x1="500" y1="83" x2="562" y2="191" stroke="#0f8a4d"/>'
      + '<line x1="500" y1="83" x2="500" y2="227" stroke="#0f8a4d"/>'
      + '<line x1="500" y1="83" x2="438" y2="191" stroke="#0f8a4d"/>'
      + '<text x="500" y="258" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">6 sides</text>'
      + '<text x="500" y="284" font-size="19" text-anchor="middle" fill="#0f8a4d" stroke="none">4 triangles</text>'
      + '<text x="500" y="310" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">720 degrees</text>'
      + '<text x="320" y="352" font-size="21" text-anchor="middle" fill="#0f8a4d" stroke="none">always two fewer triangles than sides</text>'
      + '<text x="320" y="384" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">and each triangle gives 180 degrees</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Splitting each polygon into triangles from one corner',
      columns: [
        'Shape',
        'Sides',
        'Triangles',
        'Angles add to',
        'Each angle if regular',
      ],
      rows: [
        ['Triangle', '3', '1', '180 degrees', '60 degrees'],
        ['Quadrilateral', '4', '2', '360 degrees', '90 degrees'],
        ['Pentagon', '5', '3', '540 degrees', '108 degrees'],
        ['Hexagon', '6', '4', '720 degrees', '120 degrees'],
      ],
      note: 'Only a regular polygon has equal angles. The total is the same '
        + 'either way; the share is not.',
    },
    {
      caption: 'The two ways of naming a triangle',
      columns: ['Name', 'Named from', 'The test'],
      rows: [
        [
          'Equilateral',
          'Its sides',
          'All three sides equal, so every angle is 60 degrees',
        ],
        [
          'Isosceles',
          'Its sides',
          'Two sides equal, so the two angles under them are equal',
        ],
        ['Scalene', 'Its sides', 'No two sides equal'],
        ['Acute', 'Its angles', 'Every angle under 90 degrees'],
        ['Right', 'Its angles', 'One angle exactly 90 degrees'],
        ['Obtuse', 'Its angles', 'One angle over 90 degrees'],
      ],
      note: 'A triangle carries one name from each column, so a triangle '
        + 'can be isosceles and right at the same time.',
    },
  ],
  questions: [
    {
      id: 'tp-1',
      ask: 'A triangle has angles 65 and 70. What is the third?',
      kind: 'numeric',
      answer: '45',
      accept: ['forty five', 'forty-five'],
      teach: 'The three add to 180, so subtract the two you have.',
      level: 3,
    },
    {
      id: 'tp-2',
      ask: 'What do the interior angles of a pentagon add to?',
      kind: 'numeric',
      answer: '540',
      accept: ['five hundred and forty'],
      teach: '5 sides give 3 triangles, and 3 times 180 is 540.',
      level: 4,
    },
    {
      id: 'tp-3',
      ask: 'Each interior angle of a regular hexagon is:',
      kind: 'numeric',
      answer: '120',
      accept: ['one hundred and twenty'],
      teach: '720 in total, shared equally between 6 angles.',
      level: 5,
    },
  ],
})

/* ── perimeter and area ───────────────────────────────────────────────────── */

teach({
  topicId: 'perimeter-area-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Triangle: half base times height. '
      + 'Parallelogram: base times height. '
      + 'Trapezium: half the sum of the parallel sides, times height. '
      + 'Height is always perpendicular.',
    method: [
      'Identify the shape, or split a compound one into the simple shapes '
        + 'it is made of.',
      'Find the perpendicular height, not the slanted side.',
      'Apply the formula and keep the units square.',
    ],
  },

  why:
    'A farmer near Techiman wants to fence a plot. '
    + 'He also wants to know how much seed to buy for it. '
    + 'The plot is a triangle, because a stream cuts one corner off. '
    + 'He can measure all three sides with a tape. '
    + 'Those three measurements tell him how much fence to buy. '
    + 'They do not tell him how much ground is inside. '
    + 'So how much ground is there?',

  notation:
    'An area is written with a small 2 after the unit. '
    + 'So 15 cm with a small 2 is said "fifteen square centimetres". '
    + 'The small 2 is not a power to work out. '
    + 'It is there to say the unit is a square. '
    + 'A perimeter uses the plain unit, so 16 cm, said "sixteen '
    + 'centimetres". '
    + 'In a formula, base times height is written bh. '
    + 'The letters sit side by side and the times sign is left out. '
    + 'The commonest way to lose a mark is to give an area in cm '
    + 'with no small 2.',

  idea:
    'Each shape has its own area formula, and every one of them is the '
    + 'rectangle in disguise. '
    + 'In all of them, height means the perpendicular height: the '
    + 'straight up distance from the base to the top, at a right angle '
    + 'to the base.',

  mechanism:
    'The commonest error in this whole topic '
    + 'is using the slanted side as the height. '
    + 'It happens because the diagram usually gives you that length. '
    + 'Height means the straight up distance '
    + 'between the base and the top. '
    + 'It is measured at a right angle to the base. '
    + 'The slanted side is longer. '
    + 'So the answer comes out too large. '
    + 'The working still looks correct, '
    + 'which is why the error survives. '
    + 'The formulas are also connected rather than separate. '
    + 'A parallelogram is a rectangle '
    + 'with a triangle moved from one end to the other. '
    + 'That is why its area is still base times height. '
    + 'And a triangle is half a parallelogram.',

  recap:
    'Area is the amount of flat space inside a shape. '
    + 'You count it in squares. '
    + 'Take a rectangle 5 cm long and 3 cm wide. '
    + 'It holds 3 rows of five one centimetre squares. '
    + 'That is 15 squares, so the area is 15 square centimetres. '
    + 'That is why the unit is square. '
    + 'You are counting squares, not lengths. '
    + 'Length times width works for the same reason. '
    + 'Every shape in this lesson is built out of that one.',

  method: [
    'Name the shape. Split a compound shape into familiar ones.',
    'Find the base.',
    'Find the perpendicular height, at a right angle to that base.',
    'Apply the formula.',
    'For a compound shape, add the parts, or subtract a hole.',
    'Write the unit as square units.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A triangle has base 10 cm and perpendicular height 6 cm. '
        + 'What is its area?',
      steps: [
        'Half of 10 is 5.',
        '5 times 6.',
      ],
      answer: '30 square centimetres.',
    },
    {
      level: 4,
      ask: 'A trapezium has parallel sides 8 cm and 12 cm, height 5 cm.',
      steps: [
        'Add the parallel sides: 8 plus 12 is 20.',
        'Half of that is 10.',
        '10 times 5.',
      ],
      answer: '50 square centimetres.',
    },
    {
      level: 5,
      ask: 'A triangle has a slanted side of 8 cm and a perpendicular height '
        + 'of 6 cm. Which do you use?',
      steps: [
        'Area needs the perpendicular height.',
        'The slanted side is longer and is not the height.',
      ],
      answer: 'The 6 cm. Using the 8 would give an answer that is too large '
        + 'and looks perfectly worked out.',
    },
  ],

  traps: [
    {
      mistake: 'Using the slanted side as the height.',
      why: 'Height is perpendicular to the base. '
        + 'The diagram often gives the slant precisely to test whether '
        + 'the difference is clear to you.',
    },
    {
      mistake: 'Forgetting the half in the triangle formula.',
      why: 'A triangle is half a parallelogram. '
        + 'Leaving out the half doubles the answer.',
    },
    {
      mistake: 'Mixing units within one shape.',
      why: 'Convert everything to the same unit before you multiply.',
    },
  ],

  extension:
    'Every one of these formulas comes from the rectangle. '
    + 'Cut a parallelogram along a perpendicular and slide the triangle to '
    + 'the other end and you have a rectangle. '
    + 'Two identical triangles make a parallelogram. '
    + 'Two identical trapeziums make a parallelogram as well.',

  figure: {
    alt: 'A triangle with a base of 10 cm, a perpendicular height of 6 '
      + 'cm drawn from the apex down to the base and marked with a '
      + 'right angle, and a slanting side of 8 cm marked as not the '
      + 'height. Half of 10 times 6 gives 30 square centimetres.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="40" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">the height is the perpendicular one, never the slant</text>'
      + '<path d="M 120 300 L 480 300 L 400 130 Z"/>'
      + '<line x1="400" y1="130" x2="400" y2="300" stroke="#0f8a4d" stroke-width="4"/>'
      + '<path d="M 400 282 L 382 282 L 382 300" stroke="#0f8a4d"/>'
      + '<text x="492" y="200" font-size="21" text-anchor="start" fill="#0f8a4d" stroke="none">height 6 cm</text>'
      + '<line x1="120" y1="300" x2="400" y2="130" stroke="#c8433a" stroke-width="4"/>'
      + '<text x="250" y="176" font-size="20" text-anchor="end" fill="#c8433a" stroke="none">slant 8 cm</text>'
      + '<text x="250" y="200" font-size="18" text-anchor="end" fill="#c8433a" stroke="none">not the height</text>'
      + '<text x="300" y="332" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">base 10 cm</text>'
      + '<text x="320" y="372" font-size="21" text-anchor="middle" fill="#0f8a4d" stroke="none">half of 10 times 6 is 30 square centimetres</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The area formula for each shape, and what counts as its height',
      columns: ['Shape', 'Area', 'The base', 'The height'],
      rows: [
        ['Rectangle', 'Length times width', 'Either side', 'The other side'],
        [
          'Triangle',
          'Half the base times the height',
          'Any side you choose',
          'Perpendicular to that side',
        ],
        [
          'Parallelogram',
          'Base times height',
          'Either parallel side',
          'Perpendicular gap between them',
        ],
        [
          'Trapezium',
          'Half the sum of the parallel sides, times the height',
          'The two parallel sides',
          'Perpendicular gap between them',
        ],
      ],
      note: 'Height never means the slanted side. The slant is longer, so '
        + 'it gives an answer that is too large and looks perfectly '
        + 'worked out.',
    },
  ],
  questions: [
    {
      id: 'pj-1',
      ask: 'Triangle, base 10 cm, perpendicular height 6 cm. Area in square '
        + 'centimetres?',
      kind: 'numeric',
      answer: '30',
      accept: ['thirty'],
      teach: 'Half the base times the height: 5 times 6.',
      level: 3,
    },
    {
      id: 'pj-2',
      ask: 'Trapezium with parallel sides 8 and 12 cm and height 5 cm. Area?',
      kind: 'numeric',
      answer: '50',
      accept: ['fifty'],
      teach: 'Half of (8 plus 12) is 10, times the height 5.',
      level: 4,
    },
    {
      id: 'pj-3',
      ask: 'Which length is the height in an area formula?',
      kind: 'choice',
      options: [
        'The perpendicular distance from the base',
        'The longest side',
        'The slanted side',
      ],
      answer: 'The perpendicular distance from the base',
      teach: 'The slanted side is longer and gives an answer that is too '
        + 'large while looking correct.',
      level: 5,
    },
  ],
})

/* ── collecting and organising data ───────────────────────────────────────── */

teach({
  topicId: 'collect-organise',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Decide the question before collecting anything. '
      + 'A frequency table counts how often each value occurs. '
      + 'Who you asked decides what the data can tell you.',
    method: [
      'Write the question you are answering first.',
      'Collect with a tally, then total each row.',
      'Check the totals add to the number you asked.',
    ],
  },

  why:
    'Your class wants the school to change the time of break. '
    + 'Forty-two learners have forty-two opinions, and shouting '
    + 'them across the room settles nothing. '
    + 'The headmistress will look at something written down and '
    + 'at nothing else. '
    + 'What do you ask, and how do you turn forty-two answers '
    + 'into one page she can read?',

  notation:
    'The number of times an answer comes up is called its '
    + 'frequency, and in a table that column is often headed f. '
    + 'The frequencies are added to give a total, and that total '
    + 'must equal the number of people you asked. '
    + 'A tally of five is drawn as four strokes with the fifth '
    + 'laid across them. '
    + 'Leaving the frequency column with no total is the '
    + 'commonest way to lose a mark, because the total is what '
    + 'shows that nobody was missed.',

  idea:
    'Data collection starts with a question, not with a form. '
    + 'Once the question itself is settled, you collect answers, '
    + 'then organise them into a frequency table: '
    + 'each possible value, and how many times it occurred.',

  mechanism:
    'Who you ask decides what your data means, '
    + 'and this is the part that is almost always skipped. '
    + 'Asking about favourite sport outside a football pitch '
    + 'does not tell you about your school. '
    + 'It tells you about people who go to football pitches. '
    + 'The sample has to resemble the group you want to describe, '
    + 'or the numbers are precise and about the wrong people. '
    + 'This matters more than any calculation that follows, '
    + 'because no amount of careful arithmetic repairs a sample '
    + 'that was wrong to begin with.',

  recap:
    'A tally is a way of counting as you go. '
    + 'Each answer you hear gets one stroke, and the fifth stroke '
    + 'is drawn across the other four, so a group of five can be '
    + 'seen at a glance. '
    + 'Count the strokes at the end and you have the total for '
    + 'that answer. '
    + 'A table listing each possible answer beside its total is '
    + 'called a frequency table. '
    + 'This lesson adds the part that has to come before any of '
    + 'that: deciding what you are actually asking.',

  method: [
    'Write down the question you want answered.',
    'Decide who you need to ask so the answer applies to them.',
    'Decide what the possible answers are.',
    'Collect, using a tally so you do not lose count.',
    'Total each row. That total is the frequency.',
    'Check the frequencies add to the number of people asked.',
    'Note who you asked, beside the table.',
  ],

  worked: [
    {
      level: 4,
      ask: 'What should you decide before collecting any data?',
      steps: [
        'A form with no question behind it collects the wrong things.',
      ],
      answer: 'The question you are trying to answer, and who to ask.',
    },
    {
      level: 5,
      ask: 'You ask people outside a football pitch about their favourite '
        + 'sport. What is wrong?',
      steps: [
        'You wanted to describe your school.',
        'You asked people who chose to be at a football pitch.',
        'They are not a fair sample of the school.',
      ],
      answer: 'The sample is biased. '
        + 'The numbers will be accurate about the wrong group of people.',
    },
    {
      level: 5,
      ask: 'Your frequencies total 47 and you asked 50 people. What does that '
        + 'mean?',
      steps: [
        'Every person asked should appear once.',
        'Three are missing.',
      ],
      answer: 'Three answers were not recorded, or three people did not '
        + 'answer. Either way the table is incomplete and you must say so.',
    },
  ],

  traps: [
    {
      mistake: 'Collecting first and deciding the question later.',
      why: 'You end up with data that nearly answers something. '
        + 'Decide the question first.',
    },
    {
      mistake: 'Asking whoever is convenient.',
      why: 'Convenient people are rarely a fair sample. '
        + 'Who you asked limits what you can claim.',
    },
    {
      mistake: 'Not checking the frequencies against the number asked.',
      why: 'It is the one check that catches lost answers, '
        + 'and it takes five seconds.',
    },
  ],

  extension:
    'A survey reported without saying who was asked is almost useless, '
    + 'and that is true of surveys in newspapers as much as in a classroom. '
    + 'The first question to ask of any statistic is who it came from.',

  figure: {
    alt: 'Two boxes. The left one, holding sixteen figures, is labelled '
      + 'the whole school, which is what you wanted to describe. The '
      + 'right one, holding eight figures, is labelled at the football '
      + 'pitch, which is who you actually asked. The numbers come back '
      + 'exact and about the wrong people.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">who you asked decides what the numbers mean</text>'
      + '<path d="M 50 90 H 290 V 290 H 50 Z"/>'
      + '<text x="170" y="120" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">the whole school</text>'
      + '<circle cx="90" cy="160" r="9"/>'
      + '<circle cx="140" cy="160" r="9"/>'
      + '<circle cx="190" cy="160" r="9"/>'
      + '<circle cx="240" cy="160" r="9"/>'
      + '<circle cx="90" cy="196" r="9"/>'
      + '<circle cx="140" cy="196" r="9"/>'
      + '<circle cx="190" cy="196" r="9"/>'
      + '<circle cx="240" cy="196" r="9"/>'
      + '<circle cx="90" cy="232" r="9"/>'
      + '<circle cx="140" cy="232" r="9"/>'
      + '<circle cx="190" cy="232" r="9"/>'
      + '<circle cx="240" cy="232" r="9"/>'
      + '<circle cx="90" cy="268" r="9"/>'
      + '<circle cx="140" cy="268" r="9"/>'
      + '<circle cx="190" cy="268" r="9"/>'
      + '<circle cx="240" cy="268" r="9"/>'
      + '<path d="M 350 90 H 590 V 290 H 350 Z" stroke="#c8433a"/>'
      + '<text x="470" y="120" font-size="19" text-anchor="middle" fill="#c8433a" stroke="none">at the football pitch</text>'
      + '<circle cx="400" cy="190" r="9" stroke="#c8433a"/>'
      + '<circle cx="450" cy="190" r="9" stroke="#c8433a"/>'
      + '<circle cx="500" cy="190" r="9" stroke="#c8433a"/>'
      + '<circle cx="550" cy="190" r="9" stroke="#c8433a"/>'
      + '<circle cx="400" cy="240" r="9" stroke="#c8433a"/>'
      + '<circle cx="450" cy="240" r="9" stroke="#c8433a"/>'
      + '<circle cx="500" cy="240" r="9" stroke="#c8433a"/>'
      + '<circle cx="550" cy="240" r="9" stroke="#c8433a"/>'
      + '<text x="170" y="320" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">what you wanted to describe</text>'
      + '<text x="470" y="320" font-size="18" text-anchor="middle" fill="#c8433a" stroke="none">who you actually asked</text>'
      + '<text x="320" y="358" font-size="20" text-anchor="middle" fill="#c8433a" stroke="none">the numbers come back exact, and about the wrong people</text>'
      + '<text x="320" y="390" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">a fair sample has to look like the group you describe</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The favourite sport of 50 learners in one JHS 1 class',
      columns: ['Sport', 'Frequency'],
      rows: [
        ['Football', '21'],
        ['Athletics', '9'],
        ['Volleyball', '8'],
        ['Handball', '7'],
        ['Table tennis', '5'],
      ],
      note: 'The frequencies add to 50, which is the number of learners '
        + 'asked. That check is the one that catches a lost answer.',
    },
  ],
  questions: [
    {
      id: 'co-1',
      ask: 'What comes before collecting data?',
      kind: 'choice',
      options: [
        'Deciding the question and who to ask',
        'Designing the table',
        'Choosing a graph',
      ],
      answer: 'Deciding the question and who to ask',
      teach: 'Collecting without a question gives data that nearly answers '
        + 'something.',
      level: 4,
    },
    {
      id: 'co-2',
      ask: 'Asking about sport outside a football pitch gives you:',
      kind: 'choice',
      options: [
        'A biased sample',
        'A fair sample',
        'A larger sample',
      ],
      answer: 'A biased sample',
      teach: 'The numbers will be accurate about people who go to football '
        + 'pitches, which was not the question.',
      level: 5,
    },
    {
      id: 'co-3',
      ask: 'You asked 50 people and your frequencies total 47. What now?',
      kind: 'choice',
      options: [
        'Three answers are missing and you must say so',
        'Round it up to 50',
        'Ignore it',
      ],
      answer: 'Three answers are missing and you must say so',
      teach: 'The check exists to catch exactly this. '
        + 'An incomplete table reported as complete is the real error.',
      level: 5,
    },
  ],
})
