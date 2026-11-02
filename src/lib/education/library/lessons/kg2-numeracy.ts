/**
 * Stored lessons for KG 2 Numeracy.
 *
 * Spoken, like the rest of the early years. `mechanism` is addressed to the
 * adult helping, and the reading check scores those separately.
 *
 * ── The year the amount stops depending on the arrangement ────────────────
 *
 * `same-number-moved` is the lesson the whole year rests on, and it is the
 * one that sounds too obvious to teach. Spread four stones out and a child
 * will tell you there are more, because at this age the amount and the look
 * of it are the same thing. Until they come apart, nothing else is safe:
 * sharing, taking away and counting on all give answers the child cannot
 * trust.
 *
 * So `same-number-moved`, `one-more-one-less`, `take-some-away` and
 * `number-stories` are written in that order on purpose, and the later ones
 * refer back.
 *
 * `write-numerals` is last in the file and last in importance. Recognising a
 * numeral is KG 1 work and forming one is a hand skill, so a child who can
 * read 7 and not write it is not behind.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── counting backwards ─────────────────────────────────────────────────── */

teach({
  topicId: 'count-back',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Ten. Nine. Eight. Seven. '
      + 'Counting back goes down by one each time. '
      + 'Taking one away sounds like counting back.',
    method: [
      'Start at ten.',
      'Say the number that comes before.',
      'Keep going down to one.',
    ],
  },

  idea:
    'Now we count the other way. '
    + 'Ten. Nine. Eight. Seven. Six. '
    + 'Five. Four. Three. Two. One. '
    + 'Say it with me. '
    + 'Each time the number goes down by one. '
    + 'Take one stone away and count. '
    + 'You hear the same thing.',

  mechanism:
    'For the adult. '
    + 'Counting back is much harder than counting on, '
    + 'and it is worth the trouble '
    + 'because it is what subtraction sounds like. '
    + 'A child who can count back from ten '
    + 'can later take three away by counting back three, '
    + 'and one who cannot has to start again from one every time. '
    + 'Use real objects and take one away as you say each number, '
    + 'so the words and the shrinking group happen together. '
    + 'Going backwards from a number in the middle, '
    + 'such as from seven, '
    + 'is harder still, and is the thing to work towards. '
    + 'A rocket countdown or a hiding game gives a reason to do it.',

  method: [
    'Put ten stones out.',
    'Say ten.',
    'Take one away and say nine.',
    'Keep taking one and saying the next number down.',
    'Carry on to one.',
    'Now count back with no stones.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What comes before eight?',
      steps: [
        'Count back from ten.',
      ],
      answer: 'Seven.',
    },
    {
      level: 2,
      ask: 'Count back from five.',
      steps: [
        'Go down one at a time.',
      ],
      answer: 'Five, four, three, two, one.',
    },
    {
      level: 3,
      ask: 'What does counting back sound like?',
      steps: [
        'Take one away each time.',
      ],
      answer: 'Taking one away.',
    },
  ],

  traps: [
    {
      mistake: 'Counting forwards by mistake.',
      why: 'We are going down. '
        + 'Ten, nine, eight.',
    },
    {
      mistake: 'Skipping a number going down.',
      why: 'Take one stone away for each number. '
        + 'Then none can be missed.',
    },
  ],

  extension:
    'Now count back from seven. '
    + 'Do not start at ten. '
    + 'Seven, six, five.',

  figure: {
    alt: 'Ten bars standing side by side on a line, falling like a staircase '
      + 'from a bar of ten on the left to a bar of one on the right. The '
      + 'number under each bar reads ten, nine, eight and so on down to '
      + 'one, and a green arrow under them runs left to right labelled down '
      + 'by one each time.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<polygon points="37,70 73,70 73,260 37,260"/>'
      + '<polygon points="97,89 133,89 133,260 97,260"/>'
      + '<polygon points="157,108 193,108 193,260 157,260"/>'
      + '<polygon points="217,127 253,127 253,260 217,260"/>'
      + '<polygon points="277,146 313,146 313,260 277,260"/>'
      + '<polygon points="337,165 373,165 373,260 337,260"/>'
      + '<polygon points="397,184 433,184 433,260 397,260"/>'
      + '<polygon points="457,203 493,203 493,260 457,260"/>'
      + '<polygon points="517,222 553,222 553,260 517,260"/>'
      + '<polygon points="577,241 613,241 613,260 577,260"/>'
      + '<line x1="30" y1="260" x2="610" y2="260"/>'
      + '<text x="55" y="292" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">10</text>'
      + '<text x="115" y="292" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">9</text>'
      + '<text x="175" y="292" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">8</text>'
      + '<text x="235" y="292" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">7</text>'
      + '<text x="295" y="292" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">6</text>'
      + '<text x="355" y="292" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">5</text>'
      + '<text x="415" y="292" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">4</text>'
      + '<text x="475" y="292" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">3</text>'
      + '<text x="535" y="292" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">2</text>'
      + '<text x="595" y="292" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">1</text>'
      + '<line x1="40" y1="330" x2="600" y2="330" stroke="#0f8a4d"/>'
      + '<polyline points="587,320 600,330 587,340" stroke="#0f8a4d"/>'
      + '<text x="320" y="376" font-size="26" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">down by one each time</text></svg>',
  },
  questions: [
    {
      id: 'cb-1',
      ask: 'What comes before six?',
      kind: 'choice',
      options: ['Five', 'Seven', 'Four'],
      answer: 'Five',
      teach: 'Counting back goes down by one.',
      level: 1,
    },
    {
      id: 'cb-2',
      ask: 'Counting back is like:',
      kind: 'choice',
      options: [
        'Taking one away',
        'Adding one',
        'Sharing',
      ],
      answer: 'Taking one away',
      teach: 'The group gets smaller by one each time.',
      level: 3,
    },
  ],
})

/* ── moving things does not change how many ─────────────────────────── */

