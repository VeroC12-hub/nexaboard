/**
 * Stored lessons for JHS 2 Mathematics: algebra and geometry.
 *
 * Written at about grade 7, with a `brief` form on every topic.
 *
 * ── Expanding and factorising are one skill, written as two topics ─────────
 *
 * The syllabus lists them separately and learners treat them as unrelated,
 * which is why factorising feels like guessing. They are the same step in
 * opposite directions: expanding multiplies out, factorising puts back. So
 * `factorising-jhs` is written to lean on `expanding-brackets`, and both say
 * the same check out loud: expand your factorised answer and you must get
 * what you started with. A learner who does that can never get a
 * factorisation wrong without knowing.
 *
 * ── Why the construction lesson forbids the protractor ─────────────────────
 *
 * A 60 degree angle measured with a protractor is accurate to about a
 * degree. The same angle constructed with compasses is exact, because it is
 * the angle of an equilateral triangle and nothing was measured at all. The
 * lesson is written around that difference, since it is the only reason
 * construction exists as a topic.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── expanding brackets ─────────────────────────────────────────────────── */

teach({
  topicId: 'expanding-brackets',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Everything outside a bracket multiplies everything inside it. '
      + 'For two brackets, every term in the first multiplies every term in '
      + 'the second, giving four products. '
      + 'A minus sign outside changes the sign of every term it reaches.',
    method: [
      'Multiply term by term and write every product down.',
      'Carry the sign with the number, not separately.',
      'Collect like terms at the end, not during.',
    ],
  },

  idea:
    'To expand a single bracket, multiply each term inside by the term '
    + 'outside: '
    + '3(x + 4) becomes 3x + 12. '
    + 'For two brackets, each term in the first multiplies each term in the '
    + 'second, '
    + 'so (x + 2)(x + 5) gives four products: '
    + 'x squared, 5x, 2x and 10, '
    + 'which collect to x squared + 7x + 10. '
    + 'A negative outside a bracket multiplies every term inside, '
    + 'so -2(x - 3) becomes -2x + 6.',

  mechanism:
    'Expanding is one rule applied as many times as there are pairs, '
    + 'and the mistakes all come from doing it in your head instead of on '
    + 'the page. '
    + 'The rule is that a bracket is a parcel, '
    + 'and whatever is outside applies to everything in the parcel. '
    + 'So 3(x + 4) is three parcels, each holding an x and a 4, '
    + 'which is 3x and 12. '
    + 'Nobody gets that wrong when they see it that way. '
    + 'For two brackets there are two terms in the first parcel '
    + 'and each has to meet both terms in the second, '
    + 'so there are always exactly four products with two terms in each '
    + 'bracket. '
    + 'Count them. '
    + 'If you have three, you missed one, and that is the commonest error '
    + 'in the topic. '
    + 'The signs cause the rest of the trouble, '
    + 'and there is a habit that removes it: '
    + 'treat the sign as part of the number. '
    + 'In (x - 3) the second term is negative 3, not 3 with a minus '
    + 'floating nearby. '
    + 'Then -2 times negative 3 is positive 6 by the ordinary sign rule, '
    + 'and you never have to remember a special case about brackets at all.',

  recap:
    'You know that 3 x 14 can be done as 3 x 10 plus 3 x 4. '
    + 'That is expanding a bracket with numbers. '
    + 'This does the same thing when one of the parts is a letter.',

  method: [
    'Write the sign as part of each term before you start.',
    'Multiply the outside term by each term inside, one at a time.',
    'For two brackets, take the first term of the first bracket and '
      + 'multiply it by both terms of the second.',
    'Then take the second term and do the same.',
    'Count your products: two terms in each bracket gives four.',
    'Collect like terms last.',
    'Check one value, such as x equal to 1, in both forms.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Expand 5(2x + 3).',
      steps: [
        '5 times 2x is 10x.',
        '5 times 3 is 15.',
      ],
      answer: '10x + 15.',
    },
    {
      level: 4,
      ask: 'Expand (x + 3)(x + 4).',
      steps: [
        'x times x is x squared.',
        'x times 4 is 4x.',
        '3 times x is 3x.',
        '3 times 4 is 12.',
        'Collect 4x and 3x.',
      ],
      answer: 'x squared + 7x + 12.',
    },
    {
      level: 5,
      ask: 'Expand (2x - 3)(x - 5).',
      steps: [
        'Terms are 2x, negative 3, x, negative 5.',
        '2x times x is 2x squared.',
        '2x times negative 5 is negative 10x.',
        'Negative 3 times x is negative 3x.',
        'Negative 3 times negative 5 is positive 15.',
        'Collect the x terms.',
      ],
      answer: '2x squared - 13x + 15.',
    },
  ],

  traps: [
    {
      mistake: 'Multiplying only the first term inside the bracket.',
      why: '3(x + 4) is not 3x + 4. '
        + 'The 3 applies to everything in the parcel.',
    },
    {
      mistake: 'Producing three products from two brackets.',
      why: 'There are always four. Count them before collecting.',
    },
    {
      mistake: 'Getting a sign wrong on the last product.',
      why: 'Negative times negative is positive. '
        + 'Keep the sign attached to the number and the rule does the work.',
    },
    {
      mistake: 'Collecting x and x squared together.',
      why: 'They are not like terms. '
        + 'Only terms with the same power can be added.',
    },
  ],

  extension:
    'Two patterns are worth recognising on sight. '
    + '(x + a)(x - a) gives x squared minus a squared, with no middle term. '
    + 'And (x + a) squared gives x squared + 2ax + a squared, '
    + 'which is not x squared + a squared, '
    + 'as expanding it properly shows.',

  questions: [
    {
      id: 'exp-1',
      ask: 'Expand 4(x + 2).',
      kind: 'choice',
      options: ['4x + 8', '4x + 2', 'x + 8'],
      answer: '4x + 8',
      teach: 'The 4 multiplies both terms inside the bracket.',
      level: 3,
    },
    {
      id: 'exp-2',
      ask: 'How many products does (x + 2)(x + 5) give before collecting?',
      kind: 'choice',
      options: ['Four', 'Three', 'Two'],
      answer: 'Four',
      teach: 'Each of the two terms in the first bracket meets both terms '
        + 'in the second.',
      level: 4,
    },
    {
      id: 'exp-3',
      ask: 'Expand -3(x - 2).',
      kind: 'choice',
      options: ['-3x + 6', '-3x - 6', '3x - 6'],
      answer: '-3x + 6',
      teach: 'Negative 3 times negative 2 is positive 6.',
      level: 5,
    },
  ],
})

