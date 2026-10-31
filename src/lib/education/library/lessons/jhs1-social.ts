/**
 * Stored lessons for JHS 1 Social Studies.
 *
 * Written at about grade 6 to 7, with a `brief` form on every topic.
 *
 * ── What changes at JHS ────────────────────────────────────────────────────
 *
 * Primary Our World Our People asks the learner to name things: the regions,
 * the rivers, the crops. JHS Social Studies asks why they are where they are.
 * The whole year turns on one chain of cause: the rain belt moves, so the
 * north and the south get different rain, so they carry different vegetation,
 * so they grow different crops, so they live differently and earn
 * differently.
 *
 * So `climate-social` is the lesson the other three geography topics lean on,
 * and each of them refers back to it rather than repeating it.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── position and relief ──────────────────────────────────────────────────── */

teach({
  topicId: 'ghana-location',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Ghana is in West Africa, on the Gulf of Guinea. '
      + 'It lies just north of the equator, and the Greenwich meridian '
      + 'crosses it near Tema. '
      + 'The land is mostly low. '
      + 'It has 16 regions and the Volta is its largest river.',
    method: [
      'Give the position two ways: by neighbours, and by lines on the globe.',
      'Name the lowland first, then the few highlands.',
      'Follow each river towards the sea.',
    ],
  },

  idea:
    'Ghana sits in West Africa, on the coast of the Gulf of Guinea. '
    + 'Côte d’Ivoire is to the west, Burkina Faso to the north, '
    + 'Togo to the east, and the sea to the south. '
    + 'On the globe it lies between about 4 degrees and 11 degrees north, '
    + 'so it is wholly north of the equator and wholly in the tropics. '
    + 'The Greenwich meridian, which is 0 degrees longitude, '
    + 'passes through the country near Tema. '
    + 'The land is mostly below 500 metres. '
    + 'The highest ground is in the Akwapim Togo ranges in the east, '
    + 'where Mount Afadja reaches about 885 metres. '
    + 'The country has 16 regions, '
    + 'and its largest river is the Volta.',

  mechanism:
    'The two facts people treat as trivia are the two that explain the most. '
    + 'First, Ghana lies between 4 and 11 degrees north. '
    + 'That is why it has no winter and no summer. '
    + 'The sun is high all year, so temperature hardly changes, '
    + 'and the year is divided by rain instead of by heat. '
    + 'Second, the land is low and the coast faces south. '
    + 'That is why the rivers nearly all run south towards the sea, '
    + 'and why the rain carried in from the sea reaches the south first. '
    + 'Position and relief are not a list to memorise. '
    + 'They are the reason the climate lesson works, '
    + 'and the climate is the reason the farming lesson works.',

  recap:
    'You have named Ghana’s regions and its neighbours before. '
    + 'What is added here is position by latitude and longitude, '
    + 'and relief, which means the shape and height of the land.',

  method: [
    'Give the position by neighbours: west, north, east and south.',
    'Then give it by lines: 4 to 11 degrees north, and near 0 longitude.',
    'Say that the land is mostly lowland, below 500 metres.',
    'Name the highlands: the Akwapim Togo ranges and the Kwahu plateau.',
    'Name the rivers and say which way each runs.',
    'Link each vegetation belt to how much rain its part of the country '
      + 'gets.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which countries border Ghana?',
      steps: [
        'Take the directions in order.',
        'West, north, east. The south is sea.',
      ],
      answer: 'Côte d’Ivoire to the west, Burkina Faso to the north, '
        + 'Togo to the east. The Gulf of Guinea is to the south.',
    },
    {
      level: 4,
      ask: 'Why does Ghana have no winter?',
      steps: [
        'Ghana lies between 4 and 11 degrees north.',
        'That is inside the tropics, close to the equator.',
        'The sun stays high all year there.',
      ],
      answer: 'Because it lies in the tropics, '
        + 'where the sun is high all year, so temperature changes little. '
        + 'The year is divided by rain instead.',
    },
    {
      level: 5,
      ask: 'Why do almost all of Ghana’s rivers run southwards?',
      steps: [
        'Water runs downhill.',
        'The higher ground is inland and to the north and east.',
        'The lowest ground is the coast in the south.',
      ],
      answer: 'Because the land falls from the higher ground inland towards '
        + 'the coast in the south, and water runs downhill.',
    },
  ],

  traps: [
    {
      mistake: 'Saying Ghana is on the equator.',
      why: 'It is north of it. '
        + 'The line that crosses Ghana is the Greenwich meridian, '
        + 'which is longitude, not latitude.',
    },
    {
      mistake: 'Calling the Akwapim Togo ranges mountains like the Alps.',
      why: 'Mount Afadja is about 885 metres. '
        + 'That is high for Ghana and small in the world.',
    },
    {
      mistake: 'Learning relief as heights only.',
      why: 'Relief matters because it decides where water goes '
        + 'and where roads and farms can be.',
    },
  ],

  extension:
    'Position has an economic side too. '
    + 'A coast facing south, with deep water at Tema and Takoradi, '
    + 'makes Ghana a route to the sea for Burkina Faso and Mali, '
    + 'which have no coast of their own.',

  questions: [
    {
      id: 'loc-1',
      ask: 'Which country lies to the north of Ghana?',
      kind: 'choice',
      options: ['Burkina Faso', 'Togo', 'Côte d’Ivoire'],
      answer: 'Burkina Faso',
      teach: 'Côte d’Ivoire is west, Togo is east, '
        + 'and the sea is south.',
      level: 3,
    },
    {
      id: 'loc-2',
      ask: 'The Greenwich meridian passes through Ghana near which town?',
      kind: 'choice',
      options: ['Tema', 'Takoradi', 'Tamale'],
      answer: 'Tema',
      teach: 'The meridian is 0 degrees longitude, '
        + 'and it crosses the coast near Tema.',
      level: 4,
    },
    {
      id: 'loc-3',
      ask: 'Why is Ghana’s year divided by rain rather than by temperature?',
      kind: 'choice',
      options: [
        'It lies in the tropics, where the sun stays high all year',
        'It has no rivers',
        'It is close to the sea',
      ],
      answer: 'It lies in the tropics, where the sun stays high all year',
      teach: 'Between 4 and 11 degrees north the temperature hardly changes, '
        + 'so the seasons are wet and dry rather than hot and cold.',
      level: 5,
    },
  ],
})

