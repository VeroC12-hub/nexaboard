/**
 * Stored lessons for JHS 1 Integrated Science.
 *
 * Written at about grade 7, with a `brief` form on every topic.
 *
 * ── What changes at JHS ────────────────────────────────────────────────────
 *
 * Primary science asks what happens. JHS asks why, and the answer is almost
 * always the same one: because of what the particles are doing, or because
 * of where the energy went. Several of these lessons exist to replace a
 * primary description with that explanation, which is why `particles-jhs`
 * is referred back to by three of the others.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── cells ────────────────────────────────────────────────────────────────── */

teach({
  topicId: 'cells-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Every living thing is made of cells. '
      + 'Both plant and animal cells have a membrane, cytoplasm and a '
      + 'nucleus. '
      + 'Only plant cells have a cell wall, chloroplasts and a large vacuole.',
    method: [
      'Name the parts both kinds share first.',
      'Then name the three a plant cell has in addition.',
      'For each part, say the job rather than the shape.',
    ],
  },

  why:
    'Cut an onion across and you see rings. '
    + 'Tear the thinnest skin you can off one ring, hold it up to the '
    + 'light and look closely. '
    + 'There are lines crossing each other, like a mat. '
    + 'Nobody drew those lines. '
    + 'The onion is built out of something small, repeated over and '
    + 'over. '
    + 'What is it, and is a goat built out of the same thing?',

  idea:
    'Every living thing is made of cells, '
    + 'and the cell of a plant and the cell of an animal are mostly the '
    + 'same thing. '
    + 'The difference is three extra parts the plant cell carries, '
    + 'and each one of them is there for a reason.',

  mechanism:
    'The three extras a plant cell has are not a list to memorise. '
    + 'They are all answers to one problem: a plant cannot move. '
    + 'It cannot go to food, so it makes its own, which needs chloroplasts. '
    + 'It cannot move to stay upright, so it needs something stiff to hold '
    + 'its shape, which is the cell wall. '
    + 'And it cannot go to water when it finds some, so it stores it, which '
    + 'is the large vacuole. '
    + 'Ask what a plant cannot do and the differences come out in order.',

  recap:
    'A plant has parts, and each part has a job. '
    + 'The roots hold the plant down and draw up water. '
    + 'The stem holds the plant up and carries that water to the top. '
    + 'The leaf makes the plant’s food out of sunlight, air and '
    + 'water. '
    + 'The flower makes seeds, so that there will be another plant. '
    + 'This lesson asks the same question one level smaller: inside a '
    + 'single cell, what does each part do?',

  method: [
    'Name the three parts both kinds have: membrane, cytoplasm, nucleus.',
    'Say what each does, not what it looks like.',
    'Then name the plant extras: cell wall, chloroplasts, large vacuole.',
    'Link each extra to something a plant cannot do.',
    'When drawing, label the job beside the part.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which part controls the cell?',
      steps: [
        'The membrane holds it together and the cytoplasm is where work '
          + 'happens.',
        'One part directs the rest.',
      ],
      answer: 'The nucleus.',
    },
    {
      level: 4,
      ask: 'Name two parts a plant cell has that an animal cell does not.',
      steps: [
        'Ask what a plant cannot do.',
        'It cannot move to food, so it makes its own.',
        'It cannot move to stay upright, so it needs stiffening.',
      ],
      answer: 'Chloroplasts and a cell wall. '
        + 'The large vacuole is the third.',
    },
    {
      level: 5,
      ask: 'Why does an animal cell not need a cell wall?',
      steps: [
        'A cell wall is stiff and holds a fixed shape.',
        'An animal moves, so its cells must change shape.',
        'A wall would prevent that.',
      ],
      answer: 'Because an animal has to move and bend, '
        + 'and a stiff wall would stop its cells doing so.',
    },
  ],

  traps: [
    {
      mistake: 'Confusing the cell wall with the cell membrane.',
      why: 'Every cell has a membrane. '
        + 'Only plant cells have a wall outside it.',
    },
    {
      mistake: 'Saying plant cells are green.',
      why: 'The chloroplasts are green, and only cells that meet light have '
        + 'many. Root cells have almost none.',
    },
    {
      mistake: 'Learning the parts as shapes in a diagram.',
      why: 'Examinations ask what each does. '
        + 'Learn the job and the shape follows.',
    },
  ],

  extension:
    'Cells specialise. '
    + 'A red blood cell gives up its nucleus to carry more oxygen, '
    + 'and a root hair cell stretches into a long thin finger to reach more '
    + 'water. '
    + 'Each change is a trade: something is given up to do one job better.',

  figure: {
    alt: 'An animal cell drawn as an oval with its membrane, cytoplasm '
      + 'and nucleus labelled, beside a plant cell drawn as a box with '
      + 'the same three parts and, in green, a stiff cell wall round '
      + 'the outside, one large vacuole and several chloroplasts.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="34" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">three extras, and each one is because a plant cannot move</text>'
      + '<ellipse cx="165" cy="190" rx="100" ry="72"/>'
      + '<circle cx="140" cy="172" r="26"/>'
      + '<text x="140" y="222" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">nucleus</text>'
      + '<text x="200" y="232" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">cytoplasm</text>'
      + '<line x1="200" y1="122" x2="200" y2="98"/>'
      + '<text x="200" y="90" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">membrane</text>'
      + '<text x="165" y="288" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">animal cell</text>'
      + '<path d="M 360 110 H 600 V 260 H 360 Z" stroke="#0f8a4d"/>'
      + '<text x="480" y="102" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">cell wall</text>'
      + '<path d="M 370 120 H 590 V 250 H 370 Z"/>'
      + '<circle cx="405" cy="152" r="20"/>'
      + '<text x="405" y="192" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">nucleus</text>'
      + '<path d="M 450 140 H 570 V 210 H 450 Z" stroke="#0f8a4d"/>'
      + '<text x="510" y="180" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">vacuole</text>'
      + '<ellipse cx="398" cy="216" rx="13" ry="7" stroke="#0f8a4d"/>'
      + '<ellipse cx="428" cy="226" rx="13" ry="7" stroke="#0f8a4d"/>'
      + '<ellipse cx="458" cy="218" rx="13" ry="7" stroke="#0f8a4d"/>'
      + '<text x="420" y="246" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">chloroplasts</text>'
      + '<text x="480" y="288" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">plant cell</text>'
      + '<text x="320" y="338" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">a plant cannot walk to food, stand up, or fetch water</text>'
      + '<text x="320" y="370" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">so it makes food, stiffens itself, and stores water</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Which parts each kind of cell has, and what each part does',
      columns: ['Part', 'Animal cell', 'Plant cell', 'What it does'],
      rows: [
        ['Cell membrane', 'Yes', 'Yes', 'Holds the cell together'],
        ['Cytoplasm', 'Yes', 'Yes', 'Where the work of the cell happens'],
        ['Nucleus', 'Yes', 'Yes', 'Controls the cell'],
        ['Cell wall', 'No', 'Yes', 'Stiff, so the plant holds its shape'],
        ['Chloroplasts', 'No', 'Yes', 'Make food out of light'],
        ['Large vacuole', 'No', 'Yes', 'Stores water'],
      ],
      note: 'The last three rows are the plant ones, and each answers '
        + 'something a plant cannot do because it cannot move.',
    },
  ],
  questions: [
    {
      id: 'cel-1',
      ask: 'Which part of the cell controls it?',
      kind: 'choice',
      options: ['The nucleus', 'The membrane', 'The cytoplasm'],
      answer: 'The nucleus',
      teach: 'The membrane holds the cell together and the cytoplasm is '
        + 'where the work happens.',
      level: 3,
    },
    {
      id: 'cel-2',
      ask: 'Which of these does an animal cell NOT have?',
      kind: 'choice',
      options: ['A cell wall', 'A nucleus', 'Cytoplasm'],
      answer: 'A cell wall',
      teach: 'Only plant cells have a wall. '
        + 'An animal has to bend and move, so a stiff wall would get in the '
        + 'way.',
      level: 4,
    },
    {
      id: 'cel-3',
      ask: 'Why does a plant cell have a large vacuole?',
      kind: 'choice',
      options: [
        'A plant cannot move to water, so it stores it',
        'To make it heavier',
        'To hold the chloroplasts',
      ],
      answer: 'A plant cannot move to water, so it stores it',
      teach: 'All three plant extras answer the same problem: '
        + 'a plant cannot move.',
      level: 5,
    },
  ],
})

/* ── classifying living things ────────────────────────────────────────────── */

