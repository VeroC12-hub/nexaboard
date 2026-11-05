/**
 * Stored lessons for primary History of Ghana, part two: chiefs, the old
 * states, trade, the forts, British rule, independence and Ghana since.
 *
 * Written at about grade 4 for the Basic 4 topic, rising to about grade 6
 * for the Basic 6 topics, with a `brief` form on every topic.
 *
 * ── Three things these are careful about ───────────────────────────────────
 *
 * The lesson on the old states names several states side by side and says
 * what each was known for, without ranking them. A child in the class may
 * come from any of them.
 *
 * The lesson on the forts tells the trade in enslaved people plainly, at a
 * level a ten year old can carry: who was taken, where they were held, where
 * they were sent, and that Africans as well as Europeans took part in the
 * buying and selling. It does not soften it and it does not dwell on cruelty
 * for its own sake.
 *
 * Every date is a well established one. Where a detail is argued over or
 * uncertain, it is left out rather than guessed.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── chiefs and how they ruled ────────────────────────────────────────────── */

teach({
  topicId: 'chieftaincy-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A chief leads a town or a people. '
      + 'The chief settles quarrels, looks after the land, leads festivals '
      + 'and keeps the people together. '
      + 'A chief is chosen from a royal family by the elders.',
    method: [
      'Name the job the chief is doing.',
      'Say who chose the chief and from which family.',
      'Say what the chief sits on: a stool in the south, a skin in the north.',
    ],
  },

  why:
    'Two farmers in Kofi\'s village both say the same piece of land is '
    + 'theirs. '
    + 'They shout. Nobody wants to fight. '
    + 'So they go to the chief\'s palace. '
    + 'Why do both of them agree to listen to the chief? '
    + 'And how did that one person become chief?',

  recap:
    'A town is many families living close together. '
    + 'Families share a market, a water source, roads and land. '
    + 'When people share things, quarrels happen. '
    + 'One family says the farm boundary is here. '
    + 'Another family says it is there. '
    + 'So every town needs somebody whom everybody agrees to listen to. '
    + 'In Ghana, for hundreds of years, that person has been the chief.',

  idea:
    'A chief is the traditional leader of a town or a people. '
    + 'A chief does four big jobs. '
    + 'The chief settles quarrels. '
    + 'The chief looks after the land of the people. '
    + 'The chief leads festivals and ceremonies. '
    + 'The chief keeps the people together and speaks for them. '
    + 'A chief is not chosen by a vote of everybody. '
    + 'A chief is chosen from a royal family, by the elders.',

  mechanism:
    'A chief is never alone. '
    + 'The chief has elders who give advice. '
    + 'The chief has a spokesperson, called the linguist. '
    + 'Among the Akan the linguist is called the okyeame. '
    + 'People speak to the chief through the linguist, '
    + 'and the linguist carries a staff with a carving on top. '
    + 'Among the Akan the queen mother is very important. '
    + 'When a chief dies, the queen mother names a person from the royal '
    + 'family. '
    + 'The kingmakers, who are senior elders, then agree or say no. '
    + 'In the south a new chief is put on a stool. '
    + 'This is called enstoolment. '
    + 'In the north, for example among the Dagomba, '
    + 'a new chief is put on a skin. '
    + 'This is called enskinment. '
    + 'The stool or skin stands for the power of the chief. '
    + 'A chief who rules badly can be removed by the elders. '
    + 'This is called destoolment. '
    + 'So the chief has power, but the elders keep a check on it.',

  method: [
    'Read what the chief is doing in the story.',
    'Match it to one of the four jobs: settle quarrels, look after land, '
      + 'lead festivals, keep the people together.',
    'If the question is about choosing, start with the royal family.',
    'Then name who picks: the queen mother names, the kingmakers agree.',
    'Say stool for the south and skin for the north.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Two farmers quarrel over land and go to the chief. '
        + 'Which job is the chief doing?',
      steps: [
        'The farmers do not agree.',
        'The chief listens to both and decides.',
      ],
      answer: 'Settling a quarrel. It is also looking after the land.',
    },
    {
      level: 2,
      ask: 'An Akan chief has died. Who names the next chief?',
      steps: [
        'The new chief must come from the royal family.',
        'Among the Akan, the queen mother names a person from that family.',
        'The kingmakers then agree or refuse.',
      ],
      answer: 'The queen mother names the person, and the kingmakers agree.',
    },
    {
      level: 3,
      ask: 'Fuseini says a new chief in Tamale was enstooled. '
        + 'What word fits better, and why?',
      steps: [
        'Tamale is in the north of Ghana.',
        'In the north, chiefs sit on a skin, not a stool.',
      ],
      answer: 'Enskinned, because northern chiefs are put on a skin.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking anybody in the town can become chief.',
      why: 'A chief must come from the royal family. '
        + 'Inside that family, the elders choose the one they think fits best.',
    },
    {
      mistake: 'Thinking a chief can do anything they like.',
      why: 'The elders advise the chief, and a chief who rules badly '
        + 'can be destooled.',
    },
    {
      mistake: 'Thinking the linguist is the chief.',
      why: 'The linguist speaks for the chief. '
        + 'The words are the chief\'s words.',
    },
  ],

  tables: [{
    caption: 'The people around a chief and what each does',
    columns: ['Person', 'What they do'],
    rows: [
      ['Chief', 'Leads the town, settles quarrels, looks after the land'],
      ['Queen mother', 'Among the Akan, names the next chief from the '
        + 'royal family and advises the chief'],
      ['Kingmakers', 'Senior elders who agree to the new chief or say no'],
      ['Elders', 'Give the chief advice'],
      ['Linguist (okyeame)', 'Speaks for the chief and carries a staff'],
    ],
  }, {
    caption: 'Words for putting a chief in place, and removing one',
    columns: ['Word', 'Meaning', 'Where'],
    rows: [
      ['Enstoolment', 'Putting a new chief on the stool', 'Mostly the south'],
      ['Enskinment', 'Putting a new chief on the skin', 'Mostly the north'],
      ['Destoolment', 'Removing a chief who ruled badly', 'Anywhere'],
    ],
  }],

  questions: [
    {
      id: 'hb-ch-1',
      ask: 'Which of these is a job a chief does?',
      kind: 'choice',
      options: [
        'Settling quarrels between people',
        'Driving the tro-tro',
        'Marking school exercise books',
      ],
      answer: 'Settling quarrels between people',
      teach: 'The other two are jobs other people do. '
        + 'A chief settles quarrels, looks after land, leads festivals '
        + 'and keeps the people together.',
      level: 1,
    },
    {
      id: 'hb-ch-2',
      ask: 'What is the person who speaks for an Akan chief called?',
      kind: 'choice',
      options: ['The kingmaker', 'The okyeame (linguist)', 'The queen mother'],
      answer: 'The okyeame (linguist)',
      teach: 'Kingmakers help choose the chief and the queen mother names '
        + 'the candidate. The one who speaks for the chief and carries the '
        + 'staff is the linguist, the okyeame.',
      level: 1,
    },
    {
      id: 'hb-ch-3',
      ask: 'A new chief must come from which family?',
      kind: 'choice',
      options: [
        'Any family in the town',
        'The richest family in the town',
        'The royal family',
      ],
      answer: 'The royal family',
      teach: 'Being rich does not make a person chief. '
        + 'The chief always comes from the royal family, '
        + 'and the elders choose who fits best inside it.',
      level: 2,
    },
    {
      id: 'hb-ch-4',
      ask: 'Among the Akan, who names a person to be the next chief?',
      kind: 'choice',
      options: ['The queen mother', 'The linguist', 'The whole town by vote'],
      answer: 'The queen mother',
      teach: 'A chief is not chosen by a vote of everybody. '
        + 'Among the Akan the queen mother names someone from the royal '
        + 'family and the kingmakers agree or refuse.',
      level: 2,
    },
    {
      id: 'hb-ch-5',
      ask: 'A chief in the north of Ghana sits on a skin. '
        + 'What is the ceremony of putting a new northern chief in place '
        + 'called?',
      kind: 'choice',
      options: ['Enstoolment', 'Enskinment', 'Destoolment'],
      answer: 'Enskinment',
      teach: 'The word follows what the chief sits on. '
        + 'Stool gives enstoolment, skin gives enskinment. '
        + 'Destoolment means removing a chief.',
      level: 2,
    },
    {
      id: 'hb-ch-6',
      ask: 'Elders find that a chief has been ruling badly. '
        + 'What can they do?',
      kind: 'choice',
      options: [
        'Nothing, a chief can never be removed',
        'Destool the chief',
        'Make the linguist chief',
      ],
      answer: 'Destool the chief',
      teach: 'A chief has power, but the elders keep a check on it. '
        + 'A chief who rules badly can be removed. That is destoolment.',
      level: 3,
    },
    {
      id: 'hb-ch-7',
      ask: 'The chief leads the people at the yearly festival. '
        + 'Which job is this?',
      kind: 'choice',
      options: [
        'Looking after the land',
        'Settling quarrels',
        'Leading festivals and keeping the people together',
      ],
      answer: 'Leading festivals and keeping the people together',
      teach: 'Match what the chief is doing to the job. '
        + 'A festival brings everybody together, '
        + 'so the chief is leading a ceremony and uniting the people.',
      level: 2,
    },
    {
      id: 'hb-ch-8',
      ask: 'Why do the elders matter to how a chief rules?',
      kind: 'choice',
      options: [
        'They give advice and can remove a bad chief',
        'They collect the market tolls',
        'They choose the chief from any family',
      ],
      answer: 'They give advice and can remove a bad chief',
      teach: 'The elders do not choose from any family; '
        + 'the chief must be royal. '
        + 'Their big part is advising the chief and checking the chief\'s '
        + 'power.',
      level: 3,
    },
  ],
})

