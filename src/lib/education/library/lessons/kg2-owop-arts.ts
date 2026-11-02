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

  figure: {
    alt: 'Three workers shown by what they do. A nurse with a cross, a '
      + 'farmer with a maize plant and a tailor with a shirt, each with an '
      + 'arrow pointing down to what they do for us. Under them it says '
      + 'what would we do without them.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="28" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">their work reaches you</text>'
      + '<text x="110" y="98" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a nurse</text>'
      + '<line x1="86" y1="152" x2="134" y2="152" stroke-width="8"/>'
      + '<line x1="110" y1="128" x2="110" y2="176" stroke-width="8"/>'
      + '<line x1="110" y1="200" x2="110" y2="250"/>'
      + '<polyline points="100,237 110,250 120,237"/>'
      + '<text x="110" y="296" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">looks after us</text>'
      + '<text x="320" y="98" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a farmer</text>'
      + '<line x1="320" y1="186" x2="320" y2="108"/>'
      + '<path d="M 320 140 Q 286 126 284 150 Q 306 156 320 140"/>'
      + '<path d="M 320 124 Q 354 110 356 134 Q 334 140 320 124"/>'
      + '<line x1="320" y1="200" x2="320" y2="250"/>'
      + '<polyline points="310,237 320,250 330,237"/>'
      + '<text x="320" y="296" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">grows our food</text>'
      + '<text x="530" y="98" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a tailor</text>'
      + '<polygon points="510,120 530,112 550,120 570,128 576,146 562,150 '
      + '562,186 498,186 498,150 484,146 490,128"/>'
      + '<line x1="530" y1="212" x2="530" y2="250"/>'
      + '<polyline points="520,237 530,250 540,237"/>'
      + '<text x="530" y="296" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">makes our clothes</text>'
      + '<text x="320" y="362" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">what would we do without '
      + 'them</text></svg>',
  },
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

  figure: {
    alt: 'Four things drawn in red that are not for touching: a flame, a '
      + 'knife, a medicine bottle and an electric socket. Below them a '
      + 'green box says if you are not sure, ask first, and telling never '
      + 'gets you into trouble.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="28" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">not for touching</text>'
      + '<path d="M 100 196 Q 74 162 98 120 Q 104 146 118 136 Q 140 162 124 '
      + '192 Z" stroke="#c8433a" stroke-width="4"/>'
      + '<text x="100" y="234" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">fire</text>'
      + '<polygon points="220,190 276,134 286,144 240,196" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<line x1="216" y1="194" x2="200" y2="206" stroke="#c8433a" '
      + 'stroke-width="6"/>'
      + '<text x="248" y="234" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a knife</text>'
      + '<polygon points="386,150 414,150 414,196 386,196" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<polygon points="394,134 406,134 406,150 394,150" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<text x="400" y="234" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">medicine</text>'
      + '<polygon points="508,140 580,140 580,196 508,196" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<circle cx="532" cy="162" r="6" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<circle cx="556" cy="162" r="6" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<text x="544" y="234" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">electricity</text>'
      + '<polygon points="60,264 580,264 580,344 60,344" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<text x="320" y="298" font-size="24" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">if you are not sure, ask first</text>'
      + '<text x="320" y="330" font-size="22" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">telling never gets you into '
      + 'trouble</text></svg>',
  },
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

  figure: {
    alt: 'Four things that happen on a special day: a bowl of special food, '
      + 'special clothes, a drum for the drumming, and two visitors. Under '
      + 'them it says other families keep other days, and those are special '
      + 'too.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">what happens on that day</text>'
      + '<polygon points="70,150 134,150 127,196 77,196"/>'
      + '<circle cx="86" cy="142" r="9"/><circle cx="102" cy="142" r="9"/>'
      + '<circle cx="118" cy="142" r="9"/>'
      + '<text x="102" y="240" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">special food</text>'
      + '<polygon points="230,124 250,116 270,124 290,132 296,150 282,154 '
      + '282,190 218,190 218,154 204,150 210,132"/>'
      + '<text x="250" y="240" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">special clothes</text>'
      + '<ellipse cx="400" cy="126" rx="34" ry="12"/>'
      + '<line x1="366" y1="126" x2="372" y2="196"/>'
      + '<line x1="434" y1="126" x2="428" y2="196"/>'
      + '<path d="M 372 196 Q 400 210 428 196"/>'
      + '<line x1="382" y1="136" x2="388" y2="190"/>'
      + '<line x1="400" y1="136" x2="406" y2="190"/>'
      + '<line x1="418" y1="136" x2="424" y2="190"/>'
      + '<text x="400" y="240" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">drumming</text>'
      + '<circle cx="520" cy="112" r="16"/>'
      + '<line x1="520" y1="128" x2="520" y2="166"/>'
      + '<line x1="496" y1="144" x2="544" y2="144"/>'
      + '<line x1="520" y1="166" x2="506" y2="198"/>'
      + '<line x1="520" y1="166" x2="534" y2="198"/>'
      + '<circle cx="562" cy="122" r="14"/>'
      + '<line x1="562" y1="136" x2="562" y2="170"/>'
      + '<line x1="541" y1="150" x2="583" y2="150"/>'
      + '<line x1="562" y1="170" x2="549" y2="198"/>'
      + '<line x1="562" y1="170" x2="575" y2="198"/>'
      + '<text x="540" y="240" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">visitors</text>'
      + '<text x="320" y="306" font-size="24" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">other families keep other days</text>'
      + '<text x="320" y="342" font-size="24" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">those are special too</text></svg>',
  },
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

  figure: {
    alt: 'Three things side by side. A watered plant drawn in green standing '
      + 'up, labelled it lives. A plant that was not watered, drawn in red '
      + 'and drooping, labelled it dies. A stone, labelled not alive.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">what if it had no water</text>'
      + '<polygon points="70,258 146,258 139,312 77,312"/>'
      + '<line x1="108" y1="258" x2="108" y2="180" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<path d="M 108 212 Q 74 198 72 222 Q 94 228 108 212" '
      + 'stroke="#0f8a4d" stroke-width="4"/>'
      + '<path d="M 108 196 Q 142 182 144 206 Q 122 212 108 196" '
      + 'stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="108" y="346" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">watered</text>'
      + '<text x="108" y="380" font-size="22" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">it lives</text>'
      + '<polygon points="272,258 348,258 341,312 279,312"/>'
      + '<path d="M 310 258 Q 306 206 266 200" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<path d="M 300 224 Q 268 218 262 242 Q 288 248 300 224" '
      + 'stroke="#c8433a" stroke-width="4"/>'
      + '<text x="310" y="346" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">not watered</text>'
      + '<text x="310" y="380" font-size="22" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">it dies</text>'
      + '<polygon points="468,302 480,250 524,234 560,258 554,300"/>'
      + '<text x="512" y="346" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a stone</text>'
      + '<text x="512" y="380" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">not alive</text></svg>',
  },
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

  figure: {
    alt: 'A chain of four boxes with arrows between them. A ball of rubbish '
      + 'over the words rubbish in the gutter, a puddle over the words '
      + 'water stands still, a mosquito over the words mosquitoes breed, '
      + 'and a sad face over the words people get sick, the last box drawn '
      + 'in red. Under it says so hold it until you find a bin.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">rubbish in the gutter makes '
      + 'people sick</text>'
      + '<polygon points="58,132 64,108 86,98 102,114 98,136 76,144"/>'
      + '<line x1="70" y1="112" x2="84" y2="126"/>'
      + '<line x1="88" y1="110" x2="78" y2="134"/>'
      + '<ellipse cx="240" cy="130" rx="38" ry="14"/>'
      + '<ellipse cx="400" cy="128" rx="17" ry="7"/>'
      + '<line x1="417" y1="128" x2="434" y2="121"/>'
      + '<path d="M 396 122 Q 378 102 366 116"/>'
      + '<path d="M 402 122 Q 390 100 376 106"/>'
      + '<line x1="390" y1="134" x2="380" y2="148"/>'
      + '<line x1="402" y1="134" x2="392" y2="148"/>'
      + '<line x1="412" y1="134" x2="402" y2="148"/>'
      + '<circle cx="560" cy="122" r="22" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<circle cx="552" cy="116" r="4" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<circle cx="568" cy="116" r="4" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<path d="M 550 134 Q 560 124 570 134" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<polygon points="18,170 142,170 142,258 18,258"/>'
      + '<text x="80" y="208" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">rubbish</text>'
      + '<text x="80" y="236" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">in the gutter</text>'
      + '<polygon points="178,170 302,170 302,258 178,258"/>'
      + '<text x="240" y="208" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">water</text>'
      + '<text x="240" y="236" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">stands still</text>'
      + '<line x1="146" y1="214" x2="174" y2="214"/>'
      + '<polyline points="161,204 174,214 161,224"/>'
      + '<polygon points="338,170 462,170 462,258 338,258"/>'
      + '<text x="400" y="208" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">mosquitoes</text>'
      + '<text x="400" y="236" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">breed</text>'
      + '<line x1="306" y1="214" x2="334" y2="214"/>'
      + '<polyline points="321,204 334,214 321,224"/>'
      + '<polygon points="498,170 622,170 622,258 498,258" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<text x="560" y="208" font-size="20" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">people</text>'
      + '<text x="560" y="236" font-size="20" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">get sick</text>'
      + '<line x1="466" y1="214" x2="494" y2="214"/>'
      + '<polyline points="481,204 494,214 481,224"/>'
      + '<text x="320" y="332" font-size="26" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">so hold it until you find a '
      + 'bin</text></svg>',
  },
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

  figure: {
    alt: 'Along the top, the things that are there: a carton, four bottle '
      + 'tops, a piece of string and an old tin, labelled what you have. An '
      + 'arrow points down to a lorry made out of them, with the bottle '
      + 'tops as its wheels. Under it says now pull it, does it hold.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">look at what you have, then '
      + 'decide</text><polygon points="50,88 130,88 130,140 50,140"/>'
      + '<circle cx="170" cy="114" r="13"/>'
      + '<circle cx="202" cy="114" r="13"/>'
      + '<circle cx="234" cy="114" r="13"/>'
      + '<circle cx="266" cy="114" r="13"/>'
      + '<path d="M 300 100 Q 320 132 342 102 Q 364 130 386 104"/>'
      + '<polygon points="420,96 468,96 468,140 420,140"/>'
      + '<ellipse cx="444" cy="96" rx="24" ry="8"/>'
      + '<text x="556" y="120" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">what you have</text>'
      + '<line x1="320" y1="168" x2="320" y2="208"/>'
      + '<polyline points="310,195 320,208 330,195"/>'
      + '<polygon points="170,240 300,240 300,290 170,290"/>'
      + '<polygon points="300,256 338,256 348,290 300,290"/>'
      + '<circle cx="205" cy="300" r="15"/>'
      + '<circle cx="265" cy="300" r="15"/>'
      + '<circle cx="326" cy="300" r="15"/>'
      + '<text x="440" y="280" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a lorry</text>'
      + '<text x="320" y="364" font-size="24" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">now pull it, does it hold</text>'
      + '</svg>',
  },
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

  figure: {
    alt: 'Two people facing each other across a market counter, one labelled '
      + 'the seller and one labelled the buyer. A green double headed arrow '
      + 'curves between them along the bottom, labelled now swap.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="44" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">stay in your part until we '
      + 'finish</text><circle cx="140" cy="150" r="26"/>'
      + '<line x1="140" y1="176" x2="140" y2="238"/>'
      + '<line x1="101" y1="202" x2="179" y2="202"/>'
      + '<line x1="140" y1="238" x2="117" y2="290"/>'
      + '<line x1="140" y1="238" x2="163" y2="290"/>'
      + '<circle cx="500" cy="150" r="26"/>'
      + '<line x1="500" y1="176" x2="500" y2="238"/>'
      + '<line x1="461" y1="202" x2="539" y2="202"/>'
      + '<line x1="500" y1="238" x2="477" y2="290"/>'
      + '<line x1="500" y1="238" x2="523" y2="290"/>'
      + '<polygon points="246,206 394,206 394,226 246,226"/>'
      + '<line x1="256" y1="226" x2="256" y2="286"/>'
      + '<line x1="384" y1="226" x2="384" y2="286"/>'
      + '<text x="320" y="196" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the market</text>'
      + '<text x="140" y="326" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the seller</text>'
      + '<text x="500" y="326" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the buyer</text>'
      + '<path d="M 200 350 Q 320 392 440 350" stroke="#0f8a4d"/>'
      + '<polyline points="216,344 200,350 208,364" stroke="#0f8a4d"/>'
      + '<polyline points="424,344 440,350 432,364" stroke="#0f8a4d"/>'
      + '<text x="320" y="338" font-size="20" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">now swap</text></svg>',
  },
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