/* ── factorisation ──────────────────────────────────────────────────────── */

teach({
  topicId: 'factorising-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Factorising is expanding backwards. '
      + 'Find what every term has in common and take it outside a bracket. '
      + 'With four terms, group them in pairs and factorise each pair. '
      + 'Always check by expanding your answer.',
    method: [
      'Find the highest factor common to every term.',
      'Write it outside and divide each term by it.',
      'Expand your answer. It must give back the original.',
    ],
  },

  idea:
    'To factorise is to write an expression as something multiplied, '
    + 'which is the reverse of expanding. '
    + 'Taking out a common factor: '
    + '6x + 9 becomes 3(2x + 3), '
    + 'because 3 divides both terms. '
    + 'The common factor can include letters: '
    + '4x squared + 6x becomes 2x(2x + 3). '
    + 'Factorising by grouping is used with four terms: '
    + 'take them in pairs, factorise each pair, '
    + 'and if the two brackets that appear are the same, '
    + 'that bracket is itself a common factor.',

  mechanism:
    'Factorising feels like guessing to learners who have not noticed that '
    + 'it is expanding in reverse, '
    + 'and that single observation turns it into a checkable procedure. '
    + 'Expanding 3(2x + 3) gives 6x + 9. '
    + 'So factorising 6x + 9 is asking what you would have expanded to get '
    + 'it. '
    + 'Which means you can always check your own answer by expanding it, '
    + 'and if it does not give back the original, you are wrong, '
    + 'and you know it before the marker does. '
    + 'There is no other topic in JHS algebra with a check that complete. '
    + 'Taking out the highest common factor matters too. '
    + '6x + 9 could be written 1(6x + 9), which is true and useless. '
    + 'Taking out 3 is what the question wants, '
    + 'and you find it by looking for what every term shares, '
    + 'number and letter separately. '
    + 'Grouping looks like a different method and is the same one twice. '
    + 'In ax + ay + bx + by, '
    + 'the first pair shares a and the second shares b, '
    + 'giving a(x + y) + b(x + y). '
    + 'Now look at what those two terms share: the bracket (x + y) itself. '
    + 'Take it out, exactly as you took out a number, '
    + 'and you have (x + y)(a + b).',

  recap:
    'You have just expanded brackets. '
    + 'This is the same step done backwards, '
    + 'so everything you learned there is the check for everything here.',

  method: [
    'Look at the numbers and find their highest common factor.',
    'Look at the letters and find the lowest power present in every term.',
    'Write both outside the bracket.',
    'Divide each original term by what you took out, '
      + 'and write the results inside.',
    'Expand your answer and compare with the original.',
    'With four terms, split them into two pairs.',
    'Factorise each pair.',
    'If the brackets match, take the bracket out as a common factor.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Factorise 8x + 12.',
      steps: [
        'The highest common factor of 8 and 12 is 4.',
        '8x divided by 4 is 2x. 12 divided by 4 is 3.',
        'Check: 4(2x + 3) expands to 8x + 12.',
      ],
      answer: '4(2x + 3).',
    },
    {
      level: 4,
      ask: 'Factorise 10x squared - 15x.',
      steps: [
        'Numbers: 5 divides both.',
        'Letters: x appears in both, to the power 1 at least.',
        'So take out 5x.',
        '10x squared over 5x is 2x. Negative 15x over 5x is negative 3.',
      ],
      answer: '5x(2x - 3). '
        + 'Expanding gives 10x squared - 15x.',
    },
    {
      level: 5,
      ask: 'Factorise ax + ay + bx + by by grouping.',
      steps: [
        'Pair them: (ax + ay) and (bx + by).',
        'First pair shares a: a(x + y).',
        'Second pair shares b: b(x + y).',
        'Both terms now share the bracket (x + y).',
        'Take it out.',
      ],
      answer: '(x + y)(a + b).',
    },
  ],

  traps: [
    {
      mistake: 'Taking out a factor that is not the highest.',
      why: '2(4x + 6) is true but not finished. '
        + 'The 4 and 6 still share a factor.',
    },
    {
      mistake: 'Dividing only some of the terms by the factor taken out.',
      why: 'Every term inside must have been divided. '
        + 'Expanding your answer catches this immediately.',
    },
    {
      mistake: 'Not checking by expanding.',
      why: 'The check is complete and takes seconds. '
        + 'There is no reason to hand in a factorisation you have not '
        + 'tested.',
    },
    {
      mistake: 'Grouping four terms in the wrong pairs.',
      why: 'If the two brackets do not match, try a different pairing. '
        + 'It is not a dead end.',
    },
  ],

  extension:
    'Factorising a quadratic such as x squared + 7x + 12 '
    + 'asks for two numbers that multiply to 12 and add to 7. '
    + 'It is the same reverse reasoning: '
    + 'the two numbers are what you would have had in the two brackets.',

  questions: [
    {
      id: 'fac-1',
      ask: 'Factorise 6x + 9.',
      kind: 'choice',
      options: ['3(2x + 3)', '2(3x + 4)', '3(2x + 9)'],
      answer: '3(2x + 3)',
      teach: 'Expand it back: 3 times 2x is 6x, and 3 times 3 is 9.',
      level: 3,
    },
    {
      id: 'fac-2',
      ask: 'Factorise 4x squared + 6x fully.',
      kind: 'choice',
      options: ['2x(2x + 3)', '2(2x squared + 3x)', 'x(4x + 6)'],
      answer: '2x(2x + 3)',
      teach: 'The others are true but not full. '
        + 'Both a 2 and an x are common to every term.',
      level: 4,
    },
    {
      id: 'fac-3',
      ask: 'How can you be certain a factorisation is correct?',
      kind: 'choice',
      options: [
        'Expand it and compare with the original',
        'Check the numbers are smaller',
        'Count the brackets',
      ],
      answer: 'Expand it and compare with the original',
      teach: 'Factorising is expanding backwards, '
        + 'so expanding is a complete check.',
      level: 5,
    },
  ],
})