/* ── climate and vegetation ──────────────────────────────────────────────── */

teach({
  topicId: 'climate-social',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A rain belt moves north and south across Ghana each year. '
      + 'The south is under it twice, so it has two rainy seasons and '
      + 'forest. '
      + 'The north is under it once, so it has one rainy season and savanna. '
      + 'Crops follow the rain.',
    method: [
      'Start with the rain belt, not with the crops.',
      'Count how many times it passes over that part of the country.',
      'Then say what vegetation and what farming follow.',
    ],
  },

  idea:
    'Ghana has two seasons, wet and dry, because a belt of rain moves '
    + 'north and south across West Africa during the year. '
    + 'It comes up from the sea, crosses the south, '
    + 'reaches the north about the middle of the year, and goes back. '
    + 'The south is therefore under it twice, '
    + 'and has a major rainy season and a minor one. '
    + 'The north is under it once, '
    + 'and has a single rainy season followed by a long dry one, '
    + 'including the harmattan, which is a dry dusty wind from the '
    + 'north east. '
    + 'The vegetation follows the rain: rainforest in the wet south west, '
    + 'then transitional woodland, then guinea savanna, '
    + 'then the drier sudan savanna in the far north east.',

  mechanism:
    'The whole difference between north and south comes from one thing, '
    + 'and it is not distance from the sea. '
    + 'It is how many times a year the rain belt passes overhead. '
    + 'Follow it. '
    + 'The belt sits over the sea early in the year, '
    + 'moves north across the coast around March, '
    + 'is over the far north by August, '
    + 'and returns south in September and October. '
    + 'A place in the south is crossed twice, going up and coming back, '
    + 'so it gets two rainy seasons with a short break between them. '
    + 'A place in the far north is reached only at the top of the journey, '
    + 'so it gets one rainy season and a much longer dry one. '
    + 'Then everything else follows in order. '
    + 'More rain for more of the year keeps trees alive, so the south is '
    + 'forest. '
    + 'Less rain, for less of the year, suits grass with scattered trees, '
    + 'so the north is savanna. '
    + 'Cocoa needs steady rain and shade, so it is grown in the forest belt. '
    + 'Millet, sorghum, yam and shea stand a long dry season, '
    + 'so they are northern crops. '
    + 'And a farmer in the north has one planting season instead of two, '
    + 'which is why irrigation and dams matter more there.',

  recap:
    'You know Ghana has a wet season and a dry season, '
    + 'and that cocoa grows in the south. '
    + 'This explains the cause of both, which is one moving belt of rain.',

  method: [
    'Say where the rain belt is at that time of year.',
    'Count how many times it crosses the place you are asked about.',
    'Two crossings means two rainy seasons; one means one.',
    'Match the vegetation to the rain: forest where wet, savanna where dry.',
    'Match the crops to the vegetation.',
    'For a farming question, say how many planting seasons that gives.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How many rainy seasons does southern Ghana have?',
      steps: [
        'The rain belt crosses the south on its way north.',
        'It crosses again on its way back south.',
      ],
      answer: 'Two: a major season and a minor one.',
    },
    {
      level: 4,
      ask: 'Why is cocoa grown in the south and not in the Upper East?',
      steps: [
        'Cocoa needs rain spread through the year, and shade.',
        'The south is crossed twice by the rain belt, so it has forest.',
        'The Upper East has one short rainy season and a long dry one.',
      ],
      answer: 'Because cocoa needs the steady rain and shade of the forest '
        + 'belt, and the far north is savanna with one short rainy season.',
    },
    {
      level: 5,
      ask: 'A farmer in the Upper West can plant only once a year. '
        + 'Explain why, and say what would change it.',
      steps: [
        'The rain belt reaches the far north only at the top of its '
          + 'journey.',
        'So there is one rainy season, then a long dry season.',
        'Crops need water, and without rain there is none.',
        'Stored water would give a second season.',
      ],
      answer: 'Because the rain belt passes over the far north once a year, '
        + 'giving one rainy season. '
        + 'Irrigation from a dam or a river would let a second crop be grown '
        + 'in the dry season.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the north is hot because it is far from the sea.',
      why: 'Distance from the sea affects it, '
        + 'but the reason for the single rainy season is the rain belt '
        + 'passing once.',
    },
    {
      mistake: 'Treating the harmattan as a season of its own.',
      why: 'It is a wind that blows during the dry season, '
        + 'not a third season.',
    },
    {
      mistake: 'Learning the vegetation belts as names on a map.',
      why: 'Each belt is a result. '
        + 'If you can say how much rain it gets, you can work out its name.',
    },
  ],

  extension:
    'When the rain belt arrives late or leaves early, the planting season '
    + 'is shortened, and the harvest fails even though the total rainfall '
    + 'looks normal. '
    + 'This is why farmers watch the timing of the rain, not only the '
    + 'amount.',

  questions: [
    {
      id: 'cli-1',
      ask: 'What causes Ghana’s two seasons?',
      kind: 'choice',
      options: [
        'A rain belt that moves north and south each year',
        'The tilt of the land',
        'The Volta river',
      ],
      answer: 'A rain belt that moves north and south each year',
      teach: 'The belt comes up from the sea and returns. '
        + 'How many times it crosses a place decides its seasons.',
      level: 3,
    },
    {
      id: 'cli-2',
      ask: 'Why does the far north have only one rainy season?',
      kind: 'choice',
      options: [
        'The rain belt reaches it only at the top of its journey',
        'It has no rivers',
        'It is higher land',
      ],
      answer: 'The rain belt reaches it only at the top of its journey',
      teach: 'The south is crossed twice, going up and coming back. '
        + 'The far north is reached once.',
      level: 4,
    },
    {
      id: 'cli-3',
      ask: 'Which crops suit a long dry season?',
      kind: 'choice',
      options: [
        'Millet, sorghum and shea',
        'Cocoa and oil palm',
        'Cocoa and plantain',
      ],
      answer: 'Millet, sorghum and shea',
      teach: 'Cocoa and oil palm need steady rain, so they belong in the '
        + 'forest belt of the south.',
      level: 5,
    },
  ],
})