teach({
  topicId: 'same-number-moved',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Four stones close together. '
      + 'Now spread them out. '
      + 'Still four. '
      + 'Moving things does not change how many there are. '
      + 'Count and see.',
    method: [
      'Count the group.',
      'Watch them being moved.',
      'Count again. The answer is the same.',
    ],
  },

  idea:
    'Count these stones. Four. '
    + 'Now watch. I spread them out. '
    + 'Did I take any away? No. '
    + 'Did I add any? No. '
    + 'So how many now? '
    + 'Count them. '
    + 'Still four. '
    + 'They look bigger spread out. '
    + 'But it is still four.',

  mechanism:
    'For the adult. '
    + 'This is the most important lesson of the year '
    + 'and it looks too obvious to teach. '
    + 'Spread four stones out and most five year olds '
    + 'will say there are now more, '
    + 'and they are not being silly: '
    + 'at this age the amount and the look of it are one thing. '
    + 'Prying them apart is what makes arithmetic possible, '
    + 'because a child who thinks the amount changes when things move '
    + 'cannot trust any answer they get. '
    + 'So do it with them watching, '
    + 'and ask the two questions: did I take any away, did I add any. '
    + 'Then count. '
    + 'Do it many times, with different objects, '
    + 'until the child answers before counting. '
    + 'Do not tell them they are wrong. Let the counting tell them.',

  method: [
    'Count the group and say how many.',
    'Watch them being spread out or pushed together.',
    'Ask: was any taken away?',
    'Ask: was any added?',
    'If neither, the answer is the same.',
    'Count again to check.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Four stones get spread out. How many now?',
      steps: [
        'Nothing was added or taken.',
      ],
      answer: 'Four.',
    },
    {
      level: 2,
      ask: 'The row looks longer. Does it have more?',
      steps: [
        'Count it.',
      ],
      answer: 'No. Looking longer is not having more.',
    },
    {
      level: 3,
      ask: 'What would change how many there are?',
      steps: [
        'Only two things.',
      ],
      answer: 'Adding some, or taking some away.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the spread out row has more.',
      why: 'Nothing was added. '
        + 'Count it and see.',
    },
    {
      mistake: 'Deciding by how the group looks.',
      why: 'Count it. '
        + 'The look can trick you.',
    },
  ],

  extension:
    'Now pile them up. '
    + 'They look like fewer. '
    + 'Count them. Still four. '
    + 'Only adding or taking away changes the number.',

  figure: {
    alt: 'Four stones close together in a row labelled four. An arrow points '
      + 'down to the same four stones spread right across the page, '
      + 'labelled still four.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<circle cx="80" cy="110" r="22"/>'
      + '<circle cx="132" cy="110" r="22"/>'
      + '<circle cx="184" cy="110" r="22"/>'
      + '<circle cx="236" cy="110" r="22"/>'
      + '<text x="158" y="175" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">four</text>'
      + '<text x="480" y="118" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">I move them</text>'
      + '<line x1="320" y1="205" x2="320" y2="252"/>'
      + '<polyline points="310,239 320,252 330,239"/>'
      + '<circle cx="70" cy="300" r="22"/>'
      + '<circle cx="220" cy="300" r="22"/>'
      + '<circle cx="370" cy="300" r="22"/>'
      + '<circle cx="520" cy="300" r="22"/>'
      + '<text x="320" y="372" font-size="30" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">still four</text></svg>',
  },
  questions: [
    {
      id: 'sm-1',
      ask: 'Five stones are pushed close together. How many?',
      kind: 'choice',
      options: ['Five', 'Fewer than five', 'More than five'],
      answer: 'Five',
      teach: 'Nothing was added or taken away.',
      level: 1,
    },
    {
      id: 'sm-2',
      ask: 'What changes how many there are?',
      kind: 'choice',
      options: [
        'Adding or taking away',
        'Moving them',
        'Spreading them out',
      ],
      answer: 'Adding or taking away',
      teach: 'Moving them changes nothing.',
      level: 3,
    },
  ],
})

/* ── one more and one less ───────────────────────────────────────── */

teach({
  topicId: 'one-more-one-less',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'One more than four is five. '
      + 'One less than four is three. '
      + 'One more is the next number up. '
      + 'One less is the next number down.',
    method: [
      'Say the number.',
      'For one more, say the next number up.',
      'For one less, say the next number down.',
    ],
  },

  idea:
    'Here are four stones. '
    + 'I add one more. '
    + 'Count. Five. '
    + 'One more than four is five. '
    + 'Now I take one away. '
    + 'Count. Three. '
    + 'One less than four is three. '
    + 'One more is the next number when you count up. '
    + 'One less is the next number when you count back.',

  mechanism:
    'For the adult. '
    + 'This is where counting becomes arithmetic, '
    + 'and the step is small enough to be made properly. '
    + 'One more is not an addition the child has to work out. '
    + 'It is the next number they already know. '
    + 'Say that out loud: '
    + '"one more than six, so what comes after six". '
    + 'One less is the same thing backwards, '
    + 'which is why counting back was taught first '
    + 'and why this is the harder half. '
    + 'Use objects until they answer without them. '
    + 'When a child can say one less than seven without counting, '
    + 'they have a number line in their head, '
    + 'and everything after this gets easier.',

  method: [
    'Say the starting number.',
    'For one more, count up one.',
    'For one less, count back one.',
    'Check with stones if you are not sure.',
    'Say the whole sentence: one more than four is five.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What is one more than three?',
      steps: [
        'What comes after three?',
      ],
      answer: 'Four.',
    },
    {
      level: 2,
      ask: 'What is one less than six?',
      steps: [
        'Count back one from six.',
      ],
      answer: 'Five.',
    },
    {
      level: 3,
      ask: 'One more than nine is:',
      steps: [
        'The next number after nine.',
      ],
      answer: 'Ten.',
    },
  ],

  traps: [
    {
      mistake: 'Counting the whole group again.',
      why: 'One more is just the next number. '
        + 'You already know it.',
    },
    {
      mistake: 'Mixing up more and less.',
      why: 'More goes up. '
        + 'Less goes down.',
    },
  ],

  extension:
    'Now two more. '
    + 'Two more than four is six. '
    + 'Count up twice. '
    + 'Now two less.',

  figure: {
    alt: 'Three rows of stones. The middle row has four stones and is '
      + 'labelled four. The top row has three stones and a dotted empty '
      + 'place where the fourth was, labelled one less is three. The bottom '
      + 'row has four stones and a green fifth one, labelled one more is '
      + 'five.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<circle cx="70" cy="90" r="22"/><circle cx="122" cy="90" r="22"/>'
      + '<circle cx="174" cy="90" r="22"/>'
      + '<circle cx="226" cy="90" r="22" stroke-dasharray="7 7"/>'
      + '<text x="300" y="100" font-size="26" text-anchor="start" '
      + 'fill="currentColor" stroke="none">one less is three</text>'
      + '<circle cx="70" cy="190" r="22"/>'
      + '<circle cx="122" cy="190" r="22"/>'
      + '<circle cx="174" cy="190" r="22"/>'
      + '<circle cx="226" cy="190" r="22"/>'
      + '<text x="300" y="200" font-size="26" text-anchor="start" '
      + 'fill="currentColor" stroke="none">four</text>'
      + '<circle cx="70" cy="290" r="22"/>'
      + '<circle cx="122" cy="290" r="22"/>'
      + '<circle cx="174" cy="290" r="22"/>'
      + '<circle cx="226" cy="290" r="22"/>'
      + '<circle cx="278" cy="290" r="22" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="330" y="300" font-size="26" text-anchor="start" '
      + 'fill="#0f8a4d" stroke="none">one more is five</text></svg>',
  },
  questions: [
    {
      id: 'om-1',
      ask: 'One more than seven is:',
      kind: 'choice',
      options: ['Eight', 'Six', 'Nine'],
      answer: 'Eight',
      teach: 'The next number up.',
      level: 1,
    },
    {
      id: 'om-2',
      ask: 'One less than ten is:',
      kind: 'choice',
      options: ['Nine', 'Eleven', 'Eight'],
      answer: 'Nine',
      teach: 'Count back one.',
      level: 2,
    },
  ],
})