/* ── turning a word problem into an equation ────────────────────────────── */

teach({
  topicId: 'word-to-equation',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Decide what the letter stands for and write it down in words. '
      + 'Write every other quantity in terms of that letter. '
      + 'Find the sentence in the question that says two things are equal, '
      + 'and that sentence is your equation.',
    method: [
      'Let x be the thing you know least about.',
      'Write the other quantities using x.',
      'Find the equals: a total, a comparison, or a result.',
    ],
  },

  idea:
    'A word problem becomes an equation in three steps. '
    + 'First choose the unknown and state it: let x be the number of goats. '
    + 'Second, write every other quantity in the problem using x: '
    + 'if there are five more sheep than goats, the sheep are x + 5. '
    + 'Third, find the statement that says two amounts are equal. '
    + 'That is usually a total, '
    + 'and it becomes your equation. '
    + 'Then solve it, and finally answer the question that was asked, '
    + 'with units.',

  mechanism:
    'Learners get stuck before the algebra starts, '
    + 'and almost always at the same place: choosing the letter. '
    + 'The rule that unlocks it is to let x be the thing you know least '
    + 'about, '
    + 'because everything else in the problem is then described in '
    + 'relation to it. '
    + 'If there are five more sheep than goats, '
    + 'choosing goats as x makes the sheep x + 5, which is easy. '
    + 'Choosing sheep as x makes the goats x - 5, which is also correct '
    + 'and feels harder, so more learners slip. '
    + 'The second thing to know is where the equals sign comes from. '
    + 'An equation is a claim that two amounts are the same, '
    + 'so there must be a sentence in the question making that claim. '
    + 'Hunt for it. '
    + 'It is nearly always a total: '
    + 'altogether, in all, the sum of, the perimeter is. '
    + 'Sometimes it is a comparison: as much as, the same as. '
    + 'Once you have found that sentence, '
    + 'the two sides of your equation are already written in the question. '
    + 'And the last step is the one most often dropped. '
    + 'Solving gives x. '
    + 'The question may have asked for the number of sheep, '
    + 'which is x + 5. '
    + 'Answer what was asked, in the units it was asked in.',

  recap:
    'You can solve an equation once you have one. '
    + 'This topic is entirely about getting from the words to the equation, '
    + 'which is where the marks are lost.',

  method: [
    'Read the whole question before writing anything.',
    'Decide what you know least about and let x be that.',
    'Write "let x be ..." in words on your page.',
    'Write every other quantity in terms of x.',
    'Find the sentence that says two amounts are equal.',
    'Write that sentence as an equation.',
    'Solve it.',
    'Read the question again and answer exactly what it asked.',
    'Check your answer against the words, not against your working.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A number multiplied by 4 gives 36. Write and solve the '
        + 'equation.',
      steps: [
        'Let x be the number.',
        'Four times it: 4x.',
        'It gives 36, so 4x = 36.',
      ],
      answer: 'x = 9.',
    },
    {
      level: 4,
      ask: 'There are 5 more girls than boys in a class of 33. '
        + 'How many boys?',
      steps: [
        'Boys are what we know least about. Let x be the boys.',
        'Girls are then x + 5.',
        'The total says they are equal to 33: x + (x + 5) = 33.',
        '2x + 5 = 33, so 2x = 28.',
      ],
      answer: '14 boys. '
        + 'Check: 14 boys and 19 girls is 33.',
    },
    {
      level: 5,
      ask: 'A father is three times as old as his son. '
        + 'In 10 years he will be twice as old. '
        + 'Find their ages now.',
      steps: [
        'Let x be the son’s age now, since we know least about it.',
        'The father is 3x now.',
        'In 10 years: son is x + 10, father is 3x + 10.',
        'The equal statement is: father will be twice the son.',
        '3x + 10 = 2(x + 10).',
        '3x + 10 = 2x + 20, so x = 10.',
      ],
      answer: 'The son is 10 and the father is 30. '
        + 'Check: in 10 years they are 20 and 40.',
    },
  ],

  traps: [
    {
      mistake: 'Not writing down what the letter stands for.',
      why: 'You will forget halfway through a long question, '
        + 'and marks are given for stating it.',
    },
    {
      mistake: 'Choosing the quantity you know most about as x.',
      why: 'Then every other quantity is described by subtraction, '
        + 'which is where sign errors come from.',
    },
    {
      mistake: 'Answering with x when the question asked for something '
        + 'else.',
      why: 'Solving gives the son’s age. '
        + 'The question may have wanted the father’s. Read it again.',
    },
    {
      mistake: 'Checking the answer against your own working.',
      why: 'That only confirms your arithmetic. '
        + 'Check it against the words of the question.',
    },
  ],

  extension:
    'Two unknowns need two equations. '
    + 'The method does not change. '
    + 'Name both letters. '
    + 'Write every quantity in terms of them. '
    + 'Then find the two separate statements of equality in the '
    + 'question.',

  questions: [
    {
      id: 'wte-1',
      ask: 'Which quantity should you call x?',
      kind: 'choice',
      options: [
        'The one you know least about',
        'The largest one',
        'The first one mentioned',
      ],
      answer: 'The one you know least about',
      teach: 'Everything else is then described by adding to it, '
        + 'which produces fewer sign errors.',
      level: 3,
    },
    {
      id: 'wte-2',
      ask: 'There are 4 fewer chairs than tables, and 20 altogether. '
        + 'Which equation is right, with x as the tables?',
      kind: 'choice',
      options: [
        'x + (x - 4) = 20',
        'x + (x + 4) = 20',
        'x - 4 = 20',
      ],
      answer: 'x + (x - 4) = 20',
      teach: 'Chairs are 4 fewer than tables, so they are x - 4, '
        + 'and the total gives the equals sign.',
      level: 4,
    },
    {
      id: 'wte-3',
      ask: 'Where does the equals sign in your equation come from?',
      kind: 'choice',
      options: [
        'A sentence in the question saying two amounts are the same',
        'The last number in the question',
        'The letter you chose',
      ],
      answer: 'A sentence in the question saying two amounts are the same',
      teach: 'Usually a total: altogether, in all, the perimeter is.',
      level: 5,
    },
  ],
})

