/**
 * Stored lessons for Basic 4 English.
 *
 * Written at about grade 4, with a `brief` form on every topic.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── the main idea ────────────────────────────────────────────────────────── */

teach({
  topicId: 'main-idea',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The main idea is what the whole passage is about, '
      + 'not one thing that happened in it. '
      + 'It must cover every paragraph, not just the first.',
    method: [
      'Read the whole passage.',
      'Say what each paragraph is about, in one word.',
      'Find the one idea that all of them share.',
    ],
  },

  idea:
    'The main idea is what a passage is mostly about. '
    + 'It is not the first sentence, and it is not the most exciting event. '
    + 'It is the thing that holds the whole passage together.',

  mechanism:
    'Here is the test that works. '
    + 'A real main idea covers every paragraph. '
    + 'If your answer only fits the first half, it is a detail, not the main '
    + 'idea. '
    + 'This catches the commonest mistake, which is grabbing the most '
    + 'memorable moment. '
    + 'A passage about keeping a market clean might include a dramatic flood. '
    + 'The flood sticks in your head, and the passage is still about '
    + 'keeping the market clean.',

  recap:
    'You can find an answer in a passage and point at the line. '
    + 'This is harder, because the main idea is often not written in any '
    + 'single line.',

  method: [
    'Read the whole passage, start to finish.',
    'Go back and say what each paragraph is about in one or two words.',
    'Look at your list. What do they all have in common?',
    'Write that as one sentence.',
    'Test it: does your sentence cover the last paragraph too?',
    'If not, it is a detail. Try again.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A passage has three paragraphs: how mosquitoes breed, '
        + 'why gutters matter, and what a family can do. '
        + 'What is the main idea?',
      steps: [
        'Paragraph one: mosquitoes. Two: gutters. Three: what to do.',
        'What do all three share? Stopping mosquitoes near the home.',
        'Does it cover all three? Yes.',
      ],
      answer: 'How to stop mosquitoes breeding around the house.',
    },
    {
      level: 4,
      ask: 'In that passage somebody got malaria and went to hospital. '
        + 'Is that the main idea?',
      steps: [
        'It is the most dramatic part, so it stands out.',
        'But it appears in one paragraph only.',
        'It does not cover the gutters or what a family can do.',
      ],
      answer: 'No. It is a detail. '
        + 'A main idea has to cover the whole passage.',
    },
    {
      level: 4,
      ask: 'Why is the title not always the main idea?',
      steps: [
        'A title is often chosen to catch attention.',
        'It may name only one striking part.',
        'The main idea is what the writing actually covers.',
      ],
      answer: 'Because a title can be chosen to interest you '
        + 'rather than to sum the passage up.',
    },
  ],

  traps: [
    {
      mistake: 'Picking the most exciting event.',
      why: 'The most memorable thing is usually a detail. '
        + 'Check whether it covers every paragraph.',
    },
    {
      mistake: 'Copying the first sentence.',
      why: 'Sometimes it is the main idea and often it is not. '
        + 'Test it against the last paragraph.',
    },
    {
      mistake: 'Writing an answer so broad it says nothing.',
      why: '"It is about health" fits a hundred passages. '
        + 'Say what this one is about.',
    },
  ],

  extension:
    'Every paragraph has a main idea of its own, usually in one sentence. '
    + 'Find those first and the main idea of the whole passage is much '
    + 'easier to see, '
    + 'because you are then comparing six short things instead of reading '
    + 'it all again.',

  questions: [
    {
      id: 'mi-1',
      ask: 'What is the test for a main idea?',
      kind: 'choice',
      options: [
        'It is the first sentence',
        'It covers every paragraph',
        'It is the most interesting part',
      ],
      answer: 'It covers every paragraph',
      teach: 'If your answer only fits part of the passage, it is a detail.',
      level: 3,
    },
    {
      id: 'mi-2',
      ask: 'A dramatic event appears in one paragraph of five. Is it the '
        + 'main idea?',
      kind: 'choice',
      options: ['Yes', 'No, it is a detail'],
      answer: 'No, it is a detail',
      teach: 'It stands out in your memory, '
        + 'and it does not cover the other four paragraphs.',
      level: 4,
    },
    {
      id: 'mi-3',
      ask: 'What is wrong with answering "it is about health"?',
      kind: 'choice',
      options: [
        'It is too broad to say anything',
        'It is too short',
        'Nothing is wrong with it',
      ],
      answer: 'It is too broad to say anything',
      teach: 'An answer that fits a hundred passages has not told anybody '
        + 'what this one said.',
      level: 4,
    },
  ],
})

