/**
 * Stored lessons for Basic 6 Mathematics and English.
 *
 * Written at about grade 6, with a `brief` form on every topic. This is the
 * last primary year, so several of these topics are the first sight of
 * something that becomes a whole JHS subject: letters standing for numbers
 * is algebra, and the mean is the beginning of statistics.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── percentages ──────────────────────────────────────────────────────────── */

teach({
  topicId: 'percentages-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Per cent means out of a hundred. '
      + '50% is half, 25% is a quarter, 10% is a tenth. '
      + 'To find 10%, divide by 10.',
    method: [
      'Find 10% by dividing by 10.',
      'Build other percentages from that: 20% is double, 5% is half.',
      '50% is half the amount, 25% is half of that.',
    ],
  },

  idea:
    'Per cent means out of a hundred. '
    + '50% means 50 out of every 100, which is a half. '
    + '25% is a quarter, 10% is a tenth. '
    + 'A percentage is just another way of writing a fraction, '
    + 'with the bottom number always 100.',

  mechanism:
    'Percentages exist because comparing fractions with different bottoms '
    + 'is hard. '
    + 'Is 17 out of 25 better than 33 out of 50? '
    + 'You cannot see it. '
    + 'Turn both into percentages, 68% and 66%, and you can. '
    + 'Fixing the bottom number at 100 for everything '
    + 'is what makes percentages comparable at a glance, '
    + 'and that is the whole reason they are used for marks, prices and '
    + 'interest.',

  recap:
    'You know that a fraction is parts of a whole, '
    + 'and that 0.5, a half and 50% are three ways of writing one amount.',

  method: [
    'To find 10%, divide by 10.',
    'To find 20%, find 10% and double it.',
    'To find 5%, find 10% and halve it.',
    'To find 50%, halve the amount.',
    'To find 25%, halve it twice.',
    'For an awkward percentage, build it from 10%, 5% and 1%.',
  ],

  worked: [
    {
      level: 4,
      ask: 'What is 10% of 250?',
      steps: [
        '10% means divide by 10.',
      ],
      answer: '25.',
    },
    {
      level: 5,
      ask: 'A shirt costs 80 cedis with 25% off. What do you pay?',
      steps: [
        '25% is a quarter. A quarter of 80 is 20.',
        'That is the discount.',
        '80 take away 20.',
      ],
      answer: '60 cedis.',
    },
    {
      level: 6,
      ask: 'Which is the better mark, 17 out of 25 or 33 out of 50?',
      steps: [
        '17 out of 25: multiply both by 4 to get out of 100, giving 68%.',
        '33 out of 50: multiply both by 2, giving 66%.',
      ],
      answer: '17 out of 25, at 68% against 66%. '
        + 'You could not see that before converting.',
    },
  ],

  traps: [
    {
      mistake: 'Giving the discount as the answer.',
      why: 'The question asked what you pay. '
        + 'Take the discount off the price.',
    },
    {
      mistake: 'Thinking 50% off twice is 100% off.',
      why: 'The second 50% comes off the reduced price. '
        + 'Two halvings leave a quarter, not nothing.',
    },
    {
      mistake: 'Comparing percentages of different amounts.',
      why: '10% of 1,000 is far more than 50% of 100. '
        + 'A percentage is meaningless without knowing of what.',
    },
  ],

  extension:
    'Interest on a loan is a percentage applied again and again, '
    + 'each time to the new total. '
    + 'That is why a debt can grow far faster than people expect, '
    + 'and why understanding this one idea properly is worth real money '
    + 'later.',

  questions: [
    {
      id: 'pc-1',
      ask: 'What is 10% of 250?',
      kind: 'numeric',
      answer: '25',
      accept: ['twenty five', 'twenty-five'],
      teach: '10% means divide by 10. '
        + 'Everything else can be built from this one.',
      level: 4,
    },
    {
      id: 'pc-2',
      ask: 'A shirt costs 80 cedis with 25% off. What do you pay?',
      kind: 'numeric',
      answer: '60',
      accept: ['sixty'],
      teach: 'A quarter of 80 is 20, and that is the discount. '
        + '80 take away 20 is 60. Do not stop at the 20.',
      level: 5,
    },
    {
      id: 'pc-3',
      ask: 'Is 50% always more than 10%?',
      kind: 'choice',
      options: ['No, it depends what of', 'Yes'],
      answer: 'No, it depends what of',
      teach: '10% of 1,000 is 100, and 50% of 100 is 50. '
        + 'A percentage means nothing without the amount.',
      level: 6,
    },
  ],
})

/* ── ratio and proportion ─────────────────────────────────────────────────── */

