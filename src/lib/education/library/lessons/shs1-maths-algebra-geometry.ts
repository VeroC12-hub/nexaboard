/**
 * Stored lessons for SHS 1 Core Mathematics: algebra, functions and
 * geometry.
 *
 * Written at about grade 9 to 10, which is inside the SHS expectation of
 * 10 to 12.
 *
 * ── Why these six are taught together ──────────────────────────────────────
 *
 * The first three extend what a letter is allowed to do. In an expression a
 * letter stands for any number, so expanding and factorising are two ways of
 * writing the same thing and neither one is more correct. In an equation a
 * letter stands for the particular numbers that make a sentence true, so
 * every step has to keep that sentence true. In a function a letter stands
 * for an input, and the question becomes what comes out and what is allowed
 * in. A learner who never separates those three meanings will factorise an
 * equation and then forget to solve it, or solve an identity and get
 * nothing.
 *
 * The last three extend what counts as a reason. At JHS a geometry answer is
 * a number. At SHS the named fact beside the step is worth a mark of its
 * own, so these lessons say what has to be written down: the angle fact
 * quoted, the congruence case named, the ratio chosen before any button is
 * pressed.
 *
 * `angles-lines-shs` and `triangles-congruence` are written to meet.
 * Congruence is how an angle fact becomes a proof instead of an
 * observation, and `trig-ratios-shs` is what similarity turns into once the
 * ratios are given names.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── algebraic expressions ───────────────────────────────────────────────── */

teach({
  topicId: 'algebraic-expressions-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An expression is a recipe, not a question. '
      + 'Expanding and factorising are the same expression written two '
      + 'ways. '
      + 'Factorise by taking out the common factor first, every time. '
      + 'An algebraic fraction follows the rules of an ordinary fraction, '
      + 'and you may only cancel a factor, never a term.',
    method: [
      'Take out the highest common factor first.',
      'Then look for a pattern: difference of two squares, or a '
        + 'quadratic in three terms.',
      'For fractions, factorise the top and the bottom before cancelling.',
    ],
  },

  idea:
    'An algebraic expression is a rule for working out a number '
    + 'once you know what the letters stand for. '
    + 'It has no equals sign, so there is nothing to solve. '
    + 'The terms are the parts added or subtracted, '
    + 'and the factors are the parts multiplied. '
    + 'Expanding means writing a product as a sum: '
    + '3(x plus 2) becomes 3x plus 6. '
    + 'Factorising means writing a sum as a product, '
    + 'which is the same move backwards. '
    + 'Three patterns cover almost all of SHS 1. '
    + 'The common factor: 6x squared plus 9x is 3x(2x plus 3). '
    + 'The difference of two squares: '
    + 'a squared minus b squared is (a minus b)(a plus b). '
    + 'And the quadratic in three terms: '
    + 'x squared plus 7x plus 12 is (x plus 3)(x plus 4), '
    + 'because 3 and 4 multiply to 12 and add to 7. '
    + 'An algebraic fraction is one expression over another, '
    + 'and it obeys the rules of any fraction: '
    + 'a common denominator to add, '
    + 'and cancelling only what is a factor of the whole top '
    + 'and the whole bottom.',

  mechanism:
    'Almost every mark lost here is lost by cancelling a term. '
    + 'Take (x plus 3) over 3. '
    + 'The 3 on top is a term, not a factor, '
    + 'so it cannot be cancelled, and the fraction is already finished. '
    + 'Test it with a number. '
    + 'Put x equal to 6: the fraction is 9 over 3, which is 3. '
    + 'If the threes are cancelled the answer reads x, which is 6. '
    + 'One substitution shows the error, and it takes ten seconds. '
    + 'Now take (x squared plus 3x) over 3x. '
    + 'Factorise the top to x(x plus 3). '
    + 'There is a 3x on the bottom and no 3x factor on the top, '
    + 'so again nothing cancels straight away. '
    + 'But x over 3x does reduce, so the answer is (x plus 3) over 3. '
    + 'The rule behind both cases is one sentence: '
    + 'factorise first, cancel second, never the other way round. '
    + 'The other habit that pays is taking out the common factor '
    + 'before hunting for a pattern. '
    + '2x squared minus 18 looks like nothing. '
    + 'Take out the 2 and it is 2(x squared minus 9), '
    + 'which is 2(x minus 3)(x plus 3). '
    + 'Hunting for the pattern first wastes time '
    + 'and often ends in the claim that it does not factorise. '
    + 'Last, when you factorise a quadratic, '
    + 'always expand your answer back in your head. '
    + 'The two numbers must multiply to the constant '
    + 'and add to the middle coefficient, '
    + 'and if they do not, you have not finished.',

  recap:
    'You have collected like terms, '
    + 'multiplied out a single bracket, '
    + 'and taken out a common factor. '
    + 'This adds the two bracket patterns, '
    + 'and applies all of it to fractions.',

  method: [
    'Check there is no equals sign, so you know you are simplifying.',
    'Take out the highest common factor of every term.',
    'Look at what is left: two terms and both squares means difference '
      + 'of two squares.',
    'Three terms means look for two numbers that multiply to the last '
      + 'and add to the middle.',
    'For a fraction, factorise the top and the bottom fully.',
    'Cancel only a factor that appears in both, never a term.',
    'Expand your answer back to check it gives what you started with.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Factorise 12x squared minus 8x.',
      steps: [
        'The highest common factor of 12x squared and 8x is 4x.',
        '12x squared divided by 4x is 3x, and 8x divided by 4x is 8.',
      ],
      answer: '4x(3x minus 2).',
    },
    {
      level: 4,
      ask: 'Factorise 3x squared minus 27.',
      steps: [
        'Common factor 3 first: 3(x squared minus 9).',
        'x squared minus 9 is a difference of two squares.',
      ],
      answer: '3(x minus 3)(x plus 3).',
    },
    {
      level: 5,
      ask: 'Factorise x squared minus 2x minus 15.',
      steps: [
        'Two numbers that multiply to minus 15 and add to minus 2.',
        'Minus 5 and plus 3 do both.',
        'Check by expanding: x squared plus 3x minus 5x minus 15.',
      ],
      answer: '(x minus 5)(x plus 3).',
    },
    {
      level: 6,
      ask: 'Simplify (x squared minus 4) over (x squared plus 5x plus 6).',
      steps: [
        'Top is a difference of two squares: (x minus 2)(x plus 2).',
        'Bottom factorises to (x plus 2)(x plus 3).',
        '(x plus 2) is a factor of both, so it cancels.',
      ],
      answer: '(x minus 2) over (x plus 3).',
    },
  ],

  traps: [
    {
      mistake: 'Cancelling a term in a fraction instead of a factor.',
      why: 'Only a factor of the whole top and the whole bottom may go. '
        + 'Substitute a number and the error shows at once.',
    },
    {
      mistake: 'Hunting for a pattern before taking out the common factor.',
      why: '2x squared minus 18 looks unfactorisable until the 2 comes '
        + 'out.',
    },
    {
      mistake: 'Losing the sign on the second number in a quadratic.',
      why: 'The two numbers must add to the middle coefficient. '
        + 'Expand your brackets back and the sign error appears.',
    },
    {
      mistake: 'Trying to solve an expression.',
      why: 'There is no equals sign, so there is no answer to find. '
        + 'The question asks you to rewrite it, not to finish it.',
    },
  ],

  extension:
    'A quadratic whose x squared has a coefficient, '
    + 'such as 2x squared plus 7x plus 3, '
    + 'is split by multiplying the first and last numbers, '
    + 'here 2 times 3 which is 6, '
    + 'then finding two numbers that multiply to 6 and add to 7. '
    + 'They are 6 and 1, so write 2x squared plus 6x plus x plus 3 '
    + 'and factorise in pairs.',

  questions: [
    {
      id: 'alg-1',
      ask: 'Factorise 10x squared plus 15x.',
      kind: 'choice',
      options: [
        '5x(2x plus 3)',
        '5(2x squared plus 3x)',
        '5x(2x plus 15)',
      ],
      answer: '5x(2x plus 3)',
      teach: 'The highest common factor is 5x, not 5.',
      level: 3,
    },
    {
      id: 'alg-2',
      ask: 'Simplify (x plus 4) over 4.',
      kind: 'choice',
      options: [
        'It is already simplified',
        'x',
        'x plus 1',
      ],
      answer: 'It is already simplified',
      teach: 'The 4 on top is a term, not a factor, so nothing cancels. '
        + 'Put x equal to 4 and check.',
      level: 4,
    },
    {
      id: 'alg-3',
      ask: 'Factorise x squared minus 36.',
      kind: 'choice',
      options: [
        '(x minus 6)(x plus 6)',
        '(x minus 6) squared',
        '(x minus 18)(x plus 2)',
      ],
      answer: '(x minus 6)(x plus 6)',
      teach: 'A difference of two squares gives one minus and one plus.',
      level: 4,
    },
    {
      id: 'alg-4',
      ask: 'In x squared plus 9x plus 20, the two numbers in the brackets '
        + 'must:',
      kind: 'choice',
      options: [
        'multiply to 20 and add to 9',
        'add to 20 and multiply to 9',
        'multiply to 9 and add to 20',
      ],
      answer: 'multiply to 20 and add to 9',
      teach: 'They multiply to the constant and add to the middle '
        + 'coefficient. Here 4 and 5.',
      level: 5,
    },
  ],
})

