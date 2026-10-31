/**
 * Stored lessons for Basic 5 Our World Our People, Ghanaian Language and
 * Computing.
 *
 * Written at about grade 5, with a `brief` form on every topic.
 *
 * The independence lesson gives dates and names that can be checked, and
 * says plainly where accounts differ, because a history lesson that hides
 * disagreement teaches the wrong thing about history.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── reading a map of Ghana ───────────────────────────────────────────────── */

teach({
  topicId: 'ghana-map',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A map has a key telling you what the symbols mean, '
      + 'and a north arrow telling you which way it is oriented. '
      + 'Read the key first.',
    method: [
      'Read the key before anything else.',
      'Find north, and work out the other directions from it.',
      'Use the scale to turn distance on paper into real distance.',
    ],
  },

  idea:
    'A map of Ghana uses symbols: a dot for a town, a line for a river, '
    + 'a different line for a road or a border. '
    + 'The key explains them. '
    + 'The north arrow tells you which way the map is turned. '
    + 'The scale tells you what a distance on the paper means on the ground.',

  mechanism:
    'The key is the part people skip and the part that matters most, '
    + 'because the same symbol means different things on different maps. '
    + 'A thick line may be a main road on one map and a regional border on '
    + 'another. '
    + 'Reading the map without the key is guessing, '
    + 'and it is confident guessing, which is worse. '
    + 'North is the other anchor: once you know where north is, '
    + 'the other three directions follow, and nothing else needs explaining.',

  recap:
    'You can draw a map of your community from above, '
    + 'and you know that the sea lies along Ghana’s south. '
    + 'This adds the tools that let a stranger read your map.',

  method: [
    'Read the key first. Learn what each symbol means on this map.',
    'Find the north arrow.',
    'With north known, south is opposite, east is right of north, west left.',
    'Find a place you know, to orient yourself.',
    'To find a place, use the directions from somewhere you know.',
    'To judge distance, use the scale.',
  ],

  worked: [
    {
      level: 4,
      ask: 'What should you read first on an unfamiliar map?',
      steps: [
        'Symbols are not the same on every map.',
      ],
      answer: 'The key.',
    },
    {
      level: 5,
      ask: 'Tamale is north of Kumasi. If you travel from Tamale to Kumasi, '
        + 'which way do you go?',
      steps: [
        'Tamale is the northern one.',
        'Going to Kumasi means going away from north.',
      ],
      answer: 'South.',
    },
    {
      level: 5,
      ask: 'Two maps show the same region and one looks far more detailed. '
        + 'Why?',
      steps: [
        'They are drawn at different scales.',
        'A map covering a small area can show more in the same space.',
      ],
      answer: 'Different scales. '
        + 'A map of a smaller area has room for more detail.',
    },
  ],

  traps: [
    {
      mistake: 'Assuming you know what a symbol means.',
      why: 'The same symbol differs between maps. '
        + 'The key is not optional.',
    },
    {
      mistake: 'Assuming north is always up.',
      why: 'It usually is, and the arrow is there because it is not always. '
        + 'Check it.',
    },
    {
      mistake: 'Judging distance by how far apart things look.',
      why: 'That depends entirely on the scale. '
        + 'Two maps can show the same journey as a centimetre or a page.',
    },
  ],

  extension:
    'Maps on a phone solve the orientation problem by turning as you turn, '
    + 'which is useful and takes something away: '
    + 'you stop building a picture of how places sit relative to each other. '
    + 'A paper map is harder and teaches you the country better.',

  questions: [
    {
      id: 'gm-1',
      ask: 'What should you read first on a map?',
      kind: 'choice',
      options: ['The key', 'The title', 'The biggest town'],
      answer: 'The key',
      teach: 'Symbols differ between maps. '
        + 'Without the key you are guessing confidently.',
      level: 4,
    },
    {
      id: 'gm-2',
      ask: 'Travelling from Tamale to Kumasi, which direction do you go?',
      kind: 'choice',
      options: ['South', 'North', 'East'],
      answer: 'South',
      teach: 'Tamale is the northern of the two, so you travel away from '
        + 'north.',
      level: 5,
    },
    {
      id: 'gm-3',
      ask: 'What does the scale tell you?',
      kind: 'choice',
      options: [
        'What a distance on paper means on the ground',
        'Which way is north',
        'What the symbols mean',
      ],
      answer: 'What a distance on paper means on the ground',
      teach: 'Without it, how far apart things look tells you nothing.',
      level: 5,
    },
  ],
})

