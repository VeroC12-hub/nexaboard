/**
 * Stored lessons for the Basic 3 topics whose subjects have one or two each:
 * Our World Our People, Ghanaian Language, and Computing.
 *
 * Kept in one file for the reason the Basic 1 file gives: three files of one
 * or two lessons each are three files to find rather than one. When a subject
 * grows past this, it gets its own file.
 *
 * Written short, at about grade 3. See `basic3-english.ts`.
 *
 * ── The Ghanaian Language lessons name no single language ───────────────────
 *
 * Which language a child learns depends on where their school is, and the app
 * does not know. So these teach what holds across the written languages of
 * Ghana, and name particular letters as examples with the language they come
 * from. The teacher fills in which set is theirs.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── our national symbols ─────────────────────────────────────────────────── */

teach({
  topicId: 'national-symbols',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Ghana has symbols that stand for the whole country. '
    + 'The flag has three bands: red, gold and green. '
    + 'A black star sits in the middle of the gold. '
    + 'There is also the coat of arms, and the national anthem, '
    + 'which begins "God bless our homeland Ghana".',

  mechanism:
    'Every part of the flag was chosen to mean something. '
    + 'Red is for the blood of those who died for our freedom. '
    + 'Gold is for the wealth under our ground. '
    + 'Green is for our forests and our farms. '
    + 'The black star stands for the freedom of African people. '
    + 'So the flag is not a pattern. It is a short story about Ghana, '
    + 'told in colours so that everybody can read it.',

  recap:
    'You know your community and the people in it. '
    + 'A country is many communities together, '
    + 'and these symbols belong to all of them at once.',

  method: [
    'Name the symbol.',
    'Say what it looks like, in order. For the flag, red at the top.',
    'Say what each part stands for.',
    'Say when people use it. A flag is raised at school and at big events.',
    'Stand still and quiet when the anthem is sung. That is part of it too.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What are the three colours of the flag of Ghana, from the top?',
      steps: [
        'Picture the flag.',
        'The top band is red. The middle is gold. The bottom is green.',
      ],
      answer: 'Red, gold and green.',
    },
    {
      level: 2,
      ask: 'What does the green band stand for?',
      steps: [
        'Think about what is green in Ghana.',
        'Our forests and our farms.',
      ],
      answer: 'Our forests and the land we farm.',
    },
    {
      level: 3,
      ask: 'Why is the star black, and why is it on the flag at all?',
      steps: [
        'The star stands for the freedom of African people.',
        'Ghana was the first country in this part of Africa to be free.',
        'So the star speaks for more than Ghana alone.',
      ],
      answer: 'It stands for African freedom, '
        + 'and it is there because Ghana led the way to it.',
    },
  ],

  traps: [
    {
      mistake: 'Putting the colours in the wrong order.',
      why: 'Red is at the top and green at the bottom. '
        + 'Turn it over and it is a different flag.',
    },
    {
      mistake: 'Calling the gold band yellow.',
      why: 'It is gold, and that is the point. '
        + 'It stands for the wealth in our ground.',
    },
    {
      mistake: 'Talking while the anthem is sung.',
      why: 'How people behave around a symbol is part of what it means. '
        + 'Stand still and stay quiet.',
    },
  ],

  extension:
    'Many countries use red, gold and green. '
    + 'Ghana was the first in Africa to use them after independence, '
    + 'and others chose them afterwards. '
    + 'The black star has travelled too. '
    + 'You can see it on our football team and at Black Star Square.',

  figure: {
    alt: 'The flag of Ghana with its three bands and the black star, each '
      + 'band labelled with what it stands for',
    svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<rect x="30" y="40" width="240" height="50" fill="#ce1126"/>'
      + '<rect x="30" y="90" width="240" height="50" fill="#fcd116"/>'
      + '<rect x="30" y="140" width="240" height="50" fill="#006b3f"/>'
      + '<rect x="30" y="40" width="240" height="150" fill="none" '
      + 'stroke="currentColor" stroke-width="2"/>'
      + '<path d="M150 90 l 11 33 h 35 l -28 21 l 11 33 l -29 -21 l -29 21 '
      + 'l 11 -33 l -28 -21 h 35 z" fill="#000000"/>'
      + '<g font-size="19" fill="currentColor">'
      + '<text x="288" y="72">red: those who died</text>'
      + '<text x="288" y="122">gold: our wealth</text>'
      + '<text x="288" y="172">green: forest and farm</text>'
      + '</g>'
      + '<text x="150" y="226" text-anchor="middle" font-size="19" fill="currentColor">'
      + 'the black star: African freedom</text>'
      + '<text x="240" y="268" text-anchor="middle" font-size="19" fill="#0f8a4d">'
      + 'Not a pattern. A story told in colours.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'ns-1',
      ask: 'Which colour is at the top of the flag of Ghana?',
      kind: 'choice',
      options: ['Red', 'Gold', 'Green'],
      answer: 'Red',
      teach: 'Red is at the top, then gold, then green. '
        + 'Red stands for those who died for our freedom.',
      level: 1,
    },
    {
      id: 'ns-2',
      ask: 'What does the gold band stand for?',
      kind: 'choice',
      options: ['Our forests', 'The wealth under our ground', 'The sun'],
      answer: 'The wealth under our ground',
      teach: 'Gold stands for the riches in our land. '
        + 'The forests and farms are the green band.',
      level: 2,
    },
    {
      id: 'ns-3',
      ask: 'What does the black star stand for?',
      kind: 'choice',
      options: [
        'The freedom of African people',
        'The night sky over Ghana',
        'The football team',
      ],
      answer: 'The freedom of African people',
      teach: 'It stands for African freedom. '
        + 'The football team took its name from the star, not the other way '
        + 'round.',
      level: 2,
    },
  ],
})

