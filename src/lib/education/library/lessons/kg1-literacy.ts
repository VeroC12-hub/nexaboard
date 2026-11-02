/**
 * Stored lessons for KG 1 Literacy.
 *
 * Spoken, like the rest of the early years: a five year old reads nothing
 * yet, so every line is said aloud. `mechanism` is addressed to the adult
 * helping, and the reading check scores those separately.
 *
 * ── Three of these eight are the whole of learning to read ────────────────
 *
 * `print-carries-meaning` is first in importance and last in anybody's
 * attention. A child who thinks the adult is reading the PICTURE has not
 * begun, however many letters they can name, and nothing else in this
 * subject will work until that is fixed.
 *
 * `clap-syllables` and `first-sound` are the two that let reading start at
 * all. Reading is turning marks into sounds, so a child who cannot hear that
 * Kumasi has three parts, or that their own name starts with a particular
 * sound, has nothing for the letters to attach to. Both are done with ears
 * only, no print, which is why they can be taught walking home.
 *
 * `letter-shapes` is deliberately limited to the letters of the child's own
 * name. That is where attention already is, and a letter that means
 * something is learned in a morning.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── telling what happened ──────────────────────────────────────────────── */

teach({
  topicId: 'tell-what-happened',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Tell me what happened. '
      + 'Start at the beginning. '
      + 'Then what happened next. '
      + 'Then the end.',
    method: [
      'Say what happened first.',
      'Then say what happened next.',
      'Then say how it finished.',
    ],
  },

  idea:
    'Tell me something that happened at home. '
    + 'Start at the beginning. '
    + 'What happened first? '
    + 'Then what happened? '
    + 'And then? '
    + 'How did it finish? '
    + 'Good. You told it in order.',

  mechanism:
    'For the adult. '
    + 'Children tell the most exciting part first, '
    + 'then jump about, '
    + 'and the fix is not to correct them but to ask three questions: '
    + 'what happened first, then what, and how did it finish. '
    + 'Those three questions put the events in order '
    + 'without you supplying any of the words. '
    + 'Do not finish their sentences, '
    + 'and wait longer than feels comfortable. '
    + 'A child who is given five seconds of silence will usually continue. '
    + 'Ask about something that happened the same day, '
    + 'because the memory is fresh and the only new work '
    + 'is putting it in order. '
    + 'This is where storytelling and later writing both come from.',

  method: [
    'Think of one thing that happened.',
    'Say what happened first.',
    'Say what happened after that.',
    'Say what happened in the end.',
    'Use the names of the people.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What should you say first?',
      steps: [
        'Start where it started.',
      ],
      answer: 'The thing that happened first.',
    },
    {
      level: 2,
      ask: 'You said the end first. What now?',
      steps: [
        'Go back to the start.',
      ],
      answer: 'Start again at the beginning.',
    },
    {
      level: 3,
      ask: 'Why does the order matter?',
      steps: [
        'The listener was not there.',
      ],
      answer: 'So the person listening can follow what happened.',
    },
  ],

  traps: [
    {
      mistake: 'Telling the most exciting part first.',
      why: 'Then nobody knows how you got there. '
        + 'Start at the beginning.',
    },
    {
      mistake: 'Saying only one word.',
      why: 'Say a few sentences. '
        + 'First, then, and in the end.',
    },
  ],

  extension:
    'Now tell it to somebody who was not there. '
    + 'They will need the names. '
    + 'They will need to know where it happened.',

  figure: {
    alt: 'Three boxes in a row with arrows between them, numbered one, two '
      + 'and three, and labelled first, then, and at the end. Above them it '
      + 'says tell it in order.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="52" font-size="28" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">tell it in order</text>'
      + '<polygon points="40,110 190,110 190,250 40,250"/>'
      + '<text x="115" y="212" font-size="86" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">1</text>'
      + '<line x1="196" y1="180" x2="239" y2="180"/>'
      + '<polyline points="226,170 239,180 226,190"/>'
      + '<polygon points="245,110 395,110 395,250 245,250"/>'
      + '<text x="320" y="212" font-size="86" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">2</text>'
      + '<line x1="401" y1="180" x2="444" y2="180"/>'
      + '<polyline points="431,170 444,180 431,190"/>'
      + '<polygon points="450,110 600,110 600,250 450,250"/>'
      + '<text x="525" y="212" font-size="86" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">3</text>'
      + '<text x="115" y="298" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">first</text>'
      + '<text x="320" y="298" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">then</text>'
      + '<text x="525" y="298" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">at the end</text></svg>',
  },
  questions: [
    {
      id: 'tw-1',
      ask: 'Where do you start when telling what happened?',
      kind: 'choice',
      options: ['At the beginning', 'At the end', 'In the middle'],
      answer: 'At the beginning',
      teach: 'First, then, and in the end.',
      level: 1,
    },
  ],
})

