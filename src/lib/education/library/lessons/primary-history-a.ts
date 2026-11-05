/**
 * Stored lessons for primary History of Ghana, part A: the child's own past,
 * the national symbols, the peoples of Ghana, and how history is known.
 *
 * Basic 1 to Basic 5, each written at its own year's reading level. The
 * Basic 1 lesson is meant to be spoken to a six year old, in very short
 * sentences, like `basic1-rme.ts`. The Basic 4 and 5 lessons read like
 * `basic4-owop-ghl-computing.ts`.
 *
 * ── Three things these are careful about ────────────────────────────────────
 *
 * The lesson on the peoples of Ghana names the major groups and says roughly
 * where each settled, and never ranks them, counts them against each other,
 * or treats one as the standard. A child in the class belongs to one of
 * these, and the lesson is read by all of them.
 *
 * Migration stories are given as what each people's own tradition tells,
 * attributed to it, and not dressed up with dates nobody can be sure of.
 *
 * The family and community lessons do not assume a mother and a father in
 * one house. A child may live with a grandmother, an aunt or one parent, and
 * every one of those is a family.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── the story of my family (Basic 1) ─────────────────────────────────────── */

teach({
  topicId: 'my-family-history',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Your family is the people who care for you. '
      + 'Your family has a story. '
      + 'Some of it happened before you were born.',
    method: [
      'Name the people in your family.',
      'Ask an older person what happened before you were born.',
      'Tell it back in order.',
    ],
  },

  why:
    'Ama looks at an old photo. '
    + 'She sees a young man and a young woman. '
    + 'They are standing at a church door. '
    + 'Grandma says, “That is your mother and your father.” '
    + 'But Ama is not in the photo. '
    + 'Where was Ama?',

  recap:
    'A family is the people who look after you. '
    + 'Ama lives with her mother, her father and her baby brother. '
    + 'Kofi lives with his grandmother and his aunt. '
    + 'Both of these are families. '
    + 'Some family live far away. '
    + 'They are still your family.',

  idea:
    'Your family is older than you. '
    + 'Your grandparents were children once. '
    + 'Your mother and father were children once. '
    + 'Things happened before you were born. '
    + 'This is your family’s story. '
    + 'History is the story of what happened before.',

  mechanism:
    'You were not there for the old things. '
    + 'So how can you find out? '
    + 'You ask someone who was there. '
    + 'Grandma was there. Papa was there. '
    + 'They tell you. Now the story is yours too. '
    + 'One day you will tell it to a child. '
    + 'That is how a family story lives on.',

  method: [
    'Say who is in your family.',
    'Pick an older person in your family.',
    'Ask: what happened before I was born?',
    'Listen well.',
    'Tell the story back, in the right order.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Kofi lives with his grandmother and his aunt. Is that a family?',
      steps: [
        'A family is the people who look after you.',
        'His grandmother and his aunt look after Kofi.',
      ],
      answer: 'Yes. They are Kofi’s family.',
    },
    {
      level: 2,
      ask: 'Ama’s big brother was born before Ama. Is that part of her family '
        + 'story?',
      steps: [
        'It happened in her family.',
        'It happened before Ama was born.',
      ],
      answer: 'Yes. It is one thing that happened before she was born.',
    },
    {
      level: 2,
      ask: 'Yaw wants to know where Grandpa grew up. What should he do?',
      steps: [
        'Yaw was not there.',
        'Grandpa was there.',
        'So Yaw asks Grandpa.',
      ],
      answer: 'Ask Grandpa, and listen.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a family must be a mother, a father and children.',
      why: 'A family is the people who care for you. '
        + 'It can be a grandmother. It can be an aunt. It can be one parent.',
    },
    {
      mistake: 'Thinking nothing happened before you were born.',
      why: 'Your family was there long before you. '
        + 'Your grandparents had a whole life first.',
    },
    {
      mistake: 'Making up the old story.',
      why: 'You were not there. '
        + 'Ask a person who was there. Tell what they said.',
    },
  ],

  tables: [{
    caption: 'Who is who in a family',
    columns: ['Name', 'Who they are'],
    rows: [
      ['Mother', 'The woman who gave birth to you'],
      ['Father', 'The man who is your parent'],
      ['Brother, sister', 'Other children of your parents'],
      ['Grandmother, grandfather', 'Your mother’s or father’s parents'],
      ['Aunt, uncle', 'Your mother’s or father’s brothers and sisters'],
      ['Cousin', 'The child of your aunt or uncle'],
    ],
  }],

  figure: {
    alt: 'A family tree. At the top are Grandpa and Grandma. A line goes down '
      + 'to Papa and Mama in the middle. Lines go down from them to Ama and '
      + 'Kofi at the bottom.',
    svg: '<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<rect x="70" y="20" width="110" height="40" rx="8"/>'
      + '<rect x="240" y="20" width="110" height="40" rx="8"/>'
      + '<text x="125" y="46" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Grandpa</text>'
      + '<text x="295" y="46" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Grandma</text>'
      + '<line x1="180" y1="40" x2="240" y2="40"/>'
      + '<line x1="210" y1="40" x2="210" y2="110"/>'
      + '<rect x="70" y="110" width="110" height="40" rx="8"/>'
      + '<rect x="240" y="110" width="110" height="40" rx="8"/>'
      + '<text x="125" y="136" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Papa</text>'
      + '<text x="295" y="136" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Mama</text>'
      + '<line x1="180" y1="130" x2="240" y2="130"/>'
      + '<line x1="210" y1="130" x2="210" y2="180"/>'
      + '<line x1="125" y1="180" x2="295" y2="180"/>'
      + '<line x1="125" y1="180" x2="125" y2="200"/>'
      + '<line x1="295" y1="180" x2="295" y2="200"/>'
      + '<rect x="70" y="200" width="110" height="40" rx="8"/>'
      + '<rect x="240" y="200" width="110" height="40" rx="8"/>'
      + '<text x="125" y="226" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Ama</text>'
      + '<text x="295" y="226" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Kofi</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'mfh-1',
      ask: 'What is a family?',
      kind: 'choice',
      options: [
        'The people who look after you',
        'The children in your class',
        'The people in the market',
      ],
      answer: 'The people who look after you',
      teach: 'Your class and the market have many people. '
        + 'Your family is the people who care for you at home.',
      level: 1,
    },
    {
      id: 'mfh-2',
      ask: 'Who is your mother’s mother?',
      kind: 'choice',
      options: ['Your aunt', 'Your grandmother', 'Your sister'],
      answer: 'Your grandmother',
      teach: 'An aunt is your mother’s sister. '
        + 'Your mother’s mother is your grandmother.',
      level: 1,
    },
    {
      id: 'mfh-3',
      ask: 'Akosua lives with her grandmother only. Is that a family?',
      kind: 'choice',
      options: ['No, it is too small', 'Yes, it is a family', 'Only on Sundays'],
      answer: 'Yes, it is a family',
      teach: 'A family does not need many people. '
        + 'Her grandmother looks after her, so they are a family.',
      level: 1,
    },
    {
      id: 'mfh-4',
      ask: 'Who is the child of your aunt?',
      kind: 'choice',
      options: ['Your cousin', 'Your brother', 'Your uncle'],
      answer: 'Your cousin',
      teach: 'Your brother is your parents’ child. '
        + 'Your aunt’s child is your cousin.',
      level: 2,
    },
    {
      id: 'mfh-5',
      ask: 'Which of these happened before Kwame was born?',
      kind: 'choice',
      options: [
        'Kwame went to school today',
        'Kwame’s parents got married',
        'Kwame ate rice for lunch',
      ],
      answer: 'Kwame’s parents got married',
      teach: 'Kwame did the other two himself, so he was alive. '
        + 'His parents married before he came, so that is before he was born.',
      level: 2,
    },
    {
      id: 'mfh-6',
      ask: 'Adwoa wants to know about her family long ago. Who is the best '
        + 'person to ask?',
      kind: 'choice',
      options: ['Her baby brother', 'Her friend at school', 'Her grandfather'],
      answer: 'Her grandfather',
      teach: 'A baby and a friend were not there long ago. '
        + 'Ask the person who was there. Grandfather was.',
      level: 2,
    },
    {
      id: 'mfh-7',
      ask: 'What do we call the story of what happened before?',
      kind: 'choice',
      options: ['A song', 'History', 'A game'],
      answer: 'History',
      teach: 'History is the story of what happened before. '
        + 'Your family’s old story is history too.',
      level: 1,
    },
    {
      id: 'mfh-8',
      ask: 'Grandma was a child before Mama. Mama was a child before Ama. '
        + 'Who was a child first?',
      kind: 'choice',
      options: ['Ama', 'Mama', 'Grandma'],
      answer: 'Grandma',
      teach: 'Go back in order. Ama came after Mama. Mama came after Grandma. '
        + 'So Grandma was a child first.',
      level: 3,
    },
    {
      id: 'mfh-9',
      ask: 'Fuseini’s uncle lives in Tamale. Fuseini lives in Accra. Is the '
        + 'uncle still his family?',
      kind: 'choice',
      options: [
        'No, he lives too far',
        'Yes, family can live far away',
        'Only if he visits',
      ],
      answer: 'Yes, family can live far away',
      teach: 'Being far away does not change who someone is. '
        + 'His uncle is his family in Tamale or anywhere.',
      level: 2,
    },
  ],
})

