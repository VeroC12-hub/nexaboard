/**
 * Stored lessons for the Creche and Nursery years.
 *
 * ── Written to be SPOKEN, because nobody here can read ─────────────────────
 *
 * A child of two to four cannot read a word. So every line in this file is
 * said aloud, by an adult or by the app, while the child looks at something
 * or does something. The sentences are therefore four to eight words long,
 * in the order the actions happen, and there is nothing in them that has to
 * be held in the head while something else is said.
 *
 * The `mechanism` field is the exception and it is addressed to the adult.
 * At this age the useful explanation is not for the child at all: it is the
 * one sentence that tells the person helping what the child is actually
 * learning, and what to do when it goes wrong. A three year old who counts
 * "one two three" while touching two stones has not failed at counting. They
 * have not yet got the one-number-one-thing rule, and the adult needs to
 * know that, because the remedy is to move the child's hand rather than to
 * repeat the numbers.
 *
 * `recap` is dropped almost everywhere here. There is rarely a prerequisite
 * to recall, and `assemble` copes with the field being absent.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── Creche: counting to five ─────────────────────────────────────────────── */

teach({
  topicId: 'count-to-five',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'One. Two. Three. Four. Five. '
      + 'Say them in that order. '
      + 'Always start at one.',
    method: [
      'Say one. Then two. Then three.',
      'Then four. Then five.',
      'Start at one every time.',
    ],
  },

  idea:
    'Let us count. '
    + 'One. Two. Three. Four. Five. '
    + 'Say it with me. '
    + 'One always comes first. '
    + 'Five comes last. '
    + 'Now say it on your own.',

  mechanism:
    'For the adult. '
    + 'This is a song before it is mathematics. '
    + 'The child is learning the order of five words, '
    + 'and nothing about amounts yet. '
    + 'So say the numbers in the same order every single time, '
    + 'and do not skip one to make it quicker. '
    + 'If the child says "one two five", '
    + 'go back to one and say the whole run again with them. '
    + 'Do not correct the mistake on its own. '
    + 'The order is learned as one piece.',

  method: [
    'Hold up one finger. Say one.',
    'Hold up two. Say two.',
    'Keep going to five.',
    'Now say them with no fingers.',
    'Start at one again.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What comes after two?',
      steps: [
        'Say one, two.',
        'Keep going.',
      ],
      answer: 'Three.',
    },
    {
      level: 2,
      ask: 'What comes after four?',
      steps: [
        'Count up: one, two, three, four.',
        'The next one.',
      ],
      answer: 'Five.',
    },
  ],

  traps: [
    {
      mistake: 'Starting at two.',
      why: 'We always start at one. '
        + 'Go back and start again.',
    },
    {
      mistake: 'Saying a number twice.',
      why: 'Each number is said once. '
        + 'Slow down and say them together.',
    },
  ],

  extension:
    'Now count five real things. '
    + 'Five stones. Five bottle tops. '
    + 'Say one number for each one.',

  questions: [
    {
      id: 'c5-1',
      ask: 'What comes after one?',
      kind: 'choice',
      options: ['Two', 'Three', 'Five'],
      answer: 'Two',
      teach: 'One, two, three, four, five.',
      level: 1,
    },
    {
      id: 'c5-2',
      ask: 'Which number comes last?',
      kind: 'choice',
      options: ['Five', 'One', 'Three'],
      answer: 'Five',
      teach: 'We stop at five.',
      level: 2,
    },
  ],
})

/* ── Creche: my own name and my people ──────────────────────────────────── */

teach({
  topicId: 'say-my-name',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'You have a name. '
      + 'Say your name. '
      + 'The people at home have names too.',
    method: [
      'Say your own name.',
      'Say it loud enough to hear.',
      'Now name one person at home.',
    ],
  },

  idea:
    'You have a name. '
    + 'Say it. '
    + 'Say it again, a bit louder. '
    + 'Good. '
    + 'The people you live with have names too. '
    + 'Who do you live with? '
    + 'Say one of their names.',

  mechanism:
    'For the adult. '
    + 'Saying your own name clearly is a safety skill '
    + 'before it is anything else. '
    + 'A child who can say their name and one adult’s name '
    + 'can be helped by a stranger. '
    + 'So practise it standing up, looking at the person, '
    + 'and loud enough to be heard across a room. '
    + 'Use the name the family actually uses. '
    + 'If the child is shy, say your own name first and wait.',

  method: [
    'Stand up.',
    'Look at the person.',
    'Say your name.',
    'Say it loud enough to hear.',
    'Now say who you live with.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Somebody asks your name. What do you do?',
      steps: [
        'Look at them.',
        'Say your name.',
      ],
      answer: 'Say your own name, loud enough to hear.',
    },
    {
      level: 2,
      ask: 'Who do you live with?',
      steps: [
        'Think of the people at home.',
        'Say one name.',
      ],
      answer: 'Name one person you live with.',
    },
  ],

  traps: [
    {
      mistake: 'Saying it too quietly.',
      why: 'Nobody can help you if they cannot hear. '
        + 'Say it again, louder.',
    },
    {
      mistake: 'Looking at the floor.',
      why: 'Look at the person. '
        + 'Then say it.',
    },
  ],

  extension:
    'Now learn one more thing. '
    + 'Say the name of your town. '
    + 'Say it after your own name.',

  questions: [
    {
      id: 'nm-1',
      ask: 'What should you do when somebody asks your name?',
      kind: 'choice',
      options: [
        'Say it so they can hear',
        'Whisper it',
        'Say nothing',
      ],
      answer: 'Say it so they can hear',
      teach: 'Look at the person and say it loud enough.',
      level: 1,
    },
  ],
})

