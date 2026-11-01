/**
 * Stored lessons for KG 1 Numeracy.
 *
 * Spoken, like the Creche and Nursery file: a five year old reads nothing,
 * so every line here is said aloud while the child looks at something or
 * moves something. `mechanism` is addressed to the adult helping, and the
 * reading check scores those separately for that reason.
 *
 * ── The three ideas this year actually turns on ────────────────────────────
 *
 * Counting at this age looks like one skill and is three, learned in order,
 * and a child can have the first without the second for months.
 *
 * One, the number words in order. Two, one number for one thing, which the
 * Nursery lesson began. Three, that the LAST number you said is the answer,
 * which is `last-word-counts` and is the one adults assume rather than
 * teach. A child who counts five stones correctly and then counts them all
 * again when asked how many there are has the first two and not the third,
 * and is not being careless.
 *
 * `see-small-numbers` is here because of what it leads to: a child who can
 * see four without counting can later see four and three without counting
 * either, and that is where adding comes from.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── counting to twenty ──────────────────────────────────────────────────── */

teach({
  topicId: 'count-to-twenty',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'One to ten. Then eleven to twenty. '
      + 'Thirteen is ten and three. '
      + 'Fourteen is ten and four. '
      + 'The teens are ten and some more.',
    method: [
      'Count one to ten first.',
      'Then keep going: eleven, twelve, thirteen.',
      'Remember a teen is ten and some more.',
    ],
  },

  idea:
    'Count with me. One to ten. '
    + 'Now we keep going. '
    + 'Eleven. Twelve. Thirteen. Fourteen. Fifteen. '
    + 'Sixteen. Seventeen. Eighteen. Nineteen. Twenty. '
    + 'Listen to thirteen. '
    + 'It is ten and three more. '
    + 'Listen to sixteen. '
    + 'It is ten and six more. '
    + 'All the teens are ten and some more.',

  mechanism:
    'For the adult. '
    + 'Eleven and twelve have to be learned as sounds, '
    + 'because nothing in them says ten. '
    + 'From thirteen onwards the words carry the structure, '
    + 'and the child can hear it if you stretch the word: '
    + 'six-teen, seven-teen. '
    + 'Point it out, because it turns ten separate words into one pattern. '
    + 'Use ten stones in a line and some loose ones beside them. '
    + 'Sixteen is that line and six more. '
    + 'The commonest error is "ten, eleven, twenty", '
    + 'and the remedy is to count the full run often '
    + 'rather than to correct the gap.',

  method: [
    'Count one to ten.',
    'Say eleven. Say twelve.',
    'Now say thirteen, fourteen, fifteen.',
    'Keep going to twenty.',
    'Put ten stones in a line.',
    'Add some more and say ten and how many.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What comes after twelve?',
      steps: [
        'Say eleven, twelve.',
        'Then the next.',
      ],
      answer: 'Thirteen.',
    },
    {
      level: 2,
      ask: 'How much is fifteen?',
      steps: [
        'Listen to the word. Five-teen.',
      ],
      answer: 'Ten and five more.',
    },
    {
      level: 3,
      ask: 'What comes after nineteen?',
      steps: [
        'Count up from fifteen.',
      ],
      answer: 'Twenty.',
    },
  ],

  traps: [
    {
      mistake: 'Going from eleven straight to twenty.',
      why: 'The teens come in between. '
        + 'Count the whole run again from one.',
    },
    {
      mistake: 'Saying fiveteen.',
      why: 'That one is fifteen. '
        + 'Say it with me.',
    },
  ],

  extension:
    'Now count to twenty touching things. '
    + 'Ten in a line, then the rest. '
    + 'Say ten and six, then say sixteen.',

  questions: [
    {
      id: 'c20-1',
      ask: 'What comes after fourteen?',
      kind: 'choice',
      options: ['Fifteen', 'Forty', 'Four'],
      answer: 'Fifteen',
      teach: 'Thirteen, fourteen, fifteen.',
      level: 1,
    },
    {
      id: 'c20-2',
      ask: 'Seventeen is:',
      kind: 'choice',
      options: ['Ten and seven', 'Seven and seven', 'Seventy'],
      answer: 'Ten and seven',
      teach: 'Listen to the word: seven-teen.',
      level: 3,
    },
  ],
})