/* ── how Ghana became independent ─────────────────────────────────────────── */

teach({
  topicId: 'independence',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Ghana became independent on 6 March 1957, '
      + 'the first country in sub-Saharan Africa to do so. '
      + 'Kwame Nkrumah led the government, and many others worked for it.',
    method: [
      'Give the date: 6 March 1957.',
      'Name people, including those beyond the best known.',
      'Say what changed and what did not.',
    ],
  },

  idea:
    'Ghana became independent from British rule on 6 March 1957. '
    + 'It was the first country in sub-Saharan Africa to do so, '
    + 'and that is why the black star stands for African freedom. '
    + 'Kwame Nkrumah led the first government. '
    + 'Many others worked for it too, '
    + 'including the men known as the Big Six and a great many people '
    + 'whose names were never written down.',

  mechanism:
    'Independence was not a single act by a single person, '
    + 'and that is the thing most worth understanding. '
    + 'It came from years of organising: '
    + 'newspapers, parties, strikes, elections and negotiation. '
    + 'Nkrumah led at the end and did not do it alone, '
    + 'and people disagree, then and now, '
    + 'about how much credit belongs to whom. '
    + 'That disagreement is not a gap in the history. '
    + 'It is what history is: '
    + 'accounts written by people who were somewhere particular at the time.',

  recap:
    'You know what the black star on the flag stands for. '
    + 'This is the event it refers to.',

  method: [
    'Give the date: 6 March 1957.',
    'Say what changed: Britain no longer governed.',
    'Name people who worked for it, not only the best known.',
    'Say what independence did not immediately change.',
    'Where accounts differ, say so rather than choosing one silently.',
  ],

  worked: [
    {
      level: 4,
      ask: 'When did Ghana become independent?',
      steps: [
        'Give the day, the month and the year.',
      ],
      answer: '6 March 1957.',
    },
    {
      level: 5,
      ask: 'Why does the black star stand for African freedom '
        + 'rather than just Ghana’s?',
      steps: [
        'Ghana was the first in sub-Saharan Africa to become independent.',
        'Other countries followed.',
        'So it stood for more than one country’s freedom.',
      ],
      answer: 'Because Ghana went first, '
        + 'and what happened here was watched across the continent.',
    },
    {
      level: 5,
      ask: 'Two books give different accounts of who deserves most credit. '
        + 'Which is right?',
      steps: [
        'Each writer was somewhere, and knew some people and not others.',
        'Both may be accurate about what they describe.',
        'Reading only one leaves you with a partial picture.',
      ],
      answer: 'Possibly both, in part. '
        + 'Read more than one account and notice where they differ.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking one person achieved independence.',
      why: 'It took years of organising by very many people. '
        + 'Leaders are the visible part of a much larger effort.',
    },
    {
      mistake: 'Thinking everything changed on the day.',
      why: 'Governing changed hands. '
        + 'Roads, schools, trade and poverty were all still there the next '
        + 'morning.',
    },
    {
      mistake: 'Treating one account as the whole truth.',
      why: 'Accounts are written by people who were somewhere particular. '
        + 'Comparing them is how history is done.',
    },
  ],

  extension:
    'Within ten years many other African countries had become independent, '
    + 'and Ghana’s example was cited in several of them. '
    + 'Tracing which countries followed, and how soon, '
    + 'shows what the black star was actually pointing at.',

  questions: [
    {
      id: 'in-1',
      ask: 'In which year did Ghana become independent?',
      kind: 'numeric',
      answer: '1957',
      accept: ['1957', 'nineteen fifty seven'],
      teach: '6 March 1957, the first in sub-Saharan Africa.',
      level: 4,
    },
    {
      id: 'in-2',
      ask: 'Why does the black star stand for African freedom?',
      kind: 'choice',
      options: [
        'Ghana was the first in sub-Saharan Africa to become independent',
        'Black is a popular colour',
        'It was chosen by other countries',
      ],
      answer: 'Ghana was the first in sub-Saharan Africa to become independent',
      teach: 'Going first meant the whole continent was watching, '
        + 'so the star pointed beyond Ghana.',
      level: 5,
    },
    {
      id: 'in-3',
      ask: 'Two accounts of independence disagree. What should you do?',
      kind: 'choice',
      options: [
        'Read both and notice where they differ',
        'Believe the longer one',
        'Believe the older one',
      ],
      answer: 'Read both and notice where they differ',
      teach: 'Accounts are written from somewhere. '
        + 'Comparing them is what history actually is.',
      level: 5,
    },
  ],
})