/* ── taking some away ──────────────────────────────────────── */

teach({
  topicId: 'take-some-away',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Start with the whole group. '
      + 'Take some out. '
      + 'Count what is left. '
      + 'Taking away leaves fewer.',
    method: [
      'Count the whole group first.',
      'Take out the number asked for.',
      'Count only what is left.',
    ],
  },

  idea:
    'Here are five mangoes. '
    + 'Count them. Five. '
    + 'Now I take two away. '
    + 'Move them right away, so they are not in the group. '
    + 'Now count what is left. '
    + 'One, two, three. '
    + 'Five take away two leaves three. '
    + 'There are fewer than before.',

  mechanism:
    'For the adult. '
    + 'Two physical habits make this reliable. '
    + 'First, count the whole group before taking anything, '
    + 'and say the number aloud, '
    + 'because the child needs to know what they started with. '
    + 'Second, move the taken ones well away, '
    + 'out of arm’s reach if possible, '
    + 'because a child counting what is left '
    + 'will include the pile beside it otherwise. '
    + 'That is not a mistake about subtracting; '
    + 'it is a mistake about which things to count. '
    + 'Use food, or anything the child wants, '
    + 'so taking away means something to them. '
    + 'And say both words: '
    + 'take away, and how many are left.',

  method: [
    'Count the whole group and say how many.',
    'Take out the number asked for.',
    'Move them well away.',
    'Count only what is left.',
    'Say the whole sentence: five take away two leaves three.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Three stones. Take one away. How many left?',
      steps: [
        'Move one away.',
        'Count the rest.',
      ],
      answer: 'Two.',
    },
    {
      level: 2,
      ask: 'Five cups. Take two away. How many left?',
      steps: [
        'Count five first.',
        'Move two away.',
        'Count what is left.',
      ],
      answer: 'Three.',
    },
    {
      level: 3,
      ask: 'Does taking away leave more or fewer?',
      steps: [
        'Some have gone.',
      ],
      answer: 'Fewer.',
    },
  ],

  traps: [
    {
      mistake: 'Counting the taken ones as well.',
      why: 'Move them well away. '
        + 'Count only what is left.',
    },
    {
      mistake: 'Not counting the group first.',
      why: 'You need to know what you started with.',
    },
  ],

  extension:
    'Now do it without moving them. '
    + 'Five, and take away two. '
    + 'Count back two. Four, three. '
    + 'The answer is three.',

  figure: {
    alt: 'Five mangoes in a row at the top labelled five to start. An arrow '
      + 'points down to three mangoes drawn in green on the left, labelled '
      + 'three left, while two mangoes sit far away on the right inside a '
      + 'dotted box labelled taken away.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<ellipse cx="90" cy="100" rx="28" ry="24"/>'
      + '<ellipse cx="160" cy="100" rx="28" ry="24"/>'
      + '<ellipse cx="230" cy="100" rx="28" ry="24"/>'
      + '<ellipse cx="300" cy="100" rx="28" ry="24"/>'
      + '<ellipse cx="370" cy="100" rx="28" ry="24"/>'
      + '<text x="540" y="110" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">five to start</text>'
      + '<line x1="230" y1="148" x2="230" y2="192"/>'
      + '<polyline points="220,179 230,192 240,179"/>'
      + '<ellipse cx="90" cy="270" rx="28" ry="24" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<ellipse cx="160" cy="270" rx="28" ry="24" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<ellipse cx="230" cy="270" rx="28" ry="24" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="160" y="345" font-size="28" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">three left</text>'
      + '<polygon points="430,228 600,228 600,312 430,312" '
      + 'stroke-dasharray="8 8"/>'
      + '<ellipse cx="485" cy="270" rx="28" ry="24"/>'
      + '<ellipse cx="550" cy="270" rx="28" ry="24"/>'
      + '<text x="515" y="348" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">taken away</text></svg>',
  },
  questions: [
    {
      id: 'ta-1',
      ask: 'Four stones, take one away. How many left?',
      kind: 'choice',
      options: ['Three', 'Five', 'Four'],
      answer: 'Three',
      teach: 'Count only what is left.',
      level: 1,
    },
    {
      id: 'ta-2',
      ask: 'Taking away leaves:',
      kind: 'choice',
      options: ['Fewer', 'More', 'The same'],
      answer: 'Fewer',
      teach: 'Some of them have gone.',
      level: 3,
    },
  ],
})

/* ── number stories out loud ───────────────────────────── */