/* ── linear and simultaneous equations ──────────────────────────────────── */

teach({
  topicId: 'linear-equations-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An equation is a true sentence about particular numbers. '
      + 'Whatever you do to one side you do to the other, '
      + 'so the sentence stays true. '
      + 'Two equations in two unknowns are two straight lines, '
      + 'and solving them is finding where the lines cross.',
    method: [
      'Clear brackets and fractions first.',
      'Collect the letters on one side and the numbers on the other.',
      'For two unknowns, eliminate one letter by adding or subtracting.',
      'Substitute your answer back into the other equation to check.',
    ],
  },

  idea:
    'An equation says two expressions are equal, '
    + 'and solving it means finding every value of the letter '
    + 'that makes that true. '
    + 'The one rule is balance: '
    + 'add, subtract, multiply or divide both sides by the same thing '
    + 'and the solution does not change. '
    + 'With two unknowns one equation is not enough, '
    + 'because 2x plus y equals 10 is true for many pairs. '
    + 'Two equations pin it down. '
    + 'There are two methods and both are examinable. '
    + 'Elimination: make the coefficients of one letter match, '
    + 'then add or subtract the equations so that letter disappears. '
    + 'Substitution: make one letter the subject of one equation '
    + 'and put that expression into the other. '
    + 'Graphically, each equation is a straight line, '
    + 'and the solution is the point where they cross, '
    + 'read off as x and y.',

  mechanism:
    'The error that costs the most marks is subtracting two equations '
    + 'and only subtracting part of the second one. '
    + 'Suppose 3x plus 2y equals 16 and 3x minus y equals 4. '
    + 'Subtracting gives 2y minus negative y, which is 3y, '
    + 'and 16 minus 4, which is 12, so y is 4. '
    + 'A learner in a hurry writes 2y minus y, gets y equal to 12, '
    + 'and loses the rest of the question. '
    + 'The guard is mechanical: '
    + 'write the subtraction out term by term, including the signs, '
    + 'before working anything out. '
    + 'When the signs of the matching letter are opposite, add; '
    + 'when they are the same, subtract. '
    + 'Saying that out loud before you move the pen prevents most of it. '
    + 'The second habit is substituting back into the other equation, '
    + 'not the one you used. '
    + 'If you put your answer back into the equation you solved, '
    + 'it will agree even when you are wrong, '
    + 'because that equation is where the mistake happened. '
    + 'Putting it into the one you have not used tests both numbers. '
    + 'Last, clear fractions before anything else '
    + 'by multiplying every term by the common denominator, '
    + 'every term including the ones that have no fraction in them. '
    + 'x over 2 plus 1 equals 4, multiplied by 2, '
    + 'is x plus 2 equals 8, not x plus 1 equals 8.',

  recap:
    'You have solved an equation with one unknown '
    + 'and plotted a straight line from a table of values. '
    + 'This puts the two together: '
    + 'two unknowns, solved by algebra and checked on a graph.',

  method: [
    'Multiply through by the common denominator to clear fractions.',
    'Expand any brackets.',
    'Collect the letters on one side, the numbers on the other.',
    'For two unknowns, match the coefficients of one letter.',
    'Add if its signs are opposite, subtract if they are the same.',
    'Write the subtraction out term by term before simplifying.',
    'Find the second unknown by substituting into either equation.',
    'Check by substituting both values into the equation you did not '
      + 'use.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Solve 5x minus 7 equals 2x plus 8.',
      steps: [
        'Subtract 2x from both sides: 3x minus 7 equals 8.',
        'Add 7 to both sides: 3x equals 15.',
        'Divide by 3.',
      ],
      answer: 'x equals 5.',
    },
    {
      level: 4,
      ask: 'Solve x over 3 plus 2 equals 5.',
      steps: [
        'Multiply every term by 3: x plus 6 equals 15.',
        'Subtract 6.',
      ],
      answer: 'x equals 9.',
    },
    {
      level: 5,
      ask: 'Solve 2x plus 3y equals 13 and 2x minus y equals 1.',
      steps: [
        'The x coefficients already match and the signs are the same, '
          + 'so subtract.',
        '3y minus negative y is 4y, and 13 minus 1 is 12, so y equals 3.',
        'Substitute into 2x minus y equals 1: 2x minus 3 equals 1.',
        'So 2x equals 4.',
      ],
      answer: 'x equals 2 and y equals 3. '
        + 'Check in the first equation: 4 plus 9 equals 13.',
    },
    {
      level: 6,
      ask: 'A trader buys 3 bags of rice and 2 tins of oil for 310 cedis, '
        + 'and 2 bags of rice and 5 tins of oil for 330 cedis. '
        + 'Find the price of each.',
      steps: [
        'Let r be the price of a bag of rice and t the price of a tin '
          + 'of oil.',
        '3r plus 2t equals 310, and 2r plus 5t equals 330.',
        'Multiply the first by 5 and the second by 2: '
          + '15r plus 10t equals 1550, and 4r plus 10t equals 660.',
        'Subtract: 11r equals 890, so r equals 80 and 10 over 11. '
          + 'That is not whole, so recheck the multipliers.',
        'Multiply the first by 2 and the second by 3: '
          + '6r plus 4t equals 620, and 6r plus 15t equals 990.',
        'Subtract: 11t equals 370, so t equals 30, and then r equals 80 '
          + 'with the arithmetic corrected.',
        'Substitute t equal to 30 into 3r plus 2t equals 310: '
          + '3r equals 250.',
      ],
      answer: 'Rice is 83 cedis and 33 pesewas to the nearest pesewa, '
        + 'and oil is 30 cedis. '
        + 'In an examination leave such an answer as a fraction, '
        + '250 over 3, unless the question asks for a rounding.',
    },
  ],

  traps: [
    {
      mistake: 'Subtracting only part of the second equation.',
      why: 'Every term changes sign, including the constant. '
        + 'Write the subtraction out term by term first.',
    },
    {
      mistake: 'Adding when the signs are the same.',
      why: 'Adding then doubles the letter you were trying to remove. '
        + 'Same signs subtract, opposite signs add.',
    },
    {
      mistake: 'Multiplying only the fractions when clearing '
        + 'denominators.',
      why: 'Balance means every term on both sides, '
        + 'including whole numbers.',
    },
    {
      mistake: 'Checking in the equation you just used.',
      why: 'It agrees even when the answer is wrong. '
        + 'Check in the other one.',
    },
  ],

  extension:
    'If the two lines are parallel they never cross, '
    + 'and the algebra says so: '
    + 'eliminating a letter leaves something false, such as 0 equals 5. '
    + 'If they are the same line, '
    + 'eliminating leaves 0 equals 0 and there are endless solutions. '
    + 'Both of those are answers, not failures, '
    + 'and saying which it is earns the mark.',

  questions: [
    {
      id: 'lin-1',
      ask: 'Solve 4x plus 5 equals 21.',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'Subtract 5 to get 4x equals 16, then divide by 4.',
      level: 3,
    },
    {
      id: 'lin-2',
      ask: 'To clear the fraction in x over 4 plus 3 equals 7, '
        + 'you multiply:',
      kind: 'choice',
      options: [
        'every term on both sides by 4',
        'only the fraction by 4',
        'only the left side by 4',
      ],
      answer: 'every term on both sides by 4',
      teach: 'Balance applies to every term, or the equation changes.',
      level: 4,
    },
    {
      id: 'lin-3',
      ask: 'In 2x plus y equals 9 and 2x minus y equals 1, you should:',
      kind: 'choice',
      options: [
        'add the equations, because the y signs are opposite',
        'subtract them, because the x coefficients match',
        'substitute, because neither can be eliminated',
      ],
      answer: 'add the equations, because the y signs are opposite',
      teach: 'Adding removes y at once and gives 4x equals 10. '
        + 'Subtracting would remove x, which also works.',
      level: 5,
    },
    {
      id: 'lin-4',
      ask: 'Two lines drawn from two equations do not cross. '
        + 'This means:',
      kind: 'choice',
      options: [
        'there is no solution',
        'the solution is zero',
        'you drew them wrongly',
      ],
      answer: 'there is no solution',
      teach: 'Parallel lines mean no pair of values satisfies both. '
        + 'The algebra would leave something false.',
      level: 6,
    },
  ],
})

