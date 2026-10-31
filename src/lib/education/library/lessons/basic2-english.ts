/**
 * Stored lessons for Basic 2 English.
 *
 * Basic 1 taught the letter sounds and blending them. Basic 2 is where reading
 * stops being decoding every time: some words are known on sight, which frees
 * the attention for meaning, and writing starts having rules a child can check
 * their own work against.
 *
 * For most of these learners `readingLevel` still says early reader, so the
 * adult beside them reads these lines aloud. The words are theirs to read
 * only where the lesson is about reading them.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── words you know on sight ──────────────────────────────────────────────── */

teach({
  topicId: 'sight-words',
  source: 'WRITTEN',
  approved: true,

  idea:
    'Some words come up in nearly every sentence: the, and, is, to, you, was. '
    + 'You do not sound those out. You know them the moment you see them, the '
    + 'way you know your own name. Those are sight words.',

  mechanism:
    'This matters, and not because of speed. '
    + 'While you sound out "the", you are busy. '
    + 'You are not thinking about what the sentence means. '
    + 'Your mind can only be in one place at a time. '
    + 'Each word you know on sight gives that time back. '
    + 'These words come up the most. '
    + 'So they steal the most time. '
    + 'That is why they are worth learning whole.',

  recap:
    'Sounding out means saying each letter sound and running them together. '
    + 'C, a, t becomes cat. It works for most words, and you keep it for the '
    + 'words you do not know yet.',

  method: [
    'Look at the whole word, not at its letters.',
    'Say it. Then say it again while looking at it.',
    'Cover it, say it, uncover it and check.',
    'Find it in a real sentence and read that sentence straight through.',
    'If you stop to sound it out, that word is not a sight word yet. Practise '
      + 'it again tomorrow.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Read this: the cat is big.',
      steps: [
        '"the" you know on sight. Do not sound it.',
        '"cat" you can sound out: c, a, t.',
        '"is" and "big" you know on sight.',
      ],
      answer: 'The cat is big. Only one word out of four needed sounding out.',
    },
    {
      level: 2,
      ask: 'Why is "the" hard to sound out?',
      steps: [
        'Say the letter sounds: t, h, e.',
        'Run them together and you get something that is not the word.',
        'The letters do not behave the way they usually do.',
      ],
      answer: 'Because the letters do not make their usual sounds in it, so it '
        + 'has to be learned whole.',
    },
    {
      level: 3,
      ask: 'Read this and say which words you sounded out: My mother was at '
        + 'the shop.',
      steps: [
        '"My", "was", "at" and "the" are sight words.',
        '"mother" and "shop" can be sounded out.',
        'Four of the six needed no sounding out at all.',
      ],
      answer: 'Only mother and shop. The rest were known on sight.',
    },
  ],

  traps: [
    {
      mistake: 'Sounding out a sight word every time it appears.',
      why: 'It works, but it uses up the attention the sentence needs. These '
        + 'words are worth knowing whole because they come so often.',
    },
    {
      mistake: 'Guessing a word from its first letter.',
      why: 'Was, want and wait all start with w. Look at the whole word. '
        + 'Guessing from one letter is not reading on sight, it is gambling.',
    },
    {
      mistake: 'Learning sight words off a list and never in a sentence.',
      why: 'The point is reading sentences more easily. A word known only on a '
        + 'card often stalls in a line of text, so practise it in both.',
    },
  ],

  extension:
    'Learn more words by sight and something changes. '
    + 'Reading starts to feel like listening. '
    + 'You hear how the sentence sounds while your eyes move. '
    + 'You take in what it means at the same time. '
    + 'That is called fluency. '
    + 'It is built one word at a time.',

  questions: [
    {
      id: 'sw-1',
      ask: 'Which of these is a sight word you should know without sounding '
        + 'it out?',
      kind: 'choice',
      options: ['elephant', 'the', 'basket'],
      answer: 'the',
      teach: '"the" is in almost every sentence, so it is worth knowing whole. '
        + 'Elephant and basket are long but rare, and they sound out neatly.',
      level: 1,
    },
    {
      id: 'sw-2',
      ask: 'In "the dog is here", how many words can be sounded out letter by '
        + 'letter?',
      kind: 'numeric',
      answer: '1',
      accept: ['one', 'dog'],
      teach: 'Only "dog": d, o, g. The, is and here are sight words whose '
        + 'letters do not make their usual sounds.',
      level: 2,
    },
    {
      id: 'sw-3',
      ask: 'Why does knowing words on sight help you understand what you read?',
      kind: 'choice',
      options: [
        'Because it is faster',
        'Because your attention is free for the meaning',
        'Because you no longer need to sound anything out',
      ],
      answer: 'Because your attention is free for the meaning',
      teach: 'Speed is only the sign of it. The real gain is that attention '
        + 'spent on letters is attention not spent on what the sentence says, '
        + 'and you only have so much.',
      level: 3,
    },
  ],
})

