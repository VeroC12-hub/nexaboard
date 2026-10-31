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

  idea:
    'Every living thing is made of cells. '
    + 'A cell has a membrane holding it together, '
    + 'cytoplasm where the work happens, '
    + 'and a nucleus that controls it. '
    + 'A plant cell has three things an animal cell does not: '
    + 'a stiff cell wall, chloroplasts, and one large vacuole.',

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
    'You know the parts of a plant and what each does for it. '
    + 'This is the same question one level smaller: '
    + 'what the parts inside a single cell do.',

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
    'You can group animals by how they move, what they eat, or where they '
    + 'live, '
    + 'and you know the group depends on the question. '
    + 'This explains which question scientists chose, and why.',

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

  idea:
    'Everything is made of particles far too small to see. '
    + 'In a solid they are packed in place and only vibrate. '
    + 'In a liquid they still touch but can slide past each other. '
    + 'In a gas they are far apart and move quickly in all directions.',

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
    'You can sort things into solid, liquid and gas by what happens to their '
    + 'shape. '
    + 'This explains why they behave that way.',

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

  idea:
    'You already know the stages: evaporation, condensation, precipitation, '
    + 'collection. '
    + 'At JHS the question is what the particles are doing at each one, '
    + 'and the answer is always about energy.',

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
    'You know the four stages of the water cycle, '
    + 'and you know that particles move more when heated. '
    + 'This joins the two.',

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
    'You know the four stages of a mosquito '
    + 'and that emptying standing water reduces them. '
    + 'This explains why that works better than chasing adults.',

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

  idea:
    'The skeleton does three things: it holds you up, '
    + 'it protects soft organs like the brain and the heart, '
    + 'and it gives muscles something to pull against. '
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
    'You know the body has parts that each do a job. '
    + 'This is how two of those systems work together, '
    + 'because neither does anything useful alone.',

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
    'You can build a food chain and point the arrows the right way, '
    + 'from the food towards the eater, following the energy.',

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

  idea:
    'A force is a push or a pull, measured in newtons. '
    + 'Some need contact: friction, air resistance, a push from your hand. '
    + 'Some act at a distance: gravity, magnetism, static electricity. '
    + 'A force can change an object’s speed, its direction, or its shape.',

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
    'You know a push can start, stop or turn something, '
    + 'and that friction resists movement. '
    + 'This names the forces and adds the idea of balance.',

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
    'You know that energy comes from the sun, water, wind and fuel, '
    + 'and which sources are renewable. '
    + 'This is about what happens to energy once it is in a device.',

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

  idea:
    'There are six classes of food. '
    + 'Carbohydrates give energy. Proteins build and repair. '
    + 'Fats store energy and keep you warm. '
    + 'Vitamins and minerals keep processes working. '
    + 'Water carries everything. '
    + 'A shortage of any one causes a particular illness.',

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
    'You know food does three things: energy, building and protecting. '
    + 'This divides those into six classes and names what each shortage '
    + 'does.',

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

  idea:
    'Soil is made of weathered rock, decayed material called humus, '
    + 'water and air. '
    + 'Sandy soil has large particles and drains quickly. '
    + 'Clay has tiny particles and holds water. '
    + 'Loam is a mixture and suits most crops.',

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
    'You can test a soil by wetting and squeezing it, '
    + 'and you know a field grows poorer if nothing is put back.',

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
