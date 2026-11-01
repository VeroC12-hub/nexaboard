/**
 * Stored lessons for SHS 1 Elective (Additional) Mathematics.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── What this subject is for ──────────────────────────────────────────────
 *
 * Elective Mathematics is taken alongside Core, not instead of it, and the
 * difference is not that the sums are harder. It is that Core asks for an
 * answer and Elective asks for a proof. A Core question says factorise.
 * An Elective question says show that x minus 2 is a factor, and the word
 * show means a stated theorem, applied, with the conclusion drawn. A
 * learner who can only compute will pass Core and fail Elective on the same
 * arithmetic.
 *
 * ── The thread through these seven topics ─────────────────────────────────
 *
 * Each one replaces a procedure with a reason that can be checked.
 * Polynomials give the remainder and factor theorems, so a factor can be
 * tested in one line instead of guessed. Indices, surds and logarithms turn
 * an unknown exponent into an ordinary unknown. Logic makes the word
 * therefore into something with a truth table. Functions and mappings say
 * exactly what a function is allowed to do, which is what makes an inverse
 * possible or impossible. The straight line turns geometry into algebra, so
 * a distance or an angle is computed rather than measured. Circular measure
 * replaces the degree with a unit that makes arc length a product rather
 * than a fraction of a circle. Descriptive statistics puts a single honest
 * number on a whole set of readings, and says what it hides.
 *
 * ── What has to be written down ───────────────────────────────────────────
 *
 * Every lesson here names the line that carries the mark: the theorem
 * quoted, the law of indices named, the substitution shown before it is
 * evaluated, the conclusion stated as a sentence. The marking scheme is
 * looking for those lines, and a correct final answer with no working is
 * worth one mark out of five.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── polynomials ─────────────────────────────────────────────────────────── */

teach({
  topicId: 'polynomials-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A polynomial is a sum of terms in powers of x with whole number '
      + 'powers. '
      + 'Divide one by another as you would divide numbers, by long '
      + 'division. '
      + 'The remainder theorem says the remainder on dividing f of x by '
      + 'x minus a is f of a. '
      + 'The factor theorem says x minus a is a factor exactly when f of a '
      + 'is zero.',
    method: [
      'To test a factor, substitute. Zero means it is a factor.',
      'To find a remainder, substitute. No division is needed.',
      'To factorise fully, find one root by trial, then divide out.',
      'Factorise the quotient to finish.',
    ],
  },

  idea:
    'A polynomial in x is a sum of terms, each a number times a whole '
    + 'number power of x. '
    + 'The degree is the highest power present. '
    + 'So 2 x cubed minus 5 x squared plus x minus 3 is a polynomial of '
    + 'degree 3, called a cubic. '
    + 'One polynomial can be divided by another by long division, '
    + 'exactly as 137 is divided by 6. '
    + 'The result is a quotient and a remainder, '
    + 'and the remainder has lower degree than the divisor. '
    + 'So dividing by x minus a leaves a remainder that is just a number. '
    + 'The remainder theorem says what that number is without dividing: '
    + 'the remainder on dividing f of x by x minus a is f of a. '
    + 'The factor theorem is the special case where the remainder is zero. '
    + 'It says that x minus a is a factor of f of x '
    + 'if and only if f of a equals zero. '
    + 'A value of a that makes f of a zero is called a root or a zero of the '
    + 'polynomial. '
    + 'Dividing by a x minus b uses f of b over a in the same way.',

  mechanism:
    'The identity that drives the whole topic is one line: '
    + 'f of x equals the quotient times the divisor, plus the remainder. '
    + 'Write it out for a divisor of x minus a. '
    + 'f of x equals Q of x times the bracket x minus a, plus R. '
    + 'Now put x equal to a. '
    + 'The bracket becomes zero, so the whole first term vanishes, '
    + 'whatever Q of x happens to be. '
    + 'What is left is f of a equals R. '
    + 'That is the remainder theorem, proved in two lines, '
    + 'and it is why you never have to divide to find a remainder. '
    + 'The factor theorem is the same line read once more. '
    + 'If R is zero then f of x equals Q of x times x minus a, '
    + 'which is exactly what it means for x minus a to be a factor. '
    + 'Hold that single identity and neither theorem has to be memorised. '
    + 'Now the places marks are lost. '
    + 'The first is the sign. '
    + 'For the factor x plus 2, the value to substitute is minus 2, not 2, '
    + 'because x plus 2 is x minus negative 2. '
    + 'Substituting 2 and getting a non-zero answer, '
    + 'then declaring that x plus 2 is not a factor, '
    + 'is the single most common error in the topic. '
    + 'Write the divisor as x minus something first, every time, '
    + 'and read the value off. '
    + 'The second is the divisor that is not monic. '
    + 'For 2 x minus 3 the value is 3 over 2, '
    + 'because 2 x minus 3 is zero when x is 1.5. '
    + 'Set the divisor to zero and solve: that always gives the right value. '
    + 'The third is a gap in the long division. '
    + 'Dividing x cubed plus 2 by x minus 1 '
    + 'fails for most learners because the x squared and x terms are '
    + 'missing. '
    + 'Write x cubed plus 0 x squared plus 0 x plus 2 before starting. '
    + 'The place values must line up, exactly as in ordinary long division, '
    + 'and a missing column is where the working goes wrong. '
    + 'What has to be written down is the theorem, named, '
    + 'before it is used. '
    + 'By the factor theorem, x minus 2 is a factor if f of 2 equals zero. '
    + 'Then the substitution, shown and not done in the head: '
    + 'f of 2 equals 8 minus 20 plus 2 plus 10. '
    + 'Then the value. '
    + 'Then the conclusion as a sentence: '
    + 'since f of 2 equals zero, x minus 2 is a factor. '
    + 'That is four marks for what one number could have expressed, '
    + 'and the four are the ones on offer. '
    + 'A question that says show that is asking for exactly this, '
    + 'and a bare yes scores nothing.',

  recap:
    'You have factorised quadratics by finding two numbers '
    + 'that multiply and add to the right values. '
    + 'This gives a method that works for a cubic too, '
    + 'where guessing a pair no longer helps.',

  method: [
    'Write the polynomial in descending powers, with zeros for any missing '
      + 'power.',
    'To find a remainder or test a factor, set the divisor to zero and solve '
      + 'for x.',
    'Substitute that value into f of x, showing the substitution.',
    'Zero means a factor; anything else is the remainder.',
    'Name the theorem you used and state the conclusion in words.',
    'To factorise a cubic, test the factors of the constant term until one '
      + 'gives zero.',
    'Divide the cubic by that factor to get a quadratic.',
    'Factorise the quadratic to finish, and check by expanding.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Find the remainder when f of x equals x cubed minus 4 x squared '
        + 'plus 2 x plus 5 is divided by x minus 1.',
      steps: [
        'Set the divisor to zero: x minus 1 equals 0, so x equals 1.',
        'By the remainder theorem the remainder is f of 1.',
        'f of 1 equals 1 minus 4 plus 2 plus 5.',
      ],
      answer: 'The remainder is 4. '
        + 'No division was needed.',
    },
    {
      level: 4,
      ask: 'Show that x plus 2 is a factor of '
        + 'f of x equals x cubed plus 3 x squared minus 4 x minus 12.',
      steps: [
        'Write x plus 2 as x minus negative 2, so the value is minus 2.',
        'By the factor theorem, x plus 2 is a factor if f of minus 2 is '
          + 'zero.',
        'f of minus 2 equals minus 8 plus 12 plus 8 minus 12.',
        'That is zero.',
      ],
      answer: 'f of minus 2 equals 0, '
        + 'so by the factor theorem x plus 2 is a factor of f of x. '
        + 'Substituting positive 2 would give 0, 12, minus 8, minus 12, '
        + 'summing to minus 8, and would lead to the wrong conclusion.',
    },
    {
      level: 4,
      ask: 'Factorise fully x cubed minus 6 x squared plus 11 x minus 6.',
      steps: [
        'The constant is minus 6, so try the factors of 6: 1, 2, 3, 6.',
        'f of 1 equals 1 minus 6 plus 11 minus 6, which is 0, '
          + 'so x minus 1 is a factor.',
        'Divide by x minus 1 to get x squared minus 5 x plus 6.',
        'Factorise that: x minus 2 times x minus 3.',
      ],
      answer: 'The factors are x minus 1, x minus 2 and x minus 3. '
        + 'Check by expanding: the constant term is minus 1 times minus 2 '
        + 'times minus 3, which is minus 6, as required.',
    },
    {
      level: 5,
      ask: 'When f of x equals 2 x cubed plus a x squared plus b x minus 6 '
        + 'is divided by x minus 1 the remainder is minus 3, '
        + 'and x plus 2 is a factor. '
        + 'Find a and b.',
      steps: [
        'By the remainder theorem, f of 1 equals minus 3.',
        'f of 1 equals 2 plus a plus b minus 6, so a plus b equals 1.',
        'By the factor theorem, f of minus 2 equals 0.',
        'f of minus 2 equals minus 16 plus 4 a minus 2 b minus 6.',
        'So 4 a minus 2 b equals 22, which is 2 a minus b equals 11.',
        'Add the two equations: 3 a equals 12, so a equals 4.',
        'Then b equals 1 minus 4, which is minus 3.',
      ],
      answer: 'a equals 4 and b equals minus 3. '
        + 'Check: f of x equals 2 x cubed plus 4 x squared minus 3 x minus '
        + '6. '
        + 'f of 1 equals 2 plus 4 minus 3 minus 6, which is minus 3. '
        + 'f of minus 2 equals minus 16 plus 16 plus 6 minus 6, which is 0. '
        + 'Each condition gives one equation in a and b, '
        + 'so two conditions are always needed for two unknowns.',
    },
  ],

  traps: [
    {
      mistake: 'Substituting 2 to test the factor x plus 2.',
      why: 'x plus 2 is x minus negative 2, so the value is minus 2. '
        + 'Set the divisor to zero and solve for x.',
    },
    {
      mistake: 'Substituting 3 to test the divisor 2 x minus 3.',
      why: 'Setting 2 x minus 3 to zero gives x equals 1.5. '
        + 'For a x minus b the value is b over a.',
    },
    {
      mistake: 'Starting long division with a missing power left out.',
      why: 'The columns no longer line up. '
        + 'Write x cubed plus 0 x squared plus 0 x plus 2 before dividing.',
    },
    {
      mistake: 'Answering a show that question with yes, it is a factor.',
      why: 'The marks are for the theorem named, the substitution shown, '
        + 'and the conclusion stated. '
        + 'A verdict alone earns almost nothing.',
    },
  ],

  extension:
    'The factor theorem is how a cubic equation is actually solved. '
    + 'There is a formula for the roots of a cubic, '
    + 'but it is long and nobody uses it. '
    + 'Instead you find one root by trial among the factors of the constant '
    + 'term, '
    + 'divide it out, and solve the quadratic that is left with the familiar '
    + 'formula. '
    + 'A cubic with no simple root is handled numerically instead, '
    + 'by narrowing an interval where the sign of f of x changes.',

  questions: [
    {
      id: 'poly-1',
      ask: 'The remainder when f of x is divided by x minus 3 equals:',
      kind: 'choice',
      options: ['f of 3', 'f of minus 3', 'f of 0'],
      answer: 'f of 3',
      teach: 'Set the divisor to zero: x minus 3 equals 0 gives x equals 3. '
        + 'Substitute 3.',
      level: 3,
    },
    {
      id: 'poly-2',
      ask: 'To test whether x plus 4 is a factor, substitute:',
      kind: 'numeric',
      options: [],
      answer: '-4',
      teach: 'x plus 4 is zero when x is minus 4. '
        + 'Always solve the divisor for x rather than reading the sign off '
        + 'the bracket.',
      level: 4,
    },
    {
      id: 'poly-3',
      ask: 'Find the remainder when x cubed plus 2 x minus 1 is divided by '
        + 'x minus 2.',
      kind: 'numeric',
      options: [],
      answer: '11',
      teach: 'f of 2 equals 8 plus 4 minus 1, which is 11.',
      level: 4,
    },
    {
      id: 'poly-4',
      ask: 'If f of a equals 0 then:',
      kind: 'choice',
      options: [
        'x minus a is a factor of f of x',
        'x plus a is a factor of f of x',
        'f of x has no factors',
      ],
      answer: 'x minus a is a factor of f of x',
      teach: 'That is the factor theorem. '
        + 'A zero remainder means the division is exact.',
      level: 4,
    },
    {
      id: 'poly-5',
      ask: 'To test the divisor 3 x minus 6, the value substituted is:',
      kind: 'numeric',
      options: [],
      answer: '2',
      teach: '3 x minus 6 equals 0 gives x equals 2. '
        + 'For a x minus b the value is b over a.',
      level: 5,
    },
  ],
})

