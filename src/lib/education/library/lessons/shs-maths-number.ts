/**
 * Stored lessons for SHS Core Mathematics: number.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── What changes at SHS ────────────────────────────────────────────────────
 *
 * JHS mathematics asks for the answer. SHS asks for the answer and the
 * reason, and in the examination the reason carries marks of its own. So
 * every lesson here states what has to be written down, not only what has to
 * be worked out: the theorem quoted beside the step, the set notation rather
 * than a drawing alone, the law of indices named when it is used.
 *
 * The number topics in this file also share one quiet theme, which is worth
 * naming because it is the whole of why they are taught together. Each one
 * extends what counts as a number or as an operation. Surds admit numbers
 * that cannot be written as a fraction. Bases admit grouping by something
 * other than ten. Logarithms make the exponent the unknown. Modular
 * arithmetic admits an arithmetic that wraps round. In every case the rules
 * are not new rules; they are the old rules holding in a larger place, and
 * that is why they can be rebuilt rather than memorised.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── sets ────────────────────────────────────────────────────────────────── */

teach({
  topicId: 'sets-shs-t',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A set is a collection of distinct members. '
      + 'Union is everything in either. '
      + 'Intersection is what is in both. '
      + 'Complement is everything in the universal set that is not in it. '
      + 'For a word problem, draw the Venn diagram and fill the '
      + 'intersection FIRST.',
    method: [
      'Define the universal set and each set in words.',
      'Fill the intersection first, then work outwards.',
      'Check every region adds to the total.',
    ],
  },

  idea:
    'A set is a collection of distinct objects, called its members. '
    + 'The universal set holds everything under discussion. '
    + 'The union of A and B is everything in A or in B or in both. '
    + 'The intersection is everything in both. '
    + 'The complement of A is everything in the universal set not in A. '
    + 'A is a subset of B if every member of A is also in B. '
    + 'The number of members of A is written n(A). '
    + 'For two sets, '
    + 'n(A union B) equals n(A) plus n(B) minus n(A intersect B), '
    + 'because the members in both were counted twice.',

  mechanism:
    'Nearly every lost mark in this topic comes from filling a Venn '
    + 'diagram outwards instead of inwards, '
    + 'so the rule is: the intersection first, always. '
    + 'Suppose 30 pupils study Physics, 25 study Chemistry, '
    + 'and 12 study both. '
    + 'Write 12 in the overlap. '
    + 'Then Physics only is 30 minus 12, which is 18, '
    + 'and Chemistry only is 25 minus 12, which is 13. '
    + 'Writing 30 in the Physics circle first '
    + 'has already double counted the 12, '
    + 'and every number after it is wrong. '
    + 'The same double counting explains the union formula: '
    + 'adding n(A) and n(B) counts the overlap twice, '
    + 'so one copy is subtracted. '
    + 'That is not a formula to remember, it is a correction to make. '
    + 'The second habit worth building is defining the sets in words '
    + 'before touching the diagram. '
    + 'Let P be the set of pupils who study Physics. '
    + 'It takes one line and it decides what every region means, '
    + 'and in an examination it is often worth a mark by itself. '
    + 'Last, check by addition: '
    + 'all the regions plus the ones outside both circles '
    + 'must come to the universal set. '
    + 'If they do not, something is in two places.',

  recap:
    'You have sorted objects into groups and said why they belong '
    + 'together. '
    + 'This gives that notation, '
    + 'and asks you to count the members of combinations of groups.',

  method: [
    'Define the universal set in words.',
    'Define each set in words, with a letter.',
    'Draw the Venn diagram.',
    'Write the intersection in first.',
    'Subtract to find each region that belongs to one set only.',
    'Fill in anything outside all the sets.',
    'Add all the regions and check against the universal set.',
    'Answer the question asked, with its notation.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A = {1, 2, 3, 4} and B = {3, 4, 5}. '
        + 'Find A union B and A intersect B.',
      steps: [
        'Union: everything in either, listed once.',
        'Intersection: everything in both.',
      ],
      answer: 'A union B = {1, 2, 3, 4, 5}. '
        + 'A intersect B = {3, 4}.',
    },
    {
      level: 4,
      ask: 'In a class of 40, 30 study Physics, 25 study Chemistry, '
        + 'and every pupil studies at least one. How many study both?',
      steps: [
        'n(P union C) = 40, since everybody studies at least one.',
        'n(P) + n(C) = 55.',
        '55 - 40 = 15, which is the double counted overlap.',
      ],
      answer: '15 pupils study both.',
    },
    {
      level: 5,
      ask: 'In a group of 50, 28 like rice, 22 like yam, '
        + 'and 8 like neither. How many like both?',
      steps: [
        'Those liking at least one: 50 - 8 = 42.',
        'n(R) + n(Y) = 50.',
        'Overlap = 50 - 42 = 8.',
        'So rice only is 20 and yam only is 14.',
      ],
      answer: '8 like both. '
        + 'Check: 20 + 8 + 14 + 8 = 50.',
    },
  ],

  traps: [
    {
      mistake: 'Writing the whole set total in one circle.',
      why: 'The total includes the overlap. '
        + 'Fill the intersection first and subtract.',
    },
    {
      mistake: 'Forgetting the members outside all the sets.',
      why: 'They are in the universal set. '
        + 'The regions must add to the total.',
    },
    {
      mistake: 'Not defining the sets in words.',
      why: 'It costs one line and is often worth a mark, '
        + 'and it stops you misreading your own diagram.',
    },
    {
      mistake: 'Listing a repeated member twice in a union.',
      why: 'A set has distinct members. '
        + 'Each one appears once.',
    },
  ],

  extension:
    'With three sets the same rule applies and matters more: '
    + 'start with the region in all three, '
    + 'then the three pairwise overlaps, '
    + 'then the single regions. '
    + 'Filled in any other order it cannot be made consistent.',

  questions: [
    {
      id: 'set-1',
      ask: 'A intersect B contains:',
      kind: 'choice',
      options: [
        'members in both A and B',
        'members in A or B',
        'members in A only',
      ],
      answer: 'members in both A and B',
      teach: 'Union is in either; intersection is in both.',
      level: 3,
    },
    {
      id: 'set-2',
      ask: 'Which region of a Venn diagram do you fill first?',
      kind: 'choice',
      options: [
        'The intersection',
        'The larger set',
        'Outside both sets',
      ],
      answer: 'The intersection',
      teach: 'Otherwise the overlap is double counted and everything '
        + 'after is wrong.',
      level: 4,
    },
    {
      id: 'set-3',
      ask: 'Why is n(A intersect B) subtracted in the union formula?',
      kind: 'choice',
      options: [
        'Those members were counted twice',
        'They are not in the union',
        'To make the answer smaller',
      ],
      answer: 'Those members were counted twice',
      teach: 'Adding n(A) and n(B) counts the overlap in both totals.',
      level: 5,
    },
  ],
})