teach({
  topicId: 'ratio-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A ratio says how a thing is split between parts. '
      + '3:2 means five shares, three to one side and two to the other. '
      + 'It is deliberately not an equal split.',
    method: [
      'Add the numbers in the ratio to get the total shares.',
      'Divide the amount by that total to find one share.',
      'Multiply one share by each part of the ratio.',
    ],
  },

  idea:
    'A ratio describes how something is divided between two or more parts. '
    + 'Sharing 50 cedis in the ratio 3:2 means five shares in total: '
    + 'three for one person and two for the other, '
    + 'so 30 cedis and 20 cedis.',

  mechanism:
    'The step everybody misses is adding the parts together first. '
    + '3:2 does not mean three of something and two of something. '
    + 'It means the amount is cut into five, '
    + 'and then grouped three and two. '
    + 'Once you find the value of one share, everything follows. '
    + 'And it is worth being clear that a ratio is not a fair split '
    + 'and is not trying to be: '
    + 'it is used exactly when two people should not get the same, '
    + 'because one put in more, or worked longer, or owns more of it.',

  recap:
    'You can divide an amount into equal parts, '
    + 'and you can multiply. '
    + 'A ratio is those two in sequence.',

  method: [
    'Add the numbers in the ratio. That is the number of shares.',
    'Divide the total amount by the number of shares.',
    'That gives the value of one share.',
    'Multiply one share by each number in the ratio.',
    'Check: your answers should add back to the original amount.',
  ],

  worked: [
    {
      level: 5,
      ask: 'Share 50 cedis in the ratio 3:2.',
      steps: [
        '3 and 2 is 5 shares.',
        '50 divided by 5 is 10 per share.',
        'Three shares is 30, two shares is 20.',
      ],
      answer: '30 cedis and 20 cedis. Check: 30 and 20 is 50.',
    },
    {
      level: 6,
      ask: 'Share 60 oranges in the ratio 1:2:3.',
      steps: [
        '1 and 2 and 3 is 6 shares.',
        '60 divided by 6 is 10 per share.',
        'So 10, 20 and 30.',
      ],
      answer: '10, 20 and 30 oranges. Check: they add to 60.',
    },
    {
      level: 6,
      ask: 'Why is a ratio not a fair split?',
      steps: [
        'A fair split gives everybody the same.',
        'A ratio deliberately gives different amounts.',
        'It is used when people should not get the same.',
      ],
      answer: 'Because it is meant to be unequal: '
        + 'it reflects who contributed what, not who is present.',
    },
  ],

  traps: [
    {
      mistake: 'Dividing by the first number in the ratio.',
      why: 'Divide by the total of all the numbers. '
        + 'For 3:2 that is 5, not 3.',
    },
    {
      mistake: 'Thinking 3:2 means three and two of something.',
      why: 'It means the amount is cut into five parts, '
        + 'then grouped three and two.',
    },
    {
      mistake: 'Not checking the parts add back.',
      why: 'Your answers must total the original amount. '
        + 'It catches almost every error in one step.',
    },
  ],

  extension:
    'Recipes, maps and mixing cement all use ratios. '
    + 'A cement mix of 1:2:4 keeps working whether you are mixing a bucket '
    + 'or a lorry load, '
    + 'because what matters is the relationship between the parts '
    + 'rather than the amounts.',

  questions: [
    {
      id: 'rt-1',
      ask: 'Sharing in the ratio 3:2, how many shares are there in total?',
      kind: 'numeric',
      answer: '5',
      accept: ['five'],
      teach: 'Add the parts: 3 and 2 is 5. '
        + 'That is the step most people skip.',
      level: 5,
    },
    {
      id: 'rt-2',
      ask: 'Share 50 cedis in the ratio 3:2. What is the larger amount?',
      kind: 'numeric',
      answer: '30',
      accept: ['thirty'],
      teach: '50 divided by 5 shares is 10 each. '
        + 'Three shares is 30.',
      level: 5,
    },
    {
      id: 'rt-3',
      ask: 'Is a ratio meant to be a fair split?',
      kind: 'choice',
      options: ['No', 'Yes'],
      answer: 'No',
      teach: 'It is used precisely when people should not get the same, '
        + 'because of what each put in.',
      level: 6,
    },
  ],
})

/* ── letters standing for numbers ─────────────────────────────────────────── */