/* ── the last number is the answer ─────────────────────────────────────── */

teach({
  topicId: 'last-word-counts',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Count the row. '
      + 'The last number you said is how many there are. '
      + 'You do not have to count again.',
    method: [
      'Count along the row, touching each one.',
      'Remember the last number.',
      'That number is the answer.',
    ],
  },

  idea:
    'Count these stones with me. '
    + 'One. Two. Three. Four. Five. '
    + 'Now. How many stones are there? '
    + 'Five. '
    + 'The last number you said was five. '
    + 'So there are five. '
    + 'You do not have to count them again. '
    + 'The last number tells you how many.',

  mechanism:
    'For the adult. '
    + 'This is the step adults assume and children do not have. '
    + 'A child counts five stones perfectly, '
    + 'you ask how many, '
    + 'and they count them all again. '
    + 'That is not carelessness. '
    + 'They have not yet understood that the last word of the count '
    + 'is the answer to the question. '
    + 'So do this on purpose: '
    + 'count together, then ask how many, '
    + 'and if they start again, stop them gently and say the last number. '
    + 'Do it with the same row several times. '
    + 'When they answer without recounting, the idea has landed, '
    + 'and most of early arithmetic depends on it.',

  method: [
    'Put the things in a row.',
    'Count along, touching each one.',
    'Say the last number again.',
    'That is how many there are.',
    'Do not count a second time.',
  ],

  worked: [
    {
      level: 1,
      ask: 'You counted one, two, three. How many are there?',
      steps: [
        'What was the last number?',
      ],
      answer: 'Three.',
    },
    {
      level: 2,
      ask: 'You counted to six. Must you count again to answer?',
      steps: [
        'The last number was six.',
      ],
      answer: 'No. There are six.',
    },
    {
      level: 3,
      ask: 'Somebody asks how many. What do you tell them?',
      steps: [
        'Think of the last number you said.',
      ],
      answer: 'The last number you counted.',
    },
  ],

  traps: [
    {
      mistake: 'Counting the whole row again when asked how many.',
      why: 'You already know. '
        + 'The last number you said is the answer.',
    },
    {
      mistake: 'Saying the first number.',
      why: 'It is the last one, not the first.',
    },
  ],

  extension:
    'Now count a row backwards, from the other end. '
    + 'You get the same last number. '
    + 'The amount did not change.',

  questions: [
    {
      id: 'lw-1',
      ask: 'You counted one, two, three, four. How many?',
      kind: 'choice',
      options: ['Four', 'One', 'Two'],
      answer: 'Four',
      teach: 'The last number you said is the answer.',
      level: 1,
    },
    {
      id: 'lw-2',
      ask: 'Do you need to count again to say how many?',
      kind: 'choice',
      options: ['No', 'Yes', 'Only if there are many'],
      answer: 'No',
      teach: 'The last number already told you.',
      level: 3,
    },
  ],
})

/* ── seeing small amounts at a glance ─────────────────────────────────── */