/* ── how my community began (Basic 2) ─────────────────────────────────────── */

teach({
  topicId: 'my-community-history',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Every town and village was started by somebody, for a reason. '
      + 'Elders keep that story, and you can ask them for it.',
    method: [
      'Find an elder.',
      'Ask who started the town, why there, and what the name means.',
      'Retell it in order, and say who told you.',
    ],
  },

  why:
    'Kwame lives in a village near a river. '
    + 'There are houses, a school, a church, a mosque and a market. '
    + 'One day he asks himself a question. '
    + 'Long ago, there were no houses here at all. '
    + 'Who built the first one, and why did they choose this place?',

  recap:
    'A community is a group of people who live in one place '
    + 'and share it. '
    + 'A village is a small community. A town is a bigger one. '
    + 'In a community there are elders. '
    + 'An elder is an old person who has lived there a long time. '
    + 'Elders know a lot about the past, because they were there '
    + 'or because their own elders told them.',

  idea:
    'Every town and village began somewhere. '
    + 'Somebody came first and settled. '
    + 'They chose the place for a reason, such as water, good land, '
    + 'or safety. '
    + 'The story of how a place began is passed from elders to children. '
    + 'You can find it by asking an elder.',

  mechanism:
    'The first people chose the place because it helped them live. '
    + 'A river gives water to drink and to farm. '
    + 'A hill is easy to keep safe. '
    + 'Good soil grows food. '
    + 'Often the name of the town tells part of the story. '
    + 'Many people tell that Kumasi got its name from a kum tree: '
    + '“Kum ase” means “under the kum tree”. '
    + 'So asking what the name means is a good way to find the start.',

  method: [
    'Find an elder in your community.',
    'Greet them politely and ask if you may ask questions.',
    'Ask: who started this town, and when?',
    'Ask: why did they choose this place?',
    'Ask: what does the name of the town mean?',
    'Retell the story in order, and say who told it to you.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Abena’s village is next to a stream. Why might the first people '
        + 'have settled there?',
      steps: [
        'People need water every day.',
        'A stream gives water to drink, cook and farm.',
      ],
      answer: 'Because the stream gave them water.',
    },
    {
      level: 2,
      ask: 'Kofi asks his great-uncle about the town. What is one good question '
        + 'to ask?',
      steps: [
        'He wants to know how the town started.',
        'So he asks about the beginning.',
      ],
      answer: '“Who were the first people to live here?”',
    },
    {
      level: 3,
      ask: 'An elder tells Ama: “A hunter found this river, built a hut, and '
        + 'his family followed.” How should Ama retell it?',
      steps: [
        'Keep the order: first the hunter found the river.',
        'Then he built a hut.',
        'Then his family came.',
        'Say who told her.',
      ],
      answer: '“Our elder told me that a hunter found the river first, built a '
        + 'hut, and then his family came to live there.”',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a town has always been there.',
      why: 'Every town was once empty land. Somebody came first.',
    },
    {
      mistake: 'Mixing up the order when you retell.',
      why: 'A story happens in order. What came first must be told first.',
    },
    {
      mistake: 'Forgetting to say who told you.',
      why: 'Saying “Grandpa Mensah told me” lets others know '
        + 'where the story came from, so they can ask too.',
    },
  ],

  tables: [{
    caption: 'Good questions to ask an elder about your town',
    columns: ['Question', 'What it tells you'],
    rows: [
      ['Who came here first?', 'Who started the town'],
      ['Why did they choose this place?', 'What the land gave them'],
      ['What does the name mean?', 'A clue to how it began'],
      ['What was here before the houses?', 'What the land was like'],
      ['Who told you this story?', 'How the story was passed on'],
    ],
  }],

  questions: [
    {
      id: 'mch-1',
      ask: 'Who is an elder?',
      kind: 'choice',
      options: [
        'A new baby in the town',
        'An old person who has lived there a long time',
        'A visitor from another country',
      ],
      answer: 'An old person who has lived there a long time',
      teach: 'A baby or a visitor has not been there long. '
        + 'An elder is old and has lived in the place a long time.',
      level: 1,
    },
    {
      id: 'mch-2',
      ask: 'Who can best tell you how your village began?',
      kind: 'choice',
      options: ['An elder in the village', 'A tro-tro passenger', 'Your baby sister'],
      answer: 'An elder in the village',
      teach: 'The story is kept by the people who have lived there longest. '
        + 'Ask an elder.',
      level: 1,
    },
    {
      id: 'mch-3',
      ask: 'Why did many first settlers choose a place near a river?',
      kind: 'choice',
      options: [
        'Rivers are pretty',
        'The river gave them water',
        'Rivers keep away the rain',
      ],
      answer: 'The river gave them water',
      teach: 'People need water every day to drink, cook and farm. '
        + 'That is why so many towns are beside rivers.',
      level: 2,
    },
    {
      id: 'mch-4',
      ask: 'Many people say the name Kumasi comes from “Kum ase”. What does '
        + 'that mean?',
      kind: 'choice',
      options: ['Big market', 'Under the kum tree', 'New river'],
      answer: 'Under the kum tree',
      teach: 'A name can tell how a place began. '
        + '“Kum ase” means “under the kum tree”.',
      level: 2,
    },
    {
      id: 'mch-5',
      ask: 'Which is a good question to ask an elder about your town?',
      kind: 'choice',
      options: [
        'What is your favourite food?',
        'Who came here first?',
        'Can I have some money?',
      ],
      answer: 'Who came here first?',
      teach: 'You want the story of how the town started. '
        + 'Ask about the beginning: who came first, and why.',
      level: 2,
    },
    {
      id: 'mch-6',
      ask: 'An elder says: “First a farmer came. Then he built a house. Then '
        + 'his family joined him.” What happened second?',
      kind: 'choice',
      options: ['A farmer came', 'His family joined him', 'He built a house'],
      answer: 'He built a house',
      teach: 'Count the steps in order. One: the farmer came. '
        + 'Two: he built a house. Three: his family joined him.',
      level: 2,
    },
    {
      id: 'mch-7',
      ask: 'Why should you say who told you the story when you retell it?',
      kind: 'choice',
      options: [
        'So people know where the story came from',
        'So the story is shorter',
        'So nobody asks you anything',
      ],
      answer: 'So people know where the story came from',
      teach: 'Saying who told you shows where the story came from. '
        + 'Then others can ask that person too.',
      level: 3,
    },
    {
      id: 'mch-8',
      ask: 'Yaw’s town is on a hill. Which reason might the first people '
        + 'have had for living there?',
      kind: 'choice',
      options: [
        'A hill is easy to keep safe',
        'A hill has the most water',
        'A hill is close to the sea',
      ],
      answer: 'A hill is easy to keep safe',
      teach: 'Water is usually lower down, not on a hill. '
        + 'From a hill people can see who is coming, so it is easy to keep safe.',
      level: 3,
    },
    {
      id: 'mch-9',
      ask: 'Was there always a town where your town is now?',
      kind: 'choice',
      options: [
        'Yes, it has always been there',
        'No, somebody came first and started it',
        'Nobody can ever find out',
      ],
      answer: 'No, somebody came first and started it',
      teach: 'Every town was empty land once. '
        + 'Somebody settled first, and an elder can often tell you who.',
      level: 1,
    },
  ],
})

/* ── the flag, the anthem and the coat of arms (Basic 2) ──────────────────── */