/* ── the real number system ────────────────────────────────────────────── */

teach({
  topicId: 'real-numbers',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Natural numbers are 1, 2, 3. '
      + 'Integers add zero and the negatives. '
      + 'A rational number can be written as one integer over another. '
      + 'An irrational number cannot. '
      + 'Together they are the real numbers, '
      + 'and each sits in one place on the line.',
    method: [
      'Test for rational by asking whether it can be written as a '
        + 'fraction.',
      'A decimal that terminates or recurs is rational.',
      'Each set contains the ones before it.',
    ],
  },

  idea:
    'The natural numbers are 1, 2, 3 and onwards. '
    + 'The whole numbers add zero. '
    + 'The integers add the negatives. '
    + 'A rational number is any number that can be written '
    + 'as one integer divided by another, with the second not zero. '
    + 'So every integer is rational, and so is 0.75, '
    + 'and so is 0.333 recurring, which is one third. '
    + 'An irrational number cannot be written that way: '
    + 'the square root of 2, and pi. '
    + 'Its decimal neither terminates nor recurs. '
    + 'The rationals and the irrationals together are the real numbers, '
    + 'and every real number has one place on the number line.',

  mechanism:
    'The test for rational is not whether the decimal looks tidy, '
    + 'and that is the misconception to clear. '
    + '0.333 recurring goes on forever and is exactly one third, '
    + 'so it is rational. '
    + 'The square root of 2 also goes on forever and is not, '
    + 'because its digits never settle into a repeating block. '
    + 'So the real test is: '
    + 'can it be written as one integer over another? '
    + 'A terminating decimal always can, '
    + 'because 0.75 is 75 over 100. '
    + 'A recurring decimal always can, '
    + 'and the method is worth seeing once. '
    + 'Let x be 0.333 recurring. '
    + 'Then 10x is 3.333 recurring. '
    + 'Subtract: 9x is exactly 3, so x is one third. '
    + 'The infinite tails cancelled because they were identical. '
    + 'That subtraction is why every recurring decimal is rational, '
    + 'and it is also why a non repeating infinite decimal is not: '
    + 'there is no multiplication that makes the tails match. '
    + 'The sets nest, which is the other thing examiners test. '
    + 'Every natural number is an integer, '
    + 'every integer is rational, '
    + 'and every rational is real. '
    + 'So 3 is a natural number AND an integer AND rational AND real, '
    + 'and a question asking you to classify it '
    + 'wants all of those, not the smallest one.',

  recap:
    'You have worked with whole numbers, negatives, fractions and '
    + 'decimals. '
    + 'This names the families they belong to '
    + 'and gives the test for the one new distinction.',

  method: [
    'Ask whether the number can be written as one integer over another.',
    'If it can, it is rational.',
    'A terminating or recurring decimal is rational.',
    'A non terminating, non recurring decimal is irrational.',
    'Remember the sets nest: a natural number is also an integer and '
      + 'rational.',
    'For a classification question, give every set it belongs to.',
    'To place a number on the line, estimate it as a decimal first.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Classify negative 7 as fully as you can.',
      steps: [
        'It is not natural, because naturals start at 1.',
        'It is an integer.',
        'It can be written as -7 over 1, so it is rational.',
      ],
      answer: 'An integer, rational, and real.',
    },
    {
      level: 4,
      ask: 'Is 0.25 recurring rational? Why?',
      steps: [
        'A recurring decimal can always be written as a fraction.',
        'So it is rational.',
      ],
      answer: 'Yes. Every recurring decimal is rational, '
        + 'because multiplying by a power of ten '
        + 'and subtracting cancels the repeating tail.',
    },
    {
      level: 5,
      ask: 'Both one third and the square root of 2 have infinite '
        + 'decimals. '
        + 'Why is one rational and the other not?',
      steps: [
        'One third repeats the same digit forever.',
        'Multiply by 10 and subtract, and the tails cancel exactly.',
        'The root of 2 never settles into a repeating block.',
        'So no multiplication makes the tails match.',
      ],
      answer: 'Because a repeating tail can be cancelled by multiplying '
        + 'and subtracting, giving a fraction. '
        + 'A tail that never repeats cannot be cancelled, '
        + 'so no fraction exists.',
    },
  ],

  traps: [
    {
      mistake: 'Calling every infinite decimal irrational.',
      why: 'A recurring decimal is rational. '
        + 'The test is whether the digits repeat.',
    },
    {
      mistake: 'Giving only one classification.',
      why: 'The sets nest. '
        + '3 is natural, an integer, rational and real, all at once.',
    },
    {
      mistake: 'Thinking the square root of every number is irrational.',
      why: 'The square root of 9 is 3. '
        + 'Only the roots that are not exact are irrational.',
    },
    {
      mistake: 'Treating pi as 22 over 7.',
      why: 'That is an approximation. '
        + 'Pi is irrational and no fraction equals it.',
    },
  ],

  extension:
    'Between any two rational numbers there is another rational number, '
    + 'and also an irrational one. '
    + 'So neither set has gaps you could point to, '
    + 'and yet there are strictly more irrationals than rationals, '
    + 'which is a result worth meeting later.',

  questions: [
    {
      id: 'rn-1',
      ask: 'Which of these is irrational?',
      kind: 'choice',
      options: [
        'The square root of 2',
        'Nought point three recurring',
        'Negative 4',
      ],
      answer: 'The square root of 2',
      teach: 'Its decimal never terminates and never repeats.',
      level: 3,
    },
    {
      id: 'rn-2',
      ask: 'A recurring decimal is:',
      kind: 'choice',
      options: ['Rational', 'Irrational', 'Neither'],
      answer: 'Rational',
      teach: 'Multiply by a power of ten and subtract: '
        + 'the tails cancel and a fraction is left.',
      level: 4,
    },
    {
      id: 'rn-3',
      ask: 'The number 5 belongs to which sets?',
      kind: 'choice',
      options: [
        'Natural, integer, rational and real',
        'Natural only',
        'Rational only',
      ],
      answer: 'Natural, integer, rational and real',
      teach: 'The sets nest, so it is in all of them.',
      level: 5,
    },
  ],
})