/* ── following two instructions ───────────────────────────────────────── */

teach({
  topicId: 'follow-two-steps',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Listen to both things before you start. '
      + 'Do the first one. '
      + 'Then do the second one. '
      + 'In that order.',
    method: [
      'Listen to the whole instruction.',
      'Say it back in your head.',
      'Do the first thing, then the second.',
    ],
  },

  idea:
    'I am going to ask you two things. '
    + 'Listen to both before you move. '
    + 'Pick up the cup and put it on the table. '
    + 'Good. The cup first. The table second. '
    + 'Now this one. '
    + 'Close the door and then sit down.',

  mechanism:
    'For the adult. '
    + 'Two step instructions are a memory exercise, '
    + 'and a child who starts moving on the first word '
    + 'has not failed to listen, '
    + 'they have run out of room to hold the second part. '
    + 'So say "listen to both" before you begin, '
    + 'and ask them to say it back before they move. '
    + 'Saying it back is what holds it. '
    + 'Keep the two steps in a sensible order, '
    + 'and keep them short. '
    + 'This skill is why a class can be taught at all, '
    + 'and it is worth more practice than it usually gets.',

  method: [
    'Stop and listen.',
    'Wait until both things have been said.',
    'Say them back to yourself.',
    'Do the first thing.',
    'Then do the second thing.',
    'Do them in that order.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Pick up the book and give it to me. What do you do first?',
      steps: [
        'The first thing said.',
      ],
      answer: 'Pick up the book.',
    },
    {
      level: 2,
      ask: 'You forgot the second part. What should you have done?',
      steps: [
        'Hold it by repeating it.',
      ],
      answer: 'Said both parts back to yourself before starting.',
    },
    {
      level: 3,
      ask: 'Why wait until the whole instruction is finished?',
      steps: [
        'Moving early loses the rest.',
      ],
      answer: 'Because if you start on the first word '
        + 'you will not hear the second part.',
    },
  ],

  traps: [
    {
      mistake: 'Starting before the instruction is finished.',
      why: 'Wait. Then you will have both parts.',
    },
    {
      mistake: 'Doing them the wrong way round.',
      why: 'First thing first. '
        + 'Say them back to check.',
    },
  ],

  extension:
    'Now three things. '
    + 'Listen to all three. '
    + 'Say them back. '
    + 'Then do them in order.',

  figure: {
    alt: 'A green one beside a cup on its own, then an arrow, then a green '
      + 'two beside the same cup standing on a table. The first is labelled '
      + 'pick up the cup and the second is labelled put it on the table.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="52" font-size="28" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">listen to both, then move</text>'
      + '<text x="80" y="234" font-size="56" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">1</text>'
      + '<polygon points="165,180 215,180 208,250 172,250"/>'
      + '<line x1="255" y1="215" x2="330" y2="215"/>'
      + '<polyline points="317,205 330,215 317,225"/>'
      + '<text x="380" y="234" font-size="56" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">2</text>'
      + '<line x1="430" y1="250" x2="570" y2="250"/>'
      + '<line x1="442" y1="250" x2="442" y2="320"/>'
      + '<line x1="558" y1="250" x2="558" y2="320"/>'
      + '<polygon points="478,180 538,180 531,248 485,248"/>'
      + '<text x="190" y="356" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">pick up the cup</text>'
      + '<text x="500" y="356" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">put it on the table</text></svg>',
  },
  questions: [
    {
      id: 'f2-1',
      ask: 'What do you do while the instruction is being given?',
      kind: 'choice',
      options: ['Listen to all of it', 'Start at once', 'Ask a question'],
      answer: 'Listen to all of it',
      teach: 'Then say it back to yourself.',
      level: 1,
    },
  ],
})

/* ── guessing what happens next ──────────────────────────────────────── */