teach({
  topicId: 'national-symbols-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Ghana’s flag is red, gold and green with a black star. '
      + 'Each part stands for something about Ghana.',
    method: [
      'Name the part.',
      'Say what it stands for.',
      'Say how we show respect for it.',
    ],
  },

  why:
    'On Independence Day, 6 March, Kofi sees flags everywhere. '
    + 'They are on cars, on schools and on the tro-tro. '
    + 'Every flag is red, gold and green, with a black star. '
    + 'Why those colours? Why a star?',

  recap:
    'A symbol is a picture or a thing that stands for something else. '
    + 'A red light at the road stands for “stop”. '
    + 'A country has symbols too. '
    + 'They stand for the country and its people. '
    + 'Ghana became a free country on 6 March 1957. '
    + 'Its flag was first raised then.',

  idea:
    'Ghana has three main national symbols. '
    + 'The flag. The coat of arms. The national anthem. '
    + 'The flag has three stripes, red on top, gold in the middle, '
    + 'green at the bottom, with a black star in the gold. '
    + 'Red stands for the people who died fighting for freedom. '
    + 'Gold stands for the gold and other riches in the ground. '
    + 'Green stands for the forests and farms. '
    + 'The black star stands for the freedom of Africa.',

  mechanism:
    'Each part was chosen to say something true about Ghana. '
    + 'Ghana has gold, so there is gold in the flag. '
    + 'Ghana has forests and cocoa farms, so there is green. '
    + 'People suffered to make Ghana free, so there is red. '
    + 'Ghana was the first country south of the Sahara to win freedom from '
    + 'European rule, so the black star stands for all of Africa being free. '
    + 'The flag was designed by Theodosia Okoh. '
    + 'The coat of arms is a shield held by two eagles. '
    + 'On the shield are a sword and a staff for the chiefs, '
    + 'a castle for the government, a cocoa tree for farming, '
    + 'and a mine for gold. '
    + 'At the bottom are the words “Freedom and Justice”. '
    + 'The national anthem is the country’s song. '
    + 'It begins “God bless our homeland Ghana”. '
    + 'We stand still and quiet when it is sung.',

  method: [
    'Name the symbol: flag, coat of arms or anthem.',
    'Name the part, such as a colour or a picture.',
    'Say what that part stands for.',
    'Say how we show respect: stand still, stand straight, be quiet.',
  ],

  worked: [
    {
      level: 1,
      ask: 'What does the gold stripe stand for?',
      steps: [
        'Gold is a metal dug from the ground.',
        'Ghana has a lot of it.',
      ],
      answer: 'The gold and other riches in Ghana’s ground.',
    },
    {
      level: 2,
      ask: 'Why is there a cocoa tree on the coat of arms?',
      steps: [
        'Many people in Ghana grow cocoa.',
        'It stands for farming.',
      ],
      answer: 'It stands for farming and the wealth from the land.',
    },
    {
      level: 2,
      ask: 'The anthem starts at the school gathering. Adwoa is talking. What '
        + 'should she do?',
      steps: [
        'The anthem is a national symbol.',
        'We show respect by standing still and quiet.',
      ],
      answer: 'Stop talking, stand still and stand straight.',
    },
  ],

  traps: [
    {
      mistake: 'Putting the stripes in the wrong order.',
      why: 'Red is on top. Gold is in the middle. Green is at the bottom. '
        + 'The star sits in the gold.',
    },
    {
      mistake: 'Thinking red stands for danger.',
      why: 'On a road sign, red can mean danger. '
        + 'On Ghana’s flag, red stands for those who died for freedom.',
    },
    {
      mistake: 'Thinking the black star stands only for Ghana.',
      why: 'It stands for the freedom of all Africa. '
        + 'Ghana led the way, and hoped others would follow.',
    },
  ],

  tables: [
    {
      caption: 'The parts of Ghana’s flag',
      columns: ['Part', 'Where it is', 'What it stands for'],
      rows: [
        ['Red stripe', 'Top', 'The people who died fighting for freedom'],
        ['Gold stripe', 'Middle', 'Gold and other riches in the ground'],
        ['Green stripe', 'Bottom', 'The forests and farms'],
        ['Black star', 'In the gold stripe', 'The freedom of Africa'],
      ],
    },
    {
      caption: 'What is on the coat of arms',
      columns: ['Picture', 'What it stands for'],
      rows: [
        ['A sword and a staff', 'The chiefs and local rule'],
        ['A castle', 'The national government'],
        ['A cocoa tree', 'Farming'],
        ['A mine', 'Gold and other minerals'],
        ['Two eagles', 'They hold up the shield and keep watch'],
        ['“Freedom and Justice”', 'Ghana’s motto'],
      ],
    },
  ],

  figure: {
    alt: 'Ghana’s flag: three flat stripes, red on top, gold in the middle '
      + 'and green at the bottom, with a black five-pointed star in the '
      + 'middle of the gold stripe. Labels on the right say what each part '
      + 'stands for.',
    svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<g transform="translate(20,20)">'
      + '<rect x="0" y="0" width="300" height="60" fill="#ce1126" stroke="none"/>'
      + '<rect x="0" y="60" width="300" height="60" fill="#fcd116" stroke="none"/>'
      + '<rect x="0" y="120" width="300" height="60" fill="#006b3f" stroke="none"/>'
      + '<polygon points="150,60 157.1,80.3 178.5,80.7 161.4,93.7 167.6,114.3 '
      + '150,102 132.4,114.3 138.6,93.7 121.5,80.7 142.9,80.3" '
      + 'fill="#000000" stroke="none"/>'
      + '<rect x="0" y="0" width="300" height="180"/>'
      + '</g>'
      + '<text x="340" y="56" font-size="16" fill="currentColor" stroke="none">'
      + 'Red: those who died</text>'
      + '<text x="340" y="74" font-size="16" fill="currentColor" stroke="none">'
      + 'for freedom</text>'
      + '<text x="340" y="108" font-size="16" fill="currentColor" stroke="none">'
      + 'Gold: riches in the ground</text>'
      + '<text x="340" y="132" font-size="16" fill="currentColor" stroke="none">'
      + 'Star: freedom of Africa</text>'
      + '<text x="340" y="176" font-size="16" fill="currentColor" stroke="none">'
      + 'Green: forests and farms</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'nsy-1',
      ask: 'Which colour is at the top of Ghana’s flag?',
      kind: 'choice',
      options: ['Green', 'Gold', 'Red'],
      answer: 'Red',
      teach: 'Read the flag from the top down: red, then gold, then green.',
      level: 1,
    },
    {
      id: 'nsy-2',
      ask: 'What colour is the star on Ghana’s flag?',
      kind: 'choice',
      options: ['Black', 'White', 'Gold'],
      answer: 'Black',
      teach: 'The star is black. It sits in the gold stripe, '
        + 'which is why it is easy to see.',
      level: 1,
    },
    {
      id: 'nsy-3',
      ask: 'What does the green stripe stand for?',
      kind: 'choice',
      options: [
        'The forests and farms',
        'The sea',
        'The people who died for freedom',
      ],
      answer: 'The forests and farms',
      teach: 'Green is the colour of leaves and crops. '
        + 'It stands for Ghana’s forests and farms. Red is for those who died.',
      level: 1,
    },
    {
      id: 'nsy-4',
      ask: 'What does the red stripe stand for?',
      kind: 'choice',
      options: [
        'Danger on the road',
        'The people who died fighting for freedom',
        'Ripe tomatoes',
      ],
      answer: 'The people who died fighting for freedom',
      teach: 'On a road sign red can mean danger, but not on the flag. '
        + 'On the flag it stands for those who gave their lives for freedom.',
      level: 2,
    },
    {
      id: 'nsy-5',
      ask: 'What does the black star stand for?',
      kind: 'choice',
      options: ['The night sky', 'The freedom of Africa', 'The gold mines'],
      answer: 'The freedom of Africa',
      teach: 'Gold stands for the mines, not the star. '
        + 'The black star stands for the freedom of all Africa.',
      level: 2,
    },
    {
      id: 'nsy-6',
      ask: 'What is the national anthem?',
      kind: 'choice',
      options: [
        'The country’s song',
        'The country’s flag',
        'The country’s money',
      ],
      answer: 'The country’s song',
      teach: 'The flag is a cloth and the anthem is a song. '
        + 'Ghana’s anthem begins “God bless our homeland Ghana”.',
      level: 1,
    },
    {
      id: 'nsy-7',
      ask: 'The national anthem is being sung. What should Kwame do?',
      kind: 'choice',
      options: [
        'Keep playing football',
        'Stand still and be quiet',
        'Sit down and eat',
      ],
      answer: 'Stand still and be quiet',
      teach: 'The anthem is a symbol of the whole country. '
        + 'We show respect by stopping, standing still and keeping quiet.',
      level: 2,
    },
    {
      id: 'nsy-8',
      ask: 'On the coat of arms, what does the cocoa tree stand for?',
      kind: 'choice',
      options: ['The government', 'The chiefs', 'Farming'],
      answer: 'Farming',
      teach: 'The castle stands for the government and the sword and staff '
        + 'for the chiefs. The cocoa tree stands for farming.',
      level: 2,
    },
    {
      id: 'nsy-9',
      ask: 'Which words are written on Ghana’s coat of arms?',
      kind: 'choice',
      options: ['Freedom and Justice', 'Work and Happiness', 'Gold and Cocoa'],
      answer: 'Freedom and Justice',
      teach: 'The motto at the bottom of the coat of arms is '
        + '“Freedom and Justice”.',
      level: 3,
    },
    {
      id: 'nsy-10',
      ask: 'Why is there gold in Ghana’s flag?',
      kind: 'choice',
      options: [
        'Because gold is a pretty colour',
        'Because Ghana has gold and other riches in the ground',
        'Because the sun is gold',
      ],
      answer: 'Because Ghana has gold and other riches in the ground',
      teach: 'Each colour was chosen to say something true about Ghana. '
        + 'Ghana has gold in its ground, so the flag has gold.',
      level: 3,
    },
  ],
})

/* ── then and now (Basic 3) ───────────────────────────────────────────────── */

