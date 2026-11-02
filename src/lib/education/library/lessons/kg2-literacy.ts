/**
 * Stored lessons for KG 2 Literacy.
 *
 * Spoken, like the rest of the early years. `mechanism` is addressed to the
 * adult helping, and the reading check scores those separately.
 *
 * ── This is the year reading actually starts ───────────────────────────────
 *
 * Four of these seven are one chain, and the order is not negotiable.
 *
 * `blend-sounds` first: hear c, a, t said separately and say cat. That is
 * done with ears only, with no print anywhere, because a child who cannot
 * blend sounds they can HEAR will not blend sounds they have to work out
 * from letters as well.
 *
 * `pull-apart` second, which is blending backwards and is harder.
 *
 * `sound-per-letter` third, attaching a sound to each shape.
 *
 * `read-short-words` last, which is all three at once and is the moment a
 * child reads. Nothing is added in that lesson. It is the three earlier ones
 * done together, and if it fails, one of the three is missing.
 *
 * Teaching letters before blending is the commonest mistake in the subject,
 * and it produces a child who can name every letter and read nothing.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── telling the story back ─────────────────────────────────────────────── */

teach({
  topicId: 'retell',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Tell the story back in order. '
      + 'The beginning, then the middle, then the end. '
      + 'Say who was in it and what they did.',
    method: [
      'Say how the story began.',
      'Say what happened in the middle.',
      'Say how it ended.',
    ],
  },

  idea:
    'You know this story. '
    + 'Now you tell it to me. '
    + 'How did it begin? '
    + 'Who was in it? '
    + 'What happened next? '
    + 'And then? '
    + 'How did it end? '
    + 'Good. You told the whole story.',

  mechanism:
    'For the adult. '
    + 'Use a story the child has heard several times. '
    + 'A new story cannot be retold, '
    + 'and asking for one teaches the child they cannot do this. '
    + 'The three questions, beginning, middle and end, '
    + 'are the scaffold, '
    + 'and you take them away as the child gets stronger. '
    + 'Do not correct small changes. '
    + 'A retelling is not a recitation, '
    + 'and a child who changes a detail '
    + 'is still doing the work. '
    + 'What matters is the order, and the main events being there. '
    + 'Retelling is the first form of summary, '
    + 'which they will be examined on for years, '
    + 'and it is also how the sentence patterns of books '
    + 'get into a child’s own speech.',

  method: [
    'Choose a story you know well.',
    'Say how it began.',
    'Say who was in it.',
    'Say what happened in the middle.',
    'Say how it ended.',
    'Keep the events in order.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What do you say first when retelling?',
      steps: [
        'Start where the story started.',
      ],
      answer: 'How the story began.',
    },
    {
      level: 2,
      ask: 'You left out the middle. What should you do?',
      steps: [
        'Go back to where you jumped.',
      ],
      answer: 'Go back and say what happened in the middle.',
    },
    {
      level: 3,
      ask: 'Must you use exactly the same words as the story?',
      steps: [
        'A retelling is not a recitation.',
      ],
      answer: 'No. Your own words are fine, '
        + 'as long as the order is right.',
    },
  ],

  traps: [
    {
      mistake: 'Starting with the exciting part.',
      why: 'Begin at the beginning. '
        + 'Then the middle. Then the end.',
    },
    {
      mistake: 'Trying to retell a story you have heard once.',
      why: 'Hear it a few times first. '
        + 'Then you can tell it.',
    },
  ],

  extension:
    'Now change the ending. '
    + 'Tell the same story but finish it a different way. '
    + 'What would happen then?',

  figure: {
    alt: 'A grown up on the left and a child on the right with an arrow '
      + 'between them, labelled I told it and now you tell it. Three boxes '
      + 'along the bottom hold the beginning, the middle and the end.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="28" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">now you tell it back</text>'
      + '<circle cx="140" cy="96" r="30"/>'
      + '<line x1="140" y1="126" x2="140" y2="198"/>'
      + '<line x1="95" y1="156" x2="185" y2="156"/>'
      + '<line x1="140" y1="198" x2="113" y2="258"/>'
      + '<line x1="140" y1="198" x2="167" y2="258"/>'
      + '<line x1="230" y1="176" x2="350" y2="176"/>'
      + '<polyline points="337,166 350,176 337,186"/>'
      + '<circle cx="440" cy="116" r="24"/>'
      + '<line x1="440" y1="140" x2="440" y2="198"/>'
      + '<line x1="404" y1="164" x2="476" y2="164"/>'
      + '<line x1="440" y1="198" x2="418" y2="246"/>'
      + '<line x1="440" y1="198" x2="462" y2="246"/>'
      + '<text x="140" y="284" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">I told it</text>'
      + '<text x="440" y="284" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">now you tell it</text>'
      + '<polygon points="40,310 200,310 200,366 40,366"/>'
      + '<text x="120" y="346" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the beginning</text>'
      + '<polygon points="240,310 400,310 400,366 240,366"/>'
      + '<text x="320" y="346" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the middle</text>'
      + '<polygon points="440,310 600,310 600,366 440,366"/>'
      + '<text x="520" y="346" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the end</text></svg>',
  },
  questions: [
    {
      id: 'rt-1',
      ask: 'In a retelling, what order do you use?',
      kind: 'choice',
      options: [
        'Beginning, middle, end',
        'The best part first',
        'Any order',
      ],
      answer: 'Beginning, middle, end',
      teach: 'The order is what makes it a story.',
      level: 1,
    },
    {
      id: 'rt-2',
      ask: 'Must the words be exactly the same?',
      kind: 'choice',
      options: ['No', 'Yes', 'Only the first line'],
      answer: 'No',
      teach: 'Your own words are fine. The order matters.',
      level: 3,
    },
  ],
})

