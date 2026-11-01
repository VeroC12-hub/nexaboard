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
