/**
 * Stored lessons for JHS 1 English Language.
 *
 * Written at about grade 6 to 7, with a `brief` form on every topic.
 *
 * ── What changes at JHS ────────────────────────────────────────────────────
 *
 * Primary English asks the learner to get it right. JHS asks them to say why
 * it is right, because that is what the examination asks. A Basic 5 learner
 * puts a comma where it sounds correct. A JHS learner has to name the reason,
 * since the reason is what transfers to a sentence they have never seen.
 *
 * So most of these lessons replace a habit with a test the learner can apply
 * themselves: what job is this word doing, is this answer in the passage or
 * worked out from it, does the comma mark a pause or a boundary.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── speaking formally ────────────────────────────────────────────────────── */

teach({
  topicId: 'formal-speech',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A prepared talk is planned, then spoken, not read out. '
      + 'You carry short notes, not sentences. '
      + 'Formal English means no slang and full forms of words.',
    method: [
      'Plan three points, with one example for each.',
      'Write each point as five or six words on a card.',
      'Say it aloud twice before you stand up.',
    ],
  },

  idea:
    'A prepared talk is planned before and spoken on the day. '
    + 'You stand with a card of short notes, not a page of sentences. '
    + 'Formal English means you say "cannot" rather than "can’t", '
    + 'and you leave out slang. '
    + 'You face the people, you speak slowly, and you let them see you think.',

  mechanism:
    'Reading out and speaking are two different acts, and only one of them '
    + 'reaches anybody. '
    + 'When you write full sentences, your eyes must stay on the page, '
    + 'so you never look up, and your voice flattens into one line. '
    + 'The listeners stop following, not because the words were poor, '
    + 'but because nothing told them which part mattered. '
    + 'Short notes force you to make the sentence at the moment you say it. '
    + 'That is why the voice rises and falls on its own, '
    + 'and why you can look up: there is nothing to lose your place in. '
    + 'The notes are there to hold the order of your points, nothing more.',

  recap:
    'You have given talks in class before. '
    + 'This asks for the same thing with two rules added: '
    + 'plan it first, and use standard English throughout.',

  method: [
    'Decide the one thing you want the people to leave knowing.',
    'Choose three points that get them there.',
    'Find one real example for each point.',
    'Write each point on a card in five or six words.',
    'Open by saying what the talk is about.',
    'Close by saying the one thing again.',
    'Rehearse aloud, standing, at least twice.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Change this into formal English: '
        + '"We gotta stop chucking rubbish in the gutter."',
      steps: [
        'Find the slang: "gotta" and "chucking".',
        'Replace each with a standard word.',
        'Keep the meaning exactly as it was.',
      ],
      answer: 'We must stop throwing rubbish into the gutter.',
    },
    {
      level: 4,
      ask: 'You have three minutes to speak on keeping the school clean. '
        + 'Write your note card.',
      steps: [
        'Decide the one thing: a clean school is our own work.',
        'Point one: rubbish blocks the gutters.',
        'Point two: blocked gutters breed mosquitoes.',
        'Point three: a bin in each class costs little.',
      ],
      answer: 'Card: (1) rubbish blocks gutters, '
        + '(2) blocked gutters breed mosquitoes, '
        + '(3) one bin per class is cheap. '
        + 'Six words each is enough.',
    },
    {
      level: 5,
      ask: 'Why is a note card better than a written speech?',
      steps: [
        'A written speech holds your eyes on the page.',
        'You cannot look up, so the listeners are not addressed.',
        'Notes make you build the sentence as you speak.',
      ],
      answer: 'Because notes let you look at the people and speak naturally, '
        + 'while a written speech makes you read at them.',
    },
  ],

  traps: [
    {
      mistake: 'Writing the whole talk out and learning it word for word.',
      why: 'It feels safe. '
        + 'But if you lose one word you lose the whole line, '
        + 'and you never look up once.',
    },
    {
      mistake: 'Using big words to sound formal.',
      why: 'Formal means standard, not complicated. '
        + '"We must stop" is formal. "We must desist" is only longer.',
    },
    {
      mistake: 'Speaking fast to finish.',
      why: 'Nerves make everybody rush. '
        + 'Decide beforehand to pause after each point.',
    },
  ],

  extension:
    'A debate is this with one change: you answer somebody. '
    + 'You listen for their weakest point, name it, then give your own. '
    + 'The notes stay short for the same reason as before.',

  questions: [
    {
      id: 'spk-1',
      ask: 'Which of these is formal English?',
      kind: 'choice',
      options: [
        'I cannot come because I am unwell.',
        'I can’t come, I’m sick.',
        'Can’t make it, sorry.',
      ],
      answer: 'I cannot come because I am unwell.',
      teach: 'Formal English uses the full form, not the short form, '
        + 'and gives the reason in a complete sentence.',
      level: 3,
    },
    {
      id: 'spk-2',
      ask: 'What should be written on your note card?',
      kind: 'choice',
      options: [
        'Each point in five or six words',
        'The talk in full sentences',
        'Only the first line',
      ],
      answer: 'Each point in five or six words',
      teach: 'The card holds the order of your points. '
        + 'You make the sentences while standing.',
      level: 4,
    },
    {
      id: 'spk-3',
      ask: 'A listener says your talk was hard to follow. '
        + 'Which is most likely to fix it?',
      kind: 'choice',
      options: [
        'Say at the start what the talk is about',
        'Use longer words',
        'Speak more quietly',
      ],
      answer: 'Say at the start what the talk is about',
      teach: 'People follow a talk when they know where it is going. '
        + 'Open by saying it and close by saying it again.',
      level: 5,
    },
  ],
})

