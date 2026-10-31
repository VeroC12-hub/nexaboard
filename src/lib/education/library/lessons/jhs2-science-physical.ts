/**
 * Stored lessons for JHS 2 Integrated Science: matter, energy and forces.
 *
 * Written at about grade 7, with a `brief` form on every topic.
 *
 * ── Every one of these is the particle picture again ───────────────────────
 *
 * `particles-jhs` in the JHS 1 file said that JHS science answers "why" with
 * one of two things: what the particles are doing, or where the energy went.
 * These seven topics are that claim being cashed in.
 *
 * Separating a mixture works because the particles were never joined. Heat
 * conduction is particles passing energy on without moving far; convection is
 * the particles themselves moving. Density is how much matter is packed into
 * a space. Sound is particles being pushed in waves. So each lesson here
 * names the particle behaviour rather than describing the effect, because the
 * effect is what primary school already taught.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── atoms and the periodic table ───────────────────────────────────────── */

teach({
  topicId: 'atoms-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An atom has a nucleus of protons and neutrons, '
      + 'with electrons around it. '
      + 'The number of protons decides which element it is. '
      + 'In the periodic table, a group is a column and a period is a row. '
      + 'Elements in one group behave alike '
      + 'because they have the same number of outer electrons.',
    method: [
      'Give the proton number first. It names the element.',
      'Read the group from the column and the period from the row.',
      'Explain behaviour from the outer electrons.',
    ],
  },

  idea:
    'An atom has a central nucleus containing protons, which are positive, '
    + 'and neutrons, which have no charge. '
    + 'Electrons, which are negative, move around the nucleus in shells. '
    + 'The number of protons is the atomic number, '
    + 'and it decides which element the atom is. '
    + 'A neutral atom has as many electrons as protons. '
    + 'The periodic table arranges elements by atomic number. '
    + 'A group is a vertical column, '
    + 'and a period is a horizontal row. '
    + 'Elements in the same group have the same number of electrons in '
    + 'their outer shell.',

  mechanism:
    'The periodic table looks like a table somebody arranged for '
    + 'convenience, '
    + 'and it is not. '
    + 'It is a consequence of how electrons fill shells, '
    + 'and that is why it predicts behaviour. '
    + 'The first shell holds two electrons and the second holds eight. '
    + 'So lithium, with three electrons, has two in the first shell and one '
    + 'left over. '
    + 'Sodium, with eleven, has two, then eight, then one left over. '
    + 'Both end with a single outer electron, '
    + 'and that is why both sit in group one '
    + 'and why both react violently with water. '
    + 'The group number tells you the outer electrons, '
    + 'and the outer electrons are what an atom reacts with, '
    + 'so the column predicts the chemistry. '
    + 'The period tells you how many shells are in use. '
    + 'And the noble gases on the far right are unreactive '
    + 'for the single reason that their outer shell is already full, '
    + 'so there is nothing to gain by reacting. '
    + 'That one explanation covers a whole column of elements, '
    + 'which is what a good table does.',

  recap:
    'You know that elements cannot be broken into anything simpler, '
    + 'and that compounds are elements joined. '
    + 'This looks inside the atom '
    + 'and explains why the elements fall into families.',

  method: [
    'State the atomic number: the number of protons.',
    'For a neutral atom, the electrons equal the protons.',
    'Fill the shells: two in the first, then eight.',
    'Count the electrons left in the outer shell.',
    'That number is the group.',
    'The number of shells in use is the period.',
    'Explain reactivity from the outer shell, not from the total.',
  ],

  worked: [
    {
      level: 3,
      ask: 'An atom has 6 protons. What is its atomic number, '
        + 'and how many electrons does it have if it is neutral?',
      steps: [
        'The atomic number is the number of protons.',
        'A neutral atom has equal electrons.',
      ],
      answer: 'Atomic number 6, and 6 electrons. It is carbon.',
    },
    {
      level: 4,
      ask: 'Sodium has 11 electrons. '
        + 'Which group and period is it in?',
      steps: [
        'First shell takes 2, leaving 9.',
        'Second shell takes 8, leaving 1.',
        'So three shells are in use and one electron is outermost.',
      ],
      answer: 'Group 1, period 3.',
    },
    {
      level: 5,
      ask: 'Why are the noble gases unreactive?',
      steps: [
        'Reactions happen through outer electrons.',
        'A noble gas has a full outer shell.',
        'There is nothing to gain by giving or taking an electron.',
      ],
      answer: 'Because their outer shells are already full, '
        + 'so they have no reason to gain, lose or share electrons.',
    },
  ],

  traps: [
    {
      mistake: 'Confusing atomic number with mass number.',
      why: 'The atomic number counts protons only. '
        + 'The mass number counts protons and neutrons together.',
    },
    {
      mistake: 'Explaining reactivity from the total number of electrons.',
      why: 'Only the outer shell takes part. '
        + 'That is why sodium and lithium behave alike despite differing in '
        + 'size.',
    },
    {
      mistake: 'Mixing up group and period.',
      why: 'Group is the column and gives the outer electrons. '
        + 'Period is the row and gives the number of shells.',
    },
    {
      mistake: 'Thinking electrons sit still in rings.',
      why: 'The shell diagram is a model of energy levels, '
        + 'not a picture of where an electron is.',
    },
  ],

  extension:
    'An ion is an atom that has lost or gained electrons, '
    + 'so it is charged. '
    + 'Group 1 atoms lose one easily and become positive. '
    + 'Group 7 atoms gain one and become negative. '
    + 'This is why sodium and chlorine combine so readily.',

  questions: [
    {
      id: 'atm-1',
      ask: 'What decides which element an atom is?',
      kind: 'choice',
      options: [
        'The number of protons',
        'The number of neutrons',
        'Its mass',
      ],
      answer: 'The number of protons',
      teach: 'That number is the atomic number.',
      level: 3,
    },
    {
      id: 'atm-2',
      ask: 'What does the group number tell you?',
      kind: 'choice',
      options: [
        'The number of outer electrons',
        'The number of shells',
        'The atomic mass',
      ],
      answer: 'The number of outer electrons',
      teach: 'Which is why one column of elements behaves alike.',
      level: 4,
    },
    {
      id: 'atm-3',
      ask: 'Why do lithium and sodium react similarly?',
      kind: 'choice',
      options: [
        'Both have one electron in their outer shell',
        'Both have the same mass',
        'Both are in the same period',
      ],
      answer: 'Both have one electron in their outer shell',
      teach: 'Reactions happen through outer electrons, '
        + 'so the column predicts the chemistry.',
      level: 5,
    },
  ],
})

