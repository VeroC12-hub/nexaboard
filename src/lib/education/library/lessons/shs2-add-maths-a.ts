/**
 * Stored lessons for SHS 2 Additional Mathematics: algebraic expansion,
 * inequalities, the circle, and trigonometry.
 *
 * Written at about grade 9 to 10, which is inside the SHS expectation of
 * 10 to 12.
 *
 * ── What Additional Mathematics asks that Core does not ──────────────────
 *
 * Proof, and the handling of a general case. Core Mathematics asks for an
 * answer; Additional Mathematics asks for a method that works for every
 * value and for a line of argument an examiner can follow. So these
 * lessons are written around the layout of the working rather than the
 * arithmetic: which side of an identity you are allowed to touch, where
 * the critical values of an inequality come from, and why a general term
 * is quicker than an expansion.
 *
 * ── The one habit that runs through all six ──────────────────────────────
 *
 * Do not solve by rearranging both sides at once. In an identity you work
 * on one side only. In a rational inequality you never multiply up by
 * something whose sign you do not know. In a trigonometric equation you
 * find the first solution and then generate the rest from the quadrant
 * rule rather than from the calculator. Each of those is the same
 * discipline: change one thing at a time, and keep a record of what you
 * are allowed to assume.
 *
 * ── Notation ─────────────────────────────────────────────────────────────
 *
 * Plain words and ASCII, as everywhere here: x squared, the square root
 * of, sin squared A plus cos squared A equals 1. The renderer shows plain
 * text and a learner has to be able to read it aloud.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── partial fractions ──────────────────────────────────────────────── */

teach({
  topicId: 'partial-fractions',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A single fraction with a factorised denominator '
      + 'can be split into a sum of simpler fractions. '
      + 'Factorise the denominator first. '
      + 'Write one fraction for each factor, '
      + 'with an unknown on top. '
      + 'Multiply through by the whole denominator '
      + 'and then substitute the values of x '
      + 'that make each factor zero, '
      + 'because each one kills all but a single unknown.',
    method: [
      'Factorise the denominator completely.',
      'Write the correct form, with one term for each factor.',
      'Clear the fractions and substitute the roots of the factors.',
    ],
  },

  idea:
    'Resolving into partial fractions '
    + 'is the reverse of adding fractions. '
    + 'Given a rational expression, '
    + 'the aim is to write it as a sum of fractions '
    + 'with simpler denominators. '
    + 'The form depends on the factors of the denominator. '
    + 'For distinct linear factors, '
    + 'such as (x minus 1)(x plus 2), '
    + 'write A over (x minus 1) plus B over (x plus 2). '
    + 'For a repeated linear factor, '
    + 'such as (x minus 1) squared, '
    + 'write A over (x minus 1) plus B over (x minus 1) squared, '
    + 'because one term alone cannot produce every possible numerator. '
    + 'For an irreducible quadratic factor, '
    + 'such as x squared plus 1, '
    + 'write the numerator as A x plus B, '
    + 'since the top must be able to carry a term in x. '
    + 'A proper fraction has a numerator of lower degree '
    + 'than its denominator. '
    + 'An improper one must be divided out first, '
    + 'giving a polynomial plus a proper fraction.',

  mechanism:
    'Two decisions settle every question in this topic, '
    + 'and the first is the form. '
    + 'The form is not a convention; '
    + 'it is forced by counting. '
    + 'A denominator of two distinct linear factors '
    + 'needs two unknowns on top, '
    + 'because the general numerator of a proper fraction over it '
    + 'has two coefficients to match. '
    + 'A repeated factor needs two terms for the same reason: '
    + 'A over (x minus 1) alone, '
    + 'put over (x minus 1) squared, '
    + 'can only produce a numerator that is a multiple of (x minus 1), '
    + 'which is not general enough. '
    + 'And a quadratic factor needs A x plus B on top, '
    + 'not a single constant, '
    + 'because a proper fraction over a quadratic '
    + 'may have a numerator with an x in it. '
    + 'So the rule to write down is: '
    + 'one unknown for every power of x '
    + 'that the numerator could have, '
    + 'and that count always matches '
    + 'the degree of the denominator. '
    + 'A learner who starts with the wrong form '
    + 'cannot be rescued by any amount of algebra afterwards, '
    + 'which is why the form is written before anything is multiplied. '
    + 'The second decision is how to find the unknowns, '
    + 'and there are two methods worth knowing '
    + 'because each is faster in a different case. '
    + 'Substitution is the quick one. '
    + 'Multiply both sides by the whole denominator, '
    + 'which clears every fraction, '
    + 'and then substitute the value of x '
    + 'that makes one factor zero. '
    + 'That value kills every term containing that factor, '
    + 'leaving one unknown on its own. '
    + 'For 5x minus 1 over (x minus 1)(x plus 2), '
    + 'clearing gives 5x minus 1 equals A(x plus 2) plus B(x minus 1). '
    + 'Put x equals 1: 4 equals 3A, so A is four thirds. '
    + 'Put x equals minus 2: minus 11 equals minus 3B, '
    + 'so B is eleven thirds. '
    + 'Two substitutions and no simultaneous equations at all. '
    + 'This is why the roots of the factors are the values to choose, '
    + 'and choosing any other value of x '
    + 'leaves you with two unknowns and more work. '
    + 'Comparing coefficients is the other method, '
    + 'and it is needed when substitution cannot finish the job, '
    + 'which happens with a repeated factor or a quadratic one: '
    + 'there are not enough roots to kill everything. '
    + 'Then expand both sides, '
    + 'collect the terms in each power of x, '
    + 'and set the coefficients equal. '
    + 'In practice the best approach is to mix them: '
    + 'substitute the roots you have '
    + 'to get the unknowns you can, '
    + 'then compare the coefficient of the highest power '
    + 'to get the rest. '
    + 'That is almost always the shortest route, '
    + 'and it is worth saying in the working '
    + 'which method you are using at each step. '
    + 'One last check, '
    + 'and it is free. '
    + 'Add your partial fractions back together. '
    + 'If they do not give the original expression, '
    + 'something is wrong, '
    + 'and you will usually see which unknown it is '
    + 'from which coefficient does not match. '
    + 'Since the whole topic is the reverse of adding fractions, '
    + 'adding them is the natural check.',

  recap:
    'You have added two algebraic fractions '
    + 'by putting them over a common denominator. '
    + 'This runs that process backwards, '
    + 'and it is the step that makes several later topics possible.',

  method: [
    'Check whether the fraction is proper; if not, divide out first.',
    'Factorise the denominator completely.',
    'Write the correct form: one term for each factor, with the right numerator.',
    'For a repeated factor, include both powers.',
    'For a quadratic factor, put A x plus B on top.',
    'Multiply both sides by the whole denominator.',
    'Substitute each value of x that makes a factor zero.',
    'If unknowns remain, compare the coefficients of the highest power.',
    'Check by adding your fractions back together.',
  ],

  worked: [
    {
      level: 4,
      ask: 'Resolve 5x minus 1 over (x minus 1)(x plus 2) '
        + 'into partial fractions.',
      steps: [
        'Form: A over (x minus 1) plus B over (x plus 2).',
        'Clear: 5x minus 1 equals A(x plus 2) plus B(x minus 1).',
        'Put x equals 1: 4 equals 3A, so A equals four thirds.',
        'Put x equals minus 2: minus 11 equals minus 3B, '
          + 'so B equals eleven thirds.',
      ],
      answer: 'Four thirds over (x minus 1) '
        + 'plus eleven thirds over (x plus 2). '
        + 'Each substitution killed one term, '
        + 'which is why the roots of the factors are the values to use.',
    },
    {
      level: 5,
      ask: 'Give the correct form for '
        + '3x plus 2 over (x minus 1)(x minus 1)(x plus 4), '
        + 'and say why.',
      steps: [
        'The denominator has a repeated factor and a distinct one.',
        'A over (x minus 1) alone cannot give a general numerator '
          + 'over the square.',
        'So both powers are needed.',
      ],
      answer: 'A over (x minus 1) '
        + 'plus B over (x minus 1) squared '
        + 'plus C over (x plus 4). '
        + 'Three unknowns, which matches the degree three denominator. '
        + 'Leaving out the squared term '
        + 'would restrict the numerator to a multiple of (x minus 1).',
    },
    {
      level: 5,
      ask: 'Resolve 7 over (x minus 3)(x plus 4).',
      steps: [
        'Form: A over (x minus 3) plus B over (x plus 4).',
        'Clear: 7 equals A(x plus 4) plus B(x minus 3).',
        'Put x equals 3: 7 equals 7A, so A equals 1.',
        'Put x equals minus 4: 7 equals minus 7B, so B equals minus 1.',
      ],
      answer: '1 over (x minus 3) minus 1 over (x plus 4). '
        + 'Check by adding: '
        + '(x plus 4) minus (x minus 3) is 7, over the same denominator.',
    },
    {
      level: 6,
      ask: 'Resolve 4x squared plus 2x plus 2 '
        + 'over (x plus 1)(x squared plus 1), '
        + 'saying which method you use at each step.',
      steps: [
        'Form: A over (x plus 1) plus (Bx plus C) over (x squared plus '
          + '1), since the quadratic needs a numerator in x.',
        'Clear: 4x squared plus 2x plus 2 equals '
          + 'A(x squared plus 1) plus (Bx plus C)(x plus 1).',
        'Substitute x equals minus 1: 4 minus 2 plus 2 equals 2A, '
          + 'so A equals 2.',
        'Compare the coefficient of x squared: 4 equals A plus B, '
          + 'so B equals 2.',
        'Compare the constant terms: 2 equals A plus C, so C equals 0.',
      ],
      answer: '2 over (x plus 1) plus 2x over (x squared plus 1). '
        + 'One substitution and two coefficient comparisons, '
        + 'which is the shortest route: '
        + 'the quadratic factor has no real root to substitute, '
        + 'so substitution alone could not finish.',
    },
  ],

  traps: [
    {
      mistake: 'Writing one term for a repeated factor.',
      why: '(x minus 1) squared needs both A over (x minus 1) '
        + 'and B over (x minus 1) squared, '
        + 'or the numerator cannot be general.',
    },
    {
      mistake: 'Putting a single constant over a quadratic factor.',
      why: 'A proper fraction over a quadratic may have an x on top, '
        + 'so the numerator is A x plus B.',
    },
    {
      mistake: 'Substituting convenient values such as 0 and 1.',
      why: 'Substitute the roots of the factors. '
        + 'Each one kills all but a single unknown.',
    },
    {
      mistake: 'Starting work on an improper fraction.',
      why: 'If the numerator is of equal or higher degree, '
        + 'divide out first and resolve the proper remainder.',
    },
  ],

  extension:
    'The reason this topic exists '
    + 'is that it makes other things possible. '
    + 'One over (x minus 1)(x plus 2) '
    + 'cannot be integrated as it stands, '
    + 'and as the sum of two simple fractions '
    + 'it integrates in one line. '
    + 'The same split makes a sum collapse: '
    + 'the terms of one over n(n plus 1), '
    + 'written as one over n minus one over (n plus 1), '
    + 'cancel in pairs down a long sum, '
    + 'leaving only the first and the last. '
    + 'So partial fractions are not an exercise in algebra for its own '
    + 'sake. '
    + 'They are the move that turns an intractable expression '
    + 'into two manageable ones.',

  figure: {
    alt: 'A diagram showing the splitting of a fraction and the method '
      + 'for finding the unknowns. At the top the single fraction five x '
      + 'minus one over the product of x minus one and x plus two, with '
      + 'an arrow down to the form A over x minus one plus B over x plus '
      + 'two, labelled one term for each factor. Below that the cleared '
      + 'equation five x minus one equals A times x plus two plus B '
      + 'times x minus one, with two branches. The left branch '
      + 'substitutes x equal to one, and the term containing B is shown '
      + 'struck through because x minus one becomes zero, leaving four '
      + 'equals three A. The right branch substitutes x equal to minus '
      + 'two, and the term containing A is struck through because x plus '
      + 'two becomes zero, leaving minus eleven equals minus three B. A '
      + 'note says that each root kills all but one unknown, which is '
      + 'why those are the values to choose and not zero or one. To the '
      + 'side a short table gives the correct form for each kind of '
      + 'factor.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* original */
      + '<rect x="40" y="30" width="260" height="42" rx="6" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="52" y="56" font-size="12" fill="currentColor">(5x - 1) / ((x - 1)(x + 2))</text>'
      + '<path d="M170 72v24" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M164 88l6 10 6-10Z" fill="#0f8a4d"/>'
      /* form */
      + '<rect x="40" y="100" width="260" height="42" rx="6" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="52" y="126" font-size="12" fill="currentColor">A/(x - 1)  +  B/(x + 2)</text>'
      + '<text x="306" y="120" font-size="10" fill="#0f8a4d">one term for each factor,</text>'
      + '<text x="306" y="134" font-size="10" fill="#0f8a4d">written before anything is multiplied</text>'
      + '<path d="M170 142v24" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M164 158l6 10 6-10Z" fill="#0f8a4d"/>'
      /* cleared */
      + '<rect x="40" y="170" width="380" height="42" rx="6" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="52" y="196" font-size="12" fill="currentColor">5x - 1  =  A(x + 2)  +  B(x - 1)</text>'
      /* branches */
      + '<g stroke="#0f8a4d" stroke-width="2" fill="none">'
      + '<path d="M120 212v26"/><path d="M330 212v26"/>'
      + '</g>'
      + '<g fill="#0f8a4d">'
      + '<path d="M114 230l6 10 6-10Z"/><path d="M324 230l6 10 6-10Z"/>'
      + '</g>'
      + '<text x="40" y="258" font-size="11" fill="#0f8a4d">put x = 1</text>'
      + '<text x="40" y="278" font-size="11" fill="currentColor">4 = 3A + B(0)</text>'
      + '<path d="M118 274h58" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="40" y="298" font-size="11" fill="#0f8a4d">so A = 4/3</text>'
      + '<text x="270" y="258" font-size="11" fill="#0f8a4d">put x = -2</text>'
      + '<text x="270" y="278" font-size="11" fill="currentColor">-11 = A(0) - 3B</text>'
      + '<path d="M312 274h42" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="270" y="298" font-size="11" fill="#0f8a4d">so B = 11/3</text>'
      + '<text x="40" y="330" font-size="11" fill="currentColor">each root of a factor kills all but one unknown, which is why those are the values</text>'
      + '<text x="40" y="346" font-size="11" fill="currentColor">to choose, and not a convenient 0 or 1</text>'
      /* forms table */
      + '<path d="M450 170h170" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="450" y="164" font-size="10" fill="#0f8a4d">the form each factor forces</text>'
      + '<text x="450" y="188" font-size="9" fill="currentColor">(x - a)</text>'
      + '<text x="530" y="188" font-size="9" fill="currentColor">A/(x - a)</text>'
      + '<text x="450" y="208" font-size="9" fill="currentColor">(x - a) squared</text>'
      + '<text x="450" y="220" font-size="9" fill="currentColor">needs both powers</text>'
      + '<text x="450" y="242" font-size="9" fill="currentColor">x squared + 1</text>'
      + '<text x="530" y="242" font-size="9" fill="currentColor">(Bx + C)/...</text>'
      + '<text x="450" y="266" font-size="9" fill="#0f8a4d">count the unknowns: it always</text>'
      + '<text x="450" y="278" font-size="9" fill="#0f8a4d">matches the degree below</text>'
      + '<text x="40" y="382" font-size="11" fill="#0f8a4d">check by adding your fractions back together: the topic is the reverse of adding, so adding is the check</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The form each kind of factor forces, and why',
      columns: ['Factor in the denominator', 'Terms to write', 'Why that many'],
      rows: [
        ['A distinct linear factor, (x - a)', 'A over (x - a)', 'One coefficient to match'],
        ['A repeated linear factor, (x - a) squared', 'A over (x - a) and B over (x - a) squared', 'One term alone forces the numerator to be a multiple of (x - a)'],
        ['A cubed linear factor', 'Three terms, one for each power', 'The same reason, one step further'],
        ['An irreducible quadratic, x squared + 1', '(A x + B) over the quadratic', 'A proper fraction over a quadratic may have an x on top'],
      ],
      note: 'The number of unknowns always equals the degree of the '
        + 'denominator. That count is the quickest check that the form '
        + 'is right before any algebra is done.',
    },
  ],

  questions: [
    {
      id: 'pf-1',
      ask: 'For a denominator of (x - 2)(x + 5), how many unknowns are '
        + 'needed?',
      kind: 'numeric',
      options: [],
      answer: '2',
      teach: 'One for each distinct linear factor, '
        + 'which matches the degree two denominator.',
      level: 4,
    },
    {
      id: 'pf-2',
      ask: 'For (x - 1) squared, the correct form is:',
      kind: 'choice',
      options: [
        'A over (x - 1) plus B over (x - 1) squared',
        'A over (x - 1) squared only',
        'A over (x - 1) only',
      ],
      answer: 'A over (x - 1) plus B over (x - 1) squared',
      teach: 'One term alone would force the numerator to be a multiple '
        + 'of (x - 1), which is not general.',
      level: 5,
    },
    {
      id: 'pf-3',
      ask: 'Over x squared plus 1, the numerator should be written as:',
      kind: 'choice',
      options: ['A x plus B', 'A only', 'A x only'],
      answer: 'A x plus B',
      teach: 'A proper fraction over a quadratic may have a term in x.',
      level: 5,
    },
    {
      id: 'pf-4',
      ask: 'To find A in 5x - 1 = A(x + 2) + B(x - 1), substitute x '
        + 'equal to:',
      kind: 'numeric',
      options: [],
      answer: '1',
      teach: 'It makes (x - 1) zero, which kills the B term entirely.',
      level: 4,
    },
    {
      id: 'pf-5',
      ask: 'An improper fraction must first be:',
      kind: 'choice',
      options: [
        'Divided out, giving a polynomial plus a proper fraction',
        'Factorised on top',
        'Multiplied by its denominator',
      ],
      answer: 'Divided out, giving a polynomial plus a proper fraction',
      teach: 'Only a proper fraction can be resolved into the forms '
        + 'above.',
      level: 6,
    },
  ],
})

