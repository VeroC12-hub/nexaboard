/**
 * Stored lessons for SHS 2 Core Mathematics: algebra, functions and
 * coordinate geometry.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── What these seven have in common ──────────────────────────────────────
 *
 * Every one of them is a place where SHS asks for a choice and then for
 * the reason. A quadratic can be solved three ways and the marks are in
 * picking the right one and saying why. A variation question gives you
 * data so that you can find the constant, and the constant is the step
 * learners skip. A sum of a progression needs the number of terms, which
 * has to be found before the sum formula can be used at all. A graph can
 * solve an equation it was not drawn for, if you rearrange the equation to
 * match the graph you have.
 *
 * So the `mechanism` in each lesson names the decision and the line that
 * has to be written down beside it, because at SHS the reason carries
 * marks of its own: the discriminant quoted, the constant stated, the
 * theorem or rule named.
 *
 * ── Notation ─────────────────────────────────────────────────────────────
 *
 * Plain words and ASCII throughout, as everywhere in this library: x
 * squared, the square root of, is proportional to. The renderer shows
 * plain text, and a learner reading aloud has to be able to say it.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── quadratic equations ─────────────────────────────────────────────────── */

teach({
  topicId: 'quadratics-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A quadratic equation has the form '
      + 'a x squared plus b x plus c equals 0. '
      + 'Make one side zero first, always. '
      + 'Then solve by factorising if it factorises, '
      + 'by completing the square if a is 1 and b is even, '
      + 'and by the formula otherwise. '
      + 'The formula is x equals minus b plus or minus '
      + 'the square root of b squared minus 4ac, all over 2a.',
    method: [
      'Rearrange so that one side is zero.',
      'Try to factorise; if it will not factorise, use the formula.',
      'Give both roots, and check one by substituting.',
    ],
  },

  idea:
    'A quadratic equation is one in which the highest power of the unknown '
    + 'is 2. '
    + 'Its standard form is a x squared plus b x plus c equals 0, '
    + 'with a not zero. '
    + 'It has at most two solutions, which are called roots. '
    + 'There are three methods. '
    + 'Factorising writes the left side as two brackets multiplied, '
    + 'and then each bracket is set to zero in turn. '
    + 'Completing the square rewrites it as '
    + 'a bracket squared plus a number, '
    + 'and then the square root is taken. '
    + 'The formula gives the roots directly: '
    + 'x equals minus b plus or minus the square root of '
    + 'b squared minus 4ac, all divided by 2a. '
    + 'The part under the square root, '
    + 'b squared minus 4ac, '
    + 'is called the discriminant. '
    + 'If it is positive there are two different roots. '
    + 'If it is zero there is one repeated root. '
    + 'If it is negative there is no real root.',

  mechanism:
    'Three things decide the marks in this topic, '
    + 'and only one of them is arithmetic. '
    + 'The first is the rule that one side must be zero before you start. '
    + 'The reason is the only reason factorising works at all. '
    + 'If two things multiply to give zero, '
    + 'then one of them must be zero. '
    + 'That is a fact about zero and about no other number. '
    + 'So from (x minus 2)(x minus 3) equals 0 '
    + 'you may write x equals 2 or x equals 3. '
    + 'But from (x minus 2)(x minus 3) equals 2 '
    + 'you may write nothing at all, '
    + 'because two numbers can multiply to 2 in endless ways. '
    + 'A learner who factorises without clearing the side '
    + 'has written a line that does not follow, '
    + 'and it is marked wrong even when the final answer is right. '
    + 'The second is choosing the method, '
    + 'which SHS asks for directly. '
    + 'Try factorising first, because it is quickest when it works: '
    + 'look for two numbers that multiply to a times c '
    + 'and add to b. '
    + 'If you cannot find them in half a minute, stop looking, '
    + 'because most quadratics do not factorise over whole numbers '
    + 'and the search is where the time goes. '
    + 'Use the formula then, '
    + 'because it always works. '
    + 'Use completing the square when the question asks for it, '
    + 'and also when it asks for the greatest or least value, '
    + 'because that method is the one that hands you the turning point. '
    + 'Writing x squared minus 6x plus 5 '
    + 'as (x minus 3) squared minus 4 '
    + 'says at once that the least value is minus 4 and it happens at x '
    + 'equals 3, '
    + 'which no other method tells you. '
    + 'That is the real argument for the method, '
    + 'and it is worth stating when a question asks why. '
    + 'The third is the discriminant, '
    + 'which is a whole mark on its own and takes one line. '
    + 'Before solving, or when asked how many roots, '
    + 'work out b squared minus 4ac and say what it means. '
    + 'For 2 x squared plus 3x plus 5 equals 0, '
    + 'that is 9 minus 40, which is minus 31, '
    + 'so there is no real root '
    + 'and the graph does not cross the x axis. '
    + 'Two sign slips are worth naming because they cost most. '
    + 'In the formula, minus b means change the sign of b: '
    + 'if b is minus 5, then minus b is plus 5. '
    + 'And minus 4ac with a negative c becomes plus, '
    + 'so b squared minus 4ac gets larger, not smaller. '
    + 'Both are caught by the same habit: '
    + 'write a, b and c down with their signs before you touch the formula.',

  recap:
    'You have solved linear equations, '
    + 'where there is one unknown and one answer, '
    + 'and you have expanded two brackets. '
    + 'This goes the other way, from the expanded form back to brackets, '
    + 'and it has two answers instead of one.',

  method: [
    'Rearrange until one side is zero.',
    'Write down a, b and c with their signs.',
    'Work out the discriminant, b squared minus 4ac, and say what it means.',
    'Look for two numbers multiplying to a times c and adding to b.',
    'If you find them, factorise and set each bracket to zero.',
    'If not, substitute into the formula.',
    'If the question wants a greatest or least value, complete the square.',
    'Give both roots.',
    'Check one root by substituting it back into the original equation.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Solve x squared minus 7x plus 12 equals 0 by factorising.',
      steps: [
        'One side is already zero.',
        'Two numbers multiplying to 12 and adding to minus 7 '
          + 'are minus 3 and minus 4.',
        'So (x minus 3)(x minus 4) equals 0.',
        'Set each bracket to zero.',
      ],
      answer: 'x equals 3 or x equals 4.',
    },
    {
      level: 4,
      ask: 'Solve 2 x squared plus 5x minus 3 equals 0.',
      steps: [
        'a is 2, b is 5, c is minus 3.',
        'Discriminant: 25 minus 4 times 2 times minus 3, '
          + 'which is 25 plus 24, so 49.',
        'The square root of 49 is 7, so it factorises.',
        'x equals minus 5 plus or minus 7, all over 4.',
        'That gives 2 over 4, and minus 12 over 4.',
      ],
      answer: 'x equals one half or x equals minus 3. '
        + 'Notice that minus 4ac became plus 24 because c was negative.',
    },
    {
      level: 5,
      ask: 'Express x squared minus 6x plus 5 in completed square form, '
        + 'and give its least value.',
      steps: [
        'Half of minus 6 is minus 3.',
        'So (x minus 3) squared gives x squared minus 6x plus 9.',
        'That is 4 too much, so subtract 4.',
        'x squared minus 6x plus 5 equals (x minus 3) squared minus 4.',
        'A square is never negative, so the smallest it can be is zero.',
      ],
      answer: '(x minus 3) squared minus 4. '
        + 'The least value is minus 4, and it happens at x equals 3. '
        + 'No other method gives the turning point.',
    },
    {
      level: 6,
      ask: 'A learner writes (x minus 1)(x plus 4) equals 6, '
        + 'then x minus 1 equals 6 or x plus 4 equals 6. '
        + 'Explain the error and solve it properly.',
      steps: [
        'Two factors multiplying to zero force one to be zero.',
        'Two factors multiplying to 6 do not force either to be 6.',
        'So the side must be cleared first.',
        'Expand: x squared plus 3x minus 4 equals 6.',
        'So x squared plus 3x minus 10 equals 0.',
        'That factorises as (x plus 5)(x minus 2) equals 0.',
      ],
      answer: 'The zero product rule was used on a product of 6, '
        + 'where it does not hold. '
        + 'Properly, x equals minus 5 or x equals 2.',
    },
  ],

  traps: [
    {
      mistake: 'Factorising without making one side zero.',
      why: 'The rule is that a product equal to zero forces a factor to '
        + 'be zero. It says nothing about a product equal to 6.',
    },
    {
      mistake: 'Taking minus b to mean a negative number.',
      why: 'It means change the sign of b. '
        + 'If b is minus 5 then minus b is plus 5.',
    },
    {
      mistake: 'Subtracting when c is negative in b squared minus 4ac.',
      why: 'Minus 4ac with a negative c becomes an addition, '
        + 'so the discriminant grows.',
    },
    {
      mistake: 'Giving one root only.',
      why: 'A quadratic has two, unless the discriminant is zero. '
        + 'Write both, with or between them.',
    },
  ],

  extension:
    'The sum and product of the roots can be read straight off the '
    + 'coefficients. '
    + 'If the roots are p and q then '
    + 'p plus q equals minus b over a, '
    + 'and p times q equals c over a. '
    + 'This gives a quick check on any answer, '
    + 'and it lets you build an equation from its roots: '
    + 'roots of 2 and minus 5 give a sum of minus 3 and a product of '
    + 'minus 10, '
    + 'so the equation is x squared plus 3x minus 10 equals 0.',

  figure: {
    alt: 'A set of axes with three parabolas drawn to show what the '
      + 'discriminant means. The first crosses the x axis at two points, '
      + 'labelled as b squared minus 4ac greater than zero giving two '
      + 'different roots. The second just touches the x axis at one '
      + 'point, labelled as b squared minus 4ac equal to zero giving one '
      + 'repeated root. The third sits entirely above the x axis, '
      + 'labelled as b squared minus 4ac less than zero giving no real '
      + 'root. Beside them a fourth drawing shows the completed square '
      + 'form: the parabola of x squared minus 6x plus 5 with its lowest '
      + 'point marked at x equals 3 and y equals minus 4, and a note '
      + 'that completing the square is the method that hands you that '
      + 'point.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* three small axes */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M30 140h150"/><path d="M105 50v110"/>'
      + '<path d="M210 140h150"/><path d="M285 50v110"/>'
      + '<path d="M390 140h150"/><path d="M465 50v110"/>'
      + '</g>'
      + '<path d="M50 60C80 190 130 190 160 60" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<g fill="#0f8a4d"><circle cx="74" cy="140" r="4"/><circle cx="136" cy="140" r="4"/></g>'
      + '<text x="30" y="178" font-size="11" fill="currentColor">two different roots</text>'
      + '<text x="30" y="194" font-size="11" fill="#0f8a4d">b squared minus 4ac &gt; 0</text>'
      + '<path d="M230 60C260 140 310 140 340 60" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<circle cx="285" cy="140" r="4" fill="#0f8a4d"/>'
      + '<text x="210" y="178" font-size="11" fill="currentColor">one repeated root</text>'
      + '<text x="210" y="194" font-size="11" fill="#0f8a4d">b squared minus 4ac = 0</text>'
      + '<path d="M410 56C440 112 490 112 520 56" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="390" y="178" font-size="11" fill="currentColor">no real root</text>'
      + '<text x="390" y="194" font-size="11" fill="#0f8a4d">b squared minus 4ac &lt; 0</text>'
      /* completed square graph */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M60 300h380"/><path d="M120 236v130"/>'
      + '</g>'
      + '<path d="M130 250C180 420 260 420 320 250" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<circle cx="225" cy="348" r="5" fill="#0f8a4d"/>'
      + '<path d="M225 348V300" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" fill="none"/>'
      + '<path d="M225 348H120" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" fill="none"/>'
      + '<text x="214" y="294" font-size="11" fill="currentColor">x = 3</text>'
      + '<text x="76" y="344" font-size="11" fill="currentColor">y = -4</text>'
      + '<text x="330" y="262" font-size="11" fill="currentColor">y = x squared minus 6x plus 5</text>'
      + '<text x="330" y="282" font-size="11" fill="#0f8a4d">= (x minus 3) squared minus 4</text>'
      + '<text x="330" y="304" font-size="11" fill="#0f8a4d">so the least value is minus 4,</text>'
      + '<text x="330" y="320" font-size="11" fill="#0f8a4d">reached at x equals 3</text>'
      + '<text x="60" y="390" font-size="11" fill="currentColor">the roots are where the curve meets the x axis, and the discriminant counts them without drawing</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Which method to use, and what each one gives you besides the roots',
      columns: ['Method', 'Use it when', 'Also gives you', 'Risk'],
      rows: [
        ['Factorising', 'Two numbers multiply to ac and add to b', 'Nothing extra', 'Time wasted searching when it will not factorise'],
        ['Completing the square', 'a is 1, or a greatest or least value is asked for', 'The turning point', 'Sign slips when b is odd or negative'],
        ['Formula', 'Always; especially when factorising fails', 'The discriminant on the way', 'Minus b and minus 4ac sign errors'],
      ],
      note: 'Try factorising for half a minute, then stop and use the '
        + 'formula. Most quadratics do not factorise over whole numbers.',
    },
  ],

  questions: [
    {
      id: 'qd-1',
      ask: 'Solve x squared minus 5x plus 6 equals 0. '
        + 'Give the larger root.',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'It factorises as (x minus 2)(x minus 3) equals 0, '
        + 'so the roots are 2 and 3.',
      level: 3,
    },
    {
      id: 'qd-2',
      ask: 'For 2 x squared plus 5x minus 3 equals 0, '
        + 'give the discriminant.',
      kind: 'numeric',
      options: [],
      answer: '49',
      teach: '25 minus 4 times 2 times minus 3 is 25 plus 24, which is 49. '
        + 'The negative c made it an addition.',
      level: 5,
    },
    {
      id: 'qd-3',
      ask: 'A negative discriminant means the equation has:',
      kind: 'choice',
      options: [
        'No real root',
        'One repeated root',
        'Two different roots',
      ],
      answer: 'No real root',
      teach: 'The graph then never meets the x axis.',
      level: 4,
    },
    {
      id: 'qd-4',
      ask: 'Which method hands you the turning point of the curve?',
      kind: 'choice',
      options: [
        'Completing the square',
        'Factorising',
        'The formula',
      ],
      answer: 'Completing the square',
      teach: 'From (x minus 3) squared minus 4 you read off that the '
        + 'least value is minus 4 at x equals 3.',
      level: 5,
    },
    {
      id: 'qd-5',
      ask: 'From (x minus 1)(x plus 4) equals 6, you may conclude:',
      kind: 'choice',
      options: [
        'Nothing yet; clear the side to zero first',
        'x minus 1 equals 6 or x plus 4 equals 6',
        'x equals 7 or x equals 2',
      ],
      answer: 'Nothing yet; clear the side to zero first',
      teach: 'Only a product equal to zero forces a factor to be zero. '
        + 'Expand, subtract 6, then factorise.',
      level: 6,
    },
  ],
})