/* ── separating mixtures ───────────────────────────────────────────────── */

teach({
  topicId: 'separating-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A mixture can be separated by a physical method, '
      + 'because nothing in it is joined. '
      + 'Choose the method from the difference you can use. '
      + 'Size gives filtration. '
      + 'Boiling point gives distillation. '
      + 'Solubility gives evaporation and chromatography.',
    method: [
      'Name what difference there is between the parts.',
      'Choose the method that uses that difference.',
      'Say which part you keep and where it ends up.',
    ],
  },

  idea:
    'Filtration separates an insoluble solid from a liquid. '
    + 'It uses the difference in particle size. '
    + 'Evaporation recovers a dissolved solid by driving the liquid off. '
    + 'Simple distillation recovers the liquid instead. '
    + 'The liquid is boiled and the vapour is cooled back. '
    + 'Fractional distillation parts two liquids. '
    + 'It works when they boil at different temperatures. '
    + 'Chromatography parts substances that are dissolved. '
    + 'They travel at different speeds through paper. '
    + 'A magnet picks out magnetic material. '
    + 'Decanting pours a liquid off a settled solid.',

  mechanism:
    'Learners memorise the list and then cannot choose, '
    + 'and the choice is the only thing an examination asks. '
    + 'There is a single question that makes it: '
    + 'what is different about the parts? '
    + 'Every method exploits one difference and nothing else. '
    + 'Sand in water differ in size, '
    + 'so a barrier with holes between those sizes separates them, '
    + 'and that is filtration. '
    + 'Salt in water do not differ in size at all, '
    + 'because the salt is dissolved and its particles are as small as the '
    + 'water’s, '
    + 'which is exactly why filtering salt water is pointless and the salt '
    + 'goes straight through. '
    + 'They differ in boiling point instead, '
    + 'so you use heat: evaporation if you want the salt, '
    + 'distillation if you want the water. '
    + 'Two liquids that mix differ only in boiling point, '
    + 'so you need a column that lets the lower boiling one get away first. '
    + 'And inks differ in how strongly they cling to paper, '
    + 'so chromatography lets the solvent carry them different distances. '
    + 'One question, four answers, no memorising. '
    + 'The reason all of this works is that a mixture is not joined. '
    + 'The parts are only near each other, '
    + 'so no chemical change is needed to part them, '
    + 'which is the difference between a mixture and a compound.',

  recap:
    'You separated mixtures by hand and by sieving in primary school. '
    + 'This adds the methods for things too small to pick out, '
    + 'and asks you to justify the one you chose.',

  method: [
    'State what the mixture is made of.',
    'Ask what is different about the parts: size, boiling point, '
      + 'solubility, magnetism.',
    'Choose the method that uses that difference.',
    'Say which part you are keeping.',
    'Name the apparatus.',
    'Say where each part ends up: residue, filtrate, distillate.',
    'Justify the choice in one sentence.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How would you separate sand from water?',
      steps: [
        'Sand does not dissolve, so the particles differ in size.',
        'A barrier with small holes will hold the sand.',
      ],
      answer: 'Filtration. '
        + 'The sand is the residue and the water is the filtrate.',
    },
    {
      level: 4,
      ask: 'You want pure water from salt water. Which method, and why?',
      steps: [
        'Salt and water do not differ in particle size.',
        'They differ in boiling point.',
        'You want the water, so collect the vapour.',
      ],
      answer: 'Simple distillation. '
        + 'The water boils off and is condensed and collected, '
        + 'leaving the salt behind.',
    },
    {
      level: 5,
      ask: 'Why does filtering salt water fail?',
      steps: [
        'Filtration works on a difference in particle size.',
        'Dissolved salt particles are as small as the water particles.',
        'So any hole that lets water through lets salt through.',
      ],
      answer: 'Because the salt is dissolved, '
        + 'so its particles are no bigger than the water’s. '
        + 'There is no size difference for a filter to use.',
    },
  ],

  traps: [
    {
      mistake: 'Suggesting filtration for a dissolved substance.',
      why: 'Dissolved particles pass through any filter. '
        + 'A filter needs a size difference.',
    },
    {
      mistake: 'Confusing evaporation with distillation.',
      why: 'Evaporation keeps the solid and loses the liquid. '
        + 'Distillation keeps the liquid.',
    },
    {
      mistake: 'Naming a method without naming the difference it uses.',
      why: 'The justification is the mark. '
        + '"Distillation, because they have different boiling points."',
    },
    {
      mistake: 'Thinking a separation changes the substances.',
      why: 'A mixture was never joined. '
        + 'Separating it is physical, and both parts are unchanged.',
    },
  ],

  extension:
    'Crude oil is a mixture of many liquids. '
    + 'Each one boils at a different temperature. '
    + 'So it is separated by fractional distillation. '
    + 'The tall column in a refinery does what the laboratory apparatus '
    + 'does, at a size that pays.',

  questions: [
    {
      id: 'sep-1',
      ask: 'Which method separates an insoluble solid from a liquid?',
      kind: 'choice',
      options: ['Filtration', 'Distillation', 'Chromatography'],
      answer: 'Filtration',
      teach: 'It uses the difference in particle size.',
      level: 3,
    },
    {
      id: 'sep-2',
      ask: 'You want the salt, not the water. Which method?',
      kind: 'choice',
      options: ['Evaporation', 'Distillation', 'Filtration'],
      answer: 'Evaporation',
      teach: 'Evaporation keeps the solid. Distillation keeps the liquid.',
      level: 4,
    },
    {
      id: 'sep-3',
      ask: 'Why can a mixture be separated physically?',
      kind: 'choice',
      options: [
        'Its parts were never chemically joined',
        'Its parts are always different sizes',
        'Mixtures are always liquids',
      ],
      answer: 'Its parts were never chemically joined',
      teach: 'That is the difference between a mixture and a compound.',
      level: 5,
    },
  ],
})

