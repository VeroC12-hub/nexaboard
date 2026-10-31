/**
 * Stored lessons for Basic 4 Our World Our People, Ghanaian Language and
 * Computing.
 *
 * Written at about grade 4, with a `brief` form on every topic.
 *
 * ── Two things these are careful about ─────────────────────────────────────
 *
 * The lesson on the peoples of Ghana names groups and describes a festival
 * without ranking anybody or treating one group as the standard. A child in
 * the class belongs to one of these, and the lesson is read by all of them.
 *
 * The Ghanaian Language lessons name no single language, for the reason the
 * Basic 3 file gives: which one a child learns depends on where the school
 * is, and the app does not know.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── growing and changing ─────────────────────────────────────────────────── */

teach({
  topicId: 'growing-up',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'People go from baby to child to young person to adult to elder. '
      + 'Each stage needs different things and can do different things.',
    method: [
      'Name the stage.',
      'Say what a person can do at it.',
      'Say what they need from others at it.',
    ],
  },

  idea:
    'Everybody passes through the same stages. '
    + 'A baby, then a child, then a young person, then an adult, then an '
    + 'elder. '
    + 'At each stage a person can do more for themselves '
    + 'and needs different things from the people around them.',

  mechanism:
    'The useful way to see it is as a handover. '
    + 'A baby can do nothing alone and needs everything done for it. '
    + 'An adult does things for others, including for babies and elders. '
    + 'So the care you receive early is care you give later, '
    + 'and then receive again at the end. '
    + 'That is why looking after an elder is not a favour. '
    + 'It is the same arrangement that once kept you alive, '
    + 'arriving back round.',

  recap:
    'You know that a household shares out jobs, '
    + 'and that different people do different ones. '
    + 'Age is a large part of why.',

  method: [
    'Name the stage you are describing.',
    'Say what a person can do for themselves at it.',
    'Say what they still need from others.',
    'Say what they give to others.',
    'Notice how the giving and receiving change places over a life.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What does a baby need that a ten year old does not?',
      steps: [
        'A baby cannot feed, wash or move itself.',
        'A ten year old can do all three.',
      ],
      answer: 'A baby needs feeding, washing and carrying. '
        + 'A ten year old needs guidance, not those.',
    },
    {
      level: 4,
      ask: 'Why do adults do most of the earning in a household?',
      steps: [
        'Earning needs skills and strength built over years.',
        'Children are still learning and elders have already done it.',
      ],
      answer: 'Because they are at the stage with the most capacity, '
        + 'and the stages either side have different jobs.',
    },
    {
      level: 4,
      ask: 'Somebody says caring for an elder is a burden. What would you say?',
      steps: [
        'That elder once cared for somebody who could do nothing.',
        'You were cared for the same way.',
        'The arrangement goes round.',
      ],
      answer: 'That it is the same care everybody receives as a baby, '
        + 'coming back round. It is a turn, not a burden.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking children contribute nothing.',
      why: 'Fetching water, sweeping and minding a younger child are real '
        + 'work the household depends on.',
    },
    {
      mistake: 'Thinking elders only receive.',
      why: 'Elders hold the knowledge, settle disputes and mind children. '
        + 'The work changes rather than stops.',
    },
    {
      mistake: 'Expecting everybody to change at the same age.',
      why: 'People grow at different rates. '
        + 'The order of the stages is fixed; the timing is not.',
    },
  ],

  extension:
    'In many Ghanaian communities a person is given new responsibilities '
    + 'at a recognised moment rather than at a birthday. '
    + 'What marks adulthood varies, and almost every society marks it '
    + 'somehow, because everybody needs to know who is answerable for what.',

  questions: [
    {
      id: 'gu-1',
      ask: 'Which stage can do least for itself?',
      kind: 'choice',
      options: ['A baby', 'A child', 'An adult'],
      answer: 'A baby',
      teach: 'A baby cannot feed, wash or move itself. '
        + 'Everything must be done for it.',
      level: 3,
    },
    {
      id: 'gu-2',
      ask: 'Do children contribute to a household?',
      kind: 'choice',
      options: ['Yes', 'No'],
      answer: 'Yes',
      teach: 'Fetching water, sweeping and minding a smaller child are real '
        + 'jobs the household needs doing.',
      level: 3,
    },
    {
      id: 'gu-3',
      ask: 'Why is caring for an elder not a burden?',
      kind: 'choice',
      options: [
        'It is the same care everyone receives as a baby, coming round again',
        'Because elders ask for little',
        'Because it does not take long',
      ],
      answer: 'It is the same care everyone receives as a baby, coming round again',
      teach: 'Care is handed on through the stages. '
        + 'You received it and you will receive it again.',
      level: 4,
    },
  ],
})

/* ── natural features of Ghana ────────────────────────────────────────────── */

