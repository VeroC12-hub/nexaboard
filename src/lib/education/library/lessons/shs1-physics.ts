/**
 * Stored lessons for SHS 1 Elective Physics.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── How this differs from the General Science versions ────────────────────
 *
 * General Science covers measurement and motion too, and the overlap is
 * deliberate rather than accidental: every SHS learner needs them, and only
 * some take Physics. What the Physics lessons add is the part a physicist
 * is held to. Measurement gains dimensions, which let an equation be
 * checked before it is used, and a stated treatment of error rather than a
 * rule of thumb about significant figures. Kinematics gains the graph as an
 * object of study in its own right, including the area and the gradient as
 * operations with meaning. Newton's laws arrive with momentum, which is the
 * form in which the second law was actually stated and the form that
 * survives into collisions. Temperature arrives with calibration, because a
 * thermometer that nobody calibrated measures nothing.
 *
 * So a learner who has both subjects should read these as the fuller
 * treatment, not as a repeat.
 *
 * ── What has to be written down ───────────────────────────────────────────
 *
 * In Physics the working is most of the mark. A marking scheme gives marks
 * for the formula quoted, for the substitution with units, and for the
 * answer with its unit, and only then for the arithmetic. Each lesson here
 * says which line carries which mark, because a learner who writes a bare
 * number is throwing away marks they have already earned in their head.
 *
 * ── Equipment ─────────────────────────────────────────────────────────────
 *
 * The apparatus named here includes a vernier caliper, a micrometer screw
 * gauge, a ticker tape timer and a thermometer with a fixed scale. Where a
 * school does not have them the lesson says so and teaches the examinable
 * part, which is the reading, the precision and the interpretation, all of
 * which can be learned from printed readings.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── physical quantities and measurement ─────────────────────────────────── */

teach({
  topicId: 'measurement-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A physical quantity is a number, a unit, and for some quantities a '
      + 'direction. '
      + 'The seven SI base units build every other unit. '
      + 'The dimensions of a quantity are the powers of mass, length and '
      + 'time in it, '
      + 'written M, L and T. '
      + 'An equation whose two sides have different dimensions is wrong. '
      + 'Every reading carries an error, '
      + 'and the error decides how many figures the answer may be given to.',
    method: [
      'Write the quantity with its unit, and its direction if it is a '
        + 'vector.',
      'Reduce each unit to the base units to find the dimensions.',
      'Check that both sides of an equation have the same dimensions.',
      'Take the reading error as half the smallest division.',
      'Add percentage errors when quantities are multiplied or divided.',
    ],
  },

  idea:
    'A physical quantity is measured as a number times a unit. '
    + 'A scalar has size only, such as mass, time or energy. '
    + 'A vector has size and direction, such as displacement, force or '
    + 'velocity. '
    + 'The SI system has seven base units: '
    + 'the metre, kilogram, second, ampere, kelvin, mole and candela. '
    + 'Every other unit is derived from them. '
    + 'The newton is the kilogram metre per second squared, '
    + 'and the joule is the newton metre. '
    + 'The dimensions of a quantity record which base quantities it is '
    + 'built from. '
    + 'Length has dimension L, mass has M and time has T. '
    + 'So speed has dimensions L over T, '
    + 'acceleration has L over T squared, '
    + 'and force, being mass times acceleration, has M L over T squared. '
    + 'A quantity with no dimensions, such as a ratio or an angle in '
    + 'radians, '
    + 'is called dimensionless. '
    + 'No measurement is exact. '
    + 'A random error scatters readings about the true value '
    + 'and is reduced by repeating and averaging. '
    + 'A systematic error shifts every reading the same way, '
    + 'such as a zero error on an instrument, '
    + 'and averaging does not reduce it at all. '
    + 'The reading error of a scale is taken as half its smallest division. '
    + 'The percentage error is the error divided by the reading, times 100.',

  mechanism:
    'Dimensions are the most useful thing in this topic '
    + 'and the least used by learners, '
    + 'so it is worth seeing exactly what they do. '
    + 'A physical equation must have the same dimensions on both sides, '
    + 'because you cannot set a length equal to a time '
    + 'any more than you can set three oranges equal to three hours. '
    + 'So an equation remembered wrongly can be caught before it is used. '
    + 'Suppose a learner writes s equals u t plus a t. '
    + 'The left side is a length, L. '
    + 'u t is L over T, times T, which is L, so that term is fine. '
    + 'a t is L over T squared, times T, which is L over T, '
    + 'and that is a speed, not a length. '
    + 'The equation is wrong, and the dimensions said so '
    + 'without knowing the correct version. '
    + 'The real equation has half a t squared, '
    + 'which is L over T squared times T squared, which is L. '
    + 'This check costs three lines and catches a whole class of errors. '
    + 'Note what it cannot do: '
    + 'it cannot find a wrong pure number. '
    + 's equals u t plus 7 a t squared has the right dimensions and is '
    + 'still wrong, '
    + 'because a half and 7 are both dimensionless. '
    + 'Say that limitation when you use the method, because it is '
    + 'examinable. '
    + 'Now errors, where the marks are lost in a predictable way. '
    + 'The first loss is treating all errors alike. '
    + 'A zero error, where a micrometer reads 0.02 mm with its jaws closed, '
    + 'is systematic. '
    + 'Repeating the measurement a hundred times does not help, '
    + 'because every reading is 0.02 mm too large. '
    + 'The fix is to subtract the zero error, '
    + 'and saying so is the answer a question about systematic error wants. '
    + 'Random error, from reading a swinging pointer or starting a '
    + 'stopwatch late, '
    + 'is reduced by averaging, '
    + 'because the misses fall on both sides. '
    + 'Mixing the two up is the standard mistake. '
    + 'The second loss is combining errors. '
    + 'When quantities are multiplied or divided, '
    + 'the percentage errors add. '
    + 'Density is mass over volume, '
    + 'so a 2 per cent error in mass and a 3 per cent error in volume '
    + 'give a 5 per cent error in density. '
    + 'When a quantity is raised to a power, '
    + 'its percentage error is multiplied by that power. '
    + 'So a 3 per cent error in a radius '
    + 'gives 6 per cent in an area, because the radius is squared, '
    + 'and 9 per cent in a volume, because it is cubed. '
    + 'Read the power off the formula rather than recalling a case. '
    + 'The third loss is the final rounding. '
    + 'If the percentage error is 5 per cent, '
    + 'the answer is uncertain in its second figure, '
    + 'so quoting four figures is a claim nobody can support. '
    + 'What has to be written down is the formula, '
    + 'then the substitution with units, then the answer with its unit, '
    + 'and where errors are asked for, the percentage error of each quantity '
    + 'on its own line before they are combined. '
    + 'Where a school has no vernier caliper or micrometer, '
    + 'the examinable part remains: '
    + 'a vernier reads to 0.01 cm and a micrometer to 0.001 cm, '
    + 'both have a zero error that must be checked and subtracted, '
    + 'and a printed set of readings lets every calculation be practised.',

  recap:
    'You have measured with a rule and written the unit each time. '
    + 'This adds two tools: '
    + 'dimensions, which test whether an equation can be right, '
    + 'and error, which says how much of an answer is real.',

  method: [
    'Write each quantity with its unit, and say whether it is a vector.',
    'Express each unit in base units.',
    'Replace the base units by M, L and T to get the dimensions.',
    'Check that every term in an equation has the same dimensions.',
    'State that the check cannot test a dimensionless constant.',
    'Take each reading error as half the smallest division.',
    'Turn each into a percentage error.',
    'Add the percentage errors for a product or quotient, '
      + 'and multiply by the power where there is one.',
    'Round the final answer to the figure the error supports.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Find the dimensions of force and of pressure.',
      steps: [
        'Force is mass times acceleration.',
        'Acceleration is L over T squared.',
        'So force is M L over T squared.',
        'Pressure is force over area, so divide by L squared.',
      ],
      answer: 'Force has dimensions M L T to the power minus 2. '
        + 'Pressure has M L to the power minus 1, T to the power minus 2.',
    },
    {
      level: 4,
      ask: 'Use dimensions to show that s equals u t plus a t cannot be '
        + 'correct.',
      steps: [
        's has dimension L.',
        'u t has L over T times T, which is L.',
        'a t has L over T squared times T, which is L over T.',
        'The last term is a speed, not a length.',
      ],
      answer: 'The term a t has the dimensions of speed, '
        + 'so it cannot be added to a length. '
        + 'The equation is dimensionally inconsistent and therefore wrong. '
        + 'The correct term is half a t squared, which has dimension L. '
        + 'Note the method cannot check the one half, '
        + 'because a pure number has no dimensions.',
    },
    {
      level: 4,
      ask: 'A micrometer reads 0.03 mm when its jaws are closed. '
        + 'It then reads 2.47 mm on a wire. '
        + 'Give the diameter, and name the type of error.',
      steps: [
        'A reading with the jaws closed should be zero.',
        'So every reading is 0.03 mm too large.',
        'Subtract: 2.47 minus 0.03.',
      ],
      answer: 'The diameter is 2.44 mm. '
        + 'This is a systematic error, specifically a zero error, '
        + 'and averaging many readings would not remove it '
        + 'because every reading is shifted the same way.',
    },
    {
      level: 5,
      ask: 'The mass of a block is 54 g with an error of 1 g, '
        + 'and its volume is 20 cm cubed with an error of 0.5 cm cubed. '
        + 'Find its density and the percentage error in the density, '
        + 'and give the density to a sensible precision.',
      steps: [
        'Density is 54 over 20, which is 2.7 g per cm cubed.',
        'Percentage error in mass: 1 over 54 times 100, about 1.9 per cent.',
        'Percentage error in volume: 0.5 over 20 times 100, '
          + 'which is 2.5 per cent.',
        'Density is a quotient, so the percentage errors add.',
        '1.9 plus 2.5 is about 4.4 per cent.',
        '4.4 per cent of 2.7 is about 0.12.',
      ],
      answer: 'The density is 2.7 g per cm cubed '
        + 'with a percentage error of about 4.4 per cent, '
        + 'so about 2.7 plus or minus 0.1 g per cm cubed. '
        + 'Quoting 2.700 would claim a precision the readings cannot '
        + 'support.',
    },
  ],

  traps: [
    {
      mistake: 'Saying a dimensional check proves an equation correct.',
      why: 'It only shows the equation is possible. '
        + 'A wrong dimensionless constant passes the check.',
    },
    {
      mistake: 'Trying to remove a zero error by averaging.',
      why: 'A zero error shifts every reading the same way. '
        + 'Subtract it instead.',
    },
    {
      mistake: 'Adding absolute errors for a product.',
      why: 'For a product or quotient the percentage errors add. '
        + 'Absolute errors add only for a sum or difference.',
    },
    {
      mistake: 'Quoting four figures from readings with a 5 per cent '
        + 'error.',
      why: 'The second figure is already uncertain. '
        + 'The error decides how many figures may be written.',
    },
  ],

  extension:
    'Dimensions can suggest a formula as well as check one. '
    + 'Guess that the period of a pendulum depends on its length and on g. '
    + 'The only combination of L and L over T squared '
    + 'that gives a time is the square root of length over g, '
    + 'so the period must be a constant times that square root. '
    + 'The constant turns out to be 2 pi, '
    + 'and dimensions could never have found it, '
    + 'but everything else in the formula came from this argument alone, '
    + 'before any experiment. '
    + 'The method is used seriously in fluid mechanics and in '
    + 'aerodynamics.',

  questions: [
    {
      id: 'mphys-1',
      ask: 'Which of these is a vector?',
      kind: 'choice',
      options: ['velocity', 'mass', 'energy'],
      answer: 'velocity',
      teach: 'A vector has a direction. '
        + 'Mass and energy have size only.',
      level: 2,
    },
    {
      id: 'mphys-2',
      ask: 'The dimensions of acceleration are:',
      kind: 'choice',
      options: [
        'L T to the power minus 2',
        'L T to the power minus 1',
        'M L T to the power minus 2',
      ],
      answer: 'L T to the power minus 2',
      teach: 'A change of speed per time, so length over time, over time '
        + 'again. '
        + 'The last option is force.',
      level: 3,
    },
    {
      id: 'mphys-3',
      ask: 'A micrometer reads 0.02 mm with its jaws closed. '
        + 'This is an example of:',
      kind: 'choice',
      options: [
        'a systematic error',
        'a random error',
        'a parallax error',
      ],
      answer: 'a systematic error',
      teach: 'It shifts every reading the same way, '
        + 'so averaging cannot remove it. '
        + 'Subtract it.',
      level: 4,
    },
    {
      id: 'mphys-4',
      ask: 'A mass has a 2 per cent error and a volume a 3 per cent error. '
        + 'The percentage error in the density is:',
      kind: 'numeric',
      options: [],
      answer: '5',
      teach: 'For a quotient the percentage errors add: 2 plus 3.',
      level: 4,
    },
    {
      id: 'mphys-5',
      ask: 'A dimensional check cannot detect:',
      kind: 'choice',
      options: [
        'a wrong dimensionless constant',
        'a missing unit',
        'a term with the wrong dimensions',
      ],
      answer: 'a wrong dimensionless constant',
      teach: 'A pure number has no dimensions, '
        + 'so 7 a t squared passes the check that half a t squared passes.',
      level: 5,
    },
  ],
})

