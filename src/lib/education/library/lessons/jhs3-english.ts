/**
 * Stored lessons for JHS 3 English Language.
 *
 * Written at about grade 8, with a `brief` form on every topic.
 *
 * ── The five topics are all one skill in different places ─────────────────
 *
 * Purpose and tone, poetry, argument, reports and reported speech look
 * unrelated and all turn on the same question: what did the writer choose,
 * and what did the choice do? A tone question is answered by the words
 * picked over plainer ones. A poetry question is answered by the sound and
 * the image chosen. An argument is marked on the order the reasons were put
 * in. A report is judged by what was left out. And reported speech is a case
 * where you must change every word that depended on who was speaking and
 * when.
 *
 * So each lesson here asks for evidence from the text rather than a label,
 * and says what an answer that only names the device is worth.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── purpose and tone ───────────────────────────────────────────────────── */

teach({
  topicId: 'authors-purpose',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Purpose is what the writer wanted: '
      + 'to inform, to persuade, to entertain, to warn, to criticise. '
      + 'Tone is the writer’s attitude to the subject, '
      + 'and it is carried by the words chosen over plainer ones. '
      + 'Quote the word that shows it.',
    method: [
      'Ask what the writer wanted the reader to do or feel.',
      'For tone, find the loaded word and the plain word it replaced.',
      'Quote the evidence; a label alone earns little.',
    ],
  },

  idea:
    'The purpose of a passage is what the writer set out to do: '
    + 'inform, explain, persuade, entertain, warn, criticise, or appeal. '
    + 'Tone is the writer’s attitude to the subject: '
    + 'approving, critical, amused, sarcastic, regretful, '
    + 'urgent, detached, affectionate. '
    + 'Tone is carried by the choice of words, '
    + 'by what is emphasised, '
    + 'and by what is left out. '
    + 'Mood is what the reader is made to feel, '
    + 'which is not always the same as the writer’s own attitude.',

  mechanism:
    'Tone questions look like opinion and have a right answer, '
    + 'because the evidence is on the page. '
    + 'The way in is always the same: '
    + 'find the word the writer chose instead of the plain one. '
    + 'Every sentence had a neutral version available, '
    + 'and the writer did not use it. '
    + '"The minister explained the delay" is neutral. '
    + '"The minister offered yet another explanation for the delay" '
    + 'reports the same event and carries irritation, '
    + 'and the irritation is in two words: offered and yet another. '
    + 'So an answer that says "the tone is critical" is a guess, '
    + 'and an answer that says "the tone is critical, shown by yet '
    + 'another, which suggests the explanations have become routine" '
    + 'is marked as a reading. '
    + 'The same method finds purpose, one level up. '
    + 'Ask what the writer wanted the reader to DO: '
    + 'know something, act, laugh, be careful, change their mind. '
    + 'A persuasive piece gives reasons and answers objections. '
    + 'An informative one gives facts without pressing for a conclusion. '
    + 'And a piece can do two things at once, '
    + 'which is why the useful question is what it mainly wanted. '
    + 'Omission is the hardest evidence to use and the most telling. '
    + 'A report of a protest that never says what the protest was about '
    + 'has taken a side without stating one.',

  recap:
    'You can tell a literal question from an inferential one, '
    + 'and you know a word can carry an attitude. '
    + 'This asks you to name the attitude and to prove it from the text.',

  method: [
    'Read the whole passage before judging it.',
    'Ask what the writer wanted the reader to do or feel.',
    'Name the purpose in one word or two.',
    'Look for words chosen over plainer ones.',
    'Name the tone.',
    'Quote the exact words that carry it.',
    'Say what the plain version would have lost.',
    'Note anything surprising that was left out.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is the purpose of a passage giving the dates and causes '
        + 'of a flood, with no argument?',
      steps: [
        'Ask what it wanted the reader to do.',
        'It presses for nothing.',
      ],
      answer: 'To inform.',
    },
    {
      level: 4,
      ask: 'Name the tone and the evidence: '
        + '"The committee has, remarkably, found yet another reason to '
        + 'postpone."',
      steps: [
        'Remarkably and yet another are not neutral words.',
        'They suggest the postponing has happened before.',
      ],
      answer: 'Critical or sarcastic. '
        + 'The evidence is "remarkably" and "yet another", '
        + 'which imply this has become a pattern.',
    },
    {
      level: 5,
      ask: 'A report of a protest never says what the protest was about. '
        + 'What does that tell you?',
      steps: [
        'The cause is the most obvious thing a report would include.',
        'Leaving it out is a choice.',
        'Without it the readers see only disruption.',
      ],
      answer: 'That the writer has taken a side without stating one. '
        + 'Leaving out the cause leaves only the disruption visible, '
        + 'so the omission is itself the attitude.',
    },
  ],

  traps: [
    {
      mistake: 'Naming a tone with no evidence.',
      why: 'The mark is for the quotation, not the label.',
    },
    {
      mistake: 'Confusing tone with mood.',
      why: 'Tone is the writer’s attitude. '
        + 'Mood is what the reader is made to feel.',
    },
    {
      mistake: 'Calling every strong passage persuasive.',
      why: 'Persuasion gives reasons and answers objections. '
        + 'Strong feeling alone is not an argument.',
    },
    {
      mistake: 'Ignoring what is missing.',
      why: 'An omission is evidence, '
        + 'and often the strongest kind.',
    },
  ],

  extension:
    'Two accounts of the same event, read side by side, '
    + 'show tone more clearly than either alone, '
    + 'because the differences between them are all choices. '
    + 'This is how the same skill is used on news reports and on history.',

  questions: [
    {
      id: 'pur-1',
      ask: 'Tone is:',
      kind: 'choice',
      options: [
        'the writer’s attitude to the subject',
        'what the reader feels',
        'the subject of the passage',
      ],
      answer: 'the writer’s attitude to the subject',
      teach: 'What the reader feels is the mood.',
      level: 3,
    },
    {
      id: 'pur-2',
      ask: 'Where is tone mainly found?',
      kind: 'choice',
      options: [
        'In the words chosen over plainer ones',
        'In the length of the passage',
        'In the title',
      ],
      answer: 'In the words chosen over plainer ones',
      teach: 'Every sentence had a neutral version available.',
      level: 4,
    },
    {
      id: 'pur-3',
      ask: 'What must an answer about tone include?',
      kind: 'choice',
      options: [
        'A quotation showing it',
        'A longer explanation',
        'The writer’s name',
      ],
      answer: 'A quotation showing it',
      teach: 'A label without evidence is a guess.',
      level: 5,
    },
  ],
})

