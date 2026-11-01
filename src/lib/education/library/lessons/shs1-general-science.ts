/**
 * Stored lessons for SHS 1 General Science.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── What this subject is, and why it is taught this way ───────────────────
 *
 * General Science is the one science paper every SHS learner sits, whatever
 * else is on the timetable. It carries a chemist's topics, a biologist's
 * topics and a physicist's topics in the same syllabus, which can make it
 * look like three subjects sharing a cover. It is not. The thread is the
 * method: a claim about the world is worth something only when somebody can
 * say how it was tested, with what, and to what precision. That is why the
 * first two topics in this file are variables and measurement, and why every
 * topic after them is written so the learner can say where the number came
 * from.
 *
 * ── What changes at SHS ───────────────────────────────────────────────────
 *
 * JHS science asks what happens. SHS science asks what happens and why, and
 * the why carries marks of its own. So each lesson here says what has to be
 * written down: the unit beside the number, the enzyme named beside the
 * reaction, the law quoted beside the step, the controlled variables listed
 * one by one rather than waved at. A WASSCE marking scheme awards a mark per
 * named thing, and a learner who knows the science but writes none of it
 * down is marked as though they did not.
 *
 * ── The equipment question ────────────────────────────────────────────────
 *
 * Several of these topics name apparatus a school may not own. Where that
 * happens the lesson teaches the examinable part on paper, and says plainly
 * where the real instrument is needed. A ticker tape timer, a vernier
 * caliper and a water bath are each named in that spirit. Nothing here
 * pretends the equipment is in the cupboard.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── variables and fair testing ──────────────────────────────────────────── */

teach({
  topicId: 'variables-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An experiment compares. '
      + 'The independent variable is the one thing you change. '
      + 'The dependent variable is the thing you measure. '
      + 'Everything else is held the same, and those are the controlled '
      + 'variables. '
      + 'Change one thing at a time, or the result proves nothing.',
    method: [
      'Write the hypothesis as a prediction with a direction.',
      'Name the independent variable and the dependent variable.',
      'Name each controlled variable, one by one.',
      'Set up a control that gets no treatment.',
      'Repeat each reading and take the mean.',
    ],
  },

  idea:
    'A scientific investigation is a comparison. '
    + 'You change one thing, you measure another, '
    + 'and you keep the rest the same. '
    + 'The thing you change on purpose is the independent variable. '
    + 'The thing you measure is the dependent variable. '
    + 'Every other condition that could affect the result '
    + 'is a controlled variable, and it is held constant. '
    + 'A hypothesis is a prediction you can test, '
    + 'written so that a result could show it false. '
    + 'A control experiment is a set up that gets no treatment at all, '
    + 'so you have something to compare against. '
    + 'Readings are repeated and averaged, '
    + 'because one reading cannot tell a real effect from an accident.',

  mechanism:
    'The reason for changing one thing at a time is simple, '
    + 'and it is the whole topic. '
    + 'If two things change together, the result cannot say which one caused '
    + 'it, so the experiment has measured nothing. '
    + 'Take a real example. '
    + 'A farmer at Ejura wants to know whether NPK fertiliser raises maize '
    + 'yield. '
    + 'He puts fertiliser on one plot and none on another, '
    + 'and the fertilised plot yields more. '
    + 'That looks like proof. '
    + 'Now suppose he also planted a different maize variety on the '
    + 'fertilised plot. '
    + 'The higher yield may be the fertiliser, or the variety, '
    + 'or the two together, and nothing in the result can separate them. '
    + 'The experiment is spoiled, and no amount of careful measuring after '
    + 'the fact can repair it. '
    + 'This is where the marks are. '
    + 'A WASSCE question says: state three variables you would keep '
    + 'constant. '
    + 'It awards one mark for each named variable. '
    + 'Writing that you would keep everything else the same earns nothing, '
    + 'because it names nothing. '
    + 'Same variety, same plot size, same planting date, same watering: '
    + 'that is three marks and a spare. '
    + 'So the habit to build is listing them, not intending them. '
    + 'Write the hypothesis with a direction too. '
    + 'Fertiliser affects yield is not a hypothesis, because no result can '
    + 'contradict it. '
    + 'Maize given NPK fertiliser will yield more per hectare than maize '
    + 'given none is a hypothesis, '
    + 'because a lower yield would show it false. '
    + 'Last, the control. '
    + 'Without the unfertilised plot you learn the yield of fertilised '
    + 'maize and nothing else, '
    + 'because you have no idea what it would have been without.',

  recap:
    'You have done experiments where the teacher said what to change and '
    + 'what to measure. '
    + 'This asks you to decide that yourself, and to defend the choice.',

  method: [
    'State the question as a prediction with a direction.',
    'Name the independent variable, and say the values you will set.',
    'Name the dependent variable, and say how you will measure it.',
    'List each controlled variable by name.',
    'Describe the control that receives no treatment.',
    'Say how many repeats you will take.',
    'Draw the results table before you start, with units in the headings.',
    'Take the mean of the repeats, and compare against the control.',
  ],

  worked: [
    {
      level: 2,
      ask: 'A learner tests whether sugar dissolves faster in hot water. '
        + 'Name the independent and dependent variables.',
      steps: [
        'The thing changed on purpose is the water temperature.',
        'The thing measured is the time taken to dissolve.',
      ],
      answer: 'Independent variable: the temperature of the water. '
        + 'Dependent variable: the time taken for the sugar to dissolve.',
    },
    {
      level: 3,
      ask: 'In the same experiment, name three controlled variables.',
      steps: [
        'Ask what else could change the dissolving time.',
        'Mass of sugar, volume of water, and whether it is stirred.',
      ],
      answer: 'The mass of sugar, the volume of water, and the stirring. '
        + 'Each must be the same in every trial. '
        + 'Grain size counts as a fourth.',
    },
    {
      level: 4,
      ask: 'A trader claims a new feed makes layers produce more eggs. '
        + 'Design a fair test on a poultry farm at Dormaa.',
      steps: [
        'Hypothesis: hens on the new feed will lay more eggs per week than '
          + 'hens on the usual feed.',
        'Independent variable: the type of feed.',
        'Dependent variable: eggs laid per hen per week.',
        'Controlled: breed, age of the birds, housing, water, light hours, '
          + 'mass of feed given.',
        'Control group: a pen kept on the usual feed.',
        'Use twenty hens per pen, not one, and run it for four weeks.',
      ],
      answer: 'Two pens of twenty hens of the same breed and age, '
        + 'housed and watered alike, '
        + 'one on the new feed and one on the usual feed, '
        + 'counting eggs per hen per week for four weeks. '
        + 'Compare the means.',
    },
    {
      level: 5,
      ask: 'A learner concludes that a herbal mixture cures malaria, '
        + 'because ten people who drank it recovered. '
        + 'State two reasons the conclusion is unsafe.',
      steps: [
        'There is no control, so nobody knows what ten untreated people '
          + 'would have done.',
        'Nothing was held constant: they may have taken other medicine.',
        'Malaria often resolves with treatment the patients already had.',
      ],
      answer: 'There was no control group, '
        + 'so recovery cannot be attributed to the mixture. '
        + 'Other treatments were not excluded, '
        + 'so more than one variable changed. '
        + 'Ten is also too few to separate an effect from chance.',
    },
  ],

  traps: [
    {
      mistake: 'Writing that all other conditions were kept constant.',
      why: 'The marking scheme awards a mark per named variable, '
        + 'and that sentence names none. '
        + 'List them.',
    },
    {
      mistake: 'Confusing the controlled variables with the control '
        + 'experiment.',
      why: 'Controlled variables are conditions held the same in every set '
        + 'up. '
        + 'The control is a whole set up that gets no treatment.',
    },
    {
      mistake: 'A hypothesis with no direction, such as light affects '
        + 'growth.',
      why: 'No result can contradict it, so it cannot be tested. '
        + 'Say which way the effect should go.',
    },
    {
      mistake: 'Taking one reading and calling it the result.',
      why: 'One reading cannot be told apart from an accident. '
        + 'Repeat and take the mean.',
    },
  ],

  extension:
    'Some variables cannot be held constant, only matched. '
    + 'In a study of two schools you cannot give both the same teachers, '
    + 'so you match the classes on size, age and previous marks instead, '
    + 'and you say in the report that you did. '
    + 'This is how medical trials and farm trials are actually run, '
    + 'and the honest reporting of what could not be controlled '
    + 'is part of the science, not an apology for it.',

  questions: [
    {
      id: 'var-1',
      ask: 'The variable you change on purpose is called the:',
      kind: 'choice',
      options: [
        'independent variable',
        'dependent variable',
        'controlled variable',
      ],
      answer: 'independent variable',
      teach: 'You set it independently. '
        + 'What you measure depends on it, so that one is dependent.',
      level: 2,
    },
    {
      id: 'var-2',
      ask: 'Why must only one variable be changed at a time?',
      kind: 'choice',
      options: [
        'Otherwise you cannot say which change caused the result',
        'Because it takes less time',
        'Because the apparatus can only measure one thing',
      ],
      answer: 'Otherwise you cannot say which change caused the result',
      teach: 'Two changes together give a result that belongs to neither. '
        + 'The experiment has measured nothing.',
      level: 3,
    },
    {
      id: 'var-3',
      ask: 'In a test of fertiliser on maize yield, the control plot is the '
        + 'one that:',
      kind: 'choice',
      options: [
        'receives no fertiliser',
        'receives the most fertiliser',
        'is measured most carefully',
      ],
      answer: 'receives no fertiliser',
      teach: 'The control shows what would have happened anyway. '
        + 'Without it the treated yield means nothing on its own.',
      level: 4,
    },
    {
      id: 'var-4',
      ask: 'Which of these is a testable hypothesis?',
      kind: 'choice',
      options: [
        'Seedlings in full sun grow taller than seedlings in shade',
        'Sunlight is important for seedlings',
        'Seedlings are affected by light',
      ],
      answer: 'Seedlings in full sun grow taller than seedlings in shade',
      teach: 'It predicts a direction, so a shorter result would show it '
        + 'false. '
        + 'The other two cannot be contradicted.',
      level: 4,
    },
    {
      id: 'var-5',
      ask: 'How many marks does listing four controlled variables earn when '
        + 'the question asks for three?',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'Three, the number asked for. '
        + 'A spare protects you if one is rejected, '
        + 'but it does not add marks.',
      level: 3,
    },
  ],
})

/* ── measurement and units ───────────────────────────────────────────────── */