/* ── indices, surds and logarithms ───────────────────────────────────────── */

teach({
  topicId: 'surds-logs-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Indices add when you multiply and subtract when you divide. '
      + 'A surd is a root that cannot be written exactly as a fraction. '
      + 'A logarithm is an index: log to base a of b equals c '
      + 'means a to the power c equals b. '
      + 'So a logarithm turns an unknown exponent into an ordinary unknown.',
    method: [
      'For an index equation, make both sides the same base, then equate '
        + 'the powers.',
      'For a surd, simplify by taking out square factors.',
      'Rationalise a denominator by multiplying by the conjugate.',
      'For a log equation, combine the logs into one, then remove the log.',
      'Always check the answer in the original equation.',
    ],
  },

  idea:
    'The laws of indices are three. '
    + 'a to the m times a to the n equals a to the m plus n. '
    + 'a to the m divided by a to the n equals a to the m minus n. '
    + 'a to the m, all raised to the n, equals a to the m times n. '
    + 'From these follow a to the power zero equals 1, '
    + 'a to the power minus n equals 1 over a to the n, '
    + 'and a to the power one over n equals the n th root of a. '
    + 'A surd is a root that cannot be written as an exact fraction, '
    + 'such as the square root of 2. '
    + 'The square root of a times b equals the square root of a '
    + 'times the square root of b, '
    + 'which is how a surd is simplified: '
    + 'the square root of 18 is the square root of 9 times 2, '
    + 'which is 3 times the square root of 2. '
    + 'A denominator containing a surd is rationalised '
    + 'by multiplying top and bottom by a suitable surd or conjugate. '
    + 'A logarithm is an index written the other way round. '
    + 'log to base a of b equals c means a to the power c equals b. '
    + 'The laws follow directly from the index laws: '
    + 'log of m n equals log m plus log n, '
    + 'log of m over n equals log m minus log n, '
    + 'and log of m to the power p equals p times log m. '
    + 'Also log to base a of a equals 1, and log of 1 equals 0, '
    + 'in any base.',

  mechanism:
    'The sentence to hold is that a logarithm is an index. '
    + 'Everything else in the topic is that sentence applied. '
    + 'Why does log of m n equal log m plus log n? '
    + 'Because multiplying powers of the same base adds the indices, '
    + 'and the logarithm is the index. '
    + 'The two laws are the same law in two notations, '
    + 'so there is nothing extra to learn. '
    + 'Why does a logarithm help at all? '
    + 'Because in 2 to the power x equals 32 the unknown is upstairs, '
    + 'where none of the ordinary moves reach it. '
    + 'Taking a logarithm brings it down: x times log 2 equals log 32, '
    + 'and now it is an ordinary linear equation. '
    + 'That is the whole purpose of the logarithm. '
    + 'For the equation above there is a faster route worth taking first. '
    + 'Write 32 as 2 to the power 5. '
    + 'Both sides are now powers of 2, '
    + 'so the indices must be equal and x is 5. '
    + 'The rule is: try a common base before reaching for a logarithm, '
    + 'because when it works it is one line. '
    + 'Now the three places marks are lost. '
    + 'The first is inventing a law. '
    + 'log of m plus n is not log m plus log n. '
    + 'The law is about a product, not a sum. '
    + 'Check it with numbers: log to base 10 of 10 plus 90 is log of 100, '
    + 'which is 2, '
    + 'while log 10 plus log 90 is 1 plus about 1.95, which is 2.95. '
    + 'Not the same, and one substitution settles it forever. '
    + 'The same applies to indices: a to the m plus a to the n '
    + 'is not a to the m plus n. '
    + 'The second is the domain. '
    + 'Solving log of x plus log of x minus 3 equals 1 '
    + 'leads to x squared minus 3 x minus 10 equals 0, '
    + 'so x is 5 or minus 2. '
    + 'But minus 2 must be thrown away, '
    + 'because log of a negative number does not exist. '
    + 'Writing both answers loses the mark that is there for rejecting one. '
    + 'So every log equation ends with a line checking the answers '
    + 'in the original equation, and that line is examinable. '
    + 'The third is the surd denominator. '
    + '1 over the square root of 3 is not wrong mathematically, '
    + 'but the expected form is the square root of 3 over 3, '
    + 'and marks are set aside for it. '
    + 'Multiply top and bottom by the square root of 3. '
    + 'For 1 over 2 plus the square root of 3, '
    + 'multiply by the conjugate, which is 2 minus the square root of 3. '
    + 'The denominator becomes 4 minus 3, which is 1, '
    + 'and the surd has gone from the bottom. '
    + 'The conjugate works because the difference of two squares '
    + 'turns a surd into a whole number, '
    + 'and naming that is the reason the step is allowed. '
    + 'What must be written down is the law used at each step. '
    + 'Combining two logs into one? '
    + 'Write by the product law. '
    + 'Equating indices? '
    + 'Write since the bases are equal, the indices are equal. '
    + 'Those phrases are the marks.',

  recap:
    'You know index notation and how to square and take square roots. '
    + 'This adds the laws in full, '
    + 'and the logarithm, which is the index made into the unknown.',

  method: [
    'For an index equation, write both sides as powers of one base.',
    'If the bases match, equate the indices and solve.',
    'If they cannot be matched, take logarithms of both sides.',
    'For a surd, factor out the largest square and take its root outside.',
    'To rationalise, multiply top and bottom by the surd or its conjugate.',
    'For a log equation, use the laws to make a single logarithm.',
    'Rewrite log to base a of b equals c as a to the power c equals b.',
    'Solve the resulting equation.',
    'Reject any answer that makes the argument of a log zero or negative.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Solve 2 to the power x equals 32.',
      steps: [
        '32 is 2 to the power 5.',
        'So 2 to the power x equals 2 to the power 5.',
        'The bases are equal, so the indices are equal.',
      ],
      answer: 'x equals 5. '
        + 'No logarithm was needed, because a common base was available.',
    },
    {
      level: 4,
      ask: 'Simplify the square root of 50 plus the square root of 18, '
        + 'and rationalise 1 over the square root of 2.',
      steps: [
        '50 is 25 times 2, so its root is 5 root 2.',
        '18 is 9 times 2, so its root is 3 root 2.',
        'The two are like terms in root 2, so they add.',
        'For the fraction, multiply top and bottom by root 2.',
      ],
      answer: '8 times the square root of 2. '
        + 'And 1 over root 2 becomes root 2 over 2.',
    },
    {
      level: 4,
      ask: 'Solve log to base 10 of x plus log to base 10 of x minus 3 '
        + 'equals 1.',
      steps: [
        'By the product law, log of x times x minus 3 equals 1.',
        'So x times x minus 3 equals 10 to the power 1, which is 10.',
        'x squared minus 3 x minus 10 equals 0.',
        'Factorising: x minus 5 times x plus 2 equals 0.',
        'So x equals 5 or x equals minus 2.',
        'Check: x equals minus 2 makes log of x undefined, so reject it.',
      ],
      answer: 'x equals 5. '
        + 'x equals minus 2 is rejected, '
        + 'because the logarithm of a negative number does not exist. '
        + 'Stating the rejection is worth a mark.',
    },
    {
      level: 5,
      ask: 'Solve the simultaneous equations '
        + 'log to base 2 of x plus log to base 2 of y equals 5 '
        + 'and log to base 2 of x minus log to base 2 of y equals 1.',
      steps: [
        'Add the two: 2 log x equals 6, so log to base 2 of x equals 3.',
        'So x equals 2 cubed, which is 8.',
        'Substitute into the first: 3 plus log y equals 5, '
          + 'so log to base 2 of y equals 2.',
        'So y equals 2 squared, which is 4.',
        'Check: log of 8 plus log of 4 is 3 plus 2, which is 5.',
      ],
      answer: 'x equals 8 and y equals 4. '
        + 'Treating log x and log y as the two unknowns '
        + 'turns this into ordinary simultaneous equations, '
        + 'and only the last step returns to x and y.',
    },
  ],

  traps: [
    {
      mistake: 'Writing log of m plus n as log m plus log n.',
      why: 'The law is for a product. '
        + 'Test it: log 100 is 2, but log 10 plus log 90 is about 2.95.',
    },
    {
      mistake: 'Keeping a negative solution of a logarithmic equation.',
      why: 'The logarithm of a negative number or of zero does not exist. '
        + 'Check each root in the original equation and reject.',
    },
    {
      mistake: 'Leaving a surd in the denominator.',
      why: 'The expected form has a rational denominator, '
        + 'and a mark is set aside for it. '
        + 'Multiply by the surd or its conjugate.',
    },
    {
      mistake: 'Writing a to the m plus a to the n as a to the m plus n.',
      why: 'Indices add when powers are multiplied, not added. '
        + '2 squared plus 2 cubed is 12, while 2 to the power 5 is 32.',
    },
  ],

  extension:
    'Logarithms are why a scale like the Richter scale works. '
    + 'An earthquake of magnitude 6 releases about ten times the energy '
    + 'of one of magnitude 5, '
    + 'because the magnitude is the logarithm of the energy. '
    + 'The same trick compresses sound into decibels and acidity into pH. '
    + 'Whenever a quantity ranges over many powers of ten, '
    + 'its logarithm is the number people can actually use, '
    + 'and that is a practical reason to be fluent with the laws.',

  questions: [
    {
      id: 'log-1',
      ask: 'log to base 2 of 8 equals:',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'Ask what power of 2 gives 8. '
        + '2 cubed is 8, so the logarithm is 3.',
      level: 3,
    },
    {
      id: 'log-2',
      ask: 'Simplify the square root of 48.',
      kind: 'choice',
      options: [
        '4 times the square root of 3',
        '3 times the square root of 4',
        '2 times the square root of 12',
      ],
      answer: '4 times the square root of 3',
      teach: '48 is 16 times 3, and the root of 16 is 4. '
        + 'Take out the largest square factor.',
      level: 4,
    },
    {
      id: 'log-3',
      ask: 'log m plus log n equals:',
      kind: 'choice',
      options: [
        'log of m times n',
        'log of m plus n',
        'log m times log n',
      ],
      answer: 'log of m times n',
      teach: 'Indices add when powers multiply, '
        + 'and a logarithm is an index, so logs add when the numbers '
        + 'multiply.',
      level: 4,
    },
    {
      id: 'log-4',
      ask: 'Solve 3 to the power x equals 81.',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: '81 is 3 to the power 4. '
        + 'Equal bases means equal indices.',
      level: 3,
    },
    {
      id: 'log-5',
      ask: 'In solving log x plus log of x minus 3 equals 1, '
        + 'why is x equals minus 2 rejected?',
      kind: 'choice',
      options: [
        'The logarithm of a negative number does not exist',
        'It does not satisfy the quadratic',
        'Logarithms must be whole numbers',
      ],
      answer: 'The logarithm of a negative number does not exist',
      teach: 'It satisfies the quadratic but not the original equation. '
        + 'That is why the check at the end is examinable.',
      level: 5,
    },
  ],
})

