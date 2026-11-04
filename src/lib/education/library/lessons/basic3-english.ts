/**
 * Stored lessons for Basic 3 English.
 *
 * ── Written to the reading level from the start ────────────────────────────
 *
 * The Basic 1 to 3 lessons written before these had to be rewritten, because
 * they came out two to three school years above the children reading them.
 * The cause was an adult voice excused by "an adult reads it aloud". These
 * are written short from the beginning: sentences of about eight to twelve
 * words, common words, and a concrete thing to picture in every paragraph.
 *
 * `scripts/coverage/reading-level.mts` is the check. Basic 3 should sit at or
 * below grade 3, and a part that drifts above is named by that script.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── describing something clearly ─────────────────────────────────────────── */

teach({
  topicId: 'describe-something',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A good description lets somebody else pick the thing out. Name '
      + 'what only yours has.',
    method: [
      'Say what the thing is.',
      'Say its size and colour.',
      'Say the one odd thing about it.',
    ],
  },

  why:
    'You lose your water bottle at school. '
    + 'You go to the teacher and tell her your bottle is gone. '
    + 'She asks you which one it is. '
    + 'You say: a bottle. '
    + 'She opens the lost property box. '
    + 'There are nine bottles inside it. '
    + 'Every single one of them is a bottle. '
    + 'So every word you said was true, '
    + 'and it did not get your bottle back. '
    + 'What else did you have to say? '
    + 'This lesson is what else.',

  idea:
    'To describe something is to say what it is like. '
    + 'You say enough that somebody else could pick it out. '
    + 'Not just "a bag". A red bag with a broken strap.',

  mechanism:
    'Here is the test for a good description. '
    + 'Could a stranger find the thing using only your words? '
    + 'If five bags are on the table, "a bag" helps nobody. '
    + 'So pick the things that are true of yours and not of the others. '
    + 'Those are the useful words. The rest is filling.',

  recap:
    'A full sentence says who or what, '
    + 'and then says what they do or what they are. '
    + '"The bag is red" is a full sentence. '
    + 'It names the bag and then tells you something about it. '
    + '"Red" on its own is not a sentence. '
    + 'It never says what is red. '
    + 'One word can answer a question. '
    + 'One word cannot describe a thing. '
    + 'A description is several full sentences, one after the other.',

  method: [
    'Say what the thing is first. A bag. A boy. A tree.',
    'Say how big it is.',
    'Say what colour it is.',
    'Say what it is made of, if you can tell.',
    'Say the one odd thing about it. A tear. A mark. A missing button.',
    'Now check: could somebody find it from what you said?',
  ],

  worked: [
    {
      level: 1,
      ask: 'Describe your pencil.',
      steps: [
        'What is it? A pencil.',
        'How big? Short, because it has been sharpened often.',
        'What colour? Yellow.',
      ],
      answer: 'A short yellow pencil that has been sharpened many times.',
    },
    {
      level: 2,
      ask: 'Why is "a girl" not a good description?',
      steps: [
        'Think of your class. How many girls are there?',
        'Those words fit all of them.',
        'So nobody can tell which one you mean.',
      ],
      answer: 'Because it fits too many people. '
        + 'A description has to leave out everybody else.',
    },
    {
      level: 3,
      ask: 'Two mangoes are on a table. Both are yellow and the same size. '
        + 'One has a small black spot. How do you describe the one you want?',
      steps: [
        'Colour will not help. Both are yellow.',
        'Size will not help. They match.',
        'Only one thing is different. The black spot.',
      ],
      answer: 'The mango with the small black spot. '
        + 'Name the thing that only yours has.',
    },
  ],

  traps: [
    {
      mistake: 'Saying how you feel about the thing instead of what it looks like.',
      why: 'A listener cannot see what you feel. '
        + 'They can see what is on the bag.',
    },
    {
      mistake: 'Listing everything you can see.',
      why: 'Too many words hide the useful one. '
        + 'Keep what is true of yours and not of the others.',
    },
    {
      mistake: 'Starting with the small details.',
      why: 'Say what the thing is first. '
        + 'A listener needs the big picture before the spots and marks.',
    },
  ],

  extension:
    'A good description is not only for things. '
    + 'You can describe what happened, or how to get somewhere. '
    + 'The test never changes. '
    + 'Could somebody follow your words and get it right?',

  figure: {
    alt: 'Five plain bags drawn in a row on a table. The third bag has a '
      + 'broken strap, and it is labelled broken strap. Underneath, saying '
      + 'a bag is marked as fitting all five, so nobody can tell which one '
      + 'you mean, and saying the bag with the broken strap is marked as '
      + 'fitting one, so somebody can find it.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Five bags on the table</text>'
      + '<rect x="24" y="56" width="80" height="78"/>'
      + '<path d="M 44 56 Q 64 26 84 56"/>'
      + '<rect x="148" y="56" width="80" height="78"/>'
      + '<path d="M 168 56 Q 188 26 208 56"/>'
      + '<rect x="272" y="56" width="80" height="78" stroke="#0f8a4d"/>'
      + '<path d="M 292 56 Q 300 36 307 30" stroke="#0f8a4d"/>'
      + '<path d="M 332 56 Q 324 36 317 30" stroke="#0f8a4d"/>'
      + '<rect x="396" y="56" width="80" height="78"/>'
      + '<path d="M 416 56 Q 436 26 456 56"/>'
      + '<rect x="520" y="56" width="80" height="78"/>'
      + '<path d="M 540 56 Q 560 26 580 56"/>'
      + '<line x1="312" y1="134" x2="312" y2="144" stroke="#0f8a4d"/>'
      + '<text x="312" y="164" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">broken strap</text>'
      + '<text x="320" y="216" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">You say "a bag"</text>'
      + '<text x="320" y="242" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">That fits all five. Nobody can tell which.</text>'
      + '<line x1="140" y1="268" x2="500" y2="268" stroke-width="2"/>'
      + '<text x="320" y="310" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">You say "the bag with the broken strap"</text>'
      + '<text x="320" y="336" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">That fits one. Now they can find it.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Four things you could say about a bag, and whether each one '
      + 'helps',
    columns: ['What you say', 'Does it help?', 'Why'],
    rows: [
      ['A nice bag', 'No', 'Nice is in your head, not on the bag'],
      ['A bag', 'No', 'It fits all five bags on the table'],
      ['A red bag', 'Sometimes', 'Only if no other bag is red'],
      [
        'A red bag with a broken strap',
        'Yes',
        'Only one bag has that strap',
      ],
    ],
    note: 'The words that help are the ones true of yours and not true of '
      + 'the others.',
  }],
  questions: [
    {
      id: 'desc-1',
      ask: 'Which one is a better description of a bag?',
      kind: 'choice',
      options: ['A nice bag', 'A red bag with a broken strap', 'A bag'],
      answer: 'A red bag with a broken strap',
      teach: 'It names two things only that bag has. '
        + 'Now somebody else could pick it out from a pile.',
      level: 1,
    },
    {
      id: 'desc-2',
      ask: 'What should you say first when you describe something?',
      kind: 'choice',
      options: ['The small marks on it', 'What the thing is', 'How you feel about it'],
      answer: 'What the thing is',
      teach: 'Say "a bag" or "a tree" first. '
        + 'The listener needs the big picture before the details.',
      level: 2,
    },
    {
      id: 'desc-3',
      ask: 'Two blue cups look the same. One has a chip. Which word matters?',
      kind: 'choice',
      options: ['Blue', 'Cup', 'Chipped'],
      answer: 'Chipped',
      teach: 'Blue and cup are true of both. '
        + 'Only the chip tells them apart, so that is the word that works.',
      level: 3,
    },
  ],
})