/* ── Ghana's resources ───────────────────────────────────────────────────── */

teach({
  topicId: 'resources-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Ghana earns from gold, cocoa, oil, timber, bauxite, manganese, '
      + 'diamonds, fish and water. '
      + 'Most are sold raw. '
      + 'A resource processed at home earns far more than the same resource '
      + 'shipped out.',
    method: [
      'Name the resource and where it comes from.',
      'Say how it earns: export, power, food or work.',
      'Then say what processing it at home would add.',
    ],
  },

  idea:
    'A resource is anything from the land, the water or the people that '
    + 'can be used to meet a need. '
    + 'Ghana’s main ones are gold, cocoa, crude oil, timber, bauxite, '
    + 'manganese, diamonds, limestone, salt, fish, '
    + 'and the water of the Volta, which makes electricity at Akosombo. '
    + 'Gold, cocoa and oil earn most of the foreign money. '
    + 'Cocoa and fishing employ far more people than mining does. '
    + 'And almost all of it leaves the country raw.',

  mechanism:
    'The important thing about Ghana’s resources is not the list. '
    + 'It is where in the chain the money is made. '
    + 'Take cocoa. '
    + 'Ghana grows some of the best cocoa in the world and sells it as '
    + 'beans. '
    + 'The beans are turned into chocolate somewhere else, '
    + 'and a bar of chocolate sells for many times the price of the beans '
    + 'inside it. '
    + 'The difference is called added value, '
    + 'and it goes to whoever does the processing. '
    + 'The same chain appears everywhere. '
    + 'Bauxite becomes aluminium. '
    + 'Crude oil becomes fuel and plastic. '
    + 'Timber becomes furniture. '
    + 'In each case the raw end earns least and the finished end earns most. '
    + 'This is also why a resource can leave a country poor. '
    + 'Selling raw material brings money in once. '
    + 'Processing it builds factories, which need workers, '
    + 'who are paid every month, '
    + 'and who then buy things from other Ghanaians. '
    + 'One is income. The other is an economy.',

  recap:
    'You have named Ghana’s resources and where they are found. '
    + 'This asks the harder question: how much of their value does Ghana '
    + 'actually keep?',

  method: [
    'Name the resource.',
    'Say where in the country it is found.',
    'Say how it contributes: exports, power, food, jobs or taxes.',
    'Ask whether it is sold raw or processed here.',
    'If raw, say what processing would add and who gains that value now.',
    'Finish with one cost: land, pollution, or a resource running out.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name three of Ghana’s mineral resources.',
      steps: [
        'Minerals are dug from the ground.',
        'List the ones Ghana exports.',
      ],
      answer: 'Gold, bauxite and manganese. '
        + 'Diamonds and limestone also count.',
    },
    {
      level: 4,
      ask: 'How does the Volta river contribute to the economy?',
      steps: [
        'The dam at Akosombo holds the water back.',
        'Falling water turns turbines and makes electricity.',
        'Factories, homes and neighbouring countries use that power.',
      ],
      answer: 'It generates electricity at Akosombo for homes, '
        + 'factories and export, and it also supports fishing and '
        + 'transport on the lake.',
    },
    {
      level: 5,
      ask: 'Ghana is one of the largest cocoa growers in the world, '
        + 'yet earns far less from cocoa than some countries that grow none. '
        + 'Explain.',
      steps: [
        'Ghana sells cocoa mainly as raw beans.',
        'Chocolate is made elsewhere, from those beans.',
        'The finished bar sells for many times the price of the beans.',
        'That difference, the added value, stays where the processing '
          + 'happens.',
      ],
      answer: 'Because the value is added when the beans are processed into '
        + 'chocolate, and that is done abroad. '
        + 'Ghana earns the price of the raw bean; '
        + 'the processor earns the price of the bar.',
    },
  ],

  traps: [
    {
      mistake: 'Listing resources without saying how each one earns.',
      why: 'The question nearly always asks for the contribution. '
        + 'A name alone earns no mark.',
    },
    {
      mistake: 'Thinking mining employs most Ghanaians.',
      why: 'Mining earns a lot of money with few workers. '
        + 'Farming and fishing employ far more people.',
    },
    {
      mistake: 'Treating a resource as only a benefit.',
      why: 'Mining takes farmland and pollutes rivers, '
        + 'and timber taken faster than trees grow does not come back.',
    },
  ],

  extension:
    'Some resources renew and some do not. '
    + 'Fish, timber and water renew if they are used slower than they '
    + 'recover. '
    + 'Gold and oil do not renew at all, '
    + 'so a country living on them is spending something it cannot replace.',

  questions: [
    {
      id: 'res-1',
      ask: 'Where is most of Ghana’s electricity generated?',
      kind: 'choice',
      options: [
        'At the Akosombo dam on the Volta',
        'At Takoradi harbour',
        'In the Upper East',
      ],
      answer: 'At the Akosombo dam on the Volta',
      teach: 'The dam holds the water, '
        + 'and the falling water turns turbines that make electricity.',
      level: 3,
    },
    {
      id: 'res-2',
      ask: 'What does "added value" mean?',
      kind: 'choice',
      options: [
        'The extra worth a resource gains when it is processed',
        'The tax paid on an export',
        'The total weight sold',
      ],
      answer: 'The extra worth a resource gains when it is processed',
      teach: 'Beans into chocolate, bauxite into aluminium. '
        + 'The processor keeps that extra worth.',
      level: 4,
    },
    {
      id: 'res-3',
      ask: 'Which resource does NOT renew?',
      kind: 'choice',
      options: ['Gold', 'Fish', 'Timber'],
      answer: 'Gold',
      teach: 'Fish and timber recover if they are used slowly enough. '
        + 'Gold and oil cannot be replaced at all.',
      level: 5,
    },
  ],
})

