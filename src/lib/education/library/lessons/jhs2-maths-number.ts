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

  idea:
    'In 2 to the power 5, the 2 is the base and the 5 is the index. '
    + 'It means 2 multiplied by itself 5 times. '
    + 'The laws are these. '
    + 'To multiply powers of the same base, add the indices. '
    + 'To divide them, subtract. '
    + 'To raise a power to another power, multiply the indices. '
    + 'Any number except 0, raised to the power 0, is 1. '
    + 'A negative index means the reciprocal: '
    + '2 to the power negative 3 is 1 over 2 to the power 3, which is one '
    + 'eighth.',

  mechanism:
    'There is nothing to memorise here, '
    + 'and the learners who memorise are the ones who get it wrong. '
    + 'Write the powers out and every law appears by itself. '
    + '2 cubed times 2 to the fourth is (2x2x2) times (2x2x2x2). '
    + 'Count the twos: there are seven. '
    + 'So you added the indices, and you did not have to be told to. '
    + 'Division is the same picture with cancelling. '
    + '2 to the fifth over 2 squared is (2x2x2x2x2) over (2x2), '
    + 'two cancel from each, and three are left. '
    + 'The two that confuse people are the ones you cannot write out, '
    + 'and both follow from division. '
    + 'Take 2 cubed over 2 cubed. '
    + 'That is 8 over 8, which is 1. '
    + 'But by the subtraction rule it is 2 to the power 0. '
    + 'So 2 to the power 0 has to be 1, '
    + 'or arithmetic would contradict itself. '
    + 'Now take 2 squared over 2 to the fifth. '
    + 'Cancelling leaves 1 over 2 cubed. '
    + 'By the rule it is 2 to the power negative 3. '
    + 'So a negative index must mean one over the positive one. '
    + 'Neither is a convention somebody chose. '
    + 'Both are forced.',

  recap:
    'You know that 3 squared means 3 times 3, '
    + 'and you can work out squares and cubes. '
    + 'This gives the rules for combining them, '
    + 'and extends them to 0 and to negative indices.',

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
      ask: 'Simplify 3 to the power 4 times 3 squared.',
      steps: [
        'Same base, and it is a multiplication.',
        'So add the indices: 4 + 2 = 6.',
      ],
      answer: '3 to the power 6, which is 729.',
    },
    {
      level: 4,
      ask: 'Simplify 5 to the power 7 divided by 5 to the power 7.',
      steps: [
        'Division, so subtract: 7 - 7 = 0.',
        'So the answer is 5 to the power 0.',
        'But anything divided by itself is 1.',
      ],
      answer: '1. This is why any number to the power 0 is 1.',
    },
    {
      level: 5,
      ask: 'Evaluate 2 to the power negative 4.',
      steps: [
        'A negative index means the reciprocal.',
        'Make the index positive: 2 to the power 4 is 16.',
        'Put it under 1.',
      ],
      answer: 'One sixteenth.',
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
    + '9 to the power one half is 3, '
    + 'because the half index, used twice, must give 9 by the power of a '
    + 'power rule. '
    + 'The same reasoning that forced the 0 and negative cases forces this '
    + 'one.',

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
      + '4300 is 4.3 times 10 to the power 3. '
      + '0.0043 is 4.3 times 10 to the power negative 3. '
      + 'The power counts how far the point moved.',
    method: [
      'Put the decimal point after the first non zero digit.',
      'Count how many places you moved it.',
      'Moving left gives a positive power, moving right a negative one.',
    ],
  },

  idea:
    'A number is in standard form when it is written as a number between '
    + '1 and 10, multiplied by a power of ten. '
    + 'So 4300 becomes 4.3 times 10 to the power 3, '
    + 'and 0.0043 becomes 4.3 times 10 to the power negative 3. '
    + 'To multiply two numbers in standard form, '
    + 'multiply the front parts and add the powers. '
    + 'To divide, divide the front parts and subtract the powers. '
    + 'If the front part comes out at 10 or more, move the point again and '
    + 'adjust the power.',

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
    'You can multiply and divide by 10, 100 and 1000, '
    + 'and you know this moves the decimal point. '
    + 'Standard form is that movement written down as a power.',

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
      answer: '5.2 times 10 to the power 4.',
    },
    {
      level: 4,
      ask: 'Write 0.00067 in standard form.',
      steps: [
        'First non zero digit is 6, so 6.7',
        'The point moved right four places.',
        'The number is less than 1, so the power is negative.',
      ],
      answer: '6.7 times 10 to the power negative 4.',
    },
    {
      level: 5,
      ask: 'Work out (4 times 10 to the 5) times (6 times 10 to the 3), '
        + 'in standard form.',
      steps: [
        'Multiply the fronts: 4 x 6 = 24.',
        'Add the powers: 5 + 3 = 8.',
        'So 24 times 10 to the 8, but 24 is not between 1 and 10.',
        'Move the point: 2.4, and add 1 to the power.',
      ],
      answer: '2.4 times 10 to the power 9.',
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
    + 'If one quantity is 10 to the 6 and another is 10 to the 9, '
    + 'the second is a thousand times the first, '
    + 'which you read off the powers without doing any arithmetic.',

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

  idea:
    'A base is how many units you gather before starting a new column. '
    + 'Base ten bundles by ten, so its columns are 1, 10, 100, 1000. '
    + 'Base two bundles by two, so its columns are 1, 2, 4, 8, 16. '
    + 'Base five bundles by five: 1, 5, 25, 125. '
    + 'A base only uses digits below itself, '
    + 'so base two uses 0 and 1 only, and base five uses 0 to 4. '
    + 'To change to base ten, multiply each digit by its column value and '
    + 'add. '
    + 'To change from base ten, divide by the base again and again, '
    + 'and read the remainders from the bottom up. '
    + 'Adding in base two is ordinary adding, '
    + 'except that 1 plus 1 is 10, which means carry one.',

  mechanism:
    'The reason base ten feels natural and base two feels strange '
    + 'is only that you learned one of them first. '
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
    + 'Once they are on the page the question is arithmetic you already '
    + 'know. '
    + 'Base two matters beyond the examination for one reason. '
    + 'A wire is either carrying current or it is not, '
    + 'which gives two states and no more, '
    + 'so a computer that stores anything at all must bundle by two. '
    + 'Every file on every machine is a number written in base two.',

  recap:
    'You know that in 342 the 3 means three hundreds. '
    + 'That is place value, and this topic changes only one thing: '
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
      ask: 'Convert 1011 in base two to base ten.',
      steps: [
        'Columns from the right: 1, 2, 4, 8.',
        'Digits: 1, 0, 1, 1 reading from the left.',
        '8 + 0 + 2 + 1.',
      ],
      answer: '11.',
    },
    {
      level: 4,
      ask: 'Convert 25 in base ten to base two.',
      steps: [
        '25 divided by 2 is 12 remainder 1.',
        '12 divided by 2 is 6 remainder 0.',
        '6 divided by 2 is 3 remainder 0.',
        '3 divided by 2 is 1 remainder 1.',
        '1 divided by 2 is 0 remainder 1.',
        'Read the remainders upwards.',
      ],
      answer: '11001.',
    },
    {
      level: 5,
      ask: 'Add 1101 and 1011 in base two.',
      steps: [
        'Right column: 1 + 1 = 0 carry 1.',
        'Next: 0 + 1 + carry 1 = 0 carry 1.',
        'Next: 1 + 0 + carry 1 = 0 carry 1.',
        'Next: 1 + 1 + carry 1 = 1 carry 1.',
        'Write the final carry.',
      ],
      answer: '11000. '
        + 'Check in base ten: 13 + 11 = 24, and 11000 is 16 + 8 = 24.',
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
        + 'Written down, the rest is arithmetic you already know.',
    },
  ],

  extension:
    'Base sixteen is called hexadecimal. '
    + 'It needs six extra digits, and uses A to F for ten to fifteen. '
    + 'One hexadecimal digit is exactly four binary digits. '
    + 'So it shortens a long binary number without changing it.',

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

  idea:
    'A percentage change compares the change to what you started with. '
    + 'The change divided by the original, multiplied by 100, '
    + 'gives the percentage. '
    + 'Going the other way, an increase of 20 per cent means multiplying by '
    + '1.2, '
    + 'because you keep the whole, which is 1, and add 0.2 of it. '
    + 'A decrease of 20 per cent means multiplying by 0.8. '
    + 'And if you know the amount after a change, '
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
    + '110 divided by 1.1 is exactly 100. '
    + 'And it is why a shop that raises a price by 20 per cent '
    + 'and later takes 20 per cent off is not back where it started.',

  recap:
    'You can find a percentage of an amount. '
    + 'This asks the reverse questions: '
    + 'what percentage is this change, '
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
        '10 divided by 40 is 0.25.',
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
        '80 x 1.15.',
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
        'Divide to undo: 90 divided by 0.75.',
      ],
      answer: '120 cedis. '
        + 'Check: 25 per cent of 120 is 30, and 120 - 30 = 90.',
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

  idea:
    'A ratio compares amounts of the same kind: 3 to 2. '
    + 'To share 200 in the ratio 3 to 2, '
    + 'add the parts to get 5 shares, '
    + 'divide 200 by 5 to get 40 for one share, '
    + 'then give 120 and 80. '
    + 'A rate compares amounts of different kinds, '
    + 'such as 12 cedis per kilo or 60 kilometres per hour. '
    + 'Two quantities are in direct proportion when doubling one doubles '
    + 'the other, '
    + 'so dividing one by the other always gives the same number. '
    + 'They are in inverse proportion when doubling one halves the other, '
    + 'so multiplying them always gives the same number.',

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
    + 'So 3 workers must take 8, because 3 times 8 is also 24.',

  recap:
    'You have shared amounts in a ratio in primary school. '
    + 'This adds rates, and the difference between two quantities growing '
    + 'together and one growing while the other falls.',

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
        '4 + 3 = 7 shares.',
        '350 divided by 7 = 50 for one share.',
        '4 shares is 200 and 3 shares is 150.',
      ],
      answer: '200 cedis and 150 cedis.',
    },
    {
      level: 4,
      ask: 'If 5 kilos of rice cost 60 cedis, what do 8 kilos cost?',
      steps: [
        'More rice costs more, so this is direct.',
        'One kilo costs 60 divided by 5, which is 12.',
        '8 kilos is 8 times 12.',
      ],
      answer: '96 cedis.',
    },
    {
      level: 5,
      ask: '6 workers build a wall in 10 days. '
        + 'How long would 4 workers take, at the same rate?',
      steps: [
        'Fewer workers means more days, so this is inverse.',
        'For inverse, the product stays the same: 6 x 10 = 60.',
        'So 4 x days = 60.',
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
      + 'Work the fixed number out by testing n equals 1.',
    method: [
      'Write the differences underneath.',
      'A constant difference d gives dn plus something.',
      'Put n equal to 1 to find the something.',
    ],
  },

  idea:
    'A sequence is a list of numbers made by a rule. '
    + 'The nth term is a formula that gives any term you ask for, '
    + 'without working through all the ones before it. '
    + 'If the difference between consecutive terms is always the same, '
    + 'the sequence is linear, '
    + 'and the nth term is that common difference times n, '
    + 'plus a fixed number that shifts the whole sequence. '
    + 'So 5, 8, 11, 14 has a difference of 3, '
    + 'making the nth term 3n plus 2.',

  mechanism:
    'Most learners find the nth term by guessing and checking, '
    + 'and there is a method that never fails, '
    + 'so it is worth seeing why it works. '
    + 'The sequence 3, 6, 9, 12 is just 3n. '
    + 'Term one is 3, term two is 6, and so on. '
    + 'Now look at 5, 8, 11, 14. '
    + 'The differences are also 3, so this sequence climbs at exactly the '
    + 'same rate, '
    + 'which means it has to be 3n with something added to every term. '
    + 'Compare them: 3n gives 3, 6, 9, 12, and ours gives 5, 8, 11, 14. '
    + 'Every term is 2 more. '
    + 'So the nth term is 3n + 2, '
    + 'and that is not a guess, it is a comparison. '
    + 'Shorter still: put n equal to 1 in dn and see how far off you are. '
    + 'This also tells you when the method does not apply. '
    + 'If the differences are not constant, '
    + 'the sequence is not linear and dn + c cannot describe it. '
    + 'Then look at the differences of the differences, '
    + 'or ask whether each term is multiplied rather than added to.',

  recap:
    'You can continue a pattern by spotting what is added each time. '
    + 'This turns that into a formula, '
    + 'so you can give the hundredth term without writing the first '
    + 'ninety nine.',

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
        'The common difference is 3, so start with 3n.',
        'When n is 1, 3n gives 3, but the term is 4.',
        'So add 1.',
      ],
      answer: '3n + 1. '
        + 'Check n = 4: 12 + 1 = 13.',
    },
    {
      level: 5,
      ask: 'Find the 50th term of 100, 96, 92, 88.',
      steps: [
        'The difference is negative 4, so start with -4n.',
        'When n is 1, -4n gives -4, but the term is 100.',
        'So add 104: the nth term is 104 - 4n.',
        'Put n = 50: 104 - 200.',
      ],
      answer: 'Negative 96.',
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
    + 'the sequence is quadratic and its nth term contains n squared. '
    + '1, 4, 9, 16 is the clearest case.',

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
      + 'For a pie chart, each category’s angle is its share of 360 '
      + 'degrees.',
    method: [
      'Choose the chart from the question: comparing, or showing shares.',
      'Label both axes and give the chart a title.',
      'For a pie chart, divide each amount by the total and multiply by '
        + '360.',
    ],
  },

  idea:
    'A bar chart has bars of equal width whose heights show the amounts, '
    + 'and it is used to compare separate categories. '
    + 'A pie chart is a circle divided into sectors, '
    + 'and it shows how one whole is split up. '
    + 'Each sector angle is the category divided by the total, '
    + 'multiplied by 360 degrees. '
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
    'You have drawn and read bar charts and pictograms before. '
    + 'This adds the pie chart, with the arithmetic for its angles, '
    + 'and the question of which chart suits which data.',

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
        'One quarter of 360.',
      ],
      answer: '90 degrees.',
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

  idea:
    'An average is one number standing for a list. '
    + 'The mean is the sum divided by how many there are. '
    + 'The median is the middle value once the list is in order, '
    + 'and with an even count it is the mean of the middle two. '
    + 'The mode is the value that appears most often, '
    + 'and a list can have more than one mode, or none. '
    + 'The range is not an average: it is the largest minus the smallest, '
    + 'and it describes the spread.',

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
    'You have found the mean of a small list before. '
    + 'This adds two other averages, '
    + 'and asks which of the three tells the truth about a particular set '
    + 'of data.',

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
        'Add them: 4 + 7 + 9 + 10 + 10 = 40.',
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
        'The mean is 6700 divided by 5, which is 1340.',
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