/* ── kinematics ──────────────────────────────────────────────────────────── */

teach({
  topicId: 'kinematics-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Kinematics describes motion without asking what causes it. '
      + 'For constant acceleration: v equals u plus a t, '
      + 's equals u t plus half a t squared, '
      + 'and v squared equals u squared plus 2 a s. '
      + 'On a displacement time graph the gradient is the velocity. '
      + 'On a velocity time graph the gradient is the acceleration '
      + 'and the area is the displacement.',
    method: [
      'Choose a positive direction and keep it.',
      'List u, v, a, t and s, and find the one neither given nor wanted.',
      'Choose the equation that omits it.',
      'On a graph, use the gradient for a rate and the area for a total.',
      'For a vertical throw, take g as negative if up is positive.',
    ],
  },

  idea:
    'Kinematics describes how a body moves, '
    + 'without asking what makes it move. '
    + 'Displacement is the change in position, with a direction. '
    + 'Velocity is the rate of change of displacement, '
    + 'and acceleration is the rate of change of velocity. '
    + 'All three are vectors. '
    + 'For motion with constant acceleration in a straight line, '
    + 'with u the initial velocity, v the final velocity, a the '
    + 'acceleration, '
    + 't the time and s the displacement, three equations hold: '
    + 'v equals u plus a t; '
    + 's equals u t plus half a t squared; '
    + 'and v squared equals u squared plus 2 a s. '
    + 'A fourth form is useful: '
    + 's equals half the sum of u and v, times t, '
    + 'which is the average velocity times the time. '
    + 'For a freely falling body, a equals g, about 9.8 or 10 metres per '
    + 'second squared, '
    + 'directed downwards. '
    + 'On a displacement time graph the gradient at a point is the velocity, '
    + 'and a curve means the velocity is changing. '
    + 'On a velocity time graph the gradient is the acceleration '
    + 'and the area between the graph and the time axis is the '
    + 'displacement. '
    + 'Area below the axis counts as negative displacement.',

  mechanism:
    'The three equations are one idea written three ways, '
    + 'and seeing that removes the need to remember which to use. '
    + 'Each equation leaves out exactly one of the five quantities: '
    + 'the first has no s, the second no v, the third no t. '
    + 'So list the five letters, fill in the three you are given, '
    + 'mark the one you want, '
    + 'and the fifth is the one to avoid. '
    + 'Choose the equation that omits it. '
    + 'This is mechanical, it takes ten seconds, '
    + 'and it is the single most useful habit in the topic. '
    + 'Now the graph, which at elective level is examined harder '
    + 'than the equations are. '
    + 'The gradient of a velocity time graph is a change in velocity '
    + 'divided by a change in time, '
    + 'which is exactly the definition of acceleration, '
    + 'so reading a gradient is not a trick, it is the definition. '
    + 'The area is less obvious and worth one line of reasoning. '
    + 'For constant velocity the area is a rectangle, '
    + 'velocity times time, which is the distance. '
    + 'For changing velocity, cut the area into thin strips, '
    + 'each so narrow that the velocity hardly changes across it, '
    + 'so each strip is a small distance. '
    + 'Add the strips and you have the whole distance. '
    + 'That is why the area works whatever the shape of the graph, '
    + 'and it is the sentence to write when a question asks why. '
    + 'Here are the three places marks go. '
    + 'The first is sign. '
    + 'For a ball thrown upwards, take up as positive, '
    + 'so u is positive, a is minus 10, '
    + 'and the displacement is positive while the ball is above the hand. '
    + 'At the top, v is zero. '
    + 'Learners write a as plus 10 and get a ball that speeds up as it '
    + 'rises. '
    + 'State the positive direction in words at the start of the answer, '
    + 'and the signs follow. '
    + 'The second is distance against displacement. '
    + 'A ball thrown up 20 m and caught again has travelled 40 m '
    + 'and has a displacement of zero. '
    + 'The equations give displacement. '
    + 'A question asking for total distance needs the two halves added '
    + 'separately, '
    + 'and an area below the time axis must be taken as negative '
    + 'for displacement and as positive for distance. '
    + 'The third is the curved displacement time graph. '
    + 'The gradient of a curve must be found from a tangent drawn at the '
    + 'point, '
    + 'not from the two end points of the whole graph. '
    + 'Taking the end points gives an average velocity, '
    + 'which is a different quantity and a different answer. '
    + 'Draw the tangent, mark two clear points on it, '
    + 'and show the division. '
    + 'The tangent is worth a mark by itself because it shows the method. '
    + 'What has to be written down is the equation chosen, '
    + 'then the substitution with units, then the answer with unit and sign. '
    + 'Where there is no ticker tape timer or set of light gates, '
    + 'nothing examinable is lost: '
    + 'a printed tape or a table of readings gives the same practice, '
    + 'and the skill tested is finding the velocity between successive '
    + 'intervals '
    + 'and seeing that a constant increase means constant acceleration.',

  recap:
    'You have found speed as distance over time '
    + 'and read a distance time graph. '
    + 'This adds direction, sign, '
    + 'and the use of the gradient and the area as exact operations.',

  method: [
    'State the positive direction.',
    'Convert everything to SI units.',
    'List u, v, a, t, s with what you know.',
    'Identify the quantity neither given nor asked for.',
    'Use the equation that omits it.',
    'Write the equation, the substitution and the answer on separate lines.',
    'For a graph, use the gradient for acceleration '
      + 'and the area for displacement.',
    'On a curve, draw a tangent for an instantaneous value.',
    'Decide whether the question wants distance or displacement.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A car starting from rest reaches 25 metres per second in 10 '
        + 'seconds. '
        + 'Find the acceleration and the distance covered.',
      steps: [
        'u is 0, v is 25, t is 10.',
        'For a, use v equals u plus a t: 25 equals 10 a, so a is 2.5.',
        'For s, use s equals half the sum of u and v, times t.',
        's equals half times 25 times 10.',
      ],
      answer: 'The acceleration is 2.5 metres per second squared '
        + 'and the distance is 125 m.',
    },
    {
      level: 4,
      ask: 'A stone is thrown vertically upwards at 20 metres per second. '
        + 'Taking g as 10 and up as positive, '
        + 'find the greatest height and the time to return to the thrower.',
      steps: [
        'Up is positive, so a is minus 10.',
        'At the top v is 0, u is 20.',
        'Use v squared equals u squared plus 2 a s: '
          + '0 equals 400 minus 20 s, so s is 20.',
        'For the time up, v equals u plus a t: 0 equals 20 minus 10 t, '
          + 'so t is 2.',
        'The motion is symmetrical, so the return takes the same time.',
      ],
      answer: 'The greatest height is 20 m, '
        + 'reached after 2 s, '
        + 'and the stone returns to the thrower after 4 s. '
        + 'Its displacement then is zero, '
        + 'though the distance travelled is 40 m.',
    },
    {
      level: 4,
      ask: 'A velocity time graph shows a body moving at plus 10 metres per '
        + 'second '
        + 'for 4 s, then at minus 10 metres per second for 4 s. '
        + 'Find its displacement and the distance travelled.',
      steps: [
        'First area: 10 times 4, which is plus 40 m.',
        'Second area is below the axis: 10 times 4, counted as minus 40 m.',
        'Displacement is the sum of the signed areas.',
        'Distance ignores the signs.',
      ],
      answer: 'The displacement is zero and the distance is 80 m. '
        + 'The body returned to where it started. '
        + 'Reading the second area as positive would give 80 m of '
        + 'displacement, '
        + 'which is wrong.',
    },
    {
      level: 5,
      ask: 'A displacement time graph is a curve. '
        + 'Explain how to find the velocity at a particular instant, '
        + 'and why the two end points of the graph will not do.',
      steps: [
        'The gradient of the graph is the velocity.',
        'On a curve the gradient changes from point to point.',
        'A tangent at a point has the same gradient as the curve there.',
        'The chord between the end points has the gradient of the average.',
      ],
      answer: 'Draw a tangent to the curve at that instant, '
        + 'take two well separated points on the tangent, '
        + 'and divide the change in displacement by the change in time. '
        + 'Using the end points of the whole graph gives the average '
        + 'velocity '
        + 'over the whole journey, which is a different quantity. '
        + 'Showing the tangent on the graph earns a mark '
        + 'because it shows which method was used.',
    },
  ],

  traps: [
    {
      mistake: 'Taking g as positive for a body thrown upwards '
        + 'when up is positive.',
      why: 'The acceleration is downwards while the velocity is upwards, '
        + 'so one of them is negative. '
        + 'State the positive direction first.',
    },
    {
      mistake: 'Reporting displacement when the question asked for '
        + 'distance.',
      why: 'A ball thrown up and caught has zero displacement '
        + 'and twice the height as distance.',
    },
    {
      mistake: 'Counting an area below the time axis as positive '
        + 'displacement.',
      why: 'Below the axis the velocity is negative, '
        + 'so the body is moving back. '
        + 'That area subtracts.',
    },
    {
      mistake: 'Finding the gradient of a curve from its end points.',
      why: 'That gives the average over the interval. '
        + 'An instantaneous velocity needs a tangent at the point.',
    },
  ],

  extension:
    'Relative velocity is kinematics with a change of viewpoint. '
    + 'If two trotros travel the same road at 60 and 50 kilometres per hour '
    + 'in the same direction, '
    + 'the faster one gains at 10 kilometres per hour, '
    + 'and to a passenger in the slower one it is creeping past. '
    + 'In opposite directions the approach speed is 110. '
    + 'The rule is to subtract the velocities as vectors, '
    + 'and it explains why rain appears to fall slanting '
    + 'when you run through it, '
    + 'even though it is falling straight down.',

  questions: [
    {
      id: 'kin-1',
      ask: 'On a velocity time graph, the gradient gives the:',
      kind: 'choice',
      options: ['acceleration', 'displacement', 'speed'],
      answer: 'acceleration',
      teach: 'A change of velocity over a change of time, '
        + 'which is the definition of acceleration. '
        + 'The area gives displacement.',
      level: 3,
    },
    {
      id: 'kin-2',
      ask: 'A body falls from rest for 4 s with g equal to 10. '
        + 'Its displacement in metres is:',
      kind: 'numeric',
      options: [],
      answer: '80',
      teach: 's equals half a t squared: half times 10 times 16.',
      level: 4,
    },
    {
      id: 'kin-3',
      ask: 'A stone thrown up at 30 metres per second, with g equal to 10, '
        + 'reaches its highest point after how many seconds?',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'At the top v is 0, so 0 equals 30 minus 10 t.',
      level: 4,
    },
    {
      id: 'kin-4',
      ask: 'Which equation would you use given u, a and t to find s?',
      kind: 'choice',
      options: [
        's equals u t plus half a t squared',
        'v equals u plus a t',
        'v squared equals u squared plus 2 a s',
      ],
      answer: 's equals u t plus half a t squared',
      teach: 'It is the one that leaves out v, '
        + 'which is the quantity you neither have nor want.',
      level: 3,
    },
    {
      id: 'kin-5',
      ask: 'To find the velocity at one instant from a curved displacement '
        + 'time graph:',
      kind: 'choice',
      options: [
        'draw a tangent at that point and find its gradient',
        'join the two end points of the graph',
        'measure the area under the curve',
      ],
      answer: 'draw a tangent at that point and find its gradient',
      teach: 'The end points give the average velocity. '
        + 'The area under a displacement time graph has no useful meaning.',
      level: 5,
    },
  ],
})

