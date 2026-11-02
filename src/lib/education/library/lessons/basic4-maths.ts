/**
 * Stored lessons for Basic 4 Mathematics.
 *
 * Written at about grade 4, with a `brief` form on every topic from the
 * start. The Basic 1 to 3 lessons had to be rewritten for reading level and
 * then given brief forms afterwards; writing both together is cheaper and
 * keeps the two tellings saying the same thing.
 *
 * Checks: `scripts/coverage/reading-level.mts` for the level, and
 * `scripts/coverage/personalisation-check.mts` for the spread between a
 * learner who wants the gist and one who wants all of it.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── larger numbers ───────────────────────────────────────────────────────── */

teach({
  topicId: 'large-numbers',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Ten hundreds make one thousand. After hundreds come thousands, '
      + 'then ten thousands. Each place to the left is worth ten of the '
      + 'one beside it.',
    method: [
      'Group the digits in threes from the right.',
      'Read the thousands group first, then say thousand.',
      'Then read the last three digits.',
    ],
  },

  idea:
    'Numbers do not stop at 999. Ten hundreds make one thousand. '
    + 'So 4,271 is four thousands, two hundreds, seven tens and one one. '
    + 'The places keep going the same way for as far as you need them.',

  mechanism:
    'Nothing new happens at a thousand. '
    + 'The rule is still that each place to the left is worth ten of the '
    + 'place beside it. '
    + 'That is why we group the digits in threes and put a comma between. '
    + 'The comma is not part of the number. '
    + 'It is there so your eye can find the thousands without counting '
    + 'every digit. '
    + 'Once you see the groups, a long number reads as two short ones.',

  recap:
    'You can read a three digit number and say what each digit is worth. '
    + 'This is that, with more places on the left.',

  method: [
    'Group the digits in threes, counting from the right.',
    'Read the group on the left first.',
    'Say the word thousand after it.',
    'Then read the last three digits as an ordinary number.',
    'To compare two numbers, count the digits first. More digits wins.',
    'Same number of digits? Then start at the left and compare place by place.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Read 3,450 out loud.',
      steps: [
        'Group from the right: 3 and 450.',
        'The left group is 3, so three thousand.',
        'Then read 450.',
      ],
      answer: 'Three thousand, four hundred and fifty.',
    },
    {
      level: 3,
      ask: 'Which is bigger, 9,870 or 10,200?',
      steps: [
        'Count the digits. 9,870 has four. 10,200 has five.',
        'More digits means a bigger number.',
      ],
      answer: '10,200, and you did not need to look at a single other digit.',
    },
    {
      level: 4,
      ask: 'What is the 7 worth in 27,318?',
      steps: [
        'Group from the right: 27 and 318.',
        'The 7 is the last digit of the thousands group.',
        'So it counts seven thousands.',
      ],
      answer: '7,000.',
    },
  ],

  traps: [
    {
      mistake: 'Counting the digit places from the left.',
      why: 'Always count from the right. '
        + 'The ones place is the anchor and it never moves.',
    },
    {
      mistake: 'Thinking the comma is part of the number.',
      why: 'It is only there to help your eye. '
        + '3,450 and 3450 are the same number.',
    },
    {
      mistake: 'Saying a number with more digits might be smaller.',
      why: 'For whole numbers it never is. '
        + 'Count the digits first and you often finish there.',
    },
  ],

  extension:
    'Past ten thousands come hundred thousands, then millions. '
    + 'The groups of three keep working, and each group gets its own name. '
    + 'That is why very large numbers are still readable: '
    + 'you never read more than three digits at a time.',

  figure: {
    alt: 'The number 4,271 split into its four places, each digit in its own '
      + 'box named thousands, hundreds, tens and ones. A green comma stands '
      + 'between the thousands box and the hundreds box, labelled the comma '
      + 'is not part of the number, it is there so your eye can find the '
      + 'thousands.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="56" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">each place is worth ten of the '
      + 'one beside it</text>'
      + '<polygon points="60,150 180,150 180,230 60,230"/>'
      + '<text x="120" y="212" font-size="48" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">4</text>'
      + '<text x="120" y="262" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">thousands</text>'
      + '<polygon points="200,150 320,150 320,230 200,230"/>'
      + '<text x="260" y="212" font-size="48" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">2</text>'
      + '<text x="260" y="262" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">hundreds</text>'
      + '<polygon points="320,150 440,150 440,230 320,230"/>'
      + '<text x="380" y="212" font-size="48" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">7</text>'
      + '<text x="380" y="262" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">tens</text>'
      + '<polygon points="440,150 560,150 560,230 440,230"/>'
      + '<text x="500" y="212" font-size="48" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">1</text>'
      + '<text x="500" y="262" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">ones</text>'
      + '<text x="190" y="212" font-size="48" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">,</text>'
      + '<line x1="190" y1="240" x2="190" y2="300" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<text x="320" y="326" font-size="19" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">the comma is not part of the '
      + 'number</text>'
      + '<text x="320" y="352" font-size="19" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">it is there so your eye finds the '
      + 'thousands</text>'
      + '<line x1="584" y1="118" x2="60" y2="118" stroke="#0f8a4d"/>'
      + '<polyline points="73,108 60,118 73,128" stroke="#0f8a4d"/>'
      + '<text x="320" y="104" font-size="18" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">ten times bigger at every step this '
      + 'way</text></svg>',
  },
  questions: [
    {
      id: 'ln-1',
      ask: 'How many hundreds make one thousand?',
      kind: 'numeric',
      answer: '10',
      accept: ['ten'],
      teach: 'Ten hundreds. It is the same step as ten tens making a hundred.',
      level: 2,
    },
    {
      id: 'ln-2',
      ask: 'Which is bigger, 8,999 or 12,000?',
      kind: 'choice',
      options: ['8,999', '12,000'],
      answer: '12,000',
      teach: '12,000 has five digits and 8,999 has four. '
        + 'More digits wins, so you can stop there.',
      level: 3,
    },
    {
      id: 'ln-3',
      ask: 'What is the 4 worth in 4,206?',
      kind: 'numeric',
      answer: '4000',
      accept: ['4,000', 'four thousand'],
      teach: 'It sits in the thousands place, so it counts four thousands.',
      level: 3,
    },
  ],
})

/* ── word problems ────────────────────────────────────────────────────────── */

