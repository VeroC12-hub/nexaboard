/**
 * Stored lessons for KG 1 Our World Our People, and Creative Arts.
 *
 * Spoken, like the rest of the early years. `mechanism` is addressed to the
 * adult helping, and the reading check scores those separately.
 *
 * ── These five OWOP topics are all the same move ──────────────────────────
 *
 * A five year old is learning that the world outside them is a thing that
 * can be looked at: the people at home have jobs, the feeling in their chest
 * has a name and a cause, the town has a name, the animals are kept by
 * somebody or are not, and the sky tells you what to carry. In every one the
 * lesson is observation followed by a word for what was observed, in that
 * order, because the word is useless to a child who has not noticed the
 * thing.
 *
 * `my-feelings` is the one that matters most and reads as the softest. A
 * child who can say "I am angry because he took it" is doing something a
 * child who hits cannot, and the whole of it is having a word ready.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── the people in my family ────────────────────────────────────────────── */

teach({
  topicId: 'my-family',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Name the people you live with. '
      + 'Say what each one does for the family. '
      + 'Say what you do for the family too.',
    method: [
      'Name one person.',
      'Say what they do.',
      'Then the next person.',
    ],
  },

  idea:
    'Who do you live with? '
    + 'Name one of them. '
    + 'What does that person do for the family? '
    + 'Maybe they cook. Maybe they go to work. '
    + 'Maybe they fetch water. '
    + 'Now name another one. '
    + 'What do they do? '
    + 'And what do you do for the family?',

  mechanism:
    'For the adult. '
    + 'Ask what each person DOES, not only their name. '
    + 'That turns a list of people into a household that works, '
    + 'and it lets the child see their own part in it. '
    + 'The last question is the important one. '
    + 'A child who can say what they do for the family, '
    + 'even if it is only sweeping or holding the baby, '
    + 'is a member of it and not a guest. '
    + 'Take whatever family the child has as the answer. '
    + 'Many children live with a grandmother, an aunt, '
    + 'or an older sister, '
    + 'and all of those are the family. '
    + 'Never suggest a family is missing somebody.',

  method: [
    'Name one person you live with.',
    'Say what they do for the family.',
    'Name the next person.',
    'Say what they do.',
    'Say what you do for the family.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Who do you live with?',
      steps: [
        'Name the people at home.',
      ],
      answer: 'Name them one at a time.',
    },
    {
      level: 2,
      ask: 'What does somebody in your family do for everybody else?',
      steps: [
        'Think of a job they do at home.',
      ],
      answer: 'Cooking, working, fetching water, caring for the small '
        + 'ones.',
    },
    {
      level: 3,
      ask: 'What do you do for your family?',
      steps: [
        'Even a small job counts.',
      ],
      answer: 'Name one thing you do, such as sweeping or helping.',
    },
  ],

  traps: [
    {
      mistake: 'Naming people and stopping.',
      why: 'Say what each one does. '
        + 'That is what makes it a family and not a list.',
    },
    {
      mistake: 'Thinking a family must look like somebody else’s.',
      why: 'Whoever you live with is your family.',
    },
  ],

  extension:
    'There are people in your family you do not live with. '
    + 'Grandparents. Aunts. Uncles. Cousins. '
    + 'Name one of them and say where they live.',

  figure: {
    alt: 'Three people side by side, each with the thing they do for the '
      + 'family beside them. One has a cooking pot and is labelled cooks, '
      + 'one has a bucket and is labelled fetches water, and the smallest '
      + 'has a broom and is labelled in green I sweep. Under them it says '
      + 'and you do something too.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">everybody does something</text>'
      + '<circle cx="110" cy="100" r="28"/>'
      + '<line x1="110" y1="128" x2="110" y2="195"/>'
      + '<line x1="68" y1="156" x2="152" y2="156"/>'
      + '<line x1="110" y1="195" x2="85" y2="251"/>'
      + '<line x1="110" y1="195" x2="135" y2="251"/>'
      + '<polygon points="166,206 216,206 209,250 173,250"/>'
      + '<line x1="160" y1="206" x2="222" y2="206"/>'
      + '<line x1="180" y1="194" x2="176" y2="178"/>'
      + '<line x1="200" y1="194" x2="204" y2="178"/>'
      + '<text x="145" y="300" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">cooks</text>'
      + '<circle cx="320" cy="100" r="28"/>'
      + '<line x1="320" y1="128" x2="320" y2="195"/>'
      + '<line x1="278" y1="156" x2="362" y2="156"/>'
      + '<line x1="320" y1="195" x2="295" y2="251"/>'
      + '<line x1="320" y1="195" x2="345" y2="251"/>'
      + '<polygon points="376,200 416,200 409,250 383,250"/>'
      + '<path d="M 376 200 Q 396 174 416 200"/>'
      + '<text x="356" y="300" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">fetches water</text>'
      + '<circle cx="530" cy="112" r="24"/>'
      + '<line x1="530" y1="136" x2="530" y2="194"/>'
      + '<line x1="494" y1="160" x2="566" y2="160"/>'
      + '<line x1="530" y1="194" x2="508" y2="242"/>'
      + '<line x1="530" y1="194" x2="552" y2="242"/>'
      + '<line x1="580" y1="196" x2="592" y2="258"/>'
      + '<line x1="584" y1="254" x2="600" y2="266"/>'
      + '<line x1="588" y1="248" x2="604" y2="258"/>'
      + '<line x1="592" y1="242" x2="606" y2="250"/>'
      + '<text x="560" y="300" font-size="24" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">I sweep</text>'
      + '<text x="320" y="360" font-size="26" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">and you do something too</text></svg>',
  },
  questions: [
    {
      id: 'fm-1',
      ask: 'What should you say about each person in your family?',
      kind: 'choice',
      options: [
        'What they do for the family',
        'How tall they are',
        'Nothing',
      ],
      answer: 'What they do for the family',
      teach: 'That shows how the family works together.',
      level: 2,
    },
  ],
})