teach({
  topicId: 'natural-features',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Ghana has the Volta, the Pra, the Tano and the Ankobra rivers, '
      + 'and Lake Volta, one of the largest made lakes in the world. '
      + 'The coast is south and the drier land is north.',
    method: [
      'Find the coast. That is the south.',
      'Find Lake Volta and the river running into it.',
      'Place your own region between the two.',
    ],
  },

  idea:
    'Ghana has the sea along its southern edge. '
    + 'Its biggest river is the Volta, '
    + 'and the Akosombo dam across it made Lake Volta, '
    + 'one of the largest lakes made by people anywhere in the world. '
    + 'Other rivers include the Pra, the Tano and the Ankobra. '
    + 'The south is wetter and forested. The north is drier and more open.',

  mechanism:
    'The difference between the south and the north is rain, '
    + 'and almost everything else follows from it. '
    + 'Wet forest in the south grows cocoa and timber. '
    + 'Drier open land in the north grows shea, millet and sorghum, '
    + 'and raises more cattle. '
    + 'So when you learn where the rain falls, '
    + 'you have also learned where crops grow, where people settled, '
    + 'and why the food differs as you travel.',

  recap:
    'You can draw a map of your community and place things on it. '
    + 'This is the same idea at the size of a country.',

  method: [
    'Start with the sea along the south.',
    'Mark the Volta and Lake Volta in the middle and east.',
    'Mark the forest belt in the south.',
    'Mark the drier savannah in the north.',
    'Find your own region and mark it.',
    'Say what grows near you and link it to the rain.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which is the largest river in Ghana?',
      steps: [
        'Think of the one the dam was built across.',
      ],
      answer: 'The Volta.',
    },
    {
      level: 4,
      ask: 'Why is cocoa grown in the south and not the far north?',
      steps: [
        'Cocoa needs a lot of rain and shade.',
        'The south has forest and heavy rain.',
        'The north is drier and more open.',
      ],
      answer: 'Because cocoa needs the rain and shade the southern forest '
        + 'has and the north does not.',
    },
    {
      level: 4,
      ask: 'Lake Volta is very large. Was it always there?',
      steps: [
        'It formed when the Akosombo dam held back the river.',
        'The water spread out behind the dam.',
      ],
      answer: 'No. People made it by damming the Volta, '
        + 'and the lake filled behind the dam.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking Lake Volta is natural.',
      why: 'It formed behind the Akosombo dam. '
        + 'Before the dam it was a river valley with people living in it.',
    },
    {
      mistake: 'Thinking the whole country has the same weather.',
      why: 'The south is much wetter than the north, '
        + 'and that one difference changes the crops, the food and the '
        + 'building.',
    },
    {
      mistake: 'Putting the sea in the wrong place on a map.',
      why: 'The coast is along the south. '
        + 'Getting that wrong turns the whole map round.',
    },
  ],

  extension:
    'Building the Akosombo dam gave the country electricity '
    + 'and also flooded the homes of many thousands of people, '
    + 'who had to be moved. '
    + 'Large projects usually have both kinds of result, '
    + 'and both belong in the story.',

  questions: [
    {
      id: 'nf-1',
      ask: 'Along which side of Ghana is the sea?',
      kind: 'choice',
      options: ['North', 'South', 'East'],
      answer: 'South',
      teach: 'The coast runs along the southern edge. '
        + 'That is the anchor for the whole map.',
      level: 3,
    },
    {
      id: 'nf-2',
      ask: 'Is Lake Volta natural?',
      kind: 'choice',
      options: ['Yes', 'No, it formed behind the Akosombo dam'],
      answer: 'No, it formed behind the Akosombo dam',
      teach: 'The dam held back the river and the water spread out behind it.',
      level: 4,
    },
    {
      id: 'nf-3',
      ask: 'Why does cocoa grow in the south?',
      kind: 'choice',
      options: [
        'The south has the rain and shade it needs',
        'The soil is redder there',
        'It is nearer the ports',
      ],
      answer: 'The south has the rain and shade it needs',
      teach: 'Rain is the difference between south and north, '
        + 'and the crops follow the rain.',
      level: 4,
    },
  ],
})

/* ── leaders in the community ─────────────────────────────────────────────── */