/* ── literal and inferential questions ───────────────────────────────────── */

teach({
  topicId: 'literal-inferential',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A literal answer is written in the passage. '
      + 'You can point at the line. '
      + 'An inferential answer is not written. '
      + 'You work it out from what is written.',
    method: [
      'Try to find the answer in the text first.',
      'If you can point at it, the question is literal.',
      'If not, ask what the lines make true.',
    ],
  },

  idea:
    'Some questions are answered by the passage itself. '
    + 'You find the line and put it in your own words. '
    + 'Those are literal questions. '
    + 'Other questions are not answered anywhere in the passage. '
    + 'You put two or three lines together and work out the answer. '
    + 'Those are inferential questions. '
    + 'An inference still comes from the passage. '
    + 'It is not a guess, and it is not your own opinion.',

  mechanism:
    'The difference matters because the two kinds are marked differently. '
    + 'A literal question has one right answer, and the passage proves it. '
    + 'An inferential question is marked on your evidence. '
    + 'So the answer alone is worth little. '
    + 'The answer plus the line it rests on is worth the mark. '
    + 'Here is the test. '
    + 'Ask yourself: can I point at the words? '
    + 'If you can, write them in your own words and stop. '
    + 'If you cannot, the passage has shown you something instead of '
    + 'telling you, and your job is to say what it shows and why. '
    + 'Writers do this on purpose. '
    + '"His hands shook as he opened the letter" never says he was afraid. '
    + 'It shows you, and showing is stronger than telling.',

  recap:
    'You already answer questions on a passage. '
    + 'This sorts those questions into two kinds, '
    + 'because each kind wants a different sort of answer.',

  method: [
    'Read the question before reading the passage again.',
    'Look for the answer in the text.',
    'If you find it, answer in your own words. That is literal.',
    'If you cannot find it, list what the passage does say nearby.',
    'Ask what those lines make true.',
    'Write the answer, then write the evidence for it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Passage: "Ama left the house at five. The streets were still '
        + 'dark." Question: at what time did Ama leave?',
      steps: [
        'Look for the answer in the lines.',
        'The first line gives it directly.',
      ],
      answer: 'Five in the morning. This is a literal question.',
    },
    {
      level: 4,
      ask: 'Same passage. Question: was Ama in a hurry?',
      steps: [
        'Search the passage. It never says she hurried.',
        'So the answer must be worked out.',
        'She left at five, and the streets were dark.',
        'Leaving before daylight suggests she had to be somewhere early.',
      ],
      answer: 'Probably yes. The passage does not say so, '
        + 'but leaving while it is still dark suggests she had to be '
        + 'somewhere early. This is an inferential question.',
    },
    {
      level: 5,
      ask: 'Passage: "Kofi read the result twice, folded the paper small, '
        + 'and put it in his pocket without a word." '
        + 'What does this tell you about the result?',
      steps: [
        'The passage never states the result.',
        'Collect what it does state: he read it twice, folded it small, '
          + 'said nothing.',
        'Reading twice suggests he hoped he had misread it.',
        'Folding it small and saying nothing suggests he wanted it hidden.',
      ],
      answer: 'The result was bad. '
        + 'He reads it twice as though hoping he misread it, '
        + 'and he hides it without speaking.',
    },
  ],

  traps: [
    {
      mistake: 'Giving your own opinion and calling it an inference.',
      why: 'An inference must rest on the passage. '
        + 'An answer built on nothing from the text earns nothing.',
    },
    {
      mistake: 'Copying a whole sentence for a literal question.',
      why: 'Copying shows you found the line but not that you understood '
        + 'it. Put it in your own words.',
    },
    {
      mistake: 'Treating every question as literal and searching forever.',
      why: 'If two careful readings do not find it, it is inferential. '
        + 'Stop searching and start reasoning.',
    },
  ],

  extension:
    'A third kind appears later: the evaluative question. '
    + 'It asks whether the writer succeeded, or whether you agree. '
    + 'It still needs evidence from the passage, '
    + 'but now your judgement is part of the answer.',

  questions: [
    {
      id: 'inf-1',
      ask: 'A literal question is one whose answer is:',
      kind: 'choice',
      options: [
        'written in the passage',
        'your own opinion',
        'worked out from clues',
      ],
      answer: 'written in the passage',
      teach: 'If you can point at the words, the question is literal.',
      level: 3,
    },
    {
      id: 'inf-2',
      ask: 'Passage: "She pushed her plate away untouched." '
        + 'What kind of question is "How was she feeling?"',
      kind: 'choice',
      options: ['Inferential', 'Literal', 'Neither'],
      answer: 'Inferential',
      teach: 'The passage never names a feeling. '
        + 'It shows you an action and leaves you to work out the feeling.',
      level: 4,
    },
    {
      id: 'inf-3',
      ask: 'What must every inferential answer include to earn full marks?',
      kind: 'choice',
      options: [
        'The evidence from the passage it rests on',
        'A longer sentence',
        'A quotation from another book',
      ],
      answer: 'The evidence from the passage it rests on',
      teach: 'An inference is marked on its evidence. '
        + 'Give the answer, then the line it comes from.',
      level: 5,
    },
  ],
})

