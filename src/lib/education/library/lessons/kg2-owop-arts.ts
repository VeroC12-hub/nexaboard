/**
 * Stored lessons for KG 2 Our World Our People, and Creative Arts.
 *
 * Spoken, like the rest of the early years. `mechanism` is addressed to the
 * adult helping, and the reading check scores those separately.
 *
 * ── `staying-safe` is written carefully, and this is why ───────────────────
 *
 * A safety lesson for a five year old fails in two opposite ways. Too vague
 * and the child has nothing to act on. Too frightening and they stop
 * listening, or they decide that telling an adult causes trouble and stop
 * telling.
 *
 * So the lesson gives two things only: a short list of what not to touch,
 * which a child can hold, and one rule that covers everything the list
 * missed, which is to tell a grown up you trust. It also says plainly that
 * telling is never the thing that gets you into trouble, because a child who
 * believes otherwise will hide the thing that matters most.
 *
 * `what-living-needs` is the first science in the curriculum, and it is
 * written as a test a child can apply rather than a list to recall: ask what
 * would happen if it had no water.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── people who help us ─────────────────────────────────────────────────── */

teach({
  topicId: 'people-who-help',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A nurse helps sick people. '
      + 'A teacher helps children learn. '
      + 'A farmer grows food. '
      + 'A driver takes people places. '
      + 'Name the person and say what they do for everybody.',
    method: [
      'Name the worker.',
      'Say what they do.',
      'Say who is helped by it.',
    ],
  },

  idea:
    'Many people help us. '
    + 'A nurse looks after people who are sick. '
    + 'A teacher helps children learn. '
    + 'A farmer grows the food we eat. '
    + 'A driver takes people where they are going. '
    + 'A police officer keeps people safe. '
    + 'A tailor makes our clothes. '
    + 'Name one more. '
    + 'What do they do for us?',

  mechanism:
    'For the adult. '
    + 'Always add who is helped. '
    + 'A child who says "a farmer grows food" '
    + 'has learned a job, '
    + 'and a child who says "a farmer grows the food we eat" '
    + 'has seen that the work reaches them. '
    + 'That is the idea worth having: '
    + 'the town is full of people doing things for each other. '
    + 'Use workers the child has actually seen, '
    + 'and name real ones if you can: '
    + 'the nurse at the clinic, the man who mends shoes. '
    + 'Then ask what we would do if there were no nurse. '
    + 'That question turns a list of jobs '
    + 'into an understanding of why they exist.',

  method: [
    'Name a worker.',
    'Say what work they do.',
    'Say who is helped.',
    'Say what we would do without them.',
    'Name another one.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Who looks after people who are sick?',
      steps: [
        'Think of the clinic.',
      ],
      answer: 'A nurse, or a doctor.',
    },
    {
      level: 2,
      ask: 'What does a farmer do for us?',
      steps: [
        'Where does your food come from?',
      ],
      answer: 'Grows the food we eat.',
    },
    {
      level: 3,
      ask: 'What would happen if there were no drivers?',
      steps: [
        'How would things and people move?',
      ],
      answer: 'People and goods could not get where they need to go.',
    },
  ],

  traps: [
    {
      mistake: 'Naming the job and stopping.',
      why: 'Say who is helped. '
        + 'That is the point of the lesson.',
    },
    {
      mistake: 'Naming only jobs from pictures.',
      why: 'Name the workers you have really seen.',
    },
  ],

  extension:
    'Which of these would you like to do? '
    + 'What would you have to learn first? '
    + 'Who could you ask about it?',

  questions: [
    {
      id: 'ph-1',
      ask: 'Who helps children learn?',
      kind: 'choice',
      options: ['A teacher', 'A driver', 'A tailor'],
      answer: 'A teacher',
      teach: 'And a tailor makes clothes.',
      level: 1,
    },
    {
      id: 'ph-2',
      ask: 'What should you say after naming a worker?',
      kind: 'choice',
      options: [
        'What they do and who is helped',
        'Where they live',
        'Their name',
      ],
      answer: 'What they do and who is helped',
      teach: 'The work reaches you.',
      level: 2,
    },
  ],
})

/* ── keeping safe ─────────────────────────────────────────────────── */