/* ── surds ──────────────────────────────────────────────────────────── */

teach({
  topicId: 'surds-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A surd is a root that cannot be worked out exactly. '
      + 'Simplify by taking out the largest square factor. '
      + 'Rationalise a denominator by multiplying top and bottom '
      + 'by the same thing: '
      + 'the surd itself, or the conjugate if there are two terms.',
    method: [
      'Find the largest perfect square factor and take its root out.',
      'Only like surds can be added.',
      'Rationalise by multiplying top and bottom by the same quantity.',
    ],
  },

  idea:
    'A surd is an irrational root, such as root 2 or root 3. '
    + 'To simplify, split the number into a perfect square times '
    + 'something else: '
    + 'root 50 is root 25 times root 2, which is 5 root 2. '
    + 'Surds multiply straightforwardly: '
    + 'root a times root b is root ab. '
    + 'They add only when they are alike: '
    + '2 root 3 plus 5 root 3 is 7 root 3, '
    + 'and root 2 plus root 3 cannot be combined at all. '
    + 'To rationalise a single surd denominator, '
    + 'multiply top and bottom by that surd. '
    + 'For a denominator with two terms, '
    + 'multiply by its conjugate, '
    + 'which is the same expression with the middle sign changed.',

  mechanism:
    'Two ideas carry this topic and both are checkable. '
    + 'First, simplifying is just extracting whatever square is hiding '
    + 'inside. '
    + 'Root 72 looks awkward until you notice 72 is 36 times 2, '
    + 'and 36 is a perfect square, so the answer is 6 root 2. '
    + 'Take out the LARGEST square, '
    + 'or you will have to simplify again: '
    + '72 as 4 times 18 gives 2 root 18, which is not finished. '
    + 'Second, rationalising works because of the difference of two '
    + 'squares. '
    + 'Multiply 3 plus root 2 by 3 minus root 2 '
    + 'and the cross terms cancel, leaving 9 minus 2, which is 7. '
    + 'The root has gone, '
    + 'because squaring a surd removes it '
    + 'and the conjugate is arranged so that only squares survive. '
    + 'That is why the conjugate is the right multiplier and nothing else '
    + 'is. '
    + 'And multiplying top and bottom by the same quantity '
    + 'does not change the value, '
    + 'because you have multiplied by one, '
    + 'which is the only reason any of this is allowed. '
    + 'Why bother at all is worth one sentence. '
    + 'An answer with a surd in the denominator is harder to compare '
    + 'and harder to evaluate by hand, '
    + 'and examinations ask for the rationalised form, '
    + 'so it is marked.',

  recap:
    'You know the laws of indices and the difference of two squares. '
    + 'Surds use both: '
    + 'a root is a power of one half, '
    + 'and rationalising is the difference of two squares put to work.',

  method: [
    'Look for the largest perfect square factor.',
    'Write the number as that square times the rest.',
    'Take the root of the square outside.',
    'Check the number left inside has no square factors.',
    'Add or subtract only like surds.',
    'To rationalise one term, multiply top and bottom by that surd.',
    'To rationalise two terms, multiply by the conjugate.',
    'Simplify the result and leave no surd in the denominator.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Simplify root 50.',
      steps: [
        '50 = 25 x 2, and 25 is a perfect square.',
        'Root 25 is 5.',
      ],
      answer: '5 root 2.',
    },
    {
      level: 4,
      ask: 'Rationalise 6 over root 3.',
      steps: [
        'Multiply top and bottom by root 3.',
        'Top: 6 root 3. Bottom: 3.',
        'Divide.',
      ],
      answer: '2 root 3.',
    },
    {
      level: 5,
      ask: 'Rationalise 1 over (3 plus root 2).',
      steps: [
        'The conjugate is 3 minus root 2.',
        'Multiply top and bottom by it.',
        'Bottom: 9 - 2 = 7, by the difference of two squares.',
      ],
      answer: '(3 minus root 2) over 7.',
    },
  ],

  traps: [
    {
      mistake: 'Taking out a square factor that is not the largest.',
      why: '2 root 18 is not finished. '
        + 'Use 36, not 4, for root 72.',
    },
    {
      mistake: 'Adding unlike surds.',
      why: 'Root 2 plus root 3 cannot be combined. '
        + 'Only like surds add.',
    },
    {
      mistake: 'Multiplying only the denominator when rationalising.',
      why: 'That changes the value. '
        + 'Multiply top and bottom by the same thing.',
    },
    {
      mistake: 'Using the same sign for the conjugate.',
      why: 'The middle sign must change, '
        + 'or the cross terms do not cancel.',
    },
  ],

  extension:
    'A root is a fractional index, '
    + 'so root 2 is 2 to the power one half, '
    + 'and every surd rule here is an index law in disguise. '
    + 'That is why root a times root b is root ab: '
    + 'the indices added.',

  questions: [
    {
      id: 'sd-1',
      ask: 'Simplify root 18.',
      kind: 'choice',
      options: ['3 root 2', '2 root 3', '9 root 2'],
      answer: '3 root 2',
      teach: '18 is 9 times 2, and the root of 9 is 3.',
      level: 3,
    },
    {
      id: 'sd-2',
      ask: 'To rationalise 1 over (2 plus root 5), multiply by:',
      kind: 'choice',
      options: [
        '2 minus root 5 over itself',
        '2 plus root 5 over itself',
        'root 5 over root 5',
      ],
      answer: '2 minus root 5 over itself',
      teach: 'The conjugate changes the middle sign, '
        + 'so the cross terms cancel.',
      level: 4,
    },
    {
      id: 'sd-3',
      ask: 'Why does multiplying top and bottom by the conjugate not '
        + 'change the value?',
      kind: 'choice',
      options: [
        'You have multiplied by one',
        'Surds can be removed freely',
        'The denominator is ignored',
      ],
      answer: 'You have multiplied by one',
      teach: 'The same quantity over itself is 1.',
      level: 5,
    },
  ],
})