teach({
  topicId: 'see-small-numbers',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Some amounts you can see without counting. '
      + 'Two. Three. Four. '
      + 'Look and say how many.',
    method: [
      'Look at the dots for a moment.',
      'Say how many without counting.',
      'Then count to check.',
    ],
  },

  idea:
    'Look at my fingers. '
    + 'How many? '
    + 'You did not count. You just saw. '
    + 'Look at these dots. '
    + 'Say how many. '
    + 'Now I cover them. '
    + 'How many were there? '
    + 'Good. Now we count to check.',

  mechanism:
    'For the adult. '
    + 'Seeing a small amount without counting '
    + 'is what makes adding possible later. '
    + 'A child who must count every time '
    + 'will always count three and two as five separate things. '
    + 'A child who sees three as one thing '
    + 'can hold it and add two to it. '
    + 'So show the dots for a moment and cover them. '
    + 'Keep to five or fewer. '
    + 'Show them in different arrangements, '
    + 'in a line, in a group, in a dice pattern, '
    + 'so the child learns the amount and not the picture. '
    + 'Then count to check, so being wrong costs nothing.',

  method: [
    'Look at the dots for a moment.',
    'Cover them.',
    'Say how many there were.',
    'Uncover and count to check.',
    'Keep to five or fewer.',
  ],

  worked: [
    {
      level: 1,
      ask: 'How many fingers am I holding up? Two.',
      steps: [
        'Look. Do not count.',
      ],
      answer: 'Two.',
    },
    {
      level: 2,
      ask: 'Three dots in a line, and three dots in a triangle. '
        + 'Is it the same amount?',
      steps: [
        'Count each group.',
      ],
      answer: 'Yes. Three either way.',
    },
    {
      level: 3,
      ask: 'You see four dots. Do you need to count them?',
      steps: [
        'Four is small enough to see.',
      ],
      answer: 'No. You can just see four.',
    },
  ],

  traps: [
    {
      mistake: 'Counting when you already saw it.',
      why: 'Trust your eyes for small amounts. '
        + 'Then check if you like.',
    },
    {
      mistake: 'Learning one picture only.',
      why: 'Three is three in a line or in a bunch. '
        + 'The arrangement does not matter.',
    },
  ],

  extension:
    'Now I show you two groups. '
    + 'Three dots and two dots. '
    + 'How many altogether? '
    + 'See if you can say without counting all of them.',

  questions: [
    {
      id: 'ss-1',
      ask: 'Can you see three without counting?',
      kind: 'choice',
      options: ['Yes', 'No', 'Only in a line'],
      answer: 'Yes',
      teach: 'Small amounts can be seen at a glance.',
      level: 1,
    },
    {
      id: 'ss-2',
      ask: 'Three in a line and three in a bunch. Which is more?',
      kind: 'choice',
      options: ['The same', 'The line', 'The bunch'],
      answer: 'The same',
      teach: 'Three is three however it is arranged.',
      level: 3,
    },
  ],
})

/* ── which group has more ──────────────────────────────────────────── */

teach({
  topicId: 'more-or-fewer',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Put the two groups side by side. '
      + 'Match them one to one. '
      + 'The group with some left over has more. '
      + 'If nothing is left over, they are the same.',
    method: [
      'Line the two groups up facing each other.',
      'Match one to one.',
      'Whatever is left over tells you which has more.',
    ],
  },

  idea:
    'Here are some cups. Here are some stones. '
    + 'Put one stone in each cup. '
    + 'Keep going until you cannot. '
    + 'Are there stones left over? '
    + 'Then there are more stones. '
    + 'Are there empty cups left? '
    + 'Then there are more cups. '
    + 'Is everything matched? '
    + 'Then they are the same.',

  mechanism:
    'For the adult. '
    + 'Matching one to one answers "which has more" '
    + 'without any counting at all, '
    + 'and that is why it is taught before counting is secure. '
    + 'It also protects the child from the trap in the next lesson: '
    + 'a long spread out row LOOKS like more. '
    + 'Matching ignores how things look '
    + 'and compares the amounts themselves. '
    + 'So do it physically. '
    + 'One stone into one cup. '
    + 'What is left over is the answer. '
    + 'Later you can count both groups and compare the numbers, '
    + 'and the child will already know what the numbers mean.',

  method: [
    'Put the two groups where you can reach both.',
    'Take one from each and pair them.',
    'Keep pairing until one group runs out.',
    'Look at what is left over.',
    'That group has more.',
    'Nothing left over means they are the same.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Five cups and three stones. Which has more?',
      steps: [
        'Put a stone in each cup.',
        'Two cups are empty.',
      ],
      answer: 'The cups. There are more cups.',
    },
    {
      level: 2,
      ask: 'Everything matched with nothing left over. What does that '
        + 'mean?',
      steps: [
        'Each one has a partner.',
      ],
      answer: 'The two groups are the same.',
    },
    {
      level: 3,
      ask: 'One row is spread out long and has four stones. '
        + 'The other is squeezed up and has five. Which has more?',
      steps: [
        'Do not look at the length.',
        'Match them one to one.',
      ],
      answer: 'The squeezed up row. It has five.',
    },
  ],

  traps: [
    {
      mistake: 'Choosing the longer row.',
      why: 'Long does not mean more. '
        + 'Match them one to one and see.',
    },
    {
      mistake: 'Pairing two from one side.',
      why: 'One from each side makes a pair.',
    },
  ],

  extension:
    'Now count both groups. '
    + 'Four and five. '
    + 'Five is more than four. '
    + 'The matching told you the same thing.',

  questions: [
    {
      id: 'mf-1',
      ask: 'You matched them all and two stones are left over. '
        + 'Which has more?',
      kind: 'choice',
      options: ['The stones', 'The cups', 'The same'],
      answer: 'The stones',
      teach: 'What is left over is the extra.',
      level: 1,
    },
    {
      id: 'mf-2',
      ask: 'Does a longer row always have more?',
      kind: 'choice',
      options: ['No', 'Yes', 'Only with stones'],
      answer: 'No',
      teach: 'Spread out things look like more. Match them to find out.',
      level: 3,
    },
  ],
})