teach({
  topicId: 'community-leaders',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A community has several leaders with different jobs: '
      + 'a chief, an assembly member, a head teacher, a religious leader. '
      + 'Each is answerable for something different.',
    method: [
      'Name the leader.',
      'Say what they are responsible for.',
      'Say who they answer to.',
    ],
  },

  idea:
    'A community has more than one leader, and they do different things. '
    + 'A chief leads in matters of custom and settles disputes. '
    + 'An assembly member is chosen by the people and speaks for them to '
    + 'government. '
    + 'A head teacher runs the school. '
    + 'A religious leader guides the people of their faith.',

  mechanism:
    'The reason there is more than one is that no single person should hold '
    + 'every kind of authority. '
    + 'The chief holds custom, the assembly member holds the link to '
    + 'government, the head teacher holds the school. '
    + 'Each is answerable to a different set of people, '
    + 'and because of that each can be questioned. '
    + 'A community where one person decided everything '
    + 'would have nobody left to appeal to.',

  recap:
    'You know that rules exist to solve problems, '
    + 'and that somebody has to make and keep them. '
    + 'This is who those people are.',

  method: [
    'Name the leader and their title.',
    'Say what they are responsible for.',
    'Say who chose them: the people, the government, or custom.',
    'Say who they answer to.',
    'If you have a problem, ask which of them it belongs to.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Who would you go to about a problem at school?',
      steps: [
        'The school is run by the head teacher.',
      ],
      answer: 'The head teacher.',
    },
    {
      level: 4,
      ask: 'Two families disagree about land. Who usually helps?',
      steps: [
        'Land and custom are the chief’s area.',
        'A chief hears both sides and settles it.',
      ],
      answer: 'The chief, often with elders, hearing both sides.',
    },
    {
      level: 4,
      ask: 'Why is it better to have several leaders than one?',
      steps: [
        'Different leaders answer to different people.',
        'So each can be questioned by somebody.',
        'With one leader there would be nobody to appeal to.',
      ],
      answer: 'Because it leaves somebody to appeal to, '
        + 'and nobody holding every kind of authority at once.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking the chief decides everything.',
      why: 'The chief leads in custom. '
        + 'Schools, clinics and roads belong to others.',
    },
    {
      mistake: 'Thinking an assembly member works for the government.',
      why: 'They are chosen by the people and speak for them. '
        + 'That is the opposite direction.',
    },
    {
      mistake: 'Taking every problem to the same person.',
      why: 'Ask whose area it is. '
        + 'The right person can act and the wrong one cannot.',
    },
  ],

  extension:
    'Ghana runs both systems side by side: '
    + 'chiefs in matters of custom, elected officials in matters of '
    + 'government. '
    + 'They overlap, and where they do it has to be worked out carefully. '
    + 'Few countries manage two systems at once as steadily.',

  questions: [
    {
      id: 'cl-1',
      ask: 'Who runs the school?',
      kind: 'choice',
      options: ['The chief', 'The head teacher', 'The assembly member'],
      answer: 'The head teacher',
      teach: 'Each leader has their own area. The school is the head '
        + 'teacher’s.',
      level: 3,
    },
    {
      id: 'cl-2',
      ask: 'Who chooses an assembly member?',
      kind: 'choice',
      options: ['The people', 'The chief', 'The government'],
      answer: 'The people',
      teach: 'They are elected, and they speak for the people to government '
        + 'rather than the other way round.',
      level: 4,
    },
    {
      id: 'cl-3',
      ask: 'Why have several leaders instead of one?',
      kind: 'choice',
      options: [
        'So each can be questioned and there is somebody to appeal to',
        'Because the work is too tiring',
        'So they can take turns',
      ],
      answer: 'So each can be questioned and there is somebody to appeal to',
      teach: 'Different leaders answer to different people. '
        + 'One leader holding everything leaves nobody to appeal to.',
      level: 4,
    },
  ],
})

/* ── the peoples of Ghana ─────────────────────────────────────────────────── */