/* ── the old states ───────────────────────────────────────────────────────── */

teach({
  topicId: 'old-states-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Long before the country called Ghana, there were states here, '
      + 'each with its own ruler and capital. '
      + 'Asante was known for gold and the Golden Stool, '
      + 'Dagbon for its old kingship at Yendi, '
      + 'Denkyira and Akwamu for trade and power.',
    method: [
      'Name the state.',
      'Name its ruler or capital.',
      'Say one thing it was known for.',
    ],
  },

  why:
    'Abena lives in Kumasi and her cousin Fuseini lives in Yendi. '
    + 'Each city has a king whose family has ruled for hundreds of years. '
    + 'But Ghana as a country is not even one hundred years old. '
    + 'How can a king be older than the country he lives in?',

  recap:
    'A state is a group of towns that obey one ruler. '
    + 'One town is a village with a chief. '
    + 'When many towns, each with its own chief, agree to serve one great '
    + 'ruler, they make a state. '
    + 'The town where the great ruler lives is the capital. '
    + 'Today Ghana is one state, with Accra as its capital. '
    + 'Hundreds of years ago, there were many smaller states in the same '
    + 'land.',

  idea:
    'Before Ghana became one country, the land held many states. '
    + 'Each had its own ruler, its own capital and its own army. '
    + 'In the north there were Dagbon, Mamprugu and Gonja. '
    + 'In the forest and near the coast there were Denkyira, Akwamu and '
    + 'Asante, and many more. '
    + 'Some of these states still have kings today. '
    + 'They no longer rule the country, but people still honour them.',

  mechanism:
    'A state grew strong in two ways. '
    + 'It could control trade, such as gold, kola nuts or salt, '
    + 'and grow rich from it. '
    + 'Or it could win wars and make other states pay it. '
    + 'Denkyira was strong and rich in gold. '
    + 'Then, around 1700, Asante grew strong under Osei Tutu. '
    + 'He was helped by the priest Okomfo Anokye. '
    + 'The story says Okomfo Anokye brought the Golden Stool down from the '
    + 'sky. '
    + 'The Golden Stool holds the spirit of the whole Asante nation, '
    + 'so it joined all the Asante towns into one. '
    + 'In 1701 Asante beat Denkyira at the battle of Feyiase. '
    + 'Akwamu, near Accra, controlled trade with the coast. '
    + 'In 1693 Akwamu even captured the Danish castle at Osu. '
    + 'In the north, Dagbon is ruled by the Ya Na at Yendi, '
    + 'and Mamprugu by the Nayiri at Nalerigu. '
    + 'The two states share an old family story of the same ancestors. '
    + 'Gonja lay across trade routes, and the town of Salaga was in its '
    + 'land. '
    + 'Its ruler is the Yagbonwura.',

  method: [
    'Find the state in the question.',
    'Look it up in the table: north or south, ruler, capital.',
    'Name one thing it was known for.',
    'If two states are compared, say how each became strong: trade or war.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Which state is the Golden Stool part of?',
      steps: [
        'The Golden Stool was linked to Osei Tutu and Okomfo Anokye.',
        'They founded the Asante kingdom.',
      ],
      answer: 'Asante.',
    },
    {
      level: 2,
      ask: 'Name a state in the north of Ghana and its ruler.',
      steps: [
        'Northern states include Dagbon, Mamprugu and Gonja.',
        'Dagbon\'s ruler is the Ya Na, at Yendi.',
      ],
      answer: 'Dagbon, ruled by the Ya Na at Yendi.',
    },
    {
      level: 3,
      ask: 'Denkyira was powerful. Why did Asante become more powerful '
        + 'after 1701?',
      steps: [
        'In 1701 Asante beat Denkyira at Feyiase.',
        'Denkyira then had to serve Asante, not the other way round.',
        'The Golden Stool kept the Asante towns united.',
      ],
      answer: 'Asante won the battle of Feyiase and stayed united around '
        + 'the Golden Stool.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking Ghana has always been one country.',
      why: 'Ghana became one country in the twentieth century. '
        + 'The old states are far older than that.',
    },
    {
      mistake: 'Thinking the old states disappeared.',
      why: 'Many still have kings, like the Asantehene and the Ya Na. '
        + 'They do not run the government, but they still lead their people.',
    },
    {
      mistake: 'Mixing up Asante and Akwamu because both are Akan states.',
      why: 'Asante\'s capital is Kumasi and it is known for the Golden Stool. '
        + 'Akwamu was near Accra and known for coastal trade.',
    },
  ],

  tables: [{
    caption: 'Some old states of Ghana and what each was known for',
    columns: ['State', 'Where', 'Ruler or capital', 'Known for'],
    rows: [
      ['Dagbon', 'North', 'Ya Na, at Yendi', 'One of the oldest kingdoms '
        + 'in the north'],
      ['Mamprugu', 'North', 'Nayiri, at Nalerigu', 'Shares an ancestor '
        + 'story with Dagbon'],
      ['Gonja', 'North', 'Yagbonwura', 'Lay across trade routes; Salaga '
        + 'market was in its land'],
      ['Denkyira', 'Forest', 'Its own king', 'Rich in gold; strong before '
        + 'Asante'],
      ['Akwamu', 'Near Accra', 'Its own king', 'Coastal trade; took the '
        + 'castle at Osu in 1693'],
      ['Asante', 'Forest', 'Asantehene, at Kumasi', 'Gold and the Golden '
        + 'Stool; beat Denkyira in 1701'],
    ],
  }],

  questions: [
    {
      id: 'hb-os-1',
      ask: 'What is the capital of the Asante kingdom?',
      kind: 'choice',
      options: ['Yendi', 'Kumasi', 'Nalerigu', 'Salaga'],
      answer: 'Kumasi',
      teach: 'Yendi is Dagbon\'s capital and Nalerigu is Mamprugu\'s. '
        + 'The Asantehene rules from Kumasi.',
      level: 1,
    },
    {
      id: 'hb-os-2',
      ask: 'Who rules Dagbon?',
      kind: 'choice',
      options: ['The Asantehene', 'The Nayiri', 'The Ya Na'],
      answer: 'The Ya Na',
      teach: 'Each state has its own title for its ruler. '
        + 'Dagbon\'s is the Ya Na, at Yendi. '
        + 'The Nayiri rules Mamprugu.',
      level: 1,
    },
    {
      id: 'hb-os-3',
      ask: 'Who founded the Asante kingdom, with the help of the priest '
        + 'Okomfo Anokye?',
      kind: 'choice',
      options: ['Osei Tutu', 'Kwame Nkrumah', 'Yaa Asantewaa'],
      answer: 'Osei Tutu',
      teach: 'Kwame Nkrumah and Yaa Asantewaa lived much later. '
        + 'Asante was founded around 1700 by Osei Tutu with Okomfo Anokye.',
      level: 2,
    },
    {
      id: 'hb-os-4',
      ask: 'Why was the Golden Stool so important to Asante?',
      kind: 'choice',
      options: [
        'It was the king\'s favourite chair',
        'It held the spirit of the whole nation and united the towns',
        'It was used to pay traders',
      ],
      answer: 'It held the spirit of the whole nation and united the towns',
      teach: 'The Golden Stool is not ordinary furniture. '
        + 'It stands for the spirit of all Asante, '
        + 'which is why it joined the towns into one nation.',
      level: 2,
    },
    {
      id: 'hb-os-5',
      ask: 'In 1701 Asante beat which state at the battle of Feyiase?',
      kind: 'choice',
      options: ['Dagbon', 'Gonja', 'Denkyira'],
      answer: 'Denkyira',
      teach: 'Denkyira was the strong forest state before Asante. '
        + 'Feyiase in 1701 is where that changed.',
      level: 2,
    },
    {
      id: 'hb-os-6',
      ask: 'Which of these states was in the north of Ghana?',
      kind: 'choice',
      options: ['Akwamu', 'Mamprugu', 'Denkyira'],
      answer: 'Mamprugu',
      teach: 'Akwamu was near Accra and Denkyira was in the forest. '
        + 'Mamprugu, Dagbon and Gonja were in the north.',
      level: 2,
    },
    {
      id: 'hb-os-7',
      ask: 'Which state, near Accra, captured the Danish castle at Osu in '
        + '1693?',
      kind: 'choice',
      options: ['Akwamu', 'Asante', 'Mamprugu'],
      answer: 'Akwamu',
      teach: 'Osu is in Accra, on the coast. '
        + 'The state near Accra that controlled coastal trade was Akwamu.',
      level: 3,
    },
    {
      id: 'hb-os-8',
      ask: 'Salaga market was in the land of which state?',
      kind: 'choice',
      options: ['Asante', 'Gonja', 'Akwamu'],
      answer: 'Gonja',
      teach: 'Gonja lay across the trade routes of the north, '
        + 'and Salaga was in Gonja land.',
      level: 3,
    },
    {
      id: 'hb-os-9',
      ask: 'The Asantehene and the Ya Na still have palaces today. '
        + 'What does this show?',
      kind: 'choice',
      options: [
        'They run the government of Ghana',
        'The old states are older than Ghana and their kings are still '
          + 'honoured',
        'Ghana was founded by them in 1957',
      ],
      answer: 'The old states are older than Ghana and their kings are still '
        + 'honoured',
      teach: 'The kings do not run the government. '
        + 'Their kingdoms began long before Ghana, '
        + 'and their people still honour them.',
      level: 3,
    },
  ],
})