/* ── reading a poem ─────────────────────────────────────────────────── */

teach({
  topicId: 'poetry-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Read a poem aloud first, and work out what is happening before '
      + 'anything else. '
      + 'Then ask how the sound and the images carry it: '
      + 'rhyme, rhythm, repetition, and the pictures chosen. '
      + 'Form and meaning are one answer, not two.',
    method: [
      'Read it aloud, twice.',
      'Say in one sentence what the poem is about.',
      'Then show how a sound or an image carries that.',
    ],
  },

  idea:
    'A poem says something, and says it in a particular shape. '
    + 'A stanza is a group of lines. '
    + 'Rhyme is matching sounds at line ends, '
    + 'and rhythm is the beat of the lines. '
    + 'Repetition brings a word or a line back. '
    + 'Alliteration repeats a first consonant, '
    + 'and onomatopoeia uses a word that sounds like its meaning. '
    + 'Imagery is the pictures the poem makes, '
    + 'often through simile, metaphor and personification. '
    + 'The theme is what the poem is about underneath its subject. '
    + 'The persona is the voice speaking, '
    + 'which is not always the poet.',

  mechanism:
    'The commonest wasted answer in poetry is a list of devices '
    + 'with no connection to the meaning: '
    + 'there is alliteration in line three, there is a simile in line six. '
    + 'That is a true observation and earns almost nothing, '
    + 'because the question is always what the device DOES. '
    + 'So the order matters. '
    + 'Work out what is happening and what the poem is about FIRST, '
    + 'in plain words, '
    + 'and only then look at the devices, '
    + 'because now you have something for each one to be doing. '
    + 'A poem about a slow heavy journey with long vowels and repeated '
    + 'lines '
    + 'is using sound to make the reader feel the slowness, '
    + 'and you can say so. '
    + 'The same device in a poem about a storm does something else. '
    + 'This is why form and meaning are not two separate answers. '
    + 'Reading aloud is not optional either, '
    + 'and it is the step learners skip. '
    + 'Rhythm, rhyme and repetition exist in sound, '
    + 'so they are inaudible on a silent page, '
    + 'and a poem read aloud twice gives up most of its structure '
    + 'before you have analysed anything. '
    + 'One more warning. '
    + 'The persona is not the poet. '
    + 'A poem can be spoken by a child, a soldier, a river or a dead man, '
    + 'and answers that say "the poet feels" '
    + 'when the poem has given you a speaker '
    + 'have missed the first thing on the page.',

  recap:
    'You can identify figures of speech and say what each achieves. '
    + 'A poem puts several of them to work at once, '
    + 'and adds sound to the list.',

  method: [
    'Read the poem aloud, twice.',
    'Say in one sentence what is happening.',
    'Say in one sentence what the poem is about.',
    'Identify the persona: who is speaking.',
    'Note the shape: stanzas, line lengths, rhyme.',
    'Note the sound: rhythm, repetition, alliteration.',
    'Note the images and what each one makes you see.',
    'For every device, say what it does for the meaning.',
    'Quote the line you are discussing.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is a stanza?',
      steps: [
        'It is a structural part of a poem.',
      ],
      answer: 'A group of lines, set apart from the next group.',
    },
    {
      level: 4,
      ask: 'A poem about a funeral repeats one line at the end of every '
        + 'stanza. What does the repetition do?',
      steps: [
        'Repetition brings the reader back to the same point.',
        'In a funeral poem that mirrors how grief works.',
      ],
      answer: 'It keeps returning the reader to the loss, '
        + 'as mourning returns to it, '
        + 'so the form makes the reader experience the subject.',
    },
    {
      level: 5,
      ask: 'Why is "the poem has alliteration in line three" '
        + 'worth almost no marks?',
      steps: [
        'It names a device and stops.',
        'The question asks what the device achieves.',
        'A device does different things in different poems.',
      ],
      answer: 'Because naming a device is not reading a poem. '
        + 'The marks are for what the alliteration does there: '
        + 'what it makes the line sound like, and why that suits the '
        + 'meaning.',
    },
  ],

  traps: [
    {
      mistake: 'Listing devices without linking them to the meaning.',
      why: 'The same device does different work in different poems. '
        + 'Say what it does here.',
    },
    {
      mistake: 'Not reading the poem aloud.',
      why: 'Rhythm, rhyme and repetition exist in sound '
        + 'and are invisible on a silent page.',
    },
    {
      mistake: 'Treating the persona as the poet.',
      why: 'The voice may be a child, a soldier or a river. '
        + 'Read who is speaking.',
    },
    {
      mistake: 'Explaining what the poem means line by line only.',
      why: 'A paraphrase is a first step. '
        + 'The question wants how the poem works.',
    },
  ],

  extension:
    'Free verse has no regular rhyme or metre, '
    + 'and that is itself a choice. '
    + 'Where there is no pattern, '
    + 'the line breaks and the few repetitions carry more weight, '
    + 'because they are the only structure there is.',

  questions: [
    {
      id: 'poe-1',
      ask: 'What should you do first with a poem?',
      kind: 'choice',
      options: [
        'Read it aloud and work out what is happening',
        'Count the devices',
        'Find the rhyme scheme',
      ],
      answer: 'Read it aloud and work out what is happening',
      teach: 'The devices can only be explained once you know what they '
        + 'are serving.',
      level: 3,
    },
    {
      id: 'poe-2',
      ask: 'The persona of a poem is:',
      kind: 'choice',
      options: [
        'the voice speaking in it',
        'always the poet',
        'the person it is about',
      ],
      answer: 'the voice speaking in it',
      teach: 'It may be a child, a soldier, a river or a dead man.',
      level: 4,
    },
    {
      id: 'poe-3',
      ask: 'What earns the marks in a poetry question?',
      kind: 'choice',
      options: [
        'Linking a device to what it does for the meaning',
        'Naming every device present',
        'Paraphrasing each line',
      ],
      answer: 'Linking a device to what it does for the meaning',
      teach: 'Form and meaning are one answer, not two.',
      level: 5,
    },
  ],
})

