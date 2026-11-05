/**
 * Stored lessons for the Basic 1 topics that stand alone in their subject:
 * Our World Our People, Ghanaian Language, and Computing.
 *
 * Kept in one file because each subject has a single Basic 1 topic, and three
 * files of one lesson each would be three files to find rather than one. When
 * Basic 2 adds more to any of them, that subject gets its own file and these
 * move into it.
 *
 * Written to be spoken to a six or seven year old. See `basic1-maths.ts`.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── who I am ─────────────────────────────────────────────────────────────── */

teach({
  topicId: 'who-i-am',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'You have a name, an age and a place you come from. Those three '
      + 'answer who you are.',
    method: [
      'Say your full name, not just your first name.',
      'Say your age.',
      'Say the town you come from.',
    ],
  },

  why:
    'You go to the market with your mother. '
    + 'There are a lot of people. '
    + 'You turn round and she is gone. '
    + 'A kind woman stops and asks you who you are. '
    + 'You say "Ama". '
    + 'She asks which Ama. '
    + 'And you do not know what else to say. '
    + 'There are four Amas in your class alone. '
    + 'What else did you need to be able to tell her? '
    + 'This lesson is what else.',

  notation:
    'Your name has two parts. '
    + 'The first part is your first name. '
    + 'The second part is your family name. '
    + 'In Ama Mensah, Ama comes first and Mensah comes after. '
    + 'Both parts start with a big letter, every single time. '
    + 'Writing ama mensah with small letters is wrong. '
    + 'When you write your name, write both parts, '
    + 'with one space between them.',

  idea:
    'You have a name, an age, and a place you come from. Those three answer '
    + 'the question "who are you?" for anybody who asks. But you are more than '
    + 'your name. You are also the things you are good at, the things you '
    + 'like, and the people you belong to.',

  mechanism:
    'This is not just good manners. '
    + 'What if you get lost one day? '
    + 'Your full name and your town can get you home. '
    + 'One name is not enough. '
    + 'Lots of children share your first name. '
    + 'So learn all of it well.',

  recap:
    'Answer in a full sentence. '
    + 'Say "My name is Ama". Do not just say "Ama". '
    + 'Do the same here.',

  method: [
    'Say your first name and your family name together.',
    'Say how old you are.',
    'Say the town or the area you live in.',
    'Then one thing that is yours: something you are good at, or something '
      + 'you love doing.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Somebody asks who you are. Give the three things.',
      steps: [
        'Full name.',
        'Age.',
        'Where you live.',
      ],
      answer: 'My name is Ama Mensah. I am six years old. I live in Tema.',
    },
    {
      level: 2,
      ask: 'Why is "Ama" not enough if you are lost?',
      steps: [
        'Many children are called Ama.',
        'Nobody can find your house from a first name.',
        'The family name and the town narrow it down to you.',
      ],
      answer: 'Because it does not say which Ama, or where you belong.',
    },
    {
      level: 3,
      ask: 'Two children in your class are both called Kofi. What makes each '
        + 'of them himself?',
      steps: [
        'Their family names are different, and so are their homes.',
        'But also what they are like: one may be the one who sings, the other '
          + 'the one who runs fastest.',
        'A name says which person. The rest says who they are.',
      ],
      answer: 'Their family and home tell them apart, and what they are good '
        + 'at and like tells you who each one is.',
    },
  ],

  traps: [
    {
      mistake: 'Giving only a first name.',
      why: 'Many children share it. Say the family name too.',
    },
    {
      mistake: 'Not knowing the name of your own town or area.',
      why: 'It is the thing a stranger would need most if you were lost. Learn '
        + 'it as surely as your own name.',
    },
    {
      mistake: 'Thinking you must be the best at something for it to count.',
      why: 'What you love doing is yours whether or not you are the best at '
        + 'it. That is part of who you are too.',
    },
  ],

  extension:
    'You belong to more than one group. '
    + 'You are in your family. You are in your class. '
    + 'You are in your town. You are in your country. '
    + 'All of them at once. '
    + 'Being one does not stop you being the rest.',

  figure: {
    alt: 'The three things that answer who are you, name, age and place, with '
      + 'a fourth box for what makes you yourself',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="320" y="44" text-anchor="middle" font-size="18" fill="currentColor">Who are you?</text>'
      + '<g fill="none" stroke="currentColor" stroke-width="2.5">'
      + '<rect x="40" y="80" width="160" height="96" rx="12"/>'
      + '<rect x="240" y="80" width="160" height="96" rx="12"/>'
      + '<rect x="440" y="80" width="160" height="96" rx="12"/>'
      + '</g>'
      + '<g text-anchor="middle">'
      + '<text x="120" y="116" font-size="15" fill="#0f8a4d">my name</text>'
      + '<text x="120" y="146" font-size="17" fill="currentColor">Ama Mensah</text>'
      + '<text x="320" y="116" font-size="15" fill="#0f8a4d">my age</text>'
      + '<text x="320" y="146" font-size="17" fill="currentColor">six years old</text>'
      + '<text x="520" y="116" font-size="15" fill="#0f8a4d">where I live</text>'
      + '<text x="520" y="146" font-size="17" fill="currentColor">Tema</text>'
      + '</g>'
      + '<text x="320" y="214" text-anchor="middle" font-size="15" fill="#c8433a">A first name alone is not enough. Many children share it.</text>'
      + '<rect x="130" y="250" width="380" height="96" rx="12" fill="none" stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="320" y="284" text-anchor="middle" font-size="15" fill="#0f8a4d">and what makes me myself</text>'
      + '<text x="320" y="316" text-anchor="middle" font-size="17" fill="currentColor">what I am good at, what I love doing</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'wia-1',
      ask: 'Which answer tells somebody the most about who you are?',
      kind: 'choice',
      options: ['Ama', 'My name is Ama Mensah and I live in Tema', 'Six'],
      answer: 'My name is Ama Mensah and I live in Tema',
      teach: 'It gives the full name and the place. A first name alone does '
        + 'not say which Ama, and an age alone says almost nothing.',
      level: 1,
    },
    {
      id: 'wia-2',
      ask: 'If you were lost, which is most useful to a stranger?',
      kind: 'choice',
      options: ['Your favourite food', 'Your town and family name', 'Your age'],
      answer: 'Your town and family name',
      teach: 'Those are what let somebody take you home. The others are true '
        + 'about you but will not find your house.',
      level: 2,
    },
    {
      id: 'wia-3',
      ask: 'Can you belong to your family and your country at the same time?',
      kind: 'choice',
      options: ['Yes', 'No, only one'],
      answer: 'Yes',
      teach: 'People belong to many groups at once, and all of them stay true '
        + 'together: your family, your class, your town and your country.',
      level: 2,
    },
    {
      id: 'wia-4',
      ask: 'Ama Mensah. Which part is the family name?',
      kind: 'choice',
      options: ['Ama', 'Mensah'],
      answer: 'Mensah',
      teach: 'The first name comes first. The family name comes after. So '
        + 'Ama is the first name and Mensah is the family name.',
      level: 1,
    },
    {
      id: 'wia-5',
      ask: 'What three things answer "who are you?"',
      kind: 'choice',
      options: [
        'Name, age and town',
        'Name, food and colour',
        'Age, shoes and school bag',
      ],
      answer: 'Name, age and town',
      teach: 'Your full name, your age and where you live. Those three tell '
        + 'anybody who you are.',
      level: 1,
    },
    {
      id: 'wia-6',
      ask: 'Which is the right way to write a name?',
      kind: 'choice',
      options: ['ama mensah', 'Ama mensah', 'Ama Mensah'],
      answer: 'Ama Mensah',
      teach: 'Both parts of a name start with a big letter, every time. Put '
        + 'one space between them.',
      level: 2,
    },
    {
      id: 'wia-7',
      ask: 'Kofi says, "I am six years old." Which thing has he told you?',
      kind: 'choice',
      options: ['His name', 'His age', 'His town'],
      answer: 'His age',
      teach: 'Years old tells you age. He still needs to say his full name '
        + 'and his town.',
      level: 2,
    },
    {
      id: 'wia-8',
      ask: 'Why is "Ama" not enough if you are lost?',
      kind: 'choice',
      options: [
        'Many children are called Ama',
        'Ama is a short name',
        'Strangers do not like names',
      ],
      answer: 'Many children are called Ama',
      teach: 'A first name does not say which Ama. Your family name and town '
        + 'narrow it down to you.',
      level: 2,
    },
    {
      id: 'wia-9',
      ask: 'Two boys are both called Kofi. One sings well. One runs fast. '
        + 'What does that show?',
      kind: 'choice',
      options: [
        'They are the same person',
        'What you are good at is part of who you are',
        'Only names matter',
      ],
      answer: 'What you are good at is part of who you are',
      teach: 'A name says which person. What each one is good at and loves '
        + 'doing says who they are.',
      level: 3,
    },
  ],
})