/* ── relations and functions ─────────────────────────────────────────────── */

teach({
  topicId: 'functions-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A relation pairs members of one set with members of another. '
      + 'A function is a relation where each input has exactly one '
      + 'output. '
      + 'The domain is what you are allowed to put in, '
      + 'the range is what comes out, '
      + 'and fg(x) means do g first.',
    method: [
      'To evaluate, replace the letter everywhere it appears.',
      'For a composite, work from the inside out.',
      'For a domain, exclude anything that divides by zero or takes the '
        + 'square root of a negative.',
    ],
  },

  idea:
    'A relation is any rule pairing members of one set with another. '
    + 'A function is a relation with one extra condition: '
    + 'every allowed input gives exactly one output. '
    + 'So a rule that sends 4 to both 2 and negative 2 '
    + 'is a relation but not a function. '
    + 'The set of allowed inputs is the domain. '
    + 'The set of outputs that actually occur is the range. '
    + 'f(x) is not f times x; it is the output of f when the input is x. '
    + 'To evaluate, replace x wherever it stands. '
    + 'If f(x) equals 2x plus 1 then f(3) is 7, '
    + 'and f(a plus 1) is 2(a plus 1) plus 1, which is 2a plus 3. '
    + 'A composite function applies two rules one after the other. '
    + 'fg(x) means put x into g, then put the result into f, '
    + 'so the one written nearer the x happens first.',

  mechanism:
    'Two things in this topic are routinely got the wrong way round, '
    + 'and both are worth marks on their own. '
    + 'The first is the order of a composite. '
    + 'fg(x) means g first. '
    + 'The notation reads right to left because it is nested: '
    + 'fg(x) is f(g(x)), '
    + 'and the brackets closest to x are worked out first, '
    + 'exactly as in arithmetic. '
    + 'Take f(x) equal to x squared and g(x) equal to x plus 3. '
    + 'Then fg(2) is f(5), which is 25, '
    + 'while gf(2) is g(4), which is 7. '
    + 'They are not the same number, '
    + 'and an examiner choosing the numbers will make sure of that. '
    + 'The second is the domain. '
    + 'A domain is not decoration; it is where the rule is allowed to '
    + 'work. '
    + 'For f(x) equal to 1 over (x minus 2), '
    + 'putting x equal to 2 asks for 1 divided by 0, '
    + 'which is not a number, '
    + 'so the domain is every real number except 2. '
    + 'For f(x) equal to the square root of (x minus 5), '
    + 'anything below 5 asks for the square root of a negative, '
    + 'so the domain is x greater than or equal to 5. '
    + 'The way to find a domain is therefore not to recall a rule '
    + 'but to ask what would break: '
    + 'a zero on the bottom, or a negative under a square root. '
    + 'Last, a mapping diagram settles the function question instantly. '
    + 'If any arrow leaves one input and reaches two outputs, '
    + 'it is not a function. '
    + 'Two inputs reaching the same output is perfectly allowed.',

  recap:
    'You have used a number machine, '
    + 'put values into a formula, '
    + 'and read values off a graph. '
    + 'This gives that the notation f(x), '
    + 'and asks which inputs the machine accepts.',

  method: [
    'Write down the rule and what the letter stands for.',
    'To evaluate, replace the letter everywhere, in brackets.',
    'Simplify only after the substitution is written down.',
    'For fg(x), do g first, then f.',
    'For a domain, exclude any input that divides by zero.',
    'Also exclude any input that puts a negative under a square root.',
    'For a range, think about what the rule can and cannot produce.',
  ],

  worked: [
    {
      level: 3,
      ask: 'f(x) equals 3x minus 4. Find f(5) and f(0).',
      steps: [
        'f(5) is 3 times 5 minus 4.',
        'f(0) is 3 times 0 minus 4.',
      ],
      answer: 'f(5) equals 11 and f(0) equals negative 4.',
    },
    {
      level: 4,
      ask: 'f(x) equals x squared plus 1. Find f(a minus 2).',
      steps: [
        'Replace x with (a minus 2), keeping the brackets.',
        '(a minus 2) squared is a squared minus 4a plus 4.',
        'Add 1.',
      ],
      answer: 'a squared minus 4a plus 5.',
    },
    {
      level: 5,
      ask: 'f(x) equals 2x plus 1 and g(x) equals x squared. '
        + 'Find fg(3) and gf(3).',
      steps: [
        'fg(3) means g first: g(3) is 9, then f(9) is 19.',
        'gf(3) means f first: f(3) is 7, then g(7) is 49.',
      ],
      answer: 'fg(3) equals 19 and gf(3) equals 49. '
        + 'The order matters.',
    },
    {
      level: 6,
      ask: 'State the domain of f(x) equals (x plus 1) over '
        + '(x squared minus 9).',
      steps: [
        'The bottom must not be zero.',
        'x squared minus 9 is zero when x is 3 or negative 3.',
      ],
      answer: 'Every real number except 3 and negative 3.',
    },
  ],

  traps: [
    {
      mistake: 'Taking fg(x) to mean f first.',
      why: 'fg(x) is f(g(x)), and the inner brackets come first. '
        + 'The function nearer the x acts first.',
    },
    {
      mistake: 'Reading f(x) as f multiplied by x.',
      why: 'It is the output of the rule f at the input x. '
        + 'Nothing is being multiplied.',
    },
    {
      mistake: 'Substituting without brackets.',
      why: 'For f(x) equal to x squared, f(a plus 1) is (a plus 1) '
        + 'squared, not a squared plus 1.',
    },
    {
      mistake: 'Giving a domain of all real numbers without checking.',
      why: 'Ask what would break. A zero denominator or a negative under '
        + 'a root rules values out.',
    },
  ],

  extension:
    'The inverse of a function undoes it, and is written f to the power '
    + 'negative 1. '
    + 'Find it by writing y equals f(x), '
    + 'swapping x and y, and making y the subject. '
    + 'Only a function where each output comes from one input '
    + 'has an inverse, '
    + 'which is why x squared has no inverse '
    + 'unless the domain is restricted to one side of zero.',

  questions: [
    {
      id: 'fun-1',
      ask: 'f(x) equals 4x plus 3. Find f(2).',
      kind: 'numeric',
      options: [],
      answer: '11',
      teach: 'Replace x with 2: 8 plus 3.',
      level: 3,
    },
    {
      id: 'fun-2',
      ask: 'A relation is a function when:',
      kind: 'choice',
      options: [
        'each input has exactly one output',
        'each output has exactly one input',
        'the inputs and outputs are numbers',
      ],
      answer: 'each input has exactly one output',
      teach: 'Two inputs may share an output. One input may not have two.',
      level: 4,
    },
    {
      id: 'fun-3',
      ask: 'f(x) equals x plus 5 and g(x) equals 2x. What is fg(4)?',
      kind: 'numeric',
      options: [],
      answer: '13',
      teach: 'g first: g(4) is 8. Then f(8) is 13.',
      level: 5,
    },
    {
      id: 'fun-4',
      ask: 'The domain of f(x) equals 1 over (x minus 7) excludes:',
      kind: 'choice',
      options: [
        '7',
        '0',
        'negative 7',
      ],
      answer: '7',
      teach: 'At x equal to 7 the bottom is zero, and division by zero '
        + 'is not defined.',
      level: 5,
    },
  ],
})