/* ── Newton's laws and momentum ──────────────────────────────────────────── */

teach({
  topicId: 'newton-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The first law: a body stays at rest or at constant velocity '
      + 'unless a resultant force acts. '
      + 'The second law: the resultant force equals the rate of change of '
      + 'momentum, '
      + 'which for constant mass is F equals m a. '
      + 'The third law: forces come in equal and opposite pairs '
      + 'on different bodies. '
      + 'Momentum is mass times velocity, '
      + 'and the total momentum of a closed system is conserved.',
    method: [
      'Draw the body and mark every force on it.',
      'Find the resultant along the direction of motion.',
      'Apply F equals m a to get the acceleration.',
      'For a collision, choose a positive direction '
        + 'and set total momentum before equal to total momentum after.',
      'Keep the signs: momentum is a vector.',
    ],
  },

  idea:
    'Newton gave three laws of motion. '
    + 'The first says a body at rest stays at rest, '
    + 'and a body moving at constant velocity keeps that velocity, '
    + 'unless a resultant force acts on it. '
    + 'The tendency to keep doing so is called inertia, '
    + 'and inertia is measured by mass. '
    + 'The second says the resultant force on a body '
    + 'equals the rate of change of its momentum. '
    + 'When the mass is constant this becomes force equals mass times '
    + 'acceleration, '
    + 'and one newton is the force that gives one kilogram '
    + 'an acceleration of one metre per second squared. '
    + 'The third says that if A exerts a force on B, '
    + 'B exerts an equal and opposite force on A. '
    + 'The two forces act on different bodies, '
    + 'which is why they do not cancel each other out. '
    + 'Momentum is mass times velocity, '
    + 'measured in kilogram metres per second, and it is a vector. '
    + 'Impulse is force times the time it acts, '
    + 'and it equals the change in momentum. '
    + 'The principle of conservation of momentum states '
    + 'that in the absence of an external force '
    + 'the total momentum of a system before an event '
    + 'equals the total momentum after it. '
    + 'A collision in which kinetic energy is also conserved is elastic. '
    + 'One in which the bodies stick together, '
    + 'or in which kinetic energy is lost as heat and sound, is inelastic. '
    + 'Momentum is conserved in both.',

  mechanism:
    'The third law is the most quoted and the least understood, '
    + 'so start there. '
    + 'If the forces are equal and opposite, '
    + 'why does anything ever accelerate? '
    + 'Because the two forces act on different bodies. '
    + 'When you push a wall, the wall pushes you, '
    + 'and those two forces never appear in the same calculation. '
    + 'To find your acceleration you add up only the forces on you. '
    + 'This is the sentence that fixes it: '
    + 'an action and reaction pair acts on two bodies, '
    + 'so it can never be a pair of balanced forces on one body. '
    + 'A learner who writes that the forces cancel, '
    + 'so the cart cannot move when the horse pulls it, '
    + 'has made exactly this error, '
    + 'and the examination asks it in that form. '
    + 'Next, why momentum and not just force. '
    + 'The second law in its original form is about momentum, '
    + 'and that form is the one that survives when mass changes, '
    + 'as it does for a rocket burning fuel. '
    + 'It also leads straight to conservation. '
    + 'In a collision the two bodies push on each other '
    + 'with equal and opposite forces, by the third law, '
    + 'for exactly the same length of time. '
    + 'So each receives an equal and opposite impulse, '
    + 'so each gains an equal and opposite change in momentum, '
    + 'so the total change is zero. '
    + 'Conservation of momentum is the third law and the second law '
    + 'put together, not a separate fact, '
    + 'and saying so in an answer is worth a mark. '
    + 'Now the places marks are lost, and they are mostly about sign. '
    + 'The first is a head on collision. '
    + 'A 3 kg body moving at 4 metres per second east '
    + 'meets a 2 kg body moving at 5 metres per second west. '
    + 'Taking east as positive, the total momentum is '
    + '3 times 4 plus 2 times minus 5, which is 12 minus 10, so plus 2. '
    + 'Adding the two as 22 is the commonest error in the topic, '
    + 'and it comes from forgetting that momentum is a vector. '
    + 'Write the chosen positive direction down in words first, '
    + 'then put the sign on each velocity as you list it. '
    + 'The second is confusing momentum with kinetic energy. '
    + 'In an inelastic collision kinetic energy is lost '
    + 'while momentum is conserved, '
    + 'and a question that says show that the collision is inelastic '
    + 'is asking you to compute the kinetic energy before and after '
    + 'and show the second is smaller. '
    + 'Writing that momentum was lost is wrong: '
    + 'momentum is never lost in a closed system. '
    + 'The energy went to heat, sound and deformation. '
    + 'The third is the weight and the mass. '
    + 'In F equals m a the m is the mass in kilograms. '
    + 'A body of weight 50 N on Earth has a mass of 5 kg, '
    + 'and putting 50 into the formula gives an acceleration ten times too '
    + 'small. '
    + 'Divide the weight by g to get the mass, '
    + 'and show that line. '
    + 'What has to be written down is the law being used, by name, '
    + 'the free body diagram with every force marked, '
    + 'the resultant as its own line, '
    + 'then the substitution, then the answer with its unit. '
    + 'For a collision, two lines: '
    + 'total momentum before, computed with signs, '
    + 'and total momentum after, equated to it. '
    + 'That is the structure the marking scheme follows.',

  recap:
    'You know that a push can start something moving '
    + 'and that heavier things are harder to start. '
    + 'This makes both exact, '
    + 'and adds a quantity that is conserved through a collision.',

  method: [
    'Draw the body alone and mark every force acting on it.',
    'State the positive direction.',
    'Add the forces with signs to get the resultant.',
    'If a weight is given, divide by g to get the mass.',
    'Apply F equals m a, naming the second law.',
    'For a collision, write the total momentum before, with signs.',
    'Write the total momentum after, with signs, and set the two equal.',
    'Solve for the unknown velocity.',
    'If asked about elasticity, compare the kinetic energy before and '
      + 'after.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A resultant force of 12 N acts on a body of mass 4 kg. '
        + 'Find the acceleration.',
      steps: [
        'By the second law, F equals m a.',
        '12 equals 4 a.',
      ],
      answer: 'a equals 3 metres per second squared, '
        + 'in the direction of the force.',
    },
    {
      level: 4,
      ask: 'A box of weight 200 N is pulled along the ground '
        + 'by a horizontal force of 60 N, '
        + 'against a friction force of 20 N. '
        + 'Taking g as 10, find its acceleration.',
      steps: [
        'Mass is weight over g: 200 over 10, which is 20 kg.',
        'Take the direction of pull as positive.',
        'Resultant is 60 minus 20, which is 40 N.',
        'F equals m a: 40 equals 20 a.',
      ],
      answer: '2 metres per second squared. '
        + 'Using 200 as the mass would give 0.2, ten times too small, '
        + 'because 200 N is a weight and not a mass.',
    },
    {
      level: 4,
      ask: 'A 3 kg body moving east at 4 metres per second '
        + 'collides head on with a 2 kg body moving west at 5 metres per '
        + 'second. '
        + 'They stick together. '
        + 'Find their common velocity.',
      steps: [
        'Take east as positive.',
        'Momentum before: 3 times 4 plus 2 times minus 5.',
        'That is 12 minus 10, which is plus 2 kilogram metres per second.',
        'After, the combined mass is 5 kg moving at v.',
        '5 v equals 2.',
      ],
      answer: 'v equals 0.4 metres per second east. '
        + 'The positive sign shows the direction is east, '
        + 'which is the direction of the larger momentum. '
        + 'Adding the momenta as 22 would give 4.4, which is wrong, '
        + 'because momentum is a vector.',
    },
    {
      level: 5,
      ask: 'For the collision above, show that it is inelastic.',
      steps: [
        'Kinetic energy is half m v squared.',
        'Before: half times 3 times 16 is 24 J, '
          + 'plus half times 2 times 25 is 25 J, so 49 J in all.',
        'After: half times 5 times 0.4 squared, '
          + 'which is half times 5 times 0.16, so 0.4 J.',
        'Compare the two.',
      ],
      answer: 'The kinetic energy falls from 49 J to 0.4 J, '
        + 'so 48.6 J was lost as heat, sound and deformation. '
        + 'Since kinetic energy is not conserved, the collision is '
        + 'inelastic. '
        + 'Momentum was conserved throughout, '
        + 'and saying that momentum was lost would be wrong.',
    },
  ],

  traps: [
    {
      mistake: 'Saying action and reaction cancel, so nothing can '
        + 'accelerate.',
      why: 'They act on two different bodies. '
        + 'Only the forces on one body are added to find its acceleration.',
    },
    {
      mistake: 'Adding momenta in a head on collision without signs.',
      why: 'Momentum is a vector. '
        + 'State a positive direction and give the opposing velocity a minus '
        + 'sign.',
    },
    {
      mistake: 'Saying momentum is lost in an inelastic collision.',
      why: 'Momentum is conserved in every collision in a closed system. '
        + 'It is kinetic energy that is lost.',
    },
    {
      mistake: 'Substituting a weight in newtons as the mass in F equals m '
        + 'a.',
      why: 'Divide the weight by g first. '
        + 'A weight of 200 N is a mass of 20 kg when g is 10.',
    },
  ],

  extension:
    'A seat belt and an air bag are the impulse equation applied to '
    + 'safety. '
    + 'In a crash the change in momentum is fixed: '
    + 'the passenger must come from the car speed to rest. '
    + 'Since impulse equals force times time, '
    + 'and the impulse is fixed, '
    + 'the only way to reduce the force is to lengthen the time. '
    + 'A belt that stretches slightly and an air bag that gives way '
    + 'both stretch the stopping time from milliseconds to tenths of a '
    + 'second, '
    + 'and so divide the force by a large factor. '
    + 'A crash helmet does the same for a rider, '
    + 'and the same reasoning explains why you bend your knees on landing.',

  questions: [
    {
      id: 'newt-1',
      ask: 'A force of 20 N acts on a mass of 5 kg. '
        + 'The acceleration in metres per second squared is:',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'F equals m a, so a equals 20 over 5.',
      level: 2,
    },
    {
      id: 'newt-2',
      ask: 'Action and reaction do not cancel because they:',
      kind: 'choice',
      options: [
        'act on different bodies',
        'are not really equal',
        'act at different times',
      ],
      answer: 'act on different bodies',
      teach: 'They are equal and opposite, but on two bodies. '
        + 'Only forces on the same body can balance.',
      level: 4,
    },
    {
      id: 'newt-3',
      ask: 'In an inelastic collision, what is conserved?',
      kind: 'choice',
      options: [
        'momentum but not kinetic energy',
        'kinetic energy but not momentum',
        'neither',
      ],
      answer: 'momentum but not kinetic energy',
      teach: 'Momentum is conserved in every collision in a closed system. '
        + 'Kinetic energy goes to heat, sound and deformation.',
      level: 4,
    },
    {
      id: 'newt-4',
      ask: 'A body of weight 300 N has a mass, with g equal to 10, '
        + 'in kilograms of:',
      kind: 'numeric',
      options: [],
      answer: '30',
      teach: 'Mass is weight over g. '
        + 'Only the mass may be substituted into F equals m a.',
      level: 3,
    },
    {
      id: 'newt-5',
      ask: 'Why does an air bag reduce the force on a passenger?',
      kind: 'choice',
      options: [
        'It lengthens the time over which the momentum changes',
        'It reduces the change in momentum',
        'It makes the collision elastic',
      ],
      answer: 'It lengthens the time over which the momentum changes',
      teach: 'Impulse equals force times time, '
        + 'and the change in momentum is fixed, '
        + 'so a longer time means a smaller force.',
      level: 5,
    },
  ],
})