/* ── inequalities and linear programming ─────────────────────────────────── */

teach({
  topicId: 'inequalities-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An inequality is solved like an equation, with one change: '
      + 'multiplying or dividing both sides by a negative number '
      + 'reverses the sign. '
      + 'Two or more inequalities in x and y '
      + 'cut the plane down to a feasible region. '
      + 'The greatest or least value of an expression '
      + 'over that region is always found at a corner, '
      + 'so test the corners.',
    method: [
      'Solve each inequality, reversing the sign if you divide by a negative.',
      'Draw each boundary line and shade the side that fails.',
      'Test every corner of the region in the expression.',
    ],
  },

  idea:
    'An inequality says one side is larger or smaller than the other. '
    + 'The signs are less than, greater than, '
    + 'less than or equal to, and greater than or equal to. '
    + 'It is solved by the same steps as an equation, with one change. '
    + 'Multiplying or dividing both sides by a negative number '
    + 'reverses the direction. '
    + 'Now take two unknowns. '
    + 'The inequality x plus y less than or equal to 8 '
    + 'is satisfied by every point on one side of the line '
    + 'x plus y equals 8. '
    + 'Several such inequalities together leave a region of the plane. '
    + 'That region is called the feasible region. '
    + 'The boundary line is drawn solid '
    + 'if the inequality includes equal to, '
    + 'and broken if it does not. '
    + 'Linear programming finds the largest or smallest value '
    + 'of an expression inside such a region. '
    + 'That expression is the objective function. '
    + 'The inequalities are the constraints. '
    + 'They usually include x and y greater than or equal to 0, '
    + 'since a quantity is not negative.',

  mechanism:
    'Three things in this topic are worth understanding rather than '
    + 'learning. '
    + 'The first is why the sign reverses. '
    + 'Start with something plainly true: 2 is less than 5. '
    + 'Multiply both sides by minus 1. '
    + 'Minus 2 and minus 5. '
    + 'Minus 2 is now the larger, '
    + 'because on a number line it lies to the right of minus 5. '
    + 'So the statement is only true if the sign is turned round. '
    + 'That is the whole reason, '
    + 'and seeing it once stops it being a rule to forget. '
    + 'The practical dodge is worth knowing too: '
    + 'you can avoid dividing by a negative altogether '
    + 'by moving the term instead. '
    + 'From 3 minus 2x greater than 7, '
    + 'add 2x to both sides and subtract 7, '
    + 'giving minus 4 greater than 2x, '
    + 'so x less than minus 2. '
    + 'Same answer, no reversal needed. '
    + 'The second is which side of the line to shade, '
    + 'and there is one method that never fails: '
    + 'test a point. '
    + 'Take the origin, 0 and 0, if the line does not pass through it. '
    + 'Put it into the inequality. '
    + 'If the statement is true, '
    + 'the origin is in the region; '
    + 'if false, the region is on the other side. '
    + 'This takes five seconds '
    + 'and it is better than any rule about the sign, '
    + 'because a rule has to be remembered '
    + 'and a test only has to be done. '
    + 'Be clear in your answer which convention you are using, '
    + 'since some papers ask you to shade the wanted region '
    + 'and others to shade the unwanted part '
    + 'so that the region is left clear. '
    + 'Say in words which you have done, '
    + 'and label the region R. '
    + 'The third is the fact that makes linear programming work at all, '
    + 'and it is worth stating because it saves enormous labour. '
    + 'The largest and smallest values of a linear expression '
    + 'over a region bounded by straight lines '
    + 'always occur at a corner. '
    + 'The reason is that moving in a straight line across the region '
    + 'changes the expression steadily in one direction, '
    + 'so it keeps improving until you hit the edge, '
    + 'and then along the edge until you hit a corner. '
    + 'There is no hill in the middle to get stuck on. '
    + 'So you do not test the inside of the region at all. '
    + 'Find the corners, '
    + 'which means solving the boundary lines in pairs, '
    + 'put each corner into the objective function, '
    + 'and read off the best one. '
    + 'Set the work out as a small table of corners and values, '
    + 'because that table is what an examiner marks '
    + 'and it is where learners lose marks by guessing from the picture. '
    + 'One more practical point. '
    + 'In a real problem the answer often has to be a whole number, '
    + 'since you cannot buy half a bag of cement. '
    + 'The corner found by solving two lines may not be whole, '
    + 'and in that case test the whole number points nearest to it '
    + 'that are still inside the region, '
    + 'and say that you have done so.',

  recap:
    'You have solved linear equations '
    + 'and drawn straight line graphs. '
    + 'This asks what happens when the equals sign becomes '
    + 'less than or greater than, '
    + 'so that the answer is a range rather than a value, '
    + 'and in two unknowns a region rather than a point.',

  method: [
    'Write each condition of the problem as an inequality.',
    'Add x greater than or equal to 0 and y greater than or equal to 0 if the quantities cannot be negative.',
    'Draw each boundary line, solid if equal to is included and broken if not.',
    'Test the origin in each inequality to decide which side to keep.',
    'Shade according to the convention asked for, and say which you used.',
    'Label the feasible region R.',
    'Find each corner by solving two boundary lines together.',
    'Put every corner into the objective function, in a table.',
    'Read off the greatest or least value, and state where it occurs.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Solve 3x plus 4 less than or equal to 19.',
      steps: [
        'Subtract 4 from both sides: 3x less than or equal to 15.',
        'Divide by 3, which is positive, so the sign does not change.',
      ],
      answer: 'x less than or equal to 5.',
    },
    {
      level: 4,
      ask: 'Solve 3 minus 2x greater than 7, '
        + 'in two ways, and compare.',
      steps: [
        'First way: subtract 3, giving minus 2x greater than 4, '
          + 'then divide by minus 2 and reverse: x less than minus 2.',
        'Second way: add 2x to both sides, giving 3 greater than 7 plus 2x.',
        'Subtract 7: minus 4 greater than 2x, so x less than minus 2.',
      ],
      answer: 'x less than minus 2 either way. '
        + 'The second way never divides by a negative, '
        + 'so there is no sign to remember to reverse.',
    },
    {
      level: 5,
      ask: 'A region is given by x plus y less than or equal to 8, '
        + 'y less than or equal to 2x, '
        + 'x greater than or equal to 0 and y greater than or equal to 0. '
        + 'Find its corners.',
      steps: [
        'Where x plus y equals 8 meets y equals 2x: '
          + 'x plus 2x equals 8, so x equals 8 over 3 and y equals 16 over 3.',
        'Where x plus y equals 8 meets y equals 0: the point (8, 0).',
        'Where y equals 2x meets x equals 0: the point (0, 0).',
      ],
      answer: 'The corners are (0, 0), (8, 0) '
        + 'and (8 over 3, 16 over 3), '
        + 'which is about (2.67, 5.33).',
    },
    {
      level: 6,
      ask: 'A trader has 60 cedis and space for 20 items. '
        + 'A bag of rice costs 5 cedis and gives 3 cedis profit; '
        + 'a bag of beans costs 2 cedis and gives 1 cedi profit. '
        + 'How many of each should she buy?',
      steps: [
        'Let x be bags of rice and y bags of beans.',
        'Money: 5x plus 2y less than or equal to 60.',
        'Space: x plus y less than or equal to 20.',
        'Also x and y are at least 0, and whole numbers.',
        'Profit to maximise: P equals 3x plus y.',
        'Corners: (0, 0) gives 0. (12, 0) gives 36. (0, 20) gives 20.',
        'Where 5x plus 2y equals 60 meets x plus y equals 20: '
          + 'x equals 20 over 3, y equals 40 over 3, '
          + 'giving P equals 20 plus 13.33, which is 33.33.',
      ],
      answer: 'The greatest profit is 36 cedis, at 12 bags of rice '
        + 'and no beans. '
        + 'The fractional corner gives less, '
        + 'and in any case the answer must be whole bags, '
        + 'which is worth saying in the answer.',
    },
  ],

  traps: [
    {
      mistake: 'Dividing by a negative and keeping the sign.',
      why: 'Multiplying 2 less than 5 by minus 1 gives minus 2 and '
        + 'minus 5, and minus 2 is the larger. '
        + 'Reverse the sign, or move the term instead.',
    },
    {
      mistake: 'Guessing which side of the line to shade.',
      why: 'Test the origin in the inequality. '
        + 'True means the origin is in the region; false means it is not.',
    },
    {
      mistake: 'Reading the best point off the drawing.',
      why: 'A drawing is not accurate enough. '
        + 'Solve the boundary lines in pairs and tabulate the corners.',
    },
    {
      mistake: 'Testing points inside the region.',
      why: 'A linear expression has no hill in the middle, '
        + 'so the best value is always at a corner. '
        + 'Only the corners need testing.',
    },
  ],

  extension:
    'There is a quick way to see which corner will win, '
    + 'and it is useful as a check. '
    + 'Draw the objective function as a line, '
    + 'such as 3x plus y equals 12, '
    + 'then slide that line across the region '
    + 'keeping its gradient. '
    + 'The last corner it touches as it slides outwards '
    + 'is where the maximum is. '
    + 'This also shows why a tie can happen: '
    + 'if the objective line is parallel to an edge, '
    + 'every point along that edge gives the same value, '
    + 'and both of its corners are correct answers.',

  figure: {
    alt: 'A pair of axes with a feasible region shaded. Three boundary '
      + 'lines are drawn: x plus y equals 8 sloping down from the y '
      + 'axis, y equals 2x rising from the origin, and the two axes '
      + 'themselves. The region satisfying all four constraints is '
      + 'shaded and labelled R, and its three corners are ringed and '
      + 'labelled with their coordinates: the origin, the point eight '
      + 'comma zero, and the intersection of the two sloping lines at '
      + 'about two point six seven comma five point three three. A '
      + 'dashed line representing the objective function is drawn across '
      + 'the region with an arrow showing it sliding outwards, and a '
      + 'note says that the last corner it touches is where the maximum '
      + 'lies, which is why only corners are tested.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* axes */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M70 340h470"/><path d="M70 340V40"/>'
      + '</g>'
      + '<path d="M62 50l8-14 8 14Z" fill="currentColor"/>'
      + '<path d="M530 332l14 8-14 8Z" fill="currentColor"/>'
      + '<text x="548" y="346" font-size="12" fill="currentColor">x</text>'
      + '<text x="56" y="34" font-size="12" fill="currentColor">y</text>'
      /* region shading */
      + '<path d="M70 340L390 340L220 170Z" fill="currentColor" fill-opacity="0.16" stroke="none"/>'
      /* line x+y=8 */
      + '<path d="M70 120L390 340" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="300" y="196" font-size="11" fill="currentColor">x plus y = 8</text>'
      /* line y=2x */
      + '<path d="M70 340L250 120" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="150" y="132" font-size="11" fill="currentColor">y = 2x</text>'
      /* corners */
      + '<g stroke="#0f8a4d" stroke-width="3" fill="none">'
      + '<circle cx="70" cy="340" r="7"/><circle cx="390" cy="340" r="7"/><circle cx="220" cy="170" r="7"/>'
      + '</g>'
      + '<text x="40" y="364" font-size="11" fill="#0f8a4d">(0, 0)</text>'
      + '<text x="372" y="364" font-size="11" fill="#0f8a4d">(8, 0)</text>'
      + '<text x="228" y="164" font-size="11" fill="#0f8a4d">(2.67, 5.33)</text>'
      + '<text x="170" y="300" font-size="16" fill="currentColor">R</text>'
      /* objective line sliding */
      + '<path d="M120 340L240 280" stroke="#0f8a4d" stroke-width="2" stroke-dasharray="7 5" fill="none"/>'
      + '<path d="M300 340L420 280" stroke="#0f8a4d" stroke-width="2" stroke-dasharray="7 5" fill="none"/>'
      + '<path d="M250 310h40" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M284 304l10 6-10 6Z" fill="#0f8a4d"/>'
      + '<text x="408" y="272" font-size="11" fill="#0f8a4d">the objective line slides out</text>'
      + '<text x="70" y="384" font-size="11" fill="currentColor">the last corner it touches is the maximum, so only the corners are ever tested</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'How each inequality is drawn and which side is kept',
      columns: ['Inequality', 'Boundary line', 'Drawn as', 'Test the origin', 'Keep'],
      rows: [
        ['x plus y less than or equal to 8', 'x plus y = 8', 'Solid', '0 is less than 8, true', 'The side with the origin'],
        ['y less than or equal to 2x', 'y = 2x', 'Solid', 'Line passes through the origin; test (1, 0)', 'The side with (1, 0)'],
        ['x greater than 2', 'x = 2', 'Broken', '0 is not greater than 2, false', 'The side away from the origin'],
        ['y greater than or equal to 0', 'y = 0', 'Solid', 'On the line; test (0, 1)', 'Above the x axis'],
      ],
      note: 'The fourth column is the only method worth using. '
        + 'A test takes five seconds; a rule has to be remembered.',
    },
    {
      caption: 'Testing the corners of the trader problem for the greatest profit',
      columns: ['Corner', 'Bags of rice', 'Bags of beans', 'Profit, 3x plus y'],
      rows: [
        ['(0, 0)', '0', '0', '0 cedis'],
        ['(12, 0)', '12', '0', '36 cedis'],
        ['(0, 20)', '0', '20', '20 cedis'],
        ['(6.67, 13.33)', 'Not whole', 'Not whole', 'About 33.33 cedis'],
      ],
      note: 'The table is what an examiner marks. '
        + 'The best corner here is also whole, which is lucky; '
        + 'when it is not, test the nearest whole points inside the '
        + 'region and say so.',
    },
  ],

  questions: [
    {
      id: 'in-1',
      ask: 'Solve 2x plus 3 less than 11. Give the largest whole number '
        + 'value x can take.',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: '2x less than 8, so x less than 4. '
        + 'The largest whole number below 4 is 3.',
      level: 3,
    },
    {
      id: 'in-2',
      ask: 'Dividing both sides of an inequality by a negative number:',
      kind: 'choice',
      options: [
        'Reverses the direction of the sign',
        'Leaves the sign unchanged',
        'Makes the inequality false',
      ],
      answer: 'Reverses the direction of the sign',
      teach: '2 is less than 5, but minus 2 is greater than minus 5.',
      level: 4,
    },
    {
      id: 'in-3',
      ask: 'An inequality with less than, and no equal to, '
        + 'has its boundary drawn:',
      kind: 'choice',
      options: ['Broken', 'Solid', 'Not at all'],
      answer: 'Broken',
      teach: 'The points on the line itself are not included.',
      level: 4,
    },
    {
      id: 'in-4',
      ask: 'The greatest value of a linear expression over a region '
        + 'bounded by straight lines is always at:',
      kind: 'choice',
      options: [
        'A corner',
        'The centre',
        'The longest edge',
      ],
      answer: 'A corner',
      teach: 'There is no hill in the middle, '
        + 'so the value keeps improving until it reaches an edge '
        + 'and then a corner.',
      level: 5,
    },
    {
      id: 'in-5',
      ask: 'To decide which side of a line to shade, the safest method is '
        + 'to:',
      kind: 'choice',
      options: [
        'Test a point such as the origin in the inequality',
        'Look at the sign of the inequality',
        'Shade above the line for greater than',
      ],
      answer: 'Test a point such as the origin in the inequality',
      teach: 'True means that point is in the region. '
        + 'The rules about above and below fail for a rearranged '
        + 'inequality.',
      level: 6,
    },
  ],
})