/* ── how I am feeling ──────────────────────────────────────────────── */

teach({
  topicId: 'my-feelings',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Happy. Sad. Angry. Afraid. Tired. '
      + 'Give the feeling its name. '
      + 'Then say what caused it. '
      + 'Saying it is better than hitting or shouting.',
    method: [
      'Stop and notice what you feel.',
      'Say the name of the feeling.',
      'Say what made you feel it.',
    ],
  },

  idea:
    'How are you feeling now? '
    + 'Happy? Sad? Angry? Afraid? Tired? '
    + 'Every feeling has a name. '
    + 'Say the name. '
    + 'Now say what made you feel it. '
    + 'I am angry because he took my cup. '
    + 'That is better than hitting. '
    + 'When you say it, somebody can help.',

  mechanism:
    'For the adult. '
    + 'A child hits because they have no sentence. '
    + 'The sentence is the whole lesson here, '
    + 'and it has two parts: '
    + 'the name of the feeling and what caused it. '
    + 'So supply the words at the moment it happens: '
    + '"you are angry because he took it", '
    + 'and let the child hear their own state described. '
    + 'After some weeks they will say it themselves, '
    + 'and that is a child who can be helped '
    + 'instead of punished. '
    + 'Never tell a child they do not feel what they said. '
    + 'The feeling is not the problem, '
    + 'and what they do about it can be taught '
    + 'only once the feeling is allowed.',

  method: [
    'Stop for a moment.',
    'Notice what you feel.',
    'Say the name of the feeling.',
    'Say what made you feel it.',
    'Say it to somebody who can help.',
    'Then wait for them to answer.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Somebody took your cup. What do you feel?',
      steps: [
        'Name the feeling.',
      ],
      answer: 'Angry, probably. Say so.',
    },
    {
      level: 2,
      ask: 'What two things do you say?',
      steps: [
        'A name and a cause.',
      ],
      answer: 'The feeling, and what made you feel it.',
    },
    {
      level: 3,
      ask: 'Why say it instead of hitting?',
      steps: [
        'Hitting tells nobody anything useful.',
      ],
      answer: 'Because when you say it, '
        + 'somebody can help you.',
    },
  ],

  traps: [
    {
      mistake: 'Hitting or shouting instead of saying.',
      why: 'Nobody can help with that. '
        + 'Say the feeling and the reason.',
    },
    {
      mistake: 'Saying only that you are cross.',
      why: 'Say what caused it too. '
        + 'Then it can be sorted out.',
    },
  ],

  extension:
    'Now look at somebody else. '
    + 'How do you think they are feeling? '
    + 'What makes you think so? '
    + 'Ask them if you are right.',

  figure: {
    alt: 'Four faces in a row showing happy, sad, angry and afraid. Under '
      + 'them a green box holds the sentence I am angry because he took my '
      + 'cup.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">say the feeling and why</text>'
      + '<circle cx="100" cy="140" r="44"/>'
      + '<circle cx="84" cy="130" r="5" fill="currentColor"/>'
      + '<circle cx="116" cy="130" r="5" fill="currentColor"/>'
      + '<path d="M 78 150 Q 100 176 122 150"/>'
      + '<text x="100" y="222" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">happy</text>'
      + '<circle cx="250" cy="140" r="44"/>'
      + '<circle cx="234" cy="130" r="5" fill="currentColor"/>'
      + '<circle cx="266" cy="130" r="5" fill="currentColor"/>'
      + '<path d="M 228 166 Q 250 142 272 166"/>'
      + '<text x="250" y="222" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">sad</text>'
      + '<circle cx="400" cy="140" r="44"/>'
      + '<circle cx="384" cy="130" r="5" fill="currentColor"/>'
      + '<circle cx="416" cy="130" r="5" fill="currentColor"/>'
      + '<line x1="382" y1="162" x2="418" y2="162"/>'
      + '<line x1="376" y1="122" x2="392" y2="132"/>'
      + '<line x1="424" y1="122" x2="408" y2="132"/>'
      + '<text x="400" y="222" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">angry</text>'
      + '<circle cx="550" cy="140" r="44"/>'
      + '<circle cx="534" cy="130" r="5" fill="currentColor"/>'
      + '<circle cx="566" cy="130" r="5" fill="currentColor"/>'
      + '<circle cx="550" cy="162" r="9"/>'
      + '<path d="M 528 118 Q 534 110 542 116"/>'
      + '<path d="M 558 116 Q 566 110 572 118"/>'
      + '<text x="550" y="222" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">afraid</text>'
      + '<polygon points="70,266 570,266 570,334 70,334" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<text x="320" y="310" font-size="26" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">I am angry because he took my '
      + 'cup</text></svg>',
  },
  questions: [
    {
      id: 'fe-1',
      ask: 'What two things do you say about a feeling?',
      kind: 'choice',
      options: [
        'Its name and what caused it',
        'Its name only',
        'How long it lasted',
      ],
      answer: 'Its name and what caused it',
      teach: 'Then somebody can help.',
      level: 2,
    },
    {
      id: 'fe-2',
      ask: 'Why is saying better than hitting?',
      kind: 'choice',
      options: [
        'Somebody can help you',
        'It is quieter',
        'It is quicker',
      ],
      answer: 'Somebody can help you',
      teach: 'Hitting tells nobody what is wrong.',
      level: 3,
    },
  ],
})