/* ── proverbs and their meanings ──────────────────────────────────────────── */

teach({
  topicId: 'proverbs-ghl',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A proverb is a short saying that carries a lesson. '
      + 'It is not about the thing it mentions. '
      + 'To explain one, describe the situation it is used in.',
    method: [
      'Say the proverb.',
      'Say what it appears to be about.',
      'Say the situation somebody would use it in.',
    ],
  },

  idea:
    'A proverb is a short, well known saying that carries a lesson. '
    + 'Ghanaian languages are rich in them, '
    + 'and using one well is a mark of speaking your language properly. '
    + 'A proverb is almost never about the thing it mentions.',

  mechanism:
    'That last point is the whole skill. '
    + 'A proverb about a river is not advice about rivers. '
    + 'It takes a situation everybody can picture '
    + 'and uses it to describe a situation that is harder to put into words. '
    + 'That is why explaining a proverb by describing the picture '
    + 'is not explaining it at all. '
    + 'You have to say when somebody would use it, '
    + 'and what they would be saying about the person or the moment.',

  recap:
    'You can hold a conversation and tell a folktale in your language, '
    + 'and you know a folktale shows its lesson rather than stating it. '
    + 'A proverb does the same in one sentence.',

  method: [
    'Say the proverb exactly, in the language.',
    'Say plainly what it describes on the surface.',
    'Now say the situation it is actually used in.',
    'Give an example of somebody using it.',
    'Check: could somebody who had never heard it now use it correctly?',
  ],

  worked: [
    {
      level: 4,
      ask: 'What is a proverb for?',
      steps: [
        'It is short and well known.',
        'It carries a lesson.',
      ],
      answer: 'To say something about a situation briefly, '
        + 'using a picture everybody knows.',
    },
    {
      level: 5,
      ask: 'Somebody explains a proverb by describing the animal in it. '
        + 'What have they missed?',
      steps: [
        'The animal is the picture, not the point.',
        'The point is the situation it describes.',
      ],
      answer: 'They explained the surface and not the meaning. '
        + 'They need to say when it is used.',
    },
    {
      level: 5,
      ask: 'Why are proverbs valued in Ghanaian languages?',
      steps: [
        'They say a lot in very few words.',
        'They carry the thinking of people who came before.',
        'Using one well shows you know the language deeply.',
      ],
      answer: 'Because they compress a lot of meaning, '
        + 'and using one properly shows real command of the language.',
    },
  ],

  traps: [
    {
      mistake: 'Explaining the picture instead of the meaning.',
      why: 'A proverb about a river is not about rivers. '
        + 'Say when it is used.',
    },
    {
      mistake: 'Using a proverb in the wrong situation.',
      why: 'It will sound wrong to anybody who knows it. '
        + 'Learn the situation, not just the words.',
    },
    {
      mistake: 'Translating a proverb word for word into English.',
      why: 'The words usually survive and the meaning does not. '
        + 'Explain the situation instead.',
    },
  ],

  extension:
    'Ask an older relative for a proverb and the situation it is used in. '
    + 'You will often get a story with it. '
    + 'That is how proverbs have always been passed on, '
    + 'and it is why they carry more than their words.',

  questions: [
    {
      id: 'pv-1',
      ask: 'A proverb about a river is mostly about:',
      kind: 'choice',
      options: ['A situation in life', 'Rivers', 'Water safety'],
      answer: 'A situation in life',
      teach: 'The picture is a way of describing something harder to say. '
        + 'It is not advice about the picture.',
      level: 4,
    },
    {
      id: 'pv-2',
      ask: 'How do you properly explain a proverb?',
      kind: 'choice',
      options: [
        'Describe the situation somebody would use it in',
        'Describe the picture in it',
        'Translate it word for word',
      ],
      answer: 'Describe the situation somebody would use it in',
      teach: 'The test is whether your listener could now use it correctly.',
      level: 5,
    },
    {
      id: 'pv-3',
      ask: 'Why does a word for word translation usually fail?',
      kind: 'choice',
      options: [
        'The words survive but the meaning does not',
        'The words are too long',
        'English has no proverbs',
      ],
      answer: 'The words survive but the meaning does not',
      teach: 'The meaning lives in when it is used, '
        + 'and that does not travel with the words.',
      level: 5,
    },
  ],
})