/* ── the family ──────────────────────────────────────────────────────────── */

teach({
  topicId: 'family-social',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A nuclear family is parents and their children. '
      + 'An extended family adds grandparents, aunts, uncles and cousins. '
      + 'Descent is how a family traces its line: '
      + 'through the mother in matrilineal groups such as the Akan, '
      + 'and through the father in patrilineal groups such as the Ewe, '
      + 'Ga and Dagomba.',
    method: [
      'Say who is in the family first.',
      'Then say which line the family traces, mother’s or father’s.',
      'Answer inheritance questions from the line, not from the household.',
    ],
  },

  idea:
    'A nuclear family is a father, a mother and their children. '
    + 'An extended family is that household together with grandparents, '
    + 'aunts, uncles, cousins and in laws, '
    + 'counted as one family even when they live apart. '
    + 'Descent means the line a family traces itself through. '
    + 'In a matrilineal system the line runs through the mother, '
    + 'as among the Akan. '
    + 'In a patrilineal system it runs through the father, '
    + 'as among the Ewe, the Ga, the Dagomba and most northern groups. '
    + 'The family feeds and houses its members, brings up children, '
    + 'teaches them how to behave, and supports those who cannot work.',

  mechanism:
    'Descent sounds like a label until you see what it decides, '
    + 'and what it decides is who inherits and who is responsible for whom. '
    + 'Take an Akan man. '
    + 'The line runs through his mother, '
    + 'so his nephew, his sister’s son, is in his family line, '
    + 'and his own son is in the line of his wife’s family. '
    + 'That is why in the older Akan practice a man’s property passed to '
    + 'his sister’s children rather than to his own, '
    + 'and why a maternal uncle carried real authority over a boy. '
    + 'In a patrilineal system the same reasoning gives the opposite '
    + 'answer: the son is in his father’s line, so he inherits from his '
    + 'father. '
    + 'Neither system is confused about family. '
    + 'They answer one question, which line counts, '
    + 'and then everything else follows from that one answer. '
    + 'Ghanaian law now allows a spouse and children to inherit in either '
    + 'system, '
    + 'so the systems describe how people reckon kinship, '
    + 'and no longer decide inheritance by themselves.',

  recap:
    'You know what a family is and who is in yours. '
    + 'What is added here is the difference between the nuclear and the '
    + 'extended family, and the two systems of descent.',

  method: [
    'State who is in a nuclear family.',
    'Add the relatives that make it extended.',
    'Name the two systems of descent and one group that follows each.',
    'For an inheritance question, follow the line, not the household.',
    'When asked for the functions of a family, give actions: '
      + 'feeding, housing, bringing up, teaching, supporting.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Who makes up a nuclear family?',
      steps: [
        'Count only the smallest unit.',
        'Parents and the children they have.',
      ],
      answer: 'A father, a mother and their children.',
    },
    {
      level: 4,
      ask: 'The Akan trace descent through the mother. '
        + 'Name two groups in Ghana that trace it through the father.',
      steps: [
        'Through the father is patrilineal.',
        'Recall the groups that follow it.',
      ],
      answer: 'The Ewe and the Ga. '
        + 'The Dagomba and most northern groups are also patrilineal.',
    },
    {
      level: 5,
      ask: 'In the older Akan practice, '
        + 'why did a man’s property pass to his sister’s son '
        + 'rather than to his own son?',
      steps: [
        'The Akan trace descent through the mother.',
        'A man and his sister share the same mother, so they share a line.',
        'Her children are therefore in his line.',
        'His own son belongs to the line of the boy’s mother.',
      ],
      answer: 'Because descent ran through the mother, '
        + 'so his sister’s children were in his own line, '
        + 'while his son belonged to his wife’s line.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking matrilineal means women rule the family.',
      why: 'It decides which line is traced, not who holds authority. '
        + 'Among the Akan much authority sat with the maternal uncle.',
    },
    {
      mistake: 'Thinking an extended family must live in one house.',
      why: 'Members may live in different towns '
        + 'and still be one family for naming, funerals and support.',
    },
    {
      mistake: 'Saying inheritance today still follows descent only.',
      why: 'Ghanaian law now provides for a spouse and children '
        + 'in both systems.',
    },
  ],

  extension:
    'The two systems meet in a single marriage often, '
    + 'and the children then stand in two lines at once. '
    + 'Families settle it by agreement, '
    + 'which is why custom changes faster than people expect.',

  questions: [
    {
      id: 'fam-1',
      ask: 'Which of these is part of an extended family but not a nuclear '
        + 'one?',
      kind: 'choice',
      options: ['An aunt', 'A son', 'A mother'],
      answer: 'An aunt',
      teach: 'A nuclear family is parents and their children only.',
      level: 3,
    },
    {
      id: 'fam-2',
      ask: 'A matrilineal system traces descent through:',
      kind: 'choice',
      options: ['the mother', 'the father', 'the eldest child'],
      answer: 'the mother',
      teach: 'The Akan are matrilineal. '
        + 'The Ewe, Ga and Dagomba are patrilineal.',
      level: 4,
    },
    {
      id: 'fam-3',
      ask: 'Why was a maternal uncle important in Akan families?',
      kind: 'choice',
      options: [
        'He was in the same line of descent as his sister’s children',
        'He was always the oldest man',
        'He paid for the schooling',
      ],
      answer: 'He was in the same line of descent as his sister’s children',
      teach: 'He and his sister shared a mother, '
        + 'so her children stood in his line.',
      level: 5,
    },
  ],
})