teach({
  topicId: 'classification-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Living things are sorted into kingdoms, then smaller groups. '
      + 'Scientists group by body features, not by behaviour, '
      + 'because features are inherited and behaviour is not.',
    method: [
      'Look at the body, not at what the animal does.',
      'Start wide: plant, animal, fungus.',
      'Then narrow by the features that group shares.',
    ],
  },

  why:
    'A whale lives in the sea all its life, has no legs, and swims. '
    + 'A tilapia lives in water, has no legs, and swims. '
    + 'By everything you can see from the outside, they belong '
    + 'together. '
    + 'But the whale comes up for air, and feeds its young on milk, '
    + 'and the tilapia does neither. '
    + 'So which group does the whale really belong in, and what makes '
    + 'one answer better than the other?',

  notation:
    'Every living thing has a two-word scientific name, like Homo '
    + 'sapiens for a human being or Zea mays for maize. '
    + 'It is said the way it is written, “Homo sapiens”. '
    + 'The first word is the genus and the second word is the '
    + 'species. '
    + 'The genus always starts with a capital letter and the species '
    + 'never does, and the whole name is printed in italics or '
    + 'underlined by hand. '
    + 'Writing it “homo Sapiens” is the commonest way to lose a mark.',

  idea:
    'Living things are placed in kingdoms: plants, animals, fungi and '
    + 'others. '
    + 'Each kingdom is divided into smaller and smaller groups. '
    + 'The grouping is decided by features of the body, '
    + 'not by what the living thing does.',

  mechanism:
    'Grouping by behaviour seems natural and gives the wrong answer. '
    + 'A bat flies, so behaviour puts it with birds. '
    + 'But a bat has fur and feeds its young on milk, '
    + 'and those are features it inherited. '
    + 'So it belongs with goats and humans, not with birds. '
    + 'The reason scientists use features is that features are passed down, '
    + 'so they show which things are actually related. '
    + 'Behaviour can be copied or forced by circumstance: '
    + 'a bat and a bird both fly because air is the same for both, '
    + 'not because they share a recent ancestor.',

  recap:
    'Animals can be put into groups in more than one way. '
    + 'Group them by how they move and the bat goes with the bird. '
    + 'Group them by what they eat and the bat goes with the lizard. '
    + 'Group them by where they sleep and the bat goes with the rat '
    + 'in the roof. '
    + 'Every one of those groupings is correct, and each one answers '
    + 'a different question. '
    + 'This lesson is about which question scientists chose, and why '
    + 'that one choice gives a single grouping instead of three.',

  method: [
    'Look at the body: covering, bones, how it reproduces.',
    'Decide the kingdom first.',
    'Then narrow: does it have a backbone?',
    'Then the group: fur and milk, feathers, scales, moist skin.',
    'Name the features you used. That is the answer, not just the group.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which kingdom does a mushroom belong to?',
      steps: [
        'It does not make its own food, so it is not a plant.',
        'It does not move about, so it is not an animal.',
      ],
      answer: 'The fungi.',
    },
    {
      level: 4,
      ask: 'A whale lives in water and looks like a fish. '
        + 'What group is it in?',
      steps: [
        'Look at features, not at where it lives.',
        'It breathes air and feeds its young on milk.',
      ],
      answer: 'With the mammals, not the fish.',
    },
    {
      level: 5,
      ask: 'Why do scientists group by features rather than behaviour?',
      steps: [
        'Features are inherited from parents.',
        'Behaviour can be forced by where something lives.',
        'A bat and a bird both fly without being related.',
      ],
      answer: 'Because inherited features show what is actually related, '
        + 'and behaviour does not.',
    },
  ],

  traps: [
    {
      mistake: 'Grouping by where something lives.',
      why: 'A whale lives in water and is a mammal. '
        + 'Habitat is not a feature of the body.',
    },
    {
      mistake: 'Grouping by how something moves.',
      why: 'A bat flies and belongs with mammals. '
        + 'Flight evolved more than once.',
    },
    {
      mistake: 'Naming the group without the features.',
      why: 'The features are the reasoning. '
        + 'Examinations ask for them and they are what you can defend.',
    },
  ],

  extension:
    'Grouping has been revised several times as better evidence arrived, '
    + 'most recently by comparing the chemical instructions inside cells. '
    + 'Some things long grouped together turned out not to be related at all. '
    + 'A classification is a current best answer, not a permanent fact.',

  figure: {
    alt: 'Two groupings of the same animals. On the left, grouping by '
      + 'what the animal does puts the bat with the bird because both '
      + 'fly, and leaves the goat elsewhere. On the right, grouping by '
      + 'inherited features, fur and milk for the young, puts the bat '
      + 'with the goat and leaves the bird elsewhere.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="23" text-anchor="middle" fill="currentColor" stroke="none">group by features, not by what it does</text>'
      + '<text x="170" y="84" font-size="18" text-anchor="middle" fill="#c8433a" stroke="none">grouped by what it does</text>'
      + '<path d="M 70 100 H 270 V 144 H 70 Z" stroke="#c8433a"/>'
      + '<text x="170" y="128" font-size="18" text-anchor="middle" fill="#c8433a" stroke="none">it flies</text>'
      + '<line x1="130" y1="144" x2="112" y2="186" stroke="#c8433a"/>'
      + '<line x1="210" y1="144" x2="228" y2="186" stroke="#c8433a"/>'
      + '<text x="112" y="210" font-size="19" text-anchor="middle" fill="#c8433a" stroke="none">bat</text>'
      + '<text x="228" y="210" font-size="19" text-anchor="middle" fill="#c8433a" stroke="none">bird</text>'
      + '<text x="170" y="244" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">and the goat sits far away</text>'
      + '<text x="170" y="272" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">but flying was never inherited</text>'
      + '<text x="470" y="84" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">grouped by inherited features</text>'
      + '<path d="M 370 100 H 570 V 144 H 370 Z" stroke="#0f8a4d"/>'
      + '<text x="470" y="128" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">fur, and milk for the young</text>'
      + '<line x1="430" y1="144" x2="412" y2="186" stroke="#0f8a4d"/>'
      + '<line x1="510" y1="144" x2="528" y2="186" stroke="#0f8a4d"/>'
      + '<text x="412" y="210" font-size="19" text-anchor="middle" fill="#0f8a4d" stroke="none">bat</text>'
      + '<text x="528" y="210" font-size="19" text-anchor="middle" fill="#0f8a4d" stroke="none">goat</text>'
      + '<text x="470" y="244" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">and the bird sits far away</text>'
      + '<text x="470" y="272" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">and fur and milk are inherited</text>'
      + '<text x="320" y="330" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">a bat has fur and feeds its young on milk</text>'
      + '<text x="320" y="366" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">so it is a mammal, however well it flies</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The features that decide where a bat belongs',
      columns: ['Feature', 'Bat', 'Bird', 'Goat'],
      rows: [
        ['Flies', 'Yes', 'Yes', 'No'],
        ['Body covering', 'Fur', 'Feathers', 'Fur'],
        ['Feeds its young on milk', 'Yes', 'No', 'Yes'],
        ['Lays eggs', 'No', 'Yes', 'No'],
        ['Group it belongs to', 'Mammal', 'Bird', 'Mammal'],
      ],
      note: 'Only the first row is about behaviour, and it is the only row '
        + 'that gets the answer wrong.',
    },
  ],
  questions: [
    {
      id: 'cls-1',
      ask: 'A mushroom belongs to which kingdom?',
      kind: 'choice',
      options: ['Fungi', 'Plants', 'Animals'],
      answer: 'Fungi',
      teach: 'It does not make its own food like a plant, '
        + 'and it does not move about like an animal.',
      level: 3,
    },
    {
      id: 'cls-2',
      ask: 'A whale is grouped with:',
      kind: 'choice',
      options: ['Mammals', 'Fish', 'Reptiles'],
      answer: 'Mammals',
      teach: 'It breathes air and feeds its young on milk. '
        + 'Living in water is not a body feature.',
      level: 4,
    },
    {
      id: 'cls-3',
      ask: 'Why group by features rather than behaviour?',
      kind: 'choice',
      options: [
        'Features are inherited, so they show what is related',
        'Features are easier to see',
        'Behaviour changes with the weather',
      ],
      answer: 'Features are inherited, so they show what is related',
      teach: 'A bat and a bird both fly without being related, '
        + 'which is exactly why flight is the wrong thing to group on.',
      level: 5,
    },
  ],
})

/* ── the particle nature of matter ────────────────────────────────────────── */

teach({
  topicId: 'particles-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Everything is made of particles. '
      + 'In a solid they are packed and vibrate; in a liquid they touch and '
      + 'slide; in a gas they are far apart and fast. '
      + 'Heating gives them energy to move more.',
    method: [
      'Describe the arrangement: packed, touching, or far apart.',
      'Describe the movement: vibrating, sliding, or free.',
      'Explain any change by what heat did to the movement.',
    ],
  },

  why:
    'Put your thumb over the hole of a bicycle pump and push the '
    + 'handle in. '
    + 'It moves some way before it stops, and it pushes back against '
    + 'your hand. '
    + 'Now fill the same pump with water, cover the hole, and push. '
    + 'The handle will not move at all. '
    + 'Both are shut inside the same tube and neither can get out. '
    + 'Why does a gas let you squeeze it into a smaller space when a '
    + 'liquid refuses?',

  idea:
    'Everything is made of particles far too small to see. '
    + 'What a solid, a liquid and a gas are is nothing more than how '
    + 'those particles are arranged and how freely they can move.',

  mechanism:
    'This one idea replaces a list of facts with an explanation, '
    + 'and it is the most useful thing in JHS 1 science. '
    + 'Why does a solid keep its shape? The particles cannot move past each '
    + 'other. '
    + 'Why does a liquid take the shape of its container? They can slide. '
    + 'Why does a gas fill the room? Nothing holds them. '
    + 'Why does heating melt ice? Heat is energy of movement, '
    + 'so the particles vibrate harder until they break free of their places. '
    + 'Why does a smell spread across a room? '
    + 'Gas particles are moving constantly and spread out on their own. '
    + 'Every one of those is the same answer.',

  recap:
    'Things can be sorted into solid, liquid and gas by what '
    + 'happens to their shape. '
    + 'A stone is a solid: put it in any container and it keeps its '
    + 'own shape. '
    + 'Water is a liquid: it takes the shape of whatever it is poured '
    + 'into, while the amount of it stays the same. '
    + 'Air is a gas: it spreads out until it fills the whole '
    + 'container, however big that container is. '
    + 'That sorting is the starting point, and this lesson explains '
    + 'why the three behave that way.',

  method: [
    'Say how the particles are arranged.',
    'Say how they are moving.',
    'For a change of state, say what heat did to the movement.',
    'Heating adds energy, so they move more and spread.',
    'Cooling removes it, so they move less and settle closer.',
    'Never say a particle melts. The substance melts; the particles move '
      + 'more.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Why does a gas fill its whole container?',
      steps: [
        'Its particles are far apart.',
        'They move quickly in all directions and nothing holds them.',
      ],
      answer: 'Because nothing holds the particles together, '
        + 'so they spread until the container stops them.',
    },
    {
      level: 4,
      ask: 'Explain melting using particles.',
      steps: [
        'Heat is energy of movement.',
        'The particles in a solid vibrate harder as it is heated.',
        'Eventually they vibrate enough to break out of their fixed places.',
      ],
      answer: 'They gain enough energy to slide past each other instead of '
        + 'staying in place, which is what being a liquid is.',
    },
    {
      level: 5,
      ask: 'Why can you smell food from another room?',
      steps: [
        'Particles leave the food as a gas.',
        'Gas particles move constantly in all directions.',
        'They spread through the air until some reach your nose.',
      ],
      answer: 'Because gas particles are always moving and spread out on '
        + 'their own. That spreading is called diffusion.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the particles themselves melt or expand.',
      why: 'The particles do not change. '
        + 'What changes is how much they move and how far apart they are.',
    },
    {
      mistake: 'Thinking there is air between particles in a solid.',
      why: 'There is nothing between them. '
        + 'Air is itself made of particles and cannot be inside a solid.',
    },
    {
      mistake: 'Describing arrangement but not movement.',
      why: 'An answer needs both. '
        + '"Close together" without "vibrating" is half the picture.',
    },
  ],

  extension:
    'A gas can be squeezed into a much smaller space and a liquid almost '
    + 'cannot. '
    + 'The reason falls straight out of this picture: '
    + 'a gas is mostly empty space between particles, and a liquid is not. '
    + 'That is why brakes use liquid and tyres use air.',

  figure: {
    alt: 'Three boxes of circles. In the solid the circles are packed in '
      + 'a grid and only vibrate. In the liquid they still touch but '
      + 'lie unevenly and slide past each other. In the gas there are '
      + 'fewer of them, far apart, each with an arrow showing it moving '
      + 'fast.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="23" text-anchor="middle" fill="currentColor" stroke="none">the same particles, arranged three ways</text>'
      + '<path d="M 50 80 H 210 V 230 H 50 Z"/>'
      + '<path d="M 240 80 H 400 V 230 H 240 Z"/>'
      + '<path d="M 430 80 H 590 V 230 H 430 Z"/>'
      + '<circle cx="87" cy="113" r="20"/>'
      + '<circle cx="130" cy="113" r="20"/>'
      + '<circle cx="173" cy="113" r="20"/>'
      + '<circle cx="87" cy="155" r="20"/>'
      + '<circle cx="130" cy="155" r="20"/>'
      + '<circle cx="173" cy="155" r="20"/>'
      + '<circle cx="87" cy="197" r="20"/>'
      + '<circle cx="130" cy="197" r="20"/>'
      + '<circle cx="173" cy="197" r="20"/>'
      + '<circle cx="278" cy="122" r="20"/>'
      + '<circle cx="322" cy="140" r="20"/>'
      + '<circle cx="366" cy="118" r="20"/>'
      + '<circle cx="292" cy="182" r="20"/>'
      + '<circle cx="340" cy="192" r="20"/>'
      + '<circle cx="382" cy="168" r="20"/>'
      + '<circle cx="466" cy="112" r="14"/>'
      + '<line x1="466" y1="112" x2="490" y2="96"/>'
      + '<line x1="490" y1="96" x2="487.0" y2="102.3"/>'
      + '<line x1="490" y1="96" x2="483.0" y2="96.3"/>'
      + '<circle cx="524" cy="136" r="14"/>'
      + '<line x1="524" y1="136" x2="548" y2="120"/>'
      + '<line x1="548" y1="120" x2="545.0" y2="126.3"/>'
      + '<line x1="548" y1="120" x2="541.0" y2="120.3"/>'
      + '<circle cx="556" cy="104" r="14"/>'
      + '<line x1="556" y1="104" x2="580" y2="88"/>'
      + '<line x1="580" y1="88" x2="577.0" y2="94.3"/>'
      + '<line x1="580" y1="88" x2="573.0" y2="88.3"/>'
      + '<circle cx="486" cy="184" r="14"/>'
      + '<line x1="486" y1="184" x2="510" y2="168"/>'
      + '<line x1="510" y1="168" x2="507.0" y2="174.3"/>'
      + '<line x1="510" y1="168" x2="503.0" y2="168.3"/>'
      + '<circle cx="546" cy="196" r="14"/>'
      + '<line x1="546" y1="196" x2="570" y2="180"/>'
      + '<line x1="570" y1="180" x2="567.0" y2="186.3"/>'
      + '<line x1="570" y1="180" x2="563.0" y2="180.3"/>'
      + '<circle cx="512" cy="214" r="14"/>'
      + '<line x1="512" y1="214" x2="536" y2="198"/>'
      + '<line x1="536" y1="198" x2="533.0" y2="204.3"/>'
      + '<line x1="536" y1="198" x2="529.0" y2="198.3"/>'
      + '<text x="130" y="254" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">solid</text>'
      + '<text x="320" y="254" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">liquid</text>'
      + '<text x="510" y="254" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">gas</text>'
      + '<text x="130" y="280" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">packed, only vibrating</text>'
      + '<text x="320" y="280" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">touching, but sliding</text>'
      + '<text x="510" y="280" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">far apart, moving fast</text>'
      + '<text x="130" y="304" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">keeps its own shape</text>'
      + '<text x="320" y="304" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">takes the container shape</text>'
      + '<text x="510" y="304" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">fills the whole room</text>'
      + '<text x="320" y="352" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">heating gives the particles energy to move</text>'
      + '<text x="320" y="382" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">and that is the whole of melting, boiling and drying</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What the particles are doing in each state, and what you see '
        + 'because of it',
      columns: ['State', 'The particles', 'Its shape', 'Its volume'],
      rows: [
        ['Solid', 'Packed in place, only vibrating', 'Keeps its own', 'Fixed'],
        [
          'Liquid',
          'Touching, but sliding past each other',
          'Takes the container',
          'Fixed',
        ],
        [
          'Gas',
          'Far apart, moving fast in all directions',
          'Fills the container',
          'Changes with the container',
        ],
      ],
      note: 'Every property in the last two columns is read off the middle '
        + 'one. There is nothing else to remember.',
    },
  ],
  questions: [
    {
      id: 'pt-1',
      ask: 'In which state are particles far apart and fast moving?',
      kind: 'choice',
      options: ['Gas', 'Liquid', 'Solid'],
      answer: 'Gas',
      teach: 'Nothing holds them, which is why a gas spreads to fill its '
        + 'container.',
      level: 3,
    },
    {
      id: 'pt-2',
      ask: 'When ice melts, what happens to the particles?',
      kind: 'choice',
      options: [
        'They gain energy and can slide past each other',
        'They melt',
        'They get bigger',
      ],
      answer: 'They gain energy and can slide past each other',
      teach: 'The particles themselves never change. '
        + 'Only their movement and spacing do.',
      level: 4,
    },
    {
      id: 'pt-3',
      ask: 'Why can you smell cooking from another room?',
      kind: 'choice',
      options: [
        'Gas particles move constantly and spread out',
        'The smell is carried by light',
        'The air pushes it along',
      ],
      answer: 'Gas particles move constantly and spread out',
      teach: 'That spreading has a name: diffusion. '
        + 'It needs no wind, only the particles own movement.',
      level: 5,
    },
  ],
})