/* ── Creche: parts of my body ──────────────────────────────────────────── */

teach({
  topicId: 'my-body',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Head. Eyes. Nose. Mouth. Ears. '
      + 'Hands. Legs. Feet. '
      + 'Each part does a job.',
    method: [
      'Touch the part.',
      'Say its name.',
      'Say what it does.',
    ],
  },

  idea:
    'Touch your head. '
    + 'Touch your eyes. Eyes see. '
    + 'Touch your ears. Ears hear. '
    + 'Touch your nose. The nose smells. '
    + 'Touch your mouth. The mouth eats and talks. '
    + 'Hold up your hands. Hands hold things. '
    + 'Stand on your legs. Legs walk and run.',

  mechanism:
    'For the adult. '
    + 'Pair every name with the job, every time. '
    + 'A child who learns "eyes see" '
    + 'has learned something they can use, '
    + 'and a child who learns only the word '
    + 'has learned a label. '
    + 'Touch the part as you say it. '
    + 'The touching is what fixes the word, '
    + 'and it lets a child who cannot yet speak show you they know.',

  method: [
    'Touch one part.',
    'Say its name.',
    'Say what it does.',
    'Now do the next part.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What do your eyes do?',
      steps: [
        'Touch your eyes.',
        'Close them. What stops?',
      ],
      answer: 'Eyes see.',
    },
    {
      level: 2,
      ask: 'Which part do you hear with?',
      steps: [
        'Cover one part and listen.',
      ],
      answer: 'Your ears.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the name without the job.',
      why: 'Say what it does too. '
        + 'Ears hear. Hands hold.',
    },
  ],

  extension:
    'Some parts you cannot see. '
    + 'Put your hand on your chest. '
    + 'Feel it going up and down. '
    + 'That is you breathing.',

  questions: [
    {
      id: 'bd-1',
      ask: 'What do you hold things with?',
      kind: 'choice',
      options: ['Hands', 'Ears', 'Nose'],
      answer: 'Hands',
      teach: 'Hands hold. Ears hear.',
      level: 1,
    },
    {
      id: 'bd-2',
      ask: 'Which part smells?',
      kind: 'choice',
      options: ['The nose', 'The eyes', 'The feet'],
      answer: 'The nose',
      teach: 'The nose smells.',
      level: 2,
    },
  ],
})

/* ── Creche: singing our songs ─────────────────────────────────────────── */

teach({
  topicId: 'sing-along',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'We sing together. '
      + 'Listen first. '
      + 'Then join in. '
      + 'Sing the same words every time.',
    method: [
      'Listen to the song once.',
      'Join in on the part you know.',
      'Sing to the end.',
    ],
  },

  idea:
    'We are going to sing. '
    + 'Listen to me first. '
    + 'Now sing it with me. '
    + 'Sing the same words. '
    + 'Keep going to the end. '
    + 'Now clap while we sing.',

  mechanism:
    'For the adult. '
    + 'Singing teaches more than music at this age. '
    + 'A song holds words in a fixed order, '
    + 'so a child who cannot remember a sentence '
    + 'can remember twenty words inside a tune. '
    + 'That is where early vocabulary comes from. '
    + 'So sing the same songs often, '
    + 'with the same words, '
    + 'and let the child finish a line on their own. '
    + 'Use songs in the language spoken at home as well.',

  method: [
    'Sit so everybody can see you.',
    'Sing the song through once.',
    'Sing it again and let them join.',
    'Stop before the last word and let them say it.',
    'Clap on the beat.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What do you do first?',
      steps: [
        'Before you sing, you must know the song.',
      ],
      answer: 'Listen.',
    },
    {
      level: 2,
      ask: 'The song stops before the last word. What do you do?',
      steps: [
        'You know what comes next.',
      ],
      answer: 'Say the last word yourself.',
    },
  ],

  traps: [
    {
      mistake: 'Changing the words each time.',
      why: 'Sing the same words. '
        + 'That is how the words are learned.',
    },
  ],

  extension:
    'Now sing it fast. '
    + 'Now sing it slow. '
    + 'Now sing it quietly.',

  questions: [
    {
      id: 'sg-1',
      ask: 'What comes first, listening or singing?',
      kind: 'choice',
      options: ['Listening', 'Singing', 'Clapping'],
      answer: 'Listening',
      teach: 'Listen first. Then join in.',
      level: 1,
    },
  ],
})

/* ── Nursery: counting to ten ─────────────────────────────────────────── */