teach({
  topicId: 'letters-for-numbers',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A letter can stand for a number you do not know yet. '
      + 'A rule written with a letter works for every case at once.',
    method: [
      'Write the rule in words first.',
      'Replace the unknown amount with a letter.',
      'To find the letter, undo what was done to it.',
    ],
  },

  idea:
    'A letter can stand for a number. '
    + 'If a pen costs p cedis, then three pens cost 3p. '
    + 'Writing it this way gives you a rule that works '
    + 'whatever the pen actually costs.',

  mechanism:
    'This is the step from arithmetic to algebra, '
    + 'and it is worth seeing what is gained. '
    + 'Arithmetic answers one question: three pens at 2 cedis cost 6. '
    + 'Algebra answers all of them at once: three pens cost 3p. '
    + 'You have written down the relationship rather than one instance of '
    + 'it. '
    + 'Finding the value of the letter uses something you already know: '
    + 'undo what was done to it, '
    + 'which is exactly the missing number method with a letter in the box.',

  recap:
    'You can find a missing number by undoing. '
    + 'The box has simply been replaced by a letter.',

  method: [
    'Say the rule in words first.',
    'Choose a letter for the amount you do not know.',
    'Write the rule using the letter. 3 times p is written 3p.',
    'To find the letter, undo each operation in turn.',
    'Whatever you do to one side, do to the other.',
    'Put your answer back in and check the sentence is true.',
  ],

  worked: [
    {
      level: 5,
      ask: 'A pen costs p cedis. Write the cost of 4 pens.',
      steps: [
        'Four lots of p.',
        'We write that without the times sign.',
      ],
      answer: '4p.',
    },
    {
      level: 6,
      ask: 'If 3p equals 12, what is p?',
      steps: [
        'p was multiplied by 3.',
        'The opposite is dividing by 3.',
        '12 divided by 3.',
      ],
      answer: 'p is 4. Check: 3 times 4 is 12.',
    },
    {
      level: 6,
      ask: 'If 2n plus 5 equals 17, what is n?',
      steps: [
        'Two things were done: multiplied by 2, then 5 added.',
        'Undo in reverse order. First take away 5: 17 take 5 is 12.',
        'Now divide by 2.',
      ],
      answer: 'n is 6. Check: 2 times 6 is 12, and 12 and 5 is 17.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking the letter has a fixed meaning.',
      why: 'p is whatever this question says it is. '
        + 'It is not always 16 because of some rule about the alphabet.',
    },
    {
      mistake: 'Undoing in the wrong order.',
      why: 'For 2n plus 5, the 5 was added last, so take it away first. '
        + 'Undo in reverse.',
    },
    {
      mistake: 'Writing 3p as 3 and p.',
      why: '3p means 3 times p. '
        + 'The missing sign is multiplication, not addition.',
    },
  ],

  extension:
    'Once you can write a rule with letters, '
    + 'you can write rules about rules: '
    + 'the area of any rectangle is length times width, written A equals lw. '
    + 'One line that covers every rectangle that has ever existed.',

  questions: [
    {
      id: 'lf-1',
      ask: 'A pen costs p cedis. How do you write the cost of 4 pens?',
      kind: 'choice',
      options: ['4p', '4 + p', 'p4'],
      answer: '4p',
      teach: 'Four lots of p. The times sign is left out by convention.',
      level: 5,
    },
    {
      id: 'lf-2',
      ask: 'If 3p equals 12, what is p?',
      kind: 'numeric',
      answer: '4',
      accept: ['four'],
      teach: 'Undo the multiplying by dividing: 12 divided by 3.',
      level: 6,
    },
    {
      id: 'lf-3',
      ask: 'If 2n plus 5 equals 17, what is n?',
      kind: 'numeric',
      answer: '6',
      accept: ['six'],
      teach: 'Undo in reverse: take away the 5 first, then divide by 2.',
      level: 6,
    },
  ],
})

/* ── volume ───────────────────────────────────────────────────────────────── */