/* ── the binomial theorem ──────────────────────────────────────────── */

teach({
  topicId: 'binomial-theorem',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The binomial theorem expands (a plus b) to the power n '
      + 'without multiplying it out. '
      + 'The coefficients are the numbers of ways '
      + 'of choosing the b terms, '
      + 'written n choose r. '
      + 'The general term is n choose r, times a to the power (n minus r), '
      + 'times b to the power r. '
      + 'To find one particular term, '
      + 'set r so that the power is the one asked for, '
      + 'and never expand the whole thing.',
    method: [
      'Write the general term before anything else.',
      'Set r so that the power of x is the one wanted.',
      'Substitute that r and evaluate the one term.',
    ],
  },

  idea:
    'A binomial is an expression of two terms, such as a plus b. '
    + 'Raising it to a power '
    + 'gives an expansion whose coefficients '
    + 'follow a pattern. '
    + 'The coefficients of (a plus b) to the power n '
    + 'are the entries of row n of Pascal’s triangle, '
    + 'where each entry is the sum of the two above it. '
    + 'They are also written n choose r, '
    + 'which is n factorial divided by '
    + 'r factorial times (n minus r) factorial, '
    + 'and that is the number of ways '
    + 'of choosing r things from n. '
    + 'The expansion of (a plus b) to the power n '
    + 'has n plus 1 terms. '
    + 'The general term, counting r from 0, '
    + 'is n choose r, '
    + 'times a to the power (n minus r), '
    + 'times b to the power r. '
    + 'The powers of a fall as the powers of b rise, '
    + 'and in every term they add to n. '
    + 'For (1 plus x) to the power n with n a positive whole number '
    + 'the expansion is finite. '
    + 'For a fractional or negative n '
    + 'it continues for ever '
    + 'and is valid only when x lies between minus 1 and 1.',

  mechanism:
    'The whole value of this theorem '
    + 'is that it lets you find one term '
    + 'without finding any of the others, '
    + 'and that is the skill the examination tests. '
    + 'A question asks for the coefficient of x to the power 5 '
    + 'in the expansion of (2 plus 3x) to the power 8. '
    + 'Expanding all nine terms '
    + 'is twenty minutes of arithmetic and several chances to slip. '
    + 'The general term gives it in three lines. '
    + 'Write the general term: '
    + '8 choose r, times 2 to the power (8 minus r), '
    + 'times (3x) to the power r. '
    + 'The power of x in that term is r, '
    + 'so set r equal to 5. '
    + 'Then evaluate: 8 choose 5 is 56, '
    + '2 cubed is 8, '
    + 'and 3 to the power 5 is 243. '
    + 'The coefficient is 56 times 8 times 243. '
    + 'So the first move in every question of this kind '
    + 'is to write the general term before anything else, '
    + 'and the second is to ask which value of r '
    + 'gives the power wanted. '
    + 'Learners who expand are not making an error; '
    + 'they are doing the question the long way '
    + 'and will usually run out of time or accuracy. '
    + 'There are three places where the arithmetic goes wrong, '
    + 'and all three are avoidable. '
    + 'First, the whole of each bracket carries the power. '
    + 'In (2 plus 3x) to the power 8, '
    + 'the term is (3x) to the power r, '
    + 'which is 3 to the power r times x to the power r. '
    + 'Learners write 3 times x to the power r '
    + 'and lose a factor of hundreds. '
    + 'Writing brackets round the whole second term '
    + 'every time prevents it. '
    + 'Second, the counting of r. '
    + 'With r starting at 0, '
    + 'the first term has r equal to 0 '
    + 'and the rth term in ordinary counting '
    + 'has r equal to one less. '
    + 'So if a question asks for the fourth term, '
    + 'r is 3, not 4. '
    + 'Writing out the first three terms with their r values beside them '
    + 'settles it in ten seconds '
    + 'and prevents a whole wrong answer. '
    + 'Third, a negative second term. '
    + 'In (1 minus 2x) to the power 6, '
    + 'the second term is minus 2x, '
    + 'so (minus 2x) to the power r '
    + 'is positive when r is even and negative when r is odd. '
    + 'Keep the minus sign inside the bracket '
    + 'and the signs look after themselves. '
    + 'Last, the condition on the infinite case, '
    + 'because it is a mark and it is nearly always forgotten. '
    + 'When n is not a positive whole number, '
    + 'the expansion of (1 plus x) to the power n never ends, '
    + 'and it is only equal to the function '
    + 'when the absolute value of x is less than 1. '
    + 'So an expansion of (1 plus x) to the power one half, '
    + 'used to approximate the square root of 1.02, '
    + 'is valid because 0.02 is small, '
    + 'and the same expansion used for the square root of 5 '
    + 'is nonsense. '
    + 'State the condition whenever you use a non integer power. '
    + 'And note why the approximation works so well '
    + 'for small x: '
    + 'the terms carry rising powers of x, '
    + 'so with x equal to 0.02 '
    + 'the third term is already of order 0.0004, '
    + 'and two or three terms give several decimal places.',

  recap:
    'You have expanded (a plus b) squared and (a plus b) cubed '
    + 'by multiplying out, '
    + 'and you have met Pascal’s triangle. '
    + 'This gives a formula for any power, '
    + 'and more usefully, for any single term of it.',

  method: [
    'Identify a, b and n, keeping the whole of each term in brackets.',
    'Write the general term: n choose r, a to the power (n minus r), b to the power r.',
    'Ask which power of x is wanted.',
    'Set r so that the power of x matches.',
    'If a term number is asked for, remember r is one less than it.',
    'Substitute and evaluate that one term only.',
    'Keep any minus sign inside the bracket so the signs look after themselves.',
    'For a fractional or negative power, state the condition on x.',
  ],

  worked: [
    {
      level: 4,
      ask: 'Expand (1 plus x) to the power 4.',
      steps: [
        'Row 4 of Pascal’s triangle is 1, 4, 6, 4, 1.',
        'The powers of x run from 0 to 4.',
      ],
      answer: '1 plus 4x plus 6 x squared plus 4 x cubed plus x to the '
        + 'power 4. '
        + 'Five terms, which is n plus 1.',
    },
    {
      level: 5,
      ask: 'Find the coefficient of x to the power 5 '
        + 'in (2 plus 3x) to the power 8, '
        + 'without expanding.',
      steps: [
        'General term: 8 choose r, times 2 to the power (8 minus r), '
          + 'times (3x) to the power r.',
        'The power of x is r, so set r equal to 5.',
        '8 choose 5 is 56.',
        '2 to the power 3 is 8, and 3 to the power 5 is 243.',
        '56 times 8 is 448, and 448 times 243.',
      ],
      answer: '108864. '
        + 'The whole of 3x carried the power, '
        + 'which is where the factor of 243 came from.',
    },
    {
      level: 5,
      ask: 'Find the fourth term of (1 minus 2x) to the power 6.',
      steps: [
        'The fourth term has r equal to 3, not 4.',
        'General term: 6 choose r, times (minus 2x) to the power r.',
        '6 choose 3 is 20.',
        '(minus 2) cubed is minus 8.',
      ],
      answer: 'Minus 160 x cubed. '
        + 'Two traps were avoided: '
        + 'r is one less than the term number, '
        + 'and the minus sign was kept inside the bracket, '
        + 'so the odd power made it negative.',
    },
    {
      level: 6,
      ask: 'Use the binomial expansion to estimate the square root of '
        + '1.02 to four decimal places, '
        + 'and state the condition that makes it valid.',
      steps: [
        'The square root of 1.02 is (1 plus 0.02) to the power one half.',
        'Expansion: 1 plus one half x minus one eighth x squared, '
          + 'and so on.',
        'With x equal to 0.02: 1 plus 0.01 minus 0.00005.',
        'The next term is of order 0.0000005, '
          + 'which does not affect four places.',
      ],
      answer: 'About 1.0100 to four decimal places, '
        + 'or 1.00995 to five. '
        + 'The expansion is valid because the absolute value of x, '
        + 'here 0.02, is less than 1. '
        + 'The same expansion used for the square root of 5, '
        + 'where x would be 4, would be meaningless, '
        + 'and that condition is a mark on its own.',
    },
  ],

  traps: [
    {
      mistake: 'Writing 3 times x to the power r instead of (3x) to the '
        + 'power r.',
      why: 'The whole of the second term carries the power. '
        + 'Keep brackets round it every time.',
    },
    {
      mistake: 'Taking r equal to the term number.',
      why: 'r starts at 0, so the fourth term has r equal to 3. '
        + 'Write out the first few with their r values.',
    },
    {
      mistake: 'Losing the sign in (1 minus 2x) to the power n.',
      why: 'Keep the minus inside the bracket. '
        + 'Even powers come out positive and odd ones negative.',
    },
    {
      mistake: 'Using an infinite expansion without stating the '
        + 'condition.',
      why: 'For a fractional or negative power '
        + 'it is valid only when the absolute value of x is less than 1, '
        + 'and that statement carries a mark.',
    },
  ],

  extension:
    'The coefficients are the answer to a counting question, '
    + 'and seeing that explains why they are what they are. '
    + 'In (a plus b) to the power 4, '
    + 'you are multiplying four brackets together '
    + 'and choosing either a or b from each. '
    + 'The number of ways of ending up with exactly two b terms '
    + 'is the number of ways of choosing 2 of the 4 brackets, '
    + 'which is 6, '
    + 'and that is the coefficient of a squared b squared. '
    + 'So the binomial coefficients and the combinations '
    + 'of the counting topic are the same numbers, '
    + 'arrived at from two directions, '
    + 'and either one can be used to check the other.',

  figure: {
    alt: 'Two parts. The upper part shows Pascal’s triangle for rows '
      + 'zero to six, with each entry equal to the sum of the two above '
      + 'it, and two of those additions marked with short arrows to show '
      + 'the rule. Row four is highlighted and its entries one, four, '
      + 'six, four, one are matched beneath to the expansion of one plus '
      + 'x to the power four. The lower part shows the general term '
      + 'written out as n choose r, times a to the power n minus r, '
      + 'times b to the power r, with three labels beneath it: the first '
      + 'notes that the two powers always add to n, the second that r '
      + 'starts at zero so the fourth term has r equal to three, and the '
      + 'third that the whole of b carries the power, so in two plus '
      + 'three x the term is three x all to the power r and not three '
      + 'times x to the power r. Beside it a worked line finds the '
      + 'coefficient of x to the power five in two plus three x to the '
      + 'power eight by setting r to five, with no expansion at all.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* pascal */
      + '<text x="200" y="40" font-size="12" fill="currentColor">1</text>'
      + '<text x="184" y="62" font-size="12" fill="currentColor">1</text>'
      + '<text x="216" y="62" font-size="12" fill="currentColor">1</text>'
      + '<text x="168" y="84" font-size="12" fill="currentColor">1</text>'
      + '<text x="200" y="84" font-size="12" fill="currentColor">2</text>'
      + '<text x="232" y="84" font-size="12" fill="currentColor">1</text>'
      + '<text x="152" y="106" font-size="12" fill="currentColor">1</text>'
      + '<text x="184" y="106" font-size="12" fill="currentColor">3</text>'
      + '<text x="216" y="106" font-size="12" fill="currentColor">3</text>'
      + '<text x="248" y="106" font-size="12" fill="currentColor">1</text>'
      + '<text x="136" y="128" font-size="13" fill="#0f8a4d">1</text>'
      + '<text x="168" y="128" font-size="13" fill="#0f8a4d">4</text>'
      + '<text x="200" y="128" font-size="13" fill="#0f8a4d">6</text>'
      + '<text x="232" y="128" font-size="13" fill="#0f8a4d">4</text>'
      + '<text x="264" y="128" font-size="13" fill="#0f8a4d">1</text>'
      + '<text x="120" y="150" font-size="12" fill="currentColor">1</text>'
      + '<text x="152" y="150" font-size="12" fill="currentColor">5</text>'
      + '<text x="184" y="150" font-size="12" fill="currentColor">10</text>'
      + '<text x="216" y="150" font-size="12" fill="currentColor">10</text>'
      + '<text x="248" y="150" font-size="12" fill="currentColor">5</text>'
      + '<text x="280" y="150" font-size="12" fill="currentColor">1</text>'
      /* addition arrows */
      + '<g stroke="#0f8a4d" stroke-width="1" fill="none">'
      + '<path d="M172 110L198 120"/><path d="M220 110L204 120"/>'
      + '</g>'
      + '<text x="300" y="100" font-size="9" fill="#0f8a4d">each entry is the sum of</text>'
      + '<text x="300" y="112" font-size="9" fill="#0f8a4d">the two above it</text>'
      + '<text x="300" y="132" font-size="10" fill="#0f8a4d">row 4: the coefficients of</text>'
      + '<text x="300" y="144" font-size="10" fill="#0f8a4d">(1 + x) to the power 4</text>'
      + '<text x="60" y="180" font-size="11" fill="currentColor">1  +  4x  +  6x squared  +  4x cubed  +  x to the power 4</text>'
      + '<text x="60" y="196" font-size="9" fill="#0f8a4d">five terms, which is n + 1</text>'
      /* general term */
      + '<rect x="40" y="220" width="320" height="44" rx="6" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="56" y="248" font-size="13" fill="currentColor">(n choose r) x a^(n - r) x b^r</text>'
      + '<text x="40" y="284" font-size="10" fill="currentColor">the two powers always add to n</text>'
      + '<text x="40" y="302" font-size="10" fill="#0f8a4d">r starts at 0, so the FOURTH term has r = 3</text>'
      + '<text x="40" y="320" font-size="10" fill="#0f8a4d">the whole of b carries the power: (3x)^r, never 3 x^r</text>'
      /* worked */
      + '<path d="M390 220h220" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="390" y="214" font-size="10" fill="#0f8a4d">coefficient of x^5 in (2 + 3x)^8</text>'
      + '<text x="390" y="240" font-size="10" fill="currentColor">term: (8 choose r) 2^(8-r) (3x)^r</text>'
      + '<text x="390" y="258" font-size="10" fill="currentColor">the power of x is r, so set r = 5</text>'
      + '<text x="390" y="276" font-size="10" fill="currentColor">56 x 2^3 x 3^5</text>'
      + '<text x="390" y="294" font-size="10" fill="currentColor">= 56 x 8 x 243</text>'
      + '<text x="390" y="312" font-size="11" fill="#0f8a4d">= 108864</text>'
      + '<text x="390" y="334" font-size="9" fill="#0f8a4d">three lines, and no expansion at all</text>'
      + '<text x="40" y="368" font-size="11" fill="currentColor">for a fractional or negative power the expansion never ends, and is valid only when</text>'
      + '<text x="40" y="384" font-size="11" fill="currentColor">the absolute value of x is less than 1: state that condition, because it is a mark</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Finding one term without expanding: which r to use',
      columns: ['The question asks for', 'Set r to', 'Reason'],
      rows: [
        ['The coefficient of x to the power 5', '5, if b contains x to the first power', 'The power of x in the general term is r'],
        ['The coefficient of x squared in (1 + x cubed) to the power n', 'No such term', 'Every power of x is a multiple of 3'],
        ['The fourth term', '3', 'r starts at 0, so r is one less than the term number'],
        ['The middle term of (a + b) to the power 8', '4', 'Nine terms, so the fifth is the middle, and r is 4'],
        ['The constant term', 'The r that makes the power of x zero', 'Solve for it; sometimes there is none'],
      ],
      note: 'The second row is worth reading twice. '
        + 'Asking which r gives the power wanted '
        + 'sometimes reveals that the term does not exist, '
        + 'and that is a complete answer.',
    },
  ],

  questions: [
    {
      id: 'bt-1',
      ask: 'How many terms are in the expansion of (a plus b) to the '
        + 'power 7?',
      kind: 'numeric',
      options: [],
      answer: '8',
      teach: 'n plus 1 terms, because r runs from 0 to n.',
      level: 4,
    },
    {
      id: 'bt-2',
      ask: 'For the fourth term of an expansion, r is:',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'r starts at 0, so it is one less than the term number.',
      level: 5,
    },
    {
      id: 'bt-3',
      ask: 'In (2 plus 3x) to the power 8, the general term contains:',
      kind: 'choice',
      options: [
        '(3x) to the power r',
        '3 times x to the power r',
        '3x times r',
      ],
      answer: '(3x) to the power r',
      teach: 'The whole of the second term carries the power, '
        + 'which is where a factor of hundreds comes from.',
      level: 5,
    },
    {
      id: 'bt-4',
      ask: 'What is 8 choose 5?',
      kind: 'numeric',
      options: [],
      answer: '56',
      teach: 'Which is also 8 choose 3, '
        + 'because choosing 5 to take is choosing 3 to leave.',
      level: 5,
    },
    {
      id: 'bt-5',
      ask: 'An expansion of (1 plus x) to the power one half is valid '
        + 'only when:',
      kind: 'choice',
      options: [
        'The absolute value of x is less than 1',
        'x is positive',
        'x is a whole number',
      ],
      answer: 'The absolute value of x is less than 1',
      teach: 'Otherwise the series does not converge. '
        + 'Stating the condition carries a mark.',
      level: 6,
    },
  ],
})