/* ── pushing sounds together into a word ───────────────────────────── */

teach({
  topicId: 'blend-sounds',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'I say the sounds. You say the word. '
      + 'c, a, t. '
      + 'Push them together. '
      + 'Cat. '
      + 'No letters yet. Just listen.',
    method: [
      'Listen to the separate sounds.',
      'Say them faster, closer together.',
      'Say the whole word.',
    ],
  },

  idea:
    'Listen carefully. '
    + 'c. a. t. '
    + 'Now push them together. '
    + 'Say them faster. '
    + 'c-a-t. '
    + 'Cat. '
    + 'You made the word. '
    + 'Now this one. '
    + 'm. a. p. '
    + 'Push them together.',

  mechanism:
    'For the adult. '
    + 'This is the single most important lesson in early literacy, '
    + 'and there is no print in it at all. '
    + 'Reading is turning letters into sounds '
    + 'and then pushing the sounds into a word, '
    + 'and the pushing together is the hard half. '
    + 'So practise it with ears only, '
    + 'where the child does not also have to work out the letters. '
    + 'Say the sounds with gaps, then with smaller gaps, '
    + 'then almost joined, '
    + 'and let them say the word. '
    + 'Use the sound, never the letter name: '
    + 'mmm, not "em". '
    + 'Three sound words only, '
    + 'and start with ones where the middle sound is easy to hear. '
    + 'A child who can blend by ear '
    + 'will learn to read in weeks when the letters come. '
    + 'A child who cannot will not, '
    + 'however many letters they know.',

  method: [
    'Listen to the sounds, said separately.',
    'Say them yourself with gaps.',
    'Say them again, faster.',
    'Say them almost joined.',
    'Say the whole word.',
    'Use the sounds, not the letter names.',
  ],

  worked: [
    {
      level: 1,
      ask: 's. i. t. What is the word?',
      steps: [
        'Push them together.',
      ],
      answer: 'Sit.',
    },
    {
      level: 2,
      ask: 'p. o. t. What is the word?',
      steps: [
        'Say them faster each time.',
      ],
      answer: 'Pot.',
    },
    {
      level: 3,
      ask: 'Why do we do this with no letters?',
      steps: [
        'One hard thing at a time.',
      ],
      answer: 'So you only have to push the sounds together, '
        + 'without working out letters as well.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the letter names.',
      why: 'See, ay, tee does not make cat. '
        + 'Use the sounds.',
    },
    {
      mistake: 'Leaving long gaps between the sounds.',
      why: 'Say them closer and closer. '
        + 'Then the word appears.',
    },
  ],

  extension:
    'Now four sounds. '
    + 's. t. o. p. '
    + 'Push them together. '
    + 'Stop.',

  figure: {
    alt: 'Three green stones spread far apart with arrows pushing them '
      + 'towards each other, labelled three sounds. An arrow points down to '
      + 'the same three stones touching inside a green ring, labelled one '
      + 'word.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="52" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">push the sounds together</text>'
      + '<circle cx="120" cy="150" r="34" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<circle cx="320" cy="150" r="34" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<circle cx="520" cy="150" r="34" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="170" y1="150" x2="270" y2="150" stroke="#0f8a4d"/>'
      + '<polyline points="257,140 270,150 257,160" stroke="#0f8a4d"/>'
      + '<line x1="470" y1="150" x2="370" y2="150" stroke="#0f8a4d"/>'
      + '<polyline points="383,140 370,150 383,160" stroke="#0f8a4d"/>'
      + '<text x="320" y="232" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">three sounds</text>'
      + '<line x1="320" y1="256" x2="320" y2="292"/>'
      + '<polyline points="310,279 320,292 330,279"/>'
      + '<ellipse cx="320" cy="340" rx="134" ry="54" stroke="#0f8a4d" '
      + 'stroke-width="4"/><circle cx="252" cy="340" r="34"/>'
      + '<circle cx="320" cy="340" r="34"/>'
      + '<circle cx="388" cy="340" r="34"/>'
      + '<text x="528" y="350" font-size="28" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">one word</text></svg>',
  },
  questions: [
    {
      id: 'bl-1',
      ask: 'c. u. p. What word is that?',
      kind: 'choice',
      options: ['Cup', 'Cap', 'Cop'],
      answer: 'Cup',
      teach: 'Push the sounds together.',
      level: 1,
    },
    {
      id: 'bl-2',
      ask: 'Should you say the sound or the letter name?',
      kind: 'choice',
      options: ['The sound', 'The letter name', 'Either'],
      answer: 'The sound',
      teach: 'Letter names do not blend into words.',
      level: 2,
    },
  ],
})