/* ── writing a paragraph ──────────────────────────────────────────────────── */

teach({
  topicId: 'paragraph',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A paragraph is a group of sentences about one idea. '
      + 'The first sentence says what it is about. '
      + 'The rest add to that one idea and nothing else.',
    method: [
      'Decide your one idea.',
      'Write a first sentence that states it.',
      'Add three or four sentences that belong to it.',
    ],
  },

  idea:
    'A paragraph is a group of sentences about one idea. '
    + 'The first sentence usually says what the idea is. '
    + 'The sentences after it add to that idea: a reason, an example, '
    + 'a detail. '
    + 'When you move to a new idea, you start a new paragraph.',

  mechanism:
    'The rule of one idea per paragraph is not a style choice. '
    + 'It is a service to the reader. '
    + 'A reader uses the blank line at the start of a paragraph '
    + 'to know a new thought has begun. '
    + 'Break that and they have to work out where your thinking turned, '
    + 'which is work you should have done for them. '
    + 'It helps you too: if you cannot say your paragraph’s idea in one '
    + 'sentence, it has more than one idea in it and should be split.',

  recap:
    'You can write a sentence that starts with a capital and ends with a '
    + 'full stop. '
    + 'A paragraph is several of those, all pulling the same way.',

  method: [
    'Decide the one idea this paragraph is about.',
    'Write a first sentence that says it plainly.',
    'Add three or four sentences that support it.',
    'Each one should be a reason, an example or a detail.',
    'Read it back. Does every sentence belong to that one idea?',
    'Anything that does not belong starts the next paragraph.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Write a first sentence for a paragraph about why you like your '
        + 'school.',
      steps: [
        'Say the idea plainly, not cleverly.',
      ],
      answer: 'Something like: "I like my school for three reasons."',
    },
    {
      level: 4,
      ask: 'Your paragraph about the market also has a sentence about your '
        + 'brother’s football. What should you do?',
      steps: [
        'Ask whether it belongs to the market idea.',
        'It does not.',
      ],
      answer: 'Take it out, or start a new paragraph for it.',
    },
    {
      level: 4,
      ask: 'How can you tell your paragraph has two ideas in it?',
      steps: [
        'Try to say what it is about in one sentence.',
        'If you need the word "and" to join two different things, '
          + 'there are two ideas.',
      ],
      answer: 'If one sentence cannot describe it without joining two '
        + 'unrelated things, split it into two paragraphs.',
    },
  ],

  traps: [
    {
      mistake: 'Writing one long paragraph for a whole page.',
      why: 'The reader has nothing to tell them where a new thought begins. '
        + 'Start a new paragraph at each new idea.',
    },
    {
      mistake: 'Starting a new paragraph at every sentence.',
      why: 'Then the breaks mean nothing. '
        + 'A paragraph is usually three to six sentences.',
    },
    {
      mistake: 'Letting one stray sentence sit in the wrong paragraph.',
      why: 'It makes the reader work out why it is there. '
        + 'Move it to where it belongs.',
    },
  ],

  extension:
    'In a longer piece the first sentence of each paragraph, read on its own, '
    + 'should almost tell the whole story. '
    + 'Try it on a page from a textbook. '
    + 'If it works, the writer planned their paragraphs.',

  questions: [
    {
      id: 'pg-1',
      ask: 'How many ideas should one paragraph have?',
      kind: 'numeric',
      answer: '1',
      accept: ['one'],
      teach: 'One. A new idea means a new paragraph, '
        + 'and that is how a reader knows your thinking has turned.',
      level: 3,
    },
    {
      id: 'pg-2',
      ask: 'What does the first sentence of a paragraph usually do?',
      kind: 'choice',
      options: [
        'Says what the paragraph is about',
        'Gives the most interesting detail',
        'Asks a question',
      ],
      answer: 'Says what the paragraph is about',
      teach: 'It tells the reader what is coming, '
        + 'so the sentences after it make sense as they arrive.',
      level: 3,
    },
    {
      id: 'pg-3',
      ask: 'A sentence in your paragraph does not fit the idea. What do you do?',
      kind: 'choice',
      options: [
        'Take it out or start a new paragraph',
        'Leave it, it adds variety',
        'Move it to the end',
      ],
      answer: 'Take it out or start a new paragraph',
      teach: 'A stray sentence makes the reader work out why it is there. '
        + 'Put it where it belongs.',
      level: 4,
    },
  ],
})