/* ── where I live ──────────────────────────────────────────────── */

teach({
  topicId: 'my-home-town',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Your town or village has a name. '
      + 'Say the name. '
      + 'Then say one thing that is in it. '
      + 'A market, a school, a river, a church or a mosque.',
    method: [
      'Say the name of your town.',
      'Say one thing found there.',
      'Say what people do there.',
    ],
  },

  idea:
    'What is the name of your town? '
    + 'Say it. '
    + 'Say it again so I can hear. '
    + 'Now tell me one thing that is in your town. '
    + 'Is there a market? '
    + 'Is there a school? '
    + 'Is there a river, or a church, or a mosque? '
    + 'What do people do there?',

  mechanism:
    'For the adult. '
    + 'Knowing the name of your town is a safety skill, '
    + 'the same as knowing your own name, '
    + 'so practise it until it is automatic. '
    + 'Then move outward from things the child has seen. '
    + 'A five year old cannot hold a map '
    + 'and can hold a market, a road and a river. '
    + 'So build the place out of landmarks they know, '
    + 'and name them. '
    + 'Walk past something and say what it is for. '
    + 'This is also where the geography of later years starts: '
    + 'the child who knows their own town has somewhere '
    + 'to attach the region and the country to.',

  method: [
    'Say the name of your town or village.',
    'Say it loud enough to hear.',
    'Name one thing found in it.',
    'Say what that thing is for.',
    'Name another one.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Where do you live?',
      steps: [
        'Say the name of the town.',
      ],
      answer: 'The name of your town or village.',
    },
    {
      level: 2,
      ask: 'Name one thing in your town and say what it is for.',
      steps: [
        'Think of a place you pass.',
      ],
      answer: 'A market, where people buy and sell. '
        + 'Or a school, where children learn.',
    },
    {
      level: 3,
      ask: 'Why is it important to know your town’s name?',
      steps: [
        'If you are lost, somebody can help.',
      ],
      answer: 'So that somebody can help you get home.',
    },
  ],

  traps: [
    {
      mistake: 'Saying only "my house".',
      why: 'The town has a name. Say the name.',
    },
  ],

  extension:
    'Your town is in a region. '
    + 'Your region is in Ghana. '
    + 'Say all three: your town, your region, your country.',

  figure: {
    alt: 'Three places side by side: a school with a flag, two market '
      + 'stalls, and a river. Each is named underneath, and below them it '
      + 'says say the name of your town.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">what is in your town</text>'
      + '<polygon points="60,150 210,150 210,270 60,270"/>'
      + '<polygon points="115,220 155,220 155,270 115,270"/>'
      + '<line x1="135" y1="104" x2="135" y2="150"/>'
      + '<polygon points="135,108 178,120 135,132"/>'
      + '<text x="135" y="312" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the school</text>'
      + '<polygon points="260,170 340,170 330,190 270,190"/>'
      + '<line x1="272" y1="190" x2="272" y2="270"/>'
      + '<line x1="328" y1="190" x2="328" y2="270"/>'
      + '<polygon points="350,170 430,170 420,190 360,190"/>'
      + '<line x1="362" y1="190" x2="362" y2="270"/>'
      + '<line x1="418" y1="190" x2="418" y2="270"/>'
      + '<text x="345" y="312" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the market</text>'
      + '<path d="M 490 150 Q 540 190 500 230 Q 470 258 510 272"/>'
      + '<path d="M 540 150 Q 590 190 550 230 Q 520 258 560 272"/>'
      + '<text x="525" y="312" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the river</text>'
      + '<text x="320" y="366" font-size="26" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">say the name of your town</text>'
      + '</svg>',
  },
  questions: [
    {
      id: 'ht-1',
      ask: 'Why should you know the name of your town?',
      kind: 'choice',
      options: [
        'So somebody can help you get home',
        'To tell visitors',
        'For school only',
      ],
      answer: 'So somebody can help you get home',
      teach: 'It is a safety skill, like knowing your own name.',
      level: 3,
    },
  ],
})

/* ── plants and animals near us ─────────────────────────────── */