/* ── trade and the market ─────────────────────────────────────────────────── */

teach({
  topicId: 'trade-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Long ago, traders crossed the Sahara desert on camels. '
      + 'Gold and kola nuts went north from here. '
      + 'Salt, cloth and horses came south. '
      + 'Salt mattered because people need it to live; '
      + 'gold mattered because people far away wanted it for coins and '
      + 'jewellery.',
    method: [
      'Ask which way the goods are going: north or south.',
      'Gold and kola went north; salt, cloth and horses came south.',
      'Say why each side wanted what the other had.',
    ],
  },

  why:
    'Akosua\'s mother cooks with salt every day. '
    + 'It costs only a few pesewas at the market. '
    + 'But long ago, in the forest of Ghana, a block of salt could be worth '
    + 'as much as gold. '
    + 'How could salt ever be worth as much as gold?',

  recap:
    'Trade means swapping things. '
    + 'Ama has oranges and wants bread. '
    + 'Kofi has bread and wants oranges. '
    + 'They swap, and both are happier. '
    + 'People trade when each has something the other does not. '
    + 'A thing that is hard to find where you live is worth more there.',

  idea:
    'Hundreds of years ago there was a great trade across the Sahara '
    + 'desert, north of Ghana. '
    + 'It is called the trans-Saharan trade. '
    + 'Traders crossed the desert in long lines of camels called caravans. '
    + 'From the land of Ghana went gold and kola nuts. '
    + 'From the north came salt, cloth, beads, copper and horses. '
    + 'Big market towns grew up where traders met. '
    + 'Begho, near the edge of the forest in the Bono area, was one. '
    + 'Salaga, in the north, was another.',

  mechanism:
    'Each side had what the other side lacked. '
    + 'The forest of Ghana had a lot of gold in the ground and in rivers. '
    + 'But it had little salt. '
    + 'The Sahara had salt mines, but no gold. '
    + 'People need salt to stay alive, '
    + 'especially in hot places where they sweat a lot. '
    + 'Salt also keeps meat and fish from going bad. '
    + 'So in the forest, salt was very valuable. '
    + 'In North Africa and Europe, people wanted gold for coins and '
    + 'jewellery. '
    + 'So gold went north and salt came south. '
    + 'Camels were used because a camel can walk many days without water. '
    + 'The desert crossing was long and dangerous. '
    + 'Traders from the north did not walk all the way into the forest. '
    + 'They met forest traders at market towns such as Begho and Salaga. '
    + 'Kola nuts grew in the forest and were loved in the north, '
    + 'so they went north too.',

  method: [
    'Name the good.',
    'Say where it came from: the forest of Ghana, or the north.',
    'Say which way it went.',
    'Say why the other side wanted it.',
    'Name the market town where the traders met if the question asks.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Which animal carried goods across the Sahara?',
      steps: [
        'The desert has very little water.',
        'Camels can walk many days without drinking.',
      ],
      answer: 'The camel.',
    },
    {
      level: 2,
      ask: 'Why was salt so valuable in the forest of Ghana?',
      steps: [
        'People need salt to live, more so in hot weather.',
        'Salt also keeps food from going bad.',
        'The forest had little salt of its own.',
      ],
      answer: 'People needed it and there was little of it in the forest, '
        + 'so it was worth a lot.',
    },
    {
      level: 3,
      ask: 'A trader from the north arrives at Begho with salt. '
        + 'What is he most likely to go home with?',
      steps: [
        'Begho was near the forest.',
        'The forest had gold and kola nuts.',
        'Those were what northern traders wanted.',
      ],
      answer: 'Gold or kola nuts.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking salt was cheap long ago, as it is today.',
      why: 'Today salt is easy to bring by lorry. '
        + 'Long ago it came across a desert, so in the forest it was scarce '
        + 'and dear.',
    },
    {
      mistake: 'Getting the directions the wrong way round.',
      why: 'Gold was found in Ghana, so it went out, north. '
        + 'Salt was found in the desert, so it came in, south.',
    },
    {
      mistake: 'Thinking northern traders walked right to the coast.',
      why: 'They met forest traders at market towns like Begho and Salaga '
        + 'and swapped goods there.',
    },
  ],

  tables: [{
    caption: 'What went north and what came south across the Sahara',
    columns: ['Good', 'Came from', 'Went to', 'Why people wanted it'],
    rows: [
      ['Gold', 'Forest of Ghana', 'North', 'For coins and jewellery'],
      ['Kola nuts', 'Forest of Ghana', 'North', 'Loved to chew in the north'],
      ['Salt', 'Sahara desert', 'South', 'Needed to live and to keep food'],
      ['Cloth and beads', 'North', 'South', 'For clothing and decoration'],
      ['Horses', 'North', 'South', 'For riding and for armies'],
    ],
  }],

  figure: {
    alt: 'A sketch map. At the top is the Sahara desert, marked with salt. '
      + 'At the bottom is the forest of Ghana, marked with gold and kola. '
      + 'Between them, a dashed caravan route runs through the market towns '
      + 'of Salaga and Begho. A green arrow points north labelled gold and '
      + 'kola go north. A brown arrow points south labelled salt, cloth and '
      + 'horses come south.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<rect x="40" y="30" width="560" height="90" rx="12" '
      + 'fill="#d9a441" fill-opacity="0.2"/>'
      + '<text x="320" y="68" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Sahara desert</text>'
      + '<text x="320" y="100" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">salt mines</text>'
      + '<rect x="40" y="290" width="560" height="80" rx="12" '
      + 'fill="#0f8a4d" fill-opacity="0.2"/>'
      + '<text x="320" y="325" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">forest of Ghana</text>'
      + '<text x="320" y="355" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">gold and kola nuts</text>'
      + '<path d="M 320 120 Q 300 180 330 205 Q 350 235 300 290" '
      + 'stroke-dasharray="10 8"/>'
      + '<circle cx="330" cy="205" r="9" fill="currentColor"/>'
      + '<text x="350" y="210" font-size="18" fill="currentColor" '
      + 'stroke="none">Salaga</text>'
      + '<circle cx="305" cy="270" r="9" fill="currentColor"/>'
      + '<text x="190" y="275" font-size="18" fill="currentColor" '
      + 'stroke="none">Begho</text>'
      + '<line x1="110" y1="270" x2="110" y2="140" stroke="#0f8a4d" '
      + 'stroke-width="5"/>'
      + '<polyline points="96,156 110,140 124,156" stroke="#0f8a4d" '
      + 'stroke-width="5"/>'
      + '<text x="60" y="210" font-size="16" fill="#0f8a4d" '
      + 'stroke="none" transform="rotate(-90 60 210)" '
      + 'text-anchor="middle">gold, kola go north</text>'
      + '<line x1="530" y1="140" x2="530" y2="270" stroke="#a0522d" '
      + 'stroke-width="5"/>'
      + '<polyline points="516,254 530,270 544,254" stroke="#a0522d" '
      + 'stroke-width="5"/>'
      + '<text x="580" y="205" font-size="16" fill="#a0522d" '
      + 'stroke="none" transform="rotate(90 580 205)" '
      + 'text-anchor="middle">salt, cloth, horses come south</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'hb-tr-1',
      ask: 'Which desert did the old traders cross?',
      kind: 'choice',
      options: ['The Sahara', 'The Volta', 'The Atlantic'],
      answer: 'The Sahara',
      teach: 'The Volta is a river and the Atlantic is an ocean. '
        + 'The great desert to the north is the Sahara, '
        + 'which is why it is called the trans-Saharan trade.',
      level: 1,
    },
    {
      id: 'hb-tr-2',
      ask: 'What animal carried goods across the desert?',
      kind: 'choice',
      options: ['The donkey', 'The camel', 'The elephant'],
      answer: 'The camel',
      teach: 'The desert has very little water. '
        + 'Camels can walk many days without drinking, '
        + 'so traders used camel caravans.',
      level: 1,
    },
    {
      id: 'hb-tr-3',
      ask: 'Which good went NORTH from the forest of Ghana?',
      kind: 'choice',
      options: ['Salt', 'Horses', 'Gold'],
      answer: 'Gold',
      teach: 'Ask where the good was found. '
        + 'Gold was found in Ghana, so it went out to the north. '
        + 'Salt and horses came from the north.',
      level: 2,
    },
    {
      id: 'hb-tr-4',
      ask: 'Which good came SOUTH from the Sahara?',
      kind: 'choice',
      options: ['Salt', 'Kola nuts', 'Gold'],
      answer: 'Salt',
      teach: 'Kola nuts and gold grew or were found in the forest of Ghana. '
        + 'The desert had salt mines, so salt came south.',
      level: 2,
    },
    {
      id: 'hb-tr-5',
      ask: 'Why did people in the forest need salt so much?',
      kind: 'choice',
      options: [
        'To make coins',
        'To stay alive in the heat and to keep food from going bad',
        'To build houses',
      ],
      answer: 'To stay alive in the heat and to keep food from going bad',
      teach: 'Coins were made from gold, not salt. '
        + 'Salt is something the body needs, more so in hot weather, '
        + 'and it keeps meat and fish from rotting.',
      level: 2,
    },
    {
      id: 'hb-tr-6',
      ask: 'Why did people in North Africa and Europe want gold?',
      kind: 'choice',
      options: [
        'To eat it',
        'For coins and jewellery',
        'To feed their camels',
      ],
      answer: 'For coins and jewellery',
      teach: 'Gold does not rot and it shines, so it was used for coins and '
        + 'jewellery. That is what made it so wanted in the north.',
      level: 2,
    },
    {
      id: 'hb-tr-7',
      ask: 'Begho and Salaga were both what?',
      kind: 'choice',
      options: [
        'Salt mines in the desert',
        'Market towns where traders met',
        'European castles',
      ],
      answer: 'Market towns where traders met',
      teach: 'Northern traders did not go all the way into the forest. '
        + 'They met forest traders at market towns such as Begho and Salaga.',
      level: 3,
    },
    {
      id: 'hb-tr-8',
      ask: 'Long ago, salt in the forest could be worth as much as gold. '
        + 'What is the best reason?',
      kind: 'choice',
      options: [
        'Salt was prettier than gold',
        'Salt was needed but scarce in the forest, because it came across '
          + 'the desert',
        'Gold had no value at all',
      ],
      answer: 'Salt was needed but scarce in the forest, because it came across '
        + 'the desert',
      teach: 'A thing that is needed and hard to get is worth a lot. '
        + 'Salt had to be carried across a long, dangerous desert, '
        + 'so in the forest it was dear.',
      level: 3,
    },
    {
      id: 'hb-tr-9',
      ask: 'A northern trader swaps horses at Salaga. '
        + 'What is he most likely to take back north?',
      kind: 'choice',
      options: ['More horses', 'Salt', 'Kola nuts'],
      answer: 'Kola nuts',
      teach: 'He brought horses and salt from the north, '
        + 'so he wants what the north lacks. '
        + 'Kola nuts grew in the forest and were loved in the north.',
      level: 3,
    },
  ],
})