teach({
  topicId: 'volume-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Volume is how much space something takes up. '
      + 'For a box it is length times width times height. '
      + 'It is measured in cubic units.',
    method: [
      'Measure length, width and height.',
      'Multiply all three.',
      'Write the unit as cubic: cubic centimetres.',
    ],
  },

  idea:
    'Volume is the amount of space something takes up. '
    + 'For a box, multiply length by width by height. '
    + 'A box 4 cm by 3 cm by 2 cm has a volume of 24 cubic centimetres.',

  mechanism:
    'Think of filling the box with little cubes one centimetre each way. '
    + 'The bottom layer is 4 by 3, which is 12 cubes. '
    + 'The box is 2 cubes high, so there are two such layers: 24 cubes. '
    + 'That is why you multiply three numbers, '
    + 'and why the unit is cubic: you are counting cubes. '
    + 'It also explains the jump from area: '
    + 'area counts squares covering a surface, volume counts cubes filling '
    + 'a space. '
    + 'Two measurements for area, three for volume.',

  recap:
    'You can find the area of a rectangle by multiplying two sides, '
    + 'and you know why the unit is square. '
    + 'Volume is the same idea with one more direction.',

  method: [
    'Measure the length, the width and the height.',
    'Make sure all three are in the same unit.',
    'Multiply all three together.',
    'Write the unit as cubic centimetres or cubic metres.',
    'For liquid, remember 1,000 cubic centimetres is one litre.',
  ],

  worked: [
    {
      level: 5,
      ask: 'A box is 4 cm by 3 cm by 2 cm. What is its volume?',
      steps: [
        'Multiply 4 by 3, which is 12.',
        'Multiply by 2.',
      ],
      answer: '24 cubic centimetres.',
    },
    {
      level: 6,
      ask: 'Why is the unit cubic rather than square?',
      steps: [
        'Area counts squares covering a surface, two measurements.',
        'Volume counts cubes filling a space, three measurements.',
      ],
      answer: 'Because you are counting cubes, and that takes three '
        + 'measurements rather than two.',
    },
    {
      level: 6,
      ask: 'A tank is 50 cm by 40 cm by 50 cm. How many litres does it hold?',
      steps: [
        '50 times 40 is 2,000. Times 50 is 100,000 cubic centimetres.',
        '1,000 cubic centimetres is one litre.',
        '100,000 divided by 1,000.',
      ],
      answer: '100 litres.',
    },
  ],

  traps: [
    {
      mistake: 'Multiplying only two of the three measurements.',
      why: 'That gives you an area, not a volume. '
        + 'Three measurements, three numbers multiplied.',
    },
    {
      mistake: 'Mixing units.',
      why: 'Metres times centimetres times metres gives nothing meaningful. '
        + 'Convert everything first.',
    },
    {
      mistake: 'Writing the unit as square.',
      why: 'The unit tells the reader what you measured. '
        + 'Volume is cubic.',
    },
  ],

  extension:
    'A litre was defined as the volume of a cube 10 cm each way, '
    + 'which is 1,000 cubic centimetres. '
    + 'That is why the kitchen and the mathematics classroom agree, '
    + 'and it is a definition rather than a coincidence.',

  questions: [
    {
      id: 'vl-1',
      ask: 'A box is 4 cm by 3 cm by 2 cm. What is its volume in cubic '
        + 'centimetres?',
      kind: 'numeric',
      answer: '24',
      accept: ['twenty four', 'twenty-four'],
      teach: 'Multiply all three: 4 times 3 is 12, times 2 is 24.',
      level: 5,
    },
    {
      id: 'vl-2',
      ask: 'How many cubic centimetres are in one litre?',
      kind: 'numeric',
      answer: '1000',
      accept: ['1,000', 'one thousand'],
      teach: 'A litre is a cube 10 cm each way, '
        + 'and 10 times 10 times 10 is 1,000.',
      level: 6,
    },
    {
      id: 'vl-3',
      ask: 'Why is volume measured in cubic units?',
      kind: 'choice',
      options: [
        'You are counting cubes filling a space',
        'The shape is always a cube',
        'It sounds more exact',
      ],
      answer: 'You are counting cubes filling a space',
      teach: 'Area counts squares on a surface, volume counts cubes in a '
        + 'space. Two measurements against three.',
      level: 6,
    },
  ],
})

/* ── the mean ─────────────────────────────────────────────────────────────── */