teach({
  topicId: 'count-to-ten',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'One to ten. '
      + 'Say them in order. '
      + 'You can also start in the middle. '
      + 'From six, the next is seven.',
    method: [
      'Count one to ten.',
      'Now start at four and keep going.',
      'Do not go back to one.',
    ],
  },

  idea:
    'One. Two. Three. Four. Five. '
    + 'Six. Seven. Eight. Nine. Ten. '
    + 'Say it with me. '
    + 'Now I say a number. You carry on. '
    + 'Six. Keep going. '
    + 'Seven, eight, nine, ten.',

  mechanism:
    'For the adult. '
    + 'Carrying on from a given number is the real step here. '
    + 'A child who can only start at one '
    + 'is reciting a rhyme. '
    + 'A child who can start at six '
    + 'knows that the numbers are a line '
    + 'and that each one has a next. '
    + 'So practise starting in the middle, often. '
    + 'If the child goes back to one every time, '
    + 'that is normal, and the thing to work on.',

  method: [
    'Count from one to ten.',
    'Now I say a number.',
    'Say the next one.',
    'Then keep going to ten.',
    'Do not start again at one.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What comes after seven?',
      steps: [
        'Say seven.',
        'Then the next one.',
      ],
      answer: 'Eight.',
    },
    {
      level: 2,
      ask: 'Start at five and count to ten.',
      steps: [
        'Say five.',
        'Keep going without going back.',
      ],
      answer: 'Five, six, seven, eight, nine, ten.',
    },
  ],

  traps: [
    {
      mistake: 'Going back to one every time.',
      why: 'You can start anywhere. '
        + 'From six, say seven.',
    },
    {
      mistake: 'Skipping a number.',
      why: 'Say them all. '
        + 'Slow down.',
    },
  ],

  extension:
    'Now count ten things. '
    + 'Ten stones. Touch each one once.',

  questions: [
    {
      id: 'c10-1',
      ask: 'What comes after nine?',
      kind: 'choice',
      options: ['Ten', 'Eight', 'Eleven'],
      answer: 'Ten',
      teach: 'Eight, nine, ten.',
      level: 1,
    },
    {
      id: 'c10-2',
      ask: 'I say six. What do you say next?',
      kind: 'choice',
      options: ['Seven', 'One', 'Five'],
      answer: 'Seven',
      teach: 'You do not have to start again at one.',
      level: 2,
    },
  ],
})

/* ── Nursery: touching each thing once ────────────────────────────────── */

teach({
  topicId: 'touch-and-count',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'One number for each thing. '
      + 'Touch it as you say the number. '
      + 'Never touch one thing twice. '
      + 'Never miss one out.',
    method: [
      'Start at one end of the row.',
      'Touch one thing. Say one number.',
      'Move along. Do not go back.',
    ],
  },

  idea:
    'Here is a row of stones. '
    + 'Touch the first one. Say one. '
    + 'Touch the next. Say two. '
    + 'Keep going along the row. '
    + 'One number for each stone. '
    + 'Do not touch a stone twice. '
    + 'Do not skip one.',

  mechanism:
    'For the adult. '
    + 'This is the hardest idea at this age, '
    + 'and it is not about numbers. '
    + 'It is that each number is used once, on one thing. '
    + 'A child who says "one two three four" over two stones '
    + 'has the number words and not the rule. '
    + 'The remedy is physical, not spoken: '
    + 'hold the child’s finger and move it, '
    + 'one touch for one number. '
    + 'Push each counted stone aside as you go, '
    + 'so a counted one cannot be counted again. '
    + 'Repeating the numbers faster does not help.',

  method: [
    'Put the things in a row.',
    'Start at one end.',
    'Touch one thing and say one number.',
    'Move your finger along.',
    'Push each one aside when it is counted.',
    'Stop at the end of the row.',
  ],

  worked: [
    {
      level: 1,
      ask: 'How many numbers do you say for one stone?',
      steps: [
        'Touch one stone.',
      ],
      answer: 'One number.',
    },
    {
      level: 2,
      ask: 'You already counted this stone. Do you count it again?',
      steps: [
        'Each stone gets one number.',
      ],
      answer: 'No. Push it aside and go on.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the numbers faster than the finger moves.',
      why: 'Slow the numbers down to the finger. '
        + 'One touch, one number.',
    },
    {
      mistake: 'Counting one thing twice.',
      why: 'Push each one aside once it is counted.',
    },
  ],

  extension:
    'Now count things you cannot move. '
    + 'Count the windows. '
    + 'Point at each one once.',

  questions: [
    {
      id: 'tc-1',
      ask: 'How many things does one number count?',
      kind: 'choice',
      options: ['One thing', 'Two things', 'All of them'],
      answer: 'One thing',
      teach: 'One number for each thing.',
      level: 1,
    },
    {
      id: 'tc-2',
      ask: 'What stops you counting a stone twice?',
      kind: 'choice',
      options: [
        'Push it aside after counting',
        'Count faster',
        'Count out loud',
      ],
      answer: 'Push it aside after counting',
      teach: 'Then you cannot reach it again.',
      level: 2,
    },
  ],
})

/* ── Nursery: circle, square, triangle ──────────────────────────────── */