/* ── the water cycle ──────────────────────────────────────────────────────── */

teach({
  topicId: 'water-cycle-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Evaporation: particles gain energy and escape as gas. '
      + 'Condensation: they lose energy and gather as liquid. '
      + 'The sun supplies the energy and the cycle never stops.',
    method: [
      'Name the stage.',
      'Say whether the particles are gaining or losing energy.',
      'Say what that does to how they move and how close they are.',
    ],
  },

  why:
    'Hang washing out at seven on a bright, breezy morning and it '
    + 'is dry by eleven. '
    + 'Hang the same washing out on a cool, still, cloudy day and it '
    + 'is damp at four in the afternoon. '
    + 'The same amount of water has to leave the same cloth either '
    + 'way. '
    + 'Nobody touched it in between. '
    + 'Why will the sun and the wind take that water when the cool '
    + 'day will not, and what is it that actually leaves the cloth?',

  notation:
    'All four stage names end in -tion, which is said "shun". '
    + 'Evaporation is said "ee-vap-or-AY-shun". '
    + 'Condensation is said "con-den-SAY-shun". '
    + 'Precipitation is said "pre-sip-i-TAY-shun". '
    + 'Each name is a change, not a place. '
    + 'The commonest way to lose a mark is to swap the first two. '
    + 'Hold on to this: evaporation goes up and out, '
    + 'condensation comes back as drops.',

  idea:
    'The water cycle has four stages. '
    + 'They are evaporation, condensation, precipitation and collection. '
    + 'The names are long but the question behind each one is short. '
    + 'What are the particles doing here? '
    + 'The answer is always about energy. '
    + 'Either they are gaining it or they are losing it.',

  mechanism:
    'Evaporation does not need boiling, and that confuses people. '
    + 'In any liquid the particles move at different speeds. '
    + 'The fastest ones at the surface have enough energy to escape, '
    + 'even when the liquid is cool. '
    + 'That is why a puddle dries on a warm day without ever reaching 100 '
    + 'degrees. '
    + 'It also explains why evaporation cools what is left behind: '
    + 'the fastest particles leave, so the average energy of those remaining '
    + 'falls. '
    + 'That is exactly why sweating cools you.',

  recap:
    'The water cycle has four stages. '
    + 'Evaporation is water leaving a surface as a gas, which is what '
    + 'empties a bowl left out in the sun. '
    + 'Condensation is that gas turning back into liquid on something '
    + 'cooler, which is the water that beads on a cold bottle. '
    + 'Precipitation is that water falling again as rain. '
    + 'Collection is wherever it gathers: a river, a lake, the sea, '
    + 'or soaking down into the ground. '
    + 'Heat also makes particles move faster, so the particles in a '
    + 'hot thing are moving more than those in a cold one. '
    + 'This lesson joins the stages to the particles.',

  method: [
    'Evaporation: the fastest surface particles escape as gas.',
    'Say that it happens at any temperature, faster when warmer.',
    'Condensation: gas particles lose energy, slow, and join as liquid.',
    'Precipitation: drops grow heavy enough to fall.',
    'Collection: water flows back to rivers, lakes and the sea.',
    'At every stage, name the energy change.',
  ],

  worked: [
    {
      level: 4,
      ask: 'Why does a puddle dry up without boiling?',
      steps: [
        'Particles in a liquid move at different speeds.',
        'The fastest ones at the surface escape.',
        'That happens at any temperature.',
      ],
      answer: 'Evaporation only needs the fastest surface particles to '
        + 'escape, which happens well below boiling.',
    },
    {
      level: 5,
      ask: 'Why does sweating cool you?',
      steps: [
        'The fastest particles leave the sweat as gas.',
        'The ones left behind are the slower ones.',
        'Slower means cooler.',
      ],
      answer: 'Because evaporation removes the fastest particles, '
        + 'so what remains on your skin is cooler.',
    },
    {
      level: 5,
      ask: 'Explain condensation in terms of particles.',
      steps: [
        'Water vapour meets a cold surface.',
        'The particles lose energy and slow down.',
        'Slow enough, they stay together as a liquid.',
      ],
      answer: 'They lose energy, slow, and come close enough to hold '
        + 'together as a liquid.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking evaporation only happens at boiling point.',
      why: 'Boiling is evaporation throughout the liquid. '
        + 'Ordinary evaporation happens at the surface at any temperature.',
    },
    {
      mistake: 'Calling a cloud water vapour.',
      why: 'Vapour is invisible. '
        + 'A cloud is tiny liquid droplets, which is why you can see it.',
    },
    {
      mistake: 'Saying the sun pulls water up.',
      why: 'Nothing pulls. '
        + 'The sun adds energy and the fastest particles escape on their own.',
    },
  ],

  extension:
    'A refrigerator works on the cooling effect of evaporation, '
    + 'run deliberately in a loop: '
    + 'a liquid is allowed to evaporate inside, taking heat with it, '
    + 'then compressed back to a liquid outside, giving that heat off. '
    + 'The warm grille at the back is where it goes.',

  figure: {
    alt: 'The four stages of the water cycle set out as a loop: '
      + 'evaporation takes energy in, condensation gives it out, '
      + 'precipitation is gravity pulling the drops down, and '
      + 'collection waits for the sun to start it again.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="23" text-anchor="middle" fill="currentColor" stroke="none">one loop, and energy decides every step</text>'
      + '<path d="M 40 80 H 240 V 144 H 40 Z"/>'
      + '<text x="140" y="106" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">evaporation</text>'
      + '<text x="140" y="130" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">liquid becomes gas</text>'
      + '<path d="M 400 80 H 600 V 144 H 400 Z"/>'
      + '<text x="500" y="106" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">condensation</text>'
      + '<text x="500" y="130" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">gas becomes liquid</text>'
      + '<path d="M 400 240 H 600 V 304 H 400 Z"/>'
      + '<text x="500" y="266" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">precipitation</text>'
      + '<text x="500" y="290" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">the rain falls</text>'
      + '<path d="M 40 240 H 240 V 304 H 40 Z"/>'
      + '<text x="140" y="266" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">collection</text>'
      + '<text x="140" y="290" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">back to river and sea</text>'
      + '<line x1="244" y1="112" x2="396" y2="112"/>'
      + '<line x1="396" y1="112" x2="387.4" y2="117.2"/>'
      + '<line x1="396" y1="112" x2="387.4" y2="106.8"/>'
      + '<line x1="500" y1="148" x2="500" y2="236"/>'
      + '<line x1="500" y1="236" x2="494.8" y2="227.4"/>'
      + '<line x1="500" y1="236" x2="505.2" y2="227.4"/>'
      + '<line x1="396" y1="272" x2="244" y2="272"/>'
      + '<line x1="244" y1="272" x2="252.6" y2="266.8"/>'
      + '<line x1="244" y1="272" x2="252.6" y2="277.2"/>'
      + '<line x1="140" y1="236" x2="140" y2="148"/>'
      + '<line x1="140" y1="148" x2="145.2" y2="156.6"/>'
      + '<line x1="140" y1="148" x2="134.8" y2="156.6"/>'
      + '<text x="320" y="100" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">energy taken in</text>'
      + '<text x="516" y="196" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">energy given out</text>'
      + '<text x="320" y="258" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">gravity pulls it down</text>'
      + '<text x="156" y="196" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">waiting for the sun</text>'
      + '<text x="320" y="344" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">evaporation needs no boiling: the fastest particles escape</text>'
      + '<text x="320" y="376" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">which is why a puddle dries, and why sweating cools you</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What the water is doing at each stage, and what the energy is '
        + 'doing',
      columns: ['Stage', 'What happens to the water', 'What the energy does'],
      rows: [
        [
          'Evaporation',
          'Liquid becomes gas at the surface',
          'The fastest particles take energy and escape',
        ],
        [
          'Condensation',
          'Gas becomes tiny droplets high up',
          'The particles lose energy and slow down',
        ],
        [
          'Precipitation',
          'Droplets join until they are heavy enough to fall',
          'Gravity does this part, not heat',
        ],
        [
          'Collection',
          'Water gathers in rivers, lakes and the sea',
          'It waits for the sun to start the loop again',
        ],
      ],
      note: 'The water itself is never used up. Only the energy moving it '
        + 'round changes hands.',
    },
  ],
  questions: [
    {
      id: 'wcj-1',
      ask: 'Does evaporation need the liquid to boil?',
      kind: 'choice',
      options: ['No', 'Yes'],
      answer: 'No',
      teach: 'Only the fastest particles at the surface need enough energy '
        + 'to escape, and that happens at any temperature.',
      level: 4,
    },
    {
      id: 'wcj-2',
      ask: 'Why does sweating cool you?',
      kind: 'choice',
      options: [
        'The fastest particles leave, so what is left is cooler',
        'Sweat is cold',
        'Wind blows on it',
      ],
      answer: 'The fastest particles leave, so what is left is cooler',
      teach: 'Evaporation always cools what remains behind, '
        + 'for exactly that reason.',
      level: 5,
    },
    {
      id: 'wcj-3',
      ask: 'During condensation the particles:',
      kind: 'choice',
      options: [
        'Lose energy and slow down',
        'Gain energy and speed up',
        'Stay the same',
      ],
      answer: 'Lose energy and slow down',
      teach: 'Slow enough and they stay together as a liquid, '
        + 'which is what condensing means.',
      level: 4,
    },
  ],
})