/* ── vocabulary in context ───────────────────────────────────────────────── */

teach({
  topicId: 'vocabulary-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A word can mean something different in one passage from what it '
      + 'usually means. '
      + 'The question asks what it means there, not what it means normally.',
    method: [
      'Cover the word and read the sentence.',
      'Say what word would fit the gap.',
      'Put your word back in and read it again.',
    ],
  },

  idea:
    'Words change meaning with their company. '
    + '"The crowd was thick" does not mean the crowd was stupid. '
    + 'When a question asks for the meaning of a word as used in the '
    + 'passage, it wants the meaning it carries there. '
    + 'Your answer should fit the sentence '
    + 'if you put it in place of the word.',

  mechanism:
    'The reason the usual meaning fails is that meaning is not stored in a '
    + 'word by itself. '
    + 'It is settled by the words around it. '
    + 'So the method is not to remember harder. '
    + 'It is to cover the word, read the sentence with a gap in it, '
    + 'and ask what would fit. '
    + 'Whatever you would naturally put in the gap is close to the meaning, '
    + 'and you got it from the passage rather than from memory. '
    + 'Then test it. '
    + 'Put your word back in the sentence. '
    + 'If the sentence still makes sense, and still agrees with the '
    + 'sentences on either side, you have it. '
    + 'This is also why a one word answer is usually safest. '
    + 'The marker is checking whether your word could replace the original.',

  recap:
    'You have used a dictionary and found that a word has several meanings '
    + 'listed. '
    + 'This explains how to choose between them: the passage chooses, '
    + 'not you.',

  method: [
    'Find the word in the passage and read the whole sentence.',
    'Cover the word with your finger.',
    'Say what word would fit the gap.',
    'Put your word back in and read it again.',
    'Check that the sentences before and after still agree with it.',
    'Answer with one word or a short phrase, not a definition.',
  ],

  worked: [
    {
      level: 3,
      ask: '"The boy was keen to start." What does "keen" mean here?',
      steps: [
        'Cover "keen": "The boy was ___ to start."',
        'What fits? Eager.',
        'Put it back: "The boy was eager to start." It works.',
      ],
      answer: 'Eager.',
    },
    {
      level: 4,
      ask: '"The knife was keen." What does "keen" mean here?',
      steps: [
        'Cover it: "The knife was ___."',
        'Eager does not fit a knife.',
        'What fits? Sharp.',
      ],
      answer: 'Sharp. '
        + 'The same word carried a different meaning in the other sentence.',
    },
    {
      level: 5,
      ask: '"Years of drought had reduced the once proud town to a handful '
        + 'of houses." What does "reduced" mean as used here?',
      steps: [
        'The usual meaning of reduced is made smaller in amount.',
        'Cover it: "drought had ___ the town to a handful of houses".',
        'The town was not only made smaller. It was brought down.',
        'Test "brought down to": the sentence still reads correctly.',
      ],
      answer: 'Brought down to, or left with no more than. '
        + 'Not simply made smaller.',
    },
  ],

  traps: [
    {
      mistake: 'Writing the dictionary meaning you already knew.',
      why: 'The question says as used in the passage precisely because '
        + 'the usual meaning is often wrong there.',
    },
    {
      mistake: 'Answering with a long definition.',
      why: 'The marker checks whether your answer could replace the word. '
        + 'A definition cannot be slotted into the sentence.',
    },
    {
      mistake: 'Guessing from the look of the word.',
      why: '"Terrific" and "terrible" look related and are not. '
        + 'Cover the word and read the sentence instead.',
    },
  ],

  extension:
    'Figurative language is this taken further. '
    + 'In "the news broke him", no bone broke. '
    + 'The sentence is the only thing that tells you so, '
    + 'which is why covering the word and reading on is the whole skill.',

  questions: [
    {
      id: 'voc-1',
      ask: 'A question asks for the meaning of a word as used in the '
        + 'passage. You should give:',
      kind: 'choice',
      options: [
        'the meaning it carries in that sentence',
        'every meaning you know',
        'the first dictionary meaning',
      ],
      answer: 'the meaning it carries in that sentence',
      teach: 'The passage settles the meaning. Your memory does not.',
      level: 3,
    },
    {
      id: 'voc-2',
      ask: '"The soup was rich." What does "rich" mean here?',
      kind: 'choice',
      options: ['Full of fat or flavour', 'Having much money', 'Deeply red'],
      answer: 'Full of fat or flavour',
      teach: 'Cover the word and ask what fits a soup. '
        + 'Money cannot fit, so the usual meaning is out.',
      level: 4,
    },
    {
      id: 'voc-3',
      ask: 'What is the best way to test your answer?',
      kind: 'choice',
      options: [
        'Put your word back in place of the original',
        'Count the letters',
        'Check that it is a longer word',
      ],
      answer: 'Put your word back in place of the original',
      teach: 'If the sentence still makes sense with your word in it, '
        + 'your word carries the right meaning.',
      level: 5,
    },
  ],
})