teach({
  topicId: 'average-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The mean is the total shared out equally. '
      + 'Add the numbers and divide by how many there are. '
      + 'It can be misleading when one value is extreme.',
    method: [
      'Add all the values.',
      'Divide by how many values there are.',
      'Look at the actual numbers before trusting it.',
    ],
  },

  idea:
    'The mean is what everybody would have '
    + 'if the total were shared out equally. '
    + 'Add all the numbers and divide by how many there are. '
    + 'For 4, 6 and 8, the total is 18 and there are three, so the mean is 6.',

  mechanism:
    'The mean is useful because it turns many numbers into one, '
    + 'and dangerous for exactly the same reason. '
    + 'Consider four children with 2, 3, 3 and 40 sweets. '
    + 'The mean is 12, and not one child has anything close to 12. '
    + 'One extreme value drags it away from everybody. '
    + 'So the mean describes the group well when the values are close '
    + 'together '
    + 'and badly when one is far out. '
    + 'Always look at the actual numbers before you trust the average of '
    + 'them.',

  recap:
    'You can add a list of numbers and divide. '
    + 'That is all the arithmetic this needs. '
    + 'The judgement is the hard part.',

  method: [
    'Add all the values to get the total.',
    'Count how many values there are.',
    'Divide the total by the count.',
    'Now look at the original numbers.',
    'Is any one of them far from the rest?',
    'If so, say so. The mean alone would mislead.',
  ],

  worked: [
    {
      level: 5,
      ask: 'Find the mean of 4, 6 and 8.',
      steps: [
        'Add them: 18.',
        'There are three values.',
        '18 divided by 3.',
      ],
      answer: '6.',
    },
    {
      level: 6,
      ask: 'Four children have 2, 3, 3 and 40 sweets. '
        + 'What is the mean, and is it useful?',
      steps: [
        'Total is 48, divided by 4 is 12.',
        'But no child has anywhere near 12.',
        'The 40 has pulled the mean away from everybody.',
      ],
      answer: '12, and it describes nobody. '
        + 'One extreme value has made the mean misleading.',
    },
    {
      level: 6,
      ask: 'When is the mean a good description of a group?',
      steps: [
        'It works when the values cluster together.',
        'It fails when one is far from the rest.',
      ],
      answer: 'When the values are close to each other. '
        + 'Then the mean is near all of them.',
    },
  ],

  traps: [
    {
      mistake: 'Dividing by the wrong count.',
      why: 'Divide by how many values there are, not by the largest one '
        + 'or by ten.',
    },
    {
      mistake: 'Trusting the mean without looking at the numbers.',
      why: 'One extreme value can put the mean where nobody is. '
        + 'Always glance at the list.',
    },
    {
      mistake: 'Thinking the mean must be one of the values.',
      why: 'The mean of 4 and 7 is 5.5, which is neither. '
        + 'It describes the group, not a member of it.',
    },
  ],

  extension:
    'When one value is extreme, the middle value is often more honest. '
    + 'For 2, 3, 3 and 40, the middle is 3, '
    + 'which describes that group far better than 12 does. '
    + 'That is why reports about incomes usually give both.',

  questions: [
    {
      id: 'av-1',
      ask: 'What is the mean of 4, 6 and 8?',
      kind: 'numeric',
      answer: '6',
      accept: ['six'],
      teach: 'Add to 18, then divide by the three values.',
      level: 5,
    },
    {
      id: 'av-2',
      ask: 'Four children have 2, 3, 3 and 40 sweets. What is the mean?',
      kind: 'numeric',
      answer: '12',
      accept: ['twelve'],
      teach: '48 divided by 4 is 12, '
        + 'and notice that no child has anything like 12.',
      level: 6,
    },
    {
      id: 'av-3',
      ask: 'When is a mean misleading?',
      kind: 'choice',
      options: [
        'When one value is far from the rest',
        'When there are too many values',
        'When the numbers are large',
      ],
      answer: 'When one value is far from the rest',
      teach: 'One extreme value drags the mean away from everybody, '
        + 'so it ends up describing nobody.',
      level: 6,
    },
  ],
})

/* ── chance ───────────────────────────────────────────────────────────────── */

teach({
  topicId: 'chance-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Some things are certain, some impossible, '
      + 'and most are somewhere between: likely or unlikely. '
      + 'A past result does not change the next one.',
    method: [
      'Ask whether it must happen, cannot happen, or might.',
      'If it might, ask how many ways it can and cannot.',
      'Remember the coin has no memory.',
    ],
  },

  idea:
    'Some things are certain: the sun will rise. '
    + 'Some are impossible: a goat will not lay an egg. '
    + 'Most sit between, and we call them likely or unlikely. '
    + 'Chance is about describing where something sits.',

  mechanism:
    'The idea worth fixing now is that the past does not change the future '
    + 'in a game of chance. '
    + 'A coin that has landed heads five times running '
    + 'is just as likely to give heads next time. '
    + 'The coin has no memory and no sense of fairness. '
    + 'People feel strongly that tails is now "due", '
    + 'and that feeling has cost a great many people a great deal of money. '
    + 'Each toss is a fresh event with the same two outcomes.',

  recap:
    'You know that a fraction describes part of a whole. '
    + 'Chance uses the same idea: how many ways out of how many possible.',

  method: [
    'Ask: must it happen? Then it is certain.',
    'Ask: can it happen at all? If not, it is impossible.',
    'Otherwise, count the ways it can happen.',
    'Count all the possible outcomes.',
    'More ways to happen than not means likely.',
    'Remember each try is separate from the last.',
  ],

  worked: [
    {
      level: 5,
      ask: 'A bag has 9 red balls and 1 blue. '
        + 'Is drawing red likely or unlikely?',
      steps: [
        'Nine ways out of ten give red.',
      ],
      answer: 'Likely.',
    },
    {
      level: 6,
      ask: 'A coin has landed heads five times. '
        + 'Is tails more likely next time?',
      steps: [
        'The coin has two sides and no memory.',
        'The next toss is a fresh event.',
      ],
      answer: 'No. It is still an even chance.',
    },
    {
      level: 6,
      ask: 'Is it certain that it will rain in Accra next year?',
      steps: [
        'Certain means it must happen with no possibility otherwise.',
        'Rain is extremely likely, and not logically guaranteed.',
      ],
      answer: 'Not certain, though very likely indeed. '
        + 'Certain is a stronger word than people usually mean.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a run of one result makes the other one due.',
      why: 'The coin has no memory. '
        + 'This belief has cost people a great deal of money.',
    },
    {
      mistake: 'Using certain for something merely very likely.',
      why: 'Certain means it cannot be otherwise. '
        + 'Most things we are sure about are not certain.',
    },
    {
      mistake: 'Judging chance by how much you want it.',
      why: 'Wanting a result does not alter how many ways it can happen.',
    },
  ],

  extension:
    'Chance can be written as a fraction: '
    + 'one head out of two outcomes is a half. '
    + 'Writing it that way lets you compare chances precisely '
    + 'rather than arguing about whether something is likely, '
    + 'and that is where the JHS work begins.',

  questions: [
    {
      id: 'ch-1',
      ask: 'A bag has 9 red and 1 blue ball. Drawing red is:',
      kind: 'choice',
      options: ['Likely', 'Unlikely', 'Impossible'],
      answer: 'Likely',
      teach: 'Nine of the ten possible draws give red.',
      level: 5,
    },
    {
      id: 'ch-2',
      ask: 'A coin lands heads five times. Is tails now more likely?',
      kind: 'choice',
      options: ['No', 'Yes'],
      answer: 'No',
      teach: 'The coin has no memory. '
        + 'Every toss is a fresh even chance.',
      level: 6,
    },
    {
      id: 'ch-3',
      ask: 'What does certain mean?',
      kind: 'choice',
      options: [
        'It cannot be otherwise',
        'It is very likely',
        'It usually happens',
      ],
      answer: 'It cannot be otherwise',
      teach: 'It is a stronger word than people usually mean. '
        + 'Most things we are sure of are merely very likely.',
      level: 6,
    },
  ],
})