/* ── inequalities ──────────────────────────────────────────────────── */

teach({
  topicId: 'inequalities-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'For a quadratic inequality, make one side zero and factorise. '
      + 'Find the critical values, where each factor is zero. '
      + 'Those values cut the number line into regions. '
      + 'Inside each region the sign cannot change, '
      + 'so test one point in each. '
      + 'For a rational inequality, never multiply up by the '
      + 'denominator. '
      + 'Its sign is unknown, '
      + 'and multiplying by a negative reverses the inequality.',
    method: [
      'Make one side zero and factorise.',
      'Find the critical values, including where a denominator is zero.',
      'Test one point in each region and state the solution set.',
    ],
  },

  idea:
    'A quadratic inequality has the form '
    + 'a x squared plus b x plus c greater than 0, '
    + 'or with any of the four signs. '
    + 'A critical value is a value of x '
    + 'at which the expression is zero or undefined. '
    + 'Between two critical values the sign cannot change. '
    + 'To change sign, a continuous expression must pass through zero. '
    + 'A rational one may also jump, '
    + 'where its denominator is zero. '
    + 'So the critical values cut the line into regions, '
    + 'and in each region the sign is the same throughout. '
    + 'A solution set is written in set notation. '
    + 'An example is the set of x such that x is less than minus 2 '
    + 'or x is greater than 3. '
    + 'It can also be drawn on a number line. '
    + 'A filled circle shows an endpoint that is included, '
    + 'and an open circle one that is not.',

  mechanism:
    'Two mechanisms carry this topic, '
    + 'and the second is the one that separates '
    + 'a correct answer from a plausible one. '
    + 'The first is the sign table, '
    + 'and the reason it works is worth stating. '
    + 'A product of factors changes sign '
    + 'only where one of the factors changes sign, '
    + 'and a factor changes sign only at its own root. '
    + 'So find the roots, '
    + 'mark them on a line, '
    + 'and in each of the resulting regions test a single value. '
    + 'For (x plus 2)(x minus 3) greater than 0, '
    + 'the critical values are minus 2 and 3. '
    + 'Test x equal to minus 3: '
    + 'negative times negative is positive. '
    + 'Test x equal to 0: '
    + 'positive times negative is negative. '
    + 'Test x equal to 4: '
    + 'positive times positive is positive. '
    + 'So the solution is x less than minus 2 or x greater than 3. '
    + 'Three test values and the whole question is answered, '
    + 'with no sketching needed. '
    + 'The habit to avoid is treating it as an equation '
    + 'and writing x greater than minus 2 and x greater than 3, '
    + 'which is what comes of setting each factor greater than zero. '
    + 'That is wrong because the product can be positive '
    + 'when both factors are negative, '
    + 'which the method misses entirely. '
    + 'The sign table cannot miss it. '
    + 'The second mechanism is the rational inequality, '
    + 'and here there is one prohibition '
    + 'that has to be learned as a rule. '
    + 'Never multiply both sides by the denominator. '
    + 'Take (x plus 1) over (x minus 2) greater than 0. '
    + 'Multiplying by (x minus 2) '
    + 'gives x plus 1 greater than 0, so x greater than minus 1, '
    + 'which is wrong: '
    + 'x equal to 0 is in that set '
    + 'and gives 1 over minus 2, which is negative. '
    + 'The error is that (x minus 2) may be negative, '
    + 'and multiplying an inequality by a negative '
    + 'reverses it. '
    + 'Since you do not know the sign, '
    + 'you may not multiply. '
    + 'What you do instead is treat the numerator and the denominator '
    + 'as two factors '
    + 'and use the same sign table, '
    + 'because a quotient has the same sign as the product '
    + 'of the same two expressions. '
    + 'Critical values at minus 1 and 2, '
    + 'test in each region, '
    + 'and the answer is x less than minus 1 or x greater than 2. '
    + 'There is one extra point about the endpoints, '
    + 'and it is a mark. '
    + 'A value that makes the denominator zero '
    + 'can never be in the solution set, '
    + 'whatever the inequality sign, '
    + 'because the expression is undefined there. '
    + 'So in (x plus 1) over (x minus 2) '
    + 'greater than or equal to 0, '
    + 'the point x equal to minus 1 is included, '
    + 'since the expression is then zero, '
    + 'and x equal to 2 is excluded, '
    + 'even though the sign allows equality. '
    + 'Mark the first with a filled circle and the second with an open '
    + 'one, '
    + 'and say in words that x equal to 2 is excluded '
    + 'because the expression is undefined there. '
    + 'The other thing to get right is the connecting word. '
    + 'If the solution is two separate pieces, '
    + 'the word is or, '
    + 'and it is a union of two sets. '
    + 'If it is the single piece between two values, '
    + 'the word is and, '
    + 'and it is written minus 2 less than x less than 3. '
    + 'Writing and where or belongs '
    + 'describes the empty set, '
    + 'since no number is both less than minus 2 and greater than 3, '
    + 'and that is an answer which says the opposite of what was '
    + 'intended.',

  recap:
    'You have solved linear inequalities '
    + 'and know that dividing by a negative reverses the sign. '
    + 'This handles the quadratic and the rational cases, '
    + 'where the sign of the expression changes '
    + 'from region to region.',

  method: [
    'Rearrange so that one side is zero.',
    'Factorise, or find the numerator and denominator as two factors.',
    'Find every critical value: each root, and each zero of a denominator.',
    'Mark them on a number line, in order.',
    'Test one value in each region and record the sign.',
    'Read off the regions where the sign matches the inequality.',
    'Include an endpoint only if the sign allows equality and the expression is defined there.',
    'Write the solution with or between separate pieces and and for a single interval.',
  ],

  worked: [
    {
      level: 4,
      ask: 'Solve x squared minus x minus 6 greater than 0.',
      steps: [
        'Factorise: (x plus 2)(x minus 3) greater than 0.',
        'Critical values: minus 2 and 3.',
        'Test x equals minus 3: negative times negative is positive.',
        'Test x equals 0: positive times negative is negative.',
        'Test x equals 4: positive times positive is positive.',
      ],
      answer: 'x less than minus 2 or x greater than 3. '
        + 'The word is or, because the solution is two separate pieces.',
    },
    {
      level: 5,
      ask: 'Solve x squared minus x minus 6 less than 0, '
        + 'and say how the answer relates to the one above.',
      steps: [
        'The same factors and the same critical values.',
        'The sign table has already been built.',
        'The middle region is where the expression is negative.',
      ],
      answer: 'Minus 2 less than x less than 3. '
        + 'It is the middle region of the same table, '
        + 'so one sign table answers both questions. '
        + 'The word here is and, '
        + 'because the solution is a single interval.',
    },
    {
      level: 5,
      ask: 'Show why multiplying up is wrong for '
        + '(x plus 1) over (x minus 2) greater than 0, '
        + 'and solve it properly.',
      steps: [
        'Multiplying by (x minus 2) gives x greater than minus 1.',
        'Test x equals 0 in the original: 1 over minus 2 is negative, '
          + 'so 0 should not be a solution.',
        'The error is that (x minus 2) may be negative.',
        'Treat numerator and denominator as two factors instead.',
        'Critical values minus 1 and 2; test in each region.',
      ],
      answer: 'The multiplication is invalid because the sign of '
        + '(x minus 2) is unknown, '
        + 'and multiplying an inequality by a negative reverses it. '
        + 'Properly: x less than minus 1 or x greater than 2.',
    },
    {
      level: 6,
      ask: 'Solve (x plus 1) over (x minus 2) '
        + 'greater than or equal to 0, '
        + 'and state the solution set exactly.',
      steps: [
        'Critical values: minus 1 from the numerator, '
          + '2 from the denominator.',
        'Signs: positive for x below minus 1, '
          + 'negative between, positive above 2.',
        'At x equals minus 1 the expression is 0, '
          + 'which the sign allows.',
        'At x equals 2 the expression is undefined.',
      ],
      answer: 'The set of x such that x is less than or equal to minus 1, '
        + 'or x is greater than 2. '
        + 'Minus 1 is included, with a filled circle, '
        + 'because the expression is zero there and the sign allows '
        + 'equality. '
        + 'Two is excluded, with an open circle, '
        + 'because the expression is undefined there '
        + 'whatever the inequality sign says, '
        + 'and that exclusion is a mark on its own.',
    },
  ],

  traps: [
    {
      mistake: 'Setting each factor greater than zero separately.',
      why: 'A product is also positive when both factors are negative, '
        + 'and that whole region is missed. '
        + 'Use a sign table.',
    },
    {
      mistake: 'Multiplying a rational inequality by its denominator.',
      why: 'The sign of the denominator is unknown, '
        + 'and multiplying by a negative reverses the inequality.',
    },
    {
      mistake: 'Including a value that makes a denominator zero.',
      why: 'The expression is undefined there, '
        + 'so it can never be in the solution set, '
        + 'whatever the sign.',
    },
    {
      mistake: 'Writing and between two separate pieces.',
      why: 'No number is both less than minus 2 and greater than 3, '
        + 'so and describes the empty set. The word is or.',
    },
  ],

  extension:
    'A sign table also handles a product of three or more factors, '
    + 'and then a useful shortcut appears. '
    + 'Crossing a single root flips the sign; '
    + 'crossing a repeated root does not, '
    + 'because the factor passes through zero twice over '
    + 'and comes back with the sign it had. '
    + 'So for (x minus 1)(x minus 2) squared (x minus 3), '
    + 'the sign changes at 1 and at 3 '
    + 'and does not change at 2. '
    + 'Knowing that, '
    + 'you can fill a sign table of four factors '
    + 'from one test value and the pattern of flips, '
    + 'instead of testing every region, '
    + 'which is both quicker and a good check on the testing.',

  figure: {
    alt: 'Two number lines with sign tables. The upper one is for the '
      + 'product of x plus two and x minus three, with the critical '
      + 'values minus two and three marked, dividing the line into three '
      + 'regions. Beneath the line each region carries the sign of each '
      + 'factor and of the product: below minus two both factors are '
      + 'negative so the product is positive; between minus two and '
      + 'three the first is positive and the second negative so the '
      + 'product is negative; above three both are positive so the '
      + 'product is positive. The regions where the product is positive '
      + 'are shaded, and a note says that the region below minus two is '
      + 'exactly what is lost by setting each factor greater than zero '
      + 'separately. The lower line is for the quotient of x plus one '
      + 'over x minus two, with critical values minus one and two, '
      + 'marked with a filled circle at minus one where the expression '
      + 'is zero and an open circle at two where it is undefined, and a '
      + 'note that a value making the denominator zero is excluded '
      + 'whatever the inequality sign says. Beside it the invalid '
      + 'multiplication is shown crossed out, with the counterexample x '
      + 'equal to zero written beneath it.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* upper line */
      + '<path d="M40 70h420" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M150 62v16"/><path d="M340 62v16"/>'
      + '</g>'
      + '<circle cx="150" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="2"/>'
      + '<circle cx="340" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="2"/>'
      + '<text x="140" y="56" font-size="11" fill="currentColor">-2</text>'
      + '<text x="336" y="56" font-size="11" fill="currentColor">3</text>'
      /* shading */
      + '<path d="M40 64h110v12H40Z" fill="currentColor" fill-opacity="0.22" stroke="none"/>'
      + '<path d="M340 64h120v12H340Z" fill="currentColor" fill-opacity="0.22" stroke="none"/>'
      /* sign rows */
      + '<text x="40" y="100" font-size="9" fill="currentColor">(x + 2)</text>'
      + '<text x="100" y="100" font-size="11" fill="currentColor">-</text>'
      + '<text x="240" y="100" font-size="11" fill="currentColor">+</text>'
      + '<text x="400" y="100" font-size="11" fill="currentColor">+</text>'
      + '<text x="40" y="118" font-size="9" fill="currentColor">(x - 3)</text>'
      + '<text x="100" y="118" font-size="11" fill="currentColor">-</text>'
      + '<text x="240" y="118" font-size="11" fill="currentColor">-</text>'
      + '<text x="400" y="118" font-size="11" fill="currentColor">+</text>'
      + '<text x="40" y="138" font-size="9" fill="#0f8a4d">product</text>'
      + '<text x="100" y="138" font-size="12" fill="#0f8a4d">+</text>'
      + '<text x="240" y="138" font-size="12" fill="#0f8a4d">-</text>'
      + '<text x="400" y="138" font-size="12" fill="#0f8a4d">+</text>'
      + '<text x="40" y="164" font-size="10" fill="#0f8a4d">shaded: the product is positive, so x &lt; -2 OR x &gt; 3</text>'
      + '<text x="40" y="182" font-size="10" fill="currentColor">the region below -2 is exactly what is lost by setting each factor &gt; 0 separately,</text>'
      + '<text x="40" y="196" font-size="10" fill="currentColor">because a product is also positive when BOTH factors are negative</text>'
      /* lower line */
      + '<path d="M40 280h420" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="170" cy="280" r="7" fill="currentColor"/>'
      + '<circle cx="330" cy="280" r="7" fill="none" stroke="currentColor" stroke-width="3"/>'
      + '<text x="160" y="266" font-size="11" fill="currentColor">-1</text>'
      + '<text x="326" y="266" font-size="11" fill="currentColor">2</text>'
      + '<path d="M40 274h130v12H40Z" fill="currentColor" fill-opacity="0.22" stroke="none"/>'
      + '<path d="M337 274h123v12H337Z" fill="currentColor" fill-opacity="0.22" stroke="none"/>'
      + '<text x="40" y="306" font-size="10" fill="#0f8a4d">filled at -1: the expression is 0 there, and the sign allows equality</text>'
      + '<text x="40" y="322" font-size="10" fill="#0f8a4d">open at 2: undefined there, so excluded whatever the inequality sign says</text>'
      /* invalid multiplication */
      + '<rect x="470" y="240" width="150" height="100" rx="6" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="480" y="264" font-size="10" fill="currentColor">multiply up:</text>'
      + '<text x="480" y="282" font-size="10" fill="currentColor">x + 1 &gt; 0, so x &gt; -1</text>'
      + '<path d="M478 278h126" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="480" y="304" font-size="9" fill="#0f8a4d">but x = 0 gives 1 / -2,</text>'
      + '<text x="480" y="316" font-size="9" fill="#0f8a4d">which is negative</text>'
      + '<text x="480" y="332" font-size="9" fill="#0f8a4d">the denominator may be</text>'
      + '<text x="480" y="344" font-size="9" fill="#0f8a4d">negative, so you may not</text>'
      + '<text x="480" y="356" font-size="9" fill="#0f8a4d">multiply at all</text>'
      + '<text x="40" y="366" font-size="11" fill="currentColor">a quotient has the same sign as the product of the same two expressions, so one table serves both</text>'
      + '<text x="40" y="392" font-size="11" fill="#0f8a4d">or between separate pieces; and for a single interval. the wrong word describes the empty set</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'A sign table for (x + 2)(x - 3), which answers both inequalities at once',
      columns: ['Region', 'Test value', 'Sign of (x + 2)', 'Sign of (x - 3)', 'Sign of the product'],
      rows: [
        ['x less than -2', '-3', 'Negative', 'Negative', 'Positive'],
        ['-2 to 3', '0', 'Positive', 'Negative', 'Negative'],
        ['x greater than 3', '4', 'Positive', 'Positive', 'Positive'],
      ],
      note: 'The expression greater than zero takes the first and third '
        + 'rows, joined by or. '
        + 'Less than zero takes the second, written as a single '
        + 'interval. One table, two questions answered.',
    },
    {
      caption: 'When an endpoint goes into the solution set, and when it cannot',
      columns: ['Where the critical value came from', 'Inequality has equality', 'In the set', 'Mark it'],
      rows: [
        ['A root of the numerator', 'Yes', 'Yes: the expression is zero there', 'Filled circle'],
        ['A root of the numerator', 'No', 'No', 'Open circle'],
        ['A zero of the denominator', 'Yes', 'No: the expression is undefined', 'Open circle'],
        ['A zero of the denominator', 'No', 'No', 'Open circle'],
      ],
      note: 'The third row is the one that carries a mark, '
        + 'because the inequality sign appears to allow it '
        + 'and the expression does not exist there.',
    },
  ],

  questions: [
    {
      id: 'iq-1',
      ask: 'The critical values of (x + 2)(x - 3) are minus 2 and:',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'Each root of a factor is a critical value, '
        + 'because the sign can only change there.',
      level: 4,
    },
    {
      id: 'iq-2',
      ask: 'Solve x squared minus x minus 6 less than 0. '
        + 'The solution is:',
      kind: 'choice',
      options: [
        '-2 less than x less than 3',
        'x less than -2 or x greater than 3',
        'All x',
      ],
      answer: '-2 less than x less than 3',
      teach: 'The middle region of the sign table, '
        + 'written as a single interval with and.',
      level: 5,
    },
    {
      id: 'iq-3',
      ask: 'Why may you not multiply a rational inequality '
        + 'by its denominator?',
      kind: 'choice',
      options: [
        'Its sign is unknown, and a negative reverses the inequality',
        'It makes the algebra longer',
        'The denominator may be zero',
      ],
      answer: 'Its sign is unknown, and a negative reverses the inequality',
      teach: 'Treat the numerator and denominator as two factors '
        + 'in a sign table instead.',
      level: 5,
    },
    {
      id: 'iq-4',
      ask: 'In (x + 1) over (x - 2) greater than or equal to 0, '
        + 'the value x equal to 2 is:',
      kind: 'choice',
      options: [
        'Excluded, because the expression is undefined there',
        'Included, because the sign allows equality',
        'Included, because the numerator is positive',
      ],
      answer: 'Excluded, because the expression is undefined there',
      teach: 'A zero of the denominator is never in the solution set, '
        + 'whatever the sign says.',
      level: 6,
    },
    {
      id: 'iq-5',
      ask: 'Two separate pieces of a solution are joined by:',
      kind: 'choice',
      options: ['or', 'and', 'nothing'],
      answer: 'or',
      teach: 'And between two separate pieces describes the empty set, '
        + 'because no number can be in both.',
      level: 5,
    },
  ],
})