/* ── life cycles and vectors ──────────────────────────────────────────────── */

teach({
  topicId: 'life-cycles-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A vector carries disease from one person to another. '
      + 'The mosquito and the housefly both have four stages, '
      + 'and control works by breaking an early stage.',
    method: [
      'Name the four stages in order.',
      'Say where each stage lives.',
      'Break the cycle where the stage is still in one place.',
    ],
  },

  why:
    'A family in Kasoa sleeps under treated nets every single night '
    + 'and still gets malaria twice in one year. '
    + 'Their neighbour has no net at all and does not get it. '
    + 'The nets are good nets and they are used properly. '
    + 'Behind the house with the nets there is an old tyre and a '
    + 'bucket that always hold water. '
    + 'Why did the nets fail, and what was the neighbour doing right '
    + 'without knowing it?',

  idea:
    'A vector is an animal that carries disease between people. '
    + 'The mosquito carries malaria. '
    + 'The housefly carries germs from waste onto food. '
    + 'Both go through egg, larva, pupa and adult.',

  mechanism:
    'Control works best at the stage that cannot move. '
    + 'An adult mosquito flies and can be anywhere. '
    + 'Its eggs and larvae are stuck in standing water, '
    + 'which is a place you can find and empty. '
    + 'The same is true of the housefly, whose larvae live in waste. '
    + 'So the sensible attack is not on the adults you can see, '
    + 'it is on the water and the rubbish you can remove. '
    + 'You are breaking the cycle where it is pinned down.',

  recap:
    'A mosquito passes through four stages in its life. '
    + 'The egg is laid on standing water. '
    + 'The larva hatches out and lives in that water, wriggling just '
    + 'under the surface. '
    + 'The pupa is the still stage, and it is in the water too. '
    + 'Only the adult flies, and only the adult bites. '
    + 'So three of the four stages cannot leave the water, which is '
    + 'why pouring the water away works better than chasing the '
    + 'adults.',

  method: [
    'Name the four stages in order.',
    'For each, say where it lives.',
    'Find the stage that cannot move.',
    'Remove what that stage needs: standing water, or exposed waste.',
    'Protect against the adults as well: nets, screens, covered food.',
    'Attack more than one stage, because no single measure is complete.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What are the four stages of a mosquito?',
      steps: [
        'Three in water, one in the air.',
      ],
      answer: 'Egg, larva, pupa, adult.',
    },
    {
      level: 4,
      ask: 'Why is emptying standing water more effective than spraying '
        + 'adults?',
      steps: [
        'Adults fly and can be anywhere.',
        'Eggs, larvae and pupae are all stuck in one place.',
      ],
      answer: 'Because three of the four stages cannot move, '
        + 'so you can reach them all at once.',
    },
    {
      level: 5,
      ask: 'A housefly does not bite. How does it spread disease?',
      steps: [
        'It feeds on waste and then lands on food.',
        'Germs travel on its body and in what it leaves behind.',
      ],
      answer: 'By carrying germs from waste onto food. '
        + 'That is why covering food matters as much as removing waste.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking only biting insects spread disease.',
      why: 'A housefly never bites and is a serious vector. '
        + 'Carrying germs is enough.',
    },
    {
      mistake: 'Thinking mosquitoes need dirty water.',
      why: 'Clean standing water does just as well. '
        + 'A bucket of rainwater is enough.',
    },
    {
      mistake: 'Relying on one control measure.',
      why: 'Nets protect at night and do nothing about breeding. '
        + 'Use both.',
    },
  ],

  extension:
    'Malaria is caused by a parasite, not by the mosquito itself. '
    + 'The mosquito is the vehicle. '
    + 'That is why removing mosquitoes stops malaria '
    + 'even though the mosquito was never the disease.',

  figure: {
    alt: 'The mosquito life cycle drawn as a loop of four stages. Egg, '
      + 'larva and pupa are marked in green and all three sit in '
      + 'standing water, so they can be reached. The adult is marked in '
      + 'red and flies anywhere, so it cannot.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="23" text-anchor="middle" fill="currentColor" stroke="none">break the cycle where it cannot move</text>'
      + '<path d="M 60 84 H 240 V 140 H 60 Z" stroke="#0f8a4d"/>'
      + '<text x="150" y="118" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">egg</text>'
      + '<path d="M 400 84 H 580 V 140 H 400 Z" stroke="#0f8a4d"/>'
      + '<text x="490" y="118" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">larva</text>'
      + '<path d="M 400 244 H 580 V 300 H 400 Z" stroke="#0f8a4d"/>'
      + '<text x="490" y="278" font-size="20" text-anchor="middle" fill="#0f8a4d" stroke="none">pupa</text>'
      + '<path d="M 60 244 H 240 V 300 H 60 Z" stroke="#c8433a"/>'
      + '<text x="150" y="278" font-size="20" text-anchor="middle" fill="#c8433a" stroke="none">adult</text>'
      + '<line x1="244" y1="112" x2="396" y2="112"/>'
      + '<line x1="396" y1="112" x2="387.4" y2="117.2"/>'
      + '<line x1="396" y1="112" x2="387.4" y2="106.8"/>'
      + '<line x1="490" y1="144" x2="490" y2="240"/>'
      + '<line x1="490" y1="240" x2="484.8" y2="231.4"/>'
      + '<line x1="490" y1="240" x2="495.2" y2="231.4"/>'
      + '<line x1="396" y1="272" x2="244" y2="272"/>'
      + '<line x1="244" y1="272" x2="252.6" y2="266.8"/>'
      + '<line x1="244" y1="272" x2="252.6" y2="277.2"/>'
      + '<line x1="150" y1="240" x2="150" y2="148"/>'
      + '<line x1="150" y1="148" x2="155.2" y2="156.6"/>'
      + '<line x1="150" y1="148" x2="144.8" y2="156.6"/>'
      + '<text x="150" y="74" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">in standing water</text>'
      + '<text x="490" y="74" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">in standing water</text>'
      + '<text x="490" y="322" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">in standing water</text>'
      + '<text x="150" y="322" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">flies anywhere it likes</text>'
      + '<text x="320" y="182" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">these three are pinned down</text>'
      + '<text x="320" y="210" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">so empty the water</text>'
      + '<text x="320" y="370" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">the one you can see is the one you cannot catch</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Where each stage of the mosquito lives, and whether you can '
        + 'reach it',
      columns: ['Stage', 'Where it is', 'Can it move away', 'What works'],
      rows: [
        ['Egg', 'Laid on standing water', 'No', 'Pour the water away'],
        ['Larva', 'In standing water', 'Only within that water', 'Pour the water away'],
        ['Pupa', 'In standing water', 'Barely', 'Pour the water away'],
        ['Adult', 'Flying, anywhere', 'Yes', 'Nets, screens and covered skin'],
      ],
      note: 'The housefly is the same argument with waste in place of '
        + 'water: its larvae live in rubbish, so clearing rubbish breaks '
        + 'the cycle.',
    },
  ],
  questions: [
    {
      id: 'lcj-1',
      ask: 'How many mosquito stages happen in water?',
      kind: 'numeric',
      answer: '3',
      accept: ['three'],
      teach: 'Egg, larva and pupa. Only the adult leaves the water.',
      level: 3,
    },
    {
      id: 'lcj-2',
      ask: 'Why attack the larvae rather than the adults?',
      kind: 'choice',
      options: [
        'Larvae cannot move away',
        'Larvae are larger',
        'Adults are harmless',
      ],
      answer: 'Larvae cannot move away',
      teach: 'They are pinned in standing water, '
        + 'so emptying it reaches all of them at once.',
      level: 4,
    },
    {
      id: 'lcj-3',
      ask: 'How does a housefly spread disease without biting?',
      kind: 'choice',
      options: [
        'It carries germs from waste onto food',
        'It stings',
        'It breathes on food',
      ],
      answer: 'It carries germs from waste onto food',
      teach: 'Carrying is enough to be a vector. '
        + 'That is why covering food matters.',
      level: 5,
    },
  ],
})

/* ── the skeletal and muscular systems ───────────────────────────────────── */

