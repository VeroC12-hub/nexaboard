/**
 * Stored lessons for SHS 1 Computing (elective) and SHS 1 Robotics.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── Why these two subjects share a file ───────────────────────────────────
 *
 * They share a block because they share a skill, and it is the skill the
 * examination actually tests: tracing. A learner who can keep a trace table
 * honestly, line by line, with one column per variable, can answer a
 * Computing question about a loop and a Robotics question about a control
 * algorithm with the same hand. Everything else in both subjects is
 * vocabulary on top of that, which is why the four Computing topics come
 * first and the Robotics ones lean on them.
 *
 * ── How the programming is written ───────────────────────────────────────
 *
 * In pseudocode, not in a named language. That is deliberate and it matches
 * the examination: WASSCE marks the logic, and a learner who has only ever
 * seen one language reads a question in another and freezes. So the lessons
 * use words a Python, a Pascal and a C learner all recognise, and say where
 * the real languages differ, because the differences are exactly where the
 * marks go: integer division, the equals sign, and whether a loop tests
 * before or after its body.
 *
 * ── Equipment ────────────────────────────────────────────────────────────
 *
 * Computing needs no machine for any of this. Every expression, trace and
 * base conversion here is done on paper, and a learner with a computer
 * should still do it on paper first, because the examination will.
 *
 * Robotics is the harder case. A school with no kit cannot drive a stepper
 * motor or read an ultrasonic sensor, and these lessons do not pretend
 * otherwise. What they do is separate the two halves: choosing a sensor,
 * choosing an actuator, and tracing a control algorithm are paper work and
 * carry most of the marks, while wiring, calibrating and tuning need the
 * real thing. Each lesson says plainly which half it is in, and where the
 * machine is needed it says what the machine would show.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── Computing: variables, types and expressions ─────────────────────────── */

teach({
  topicId: 'variables-types',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A variable is a named store that holds one value at a time. '
      + 'Its type decides what may be kept in it '
      + 'and what the operators mean. '
      + 'An expression is evaluated by precedence, '
      + 'brackets first, then multiply and divide, then add and subtract. '
      + 'Assignment copies a value into a name; '
      + 'it is not a statement that two things are equal.',
    method: [
      'Name each variable and state its type.',
      'Work the expression out by precedence, one step a line.',
      'Write the new value into the trace table.',
    ],
  },

  idea:
    'A variable is a named place in memory that holds one value at a time. '
    + 'Writing count takes the value 5 puts 5 into count '
    + 'and throws away whatever was there before. '
    + 'The type of a variable says what kind of value it may hold. '
    + 'An integer holds a whole number. '
    + 'A real, also called a float, holds a number with a decimal part. '
    + 'A string holds text. '
    + 'A boolean holds true or false. '
    + 'A character holds one letter or symbol. '
    + 'An expression is a recipe for a value: '
    + '3 plus 4 times 2 is an expression, and it works out to 11, '
    + 'because multiply is done before add. '
    + 'The order is brackets, then powers, '
    + 'then multiply and divide, then add and subtract, '
    + 'and left to right between equals. '
    + 'A constant is a named value that never changes, '
    + 'such as VAT set to 0.15.',

  mechanism:
    'The type is not paperwork. '
    + 'It changes what the operators do, and that is where marks go. '
    + 'Take the plus sign. '
    + 'With two integers, 5 plus 3 is 8. '
    + 'With two strings, the string 5 plus the string 3 is the text 53, '
    + 'because plus on text joins it end to end. '
    + 'So a program that reads a price from the keyboard '
    + 'and adds it straight to a total '
    + 'often prints the two prices stuck together, '
    + 'and the fault is that keyboard input arrives as text. '
    + 'The cure is one line: convert it to a number first. '
    + 'The second place is division. '
    + 'In many languages, 7 divided by 2 with both sides integers '
    + 'gives 3, not 3.5, because integer division throws the remainder away. '
    + 'A learner who computes an average that way loses the mark '
    + 'and the program gives a wrong answer that looks reasonable. '
    + 'Say what you want: 7.0 divided by 2 gives 3.5. '
    + 'Third, the equals sign. '
    + 'In pseudocode, write x takes x plus 1, '
    + 'and read it as: work out the right hand side, '
    + 'then store it in the name on the left. '
    + 'As mathematics, x equals x plus 1 is false for every x. '
    + 'As a program it is the commonest line there is. '
    + 'Keeping them separate is why examiners use an arrow '
    + 'and why you should write one too. '
    + 'Last, the thing to put on paper: a trace table. '
    + 'One column for each variable, one row for each line executed, '
    + 'and the new value written only when it changes. '
    + 'Marks are given for the table, not only for the final answer, '
    + 'so a learner who traces in the head and writes one number '
    + 'has thrown marks away even when the number is right.',

  recap:
    'You have used letters to stand for numbers in algebra, '
    + 'where a letter keeps one value throughout. '
    + 'A program variable is the same name '
    + 'except that its value may be replaced as the program runs.',

  method: [
    'List every variable the problem needs, with its type.',
    'Give each one a starting value, or say it is not yet set.',
    'Read the statement and find the operators in it.',
    'Work out brackets first, then powers, then multiply and divide, then add and subtract.',
    'Check whether any division is between two integers.',
    'Store the result in the name on the left of the arrow.',
    'Write the new value in the trace table, on its own row.',
    'State the final value of each variable asked for.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Evaluate 4 plus 6 times 2 minus 10 divided by 5.',
      steps: [
        'Multiply and divide first: 6 times 2 is 12, and 10 divided by 5 is 2.',
        'Now add and subtract left to right: 4 plus 12 is 16.',
        '16 minus 2 is 14.',
      ],
      answer: '14.',
    },
    {
      level: 4,
      ask: 'Give the type of each: the number of pupils in a class, '
        + 'the price of a loaf in cedis, a pupil’s name, '
        + 'and whether the pupil has paid.',
      steps: [
        'A count of pupils is whole, so integer.',
        'A price has pesewas, so real.',
        'A name is text, so string.',
        'Paid or not paid has two states, so boolean.',
      ],
      answer: 'Integer, real, string, boolean.',
    },
    {
      level: 5,
      ask: 'Trace this and give the final value of total. '
        + 'price takes 12. qty takes 3. total takes price times qty. '
        + 'price takes 20. total takes total plus price.',
      steps: [
        'After line 1: price is 12.',
        'After line 2: qty is 3.',
        'After line 3: total is 12 times 3, which is 36.',
        'After line 4: price is 20, and total is unchanged at 36, '
          + 'because total was worked out already.',
        'After line 5: total is 36 plus 20, which is 56.',
      ],
      answer: 'total is 56. '
        + 'Changing price after the multiplication does not rework it.',
    },
    {
      level: 6,
      ask: 'A trader keeps takings in a variable read from the keyboard. '
        + 'Day one is 250 and day two is 180, '
        + 'but the program prints 250180 instead of 430. '
        + 'Say why, and give the fix.',
      steps: [
        'Keyboard input arrives as a string.',
        'Plus on two strings joins them, so 250 and 180 become 250180.',
        'Convert each reading to a number before adding.',
      ],
      answer: 'The values are text, not numbers, '
        + 'so plus joined them instead of adding. '
        + 'Convert to integer on input, then the total is 430.',
    },
  ],

  traps: [
    {
      mistake: 'Adding two numbers that came from the keyboard, as they are.',
      why: 'Input is text until converted. '
        + 'Plus joins text, so 250 and 180 become 250180. '
        + 'Convert on the input line.',
    },
    {
      mistake: 'Dividing two integers and expecting a decimal.',
      why: 'Integer division drops the remainder, '
        + 'so 7 divided by 2 is 3. '
        + 'Make one side real, or say that you want real division.',
    },
    {
      mistake: 'Reading x takes x plus 1 as an equation and calling it wrong.',
      why: 'It is an instruction, not a claim. '
        + 'The old value is read, 1 is added, and the answer replaces it.',
    },
    {
      mistake: 'Tracing in the head and writing only the answer.',
      why: 'The trace table carries marks of its own. '
        + 'One column per variable, one row per line executed.',
    },
  ],

  extension:
    'Two integers of fixed size can overflow: '
    + 'add 1 to the largest integer a 16 bit store can hold '
    + 'and it wraps round to the most negative one. '
    + 'This is also why money is often kept in pesewas as an integer '
    + 'rather than in cedis as a real, '
    + 'since a real cannot hold 0.1 exactly '
    + 'and a long sum of them drifts by a pesewa or two.',

  figure: {
    alt: 'Two rows of labelled boxes showing four variables. The top row '
      + 'shows price holding 12, qty holding 3 and total holding 36. The '
      + 'bottom row shows the same variables after price has been given '
      + 'the new value 20, where price now holds 20, the old 12 is struck '
      + 'through, and total still holds 36 because it was worked out '
      + 'before the change.',
    svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* top row: three boxes */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<rect x="60" y="60" width="120" height="60" rx="6"/>'
      + '<rect x="230" y="60" width="120" height="60" rx="6"/>'
      + '<rect x="400" y="60" width="120" height="60" rx="6"/>'
      + '</g>'
      + '<text x="60" y="50" font-size="13" fill="currentColor">price</text>'
      + '<text x="230" y="50" font-size="13" fill="currentColor">qty</text>'
      + '<text x="400" y="50" font-size="13" fill="currentColor">total</text>'
      + '<text x="108" y="99" font-size="20" fill="currentColor">12</text>'
      + '<text x="283" y="99" font-size="20" fill="currentColor">3</text>'
      + '<text x="448" y="99" font-size="20" fill="currentColor">36</text>'
      + '<text x="60" y="142" font-size="12" fill="currentColor">after total takes price times qty</text>'
      /* bottom row */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<rect x="60" y="190" width="120" height="60" rx="6"/>'
      + '<rect x="230" y="190" width="120" height="60" rx="6"/>'
      + '<rect x="400" y="190" width="120" height="60" rx="6"/>'
      + '</g>'
      + '<text x="60" y="180" font-size="13" fill="currentColor">price</text>'
      + '<text x="230" y="180" font-size="13" fill="currentColor">qty</text>'
      + '<text x="400" y="180" font-size="13" fill="currentColor">total</text>'
      + '<text x="88" y="229" font-size="20" fill="currentColor">20</text>'
      + '<text x="283" y="229" font-size="20" fill="currentColor">3</text>'
      + '<text x="448" y="229" font-size="20" fill="currentColor">36</text>'
      /* struck through old value */
      + '<text x="132" y="229" font-size="16" fill="currentColor" opacity="0.5">12</text>'
      + '<path d="M128 223h30" stroke="currentColor" stroke-width="2"/>'
      /* arrow showing overwrite */
      + '<path d="M120 126V182" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M114 174l6 10 6-10Z" fill="#0f8a4d"/>'
      + '<text x="60" y="276" font-size="12" fill="#0f8a4d">a new value replaces the old one; it does not rework anything already computed</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'What each type holds, and what the plus sign does to it',
      columns: ['Type', 'Holds', 'Example value', 'Plus sign means'],
      rows: [
        ['Integer', 'A whole number', '42', 'Add'],
        ['Real', 'A number with decimals', '12.50', 'Add'],
        ['String', 'Text', 'Akosua', 'Join end to end'],
        ['Boolean', 'True or false', 'true', 'Not allowed'],
        ['Character', 'One symbol', 'A', 'Join end to end'],
      ],
      note: 'The string row is the one that costs marks: '
        + 'keyboard input is a string until you convert it.',
    },
  ],

  questions: [
    {
      id: 'vt-1',
      ask: 'Evaluate 2 plus 3 times 4.',
      kind: 'numeric',
      options: [],
      answer: '14',
      teach: 'Multiply before add: 3 times 4 is 12, then 2 plus 12 is 14.',
      level: 3,
    },
    {
      id: 'vt-2',
      ask: 'Which type suits the number of goats on a farm?',
      kind: 'choice',
      options: ['Integer', 'Real', 'String', 'Boolean'],
      answer: 'Integer',
      teach: 'A count of animals is a whole number, '
        + 'so an integer is right and a real would be wrong.',
      level: 3,
    },
    {
      id: 'vt-3',
      ask: 'In many languages, what is 9 divided by 2 when both are integers?',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'Integer division drops the remainder, so the answer is 4, not 4.5.',
      level: 5,
    },
    {
      id: 'vt-4',
      ask: 'A program joins two numbers instead of adding them. '
        + 'The likely cause is:',
      kind: 'choice',
      options: [
        'They are strings, not numbers',
        'The plus sign is broken',
        'The variables are integers',
      ],
      answer: 'They are strings, not numbers',
      teach: 'Plus on text joins it. '
        + 'Convert keyboard input to a number on the line that reads it.',
      level: 5,
    },
    {
      id: 'vt-5',
      ask: 'x takes 5, then x takes x plus 3, then x takes x times 2. '
        + 'What is x?',
      kind: 'numeric',
      options: [],
      answer: '16',
      teach: '5 plus 3 is 8, and 8 times 2 is 16. '
        + 'Each line uses the value stored by the line before.',
      level: 4,
    },
  ],
})