/* ── narrative and descriptive essays ────────────────────────────────────── */

teach({
  topicId: 'essay-narrative',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Plan before you write. '
      + 'A narrative essay tells what happened. '
      + 'A descriptive essay shows what something was like. '
      + 'Each paragraph holds one idea and links to the next.',
    method: [
      'Spend five minutes on a plan of four or five points.',
      'Write one paragraph per point.',
      'End with the change, not with "and that was my day".',
    ],
  },

  idea:
    'A narrative essay tells a story: something happened, and then '
    + 'something changed. '
    + 'A descriptive essay makes the reader see a place, a person or an '
    + 'event. '
    + 'Both need a plan written before the first sentence. '
    + 'Both need paragraphs, one idea in each. '
    + 'And both need an ending that lands, which means the last paragraph '
    + 'says what changed, not that the story is finished.',

  mechanism:
    'The plan is the part learners skip, and skipping it is why essays '
    + 'collapse in the last paragraph. '
    + 'Without a plan you write forward from wherever you are, '
    + 'so you reach the end of the page before you reach the end of the '
    + 'story, and you finish with "and then I woke up". '
    + 'Five minutes of planning fixes it because the plan is made of '
    + 'endings. '
    + 'You decide what changed first, then work out which four points get '
    + 'the reader there. '
    + 'Paragraphs then come free: one point is one paragraph. '
    + 'Linking works the same way. '
    + 'A paragraph links to the next when the last sentence of one leans '
    + 'towards the first sentence of the other, '
    + 'so you do not need words like "furthermore" at all.',

  recap:
    'You have written stories and descriptions in primary school. '
    + 'What is added here is the plan, the paragraph, and an ending that '
    + 'means something.',

  method: [
    'Read the question twice and underline what it asks for.',
    'Decide the one change your essay will end on.',
    'List four or five points that get the reader there.',
    'Write the opening so it puts the reader in the scene at once.',
    'Write one paragraph for each point.',
    'In a descriptive essay, give what can be seen, heard and smelt.',
    'Make the last paragraph state the change.',
    'Read it back and cut any sentence that repeats another.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which is a narrative opening, and which is descriptive? '
        + '(a) "The market opened at six, and by seven it was full." '
        + '(b) "I was late for the bus on the day everything changed."',
      steps: [
        'Ask whether time is moving.',
        'In (a) nothing happens next. It paints the market.',
        'In (b) something is about to happen.',
      ],
      answer: '(a) is descriptive and (b) is narrative.',
    },
    {
      level: 4,
      ask: 'Plan a narrative essay on "A day I will not forget".',
      steps: [
        'Decide the change first: I learned my grandmother trusted me.',
        'Point one: she asked me to take the money to the bank alone.',
        'Point two: I lost the envelope in the taxi.',
        'Point three: the driver came back with it that evening.',
        'Point four: she had never doubted I would come home with it.',
      ],
      answer: 'Four points, one paragraph each, '
        + 'and the last paragraph says what changed: '
        + 'that I had been trusted all along.',
    },
    {
      level: 5,
      ask: 'Improve this ending: "We went home. It was a nice day. '
        + 'I will never forget it."',
      steps: [
        'It only announces that the essay is over.',
        'Ask what actually changed for the writer.',
        'State that instead of announcing the end.',
      ],
      answer: 'Something like: "I had carried that envelope badly and it '
        + 'still came home. She never asked me about it again, '
        + 'and she sent me the next week too." '
        + 'The change is shown, not announced.',
    },
  ],

  traps: [
    {
      mistake: 'Starting to write without a plan to save time.',
      why: 'It costs time. '
        + 'An unplanned essay runs out of page before it runs out of story.',
    },
    {
      mistake: 'One long paragraph for the whole essay.',
      why: 'A paragraph is one idea. '
        + 'A marker looking for your points cannot find them in a block.',
    },
    {
      mistake: 'Ending with "and that was the end of my day".',
      why: 'That tells the reader the writing stopped. '
        + 'The ending should say what changed.',
    },
    {
      mistake: 'Describing with adjectives only.',
      why: '"A beautiful, lovely, wonderful market" shows nothing. '
        + 'One smell and one sound show more than ten adjectives.',
    },
  ],

  extension:
    'An argumentative essay uses the same plan with a different job for '
    + 'each paragraph: claim, reason, example, and the answer to the other '
    + 'side. '
    + 'The habit of deciding the ending first matters even more there.',

  questions: [
    {
      id: 'ess-1',
      ask: 'How many ideas should one paragraph carry?',
      kind: 'choice',
      options: ['One', 'As many as fit', 'Three'],
      answer: 'One',
      teach: 'One idea per paragraph. '
        + 'That is how a marker finds your points.',
      level: 3,
    },
    {
      id: 'ess-2',
      ask: 'What should you decide first when planning a narrative essay?',
      kind: 'choice',
      options: [
        'What changed by the end',
        'How many words to write',
        'The title',
      ],
      answer: 'What changed by the end',
      teach: 'Decide the ending, then choose the points that get the reader '
        + 'to it. That is what keeps the essay from collapsing.',
      level: 4,
    },
    {
      id: 'ess-3',
      ask: 'Which sentence belongs in a descriptive essay?',
      kind: 'choice',
      options: [
        'Smoke from the fish stalls hung over the first row.',
        'The market was very nice and lovely.',
        'Then I went home and ate.',
      ],
      answer: 'Smoke from the fish stalls hung over the first row.',
      teach: 'Description gives something to see, hear or smell. '
        + 'Adjectives alone give nothing.',
      level: 5,
    },
  ],
})