teach({
  topicId: 'plants-animals',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Name the plants and animals you see. '
      + 'Some are kept by people. '
      + 'A goat is kept. A fowl is kept. '
      + 'A lizard is not kept. It lives on its own.',
    method: [
      'Name what you see.',
      'Ask whether somebody keeps it.',
      'Kept ones are fed. Wild ones find their own food.',
    ],
  },

  idea:
    'Look around. '
    + 'Name a plant you can see. '
    + 'Name an animal you can see. '
    + 'Now think. Does somebody keep that animal? '
    + 'A goat is kept. Somebody feeds it. '
    + 'A fowl is kept. '
    + 'A lizard is not kept. '
    + 'Nobody feeds a lizard. '
    + 'It finds its own food.',

  mechanism:
    'For the adult. '
    + 'The test to teach is "does somebody feed it", '
    + 'not "is it in a house". '
    + 'A goat wandering down the road is still kept, '
    + 'and a child who sorts by where the animal is '
    + 'will get that wrong. '
    + 'Feeding is the thing that makes it somebody’s. '
    + 'Do the same for plants: '
    + 'cassava and maize are planted and tended, '
    + 'and the grass at the roadside is not. '
    + 'Use only plants and animals the child can actually see, '
    + 'because a lion from a picture teaches nothing '
    + 'about the world outside the door.',

  method: [
    'Look around and name a plant.',
    'Look around and name an animal.',
    'Ask whether somebody feeds it.',
    'If somebody feeds it, it is kept.',
    'If it finds its own food, it is wild.',
    'Say what the kept ones give us.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Is a goat kept or wild?',
      steps: [
        'Does somebody feed it?',
      ],
      answer: 'Kept. Somebody feeds it.',
    },
    {
      level: 2,
      ask: 'A goat is walking down the road alone. Is it still kept?',
      steps: [
        'The test is who feeds it.',
      ],
      answer: 'Yes. Somebody still feeds it and owns it.',
    },
    {
      level: 3,
      ask: 'Is roadside grass planted?',
      steps: [
        'Did anybody plant and tend it?',
      ],
      answer: 'No. It grows on its own.',
    },
  ],

  traps: [
    {
      mistake: 'Deciding by where the animal is.',
      why: 'A goat in the road is still kept. '
        + 'Ask who feeds it.',
    },
    {
      mistake: 'Naming animals from pictures only.',
      why: 'Name the ones you can see here.',
    },
  ],

  extension:
    'What do the kept animals give us? '
    + 'Eggs. Milk. Meat. Help with work. '
    + 'What do the planted plants give us?',

  figure: {
    alt: 'A goat on the left with a green bowl of food beside it, labelled '
      + 'somebody feeds it and kept. A lizard on the right with nothing '
      + 'beside it, labelled nobody feeds it and not kept. A dotted line '
      + 'separates them.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">does somebody feed it</text>'
      + '<ellipse cx="110" cy="166" rx="42" ry="24"/>'
      + '<circle cx="160" cy="148" r="15"/>'
      + '<line x1="154" y1="136" x2="146" y2="120"/>'
      + '<line x1="166" y1="136" x2="164" y2="118"/>'
      + '<line x1="82" y1="186" x2="82" y2="214"/>'
      + '<line x1="98" y1="186" x2="98" y2="214"/>'
      + '<line x1="124" y1="186" x2="124" y2="214"/>'
      + '<line x1="138" y1="186" x2="138" y2="214"/>'
      + '<line x1="68" y1="160" x2="54" y2="148"/>'
      + '<polygon points="206,198 256,198 249,230 213,230" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<circle cx="218" cy="210" r="6" stroke="#0f8a4d" stroke-width="2" '
      + 'fill="#0f8a4d"/>'
      + '<circle cx="232" cy="210" r="6" stroke="#0f8a4d" stroke-width="2" '
      + 'fill="#0f8a4d"/>'
      + '<circle cx="246" cy="210" r="6" stroke="#0f8a4d" stroke-width="2" '
      + 'fill="#0f8a4d"/>'
      + '<text x="160" y="286" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">somebody feeds it</text>'
      + '<text x="160" y="330" font-size="30" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">kept</text>'
      + '<line x1="320" y1="90" x2="320" y2="344" stroke-dasharray="8 8"/>'
      + '<ellipse cx="470" cy="170" rx="38" ry="16"/>'
      + '<circle cx="516" cy="166" r="13"/>'
      + '<path d="M 434 170 Q 400 178 384 160 Q 374 146 384 136"/>'
      + '<line x1="444" y1="180" x2="426" y2="204"/>'
      + '<line x1="444" y1="180" x2="458" y2="206"/>'
      + '<line x1="496" y1="180" x2="482" y2="206"/>'
      + '<line x1="496" y1="180" x2="514" y2="204"/>'
      + '<text x="470" y="286" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">nobody feeds it</text>'
      + '<text x="470" y="330" font-size="30" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">not kept</text></svg>',
  },
  questions: [
    {
      id: 'pa-1',
      ask: 'How do you tell a kept animal from a wild one?',
      kind: 'choice',
      options: [
        'Ask whether somebody feeds it',
        'See if it is indoors',
        'See how big it is',
      ],
      answer: 'Ask whether somebody feeds it',
      teach: 'A goat in the road is still kept.',
      level: 2,
    },
  ],
})

/* ── today's weather ──────────────────────────────────── */