/* ── speed, distance and time ──────────────────────────────────────────── */

teach({
  topicId: 'motion-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Speed is distance divided by time. '
      + 'On a distance time graph, '
      + 'the steepness of the line IS the speed, '
      + 'and a flat line means stopped. '
      + 'Average speed is total distance over total time, '
      + 'not the average of the speeds.',
    method: [
      'Write the units with every value.',
      'Speed equals distance over time; rearrange for the one you want.',
      'On a graph, read the steepness, not the height.',
    ],
  },

  idea:
    'Speed is how far something travels in a given time: '
    + 'distance divided by time. '
    + 'The units follow the quantities: '
    + 'metres per second, or kilometres per hour. '
    + 'Rearranged, distance is speed times time, '
    + 'and time is distance divided by speed. '
    + 'On a distance time graph, time goes along the bottom '
    + 'and distance up the side. '
    + 'A steeper line means a greater speed. '
    + 'A horizontal line means the object is not moving. '
    + 'Average speed is the total distance divided by the total time.',

  mechanism:
    'The distance time graph is where the marks are, '
    + 'and the mistake is reading the height instead of the slope. '
    + 'Height tells you how far from the start the object is. '
    + 'Slope tells you how fast it is going. '
    + 'A line that is high and flat means the object is far away and '
    + 'standing still, '
    + 'which learners often read as fast because the line is high up. '
    + 'So the habit is to ask how much the line rises for each step along, '
    + 'because that ratio is distance over time, which is the definition of '
    + 'speed. '
    + 'The graph is not a representation of the speed. '
    + 'Its slope is the speed. '
    + 'The other thing worth getting right is average speed, '
    + 'because the obvious method is wrong. '
    + 'Drive 60 km at 60 km per hour and then 60 km at 20 km per hour. '
    + 'The average of the speeds is 40. '
    + 'But the first part took one hour and the second took three, '
    + 'so you covered 120 km in 4 hours, which is 30 km per hour. '
    + 'The slow part lasted longer, so it counts for more. '
    + 'Average speed is always total distance over total time, '
    + 'and averaging the speeds is only right when the times happen to be '
    + 'equal.',

  recap:
    'You can divide and you can read a graph with two axes. '
    + 'This connects them: '
    + 'the slope of a distance time graph is the speed.',

  method: [
    'Write down distance, time and speed with their units.',
    'Convert units first if they do not match.',
    'Use speed equals distance over time.',
    'Rearrange for whichever is unknown.',
    'On a graph, label both axes with quantity and unit.',
    'Read speed as rise over run, not as height.',
    'A flat section means stopped.',
    'For average speed, add the distances and add the times.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A car travels 150 km in 3 hours. What is its speed?',
      steps: [
        'Speed is distance over time.',
        '150 divided by 3.',
      ],
      answer: '50 km per hour.',
    },
    {
      level: 4,
      ask: 'A distance time graph is horizontal for 10 seconds. '
        + 'What is happening?',
      steps: [
        'Distance is not changing.',
        'Time is passing.',
        'Speed is change in distance over change in time, so it is zero.',
      ],
      answer: 'The object is stopped.',
    },
    {
      level: 5,
      ask: 'A lorry covers 60 km at 60 km/h, then 60 km at 20 km/h. '
        + 'Find the average speed.',
      steps: [
        'First part takes 1 hour.',
        'Second part takes 3 hours.',
        'Total distance is 120 km and total time is 4 hours.',
      ],
      answer: '30 km per hour. '
        + 'Not 40, because the slow part lasted three times as long.',
    },
  ],

  traps: [
    {
      mistake: 'Reading the height of a distance time graph as the speed.',
      why: 'Height is distance from the start. '
        + 'The slope is the speed.',
    },
    {
      mistake: 'Averaging two speeds to get the average speed.',
      why: 'That is only right if the two times are equal. '
        + 'Use total distance over total time.',
    },
    {
      mistake: 'Mixing units within one calculation.',
      why: 'Metres with hours gives a meaningless answer. '
        + 'Convert first.',
    },
    {
      mistake: 'Giving a speed with no unit.',
      why: '50 could be km/h or m/s. '
        + 'The unit is part of the answer.',
    },
  ],

  extension:
    'Acceleration is how fast the speed changes, '
    + 'so it needs a speed time graph rather than a distance time one. '
    + 'On that graph the slope is the acceleration '
    + 'and the area underneath is the distance travelled.',

  questions: [
    {
      id: 'mot-1',
      ask: 'A runner covers 100 m in 20 s. What is the speed?',
      kind: 'choice',
      options: ['5 m/s', '20 m/s', '2000 m/s'],
      answer: '5 m/s',
      teach: 'Distance divided by time: 100 over 20.',
      level: 3,
    },
    {
      id: 'mot-2',
      ask: 'What does a horizontal line on a distance time graph mean?',
      kind: 'choice',
      options: ['Stopped', 'Constant speed', 'Slowing down'],
      answer: 'Stopped',
      teach: 'Distance is not changing, so the speed is zero.',
      level: 4,
    },
    {
      id: 'mot-3',
      ask: 'How is average speed found?',
      kind: 'choice',
      options: [
        'Total distance divided by total time',
        'The average of the speeds',
        'The highest speed reached',
      ],
      answer: 'Total distance divided by total time',
      teach: 'Averaging the speeds ignores how long each part lasted.',
      level: 5,
    },
  ],
})