/* ── variation ───────────────────────────────────────────────────────────── */

teach({
  topicId: 'variation',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Direct variation: y equals k x, so y over x is constant. '
      + 'Inverse variation: y equals k over x, so y times x is constant. '
      + 'Joint variation: y depends on two or more things multiplied. '
      + 'Partial variation: y equals a plus b x, '
      + 'a fixed part plus a varying part. '
      + 'Always find the constant from the given values first, '
      + 'then answer the question.',
    method: [
      'Write the relation with the constant k in it.',
      'Put in the given pair of values and find k.',
      'Rewrite the relation with k known, then answer.',
    ],
  },

  idea:
    'Two quantities vary directly when one is a fixed multiple of the '
    + 'other. '
    + 'Then y equals k x, '
    + 'and y divided by x is always the same number, '
    + 'which is k, the constant of variation. '
    + 'Doubling x doubles y. '
    + 'They vary inversely when one gets larger as the other gets smaller, '
    + 'in such a way that their product stays the same. '
    + 'Then y equals k over x, '
    + 'and y times x equals k. '
    + 'Doubling x halves y. '
    + 'Joint variation means one quantity depends on two or more others '
    + 'at once, '
    + 'such as y equals k x z, '
    + 'or y equals k x over z, '
    + 'which is direct in x and inverse in z. '
    + 'Partial variation has a fixed part and a varying part: '
    + 'y equals a plus b x. '
    + 'A taxi fare of 5 cedis plus 2 cedis a kilometre '
    + 'is partial variation. '
    + 'The symbol for is proportional to is often used, '
    + 'and the first step is always to replace it '
    + 'with an equals sign and a constant.',

  mechanism:
    'Two mistakes account for nearly every lost mark in this topic, '
    + 'and both are about the constant. '
    + 'The first is answering without finding it. '
    + 'A learner reads that y is proportional to x, '
    + 'that y is 12 when x is 3, '
    + 'and that x becomes 5, '
    + 'and writes that y is 20 '
    + 'by noticing that 12 over 3 is 4 and 4 times 5 is 20. '
    + 'The answer is right. '
    + 'The marks are not all there, '
    + 'because the method mark is for the line y equals k x, '
    + 'then 12 equals k times 3, so k equals 4, '
    + 'then y equals 4x. '
    + 'The habit matters more than it looks, '
    + 'because the shortcut stops working the moment the variation '
    + 'is not direct. '
    + 'In inverse variation the same reasoning gives the wrong answer: '
    + 'if y is 12 when x is 3, inversely, then k is 36, '
    + 'and when x is 5, y is 7.2, not 20. '
    + 'So write the relation first, every time, '
    + 'and the kind of variation decides the arithmetic for you. '
    + 'The second mistake is in partial variation, '
    + 'and it is a counting mistake. '
    + 'y equals a plus b x has two unknown constants, not one. '
    + 'So one pair of values cannot find them, '
    + 'and a learner who tries ends up guessing. '
    + 'Two pairs are needed, '
    + 'and they give two simultaneous equations '
    + 'which are then solved together. '
    + 'That is why a partial variation question '
    + 'always hands you two sets of values, '
    + 'and if you have been given two sets '
    + 'the question is telling you that the variation is partial. '
    + 'That is a useful signal to read off the question itself. '
    + 'There is a third thing worth knowing, '
    + 'because it tells you which kind you are looking at '
    + 'when the question does not say. '
    + 'Test the given data. '
    + 'If y over x comes out the same for each pair, it is direct. '
    + 'If y times x comes out the same, it is inverse. '
    + 'If neither is constant but the differences in y '
    + 'are proportional to the differences in x, it is partial. '
    + 'One line of arithmetic settles it, '
    + 'and that line is itself worth a mark '
    + 'in a question that asks you to show the variation is of a given '
    + 'kind. '
    + 'Last, a caution about the word proportional. '
    + 'In ordinary speech people say proportional '
    + 'for anything that grows together. '
    + 'In mathematics it means the ratio is constant, '
    + 'which is a much stronger claim, '
    + 'and it fails for partial variation. '
    + 'A taxi fare is not proportional to distance: '
    + 'double the distance and the fare does not double, '
    + 'because the 5 cedis at the start did not double. '
    + 'Being able to say that is a good test of whether a learner '
    + 'understands the topic or has learned its formulas.',

  recap:
    'You have met ratio and the unitary method, '
    + 'where you find the cost of one thing and then multiply. '
    + 'This gives that a general form, '
    + 'and adds the cases where one quantity grows as the other shrinks.',

  method: [
    'Read which quantities vary, and in which way.',
    'Write the relation with a constant k: k x, k over x, k x z.',
    'For partial variation, write y equals a plus b x, with two constants.',
    'Put the given values in and find k, or find a and b from two pairs.',
    'Write the relation again with the constants known.',
    'Put the new value in and answer the question.',
    'If the kind of variation is not stated, test y over x and y times x.',
    'State the constant in your answer; it often carries a mark.',
  ],

  worked: [
    {
      level: 3,
      ask: 'y varies directly as x. y is 12 when x is 3. '
        + 'Find y when x is 5.',
      steps: [
        'Write y equals k x.',
        '12 equals k times 3, so k equals 4.',
        'So y equals 4x.',
        'When x is 5, y equals 20.',
      ],
      answer: 'y equals 20, with k equals 4.',
    },
    {
      level: 4,
      ask: 'y varies inversely as x. y is 12 when x is 3. '
        + 'Find y when x is 5.',
      steps: [
        'Write y equals k over x.',
        '12 equals k over 3, so k equals 36.',
        'So y equals 36 over x.',
        'When x is 5, y equals 7.2.',
      ],
      answer: 'y equals 7.2, with k equals 36. '
        + 'Compare with the direct case: same data, different relation, '
        + 'quite different answer.',
    },
    {
      level: 5,
      ask: 'P varies directly as Q and inversely as R. '
        + 'P is 10 when Q is 4 and R is 2. '
        + 'Find P when Q is 9 and R is 3.',
      steps: [
        'Write P equals k Q over R.',
        '10 equals k times 4 over 2, so 10 equals 2k, so k equals 5.',
        'So P equals 5Q over R.',
        'P equals 5 times 9 over 3, which is 45 over 3.',
      ],
      answer: 'P equals 15, with k equals 5.',
    },
    {
      level: 6,
      ask: 'A taxi fare is part fixed and part proportional to distance. '
        + 'A 6 kilometre trip costs 17 cedis '
        + 'and a 10 kilometre trip costs 25 cedis. '
        + 'Find the fare for 14 kilometres, '
        + 'and say why the fare is not proportional to distance.',
      steps: [
        'Write C equals a plus b d, with two unknowns.',
        '17 equals a plus 6b.',
        '25 equals a plus 10b.',
        'Subtract: 8 equals 4b, so b equals 2.',
        'Then a equals 17 minus 12, which is 5.',
        'So C equals 5 plus 2d.',
        'For d equals 14: C equals 5 plus 28.',
      ],
      answer: '33 cedis. '
        + 'The fare is not proportional to distance '
        + 'because doubling the distance does not double the fare: '
        + 'the fixed 5 cedis does not double. '
        + 'Two pairs of values were needed because there were two '
        + 'unknown constants.',
    },
  ],

  traps: [
    {
      mistake: 'Scaling the answer without writing the relation.',
      why: 'It works for direct variation and gives a wrong answer for '
        + 'inverse. Write y equals k x or y equals k over x first.',
    },
    {
      mistake: 'Using one pair of values for partial variation.',
      why: 'y equals a plus b x has two unknown constants, '
        + 'so two pairs and two simultaneous equations are needed.',
    },
    {
      mistake: 'Calling a part fixed charge proportional.',
      why: 'Proportional means the ratio is constant. '
        + 'With a fixed part, doubling the input does not double the '
        + 'output.',
    },
    {
      mistake: 'Leaving the constant out of the answer.',
      why: 'The question usually wants the relation stated, '
        + 'and the value of k is often a mark on its own.',
    },
  ],

  extension:
    'Variation also appears with squares and roots, '
    + 'and the method does not change. '
    + 'If y varies as the square of x, then y equals k x squared, '
    + 'so trebling x makes y nine times larger. '
    + 'If y varies inversely as the square of x, then y equals k over x '
    + 'squared, '
    + 'which is the shape of the law of gravitation '
    + 'and of the brightness of a lamp with distance. '
    + 'Doubling the distance from a lamp '
    + 'gives a quarter of the light, not half, '
    + 'and that is the practical meaning of an inverse square law.',

  figure: {
    alt: 'Four small sets of axes showing the shape of each kind of '
      + 'variation. The first shows direct variation as a straight line '
      + 'through the origin, labelled y equals k x, with a note that the '
      + 'ratio y over x stays the same. The second shows inverse '
      + 'variation as a curve falling steeply and then levelling without '
      + 'touching either axis, labelled y equals k over x, with a note '
      + 'that the product y times x stays the same. The third shows '
      + 'partial variation as a straight line that cuts the y axis above '
      + 'the origin, labelled y equals a plus b x, with the intercept a '
      + 'marked as the fixed part and the gradient b marked as the rate. '
      + 'The fourth shows inverse square variation as a curve falling '
      + 'much more steeply than the inverse one, labelled y equals k over '
      + 'x squared. A note beneath says that the partial line does not '
      + 'pass through the origin, which is exactly why a part fixed '
      + 'charge is not proportional.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* direct */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M40 150h130"/><path d="M40 150V40"/>'
      + '</g>'
      + '<path d="M40 150L160 50" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="40" y="176" font-size="11" fill="currentColor">direct: y = k x</text>'
      + '<text x="40" y="192" font-size="10" fill="#0f8a4d">y over x stays the same</text>'
      /* inverse */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M210 150h130"/><path d="M210 150V40"/>'
      + '</g>'
      + '<path d="M224 48C250 130 270 142 334 146" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="210" y="176" font-size="11" fill="currentColor">inverse: y = k over x</text>'
      + '<text x="210" y="192" font-size="10" fill="#0f8a4d">y times x stays the same</text>'
      /* partial */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M380 150h130"/><path d="M380 150V40"/>'
      + '</g>'
      + '<path d="M380 120L504 54" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<circle cx="380" cy="120" r="4" fill="#0f8a4d"/>'
      + '<text x="340" y="118" font-size="10" fill="#0f8a4d">a</text>'
      + '<text x="380" y="176" font-size="11" fill="currentColor">partial: y = a + b x</text>'
      + '<text x="380" y="192" font-size="10" fill="#0f8a4d">a fixed part plus a rate</text>'
      /* inverse square */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M40 330h130"/><path d="M40 330V220"/>'
      + '</g>'
      + '<path d="M52 226C66 318 80 324 164 328" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="40" y="356" font-size="11" fill="currentColor">inverse square: y = k over x squared</text>'
      + '<text x="40" y="372" font-size="10" fill="#0f8a4d">double x gives a quarter of y</text>'
      /* note */
      + '<path d="M210 240h330" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="210" y="232" font-size="11" fill="currentColor">the test to apply when the question does not say which kind it is</text>'
      + '<text x="210" y="262" font-size="11" fill="currentColor">is y over x the same for every pair?  then direct</text>'
      + '<text x="210" y="282" font-size="11" fill="currentColor">is y times x the same for every pair?  then inverse</text>'
      + '<text x="210" y="302" font-size="11" fill="currentColor">neither, and two pairs were given?  then partial</text>'
      + '<text x="210" y="332" font-size="11" fill="#0f8a4d">the partial line misses the origin, which is why a fixed charge</text>'
      + '<text x="210" y="348" font-size="11" fill="#0f8a4d">is not proportional: doubling the distance cannot double the 5 cedis</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The four kinds of variation and how to recognise each',
      columns: ['Kind', 'Relation', 'What stays constant', 'Constants to find', 'Pairs of data needed'],
      rows: [
        ['Direct', 'y = k x', 'y over x', 'One', 'One pair'],
        ['Inverse', 'y = k over x', 'y times x', 'One', 'One pair'],
        ['Joint', 'y = k x z, or k x over z', 'y over x z, or y z over x', 'One', 'One set'],
        ['Partial', 'y = a + b x', 'Neither ratio nor product', 'Two', 'Two pairs'],
      ],
      note: 'The last column is the signal in the question. '
        + 'Two pairs of values given means the variation is partial.',
    },
  ],

  questions: [
    {
      id: 'va-1',
      ask: 'y varies directly as x, and y is 15 when x is 5. '
        + 'Give k.',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: '15 equals k times 5, so k is 3 and y equals 3x.',
      level: 3,
    },
    {
      id: 'va-2',
      ask: 'y varies inversely as x, and y is 8 when x is 3. '
        + 'Give y when x is 6.',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'k equals 24, so y equals 24 over x. '
        + 'Doubling x halves y.',
      level: 4,
    },
    {
      id: 'va-3',
      ask: 'How many pairs of values are needed for partial variation?',
      kind: 'numeric',
      options: [],
      answer: '2',
      teach: 'y equals a plus b x has two unknown constants, '
        + 'so it needs two simultaneous equations.',
      level: 5,
    },
    {
      id: 'va-4',
      ask: 'A fare of 5 cedis plus 2 cedis a kilometre is:',
      kind: 'choice',
      options: [
        'Partial variation, and not proportional to distance',
        'Direct variation',
        'Inverse variation',
      ],
      answer: 'Partial variation, and not proportional to distance',
      teach: 'Doubling the distance cannot double the fixed 5 cedis, '
        + 'so the ratio is not constant.',
      level: 6,
    },
    {
      id: 'va-5',
      ask: 'If y varies as the square of x, trebling x makes y:',
      kind: 'choice',
      options: [
        'Nine times larger',
        'Three times larger',
        'A third as large',
      ],
      answer: 'Nine times larger',
      teach: 'y equals k x squared, and 3 squared is 9.',
      level: 5,
    },
  ],
})