/* ── Computing: sequence, selection and repetition ───────────────────────── */

teach({
  topicId: 'control-structures',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Sequence is one statement after another. '
      + 'Selection chooses between paths with IF, ELSE IF and ELSE. '
      + 'Repetition runs a block again, '
      + 'with FOR when the count is known '
      + 'and WHILE when it depends on a condition. '
      + 'Predict the output by tracing, '
      + 'one row per line executed, never in the head.',
    method: [
      'Draw a trace table with one column per variable.',
      'Execute one line, write any change on a new row.',
      'At a loop, test the condition and record true or false.',
    ],
  },

  idea:
    'A program is built from three structures and nothing else. '
    + 'Sequence means the statements run in the order written. '
    + 'Selection means a condition decides which block runs: '
    + 'IF the condition is true do this, ELSE do that. '
    + 'Several cases are written as IF, then ELSE IF, then ELSE, '
    + 'and only the first true branch runs. '
    + 'Repetition means a block runs more than once. '
    + 'A FOR loop runs a known number of times, '
    + 'counting a variable from a start to an end. '
    + 'A WHILE loop tests a condition before each pass '
    + 'and may run no times at all. '
    + 'A REPEAT UNTIL loop tests after each pass, '
    + 'so it always runs at least once. '
    + 'Conditions are built with equals, not equal to, less than, '
    + 'greater than, and joined with AND, OR and NOT.',

  mechanism:
    'Everything in this topic is settled by where the test sits, '
    + 'so that is the thing to write down. '
    + 'A WHILE tests first. '
    + 'If the condition is false at the start, the body never runs, '
    + 'and a learner who assumes at least one pass '
    + 'predicts output that the program never prints. '
    + 'A REPEAT UNTIL tests last, so the body has already run once '
    + 'before the condition is even looked at. '
    + 'Take a till that asks for the amount paid '
    + 'until the amount covers the bill. '
    + 'As a REPEAT UNTIL it asks once and then checks, which is right. '
    + 'As a WHILE it checks a variable that holds nothing yet, which is wrong. '
    + 'The second place marks are lost is the infinite loop, '
    + 'and it has one cause: '
    + 'nothing inside the body changes what the condition tests. '
    + 'WHILE count is less than 10, print count, is an infinite loop, '
    + 'because count never moves. '
    + 'So after writing any WHILE, '
    + 'point at the line that changes the tested variable. '
    + 'If you cannot point at it, it is not there. '
    + 'Third, the boundary. '
    + 'FOR i from 1 to 5 runs five times. '
    + 'FOR i from 0 to 5 runs six times. '
    + 'WHILE i is less than 5 stops at 4, '
    + 'and WHILE i is less than or equal to 5 stops at 5. '
    + 'One sign changes the answer, so the trace table has to include '
    + 'the pass where the condition first turns false, '
    + 'written as false, not left blank. '
    + 'Last, what has to be on the paper. '
    + 'An examiner marking a tracing question is looking for the table: '
    + 'the variables across the top, '
    + 'the condition recorded true or false at each test, '
    + 'and the output column. '
    + 'A single final number earns almost nothing, '
    + 'and a correct table with one arithmetic slip earns most of the marks.',

  recap:
    'You have followed written instructions in order, '
    + 'and made choices from a rule, such as a bus fare that depends on age. '
    + 'This gives those two habits a notation, and adds doing a thing again '
    + 'until a condition is met.',

  method: [
    'Read the problem and decide which structure it needs.',
    'Use FOR when you know how many times, and WHILE when you do not.',
    'Use REPEAT UNTIL when the body must run at least once.',
    'Write the condition in full, with its comparison sign.',
    'Draw a trace table: one column per variable, one for the condition, one for output.',
    'Execute line by line, writing a row whenever something changes.',
    'Record each test as true or false, including the one that stops the loop.',
    'Point at the line inside the loop that changes the tested variable.',
    'Read the output column as your answer.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How many times does FOR i from 3 to 7 run the body?',
      steps: [
        'The values taken are 3, 4, 5, 6 and 7.',
        'Count them.',
      ],
      answer: 'Five times. '
        + 'End minus start plus 1 is 7 minus 3 plus 1, which is 5.',
    },
    {
      level: 4,
      ask: 'Trace and give the output. '
        + 'total takes 0. FOR i from 1 to 4: total takes total plus i. '
        + 'After the loop, print total.',
      steps: [
        'i is 1: total is 0 plus 1, which is 1.',
        'i is 2: total is 1 plus 2, which is 3.',
        'i is 3: total is 3 plus 3, which is 6.',
        'i is 4: total is 6 plus 4, which is 10.',
        'The loop ends and total is printed.',
      ],
      answer: '10.',
    },
    {
      level: 5,
      ask: 'A trotro conductor charges 3 cedis under 12 years, '
        + '5 cedis from 12 to 59, and 2 cedis from 60. '
        + 'Write the selection and give the fare for ages 11, 12 and 60.',
      steps: [
        'IF age is less than 12 then fare takes 3.',
        'ELSE IF age is less than 60 then fare takes 5.',
        'ELSE fare takes 2.',
        'Age 11 takes the first branch. Age 12 fails the first and takes the second. '
          + 'Age 60 fails both and takes the ELSE.',
      ],
      answer: '3 cedis, 5 cedis and 2 cedis. '
        + 'The ELSE IF chain works because only the first true branch runs.',
    },
    {
      level: 6,
      ask: 'Say what this prints, and if it is faulty say why. '
        + 'n takes 1. WHILE n is less than 4: print n.',
      steps: [
        'The condition tests n, which is 1, so the body runs and prints 1.',
        'Nothing in the body changes n.',
        'The condition is tested again, n is still 1, so it is still true.',
      ],
      answer: 'It prints 1 forever. '
        + 'It is an infinite loop because no line inside the body '
        + 'changes n. '
        + 'Adding n takes n plus 1 inside the loop makes it print 1, 2, 3.',
    },
  ],

  traps: [
    {
      mistake: 'Assuming a WHILE loop always runs at least once.',
      why: 'It tests before the body. '
        + 'If the condition starts false the body never runs at all. '
        + 'REPEAT UNTIL is the one that always runs once.',
    },
    {
      mistake: 'Writing a WHILE with nothing in it that changes the condition.',
      why: 'That is an infinite loop. '
        + 'After writing the loop, point at the line that moves the '
        + 'tested variable.',
    },
    {
      mistake: 'Using less than where less than or equal to was meant.',
      why: 'It changes the count by one pass. '
        + 'Check the last value the loop variable actually takes.',
    },
    {
      mistake: 'Chaining separate IFs where ELSE IF was needed.',
      why: 'With separate IFs more than one branch can run, '
        + 'so a 10 year old can be charged twice. '
        + 'ELSE IF stops at the first true case.',
    },
  ],

  extension:
    'A loop inside a loop multiplies the passes: '
    + 'an outer loop of 3 holding an inner loop of 4 runs the inner body '
    + '12 times. '
    + 'Trace a nested loop by letting the inner one finish completely '
    + 'before the outer counter moves, '
    + 'and label the rows outer 1, inner 1 to 4, then outer 2, '
    + 'or the table becomes unreadable and the marks go with it.',

  figure: {
    alt: 'Two flowcharts side by side. On the left, a selection: a diamond '
      + 'asking whether the age is less than 12, with the true path going '
      + 'to a box setting the fare to 3 and the false path to a box '
      + 'setting it to 5, and both paths joining again below. On the '
      + 'right, a while loop: the test diamond sits above the body, so an '
      + 'arrow from the body returns up to the test and the exit arrow '
      + 'leaves the test sideways, showing that the body can be skipped '
      + 'entirely.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* left: selection */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M140 40v30"/>'
      + '<path d="M140 70L210 105L140 140L70 105Z"/>'
      + '<path d="M70 105H30v70h50"/>'
      + '<path d="M210 105h40v70h-50"/>'
      + '<rect x="20" y="175" width="90" height="42" rx="6"/>'
      + '<rect x="170" y="175" width="90" height="42" rx="6"/>'
      + '<path d="M65 217v40h150v-40"/>'
      + '<path d="M140 257v35"/>'
      + '</g>'
      + '<text x="96" y="32" font-size="12" fill="currentColor">read age</text>'
      + '<text x="92" y="109" font-size="11" fill="currentColor">age &lt; 12 ?</text>'
      + '<text x="28" y="168" font-size="11" fill="#0f8a4d">true</text>'
      + '<text x="214" y="168" font-size="11" fill="#0f8a4d">false</text>'
      + '<text x="30" y="201" font-size="12" fill="currentColor">fare takes 3</text>'
      + '<text x="180" y="201" font-size="12" fill="currentColor">fare takes 5</text>'
      + '<text x="96" y="310" font-size="12" fill="currentColor">print fare</text>'
      + '<text x="60" y="345" font-size="12" fill="currentColor">selection</text>'
      /* right: while loop */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M470 40v30"/>'
      + '<path d="M470 70L540 105L470 140L400 105Z"/>'
      + '<path d="M470 140v35"/>'
      + '<rect x="410" y="175" width="120" height="42" rx="6"/>'
      + '<path d="M530 196h60V105h-50"/>'
      + '<path d="M400 105h-60v187h130"/>'
      + '</g>'
      + '<text x="424" y="32" font-size="12" fill="currentColor">n takes 1</text>'
      + '<text x="430" y="109" font-size="11" fill="currentColor">n &lt; 4 ?</text>'
      + '<text x="478" y="166" font-size="11" fill="#0f8a4d">true</text>'
      + '<text x="344" y="98" font-size="11" fill="#0f8a4d">false</text>'
      + '<text x="418" y="201" font-size="11" fill="currentColor">print n; n takes n+1</text>'
      + '<text x="478" y="310" font-size="12" fill="currentColor">stop</text>'
      + '<text x="400" y="345" font-size="12" fill="currentColor">repetition: the test is above the body</text>'
      + '<text x="60" y="375" font-size="12" fill="#0f8a4d">because the test is above the body, a while loop can run no times at all</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Where each loop tests, and what that means for you',
      columns: ['Loop', 'Test is', 'Least passes', 'Use it when'],
      rows: [
        ['FOR', 'Built into the count', 'None if the range is empty', 'You know how many times'],
        ['WHILE', 'Before the body', 'None', 'It may not need to run at all'],
        ['REPEAT UNTIL', 'After the body', 'One', 'It must run at least once'],
      ],
      note: 'The least passes column is the whole topic: '
        + 'choose the loop from whether a zero pass case is allowed.',
    },
  ],

  questions: [
    {
      id: 'cs-1',
      ask: 'How many times does FOR i from 2 to 9 run the body?',
      kind: 'numeric',
      options: [],
      answer: '8',
      teach: '9 minus 2 plus 1 is 8. The values are 2 up to 9 inclusive.',
      level: 3,
    },
    {
      id: 'cs-2',
      ask: 'Which loop always runs its body at least once?',
      kind: 'choice',
      options: ['REPEAT UNTIL', 'WHILE', 'FOR'],
      answer: 'REPEAT UNTIL',
      teach: 'Its test is after the body, so the body has already run '
        + 'before the condition is looked at.',
      level: 4,
    },
    {
      id: 'cs-3',
      ask: 'total takes 0. FOR i from 1 to 5: total takes total plus 2. '
        + 'What is total?',
      kind: 'numeric',
      options: [],
      answer: '10',
      teach: 'Two is added five times. '
        + 'The loop variable i is not used in the body, which is allowed.',
      level: 4,
    },
    {
      id: 'cs-4',
      ask: 'A WHILE loop never stops. The most likely cause is:',
      kind: 'choice',
      options: [
        'Nothing in the body changes the tested variable',
        'The condition uses AND',
        'The loop is nested',
      ],
      answer: 'Nothing in the body changes the tested variable',
      teach: 'The test is run again every pass. '
        + 'If the body leaves the variable alone, the answer never changes.',
      level: 5,
    },
    {
      id: 'cs-5',
      ask: 'Fares are 3 under 12 and 5 otherwise. '
        + 'A 10 year old is charged twice. The fault is:',
      kind: 'choice',
      options: [
        'Two separate IFs were used instead of IF and ELSE',
        'The fare variable is an integer',
        'A FOR loop was used',
      ],
      answer: 'Two separate IFs were used instead of IF and ELSE',
      teach: 'Separate IFs can both be true. '
        + 'ELSE runs only when the first condition was false.',
      level: 6,
    },
  ],
})

/* ── Computing: functions and parameters ─────────────────────────────────── */