/* ── writing a composition ────────────────────────────────────────────────── */

teach({
  topicId: 'compose-ghl',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Plan before you write. '
      + 'Three or four paragraphs, one idea each. '
      + 'Take care with the letters English does not have.',
    method: [
      'Plan your points first, in order.',
      'Write a paragraph per point.',
      'Read it aloud to check the spelling and the sense.',
    ],
  },

  idea:
    'A composition in your own language follows the same shape as one in '
    + 'English: '
    + 'a plan, then paragraphs with one idea each, then a reading back. '
    + 'What differs is the spelling, which needs care.',

  mechanism:
    'There is a particular trap in writing your own language at this age, '
    + 'and it is worth naming. '
    + 'You have spent years writing English, '
    + 'so your hand reaches for English spellings without asking. '
    + 'It will write e where ɛ belongs and o where ɔ belongs, '
    + 'and it will do it while you are thinking about what to say. '
    + 'That is why the reading back matters more here than in English: '
    + 'you are checking for mistakes your hand made on its own, '
    + 'not mistakes you thought your way into.',

  recap:
    'You can write sentences in your language with the proper letters, '
    + 'and you can plan paragraphs in English. '
    + 'This puts the two together.',

  method: [
    'Read the title and decide what you will say.',
    'Write three or four points in the order you will make them.',
    'Write an opening paragraph that says what the piece is about.',
    'One paragraph per point.',
    'Write a closing paragraph.',
    'Read the whole thing aloud, slowly.',
    'Check each extra letter as you go.',
  ],

  worked: [
    {
      level: 4,
      ask: 'What should you do before you start writing?',
      steps: [
        'Writing while deciding gives a muddled piece.',
      ],
      answer: 'Plan your points, in order.',
    },
    {
      level: 5,
      ask: 'Why is reading your work aloud more important in your own '
        + 'language than in English?',
      steps: [
        'Your hand is trained on English letters.',
        'It substitutes them without you noticing.',
        'Reading aloud catches what your eye skims over.',
      ],
      answer: 'Because the mistakes are made by habit rather than by '
        + 'thinking, so you will not see them by looking.',
    },
    {
      level: 5,
      ask: 'You are not sure how to spell a word. What do you do?',
      steps: [
        'Say it slowly and listen for each sound.',
        'One letter for one sound.',
        'Write a letter for each sound you hear.',
      ],
      answer: 'Sound it out carefully. '
        + 'The spelling follows the sounds, which is more than English '
        + 'offers you.',
    },
  ],

  traps: [
    {
      mistake: 'Starting to write before planning.',
      why: 'You end up deciding what to say while saying it, '
        + 'and the paragraphs wander.',
    },
    {
      mistake: 'Writing English letters out of habit.',
      why: 'Your hand will substitute e for ɛ while you are thinking '
        + 'about the content. Read it back.',
    },
    {
      mistake: 'Reading it back silently.',
      why: 'Your eye skims familiar shapes. '
        + 'Your ear does not.',
    },
  ],

  extension:
    'Write something and give it to somebody who speaks the language '
    + 'but did not see you write it. '
    + 'Anywhere they hesitate is a place your spelling or your sentence '
    + 'went wrong, '
    + 'and they will find things you could read past a dozen times.',

  questions: [
    {
      id: 'cg-1',
      ask: 'What comes before writing?',
      kind: 'choice',
      options: ['Planning your points', 'Counting the words', 'The title page'],
      answer: 'Planning your points',
      teach: 'Deciding what to say while saying it produces a piece that '
        + 'wanders.',
      level: 4,
    },
    {
      id: 'cg-2',
      ask: 'Why read your composition aloud?',
      kind: 'choice',
      options: [
        'Your eye skims familiar shapes and your ear does not',
        'It is faster',
        'It is required',
      ],
      answer: 'Your eye skims familiar shapes and your ear does not',
      teach: 'Habit mistakes are invisible to the eye that made them.',
      level: 5,
    },
    {
      id: 'cg-3',
      ask: 'Which mistake does an English trained hand tend to make?',
      kind: 'choice',
      options: [
        'Writing e in place of ɛ',
        'Writing too slowly',
        'Using too many paragraphs',
      ],
      answer: 'Writing e in place of ɛ',
      teach: 'Years of English make the hand reach for the familiar letter '
        + 'while you are busy thinking about content.',
      level: 5,
    },
  ],
})