teach({
  topicId: 'word-problems-addsub',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A word problem is a story with a sum hidden in it. '
      + 'Did the amount grow or shrink? '
      + 'Growing means add. Shrinking means take away.',
    method: [
      'Read it twice and say what is being counted.',
      'Ask: did the amount grow or shrink?',
      'Do the sum, then check the answer makes sense.',
    ],
  },

  idea:
    'A word problem is a story with a sum hidden inside it. '
    + 'Your job is to find the sum. '
    + 'The hard part is not the arithmetic. '
    + 'It is deciding whether to add or to take away.',

  mechanism:
    'People try to decide by hunting for key words, '
    + 'and that is why they get caught. '
    + '"Altogether" usually means add, but not always. '
    + '"Left" usually means take away, but not always. '
    + 'There is a better question, and it never lies. '
    + 'Ask whether the amount ended up bigger or smaller than it started. '
    + 'Bigger means you added. Smaller means you took away. '
    + 'That question works on a problem you have never seen before.',

  recap:
    'You can add and take away with carrying and borrowing. '
    + 'This is about knowing which one the story is asking for.',

  method: [
    'Read the whole problem twice. Do not start working yet.',
    'Say out loud what is being counted. Mangoes? Cedis? People?',
    'Write down the numbers you were given.',
    'Ask: did the amount grow or shrink?',
    'Grow means add. Shrink means take away.',
    'Do the sum.',
    'Read the question again and check your answer actually answers it.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Ama had 46 oranges. She sold 19. How many are left?',
      steps: [
        'What is counted? Oranges.',
        'She started with 46 and sold some, so the amount shrank.',
        'Shrinking means take away. 46 take away 19.',
      ],
      answer: '27 oranges.',
    },
    {
      level: 3,
      ask: 'A tank had 180 litres. 95 litres were used, then 60 were added. '
        + 'How much is in it now?',
      steps: [
        'Two things happened, so do them in order.',
        'Used 95, so it shrank: 180 take away 95 is 85.',
        'Added 60, so it grew: 85 and 60 is 145.',
      ],
      answer: '145 litres.',
    },
    {
      level: 4,
      ask: 'Kofi has 120 cedis. His brother has 45 cedis more than Kofi. '
        + 'How much do they have altogether?',
      steps: [
        '"More than Kofi" means the brother has 120 and 45, which is 165.',
        'Now the question asks for both together.',
        '120 and 165 is 285.',
      ],
      answer: '285 cedis. The word "more" appeared, and the problem still '
        + 'needed two steps.',
    },
  ],

  traps: [
    {
      mistake: 'Deciding by looking for a key word.',
      why: 'Key words are a guess that works most of the time. '
        + 'Ask whether the amount grew or shrank instead.',
    },
    {
      mistake: 'Answering the first thing you worked out.',
      why: 'A two step problem has a middle answer that is not the answer. '
        + 'Read the question again at the end.',
    },
    {
      mistake: 'Writing a bare number with no unit.',
      why: '27 what? Oranges. '
        + 'The unit is part of the answer.',
    },
  ],

  extension:
    'Some problems give you the answer and hide one of the starting numbers. '
    + '"Ama sold 19 and has 27 left. How many did she start with?" '
    + 'The amount shrank, and yet you add to find the start. '
    + 'Work backwards and the same question still guides you.',

  figure: {
    alt: 'At the top, in red and crossed out, the idea that altogether means '
      + 'add and left means take away. Below it, in green, the question '
      + 'that works instead: did the amount end up bigger or smaller. '
      + 'Bigger leads to you added, and smaller leads to you took away.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<line x1="76" y1="84" x2="112" y2="120" stroke="#c8433a" '
      + 'stroke-width="5"/>'
      + '<line x1="112" y1="84" x2="76" y2="120" stroke="#c8433a" '
      + 'stroke-width="5"/>'
      + '<polygon points="140,70 570,70 570,134 140,134" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<text x="355" y="96" font-size="18" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">altogether means add,</text>'
      + '<text x="355" y="122" font-size="18" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">left means take away</text>'
      + '<text x="355" y="168" font-size="18" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">key words will catch you</text>'
      + '<polygon points="140,196 500,196 500,260 140,260" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="320" y="224" font-size="19" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">did the amount end up</text>'
      + '<text x="320" y="248" font-size="19" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">bigger, or smaller</text>'
      + '<line x1="200" y1="262" x2="200" y2="322" stroke="#0f8a4d"/>'
      + '<polyline points="190,309 200,322 210,309" stroke="#0f8a4d"/>'
      + '<line x1="440" y1="262" x2="440" y2="322" stroke="#0f8a4d"/>'
      + '<polyline points="430,309 440,322 450,309" stroke="#0f8a4d"/>'
      + '<polygon points="90,326 310,326 310,384 90,384"/>'
      + '<text x="200" y="362" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">bigger: you added</text>'
      + '<polygon points="330,326 550,326 550,384 330,384"/>'
      + '<text x="440" y="362" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">smaller: you took away</text>'
      + '</svg>',
  },
  questions: [
    {
      id: 'wp-1',
      ask: 'A shop had 80 loaves and sold 35. Do you add or take away?',
      kind: 'choice',
      options: ['Add', 'Take away'],
      answer: 'Take away',
      teach: 'They sold some, so the amount shrank. '
        + 'Shrinking means take away.',
      level: 2,
    },
    {
      id: 'wp-2',
      ask: 'Ama had 46 oranges and sold 19. How many are left?',
      kind: 'numeric',
      answer: '27',
      accept: ['twenty seven', 'twenty-seven'],
      teach: '46 take away 19. Borrow in the ones: 16 take 9 is 7, '
        + 'then 3 take 1 is 2.',
      level: 3,
    },
    {
      id: 'wp-3',
      ask: 'What is the best question to ask before choosing add or subtract?',
      kind: 'choice',
      options: [
        'Which key word is in the problem?',
        'Did the amount grow or shrink?',
        'Which number is bigger?',
      ],
      answer: 'Did the amount grow or shrink?',
      teach: 'Key words fail on problems you have not seen. '
        + 'Growing or shrinking never does.',
      level: 3,
    },
  ],
})

/* ── multiplying larger numbers ───────────────────────────────────────────── */