/* ── taking part in a discussion ──────────────────────────────────────────── */

teach({
  topicId: 'discussion',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Give your view with a reason. '
      + 'Listen to the other person properly before answering. '
      + 'Disagree with the point, not with the person.',
    method: [
      'State your view and give one reason.',
      'Listen to the reply all the way through.',
      'Answer their reason, not their character.',
    ],
  },

  idea:
    'In a discussion people give their views and respond to each other. '
    + 'A view without a reason is just a preference. '
    + 'The useful part is always the reason.',

  mechanism:
    'There is one habit that separates a discussion from an argument, '
    + 'and it is this: respond to what the other person actually said. '
    + 'Most arguments go wrong because each side answers a version of the '
    + 'other that is easier to beat. '
    + 'The test is whether you could state their view well enough '
    + 'that they would agree you had got it right. '
    + 'If you can, you are discussing. '
    + 'If you cannot, you are arguing with somebody who is not in the room.',

  recap:
    'You can give a short talk with points and reasons. '
    + 'A discussion is that, interrupted, and with somebody answering back.',

  method: [
    'State your view in one sentence.',
    'Give one reason for it.',
    'Then stop and listen.',
    'Before replying, say their point back in your own words.',
    'Answer the reason they gave, not the one you wish they had given.',
    'Say when they have made a good point. It costs nothing.',
    'Disagree with what was said, never with the person who said it.',
  ],

  worked: [
    {
      level: 5,
      ask: 'What should always come with your view?',
      steps: [
        'A view alone cannot be discussed.',
      ],
      answer: 'A reason.',
    },
    {
      level: 6,
      ask: 'How do you check you understood somebody before replying?',
      steps: [
        'Say their point back in your own words.',
        'Ask whether you got it right.',
      ],
      answer: 'Restate their point and see if they agree that is what they '
        + 'meant.',
    },
    {
      level: 6,
      ask: 'Somebody makes a point you cannot answer. What should you do?',
      steps: [
        'Pretending otherwise is obvious to everybody.',
        'Saying so is what makes a discussion worth having.',
      ],
      answer: 'Say it is a good point. '
        + 'You can still disagree overall, and you have kept your credit.',
    },
  ],

  traps: [
    {
      mistake: 'Answering a weaker version of what was said.',
      why: 'It feels like winning and convinces nobody who was listening.',
    },
    {
      mistake: 'Attacking the person instead of the point.',
      why: 'It ends the discussion and tells everybody you had no answer.',
    },
    {
      mistake: 'Planning your reply instead of listening.',
      why: 'You will answer what you expected rather than what was said.',
    },
  ],

  extension:
    'The strongest thing you can do in a discussion '
    + 'is state the other side’s case better than they did '
    + 'and then explain why you still disagree. '
    + 'Nobody can accuse you of misunderstanding, '
    + 'and everybody listening knows you have actually thought about it.',

  questions: [
    {
      id: 'ds-1',
      ask: 'What must go with your view in a discussion?',
      kind: 'choice',
      options: ['A reason', 'A loud voice', 'An example from a book'],
      answer: 'A reason',
      teach: 'A view with no reason cannot be discussed, only repeated.',
      level: 5,
    },
    {
      id: 'ds-2',
      ask: 'How can you tell you understood somebody?',
      kind: 'choice',
      options: [
        'You can state their point so they agree you got it right',
        'You disagree with it',
        'You remember their words',
      ],
      answer: 'You can state their point so they agree you got it right',
      teach: 'That is the test. '
        + 'If you cannot, you are arguing with somebody who is not there.',
      level: 6,
    },
    {
      id: 'ds-3',
      ask: 'Somebody makes a point you cannot answer. What is best?',
      kind: 'choice',
      options: [
        'Say it is a good point',
        'Change the subject',
        'Say they are wrong anyway',
      ],
      answer: 'Say it is a good point',
      teach: 'Everybody listening already noticed. '
        + 'Admitting it keeps your credit and you can still disagree overall.',
      level: 6,
    },
  ],
})