teach({
  topicId: 'functions-comp',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A function is a named block of code that can be called. '
      + 'Parameters are the names it receives values through. '
      + 'Arguments are the values actually passed. '
      + 'RETURN sends one value back to the caller; '
      + 'printing is not returning. '
      + 'A variable made inside a function is local '
      + 'and does not exist outside it.',
    method: [
      'Name the function for the one job it does.',
      'List its parameters with their types.',
      'Return the result rather than printing it.',
    ],
  },

  idea:
    'A function is a named block of statements '
    + 'that is written once and called wherever it is needed. '
    + 'The names in its heading are its parameters. '
    + 'The values handed over when it is called are its arguments. '
    + 'RETURN ends the function and gives one value back '
    + 'to the place that called it, '
    + 'so total takes areaOf(5, 3) puts the returned value into total. '
    + 'A function that returns a value can be used inside an expression. '
    + 'A procedure does a job and returns nothing, '
    + 'such as one that prints a report heading. '
    + 'Variables created inside a function are local: '
    + 'they are made when the call starts, '
    + 'and they are gone when it ends. '
    + 'A global variable is declared outside every function '
    + 'and can be seen by all of them, '
    + 'which sounds convenient and is the reason large programs break.',

  mechanism:
    'The reason functions are taught is not tidiness, it is the cost of a change. '
    + 'Suppose a shop program works out VAT at 15 per cent '
    + 'in nine different places. '
    + 'The rate changes to 18 per cent. '
    + 'Now there are nine edits, '
    + 'and the bug is the one place you missed, '
    + 'which still charges the old rate and balances to the wrong figure. '
    + 'With a function withVat(amount), '
    + 'there is one line to change and nothing to miss. '
    + 'That is the argument, and it is worth stating in those words '
    + 'when a question asks why a function is better than repeated code. '
    + 'Two mechanisms then decide whether yours works. '
    + 'First, return against print. '
    + 'A function that prints the answer has given it to the screen, '
    + 'not to the program, '
    + 'so total takes areaOf(5, 3) stores nothing usable '
    + 'and the number on the screen cannot be added to anything. '
    + 'The rule is: a function that computes, returns; '
    + 'only the caller decides whether to print. '
    + 'Second, scope. '
    + 'A learner writes a function that sets a local variable called answer, '
    + 'then tries to print answer after the call, and gets an error '
    + 'or an old value from somewhere else. '
    + 'The local answer stopped existing when the function ended. '
    + 'Nothing crosses the boundary except the arguments going in '
    + 'and the returned value coming out, '
    + 'and drawing exactly that, two arrows at the boundary, '
    + 'is the fastest way to settle any question of this kind. '
    + 'Last, what the examiner wants written. '
    + 'Give the function heading with its parameter list, '
    + 'name the type of each parameter and of the return value, '
    + 'and show one sample call with its arguments. '
    + 'The call is often a mark on its own, '
    + 'because it proves you know which values go where.',

  recap:
    'You have used a formula as a rule you apply to given values: '
    + 'the area of a rectangle takes a length and a breadth '
    + 'and gives back an area. '
    + 'A function is that formula written so a program can call it, '
    + 'with the length and breadth as its parameters.',

  method: [
    'State the one job the function does, in a few words.',
    'Choose a name that says that job.',
    'List the values it must be given; these become the parameters.',
    'Give each parameter a type.',
    'Decide what single value it gives back, and its type.',
    'Write the body, using the parameters as ordinary variables.',
    'End with RETURN and the value, not with a print statement.',
    'Write one sample call, with real arguments, and the variable it is stored in.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Write a function that returns the area of a rectangle, '
        + 'and call it for 7 by 4.',
      steps: [
        'FUNCTION areaOf(length: real, breadth: real) RETURNS real',
        'RETURN length times breadth',
        'END FUNCTION',
        'Call: space takes areaOf(7, 4).',
      ],
      answer: 'space holds 28. '
        + 'The function returns the value, so it can be stored.',
    },
    {
      level: 4,
      ask: 'A trader adds 15 per cent VAT. '
        + 'Write withVat and use it on 200 cedis and on 45 cedis.',
      steps: [
        'FUNCTION withVat(amount: real) RETURNS real',
        'RETURN amount times 1.15',
        'END FUNCTION',
        'withVat(200) gives 230. withVat(45) gives 51.75.',
      ],
      answer: '230 cedis and 51.75 cedis. '
        + 'When the rate changes, one line changes.',
    },
    {
      level: 5,
      ask: 'Say what is wrong. '
        + 'FUNCTION doubleIt(n) : answer takes n times 2; print answer; '
        + 'END FUNCTION. '
        + 'The caller writes result takes doubleIt(6) then prints result.',
      steps: [
        'The function prints 12, so 12 appears on the screen.',
        'There is no RETURN, so nothing is given back to the caller.',
        'result holds nothing usable, and printing it gives an error '
          + 'or an empty value.',
      ],
      answer: 'It prints but does not return. '
        + 'Replace print answer with RETURN answer, '
        + 'and let the caller print.',
    },
    {
      level: 6,
      ask: 'Why is one function better than the same three lines repeated '
        + 'in nine places? Answer as an examination question would want it.',
      steps: [
        'Name the cost of the repetition: nine places to change.',
        'Name the failure: the one place missed still uses the old rule.',
        'Name the second gain: the function is tested once and trusted.',
        'Name the third: the calling code reads as what it does.',
      ],
      answer: 'A change is made in one place instead of nine, '
        + 'so no copy is left behind holding the old rule. '
        + 'The function is tested once, '
        + 'and the program that calls it reads as its own description.',
    },
  ],

  traps: [
    {
      mistake: 'Printing inside the function instead of returning.',
      why: 'The value goes to the screen, not to the caller, '
        + 'so it cannot be stored or added to anything. '
        + 'Compute and return; let the caller print.',
    },
    {
      mistake: 'Using a local variable after the function has ended.',
      why: 'It stopped existing when the call finished. '
        + 'Only the returned value crosses back out.',
    },
    {
      mistake: 'Passing arguments in the wrong order.',
      why: 'The first argument fills the first parameter whatever it means, '
        + 'so a rate and an amount swapped give a wrong answer silently. '
        + 'Check your sample call against the heading.',
    },
    {
      mistake: 'Making every variable global so the function can reach it.',
      why: 'Then any function can change it, '
        + 'and a fault can come from anywhere in the program. '
        + 'Pass it as a parameter instead.',
    },
  ],

  extension:
    'A function may call itself, which is called recursion, '
    + 'and it needs a base case that returns without calling again '
    + 'or it never stops. '
    + 'Factorial is the usual example: '
    + 'factorial of n returns n times factorial of n minus 1, '
    + 'with factorial of 0 returning 1 as the base case.',

  figure: {
    alt: 'A boundary drawn as a rounded box labelled the function, with '
      + 'the caller outside it on the left. Two arrows cross the '
      + 'boundary: an arrow going in labelled arguments 7 and 4 filling '
      + 'the parameters length and breadth, and an arrow coming out '
      + 'labelled the returned value 28. Inside the box a local variable '
      + 'is shown with a note that it is destroyed when the call ends, '
      + 'and nothing else crosses the line.',
    svg: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* caller box */
      + '<rect x="30" y="120" width="150" height="110" rx="8" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="40" y="112" font-size="13" fill="currentColor">the caller</text>'
      + '<text x="40" y="162" font-size="12" fill="currentColor">space takes</text>'
      + '<text x="40" y="182" font-size="12" fill="currentColor">areaOf(7, 4)</text>'
      + '<text x="40" y="212" font-size="12" fill="currentColor">space holds 28</text>'
      /* function boundary */
      + '<rect x="330" y="80" width="270" height="190" rx="12" stroke="currentColor" stroke-width="3" stroke-dasharray="8 5" fill="none"/>'
      + '<text x="340" y="72" font-size="13" fill="currentColor">the function areaOf</text>'
      + '<text x="346" y="120" font-size="12" fill="currentColor">length holds 7</text>'
      + '<text x="346" y="142" font-size="12" fill="currentColor">breadth holds 4</text>'
      + '<text x="346" y="176" font-size="12" fill="currentColor">a local store is made here</text>'
      + '<text x="346" y="198" font-size="12" fill="currentColor">and destroyed at the end</text>'
      + '<text x="346" y="232" font-size="12" fill="currentColor">RETURN length times breadth</text>'
      /* arrows */
      + '<path d="M182 150H322" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M314 144l10 6-10 6Z" fill="#0f8a4d"/>'
      + '<text x="196" y="142" font-size="11" fill="#0f8a4d">arguments 7 and 4 go in</text>'
      + '<path d="M322 212H182" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M190 206l-10 6 10 6Z" fill="#0f8a4d"/>'
      + '<text x="200" y="232" font-size="11" fill="#0f8a4d">the value 28 comes back</text>'
      + '<text x="30" y="312" font-size="12" fill="currentColor">nothing else crosses the boundary, which is why a local variable cannot be read outside</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The four pairs of words that are confused in this topic',
      columns: ['Word', 'What it is', 'Where it appears'],
      rows: [
        ['Parameter', 'A name that receives a value', 'In the heading'],
        ['Argument', 'The value actually handed over', 'In the call'],
        ['Return', 'Gives one value to the caller', 'Inside the function'],
        ['Print', 'Puts text on the screen', 'Usually in the caller'],
        ['Local', 'Exists only during the call', 'Declared in the body'],
        ['Global', 'Exists for the whole program', 'Declared outside all functions'],
      ],
      note: 'Return against print is the pair that costs the most marks, '
        + 'because a program that prints looks as though it worked.',
    },
  ],

  questions: [
    {
      id: 'fn-1',
      ask: 'In areaOf(7, 4), the values 7 and 4 are the:',
      kind: 'choice',
      options: ['Arguments', 'Parameters', 'Return values'],
      answer: 'Arguments',
      teach: 'Parameters are the names in the heading. '
        + 'Arguments are the values passed at the call.',
      level: 3,
    },
    {
      id: 'fn-2',
      ask: 'A function prints its result but has no RETURN. '
        + 'What does the caller receive?',
      kind: 'choice',
      options: [
        'Nothing usable',
        'The printed text',
        'The last local variable',
      ],
      answer: 'Nothing usable',
      teach: 'Printing sends the value to the screen. '
        + 'Only RETURN gives it to the program.',
      level: 5,
    },
    {
      id: 'fn-3',
      ask: 'withVat(amount) returns amount times 1.15. '
        + 'What is withVat(400)?',
      kind: 'numeric',
      options: [],
      answer: '460',
      teach: '400 times 1.15 is 460 cedis.',
      level: 4,
    },
    {
      id: 'fn-4',
      ask: 'A variable declared inside a function can be read:',
      kind: 'choice',
      options: [
        'Only inside that function',
        'Anywhere in the program',
        'By any function called afterwards',
      ],
      answer: 'Only inside that function',
      teach: 'It is local. It is created at the call and destroyed at the end.',
      level: 5,
    },
    {
      id: 'fn-5',
      ask: 'The VAT rate changes. The main gain of having used a function is:',
      kind: 'choice',
      options: [
        'One line changes instead of nine, so no copy is left behind',
        'The program runs faster',
        'Less memory is used',
      ],
      answer: 'One line changes instead of nine, so no copy is left behind',
      teach: 'The missed copy is the bug. '
        + 'One definition means there is nothing to miss.',
      level: 6,
    },
  ],
})

/* ── Computing: binary, hexadecimal and data representation ──────────────── */