teach({
  topicId: 'staying-safe',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Do not touch fire, hot pots, knives, '
      + 'medicine, or bottles of chemicals. '
      + 'Do not go with somebody you do not know. '
      + 'If anything worries you, tell a grown up you trust. '
      + 'Telling never gets you into trouble.',
    method: [
      'Stop before touching something new.',
      'If it burns, cuts or is in a bottle, do not touch it.',
      'Tell a grown up you trust.',
    ],
  },

  idea:
    'Some things are not for touching. '
    + 'Fire. A hot pot. A knife. '
    + 'Medicine. A bottle with chemicals in it. '
    + 'Electric sockets and wires. '
    + 'If you are not sure, do not touch. Ask first. '
    + 'And do not go anywhere with somebody you do not know, '
    + 'even if they say nice things. '
    + 'If anything worries you, tell a grown up you trust. '
    + 'Telling never gets you into trouble.',

  mechanism:
    'For the adult. '
    + 'Give a short list and one rule that covers the rest. '
    + 'The list is what the child can hold: '
    + 'fire, hot things, blades, medicine, chemicals, electricity. '
    + 'The rule is "if you are not sure, ask first", '
    + 'which covers everything you did not think of. '
    + 'Say it calmly. '
    + 'Frightening a child does not make them safer; '
    + 'it makes them stop listening '
    + 'or stop telling you things. '
    + 'And say the last line out loud and often: '
    + 'telling never gets you into trouble. '
    + 'A child who believes that telling causes trouble '
    + 'will hide exactly the thing you most need to know, '
    + 'and that is true of accidents, of damage, '
    + 'and of anybody treating them badly. '
    + 'Name two or three specific people they may tell.',

  method: [
    'Stop before touching something you do not know.',
    'Ask whether it burns, cuts, or came in a bottle.',
    'If it does, do not touch it.',
    'If you are not sure, ask first.',
    'Do not go anywhere with somebody you do not know.',
    'If something worries you, tell a grown up you trust.',
    'Know the names of two grown ups you can tell.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You find a bottle with something in it. What do you do?',
      steps: [
        'You do not know what it is.',
      ],
      answer: 'Do not touch it. Ask a grown up.',
    },
    {
      level: 2,
      ask: 'Somebody you do not know says come with me. What do you do?',
      steps: [
        'You do not know them.',
      ],
      answer: 'Do not go. Tell a grown up you trust.',
    },
    {
      level: 3,
      ask: 'Something happened and you are afraid of getting in trouble. '
        + 'What should you do?',
      steps: [
        'Telling is not the thing that causes trouble.',
      ],
      answer: 'Tell a grown up you trust. '
        + 'Telling never gets you into trouble.',
    },
  ],

  traps: [
    {
      mistake: 'Touching something to find out what it is.',
      why: 'Ask first. '
        + 'Some things hurt you straight away.',
    },
    {
      mistake: 'Going with somebody because they were kind.',
      why: 'Being kind does not mean you know them. '
        + 'Do not go.',
    },
    {
      mistake: 'Keeping something secret because you are afraid.',
      why: 'Tell somebody. '
        + 'Telling never gets you into trouble.',
    },
  ],

  extension:
    'Learn two things by heart. '
    + 'Your own full name. '
    + 'And the name of the grown up who looks after you. '
    + 'Then anybody can help you get home.',

  questions: [
    {
      id: 'sf-1',
      ask: 'You are not sure if something is safe. What do you do?',
      kind: 'choice',
      options: [
        'Ask a grown up first',
        'Touch it carefully',
        'Give it to a friend',
      ],
      answer: 'Ask a grown up first',
      teach: 'If you are not sure, do not touch.',
      level: 1,
    },
    {
      id: 'sf-2',
      ask: 'Does telling a grown up get you into trouble?',
      kind: 'choice',
      options: ['No, never', 'Yes, sometimes', 'Only if you broke '
        + 'something'],
      answer: 'No, never',
      teach: 'Telling is what lets somebody help you.',
      level: 3,
    },
  ],
})

/* ── our festivals and celebrations ──────────────────────────── */