teach({
  topicId: 'long-multiplication',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'To multiply a big number, break it into its places. '
      + 'For 34 times 6, do 30 times 6 and 4 times 6, then add them.',
    method: [
      'Split the big number into hundreds, tens and ones.',
      'Multiply each part by the single digit.',
      'Add the parts together.',
    ],
  },

  idea:
    'You cannot know 34 times 6 by heart, and you do not have to. '
    + 'Break 34 into 30 and 4. '
    + '30 times 6 is 180. 4 times 6 is 24. '
    + 'Add them and you have 204.',

  mechanism:
    'This works because of what the places mean. '
    + '34 really is 30 and 4 added together. '
    + 'So multiplying 34 by 6 is multiplying both parts by 6 and putting '
    + 'them back together. '
    + 'Nothing is lost and nothing is invented. '
    + 'The column method you will be shown is the same thing written '
    + 'more tightly, which is why the carried digits land where they do.',

  recap:
    'You know your tables to 10, '
    + 'and you know that 30 is three tens. '
    + 'Both are needed here.',

  method: [
    'Split the big number by its places. 247 becomes 200, 40 and 7.',
    'Multiply each part by the single digit.',
    'For a part like 40, do 4 times the digit, then put the nought back.',
    'Write each answer down. Do not try to hold them in your head.',
    'Add them all together.',
    'Check roughly: 34 times 6 should be a bit under 36 times 6, so around 200.',
  ],

  worked: [
    {
      level: 2,
      ask: 'What is 23 times 4?',
      steps: [
        'Split 23 into 20 and 3.',
        '20 times 4 is 80.',
        '3 times 4 is 12.',
        '80 and 12 is 92.',
      ],
      answer: '92.',
    },
    {
      level: 3,
      ask: 'What is 136 times 5?',
      steps: [
        'Split into 100, 30 and 6.',
        '100 times 5 is 500.',
        '30 times 5 is 150.',
        '6 times 5 is 30.',
        '500 and 150 and 30 is 680.',
      ],
      answer: '680.',
    },
    {
      level: 4,
      ask: 'What is 42 times 30?',
      steps: [
        '30 is 3 tens, so do 42 times 3 first.',
        '42 times 3 is 126.',
        'Now put the ten back: multiply by 10.',
      ],
      answer: '1,260.',
    },
  ],

  traps: [
    {
      mistake: 'Multiplying only the first digit.',
      why: 'For 34 times 6, doing 3 times 6 gives 18 and forgets the 4. '
        + 'Every part has to be multiplied.',
    },
    {
      mistake: 'Forgetting to put the nought back when multiplying by a ten.',
      why: '42 times 30 is not 126. '
        + 'You did 42 times 3, so the answer needs its ten: 1,260.',
    },
    {
      mistake: 'Trying to hold the part answers in your head.',
      why: 'Write each one down. '
        + 'The arithmetic is easy and remembering three numbers is not.',
    },
  ],

  extension:
    'The same splitting works when both numbers are large. '
    + '34 times 26 becomes four smaller sums: '
    + '30 times 20, 30 times 6, 4 times 20 and 4 times 6. '
    + 'Add all four. That is all long multiplication ever is.',

  figure: {
    alt: 'A rectangle 34 wide and 6 tall, cut into two parts: one 30 wide '
      + 'holding 180 and one 4 wide holding 24. Under it says 180 and 24 '
      + 'make 204, so 34 times 6 is 204.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="50" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">34 times 6, split by the '
      + 'places</text>'
      + '<polygon points="60,120 450,120 450,260 60,260" stroke-width="3" '
      + 'fill="#0f8a4d" fill-opacity="0.18"/>'
      + '<polygon points="450,120 530,120 530,260 450,260" '
      + 'stroke-width="3"/>'
      + '<line x1="450" y1="120" x2="450" y2="260" stroke-width="4"/>'
      + '<text x="255" y="86" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">30</text>'
      + '<text x="490" y="86" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">4</text>'
      + '<text x="255" y="200" font-size="34" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">180</text>'
      + '<text x="490" y="200" font-size="30" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">24</text>'
      + '<text x="36" y="198" font-size="22" text-anchor="end" '
      + 'fill="currentColor" stroke="none">6</text>'
      + '<line x1="44" y1="120" x2="44" y2="260" stroke-width="3"/>'
      + '<line x1="38" y1="120" x2="50" y2="120"/>'
      + '<line x1="38" y1="260" x2="50" y2="260"/>'
      + '<line x1="60" y1="100" x2="450" y2="100" stroke-width="3"/>'
      + '<line x1="450" y1="100" x2="530" y2="100" stroke-width="3"/>'
      + '<line x1="60" y1="94" x2="60" y2="106"/>'
      + '<line x1="450" y1="94" x2="450" y2="106"/>'
      + '<line x1="530" y1="94" x2="530" y2="106"/>'
      + '<text x="320" y="304" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">180 and 24 make 204</text>'
      + '<text x="320" y="352" font-size="26" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">so 34 times 6 is 204</text></svg>',
  },
  questions: [
    {
      id: 'lm-1',
      ask: 'What is 21 times 4?',
      kind: 'numeric',
      answer: '84',
      accept: ['eighty four', 'eighty-four'],
      teach: 'Split into 20 and 1. '
        + '20 times 4 is 80, and 1 times 4 is 4. Add them.',
      level: 2,
    },
    {
      id: 'lm-2',
      ask: 'What is 34 times 6?',
      kind: 'numeric',
      answer: '204',
      accept: ['two hundred and four'],
      teach: '30 times 6 is 180. 4 times 6 is 24. '
        + '180 and 24 is 204.',
      level: 3,
    },
    {
      id: 'lm-3',
      ask: 'What is 42 times 30?',
      kind: 'numeric',
      answer: '1260',
      accept: ['1,260', 'one thousand two hundred and sixty'],
      teach: 'Do 42 times 3, which is 126, then multiply by 10. '
        + 'Forgetting the ten is the usual slip.',
      level: 4,
    },
  ],
})

/* ── division as sharing and grouping ─────────────────────────────────────── */