teach({
  topicId: 'number-stories',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Listen to the story. '
      + 'Find the two numbers. '
      + 'Ask whether things came together or went away. '
      + 'Then say the answer.',
    method: [
      'Listen for the numbers.',
      'Ask: more coming, or some going?',
      'Count it out on your fingers.',
    ],
  },

  idea:
    'Listen. '
    + 'You have three mangoes. '
    + 'Your aunt gives you two more. '
    + 'How many now? '
    + 'Use your fingers. Three, and two more. '
    + 'Five. '
    + 'Now listen to this one. '
    + 'You have four cups and you break one. '
    + 'How many now? '
    + 'Something went away, so there are fewer. '
    + 'Three.',

  mechanism:
    'For the adult. '
    + 'Nothing is written down in these, '
    + 'and that is deliberate: '
    + 'the child is learning to hear what a story is asking. '
    + 'The question to teach is "did more come, or did some go", '
    + 'because that single question chooses the operation, '
    + 'and it is the same question they will be answering '
    + 'in word problems for the next ten years. '
    + 'Use people the child knows and things they care about. '
    + 'Let them use fingers or stones, '
    + 'and never hurry them off the fingers. '
    + 'Fingers are a number line that cannot be lost. '
    + 'Ask them to tell YOU a number story afterwards, '
    + 'which shows whether they have understood the shape of it.',

  method: [
    'Listen to the whole story.',
    'Say the two numbers you heard.',
    'Ask whether more came or some went.',
    'More coming means join them.',
    'Some going means take away.',
    'Count it on your fingers.',
    'Say the answer in a sentence.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Two fowls, and one more comes. How many?',
      steps: [
        'More came.',
        'Count on.',
      ],
      answer: 'Three.',
    },
    {
      level: 2,
      ask: 'Five oranges and you eat two. How many left?',
      steps: [
        'Some went away.',
        'Count back two.',
      ],
      answer: 'Three.',
    },
    {
      level: 3,
      ask: 'How do you know whether to join or take away?',
      steps: [
        'Listen to what happened in the story.',
      ],
      answer: 'Ask whether more came, or some went.',
    },
  ],

  traps: [
    {
      mistake: 'Joining when something went away.',
      why: 'Listen again. '
        + 'Did more come, or did some go?',
    },
    {
      mistake: 'Taking the fingers away too soon.',
      why: 'Fingers are allowed. '
        + 'They are a number line you cannot lose.',
    },
  ],

  extension:
    'Now you tell me a number story. '
    + 'Use two numbers. '
    + 'Then ask me the question.',

  figure: {
    alt: 'At the top it asks whether more came or some went. The first row '
      + 'shows three stones, an arrow, and then five stones with the two '
      + 'new ones drawn in green, labelled more came. The second row shows '
      + 'four stones, an arrow, and then three stones with a dotted empty '
      + 'place, labelled some went.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">did more come, or did some '
      + 'go</text><circle cx="60" cy="140" r="20"/>'
      + '<circle cx="110" cy="140" r="20"/>'
      + '<circle cx="160" cy="140" r="20"/>'
      + '<line x1="200" y1="140" x2="250" y2="140"/>'
      + '<polyline points="237,130 250,140 237,150"/>'
      + '<circle cx="290" cy="140" r="20"/>'
      + '<circle cx="340" cy="140" r="20"/>'
      + '<circle cx="390" cy="140" r="20"/>'
      + '<circle cx="440" cy="140" r="20" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<circle cx="490" cy="140" r="20" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="390" y="200" font-size="24" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">more came</text>'
      + '<circle cx="60" cy="280" r="20"/>'
      + '<circle cx="110" cy="280" r="20"/>'
      + '<circle cx="160" cy="280" r="20"/>'
      + '<circle cx="210" cy="280" r="20"/>'
      + '<line x1="250" y1="280" x2="300" y2="280"/>'
      + '<polyline points="287,270 300,280 287,290"/>'
      + '<circle cx="340" cy="280" r="20"/>'
      + '<circle cx="390" cy="280" r="20"/>'
      + '<circle cx="440" cy="280" r="20"/>'
      + '<circle cx="490" cy="280" r="20" stroke-dasharray="6 6"/>'
      + '<text x="390" y="340" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">some went</text></svg>',
  },
  questions: [
    {
      id: 'ns-1',
      ask: 'Three stones and two more. How many?',
      kind: 'choice',
      options: ['Five', 'One', 'Four'],
      answer: 'Five',
      teach: 'More came, so count on.',
      level: 1,
    },
    {
      id: 'ns-2',
      ask: 'What question tells you what to do?',
      kind: 'choice',
      options: [
        'Did more come, or did some go?',
        'How big are the numbers?',
        'Who is in the story?',
      ],
      answer: 'Did more come, or did some go?',
      teach: 'That question chooses joining or taking away.',
      level: 3,
    },
  ],
})

/* ── giving everyone the same ─────────────────────────── */