teach({
  topicId: 'weather-early',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Look at the sky. '
      + 'Sunny, cloudy, rainy, windy, hot or cool. '
      + 'Then say what to wear or carry. '
      + 'Rain means carry something to keep dry.',
    method: [
      'Look at the sky and feel the air.',
      'Say what the weather is.',
      'Say what you should wear or carry.',
    ],
  },

  idea:
    'Look outside. '
    + 'Is the sun shining? '
    + 'Are there clouds? '
    + 'Is it raining? Is the wind blowing? '
    + 'Is it hot, or cool? '
    + 'Now say what the weather is today. '
    + 'And now the important part. '
    + 'What should you wear? '
    + 'What should you carry?',

  mechanism:
    'For the adult. '
    + 'The naming is easy and the decision is the lesson. '
    + 'Weather is worth noticing because it changes what you do, '
    + 'so always finish with what to wear or carry. '
    + 'That turns looking at the sky into a reason to look. '
    + 'Also teach the forward step: '
    + 'black clouds now mean rain soon, '
    + 'so the time to carry something is before it starts. '
    + 'A child who can do that is reading the world '
    + 'and acting on it, '
    + 'which is a bigger thing than knowing six weather words. '
    + 'Do it every morning, briefly, '
    + 'so it becomes a habit and not a lesson.',

  method: [
    'Look at the sky.',
    'Feel whether the air is hot or cool.',
    'Say what the weather is.',
    'Say what you should wear.',
    'Say what you should carry.',
    'Look for black clouds and say if rain is coming.',
  ],

  worked: [
    {
      level: 1,
      ask: 'The sun is bright and hot. What is the weather?',
      steps: [
        'Name what you see.',
      ],
      answer: 'Sunny and hot.',
    },
    {
      level: 2,
      ask: 'It is raining. What should you carry?',
      steps: [
        'Something to keep the rain off.',
      ],
      answer: 'An umbrella, or something to cover your head.',
    },
    {
      level: 3,
      ask: 'The clouds are black and it is not raining yet. What do you '
        + 'do?',
      steps: [
        'Rain is coming.',
      ],
      answer: 'Carry something now, before it starts.',
    },
  ],

  traps: [
    {
      mistake: 'Naming the weather and stopping.',
      why: 'Say what to wear or carry. '
        + 'That is why we look.',
    },
    {
      mistake: 'Waiting until the rain starts.',
      why: 'Black clouds tell you first. '
        + 'Get ready before.',
    },
  ],

  extension:
    'There is a rainy season and a dry season. '
    + 'Which one are we in now? '
    + 'What grows in the rainy season?',

  figure: {
    alt: 'A rain cloud on the left with an arrow pointing to an umbrella, '
      + 'labelled carry it. Below, the sun with an arrow pointing to a hat, '
      + 'labelled wear it.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">look at the sky, then '
      + 'decide</text>'
      + '<path d="M 78 164 Q 58 140 84 124 Q 86 94 120 98 Q 148 88 162 114 '
      + 'Q 194 112 194 140 Q 194 162 174 164 Z"/>'
      + '<line x1="96" y1="174" x2="89" y2="200"/>'
      + '<line x1="126" y1="174" x2="119" y2="200"/>'
      + '<line x1="156" y1="174" x2="149" y2="200"/>'
      + '<line x1="212" y1="148" x2="300" y2="148"/>'
      + '<polyline points="287,138 300,148 287,158"/>'
      + '<path d="M 334 162 A 48 48 0 0 1 430 162" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="382" y1="162" x2="382" y2="216" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<path d="M 382 216 Q 382 232 366 228" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="510" y="170" font-size="24" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">carry it</text>'
      + '<circle cx="110" cy="300" r="26"/>'
      + '<line x1="144" y1="300" x2="158" y2="300"/>'
      + '<line x1="134" y1="324" x2="144" y2="334"/>'
      + '<line x1="110" y1="334" x2="110" y2="348"/>'
      + '<line x1="86" y1="324" x2="76" y2="334"/>'
      + '<line x1="76" y1="300" x2="62" y2="300"/>'
      + '<line x1="86" y1="276" x2="76" y2="266"/>'
      + '<line x1="110" y1="266" x2="110" y2="252"/>'
      + '<line x1="134" y1="276" x2="144" y2="266"/>'
      + '<line x1="212" y1="300" x2="300" y2="300"/>'
      + '<polyline points="287,290 300,300 287,310"/>'
      + '<path d="M 348 306 A 36 26 0 0 1 418 306" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="330" y1="306" x2="436" y2="306" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="510" y="312" font-size="24" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">wear it</text></svg>',
  },
  questions: [
    {
      id: 'we-1',
      ask: 'After naming the weather, what do you say?',
      kind: 'choice',
      options: [
        'What to wear or carry',
        'What day it is',
        'Nothing',
      ],
      answer: 'What to wear or carry',
      teach: 'That is the reason for looking at the sky.',
      level: 1,
    },
    {
      id: 'we-2',
      ask: 'Black clouds and no rain yet. What do they tell you?',
      kind: 'choice',
      options: [
        'Rain is coming',
        'It will be hot',
        'Nothing',
      ],
      answer: 'Rain is coming',
      teach: 'So get ready before it starts.',
      level: 3,
    },
  ],
})

/* ── drawing something real ──────────────────────────── */