/* ── reading aloud with expression ────────────────────────────────────────── */

teach({
  topicId: 'read-aloud-fluently',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Read at the speed you talk, and stop where the marks tell you '
      + 'to stop.',
    method: [
      'Read the sentence in your head first.',
      'Read it out at talking speed.',
      'Pause at a full stop. Lift your voice at a question mark.',
    ],
  },

  why:
    'A boy reads aloud in class. '
    + 'He says each word on its own: '
    + '"The. Dog. Ran. Away." '
    + 'Every word is correct. '
    + 'Nobody listening can tell what the sentence said. '
    + 'Then the teacher reads the same line '
    + 'and everybody understands it. '
    + 'She did not read better words. '
    + 'So what did she do that he did not?',

  notation:
    'The marks on the page tell you where to stop. '
    + 'A full stop is a dot. '
    + 'It means the sentence has ended, so stop. '
    + 'A comma is a little hook. '
    + 'It means a short rest, then carry on. '
    + 'A question mark means the sentence is asking, '
    + 'so let your voice go up at the end. '
    + 'Stopping in the middle of a sentence '
    + 'where there is no mark '
    + 'is the commonest mistake, '
    + 'because the words on each side of it '
    + 'belong together.',

  idea:
    'Reading aloud well is not reading fast. '
    + 'It is reading so that somebody listening understands you. '
    + 'You keep a steady pace. '
    + 'You stop where the marks tell you to stop.',

  mechanism:
    'The marks on the page are there for your voice. '
    + 'Read a page with no pauses at all and listen to it. '
    + 'The words run together and the meaning is lost. '
    + 'That is what the marks are for.',

  recap:
    'A word is made of sounds pushed together. '
    + 'Take the word cat. '
    + 'Say c, then a, then t, slowly, one at a time. '
    + 'Now say them faster, with no gaps, '
    + 'and you have said cat. '
    + 'Putting sounds together like that is blending. '
    + 'A sentence works the same way, one step up. '
    + 'The words get pushed together into a line '
    + 'that sounds like talking. '
    + 'This lesson is that step.',

  method: [
    'Read the sentence in your head first.',
    'Then read it out loud.',
    'Go at the speed you would speak at. Not faster.',
    'Stop at a full stop. Pause a little at a comma.',
    'Lift your voice at a question mark.',
    'Stuck on a word? Sound it out, then read the whole line again.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Where do you pause in this? "Ama went home. She ate rice."',
      steps: [
        'Find the full stops.',
        'There is one after home, and one after rice.',
      ],
      answer: 'Pause after home, and again at the end.',
    },
    {
      level: 2,
      ask: 'How should your voice sound at the end of "Where is my book?"',
      steps: [
        'Look at the last mark. It is a question mark.',
        'A question mark lifts the voice.',
      ],
      answer: 'Your voice goes up at the end.',
    },
    {
      level: 3,
      ask: 'You read a line fast and nobody understood you. What went wrong?',
      steps: [
        'Reading fast is not the goal.',
        'You probably ran past the full stops.',
        'Then two thoughts joined into one and the sense was lost.',
      ],
      answer: 'You went too fast and skipped the pauses. '
        + 'Slow to speaking speed and stop at the marks.',
    },
  ],

  traps: [
    {
      mistake: 'Racing to the end to show you can.',
      why: 'Nobody listening can keep up. '
        + 'Read at the speed you talk.',
    },
    {
      mistake: 'Reading in a flat voice, one word at a time.',
      why: 'It sounds like a list, not a sentence. '
        + 'Read the whole line as one thought.',
    },
    {
      mistake: 'Stopping dead at every comma.',
      why: 'A comma is a short breath, not a full stop. '
        + 'Only a full stop needs a real pause.',
    },
  ],

  extension:
    'Listen to somebody read a story well. '
    + 'They change their voice for different people. '
    + 'They slow down at the exciting part. '
    + 'None of that is in the words. It is all in how they read them.',

  figure: {
    alt: 'Three short sentences, each with a line drawn under it to show '
      + 'what the voice does. Under Ama went home the line runs level and '
      + 'then drops at the full stop. Under Are you coming the line runs '
      + 'level and then lifts at the question mark. Under Ama, come here '
      + 'the line stays level with a small upright tick at the comma for a '
      + 'short breath.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">The marks are there for your voice</text>'
      + '<text x="36" y="96" font-size="19" text-anchor="start" fill="currentColor" stroke="none">Ama went home.</text>'
      + '<polyline points="36,124 170,124 200,152" stroke="#0f8a4d"/>'
      + '<text x="236" y="140" font-size="15" text-anchor="start" fill="#0f8a4d" stroke="none">full stop: the voice drops</text>'
      + '<text x="36" y="216" font-size="19" text-anchor="start" fill="currentColor" stroke="none">Are you coming?</text>'
      + '<polyline points="36,244 170,244 200,216" stroke="#0f8a4d"/>'
      + '<text x="236" y="238" font-size="15" text-anchor="start" fill="#0f8a4d" stroke="none">question mark: the voice lifts</text>'
      + '<text x="36" y="326" font-size="19" text-anchor="start" fill="currentColor" stroke="none">Ama, come here.</text>'
      + '<line x1="36" y1="354" x2="180" y2="354" stroke="#0f8a4d"/>'
      + '<line x1="76" y1="342" x2="76" y2="366" stroke="#0f8a4d"/>'
      + '<text x="236" y="348" font-size="15" text-anchor="start" fill="#0f8a4d" stroke="none">comma: a small breath only</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'What each mark tells your voice to do',
    columns: ['Mark', 'How long you stop', 'Your voice'],
    rows: [
      ['A comma', 'A small breath', 'Stays level'],
      ['A full stop', 'A real pause', 'Drops'],
      ['A question mark', 'A real pause', 'Lifts at the end'],
      ['An exclamation mark', 'A real pause', 'Gets stronger'],
    ],
    note: 'Nothing on the page ever tells you to read fast. The marks only '
      + 'tell you to stop, or to change your voice.',
  }],
  questions: [
    {
      id: 'ral-1',
      ask: 'What does a full stop tell your voice to do?',
      kind: 'choice',
      options: ['Pause', 'Speed up', 'Get louder'],
      answer: 'Pause',
      teach: 'Drop your voice and pause. '
        + 'That tells the listener the thought has ended.',
      level: 1,
    },
    {
      id: 'ral-2',
      ask: 'How fast should you read aloud?',
      kind: 'choice',
      options: ['As fast as you can', 'About as fast as you talk', 'Very slowly'],
      answer: 'About as fast as you talk',
      teach: 'Talking speed is the speed a listener can follow. '
        + 'Faster loses them, slower sounds broken.',
      level: 2,
    },
    {
      id: 'ral-3',
      ask: 'Your voice should go up at the end of which sentence?',
      kind: 'choice',
      options: ['I am going home.', 'Are you coming?', 'Sit down.'],
      answer: 'Are you coming?',
      teach: 'It ends in a question mark, and a question lifts the voice. '
        + 'The other two end in full stops.',
      level: 2,
    },
  ],
})