/* ── tenses ───────────────────────────────────────────────────────────────── */

teach({
  topicId: 'tenses-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The verb changes to say when something happened. '
      + 'I walk today. I walked yesterday. I will walk tomorrow.',
    method: [
      'Find the verb.',
      'Past: usually add ed, but some words change shape.',
      'Future: put will in front.',
    ],
  },

  idea:
    'The verb tells you when. '
    + 'I walk to school. That is now, the present. '
    + 'I walked to school. That is finished, the past. '
    + 'I will walk to school. That has not happened yet, the future.',

  mechanism:
    'Most verbs make the past by adding ed, '
    + 'and the ones that do not are the ones you use most: '
    + 'go becomes went, eat becomes ate, see becomes saw. '
    + 'It is the same reason feet is not foots. '
    + 'The commonest words kept their old shapes, '
    + 'because words used every day are said too often to be tidied up. '
    + 'So the irregular ones are the ones you will hear constantly, '
    + 'and you will learn them by ear before you learn them by rule.',

  recap:
    'You can find the verb in a sentence. '
    + 'It is the doing word, and it is the word that changes here.',

  method: [
    'Find the verb.',
    'For the present, use it as it is: I walk, she walks.',
    'For the past, add ed: walked, played, asked.',
    'If ed sounds wrong, the verb is irregular: went, ate, saw, came.',
    'For the future, put will in front: will walk.',
    'Keep the tense the same all through a piece unless time really changes.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Put "I play football" into the past.',
      steps: [
        'The verb is play.',
        'Play is regular, so add ed.',
      ],
      answer: 'I played football.',
    },
    {
      level: 4,
      ask: 'Put "She goes to market" into the past.',
      steps: [
        'The verb is goes.',
        'Try goed. It sounds wrong, so it is irregular.',
      ],
      answer: 'She went to market.',
    },
    {
      level: 4,
      ask: 'What is wrong with: "Yesterday I go to school and I played"?',
      steps: [
        'Yesterday means the past.',
        '"Played" is past. "Go" is present.',
        'The two halves are in different times.',
      ],
      answer: 'The tense changes halfway. '
        + 'It should be "Yesterday I went to school and I played."',
    },
  ],

  traps: [
    {
      mistake: 'Adding ed to irregular verbs.',
      why: 'Goed, eated and seed are all wrong. '
        + 'Say it out loud and your ear will catch it.',
    },
    {
      mistake: 'Changing tense halfway through a piece.',
      why: 'The reader loses track of when it happened. '
        + 'Pick a time and stay in it.',
    },
    {
      mistake: 'Thinking "will" is part of the verb.',
      why: 'Will is a separate word placed in front. '
        + 'The verb itself does not change for the future.',
    },
  ],

  extension:
    'There are more tenses than three. '
    + '"I have eaten" and "I was eating" both describe the past '
    + 'in different ways: one finished, one still going on at the time. '
    + 'English uses those constantly, and you already say them correctly '
    + 'without being taught.',

  questions: [
    {
      id: 'tn-1',
      ask: 'What is the past of "walk"?',
      kind: 'choice',
      options: ['Walked', 'Walking', 'Will walk'],
      answer: 'Walked',
      teach: 'Walk is regular, so it adds ed.',
      level: 3,
    },
    {
      id: 'tn-2',
      ask: 'What is the past of "go"?',
      kind: 'choice',
      options: ['Goed', 'Went', 'Gone to'],
      answer: 'Went',
      teach: 'Go is irregular and changes shape completely. '
        + 'Goed sounds wrong, and your ear is right.',
      level: 4,
    },
    {
      id: 'tn-3',
      ask: 'What is wrong with "Yesterday I go to the farm"?',
      kind: 'choice',
      options: [
        'Yesterday is past but "go" is present',
        'Nothing is wrong',
        'Yesterday should come last',
      ],
      answer: 'Yesterday is past but "go" is present',
      teach: 'The time word and the verb must agree. '
        + 'It should be "went".',
      level: 4,
    },
  ],
})

/* ── punctuation ──────────────────────────────────────────────────────────── */