teach({
  topicId: 'measurement-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Every physical quantity is a number and a unit, and the unit is half '
      + 'the answer. '
      + 'The SI base units are the metre, kilogram, second, ampere, kelvin, '
      + 'mole and candela. '
      + 'A reading is only as precise as the instrument allows, '
      + 'so an answer is given to a sensible number of figures and no more.',
    method: [
      'Choose the instrument whose smallest division suits the size of the '
        + 'thing.',
      'Record the reading with its unit.',
      'Take the uncertainty as half the smallest division.',
      'Work in SI units before substituting.',
      'Round the answer to the figures of the least precise measurement.',
    ],
  },

  idea:
    'A physical quantity has a number and a unit, '
    + 'and a number written without its unit is not an answer. '
    + 'The SI system fixes seven base units: '
    + 'the metre for length, the kilogram for mass, the second for time, '
    + 'the ampere for current, the kelvin for temperature, '
    + 'the mole for amount of substance and the candela for luminous '
    + 'intensity. '
    + 'Every other unit is derived from these. '
    + 'The newton is one kilogram metre per second squared. '
    + 'Prefixes scale them: kilo is a thousand, centi is a hundredth, '
    + 'milli is a thousandth, micro is a millionth. '
    + 'No measurement is exact. '
    + 'For an instrument with a scale, '
    + 'the uncertainty is taken as half the smallest division, '
    + 'so a metre rule marked in millimetres gives a length '
    + 'to plus or minus 0.5 mm. '
    + 'An answer is then quoted to the precision the measurements support, '
    + 'which is the number of significant figures in the least precise one.',

  mechanism:
    'Significant figures are not a tidiness rule, they are a claim, '
    + 'and that is why they are marked. '
    + 'Writing 6.72 says you know the area to the nearest hundredth. '
    + 'Here is where it goes wrong. '
    + 'A block measures 3.2 cm by 2.1 cm with a metre rule. '
    + 'The calculator gives 6.72 cm squared. '
    + 'But 3.2 cm means somewhere between 3.15 and 3.25, '
    + 'and 2.1 cm means between 2.05 and 2.15. '
    + 'Multiply the extremes and the area lies between 6.46 and 6.99. '
    + 'So the second decimal place is invented, '
    + 'and even the first is shaky. '
    + 'Two significant figures is the honest answer: 6.7 cm squared. '
    + 'Copying eight digits off a calculator claims a precision the ruler '
    + 'never had, and a marking scheme takes a mark for it. '
    + 'The second place marks go is the unit. '
    + 'A density of 2.7 is wrong. '
    + '2.7 g per cm cubed is right, '
    + 'and 2700 kg per m cubed is the same answer in SI. '
    + 'The two look nothing alike, which is the point: '
    + 'without the unit the number says nothing. '
    + 'The third place is converting after instead of before. '
    + 'If a question gives a length in centimetres and a mass in grams '
    + 'and asks for an answer in SI units, '
    + 'convert both at the start and substitute once. '
    + 'Substituting mixed units and fixing it at the end '
    + 'is where the power of ten is lost. '
    + 'What has to be written down at SHS is the instrument and its '
    + 'precision. '
    + 'I measured the diameter with a vernier caliper, '
    + 'reading to 0.01 cm, is worth a mark. '
    + 'I measured the diameter is not. '
    + 'If the school has no vernier caliper, '
    + 'the examinable part is still learnable: '
    + 'you must know that it reads to 0.01 cm, '
    + 'that a micrometer screw gauge reads to 0.001 cm, '
    + 'and that a metre rule reads to 0.1 cm, '
    + 'and you must be able to say which suits a wire, a coin or a desk. '
    + 'The real instrument is needed only to practise the reading itself.',

  recap:
    'You have measured length, mass and time and written the unit each '
    + 'time. '
    + 'This adds two things: which unit is the SI one, '
    + 'and how many figures the measurement actually earns.',

  method: [
    'Decide what quantity is wanted and in which unit.',
    'Choose the instrument whose smallest division is small enough.',
    'Read the scale, with your eye square to it to avoid parallax.',
    'Write the reading with its unit.',
    'State the uncertainty as half the smallest division.',
    'Convert every given quantity to SI units before substituting.',
    'Substitute and calculate.',
    'Round to the significant figures of the least precise measurement.',
    'Write the unit on the final answer.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Convert 2.5 km to metres and 450 g to kilograms.',
      steps: [
        'Kilo means a thousand, so multiply by 1000.',
        'A gram is a thousandth of a kilogram, so divide by 1000.',
      ],
      answer: '2.5 km is 2500 m. 450 g is 0.45 kg.',
    },
    {
      level: 3,
      ask: 'A metre rule is marked in millimetres. '
        + 'A pencil reads 148 mm. '
        + 'Write the length with its uncertainty, in centimetres.',
      steps: [
        'Smallest division is 1 mm, so uncertainty is 0.5 mm.',
        '148 mm is 14.8 cm, and 0.5 mm is 0.05 cm.',
      ],
      answer: '14.8 cm plus or minus 0.05 cm.',
    },
    {
      level: 4,
      ask: 'A stone of mass 54 g displaces 20 cm cubed of water. '
        + 'Find its density in g per cm cubed, to a sensible precision.',
      steps: [
        'Density is mass divided by volume.',
        '54 divided by 20 is 2.7.',
        'Both measurements have two significant figures, so keep two.',
      ],
      answer: '2.7 g per cm cubed. '
        + 'In SI units that is 2700 kg per m cubed.',
    },
    {
      level: 5,
      ask: 'A learner times 20 swings of a pendulum as 31.4 s with a '
        + 'stopwatch reading to 0.1 s. '
        + 'Find the period, and say why 20 swings were timed rather than '
        + 'one.',
      steps: [
        'Period is 31.4 divided by 20, which is 1.57 s.',
        'The stopwatch uncertainty of 0.1 s is shared over 20 swings.',
        'So the uncertainty in the period is 0.1 divided by 20, '
          + 'which is 0.005 s.',
      ],
      answer: 'The period is 1.57 s. '
        + 'Timing 20 swings divides the reading uncertainty by 20, '
        + 'so the period is known far more precisely '
        + 'than timing one swing would allow.',
    },
  ],

  traps: [
    {
      mistake: 'Giving the answer to every digit the calculator shows.',
      why: 'It claims a precision the instrument never had. '
        + 'Round to the figures of the least precise measurement.',
    },
    {
      mistake: 'Leaving the unit off the final answer.',
      why: 'A number alone is not a physical quantity, '
        + 'and the unit usually carries its own mark.',
    },
    {
      mistake: 'Substituting centimetres and grams into a formula that '
        + 'wants SI units.',
      why: 'The power of ten is lost and cannot be found again. '
        + 'Convert everything first, then substitute once.',
    },
    {
      mistake: 'Reading a scale from an angle.',
      why: 'That is parallax, and it shifts the reading by a whole division '
        + 'or more. '
        + 'Put your eye square to the mark.',
    },
  ],

  extension:
    'Checking an equation by its units is the fastest error check in '
    + 'physics, and it is free. '
    + 'In the equation distance equals speed times time, '
    + 'the right hand side is metres per second times seconds, '
    + 'which leaves metres, and metres is what distance is. '
    + 'If the units of the two sides do not match, '
    + 'the equation is wrong whatever the numbers do. '
    + 'This is called dimensional analysis '
    + 'and it will catch a rearranged formula written down from memory.',

  questions: [
    {
      id: 'meas-1',
      ask: 'The SI unit of mass is the:',
      kind: 'choice',
      options: ['kilogram', 'gram', 'newton'],
      answer: 'kilogram',
      teach: 'The kilogram, unusually, is the base unit even though it '
        + 'carries a prefix. '
        + 'The newton is force, not mass.',
      level: 2,
    },
    {
      id: 'meas-2',
      ask: 'A metre rule is marked in millimetres. '
        + 'Its uncertainty in millimetres is:',
      kind: 'numeric',
      options: [],
      answer: '0.5',
      teach: 'Half the smallest division. '
        + 'The division is 1 mm, so the uncertainty is 0.5 mm.',
      level: 3,
    },
    {
      id: 'meas-3',
      ask: 'A length of 3.2 cm times a width of 2.1 cm should be given as:',
      kind: 'choice',
      options: [
        '6.7 cm squared',
        '6.72 cm squared',
        '6.720 cm squared',
      ],
      answer: '6.7 cm squared',
      teach: 'Both measurements have two significant figures, '
        + 'so the answer earns two. '
        + 'The extra digits are invented.',
      level: 4,
    },
    {
      id: 'meas-4',
      ask: 'Which instrument would you choose to measure the diameter of a '
        + 'thin wire?',
      kind: 'choice',
      options: [
        'A micrometer screw gauge',
        'A metre rule',
        'A measuring cylinder',
      ],
      answer: 'A micrometer screw gauge',
      teach: 'It reads to 0.001 cm. '
        + 'A metre rule reads to 0.1 cm, which is larger than the wire.',
      level: 4,
    },
    {
      id: 'meas-5',
      ask: 'Why is the time for 20 swings taken rather than for one?',
      kind: 'choice',
      options: [
        'The reading uncertainty is divided by 20',
        'The pendulum swings faster after a while',
        'Twenty is easier to count',
      ],
      answer: 'The reading uncertainty is divided by 20',
      teach: 'The stopwatch error sits in the total, '
        + 'so dividing the total by 20 divides the error by 20 too.',
      level: 5,
    },
  ],
})

/* ── atomic structure and bonding ────────────────────────────────────────── */

teach({
  topicId: 'atomic-structure-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An atom has a nucleus of protons and neutrons, '
      + 'with electrons in shells around it. '
      + 'The atomic number is the number of protons. '
      + 'The mass number is protons plus neutrons. '
      + 'Electrons fill the shells 2, then 8, then 8. '
      + 'A metal gives electrons away and a non-metal takes them, '
      + 'which is ionic bonding. '
      + 'Two non-metals share, which is covalent bonding.',
    method: [
      'Write the atomic number, so you know the electrons.',
      'Fill the shells 2, 8, 8 and write the arrangement.',
      'Count the outer electrons.',
      'Few outer electrons means lose them; nearly eight means gain them.',
      'Metal with non-metal is ionic; non-metal with non-metal is covalent.',
    ],
  },

  idea:
    'An atom has a small dense nucleus holding protons and neutrons, '
    + 'with electrons moving around it in shells. '
    + 'A proton carries one positive charge and a neutron carries none, '
    + 'so the nucleus is positive. '
    + 'An electron carries one negative charge '
    + 'and has almost no mass compared with the other two. '
    + 'The atomic number is the number of protons, '
    + 'and it is what makes an element that element. '
    + 'In a neutral atom the number of electrons equals the atomic number. '
    + 'The mass number is the protons plus the neutrons. '
    + 'Isotopes are atoms of the same element with different numbers of '
    + 'neutrons, '
    + 'so the same atomic number and a different mass number. '
    + 'Electrons fill the shells in order: '
    + 'two in the first, eight in the second, eight in the third. '
    + 'An atom that loses electrons becomes a positive ion, called a cation. '
    + 'An atom that gains them becomes a negative ion, called an anion. '
    + 'An ionic bond is the attraction between a cation and an anion. '
    + 'A covalent bond is a shared pair of electrons. '
    + 'In a metal the outer electrons are free to move through a lattice of '
    + 'positive ions, which is metallic bonding.',

  mechanism:
    'Everything in this topic follows from one fact: '
    + 'a full outer shell is stable, '
    + 'and an atom will lose, gain or share electrons to reach one. '
    + 'The noble gases already have it, which is why they hardly react. '
    + 'Follow it through for sodium chloride, the salt from Ada. '
    + 'Sodium has 11 electrons, arranged 2, 8, 1. '
    + 'It is one electron past a full shell. '
    + 'Losing one is far easier than gaining seven, '
    + 'so it loses one and becomes Na with a single positive charge. '
    + 'Chlorine has 17 electrons, arranged 2, 8, 7. '
    + 'It is one short, so it gains one and becomes Cl with a single '
    + 'negative charge. '
    + 'One atom of each, and the charges balance, which is why the formula '
    + 'is NaCl. '
    + 'Now magnesium chloride. '
    + 'Magnesium is 2, 8, 2, so it loses two and carries two positive '
    + 'charges. '
    + 'Each chlorine takes only one, so two chlorines are needed, '
    + 'and the formula is MgCl2. '
    + 'This is the single most common lost mark in the topic: '
    + 'writing MgCl because the question mentioned one magnesium and one '
    + 'chlorine. '
    + 'The formula is not the number of atoms you were told about, '
    + 'it is the ratio that makes the charges cancel. '
    + 'The second lost mark is mass number against atomic number. '
    + 'Chlorine written as 35 over 17 Cl has 17 protons, 17 electrons '
    + 'and 35 minus 17, which is 18 neutrons. '
    + 'Reading 35 as the proton number makes every answer after it wrong, '
    + 'including the electron arrangement. '
    + 'The bottom number is always the smaller one, and it is the protons. '
    + 'The third is overfilling a shell. '
    + 'Potassium has 19 electrons. '
    + 'The arrangement is 2, 8, 8, 1, not 2, 8, 9. '
    + 'At this level the third shell takes eight and then the next shell '
    + 'starts. '
    + 'What has to be written down is the reason beside the step. '
    + 'Do not write only that sodium forms a positive ion. '
    + 'Write that sodium has one electron in its outer shell, '
    + 'so it loses that electron to attain the stable arrangement of neon. '
    + 'That sentence is worth a mark on its own in a WASSCE answer, '
    + 'and it is the sentence most learners leave out.',

  recap:
    'You have met the atom as the smallest particle of an element, '
    + 'and elements joining to make compounds. '
    + 'This says what is inside the atom, '
    + 'and why particular elements join in particular numbers.',

  method: [
    'Write the symbol with its mass number on top and atomic number below.',
    'Protons equal the atomic number.',
    'Electrons equal the protons, for a neutral atom.',
    'Neutrons equal the mass number minus the atomic number.',
    'Fill the shells 2, 8, 8 and write the arrangement with commas.',
    'Count the outer electrons.',
    'Decide: lose if few, gain if nearly eight, share if both are '
      + 'non-metals.',
    'Write the ion with its charge, and name the stable arrangement reached.',
    'Balance the charges to get the formula.',
  ],

  worked: [
    {
      level: 2,
      ask: 'An atom is written as 23 over 11 Na. '
        + 'State its protons, neutrons and electrons.',
      steps: [
        'Atomic number 11, so 11 protons.',
        'Neutral atom, so 11 electrons.',
        'Neutrons are 23 minus 11.',
      ],
      answer: '11 protons, 12 neutrons, 11 electrons.',
    },
    {
      level: 3,
      ask: 'Write the electron arrangement of calcium, atomic number 20, '
        + 'and say what ion it forms.',
      steps: [
        '20 electrons: 2 in the first shell, 8 in the second, 8 in the '
          + 'third, 2 left.',
        'Arrangement 2, 8, 8, 2.',
        'Two outer electrons, so it loses both.',
      ],
      answer: '2, 8, 8, 2. '
        + 'It loses two electrons to reach the arrangement of argon, '
        + 'forming a calcium ion with two positive charges.',
    },
    {
      level: 4,
      ask: 'Explain the bonding in magnesium oxide, '
        + 'and give its formula. '
        + 'Magnesium is 12 and oxygen is 8.',
      steps: [
        'Magnesium is 2, 8, 2, so it loses two electrons.',
        'Oxygen is 2, 6, so it gains two electrons.',
        'Both reach the arrangement of neon.',
        'Two positive charges meet two negative charges, so one of each.',
      ],
      answer: 'Magnesium transfers its two outer electrons to oxygen. '
        + 'Each attains the stable arrangement of neon. '
        + 'The resulting ions attract, which is an ionic bond. '
        + 'The formula is MgO.',
    },
    {
      level: 5,
      ask: 'Explain why water is covalent while sodium chloride is ionic, '
        + 'and why only one of them conducts when molten.',
      steps: [
        'Hydrogen and oxygen are both non-metals, so neither will give '
          + 'electrons up easily.',
        'They share instead: two shared pairs, so two covalent bonds.',
        'Sodium is a metal and chlorine a non-metal, so electrons transfer.',
        'Conduction needs charged particles free to move.',
      ],
      answer: 'Water is two non-metals sharing electrons, '
        + 'so it is covalent and its molecules carry no net charge. '
        + 'Sodium chloride is a metal and a non-metal, '
        + 'so electrons transfer and ions form. '
        + 'Molten sodium chloride conducts because the ions are free to '
        + 'move. '
        + 'Water conducts hardly at all when pure, '
        + 'because it has no free ions.',
    },
  ],

  traps: [
    {
      mistake: 'Writing MgCl instead of MgCl2.',
      why: 'Magnesium gives up two electrons and each chlorine takes one, '
        + 'so two chlorines are needed for the charges to cancel.',
    },
    {
      mistake: 'Taking the top number of the symbol as the proton number.',
      why: 'The top number is the mass number. '
        + 'The lower, smaller number is the atomic number, '
        + 'and that is the protons.',
    },
    {
      mistake: 'Writing potassium as 2, 8, 9.',
      why: 'The third shell holds eight at this level. '
        + 'The nineteenth electron begins a fourth shell: 2, 8, 8, 1.',
    },
    {
      mistake: 'Saying an atom forms an ion without saying why.',
      why: 'The reason carries its own mark. '
        + 'Name the number of outer electrons '
        + 'and the stable arrangement being reached.',
    },
  ],

  extension:
    'Covalent bonds can be single, double or triple, '
    + 'depending on how many pairs are shared. '
    + 'Oxygen gas is O2 with a double bond, '
    + 'and nitrogen gas is N2 with a triple bond. '
    + 'The triple bond is why nitrogen is so unreactive, '
    + 'and that unreactivity is why fixing nitrogen into fertiliser '
    + 'takes so much energy and costs a farmer so much.',

  questions: [
    {
      id: 'atom-1',
      ask: 'The atomic number of an element is the number of:',
      kind: 'choice',
      options: ['protons', 'neutrons', 'protons and neutrons'],
      answer: 'protons',
      teach: 'Protons alone. '
        + 'Protons plus neutrons is the mass number.',
      level: 2,
    },
    {
      id: 'atom-2',
      ask: 'How many neutrons are in the atom written 40 over 18 Ar?',
      kind: 'numeric',
      options: [],
      answer: '22',
      teach: 'Mass number minus atomic number: 40 minus 18.',
      level: 3,
    },
    {
      id: 'atom-3',
      ask: 'The electron arrangement of an element with atomic number 19 '
        + 'is:',
      kind: 'choice',
      options: ['2, 8, 8, 1', '2, 8, 9', '2, 9, 8'],
      answer: '2, 8, 8, 1',
      teach: 'The first shell holds 2, the second 8, the third 8, '
        + 'and the last electron starts a fourth shell.',
      level: 4,
    },
    {
      id: 'atom-4',
      ask: 'The formula of the compound formed by magnesium and chlorine '
        + 'is:',
      kind: 'choice',
      options: ['MgCl2', 'MgCl', 'Mg2Cl'],
      answer: 'MgCl2',
      teach: 'Magnesium loses two electrons and each chlorine gains one, '
        + 'so two chlorines balance one magnesium.',
      level: 4,
    },
    {
      id: 'atom-5',
      ask: 'Molten sodium chloride conducts electricity because:',
      kind: 'choice',
      options: [
        'its ions are free to move',
        'its electrons are shared',
        'it is made of molecules',
      ],
      answer: 'its ions are free to move',
      teach: 'Conduction needs charge that can move. '
        + 'In the solid the ions are locked in the lattice, '
        + 'so the solid does not conduct.',
      level: 5,
    },
  ],
})