teach({
  topicId: 'name-shapes',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A circle is round. It has no corners. '
      + 'A square has four sides, all the same. '
      + 'A triangle has three sides and three corners.',
    method: [
      'Count the sides.',
      'Count the corners.',
      'Then say the name.',
    ],
  },

  idea:
    'This is a circle. '
    + 'It is round all the way. '
    + 'It has no corners. '
    + 'This is a square. '
    + 'It has four sides. '
    + 'All four are the same. '
    + 'This is a triangle. '
    + 'Count the sides. One, two, three. '
    + 'Three sides. Three corners.',

  mechanism:
    'For the adult. '
    + 'Teach the shape by counting its sides, '
    + 'not by its picture. '
    + 'A child taught from one picture '
    + 'often thinks a triangle must point upwards, '
    + 'and will not recognise one lying on its side. '
    + 'Counting sides and corners works on any triangle. '
    + 'So show them turned round, large and small, '
    + 'and in real things: '
    + 'a coin, a window, a roof, a bottle top.',

  method: [
    'Look at the shape.',
    'Count the sides with your finger.',
    'Count the corners.',
    'No corners and round means a circle.',
    'Three sides means a triangle.',
    'Four sides the same means a square.',
  ],

  worked: [
    {
      level: 1,
      ask: 'How many sides has a triangle?',
      steps: [
        'Count them with your finger.',
      ],
      answer: 'Three.',
    },
    {
      level: 2,
      ask: 'A shape is round with no corners. What is it?',
      steps: [
        'No corners at all.',
      ],
      answer: 'A circle.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a triangle must point up.',
      why: 'Turn it round. '
        + 'It still has three sides. '
        + 'It is still a triangle.',
    },
    {
      mistake: 'Guessing from the picture.',
      why: 'Count the sides. '
        + 'Then you are sure.',
    },
  ],

  extension:
    'Find the shapes in this room. '
    + 'A bottle top is a circle. '
    + 'A window may be a square. '
    + 'What else can you find?',

  questions: [
    {
      id: 'sh-1',
      ask: 'How many corners has a square?',
      kind: 'choice',
      options: ['Four', 'Three', 'None'],
      answer: 'Four',
      teach: 'Four sides and four corners.',
      level: 1,
    },
    {
      id: 'sh-2',
      ask: 'A triangle is lying on its side. Is it still a triangle?',
      kind: 'choice',
      options: ['Yes', 'No', 'It is a square now'],
      answer: 'Yes',
      teach: 'It still has three sides.',
      level: 2,
    },
  ],
})

/* ── Nursery: on, under, behind, beside ─────────────────────────────── */

teach({
  topicId: 'position-words',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'On top. Under. Behind. In front. Beside. In. '
      + 'These words say where a thing is.',
    method: [
      'Listen to the word.',
      'Put the thing there.',
      'Then say where it is.',
    ],
  },

  idea:
    'Put the cup on the table. '
    + 'Now put it under the table. '
    + 'Now put it beside the chair. '
    + 'Now stand behind the chair. '
    + 'Now stand in front of it. '
    + 'Now put the stone in the cup. '
    + 'Good. Now tell me where the stone is.',

  mechanism:
    'For the adult. '
    + 'Doing comes before saying. '
    + 'A child can put a cup under a table '
    + 'long before they can say the word under, '
    + 'so ask them to do it first '
    + 'and ask them to say it afterwards. '
    + 'That order also lets you see what they understand '
    + 'when they cannot yet tell you. '
    + 'Use one object and one place, '
    + 'and change only the position word.',

  method: [
    'Take one thing.',
    'Listen to the word.',
    'Put it in that place.',
    'Now look at it.',
    'Say where it is.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Put the stone on the book.',
      steps: [
        'On means on top.',
      ],
      answer: 'The stone sits on top of the book.',
    },
    {
      level: 2,
      ask: 'The cup is below the table. Which word is that?',
      steps: [
        'Not on top.',
      ],
      answer: 'Under.',
    },
  ],

  traps: [
    {
      mistake: 'Mixing up behind and in front.',
      why: 'In front is the side you can see. '
        + 'Behind is the side you cannot.',
    },
    {
      mistake: 'Mixing up in and on.',
      why: 'In is inside. '
        + 'On is on top.',
    },
  ],

  extension:
    'Now hide something. '
    + 'Tell me where you hid it. '
    + 'Use one of the words.',

  questions: [
    {
      id: 'ps-1',
      ask: 'The ball is inside the box. Which word?',
      kind: 'choice',
      options: ['In', 'On', 'Under'],
      answer: 'In',
      teach: 'In means inside.',
      level: 1,
    },
    {
      id: 'ps-2',
      ask: 'You stand where nobody in front can see you. Which word?',
      kind: 'choice',
      options: ['Behind', 'Beside', 'On'],
      answer: 'Behind',
      teach: 'Behind is the side you cannot see.',
      level: 2,
    },
  ],
})

/* ── Nursery: answering a question ─────────────────────────────────── */