/* ── pulling a word into its sounds ────────────────────────────── */

teach({
  topicId: 'pull-apart',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'I say the word. You say the sounds. '
      + 'Cat. '
      + 'c, a, t. '
      + 'Say them in order, from the front.',
    method: [
      'Say the word slowly.',
      'Say the first sound on its own.',
      'Then the middle, then the last.',
    ],
  },

  idea:
    'Now we go the other way. '
    + 'I say a word. You pull it apart. '
    + 'Cat. '
    + 'What is the first sound? c. '
    + 'What is the middle sound? a. '
    + 'What is the last sound? t. '
    + 'c, a, t. '
    + 'Now this one. Pot.',

  mechanism:
    'For the adult. '
    + 'This is blending backwards and it is harder, '
    + 'which is why it comes second. '
    + 'The middle sound is the difficult one, '
    + 'so ask for the first sound, then the LAST, '
    + 'and come back to the middle, '
    + 'because the middle is easiest to find '
    + 'once the two ends are named. '
    + 'Say the word slowly, stretching it out, '
    + 'and let the child feel their mouth change. '
    + 'Counters help: '
    + 'put down one stone for each sound as they say it, '
    + 'so the three sounds become three things they can see. '
    + 'This is what later lets a child spell, '
    + 'because spelling is pulling a word apart '
    + 'and writing a letter for each piece.',

  method: [
    'Say the word slowly.',
    'Say the first sound on its own.',
    'Say the last sound.',
    'Then find the middle sound.',
    'Say all three in order.',
    'Put down a stone for each sound.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What is the first sound in sun?',
      steps: [
        'Say sun slowly.',
      ],
      answer: 's.',
    },
    {
      level: 2,
      ask: 'Pull apart the word man.',
      steps: [
        'First sound, last sound, then the middle.',
      ],
      answer: 'm, a, n.',
    },
    {
      level: 3,
      ask: 'Which sound is hardest to find?',
      steps: [
        'The ends are easier.',
      ],
      answer: 'The middle one. Find the ends first.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the sounds out of order.',
      why: 'From the front. '
        + 'First, middle, last.',
    },
    {
      mistake: 'Saying the parts you clap instead of the sounds.',
      why: 'Clapping gives bigger pieces. '
        + 'Here we want every single sound.',
    },
  ],

  extension:
    'Now put a stone down for each sound. '
    + 'Three stones for cat. '
    + 'How many stones for stop?',

  figure: {
    alt: 'A green ring labelled one word at the top, with an arrow pointing '
      + 'down to three separate stones in a row, labelled first, middle and '
      + 'last.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="50" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">pull the word apart</text>'
      + '<ellipse cx="320" cy="136" rx="135" ry="50" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="320" y="148" font-size="30" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">one word</text>'
      + '<line x1="320" y1="196" x2="320" y2="246"/>'
      + '<polyline points="310,233 320,246 330,233"/>'
      + '<circle cx="150" cy="310" r="38"/>'
      + '<circle cx="320" cy="310" r="38"/>'
      + '<circle cx="490" cy="310" r="38"/>'
      + '<text x="150" y="382" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">first</text>'
      + '<text x="320" y="382" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">middle</text>'
      + '<text x="490" y="382" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">last</text></svg>',
  },
  questions: [
    {
      id: 'pa-1',
      ask: 'How many sounds are in the word pot?',
      kind: 'choice',
      options: ['Three', 'Two', 'Four'],
      answer: 'Three',
      teach: 'p, o, t.',
      level: 1,
    },
    {
      id: 'pa-2',
      ask: 'Which sound should you find last?',
      kind: 'choice',
      options: ['The middle', 'The first', 'The last'],
      answer: 'The middle',
      teach: 'Find the two ends first, then the middle.',
      level: 3,
    },
  ],
})