/* ── the circle ───────────────────────────────────────────────────── */

teach({
  topicId: 'circle-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A circle of centre (a, b) and radius r '
      + 'has the equation '
      + '(x minus a) squared plus (y minus b) squared equals r squared. '
      + 'Expanded, it becomes '
      + 'x squared plus y squared plus 2gx plus 2fy plus c equals 0, '
      + 'and completing the square turns one form into the other. '
      + 'A tangent is perpendicular to the radius at the point of '
      + 'contact, '
      + 'so find the gradient of the radius '
      + 'and take the negative reciprocal.',
    method: [
      'Complete the square in x and in y to find the centre and radius.',
      'For a tangent, find the gradient of the radius to the point.',
      'Take the negative reciprocal and use the point form of a line.',
    ],
  },

  idea:
    'The equation of a circle with centre (a, b) and radius r '
    + 'is (x minus a) squared plus (y minus b) squared equals r squared. '
    + 'This is Pythagoras applied to the horizontal and vertical '
    + 'distances '
    + 'from the centre to a point on the circle. '
    + 'Expanding it gives the general form, '
    + 'x squared plus y squared plus 2gx plus 2fy plus c equals 0, '
    + 'in which the coefficients of x squared and y squared '
    + 'are both 1 and there is no xy term. '
    + 'From the general form, '
    + 'the centre is at (minus g, minus f) '
    + 'and the radius is the square root of '
    + 'g squared plus f squared minus c. '
    + 'A tangent touches the circle at one point only, '
    + 'and it is perpendicular to the radius drawn to that point. '
    + 'A chord joins two points on the circle, '
    + 'and the perpendicular from the centre bisects it. '
    + 'A point lies inside the circle, on it, or outside it '
    + 'according to whether its distance from the centre '
    + 'is less than, equal to, or greater than the radius.',

  mechanism:
    'Three things are tested here, '
    + 'and each has a move that does the whole job. '
    + 'The first is getting from the general form '
    + 'to the centre and the radius. '
    + 'Two routes exist and both should be known. '
    + 'The quick one is the formula: '
    + 'centre at minus g and minus f, '
    + 'radius the square root of g squared plus f squared minus c. '
    + 'The safe one is completing the square, '
    + 'and it is safer because it shows the working '
    + 'and it cannot be misremembered. '
    + 'For x squared plus y squared minus 6x plus 4y minus 12 equals 0: '
    + 'group the x terms and the y terms, '
    + 'x squared minus 6x gives (x minus 3) squared minus 9, '
    + 'and y squared plus 4y gives (y plus 2) squared minus 4. '
    + 'So the equation becomes '
    + '(x minus 3) squared plus (y plus 2) squared minus 25 equals 0, '
    + 'which is a circle of centre (3, minus 2) and radius 5. '
    + 'Notice the sign: '
    + 'the bracket reads x minus 3 '
    + 'and the centre coordinate is plus 3. '
    + 'The sign flip between the bracket and the centre '
    + 'is the commonest error in the topic '
    + 'and it is worth saying aloud each time: '
    + 'x minus 3 means the centre is at 3. '
    + 'There is also a check worth doing. '
    + 'If g squared plus f squared minus c comes out negative, '
    + 'the equation has no circle at all, '
    + 'because a radius squared cannot be negative. '
    + 'Saying that, rather than taking the square root of a negative, '
    + 'is a mark. '
    + 'The second is the tangent, '
    + 'and it is entirely a coordinate geometry question '
    + 'once one fact is used: '
    + 'the tangent is perpendicular to the radius. '
    + 'So the method never changes. '
    + 'Find the centre. '
    + 'Find the gradient of the line '
    + 'from the centre to the point of contact. '
    + 'Take the negative reciprocal, '
    + 'because perpendicular gradients multiply to minus 1. '
    + 'Then write the line through the point with that gradient, '
    + 'using the point form, '
    + 'y minus y1 equals m times (x minus x1), '
    + 'which avoids finding the intercept separately. '
    + 'For the circle above and the point (7, 1): '
    + 'the radius runs from (3, minus 2) to (7, 1), '
    + 'so its gradient is 3 over 4. '
    + 'The tangent gradient is minus 4 over 3. '
    + 'The tangent is y minus 1 equals minus four thirds times '
    + '(x minus 7). '
    + 'Four lines, and no differentiation needed, '
    + 'which is why the circle is the one curve '
    + 'whose tangent can be found by pure geometry. '
    + 'There are two special cases to notice. '
    + 'If the radius is horizontal, '
    + 'its gradient is zero and the tangent is vertical, '
    + 'so the tangent is x equals a number '
    + 'and the negative reciprocal rule cannot be applied. '
    + 'If the radius is vertical, the tangent is horizontal. '
    + 'Spotting those saves a learner from dividing by zero '
    + 'and reporting an error. '
    + 'The third thing is deciding where a point or a line sits '
    + 'relative to the circle, '
    + 'and it is always a distance comparison. '
    + 'For a point, compare its distance from the centre with the radius. '
    + 'For a line, '
    + 'compare the perpendicular distance from the centre to the line '
    + 'with the radius: '
    + 'less means the line cuts the circle twice, '
    + 'equal means it is a tangent, '
    + 'and greater means it misses. '
    + 'The algebraic version of the same test '
    + 'is to substitute the line into the circle '
    + 'and look at the discriminant of the quadratic that results: '
    + 'positive for two points, zero for a tangent, '
    + 'negative for none. '
    + 'Knowing that both tests exist, '
    + 'and that a zero discriminant means a tangent, '
    + 'answers a whole family of questions '
    + 'about finding the value of a constant '
    + 'that makes a line touch a circle.',

  recap:
    'You have used Pythagoras, '
    + 'the distance between two points, '
    + 'and the rule that perpendicular gradients multiply to minus 1. '
    + 'This applies all three to one curve, '
    + 'and the circle is the only curve '
    + 'whose tangent needs no calculus.',

  method: [
    'If the equation is in general form, complete the square in x and in y.',
    'Read the centre off the brackets, remembering the sign flips.',
    'Read the radius as the square root of the number on the right.',
    'Check that the number under the root is positive, or there is no circle.',
    'For a tangent, find the gradient of the radius to the point of contact.',
    'Take the negative reciprocal for the tangent gradient.',
    'Use y minus y1 equals m times (x minus x1).',
    'Watch for a horizontal or vertical radius, where the reciprocal rule fails.',
    'To place a line, compare the perpendicular distance from the centre with the radius.',
  ],

  worked: [
    {
      level: 4,
      ask: 'Give the equation of the circle '
        + 'with centre (2, minus 5) and radius 4.',
      steps: [
        'Use (x minus a) squared plus (y minus b) squared equals r '
          + 'squared.',
        'a is 2 and b is minus 5, so the second bracket is y plus 5.',
      ],
      answer: '(x minus 2) squared plus (y plus 5) squared equals 16. '
        + 'The sign of b flips inside the bracket.',
    },
    {
      level: 5,
      ask: 'Find the centre and radius of '
        + 'x squared plus y squared minus 6x plus 4y minus 12 equals 0.',
      steps: [
        'Group: (x squared minus 6x) plus (y squared plus 4y) '
          + 'equals 12.',
        'Complete the square: (x minus 3) squared minus 9, '
          + 'and (y plus 2) squared minus 4.',
        'So (x minus 3) squared plus (y plus 2) squared equals '
          + '12 plus 9 plus 4.',
      ],
      answer: 'Centre (3, minus 2), radius 5. '
        + 'The bracket x minus 3 means the centre is at plus 3, '
        + 'which is the sign flip to say aloud each time.',
    },
    {
      level: 5,
      ask: 'Find the tangent to that circle at the point (7, 1).',
      steps: [
        'Centre is (3, minus 2).',
        'Gradient of the radius: (1 minus minus 2) over (7 minus 3), '
          + 'which is 3 over 4.',
        'Tangent gradient is the negative reciprocal: minus 4 over 3.',
        'Point form: y minus 1 equals minus four thirds times '
          + '(x minus 7).',
      ],
      answer: '4x plus 3y equals 31, '
        + 'or y equals minus four thirds x plus thirty one thirds. '
        + 'No calculus was needed, '
        + 'because the tangent is perpendicular to the radius.',
    },
    {
      level: 6,
      ask: 'For what value of c does the line y equals 2x plus c '
        + 'touch the circle x squared plus y squared equals 20?',
      steps: [
        'Substitute the line into the circle.',
        'x squared plus (2x plus c) squared equals 20.',
        'Expand: x squared plus 4 x squared plus 4cx plus c squared '
          + 'equals 20.',
        'So 5 x squared plus 4cx plus (c squared minus 20) equals 0.',
        'A tangent touches at one point, so the discriminant is zero.',
        '16 c squared minus 4 times 5 times (c squared minus 20) equals '
          + '0.',
        '16 c squared minus 20 c squared plus 400 equals 0, '
          + 'so 4 c squared equals 400.',
      ],
      answer: 'c equals 10 or c equals minus 10, '
        + 'one line touching above the centre and one below. '
        + 'A zero discriminant is the algebraic statement '
        + 'that the line meets the circle exactly once, '
        + 'which is what touching means.',
    },
  ],

  traps: [
    {
      mistake: 'Reading the centre straight off the brackets without '
        + 'flipping the sign.',
      why: '(x minus 3) squared means the centre is at plus 3. '
        + 'Say it aloud each time.',
    },
    {
      mistake: 'Taking the square root of a negative for the radius.',
      why: 'If g squared plus f squared minus c is negative, '
        + 'the equation represents no circle at all. Say so.',
    },
    {
      mistake: 'Differentiating to find the tangent to a circle.',
      why: 'The tangent is perpendicular to the radius, '
        + 'so the gradient comes from coordinate geometry in two lines.',
    },
    {
      mistake: 'Applying the negative reciprocal to a horizontal radius.',
      why: 'Its gradient is zero and the tangent is vertical, '
        + 'written x equals a number. '
        + 'Spot it and avoid dividing by zero.',
    },
  ],

  extension:
    'Two circles can be in five positions, '
    + 'and all five are settled by comparing '
    + 'the distance between their centres with their radii. '
    + 'If the distance is greater than the sum of the radii, '
    + 'they are apart. '
    + 'If it equals the sum, they touch on the outside. '
    + 'If it is between the sum and the difference, they cut twice. '
    + 'If it equals the difference, one touches the other from inside. '
    + 'And if it is less than the difference, '
    + 'one lies entirely inside the other without touching. '
    + 'So a question about two circles '
    + 'is always three numbers compared: '
    + 'the distance between the centres, '
    + 'the sum of the radii, '
    + 'and their difference.',

  figure: {
    alt: 'A circle drawn on axes with its centre marked at three comma '
      + 'minus two and a radius of five, labelled with both forms of its '
      + 'equation: the completed square form with the brackets x minus '
      + 'three and y plus two, and the general form with its '
      + 'coefficients. An arrow from the bracket x minus three points to '
      + 'the centre coordinate plus three, labelled as the sign flip to '
      + 'say aloud each time. A radius is drawn from the centre to the '
      + 'point seven comma one, with its rise of three and run of four '
      + 'dimensioned to give a gradient of three over four, and the '
      + 'tangent is drawn at that point with a right angle marked '
      + 'between it and the radius, labelled gradient minus four over '
      + 'three as the negative reciprocal. To one side three lines are '
      + 'drawn against a second circle to show the distance test: one '
      + 'whose perpendicular distance from the centre is less than the '
      + 'radius and cuts it twice, one equal to the radius which '
      + 'touches, and one greater which misses, each labelled with the '
      + 'discriminant that corresponds, positive, zero and negative.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* axes */
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M30 230h300"/><path d="M90 40v330"/>'
      + '</g>'
      /* circle centre (3,-2) r 5 -> scale 16px per unit, centre at (90+48, 230+32)=(138,262) r=80 */
      + '<circle cx="138" cy="262" r="80" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<circle cx="138" cy="262" r="4" fill="currentColor"/>'
      + '<text x="96" y="282" font-size="10" fill="currentColor">(3, -2)</text>'
      /* radius to (7,1) -> (90+112, 230-16) = (202,214) */
      + '<path d="M138 262L202 214" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="202" cy="214" r="4" fill="#0f8a4d"/>'
      + '<text x="208" y="210" font-size="10" fill="#0f8a4d">(7, 1)</text>'
      /* rise and run */
      + '<g stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" fill="none">'
      + '<path d="M138 262h64"/><path d="M202 262v-48"/>'
      + '</g>'
      + '<text x="156" y="276" font-size="9" fill="currentColor">run 4</text>'
      + '<text x="206" y="244" font-size="9" fill="currentColor">rise 3</text>'
      /* tangent */
      + '<path d="M154 278L250 150" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M196 222l10 8-8 10" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="248" y="146" font-size="9" fill="currentColor">the tangent</text>'
      + '<text x="248" y="158" font-size="9" fill="#0f8a4d">gradient -4/3</text>'
      /* equations */
      + '<text x="30" y="30" font-size="11" fill="currentColor">x sq + y sq - 6x + 4y - 12 = 0</text>'
      + '<text x="30" y="394" font-size="11" fill="#0f8a4d">(x - 3) sq + (y + 2) sq = 25</text>'
      + '<path d="M62 384v-86" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M56 308l6-10 6 10Z" fill="#0f8a4d"/>'
      + '<text x="30" y="412" font-size="10" fill="#0f8a4d">x MINUS 3 in the bracket means the centre is at PLUS 3: say it aloud each time</text>'
      /* line tests */
      + '<circle cx="470" cy="150" r="60" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="470" cy="150" r="3" fill="currentColor"/>'
      + '<path d="M380 120h180" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="566" y="124" font-size="9" fill="#0f8a4d">cuts twice</text>'
      + '<text x="566" y="136" font-size="9" fill="#0f8a4d">b sq - 4ac &gt; 0</text>'
      + '<path d="M380 210h180" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="566" y="214" font-size="9" fill="currentColor">touches</text>'
      + '<text x="566" y="226" font-size="9" fill="currentColor">b sq - 4ac = 0</text>'
      + '<path d="M380 250h180" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4" fill="none"/>'
      + '<text x="566" y="254" font-size="9" fill="currentColor">misses</text>'
      + '<text x="566" y="266" font-size="9" fill="currentColor">b sq - 4ac &lt; 0</text>'
      + '<path d="M470 150v60" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" fill="none"/>'
      + '<text x="380" y="300" font-size="9" fill="currentColor">compare the perpendicular distance from the centre with the radius,</text>'
      + '<text x="380" y="314" font-size="9" fill="currentColor">or substitute the line and look at the discriminant: the same test, twice</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The two forms of the equation, and how to move between them',
      columns: ['', 'Completed square form', 'General form'],
      rows: [
        ['Looks like', '(x - a) sq + (y - b) sq = r sq', 'x sq + y sq + 2gx + 2fy + c = 0'],
        ['Centre', '(a, b), with the signs flipped from the brackets', '(-g, -f)'],
        ['Radius', 'The square root of the right hand side', 'Square root of (g sq + f sq - c)'],
        ['Get there by', 'Reading it off', 'Completing the square in x and in y'],
        ['Warning', 'A negative right hand side means no circle', 'A negative g sq + f sq - c means no circle'],
      ],
      note: 'Completing the square is slower and safer, '
        + 'because it shows the working and cannot be misremembered. '
        + 'Use the formula to check it.',
    },
  ],

  questions: [
    {
      id: 'ci-1',
      ask: 'The circle (x minus 4) squared plus (y plus 1) squared '
        + 'equals 9 has its centre at:',
      kind: 'choice',
      options: ['(4, -1)', '(-4, 1)', '(4, 1)'],
      answer: '(4, -1)',
      teach: 'The signs flip from the brackets. '
        + 'y plus 1 means the centre is at minus 1.',
      level: 4,
    },
    {
      id: 'ci-2',
      ask: 'That circle has radius:',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'The right hand side is the radius squared, '
        + 'so take the square root of 9.',
      level: 4,
    },
    {
      id: 'ci-3',
      ask: 'A tangent to a circle is perpendicular to:',
      kind: 'choice',
      options: [
        'The radius at the point of contact',
        'The nearest chord',
        'The diameter through the origin',
      ],
      answer: 'The radius at the point of contact',
      teach: 'Which is why the tangent to a circle needs no calculus.',
      level: 4,
    },
    {
      id: 'ci-4',
      ask: 'A radius has gradient 3 over 4. '
        + 'The tangent at that point has gradient:',
      kind: 'choice',
      options: ['-4/3', '4/3', '-3/4'],
      answer: '-4/3',
      teach: 'The negative reciprocal, '
        + 'because perpendicular gradients multiply to minus 1.',
      level: 5,
    },
    {
      id: 'ci-5',
      ask: 'Substituting a line into a circle gives a quadratic '
        + 'with discriminant zero. The line:',
      kind: 'choice',
      options: [
        'Touches the circle',
        'Cuts it twice',
        'Misses it',
      ],
      answer: 'Touches the circle',
      teach: 'One repeated root means one point of contact, '
        + 'which is what touching means.',
      level: 6,
    },
  ],
})