teach({
  topicId: 'division-sharing',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Dividing can mean two things, and both give the same answer. '
      + 'Share 12 between 3 people and each gets 4. '
      + 'Put 12 into groups of 3 and you get 4 groups.',
    method: [
      'Decide which you are doing: sharing out, or making groups.',
      'Sharing: deal one at a time until none are left.',
      'Grouping: count in that number until you reach the total.',
    ],
  },

  idea:
    'Dividing means two different things, and they agree. '
    + 'You can split an amount between people, which is sharing, '
    + 'or pack it into groups of a fixed size, which is grouping. '
    + 'The sum is the same either way, and the answer means '
    + 'something different.',

  mechanism:
    'The two look different because the 3 means a different thing each time, '
    + 'so the answer does too. '
    + 'They agree because 4 groups of 3 and 3 groups of 4 are the same '
    + 'twelve, which you already know from equal groups. '
    + 'Knowing both matters because word problems come in both shapes.',

  recap:
    'You know equal groups, and you know your tables. '
    + 'Division is those facts read backwards.',

  method: [
    'Read the problem and decide which kind it is.',
    'Are you splitting between people? That is sharing.',
    'Are you filling bags of a fixed size? That is grouping.',
    'For sharing, deal one at a time to each until none are left.',
    'For grouping, count up in that number until you reach the total.',
    'Check with multiplication. Your answer times the divisor should give '
      + 'the total back.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Share 15 bottle tops between 5 children.',
      steps: [
        'This is sharing: 5 is the number of children.',
        'Deal one at a time round the five.',
        'Each round uses 5, and 15 is three rounds.',
      ],
      answer: '3 each. Check: 3 times 5 is 15.',
    },
    {
      level: 3,
      ask: 'You have 24 oranges and bags that hold 6. How many bags?',
      steps: [
        'This is grouping: 6 is the size of a bag.',
        'Count in sixes: 6, 12, 18, 24.',
        'That was four counts.',
      ],
      answer: '4 bags. Check: 4 times 6 is 24.',
    },
    {
      level: 4,
      ask: 'Share 26 pencils between 4 children. What happens?',
      steps: [
        'Deal one at a time. Each round uses 4.',
        'Six rounds uses 24 and each child has 6.',
        'Two pencils are left and cannot be shared evenly.',
      ],
      answer: '6 each, with 2 left over. '
        + 'The leftover is called a remainder.',
    },
  ],

  traps: [
    {
      mistake: 'Writing the two numbers the wrong way round.',
      why: '12 divided by 3 is not 3 divided by 12. '
        + 'The total always comes first.',
    },
    {
      mistake: 'Thinking sharing and grouping are different sums.',
      why: 'They are two readings of the same sum, and they agree. '
        + 'Use whichever picture suits the story.',
    },
    {
      mistake: 'Ignoring what is left over.',
      why: 'If 2 pencils remain, say so. '
        + 'A remainder is part of the answer, not a mistake.',
    },
  ],

  extension:
    'What you do with a remainder depends on the story. '
    + '26 children needing 4 to a car means 7 cars, not 6, '
    + 'because the last two still need a ride. '
    + 'The arithmetic gives 6 remainder 2; the situation decides the answer.',

  figure: {
    alt: 'Twelve counters arranged two ways. On the left they are shared '
      + 'between three children, making three groups of four. On the right '
      + 'they are packed into bags of three, making four bags. Both are '
      + 'twelve divided by three and both answer four.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="190" y="50" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">shared between 3</text>'
      + '<ellipse cx="90" cy="180" rx="42" ry="40"/>'
      + '<circle cx="72" cy="164" r="11" fill="currentColor"/>'
      + '<circle cx="108" cy="164" r="11" fill="currentColor"/>'
      + '<circle cx="72" cy="196" r="11" fill="currentColor"/>'
      + '<circle cx="108" cy="196" r="11" fill="currentColor"/>'
      + '<ellipse cx="190" cy="180" rx="42" ry="40"/>'
      + '<circle cx="172" cy="164" r="11" fill="currentColor"/>'
      + '<circle cx="208" cy="164" r="11" fill="currentColor"/>'
      + '<circle cx="172" cy="196" r="11" fill="currentColor"/>'
      + '<circle cx="208" cy="196" r="11" fill="currentColor"/>'
      + '<ellipse cx="290" cy="180" rx="42" ry="40"/>'
      + '<circle cx="272" cy="164" r="11" fill="currentColor"/>'
      + '<circle cx="308" cy="164" r="11" fill="currentColor"/>'
      + '<circle cx="272" cy="196" r="11" fill="currentColor"/>'
      + '<circle cx="308" cy="196" r="11" fill="currentColor"/>'
      + '<text x="190" y="266" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">3 groups of 4</text>'
      + '<line x1="360" y1="80" x2="360" y2="300" stroke-dasharray="7 7"/>'
      + '<text x="510" y="50" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">into bags of 3</text>'
      + '<polygon points="400,142 446,142 446,226 400,226"/>'
      + '<circle cx="423" cy="162" r="10" fill="currentColor"/>'
      + '<circle cx="423" cy="186" r="10" fill="currentColor"/>'
      + '<circle cx="423" cy="210" r="10" fill="currentColor"/>'
      + '<polygon points="458,142 504,142 504,226 458,226"/>'
      + '<circle cx="481" cy="162" r="10" fill="currentColor"/>'
      + '<circle cx="481" cy="186" r="10" fill="currentColor"/>'
      + '<circle cx="481" cy="210" r="10" fill="currentColor"/>'
      + '<polygon points="516,142 562,142 562,226 516,226"/>'
      + '<circle cx="539" cy="162" r="10" fill="currentColor"/>'
      + '<circle cx="539" cy="186" r="10" fill="currentColor"/>'
      + '<circle cx="539" cy="210" r="10" fill="currentColor"/>'
      + '<polygon points="574,142 620,142 620,226 574,226"/>'
      + '<circle cx="597" cy="162" r="10" fill="currentColor"/>'
      + '<circle cx="597" cy="186" r="10" fill="currentColor"/>'
      + '<circle cx="597" cy="210" r="10" fill="currentColor"/>'
      + '<text x="510" y="266" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">4 bags of 3</text>'
      + '<text x="320" y="346" font-size="22" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">both are 12 divided by 3, and both '
      + 'answer 4</text></svg>',
  },
  tables: [{
    caption: 'The two shapes a division question comes in',
    columns: [
      'Kind',
      'The question',
      'What the 3 means',
      'What the answer means',
    ],
    rows: [
      [
        'Sharing',
        '12 mangoes between 3 children',
        'The number of children',
        'How many each one gets',
      ],
      [
        'Grouping',
        '12 mangoes into bags of 3',
        'The size of a bag',
        'How many bags there are',
      ],
    ],
    note: 'Both are 12 divided by 3 and both answer 4, so the arithmetic '
      + 'never tells you which shape you are in. The question does.',
  }],
  questions: [
    {
      id: 'ds-1',
      ask: 'Share 20 sweets between 4 children. How many each?',
      kind: 'numeric',
      answer: '5',
      accept: ['five'],
      teach: 'Deal one at a time round the four. '
        + 'Check it: 5 times 4 is 20.',
      level: 2,
    },
    {
      id: 'ds-2',
      ask: 'You have 18 eggs and trays holding 6. How many trays?',
      kind: 'numeric',
      answer: '3',
      accept: ['three'],
      teach: 'This is grouping. Count in sixes: 6, 12, 18. Three counts.',
      level: 3,
    },
    {
      id: 'ds-3',
      ask: 'Share 26 pencils between 4. How many are left over?',
      kind: 'numeric',
      answer: '2',
      accept: ['two'],
      teach: 'Each child gets 6, which uses 24. '
        + 'Two are left, and that leftover is the remainder.',
      level: 4,
    },
  ],
})