/* ── the sound each letter makes ───────────────────────────── */

teach({
  topicId: 'sound-per-letter',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Each letter has a sound. '
      + 'This letter says mmm. '
      + 'This one says sss. '
      + 'Say the sound, not the letter name. '
      + 'The sound is what you read with.',
    method: [
      'Look at the letter.',
      'Say its sound, not its name.',
      'Say a word that starts with that sound.',
    ],
  },

  idea:
    'Look at this letter. '
    + 'It says mmm. '
    + 'Say it. mmm. '
    + 'Mango starts with mmm. '
    + 'Now this one. '
    + 'It says sss. '
    + 'Say it. '
    + 'Now I point and you say the sound. '
    + 'Not the name. The sound.',

  mechanism:
    'For the adult. '
    + 'Teach the sound and leave the letter name alone for now. '
    + 'A child who knows that a letter is called "em" '
    + 'cannot use it to read mango, '
    + 'and a child who knows it says mmm can. '
    + 'The letter name is useful later, for spelling aloud, '
    + 'and it gets in the way at this stage. '
    + 'Teach a few letters at a time, '
    + 'starting with ones that appear in many short words, '
    + 'such as m, s, a, t, p, i, n, '
    + 'and let the child read words with them at once. '
    + 'Do not do the alphabet in order. '
    + 'A, b, c teaches a song, '
    + 'and a child who can sound m, a and t can read a word today. '
    + 'Keep the sounds short and crisp: '
    + 't, not "tuh".',

  method: [
    'Look at the letter.',
    'Say the sound it makes.',
    'Say the sound, not the letter name.',
    'Say a word that starts with that sound.',
    'Learn a few letters at a time.',
    'Read a word with them as soon as you can.',
  ],

  worked: [
    {
      level: 1,
      ask: 'This letter says mmm. What word starts with it?',
      steps: [
        'Say mmm and think of a word.',
      ],
      answer: 'Mango. Or man, or mat.',
    },
    {
      level: 2,
      ask: 'Should you say em or mmm?',
      steps: [
        'Which one helps you read?',
      ],
      answer: 'mmm. The sound is what you read with.',
    },
    {
      level: 3,
      ask: 'Why not learn the letters in alphabet order?',
      steps: [
        'Think what a, b, c lets you read.',
      ],
      answer: 'Because a few useful letters '
        + 'let you read a whole word today.',
    },
  ],

  traps: [
    {
      mistake: 'Learning the letter name instead of the sound.',
      why: 'Names do not blend into words. '
        + 'Sounds do.',
    },
    {
      mistake: 'Adding uh to the end of a sound.',
      why: 'Say t, not tuh. '
        + 'Keep it short.',
    },
  ],

  extension:
    'Now you know a few letters. '
    + 'Put them together. '
    + 'm, a, t. '
    + 'You just read a word.',

  figure: {
    alt: 'A large letter m with a green arrow pointing from it to the green '
      + 'sound mmm, and a mango drawn beside them. Under it says mango '
      + 'starts with mmm.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="52" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the sound, not the name</text>'
      + '<text x="110" y="240" font-size="130" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">m</text>'
      + '<line x1="196" y1="200" x2="300" y2="200" stroke="#0f8a4d"/>'
      + '<polyline points="287,190 300,200 287,210" stroke="#0f8a4d"/>'
      + '<text x="390" y="216" font-size="52" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">mmm</text>'
      + '<ellipse cx="545" cy="200" rx="44" ry="36"/>'
      + '<line x1="545" y1="166" x2="551" y2="150"/>'
      + '<text x="545" y="272" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">mango</text>'
      + '<text x="320" y="348" font-size="26" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">mango starts with mmm</text></svg>',
  },
  questions: [
    {
      id: 'sp-1',
      ask: 'What should you learn for each letter?',
      kind: 'choice',
      options: ['The sound it makes', 'Its name', 'Its position'],
      answer: 'The sound it makes',
      teach: 'The sound is what you read with.',
      level: 1,
    },
    {
      id: 'sp-2',
      ask: 'Which letters are best to learn first?',
      kind: 'choice',
      options: [
        'Ones that make many short words',
        'A, b and c',
        'The last ones',
      ],
      answer: 'Ones that make many short words',
      teach: 'Then you can read a word straight away.',
      level: 3,
    },
  ],
})