teach({
  topicId: 'what-happens-next',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Stop the story. '
      + 'Say what you think happens next. '
      + 'Then say why you think so. '
      + 'The why is the important part.',
    method: [
      'Think about what has happened so far.',
      'Say what you think comes next.',
      'Say what made you think that.',
    ],
  },

  idea:
    'I will stop the story here. '
    + 'What do you think happens next? '
    + 'Now tell me why. '
    + 'What made you think that? '
    + 'Good. '
    + 'Now let us find out. '
    + 'Were you right?',

  mechanism:
    'For the adult. '
    + 'The guess does not matter and the reason does. '
    + 'A child who says "the goat runs away '
    + 'because the gate was left open" '
    + 'has used something from the story to work out something new, '
    + 'and that is the beginning of inference, '
    + 'which they will be examined on for the next twelve years. '
    + 'So always ask why, '
    + 'and never say the guess was wrong. '
    + 'Say "let us find out", read on, '
    + 'and if it went another way, that is interesting too. '
    + 'A child who learns that guessing is punished stops guessing, '
    + 'and then stops thinking ahead at all.',

  method: [
    'Listen to the story so far.',
    'Think what might happen next.',
    'Say it.',
    'Say what in the story made you think so.',
    'Read on and find out.',
  ],

  worked: [
    {
      level: 1,
      ask: 'The sky is full of black clouds. What happens next?',
      steps: [
        'What do black clouds bring?',
      ],
      answer: 'Rain. The clouds told you.',
    },
    {
      level: 2,
      ask: 'You guessed and it went another way. Were you wrong to guess?',
      steps: [
        'A guess with a reason is good work.',
      ],
      answer: 'No. A guess with a reason is worth making.',
    },
    {
      level: 3,
      ask: 'What is the important part of your answer?',
      steps: [
        'Not the guess itself.',
      ],
      answer: 'The reason. What in the story made you think it.',
    },
  ],

  traps: [
    {
      mistake: 'Guessing with no reason.',
      why: 'Say what made you think so. '
        + 'That is the part that counts.',
    },
    {
      mistake: 'Being afraid to be wrong.',
      why: 'A guess with a reason is good even when the story goes '
        + 'another way.',
    },
  ],

  extension:
    'Now stop the story yourself. '
    + 'Ask me what I think happens next. '
    + 'Then ask me why.',

  figure: {
    alt: 'A page of writing whose last line trails off into three dots, with '
      + 'a thought bubble beside it holding a question mark, labelled what '
      + 'happens next. Under them it says and why do you think so.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="50" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the story stops here</text>'
      + '<polygon points="60,86 290,86 290,250 60,250"/>'
      + '<line x1="84" y1="122" x2="266" y2="122"/>'
      + '<line x1="84" y1="152" x2="266" y2="152"/>'
      + '<line x1="84" y1="182" x2="266" y2="182"/>'
      + '<line x1="84" y1="212" x2="180" y2="212"/>'
      + '<text x="224" y="222" font-size="38" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">...</text>'
      + '<circle cx="316" cy="240" r="8"/>'
      + '<circle cx="338" cy="222" r="12"/>'
      + '<circle cx="366" cy="198" r="16"/>'
      + '<ellipse cx="480" cy="152" rx="128" ry="66"/>'
      + '<text x="480" y="176" font-size="64" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">?</text>'
      + '<text x="480" y="258" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">what happens next</text>'
      + '<text x="320" y="342" font-size="26" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">and why do you think so</text></svg>',
  },
  questions: [
    {
      id: 'wn-1',
      ask: 'After saying what happens next, what must you add?',
      kind: 'choice',
      options: ['Why you think so', 'The end of the story', 'Nothing'],
      answer: 'Why you think so',
      teach: 'The reason is the important part.',
      level: 3,
    },
  ],
})

/* ── the sound a word starts with ───────────────────────────────── */