teach({
  topicId: 'draw-what-i-see',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Put the thing in front of you. '
      + 'Look at it. '
      + 'Draw the big shape first. '
      + 'Then add the parts. '
      + 'Keep looking while you draw.',
    method: [
      'Look at the thing before you start.',
      'Draw the big shape.',
      'Add the parts, looking each time.',
    ],
  },

  idea:
    'Put the cup in front of you. '
    + 'Look at it. '
    + 'What shape is the whole cup? '
    + 'Draw that shape first. '
    + 'Now look again. '
    + 'What else has it got? '
    + 'A handle. Draw the handle. '
    + 'Keep looking at the cup while you draw it. '
    + 'Now point at the parts of your drawing.',

  mechanism:
    'For the adult. '
    + 'The instruction that changes everything is "keep looking". '
    + 'Children draw from memory '
    + 'even with the object in front of them, '
    + 'and then every cup comes out the same. '
    + 'So keep bringing their eyes back: '
    + '"look at it again, where does the handle join?". '
    + 'Drawing from life is really a looking exercise, '
    + 'and the looking is what transfers: '
    + 'to science later, and to technical drawing. '
    + 'Do not correct the proportions. '
    + 'Ask a question instead, '
    + 'and let them see the difference themselves. '
    + 'Big shape first, then the parts, '
    + 'because starting with a detail '
    + 'leaves no room for the rest.',

  method: [
    'Put the object where you can see it.',
    'Look at it for a moment.',
    'Draw the big shape first.',
    'Look again.',
    'Add one part.',
    'Look again before each new part.',
    'Point at the parts and name them.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What do you draw first?',
      steps: [
        'Not the small parts.',
      ],
      answer: 'The big shape of the whole thing.',
    },
    {
      level: 2,
      ask: 'What should you do while you draw?',
      steps: [
        'Do not draw from memory.',
      ],
      answer: 'Keep looking at the thing.',
    },
    {
      level: 3,
      ask: 'Why not start with the handle?',
      steps: [
        'The handle is a part.',
      ],
      answer: 'Because then there is no room for the rest of the cup.',
    },
  ],

  traps: [
    {
      mistake: 'Drawing from memory with the object right there.',
      why: 'Look at it. '
        + 'Then every drawing is different, and truer.',
    },
    {
      mistake: 'Starting with a small part.',
      why: 'The big shape first. '
        + 'Then the parts fit inside it.',
    },
  ],

  extension:
    'Now draw the same cup from the other side. '
    + 'Can you see the handle now? '
    + 'Draw what you can actually see.',

  figure: {
    alt: 'A cup with a handle on the left, labelled the cup. Beside it the '
      + 'drawing in two steps: first the big shape of the cup on its own, '
      + 'then an arrow, then the same shape with the handle added in green. '
      + 'Under it says keep looking at the cup.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">big shape first, then the '
      + 'parts</text><polygon points="70,130 140,130 133,240 77,240"/>'
      + '<path d="M 140 156 Q 182 176 140 206"/>'
      + '<text x="105" y="290" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the cup</text>'
      + '<text x="205" y="146" font-size="34" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">1</text>'
      + '<polygon points="240,130 310,130 303,240 247,240"/>'
      + '<text x="275" y="290" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the big shape</text>'
      + '<line x1="330" y1="185" x2="380" y2="185"/>'
      + '<polyline points="367,175 380,185 367,195"/>'
      + '<text x="398" y="146" font-size="34" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">2</text>'
      + '<polygon points="430,130 500,130 493,240 437,240"/>'
      + '<path d="M 500 156 Q 542 176 500 206" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="465" y="290" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">then the handle</text>'
      + '<text x="320" y="352" font-size="26" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">keep looking at the cup</text></svg>',
  },
  questions: [
    {
      id: 'dw-1',
      ask: 'What do you draw first?',
      kind: 'choice',
      options: ['The big shape', 'The handle', 'The pattern'],
      answer: 'The big shape',
      teach: 'Then the parts fit inside it.',
      level: 1,
    },
    {
      id: 'dw-2',
      ask: 'While drawing a real thing you should:',
      kind: 'choice',
      options: [
        'Keep looking at it',
        'Draw from memory',
        'Close your eyes',
      ],
      answer: 'Keep looking at it',
      teach: 'Drawing from life is really a looking exercise.',
      level: 2,
    },
  ],
})

/* ── modelling with clay ────────────────────────────── */