/* ── reading a short word ─────────────────────────────── */

teach({
  topicId: 'read-short-words',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Look at the word. '
      + 'Say the sound of each letter, from the left. '
      + 'Then push the sounds together. '
      + 'That is reading.',
    method: [
      'Point at the first letter and say its sound.',
      'Do each letter in turn, left to right.',
      'Then push the sounds together into the word.',
    ],
  },

  idea:
    'Here is a word. '
    + 'Put your finger on the first letter. '
    + 'Say its sound. c. '
    + 'Move along. a. '
    + 'Move along. t. '
    + 'Now push them together. '
    + 'c-a-t. Cat. '
    + 'You read it. '
    + 'Now this one. Do it the same way.',

  mechanism:
    'For the adult. '
    + 'Nothing new is being taught here. '
    + 'This is the three earlier lessons done at once: '
    + 'the sound for each letter, '
    + 'left to right, '
    + 'then blending. '
    + 'So if it fails, do not practise this. '
    + 'Find which of the three is missing and go back to it. '
    + 'A child who cannot blend by ear '
    + 'will not blend from letters either, '
    + 'and more of this lesson will only teach them that reading is '
    + 'impossible. '
    + 'Keep the words to three sounds, '
    + 'and only use letters the child knows. '
    + 'Let them point and move their finger, '
    + 'because the finger keeps the order. '
    + 'And when they read a word, stop and let it matter. '
    + 'A child who has read one word '
    + 'knows what the whole thing is for.',

  method: [
    'Look at the word.',
    'Put your finger on the first letter.',
    'Say its sound.',
    'Move to the next letter and say its sound.',
    'Do the last one.',
    'Push all the sounds together.',
    'Say the word.',
    'Ask yourself if it is a real word.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Read: s, i, t.',
      steps: [
        'Sound each letter.',
        'Push them together.',
      ],
      answer: 'Sit.',
    },
    {
      level: 2,
      ask: 'You read the sounds but no word came out. What now?',
      steps: [
        'Try saying them faster.',
      ],
      answer: 'Say the sounds closer together, '
        + 'until they make a word you know.',
    },
    {
      level: 3,
      ask: 'What is reading a word made of?',
      steps: [
        'Three things you already learned.',
      ],
      answer: 'A sound for each letter, '
        + 'going left to right, '
        + 'then pushing them together.',
    },
  ],

  traps: [
    {
      mistake: 'Guessing the word from the first letter.',
      why: 'Sound every letter. '
        + 'Cat and cup both start with c.',
    },
    {
      mistake: 'Starting from the wrong end.',
      why: 'Always from the left. '
        + 'Use your finger.',
    },
    {
      mistake: 'Practising this when blending is not secure.',
      why: 'Go back to blending by ear. '
        + 'This lesson adds nothing new.',
    },
  ],

  extension:
    'Now read two words together. '
    + 'A cat. '
    + 'Now a short sentence. '
    + 'The cat sat.',

  figure: {
    alt: 'The letters c, a and t set well apart with a green arrow running '
      + 'underneath from left to right. Below them it says now push them '
      + 'together, and under that the word cat is written in green with the '
      + 'letters joined up.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="50" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">say each sound, left to '
      + 'right</text>'
      + '<text x="150" y="180" font-size="80" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">c</text>'
      + '<text x="320" y="180" font-size="80" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a</text>'
      + '<text x="490" y="180" font-size="80" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">t</text>'
      + '<line x1="90" y1="226" x2="560" y2="226" stroke="#0f8a4d"/>'
      + '<polyline points="547,216 560,226 547,236" stroke="#0f8a4d"/>'
      + '<text x="320" y="286" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">now push them together</text>'
      + '<text x="320" y="364" font-size="72" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">cat</text></svg>',
  },
  questions: [
    {
      id: 'rs-1',
      ask: 'Which way do you work along a word?',
      kind: 'choice',
      options: [
        'From the left',
        'From the right',
        'From the middle',
      ],
      answer: 'From the left',
      teach: 'Use your finger to keep the order.',
      level: 1,
    },
    {
      id: 'rs-2',
      ask: 'Can you tell the word from its first letter?',
      kind: 'choice',
      options: ['No', 'Yes', 'Sometimes'],
      answer: 'No',
      teach: 'Cat, cup and can all start with c. Sound them all.',
      level: 2,
    },
  ],
})

