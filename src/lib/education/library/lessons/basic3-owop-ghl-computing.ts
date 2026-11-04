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

  brief: {
    idea:
      'The flag of Ghana is red, gold and green with a black star. '
      + 'Each part stands for something.',
    method: [
      'Red is for those who died for our freedom.',
      'Gold is for the wealth in our ground.',
      'Green is for forest and farm. The star is African freedom.',
    ],
  },

  why:
    'On Independence Day your school raises the flag. '
    + 'Everybody stands still. '
    + 'The flag is only cloth, with three bands and a star on it. '
    + 'Why does a whole school stop for a piece of cloth?',

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
    'Ghana is a country. '
    + 'It is made of many towns and villages, '
    + 'from Bolgatanga in the north to Cape Coast on the sea. '
    + 'A symbol is a thing that stands for something bigger. '
    + 'A cross on a building tells you it is a church. '
    + 'The building is not the cross. '
    + 'But the cross stands for it. '
    + 'Ghana has symbols too. '
    + 'They stand for the whole country at once.',

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

  brief: {
    idea:
      'A conversation goes back and forth. Give the other person '
      + 'something to answer.',
    method: [
      'Greet first and wait for the reply.',
      'Ask one short question.',
      'Answer theirs, then hand the turn back.',
    ],
  },

  why:
    'Your mother sends you to buy pepper. '
    + 'The trader is an old woman from your area. '
    + 'She greets you in your language and you greet her back. '
    + 'Then she says something more. '
    + 'You answer, "I am fine." '
    + 'Now nobody says anything at all. '
    + 'She looks at you and you look at the ground. '
    + 'Why did the talk stop? '
    + 'Every word you used was correct. '
    + 'So something else went wrong, and this lesson is what it was.',

  idea:
    'A conversation is not one line. It goes back and forth. '
    + 'You greet. They reply. You ask. They answer. Then they ask you. '
    + 'In your own language you can do this about home, school and the market.',

  mechanism:
    'Here is what makes a conversation keep going. '
    + 'You have to give the other person something to answer. '
    + 'So the skill is not knowing more words. '
    + 'It is handing the turn back.',

  recap:
    'A greeting is what you say when you first meet somebody. '
    + 'The words change with the time of day. '
    + 'In the morning you use the morning greeting. '
    + 'In the evening you use the evening one. '
    + 'The words also change with who is in front of you. '
    + 'A friend your own age gets one greeting. '
    + 'An elder gets a more respectful one. '
    + 'So the morning greeting for a friend '
    + 'and the morning greeting for an elder '
    + 'are not the same words in your language. '
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

  figure: {
    alt: 'Two panels, each showing arrows passing between you and the '
      + 'other person. In the first the arrows keep alternating: '
      + 'greeting, reply, I am fine and you, their answer, and on it goes. '
      + 'In the second the arrows stop after I am fine, with nothing to '
      + 'answer and a bar across the end. Underneath, a note that the '
      + 'skill is not knowing more words, it is handing the turn back.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Handing the turn back</text>'
      + '<rect x="20" y="48" width="290" height="238" stroke="#0f8a4d"/>'
      + '<text x="62" y="72" font-size="14" text-anchor="start" fill="currentColor" stroke="none">you</text>'
      + '<text x="268" y="72" font-size="14" text-anchor="end" fill="currentColor" stroke="none">them</text>'
      + '<text x="165" y="102" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">greeting</text>'
      + '<line x1="62" y1="112" x2="240" y2="112"/>'
      + '<polygon points="252,112 236,105 236,119" fill="currentColor" stroke="none"/>'
      + '<text x="165" y="140" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">reply</text>'
      + '<line x1="268" y1="150" x2="90" y2="150"/>'
      + '<polygon points="78,150 94,143 94,157" fill="currentColor" stroke="none"/>'
      + '<text x="165" y="178" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">I am fine. And you?</text>'
      + '<line x1="62" y1="188" x2="240" y2="188" stroke="#0f8a4d"/>'
      + '<polygon points="252,188 236,181 236,195" fill="#0f8a4d" stroke="none"/>'
      + '<text x="165" y="216" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">their answer</text>'
      + '<line x1="268" y1="226" x2="90" y2="226"/>'
      + '<polygon points="78,226 94,219 94,233" fill="currentColor" stroke="none"/>'
      + '<text x="165" y="254" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">and on it goes</text>'
      + '<line x1="62" y1="264" x2="240" y2="264" stroke="#0f8a4d"/>'
      + '<polygon points="252,264 236,257 236,271" fill="#0f8a4d" stroke="none"/>'
      + '<rect x="330" y="48" width="290" height="238" stroke="#c8433a"/>'
      + '<text x="372" y="72" font-size="14" text-anchor="start" fill="currentColor" stroke="none">you</text>'
      + '<text x="578" y="72" font-size="14" text-anchor="end" fill="currentColor" stroke="none">them</text>'
      + '<text x="475" y="102" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">greeting</text>'
      + '<line x1="372" y1="112" x2="550" y2="112"/>'
      + '<polygon points="562,112 546,105 546,119" fill="currentColor" stroke="none"/>'
      + '<text x="475" y="140" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">reply</text>'
      + '<line x1="578" y1="150" x2="400" y2="150"/>'
      + '<polygon points="388,150 404,143 404,157" fill="currentColor" stroke="none"/>'
      + '<text x="475" y="178" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">I am fine.</text>'
      + '<line x1="372" y1="188" x2="550" y2="188" stroke="#c8433a"/>'
      + '<polygon points="562,188 546,181 546,195" fill="#c8433a" stroke="none"/>'
      + '<text x="475" y="234" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">nothing to answer</text>'
      + '<line x1="400" y1="258" x2="550" y2="258" stroke="#c8433a" stroke-width="7"/>'
      + '<text x="320" y="334" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">The skill is not knowing more words.</text>'
      + '<text x="320" y="366" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">It is handing the turn back.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'The same four answers, with and without the turn handed back',
    columns: [
      'They asked',
      'An answer that stops it',
      'An answer that keeps it going',
    ],
    rows: [
      ['How are you?', 'I am fine', 'I am fine. And you?'],
      [
        'Where are you going?',
        'To the market',
        'To the market. Do you need anything?',
      ],
      ['Did you eat?', 'Yes', 'Yes, I ate rice. What did you eat?'],
      [
        'Is your mother well?',
        'She is well',
        'She is well, thank you. And yours?',
      ],
    ],
    note: 'Nothing in the last column uses a harder word than the middle '
      + 'one. It only adds a question.',
  }],

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

  brief: {
    idea:
      'Write a letter for each sound you hear. Take care with the '
      + 'letters English does not have.',
    method: [
      'Say the sentence out loud, slowly.',
      'Write a letter for each sound.',
      'Read it back out loud to check.',
    ],
  },

  why:
    'A pupil writes a sentence in her own language. '
    + 'She needs a sound from the middle of a word, '
    + 'and English has no letter for it. '
    + 'So she writes an e instead. '
    + 'Now the word on her page is a different word. '
    + 'Her teacher reads it out and the class laughs. '
    + 'The sound was right in her mouth '
    + 'and wrong on her paper. '
    + 'So which letters does her language have '
    + 'that English does not?',

  notation:
    'Your language uses the English letters '
    + 'and a few more besides. '
    + 'The open e looks like the number 3 '
    + 'written backwards. '
    + 'The open o looks like a letter c '
    + 'turned the other way round. '
    + 'In Ewe there is also a d with a curl on it '
    + 'and an f with a bar through it. '
    + 'Each of those stands for one sound, '
    + 'and no English letter makes that sound. '
    + 'Writing an ordinary e '
    + 'where the open e belongs '
    + 'is the commonest mistake, '
    + 'because it makes a different word.',

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
    'Reading and writing are the same job '
    + 'going in two directions. '
    + 'When you read, '
    + 'you see a letter and your mouth makes the sound. '
    + 'When you write, '
    + 'you hear a sound and your hand makes the letter. '
    + 'See the open e and you say its sound. '
    + 'Hear that sound and you have to write the open e. '
    + 'This lesson is the second direction, '
    + 'which is the harder one, '
    + 'because nothing on the page '
    + 'is there to remind you.',

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

  figure: {
    alt: 'Three boxes in a row with arrows between them: say it slowly '
      + 'and listen for each sound, write a letter for each sound you '
      + 'heard, and read it back out loud slowly. An arrow runs from the '
      + 'third box back round to the first, labelled a sound with no '
      + 'letter shows up at once. Underneath, a note that your hand is '
      + 'used to English and will write e in place of open e while you '
      + 'are thinking, and that your ear will not.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">How to check your own writing</text>'
      + '<rect x="20" y="66" width="180" height="112"/>'
      + '<text x="110" y="104" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">say it slowly</text>'
      + '<text x="110" y="132" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">and listen for</text>'
      + '<text x="110" y="154" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">each sound</text>'
      + '<line x1="206" y1="122" x2="222" y2="122"/>'
      + '<polygon points="234,122 218,115 218,129" fill="currentColor" stroke="none"/>'
      + '<rect x="240" y="66" width="180" height="112"/>'
      + '<text x="330" y="104" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">write a letter</text>'
      + '<text x="330" y="132" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">for each sound</text>'
      + '<text x="330" y="154" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">you heard</text>'
      + '<line x1="426" y1="122" x2="442" y2="122"/>'
      + '<polygon points="454,122 438,115 438,129" fill="currentColor" stroke="none"/>'
      + '<rect x="460" y="66" width="160" height="112" stroke="#0f8a4d"/>'
      + '<text x="540" y="104" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">read it back</text>'
      + '<text x="540" y="132" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">out loud,</text>'
      + '<text x="540" y="154" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">slowly</text>'
      + '<polyline points="540,182 540,214 110,214 110,194" stroke="#0f8a4d"/>'
      + '<polygon points="110,182 102,200 118,200" fill="#0f8a4d" stroke="none"/>'
      + '<text x="325" y="240" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">a sound with no letter shows up at once</text>'
      + '<text x="320" y="300" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Your hand is used to English, and it writes</text>'
      + '<text x="320" y="330" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">e for ɛ while you are busy thinking.</text>'
      + '<text x="320" y="372" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">Your ear will not.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Five things to get right in a sentence, and how you check '
      + 'each one',
    columns: [
      'What to get right',
      'How you check it',
      'What it looks like when it is wrong',
    ],
    rows: [
      [
        'A letter for every sound',
        'Read it aloud, slowly',
        'You say a sound that has no letter',
      ],
      [
        'The extra letters',
        'Look at every ɛ and every ɔ',
        'An e or an o where it should not be',
      ],
      [
        'A capital at the start',
        'Look at the first letter',
        'The sentence has no beginning',
      ],
      [
        'A full stop at the end',
        'Look at the last mark',
        'This sentence runs into the next one',
      ],
      [
        'That it says what you meant',
        'Read it to somebody at home',
        'They hear something you did not say',
      ],
    ],
    note: 'Only the last row needs another person. The first four you can '
      + 'do by yourself, out loud.',
  }],

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

  brief: {
    idea:
      'Input goes into the machine. Output comes out to you. Ask '
      + 'which way the information is going.',
    method: [
      'Point at the device.',
      'Ask where the information starts.',
      'From you is input. From the machine is output.',
    ],
  },

  why:
    'A class is given a list and told to sort it: '
    + 'keyboard, screen, mouse, '
    + 'speaker, printer, microphone. '
    + 'One pupil sorts them by size. '
    + 'One sorts them by colour. '
    + 'One puts the microphone and the speaker together, '
    + 'because the two of them look alike. '
    + 'All three sortings are neat '
    + 'and none of them is any use. '
    + 'So what is the one question '
    + 'that sorts these properly?',

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
    'A computer is a box with things plugged into it. '
    + 'The board of letter keys you press is the keyboard. '
    + 'The small thing you slide with your hand '
    + 'is the mouse. '
    + 'The flat glass panel you look at '
    + 'is the monitor, or the screen. '
    + 'The box itself is the system unit. '
    + 'Those are the names of the parts. '
    + 'This lesson sorts those same parts '
    + 'by what each one does.',

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

  brief: {
    idea:
      'Use both hands. Your fingers rest on the middle row and come '
      + 'back to it after every key.',
    method: [
      'Put your left fingers on a, s, d, f.',
      'Put your right fingers on j, k, l and the next key.',
      'Bring each finger back after every key.',
    ],
  },

  why:
    'A pupil types with one finger. '
    + 'He looks for each letter, '
    + 'presses it, '
    + 'then looks for the next one. '
    + 'One sentence takes him four minutes. '
    + 'His eyes are on the keyboard the whole time, '
    + 'so he never sees the mistakes '
    + 'going onto the screen. '
    + 'Another pupil types the same sentence '
    + 'in twenty seconds, watching the screen. '
    + 'What is she doing with her hands '
    + 'that he is not?',

  notation:
    'The keys sit in rows. '
    + 'The middle row is called the home row. '
    + 'Your fingers rest there '
    + 'and come back to it after every key. '
    + 'The long key along the bottom is the space bar, '
    + 'and it makes the gap between words. '
    + 'The key marked Shift is held down '
    + 'to make a capital letter. '
    + 'You hold it; you do not press it and let go. '
    + 'Hunting for each key with one finger '
    + 'is the commonest mistake, '
    + 'because it keeps your eyes off the screen, '
    + 'which is where your mistakes are.',

  idea:
    'Typing well means using both hands and the right fingers. '
    + 'Each hand has its own half of the keyboard. '
    + 'Your fingers rest on the middle row and return there after every key.',

  mechanism:
    'Typing with one finger works, so why learn this? '
    + 'Because of where your eyes are. '
    + 'One finger means hunting, and hunting means watching the keys. '
    + 'With both hands on the home row your fingers already know where to '
    + 'go. '
    + 'The point is not speed. It is that you can see what you are writing.',

  recap:
    'A keyboard is how your words '
    + 'get into the machine. '
    + 'Press the key marked K '
    + 'and a K appears on the screen. '
    + 'Press it again and there are two. '
    + 'Nothing comes out of the machine on its own. '
    + 'It puts out what you put in. '
    + 'So the keyboard is the way in, '
    + 'and every letter on that screen went through it. '
    + 'This lesson is about using it '
    + 'so that the way in is fast and correct.',

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

  figure: {
    alt: 'A keyboard drawn as three rows of keys with a space bar below. '
      + 'Only the middle row is labelled, a s d f g h j k l and the key '
      + 'beside it, and the eight resting keys a s d f and j k l are '
      + 'marked. Small dots sit on the f and the j. The four left keys are '
      + 'labelled left hand and the four right keys right hand, and the '
      + 'space bar is labelled either thumb. Underneath, a note to feel '
      + 'for the bumps on f and j so your eyes never leave the screen.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Where your fingers live</text>'
      + '<rect x="50" y="56" width="48" height="44" rx="5"/>'
      + '<rect x="102" y="56" width="48" height="44" rx="5"/>'
      + '<rect x="154" y="56" width="48" height="44" rx="5"/>'
      + '<rect x="206" y="56" width="48" height="44" rx="5"/>'
      + '<rect x="258" y="56" width="48" height="44" rx="5"/>'
      + '<rect x="310" y="56" width="48" height="44" rx="5"/>'
      + '<rect x="362" y="56" width="48" height="44" rx="5"/>'
      + '<rect x="414" y="56" width="48" height="44" rx="5"/>'
      + '<rect x="466" y="56" width="48" height="44" rx="5"/>'
      + '<rect x="518" y="56" width="48" height="44" rx="5"/>'
      + '<rect x="62" y="108" width="48" height="44" rx="5" stroke="#0f8a4d"/>'
      + '<text x="86" y="137" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">a</text>'
      + '<rect x="114" y="108" width="48" height="44" rx="5" stroke="#0f8a4d"/>'
      + '<text x="138" y="137" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">s</text>'
      + '<rect x="166" y="108" width="48" height="44" rx="5" stroke="#0f8a4d"/>'
      + '<text x="190" y="137" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">d</text>'
      + '<rect x="218" y="108" width="48" height="44" rx="5" stroke="#0f8a4d"/>'
      + '<text x="242" y="133" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">f</text>'
      + '<circle cx="242" cy="145" r="5" fill="#0f8a4d" stroke="#0f8a4d"/>'
      + '<rect x="270" y="108" width="48" height="44" rx="5"/>'
      + '<text x="294" y="137" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">g</text>'
      + '<rect x="322" y="108" width="48" height="44" rx="5"/>'
      + '<text x="346" y="137" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">h</text>'
      + '<rect x="374" y="108" width="48" height="44" rx="5" stroke="#0f8a4d"/>'
      + '<text x="398" y="133" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">j</text>'
      + '<circle cx="398" cy="145" r="5" fill="#0f8a4d" stroke="#0f8a4d"/>'
      + '<rect x="426" y="108" width="48" height="44" rx="5" stroke="#0f8a4d"/>'
      + '<text x="450" y="137" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">k</text>'
      + '<rect x="478" y="108" width="48" height="44" rx="5" stroke="#0f8a4d"/>'
      + '<text x="502" y="137" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">l</text>'
      + '<rect x="530" y="108" width="48" height="44" rx="5" stroke="#0f8a4d"/>'
      + '<rect x="74" y="160" width="48" height="44" rx="5"/>'
      + '<rect x="126" y="160" width="48" height="44" rx="5"/>'
      + '<rect x="178" y="160" width="48" height="44" rx="5"/>'
      + '<rect x="230" y="160" width="48" height="44" rx="5"/>'
      + '<rect x="282" y="160" width="48" height="44" rx="5"/>'
      + '<rect x="334" y="160" width="48" height="44" rx="5"/>'
      + '<rect x="386" y="160" width="48" height="44" rx="5"/>'
      + '<rect x="438" y="160" width="48" height="44" rx="5"/>'
      + '<rect x="490" y="160" width="48" height="44" rx="5"/>'
      + '<rect x="542" y="160" width="48" height="44" rx="5"/>'
      + '<rect x="160" y="212" width="320" height="38" rx="5"/>'
      + '<text x="320" y="237" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">space, either thumb</text>'
      + '<text x="164" y="286" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">left hand rests here</text>'
      + '<text x="476" y="286" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">right hand rests here</text>'
      + '<text x="320" y="332" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">Feel the two bumps, on f and on j.</text>'
      + '<text x="320" y="364" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Then your eyes never leave the screen.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'One finger against both hands, and where your eyes end up',
    columns: ['The question', 'One finger', 'Both hands, home row'],
    rows: [
      [
        'How does the finger find a key?',
        'By hunting for it',
        'It already knows',
      ],
      ['Where are your eyes?', 'On the keyboard', 'On the screen'],
      ['Can you read what you wrote?', 'Not while typing', 'Yes, as you go'],
      ['When do you spot a mistake?', 'When you look up', 'Straight away'],
      ['Does it get faster?', 'A little', 'A great deal'],
    ],
    note: 'The point was never the last row. It is the second one.',
  }],

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