/* ── mappings and relations ─────────────────────────────────────────────── */

teach({
  topicId: 'mapping',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A relation links members of one set to members of another. '
      + 'The same relation can be shown three ways: '
      + 'as an arrow diagram, as a table, '
      + 'or as a set of ordered pairs. '
      + 'It is a function when every input has exactly one output.',
    method: [
      'Find the rule by testing it on every pair, not just the first.',
      'Write the pairs as input first, output second.',
      'To test for a function, look for an input with two outputs.',
    ],
  },

  idea:
    'A relation is a link between two sets. '
    + 'The first set holds the inputs, called the domain, '
    + 'and the second holds the outputs, called the co-domain. '
    + 'The outputs actually used are the range. '
    + 'The same relation can be written three ways. '
    + 'As a mapping, with arrows from each input to its output. '
    + 'As a table, with inputs in one row and outputs in the next. '
    + 'As ordered pairs, written input first: (1, 3), (2, 5), (3, 7). '
    + 'A relation is a function, or a one to one mapping, '
    + 'when each input has exactly one output.',

  mechanism:
    'The three representations are worth taking seriously as one thing '
    + 'in three shapes, '
    + 'because a question will give you one and ask for another, '
    + 'and a learner who thinks of them as separate topics gets stuck. '
    + 'The arrows, the table and the pairs all contain exactly the same '
    + 'information. '
    + 'An arrow from 2 to 5 is the column 2 above 5 '
    + 'and is the pair (2, 5). '
    + 'Nothing is added or lost between them; only the layout changes. '
    + 'Finding the rule is where care is needed. '
    + 'Learners look at the first pair and guess. '
    + 'From (1, 3) you might guess add 2, or multiply by 3. '
    + 'Both fit. '
    + 'Then (2, 5) decides it: add 2 gives 4, which is wrong, '
    + 'and 2n + 1 gives 5, which is right. '
    + 'So the rule is never settled by one pair, '
    + 'and you have to test any candidate on all of them. '
    + 'The order of an ordered pair matters for the same reason '
    + 'that the arrow has a point on one end: '
    + '(2, 5) says 2 maps to 5, and (5, 2) says something different. '
    + 'And the function test is one question: '
    + 'does any input have two arrows leaving it? '
    + 'If so it is not a function, '
    + 'because the relation cannot say what the output is.',

  recap:
    'You have continued patterns and found rules like "add 3". '
    + 'This gives that idea a structure: '
    + 'inputs, outputs, and three ways of writing the link between them.',

  method: [
    'Write the inputs and outputs as a table first.',
    'Look at what happens to each input.',
    'Guess a rule and test it on every pair.',
    'Write the rule as an expression in n or x.',
    'For ordered pairs, put the input first.',
    'For a mapping diagram, draw an arrow from each input to its output.',
    'State the domain and the range if asked.',
    'To test for a function, look for an input with more than one output.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Write the relation 1 to 4, 2 to 5, 3 to 6 as ordered pairs.',
      steps: [
        'Input first, output second.',
      ],
      answer: '(1, 4), (2, 5), (3, 6).',
    },
    {
      level: 4,
      ask: 'Find the rule for (1, 3), (2, 5), (3, 7), (4, 9).',
      steps: [
        'The outputs rise by 2 as the inputs rise by 1.',
        'So the rule contains 2n.',
        '2n gives 2, 4, 6, 8, and the outputs are each 1 more.',
        'Test 2n + 1 on (3, 7): 6 + 1 = 7. Correct.',
      ],
      answer: 'The rule is 2n + 1.',
    },
    {
      level: 5,
      ask: 'Is the relation (1, 2), (1, 5), (2, 7) a function? Why?',
      steps: [
        'A function gives each input exactly one output.',
        'Look at the input 1.',
        'It appears twice, mapping to 2 and to 5.',
      ],
      answer: 'No. '
        + 'The input 1 has two outputs, '
        + 'so the relation cannot say what 1 maps to.',
    },
  ],

  traps: [
    {
      mistake: 'Deciding the rule from the first pair alone.',
      why: 'Several rules fit one pair. '
        + 'Only testing all of them settles it.',
    },
    {
      mistake: 'Writing an ordered pair the wrong way round.',
      why: '(2, 5) and (5, 2) are different relations. '
        + 'Input always comes first.',
    },
    {
      mistake: 'Confusing the co-domain with the range.',
      why: 'The co-domain is what the outputs are allowed to be. '
        + 'The range is the ones actually used.',
    },
    {
      mistake: 'Thinking two inputs sharing one output breaks a function.',
      why: 'It does not. '
        + 'Only one input with two outputs does.',
    },
  ],

  extension:
    'A function with a rule can be drawn as a graph, '
    + 'with the inputs along the horizontal axis and the outputs up the '
    + 'vertical. '
    + 'A linear rule like 2n + 1 gives a straight line, '
    + 'and the 2 is its steepness.',

  questions: [
    {
      id: 'map-1',
      ask: 'In the ordered pair (3, 8), which number is the input?',
      kind: 'choice',
      options: ['3', '8', 'Either'],
      answer: '3',
      teach: 'The input is always written first.',
      level: 3,
    },
    {
      id: 'map-2',
      ask: 'What is the rule for (1, 5), (2, 10), (3, 15)?',
      kind: 'choice',
      options: ['5n', 'n + 4', '5n + 1'],
      answer: '5n',
      teach: 'Test it on all three pairs, not just the first.',
      level: 4,
    },
    {
      id: 'map-3',
      ask: 'What makes a relation fail to be a function?',
      kind: 'choice',
      options: [
        'One input having two different outputs',
        'Two inputs having the same output',
        'Having more inputs than outputs',
      ],
      answer: 'One input having two different outputs',
      teach: 'The relation then cannot say what that input maps to.',
      level: 5,
    },
  ],
})