/* ── greetings and courtesies ─────────────────────────────────────────────── */

teach({
  topicId: 'greetings-ghl',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Greet by the time of day and by who the person is. An elder is '
      + 'greeted differently from a friend.',
    method: [
      'Stop and look at the person.',
      'Notice the time of day and who they are.',
      'Greet them, then wait for the reply.',
    ],
  },

  why:
    'You walk into the house. '
    + 'Your grandmother is sitting there. '
    + 'You say hello the way you say it to your friend. '
    + 'She looks at you and says nothing. '
    + 'You did greet her. '
    + 'Why was it wrong?',

  idea:
    'A greeting changes with the time of day. '
    + 'It changes with who you greet too. '
    + 'In the morning you greet one way. '
    + 'Later in the day you greet another way. '
    + 'You greet an elder with more respect than a friend. '
    + 'Getting it right shows you were brought up well.',

  mechanism:
    'A greeting is not just a sound. It shows respect. '
    + 'In Ghana you show respect by noticing who a person is. '
    + 'How old are they? Who are they? '
    + 'That is why one greeting does not fit everybody. '
    + 'Greet an elder the way you greet a friend '
    + 'and you have said you did not notice them. '
    + 'The noticing matters more than the words.',

  recap:
    'A greeting is the first thing you say to a person. '
    + 'You say it before you say anything else. '
    + 'In Twi, maakye means good morning. '
    + 'In Ga, ojekoo means good morning. '
    + 'In Ewe, ŋdi means good morning. '
    + 'Each language has its own. '
    + 'Each one has more than one, too. '
    + 'This lesson helps you pick the right one.',

  method: [
    'Look at the person and stop what you are doing.',
    'Notice the time of day. Morning, afternoon or evening.',
    'Notice who they are. Older than you, or your own age.',
    'Greet with the right words for both.',
    'Wait for their reply before you say what you came to say.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You meet your teacher in the morning. What do you do first?',
      steps: [
        'Stop, and look at her.',
        'It is morning, and she is older than you.',
        'Greet her with the morning greeting, respectfully.',
      ],
      answer: 'Greet her good morning, properly, before anything else.',
    },
    {
      level: 2,
      ask: 'Why do you not greet an elder the same way you greet your friend?',
      steps: [
        'A greeting shows respect, not just hello.',
        'An elder is owed more respect than somebody your own age.',
        'Using the friend greeting says you did not notice who they were.',
      ],
      answer: 'Because the greeting shows whether you noticed who they are.',
    },
    {
      level: 3,
      ask: 'You arrive somewhere and several people are sitting there. What is '
        + 'the courteous thing to do?',
      steps: [
        'Greet, rather than walking in silently.',
        'Where there are elders, greet them first.',
        'Then the others.',
        'Then say why you came.',
      ],
      answer: 'Greet everyone, elders first, before saying your business.',
    },
  ],

  traps: [
    {
      mistake: 'Starting with what you want before greeting.',
      why: 'It tells the person they are a means to something. Greet first, '
        + 'always, then ask.',
    },
    {
      mistake: 'Using the evening greeting in the afternoon.',
      why: 'The time of day changes the words. Notice where the sun is before '
        + 'you speak.',
    },
    {
      mistake: 'Greeting an elder while still playing or looking away.',
      why: 'The words are only half of it. Stopping and looking at them is '
        + 'the other half.',
    },
  ],

  extension:
    'In many Ghanaian languages the reply is set too. '
    + 'So a greeting is not one line. '
    + 'It is a short back and forth. '
    + 'Learn the reply as well as the greeting. '
    + 'Then you can take your part, not just start it.',

  figure: {
    alt: 'A greeting chosen by two things at once, the time of day and who is '
      + 'being greeted, shown as a grid',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="320" y="40" text-anchor="middle" font-size="17" fill="currentColor">A greeting is chosen by two things</text>'
      + '<g fill="none" stroke="currentColor" stroke-width="2">'
      + '<path d="M200 70h380M200 70v250"/>'
      + '<path d="M200 170h380M200 240h380"/>'
      + '<path d="M390 70v250"/>'
      + '</g>'
      + '<text x="295" y="98" text-anchor="middle" font-size="16" font-weight="700" fill="#0f8a4d">an elder</text>'
      + '<text x="485" y="98" text-anchor="middle" font-size="16" font-weight="700" fill="#0f8a4d">a friend your age</text>'
      + '<g font-size="16" font-weight="700" fill="#0f8a4d" text-anchor="end">'
      + '<text x="188" y="146">morning</text><text x="188" y="216">afternoon</text><text x="188" y="286">evening</text>'
      + '</g>'
      + '<g font-size="15" fill="currentColor" text-anchor="middle">'
      + '<text x="295" y="146">respectful</text><text x="485" y="146">friendly</text>'
      + '<text x="295" y="216">respectful</text><text x="485" y="216">friendly</text>'
      + '<text x="295" y="286">respectful</text><text x="485" y="286">friendly</text>'
      + '</g>'
      + '<text x="320" y="356" text-anchor="middle" font-size="15" fill="#c8433a">Greet first, then say what you came to say.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'ghl-1',
      ask: 'What should you do before you ask an elder for something?',
      kind: 'choice',
      options: ['Greet them', 'Say your name', 'Wait to be spoken to'],
      answer: 'Greet them',
      teach: 'Asking first tells the person they are only a means to what you '
        + 'want. Greeting first is the courtesy, then the request.',
      level: 1,
    },
    {
      id: 'ghl-2',
      ask: 'Does the greeting change with the time of day?',
      kind: 'choice',
      options: ['Yes', 'No'],
      answer: 'Yes',
      teach: 'Morning, afternoon and evening each have their own greeting. '
        + 'Notice the time before you speak.',
      level: 1,
    },
    {
      id: 'ghl-3',
      ask: 'You arrive where several people are sitting, including elders. Who '
        + 'do you greet first?',
      kind: 'choice',
      options: ['The elders', 'Whoever is nearest', 'Nobody, just sit'],
      answer: 'The elders',
      teach: 'Elders are greeted first, then the others, and only then do you '
        + 'say why you came.',
      level: 2,
    },
    {
      id: 'ghl-4',
      ask: 'In Twi, what does maakye mean?',
      kind: 'choice',
      options: ['Good night', 'Good morning', 'Thank you'],
      answer: 'Good morning',
      teach: 'Maakye is the Twi morning greeting. In Ga it is ojekoo. In Ewe '
        + 'it is ŋdi.',
      level: 1,
    },
    {
      id: 'ghl-5',
      ask: 'What do you do when you greet somebody?',
      kind: 'choice',
      options: [
        'Keep playing and shout',
        'Stop and look at them',
        'Look away',
      ],
      answer: 'Stop and look at them',
      teach: 'The words are only half of a greeting. Stopping and looking at '
        + 'the person is the other half.',
      level: 1,
    },
    {
      id: 'ghl-6',
      ask: 'Which two things change the greeting you use?',
      kind: 'choice',
      options: [
        'The weather and your clothes',
        'The time of day and who the person is',
        'Your name and your age',
      ],
      answer: 'The time of day and who the person is',
      teach: 'Notice the time: morning, afternoon or evening. Notice the '
        + 'person: an elder or somebody your own age.',
      level: 2,
    },
    {
      id: 'ghl-7',
      ask: 'Abena greets her grandmother the way she greets her friend. Why '
        + 'is that wrong?',
      kind: 'choice',
      options: [
        'It shows she did not notice who her grandmother is',
        'Grandmothers do not like greetings',
        'It is not wrong',
      ],
      answer: 'It shows she did not notice who her grandmother is',
      teach: 'A greeting shows respect. An elder is greeted with more respect '
        + 'than a friend.',
      level: 2,
    },
    {
      id: 'ghl-8',
      ask: 'You greet an elder. What do you do next?',
      kind: 'choice',
      options: [
        'Wait for their reply',
        'Walk away at once',
        'Ask for what you want straight away',
      ],
      answer: 'Wait for their reply',
      teach: 'A greeting is a short back and forth. Wait for the reply. Then '
        + 'say why you came.',
      level: 3,
    },
  ],
})