teach({
  topicId: 'number-systems-comp',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Binary uses two digits and place values 1, 2, 4, 8, 16 and so on. '
      + 'Hexadecimal uses sixteen digits, 0 to 9 then A to F, '
      + 'and each hex digit is exactly four bits. '
      + 'Convert to binary by repeated division by 2, '
      + 'reading the remainders upwards. '
      + 'All data is stored as bits: '
      + 'text by a code per character, '
      + 'an image by a number per pixel, '
      + 'sound by a number per sample.',
    method: [
      'Divide by 2 repeatedly and keep each remainder.',
      'Read the remainders from the last one upwards.',
      'For hex, group the bits in fours from the right.',
    ],
  },

  idea:
    'A base says how many digits there are and what the columns are worth. '
    + 'Denary, base ten, has columns 1, 10, 100, 1000. '
    + 'Binary, base two, has columns 1, 2, 4, 8, 16, 32, 64, 128, '
    + 'and only the digits 0 and 1. '
    + 'So binary 1011 is 8 plus 0 plus 2 plus 1, which is 11. '
    + 'A bit is one binary digit. '
    + 'A byte is eight bits, and holds 0 to 255. '
    + 'Hexadecimal, base sixteen, uses 0 to 9 and then A for 10, '
    + 'B for 11, C for 12, D for 13, E for 14 and F for 15. '
    + 'Because 16 is 2 to the power 4, '
    + 'one hex digit is exactly four bits, '
    + 'which is the only reason hexadecimal is used at all. '
    + 'Text is stored by giving each character a number, '
    + 'in ASCII or in Unicode. '
    + 'An image is stored as a grid of pixels, '
    + 'each pixel a number for its colour. '
    + 'Sound is stored by measuring the wave many times a second, '
    + 'each measurement a number.',

  mechanism:
    'Repeated division is the method to write down, '
    + 'and the mark is lost in the last step rather than the arithmetic. '
    + 'To convert 45 to binary, divide by 2 again and again, '
    + 'keeping the remainder each time: '
    + '45 gives 22 remainder 1, '
    + '22 gives 11 remainder 0, '
    + '11 gives 5 remainder 1, '
    + '5 gives 2 remainder 1, '
    + '2 gives 1 remainder 0, '
    + '1 gives 0 remainder 1. '
    + 'The remainders in the order written are 1, 0, 1, 1, 0, 1, '
    + 'and the answer is those digits read upwards: 101101. '
    + 'Read downwards it is 101101 reversed, which is a different number, '
    + 'and that single reversal is the commonest error in the topic. '
    + 'Check it: 32 plus 8 plus 4 plus 1 is 45. '
    + 'Always check by adding the place values back, '
    + 'because it takes ten seconds and it catches every slip. '
    + 'Hexadecimal needs no division at all once you see why it exists. '
    + 'Group the bits in fours from the right '
    + 'and write each group as one hex digit. '
    + 'So 10110110 splits as 1011 and 0110, which is B and 6, giving B6. '
    + 'Grouping from the left instead is the error, '
    + 'and it only shows when the number of bits is not a multiple of four: '
    + 'pad on the left with zeros, never on the right, '
    + 'because padding on the right multiplies the value. '
    + 'The representation half of the topic has one idea underneath it. '
    + 'The bits do not say what they mean. '
    + 'The same byte 01000001 is the number 65, '
    + 'the letter A in ASCII, '
    + 'a dark grey in an image, '
    + 'and one instant of a sound. '
    + 'What decides is the program reading it, '
    + 'which is why a document opened by the wrong application '
    + 'shows as rubbish rather than refusing to open. '
    + 'For the file size calculations that WASSCE asks for, '
    + 'write the reasoning as a product: '
    + 'an image is width times height times bits per pixel, '
    + 'and sound is sample rate times bit depth times seconds times channels. '
    + 'Then divide by 8 for bytes, and by 1024 for kilobytes. '
    + 'Writing the product first is what earns the method marks '
    + 'even when the arithmetic goes wrong.',

  recap:
    'You have used place value in base ten since primary school: '
    + 'the 3 in 300 is worth a hundred times the 3 in 3. '
    + 'Binary and hexadecimal are the same idea with the columns '
    + 'growing by 2 and by 16 instead of by 10.',

  method: [
    'To go from denary to binary, divide by 2 and keep the remainder.',
    'Repeat until the quotient is 0.',
    'Read the remainders from the bottom upwards.',
    'Check by adding the place values back to the original number.',
    'To go from binary to hex, group the bits in fours from the right.',
    'Pad on the left with zeros if the last group is short.',
    'Write each group of four as one hex digit, using A to F for 10 to 15.',
    'For a file size, write the product first, then divide by 8 for bytes.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Convert binary 1101 to denary.',
      steps: [
        'Columns from the right are 1, 2, 4, 8.',
        'The digits are 1, 1, 0, 1, so take 8 plus 4 plus 0 plus 1.',
      ],
      answer: '13.',
    },
    {
      level: 4,
      ask: 'Convert 45 to binary by repeated division.',
      steps: [
        '45 divided by 2 is 22 remainder 1.',
        '22 divided by 2 is 11 remainder 0.',
        '11 divided by 2 is 5 remainder 1.',
        '5 divided by 2 is 2 remainder 1.',
        '2 divided by 2 is 1 remainder 0.',
        '1 divided by 2 is 0 remainder 1.',
        'Read the remainders upwards.',
      ],
      answer: '101101. '
        + 'Check: 32 plus 8 plus 4 plus 1 is 45.',
    },
    {
      level: 5,
      ask: 'Convert binary 10110110 to hexadecimal, and say why '
        + 'hexadecimal is used for this.',
      steps: [
        'Group in fours from the right: 1011 and 0110.',
        '1011 is 8 plus 2 plus 1, which is 11, written B.',
        '0110 is 4 plus 2, which is 6.',
      ],
      answer: 'B6. '
        + 'One hex digit is exactly four bits, '
        + 'so eight bits is always two hex digits '
        + 'and no arithmetic is needed.',
    },
    {
      level: 6,
      ask: 'An image is 800 pixels by 600, with 3 bytes a pixel. '
        + 'Give its size in kilobytes, taking 1 kilobyte as 1024 bytes.',
      steps: [
        'Pixels: 800 times 600 is 480000.',
        'Bytes: 480000 times 3 is 1440000.',
        'Kilobytes: 1440000 divided by 1024 is about 1406.',
      ],
      answer: 'About 1406 kilobytes, which is about 1.37 megabytes. '
        + 'Write the product first; the division is the easy part.',
    },
  ],

  traps: [
    {
      mistake: 'Reading the remainders downwards.',
      why: 'The last remainder is the most significant bit. '
        + 'Read upwards, then check by adding the place values back.',
    },
    {
      mistake: 'Grouping bits in fours from the left for hexadecimal.',
      why: 'Place value runs from the right. '
        + 'Group from the right and pad the left group with zeros.',
    },
    {
      mistake: 'Writing hexadecimal 12 for denary 12.',
      why: 'Twelve is one digit in hex, and it is C. '
        + 'Hexadecimal 12 is 16 plus 2, which is 18.',
    },
    {
      mistake: 'Giving a file size in bits when bytes were asked for.',
      why: 'Divide by 8. '
        + 'Writing the unit beside every line is how you notice.',
    },
  ],

  extension:
    'A negative number is usually stored in two’s complement: '
    + 'write the positive value, flip every bit, then add 1. '
    + 'In eight bits, 5 is 00000101, so minus 5 is 11111011. '
    + 'The gain is that subtraction becomes addition, '
    + 'so the same circuit does both, '
    + 'and the cost is that the top bit now means minus 128, '
    + 'so the range becomes minus 128 to plus 127.',

  figure: {
    alt: 'A row of eight boxes forming one byte, labelled above with the '
      + 'place values 128, 64, 32, 16, 8, 4, 2 and 1, and holding the '
      + 'bits 1, 0, 1, 1, 0, 1, 1 and 0. Below, a bracket joins the left '
      + 'four bits into the hexadecimal digit B and another joins the '
      + 'right four bits into the digit 6, and the denary total 182 is '
      + 'given with the contributing place values added underneath.',
    svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* place values */
      + '<text x="46" y="52" font-size="12" fill="currentColor">128</text>'
      + '<text x="118" y="52" font-size="12" fill="currentColor">64</text>'
      + '<text x="188" y="52" font-size="12" fill="currentColor">32</text>'
      + '<text x="258" y="52" font-size="12" fill="currentColor">16</text>'
      + '<text x="334" y="52" font-size="12" fill="currentColor">8</text>'
      + '<text x="404" y="52" font-size="12" fill="currentColor">4</text>'
      + '<text x="474" y="52" font-size="12" fill="currentColor">2</text>'
      + '<text x="544" y="52" font-size="12" fill="currentColor">1</text>'
      /* eight boxes */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<rect x="40" y="62" width="60" height="56"/>'
      + '<rect x="110" y="62" width="60" height="56"/>'
      + '<rect x="180" y="62" width="60" height="56"/>'
      + '<rect x="250" y="62" width="60" height="56"/>'
      + '<rect x="320" y="62" width="60" height="56"/>'
      + '<rect x="390" y="62" width="60" height="56"/>'
      + '<rect x="460" y="62" width="60" height="56"/>'
      + '<rect x="530" y="62" width="60" height="56"/>'
      + '</g>'
      + '<text x="63" y="102" font-size="22" fill="currentColor">1</text>'
      + '<text x="133" y="102" font-size="22" fill="currentColor">0</text>'
      + '<text x="203" y="102" font-size="22" fill="currentColor">1</text>'
      + '<text x="273" y="102" font-size="22" fill="currentColor">1</text>'
      + '<text x="343" y="102" font-size="22" fill="currentColor">0</text>'
      + '<text x="413" y="102" font-size="22" fill="currentColor">1</text>'
      + '<text x="483" y="102" font-size="22" fill="currentColor">1</text>'
      + '<text x="553" y="102" font-size="22" fill="currentColor">0</text>'
      /* brackets for nibbles */
      + '<g stroke="#0f8a4d" stroke-width="2" fill="none">'
      + '<path d="M40 132v14h270v-14"/>'
      + '<path d="M175 146v18"/>'
      + '<path d="M320 132v14h270v-14"/>'
      + '<path d="M455 146v18"/>'
      + '</g>'
      + '<text x="160" y="184" font-size="20" fill="#0f8a4d">B</text>'
      + '<text x="448" y="184" font-size="20" fill="#0f8a4d">6</text>'
      + '<text x="40" y="216" font-size="12" fill="#0f8a4d">each group of four bits is exactly one hexadecimal digit, so this byte is B6</text>'
      /* denary */
      + '<text x="40" y="256" font-size="13" fill="currentColor">as denary: 128 plus 32 plus 16 plus 4 plus 2, which is 182</text>'
      + '<text x="40" y="284" font-size="12" fill="currentColor">a column is counted only where its bit is 1</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The sixteen values a single hexadecimal digit can hold',
      columns: ['Denary', 'Binary', 'Hexadecimal'],
      rows: [
        ['9', '1001', '9'],
        ['10', '1010', 'A'],
        ['11', '1011', 'B'],
        ['12', '1100', 'C'],
        ['13', '1101', 'D'],
        ['14', '1110', 'E'],
        ['15', '1111', 'F'],
      ],
      note: 'Below 9 the three columns agree, which is why only the top '
        + 'seven rows are worth learning.',
    },
    {
      caption: 'How each kind of data turns into numbers',
      columns: ['Data', 'The unit stored', 'What the number means', 'Size grows with'],
      rows: [
        ['Text', 'One character', 'Its code, 65 for A in ASCII', 'Number of characters'],
        ['Image', 'One pixel', 'Its colour', 'Width times height times bits per pixel'],
        ['Sound', 'One sample', 'The height of the wave then', 'Sample rate times bit depth times seconds'],
      ],
      note: 'The bits never say which of these they are. '
        + 'The program reading them decides, '
        + 'which is why the wrong application shows rubbish.',
    },
  ],

  questions: [
    {
      id: 'ns-1',
      ask: 'Convert binary 1010 to denary.',
      kind: 'numeric',
      options: [],
      answer: '10',
      teach: '8 plus 0 plus 2 plus 0 is 10.',
      level: 3,
    },
    {
      id: 'ns-2',
      ask: 'How many bits are in one hexadecimal digit?',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: '16 is 2 to the power 4, '
        + 'so one hex digit covers exactly four bits.',
      level: 4,
    },
    {
      id: 'ns-3',
      ask: 'Converting by repeated division, the remainders are read:',
      kind: 'choice',
      options: [
        'From the last one upwards',
        'From the first one downwards',
        'In any order',
      ],
      answer: 'From the last one upwards',
      teach: 'The last remainder is the most significant bit. '
        + 'Reading downwards reverses the number.',
      level: 4,
    },
    {
      id: 'ns-4',
      ask: 'Denary 12 in hexadecimal is:',
      kind: 'choice',
      options: ['C', '12', 'B', '1100'],
      answer: 'C',
      teach: 'A to F stand for 10 to 15, so 12 is C. '
        + 'Hexadecimal 12 would mean 18.',
      level: 5,
    },
    {
      id: 'ns-5',
      ask: 'The largest number one byte can hold, counting from 0, is:',
      kind: 'numeric',
      options: [],
      answer: '255',
      teach: 'Eight bits give 2 to the power 8, which is 256 values, '
        + 'running from 0 to 255.',
      level: 5,
    },
  ],
})

/* ── Robotics: what makes something a robot ──────────────────────────────── */