teach({
  topicId: 'then-and-now',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Some things in a community change over time and some stay the same. '
      + 'Comparing then and now shows which is which.',
    method: [
      'Pick one part of life, such as water or travel.',
      'Say how it was done long ago.',
      'Say how it is done today.',
      'Say whether it changed or stayed the same.',
    ],
  },

  why:
    'Akosua turns on the tap and water comes out. '
    + 'Her grandmother laughs. '
    + '“When I was your age, I walked to the stream with a pot on my head, '
    + 'every morning before school.” '
    + 'Akosua and her grandmother live in the same town. '
    + 'Why was a morning so different for them?',

  recap:
    'Long ago means a time far back, before you were born. '
    + 'Your grandparents’ childhood was long ago. '
    + 'Today, or now, means the time you live in. '
    + 'Between them is a lot of time: fifty years, sixty years, or more. '
    + 'In that time, children grew up, new things were made, '
    + 'and people found new ways to do old jobs.',

  idea:
    'The way people live changes over time. '
    + 'Long ago, many people fetched water from a stream, cooked on '
    + 'firewood, lit lamps at night and walked long distances. '
    + 'Today many people have taps, gas, electricity, phones and tro-tros. '
    + 'But some things stay the same. '
    + 'People still farm, still name babies, still hold festivals and '
    + 'still greet their elders. '
    + 'What changes is called change. '
    + 'What stays the same is called continuity.',

  mechanism:
    'Things change when people find an easier or faster way. '
    + 'A pipe brings water so nobody walks to the stream. '
    + 'A phone carries a message in a moment, where a messenger once '
    + 'walked for a day. '
    + 'Other things stay because they still matter to people. '
    + 'A naming ceremony still welcomes a baby. '
    + 'A festival still brings the town together. '
    + 'So when you compare, you look at the job people needed done, '
    + 'and ask if the way of doing it changed.',

  method: [
    'Choose one part of life: water, light, cooking, travel, messages, houses or celebrations.',
    'Ask an elder how it was done long ago.',
    'Say how it is done today.',
    'Write them side by side.',
    'Say if it is a change or a continuity, and why.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Long ago Yaw’s grandfather walked to Kumasi. Today Yaw goes by '
        + 'tro-tro. Is that change or continuity?',
      steps: [
        'The job is the same: getting to Kumasi.',
        'The way of doing it is different.',
      ],
      answer: 'Change. The way of travelling changed.',
    },
    {
      level: 2,
      ask: 'Long ago babies in Abena’s family were named on the eighth day. '
        + 'Her baby sister was named on the eighth day too. Change or '
        + 'continuity?',
      steps: [
        'Then: a naming ceremony.',
        'Now: a naming ceremony, the same way.',
      ],
      answer: 'Continuity. It stayed the same.',
    },
    {
      level: 3,
      ask: 'Long ago people sent a messenger. Today they send a phone '
        + 'message. Why did this change?',
      steps: [
        'A messenger takes hours or days.',
        'A phone message takes a moment.',
        'People choose the faster way.',
      ],
      answer: 'Because the phone is much faster than walking with a message.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking everything has changed.',
      why: 'Look again. Festivals, greetings, farming and naming are still '
        + 'here. Those are continuity.',
    },
    {
      mistake: 'Thinking long ago was worse in every way.',
      why: 'Old ways had good things too, like families eating together. '
        + 'Comparing means saying what is different, not who is better.',
    },
    {
      mistake: 'Guessing how it was long ago.',
      why: 'Ask an elder who lived then. Their memory is the evidence.',
    },
  ],

  tables: [{
    caption: 'Then and now in a Ghanaian community',
    columns: ['Part of life', 'Long ago', 'Today', 'Change or continuity'],
    rows: [
      ['Water', 'Fetched from a stream or well', 'Often from a tap', 'Change'],
      ['Light at night', 'Oil lamp or fire', 'Often electricity', 'Change'],
      ['Cooking', 'Firewood, grinding stone', 'Gas, charcoal, a corn mill', 'Change'],
      ['Travel', 'Walking, canoe', 'Tro-tro, car, motorbike', 'Change'],
      ['Messages', 'A messenger or a drum', 'Phone call or text', 'Change'],
      ['Houses', 'Mud walls, thatch roof', 'Blocks, iron sheet roof', 'Change'],
      ['Naming a baby', 'Naming ceremony', 'Naming ceremony', 'Continuity'],
      ['Festivals', 'Held every year', 'Still held every year', 'Continuity'],
    ],
  }],

  figure: {
    alt: 'A timeline arrow running from left to right. On the left is "Long '
      + 'ago: grandparents were children", with a pot and stream. In the '
      + 'middle is "Parents were children". On the right is "Today: you", '
      + 'with a tap.',
    svg: '<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="40" y1="90" x2="560" y2="90"/>'
      + '<polyline points="545,80 560,90 545,100"/>'
      + '<circle cx="90" cy="90" r="7" fill="currentColor"/>'
      + '<circle cx="300" cy="90" r="7" fill="currentColor"/>'
      + '<circle cx="510" cy="90" r="7" fill="currentColor"/>'
      + '<text x="90" y="60" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Long ago</text>'
      + '<text x="90" y="125" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Grandparents</text>'
      + '<text x="90" y="145" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">were children</text>'
      + '<text x="300" y="60" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Not so long ago</text>'
      + '<text x="300" y="125" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Parents</text>'
      + '<text x="300" y="145" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">were children</text>'
      + '<text x="510" y="60" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Now</text>'
      + '<text x="510" y="125" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">You are</text>'
      + '<text x="510" y="145" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a child</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'tan-1',
      ask: 'Long ago, where did many people get their water?',
      kind: 'choice',
      options: ['From a tap', 'From a stream or well', 'From a shop'],
      answer: 'From a stream or well',
      teach: 'Taps came later. Long ago many people walked to a stream '
        + 'or a well and carried the water home.',
      level: 1,
    },
    {
      id: 'tan-2',
      ask: 'What do we call something that stays the same over time?',
      kind: 'choice',
      options: ['Change', 'Continuity', 'History'],
      answer: 'Continuity',
      teach: 'Change is when something becomes different. '
        + 'Continuity is when it stays the same.',
      level: 1,
    },
    {
      id: 'tan-3',
      ask: 'Long ago houses often had thatch roofs. Today many have iron '
        + 'sheet roofs. Is this change or continuity?',
      kind: 'choice',
      options: ['Change', 'Continuity', 'Neither'],
      answer: 'Change',
      teach: 'The roof is made of something different now, '
        + 'so it is a change.',
      level: 2,
    },
    {
      id: 'tan-4',
      ask: 'Kofi’s town has held its festival every year since his '
        + 'grandfather was a boy. Is this change or continuity?',
      kind: 'choice',
      options: ['Change', 'Continuity', 'Neither'],
      answer: 'Continuity',
      teach: 'The festival still happens, the same as long ago. '
        + 'Something that carries on is continuity.',
      level: 2,
    },
    {
      id: 'tan-5',
      ask: 'Long ago, how did many people light their homes at night?',
      kind: 'choice',
      options: ['With electric bulbs', 'With phone torches', 'With oil lamps or fire'],
      answer: 'With oil lamps or fire',
      teach: 'Electricity and phones came later. '
        + 'Long ago people used oil lamps and fire.',
      level: 1,
    },
    {
      id: 'tan-6',
      ask: 'Why did many people stop walking to the stream for water?',
      kind: 'choice',
      options: [
        'The stream moved away',
        'Pipes and taps brought water closer',
        'People stopped needing water',
      ],
      answer: 'Pipes and taps brought water closer',
      teach: 'People still need water. What changed is the way. '
        + 'A tap is easier than a long walk, so people use it.',
      level: 2,
    },
    {
      id: 'tan-7',
      ask: 'Which of these is still done today, the same as long ago?',
      kind: 'choice',
      options: [
        'Sending news by a messenger on foot',
        'Lighting homes only by fire',
        'Holding a naming ceremony for a baby',
      ],
      answer: 'Holding a naming ceremony for a baby',
      teach: 'Messengers and firelight have mostly been replaced. '
        + 'Naming ceremonies are still held, so they are continuity.',
      level: 3,
    },
    {
      id: 'tan-8',
      ask: 'Ama wants to know how people cooked long ago. What is the best '
        + 'way to find out?',
      kind: 'choice',
      options: [
        'Guess',
        'Ask an elder who cooked then',
        'Ask her little brother',
      ],
      answer: 'Ask an elder who cooked then',
      teach: 'A guess is not evidence and her brother was not there. '
        + 'An elder who lived then can tell her what really happened.',
      level: 2,
    },
    {
      id: 'tan-9',
      ask: 'Mensah says, “Long ago everything was bad, and now everything is '
        + 'good.” What is wrong with this?',
      kind: 'choice',
      options: [
        'Nothing, he is right',
        'Old ways had good things too, and some things stayed the same',
        'Nothing has ever changed',
      ],
      answer: 'Old ways had good things too, and some things stayed the same',
      teach: 'Comparing then and now means saying what is different and what '
        + 'stayed. It does not mean one time was all good or all bad.',
      level: 3,
    },
  ],
})

/* ── the peoples of Ghana (Basic 3) ───────────────────────────────────────── */