teach({
  topicId: 'our-cultures',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Ghana has many peoples, including the Akan, Ewe, Ga-Dangme, Mole-Dagbani, '
      + 'Guan and Gurma. '
      + 'Each has its own language and festivals, and all are Ghanaian.',
    method: [
      'Name the group and where they mostly live.',
      'Name the language they speak.',
      'Name a festival and say what it remembers.',
    ],
  },

  idea:
    'Ghana is made up of many peoples. '
    + 'Among the larger groups are the Akan, the Ewe, the Ga-Dangme, '
    + 'the Mole-Dagbani, the Guan and the Gurma. '
    + 'Each has its own language, its own festivals and its own customs. '
    + 'All of them are Ghanaian.',

  mechanism:
    'It is worth seeing what the festivals have in common. '
    + 'Homowo among the Ga remembers a hunger that was overcome. '
    + 'Odwira among some Akan states is a cleansing and a thanksgiving. '
    + 'Hogbetsotso among the Anlo Ewe remembers a journey to where they now '
    + 'live. '
    + 'Damba is kept among peoples of the north. '
    + 'Different stories, and the same three things underneath: '
    + 'remember where we came from, give thanks, and gather everybody. '
    + 'Knowing that makes a festival you have never attended easier to '
    + 'understand.',

  recap:
    'You know what a festival is and that it comes once a year. '
    + 'This is about whose festivals they are.',

  method: [
    'Name the group.',
    'Say roughly where in Ghana they mostly live.',
    'Name the language they speak.',
    'Name one festival.',
    'Say what it remembers or gives thanks for.',
    'Say it as what these people do, not as what is strange or normal.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name a festival and say whose it is.',
      steps: [
        'Pick one and name the people it belongs to.',
      ],
      answer: 'Homowo is kept by the Ga. '
        + 'It remembers a time of hunger that was survived.',
    },
    {
      level: 4,
      ask: 'What do Ghanaian festivals tend to have in common?',
      steps: [
        'Each remembers something from the past.',
        'Each gives thanks.',
        'Each gathers the community together.',
      ],
      answer: 'Remembering, thanksgiving and gathering, '
        + 'even though the stories differ.',
    },
    {
      level: 4,
      ask: 'A classmate’s festival is unfamiliar to you. '
        + 'How should you talk about it?',
      steps: [
        'Ask them about it rather than guessing.',
        'Describe it as theirs, not as odd.',
        'Yours is equally unfamiliar to somebody else.',
      ],
      answer: 'Ask, and describe it as their festival. '
        + 'Unfamiliar is not the same as strange.',
    },
  ],

  traps: [
    {
      mistake: 'Treating one group as the normal one.',
      why: 'No group is the standard and the rest variations. '
        + 'Each is simply itself.',
    },
    {
      mistake: 'Thinking everybody in a group is the same.',
      why: 'Groups are large and people inside them differ, '
        + 'in faith, in work and in what they keep.',
    },
    {
      mistake: 'Calling another group’s custom strange.',
      why: 'Yours is unfamiliar to them too. '
        + 'Unfamiliar and strange are not the same word.',
    },
  ],

  extension:
    'Ghana has far more than six groups, and many languages within each. '
    + 'English is the official language partly because it belongs to no '
    + 'group in particular, '
    + 'so no group is favoured by it in official business.',

  questions: [
    {
      id: 'oc-1',
      ask: 'Whose festival is Homowo?',
      kind: 'choice',
      options: ['The Ga', 'The Ewe', 'The Dagomba'],
      answer: 'The Ga',
      teach: 'Homowo is kept by the Ga and remembers a hunger that was '
        + 'survived.',
      level: 3,
    },
    {
      id: 'oc-2',
      ask: 'What do Ghanaian festivals mostly have in common?',
      kind: 'choice',
      options: [
        'Remembering, thanksgiving and gathering',
        'The same food',
        'The same month',
      ],
      answer: 'Remembering, thanksgiving and gathering',
      teach: 'The stories differ and those three things run underneath '
        + 'nearly all of them.',
      level: 4,
    },
    {
      id: 'oc-3',
      ask: 'How should you describe a custom that is new to you?',
      kind: 'choice',
      options: [
        'As that group’s custom, after asking about it',
        'As strange',
        'As the same as yours',
      ],
      answer: 'As that group’s custom, after asking about it',
      teach: 'Unfamiliar is not strange. '
        + 'Yours is unfamiliar to somebody else too.',
      level: 4,
    },
  ],
})

/* ── folktales ────────────────────────────────────────────────────────────── */