teach({
  topicId: 'ask-and-answer',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Who means a person. '
      + 'What means a thing. '
      + 'Where means a place. '
      + 'Listen for which word was used.',
    method: [
      'Listen to the question.',
      'Who, what or where?',
      'Answer that one thing.',
    ],
  },

  idea:
    'I will ask you something. '
    + 'If I say who, name a person. '
    + 'If I say what, name a thing. '
    + 'If I say where, name a place. '
    + 'Who gave you the cup? '
    + 'What did you eat? '
    + 'Where did you put it?',

  mechanism:
    'For the adult. '
    + 'The question word is the whole lesson. '
    + 'A child who answers "mother" to "what did you eat" '
    + 'has heard the question and missed the word that shapes it. '
    + 'So say the question word louder, and ask again. '
    + 'Do not give the answer. '
    + 'Ask about something that just happened, '
    + 'because then the child has the facts and only needs the word. '
    + 'Keep to one question at a time.',

  method: [
    'Stop and listen to the whole question.',
    'Find the first word: who, what or where.',
    'Who means a person.',
    'What means a thing.',
    'Where means a place.',
    'Say that one thing.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Who do you live with?',
      steps: [
        'Who means a person.',
      ],
      answer: 'Name a person.',
    },
    {
      level: 2,
      ask: 'Where did you put your sandals?',
      steps: [
        'Where means a place.',
      ],
      answer: 'Name the place, such as under the bench.',
    },
  ],

  traps: [
    {
      mistake: 'Naming a person when asked what.',
      why: 'What means a thing. '
        + 'Listen for the first word.',
    },
    {
      mistake: 'Saying nothing.',
      why: 'Say one thing. '
        + 'Even one word is an answer.',
    },
  ],

  extension:
    'Now you ask me. '
    + 'Start with who. '
    + 'Then ask one starting with where.',

  questions: [
    {
      id: 'aq-1',
      ask: 'Who asks about:',
      kind: 'choice',
      options: ['A person', 'A thing', 'A place'],
      answer: 'A person',
      teach: 'What asks about a thing. Where asks about a place.',
      level: 1,
    },
    {
      id: 'aq-2',
      ask: 'Where asks about:',
      kind: 'choice',
      options: ['A place', 'A person', 'A thing'],
      answer: 'A place',
      teach: 'Under the bench is a place.',
      level: 2,
    },
  ],
})

/* ── Nursery: sitting with a story ─────────────────────────────────── */

teach({
  topicId: 'listen-to-story',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Sit still and listen to the story. '
      + 'Afterwards you say who was in it. '
      + 'Then say what they did.',
    method: [
      'Sit where you can see.',
      'Listen all the way to the end.',
      'Then say who was in it.',
    ],
  },

  idea:
    'I am going to tell you a story. '
    + 'Sit where you can see me. '
    + 'Listen all the way to the end. '
    + 'Now tell me who was in the story. '
    + 'Now tell me what they did. '
    + 'What happened at the end?',

  mechanism:
    'For the adult. '
    + 'Ask the questions after the story, never during it. '
    + 'Stopping to question breaks the thread, '
    + 'and at this age the thread is the thing being practised. '
    + 'Start with who, which is the easiest to remember, '
    + 'then what they did, then the ending. '
    + 'If the child cannot answer, '
    + 'tell the same story again tomorrow. '
    + 'Repeating one story several times '
    + 'does more than telling three different ones.',

  method: [
    'Sit where you can see.',
    'Be quiet while the story is told.',
    'Listen to the end.',
    'Say who was in it.',
    'Say what they did.',
    'Say how it ended.',
  ],

  worked: [
    {
      level: 1,
      ask: 'The story is finished. What do you say first?',
      steps: [
        'Start with the people or animals.',
      ],
      answer: 'Who was in the story.',
    },
    {
      level: 2,
      ask: 'Can you ask your question in the middle of the story?',
      steps: [
        'Questions come after.',
      ],
      answer: 'Wait until the end.',
    },
  ],

  traps: [
    {
      mistake: 'Talking while the story is being told.',
      why: 'Listen first. '
        + 'The questions come at the end.',
    },
  ],

  extension:
    'Hear the same story again tomorrow. '
    + 'This time, say what happens next '
    + 'before I say it.',

  questions: [
    {
      id: 'st-1',
      ask: 'When do you ask about the story?',
      kind: 'choice',
      options: ['At the end', 'In the middle', 'At the start'],
      answer: 'At the end',
      teach: 'Listen all the way through first.',
      level: 1,
    },
  ],
})

/* ── Nursery: words that rhyme ────────────────────────────────────── */