/* ── angles, lines and polygons ─────────────────────────────────────────── */

teach({
  topicId: 'angles-lines-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Angles on a straight line add to 180 degrees, '
      + 'angles at a point add to 360, '
      + 'and with parallel lines the corresponding and alternate angles '
      + 'are equal. '
      + 'The interior angles of a polygon with n sides add to '
      + '(n minus 2) times 180. '
      + 'At SHS the named reason beside each step is worth a mark.',
    method: [
      'Mark every angle you are told on the diagram.',
      'Work one step at a time and write the reason for each.',
      'For a polygon, use the exterior angles if the polygon is regular.',
    ],
  },

  idea:
    'Angles on a straight line add to 180 degrees. '
    + 'Angles at a point add to 360 degrees. '
    + 'Vertically opposite angles are equal. '
    + 'When a straight line crosses two parallel lines, '
    + 'corresponding angles are equal, '
    + 'alternate angles are equal, '
    + 'and co interior angles add to 180 degrees. '
    + 'For a polygon with n sides, '
    + 'the interior angles add to (n minus 2) times 180 degrees, '
    + 'because the polygon can be cut into n minus 2 triangles. '
    + 'The exterior angles of any polygon add to 360 degrees, '
    + 'however many sides it has. '
    + 'So in a regular polygon each exterior angle is 360 over n, '
    + 'and each interior angle is 180 minus that.',

  mechanism:
    'The marks in SHS geometry are not in the number, '
    + 'they are in the reason written next to it, '
    + 'and that is the real change from JHS. '
    + 'A working line reads: '
    + 'angle ABC equals 65 degrees, alternate angles, AB parallel to CD. '
    + 'The same number with no reason is routinely worth half. '
    + 'So name the fact and name the parallel lines it depends on. '
    + 'The second thing worth knowing is why the polygon formula is '
    + 'true, '
    + 'because then it never has to be remembered. '
    + 'Pick one corner of a hexagon and draw lines to the others. '
    + 'The hexagon falls into four triangles, '
    + 'and 6 minus 2 is 4, '
    + 'so the angles add to 4 times 180, which is 720. '
    + 'Any polygon splits the same way, '
    + 'always into two fewer triangles than it has sides. '
    + 'The exterior angle result has an even shorter argument. '
    + 'Walk once round the outside of the shape '
    + 'and you turn through each exterior angle in turn, '
    + 'ending facing the way you started, '
    + 'which is one full turn, 360 degrees, '
    + 'whatever the shape. '
    + 'Because of that, a regular polygon question is almost always '
    + 'quicker through the exterior angle. '
    + 'If each interior angle is 150, '
    + 'each exterior angle is 30, '
    + 'and n is 360 over 30, which is 12. '
    + 'Going through the interior sum instead '
    + 'means solving (n minus 2) times 180 equals 150n, '
    + 'which is the same answer with three more lines of algebra '
    + 'and three more chances to slip.',

  recap:
    'You have measured angles, used angles on a line and at a point, '
    + 'and found the angle sum of a triangle. '
    + 'This adds the parallel line facts '
    + 'and the polygon sums, '
    + 'and asks you to write the reason for every step.',

  method: [
    'Copy the diagram and mark on every angle you are given.',
    'Find one angle you can get in a single step.',
    'Write the angle, then the reason, then the lines it depends on.',
    'Use that angle to reach the next one, and repeat.',
    'For a regular polygon, go through the exterior angle, 360 over n.',
    'For an irregular polygon, use (n minus 2) times 180.',
    'Check the total: your angles must agree with that sum.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Two angles lie on a straight line. One is 118 degrees. '
        + 'Find the other.',
      steps: [
        'Angles on a straight line add to 180 degrees.',
        '180 minus 118.',
      ],
      answer: '62 degrees, angles on a straight line.',
    },
    {
      level: 4,
      ask: 'Find the sum of the interior angles of a nine sided polygon.',
      steps: [
        'n is 9, so the polygon splits into 7 triangles.',
        '(9 minus 2) times 180.',
      ],
      answer: '1260 degrees.',
    },
    {
      level: 5,
      ask: 'Each interior angle of a regular polygon is 144 degrees. '
        + 'How many sides has it?',
      steps: [
        'Each exterior angle is 180 minus 144, which is 36 degrees.',
        'The exterior angles add to 360 degrees.',
        'n is 360 divided by 36.',
      ],
      answer: '10 sides.',
    },
    {
      level: 6,
      ask: 'AB is parallel to CD. A line crosses both. '
        + 'The angle above the line at AB is 73 degrees. '
        + 'Find the co interior angle at CD, with reasons.',
      steps: [
        'The corresponding angle at CD is 73 degrees, '
          + 'corresponding angles, AB parallel to CD.',
        'The co interior angle is on a straight line with it.',
        '180 minus 73.',
      ],
      answer: '107 degrees, '
        + 'angles on a straight line, '
        + 'after corresponding angles with AB parallel to CD.',
    },
  ],

  traps: [
    {
      mistake: 'Giving the angle without a reason.',
      why: 'At SHS the reason carries its own mark. '
        + 'Name the fact and the parallel lines.',
    },
    {
      mistake: 'Calling angles corresponding when the lines are not '
        + 'parallel.',
      why: 'Every parallel line fact depends on the parallel lines. '
        + 'With no parallel lines there is no equality to use.',
    },
    {
      mistake: 'Using n times 180 for a polygon.',
      why: 'It splits into n minus 2 triangles, not n. '
        + 'A quadrilateral gives 360, not 720.',
    },
    {
      mistake: 'Taking an exterior angle to be 360 over n in any polygon.',
      why: 'That holds only when the polygon is regular, '
        + 'so the angles are equal. '
        + 'The sum is always 360.',
    },
  ],

  extension:
    'The same reasoning gives the angle properties of a circle: '
    + 'the angle at the centre is twice the angle at the circumference, '
    + 'and the angles in a semicircle are right angles. '
    + 'Those are proved from the isosceles triangles '
    + 'that the radii make, '
    + 'using exactly the angle facts in this lesson.',

  questions: [
    {
      id: 'ang-1',
      ask: 'Angles at a point add to:',
      kind: 'choice',
      options: [
        '360 degrees',
        '180 degrees',
        '90 degrees',
      ],
      answer: '360 degrees',
      teach: 'A full turn. On a straight line it is 180.',
      level: 3,
    },
    {
      id: 'ang-2',
      ask: 'The interior angles of a pentagon add to how many degrees?',
      kind: 'numeric',
      options: [],
      answer: '540',
      teach: '(5 minus 2) times 180.',
      level: 4,
    },
    {
      id: 'ang-3',
      ask: 'Each exterior angle of a regular polygon is 24 degrees. '
        + 'How many sides?',
      kind: 'numeric',
      options: [],
      answer: '15',
      teach: '360 divided by 24. The exterior angles always add to 360.',
      level: 5,
    },
    {
      id: 'ang-4',
      ask: 'In SHS geometry, writing the reason beside each step:',
      kind: 'choice',
      options: [
        'earns marks of its own',
        'is optional if the answer is right',
        'is only needed in proofs',
      ],
      answer: 'earns marks of its own',
      teach: 'The reason is part of the answer. Name the fact and the '
        + 'parallel lines.',
      level: 5,
    },
  ],
})