/* ── argumentative and expository essays ───────────────────────────── */

teach({
  topicId: 'argumentative',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An argumentative essay takes a side and defends it. '
      + 'An expository essay explains something without taking a side. '
      + 'In an argument, each paragraph is one reason, '
      + 'with evidence, '
      + 'and one paragraph answers the strongest objection. '
      + 'Put your strongest reason last.',
    method: [
      'Decide your position and write it in one sentence.',
      'One reason per paragraph, with evidence.',
      'Answer the strongest objection, not the weakest.',
    ],
  },

  idea:
    'An argumentative essay states a position and supports it. '
    + 'The introduction says what you are arguing. '
    + 'Each body paragraph gives one reason, '
    + 'with a reason and evidence for it. '
    + 'One paragraph states the strongest objection and answers it. '
    + 'The conclusion restates the position, '
    + 'and adds nothing new. '
    + 'An expository essay explains instead: '
    + 'how something works, what caused something, '
    + 'how two things compare. '
    + 'It is organised by the subject rather than by strength of argument, '
    + 'and it takes no side.',

  mechanism:
    'Two decisions shape an argumentative essay '
    + 'and both are made before the writing starts. '
    + 'The first is the order of the reasons, '
    + 'and the rule is to end strong. '
    + 'A reader remembers the last thing they read, '
    + 'so the strongest reason goes in the final body paragraph, '
    + 'the second strongest first, '
    + 'and anything weak in the middle where it does least harm. '
    + 'Starting with your best point and declining '
    + 'leaves the reader at the weakest part of your case. '
    + 'The second decision is whether to admit the other side, '
    + 'and learners get this exactly backwards. '
    + 'They leave out the objection, '
    + 'believing that mentioning it helps the opponent. '
    + 'But the examiner knows the objection, '
    + 'and an essay that never mentions it '
    + 'reads as an essay that cannot answer it. '
    + 'Stating it and answering it is the strongest thing in the essay, '
    + 'and admitting a true fact while showing it is outweighed '
    + 'costs nothing and gains credit. '
    + 'The difference from an expository essay matters too, '
    + 'because the plans are different shapes. '
    + 'An argument is ordered by strength. '
    + 'An exposition is ordered by the subject: '
    + 'stages in sequence, causes then effects, '
    + 'or one point of comparison per paragraph. '
    + 'Writing an argument when the question asked you to explain '
    + 'loses marks even if every sentence is good, '
    + 'so the first thing to read is which one is wanted.',

  recap:
    'You can plan an essay with paragraphs that link, '
    + 'and you have argued a side in a debate. '
    + 'This puts the debate on paper, '
    + 'where the order of the reasons is visible and marked.',

  method: [
    'Read the question and decide whether it wants an argument or an '
      + 'explanation.',
    'For an argument, write your position in one sentence.',
    'List your reasons.',
    'Find evidence for each.',
    'Order them: second strongest first, strongest last.',
    'Write the strongest objection and your answer to it.',
    'Write one paragraph per reason.',
    'Conclude by restating the position, adding nothing new.',
    'For an exposition, order by the subject instead and take no side.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which is expository and which argumentative? '
        + '(a) "How a bill becomes law." '
        + '(b) "School uniform should be compulsory."',
      steps: [
        'One explains, one takes a side.',
      ],
      answer: '(a) expository, (b) argumentative.',
    },
    {
      level: 4,
      ask: 'Where should your strongest reason go, and why?',
      steps: [
        'A reader remembers what they read last.',
        'So the end is the strongest position.',
      ],
      answer: 'In the final body paragraph, '
        + 'because the last reason read is the one the reader keeps.',
    },
    {
      level: 5,
      ask: 'Why should an argumentative essay state the strongest '
        + 'objection against it?',
      steps: [
        'The examiner already knows the objection.',
        'An essay that never mentions it looks unable to answer it.',
        'Stating and answering it is the strongest part of the case.',
      ],
      answer: 'Because the reader has already thought of it. '
        + 'Leaving it out reads as having no answer, '
        + 'while stating and answering it is the strongest thing you can '
        + 'do.',
    },
  ],

  traps: [
    {
      mistake: 'Writing an argument when the question asked you to '
        + 'explain.',
      why: 'An expository question wants no side taken. '
        + 'Read which one is wanted first.',
    },
    {
      mistake: 'Leaving out the objection.',
      why: 'The reader knows it. '
        + 'Silence reads as having no answer.',
    },
    {
      mistake: 'Starting with your best point.',
      why: 'The essay then declines, '
        + 'and leaves the reader at your weakest.',
    },
    {
      mistake: 'Introducing a new reason in the conclusion.',
      why: 'The conclusion restates. '
        + 'A new point there has no paragraph to support it.',
    },
  ],

  extension:
    'A counter argument can be answered in three ways: '
    + 'the fact is wrong, '
    + 'the fact is right but does not lead where they claim, '
    + 'or it is right and outweighed. '
    + 'The third is the most useful and the least used.',

  questions: [
    {
      id: 'arg-1',
      ask: 'How many reasons should one paragraph carry?',
      kind: 'choice',
      options: ['One', 'Three', 'As many as fit'],
      answer: 'One',
      teach: 'That is how a marker finds your reasons.',
      level: 3,
    },
    {
      id: 'arg-2',
      ask: 'An expository essay is organised by:',
      kind: 'choice',
      options: [
        'the subject',
        'the strength of the reasons',
        'the length of the paragraphs',
      ],
      answer: 'the subject',
      teach: 'Stages in order, causes then effects, '
        + 'or one point of comparison per paragraph.',
      level: 4,
    },
    {
      id: 'arg-3',
      ask: 'Which objection should you answer?',
      kind: 'choice',
      options: ['The strongest', 'The weakest', 'None'],
      answer: 'The strongest',
      teach: 'The reader has already thought of it.',
      level: 5,
    },
  ],
})