teach({
  topicId: 'rhyme',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Some words end with the same sound. '
      + 'Cat and hat. Pot and hot. '
      + 'Those words rhyme. '
      + 'Listen to the end of the word.',
    method: [
      'Say both words out loud.',
      'Listen to the end of each one.',
      'Same ending means they rhyme.',
    ],
  },

  idea:
    'Listen. Cat. Hat. '
    + 'They end the same. '
    + 'They rhyme. '
    + 'Listen again. Cat. Dog. '
    + 'Those do not end the same. '
    + 'They do not rhyme. '
    + 'Now you try. Pot and hot. '
    + 'Do they rhyme?',

  mechanism:
    'For the adult. '
    + 'Rhyme is the first time a child listens '
    + 'to the SOUND of a word rather than its meaning, '
    + 'and that is why it matters so much later. '
    + 'Reading needs a child who can hear the parts of a word, '
    + 'and rhyme is where that starts. '
    + 'So say both words slowly, '
    + 'and stretch the ending: '
    + 'caaat, haaat. '
    + 'Do not explain it. Let them hear it. '
    + 'Songs and rhymes do this work for you, '
    + 'which is why they are not just entertainment.',

  method: [
    'Say the first word out loud.',
    'Say the second word out loud.',
    'Listen only to the ending.',
    'Same ending means they rhyme.',
    'Now say another word that ends the same.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Do pot and hot rhyme?',
      steps: [
        'Say both. Listen to the end.',
      ],
      answer: 'Yes. They end the same.',
    },
    {
      level: 2,
      ask: 'Give a word that rhymes with pan.',
      steps: [
        'It must end like pan.',
      ],
      answer: 'Man. Can. Fan.',
    },
  ],

  traps: [
    {
      mistake: 'Listening to the start of the word.',
      why: 'Rhyme is at the end. '
        + 'Cat and cup start the same and do not rhyme.',
    },
    {
      mistake: 'Matching by meaning.',
      why: 'Cat and dog go together '
        + 'and they do not rhyme.',
    },
  ],

  extension:
    'Now make up a silly word that rhymes. '
    + 'It does not have to mean anything. '
    + 'Zat rhymes with cat.',

  questions: [
    {
      id: 'rh-1',
      ask: 'Which word rhymes with cat?',
      kind: 'choice',
      options: ['Hat', 'Dog', 'Cup'],
      answer: 'Hat',
      teach: 'Cat and hat end the same.',
      level: 1,
    },
    {
      id: 'rh-2',
      ask: 'Where do you listen for a rhyme?',
      kind: 'choice',
      options: [
        'At the end of the word',
        'At the start',
        'In the middle',
      ],
      answer: 'At the end of the word',
      teach: 'Cat and cup start the same but do not rhyme.',
      level: 2,
    },
  ],
})

/* ── Nursery: holding a book ─────────────────────────────────────── */

teach({
  topicId: 'hold-a-book',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Hold the book the right way up. '
      + 'The front is the cover. '
      + 'Turn one page at a time. '
      + 'We read from left to right.',
    method: [
      'Turn the book until the pictures are the right way up.',
      'Start at the front.',
      'Turn one page at a time.',
    ],
  },

  idea:
    'This is the front of the book. '
    + 'Hold it this way up. '
    + 'Look, the picture is the right way round now. '
    + 'Open it at the front. '
    + 'Turn one page. Just one. '
    + 'We look at this side first. '
    + 'Then this side. '
    + 'We go this way. From here to here.',

  mechanism:
    'For the adult. '
    + 'None of this is obvious to a child who has not held a book, '
    + 'and all of it is needed before reading can start. '
    + 'Which way up. Which end is the front. '
    + 'One page at a time. '
    + 'Left to right, and top to bottom. '
    + 'So hand the book to the child upside down sometimes '
    + 'and let them turn it. '
    + 'Run your finger under the words as you read, '
    + 'left to right, '
    + 'because that is how the direction is learned, '
    + 'without anybody having to explain it.',

  method: [
    'Take the book.',
    'Turn it until the picture is the right way up.',
    'Find the front.',
    'Open it.',
    'Turn one page at a time.',
    'Look at the left side first, then the right.',
  ],

  worked: [
    {
      level: 1,
      ask: 'The picture looks upside down. What do you do?',
      steps: [
        'The book is the wrong way up.',
      ],
      answer: 'Turn the book round.',
    },
    {
      level: 2,
      ask: 'How many pages do you turn at once?',
      steps: [
        'One at a time.',
      ],
      answer: 'One.',
    },
  ],

  traps: [
    {
      mistake: 'Turning a handful of pages.',
      why: 'One page at a time. '
        + 'Use your finger and thumb.',
    },
    {
      mistake: 'Starting at the back.',
      why: 'Start at the front, where the cover is.',
    },
  ],

  extension:
    'Hold the book and tell me the story '
    + 'from the pictures. '
    + 'Turn the pages as you go.',

  questions: [
    {
      id: 'hb-1',
      ask: 'Which way do we read along a line?',
      kind: 'choice',
      options: [
        'From left to right',
        'From right to left',
        'From the middle',
      ],
      answer: 'From left to right',
      teach: 'Follow the finger under the words.',
      level: 1,
    },
  ],
})

/* ── Nursery: holding a pencil ──────────────────────────────────── */