/* ── density ───────────────────────────────────────────────────────────── */

teach({
  topicId: 'density-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Density is mass divided by volume: '
      + 'how much matter is packed into a space. '
      + 'Something floats if its density is less than the liquid’s. '
      + 'A ship floats because its shape encloses air, '
      + 'so the whole ship is less dense than water even though steel is '
      + 'not.',
    method: [
      'Find the mass and the volume, with units.',
      'Divide mass by volume.',
      'Compare with the liquid’s density to decide floating.',
    ],
  },

  idea:
    'Density is mass divided by volume, '
    + 'measured in grams per cubic centimetre or kilograms per cubic metre. '
    + 'It says how much matter is packed into a given space. '
    + 'Water has a density of about 1 gram per cubic centimetre. '
    + 'An object floats in a liquid if its density is less than the '
    + 'liquid’s, '
    + 'and sinks if it is greater. '
    + 'The volume of a regular solid is calculated, '
    + 'and the volume of an irregular one is found by displacement, '
    + 'using the water it pushes aside.',

  mechanism:
    'Density is not weight, and keeping them apart is the whole topic. '
    + 'A lorry load of feathers weighs more than a nail, '
    + 'and the nail sinks while the feathers do not, '
    + 'so what decides sinking cannot be weight. '
    + 'It is weight for a given amount of space, which is density. '
    + 'Then the steel ship stops being a puzzle. '
    + 'Steel has a density of about 8 grams per cubic centimetre, '
    + 'so a solid lump of steel sinks. '
    + 'But a ship is not a lump of steel. '
    + 'It is a steel shell around a very large volume of air, '
    + 'and the density that matters is the mass of the whole ship divided '
    + 'by the whole volume it occupies, including the air. '
    + 'That comes out below 1, so it floats. '
    + 'This also explains the two things that sink a ship. '
    + 'Load it until the mass rises enough and the average density passes '
    + '1. '
    + 'Or hole it, so water replaces the air and the volume of air falls. '
    + 'Either way the same number crosses the same threshold. '
    + 'The displacement method for volume comes from the same idea: '
    + 'an object cannot be in the same place as the water, '
    + 'so the water it pushes out of the way has exactly its volume.',

  recap:
    'You can find the volume of a box and you know mass is measured in '
    + 'grams. '
    + 'This divides one by the other, '
    + 'and that single number decides whether a thing floats.',

  method: [
    'Measure the mass on a balance.',
    'For a regular solid, calculate the volume from its measurements.',
    'For an irregular solid, measure the water it displaces.',
    'Divide the mass by the volume.',
    'Give the unit: g per cubic cm.',
    'To decide floating, compare with the density of the liquid.',
    'For a hollow object, use the whole volume it occupies, air included.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A block has a mass of 60 g and a volume of 20 cubic cm. '
        + 'Find its density.',
      steps: [
        'Density is mass over volume.',
        '60 divided by 20.',
      ],
      answer: '3 g per cubic cm.',
    },
    {
      level: 4,
      ask: 'A stone of mass 75 g raises the water in a cylinder from 50 to '
        + '75 cubic cm. Find its density, and say whether it floats.',
      steps: [
        'The displaced water is 25 cubic cm, so that is its volume.',
        '75 divided by 25 is 3.',
        'Water is about 1.',
      ],
      answer: '3 g per cubic cm, so it sinks.',
    },
    {
      level: 5,
      ask: 'Steel is eight times as dense as water. '
        + 'Why does a steel ship float?',
      steps: [
        'A ship is a steel shell around a large volume of air.',
        'Density is the mass of the whole thing over the whole volume.',
        'The air adds volume and almost no mass.',
        'So the average density of the ship falls below that of water.',
      ],
      answer: 'Because its shape encloses a large volume of air. '
        + 'The average density of the whole ship, air included, '
        + 'is less than that of water, even though steel is not.',
    },
  ],

  traps: [
    {
      mistake: 'Saying heavy things sink.',
      why: 'A ship is heavier than a nail and floats. '
        + 'Density decides, not mass.',
    },
    {
      mistake: 'Using the volume of the material instead of the object.',
      why: 'For a hollow object the enclosed air counts, '
        + 'and that is exactly why ships float.',
    },
    {
      mistake: 'Reading the displaced volume as the final reading.',
      why: 'It is the difference between the two readings.',
    },
    {
      mistake: 'Leaving the unit off a density.',
      why: 'A density without a unit cannot be compared with water.',
    },
  ],

  extension:
    'A hot air balloon is the same principle in a gas. '
    + 'Heating the air inside makes its particles spread out, '
    + 'so the same volume holds less mass, '
    + 'and the balloon becomes less dense than the air around it.',

  questions: [
    {
      id: 'den-1',
      ask: 'Density is:',
      kind: 'choice',
      options: [
        'mass divided by volume',
        'volume divided by mass',
        'mass times volume',
      ],
      answer: 'mass divided by volume',
      teach: 'It is how much matter is packed into a space.',
      level: 3,
    },
    {
      id: 'den-2',
      ask: 'An object has density 0.8 g per cubic cm. In water it will:',
      kind: 'choice',
      options: ['Float', 'Sink', 'Dissolve'],
      answer: 'Float',
      teach: 'Water is about 1, and anything less dense floats.',
      level: 4,
    },
    {
      id: 'den-3',
      ask: 'What sinks a holed ship?',
      kind: 'choice',
      options: [
        'Water replaces the air, raising the average density',
        'The steel becomes heavier',
        'The hole adds mass',
      ],
      answer: 'Water replaces the air, raising the average density',
      teach: 'The air was what kept the average density below that of '
        + 'water.',
      level: 5,
    },
  ],
})