/* ── the parts of speech ─────────────────────────────────────────────────── */

teach({
  topicId: 'parts-of-speech-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'There are eight parts of speech: noun, pronoun, verb, adjective, '
      + 'adverb, preposition, conjunction, interjection. '
      + 'A word belongs to one because of the job it is doing in that '
      + 'sentence, not because of the word itself.',
    method: [
      'Do not ask what the word is. Ask what it is doing.',
      'Name the word it works with.',
      'Then give the part of speech.',
    ],
  },

  idea:
    'Words are sorted by the job they do in a sentence. '
    + 'A noun names. '
    + 'A pronoun stands in for a noun. '
    + 'A verb says what is done or what is. '
    + 'An adjective describes a noun. '
    + 'An adverb tells you more about a verb, an adjective or another '
    + 'adverb. '
    + 'A preposition shows position or relation: in, on, before, with. '
    + 'A conjunction joins: and, but, because. '
    + 'An interjection is a cry standing on its own: oh, alas.',

  mechanism:
    'The same word can belong to different parts of speech in different '
    + 'sentences, '
    + 'and that single fact is what the examination tests. '
    + 'Take "water". '
    + 'In "the water is cold" it names a thing, so it is a noun. '
    + 'In "water the plants" it tells somebody to do something, '
    + 'so it is a verb. '
    + 'The word did not change. The job changed. '
    + 'So the question is never "what is this word?" but '
    + '"what is this word doing here?". '
    + 'The quickest way to answer is to find the word it works with. '
    + 'An adjective has a noun beside it. '
    + 'An adverb has a verb, an adjective or another adverb. '
    + 'A preposition has a noun after it. '
    + 'Once you have named the partner, the part of speech is already '
    + 'decided.',

  recap:
    'You know nouns, verbs and adjectives from primary school. '
    + 'This adds the other five and one rule that covers all eight: '
    + 'the job decides, not the word.',

  method: [
    'Read the whole sentence first.',
    'Point at the word you are asked about.',
    'Ask what it is doing: naming, doing, describing, joining, placing.',
    'Find the word it works with.',
    'Name the part of speech.',
    'Check by changing the sentence and seeing whether the job changes.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the part of speech of each word: '
        + '"She sang beautifully."',
      steps: [
        '"She" stands in for a name, so it is a pronoun.',
        '"Sang" is what she did, so it is a verb.',
        '"Beautifully" tells us more about how she sang.',
      ],
      answer: 'She: pronoun. Sang: verb. Beautifully: adverb.',
    },
    {
      level: 4,
      ask: 'What part of speech is "fast" in each sentence? '
        + '(a) "He is a fast runner." (b) "He runs fast."',
      steps: [
        'In (a) "fast" sits beside "runner", which is a noun.',
        'A word describing a noun is an adjective.',
        'In (b) "fast" tells us how he runs, and "runs" is a verb.',
      ],
      answer: '(a) adjective, (b) adverb. '
        + 'The word is the same; the job is different.',
    },
    {
      level: 5,
      ask: 'Name the part of speech of every word in: '
        + '"Alas, the old bridge fell because the river rose."',
      steps: [
        '"Alas" stands alone as a cry: interjection.',
        '"The" points at a noun: article, counted with adjectives.',
        '"Old" describes bridge: adjective.',
        '"Bridge" names a thing: noun.',
        '"Fell" is what it did: verb.',
        '"Because" joins two parts: conjunction.',
        '"River" names a thing: noun. "Rose" is a verb.',
      ],
      answer: 'Alas: interjection. The: article or adjective. '
        + 'Old: adjective. Bridge: noun. Fell: verb. '
        + 'Because: conjunction. The: article. River: noun. Rose: verb.',
    },
  ],

  traps: [
    {
      mistake: 'Learning that a word "is" a noun and keeping that forever.',
      why: 'Most common words do more than one job. '
        + 'Only the sentence decides.',
    },
    {
      mistake: 'Calling every word ending in "ly" an adverb.',
      why: 'Mostly true and not always. '
        + '"Friendly" and "lonely" are adjectives.',
    },
    {
      mistake: 'Mixing up adjective and adverb when both could fit.',
      why: 'Find the partner. '
        + 'Beside a noun it is an adjective; beside a verb it is an adverb.',
    },
  ],

  extension:
    'Later you will label phrases rather than single words. '
    + 'In "the man in the blue shirt left", '
    + '"in the blue shirt" does the work of one adjective, '
    + 'because it describes "man". '
    + 'The rule is the same: name the job, not the word.',

  questions: [
    {
      id: 'pos-1',
      ask: 'What part of speech is "because"?',
      kind: 'choice',
      options: ['Conjunction', 'Preposition', 'Adverb'],
      answer: 'Conjunction',
      teach: 'It joins two parts of a sentence together, '
        + 'which is what a conjunction does.',
      level: 3,
    },
    {
      id: 'pos-2',
      ask: 'In "water the plants before noon", what part of speech is '
        + '"water"?',
      kind: 'choice',
      options: ['Verb', 'Noun', 'Adjective'],
      answer: 'Verb',
      teach: 'Here it tells somebody to do something. '
        + 'In "the water is cold" the same word names a thing.',
      level: 4,
    },
    {
      id: 'pos-3',
      ask: 'What is the quickest way to tell an adjective from an adverb?',
      kind: 'choice',
      options: [
        'Find the word it works with',
        'Check whether it ends in ly',
        'Count its letters',
      ],
      answer: 'Find the word it works with',
      teach: 'An adjective works with a noun. '
        + 'An adverb works with a verb, an adjective or another adverb.',
      level: 5,
    },
  ],
})