/* ── the periodic table ──────────────────────────────────────────────────── */

teach({
  topicId: 'periodic-table-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The periodic table is ordered by atomic number. '
      + 'A group is a column, and the group number tells you the outer '
      + 'electrons. '
      + 'A period is a row, and it tells you the number of shells. '
      + 'Metals are on the left, non-metals on the right. '
      + 'Members of a group react alike because they share an outer shell '
      + 'count.',
    method: [
      'Find the element by atomic number.',
      'Read the group for the outer electrons.',
      'Read the period for the number of shells.',
      'Left of the step means metal, right means non-metal.',
      'Predict the reaction from the outer electrons.',
    ],
  },

  idea:
    'The periodic table lists the elements in order of atomic number. '
    + 'A vertical column is a group and a horizontal row is a period. '
    + 'For the main groups, the group number is the number of electrons in '
    + 'the outer shell, '
    + 'and the period number is the number of shells in use. '
    + 'Group 1 is the alkali metals: one outer electron, very reactive, '
    + 'and more reactive further down. '
    + 'Group 2 is the alkaline earth metals, with two outer electrons. '
    + 'Group 7 is the halogens: seven outer electrons, very reactive, '
    + 'and less reactive further down. '
    + 'Group 0 is the noble gases, with a full outer shell, '
    + 'which is why they barely react. '
    + 'Between groups 2 and 3 sit the transition metals, '
    + 'which include iron, copper and zinc. '
    + 'Metals are on the left and in the middle, '
    + 'non-metals on the upper right, '
    + 'and a few elements on the dividing line behave as both and are called '
    + 'metalloids. '
    + 'Across a period the elements become less metallic. '
    + 'Down a group the atoms get larger, because another shell is added.',

  mechanism:
    'The table is not a list to memorise, it is a map, '
    + 'and the whole of its usefulness is that position predicts behaviour. '
    + 'The reason is the outer shell. '
    + 'Lithium, sodium and potassium are all in group 1 '
    + 'because each has one electron in its outer shell, '
    + 'and that one electron is what reacts. '
    + 'So all three react with water to give hydrogen and an alkali, '
    + 'and they do it more violently as you go down. '
    + 'Why more violently? '
    + 'Potassium has four shells and sodium has three, '
    + 'so the outer electron of potassium is further from the nucleus '
    + 'and held less tightly. '
    + 'It is given up more easily, so the reaction is faster. '
    + 'The halogens run the other way for exactly the same reason. '
    + 'They need to gain an electron, '
    + 'and a smaller atom pulls the incoming electron in more strongly. '
    + 'So fluorine is the most reactive halogen and iodine the least, '
    + 'which is the reverse of group 1 '
    + 'and the most common confusion in the topic. '
    + 'Do not memorise the two directions. '
    + 'Ask whether the element is giving an electron away or taking one, '
    + 'and the direction follows. '
    + 'A giving element is better at it when the electron is far out. '
    + 'A taking element is better at it when the nucleus is close. '
    + 'The second place marks go is treating the group number as the '
    + 'reactivity. '
    + 'Group 7 is not seven times as reactive as group 1. '
    + 'The number counts outer electrons and nothing else. '
    + 'What has to be written down is the position and the consequence '
    + 'together. '
    + 'Element X is in group 1, so it has one outer electron, '
    + 'so it loses that electron and forms an ion with one positive charge, '
    + 'so it is a reactive metal. '
    + 'Each so is a step the marking scheme can see. '
    + 'A WASSCE question often gives an element only as a letter '
    + 'with its atomic number, '
    + 'precisely so that memorised names are no help '
    + 'and the arrangement has to be worked out.',

  recap:
    'You need the electron arrangement, '
    + 'filling the shells 2, then 8, then 8. '
    + 'The group and period are read straight off that arrangement, '
    + 'so if you can write it you can place the element.',

  method: [
    'Write the electron arrangement from the atomic number.',
    'The last number in the arrangement is the group, for the main groups.',
    'The count of numbers in the arrangement is the period.',
    'Decide metal or non-metal from the outer electrons: '
      + 'few means metal, nearly eight means non-metal.',
    'State what ion it would form, with the charge.',
    'Predict the reaction, naming the group behaviour you are using.',
  ],

  worked: [
    {
      level: 2,
      ask: 'An element has atomic number 12. '
        + 'Give its group and period.',
      steps: [
        'Arrangement 2, 8, 2.',
        'Two outer electrons, so group 2.',
        'Three shells in use, so period 3.',
      ],
      answer: 'Group 2, period 3. It is magnesium.',
    },
    {
      level: 3,
      ask: 'Element Q has atomic number 17. '
        + 'Is it a metal or a non-metal, and what ion does it form?',
      steps: [
        'Arrangement 2, 8, 7.',
        'Seven outer electrons, one short of a full shell.',
        'It gains one electron rather than losing seven.',
      ],
      answer: 'A non-metal, in group 7. '
        + 'It gains one electron to reach the arrangement of argon, '
        + 'forming an ion with one negative charge.',
    },
    {
      level: 4,
      ask: 'Explain why potassium reacts with water more violently than '
        + 'sodium does.',
      steps: [
        'Both are group 1 with one outer electron.',
        'Potassium is 2, 8, 8, 1 and sodium is 2, 8, 1.',
        'The potassium outer electron is in a shell further from the '
          + 'nucleus.',
        'It is therefore held less tightly and lost more easily.',
      ],
      answer: 'Potassium has one more shell, '
        + 'so its outer electron is further from the nucleus '
        + 'and less strongly held. '
        + 'It is given up more readily, so the reaction is faster.',
    },
    {
      level: 5,
      ask: 'Elements R and S have atomic numbers 11 and 9. '
        + 'Predict the formula of the compound they form, '
        + 'and name the type of bonding.',
      steps: [
        'R is 2, 8, 1, group 1, a metal, loses one electron.',
        'S is 2, 7, group 7, a non-metal, gains one electron.',
        'One positive charge meets one negative charge.',
        'Metal with non-metal means electrons transfer.',
      ],
      answer: 'The formula is RS, one atom of each. '
        + 'The bonding is ionic, '
        + 'because R loses an electron to S '
        + 'and the resulting ions attract. '
        + 'R is sodium and S is fluorine, so the compound is NaF.',
    },
  ],

  traps: [
    {
      mistake: 'Saying reactivity always increases down a group.',
      why: 'It increases down group 1 and decreases down group 7. '
        + 'Ask whether the element gives an electron or takes one.',
    },
    {
      mistake: 'Reading the group number as a measure of reactivity.',
      why: 'It counts outer electrons. '
        + 'Group 7 is not more reactive than group 1 because seven is bigger '
        + 'than one.',
    },
    {
      mistake: 'Calling the noble gases unreactive without a reason.',
      why: 'The reason is the mark: their outer shell is already full, '
        + 'so they have no electron to lose and no space to gain one.',
    },
    {
      mistake: 'Counting the transition metals into the group numbering.',
      why: 'The outer electron rule is for the main groups. '
        + 'Iron, copper and zinc sit in the block between groups 2 and 3.',
    },
  ],

  extension:
    'The dividing line between metals and non-metals is where the useful '
    + 'elements for electronics sit. '
    + 'Silicon is a metalloid: it conducts a little, and how much can be '
    + 'controlled by adding traces of other elements. '
    + 'That controllable conduction is the whole basis of the '
    + 'semiconductor, and so of every phone in Ghana. '
    + 'The position in the table came first and the technology followed.',

  questions: [
    {
      id: 'ptab-1',
      ask: 'For a main group element, the group number tells you the number '
        + 'of:',
      kind: 'choice',
      options: [
        'electrons in the outer shell',
        'shells in the atom',
        'protons in the nucleus',
      ],
      answer: 'electrons in the outer shell',
      teach: 'The group is the outer electrons. '
        + 'The period is the number of shells.',
      level: 2,
    },
    {
      id: 'ptab-2',
      ask: 'An element with arrangement 2, 8, 8, 2 is in which period?',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'Count the shells in use. '
        + 'Four numbers means four shells, so period 4.',
      level: 3,
    },
    {
      id: 'ptab-3',
      ask: 'The most reactive halogen is:',
      kind: 'choice',
      options: ['fluorine', 'iodine', 'bromine'],
      answer: 'fluorine',
      teach: 'Halogens gain an electron, '
        + 'and the smallest atom pulls it in hardest. '
        + 'Fluorine is the smallest, so reactivity falls down the group.',
      level: 4,
    },
    {
      id: 'ptab-4',
      ask: 'Why do the noble gases hardly react?',
      kind: 'choice',
      options: [
        'Their outer shell is already full',
        'They are gases rather than solids',
        'They have no electrons',
      ],
      answer: 'Their outer shell is already full',
      teach: 'Reacting means losing, gaining or sharing electrons to fill a '
        + 'shell. '
        + 'Theirs is full, so there is nothing to gain.',
      level: 4,
    },
    {
      id: 'ptab-5',
      ask: 'Elements in the same group react alike because they have the '
        + 'same:',
      kind: 'choice',
      options: [
        'number of outer electrons',
        'number of neutrons',
        'atomic mass',
      ],
      answer: 'number of outer electrons',
      teach: 'The outer electrons are the ones that take part. '
        + 'That is why the table is arranged in columns at all.',
      level: 5,
    },
  ],
})

/* ── cells and cell division ─────────────────────────────────────────────── */