teach({
  topicId: 'punctuation-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Punctuation tells the reader where to stop and how to read. '
      + 'Capitals start sentences and names. Full stops end them. '
      + 'Commas separate. Apostrophes show owning or missing letters.',
    method: [
      'Capital at the start of a sentence and on every name.',
      'Full stop at the end, or a question mark if it asks.',
      'Read it aloud: pause where you breathe, and put a comma there.',
    ],
  },

  idea:
    'Punctuation marks are instructions for the reader. '
    + 'A capital says a sentence or a name begins here. '
    + 'A full stop says the thought has ended. '
    + 'A question mark says this is asking. '
    + 'A comma says pause briefly. '
    + 'An apostrophe shows owning, or a missing letter.',

  mechanism:
    'Punctuation is not decoration added at the end. '
    + 'It carries meaning, and leaving it out can change what a sentence '
    + 'says. '
    + '"Let us eat, Kofi" is an invitation. '
    + '"Let us eat Kofi" is not. '
    + 'One comma is the whole difference. '
    + 'That is why these marks are worth getting right: '
    + 'they are part of the words, not a tidy up afterwards.',

  recap:
    'You can write a sentence with a capital and a full stop. '
    + 'This adds the marks that go inside a sentence.',

  method: [
    'Capital letter at the start of every sentence.',
    'Capital on every name: of a person, a town, a day, a month.',
    'Full stop at the end, unless it asks, which takes a question mark.',
    'Read it aloud. Where you pause for breath, consider a comma.',
    'Commas also separate items in a list.',
    'Apostrophe for owning: Ama’s book.',
    'Apostrophe for a missing letter: do not becomes don’t.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Punctuate: ama went to accra on monday',
      steps: [
        'Capital at the start, and Ama is a name.',
        'Accra is a place and Monday is a day, so both take capitals.',
        'Full stop at the end.',
      ],
      answer: 'Ama went to Accra on Monday.',
    },
    {
      level: 4,
      ask: 'Why does "Let us eat, Kofi" need its comma?',
      steps: [
        'With the comma you are speaking to Kofi.',
        'Without it, Kofi becomes the thing being eaten.',
      ],
      answer: 'Because the comma shows you are addressing Kofi '
        + 'rather than describing a meal.',
    },
    {
      level: 4,
      ask: 'Where does the apostrophe go in: the book belonging to Ama?',
      steps: [
        'Ownership takes an apostrophe and then an s.',
        'It attaches to the owner, which is Ama.',
      ],
      answer: 'Ama’s book.',
    },
  ],

  traps: [
    {
      mistake: 'Using an apostrophe to make a plural.',
      why: 'Mango’s means belonging to the mango. '
        + 'Two mangoes needs no apostrophe at all.',
    },
    {
      mistake: 'Joining sentences with a comma.',
      why: '"I went home, I ate rice" needs a full stop, not a comma. '
        + 'Two whole thoughts need two sentences.',
    },
    {
      mistake: 'Forgetting capitals on names of days and months.',
      why: 'Monday and January are names. '
        + 'They take capitals wherever they appear.',
    },
  ],

  extension:
    'Older writing used far more commas than we do now, '
    + 'and legal documents once used almost none, '
    + 'which caused expensive arguments about what a sentence meant. '
    + 'Punctuation is how a writer removes doubt.',

  questions: [
    {
      id: 'pn-1',
      ask: 'Which words in "ama went to accra on monday" need capitals?',
      kind: 'numeric',
      answer: '3',
      accept: ['three'],
      teach: 'Ama, Accra and Monday. '
        + 'A person, a place and a day are all names.',
      level: 3,
    },
    {
      id: 'pn-2',
      ask: 'Which is correct?',
      kind: 'choice',
      options: ['Two mango’s', 'Two mangoes', 'Two mangoe’s'],
      answer: 'Two mangoes',
      teach: 'An apostrophe shows owning, not more than one. '
        + 'A plural just takes es here.',
      level: 4,
    },
    {
      id: 'pn-3',
      ask: 'What is wrong with "I went home, I ate rice"?',
      kind: 'choice',
      options: [
        'Two whole sentences joined by a comma',
        'Nothing',
        'It needs a question mark',
      ],
      answer: 'Two whole sentences joined by a comma',
      teach: 'Each is a complete thought, so each needs its own full stop.',
      level: 4,
    },
  ],
})

