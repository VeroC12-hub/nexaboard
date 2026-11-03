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

  why:
    'Two short pieces describe the same flood in Accra. '
    + 'One says the water rose to the window '
    + 'and the family waited on the roof for nine hours. '
    + 'The other says that once again '
    + 'the drains nobody cleared '
    + 'have done exactly what everybody said they would. '
    + 'Both are about the flood. '
    + 'One wants you to feel something '
    + 'and the other wants you to blame somebody. '
    + 'A question asks what the writer’s attitude is, '
    + 'and the answer "sad" earns almost nothing. '
    + 'How do you name a writer’s attitude, '
    + 'and prove it from the words on the page?',

  notation:
    'A quotation from the passage is copied exactly '
    + 'and put inside speaking marks, '
    + 'and three dots stand for words left out of the middle. '
    + 'A line reference goes in brackets after it, as (line 7). '
    + 'The three words of this topic '
    + 'cannot be swapped for one another in an answer. '
    + 'Purpose is what the writer set out to do. '
    + 'Tone is the writer’s attitude. '
    + 'Mood is what the reader is made to feel. '
    + 'Answering a question about tone with a word for mood '
    + 'is the commonest way to lose a mark.',

  idea:
    'Purpose, tone and mood are three different questions about one '
    + 'passage. '
    + 'Purpose is what the writer set out to do, '
    + 'tone is their attitude to the subject, '
    + 'and mood is what the reader is made to feel, '
    + 'which is not always the same thing. '
    + 'All three are answered from the page '
    + 'rather than from how the passage struck you.',

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
    'Some questions are answered by a passage in its own words. '
    + 'If it says the market closed at noon, '
    + 'a question about when it closed '
    + 'is answered by putting your finger on that line. '
    + 'Other questions are answered nowhere in the words, '
    + 'and you work them out from what is there. '
    + 'If a passage says a man counted his coins twice '
    + 'before buying one loaf, '
    + 'nothing says he is poor, and you can tell. '
    + 'Single words carry attitude as well. '
    + '"The crowd gathered" and "the mob gathered" '
    + 'describe the same people and do not feel the same. '
    + 'This topic asks you to name that attitude '
    + 'and to prove it from the text.',

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

  figure: {
    alt: 'The plain sentence the minister explained the delay shown in a '
      + 'dashed box as the version that was available. Beneath it the '
      + 'sentence the writer chose, the minister offered yet another '
      + 'explanation for the delay, with offered and yet another each '
      + 'ringed in red as the two words carrying the irritation. At the '
      + 'bottom, a report of a protest with the words saying what it was '
      + 'about boxed out, because what is never said is evidence too.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">every sentence had a plain version, and it was not used</text>'
      + '<text x="30" y="60" font-size="13" text-anchor="start" fill="currentColor" stroke="none">the plain version, which was available</text>'
      + '<path d="M 24 72 H 440 V 110 H 24 Z" stroke-dasharray="7 6" stroke-width="2"/>'
      + '<text x="232" y="96" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">The minister explained the delay.</text>'
      + '<text x="30" y="150" font-size="13" text-anchor="start" fill="#c8433a" stroke="none">what the writer chose instead</text>'
      + '<path d="M 24 162 H 616 V 200 H 24 Z" stroke="#c8433a"/>'
      + '<text x="44" y="186" font-size="16" text-anchor="start" fill="currentColor" stroke="none">The minister</text>'
      + '<text x="156" y="186" font-size="16" text-anchor="start" fill="#c8433a" stroke="none">offered</text>'
      + '<text x="230" y="186" font-size="16" text-anchor="start" fill="#c8433a" stroke="none">yet another</text>'
      + '<text x="344" y="186" font-size="16" text-anchor="start" fill="currentColor" stroke="none">explanation for the delay.</text>'
      + '<path d="M 150 166 H 222 V 196 H 150 Z" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 226 166 H 338 V 196 H 226 Z" stroke="#c8433a" stroke-width="2"/>'
      + '<text x="244" y="224" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">the same event reported, and the irritation is in these two words</text>'
      + '<path d="M 24 264 H 616" stroke-dasharray="7 6" stroke-width="1.5"/>'
      + '<text x="30" y="300" font-size="13" text-anchor="start" fill="currentColor" stroke="none">and what is never said is evidence too</text>'
      + '<path d="M 24 312 H 616 V 352 H 24 Z" stroke-width="2"/>'
      + '<text x="44" y="338" font-size="15" text-anchor="start" fill="currentColor" stroke="none">A report of a protest that never says</text>'
      + '<path d="M 356 318 H 486 V 346 H 356 Z" stroke="#c8433a" stroke-dasharray="6 5" stroke-width="2"/>'
      + '<text x="421" y="338" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">what it was about</text>'
      + '<text x="496" y="338" font-size="15" text-anchor="start" fill="currentColor" stroke="none">has taken a side.</text>'
      + '<text x="320" y="384" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">so point at the word, and the tone stops being an opinion</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Purpose, tone and mood, and where the evidence for each '
        + 'sits',
      columns: [
        'Which',
        'What it is',
        'The question to ask',
        'Where the evidence is',
      ],
      rows: [
        [
          'Purpose',
          'What the writer set out to do',
          'What did they want the reader to do?',
          'Whether reasons are given, and whether objections are answered',
        ],
        [
          'Tone',
          'The writer’s attitude to the subject',
          'Which word did they choose instead of the plain one?',
          'In the words chosen, and in what is left out',
        ],
        [
          'Mood',
          'What the reader is made to feel',
          'How does this leave me?',
          'In the whole effect, which need not match the tone',
        ],
      ],
      note: 'An answer saying the tone is critical is a guess. An answer '
        + 'saying the tone is critical, shown by yet another, which '
        + 'suggests the explanations have become routine, is a reading.',
    },
    {
      caption: 'The purposes a passage can have, and how each one shows',
      columns: ['Purpose', 'What the writer wants', 'How you can tell'],
      rows: [
        [
          'Inform',
          'The reader to know something',
          'Facts given, with no conclusion pressed',
        ],
        [
          'Explain',
          'The reader to understand how or why',
          'Causes and steps, set out in order',
        ],
        [
          'Persuade',
          'The reader to change their mind',
          'Reasons given, and objections answered',
        ],
        [
          'Entertain',
          'The reader to enjoy it',
          'Humour, surprise, or a story carried for its own sake',
        ],
        [
          'Warn',
          'The reader to be careful',
          'A consequence held up where it can be seen',
        ],
        [
          'Criticise',
          'The reader to think less of something',
          'Loaded words where plain ones were available',
        ],
      ],
      note: 'A passage can do two of these at once, which is why the '
        + 'question worth asking is what it mainly wanted.',
    },
  ],
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

  why:
    'A poem about a dead father '
    + 'has the line "the drum has no skin now". '
    + 'Nothing in it is literally true. '
    + 'A drum is mentioned and no drum has died. '
    + 'A boy in class says it is a metaphor, '
    + 'which is correct, '
    + 'and he gets almost no mark for it. '
    + 'The question asked what the line achieves. '
    + 'Naming the tool is not saying what the tool did. '
    + 'So what is a line like that actually doing, '
    + 'and how do you say so?',

  notation:
    'A poem is set out in lines, '
    + 'and a group of lines is a stanza, '
    + 'which is not called a paragraph. '
    + 'Lines are counted from the top of the whole poem, '
    + 'so a quotation is referenced as (line 12). '
    + 'A rhyme scheme is written as letters, '
    + 'one letter for each line, '
    + 'with the same letter where two lines rhyme, '
    + 'so abab means the first and third rhyme '
    + 'and the second and fourth do. '
    + 'The voice speaking in a poem is the persona, '
    + 'and it is not automatically the poet, '
    + 'so writing "the poet feels" where the persona is a child '
    + 'is the commonest way to lose a mark.',

  idea:
    'A poem says something, and says it in a particular shape. '
    + 'The devices that make the shape are few, '
    + 'and naming one earns almost nothing on its own: '
    + 'a question about a device always asks what it is doing. '
    + 'The theme is what the poem is about underneath its subject, '
    + 'and the persona is the voice speaking, '
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
    'A figure of speech says a thing '
    + 'in a way that is not literally true, '
    + 'so that the reader sees it better. '
    + '"Her voice is a bell" is a metaphor, '
    + 'because it calls one thing another. '
    + '"Her voice is like a bell" is a simile, '
    + 'because it uses the word like. '
    + '"The wind pushed the door" is personification, '
    + 'because the wind is given something a person does. '
    + 'Naming the figure is the first step '
    + 'and it is only the first step. '
    + 'This topic puts several figures to work at once, '
    + 'and adds the sound of the words to the list.',

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

  figure: {
    alt: 'Two orders of work side by side. In red, hunting for devices '
      + 'first gives there is alliteration in line three and there is a '
      + 'simile in line six, which is true and earns almost no marks '
      + 'because nothing is doing anything. In green, reading aloud and '
      + 'saying in plain words what happens comes first, so that the long '
      + 'vowels and the repeated line then have work to do.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">the order of work decides whether the devices mean anything</text>'
      + '<text x="160" y="58" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">spotting first</text>'
      + '<path d="M 20 72 H 300 V 116 H 20 Z" stroke="#c8433a"/>'
      + '<text x="160" y="99" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">hunt for devices</text>'
      + '<path d="M 160 116 V 132" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 160 142 L 152 124 L 168 124 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 20 144 H 300 V 200 H 20 Z" stroke="#c8433a"/>'
      + '<text x="160" y="168" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">there is alliteration in line three,</text>'
      + '<text x="160" y="188" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">there is a simile in line six</text>'
      + '<path d="M 160 200 V 216" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 160 226 L 152 208 L 168 208 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 20 228 H 300 V 284 H 20 Z" stroke="#c8433a"/>'
      + '<text x="160" y="252" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">all true, and almost no marks:</text>'
      + '<text x="160" y="272" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">nothing is doing anything</text>'
      + '<text x="480" y="58" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">meaning first</text>'
      + '<path d="M 340 72 H 620 V 116 H 340 Z" stroke="#0f8a4d"/>'
      + '<text x="480" y="92" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">read it aloud, twice, and say</text>'
      + '<text x="480" y="110" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">in plain words what happens</text>'
      + '<path d="M 480 116 V 132" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 480 142 L 472 124 L 488 124 Z" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 340 144 H 620 V 200 H 340 Z" stroke="#0f8a4d"/>'
      + '<text x="480" y="168" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">it is a slow, heavy journey,</text>'
      + '<text x="480" y="188" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">and the speaker is weary of it</text>'
      + '<path d="M 480 200 V 216" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 480 226 L 472 208 L 488 208 Z" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 340 228 H 620 V 284 H 340 Z" stroke="#0f8a4d"/>'
      + '<text x="480" y="252" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">now the long vowels and the</text>'
      + '<text x="480" y="272" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">repeated line have work to do</text>'
      + '<text x="320" y="326" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the same device in a poem about a storm does something else,</text>'
      + '<text x="320" y="348" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">so form and meaning are never two separate answers</text>'
      + '<text x="320" y="382" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">and the persona is not the poet: it may be a child, a soldier, or a river</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each device, what it is, and the kind of thing to say it '
        + 'does',
      columns: ['Device', 'What it is', 'What to say it is doing'],
      rows: [
        [
          'Stanza',
          'A group of lines',
          'Where the poem turns, and what each group holds',
        ],
        [
          'Rhyme',
          'Matching sounds at the ends of lines',
          'Binds lines together, and can make an ending feel settled',
        ],
        [
          'Rhythm',
          'The beat of the lines',
          'Fast or slow, so the reader feels the subject',
        ],
        [
          'Repetition',
          'A word or a line brought back',
          'Insists, or wears the reader down, depending on the poem',
        ],
        [
          'Alliteration',
          'The same first consonant repeated',
          'Holds words together so they are heard as one',
        ],
        [
          'Onomatopoeia',
          'A word that sounds like its meaning',
          'Puts the sound itself into the poem',
        ],
        [
          'Imagery',
          'The pictures the poem makes',
          'What the reader sees, and what seeing it makes them feel',
        ],
      ],
      note: 'The same device does different work in different poems, so '
        + 'work out what the poem is about first and the devices will '
        + 'have something to be doing.',
    },
  ],
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

  why:
    'A debate is held at school '
    + 'on whether phones should be allowed in class. '
    + 'A girl speaks for four minutes without notes '
    + 'and the hall claps. '
    + 'She is asked to write the same case as an essay, '
    + 'and hands in one long block that goes round in circles. '
    + 'It is marked down. '
    + 'Nothing she wrote was untrue, '
    + 'and all the same reasons are in there. '
    + 'Speaking let her change direction '
    + 'whenever the room reacted. '
    + 'Paper does not. '
    + 'What order does a written case have to be put in, '
    + 'and why does the order itself carry marks?',

  idea:
    'An argumentative essay states a position and supports it. '
    + 'The introduction says what you are arguing. '
    + 'Each body paragraph gives one reason, '
    + 'with a reason and evidence for it. '
    + 'One paragraph states the strongest objection and answers it. '
    + 'The conclusion restates the position, '
    + 'and adds nothing new. '
    + 'An expository essay explains instead, and takes no side, '
    + 'so the two are built to different plans.',

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
    'An essay is planned before it is written. '
    + 'Decide the points you will make, '
    + 'put them in an order, '
    + 'and give each one its own paragraph. '
    + 'A paragraph opens with a sentence saying what it is about, '
    + 'and the sentences after it stay on that one thing. '
    + 'Paragraphs are tied to each other '
    + 'with a few words at the start: '
    + '"another reason", "on the other hand", "because of this". '
    + 'A reader who can see the joins can follow a case '
    + 'even while disagreeing with it. '
    + 'This topic puts a debate on paper, '
    + 'where that order is visible and is marked.',

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

  figure: {
    alt: 'The reasons of an essay drawn as bars whose height is their '
      + 'strength. In red, the best point comes first and the case '
      + 'declines, so the reader leaves at the weakest part of it. In '
      + 'green, the second strongest comes first, the weak one is buried '
      + 'in the middle, and the strongest comes last, so the reader leaves '
      + 'at the strongest part.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">the reader remembers the last thing they read</text>'
      + '<text x="20" y="54" font-size="14" text-anchor="start" fill="#c8433a" stroke="none">best point first, and declining from there</text>'
      + '<path d="M 30 70 H 114 V 150 H 30 Z" stroke="#c8433a"/>'
      + '<text x="72" y="168" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">strongest</text>'
      + '<path d="M 142 86 H 226 V 150 H 142 Z" stroke="#c8433a"/>'
      + '<text x="184" y="168" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">strong</text>'
      + '<path d="M 254 102 H 338 V 150 H 254 Z" stroke="#c8433a"/>'
      + '<text x="296" y="168" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">middling</text>'
      + '<path d="M 366 118 H 450 V 150 H 366 Z" stroke="#c8433a"/>'
      + '<text x="408" y="168" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">weak</text>'
      + '<path d="M 492 110 H 516" stroke="#c8433a" stroke-width="2"/>'
      + '<path d="M 526 110 L 508 101 L 508 119 Z" fill="#c8433a" stroke="none"/>'
      + '<text x="582" y="88" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">and they leave at</text>'
      + '<text x="582" y="106" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">the weakest part</text>'
      + '<text x="582" y="124" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">of your case</text>'
      + '<text x="20" y="204" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">second best first, weak in the middle, best last</text>'
      + '<path d="M 30 236 H 114 V 300 H 30 Z" stroke="#0f8a4d"/>'
      + '<text x="72" y="318" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">strong</text>'
      + '<path d="M 142 268 H 226 V 300 H 142 Z" stroke="#0f8a4d"/>'
      + '<text x="184" y="318" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">weak</text>'
      + '<path d="M 254 252 H 338 V 300 H 254 Z" stroke="#0f8a4d"/>'
      + '<text x="296" y="318" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">middling</text>'
      + '<path d="M 366 220 H 450 V 300 H 366 Z" stroke="#0f8a4d"/>'
      + '<text x="408" y="318" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">strongest</text>'
      + '<path d="M 492 260 H 516" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 526 260 L 508 251 L 508 269 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="582" y="238" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">and they leave at</text>'
      + '<text x="582" y="256" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">the strongest part</text>'
      + '<text x="582" y="274" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">of your case</text>'
      + '<text x="320" y="358" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">and one paragraph states the strongest objection and answers it,</text>'
      + '<text x="320" y="380" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">because an essay that never mentions it reads as one that cannot</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'An argument and an exposition are built to different plans',
      columns: ['Question', 'An argumentative essay', 'An expository essay'],
      rows: [
        [
          'What it does',
          'States a position and supports it',
          'Explains how, or why, or how two things compare',
        ],
        [
          'Does it take a side?',
          'Yes, and says so in the introduction',
          'No',
        ],
        [
          'How it is ordered',
          'By the strength of the reasons',
          'By the subject itself',
        ],
        [
          'The objection paragraph',
          'Essential: state the strongest one and answer it',
          'Not needed, because there is no opponent',
        ],
        [
          'The conclusion',
          'Restates the position, and adds nothing new',
          'Draws the explanation together',
        ],
      ],
      note: 'Learners leave the objection out, believing that mentioning it '
        + 'helps the opponent. The examiner already knows it, so an essay '
        + 'that never mentions it reads as one that cannot answer it.',
    },
  ],
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

  why:
    'A fire breaks out in a school store room. '
    + 'The head teacher asks a prefect to write down what happened, '
    + 'for the education office, '
    + 'which will read it a week later. '
    + 'The prefect writes that it was very frightening, '
    + 'everybody was running everywhere, '
    + 'and somebody must have left something on. '
    + 'The office reads it and still does not know '
    + 'what time it started, who was there, or what was lost. '
    + 'Every word of it is honest. '
    + 'What does a reader who was not there actually need, '
    + 'and in what order?',

  notation:
    'A report carries a title at the top '
    + 'saying what it reports, '
    + 'and under that the writer’s name and the date, '
    + 'usually written as the day, the month and the year. '
    + 'The body is often broken up by small headings, '
    + 'and numbered points are allowed in a report '
    + 'where a letter would not allow them. '
    + 'A report is written in the past tense '
    + 'and in the third person, '
    + 'so it says "the prefects were called" '
    + 'and never "I called the prefects". '
    + 'Slipping into the first person '
    + 'is the commonest way to lose a mark.',

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
    + 'An article is written for a particular readership instead, '
    + 'and almost every rule changes with the reader.',

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
    'A formal letter has a fixed shape: '
    + 'your address, the date, '
    + 'the address you are writing to, a greeting, '
    + 'the matter set out in order, and a signing off. '
    + 'The shape is fixed so that a reader '
    + 'can find each part without hunting for it. '
    + 'A summary keeps only what matters. '
    + 'Read a passage, decide which points carry it, '
    + 'and write those in your own words with nothing added. '
    + 'Both of those are about serving a reader '
    + 'you cannot speak to. '
    + 'This topic applies the same discipline to an event: '
    + 'the facts, in order, for somebody who was not present.',

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

  figure: {
    alt: 'A report laid out on a page: a title saying what it reports, the '
      + 'writer’s name and the date, then the facts numbered in the order '
      + 'the reader needs them, from what happened through to what is '
      + 'recommended. A box holding how upsetting I found it is dashed in '
      + 'red and crossed out, because the reader cannot act on the '
      + 'writer’s feelings.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">a report is written for somebody who was not there</text>'
      + '<path d="M 110 42 H 420 V 324 H 110 Z" stroke-width="2"/>'
      + '<text x="265" y="68" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">REPORT ON THE FLOODING</text>'
      + '<path d="M 148 76 H 382" stroke="#0f8a4d" stroke-width="2"/>'
      + '<text x="265" y="96" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">by A. Mensah, 14 June</text>'
      + '<path d="M 126 114 H 404" stroke-width="2"/>'
      + '<text x="136" y="140" font-size="13" text-anchor="start" fill="currentColor" stroke="none">1  what happened</text>'
      + '<text x="136" y="164" font-size="13" text-anchor="start" fill="currentColor" stroke="none">2  where, and when</text>'
      + '<text x="136" y="188" font-size="13" text-anchor="start" fill="currentColor" stroke="none">3  who was involved</text>'
      + '<text x="136" y="212" font-size="13" text-anchor="start" fill="currentColor" stroke="none">4  how it happened</text>'
      + '<text x="136" y="236" font-size="13" text-anchor="start" fill="currentColor" stroke="none">5  what was done</text>'
      + '<text x="136" y="260" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">6  what is recommended</text>'
      + '<path d="M 136 282 H 394 V 312 H 136 Z" stroke="#c8433a" stroke-dasharray="6 5" stroke-width="2"/>'
      + '<text x="265" y="302" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">how upsetting I found it</text>'
      + '<path d="M 402 284 L 430 310" stroke="#c8433a" stroke-width="4"/>'
      + '<path d="M 430 284 L 402 310" stroke="#c8433a" stroke-width="4"/>'
      + '<text x="446" y="138" font-size="13" text-anchor="start" fill="currentColor" stroke="none">the facts in the order</text>'
      + '<text x="446" y="156" font-size="13" text-anchor="start" fill="currentColor" stroke="none">the reader needs them,</text>'
      + '<text x="446" y="174" font-size="13" text-anchor="start" fill="currentColor" stroke="none">in the third person</text>'
      + '<text x="446" y="192" font-size="13" text-anchor="start" fill="currentColor" stroke="none">and the past tense</text>'
      + '<text x="446" y="238" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">because the reader</text>'
      + '<text x="446" y="256" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">has to act on it</text>'
      + '<text x="446" y="298" font-size="13" text-anchor="start" fill="#c8433a" stroke="none">out: they cannot</text>'
      + '<text x="446" y="316" font-size="13" text-anchor="start" fill="#c8433a" stroke="none">act on your feelings</text>'
      + '<text x="320" y="358" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the test: could somebody who was absent now explain it to a third person?</text>'
      + '<text x="320" y="382" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">if something is missing they must guess, and a guess is worse than a gap</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'A report and an article differ because their readers differ',
      columns: ['Question', 'A report', 'An article'],
      rows: [
        [
          'Who reads it',
          'Somebody who was not there and has to act on it',
          'A readership you chose for yourself',
        ],
        [
          'Its heading',
          'A title saying what it reports',
          'A headline that makes them read on',
        ],
        [
          'Person and tense',
          'Third person, past tense',
          'Whatever suits that readership',
        ],
        [
          'Your own feelings',
          'Kept out: nobody can act on them',
          'Allowed, and often the whole point',
        ],
        [
          'How it ends',
          'With what was done and what is recommended',
          'However you choose to end it',
        ],
        [
          'The test of it',
          'Could an absent reader now explain it to a third person?',
          'Would your reader have kept reading?',
        ],
      ],
      note: 'A report is useful even when nothing dramatic happened, '
        + 'because the reader learns what the situation is. If something '
        + 'is missing they must guess, and a guess in a report is worse '
        + 'than a gap.',
    },
  ],
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

  why:
    'On Monday Ama tells you: '
    + '"I am coming here tomorrow." '
    + 'On Wednesday, somewhere else, '
    + 'your mother asks what Ama said. '
    + 'Repeat it word for word '
    + 'and you have said that Ama is coming to this place '
    + 'on Thursday, '
    + 'which is not what she meant at all. '
    + 'Every one of those words was hers '
    + 'and the message is now wrong. '
    + 'Which words have to change '
    + 'when what somebody said is moved '
    + 'to another time and another place, and why those ones?',

  notation:
    'Direct speech puts the exact words inside speaking marks, '
    + 'and the full stop, question mark or exclamation mark '
    + 'goes inside the closing mark, not after it. '
    + 'A comma comes before the opening mark '
    + 'when the saying words come first: '
    + 'She said, "I am tired." '
    + 'Indirect speech takes the speaking marks away altogether '
    + 'and usually puts the word that in their place, '
    + 'and nothing in it is punctuated as speech. '
    + 'Leaving the speaking marks on a reported sentence '
    + 'is the commonest way to lose a mark.',

  idea:
    'Direct speech quotes exactly: '
    + 'She said, "I am tired." '
    + 'Indirect speech reports: '
    + 'She said that she was tired. '
    + 'Three kinds of word have to change, '
    + 'and all three change for the same reason: '
    + 'the tense, the pronouns, '
    + 'and the words tied to the moment of speaking. '
    + 'A question and a command change in one further way each.',

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
    'A verb changes to say when something happened. '
    + '"I am tired" is now. '
    + '"I was tired" is finished. '
    + '"I will be tired" has not happened yet. '
    + 'Direct speech is the exact words somebody said. '
    + 'It is written inside speaking marks, '
    + 'with a comma before the opening mark '
    + 'and the end punctuation inside the closing one: '
    + 'She said, "I am tired." '
    + 'This topic keeps both of those '
    + 'and asks what has to happen to the words '
    + 'when the exact ones are not repeated.',

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

  figure: {
    alt: 'Ama drawn in Tamale on Tuesday saying I am tired, here, today, '
      + 'with the note that every one of those words takes its meaning '
      + 'from her. An arrow leads to the report, made later and somewhere '
      + 'else. Keeping the same words, shown dashed in red, makes them '
      + 'point at you; moving them to she was tired, there, that day, '
      + 'shown in green, makes them point back at her.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">you are no longer standing where the speaker stood</text>'
      + '<path d="M 24 60 H 266 V 108 H 24 Z" stroke="#0f8a4d"/>'
      + '<text x="145" y="90" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">I am tired, here, today</text>'
      + '<path d="M 145 108 V 126" stroke="#0f8a4d" stroke-width="2"/>'
      + '<circle cx="145" cy="140" r="14" stroke="currentColor"/>'
      + '<path d="M 145 154 V 182" stroke="currentColor"/>'
      + '<path d="M 130 166 H 160" stroke="currentColor"/>'
      + '<path d="M 145 182 L 134 204" stroke="currentColor"/>'
      + '<path d="M 145 182 L 156 204" stroke="currentColor"/>'
      + '<text x="145" y="236" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Ama, in Tamale,</text>'
      + '<text x="145" y="256" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">on Tuesday</text>'
      + '<text x="145" y="286" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">every one of those words</text>'
      + '<text x="145" y="304" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">takes its meaning from her</text>'
      + '<path d="M 286 180 H 352" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M 362 180 L 344 171 L 344 189 Z" fill="currentColor" stroke="none"/>'
      + '<text x="324" y="164" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">reported later,</text>'
      + '<text x="324" y="208" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">somewhere else</text>'
      + '<path d="M 374 60 H 616 V 108 H 374 Z" stroke="#c8433a" stroke-dasharray="6 5"/>'
      + '<text x="495" y="90" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">I am tired, here, today</text>'
      + '<text x="495" y="128" font-size="12" text-anchor="middle" fill="#c8433a" stroke="none">keep them and they point at you</text>'
      + '<path d="M 374 150 H 616 V 198 H 374 Z" stroke="#0f8a4d"/>'
      + '<text x="495" y="180" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">she was tired, there, that day</text>'
      + '<text x="495" y="218" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">move them and they point back at her</text>'
      + '<path d="M 374 174 C 326 174, 290 216, 202 206" stroke="#0f8a4d" stroke-width="2"/>'
      + '<path d="M 192 205 L 210 198 L 208 216 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="495" y="282" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">so ask of every word: does it</text>'
      + '<text x="495" y="300" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">depend on who is speaking,</text>'
      + '<text x="495" y="318" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">or where, or when?</text>'
      + '<text x="320" y="360" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">if it does, it has to move, and there is nothing else to remember</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What has to move, and what each word depended on',
      columns: [
        'Kind of word',
        'In direct speech',
        'In indirect speech',
        'What it depended on',
      ],
      rows: [
        ['Tense', 'I am tired', 'she was tired', 'Her present is your past'],
        [
          'Tense',
          'I went',
          'she had gone',
          'The same, one step further back',
        ],
        ['Pronoun', 'I, my, we', 'she, her, they', 'Who was speaking'],
        ['Place', 'here, this', 'there, that', 'Where she was standing'],
        ['Time', 'now, today', 'then, that day', 'When she spoke'],
        [
          'Time',
          'tomorrow, yesterday',
          'the next day, the day before',
          'The same',
        ],
      ],
      note: 'Ask of each word: does this depend on who is speaking, or '
        + 'where, or when? If it does, it has to move, and there is '
        + 'nothing else to remember.',
    },
    {
      caption: 'What a statement, a question and a command each become',
      columns: ['Direct speech', 'Indirect speech', 'What else changes'],
      rows: [
        [
          'She said, I am tired.',
          'She said that she was tired.',
          'Nothing besides',
        ],
        [
          'She asked, Are you ready?',
          'She asked whether he was ready.',
          'The question mark goes, and so does the inversion',
        ],
        [
          'She said, Close the door.',
          'She told him to close the door.',
          'Said becomes told, and the verb takes to',
        ],
      ],
      note: 'The quotation marks go in every case, because you are no '
        + 'longer quoting.',
    },
  ],
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