/* ── fractions that are the same size ─────────────────────────────────────── */

teach({
  topicId: 'equivalent-fractions',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Two fractions can look different and be the same amount. '
      + 'Half and two quarters are the same. '
      + 'The pieces were just cut differently.',
    method: [
      'Multiply top and bottom by the same number to get an equal fraction.',
      'Divide top and bottom by the same number to simplify one.',
      'Whatever you do to the top, do to the bottom.',
    ],
  },

  idea:
    'Two fractions can look completely different and be the same '
    + 'amount of cake. '
    + 'They look different because the cake was cut into different '
    + 'numbers of pieces, not because there is more cake.',

  mechanism:
    'Here is why multiplying top and bottom by the same number is allowed. '
    + 'Doubling the bottom number means cutting every piece in two. '
    + 'Now the pieces are half the size, but you have twice as many, '
    + 'so you are holding exactly the same amount. '
    + 'That is the whole rule in one sentence. '
    + 'And it is why doing it to only one of the two numbers is wrong: '
    + 'you would be changing the pieces without changing how many you have.',

  recap:
    'You know the bottom number counts the parts in the whole '
    + 'and the top counts how many you have. '
    + 'Both of those matter here.',

  method: [
    'To find an equal fraction, pick a number.',
    'Multiply the top by it and the bottom by it.',
    'To simplify, find a number that divides into both.',
    'Divide top and bottom by that number.',
    'Keep going until nothing divides into both any more.',
    'Check by picturing the bar: are the shaded parts the same length?',
  ],

  worked: [
    {
      level: 2,
      ask: 'Write a fraction equal to one half, with 4 on the bottom.',
      steps: [
        'To get from 2 to 4 on the bottom, multiply by 2.',
        'So multiply the top by 2 as well. 1 times 2 is 2.',
      ],
      answer: 'Two quarters.',
    },
    {
      level: 3,
      ask: 'Simplify six eighths.',
      steps: [
        'What divides into both 6 and 8? 2 does.',
        '6 divided by 2 is 3. 8 divided by 2 is 4.',
        'Does anything divide into both 3 and 4? No.',
      ],
      answer: 'Three quarters.',
    },
    {
      level: 4,
      ask: 'Why is multiplying only the bottom number wrong?',
      steps: [
        'Doubling the bottom cuts every piece in half.',
        'But you still hold the same number of pieces as before.',
        'So you are holding half as much.',
      ],
      answer: 'Because you made the pieces smaller without giving yourself '
        + 'more of them, so the amount changed.',
    },
  ],

  traps: [
    {
      mistake: 'Adding the same number to top and bottom.',
      why: 'Adding does not work. Only multiplying and dividing do. '
        + 'One half plus one on both is two thirds, which is a different '
        + 'amount.',
    },
    {
      mistake: 'Changing only one of the two numbers.',
      why: 'Whatever you do to the top you must do to the bottom. '
        + 'Otherwise the amount changes.',
    },
    {
      mistake: 'Stopping before the fraction is fully simplified.',
      why: 'Keep going until no number divides into both. '
        + 'Four eighths simplifies to two quarters and then to one half.',
    },
  ],

  extension:
    'Equivalent fractions are what let you add fractions with different '
    + 'bottom numbers. '
    + 'You cannot add halves to quarters as they stand, '
    + 'but you can turn the half into two quarters first. '
    + 'That is the next topic, and this is the tool it needs.',

  figure: {
    alt: 'The same bar drawn three times, cut into two pieces, then four, '
      + 'then eight. The shaded part is exactly the same length every time, '
      + 'and is named one half, two quarters and four eighths.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the same amount, cut three '
      + 'ways</text>'
      + '<polygon points="70,80 240,80 240,134 70,134" stroke="#0f8a4d" '
      + 'stroke-width="3" fill="#0f8a4d" fill-opacity="0.18"/>'
      + '<polygon points="240,80 410,80 410,134 240,134" stroke-width="3"/>'
      + '<text x="426" y="114" font-size="19" text-anchor="start" '
      + 'fill="currentColor" stroke="none">one half</text>'
      + '<polygon points="70,176 155,176 155,230 70,230" stroke="#0f8a4d" '
      + 'stroke-width="3" fill="#0f8a4d" fill-opacity="0.18"/>'
      + '<polygon points="155,176 240,176 240,230 155,230" stroke="#0f8a4d" '
      + 'stroke-width="3" fill="#0f8a4d" fill-opacity="0.18"/>'
      + '<polygon points="240,176 325,176 325,230 240,230" '
      + 'stroke-width="3"/>'
      + '<polygon points="325,176 410,176 410,230 325,230" '
      + 'stroke-width="3"/>'
      + '<text x="426" y="210" font-size="19" text-anchor="start" '
      + 'fill="currentColor" stroke="none">two quarters</text>'
      + '<polygon points="70,272 112,272 112,326 70,326" stroke="#0f8a4d" '
      + 'stroke-width="3" fill="#0f8a4d" fill-opacity="0.18"/>'
      + '<polygon points="112,272 155,272 155,326 112,326" stroke="#0f8a4d" '
      + 'stroke-width="3" fill="#0f8a4d" fill-opacity="0.18"/>'
      + '<polygon points="155,272 198,272 198,326 155,326" stroke="#0f8a4d" '
      + 'stroke-width="3" fill="#0f8a4d" fill-opacity="0.18"/>'
      + '<polygon points="198,272 240,272 240,326 198,326" stroke="#0f8a4d" '
      + 'stroke-width="3" fill="#0f8a4d" fill-opacity="0.18"/>'
      + '<polygon points="240,272 282,272 282,326 240,326" '
      + 'stroke-width="3"/>'
      + '<polygon points="282,272 325,272 325,326 282,326" '
      + 'stroke-width="3"/>'
      + '<polygon points="325,272 368,272 368,326 325,326" '
      + 'stroke-width="3"/>'
      + '<polygon points="368,272 410,272 410,326 368,326" '
      + 'stroke-width="3"/>'
      + '<text x="426" y="306" font-size="19" text-anchor="start" '
      + 'fill="currentColor" stroke="none">four eighths</text>'
      + '<line x1="240" y1="70" x2="240" y2="340" stroke="#0f8a4d" '
      + 'stroke-width="3" stroke-dasharray="7 7"/>'
      + '<text x="320" y="376" font-size="20" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">the shaded part never changes '
      + 'length</text></svg>',
  },
  tables: [{
    caption: 'The same amount of cake, cut three ways',
    columns: ['Fraction', 'Pieces in the whole', 'Pieces you have'],
    rows: [
      ['One half', '2', '1'],
      ['Two quarters', '4', '2'],
      ['Four eighths', '8', '4'],
    ],
    note: 'Each step cuts every piece in two, so the pieces are half the '
      + 'size and there are twice as many. That is why doing it to only '
      + 'one of the two numbers is wrong.',
  }],
  questions: [
    {
      id: 'eq-1',
      ask: 'How many quarters are the same as one half?',
      kind: 'numeric',
      answer: '2',
      accept: ['two'],
      teach: 'Cut each half in two and you get quarters. '
        + 'One half becomes two of them.',
      level: 2,
    },
    {
      id: 'eq-2',
      ask: 'Simplify four eighths. What is the bottom number?',
      kind: 'numeric',
      answer: '2',
      accept: ['two', '1/2', 'one half'],
      teach: 'Divide top and bottom by 4. '
        + '4 divided by 4 is 1, and 8 divided by 4 is 2. That is one half.',
      level: 3,
    },
    {
      id: 'eq-3',
      ask: 'To keep a fraction the same, what must you do?',
      kind: 'choice',
      options: [
        'Multiply top and bottom by the same number',
        'Add the same number to top and bottom',
        'Change only the bottom',
      ],
      answer: 'Multiply top and bottom by the same number',
      teach: 'Multiplying both cuts every piece and gives you more of them, '
        + 'so the amount stays. Adding does not work that way.',
      level: 3,
    },
  ],
})