/* ── geometric construction ─────────────────────────────────────────────── */

teach({
  topicId: 'construction-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Construction means drawing exactly, with compasses and a straight '
      + 'edge only, and no protractor. '
      + 'An arc marks every point at one distance from a centre, '
      + 'and that is the only fact you need. '
      + '60 degrees comes from an equilateral triangle, '
      + 'and 90 and 30 come from bisecting.',
    method: [
      'Keep the compasses at one radius until the step is finished.',
      'Leave all your arcs on the page. They are the evidence.',
      'Build 90 by bisecting a straight line, and 30 by bisecting 60.',
    ],
  },

  idea:
    'A construction is an exact drawing made with compasses and a straight '
    + 'edge. '
    + 'To bisect a line, open the compasses to more than half its length, '
    + 'draw arcs from both ends, and join where they cross. '
    + 'That line is also perpendicular to the original. '
    + 'To construct 60 degrees, draw an arc from the vertex, '
    + 'then from where it meets the line draw an arc of the same radius, '
    + 'and join the vertex to the crossing. '
    + 'To bisect an angle, draw an arc across both arms, '
    + 'then equal arcs from those two points, and join the vertex to where '
    + 'they cross. '
    + 'Bisecting 60 gives 30, and bisecting a straight angle gives 90. '
    + 'The arcs are left on the page, because they are the proof that the '
    + 'drawing was constructed.',

  mechanism:
    'Everything in this topic comes from one property of the compasses: '
    + 'an arc is the set of all points at one fixed distance from its '
    + 'centre. '
    + 'That is why the equilateral triangle gives you 60 degrees for free. '
    + 'Draw an arc of radius r from the vertex. '
    + 'Then from the point where it crosses the line, draw another arc of '
    + 'radius r. '
    + 'Where they meet is r from both points, '
    + 'so the three points form a triangle with three equal sides, '
    + 'and a triangle with three equal sides has three equal angles. '
    + 'Three equal angles adding to 180 means each is exactly 60. '
    + 'Nothing was measured, so nothing can be out by a degree. '
    + 'That is the whole reason construction exists as a topic: '
    + 'a measured 60 is approximately 60, '
    + 'and a constructed 60 is 60. '
    + 'Bisection works by the same property. '
    + 'The crossing points of two equal arcs are the same distance from '
    + 'both ends, '
    + 'so the line through them cannot favour either end, '
    + 'which is what bisecting means. '
    + 'This is also why changing the compass radius partway through ruins a '
    + 'construction, '
    + 'and why leaving the arcs visible matters: '
    + 'they are how a marker sees that you constructed rather than '
    + 'measured.',

  recap:
    'You can measure an angle with a protractor and draw one. '
    + 'This produces exact angles instead of measured ones, '
    + 'using compasses alone.',

  method: [
    'Sharpen the pencil and tighten the compasses.',
    'Draw the base line longer than you need.',
    'For 60 degrees: arc from the vertex, then an equal arc from where it '
      + 'crosses the line, and join.',
    'For a bisector: equal arcs from the two points, then join the '
      + 'crossings.',
    'For 90 degrees: bisect a straight line at the point you want.',
    'For 30 degrees: construct 60, then bisect it.',
    'Never change the radius in the middle of a step.',
    'Leave every arc on the page.',
    'Label the angle and the given lengths.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How do you construct a perpendicular at the middle of a line?',
      steps: [
        'Open the compasses to more than half the line.',
        'Draw an arc from each end, above and below.',
        'Join the two crossing points.',
      ],
      answer: 'The joining line is both the bisector and the '
        + 'perpendicular.',
    },
    {
      level: 4,
      ask: 'Construct 30 degrees. What is the order of steps?',
      steps: [
        'There is no direct construction for 30.',
        'But 60 is direct, from the equilateral triangle.',
        'Half of 60 is 30, and bisecting is a construction.',
      ],
      answer: 'Construct 60 degrees, then bisect it.',
    },
    {
      level: 5,
      ask: 'Why is a constructed 60 degree angle exact, '
        + 'when a measured one is not?',
      steps: [
        'The construction makes three points all r apart.',
        'That is a triangle with three equal sides.',
        'Equal sides force equal angles.',
        'Three equal angles in a triangle must each be 60.',
      ],
      answer: 'Because the construction builds an equilateral triangle, '
        + 'whose angles must be 60 by reasoning. '
        + 'Nothing was measured, so nothing can be slightly off.',
    },
  ],

  traps: [
    {
      mistake: 'Using a protractor in a construction question.',
      why: 'The question asks for a construction. '
        + 'A measured angle scores nothing even when it is accurate.',
    },
    {
      mistake: 'Changing the compass radius partway through a step.',
      why: 'The reasoning depends on the distances being equal. '
        + 'Change the radius and the triangle is not equilateral.',
    },
    {
      mistake: 'Rubbing out the arcs to make the drawing look neat.',
      why: 'The arcs are the evidence that you constructed it. '
        + 'Marks are given for them.',
    },
    {
      mistake: 'Opening the compasses to less than half the line when '
        + 'bisecting.',
      why: 'The arcs then never meet, and there is nothing to join.',
    },
  ],

  extension:
    'Those four constructions build everything else. '
    + 'A 45 degree angle is a bisected 90. '
    + 'A 15 degree angle is a bisected 30. '
    + 'Constructing a triangle from three given sides uses arcs alone, '
    + 'and it is why three sides fix a triangle completely.',

  questions: [
    {
      id: 'con-1',
      ask: 'Which instruments may be used in a construction?',
      kind: 'choice',
      options: [
        'Compasses and a straight edge',
        'A protractor and a ruler',
        'Any instrument',
      ],
      answer: 'Compasses and a straight edge',
      teach: 'A protractor measures, and a construction does not measure.',
      level: 3,
    },
    {
      id: 'con-2',
      ask: 'How is a 30 degree angle constructed?',
      kind: 'choice',
      options: [
        'Construct 60, then bisect it',
        'Bisect a straight line',
        'Measure it with a protractor',
      ],
      answer: 'Construct 60, then bisect it',
      teach: '60 comes from the equilateral triangle, '
        + 'and bisecting halves it exactly.',
      level: 4,
    },
    {
      id: 'con-3',
      ask: 'Why should the arcs be left on the page?',
      kind: 'choice',
      options: [
        'They show the angle was constructed, not measured',
        'They make the drawing look fuller',
        'They hold the pencil marks in place',
      ],
      answer: 'They show the angle was constructed, not measured',
      teach: 'The arcs are the evidence, and marks are awarded for them.',
      level: 5,
    },
  ],
})