/* ── writing sentences ────────────────────────────────────────────────────── */

teach({
  topicId: 'write-sentences',
  source: 'WRITTEN',
  approved: true,

  idea:
    'A sentence tells somebody one whole thing. It names who or what, and says '
    + 'what they did or what they are. It starts with a capital letter and it '
    + 'ends with a full stop. "My sister sells oranges." is a sentence. "My '
    + 'sister" is not, because it leaves you waiting.',

  mechanism:
    'The capital and the full stop are not decoration. They are where the '
    + 'sentence begins and ends, and the reader needs both or the words run '
    + 'into the next thought. Read a page with no full stops out loud and you '
    + 'will hear the problem: you never know where to breathe. That is what '
    + 'the marks are for, so they belong to the reader rather than to the '
    + 'teacher.',

  recap:
    'A capital letter is the big form of a letter: A for a, M for m. Every '
    + 'letter has one, and names of people and places take one too.',

  method: [
    'Decide the one thing you want to say.',
    'Say it out loud first, as a whole sentence.',
    'Write who or what it is about.',
    'Write what they did, or what they are.',
    'Put a capital on the very first letter and a full stop at the end.',
    'Read it back out loud. If you are left waiting, something is missing.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Turn these words into a sentence: goes, school, Ama, to.',
      steps: [
        'Who is it about? Ama.',
        'What does she do? Goes to school.',
        'Capital on Ama, full stop at the end.',
      ],
      answer: 'Ama goes to school.',
    },
    {
      level: 2,
      ask: 'Is this a sentence? "the big red bus"',
      steps: [
        'It names a thing: the big red bus.',
        'But it does not say what the bus did or what it is.',
        'Read it out loud and you are still waiting.',
      ],
      answer: 'No. It needs a doing part, such as "The big red bus stopped."',
    },
    {
      level: 3,
      ask: 'Fix this: my father went to the market he bought fish',
      steps: [
        'Read it out loud. There are two whole things being said.',
        'The first ends after market, so a full stop goes there.',
        '"he" then begins a new sentence, so it takes a capital.',
        'The very first word takes a capital too.',
      ],
      answer: 'My father went to the market. He bought fish.',
    },
  ],

  traps: [
    {
      mistake: 'Writing one long line joined by "and" again and again.',
      why: 'Each whole thought deserves its own sentence. Read it out loud and '
        + 'put a full stop wherever you naturally stop for breath.',
    },
    {
      mistake: 'Putting the capital letter on the wrong word.',
      why: 'The capital goes on the first letter of the first word of the '
        + 'sentence. Names take one wherever they appear.',
    },
    {
      mistake: 'Writing a naming part with no doing part.',
      why: '"My new shoes" leaves the reader waiting. Add what they did or '
        + 'what they are: "My new shoes are black."',
    },
  ],

  extension:
    'A sentence that asks ends with a question mark. '
    + 'A sentence that is shouted ends with an exclamation mark. '
    + 'All three marks do the same job. '
    + 'They tell the reader where the thought ends. '
    + 'And what kind of thought it was.',

  figure: {
    alt: 'One sentence written out with the capital letter at the start and '
      + 'the full stop at the end both circled and labelled, above an '
      + 'incomplete group of words marked as not a sentence',
    svg: '<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="60" y="86" font-size="30" fill="currentColor">Ama goes to school.</text>'
      + '<circle cx="71" cy="76" r="22" fill="none" stroke="#0f8a4d" stroke-width="3"/>'
      + '<circle cx="306" cy="82" r="14" fill="none" stroke="#0f8a4d" stroke-width="3"/>'
      + '<path d="M71 44 V 26" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="71" y="20" text-anchor="middle" font-size="15" fill="#0f8a4d">capital</text>'
      + '<path d="M306 100 V 122" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="306" y="142" text-anchor="middle" font-size="15" fill="#0f8a4d">full stop</text>'
      + '<text x="380" y="86" font-size="17" fill="#0f8a4d">who, and what they do</text>'
      + '<path d="M40 176h560" stroke="currentColor" stroke-width="1" opacity="0.3"/>'
      + '<text x="60" y="232" font-size="30" fill="currentColor">the big red bus</text>'
      + '<text x="60" y="272" font-size="17" fill="currentColor">'
      + 'Names a thing, never says what it did. You are left waiting.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'ws-1',
      ask: 'What must every sentence end with, if it is not asking anything?',
      kind: 'choice',
      options: ['A comma', 'A full stop', 'Nothing'],
      answer: 'A full stop',
      teach: 'The full stop tells the reader the thought has finished. Without '
        + 'it the words run into the next thought.',
      level: 1,
    },
    {
      id: 'ws-2',
      ask: 'Which one is a complete sentence?',
      kind: 'choice',
      options: [
        'The tall boy in the blue shirt',
        'Kofi washed the plates.',
        'Running very fast down the road',
      ],
      answer: 'Kofi washed the plates.',
      teach: 'It names who, says what he did, starts with a capital and ends '
        + 'with a full stop. The other two leave you waiting for the rest.',
      level: 2,
    },
    {
      id: 'ws-3',
      ask: 'How many sentences should this be? "we went home we ate rice"',
      kind: 'numeric',
      answer: '2',
      accept: ['two'],
      teach: 'Two whole things are being said, so two sentences: "We went '
        + 'home. We ate rice." Read it out loud and you hear where the first '
        + 'one ends.',
      level: 3,
    },
  ],
})