/* ── two groups become one ───────────────────────────────────────── */

teach({
  topicId: 'join-two-groups',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Put the two groups together. '
      + 'Now count them all. '
      + 'That is how many altogether. '
      + 'Joining makes more.',
    method: [
      'Count the first group.',
      'Count the second group.',
      'Push them together and count them all.',
    ],
  },

  idea:
    'Here are three stones. '
    + 'Here are two more. '
    + 'Count the three. Count the two. '
    + 'Now push them all together. '
    + 'Now count them all. '
    + 'One, two, three, four, five. '
    + 'Three and two make five. '
    + 'Altogether there are five.',

  mechanism:
    'For the adult. '
    + 'The word altogether is doing the work here, '
    + 'so say it every time. '
    + 'The child has to see that two separate amounts '
    + 'can become one amount, '
    + 'and the pushing together is what shows it. '
    + 'Do the pushing physically, always. '
    + 'Later the child will count on from three '
    + 'instead of starting again at one, '
    + 'which is faster and is the beginning of adding. '
    + 'Do not ask for that yet. '
    + 'Starting again at one is correct at this stage, '
    + 'and pushing them for the shortcut too early '
    + 'teaches a trick instead of an idea.',

  method: [
    'Count the first group.',
    'Count the second group.',
    'Push both groups together.',
    'Count all of them.',
    'Say the two numbers and then the answer.',
    'Say altogether.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Two stones and two stones. How many altogether?',
      steps: [
        'Push them together.',
        'Count them all.',
      ],
      answer: 'Four.',
    },
    {
      level: 2,
      ask: 'Four mangoes and one mango. How many altogether?',
      steps: [
        'Put them together.',
        'Count.',
      ],
      answer: 'Five.',
    },
    {
      level: 3,
      ask: 'Does joining two groups make more or fewer?',
      steps: [
        'Nothing was taken away.',
      ],
      answer: 'More.',
    },
  ],

  traps: [
    {
      mistake: 'Counting only one of the groups.',
      why: 'Count all of them. '
        + 'Push them together first.',
    },
    {
      mistake: 'Losing count in the middle.',
      why: 'Touch each one as you count.',
    },
  ],

  extension:
    'Now try it without pushing them together. '
    + 'Count the first group. '
    + 'Then keep counting into the second. '
    + 'You get the same answer.',

  questions: [
    {
      id: 'jg-1',
      ask: 'Three stones and one stone altogether is:',
      kind: 'choice',
      options: ['Four', 'Three', 'Two'],
      answer: 'Four',
      teach: 'Push them together and count them all.',
      level: 1,
    },
    {
      id: 'jg-2',
      ask: 'Joining two groups gives:',
      kind: 'choice',
      options: ['More', 'Fewer', 'The same'],
      answer: 'More',
      teach: 'Nothing was taken away.',
      level: 3,
    },
  ],
})