/* ── everyday conversation ────────────────────────────────────────────────── */

teach({
  topicId: 'everyday-talk-ghl',
  source: 'WRITTEN',
  approved: true,

  idea:
    'A conversation is not one line. It goes back and forth. '
    + 'You greet. They reply. You ask. They answer. Then they ask you. '
    + 'In your own language you can do this about home, school and the market.',

  mechanism:
    'Here is what makes a conversation keep going. '
    + 'You have to give the other person something to answer. '
    + 'Say only "I am fine" and the talk stops there. '
    + 'Say "I am fine. And you?" and it carries on. '
    + 'So the skill is not knowing more words. '
    + 'It is handing the turn back.',

  recap:
    'You know how to greet, and you know the greeting changes '
    + 'with the time of day and with who you are greeting. '
    + 'A conversation begins where that greeting ends.',

  method: [
    'Greet first. Use the right greeting for the person and the time.',
    'Wait for their reply. Do not rush on.',
    'Ask one question. Keep it short.',
    'Listen to the whole answer.',
    'Answer their question, then hand the turn back.',
    'Do not know a word? Say it in English and carry on. '
      + 'Stopping is worse than mixing.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You meet a friend in the morning. What do you say first?',
      steps: [
        'It is morning, and this person is your own age.',
        'Greet them with the morning greeting for a friend.',
      ],
      answer: 'The morning greeting. Nothing else comes before it.',
    },
    {
      level: 2,
      ask: 'Your friend asks how you are and you say you are fine. '
        + 'Why does the talk stop there?',
      steps: [
        'You answered their question.',
        'But you gave them nothing to answer.',
      ],
      answer: 'Because you did not hand the turn back. '
        + 'Add a question of your own.',
    },
    {
      level: 3,
      ask: 'You are talking at the market and you do not know the word for '
        + 'something. What do you do?',
      steps: [
        'Stopping ends the conversation.',
        'Point at the thing, or say the English word.',
        'Then keep going in your language.',
      ],
      answer: 'Point, or use the English word, and carry on. '
        + 'Keeping the talk alive matters more than one word.',
    },
  ],

  traps: [
    {
      mistake: 'Answering with one word and waiting.',
      why: 'The other person has nothing to say back. '
        + 'Add a short question of your own.',
    },
    {
      mistake: 'Starting to talk before you greet.',
      why: 'The greeting is not optional here. '
        + 'Going straight to your question is rude.',
    },
    {
      mistake: 'Going quiet because you lost a word.',
      why: 'Everyone loses words, even grown ups. '
        + 'Point, or borrow the English word, and keep going.',
    },
  ],

  extension:
    'Listen to two older people talking in your language. '
    + 'Count how often the turn changes hands. '
    + 'You will find it is much more often than you expected. '
    + 'That is what makes it a conversation and not two speeches.',

  questions: [
    {
      id: 'etg-1',
      ask: 'What comes first in a conversation?',
      kind: 'choice',
      options: ['Your question', 'The greeting', 'Their answer'],
      answer: 'The greeting',
      teach: 'You greet first, and you wait for the reply. '
        + 'Only then do you say what you came to say.',
      level: 1,
    },
    {
      id: 'etg-2',
      ask: 'How do you keep a conversation going?',
      kind: 'choice',
      options: [
        'Use longer words',
        'Hand the turn back with a question',
        'Talk for longer',
      ],
      answer: 'Hand the turn back with a question',
      teach: 'Give the other person something to answer. '
        + 'That is what keeps it moving.',
      level: 2,
    },
    {
      id: 'etg-3',
      ask: 'You do not know a word. What is best?',
      kind: 'choice',
      options: [
        'Stop talking',
        'Point or use the English word and carry on',
        'Change the subject',
      ],
      answer: 'Point or use the English word and carry on',
      teach: 'Keeping the talk alive matters more than one missing word. '
        + 'You will pick the word up by hearing it.',
      level: 2,
    },
  ],
})