teach({
  topicId: 'skeletal-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The skeleton supports, protects and allows movement. '
      + 'Muscles pull, never push, '
      + 'so they work in pairs: one bends the joint, the other straightens '
      + 'it.',
    method: [
      'Name the bone and the joint.',
      'Say which muscle pulls to bend it.',
      'Say which pulls to straighten it back.',
    ],
  },

  why:
    'Hold one arm straight out and put your other hand on top of '
    + 'it, above the bone. '
    + 'Now bend your elbow. '
    + 'Something under your hand went hard and short, and the arm '
    + 'came up with it. '
    + 'The bone itself did not change. '
    + 'A bone cannot shorten and a bone cannot pull. '
    + 'So what pulled it, and why can that thing bend your arm but '
    + 'not straighten it again?',

  idea:
    'The skeleton does three jobs at once, and the third of them is the '
    + 'one that is easy to miss: it gives muscles something to pull '
    + 'against. '
    + 'Muscles move bones at joints.',

  mechanism:
    'A muscle can only pull. It can never push. '
    + 'That single fact explains why muscles come in pairs. '
    + 'The biceps pulls the forearm up and bends the elbow. '
    + 'It cannot push it back down, '
    + 'so the triceps on the other side pulls it straight again. '
    + 'One contracts while the other relaxes, and then they swap. '
    + 'Any joint that moves two ways has two muscles doing it, '
    + 'and if you can only find one you have not looked at the other side.',

  recap:
    'The body is built out of systems, and each system has one job '
    + 'to do. '
    + 'The digestive system breaks food down. '
    + 'The breathing system takes air in. '
    + 'The blood system carries both of those round the body. '
    + 'Bones and muscles are two more systems, and this lesson is '
    + 'about how those two work together, because neither of them '
    + 'does anything useful on its own.',

  method: [
    'Name the bones meeting at the joint.',
    'Say what kind of joint it is: hinge, ball and socket, fixed.',
    'Name the muscle that pulls to bend it.',
    'Name the muscle on the opposite side that straightens it.',
    'Say which contracts and which relaxes for each movement.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name two jobs of the skeleton.',
      steps: [
        'Think what would happen without it.',
      ],
      answer: 'It supports the body and protects organs. '
        + 'It also allows movement.',
    },
    {
      level: 4,
      ask: 'Which muscle contracts to bend your elbow?',
      steps: [
        'Bending lifts the forearm towards the shoulder.',
        'The muscle on the front of the upper arm pulls it.',
      ],
      answer: 'The biceps. The triceps relaxes at the same time.',
    },
    {
      level: 5,
      ask: 'Why do muscles have to work in pairs?',
      steps: [
        'A muscle can pull but cannot push.',
        'So it can move a bone one way only.',
        'Something must pull it back.',
      ],
      answer: 'Because a muscle can only pull, '
        + 'so a second one is needed to reverse the movement.',
    },
  ],

  traps: [
    {
      mistake: 'Saying a muscle pushes a bone.',
      why: 'Muscles only pull. '
        + 'This is the single most tested idea in the topic.',
    },
    {
      mistake: 'Thinking both muscles of a pair contract together.',
      why: 'One contracts while the other relaxes. '
        + 'Both contracting would lock the joint.',
    },
    {
      mistake: 'Treating bones and muscles as separate topics.',
      why: 'Neither moves anything alone. '
        + 'Examination questions almost always involve both.',
    },
  ],

  extension:
    'A joint that moves two ways needs two muscles. '
    + 'A shoulder moves in almost every direction, '
    + 'so it has many muscles around it rather than a single pair. '
    + 'Count the directions a joint moves and you can predict roughly how '
    + 'complicated its muscles will be.',

  figure: {
    alt: 'An arm drawn as two bones meeting at the elbow joint. The '
      + 'biceps runs down the front of the upper arm bone to the '
      + 'forearm, and the triceps runs down the back to the far side of '
      + 'the joint, so one pulls the forearm up and the other pulls it '
      + 'straight again.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="23" text-anchor="middle" fill="currentColor" stroke="none">a muscle can only pull, so they come in pairs</text>'
      + '<line x1="240" y1="90" x2="240" y2="250" stroke-width="8"/>'
      + '<line x1="236" y1="100" x2="192" y2="88"/>'
      + '<text x="188" y="84" font-size="14" text-anchor="end" fill="currentColor" stroke="none">upper arm bone</text>'
      + '<circle cx="240" cy="250" r="12"/>'
      + '<line x1="240" y1="250" x2="210" y2="272" stroke-width="8"/>'
      + '<line x1="252" y1="258" x2="300" y2="290"/>'
      + '<text x="304" y="294" font-size="14" text-anchor="start" fill="currentColor" stroke="none">elbow joint</text>'
      + '<line x1="240" y1="250" x2="440" y2="190" stroke-width="8"/>'
      + '<text x="450" y="176" font-size="14" text-anchor="start" fill="currentColor" stroke="none">forearm bone</text>'
      + '<line x1="258" y1="120" x2="330" y2="228" stroke="#0f8a4d" stroke-width="12"/>'
      + '<line x1="294" y1="174" x2="350" y2="152"/>'
      + '<text x="356" y="148" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">biceps</text>'
      + '<line x1="222" y1="120" x2="212" y2="266" stroke-width="12"/>'
      + '<line x1="217" y1="190" x2="162" y2="180"/>'
      + '<text x="158" y="176" font-size="14" text-anchor="end" fill="currentColor" stroke="none">triceps</text>'
      + '<text x="320" y="330" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">the biceps pulls, and the elbow bends</text>'
      + '<text x="320" y="358" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">the triceps pulls, and the elbow straightens</text>'
      + '<text x="320" y="388" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">neither can push, so each one needs the other to undo it</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The three jobs the skeleton does, and where to see each one',
      columns: ['The job', 'Where you can see it'],
      rows: [
        ['Holds you up', 'The backbone, and the long bones of the leg'],
        [
          'Protects soft organs',
          'The skull round the brain, the ribs round the heart and lungs',
        ],
        [
          'Gives muscles something to pull against',
          'Every joint, where a muscle crosses from one bone to the next',
        ],
      ],
      note: 'Bones also make blood cells, in the marrow of the long bones.',
    },
    {
      caption: 'The pair of muscles at the elbow, and what each does',
      columns: ['The movement', 'The biceps', 'The triceps'],
      rows: [
        ['Bending the elbow', 'Contracts and pulls', 'Relaxes'],
        ['Straightening the elbow', 'Relaxes', 'Contracts and pulls'],
      ],
      note: 'Any joint that moves two ways has a pair doing it. If you can '
        + 'find only one muscle, you have not looked at the other side.',
    },
  ],
  questions: [
    {
      id: 'sk-1',
      ask: 'Can a muscle push a bone?',
      kind: 'choice',
      options: ['No, it can only pull', 'Yes'],
      answer: 'No, it can only pull',
      teach: 'That is why muscles come in pairs. '
        + 'A second one is needed to reverse the movement.',
      level: 3,
    },
    {
      id: 'sk-2',
      ask: 'Which muscle contracts to bend the elbow?',
      kind: 'choice',
      options: ['The biceps', 'The triceps', 'Both'],
      answer: 'The biceps',
      teach: 'The triceps relaxes while the biceps contracts. '
        + 'Both contracting would lock the joint.',
      level: 4,
    },
    {
      id: 'sk-3',
      ask: 'Name one job of the skeleton besides support.',
      kind: 'choice',
      options: [
        'Protecting organs',
        'Making blood sugar',
        'Digesting food',
      ],
      answer: 'Protecting organs',
      teach: 'Support, protection and movement are the three. '
        + 'The skull protects the brain and the ribs the heart and lungs.',
      level: 3,
    },
  ],
})

/* ── food chains and webs ─────────────────────────────────────────────────── */

teach({
  topicId: 'food-webs-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A food web is many food chains joined. '
      + 'Arrows follow the energy, from the eaten to the eater. '
      + 'Remove one population and the effects run both ways.',
    method: [
      'Start with the producers, which are the plants.',
      'Draw an arrow from each organism to whatever eats it.',
      'To predict a change, follow the arrows out and back.',
    ],
  },

  why:
    'A lagoon near Keta used to hold plenty of tilapia, and the '
    + 'fishermen also saw crabs, herons and kingfishers there. '
    + 'One season a factory upstream killed off the small shrimps in '
    + 'it. '
    + 'Nobody touched the tilapia, the crabs or the birds. '
    + 'Within two years the catch had collapsed and the herons had '
    + 'gone. '
    + 'Why does killing one small animal that nobody fishes for empty '
    + 'a whole lagoon?',

  notation:
    'A food chain is written with arrows: grass → grasshopper → '
    + 'lizard → hawk. '
    + 'Each arrow is said “is eaten by”, so that line is read “grass '
    + 'is eaten by the grasshopper”. '
    + 'The arrow points from the one that is eaten to the one that '
    + 'eats, because it follows the energy. '
    + 'In a web the same animal can have several arrows going in and '
    + 'several coming out. '
    + 'Turning one arrow round is the commonest way to lose a mark.',

  idea:
    'A food chain shows one path of energy. '
    + 'A food web joins many chains together, '
    + 'because most animals eat several things and are eaten by several. '
    + 'Plants are the producers; everything else is a consumer.',

  mechanism:
    'A web is far harder to break than a chain, and that is the point of '
    + 'drawing one. '
    + 'In a chain, removing one link starves everything above it. '
    + 'In a web, an animal that loses one food usually has another, '
    + 'so numbers shift rather than collapse. '
    + 'The second thing a web shows is that effects run downwards as well as '
    + 'up: '
    + 'remove a predator and its prey increases, '
    + 'which then eats more of the plants below. '
    + 'People almost always trace a change upwards and forget the other '
    + 'direction.',

  recap:
    'A food chain is a line showing what eats what, with arrows in '
    + 'between: grass, then grasshopper, then lizard, then hawk. '
    + 'Each arrow points from the food towards the eater, because the '
    + 'arrow follows the energy as it is handed on. '
    + 'So grass to grasshopper means the grasshopper eats the grass. '
    + 'A chain like that shows one path and nothing else. '
    + 'This lesson joins many of those paths together.',

  method: [
    'List the organisms and what each eats.',
    'Put the producers at the bottom.',
    'Draw an arrow from each organism to everything that eats it.',
    'To predict a change, follow the arrows forward from it.',
    'Then follow them backwards, because effects run both ways.',
    'Say which populations rise and which fall, and why.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is at the start of every food web?',
      steps: [
        'Something has to make the food.',
      ],
      answer: 'Producers, which are plants.',
    },
    {
      level: 4,
      ask: 'A disease kills most of the hawks in an area. '
        + 'What happens to the lizards they ate?',
      steps: [
        'Fewer hawks means less is eaten.',
      ],
      answer: 'The lizard population rises.',
    },
    {
      level: 5,
      ask: 'And what then happens to the grasshoppers the lizards eat?',
      steps: [
        'More lizards means more grasshoppers eaten.',
        'So grasshopper numbers fall.',
        'And with fewer grasshoppers, the grass grows more.',
      ],
      answer: 'They fall, and the grass increases. '
        + 'The effect carries down the web, not just up.',
    },
  ],

  traps: [
    {
      mistake: 'Pointing the arrows at the food.',
      why: 'The arrow follows the energy, which moves into the eater. '
        + 'Read it as "goes to", not "eats".',
    },
    {
      mistake: 'Tracing effects in one direction only.',
      why: 'Removing a predator changes everything below it too. '
        + 'Follow the arrows both ways.',
    },
    {
      mistake: 'Drawing a web as a single chain.',
      why: 'Most animals eat several things. '
        + 'A single chain overstates how fragile the system is.',
    },
  ],

  extension:
    'Energy is lost at every step, mostly as heat, '
    + 'which is why food chains are short and why there are far fewer '
    + 'predators than plants. '
    + 'There is simply not enough energy left at the top to support many.',

  figure: {
    alt: 'A food web. Maize is eaten by the grasshopper and the rat. The '
      + 'grasshopper is eaten by the lizard and the rat by the snake, '
      + 'and the hawk eats the lizard, the snake and the rat. The rat '
      + 'is crossed out in red, and the hawk still has the lizard and '
      + 'the snake to eat.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="34" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">a web has another route, a chain has none</text>'
      + '<path d="M 245 320 H 395 V 360 H 245 Z"/>'
      + '<text x="320" y="346" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">maize</text>'
      + '<path d="M 85 230 H 235 V 270 H 85 Z"/>'
      + '<text x="160" y="256" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">grasshopper</text>'
      + '<path d="M 440 230 H 590 V 270 H 440 Z"/>'
      + '<path d="M 45 140 H 195 V 180 H 45 Z"/>'
      + '<text x="120" y="166" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">lizard</text>'
      + '<path d="M 440 140 H 590 V 180 H 440 Z"/>'
      + '<text x="515" y="166" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">snake</text>'
      + '<path d="M 245 60 H 395 V 100 H 245 Z"/>'
      + '<text x="320" y="86" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">hawk</text>'
      + '<line x1="300" y1="318" x2="196" y2="274"/>'
      + '<line x1="196" y1="274" x2="205.9" y2="272.6"/>'
      + '<line x1="196" y1="274" x2="201.9" y2="282.1"/>'
      + '<line x1="380" y1="318" x2="470" y2="274"/>'
      + '<line x1="470" y1="274" x2="464.6" y2="282.4"/>'
      + '<line x1="470" y1="274" x2="460.0" y2="273.1"/>'
      + '<line x1="155" y1="228" x2="128" y2="184"/>'
      + '<line x1="128" y1="184" x2="136.9" y2="188.6"/>'
      + '<line x1="128" y1="184" x2="128.1" y2="194.0"/>'
      + '<line x1="515" y1="228" x2="515" y2="184"/>'
      + '<line x1="515" y1="184" x2="520.2" y2="192.6"/>'
      + '<line x1="515" y1="184" x2="509.8" y2="192.6"/>'
      + '<line x1="198" y1="146" x2="243" y2="106"/>'
      + '<line x1="243" y1="106" x2="240.0" y2="115.5"/>'
      + '<line x1="243" y1="106" x2="233.2" y2="107.8"/>'
      + '<line x1="452" y1="232" x2="392" y2="106"/>'
      + '<line x1="392" y1="106" x2="400.3" y2="111.5"/>'
      + '<line x1="392" y1="106" x2="391.0" y2="116.0"/>'
      + '<line x1="438" y1="150" x2="398" y2="106"/>'
      + '<line x1="398" y1="106" x2="407.6" y2="108.9"/>'
      + '<line x1="398" y1="106" x2="399.9" y2="115.8"/>'
      + '<line x1="452" y1="260" x2="578" y2="276" stroke="#c8433a" stroke-width="4"/>'
      + '<line x1="578" y1="260" x2="452" y2="276" stroke="#c8433a" stroke-width="4"/>'
      + '<text x="515" y="256" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">rat</text>'
      + '<text x="540" y="312" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">take the rat away</text>'
      + '<text x="320" y="390" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">and the hawk still eats, because the lizard is another road</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Where each living thing sits in this web',
      columns: ['Living thing', 'Its place', 'What it eats', 'What eats it'],
      rows: [
        ['Maize', 'Producer', 'Nothing, it makes its own food', 'Grasshopper, rat'],
        ['Grasshopper', 'First consumer', 'Maize', 'Lizard'],
        ['Rat', 'First consumer', 'Maize', 'Snake, hawk'],
        ['Lizard', 'Second consumer', 'Grasshopper', 'Hawk'],
        ['Snake', 'Second consumer', 'Rat', 'Hawk'],
        ['Hawk', 'Top consumer', 'Lizard, snake, rat', 'Nothing in this web'],
      ],
      note: 'Read the last column upwards and the third downwards, because '
        + 'a change runs both ways. Remove a hawk and the rats increase, '
        + 'and the maize suffers for it.',
    },
  ],
  questions: [
    {
      id: 'fw-1',
      ask: 'What is a producer?',
      kind: 'choice',
      options: ['A plant that makes its own food', 'A predator', 'A decomposer'],
      answer: 'A plant that makes its own food',
      teach: 'Producers start every web, because only they make food from '
        + 'light.',
      level: 3,
    },
    {
      id: 'fw-2',
      ask: 'Most hawks die. What happens to the lizards they ate?',
      kind: 'choice',
      options: ['They increase', 'They decrease', 'No change'],
      answer: 'They increase',
      teach: 'Fewer predators means fewer eaten. '
        + 'Then follow it further: more lizards means fewer grasshoppers.',
      level: 4,
    },
    {
      id: 'fw-3',
      ask: 'Why is a web harder to break than a chain?',
      kind: 'choice',
      options: [
        'Most animals have more than one food',
        'Webs have more plants',
        'Webs have fewer predators',
      ],
      answer: 'Most animals have more than one food',
      teach: 'Losing one food shifts the numbers rather than starving '
        + 'everything above it.',
      level: 5,
    },
  ],
})