/* ── formatting a document ────────────────────────────────────────────────── */

teach({
  topicId: 'format-a-document',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Formatting makes a document easier to read: '
      + 'headings, bold for emphasis, spacing, and a picture where it helps. '
      + 'Use it sparingly.',
    method: [
      'Type everything first, then format.',
      'Use headings to break the document into parts.',
      'Bold only the few words that matter most.',
    ],
  },

  idea:
    'Formatting is how a document is laid out: '
    + 'headings, bold text, spacing, and pictures. '
    + 'It is done to help the reader find things and follow the structure.',

  mechanism:
    'The rule that explains all the others is that formatting works by '
    + 'contrast. '
    + 'Bold text stands out because most of the text is not bold. '
    + 'Bold half the page and nothing stands out at all. '
    + 'The same is true of headings, colours and underlining: '
    + 'each one is a signal, and signals only work when they are rare. '
    + 'This is why a document with six fonts and four colours is harder to '
    + 'read than a plain one, even though more effort went into it.',

  recap:
    'You can type with both hands and save a file properly. '
    + 'This is about what the document looks like once it is typed.',

  method: [
    'Type all the words first. Do not format as you go.',
    'Read it through and decide the parts.',
    'Give each part a heading.',
    'Make headings bigger or bold so they stand out.',
    'Bold only the few words that genuinely matter.',
    'Add a picture only if it shows something the words cannot.',
    'Use one font for the body and keep it the same throughout.',
  ],

  worked: [
    {
      level: 4,
      ask: 'Why type everything before formatting?',
      steps: [
        'Formatting as you go breaks your thinking.',
        'You also format text you later delete.',
      ],
      answer: 'Because it wastes effort and interrupts the writing.',
    },
    {
      level: 5,
      ask: 'What happens if you make half the document bold?',
      steps: [
        'Bold works because most text is not bold.',
        'If half is bold, there is no contrast.',
      ],
      answer: 'Nothing stands out any more. '
        + 'You have removed the signal by overusing it.',
    },
    {
      level: 5,
      ask: 'When should you add a picture?',
      steps: [
        'A picture takes space and attention.',
        'It earns that if it shows something words cannot.',
      ],
      answer: 'When it shows something the words cannot, not for decoration.',
    },
  ],

  traps: [
    {
      mistake: 'Formatting while typing.',
      why: 'It breaks your train of thought '
        + 'and you format text you later cut.',
    },
    {
      mistake: 'Using several fonts and colours.',
      why: 'Each one is a signal, and too many signals mean none. '
        + 'The document gets harder to read, not easier.',
    },
    {
      mistake: 'Adding pictures to fill space.',
      why: 'A picture that shows nothing takes attention from what does.',
    },
  ],

  extension:
    'Open a well made textbook and count the different text styles on a '
    + 'page. '
    + 'It will usually be three or four: heading, body, caption, and one for '
    + 'emphasis. '
    + 'Restraint is what makes it readable.',

  questions: [
    {
      id: 'fd-1',
      ask: 'When should you format a document?',
      kind: 'choice',
      options: ['After typing it all', 'While typing', 'Before typing'],
      answer: 'After typing it all',
      teach: 'Formatting as you go interrupts the writing '
        + 'and wastes effort on text you may cut.',
      level: 4,
    },
    {
      id: 'fd-2',
      ask: 'What happens if too much text is bold?',
      kind: 'choice',
      options: [
        'Nothing stands out any more',
        'It becomes easier to read',
        'It prints darker',
      ],
      answer: 'Nothing stands out any more',
      teach: 'Bold works by contrast with the text around it. '
        + 'Remove the contrast and you remove the signal.',
      level: 5,
    },
    {
      id: 'fd-3',
      ask: 'When is a picture worth adding?',
      kind: 'choice',
      options: [
        'When it shows something the words cannot',
        'When the page looks empty',
        'Whenever you have one',
      ],
      answer: 'When it shows something the words cannot',
      teach: 'A picture takes space and attention, so it has to earn them.',
      level: 5,
    },
  ],
})

/* ── searching for something ──────────────────────────────────────────────── */