teach({
  topicId: 'share-equally',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Share by giving one at a time, round and round. '
      + 'One for you, one for me, one for you. '
      + 'Keep going until they are finished. '
      + 'Then everybody has the same.',
    method: [
      'Give one to each person in turn.',
      'Go round again.',
      'Stop when they run out, then check they match.',
    ],
  },

  idea:
    'Here are six stones to share between two people. '
    + 'Give one to you. '
    + 'Give one to me. '
    + 'One to you. One to me. '
    + 'One to you. One to me. '
    + 'They are finished. '
    + 'Count yours. Three. '
    + 'Count mine. Three. '
    + 'The same. That is fair.',

  mechanism:
    'For the adult. '
    + 'One at a time, going round, is the method, '
    + 'and it is worth insisting on, '
    + 'because it is fair whatever the numbers are '
    + 'and it needs no arithmetic at all. '
    + 'A child who grabs a handful and then adjusts '
    + 'has to compare and correct, '
    + 'and usually gets it wrong with larger numbers. '
    + 'Going round one at a time cannot go wrong. '
    + 'Then check at the end by counting both piles, '
    + 'or better, by matching them one to one, '
    + 'which the child learned last year. '
    + 'When the sharing does not come out even, '
    + 'say so plainly: '
    + 'there is one left over and it cannot be shared. '
    + 'That is an honest answer and the beginning of remainders.',

  method: [
    'Decide how many people are sharing.',
    'Give one to the first person.',
    'Give one to the next.',
    'Keep going round.',
    'Stop when the things run out.',
    'Count each person’s pile.',
    'Check they are the same.',
    'Say if there is one left over.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Four stones between two people. How many each?',
      steps: [
        'One each, then one each again.',
      ],
      answer: 'Two each.',
    },
    {
      level: 2,
      ask: 'Six stones between three people. How many each?',
      steps: [
        'Go round giving one at a time.',
      ],
      answer: 'Two each.',
    },
    {
      level: 3,
      ask: 'Five stones between two people. What happens?',
      steps: [
        'Go round one at a time.',
        'Two each, and one is left.',
      ],
      answer: 'Two each, and one left over that cannot be shared.',
    },
  ],

  traps: [
    {
      mistake: 'Grabbing a handful and then adjusting.',
      why: 'Go round one at a time. '
        + 'Then it cannot be unfair.',
    },
    {
      mistake: 'Giving two to one person in a round.',
      why: 'One each, every time round.',
    },
  ],

  extension:
    'Now share something that does not come out even. '
    + 'Seven stones between two. '
    + 'Three each and one left over. '
    + 'What could you do with the last one?',

  figure: {
    alt: 'Six stones in a row at the top labelled six to share. Two arrows '
      + 'lead down from them, one to the left and one to the right, into '
      + 'two rings labelled you and me. Each ring holds three stones, and '
      + 'under them it says three each, the same.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<circle cx="160" cy="80" r="20"/><circle cx="210" cy="80" r="20"/>'
      + '<circle cx="260" cy="80" r="20"/><circle cx="310" cy="80" r="20"/>'
      + '<circle cx="360" cy="80" r="20"/><circle cx="410" cy="80" r="20"/>'
      + '<text x="540" y="90" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">six to share</text>'
      + '<line x1="270" y1="110" x2="205" y2="205"/>'
      + '<polyline points="223,193 205,205 209,183"/>'
      + '<line x1="310" y1="110" x2="400" y2="205"/>'
      + '<polyline points="380,196 400,205 393,184"/>'
      + '<ellipse cx="180" cy="310" rx="115" ry="60"/>'
      + '<text x="180" y="232" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">you</text>'
      + '<circle cx="154" cy="296" r="20"/>'
      + '<circle cx="206" cy="296" r="20"/>'
      + '<circle cx="180" cy="340" r="20"/>'
      + '<ellipse cx="460" cy="310" rx="115" ry="60"/>'
      + '<text x="460" y="232" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">me</text>'
      + '<circle cx="434" cy="296" r="20"/>'
      + '<circle cx="486" cy="296" r="20"/>'
      + '<circle cx="460" cy="340" r="20"/>'
      + '<text x="320" y="394" font-size="26" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">three each, the same</text></svg>',
  },
  questions: [
    {
      id: 'se-1',
      ask: 'How do you share fairly?',
      kind: 'choice',
      options: [
        'Give one to each, round and round',
        'Give a handful each',
        'Let the oldest choose',
      ],
      answer: 'Give one to each, round and round',
      teach: 'That is fair whatever the numbers are.',
      level: 1,
    },
    {
      id: 'se-2',
      ask: 'Five stones between two people gives:',
      kind: 'choice',
      options: [
        'Two each and one left over',
        'Three each',
        'Two each exactly',
      ],
      answer: 'Two each and one left over',
      teach: 'Some sharings do not come out even, and that is fine to say.',
      level: 3,
    },
  ],
})

/* ── carrying on a pattern ──────────────────────────── */

teach({
  topicId: 'patterns',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Red, blue, red, blue. '
      + 'A pattern repeats. '
      + 'Find the part that repeats. '
      + 'Then say what comes next.',
    method: [
      'Say the pattern out loud.',
      'Find the part that repeats.',
      'Say the next one.',
    ],
  },

  idea:
    'Look. Red, blue, red, blue. '
    + 'Say it with me. '
    + 'What comes next? '
    + 'Red. '
    + 'How did you know? '
    + 'Because it keeps repeating. '
    + 'Red and blue, red and blue. '
    + 'Now make a pattern of your own. '
    + 'Then I will say what comes next.',

  mechanism:
    'For the adult. '
    + 'Saying the pattern out loud is what reveals it. '
    + 'A child looking silently at a row of colours '
    + 'often cannot see the repeat, '
    + 'and the same child chanting red blue red blue '
    + 'hears it immediately, '
    + 'because the voice falls into the rhythm. '
    + 'So always say it, and clap it if it helps. '
    + 'Then ask how they knew, '
    + 'because naming the repeating part '
    + 'is the difference between guessing and seeing a rule. '
    + 'Let the child make patterns too. '
    + 'Making one is harder than continuing one, '
    + 'and a child who can make a pattern '
    + 'and tell you its rule is ready for number patterns.',

  method: [
    'Say the pattern out loud.',
    'Clap it if that helps.',
    'Find the part that repeats.',
    'Say that part again.',
    'Say what comes next.',
    'Now make a pattern of your own.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Red, blue, red, blue. What comes next?',
      steps: [
        'Say it out loud.',
      ],
      answer: 'Red.',
    },
    {
      level: 2,
      ask: 'Big, small, small, big, small, small. What comes next?',
      steps: [
        'Say it. The repeat is three long.',
      ],
      answer: 'Small.',
    },
    {
      level: 3,
      ask: 'How do you know what comes next?',
      steps: [
        'Find the repeating part.',
      ],
      answer: 'Because the same part keeps repeating.',
    },
  ],

  traps: [
    {
      mistake: 'Looking without saying it.',
      why: 'Say it out loud. '
        + 'Then you will hear the repeat.',
    },
    {
      mistake: 'Guessing the next one.',
      why: 'Find the repeating part first. '
        + 'Then you are sure.',
    },
  ],

  extension:
    'Now a pattern with numbers. '
    + 'One, two, one, two. '
    + 'Now clap a pattern: loud, soft, loud, soft.',

  figure: {
    alt: 'A row of shapes going circle, square, circle, square, then a '
      + 'dotted empty place with a question mark, then a green circle. A '
      + 'bracket under the first two shapes says this part repeats, and '
      + 'under the row it says a circle comes next.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<circle cx="70" cy="150" r="28"/>'
      + '<polygon points="132,122 188,122 188,178 132,178"/>'
      + '<circle cx="250" cy="150" r="28"/>'
      + '<polygon points="312,122 368,122 368,178 312,178"/>'
      + '<circle cx="440" cy="150" r="28" stroke-dasharray="8 8"/>'
      + '<text x="440" y="164" font-size="38" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">?</text>'
      + '<line x1="478" y1="150" x2="516" y2="150" stroke="#0f8a4d"/>'
      + '<polyline points="503,140 516,150 503,160" stroke="#0f8a4d"/>'
      + '<circle cx="556" cy="150" r="28" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<polyline points="38,190 38,208 192,208 192,190"/>'
      + '<text x="115" y="240" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">this part repeats</text>'
      + '<text x="400" y="320" font-size="30" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">a circle comes next</text></svg>',
  },
  questions: [
    {
      id: 'pt-1',
      ask: 'Blue, blue, red, blue, blue, red. What comes next?',
      kind: 'choice',
      options: ['Blue', 'Red', 'Nothing'],
      answer: 'Blue',
      teach: 'The repeating part is blue, blue, red.',
      level: 2,
    },
    {
      id: 'pt-2',
      ask: 'What makes something a pattern?',
      kind: 'choice',
      options: [
        'A part that keeps repeating',
        'Pretty colours',
        'Many things in a row',
      ],
      answer: 'A part that keeps repeating',
      teach: 'Find the repeat and you can say what comes next.',
      level: 3,
    },
  ],
})