teach({
  topicId: 'cells-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The cell is the smallest unit of life. '
      + 'The nucleus holds the instructions, the mitochondria release '
      + 'energy, '
      + 'and the membrane controls what enters and leaves. '
      + 'A plant cell adds a cell wall, chloroplasts and a large vacuole. '
      + 'Mitosis makes two identical cells for growth and repair. '
      + 'Meiosis makes four cells with half the chromosomes, for gametes.',
    method: [
      'Name the structure, then say what it does.',
      'For plant against animal, look for wall, chloroplast and vacuole.',
      'For division, ask what the product is for.',
      'Growth and repair means mitosis; gametes means meiosis.',
    ],
  },

  idea:
    'The cell is the smallest unit that can carry out all the processes of '
    + 'life. '
    + 'The cell membrane surrounds it and controls what passes in and out. '
    + 'The cytoplasm is the jelly where reactions happen. '
    + 'The nucleus holds the chromosomes, which carry the instructions. '
    + 'Mitochondria release energy from glucose in respiration. '
    + 'Ribosomes build proteins. '
    + 'A plant cell has three things an animal cell does not: '
    + 'a cell wall of cellulose for support, '
    + 'chloroplasts holding chlorophyll for photosynthesis, '
    + 'and one large permanent vacuole of sap. '
    + 'A bacterial cell has no nucleus at all: '
    + 'its genetic material lies loose in the cytoplasm, '
    + 'and it has a cell wall but no chloroplasts or mitochondria. '
    + 'Cells divide in two ways. '
    + 'Mitosis produces two cells with the same number of chromosomes as the '
    + 'parent, used for growth and repair. '
    + 'Meiosis produces four cells with half the number, '
    + 'used to make gametes, which are the sperm and egg or the pollen and '
    + 'ovule.',

  mechanism:
    'Two questions carry most of the marks here, '
    + 'and both are answered by asking what the product is for. '
    + 'Start with the halving in meiosis. '
    + 'A human body cell has 46 chromosomes. '
    + 'If a sperm carried 46 and an egg carried 46, '
    + 'the child would have 92, '
    + 'and the next generation 184, and the species would not survive a '
    + 'dozen generations. '
    + 'So the gametes must carry 23 each, '
    + 'and fertilisation restores 46. '
    + 'That is the whole reason meiosis halves: '
    + 'not because halving is a special property of the process, '
    + 'but because fertilisation is about to double. '
    + 'Mitosis has no such doubling ahead of it, '
    + 'so it must keep the number the same: '
    + 'a new skin cell replacing a damaged one has to be a skin cell, '
    + 'with the same instructions. '
    + 'Hold that and you will never mix the two up again. '
    + 'The second question is structure against function, '
    + 'and this is where answers lose marks by being lists. '
    + 'Naming the mitochondrion earns little. '
    + 'Saying that a muscle cell has many mitochondria '
    + 'because it needs a great deal of energy to contract '
    + 'is the answer a marking scheme is looking for. '
    + 'The examiner is testing whether you can connect the two, '
    + 'so write the connection as a sentence with because in it. '
    + 'A root hair cell has no chloroplasts, because it is underground '
    + 'and gets no light. '
    + 'A red blood cell has no nucleus, '
    + 'which leaves more room for haemoglobin. '
    + 'The third thing to get right is the microscope. '
    + 'Magnification is the image size divided by the actual size, '
    + 'and the two must be in the same unit before you divide. '
    + 'A cell drawn 50 mm across that is really 0.05 mm across '
    + 'is magnified 1000 times, not 1000 mm. '
    + 'Magnification has no unit, because it is a ratio. '
    + 'Where a school has no microscope, '
    + 'the examinable part is the drawing and the labelling, '
    + 'which can be learned from a diagram, '
    + 'and the magnification calculation, which is arithmetic. '
    + 'What the microscope itself adds is the experience of focusing '
    + 'and of seeing that the cell wall really is a line and not a '
    + 'convention.',

  recap:
    'You have met the cell as the building block of living things, '
    + 'with a few named parts. '
    + 'This adds what each part does, '
    + 'and the two different ways a cell can divide.',

  method: [
    'For a structure question, name the part and then say its job, '
      + 'joined by because or so that.',
    'For plant against animal, check three things: cell wall, chloroplast, '
      + 'vacuole.',
    'For a bacterial cell, check whether a nucleus is present.',
    'For a division question, ask what the daughter cells are for.',
    'Growth, repair or asexual reproduction means mitosis.',
    'Gametes means meiosis, and the chromosome number halves.',
    'For magnification, put the image size and the real size in the same '
      + 'unit, then divide.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Give three structures found in a plant cell but not in an animal '
        + 'cell.',
      steps: [
        'Support comes from a wall of cellulose.',
        'Photosynthesis needs chloroplasts.',
        'Plant cells hold one large sap vacuole.',
      ],
      answer: 'A cellulose cell wall, chloroplasts, '
        + 'and one large permanent vacuole.',
    },
    {
      level: 3,
      ask: 'A human body cell has 46 chromosomes. '
        + 'How many are in a sperm cell, and how many in a cell produced by '
        + 'mitosis?',
      steps: [
        'A sperm is a gamete, made by meiosis, so the number halves.',
        'Mitosis keeps the number the same.',
      ],
      answer: 'A sperm has 23. '
        + 'A cell from mitosis has 46.',
    },
    {
      level: 4,
      ask: 'Explain why a muscle cell contains many mitochondria '
        + 'while a root hair cell contains none of the chloroplasts a leaf '
        + 'cell has.',
      steps: [
        'Mitochondria release energy in respiration.',
        'Contracting a muscle uses a great deal of energy.',
        'Chloroplasts need light to work.',
        'A root hair cell is underground.',
      ],
      answer: 'A muscle cell has many mitochondria '
        + 'because contraction demands a great deal of energy, '
        + 'and mitochondria release it. '
        + 'A root hair cell has no chloroplasts '
        + 'because it receives no light, '
        + 'so chloroplasts would be useless to it.',
    },
    {
      level: 5,
      ask: 'A cell measures 40 mm across in a drawing '
        + 'and 0.08 mm across in reality. '
        + 'Find the magnification. '
        + 'State the unit.',
      steps: [
        'Both measurements are already in millimetres.',
        'Magnification is image size divided by actual size.',
        '40 divided by 0.08 is 500.',
      ],
      answer: '500 times. '
        + 'Magnification has no unit, because it is a ratio of two lengths.',
    },
  ],

  traps: [
    {
      mistake: 'Saying meiosis halves the chromosomes without saying why.',
      why: 'The reason carries the mark: '
        + 'fertilisation doubles the number again, '
        + 'so the gametes must each carry half.',
    },
    {
      mistake: 'Listing organelles without their jobs.',
      why: 'The question is almost always structure and function. '
        + 'Join the two with because or so that.',
    },
    {
      mistake: 'Giving a magnification with a unit, such as 500 mm.',
      why: 'It is a ratio of two lengths, so the units cancel. '
        + 'Write 500 times, or multiplied by 500.',
    },
    {
      mistake: 'Saying a bacterial cell has a small nucleus.',
      why: 'It has none. '
        + 'The genetic material lies free in the cytoplasm, '
        + 'with no membrane around it.',
    },
  ],

  extension:
    'Cancer is mitosis that has stopped obeying the signal to stop. '
    + 'A healthy cell divides when the body needs a replacement '
    + 'and then waits. '
    + 'A tumour cell has lost the instruction that says wait, '
    + 'so it keeps dividing and the mass grows. '
    + 'This is why so much cancer research is about the controls on '
    + 'division rather than about the division itself.',

  questions: [
    {
      id: 'cell-1',
      ask: 'The part of the cell that releases energy from glucose is the:',
      kind: 'choice',
      options: ['mitochondrion', 'ribosome', 'vacuole'],
      answer: 'mitochondrion',
      teach: 'Mitochondria carry out respiration. '
        + 'Ribosomes build proteins.',
      level: 2,
    },
    {
      id: 'cell-2',
      ask: 'A cell has 24 chromosomes. '
        + 'How many will each gamete it makes by meiosis have?',
      kind: 'numeric',
      options: [],
      answer: '12',
      teach: 'Meiosis halves the number, '
        + 'because fertilisation will double it again.',
      level: 3,
    },
    {
      id: 'cell-3',
      ask: 'Which process repairs a cut in the skin?',
      kind: 'choice',
      options: ['mitosis', 'meiosis', 'fertilisation'],
      answer: 'mitosis',
      teach: 'Repair needs identical replacement cells, '
        + 'with the full chromosome number. '
        + 'That is mitosis.',
      level: 3,
    },
    {
      id: 'cell-4',
      ask: 'A bacterial cell differs from a plant cell in that it has no:',
      kind: 'choice',
      options: ['nucleus', 'cell wall', 'cytoplasm'],
      answer: 'nucleus',
      teach: 'Bacteria have a wall and cytoplasm. '
        + 'What they lack is a membrane bound nucleus.',
      level: 4,
    },
    {
      id: 'cell-5',
      ask: 'A cell 0.05 mm wide is drawn 25 mm wide. '
        + 'The magnification is:',
      kind: 'numeric',
      options: [],
      answer: '500',
      teach: '25 divided by 0.05 is 500. '
        + 'Both lengths were already in millimetres, so no conversion was '
        + 'needed.',
      level: 5,
    },
  ],
})

/* ── classification of living things ─────────────────────────────────────── */

teach({
  topicId: 'classification-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Living things are sorted into groups by shared features. '
      + 'The order runs kingdom, phylum, class, order, family, genus, '
      + 'species. '
      + 'The five kingdoms are Monera, Protista, Fungi, Plantae and '
      + 'Animalia. '
      + 'Every species has a two word Latin name, '
      + 'the genus with a capital and the species without.',
    method: [
      'Ask first whether the cell has a nucleus.',
      'Ask whether it makes its own food.',
      'Ask whether it is one cell or many.',
      'Within animals, ask about the backbone.',
      'Use a key by answering each pair of statements in turn.',
    ],
  },

  idea:
    'Classification sorts living things into groups by the features they '
    + 'share. '
    + 'The groups nest, from the largest to the smallest: '
    + 'kingdom, phylum, class, order, family, genus, species. '
    + 'A species is a group whose members can breed and produce fertile '
    + 'young. '
    + 'The five kingdoms are Monera, which is the bacteria, with no nucleus; '
    + 'Protista, single celled with a nucleus, such as amoeba; '
    + 'Fungi, which feed on dead matter and have no chlorophyll, '
    + 'such as mushroom and mould; '
    + 'Plantae, which make their own food by photosynthesis; '
    + 'and Animalia, which eat other organisms and can usually move. '
    + 'Within Animalia the major phyla include Arthropoda, '
    + 'which have a hard outer skeleton and jointed legs, '
    + 'and Chordata, which have a backbone. '
    + 'The classes of Chordata are fish, amphibians, reptiles, birds and '
    + 'mammals. '
    + 'Each species is named in two words, '
    + 'the genus first with a capital letter and the species second in small '
    + 'letters, '
    + 'both written in italics or underlined. '
    + 'Homo sapiens and Theobroma cacao, which is cocoa, are examples. '
    + 'A dichotomous key identifies an unknown organism '
    + 'by offering pairs of statements and following the one that fits.',

  mechanism:
    'Classification feels like memory work and it is not. '
    + 'It is a sequence of questions, '
    + 'and each question is chosen because it splits the living world at a '
    + 'deep joint rather than a shallow one. '
    + 'The first question is always whether the cell has a nucleus, '
    + 'because that single difference separates bacteria from everything '
    + 'else alive. '
    + 'The second is whether the organism makes its own food, '
    + 'which separates plants from fungi and animals. '
    + 'A learner who asks those two questions in that order '
    + 'has placed the organism in a kingdom without recalling a single list. '
    + 'Here is the trap that costs most marks. '
    + 'Grouping by what an organism looks like, or where it lives, '
    + 'instead of by its features. '
    + 'A whale lives in water and looks like a fish, '
    + 'and a bat flies and looks like a bird. '
    + 'Both are mammals, '
    + 'because both have hair, both have a four chambered heart, '
    + 'both are warm blooded, '
    + 'and both feed their young on milk. '
    + 'Swimming and flying are what the animal does. '
    + 'Hair and milk are what it is. '
    + 'So the rule is: classify by structure, not by habitat or habit. '
    + 'The second place marks are lost is the two word name. '
    + 'The genus takes a capital and the species does not, '
    + 'and the whole name is underlined when written by hand. '
    + 'homo Sapiens is wrong twice over and is marked wrong, '
    + 'even though the examiner can see what was meant. '
    + 'This is not pedantry: the convention is what makes the name '
    + 'recognisable in any language, '
    + 'which is the entire reason Latin is used. '
    + 'What must be written down when justifying a classification '
    + 'is the feature, not the verdict. '
    + 'Do not write that the animal is an arthropod. '
    + 'Write that it has a hard exoskeleton and three pairs of jointed legs, '
    + 'therefore it is an arthropod, and an insect. '
    + 'One mark for the features, one for the conclusion.',

  recap:
    'You have sorted animals into groups such as mammals and birds, '
    + 'and you know plants make their own food. '
    + 'This gives the full order of the groups, '
    + 'the naming rules, and a key to work with.',

  method: [
    'Does the cell have a nucleus? No means Monera.',
    'Is it one cell with a nucleus? Then Protista.',
    'Does it make its own food? Yes means Plantae.',
    'Does it feed on dead matter without chlorophyll? Then Fungi.',
    'Otherwise it is Animalia.',
    'Within animals, is there a backbone? Yes means Chordata.',
    'For a chordate, check skin covering, temperature and how the young are '
      + 'fed.',
    'Write the features you used, then the group they place it in.',
    'Write the species name with a capital genus and a small species.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Give the seven groups of classification in order, '
        + 'largest first.',
      steps: [
        'Start at the widest grouping and narrow down.',
      ],
      answer: 'Kingdom, phylum, class, order, family, genus, species.',
    },
    {
      level: 3,
      ask: 'A mushroom growing on a rotting log has no chlorophyll '
        + 'and absorbs food from the log. '
        + 'Which kingdom, and why?',
      steps: [
        'It has a nucleus, so it is not Monera.',
        'It is many celled, so it is not Protista.',
        'No chlorophyll, so it cannot make its own food.',
        'It feeds on dead matter.',
      ],
      answer: 'Fungi, because it has no chlorophyll '
        + 'and feeds by absorbing food from dead matter.',
    },
    {
      level: 4,
      ask: 'A whale lives in the sea, swims, and has fins. '
        + 'Explain why it is classed as a mammal and not a fish.',
      steps: [
        'Fish have scales and gills and are cold blooded.',
        'The whale breathes air through lungs.',
        'It is warm blooded and has some hair.',
        'It feeds its young on milk.',
      ],
      answer: 'Because it has lungs, is warm blooded, has hair, '
        + 'and feeds its young on milk, '
        + 'which are the features of a mammal. '
        + 'Living in water is a habitat, not a classifying feature.',
    },
    {
      level: 5,
      ask: 'Use this key on an organism with jointed legs and four pairs of '
        + 'them. '
        + '1: Jointed legs, go to 2. No jointed legs, not an arthropod. '
        + '2: Three pairs of legs, insect. Four pairs, go to 3. '
        + '3: Body in two parts, arachnid. Body in many segments, something '
        + 'else.',
      steps: [
        'Jointed legs, so step 1 sends us to 2.',
        'Four pairs, so step 2 sends us to 3.',
        'If the body is in two parts, the answer is arachnid.',
      ],
      answer: 'It is an arthropod, and if its body is in two parts it is an '
        + 'arachnid, such as a spider. '
        + 'Write the features used at each step, '
        + 'because the route is what earns the marks.',
    },
  ],

  traps: [
    {
      mistake: 'Classifying by habitat, so a whale becomes a fish.',
      why: 'Habitat is where it lives. '
        + 'Classification uses structure: hair, lungs, milk, heart.',
    },
    {
      mistake: 'Writing a species name as Homo Sapiens or homo sapiens.',
      why: 'The genus takes a capital and the species does not, '
        + 'and the whole name is underlined when handwritten.',
    },
    {
      mistake: 'Naming the group without naming the features.',
      why: 'The marking scheme awards the features separately. '
        + 'State them, then draw the conclusion.',
    },
    {
      mistake: 'Putting bacteria in Protista because both are small.',
      why: 'Size is not the test. '
        + 'A bacterial cell has no nucleus; a protist has one.',
    },
  ],

  extension:
    'Modern classification compares the sequence of bases in DNA '
    + 'rather than only the visible features, '
    + 'and it has moved some organisms. '
    + 'Groups that look alike because they live alike '
    + 'can turn out to be distant relatives, '
    + 'and the DNA shows it where the eye cannot. '
    + 'The principle has not changed: '
    + 'classify by what the organism is, '
    + 'and DNA is simply the deepest statement of that.',

  questions: [
    {
      id: 'class-1',
      ask: 'Which group is the smallest of these?',
      kind: 'choice',
      options: ['species', 'genus', 'family'],
      answer: 'species',
      teach: 'The order from large to small ends family, genus, species.',
      level: 2,
    },
    {
      id: 'class-2',
      ask: 'An organism has no nucleus in its cell. '
        + 'Its kingdom is:',
      kind: 'choice',
      options: ['Monera', 'Protista', 'Fungi'],
      answer: 'Monera',
      teach: 'No nucleus means bacteria, which is Monera. '
        + 'A protist is single celled but does have a nucleus.',
      level: 3,
    },
    {
      id: 'class-3',
      ask: 'A bat is classified as a mammal rather than a bird because it:',
      kind: 'choice',
      options: [
        'has hair and feeds its young on milk',
        'flies at night',
        'is small',
      ],
      answer: 'has hair and feeds its young on milk',
      teach: 'Flying is what it does. '
        + 'Hair and milk are what it is, and classification uses structure.',
      level: 4,
    },
    {
      id: 'class-4',
      ask: 'Which is written correctly?',
      kind: 'choice',
      options: ['Theobroma cacao', 'theobroma Cacao', 'Theobroma Cacao'],
      answer: 'Theobroma cacao',
      teach: 'Capital for the genus, small letters for the species, '
        + 'and underline the whole name when writing by hand.',
      level: 4,
    },
    {
      id: 'class-5',
      ask: 'How many pairs of jointed legs does an insect have?',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'Three pairs, so six legs. '
        + 'Four pairs would make it an arachnid, such as a spider.',
      level: 5,
    },
  ],
})