teach({
  topicId: 'our-celebrations',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Your family keeps some special days. '
      + 'Name one. '
      + 'Say what people do on that day. '
      + 'Other families keep different days, and that is fine.',
    method: [
      'Name a special day your family keeps.',
      'Say what happens on it.',
      'Say what you like about it.',
    ],
  },

  idea:
    'Some days are special. '
    + 'Name a day your family keeps. '
    + 'What happens on that day? '
    + 'Is there special food? '
    + 'Do people wear special clothes? '
    + 'Is there drumming, or dancing, or praying? '
    + 'Who comes to visit? '
    + 'Other families keep other days. '
    + 'They are special too.',

  mechanism:
    'For the adult. '
    + 'Start from the child’s own family, '
    + 'and take whatever they name as the answer. '
    + 'Ghana has many festivals and many faiths, '
    + 'and a classroom will have several in it, '
    + 'so let each child describe their own '
    + 'and let the others listen. '
    + 'The listening is the lesson. '
    + 'A child who hears that another family keeps a different day, '
    + 'and that the teacher found it interesting, '
    + 'has learned something that lasts. '
    + 'Ask what people DO, '
    + 'because that is what a five year old noticed: '
    + 'the food, the clothes, the visitors, the drumming. '
    + 'Never rank the celebrations '
    + 'and never suggest a family keeps the wrong days.',

  method: [
    'Name a special day your family keeps.',
    'Say when it happens.',
    'Say what people do on it.',
    'Say what food there is.',
    'Say who comes.',
    'Listen while somebody else says theirs.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Name one special day your family keeps.',
      steps: [
        'Think of a day that is not like other days.',
      ],
      answer: 'Name the one your family keeps.',
    },
    {
      level: 2,
      ask: 'What should you say about it?',
      steps: [
        'What happens, not just the name.',
      ],
      answer: 'What people do, what they eat, and who comes.',
    },
    {
      level: 3,
      ask: 'Your friend keeps a different special day. What do you do?',
      steps: [
        'Theirs is special too.',
      ],
      answer: 'Listen, and ask them what happens on it.',
    },
  ],

  traps: [
    {
      mistake: 'Naming the day and stopping.',
      why: 'Say what happens on it. '
        + 'That is what makes it special.',
    },
    {
      mistake: 'Saying somebody else’s day is not a real one.',
      why: 'Other families keep other days. '
        + 'Theirs is special too.',
    },
  ],

  extension:
    'Ghana has many festivals. '
    + 'Ask an older person about one. '
    + 'Why is it kept? '
    + 'How long has it been kept?',

  questions: [
    {
      id: 'ce-1',
      ask: 'What should you say about a special day?',
      kind: 'choice',
      options: [
        'What people do on it',
        'Its name only',
        'How long it lasts',
      ],
      answer: 'What people do on it',
      teach: 'The food, the clothes, the visitors.',
      level: 2,
    },
    {
      id: 'ce-2',
      ask: 'Your friend’s family keeps a different day. That is:',
      kind: 'choice',
      options: [
        'Special too',
        'Wrong',
        'The same as yours',
      ],
      answer: 'Special too',
      teach: 'Listen and ask them about it.',
      level: 3,
    },
  ],
})

/* ── what living things need ─────────────────────────── */

