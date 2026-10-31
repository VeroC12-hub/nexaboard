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

  idea:
    'You have a name, an age, and a place you come from. Those three answer '
    + 'the question "who are you?" for anybody who asks. But you are more than '
    + 'your name. You are also the things you are good at, the things you '
    + 'like, and the people you belong to.',

  mechanism:
    'Knowing these things is not only politeness. If you are ever lost, your '
    + 'full name and your town are what let somebody take you home, and a '
    + 'first name alone is not enough because many children share it. That is '
    + 'the reason this is worth learning properly rather than roughly.',

  recap:
    'You answer questions in full sentences. "My name is Ama" rather than '
    + '"Ama". The same habit is used here.',

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
        + 'it the way you learned your name.',
    },
    {
      mistake: 'Thinking you must be the best at something for it to count.',
      why: 'What you love doing is yours whether or not you are the best at '
        + 'it. That is part of who you are too.',
    },
  ],

  extension:
    'People belong to more than one group at once, and all of them are true '
    + 'together. You are a member of your family, your class, your town and '
    + 'your country, and being one does not stop you being the others.',

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
  ],
})

/* ── greetings and courtesies ─────────────────────────────────────────────── */

teach({
  topicId: 'greetings-ghl',
  source: 'WRITTEN',
  approved: true,

  idea:
    'A greeting changes with the time of day and with who you are greeting. '
    + 'In the morning you greet one way, in the afternoon another. And you '
    + 'greet an elder with more respect than you greet a friend of your own '
    + 'age. Getting it right is how you show you were brought up well.',

  mechanism:
    'A greeting is not only a sound, it is a sign of respect, and respect in '
    + 'Ghana is shown by noticing a person’s age and standing. That is why '
    + 'there is no single greeting for everybody: using the one you would use '
    + 'with a friend on an elder says you did not notice who they were. The '
    + 'words matter less than the noticing.',

  recap:
    'You already greet people at home. Think about how you greet your mother '
    + 'in the morning, and how that is different from how you call a friend '
    + 'across the yard.',

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
    'In many Ghanaian languages the reply to a greeting is fixed too, so a '
    + 'greeting is a short exchange rather than one line. Learning the reply '
    + 'as well as the greeting is what lets you take part properly rather '
    + 'than only start.',

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
  ],
})

/* ── naming the parts of a computer ───────────────────────────────────────── */

teach({
  topicId: 'name-the-parts',
  source: 'WRITTEN',
  approved: true,

  idea:
    'A computer is made of parts, and each part has one job. The monitor is '
    + 'the screen that shows you things. The keyboard is for typing. The mouse '
    + 'is for pointing. The system unit is the box that does the thinking.',

  mechanism:
    'The parts split into three jobs: things that put information in, things '
    + 'that show it to you, and the one thing that does the work. The keyboard '
    + 'and the mouse put in. The monitor shows. The system unit works. Once '
    + 'you see that, you can place a part you have never met before: a printer '
    + 'shows, a microphone puts in.',

  recap:
    'You have seen a screen before, on a phone or a television. A computer '
    + 'screen does the same thing: it shows you what the machine is doing.',

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
    'A phone and a laptop have all four of these parts too, they are just '
    + 'packed into one case. The screen is the monitor, the touch screen is '
    + 'doing the job of the mouse, and the thinking part is inside. Nothing is '
    + 'missing, it is only hidden.',

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
  ],
})