/* ── nutrition and digestion ─────────────────────────────────────────────── */

teach({
  topicId: 'nutrition-digestion-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A balanced diet supplies carbohydrate, protein, fat, vitamins, '
      + 'minerals, water and roughage. '
      + 'Digestion breaks large food molecules into small ones that can be '
      + 'absorbed. '
      + 'Enzymes do the breaking: amylase on starch, pepsin on protein, '
      + 'lipase on fat. '
      + 'A deficiency disease is named by the nutrient that is missing.',
    method: [
      'Follow the food through the gut in order.',
      'At each part, name the enzyme, its substrate and its product.',
      'Absorption happens in the small intestine.',
      'For a deficiency, match the symptom to the missing nutrient.',
    ],
  },

  idea:
    'Food supplies seven things. '
    + 'Carbohydrate gives energy. '
    + 'Protein is for growth and repair. '
    + 'Fat gives energy and keeps heat in. '
    + 'Vitamins and mineral salts are needed in small amounts. '
    + 'Water and roughage keep the gut working. '
    + 'Digestion breaks large food molecules into small ones. '
    + 'Only the small ones can pass into the blood. '
    + 'It starts in the mouth. '
    + 'The teeth cut and grind, '
    + 'and amylase in the saliva turns starch into maltose. '
    + 'In the stomach, acid gives a pH of about 2. '
    + 'There pepsin breaks protein into peptides. '
    + 'Next comes the small intestine. '
    + 'Bile from the liver breaks the fat into small drops. '
    + 'Amylase, trypsin and lipase finish the work. '
    + 'The end products are glucose, amino acids, '
    + 'fatty acids and glycerol. '
    + 'They pass into the blood through the villi. '
    + 'Villi are tiny folds that give a very large surface. '
    + 'The large intestine takes back water. '
    + 'The rest leaves the body. '
    + 'A missing nutrient causes a deficiency disease. '
    + 'Too little protein gives kwashiorkor. '
    + 'Too little food of any kind gives marasmus. '
    + 'Too little vitamin D or calcium gives rickets. '
    + 'Too little vitamin C gives scurvy. '
    + 'Too little iron gives anaemia. '
    + 'Too little iodine gives goitre.',

  mechanism:
    'The question that unlocks this topic is why digestion needs enzymes at '
    + 'all. '
    + 'Starch and protein could be broken down by boiling, '
    + 'but the body is at 37 degrees Celsius and cannot boil anything. '
    + 'An enzyme lowers the energy the reaction needs, '
    + 'so the breakdown happens fast at body temperature. '
    + 'That is why each enzyme is named, and why it is named with its pH. '
    + 'Pepsin works at about pH 2 and amylase does not, '
    + 'which is exactly why starch digestion stops in the stomach '
    + 'and starts again in the small intestine where the pancreatic juice '
    + 'has made things slightly alkaline. '
    + 'An answer that says digestion happens in the stomach '
    + 'without noticing that only protein is digested there '
    + 'has missed the part being examined. '
    + 'Now the commonest lost mark in the whole topic: '
    + 'calling bile an enzyme. '
    + 'Bile contains no enzyme. '
    + 'It breaks a large drop of fat into many small drops, '
    + 'which is emulsification, '
    + 'and that increases the surface area for lipase to work on. '
    + 'Bile speeds up fat digestion without doing any digesting itself. '
    + 'Writing that bile digests fat loses the mark even though the answer '
    + 'is nearly right. '
    + 'The second lost mark is the villi. '
    + 'Learners write that the small intestine absorbs food, '
    + 'which is true and earns nothing, '
    + 'because the question is how. '
    + 'The answer is surface area: millions of villi, '
    + 'each with microvilli, each thin walled and richly supplied with '
    + 'blood. '
    + 'Large surface, short distance, steep concentration gradient. '
    + 'Those three phrases are the marks. '
    + 'The third is the kwashiorkor and marasmus pair, '
    + 'which matters in Ghana and is often confused. '
    + 'A child on cassava and plantain alone may take in enough energy '
    + 'and almost no protein, and that is kwashiorkor: '
    + 'swollen belly and legs, thin hair, poor growth. '
    + 'A child taking in too little of everything wastes away, '
    + 'and that is marasmus. '
    + 'The distinguishing sign is the swelling, '
    + 'and the swelling comes from too little protein in the blood, '
    + 'which lets fluid collect in the tissues. '
    + 'Naming the sign and its cause together is what a full answer does. '
    + 'For the food tests, '
    + 'a school without a water bath can stand the tube in a beaker of hot '
    + 'water, '
    + 'and that is accepted. '
    + 'What cannot be improvised is Benedict solution or Biuret reagent, '
    + 'so if they are not there, '
    + 'learn the test as a written procedure with its colour change: '
    + 'Benedict on reducing sugar goes blue to brick red on heating, '
    + 'iodine on starch goes brown to blue black, '
    + 'Biuret on protein goes blue to purple, '
    + 'and fat leaves a translucent mark on paper. '
    + 'Those colour changes are what the paper asks for.',

  recap:
    'You know the food groups and that food is broken down inside you. '
    + 'This names the enzyme at each stage, '
    + 'the conditions it needs, and what it produces.',

  method: [
    'Name the part of the gut the question is about.',
    'Name the juice or secretion it receives.',
    'Name the enzyme, its substrate and its product.',
    'State the pH the enzyme needs.',
    'For absorption, say surface area, thin wall, and blood supply.',
    'For a deficiency, name the nutrient, the disease and one clear sign.',
    'For a food test, name the reagent, the treatment, and the colour '
      + 'change.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Name the enzyme that acts on starch in the mouth '
        + 'and give its product.',
      steps: [
        'Saliva contains amylase.',
        'Amylase acts on starch.',
      ],
      answer: 'Salivary amylase, which turns starch into maltose.',
    },
    {
      level: 3,
      ask: 'Explain the role of bile in the digestion of fat.',
      steps: [
        'Bile comes from the liver and is stored in the gall bladder.',
        'It breaks large fat drops into many small ones.',
        'That increases the surface area.',
        'Lipase then works faster.',
      ],
      answer: 'Bile emulsifies fat, '
        + 'breaking large drops into many small ones '
        + 'and so increasing the surface area for lipase to act on. '
        + 'Bile is not an enzyme and does no digesting itself.',
    },
    {
      level: 4,
      ask: 'A child in a farming village eats mainly cassava and plantain. '
        + 'She has a swollen abdomen, thin reddish hair and poor growth. '
        + 'Name the condition, the nutrient lacking, '
        + 'and two local foods you would add.',
      steps: [
        'Cassava and plantain are high in starch and very low in protein.',
        'Energy intake may be adequate, so this is not simple starvation.',
        'The swelling comes from too little protein in the blood.',
      ],
      answer: 'Kwashiorkor, from a lack of protein. '
        + 'Add beans, groundnut, egg, or smoked fish, '
        + 'which are available and affordable. '
        + 'Marasmus would show wasting without the swelling, '
        + 'because there the whole diet is short.',
    },
    {
      level: 5,
      ask: 'Explain why the small intestine is well suited to absorption, '
        + 'giving three features and the reason for each.',
      steps: [
        'Absorption is diffusion into the blood, so it needs area, '
          + 'a short path, and a gradient.',
        'Villi and microvilli provide the area.',
        'A wall one cell thick provides the short path.',
        'A dense capillary network carries products away and keeps the '
          + 'gradient steep.',
      ],
      answer: 'It is very long and lined with villi and microvilli, '
        + 'which give a very large surface area. '
        + 'The wall of each villus is one cell thick, '
        + 'so the diffusion distance is short. '
        + 'Each villus has a dense capillary network, '
        + 'which removes absorbed food and keeps the concentration gradient '
        + 'steep.',
    },
  ],

  traps: [
    {
      mistake: 'Calling bile an enzyme.',
      why: 'Bile emulsifies fat, which is a physical change. '
        + 'Lipase does the chemical digestion.',
    },
    {
      mistake: 'Saying the small intestine absorbs food, and stopping '
        + 'there.',
      why: 'The question is how. '
        + 'Large surface area, thin wall, good blood supply: three marks.',
    },
    {
      mistake: 'Mixing up kwashiorkor and marasmus.',
      why: 'Kwashiorkor is protein alone and shows swelling. '
        + 'Marasmus is the whole diet and shows wasting.',
    },
    {
      mistake: 'Writing that pepsin works best in an alkaline medium.',
      why: 'Pepsin needs the acid of the stomach, about pH 2. '
        + 'Trypsin is the one that wants an alkaline medium.',
    },
  ],

  extension:
    'Lactose intolerance is a single enzyme story. '
    + 'A baby makes lactase and digests the lactose in milk. '
    + 'In most adults the gene is turned down and the lactase stops being '
    + 'made, '
    + 'so the lactose passes undigested to the large intestine '
    + 'where bacteria ferment it, causing gas and discomfort. '
    + 'It is very common across West Africa and is not a disease. '
    + 'It is the ordinary adult state, and the ability to digest milk into '
    + 'adulthood is the unusual variant.',

  questions: [
    {
      id: 'dig-1',
      ask: 'The enzyme that digests protein in the stomach is:',
      kind: 'choice',
      options: ['pepsin', 'amylase', 'lipase'],
      answer: 'pepsin',
      teach: 'Pepsin works on protein in acid. '
        + 'Amylase works on starch and lipase on fat.',
      level: 2,
    },
    {
      id: 'dig-2',
      ask: 'Bile helps the digestion of fat by:',
      kind: 'choice',
      options: [
        'emulsifying it to increase surface area',
        'digesting it into fatty acids',
        'making the stomach more acidic',
      ],
      answer: 'emulsifying it to increase surface area',
      teach: 'Bile contains no enzyme. '
        + 'It breaks the fat into small drops so lipase can work faster.',
      level: 3,
    },
    {
      id: 'dig-3',
      ask: 'Benedict solution added to a reducing sugar and heated turns:',
      kind: 'choice',
      options: ['brick red', 'blue black', 'purple'],
      answer: 'brick red',
      teach: 'Blue black is iodine on starch. '
        + 'Purple is Biuret on protein.',
      level: 3,
    },
    {
      id: 'dig-4',
      ask: 'A child with a swollen abdomen eating mainly starchy food most '
        + 'likely lacks:',
      kind: 'choice',
      options: ['protein', 'carbohydrate', 'roughage'],
      answer: 'protein',
      teach: 'That is kwashiorkor. '
        + 'Too little protein in the blood lets fluid collect in the '
        + 'tissues.',
      level: 4,
    },
    {
      id: 'dig-5',
      ask: 'Roughly what pH does pepsin need to work?',
      kind: 'numeric',
      options: [],
      answer: '2',
      teach: 'About pH 2, the acid of the stomach. '
        + 'Amylase is destroyed at that pH, which is why starch digestion '
        + 'pauses there.',
      level: 5,
    },
  ],
})

/* ── photosynthesis ──────────────────────────────────────────────────────── */