teach({
  topicId: 'first-sound',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Every word starts with a sound. '
      + 'Say your name slowly. '
      + 'Listen to the very first bit. '
      + 'Now find something that starts the same.',
    method: [
      'Say the word slowly.',
      'Stop after the first sound.',
      'Find something else that starts the same.',
    ],
  },

  idea:
    'Say your name slowly. '
    + 'Listen to the very first sound. '
    + 'Just the first bit. '
    + 'Kofi starts with k. '
    + 'Ama starts with a. '
    + 'Now look around. '
    + 'Find something that starts with the same sound as your name. '
    + 'Say both words and listen.',

  mechanism:
    'For the adult. '
    + 'This is done with ears only. '
    + 'No letters, no writing, no print at all. '
    + 'The child is learning that a word is made of sounds, '
    + 'and that is the thing reading needs. '
    + 'Say the sound, not the letter name: '
    + 'k as in the beginning of Kofi, not the word "kay". '
    + 'That distinction matters more than it looks, '
    + 'because a child who learns letter names '
    + 'cannot use them to read a word. '
    + 'Start with the child’s own name, '
    + 'because they already attend to it, '
    + 'then move to names in the family. '
    + 'Do it anywhere, walking, cooking, waiting.',

  method: [
    'Say the word slowly.',
    'Say only the first sound.',
    'Say the sound, not the letter name.',
    'Now say another word.',
    'Listen to its first sound.',
    'Say whether they are the same.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What sound does Ama start with?',
      steps: [
        'Say it slowly. A-ma.',
      ],
      answer: 'The a sound.',
    },
    {
      level: 2,
      ask: 'Do Kofi and cup start with the same sound?',
      steps: [
        'Say both. Listen to the first bit only.',
      ],
      answer: 'Yes. Both start with the k sound.',
    },
    {
      level: 3,
      ask: 'Do mango and water start the same?',
      steps: [
        'm and w.',
      ],
      answer: 'No. They start with different sounds.',
    },
  ],

  traps: [
    {
      mistake: 'Listening to the whole word.',
      why: 'Only the first sound. '
        + 'Stop after the first bit.',
    },
    {
      mistake: 'Saying the letter name instead of the sound.',
      why: 'Say the sound it makes. '
        + 'Not kay, but the k at the start of Kofi.',
    },
  ],

  extension:
    'Now listen to the LAST sound. '
    + 'Cup ends with p. '
    + 'What does your name end with?',

  figure: {
    alt: 'The words Kofi and kente written side by side with the first '
      + 'letter of each in green and a green bracket under it. A green line '
      + 'curves from one to the other, and under them it says the same '
      + 'first sound.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="52" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">listen to the first bit</text>'
      + '<text x="60" y="186" font-size="56" text-anchor="start" '
      + 'fill="#0f8a4d" stroke="none">K</text>'
      + '<text x="100" y="186" font-size="56" text-anchor="start" '
      + 'fill="currentColor" stroke="none">ofi</text>'
      + '<polyline points="56,202 56,220 100,220 100,202" '
      + 'stroke="#0f8a4d"/>'
      + '<text x="340" y="186" font-size="56" text-anchor="start" '
      + 'fill="#0f8a4d" stroke="none">k</text>'
      + '<text x="376" y="186" font-size="56" text-anchor="start" '
      + 'fill="currentColor" stroke="none">ente</text>'
      + '<polyline points="336,202 336,220 376,220 376,202" '
      + 'stroke="#0f8a4d"/>'
      + '<path d="M 78 240 Q 210 290 356 240" stroke="#0f8a4d"/>'
      + '<text x="320" y="342" font-size="28" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">the same first sound</text></svg>',
  },
  questions: [
    {
      id: 'fs-1',
      ask: 'Where do you listen for the first sound?',
      kind: 'choice',
      options: [
        'At the start of the word',
        'At the end',
        'In the middle',
      ],
      answer: 'At the start of the word',
      teach: 'Stop after the first bit.',
      level: 1,
    },
    {
      id: 'fs-2',
      ask: 'Should you say the sound or the letter name?',
      kind: 'choice',
      options: ['The sound', 'The letter name', 'Both'],
      answer: 'The sound',
      teach: 'Sounds are what make words. Letter names do not.',
      level: 3,
    },
  ],
})

/* ── clapping the beats in a word ─────────────────────────────── */