teach({
  topicId: 'searching',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Use a few exact words to search. '
      + 'Then judge what you find: who wrote it, when, and do other sources '
      + 'agree.',
    method: [
      'Search with a few precise words, not a whole question.',
      'Check who wrote it and when.',
      'Check whether another source says the same.',
    ],
  },

  idea:
    'Searching has two halves, and the second is the hard one. '
    + 'First you find things. '
    + 'Then you decide whether to believe them. '
    + 'Anybody can put anything online, '
    + 'so appearing in a search result proves nothing.',

  mechanism:
    'There are three questions that do most of the work. '
    + 'Who wrote this? A ministry, a university or a newspaper '
    + 'is answerable in a way an anonymous page is not. '
    + 'When was it written? '
    + 'A page about Ghana’s population from 2004 is not wrong, '
    + 'it is just out of date, which is harder to notice. '
    + 'Does anybody else say the same? '
    + 'Two independent sources agreeing is far stronger than one being '
    + 'confident. '
    + 'None of this needs expertise. It needs the habit of asking.',

  recap:
    'You know not to share personal information online, '
    + 'and you know that anybody can post anything. '
    + 'This is the other side: deciding what to believe.',

  method: [
    'Decide exactly what you want to know.',
    'Search with a few precise words, not a whole sentence.',
    'Too many results? Add a word. Too few? Remove one.',
    'Open a result and look for who wrote it.',
    'Look for when it was written.',
    'Find a second source and see whether it agrees.',
    'Write down where you got it, so you can say.',
  ],

  worked: [
    {
      level: 4,
      ask: 'You want the height of Mount Afadja. What do you search?',
      steps: [
        'Use the precise words, not a sentence.',
      ],
      answer: 'Something like "Mount Afadja height", not "how high is the '
        + 'mountain in Ghana".',
    },
    {
      level: 5,
      ask: 'Two pages give different population figures for Ghana. '
        + 'How do you choose?',
      steps: [
        'Check the dates. One may be much older.',
        'Check who wrote each.',
        'A statistical service beats an anonymous page.',
      ],
      answer: 'Take the more recent one from the more answerable source, '
        + 'and say where you got it.',
    },
    {
      level: 5,
      ask: 'A page has no author and no date. Should you use it?',
      steps: [
        'You cannot judge who is answerable.',
        'You cannot judge whether it is current.',
        'You can still check its claim elsewhere.',
      ],
      answer: 'Treat it as a lead, not a source. '
        + 'Confirm the claim somewhere you can judge.',
    },
  ],

  traps: [
    {
      mistake: 'Believing the first result.',
      why: 'Order is not a measure of truth. '
        + 'It reflects popularity and how the page was written.',
    },
    {
      mistake: 'Ignoring the date.',
      why: 'Out of date is the hardest kind of wrong to spot, '
        + 'because nothing about the page looks incorrect.',
    },
    {
      mistake: 'Copying without noting where it came from.',
      why: 'Then you cannot answer "how do you know", '
        + 'and you cannot check it later.',
    },
  ],

  extension:
    'Two pages agreeing only counts if they are independent. '
    + 'If both copied the same original, '
    + 'you have one source twice, not two sources. '
    + 'Checking where each got it from is the next step up in this skill.',

  questions: [
    {
      id: 'sr-1',
      ask: 'How should you word a search?',
      kind: 'choice',
      options: [
        'A few precise words',
        'A full question',
        'One general word',
      ],
      answer: 'A few precise words',
      teach: 'Precise words narrow the results. '
        + 'Add one if there are too many, remove one if too few.',
      level: 4,
    },
    {
      id: 'sr-2',
      ask: 'Why does the date of a page matter?',
      kind: 'choice',
      options: [
        'Out of date information looks correct but is not current',
        'Old pages load slowly',
        'It does not matter',
      ],
      answer: 'Out of date information looks correct but is not current',
      teach: 'That is what makes it dangerous. '
        + 'Nothing about the page looks wrong.',
      level: 5,
    },
    {
      id: 'sr-3',
      ask: 'Does being the first search result mean something is true?',
      kind: 'choice',
      options: ['No', 'Yes'],
      answer: 'No',
      teach: 'Order reflects popularity and how the page was written, '
        + 'not whether it is correct.',
      level: 4,
    },
  ],
})

/* ── programming with blocks ──────────────────────────────────────────────── */