teach({
  topicId: 'hold-pencil',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Hold the pencil with three fingers. '
      + 'Thumb, first finger, and the next one under it. '
      + 'Hold it near the point, not at the top. '
      + 'Rest your hand on the paper.',
    method: [
      'Pinch the pencil with thumb and first finger.',
      'Rest it on the finger underneath.',
      'Rest your hand on the paper and draw.',
    ],
  },

  idea:
    'Pick up the pencil. '
    + 'Pinch it with your thumb and this finger. '
    + 'Let it lie on the finger underneath. '
    + 'Hold it near the point. '
    + 'Rest your hand on the paper. '
    + 'Now draw a line down. '
    + 'Now draw a line across. '
    + 'Now draw a circle.',

  mechanism:
    'For the adult. '
    + 'A child holding a pencil in a fist '
    + 'has to move the whole arm to make a mark, '
    + 'so the lines wander and they tire quickly. '
    + 'Three fingers let the hand move instead of the arm, '
    + 'and that is what makes drawing on purpose possible. '
    + 'Correct the grip gently and often '
    + 'rather than once firmly. '
    + 'A short fat pencil or a piece of chalk '
    + 'is easier to hold correctly than a long thin one. '
    + 'Do not worry yet about which hand. '
    + 'Let the child use the one they reach with.',

  method: [
    'Pick up the pencil near the point.',
    'Pinch it with your thumb and first finger.',
    'Let it rest on the finger underneath.',
    'Rest your hand on the paper.',
    'Draw a line down.',
    'Draw a line across.',
    'Draw a circle.',
  ],

  worked: [
    {
      level: 1,
      ask: 'How many fingers hold the pencil?',
      steps: [
        'Thumb, first finger, and one underneath.',
      ],
      answer: 'Three.',
    },
    {
      level: 2,
      ask: 'Your lines wander all over. What should you check?',
      steps: [
        'A fist grip moves the whole arm.',
      ],
      answer: 'How you are holding the pencil, '
        + 'and that your hand is resting on the paper.',
    },
  ],

  traps: [
    {
      mistake: 'Holding the pencil in a fist.',
      why: 'Then the arm moves, not the hand. '
        + 'Use three fingers.',
    },
    {
      mistake: 'Holding it at the top.',
      why: 'Hold it near the point. '
        + 'You can see what you are drawing.',
    },
  ],

  extension:
    'Now draw a line between two dots. '
    + 'Try to keep it straight. '
    + 'Now join three dots.',

  questions: [
    {
      id: 'hp-1',
      ask: 'Where do you hold the pencil?',
      kind: 'choice',
      options: ['Near the point', 'At the very top', 'In your fist'],
      answer: 'Near the point',
      teach: 'Then you can see what you are drawing.',
      level: 1,
    },
  ],
})

/* ── Nursery: keeping myself clean ─────────────────────────────── */

teach({
  topicId: 'keeping-clean',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Wash your hands with soap and water. '
      + 'Rub all over, and between the fingers. '
      + 'Wash before you eat. '
      + 'Wash after the toilet.',
    method: [
      'Wet your hands. Put on soap.',
      'Rub everywhere, and between the fingers.',
      'Rinse and dry.',
    ],
  },

  idea:
    'Wet your hands. '
    + 'Put soap on them. '
    + 'Rub the palms together. '
    + 'Rub the backs. '
    + 'Rub between your fingers. '
    + 'Keep rubbing while you sing a short song. '
    + 'Now rinse the soap off. '
    + 'Now dry them. '
    + 'Wash before you eat. '
    + 'Wash after the toilet.',

  mechanism:
    'For the adult. '
    + 'Two things do all the work here, '
    + 'and both are usually skipped. '
    + 'The first is the soap. '
    + 'Water alone moves dirt about; '
    + 'soap is what lifts it off the skin. '
    + 'The second is the time. '
    + 'Rubbing for a few seconds does almost nothing, '
    + 'which is why a short song is used: '
    + 'it makes the time long enough without anybody counting. '
    + 'Also name the two moments that matter most, '
    + 'before eating and after the toilet, '
    + 'because those are where illness actually passes.',

  method: [
    'Wet your hands.',
    'Put on soap.',
    'Rub palms, backs and between the fingers.',
    'Keep rubbing while you sing a short song.',
    'Rinse it all off.',
    'Dry your hands.',
    'Do it before eating.',
    'Do it after the toilet.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What do you need as well as water?',
      steps: [
        'Water alone is not enough.',
      ],
      answer: 'Soap.',
    },
    {
      level: 2,
      ask: 'When does washing matter most?',
      steps: [
        'Think when dirt reaches your mouth.',
      ],
      answer: 'Before eating and after the toilet.',
    },
  ],

  traps: [
    {
      mistake: 'Rinsing with water and no soap.',
      why: 'Soap is what lifts the dirt off. '
        + 'Water alone moves it around.',
    },
    {
      mistake: 'Washing for one second.',
      why: 'Keep rubbing while you sing a short song.',
    },
    {
      mistake: 'Forgetting between the fingers.',
      why: 'Dirt hides there. Rub between them.',
    },
  ],

  extension:
    'Also keep your nails short, '
    + 'brush your teeth, '
    + 'and bath every day. '
    + 'Wash a cut at once.',

  questions: [
    {
      id: 'kc-1',
      ask: 'What lifts the dirt off your hands?',
      kind: 'choice',
      options: ['Soap', 'Cold water', 'A cloth'],
      answer: 'Soap',
      teach: 'Water alone only moves it about.',
      level: 1,
    },
    {
      id: 'kc-2',
      ask: 'When must you always wash your hands?',
      kind: 'choice',
      options: [
        'Before eating and after the toilet',
        'Only in the morning',
        'Only when they look dirty',
      ],
      answer: 'Before eating and after the toilet',
      teach: 'Those are the times illness passes on.',
      level: 2,
    },
  ],
})