teach({
  topicId: 'robot-definition',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A robot senses, decides and acts, and then senses again. '
      + 'A machine that acts without sensing is automatic, not a robot. '
      + 'The test is whether the action changes '
      + 'because of what was sensed. '
      + 'The loop has four parts: sensor, controller, actuator, '
      + 'and the world that the action changes.',
    method: [
      'Ask what it senses, and name the sensor.',
      'Ask what decides, and name the rule.',
      'Ask what moves, and whether the sensing changes it.',
    ],
  },

  idea:
    'A robot is a machine that senses its surroundings, '
    + 'decides what to do from what it sensed, '
    + 'and acts, and then senses again. '
    + 'That cycle is called the sense, decide, act loop, '
    + 'and it is the whole definition. '
    + 'The sensor turns something in the world into an electrical signal. '
    + 'The controller, usually a microcontroller, '
    + 'applies a rule to that signal and decides. '
    + 'The actuator turns the decision into movement '
    + 'or into some other change in the world. '
    + 'Because the action changes the world, '
    + 'the next sensing sees something different, '
    + 'and that closing of the circle is what makes it a loop '
    + 'rather than a list of steps. '
    + 'A machine that repeats a fixed sequence, '
    + 'such as a mechanical water pump on a timer, '
    + 'is automatic but not a robot, '
    + 'because nothing it senses can change what it does.',

  mechanism:
    'The examination question in this topic is almost always the same: '
    + 'you are given a device and asked whether it is a robot, with a reason. '
    + 'So the reason has to be a test you can apply, not a feeling. '
    + 'The test is: is there a sensed value '
    + 'that changes what the machine does next. '
    + 'If yes, the loop is closed and it is a robot. '
    + 'If no, it is automatic. '
    + 'Apply it to an electric kettle with a bimetallic switch. '
    + 'It senses temperature, and at 100 degrees the switch opens '
    + 'and the heating stops. '
    + 'That is sensing changing the action, '
    + 'so the kettle sits right at the edge '
    + 'and is usually called automatic control rather than a robot, '
    + 'because the loop has one fixed rule and no choice of action. '
    + 'The honest answer in an examination names the loop '
    + 'and then says which parts are present, '
    + 'and that answer earns more than a flat yes or no. '
    + 'Apply it to a line following robot. '
    + 'It senses reflected light under each of two sensors, '
    + 'compares them, and turns towards the darker side. '
    + 'Move the line and the robot does something different, '
    + 'with no change to the program. '
    + 'That is the loop plainly closed. '
    + 'Apply it to a toy car on a radio control. '
    + 'The deciding is done by the person, not the machine, '
    + 'so it is teleoperated, which is not the same as autonomous. '
    + 'The second thing to get right is the direction of the loop. '
    + 'Learners draw sensor to actuator and stop. '
    + 'Draw the fourth arrow, from the action back through the world '
    + 'to the sensor, '
    + 'because without that arrow you have described a remote control '
    + 'and lost the mark for the loop. '
    + 'The third is vocabulary that the paper uses: '
    + 'degrees of freedom is the number of separate movements it can make, '
    + 'an end effector is the tool at the end of an arm, '
    + 'and an autonomous robot decides for itself '
    + 'while a teleoperated one is driven by a person.',

  recap:
    'You have met machines that do the same thing every time, '
    + 'such as a corn mill, '
    + 'and devices that react, such as a security light '
    + 'that comes on when somebody walks past. '
    + 'This gives that difference its name and its diagram.',

  method: [
    'Name what the device senses, and with what sensor.',
    'Name what it does, and with what actuator.',
    'State the rule that connects them, in one sentence.',
    'Ask whether changing what is sensed changes what it does.',
    'If it does, draw the fourth arrow: the action changes the world the sensor reads.',
    'Say whether the deciding is done by the machine or by a person.',
    'Give your verdict as robot, automatic machine, or teleoperated.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the three stages of the loop and give one part for each, '
        + 'for a robot that stops before hitting a wall.',
      steps: [
        'Sense: an ultrasonic sensor measures the distance ahead.',
        'Decide: the controller compares the distance with 20 centimetres.',
        'Act: the motors stop.',
      ],
      answer: 'Sense with the ultrasonic sensor, '
        + 'decide in the controller, '
        + 'act with the motors.',
    },
    {
      level: 4,
      ask: 'Is a water pump that runs for ten minutes every morning '
        + 'on a timer a robot? Give your reason.',
      steps: [
        'It senses nothing about the water or the soil.',
        'The time of day fixes what it does.',
        'A dry tank or a flooded field makes no difference to it.',
      ],
      answer: 'No. '
        + 'It is an automatic machine. '
        + 'Nothing it senses can change what it does, '
        + 'so the loop is not closed.',
    },
    {
      level: 5,
      ask: 'The same pump is fitted with a soil moisture sensor '
        + 'and told to run only when the soil is dry. '
        + 'Has it become a robot?',
      steps: [
        'It now senses a value in the world.',
        'That value decides whether the pump runs.',
        'Running the pump wets the soil, which the sensor then reads.',
      ],
      answer: 'Yes, by the sense, decide, act test. '
        + 'The fourth arrow is there: '
        + 'the action changes the very thing the sensor measures.',
    },
    {
      level: 6,
      ask: 'Compare a surgeon’s remote operated arm with a factory welding '
        + 'robot, using the loop.',
      steps: [
        'The remote arm senses position and force and reports them, '
          + 'but the decisions are the surgeon’s.',
        'So it is teleoperated: sensing and acting are machine work, '
          + 'deciding is human.',
        'The welding robot holds its own rule and repeats it, '
          + 'and with a seam sensor it corrects its own path.',
      ],
      answer: 'The remote arm is teleoperated and the welding robot is '
        + 'autonomous. '
        + 'The difference is where the deciding happens, '
        + 'not how complicated the machine looks.',
    },
  ],

  traps: [
    {
      mistake: 'Calling anything that moves on its own a robot.',
      why: 'A fan moves on its own and senses nothing. '
        + 'Apply the test: does a sensed value change what it does.',
    },
    {
      mistake: 'Drawing the loop as sensor to controller to actuator and stopping.',
      why: 'That is a line, not a loop. '
        + 'The action changes the world, and the sensor reads that world '
        + 'again. Draw the fourth arrow.',
    },
    {
      mistake: 'Treating teleoperated as autonomous.',
      why: 'If a person decides, the machine is a tool. '
        + 'Autonomy is about who holds the rule.',
    },
    {
      mistake: 'Confusing complicated with intelligent.',
      why: 'A washing machine has many parts and one fixed programme. '
        + 'A two sensor line follower is simple and genuinely closes '
        + 'the loop.',
    },
  ],

  extension:
    'The loop can be closed loosely or tightly, and it matters. '
    + 'A robot that senses once a minute cannot follow a line, '
    + 'because the world changes faster than it looks. '
    + 'So a specification gives the loop rate, '
    + 'and a sensible rule is that the loop must run several times '
    + 'in the time the fastest thing you care about takes to change.',

  figure: {
    alt: 'The sense, decide, act loop drawn as four boxes in a ring. The '
      + 'sensor box feeds the controller box, the controller feeds the '
      + 'actuator box, the actuator changes the box labelled the world, '
      + 'and an arrow runs from the world back to the sensor, closing '
      + 'the ring. A note beside the last arrow says that this is the '
      + 'arrow that makes it a robot rather than a remote control.',
    svg: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<rect x="40" y="60" width="150" height="60" rx="8"/>'
      + '<rect x="250" y="60" width="150" height="60" rx="8"/>'
      + '<rect x="460" y="60" width="150" height="60" rx="8"/>'
      + '<rect x="250" y="230" width="150" height="60" rx="8"/>'
      + '</g>'
      + '<text x="60" y="88" font-size="13" fill="currentColor">sensor</text>'
      + '<text x="60" y="108" font-size="11" fill="currentColor">light, distance, heat</text>'
      + '<text x="270" y="88" font-size="13" fill="currentColor">controller</text>'
      + '<text x="270" y="108" font-size="11" fill="currentColor">applies the rule</text>'
      + '<text x="480" y="88" font-size="13" fill="currentColor">actuator</text>'
      + '<text x="480" y="108" font-size="11" fill="currentColor">motor, valve, heater</text>'
      + '<text x="270" y="258" font-size="13" fill="currentColor">the world</text>'
      + '<text x="270" y="278" font-size="11" fill="currentColor">changed by the action</text>'
      /* arrows */
      + '<path d="M190 90h52" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M236 84l10 6-10 6Z" fill="#0f8a4d"/>'
      + '<path d="M400 90h52" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M446 84l10 6-10 6Z" fill="#0f8a4d"/>'
      + '<path d="M535 120v140H408" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M416 254l-10 6 10 6Z" fill="#0f8a4d"/>'
      + '<path d="M250 260H115V126" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M109 134l6-10 6 10Z" fill="#0f8a4d"/>'
      + '<text x="40" y="184" font-size="12" fill="#0f8a4d">this arrow</text>'
      + '<text x="40" y="202" font-size="12" fill="#0f8a4d">closes the loop</text>'
      + '<text x="40" y="330" font-size="12" fill="currentColor">without the return arrow you have described a remote control, not a robot</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Applying the test to five machines a learner already knows',
      columns: ['Machine', 'Senses', 'Does the sensing change the action', 'Verdict'],
      rows: [
        ['Ceiling fan', 'Nothing', 'No', 'Machine'],
        ['Corn mill', 'Nothing', 'No', 'Machine'],
        ['Security light with a motion sensor', 'Movement', 'Yes, one fixed rule', 'Automatic control'],
        ['Radio controlled car', 'Nothing; the driver looks', 'No, the person decides', 'Teleoperated'],
        ['Line following robot', 'Reflected light', 'Yes, continuously', 'Robot'],
      ],
      note: 'The third column is the question. '
        + 'Answer it before giving a verdict, and the verdict writes itself.',
    },
  ],

  questions: [
    {
      id: 'rd-1',
      ask: 'The three stages of the robot loop are:',
      kind: 'choice',
      options: [
        'Sense, decide, act',
        'Start, run, stop',
        'Input, store, print',
      ],
      answer: 'Sense, decide, act',
      teach: 'And then sense again, which is what makes it a loop.',
      level: 3,
    },
    {
      id: 'rd-2',
      ask: 'A pump on a timer is not a robot because:',
      kind: 'choice',
      options: [
        'Nothing it senses changes what it does',
        'It has no motor',
        'It is too simple',
      ],
      answer: 'Nothing it senses changes what it does',
      teach: 'Simplicity is not the test. '
        + 'A two sensor line follower is simple and is a robot.',
      level: 4,
    },
    {
      id: 'rd-3',
      ask: 'A machine driven by a person watching a screen is called:',
      kind: 'choice',
      options: ['Teleoperated', 'Autonomous', 'Automatic'],
      answer: 'Teleoperated',
      teach: 'The sensing and acting are the machine’s; the deciding is '
        + 'the person’s.',
      level: 4,
    },
    {
      id: 'rd-4',
      ask: 'The tool fitted at the end of a robot arm is the:',
      kind: 'choice',
      options: ['End effector', 'Actuator', 'Controller'],
      answer: 'End effector',
      teach: 'A gripper, a welding head or a paint nozzle are all end '
        + 'effectors.',
      level: 5,
    },
    {
      id: 'rd-5',
      ask: 'A robot checks its sensor once a minute and cannot follow a line. '
        + 'The fault is in its:',
      kind: 'choice',
      options: [
        'Loop rate',
        'Sensor type',
        'Motor power',
      ],
      answer: 'Loop rate',
      teach: 'The world changes faster than it looks. '
        + 'The loop must run several times '
        + 'while the fastest thing you care about changes.',
      level: 6,
    },
  ],
})

/* ── Robotics: sensors ───────────────────────────────────────────────────── */