teach({
  topicId: 'ethnic-groups-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Ghana is home to many peoples, called ethnic groups. '
      + 'Each has its own language and ways, and each settled mostly in '
      + 'one part of the country.',
    method: [
      'Name the group.',
      'Say roughly where in Ghana it settled.',
      'Name one people that belongs to it.',
    ],
  },

  why:
    'In Fuseini’s class in Accra, children speak many languages at home. '
    + 'Fuseini speaks Dagbani. Ama speaks Twi. Kwame speaks Ewe. '
    + 'Naa speaks Ga. '
    + 'They are all Ghanaians. '
    + 'So why do they speak different languages at home, '
    + 'and where did each language come from?',

  recap:
    'Ghana is a country in West Africa. '
    + 'Its south is on the sea, at the Gulf of Guinea. '
    + 'Its north is dry savanna, far from the sea. '
    + 'Its east has the Volta River and Lake Volta. '
    + 'In the middle are forests. '
    + 'People settled in all of these places, long ago.',

  idea:
    'An ethnic group is a people who share a language, ways of life '
    + 'and a story of where they came from. '
    + 'Ghana has many. The major groups are the Akan, the Mole-Dagbani, '
    + 'the Ewe, the Ga-Adangbe, the Guan, the Gurma, the Grusi and the Mande. '
    + 'Each group is made of smaller peoples who speak related languages. '
    + 'Each settled mostly in one part of Ghana, '
    + 'though today people of every group live all over the country.',

  mechanism:
    'Long ago families settled where they could live well, '
    + 'and their children stayed near them. '
    + 'So the people who spoke one language ended up living close together. '
    + 'That is why each group is linked with a part of the country. '
    + 'The Akan settled across the south and the middle, in the forest. '
    + 'The Ewe settled in the south-east, in the Volta Region. '
    + 'The Ga-Adangbe settled on the coast plains around Accra. '
    + 'The Mole-Dagbani settled in the north. '
    + 'The Gurma settled in the north-east, and the Grusi in the far north. '
    + 'The Mande live in small groups in the north. '
    + 'The Guan live in many places, scattered across the country. '
    + 'No group is better than another. Each is part of Ghana.',

  method: [
    'Name the group.',
    'Say roughly where it settled: south, middle, north, east or along the coast.',
    'Name one people in it, such as the Asante for the Akan.',
    'Never call any group better or worse.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Where did the Ewe mostly settle?',
      steps: [
        'The Ewe live in the south-east.',
        'That is the Volta Region, by the Volta River.',
      ],
      answer: 'In the south-east, in the Volta Region.',
    },
    {
      level: 2,
      ask: 'The Asante, the Fante and the Akyem: which group do they belong '
        + 'to?',
      steps: [
        'All three speak Akan languages.',
        'So they are part of the Akan group.',
      ],
      answer: 'The Akan.',
    },
    {
      level: 3,
      ask: 'Fuseini is Dagomba but lives in Accra. Does that change his group?',
      steps: [
        'His group comes from his people, language and story.',
        'Where he lives now does not change that.',
      ],
      answer: 'No. He is still Mole-Dagbani. People of every group live '
        + 'all over Ghana today.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking every person lives where their group first settled.',
      why: 'That is where the group settled long ago. '
        + 'Today people of every group live in every region.',
    },
    {
      mistake: 'Thinking one group is better or more Ghanaian than another.',
      why: 'Every group is part of Ghana. Different is not better or worse.',
    },
    {
      mistake: 'Thinking a group speaks only one language.',
      why: 'A group is made of several peoples. '
        + 'Their languages are related, like cousins.',
    },
  ],

  tables: [{
    caption: 'The major ethnic groups of Ghana and roughly where each settled',
    columns: ['Group', 'Roughly where', 'Some peoples in it'],
    rows: [
      ['Akan', 'South and middle, in the forest and on the coast', 'Asante, Fante, Akyem, Bono, Akuapem'],
      ['Ewe', 'South-east, the Volta Region', 'Anlo, Ho, Peki'],
      ['Ga-Adangbe', 'Coast plains around Accra and to the east', 'Ga, Krobo, Ada'],
      ['Mole-Dagbani', 'The north', 'Dagomba, Mamprusi, Nanumba, Frafra, Dagaaba'],
      ['Gurma', 'The north-east', 'Konkomba, Bimoba, Basare'],
      ['Grusi', 'The far north', 'Kasena, Sisaala'],
      ['Guan', 'Scattered in many places', 'Gonja, Efutu, Larteh'],
      ['Mande', 'Small groups in the north', 'Wangara, Bisa'],
    ],
    note: 'The groups are in no order of importance. '
      + 'Today people of every group live all over Ghana.',
  }],

  questions: [
    {
      id: 'eth-1',
      ask: 'What is an ethnic group?',
      kind: 'choice',
      options: [
        'A people who share a language, ways of life and a story of where they came from',
        'All the children in one school',
        'A football team',
      ],
      answer: 'A people who share a language, ways of life and a story of where they came from',
      teach: 'A school or a team is chosen. An ethnic group is a people '
        + 'joined by language, ways and a shared story.',
      level: 1,
    },
    {
      id: 'eth-2',
      ask: 'Which of these is a major ethnic group of Ghana?',
      kind: 'choice',
      options: ['Ewe', 'Kumasi', 'Volta'],
      answer: 'Ewe',
      teach: 'Kumasi is a city and Volta is a river. '
        + 'The Ewe are a people.',
      level: 1,
    },
    {
      id: 'eth-3',
      ask: 'Where did the Mole-Dagbani mostly settle?',
      kind: 'choice',
      options: ['On the coast', 'In the north', 'In the south-east'],
      answer: 'In the north',
      teach: 'The south-east is Ewe land and the coast near Accra is Ga-Adangbe. '
        + 'The Mole-Dagbani settled in the north.',
      level: 2,
    },
    {
      id: 'eth-4',
      ask: 'Where did the Ga-Adangbe mostly settle?',
      kind: 'choice',
      options: [
        'On the coast plains around Accra',
        'In the far north',
        'In the middle forest',
      ],
      answer: 'On the coast plains around Accra',
      teach: 'The Ga-Adangbe settled by the sea, on the plains around Accra '
        + 'and to the east of it.',
      level: 2,
    },
    {
      id: 'eth-5',
      ask: 'The Asante and the Fante belong to which group?',
      kind: 'choice',
      options: ['Ewe', 'Akan', 'Gurma'],
      answer: 'Akan',
      teach: 'The Asante and the Fante speak Akan languages, '
        + 'so they are part of the Akan group.',
      level: 2,
    },
    {
      id: 'eth-6',
      ask: 'Which group lives in many places, scattered across Ghana?',
      kind: 'choice',
      options: ['The Guan', 'The Ewe', 'The Grusi'],
      answer: 'The Guan',
      teach: 'Most groups are linked with one part of Ghana. '
        + 'The Guan are found in many places across the country.',
      level: 3,
    },
    {
      id: 'eth-7',
      ask: 'Where did the Ewe mostly settle?',
      kind: 'choice',
      options: ['In the north-west', 'Around Kumasi', 'In the south-east, in the Volta Region'],
      answer: 'In the south-east, in the Volta Region',
      teach: 'Kumasi is in Akan land. The Ewe settled in the south-east, '
        + 'by the Volta River.',
      level: 2,
    },
    {
      id: 'eth-8',
      ask: 'Kwame is Ewe and lives in Tamale. Is he still Ewe?',
      kind: 'choice',
      options: [
        'No, he is now Mole-Dagbani',
        'Yes, moving does not change his group',
        'No, he has no group now',
      ],
      answer: 'Yes, moving does not change his group',
      teach: 'A group comes from your people, language and story, '
        + 'not from the town you live in today.',
      level: 3,
    },
    {
      id: 'eth-9',
      ask: 'Which group is the best in Ghana?',
      kind: 'choice',
      options: [
        'The biggest one',
        'The one in the capital',
        'None. Every group is part of Ghana and none is better',
      ],
      answer: 'None. Every group is part of Ghana and none is better',
      teach: 'Groups are different, not better or worse. '
        + 'Size or where a group lives does not make it better.',
      level: 2,
    },
    {
      id: 'eth-10',
      ask: 'Which two groups settled in the north and north-east?',
      kind: 'choice',
      options: [
        'Mole-Dagbani and Gurma',
        'Ewe and Ga-Adangbe',
        'Akan and Ewe',
      ],
      answer: 'Mole-Dagbani and Gurma',
      teach: 'The Ewe and Ga-Adangbe are in the south, and the Akan in the '
        + 'south and middle. The Mole-Dagbani and the Gurma are in the north.',
      level: 3,
    },
  ],
})

/* ── where history comes from (Basic 4) ───────────────────────────────────── */