teach({
  topicId: 'clap-syllables',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A word has parts you can clap. '
      + 'Ku-ma-si. Three claps. '
      + 'A-ma. Two claps. '
      + 'Say it slowly and clap each part.',
    method: [
      'Say the word slowly.',
      'Clap once for each part.',
      'Count the claps.',
    ],
  },

  idea:
    'Listen. Ku-ma-si. '
    + 'Clap with me. Three claps. '
    + 'Now A-ma. Two claps. '
    + 'Now your own name. '
    + 'Say it slowly and clap each part. '
    + 'How many claps? '
    + 'Now a long word. '
    + 'Clap it out.',

  mechanism:
    'For the adult. '
    + 'Clapping breaks a word into parts a child can hear, '
    + 'and hearing the parts is what reading needs. '
    + 'Do it with the whole body at first: '
    + 'clap, or stamp, or tap the table, '
    + 'because a movement makes the break obvious '
    + 'in a way that saying it slowly does not. '
    + 'Use names first, then places, then anything. '
    + 'Do not explain the word syllable. '
    + 'The child needs to hear the parts, not to name the idea. '
    + 'If they clap the wrong number, '
    + 'say the word yourself more slowly and clap it with them, '
    + 'rather than telling them the answer.',

  method: [
    'Say the word slowly.',
    'Clap once for each part.',
    'Count how many claps.',
    'Say the word again with the claps.',
    'Try a longer word.',
  ],

  worked: [
    {
      level: 1,
      ask: 'How many claps in Ko-fi?',
      steps: [
        'Say it slowly and clap.',
      ],
      answer: 'Two.',
    },
    {
      level: 2,
      ask: 'How many claps in Ku-ma-si?',
      steps: [
        'Clap each part.',
      ],
      answer: 'Three.',
    },
    {
      level: 3,
      ask: 'Which has more parts, mango or yam?',
      steps: [
        'Clap both.',
      ],
      answer: 'Mango. Man-go is two and yam is one.',
    },
  ],

  traps: [
    {
      mistake: 'Clapping for each letter.',
      why: 'Clap the parts you can say, not the letters.',
    },
    {
      mistake: 'Saying the word fast.',
      why: 'Slow it down. '
        + 'Then the parts can be heard.',
    },
  ],

  extension:
    'Now I clap and you guess the word. '
    + 'Three claps, and it is a town. '
    + 'Now clap the longest name you know.',

  figure: {
    alt: 'The name Kumasi written in three parts, Ku, ma and si, with a '
      + 'dotted line between the parts and a green clap drawn under each '
      + 'part. Under them it says three claps.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="52" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">clap each part</text>'
      + '<text x="130" y="190" font-size="54" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Ku</text>'
      + '<text x="310" y="190" font-size="54" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">ma</text>'
      + '<text x="480" y="190" font-size="54" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">si</text>'
      + '<line x1="215" y1="145" x2="215" y2="200" stroke-dasharray="7 7"/>'
      + '<line x1="395" y1="145" x2="395" y2="200" stroke-dasharray="7 7"/>'
      + '<line x1="142" y1="271" x2="157" y2="275" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="133" y1="280" x2="137" y2="295" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="122" y1="276" x2="110" y2="288" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="118" y1="265" x2="103" y2="261" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="127" y1="256" x2="123" y2="241" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="138" y1="260" x2="150" y2="248" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="322" y1="271" x2="337" y2="275" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="313" y1="280" x2="317" y2="295" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="302" y1="276" x2="290" y2="288" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="298" y1="265" x2="283" y2="261" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="307" y1="256" x2="303" y2="241" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="318" y1="260" x2="330" y2="248" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="492" y1="271" x2="507" y2="275" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="483" y1="280" x2="487" y2="295" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="472" y1="276" x2="460" y2="288" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="468" y1="265" x2="453" y2="261" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="477" y1="256" x2="473" y2="241" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<line x1="488" y1="260" x2="500" y2="248" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="320" y="350" font-size="28" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">three claps</text></svg>',
  },
  questions: [
    {
      id: 'cs-1',
      ask: 'How many claps in A-ma?',
      kind: 'choice',
      options: ['Two', 'Three', 'One'],
      answer: 'Two',
      teach: 'A and ma. Two parts.',
      level: 1,
    },
    {
      id: 'cs-2',
      ask: 'What do you clap for?',
      kind: 'choice',
      options: [
        'Each part of the word',
        'Each letter',
        'Each word',
      ],
      answer: 'Each part of the word',
      teach: 'Say it slowly and the parts come out.',
      level: 3,
    },
  ],
})

/* ── the marks say something ──────────────────────────────── */