/* ── summarising ──────────────────────────────────────────────────────────── */

teach({
  topicId: 'summarise-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A summary says the same thing in far fewer words. '
      + 'Keep what the passage was about. '
      + 'Cut examples, repetition and detail.',
    method: [
      'Read it all, then find the main idea of each paragraph.',
      'Write those in your own words.',
      'Cut examples and repetition, keep the point.',
    ],
  },

  idea:
    'A summary says what a passage said, in far fewer words. '
    + 'It keeps what mattered and drops the rest: '
    + 'examples, repetition, description and detail.',

  mechanism:
    'Deciding what to cut is the whole skill, '
    + 'and there is a test for it. '
    + 'Remove something and ask whether the passage still means the same. '
    + 'If it does, it was detail. '
    + 'An example usually illustrates a point that is stated elsewhere, '
    + 'so the example goes and the point stays. '
    + 'The other rule is to use your own words, '
    + 'because copying sentences is the fastest way to end up with a '
    + 'summary that is half the original and summarises nothing.',

  recap:
    'You can find the main idea of a passage and of each paragraph. '
    + 'A summary is those main ideas, written out in order.',

  method: [
    'Read the whole passage first.',
    'Find the main idea of each paragraph and note it in a few words.',
    'Put your notes aside and write from them, not from the passage.',
    'Cut every example.',
    'Cut anything said twice.',
    'Read your summary. Does somebody who has not read the original '
      + 'understand what it said?',
  ],

  worked: [
    {
      level: 5,
      ask: 'What should always be cut from a summary?',
      steps: [
        'Examples illustrate a point stated elsewhere.',
        'Repetition adds nothing.',
      ],
      answer: 'Examples and repetition.',
    },
    {
      level: 6,
      ask: 'Why write from notes rather than from the passage?',
      steps: [
        'With the passage in front of you, you copy its sentences.',
        'Copied sentences are long and are not yours.',
      ],
      answer: 'Because looking at the original makes you copy it '
        + 'instead of summarising it.',
    },
    {
      level: 6,
      ask: 'How do you know if something can be cut?',
      steps: [
        'Take it out.',
        'Ask whether the meaning changed.',
      ],
      answer: 'Remove it and see whether the passage still says the same '
        + 'thing. If it does, it was detail.',
    },
  ],

  traps: [
    {
      mistake: 'Copying whole sentences from the passage.',
      why: 'That is shortening, not summarising, '
        + 'and it is usually obvious.',
    },
    {
      mistake: 'Keeping the examples and cutting the point.',
      why: 'Examples are memorable, which is why they get kept. '
        + 'The point is what the passage was for.',
    },
    {
      mistake: 'Adding your own opinion.',
      why: 'A summary reports what was said. '
        + 'What you think about it is a different piece of writing.',
    },
  ],

  extension:
    'Being able to summarise is how you check you understood something. '
    + 'If you cannot say a chapter in four sentences, '
    + 'you probably read it without following it, '
    + 'and that is worth knowing before an examination rather than during '
    + 'one.',

  questions: [
    {
      id: 'sm-1',
      ask: 'What should be cut from a summary?',
      kind: 'choice',
      options: [
        'Examples and repetition',
        'The main ideas',
        'Anything difficult',
      ],
      answer: 'Examples and repetition',
      teach: 'An example illustrates a point stated elsewhere. '
        + 'Keep the point, cut the illustration.',
      level: 5,
    },
    {
      id: 'sm-2',
      ask: 'Why write a summary from notes rather than the original?',
      kind: 'choice',
      options: [
        'Looking at the original makes you copy it',
        'Notes are shorter',
        'It is faster',
      ],
      answer: 'Looking at the original makes you copy it',
      teach: 'Copied sentences produce a shortened passage, not a summary.',
      level: 6,
    },
    {
      id: 'sm-3',
      ask: 'Should a summary include your opinion?',
      kind: 'choice',
      options: ['No', 'Yes'],
      answer: 'No',
      teach: 'A summary reports what was said. '
        + 'Your view on it is a different piece of writing.',
      level: 6,
    },
  ],
})