/* ── heat transfer ─────────────────────────────────────────────────────── */

teach({
  topicId: 'heat-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Conduction passes energy from particle to particle without the '
      + 'particles travelling, so it needs matter and works best in '
      + 'solids. '
      + 'Convection moves the hot matter itself, so it needs a fluid. '
      + 'Radiation travels as waves and needs nothing at all.',
    method: [
      'Ask whether the matter itself moved.',
      'If it did not, it is conduction. If it did, convection.',
      'If there is nothing in between, it must be radiation.',
    ],
  },

  idea:
    'Heat always moves from hotter to colder, by three means. '
    + 'In conduction, particles vibrate harder and knock their neighbours, '
    + 'passing the energy along without travelling themselves. '
    + 'It works best in solids, especially metals. '
    + 'In convection, the heated part of a liquid or gas expands, '
    + 'becomes less dense, and rises, '
    + 'while cooler fluid sinks to take its place, making a current. '
    + 'In radiation, energy travels as waves '
    + 'and needs no material at all, which is how the sun reaches us. '
    + 'Dark dull surfaces absorb and emit radiation best, '
    + 'and shiny light ones reflect it.',

  mechanism:
    'The three are told apart by one question: did the matter itself move? '
    + 'Hold a metal spoon in hot soup and the handle gets hot. '
    + 'No metal travelled up the spoon, '
    + 'so the energy was passed from particle to particle, '
    + 'which is conduction. '
    + 'Heat a pan of water and the water at the bottom actually rises to '
    + 'the top. '
    + 'The matter moved, carrying its energy with it, '
    + 'which is convection. '
    + 'Stand in the sun and you warm up across empty space, '
    + 'where there is no matter to pass anything along or to carry '
    + 'anything, '
    + 'so it must be radiation. '
    + 'From that question everything else follows. '
    + 'Conduction cannot happen well in a gas, '
    + 'because the particles are too far apart to knock each other often, '
    + 'which is why air is a good insulator '
    + 'and why a blanket, a thatched roof and a vacuum flask all work by '
    + 'trapping air. '
    + 'Convection cannot happen in a solid, '
    + 'because the particles cannot change places. '
    + 'And convection explains why a freezer compartment goes at the top '
    + 'of a refrigerator and a heater at the bottom of a room: '
    + 'you put the source where the current it makes will circulate.',

  recap:
    'You know heat moves from hot things to cold things. '
    + 'This names the three ways it travels '
    + 'and explains each from what the particles are doing.',

  method: [
    'State which object is hotter.',
    'Ask whether any matter travelled.',
    'No matter moved, and matter is present: conduction.',
    'The hot matter itself moved: convection.',
    'No matter in between at all: radiation.',
    'For conduction, explain by particles knocking neighbours.',
    'For convection, explain by expansion, lower density and rising.',
    'For radiation, mention surface colour if the question allows.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A metal spoon in hot tea becomes hot at the handle. '
        + 'Which transfer is this?',
      steps: [
        'No metal travelled along the spoon.',
        'Energy passed from particle to particle.',
      ],
      answer: 'Conduction.',
    },
    {
      level: 4,
      ask: 'Why does the water at the bottom of a heated pan rise?',
      steps: [
        'Heating makes the particles spread out.',
        'The same mass now takes more space, so it is less dense.',
        'Less dense fluid rises through denser fluid.',
      ],
      answer: 'Because heating expands it and makes it less dense, '
        + 'so it rises and cooler water sinks to replace it, '
        + 'forming a convection current.',
    },
    {
      level: 5,
      ask: 'Why is air a poor conductor, and how is that useful?',
      steps: [
        'Conduction needs particles close enough to knock each other.',
        'In a gas the particles are far apart.',
        'So energy passes slowly.',
        'Trapping air therefore slows heat loss.',
      ],
      answer: 'Because its particles are far apart and rarely collide, '
        + 'so energy passes slowly. '
        + 'That is why blankets, thatched roofs and double walls work: '
        + 'they trap air.',
    },
  ],

  traps: [
    {
      mistake: 'Saying heat rises.',
      why: 'Hot fluid rises. '
        + 'Heat by conduction travels in any direction, '
        + 'and radiation travels in straight lines everywhere.',
    },
    {
      mistake: 'Explaining convection without mentioning density.',
      why: 'The rising happens because the heated fluid became less dense. '
        + 'That is the mechanism, and the mark.',
    },
    {
      mistake: 'Thinking radiation needs air.',
      why: 'It crosses empty space. '
        + 'That is how the sun heats the earth.',
    },
    {
      mistake: 'Saying metals are hot and wood is cold.',
      why: 'At the same temperature both are equally hot. '
        + 'Metal feels colder because it conducts heat away from your hand '
        + 'faster.',
    },
  ],

  extension:
    'A vacuum flask blocks all three at once: '
    + 'a vacuum stops conduction and convection, '
    + 'since both need matter, '
    + 'and silvered walls reflect radiation. '
    + 'Its design is the three mechanisms listed as three defences.',

  questions: [
    {
      id: 'hea-1',
      ask: 'Which transfer needs no matter at all?',
      kind: 'choice',
      options: ['Radiation', 'Conduction', 'Convection'],
      answer: 'Radiation',
      teach: 'It travels as waves, which is how the sun reaches us across '
        + 'space.',
      level: 3,
    },
    {
      id: 'hea-2',
      ask: 'Why does heated water rise?',
      kind: 'choice',
      options: [
        'It expands and becomes less dense',
        'Heat always goes up',
        'It becomes lighter in mass',
      ],
      answer: 'It expands and becomes less dense',
      teach: 'Same mass in more space means lower density, so it rises.',
      level: 4,
    },
    {
      id: 'hea-3',
      ask: 'Why does metal feel colder than wood at the same temperature?',
      kind: 'choice',
      options: [
        'It conducts heat away from your hand faster',
        'It is actually colder',
        'It reflects more radiation',
      ],
      answer: 'It conducts heat away from your hand faster',
      teach: 'You feel the rate at which your hand loses heat, '
        + 'not the temperature of the object.',
      level: 5,
    },
  ],
})