/* ── the forts and castles ────────────────────────────────────────────────── */

teach({
  topicId: 'forts-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Europeans built forts and castles along the coast of Ghana. '
      + 'The Portuguese built Elmina Castle in 1482. '
      + 'The Dutch, British, Danes, Swedes and Germans built others. '
      + 'At first they traded for gold. '
      + 'Later the castles held enslaved Africans, '
      + 'who were sent across the sea and never came home.',
    method: [
      'Name the castle and who built it.',
      'Say what it was used for: gold trade first, then the trade in people.',
      'Say where the enslaved people were sent: across the Atlantic to the '
        + 'Americas.',
    ],
  },

  why:
    'Kwame\'s class visits Cape Coast Castle. '
    + 'The walls are white and the cannons point out to sea. '
    + 'Down some steps there are dark rooms with only a tiny window. '
    + 'The guide says hundreds of people were once kept in one room. '
    + 'Who were they, and why were they there?',

  recap:
    'A fort is a strong building made to be defended. '
    + 'It has thick walls, and often cannons. '
    + 'A castle is a large fort, big enough for many people to live in. '
    + 'Ghana\'s coast faces the Atlantic Ocean. '
    + 'Ships from Europe could sail down the coast of Africa and stop there. '
    + 'People in Europe called this coast the Gold Coast, '
    + 'because of the gold traded there.',

  idea:
    'The first Europeans to reach the coast of Ghana were the Portuguese, '
    + 'in 1471. '
    + 'In 1482 they built Elmina Castle. '
    + 'It is the oldest European building south of the Sahara. '
    + 'Later the Dutch, British, Danes, Swedes and Germans came too. '
    + 'Together they built more than thirty forts and castles on the coast. '
    + 'They traded first for gold. '
    + 'Later they traded in human beings. '
    + 'Africans were captured, held in the castles, '
    + 'and shipped across the Atlantic to work as slaves in the Americas.',

  mechanism:
    'Each European country wanted the trade for itself. '
    + 'So they built forts to guard their goods and to keep other '
    + 'Europeans away. '
    + 'They often fought each other over them. '
    + 'In 1637 the Dutch took Elmina from the Portuguese. '
    + 'The British took Cape Coast Castle in 1664 and made it their main '
    + 'base. '
    + 'The Danes held Christiansborg Castle at Osu in Accra. '
    + 'At first Europeans brought cloth, guns, metal goods and alcohol, '
    + 'and swapped them for gold. '
    + 'Then people in the Americas wanted workers for big farms '
    + 'of sugar, cotton and tobacco. '
    + 'So the trade turned to people. '
    + 'Men, women and children were captured in wars and raids. '
    + 'Some African traders and rulers sold captives to the Europeans, '
    + 'and the Europeans bought them, so both took part. '
    + 'The captives were locked in dark, crowded dungeons under the castles '
    + 'for weeks. '
    + 'Then they passed through a doorway to the ships. '
    + 'Today it is called the Door of No Return, '
    + 'because the people who went through it never came back. '
    + 'Many died on the long voyage. '
    + 'In 1807 Britain made it against its law for British ships to trade '
    + 'in enslaved people. '
    + 'The castles still stand today so that nobody forgets.',

  method: [
    'Name the fort or castle.',
    'Name who built it or held it, using the table.',
    'Say what was traded: gold first, then enslaved people.',
    'Say where the enslaved people were taken: across the Atlantic to the '
      + 'Americas.',
    'Say why the castles are kept today: to remember.',
  ],

  worked: [
    {
      level: 1,
      ask: 'Who built Elmina Castle, and when?',
      steps: [
        'The Portuguese were the first Europeans on this coast.',
        'They built Elmina Castle in 1482.',
      ],
      answer: 'The Portuguese, in 1482.',
    },
    {
      level: 2,
      ask: 'Why did the Europeans build forts instead of ordinary houses?',
      steps: [
        'Each country wanted the trade for itself.',
        'Other Europeans might attack.',
        'Thick walls and cannons protected their goods and their people.',
      ],
      answer: 'To guard their trade and keep other Europeans out.',
    },
    {
      level: 3,
      ask: 'Why is one doorway at the castles called the Door of No Return?',
      steps: [
        'Enslaved people passed through it to reach the ships.',
        'The ships took them across the Atlantic to the Americas.',
        'They were never brought home again.',
      ],
      answer: 'Because the people who went through it never came back.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking the castles were only for gold.',
      why: 'Gold came first, but for a long time the main trade was in '
        + 'human beings.',
    },
    {
      mistake: 'Thinking only one European country came.',
      why: 'The Portuguese came first, then the Dutch, British, Danes, '
        + 'Swedes and Germans. They fought each other for the forts.',
    },
    {
      mistake: 'Thinking only Europeans took part in the trade in people.',
      why: 'Some African traders and rulers sold captives too. '
        + 'Saying so plainly is part of telling the history honestly.',
    },
  ],

  tables: [{
    caption: 'Some forts and castles on the coast of Ghana',
    columns: ['Castle', 'Where', 'Who held it'],
    rows: [
      ['Elmina Castle', 'Elmina', 'Built by the Portuguese in 1482; taken by '
        + 'the Dutch in 1637'],
      ['Cape Coast Castle', 'Cape Coast', 'Taken by the British in 1664; '
        + 'their main base'],
      ['Christiansborg Castle', 'Osu, Accra', 'The Danes'],
    ],
  }, {
    caption: 'How the trade changed',
    columns: ['When', 'What was traded'],
    rows: [
      ['From 1471', 'Gold, swapped for cloth, metal goods and guns'],
      ['Later', 'Enslaved Africans, shipped to the Americas'],
      ['1807', 'Britain made the trade in people against its law for '
        + 'British ships'],
    ],
  }],

  figure: {
    alt: 'A simple drawing of a coastal castle beside the sea. Its upper '
      + 'part is labelled where the Europeans lived and traded. Below, a dark '
      + 'room shaded in red is labelled dungeon, where captives were held. '
      + 'An arrow leads from the dungeon through a doorway labelled Door of '
      + 'No Return to a ship on the sea, labelled across the Atlantic.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<polyline points="60,330 60,130 90,130 90,110 120,110 120,130 '
      + '160,130 160,110 190,110 190,130 230,130 230,110 260,110 260,130 '
      + '300,130 300,110 330,110 330,130 360,130 360,330"/>'
      + '<line x1="60" y1="230" x2="360" y2="230"/>'
      + '<text x="210" y="180" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Europeans lived</text>'
      + '<text x="210" y="205" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">and traded here</text>'
      + '<rect x="80" y="245" width="220" height="70" fill="#c8433a" '
      + 'fill-opacity="0.25" stroke="#c8433a"/>'
      + '<text x="190" y="287" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">dungeon</text>'
      + '<rect x="330" y="265" width="30" height="50" stroke="#c8433a"/>'
      + '<text x="345" y="360" font-size="16" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Door of No Return</text>'
      + '<line x1="360" y1="290" x2="450" y2="290" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<polyline points="436,280 450,290 436,300" stroke="#c8433a" '
      + 'stroke-width="4"/>'
      + '<path d="M 380 330 Q 420 320 460 330 Q 500 340 540 330 Q 580 320 '
      + '620 330" stroke="#2a6fb0"/>'
      + '<polygon points="470,300 590,300 570,325 490,325"/>'
      + '<line x1="530" y1="300" x2="530" y2="220"/>'
      + '<polygon points="530,225 530,285 575,285" fill="currentColor" '
      + 'fill-opacity="0.15"/>'
      + '<text x="530" y="200" font-size="16" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">across the Atlantic</text>'
      + '<text x="320" y="50" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a castle on the coast</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'hb-fo-1',
      ask: 'Which Europeans built Elmina Castle?',
      kind: 'choice',
      options: ['The British', 'The Portuguese', 'The Danes', 'The Dutch'],
      answer: 'The Portuguese',
      teach: 'The Dutch held Elmina later, after taking it in 1637. '
        + 'The builders were the Portuguese, the first Europeans on this '
        + 'coast.',
      level: 1,
    },
    {
      id: 'hb-fo-2',
      ask: 'In which year was Elmina Castle built?',
      kind: 'numeric',
      answer: '1482',
      teach: 'The Portuguese arrived in 1471 and built the castle eleven '
        + 'years later, in 1482. Do not mix up arriving with building.',
      level: 1,
    },
    {
      id: 'hb-fo-3',
      ask: 'What did Europeans first come to the coast to trade for?',
      kind: 'choice',
      options: ['Salt', 'Gold', 'Horses'],
      answer: 'Gold',
      teach: 'That is why Europeans called it the Gold Coast. '
        + 'Gold came first; the trade in people came later.',
      level: 1,
    },
    {
      id: 'hb-fo-4',
      ask: 'Which castle did the British make their main base?',
      kind: 'choice',
      options: ['Christiansborg Castle', 'Elmina Castle', 'Cape Coast Castle'],
      answer: 'Cape Coast Castle',
      teach: 'Elmina was Portuguese and then Dutch, '
        + 'and Christiansborg at Osu was Danish. '
        + 'The British took Cape Coast Castle in 1664.',
      level: 2,
    },
    {
      id: 'hb-fo-5',
      ask: 'Where were most enslaved people from the castles taken?',
      kind: 'choice',
      options: [
        'North across the Sahara',
        'Across the Atlantic to the Americas',
        'To Kumasi',
      ],
      answer: 'Across the Atlantic to the Americas',
      teach: 'The castles face the sea for a reason. '
        + 'Ships took the captives across the Atlantic Ocean '
        + 'to work on big farms in the Americas.',
      level: 2,
    },
    {
      id: 'hb-fo-6',
      ask: 'Why did each European country build forts?',
      kind: 'choice',
      options: [
        'To guard its trade and keep other Europeans away',
        'To give schools to the people',
        'To grow cocoa',
      ],
      answer: 'To guard its trade and keep other Europeans away',
      teach: 'Each country wanted the trade for itself, '
        + 'and they fought each other. Thick walls and cannons protected '
        + 'their goods.',
      level: 2,
    },
    {
      id: 'hb-fo-7',
      ask: 'Why is it called the Door of No Return?',
      kind: 'choice',
      options: [
        'It was locked and never opened',
        'The people who went through it to the ships never came back',
        'It led to the king\'s rooms',
      ],
      answer: 'The people who went through it to the ships never came back',
      teach: 'The door led from the dungeons to the ships. '
        + 'The captives were taken far across the sea and never returned '
        + 'home.',
      level: 3,
    },
    {
      id: 'hb-fo-8',
      ask: 'Which of these is true about who took part in the trade in '
        + 'enslaved people?',
      kind: 'choice',
      options: [
        'Only Europeans took part',
        'Some African traders sold captives and Europeans bought them',
        'Nobody was forced; people chose to go',
      ],
      answer: 'Some African traders sold captives and Europeans bought them',
      teach: 'People were captured and forced; nobody chose it. '
        + 'Some African traders and rulers sold captives and Europeans '
        + 'bought them, so both took part.',
      level: 3,
    },
    {
      id: 'hb-fo-9',
      ask: 'In which year did Britain make the trade in enslaved people '
        + 'against its law for British ships?',
      kind: 'numeric',
      answer: '1807',
      teach: 'Look at the timeline table. 1482 is when Elmina was built. '
        + 'Britain made the trade in people against its law in 1807.',
      level: 3,
    },
  ],
})

