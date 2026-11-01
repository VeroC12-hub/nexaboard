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