/* ── describing and explaining in writing ─────────────────────────────────── */

teach({
  topicId: 'describe-and-explain',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A description helps somebody picture a thing. '
      + 'An explanation helps somebody do or understand a thing. '
      + 'They are different jobs and need different writing.',
    method: [
      'Describing: go in an order, and name what is distinctive.',
      'Explaining: steps in order, one action each, nothing assumed.',
      'Test it on somebody who does not already know.',
    ],
  },

  idea:
    'Describing and explaining are different jobs. '
    + 'A description lets the reader picture something. '
    + 'An explanation lets them do it or understand why it works. '
    + 'Writing that mixes the two usually does neither well.',

  mechanism:
    'They fail in different ways, which is the useful thing to know. '
    + 'A description fails when it has no order: '
    + 'the reader cannot assemble a picture from details arriving at random, '
    + 'so you go top to bottom, or near to far, and keep to it. '
    + 'An explanation fails when it assumes something, '
    + 'because the reader stops at the gap and cannot continue. '
    + 'So a description needs an order and an explanation needs completeness, '
    + 'and testing each one has a different question: '
    + 'can they picture it, and can they do it.',

  recap:
    'You can describe an object so somebody could pick it out, '
    + 'and you can write instructions in the right order. '
    + 'This is about knowing which one a task needs.',

  method: [
    'Decide which job you are doing before you write.',
    'Describing: choose an order and keep to it.',
    'Describing: name what makes this one different from similar things.',
    'Explaining: one action per step, in order.',
    'Explaining: assume nothing. List what is needed first.',
    'Test a description by asking somebody to draw it.',
    'Test an explanation by asking somebody to follow it.',
  ],

  worked: [
    {
      level: 5,
      ask: 'Is "how to make kenkey" a description or an explanation?',
      steps: [
        'It tells somebody how to do something.',
      ],
      answer: 'An explanation.',
    },
    {
      level: 6,
      ask: 'How do you test a description?',
      steps: [
        'A description is for picturing.',
        'So ask somebody to picture it.',
      ],
      answer: 'Ask somebody to draw it from your words, and see what they '
        + 'draw.',
    },
    {
      level: 6,
      ask: 'Your explanation works for you but confuses everybody else. Why?',
      steps: [
        'You know the task, so you fill in gaps without noticing.',
        'Your reader cannot.',
      ],
      answer: 'You assumed something. '
        + 'Watch somebody follow it and the gap appears exactly where they '
        + 'stop.',
    },
  ],

  traps: [
    {
      mistake: 'Describing details in no particular order.',
      why: 'The reader cannot build a picture from random pieces. '
        + 'Pick an order and keep it.',
    },
    {
      mistake: 'Assuming knowledge in an explanation.',
      why: 'The reader stops at the gap. '
        + 'Only somebody who does not know the task will find it for you.',
    },
    {
      mistake: 'Mixing the two in one paragraph.',
      why: 'They pull against each other. '
        + 'Describe, then explain, in separate paragraphs.',
    },
  ],

  extension:
    'Almost all technical writing is these two skills, '
    + 'and so is most of a science examination answer. '
    + '"Describe what happens" and "explain why it happens" '
    + 'are different questions, and answering the wrong one scores nothing '
    + 'however well it is written.',

  questions: [
    {
      id: 'de-1',
      ask: '"How to make kenkey" is:',
      kind: 'choice',
      options: ['An explanation', 'A description'],
      answer: 'An explanation',
      teach: 'It tells somebody how to do something, '
        + 'so it needs ordered, complete steps.',
      level: 5,
    },
    {
      id: 'de-2',
      ask: 'How do you test a description?',
      kind: 'choice',
      options: [
        'Ask somebody to draw it from your words',
        'Count the adjectives',
        'Read it aloud',
      ],
      answer: 'Ask somebody to draw it from your words',
      teach: 'A description is for picturing, so test whether they can '
        + 'picture it.',
      level: 6,
    },
    {
      id: 'de-3',
      ask: 'Why does your explanation confuse other people but not you?',
      kind: 'choice',
      options: [
        'You fill in gaps without noticing because you know the task',
        'They are not reading carefully',
        'It is too short',
      ],
      answer: 'You fill in gaps without noticing because you know the task',
      teach: 'That is why you test it on somebody who does not know it. '
        + 'They stop exactly at the gap.',
      level: 6,
    },
  ],
})