teach({
  topicId: 'photosynthesis-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Photosynthesis makes glucose from carbon dioxide and water, '
      + 'using light energy trapped by chlorophyll, and releases oxygen. '
      + 'The word equation is carbon dioxide plus water, '
      + 'in the presence of light and chlorophyll, '
      + 'gives glucose plus oxygen. '
      + 'Light, carbon dioxide and temperature can each limit the rate. '
      + 'Starch is tested for with iodine, which turns blue black.',
    method: [
      'Write the equation with light and chlorophyll over the arrow.',
      'To test a factor, remove it from one leaf and keep the rest the '
        + 'same.',
      'Destarch the plant in the dark first.',
      'Boil the leaf in alcohol to remove chlorophyll before testing.',
      'Add iodine and look for blue black.',
    ],
  },

  idea:
    'Photosynthesis is how a green plant makes its own food. '
    + 'Carbon dioxide from the air and water from the soil '
    + 'are combined into glucose, '
    + 'using light energy absorbed by chlorophyll in the chloroplasts, '
    + 'and oxygen is given off. '
    + 'In words: carbon dioxide plus water, '
    + 'in the presence of light and chlorophyll, '
    + 'gives glucose plus oxygen. '
    + 'In symbols, six carbon dioxide plus six water '
    + 'gives one glucose plus six oxygen. '
    + 'The glucose is used in respiration, '
    + 'converted to starch for storage, '
    + 'or used to build cellulose for the cell wall. '
    + 'The leaf is built for the job: '
    + 'broad and flat to catch light, thin so gases travel a short distance, '
    + 'with stomata underneath for gas exchange '
    + 'and veins bringing water and carrying sugar away. '
    + 'Four things limit the rate: light intensity, '
    + 'carbon dioxide concentration, temperature, '
    + 'and the amount of chlorophyll. '
    + 'A limiting factor is the one in shortest supply, '
    + 'and it is the only one that will raise the rate if it is increased.',

  mechanism:
    'The idea that carries the marks here is the limiting factor, '
    + 'and it is easy to say and hard to apply. '
    + 'At any moment the rate of photosynthesis is set '
    + 'by whichever requirement is in shortest supply, '
    + 'and increasing any of the others changes nothing at all. '
    + 'Take a cocoa seedling under dense shade at midday. '
    + 'The air is warm and carbon dioxide is plentiful, '
    + 'so the shortage is light. '
    + 'Adding fertiliser or raising the temperature will not speed it up. '
    + 'Only more light will. '
    + 'Now take the same seedling in full sun. '
    + 'Light is plentiful and carbon dioxide at about 0.04 per cent of the '
    + 'air is now the short supply, '
    + 'so the limiting factor has changed, '
    + 'and more light now does nothing. '
    + 'That is why a graph of rate against light intensity rises and then '
    + 'flattens: '
    + 'the flat part is where light has stopped being the limiting factor. '
    + 'A question showing that graph asks what limits the rate at the flat '
    + 'part, '
    + 'and the answer is carbon dioxide or temperature, not light. '
    + 'The second place marks are lost is the destarching step. '
    + 'Every experiment in this topic starts by keeping the plant in the '
    + 'dark '
    + 'for one or two days. '
    + 'Leave it out and the experiment proves nothing, '
    + 'because the leaf already had starch in it before you began, '
    + 'so a blue black result at the end could be old starch. '
    + 'Writing destarch the plant in the dark for 48 hours '
    + 'is worth a mark by itself, '
    + 'and leaving it out can cost every mark for the method. '
    + 'The third is boiling the leaf in alcohol. '
    + 'Learners write it down as a step without being able to say why, '
    + 'and the why is the mark: '
    + 'the green chlorophyll would hide the colour change, '
    + 'so it is dissolved out first. '
    + 'The alcohol must be heated in a water bath and not over a flame, '
    + 'because alcohol catches fire easily. '
    + 'That safety point is itself examinable. '
    + 'A school with no water bath stands the tube of alcohol '
    + 'in a beaker of hot water taken off the flame, '
    + 'which is the standard improvisation and is accepted. '
    + 'Last, a point of logic that separates a good answer from a correct '
    + 'one. '
    + 'A variegated leaf, green in patches and white in others, '
    + 'tests chlorophyll without needing two plants: '
    + 'both halves had the same light, the same air and the same water, '
    + 'so if only the green part turns blue black, '
    + 'chlorophyll is the thing that differed. '
    + 'The leaf is its own control, '
    + 'and saying so is the sentence the examiner is looking for.',

  recap:
    'You know that plants make their own food and that leaves are green. '
    + 'This gives the equation, the structures involved, '
    + 'and the experiments that show each requirement is needed.',

  method: [
    'Write the word equation, with light and chlorophyll over the arrow.',
    'Destarch the plant by keeping it in the dark for one to two days.',
    'Set up so that one factor is absent and all others are unchanged.',
    'Leave in light for a few hours.',
    'Dip the leaf in boiling water to kill it and stop reactions.',
    'Boil it in alcohol in a water bath to remove the chlorophyll.',
    'Rinse in warm water to soften it.',
    'Add iodine solution and record the colour.',
    'Blue black means starch, so photosynthesis took place.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Write the word equation for photosynthesis.',
      steps: [
        'Raw materials are carbon dioxide and water.',
        'Requirements are light and chlorophyll.',
        'Products are glucose and oxygen.',
      ],
      answer: 'Carbon dioxide plus water, '
        + 'in the presence of light and chlorophyll, '
        + 'gives glucose plus oxygen.',
    },
    {
      level: 3,
      ask: 'Why is a leaf boiled in alcohol before iodine is added, '
        + 'and why in a water bath?',
      steps: [
        'Iodine shows a colour change, so the green must go first.',
        'Alcohol dissolves chlorophyll.',
        'Alcohol is flammable.',
      ],
      answer: 'To dissolve out the chlorophyll, '
        + 'because the green colour would hide the blue black of the iodine '
        + 'test. '
        + 'A water bath is used because alcohol catches fire easily '
        + 'and must not be heated over a flame.',
    },
    {
      level: 4,
      ask: 'Describe an experiment using a variegated leaf '
        + 'to show that chlorophyll is needed for photosynthesis.',
      steps: [
        'Destarch the plant in the dark for two days.',
        'Return it to light for four hours.',
        'Draw the leaf first, marking which parts were green and which '
          + 'white.',
        'Test the whole leaf for starch.',
      ],
      answer: 'Destarch the plant in the dark for two days, '
        + 'then leave it in light for several hours. '
        + 'Draw the leaf to record which parts were green. '
        + 'Kill the leaf in boiling water, '
        + 'remove the chlorophyll in hot alcohol, rinse, and add iodine. '
        + 'Only the parts that were green turn blue black. '
        + 'Since both parts had the same light, air and water, '
        + 'the leaf is its own control '
        + 'and chlorophyll must be the factor that mattered.',
    },
    {
      level: 5,
      ask: 'A graph of the rate of photosynthesis against light intensity '
        + 'rises steeply, then levels off. '
        + 'Explain both parts.',
      steps: [
        'On the steep part, more light gives more rate, '
          + 'so light is in shortest supply.',
        'On the flat part, more light changes nothing, '
          + 'so something else is now short.',
        'Carbon dioxide is only about 0.04 per cent of air.',
      ],
      answer: 'On the rising part light is the limiting factor, '
        + 'so each increase in light raises the rate. '
        + 'At the plateau light is no longer limiting, '
        + 'and the rate is now set by carbon dioxide concentration '
        + 'or by temperature. '
        + 'Adding more light there has no effect, '
        + 'because the factor in shortest supply has changed.',
    },
  ],

  traps: [
    {
      mistake: 'Leaving the destarching step out of the method.',
      why: 'Starch already in the leaf would give a positive result on its '
        + 'own, '
        + 'so the experiment would prove nothing.',
    },
    {
      mistake: 'Saying more light always increases the rate.',
      why: 'Only while light is the limiting factor. '
        + 'Past the plateau, carbon dioxide or temperature is the limit.',
    },
    {
      mistake: 'Heating alcohol directly over a flame.',
      why: 'Alcohol is flammable. '
        + 'Use a water bath, and say so, because the safety point is '
        + 'marked.',
    },
    {
      mistake: 'Writing oxygen as a raw material of photosynthesis.',
      why: 'Oxygen is a product. '
        + 'The raw materials are carbon dioxide and water.',
    },
  ],

  extension:
    'Plants respire all the time, including in daylight. '
    + 'In bright light photosynthesis is much faster than respiration, '
    + 'so the plant takes carbon dioxide in overall. '
    + 'At dawn and dusk there is a moment when the two rates are equal '
    + 'and no gas moves in or out at all, '
    + 'which is called the compensation point. '
    + 'At night only respiration runs, '
    + 'so a plant gives out carbon dioxide after dark. '
    + 'This is why a sealed room full of plants is not a source of oxygen at '
    + 'night.',

  questions: [
    {
      id: 'photo-1',
      ask: 'The gas given off in photosynthesis is:',
      kind: 'choice',
      options: ['oxygen', 'carbon dioxide', 'nitrogen'],
      answer: 'oxygen',
      teach: 'Carbon dioxide goes in and oxygen comes out. '
        + 'Respiration is the other way round.',
      level: 2,
    },
    {
      id: 'photo-2',
      ask: 'Why is a plant kept in the dark for two days before the '
        + 'experiment?',
      kind: 'choice',
      options: [
        'To remove the starch already in the leaves',
        'To make the leaves greener',
        'To let the plant rest',
      ],
      answer: 'To remove the starch already in the leaves',
      teach: 'Old starch would turn iodine blue black on its own, '
        + 'so the result would prove nothing.',
      level: 3,
    },
    {
      id: 'photo-3',
      ask: 'Iodine added to a leaf containing starch turns:',
      kind: 'choice',
      options: ['blue black', 'brick red', 'purple'],
      answer: 'blue black',
      teach: 'Blue black is starch. '
        + 'Brick red is Benedict on sugar; purple is Biuret on protein.',
      level: 3,
    },
    {
      id: 'photo-4',
      ask: 'At the plateau of a rate against light intensity graph, '
        + 'the limiting factor is most likely:',
      kind: 'choice',
      options: [
        'carbon dioxide concentration',
        'light intensity',
        'the amount of water',
      ],
      answer: 'carbon dioxide concentration',
      teach: 'Light has stopped being short, or the line would still rise. '
        + 'Carbon dioxide is only about 0.04 per cent of air.',
      level: 5,
    },
    {
      id: 'photo-5',
      ask: 'How many molecules of carbon dioxide are used to make one '
        + 'molecule of glucose?',
      kind: 'numeric',
      options: [],
      answer: '6',
      teach: 'Glucose has six carbon atoms, '
        + 'and each comes from one carbon dioxide molecule.',
      level: 4,
    },
  ],
})

/* ── motion ──────────────────────────────────────────────────────────────── */

teach({
  topicId: 'motion-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Speed is distance over time. '
      + 'Velocity is speed in a stated direction. '
      + 'Acceleration is the change in velocity over time. '
      + 'For constant acceleration: v equals u plus a t, '
      + 's equals u t plus half a t squared, '
      + 'and v squared equals u squared plus 2 a s. '
      + 'On a velocity time graph the slope is the acceleration '
      + 'and the area underneath is the distance.',
    method: [
      'List u, v, a, t and s, and mark the one that is missing.',
      'Pick the equation that leaves out the missing quantity.',
      'Convert to SI units first.',
      'Substitute, then solve.',
      'On a graph, slope for acceleration and area for distance.',
    ],
  },

  idea:
    'Distance is how far something has travelled '
    + 'and displacement is how far it is from where it started, '
    + 'in a stated direction. '
    + 'Speed is distance divided by time, in metres per second. '
    + 'Velocity is speed with a direction. '
    + 'Acceleration is the change in velocity divided by the time taken, '
    + 'in metres per second squared. '
    + 'A negative acceleration means the object is slowing down, '
    + 'and that is also called retardation or deceleration. '
    + 'When the acceleration is constant, three equations apply. '
    + 'Writing u for the initial velocity, v for the final velocity, '
    + 'a for the acceleration, t for the time and s for the distance: '
    + 'v equals u plus a t; '
    + 's equals u t plus half a t squared; '
    + 'and v squared equals u squared plus 2 a s. '
    + 'For a body falling freely, a is the acceleration due to gravity, '
    + 'about 10 metres per second squared downwards. '
    + 'On a distance time graph the slope is the speed. '
    + 'On a velocity time graph the slope is the acceleration '
    + 'and the area between the line and the time axis is the distance '
    + 'travelled.',

  mechanism:
    'There are three equations and most learners try to remember which to '
    + 'use. '
    + 'There is no need, because each equation leaves out exactly one of the '
    + 'five quantities. '
    + 'v equals u plus a t has no s. '
    + 's equals u t plus half a t squared has no v. '
    + 'v squared equals u squared plus 2 a s has no t. '
    + 'So the method is mechanical. '
    + 'Write down the five letters, fill in the three values you have, '
    + 'mark what is asked for, '
    + 'and the fifth letter is the one you neither have nor want. '
    + 'Choose the equation that omits it. '
    + 'This turns a memory problem into a sorting problem, '
    + 'and it is worth writing the list out in the examination '
    + 'because it takes ten seconds and prevents the commonest error. '
    + 'Now the places marks are actually lost. '
    + 'First, the sign of the acceleration. '
    + 'A car braking from 20 metres per second to rest in 5 seconds '
    + 'has an acceleration of minus 4 metres per second squared. '
    + 'Writing 4 without the minus sign is marked wrong, '
    + 'because the sign is the physics: it says the velocity is falling. '
    + 'Choose a positive direction at the start, say so, and keep it. '
    + 'Second, a body thrown straight up. '
    + 'At the highest point its velocity is zero '
    + 'but its acceleration is still 10 metres per second squared downwards. '
    + 'Learners write that the acceleration is zero at the top, '
    + 'reasoning that the body has stopped. '
    + 'It has stopped moving, but gravity has not stopped pulling, '
    + 'which is exactly why it does not stay up there. '
    + 'Third, the area under a velocity time graph. '
    + 'The graph of a journey is usually a trapezium: '
    + 'speeding up, steady, slowing down. '
    + 'The distance is the whole area, '
    + 'and the commonest error is finding only the rectangle in the middle. '
    + 'Split the shape into a triangle, a rectangle and a triangle, '
    + 'find each, and add. '
    + 'Fourth, units. '
    + 'A speed given in kilometres per hour must be converted before '
    + 'substituting. '
    + 'Divide by 3.6 to get metres per second, '
    + 'because one kilometre per hour is 1000 metres in 3600 seconds. '
    + 'Substituting 90 where 25 belongs gives an answer wrong by a factor of '
    + 'more than three, '
    + 'and no later working can recover it. '
    + 'What has to be written down is the list of quantities with units, '
    + 'then the equation named, then the substitution, then the answer with '
    + 'its unit. '
    + 'A marking scheme gives a mark for the correct equation '
    + 'and a mark for the substitution, '
    + 'so a learner who shows those two lines scores even if the arithmetic '
    + 'slips. '
    + 'A learner who writes only a final number scores nothing when it is '
    + 'wrong. '
    + 'Where a school has no ticker tape timer or light gates, '
    + 'the examinable part is entirely paper based: '
    + 'the equations, the graph reading, and the interpretation. '
    + 'The tape is only a way of generating real readings, '
    + 'and a table of readings printed in a question does the same job.',

  recap:
    'You have calculated speed as distance over time '
    + 'and read a distance time graph. '
    + 'This adds direction, acceleration, '
    + 'and three equations that let you find any missing quantity.',

  method: [
    'Choose a positive direction and state it.',
    'Convert every quantity to SI units.',
    'Write the five letters u, v, a, t, s and fill in what you know.',
    'Mark the quantity asked for.',
    'Identify the quantity you neither have nor want.',
    'Choose the equation that leaves that one out.',
    'Write the equation, then the substitution, then the answer.',
    'Give the unit, and a sign where direction matters.',
    'On a velocity time graph, use the slope for acceleration '
      + 'and the whole area for distance.',
  ],

  figure: {
    alt: 'A velocity time graph for a journey: velocity rising from zero to '
      + '20 metres per second in the first 10 seconds, steady at 20 for the '
      + 'next 20 seconds, then falling to zero over the last 10 seconds, '
      + 'with the area split into a triangle, a rectangle and a triangle',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* axes */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M80 330h480"/>'
      + '<path d="M80 330V60"/>'
      + '</g>'
      /* the three regions under the line */
      + '<g stroke="none">'
      + '<path d="M80 330L200 130L200 330Z" fill="currentColor" opacity="0.10"/>'
      + '<path d="M200 130H440V330H200Z" fill="currentColor" opacity="0.18"/>'
      + '<path d="M440 130L560 330H440Z" fill="currentColor" opacity="0.10"/>'
      + '</g>'
      /* dividing lines between the regions */
      + '<g stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" fill="none">'
      + '<path d="M200 330V130"/><path d="M440 330V130"/>'
      + '<path d="M80 130H200"/>'
      + '</g>'
      /* the journey itself */
      + '<path d="M80 330L200 130H440L560 330" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      /* labels */
      + '<text x="24" y="135" font-size="14" fill="currentColor">20</text>'
      + '<text x="60" y="352" font-size="14" fill="currentColor">0</text>'
      + '<text x="192" y="352" font-size="14" fill="currentColor">10</text>'
      + '<text x="430" y="352" font-size="14" fill="currentColor">30</text>'
      + '<text x="550" y="352" font-size="14" fill="currentColor">40</text>'
      + '<text x="300" y="380" font-size="14" fill="currentColor">time in seconds</text>'
      + '<text x="96" y="80" font-size="14" fill="currentColor">velocity in metres per second</text>'
      + '<text x="108" y="300" font-size="13" fill="currentColor">triangle</text>'
      + '<text x="286" y="240" font-size="13" fill="currentColor">rectangle</text>'
      + '<text x="452" y="300" font-size="13" fill="currentColor">triangle</text>'
      + '</svg>',
  },

  worked: [
    {
      level: 2,
      ask: 'A trotro accelerates from rest to 15 metres per second in 5 '
        + 'seconds. '
        + 'Find its acceleration.',
      steps: [
        'u is 0, v is 15, t is 5, a is wanted, s is not involved.',
        'The equation without s is v equals u plus a t.',
        '15 equals 0 plus a times 5.',
      ],
      answer: 'a equals 3 metres per second squared.',
    },
    {
      level: 3,
      ask: 'A car travelling at 20 metres per second brakes to rest in 5 '
        + 'seconds. '
        + 'Find the acceleration and the distance travelled while braking.',
      steps: [
        'u is 20, v is 0, t is 5.',
        'v equals u plus a t gives 0 equals 20 plus 5a, so a is minus 4.',
        'For the distance use s equals u t plus half a t squared.',
        's equals 20 times 5 plus half times minus 4 times 25.',
        's equals 100 minus 50.',
      ],
      answer: 'The acceleration is minus 4 metres per second squared, '
        + 'the minus sign showing it is slowing down. '
        + 'The distance is 50 m.',
    },
    {
      level: 4,
      ask: 'A journey is shown by a velocity time graph: '
        + 'the velocity rises from 0 to 20 metres per second over 10 '
        + 'seconds, '
        + 'stays at 20 for the next 20 seconds, '
        + 'then falls to 0 over the last 10 seconds. '
        + 'Find the total distance.',
      steps: [
        'The distance is the area under the line.',
        'First triangle: half times 10 times 20, which is 100 m.',
        'Rectangle: 20 times 20, which is 400 m.',
        'Last triangle: half times 10 times 20, which is 100 m.',
        'Add the three.',
      ],
      answer: '600 m. '
        + 'Finding only the rectangle would give 400 m '
        + 'and lose the two triangles.',
    },
    {
      level: 5,
      ask: 'A mango falls from a branch 20 m above the ground. '
        + 'Taking g as 10 metres per second squared, '
        + 'find the speed with which it hits the ground '
        + 'and the time it takes.',
      steps: [
        'u is 0, a is 10, s is 20, and v is wanted; t is not wanted yet.',
        'Use v squared equals u squared plus 2 a s, which omits t.',
        'v squared equals 0 plus 2 times 10 times 20, which is 400.',
        'So v is 20 metres per second.',
        'For the time use v equals u plus a t: 20 equals 0 plus 10 t.',
      ],
      answer: 'It hits the ground at 20 metres per second, after 2 seconds. '
        + 'Note that the mass of the mango does not appear anywhere, '
        + 'so a heavier mango from the same branch arrives at the same '
        + 'speed.',
    },
  ],

  traps: [
    {
      mistake: 'Dropping the minus sign on a deceleration.',
      why: 'The sign says the velocity is falling, '
        + 'and it is part of the answer rather than decoration.',
    },
    {
      mistake: 'Saying the acceleration is zero at the top of a throw.',
      why: 'The velocity is zero there, not the acceleration. '
        + 'Gravity still acts, which is why the body comes back down.',
    },
    {
      mistake: 'Taking only the middle rectangle as the distance on a '
        + 'velocity time graph.',
      why: 'The distance is the whole area. '
        + 'Split it into triangle, rectangle, triangle and add.',
    },
    {
      mistake: 'Substituting kilometres per hour into the equations.',
      why: 'They need metres per second. '
        + 'Divide by 3.6 first, because 1 km per hour is 1000 m in 3600 s.',
    },
  ],

  extension:
    'Projectile motion is these same equations used twice. '
    + 'Horizontally there is no acceleration, '
    + 'so the horizontal distance is simply speed times time. '
    + 'Vertically the acceleration is g downwards, '
    + 'so the vertical motion is a falling body problem. '
    + 'The two are independent, '
    + 'which is why a bullet fired level and a bullet dropped '
    + 'from the same height reach the ground at the same moment. '
    + 'That result surprises everybody the first time, '
    + 'and it follows from nothing more than treating the directions '
    + 'separately.',

  questions: [
    {
      id: 'mot-1',
      ask: 'Acceleration is measured in:',
      kind: 'choice',
      options: [
        'metres per second squared',
        'metres per second',
        'metres',
      ],
      answer: 'metres per second squared',
      teach: 'It is a change of velocity per second, '
        + 'so metres per second, per second.',
      level: 2,
    },
    {
      id: 'mot-2',
      ask: 'A car speeds up from 10 to 30 metres per second in 4 seconds. '
        + 'Its acceleration in metres per second squared is:',
      kind: 'numeric',
      options: [],
      answer: '5',
      teach: 'Change in velocity is 20, over 4 seconds, so 5.',
      level: 3,
    },
    {
      id: 'mot-3',
      ask: 'On a velocity time graph, the area under the line gives the:',
      kind: 'choice',
      options: ['distance travelled', 'acceleration', 'average speed'],
      answer: 'distance travelled',
      teach: 'The slope gives the acceleration, the area gives the distance.',
      level: 4,
    },
    {
      id: 'mot-4',
      ask: 'At the highest point of a ball thrown straight up:',
      kind: 'choice',
      options: [
        'the velocity is zero but the acceleration is not',
        'both velocity and acceleration are zero',
        'the acceleration is zero but the velocity is not',
      ],
      answer: 'the velocity is zero but the acceleration is not',
      teach: 'Gravity still pulls down at the top. '
        + 'If the acceleration were zero the ball would hang there.',
      level: 5,
    },
    {
      id: 'mot-5',
      ask: 'An object is dropped and falls for 3 seconds. '
        + 'Taking g as 10, its speed in metres per second is:',
      kind: 'numeric',
      options: [],
      answer: '30',
      teach: 'v equals u plus a t, with u of 0: '
        + '10 times 3 is 30.',
      level: 4,
    },
  ],
})