/* ── logic ───────────────────────────────────────────────────────────────── */

teach({
  topicId: 'logic-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A statement is a sentence that is either true or false. '
      + 'Not p reverses it. '
      + 'p and q is true only when both are true. '
      + 'p or q is false only when both are false. '
      + 'If p then q is false only when p is true and q is false. '
      + 'An argument is valid when the conclusion is true '
      + 'in every row where all the premises are true.',
    method: [
      'List the statements and give each a letter.',
      'Build the truth table with all combinations, 2 to the power n rows.',
      'Fill one column per connective, working outwards from the brackets.',
      'For validity, look only at the rows where every premise is true.',
    ],
  },

  idea:
    'A statement, or proposition, is a sentence that is either true or '
    + 'false, '
    + 'but not both. '
    + 'Accra is in Ghana is a statement. '
    + 'Close the door is not, because it is neither true nor false. '
    + 'The negation of p, written not p, is true exactly when p is false. '
    + 'The conjunction p and q is true only when p and q are both true. '
    + 'The disjunction p or q is true when at least one is true, '
    + 'and false only when both are false. '
    + 'The implication if p then q is true in every case '
    + 'except when p is true and q is false. '
    + 'In if p then q, p is the antecedent and q is the consequent. '
    + 'The converse of if p then q is if q then p. '
    + 'The contrapositive is if not q then not p, '
    + 'and it is always equivalent to the original. '
    + 'A truth table lists every combination of truth values, '
    + 'so with n statements it has 2 to the power n rows. '
    + 'A tautology is true in every row, '
    + 'a contradiction is false in every row. '
    + 'An argument is valid when there is no row '
    + 'in which all the premises are true and the conclusion is false.',

  mechanism:
    'The one row that defines the implication is the row people argue '
    + 'about, '
    + 'so it is worth settling. '
    + 'If p then q is counted false only when p is true and q is false. '
    + 'Take a promise: if you pass, I will buy you a bicycle. '
    + 'You pass and get the bicycle: the promise held, so true. '
    + 'You pass and get nothing: the promise was broken, so false. '
    + 'You fail and get nothing: the promise said nothing about that case, '
    + 'so it was not broken, so true. '
    + 'You fail and get a bicycle anyway: still not broken, so true. '
    + 'Only one case breaks a promise, and that is the only false row. '
    + 'Once that is seen, the table is not a convention to memorise. '
    + 'The second idea is validity, and this is where most marks go. '
    + 'Validity is about the shape of the argument, '
    + 'not about whether the statements happen to be true. '
    + 'An argument can be valid with a false conclusion, '
    + 'if one of its premises is false. '
    + 'So the test is mechanical: build the table, '
    + 'find every row where all the premises are true, '
    + 'and check the conclusion in those rows only. '
    + 'If the conclusion is true in all of them, the argument is valid. '
    + 'One row with true premises and a false conclusion makes it invalid, '
    + 'and that row is the counterexample worth pointing to by name. '
    + 'Now the two famous mistakes, '
    + 'and they appear in nearly every examination. '
    + 'The first is affirming the consequent. '
    + 'If it is raining the ground is wet. '
    + 'The ground is wet. '
    + 'Therefore it is raining. '
    + 'That is invalid, because someone may have washed the yard. '
    + 'Arguing from q back to p is not permitted. '
    + 'The second is denying the antecedent. '
    + 'If it is raining the ground is wet. '
    + 'It is not raining. '
    + 'Therefore the ground is not wet. '
    + 'Also invalid, and for the same reason. '
    + 'The two valid forms are worth naming and knowing. '
    + 'From if p then q and p, conclude q, which is modus ponens. '
    + 'From if p then q and not q, conclude not p, which is modus tollens. '
    + 'So the arrow may be followed forwards from p, '
    + 'or backwards from the denial of q, and nothing else. '
    + 'What has to be written down is the table and then the sentence. '
    + 'Do not leave a filled table as the answer. '
    + 'Write: in rows 2 and 4 both premises are true, '
    + 'and in both the conclusion is true, '
    + 'so the argument is valid. '
    + 'For an invalid argument, write the row: '
    + 'in row 3 the premises are true and the conclusion false, '
    + 'so the argument is invalid. '
    + 'That sentence is the mark the table was built to earn.',

  recap:
    'You have used words like and, or and if in ordinary speech. '
    + 'This fixes exactly what each one means, '
    + 'so that an argument can be tested rather than argued over.',

  method: [
    'Name each simple statement with a letter.',
    'Rewrite the argument in symbols, premises first.',
    'Count the letters: n letters means 2 to the power n rows.',
    'List the combinations in a fixed order, so none is missed.',
    'Add one column per connective, innermost brackets first.',
    'Mark the rows in which every premise is true.',
    'Check the conclusion in those rows only.',
    'Write the verdict as a sentence, naming the rows you used.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Build the truth table for not p or q.',
      steps: [
        'Two letters, so four rows.',
        'p true q true: not p is false, so false or true is true.',
        'p true q false: false or false is false.',
        'p false q true: true or true is true.',
        'p false q false: true or false is true.',
      ],
      answer: 'The column reads true, false, true, true. '
        + 'That is the same column as if p then q, '
        + 'so the two statements are equivalent.',
    },
    {
      level: 4,
      ask: 'Test this argument. '
        + 'If a learner studies, she passes. '
        + 'She studied. '
        + 'Therefore she passed.',
      steps: [
        'Let p be she studies and q be she passes.',
        'Premises: if p then q, and p. Conclusion: q.',
        'The only row where both premises are true is p true and q true.',
        'In that row the conclusion q is true.',
      ],
      answer: 'Valid. '
        + 'The only row with both premises true has q true, '
        + 'so the conclusion cannot fail. '
        + 'This form is called modus ponens.',
    },
    {
      level: 4,
      ask: 'Test this argument. '
        + 'If it rains, the road floods. '
        + 'The road flooded. '
        + 'Therefore it rained.',
      steps: [
        'Let p be it rains and q be the road floods.',
        'Premises: if p then q, and q. Conclusion: p.',
        'Look for a row with both premises true and p false.',
        'Take p false and q true: if p then q is true, q is true, '
          + 'and p is false.',
      ],
      answer: 'Invalid. '
        + 'In the row where p is false and q is true '
        + 'both premises hold but the conclusion fails, '
        + 'so that row is a counterexample. '
        + 'A burst pipe would flood the road without rain. '
        + 'This error is called affirming the consequent.',
    },
    {
      level: 5,
      ask: 'Show that if p then q is equivalent to if not q then not p, '
        + 'and state what this is called.',
      steps: [
        'Four rows. For if p then q the column is true, false, true, true.',
        'p true q true: not q false, not p false, '
          + 'so if false then false is true.',
        'p true q false: not q true, not p false, '
          + 'so if true then false is false.',
        'p false q true: not q false, so the implication is true.',
        'p false q false: not q true, not p true, '
          + 'so if true then true is true.',
      ],
      answer: 'The second column also reads true, false, true, true, '
        + 'so the two are equivalent. '
        + 'This is the contrapositive. '
        + 'It is the reason modus tollens works: '
        + 'denying q is the same as having not q, '
        + 'which leads to not p.',
    },
  ],

  traps: [
    {
      mistake: 'Calling if p then q false when p is false.',
      why: 'A promise about passing says nothing about failing, '
        + 'so it cannot be broken by failing. '
        + 'Only p true with q false is false.',
    },
    {
      mistake: 'Arguing from q back to p.',
      why: 'That is affirming the consequent, and it is invalid. '
        + 'A wet road has other causes besides rain.',
    },
    {
      mistake: 'Concluding not q from not p.',
      why: 'That is denying the antecedent. '
        + 'The valid backward move is from not q to not p.',
    },
    {
      mistake: 'Leaving a completed truth table as the answer.',
      why: 'The verdict is the mark. '
        + 'Name the rows where all premises are true '
        + 'and say what the conclusion does there.',
    },
  ],

  extension:
    'These tables are the whole of digital electronics. '
    + 'An and gate, an or gate and a not gate in a circuit '
    + 'carry exactly the columns of this topic, '
    + 'with true as a voltage present and false as a voltage absent. '
    + 'Adding two binary digits is a small arrangement of such gates, '
    + 'and a processor is a very large one. '
    + 'The logic was worked out long before the hardware existed, '
    + 'which is why the hardware could be designed on paper at all.',

  questions: [
    {
      id: 'logic-1',
      ask: 'How many rows does a truth table with three statements have?',
      kind: 'numeric',
      options: [],
      answer: '8',
      teach: '2 to the power 3. '
        + 'Each statement doubles the number of combinations.',
      level: 3,
    },
    {
      id: 'logic-2',
      ask: 'If p then q is false only when:',
      kind: 'choice',
      options: [
        'p is true and q is false',
        'p is false and q is true',
        'both are false',
      ],
      answer: 'p is true and q is false',
      teach: 'That is the only case where a promise is broken. '
        + 'All other rows leave it unbroken, so true.',
      level: 4,
    },
    {
      id: 'logic-3',
      ask: 'From if p then q and not q, what follows?',
      kind: 'choice',
      options: ['not p', 'p', 'q'],
      answer: 'not p',
      teach: 'That is modus tollens. '
        + 'If p had been true, q would have been true, and it is not.',
      level: 4,
    },
    {
      id: 'logic-4',
      ask: 'The contrapositive of if p then q is:',
      kind: 'choice',
      options: [
        'if not q then not p',
        'if q then p',
        'if not p then not q',
      ],
      answer: 'if not q then not p',
      teach: 'The converse is if q then p, and it is not equivalent. '
        + 'Only the contrapositive has the same truth table.',
      level: 5,
    },
    {
      id: 'logic-5',
      ask: 'An argument is valid when:',
      kind: 'choice',
      options: [
        'the conclusion is true in every row where all premises are true',
        'the conclusion is true in every row',
        'all the premises are true',
      ],
      answer: 'the conclusion is true in every row where all premises are '
        + 'true',
      teach: 'Validity is about the shape of the argument. '
        + 'A valid argument with a false premise can still have a false '
        + 'conclusion.',
      level: 5,
    },
  ],
})