/* ── Nursery: colours and mixing them ─────────────────────────── */

teach({
  topicId: 'colour-play',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Red. Blue. Yellow. Green. Black. White. '
      + 'Mix two colours and you get a new one. '
      + 'Blue and yellow make green.',
    method: [
      'Name the colour you see.',
      'Mix two and look at what you get.',
      'Say the new colour’s name.',
    ],
  },

  idea:
    'This is red. '
    + 'This is blue. '
    + 'This is yellow. '
    + 'Now watch. '
    + 'I put blue with yellow. '
    + 'Look. It is green now. '
    + 'Now red with yellow. '
    + 'It is orange. '
    + 'Now you mix two and tell me what you see.',

  mechanism:
    'For the adult. '
    + 'The mixing is the part worth doing, '
    + 'not the naming. '
    + 'A child who has only been shown colours '
    + 'learns six words. '
    + 'A child who has made green from blue and yellow '
    + 'has seen a cause and an effect, '
    + 'and will look for one again. '
    + 'So let them do the mixing themselves, '
    + 'even though it is messy, '
    + 'and ask what they think will happen before they mix. '
    + 'Water with a little dye, or chalk dust, works '
    + 'if paint is not available.',

  method: [
    'Look at the colour.',
    'Say its name.',
    'Choose two colours.',
    'Say what you think will happen.',
    'Mix them.',
    'Say what you got.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What is this colour?',
      steps: [
        'Look at it and name it.',
      ],
      answer: 'Name the colour you see.',
    },
    {
      level: 2,
      ask: 'What do blue and yellow make?',
      steps: [
        'Mix them and look.',
      ],
      answer: 'Green.',
    },
  ],

  traps: [
    {
      mistake: 'Mixing all the colours together.',
      why: 'You get brown every time. '
        + 'Mix just two.',
    },
  ],

  extension:
    'Add a little white to a colour. '
    + 'It goes lighter. '
    + 'Add a little black. '
    + 'It goes darker.',

  questions: [
    {
      id: 'cl-1',
      ask: 'Blue and yellow make:',
      kind: 'choice',
      options: ['Green', 'Red', 'Black'],
      answer: 'Green',
      teach: 'Mix them and look.',
      level: 1,
    },
    {
      id: 'cl-2',
      ask: 'What happens if you mix all the colours?',
      kind: 'choice',
      options: [
        'You get brown',
        'You get white',
        'You get a new bright colour',
      ],
      answer: 'You get brown',
      teach: 'So mix only two at a time.',
      level: 2,
    },
  ],
})

/* ── Nursery: keeping the beat ─────────────────────────────── */

teach({
  topicId: 'keep-a-beat',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A song has a beat. '
      + 'The beat keeps going, the same all the way. '
      + 'Clap on the beat. '
      + 'Not faster. Not slower.',
    method: [
      'Listen for the beat first.',
      'Nod your head with it.',
      'Then start clapping.',
    ],
  },

  idea:
    'Listen to this song. '
    + 'Can you hear the beat? '
    + 'It goes on and on, the same. '
    + 'Nod your head with it. '
    + 'Now clap with it. '
    + 'Keep going the same. '
    + 'Not faster. Not slower. '
    + 'Now hit the drum on the beat.',

  mechanism:
    'For the adult. '
    + 'Keeping a steady beat is harder than it looks '
    + 'and it is worth the practice, '
    + 'because the same skill sits under counting, '
    + 'under clapping the parts of a word, '
    + 'and under reading at a steady pace. '
    + 'Children almost always speed up. '
    + 'So start by nodding or walking to the beat '
    + 'before clapping, '
    + 'because a whole body movement is easier to keep steady '
    + 'than a hand. '
    + 'Clap with them, loudly, and do not speed up yourself.',

  method: [
    'Listen to the song.',
    'Find the beat.',
    'Nod your head with it.',
    'Now walk on the spot with it.',
    'Now clap with it.',
    'Keep it the same all the way.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What do you do before clapping?',
      steps: [
        'You must hear it first.',
      ],
      answer: 'Listen for the beat, and nod with it.',
    },
    {
      level: 2,
      ask: 'You are clapping faster and faster. What is wrong?',
      steps: [
        'The beat stays the same.',
      ],
      answer: 'The beat does not speed up. '
        + 'Slow back to it.',
    },
  ],

  traps: [
    {
      mistake: 'Getting faster and faster.',
      why: 'Everybody does. '
        + 'Nod your head and come back to the beat.',
    },
  ],

  extension:
    'Now clap only on the loud beats. '
    + 'Now stamp instead of clapping. '
    + 'Now clap a slow song and a fast one.',

  questions: [
    {
      id: 'bt-1',
      ask: 'What does a beat do?',
      kind: 'choice',
      options: [
        'Stays the same all the way',
        'Gets faster',
        'Stops and starts',
      ],
      answer: 'Stays the same all the way',
      teach: 'That is why you nod with it first.',
      level: 1,
    },
  ],
})