/* ── pressure and floating ───────────────────────────────────────────────── */

teach({
  topicId: 'pressure-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Pressure is force divided by area, measured in pascals. '
      + 'In a liquid, pressure equals density times g times depth, '
      + 'and it acts equally in all directions at a given depth. '
      + 'Upthrust is the weight of the fluid pushed aside. '
      + 'An object floats when the upthrust equals its weight.',
    method: [
      'For a solid on a surface, use pressure equals force over area.',
      'For a liquid, use pressure equals density times g times depth.',
      'Depth means the depth below the surface, not the width of the '
        + 'vessel.',
      'For flotation, compare the weight with the upthrust.',
      'Upthrust equals the weight of fluid displaced.',
    ],
  },

  idea:
    'Pressure is the force acting at right angles to a surface, '
    + 'divided by the area of that surface. '
    + 'The unit is the pascal, which is one newton per square metre. '
    + 'The same force on a smaller area gives a greater pressure, '
    + 'which is why a sharp knife cuts and a blunt one does not. '
    + 'In a liquid, the pressure at a depth h '
    + 'equals the density times g times h, '
    + 'so it increases with depth and does not depend '
    + 'on the shape or the width of the container. '
    + 'At any point the pressure acts equally in all directions. '
    + 'Atmospheric pressure at sea level is about 100000 pascals, '
    + 'and it is measured with a barometer. '
    + 'When an object is placed in a fluid it pushes some fluid aside, '
    + 'and the fluid pushes back up with a force called upthrust. '
    + 'The Archimedes principle states that the upthrust '
    + 'equals the weight of the fluid displaced. '
    + 'The law of flotation states that a floating body '
    + 'displaces its own weight of fluid. '
    + 'So an object floats if it can displace fluid weighing as much as '
    + 'itself, '
    + 'and sinks if it cannot.',

  mechanism:
    'Two ideas carry this topic, and both are often half learned. '
    + 'The first is that pressure in a liquid depends on depth and not on '
    + 'amount. '
    + 'A narrow pipe of water two metres tall '
    + 'and a wide tank of water two metres deep '
    + 'have exactly the same pressure at the bottom, '
    + 'even though the tank holds a thousand times more water. '
    + 'The reason is in the formula: '
    + 'pressure equals density times g times depth, '
    + 'and area appears nowhere in it. '
    + 'More water sitting beside you does not press down on you. '
    + 'This is why a water tank on a stand supplies a tap well '
    + 'and a large tank on the ground does not, '
    + 'and why the walls of a dam are built thick at the bottom and thin at '
    + 'the top. '
    + 'The examination question is usually a diagram of oddly shaped '
    + 'connected vessels, '
    + 'asking where the pressure is greatest. '
    + 'The answer is wherever the liquid is deepest, '
    + 'and the widths in the picture are there to mislead. '
    + 'The second idea is flotation, and here is the real misconception. '
    + 'Learners say heavy things sink. '
    + 'A canoe on the Volta weighs far more than a nail, and it floats. '
    + 'What matters is whether the object can push aside a weight of water '
    + 'equal to its own weight. '
    + 'A nail is dense and thin, '
    + 'so the water it pushes aside weighs less than the nail, and it sinks. '
    + 'A canoe is mostly air inside its hull, '
    + 'so it pushes aside a great deal of water before it is far down, '
    + 'and once that water weighs as much as the canoe, the canoe stops '
    + 'sinking. '
    + 'The same steel that sinks as a nail floats as a hull. '
    + 'So the sentence to write is about density, not weight: '
    + 'an object floats if its average density is less than that of the '
    + 'fluid. '
    + 'For the calculations, the place marks are lost is units. '
    + 'Area must be in square metres. '
    + 'A block resting on a face 20 cm by 10 cm has an area of 0.02 square '
    + 'metres, '
    + 'not 200. '
    + 'Converting centimetres to metres means dividing each length by 100, '
    + 'so the area is divided by 10000. '
    + 'Forgetting that gives an answer out by a factor of ten thousand, '
    + 'and it is the single commonest arithmetic failure in the topic. '
    + 'Density must be in kilograms per cubic metre '
    + 'for the answer to come out in pascals, '
    + 'so water is 1000, not 1. '
    + 'What has to be written down is the formula first, '
    + 'then the substitution with units, then the answer with its unit, '
    + 'and for an upthrust question a line naming the principle used. '
    + 'By the Archimedes principle, upthrust equals the weight of water '
    + 'displaced, is a mark.',

  recap:
    'You know that a force can be spread over an area, '
    + 'and that some things float. '
    + 'This gives the formula for pressure, '
    + 'the way it grows with depth, '
    + 'and the exact condition for floating.',

  method: [
    'Decide whether the pressure is from a solid on a surface or from a '
      + 'liquid.',
    'For a solid, convert the area to square metres.',
    'Use pressure equals force over area.',
    'For a liquid, use pressure equals density times g times depth.',
    'Use the depth below the free surface, and ignore the width.',
    'For upthrust, find the volume of fluid displaced.',
    'Multiply by the fluid density and by g to get the weight displaced.',
    'Compare that with the weight of the object to decide float or sink.',
    'Name the principle you used, and give every answer its unit.',
  ],

  worked: [
    {
      level: 2,
      ask: 'A box weighing 300 N rests on a face measuring 2 m by 3 m. '
        + 'Find the pressure on the floor.',
      steps: [
        'Area is 2 times 3, which is 6 square metres.',
        'Pressure is force over area.',
        '300 divided by 6.',
      ],
      answer: '50 pascals.',
    },
    {
      level: 3,
      ask: 'A crate weighing 400 N rests on a base 20 cm by 50 cm. '
        + 'Find the pressure in pascals.',
      steps: [
        'Convert: 20 cm is 0.2 m and 50 cm is 0.5 m.',
        'Area is 0.2 times 0.5, which is 0.1 square metres.',
        '400 divided by 0.1.',
      ],
      answer: '4000 pascals. '
        + 'Using 20 times 50 as the area would give 0.4 Pa, '
        + 'which is wrong by a factor of ten thousand.',
    },
    {
      level: 4,
      ask: 'Find the pressure due to the water at the bottom of a tank 3 m '
        + 'deep. '
        + 'Take the density of water as 1000 kilograms per cubic metre '
        + 'and g as 10.',
      steps: [
        'Pressure equals density times g times depth.',
        '1000 times 10 times 3.',
        'The width of the tank does not enter the calculation.',
      ],
      answer: '30000 pascals. '
        + 'A wider tank of the same depth gives the same answer, '
        + 'because area does not appear in the formula.',
    },
    {
      level: 5,
      ask: 'A wooden block of volume 0.004 cubic metres and mass 2.4 kg '
        + 'is placed in water. '
        + 'Show by calculation whether it floats, '
        + 'and find the fraction of its volume that is submerged. '
        + 'Take g as 10.',
      steps: [
        'Weight of the block is 2.4 times 10, which is 24 N.',
        'If fully submerged it would displace 0.004 cubic metres of water.',
        'That water has mass 1000 times 0.004, which is 4 kg, '
          + 'so weight 40 N.',
        'The maximum upthrust, 40 N, exceeds the weight, 24 N, so it '
          + 'floats.',
        'Floating means upthrust equals weight, so it displaces only 24 N.',
        '24 N of water has mass 2.4 kg and volume 0.0024 cubic metres.',
      ],
      answer: 'It floats, because the upthrust available, 40 N, '
        + 'is greater than its weight of 24 N. '
        + 'Floating, it displaces 0.0024 cubic metres, '
        + 'which is 0.6 of its volume, so 60 per cent is submerged. '
        + 'That is also the ratio of its density, 600, '
        + 'to the density of water, 1000.',
    },
  ],

  traps: [
    {
      mistake: 'Using an area in square centimetres in the pressure '
        + 'formula.',
      why: 'The pascal is a newton per square metre. '
        + 'Converting each length by 100 divides the area by 10000.',
    },
    {
      mistake: 'Thinking a wider tank gives a greater pressure at the '
        + 'bottom.',
      why: 'Pressure equals density times g times depth. '
        + 'Area is not in the formula, so only the depth matters.',
    },
    {
      mistake: 'Saying heavy objects sink and light objects float.',
      why: 'A canoe is heavier than a nail and floats. '
        + 'What decides it is average density against that of the fluid.',
    },
    {
      mistake: 'Taking the density of water as 1 in an SI calculation.',
      why: 'That is 1 gram per cubic centimetre. '
        + 'In SI units it is 1000 kilograms per cubic metre.',
    },
  ],

  extension:
    'A hydrometer measures the density of a liquid '
    + 'by how deep it floats, '
    + 'which is the law of flotation read backwards. '
    + 'It is used to test battery acid and to check whether milk has been '
    + 'watered. '
    + 'A ship has a load line painted on its hull for the same reason: '
    + 'sea water is denser than fresh water, '
    + 'so a ship floats higher at sea than in a river '
    + 'and can safely carry a different load in each.',

  questions: [
    {
      id: 'pres-1',
      ask: 'The unit of pressure is the:',
      kind: 'choice',
      options: ['pascal', 'newton', 'joule'],
      answer: 'pascal',
      teach: 'One pascal is one newton per square metre. '
        + 'The newton is force and the joule is energy.',
      level: 2,
    },
    {
      id: 'pres-2',
      ask: 'A force of 200 N acts on an area of 4 square metres. '
        + 'The pressure in pascals is:',
      kind: 'numeric',
      options: [],
      answer: '50',
      teach: 'Force over area: 200 divided by 4.',
      level: 2,
    },
    {
      id: 'pres-3',
      ask: 'The pressure at the bottom of a tank depends on:',
      kind: 'choice',
      options: [
        'the depth of the liquid',
        'the width of the tank',
        'the volume of liquid held',
      ],
      answer: 'the depth of the liquid',
      teach: 'Pressure equals density times g times depth. '
        + 'Neither width nor volume appears.',
      level: 4,
    },
    {
      id: 'pres-4',
      ask: 'Upthrust on a submerged object equals:',
      kind: 'choice',
      options: [
        'the weight of fluid displaced',
        'the weight of the object',
        'the volume of the object',
      ],
      answer: 'the weight of fluid displaced',
      teach: 'That is the Archimedes principle. '
        + 'It equals the weight of the object only when the object floats.',
      level: 4,
    },
    {
      id: 'pres-5',
      ask: 'A block of density 600 kilograms per cubic metre floats in '
        + 'water. '
        + 'What percentage of it is submerged?',
      kind: 'numeric',
      options: [],
      answer: '60',
      teach: '600 divided by 1000 is 0.6, so 60 per cent. '
        + 'The submerged fraction is the ratio of the densities.',
      level: 5,
    },
  ],
})