teach({
  topicId: 'sources-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'History comes from three places: people who were there, '
      + 'things they left behind, and what was written down. '
      + 'Each of these is called a source.',
    method: [
      'Ask what the clue is.',
      'Sort it: a person telling, a thing left behind, or writing.',
      'Ask what it tells you about the past.',
    ],
  },

  why:
    'Kofi’s class visits Elmina Castle on the coast. '
    + 'The guide says the Portuguese built it in 1482. '
    + 'That was more than five hundred years ago. '
    + 'Nobody alive today was there. '
    + 'So how can the guide be sure?',

  recap:
    'History is the story of what happened in the past. '
    + 'The past is everything that has already happened, '
    + 'from yesterday back to long, long ago. '
    + 'Most of the people from long ago are no longer alive. '
    + 'They cannot tell us themselves. '
    + 'So a historian, a person who finds out about the past, '
    + 'works like a detective, looking for clues.',

  idea:
    'A clue about the past is called a source. '
    + 'There are three kinds. '
    + 'First, oral sources: people who were there, or who heard the story '
    + 'from those who were, telling it in words. '
    + 'Second, things left behind: buildings, tools, pots, beads, '
    + 'drums and bones. These are often called artefacts. '
    + 'Third, written sources: letters, diaries, books, newspapers, '
    + 'maps and records that people wrote at the time.',

  mechanism:
    'Each kind of source tells us something the others may not. '
    + 'An elder can tell what it felt like to live then. '
    + 'A pot or a wall shows what people made and used. '
    + 'Some old things are buried, and archaeologists dig carefully to find them. '
    + 'Writing can give exact names and dates. '
    + 'Elmina Castle is a thing left behind, '
    + 'and the date 1482 comes from records written by the Portuguese. '
    + 'When two or three kinds of source agree, '
    + 'a historian can be more sure the story is true.',

  method: [
    'Look at the clue.',
    'Ask: is it a person telling, a thing left behind, or writing?',
    'Ask: what does it tell us about the past?',
    'Look for another source that says the same, to check it.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Adwoa finds her great-grandmother’s old cooking pot. What kind '
        + 'of source is it?',
      steps: [
        'It is not a person telling a story.',
        'It is not writing.',
        'It is a thing left behind.',
      ],
      answer: 'A thing left behind, an artefact.',
    },
    {
      level: 2,
      ask: 'Yaw reads a letter his grandfather wrote in 1960. What kind of '
        + 'source is it?',
      steps: [
        'It was written down at the time.',
      ],
      answer: 'A written source.',
    },
    {
      level: 3,
      ask: 'An elder says the town market began under a big tree. An old map '
        + 'shows a market by the same tree. What does this tell a historian?',
      steps: [
        'One oral source and one written source.',
        'They say the same thing.',
        'Two sources agreeing makes the story more sure.',
      ],
      answer: 'The story is more likely true, because two kinds of source '
        + 'agree.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking only books are sources.',
      why: 'Much of Ghana’s history was kept by telling, not writing. '
        + 'People and things are sources too.',
    },
    {
      mistake: 'Calling a building a written source because it has a date on it.',
      why: 'The building itself is a thing left behind. '
        + 'Ask what the clue mostly is.',
    },
    {
      mistake: 'Trusting one source alone.',
      why: 'One source can be wrong. Check it against another.',
    },
  ],

  tables: [{
    caption: 'The three places history comes from',
    columns: ['Kind of source', 'What it is', 'Examples'],
    rows: [
      ['Oral', 'People telling in words', 'An elder’s story, a song, drum language, a proverb'],
      ['Things left behind', 'Objects and buildings from the past', 'Elmina Castle, old pots, beads, tools, stools'],
      ['Written', 'Words written down at the time', 'Letters, diaries, books, newspapers, maps'],
    ],
  }],

  figure: {
    alt: 'Three boxes side by side, each with a label: "People who were '
      + 'there" with a speech bubble, "Things left behind" with a pot, and '
      + '"What was written down" with a page of lines. Arrows from all three '
      + 'point down to one word: History.',
    svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<rect x="20" y="20" width="170" height="120" rx="10"/>'
      + '<rect x="215" y="20" width="170" height="120" rx="10"/>'
      + '<rect x="410" y="20" width="170" height="120" rx="10"/>'
      + '<path d="M70 50 h70 a10 10 0 0 1 10 10 v20 a10 10 0 0 1 -10 10 h-45 '
      + 'l-15 12 v-12 h-10 a10 10 0 0 1 -10 -10 v-20 a10 10 0 0 1 10 -10 z"/>'
      + '<path d="M275 55 h50 M280 55 c-20 15 -20 40 0 50 h40 c20 -10 20 -35 0 -50"/>'
      + '<rect x="465" y="45" width="60" height="60"/>'
      + '<line x1="475" y1="60" x2="515" y2="60"/>'
      + '<line x1="475" y1="75" x2="515" y2="75"/>'
      + '<line x1="475" y1="90" x2="505" y2="90"/>'
      + '<text x="105" y="128" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">People who were there</text>'
      + '<text x="300" y="128" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Things left behind</text>'
      + '<text x="495" y="128" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">What was written</text>'
      + '<line x1="105" y1="140" x2="280" y2="205"/>'
      + '<line x1="300" y1="140" x2="300" y2="200"/>'
      + '<line x1="495" y1="140" x2="320" y2="205"/>'
      + '<text x="300" y="235" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">History</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'src-1',
      ask: 'What is a source in history?',
      kind: 'choice',
      options: [
        'A clue about the past',
        'A place where a river starts',
        'A kind of soup',
      ],
      answer: 'A clue about the past',
      teach: 'In history, a source is any clue that tells us about the past: '
        + 'a person telling, a thing left behind, or writing.',
      level: 1,
    },
    {
      id: 'src-2',
      ask: 'An elder tells the class how the town began. What kind of source '
        + 'is this?',
      kind: 'choice',
      options: ['Written', 'Oral', 'A thing left behind'],
      answer: 'Oral',
      teach: 'The elder is telling in spoken words, not writing. '
        + 'A story told in words is an oral source.',
      level: 1,
    },
    {
      id: 'src-3',
      ask: 'Which of these is a thing left behind?',
      kind: 'choice',
      options: ['A newspaper', 'A song', 'An old clay pot'],
      answer: 'An old clay pot',
      teach: 'A newspaper is written and a song is oral. '
        + 'A pot is an object, so it is a thing left behind.',
      level: 2,
    },
    {
      id: 'src-4',
      ask: 'A diary written by a teacher in 1957. What kind of source is it?',
      kind: 'choice',
      options: ['Written', 'Oral', 'A thing left behind'],
      answer: 'Written',
      teach: 'A diary is words written down at the time, '
        + 'so it is a written source.',
      level: 2,
    },
    {
      id: 'src-5',
      ask: 'Elmina Castle was built by the Portuguese. In which year?',
      kind: 'numeric',
      answer: '1482',
      teach: 'The castle was built in 1482. '
        + 'We know the date from records the Portuguese wrote.',
      level: 2,
    },
    {
      id: 'src-6',
      ask: 'What kind of source is Elmina Castle itself?',
      kind: 'choice',
      options: ['Oral', 'A thing left behind', 'Written'],
      answer: 'A thing left behind',
      teach: 'The date may come from writing, but the castle is a building. '
        + 'A building from the past is a thing left behind.',
      level: 3,
    },
    {
      id: 'src-7',
      ask: 'Who digs carefully to find old things buried in the ground?',
      kind: 'choice',
      options: ['A farmer', 'A chief', 'An archaeologist'],
      answer: 'An archaeologist',
      teach: 'A farmer digs to plant. An archaeologist digs carefully '
        + 'to find things people left behind long ago.',
      level: 2,
    },
    {
      id: 'src-8',
      ask: 'Why does a historian look for more than one source?',
      kind: 'choice',
      options: [
        'One source can be wrong, so checking makes the story more sure',
        'To make the story longer',
        'Because one source is always a lie',
      ],
      answer: 'One source can be wrong, so checking makes the story more sure',
      teach: 'A single source is not always a lie, but it can be wrong. '
        + 'When two sources agree, the story is more likely true.',
      level: 3,
    },
    {
      id: 'src-9',
      ask: 'How many kinds of source does a historian use?',
      kind: 'numeric',
      answer: '3',
      accept: ['three', 'Three'],
      teach: 'Count them: people telling, things left behind, and writing. '
        + 'That is three.',
      level: 1,
    },
  ],
})

/* ── how people came to settle here (Basic 4) ─────────────────────────────── */