/* ── writing sentences in the language ────────────────────────────────────── */

teach({
  topicId: 'write-sentences-ghl',
  source: 'WRITTEN',
  approved: true,

  idea:
    'You can already read the letters of your language. '
    + 'Now you write them. '
    + 'A sentence starts with a capital letter and ends with a full stop, '
    + 'just as in English. '
    + 'The difference is the letters you have to get right.',

  mechanism:
    'The extra letters are where mistakes happen, and here is why. '
    + 'They look close to English letters. '
    + 'So a hand that has been writing English all day writes e for ɛ, '
    + 'and o for ɔ. '
    + 'But those are different letters, and they make different sounds. '
    + 'Swap them and you have written another word. '
    + 'So slow down on those letters. '
    + 'Your hand will try to help, and it will be wrong.',

  recap:
    'You know the letters your language has that English does not. '
    + 'Writing them is the same job as reading them, the other way round.',

  method: [
    'Say the sentence out loud first.',
    'Say it again slowly and listen for each sound.',
    'Write a letter for each sound you hear.',
    'Take care with the extra letters. Form them properly.',
    'Put a capital at the start and a full stop at the end.',
    'Read it back out loud. Does it say what you meant?',
  ],

  worked: [
    {
      level: 1,
      ask: 'What two marks does every sentence need?',
      steps: [
        'One at the very beginning.',
        'One at the very end.',
      ],
      answer: 'A capital letter at the start and a full stop at the end.',
    },
    {
      level: 2,
      ask: 'You wrote e where the word needs ɛ. Does it matter?',
      steps: [
        'They are two different letters.',
        'They make two different sounds.',
        'A different sound can be a different word.',
      ],
      answer: 'Yes. You may have written a word you did not mean.',
    },
    {
      level: 3,
      ask: 'How do you check your own writing without a teacher?',
      steps: [
        'Read it back out loud, slowly.',
        'Listen to each sound as you say it.',
        'Does every sound you hear have a letter on the page?',
      ],
      answer: 'Read it aloud and match the sounds to the letters. '
        + 'A missing sound shows up as soon as you say it.',
    },
  ],

  traps: [
    {
      mistake: 'Writing e for ɛ, or o for ɔ.',
      why: 'Your hand is used to English. '
        + 'These are different letters. Slow down on them.',
    },
    {
      mistake: 'Spelling the word the way an English reader would.',
      why: 'Your language has its own spelling, '
        + 'and in it one letter means one sound. Trust that.',
    },
    {
      mistake: 'Never reading your writing back.',
      why: 'Reading it out loud is the only check you can do alone. '
        + 'Do it every time.',
    },
  ],

  extension:
    'Try writing something somebody said to you at home. '
    + 'Then read it back to them. '
    + 'If they hear what they said, your spelling worked. '
    + 'That is the real test, and it does not need a teacher.',

  questions: [
    {
      id: 'wsg-1',
      ask: 'What goes at the end of a sentence?',
      kind: 'choice',
      options: ['A full stop', 'A capital letter', 'Nothing'],
      answer: 'A full stop',
      teach: 'A capital starts it and a full stop ends it. '
        + 'That is true in your language too.',
      level: 1,
    },
    {
      id: 'wsg-2',
      ask: 'Why do people write e instead of ɛ by mistake?',
      kind: 'choice',
      options: [
        'The letters look alike and the hand is used to English',
        'They mean the same thing',
        'It does not matter which you use',
      ],
      answer: 'The letters look alike and the hand is used to English',
      teach: 'They look close but they are different letters with different '
        + 'sounds. Slow down when you write them.',
      level: 2,
    },
    {
      id: 'wsg-3',
      ask: 'How can you check your own writing with nobody to help?',
      kind: 'choice',
      options: [
        'Read it back out loud',
        'Count the words',
        'Copy it again neatly',
      ],
      answer: 'Read it back out loud',
      teach: 'Say it slowly and match each sound to a letter. '
        + 'A missing or wrong letter shows up at once.',
      level: 2,
    },
  ],
})