/* ── temperature and thermometry ─────────────────────────────────────────── */

teach({
  topicId: 'temperature-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Temperature measures how hot a body is, '
      + 'not how much heat it contains. '
      + 'A thermometer uses a property that changes evenly with '
      + 'temperature. '
      + 'Calibration fixes two known points '
      + 'and divides the interval between them. '
      + 'The Celsius scale uses melting ice at 0 and steam at 100. '
      + 'The kelvin scale starts at absolute zero, '
      + 'and kelvin equals degrees Celsius plus 273.',
    method: [
      'Name the thermometric property being used.',
      'Mark the lower fixed point and the upper fixed point.',
      'Divide the interval into equal parts.',
      'For an unknown temperature, '
        + 'use the fraction of the way between the fixed points.',
      'Convert to kelvin by adding 273.',
    ],
  },

  idea:
    'Temperature is a measure of how hot or cold a body is, '
    + 'and it decides the direction in which heat will flow: '
    + 'always from the hotter body to the cooler one. '
    + 'It is not the same as heat. '
    + 'A cup of boiling water is hotter than a bath of warm water '
    + 'but contains far less heat energy. '
    + 'A thermometer works by using a thermometric property, '
    + 'which is a measurable property that changes with temperature: '
    + 'the length of a mercury column, '
    + 'the pressure of a fixed mass of gas, '
    + 'the resistance of a wire, '
    + 'or the voltage of a thermocouple. '
    + 'Calibration means marking the scale. '
    + 'Two fixed points are needed. '
    + 'The lower fixed point is the temperature of pure melting ice, '
    + 'called 0 degrees Celsius. '
    + 'The upper fixed point is the temperature of steam '
    + 'above water boiling at normal atmospheric pressure, '
    + 'called 100 degrees Celsius. '
    + 'The interval between them is the fundamental interval, '
    + 'and it is divided into one hundred equal degrees. '
    + 'On the kelvin or absolute scale, '
    + 'zero is the lowest temperature possible, '
    + 'and a temperature in kelvin is the Celsius value plus 273. '
    + 'The degree is the same size on both scales, '
    + 'so a rise of 1 degree Celsius is a rise of 1 kelvin.',

  mechanism:
    'Begin with the distinction that the whole topic rests on. '
    + 'Heat is energy and temperature is not. '
    + 'Put a small cup of water and a large bucket of water '
    + 'on the same fire for the same time. '
    + 'Both receive about the same heat, '
    + 'and the cup becomes much hotter, '
    + 'because the same energy is spread among far fewer particles. '
    + 'So temperature is about the average energy of a particle, '
    + 'while heat is about the total. '
    + 'This is why the question what is the difference between heat and '
    + 'temperature '
    + 'wants average against total, '
    + 'and why an answer that says temperature is how hot it is '
    + 'and heat is how hot it is, more, earns nothing. '
    + 'Now calibration, and why two fixed points are needed and not one. '
    + 'A thermometer measures a length, or a resistance, '
    + 'and that number means nothing by itself. '
    + 'To turn it into a temperature '
    + 'you need to know the reading at one known temperature, '
    + 'which fixes where the scale starts, '
    + 'and the reading at a second known temperature, '
    + 'which fixes how big a degree is. '
    + 'One point gives a starting place with no scale, '
    + 'which is like knowing where a ruler begins '
    + 'without knowing the size of a centimetre. '
    + 'That is the answer to the standard question, '
    + 'and it is a reason rather than a fact to recall. '
    + 'The calculation follows directly. '
    + 'If the ice point reading is L naught, '
    + 'the steam point reading is L one hundred, '
    + 'and the reading at the unknown temperature is L, '
    + 'then the temperature in degrees Celsius is '
    + 'L minus L naught, over L one hundred minus L naught, times 100. '
    + 'It is simply the fraction of the way up the fundamental interval. '
    + 'Here is where marks are lost. '
    + 'The first is using the raw reading instead of the difference. '
    + 'A thermometer with the ice point at 2 cm, the steam point at 22 cm, '
    + 'and the mercury at 7 cm '
    + 'does not read 7 over 22 times 100. '
    + 'It reads 5 over 20 times 100, which is 25 degrees Celsius. '
    + 'Both the top and the bottom must be measured from the ice point, '
    + 'because the scale starts there and not at the end of the glass. '
    + 'The second is the fixed points themselves. '
    + 'The lower point is melting ice, not cold water, '
    + 'and it must be pure, '
    + 'because salt lowers the melting point and the calibration shifts. '
    + 'The upper point is steam, not boiling water, '
    + 'because dissolved substances raise the boiling point of the water '
    + 'while the steam above it stays at the temperature of pure steam. '
    + 'And the pressure must be normal atmospheric, '
    + 'because water boils cooler on a mountain. '
    + 'Each of those three conditions is a mark in a question '
    + 'that asks why the upper fixed point is taken in steam. '
    + 'The third is the kelvin conversion. '
    + 'Add 273 to go from Celsius to kelvin, and subtract to come back. '
    + 'But a temperature change needs no conversion at all: '
    + 'a rise of 20 degrees Celsius is a rise of 20 kelvin, '
    + 'because the degrees are the same size. '
    + 'Adding 273 to a change is a common and avoidable error. '
    + 'Ask whether the number is a temperature or a change in temperature. '
    + 'What has to be written down is the thermometric property named, '
    + 'the two fixed points named with their conditions, '
    + 'the formula, the substitution, and the answer with its unit. '
    + 'Where a school has only a factory marked thermometer '
    + 'and cannot calibrate one, '
    + 'the examinable part is entirely available: '
    + 'the reasoning about two fixed points, '
    + 'the conditions on each, '
    + 'and the calculation from printed lengths. '
    + 'What the apparatus adds is seeing the mercury sit still at 0 '
    + 'in a funnel of melting ice, which is worth doing if it can be done.',

  recap:
    'You have used a thermometer and read degrees Celsius off it. '
    + 'This asks where those degrees came from, '
    + 'and separates temperature from heat.',

  method: [
    'Name the thermometric property the instrument uses.',
    'Identify the lower fixed point: pure melting ice.',
    'Identify the upper fixed point: steam at normal atmospheric pressure.',
    'Measure the reading at each fixed point.',
    'Subtract the ice point reading from both the unknown and the steam '
      + 'reading.',
    'Divide and multiply by 100 for degrees Celsius.',
    'Add 273 for kelvin, but only for a temperature and not for a change.',
    'State the conditions that make each fixed point reliable.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Convert 27 degrees Celsius to kelvin, '
        + 'and 350 kelvin to degrees Celsius.',
      steps: [
        'Kelvin equals Celsius plus 273.',
        'Celsius equals kelvin minus 273.',
      ],
      answer: '27 degrees Celsius is 300 K. '
        + '350 K is 77 degrees Celsius.',
    },
    {
      level: 3,
      ask: 'Explain the difference between heat and temperature, '
        + 'using a cup and a bucket of water.',
      steps: [
        'Both are heated by the same fire for the same time.',
        'The cup holds fewer particles.',
        'The same energy among fewer particles means more energy each.',
      ],
      answer: 'Heat is the total energy transferred, '
        + 'while temperature is a measure of the average energy '
        + 'of the particles. '
        + 'The cup becomes hotter than the bucket on the same fire, '
        + 'because the energy is shared among fewer particles, '
        + 'even though the bucket ends up holding more heat energy in all.',
    },
    {
      level: 4,
      ask: 'In a mercury thermometer the column is 2 cm long in melting ice '
        + 'and 22 cm long in steam. '
        + 'What temperature does a length of 7 cm indicate?',
      steps: [
        'Fundamental interval: 22 minus 2, which is 20 cm.',
        'Rise above the ice point: 7 minus 2, which is 5 cm.',
        'Fraction of the interval: 5 over 20.',
        'Multiply by 100.',
      ],
      answer: '25 degrees Celsius. '
        + 'Using 7 over 22 times 100 would give about 32 degrees, '
        + 'which is wrong, because the scale is measured from the ice point '
        + 'and not from the end of the tube.',
    },
    {
      level: 5,
      ask: 'Why is the upper fixed point taken in the steam above boiling '
        + 'water '
        + 'rather than in the water itself, '
        + 'and why must two fixed points be used rather than one?',
      steps: [
        'Dissolved substances raise the boiling point of water.',
        'The steam above it stays at the temperature of pure steam.',
        'One fixed point fixes only where the scale starts.',
        'A second fixes the size of a degree.',
      ],
      answer: 'In steam, because impurities dissolved in the water '
        + 'raise its boiling point, '
        + 'while the steam above remains at the temperature of pure steam, '
        + 'so the point is reproducible. '
        + 'The pressure must also be normal atmospheric, '
        + 'since water boils at a lower temperature where the pressure is '
        + 'lower. '
        + 'Two fixed points are needed because one gives only the zero of '
        + 'the scale; '
        + 'the second is what fixes the size of one degree.',
    },
  ],

  traps: [
    {
      mistake: 'Dividing the raw reading by the steam reading.',
      why: 'Both lengths are measured from the ice point. '
        + 'Subtract the ice point reading from each before dividing.',
    },
    {
      mistake: 'Taking the lower fixed point as cold water.',
      why: 'It is pure melting ice, which holds a fixed temperature '
        + 'while it melts. '
        + 'Cold water can be at any temperature.',
    },
    {
      mistake: 'Adding 273 to a temperature change.',
      why: 'The degree is the same size on both scales, '
        + 'so a change of 20 degrees Celsius is a change of 20 K.',
    },
    {
      mistake: 'Saying heat and temperature are the same thing.',
      why: 'Heat is total energy transferred; '
        + 'temperature is the average energy per particle. '
        + 'A cup of boiling water is hotter than a warm bath '
        + 'and holds far less heat.',
    },
  ],

  extension:
    'A thermocouple is two different metals joined at both ends. '
    + 'Hold the two joins at different temperatures '
    + 'and a small voltage appears. '
    + 'That voltage is the thermometric property. '
    + 'The join can be made very small. '
    + 'So it reacts almost at once, '
    + 'and it can sit in a furnace where mercury would boil. '
    + 'This is why industry uses thermocouples '
    + 'and resistance thermometers instead. '
    + 'A liquid in glass thermometer is limited '
    + 'by the freezing and boiling points of its own liquid.',

  questions: [
    {
      id: 'temp-1',
      ask: '27 degrees Celsius in kelvin is:',
      kind: 'numeric',
      options: [],
      answer: '300',
      teach: 'Add 273 to the Celsius value.',
      level: 2,
    },
    {
      id: 'temp-2',
      ask: 'The lower fixed point of the Celsius scale is the temperature '
        + 'of:',
      kind: 'choice',
      options: [
        'pure melting ice',
        'cold water',
        'ice in a freezer',
      ],
      answer: 'pure melting ice',
      teach: 'Melting ice holds a fixed temperature while it melts, '
        + 'so the point can be reproduced anywhere.',
      level: 3,
    },
    {
      id: 'temp-3',
      ask: 'A thermometer reads 4 cm in ice and 24 cm in steam. '
        + 'What temperature does 9 cm indicate, in degrees Celsius?',
      kind: 'numeric',
      options: [],
      answer: '25',
      teach: '9 minus 4 is 5, over 24 minus 4 which is 20, times 100.',
      level: 4,
    },
    {
      id: 'temp-4',
      ask: 'Why are two fixed points needed to calibrate a thermometer?',
      kind: 'choice',
      options: [
        'One fixes the zero and the other fixes the size of a degree',
        'To check the instrument twice',
        'Because ice and steam are easy to obtain',
      ],
      answer: 'One fixes the zero and the other fixes the size of a degree',
      teach: 'A single point is like knowing where a ruler starts '
        + 'without knowing the length of a centimetre.',
      level: 5,
    },
    {
      id: 'temp-5',
      ask: 'A temperature rise of 15 degrees Celsius is a rise of how many '
        + 'kelvin?',
      kind: 'numeric',
      options: [],
      answer: '15',
      teach: 'The degrees are the same size, '
        + 'so a change needs no conversion. '
        + 'Only a temperature needs the 273.',
      level: 4,
    },
  ],
})