teach({
  topicId: 'clay-modelling',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Roll the clay into a ball. '
      + 'Roll it long to make a snake. '
      + 'Pinch it to pull a part out. '
      + 'Press two pieces together to join them.',
    method: [
      'Soften the clay in your hands first.',
      'Roll, pinch or press.',
      'Press joins hard so they hold.',
    ],
  },

  idea:
    'Take the clay. '
    + 'Squeeze it until it is soft. '
    + 'Now roll it between your hands. '
    + 'You have a ball. '
    + 'Now roll it on the table. '
    + 'It gets long, like a snake. '
    + 'Now pinch a bit out. '
    + 'That can be an ear, or a leg. '
    + 'Press two pieces together to join them. '
    + 'Press hard, or they will fall apart.',

  mechanism:
    'For the adult. '
    + 'Four actions make everything: '
    + 'roll, pinch, press and join. '
    + 'Teach them as actions rather than as objects, '
    + 'because then the child can make anything, '
    + 'instead of being able to make one pot. '
    + 'Two practical points save most of the frustration. '
    + 'Clay has to be softened first, '
    + 'or it cracks and the child decides they cannot do it. '
    + 'And joins fail unless they are pressed hard '
    + 'and the clay is damp, '
    + 'so wet the surfaces and press. '
    + 'Let the model be whatever they say it is. '
    + 'The hands are learning, not the clay.',

  method: [
    'Squeeze the clay until it is soft.',
    'Roll it into a ball between your hands.',
    'Roll it on the table to make it long.',
    'Pinch a part out.',
    'Wet the two surfaces to be joined.',
    'Press them together hard.',
    'Say what you made.',
  ],

  worked: [
    {
      level: 1,
      ask: 'How do you make a long thin piece?',
      steps: [
        'Use the table.',
      ],
      answer: 'Roll it on the table.',
    },
    {
      level: 2,
      ask: 'Your joined pieces keep falling apart. Why?',
      steps: [
        'A join needs pressure and damp clay.',
      ],
      answer: 'The join was not pressed hard enough, '
        + 'or the clay was too dry.',
    },
    {
      level: 3,
      ask: 'Why squeeze the clay before starting?',
      steps: [
        'Hard clay cracks.',
      ],
      answer: 'To soften it, so it bends instead of cracking.',
    },
  ],

  traps: [
    {
      mistake: 'Working with hard clay.',
      why: 'It cracks. Squeeze it soft first.',
    },
    {
      mistake: 'Resting pieces together instead of pressing.',
      why: 'Press hard, and wet the surfaces first.',
    },
  ],

  extension:
    'Now make a pot. '
    + 'Roll a ball. '
    + 'Push your thumb into the middle. '
    + 'Pinch the walls thinner all the way round.',

  figure: {
    alt: 'Four things hands do to clay: a ball, a long roll like a snake, a '
      + 'lump with a piece pinched out of it, and two lumps with green '
      + 'arrows pressing them together. Each is named underneath.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="28" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">roll, pinch, press, join</text>'
      + '<circle cx="85" cy="164" r="40"/>'
      + '<text x="85" y="252" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a ball</text>'
      + '<path d="M 192 172 Q 222 140 252 172 Q 282 202 312 170" '
      + 'stroke-width="14"/>'
      + '<text x="250" y="252" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a snake</text>'
      + '<circle cx="405" cy="170" r="38"/>'
      + '<circle cx="440" cy="140" r="16"/>'
      + '<line x1="456" y1="122" x2="486" y2="122" stroke="#0f8a4d"/>'
      + '<polyline points="473,112 486,122 473,132" stroke="#0f8a4d"/>'
      + '<text x="412" y="252" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">pinch a bit out</text>'
      + '<circle cx="545" cy="166" r="28"/>'
      + '<circle cx="585" cy="166" r="28"/>'
      + '<line x1="488" y1="166" x2="512" y2="166" stroke="#0f8a4d"/>'
      + '<polyline points="499,156 512,166 499,176" stroke="#0f8a4d"/>'
      + '<line x1="632" y1="166" x2="614" y2="166" stroke="#0f8a4d"/>'
      + '<polyline points="627,156 614,166 627,176" stroke="#0f8a4d"/>'
      + '<text x="562" y="252" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">press to join</text>'
      + '<text x="320" y="330" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">these four make anything</text>'
      + '</svg>',
  },
  questions: [
    {
      id: 'cy-1',
      ask: 'What do you do before shaping clay?',
      kind: 'choice',
      options: ['Squeeze it soft', 'Dry it', 'Cut it'],
      answer: 'Squeeze it soft',
      teach: 'Hard clay cracks.',
      level: 1,
    },
    {
      id: 'cy-2',
      ask: 'How do you make a join hold?',
      kind: 'choice',
      options: [
        'Wet the surfaces and press hard',
        'Rest the pieces together',
        'Leave it to dry first',
      ],
      answer: 'Wet the surfaces and press hard',
      teach: 'A dry, gentle join falls apart.',
      level: 2,
    },
  ],
})

/* ── dancing to what you hear ──────────────────────── */