/* ── input and output ─────────────────────────────────────────────────────── */

teach({
  topicId: 'input-output',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Some parts of a computer put things in. Those are input. '
    + 'A keyboard, a mouse, a microphone. '
    + 'Some parts bring things out. Those are output. '
    + 'A screen, a speaker, a printer.',

  mechanism:
    'There is one question that sorts any device, '
    + 'and it is not what the thing looks like. '
    + 'Ask: which way is the information going? '
    + 'From you into the machine is input. '
    + 'From the machine out to you is output. '
    + 'That is why a microphone and a speaker look similar '
    + 'and sit in opposite groups. '
    + 'The direction decides, not the shape.',

  recap:
    'You can name the parts of a computer: the keyboard, the mouse, '
    + 'the monitor and the system unit. '
    + 'Now you sort them by what they do.',

  method: [
    'Point at the device.',
    'Ask where the information starts.',
    'Does it start with you? Then it is input.',
    'Does it start in the machine? Then it is output.',
    'Check it with a sentence. "I type and the letters go in." Input.',
    'Some devices do both. A touch screen shows and is touched.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Is a keyboard input or output?',
      steps: [
        'You press the keys.',
        'The letters go into the machine.',
      ],
      answer: 'Input.',
    },
    {
      level: 2,
      ask: 'A microphone and a speaker look alike inside. '
        + 'Why are they in different groups?',
      steps: [
        'A microphone takes your voice into the machine.',
        'A speaker brings sound out of the machine to you.',
        'Same shape, opposite direction.',
      ],
      answer: 'Because direction decides the group, not shape. '
        + 'One is input and the other is output.',
    },
    {
      level: 3,
      ask: 'Which group does a touch screen belong to?',
      steps: [
        'It shows you pictures. That is output.',
        'You touch it to choose. That is input.',
        'Both are true at the same time.',
      ],
      answer: 'Both. Some devices do two jobs in one.',
    },
  ],

  traps: [
    {
      mistake: 'Sorting by what the device looks like.',
      why: 'A microphone and a speaker look alike and do opposite jobs. '
        + 'Ask about direction instead.',
    },
    {
      mistake: 'Calling a printer input because you give it something.',
      why: 'You give it an instruction, but the paper comes out to you. '
        + 'The result leaves the machine, so it is output.',
    },
    {
      mistake: 'Forcing every device into one group.',
      why: 'A touch screen is both. '
        + 'So is a headset with a microphone on it.',
    },
  ],

  extension:
    'A phone is full of input you never think about. '
    + 'It knows when you turn it sideways. '
    + 'It knows how bright the room is. '
    + 'Those are sensors, and they are input too, '
    + 'even though you never pressed anything.',

  figure: {
    alt: 'A computer in the middle with input devices and arrows pointing in '
      + 'on one side, and output devices with arrows pointing out on the other',
    svg: '<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<rect x="186" y="96" width="108" height="86" rx="10" fill="none" '
      + 'stroke="currentColor" stroke-width="3"/>'
      + '<text x="240" y="146" text-anchor="middle" font-size="19" fill="currentColor">'
      + 'computer</text>'
      + '<g font-size="19" fill="currentColor" text-anchor="end">'
      + '<text x="150" y="70">keyboard</text><text x="150" y="112">mouse</text>'
      + '<text x="150" y="154">microphone</text>'
      + '</g>'
      + '<g stroke="#0f8a4d" stroke-width="2.5" fill="none">'
      + '<path d="M158 64 L182 104"/><path d="M158 106h22"/><path d="M158 148 L182 160"/>'
      + '</g>'
      + '<g fill="#0f8a4d">'
      + '<path d="M182 104 l -12 -2 l 4 -9 z"/><path d="M180 106 l -11 -5 v 10 z"/>'
      + '<path d="M182 160 l -12 2 l 5 -9 z"/>'
      + '</g>'
      + '<g font-size="19" fill="currentColor">'
      + '<text x="330" y="70">screen</text><text x="330" y="112">speaker</text>'
      + '<text x="330" y="154">printer</text>'
      + '</g>'
      + '<g stroke="#0f8a4d" stroke-width="2.5" fill="none">'
      + '<path d="M298 104 L322 64"/><path d="M300 106h22"/><path d="M298 160 L322 148"/>'
      + '</g>'
      + '<g fill="#0f8a4d">'
      + '<path d="M322 64 l -4 11 l -8 -6 z"/><path d="M322 106 l -11 -5 v 10 z"/>'
      + '<path d="M322 148 l -4 -11 l -8 7 z"/>'
      + '</g>'
      + '<text x="120" y="222" text-anchor="middle" font-size="20" '
      + 'font-weight="700" fill="#0f8a4d">input: goes in</text>'
      + '<text x="368" y="222" text-anchor="middle" font-size="20" '
      + 'font-weight="700" fill="#0f8a4d">output: comes out</text>'
      + '<text x="240" y="262" text-anchor="middle" font-size="19" fill="currentColor">'
      + 'Ask which way it is going.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'io-1',
      ask: 'Is a printer input or output?',
      kind: 'choice',
      options: ['Input', 'Output'],
      answer: 'Output',
      teach: 'The paper comes out of the machine to you. '
        + 'That direction makes it output.',
      level: 1,
    },
    {
      id: 'io-2',
      ask: 'What question tells you which group a device is in?',
      kind: 'choice',
      options: [
        'What does it look like?',
        'Which way is the information going?',
        'How big is it?',
      ],
      answer: 'Which way is the information going?',
      teach: 'Into the machine is input. Out to you is output. '
        + 'Shape tells you nothing: a microphone and a speaker look alike.',
      level: 2,
    },
    {
      id: 'io-3',
      ask: 'A touch screen shows pictures and you tap it. Which is it?',
      kind: 'choice',
      options: ['Input only', 'Output only', 'Both'],
      answer: 'Both',
      teach: 'It shows, which is output, and you tap it, which is input. '
        + 'Some devices do two jobs at once.',
      level: 3,
    },
  ],
})