/* ── sequences and series ────────────────────────────────────────────────── */

teach({
  topicId: 'sequences-series-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'In an arithmetic progression each term adds a fixed amount d. '
      + 'The nth term is a plus (n minus 1) times d. '
      + 'In a geometric progression each term multiplies by a fixed ratio r. '
      + 'The nth term is a times r to the power (n minus 1). '
      + 'The sums have their own formulas. '
      + 'Before using a sum formula, find n, '
      + 'because n is the number of terms and not the last term.',
    method: [
      'Decide whether the terms differ by adding or by multiplying.',
      'Write down a, and d or r.',
      'Find n from the nth term formula before using any sum formula.',
    ],
  },

  idea:
    'A sequence is a list of numbers in order, and each one is a term. '
    + 'A series is what you get when you add the terms. '
    + 'In an arithmetic progression, '
    + 'the difference between one term and the next is the same '
    + 'throughout, '
    + 'and that difference is called d. '
    + 'The first term is a. '
    + 'The nth term is a plus (n minus 1) times d, '
    + 'because you add d one time fewer than the term number. '
    + 'The sum of the first n terms is '
    + 'n over 2 times the quantity 2a plus (n minus 1) d, '
    + 'and it can also be written as '
    + 'n over 2 times the first term plus the last term. '
    + 'In a geometric progression, '
    + 'each term is the one before it multiplied by a fixed number r, '
    + 'the common ratio. '
    + 'The nth term is a times r to the power (n minus 1). '
    + 'The sum of the first n terms is '
    + 'a times the quantity r to the power n minus 1, '
    + 'all over r minus 1. '
    + 'If r lies between minus 1 and 1, '
    + 'the terms shrink towards nothing, '
    + 'and the sum of all of them settles at a over the quantity 1 minus r, '
    + 'which is called the sum to infinity.',

  mechanism:
    'The first thing to get right is which kind of progression it is, '
    + 'and the test is two subtractions and two divisions. '
    + 'Subtract consecutive terms: '
    + 'if the answer is the same each time, it is arithmetic. '
    + 'Divide consecutive terms: '
    + 'if the answer is the same each time, it is geometric. '
    + 'Do both checks and not one, '
    + 'because 2, 4, 8 looks like it might be arithmetic '
    + 'until you notice the differences are 2 and 4. '
    + 'The second thing is the minus 1 in the nth term, '
    + 'and it is worth understanding rather than memorising, '
    + 'because once understood it is never wrong again. '
    + 'The first term is a, and no d has been added yet. '
    + 'The second term has one d. '
    + 'The third has two. '
    + 'So the nth term has (n minus 1) of them. '
    + 'The same reasoning explains the power in a geometric progression: '
    + 'the first term has been multiplied by r no times at all, '
    + 'so the nth term has r to the power (n minus 1). '
    + 'A learner who writes a plus n d '
    + 'is one term out everywhere, '
    + 'and the error is invisible in the working '
    + 'because the arithmetic is correct. '
    + 'The third and largest trap is in the sum formulas, '
    + 'and it is a confusion between n and the last term. '
    + 'Suppose you must add all the multiples of 3 from 3 to 99. '
    + 'The sum formula needs n, which is how many terms there are, '
    + 'and it is not 99. '
    + 'So find n first, from the nth term formula: '
    + '99 equals 3 plus (n minus 1) times 3, '
    + 'which gives 96 equals 3(n minus 1), '
    + 'so n minus 1 equals 32 and n equals 33. '
    + 'Now the sum is 33 over 2 times (3 plus 99), '
    + 'which is 33 times 51, so 1683. '
    + 'Writing the line n equals 33 on its own, '
    + 'with the working that found it, '
    + 'is a mark in itself, '
    + 'and the whole question is lost without it. '
    + 'So the order of work is fixed: '
    + 'identify, find a and d or r, find n, then sum. '
    + 'Last, the sum to infinity, '
    + 'which learners either distrust or over use. '
    + 'It applies only when r is between minus 1 and 1, '
    + 'and the reason is that the terms must be shrinking. '
    + 'With r equal to one half, '
    + 'the terms are a, a over 2, a over 4, a over 8, '
    + 'and they get so small so fast '
    + 'that the total never passes 2a. '
    + 'With r equal to 2 the terms grow, '
    + 'the total grows without limit, '
    + 'and the formula would give a negative answer, '
    + 'which is a plain sign that it does not apply. '
    + 'So state the condition when you use it. '
    + 'That one line protects you '
    + 'and it is often part of the mark scheme.',

  recap:
    'You have continued number patterns '
    + 'and found a rule for the nth term of a simple one. '
    + 'This gives two important families of pattern their own formulas, '
    + 'and adds the harder question of what the terms come to when added.',

  method: [
    'Write out the first few terms.',
    'Subtract consecutive terms; if the difference is constant it is arithmetic.',
    'Divide consecutive terms; if the ratio is constant it is geometric.',
    'Write down a, and d or r.',
    'If a particular term is wanted, use the nth term formula.',
    'If a sum is wanted, find n first from the nth term formula.',
    'Write the line n equals, with its working.',
    'Put a, d or r, and n into the sum formula.',
    'For a sum to infinity, check that r lies between minus 1 and 1, and say so.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Find the 10th term of 5, 8, 11, 14, and so on.',
      steps: [
        'The differences are 3 each time, so it is arithmetic.',
        'a is 5 and d is 3.',
        '10th term equals 5 plus 9 times 3.',
      ],
      answer: '32. '
        + 'Nine threes are added, not ten, '
        + 'because the first term has none.',
    },
    {
      level: 4,
      ask: 'The 4th term of a geometric progression is 24 '
        + 'and the first term is 3. Find r.',
      steps: [
        '4th term equals a times r cubed.',
        '24 equals 3 times r cubed.',
        'So r cubed equals 8.',
      ],
      answer: 'r equals 2. '
        + 'The power is 3, not 4, '
        + 'because the first term has been multiplied no times.',
    },
    {
      level: 5,
      ask: 'Find the sum of all the multiples of 3 from 3 to 99.',
      steps: [
        'Arithmetic, with a equals 3 and d equals 3.',
        'Find n: 99 equals 3 plus (n minus 1) times 3.',
        '96 equals 3(n minus 1), so n minus 1 equals 32, so n equals 33.',
        'Sum equals n over 2 times (first plus last).',
        'So 33 over 2 times 102, which is 33 times 51.',
      ],
      answer: '1683, with n equals 33. '
        + 'The commonest error is using 99 in place of n.',
    },
    {
      level: 6,
      ask: 'A ball is dropped from 2 metres and each bounce reaches '
        + 'three quarters of the height before. '
        + 'Find the total of all the bounce heights, '
        + 'and say why the formula applies.',
      steps: [
        'The bounce heights are 1.5, then 1.125, and so on.',
        'So a equals 1.5 and r equals three quarters.',
        'r is between minus 1 and 1, so the sum to infinity applies.',
        'Sum equals a over (1 minus r), which is 1.5 over 0.25.',
      ],
      answer: '6 metres of bounce heights in total. '
        + 'The formula applies because r is three quarters, '
        + 'which lies between minus 1 and 1, '
        + 'so the terms shrink towards nothing. '
        + 'With r greater than 1 the total would grow without limit '
        + 'and the formula would be meaningless.',
    },
  ],

  traps: [
    {
      mistake: 'Writing the nth term as a plus n d.',
      why: 'The first term has no d added, '
        + 'so the nth term has (n minus 1) of them. '
        + 'The error puts every answer one term out.',
    },
    {
      mistake: 'Using the last term in place of n in a sum formula.',
      why: 'n is the number of terms. '
        + 'Find it from the nth term formula first, '
        + 'and write the line down.',
    },
    {
      mistake: 'Checking only the differences.',
      why: '2, 4, 8 has differences 2 and 4, so it is not arithmetic, '
        + 'but its ratios are both 2. Check both.',
    },
    {
      mistake: 'Using the sum to infinity when r is 2.',
      why: 'The terms grow, so there is no finite total. '
        + 'The formula needs r between minus 1 and 1, and say so.',
    },
  ],

  extension:
    'A compound interest calculation is a geometric progression. '
    + 'Money of 2000 cedis at 10 per cent a year '
    + 'becomes 2000 times 1.1 after one year, '
    + 'then 2000 times 1.1 squared, and so on, '
    + 'so the amount after n years '
    + 'is the (n plus 1)th term of a progression with a equals 2000 '
    + 'and r equals 1.1. '
    + 'The same formula covers population growth '
    + 'and the fall in value of a vehicle, '
    + 'where r is less than 1. '
    + 'Seeing interest as a progression also explains '
    + 'why it grows faster than people expect: '
    + 'the growth is multiplied, not added.',

  figure: {
    alt: 'Two drawings comparing the two progressions. On the left, an '
      + 'arithmetic progression drawn as a row of bars of heights five, '
      + 'eight, eleven, fourteen and seventeen, with equal steps of '
      + 'three marked between the tops, labelled add d each time so the '
      + 'tops lie on a straight line. On the right, a geometric '
      + 'progression drawn as bars of heights three, six, twelve, '
      + 'twenty four and forty eight, with the multiplication by two '
      + 'marked between the tops, labelled multiply by r each time so '
      + 'the tops curve upwards. Beneath both, a note shows the counting '
      + 'of the term number against the number of steps taken: term one '
      + 'has had no step, term two has had one, term five has had four, '
      + 'which is why the nth term uses n minus one.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* AP bars */
      + '<g stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.18">'
      + '<rect x="40" y="170" width="28" height="50"/>'
      + '<rect x="76" y="140" width="28" height="80"/>'
      + '<rect x="112" y="110" width="28" height="110"/>'
      + '<rect x="148" y="80" width="28" height="140"/>'
      + '<rect x="184" y="50" width="28" height="170"/>'
      + '</g>'
      + '<path d="M54 170L198 50" stroke="#0f8a4d" stroke-width="2" stroke-dasharray="5 4" fill="none"/>'
      + '<text x="40" y="240" font-size="11" fill="currentColor">5   8   11  14  17</text>'
      + '<text x="40" y="36" font-size="11" fill="#0f8a4d">add 3 each time: the tops lie on a straight line</text>'
      + '<text x="40" y="262" font-size="11" fill="currentColor">arithmetic: nth term = a + (n - 1)d</text>'
      /* GP bars */
      + '<g stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.18">'
      + '<rect x="380" y="208" width="28" height="12"/>'
      + '<rect x="416" y="196" width="28" height="24"/>'
      + '<rect x="452" y="172" width="28" height="48"/>'
      + '<rect x="488" y="124" width="28" height="96"/>'
      + '<rect x="524" y="28" width="28" height="192"/>'
      + '</g>'
      + '<path d="M394 208C440 206 480 180 538 28" stroke="#0f8a4d" stroke-width="2" stroke-dasharray="5 4" fill="none"/>'
      + '<text x="380" y="240" font-size="11" fill="currentColor">3   6   12  24  48</text>'
      + '<text x="330" y="18" font-size="11" fill="#0f8a4d">multiply by 2 each time: the tops curve</text>'
      + '<text x="380" y="262" font-size="11" fill="currentColor">geometric: nth term = a r to the power (n - 1)</text>'
      /* counting */
      + '<path d="M40 288h560" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="40" y="308" font-size="12" fill="currentColor">term number:        1         2         3         4         5</text>'
      + '<text x="40" y="330" font-size="12" fill="#0f8a4d">steps taken:          0         1         2         3         4</text>'
      + '<text x="40" y="360" font-size="12" fill="currentColor">the first term has had no step, which is the whole reason the formula says n minus 1</text>'
      + '<text x="40" y="384" font-size="12" fill="#0f8a4d">and in a sum formula n is how many terms there are, never the value of the last one</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The formulas for the two progressions, side by side',
      columns: ['', 'Arithmetic', 'Geometric'],
      rows: [
        ['Step between terms', 'Add d', 'Multiply by r'],
        ['How to spot it', 'Differences are equal', 'Ratios are equal'],
        ['nth term', 'a + (n - 1)d', 'a times r to the power (n - 1)'],
        ['Sum of n terms', 'n over 2 times (2a + (n - 1)d)', 'a(r to the power n minus 1) over (r - 1)'],
        ['Sum another way', 'n over 2 times (first + last)', 'Not applicable'],
        ['Sum of all terms', 'None; it grows without limit', 'a over (1 - r), only if r is between -1 and 1'],
      ],
      note: 'Read the last row carefully. '
        + 'The sum to infinity exists only for a shrinking geometric '
        + 'progression, and the condition should be written down when '
        + 'you use it.',
    },
  ],

  questions: [
    {
      id: 'sq-1',
      ask: 'Find the 8th term of 4, 7, 10, and so on.',
      kind: 'numeric',
      options: [],
      answer: '25',
      teach: 'a is 4, d is 3, and seven threes are added: 4 plus 21.',
      level: 3,
    },
    {
      id: 'sq-2',
      ask: 'The nth term of an arithmetic progression is:',
      kind: 'choice',
      options: [
        'a plus (n minus 1) d',
        'a plus n d',
        'a times n d',
      ],
      answer: 'a plus (n minus 1) d',
      teach: 'The first term has had no d added, '
        + 'so the nth has one fewer than n.',
      level: 4,
    },
    {
      id: 'sq-3',
      ask: 'How many terms are there in the multiples of 3 '
        + 'from 3 to 99?',
      kind: 'numeric',
      options: [],
      answer: '33',
      teach: '99 equals 3 plus (n minus 1) times 3, '
        + 'so n is 33. This n, not 99, goes into the sum formula.',
      level: 5,
    },
    {
      id: 'sq-4',
      ask: 'A geometric progression has a sum to infinity only if:',
      kind: 'choice',
      options: [
        'r lies between minus 1 and 1',
        'r is greater than 1',
        'a is positive',
      ],
      answer: 'r lies between minus 1 and 1',
      teach: 'The terms must shrink towards nothing. '
        + 'State the condition when you use the formula.',
      level: 5,
    },
    {
      id: 'sq-5',
      ask: 'First term 1.5 and ratio three quarters. '
        + 'Give the sum to infinity.',
      kind: 'numeric',
      options: [],
      answer: '6',
      teach: '1.5 divided by (1 minus 0.75) is 1.5 over 0.25, which is 6.',
      level: 6,
    },
  ],
})