teach({
  topicId: 'sensors-rob',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A sensor turns a physical quantity into an electrical signal. '
      + 'It never measures what you want directly: '
      + 'it measures something related, and you convert. '
      + 'An ultrasonic sensor measures time, not distance. '
      + 'A line sensor measures reflected light, not colour. '
      + 'Choose a sensor by what it actually measures '
      + 'and by the conditions it will work in.',
    method: [
      'State the quantity you need to know.',
      'Name a sensor and say what it actually measures.',
      'Give the conversion, and the condition that would fool it.',
    ],
  },

  idea:
    'A sensor is a device that turns a physical quantity '
    + 'into an electrical signal a controller can read. '
    + 'Its output is either digital, meaning on or off, '
    + 'or analogue, meaning a voltage anywhere in a range, '
    + 'which the controller turns into a number '
    + 'with an analogue to digital converter. '
    + 'The common ones at this level are few. '
    + 'A light dependent resistor changes resistance with light. '
    + 'An infrared reflectance sensor shines infrared down '
    + 'and measures how much comes back. '
    + 'An ultrasonic sensor sends a pulse of sound '
    + 'and times the echo. '
    + 'A thermistor changes resistance with temperature. '
    + 'A push switch or a limit switch gives on or off when touched. '
    + 'A potentiometer gives a voltage that depends on an angle. '
    + 'Range is the span it can read, '
    + 'resolution is the smallest change it can show, '
    + 'and accuracy is how close the reading is to the truth.',

  mechanism:
    'The sentence to keep is this: '
    + 'a sensor measures a stand in, and you do the converting. '
    + 'The ultrasonic sensor is the clearest case '
    + 'and it is the one WASSCE asks about. '
    + 'It does not measure distance. '
    + 'It emits a pulse and reports the time until the echo returns. '
    + 'Sound travels at about 340 metres a second in air, '
    + 'so in 0.002 seconds it travels 0.68 metres, '
    + 'and the obstacle is half of that away, 0.34 metres, '
    + 'because the pulse went there and came back. '
    + 'Forgetting to halve is the single commonest error in the topic '
    + 'and it doubles every answer. '
    + 'Knowing the conversion also tells you how it fails. '
    + 'Sound needs a surface that reflects it, '
    + 'so a cloth or a sloped wall sends the echo elsewhere '
    + 'and the sensor reports nothing at all, '
    + 'which the program reads as no obstacle. '
    + 'Second case: the infrared line sensor. '
    + 'It measures reflected infrared, not colour. '
    + 'A dark line reflects little and a white floor reflects a lot, '
    + 'so the readings differ and the robot can follow the line. '
    + 'But a shiny black tile can reflect more than matt white paper, '
    + 'and bright sunlight through a window '
    + 'floods the sensor with infrared so that everything reads bright. '
    + 'This is why a line follower that worked indoors '
    + 'fails on a veranda, '
    + 'and why the honest answer to why did it fail '
    + 'is about the quantity measured rather than about the robot. '
    + 'Third, the thing to write down in an answer: '
    + 'name the sensor, name the quantity it really measures, '
    + 'give the conversion, and give one condition that would fool it. '
    + 'Those four lines are the shape of a full mark answer, '
    + 'and the fourth is the one most learners leave out.',

  recap:
    'You have measured length with a rule and temperature with a '
    + 'thermometer, reading a scale with your eyes. '
    + 'A sensor does the same measuring '
    + 'but hands the reading to a circuit instead of to a person.',

  method: [
    'Write down the quantity you need to know.',
    'Choose a sensor and name it.',
    'Write down what that sensor actually measures.',
    'Write the conversion from the measured quantity to the one you want.',
    'State whether the output is digital or analogue.',
    'Check the range covers what you expect, with room to spare.',
    'Name one condition in the real place that would give a false reading.',
    'Say what the program should do when the reading is impossible.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Choose a sensor for a robot that must stop when it touches a '
        + 'wall, and say why.',
      steps: [
        'The quantity is contact, which is either yes or no.',
        'A limit switch gives on or off.',
        'No conversion is needed and no calibration either.',
      ],
      answer: 'A limit switch, with a digital output. '
        + 'Contact is a two state quantity, '
        + 'so a two state sensor fits it exactly.',
    },
    {
      level: 4,
      ask: 'An ultrasonic sensor reports an echo time of 0.004 seconds. '
        + 'Taking the speed of sound as 340 metres a second, '
        + 'how far is the obstacle?',
      steps: [
        'Distance travelled by the pulse: 340 times 0.004, which is 1.36 metres.',
        'That is there and back.',
        'Halve it.',
      ],
      answer: '0.68 metres. '
        + 'The halving is the step the marks are on.',
    },
    {
      level: 5,
      ask: 'A line follower works in the classroom and wanders on the '
        + 'veranda at noon. Explain, and give one fix.',
      steps: [
        'The sensor measures reflected infrared, not colour.',
        'Sunlight is full of infrared, so both sensors read bright.',
        'The difference between line and floor disappears.',
        'Shield the sensors, bring them closer to the floor, '
          + 'or use a modulated sensor that only answers its own pulse.',
      ],
      answer: 'Sunlight swamps the measured quantity. '
        + 'Shield the sensors and lower them, '
        + 'and recalibrate the threshold in the place it will run.',
    },
    {
      level: 6,
      ask: 'A robot in a maize store must stop watering when the soil is '
        + 'wet enough. Specify the sensing, including the failure case.',
      steps: [
        'The quantity wanted is water in the soil.',
        'A resistive moisture probe measures the resistance between two '
          + 'electrodes, which falls as water rises.',
        'It is analogue, so the controller converts it to a number.',
        'Calibrate it twice: in dry soil and in soil watered to the depth '
          + 'the crop needs.',
        'Failure case: the probe corrodes, or salt in fertiliser lowers '
          + 'the resistance and reads as wet when it is dry.',
      ],
      answer: 'A resistive moisture probe, analogue, calibrated dry and '
        + 'wet on the actual soil. '
        + 'Because fertiliser salt lowers resistance too, '
        + 'the program should refuse a reading that changes faster than '
        + 'soil can and should fall back to a timer.',
    },
  ],

  traps: [
    {
      mistake: 'Not halving the ultrasonic distance.',
      why: 'The pulse travels to the obstacle and back. '
        + 'Every answer comes out double.',
    },
    {
      mistake: 'Saying an infrared sensor sees black and white.',
      why: 'It measures reflected infrared. '
        + 'A shiny dark surface can reflect more than a matt pale one.',
    },
    {
      mistake: 'Treating no reading as no obstacle.',
      why: 'A cloth or an angled wall returns no echo at all. '
        + 'The program must treat a missing reading as unsafe, '
        + 'not as clear.',
    },
    {
      mistake: 'Choosing a sensor whose range barely covers the job.',
      why: 'The reading saturates at the limit and stops changing, '
        + 'so the robot cannot tell near from far. '
        + 'Leave headroom at both ends.',
    },
  ],

  extension:
    'Two cheap sensors often beat one expensive one, '
    + 'because a disagreement is information. '
    + 'A robot with an ultrasonic sensor and a bumper switch '
    + 'can tell the difference between an obstacle it saw '
    + 'and one it only found by hitting, '
    + 'and the second case tells it the first sensor is being fooled. '
    + 'Combining readings this way is called sensor fusion.',

  figure: {
    alt: 'An ultrasonic sensor on the left of a robot, with a pulse drawn '
      + 'travelling right to a wall and an echo returning along the same '
      + 'path below it. The round trip path is marked as the distance '
      + 'the sound travelled, equal to the speed of sound times the '
      + 'echo time, and the single gap between sensor and wall is '
      + 'marked as half of that, which is the distance wanted.',
    svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* robot */
      + '<rect x="40" y="110" width="70" height="70" rx="6" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<rect x="104" y="128" width="18" height="34" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="40" y="102" font-size="12" fill="currentColor">robot</text>'
      + '<text x="40" y="200" font-size="11" fill="currentColor">sensor on the front</text>'
      /* wall */
      + '<path d="M520 70v170" stroke="currentColor" stroke-width="5" fill="none"/>'
      + '<text x="528" y="100" font-size="12" fill="currentColor">wall</text>'
      /* outgoing pulse */
      + '<path d="M124 134H514" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M506 128l10 6-10 6Z" fill="#0f8a4d"/>'
      + '<text x="200" y="126" font-size="12" fill="#0f8a4d">pulse goes out</text>'
      /* return echo */
      + '<path d="M514 158H124" stroke="#0f8a4d" stroke-width="2" stroke-dasharray="7 5" fill="none"/>'
      + '<path d="M132 152l-10 6 10 6Z" fill="#0f8a4d"/>'
      + '<text x="200" y="178" font-size="12" fill="#0f8a4d">echo comes back</text>'
      /* dimension of one way */
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M124 230v40"/><path d="M520 230v40"/><path d="M124 250h396"/>'
      + '</g>'
      + '<text x="200" y="244" font-size="12" fill="currentColor">the gap you want, which is one way</text>'
      + '<text x="40" y="288" font-size="13" fill="currentColor">speed of sound times echo time gives there and back, so halve it</text>'
      + '<text x="40" y="310" font-size="12" fill="#0f8a4d">the sensor measures time; the distance is your arithmetic, not its reading</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'What each common sensor actually measures, and what fools it',
      columns: ['Sensor', 'Really measures', 'Output', 'A job it suits', 'What fools it'],
      rows: [
        ['Limit switch', 'Contact', 'Digital', 'Stop at the end of a track', 'A soft object that does not press it'],
        ['Light dependent resistor', 'Light falling on it', 'Analogue', 'Switch a lamp at dusk', 'A shadow or a torch'],
        ['Infrared reflectance', 'Reflected infrared', 'Analogue', 'Follow a line', 'Sunlight, shiny dark surfaces'],
        ['Ultrasonic', 'Time until the echo', 'Timed pulse', 'Avoid a wall', 'Cloth, angled surfaces, wind'],
        ['Thermistor', 'Its own resistance', 'Analogue', 'Warn of an overheating motor', 'Poor contact with the hot part'],
      ],
      note: 'Read the second column before choosing. '
        + 'The fifth column is where the mark for a full answer sits.',
    },
  ],

  questions: [
    {
      id: 'sr-1',
      ask: 'An ultrasonic sensor directly measures:',
      kind: 'choice',
      options: [
        'The time until the echo returns',
        'The distance to the object',
        'The size of the object',
      ],
      answer: 'The time until the echo returns',
      teach: 'Distance is worked out from the time and the speed of sound, '
        + 'and then halved.',
      level: 4,
    },
    {
      id: 'sr-2',
      ask: 'Echo time is 0.002 seconds and sound travels 340 metres a second. '
        + 'Give the distance to the obstacle in metres.',
      kind: 'numeric',
      options: [],
      answer: '0.34',
      teach: '340 times 0.002 is 0.68 metres there and back, '
        + 'so the obstacle is 0.34 metres away.',
      level: 5,
    },
    {
      id: 'sr-3',
      ask: 'A line follower fails in bright sunlight because:',
      kind: 'choice',
      options: [
        'Sunlight carries infrared, so both sensors read bright',
        'The motors run faster in heat',
        'The line changes colour',
      ],
      answer: 'Sunlight carries infrared, so both sensors read bright',
      teach: 'The difference the robot steers by disappears. '
        + 'Shield the sensors and recalibrate on site.',
      level: 5,
    },
    {
      id: 'sr-4',
      ask: 'Which sensor gives a digital output with no conversion?',
      kind: 'choice',
      options: ['A limit switch', 'A thermistor', 'A potentiometer'],
      answer: 'A limit switch',
      teach: 'Contact is either made or not, which is exactly on or off.',
      level: 3,
    },
    {
      id: 'sr-5',
      ask: 'An ultrasonic sensor returns no echo from a curtain. '
        + 'The program should treat this as:',
      kind: 'choice',
      options: [
        'Unsafe, and stop',
        'Clear ahead',
        'A sensor fault to ignore',
      ],
      answer: 'Unsafe, and stop',
      teach: 'A missing reading is not a clear path. '
        + 'Cloth absorbs the pulse, so the obstacle is there and unseen.',
      level: 6,
    },
  ],
})

/* ── Robotics: motors and actuators ──────────────────────────────────────── */