/* ── forces and their effects ─────────────────────────────────────────────── */

teach({
  topicId: 'force-types',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A force is a push or pull measured in newtons. '
      + 'Contact forces need touching; gravity and magnetism do not. '
      + 'A force changes speed or direction, or changes shape.',
    method: [
      'Name the force and say whether it needs contact.',
      'Say what it is doing: starting, stopping, turning, or deforming.',
      'If forces are balanced, the motion does not change.',
    ],
  },

  why:
    'A tro-tro pulls away from the station and you are pressed back '
    + 'into the seat. '
    + 'Out on the motorway it reaches full speed, and now you feel '
    + 'nothing at all, though it is moving faster than it was before. '
    + 'Then the driver brakes and you are thrown forward. '
    + 'You are pushed about when the speed changes and left alone '
    + 'when it does not. '
    + 'Why does going fast feel like nothing, while changing speed '
    + 'does not?',

  notation:
    'A force is measured in newtons, written N, so a 20 newton pull '
    + 'is written 20 N, with a space and a capital N. '
    + 'In a diagram a force is drawn as an arrow starting on the '
    + 'object it acts on. '
    + 'The way the arrow points is the direction of the force, and a '
    + 'longer arrow means a bigger force. '
    + 'Drawing the arrow pointing into the object instead of out of '
    + 'it, or leaving the N off the number, is the commonest way to '
    + 'lose a mark.',

  idea:
    'A force is a push or a pull, measured in newtons. '
    + 'Some forces need the two things to be touching and some act across a gap. '
    + 'Either way, a force can change an object’s speed, its direction, '
    + 'or its shape.',

  mechanism:
    'The idea that does the most work here is balanced forces. '
    + 'A book on a table has gravity pulling it down '
    + 'and the table pushing it up by the same amount, '
    + 'so nothing changes and it stays still. '
    + 'A car at a steady speed has the engine pushing forward '
    + 'and friction and air resistance pushing back, equally. '
    + 'So "no change in motion" does not mean no forces. '
    + 'It means the forces cancel. '
    + 'This is why a moving object does not need a continuous push '
    + 'to keep moving, only to overcome what is resisting it.',

  recap:
    'A push or a pull can start something moving, stop it, or turn '
    + 'it. '
    + 'Push a ball standing still and it moves off. '
    + 'Put your foot in its way and it stops. '
    + 'Friction is the force that works against movement wherever two '
    + 'surfaces rub on each other. '
    + 'A ball rolled across sand stops far sooner than the same ball '
    + 'rolled across concrete, and the sand is the reason. '
    + 'This lesson names the forces properly and adds a new idea: '
    + 'what happens when two of them balance.',

  method: [
    'Name every force acting on the object.',
    'For each, say whether it is a contact force or acts at a distance.',
    'Draw them as arrows, longer for larger.',
    'Compare the arrows in each direction.',
    'Equal and opposite means balanced: the motion does not change.',
    'Unbalanced means the motion changes in the direction of the larger '
      + 'force.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which of these acts without touching: friction or gravity?',
      steps: [
        'Friction needs two surfaces in contact.',
        'Gravity pulls across empty space.',
      ],
      answer: 'Gravity.',
    },
    {
      level: 4,
      ask: 'A book lies still on a table. Are there forces on it?',
      steps: [
        'Gravity pulls it down.',
        'The table pushes it up.',
        'They are equal, so nothing changes.',
      ],
      answer: 'Yes, two of them. They are balanced, which is why it stays '
        + 'still.',
    },
    {
      level: 5,
      ask: 'A car travels at a steady speed. Is the engine force larger than '
        + 'the resistance?',
      steps: [
        'Steady speed means the motion is not changing.',
        'Not changing means the forces are balanced.',
      ],
      answer: 'No, they are equal. '
        + 'A larger engine force would make it speed up.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking no movement means no forces.',
      why: 'A book on a table has two forces that cancel. '
        + 'Balanced is not the same as absent.',
    },
    {
      mistake: 'Thinking steady speed needs a bigger forward force.',
      why: 'Steady means balanced. '
        + 'A bigger forward force would be acceleration.',
    },
    {
      mistake: 'Forgetting that a force can change shape.',
      why: 'Squeezing a sponge changes no motion at all '
        + 'and is still a force doing work.',
    },
  ],

  extension:
    'In space, with almost no friction or air resistance, '
    + 'a spacecraft keeps moving without its engine running. '
    + 'The engine is only needed to change speed or direction. '
    + 'That is the clearest demonstration that motion does not need a '
    + 'continuous push.',

  figure: {
    alt: 'A book on a table with an arrow pushing up from the table and '
      + 'an equal arrow of gravity pulling down, so it stays still. '
      + 'Beside it a car at a steady speed with the engine pushing '
      + 'forward and friction and air pushing back by the same amount, '
      + 'so the speed does not change.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">balanced forces mean no change, not no force</text>'
      + '<path d="M 120 180 H 240 V 230 H 120 Z"/>'
      + '<text x="180" y="212" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">book</text>'
      + '<line x1="180" y1="176" x2="180" y2="112" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="180" y1="112" x2="185.2" y2="120.6" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="180" y1="112" x2="174.8" y2="120.6" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="180" y="98" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the table pushes up, 20 N</text>'
      + '<line x1="180" y1="234" x2="180" y2="300"/>'
      + '<line x1="180" y1="300" x2="174.8" y2="291.4"/>'
      + '<line x1="180" y1="300" x2="185.2" y2="291.4"/>'
      + '<text x="180" y="322" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">gravity pulls down, 20 N</text>'
      + '<text x="180" y="358" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">nothing changes, and it stays still</text>'
      + '<path d="M 410 180 H 550 V 230 H 410 Z"/>'
      + '<text x="480" y="212" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">a car</text>'
      + '<circle cx="445" cy="240" r="12"/>'
      + '<circle cx="515" cy="240" r="12"/>'
      + '<text x="480" y="282" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">at a steady speed</text>'
      + '<line x1="556" y1="205" x2="624" y2="205" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="624" y1="205" x2="615.4" y2="210.2" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="624" y1="205" x2="615.4" y2="199.8" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="630" y="166" font-size="13" text-anchor="end" fill="#0f8a4d" stroke="none">the engine pushes</text>'
      + '<line x1="404" y1="205" x2="336" y2="205"/>'
      + '<line x1="336" y1="205" x2="344.6" y2="199.8"/>'
      + '<line x1="336" y1="205" x2="344.6" y2="210.2"/>'
      + '<text x="336" y="166" font-size="13" text-anchor="start" fill="currentColor" stroke="none">friction and air push back</text>'
      + '<text x="480" y="322" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">and these two are equal too</text>'
      + '<text x="480" y="358" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">so the speed does not change</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Forces that need the two things to touch, and forces that act '
        + 'across a gap',
      columns: ['The force', 'Contact or distance', 'What it does'],
      rows: [
        ['Friction', 'Contact', 'Slows a thing sliding over another'],
        ['Air resistance', 'Contact', 'Slows a thing moving through air'],
        ['A push from your hand', 'Contact', 'Starts, stops or bends a thing'],
        ['Gravity', 'At a distance', 'Pulls everything towards the Earth'],
        ['Magnetism', 'At a distance', 'Pulls or pushes iron and other magnets'],
        [
          'Static electricity',
          'At a distance',
          'Pulls light things towards a charged one',
        ],
      ],
      note: 'All of them are measured in newtons, and any of them can '
        + 'change a speed, a direction or a shape.',
    },
  ],
  questions: [
    {
      id: 'fr-1',
      ask: 'Which force acts without contact?',
      kind: 'choice',
      options: ['Gravity', 'Friction', 'Air resistance'],
      answer: 'Gravity',
      teach: 'Gravity and magnetism act across a gap. '
        + 'Friction and air resistance need touching.',
      level: 3,
    },
    {
      id: 'fr-2',
      ask: 'A book rests on a table. How many forces act on it?',
      kind: 'numeric',
      answer: '2',
      accept: ['two'],
      teach: 'Gravity down and the table pushing up. '
        + 'They are balanced, so nothing moves.',
      level: 4,
    },
    {
      id: 'fr-3',
      ask: 'A car moves at steady speed. The engine force is:',
      kind: 'choice',
      options: [
        'Equal to the resistance',
        'Greater than the resistance',
        'Less than the resistance',
      ],
      answer: 'Equal to the resistance',
      teach: 'Steady speed means balanced forces. '
        + 'Greater would mean speeding up.',
      level: 5,
    },
  ],
})

/* ── forms of energy and conversion ──────────────────────────────────────── */