/* ── number bases ──────────────────────────────────────────────── */

teach({
  topicId: 'number-bases-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The base says the size of the bundle, '
      + 'and the column values are powers of it. '
      + 'To base ten: multiply each digit by its column and add. '
      + 'From base ten: divide repeatedly and read the remainders '
      + 'upwards. '
      + 'Arithmetic works as usual, carrying at the base instead of ten.',
    method: [
      'Write the column values before anything else.',
      'Check no digit is as large as the base.',
      'Carry and borrow at the base, not at ten.',
    ],
  },

  idea:
    'In base n the column values are 1, n, n squared, n cubed, '
    + 'and the digits used are 0 up to n minus 1. '
    + 'To convert to base ten, '
    + 'multiply each digit by its column value and add. '
    + 'To convert from base ten, '
    + 'divide by the base repeatedly, '
    + 'and read the remainders from the last upwards. '
    + 'Addition, subtraction and multiplication are done as in base ten, '
    + 'except that you carry when a column reaches the base, '
    + 'and borrow the base rather than ten. '
    + 'An equation in an unknown base is solved '
    + 'by converting both sides to base ten '
    + 'and solving for the base.',

  mechanism:
    'The only thing that changes between bases is the size of the '
    + 'bundle, '
    + 'and everything else follows, '
    + 'so the first line of any question should be the column values. '
    + 'Once 1, 5, 25, 125 is written above a base five number, '
    + 'converting it is arithmetic you have done since primary school. '
    + 'Carrying is where errors happen, '
    + 'because the habit of carrying at ten is deep. '
    + 'In base five, 3 plus 4 is 7, '
    + 'which is one bundle of five and two over, '
    + 'so you write 2 and carry 1. '
    + 'Say it that way, in bundles, rather than trying to remember a '
    + 'rule. '
    + 'Borrowing is the same backwards: '
    + 'the 1 you borrow is worth five, not ten. '
    + 'There is one error the question itself will tell you about. '
    + 'A digit must be smaller than the base, '
    + 'so if a base five answer contains a 6, '
    + 'a carry was missed, '
    + 'and you have found the mistake without checking anything else. '
    + 'For an unknown base, '
    + 'the conversion gives you an equation, '
    + 'often a quadratic, '
    + 'and you discard any root that is not a sensible base: '
    + 'a base must be a positive integer greater than every digit used.',

  recap:
    'You converted between base ten and base two at JHS. '
    + 'This generalises to any base '
    + 'and adds arithmetic done inside a base.',

  method: [
    'Write the column values of the base above the digits.',
    'Check every digit is less than the base.',
    'To base ten: multiply by column values and add.',
    'From base ten: divide by the base repeatedly.',
    'Read the remainders from the last one upwards.',
    'When adding, carry as soon as a column reaches the base.',
    'When subtracting, the borrowed unit is worth the base.',
    'Check your answer by converting it back.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Convert 243 in base five to base ten.',
      steps: [
        'Columns: 25, 5, 1.',
        '2 x 25 = 50, 4 x 5 = 20, 3 x 1 = 3.',
      ],
      answer: '73.',
    },
    {
      level: 4,
      ask: 'Add 34 and 23 in base five.',
      steps: [
        'Units: 4 + 3 = 7, which is one five and two over.',
        'Write 2, carry 1.',
        'Fives: 3 + 2 + 1 = 6, which is one twenty five and one over.',
        'Write 1, carry 1.',
      ],
      answer: '112 in base five. '
        + 'Check: 19 + 13 = 32, and 112 base five is 25 + 5 + 2 = 32.',
    },
    {
      level: 5,
      ask: 'Find n if 24 in base n equals 14 in base ten.',
      steps: [
        '24 in base n is 2n + 4.',
        'So 2n + 4 = 14.',
        '2n = 10.',
        'Check n = 5 is bigger than every digit used.',
      ],
      answer: 'n = 5.',
    },
  ],

  traps: [
    {
      mistake: 'Carrying at ten instead of at the base.',
      why: 'In base five you carry at five. '
        + 'Think in bundles of the base.',
    },
    {
      mistake: 'Leaving a digit as large as the base in an answer.',
      why: 'Impossible. '
        + 'A 6 in a base five answer means a carry was missed.',
    },
    {
      mistake: 'Reading the remainders downwards.',
      why: 'The first remainder is the units column, so it goes last.',
    },
    {
      mistake: 'Accepting any root for an unknown base.',
      why: 'A base is a positive integer larger than every digit used.',
    },
  ],

  extension:
    'Hexadecimal, base sixteen, needs six extra digits and uses A to F. '
    + 'It is used because one hexadecimal digit is exactly four binary '
    + 'digits, '
    + 'so a long binary number shortens by a factor of four '
    + 'with no conversion arithmetic at all.',

  questions: [
    {
      id: 'nb-1',
      ask: 'In base seven, the column values are:',
      kind: 'choice',
      options: ['1, 7, 49', '1, 7, 14', '1, 10, 100'],
      answer: '1, 7, 49',
      teach: 'Each column is the base times the one to its right.',
      level: 3,
    },
    {
      id: 'nb-2',
      ask: 'Adding in base six, when do you carry?',
      kind: 'choice',
      options: [
        'When a column reaches six',
        'When a column reaches ten',
        'Never',
      ],
      answer: 'When a column reaches six',
      teach: 'One bundle of six, and the rest stays in the column.',
      level: 4,
    },
    {
      id: 'nb-3',
      ask: 'A base five answer contains a 5. What does that tell you?',
      kind: 'choice',
      options: [
        'A carry was missed',
        'The base was wrong',
        'Nothing',
      ],
      answer: 'A carry was missed',
      teach: 'Base five uses only the digits 0 to 4.',
      level: 5,
    },
  ],
})