/* ── Pythagoras' theorem ────────────────────────────────────────────────── */

teach({
  topicId: 'pythagoras-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'In a right angled triangle, '
      + 'the square on the longest side equals the sum of the squares on '
      + 'the other two. '
      + 'The longest side is the hypotenuse, always opposite the right '
      + 'angle. '
      + 'The rule works only when there is a right angle.',
    method: [
      'Find the right angle, then the side opposite it. That is c.',
      'Finding the hypotenuse: add the squares, then square root.',
      'Finding a shorter side: subtract the squares, then square root.',
    ],
  },

  idea:
    'In a right angled triangle, '
    + 'a squared plus b squared equals c squared, '
    + 'where c is the hypotenuse, the side opposite the right angle. '
    + 'To find the hypotenuse, square the two shorter sides, add them, '
    + 'and take the square root. '
    + 'To find a shorter side, square the hypotenuse, '
    + 'subtract the square of the known shorter side, '
    + 'and take the square root. '
    + 'The rule also works backwards: '
    + 'if the three sides of a triangle satisfy it, the triangle has a '
    + 'right angle.',

  mechanism:
    'The two mistakes in this topic are adding when you should subtract, '
    + 'and using the rule where there is no right angle, '
    + 'and both are prevented by the same habit: '
    + 'find the hypotenuse before you do any arithmetic. '
    + 'The hypotenuse is the longest side and it is always opposite the '
    + 'right angle, '
    + 'so it is identified by looking, not by calculating. '
    + 'Once you know which side is c, '
    + 'the decision makes itself. '
    + 'If c is the unknown, the two knowns are smaller, '
    + 'so the answer must be bigger than both, and you add. '
    + 'If c is known, the unknown is smaller than c, '
    + 'so the answer must be smaller, and you subtract. '
    + 'That gives you a check on every answer before you trust it: '
    + 'a hypotenuse that came out shorter than one of the other sides is '
    + 'wrong. '
    + 'The condition matters as much as the formula. '
    + 'The rule is not about triangles, it is about right angles, '
    + 'and in a triangle with no right angle it simply does not hold. '
    + 'This is also what makes it useful in real work. '
    + 'A builder checking a foundation measures 3 metres along one wall '
    + 'and 4 along the other, '
    + 'and if the diagonal is exactly 5 the corner is square. '
    + 'The rule run backwards tests the right angle rather than assuming '
    + 'it.',

  recap:
    'You know what a right angle is and you can square a number and take a '
    + 'square root. '
    + 'This connects the three sides of a right angled triangle, '
    + 'so two of them give you the third.',

  method: [
    'Draw the triangle and mark the right angle.',
    'Label the side opposite the right angle as c.',
    'Decide whether c is known or unknown.',
    'If c is unknown: square the two shorter sides and add, then square '
      + 'root.',
    'If c is known: square c, subtract the square of the known side, then '
      + 'square root.',
    'Check the hypotenuse is the longest side of your answer.',
    'Give units.',
  ],

  worked: [
    {
      level: 3,
      ask: 'The two shorter sides are 6 cm and 8 cm. Find the hypotenuse.',
      steps: [
        'c is unknown, so add the squares.',
        '36 + 64 = 100.',
        'Square root of 100.',
      ],
      answer: '10 cm.',
    },
    {
      level: 4,
      ask: 'The hypotenuse is 13 cm and one side is 5 cm. '
        + 'Find the other side.',
      steps: [
        'c is known, so subtract.',
        '169 - 25 = 144.',
        'Square root of 144.',
      ],
      answer: '12 cm. '
        + 'It is shorter than 13, as it must be.',
    },
    {
      level: 5,
      ask: 'A ladder 5 m long leans against a wall with its foot 1.4 m '
        + 'from the base. How high does it reach, to one decimal place?',
      steps: [
        'The wall and ground make the right angle.',
        'The ladder is opposite it, so the ladder is the hypotenuse.',
        '25 - 1.96 = 23.04.',
        'Square root of 23.04.',
      ],
      answer: 'About 4.8 m.',
    },
  ],

  traps: [
    {
      mistake: 'Adding the squares when the hypotenuse is already known.',
      why: 'The answer then comes out longer than the hypotenuse, '
        + 'which is impossible. Subtract instead.',
    },
    {
      mistake: 'Assuming the longest given side is the hypotenuse.',
      why: 'It is, but only if the triangle is right angled. '
        + 'Find the right angle first.',
    },
    {
      mistake: 'Using the rule on a triangle with no right angle.',
      why: 'The rule is about right angles. '
        + 'Without one it is simply false.',
    },
    {
      mistake: 'Forgetting the square root at the end.',
      why: 'You have found c squared, not c.',
    },
  ],

  extension:
    'Three whole numbers that satisfy the rule are a Pythagorean triple: '
    + '3, 4, 5 and 5, 12, 13 are the common ones, '
    + 'and so is any multiple of them, such as 6, 8, 10. '
    + 'Recognising them saves the arithmetic.',

  questions: [
    {
      id: 'pyt-1',
      ask: 'Which side is the hypotenuse?',
      kind: 'choice',
      options: [
        'The side opposite the right angle',
        'The side at the bottom',
        'The shortest side',
      ],
      answer: 'The side opposite the right angle',
      teach: 'It is also the longest side, and you find it by looking.',
      level: 3,
    },
    {
      id: 'pyt-2',
      ask: 'The hypotenuse is 10 and one side is 6. What is the other?',
      kind: 'choice',
      options: ['8', '4', '16'],
      answer: '8',
      teach: '100 - 36 = 64, and the square root of 64 is 8.',
      level: 4,
    },
    {
      id: 'pyt-3',
      ask: 'When does the rule NOT apply?',
      kind: 'choice',
      options: [
        'When the triangle has no right angle',
        'When the sides are decimals',
        'When the triangle is large',
      ],
      answer: 'When the triangle has no right angle',
      teach: 'The rule is about right angles, not about triangles in '
        + 'general.',
      level: 5,
    },
  ],
})