teach({
  topicId: 'folktales-ghl',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A folktale is a story passed down by telling. '
      + 'It entertains and it teaches something. '
      + 'Tell it in order and say what it teaches at the end.',
    method: [
      'Say who the story is about and where it happens.',
      'Tell what happened, in order.',
      'Say what it teaches.',
    ],
  },

  idea:
    'A folktale is a story handed down by telling rather than writing. '
    + 'Many in Ghana are about Ananse the spider. '
    + 'A folktale does two jobs at once: '
    + 'it entertains, and it teaches something about how to live.',

  mechanism:
    'The lesson is almost never stated in the middle of the story. '
    + 'It is shown by what happens to the characters. '
    + 'Ananse is clever and greedy, and his cleverness usually wins him '
    + 'something and then costs him more. '
    + 'The story does not say "do not be greedy". '
    + 'It lets you watch greed fail. '
    + 'That is why the stories last: '
    + 'a lesson you worked out yourself stays with you '
    + 'far longer than one you were told.',

  recap:
    'You can hold a conversation in your language '
    + 'and you can read a passage aloud. '
    + 'Telling a story needs both, plus remembering the order.',

  method: [
    'Listen to the whole story before you try to tell it.',
    'Remember the order of events, not the exact words.',
    'Start by saying who it is about.',
    'Tell what happened, in order, in your own words.',
    'Use your voice: change it for different characters.',
    'At the end, say what the story teaches.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What two jobs does a folktale do?',
      steps: [
        'People enjoy hearing it.',
        'It also carries a lesson.',
      ],
      answer: 'It entertains and it teaches.',
    },
    {
      level: 4,
      ask: 'Why do Ananse stories rarely say the lesson out loud?',
      steps: [
        'The lesson is shown by what happens to him.',
        'You work it out from the ending.',
      ],
      answer: 'Because a lesson you work out yourself stays with you longer '
        + 'than one you are told.',
    },
    {
      level: 4,
      ask: 'You forget the exact words of a folktale. Does that matter?',
      steps: [
        'A folktale is passed by telling, not by reading.',
        'Every teller uses their own words.',
        'What must stay is the order and the lesson.',
      ],
      answer: 'No. Keep the order and the lesson. '
        + 'The words are yours to choose.',
    },
  ],

  traps: [
    {
      mistake: 'Trying to memorise it word for word.',
      why: 'Folktales were never fixed in words. '
        + 'Remember the events and tell them your way.',
    },
    {
      mistake: 'Telling the ending first.',
      why: 'The lesson lands because of the order. '
        + 'Give it away and the story stops working.',
    },
    {
      mistake: 'Adding the lesson as a line inside the story.',
      why: 'Let the events show it. '
        + 'Say it at the end if you say it at all.',
    },
  ],

  extension:
    'Ananse travelled with Ghanaians across the sea '
    + 'and turned up in the Caribbean as Anansi, '
    + 'in stories still told there today. '
    + 'A story carried only in people’s heads crossed an ocean '
    + 'and survived.',

  questions: [
    {
      id: 'ft-1',
      ask: 'How is a folktale passed on?',
      kind: 'choice',
      options: ['By telling', 'By writing', 'By singing only'],
      answer: 'By telling',
      teach: 'They are handed down by being told, '
        + 'which is why every teller uses slightly different words.',
      level: 3,
    },
    {
      id: 'ft-2',
      ask: 'Where is the lesson of a folktale usually found?',
      kind: 'choice',
      options: [
        'In what happens to the characters',
        'In the first line',
        'In the title',
      ],
      answer: 'In what happens to the characters',
      teach: 'You watch greed or cleverness succeed and then fail, '
        + 'and you work the lesson out yourself.',
      level: 4,
    },
    {
      id: 'ft-3',
      ask: 'You cannot remember the exact words. What must you keep?',
      kind: 'choice',
      options: [
        'The order of events and the lesson',
        'The exact opening line',
        'The length',
      ],
      answer: 'The order of events and the lesson',
      teach: 'Those two carry the story. The words are the teller’s own.',
      level: 4,
    },
  ],
})

/* ── reading passages ─────────────────────────────────────────────────────── */

teach({
  topicId: 'read-passages-ghl',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Read the passage aloud at a steady pace. '
      + 'Then answer questions by finding the line the answer came from.',
    method: [
      'Read it all the way through once.',
      'Read it aloud, pausing at the marks.',
      'For each question, find the line and point at it.',
    ],
  },

  idea:
    'Reading a passage in your own language has two parts. '
    + 'First you read it aloud so a listener can follow. '
    + 'Then you answer questions about it, '
    + 'and the answers come from the passage, not from what you already know.',

  mechanism:
    'Reading aloud in your own language has one advantage over English, '
    + 'and it is worth using. '
    + 'One letter means one sound, '
    + 'so a word you have never seen can still be read correctly. '
    + 'What the letters cannot tell you is the pitch, '
    + 'and in many Ghanaian languages pitch carries meaning. '
    + 'So the spelling gets you to the right sounds '
    + 'and your ear has to supply the tune. '
    + 'That is why reading aloud to somebody who speaks the language '
    + 'is worth far more than reading silently to yourself.',

  recap:
    'You can read the letters of your language, including the extra ones, '
    + 'and you know how to answer from a passage in English. '
    + 'Both skills meet here.',

  method: [
    'Read the whole passage once, quietly, before reading it aloud.',
    'Then read it aloud at the speed you would speak.',
    'Pause where the marks tell you to.',
    'Meet an unfamiliar word? Sound it out, then read the line again.',
    'For each question, find the important word and hunt for it.',
    'Answer using words from the passage.',
  ],

  worked: [
    {
      level: 3,
      ask: 'You reach a word you have never seen. What do you do?',
      steps: [
        'One letter means one sound in this spelling.',
        'So sound it out letter by letter.',
        'Then read the whole line again so it makes sense.',
      ],
      answer: 'Sound it out, then reread the line.',
    },
    {
      level: 4,
      ask: 'Why read aloud to somebody rather than silently?',
      steps: [
        'The letters show the sounds but not the pitch.',
        'Pitch can change what a word means.',
        'A listener can correct your pitch.',
      ],
      answer: 'Because the spelling cannot show pitch, '
        + 'and somebody listening can.',
    },
    {
      level: 4,
      ask: 'A question asks something the passage does not mention. '
        + 'What do you write?',
      steps: [
        'Hunt through the passage carefully first.',
        'If it truly is not there, you cannot answer it from the passage.',
      ],
      answer: 'That the passage does not say. '
        + 'Filling it in from your own knowledge is a guess.',
    },
  ],

  traps: [
    {
      mistake: 'Reading aloud before reading it once to yourself.',
      why: 'You will stumble on words you could have sorted out quietly '
        + 'first.',
    },
    {
      mistake: 'Reading too fast to show you can.',
      why: 'A listener cannot follow. '
        + 'Read at talking speed.',
    },
    {
      mistake: 'Answering from what you know rather than the passage.',
      why: 'The question is about this passage. '
        + 'If you cannot point at the line, it is a guess.',
    },
  ],

  extension:
    'Try reading a passage to an older relative '
    + 'and ask them to stop you wherever your pitch is off. '
    + 'You will learn more in ten minutes that way '
    + 'than in an hour of reading silently.',

  questions: [
    {
      id: 'rp-1',
      ask: 'What do you do first with a passage?',
      kind: 'choice',
      options: [
        'Read it through once to yourself',
        'Start reading aloud immediately',
        'Read the questions first',
      ],
      answer: 'Read it through once to yourself',
      teach: 'Sorting out hard words quietly first means you do not stumble '
        + 'when somebody is listening.',
      level: 3,
    },
    {
      id: 'rp-2',
      ask: 'What can the letters not tell you?',
      kind: 'choice',
      options: ['The pitch', 'The sounds', 'The spelling'],
      answer: 'The pitch',
      teach: 'One letter means one sound, so the sounds are covered. '
        + 'Pitch is not written, and it can change a word’s meaning.',
      level: 4,
    },
    {
      id: 'rp-3',
      ask: 'The passage does not mention what a question asks. What do you '
        + 'write?',
      kind: 'choice',
      options: [
        'That the passage does not say',
        'What you think is likely',
        'Nothing at all',
      ],
      answer: 'That the passage does not say',
      teach: 'If you cannot point at a line, you are guessing, '
        + 'even if the guess is right.',
      level: 4,
    },
  ],
})