/* ── soil and crop production ────────────────────────────────────────────── */

teach({
  topicId: 'agriculture-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Soil is mineral particles, humus, water, air and living things. '
      + 'Texture is the mix of sand, silt and clay, '
      + 'and it decides how water and air move. '
      + 'Sandy soil drains fast and holds little; '
      + 'clay holds water and drains poorly; '
      + 'loam is the balance and suits most crops. '
      + 'Fertiliser supplies nitrogen, phosphorus and potassium.',
    method: [
      'Feel the soil wet to judge the texture.',
      'Match the texture to the crop by its water need.',
      'Check the pH, because it decides what the plant can take up.',
      'For a deficiency, read the symptom and name the nutrient.',
      'Add organic matter to improve either extreme.',
    ],
  },

  idea:
    'Soil is the thin surface layer in which crops grow. '
    + 'It is made of mineral particles from weathered rock, '
    + 'humus from decayed plant and animal matter, '
    + 'water, air, and living organisms from earthworms to bacteria. '
    + 'Texture means the proportions of sand, silt and clay. '
    + 'Sand particles are large, so water drains through quickly '
    + 'and little is held; such soil warms fast and is easy to work '
    + 'but is poor in nutrients. '
    + 'Clay particles are very small, so water is held tightly, '
    + 'drainage is poor and the soil is heavy to work, '
    + 'but it holds nutrients well. '
    + 'Loam is a mixture of all three and suits most crops. '
    + 'Structure means how the particles are grouped into crumbs, '
    + 'and a good crumb structure lets air and water through. '
    + 'Soil pH matters because it controls which nutrients a root can take '
    + 'up; '
    + 'most crops do best between pH 6 and 7. '
    + 'Plants need nitrogen for leaf growth, '
    + 'phosphorus for roots and for fruiting, '
    + 'and potassium for general strength and disease resistance. '
    + 'These three are the N, P and K on a fertiliser bag. '
    + 'Organic manure adds humus as well as nutrients, '
    + 'and it improves the structure of both sandy and clay soils. '
    + 'Inorganic fertiliser supplies nutrients quickly and adds no humus.',

  mechanism:
    'The whole of soil management follows from particle size, '
    + 'and if you hold that one idea the rest can be worked out '
    + 'rather than remembered. '
    + 'Large particles leave large gaps, '
    + 'and water runs through a large gap under its own weight. '
    + 'So a sandy soil drains fast, dries fast and loses dissolved '
    + 'nutrients, '
    + 'which are washed down out of reach of the roots. '
    + 'Small particles leave small gaps, '
    + 'and water in a small gap is held by surface forces '
    + 'against its own weight. '
    + 'So a clay soil stays wet, excludes air, and waterlogs. '
    + 'Now the practical conclusions follow. '
    + 'Cassava and groundnut do well in a light sandy loam, '
    + 'because the swollen root or the pod needs to expand '
    + 'and will rot in standing water. '
    + 'Rice is grown in a clay soil in the Volta lowlands, '
    + 'because the poor drainage that ruins cassava '
    + 'is exactly what holds the water a paddy needs. '
    + 'The same soil property is a defect for one crop and the point for '
    + 'another, '
    + 'which is why the examination asks you to relate the soil to the crop '
    + 'rather than to grade soils from good to bad. '
    + 'A learner who writes that clay is a bad soil has misread the '
    + 'question. '
    + 'The second thing to get right is what fertiliser does and does not '
    + 'do. '
    + 'A bag of NPK 15 15 15 supplies 15 per cent each of nitrogen, '
    + 'phosphorus and potassium. '
    + 'It supplies no humus at all. '
    + 'So fertiliser feeds this season crop and does nothing for the soil '
    + 'itself, '
    + 'and a sandy field given fertiliser year after year with no organic '
    + 'matter '
    + 'gets steadily worse at holding either water or the fertiliser. '
    + 'Poultry manure or compost added to the same field '
    + 'raises the humus, improves the crumb structure, '
    + 'and so holds both. '
    + 'This is the argument for using both together, '
    + 'and stating it is the difference between a two mark answer and a five '
    + 'mark one. '
    + 'The third is reading a deficiency. '
    + 'Nitrogen shortage shows as pale yellow older leaves and stunted '
    + 'growth, '
    + 'because nitrogen is needed to make the chlorophyll and the protein, '
    + 'and the plant moves what little it has to the new leaves. '
    + 'Phosphorus shortage shows as poor root growth and a purple tinge. '
    + 'Potassium shortage shows as scorching at the leaf edges. '
    + 'Name the symptom and the nutrient together, and say which leaves, '
    + 'because older or younger is often the detail that distinguishes two '
    + 'answers. '
    + 'Last, where equipment is short. '
    + 'A soil test kit for pH may not be in the school store. '
    + 'The examinable part is the interpretation, '
    + 'and that can be learned on paper: '
    + 'below pH 5.5 add lime, above 7.5 add organic matter or sulphur, '
    + 'and most crops want 6 to 7. '
    + 'The feel test for texture needs no equipment at all: '
    + 'wet soil that will not hold together is sandy, '
    + 'soil that rolls into a smooth ribbon is clay, '
    + 'and soil that rolls but cracks is loam. '
    + 'That test is worth marks and costs nothing.',

  recap:
    'You know that plants need soil, water and light, '
    + 'and that manure helps. '
    + 'This says what soil is made of, '
    + 'why texture changes how it behaves, '
    + 'and what a bag of fertiliser actually supplies.',

  method: [
    'Describe the soil by texture, using the wet feel test.',
    'State how that texture handles water and air.',
    'Name the crop and its water and root requirements.',
    'Match the two, and say why.',
    'Check the pH against the 6 to 7 range most crops want.',
    'For a deficiency, name the symptom, which leaves, and the nutrient.',
    'Choose fertiliser for the nutrient and manure for the structure.',
    'Say what each addition does, not just that it helps.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Name the three major nutrients supplied by NPK fertiliser '
        + 'and one job of each.',
      steps: [
        'N is nitrogen, P is phosphorus, K is potassium.',
      ],
      answer: 'Nitrogen for leaf and stem growth, '
        + 'phosphorus for root development and fruiting, '
        + 'and potassium for strength and resistance to disease.',
    },
    {
      level: 3,
      ask: 'A farmer at Keta has a heavy clay soil. '
        + 'Explain why it waterlogs, '
        + 'and name a crop that suits it.',
      steps: [
        'Clay particles are very small.',
        'Small gaps hold water by surface forces.',
        'Water does not drain, so air is excluded.',
        'A crop that wants standing water will do well.',
      ],
      answer: 'The particles are very small, '
        + 'so the spaces between them are small and hold water tightly '
        + 'instead of letting it drain. '
        + 'Rice suits the soil, '
        + 'because a paddy needs the water that poor drainage keeps.',
    },
    {
      level: 4,
      ask: 'A maize farmer sees the older lower leaves turning pale yellow '
        + 'while the plants stay short. '
        + 'Name the deficiency, explain the symptom, '
        + 'and say what you would apply.',
      steps: [
        'Yellowing of older leaves first points to nitrogen.',
        'Nitrogen is needed for chlorophyll and protein.',
        'The plant moves its limited nitrogen to the young leaves, '
          + 'so the old ones go pale.',
      ],
      answer: 'Nitrogen deficiency. '
        + 'Nitrogen is needed to make chlorophyll, '
        + 'and the plant moves what it has to the new leaves, '
        + 'so the older leaves lose their green first '
        + 'and growth is stunted. '
        + 'Apply a nitrogen fertiliser such as sulphate of ammonia or urea, '
        + 'as a top dressing.',
    },
    {
      level: 5,
      ask: 'A farmer has applied NPK to the same sandy field for six '
        + 'seasons '
        + 'and says the yields keep falling. '
        + 'Explain why, and give two things you would advise.',
      steps: [
        'Sandy soil has large pores and drains fast.',
        'Dissolved fertiliser is leached below the root zone.',
        'NPK adds no humus, so water holding does not improve.',
        'Without humus the crumb structure stays poor.',
      ],
      answer: 'A sandy soil drains quickly, '
        + 'so much of the dissolved fertiliser is leached past the roots '
        + 'and wasted. '
        + 'NPK supplies nutrients but no organic matter, '
        + 'so the soil never improves at holding water or nutrients '
        + 'and the problem gets worse each season. '
        + 'Advise adding poultry manure or compost to raise the humus '
        + 'and improve the structure, '
        + 'and splitting the fertiliser into two smaller top dressings '
        + 'so less is lost between applications. '
        + 'A legume such as cowpea in rotation would also fix nitrogen.',
    },
  ],

  traps: [
    {
      mistake: 'Calling clay a bad soil and sand a good one, or the '
        + 'reverse.',
      why: 'Neither is true in general. '
        + 'A soil is suited or unsuited to a particular crop, '
        + 'and clay is right for rice.',
    },
    {
      mistake: 'Saying fertiliser improves the soil.',
      why: 'It feeds the crop. '
        + 'Only organic matter adds humus and improves the structure.',
    },
    {
      mistake: 'Naming a deficiency without saying which leaves are '
        + 'affected.',
      why: 'Older leaves first points to nitrogen. '
        + 'The detail is often what separates two possible answers.',
    },
    {
      mistake: 'Treating soil pH as something only a laboratory can use.',
      why: 'The examinable part is the decision: '
        + 'lime below 5.5, organic matter above 7.5, '
        + 'and most crops want 6 to 7.',
    },
  ],

  extension:
    'Crop rotation is soil science applied over years rather than one '
    + 'season. '
    + 'A legume such as cowpea or groundnut carries bacteria in nodules on '
    + 'its roots '
    + 'that fix nitrogen from the air into the soil, '
    + 'so a cereal planted after it finds nitrogen already there. '
    + 'Rotation also breaks the life cycle of pests '
    + 'that specialise in one crop, '
    + 'and alternating deep and shallow rooted crops '
    + 'draws nutrients from different depths. '
    + 'It is the cheapest soil improvement available to a Ghanaian farmer, '
    + 'because it costs nothing but planning.',

  questions: [
    {
      id: 'soil-1',
      ask: 'Which soil drains the fastest?',
      kind: 'choice',
      options: ['sandy', 'clay', 'loam'],
      answer: 'sandy',
      teach: 'Large particles leave large gaps, '
        + 'and water runs through a large gap under its own weight.',
      level: 2,
    },
    {
      id: 'soil-2',
      ask: 'The N in NPK fertiliser stands for a nutrient needed mainly '
        + 'for:',
      kind: 'choice',
      options: ['leaf and stem growth', 'root growth', 'disease resistance'],
      answer: 'leaf and stem growth',
      teach: 'Nitrogen for leaves, phosphorus for roots, '
        + 'potassium for strength and resistance.',
      level: 3,
    },
    {
      id: 'soil-3',
      ask: 'Rice is grown on clay soil because clay:',
      kind: 'choice',
      options: [
        'holds water instead of draining it',
        'is rich in nitrogen',
        'warms up quickly',
      ],
      answer: 'holds water instead of draining it',
      teach: 'A paddy needs standing water. '
        + 'The poor drainage that ruins cassava is the point for rice.',
      level: 4,
    },
    {
      id: 'soil-4',
      ask: 'Pale yellow older leaves on a maize plant suggest a shortage '
        + 'of:',
      kind: 'choice',
      options: ['nitrogen', 'potassium', 'phosphorus'],
      answer: 'nitrogen',
      teach: 'Nitrogen makes chlorophyll, '
        + 'and the plant moves what it has to the young leaves, '
        + 'so the old ones pale first.',
      level: 4,
    },
    {
      id: 'soil-5',
      ask: 'Most crops grow best at a soil pH of about:',
      kind: 'numeric',
      options: [],
      answer: '6.5',
      teach: 'Between 6 and 7, so about 6.5. '
        + 'Below 5.5 add lime; above 7.5 add organic matter.',
      level: 5,
    },
  ],
})