/* ── congruent and similar triangles ────────────────────────────────────── */

teach({
  topicId: 'triangles-congruence',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Congruent triangles are the same shape and the same size, '
      + 'and are proved by one of SSS, SAS, ASA, AAS or RHS. '
      + 'Similar triangles are the same shape at a different size, '
      + 'so their angles are equal and their sides are in one ratio. '
      + 'Name the case, and name the vertices in matching order.',
    method: [
      'List what you are given and what equal angles follow from the '
        + 'diagram.',
      'Match the vertices in the same order in both triangles.',
      'Name the case: SSS, SAS, ASA, AAS or RHS.',
      'For similarity, write the ratio with matching sides in matching '
        + 'places.',
    ],
  },

  idea:
    'Two triangles are congruent when one could be placed exactly on the '
    + 'other. '
    + 'Equal angles and equal sides, all of them. '
    + 'You never have to check all six. '
    + 'Any one of five sets is enough: '
    + 'SSS, three sides; '
    + 'SAS, two sides and the angle between them; '
    + 'ASA, two angles and the side between them; '
    + 'AAS, two angles and any other side; '
    + 'and RHS, a right angle, the hypotenuse and one other side. '
    + 'Two triangles are similar when their angles are equal, '
    + 'which makes their sides proportional: '
    + 'each side of one is the same number of times '
    + 'the matching side of the other. '
    + 'That number is the scale factor. '
    + 'Two equal angles are enough to prove similarity, '
    + 'because the third follows from the angle sum.',

  mechanism:
    'The whole of this topic turns on matching the vertices in order, '
    + 'and that is where the marks go. '
    + 'Writing triangle ABC is congruent to triangle PQR '
    + 'is a claim that A matches P, B matches Q and C matches R. '
    + 'Written in the wrong order the statement is false '
    + 'even when the triangles really are congruent, '
    + 'and every side you then pair off is the wrong pair. '
    + 'So before writing anything, '
    + 'find the matching parts and letter them deliberately: '
    + 'equal angles first, because they are easiest to see, '
    + 'then the sides opposite them. '
    + 'For similarity this matters even more, '
    + 'because the ratio has to be written with matching sides '
    + 'in matching places. '
    + 'If ABC and PQR are similar, '
    + 'then AB over PQ equals BC over QR equals AC over PR. '
    + 'Mixing one pair up, '
    + 'writing AB over QR in the middle of a correct chain, '
    + 'gives a number with no meaning. '
    + 'A practical guard is to check the scale factor is sensible: '
    + 'if the second triangle is clearly larger, '
    + 'every ratio of small over large must be less than 1, '
    + 'and all of them must give the same value. '
    + 'One ratio out of line means a pair has been mismatched. '
    + 'Last, know what is not a case. '
    + 'AAA proves similarity, never congruence, '
    + 'because the triangles may be different sizes. '
    + 'SSA is not a case either: '
    + 'two sides and a non included angle can give two different '
    + 'triangles. '
    + 'The one exception is a right angle, '
    + 'which is why RHS exists as a case of its own.',

  recap:
    'You have found angles in a triangle, '
    + 'used Pythagoras, '
    + 'and enlarged a shape by a scale factor. '
    + 'This asks you to prove two triangles are the same, '
    + 'or the same shape, '
    + 'and to say which rule you used.',

  method: [
    'Draw both triangles separately, the same way round.',
    'Mark every equal side and equal angle you are given.',
    'Add any angles that follow: vertically opposite, alternate, '
      + 'or a shared angle.',
    'Match the vertices and write the triangles in matching order.',
    'Name the case, SSS, SAS, ASA, AAS or RHS.',
    'For similarity, write the ratios with matching sides in matching '
      + 'places.',
    'Solve for the unknown length and check the scale factor is the '
      + 'same for every pair.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Two triangles have sides 5 cm, 7 cm and 9 cm. '
        + 'Are they congruent, and why?',
      steps: [
        'All three sides match.',
      ],
      answer: 'Yes, by SSS.',
    },
    {
      level: 4,
      ask: 'Triangles ABC and PQR have angle A equal to angle P, '
        + 'angle B equal to angle Q. Are they similar?',
      steps: [
        'Two angles equal means the third is too, by the angle sum.',
      ],
      answer: 'Yes, similar by AA. '
        + 'Not congruent, because the sizes may differ.',
    },
    {
      level: 5,
      ask: 'ABC and PQR are similar. AB is 6 cm, BC is 8 cm, '
        + 'and PQ is 9 cm. Find QR.',
      steps: [
        'Matching sides: AB with PQ, and BC with QR.',
        'AB over PQ equals BC over QR, so 6 over 9 equals 8 over QR.',
        'Cross multiply: 6 QR equals 72.',
      ],
      answer: 'QR equals 12 cm. '
        + 'Scale factor 9 over 6, which is 1.5, '
        + 'and 8 times 1.5 is 12, which checks.',
    },
    {
      level: 6,
      ask: 'A stick 1.5 m tall casts a shadow 2 m long. '
        + 'At the same time a tree casts a shadow 14 m long. '
        + 'Find the height of the tree, with reasons.',
      steps: [
        'The sun has the same elevation, '
          + 'so the two triangles have equal angles and are similar, '
          + 'by AA.',
        'Height over shadow is the same for both: '
          + '1.5 over 2 equals h over 14.',
        'h equals 1.5 times 14 divided by 2.',
      ],
      answer: 'The tree is 10.5 m tall.',
    },
  ],

  traps: [
    {
      mistake: 'Naming the vertices out of order.',
      why: 'ABC congruent to PQR claims A matches P. '
        + 'Out of order, every pair that follows is wrong.',
    },
    {
      mistake: 'Using AAA to claim congruence.',
      why: 'Equal angles fix the shape, not the size. '
        + 'AAA proves similarity only.',
    },
    {
      mistake: 'Treating two sides and any angle as SAS.',
      why: 'The angle must be between the two sides. '
        + 'Otherwise two different triangles are possible.',
    },
    {
      mistake: 'Writing a ratio with one pair mismatched.',
      why: 'Every ratio must be a matching pair, '
        + 'and all of them must give the same scale factor. '
        + 'One odd value means a mismatch.',
    },
  ],

  extension:
    'In similar figures the ratio of areas is the square of the scale '
    + 'factor, '
    + 'and the ratio of volumes is the cube. '
    + 'A model at one tenth the length has one hundredth the surface '
    + 'and one thousandth the volume, '
    + 'which is why a small cooking pot heats faster than a large one '
    + 'of the same shape.',

  questions: [
    {
      id: 'con-1',
      ask: 'Which set proves two triangles congruent?',
      kind: 'choice',
      options: [
        'Three equal sides',
        'Three equal angles',
        'Two equal sides only',
      ],
      answer: 'Three equal sides',
      teach: 'SSS. Three equal angles gives similarity, not congruence.',
      level: 3,
    },
    {
      id: 'con-2',
      ask: 'In SAS, the angle must be:',
      kind: 'choice',
      options: [
        'between the two sides',
        'opposite the longer side',
        'a right angle',
      ],
      answer: 'between the two sides',
      teach: 'Otherwise two different triangles fit the same '
        + 'measurements.',
      level: 4,
    },
    {
      id: 'con-3',
      ask: 'ABC and PQR are similar with AB 4 cm and PQ 10 cm. '
        + 'The scale factor from ABC to PQR is:',
      kind: 'choice',
      options: [
        '2.5',
        '0.4',
        '6',
      ],
      answer: '2.5',
      teach: '10 divided by 4. Going the other way it is 0.4.',
      level: 5,
    },
    {
      id: 'con-4',
      ask: 'Two similar triangles have scale factor 3. '
        + 'The ratio of their areas is:',
      kind: 'numeric',
      options: [],
      answer: '9',
      teach: 'Area scales by the square of the scale factor.',
      level: 6,
    },
  ],
})