/* ── reports and articles ─────────────────────────────────────────── */

teach({
  topicId: 'report-article',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A report tells what happened, factually, '
      + 'for somebody who was not there: '
      + 'what, where, when, who, how, and what should follow. '
      + 'An article is written for a named audience '
      + 'and may have a voice and an opinion. '
      + 'A report has a title and headings; an article has a headline.',
    method: [
      'For a report, answer what, where, when, who and how, in that order.',
      'Keep your own feelings out of a report.',
      'For an article, decide the audience before the first sentence.',
    ],
  },

  idea:
    'A report gives an account of an event or a matter investigated. '
    + 'It is headed with a title saying what it reports, '
    + 'and it often has the writer’s name and the date. '
    + 'It states the facts in order: '
    + 'what happened, where, when, who was involved, how it happened, '
    + 'what was done, '
    + 'and what is recommended. '
    + 'It is written in the past tense, in the third person, '
    + 'and it keeps the writer’s feelings out. '
    + 'An article is written for a particular readership, '
    + 'in a magazine or a newspaper. '
    + 'It has a headline, an opening that makes the reader continue, '
    + 'and it may carry opinion and a personal voice.',

  mechanism:
    'A report is defined by its reader, '
    + 'and that single fact decides everything in it. '
    + 'You are writing for somebody who was not there '
    + 'and who has to act on what you tell them. '
    + 'So anything they would need to know goes in, '
    + 'in the order they need it, '
    + 'and anything that is only your feeling about it stays out, '
    + 'because they cannot act on your feelings '
    + 'and including them makes the rest less believable. '
    + 'This is also why a report is useful even when nothing dramatic '
    + 'happened: '
    + 'the reader learns what the situation is. '
    + 'The test of a report is whether a person who was absent '
    + 'could now explain the event to a third person. '
    + 'If something is missing from your account, '
    + 'they will have to guess, '
    + 'and a guess in a report is worse than a gap. '
    + 'An article has a different reader and therefore different rules. '
    + 'You choose who you are writing for '
    + 'and every choice follows from it: '
    + 'an article on the same flood '
    + 'reads one way for the pupils of your school '
    + 'and another for the district assembly, '
    + 'and both can be good. '
    + 'The opening carries far more weight than in a report, '
    + 'because nobody has to read an article, '
    + 'so the first sentence has to earn the second. '
    + 'And opinion is allowed, '
    + 'which is exactly the thing a report forbids, '
    + 'so writing one when the other was asked for loses marks on form '
    + 'alone.',

  recap:
    'You can write a formal letter and a summary. '
    + 'A report is the same discipline applied to an event: '
    + 'facts, in order, for a reader who was not present.',

  method: [
    'Decide whether a report or an article was asked for.',
    'For a report, write a title saying what it reports.',
    'Add your name and the date.',
    'State what happened, where and when.',
    'Say who was involved and how it happened.',
    'Say what action was taken.',
    'End with recommendations if asked for.',
    'Use the past tense and the third person; keep feelings out.',
    'For an article, name your audience, then write a headline and an '
      + 'opening that earns the next sentence.',
  ],

  worked: [
    {
      level: 3,
      ask: 'In which person and tense is a report written?',
      steps: [
        'It records what happened, for somebody else.',
      ],
      answer: 'The third person and the past tense.',
    },
    {
      level: 4,
      ask: 'What is the test of whether a report is complete?',
      steps: [
        'The reader was not there.',
        'They must be able to understand it without asking you.',
      ],
      answer: 'Whether somebody who was absent could now explain the event '
        + 'to a third person using your report alone.',
    },
    {
      level: 5,
      ask: 'Why are the writer’s feelings left out of a report '
        + 'but allowed in an article?',
      steps: [
        'A report is for a reader who must act on the facts.',
        'Feelings cannot be acted on and weaken the rest.',
        'An article is read by choice, for interest.',
        'A voice and an opinion are part of why it is read.',
      ],
      answer: 'Because a report is for somebody who has to act on it, '
        + 'and feelings cannot be acted on. '
        + 'An article is read by choice, '
        + 'so a voice and an opinion are part of what makes it worth '
        + 'reading.',
    },
  ],

  traps: [
    {
      mistake: 'Putting your own feelings in a report.',
      why: 'The reader has to act on facts, '
        + 'and opinion makes the facts less believable.',
    },
    {
      mistake: 'Writing a report in the first person.',
      why: 'The convention is the third person and the past tense.',
    },
    {
      mistake: 'Writing an article with no audience in mind.',
      why: 'Every choice in an article follows from who is reading it.',
    },
    {
      mistake: 'Guessing at a fact you do not have.',
      why: 'A gap is honest; a guess in a report is worse than a gap.',
    },
  ],

  extension:
    'A minute of a meeting is a report with a stricter form: '
    + 'who attended, what was decided, who is to do it, and by when. '
    + 'It is judged entirely on whether somebody absent '
    + 'can carry out their part from it.',

  questions: [
    {
      id: 'rep-1',
      ask: 'What does a report begin with?',
      kind: 'choice',
      options: [
        'A title saying what it reports',
        'A headline to attract readers',
        'An opinion',
      ],
      answer: 'A title saying what it reports',
      teach: 'The headline belongs to an article.',
      level: 3,
    },
    {
      id: 'rep-2',
      ask: 'What must you decide before writing an article?',
      kind: 'choice',
      options: [
        'Who will read it',
        'How long it will be',
        'What the title page looks like',
      ],
      answer: 'Who will read it',
      teach: 'Every other choice follows from the audience.',
      level: 4,
    },
    {
      id: 'rep-3',
      ask: 'Why does a report leave out the writer’s feelings?',
      kind: 'choice',
      options: [
        'The reader has to act on facts',
        'Feelings take up space',
        'Reports are always short',
      ],
      answer: 'The reader has to act on facts',
      teach: 'And opinion makes the facts around it less believable.',
      level: 5,
    },
  ],
})