/* ── the circle ─────────────────────────────────────────────────────────── */

teach({
  topicId: 'circles-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The radius reaches from centre to edge, '
      + 'the diameter crosses through the centre and is twice the radius. '
      + 'Circumference is pi times the diameter. '
      + 'Area is pi times the radius squared. '
      + 'Circumference uses the diameter; area uses the radius.',
    method: [
      'Write down whether you were given the radius or the diameter.',
      'Circumference: pi d. Area: pi r squared.',
      'Give the units: cm for length, cm squared for area.',
    ],
  },

  idea:
    'The centre is the middle point. '
    + 'The radius is the distance from centre to edge. '
    + 'The diameter is a straight line through the centre, '
    + 'and it is twice the radius. '
    + 'The circumference is the distance all the way round. '
    + 'A chord joins two points on the edge without passing through the '
    + 'centre. '
    + 'An arc is part of the edge, a sector is a slice between two radii, '
    + 'and a segment is the piece cut off by a chord. '
    + 'The circumference is pi times the diameter, '
    + 'and the area is pi times the radius squared. '
    + 'Pi is about 3.14, or 22 over 7 for a quick calculation.',

  mechanism:
    'The single most common error in this topic is mixing the radius and '
    + 'the diameter, '
    + 'and the reason it happens is that the two formulas use different '
    + 'ones. '
    + 'Circumference is pi d, and area is pi r squared. '
    + 'So the first thing to write on your page is which one you were '
    + 'given, '
    + 'and the second is the other one, worked out. '
    + 'Then neither formula can catch you. '
    + 'It helps to know where pi comes from, '
    + 'because it stops being a mysterious number. '
    + 'Measure the distance round any circular thing and divide it by the '
    + 'distance across. '
    + 'A tin, a bucket, a bottle top: the answer is always about 3.14. '
    + 'That constant ratio is pi, '
    + 'and the formula C = pi d is nothing more than that measurement '
    + 'rearranged. '
    + 'It is a fact about every circle, not a rule somebody invented. '
    + 'The area formula explains the units too. '
    + 'Area has r squared in it, so a length is multiplied by a length, '
    + 'and the answer is in square units. '
    + 'This is also why doubling the radius does not double the area: '
    + 'it quadruples it, '
    + 'because the radius appears twice. '
    + 'A pizza of twice the radius is four times the pizza.',

  recap:
    'You can find the area of a rectangle and the perimeter of a shape '
    + 'with straight sides. '
    + 'A circle has no straight sides, '
    + 'so it needs pi, which is where the distance round relates to the '
    + 'distance across.',

  method: [
    'Write down what you were given: radius or diameter.',
    'Work out the other one. The diameter is twice the radius.',
    'For circumference, use pi times the diameter.',
    'For area, use pi times the radius squared.',
    'Square the radius before multiplying by pi.',
    'Use 22 over 7 when the numbers suit it, otherwise 3.14.',
    'Write the units: cm for circumference, cm squared for area.',
    'For a semicircle, halve the answer, '
      + 'and add the diameter if you need the whole perimeter.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A circle has radius 7 cm. Find its circumference, '
        + 'using 22 over 7.',
      steps: [
        'The diameter is 14 cm.',
        'C = pi d = 22 over 7, times 14.',
      ],
      answer: '44 cm.',
    },
    {
      level: 4,
      ask: 'A circle has diameter 10 cm. Find its area, using 3.14.',
      steps: [
        'Area needs the radius, so halve the diameter: r = 5.',
        'r squared is 25.',
        '3.14 x 25.',
      ],
      answer: '78.5 cm squared.',
    },
    {
      level: 5,
      ask: 'One circle has twice the radius of another. '
        + 'How many times the area does it have?',
      steps: [
        'Area is pi r squared.',
        'Replace r with 2r: pi times (2r) squared.',
        '(2r) squared is 4r squared.',
      ],
      answer: 'Four times. '
        + 'The radius appears twice in the formula, '
        + 'so doubling it multiplies the area by four.',
    },
  ],

  traps: [
    {
      mistake: 'Using the diameter in the area formula.',
      why: 'Area uses the radius. '
        + 'Write down both before you start and this cannot happen.',
    },
    {
      mistake: 'Multiplying by pi before squaring the radius.',
      why: 'Pi r squared means pi times (r squared). '
        + 'Square first.',
    },
    {
      mistake: 'Giving an area in cm instead of cm squared.',
      why: 'An area is a length times a length. '
        + 'Marks are given for the unit.',
    },
    {
      mistake: 'Thinking doubling the radius doubles the area.',
      why: 'It quadruples it. '
        + 'The radius is used twice in the formula.',
    },
  ],

  extension:
    'A sector is a fraction of the circle, '
    + 'and the fraction is its angle over 360. '
    + 'So a 90 degree sector has a quarter of the area '
    + 'and its arc is a quarter of the circumference.',

  questions: [
    {
      id: 'cir-1',
      ask: 'The radius is 5 cm. What is the diameter?',
      kind: 'choice',
      options: ['10 cm', '2.5 cm', '25 cm'],
      answer: '10 cm',
      teach: 'The diameter is twice the radius.',
      level: 3,
    },
    {
      id: 'cir-2',
      ask: 'Which formula gives the area?',
      kind: 'choice',
      options: [
        'pi times the radius squared',
        'pi times the diameter',
        'two pi times the diameter',
      ],
      answer: 'pi times the radius squared',
      teach: 'Circumference uses the diameter; area uses the radius.',
      level: 4,
    },
    {
      id: 'cir-3',
      ask: 'Where does pi come from?',
      kind: 'choice',
      options: [
        'The distance round a circle divided by the distance across',
        'A number chosen by mathematicians',
        'The area of a circle of radius 1',
      ],
      answer: 'The distance round a circle divided by the distance across',
      teach: 'Measure any circular object and that ratio is always about '
        + '3.14.',
      level: 5,
    },
  ],
})