/* ── culture and socialisation ───────────────────────────────────────────── */

teach({
  topicId: 'culture-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Culture is the whole way of life of a people: '
      + 'what they make, what they believe, and how they behave. '
      + 'Socialisation is how it is passed on, '
      + 'through the family first, then school, friends, religion and the '
      + 'media.',
    method: [
      'Split culture into what can be touched and what cannot.',
      'For socialisation, name the agent and what it teaches.',
      'Explain change by asking which agent grew stronger.',
    ],
  },

  idea:
    'Culture is the way of life of a people. '
    + 'It has a material side, which you can touch: '
    + 'cloth, food, tools, drums, buildings. '
    + 'And it has a side you cannot touch: '
    + 'language, beliefs, values, greetings, and ideas about right and '
    + 'wrong. '
    + 'Nobody is born with it. '
    + 'It is learned, and the learning is called socialisation. '
    + 'The family teaches first, then the school, '
    + 'then friends of the same age, religious groups, and the media.',

  mechanism:
    'Culture is learned, and that one fact answers most questions about it. '
    + 'A baby taken at birth to another country grows up with that '
    + 'country’s language and manners, '
    + 'which shows that none of it is carried in the blood. '
    + 'It is taught, and it is taught by people. '
    + 'So when a culture changes, '
    + 'the useful question is not whether young people have lost respect. '
    + 'It is which teacher got stronger. '
    + 'A child who once learned proverbs from a grandmother in the evening '
    + 'may now spend that hour on a phone, '
    + 'so the media is doing teaching the family used to do. '
    + 'That also explains why culture never stops changing. '
    + 'Each generation learns from a slightly different set of teachers, '
    + 'so it keeps most of what it was given and passes on something a '
    + 'little different.',

  recap:
    'You have learned about festivals, food and dress in your area. '
    + 'This gathers all of that under one word, culture, '
    + 'and asks how it reaches each new child.',

  method: [
    'Define culture as a whole way of life.',
    'Split it: material, which can be touched, and non material.',
    'Give two examples of each.',
    'Name the agents of socialisation in order of a child’s life.',
    'For each agent, say what it teaches.',
    'For a question about change, name the agent that grew or weakened.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Sort these into material and non material culture: '
        + 'kente cloth, a greeting, a drum, a belief.',
      steps: [
        'Ask whether you can touch it.',
        'Cloth and drum can be touched.',
        'A greeting and a belief cannot.',
      ],
      answer: 'Material: kente cloth, a drum. '
        + 'Non material: a greeting, a belief.',
    },
    {
      level: 4,
      ask: 'Name three agents of socialisation and say what each teaches.',
      steps: [
        'Take them in the order a child meets them.',
        'Family, school, friends, religion, media.',
      ],
      answer: 'The family teaches language and manners. '
        + 'The school teaches knowledge and rules. '
        + 'Friends of the same age teach how to get on with others.',
    },
    {
      level: 5,
      ask: 'Older people often say young Ghanaians are losing their culture. '
        + 'Give a better explanation of what is happening.',
      steps: [
        'Culture is learned from agents, and the agents have changed.',
        'The family once had the child’s whole evening.',
        'Phones, television and friends now have much of that time.',
        'So different teaching is reaching the child, not no teaching.',
      ],
      answer: 'The culture is not lost, it is being taught by different '
        + 'agents. '
        + 'The media and the peer group now do some of the teaching the '
        + 'family used to do, so what is passed on changes.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking culture means only festivals and dancing.',
      why: 'Those are part of it. '
        + 'Language, greetings, food and ideas of right and wrong are '
        + 'culture too.',
    },
    {
      mistake: 'Saying culture is inherited from parents like height.',
      why: 'It is learned, not inherited. '
        + 'A child raised elsewhere grows up in that place’s culture.',
    },
    {
      mistake: 'Treating cultural change as decline.',
      why: 'Culture has always changed. '
        + 'Ask which agent of socialisation grew stronger instead.',
    },
  ],

  extension:
    'Two ideas follow from this. '
    + 'Cultural diversity means different peoples learned different ways of '
    + 'life, none of which is an error. '
    + 'Cultural borrowing means a people takes something from another and '
    + 'makes it its own, '
    + 'which is how cassava, football and the English language all became '
    + 'Ghanaian.',

  questions: [
    {
      id: 'cul-1',
      ask: 'Which of these is material culture?',
      kind: 'choice',
      options: ['A drum', 'A belief', 'A greeting'],
      answer: 'A drum',
      teach: 'Material culture is what can be touched. '
        + 'Beliefs and greetings cannot be.',
      level: 3,
    },
    {
      id: 'cul-2',
      ask: 'Which agent of socialisation teaches a child first?',
      kind: 'choice',
      options: ['The family', 'The school', 'The media'],
      answer: 'The family',
      teach: 'The family teaches language and manners '
        + 'before a child meets any other agent.',
      level: 4,
    },
    {
      id: 'cul-3',
      ask: 'Culture changes from one generation to the next because:',
      kind: 'choice',
      options: [
        'each generation learns from a different set of agents',
        'young people refuse to learn',
        'culture is inherited in the blood',
      ],
      answer: 'each generation learns from a different set of agents',
      teach: 'Culture is learned. '
        + 'When the teaching changes, what is passed on changes with it.',
      level: 5,
    },
  ],
})