teach({
  topicId: 'move-to-music',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Listen to the music first. '
      + 'Fast music, move fast. '
      + 'Slow music, move slow. '
      + 'When the music stops, you stop.',
    method: [
      'Listen before you move.',
      'Match your moving to the music.',
      'Stop when the music stops.',
    ],
  },

  idea:
    'Listen to this music. '
    + 'Is it fast or slow? '
    + 'It is fast. So move fast. '
    + 'Now listen. This one is slow. '
    + 'Move slowly. '
    + 'Now the music stops. '
    + 'You stop too. '
    + 'Now a dance. '
    + 'Watch me, then do the same.',

  mechanism:
    'For the adult. '
    + 'Dancing here is listening done with the body. '
    + 'A child who moves fast to slow music '
    + 'is not listening yet, '
    + 'and you can see that without asking them anything, '
    + 'which is why this is a useful activity '
    + 'with children who do not yet talk much. '
    + 'The stopping is the hardest part '
    + 'and the most worth practising, '
    + 'because stopping on a signal '
    + 'is the same skill as stopping when the teacher claps. '
    + 'For a copied dance, '
    + 'show one movement and let them do it, '
    + 'then add a second. '
    + 'Three movements in a row is plenty at this age.',

  method: [
    'Listen to the music first.',
    'Decide if it is fast or slow.',
    'Move the same way.',
    'Stop when the music stops.',
    'Watch one movement.',
    'Do that movement.',
    'Then add the next one.',
  ],

  worked: [
    {
      level: 1,
      ask: 'The music is slow. How do you move?',
      steps: [
        'Match the music.',
      ],
      answer: 'Slowly.',
    },
    {
      level: 2,
      ask: 'The music stops. What do you do?',
      steps: [
        'Follow the music.',
      ],
      answer: 'Stop.',
    },
    {
      level: 3,
      ask: 'What do you do before you start moving?',
      steps: [
        'You have to know the music.',
      ],
      answer: 'Listen to it.',
    },
  ],

  traps: [
    {
      mistake: 'Moving fast whatever the music does.',
      why: 'Listen first. '
        + 'Slow music, slow moving.',
    },
    {
      mistake: 'Carrying on after the music stops.',
      why: 'Stopping is part of the dance.',
    },
  ],

  extension:
    'Now move loudly and then softly. '
    + 'Big steps for the loud part. '
    + 'Small steps for the quiet part.',

  figure: {
    alt: 'Three pictures. Under three green notes crowded together a person '
      + 'stands, labelled fast. Under two green notes far apart another '
      + 'stands, labelled slow. Under a note with a red cross through it a '
      + 'third stands, labelled stop. Below it says when the music stops, '
      + 'you stop.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">move the way the music '
      + 'goes</text>'
      + '<ellipse cx="76" cy="100" rx="11" ry="8" stroke="#0f8a4d" '
      + 'fill="#0f8a4d"/>'
      + '<line x1="87" y1="100" x2="87" y2="66" stroke="#0f8a4d"/>'
      + '<ellipse cx="104" cy="92" rx="11" ry="8" stroke="#0f8a4d" '
      + 'fill="#0f8a4d"/>'
      + '<line x1="115" y1="92" x2="115" y2="58" stroke="#0f8a4d"/>'
      + '<ellipse cx="132" cy="102" rx="11" ry="8" stroke="#0f8a4d" '
      + 'fill="#0f8a4d"/>'
      + '<line x1="143" y1="102" x2="143" y2="68" stroke="#0f8a4d"/>'
      + '<circle cx="110" cy="170" r="24"/>'
      + '<line x1="110" y1="194" x2="110" y2="252"/>'
      + '<line x1="74" y1="218" x2="146" y2="218"/>'
      + '<line x1="110" y1="252" x2="88" y2="300"/>'
      + '<line x1="110" y1="252" x2="132" y2="300"/>'
      + '<text x="110" y="336" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">fast</text>'
      + '<ellipse cx="286" cy="96" rx="11" ry="8" stroke="#0f8a4d" '
      + 'fill="#0f8a4d"/>'
      + '<line x1="297" y1="96" x2="297" y2="62" stroke="#0f8a4d"/>'
      + '<ellipse cx="350" cy="96" rx="11" ry="8" stroke="#0f8a4d" '
      + 'fill="#0f8a4d"/>'
      + '<line x1="361" y1="96" x2="361" y2="62" stroke="#0f8a4d"/>'
      + '<circle cx="320" cy="170" r="24"/>'
      + '<line x1="320" y1="194" x2="320" y2="252"/>'
      + '<line x1="284" y1="218" x2="356" y2="218"/>'
      + '<line x1="320" y1="252" x2="298" y2="300"/>'
      + '<line x1="320" y1="252" x2="342" y2="300"/>'
      + '<text x="320" y="336" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">slow</text>'
      + '<ellipse cx="520" cy="96" rx="11" ry="8" fill="currentColor"/>'
      + '<line x1="531" y1="96" x2="531" y2="62"/>'
      + '<line x1="496" y1="76" x2="556" y2="116" stroke="#c8433a" '
      + 'stroke-width="5"/>'
      + '<line x1="556" y1="76" x2="496" y2="116" stroke="#c8433a" '
      + 'stroke-width="5"/><circle cx="530" cy="170" r="24"/>'
      + '<line x1="530" y1="194" x2="530" y2="252"/>'
      + '<line x1="494" y1="218" x2="566" y2="218"/>'
      + '<line x1="530" y1="252" x2="508" y2="300"/>'
      + '<line x1="530" y1="252" x2="552" y2="300"/>'
      + '<text x="530" y="336" font-size="28" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">stop</text>'
      + '<text x="320" y="380" font-size="24" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">when the music stops, you stop</text>'
      + '</svg>',
  },
  questions: [
    {
      id: 'mm-1',
      ask: 'Slow music means you move:',
      kind: 'choice',
      options: ['Slowly', 'Fast', 'However you like'],
      answer: 'Slowly',
      teach: 'Match your moving to the music.',
      level: 1,
    },
    {
      id: 'mm-2',
      ask: 'What do you do when the music stops?',
      kind: 'choice',
      options: ['Stop', 'Keep dancing', 'Sit down'],
      answer: 'Stop',
      teach: 'Stopping on a signal is the hardest part.',
      level: 2,
    },
  ],
})