/* ── ratio, proportion, rates and percentages ─────────────── */

teach({
  topicId: 'ratio-percent-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A ratio shares by parts: add the parts, find one share, '
      + 'multiply. '
      + 'Percentage change is always on the ORIGINAL. '
      + 'To reverse a change, divide by the multiplier. '
      + 'Simple interest is linear; compound interest multiplies each '
      + 'period.',
    method: [
      'Write down which amount the percentage is of.',
      'Use a multiplier for an increase or decrease, and divide to '
        + 'reverse it.',
      'For proportion, test whether doubling one doubles or halves the '
        + 'other.',
    ],
  },

  idea:
    'To share in a ratio, add the parts, '
    + 'divide the total by that to find one share, '
    + 'and multiply each part by it. '
    + 'A rate relates two different quantities, '
    + 'such as cedis per kilogram or kilometres per hour. '
    + 'Percentage change is the change divided by the original, '
    + 'times one hundred. '
    + 'An increase of r per cent is a multiplier of 1 plus r over 100, '
    + 'and a decrease is 1 minus that. '
    + 'To find the amount before a change, divide by the multiplier. '
    + 'Simple interest is principal times rate times time over 100. '
    + 'Compound interest multiplies by the same factor each period, '
    + 'so the amount is the principal times the multiplier to the power '
    + 'of the number of periods.',

  mechanism:
    'Every error in this topic is a percentage taken of the wrong '
    + 'amount, '
    + 'and every one of them is prevented by writing the base down first. '
    + 'The rule is fixed by what the percentage is for. '
    + 'Profit is a return on what was put in, so the base is the cost '
    + 'price. '
    + 'Discount reduces an advertised price, so the base is the marked '
    + 'price. '
    + 'A percentage change compares against where you started, '
    + 'so the base is the original. '
    + 'The multiplier method then makes reversal safe. '
    + 'An increase of 20 per cent is a multiplier of 1.2, '
    + 'so the original is the new amount divided by 1.2, '
    + 'and never the new amount reduced by 20 per cent, '
    + 'because that 20 per cent would be taken of a different number. '
    + 'The multiplier also explains compound interest in one line. '
    + 'Ten per cent for three years is multiplying by 1.1 three times, '
    + 'which is 1.331, not 1.3, '
    + 'and the difference is the interest earned on earlier interest. '
    + 'That is the whole distinction between simple and compound, '
    + 'and it is why the gap widens with time '
    + 'rather than staying proportional. '
    + 'For proportion, one test settles the method: '
    + 'double one quantity and see what the other does. '
    + 'Doubled means direct, so the quotient is constant. '
    + 'Halved means inverse, so the product is constant, '
    + 'and that gives you a free check on the answer.',

  recap:
    'You have shared in ratios and worked percentage changes at JHS. '
    + 'This adds the multiplier method, '
    + 'reversing a change, and compound interest.',

  method: [
    'For a share, add the parts and find the value of one share.',
    'Check the shares add back to the total.',
    'For a percentage, write down which amount it is of.',
    'For an increase, multiply by 1 plus the decimal.',
    'For a decrease, multiply by 1 minus the decimal.',
    'To reverse a change, divide by that multiplier.',
    'For simple interest, use principal times rate times time over 100.',
    'For compound interest, raise the multiplier to the number of '
      + 'periods.',
    'Keep the units and round money to two decimal places.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Share 480 cedis in the ratio 5 : 3.',
      steps: [
        '5 + 3 = 8 shares.',
        '480 / 8 = 60 per share.',
      ],
      answer: '300 cedis and 180 cedis. '
        + 'They add back to 480.',
    },
    {
      level: 4,
      ask: 'After a 15 per cent discount an article costs 255 cedis. '
        + 'Find the marked price.',
      steps: [
        'A 15 per cent decrease is a multiplier of 0.85.',
        'So 255 is 0.85 of the marked price.',
        'Divide: 255 / 0.85.',
      ],
      answer: '300 cedis. '
        + 'Check: 15 per cent of 300 is 45, and 300 - 45 = 255.',
    },
    {
      level: 5,
      ask: 'Find the compound interest on 2000 cedis at 10 per cent for '
        + '3 years, and compare it with simple interest.',
      steps: [
        'Multiplier 1.1, three times: 1.331.',
        'Amount = 2000 x 1.331 = 2662.',
        'Compound interest = 662.',
        'Simple interest = 2000 x 10 x 3 / 100 = 600.',
      ],
      answer: 'Compound 662 cedis, simple 600. '
        + 'The extra 62 is interest earned on earlier interest.',
    },
  ],

  traps: [
    {
      mistake: 'Taking the percentage of the new amount.',
      why: 'A percentage change is of the original. '
        + 'Write the base down first.',
    },
    {
      mistake: 'Reversing an increase by subtracting the same '
        + 'percentage.',
      why: 'The second percentage is of a larger number. '
        + 'Divide by the multiplier instead.',
    },
    {
      mistake: 'Treating three years at 10 per cent as 30 per cent '
        + 'compound.',
      why: 'It is 1.1 cubed, which is 33.1 per cent. '
        + 'Each year earns on more.',
    },
    {
      mistake: 'Using direct proportion on a workers and time problem.',
      why: 'More workers means less time. '
        + 'Test by doubling before choosing a method.',
    },
  ],

  extension:
    'Depreciation is compound interest with a multiplier below one, '
    + 'so a vehicle losing 15 per cent of its value a year '
    + 'is multiplied by 0.85 each year, '
    + 'and never reaches zero, which is why a residual value is quoted.',

  questions: [
    {
      id: 'rp-1',
      ask: 'Percentage change is calculated on:',
      kind: 'choice',
      options: ['The original amount', 'The new amount', 'The change'],
      answer: 'The original amount',
      teach: 'It compares against where you started.',
      level: 3,
    },
    {
      id: 'rp-2',
      ask: 'To find the price before a 25 per cent increase, you:',
      kind: 'choice',
      options: [
        'Divide by 1.25',
        'Subtract 25 per cent',
        'Multiply by 0.75',
      ],
      answer: 'Divide by 1.25',
      teach: 'Subtracting 25 per cent takes it of the wrong base.',
      level: 4,
    },
    {
      id: 'rp-3',
      ask: 'Why does compound interest exceed simple interest?',
      kind: 'choice',
      options: [
        'Each period earns on the interest already added',
        'The rate is higher',
        'More periods are counted',
      ],
      answer: 'Each period earns on the interest already added',
      teach: 'Which is why the gap widens with time.',
      level: 5,
    },
  ],
})