/* ── binary operations ──────────────────────────────────────────────────── */

teach({
  topicId: 'binary-operations',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A binary operation combines two members of a set '
      + 'to give one answer. '
      + 'It is closed if every answer is still in the set. '
      + 'It is commutative if a star b equals b star a for all members. '
      + 'It is associative if the bracketing does not matter. '
      + 'The identity e leaves everything unchanged, '
      + 'and it must work from both sides. '
      + 'The inverse of a is whatever combines with a to give e.',
    method: [
      'Test closure by checking that every answer is in the set.',
      'Test commutativity by working out a star b and b star a.',
      'Find the identity by solving a star e equals a for every a.',
    ],
  },

  idea:
    'A binary operation takes two members of a set '
    + 'and gives one result. '
    + 'It is written with a symbol such as a star b. '
    + 'Ordinary addition and multiplication are binary operations, '
    + 'and so is a rule invented for a question, '
    + 'such as a star b equals a plus b minus ab. '
    + 'Four properties are tested. '
    + 'Closure: for every a and b in the set, '
    + 'a star b is also in the set. '
    + 'Commutativity: a star b equals b star a, for all a and b. '
    + 'Associativity: (a star b) star c equals a star (b star c), '
    + 'for all a, b and c. '
    + 'Identity: there is a member e '
    + 'such that a star e equals a and e star a equals a, '
    + 'for every a. '
    + 'Inverse: for a member a, '
    + 'there is a member x with a star x equals e. '
    + 'An operation on a small set '
    + 'can be set out as a table, '
    + 'with the first member down the side '
    + 'and the second along the top.',

  mechanism:
    'This topic is unusual in Core Mathematics '
    + 'because the answers are arguments rather than numbers, '
    + 'and that changes what has to be written. '
    + 'Two rules of argument do nearly all the work. '
    + 'First, to show that a property fails, '
    + 'one example is enough, '
    + 'and it is the best answer you can give. '
    + 'Subtraction is not commutative, '
    + 'and the proof is that 5 minus 3 is 2 while 3 minus 5 is minus 2. '
    + 'That single pair settles it for good. '
    + 'So when you suspect a property fails, '
    + 'hunt for one counterexample and stop. '
    + 'Second, to show that a property holds, '
    + 'one example is worth nothing at all, '
    + 'and this is where learners lose whole questions. '
    + 'Showing that 2 star 3 equals 3 star 2 '
    + 'does not show the operation is commutative, '
    + 'because the next pair might fail. '
    + 'You have to work with letters: '
    + 'take a star b, simplify it, '
    + 'take b star a, simplify that, '
    + 'and show the two expressions are the same. '
    + 'For a star b equals a plus b minus ab, '
    + 'b star a is b plus a minus ba, '
    + 'and since addition and multiplication of numbers '
    + 'are themselves commutative, '
    + 'the two are equal. '
    + 'That is a proof. '
    + 'Two numbers are an illustration. '
    + 'The difference is the whole of the marking. '
    + 'The identity needs its own care, '
    + 'because learners guess it instead of finding it. '
    + 'Finding it is a small equation. '
    + 'Set a star e equals a and solve for e. '
    + 'With a star b equals a plus b minus ab: '
    + 'a plus e minus ae equals a, '
    + 'so e minus ae equals 0, '
    + 'so e(1 minus a) equals 0, '
    + 'so e equals 0, as long as a is not 1. '
    + 'Then check the other side: '
    + '0 star a is 0 plus a minus 0, which is a. '
    + 'Both sides work, so the identity is 0. '
    + 'Checking both sides is not fussiness, '
    + 'because an operation that is not commutative '
    + 'can have something that works on one side and not the other, '
    + 'and then there is no identity at all. '
    + 'Closure is the property most often waved through, '
    + 'and it is the one where a counterexample is usually lurking. '
    + 'Subtraction on the set of counting numbers is not closed, '
    + 'because 3 minus 5 is minus 2, which is not a counting number. '
    + 'Division on the whole numbers is not closed, '
    + 'because 3 divided by 2 is not a whole number. '
    + 'Even an invented operation can fail: '
    + 'a star b equals a plus b minus ab on the set {0, 1, 2} '
    + 'gives 2 star 2 equals 2 plus 2 minus 4, which is 0, '
    + 'and that is fine, '
    + 'but 1 star 2 equals 1 plus 2 minus 2, which is 1, also fine, '
    + 'so here you must check every pair in the table '
    + 'before claiming closure. '
    + 'With a table in front of you '
    + 'all four properties can be read off, '
    + 'and that is why drawing the table is usually the first move. '
    + 'Closure: every entry in the body is a member of the set. '
    + 'Commutativity: the table is symmetrical about the diagonal '
    + 'running from the top left to the bottom right. '
    + 'Identity: one row repeats the heading row exactly, '
    + 'and its column does the same. '
    + 'Inverses: the identity appears somewhere in every row.',

  recap:
    'You have used addition, subtraction, multiplication and division '
    + 'and noticed that some of them can be done in either order '
    + 'and some cannot. '
    + 'This gives those observations names, '
    + 'and asks you to test a rule you have never seen before.',

  method: [
    'Write down the set and the rule of the operation.',
    'For a small set, draw the operation table.',
    'Closure: check that every entry in the body is in the set.',
    'Commutativity: work out a star b and b star a with letters.',
    'If they differ, give one numerical counterexample and stop.',
    'Associativity: work out (a star b) star c and a star (b star c) with letters.',
    'Identity: solve a star e equals a for e, then check e star a as well.',
    'Inverse: for each a, solve a star x equals e.',
    'State each conclusion in words, with the evidence beside it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Show that subtraction on the whole numbers '
        + 'is not commutative, and not closed on the counting numbers.',
      steps: [
        'For commutativity, find one pair that fails.',
        '5 minus 3 is 2, and 3 minus 5 is minus 2.',
        'For closure on the counting numbers, '
          + 'find one answer outside the set.',
        '3 minus 5 is minus 2, which is not a counting number.',
      ],
      answer: 'Not commutative, because 5 minus 3 is not 3 minus 5. '
        + 'Not closed on the counting numbers, '
        + 'because 3 minus 5 gives minus 2. '
        + 'One counterexample is a complete answer for a failure.',
    },
    {
      level: 4,
      ask: 'An operation is a star b equals a plus b minus ab. '
        + 'Show it is commutative.',
      steps: [
        'a star b equals a plus b minus ab.',
        'b star a equals b plus a minus ba.',
        'Addition of numbers is commutative, so a plus b equals b plus a.',
        'Multiplication of numbers is commutative, so ab equals ba.',
        'So the two expressions are identical.',
      ],
      answer: 'It is commutative, '
        + 'and the proof must use letters. '
        + 'Showing it for 2 and 3 only would prove nothing.',
    },
    {
      level: 5,
      ask: 'For the same operation, find the identity '
        + 'and the inverse of 3.',
      steps: [
        'Solve a star e equals a: a plus e minus ae equals a.',
        'So e minus ae equals 0, so e(1 minus a) equals 0, so e equals 0.',
        'Check the other side: 0 star a equals 0 plus a minus 0, which is a.',
        'Now solve 3 star x equals 0: 3 plus x minus 3x equals 0.',
        'So 3 minus 2x equals 0, so x equals 1.5.',
      ],
      answer: 'The identity is 0, and the inverse of 3 is 1.5. '
        + 'Both sides of the identity were checked, '
        + 'because a one sided identity is not one.',
    },
    {
      level: 6,
      ask: 'An operation on {1, 2, 3, 4} is given by '
        + 'a star b equals the remainder when a times b is divided by 5. '
        + 'Draw the table and read off closure, the identity '
        + 'and the inverse of 2.',
      steps: [
        'Row 1: 1, 2, 3, 4.',
        'Row 2: 2, 4, 1, 3, since 2 times 3 is 6 which leaves 1, '
          + 'and 2 times 4 is 8 which leaves 3.',
        'Row 3: 3, 1, 4, 2.',
        'Row 4: 4, 3, 2, 1.',
        'Every entry is in the set, so it is closed.',
        'Row 1 repeats the headings, so 1 is the identity.',
        'In row 2, the identity 1 appears under the heading 3.',
      ],
      answer: 'Closed, identity 1, and the inverse of 2 is 3, '
        + 'because 2 star 3 equals 1. '
        + 'The table also shows commutativity, '
        + 'since it is symmetrical about the main diagonal, '
        + 'and that every element has an inverse, '
        + 'since 1 appears in every row.',
    },
  ],

  traps: [
    {
      mistake: 'Proving a property holds by trying two numbers.',
      why: 'One pair proves nothing about all pairs. '
        + 'To show a property holds, work with letters.',
    },
    {
      mistake: 'Disproving a property with a general argument.',
      why: 'One counterexample is enough and is the clearest answer. '
        + 'Find a failing pair and stop.',
    },
    {
      mistake: 'Checking the identity on one side only.',
      why: 'If the operation is not commutative, '
        + 'something can work on one side and fail on the other, '
        + 'and then there is no identity.',
    },
    {
      mistake: 'Assuming closure without checking.',
      why: 'Subtraction on the counting numbers and division on the '
        + 'whole numbers both fail. '
        + 'Check every entry of the table, or argue it for all a and b.',
    },
  ],

  extension:
    'Some sets with an operation have all four properties at once. '
    + 'The operation is closed and associative. '
    + 'There is an identity. '
    + 'Every member has an inverse. '
    + 'Such a set is called a group. '
    + 'The worked example on the set 1, 2, 3, 4 is a group, '
    + 'and so are the whole numbers under addition. '
    + 'The idea matters far beyond this syllabus. '
    + 'The symmetries of a shape form a group. '
    + 'So do the moves of a puzzle. '
    + 'That is why the same four properties '
    + 'are tested again in any course that goes further.',

  figure: {
    alt: 'An operation table for the set one, two, three, four under the '
      + 'rule that a star b is the remainder when a times b is divided '
      + 'by five. The headings run along the top and down the left side '
      + 'and the sixteen results fill the body: the first row reads one, '
      + 'two, three, four; the second reads two, four, one, three; the '
      + 'third reads three, one, four, two; the fourth reads four, '
      + 'three, two, one. Four annotations point at the table. One says '
      + 'that every entry is a member of the set, so the operation is '
      + 'closed. One marks the main diagonal and says the table is '
      + 'symmetrical about it, so the operation is commutative. One '
      + 'marks the first row and column and says they repeat the '
      + 'headings, so one is the identity. One ringed entry in the '
      + 'second row shows the identity appearing under the heading '
      + 'three, so the inverse of two is three.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* grid */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<rect x="60" y="60" width="50" height="40"/>'
      + '<rect x="110" y="60" width="50" height="40"/>'
      + '<rect x="160" y="60" width="50" height="40"/>'
      + '<rect x="210" y="60" width="50" height="40"/>'
      + '<rect x="260" y="60" width="50" height="40"/>'
      + '<rect x="60" y="100" width="50" height="40"/>'
      + '<rect x="110" y="100" width="50" height="40"/>'
      + '<rect x="160" y="100" width="50" height="40"/>'
      + '<rect x="210" y="100" width="50" height="40"/>'
      + '<rect x="260" y="100" width="50" height="40"/>'
      + '<rect x="60" y="140" width="50" height="40"/>'
      + '<rect x="110" y="140" width="50" height="40"/>'
      + '<rect x="160" y="140" width="50" height="40"/>'
      + '<rect x="210" y="140" width="50" height="40"/>'
      + '<rect x="260" y="140" width="50" height="40"/>'
      + '<rect x="60" y="180" width="50" height="40"/>'
      + '<rect x="110" y="180" width="50" height="40"/>'
      + '<rect x="160" y="180" width="50" height="40"/>'
      + '<rect x="210" y="180" width="50" height="40"/>'
      + '<rect x="260" y="180" width="50" height="40"/>'
      + '<rect x="60" y="220" width="50" height="40"/>'
      + '<rect x="110" y="220" width="50" height="40"/>'
      + '<rect x="160" y="220" width="50" height="40"/>'
      + '<rect x="210" y="220" width="50" height="40"/>'
      + '<rect x="260" y="220" width="50" height="40"/>'
      + '</g>'
      /* headings */
      + '<text x="76" y="86" font-size="16" fill="currentColor">*</text>'
      + '<text x="130" y="86" font-size="16" fill="#0f8a4d">1</text>'
      + '<text x="180" y="86" font-size="16" fill="#0f8a4d">2</text>'
      + '<text x="230" y="86" font-size="16" fill="#0f8a4d">3</text>'
      + '<text x="280" y="86" font-size="16" fill="#0f8a4d">4</text>'
      + '<text x="80" y="126" font-size="16" fill="#0f8a4d">1</text>'
      + '<text x="80" y="166" font-size="16" fill="#0f8a4d">2</text>'
      + '<text x="80" y="206" font-size="16" fill="#0f8a4d">3</text>'
      + '<text x="80" y="246" font-size="16" fill="#0f8a4d">4</text>'
      /* body */
      + '<text x="130" y="126" font-size="16" fill="currentColor">1</text>'
      + '<text x="180" y="126" font-size="16" fill="currentColor">2</text>'
      + '<text x="230" y="126" font-size="16" fill="currentColor">3</text>'
      + '<text x="280" y="126" font-size="16" fill="currentColor">4</text>'
      + '<text x="130" y="166" font-size="16" fill="currentColor">2</text>'
      + '<text x="180" y="166" font-size="16" fill="currentColor">4</text>'
      + '<text x="230" y="166" font-size="16" fill="currentColor">1</text>'
      + '<text x="280" y="166" font-size="16" fill="currentColor">3</text>'
      + '<text x="130" y="206" font-size="16" fill="currentColor">3</text>'
      + '<text x="180" y="206" font-size="16" fill="currentColor">1</text>'
      + '<text x="230" y="206" font-size="16" fill="currentColor">4</text>'
      + '<text x="280" y="206" font-size="16" fill="currentColor">2</text>'
      + '<text x="130" y="246" font-size="16" fill="currentColor">4</text>'
      + '<text x="180" y="246" font-size="16" fill="currentColor">3</text>'
      + '<text x="230" y="246" font-size="16" fill="currentColor">2</text>'
      + '<text x="280" y="246" font-size="16" fill="currentColor">1</text>'
      /* diagonal */
      + '<path d="M110 100L310 260" stroke="#0f8a4d" stroke-width="2" stroke-dasharray="6 4" fill="none"/>'
      /* ringed inverse */
      + '<circle cx="235" cy="160" r="17" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      /* row 1 highlight */
      + '<rect x="110" y="100" width="200" height="40" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      /* notes */
      + '<text x="340" y="86" font-size="11" fill="currentColor">a star b is the remainder when</text>'
      + '<text x="340" y="102" font-size="11" fill="currentColor">a times b is divided by 5</text>'
      + '<text x="340" y="130" font-size="11" fill="#0f8a4d">row 1 repeats the headings,</text>'
      + '<text x="340" y="146" font-size="11" fill="#0f8a4d">so 1 is the identity</text>'
      + '<text x="340" y="174" font-size="11" fill="#0f8a4d">1 appears in row 2 under the</text>'
      + '<text x="340" y="190" font-size="11" fill="#0f8a4d">heading 3, so the inverse of 2 is 3</text>'
      + '<text x="340" y="218" font-size="11" fill="#0f8a4d">the table is symmetrical about</text>'
      + '<text x="340" y="234" font-size="11" fill="#0f8a4d">the dashed diagonal, so it is</text>'
      + '<text x="340" y="250" font-size="11" fill="#0f8a4d">commutative</text>'
      + '<text x="60" y="296" font-size="11" fill="currentColor">every entry in the body is a member of the set, so the operation is closed</text>'
      + '<text x="60" y="326" font-size="12" fill="currentColor">one counterexample disproves a property; to prove one holds, you must argue with letters</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Each property, how to test it, and how it shows in a table',
      columns: ['Property', 'What it claims', 'How to test it', 'In the table'],
      rows: [
        ['Closure', 'Every answer is still in the set', 'Check every pair, or argue for all a and b', 'No entry outside the set'],
        ['Commutative', 'a star b equals b star a always', 'Simplify both, with letters', 'Symmetrical about the main diagonal'],
        ['Associative', 'Bracketing does not matter', 'Simplify both bracketings, with letters', 'Not visible; must be worked'],
        ['Identity', 'Some e leaves every a unchanged', 'Solve a star e equals a, then check e star a', 'A row and column repeating the headings'],
        ['Inverse', 'Every a has an x with a star x equals e', 'Solve a star x equals e for each a', 'The identity appears in every row'],
      ],
      note: 'Associativity is the one the table cannot show, '
        + 'which is why it has to be worked with letters every time.',
    },
  ],

  questions: [
    {
      id: 'bo-1',
      ask: 'An operation is closed on a set if:',
      kind: 'choice',
      options: [
        'Every answer is also a member of the set',
        'It is commutative',
        'It has an identity',
      ],
      answer: 'Every answer is also a member of the set',
      teach: 'Subtraction on the counting numbers fails this, '
        + 'because 3 minus 5 is minus 2.',
      level: 3,
    },
    {
      id: 'bo-2',
      ask: 'To prove an operation IS commutative you must:',
      kind: 'choice',
      options: [
        'Simplify a star b and b star a with letters',
        'Try two numbers',
        'Draw the table only',
      ],
      answer: 'Simplify a star b and b star a with letters',
      teach: 'One pair of numbers proves nothing about all pairs. '
        + 'A failure, by contrast, needs only one counterexample.',
      level: 5,
    },
    {
      id: 'bo-3',
      ask: 'For a star b equals a plus b minus ab, the identity is:',
      kind: 'numeric',
      options: [],
      answer: '0',
      teach: 'Solve a plus e minus ae equals a, giving e equals 0, '
        + 'then check 0 star a equals a as well.',
      level: 5,
    },
    {
      id: 'bo-4',
      ask: 'In an operation table, commutativity shows as:',
      kind: 'choice',
      options: [
        'Symmetry about the main diagonal',
        'The identity in every row',
        'No entry outside the set',
      ],
      answer: 'Symmetry about the main diagonal',
      teach: 'The identity in every row shows inverses, '
        + 'and no outside entry shows closure.',
      level: 5,
    },
    {
      id: 'bo-5',
      ask: 'On {1, 2, 3, 4} with a star b as the remainder of a times b '
        + 'divided by 5, the inverse of 2 is:',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: '2 times 3 is 6, which leaves 1 on division by 5, '
        + 'and 1 is the identity.',
      level: 6,
    },
  ],
})