teach({
  topicId: 'migration-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Migration is moving to live in a new place. '
      + 'Most peoples of Ghana tell a story of moving here, '
      + 'and of why they moved.',
    method: [
      'Say where the people started.',
      'Say why they left.',
      'Say where they settled.',
    ],
  },

  why:
    'Kwame’s grandmother tells him that, long ago, his people walked out of '
    + 'a walled town at night, walking backwards. '
    + 'Kwame laughs. Why would anyone walk backwards? '
    + 'And why leave home at all?',

  recap:
    'To move is to go from one place to another. '
    + 'Some moves are short, like going to the market and coming back. '
    + 'Other moves are for good: a family packs up and goes to live '
    + 'somewhere new. '
    + 'Ama’s family moved from Tamale to Kumasi when her mother got a new job. '
    + 'That kind of move, to live in a new place, has a special name.',

  idea:
    'Migration is moving from one place to live in another. '
    + 'People who do it are called migrants. '
    + 'Most of the peoples of Ghana have a story, kept by their elders, '
    + 'of how they came to the land where they live now. '
    + 'People moved for reasons such as war, a cruel ruler, '
    + 'needing more land to farm, finding water, or trade.',

  mechanism:
    'Reasons to move come in two kinds. '
    + 'Some push people out of the old place: war, a cruel king, '
    + 'drought, or too many people for the land. '
    + 'Others pull people to the new place: good land, water, '
    + 'safety, or a chance to trade. '
    + 'The Ewe tradition is a clear example. '
    + 'It tells that the Ewe once lived in a walled town called Notsie, '
    + 'in what is now Togo. '
    + 'Its king, Agokoli, was cruel to them. '
    + 'The women poured water on one part of the mud wall '
    + 'until it was soft, and the people broke through at night. '
    + 'They walked out backwards, so their footprints seemed to point '
    + 'into the town and nobody could follow them. '
    + 'They then moved west and settled in what is now the Volta Region. '
    + 'The Mole-Dagbani tradition tells of a leader called Naa Gbewaa at '
    + 'Pusiga, in the north. His children went out and founded the '
    + 'states of Dagbon, Mamprugu and Nanun.',

  method: [
    'Name the group whose story it is.',
    'Say where their tradition says they started.',
    'Say why they left: a push from the old place or a pull to the new one.',
    'Say where they settled.',
    'Say whose tradition tells it.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Why did the Ewe leave Notsie, in their tradition?',
      steps: [
        'Their king, Agokoli, was cruel.',
        'A cruel ruler pushes people away.',
      ],
      answer: 'Because King Agokoli was cruel to them.',
    },
    {
      level: 3,
      ask: 'Why did the Ewe walk out backwards?',
      steps: [
        'Walking backwards makes footprints point the other way.',
        'The footprints seemed to go into the town.',
        'So the king’s men could not follow them.',
      ],
      answer: 'So their footprints pointed into Notsie and nobody could '
        + 'follow them.',
    },
    {
      level: 3,
      ask: 'A family leaves its village because the land is dry and moves to '
        + 'a place near a river. Name the push and the pull.',
      steps: [
        'The push is what drove them out: dry land.',
        'The pull is what drew them in: the river.',
      ],
      answer: 'Push: dry land with no water. Pull: water from the river.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a people has always lived where it lives now.',
      why: 'Most peoples of Ghana tell of moving to their land. '
        + 'Ask the elders.',
    },
    {
      mistake: 'Giving only one reason, as if everyone moves for the same thing.',
      why: 'People move for many reasons. Look for both a push and a pull.',
    },
    {
      mistake: 'Telling a tradition as if it belongs to everyone.',
      why: 'Each story belongs to the people who keep it. '
        + 'Say “the Ewe tradition tells…”.',
    },
  ],

  tables: [
    {
      caption: 'Why people move',
      columns: ['Push: what drives people out', 'Pull: what draws people in'],
      rows: [
        ['War and fighting', 'Safety and peace'],
        ['A cruel ruler', 'Freedom to live their own way'],
        ['Drought or poor soil', 'Good land and water'],
        ['Too many people for the land', 'Empty land to farm'],
        ['No work', 'Trade and work'],
      ],
    },
    {
      caption: 'Two migration stories, as each people’s tradition tells them',
      columns: ['People', 'Started at', 'Why they moved', 'Settled in'],
      rows: [
        ['Ewe', 'Notsie, in present-day Togo', 'King Agokoli was cruel', 'The south-east, the Volta Region'],
        ['Mole-Dagbani', 'Pusiga, with Naa Gbewaa', 'His children went to found their own states', 'Dagbon, Mamprugu and Nanun in the north'],
      ],
    },
  ],

  figure: {
    alt: 'A simple picture of the Ewe migration. On the right is a walled '
      + 'town labelled Notsie, in present-day Togo. An arrow goes left, '
      + 'west, to an area labelled Volta Region, Ghana. A dashed line between '
      + 'them is the border.',
    svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<rect x="420" y="70" width="130" height="80" rx="6"/>'
      + '<path d="M420 70 v-12 h15 v12 M455 70 v-12 h15 v12 M490 70 v-12 h15 v12 '
      + 'M525 70 v-12 h15 v12"/>'
      + '<text x="485" y="115" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Notsie</text>'
      + '<text x="485" y="180" font-size="14" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">present-day Togo</text>'
      + '<line x1="330" y1="20" x2="330" y2="200" stroke-dasharray="6 6"/>'
      + '<ellipse cx="160" cy="110" rx="120" ry="55"/>'
      + '<text x="160" y="105" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Volta Region</text>'
      + '<text x="160" y="128" font-size="14" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Ghana</text>'
      + '<line x1="410" y1="110" x2="290" y2="110"/>'
      + '<polyline points="305,100 290,110 305,120"/>'
      + '<text x="350" y="98" font-size="14" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">west</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'mig-1',
      ask: 'What is migration?',
      kind: 'choice',
      options: [
        'Moving from one place to live in another',
        'Going to the market and back',
        'Staying in one place forever',
      ],
      answer: 'Moving from one place to live in another',
      teach: 'A trip to the market is a short move and you come back. '
        + 'Migration is moving to live somewhere new.',
      level: 1,
    },
    {
      id: 'mig-2',
      ask: 'In the Ewe tradition, from which walled town did the Ewe escape?',
      kind: 'choice',
      options: ['Kumasi', 'Notsie', 'Pusiga'],
      answer: 'Notsie',
      teach: 'Pusiga is in the Mole-Dagbani story and Kumasi is an Akan city. '
        + 'The Ewe tradition tells of escaping from Notsie.',
      level: 1,
    },
    {
      id: 'mig-3',
      ask: 'In the Ewe tradition, why did they leave Notsie?',
      kind: 'choice',
      options: [
        'They wanted to trade gold',
        'Their king, Agokoli, was cruel',
        'The sea flooded the town',
      ],
      answer: 'Their king, Agokoli, was cruel',
      teach: 'The tradition gives the reason as a cruel king. '
        + 'A cruel ruler is a push that drives people out.',
      level: 2,
    },
    {
      id: 'mig-4',
      ask: 'How did the Ewe get through the wall of Notsie?',
      kind: 'choice',
      options: [
        'They climbed over with ladders',
        'The king opened the gate',
        'Water was poured on the mud wall until it was soft',
      ],
      answer: 'Water was poured on the mud wall until it was soft',
      teach: 'The wall was made of mud. The tradition says the women poured '
        + 'water on it until it was soft enough to break.',
      level: 2,
    },
    {
      id: 'mig-5',
      ask: 'Why did the Ewe walk out backwards?',
      kind: 'choice',
      options: [
        'So their footprints pointed into the town and nobody could follow',
        'Because it was a dance',
        'So they could see the king',
      ],
      answer: 'So their footprints pointed into the town and nobody could follow',
      teach: 'Footprints show which way someone went. Walking backwards made '
        + 'them seem to point into Notsie, which fooled anyone following.',
      level: 3,
    },
    {
      id: 'mig-6',
      ask: 'Where did the Ewe settle after leaving Notsie?',
      kind: 'choice',
      options: [
        'In the far north',
        'Around Kumasi',
        'In the south-east, in the Volta Region',
      ],
      answer: 'In the south-east, in the Volta Region',
      teach: 'Notsie is in present-day Togo. The Ewe moved west '
        + 'from there into what is now the Volta Region.',
      level: 2,
    },
    {
      id: 'mig-7',
      ask: 'Which of these is a PULL that draws people to a new place?',
      kind: 'choice',
      options: ['War', 'Good land and water', 'A cruel ruler'],
      answer: 'Good land and water',
      teach: 'War and a cruel ruler push people out of the old place. '
        + 'Good land and water pull them to the new one.',
      level: 3,
    },
    {
      id: 'mig-8',
      ask: 'In the Mole-Dagbani tradition, which leader at Pusiga had children '
        + 'who founded Dagbon, Mamprugu and Nanun?',
      kind: 'choice',
      options: ['Naa Gbewaa', 'King Agokoli', 'Kwame Nkrumah'],
      answer: 'Naa Gbewaa',
      teach: 'Agokoli is in the Ewe story. The Mole-Dagbani tradition tells '
        + 'of Naa Gbewaa at Pusiga.',
      level: 3,
    },
    {
      id: 'mig-9',
      ask: 'A family leaves a village where there is fighting. Is the '
        + 'fighting a push or a pull?',
      kind: 'choice',
      options: ['A push', 'A pull', 'Neither'],
      answer: 'A push',
      teach: 'Fighting drives people out of the old place. '
        + 'Anything that drives people out is a push.',
      level: 2,
    },
  ],
})

/* ── stories handed down (Basic 5) ────────────────────────────────────────── */