/* ── British rule ─────────────────────────────────────────────────────────── */

teach({
  topicId: 'colonial-rule-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Step by step, Britain took control of the Gold Coast. '
      + 'In 1844 Fante chiefs signed the Bond with the British. '
      + 'In 1874 the coast became a British colony. '
      + 'People resisted, and in 1900 Yaa Asantewaa led a war to protect '
      + 'the Golden Stool.',
    method: [
      'Put the events in order on the timeline.',
      'Say what each step gave the British.',
      'Name one way people resisted: war, like Yaa Asantewaa, or protest, '
        + 'like the Aborigines\' Rights Protection Society.',
    ],
  },

  why:
    'In 1800 the British in the Gold Coast were traders living in a few '
    + 'castles. '
    + 'They did not rule the land around them. '
    + 'By 1902 a British governor ruled the coast, Asante and the north. '
    + 'How does a group of traders in a few castles end up ruling a whole '
    + 'country?',

  recap:
    'A colony is a land ruled by another country far away. '
    + 'The people of the colony do not choose their own government. '
    + 'The ruling country sends a governor to make the big decisions. '
    + 'The Europeans had held castles on the coast of Ghana since 1482, '
    + 'when the Portuguese built Elmina. '
    + 'By the 1800s the British were the strongest of them.',

  idea:
    'Britain did not take the Gold Coast in one day. '
    + 'It happened in steps over about sixty years. '
    + 'First came the Bond of 1844. '
    + 'Then the coast became a British colony in 1874. '
    + 'Then Asante was taken after the war of 1900. '
    + 'The north was added as well. '
    + 'At every step people resisted, '
    + 'sometimes by fighting and sometimes by protest and argument.',

  mechanism:
    'On 6 March 1844 some Fante chiefs on the coast signed an agreement '
    + 'with the British. '
    + 'It is called the Bond of 1844. '
    + 'The chiefs wanted protection, especially from Asante. '
    + 'The Bond let the British judge serious crimes, '
    + 'such as murder and robbery, in the chiefs\' lands. '
    + 'It did not give away the land. '
    + 'But it gave the British a foot in the door. '
    + 'In 1874, after war with Asante, Britain declared the coastal lands '
    + 'a British colony, the Gold Coast Colony. '
    + 'Now a British governor ruled there. '
    + 'In 1896 the British sent the Asantehene, Prempeh the First, '
    + 'away into exile. '
    + 'In 1900 the British governor demanded the Golden Stool, '
    + 'so that he could sit on it. '
    + 'To the Asante this was a terrible insult, '
    + 'because the stool holds the spirit of the nation. '
    + 'Yaa Asantewaa, the queen mother of Ejisu, '
    + 'called the people to fight. '
    + 'The war is named after her. '
    + 'The British won and sent her into exile, '
    + 'but they never got the Golden Stool. '
    + 'Asante and the north then came under British rule too. '
    + 'People also resisted without guns. '
    + 'In 1897 educated Africans on the coast formed the Aborigines\' '
    + 'Rights Protection Society. '
    + 'They stopped a British law that would have taken control of land '
    + 'from the people.',

  method: [
    'Find the date in the question.',
    'Place it on the timeline: 1844, 1874, 1896, 1897, 1900.',
    'Say what that step changed.',
    'If the question asks about resistance, decide: fighting or protest.',
  ],

  worked: [
    {
      level: 1,
      ask: 'In which year did the Gold Coast become a British colony?',
      steps: [
        'The Bond came first, in 1844.',
        'The colony was declared thirty years later.',
      ],
      answer: '1874.',
    },
    {
      level: 2,
      ask: 'What did the Bond of 1844 allow the British to do?',
      steps: [
        'The Fante chiefs wanted protection.',
        'In return the British could judge serious crimes like murder.',
        'It did not give away the land.',
      ],
      answer: 'Judge serious crimes in the chiefs\' lands.',
    },
    {
      level: 3,
      ask: 'Why did Yaa Asantewaa call the Asante to war in 1900?',
      steps: [
        'The British governor demanded the Golden Stool.',
        'The stool holds the spirit of the Asante nation.',
        'Handing it over would mean giving up the nation itself.',
      ],
      answer: 'To protect the Golden Stool, which the British governor had '
        + 'demanded.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking the Bond of 1844 made the Gold Coast a colony.',
      why: 'The Bond was only about judging serious crimes. '
        + 'The colony came thirty years later, in 1874.',
    },
    {
      mistake: 'Thinking people did nothing.',
      why: 'They resisted by war, like Yaa Asantewaa, '
        + 'and by protest, like the Aborigines\' Rights Protection Society.',
    },
    {
      mistake: 'Thinking the British captured the Golden Stool.',
      why: 'They won the war of 1900 but never got the stool. '
        + 'The Asante kept it hidden.',
    },
  ],

  tables: [{
    caption: 'How the Gold Coast came under British rule',
    columns: ['Year', 'What happened'],
    rows: [
      ['1844', 'Fante chiefs sign the Bond: the British may judge serious '
        + 'crimes'],
      ['1874', 'The coast is made the Gold Coast Colony'],
      ['1896', 'The Asantehene Prempeh the First is sent into exile'],
      ['1897', 'The Aborigines\' Rights Protection Society is formed to '
        + 'protect land'],
      ['1900', 'The British demand the Golden Stool; Yaa Asantewaa leads '
        + 'the war'],
      ['After 1900', 'Asante and the north come under British rule'],
    ],
  }],

  figure: {
    alt: 'A timeline running left to right with five marks: 1844 the Bond, '
      + '1874 colony, 1896 Prempeh exiled, 1897 protest society, 1900 Yaa '
      + 'Asantewaa war. The 1900 mark is drawn in red.',
    svg: '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="40" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">steps to British rule</text>'
      + '<line x1="40" y1="130" x2="610" y2="130"/>'
      + '<polyline points="596,120 610,130 596,140"/>'
      + '<line x1="70" y1="115" x2="70" y2="145"/>'
      + '<text x="70" y="100" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">1844</text>'
      + '<text x="70" y="175" font-size="16" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the Bond</text>'
      + '<line x1="190" y1="115" x2="190" y2="145"/>'
      + '<text x="190" y="100" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">1874</text>'
      + '<text x="190" y="175" font-size="16" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">colony</text>'
      + '<line x1="310" y1="115" x2="310" y2="145"/>'
      + '<text x="310" y="100" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">1896</text>'
      + '<text x="310" y="175" font-size="16" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">Prempeh exiled</text>'
      + '<line x1="420" y1="115" x2="420" y2="145"/>'
      + '<text x="420" y="100" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">1897</text>'
      + '<text x="420" y="175" font-size="16" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">protest</text>'
      + '<text x="420" y="195" font-size="16" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">society</text>'
      + '<line x1="530" y1="115" x2="530" y2="145" stroke="#c8433a" '
      + 'stroke-width="5"/>'
      + '<text x="530" y="100" font-size="18" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">1900</text>'
      + '<text x="530" y="175" font-size="16" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">Yaa Asantewaa</text>'
      + '<text x="530" y="195" font-size="16" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">war</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'hb-cr-1',
      ask: 'In which year did the Gold Coast become a British colony?',
      kind: 'numeric',
      answer: '1874',
      teach: '1844 is the Bond, which came first. '
        + 'The colony was declared thirty years after it, in 1874.',
      level: 1,
    },
    {
      id: 'hb-cr-2',
      ask: 'Who led the Asante war against the British in 1900?',
      kind: 'choice',
      options: ['Okomfo Anokye', 'Yaa Asantewaa', 'Kwame Nkrumah'],
      answer: 'Yaa Asantewaa',
      teach: 'Okomfo Anokye lived around 1700 and Nkrumah much later. '
        + 'The war of 1900 was led by Yaa Asantewaa, queen mother of Ejisu.',
      level: 1,
    },
    {
      id: 'hb-cr-3',
      ask: 'What did the Bond of 1844 let the British do?',
      kind: 'choice',
      options: [
        'Own all the land',
        'Judge serious crimes such as murder',
        'Choose the chiefs',
      ],
      answer: 'Judge serious crimes such as murder',
      teach: 'The Bond did not give away land or chiefs. '
        + 'It let the British judge serious crimes, '
        + 'which gave them a foot in the door.',
      level: 2,
    },
    {
      id: 'hb-cr-4',
      ask: 'What did the British governor demand in 1900 that started the '
        + 'war?',
      kind: 'choice',
      options: ['All the cocoa farms', 'The Golden Stool', 'Elmina Castle'],
      answer: 'The Golden Stool',
      teach: 'The Golden Stool holds the spirit of the Asante nation. '
        + 'Demanding it to sit on was an insult, so Yaa Asantewaa called '
        + 'the people to fight.',
      level: 2,
    },
    {
      id: 'hb-cr-5',
      ask: 'Which came FIRST?',
      kind: 'choice',
      options: [
        'The Yaa Asantewaa war',
        'The Gold Coast Colony',
        'The Bond of 1844',
      ],
      answer: 'The Bond of 1844',
      teach: 'Put the years in order: 1844, then 1874, then 1900. '
        + 'The smallest year comes first.',
      level: 2,
    },
    {
      id: 'hb-cr-6',
      ask: 'How many years after the Bond did the coast become a colony?',
      kind: 'numeric',
      answer: '30',
      accept: ['thirty', '30 years'],
      teach: 'Take the earlier year from the later one: '
        + '1874 take away 1844 is 30.',
      level: 2,
    },
    {
      id: 'hb-cr-7',
      ask: 'Which of these was resistance WITHOUT fighting?',
      kind: 'choice',
      options: [
        'The Yaa Asantewaa war',
        'The Aborigines\' Rights Protection Society stopping a land law',
        'The Bond of 1844',
      ],
      answer: 'The Aborigines\' Rights Protection Society stopping a land law',
      teach: 'The Yaa Asantewaa war was fighting. '
        + 'The Bond was an agreement, not resistance. '
        + 'The Society argued and protested, and stopped the land law.',
      level: 3,
    },
    {
      id: 'hb-cr-8',
      ask: 'The British won the war of 1900. Did they get the Golden Stool?',
      kind: 'choice',
      options: [
        'Yes, they took it to Britain',
        'No, the Asante kept it hidden',
        'Yes, the governor sat on it',
      ],
      answer: 'No, the Asante kept it hidden',
      teach: 'Winning the war did not give the British the stool. '
        + 'The Asante protected it, which was the reason for the fight.',
      level: 3,
    },
    {
      id: 'hb-cr-9',
      ask: 'Why do we say Britain took the Gold Coast "step by step"?',
      kind: 'choice',
      options: [
        'Because it all happened on one day in 1844',
        'Because control grew from the Bond, to the colony, to Asante and '
          + 'the north',
        'Because the British walked from the coast to the north',
      ],
      answer: 'Because control grew from the Bond, to the colony, to Asante and '
        + 'the north',
      teach: 'Look along the timeline. Each step gave the British a little '
        + 'more: crimes in 1844, the coast in 1874, Asante after 1900.',
      level: 3,
    },
  ],
})