/* ── spelling patterns ────────────────────────────────────────────────────── */

teach({
  topicId: 'spelling-patterns',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Most words follow patterns, so learning a pattern spells many words. '
      + 'For the rest, use a dictionary rather than guessing.',
    method: [
      'Say the word slowly and listen for the parts.',
      'Ask whether you know a word that sounds like the ending.',
      'Not sure? Look it up, and look at the whole entry.',
    ],
  },

  idea:
    'English spelling looks random and mostly is not. '
    + 'Words that sound alike are often spelled alike: '
    + 'light, night, right, sight. '
    + 'Learn one pattern and you can spell a family of words.',

  mechanism:
    'Patterns are worth more than single words, '
    + 'because a pattern is a rule you can apply to a word you have never '
    + 'written. '
    + 'The ones that break the pattern tend to be very common words, '
    + 'and that is lucky: you will meet them so often that you learn them by '
    + 'sight anyway. '
    + 'So the effort goes on patterns, and the exceptions look after '
    + 'themselves.',

  recap:
    'You can sound out a word and you know that one letter can make more '
    + 'than one sound. '
    + 'Patterns are how you handle the cases where sounding out is not '
    + 'enough.',

  method: [
    'Say the word slowly and break it into parts.',
    'Ask: do I know another word that ends the same way?',
    'If yes, try the same spelling.',
    'Write it, then look at it. Does it look right?',
    'Still unsure? Use a dictionary.',
    'In the dictionary, read the whole entry, not just the spelling.',
  ],

  worked: [
    {
      level: 3,
      ask: 'You can spell night. How does that help with fight?',
      steps: [
        'Both end with the same sound.',
        'Night uses ight for it.',
      ],
      answer: 'Fight uses the same ight pattern.',
    },
    {
      level: 4,
      ask: 'How do you find a word in a dictionary if you are not sure how '
        + 'it starts?',
      steps: [
        'Say the word and try the most likely first letter.',
        'If it is not there, try another letter that makes the same sound.',
        'A c and a k can both start a hard sound.',
      ],
      answer: 'Try the other letters that make the same sound. '
        + 'Knowing that one sound has several spellings is what finds it.',
    },
    {
      level: 4,
      ask: 'Why are the hardest spellings usually common words?',
      steps: [
        'Common words are old and said constantly.',
        'Words said constantly keep their old spellings.',
      ],
      answer: 'Because very common words resist being tidied up, '
        + 'which is also why you meet them often enough to learn them.',
    },
  ],

  traps: [
    {
      mistake: 'Guessing and moving on.',
      why: 'A guess you never check becomes a habit. '
        + 'Look it up once and you fix it for good.',
    },
    {
      mistake: 'Learning words one at a time.',
      why: 'Learning the ight pattern gives you light, night, right, sight '
        + 'and fight at once.',
    },
    {
      mistake: 'Trusting that it looks right without checking.',
      why: 'Looking right often means looking familiar, '
        + 'and a mistake you have made before looks familiar too.',
    },
  ],

  extension:
    'English borrowed words from many languages and kept their spellings, '
    + 'which is a large part of why it looks so irregular. '
    + 'Words that came from French, Latin and Greek often follow their own '
    + 'patterns, so the oddness has reasons behind it.',

  questions: [
    {
      id: 'sp-1',
      ask: 'You can spell night. Which pattern does fight use?',
      kind: 'choice',
      options: ['ight', 'ite', 'yte'],
      answer: 'ight',
      teach: 'Night, light, right, sight and fight all share it. '
        + 'One pattern spells five words.',
      level: 3,
    },
    {
      id: 'sp-2',
      ask: 'What should you do when you are not sure of a spelling?',
      kind: 'choice',
      options: [
        'Guess and keep writing',
        'Look it up',
        'Avoid the word',
      ],
      answer: 'Look it up',
      teach: 'A guess you never check turns into a habit. '
        + 'One look fixes it permanently.',
      level: 3,
    },
    {
      id: 'sp-3',
      ask: 'Why is learning a pattern better than learning a word?',
      kind: 'choice',
      options: [
        'It spells words you have never written before',
        'It is quicker to say',
        'Patterns never have exceptions',
      ],
      answer: 'It spells words you have never written before',
      teach: 'A pattern is a rule you can apply to a new word. '
        + 'A single word only ever spells itself.',
      level: 4,
    },
  ],
})