teach({
  topicId: 'oral-tradition-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Oral tradition is history passed on by word of mouth. '
      + 'It is real evidence, but two people may remember it differently, '
      + 'so it is checked like any other source.',
    method: [
      'Say who told the story and who told them.',
      'Compare it with other tellings.',
      'Check it against things left behind or writing.',
    ],
  },

  why:
    'Abena asks her grandmother and her grandfather how their town got its '
    + 'chief’s stool. '
    + 'Grandmother says a great hunter brought it. '
    + 'Grandfather says it was a gift from a king. '
    + 'Both of them heard the story as children. '
    + 'Neither is lying. '
    + 'So which one is history, and how could Abena find out?',

  recap:
    'A source is a clue about the past. '
    + 'There are three kinds: people telling in words, '
    + 'things left behind, and writing. '
    + 'In Ghana, for hundreds of years, most history was not written. '
    + 'It was spoken, sung and drummed. '
    + 'A story spoken from one person to the next is called an oral source. '
    + 'This lesson is about how much we can trust it.',

  idea:
    'Oral tradition is the history a people keeps by telling it, '
    + 'from elders to children, over many lifetimes. '
    + 'It includes stories, songs, praise poems, proverbs and the '
    + 'messages of drums. '
    + 'It is evidence, because it comes from the people who lived the past, '
    + 'handed on with care. '
    + 'But each telling passes through a memory, '
    + 'so two people can tell the same story differently.',

  mechanism:
    'Oral tradition is evidence for three reasons. '
    + 'It began with people who were there. '
    + 'It is often kept by people whose job is to keep it: '
    + 'court historians, drummers, praise singers and the chief’s linguist, '
    + 'called the okyeame among the Akan. '
    + 'And it is told in public, at festivals and funerals, '
    + 'where others who know it can correct a mistake. '
    + 'Two people may still remember it differently. '
    + 'Memory fades over many years. '
    + 'Each person heard it from a different teller. '
    + 'A family may tell the part that makes its own people look good. '
    + 'And a small change in each telling adds up over many tellings. '
    + 'So a historian compares tellings and checks them against '
    + 'things left behind and writing. '
    + 'The parts that agree are the most sure.',

  method: [
    'Write down who told the story, and who told them.',
    'Ask more than one person for the same story.',
    'Mark the parts that agree and the parts that differ.',
    'Ask why they might differ: memory, a different teller, or a family’s side.',
    'Check the story against a thing left behind or a written record.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Why is a grandmother’s story about the town’s founding evidence?',
      steps: [
        'It was passed on from people who were there.',
        'It was told with care, from elder to child.',
      ],
      answer: 'Because it carries what the first people saw, handed down '
        + 'carefully.',
    },
    {
      level: 3,
      ask: 'In Abena’s two stories, what part do the grandparents agree on?',
      steps: [
        'Both say the town has a chief’s stool.',
        'Both say it came from outside the town long ago.',
        'They differ only on who brought it.',
      ],
      answer: 'That the stool came to the town from outside, long ago. That '
        + 'part is more sure.',
    },
    {
      level: 4,
      ask: 'How could Abena check which telling is closer to what happened?',
      steps: [
        'Ask other elders, such as the court historian or the chief’s linguist.',
        'Look for a thing left behind, such as carvings on the stool.',
        'Look for anything written, such as old records.',
      ],
      answer: 'Ask other tellers and look for things left behind or writing '
        + 'that agree with one telling.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking a spoken story is not real history.',
      why: 'Much of Ghana’s past was kept by telling. '
        + 'It is evidence, checked like any other source.',
    },
    {
      mistake: 'Deciding that one teller is lying when two stories differ.',
      why: 'People remember differently for honest reasons: memory, '
        + 'a different teller, a family’s point of view.',
    },
    {
      mistake: 'Believing whichever version you heard first.',
      why: 'Hearing it first does not make it right. '
        + 'Compare tellings and check against other sources.',
    },
  ],

  tables: [
    {
      caption: 'Kinds of oral tradition and who keeps them',
      columns: ['Kind', 'What it is', 'Who often keeps it'],
      rows: [
        ['Stories of origin', 'How a people or town began', 'Elders, court historians'],
        ['Praise songs and poems', 'The deeds of chiefs and heroes', 'Praise singers'],
        ['Drum language', 'Messages and histories played on drums', 'Drummers'],
        ['Proverbs', 'Short wise sayings from the past', 'Elders, the chief’s linguist'],
        ['Family stories', 'What happened to one family', 'Grandparents'],
      ],
    },
    {
      caption: 'Why two people may remember a story differently',
      columns: ['Reason', 'What happens'],
      rows: [
        ['Memory fades', 'Details are lost over many years'],
        ['Different tellers', 'Each heard it from a different person'],
        ['A family’s side', 'People tell the part that makes their own look good'],
        ['Small changes add up', 'A little changes in each of many tellings'],
      ],
    },
  ],

  questions: [
    {
      id: 'ort-1',
      ask: 'What is oral tradition?',
      kind: 'choice',
      options: [
        'History written in books',
        'History passed on by word of mouth',
        'Old buildings and pots',
      ],
      answer: 'History passed on by word of mouth',
      teach: 'Books are written sources and pots are things left behind. '
        + 'Oral means spoken, so oral tradition is history passed on by telling.',
      level: 1,
    },
    {
      id: 'ort-2',
      ask: 'Which of these is part of oral tradition?',
      kind: 'choice',
      options: ['A newspaper', 'An old stool', 'A praise song about a chief'],
      answer: 'A praise song about a chief',
      teach: 'A newspaper is written and a stool is a thing left behind. '
        + 'A song is spoken and sung, so it is oral.',
      level: 1,
    },
    {
      id: 'ort-3',
      ask: 'Among the Akan, what is the chief’s linguist called?',
      kind: 'choice',
      options: ['Okyeame', 'Naa', 'Okomfo'],
      answer: 'Okyeame',
      teach: 'The okyeame is the chief’s linguist, who speaks for the chief '
        + 'and keeps proverbs and history.',
      level: 2,
    },
    {
      id: 'ort-4',
      ask: 'Why is a story told by a grandparent evidence?',
      kind: 'choice',
      options: [
        'Because grandparents are always right',
        'Because it was handed down from people who were there',
        'Because it is a good story',
      ],
      answer: 'Because it was handed down from people who were there',
      teach: 'Nobody is always right, and a good story is not proof. '
        + 'It is evidence because it carries what people who were there saw.',
      level: 2,
    },
    {
      id: 'ort-5',
      ask: 'Why does telling a story in public, at a festival, help keep it '
        + 'accurate?',
      kind: 'choice',
      options: [
        'Others who know it can correct a mistake',
        'It makes the story louder',
        'Nobody listens at festivals',
      ],
      answer: 'Others who know it can correct a mistake',
      teach: 'In public, many people who know the story are listening. '
        + 'If the teller gets a part wrong, they can put it right.',
      level: 3,
    },
    {
      id: 'ort-6',
      ask: 'Two elders tell the town’s story differently. What is the best '
        + 'thing to think?',
      kind: 'choice',
      options: [
        'One of them must be lying',
        'They may remember differently for honest reasons',
        'The story never happened',
      ],
      answer: 'They may remember differently for honest reasons',
      teach: 'Differences are normal: memory fades and each heard it from a '
        + 'different teller. A difference is not the same as a lie.',
      level: 3,
    },
    {
      id: 'ort-7',
      ask: 'Which is a reason two people may remember a story differently?',
      kind: 'choice',
      options: [
        'They heard it from different tellers',
        'They both heard it from the same person on the same day',
        'The story is written in a book',
      ],
      answer: 'They heard it from different tellers',
      teach: 'Hearing it from the same person at the same time would make '
        + 'their stories alike. Different tellers give different versions.',
      level: 2,
    },
    {
      id: 'ort-8',
      ask: 'Two tellings agree that a stool came from outside the town, but '
        + 'differ on who brought it. Which part is the most sure?',
      kind: 'choice',
      options: [
        'Who brought it',
        'That it came from outside the town',
        'Neither part',
      ],
      answer: 'That it came from outside the town',
      teach: 'The parts that agree across tellings are the most sure. '
        + 'Where they differ, more checking is needed.',
      level: 4,
    },
    {
      id: 'ort-9',
      ask: 'How can a historian check an oral tradition?',
      kind: 'choice',
      options: [
        'Believe the first version heard',
        'Ask only one person',
        'Compare it with other tellings, things left behind and writing',
      ],
      answer: 'Compare it with other tellings, things left behind and writing',
      teach: 'Hearing a version first does not make it right. '
        + 'Checking against other sources shows which parts are most sure.',
      level: 3,
    },
    {
      id: 'ort-10',
      ask: 'A family tells only the part of a war story where its own '
        + 'people were brave. Why does this matter?',
      kind: 'choice',
      options: [
        'It shows the family is lying',
        'It means the war did not happen',
        'It shows one side, so other tellings are needed for the whole story',
      ],
      answer: 'It shows one side, so other tellings are needed for the whole story',
      teach: 'Telling your own side is natural, not lying. '
        + 'But one side is not the whole story, so compare with others.',
      level: 4,
    },
  ],
})