teach({
  topicId: 'block-programming',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A program is instructions a computer follows in order. '
      + 'Blocks snap together to make them. '
      + 'A repeat block does something several times without writing it out.',
    method: [
      'Drag blocks into the order you want them run.',
      'Use a repeat block instead of copying a block many times.',
      'When it misbehaves, run it slowly and watch where it goes wrong.',
    ],
  },

  idea:
    'A program is a list of instructions a computer carries out in order. '
    + 'With blocks you build that list by snapping pieces together: '
    + 'move, turn, wait, repeat. '
    + 'The computer does exactly what the blocks say, in the order they sit.',

  mechanism:
    'The repeat block is the first genuinely powerful idea here. '
    + 'Without it, drawing a square means four move blocks and four turn '
    + 'blocks. '
    + 'With it, it is one move and one turn inside a repeat four times. '
    + 'That matters for more than tidiness: '
    + 'when you want a pentagon instead, you change one number. '
    + 'With eight copied blocks you would have to find and change all of '
    + 'them, '
    + 'and you would miss one. '
    + 'Saying a thing once is how programs stay correct as they grow.',

  recap:
    'You can write instructions in the right order. '
    + 'One action per step. '
    + 'And you know a computer fills in nothing you leave out.',

  method: [
    'Decide what you want to happen, in order.',
    'Drag the blocks into that order.',
    'Run it and watch.',
    'Something you repeat? Replace the copies with a repeat block.',
    'When it misbehaves, do not guess. Run it slowly.',
    'Watch for the first step where it does something you did not expect.',
    'Fix that one thing and run it again.',
  ],

  worked: [
    {
      level: 4,
      ask: 'How would you make a character draw a square?',
      steps: [
        'Move forward, then turn a quarter turn.',
        'That is one side and one corner.',
        'A square needs that four times.',
      ],
      answer: 'A move block and a turn block, inside a repeat four times.',
    },
    {
      level: 5,
      ask: 'Why use a repeat block instead of copying the blocks four times?',
      steps: [
        'Both work the first time.',
        'To change it to a pentagon you would edit every copy.',
        'With a repeat you change one number.',
      ],
      answer: 'Because saying it once means changing it once, '
        + 'and copies are where mistakes hide.',
    },
    {
      level: 5,
      ask: 'Your character goes the wrong way. How do you find the problem?',
      steps: [
        'Do not guess and do not rebuild it.',
        'Run it slowly, one block at a time.',
        'Find the first block that does something unexpected.',
      ],
      answer: 'Run it step by step and watch for the first surprise. '
        + 'That block, or the one before it, is the problem.',
    },
  ],

  traps: [
    {
      mistake: 'Guessing at the fix and changing several things at once.',
      why: 'Then you do not know which change helped. '
        + 'Change one thing and run it again.',
    },
    {
      mistake: 'Copying blocks instead of using repeat.',
      why: 'It works until you need to change it, '
        + 'and then you must find every copy.',
    },
    {
      mistake: 'Deleting it all and starting again when it misbehaves.',
      why: 'You lose the working parts along with the broken one, '
        + 'and you learn nothing about what went wrong.',
    },
  ],

  extension:
    'Everything you do with blocks has a written equivalent in languages '
    + 'like Python, '
    + 'and a repeat block becomes a loop. '
    + 'The blocks are not a toy version. '
    + 'They are the same ideas with the typing removed, '
    + 'so you can think about the logic instead of the spelling.',

  questions: [
    {
      id: 'bp-1',
      ask: 'What does a repeat block do?',
      kind: 'choice',
      options: [
        'Runs the blocks inside it several times',
        'Makes the program faster',
        'Copies the program',
      ],
      answer: 'Runs the blocks inside it several times',
      teach: 'It lets you say a thing once instead of copying it, '
        + 'which is also why it is easier to change.',
      level: 4,
    },
    {
      id: 'bp-2',
      ask: 'Your program misbehaves. What should you do first?',
      kind: 'choice',
      options: [
        'Run it slowly and find the first unexpected step',
        'Delete it and start again',
        'Change several blocks and see',
      ],
      answer: 'Run it slowly and find the first unexpected step',
      teach: 'Guessing changes several things at once, '
        + 'so you never learn which one mattered.',
      level: 5,
    },
    {
      id: 'bp-3',
      ask: 'Why is a repeat block better than copied blocks?',
      kind: 'choice',
      options: [
        'Changing it means changing one number, not every copy',
        'It uses less memory',
        'It looks neater',
      ],
      answer: 'Changing it means changing one number, not every copy',
      teach: 'Copies are where mistakes hide, '
        + 'because you will always miss one when you edit them.',
      level: 5,
    },
  ],
})