/* ── finding the rule ─────────────────────────────────────────────────────── */

teach({
  topicId: 'find-the-rule',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Find what changes between one term and the next. '
      + 'Say the rule in words. '
      + 'Then use it to jump ahead without writing every term.',
    method: [
      'Compare two neighbours to find the change.',
      'Check a second gap matches.',
      'Say the rule, then apply it as many times as you need.',
    ],
  },

  idea:
    'A sequence follows a rule. '
    + 'Once you know the rule you can find a term far along '
    + 'without writing out all the ones in between.',

  mechanism:
    'There are two kinds of rule and you should check for both. '
    + 'One changes by the same amount at each step '
    + 'and the other changes by the same multiple. '
    + 'Test for adding first by subtracting neighbours. '
    + 'If those differences are not the same, try dividing neighbours instead. '
    + 'One of the two usually falls out.',

  recap:
    'You can carry on a pattern by comparing neighbours. '
    + 'This is that, plus saying the rule well enough to skip ahead.',

  method: [
    'Write the sequence with gaps between the terms.',
    'Subtract each term from the next. Are the differences the same?',
    'If yes, the rule is add that amount.',
    'If no, divide each term by the one before. Are those the same?',
    'If yes, the rule is multiply by that amount.',
    'Say the rule in a sentence, then use it.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Find the rule: 5, 9, 13, 17.',
      steps: [
        '9 take 5 is 4. 13 take 9 is 4. 17 take 13 is 4.',
        'All the differences match.',
      ],
      answer: 'Add 4 each time.',
    },
    {
      level: 3,
      ask: 'Find the rule: 2, 6, 18, 54.',
      steps: [
        'Differences are 4, 12, 36. Not the same, so it is not adding.',
        'Now divide: 6 divided by 2 is 3. 18 divided by 6 is 3.',
      ],
      answer: 'Multiply by 3 each time.',
    },
    {
      level: 4,
      ask: 'The rule is add 6 and the first term is 4. What is the 10th term?',
      steps: [
        'The first term is 4 and gets no additions.',
        'To reach the 10th you add 6 nine times, not ten.',
        '9 times 6 is 54.',
        '4 and 54 is 58.',
      ],
      answer: '58. The commonest slip here is adding ten times.',
    },
  ],

  traps: [
    {
      mistake: 'Deciding the rule from one gap.',
      why: 'One gap can be a coincidence. Check at least two.',
    },
    {
      mistake: 'Only ever testing for adding.',
      why: 'Some sequences multiply. '
        + 'If the differences do not match, try dividing neighbours.',
    },
    {
      mistake: 'Counting the first term as one of the steps.',
      why: 'Getting to the 10th term takes nine steps, not ten. '
        + 'The first term is where you start.',
    },
  ],

  extension:
    'Some rules use the position of the term rather than the one before it. '
    + 'For 3, 6, 9, 12 the rule can be said as "three times the position". '
    + 'That kind of rule lets you find the hundredth term in one step, '
    + 'and it is where algebra begins.',

  figure: {
    alt: 'Two sequences with the step written over each arrow. The first '
      + 'runs 3, 7, 11, 15 with add 4 over every arrow. The second runs 2, '
      + '6, 18, 54 with times 3 over every arrow.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="52" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">subtract neighbours first, and '
      + 'if that fails divide them</text>'
      + '<text x="90" y="166" font-size="34" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">3</text>'
      + '<text x="240" y="166" font-size="34" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">7</text>'
      + '<line x1="108" y1="154" x2="192" y2="154" stroke="#0f8a4d"/>'
      + '<polyline points="179,144 192,154 179,164" stroke="#0f8a4d"/>'
      + '<text x="150" y="140" font-size="19" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">add 4</text>'
      + '<text x="390" y="166" font-size="34" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">11</text>'
      + '<line x1="258" y1="154" x2="342" y2="154" stroke="#0f8a4d"/>'
      + '<polyline points="329,144 342,154 329,164" stroke="#0f8a4d"/>'
      + '<text x="300" y="140" font-size="19" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">add 4</text>'
      + '<text x="540" y="166" font-size="34" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">15</text>'
      + '<line x1="408" y1="154" x2="492" y2="154" stroke="#0f8a4d"/>'
      + '<polyline points="479,144 492,154 479,164" stroke="#0f8a4d"/>'
      + '<text x="450" y="140" font-size="19" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">add 4</text>'
      + '<text x="320" y="222" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the differences match, so the '
      + 'rule is add 4</text>'
      + '<text x="90" y="318" font-size="34" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">2</text>'
      + '<text x="240" y="318" font-size="34" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">6</text>'
      + '<line x1="108" y1="306" x2="192" y2="306" stroke="#0f8a4d"/>'
      + '<polyline points="179,296 192,306 179,316" stroke="#0f8a4d"/>'
      + '<text x="150" y="292" font-size="19" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">times 3</text>'
      + '<text x="390" y="318" font-size="34" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">18</text>'
      + '<line x1="258" y1="306" x2="342" y2="306" stroke="#0f8a4d"/>'
      + '<polyline points="329,296 342,306 329,316" stroke="#0f8a4d"/>'
      + '<text x="300" y="292" font-size="19" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">times 3</text>'
      + '<text x="540" y="318" font-size="34" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">54</text>'
      + '<line x1="408" y1="306" x2="492" y2="306" stroke="#0f8a4d"/>'
      + '<polyline points="479,296 492,306 479,316" stroke="#0f8a4d"/>'
      + '<text x="450" y="292" font-size="19" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">times 3</text>'
      + '<text x="320" y="374" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">these do not, but dividing gives '
      + '3 every time</text></svg>',
  },
  tables: [{
    caption: 'The two kinds of rule, and how to test for each',
    columns: ['Kind of rule', 'How to test for it', 'An example'],
    rows: [
      [
        'Adding',
        'Subtract each term from the next',
        '3, 7, 11, 15: always four more',
      ],
      [
        'Multiplying',
        'Divide each term by the one before',
        '2, 6, 18, 54: always three times',
      ],
    ],
    note: 'Test for the adding kind first. If the differences do not match, '
      + 'try dividing instead, and one of the two usually falls out.',
  }],
  questions: [
    {
      id: 'fr-1',
      ask: 'What is the rule for 5, 9, 13, 17?',
      kind: 'choice',
      options: ['Add 4', 'Add 5', 'Multiply by 2'],
      answer: 'Add 4',
      teach: 'Subtract neighbours: 9 take 5 is 4, and 13 take 9 is 4. '
        + 'The same gap twice makes it safe to trust.',
      level: 2,
    },
    {
      id: 'fr-2',
      ask: 'What is the next term in 2, 6, 18, 54?',
      kind: 'numeric',
      answer: '162',
      accept: ['one hundred and sixty two'],
      teach: 'Each term is three times the one before, so 54 times 3.',
      level: 3,
    },
    {
      id: 'fr-3',
      ask: 'First term 4, rule add 6. How many times do you add 6 to reach '
        + 'the 10th term?',
      kind: 'numeric',
      answer: '9',
      accept: ['nine'],
      teach: 'Nine, not ten. '
        + 'The first term is where you start, so it takes nine steps to '
        + 'reach the tenth.',
      level: 4,
    },
  ],
})