/* ── sorting by shape and size ──────────────────────────────────── */

teach({
  topicId: 'sort-shapes',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Put the things that go together in one group. '
      + 'You can sort by shape, or by size, or by colour. '
      + 'Then say why they are together.',
    method: [
      'Choose one thing to sort by.',
      'Make a group for each kind.',
      'Say why each group belongs together.',
    ],
  },

  idea:
    'Here are many things. '
    + 'Put all the round ones here. '
    + 'Put all the others there. '
    + 'Now tell me why they are together. '
    + 'Now do it again a different way. '
    + 'Put the big ones here and the small ones there. '
    + 'Now by colour. '
    + 'The same things can be sorted in many ways.',

  mechanism:
    'For the adult. '
    + 'The sorting is easy and the reason is the lesson. '
    + 'Always ask why, '
    + 'because saying "these are all round" '
    + 'is the child naming a rule, '
    + 'and naming the rule is what they will later do with numbers. '
    + 'Then sort the SAME things a second way. '
    + 'That is the part that surprises them, '
    + 'and it teaches something important: '
    + 'the groups were not in the objects, '
    + 'they came from the question you asked. '
    + 'Accept any rule the child can state, '
    + 'including ones you did not think of, '
    + 'so long as they can say what it is.',

  method: [
    'Look at all the things.',
    'Choose one way to sort: shape, size or colour.',
    'Make a group for each kind.',
    'Check every thing is in a group.',
    'Say why each group belongs together.',
    'Now sort the same things a different way.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Sort these by colour. What do you do?',
      steps: [
        'Make a group for each colour.',
      ],
      answer: 'All the red ones together, all the blue ones together.',
    },
    {
      level: 2,
      ask: 'You made a group. What must you be able to say?',
      steps: [
        'Say the rule.',
      ],
      answer: 'Why they are together, such as these are all round.',
    },
    {
      level: 3,
      ask: 'Can the same things be sorted in more than one way?',
      steps: [
        'Try shape. Then try size.',
      ],
      answer: 'Yes. The groups come from the question you ask.',
    },
  ],

  traps: [
    {
      mistake: 'Leaving some things out.',
      why: 'Every thing goes in a group.',
    },
    {
      mistake: 'Sorting by two things at once.',
      why: 'Choose one. '
        + 'Round, or big, or red. Not all three.',
    },
  ],

  extension:
    'Now I sort them and you guess my rule. '
    + 'Look at the groups and say what I used.',

  questions: [
    {
      id: 'sr-1',
      ask: 'What must you say after sorting?',
      kind: 'choice',
      options: [
        'Why each group belongs together',
        'How many groups there are',
        'Nothing',
      ],
      answer: 'Why each group belongs together',
      teach: 'Naming the rule is the lesson.',
      level: 2,
    },
    {
      id: 'sr-2',
      ask: 'The same things can be sorted:',
      kind: 'choice',
      options: ['In many ways', 'In one way only', 'Never'],
      answer: 'In many ways',
      teach: 'By shape, by size, or by colour.',
      level: 3,
    },
  ],
})

/* ── longer, shorter, taller ───────────────────────────────── */