/* ── trigonometric identities ─────────────────────────────────────── */

teach({
  topicId: 'trig-identities-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The three basic identities are '
      + 'sin squared A plus cos squared A equals 1, '
      + 'tan A equals sin A over cos A, '
      + 'and the two forms got by dividing the first by sin squared '
      + 'or cos squared. '
      + 'The compound angle formulae give sin and cos of A plus B, '
      + 'and setting B equal to A gives the double angle formulae. '
      + 'To prove an identity, '
      + 'work on one side only '
      + 'until it becomes the other.',
    method: [
      'Start on the more complicated side.',
      'Change everything into sines and cosines.',
      'Work on that one side only, until it equals the other.',
    ],
  },

  idea:
    'An identity is true for every value of the angle, '
    + 'unlike an equation, which is true for particular values. '
    + 'The Pythagorean identity is '
    + 'sin squared A plus cos squared A equals 1, '
    + 'and it comes straight from Pythagoras '
    + 'in a right angled triangle with hypotenuse 1. '
    + 'Dividing it by cos squared A gives '
    + '1 plus tan squared A equals sec squared A. '
    + 'Dividing it by sin squared A gives '
    + 'cot squared A plus 1 equals cosec squared A. '
    + 'The quotient identity is tan A equals sin A over cos A. '
    + 'The compound angle formulae are '
    + 'sin(A plus B) equals sin A cos B plus cos A sin B, '
    + 'cos(A plus B) equals cos A cos B minus sin A sin B, '
    + 'and tan(A plus B) equals '
    + '(tan A plus tan B) over (1 minus tan A tan B). '
    + 'Changing the sign of B gives the corresponding formulae '
    + 'for A minus B. '
    + 'Putting B equal to A gives the double angle formulae: '
    + 'sin 2A equals 2 sin A cos A, '
    + 'and cos 2A equals cos squared A minus sin squared A, '
    + 'which can also be written '
    + '1 minus 2 sin squared A or 2 cos squared A minus 1.',

  mechanism:
    'The rule that makes a proof a proof '
    + 'is that you may work on one side only. '
    + 'An identity is something to be shown, '
    + 'not an equation to be solved, '
    + 'so you are not entitled to assume it and rearrange both sides. '
    + 'Doing that is circular: '
    + 'you have assumed what you were asked to show, '
    + 'and an examiner marks it as such '
    + 'even when every line of algebra is correct. '
    + 'So the layout is fixed. '
    + 'Write the left hand side. '
    + 'Underneath it, write the next step, '
    + 'and keep going down the page '
    + 'until the expression you have is the right hand side. '
    + 'Then write that it equals the right hand side, as required. '
    + 'Nothing is ever written on the other side of the page. '
    + 'Two tactics do most of the work once the layout is right. '
    + 'First, start on the more complicated side, '
    + 'because simplifying is easier than complicating. '
    + 'Second, change everything into sines and cosines. '
    + 'Tangents, secants, cotangents and cosecants '
    + 'are all defined in terms of sin and cos, '
    + 'so rewriting them puts the whole expression '
    + 'into two functions instead of six, '
    + 'and then the Pythagorean identity can be used. '
    + 'Take: prove that '
    + '(1 minus cos 2A) over sin 2A equals tan A. '
    + 'The left side is more complicated, so start there. '
    + 'Use cos 2A equals 1 minus 2 sin squared A, '
    + 'so the numerator becomes 2 sin squared A. '
    + 'Use sin 2A equals 2 sin A cos A for the denominator. '
    + 'Now the expression is '
    + '2 sin squared A over 2 sin A cos A, '
    + 'and cancelling gives sin A over cos A, '
    + 'which is tan A. '
    + 'Three lines, all on the left, '
    + 'and the choice of which form of cos 2A to use '
    + 'was the whole skill. '
    + 'That is the third thing to know: '
    + 'cos 2A has three forms '
    + 'and they exist so that you can choose. '
    + 'If the expression has sines in it, '
    + 'use 1 minus 2 sin squared A. '
    + 'If it has cosines, use 2 cos squared A minus 1. '
    + 'If it has both, use cos squared minus sin squared. '
    + 'Picking the form that matches what is already there '
    + 'is what turns a long struggle into three lines, '
    + 'and it is worth pausing to choose '
    + 'before writing anything. '
    + 'There is one more move worth having. '
    + 'When a fraction has a sum or difference in the denominator, '
    + 'multiplying top and bottom '
    + 'by the same expression with the opposite sign '
    + 'turns the denominator into a difference of two squares, '
    + 'which the Pythagorean identity then simplifies. '
    + 'So for something over (1 plus cos A), '
    + 'multiply top and bottom by (1 minus cos A), '
    + 'and the denominator becomes 1 minus cos squared A, '
    + 'which is sin squared A. '
    + 'That single trick unlocks a great many of the harder proofs, '
    + 'and it is the same idea as rationalising a surd. '
    + 'Finally, the honest advice about getting stuck. '
    + 'If a proof will not come from the left, '
    + 'it is legitimate to work the right side down as well, '
    + 'on rough paper, '
    + 'and meet in the middle, '
    + 'and then write the whole thing out '
    + 'as one chain from left to right. '
    + 'That is not cheating; '
    + 'it is finding the path privately '
    + 'and then presenting it correctly. '
    + 'What is not acceptable is handing in the two halves '
    + 'as though they were the proof.',

  recap:
    'You have used sine, cosine and tangent in right angled triangles, '
    + 'and you know Pythagoras. '
    + 'This gives the relations between those three functions '
    + 'that hold for every angle, '
    + 'and the rules for proving one from another.',

  method: [
    'Read which side is the more complicated, and start there.',
    'Change every function into sines and cosines.',
    'For cos 2A, choose the form that matches what is already in the expression.',
    'Look for the Pythagorean identity, in any of its three forms.',
    'If a denominator is a sum or difference, multiply top and bottom by the opposite sign.',
    'Work down the page on one side only.',
    'Stop when the expression is the other side, and say so.',
    'If stuck, find the path on rough paper from both ends, then write it as one chain.',
  ],

  worked: [
    {
      level: 4,
      ask: 'Prove that (1 minus cos squared A) over sin A equals sin A.',
      steps: [
        'Start on the left, which is the more complicated side.',
        'By the Pythagorean identity, '
          + '1 minus cos squared A equals sin squared A.',
        'So the expression is sin squared A over sin A.',
        'Cancel one sin A.',
      ],
      answer: 'Equals sin A, as required. '
        + 'Two lines, both on the left hand side.',
    },
    {
      level: 5,
      ask: 'Prove that (1 minus cos 2A) over sin 2A equals tan A, '
        + 'and say why you chose that form of cos 2A.',
      steps: [
        'Start on the left.',
        'The expression already contains a sine in the denominator, '
          + 'so use cos 2A equals 1 minus 2 sin squared A.',
        'Numerator: 1 minus (1 minus 2 sin squared A), '
          + 'which is 2 sin squared A.',
        'Denominator: sin 2A equals 2 sin A cos A.',
        'So the expression is 2 sin squared A over 2 sin A cos A.',
        'Cancel: sin A over cos A.',
      ],
      answer: 'Equals tan A, as required. '
        + 'That form of cos 2A was chosen '
        + 'because it brings in sines, '
        + 'which is what the rest of the expression already has. '
        + 'Using 2 cos squared A minus 1 instead '
        + 'would have produced a mixture and taken much longer.',
    },
    {
      level: 5,
      ask: 'Find the exact value of sin 75 degrees '
        + 'using a compound angle formula.',
      steps: [
        '75 is 45 plus 30, and both of those have exact values.',
        'sin(A plus B) equals sin A cos B plus cos A sin B.',
        'sin 45 is the square root of 2 over 2, and cos 30 is the '
          + 'square root of 3 over 2.',
        'cos 45 is the square root of 2 over 2, and sin 30 is one half.',
      ],
      answer: 'The square root of 6 plus the square root of 2, '
        + 'all over 4. '
        + 'The compound angle formulae exist precisely so that '
        + 'an awkward angle can be built from two known ones.',
    },
    {
      level: 6,
      ask: 'Prove that sin A over (1 plus cos A) '
        + 'equals (1 minus cos A) over sin A.',
      steps: [
        'Start on the left.',
        'The denominator is a sum, so multiply top and bottom '
          + 'by (1 minus cos A).',
        'Top: sin A times (1 minus cos A).',
        'Bottom: (1 plus cos A)(1 minus cos A) '
          + 'equals 1 minus cos squared A.',
        'By the Pythagorean identity that is sin squared A.',
        'So the expression is '
          + 'sin A (1 minus cos A) over sin squared A.',
        'Cancel one sin A.',
      ],
      answer: 'Equals (1 minus cos A) over sin A, as required. '
        + 'The move was multiplying top and bottom '
        + 'by the same expression with the opposite sign, '
        + 'which turns the denominator into a difference of two squares. '
        + 'It is the same idea as rationalising a surd, '
        + 'and it unlocks most of the harder proofs in this topic.',
    },
  ],

  traps: [
    {
      mistake: 'Rearranging both sides of an identity at once.',
      why: 'That assumes what you were asked to show, '
        + 'which is circular, '
        + 'and it is marked as such even when the algebra is right.',
    },
    {
      mistake: 'Starting on the simpler side.',
      why: 'Complicating is harder than simplifying. '
        + 'Begin on the messier side and work down.',
    },
    {
      mistake: 'Taking the first form of cos 2A that comes to mind.',
      why: 'There are three, and they exist so that you can choose. '
        + 'Pick the one that matches what the expression already has.',
    },
    {
      mistake: 'Leaving a mixture of tan, sec, cot and cosec in the '
        + 'working.',
      why: 'Change everything into sines and cosines first. '
        + 'Two functions are easier to handle than six.',
    },
  ],

  extension:
    'The compound angle formulae are what make '
    + 'a sum of a sine and a cosine into a single sine. '
    + 'Any expression a sin x plus b cos x '
    + 'can be written as R sin(x plus alpha), '
    + 'where R is the square root of a squared plus b squared '
    + 'and alpha comes from tan alpha equals b over a. '
    + 'The reason this matters is that the single form '
    + 'shows at once what the greatest and least values are: '
    + 'plus R and minus R, '
    + 'since a sine never leaves that range. '
    + 'So a question asking for the maximum of '
    + '3 sin x plus 4 cos x '
    + 'is answered by noticing that R is 5, '
    + 'with no calculus at all.',

  figure: {
    alt: 'Two parts. The upper part shows a right angled triangle with '
      + 'hypotenuse one, the opposite side labelled sin A and the '
      + 'adjacent side labelled cos A, with Pythagoras applied beside it '
      + 'to give sin squared A plus cos squared A equals one, and two '
      + 'arrows leading off to the two forms got by dividing through by '
      + 'cos squared A and by sin squared A. The lower part sets out the '
      + 'layout of a proof as a single column down the page: the left '
      + 'hand side written at the top, then each step beneath the last, '
      + 'ending with the right hand side and the words as required, with '
      + 'the whole column boxed and a note that nothing is ever written '
      + 'on the other side. Beside it a crossed out layout shows two '
      + 'columns being rearranged towards each other, labelled circular '
      + 'because it assumes what was to be shown. To the right the three '
      + 'forms of cos two A are listed with the expression each one '
      + 'suits: use one minus two sin squared A when the expression has '
      + 'sines, two cos squared A minus one when it has cosines, and cos '
      + 'squared minus sin squared when it has both.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* triangle */
      + '<path d="M40 130h110v-70Z" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M136 130v-14h14" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="76" y="146" font-size="11" fill="#0f8a4d">cos A</text>'
      + '<text x="154" y="100" font-size="11" fill="#0f8a4d">sin A</text>'
      + '<text x="60" y="88" font-size="11" fill="currentColor">1</text>'
      + '<path d="M40 130a26 26 0 0 1 22 -14" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="64" y="126" font-size="10" fill="currentColor">A</text>'
      + '<text x="200" y="88" font-size="12" fill="currentColor">sin sq A + cos sq A = 1</text>'
      + '<text x="200" y="104" font-size="9" fill="#0f8a4d">straight from Pythagoras, with hypotenuse 1</text>'
      + '<g stroke="#0f8a4d" stroke-width="2" fill="none">'
      + '<path d="M240 112v18"/><path d="M380 112v18"/>'
      + '</g>'
      + '<g fill="#0f8a4d"><path d="M234 122l6 10 6-10Z"/><path d="M374 122l6 10 6-10Z"/></g>'
      + '<text x="180" y="150" font-size="10" fill="currentColor">divide by cos sq A:</text>'
      + '<text x="180" y="164" font-size="10" fill="currentColor">1 + tan sq A = sec sq A</text>'
      + '<text x="350" y="150" font-size="10" fill="currentColor">divide by sin sq A:</text>'
      + '<text x="350" y="164" font-size="10" fill="currentColor">cot sq A + 1 = cosec sq A</text>'
      /* proof layout */
      + '<rect x="40" y="200" width="230" height="130" rx="6" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="52" y="222" font-size="10" fill="currentColor">LHS = (1 - cos 2A) / sin 2A</text>'
      + '<text x="52" y="242" font-size="10" fill="currentColor">= 2 sin sq A / (2 sin A cos A)</text>'
      + '<text x="52" y="262" font-size="10" fill="currentColor">= sin A / cos A</text>'
      + '<text x="52" y="282" font-size="10" fill="#0f8a4d">= tan A = RHS, as required</text>'
      + '<text x="52" y="310" font-size="9" fill="#0f8a4d">one column, down the page, on one side only</text>'
      /* wrong layout */
      + '<rect x="300" y="200" width="150" height="90" rx="6" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="310" y="222" font-size="10" fill="currentColor">LHS ...        ... RHS</text>'
      + '<text x="310" y="240" font-size="10" fill="currentColor">  ...    meet    ...</text>'
      + '<path d="M308 232h132" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="310" y="264" font-size="9" fill="#0f8a4d">circular: it assumes what</text>'
      + '<text x="310" y="276" font-size="9" fill="#0f8a4d">was to be shown</text>'
      /* cos 2A forms */
      + '<path d="M470 200h150" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="470" y="194" font-size="10" fill="#0f8a4d">cos 2A has three forms, so choose</text>'
      + '<text x="470" y="218" font-size="9" fill="currentColor">1 - 2 sin sq A</text>'
      + '<text x="470" y="230" font-size="9" fill="#0f8a4d">when the expression has sines</text>'
      + '<text x="470" y="252" font-size="9" fill="currentColor">2 cos sq A - 1</text>'
      + '<text x="470" y="264" font-size="9" fill="#0f8a4d">when it has cosines</text>'
      + '<text x="470" y="286" font-size="9" fill="currentColor">cos sq A - sin sq A</text>'
      + '<text x="470" y="298" font-size="9" fill="#0f8a4d">when it has both</text>'
      + '<text x="40" y="362" font-size="11" fill="currentColor">change everything into sines and cosines: two functions are easier to handle than six</text>'
      + '<text x="40" y="386" font-size="11" fill="#0f8a4d">and if a denominator is a sum, multiply top and bottom by the opposite sign: it becomes sin sq A</text>'
      + '<text x="40" y="408" font-size="10" fill="currentColor">which is the same idea as rationalising a surd, and it unlocks most of the harder proofs</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The identities worth knowing by heart, and where each comes from',
      columns: ['Identity', 'Where it comes from', 'Use it when'],
      rows: [
        ['sin sq A + cos sq A = 1', 'Pythagoras, with hypotenuse 1', 'Almost always; it is the workhorse'],
        ['1 + tan sq A = sec sq A', 'Dividing the first by cos sq A', 'The expression has tangents or secants'],
        ['cot sq A + 1 = cosec sq A', 'Dividing the first by sin sq A', 'The expression has cotangents or cosecants'],
        ['sin(A + B) = sin A cos B + cos A sin B', 'Geometry of two stacked angles', 'Building an awkward angle from two known ones'],
        ['cos(A + B) = cos A cos B - sin A sin B', 'The same geometry', 'Note the minus sign; it is the usual slip'],
        ['sin 2A = 2 sin A cos A', 'Putting B equal to A in the first compound formula', 'A double angle appears'],
      ],
      note: 'The double angle formulae are not separate facts. '
        + 'They are the compound formulae with B set equal to A, '
        + 'so knowing the compound ones gives both.',
    },
  ],

  questions: [
    {
      id: 'ti-1',
      ask: 'sin squared A plus cos squared A equals:',
      kind: 'numeric',
      options: [],
      answer: '1',
      teach: 'It is Pythagoras in a triangle of hypotenuse 1.',
      level: 4,
    },
    {
      id: 'ti-2',
      ask: 'To prove an identity you may:',
      kind: 'choice',
      options: [
        'Work on one side only until it becomes the other',
        'Rearrange both sides towards each other',
        'Substitute a value of A',
      ],
      answer: 'Work on one side only until it becomes the other',
      teach: 'Rearranging both sides assumes what you were asked to '
        + 'show, which is circular.',
      level: 5,
    },
    {
      id: 'ti-3',
      ask: 'sin 2A equals:',
      kind: 'choice',
      options: [
        '2 sin A cos A',
        '2 sin A',
        'sin squared A plus cos squared A',
      ],
      answer: '2 sin A cos A',
      teach: 'It is the compound formula with B set equal to A.',
      level: 4,
    },
    {
      id: 'ti-4',
      ask: 'An expression contains only sines. '
        + 'Which form of cos 2A should you use?',
      kind: 'choice',
      options: [
        '1 minus 2 sin squared A',
        '2 cos squared A minus 1',
        'cos squared A minus sin squared A',
      ],
      answer: '1 minus 2 sin squared A',
      teach: 'Choose the form that matches what the expression already '
        + 'has, and a long proof becomes three lines.',
      level: 6,
    },
    {
      id: 'ti-5',
      ask: 'For a denominator of (1 plus cos A), multiply top and bottom '
        + 'by:',
      kind: 'choice',
      options: [
        '(1 minus cos A)',
        '(1 plus cos A)',
        'sin A',
      ],
      answer: '(1 minus cos A)',
      teach: 'The denominator becomes 1 minus cos squared A, '
        + 'which is sin squared A. '
        + 'It is the same idea as rationalising a surd.',
      level: 6,
    },
  ],
})