/* ── answering from the passage ───────────────────────────────────────────── */

teach({
  topicId: 'answer-from-text',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The answer is in the passage. Find the line it came from and '
      + 'point at it.',
    method: [
      'Read the whole passage once.',
      'Find the important word from the question.',
      'Hunt for it, then read that line.',
    ],
  },

  why:
    'Your teacher hands out five lines about a boy who walks to Kaneshie '
    + 'market, then asks one question about them. '
    + 'You read the lines and an answer comes into your head. '
    + 'But you cannot tell whether you read it or thought it. '
    + 'If it was only a thought, the mark is gone, '
    + 'and nothing on the page tells you which it was. '
    + 'So how do you make sure your answer came out of the passage?',

  idea:
    'When you answer a question about a passage, the answer is in the passage. '
    + 'You do not guess it. You do not use what is already in your head. '
    + 'You find the line it came from and point at it.',

  mechanism:
    'There is a reason for this rule. '
    + 'Two children can read the same passage and answer differently. '
    + 'One guessed and one looked. '
    + 'Only the one who looked can show where the answer came from. '
    + 'Pointing at the line is how you prove you are right. '
    + 'And it is how you catch yourself when you are wrong.',

  recap:
    'A passage is a few sentences written one after another about one thing. '
    + 'Here is one, two sentences long. '
    + '"Kofi has a brown dog called Bono. It sleeps under the table." '
    + 'Reading it means saying each word in order '
    + 'until you can say what it told you. '
    + 'Up to now you read a passage to find out what it says. '
    + 'Today you read it to find one thing inside it.',

  method: [
    'Read the whole passage once.',
    'Read the question. Find the important word in it.',
    'Hunt for that word in the passage.',
    'Read the line it is in, and the line after it.',
    'Write your answer using the words from the passage.',
    'Point at the line. If you cannot, you guessed.',
  ],

  worked: [
    {
      level: 1,
      ask: 'The passage says: "Kofi has a brown dog called Bono." '
        + 'What colour is the dog?',
      steps: [
        'The question asks about colour.',
        'Hunt for a colour word. The passage says brown.',
      ],
      answer: 'Brown. It is in the first line.',
    },
    {
      level: 2,
      ask: 'The passage says: "It rained all morning, so the match was moved '
        + 'to Saturday." Why was the match moved?',
      steps: [
        'The question asks why.',
        'Hunt for the word so, because it often comes before a reason.',
        'The reason sits just before it: it rained all morning.',
      ],
      answer: 'Because it rained all morning.',
    },
    {
      level: 3,
      ask: 'A question asks what Ama ate. Rice is her favourite, '
        + 'and that fact is already in your head. '
        + 'The passage does not say what she ate. What do you write?',
      steps: [
        'Rice is her favourite. But that is in your head.',
        'It is not in the passage.',
        'Hunt again to be sure.',
        'If the passage really does not say it, you cannot answer it.',
      ],
      answer: 'That the passage does not say. '
        + 'Writing rice would be a guess, even if it turned out right.',
    },
  ],

  traps: [
    {
      mistake: 'Answering from what is already in your head.',
      why: 'The question is about this passage. '
        + 'What you bring from home is not the answer here.',
    },
    {
      mistake: 'Reading only the question and then hunting.',
      why: 'Read the whole passage once first. '
        + 'Otherwise you do not know where to look.',
    },
    {
      mistake: 'Answering in one word when the question asks why.',
      why: 'A why question wants a reason. '
        + 'Use the word because and give it.',
    },
  ],

  extension:
    'Some answers are not written in one line. '
    + 'You have to put two lines together to see it. '
    + 'That is harder, and it is still not guessing. '
    + 'You can still point at the two lines you used.',

  figure: {
    alt: 'A box holding four lines of a passage about Kofi and his brown '
      + 'dog Bono, with the first line ringed. Below the box is the '
      + 'question what colour is the dog, and an arrow runs from the '
      + 'question round the outside of the box to the ringed line. Beside '
      + 'the passage a thought bubble saying I know a dog that is black is '
      + 'crossed out and marked as being in your head. Underneath, the '
      + 'answer brown, with a note that you can point at the line, so you '
      + 'are not guessing.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">The answer is in the passage</text>'
      + '<rect x="24" y="44" width="400" height="150"/>'
      + '<rect x="32" y="56" width="384" height="30" stroke="#0f8a4d"/>'
      + '<text x="44" y="78" font-size="16" text-anchor="start" fill="currentColor" stroke="none">Kofi has a brown dog called Bono.</text>'
      + '<text x="44" y="112" font-size="16" text-anchor="start" fill="currentColor" stroke="none">It sleeps under his bed.</text>'
      + '<text x="44" y="144" font-size="16" text-anchor="start" fill="currentColor" stroke="none">Bono eats rice and bones.</text>'
      + '<text x="44" y="176" font-size="16" text-anchor="start" fill="currentColor" stroke="none">He takes Bono out every day.</text>'
      + '<ellipse cx="534" cy="100" rx="96" ry="56"/>'
      + '<text x="534" y="94" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">I know a dog</text>'
      + '<text x="534" y="118" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">that is black</text>'
      + '<line x1="472" y1="60" x2="596" y2="140" stroke="#c8433a"/>'
      + '<line x1="596" y1="60" x2="472" y2="140" stroke="#c8433a"/>'
      + '<text x="534" y="186" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">That is in your head.</text>'
      + '<polyline points="224,236 10,236 10,71 26,71" stroke="#0f8a4d"/>'
      + '<polygon points="36,71 22,64 22,78" fill="#0f8a4d" stroke="none"/>'
      + '<text x="224" y="258" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">What colour is the dog?</text>'
      + '<text x="320" y="312" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">Brown. It is in the first line.</text>'
      + '<text x="320" y="344" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">You can point at it, so you did not guess.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'What to hunt for in the passage, question word by question '
      + 'word',
    columns: ['The question asks', 'Hunt for', 'An answer might be'],
    rows: [
      ['Who', 'A name', 'Kofi'],
      ['What colour', 'A colour word', 'brown'],
      ['Where', 'A place', 'the market'],
      ['When', 'A day or a time', 'on Saturday'],
      ['Why', 'The word because or the word so', 'because it rained'],
    ],
    note: 'If the word is not there, read the lines around where it should '
      + 'be. The passage may say it another way.',
  }],
  questions: [
    {
      id: 'aft-1',
      ask: 'Where is the answer to a question about a passage?',
      kind: 'choice',
      options: ['In the passage', 'In your head', 'In the picture'],
      answer: 'In the passage',
      teach: 'You find it and point at the line. '
        + 'That is how you show you are right.',
      level: 1,
    },
    {
      id: 'aft-2',
      ask: 'The passage says the match moved because it rained. '
        + 'Which word helped you find the reason?',
      kind: 'choice',
      options: ['Match', 'Because', 'Saturday'],
      answer: 'Because',
      teach: 'Words like because and so point at reasons. '
        + 'Hunt for them when a question asks why.',
      level: 2,
    },
    {
      id: 'aft-3',
      ask: 'The passage does not say what Ama ate. What should you write?',
      kind: 'choice',
      options: [
        'Rice, since she likes rice',
        'That the passage does not say',
        'Anything, as long as it sounds right',
      ],
      answer: 'That the passage does not say',
      teach: 'A guess that happens to be right is still a guess. '
        + 'If you cannot point at the line, you do not have the answer.',
      level: 3,
    },
  ],
})