teach({
  topicId: 'actuators-rob',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An actuator turns an electrical signal into movement. '
      + 'A DC motor spins continuously and fast, '
      + 'but on its own it does not know where it is. '
      + 'A servo is told an angle and holds it, '
      + 'usually over a limited span. '
      + 'A stepper moves in counted steps, '
      + 'so position is known by counting. '
      + 'Choose from the movement wanted: '
      + 'continuous, a held angle, or a counted position.',
    method: [
      'Describe the movement needed in one sentence.',
      'Ask whether position must be known.',
      'Match it: continuous to DC, held angle to servo, counted to stepper.',
    ],
  },

  idea:
    'An actuator is a device that turns an electrical signal '
    + 'into movement or some other physical change. '
    + 'A DC motor spins when current flows, '
    + 'faster with more voltage, '
    + 'and the other way round when the current is reversed. '
    + 'It is cheap, fast and strong for its size, '
    + 'and it has no idea where its shaft is pointing. '
    + 'A servo contains a small DC motor, a gearbox, '
    + 'a position sensor and its own small controller. '
    + 'It is sent an angle and it drives itself to that angle and holds it, '
    + 'usually within 0 to 180 degrees. '
    + 'A stepper motor turns by a fixed angle for each pulse it is sent, '
    + 'such as 1.8 degrees, so 200 pulses is one full turn. '
    + 'Other actuators matter too: '
    + 'a solenoid pushes a rod a short distance and is either on or off, '
    + 'a relay is a switch an electrical signal closes, '
    + 'and a pump or a valve acts on a liquid. '
    + 'Torque is turning force, '
    + 'and gearing trades speed for torque: '
    + 'gear a motor down and it turns more slowly and pulls harder.',

  mechanism:
    'The choice is settled by one question, '
    + 'and it is not which motor is best. '
    + 'The question is whether the robot has to know where the thing is. '
    + 'A wheel driving a robot forward does not: '
    + 'it just has to turn, so a DC motor is right. '
    + 'A robot arm joint does: '
    + 'if it goes to 90 degrees it must be at 90 degrees, '
    + 'so a servo, which holds an angle, is right. '
    + 'A print head crossing a page in known increments does: '
    + 'it must move exactly 400 steps and no more, '
    + 'so a stepper, which counts, is right. '
    + 'Now the mechanism that makes each one fail, '
    + 'because that is where the marks are. '
    + 'A DC motor given a fixed voltage does not give a fixed speed. '
    + 'Load it, by driving uphill or over sand, '
    + 'and it slows, '
    + 'so a robot told to drive forward for two seconds '
    + 'travels a different distance on concrete and on a dusty floor. '
    + 'The cure is not a bigger motor, '
    + 'it is an encoder on the shaft, '
    + 'which turns an open loop into a closed one '
    + 'by counting what actually happened. '
    + 'A stepper fails differently. '
    + 'It is told to step and assumes it stepped. '
    + 'Overload it and it misses steps silently, '
    + 'so the machine believes it is at 400 '
    + 'when it is really at 388, '
    + 'and every move after that is wrong by the same amount. '
    + 'That is why a machine with steppers has a home position '
    + 'with a limit switch, '
    + 'and returns to it to start again from a known place. '
    + 'A servo fails by being asked for what it has not got: '
    + 'an angle beyond its span, or more torque than it can give, '
    + 'and then it buzzes, gets hot, '
    + 'and drags the supply voltage down '
    + 'until the controller resets. '
    + 'Hence the rule that saves more projects than any other: '
    + 'the motors take their own power supply, '
    + 'sharing only the earth with the controller, '
    + 'because stall current is many times running current '
    + 'and it is the controller that dies. '
    + 'Last, what to write down. '
    + 'Name the actuator, name the movement, '
    + 'state whether position is known and how, '
    + 'and state the supply and the stall current. '
    + 'A specification missing the current is not a specification.',

  recap:
    'You have seen a motor turn a fan and a grinder, '
    + 'and watched a tailor’s treadle turn a wheel. '
    + 'This asks a narrower question: '
    + 'not whether it turns, but whether anything knows how far it turned.',

  method: [
    'Write down the movement needed: how far, how fast, how much force.',
    'Ask whether the robot must know the position at any moment.',
    'If not, choose a DC motor and gear it for the torque you need.',
    'If a held angle is needed over a limited span, choose a servo.',
    'If counted movement is needed, choose a stepper and add a home switch.',
    'Work out the running current and look up the stall current.',
    'Give the motors their own supply, sharing the earth only.',
    'State what the robot should do if the movement does not happen.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Choose an actuator for the two driving wheels of a small '
        + 'line following robot, and say why.',
      steps: [
        'The wheels must turn continuously, at a speed you can vary.',
        'Nothing needs to know the wheel angle.',
        'Cost and simplicity matter.',
      ],
      answer: 'Geared DC motors. '
        + 'Continuous rotation with no position requirement '
        + 'is exactly what a DC motor is for.',
    },
    {
      level: 4,
      ask: 'A stepper advances 1.8 degrees a step. '
        + 'How many steps is a quarter turn?',
      steps: [
        'A quarter turn is 90 degrees.',
        '90 divided by 1.8 is 50.',
      ],
      answer: '50 steps. '
        + 'A full turn is 200 steps, which is the usual figure to remember.',
    },
    {
      level: 5,
      ask: 'A robot is told to drive forward for 2 seconds to cross a room. '
        + 'It arrives short on a dusty floor. Explain and give the fix.',
      steps: [
        'A fixed voltage does not give a fixed speed; load changes it.',
        'Dust increases the resistance to rolling, so the wheels turn slower.',
        'Time tells the robot nothing about distance travelled.',
        'Fit encoders and drive until the counted rotations are reached.',
      ],
      answer: 'Driving for a time is open loop, '
        + 'so the distance changes with the surface. '
        + 'Count wheel rotations with an encoder and drive to a count, '
        + 'which closes the loop.',
    },
    {
      level: 6,
      ask: 'A school arm with three servos works when tested joint by '
        + 'joint but resets when all three lift together. Diagnose it.',
      steps: [
        'Three servos moving under load draw close to stall current at once.',
        'The shared supply voltage sags.',
        'The controller sees the sag as a brown out and resets.',
        'Separate the motor supply, keep a common earth, '
          + 'and add a large capacitor across the motor supply.',
      ],
      answer: 'It is a power fault, not a program fault. '
        + 'The combined stall current pulls the shared supply down '
        + 'and resets the controller. '
        + 'Give the servos their own supply with a common earth.',
    },
  ],

  traps: [
    {
      mistake: 'Powering motors from the controller board.',
      why: 'Stall current is many times running current, '
        + 'so the supply sags and the controller resets. '
        + 'Separate supplies with a common earth.',
    },
    {
      mistake: 'Driving for a time and calling it a distance.',
      why: 'A DC motor slows under load, '
        + 'so the same two seconds is a different distance on '
        + 'each surface. Count rotations instead.',
    },
    {
      mistake: 'Trusting a stepper to be where it was told.',
      why: 'An overloaded stepper misses steps silently '
        + 'and every later move inherits the error. '
        + 'Home it against a limit switch.',
    },
    {
      mistake: 'Asking a servo for 270 degrees.',
      why: 'A standard servo spans about 180. '
        + 'It will strain against its stop, heat up, '
        + 'and pull the supply down.',
    },
  ],

  extension:
    'Speed is usually controlled by pulse width modulation '
    + 'rather than by lowering the voltage. '
    + 'The supply is switched fully on and fully off '
    + 'many hundreds of times a second, '
    + 'and the fraction of the time it is on, called the duty cycle, '
    + 'sets the average power. '
    + 'The gain is efficiency: '
    + 'a switch that is fully on or fully off wastes almost nothing, '
    + 'while a resistor dropping the voltage turns the difference '
    + 'into heat.',

  figure: {
    alt: 'Three shafts drawn side by side to compare the movement each '
      + 'actuator gives. The first, for a DC motor, shows a circle with '
      + 'a continuous arrow all the way round and a note that the '
      + 'position is unknown. The second, for a servo, shows an arc '
      + 'limited between 0 and 180 degrees with the pointer held at 90. '
      + 'The third, for a stepper, shows a circle divided into equal '
      + 'tick marks with the pointer resting on a tick and a note that '
      + 'the position is known by counting the steps.',
    svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* DC motor */
      + '<circle cx="110" cy="130" r="60" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M110 130L110 78" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M110 50a80 80 0 0 1 56 23" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M160 66l10 10-13 4Z" fill="#0f8a4d"/>'
      + '<text x="76" y="212" font-size="13" fill="currentColor">DC motor</text>'
      + '<text x="46" y="232" font-size="11" fill="currentColor">spins on and on</text>'
      + '<text x="46" y="250" font-size="11" fill="#0f8a4d">position unknown</text>'
      /* servo */
      + '<path d="M260 130h120" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" fill="none"/>'
      + '<path d="M320 130m-60 0a60 60 0 0 1 120 0" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M320 130L320 70" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<circle cx="320" cy="130" r="5" fill="currentColor"/>'
      + '<text x="248" y="148" font-size="11" fill="currentColor">0</text>'
      + '<text x="384" y="148" font-size="11" fill="currentColor">180</text>'
      + '<text x="306" y="62" font-size="11" fill="#0f8a4d">90</text>'
      + '<text x="292" y="212" font-size="13" fill="currentColor">servo</text>'
      + '<text x="256" y="232" font-size="11" fill="currentColor">holds an angle</text>'
      + '<text x="256" y="250" font-size="11" fill="#0f8a4d">position commanded</text>'
      /* stepper */
      + '<circle cx="520" cy="130" r="60" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M520 70v14"/><path d="M520 176v14"/>'
      + '<path d="M460 130h14"/><path d="M566 130h14"/>'
      + '<path d="M478 88l10 10"/><path d="M552 172l10 10"/>'
      + '<path d="M562 88l-10 10"/><path d="M488 172l-10 10"/>'
      + '</g>'
      + '<path d="M520 130L562 88" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="486" y="212" font-size="13" fill="currentColor">stepper</text>'
      + '<text x="460" y="232" font-size="11" fill="currentColor">one fixed step a pulse</text>'
      + '<text x="460" y="250" font-size="11" fill="#0f8a4d">position by counting</text>'
      + '<text x="46" y="290" font-size="12" fill="currentColor">choose by whether anything must know where the shaft is, not by which motor is strongest</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Which actuator fits which movement, and how each one fails',
      columns: ['Actuator', 'Movement', 'Position known', 'Suits', 'Fails by'],
      rows: [
        ['DC motor', 'Continuous, fast', 'No, unless an encoder is added', 'Driving wheels, a fan, a pump', 'Slowing under load'],
        ['Servo', 'A held angle, about 0 to 180', 'Yes, it holds what it is told', 'An arm joint, a steering link, a gate', 'Buzzing and sagging the supply'],
        ['Stepper', 'Counted steps, such as 1.8 degrees', 'Yes, by counting pulses', 'A print head, a feed screw', 'Missing steps in silence'],
        ['Solenoid', 'A short push, on or off', 'Only the two ends', 'A latch, a dosing valve', 'Overheating if left on'],
      ],
      note: 'The last column is the useful one in an examination answer: '
        + 'a fix follows from the failure, not from the motor.',
    },
  ],

  questions: [
    {
      id: 'ac-1',
      ask: 'Which actuator is told an angle and holds it?',
      kind: 'choice',
      options: ['A servo', 'A DC motor', 'A solenoid'],
      answer: 'A servo',
      teach: 'It has its own position sensor and controller inside.',
      level: 3,
    },
    {
      id: 'ac-2',
      ask: 'A stepper advances 1.8 degrees a step. '
        + 'How many steps make one full turn?',
      kind: 'numeric',
      options: [],
      answer: '200',
      teach: '360 divided by 1.8 is 200.',
      level: 4,
    },
    {
      id: 'ac-3',
      ask: 'A robot given a fixed voltage travels a different distance on '
        + 'sand than on concrete because:',
      kind: 'choice',
      options: [
        'A DC motor slows under load',
        'The battery changes voltage',
        'Sand is magnetic',
      ],
      answer: 'A DC motor slows under load',
      teach: 'Fixed voltage is not fixed speed. '
        + 'Count rotations with an encoder instead of timing.',
      level: 5,
    },
    {
      id: 'ac-4',
      ask: 'Why should motors have a separate power supply from the '
        + 'controller?',
      kind: 'choice',
      options: [
        'Stall current sags the supply and resets the controller',
        'Motors need a higher frequency',
        'The controller cannot switch current',
      ],
      answer: 'Stall current sags the supply and resets the controller',
      teach: 'Share the earth only. '
        + 'This one rule saves more school projects than any other.',
      level: 6,
    },
    {
      id: 'ac-5',
      ask: 'A machine using steppers needs a home switch because:',
      kind: 'choice',
      options: [
        'A missed step is silent and every later move inherits it',
        'Steppers cannot reverse',
        'The controller forgets its program',
      ],
      answer: 'A missed step is silent and every later move inherits it',
      teach: 'Homing restores a known position, '
        + 'which is the only way to clear an accumulated count error.',
      level: 6,
    },
  ],
})

/* ── Robotics: algorithms and flowcharts for control ─────────────────────── */