teach({
  topicId: 'energy-forms-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Energy takes many forms and changes between them. '
      + 'It is never created or destroyed, only converted. '
      + 'Some always escapes as heat, which is why nothing is 100% '
      + 'efficient.',
    method: [
      'Name the energy going in.',
      'Name the useful energy coming out.',
      'Name what escapes, which is almost always heat.',
    ],
  },

  why:
    'A dry cell costs two cedis and runs a torch for a few nights. '
    + 'Weigh the cell before and weigh it after and it weighs the '
    + 'same. '
    + 'Nothing went into it and nothing came out of it, and yet it '
    + 'will not light the bulb any more. '
    + 'The light it gave out is gone as well, and it did not pile up '
    + 'anywhere. '
    + 'So where did that energy come from, and where has it gone?',

  notation:
    'Energy is measured in joules, written J, so five hundred '
    + 'joules is written 500 J. '
    + 'One joule is small: lifting a one kilogram bag of sugar one '
    + 'metre takes about 10 J. '
    + 'A thousand joules is a kilojoule, written kJ, which is the '
    + 'unit on the side of a food packet. '
    + 'An energy change is written as arrows between the forms, as in '
    + 'chemical → electrical → light, said “chemical to electrical to '
    + 'light”. '
    + 'Leaving the unit off, or writing a small j for joules instead '
    + 'of a capital J, is the commonest way to lose a mark.',

  idea:
    'Energy comes in forms: chemical, electrical, light, sound, heat, '
    + 'and the energy of movement and of position. '
    + 'Devices convert one form into another. '
    + 'Energy is never created or destroyed, only changed.',

  mechanism:
    'Conservation of energy sounds like it should mean nothing runs out, '
    + 'and people find that hard to square with a battery going flat. '
    + 'The resolution is that the energy did not disappear. '
    + 'It was converted into forms that are spread out and hard to use, '
    + 'mostly heat. '
    + 'A bulb turns electrical energy into light and a great deal of heat. '
    + 'The heat is still energy, warming the room, '
    + 'and nobody can collect it back. '
    + 'So energy is conserved in total and degraded in usefulness, '
    + 'and that is why no device is ever fully efficient.',

  recap:
    'Energy reaches us from a few sources: the sun, moving water, '
    + 'moving wind, and fuels such as charcoal, petrol and gas. '
    + 'A source is renewable if using it does not use it up, so the '
    + 'sun, the wind and running water are renewable. '
    + 'Charcoal and petrol are not, because once they are burnt they '
    + 'are gone. '
    + 'This lesson is about something else: what happens to energy '
    + 'after it is already inside a device.',

  method: [
    'Name the form of energy supplied.',
    'Name the useful form produced.',
    'Name the wasted form. It is almost always heat, sometimes sound.',
    'Write it as a chain: chemical to electrical to light and heat.',
    'Check the total: everything in must appear somewhere out.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What energy change happens in a torch?',
      steps: [
        'The battery stores chemical energy.',
        'It becomes electrical energy.',
        'The bulb gives light, and heat.',
      ],
      answer: 'Chemical to electrical to light and heat.',
    },
    {
      level: 4,
      ask: 'Why does a bulb get hot if it is meant to make light?',
      steps: [
        'Not all the electrical energy becomes light.',
        'The rest becomes heat.',
        'The heat is wasted energy, not lost energy.',
      ],
      answer: 'Because the conversion is not complete. '
        + 'The heat is still energy, just not the form you wanted.',
    },
    {
      level: 5,
      ask: 'If energy is never destroyed, why does a battery go flat?',
      steps: [
        'The chemical energy was converted and used.',
        'It became light, sound and heat spread through the room.',
        'Nothing was destroyed, but nothing can be collected back either.',
      ],
      answer: 'The energy left in forms too spread out to use. '
        + 'Conserved in total, lost in usefulness.',
    },
  ],

  traps: [
    {
      mistake: 'Saying energy is used up.',
      why: 'It is converted, usually into heat. '
        + 'Say converted, and name the form it went to.',
    },
    {
      mistake: 'Forgetting the wasted form.',
      why: 'Almost every answer needs heat in it. '
        + 'A conversion with no waste does not exist.',
    },
    {
      mistake: 'Confusing energy with force.',
      why: 'A force is a push. '
        + 'Energy is the capacity to do work. '
        + 'They are measured in different units.',
    },
  ],

  extension:
    'Efficiency is the useful energy out divided by the total energy in. '
    + 'An old filament bulb was about 5% efficient, '
    + 'which means 95% of the electricity became heat. '
    + 'That is the whole case for changing them.',

  figure: {
    alt: 'A chain of three boxes: a battery holding chemical energy, '
      + 'wires carrying electrical energy, and a bulb. Out of the bulb '
      + 'come two arrows, a green one for the light you wanted and a '
      + 'red one for heat spread thin, which is still energy but cannot '
      + 'be collected back.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">energy is never lost, only spread out</text>'
      + '<path d="M 40 120 H 200 V 190 H 40 Z"/>'
      + '<text x="120" y="150" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">battery</text>'
      + '<text x="120" y="174" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">chemical energy</text>'
      + '<line x1="206" y1="155" x2="264" y2="155"/>'
      + '<line x1="264" y1="155" x2="255.4" y2="160.2"/>'
      + '<line x1="264" y1="155" x2="255.4" y2="149.8"/>'
      + '<path d="M 270 120 H 430 V 190 H 270 Z"/>'
      + '<text x="350" y="150" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">wires</text>'
      + '<text x="350" y="174" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">electrical energy</text>'
      + '<line x1="436" y1="155" x2="494" y2="155"/>'
      + '<line x1="494" y1="155" x2="485.4" y2="160.2"/>'
      + '<line x1="494" y1="155" x2="485.4" y2="149.8"/>'
      + '<path d="M 500 120 H 610 V 190 H 500 Z"/>'
      + '<text x="555" y="160" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">bulb</text>'
      + '<line x1="555" y1="194" x2="555" y2="248" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="555" y1="248" x2="549.8" y2="239.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="555" y1="248" x2="560.2" y2="239.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="614" y="272" font-size="16" text-anchor="end" fill="#0f8a4d" stroke="none">light, what you wanted</text>'
      + '<line x1="498" y1="182" x2="424" y2="230" stroke="#c8433a" stroke-width="4"/>'
      + '<line x1="424" y1="230" x2="428.4" y2="221.0" stroke="#c8433a" stroke-width="4"/>'
      + '<line x1="424" y1="230" x2="434.0" y2="229.7" stroke="#c8433a" stroke-width="4"/>'
      + '<text x="414" y="248" font-size="15" text-anchor="end" fill="#c8433a" stroke="none">heat, spread thin</text>'
      + '<text x="320" y="312" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">the heat is still energy, warming the room</text>'
      + '<text x="320" y="344" font-size="18" text-anchor="middle" fill="#c8433a" stroke="none">and nobody can ever collect it back</text>'
      + '<text x="320" y="380" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">so energy is kept in total and lost in usefulness</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What each device turns energy into, and what else it gives off',
      columns: ['Device', 'Energy in', 'The useful energy out', 'Also given off'],
      rows: [
        ['Torch', 'Chemical, in the battery', 'Light', 'Heat'],
        ['Electric fan', 'Electrical', 'Movement', 'Heat and sound'],
        ['Charcoal stove', 'Chemical, in the charcoal', 'Heat', 'Light and smoke'],
        ['Loudspeaker', 'Electrical', 'Sound', 'Heat'],
        ['A person climbing stairs', 'Chemical, in food', 'Energy of position', 'Heat'],
      ],
      note: 'The last column is never empty, and that is why no device is '
        + 'ever fully efficient.',
    },
  ],
  questions: [
    {
      id: 'en-1',
      ask: 'What is the energy change in a torch?',
      kind: 'choice',
      options: [
        'Chemical to electrical to light',
        'Light to electrical to chemical',
        'Heat to light',
      ],
      answer: 'Chemical to electrical to light',
      teach: 'And heat as well, which is the wasted form.',
      level: 3,
    },
    {
      id: 'en-2',
      ask: 'Can energy be destroyed?',
      kind: 'choice',
      options: ['No, only converted', 'Yes'],
      answer: 'No, only converted',
      teach: 'A flat battery converted its energy into forms too spread out '
        + 'to collect back.',
      level: 4,
    },
    {
      id: 'en-3',
      ask: 'Why is no device 100% efficient?',
      kind: 'choice',
      options: [
        'Some energy always escapes as heat',
        'Devices wear out',
        'Energy is destroyed',
      ],
      answer: 'Some energy always escapes as heat',
      teach: 'Conserved in total, degraded in usefulness. '
        + 'That is the difference that matters.',
      level: 5,
    },
  ],
})

/* ── food and nutrition ───────────────────────────────────────────────────── */

teach({
  topicId: 'nutrition-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Six food classes: carbohydrates, proteins, fats, vitamins, minerals '
      + 'and water. '
      + 'Each has its own job, and a shortage of one causes a specific '
      + 'disease.',
    method: [
      'Name the class and its job.',
      'Name a local source of it.',
      'Name what happens if it is missing.',
    ],
  },

  why:
    'A child in a village eats every day and is never hungry. '
    + 'Her belly is even swollen, so she looks well fed. '
    + 'But her hair is thin and reddish, her legs are puffy, and she '
    + 'is tired all the time. '
    + 'She eats cassava, and almost nothing else. '
    + 'She is getting plenty of food, and she is ill from food. '
    + 'How can somebody be full and starving at the same time?',

  idea:
    'There are six classes of food, and each one does a job the others '
    + 'cannot do for it. '
    + 'That is why a shortage of any one of them causes a particular '
    + 'illness rather than general weakness.',

  mechanism:
    'Deficiency diseases are specific, and that is the useful part. '
    + 'They are not general weakness. '
    + 'Too little protein causes kwashiorkor, with swelling. '
    + 'Too little vitamin A damages sight in dim light. '
    + 'Too little iron causes anaemia and tiredness. '
    + 'Each nutrient does a particular job, '
    + 'so its absence shows up as that job failing. '
    + 'That is why a child can eat plenty and still be ill: '
    + 'quantity fills the stomach and only the right mix does the jobs.',

  recap:
    'Food does three things in the body. '
    + 'It gives energy, and rice, yam and bread are mainly for that. '
    + 'It builds the body, and that is the work of beans, fish and '
    + 'eggs. '
    + 'It guards the body against illness, which is what oranges and '
    + 'green leaves are for. '
    + 'Those three jobs are the starting point. '
    + 'This lesson divides them into six named classes and says what '
    + 'a shortage of each one actually does to a person.',

  method: [
    'Name the class.',
    'Say its job in the body.',
    'Name a food available locally that provides it.',
    'Say what the deficiency disease is.',
    'For a meal, check all six are present, water included.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which food class builds and repairs the body?',
      steps: [
        'Carbohydrates give energy, fats store it.',
        'One class is for building.',
      ],
      answer: 'Proteins. Fish, beans, eggs and groundnuts.',
    },
    {
      level: 4,
      ask: 'A child eats mostly cassava and is swollen and weak. '
        + 'What is likely missing?',
      steps: [
        'Cassava is mainly carbohydrate.',
        'Swelling with enough food points to protein shortage.',
      ],
      answer: 'Protein. The condition is kwashiorkor.',
    },
    {
      level: 5,
      ask: 'Why can somebody eat enough and still be malnourished?',
      steps: [
        'Quantity fills the stomach.',
        'Each class does a different job.',
        'Plenty of one cannot do the job of another.',
      ],
      answer: 'Because being full depends on amount '
        + 'and being nourished depends on the mix.',
    },
  ],

  traps: [
    {
      mistake: 'Forgetting water as a food class.',
      why: 'It is one of the six and every process needs it.',
    },
    {
      mistake: 'Thinking only meat supplies protein.',
      why: 'Beans, groundnuts, eggs and fish all do, often more cheaply.',
    },
    {
      mistake: 'Treating malnutrition as simply not enough food.',
      why: 'It is the wrong mix as often as too little. '
        + 'Kwashiorkor occurs in children who are eating.',
    },
  ],

  extension:
    'Many Ghanaian dishes pair a starchy food with beans or groundnuts, '
    + 'which together supply energy and protein cheaply. '
    + 'Cooks arrived at those combinations long before anybody could name '
    + 'the classes.',

  figure: {
    alt: 'Two plates holding the same amount of food. The first, marked '
      + 'in red, is all banku and nothing else, so the stomach is full '
      + 'and most of the jobs are undone. The second, marked in green, '
      + 'is divided between banku, fish and kontomire, so every job '
      + 'gets done.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">a full stomach is not the same as a fed body</text>'
      + '<circle cx="165" cy="175" r="88" stroke="#c8433a"/>'
      + '<text x="165" y="170" font-size="18" text-anchor="middle" fill="#c8433a" stroke="none">all banku</text>'
      + '<text x="165" y="198" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">and nothing else</text>'
      + '<text x="165" y="296" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">the stomach is full</text>'
      + '<text x="165" y="322" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">and most of the jobs are undone</text>'
      + '<circle cx="475" cy="175" r="88" stroke="#0f8a4d"/>'
      + '<line x1="475" y1="175" x2="475" y2="87" stroke="#0f8a4d"/>'
      + '<line x1="475" y1="175" x2="399" y2="219" stroke="#0f8a4d"/>'
      + '<line x1="475" y1="175" x2="551" y2="219" stroke="#0f8a4d"/>'
      + '<text x="428" y="152" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">banku</text>'
      + '<text x="522" y="152" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">fish</text>'
      + '<text x="475" y="234" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">kontomire</text>'
      + '<text x="475" y="296" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">the same amount of food</text>'
      + '<text x="475" y="322" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">and every job gets done</text>'
      + '<text x="320" y="372" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">each nutrient has one job, so its absence shows as that job failing</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The six classes of food, what each one is for, and what a '
        + 'shortage does',
      columns: ['Class', 'Its job', 'Where to find it', 'A shortage causes'],
      rows: [
        [
          'Carbohydrates',
          'Gives energy',
          'Banku, kenkey, yam, rice',
          'Tiredness and weight loss',
        ],
        [
          'Proteins',
          'Builds and repairs',
          'Beans, fish, eggs, groundnut',
          'Kwashiorkor, with swelling',
        ],
        [
          'Fats and oils',
          'Stores energy and keeps you warm',
          'Palm oil, groundnut, avocado',
          'Weight loss and feeling cold',
        ],
        [
          'Vitamins',
          'Keep the body processes working',
          'Kontomire, mango, pawpaw',
          'Night blindness, from too little A',
        ],
        [
          'Minerals',
          'Keep the body processes working',
          'Kontomire, small fish eaten whole',
          'Anaemia, from too little iron',
        ],
        [
          'Water',
          'Carries everything round the body',
          'Drinking water, soup, fruit',
          'Dehydration',
        ],
      ],
      note: 'The last column is why a child can eat plenty and still be '
        + 'ill. Quantity fills the stomach, and only the right mix does '
        + 'the jobs.',
    },
  ],
  questions: [
    {
      id: 'nut-1',
      ask: 'How many food classes are there?',
      kind: 'numeric',
      answer: '6',
      accept: ['six'],
      teach: 'Carbohydrates, proteins, fats, vitamins, minerals and water.',
      level: 3,
    },
    {
      id: 'nut-2',
      ask: 'A shortage of protein causes:',
      kind: 'choice',
      options: ['Kwashiorkor', 'Anaemia', 'Night blindness'],
      answer: 'Kwashiorkor',
      teach: 'Anaemia comes from too little iron and night blindness from '
        + 'too little vitamin A. Each shortage is specific.',
      level: 4,
    },
    {
      id: 'nut-3',
      ask: 'Can somebody be well fed in quantity and still malnourished?',
      kind: 'choice',
      options: ['Yes', 'No'],
      answer: 'Yes',
      teach: 'Being full depends on amount, being nourished on the mix. '
        + 'Plenty of one class cannot do another class’s job.',
      level: 5,
    },
  ],
})