/* ── light ─────────────────────────────────────────────────────────────── */

teach({
  topicId: 'light-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Light travels in straight lines. '
      + 'On reflection, the angle of incidence equals the angle of '
      + 'reflection, both measured from the normal. '
      + 'On refraction, light bends when it changes speed between '
      + 'materials. '
      + 'The eye focuses by changing the shape of its lens.',
    method: [
      'Draw the normal first. Every angle is measured from it.',
      'Reflection: equal angles either side of the normal.',
      'Refraction: ask which material slows the light.',
    ],
  },

  idea:
    'Light travels in straight lines, which is why shadows have edges. '
    + 'When it hits a mirror it reflects, '
    + 'and the angle of incidence equals the angle of reflection, '
    + 'both measured from the normal, '
    + 'which is the line at right angles to the surface. '
    + 'When light passes from one transparent material into another '
    + 'it changes speed, and so changes direction. '
    + 'That is refraction, '
    + 'and it is why a stick in water looks bent '
    + 'and why a pool looks shallower than it is. '
    + 'A lens refracts light to a focus. '
    + 'The eye has a lens whose shape is changed by muscles, '
    + 'which is how it focuses on near and far objects.',

  mechanism:
    'Two things in this topic are usually taught as facts to accept, '
    + 'and both have reasons that make them easy. '
    + 'The first is the normal. '
    + 'Angles in optics are measured from the normal and never from the '
    + 'surface, '
    + 'and this is not an arbitrary choice. '
    + 'A curved mirror has no single surface direction to measure from, '
    + 'but it has a normal at every point, '
    + 'so measuring from the normal is the only convention that works '
    + 'everywhere. '
    + 'Draw it first and the rest of the question is arithmetic. '
    + 'The second is refraction, which is usually described and not '
    + 'explained. '
    + 'Light goes slower in water than in air. '
    + 'Picture a wide beam arriving at the surface at a slant: '
    + 'one edge of it reaches the water before the other, '
    + 'so that edge slows down first, '
    + 'and the beam swings round, exactly as a cart turns when one wheel '
    + 'enters sand. '
    + 'So light bends because it changes speed, '
    + 'and it bends towards the normal when it slows down. '
    + 'The eye then follows from this. '
    + 'Focusing means bending the incoming light by just the right amount '
    + 'to meet on the retina. '
    + 'Light from a near object arrives spreading more, '
    + 'so it needs more bending, '
    + 'so the muscles make the lens fatter. '
    + 'For a distant object they let it become thinner. '
    + 'Short sight and long sight are then simply the lens bending by the '
    + 'wrong amount, '
    + 'which is why spectacles correct them by doing some of the bending in '
    + 'advance.',

  recap:
    'You know light travels in straight lines '
    + 'and that a mirror reflects it. '
    + 'This gives the law exactly, '
    + 'and adds what happens when light enters water or glass.',

  method: [
    'Draw the surface and the ray arriving.',
    'Draw the normal at right angles to the surface at that point.',
    'Measure the angle of incidence from the normal.',
    'For reflection, draw the reflected ray at the same angle on the other '
      + 'side.',
    'For refraction, decide which material is slower.',
    'Bend towards the normal going into the slower material, '
      + 'and away from it coming out.',
    'Label the angles and the normal.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A ray strikes a mirror at 30 degrees to the normal. '
        + 'At what angle does it reflect?',
      steps: [
        'The angle of reflection equals the angle of incidence.',
      ],
      answer: '30 degrees from the normal, on the other side.',
    },
    {
      level: 4,
      ask: 'Why does a stick in water look bent?',
      steps: [
        'Light from the submerged part leaves the water into air.',
        'It speeds up, so it bends away from the normal.',
        'Your eye assumes light travelled straight.',
        'So it places the stick where the bent rays appear to come from.',
      ],
      answer: 'Because the light from the submerged part is refracted on '
        + 'leaving the water, and the eye assumes it came straight, '
        + 'so it sees that part displaced.',
    },
    {
      level: 5,
      ask: 'How does the eye focus on a near object?',
      steps: [
        'Light from a near object arrives spreading out more.',
        'It therefore needs more bending to meet on the retina.',
        'A fatter lens bends light more.',
        'Muscles change the lens shape to do it.',
      ],
      answer: 'The muscles make the lens fatter, '
        + 'so it bends the light more, '
        + 'bringing the more widely spreading rays to a focus on the '
        + 'retina.',
    },
  ],

  traps: [
    {
      mistake: 'Measuring angles from the surface instead of the normal.',
      why: 'Every optics angle is from the normal. '
        + 'Draw the normal before anything else.',
    },
    {
      mistake: 'Saying light bends because water is thicker.',
      why: 'It bends because it changes speed. '
        + 'Thickness is not a quantity in optics.',
    },
    {
      mistake: 'Bending the wrong way on leaving water.',
      why: 'Towards the normal going into the slower material, '
        + 'away from it when speeding up.',
    },
    {
      mistake: 'Thinking the eye focuses by moving its lens.',
      why: 'A camera moves its lens. '
        + 'The eye changes the lens shape instead.',
    },
  ],

  extension:
    'Past a certain angle, light leaving water cannot get out at all '
    + 'and is reflected back inside. '
    + 'That is total internal reflection, '
    + 'and it is how light travels along an optical fibre for kilometres.',

  questions: [
    {
      id: 'lgt-1',
      ask: 'The angle of incidence is measured from:',
      kind: 'choice',
      options: ['the normal', 'the surface', 'the reflected ray'],
      answer: 'the normal',
      teach: 'The normal is the line at right angles to the surface.',
      level: 3,
    },
    {
      id: 'lgt-2',
      ask: 'Why does light refract?',
      kind: 'choice',
      options: [
        'It changes speed between materials',
        'It gets heavier in water',
        'It reflects partly',
      ],
      answer: 'It changes speed between materials',
      teach: 'One edge of the beam slows first, so the beam swings round.',
      level: 4,
    },
    {
      id: 'lgt-3',
      ask: 'How does the eye focus on things at different distances?',
      kind: 'choice',
      options: [
        'By changing the shape of its lens',
        'By moving its lens back and forth',
        'By changing the size of the retina',
      ],
      answer: 'By changing the shape of its lens',
      teach: 'A fatter lens bends light more, '
        + 'which is what near objects need.',
      level: 5,
    },
  ],
})