teach({
  topicId: 'what-living-needs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Plants and animals need water. '
      + 'They need food. '
      + 'They need air. '
      + 'Take one of those away and they die. '
      + 'A stone needs nothing, because it is not alive.',
    method: [
      'Ask what would happen with no water.',
      'Ask the same about food and air.',
      'If it needs them, it is alive.',
    ],
  },

  idea:
    'A plant needs water. '
    + 'Stop watering it and it dies. '
    + 'An animal needs water too. '
    + 'They both need food. '
    + 'A goat eats grass. A plant makes its own food in its leaves. '
    + 'They both need air. '
    + 'Now think about a stone. '
    + 'Does a stone need water? No. '
    + 'A stone is not alive.',

  mechanism:
    'For the adult. '
    + 'Teach the test rather than the list. '
    + 'Ask of anything: '
    + 'what would happen if it had no water? '
    + 'If the answer is "it dies", it is alive, '
    + 'and if the answer is "nothing", it is not. '
    + 'A child with that test can sort things nobody taught them, '
    + 'while a child with a list can only recall three words. '
    + 'The strongest evidence is an experiment they do themselves: '
    + 'two plants in the same place, '
    + 'one watered and one not, '
    + 'looked at every day for a week. '
    + 'That is real science at five, '
    + 'and the child will remember it '
    + 'longer than anything you tell them. '
    + 'Say that plants make their own food, '
    + 'because children assume somebody feeds them.',

  method: [
    'Choose a thing.',
    'Ask whether it would die with no water.',
    'Ask the same about food.',
    'Ask the same about air.',
    'If it needs them, it is alive.',
    'If it needs nothing, it is not alive.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What happens to a plant with no water?',
      steps: [
        'Watch an unwatered plant.',
      ],
      answer: 'It dries up and dies.',
    },
    {
      level: 2,
      ask: 'Is a stone alive? How do you know?',
      steps: [
        'Ask what it needs.',
      ],
      answer: 'No. It needs no water, no food and no air.',
    },
    {
      level: 3,
      ask: 'Who feeds a plant?',
      steps: [
        'Nobody brings it food.',
      ],
      answer: 'Nobody. It makes its own food in its leaves.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a plant is not alive because it does not move.',
      why: 'It needs water and food and air. '
        + 'It grows, and it can die.',
    },
    {
      mistake: 'Thinking somebody has to feed a plant.',
      why: 'It makes its own food in its leaves. '
        + 'It needs water and light.',
    },
  ],

  extension:
    'Do it yourself. '
    + 'Two plants, side by side. '
    + 'Water one and not the other. '
    + 'Look at them every day for a week. '
    + 'What happened?',

  questions: [
    {
      id: 'wn3-1',
      ask: 'What do plants and animals both need?',
      kind: 'choice',
      options: [
        'Water, food and air',
        'Water only',
        'Somebody to feed them',
      ],
      answer: 'Water, food and air',
      teach: 'Take one away and they die.',
      level: 1,
    },
    {
      id: 'wn3-2',
      ask: 'How do you tell if something is alive?',
      kind: 'choice',
      options: [
        'Ask what would happen with no water',
        'See if it moves',
        'See if it is green',
      ],
      answer: 'Ask what would happen with no water',
      teach: 'If it would die, it is alive.',
      level: 3,
    },
  ],
})

/* ── keeping our place clean ─────────────────────── */

teach({
  topicId: 'caring-for-place',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Rubbish goes in the bin, not on the ground. '
      + 'Rubbish in the gutter blocks it. '
      + 'A blocked gutter floods, and mosquitoes breed in the water. '
      + 'Mosquitoes make people sick.',
    method: [
      'Hold your rubbish until you find a bin.',
      'Never put rubbish in the gutter.',
      'Help sweep your own place.',
    ],
  },

  idea:
    'Rubbish goes in the bin. '
    + 'If there is no bin, hold it until you find one. '
    + 'Never throw it in the gutter. '
    + 'Rubbish blocks the gutter. '
    + 'Then the water cannot run away. '
    + 'The water stands still. '
    + 'Mosquitoes lay eggs in still water. '
    + 'Mosquitoes make people sick. '
    + 'So rubbish in the gutter makes people sick.',

  mechanism:
    'For the adult. '
    + 'Give the chain, not the instruction. '
    + '"Do not litter" is a rule a child obeys when watched. '
    + 'Rubbish blocks the gutter, '
    + 'the gutter floods, '
    + 'the water stands, '
    + 'mosquitoes breed in it, '
    + 'and mosquitoes make people ill, '
    + 'is a reason a child keeps when nobody is looking. '
    + 'Walk them past a blocked gutter and show them the standing water. '
    + 'That is the whole lesson in one look. '
    + 'Then make the job theirs: '
    + 'a part of the compound or the classroom they sweep. '
    + 'A child who cleans a place '
    + 'stops other people dirtying it, '
    + 'which is worth more than anything you say.',

  method: [
    'Hold your rubbish until you see a bin.',
    'Put it in the bin.',
    'Never put rubbish in a gutter.',
    'Sweep your own place.',
    'Pour away standing water near the house.',
    'Tell somebody if a gutter is blocked.',
  ],

  worked: [
    {
      level: 1,
      ask: 'There is no bin nearby. What do you do with your rubbish?',
      steps: [
        'Not the ground. Not the gutter.',
      ],
      answer: 'Hold it until you find a bin.',
    },
    {
      level: 2,
      ask: 'What happens when a gutter is blocked?',
      steps: [
        'The water cannot run away.',
      ],
      answer: 'The water stands still, and it floods when it rains.',
    },
    {
      level: 3,
      ask: 'Why does standing water matter?',
      steps: [
        'Something breeds in it.',
      ],
      answer: 'Mosquitoes lay eggs in it, '
        + 'and mosquitoes make people sick.',
    },
  ],

  traps: [
    {
      mistake: 'Throwing rubbish in the gutter because it disappears.',
      why: 'It does not disappear. '
        + 'It blocks the gutter further down.',
    },
    {
      mistake: 'Leaving a tin of water standing by the house.',
      why: 'Mosquitoes breed in it. '
        + 'Pour it away.',
    },
  ],

  extension:
    'Look for standing water near your house. '
    + 'An old tin. A tyre. A bucket. '
    + 'Pour them out. '
    + 'You have just stopped some mosquitoes.',

  questions: [
    {
      id: 'cp-1',
      ask: 'Where does rubbish go?',
      kind: 'choice',
      options: ['In the bin', 'In the gutter', 'On the ground'],
      answer: 'In the bin',
      teach: 'Hold it until you find one.',
      level: 1,
    },
    {
      id: 'cp-2',
      ask: 'Why is a blocked gutter bad?',
      kind: 'choice',
      options: [
        'Water stands and mosquitoes breed in it',
        'It looks untidy',
        'It smells',
      ],
      answer: 'Water stands and mosquitoes breed in it',
      teach: 'And mosquitoes make people sick.',
      level: 3,
    },
  ],
})