teach({
  topicId: 'print-carries-meaning',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'I am reading the marks, not the picture. '
      + 'The marks say the words. '
      + 'The same marks say the same words every time. '
      + 'Follow my finger.',
    method: [
      'Watch my finger under the words.',
      'The marks are what I am saying.',
      'The same marks say the same thing tomorrow.',
    ],
  },

  idea:
    'Look at this page. '
    + 'Here is a picture. '
    + 'Here are some marks. '
    + 'I am reading the marks. '
    + 'Watch my finger. '
    + 'It moves along the marks while I speak. '
    + 'The marks say the words. '
    + 'Tomorrow I will read it again. '
    + 'It will say the same thing. '
    + 'The marks do not change.',

  mechanism:
    'For the adult. '
    + 'This is the most important thing in the subject '
    + 'and it is almost never taught, '
    + 'because adults assume it is obvious. '
    + 'It is not. '
    + 'Many children believe the adult is reading the picture, '
    + 'or making the story up, '
    + 'and a child who believes that has not started reading '
    + 'however many letters they can name. '
    + 'There is one action that fixes it: '
    + 'run your finger under the words as you read, '
    + 'every time, '
    + 'so the child sees the words being used. '
    + 'Then read the same page again next week '
    + 'and let them notice it says the same thing. '
    + 'Point out print outside books too: '
    + 'a shop sign, a lorry, a packet. '
    + 'All of it says something, and somebody wrote it on purpose.',

  method: [
    'Look at the page.',
    'Find the picture and find the marks.',
    'Watch the finger under the marks.',
    'Listen to the words as the finger moves.',
    'Read the same page again another day.',
    'Notice it says the same thing.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Am I reading the picture or the marks?',
      steps: [
        'Watch where the finger goes.',
      ],
      answer: 'The marks.',
    },
    {
      level: 2,
      ask: 'Tomorrow, will this page say the same words?',
      steps: [
        'The marks have not changed.',
      ],
      answer: 'Yes. The same marks say the same words.',
    },
    {
      level: 3,
      ask: 'The writing on a packet. Does it say something?',
      steps: [
        'Somebody wrote it on purpose.',
      ],
      answer: 'Yes. All print says something.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking the adult is reading the picture.',
      why: 'Watch the finger. '
        + 'It moves along the marks.',
    },
    {
      mistake: 'Thinking the story changes each time.',
      why: 'The marks do not change, '
        + 'so the words do not change.',
    },
  ],

  extension:
    'Find print outside this book. '
    + 'A shop sign. A lorry. A tin. '
    + 'Somebody wrote all of it, '
    + 'and it all says something.',

  figure: {
    alt: 'A page with a picture at the top and three lines of writing below '
      + 'it. A green arrow runs along under the first line from left to '
      + 'right, and beside the page it says the marks say the words. Under '
      + 'it says tomorrow they say the same thing.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<polygon points="60,80 420,80 420,330 60,330"/>'
      + '<polygon points="92,104 388,104 388,186 92,186"/>'
      + '<circle cx="140" cy="144" r="20"/>'
      + '<polygon points="250,118 210,168 290,168"/>'
      + '<line x1="96" y1="222" x2="384" y2="222"/>'
      + '<line x1="96" y1="276" x2="384" y2="276"/>'
      + '<line x1="96" y1="312" x2="300" y2="312"/>'
      + '<line x1="96" y1="244" x2="340" y2="244" stroke="#0f8a4d"/>'
      + '<polyline points="327,234 340,244 327,254" stroke="#0f8a4d"/>'
      + '<text x="520" y="250" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the marks</text>'
      + '<text x="520" y="278" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">say the words</text>'
      + '<text x="320" y="372" font-size="24" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">tomorrow they say the same '
      + 'thing</text></svg>',
  },
  questions: [
    {
      id: 'pm-1',
      ask: 'What is the reader reading?',
      kind: 'choice',
      options: ['The marks', 'The picture', 'Their own idea'],
      answer: 'The marks',
      teach: 'Watch the finger move along them.',
      level: 1,
    },
    {
      id: 'pm-2',
      ask: 'Read the same page next week. What happens?',
      kind: 'choice',
      options: [
        'It says the same words',
        'It says something new',
        'The picture changes',
      ],
      answer: 'It says the same words',
      teach: 'The marks have not changed.',
      level: 2,
    },
  ],
})

/* ── recognising letters ─────────────────────────────────── */