/* ── sound ─────────────────────────────────────────────────────────────── */

teach({
  topicId: 'sound-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Sound is a vibration passed through matter, so it needs a medium. '
      + 'Frequency is how many vibrations per second, and it decides pitch. '
      + 'Amplitude is how big the vibration is, and it decides loudness. '
      + 'Pitch and loudness are independent.',
    method: [
      'Say what is vibrating.',
      'For pitch, talk about frequency. For loudness, amplitude.',
      'Remember sound cannot cross a vacuum.',
    ],
  },

  idea:
    'Sound is produced by something vibrating, '
    + 'and it travels by pushing the particles of the material around it, '
    + 'which push the next ones in turn. '
    + 'So sound needs a medium and cannot travel through a vacuum. '
    + 'It travels fastest in solids, slower in liquids, slowest in gases, '
    + 'because the particles are closer together in a solid. '
    + 'Frequency is the number of vibrations per second, measured in hertz, '
    + 'and a higher frequency is heard as a higher pitch. '
    + 'Amplitude is how far the particles swing, '
    + 'and a greater amplitude is heard as a louder sound. '
    + 'An echo is sound reflected from a surface.',

  mechanism:
    'Pitch and loudness are confused constantly, '
    + 'and they are completely independent, '
    + 'which is easiest to see on a single string. '
    + 'Pluck a guitar string gently and then hard. '
    + 'The note is the same, and only the loudness changed, '
    + 'because the string vibrated the same number of times a second '
    + 'but swung further each time. '
    + 'Now shorten the string and pluck it just as gently. '
    + 'The note is higher at the same loudness, '
    + 'because the string now vibrates more times a second '
    + 'while still swinging only a little. '
    + 'Frequency and amplitude are two separate properties of the same '
    + 'vibration, '
    + 'and each is heard as a different thing. '
    + 'The need for a medium follows from what sound is. '
    + 'It is not a substance travelling. '
    + 'It is a push being handed on, '
    + 'so there must be something there to hand it to. '
    + 'This is why an alarm clock in a jar goes silent as the air is pumped '
    + 'out '
    + 'while remaining clearly visible, '
    + 'and why there is no sound in space. '
    + 'It also explains the speeds. '
    + 'Handing a push on is quick when neighbours are touching, '
    + 'which they nearly are in a solid, '
    + 'and slow when they must travel before they meet, as in a gas.',

  recap:
    'You know sound is made by vibrations and that it can be loud or soft, '
    + 'high or low. '
    + 'This connects each of those to a measurable property of the '
    + 'vibration.',

  method: [
    'Identify what is vibrating.',
    'Say what the vibration travels through.',
    'For pitch, discuss frequency in hertz.',
    'For loudness, discuss amplitude.',
    'Keep the two separate: one can change while the other does not.',
    'For speed, compare how close the particles are.',
    'For an echo, treat the sound as reflected.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is heard when the frequency of a sound increases?',
      steps: [
        'Frequency is vibrations per second.',
        'That is heard as pitch.',
      ],
      answer: 'A higher pitch.',
    },
    {
      level: 4,
      ask: 'A guitar string is plucked harder. '
        + 'What changes, and what does not?',
      steps: [
        'Plucking harder makes it swing further: greater amplitude.',
        'The number of vibrations per second is unchanged.',
      ],
      answer: 'It becomes louder. '
        + 'The pitch does not change.',
    },
    {
      level: 5,
      ask: 'An alarm clock ringing inside a jar goes silent as the air is '
        + 'pumped out, but can still be seen. Explain.',
      steps: [
        'Sound is a push handed from particle to particle.',
        'Removing the air removes the particles.',
        'So there is nothing to carry the push.',
        'Light needs no medium, so it still reaches the eye.',
      ],
      answer: 'Sound needs matter to pass the vibration along, '
        + 'and the air has been removed. '
        + 'Light does not need a medium, so the clock remains visible.',
    },
  ],

  traps: [
    {
      mistake: 'Using pitch and loudness as the same thing.',
      why: 'Pitch comes from frequency and loudness from amplitude. '
        + 'Either can change alone.',
    },
    {
      mistake: 'Saying sound travels faster in air because air is lighter.',
      why: 'It travels slowest in air. '
        + 'The push is handed on fastest where particles are closest.',
    },
    {
      mistake: 'Thinking sound can cross space.',
      why: 'There is nothing to carry the vibration.',
    },
    {
      mistake: 'Describing sound as a substance moving along.',
      why: 'The particles stay roughly where they are. '
        + 'What travels is the push.',
    },
  ],

  extension:
    'Frequencies above about 20 000 hertz cannot be heard by people '
    + 'and are called ultrasound. '
    + 'It is used to look inside the body '
    + 'and to measure depth at sea, '
    + 'by timing the echo.',

  questions: [
    {
      id: 'snd-1',
      ask: 'What decides the pitch of a sound?',
      kind: 'choice',
      options: ['Its frequency', 'Its amplitude', 'Its speed'],
      answer: 'Its frequency',
      teach: 'Amplitude decides loudness instead.',
      level: 3,
    },
    {
      id: 'snd-2',
      ask: 'In which does sound travel fastest?',
      kind: 'choice',
      options: ['Steel', 'Water', 'Air'],
      answer: 'Steel',
      teach: 'The closer the particles, the faster the push is handed on.',
      level: 4,
    },
    {
      id: 'snd-3',
      ask: 'Why is there no sound in space?',
      kind: 'choice',
      options: [
        'There are no particles to carry the vibration',
        'It is too cold',
        'Sound is absorbed by darkness',
      ],
      answer: 'There are no particles to carry the vibration',
      teach: 'Sound is a push handed on, so it needs something to hand it '
        + 'to.',
      level: 5,
    },
  ],
})
