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

  why:
    'A teacher reads a story about a boy '
    + 'who misses the tro-tro, runs, falls, gets up, '
    + 'and reaches school just as the bell stops. '
    + 'She asks the class what the story was about. '
    + 'One boy says "he fell down". '
    + 'That did happen, and the story was not about that. '
    + 'Another says "the bell". Also in the story. '
    + 'Nobody can find the sentence that says what it is about, '
    + 'because there is no such sentence. '
    + 'So how do you say what a passage is about '
    + 'when the passage never says it?',

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
    'When a question asks something a passage says straight out, '
    + 'you can go and put your finger on it. '
    + '"Kofi has three goats." '
    + 'Ask how many goats Kofi has '
    + 'and the answer is in that line, in those words. '
    + 'That is the easiest kind of question '
    + 'and it is worth getting fast at. '
    + 'This lesson is harder, '
    + 'because the main idea is usually not written in any one line, '
    + 'so there is nothing to point at.',

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

  figure: {
    alt: 'Three boxes in a row standing for the three paragraphs of '
      + 'one passage, labelled mosquitoes, gutters and what to do. '
      + 'Three arrows run down from them into a single box holding '
      + 'the one idea all three share, stopping mosquitoes near the '
      + 'home. Underneath, a note says that a flood in paragraph 2 '
      + 'is the part you remember, but it covers one paragraph, so '
      + 'it is a detail.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">One passage, three paragraphs</text>'
      + '<rect x="16" y="44" width="184" height="84"/>'
      + '<text x="108" y="78" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Paragraph 1</text>'
      + '<text x="108" y="104" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">mosquitoes</text>'
      + '<rect x="228" y="44" width="184" height="84"/>'
      + '<text x="320" y="78" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Paragraph 2</text>'
      + '<text x="320" y="104" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">gutters</text>'
      + '<rect x="440" y="44" width="184" height="84"/>'
      + '<text x="532" y="78" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Paragraph 3</text>'
      + '<text x="532" y="104" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">what to do</text>'
      + '<line x1="108" y1="128" x2="240" y2="196"/>'
      + '<line x1="320" y1="128" x2="320" y2="196"/>'
      + '<line x1="532" y1="128" x2="400" y2="196"/>'
      + '<polygon points="240,206 233,193 247,193" fill="currentColor" stroke="none"/>'
      + '<polygon points="320,206 313,193 327,193" fill="currentColor" stroke="none"/>'
      + '<polygon points="400,206 393,193 407,193" fill="currentColor" stroke="none"/>'
      + '<rect x="90" y="212" width="460" height="74" stroke="#0f8a4d"/>'
      + '<text x="320" y="242" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the one idea all three share:</text>'
      + '<text x="320" y="270" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">stopping mosquitoes near the home</text>'
      + '<text x="320" y="330" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">A flood in paragraph 2 is the part you remember,</text>'
      + '<text x="320" y="356" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">but it covers one paragraph, so it is a detail.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Four answers to the same passage, tested against every '
      + 'paragraph',
    columns: [
      'An answer somebody gave',
      'Does it cover every paragraph?',
      'What it is',
    ],
    rows: [
      ['How mosquitoes breed', 'Paragraph 1 only', 'A detail'],
      ['Somebody got malaria', 'Paragraph 2 only', 'A detail'],
      [
        'It is about health',
        'Yes, and a hundred other passages too',
        'Too broad to be useful',
      ],
      [
        'How to stop mosquitoes breeding at home',
        'Yes, all three',
        'The main idea',
      ],
    ],
    note: 'An answer has to pass both ways: it must cover the last '
      + 'paragraph, and it must not fit every passage ever written.',
  }],
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
    {
      id: 'mi-4',
      ask: 'What is the main idea of a passage?',
      kind: 'choice',
      options: [
        'The first sentence',
        'What the whole passage is mostly about',
        'The most exciting event',
      ],
      answer: 'What the whole passage is mostly about',
      teach: 'The first sentence and the exciting event are often only details. '
        + 'The main idea is the thing that holds the whole passage together.',
      level: 2,
    },
    {
      id: 'mi-5',
      ask: 'What is the first step in finding the main idea?',
      kind: 'choice',
      options: [
        'Copy the first sentence',
        'Read only the title',
        'Read the whole passage, start to finish',
      ],
      answer: 'Read the whole passage, start to finish',
      teach: 'You cannot test an idea against every paragraph until you have '
        + 'read every paragraph. Then say what each one is about in a word or two.',
      level: 2,
    },
    {
      id: 'mi-6',
      ask: 'A passage has three paragraphs: how cocoa grows, how farmers dry '
        + 'the beans, and how the beans are sold. What is the main idea?',
      kind: 'choice',
      options: [
        'How cocoa grows',
        'It is about farming',
        'How cocoa goes from the farm to being sold',
        'Farmers dry the beans in the sun',
      ],
      answer: 'How cocoa goes from the farm to being sold',
      teach: 'Test each answer against all three paragraphs. "How cocoa grows" '
        + 'fits only the first. "It is about farming" fits a hundred passages. '
        + 'Only one covers all three and says what this passage is about.',
      level: 3,
    },
    {
      id: 'mi-7',
      ask: 'Is the title of a passage always its main idea?',
      kind: 'choice',
      options: [
        'Yes, always',
        'No, a title may be chosen just to catch your attention',
        'Only if the title is short',
      ],
      answer: 'No, a title may be chosen just to catch your attention',
      teach: 'A title can name one striking part to make you want to read. '
        + 'The main idea is what the writing actually covers, so test it.',
      level: 3,
    },
    {
      id: 'mi-8',
      ask: 'Before you look for the main idea, what should you write down for '
        + 'each paragraph?',
      kind: 'choice',
      options: [
        'What it is about, in one or two words',
        'Its longest sentence',
        'How many sentences it has',
      ],
      answer: 'What it is about, in one or two words',
      teach: 'A short label for each paragraph gives you a list. Then you look '
        + 'for the one thing every item on the list shares.',
      level: 3,
    },
    {
      id: 'mi-9',
      ask: 'A passage is about keeping the market clean. One paragraph tells '
        + 'of a big flood. What is the main idea?',
      kind: 'choice',
      options: ['A flood at the market', 'Keeping the market clean', 'It is about markets'],
      answer: 'Keeping the market clean',
      teach: 'The flood sticks in your head, but it is in one paragraph only, '
        + 'so it is a detail. "It is about markets" is too broad.',
      level: 4,
    },
    {
      id: 'mi-10',
      ask: 'A story tells how a boy misses the tro-tro, runs, falls, gets up '
        + 'and reaches school just as the bell stops. What is it mainly about?',
      kind: 'choice',
      options: [
        'He fell down',
        'The school bell',
        'A boy rushing to reach school on time',
        'It is about a boy',
      ],
      answer: 'A boy rushing to reach school on time',
      teach: 'The fall and the bell each happen once, so they are details. "It '
        + 'is about a boy" fits any story about a boy. The rush to school runs '
        + 'through the whole story.',
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

  why:
    'A boy writes half a page about his village. '
    + 'It is all one block of writing. '
    + 'Everything he says is true '
    + 'and the handwriting is good. '
    + 'His teacher reads it twice '
    + 'and still cannot say where he stopped talking about the market '
    + 'and started talking about the school. '
    + 'The words were right and the reader got lost anyway. '
    + 'What is it that tells a reader '
    + 'when one idea has ended and the next has begun?',

  notation:
    'A new paragraph is shown on the page in one of two ways. '
    + 'Either the first line is pushed in from the edge, '
    + 'which is called indenting, '
    + 'or a blank line is left above it. '
    + 'Pick one of the two '
    + 'and use it all the way through a piece of writing. '
    + 'The mark itself carries the meaning, '
    + 'so a reader who sees it knows a new idea has started '
    + 'before reading a single word. '
    + 'Starting every sentence on a new line, '
    + 'so that nothing at all is marked, '
    + 'is the commonest mistake.',

  idea:
    'A paragraph is a group of sentences about one idea. '
    + 'The first sentence usually says what the idea is, '
    + 'and every sentence after it adds to that same idea. '
    + 'When you move to a new idea, you start a new paragraph.',

  mechanism:
    'The rule of one idea per paragraph is not a style choice. '
    + 'It is a service to the reader. '
    + 'A reader uses the blank line at the start of a paragraph '
    + 'to know a new thought has begun. '
    + 'Break that and they have to work out where your thinking turned, '
    + 'which is work the writer was meant to do for them. '
    + 'It helps you too: if you cannot say your paragraph’s idea in one '
    + 'sentence, it has more than one idea in it and should be split.',

  recap:
    'A sentence is a group of words that says one whole thing. '
    + 'It begins with a capital letter '
    + 'and it ends with a full stop. '
    + '"The goat ate my book." '
    + 'That is a sentence. '
    + 'It starts with a capital T, it ends with a stop, '
    + 'and you can tell what happened. '
    + '"The goat ate" leaves you waiting, '
    + 'so it is not finished. '
    + 'A paragraph is several of those whole sentences, '
    + 'all pulling the same way.',

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

  figure: {
    alt: 'Two blocks of writing with a gap between them. The first '
      + 'is headed Why I like my school and the second Why I like '
      + 'Saturdays, each with lines standing for its sentences. Two '
      + 'arrows point into the gap, which is labelled the blank '
      + 'line, and a note underneath says the gap is how the reader '
      + 'knows a new thought began.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Two ideas, so two paragraphs</text>'
      + '<rect x="60" y="48" width="520" height="118" stroke="#0f8a4d"/>'
      + '<text x="80" y="76" font-size="15" text-anchor="start" fill="#0f8a4d" stroke="none">Why I like my school</text>'
      + '<line x1="80" y1="96" x2="560" y2="96" stroke-width="2"/>'
      + '<line x1="80" y1="118" x2="560" y2="118" stroke-width="2"/>'
      + '<line x1="80" y1="140" x2="400" y2="140" stroke-width="2"/>'
      + '<text x="320" y="196" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">the blank line</text>'
      + '<line x1="200" y1="190" x2="248" y2="190" stroke="#0f8a4d"/>'
      + '<polygon points="248,190 235,184 235,196" fill="#0f8a4d" stroke="none"/>'
      + '<line x1="440" y1="190" x2="392" y2="190" stroke="#0f8a4d"/>'
      + '<polygon points="392,190 405,184 405,196" fill="#0f8a4d" stroke="none"/>'
      + '<rect x="60" y="214" width="520" height="118" stroke="#0f8a4d"/>'
      + '<text x="80" y="242" font-size="15" text-anchor="start" fill="#0f8a4d" stroke="none">Why I like Saturdays</text>'
      + '<line x1="80" y1="262" x2="560" y2="262" stroke-width="2"/>'
      + '<line x1="80" y1="284" x2="560" y2="284" stroke-width="2"/>'
      + '<line x1="80" y1="306" x2="340" y2="306" stroke-width="2"/>'
      + '<text x="320" y="370" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">The gap is how the reader knows a new thought began.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'One paragraph about liking school, and the job each sentence '
      + 'does in it',
    columns: [
      'The sentence',
      'Its job',
    ],
    rows: [
      ['I like my school for three reasons.', 'States the one idea'],
      ['The teachers explain a thing twice if you ask.', 'A reason'],
      ['Mr Mensah stayed behind to help me with fractions.', 'An example'],
      ['The classrooms stay cool in the afternoon.', 'A detail'],
      [
        'My brother plays football on Saturdays.',
        'Does not belong, so it starts the next paragraph',
      ],
    ],
    note: 'Every sentence but the last belongs to the one idea. The last '
      + 'one is about something else, however true it is.',
  }],
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
    {
      id: 'pg-4',
      ask: 'What is a paragraph?',
      kind: 'choice',
      options: [
        'One very long sentence',
        'A group of sentences about one idea',
        'A sentence on a new line',
      ],
      answer: 'A group of sentences about one idea',
      teach: 'A paragraph holds several whole sentences, and all of them are '
        + 'about the same one idea. A new idea starts a new paragraph.',
      level: 2,
    },
    {
      id: 'pg-5',
      ask: 'How do you show a new paragraph on the page?',
      kind: 'choice',
      options: [
        'Start every sentence on a new line',
        'Write the first word in capitals',
        'Push the first line in, or leave a blank line above it',
      ],
      answer: 'Push the first line in, or leave a blank line above it',
      teach: 'Indenting or a blank line tells the reader a new idea has '
        + 'started. Starting every sentence on a new line marks nothing.',
      level: 2,
    },
    {
      id: 'pg-6',
      ask: 'After the first sentence, what should each sentence in a paragraph '
        + 'be?',
      kind: 'choice',
      options: [
        'A reason, an example or a detail about the idea',
        'About a new idea',
        'A question for the reader',
      ],
      answer: 'A reason, an example or a detail about the idea',
      teach: 'The first sentence states the idea. Every sentence after it '
        + 'supports that same idea with a reason, an example or a detail.',
      level: 3,
    },
    {
      id: 'pg-7',
      ask: 'A paragraph is about the market in Ama’s town. Which sentence does '
        + 'not belong?',
      kind: 'choice',
      options: [
        'Traders sell tomatoes and pepper there.',
        'My brother plays football on Saturdays.',
        'The market is busiest on Saturday mornings.',
        'Women carry their goods on their heads.',
      ],
      answer: 'My brother plays football on Saturdays.',
      teach: 'Ask of each sentence: is it about the market? Football is a '
        + 'different idea, even though it also mentions Saturday. It goes in '
        + 'another paragraph.',
      level: 3,
    },
    {
      id: 'pg-8',
      ask: 'What goes wrong if you start a new paragraph at every sentence?',
      kind: 'choice',
      options: [
        'Nothing, it looks neat',
        'The breaks stop telling the reader anything',
        'The writing becomes too short',
      ],
      answer: 'The breaks stop telling the reader anything',
      teach: 'A break is meant to show that a new idea began. If every sentence '
        + 'has one, the reader cannot see where the idea really changes.',
      level: 3,
    },
    {
      id: 'pg-9',
      ask: 'In a paragraph about liking school, what job does this sentence '
        + 'do: "Mr Mensah stayed behind to help me with fractions."?',
      kind: 'choice',
      options: ['States the one idea', 'An example', 'Does not belong'],
      answer: 'An example',
      teach: 'It belongs to the idea, because it shows one thing that makes '
        + 'school good. It is one real case, so it is an example.',
      level: 4,
    },
    {
      id: 'pg-10',
      ask: 'You try to say what your paragraph is about and need "and" to join '
        + 'two different things. What does that tell you?',
      kind: 'choice',
      options: [
        'It has two ideas and should be split',
        'It is a very good paragraph',
        'It needs a longer first sentence',
      ],
      answer: 'It has two ideas and should be split',
      teach: 'One idea can be said in one sentence. Needing "and" to join two '
        + 'unlike things means two ideas, so make two paragraphs.',
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

  why:
    'You want to tell your aunt what happened at school. '
    + 'You say "I go to the head teacher office". '
    + 'She asks whether you are going now '
    + 'or whether you went already, '
    + 'and you have to stop and explain. '
    + 'The words were nearly right, '
    + 'and the one thing she needed was missing. '
    + 'One word in that sentence '
    + 'is supposed to say when it happened. '
    + 'Which word is it, and how does it change?',

  notation:
    'The past is usually shown '
    + 'by adding the letters -ed to the end of the verb, '
    + 'so walk becomes walked. '
    + 'The future is shown by putting the word will in front, '
    + 'so walk becomes will walk. '
    + 'Letters added to the end are called an ending, '
    + 'and words put in front are called helping words. '
    + 'Some verbs take no -ed at all: '
    + 'go becomes went and eat becomes ate, '
    + 'and those have to be learned one at a time. '
    + 'Writing goed instead of went is the commonest mistake.',

  idea:
    'The verb tells you when. '
    + 'I walk to school. That is now, the present. '
    + 'I walked to school. That is finished, the past. '
    + 'I will walk to school. That has not happened yet, the future.',

  mechanism:
    'Most verbs make the past by adding ed, '
    + 'and the ones that do not are the ones you use most, '
    + 'as the table below shows. '
    + 'It is the same reason feet is not foots. '
    + 'The commonest words kept their old shapes, '
    + 'because words used every day are said too often to be tidied up. '
    + 'So the irregular ones are the ones you will hear constantly, '
    + 'and you will learn them by ear before you learn them by rule.',

  recap:
    'In every sentence there is a word '
    + 'that says what is being done. '
    + '"The dog barks." '
    + 'The doing word is barks. '
    + '"Ama ate the rice." '
    + 'The doing word is ate. '
    + 'That word is called the verb, '
    + 'and you find it by asking '
    + 'what is happening in the sentence. '
    + 'The verb is the word this lesson changes, '
    + 'so finding it comes first.',

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
    + 'English uses those constantly, and most speakers say them correctly '
    + 'long before anyone names them.',

  figure: {
    alt: 'A line running left to right with an arrow at the end, '
      + 'marked at three points. The first is yesterday, I walked, '
      + 'the past. The middle is today, I walk, the present. The '
      + 'last is tomorrow, I will walk, the future. Underneath, a '
      + 'note says the verb is the word that changes to say when, '
      + 'that only the past adds ed, and that the future adds the '
      + 'word will.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<line x1="40" y1="200" x2="580" y2="200" stroke-width="4"/>'
      + '<polygon points="600,200 578,189 578,211" fill="currentColor" stroke="none"/>'
      + '<line x1="140" y1="186" x2="140" y2="214"/>'
      + '<line x1="320" y1="186" x2="320" y2="214"/>'
      + '<line x1="500" y1="186" x2="500" y2="214"/>'
      + '<text x="140" y="134" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">yesterday</text>'
      + '<text x="140" y="166" font-size="22" text-anchor="middle" fill="#0f8a4d" stroke="none">I walked</text>'
      + '<text x="140" y="248" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the past</text>'
      + '<text x="320" y="134" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">today</text>'
      + '<text x="320" y="166" font-size="22" text-anchor="middle" fill="#0f8a4d" stroke="none">I walk</text>'
      + '<text x="320" y="248" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the present</text>'
      + '<text x="500" y="134" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">tomorrow</text>'
      + '<text x="500" y="166" font-size="22" text-anchor="middle" fill="#0f8a4d" stroke="none">I will walk</text>'
      + '<text x="500" y="248" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the future</text>'
      + '<text x="320" y="322" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">The verb is the word that changes to say when.</text>'
      + '<text x="320" y="352" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Only the past adds ed. The future adds the word will.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Five verbs in the past, the present and the future',
    columns: [
      'The verb',
      'Yesterday',
      'Today',
      'Tomorrow',
    ],
    rows: [
      ['walk', 'walked', 'walk', 'will walk'],
      ['play', 'played', 'play', 'will play'],
      ['go', 'went', 'go', 'will go'],
      ['eat', 'ate', 'eat', 'will eat'],
      ['see', 'saw', 'see', 'will see'],
    ],
    note: 'The first two add ed. The last three change shape instead, and '
      + 'they are among the words people say most often, which is why the '
      + 'ear learns them first.',
  }],
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
    {
      id: 'tn-4',
      ask: 'What is the future of "walk"?',
      kind: 'choice',
      options: ['Walked', 'Will walk', 'Walking'],
      answer: 'Will walk',
      teach: 'For the future, put the helping word will in front of the verb. '
        + 'Walked is the past.',
      level: 2,
    },
    {
      id: 'tn-5',
      ask: 'Which word is the verb in "Ama ate the rice"?',
      kind: 'choice',
      options: ['Ama', 'rice', 'ate'],
      answer: 'ate',
      teach: 'Ask what is happening in the sentence. Eating is happening, so '
        + 'ate is the verb. Ama is who did it and rice is what was eaten.',
      level: 2,
    },
    {
      id: 'tn-6',
      ask: 'What is the past of "play"?',
      kind: 'choice',
      options: ['Played', 'Plays', 'Will play'],
      answer: 'Played',
      teach: 'Play is regular, so the past just adds ed: played.',
      level: 2,
    },
    {
      id: 'tn-7',
      ask: 'What is the past of "eat"?',
      kind: 'choice',
      options: ['Eated', 'Will eat', 'Ate'],
      answer: 'Ate',
      teach: 'Eat is irregular. Say "eated" aloud and it sounds wrong. The verb '
        + 'changes shape instead: ate.',
      level: 3,
    },
    {
      id: 'tn-8',
      ask: 'Which word in a sentence shows that something will happen later?',
      kind: 'choice',
      options: ['will', 'went', 'walked'],
      answer: 'will',
      teach: 'Will is a helping word put in front of the verb for the future. '
        + 'Went and walked are both past.',
      level: 3,
    },
    {
      id: 'tn-9',
      ask: 'Put "I see my aunt" into the future.',
      kind: 'choice',
      options: ['I saw my aunt.', 'I will see my aunt.', 'I seed my aunt.'],
      answer: 'I will see my aunt.',
      teach: 'For the future, keep the verb as it is and put will in front. '
        + 'I saw my aunt is the past, and seed is not a word for this.',
      level: 3,
    },
    {
      id: 'tn-10',
      ask: 'Which sentence is correct?',
      kind: 'choice',
      options: [
        'Tomorrow I went to Kumasi.',
        'Tomorrow I goed to Kumasi.',
        'Tomorrow I will go to Kumasi.',
      ],
      answer: 'Tomorrow I will go to Kumasi.',
      teach: 'Tomorrow is the future, so the verb needs will in front. Went is '
        + 'past, and goed is not a word.',
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

  why:
    'Write this down with no marks in it: '
    + 'let us eat grandma. '
    + 'Now write it this way: '
    + 'let us eat, Grandma. '
    + 'The first one invites the class '
    + 'to eat their grandmother. '
    + 'The second one calls her to the table. '
    + 'The words are the same words in the same order, '
    + 'and one small mark changed who was being eaten. '
    + 'What are those marks, '
    + 'and what does each one tell a reader to do?',

  notation:
    'Each mark has a name, '
    + 'and the names are worth saying out loud. '
    + 'A full stop is the dot at the end. '
    + 'A comma is the small tail that sits on the line. '
    + 'A question mark is the hook with a dot under it. '
    + 'An exclamation mark is the upright line '
    + 'with a dot under it. '
    + 'Speaking marks are the two little pairs '
    + 'that go round the exact words somebody said. '
    + 'A comma sits on the line and a full stop has no tail, '
    + 'and mixing those two up is the commonest mistake.',

  idea:
    'Punctuation marks are instructions for the reader. '
    + 'Each one tells them something different '
    + 'about how to read what you wrote.',

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
    'A sentence starts with a capital letter '
    + 'and ends with a full stop. '
    + '"My father drives a taxi." '
    + 'The capital M shows a reader where the sentence begins. '
    + 'The stop shows where it ends, '
    + 'so the reader knows when to take a breath '
    + 'and start again. '
    + 'Those two marks go on the outside of a sentence. '
    + 'This lesson is about the marks that go inside one.',

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

  figure: {
    alt: 'Two boxes side by side holding the same four words. The '
      + 'left box, drawn in green, reads Let us eat, Kofi, and is '
      + 'labelled as speaking to Kofi. The right box, drawn in red, '
      + 'reads Let us eat Kofi, and is labelled as making Kofi the '
      + 'meal. Underneath, a note says a punctuation mark is part '
      + 'of what the words say, so leaving one out can change the '
      + 'meaning.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="34" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">One comma is the whole difference.</text>'
      + '<rect x="24" y="60" width="276" height="112" stroke="#0f8a4d"/>'
      + '<text x="162" y="104" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">Let us eat, Kofi.</text>'
      + '<text x="162" y="144" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">You are speaking to Kofi.</text>'
      + '<text x="162" y="204" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">The comma marks the person</text>'
      + '<text x="162" y="228" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">you are talking to.</text>'
      + '<rect x="340" y="60" width="276" height="112" stroke="#c8433a"/>'
      + '<text x="478" y="104" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">Let us eat Kofi.</text>'
      + '<text x="478" y="144" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">Kofi is now the meal.</text>'
      + '<text x="478" y="204" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">With no comma the sentence</text>'
      + '<text x="478" y="228" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">says something else.</text>'
      + '<text x="320" y="300" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">A punctuation mark is not decoration.</text>'
      + '<text x="320" y="330" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">It is part of what the words say,</text>'
      + '<text x="320" y="360" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">so leaving one out can change the meaning.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'What each punctuation mark tells the reader',
    columns: [
      'Mark',
      'What it tells the reader',
      'Example',
    ],
    rows: [
      [
        'Capital letter',
        'A sentence begins here, or this is a name',
        'Ama went to Accra on Monday.',
      ],
      ['Full stop', 'The thought has ended', 'She came home late.'],
      ['Question mark', 'This one is asking', 'Where is my book?'],
      [
        'Comma',
        'Pause here, or separate the things in a list',
        'We bought rice, beans and fish.',
      ],
      [
        'Apostrophe',
        'Owning, or a letter left out',
        'Ama’s book. Do not becomes don’t.',
      ],
    ],
    note: 'Two mangoes needs no apostrophe. An apostrophe on a plural is '
      + 'the commonest mistake of all.',
  }],
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
    {
      id: 'pn-4',
      ask: 'Which sentence is punctuated correctly?',
      kind: 'choice',
      options: ['Where is my book.', 'where is my book?', 'Where is my book?'],
      answer: 'Where is my book?',
      teach: 'It asks something, so it ends with a question mark, not a full '
        + 'stop. And every sentence starts with a capital letter.',
      level: 2,
    },
    {
      id: 'pn-5',
      ask: 'Which mark goes at the end of a sentence that asks something?',
      kind: 'choice',
      options: ['A full stop', 'A comma', 'A question mark'],
      answer: 'A question mark',
      teach: 'A sentence that tells ends with a full stop. A sentence that asks '
        + 'ends with a question mark, the hook with a dot under it.',
      level: 2,
    },
    {
      id: 'pn-6',
      ask: 'Which sentence uses commas correctly in a list?',
      kind: 'choice',
      options: [
        'We bought, rice beans and fish.',
        'We bought rice, beans and fish.',
        'We bought rice beans, and, fish.',
      ],
      answer: 'We bought rice, beans and fish.',
      teach: 'A comma separates the things in a list. It goes between rice and '
        + 'beans. Before "and" the word itself does the separating.',
      level: 3,
    },
    {
      id: 'pn-7',
      ask: 'How do you write: the bag belonging to Kofi?',
      kind: 'choice',
      options: ['Kofis bag', 'Kofi’s bag', 'Kofis’ bag'],
      answer: 'Kofi’s bag',
      teach: 'Owning takes an apostrophe and then an s, joined to the owner. '
        + 'The owner is Kofi, so Kofi’s.',
      level: 3,
    },
    {
      id: 'pn-8',
      ask: 'What is the short way to write "do not"?',
      kind: 'choice',
      options: ['dont', 'do’nt', 'don’t'],
      answer: 'don’t',
      teach: 'The apostrophe goes where the letter was left out. The missing '
        + 'letter is the o of not, so it sits between n and t.',
      level: 3,
    },
    {
      id: 'pn-9',
      ask: 'In "let us eat, Kofi", what does the comma show?',
      kind: 'choice',
      options: [
        'That Kofi is the food',
        'That you are speaking to Kofi',
        'That this is a list',
      ],
      answer: 'That you are speaking to Kofi',
      teach: 'With the comma you are calling Kofi to eat. Take it out and Kofi '
        + 'becomes the meal. One mark changes the meaning.',
      level: 3,
    },
    {
      id: 'pn-10',
      ask: 'How many words in "we travelled to tamale in january" need a '
        + 'capital letter?',
      kind: 'numeric',
      answer: '3',
      accept: ['three'],
      teach: 'We starts the sentence. Tamale is a town and January is a month, '
        + 'and names take capitals. So We, Tamale and January.',
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

  why:
    'Everybody can say the word night. '
    + 'Sound it out, write what you hear, '
    + 'and you get nite. '
    + 'Every letter you wrote '
    + 'makes the sound you heard, '
    + 'and the word is still wrong. '
    + 'Now look at light, right, fight and might. '
    + 'All of them do the same odd thing in the same place. '
    + 'So the spelling is not random after all. '
    + 'What is the pattern, '
    + 'and how many words does one pattern get you?',

  notation:
    'A spelling pattern is written with a small dash in front, '
    + 'so the ending of night, light and right '
    + 'is written -ight. '
    + 'The dash means "something comes before this". '
    + 'A pattern at the start of a word '
    + 'has the dash after it instead, '
    + 'so un- means something follows. '
    + 'A pattern is said letter by letter, not as a word, '
    + 'so -tion is said "t i o n", '
    + 'even though it sounds like "shun".',

  idea:
    'English spelling looks random and mostly is not. '
    + 'Words that sound alike are often spelled alike. '
    + 'Learn one pattern and you can spell a whole family of words.',

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
    'Sounding out a word means '
    + 'saying its letters slowly '
    + 'and writing down what you hear. '
    + 'C-a-t makes cat, and that works. '
    + 'But a letter does not always make the same sound. '
    + 'The c in cat and the c in city '
    + 'are one letter saying two different things. '
    + 'The a in hat is not the a in hate. '
    + 'So sounding out gets you a long way '
    + 'and not all the way. '
    + 'This lesson is about the words '
    + 'where it stops working.',

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

  figure: {
    alt: 'The letters i g h t in a box at the top, labelled one '
      + 'pattern, with five lines spreading down from it to the '
      + 'words light, night, right, sight and fight. Underneath, a '
      + 'note says that learning the pattern once lets you spell a '
      + 'word in the family you have never written.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<rect x="240" y="40" width="160" height="70" stroke="#0f8a4d"/>'
      + '<text x="320" y="86" font-size="30" text-anchor="middle" fill="#0f8a4d" stroke="none">ight</text>'
      + '<text x="320" y="142" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">one pattern</text>'
      + '<line x1="320" y1="156" x2="80" y2="214"/>'
      + '<line x1="320" y1="156" x2="200" y2="214"/>'
      + '<line x1="320" y1="156" x2="320" y2="214"/>'
      + '<line x1="320" y1="156" x2="440" y2="214"/>'
      + '<line x1="320" y1="156" x2="560" y2="214"/>'
      + '<text x="80" y="248" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">light</text>'
      + '<text x="200" y="248" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">night</text>'
      + '<text x="320" y="248" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">right</text>'
      + '<text x="440" y="248" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">sight</text>'
      + '<text x="560" y="248" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">fight</text>'
      + '<text x="320" y="316" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Learn the pattern once and you can spell</text>'
      + '<text x="320" y="344" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">a word in the family you have never written.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Four spelling patterns and the words each one gives you',
    columns: [
      'Pattern',
      'The sound',
      'Words it spells',
    ],
    rows: [
      ['ight', 'as in night', 'light, right, sight, fight, might'],
      ['tch', 'as in catch', 'match, fetch, witch, stitch'],
      ['ould', 'as in could', 'would, should'],
      ['tion', 'as in nation', 'station, action, portion, question'],
    ],
    note: 'The words that break a pattern are nearly always common ones, '
      + 'so you meet them often enough to learn them by sight.',
  }],
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
    {
      id: 'sp-4',
      ask: 'Sounding out gives "nite". How is the word really spelled?',
      kind: 'choice',
      options: ['nite', 'nyte', 'night'],
      answer: 'night',
      teach: 'Every letter in nite makes the right sound, and it is still '
        + 'wrong. The sound is spelled with the ight pattern, as in light and right.',
      level: 2,
    },
    {
      id: 'sp-5',
      ask: 'Which pattern do could, would and should share?',
      kind: 'choice',
      options: ['ood', 'ould', 'ud'],
      answer: 'ould',
      teach: 'All three end in ould, even though you cannot hear the l. Learn '
        + 'it once and you spell all three.',
      level: 3,
    },
    {
      id: 'sp-6',
      ask: 'Which spelling is correct?',
      kind: 'choice',
      options: ['stashun', 'station', 'staytion'],
      answer: 'station',
      teach: 'The "shun" sound at the end is spelled tion, as in nation and '
        + 'action. Writing what you hear gives stashun.',
      level: 3,
    },
    {
      id: 'sp-7',
      ask: 'Which word rhymes with catch and uses the same tch pattern?',
      kind: 'choice',
      options: ['mach', 'match', 'matsh'],
      answer: 'match',
      teach: 'Catch, match, fetch and stitch all use tch for that sound at the '
        + 'end. One pattern spells the whole family.',
      level: 3,
    },
    {
      id: 'sp-8',
      ask: 'A pattern is written -ight. What does the dash in front mean?',
      kind: 'choice',
      options: [
        'Something comes after this',
        'Take these letters away',
        'Something comes before this',
      ],
      answer: 'Something comes before this',
      teach: 'A dash in front means letters come before the pattern, as in '
        + 'n-ight. A dash after, as in un-, means something follows.',
      level: 3,
    },
    {
      id: 'sp-9',
      ask: 'A word starts with a hard k sound, but you cannot find it under k '
        + 'in the dictionary. What should you try next?',
      kind: 'choice',
      options: ['Give up and guess', 'Look under c', 'Look under s'],
      answer: 'Look under c',
      teach: 'One sound can have several spellings. A c can make the same hard '
        + 'sound as a k, so try c next.',
      level: 4,
    },
    {
      id: 'sp-10',
      ask: 'Why is "it looks right" not enough to be sure of a spelling?',
      kind: 'choice',
      options: [
        'A mistake you have made before looks familiar too',
        'Words never look right',
        'Dictionaries are often wrong',
      ],
      answer: 'A mistake you have made before looks familiar too',
      teach: 'Looking right often only means looking familiar. If unsure, '
        + 'check it in a dictionary once and fix it for good.',
      level: 4,
    },
  ],
})