/* ── tenses and aspect ──────────────────────────────────────────────────── */

teach({
  topicId: 'tenses-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Tense says when: past, present or future. '
      + 'Aspect says how it sits in time: finished, or still going on. '
      + '"I ate" is finished. "I have eaten" is finished and still matters. '
      + '"I was eating" was going on when something else happened.',
    method: [
      'Decide the time first: past, present or future.',
      'Then ask whether it is finished or still going on.',
      'Keep one tense through the whole paragraph.',
    ],
  },

  idea:
    'Tense tells the reader when something happened. '
    + 'Aspect tells the reader how it sat in time. '
    + 'The simple form states it: "I ate". '
    + 'The continuous form shows it going on: "I was eating". '
    + 'The perfect form shows it finished but still counting now: '
    + '"I have eaten". '
    + 'And the two can combine: "I had been eating" was going on before '
    + 'something else in the past. '
    + 'Each time has all four forms, which is why there seem to be so many '
    + 'tenses.',

  mechanism:
    'There are not twelve things to learn. '
    + 'There are two questions, and the forms are what you get by answering '
    + 'both. '
    + 'Question one: when? Past, present or future. '
    + 'Question two: how does it sit? Simple, continuous, perfect, '
    + 'or perfect continuous. '
    + 'Three times multiplied by four forms gives twelve, '
    + 'and you never learn twelve, you answer two questions. '
    + 'The perfect is the one learners struggle with, '
    + 'and the reason is that it is not really about when the thing '
    + 'happened. '
    + 'It is about whether it still counts at the time you are speaking. '
    + '"I lost my pen" is a past event. '
    + '"I have lost my pen" is a past event with a present result: '
    + 'the pen is still missing. '
    + 'That is why "I have lost it yesterday" is wrong. '
    + '"Yesterday" closes the event off, and the perfect keeps it open.',

  recap:
    'You already use past, present and future correctly when speaking. '
    + 'This names the forms, so you can keep one tense across a whole '
    + 'piece of writing on purpose.',

  method: [
    'Decide the time of your story: past, present or future.',
    'Write the first verb in that time.',
    'For each verb after, ask whether it is finished or going on.',
    'Use the continuous for something going on when another thing happened.',
    'Use the perfect when a past thing still counts now.',
    'Never use the perfect with a closed time word like yesterday.',
    'Read the paragraph back and check every verb sits in one time.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Put into the past: "I walk to school and I meet Ama."',
      steps: [
        'Both verbs must move to past.',
        'Walk becomes walked. Meet becomes met.',
      ],
      answer: 'I walked to school and I met Ama.',
    },
    {
      level: 4,
      ask: 'Which is correct, and why? '
        + '(a) "I was reading when the light went off." '
        + '(b) "I read when the light went off."',
      steps: [
        'The reading was going on already.',
        'The light going off interrupted it.',
        'Something going on takes the continuous.',
      ],
      answer: '(a). '
        + 'The continuous shows the reading was already going on when the '
        + 'other thing happened.',
    },
    {
      level: 5,
      ask: 'Correct this: "I have seen him yesterday."',
      steps: [
        'The perfect keeps a past event open into now.',
        '"Yesterday" closes it off, so the two fight.',
        'Choose one: keep yesterday and use the simple past.',
      ],
      answer: '"I saw him yesterday." '
        + 'Or drop the day: "I have seen him."',
    },
  ],

  traps: [
    {
      mistake: 'Changing tense in the middle of a paragraph.',
      why: 'It happens when you stop planning and start writing forward. '
        + 'Read back and fix every verb to one time.',
    },
    {
      mistake: 'Using the perfect with yesterday, last week or in 2019.',
      why: 'The perfect keeps a past event open. '
        + 'A closed time word shuts it. They cannot both be true.',
    },
    {
      mistake: 'Thinking the continuous is just a longer present.',
      why: '"I eat rice" is a habit. '
        + '"I am eating rice" is happening now. They mean different things.',
    },
  ],

  extension:
    'Reported speech moves every tense back one step. '
    + '"I am tired" becomes "she said she was tired". '
    + 'It only works if you can already name the tense you are moving.',

  questions: [
    {
      id: 'ten-1',
      ask: 'Which sentence is in the past continuous?',
      kind: 'choice',
      options: [
        'I was writing my notes.',
        'I wrote my notes.',
        'I have written my notes.',
      ],
      answer: 'I was writing my notes.',
      teach: 'The continuous shows the action going on. '
        + '"Was" plus "writing" is the past continuous.',
      level: 3,
    },
    {
      id: 'ten-2',
      ask: 'Which is wrong?',
      kind: 'choice',
      options: [
        'I have finished it last night.',
        'I finished it last night.',
        'I have finished it.',
      ],
      answer: 'I have finished it last night.',
      teach: 'The perfect keeps a past event open into now, '
        + 'and "last night" closes it off.',
      level: 4,
    },
    {
      id: 'ten-3',
      ask: 'Why does English have so many tense forms?',
      kind: 'choice',
      options: [
        'Three times, each with four forms',
        'There are twelve separate rules',
        'Each verb has its own tense',
      ],
      answer: 'Three times, each with four forms',
      teach: 'Answer two questions: when, and how it sits in time. '
        + 'Three times by four forms gives the twelve.',
      level: 5,
    },
  ],
})