teach({
  topicId: 'letter-shapes',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Your name is written with letters. '
      + 'This is the first letter of your name. '
      + 'Look for it in other places. '
      + 'It is the same letter wherever it is.',
    method: [
      'Look at your own name written down.',
      'Find the first letter.',
      'Then find that letter somewhere else.',
    ],
  },

  idea:
    'Here is your name, written down. '
    + 'This is the first letter. '
    + 'Look at its shape. '
    + 'Trace it with your finger. '
    + 'Now look at this sign. '
    + 'Can you find your letter in it? '
    + 'It is the same letter. '
    + 'It is in a different word, '
    + 'and it is still your letter.',

  mechanism:
    'For the adult. '
    + 'Start with the letters of the child’s own name '
    + 'and nothing else. '
    + 'Attention is already there, '
    + 'so a letter that belongs to them is learned in a morning, '
    + 'while a letter from a chart takes weeks. '
    + 'Then hunt for that letter everywhere: '
    + 'signs, packets, lorries, other children’s names. '
    + 'Finding it in a strange word '
    + 'is what teaches that the letter is a thing in itself, '
    + 'not part of the picture of their name. '
    + 'Trace the shape with a finger, in the air, in sand, in dust. '
    + 'Do not ask for writing yet, '
    + 'and do not insist on the letter name. '
    + 'Recognising the shape is this lesson; '
    + 'the sound it makes is the next one.',

  method: [
    'Look at your name written down.',
    'Find the first letter.',
    'Trace its shape with your finger.',
    'Trace it in the air.',
    'Now find the same letter somewhere else.',
    'Say that it is your letter.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Which letter shall we learn first?',
      steps: [
        'The one you see most.',
      ],
      answer: 'The first letter of your own name.',
    },
    {
      level: 2,
      ask: 'You found your letter in a shop sign. Is it the same letter?',
      steps: [
        'The shape is the same.',
      ],
      answer: 'Yes. A letter is the same letter wherever it is.',
    },
    {
      level: 3,
      ask: 'Must you know the letter’s name to find it?',
      steps: [
        'You are matching the shape.',
      ],
      answer: 'No. You can find it by its shape.',
    },
  ],

  traps: [
    {
      mistake: 'Learning the name as one picture.',
      why: 'It is made of separate letters. '
        + 'Find one of them somewhere else.',
    },
    {
      mistake: 'Learning letters from a chart first.',
      why: 'Start with your own name. '
        + 'Those letters mean something to you.',
    },
  ],

  extension:
    'Now find the letters of your friend’s name. '
    + 'Do any of them appear in yours? '
    + 'Which letters do you both have?',

  figure: {
    alt: 'The name Ama on the left with its first letter A in green, and a '
      + 'sign on the right reading Akwaaba with its first letter A in green '
      + 'as well. The name is labelled your name and the sign is labelled a '
      + 'sign, and under them it says the same letter in both.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="50" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">find your letter somewhere '
      + 'else</text>'
      + '<text x="70" y="196" font-size="60" text-anchor="start" '
      + 'fill="#0f8a4d" stroke="none">A</text>'
      + '<text x="118" y="196" font-size="60" text-anchor="start" '
      + 'fill="currentColor" stroke="none">ma</text>'
      + '<text x="150" y="250" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">your name</text>'
      + '<polygon points="330,126 600,126 600,222 330,222"/>'
      + '<text x="372" y="190" font-size="40" text-anchor="start" '
      + 'fill="#0f8a4d" stroke="none">A</text>'
      + '<text x="404" y="190" font-size="40" text-anchor="start" '
      + 'fill="currentColor" stroke="none">kwaaba</text>'
      + '<text x="465" y="266" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a sign</text>'
      + '<text x="320" y="348" font-size="28" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">the same letter in both</text></svg>',
  },
  questions: [
    {
      id: 'lt-1',
      ask: 'Which letters are easiest to learn first?',
      kind: 'choice',
      options: [
        'The letters of your own name',
        'The last letters of the alphabet',
        'Any letters',
      ],
      answer: 'The letters of your own name',
      teach: 'Your attention is already there.',
      level: 1,
    },
    {
      id: 'lt-2',
      ask: 'The same letter in a different word is:',
      kind: 'choice',
      options: [
        'Still the same letter',
        'A different letter',
        'Part of the picture',
      ],
      answer: 'Still the same letter',
      teach: 'A letter is a thing in itself.',
      level: 2,
    },
  ],
})

/* ── drawing something and saying what it is ──────────────── */