/* ── heat transfer ───────────────────────────────────────────────────────── */

teach({
  topicId: 'heat-transfer-physics',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Heat moves in three ways. '
      + 'Conduction passes energy from particle to particle '
      + 'without the particles travelling, '
      + 'and it is fastest in metals because their free electrons carry it. '
      + 'Convection moves the heated fluid itself, '
      + 'because warm fluid is less dense and rises. '
      + 'Radiation travels as infrared waves and needs no medium.',
    method: [
      'Ask whether the material is solid, fluid, or absent.',
      'Solid means conduction; fluid means convection; '
        + 'vacuum means radiation only.',
      'For conduction, use the rate equation with area, '
        + 'temperature difference and thickness.',
      'For a design question, say which mode you are blocking and how.',
    ],
  },

  idea:
    'Heat flows from a hotter place to a cooler one by three mechanisms. '
    + 'In conduction, a particle that gains energy vibrates more '
    + 'and passes energy to its neighbours, '
    + 'so the energy travels while the particles stay put. '
    + 'Metals conduct far better than non-metals '
    + 'because they contain free electrons that carry energy quickly '
    + 'through the lattice. '
    + 'The rate of conduction through a slab '
    + 'is proportional to the area, '
    + 'proportional to the temperature difference across it, '
    + 'and inversely proportional to its thickness, '
    + 'with a constant of proportionality called the thermal conductivity. '
    + 'In convection, the fluid itself moves. '
    + 'The part that is heated expands, becomes less dense, and rises, '
    + 'while cooler fluid sinks to take its place, '
    + 'setting up a convection current. '
    + 'Convection happens only in liquids and gases, '
    + 'because a solid cannot flow. '
    + 'In radiation, energy travels as electromagnetic waves, '
    + 'mostly infrared, '
    + 'and needs no material at all, '
    + 'which is how the Sun heats the Earth across empty space. '
    + 'A dull black surface is the best absorber and the best emitter. '
    + 'A shiny silver surface is the best reflector and the poorest '
    + 'emitter. '
    + 'A vacuum flask blocks all three: '
    + 'a vacuum between its walls stops conduction and convection, '
    + 'and silvered surfaces reflect radiation back.',

  mechanism:
    'The three modes are distinguished by one question: '
    + 'what moves? '
    + 'In conduction the energy moves and the matter does not. '
    + 'In convection the matter moves and carries the energy with it. '
    + 'In radiation nothing material moves at all. '
    + 'Ask that question and no answer can go wrong, '
    + 'which matters because the examination often gives a situation '
    + 'and asks which mode is at work. '
    + 'A metal spoon in hot soup: the spoon cannot flow, '
    + 'so the handle warms by conduction. '
    + 'A room warming above a coal pot: the air flows, so convection. '
    + 'Standing in the sun: nothing between you and it, so radiation. '
    + 'Now why metals conduct and wood does not, '
    + 'which is a favourite question. '
    + 'In a non-metal the only route is vibration passed from one particle '
    + 'to the next, '
    + 'which is slow. '
    + 'In a metal there are also free electrons, '
    + 'which travel through the whole lattice and deliver energy '
    + 'far from where they picked it up. '
    + 'So the answer is free electrons, named, '
    + 'and that word is the mark. '
    + 'The same fact explains an observation worth stating: '
    + 'a metal table top and a wooden table top in the same room '
    + 'are at the same temperature, '
    + 'yet the metal feels colder. '
    + 'It feels colder because it conducts heat away from your hand '
    + 'faster, '
    + 'not because it is colder. '
    + 'A question that asks why metal feels cold is testing this exactly, '
    + 'and the answer must say that the two are at the same temperature. '
    + 'Now the places marks are lost. '
    + 'The first is convection in a solid. '
    + 'Learners write that a metal rod heats by convection. '
    + 'It cannot: convection needs the material to flow. '
    + 'Similarly, nothing crosses a vacuum except radiation, '
    + 'so a question about a vacuum is a question about radiation. '
    + 'The second is the direction of a convection current. '
    + 'Warm fluid rises because it is less dense, not because heat rises. '
    + 'That is why a cooling element belongs at the top of a '
    + 'refrigerator, '
    + 'so cooled air sinks through the whole cabinet, '
    + 'and a heating element belongs at the bottom of a kettle, '
    + 'so warmed water rises and circulates. '
    + 'Put either in the wrong place and the fluid sits in layers. '
    + 'Explaining that placement is a standard five mark question, '
    + 'and the word density has to appear in the answer. '
    + 'The third is the conduction rate equation. '
    + 'The thickness is on the bottom, '
    + 'so doubling the thickness halves the rate. '
    + 'The area and the temperature difference are on the top, '
    + 'so doubling either doubles the rate. '
    + 'Learners reverse the thickness, '
    + 'and the check is common sense: '
    + 'a thicker wall must lose heat more slowly, '
    + 'or nobody would build a thick wall. '
    + 'Fourth, a point about black and shiny surfaces. '
    + 'A good absorber is also a good emitter. '
    + 'So a black kettle heats faster in the sun '
    + 'and also cools faster at night. '
    + 'This is not a contradiction, '
    + 'and a question that asks which surface to paint a solar water '
    + 'heater '
    + 'wants black for the collector '
    + 'and shiny for the storage tank. '
    + 'What has to be written down is the mode named, '
    + 'the mechanism in one sentence, '
    + 'and for a design question which mode each feature blocks. '
    + 'For the vacuum flask, four features and four reasons, '
    + 'and the marking scheme pays for the pairs: '
    + 'the vacuum stops conduction and convection, '
    + 'the silvering reflects radiation, '
    + 'the stopper stops convection out of the top, '
    + 'and the thin glass walls limit conduction through the neck. '
    + 'The practical work here needs almost nothing: '
    + 'a metal spoon and a wooden spoon in the same cup of hot water, '
    + 'a crystal of dye dropped into a beaker heated at one corner, '
    + 'and two tins, one black and one shiny, filled with hot water '
    + 'and timed as they cool. '
    + 'Those three experiments cover the whole topic '
    + 'and every school can do them.',

  recap:
    'You know that a metal spoon in hot soup becomes hot '
    + 'and that warm air rises. '
    + 'This names the three mechanisms, '
    + 'says what moves in each, '
    + 'and makes the conduction rate a calculation.',

  method: [
    'Ask what lies between the hot place and the cool place.',
    'If it is a solid, the mode is conduction.',
    'If it is a liquid or a gas free to move, the mode is convection.',
    'If it is a vacuum, the mode is radiation.',
    'For conduction, note that rate rises with area and temperature '
      + 'difference '
      + 'and falls with thickness.',
    'For convection, explain by density: warmed fluid is less dense and '
      + 'rises.',
    'For radiation, remember that a good absorber is a good emitter.',
    'For a design, pair each feature with the mode it blocks.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Name the mode of heat transfer in each case: '
        + 'the handle of a metal spoon in hot soup, '
        + 'a room warmed by a coal pot, '
        + 'and the Earth warmed by the Sun.',
      steps: [
        'A solid cannot flow.',
        'Air can flow.',
        'There is no medium between the Sun and the Earth.',
      ],
      answer: 'Conduction, convection and radiation respectively.',
    },
    {
      level: 3,
      ask: 'Explain why a metal bench feels colder than a wooden bench '
        + 'in the same room.',
      steps: [
        'Both have been in the same room, so both are at room temperature.',
        'Metal has free electrons and conducts well.',
        'It carries heat away from the hand quickly.',
      ],
      answer: 'They are at the same temperature. '
        + 'The metal feels colder because it conducts heat away from the '
        + 'hand '
        + 'much faster, owing to its free electrons, '
        + 'so the hand loses heat quickly and registers cold. '
        + 'Wood is a poor conductor, so the hand stays warm.',
    },
    {
      level: 4,
      ask: 'Explain why the cooling element of a refrigerator '
        + 'is placed at the top '
        + 'and the heating element of a kettle at the bottom.',
      steps: [
        'Cooled air contracts, becomes denser and sinks.',
        'Placed at the top, it sinks through the whole cabinet.',
        'Heated water expands, becomes less dense and rises.',
        'Placed at the bottom, it rises and circulates.',
      ],
      answer: 'Air cooled at the top becomes denser and sinks, '
        + 'so a current carries the cooling through the whole cabinet. '
        + 'Water heated at the bottom becomes less dense and rises, '
        + 'so a current carries the heat through the whole kettle. '
        + 'Reversing either would leave the fluid in still layers, '
        + 'with no convection current set up.',
    },
    {
      level: 5,
      ask: 'Describe the features of a vacuum flask '
        + 'and say which mode of heat transfer each one blocks. '
        + 'Then say why the same flask keeps cold drinks cold.',
      steps: [
        'The vacuum has no particles, so no conduction and no convection '
          + 'across it.',
        'Silvered surfaces are poor emitters and good reflectors.',
        'The stopper closes the top.',
        'The glass walls are thin and joined only at the neck.',
      ],
      answer: 'The vacuum between the double walls stops conduction and '
        + 'convection, '
        + 'since both need particles. '
        + 'The silvered surfaces reflect radiation back, '
        + 'and being shiny they are poor emitters. '
        + 'The stopper prevents convection currents out of the top. '
        + 'The thin glass walls, touching only at the neck, '
        + 'limit the little conduction that remains. '
        + 'It keeps cold drinks cold for the same reason: '
        + 'the flask blocks heat transfer in both directions, '
        + 'so heat cannot get in either.',
    },
  ],

  traps: [
    {
      mistake: 'Saying heat travels through a solid rod by convection.',
      why: 'Convection needs the material itself to move, '
        + 'and a solid cannot flow. '
        + 'In a solid the mode is conduction.',
    },
    {
      mistake: 'Explaining a convection current by saying heat rises.',
      why: 'The warmed fluid rises because it is less dense. '
        + 'The word density is what earns the mark.',
    },
    {
      mistake: 'Putting the thickness on the top of the conduction rate '
        + 'equation.',
      why: 'A thicker wall conducts more slowly, '
        + 'so the thickness divides. '
        + 'Area and temperature difference multiply.',
    },
    {
      mistake: 'Saying a metal bench is colder than a wooden one beside '
        + 'it.',
      why: 'Both are at room temperature. '
        + 'The metal only removes heat from your hand faster.',
    },
  ],

  extension:
    'A roof in Ghana can be designed around these three modes. '
    + 'A shiny aluminium sheet reflects the midday radiation '
    + 'instead of absorbing it, '
    + 'so less heat enters. '
    + 'A ceiling below it traps a layer of air, '
    + 'and a trapped layer cannot set up a convection current, '
    + 'so the air becomes an insulator rather than a carrier. '
    + 'Vents at the top of the gable let the hottest air escape '
    + 'by the convection it does manage. '
    + 'Three cheap choices, one for each mode, '
    + 'and together they make a measurable difference '
    + 'to the temperature of a classroom at two in the afternoon.',

  questions: [
    {
      id: 'heat-1',
      ask: 'Which mode of heat transfer needs no medium?',
      kind: 'choice',
      options: ['radiation', 'conduction', 'convection'],
      answer: 'radiation',
      teach: 'Radiation travels as infrared waves, '
        + 'which is how the Sun heats the Earth across space.',
      level: 2,
    },
    {
      id: 'heat-2',
      ask: 'Metals conduct heat well because they contain:',
      kind: 'choice',
      options: ['free electrons', 'more neutrons', 'tighter bonds'],
      answer: 'free electrons',
      teach: 'Free electrons carry energy through the lattice, '
        + 'far faster than vibration passed between neighbours.',
      level: 3,
    },
    {
      id: 'heat-3',
      ask: 'Warm water rises in a kettle because it:',
      kind: 'choice',
      options: [
        'becomes less dense',
        'becomes heavier',
        'gains more particles',
      ],
      answer: 'becomes less dense',
      teach: 'It expands, so the same mass fills more space. '
        + 'Saying heat rises is not an explanation.',
      level: 4,
    },
    {
      id: 'heat-4',
      ask: 'If the thickness of a wall is doubled, '
        + 'the rate of conduction through it is:',
      kind: 'choice',
      options: ['halved', 'doubled', 'unchanged'],
      answer: 'halved',
      teach: 'Thickness is on the bottom of the rate equation. '
        + 'A thicker wall loses heat more slowly.',
      level: 4,
    },
    {
      id: 'heat-5',
      ask: 'The vacuum in a vacuum flask prevents:',
      kind: 'choice',
      options: [
        'conduction and convection',
        'radiation only',
        'all three modes',
      ],
      answer: 'conduction and convection',
      teach: 'Both need particles, and a vacuum has none. '
        + 'Radiation crosses a vacuum, '
        + 'which is why the walls are also silvered.',
      level: 5,
    },
  ],
})
