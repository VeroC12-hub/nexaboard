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

  why:
    'Sodium is a soft metal that catches fire when it is '
    + 'dropped in water. '
    + 'Potassium does the same thing, only more violently, and '
    + 'lithium does it too. '
    + 'Three different elements, dug out of different places, '
    + 'behave almost identically, and nobody arranged for that. '
    + 'Why should separate elements share a behaviour so exactly?',

  notation:
    'An element is written as a symbol of one or two letters, '
    + 'such as Na for sodium and O for oxygen. '
    + 'The first letter is always a capital and the second is '
    + 'always small, so Na is sodium while NA is nothing at all. '
    + 'In a compound the symbols are written together with small '
    + 'low numbers, so water is H2O, said aitch two oh, and the 2 '
    + 'counts the hydrogen atoms. '
    + 'The number of protons in an atom is called its atomic '
    + 'number. '
    + 'Getting the capitals wrong is the commonest way to lose a '
    + 'mark here.',

  idea:
    'An atom has a central nucleus with electrons moving round it in '
    + 'shells, and three kinds of particle between them. '
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
    'Everything around you is built from a small number of '
    + 'basic substances. '
    + 'An element is a substance that cannot be broken down into '
    + 'anything simpler, and iron, oxygen, carbon and gold are '
    + 'elements. '
    + 'A compound is two or more elements joined, so water is '
    + 'hydrogen joined to oxygen and common salt is sodium joined '
    + 'to chlorine. '
    + 'There are only about ninety elements on earth, and yet '
    + 'they make millions of compounds. '
    + 'This lesson looks inside a single atom, which is where the '
    + 'reason for the pattern among the elements turns out to be.',

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

  figure: {
    alt: 'A lithium atom with two electrons in its first shell and one '
      + 'in its second, beside a sodium atom with two, then eight, then '
      + 'one. The last electron of each is marked, because both have a '
      + 'single electron in the outer shell, which is why both sit in '
      + 'group one.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">the outer shell is what the chemistry depends on</text>'
      + '<circle cx="160" cy="180" r="14"/>'
      + '<circle cx="160" cy="180" r="34"/>'
      + '<circle cx="160.0" cy="146.0" r="6" fill="currentColor"/>'
      + '<circle cx="160.0" cy="214.0" r="6" fill="currentColor"/>'
      + '<circle cx="160" cy="180" r="64"/>'
      + '<circle cx="160.0" cy="116.0" r="6" fill="#0f8a4d" stroke="#0f8a4d"/>'
      + '<text x="160" y="185" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">Li</text>'
      + '<text x="160" y="298" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">lithium, 2 then 1</text>'
      + '<circle cx="460" cy="180" r="14"/>'
      + '<circle cx="460" cy="180" r="34"/>'
      + '<circle cx="460.0" cy="146.0" r="6" fill="currentColor"/>'
      + '<circle cx="460.0" cy="214.0" r="6" fill="currentColor"/>'
      + '<circle cx="460" cy="180" r="64"/>'
      + '<circle cx="460.0" cy="116.0" r="6" fill="currentColor"/>'
      + '<circle cx="505.3" cy="134.7" r="6" fill="currentColor"/>'
      + '<circle cx="524.0" cy="180.0" r="6" fill="currentColor"/>'
      + '<circle cx="505.3" cy="225.3" r="6" fill="currentColor"/>'
      + '<circle cx="460.0" cy="244.0" r="6" fill="currentColor"/>'
      + '<circle cx="414.7" cy="225.3" r="6" fill="currentColor"/>'
      + '<circle cx="396.0" cy="180.0" r="6" fill="currentColor"/>'
      + '<circle cx="414.7" cy="134.7" r="6" fill="currentColor"/>'
      + '<circle cx="460" cy="180" r="94"/>'
      + '<circle cx="460.0" cy="86.0" r="6" fill="#0f8a4d" stroke="#0f8a4d"/>'
      + '<text x="460" y="185" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">Na</text>'
      + '<text x="460" y="298" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">sodium, 2, 8 then 1</text>'
      + '<text x="320" y="338" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">each has one electron left over in its outer shell</text>'
      + '<text x="320" y="366" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">so both sit in group one, and both react with water</text>'
      + '<text x="320" y="394" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the group number is the outer electrons, and that is the chemistry</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The three particles in an atom, and where each one is',
      columns: ['Particle', 'Its charge', 'Where it is'],
      rows: [
        ['Proton', 'Positive', 'In the nucleus'],
        ['Neutron', 'None', 'In the nucleus'],
        ['Electron', 'Negative', 'Moving round the nucleus, in shells'],
      ],
      note: 'The number of protons is the atomic number, and it decides '
        + 'which element the atom is. A neutral atom has as many '
        + 'electrons as protons.',
    },
    {
      caption: 'How the electrons of the first few elements are arranged',
      columns: ['Element', 'Electrons', 'Arranged as', 'Group'],
      rows: [
        ['Hydrogen', '1', '1', 'One'],
        ['Helium', '2', '2, a full first shell', 'The noble gases'],
        ['Lithium', '3', '2, then 1', 'One'],
        ['Carbon', '6', '2, then 4', 'Four'],
        ['Oxygen', '8', '2, then 6', 'Six'],
        ['Neon', '10', '2, then 8, a full second shell', 'The noble gases'],
        ['Sodium', '11', '2, then 8, then 1', 'One'],
      ],
      note: 'The noble gases are unreactive for one reason: the outer shell '
        + 'is already full, so there is nothing to gain by reacting. One '
        + 'explanation covers a whole column.',
    },
  ],
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

  why:
    'A borehole in a village pumps up water with sand in it. '
    + 'The sand is easy. '
    + 'Tie a cloth over the bucket, pour the water through, '
    + 'and the sand stays on the cloth. '
    + 'Now take the same bucket and the same cloth to the coast, '
    + 'where the only water near the house is sea water. '
    + 'Pour it through. '
    + 'Every grain of the salt goes straight through with the water. '
    + 'The cloth did nothing at all. '
    + 'So why did the cloth stop the sand and not the salt? '
    + 'And if a cloth will not take the salt out, what will? '
    + 'This lesson is the one question you ask '
    + 'to pick the right method every time.',

  idea:
    'There are seven methods in this topic and only one idea behind '
    + 'them: each one exploits a single difference between the parts of '
    + 'the mixture, and nothing else. '
    + 'The examination asks you to choose, so choosing is what to '
    + 'practise.',

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

  figure: {
    alt: 'One question at the top, what is different about the parts, '
      + 'with four branches below it. Difference in size gives '
      + 'filtration, difference in boiling point gives evaporation or '
      + 'distillation, two boiling points give fractional distillation, '
      + 'and a difference in how strongly things cling to paper gives '
      + 'chromatography.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">one question, and the method chooses itself</text>'
      + '<path d="M 180 56 H 460 V 102 H 180 Z" stroke="#0f8a4d"/>'
      + '<text x="320" y="84" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">what is different about the parts?</text>'
      + '<line x1="230" y1="106" x2="130" y2="150"/>'
      + '<line x1="130" y1="150" x2="135.8" y2="141.8"/>'
      + '<line x1="130" y1="150" x2="139.9" y2="151.3"/>'
      + '<line x1="290" y1="106" x2="262" y2="150"/>'
      + '<line x1="262" y1="150" x2="262.3" y2="140.0"/>'
      + '<line x1="262" y1="150" x2="270.9" y2="145.5"/>'
      + '<line x1="350" y1="106" x2="378" y2="150"/>'
      + '<line x1="378" y1="150" x2="369.1" y2="145.5"/>'
      + '<line x1="378" y1="150" x2="377.7" y2="140.0"/>'
      + '<line x1="410" y1="106" x2="510" y2="150"/>'
      + '<line x1="510" y1="150" x2="500.1" y2="151.3"/>'
      + '<line x1="510" y1="150" x2="504.2" y2="141.8"/>'
      + '<text x="110" y="174" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">their size</text>'
      + '<text x="110" y="198" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">sand in water</text>'
      + '<text x="110" y="226" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">filtration</text>'
      + '<text x="250" y="174" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">boiling point</text>'
      + '<text x="250" y="198" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">salt in water</text>'
      + '<text x="250" y="226" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">evaporation</text>'
      + '<text x="250" y="248" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">or distillation</text>'
      + '<text x="400" y="174" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">two boiling points</text>'
      + '<text x="400" y="198" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">two liquids that mix</text>'
      + '<text x="400" y="226" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">fractional</text>'
      + '<text x="400" y="248" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">distillation</text>'
      + '<text x="540" y="174" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">clinging</text>'
      + '<text x="540" y="198" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the dyes in an ink</text>'
      + '<text x="540" y="226" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">chromatography</text>'
      + '<text x="320" y="312" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">filtering salt water is pointless</text>'
      + '<text x="320" y="338" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">a dissolved particle is as small as a water particle</text>'
      + '<text x="320" y="380" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">a mixture is not joined, so no chemical change is needed</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each method, the one difference it uses, and what it parts',
      columns: ['Method', 'The difference it uses', 'What it parts'],
      rows: [
        [
          'Filtration',
          'Particle size',
          'An insoluble solid from a liquid, such as sand from water',
        ],
        [
          'Decanting',
          'The solid has already settled',
          'A liquid poured off a settled solid',
        ],
        [
          'Evaporation',
          'Boiling point, when you want the solid',
          'A dissolved solid, such as salt out of salt water',
        ],
        [
          'Simple distillation',
          'Boiling point, when you want the liquid',
          'The liquid, such as water out of salt water',
        ],
        [
          'Fractional distillation',
          'Two different boiling points',
          'Two liquids that mix with each other',
        ],
        [
          'Chromatography',
          'How strongly each one clings to the paper',
          'Dissolved substances, such as the dyes in an ink',
        ],
        ['A magnet', 'One part is magnetic', 'Iron filings out of sand'],
      ],
      note: 'Filtering salt water is pointless, because a dissolved '
        + 'particle is as small as a water particle and goes straight '
        + 'through. Ask what is different and the method chooses itself.',
    },
  ],
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

  why:
    'A tro-tro leaves Accra at six in the morning and reaches '
    + 'Kumasi, 250 kilometres away, at half past ten. '
    + 'Another leaves at the same time, stops twice on the road, '
    + 'and arrives at noon. '
    + 'Both drivers will tell you they drove fast. '
    + 'How do you compare the two journeys with one number each, '
    + 'so that fast stops being a matter of opinion?',

  notation:
    'Speed is written as distance divided by time, and its unit '
    + 'is written m/s, said metres per second. '
    + 'The slash is read as per, and per means for every, so 20 '
    + 'm/s is twenty metres for every second. '
    + 'The unit must match the measurements you actually used, so '
    + 'kilometres and hours give km/h and not m/s. '
    + 'Mixing the units, such as dividing kilometres by seconds, '
    + 'is the commonest way to lose a mark.',

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
    'Dividing tells you how much there is for each one. '
    + 'Share 60 mangoes among 12 people and each gets 5, because '
    + '$60 \\div 12 = 5$. '
    + 'A graph with two axes has one measurement along the bottom '
    + 'and another up the side, and each point marks one pair of '
    + 'values. '
    + 'Put time along the bottom and distance up the side, and a '
    + 'point then says how far something had gone by a certain '
    + 'moment. '
    + 'This lesson joins the two, because dividing the distance '
    + 'by the time turns out to be the same thing as the '
    + 'steepness of that line.',

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
        '$150 \\div 3$.',
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

  figure: {
    alt: 'A distance time graph with three lines. A steep line means '
      + 'moving fast, a gentle line means moving slowly, and a '
      + 'horizontal line high up the graph means far from the start and '
      + 'not moving at all.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">the slope is the speed, not the height</text>'
      + '<line x1="90" y1="300" x2="90" y2="70" stroke-width="3"/>'
      + '<line x1="90" y1="300" x2="560" y2="300" stroke-width="3"/>'
      + '<text x="74" y="80" font-size="14" text-anchor="end" fill="currentColor" stroke="none">distance</text>'
      + '<text x="560" y="326" font-size="14" text-anchor="end" fill="currentColor" stroke="none">time</text>'
      + '<line x1="90" y1="300" x2="200" y2="100" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="206" y="104" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">steep: moving fast</text>'
      + '<line x1="90" y1="300" x2="330" y2="200" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="336" y="198" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">gentle: moving slowly</text>'
      + '<line x1="200" y1="100" x2="430" y2="100" stroke="#c8433a" stroke-width="4"/>'
      + '<text x="436" y="104" font-size="14" text-anchor="start" fill="#c8433a" stroke="none">flat: not moving at all</text>'
      + '<text x="320" y="364" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">a line that is high and flat is far away and standing still</text>'
      + '<text x="320" y="392" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">ask how much it rises for each step along, and that is the speed</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What each part of a distance time graph tells you',
      columns: ['What the line does', 'What it means'],
      rows: [
        ['It is steep', 'The object is moving fast'],
        ['It is gentle', 'The object is moving slowly'],
        ['It is horizontal', 'The object is not moving at all'],
        [
          'It is high up the graph',
          'The object is far from the start, which says nothing about its speed',
        ],
      ],
      note: 'The graph is not a picture of the speed. Its slope is the '
        + 'speed, and reading the height instead is the mistake this '
        + 'topic is set to catch.',
    },
    {
      caption: 'Why averaging the two speeds gives the wrong answer',
      columns: ['Part of the journey', 'Distance', 'Speed', 'Time it took'],
      rows: [
        ['The first part', '60 km', '60 km per hour', '1 hour'],
        ['The second part', '60 km', '20 km per hour', '3 hours'],
        ['The whole journey', '120 km', '30 km per hour', '4 hours'],
      ],
      note: 'The average of 60 and 20 is 40, and the real answer is 30, '
        + 'because the slow part lasted longer and so counts for more. '
        + 'Average speed is always total distance over total time.',
    },
  ],
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

  why:
    'A log of odum weighs far more than a nail, and yet the log '
    + 'floats while the nail sinks. '
    + 'Being heavy is clearly not what decides it. '
    + 'A small stone sinks and a whole wooden canoe does not. '
    + 'So what is it about a thing that settles whether water '
    + 'holds it up?',

  notation:
    'Density is written as mass divided by volume, and its unit '
    + 'is written $\\text{g/cm}^3$, said grams per cubic centimetre. '
    + 'So a density of $7 \\text{ g/cm}^3$ means '
    + '7 grams in every cubic centimetre. '
    + 'All parts of the unit must match the measurements used, so '
    + 'kilograms and cubic metres give $\\text{kg/m}^3$ instead. '
    + 'Giving a density with no unit at all is the commonest way '
    + 'to lose a mark, because the bare number does not say which '
    + 'scale it is on.',

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
    'Mass is how much matter a thing contains, and a balance '
    + 'measures it in grams or kilograms. '
    + 'Volume is how much space the same thing takes up, measured '
    + 'in cubic centimetres. '
    + 'The volume of a box is length times width times height, so '
    + 'a box 4 cm by 3 cm by 2 cm has a volume of 24 cubic '
    + 'centimetres. '
    + 'Those are two separate measurements of one object, and '
    + 'neither of them tells you the other. '
    + 'This lesson divides one by the other, and the single '
    + 'number that comes out decides whether the thing floats.',

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
        '$60 \\div 20$.',
      ],
      answer: '3 g per cubic cm.',
    },
    {
      level: 4,
      ask: 'A stone of mass 75 g raises the water in a cylinder from 50 to '
        + '75 cubic cm. Find its density, and say whether it floats.',
      steps: [
        'The displaced water is 25 cubic cm, so that is its volume.',
        '$75 \\div 25 = 3$.',
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

  figure: {
    alt: 'A lump of steel sinking below the water line beside a ship '
      + 'made of the same steel floating on it. The lump is steel all '
      + 'through, at about 8 grams in each cubic centimetre, and the '
      + 'ship is a steel shell round a large volume of air, which '
      + 'brings it below 1 gram in each cubic centimetre.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">the same steel, and a different volume</text>'
      + '<line x1="40" y1="200" x2="300" y2="200" stroke-width="3"/>'
      + '<text x="50" y="190" font-size="13" text-anchor="start" fill="currentColor" stroke="none">water</text>'
      + '<path d="M 150 238 H 194 V 274 H 150 Z" stroke="#c8433a"/>'
      + '<text x="172" y="262" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">steel</text>'
      + '<line x1="172" y1="196" x2="172" y2="232" stroke="#c8433a"/>'
      + '<line x1="172" y1="232" x2="166.8" y2="223.4" stroke="#c8433a"/>'
      + '<line x1="172" y1="232" x2="177.2" y2="223.4" stroke="#c8433a"/>'
      + '<text x="172" y="306" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">a lump of steel</text>'
      + '<text x="172" y="328" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">about 8 grams</text>'
      + '<text x="172" y="348" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">in each cubic centimetre</text>'
      + '<text x="172" y="372" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">so it sinks</text>'
      + '<line x1="340" y1="200" x2="600" y2="200" stroke-width="3"/>'
      + '<path d="M 410 180 L 530 180 L 510 236 L 430 236 Z" stroke="#0f8a4d"/>'
      + '<line x1="410" y1="202" x2="530" y2="202" stroke="#0f8a4d"/>'
      + '<text x="470" y="196" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">mostly air</text>'
      + '<text x="470" y="306" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">a ship of the same steel</text>'
      + '<text x="470" y="328" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">below 1 gram, counting the air</text>'
      + '<text x="470" y="348" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">in each cubic centimetre</text>'
      + '<text x="470" y="372" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">so it floats</text>'
      + '<text x="320" y="92" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">density is mass for a given amount of space</text>'
      + '<text x="320" y="120" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">so the air inside the ship counts in its volume</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Why a lump of steel sinks and a ship of the same steel floats',
      columns: ['The question', 'A lump of steel', 'A ship'],
      rows: [
        [
          'What it is',
          'Steel all the way through',
          'A steel shell round a very large volume of air',
        ],
        [
          'Its density',
          'About 8 grams in each cubic centimetre',
          'Below 1, once the air inside is counted',
        ],
        ['Against water, at 1', 'Greater, so it sinks', 'Less, so it floats'],
        [
          'What would sink it',
          'It has already sunk',
          'Loading it until the mass rises, or holing it so water replaces the air',
        ],
      ],
      note: 'Density is mass for a given amount of space, and not weight. A '
        + 'lorry load of feathers weighs more than a nail, and the nail '
        + 'is the one that sinks.',
    },
  ],
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

  why:
    'A cooking pot on a coal pot gets hot at the bottom first. '
    + 'The water inside gets hot all through, even the part '
    + 'nowhere near the coals. '
    + 'Stand a metre away from the coal pot and you feel the heat '
    + 'on your face, with nothing at all touching you. '
    + 'Three different things are happening there, so is heat '
    + 'moving in three different ways?',

  notation:
    'Temperature is measured in degrees Celsius, written $^\\circ\\text{C}$ '
    + 'and said degrees Celsius. '
    + 'Heat and temperature are not the same thing and the words '
    + 'cannot be swapped: temperature says how hot something is, '
    + 'while heat is the energy that moves. '
    + 'The three routes have names, conduction, convection and '
    + 'radiation, and each name says something about how it '
    + 'works. '
    + 'Writing heat where the question asked for temperature is '
    + 'the commonest way to lose a mark.',

  idea:
    'Heat always moves from hotter to colder, and it does it in three '
    + 'ways that differ in one thing only: whether the matter itself '
    + 'travels with the energy. '
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
    'Heat is energy moving because one thing is hotter than '
    + 'another. '
    + 'Put a cold spoon in hot tea and the spoon gets warm while '
    + 'the tea cools a little. '
    + 'The heat went from the hotter thing to the colder one, and '
    + 'it never goes the other way by itself. '
    + 'Once both have reached the same temperature the movement '
    + 'stops. '
    + 'This lesson names the three routes heat takes, and '
    + 'explains each one by what the particles are doing.',

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

  figure: {
    alt: 'Three panels. In conduction a spoon in hot soup grows warm '
      + 'along its handle, although no metal travels. In convection the '
      + 'water at the bottom of a pan rises and the cooler water sinks, '
      + 'so the matter itself moves and carries its energy. In '
      + 'radiation the sun warms you across empty space, where there is '
      + 'no matter at all.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">did the matter itself move?</text>'
      + '<path d="M 30 60 H 210 V 250 H 30 Z"/>'
      + '<text x="120" y="86" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">conduction</text>'
      + '<path d="M 56 196 L 68 240 L 172 240 L 184 196 Z"/>'
      + '<line x1="58" y1="204" x2="182" y2="204"/>'
      + '<text x="120" y="226" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">hot soup</text>'
      + '<ellipse cx="96" cy="200" rx="15" ry="8"/>'
      + '<line x1="106" y1="194" x2="180" y2="118" stroke-width="5"/>'
      + '<line x1="112" y1="192" x2="172" y2="130" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="172" y1="130" x2="169.7" y2="139.7" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="172" y1="130" x2="162.3" y2="132.6" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="120" y="272" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">no metal travelled</text>'
      + '<text x="120" y="292" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">the energy was passed on</text>'
      + '<text x="120" y="316" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">from particle to particle</text>'
      + '<path d="M 230 60 H 410 V 250 H 230 Z"/>'
      + '<text x="320" y="86" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">convection</text>'
      + '<path d="M 260 130 L 272 230 L 368 230 L 380 130"/>'
      + '<line x1="290" y1="220" x2="290" y2="150" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="290" y1="150" x2="295.2" y2="158.6" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="290" y1="150" x2="284.8" y2="158.6" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="350" y1="150" x2="350" y2="220"/>'
      + '<line x1="350" y1="220" x2="344.8" y2="211.4"/>'
      + '<line x1="350" y1="220" x2="355.2" y2="211.4"/>'
      + '<text x="320" y="272" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">the water itself rose</text>'
      + '<text x="320" y="292" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">and carried its energy</text>'
      + '<text x="320" y="316" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">with it</text>'
      + '<path d="M 430 60 H 610 V 250 H 430 Z"/>'
      + '<text x="520" y="86" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">radiation</text>'
      + '<circle cx="470" cy="150" r="24"/>'
      + '<text x="470" y="155" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">sun</text>'
      + '<line x1="498" y1="160" x2="556" y2="186" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="556" y1="186" x2="546.1" y2="187.2" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="556" y1="186" x2="550.3" y2="177.8" stroke="#0f8a4d" stroke-width="4"/>'
      + '<circle cx="572" cy="196" r="18"/>'
      + '<text x="572" y="201" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">you</text>'
      + '<text x="520" y="272" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">nothing between you</text>'
      + '<text x="520" y="292" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">and no matter is needed</text>'
      + '<text x="520" y="316" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">at all</text>'
      + '<text x="320" y="364" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">conduction passes it on, convection carries it</text>'
      + '<text x="320" y="392" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">and radiation needs nothing to travel through</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The three ways heat moves, and the question that tells them '
        + 'apart',
      columns: [
        'The way',
        'Did the matter itself move',
        'Where it works',
        'An example',
      ],
      rows: [
        [
          'Conduction',
          'No. The energy is passed from particle to particle',
          'Solids, and best of all in metals',
          'The handle of a spoon standing in hot soup',
        ],
        [
          'Convection',
          'Yes. The heated fluid rises and carries its energy',
          'Liquids and gases only',
          'A pan of water heated from below',
        ],
        [
          'Radiation',
          'There is no matter there at all',
          'Anywhere, including a vacuum',
          'The sun warming you across empty space',
        ],
      ],
      note: 'Conduction is poor in a gas, because the particles are too far '
        + 'apart to knock each other often. That is why a blanket, a '
        + 'thatched roof and a vacuum flask all work by trapping air.',
    },
  ],
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

  why:
    'Put a straight stick into a bucket of water and it looks '
    + 'bent at the surface, though your hand tells you it is not. '
    + 'A coin at the bottom looks nearer the top than it really '
    + 'is. '
    + 'A fisherman spearing a fish has to aim at a spot where the '
    + 'fish is not, or he misses. '
    + 'What is happening to the light between the fish and his '
    + 'eye?',

  notation:
    'The line drawn at right angles to a surface, at the point '
    + 'where the light strikes it, is called the normal. '
    + 'Every angle in this topic is measured from the normal and '
    + 'never from the surface itself. '
    + 'The angle between the arriving ray and the normal is the '
    + 'angle of incidence, written $i$, and the angle between the '
    + 'leaving ray and the normal is the angle of reflection, '
    + 'written $r$, so the rule is written $i = r$. '
    + 'Measuring from the surface instead of from the normal is '
    + 'the commonest way to lose a mark.',

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
    'Light travels in straight lines. '
    + 'Hold a torch behind a book at night and the shadow on the '
    + 'wall has a sharp edge, because the light that was blocked '
    + 'could not bend round the book to fill it in. '
    + 'A mirror sends light back instead of letting it through, '
    + 'which is why you see yourself in it rather than through '
    + 'it. '
    + 'Those two facts are the whole starting point. '
    + 'This lesson states the rule for the bouncing exactly, and '
    + 'adds what happens when light goes into water or glass '
    + 'instead.',

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
      ask: 'A ray strikes a mirror at $30^\\circ$ to the normal. '
        + 'At what angle does it reflect?',
      steps: [
        'The angle of reflection equals the angle of incidence.',
      ],
      answer: '$30^\\circ$ from the normal, on the other side.',
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

  figure: {
    alt: 'On the left, a ray striking a mirror with the normal drawn at '
      + 'the point where it lands, and the angle of incidence equal to '
      + 'the angle of reflection, both measured from the normal. On the '
      + 'right, a ray entering water, bending towards the normal '
      + 'because it slows down, with the path it would have taken drawn '
      + 'beside it.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">measure from the normal, and bend when you slow</text>'
      + '<line x1="40" y1="200" x2="280" y2="200" stroke-width="4"/>'
      + '<line x1="160" y1="200" x2="160" y2="96" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="160" y="84" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">the normal</text>'
      + '<line x1="70" y1="112" x2="154" y2="196"/>'
      + '<line x1="154" y1="196" x2="144.3" y2="193.6"/>'
      + '<line x1="154" y1="196" x2="151.6" y2="186.3"/>'
      + '<line x1="166" y1="196" x2="250" y2="112"/>'
      + '<line x1="220" y1="142" x2="250" y2="112"/>'
      + '<line x1="250" y1="112" x2="247.6" y2="121.7"/>'
      + '<line x1="250" y1="112" x2="240.3" y2="114.4"/>'
      + '<text x="132" y="160" font-size="13" text-anchor="end" fill="currentColor" stroke="none">i</text>'
      + '<text x="190" y="160" font-size="13" text-anchor="start" fill="currentColor" stroke="none">r</text>'
      + '<text x="160" y="234" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">a mirror</text>'
      + '<text x="160" y="262" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">the two angles are equal</text>'
      + '<text x="160" y="284" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">and both are measured from the normal</text>'
      + '<line x1="360" y1="170" x2="600" y2="170" stroke-width="3"/>'
      + '<text x="368" y="158" font-size="13" text-anchor="start" fill="currentColor" stroke="none">air</text>'
      + '<text x="368" y="192" font-size="13" text-anchor="start" fill="currentColor" stroke="none">water</text>'
      + '<line x1="480" y1="170" x2="480" y2="70" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="480" y="58" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">the normal</text>'
      + '<line x1="410" y1="90" x2="474" y2="166"/>'
      + '<line x1="474" y1="166" x2="464.5" y2="162.8"/>'
      + '<line x1="474" y1="166" x2="472.4" y2="156.1"/>'
      + '<line x1="480" y1="174" x2="512" y2="274"/>'
      + '<line x1="512" y1="274" x2="504.5" y2="267.4"/>'
      + '<line x1="512" y1="274" x2="514.3" y2="264.3"/>'
      + '<line x1="480" y1="174" x2="544" y2="270"/>'
      + '<text x="604" y="288" font-size="13" text-anchor="end" fill="currentColor" stroke="none">it would have gone here</text>'
      + '<text x="430" y="240" font-size="13" text-anchor="end" fill="#0f8a4d" stroke="none">it bends towards</text>'
      + '<text x="430" y="260" font-size="13" text-anchor="end" fill="#0f8a4d" stroke="none">the normal</text>'
      + '<text x="480" y="312" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">because it slows down in water</text>'
      + '<text x="320" y="356" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">one edge of the beam reaches the water first</text>'
      + '<text x="320" y="384" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">and slows first, exactly as a cart turns when one wheel hits sand</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Which way light bends, and why',
      columns: ['Light goes', 'Its speed', 'Which way it bends'],
      rows: [
        ['From air into water', 'It slows down', 'Towards the normal'],
        ['From water into air', 'It speeds up', 'Away from the normal'],
        [
          'Straight along the normal',
          'It still changes',
          'Not at all, because both edges slow at the same moment',
        ],
      ],
      note: 'Angles in optics are measured from the normal and never from '
        + 'the surface, because a curved mirror has no single surface '
        + 'direction but has a normal at every point.',
    },
    {
      caption: 'How the eye focuses on near and far objects',
      columns: ['The object', 'How the light arrives', 'What the lens does'],
      rows: [
        [
          'Near',
          'Spreading out a lot',
          'The muscles make it fatter, so it bends the light more',
        ],
        [
          'Far',
          'Almost parallel',
          'The muscles let it become thinner, so it bends the light less',
        ],
      ],
      note: 'Short sight and long sight are the lens bending by the wrong '
        + 'amount, which is why spectacles correct them by doing some of '
        + 'the bending in advance.',
    },
  ],
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

  why:
    'A drum and a whistle take about the same effort, but one '
    + 'gives a deep sound and the other a piercing one. '
    + 'Hit the drum harder and it gets louder without getting any '
    + 'higher. '
    + 'Blow the whistle softly and it stays just as high while '
    + 'getting quieter. '
    + 'Loudness and pitch can each be changed on their own, so '
    + 'what is different about the shaking in each case?',

  notation:
    'The number of complete shakes in one second is called the '
    + 'frequency, measured in hertz, written Hz. '
    + 'Frequency decides pitch, so a bigger number of hertz means '
    + 'a higher note. '
    + 'The size of each shake is called the amplitude, and '
    + 'amplitude decides loudness, which has its own unit, the '
    + 'decibel, written dB. '
    + 'Swapping frequency and amplitude is the commonest way to '
    + 'lose a mark, so hold on to this: frequency is how often, '
    + 'amplitude is how big.',

  idea:
    'Sound is produced by something vibrating, '
    + 'and it travels by pushing the particles of the material around it, '
    + 'which push the next ones in turn. '
    + 'So sound needs a medium and cannot travel through a vacuum. '
    + 'How fast it travels depends on how close the particles of the '
    + 'material are. '
    + 'One vibration carries two separate properties, its frequency and '
    + 'its amplitude, and each is heard as a different thing. '
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
    'Sound is made by something shaking back and forth quickly. '
    + 'Pluck a guitar string and you can see it blur as it '
    + 'shakes, and that shaking is what you hear. '
    + 'Stop the string with your finger and the sound stops at '
    + 'once. '
    + 'A sound can be loud or soft, and it can also be high or '
    + 'low, and those are two separate things: a whistle is high '
    + 'and quiet while a drum is low and loud. '
    + 'This lesson ties each of those to something about the '
    + 'shaking that can actually be measured.',

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

  figure: {
    alt: 'A string drawn vibrating three ways. Plucked gently it makes a '
      + 'small swing and a quiet note. Plucked hard it makes a bigger '
      + 'swing and a loud note, at the same pitch. A shorter string '
      + 'swings more times a second and makes a higher note at the same '
      + 'loudness.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">pitch and loudness are two different things</text>'
      + '<line x1="60" y1="110" x2="60" y2="170"/>'
      + '<line x1="300" y1="110" x2="300" y2="170"/>'
      + '<path d="M 60 140 Q 120 122 180 140 Q 240 158 300 140" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="180" y="92" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">plucked gently</text>'
      + '<text x="180" y="196" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">small swing, so a quiet note</text>'
      + '<line x1="60" y1="240" x2="60" y2="320"/>'
      + '<line x1="300" y1="240" x2="300" y2="320"/>'
      + '<path d="M 60 280 Q 120 234 180 280 Q 240 326 300 280" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="180" y="222" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">plucked hard</text>'
      + '<text x="180" y="346" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">bigger swing, so a loud note</text>'
      + '<text x="180" y="372" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">and the same note, because the string</text>'
      + '<text x="180" y="392" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">swings the same number of times a second</text>'
      + '<line x1="380" y1="240" x2="380" y2="320"/>'
      + '<line x1="600" y1="240" x2="600" y2="320"/>'
      + '<path d="M 380 280 Q 407 256 435 280 Q 462 304 490 280 Q 517 256 545 280 Q 572 304 600 280" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="490" y="222" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">a shorter string</text>'
      + '<text x="490" y="346" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">more swings a second</text>'
      + '<text x="490" y="372" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">so a higher note, at the</text>'
      + '<text x="490" y="392" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">same loudness as the first</text>'
      + '<text x="490" y="140" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">frequency is heard as pitch</text>'
      + '<text x="490" y="166" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">amplitude is heard as loudness</text>'
      + '<text x="490" y="192" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">and neither one changes the other</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Pitch and loudness, which can be changed without each other',
      columns: ['The question', 'Pitch', 'Loudness'],
      rows: [
        [
          'What it depends on',
          'The frequency, measured in hertz',
          'The amplitude, which is how far the particles swing',
        ],
        [
          'On a guitar string',
          'Shorten it and it vibrates more often',
          'Pluck it harder and it swings further',
        ],
        ['What you hear', 'A higher note', 'A louder note'],
        ['Does changing it change the other', 'No', 'No'],
      ],
      note: 'They are two separate properties of one vibration, which is '
        + 'why a string plucked hard is louder and not higher.',
    },
    {
      caption: 'Where sound travels fastest, and why',
      columns: ['The material', 'How close the particles are', 'The speed'],
      rows: [
        ['A solid', 'Nearly touching', 'Fastest'],
        ['A liquid', 'Touching, but able to slide', 'Slower'],
        ['A gas', 'Far apart', 'Slowest'],
        ['A vacuum', 'There are none at all', 'No sound travels at all'],
      ],
      note: 'Sound is not a substance travelling. It is a push being handed '
        + 'on, so there must be something there to hand it to, which is '
        + 'why an alarm clock in a jar goes silent as the air is pumped '
        + 'out while staying clearly visible.',
    },
  ],
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