/* ── writing my own name ─────────────────────────── */

teach({
  topicId: 'write-my-name',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Write your own name. '
      + 'A big letter first, then small ones. '
      + 'Say each letter’s sound as you write it. '
      + 'Then look at it and check.',
    method: [
      'Say your name slowly.',
      'Write the first letter big.',
      'Write the rest small, in order.',
    ],
  },

  idea:
    'You are going to write your name. '
    + 'Say it slowly first. '
    + 'The first letter is a big one. '
    + 'Write it. '
    + 'Now the rest are small letters. '
    + 'Write them in order. '
    + 'Say each sound as you write it. '
    + 'Now look at your name. '
    + 'Is anything missing?',

  mechanism:
    'For the adult. '
    + 'Writing their own name is the first thing a child writes '
    + 'and the thing they will write most, '
    + 'so it is worth getting the habits right. '
    + 'Three of them. '
    + 'A capital first and small letters after, '
    + 'because a name written in all capitals '
    + 'has to be unlearned later. '
    + 'Letters in order, left to right. '
    + 'And saying the sounds while writing, '
    + 'which ties the writing to the reading '
    + 'instead of making it a copied shape. '
    + 'Let them write it everywhere: '
    + 'on their work, in dust, in sand, large. '
    + 'Writing it without copying is the goal, '
    + 'and copying is a fine way to get there. '
    + 'Expect it to be untidy. '
    + 'The hand is five years old.',

  method: [
    'Say your name slowly.',
    'Write the first letter as a big letter.',
    'Write the next letters small.',
    'Keep them in order, left to right.',
    'Say each sound as you write.',
    'Look at it and check nothing is missing.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Which letter of your name is a big one?',
      steps: [
        'Only one of them.',
      ],
      answer: 'The first.',
    },
    {
      level: 2,
      ask: 'You wrote your name in all big letters. What should change?',
      steps: [
        'Only the first is big.',
      ],
      answer: 'Keep the first one big and make the rest small.',
    },
    {
      level: 3,
      ask: 'Why say the sounds while you write?',
      steps: [
        'It joins writing to reading.',
      ],
      answer: 'So the name is sounds you know, '
        + 'not a shape you copied.',
    },
  ],

  traps: [
    {
      mistake: 'Writing the whole name in capitals.',
      why: 'One big letter at the start. '
        + 'The rest are small.',
    },
    {
      mistake: 'Leaving out a letter.',
      why: 'Say the name slowly and check each sound is there.',
    },
    {
      mistake: 'Worrying that it is untidy.',
      why: 'It will be. '
        + 'Your hand is still learning.',
    },
  ],

  extension:
    'Now write your name on your own work, every time. '
    + 'Now try writing your other name too.',

  figure: {
    alt: 'The name Ama written on a ruled line, with the capital A in green '
      + 'and a bracket under it marked a big one, and the ma in plain ink '
      + 'with a bracket marked small letters. A green arrow to the right '
      + 'shows which way the writing goes.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="52" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a big letter first, then small '
      + 'ones</text>'
      + '<line x1="90" y1="190" x2="560" y2="190" stroke-dasharray="8 8"/>'
      + '<line x1="90" y1="250" x2="560" y2="250"/>'
      + '<text x="130" y="250" font-size="96" text-anchor="start" '
      + 'fill="#0f8a4d" stroke="none">A</text>'
      + '<text x="215" y="250" font-size="68" text-anchor="start" '
      + 'fill="currentColor" stroke="none">ma</text>'
      + '<polyline points="126,268 126,286 206,286 206,268" '
      + 'stroke="#0f8a4d"/>'
      + '<text x="160" y="318" font-size="22" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">a big one</text>'
      + '<polyline points="214,268 214,286 340,286 340,268"/>'
      + '<text x="290" y="352" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">small letters</text>'
      + '<line x1="410" y1="228" x2="556" y2="228" stroke="#0f8a4d"/>'
      + '<polyline points="543,218 556,228 543,238" stroke="#0f8a4d"/>'
      + '<text x="483" y="212" font-size="22" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">this way</text></svg>',
  },
  questions: [
    {
      id: 'wm-1',
      ask: 'How many letters of your name are big?',
      kind: 'choice',
      options: ['One', 'All of them', 'None'],
      answer: 'One',
      teach: 'The first letter only.',
      level: 1,
    },
    {
      id: 'wm-2',
      ask: 'What do you do while writing each letter?',
      kind: 'choice',
      options: [
        'Say its sound',
        'Say its name',
        'Count the letters',
      ],
      answer: 'Say its sound',
      teach: 'That joins the writing to the reading.',
      level: 3,
    },
  ],
})