/* ── graphs of functions ────────────────────────────────────────────────── */

teach({
  topicId: 'graphs-functions-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'To draw a graph, build a table of values, '
      + 'plot the points and join them: '
      + 'a straight edge for a linear graph '
      + 'and a smooth curve for a quadratic. '
      + 'The roots of the equation are where the curve crosses the x axis. '
      + 'A graph can also solve an equation it was not drawn for: '
      + 'rearrange the new equation so that one side matches the graph, '
      + 'then draw the line given by the other side '
      + 'and read off where they cross.',
    method: [
      'Make a table of values over the range given.',
      'Plot the points and join them smoothly.',
      'To solve a new equation, rearrange it to match the graph, then draw a line.',
    ],
  },

  idea:
    'A function takes a value of x and gives one value of y. '
    + 'Its graph is the set of all the points (x, y) that satisfy it. '
    + 'A linear function, y equals m x plus c, '
    + 'has a straight line graph, '
    + 'with gradient m and y intercept c. '
    + 'A quadratic function, y equals a x squared plus b x plus c, '
    + 'has a curve called a parabola. '
    + 'It opens upwards if a is positive '
    + 'and downwards if a is negative. '
    + 'Its lowest or highest point is the turning point, '
    + 'and the vertical line through it is the line of symmetry. '
    + 'To draw either, make a table of values: '
    + 'choose values of x over the range asked for, '
    + 'work out y for each, '
    + 'plot the points, '
    + 'and join them. '
    + 'Where the graph crosses the x axis, y is zero, '
    + 'so those x values are the roots of the equation. '
    + 'The scale must be stated on both axes, '
    + 'and in an examination it is usually given.',

  mechanism:
    'The mark scheme for a graph question has three parts, '
    + 'and learners usually earn the first and lose the other two. '
    + 'The first part is the table of values, '
    + 'and it is marked on its own, '
    + 'so every value is written out, '
    + 'including the working for one awkward one. '
    + 'Use the range given in the question and nothing narrower: '
    + 'if it says from minus 2 to 5, use every whole value between, '
    + 'and add a half value either side of a turning point '
    + 'if the curve is tight there. '
    + 'The second part is the drawing, '
    + 'and two habits earn it. '
    + 'Use the scale you were given, '
    + 'because a different scale means your readings cannot be checked, '
    + 'and label both axes with the variable and the scale. '
    + 'Join a quadratic with a single smooth curve '
    + 'drawn in one movement, '
    + 'not with short straight segments between the points, '
    + 'and never let the curve come to a point at the bottom: '
    + 'a parabola is round at its turning point, '
    + 'and a sharp corner there loses the mark '
    + 'and also hides the true minimum. '
    + 'The third part is the one worth most, '
    + 'and it is the part learners do not expect: '
    + 'using the graph you have drawn to solve an equation '
    + 'the graph is not of. '
    + 'The method is one line of algebra. '
    + 'Suppose you have drawn y equals x squared minus 3x plus 1 '
    + 'and are asked to solve x squared minus 3x minus 2 equals 0. '
    + 'Do not draw a second graph. '
    + 'Rearrange the new equation so that the left side '
    + 'is exactly the expression you already have: '
    + 'x squared minus 3x minus 2 equals 0 '
    + 'becomes x squared minus 3x plus 1 equals 3, '
    + 'by adding 3 to both sides. '
    + 'The left side is now your y. '
    + 'So the solutions are where your curve meets the horizontal line '
    + 'y equals 3. '
    + 'Draw that line, mark the two crossings, '
    + 'and read off the x values. '
    + 'The same move with a sloping line '
    + 'handles equations with an extra x term: '
    + 'to solve x squared minus 5x plus 1 equals 0 '
    + 'from the same curve, '
    + 'rearrange to x squared minus 3x plus 1 equals 2x, '
    + 'and draw the line y equals 2x. '
    + 'So the skill is algebraic, not graphical: '
    + 'make the left side match the curve, '
    + 'and whatever is left on the right is the line to draw. '
    + 'A learner who knows that can answer the hardest part '
    + 'of every graph question on the paper. '
    + 'Last, reading off. '
    + 'Give answers to the accuracy the scale allows and no more. '
    + 'If one centimetre is half a unit, '
    + 'you can read to about a tenth of a unit, '
    + 'so write 1.4 and not 1.414. '
    + 'And say where the reading came from: '
    + 'from the graph, x equals minus 0.6 or x equals 3.6. '
    + 'A graphical answer is expected to be approximate, '
    + 'and claiming more accuracy than the drawing can give '
    + 'is itself an error.',

  recap:
    'You have plotted points from coordinates '
    + 'and drawn straight line graphs from a table of values. '
    + 'This adds the curve of a quadratic, '
    + 'and the idea that a drawn graph is a tool '
    + 'for solving equations you have not yet met.',

  method: [
    'Read the function, the range of x, and the scale given.',
    'Make a table of values across the whole range.',
    'Show the working for at least one value.',
    'Draw and label both axes using the given scale.',
    'Plot every point.',
    'Join with a ruler for a line, or one smooth curve for a parabola.',
    'For roots, read where the graph crosses the x axis.',
    'For a new equation, rearrange so the left side matches your y.',
    'Draw the line given by the right side, and read off the crossings.',
    'Quote answers to the accuracy the scale allows.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Make a table of values for y equals 2x minus 3 '
        + 'for x from minus 1 to 3.',
      steps: [
        'x equals minus 1 gives y equals minus 5.',
        'x equals 0 gives minus 3.',
        'x equals 1 gives minus 1.',
        'x equals 2 gives 1.',
        'x equals 3 gives 3.',
      ],
      answer: 'The values of y are minus 5, minus 3, minus 1, 1 and 3. '
        + 'The points lie on a straight line, '
        + 'so a ruler joins them.',
    },
    {
      level: 4,
      ask: 'For y equals x squared minus 3x plus 1, '
        + 'find y when x is 0, 1, 2 and 3, '
        + 'and say where the turning point lies.',
      steps: [
        'x equals 0: y equals 1.',
        'x equals 1: 1 minus 3 plus 1, which is minus 1.',
        'x equals 2: 4 minus 6 plus 1, which is minus 1.',
        'x equals 3: 9 minus 9 plus 1, which is 1.',
        'Two equal values at x equals 1 and x equals 2 '
          + 'mean the symmetry line is halfway between them.',
      ],
      answer: 'y values 1, minus 1, minus 1, 1. '
        + 'The line of symmetry is x equals 1.5, '
        + 'so the turning point is there, '
        + 'and a value at x equals 1.5 should be added to the table.',
    },
    {
      level: 5,
      ask: 'Using the graph of y equals x squared minus 3x plus 1, '
        + 'say which line you would draw to solve '
        + 'x squared minus 3x minus 2 equals 0.',
      steps: [
        'Make the left side match the drawn expression.',
        'x squared minus 3x minus 2 equals 0.',
        'Add 3 to both sides: x squared minus 3x plus 1 equals 3.',
        'The left side is now y.',
      ],
      answer: 'Draw the horizontal line y equals 3. '
        + 'The x values where it crosses the curve are the solutions. '
        + 'No second curve is needed.',
    },
    {
      level: 6,
      ask: 'From the same graph, which line solves '
        + 'x squared minus 5x plus 1 equals 0, '
        + 'and why is the method algebraic rather than graphical?',
      steps: [
        'Make the left side match: the drawn expression has minus 3x.',
        'x squared minus 5x plus 1 equals 0.',
        'Add 2x to both sides: x squared minus 3x plus 1 equals 2x.',
        'So the right side is the line to draw.',
      ],
      answer: 'Draw the line y equals 2x, '
        + 'and read off the x values where it meets the curve. '
        + 'The method is algebraic because the whole decision '
        + 'is made by rearranging until the left side is the curve '
        + 'you already have; '
        + 'whatever remains on the right is the line.',
    },
  ],

  traps: [
    {
      mistake: 'Joining a quadratic with short straight segments.',
      why: 'It is a smooth curve. '
        + 'Segments lose the drawing mark and hide the true turning '
        + 'point.',
    },
    {
      mistake: 'Drawing the curve to a sharp point at the bottom.',
      why: 'A parabola is round at its turning point. '
        + 'A corner there is wrong and gives a wrong minimum.',
    },
    {
      mistake: 'Drawing a second curve for a new equation.',
      why: 'Rearrange so the left side matches the curve you have. '
        + 'The right side is then a line, and a line is quick to draw.',
    },
    {
      mistake: 'Quoting a graphical reading to three decimal places.',
      why: 'The drawing cannot support it. '
        + 'Give the accuracy the scale allows, and say it came from the '
        + 'graph.',
    },
  ],

  extension:
    'The same rearranging trick works between two curves. '
    + 'To solve x squared minus 3x plus 1 equals 2 over x, '
    + 'you could draw both the parabola and the curve y equals 2 over x '
    + 'and find the crossings. '
    + 'That is often the only way, '
    + 'because an equation mixing x squared and 1 over x '
    + 'has no neat formula. '
    + 'This is one of the real uses of graphs beyond school: '
    + 'an equation that cannot be solved by algebra at all '
    + 'can still be solved to a useful accuracy '
    + 'by drawing two curves and looking.',

  figure: {
    alt: 'A graph of y equals x squared minus three x plus one drawn as '
      + 'a smooth parabola on labelled axes, with its turning point '
      + 'rounded at x equals one point five and the line of symmetry '
      + 'drawn through it as a dashed vertical. The two points where the '
      + 'curve crosses the x axis are ringed and labelled as the roots '
      + 'of x squared minus three x plus one equals zero. A horizontal '
      + 'line y equals three is drawn across the curve and its two '
      + 'crossings are ringed, labelled as the solutions of x squared '
      + 'minus three x minus two equals zero, with a note showing the '
      + 'rearrangement that produced that line. A second, sloping line y '
      + 'equals two x is drawn with its crossings marked, labelled as '
      + 'the solutions of x squared minus five x plus one equals zero. '
      + 'A note says that the left side is made to match the curve and '
      + 'whatever is left on the right is the line to draw.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* axes */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M60 300h420"/><path d="M160 60V380"/>'
      + '</g>'
      + '<text x="462" y="320" font-size="12" fill="currentColor">x</text>'
      + '<text x="140" y="56" font-size="12" fill="currentColor">y</text>'
      + '<text x="146" y="320" font-size="10" fill="currentColor">0</text>'
      /* parabola: vertex near x=1.5 */
      + '<path d="M110 120C170 420 290 420 350 120" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      /* symmetry line */
      + '<path d="M230 80V380" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" fill="none"/>'
      + '<text x="234" y="376" font-size="10" fill="currentColor">x = 1.5</text>'
      /* roots on x axis */
      + '<g stroke="#0f8a4d" stroke-width="3" fill="none">'
      + '<circle cx="176" cy="300" r="6"/><circle cx="284" cy="300" r="6"/>'
      + '</g>'
      + '<text x="150" y="340" font-size="10" fill="#0f8a4d">roots of the drawn equation</text>'
      /* y = 3 line */
      + '<path d="M70 236h400" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="476" y="240" font-size="10" fill="currentColor">y = 3</text>'
      + '<g stroke="currentColor" stroke-width="3" fill="none">'
      + '<circle cx="152" cy="236" r="6"/><circle cx="308" cy="236" r="6"/>'
      + '</g>'
      /* y = 2x line */
      + '<path d="M120 380L360 92" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5" fill="none"/>'
      + '<text x="364" y="96" font-size="10" fill="currentColor">y = 2x</text>'
      /* notes */
      + '<text x="500" y="120" font-size="11" fill="#0f8a4d">to solve</text>'
      + '<text x="500" y="136" font-size="11" fill="#0f8a4d">x sq - 3x - 2 = 0</text>'
      + '<text x="500" y="152" font-size="11" fill="#0f8a4d">add 3 to both sides:</text>'
      + '<text x="500" y="168" font-size="11" fill="#0f8a4d">x sq - 3x + 1 = 3</text>'
      + '<text x="500" y="184" font-size="11" fill="#0f8a4d">so draw y = 3</text>'
      + '<text x="500" y="212" font-size="11" fill="currentColor">to solve</text>'
      + '<text x="500" y="228" font-size="11" fill="currentColor">x sq - 5x + 1 = 0</text>'
      + '<text x="500" y="244" font-size="11" fill="currentColor">add 2x to both sides:</text>'
      + '<text x="500" y="260" font-size="11" fill="currentColor">x sq - 3x + 1 = 2x</text>'
      + '<text x="500" y="276" font-size="11" fill="currentColor">so draw y = 2x</text>'
      + '<text x="60" y="404" font-size="12" fill="currentColor">make the left side match the curve you already drew; whatever is left on the right is the line</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'A table of values for y equals x squared minus 3x plus 1',
      columns: ['x', 'x squared', 'minus 3x', 'plus 1', 'y'],
      rows: [
        ['-1', '1', '3', '1', '5'],
        ['0', '0', '0', '1', '1'],
        ['1', '1', '-3', '1', '-1'],
        ['1.5', '2.25', '-4.5', '1', '-1.25'],
        ['2', '4', '-6', '1', '-1'],
        ['3', '9', '-9', '1', '1'],
      ],
      note: 'The row at x equals 1.5 is added because the two equal '
        + 'values at 1 and 2 show the turning point lies between them. '
        + 'That row is what keeps the bottom of the curve round.',
    },
    {
      caption: 'Which line to draw to solve a new equation from the same curve',
      columns: ['Equation to solve', 'Rearranged so the left side is the curve', 'Line to draw'],
      rows: [
        ['x sq - 3x + 1 = 0', 'Already the curve', 'y = 0, the x axis'],
        ['x sq - 3x - 2 = 0', 'x sq - 3x + 1 = 3', 'y = 3'],
        ['x sq - 3x - 4 = 0', 'x sq - 3x + 1 = 5', 'y = 5'],
        ['x sq - 5x + 1 = 0', 'x sq - 3x + 1 = 2x', 'y = 2x'],
        ['x sq - 2x - 1 = 0', 'x sq - 3x + 1 = 2 - x', 'y = 2 - x'],
      ],
      note: 'Every row is one line of algebra. '
        + 'The graph is never redrawn, which is the whole point of the '
        + 'method.',
    },
  ],

  questions: [
    {
      id: 'gf-1',
      ask: 'In y equals m x plus c, the letter c is the:',
      kind: 'choice',
      options: ['y intercept', 'gradient', 'root'],
      answer: 'y intercept',
      teach: 'It is the value of y when x is 0, '
        + 'so it is where the line crosses the y axis.',
      level: 3,
    },
    {
      id: 'gf-2',
      ask: 'For y equals x squared minus 3x plus 1, give y when x is 2.',
      kind: 'numeric',
      options: [],
      answer: '-1',
      teach: '4 minus 6 plus 1 is minus 1.',
      level: 4,
    },
    {
      id: 'gf-3',
      ask: 'Having drawn y equals x squared minus 3x plus 1, '
        + 'which line solves x squared minus 3x minus 2 equals 0?',
      kind: 'choice',
      options: ['y = 3', 'y = -2', 'y = 2x'],
      answer: 'y = 3',
      teach: 'Add 3 to both sides so the left side becomes the drawn '
        + 'expression.',
      level: 5,
    },
    {
      id: 'gf-4',
      ask: 'A parabola should be joined:',
      kind: 'choice',
      options: [
        'With one smooth curve, round at the turning point',
        'With straight segments between the points',
        'To a sharp point at the bottom',
      ],
      answer: 'With one smooth curve, round at the turning point',
      teach: 'A corner at the bottom loses the mark and gives a wrong '
        + 'minimum.',
      level: 4,
    },
    {
      id: 'gf-5',
      ask: 'An answer read from a graph should be quoted:',
      kind: 'choice',
      options: [
        'To the accuracy the scale allows, and said to come from the graph',
        'To three decimal places',
        'As an exact surd',
      ],
      answer: 'To the accuracy the scale allows, and said to come from the graph',
      teach: 'Claiming more accuracy than the drawing supports '
        + 'is itself an error.',
      level: 6,
    },
  ],
})