/* ── money ────────────────────────────────────────────────────────────────── */

teach({
  topicId: 'money-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Add prices to find the total. '
      + 'Change is what you paid take away the total. '
      + 'Always check the change before you walk away.',
    method: [
      'Add the prices to get the total.',
      'Take the total from what you handed over.',
      'Check: the change plus the total should equal what you paid.',
    ],
  },

  idea:
    'Money works like any other number, with one extra rule: '
    + '100 pesewas make one cedi. '
    + 'Add prices to get a total. '
    + 'Take the total from what you paid, and that is your change.',

  mechanism:
    'Checking change is the part worth taking seriously, '
    + 'and there is a way to do it that never fails. '
    + 'Add your change back to the total. '
    + 'If it does not come to what you handed over, something is wrong. '
    + 'This works because adding undoes subtracting, '
    + 'and it means you never have to trust the subtraction you just did. '
    + 'Traders do it in their heads all day by counting up from the price '
    + 'to the note.',

  recap:
    'You can add and subtract with carrying and borrowing. '
    + 'Money is those sums with units attached.',

  method: [
    'Write the prices with the cedis lined up under the cedis.',
    'Add them to get the total.',
    'Write what you paid above the total.',
    'Subtract to find the change.',
    'Check by adding the change back to the total.',
    'If 100 pesewas appear, change them for one cedi.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Bread costs 8 cedis and milk costs 5. What is the total?',
      steps: [
        '8 and 5.',
      ],
      answer: '13 cedis.',
    },
    {
      level: 3,
      ask: 'You buy things for 36 cedis and pay with a 50. What is the change?',
      steps: [
        '50 take away 36.',
        'Borrow: 10 take 6 is 4, then 4 take 3 is 1.',
        'Check: 14 and 36 is 50.',
      ],
      answer: '14 cedis.',
    },
    {
      level: 4,
      ask: 'You buy 3 items at 12 cedis 50 pesewas each and pay 40 cedis. '
        + 'What is the change?',
      steps: [
        'Three at 12 cedis is 36 cedis.',
        'Three lots of 50 pesewas is 150 pesewas, which is 1 cedi 50.',
        'Total is 37 cedis 50 pesewas.',
        '40 take away 37 cedis 50 is 2 cedis 50.',
      ],
      answer: '2 cedis 50 pesewas. Check: 37.50 and 2.50 is 40.',
    },
  ],

  traps: [
    {
      mistake: 'Leaving 150 pesewas as pesewas.',
      why: '100 pesewas is one cedi, so 150 pesewas is 1 cedi 50. '
        + 'Change it over, the way you carry a ten.',
    },
    {
      mistake: 'Taking what you paid away from the change.',
      why: 'The change is what you paid take away the total. '
        + 'The bigger number comes first.',
    },
    {
      mistake: 'Walking away without checking.',
      why: 'Add the change to the total. '
        + 'If it does not give what you handed over, ask.',
    },
  ],

  extension:
    'Traders rarely subtract. '
    + 'They count up from the price to the note: '
    + 'from 36, two more makes 38, two more makes 40, ten more makes 50, '
    + 'so the change is 14. '
    + 'It is the same answer reached the easier way.',

  figure: {
    alt: 'A bar standing for the twenty cedis handed over, cut into two '
      + 'parts: thirteen cedis fifty for the total and six cedis fifty for '
      + 'the change. A green arrow under it shows the change added back to '
      + 'the total, coming to the twenty that was handed over.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="50" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">check the change by adding it '
      + 'back</text>'
      + '<polygon points="60,120 420,120 420,190 60,190" stroke-width="3" '
      + 'fill="#0f8a4d" fill-opacity="0.18"/>'
      + '<polygon points="420,120 580,120 580,190 420,190" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="240" y="164" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">13.50</text>'
      + '<text x="500" y="164" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">6.50</text>'
      + '<text x="240" y="108" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the total</text>'
      + '<text x="500" y="108" font-size="19" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">the change</text>'
      + '<line x1="60" y1="218" x2="580" y2="218" stroke-width="3"/>'
      + '<line x1="60" y1="210" x2="60" y2="226"/>'
      + '<line x1="580" y1="210" x2="580" y2="226"/>'
      + '<text x="320" y="254" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">you handed over 20.00</text>'
      + '<text x="320" y="318" font-size="26" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">6.50 added back to 13.50 is '
      + '20.00</text>'
      + '<text x="320" y="364" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">if it does not come back to what '
      + 'you paid, something is wrong</text></svg>',
  },
  questions: [
    {
      id: 'mn-1',
      ask: 'How many pesewas make one cedi?',
      kind: 'numeric',
      answer: '100',
      accept: ['one hundred', 'a hundred'],
      teach: '100 pesewas to the cedi, '
        + 'the same way 100 centimetres make a metre.',
      level: 2,
    },
    {
      id: 'mn-2',
      ask: 'You spend 36 cedis and pay with 50. What is your change?',
      kind: 'numeric',
      answer: '14',
      accept: ['fourteen'],
      teach: '50 take away 36 is 14. '
        + 'Check by adding back: 14 and 36 is 50.',
      level: 3,
    },
    {
      id: 'mn-3',
      ask: 'How do you check your change is right?',
      kind: 'choice',
      options: [
        'Count it twice',
        'Add the change to the total and see if you get what you paid',
        'Ask the trader',
      ],
      answer: 'Add the change to the total and see if you get what you paid',
      teach: 'Adding undoes subtracting, '
        + 'so this checks the sum without trusting it.',
      level: 3,
    },
  ],
})