/* ── independence, 1957 ───────────────────────────────────────────────────── */

teach({
  topicId: 'independence-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Ghana became independent on 6 March 1957. '
      + 'Kwame Nkrumah led it. '
      + 'The 1948 shooting of ex-servicemen and the riots after it, '
      + 'the Big Six, and Nkrumah\'s party, the CPP, '
      + 'all led to that day. '
      + 'It matters because Ghana began to rule itself, '
      + 'and other African countries followed.',
    method: [
      'Place the event on the timeline: 1947, 1948, 1949, 1951, 1957.',
      'Say who was involved.',
      'Say how it moved the country closer to ruling itself.',
    ],
  },

  why:
    'Every year on 6 March, schoolchildren in Accra, Kumasi and Tamale '
    + 'march past in clean uniforms, and flags are everywhere. '
    + 'Yaw asks his grandmother why. '
    + 'She says, "Because on that day, we got our country back." '
    + 'Got it back from whom, and how?',

  recap:
    'From 1874 the Gold Coast was a British colony. '
    + 'That means a British governor made the big decisions. '
    + 'The people of the Gold Coast did not choose their own government. '
    + 'Being independent means the opposite: '
    + 'the people choose their own leaders and make their own laws. '
    + 'This lesson is about how the Gold Coast went from the first to the '
    + 'second.',

  idea:
    'On 6 March 1957 the Gold Coast became independent '
    + 'and took a new name, Ghana. '
    + 'The name comes from the old empire of Ghana, '
    + 'a great West African kingdom of long ago. '
    + 'Kwame Nkrumah became the first Prime Minister. '
    + 'At midnight he told a huge crowd in Accra: '
    + '"Ghana, your beloved country, is free forever." '
    + 'Ghana was one of the first African countries to win independence '
    + 'from colonial rule, '
    + 'and that gave hope to many others.',

  mechanism:
    'In 1947 a group of educated Gold Coast people formed a party called '
    + 'the UGCC, the United Gold Coast Convention. '
    + 'J. B. Danquah was one of its leaders. '
    + 'They invited Kwame Nkrumah home to work for it. '
    + 'Many Gold Coast soldiers, called ex-servicemen, '
    + 'had fought for Britain in the Second World War. '
    + 'When they came home they were not given what they had been promised. '
    + 'On 28 February 1948 they marched peacefully in Accra '
    + 'to give a letter to the governor. '
    + 'At the Christiansborg crossroads, police shot at them. '
    + 'Sergeant Adjetey and others were killed. '
    + 'Riots broke out in Accra and other towns. '
    + 'The British arrested six leaders of the UGCC. '
    + 'They are called the Big Six: '
    + 'Kwame Nkrumah, J. B. Danquah, Edward Akufo-Addo, Ebenezer Ako-Adjei, '
    + 'William Ofori Atta and Emmanuel Obetsebi-Lamptey. '
    + 'Nkrumah wanted to move faster than the UGCC. '
    + 'In 1949 he formed his own party, the CPP, the Convention People\'s '
    + 'Party. '
    + 'Its call was "Self-Government Now". '
    + 'In 1950 Nkrumah was sent to prison for leading strikes. '
    + 'In 1951 the CPP won an election while he was still in prison, '
    + 'so he was let out to lead the government. '
    + 'Six years later, the country was free.',

  method: [
    'Read the date in the question.',
    'Find it on the timeline table.',
    'Name who was involved: ex-servicemen, the Big Six, Nkrumah, the CPP.',
    'Say how it pushed the country toward ruling itself.',
  ],

  worked: [
    {
      level: 1,
      ask: 'On what date did Ghana become independent?',
      steps: [
        'It is the day Ghana marches and celebrates every year.',
        'The year was 1957.',
      ],
      answer: '6 March 1957.',
    },
    {
      level: 2,
      ask: 'Why are the Big Six called that?',
      steps: [
        'After the 1948 riots, the British arrested six UGCC leaders.',
        'Kwame Nkrumah was one of them.',
      ],
      answer: 'They were the six leaders arrested after the 1948 riots.',
    },
    {
      level: 3,
      ask: 'How did the shooting of the ex-servicemen in 1948 help bring '
        + 'independence?',
      steps: [
        'The march was peaceful, but police shot at the soldiers.',
        'People were angry and riots broke out.',
        'More people now wanted the British to go, and leaders pushed harder.',
      ],
      answer: 'It made people angry at British rule and turned many more of '
        + 'them toward self-government.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking Nkrumah did it alone.',
      why: 'The ex-servicemen, the Big Six, the CPP and ordinary people who '
        + 'marched and voted all played a part.',
    },
    {
      mistake: 'Mixing up the UGCC and the CPP.',
      why: 'The UGCC came first, in 1947. '
        + 'Nkrumah left it and formed the CPP in 1949.',
    },
    {
      mistake: 'Thinking Nkrumah was President in 1957.',
      why: 'In 1957 he was Prime Minister. '
        + 'He became President when Ghana became a republic in 1960.',
    },
  ],

  tables: [{
    caption: 'The road to independence',
    columns: ['Year', 'What happened'],
    rows: [
      ['1947', 'The UGCC is formed; Nkrumah is invited home'],
      ['1948', 'Ex-servicemen shot at Christiansborg crossroads; riots; the '
        + 'Big Six arrested'],
      ['1949', 'Nkrumah forms the CPP: "Self-Government Now"'],
      ['1950', 'Nkrumah is sent to prison'],
      ['1951', 'The CPP wins the election; Nkrumah leads the government'],
      ['1957', '6 March: independence, and the name Ghana'],
    ],
  }, {
    caption: 'The Big Six',
    columns: ['Name'],
    rows: [
      ['Kwame Nkrumah'],
      ['J. B. Danquah'],
      ['Edward Akufo-Addo'],
      ['Ebenezer Ako-Adjei'],
      ['William Ofori Atta'],
      ['Emmanuel Obetsebi-Lamptey'],
    ],
  }],

  figure: {
    alt: 'A timeline from 1947 to 1957. Marks at 1947 UGCC formed, 1948 '
      + 'ex-servicemen shot and the Big Six arrested, 1949 CPP formed, 1951 '
      + 'CPP wins, and at the far end in green, 6 March 1957 independence.',
    svg: '<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="40" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the road to 6 March 1957</text>'
      + '<line x1="40" y1="130" x2="610" y2="130"/>'
      + '<polyline points="596,120 610,130 596,140"/>'
      + '<line x1="70" y1="115" x2="70" y2="145"/>'
      + '<text x="70" y="100" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">1947</text>'
      + '<text x="70" y="175" font-size="16" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">UGCC</text>'
      + '<line x1="170" y1="115" x2="170" y2="145" stroke="#c8433a" '
      + 'stroke-width="5"/>'
      + '<text x="170" y="100" font-size="18" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">1948</text>'
      + '<text x="170" y="175" font-size="16" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">shooting,</text>'
      + '<text x="170" y="195" font-size="16" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">Big Six</text>'
      + '<line x1="270" y1="115" x2="270" y2="145"/>'
      + '<text x="270" y="100" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">1949</text>'
      + '<text x="270" y="175" font-size="16" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">CPP</text>'
      + '<line x1="380" y1="115" x2="380" y2="145"/>'
      + '<text x="380" y="100" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">1951</text>'
      + '<text x="380" y="175" font-size="16" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">CPP wins</text>'
      + '<circle cx="545" cy="130" r="12" fill="#0f8a4d" stroke="#0f8a4d"/>'
      + '<text x="545" y="100" font-size="18" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">1957</text>'
      + '<text x="545" y="175" font-size="16" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">6 March:</text>'
      + '<text x="545" y="195" font-size="16" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">independence</text>'
      + '</svg>',
  },

  questions: [
    {
      id: 'hb-in-1',
      ask: 'On which date did Ghana become independent?',
      kind: 'choice',
      options: ['1 July 1960', '6 March 1957', '28 February 1948'],
      answer: '6 March 1957',
      teach: '28 February 1948 is the shooting of the ex-servicemen, '
        + 'and 1 July 1960 is when Ghana became a republic. '
        + 'Independence was 6 March 1957.',
      level: 1,
    },
    {
      id: 'hb-in-2',
      ask: 'Who led Ghana to independence and became its first Prime '
        + 'Minister?',
      kind: 'choice',
      options: ['J. B. Danquah', 'Yaa Asantewaa', 'Kwame Nkrumah'],
      answer: 'Kwame Nkrumah',
      teach: 'Danquah was one of the Big Six and a UGCC leader, '
        + 'and Yaa Asantewaa led the 1900 war. '
        + 'Nkrumah led the CPP and became Prime Minister in 1957.',
      level: 1,
    },
    {
      id: 'hb-in-3',
      ask: 'What was the Gold Coast\'s new name at independence based on?',
      kind: 'choice',
      options: [
        'The old empire of Ghana, a great West African kingdom',
        'The name of Nkrumah\'s village',
        'A British word for gold',
      ],
      answer: 'The old empire of Ghana, a great West African kingdom',
      teach: 'The new country chose a name from Africa\'s own past, '
        + 'the old empire of Ghana, to show it now belonged to itself.',
      level: 2,
    },
    {
      id: 'hb-in-4',
      ask: 'Which party did Nkrumah form in 1949?',
      kind: 'choice',
      options: ['The UGCC', 'The CPP', 'The Big Six'],
      answer: 'The CPP',
      teach: 'The UGCC was formed in 1947 and invited Nkrumah in. '
        + 'He left it and formed the Convention People\'s Party, the CPP, '
        + 'in 1949. The Big Six were people, not a party.',
      level: 2,
    },
    {
      id: 'hb-in-5',
      ask: 'Who were shot at the Christiansborg crossroads in 1948?',
      kind: 'choice',
      options: [
        'Ex-servicemen marching to the governor',
        'The Big Six',
        'Traders from Salaga',
      ],
      answer: 'Ex-servicemen marching to the governor',
      teach: 'The Big Six were arrested after the riots, not shot. '
        + 'The men shot were ex-servicemen, soldiers who had fought for '
        + 'Britain, marching peacefully with a letter.',
      level: 2,
    },
    {
      id: 'hb-in-6',
      ask: 'How many people were in the group called the Big Six?',
      kind: 'numeric',
      answer: '6',
      accept: ['six'],
      teach: 'The name tells you: six leaders, '
        + 'arrested by the British after the 1948 riots.',
      level: 1,
    },
    {
      id: 'hb-in-7',
      ask: 'What was the CPP\'s call?',
      kind: 'choice',
      options: [
        '"Self-Government Now"',
        '"Gold for Salt"',
        '"Freedom in Fifty Years"',
      ],
      answer: '"Self-Government Now"',
      teach: 'Nkrumah left the UGCC because he wanted to move faster. '
        + 'So the CPP\'s call was "Self-Government Now", not later.',
      level: 3,
    },
    {
      id: 'hb-in-8',
      ask: 'In 1951 the CPP won an election. Where was Nkrumah at that time?',
      kind: 'choice',
      options: ['In prison', 'In Britain', 'At Elmina Castle'],
      answer: 'In prison',
      teach: 'He was sent to prison in 1950. '
        + 'The CPP won while he was inside, so he was let out to lead the '
        + 'government.',
      level: 3,
    },
    {
      id: 'hb-in-9',
      ask: 'Why does 6 March 1957 matter beyond Ghana?',
      kind: 'choice',
      options: [
        'It was the day the forts were built',
        'Ghana was one of the first African countries to win independence, '
          + 'which gave hope to others',
        'It was the day the trans-Saharan trade began',
      ],
      answer: 'Ghana was one of the first African countries to win independence, '
        + 'which gave hope to others',
      teach: 'The date matters for Ghana because it began to rule itself. '
        + 'It matters for Africa because Ghana was one of the first, '
        + 'and others followed.',
      level: 3,
    },
  ],
})