/* ── functions and mappings ──────────────────────────────────────────────── */

teach({
  topicId: 'mappings-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A mapping sends each member of a domain to a member of a co-domain. '
      + 'It is a function when each input has exactly one output. '
      + 'One to one means no two inputs share an output. '
      + 'Onto means every member of the co-domain is used. '
      + 'f g of x means do g first, then f. '
      + 'An inverse exists only for a one to one function, '
      + 'and it is found by making x the subject.',
    method: [
      'Check it is a function: one output per input.',
      'For a composite, work from the inside out.',
      'For an inverse, write y equals f of x, swap, and solve for y.',
      'State the domain and range, because they are part of the answer.',
    ],
  },

  idea:
    'A mapping takes each member of one set, the domain, '
    + 'to a member of another set, the co-domain. '
    + 'The set of values actually reached is the range, '
    + 'and the range sits inside the co-domain. '
    + 'A mapping is a function when every member of the domain '
    + 'has exactly one image. '
    + 'A function is one to one when different inputs always give different '
    + 'outputs. '
    + 'It is many to one when two or more inputs share an output. '
    + 'It is onto when the range is the whole co-domain. '
    + 'The composite f g of x means apply g first and then f, '
    + 'so f g of x equals f of g of x. '
    + 'The inverse of f, written f to the power minus 1, '
    + 'undoes what f does, '
    + 'so f inverse of f of x equals x. '
    + 'An inverse function exists only when f is one to one, '
    + 'because otherwise the undoing would have to choose '
    + 'between two possible inputs. '
    + 'To find it, write y equals f of x and make x the subject.',

  mechanism:
    'The condition for an inverse is the heart of this topic, '
    + 'and it is a reason rather than a rule. '
    + 'Take f of x equals x squared on all the real numbers. '
    + 'f of 3 is 9 and f of minus 3 is also 9. '
    + 'Now ask the inverse for the input that gave 9. '
    + 'It cannot answer, because there are two, '
    + 'and a function is allowed only one output. '
    + 'So squaring has no inverse over the reals, '
    + 'and the square root is an inverse only once '
    + 'the domain is cut down to the numbers from zero upwards. '
    + 'This is why the textbook writes the square root as positive only: '
    + 'not a convention, a necessity. '
    + 'Hold that example and you will never lose the condition. '
    + 'Now the order in a composite, '
    + 'which is where most marks in this topic are lost. '
    + 'f g of x means f of g of x, so g acts first. '
    + 'The notation reads right to left, '
    + 'which is the opposite of how English reads, '
    + 'and that is the whole difficulty. '
    + 'Take f of x equals 2 x and g of x equals x plus 3. '
    + 'f g of x equals f of x plus 3, which is 2 x plus 6. '
    + 'g f of x equals g of 2 x, which is 2 x plus 3. '
    + 'Those are different functions, '
    + 'and f g of 1 is 8 while g f of 1 is 5. '
    + 'So composition is not commutative, '
    + 'and swapping the order is simply a wrong answer. '
    + 'The habit that fixes it: put a bracket in before you substitute. '
    + 'Write f g of x as f of open bracket g of x close bracket, '
    + 'then replace g of x by its formula, '
    + 'then apply f to the whole bracket. '
    + 'The third place marks go is the domain. '
    + 'For f of x equals 1 over x minus 2, '
    + 'the domain is every real number except 2, '
    + 'because x equals 2 would divide by zero. '
    + 'For the square root of x minus 1, '
    + 'the domain is x greater than or equal to 1. '
    + 'A question that asks for the domain is asking which inputs are '
    + 'allowed, '
    + 'and the two things to look for are division by zero '
    + 'and the square root of a negative number. '
    + 'Finally, what to write down. '
    + 'For an inverse, three lines: '
    + 'let y equal f of x; '
    + 'make x the subject, showing the rearrangement; '
    + 'then replace y by x and write f inverse of x equals the expression. '
    + 'Checking by composing is worth doing and sometimes worth a mark: '
    + 'if f inverse of f of 5 comes back as 5, the inverse is right.',

  recap:
    'You have substituted a value into a formula and got an answer. '
    + 'This names what that machine is, '
    + 'asks which inputs are allowed, '
    + 'and asks whether the machine can be run backwards.',

  method: [
    'Identify the domain and check each input has exactly one output.',
    'Decide one to one or many to one by testing two inputs.',
    'Find the range by seeing which outputs actually occur.',
    'For f g of x, substitute g of x into f, keeping a bracket.',
    'For an inverse, set y equals f of x.',
    'Rearrange to make x the subject.',
    'Replace y by x to write the inverse.',
    'State the domain of the inverse, which is the range of f.',
    'Check by composing: f inverse of f of a number should give it back.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Given f of x equals 3 x minus 1 and g of x equals x squared, '
        + 'find f g of 2 and g f of 2.',
      steps: [
        'f g of 2 means f of g of 2.',
        'g of 2 is 4, and f of 4 is 11.',
        'g f of 2 means g of f of 2.',
        'f of 2 is 5, and g of 5 is 25.',
      ],
      answer: 'f g of 2 is 11 and g f of 2 is 25. '
        + 'The two differ, so the order matters.',
    },
    {
      level: 4,
      ask: 'Find the inverse of f of x equals 2 x plus 5.',
      steps: [
        'Let y equal 2 x plus 5.',
        'Subtract 5: y minus 5 equals 2 x.',
        'Divide by 2: x equals y minus 5, all over 2.',
        'Replace y by x.',
      ],
      answer: 'f inverse of x equals x minus 5, all over 2. '
        + 'Check: f of 3 is 11, and f inverse of 11 is 6 over 2, which is 3.',
    },
    {
      level: 4,
      ask: 'State the domain of f of x equals 1 over x minus 3, '
        + 'and of g of x equals the square root of x plus 2.',
      steps: [
        'A denominator may not be zero, so x minus 3 is not zero.',
        'A square root needs a non-negative argument, '
          + 'so x plus 2 is at least zero.',
      ],
      answer: 'For f, every real number except 3. '
        + 'For g, every x greater than or equal to minus 2.',
    },
    {
      level: 5,
      ask: 'Explain why f of x equals x squared has no inverse '
        + 'on the set of all real numbers, '
        + 'and say how the domain can be changed so that it does.',
      steps: [
        'f of 3 is 9 and f of minus 3 is 9.',
        'Two different inputs share one output, so f is many to one.',
        'An inverse would have to send 9 to both 3 and minus 3.',
        'That breaks the rule that a function has one output per input.',
      ],
      answer: 'Because f is many to one: '
        + 'f of 3 and f of minus 3 are both 9, '
        + 'so an inverse would need two outputs for the input 9, '
        + 'which no function may have. '
        + 'Restricting the domain to x greater than or equal to zero '
        + 'makes f one to one, '
        + 'and then the inverse is the positive square root.',
    },
  ],

  traps: [
    {
      mistake: 'Reading f g of x as f first and then g.',
      why: 'It means f of g of x, so g acts first. '
        + 'The notation reads right to left.',
    },
    {
      mistake: 'Assuming f g of x equals g f of x.',
      why: 'Composition is not commutative. '
        + 'With f of x equal to 2 x and g of x equal to x plus 3, '
        + 'the two differ at every x.',
    },
    {
      mistake: 'Writing an inverse for a many to one function.',
      why: 'The inverse would need two outputs for one input. '
        + 'Restrict the domain first, then invert.',
    },
    {
      mistake: 'Giving a function without stating its domain.',
      why: 'The domain is part of the function. '
        + 'Check for division by zero and for the root of a negative '
        + 'number.',
    },
  ],

  extension:
    'Once a function is one to one and onto it is called a bijection, '
    + 'and a bijection between two sets means they have the same size. '
    + 'That sounds obvious for finite sets '
    + 'and becomes surprising for infinite ones. '
    + 'The mapping n goes to 2 n is a bijection '
    + 'from the counting numbers to the even numbers, '
    + 'so there are exactly as many even numbers as counting numbers, '
    + 'even though the even numbers leave half of them out. '
    + 'Nothing is wrong with the argument: '
    + 'it is the definition of same size doing its job on an infinite set.',

  questions: [
    {
      id: 'map-1',
      ask: 'For f of x equals x plus 1 and g of x equals 2 x, '
        + 'f g of 3 equals:',
      kind: 'numeric',
      options: [],
      answer: '7',
      teach: 'g acts first: g of 3 is 6, then f of 6 is 7. '
        + 'g f of 3 would be 8.',
      level: 3,
    },
    {
      id: 'map-2',
      ask: 'A function is one to one when:',
      kind: 'choice',
      options: [
        'different inputs always give different outputs',
        'every output is used',
        'the domain and range are equal',
      ],
      answer: 'different inputs always give different outputs',
      teach: 'Every output used is onto, which is a different property. '
        + 'One to one is what an inverse needs.',
      level: 4,
    },
    {
      id: 'map-3',
      ask: 'The inverse of f of x equals 3 x minus 6 is:',
      kind: 'choice',
      options: [
        'x plus 6, all over 3',
        'x minus 6, all over 3',
        '3 x plus 6',
      ],
      answer: 'x plus 6, all over 3',
      teach: 'Set y equal to 3 x minus 6, add 6, divide by 3. '
        + 'Undo the operations in reverse order.',
      level: 4,
    },
    {
      id: 'map-4',
      ask: 'The domain of f of x equals 1 over x minus 5 excludes:',
      kind: 'numeric',
      options: [],
      answer: '5',
      teach: 'At x equals 5 the denominator is zero, '
        + 'and division by zero is undefined.',
      level: 4,
    },
    {
      id: 'map-5',
      ask: 'Why has f of x equals x squared no inverse over all the reals?',
      kind: 'choice',
      options: [
        'It is many to one, so the inverse would need two outputs',
        'It is not a function',
        'Its range is too small',
      ],
      answer: 'It is many to one, so the inverse would need two outputs',
      teach: 'f of 3 and f of minus 3 are both 9. '
        + 'Restricting the domain to non-negative x fixes it.',
      level: 5,
    },
  ],
})