/* ── punctuation ────────────────────────────────────────────────────────── */

teach({
  topicId: 'punctuation-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Punctuation marks the parts of a sentence, not the places you '
      + 'breathe. '
      + 'A comma separates items or marks off an extra part. '
      + 'A colon introduces what follows. '
      + 'An apostrophe shows either ownership or a missing letter.',
    method: [
      'Ask what the mark is doing, not where you would pause.',
      'For an apostrophe, ask: ownership, or a missing letter?',
      'Read the sentence without the part between two commas.',
    ],
  },

  idea:
    'Punctuation shows the reader how a sentence is built. '
    + 'A full stop ends a statement. '
    + 'A comma separates items in a list, '
    + 'or marks off an extra part the sentence could do without. '
    + 'A colon says: what follows explains what came before. '
    + 'A semicolon joins two complete statements that belong together. '
    + 'An apostrophe does two jobs: it shows ownership, as in '
    + 'the boy’s book, or it stands for a missing letter, as in don’t.',

  mechanism:
    'Nearly every punctuation mistake comes from one belief: '
    + 'that punctuation marks where you pause. '
    + 'It does not. It marks boundaries in the sentence. '
    + 'You can hear that this is wrong by reading a long sentence aloud. '
    + 'You pause for breath in places where no mark belongs. '
    + 'So use a test instead of an ear. '
    + 'For a pair of commas, read the sentence with the part between them '
    + 'removed. '
    + 'If what is left is still a complete sentence, the commas are right. '
    + '"My uncle, who lives in Tamale, is a tailor" '
    + 'reduces to "my uncle is a tailor", so the commas belong. '
    + 'For the apostrophe, ask which of its two jobs is being done. '
    + 'Ownership: whose book? The boy’s. '
    + 'Missing letter: do not becomes don’t, and the mark sits where the '
    + 'o was. '
    + 'This is why "its" and "it’s" confuse people. '
    + '"It’s" is only ever "it is". '
    + '"Its" is ownership, and it needs no mark because it is already a '
    + 'possessive word, like his.',

  recap:
    'You use full stops, question marks and commas in lists already. '
    + 'This adds the colon, the semicolon, and the two jobs of the '
    + 'apostrophe.',

  method: [
    'End every statement with a full stop.',
    'Use commas between items in a list.',
    'For an extra part, put a comma at each end, never only one.',
    'Test a pair of commas by removing what sits between them.',
    'Use a colon when what follows explains or lists.',
    'For an apostrophe, decide first: ownership or missing letter?',
    'For ownership, put the mark after the owner, then add s if needed.',
    'Never use an apostrophe just because a word ends in s.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Punctuate: "we bought rice beans oil and fish"',
      steps: [
        'This is a list.',
        'Commas go between the items.',
        'The sentence needs a capital letter and a full stop.',
      ],
      answer: 'We bought rice, beans, oil and fish.',
    },
    {
      level: 4,
      ask: 'Which is correct? '
        + '(a) "The teacher, Mr Mensah, marked our books." '
        + '(b) "The teacher, Mr Mensah marked our books."',
      steps: [
        'The name is an extra part, so it needs a comma at each end.',
        'Test (a) by removing the name: "The teacher marked our books."',
        'That is a complete sentence, so the commas are right.',
      ],
      answer: '(a). '
        + 'An extra part takes a comma at each end, never only one.',
    },
    {
      level: 5,
      ask: 'Correct the apostrophes: '
        + '"Its a long way to the girls dormitory, and its roof leak’s."',
      steps: [
        '"Its a long way" means "it is", so it needs the mark: It’s.',
        '"The girls dormitory" belongs to the girls, so: girls’ dormitory.',
        '"Its roof" is ownership, so no mark.',
        '"Leak’s" is a plain verb, so no mark.',
      ],
      answer: '"It’s a long way to the girls’ dormitory, '
        + 'and its roof leaks."',
    },
  ],

  traps: [
    {
      mistake: 'Putting a comma wherever you would pause for breath.',
      why: 'Punctuation marks boundaries, not breaths. '
        + 'Read a long sentence aloud and you will pause where no mark '
        + 'belongs.',
    },
    {
      mistake: 'One comma around an extra part instead of two.',
      why: 'The part needs closing as well as opening. '
        + 'Remove what sits between them to test it.',
    },
    {
      mistake: 'Adding an apostrophe to any word ending in s.',
      why: 'Plurals never take one. '
        + 'Only ownership and missing letters do.',
    },
    {
      mistake: 'Writing "it’s" for ownership.',
      why: '"It’s" is only ever "it is". '
        + '"Its" is already possessive, like his, so it needs no mark.',
    },
  ],

  extension:
    'Direct speech brings its own rules: '
    + 'the quotation marks hold the exact words, '
    + 'and the comma goes inside them, before the closing mark. '
    + 'Every rule there is the same idea again, '
    + 'that the mark shows where one part ends and another begins.',

  questions: [
    {
      id: 'pun-1',
      ask: 'Which sentence is punctuated correctly?',
      kind: 'choice',
      options: [
        'We bought rice, beans and oil.',
        'We bought rice beans, and oil.',
        'We bought, rice beans and oil.',
      ],
      answer: 'We bought rice, beans and oil.',
      teach: 'Commas go between the items of a list, '
        + 'not after the verb that introduces it.',
      level: 3,
    },
    {
      id: 'pun-2',
      ask: 'Which uses the apostrophe correctly?',
      kind: 'choice',
      options: [
        'The boys’ dormitory is full.',
        'The boy’s are playing outside.',
        'Its a long way home.',
      ],
      answer: 'The boys’ dormitory is full.',
      teach: 'Ownership by more than one boy puts the mark after the s. '
        + 'A plural on its own takes no mark.',
      level: 4,
    },
    {
      id: 'pun-3',
      ask: 'How do you test a pair of commas around an extra part?',
      kind: 'choice',
      options: [
        'Remove the part and see if a complete sentence is left',
        'Read it aloud and listen for a pause',
        'Count the words between them',
      ],
      answer: 'Remove the part and see if a complete sentence is left',
      teach: 'Punctuation marks boundaries, not breaths, '
        + 'so the test is structural rather than something you hear.',
      level: 5,
    },
  ],
})