/* ── trigonometric equations ──────────────────────────────────────── */

teach({
  topicId: 'trig-equations-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A trigonometric equation has many solutions, '
      + 'and a question gives a range '
      + 'inside which every one must be found. '
      + 'The calculator gives one. '
      + 'Find the rest from the quadrant rule: '
      + 'sine is positive in the first and second quadrants, '
      + 'cosine in the first and fourth, '
      + 'tangent in the first and third. '
      + 'If the equation is in 2x, '
      + 'widen the range to match before solving.',
    method: [
      'Reduce to a single function of a single angle.',
      'Find the first solution, and state the range you must cover.',
      'Use the quadrant rule to find every other solution in that range.',
    ],
  },

  idea:
    'A trigonometric equation is satisfied by many angles, '
    + 'because the functions repeat. '
    + 'Sine and cosine repeat every 360 degrees '
    + 'and tangent every 180. '
    + 'So a question states a range, '
    + 'such as 0 to 360 degrees, '
    + 'and asks for all the solutions within it. '
    + 'The quadrants divide a full turn into four. '
    + 'In the first quadrant, 0 to 90, all three functions are positive. '
    + 'In the second, 90 to 180, only sine is positive. '
    + 'In the third, 180 to 270, only tangent is positive. '
    + 'In the fourth, 270 to 360, only cosine is positive. '
    + 'The acute angle whose function has the same size '
    + 'is called the reference angle, '
    + 'and every solution is built from it: '
    + '180 minus it, 180 plus it, or 360 minus it, '
    + 'according to the quadrant. '
    + 'An equation that is quadratic in a function, '
    + 'such as 2 sin squared x minus sin x minus 1 equals 0, '
    + 'is solved by factorising '
    + 'and then solving each simple equation that results.',

  mechanism:
    'Three steps settle every question in this topic, '
    + 'and the first is the one most often skipped. '
    + 'Reduce the equation to a single function of a single angle. '
    + 'If it contains both sin x and cos x, '
    + 'use an identity to remove one. '
    + 'If it contains sin 2x and sin x, '
    + 'use the double angle formula so that everything is in x. '
    + 'And if it is quadratic in one function, factorise it. '
    + 'For 2 sin squared x minus sin x minus 1 equals 0, '
    + 'let s stand for sin x '
    + 'and the equation is 2 s squared minus s minus 1 equals 0, '
    + 'which factorises as (2s plus 1)(s minus 1) equals 0. '
    + 'So sin x equals minus one half or sin x equals 1, '
    + 'and each of those is now a simple equation. '
    + 'Treating the function as a single letter '
    + 'is the move that makes this obvious, '
    + 'and it is worth doing on paper. '
    + 'The second step is finding every solution, '
    + 'and here the calculator is a trap. '
    + 'An inverse sine gives one answer, '
    + 'and for a negative value it gives a negative angle, '
    + 'which may not be in the range at all. '
    + 'So do not ask the calculator for the solution. '
    + 'Ask it for the reference angle, '
    + 'using the size of the number and ignoring its sign, '
    + 'and then place the solutions yourself by the quadrant rule. '
    + 'For sin x equals minus one half '
    + 'the reference angle is 30 degrees. '
    + 'Sine is negative in the third and fourth quadrants. '
    + 'So the solutions are 180 plus 30, which is 210, '
    + 'and 360 minus 30, which is 330. '
    + 'Both are in 0 to 360, and both are correct, '
    + 'and the calculator offered neither. '
    + 'Drawing the four quadrants with the signs marked, '
    + 'once, at the top of the page, '
    + 'is the single most useful thing to do '
    + 'before starting this kind of question. '
    + 'The third step is the one that costs most marks, '
    + 'and it concerns an equation in a multiple angle. '
    + 'Suppose the question is sin 2x equals one half '
    + 'for x between 0 and 360. '
    + 'The angle inside the function is 2x, '
    + 'and as x runs from 0 to 360, '
    + '2x runs from 0 to 720. '
    + 'So you must find every solution for 2x in 0 to 720, '
    + 'which is twice as many as usual, '
    + 'and only then halve each one to get x. '
    + 'A learner who solves for 2x in 0 to 360 '
    + 'finds two solutions where there are four, '
    + 'and loses half the marks '
    + 'with no error of arithmetic anywhere. '
    + 'So the rule is: '
    + 'write down the widened range as the first line of the working, '
    + 'before anything else. '
    + 'For sin 2x equals one half with x in 0 to 360: '
    + 'reference angle 30, sine positive in the first and second '
    + 'quadrants, '
    + 'so 2x equals 30, 150, '
    + 'and then add 360 to each for the second turn, '
    + 'giving 390 and 510. '
    + 'Halving gives x equal to 15, 75, 195 and 255. '
    + 'Four solutions, '
    + 'and the widening of the range was what found the last two. '
    + 'The same reasoning applies to an equation in x plus 30 '
    + 'or in one half x: '
    + 'transform the range exactly as the angle is transformed, '
    + 'solve inside it, '
    + 'and transform back at the end. '
    + 'One last check, '
    + 'and it is quick. '
    + 'Substitute each answer into the original equation. '
    + 'Any solution that does not satisfy it '
    + 'came from squaring somewhere, '
    + 'which can introduce answers that were never solutions, '
    + 'and those have to be discarded with a word of explanation.',

  recap:
    'You have found an angle from its sine or cosine '
    + 'with a calculator, '
    + 'and you know that the functions repeat. '
    + 'This asks for every angle in a stated range, '
    + 'which the calculator cannot give you.',

  method: [
    'Reduce the equation to one function of one angle.',
    'If it is quadratic in that function, let a letter stand for it and factorise.',
    'Write down the range for the angle inside the function, widened if it is a multiple.',
    'Find the reference angle from the size of the number, ignoring its sign.',
    'Use the sign to say which quadrants the solutions are in.',
    'Build each solution: the reference angle, 180 minus it, 180 plus it, or 360 minus it.',
    'Add full turns as needed to cover the whole widened range.',
    'Transform back to x, by halving or subtracting as appropriate.',
    'Substitute each answer into the original equation to check.',
  ],

  worked: [
    {
      level: 4,
      ask: 'Solve sin x equals one half for x between 0 and 360 degrees.',
      steps: [
        'Reference angle: 30 degrees.',
        'Sine is positive in the first and second quadrants.',
        'First quadrant: 30.',
        'Second quadrant: 180 minus 30.',
      ],
      answer: 'x equals 30 or 150 degrees. '
        + 'The calculator gives only the 30.',
    },
    {
      level: 5,
      ask: 'Solve sin x equals minus one half '
        + 'for x between 0 and 360 degrees.',
      steps: [
        'Take the size of the number and ignore the sign: '
          + 'the reference angle is 30.',
        'Sine is negative in the third and fourth quadrants.',
        'Third quadrant: 180 plus 30, which is 210.',
        'Fourth quadrant: 360 minus 30, which is 330.',
      ],
      answer: 'x equals 210 or 330 degrees. '
        + 'The calculator would have offered minus 30, '
        + 'which is not in the range and is not either answer.',
    },
    {
      level: 5,
      ask: 'Solve 2 sin squared x minus sin x minus 1 equals 0 '
        + 'for x between 0 and 360 degrees.',
      steps: [
        'Let s stand for sin x: 2 s squared minus s minus 1 equals 0.',
        'Factorise: (2s plus 1)(s minus 1) equals 0.',
        'So sin x equals minus one half, or sin x equals 1.',
        'From the first: 210 and 330, as above.',
        'From the second: sin x equals 1 at 90 only.',
      ],
      answer: 'x equals 90, 210 or 330 degrees. '
        + 'Three solutions, from two simple equations.',
    },
    {
      level: 6,
      ask: 'Solve sin 2x equals one half for x between 0 and 360 degrees, '
        + 'and explain the first line of your working.',
      steps: [
        'The angle inside is 2x, and as x runs 0 to 360, '
          + '2x runs 0 to 720: write that down first.',
        'Reference angle 30, and sine is positive in the first and '
          + 'second quadrants.',
        'In 0 to 360: 2x equals 30 and 150.',
        'Add a full turn for the second revolution: 390 and 510.',
        'Halve each: 15, 75, 195, 255.',
      ],
      answer: 'x equals 15, 75, 195 or 255 degrees. '
        + 'The first line of the working is the widened range, '
        + '2x from 0 to 720, '
        + 'because the angle inside the function '
        + 'travels twice as far as x does. '
        + 'Solving in 0 to 360 would have found two of the four '
        + 'solutions, with no arithmetic error anywhere, '
        + 'which is why that line is written before anything else.',
    },
  ],

  traps: [
    {
      mistake: 'Taking the calculator answer as the only solution.',
      why: 'The functions repeat. '
        + 'Ask it for the reference angle only, '
        + 'then place the solutions by quadrant.',
    },
    {
      mistake: 'Putting a negative value into the inverse function.',
      why: 'It returns a negative angle that may be outside the range. '
        + 'Use the size of the number for the reference angle '
        + 'and the sign to choose the quadrants.',
    },
    {
      mistake: 'Solving an equation in 2x over the range given for x.',
      why: 'As x runs 0 to 360, 2x runs 0 to 720. '
        + 'Widen the range first, or half the solutions are lost.',
    },
    {
      mistake: 'Keeping every answer after squaring.',
      why: 'Squaring can introduce values that were never solutions. '
        + 'Substitute each back into the original and discard any that '
        + 'fail, with a word of explanation.',
    },
  ],

  extension:
    'An equation of the form a sin x plus b cos x equals c '
    + 'cannot be solved directly, '
    + 'and the standard method is to combine the left side '
    + 'into a single sine. '
    + 'Write a sin x plus b cos x as R sin(x plus alpha), '
    + 'with R the square root of a squared plus b squared '
    + 'and tan alpha equal to b over a. '
    + 'Then the equation becomes R sin(x plus alpha) equals c, '
    + 'which is a simple equation in the angle x plus alpha. '
    + 'Solve it over the range widened by alpha, '
    + 'and subtract alpha from each answer at the end. '
    + 'It is the same discipline as the multiple angle case: '
    + 'transform the range exactly as you transform the angle, '
    + 'and transform back only at the finish.',

  figure: {
    alt: 'A quadrant diagram drawn as a circle on axes, divided into '
      + 'four quarters labelled first to fourth and marked with which '
      + 'functions are positive in each: all three in the first, sine '
      + 'only in the second, tangent only in the third, cosine only in '
      + 'the fourth. In each quadrant the formula for building a '
      + 'solution from the reference angle is written: the reference '
      + 'angle itself, one hundred and eighty minus it, one hundred and '
      + 'eighty plus it, and three hundred and sixty minus it. Beside '
      + 'it, a worked case for sine x equals minus one half shows the '
      + 'reference angle thirty taken from the size of the number alone, '
      + 'then the third and fourth quadrants chosen because sine is '
      + 'negative there, giving two hundred and ten and three hundred '
      + 'and thirty, with the calculator answer of minus thirty shown '
      + 'crossed out as being neither of them. Below, a number line runs '
      + 'from zero to seven hundred and twenty for the multiple angle '
      + 'case, with the range for x from zero to three hundred and sixty '
      + 'drawn above it and the widened range for two x beneath, and the '
      + 'four solutions for two x marked on the long line before being '
      + 'halved to give the four values of x.',
    svg: '<svg viewBox="0 0 640 440" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* quadrant circle */
      + '<circle cx="150" cy="140" r="100" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M30 140h240"/><path d="M150 20v240"/>'
      + '</g>'
      + '<text x="186" y="80" font-size="10" fill="#0f8a4d">first: all +</text>'
      + '<text x="186" y="94" font-size="9" fill="currentColor">use the ref angle</text>'
      + '<text x="60" y="80" font-size="10" fill="#0f8a4d">second: sin +</text>'
      + '<text x="60" y="94" font-size="9" fill="currentColor">180 - ref</text>'
      + '<text x="60" y="196" font-size="10" fill="#0f8a4d">third: tan +</text>'
      + '<text x="60" y="210" font-size="9" fill="currentColor">180 + ref</text>'
      + '<text x="186" y="196" font-size="10" fill="#0f8a4d">fourth: cos +</text>'
      + '<text x="186" y="210" font-size="9" fill="currentColor">360 - ref</text>'
      /* worked case */
      + '<path d="M310 40h280" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="310" y="34" font-size="10" fill="#0f8a4d">solve sin x = -1/2 for x in 0 to 360</text>'
      + '<text x="310" y="60" font-size="10" fill="currentColor">reference angle from the SIZE of the number: 30</text>'
      + '<text x="310" y="80" font-size="10" fill="currentColor">sine is negative in the third and fourth quadrants</text>'
      + '<text x="310" y="100" font-size="10" fill="#0f8a4d">180 + 30 = 210        360 - 30 = 330</text>'
      + '<text x="310" y="126" font-size="10" fill="currentColor">the calculator offers -30</text>'
      + '<path d="M308 122h148" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="310" y="142" font-size="9" fill="#0f8a4d">which is outside the range and is neither answer</text>'
      /* multiple angle lines */
      + '<text x="40" y="300" font-size="10" fill="#0f8a4d">sin 2x = 1/2 for x in 0 to 360: the angle inside travels twice as far</text>'
      + '<path d="M60 324h260" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<text x="40" y="320" font-size="9" fill="currentColor">x</text>'
      + '<text x="56" y="342" font-size="9" fill="currentColor">0</text>'
      + '<text x="306" y="342" font-size="9" fill="currentColor">360</text>'
      + '<path d="M60 370h520" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="34" y="366" font-size="9" fill="#0f8a4d">2x</text>'
      + '<text x="56" y="388" font-size="9" fill="#0f8a4d">0</text>'
      + '<text x="306" y="388" font-size="9" fill="#0f8a4d">360</text>'
      + '<text x="562" y="388" font-size="9" fill="#0f8a4d">720</text>'
      + '<g fill="#0f8a4d">'
      + '<circle cx="82" cy="370" r="5"/><circle cx="168" cy="370" r="5"/>'
      + '<circle cx="342" cy="370" r="5"/><circle cx="428" cy="370" r="5"/>'
      + '</g>'
      + '<text x="68" y="406" font-size="9" fill="currentColor">30</text>'
      + '<text x="152" y="406" font-size="9" fill="currentColor">150</text>'
      + '<text x="326" y="406" font-size="9" fill="currentColor">390</text>'
      + '<text x="412" y="406" font-size="9" fill="currentColor">510</text>'
      + '<text x="40" y="430" font-size="10" fill="#0f8a4d">halve each: x = 15, 75, 195, 255.  solving in 0 to 360 would have found only the first two</text>'
      + '<text x="40" y="266" font-size="11" fill="currentColor">write the widened range as the FIRST line of the working, before anything else</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Building every solution from the reference angle',
      columns: ['Quadrant', 'Angles', 'Positive there', 'Solution from reference angle r'],
      rows: [
        ['First', '0 to 90', 'sin, cos, tan', 'r'],
        ['Second', '90 to 180', 'sin only', '180 - r'],
        ['Third', '180 to 270', 'tan only', '180 + r'],
        ['Fourth', '270 to 360', 'cos only', '360 - r'],
      ],
      note: 'Draw this once at the top of the page before starting. '
        + 'The sign of the number tells you which two rows to use, '
        + 'and the size of it gives r.',
    },
    {
      caption: 'How the range changes when the angle inside the function is not x',
      columns: ['Equation in', 'Range given for x', 'Range to solve over', 'At the end'],
      rows: [
        ['x', '0 to 360', '0 to 360', 'Nothing to do'],
        ['2x', '0 to 360', '0 to 720', 'Halve every solution'],
        ['3x', '0 to 360', '0 to 1080', 'Divide every solution by 3'],
        ['one half x', '0 to 360', '0 to 180', 'Double every solution'],
        ['x + 30', '0 to 360', '30 to 390', 'Subtract 30 from every solution'],
      ],
      note: 'Transform the range exactly as the angle is transformed, '
        + 'and transform back only at the finish. '
        + 'The second row is where half the marks in this topic are '
        + 'lost.',
    },
  ],

  questions: [
    {
      id: 'te-1',
      ask: 'Solve sin x equals one half for x in 0 to 360. '
        + 'Give the larger solution in degrees.',
      kind: 'numeric',
      options: [],
      answer: '150',
      teach: '180 minus 30. '
        + 'Sine is positive in the first and second quadrants.',
      level: 4,
    },
    {
      id: 'te-2',
      ask: 'Sine is negative in which quadrants?',
      kind: 'choice',
      options: [
        'Third and fourth',
        'Second and third',
        'First and second',
      ],
      answer: 'Third and fourth',
      teach: 'So the solutions are 180 plus the reference angle '
        + 'and 360 minus it.',
      level: 5,
    },
    {
      id: 'te-3',
      ask: 'For sin 2x with x between 0 and 360, '
        + 'the range to solve over is 0 to:',
      kind: 'numeric',
      options: [],
      answer: '720',
      teach: 'The angle inside travels twice as far as x. '
        + 'Write that line first, or half the solutions are lost.',
      level: 6,
    },
    {
      id: 'te-4',
      ask: 'How many solutions does sin 2x equals one half have '
        + 'for x between 0 and 360?',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'Two for each full turn of 2x, and 2x makes two turns.',
      level: 6,
    },
    {
      id: 'te-5',
      ask: '2 sin squared x minus sin x minus 1 equals 0 is solved by:',
      kind: 'choice',
      options: [
        'Letting a letter stand for sin x and factorising',
        'Taking the square root of both sides',
        'Dividing by sin x',
      ],
      answer: 'Letting a letter stand for sin x and factorising',
      teach: 'It is a quadratic in sin x, '
        + 'and dividing by sin x would lose a solution.',
      level: 5,
    },
  ],
})