/* ── soil ─────────────────────────────────────────────────────────────────── */

teach({
  topicId: 'soil-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Soil is weathered rock, humus, water and air. '
      + 'Sandy drains fast, clay holds water, loam balances both. '
      + 'Fertiliser replaces the nutrients crops remove.',
    method: [
      'Test texture by wetting a handful and squeezing.',
      'Match the soil to what the crop needs.',
      'Replace what the harvest took: compost, manure or fertiliser.',
    ],
  },

  why:
    'After one heavy rain, a farmer’s field is a pond and the water '
    + 'is still sitting there two days later. '
    + 'The field next to it is dry on top within the hour, and by the '
    + 'third day the crops in it are wilting. '
    + 'Both fields got exactly the same rain. '
    + 'One kept far too much water and one kept far too little. '
    + 'What is different about the two soils, and which of them would '
    + 'you rather plant maize in?',

  idea:
    'Soil is made of weathered rock, decayed material called humus, '
    + 'water and air. '
    + 'The three kinds of soil a farmer talks about differ in one thing '
    + 'only, which is the size of the rock particles in them.',

  mechanism:
    'Particle size explains every difference between the soils. '
    + 'Large sand particles leave large gaps, '
    + 'so water runs through and air gets in easily. '
    + 'Tiny clay particles pack closely, '
    + 'so water is held and air is squeezed out. '
    + 'Roots need both water and air, '
    + 'which is why loam, having some of each kind of particle, '
    + 'suits most crops better than either extreme. '
    + 'You do not need to remember three sets of properties. '
    + 'You need to remember the particle size and work the rest out.',

  recap:
    'Soils can be told apart by wetting a handful and squeezing it. '
    + 'Sandy soil falls apart as soon as you open your hand. '
    + 'Clay soil holds the shape of your fist and feels smooth and '
    + 'sticky. '
    + 'Loam holds together but crumbles when you poke it. '
    + 'A field also grows poorer if crops are taken off it year after '
    + 'year with nothing put back, because every harvest carries '
    + 'substances away with it. '
    + 'This lesson says what soil is actually made of, and why those '
    + 'three behave so differently.',

  method: [
    'Wet a handful and squeeze it.',
    'Falls apart: sandy. Sticky lump: clay. Crumbles but holds: loam.',
    'Relate what you found to the particle size.',
    'Match the soil to the crop, or improve it with organic matter.',
    'After harvest, replace nutrients with compost, manure or fertiliser.',
    'Remember fertiliser replaces nutrients and does not improve texture.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which soil drains fastest and why?',
      steps: [
        'Drainage depends on the gaps between particles.',
        'Sand has the largest particles and the largest gaps.',
      ],
      answer: 'Sandy soil, because its large particles leave large gaps.',
    },
    {
      level: 4,
      ask: 'Why do crops struggle in waterlogged clay?',
      steps: [
        'Clay particles pack tightly.',
        'Water fills the few gaps there are.',
        'Roots need air as well as water.',
      ],
      answer: 'Because there is no air left for the roots.',
    },
    {
      level: 5,
      ask: 'Will adding fertiliser fix heavy clay?',
      steps: [
        'Fertiliser supplies nutrients.',
        'The problem with clay is texture and air, not nutrients.',
      ],
      answer: 'No. It needs organic matter to open the structure up. '
        + 'Fertiliser and texture are different problems.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking fertiliser fixes any soil problem.',
      why: 'It replaces nutrients only. '
        + 'Texture and drainage need organic matter.',
    },
    {
      mistake: 'Thinking more water is always better.',
      why: 'Waterlogged soil has no air and roots drown.',
    },
    {
      mistake: 'Judging soil by colour alone.',
      why: 'Colour hints at humus content. '
        + 'The squeeze test tells you far more.',
    },
  ],

  extension:
    'Humus does two jobs at once: '
    + 'it holds water in sandy soil and opens up clay. '
    + 'That is why compost improves both extremes, '
    + 'and why it is the one addition that is almost never wrong.',

  figure: {
    alt: 'Three magnified soil samples. Sandy soil is a few large '
      + 'particles with large gaps, and water runs straight through. '
      + 'Clay is many tiny particles packed close, so water is held and '
      + 'the air is squeezed out. Loam is a mixture of both sizes, so '
      + 'some water drains and some is held.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="36" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">particle size explains every difference</text>'
      + '<text x="140" y="68" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">sandy</text>'
      + '<path d="M 60 80 H 220 V 230 H 60 Z"/>'
      + '<text x="320" y="68" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">clay</text>'
      + '<path d="M 240 80 H 400 V 230 H 240 Z"/>'
      + '<text x="500" y="68" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">loam</text>'
      + '<path d="M 420 80 H 580 V 230 H 420 Z"/>'
      + '<circle cx="100" cy="122" r="22"/>'
      + '<circle cx="152" cy="118" r="22"/>'
      + '<circle cx="192" cy="126" r="22"/>'
      + '<circle cx="96" cy="176" r="22"/>'
      + '<circle cx="148" cy="174" r="22"/>'
      + '<circle cx="192" cy="180" r="22"/>'
      + '<circle cx="258" cy="98" r="9"/>'
      + '<circle cx="289" cy="98" r="9"/>'
      + '<circle cx="320" cy="98" r="9"/>'
      + '<circle cx="351" cy="98" r="9"/>'
      + '<circle cx="382" cy="98" r="9"/>'
      + '<circle cx="258" cy="129" r="9"/>'
      + '<circle cx="289" cy="129" r="9"/>'
      + '<circle cx="320" cy="129" r="9"/>'
      + '<circle cx="351" cy="129" r="9"/>'
      + '<circle cx="382" cy="129" r="9"/>'
      + '<circle cx="258" cy="160" r="9"/>'
      + '<circle cx="289" cy="160" r="9"/>'
      + '<circle cx="320" cy="160" r="9"/>'
      + '<circle cx="351" cy="160" r="9"/>'
      + '<circle cx="382" cy="160" r="9"/>'
      + '<circle cx="258" cy="191" r="9"/>'
      + '<circle cx="289" cy="191" r="9"/>'
      + '<circle cx="320" cy="191" r="9"/>'
      + '<circle cx="351" cy="191" r="9"/>'
      + '<circle cx="382" cy="191" r="9"/>'
      + '<circle cx="258" cy="220" r="9"/>'
      + '<circle cx="289" cy="220" r="9"/>'
      + '<circle cx="320" cy="220" r="9"/>'
      + '<circle cx="351" cy="220" r="9"/>'
      + '<circle cx="382" cy="220" r="9"/>'
      + '<circle cx="456" cy="120" r="20"/>'
      + '<circle cx="514" cy="126" r="20"/>'
      + '<circle cx="552" cy="176" r="20"/>'
      + '<circle cx="440" cy="170" r="7"/>'
      + '<circle cx="470" cy="200" r="7"/>'
      + '<circle cx="500" cy="170" r="7"/>'
      + '<circle cx="528" cy="212" r="7"/>'
      + '<circle cx="560" cy="118" r="7"/>'
      + '<circle cx="438" cy="212" r="7"/>'
      + '<circle cx="492" cy="102" r="7"/>'
      + '<circle cx="556" cy="148" r="7"/>'
      + '<line x1="140" y1="236" x2="140" y2="300" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="140" y1="300" x2="134.8" y2="291.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="140" y1="300" x2="145.2" y2="291.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="140" y="322" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">water runs straight through</text>'
      + '<line x1="320" y1="236" x2="320" y2="262" stroke="#c8433a" stroke-width="3"/>'
      + '<line x1="320" y1="262" x2="314.8" y2="253.4" stroke="#c8433a" stroke-width="3"/>'
      + '<line x1="320" y1="262" x2="325.2" y2="253.4" stroke="#c8433a" stroke-width="3"/>'
      + '<text x="320" y="286" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">water held, air squeezed out</text>'
      + '<line x1="500" y1="236" x2="500" y2="282" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="500" y1="282" x2="494.8" y2="273.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="500" y1="282" x2="505.2" y2="273.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="500" y="304" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">some drains, some is held</text>'
      + '<text x="320" y="352" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">roots need water and air, so loam suits most crops</text>'
      + '<text x="320" y="382" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">remember the particle size and work the rest out</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What each soil does with water, and what it suits',
      columns: ['Soil', 'Particle size', 'Drainage', 'Air for the roots', 'Best for'],
      rows: [
        ['Sandy', 'Large', 'Very fast', 'Plenty', 'Cassava, groundnut'],
        ['Clay', 'Very small', 'Very slow', 'Little', 'Rice in valley bottoms'],
        [
          'Loam',
          'A mixture of both',
          'Moderate',
          'Enough',
          'Maize, vegetables, most crops',
        ],
      ],
      note: 'Every column after the second is read off the second. There '
        + 'are not three sets of properties to learn, only one cause.',
    },
  ],
  questions: [
    {
      id: 'sj-1',
      ask: 'Which soil has the largest particles?',
      kind: 'choice',
      options: ['Sandy', 'Clay', 'Loam'],
      answer: 'Sandy',
      teach: 'Large particles leave large gaps, so water runs straight '
        + 'through.',
      level: 3,
    },
    {
      id: 'sj-2',
      ask: 'Why do roots struggle in waterlogged clay?',
      kind: 'choice',
      options: [
        'There is no air in the soil',
        'There are too few nutrients',
        'The soil is too cold',
      ],
      answer: 'There is no air in the soil',
      teach: 'Roots need air as well as water. '
        + 'Tightly packed clay leaves almost none.',
      level: 4,
    },
    {
      id: 'sj-3',
      ask: 'Does fertiliser improve soil texture?',
      kind: 'choice',
      options: ['No, it replaces nutrients', 'Yes'],
      answer: 'No, it replaces nutrients',
      teach: 'Texture needs organic matter. '
        + 'They are two different problems with two different answers.',
      level: 5,
    },
  ],
})