teach({
  topicId: 'draw-and-say',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Draw something that happened. '
      + 'Then tell somebody about your drawing. '
      + 'Say who is in it and what they are doing. '
      + 'Your drawing holds the story until you tell it.',
    method: [
      'Draw what happened.',
      'Point at the parts and name them.',
      'Tell what is happening in the drawing.',
    ],
  },

  idea:
    'Draw something that happened today. '
    + 'Now tell me about it. '
    + 'Who is this? '
    + 'What are they doing? '
    + 'Where are they? '
    + 'What happened after that? '
    + 'Your drawing kept the story for you. '
    + 'Now I know what happened.',

  mechanism:
    'For the adult. '
    + 'This is the first form of writing. '
    + 'The child puts something down on paper, '
    + 'and then the paper reminds them what to say, '
    + 'which is exactly what writing does for the rest of their life. '
    + 'So the talking afterwards is the lesson, not the drawing. '
    + 'Ask who, what and where, '
    + 'and let them point. '
    + 'Do not correct the drawing. '
    + 'A head with legs is a person at this age. '
    + 'If you write a sentence under the picture '
    + 'while the child watches and says it, '
    + 'they see their own words become marks, '
    + 'which is worth more than any letter chart.',

  method: [
    'Think of something that happened.',
    'Draw it.',
    'Point at each part and name it.',
    'Say what is happening.',
    'Say who is in it.',
    'Tell the whole thing in order.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You have drawn your picture. What next?',
      steps: [
        'The drawing is only half of it.',
      ],
      answer: 'Tell somebody about it.',
    },
    {
      level: 2,
      ask: 'What should you say about your drawing?',
      steps: [
        'Who, what and where.',
      ],
      answer: 'Who is in it, what they are doing, and where they are.',
    },
    {
      level: 3,
      ask: 'What is the drawing for?',
      steps: [
        'It holds the story.',
      ],
      answer: 'It reminds you what to say, '
        + 'which is what writing does too.',
    },
  ],

  traps: [
    {
      mistake: 'Drawing and saying nothing.',
      why: 'The telling is the lesson. '
        + 'Say who and what.',
    },
    {
      mistake: 'Worrying that the drawing is not good.',
      why: 'It only has to remind you. '
        + 'Nobody is marking the picture.',
    },
  ],

  extension:
    'Now I write your words under the picture. '
    + 'Watch. '
    + 'Those marks say what you just said. '
    + 'Now I can read them back to you.',

  figure: {
    alt: 'A sheet of paper with a child drawing on it, a sun, a house and a '
      + 'person. An arrow points from three green questions, who, what and '
      + 'where, back to the drawing. Under it says your drawing keeps the '
      + 'story.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<polygon points="50,90 340,90 340,330 50,330"/>'
      + '<circle cx="105" cy="142" r="24"/>'
      + '<line x1="137" y1="142" x2="149" y2="142"/>'
      + '<line x1="128" y1="165" x2="136" y2="173"/>'
      + '<line x1="105" y1="174" x2="105" y2="186"/>'
      + '<line x1="82" y1="165" x2="74" y2="173"/>'
      + '<line x1="73" y1="142" x2="61" y2="142"/>'
      + '<line x1="82" y1="119" x2="74" y2="111"/>'
      + '<line x1="105" y1="110" x2="105" y2="98"/>'
      + '<line x1="128" y1="119" x2="136" y2="111"/>'
      + '<polygon points="205,205 305,205 305,292 205,292"/>'
      + '<polygon points="255,160 195,205 315,205"/>'
      + '<circle cx="140" cy="232" r="16"/>'
      + '<line x1="140" y1="248" x2="140" y2="286"/>'
      + '<line x1="116" y1="262" x2="164" y2="262"/>'
      + '<line x1="140" y1="286" x2="126" y2="312"/>'
      + '<line x1="140" y1="286" x2="154" y2="312"/>'
      + '<line x1="445" y1="212" x2="370" y2="212"/>'
      + '<polyline points="383,202 370,212 383,222"/>'
      + '<text x="530" y="162" font-size="30" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">who</text>'
      + '<text x="530" y="214" font-size="30" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">what</text>'
      + '<text x="530" y="266" font-size="30" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">where</text>'
      + '<text x="320" y="372" font-size="26" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">your drawing keeps the story</text>'
      + '</svg>',
  },
  questions: [
    {
      id: 'ds-1',
      ask: 'What do you do after drawing?',
      kind: 'choice',
      options: [
        'Tell somebody about it',
        'Draw another one',
        'Put it away',
      ],
      answer: 'Tell somebody about it',
      teach: 'The telling is the lesson.',
      level: 1,
    },
    {
      id: 'ds-2',
      ask: 'What is the drawing for?',
      kind: 'choice',
      options: [
        'To remind you what to say',
        'To look nice',
        'To show you can draw',
      ],
      answer: 'To remind you what to say',
      teach: 'That is what writing does as well.',
      level: 3,
    },
  ],
})