/* ── bar charts and pictographs ───────────────────────────────────────────── */

teach({
  topicId: 'bar-charts',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A bar chart turns numbers into bars. '
      + 'The tallest bar answers "which is most" without counting. '
      + 'Every bar must start at the same line.',
    method: [
      'Draw the two lines and label them.',
      'Mark an even scale up the side.',
      'Draw each bar to its number, same width, same gaps.',
    ],
  },

  idea:
    'A bar chart shows numbers as bars so you can compare them by looking. '
    + 'A pictograph does the same with small pictures, '
    + 'where one picture stands for a fixed number of things.',

  mechanism:
    'The whole value of a chart is that your eye does the comparing. '
    + 'That only works if the bars can be fairly compared, '
    + 'and that needs two things: '
    + 'every bar starts at the same line, and the scale goes up in even steps. '
    + 'Break either one and the chart lies while looking perfectly neat. '
    + 'That is why a chart that starts its scale at 50 instead of 0 '
    + 'can make a small difference look enormous.',

  recap:
    'You can collect answers in a tally and write the totals in a table. '
    + 'A chart is the next step, and the table is what it is drawn from.',

  method: [
    'Start from your table of numbers.',
    'Draw a line up the side and a line along the bottom.',
    'Write the choices along the bottom.',
    'Mark the side in even steps, starting at nought.',
    'Draw each bar up to its number.',
    'Keep every bar the same width with the same gap between.',
    'Give the chart a title.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Your table says mango 13, orange 6. Which bar is taller, and by '
        + 'how much?',
      steps: [
        'Mango is 13 and orange is 6.',
        '13 take away 6 is 7.',
      ],
      answer: 'Mango, by 7.',
    },
    {
      level: 3,
      ask: 'In a pictograph, one fruit picture stands for 5 children. '
        + 'A row has 4 pictures. How many children?',
      steps: [
        'Each picture is 5.',
        'Four pictures is four fives.',
      ],
      answer: '20 children.',
    },
    {
      level: 4,
      ask: 'A chart has bars of 52 and 56 but the scale starts at 50. '
        + 'What is misleading about it?',
      steps: [
        'On the page one bar looks three times the other.',
        'The real numbers are 52 and 56, which are very close.',
        'Starting at 50 cut most of both bars away.',
      ],
      answer: 'The scale does not start at nought, '
        + 'so a small difference looks like a huge one.',
    },
  ],

  traps: [
    {
      mistake: 'Starting the scale somewhere other than nought.',
      why: 'It makes small differences look large. '
        + 'If you must do it, say so clearly on the chart.',
    },
    {
      mistake: 'Drawing bars of different widths.',
      why: 'A wide bar looks like more even at the same height. '
        + 'Only the height should carry the number.',
    },
    {
      mistake: 'Counting pictures in a pictograph as one each.',
      why: 'Read the key first. '
        + 'One picture often stands for five or ten.',
    },
  ],

  extension:
    'Look at charts in newspapers and on television with this in mind. '
    + 'A surprising number of them start the scale above nought, '
    + 'and almost always it makes somebody look better or worse than they are. '
    + 'Knowing the rule lets you catch it.',

  figure: {
    alt: 'The same two numbers drawn twice, once with the scale starting at '
      + 'nought where the bars look similar, and once starting at fifty where '
      + 'one looks far larger than the other',
    svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M40 30v180h160"/><path d="M280 30v180h160"/>'
      + '</g>'
      + '<rect x="70" y="118" width="40" height="92" fill="#0f8a4d" opacity="0.6"/>'
      + '<rect x="130" y="112" width="40" height="98" fill="#0f8a4d" opacity="0.6"/>'
      + '<rect x="310" y="130" width="40" height="80" fill="#b4342a" opacity="0.6"/>'
      + '<rect x="370" y="40" width="40" height="170" fill="#b4342a" opacity="0.6"/>'
      + '<g font-size="18" fill="currentColor" text-anchor="middle">'
      + '<text x="90" y="232">52</text><text x="150" y="232">56</text>'
      + '<text x="330" y="232">52</text><text x="390" y="232">56</text>'
      + '</g>'
      + '<text x="24" y="214" font-size="16" fill="currentColor" text-anchor="end">0</text>'
      + '<text x="266" y="214" font-size="16" fill="#b4342a" text-anchor="end">50</text>'
      + '<text x="120" y="268" text-anchor="middle" font-size="19" fill="#0f8a4d">'
      + 'scale from 0: honest</text>'
      + '<text x="360" y="268" text-anchor="middle" font-size="19" fill="#b4342a">'
      + 'scale from 50: misleading</text>'
      + '<text x="240" y="294" text-anchor="middle" font-size="17" fill="currentColor">'
      + 'Same two numbers in both charts.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'bc-1',
      ask: 'Where should the scale on a bar chart start?',
      kind: 'numeric',
      answer: '0',
      accept: ['nought', 'zero'],
      teach: 'At nought. '
        + 'Starting higher makes small differences look large.',
      level: 2,
    },
    {
      id: 'bc-2',
      ask: 'One picture stands for 5 children. A row has 3 pictures. '
        + 'How many children?',
      kind: 'numeric',
      answer: '15',
      accept: ['fifteen'],
      teach: 'Read the key first: each picture is 5, so three of them is 15.',
      level: 3,
    },
    {
      id: 'bc-3',
      ask: 'Why must all the bars be the same width?',
      kind: 'choice',
      options: [
        'It looks neater',
        'A wider bar looks like more even at the same height',
        'It saves paper',
      ],
      answer: 'A wider bar looks like more even at the same height',
      teach: 'Only the height should carry the number. '
        + 'Width that varies quietly changes what your eye reads.',
      level: 4,
    },
  ],
})