/* ── coordinates ────────────────────────────────────────────────────────── */

teach({
  topicId: 'coordinates-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A point is written (x, y): across first, then up. '
      + 'The axes divide the plane into four quadrants, '
      + 'and the signs of x and y say which one a point is in. '
      + 'The distance between two points comes from Pythagoras.',
    method: [
      'Always read across before up.',
      'Check the signs against the quadrant before plotting.',
      'For a distance, find the across and up gaps, then use Pythagoras.',
    ],
  },

  idea:
    'The horizontal axis is the x axis and the vertical is the y axis, '
    + 'crossing at the origin, (0, 0). '
    + 'A point is written (x, y), with the across value first. '
    + 'The four quadrants are: '
    + 'top right, where x and y are both positive; '
    + 'top left, x negative and y positive; '
    + 'bottom left, both negative; '
    + 'bottom right, x positive and y negative. '
    + 'The distance between two points is found by taking the difference '
    + 'in x and the difference in y '
    + 'and using Pythagoras on them.',

  mechanism:
    'Two things in this topic are worth more than the plotting itself. '
    + 'The first is that the order in (x, y) is not a convention to be '
    + 'tolerated, '
    + 'it is the whole point of the notation. '
    + '(2, 5) and (5, 2) are different places. '
    + 'Across then up, every time, without deciding afresh. '
    + 'The second is where the distance formula comes from, '
    + 'because learners memorise it and forget it, '
    + 'and it does not need memorising at all. '
    + 'Mark two points and join them. '
    + 'Now draw a horizontal line from one and a vertical line from the '
    + 'other. '
    + 'You have made a right angled triangle, '
    + 'and your line is its hypotenuse. '
    + 'The horizontal side is how far apart the x values are, '
    + 'and the vertical side is how far apart the y values are. '
    + 'So the distance is the square root of (difference in x) squared '
    + 'plus (difference in y) squared, '
    + 'which is Pythagoras and nothing else. '
    + 'You can rebuild it on the page in ten seconds whenever you need it. '
    + 'The order of subtraction does not matter, '
    + 'because squaring removes the sign, '
    + 'which is worth noticing because it saves worrying about it.',

  recap:
    'You have plotted points in the first quadrant, '
    + 'where both values are positive. '
    + 'This extends to negative values, '
    + 'and uses Pythagoras to measure between two points.',

  method: [
    'Draw both axes and number them evenly, including the negatives.',
    'Label the origin.',
    'For each point, read the x value and move across.',
    'Then read the y value and move up or down.',
    'Mark with a small cross and write the point beside it.',
    'For a distance, find the difference in x and the difference in y.',
    'Square both, add, and take the square root.',
    'Give the answer in units.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which quadrant holds the point (-3, 4)?',
      steps: [
        'x is negative, so it is to the left.',
        'y is positive, so it is above.',
      ],
      answer: 'The second quadrant, top left.',
    },
    {
      level: 4,
      ask: 'Find the distance between (1, 2) and (4, 6).',
      steps: [
        'Difference in x: 4 - 1 = 3.',
        'Difference in y: 6 - 2 = 4.',
        'Pythagoras: 9 + 16 = 25.',
        'Square root of 25.',
      ],
      answer: '5 units.',
    },
    {
      level: 5,
      ask: 'Find the distance between (-2, 1) and (3, -4).',
      steps: [
        'Difference in x: 3 - (-2) = 5.',
        'Difference in y: -4 - 1 = -5.',
        'Squaring removes the sign: 25 + 25 = 50.',
        'Square root of 50.',
      ],
      answer: 'The square root of 50, which is about 7.1 units.',
    },
  ],

  traps: [
    {
      mistake: 'Plotting (2, 5) as two up and five across.',
      why: 'Across comes first, always. '
        + 'Say it to yourself before every point.',
    },
    {
      mistake: 'Subtracting coordinates in the wrong order and worrying.',
      why: 'It makes no difference. '
        + 'The result is squared, which removes the sign.',
    },
    {
      mistake: 'Adding the differences instead of their squares.',
      why: 'The distance is a hypotenuse, not a sum. '
        + 'For (1,2) to (4,6) the answer is 5, not 7.',
    },
    {
      mistake: 'Numbering the axes unevenly.',
      why: 'Every plotted point is then in the wrong place, '
        + 'and the error is invisible in your working.',
    },
  ],

  extension:
    'The midpoint of two points is easy to find. '
    + 'Average the two x values. '
    + 'Then average the two y values. '
    + 'That works because the middle is halfway in each direction on its '
    + 'own.',

  questions: [
    {
      id: 'coo-1',
      ask: 'In (x, y), which value comes first?',
      kind: 'choice',
      options: ['The across value', 'The up value', 'Either'],
      answer: 'The across value',
      teach: '(2, 5) and (5, 2) are different points.',
      level: 3,
    },
    {
      id: 'coo-2',
      ask: 'Which quadrant has x negative and y negative?',
      kind: 'choice',
      options: ['Bottom left', 'Top left', 'Bottom right'],
      answer: 'Bottom left',
      teach: 'Negative x is left and negative y is down.',
      level: 4,
    },
    {
      id: 'coo-3',
      ask: 'Where does the distance formula come from?',
      kind: 'choice',
      options: [
        'Pythagoras on the across and up gaps',
        'Adding the coordinates',
        'The midpoint rule',
      ],
      answer: 'Pythagoras on the across and up gaps',
      teach: 'The two points and the right angle between them make a right '
        + 'angled triangle, and your line is the hypotenuse.',
      level: 5,
    },
  ],
})