/* ── singular and plural ──────────────────────────────────────────────────── */

teach({
  topicId: 'singular-plural',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Singular is one, plural is more than one. Most words add s, '
      + 'but some change shape.',
    method: [
      'Most words: add s.',
      'Ends in s, x, ch or sh: add es.',
      'A few change shape: foot becomes feet.',
    ],
  },

  why:
    'You write a note to your teacher: I have two foots. '
    + 'The class laughs. '
    + 'But look at what you did. '
    + 'You know you have two of them. '
    + 'You know the word is foot. '
    + 'You added an s, '
    + 'because that is what you do to make two of a thing. '
    + 'One book, two books. '
    + 'So why is two foots wrong when two books is right? '
    + 'The rule worked on one word and broke on the other. '
    + 'And nothing you can see in either word says which is which. '
    + 'This lesson is how to tell.',

  notation:
    'The letters added to a word to make it plural are called the ending. '
    + 'Book takes the ending -s and becomes books. '
    + 'Box takes the ending -es and becomes boxes. '
    + 'An ending is written joined to the word. '
    + 'No space, and no apostrophe. '
    + 'Writing book’s for more than one book '
    + 'is the commonest mistake in this whole topic. '
    + 'An apostrophe has a different job. '
    + 'It shows that a thing belongs to somebody. '
    + 'Two books. The book’s cover. '
    + 'Same letter s, two different jobs.',

  idea:
    'Singular means one. Plural means more than one. '
    + 'One book, two books. '
    + 'Most words just add an s. '
    + 'But not all of them, and the ones that do not are common.',

  mechanism:
    'Think about why the odd ones are odd. '
    + 'They are odd because they are old and used all the time. '
    + 'Foot, man, child, tooth. '
    + 'Words used every day keep their old shapes. '
    + 'New words never do that. Everybody says two phones. '
    + 'So the words that break the rule are the ones you hear most, '
    + 'which is lucky: you will learn them by ear.',

  recap:
    'A noun is a naming word. '
    + 'It names a person, a place or a thing. '
    + 'Kofi is a noun. '
    + 'Accra is a noun. '
    + 'Book, chair and goat are all nouns. '
    + 'Point at anything in the room and the word for it is a noun. '
    + 'This lesson is about one thing that happens to a noun: '
    + 'what it does when there is more than one of it.',

  method: [
    'Ask first: is it one, or more than one?',
    'More than one? Look at how the word ends.',
    'The last letters decide what you add.',
    'Then check it is not one of the old words that change shape instead.',
    'Not sure? Say it out loud. Your ear often knows.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What is the plural of dog?',
      steps: [
        'It is an ordinary word.',
        'Just add s.',
      ],
      answer: 'Dogs.',
    },
    {
      level: 2,
      ask: 'What is the plural of bus?',
      steps: [
        'Look at the last letter. It is s.',
        'Words ending in s take es, not just s.',
        'Try saying "buss". It does not work.',
      ],
      answer: 'Buses.',
    },
    {
      level: 3,
      ask: 'Why is the plural of child not childs?',
      steps: [
        'Child is a very old word, used every day.',
        'Old everyday words kept their old plural.',
        'That plural is children.',
      ],
      answer: 'Children. The word is too old and too common to follow the '
        + 'new rule.',
    },
  ],

  traps: [
    {
      mistake: 'Adding s to every word.',
      why: 'Foots and childs are wrong. '
        + 'A few common words change shape instead.',
    },
    {
      mistake: 'Adding s to a word that ends in s or x.',
      why: 'Say "boxs" out loud. You cannot. '
        + 'That is why those words take es.',
    },
    {
      mistake: 'Using an apostrophe to make a plural.',
      why: 'Two mango’s is wrong. '
        + 'Two mangoes is right. '
        + 'The apostrophe is for something else.',
    },
  ],

  extension:
    'Some words have no singular at all, like scissors and trousers. '
    + 'You cannot have one trouser. '
    + 'Things made of two matching parts often work this way.',

  figure: {
    alt: 'Two boxes side by side. The left box holds old words said every '
      + 'day, foot, child, man and tooth, and says they change shape to '
      + 'feet, children, men and teeth. The right box holds newer words, '
      + 'phone, bus, car and radio, and says they all simply take s or es. '
      + 'Underneath, a note that the odd words are the ones you hear most, '
      + 'so your ear will learn them.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Why a few words are odd</text>'
      + '<rect x="20" y="48" width="286" height="196" stroke="#0f8a4d"/>'
      + '<text x="163" y="78" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">old words you say every day</text>'
      + '<text x="163" y="116" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">foot    child</text>'
      + '<text x="163" y="150" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">man    tooth</text>'
      + '<text x="163" y="190" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">they change shape:</text>'
      + '<text x="163" y="218" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">feet, children, men, teeth</text>'
      + '<rect x="334" y="48" width="286" height="196"/>'
      + '<text x="477" y="78" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">newer words</text>'
      + '<text x="477" y="116" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">phone    bus</text>'
      + '<text x="477" y="150" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">car    radio</text>'
      + '<text x="477" y="190" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">they all take s or es:</text>'
      + '<text x="477" y="218" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">phones, buses, cars, radios</text>'
      + '<text x="320" y="296" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">The odd words are the ones you hear most.</text>'
      + '<text x="320" y="326" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">So your ear will learn them for you.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'How a naming word changes when there is more than one',
    columns: ['Kind of word', 'What happens', 'One', 'More than one'],
    rows: [
      ['Most words', 'Add s', 'cat', 'cats'],
      ['Ends in s, x, ch or sh', 'Add es', 'box', 'boxes'],
      ['Ends in a letter then y', 'The y becomes ies', 'baby', 'babies'],
      ['An old everyday word', 'The whole word changes', 'foot', 'feet'],
      ['A few animals', 'Nothing changes', 'sheep', 'sheep'],
    ],
    note: 'Say it out loud before you write it. Nobody can say boxs, which '
      + 'is why box takes es.',
  }],
  questions: [
    {
      id: 'plu-1',
      ask: 'What is the plural of cup?',
      kind: 'choice',
      options: ['Cups', 'Cupes', 'Cup'],
      answer: 'Cups',
      teach: 'An ordinary word, so just add s.',
      level: 1,
    },
    {
      id: 'plu-2',
      ask: 'What is the plural of box?',
      kind: 'choice',
      options: ['Boxs', 'Boxes', 'Boxies'],
      answer: 'Boxes',
      teach: 'It ends in x, so it takes es. '
        + 'Say "boxs" out loud and you will hear why.',
      level: 2,
    },
    {
      id: 'plu-3',
      ask: 'What is the plural of foot?',
      kind: 'choice',
      options: ['Foots', 'Feet', 'Footes'],
      answer: 'Feet',
      teach: 'Foot is an old everyday word, so it changes shape instead of '
        + 'adding s.',
      level: 3,
    },
  ],
})