/* ── heavier and lighter ────────────────────────────── */

teach({
  topicId: 'heavy-light',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Hold one in each hand. '
      + 'The one that pulls down more is heavier. '
      + 'Big does not always mean heavy. '
      + 'A balance tells you for certain.',
    method: [
      'Hold one in each hand.',
      'Say which feels heavier.',
      'Check on a balance.',
    ],
  },

  idea:
    'Hold this in one hand. '
    + 'Hold this in the other. '
    + 'Which one pulls your hand down more? '
    + 'That one is heavier. '
    + 'The other one is lighter. '
    + 'Now put them on the balance. '
    + 'The heavier side goes down. '
    + 'Were you right?',

  mechanism:
    'For the adult. '
    + 'The thing to break here is "big means heavy". '
    + 'A large empty box and a small stone '
    + 'settle it faster than any explanation, '
    + 'so let the child hold both and be surprised. '
    + 'Then the balance is introduced for a reason: '
    + 'when two things feel almost the same, '
    + 'hands cannot tell, '
    + 'and the balance can. '
    + 'That is a real use for a tool, '
    + 'and it is the beginning of measuring: '
    + 'you use an instrument when your senses run out. '
    + 'A coat hanger with two bags, '
    + 'or a stick balanced on a finger, '
    + 'works as a balance.',

  method: [
    'Hold one object in each hand.',
    'Feel which pulls down more.',
    'Say which is heavier.',
    'Put them on a balance.',
    'The side that goes down is heavier.',
    'Say whether your hands were right.',
  ],

  worked: [
    {
      level: 1,
      ask: 'One pulls your hand down more. Which is it?',
      steps: [
        'Heavier things pull more.',
      ],
      answer: 'The heavier one.',
    },
    {
      level: 2,
      ask: 'A big empty box and a small stone. Which is heavier?',
      steps: [
        'Hold both.',
      ],
      answer: 'The stone. Big does not mean heavy.',
    },
    {
      level: 3,
      ask: 'Two things feel the same. How do you find out?',
      steps: [
        'Hands are not good enough now.',
      ],
      answer: 'Put them on a balance.',
    },
  ],

  traps: [
    {
      mistake: 'Choosing the bigger one.',
      why: 'Big does not mean heavy. '
        + 'Hold them and feel.',
    },
    {
      mistake: 'Guessing when they feel the same.',
      why: 'Use the balance. '
        + 'That is what it is for.',
    },
  ],

  extension:
    'Now find something that balances this stone. '
    + 'Put things on the other side '
    + 'until the two sides are level.',

  figure: {
    alt: 'A balance with its beam tipped down on the right. A big box hangs '
      + 'from the high left side and a small stone drawn in green hangs '
      + 'from the low right side. Above it says the heavier one goes down, '
      + 'and the stone is labelled small stone, heavier.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="55" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the heavier one goes down</text>'
      + '<line x1="110" y1="180" x2="530" y2="270"/>'
      + '<line x1="320" y1="225" x2="320" y2="282"/>'
      + '<polygon points="320,282 288,340 352,340"/>'
      + '<line x1="240" y1="340" x2="400" y2="340"/>'
      + '<line x1="140" y1="186" x2="140" y2="225"/>'
      + '<polygon points="95,225 185,225 185,285 95,285"/>'
      + '<text x="140" y="318" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">big box</text>'
      + '<line x1="500" y1="265" x2="500" y2="302"/>'
      + '<circle cx="500" cy="325" r="22" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="500" y="374" font-size="22" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">small stone, heavier</text></svg>',
  },
  questions: [
    {
      id: 'hl-1',
      ask: 'Which is heavier, a big empty box or a small stone?',
      kind: 'choice',
      options: ['The stone', 'The box', 'The same'],
      answer: 'The stone',
      teach: 'Big does not mean heavy.',
      level: 2,
    },
    {
      id: 'hl-2',
      ask: 'When do you need a balance?',
      kind: 'choice',
      options: [
        'When two things feel the same',
        'Always',
        'Never',
      ],
      answer: 'When two things feel the same',
      teach: 'You use a tool when your hands run out.',
      level: 3,
    },
  ],
})

/* ── full, empty and half ─────────────────────────── */