/* ── storing work ─────────────────────────────────────────────────────────── */

teach({
  topicId: 'storage-devices',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Saving writes your work onto a disk so it survives the power going off. '
      + 'Give it a name you will recognise and remember which folder it is in.',
    method: [
      'Choose Save and give the file a clear name.',
      'Notice which folder it is going into.',
      'To find it again, look in that folder, or search the name.',
    ],
  },

  idea:
    'While you are typing, your work is held in the computer’s memory, '
    + 'which empties when the power goes off. '
    + 'Saving copies it onto a disk, where it stays. '
    + 'A file has a name and sits inside a folder. '
    + 'You find it again by knowing both.',

  mechanism:
    'Here is why work disappears, and it is almost never a fault. '
    + 'The memory the computer works in is fast and forgets everything '
    + 'when the power stops. '
    + 'The disk is slower and remembers. '
    + 'Saving is the act of copying from the first to the second. '
    + 'So an hour of typing that was never saved was only ever in the part '
    + 'that forgets. '
    + 'In a place where the power can go at any moment, '
    + 'that is not a small detail. Save often.',

  recap:
    'You know that some parts of a computer put information in '
    + 'and some bring it out. '
    + 'Storage is the part that keeps it.',

  method: [
    'Choose Save, not just close.',
    'Give the file a name that says what it is.',
    'Look at which folder it is being put into, and remember it.',
    'Save again every few minutes while you work.',
    'To find it later, open that folder.',
    'Forgotten the folder? Search for the name.',
  ],

  worked: [
    {
      level: 3,
      ask: 'The power goes off and you had not saved. What happened to your '
        + 'work?',
      steps: [
        'Unsaved work was only in the memory.',
        'Memory empties when the power stops.',
      ],
      answer: 'It is gone. It was never copied to the disk.',
    },
    {
      level: 4,
      ask: 'Why is "Document1" a poor file name?',
      steps: [
        'It says nothing about what is inside.',
        'In a month there will be several like it.',
      ],
      answer: 'Because you will not know which one it is. '
        + 'Name it for what it contains.',
    },
    {
      level: 4,
      ask: 'You saved a file and cannot find it. What do you do?',
      steps: [
        'Think about which folder was showing when you saved.',
        'Look there first.',
        'Still missing? Search for part of the name.',
      ],
      answer: 'Check the folder you saved into, then search the name. '
        + 'The file has not moved; you have lost the address.',
    },
  ],

  traps: [
    {
      mistake: 'Saving only once at the very end.',
      why: 'Everything between the start and the save is unprotected. '
        + 'Save every few minutes.',
    },
    {
      mistake: 'Accepting whatever name is offered.',
      why: 'Document1 tells you nothing later. '
        + 'Name it for what it is.',
    },
    {
      mistake: 'Not noticing the folder.',
      why: 'The file is saved and you cannot find it. '
        + 'Read the folder name before you confirm.',
    },
  ],

  extension:
    'Files can also be stored away from the computer, '
    + 'on a flash drive or on the internet. '
    + 'That protects against the whole machine failing, not just the power. '
    + 'Anything you would be upset to lose should exist in two places.',

  questions: [
    {
      id: 'sd-1',
      ask: 'Where is your work before you save it?',
      kind: 'choice',
      options: ['On the disk', 'In memory, which empties', 'On the screen only'],
      answer: 'In memory, which empties',
      teach: 'Memory is fast and forgets when the power stops. '
        + 'Saving copies it to the disk, which remembers.',
      level: 3,
    },
    {
      id: 'sd-2',
      ask: 'Why name a file carefully?',
      kind: 'choice',
      options: [
        'So you can tell what it is later',
        'So it saves faster',
        'So it takes less space',
      ],
      answer: 'So you can tell what it is later',
      teach: 'Document1 tells you nothing in a month. '
        + 'The name is how you find it again.',
      level: 4,
    },
    {
      id: 'sd-3',
      ask: 'How often should you save?',
      kind: 'choice',
      options: ['Every few minutes', 'Once at the end', 'Only when told to'],
      answer: 'Every few minutes',
      teach: 'Everything since your last save is unprotected, '
        + 'and the power can go at any time.',
      level: 3,
    },
  ],
})