/* ── forming letters ─────────────────────────── */

teach({
  topicId: 'write-letters',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Each letter starts in one place and goes one way. '
      + 'Most start at the top. '
      + 'Follow the same path every time. '
      + 'Sit the letters on a line.',
    method: [
      'Trace the letter with your finger first.',
      'Start where you were shown.',
      'Sit the letter on the line.',
    ],
  },

  idea:
    'Watch me make this letter. '
    + 'I start here, at the top. '
    + 'I go this way. '
    + 'Now trace it with your finger. '
    + 'Now in the dust. '
    + 'Now with the pencil. '
    + 'Start in the same place. '
    + 'Go the same way. '
    + 'Sit it on the line.',

  mechanism:
    'For the adult. '
    + 'The starting point and the direction are what matter, '
    + 'and the neatness does not, yet. '
    + 'A letter made from the bottom up '
    + 'can look correct and cannot be written quickly, '
    + 'so it has to be unlearned later, '
    + 'which is harder than learning it. '
    + 'So show the path and watch the hand, not the result. '
    + 'Go in this order: '
    + 'finger on your letter, finger in dust or sand, '
    + 'then pencil on paper. '
    + 'Large first, smaller later. '
    + 'Group letters that share a movement: '
    + 'c, a, d, g all start with the same curve, '
    + 'so teach them together and the hand learns one thing, not four. '
    + 'Backwards letters at five are normal.',

  method: [
    'Watch the letter being made.',
    'Trace it with your finger on top of the model.',
    'Trace it in dust or sand.',
    'Now use a pencil.',
    'Start where you were shown.',
    'Go the same way every time.',
    'Sit the letter on the line.',
    'Write it large first.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Where do most letters start?',
      steps: [
        'Not at the bottom.',
      ],
      answer: 'At the top.',
    },
    {
      level: 2,
      ask: 'Which letters can be learned together?',
      steps: [
        'Ones with the same movement.',
      ],
      answer: 'c, a, d and g all begin with the same curve.',
    },
    {
      level: 3,
      ask: 'Your letter looks right but you started at the bottom. '
        + 'Does it matter?',
      steps: [
        'Think about writing fast later.',
      ],
      answer: 'Yes. The wrong path cannot be written quickly, '
        + 'and it has to be unlearned.',
    },
  ],

  traps: [
    {
      mistake: 'Starting at the bottom.',
      why: 'It looks right and cannot be written fast. '
        + 'Trace the proper path again.',
    },
    {
      mistake: 'Letters floating above the line.',
      why: 'Sit them on the line. '
        + 'That is what the line is for.',
    },
    {
      mistake: 'Writing very small.',
      why: 'Write large first. '
        + 'Small comes later.',
    },
  ],

  extension:
    'Now write a whole word. '
    + 'Leave a small space between the letters. '
    + 'Now leave a bigger space between two words.',

  figure: {
    alt: 'A large letter c drawn between two ruled lines as a path to '
      + 'follow, with a green dot at the top right where the pencil starts '
      + 'and an arrowhead where it finishes. It is labelled start here and '
      + 'sit it on the line, and under it says c, a and d all start this '
      + 'way.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="48" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">start at the same place, go the '
      + 'same way</text>'
      + '<line x1="90" y1="180" x2="560" y2="180" stroke-dasharray="8 8"/>'
      + '<line x1="90" y1="308" x2="560" y2="308"/>'
      + '<path d="M 296 214 Q 234 184 204 232 Q 182 272 228 290 Q 262 300 '
      + '296 282" stroke-width="8"/>'
      + '<polyline points="284,301 296,282 274,285" stroke-width="7"/>'
      + '<circle cx="296" cy="214" r="12" stroke="#0f8a4d" stroke-width="4" '
      + 'fill="#0f8a4d"/>'
      + '<text x="326" y="206" font-size="22" text-anchor="start" '
      + 'fill="#0f8a4d" stroke="none">start here</text>'
      + '<text x="430" y="340" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">sit it on the line</text>'
      + '<text x="320" y="376" font-size="24" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">c, a and d all start this way</text>'
      + '</svg>',
  },
  questions: [
    {
      id: 'wl-1',
      ask: 'What matters most when forming a letter?',
      kind: 'choice',
      options: [
        'Where it starts and which way it goes',
        'How neat it looks',
        'How small it is',
      ],
      answer: 'Where it starts and which way it goes',
      teach: 'Neatness comes later. The path has to be right now.',
      level: 1,
    },
    {
      id: 'wl-2',
      ask: 'Where should a letter sit?',
      kind: 'choice',
      options: ['On the line', 'Above the line', 'Anywhere'],
      answer: 'On the line',
      teach: 'That is what the line is for.',
      level: 2,
    },
  ],
})
