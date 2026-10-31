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

  idea:
    'Place value does not stop at thousands. '
    + 'Each place is worth ten times the one to its right, for ever. '
    + 'When numbers get large or small, standard form writes them compactly: '
    + 'a number between 1 and 10, multiplied by a power of ten. '
    + '45,000 becomes 4.5 times 10 to the fourth.',

  mechanism:
    'Standard form exists because very large and very small numbers are hard '
    + 'to read and easy to miscount. '
    + 'Writing 0.00000045 invites somebody to lose a nought. '
    + 'Writing it as 4.5 times 10 to the minus seven does not, '
    + 'and it makes two numbers instantly comparable: '
    + 'you compare the powers first and only look at the digits if those tie. '
    + 'The rule for finding the power is not arbitrary. '
    + 'Moving the point one place left divides by ten, '
    + 'so you must multiply by ten once to put it back. '
    + 'The power is simply a record of how many times you did that.',

  recap:
    'You can read a number into the thousands and say what each digit is '
    + 'worth. '
    + 'This continues the same pattern and gives it a shorthand.',

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
      answer: '4.5 times 10 to the power 4.',
    },
    {
      level: 4,
      ask: 'Write 0.0032 in standard form.',
      steps: [
        'One non-zero digit before the point gives 3.2',
        'The point moved 3 places to the right.',
        'Moving right makes the power negative.',
      ],
      answer: '3.2 times 10 to the power negative 3.',
    },
    {
      level: 5,
      ask: 'Which is larger, 3.1 times 10 to the 5, or 9.8 times 10 to the 4?',
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
      why: '45 times 10 cubed is the right value and is not standard form. '
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

  idea:
    'Integers are the whole numbers together with their negatives. '
    + 'They measure things that can go below nothing: '
    + 'a debt, a temperature below freezing, a loss. '
    + 'The rules that cause trouble are the ones with two signs.',

  mechanism:
    'Everybody is told that two minuses make a plus and almost nobody is told '
    + 'why, which is exactly why it is misremembered under pressure. '
    + 'Think about money. '
    + 'If somebody takes away a debt of 5 cedis that you owed, '
    + 'you are 5 cedis better off. '
    + 'Taking away a negative has left you with more. '
    + 'That is what subtracting a negative means, and it is why it adds. '
    + 'For multiplication, 3 times negative 4 is three lots of a debt of 4, '
    + 'which is a debt of 12. '
    + 'And negative 3 times negative 4 is the opposite of that, '
    + 'because the extra minus reverses it. '
    + 'The number line says the same thing: a minus turns you round, '
    + 'and two turns put you facing the way you started.',

  recap:
    'You can add and subtract on a number line. '
    + 'Everything here is movement on that line, '
    + 'with left for negative and right for positive.',

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
    + 'then an answer of 812 or 81,270 is wrong and you know it in two '
    + 'seconds without checking a single step. '
    + 'This catches the mistakes that matter most: '
    + 'misplaced decimal points and dropped digits, '
    + 'which are large and silent.',

  recap:
    'You can round to the nearest ten, hundred or thousand. '
    + 'Significant figures round by how many digits you keep '
    + 'rather than by which place you stop at.',

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

  idea:
    'The four operations on fractions follow different rules, '
    + 'and that is what makes them confusing. '
    + 'Adding needs the bottoms to match. '
    + 'Multiplying does not. '
    + 'Dividing flips the second fraction over and then multiplies.',

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
    'You can find equivalent fractions and add fractions with different '
    + 'bottoms. '
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

  idea:
    'Substitution means replacing each letter with its value '
    + 'and then working the expression out. '
    + 'If a is 3 and b is 4, then 2a plus b is 2 times 3 plus 4, which is 10.',

  mechanism:
    'Two things cause almost every mistake here, and brackets fix both. '
    + 'The first is a negative value: '
    + 'substituting negative 2 into a squared without a bracket '
    + 'gives negative 4 instead of 4. '
    + 'The second is an implied multiplication: '
    + '2a means 2 times a, and writing 23 when a is 3 is a slip that looks '
    + 'plausible. '
    + 'Writing 2 times (3) makes both impossible. '
    + 'The habit costs a second and removes a whole class of error.',

  recap:
    'You can use a letter to stand for a number, '
    + 'and you know the order of operations. '
    + 'Substitution is both at once.',

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

  idea:
    'Simplifying means collecting terms that are alike. '
    + '3x plus 5x is 8x. '
    + 'But 3x plus 3x squared stays as it is, '
    + 'because those are not the same kind of thing.',

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
    'You can use letters for numbers and substitute values into them. '
    + 'This is about tidying an expression before you substitute anything.',

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
    'You can list the factors of a number and find the highest common factor '
    + 'of two small ones. '
    + 'This is the method that keeps working when the numbers get large.',

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
    'You can find a missing number by undoing, '
    + 'and you can substitute a value into an expression. '
    + 'Solving is the first, and checking is the second.',

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
      ask: 'Solve 2x plus 5 equals 17.',
      steps: [
        'The 5 was added last, so take 5 from both sides: 2x equals 12.',
        'Divide both sides by 2.',
      ],
      answer: 'x equals 6. Check: 2 times 6 plus 5 is 17.',
    },
    {
      level: 4,
      ask: 'Solve 5x minus 3 equals 2x plus 9.',
      steps: [
        'Take 2x from both sides: 3x minus 3 equals 9.',
        'Add 3 to both sides: 3x equals 12.',
        'Divide both sides by 3.',
      ],
      answer: 'x equals 4. Check: 20 minus 3 is 17, and 8 plus 9 is 17.',
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
      why: 'For 2x plus 5, the 5 went on last, so it comes off first. '
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

  idea:
    'A few angle facts solve most problems. '
    + 'Angles on a straight line add to 180 degrees. '
    + 'Angles at a point add to 360. '
    + 'Where a line crosses two parallel lines, '
    + 'corresponding and alternate angles are equal, '
    + 'and co-interior angles add to 180.',

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
    'You can recognise right, acute and obtuse angles '
    + 'and measure one with a protractor. '
    + 'These facts let you work angles out without measuring.',

  method: [
    'Mark what you know on the diagram.',
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
      ask: 'How do you know two lines in a diagram are parallel?',
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

  idea:
    'The angles inside a triangle always add to 180 degrees. '
    + 'For a polygon with n sides, they add to n minus 2, times 180. '
    + 'Triangles are named by their sides: equilateral, isosceles, scalene, '
    + 'or by their angles: acute, right, obtuse.',

  mechanism:
    'The polygon formula is not something to memorise. '
    + 'Take any polygon, pick one corner, and draw lines from it to every '
    + 'other corner. '
    + 'A quadrilateral splits into 2 triangles, a pentagon into 3, '
    + 'a hexagon into 4. '
    + 'Always two fewer than the number of sides. '
    + 'Each triangle contributes 180, so the total is (n minus 2) times 180. '
    + 'If you forget the formula you can rebuild it on the page in ten '
    + 'seconds, which is better than remembering it.',

  recap:
    'You know the angle facts for straight lines and parallel lines, '
    + 'and you can name shapes by their sides.',

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
      'Identify the shape, or split a compound one into shapes you know.',
      'Find the perpendicular height, not the slanted side.',
      'Apply the formula and keep the units square.',
    ],
  },

  idea:
    'Each shape has its own area formula. '
    + 'A triangle is half the base times the height. '
    + 'A parallelogram is base times height. '
    + 'A trapezium is half the sum of the two parallel sides, times the '
    + 'height. '
    + 'In all of them, height means the perpendicular height.',

  mechanism:
    'The commonest error in this whole topic is using the slanted side as '
    + 'the height, '
    + 'and it happens because the diagram usually gives you that length. '
    + 'Height means the straight up distance between the base and the top, '
    + 'at a right angle to the base. '
    + 'The slanted side is longer, so the answer comes out too large, '
    + 'and the working looks perfectly correct. '
    + 'The formulas are also connected rather than separate: '
    + 'a parallelogram is a rectangle with a triangle moved from one end to '
    + 'the other, which is why its area is still base times height, '
    + 'and a triangle is half a parallelogram.',

  recap:
    'You can find the area of a rectangle, '
    + 'and you know why the unit is square. '
    + 'These shapes are all built from that one.',

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
        + 'The diagram often gives the slant precisely to see whether you '
        + 'know the difference.',
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

  idea:
    'Data collection starts with a question, not with a form. '
    + 'Once you know what you are asking, you collect answers, '
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
    'You can collect answers with a tally and record them in a table. '
    + 'This adds the thinking that should come before the tally.',

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