/* ── staying safe online ──────────────────────────────────────────────────── */

teach({
  topicId: 'online-safety',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Never share your full name, address, school, phone number, photographs '
      + 'or passwords online. '
      + 'If something worries you, tell a trusted adult straight away.',
    method: [
      'Before sharing anything, ask whether it could find you in real life.',
      'Never share a password with anybody.',
      'Anything that worries you: tell an adult, and do not reply.',
    ],
  },

  idea:
    'Some things must never be put online. '
    + 'Your full name, your address, your school, your phone number, '
    + 'photographs of yourself, and above all your passwords. '
    + 'If anything online worries you or makes you uncomfortable, '
    + 'tell an adult you trust straight away.',

  mechanism:
    'The reason is that online you cannot tell who you are speaking to. '
    + 'A person can say they are twelve and be forty. '
    + 'Nothing on a screen can prove it. '
    + 'So the rule is not about who seems nice; '
    + 'it is about what information would let a stranger find you '
    + 'or pretend to be you. '
    + 'That is also why a password is different from a secret: '
    + 'somebody with your password can act as you, '
    + 'and whatever they then do appears to be your doing.',

  recap:
    'You know that you do not give your details to a stranger in the street. '
    + 'This is the same rule, where you cannot see who you are talking to.',

  method: [
    'Before you share anything, ask: could this help somebody find me?',
    'Never give your full name, address, school or phone number.',
    'Never share a password, not even with a friend.',
    'If somebody asks to meet you, tell an adult. Do not arrange it.',
    'If something upsets you, do not reply. Tell an adult.',
    'Keep the message. Do not delete it. An adult may need to see it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Somebody online asks which school you attend. What do you do?',
      steps: [
        'That would let them find you in real life.',
      ],
      answer: 'Do not tell them, and tell an adult that you were asked.',
    },
    {
      level: 4,
      ask: 'A friend asks for your password so they can play your game. '
        + 'Is that safe?',
      steps: [
        'With your password they can act as you.',
        'Anything done then looks like you did it.',
        'A password shared is no longer a password.',
      ],
      answer: 'No. Never share a password, even with a friend.',
    },
    {
      level: 4,
      ask: 'Somebody says they are your age and wants to meet. '
        + 'They seem friendly. What is the problem?',
      steps: [
        'Nothing online can prove who somebody is.',
        'Friendly is easy to pretend to be.',
        'Meeting is the one step that cannot be undone.',
      ],
      answer: 'You cannot know who they are. '
        + 'Tell an adult and do not arrange to meet.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a photograph shares nothing.',
      why: 'A uniform shows your school. '
        + 'A background shows your area.',
    },
    {
      mistake: 'Thinking the rule is only about strangers who seem unpleasant.',
      why: 'Somebody meaning harm will seem pleasant. '
        + 'The rule is about the information, not about how they seem.',
    },
    {
      mistake: 'Deleting a message that frightened you.',
      why: 'An adult may need to see it. '
        + 'Stop replying, and keep it.',
    },
  ],

  extension:
    'Things put online are very hard to remove, '
    + 'because other people can copy them before you change your mind. '
    + 'The safest question to ask before posting anything is '
    + 'whether you would mind it still being there in ten years.',

  questions: [
    {
      id: 'os-1',
      ask: 'Which of these should never be shared online?',
      kind: 'choice',
      options: ['Your password', 'Your favourite colour', 'A joke'],
      answer: 'Your password',
      teach: 'Somebody with your password can act as you, '
        + 'and it will look like you did it.',
      level: 3,
    },
    {
      id: 'os-2',
      ask: 'Why is a photograph of yourself in uniform risky?',
      kind: 'choice',
      options: [
        'It shows which school you attend',
        'It uses a lot of data',
        'It is not risky',
      ],
      answer: 'It shows which school you attend',
      teach: 'A picture can carry information you did not mean to give.',
      level: 4,
    },
    {
      id: 'os-3',
      ask: 'A message online frightens you. What should you do?',
      kind: 'choice',
      options: [
        'Keep it and tell a trusted adult',
        'Delete it and say nothing',
        'Reply and tell them to stop',
      ],
      answer: 'Keep it and tell a trusted adult',
      teach: 'Do not reply, and do not delete it. '
        + 'An adult may need to see exactly what was said.',
      level: 3,
    },
  ],
})