/* ── indices and logarithms ──────────────────────────────── */

teach({
  topicId: 'indices-logs-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A logarithm is the index. '
      + 'log base a of b equals c means a to the power c equals b. '
      + 'So every index law has a logarithm law behind it: '
      + 'multiplying adds the logs, dividing subtracts them, '
      + 'a power multiplies the log.',
    method: [
      'Rewrite any logarithm statement as an index statement.',
      'For an unknown exponent, take logs of both sides.',
      'Check the argument of a logarithm is positive.',
    ],
  },

  idea:
    'The index laws: '
    + 'multiplying powers of the same base adds the indices, '
    + 'dividing subtracts them, '
    + 'a power of a power multiplies them, '
    + 'the index 0 gives 1, '
    + 'a negative index gives the reciprocal, '
    + 'and a fractional index is a root. '
    + 'A logarithm answers the question "what index?". '
    + 'log base a of b equals c means exactly a to the power c equals b. '
    + 'The laws follow: '
    + 'log(xy) is log x plus log y, '
    + 'log(x over y) is log x minus log y, '
    + 'log(x to the n) is n log x, '
    + 'log of 1 is 0 in any base, '
    + 'and log base a of a is 1. '
    + 'The argument of a logarithm must be positive.',

  mechanism:
    'The sentence that makes this topic easy is that a logarithm IS an '
    + 'index. '
    + 'Write it out: log base 2 of 8 equals 3 '
    + 'says nothing more than 2 cubed equals 8. '
    + 'Two statements, one fact, '
    + 'and being able to swap between them solves most questions '
    + 'before any law is applied. '
    + 'Once that is clear, the laws stop being a second list to '
    + 'memorise. '
    + 'They are the index laws seen from the other side. '
    + 'Multiplying powers adds indices, '
    + 'so a logarithm of a product adds the logarithms. '
    + 'A power of a power multiplies indices, '
    + 'so a logarithm of a power multiplies the logarithm. '
    + 'If you forget one, '
    + 'write the corresponding index law and read it backwards. '
    + 'Logarithms were invented to do one thing, '
    + 'and knowing what it is tells you when to use them: '
    + 'they bring an exponent down where you can get at it. '
    + 'So when the unknown is in the exponent, '
    + 'as in 3 to the power x equals 20, '
    + 'no amount of algebra on the base will help, '
    + 'and taking logs of both sides turns it into '
    + 'x log 3 equals log 20, which is linear. '
    + 'That is the whole purpose, and it is the clue to look for. '
    + 'One restriction has a reason worth knowing. '
    + 'The argument must be positive, '
    + 'because no real power of a positive base is ever negative or '
    + 'zero, '
    + 'so log of a negative number does not exist. '
    + 'A solution producing one must be discarded, '
    + 'and discarding it is part of the answer.',

  recap:
    'You know the laws of indices, including zero, negative and '
    + 'fractional. '
    + 'A logarithm is the index itself, made the subject, '
    + 'so everything here follows from what you have.',

  method: [
    'Rewrite any log statement as an index statement, or the reverse.',
    'Use log of a product adds, a quotient subtracts, a power '
      + 'multiplies.',
    'When the unknown is an exponent, take logs of both sides.',
    'Bring the exponent down with the power law.',
    'Solve the resulting linear equation.',
    'Check the argument of every logarithm is positive.',
    'Discard any root that makes a log undefined.',
    'State the base when it is not ten.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Evaluate log base 3 of 81.',
      steps: [
        'Ask: 3 to what power is 81?',
        '3, 9, 27, 81.',
      ],
      answer: '4.',
    },
    {
      level: 4,
      ask: 'Simplify log 8 + log 5 - log 4, all base ten.',
      steps: [
        'Adding logs multiplies: log 40.',
        'Subtracting divides: log 10.',
        'log base 10 of 10 is 1.',
      ],
      answer: '1.',
    },
    {
      level: 5,
      ask: 'Solve 3 to the power x equals 20, to two decimal places.',
      steps: [
        'The unknown is in the exponent, so take logs.',
        'x log 3 = log 20.',
        'x = log 20 / log 3.',
      ],
      answer: 'About 2.73. '
        + 'Logarithms exist to bring an exponent down like this.',
    },
  ],

  traps: [
    {
      mistake: 'Writing log(x + y) as log x + log y.',
      why: 'Addition inside does not split. '
        + 'Only a product becomes a sum of logs.',
    },
    {
      mistake: 'Taking a logarithm of a negative number.',
      why: 'No real power of a positive base is negative. '
        + 'Discard that root.',
    },
    {
      mistake: 'Forgetting the base.',
      why: 'log base 2 of 8 is 3 and log base 10 of 8 is not. '
        + 'State the base.',
    },
    {
      mistake: 'Trying to solve an exponential equation without logs.',
      why: 'The unknown is in the exponent, '
        + 'and that is exactly what logarithms are for.',
    },
  ],

  extension:
    'Changing base uses log base a of b equals log b over log a '
    + 'in any base you like, '
    + 'which is how a calculator with only base ten and base e '
    + 'evaluates a logarithm in base 7.',

  questions: [
    {
      id: 'lg-1',
      ask: 'log base 2 of 32 is:',
      kind: 'choice',
      options: ['5', '4', '6'],
      answer: '5',
      teach: '2 to the power 5 is 32.',
      level: 3,
    },
    {
      id: 'lg-2',
      ask: 'log x + log y equals:',
      kind: 'choice',
      options: ['log(xy)', 'log(x + y)', 'xy log',
      ],
      answer: 'log(xy)',
      teach: 'Adding logs corresponds to multiplying the numbers.',
      level: 4,
    },
    {
      id: 'lg-3',
      ask: 'Why take logarithms of both sides of 5 to the power x = 60?',
      kind: 'choice',
      options: [
        'To bring the exponent down where it can be solved for',
        'To make the numbers smaller',
        'To remove the base',
      ],
      answer: 'To bring the exponent down where it can be solved for',
      teach: 'That is the purpose logarithms were invented for.',
      level: 5,
    },
  ],
})