/* ── typing ───────────────────────────────────────────────────────────────── */

teach({
  topicId: 'typing',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Typing well means using both hands and the right fingers. '
    + 'Each hand has its own half of the keyboard. '
    + 'Your fingers rest on the middle row and return there after every key.',

  mechanism:
    'Typing with one finger works, so why learn this? '
    + 'Because of where your eyes are. '
    + 'One finger means hunting, and hunting means watching the keys. '
    + 'While you watch the keys you are not reading your own writing. '
    + 'With both hands on the home row your fingers know where to go, '
    + 'and your eyes stay on the screen. '
    + 'The point is not speed. It is that you can see what you are writing.',

  recap:
    'You know the keyboard is an input device. '
    + 'This is about using it properly.',

  method: [
    'Sit up straight with both feet on the floor.',
    'Put your left fingers on a, s, d, f.',
    'Put your right fingers on j, k, l and the next key.',
    'Feel the small bumps on f and j. They find the place without looking.',
    'Use the thumb of either hand for the space bar.',
    'After each key, bring the finger back to its resting key.',
    'Go slowly and correctly. Speed comes later on its own.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Which finger presses the space bar?',
      steps: [
        'It sits below both hands.',
        'Your thumbs are the ones that reach it.',
      ],
      answer: 'A thumb, from either hand.',
    },
    {
      level: 2,
      ask: 'What are the small bumps on the f and j keys for?',
      steps: [
        'You can feel them without looking.',
        'They tell your hands they are in the right place.',
      ],
      answer: 'They let you find the home row by touch, not by looking.',
    },
    {
      level: 3,
      ask: 'Why is typing with one finger a problem, '
        + 'even if you get fast at it?',
      steps: [
        'One finger has to hunt for each key.',
        'Hunting means your eyes are on the keyboard.',
        'So you cannot read your own words as you write them.',
      ],
      answer: 'Because your eyes stay on the keys instead of the screen, '
        + 'and you cannot see your own mistakes.',
    },
  ],

  traps: [
    {
      mistake: 'Watching your fingers.',
      why: 'That is the habit this lesson removes. '
        + 'Feel for the bumps on f and j instead.',
    },
    {
      mistake: 'Trying to go fast on the first day.',
      why: 'Fast and wrong just teaches your hands the wrong path. '
        + 'Slow and correct becomes fast by itself.',
    },
    {
      mistake: 'Leaving your fingers wherever they land.',
      why: 'Bring each one back to its resting key. '
        + 'That is how your hand knows where it is.',
    },
  ],

  extension:
    'Your hands can learn a path so well that you stop thinking about it. '
    + 'The same thing happens when you learn to ride a bicycle. '
    + 'You cannot explain how you balance, and you do it anyway. '
    + 'Typing gets there with practice, and only with practice.',

  questions: [
    {
      id: 'typ-1',
      ask: 'Which keys do your left fingers rest on?',
      kind: 'choice',
      options: ['a, s, d, f', 'j, k, l', 'q, w, e, r'],
      answer: 'a, s, d, f',
      teach: 'That is the left half of the home row. '
        + 'Your right fingers rest on j, k, l and the key beside them.',
      level: 1,
    },
    {
      id: 'typ-2',
      ask: 'What are the bumps on f and j for?',
      kind: 'choice',
      options: [
        'To find the home row without looking',
        'To mark broken keys',
        'To make them easier to press',
      ],
      answer: 'To find the home row without looking',
      teach: 'You feel for them. '
        + 'Then your hands are placed and your eyes can stay on the screen.',
      level: 2,
    },
    {
      id: 'typ-3',
      ask: 'Why use both hands instead of one finger?',
      kind: 'choice',
      options: [
        'So your eyes can stay on the screen',
        'Because one finger gets tired',
        'Because it looks better',
      ],
      answer: 'So your eyes can stay on the screen',
      teach: 'One finger has to hunt, and hunting keeps your eyes down. '
        + 'Then you cannot read what you are writing.',
      level: 3,
    },
  ],
})