/* ── instructions in the right order ──────────────────────────────────────── */

teach({
  topicId: 'steps-in-order',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Instructions must be in order and leave nothing out. '
      + 'A computer does exactly what you say, including the wrong thing.',
    method: [
      'Write the steps in the order they happen.',
      'One action per step.',
      'Give them to somebody else and watch them follow exactly.',
    ],
  },

  idea:
    'A set of instructions tells somebody how to do a task, '
    + 'step by step, in order. '
    + 'Making tea, washing hands, getting to school. '
    + 'The order matters, and so does leaving nothing out.',

  mechanism:
    'A person following your instructions fills in your gaps without '
    + 'noticing. '
    + 'If you forget "put water in the kettle", they will do it anyway, '
    + 'because they know what you meant. '
    + 'A computer will not. '
    + 'It does exactly what it is told, in the order it is told, '
    + 'including the parts that make no sense. '
    + 'That is why writing instructions is the beginning of programming: '
    + 'the skill is noticing the steps you were about to leave out '
    + 'because they seemed obvious.',

  recap:
    'You can write a sentence that says one clear thing. '
    + 'Each step here is one of those.',

  method: [
    'Say what the task is.',
    'List everything needed before you start.',
    'Write the steps in the order they happen.',
    'One action per step. Not three joined with and.',
    'Number them.',
    'Give them to somebody who does not know the task.',
    'Watch them follow it exactly. Every stumble is a missing step.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is wrong with: "Boil the water. Fill the kettle."?',
      steps: [
        'You cannot boil water that is not there yet.',
        'The steps are the right ones in the wrong order.',
      ],
      answer: 'The order is wrong. Fill the kettle first.',
    },
    {
      level: 4,
      ask: 'Why test your instructions on somebody who does not know the task?',
      steps: [
        'Somebody who knows it fills in your gaps without noticing.',
        'Somebody who does not will stop at the gap.',
        'Their stumble shows you the missing step.',
      ],
      answer: 'Because only they will actually stop where a step is missing.',
    },
    {
      level: 4,
      ask: 'Why does a computer need more careful instructions than a person?',
      steps: [
        'A person guesses what you meant.',
        'A computer does exactly what you wrote.',
      ],
      answer: 'Because it will not fill in anything for you, '
        + 'and it will carry out a wrong step without hesitating.',
    },
  ],

  traps: [
    {
      mistake: 'Leaving out a step because it is obvious.',
      why: 'Obvious to you is not obvious to the follower, '
        + 'and never obvious to a computer.',
    },
    {
      mistake: 'Putting three actions in one step.',
      why: 'The follower loses their place. '
        + 'One action per step.',
    },
    {
      mistake: 'Testing it on yourself.',
      why: 'You already know the task, '
        + 'so you will step over every gap without seeing it.',
    },
  ],

  extension:
    'A list of steps in order is called an algorithm, '
    + 'and it is what every program is underneath. '
    + 'Writing clear instructions for a person is the same skill '
    + 'as writing them for a machine, with a more forgiving reader.',

  questions: [
    {
      id: 'si-1',
      ask: 'What is wrong with "Boil the water. Fill the kettle."?',
      kind: 'choice',
      options: ['The order is wrong', 'A step is missing', 'Nothing'],
      answer: 'The order is wrong',
      teach: 'Both steps are needed. They are simply the wrong way round.',
      level: 3,
    },
    {
      id: 'si-2',
      ask: 'How many actions should one step have?',
      kind: 'numeric',
      answer: '1',
      accept: ['one'],
      teach: 'One. Several joined with "and" make the follower lose their '
        + 'place.',
      level: 3,
    },
    {
      id: 'si-3',
      ask: 'Who should test your instructions?',
      kind: 'choice',
      options: [
        'Somebody who does not know the task',
        'Yourself',
        'Somebody who knows it well',
      ],
      answer: 'Somebody who does not know the task',
      teach: 'Anybody who knows it will step over your gaps without noticing '
        + 'them.',
      level: 4,
    },
  ],
})