/* ── trigonometric ratios ───────────────────────────────────────────────── */

teach({
  topicId: 'trig-ratios-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'In a right angled triangle, '
      + 'sine is opposite over hypotenuse, '
      + 'cosine is adjacent over hypotenuse, '
      + 'and tangent is opposite over adjacent. '
      + 'Label the sides from the angle you are using, '
      + 'then pick the ratio that holds the two sides in the question. '
      + 'The special angles 30, 45 and 60 degrees have exact values.',
    method: [
      'Mark the angle you are working from.',
      'Label hypotenuse, opposite and adjacent from that angle.',
      'Choose the ratio containing the side you know and the side you '
        + 'want.',
      'Write the equation before touching the calculator.',
    ],
  },

  idea:
    'In a right angled triangle the longest side, '
    + 'opposite the right angle, is the hypotenuse. '
    + 'From whichever acute angle you are using, '
    + 'the side facing it is the opposite '
    + 'and the remaining side is the adjacent. '
    + 'The three ratios are then: '
    + 'sine of the angle is opposite over hypotenuse, '
    + 'cosine is adjacent over hypotenuse, '
    + 'and tangent is opposite over adjacent. '
    + 'These work because all right angled triangles '
    + 'with the same acute angle are similar, '
    + 'so the ratio of two sides depends on the angle and nothing else. '
    + 'Three angles have exact values worth knowing: '
    + 'sine 30 is one half, '
    + 'cosine 60 is one half, '
    + 'tangent 45 is 1, '
    + 'sine 45 and cosine 45 are 1 over the square root of 2, '
    + 'and tangent 60 is the square root of 3. '
    + 'An angle of elevation is measured up from the horizontal, '
    + 'an angle of depression down from it.',

  mechanism:
    'The ratios are not properties of the sides, '
    + 'they are properties of the angle, '
    + 'and that is the sentence that makes the topic make sense. '
    + 'The side that is opposite depends entirely '
    + 'on which angle you are standing at. '
    + 'In the same triangle, '
    + 'the side opposite one acute angle is adjacent to the other, '
    + 'so relabelling is the first step of every question '
    + 'and the step most often skipped. '
    + 'Write the labels on the diagram. '
    + 'Then choose the ratio by what the question gives you, '
    + 'not by habit: '
    + 'if you know the opposite and want the hypotenuse, '
    + 'the only ratio that holds both is sine. '
    + 'Writing the equation down before using the calculator matters, '
    + 'because an examination gives method marks for '
    + 'sine 35 equals 4 over x '
    + 'even if the final number comes out wrong. '
    + 'Why the ratios depend only on the angle is worth seeing once. '
    + 'Draw a right angled triangle with a 30 degree angle, '
    + 'then another twice the size. '
    + 'Every side has doubled, '
    + 'so opposite over hypotenuse has not changed at all. '
    + 'They are similar triangles, '
    + 'and sine 30 is the name of that unchanging ratio. '
    + 'Two calculator habits cost real marks. '
    + 'First, the calculator must be in degrees, not radians; '
    + 'check it reads D before the examination starts, '
    + 'because sine 30 showing as 0.5 is right '
    + 'and showing as negative 0.988 means radians. '
    + 'Second, to find an angle from a ratio '
    + 'use the inverse, written sine to the power negative 1, '
    + 'not 1 over sine.',

  recap:
    'You have used Pythagoras to find a third side, '
    + 'and similar triangles to find a length from a ratio. '
    + 'This names the three ratios, '
    + 'so an angle and one side are enough to find any other side.',

  method: [
    'Draw the triangle and mark the right angle.',
    'Mark the angle you are using.',
    'Label the hypotenuse, then the opposite, then the adjacent.',
    'Decide which two sides the question involves.',
    'Choose the ratio containing both of them.',
    'Write the equation out in full before calculating.',
    'Check the calculator is in degrees.',
    'For an angle, use the inverse ratio, not the reciprocal.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A right angled triangle has an angle of 40 degrees '
        + 'and a hypotenuse of 10 cm. Find the opposite side.',
      steps: [
        'Opposite and hypotenuse means sine.',
        'sine 40 equals x over 10.',
        'x equals 10 times sine 40.',
      ],
      answer: '6.43 cm to two decimal places.',
    },
    {
      level: 4,
      ask: 'Find the angle in a right angled triangle '
        + 'whose opposite is 5 cm and adjacent is 12 cm.',
      steps: [
        'Opposite and adjacent means tangent.',
        'tangent of the angle equals 5 over 12.',
        'Use the inverse tangent of 0.4167.',
      ],
      answer: '22.6 degrees to one decimal place.',
    },
    {
      level: 5,
      ask: 'Without a calculator, find the exact value of '
        + 'tangent 60 times cosine 60.',
      steps: [
        'tangent 60 is the square root of 3.',
        'cosine 60 is one half.',
      ],
      answer: 'The square root of 3, over 2. '
        + 'That is also sine 60, which is a useful check.',
    },
    {
      level: 6,
      ask: 'A surveyor stands 45 m from the foot of a mast '
        + 'on level ground in Tamale '
        + 'and measures the angle of elevation of the top as 38 degrees. '
        + 'Her eye is 1.6 m above the ground. Find the height of the '
        + 'mast.',
      steps: [
        'The known side is adjacent, 45 m, '
          + 'and the wanted side is opposite, so use tangent.',
        'tangent 38 equals h over 45.',
        'h equals 45 times tangent 38, which is 35.2 m.',
        'That is the height above her eye, so add 1.6 m.',
      ],
      answer: '36.8 m to one decimal place. '
        + 'Forgetting the eye height is the common loss here.',
    },
  ],

  traps: [
    {
      mistake: 'Labelling the sides once and keeping the labels when the '
        + 'angle changes.',
      why: 'Opposite and adjacent are named from the angle in use. '
        + 'Switch angle and they swap.',
    },
    {
      mistake: 'Using 1 over sine to find an angle.',
      why: 'The inverse is sine to the power negative 1, '
        + 'which is a different button and a different meaning.',
    },
    {
      mistake: 'Leaving the calculator in radians.',
      why: 'Every answer is then wrong with no warning. '
        + 'Check sine 30 reads 0.5.',
    },
    {
      mistake: 'Forgetting the height of the observer.',
      why: 'The ratio gives the height above the eye. '
        + 'Add the eye height when the question gives it.',
    },
  ],

  extension:
    'For triangles with no right angle '
    + 'the sine rule and the cosine rule extend these ideas, '
    + 'and in SHS 2 the ratios are defined for any angle at all, '
    + 'using a circle of radius 1 rather than a triangle. '
    + 'That is where sine of 150 degrees comes from.',

  questions: [
    {
      id: 'trg-1',
      ask: 'Sine of an angle is:',
      kind: 'choice',
      options: [
        'opposite over hypotenuse',
        'adjacent over hypotenuse',
        'opposite over adjacent',
      ],
      answer: 'opposite over hypotenuse',
      teach: 'Adjacent over hypotenuse is cosine, '
        + 'opposite over adjacent is tangent.',
      level: 3,
    },
    {
      id: 'trg-2',
      ask: 'You know the adjacent side and want the hypotenuse. '
        + 'Use:',
      kind: 'choice',
      options: [
        'cosine',
        'sine',
        'tangent',
      ],
      answer: 'cosine',
      teach: 'Cosine is the only ratio holding both of those sides.',
      level: 4,
    },
    {
      id: 'trg-3',
      ask: 'What is tangent 45 degrees?',
      kind: 'numeric',
      options: [],
      answer: '1',
      teach: 'At 45 degrees the opposite and adjacent are equal.',
      level: 4,
    },
    {
      id: 'trg-4',
      ask: 'Your calculator gives sine 30 as negative 0.988. '
        + 'This means:',
      kind: 'choice',
      options: [
        'it is set to radians',
        'the angle is wrong',
        'sine 30 is negative',
      ],
      answer: 'it is set to radians',
      teach: 'In degrees sine 30 is exactly 0.5. Switch the mode to D.',
      level: 5,
    },
  ],
})