/* ── naming the parts of a computer ───────────────────────────────────────── */

teach({
  topicId: 'name-the-parts',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A computer has a keyboard, a mouse, a monitor and a system '
      + 'unit. Each one has its own job.',
    method: [
      'Find the screen. That is the monitor.',
      'Find the keys and the mouse. You use those.',
      'The box that does the work is the system unit.',
    ],
  },

  why:
    'A computer is on the table in front of you. '
    + 'Your teacher says, use the mouse. '
    + 'You do not know which thing on the table is the mouse. '
    + 'You can see a screen, a box, a flat thing with keys, '
    + 'and a small thing with a wire. '
    + 'How do you work out which is which?',

  idea:
    'A computer is made of parts, and each part has one job. The monitor is '
    + 'the screen that shows you things. The keyboard is for typing. The mouse '
    + 'is for pointing. The system unit is the box that does the thinking.',

  mechanism:
    'The parts do three jobs. '
    + 'Some put things in. Some show things to you. '
    + 'And one does the work. '
    + 'The keyboard puts in. So does the mouse. '
    + 'The monitor shows. '
    + 'The system unit does the work. '
    + 'Now you can place a part you have never seen. '
    + 'A printer shows. A microphone puts in.',

  recap:
    'A machine is a thing people build to do a job. '
    + 'A grinding mill grinds corn. '
    + 'A sewing machine sews. '
    + 'A computer is a machine too, '
    + 'but it does not do just one job. '
    + 'It can write, count, draw and play music. '
    + 'A machine like that is built from several parts. '
    + 'Each part does its own piece of the work.',

  method: [
    'Ask what the part does.',
    'Does it let you put something in? Keyboard, mouse.',
    'Does it show you something? Monitor.',
    'Or does it do the work out of sight? That is the system unit.',
    'Name it, and say its job in the same breath.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Which part do you type on?',
      steps: [
        'Typing means putting letters in.',
        'The part with all the letters on it is the keyboard.',
      ],
      answer: 'The keyboard.',
    },
    {
      level: 2,
      ask: 'The screen is blank but the machine is on. Which part is probably '
        + 'the problem?',
      steps: [
        'The system unit does the thinking, and it is on.',
        'The monitor is the part that shows you things.',
        'Nothing is showing, so the fault is most likely with the monitor or '
          + 'its cable.',
      ],
      answer: 'The monitor.',
    },
    {
      level: 3,
      ask: 'A printer is not on your list. Is it a part that puts in, shows, '
        + 'or works?',
      steps: [
        'It does not let you put anything into the computer.',
        'It does not think.',
        'It takes what the computer has and shows it to you, on paper instead '
          + 'of on a screen.',
      ],
      answer: 'It shows, like the monitor.',
    },
  ],

  traps: [
    {
      mistake: 'Calling the monitor "the computer".',
      why: 'The screen only shows. The box that does the work is the system '
        + 'unit, and on a laptop both are built into one case.',
    },
    {
      mistake: 'Thinking the mouse types.',
      why: 'The mouse points and clicks. Letters come from the keyboard.',
    },
    {
      mistake: 'Learning the names without the jobs.',
      why: 'The name on its own is a word to forget. The job is what lets you '
        + 'work out where a new part belongs.',
    },
  ],

  extension:
    'A phone has all four parts too. So does a laptop. '
    + 'They are just packed into one case. '
    + 'The screen is the monitor. '
    + 'The touch screen does the job of the mouse. '
    + 'The thinking part is inside. '
    + 'Nothing is missing. It is only hidden.',

  figure: {
    alt: 'A monitor, keyboard, mouse and system unit, each labelled with its '
      + 'name and whether it puts information in, shows it, or does the work',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<g fill="none" stroke="currentColor" stroke-width="3">'
      /* monitor */
      + '<rect x="70" y="60" width="190" height="124" rx="8"/>'
      + '<path d="M150 184v26h30v-26M130 210h70"/>'
      /* keyboard */
      + '<rect x="70" y="250" width="190" height="52" rx="7"/>'
      + '<path d="M86 266h158M86 282h100M200 282h44"/>'
      /* mouse */
      + '<rect x="300" y="250" width="56" height="80" rx="26"/>'
      + '<path d="M328 250v28"/>'
      /* system unit */
      + '<rect x="430" y="60" width="130" height="240" rx="10"/>'
      + '<path d="M450 90h90M450 112h90"/>'
      + '<circle cx="495" cy="160" r="12"/>'
      + '</g>'
      + '<g text-anchor="middle">'
      + '<text x="165" y="236" font-size="17" fill="currentColor">monitor</text>'
      + '<text x="165" y="330" font-size="17" fill="currentColor">keyboard</text>'
      + '<text x="328" y="356" font-size="17" fill="currentColor">mouse</text>'
      + '<text x="495" y="330" font-size="17" fill="currentColor">system unit</text>'
      + '</g>'
      + '<g text-anchor="middle" font-size="14">'
      + '<text x="165" y="258" fill="#0f8a4d">it shows</text>'
      + '<text x="165" y="352" fill="#0f8a4d">puts letters in</text>'
      + '<text x="328" y="378" fill="#0f8a4d">points</text>'
      + '<text x="495" y="352" fill="#0f8a4d">does the work</text>'
      + '</g>'
      + '</svg>',
  },

  questions: [
    {
      id: 'ntp-1',
      ask: 'Which part shows you what the computer is doing?',
      kind: 'choice',
      options: ['The keyboard', 'The monitor', 'The mouse'],
      answer: 'The monitor',
      teach: 'The monitor is the screen, and showing is its only job. The '
        + 'keyboard and mouse put things in instead.',
      level: 1,
    },
    {
      id: 'ntp-2',
      ask: 'Which part does the thinking?',
      kind: 'choice',
      options: ['The system unit', 'The monitor', 'The keyboard'],
      answer: 'The system unit',
      teach: 'The system unit is the box that does the work. The screen only '
        + 'shows you the result of it.',
      level: 2,
    },
    {
      id: 'ntp-3',
      ask: 'A printer puts things on paper. Which job is that?',
      kind: 'choice',
      options: ['It puts information in', 'It shows information', 'It thinks'],
      answer: 'It shows information',
      teach: 'It shows, like the monitor, just on paper instead of a screen. '
        + 'That is how you place a part you have never met.',
      level: 3,
    },
    {
      id: 'ntp-4',
      ask: 'Which part do you type on?',
      kind: 'choice',
      options: ['The mouse', 'The keyboard', 'The monitor'],
      answer: 'The keyboard',
      teach: 'Typing puts letters in. The keyboard has all the letters on it. '
        + 'The mouse points and clicks.',
      level: 1,
    },
    {
      id: 'ntp-5',
      ask: 'Which part do you use to point and click?',
      kind: 'choice',
      options: ['The mouse', 'The system unit', 'The monitor'],
      answer: 'The mouse',
      teach: 'The mouse is the small thing with a wire. You move it to point, '
        + 'and press it to click.',
      level: 1,
    },
    {
      id: 'ntp-6',
      ask: 'The keyboard and the mouse do the same kind of job. What is it?',
      kind: 'choice',
      options: ['They show things', 'They put things in', 'They think'],
      answer: 'They put things in',
      teach: 'Both let you put something into the computer. The monitor '
        + 'shows. The system unit does the work.',
      level: 2,
    },
    {
      id: 'ntp-7',
      ask: 'The machine is on, but the screen is blank. Which part is '
        + 'probably the problem?',
      kind: 'choice',
      options: ['The keyboard', 'The mouse', 'The monitor'],
      answer: 'The monitor',
      teach: 'The monitor is the part that shows. Nothing is showing, so look '
        + 'at the monitor or its cable first.',
      level: 2,
    },
    {
      id: 'ntp-8',
      ask: 'A microphone takes your voice into the computer. Which job is '
        + 'that?',
      kind: 'choice',
      options: ['It shows', 'It puts in', 'It thinks'],
      answer: 'It puts in',
      teach: 'Ask what the part does. The microphone takes your voice in, '
        + 'like the keyboard takes letters in.',
      level: 3,
    },
  ],
})