/* ── the straight line ───────────────────────────────────────────────────── */

teach({
  topicId: 'straight-line-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The gradient between two points is the change in y '
      + 'over the change in x. '
      + 'y equals m x plus c has gradient m and cuts the y axis at c. '
      + 'Through a point with a known gradient, '
      + 'use y minus y1 equals m times x minus x1. '
      + 'Parallel lines have equal gradients; '
      + 'perpendicular gradients multiply to minus 1. '
      + 'The angle between two lines comes from their gradients.',
    method: [
      'Find the gradient first, from two points or from the equation.',
      'Use the point and gradient form to write the equation.',
      'For a perpendicular, take the negative reciprocal.',
      'Rearrange to a x plus b y plus c equals 0 when asked.',
      'For a distance from a point to a line, use the formula with the line '
        + 'in that form.',
    ],
  },

  idea:
    'The gradient of the line through the points x1, y1 and x2, y2 '
    + 'is y2 minus y1 over x2 minus x1. '
    + 'It measures how steeply the line rises, '
    + 'and it is the same wherever it is measured on a straight line. '
    + 'The equation y equals m x plus c has gradient m '
    + 'and crosses the y axis at the point 0, c. '
    + 'Given a gradient m and a point x1, y1 on the line, '
    + 'the equation is y minus y1 equals m times x minus x1. '
    + 'The general form is a x plus b y plus c equals 0, '
    + 'and in that form the gradient is minus a over b. '
    + 'Two lines are parallel when their gradients are equal. '
    + 'They are perpendicular when the product of their gradients is minus '
    + '1, '
    + 'so each gradient is the negative reciprocal of the other. '
    + 'The distance between two points is the square root of '
    + 'the change in x squared plus the change in y squared. '
    + 'The midpoint is the mean of the x values and the mean of the y '
    + 'values. '
    + 'The acute angle between two lines of gradients m1 and m2 '
    + 'satisfies tan of the angle equals '
    + 'm1 minus m2 over 1 plus m1 m2, taken positive. '
    + 'The distance from the point x1, y1 to the line a x plus b y plus c '
    + 'equals 0 '
    + 'is a x1 plus b y1 plus c, taken positive, '
    + 'divided by the square root of a squared plus b squared.',

  mechanism:
    'The reason the gradient can be found from any two points on a line '
    + 'is that the triangles formed are similar, '
    + 'so the ratio of rise to run is the same everywhere. '
    + 'That is why one number describes the whole line, '
    + 'and it is worth saying once because it explains '
    + 'why the point and gradient form works at all: '
    + 'any point on the line, plus the shared gradient, fixes every other '
    + 'point. '
    + 'The perpendicular rule is the part that looks arbitrary and is not. '
    + 'Turn a line through a right angle '
    + 'and the rise becomes the run while the run becomes minus the rise. '
    + 'A gradient of 2, which is 2 over 1, '
    + 'becomes minus 1 over 2. '
    + 'Multiply them: 2 times minus a half is minus 1. '
    + 'So the rule is the rotation written in arithmetic, '
    + 'and the negative reciprocal is the thing to remember '
    + 'because it is the thing you actually do. '
    + 'Now the places marks are lost, and they are specific. '
    + 'The first is the gradient of a line given as 2 x plus 3 y minus 6 '
    + 'equals 0. '
    + 'Learners read the gradient as 2, taking the number in front of x. '
    + 'It is minus 2 over 3. '
    + 'Either rearrange to y equals minus two thirds x plus 2, '
    + 'or use minus a over b, '
    + 'but never read m straight off the general form. '
    + 'Rearranging first is slower and safer, and is recommended. '
    + 'The second is the perpendicular with a negative gradient. '
    + 'The negative reciprocal of minus 3 is plus one third, not minus one '
    + 'third. '
    + 'Both the sign and the flip must happen. '
    + 'Check by multiplying: minus 3 times a third is minus 1, which is '
    + 'right, '
    + 'while minus 3 times minus a third is plus 1, which is not. '
    + 'That one multiplication catches the error every time, and it takes a '
    + 'second. '
    + 'The third is the distance from a point to a line. '
    + 'The formula needs the line in the form a x plus b y plus c equals 0, '
    + 'with the zero on the right. '
    + 'Substituting from y equals 2 x plus 1 without rearranging to '
    + '2 x minus y plus 1 equals 0 '
    + 'gives the wrong a, b and c, and the answer is wrong from the first '
    + 'line. '
    + 'Rearrange, then write down a, b and c separately, then substitute. '
    + 'Also, the absolute value in the numerator is not decoration: '
    + 'a distance cannot be negative, '
    + 'and a negative answer means the modulus was dropped. '
    + 'What has to be written down is the gradient as its own line, '
    + 'before the equation. '
    + 'A marking scheme typically gives one mark for the gradient, '
    + 'one for the correct substitution into the point and gradient form, '
    + 'and one for the final rearrangement. '
    + 'Three separate lines, three separate marks. '
    + 'A learner who writes only the final equation and has it slightly '
    + 'wrong '
    + 'scores none of the three.',

  recap:
    'You have plotted straight line graphs and found gradients from them. '
    + 'This does the same work by algebra instead of by drawing, '
    + 'which is what makes an exact angle or distance possible.',

  method: [
    'Write down the coordinates or the equation you are given.',
    'Find the gradient, and show it as its own line.',
    'For a parallel line, keep the gradient; '
      + 'for a perpendicular, take the negative reciprocal and check the '
      + 'product is minus 1.',
    'Substitute the gradient and a point into y minus y1 equals m times x '
      + 'minus x1.',
    'Expand and rearrange into the form asked for.',
    'For a distance between points, use the square root of the sum of the '
      + 'squares.',
    'For a distance to a line, first rearrange the line to a x plus b y '
      + 'plus c equals 0.',
    'Take the numerator positive, because a distance cannot be negative.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Find the equation of the line through 2, 3 and 6, 11.',
      steps: [
        'Gradient is 11 minus 3 over 6 minus 2, which is 8 over 4, so 2.',
        'Use y minus 3 equals 2 times x minus 2.',
        'y minus 3 equals 2 x minus 4.',
      ],
      answer: 'y equals 2 x minus 1. '
        + 'Check with the second point: 2 times 6 minus 1 is 11.',
    },
    {
      level: 4,
      ask: 'Find the equation of the line through 1, 4 '
        + 'perpendicular to 2 x plus 3 y minus 6 equals 0.',
      steps: [
        'Rearrange: 3 y equals minus 2 x plus 6, '
          + 'so y equals minus two thirds x plus 2.',
        'The gradient of the given line is minus two thirds.',
        'The perpendicular gradient is plus three halves.',
        'Check: minus two thirds times three halves is minus 1.',
        'Use y minus 4 equals three halves times x minus 1.',
        'Multiply through by 2: 2 y minus 8 equals 3 x minus 3.',
      ],
      answer: '3 x minus 2 y plus 5 equals 0. '
        + 'Reading the gradient of the given line as 2 '
        + 'would have started the whole answer wrongly.',
    },
    {
      level: 4,
      ask: 'Find the acute angle between the lines y equals 2 x plus 1 '
        + 'and y equals minus 3 x plus 4.',
      steps: [
        'm1 is 2 and m2 is minus 3.',
        'm1 minus m2 is 2 minus minus 3, which is 5.',
        '1 plus m1 m2 is 1 plus minus 6, which is minus 5.',
        'tan of the angle is 5 over minus 5, taken positive, so 1.',
      ],
      answer: '45 degrees. '
        + 'The modulus is what makes the answer the acute angle '
        + 'rather than the obtuse one.',
    },
    {
      level: 5,
      ask: 'Find the perpendicular distance from the point 3, minus 2 '
        + 'to the line y equals 2 x plus 1.',
      steps: [
        'Rearrange to the required form: 2 x minus y plus 1 equals 0.',
        'So a is 2, b is minus 1, c is 1.',
        'Numerator: 2 times 3 plus minus 1 times minus 2 plus 1, '
          + 'which is 6 plus 2 plus 1, so 9.',
        'Denominator: the square root of 4 plus 1, which is root 5.',
      ],
      answer: '9 over the square root of 5, '
        + 'which is 9 root 5 over 5, about 4.02 units. '
        + 'Substituting a, b and c from y equals 2 x plus 1 without '
        + 'rearranging '
        + 'would give the wrong answer at the first step.',
    },
  ],

  traps: [
    {
      mistake: 'Reading the gradient of 2 x plus 3 y minus 6 equals 0 '
        + 'as 2.',
      why: 'In the general form the gradient is minus a over b, '
        + 'so minus two thirds. '
        + 'Rearrange into y equals m x plus c first.',
    },
    {
      mistake: 'Taking the perpendicular gradient of minus 3 as minus a '
        + 'third.',
      why: 'The sign flips too. '
        + 'It is plus a third, and multiplying gives minus 1 as a check.',
    },
    {
      mistake: 'Using the distance formula without putting the line in the '
        + 'form a x plus b y plus c equals 0.',
      why: 'The a, b and c read off any other arrangement are wrong, '
        + 'so the answer is wrong from the start.',
    },
    {
      mistake: 'Giving a negative distance.',
      why: 'The numerator is taken positive. '
        + 'A distance has no sign.',
    },
  ],

  extension:
    'Three points are collinear exactly when the gradient '
    + 'from the first to the second equals the gradient from the second to '
    + 'the third. '
    + 'That one test replaces any amount of drawing, '
    + 'and it is how a surveyor checks that three beacons lie on a boundary '
    + 'line '
    + 'from their coordinates alone. '
    + 'The same idea extended gives the equation of a locus: '
    + 'a condition on x and y, written as an equation, '
    + 'is the curve of all points satisfying it.',

  questions: [
    {
      id: 'line-1',
      ask: 'The gradient of the line through 1, 2 and 4, 11 is:',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: '11 minus 2 over 4 minus 1, which is 9 over 3.',
      level: 3,
    },
    {
      id: 'line-2',
      ask: 'The gradient of 2 x plus 3 y minus 6 equals 0 is:',
      kind: 'choice',
      options: [
        'minus two thirds',
        '2',
        'minus 2',
      ],
      answer: 'minus two thirds',
      teach: 'Rearrange to y equals minus two thirds x plus 2, '
        + 'or use minus a over b.',
      level: 4,
    },
    {
      id: 'line-3',
      ask: 'A line perpendicular to one of gradient minus 4 has gradient:',
      kind: 'choice',
      options: ['one quarter', 'minus one quarter', '4'],
      answer: 'one quarter',
      teach: 'The negative reciprocal. '
        + 'Check: minus 4 times a quarter is minus 1.',
      level: 4,
    },
    {
      id: 'line-4',
      ask: 'The distance between the points 0, 0 and 3, 4 is:',
      kind: 'numeric',
      options: [],
      answer: '5',
      teach: 'The square root of 9 plus 16, which is the root of 25.',
      level: 3,
    },
    {
      id: 'line-5',
      ask: 'Before using the formula for the distance from a point to a '
        + 'line, you must:',
      kind: 'choice',
      options: [
        'write the line as a x plus b y plus c equals 0',
        'find the midpoint of the line',
        'make the gradient positive',
      ],
      answer: 'write the line as a x plus b y plus c equals 0',
      teach: 'Otherwise a, b and c are read off the wrong arrangement '
        + 'and every later step is wrong.',
      level: 5,
    },
  ],
})