teach({
  topicId: 'long-short',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Put the two sticks side by side. '
      + 'Start them at the same end. '
      + 'The one that goes further is longer. '
      + 'Then put three in order.',
    method: [
      'Line up the ends together.',
      'See which goes further.',
      'Then put the shortest first and the longest last.',
    ],
  },

  idea:
    'Here are two sticks. '
    + 'Put them side by side. '
    + 'Start them at the same end. '
    + 'Look. This one goes further. '
    + 'It is longer. '
    + 'The other one is shorter. '
    + 'Now here is a third stick. '
    + 'Put them in order. '
    + 'Shortest first. Longest last.',

  mechanism:
    'For the adult. '
    + 'Starting at the same end is the whole lesson. '
    + 'A child comparing two sticks held at different heights '
    + 'will say the higher one is longer, '
    + 'and they are reading the position, not the length. '
    + 'So line the ends up every time, '
    + 'and say out loud why you are doing it. '
    + 'For people, stand them back to back on the same floor. '
    + 'Putting three in order is harder than comparing two, '
    + 'because it needs two comparisons held at once. '
    + 'Let the child do it by trial, '
    + 'moving sticks about until it looks right, '
    + 'and then check by looking along the ends.',

  method: [
    'Take two sticks.',
    'Put them side by side.',
    'Line up one end of each.',
    'Look at the other end.',
    'The one that goes further is longer.',
    'For three, put the shortest first and the longest last.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Two sticks side by side. One goes further. Which is longer?',
      steps: [
        'Check the ends are lined up.',
      ],
      answer: 'The one that goes further.',
    },
    {
      level: 2,
      ask: 'A short stick is held up high. Is it longer?',
      steps: [
        'Bring them to the same end.',
      ],
      answer: 'No. It only looks it. Line the ends up.',
    },
    {
      level: 3,
      ask: 'Put three sticks in order. Which goes last?',
      steps: [
        'Compare them two at a time.',
      ],
      answer: 'The longest.',
    },
  ],

  traps: [
    {
      mistake: 'Comparing sticks that do not start at the same end.',
      why: 'Line the ends up first. '
        + 'Otherwise you are looking at where they are, not how long '
        + 'they are.',
    },
  ],

  extension:
    'Now measure with your hand. '
    + 'How many hands long is the table? '
    + 'Now try with a stick. '
    + 'You get a different number, '
    + 'because the stick is not the same as your hand.',

  questions: [
    {
      id: 'ls-1',
      ask: 'Before comparing two sticks you must:',
      kind: 'choice',
      options: [
        'Line up one end of each',
        'Hold one higher',
        'Count them',
      ],
      answer: 'Line up one end of each',
      teach: 'Otherwise you are comparing positions, not lengths.',
      level: 1,
    },
    {
      id: 'ls-2',
      ask: 'In order, which stick goes last?',
      kind: 'choice',
      options: ['The longest', 'The shortest', 'The middle one'],
      answer: 'The longest',
      teach: 'Shortest first, longest last.',
      level: 3,
    },
  ],
})

/* ── what comes first in the day ─────────────────────────── */

teach({
  topicId: 'day-order',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Morning comes first. '
      + 'Then afternoon. '
      + 'Then night. '
      + 'The days have names, and they come round again.',
    method: [
      'Say what you do in the morning.',
      'Then the afternoon. Then the night.',
      'Put them in that order.',
    ],
  },

  idea:
    'In the morning the sun comes up. '
    + 'You wake up. You wash. You eat. '
    + 'In the afternoon the sun is high and hot. '
    + 'At night it is dark. You sleep. '
    + 'Morning, afternoon, night. '
    + 'That is the order, every day. '
    + 'The days have names too. '
    + 'Monday. Tuesday. Wednesday. '
    + 'Thursday. Friday. Saturday. Sunday. '
    + 'Then Monday comes again.',

  mechanism:
    'For the adult. '
    + 'Time is invisible, '
    + 'so tie every part of the day to something the child does. '
    + 'Morning is not a word, it is washing and eating and going out. '
    + 'Afternoon is the hot part and coming home. '
    + 'Night is dark and sleeping. '
    + 'Then the order is remembered through the actions. '
    + 'The days of the week are harder, '
    + 'because nothing about a Tuesday looks like a Tuesday. '
    + 'So use the one or two days with something fixed in them, '
    + 'market day, church or mosque day, '
    + 'and count from there. '
    + 'And say that the days come round again, '
    + 'because a child who thinks they run out will be puzzled.',

  method: [
    'Say what you do in the morning.',
    'Say what you do in the afternoon.',
    'Say what you do at night.',
    'Put the three in order.',
    'Say the days of the week.',
    'Name the day with something in it, like market day.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Which comes first, night or morning?',
      steps: [
        'When do you wake up?',
      ],
      answer: 'Morning.',
    },
    {
      level: 2,
      ask: 'When is it dark and you sleep?',
      steps: [
        'After the afternoon.',
      ],
      answer: 'At night.',
    },
    {
      level: 3,
      ask: 'What comes after Sunday?',
      steps: [
        'The days come round again.',
      ],
      answer: 'Monday.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking the week stops at Sunday.',
      why: 'Monday comes round again. '
        + 'The days go round.',
    },
  ],

  extension:
    'Yesterday was the day before today. '
    + 'Tomorrow is the day after. '
    + 'What did you do yesterday?',

  questions: [
    {
      id: 'dy-1',
      ask: 'Which part of the day comes first?',
      kind: 'choice',
      options: ['Morning', 'Afternoon', 'Night'],
      answer: 'Morning',
      teach: 'Morning, afternoon, night.',
      level: 1,
    },
    {
      id: 'dy-2',
      ask: 'After Sunday comes:',
      kind: 'choice',
      options: ['Monday', 'Nothing', 'Saturday'],
      answer: 'Monday',
      teach: 'The week goes round again.',
      level: 3,
    },
  ],
})