/* ── direct and indirect speech ──────────────────────────────────── */

teach({
  topicId: 'direct-indirect',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Direct speech gives the exact words in quotation marks. '
      + 'Indirect speech reports them without quoting, '
      + 'and three things change: '
      + 'the tense moves back one step, '
      + 'the pronouns change to match the new speaker, '
      + 'and words about time and place change too.',
    method: [
      'Move the tense back one step.',
      'Change every pronoun to match who is now speaking.',
      'Change today, here, this and now to that day, there, that, then.',
    ],
  },

  idea:
    'Direct speech quotes exactly: '
    + 'She said, "I am tired." '
    + 'Indirect speech reports: '
    + 'She said that she was tired. '
    + 'Three kinds of change are needed. '
    + 'The tense moves back: '
    + 'am becomes was, went becomes had gone, will becomes would. '
    + 'The pronouns change to match the new speaker: '
    + 'I becomes he or she, my becomes his or her, we becomes they. '
    + 'And words tied to the moment of speaking change: '
    + 'now becomes then, today becomes that day, '
    + 'here becomes there, this becomes that, '
    + 'tomorrow becomes the next day, '
    + 'yesterday becomes the day before. '
    + 'A question becomes a reported question with asked and no question '
    + 'mark, '
    + 'and a command becomes told plus to.',

  mechanism:
    'The three changes look like three lists to memorise '
    + 'and they are one idea: '
    + 'you are no longer standing where the speaker stood. '
    + 'When Ama says "I am tired, here, today", '
    + 'every one of those words takes its meaning from where and when SHE '
    + 'is. '
    + 'I means Ama. Here means where she is. Today means the day she spoke. '
    + 'Now you are reporting it, somewhere else, later, '
    + 'and if you keep those words they point at you instead of her. '
    + 'So each one has to be replaced by a version that points back at her '
    + 'position. '
    + 'I becomes she. Here becomes there. Today becomes that day. '
    + 'And the present tense becomes the past, '
    + 'because her being tired was present for her and is past for you. '
    + 'Seen that way there is nothing to remember. '
    + 'You ask, for each word: '
    + 'does this depend on who is speaking, or where, or when? '
    + 'If it does, it has to move. '
    + 'There is one case where the tense does not move, '
    + 'and it follows from the same reasoning: '
    + 'a statement that is still true. '
    + '"Water boils at 100 degrees" can be reported as '
    + 'he said that water boils at 100 degrees, '
    + 'because it was not only true for him then. '
    + 'And questions need one more change learners forget: '
    + 'a reported question is not a question any more, '
    + 'so the word order goes back to normal and the question mark goes.',

  recap:
    'You know the tenses and you can punctuate direct speech. '
    + 'This reports what somebody said '
    + 'from a different place and a different time.',

  method: [
    'Read the direct speech and note who is speaking and when.',
    'Choose the reporting verb: said, told, asked, ordered.',
    'Move the tense back one step.',
    'Change every pronoun to match the new speaker.',
    'Change words tied to the moment: now, today, here, this, tomorrow.',
    'For a question, use asked, normal word order, and no question mark.',
    'For a command, use told plus to.',
    'Remove the quotation marks.',
    'Read it back and check each word points at the right person and '
      + 'time.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Report: She said, "I am ready."',
      steps: [
        'Tense back: am becomes was.',
        'Pronoun: I becomes she.',
      ],
      answer: 'She said that she was ready.',
    },
    {
      level: 4,
      ask: 'Report: He said, "I will come here tomorrow."',
      steps: [
        'will becomes would.',
        'I becomes he.',
        'here becomes there.',
        'tomorrow becomes the next day.',
      ],
      answer: 'He said that he would go there the next day.',
    },
    {
      level: 5,
      ask: 'Report: She asked, "Where are you going?" '
        + 'And explain the changes.',
      steps: [
        'Reporting verb for a question is asked.',
        'are going becomes was going.',
        'you becomes I or he, depending on who was addressed.',
        'A reported question is not a question, so the order is normal '
          + 'and the mark goes.',
      ],
      answer: 'She asked where I was going. '
        + 'The tense moved back, the pronoun changed to the person '
        + 'addressed, '
        + 'and the word order became normal with no question mark, '
        + 'because it is no longer a question.',
    },
  ],

  traps: [
    {
      mistake: 'Keeping the question mark in a reported question.',
      why: 'It is no longer a question. '
        + 'The word order also returns to normal.',
    },
    {
      mistake: 'Leaving here, today or this unchanged.',
      why: 'They point at the speaker’s place and time. '
        + 'Reported from elsewhere they point at you.',
    },
    {
      mistake: 'Changing the tense of something still true.',
      why: 'Water boils at 100 degrees now as well. '
        + 'The tense may stay.',
    },
    {
      mistake: 'Using said for a command.',
      why: 'A command is reported with told plus to: '
        + 'he told me to wait.',
    },
  ],

  extension:
    'Reported speech is how evidence is given in a court, '
    + 'in a news report and in a minute of a meeting. '
    + 'In every one of those, '
    + 'the accuracy of the pronoun and the time word '
    + 'decides whether the report means what the speaker meant.',

  questions: [
    {
      id: 'spe-1',
      ask: 'Report: He said, "I am busy."',
      kind: 'choice',
      options: [
        'He said that he was busy.',
        'He said that I am busy.',
        'He said that he is busy.',
      ],
      answer: 'He said that he was busy.',
      teach: 'The pronoun and the tense both change.',
      level: 3,
    },
    {
      id: 'spe-2',
      ask: 'In indirect speech, "tomorrow" becomes:',
      kind: 'choice',
      options: ['the next day', 'tomorrow', 'that day'],
      answer: 'the next day',
      teach: 'Today becomes that day, and tomorrow becomes the next day.',
      level: 4,
    },
    {
      id: 'spe-3',
      ask: 'Why do pronouns and time words have to change?',
      kind: 'choice',
      options: [
        'They point at the speaker’s own position, not yours',
        'To make the sentence longer',
        'Because the tense changed',
      ],
      answer: 'They point at the speaker’s own position, not yours',
      teach: 'You are reporting from a different place and time.',
      level: 5,
    },
  ],
})