/* ── circular measure ────────────────────────────────────────────────────── */

teach({
  topicId: 'radians-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'One radian is the angle at the centre '
      + 'that cuts off an arc equal to the radius. '
      + 'A full turn is 2 pi radians, so 180 degrees is pi radians. '
      + 'In radians, arc length equals r times theta, '
      + 'and sector area equals a half r squared theta. '
      + 'Those two formulas only work in radians.',
    method: [
      'Convert degrees to radians by multiplying by pi over 180.',
      'Convert radians to degrees by multiplying by 180 over pi.',
      'For arc length, use r theta with theta in radians.',
      'For sector area, use half r squared theta.',
      'Leave the answer in terms of pi unless a decimal is asked for.',
    ],
  },

  idea:
    'An angle can be measured in degrees or in radians. '
    + 'One radian is the angle at the centre of a circle '
    + 'that cuts off an arc equal in length to the radius. '
    + 'Since the whole circumference is 2 pi r, '
    + 'a full turn is 2 pi radians. '
    + 'So 2 pi radians is 360 degrees, '
    + 'pi radians is 180 degrees, '
    + 'pi over 2 radians is 90 degrees, '
    + 'and pi over 6 radians is 30 degrees. '
    + 'One radian is about 57.3 degrees. '
    + 'To change degrees into radians, multiply by pi over 180. '
    + 'To change radians into degrees, multiply by 180 over pi. '
    + 'With the angle theta in radians, '
    + 'the arc length of a sector is r theta, '
    + 'the area of the sector is a half r squared theta, '
    + 'and the area of the segment cut off by the chord '
    + 'is the sector area minus the area of the triangle, '
    + 'which is a half r squared theta minus '
    + 'a half r squared sine theta. '
    + 'The perimeter of a sector is the arc plus the two radii, '
    + 'so r theta plus 2 r.',

  mechanism:
    'The radian looks like an inconvenience and is the opposite. '
    + 'Compare the two ways of finding an arc. '
    + 'In degrees you write the angle over 360, times 2 pi r, '
    + 'which is a fraction of a circumference. '
    + 'In radians you write r theta. '
    + 'The second is shorter because the radian was defined '
    + 'to make it so: '
    + 'if one radian cuts off one radius of arc, '
    + 'then theta radians cut off theta radii of arc, '
    + 'and that sentence is the formula. '
    + 'There is nothing to derive and nothing to remember. '
    + 'The same holds for the sector area, '
    + 'which comes from the fraction theta over 2 pi of the whole area '
    + 'pi r squared, '
    + 'and the pi cancels to leave a half r squared theta. '
    + 'So the unit is chosen to make the formulas plain, '
    + 'which is the only reason it exists. '
    + 'Now the one error that dominates this topic. '
    + 'Using r theta or a half r squared theta with theta in degrees. '
    + 'A sector of radius 7 cm and angle 60 degrees '
    + 'has an arc of 7 times pi over 3, which is about 7.33 cm. '
    + 'Substituting 60 gives 420 cm, '
    + 'which is longer than the whole circumference of about 44 cm, '
    + 'and that is the check that catches it: '
    + 'an arc can never be longer than the circumference, '
    + 'and a sector can never be larger than the circle. '
    + 'Run that check on every answer. '
    + 'If the arc exceeds 2 pi r, the angle was left in degrees. '
    + 'The second trap is the calculator. '
    + 'When a segment question needs sine theta, '
    + 'the calculator must be in radian mode, '
    + 'or sine of pi over 3 will be read as sine of about 1.047 degrees '
    + 'and come out near 0.018 instead of 0.866. '
    + 'The answer will be wrong by a factor of fifty '
    + 'with no sign of an error in the working. '
    + 'So either set the mode, or convert to degrees before taking the sine '
    + 'and say which you did. '
    + 'The third is the perimeter of a sector. '
    + 'Learners give the arc as the perimeter. '
    + 'The perimeter goes all the way round the shape, '
    + 'so it includes both straight radii: r theta plus 2 r. '
    + 'Draw the sector and trace round it with a finger, '
    + 'and the two radii are impossible to miss. '
    + 'What has to be written down is the conversion as its own step. '
    + 'Write theta equals 60 times pi over 180, which is pi over 3 radians, '
    + 'on a line of its own, '
    + 'before any formula. '
    + 'It is often worth a mark, and it is the step that prevents the main '
    + 'error.',

  recap:
    'You have found arc lengths and sector areas '
    + 'as fractions of a circle, using degrees. '
    + 'This gives a different unit for the angle, '
    + 'chosen so that those two formulas become products.',

  method: [
    'Read the angle and note its unit.',
    'If it is in degrees, convert: multiply by pi over 180, '
      + 'and show the line.',
    'For arc length, use r theta.',
    'For sector area, use a half r squared theta.',
    'For a segment, subtract a half r squared sine theta from the sector '
      + 'area.',
    'For a perimeter, add the two radii to the arc.',
    'If a sine or cosine is needed, set the calculator to radians.',
    'Check that the arc is less than 2 pi r and the sector less than pi r '
      + 'squared.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Convert 60 degrees to radians and 3 pi over 4 radians to '
        + 'degrees.',
      steps: [
        '60 times pi over 180 equals pi over 3.',
        '3 pi over 4 times 180 over pi equals 3 times 45.',
      ],
      answer: '60 degrees is pi over 3 radians. '
        + '3 pi over 4 radians is 135 degrees.',
    },
    {
      level: 4,
      ask: 'A sector of a circle of radius 7 cm has an angle of 60 degrees. '
        + 'Find its arc length and its area. '
        + 'Take pi as 22 over 7.',
      steps: [
        'Convert: 60 times pi over 180 is pi over 3 radians.',
        'Arc is r theta: 7 times pi over 3, which is 7 pi over 3.',
        'With pi as 22 over 7 that is 22 over 3, about 7.33 cm.',
        'Area is half r squared theta: half times 49 times pi over 3.',
        'That is 49 pi over 6, about 25.67 square centimetres.',
      ],
      answer: 'Arc about 7.33 cm and area about 25.7 square centimetres. '
        + 'Check: the whole circumference is 44 cm and the arc is a sixth '
        + 'of it, '
        + 'which is about 7.3, so the answer is sensible.',
    },
    {
      level: 4,
      ask: 'A sector has radius 10 cm and angle 1.2 radians. '
        + 'Find its perimeter.',
      steps: [
        'The angle is already in radians.',
        'Arc is r theta: 10 times 1.2, which is 12 cm.',
        'The perimeter includes the two radii.',
        '12 plus 10 plus 10.',
      ],
      answer: '32 cm. '
        + 'Giving 12 cm would be the arc alone, '
        + 'not the perimeter of the shape.',
    },
    {
      level: 5,
      ask: 'A chord subtends an angle of pi over 3 radians '
        + 'at the centre of a circle of radius 6 cm. '
        + 'Find the area of the minor segment, '
        + 'taking the sine of pi over 3 as 0.866.',
      steps: [
        'Sector area is half r squared theta: half times 36 times pi over 3.',
        'That is 6 pi, about 18.85 square centimetres.',
        'Triangle area is half r squared sine theta: '
          + 'half times 36 times 0.866.',
        'That is 15.59 square centimetres.',
        'Segment is sector minus triangle.',
      ],
      answer: 'About 3.26 square centimetres. '
        + 'The calculator must be in radian mode for the sine, '
        + 'or sine of pi over 3 will be computed as if 1.047 degrees '
        + 'and the answer will be wrong by a large factor.',
    },
  ],

  traps: [
    {
      mistake: 'Using r theta with theta in degrees.',
      why: 'It gives an arc longer than the whole circumference. '
        + 'Convert first, and check the arc against 2 pi r.',
    },
    {
      mistake: 'Leaving the calculator in degree mode for a segment '
        + 'question.',
      why: 'Sine of pi over 3 is then read as sine of 1.047 degrees. '
        + 'The answer is wildly wrong with no visible error.',
    },
    {
      mistake: 'Giving the arc length as the perimeter of a sector.',
      why: 'The perimeter goes round the whole shape, '
        + 'so it is r theta plus 2 r.',
    },
    {
      mistake: 'Converting with 180 over pi when degrees to radians was '
        + 'wanted.',
      why: 'Degrees to radians multiplies by pi over 180, '
        + 'which makes the number smaller. '
        + 'If your answer grew, the factor was upside down.',
    },
  ],

  extension:
    'Radians are not a convenience for circles only. '
    + 'In calculus the derivative of sine x is cosine x '
    + 'only when x is in radians. '
    + 'In degrees an awkward constant of pi over 180 appears '
    + 'in front of every derivative, forever. '
    + 'So the radian is the unit in which the trigonometric functions '
    + 'behave simply, '
    + 'and that is why every later topic in mathematics uses it '
    + 'without comment.',

  questions: [
    {
      id: 'rad-1',
      ask: 'How many radians are in 180 degrees?',
      kind: 'choice',
      options: ['pi', '2 pi', 'pi over 2'],
      answer: 'pi',
      teach: 'A full turn is 2 pi, so a half turn is pi.',
      level: 2,
    },
    {
      id: 'rad-2',
      ask: 'A sector has radius 5 cm and angle 2 radians. '
        + 'Its arc length in centimetres is:',
      kind: 'numeric',
      options: [],
      answer: '10',
      teach: 'Arc equals r theta: 5 times 2.',
      level: 3,
    },
    {
      id: 'rad-3',
      ask: 'The area of a sector of radius 6 cm and angle 1 radian, '
        + 'in square centimetres, is:',
      kind: 'numeric',
      options: [],
      answer: '18',
      teach: 'Half r squared theta: half times 36 times 1.',
      level: 4,
    },
    {
      id: 'rad-4',
      ask: 'To convert degrees into radians, multiply by:',
      kind: 'choice',
      options: ['pi over 180', '180 over pi', '180 times pi'],
      answer: 'pi over 180',
      teach: 'The number must get smaller, '
        + 'because a radian is much bigger than a degree.',
      level: 3,
    },
    {
      id: 'rad-5',
      ask: 'The perimeter of a sector of radius r and angle theta radians '
        + 'is:',
      kind: 'choice',
      options: [
        'r theta plus 2 r',
        'r theta',
        'half r squared theta',
      ],
      answer: 'r theta plus 2 r',
      teach: 'The arc plus both straight radii. '
        + 'Half r squared theta is the area, not a length.',
      level: 5,
    },
  ],
})