/* ── making something from what we have ──────────── */

teach({
  topicId: 'make-from-scrap',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Look at what you have. '
      + 'Boxes, bottle tops, leaves, string, tins. '
      + 'Decide what to make. '
      + 'Then join the pieces so they hold.',
    method: [
      'Look at the materials first.',
      'Decide what to make from them.',
      'Join the pieces and test that they hold.',
    ],
  },

  idea:
    'Look at these things. '
    + 'Boxes. Bottle tops. Leaves. String. An old tin. '
    + 'What could you make? '
    + 'A lorry? A doll? A drum? '
    + 'Choose one. '
    + 'Now join the pieces. '
    + 'Tie them, or glue them, or push them through. '
    + 'Pull it gently. Does it hold? '
    + 'Now tell me what you made.',

  mechanism:
    'For the adult. '
    + 'Look at the materials BEFORE deciding what to make. '
    + 'A child who decides to make a lorry '
    + 'and then cannot find wheels is defeated, '
    + 'and a child who sees four bottle tops '
    + 'and thinks of a lorry is designing. '
    + 'That order is the lesson, '
    + 'and it is what a real craftsman does. '
    + 'Joining is the part that fails, '
    + 'so show two or three ways to join '
    + 'and let them test by pulling. '
    + 'Testing their own work is worth more than your approval. '
    + 'Accept what they say it is. '
    + 'And use what is actually around, '
    + 'because the lesson that things can be made from what you have '
    + 'is the most useful one in the subject.',

  method: [
    'Look at all the materials.',
    'Say what each one could be.',
    'Decide what to make.',
    'Put the pieces together before joining them.',
    'Join them: tie, glue, or push through.',
    'Pull it gently to test.',
    'Fix any join that comes loose.',
    'Say what you made.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You have four bottle tops. What could they be?',
      steps: [
        'What is round and comes in fours?',
      ],
      answer: 'Wheels.',
    },
    {
      level: 2,
      ask: 'Your join came apart. What do you do?',
      steps: [
        'Join it better.',
      ],
      answer: 'Tie it tighter, or use more glue, and test it again.',
    },
    {
      level: 3,
      ask: 'What should you do before deciding what to make?',
      steps: [
        'The materials decide what is possible.',
      ],
      answer: 'Look at what you have.',
    },
  ],

  traps: [
    {
      mistake: 'Deciding what to make before looking at the materials.',
      why: 'Look first. '
        + 'The materials tell you what is possible.',
    },
    {
      mistake: 'Not testing the joins.',
      why: 'Pull it gently. '
        + 'Better to find out now.',
    },
  ],

  extension:
    'Now make it better. '
    + 'Can you make the wheels turn? '
    + 'Can you make it stand up on its own?',

  questions: [
    {
      id: 'ms-1',
      ask: 'What do you do first?',
      kind: 'choice',
      options: [
        'Look at what you have',
        'Decide what to make',
        'Start joining',
      ],
      answer: 'Look at what you have',
      teach: 'The materials tell you what is possible.',
      level: 3,
    },
    {
      id: 'ms-2',
      ask: 'How do you know a join will hold?',
      kind: 'choice',
      options: ['Pull it gently', 'Look at it', 'Wait a day'],
      answer: 'Pull it gently',
      teach: 'Better to find out now.',
      level: 1,
    },
  ],
})