teach({
  topicId: 'flowchart-rob',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A control algorithm is the rule a robot follows, '
      + 'written so it can be traced. '
      + 'A flowchart draws it: '
      + 'oval for start and stop, '
      + 'parallelogram for input and output, '
      + 'rectangle for a process, '
      + 'diamond for a decision with two labelled exits. '
      + 'Every path must reach a stop, '
      + 'and a control loop needs a way out that does not depend '
      + 'on the job going well.',
    method: [
      'List the sensor readings and the actions available.',
      'Draw the loop, with the decision diamonds labelled true and false.',
      'Trace every path to a stop, including the failure path.',
    ],
  },

  idea:
    'An algorithm is a finite list of unambiguous steps '
    + 'that finishes. '
    + 'A control algorithm is one that reads sensors and drives actuators, '
    + 'and it is usually written as a loop '
    + 'because the robot keeps doing it. '
    + 'A flowchart shows it as a drawing. '
    + 'An oval, called a terminator, marks the start and each stop. '
    + 'A parallelogram marks input or output, '
    + 'such as read the distance sensor. '
    + 'A rectangle marks a process, such as drive both motors forward. '
    + 'A diamond marks a decision: '
    + 'it holds a question with a yes or no answer, '
    + 'and it has exactly two exits, each labelled. '
    + 'Arrows show the order. '
    + 'Pseudocode says the same thing in lines of text, '
    + 'and most examination answers are marked on either.',

  mechanism:
    'There is one discipline here and everything follows from it: '
    + 'trace every path to a terminator. '
    + 'Not the path you meant, every path. '
    + 'Take an obstacle avoiding robot. '
    + 'Read the distance. '
    + 'If the distance is more than 20 centimetres, drive forward. '
    + 'Otherwise stop, reverse a little and turn. '
    + 'Then go back to the reading. '
    + 'Traced along the clear path it works. '
    + 'Traced along the blocked path it also works, once. '
    + 'But put the robot in a corner '
    + 'and it turns, reads, is still blocked, turns again, '
    + 'and does that for as long as the battery lasts, '
    + 'and no single path in the drawing is wrong. '
    + 'The fault is that there is no path out that does not depend '
    + 'on the obstacle going away. '
    + 'So a control algorithm carries a second way to stop: '
    + 'count the attempts, and after five blocked readings '
    + 'stop and signal, '
    + 'or run a timeout. '
    + 'In an examination, that counter is a mark, '
    + 'and in a real robot it is the difference between a machine '
    + 'that reports a problem and one that burns out a motor '
    + 'against a wall. '
    + 'The second thing that costs marks is the diamond with one exit, '
    + 'or with two unlabelled exits. '
    + 'A decision that does not say which arrow is true '
    + 'cannot be traced by the examiner, '
    + 'so it cannot earn the mark even if you knew what you meant. '
    + 'Label both. '
    + 'Third, the boundary condition in the decision itself. '
    + 'Distance more than 20, and distance less than 20, '
    + 'leave exactly 20 with no path at all. '
    + 'Use more than or equal to on one side, '
    + 'and the gap closes. '
    + 'Last, write the trace as a table, '
    + 'the same table as in Computing: '
    + 'one column for each sensor reading, '
    + 'one for the decision taken, '
    + 'one for the action, and one row for each pass round the loop. '
    + 'Three passes is usually enough to show the behaviour, '
    + 'and the table is what is marked.',

  recap:
    'You have written a set of instructions for somebody else to follow, '
    + 'such as how to get from the school to the market. '
    + 'This adds two things: '
    + 'the instructions are for a machine, which cannot guess, '
    + 'and some of them are decisions taken from a measurement.',

  method: [
    'List every sensor reading the robot can take.',
    'List every action it can perform.',
    'Write the normal case first, as a straight line of steps.',
    'Add a decision diamond wherever a reading changes what happens.',
    'Label both exits of every diamond.',
    'Close the loop by returning to the reading step.',
    'Add a counter or a timeout so the loop can end without success.',
    'Trace every path, including the failure path, to a terminator.',
    'Check the boundary value belongs to exactly one branch.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the flowchart symbol for a decision, and say how many '
        + 'exits it has.',
      steps: [
        'A decision is drawn as a diamond.',
        'It asks a question with a yes or no answer.',
      ],
      answer: 'A diamond, with exactly two exits, each one labelled.',
    },
    {
      level: 4,
      ask: 'Write pseudocode for a robot that stops when an obstacle is '
        + 'within 20 centimetres.',
      steps: [
        'REPEAT',
        'read distance',
        'IF distance is greater than or equal to 20 THEN drive forward',
        'ELSE stop motors',
        'UNTIL distance is less than 20',
        'Then a terminator: STOP.',
      ],
      answer: 'The loop reads, decides and acts each pass, '
        + 'and the UNTIL gives it a way to reach the stop.',
    },
    {
      level: 5,
      ask: 'The algorithm above is put in a corner and never stops turning. '
        + 'There is no error in any single step. Explain and fix it.',
      steps: [
        'Every path in the drawing is correct on its own.',
        'The only exit depends on the obstacle clearing.',
        'In a corner it never clears, so the loop never ends.',
        'Add tries takes 0 before the loop, '
          + 'add 1 to tries on each blocked reading, '
          + 'and exit when tries reaches 5.',
      ],
      answer: 'It lacks an exit that does not depend on success. '
        + 'A try counter, or a timeout, '
        + 'gives the loop a second terminator: '
        + 'stop and signal that the robot is stuck.',
    },
    {
      level: 6,
      ask: 'A line follower has a left and a right sensor. '
        + 'Give the algorithm for all four combinations of readings, '
        + 'and say what the fourth one means.',
      steps: [
        'Left dark and right bright: the robot has drifted right, '
          + 'so turn left.',
        'Left bright and right dark: it has drifted left, so turn right.',
        'Both bright: the line is between them, so go straight.',
        'Both dark: either a junction, or the robot is across the line, '
          + 'or both sensors are shadowed.',
        'So the fourth case must not be treated as straight ahead: '
          + 'stop, count it, and reverse slightly to re acquire the line.',
      ],
      answer: 'Three cases steer and the fourth is ambiguous. '
        + 'Handling the ambiguous reading explicitly, '
        + 'rather than letting it fall through to the ELSE, '
        + 'is what makes the algorithm complete.',
    },
  ],

  traps: [
    {
      mistake: 'A decision diamond with unlabelled exits.',
      why: 'The examiner cannot tell which arrow is true, '
        + 'so the path cannot be traced and the mark is not given. '
        + 'Label both.',
    },
    {
      mistake: 'A control loop whose only exit is success.',
      why: 'In a corner, or with a jammed wheel, it never ends. '
        + 'Add a try counter or a timeout.',
    },
    {
      mistake: 'Conditions that leave the boundary value homeless.',
      why: 'Greater than 20 on one branch and less than 20 on the other '
        + 'has no path for exactly 20. '
        + 'Use greater than or equal to on one side.',
    },
    {
      mistake: 'Tracing only the path the robot normally takes.',
      why: 'The faults live on the other paths. '
        + 'Trace each branch to a terminator before you call it finished.',
    },
  ],

  extension:
    'A state machine is the next step up and is worth meeting. '
    + 'Instead of one long loop of nested decisions, '
    + 'the robot is in exactly one named state at a time, '
    + 'such as searching, following, or stuck, '
    + 'and each state has its own small rule '
    + 'and its own list of readings that move it to another state. '
    + 'It is easier to trace, because you only ever reason about one state, '
    + 'and it makes the stuck state a real place the robot can be '
    + 'rather than a loop nobody planned.',

  figure: {
    alt: 'A flowchart for an obstacle avoiding robot, using the standard '
      + 'symbols. An oval start leads to a rectangle setting tries to '
      + 'zero, then a parallelogram reading the distance sensor, then a '
      + 'diamond asking whether the distance is at least 20 centimetres. '
      + 'The true exit goes to a rectangle driving forward and loops '
      + 'back to the reading. The false exit goes to a rectangle that '
      + 'reverses and turns and adds one to tries, then to a second '
      + 'diamond asking whether tries has reached five, whose true exit '
      + 'reaches an oval marked stop and signal stuck and whose false '
      + 'exit loops back to the reading.',
    svg: '<svg viewBox="0 0 640 520" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      /* start oval */
      + '<rect x="120" y="20" width="110" height="38" rx="19"/>'
      + '<path d="M175 58v24"/>'
      /* set tries */
      + '<rect x="110" y="82" width="130" height="38"/>'
      + '<path d="M175 120v24"/>'
      /* input parallelogram */
      + '<path d="M118 144h140l-16 38H102Z"/>'
      + '<path d="M175 182v26"/>'
      /* decision 1 */
      + '<path d="M175 208L265 250L175 292L85 250Z"/>'
      /* true branch to drive forward */
      + '<path d="M265 250h70"/>'
      + '<rect x="335" y="230" width="130" height="40"/>'
      /* loop back from drive forward */
      + '<path d="M465 250h70V163H258"/>'
      /* false branch down */
      + '<path d="M175 292v30"/>'
      + '<rect x="95" y="322" width="160" height="48"/>'
      + '<path d="M175 370v24"/>'
      /* decision 2 */
      + '<path d="M175 394L255 428L175 462L95 428Z"/>'
      /* true to stop */
      + '<path d="M255 428h90"/>'
      + '<rect x="345" y="409" width="170" height="38" rx="19"/>'
      /* false loops back up to read */
      + '<path d="M95 428H40V163h62"/>'
      + '</g>'
      + '<text x="146" y="44" font-size="12" fill="currentColor">start</text>'
      + '<text x="120" y="106" font-size="12" fill="currentColor">tries takes 0</text>'
      + '<text x="122" y="168" font-size="12" fill="currentColor">read distance</text>'
      + '<text x="126" y="248" font-size="11" fill="currentColor">distance at least</text>'
      + '<text x="146" y="263" font-size="11" fill="currentColor">20 cm ?</text>'
      + '<text x="274" y="242" font-size="11" fill="#0f8a4d">true</text>'
      + '<text x="346" y="255" font-size="12" fill="currentColor">drive both motors on</text>'
      + '<text x="186" y="312" font-size="11" fill="#0f8a4d">false</text>'
      + '<text x="104" y="344" font-size="12" fill="currentColor">stop, reverse a little, turn,</text>'
      + '<text x="104" y="362" font-size="12" fill="currentColor">add 1 to tries</text>'
      + '<text x="140" y="424" font-size="11" fill="currentColor">tries is 5 ?</text>'
      + '<text x="264" y="420" font-size="11" fill="#0f8a4d">true</text>'
      + '<text x="100" y="420" font-size="11" fill="#0f8a4d">false</text>'
      + '<text x="356" y="433" font-size="12" fill="currentColor">stop and signal stuck</text>'
      + '<text x="40" y="496" font-size="12" fill="#0f8a4d">the try counter is the second way out, so a robot in a corner stops instead of turning for ever</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The flowchart symbols and what each one must contain',
      columns: ['Symbol', 'Means', 'Exits', 'Must contain'],
      rows: [
        ['Oval', 'Start or stop', 'One out, or none', 'The word start or stop'],
        ['Parallelogram', 'Input or output', 'One', 'What is read or shown'],
        ['Rectangle', 'A process', 'One', 'An action, as a command'],
        ['Diamond', 'A decision', 'Two, both labelled', 'A question with a yes or no answer'],
        ['Arrow', 'The order of work', 'Not applicable', 'A direction, never two heads'],
      ],
      note: 'The two labelled exits on a diamond are the detail most often '
        + 'left out, and it is the one that makes a chart traceable.',
    },
    {
      caption: 'A trace of the obstacle algorithm through three passes in a corner',
      columns: ['Pass', 'Distance read', 'Branch taken', 'Action', 'Tries after'],
      rows: [
        ['1', '45 cm', 'True', 'Drive forward', '0'],
        ['2', '12 cm', 'False', 'Reverse and turn', '1'],
        ['3', '14 cm', 'False', 'Reverse and turn', '2'],
        ['4', '11 cm', 'False', 'Reverse and turn', '3'],
      ],
      note: 'Carried on, tries reaches 5 and the second terminator is '
        + 'reached. Without the counter this table never ends.',
    },
  ],

  questions: [
    {
      id: 'fc-1',
      ask: 'Which symbol holds a decision?',
      kind: 'choice',
      options: ['A diamond', 'A rectangle', 'An oval'],
      answer: 'A diamond',
      teach: 'And it has exactly two exits, each labelled true or false.',
      level: 3,
    },
    {
      id: 'fc-2',
      ask: 'A robot in a corner turns for ever although every step is '
        + 'correct. What is missing?',
      kind: 'choice',
      options: [
        'An exit that does not depend on the obstacle clearing',
        'A faster motor',
        'A second sensor',
      ],
      answer: 'An exit that does not depend on the obstacle clearing',
      teach: 'A try counter or a timeout gives the loop a second '
        + 'terminator: stop and signal stuck.',
      level: 5,
    },
    {
      id: 'fc-3',
      ask: 'One branch tests distance greater than 20 and the other tests '
        + 'distance less than 20. What happens at exactly 20?',
      kind: 'choice',
      options: [
        'No branch is taken, which is a fault',
        'Both branches run',
        'The robot stops safely',
      ],
      answer: 'No branch is taken, which is a fault',
      teach: 'Use greater than or equal to on one side '
        + 'so the boundary belongs to exactly one branch.',
      level: 6,
    },
    {
      id: 'fc-4',
      ask: 'In a trace table for a control loop, one row stands for:',
      kind: 'choice',
      options: [
        'One pass round the loop',
        'One sensor',
        'One motor',
      ],
      answer: 'One pass round the loop',
      teach: 'Columns are the readings, the branch and the action. '
        + 'Three or four passes show the behaviour.',
      level: 4,
    },
    {
      id: 'fc-5',
      ask: 'A line follower reads dark under both sensors. '
        + 'Treating this as go straight is wrong because:',
      kind: 'choice',
      options: [
        'It may be a junction or the robot lying across the line',
        'Dark always means stop',
        'Both sensors cannot read the same',
      ],
      answer: 'It may be a junction or the robot lying across the line',
      teach: 'The reading is ambiguous, so handle it explicitly '
        + 'instead of letting it fall into the ELSE.',
      level: 6,
    },
  ],
})