/* ── descriptive statistics ──────────────────────────────────────────────── */

teach({
  topicId: 'descriptive-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A measure of location says where the data sits: '
      + 'mean, median or mode. '
      + 'A measure of dispersion says how spread out it is: '
      + 'range, variance or standard deviation. '
      + 'For grouped data, use the class midpoint as the value. '
      + 'The mean is the sum of f x over the sum of f, '
      + 'and the standard deviation is the square root of '
      + 'the sum of f x squared over the sum of f, minus the mean squared.',
    method: [
      'Make a table: class, midpoint x, frequency f, f x, f x squared.',
      'Total the f, the f x and the f x squared columns.',
      'Mean is the sum of f x over the sum of f.',
      'Variance is the sum of f x squared over the sum of f, '
        + 'minus the mean squared.',
      'Standard deviation is the square root of the variance.',
    ],
  },

  idea:
    'A measure of location is a single value standing for a whole set. '
    + 'The mean is the total divided by how many there are. '
    + 'The median is the middle value when they are put in order. '
    + 'The mode is the value occurring most often. '
    + 'A measure of dispersion says how widely the values are scattered. '
    + 'The range is the largest minus the smallest. '
    + 'The variance is the mean of the squared deviations from the mean, '
    + 'and the standard deviation is its square root, '
    + 'which puts it back into the units of the data. '
    + 'For grouped data each class is represented by its midpoint, '
    + 'found by averaging the class boundaries. '
    + 'Then the mean is the sum of f x divided by the sum of f, '
    + 'where f is each frequency and x each midpoint. '
    + 'The variance is the sum of f x squared divided by the sum of f, '
    + 'minus the square of the mean. '
    + 'The median class is the class containing the value at position '
    + 'half the total frequency, '
    + 'found from a cumulative frequency column. '
    + 'Quartiles divide the ordered data into four, '
    + 'and the interquartile range is the third quartile minus the first.',

  mechanism:
    'Start with why there is more than one average, '
    + 'because the examination asks which is appropriate '
    + 'and expects a reason. '
    + 'Take the daily takings of five traders at Makola, in cedis: '
    + '80, 90, 100, 110 and 2000. '
    + 'The mean is 476, which describes none of them. '
    + 'The median is 100, which describes four of the five well. '
    + 'The mean is pulled by the extreme value because every value enters '
    + 'the total, '
    + 'while the median only cares about position. '
    + 'So for data with an extreme value, or for incomes, the median is '
    + 'reported. '
    + 'For a symmetric set the mean uses all the information and is '
    + 'preferred. '
    + 'For a category, such as the most common shoe size, only the mode '
    + 'makes sense. '
    + 'Saying which and why is a standard two mark question, '
    + 'and the reason is the mark. '
    + 'Next, why the standard deviation is squared and then square rooted. '
    + 'The deviations from the mean add to zero, always, '
    + 'by the definition of the mean, '
    + 'so their plain average measures nothing at all. '
    + 'Squaring removes the signs, '
    + 'which makes the average of the squares a real measure of spread. '
    + 'But it is now in squared units, '
    + 'so cedis have become cedis squared, which means nothing to a reader. '
    + 'The square root puts it back into cedis. '
    + 'That is the whole of why the formula has the shape it has. '
    + 'Now the places marks are lost in grouped data. '
    + 'The first is the midpoint. '
    + 'For the class 10 to 19 the midpoint is 14.5, not 15 and not 14. '
    + 'Add the lower and upper boundary and halve: 10 plus 19, over 2. '
    + 'Getting every midpoint wrong by half a unit '
    + 'shifts the mean by half a unit and costs the accuracy marks '
    + 'even though the method was right. '
    + 'The second is the variance formula. '
    + 'The sum of f x squared means each midpoint is squared '
    + 'and then multiplied by its frequency. '
    + 'It does not mean the whole f x column is squared. '
    + 'For f equal to 3 and x equal to 4, f x squared is 3 times 16, '
    + 'which is 48, not 12 squared, which is 144. '
    + 'Keep f x and f x squared as two separate columns '
    + 'and the confusion cannot arise. '
    + 'The third is subtracting the mean squared rather than the square of '
    + 'the sum. '
    + 'Variance is the mean of the squares minus the square of the mean, '
    + 'in that order. '
    + 'If the answer comes out negative, the two were swapped, '
    + 'because a variance can never be negative. '
    + 'That is a free check and it is worth running every time. '
    + 'What has to be written down is the table with all its columns '
    + 'and all its totals. '
    + 'A marking scheme awards marks for the midpoints, '
    + 'for the f x total, for the f x squared total, '
    + 'and then for the mean and the standard deviation. '
    + 'A learner who does the whole thing on a calculator '
    + 'and writes two numbers '
    + 'is throwing away most of the marks on the question, '
    + 'even when both numbers are right.',

  recap:
    'You have found the mean, median and mode of a short list, '
    + 'and the range. '
    + 'This handles data already sorted into classes, '
    + 'and adds a measure of spread that uses every value.',

  method: [
    'Draw a table with columns for class, midpoint x, frequency f, '
      + 'f x and f x squared.',
    'Find each midpoint by averaging the class boundaries.',
    'Fill f x, then fill f x squared by squaring x first and then '
      + 'multiplying by f.',
    'Total the f, f x and f x squared columns.',
    'Mean equals the sum of f x over the sum of f.',
    'Variance equals the sum of f x squared over the sum of f, '
      + 'minus the mean squared.',
    'Standard deviation is the square root of the variance.',
    'Check that the variance is positive and the mean lies inside the data '
      + 'range.',
    'If asked which average is appropriate, give the reason as well as the '
      + 'name.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Find the mean, median and mode of 4, 7, 7, 9, 13.',
      steps: [
        'Total is 40, and there are 5 values.',
        'They are already in order, so the middle one is the third.',
        '7 occurs twice and nothing else repeats.',
      ],
      answer: 'Mean 8, median 7, mode 7.',
    },
    {
      level: 4,
      ask: 'The daily takings of five traders, in cedis, '
        + 'are 80, 90, 100, 110 and 2000. '
        + 'Find the mean and the median, '
        + 'and say which better describes the group.',
      steps: [
        'Total is 2380, over 5 values, so the mean is 476.',
        'In order, the middle value is 100.',
        'Four of the five traders take between 80 and 110.',
      ],
      answer: 'Mean 476 cedis, median 100 cedis. '
        + 'The median describes the group better, '
        + 'because the single value of 2000 pulls the mean '
        + 'far above every other trader, '
        + 'so the mean describes none of them.',
    },
    {
      level: 4,
      ask: 'For the grouped data '
        + 'class 10 to 19 with frequency 3, '
        + 'class 20 to 29 with frequency 5, '
        + 'class 30 to 39 with frequency 2, '
        + 'find the mean.',
      steps: [
        'Midpoints: 14.5, 24.5, 34.5.',
        'f x: 3 times 14.5 is 43.5; '
          + '5 times 24.5 is 122.5; '
          + '2 times 34.5 is 69.',
        'Sum of f x is 235. Sum of f is 10.',
      ],
      answer: 'The mean is 23.5. '
        + 'Taking the midpoints as 15, 25 and 35 '
        + 'would give 24, which loses the accuracy mark.',
    },
    {
      level: 5,
      ask: 'For the same data, find the standard deviation.',
      steps: [
        'x squared: 210.25, 600.25, 1190.25.',
        'f x squared: 3 times 210.25 is 630.75; '
          + '5 times 600.25 is 3001.25; '
          + '2 times 1190.25 is 2380.5.',
        'Sum of f x squared is 6012.5.',
        'Mean of the squares: 6012.5 over 10, which is 601.25.',
        'Mean squared: 23.5 squared, which is 552.25.',
        'Variance: 601.25 minus 552.25, which is 49.',
      ],
      answer: 'The standard deviation is the square root of 49, which is 7. '
        + 'Note that f x squared means x is squared first '
        + 'and then multiplied by f. '
        + 'Squaring the f x column instead would give a quite different and '
        + 'wrong total. '
        + 'A positive variance confirms the two terms were subtracted the '
        + 'right way round.',
    },
  ],

  traps: [
    {
      mistake: 'Taking the midpoint of the class 10 to 19 as 15.',
      why: 'Average the boundaries: 10 plus 19, over 2, which is 14.5. '
        + 'Half a unit out on every class shifts the mean.',
    },
    {
      mistake: 'Squaring the f x column to get f x squared.',
      why: 'Square x first, then multiply by f. '
        + 'For f equal 3 and x equal 4 it is 48, not 144.',
    },
    {
      mistake: 'Getting a negative variance.',
      why: 'The two terms were subtracted the wrong way round. '
        + 'It is the mean of the squares minus the square of the mean.',
    },
    {
      mistake: 'Reporting the mean for data with one extreme value.',
      why: 'Every value enters the mean, so one large value drags it. '
        + 'The median is the honest measure there, and you must say why.',
    },
  ],

  extension:
    'The standard deviation becomes powerful once the data is roughly '
    + 'symmetric and bell shaped. '
    + 'Then about 68 per cent of the values lie within one standard '
    + 'deviation of the mean, '
    + 'and about 95 per cent within two. '
    + 'So a mean of 23.5 with a standard deviation of 7 '
    + 'says most of the readings are between 16.5 and 30.5, '
    + 'which is far more useful than the mean alone. '
    + 'This is the idea behind a quality control chart in a factory: '
    + 'a reading more than three standard deviations out '
    + 'is treated as a fault rather than as chance.',

  questions: [
    {
      id: 'desc-1',
      ask: 'The mean of 2, 4, 6, 8 is:',
      kind: 'numeric',
      options: [],
      answer: '5',
      teach: 'The total is 20, over 4 values.',
      level: 2,
    },
    {
      id: 'desc-2',
      ask: 'The midpoint of the class 20 to 29 is:',
      kind: 'numeric',
      options: [],
      answer: '24.5',
      teach: 'Average the boundaries: 20 plus 29, over 2.',
      level: 3,
    },
    {
      id: 'desc-3',
      ask: 'For incomes with a few very large values, '
        + 'the better measure of location is the:',
      kind: 'choice',
      options: ['median', 'mean', 'range'],
      answer: 'median',
      teach: 'The mean is dragged by the extreme values. '
        + 'The median depends only on position.',
      level: 4,
    },
    {
      id: 'desc-4',
      ask: 'Why is the standard deviation used rather than the variance '
        + 'when reporting spread?',
      kind: 'choice',
      options: [
        'It is in the same units as the data',
        'It is always smaller',
        'It is easier to calculate',
      ],
      answer: 'It is in the same units as the data',
      teach: 'The variance is in squared units, such as cedis squared, '
        + 'which means nothing to a reader. '
        + 'The square root restores the unit.',
      level: 5,
    },
    {
      id: 'desc-5',
      ask: 'If the mean of the squares is 601.25 and the mean is 23.5, '
        + 'the variance is:',
      kind: 'numeric',
      options: [],
      answer: '49',
      teach: '601.25 minus 23.5 squared, which is 601.25 minus 552.25.',
      level: 5,
    },
  ],
})