/* ── nouns and verbs ──────────────────────────────────────────────────────── */

teach({
  topicId: 'nouns-verbs',
  source: 'WRITTEN',
  approved: true,

  idea:
    'A noun is a naming word: a person, a place, a thing. Ama, market, mango, '
    + 'school. A verb is a doing word: runs, eats, sleeps, carries. Nearly '
    + 'every sentence has at least one of each, because a sentence has to name '
    + 'something and say what it does.',

  mechanism:
    'The reason these two matter more than other kinds of word is that they '
    + 'are what a sentence is made of. Take the nouns and verbs out of a '
    + 'sentence and nothing is left standing. That is also how you test a '
    + 'word: if you can put "the" in front of it, it is probably a noun. If '
    + 'you can say "I" before it, or "she" before it, it is probably a verb.',

  recap:
    'A sentence names who or what, and says what they did. The naming part and '
    + 'the doing part are exactly the noun and the verb.',

  method: [
    'Read the sentence out loud.',
    'Ask: who or what is this about? That answer is a noun.',
    'Ask: what are they doing, or what are they? That answer is the verb.',
    'Test a noun by putting "the" in front of it.',
    'Test a verb by putting "she" in front of it.',
    'Some sentences have more than one noun. Find them all.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Find the noun and the verb: The dog barks.',
      steps: [
        'Who or what is it about? The dog. "Dog" is the noun.',
        'What does it do? Barks. That is the verb.',
      ],
      answer: 'Noun: dog. Verb: barks.',
    },
    {
      level: 2,
      ask: 'Find all the nouns and the verb: Ama sells oranges at the market.',
      steps: [
        'Who is it about? Ama. That is a noun, and it is a name.',
        'What does she do? Sells. That is the verb.',
        'What else is named? Oranges, and market. Both nouns.',
      ],
      answer: 'Nouns: Ama, oranges, market. Verb: sells.',
    },
    {
      level: 3,
      ask: 'Is "water" a noun or a verb?',
      steps: [
        'Try "the water". That works, so it can be a noun.',
        'Try "she waters the plants". That works too, so it can be a verb.',
        'So the word alone does not settle it. The sentence does.',
      ],
      answer: 'Both, depending on the sentence. In "I drink water" it is a '
        + 'noun. In "I water the plants" it is a verb.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a word is always a noun or always a verb.',
      why: 'Many words are either, depending on use. Water, play, drink and '
        + 'fish all work both ways. Look at the sentence, not the word.',
    },
    {
      mistake: 'Calling a describing word a noun.',
      why: '"Big" names nothing. In "the big dog", the noun is dog and big '
        + 'only tells you about it.',
    },
    {
      mistake: 'Finding only the first noun and stopping.',
      why: 'A sentence often names several things. Ask "what else is named '
        + 'here" before you move on.',
    },
  ],

  extension:
    'Verbs change shape to tell you when. '
    + 'She walks today. She walked yesterday. '
    + 'Nouns change shape to tell you how many. '
    + 'One mango. Two mangoes. '
    + 'Those two small changes carry a lot.',

  figure: {
    alt: 'The sentence "Ama sells oranges at the market" with the nouns Ama, '
      + 'oranges and market underlined and labelled naming words, and the verb '
      + 'sells boxed and labelled doing word',
    svg: '<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<text x="40" y="120" font-size="27" fill="currentColor">'
      + 'Ama sells oranges at the market.</text>'
      + '<g stroke="#0f8a4d" stroke-width="3">'
      + '<path d="M40 134h64"/><path d="M196 134h120"/><path d="M382 134h126"/>'
      + '</g>'
      + '<rect x="108" y="92" width="80" height="42" rx="7" fill="none" '
      + 'stroke="currentColor" stroke-width="3"/>'
      + '<path d="M148 92 V 62" stroke="currentColor" stroke-width="2"/>'
      + '<text x="148" y="52" text-anchor="middle" font-size="16" fill="currentColor">'
      + 'doing word: a verb</text>'
      + '<path d="M72 146 V 180" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M256 146 V 180" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M444 146 V 180" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="256" y="206" text-anchor="middle" font-size="16" fill="#0f8a4d">'
      + 'naming words: nouns</text>'
      + '<text x="320" y="262" text-anchor="middle" font-size="17" fill="currentColor">'
      + 'Put "the" before a noun. Put "she" before a verb.</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'nv-1',
      ask: 'Which word is the verb? The boy runs.',
      kind: 'choice',
      options: ['The', 'boy', 'runs'],
      answer: 'runs',
      teach: 'Running is what he does, so it is the doing word. "Boy" names '
        + 'who, so that is the noun.',
      level: 1,
    },
    {
      id: 'nv-2',
      ask: 'How many nouns are in: Kofi bought fish at the market?',
      kind: 'numeric',
      answer: '3',
      accept: ['three'],
      teach: 'Kofi, fish and market are all named things, so three. "Bought" '
        + 'is the verb. Do not stop at the first noun you find.',
      level: 2,
    },
    {
      id: 'nv-3',
      ask: 'In "She plays football", what is "plays"?',
      kind: 'choice',
      options: ['A noun', 'A verb', 'Neither'],
      answer: 'A verb',
      teach: 'It is what she does. The same word can be a noun elsewhere, as '
        + 'in "the school play", which is why you check the sentence and not '
        + 'the word.',
      level: 3,
    },
  ],
})