/* ── matching the numeral to the amount ──────────────────── */

teach({
  topicId: 'match-numeral',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'This mark is a 4. '
      + 'It means four things. '
      + 'Count the group, then find the card with that mark.',
    method: [
      'Count the things.',
      'Say the number.',
      'Find the card with that mark.',
    ],
  },

  idea:
    'Look at this card. '
    + 'This mark says four. '
    + 'Here are some stones. '
    + 'Count them. One, two, three, four. '
    + 'Four stones. '
    + 'So this card goes beside them. '
    + 'The mark and the stones say the same thing. '
    + 'Now you find the card for this group.',

  mechanism:
    'For the adult. '
    + 'This is the first time a written mark stands for an amount, '
    + 'which is the whole of later mathematics in one step. '
    + 'So always go from the things to the card, '
    + 'not from the card to the things. '
    + 'Count the stones, say the number, then find the mark. '
    + 'That way the mark is being attached to something the child '
    + 'already knows, '
    + 'rather than learned as a shape on its own. '
    + 'Keep the numerals large and the same way up. '
    + 'Do not ask for writing yet. '
    + 'Recognising comes well before forming, '
    + 'and asking for both at once makes the child fail at both.',

  method: [
    'Count the group of things.',
    'Say how many.',
    'Look at the cards.',
    'Find the one with that mark.',
    'Put it beside the group.',
    'Say the number again.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Two stones. Which card?',
      steps: [
        'Count them: one, two.',
        'Find the mark for two.',
      ],
      answer: 'The card marked 2.',
    },
    {
      level: 2,
      ask: 'The card says 5. How many stones do you put out?',
      steps: [
        'Count as you put them.',
      ],
      answer: 'Five.',
    },
    {
      level: 3,
      ask: 'What does the mark 3 tell you?',
      steps: [
        'It stands for an amount.',
      ],
      answer: 'That there are three things.',
    },
  ],

  traps: [
    {
      mistake: 'Learning the shape with no amount.',
      why: 'Count the things first. '
        + 'Then find the mark.',
    },
    {
      mistake: 'Turning the card any way round.',
      why: 'The mark has a right way up. '
        + 'Turn it until it looks like this.',
    },
  ],

  extension:
    'Now put the cards in order. '
    + '1, 2, 3, 4, 5. '
    + 'Put the right number of stones under each one.',

  questions: [
    {
      id: 'mn-1',
      ask: 'You counted four stones. Which card goes beside them?',
      kind: 'choice',
      options: ['4', '1', '7'],
      answer: '4',
      teach: 'The mark and the stones say the same thing.',
      level: 1,
    },
    {
      id: 'mn-2',
      ask: 'What does a numeral stand for?',
      kind: 'choice',
      options: ['An amount', 'A colour', 'A shape'],
      answer: 'An amount',
      teach: '4 means four things.',
      level: 3,
    },
  ],
})