/* ── Ghana since independence ─────────────────────────────────────────────── */

teach({
  topicId: 'ghana-since-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Since 1957 Ghana has changed a lot. '
      + 'It became a republic in 1960. '
      + 'It had army governments, then in 1992 a new constitution began the '
      + 'Fourth Republic, with elections every four years. '
      + 'Some things have stayed the same: the name Ghana, 6 March, '
      + 'and the chiefs.',
    method: [
      'Place the event on the timeline: 1957, 1960, 1966, 1992.',
      'Ask: is this a change, or something that stayed?',
      'Give a reason or an example for each.',
    ],
  },

  why:
    'Adwoa\'s grandfather was a boy in 1957. '
    + 'He paid for things in pounds, not cedis. '
    + 'There was no Akosombo Dam and no electricity in his village. '
    + 'He has voted many times since 1992. '
    + 'Yet he still goes to the same festival every year, '
    + 'and the same stool is still in the palace. '
    + 'What changed in his lifetime, and what did not?',

  recap:
    'Independence came on 6 March 1957, led by Kwame Nkrumah. '
    + 'On that day the Gold Coast took the name Ghana '
    + 'and began to rule itself. '
    + 'A country is run by rules written down in a constitution. '
    + 'The constitution says who leads, how they are chosen, '
    + 'and what they may and may not do. '
    + 'When a country changes its constitution in a big way, '
    + 'people often give that time a new number, like the First or Fourth '
    + 'Republic.',

  idea:
    'A republic is a country whose head is a president, not a king or queen. '
    + 'At independence in 1957 the British queen was still Ghana\'s head of '
    + 'state, and Nkrumah was Prime Minister. '
    + 'On 1 July 1960 Ghana became a republic, '
    + 'and Nkrumah became its first President. '
    + 'In 1966 the army removed Nkrumah from power. '
    + 'Over the next years Ghana had several army governments, '
    + 'with short times of elected government between them. '
    + 'In 1992 the people voted for a new constitution. '
    + 'It began the Fourth Republic, which started in January 1993 '
    + 'and has lasted ever since.',

  mechanism:
    'Under the 1992 constitution, Ghanaians vote for a President and for '
    + 'members of Parliament every four years. '
    + 'A President can serve two terms at most. '
    + 'Power has passed peacefully from one party to another through '
    + 'elections, for example in 2000 and in 2008. '
    + 'That is a big change from the years of army rule. '
    + 'Other things changed too. '
    + 'In 1965 the cedi took the place of the pound as Ghana\'s money. '
    + 'The Akosombo Dam on the Volta River was opened in the 1960s. '
    + 'It made the Volta Lake and gives electricity to much of Ghana. '
    + 'Many more children now go to school than in 1957. '
    + 'But some things have stayed the same. '
    + 'The name is still Ghana. '
    + '6 March is still Independence Day. '
    + 'Chiefs still lead their towns, '
    + 'and the 1992 constitution protects chieftaincy. '
    + 'Festivals are still celebrated in every region.',

  method: [
    'Find the year in the question and place it on the timeline.',
    'Decide: change, or something that stayed the same.',
    'For a change, say what it was before and what it is now.',
    'For something that stayed, say how it looked in 1957 and how it looks '
      + 'today.',
  ],

  worked: [
    {
      level: 1,
      ask: 'When did Ghana become a republic?',
      steps: [
        'Independence came first, in 1957.',
        'The republic came three years later.',
      ],
      answer: '1 July 1960.',
    },
    {
      level: 2,
      ask: 'Name one thing that has changed since 1957.',
      steps: [
        'In 1957 people paid in pounds.',
        'In 1965 the cedi took over.',
      ],
      answer: 'Ghana\'s money changed from the pound to the cedi.',
    },
    {
      level: 3,
      ask: 'Why is the Fourth Republic different from the years before it?',
      steps: [
        'Before it, Ghana had several army governments.',
        'Since 1993, leaders have been chosen in elections every four years.',
        'Power has passed peacefully between parties.',
      ],
      answer: 'Leaders are chosen by elections and power has changed hands '
        + 'peacefully, instead of by army takeovers.',
    },
  ],

  traps: [
    {
      mistake: 'Mixing up independence and the republic.',
      why: 'Independence was 6 March 1957. '
        + 'The republic, with a President, came on 1 July 1960.',
    },
    {
      mistake: 'Thinking everything has changed.',
      why: 'The name Ghana, Independence Day, chiefs and festivals have all '
        + 'stayed.',
    },
    {
      mistake: 'Thinking a President can rule for as long as they like.',
      why: 'Under the 1992 constitution a President can serve two terms of '
        + 'four years at most.',
    },
  ],

  tables: [{
    caption: 'Ghana since independence',
    columns: ['Year', 'What happened'],
    rows: [
      ['1957', 'Independence; Nkrumah is Prime Minister'],
      ['1960', 'Ghana becomes a republic; Nkrumah is President'],
      ['1965', 'The cedi takes the place of the pound'],
      ['1966', 'The army removes Nkrumah'],
      ['1966 to 1992', 'Several army governments, with short times of '
        + 'elected government'],
      ['1992', 'A new constitution; the Fourth Republic begins in January '
        + '1993'],
    ],
  }, {
    caption: 'What has changed and what has stayed',
    columns: ['Changed', 'Stayed the same'],
    rows: [
      ['Money: pound to cedi', 'The name Ghana'],
      ['Head of state: the queen, then a President', '6 March is '
        + 'Independence Day'],
      ['Elections every four years since 1992', 'Chiefs still lead their '
        + 'towns'],
      ['Electricity from the Akosombo Dam', 'Festivals in every region'],
    ],
  }],

  questions: [
    {
      id: 'hb-gs-1',
      ask: 'On what date did Ghana become a republic?',
      kind: 'choice',
      options: ['6 March 1957', '1 July 1960', '7 January 1993'],
      answer: '1 July 1960',
      teach: '6 March 1957 is independence, and January 1993 is when the '
        + 'Fourth Republic started. The republic came on 1 July 1960.',
      level: 1,
    },
    {
      id: 'hb-gs-2',
      ask: 'What is a republic?',
      kind: 'choice',
      options: [
        'A country whose head is a king or queen',
        'A country whose head is a president',
        'A country ruled by another country',
      ],
      answer: 'A country whose head is a president',
      teach: 'A country ruled by another is a colony. '
        + 'One headed by a king or queen is not a republic. '
        + 'A republic has a president.',
      level: 1,
    },
    {
      id: 'hb-gs-3',
      ask: 'In which year did the people vote for the constitution that began '
        + 'the Fourth Republic?',
      kind: 'numeric',
      answer: '1992',
      teach: 'Look at the timeline. 1960 is the first republic. '
        + 'The constitution of the Fourth Republic was 1992.',
      level: 2,
    },
    {
      id: 'hb-gs-4',
      ask: 'Which money took the place of the pound in Ghana in 1965?',
      kind: 'choice',
      options: ['The dollar', 'The cedi', 'The naira'],
      answer: 'The cedi',
      teach: 'The dollar is American money and the naira is Nigerian. '
        + 'Ghana\'s own money, from 1965, is the cedi.',
      level: 1,
    },
    {
      id: 'hb-gs-5',
      ask: 'Under the 1992 constitution, how often do Ghanaians vote for a '
        + 'President?',
      kind: 'choice',
      options: ['Every year', 'Every four years', 'Every ten years'],
      answer: 'Every four years',
      teach: 'Elections for President and Parliament come every four years, '
        + 'and a President can serve two terms at most.',
      level: 2,
    },
    {
      id: 'hb-gs-6',
      ask: 'Which of these has STAYED THE SAME since 1957?',
      kind: 'choice',
      options: [
        'Ghana\'s money',
        'Who is head of state',
        '6 March is Independence Day',
      ],
      answer: '6 March is Independence Day',
      teach: 'The money changed to the cedi and the head of state changed to '
        + 'a President. 6 March has been Independence Day all along.',
      level: 2,
    },
    {
      id: 'hb-gs-7',
      ask: 'What happened to Nkrumah\'s government in 1966?',
      kind: 'choice',
      options: [
        'It won an election',
        'The army removed it',
        'It became a colony again',
      ],
      answer: 'The army removed it',
      teach: 'Ghana never became a colony again. '
        + 'In 1966 the army took power from Nkrumah, '
        + 'and army governments followed for many years.',
      level: 2,
    },
    {
      id: 'hb-gs-8',
      ask: 'What does the Akosombo Dam give much of Ghana?',
      kind: 'choice',
      options: ['Gold', 'Electricity', 'Salt'],
      answer: 'Electricity',
      teach: 'The dam holds back the Volta River to make Volta Lake, '
        + 'and the falling water makes electricity.',
      level: 2,
    },
    {
      id: 'hb-gs-9',
      ask: 'In 2000 and 2008, power passed from one party to another through '
        + 'elections. Why is that important?',
      kind: 'choice',
      options: [
        'It shows leaders can change peacefully, without the army',
        'It shows Ghana has no constitution',
        'It shows chiefs choose the President',
      ],
      answer: 'It shows leaders can change peacefully, without the army',
      teach: 'Before 1992 leaders were often changed by army takeovers. '
        + 'A peaceful handover after a vote shows the people choose, '
        + 'which is the big change of the Fourth Republic.',
      level: 3,
    },
    {
      id: 'hb-gs-10',
      ask: 'How many years after independence did Ghana become a republic?',
      kind: 'numeric',
      answer: '3',
      accept: ['three', '3 years'],
      teach: 'Take the earlier year from the later one: 1960 take away 1957 '
        + 'is 3.',
      level: 3,
    },
  ],
})