/* ── coordinate geometry of straight lines ──────────────────────────────── */

teach({
  topicId: 'coordinate-geometry-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'For two points, '
      + 'the gradient is the change in y divided by the change in x. '
      + 'The midpoint is the average of the x values '
      + 'and the average of the y values. '
      + 'The distance comes from Pythagoras. '
      + 'The equation of a line through a known point '
      + 'is best written as y minus y1 equals m times (x minus x1). '
      + 'Parallel lines have equal gradients, '
      + 'and perpendicular lines have gradients multiplying to minus 1.',
    method: [
      'Label the two points as (x1, y1) and (x2, y2).',
      'Find the gradient first; almost everything else needs it.',
      'Use y minus y1 equals m times (x minus x1) for the equation.',
    ],
  },

  idea:
    'A point is fixed by its coordinates, (x, y). '
    + 'For two points (x1, y1) and (x2, y2), '
    + 'the gradient of the line joining them '
    + 'is (y2 minus y1) divided by (x2 minus x1), '
    + 'which is the change in y over the change in x. '
    + 'A positive gradient rises from left to right '
    + 'and a negative one falls. '
    + 'The midpoint is the point halfway between, '
    + 'and it is found by averaging: '
    + 'x is (x1 plus x2) over 2 and y is (y1 plus y2) over 2. '
    + 'The distance between them '
    + 'is the square root of the quantity '
    + '(x2 minus x1) squared plus (y2 minus y1) squared, '
    + 'which is Pythagoras applied to the triangle '
    + 'formed by the horizontal and vertical steps. '
    + 'The equation of a line can be written as y equals m x plus c, '
    + 'where m is the gradient and c the y intercept, '
    + 'or as y minus y1 equals m times (x minus x1), '
    + 'which uses a point on the line directly. '
    + 'Two lines are parallel when their gradients are equal. '
    + 'They are perpendicular when the gradients multiply to minus 1, '
    + 'so each is the negative reciprocal of the other.',

  mechanism:
    'The gradient comes first in every question of this kind, '
    + 'and three things about it are worth knowing properly. '
    + 'The first is the order of subtraction. '
    + 'It does not matter which point you call the first, '
    + 'but it matters that you are consistent: '
    + 'the y difference and the x difference '
    + 'must be taken in the same order. '
    + 'If you take y2 minus y1 on the top '
    + 'you must take x2 minus x1 on the bottom. '
    + 'Swap one and not the other '
    + 'and the sign of the gradient is wrong, '
    + 'which sends every later answer the wrong way. '
    + 'The quickest guard is to glance at the picture: '
    + 'if the points rise from left to right '
    + 'the gradient is positive, and if they fall it is negative, '
    + 'so a sign slip is caught before it spreads. '
    + 'The second is which form of the equation to use, '
    + 'and this is where real time is lost. '
    + 'Learners reach for y equals m x plus c '
    + 'because it is the familiar one, '
    + 'and then have to substitute a point to find c, '
    + 'solve for it, and substitute back. '
    + 'The point form does it in one line. '
    + 'For a line of gradient 2 through the point (3, 5): '
    + 'y minus 5 equals 2 times (x minus 3), '
    + 'which expands to y equals 2x minus 1. '
    + 'No c to find, nothing to solve. '
    + 'So the rule is: if you are given a point and a gradient, '
    + 'use the point form. '
    + 'Use y equals m x plus c only when you are asked '
    + 'for the intercept itself, or asked for that form. '
    + 'The third is the perpendicular rule, '
    + 'and it deserves a word about why it is true '
    + 'because that stops it being misremembered. '
    + 'Take a line of gradient 2, which goes 1 across and 2 up. '
    + 'Turn that step through a right angle '
    + 'and it becomes 2 across and 1 down, '
    + 'which is a gradient of minus one half. '
    + 'And 2 times minus one half is minus 1. '
    + 'So the rule is just what a quarter turn does to a step: '
    + 'the across and up swap places and one sign changes. '
    + 'That is also why learners who write the reciprocal '
    + 'without the minus sign get a parallel looking answer '
    + 'that is not perpendicular at all. '
    + 'A vertical line is the one exception, '
    + 'since its gradient is undefined: '
    + 'a line perpendicular to a vertical line is horizontal, '
    + 'with gradient 0, '
    + 'and the product rule cannot be applied there. '
    + 'Last, the shape of a full answer. '
    + 'These questions usually come in parts '
    + 'that build on one another: '
    + 'find the gradient, then the equation, '
    + 'then show two lines meet at right angles, '
    + 'then find where they cross. '
    + 'So label everything as you go, '
    + 'state the gradient you found with a letter, '
    + 'and name the rule you are using: '
    + 'since m1 times m2 equals minus 1, the lines are perpendicular. '
    + 'The naming of the rule is a mark, '
    + 'exactly as quoting a theorem is in circle geometry.',

  recap:
    'You have plotted points, '
    + 'used Pythagoras on a right angled triangle, '
    + 'and drawn graphs of y equals m x plus c. '
    + 'This brings those together, '
    + 'and lets you work with a line without drawing it at all.',

  method: [
    'Write the points as (x1, y1) and (x2, y2).',
    'Find the gradient: change in y over change in x, in the same order.',
    'Check the sign against whether the line rises or falls.',
    'For the midpoint, average the x values and average the y values.',
    'For the distance, use Pythagoras on the two differences.',
    'For the equation, use y minus y1 equals m times (x minus x1).',
    'Expand into the form the question asks for.',
    'For parallel, use the same gradient.',
    'For perpendicular, use the negative reciprocal, and name the rule.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Find the gradient, midpoint and distance '
        + 'between A(1, 2) and B(5, 10).',
      steps: [
        'Gradient: (10 minus 2) over (5 minus 1), which is 8 over 4.',
        'Midpoint: ((1 plus 5) over 2, (2 plus 10) over 2).',
        'Distance: the square root of 4 squared plus 8 squared, '
          + 'which is the square root of 80.',
      ],
      answer: 'Gradient 2. Midpoint (3, 6). '
        + 'Distance the square root of 80, '
        + 'which is about 8.94.',
    },
    {
      level: 4,
      ask: 'Find the equation of the line of gradient 2 '
        + 'through the point (3, 5), in the form y equals m x plus c.',
      steps: [
        'Use the point form: y minus 5 equals 2 times (x minus 3).',
        'Expand: y minus 5 equals 2x minus 6.',
        'Add 5 to both sides.',
      ],
      answer: 'y equals 2x minus 1. '
        + 'The point form avoided having to find c separately.',
    },
    {
      level: 5,
      ask: 'Find the equation of the line through (4, 1) '
        + 'perpendicular to y equals 3x plus 2.',
      steps: [
        'The given gradient is 3.',
        'Perpendicular gradient: m1 times m2 equals minus 1, '
          + 'so m2 equals minus one third.',
        'Point form: y minus 1 equals minus one third times (x minus 4).',
        'Multiply through by 3: 3y minus 3 equals minus x plus 4.',
      ],
      answer: 'x plus 3y equals 7, '
        + 'or y equals minus one third x plus seven thirds. '
        + 'The rule m1 times m2 equals minus 1 should be named in the '
        + 'working, because it carries a mark.',
    },
    {
      level: 6,
      ask: 'A(1, 1), B(5, 3) and C(3, 7). '
        + 'Show that AB and BC are perpendicular, '
        + 'and find the equation of the line through A parallel to BC.',
      steps: [
        'Gradient AB: (3 minus 1) over (5 minus 1), which is one half.',
        'Gradient BC: (7 minus 3) over (3 minus 5), '
          + 'which is 4 over minus 2, so minus 2.',
        'Product: one half times minus 2, which is minus 1.',
        'So AB and BC meet at right angles, '
          + 'and the angle at B is 90 degrees.',
        'A line through A parallel to BC has gradient minus 2.',
        'y minus 1 equals minus 2 times (x minus 1).',
      ],
      answer: 'The product of the gradients is minus 1, '
        + 'so AB is perpendicular to BC and the angle at B is a right '
        + 'angle. '
        + 'The parallel line is y equals minus 2x plus 3. '
        + 'Notice the gradient of BC is negative '
        + 'because x decreased from B to C, '
        + 'which is exactly where sign errors happen.',
    },
  ],

  traps: [
    {
      mistake: 'Subtracting the y values and x values in opposite orders.',
      why: 'The gradient comes out with the wrong sign. '
        + 'Keep the same order top and bottom, '
        + 'and check against whether the line rises or falls.',
    },
    {
      mistake: 'Using the reciprocal without the minus sign for a '
        + 'perpendicular.',
      why: 'The product must be minus 1. '
        + 'A quarter turn swaps across and up and changes one sign.',
    },
    {
      mistake: 'Reaching for y equals m x plus c when given a point.',
      why: 'The point form y minus y1 equals m times (x minus x1) '
        + 'does it in one line with no c to find.',
    },
    {
      mistake: 'Applying the perpendicular product rule to a vertical '
        + 'line.',
      why: 'Its gradient is undefined. '
        + 'The perpendicular to a vertical line is horizontal, '
        + 'with gradient 0.',
    },
  ],

  extension:
    'The distance formula and the midpoint formula '
    + 'let you prove things about shapes without any drawing. '
    + 'To show that four points form a parallelogram, '
    + 'show that opposite sides have equal gradients. '
    + 'To show it is a rhombus, '
    + 'show in addition that all four sides are the same length. '
    + 'To show it is a rectangle, '
    + 'show that adjacent gradients multiply to minus 1. '
    + 'This is the beginning of doing geometry with algebra, '
    + 'and it is powerful precisely because '
    + 'an accurate drawing is never needed: '
    + 'the arithmetic settles the question exactly.',

  figure: {
    alt: 'A pair of axes with two points A at one comma two and B at '
      + 'five comma ten joined by a line. A right angled triangle is '
      + 'drawn under the line with its horizontal side marked as the '
      + 'change in x equal to four and its vertical side marked as the '
      + 'change in y equal to eight, with notes that the gradient is '
      + 'eight over four and that the hypotenuse length comes from '
      + 'Pythagoras. The midpoint at three comma six is ringed and '
      + 'labelled as the average of the x values and the average of the '
      + 'y values. To the right, a second small drawing shows why the '
      + 'perpendicular rule holds: a step of one across and two up is '
      + 'drawn, then the same step turned through a right angle so that '
      + 'it becomes two across and one down, with the two gradients two '
      + 'and minus one half written beside them and their product marked '
      + 'as minus one.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* axes */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M50 320h300"/><path d="M50 320V40"/>'
      + '</g>'
      /* line AB */
      + '<path d="M90 280L250 80" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<g fill="#0f8a4d"><circle cx="90" cy="280" r="5"/><circle cx="250" cy="80" r="5"/></g>'
      + '<text x="62" y="296" font-size="11" fill="#0f8a4d">A(1, 2)</text>'
      + '<text x="258" y="76" font-size="11" fill="#0f8a4d">B(5, 10)</text>'
      /* triangle */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M90 280h160"/><path d="M250 280V80"/>'
      + '</g>'
      + '<path d="M232 280v-18h18" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="140" y="300" font-size="11" fill="currentColor">change in x = 4</text>'
      + '<text x="256" y="190" font-size="11" fill="currentColor">change in y = 8</text>'
      /* midpoint */
      + '<circle cx="170" cy="180" r="7" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<text x="100" y="166" font-size="11" fill="currentColor">midpoint (3, 6)</text>'
      + '<text x="50" y="348" font-size="11" fill="currentColor">gradient = 8 over 4 = 2;  length = square root of (16 + 64)</text>'
      /* perpendicular explanation */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M420 240h60"/><path d="M480 240v-60"/>'
      + '</g>'
      + '<path d="M420 240L480 180" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="430" y="258" font-size="10" fill="currentColor">1 across</text>'
      + '<text x="488" y="212" font-size="10" fill="currentColor">2 up</text>'
      + '<text x="398" y="170" font-size="11" fill="#0f8a4d">gradient 2</text>'
      /* turned step */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M420 330h120"/><path d="M540 330v30"/>'
      + '</g>'
      + '<path d="M420 330L540 360" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="444" y="324" font-size="10" fill="currentColor">2 across</text>'
      + '<text x="548" y="350" font-size="10" fill="currentColor">1 down</text>'
      + '<text x="392" y="384" font-size="11" fill="#0f8a4d">gradient minus one half, and 2 times minus one half is minus 1</text>'
      + '<text x="392" y="296" font-size="11" fill="currentColor">a quarter turn swaps across and up</text>'
      + '<text x="392" y="312" font-size="11" fill="currentColor">and changes one sign</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The four formulas, and when each one is the right tool',
      columns: ['Wanted', 'Formula', 'Use it when'],
      rows: [
        ['Gradient', '(y2 - y1) over (x2 - x1)', 'Two points are given; do this first'],
        ['Midpoint', '((x1 + x2) over 2, (y1 + y2) over 2)', 'A halfway point, or the centre of a diameter'],
        ['Distance', 'Square root of ((x2 - x1) squared + (y2 - y1) squared)', 'A length, or to compare two sides'],
        ['Equation, point form', 'y - y1 = m(x - x1)', 'A point and a gradient are known'],
        ['Equation, intercept form', 'y = m x + c', 'The intercept itself is wanted'],
        ['Perpendicular gradient', 'm2 = minus 1 over m1', 'A right angle is to be shown or built'],
      ],
      note: 'Almost every part of these questions needs the gradient, '
        + 'so it is the first thing to find and the thing to label.',
    },
  ],

  questions: [
    {
      id: 'cg-1',
      ask: 'Give the gradient of the line through (1, 2) and (5, 10).',
      kind: 'numeric',
      options: [],
      answer: '2',
      teach: '(10 minus 2) over (5 minus 1) is 8 over 4.',
      level: 3,
    },
    {
      id: 'cg-2',
      ask: 'Give the x coordinate of the midpoint of (1, 2) and (5, 10).',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'Average the x values: (1 plus 5) over 2.',
      level: 3,
    },
    {
      id: 'cg-3',
      ask: 'A line has gradient 3. A line perpendicular to it has '
        + 'gradient:',
      kind: 'choice',
      options: [
        'minus one third',
        'one third',
        'minus 3',
      ],
      answer: 'minus one third',
      teach: 'The product must be minus 1. '
        + 'The reciprocal without the minus sign is a common error.',
      level: 4,
    },
    {
      id: 'cg-4',
      ask: 'Given a point and a gradient, the quickest form of the '
        + 'equation is:',
      kind: 'choice',
      options: [
        'y minus y1 equals m times (x minus x1)',
        'y equals m x plus c',
        'a x plus b y plus c equals 0',
      ],
      answer: 'y minus y1 equals m times (x minus x1)',
      teach: 'It needs no c to be found and solved for.',
      level: 5,
    },
    {
      id: 'cg-5',
      ask: 'Gradients of one half and minus 2 tell you the lines are:',
      kind: 'choice',
      options: [
        'Perpendicular',
        'Parallel',
        'The same line',
      ],
      answer: 'Perpendicular',
      teach: 'Their product is minus 1. '
        + 'Name that rule in the working, because it carries a mark.',
      level: 5,
    },
  ],
})