teach({
  topicId: 'full-empty',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Full means no more will go in. '
      + 'Empty means nothing is in it. '
      + 'Half is about the middle. '
      + 'Pour and look.',
    method: [
      'Pour until nothing more fits. That is full.',
      'Pour it all out. That is empty.',
      'Fill to about the middle. That is half.',
    ],
  },

  idea:
    'Take this cup. '
    + 'Pour water in until no more will go in. '
    + 'That is full. '
    + 'Now pour it all out. '
    + 'Nothing is left. That is empty. '
    + 'Now fill it to about the middle. '
    + 'That is about half. '
    + 'Half is as much empty as full.',

  mechanism:
    'For the adult. '
    + 'Do this with water or sand and let it spill. '
    + 'The pouring is the lesson, '
    + 'because full and empty are things you do, '
    + 'and only afterwards things you say. '
    + 'Half is harder than it looks '
    + 'and is worth the time, '
    + 'because half is the first fraction, '
    + 'and a child who can see half a cup '
    + 'is ready to see half an orange and half of six. '
    + 'Say "about half" and accept roughly. '
    + 'Precision is not the point yet. '
    + 'A useful extra: '
    + 'pour the same water into a tall thin cup and a wide one, '
    + 'and ask which has more. '
    + 'It is the same water, '
    + 'which is the last lesson again in a new form.',

  method: [
    'Pour in until no more fits. Say full.',
    'Pour it all out. Say empty.',
    'Fill to about the middle. Say half.',
    'Look from the side to check.',
    'Say which cup has more.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Nothing is in the cup. What is it?',
      steps: [
        'Look inside.',
      ],
      answer: 'Empty.',
    },
    {
      level: 2,
      ask: 'The water comes to the middle. What is that?',
      steps: [
        'Not full, not empty.',
      ],
      answer: 'About half.',
    },
    {
      level: 3,
      ask: 'The same water is poured into a tall thin cup. '
        + 'Is there more water now?',
      steps: [
        'Nothing was added.',
      ],
      answer: 'No. It is the same water. It only looks higher.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the tall cup has more.',
      why: 'It is the same water. '
        + 'Pour it back and see.',
    },
    {
      mistake: 'Calling a nearly empty cup half.',
      why: 'Half is the middle. '
        + 'Look from the side.',
    },
  ],

  extension:
    'Now half an orange. '
    + 'Now half of six stones. '
    + 'Half means two parts the same.',

  figure: {
    alt: 'Three cups side by side. The first is filled to the brim and '
      + 'labelled full, the second is filled to about the middle and '
      + 'labelled about half, and the third has nothing in it and is '
      + 'labelled empty. Under them it says half is as much empty as full.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<polygon points="92,158 168,158 160,288 100,288" fill="#0f8a4d" '
      + 'fill-opacity="0.25" stroke="none"/>'
      + '<polygon points="90,150 170,150 160,290 100,290"/>'
      + '<text x="130" y="332" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">full</text>'
      + '<polygon points="285,225 355,225 350,288 290,288" fill="#0f8a4d" '
      + 'fill-opacity="0.25" stroke="none"/>'
      + '<polygon points="280,150 360,150 350,290 290,290"/>'
      + '<text x="320" y="332" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">about half</text>'
      + '<polygon points="470,150 550,150 540,290 480,290"/>'
      + '<text x="510" y="332" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">empty</text>'
      + '<text x="320" y="380" font-size="26" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">half is as much empty as full</text>'
      + '</svg>',
  },
  questions: [
    {
      id: 'fe2-1',
      ask: 'Full means:',
      kind: 'choice',
      options: [
        'No more will go in',
        'It is very heavy',
        'It is nearly finished',
      ],
      answer: 'No more will go in',
      teach: 'Pour until it will take no more.',
      level: 1,
    },
    {
      id: 'fe2-2',
      ask: 'Water poured into a taller cup looks higher. Is there more?',
      kind: 'choice',
      options: ['No', 'Yes', 'Only in a thin cup'],
      answer: 'No',
      teach: 'Nothing was added, so it is the same water.',
      level: 3,
    },
  ],
})

/* ── recognising our coins ───────────────────────── */

teach({
  topicId: 'know-coins',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Our money is cedis and pesewas. '
      + 'Look at the number on the coin. '
      + 'A bigger number buys more. '
      + 'A big coin is not always worth more.',
    method: [
      'Look at the number on the coin.',
      'Say what it is.',
      'The bigger number buys more.',
    ],
  },

  idea:
    'This is money. '
    + 'We count in cedis and pesewas. '
    + 'Look at this coin. '
    + 'There is a number on it. '
    + 'That number says what it is worth. '
    + 'Look at this one. '
    + 'It has a bigger number. '
    + 'It buys more. '
    + 'Look at the number, not the size of the coin.',

  mechanism:
    'For the adult. '
    + 'A young child judges a coin by its size, '
    + 'and that is often wrong, '
    + 'so the habit to teach is to look at the number. '
    + 'Handle real coins. '
    + 'Sort them into piles of the same kind, '
    + 'then put the piles in order by their numbers. '
    + 'Then connect them to something real: '
    + 'what can you buy with this one, '
    + 'and can you buy it with that one. '
    + 'A child who has bought something small '
    + 'with money they counted themselves '
    + 'learns more than any sorting activity. '
    + 'Do not go into pesewas making up a cedi yet. '
    + 'Recognising and ordering is enough for this year.',

  method: [
    'Look at the coin.',
    'Find the number on it.',
    'Say what it is.',
    'Put the coins in order by their numbers.',
    'Say which buys more.',
    'Say what you could buy with it.',
  ],

  worked: [
    {
      level: 1,
      ask: 'How do you tell what a coin is worth?',
      steps: [
        'Not by its size.',
      ],
      answer: 'Look at the number on it.',
    },
    {
      level: 2,
      ask: 'One coin has a bigger number. Which buys more?',
      steps: [
        'Compare the numbers.',
      ],
      answer: 'The one with the bigger number.',
    },
    {
      level: 3,
      ask: 'A big coin and a small one. Is the big one worth more?',
      steps: [
        'Check the numbers.',
      ],
      answer: 'Not always. The number decides, not the size.',
    },
  ],

  traps: [
    {
      mistake: 'Choosing the biggest coin.',
      why: 'Size is not value. '
        + 'Read the number.',
    },
  ],

  extension:
    'Now count two coins together. '
    + 'How much altogether? '
    + 'Could you buy something with that?',

  figure: {
    alt: 'Three coins of different sizes in a row, the middle one the '
      + 'biggest. The numbers on them are ten, twenty and fifty pesewas, so '
      + 'the biggest coin is not the one worth most. A green arrow under '
      + 'them runs left to right, labelled in order by the number of '
      + 'pesewas, not the size.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="50" font-size="28" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">look at the number on the '
      + 'coin</text><circle cx="110" cy="170" r="52"/>'
      + '<text x="110" y="186" font-size="38" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">10</text>'
      + '<circle cx="320" cy="170" r="70"/>'
      + '<text x="320" y="188" font-size="44" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">20</text>'
      + '<circle cx="520" cy="170" r="48"/>'
      + '<text x="520" y="185" font-size="36" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">50</text>'
      + '<line x1="60" y1="316" x2="590" y2="316" stroke="#0f8a4d"/>'
      + '<polyline points="577,306 590,316 577,326" stroke="#0f8a4d"/>'
      + '<text x="320" y="366" font-size="24" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">in order by the number of pesewas, '
      + 'not the size</text></svg>',
  },
  questions: [
    {
      id: 'kn-1',
      ask: 'What tells you what a coin is worth?',
      kind: 'choice',
      options: ['The number on it', 'Its size', 'Its colour'],
      answer: 'The number on it',
      teach: 'A big coin is not always worth more.',
      level: 1,
    },
  ],
})