/* ── acting it out ────────────────────────────── */

teach({
  topicId: 'pretend-play',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Choose who you are. '
      + 'Then do what that person would do. '
      + 'Say what they would say. '
      + 'Stay as that person until the scene ends.',
    method: [
      'Choose your part and say who you are.',
      'Do and say what that person would.',
      'Stay in the part until the end.',
    ],
  },

  idea:
    'We are going to pretend. '
    + 'This is a market. '
    + 'You are the seller. I am buying. '
    + 'What would a seller say? '
    + 'Say it. '
    + 'Now what would she do? '
    + 'Stay as the seller until we finish. '
    + 'Do not stop in the middle. '
    + 'Now we swap. You buy and I sell.',

  mechanism:
    'For the adult. '
    + 'Staying in the part is the thing being practised. '
    + 'A child who drops out every few seconds '
    + 'is not yet holding somebody else’s point of view, '
    + 'which is what this activity builds, '
    + 'and it is why pretend play matters '
    + 'well beyond the drama lesson: '
    + 'thinking about what another person wants '
    + 'is how a child learns to get on with people. '
    + 'Give a clear situation and clear parts, '
    + 'because "let us pretend" with nothing in it collapses. '
    + 'A market, a clinic, a lorry station, a classroom. '
    + 'Join in yourself and stay in your own part, '
    + 'because they copy that. '
    + 'And always swap roles, '
    + 'so the child has to imagine the other side too.',

  method: [
    'Decide the place: a market, a clinic, a lorry station.',
    'Choose who you are.',
    'Say who you are out loud.',
    'Think what that person wants.',
    'Say and do what they would.',
    'Stay as that person to the end.',
    'Then swap parts and do it again.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You are the nurse. What would you say first?',
      steps: [
        'What does a nurse ask?',
      ],
      answer: 'Something like: where does it hurt?',
    },
    {
      level: 2,
      ask: 'You keep stopping to laugh. What should you do?',
      steps: [
        'Stay as the person.',
      ],
      answer: 'Stay in the part until the scene finishes.',
    },
    {
      level: 3,
      ask: 'Why swap parts afterwards?',
      steps: [
        'The other person wanted something too.',
      ],
      answer: 'So you imagine what the other person wants.',
    },
  ],

  traps: [
    {
      mistake: 'Dropping out of the part every few seconds.',
      why: 'Stay in it to the end. '
        + 'That is the hard part and the point.',
    },
    {
      mistake: 'Pretending with no situation.',
      why: 'Choose a place and the parts first. '
        + 'Then there is something to do.',
    },
  ],

  extension:
    'Now add a problem. '
    + 'The seller has no change. '
    + 'What happens? '
    + 'Stay in your parts and work it out.',

  questions: [
    {
      id: 'pp-1',
      ask: 'How long do you stay as the person you are playing?',
      kind: 'choice',
      options: [
        'Until the scene ends',
        'For a moment',
        'Until you laugh',
      ],
      answer: 'Until the scene ends',
      teach: 'Staying in the part is what you are practising.',
      level: 2,
    },
    {
      id: 'pp-2',
      ask: 'Why do you swap parts?',
      kind: 'choice',
      options: [
        'To imagine what the other person wants',
        'To be fair about turns',
        'To make it longer',
      ],
      answer: 'To imagine what the other person wants',
      teach: 'That is how you learn to get on with people.',
      level: 3,
    },
  ],
})