/* ── modular arithmetic ────────────────────────────────── */

teach({
  topicId: 'modular-arithmetic',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'In modulo n, only the remainder on division by n matters. '
      + 'So the numbers wrap round, like the days of the week '
      + 'or the hours on a clock. '
      + 'Reduce at every step, and the arithmetic stays small.',
    method: [
      'Divide by the modulus and keep only the remainder.',
      'Reduce after every operation, not at the end.',
      'For a cycle problem, the modulus is the length of the cycle.',
    ],
  },

  idea:
    'Two numbers are congruent modulo n '
    + 'if they leave the same remainder on division by n. '
    + 'So 17 is congruent to 3 modulo 7, '
    + 'because both leave a remainder of 3. '
    + 'In modulo n the only values needed are 0 up to n minus 1, '
    + 'and every number reduces to one of them. '
    + 'Addition, subtraction and multiplication all work as usual, '
    + 'and the answer is then reduced. '
    + 'Negative numbers are reduced by adding the modulus '
    + 'until the result is in range, '
    + 'so negative 2 modulo 7 is 5.',

  mechanism:
    'Modular arithmetic looks abstract and it is a description of '
    + 'something everybody already does. '
    + 'If today is Thursday, what day is it in 100 days? '
    + 'Nobody counts 100 days. '
    + 'The week has 7 days, so you divide 100 by 7, '
    + 'get a remainder of 2, '
    + 'and move 2 days on to Saturday. '
    + 'That is arithmetic modulo 7, '
    + 'and the whole subject is the observation '
    + 'that when something repeats every n steps, '
    + 'only the remainder on division by n carries information. '
    + 'So the modulus in a real problem '
    + 'is the length of the cycle: '
    + '7 for days, 12 for months or clock hours, 24 for the hour of the '
    + 'day. '
    + 'The practical rule is to reduce at every step '
    + 'rather than at the end. '
    + 'To find 23 times 31 modulo 5, '
    + 'reduce first: 23 is 3 and 31 is 1, '
    + 'so the answer is 3 times 1, which is 3, '
    + 'and you never multiplied 23 by 31 at all. '
    + 'This works because congruent numbers can be swapped freely '
    + 'in addition and multiplication, '
    + 'and that is the property that makes the system useful. '
    + 'Negatives need one habit. '
    + 'A remainder is never negative, '
    + 'so add the modulus until you land in range, '
    + 'and check your answer is between 0 and n minus 1 '
    + 'before writing it down.',

  recap:
    'You can divide with a remainder, '
    + 'and you know the days of the week repeat every seven days. '
    + 'This is arithmetic that keeps only the remainder, '
    + 'which is exactly what a repeating cycle needs.',

  method: [
    'Identify the modulus: for a cycle, its length.',
    'Reduce every number to its remainder first.',
    'Add, subtract or multiply the reduced values.',
    'Reduce the result again.',
    'For a negative, add the modulus until it is in range.',
    'Check the answer lies between 0 and the modulus minus 1.',
    'For a cycle question, convert the answer back into days or hours.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Find 23 modulo 5.',
      steps: [
        '23 divided by 5 is 4 remainder 3.',
      ],
      answer: '3.',
    },
    {
      level: 4,
      ask: 'Today is Thursday. What day is it in 100 days?',
      steps: [
        'The cycle is 7 days, so work modulo 7.',
        '100 divided by 7 is 14 remainder 2.',
        'Move 2 days from Thursday.',
      ],
      answer: 'Saturday.',
    },
    {
      level: 5,
      ask: 'Find 23 x 31 modulo 5, without multiplying them.',
      steps: [
        '23 is congruent to 3 modulo 5.',
        '31 is congruent to 1 modulo 5.',
        'So the product is congruent to 3 x 1.',
      ],
      answer: '3. '
        + 'Reducing first is allowed because congruent numbers '
        + 'can be swapped in a product.',
    },
  ],

  traps: [
    {
      mistake: 'Leaving a negative answer.',
      why: 'A remainder is never negative. '
        + 'Add the modulus until it is in range.',
    },
    {
      mistake: 'Multiplying the large numbers before reducing.',
      why: 'Reduce first. '
        + 'The answer is the same and the arithmetic is small.',
    },
    {
      mistake: 'Giving an answer as large as the modulus.',
      why: 'Modulo 7 uses 0 to 6 only. '
        + 'A 7 means it was not reduced.',
    },
    {
      mistake: 'Dividing in modular arithmetic as usual.',
      why: 'Division does not always work. '
        + 'Stay with addition, subtraction and multiplication.',
    },
  ],

  extension:
    'Modular arithmetic is what makes a check digit work. '
    + 'The last digit of an account or barcode '
    + 'is chosen so that a weighted sum is 0 modulo some number, '
    + 'so a single mistyped digit breaks the condition '
    + 'and is detected before anything is processed.',

  questions: [
    {
      id: 'md-1',
      ask: '17 modulo 5 is:',
      kind: 'choice',
      options: ['2', '3', '12'],
      answer: '2',
      teach: '17 is three fives and two over.',
      level: 3,
    },
    {
      id: 'md-2',
      ask: 'For a problem about days of the week, the modulus is:',
      kind: 'choice',
      options: ['7', '12', '24'],
      answer: '7',
      teach: 'The modulus is the length of the cycle.',
      level: 4,
    },
    {
      id: 'md-3',
      ask: 'Why reduce the numbers before multiplying?',
      kind: 'choice',
      options: [
        'Congruent numbers can be swapped, and the arithmetic stays '
          + 'small',
        'The answer would otherwise be wrong',
        'Multiplication is not allowed',
      ],
      answer: 'Congruent numbers can be swapped, and the arithmetic stays '
        + 'small',
      teach: 'Same answer, much less work.',
      level: 5,
    },
  ],
})