/* ── writing 0 to 10 ───────────────────────────── */

teach({
  topicId: 'write-numerals',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Each numeral starts in one place and goes one way. '
      + 'Start at the top. '
      + 'Go the way shown, every time. '
      + 'Then it comes out the right way round.',
    method: [
      'Start at the top.',
      'Follow the same path every time.',
      'Check it is the right way round.',
    ],
  },

  idea:
    'We are going to write numbers. '
    + 'Start at the top. '
    + 'For 1, go straight down. '
    + 'For 7, go across, then down. '
    + 'For 2, curve over and come back. '
    + 'Do it the same way every time. '
    + 'Then it will be the right way round. '
    + 'Trace mine first with your finger. '
    + 'Now write it yourself.',

  mechanism:
    'For the adult. '
    + 'Writing a numeral is a hand skill, '
    + 'and it comes well after recognising one. '
    + 'A child who can read 7 and not write it is not behind. '
    + 'What matters is the starting point and the direction, '
    + 'because a numeral drawn from the bottom up '
    + 'comes out looking right and cannot be written quickly later. '
    + 'So teach the path: '
    + 'start at the top, go this way. '
    + 'Trace with a finger, then in sand or dust, '
    + 'then with a pencil. '
    + 'Reversals such as a backwards 3 are completely normal at five, '
    + 'and the remedy is more tracing of the correct path, '
    + 'not correction. '
    + 'Keep the numerals large. '
    + 'Small ones need a hand that is not ready.',

  method: [
    'Watch the numeral being written.',
    'Trace it with your finger.',
    'Trace it in sand or dust.',
    'Start at the top.',
    'Go the way you were shown.',
    'Write it large.',
    'Look at it and check it faces the right way.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Where does a numeral start?',
      steps: [
        'Not at the bottom.',
      ],
      answer: 'At the top.',
    },
    {
      level: 2,
      ask: 'Your 3 came out backwards. What do you do?',
      steps: [
        'Trace the right path again.',
      ],
      answer: 'Trace it with your finger the correct way, and try again.',
    },
    {
      level: 3,
      ask: 'Why does the direction matter?',
      steps: [
        'You will write it many times, quickly.',
      ],
      answer: 'Because the same path every time '
        + 'is what lets you write it quickly later.',
    },
  ],

  traps: [
    {
      mistake: 'Starting at the bottom.',
      why: 'Start at the top. '
        + 'It will be easier later.',
    },
    {
      mistake: 'Writing very small.',
      why: 'Write large. '
        + 'Small writing needs a bigger hand.',
    },
    {
      mistake: 'Worrying about a backwards numeral.',
      why: 'That is normal at this age. '
        + 'Trace the right path again.',
    },
  ],

  extension:
    'Now write the number beside the right group of stones. '
    + 'Three stones, and write 3. '
    + 'Now write them in order from 0 to 10.',

  figure: {
    alt: 'The figures 1, 7 and 2 drawn as paths to follow. Each one has a '
      + 'green dot where the pencil starts at the top and an arrowhead '
      + 'where it finishes, so the direction to write in is shown. Above it '
      + 'says start at the top, and under it says always the same way.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="58" font-size="28" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">start at the top</text>'
      + '<line x1="110" y1="110" x2="110" y2="274" stroke-width="6"/>'
      + '<polyline points="99,258 110,280 121,258" stroke-width="6"/>'
      + '<circle cx="110" cy="110" r="11" stroke="#0f8a4d" stroke-width="4" '
      + 'fill="#0f8a4d"/>'
      + '<polyline points="250,110 352,110 302,262" stroke-width="6"/>'
      + '<polyline points="300,238 302,262 320,244" stroke-width="6"/>'
      + '<circle cx="250" cy="110" r="11" stroke="#0f8a4d" stroke-width="4" '
      + 'fill="#0f8a4d"/>'
      + '<path d="M 452 152 Q 474 104 514 120 Q 548 136 508 192 L 458 252 L '
      + '548 252" stroke-width="6"/>'
      + '<polyline points="532,241 552,252 532,263" stroke-width="6"/>'
      + '<circle cx="452" cy="152" r="11" stroke="#0f8a4d" stroke-width="4" '
      + 'fill="#0f8a4d"/>'
      + '<text x="320" y="345" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">always the same way</text></svg>',
  },
  questions: [
    {
      id: 'wn2-1',
      ask: 'Where do you start writing a numeral?',
      kind: 'choice',
      options: ['At the top', 'At the bottom', 'Anywhere'],
      answer: 'At the top',
      teach: 'The same path every time.',
      level: 1,
    },
    {
      id: 'wn2-2',
      ask: 'Your numeral came out backwards. Is that a problem?',
      kind: 'choice',
      options: [
        'No, trace the right path and try again',
        'Yes, start again from the beginning',
        'Yes, you cannot learn to write',
      ],
      answer: 'No, trace the right path and try again',
      teach: 'Reversals are normal at this age.',
      level: 2,
    },
  ],
})
