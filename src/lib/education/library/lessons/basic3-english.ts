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

  idea:
    'To describe something is to say what it is like. '
    + 'You say enough that somebody else could pick it out. '
    + 'Not just "a bag". A red bag with a broken strap.',

  mechanism:
    'Here is the test for a good description. '
    + 'Could a stranger find the thing using only your words? '
    + 'If ten bags are on the table, "a bag" helps nobody. '
    + 'So pick the things that are true of yours and not of the others. '
    + 'Those are the useful words. The rest is filling.',

  recap:
    'You speak in full sentences. '
    + 'You will need that here, because one word is never a description.',

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
      why: '"A nice bag" tells nobody which bag. '
        + 'Nice is in your head. Red is on the bag.',
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

  idea:
    'Reading aloud well is not reading fast. '
    + 'It is reading so that somebody listening understands you. '
    + 'You keep a steady pace. '
    + 'You stop where the marks tell you to stop.',

  mechanism:
    'The marks on the page are there for your voice. '
    + 'A full stop means drop your voice and pause. '
    + 'A comma means a small pause, no drop. '
    + 'A question mark means lift your voice at the end. '
    + 'Read a page with no pauses and listen to it. '
    + 'The words all run together and the meaning is lost. '
    + 'That is what the marks are for.',

  recap:
    'You can blend sounds into words. '
    + 'Now you join words into a line that sounds like talking.',

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

  idea:
    'When you answer a question about a passage, the answer is in the passage. '
    + 'You do not guess it. You do not use what you already know. '
    + 'You find the line it came from and point at it.',

  mechanism:
    'There is a reason for this rule. '
    + 'Two children can read the same passage and answer differently. '
    + 'One guessed and one looked. '
    + 'Only the one who looked can show where the answer came from. '
    + 'Pointing at the line is how you prove you are right. '
    + 'And it is how you catch yourself when you are wrong.',

  recap:
    'You can read a short passage on your own. '
    + 'Now you read it to find one thing in it.',

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
      ask: 'A question asks what Ama ate. You know she likes rice. '
        + 'The passage does not say what she ate. What do you write?',
      steps: [
        'You know she likes rice. But that is in your head.',
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
      mistake: 'Answering from what you already know.',
      why: 'The question is about this passage. '
        + 'What you know from home is not the answer here.',
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
    + 'This is about how a naming word changes when there is more than one.',

  method: [
    'Most words: add s. One cat, two cats.',
    'Word ends in s, x, ch or sh: add es. One box, two boxes.',
    'Word ends in a consonant then y: change the y to i and add es. '
      + 'One baby, two babies.',
    'Some words change shape: one foot, two feet. One child, two children.',
    'A few do not change at all: one sheep, two sheep.',
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
    'You can sound out a word you do not know. '
    + 'This is about how many of those a page should have.',

  method: [
    'Open the book at any full page.',
    'Start reading it to yourself.',
    'Hold up one finger for each word you cannot read.',
    'Got to five fingers before the end of the page? Too hard for now.',
    'No fingers at all? It may be too easy, so look for a longer one.',
    'One to three fingers is about right.',
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