/* ── choosing a book you can read ─────────────────────────────────────────── */

teach({
  topicId: 'choose-a-book',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A book is right for you if you can mostly read it. Five hard '
      + 'words on a page means too hard.',
    method: [
      'Open a page from the middle.',
      'Hold up a finger for each word you cannot read.',
      'Five fingers means too hard for now.',
    ],
  },

  why:
    'A girl takes a big book off the shelf '
    + 'because she likes the picture on the front. '
    + 'She opens it, '
    + 'and on the first page '
    + 'there are nine words she cannot read. '
    + 'She stops at every one of them. '
    + 'By the bottom of the page '
    + 'she has forgotten the top of it. '
    + 'She puts the book down '
    + 'and says she does not like reading. '
    + 'Nothing was wrong with the book '
    + 'and nothing was wrong with the girl. '
    + 'So how do you tell, before you start, '
    + 'whether a book is the right one for you?',

  idea:
    'A good book for you is one you can mostly read on your own. '
    + 'Not one that is too easy. Not one that stops you on every line. '
    + 'There is a quick way to test a book before you take it.',

  mechanism:
    'Here is why the test matters. '
    + 'A book that is too hard does not teach you more. '
    + 'You spend all your work on the words and none on the story. '
    + 'Then you give up, and you think you are a bad reader. '
    + 'You are not. The book was wrong for today. '
    + 'A book at the right level lets you practise reading, '
    + 'which is the only thing that makes you better at it.',

  recap:
    'When you meet a word you do not know, '
    + 'you sound it out. '
    + 'Take the word stand. '
    + 'Say s, t, a, n, d, '
    + 'then push them together '
    + 'and the word comes out. '
    + 'That works, and it takes time. '
    + 'One hard word on a page costs you a few seconds. '
    + 'Nine hard words on a page costs you the page, '
    + 'because by the end of it '
    + 'you have forgotten the beginning. '
    + 'This lesson is about how many is too many.',

  method: [
    'Open the book at any full page.',
    'Start reading it to yourself.',
    'Hold up one finger for each word you cannot read.',
    'Count your fingers when you reach the end of the page.',
    'That number tells you whether the book is right for you today.',
    'Also ask: do you actually want to know what happens?',
  ],

  worked: [
    {
      level: 1,
      ask: 'You read a page and could not read eight words. Is the book right '
        + 'for you?',
      steps: [
        'Eight is more than five.',
      ],
      answer: 'No, it is too hard for now. Try it again next term.',
    },
    {
      level: 2,
      ask: 'You read a page with no hard words at all and finished it fast. '
        + 'Should you take it?',
      steps: [
        'You can read it easily, so it will not stretch you.',
        'But ask one more thing. Do you enjoy it?',
      ],
      answer: 'Probably look for something longer. '
        + 'Unless you love it, in which case reading it is still practice.',
    },
    {
      level: 3,
      ask: 'A friend says a book is babyish, but you can only just read it. '
        + 'What should you do?',
      steps: [
        'Your friend is not the one reading it.',
        'The test is about you and this page.',
        'If it is at your level, it is the right book for you.',
      ],
      answer: 'Take it. '
        + 'The right book is the one you can read, not the one that impresses '
        + 'somebody else.',
    },
  ],

  traps: [
    {
      mistake: 'Choosing a book because it is thick.',
      why: 'A thick book you cannot read teaches you nothing. '
        + 'Test a page first.',
    },
    {
      mistake: 'Thinking a hard book means you are a bad reader.',
      why: 'It means the book was wrong for today. '
        + 'The same book may be easy next year.',
    },
    {
      mistake: 'Only testing the first page.',
      why: 'The first page is often the easiest. '
        + 'Open one in the middle.',
    },
  ],

  extension:
    'Keep a list of the books you have finished. '
    + 'After a term, look back at the first one. '
    + 'It will feel easy now. '
    + 'That is how you can see your own reading growing.',

  figure: {
    alt: 'A drawing of a hand with its four fingers and thumb numbered one '
      + 'to five, under a note that you hold up one finger for each word '
      + 'on the page you cannot read. Below it a scale in four parts: no '
      + 'hard words is too easy, one to three is just right, four is '
      + 'nearly too hard, and five or more is too hard. Underneath, a note '
      + 'that too hard today does not mean you are a bad reader, it means '
      + 'this book is wrong for today.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">The five finger test</text>'
      + '<rect x="252" y="100" width="124" height="46" rx="10"/>'
      + '<rect x="258" y="44" width="22" height="58" rx="10"/>'
      + '<text x="269" y="80" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">1</text>'
      + '<rect x="288" y="44" width="22" height="58" rx="10"/>'
      + '<text x="299" y="80" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">2</text>'
      + '<rect x="318" y="44" width="22" height="58" rx="10"/>'
      + '<text x="329" y="80" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">3</text>'
      + '<rect x="348" y="44" width="22" height="58" rx="10"/>'
      + '<text x="359" y="80" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">4</text>'
      + '<rect x="380" y="108" width="52" height="22" rx="10"/>'
      + '<text x="406" y="124" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">5</text>'
      + '<text x="320" y="178" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">One finger for each word you cannot read</text>'
      + '<rect x="40" y="206" width="100" height="48"/>'
      + '<text x="90" y="237" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">0</text>'
      + '<rect x="140" y="206" width="190" height="48" stroke="#0f8a4d"/>'
      + '<text x="235" y="237" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">1 to 3</text>'
      + '<rect x="330" y="206" width="100" height="48"/>'
      + '<text x="380" y="237" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">4</text>'
      + '<rect x="430" y="206" width="170" height="48" stroke="#c8433a"/>'
      + '<text x="515" y="237" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">5 or more</text>'
      + '<text x="90" y="280" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">too easy</text>'
      + '<text x="235" y="280" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">just right</text>'
      + '<text x="380" y="280" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">nearly</text>'
      + '<text x="515" y="280" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">too hard</text>'
      + '<text x="320" y="330" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Too hard today does not mean you read badly.</text>'
      + '<text x="320" y="358" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">It means this book is wrong for today.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'What the number of hard words on a page tells you',
    columns: ['Hard words on one page', 'What it means', 'What to do'],
    rows: [
      ['None at all', 'Too easy for you', 'Look for a longer book'],
      ['One to three', 'About right', 'Take it'],
      ['Four', 'Getting hard', 'Take it if you want the story'],
      ['Five or more', 'Too hard for now', 'Put it back, try next term'],
    ],
    note: 'The test works on any book, in any language, at any age.',
  }],
  questions: [
    {
      id: 'book-1',
      ask: 'How many words you cannot read means a page is too hard?',
      kind: 'numeric',
      answer: '5',
      accept: ['five'],
      teach: 'Five on one page. '
        + 'Then you are working on the words and not on the story.',
      level: 1,
    },
    {
      id: 'book-2',
      ask: 'A book stops you on every line. What does that tell you?',
      kind: 'choice',
      options: [
        'You are a bad reader',
        'The book is too hard for you today',
        'You should keep going anyway',
      ],
      answer: 'The book is too hard for you today',
      teach: 'It says nothing about you. '
        + 'Pick one at your level and come back to this one later.',
      level: 2,
    },
    {
      id: 'book-3',
      ask: 'Which page should you test?',
      kind: 'choice',
      options: ['The first page', 'A page from the middle', 'The last page'],
      answer: 'A page from the middle',
      teach: 'The first page is often made easy on purpose. '
        + 'The middle shows you what the book is really like.',
      level: 2,
    },
  ],
})
