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

  why:
    'A lorry driver says Bolgatanga is a long way north of Accra. '
    + 'A fisherman says Axim is far to the west. '
    + 'Both are right, and neither is any use '
    + 'to somebody drawing a map. '
    + '"North of Accra" means something '
    + 'only to a person who knows where Accra is. '
    + 'A ship coming from Brazil has to be given a position '
    + 'that works for a captain who has never heard of Accra. '
    + 'How do you say where a place is, '
    + 'in a way that means the same thing to everybody in the world?',

  notation:
    'A position is given as two figures. '
    + 'Latitude comes first. '
    + 'It says how far north or south of the equator a place is, '
    + 'so 5 degrees north means five degrees up from the equator. '
    + 'Longitude comes second. '
    + 'It says how far east or west of the line through Greenwich, '
    + 'which is 0 degrees. '
    + 'Each figure carries a small raised circle for degrees '
    + 'and a letter for the direction, '
    + 'as in 5 degrees north, 0 degrees west. '
    + 'Putting longitude first, or leaving off the letter '
    + 'so nobody can tell north from south, '
    + 'is the commonest way to lose a mark.',

  idea:
    'Ghana sits in West Africa, on the coast of the Gulf of Guinea. '
    + 'Côte d’Ivoire is to the west, Burkina Faso to the north, '
    + 'Togo to the east, and the sea to the south. '
    + 'On the globe it lies between about 4 degrees and 11 degrees north, '
    + 'so it is wholly north of the equator and wholly in the tropics. '
    + 'The Greenwich meridian, which is 0 degrees longitude, '
    + 'passes through the country near Tema. '
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
    'Ghana is a country on the west coast of Africa. '
    + 'The sea lies along the whole of its southern edge, '
    + 'which is why Tema and Takoradi are ports. '
    + 'Three countries touch it on land: '
    + 'Côte d’Ivoire on the west, Burkina Faso on the north, '
    + 'and Togo on the east. '
    + 'Inside the country there are 16 regions, '
    + 'and the biggest river is the Volta, '
    + 'held back at Akosombo to make Lake Volta. '
    + 'This topic adds two things to that: '
    + 'a way of giving a position in figures, '
    + 'and the shape and height of the land, which is called relief.',

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

  figure: {
    alt: 'A simplified map of Ghana with Burkina Faso to the north, Côte '
      + 'd’Ivoire to the west, Togo to the east and the Gulf of Guinea to '
      + 'the south. Dashed lines mark 4 degrees north along the coast and '
      + '11 degrees north along the top, and a dashed vertical line marks '
      + '0 degrees longitude passing near Tema. A green band in the east '
      + 'marks the Akwapim Togo ranges, and an arrow inside the country '
      + 'points south to show the way the rivers run.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">wholly north of the equator, and mostly low</text>'
      + '<text x="330" y="70" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Burkina Faso</text>'
      + '<line x1="130" y1="92" x2="540" y2="92" stroke-dasharray="7 6"/>'
      + '<text x="124" y="88" font-size="14" text-anchor="end" fill="currentColor" stroke="none">11 degrees north</text>'
      + '<line x1="130" y1="306" x2="540" y2="306" stroke-dasharray="7 6"/>'
      + '<text x="124" y="302" font-size="14" text-anchor="end" fill="currentColor" stroke="none">4 degrees north</text>'
      + '<path d="M 215 92 H 445 L 428 200 L 420 306 L 240 310 L 224 200 Z"/>'
      + '<text x="172" y="196" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Côte</text>'
      + '<text x="172" y="214" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">d’Ivoire</text>'
      + '<text x="500" y="160" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Togo</text>'
      + '<line x1="370" y1="80" x2="370" y2="344" stroke-dasharray="4 7"/>'
      + '<text x="378" y="360" font-size="14" text-anchor="start" fill="currentColor" stroke="none">0 degrees longitude</text>'
      + '<circle cx="370" cy="307" r="6" fill="currentColor" stroke="none"/>'
      + '<text x="354" y="296" font-size="14" text-anchor="end" fill="currentColor" stroke="none">Tema</text>'
      + '<path d="M 400 130 L 412 208 L 404 284" stroke="#0f8a4d" stroke-width="7"/>'
      + '<line x1="411" y1="250" x2="452" y2="256" stroke="#0f8a4d"/>'
      + '<text x="456" y="252" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">Akwapim Togo</text>'
      + '<text x="456" y="270" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">ranges, the highest</text>'
      + '<text x="456" y="288" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">ground in Ghana</text>'
      + '<path d="M 288 120 L 296 190 L 288 250 L 298 288"/>'
      + '<path d="M 300 296 L 288 281 L 302 277 Z" fill="currentColor" stroke="none"/>'
      + '<text x="268" y="160" font-size="14" text-anchor="end" fill="currentColor" stroke="none">rivers</text>'
      + '<text x="268" y="178" font-size="14" text-anchor="end" fill="currentColor" stroke="none">run south</text>'
      + '<text x="276" y="334" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Gulf of Guinea</text>'
      + '<text x="320" y="388" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">the coast faces south, so the rain and the ports are there</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The shape of the land, and what each part of it decides',
      columns: ['Part of the country', 'Height', 'What that decides'],
      rows: [
        [
          'Most of the country',
          'Below 500 metres',
          'Low, so rivers reach the sea easily',
        ],
        [
          'Akwapim Togo ranges, in the east',
          'About 885 metres at Mount Afadja',
          'The highest ground in Ghana',
        ],
        [
          'Kwahu plateau, in the middle',
          'Raised above the land around it',
          'Divides rivers running to the Volta from those running to the coast',
        ],
        [
          'Coastal plains, in the south',
          'Near sea level',
          'Deep water at Tema and Takoradi, so ports',
        ],
      ],
      note: 'Relief is worth learning as causes rather than heights: it is '
        + 'why the rivers run the way they do, and why the ports are '
        + 'where they are.',
    },
  ],
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

  why:
    'A farmer in Wa plants once a year. '
    + 'A farmer in Enchi plants twice. '
    + 'They grow the same crop and neither of them chose this. '
    + 'Ask either man why '
    + 'and he will say that is how the rain comes here. '
    + 'But the rain is not made in Wa or in Enchi. '
    + 'One thing moving across the whole of West Africa '
    + 'gives one of them two rainy seasons and the other one. '
    + 'What is moving, '
    + 'and why does it reach one place twice and the other once?',

  notation:
    'Rainfall is measured in millimetres, written mm. '
    + 'It is the depth the rain would stand '
    + 'if none of it ran away or dried up, '
    + 'so 150 mm is said "a hundred and fifty millimetres". '
    + 'Temperature is written 28 degrees C '
    + 'and said "twenty-eight degrees Celsius". '
    + 'A climate graph shows both at once: '
    + 'bars for the rainfall, read against the left hand scale, '
    + 'and a line for the temperature, '
    + 'read against the right hand one. '
    + 'Reading the rainfall bars against the temperature scale '
    + 'is the commonest way to lose a mark.',

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
    + 'The vegetation follows the rain, and the crops follow the '
    + 'vegetation.',

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
    + 'More rain, for more of the year, keeps trees alive, '
    + 'and less rain suits grass with scattered trees, '
    + 'so each belt ends up growing the crops that can stand its own dry '
    + 'season. '
    + 'And a farmer in the north has one planting season instead of two, '
    + 'which is why irrigation and dams matter more there.',

  recap:
    'In Ghana the year is not split into hot and cold. '
    + 'It is split by rain. '
    + 'For some months rain comes almost every day '
    + 'and the ground stays wet, '
    + 'and that stretch is called the rainy season. '
    + 'For other months almost no rain falls, '
    + 'the grass goes brown and the dust rises, '
    + 'and that is the dry season. '
    + 'A farmer plants when the rains begin, '
    + 'because a seed needs water to start. '
    + 'This topic explains what makes the rain come and go, '
    + 'and why the pattern in the north '
    + 'is not the pattern in the south.',

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

  figure: {
    alt: 'Three drawings of Ghana side by side, each a tall rectangle with '
      + 'north at the top and south at the bottom. In March a green band '
      + 'of rain lies across the south, in August it has moved to the '
      + 'north, and in October it is back across the south, so the south '
      + 'is under it twice and the far north only once.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">one belt of rain, moving north and then back</text>'
      + '<path d="M 60 80 H 180 V 300 H 60 Z"/>'
      + '<text x="120" y="68" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">north</text>'
      + '<text x="120" y="320" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">south</text>'
      + '<path d="M 60 236 H 180 V 288 H 60 Z" stroke="#0f8a4d" stroke-width="6"/>'
      + '<text x="120" y="268" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">rain belt</text>'
      + '<text x="120" y="352" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">March</text>'
      + '<text x="120" y="374" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">over the south</text>'
      + '<path d="M 260 80 H 380 V 300 H 260 Z"/>'
      + '<text x="320" y="68" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">north</text>'
      + '<text x="320" y="320" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">south</text>'
      + '<path d="M 260 92 H 380 V 144 H 260 Z" stroke="#0f8a4d" stroke-width="6"/>'
      + '<text x="320" y="124" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">rain belt</text>'
      + '<text x="320" y="352" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">August</text>'
      + '<text x="320" y="374" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">over the north</text>'
      + '<path d="M 460 80 H 580 V 300 H 460 Z"/>'
      + '<text x="520" y="68" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">north</text>'
      + '<text x="520" y="320" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">south</text>'
      + '<path d="M 460 236 H 580 V 288 H 460 Z" stroke="#0f8a4d" stroke-width="6"/>'
      + '<text x="520" y="268" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">rain belt</text>'
      + '<text x="520" y="352" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">October</text>'
      + '<text x="520" y="374" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">over the south again</text>'
      + '<path d="M 196 200 H 240" stroke="#0f8a4d"/>'
      + '<path d="M 248 200 L 230 190 L 230 210 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="218" y="184" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">north</text>'
      + '<path d="M 396 200 H 440" stroke="#0f8a4d"/>'
      + '<path d="M 448 200 L 430 190 L 430 210 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="418" y="184" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">back</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What follows from how often the rain belt passes overhead',
      columns: ['What the rain decides', 'The south', 'The far north'],
      rows: [
        [
          'Times the rain belt passes',
          'Twice, going up and coming back',
          'Once, at the top of its journey',
        ],
        ['Rainy seasons', 'Two, a major and a minor', 'One'],
        ['Dry season', 'Short', 'Long, with the harmattan'],
        [
          'Vegetation',
          'Rainforest, then woodland',
          'Guinea savanna, then sudan savanna',
        ],
        [
          'Crops that suit it',
          'Cocoa, plantain, cocoyam',
          'Millet, sorghum, yam, shea',
        ],
        ['Planting seasons a year', 'Two', 'One, unless there is irrigation'],
      ],
      note: 'Every row under the first one is a consequence of the first '
        + 'one.',
    },
  ],
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

  why:
    'A cocoa farmer near Suhum sells his beans '
    + 'for a price fixed for the whole country. '
    + 'A bar of chocolate in a shop in Accra '
    + 'costs more for each kilogram than he was paid '
    + 'for the beans inside it, '
    + 'and that bar was made in Europe out of Ghanaian beans. '
    + 'The farmer did the growing, the drying and the carrying. '
    + 'Somebody else did the last step and kept most of the money. '
    + 'Which step is the one where the money is made, '
    + 'and what is stopping Ghana from doing it?',

  notation:
    'A weight of a traded good is given in tonnes, written t, '
    + 'and one tonne is 1000 kilograms. '
    + 'A money figure means nothing without its currency and its year, '
    + 'so "2 billion dollars in 2023" is an answer '
    + 'and "2 billion" is not. '
    + 'Raw means a resource sold as it came out of the ground '
    + 'or off the tree, '
    + 'and processed means work has been done on it, '
    + 'and those two words are the whole of this topic. '
    + 'Giving a figure without saying cedis or dollars '
    + 'is the commonest way to lose a mark.',

  idea:
    'A resource is anything from the land, the water or the people that '
    + 'can be used to meet a need. '
    + 'Gold, cocoa and crude oil earn most of Ghana’s foreign money. '
    + 'Manganese, diamonds, limestone and salt are mined as well, '
    + 'and the water of the Volta makes electricity at Akosombo. '
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
    'A resource is anything a country can use to meet a need. '
    + 'Some come out of the ground, '
    + 'like gold at Obuasi and oil from the sea off Takoradi. '
    + 'Some grow, like cocoa in the forest '
    + 'and the fish in Lake Volta. '
    + 'The people themselves are a resource too, '
    + 'because nothing is dug up or grown '
    + 'without somebody to do it. '
    + 'A resource on its own is worth little: '
    + 'gold in rock is worth nothing '
    + 'until it is dug, washed and melted. '
    + 'This topic asks how much of that work Ghana does '
    + 'on its own resources before they leave.',

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

  figure: {
    alt: 'The same cocoa beans following two paths. On the upper path, in '
      + 'red, the beans are shipped out raw and processed abroad, and '
      + 'Ghana is paid once, for a bean. On the lower path, in green, a '
      + 'factory in Ghana makes them into chocolate, and Ghana is paid for '
      + 'the bar and pays wages every month.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">the same beans, and where the money stops</text>'
      + '<path d="M 24 74 H 160 V 136 H 24 Z"/>'
      + '<text x="92" y="100" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">cocoa beans</text>'
      + '<text x="92" y="122" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">grown in Ghana</text>'
      + '<path d="M 170 105 H 214" stroke="#c8433a"/>'
      + '<path d="M 222 105 L 204 95 L 204 115 Z" fill="#c8433a" stroke="none"/>'
      + '<path d="M 232 74 H 400 V 136 H 232 Z" stroke="#c8433a"/>'
      + '<text x="316" y="100" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">shipped out raw,</text>'
      + '<text x="316" y="122" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">processed abroad</text>'
      + '<path d="M 410 105 H 454" stroke="#c8433a"/>'
      + '<path d="M 462 105 L 444 95 L 444 115 Z" fill="#c8433a" stroke="none"/>'
      + '<text x="548" y="96" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">Ghana is paid</text>'
      + '<text x="548" y="118" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">once, for a bean</text>'
      + '<path d="M 24 234 H 160 V 296 H 24 Z"/>'
      + '<text x="92" y="260" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">cocoa beans</text>'
      + '<text x="92" y="282" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">grown in Ghana</text>'
      + '<path d="M 170 265 H 214" stroke="#0f8a4d"/>'
      + '<path d="M 222 265 L 204 255 L 204 275 Z" fill="#0f8a4d" stroke="none"/>'
      + '<path d="M 232 234 H 400 V 296 H 232 Z" stroke="#0f8a4d"/>'
      + '<text x="316" y="260" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">a factory here makes</text>'
      + '<text x="316" y="282" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">it into chocolate</text>'
      + '<path d="M 410 265 H 454" stroke="#0f8a4d"/>'
      + '<path d="M 462 265 L 444 255 L 444 275 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="548" y="248" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">Ghana is paid for</text>'
      + '<text x="548" y="270" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the bar, and wages</text>'
      + '<text x="548" y="292" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">are paid every month</text>'
      + '<line x1="24" y1="176" x2="616" y2="176" stroke-dasharray="6 6"/>'
      + '<text x="320" y="352" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">the gap between the bean and the bar is the added value,</text>'
      + '<text x="320" y="378" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">and it is kept by whoever does the processing</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Where each resource comes from, how it earns now, and what '
        + 'it could become',
      columns: [
        'Resource',
        'Where it is found',
        'How it earns now',
        'If processed here',
      ],
      rows: [
        [
          'Gold',
          'Obuasi and Tarkwa',
          'Exported, mostly unrefined',
          'Refined gold and jewellery',
        ],
        [
          'Cocoa',
          'The forest belt in the south',
          'Exported as raw beans',
          'Chocolate and cocoa butter',
        ],
        [
          'Crude oil',
          'Offshore, west of Takoradi',
          'Exported crude',
          'Fuel, cooking gas, plastic',
        ],
        ['Bauxite', 'Awaso', 'Exported as ore', 'Aluminium'],
        [
          'Timber',
          'The forest belt',
          'Exported as logs and sawn wood',
          'Furniture and doors',
        ],
        [
          'Fish',
          'The sea and Lake Volta',
          'Eaten at home, and it employs many',
          'Smoked and tinned fish',
        ],
      ],
      note: 'The last column is the value Ghana does not yet keep, because '
        + 'it is earned by whoever does the processing.',
    },
  ],
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

  why:
    'A man in Takoradi dies suddenly, '
    + 'leaving a wife, two children, '
    + 'and a brother in Tarkwa. '
    + 'His wife expects the house to pass to her children. '
    + 'His mother’s family expects it to pass to his sister’s son. '
    + 'Both sides are following what they were taught is right, '
    + 'and both are certain. '
    + 'Nobody is being wicked. '
    + 'Two different ways of counting who belongs to a family '
    + 'have met in one house. '
    + 'What are those two ways, '
    + 'and what does each one say about who inherits?',

  notation:
    'A family is drawn as a family tree, '
    + 'and the drawing has rules. '
    + 'A man is a square and a woman is a circle. '
    + 'A marriage is a short line joining the two of them. '
    + 'Children hang on a line dropped below that join, '
    + 'with the oldest on the left. '
    + 'The person the tree is drawn about is marked with an arrow. '
    + 'Drawing a child on the same level as its parents, '
    + 'or joining two brothers with a marriage line, '
    + 'is the commonest mistake.',

  idea:
    'A nuclear family is a father, a mother and their children. '
    + 'An extended family is that household together with grandparents, '
    + 'aunts, uncles, cousins and in laws, '
    + 'counted as one family even when they live apart. '
    + 'Descent means the line a family traces itself through, '
    + 'and Ghana has both of the two systems. '
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
    + 'Neither system is confused about family. '
    + 'They answer one question, which line counts, '
    + 'and then everything else follows from that one answer. '
    + 'Ghanaian law now allows a spouse and children to inherit in either '
    + 'system, '
    + 'so the systems describe how people reckon kinship, '
    + 'and no longer decide inheritance by themselves.',

  recap:
    'A family is a group of people tied together by birth, '
    + 'by marriage, or by being taken in. '
    + 'The smallest one is a man, a woman '
    + 'and their children living together, '
    + 'and that is what most people picture '
    + 'when the word is used. '
    + 'But a Ghanaian asked to name his family '
    + 'will usually name far more people than that: '
    + 'his father’s brothers, his mother’s sisters, his cousins, '
    + 'his grandparents, people in another town '
    + 'he sees once a year. '
    + 'Those people count as family '
    + 'and are called on in trouble. '
    + 'This topic names those two different sizes of family, '
    + 'and sets out the two ways Ghanaians count '
    + 'which family a child belongs to.',

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

  figure: {
    alt: 'Two family trees of the same man side by side. On the left, '
      + 'descent traced through the mother as among the Akan, the green '
      + 'line holds the mother, the man, his sister and his sister’s son, '
      + 'while his own son is in red, outside it, in his wife’s line. On '
      + 'the right, descent traced through the father as among the Ewe, Ga '
      + 'and Dagomba, the green line holds the father, the man and the '
      + 'man’s own son, while his sister’s son is in red, outside it.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">which line a man’s own son stands in</text>'
      + '<text x="158" y="60" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">traced through the mother</text>'
      + '<text x="158" y="80" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">as among the Akan</text>'
      + '<circle cx="158" cy="126" r="26" stroke="#0f8a4d"/>'
      + '<text x="158" y="131" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">mother</text>'
      + '<path d="M 140 146 L 104 184" stroke="#0f8a4d"/>'
      + '<path d="M 176 146 L 212 184" stroke="#0f8a4d"/>'
      + '<circle cx="98" cy="208" r="26" stroke="#0f8a4d"/>'
      + '<text x="98" y="206" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">the</text>'
      + '<text x="98" y="222" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">man</text>'
      + '<circle cx="218" cy="208" r="26" stroke="#0f8a4d"/>'
      + '<text x="218" y="206" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">his</text>'
      + '<text x="218" y="222" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">sister</text>'
      + '<path d="M 98 234 V 270" stroke="#c8433a"/>'
      + '<circle cx="98" cy="296" r="26" stroke="#c8433a"/>'
      + '<text x="98" y="294" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">his</text>'
      + '<text x="98" y="310" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">son</text>'
      + '<text x="98" y="346" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">in his wife’s line</text>'
      + '<path d="M 218 234 V 270" stroke="#0f8a4d"/>'
      + '<circle cx="218" cy="296" r="26" stroke="#0f8a4d"/>'
      + '<text x="218" y="294" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">her</text>'
      + '<text x="218" y="310" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">son</text>'
      + '<text x="218" y="346" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">in the man’s line</text>'
      + '<line x1="320" y1="50" x2="320" y2="360" stroke-dasharray="6 7"/>'
      + '<text x="482" y="60" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">traced through the father</text>'
      + '<text x="482" y="80" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">as among the Ewe, Ga and Dagomba</text>'
      + '<circle cx="482" cy="126" r="26" stroke="#0f8a4d"/>'
      + '<text x="482" y="131" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">father</text>'
      + '<path d="M 464 146 L 428 184" stroke="#0f8a4d"/>'
      + '<path d="M 500 146 L 536 184" stroke="#0f8a4d"/>'
      + '<circle cx="422" cy="208" r="26" stroke="#0f8a4d"/>'
      + '<text x="422" y="206" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">the</text>'
      + '<text x="422" y="222" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">man</text>'
      + '<circle cx="542" cy="208" r="26" stroke="#0f8a4d"/>'
      + '<text x="542" y="206" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">his</text>'
      + '<text x="542" y="222" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">sister</text>'
      + '<path d="M 422 234 V 270" stroke="#0f8a4d"/>'
      + '<circle cx="422" cy="296" r="26" stroke="#0f8a4d"/>'
      + '<text x="422" y="294" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">his</text>'
      + '<text x="422" y="310" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">son</text>'
      + '<text x="422" y="346" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">in the man’s line</text>'
      + '<path d="M 542 234 V 270" stroke="#c8433a"/>'
      + '<circle cx="542" cy="296" r="26" stroke="#c8433a"/>'
      + '<text x="542" y="294" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">her</text>'
      + '<text x="542" y="310" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">son</text>'
      + '<text x="542" y="346" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">in her husband’s line</text>'
      + '<text x="320" y="386" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">the green circles are one line, and in the old custom they inherited</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The same man’s relatives, counted in each of the two '
        + 'systems',
      columns: ['Question about him', 'Matrilineal', 'Patrilineal'],
      rows: [
        ['The line runs through', 'His mother', 'His father'],
        [
          'Groups in Ghana',
          'The Akan',
          'Ewe, Ga, Dagomba and most northern groups',
        ],
        ['His own son is in', 'His wife’s line', 'His own line'],
        [
          'His sister’s son is in',
          'His own line',
          'His sister’s husband’s line',
        ],
        [
          'In the old custom, who inherited from him',
          'His sister’s children',
          'His own children',
        ],
        [
          'Who held authority over a boy',
          'His mother’s brother',
          'His father',
        ],
      ],
      note: 'Ghanaian law now provides for a spouse and children in both '
        + 'systems, so the last two rows describe custom rather than the '
        + 'law today.',
    },
  ],
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

  why:
    'A child of five in Ho already knows '
    + 'to take a gift with the right hand, '
    + 'to answer an elder with both feet still, '
    + 'and which day the drums are not beaten. '
    + 'Nobody sat that child down '
    + 'and taught any of it as a lesson. '
    + 'Another child of five in another country '
    + 'does none of those things, '
    + 'and would not know she had done anything wrong. '
    + 'Neither child chose, '
    + 'and neither was taught on purpose. '
    + 'How does all of that get into a child, '
    + 'and who put it there?',

  idea:
    'Culture is the way of life of a people. '
    + 'It has a material side, which you can touch: '
    + 'cloth, food, tools, drums, buildings. '
    + 'And it has a side you cannot touch: '
    + 'language, beliefs, values, greetings, and ideas about right and '
    + 'wrong. '
    + 'Nobody is born with it. '
    + 'It is learned, and the learning is called socialisation, '
    + 'and several different teachers take a hand in it.',

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
    'Go to a funeral in Kumasi and the cloth is red and black. '
    + 'Go to one among the Ga in Accra '
    + 'and the custom is not the same. '
    + 'The food changes from fufu to banku to tuo zaafi '
    + 'as you travel, '
    + 'and the greeting changes with it. '
    + 'None of those differences is an accident, '
    + 'and none of them is in anybody’s body. '
    + 'Each one is something a group of people does, '
    + 'has done for a long time, '
    + 'and passes on to its children. '
    + 'This topic gathers all of it under one word, culture, '
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

  figure: {
    alt: 'A child drawn in the middle of a circle, with five arrows '
      + 'pointing in at it, numbered in the order the child meets them: '
      + 'the family first, then the school, then friends of the same age, '
      + 'then the religious group, and last the media, whose arrow is '
      + 'drawn thicker and in green because its share is growing.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">nobody is born with culture, so somebody teaches it</text>'
      + '<circle cx="320" cy="212" r="48"/>'
      + '<text x="320" y="208" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the</text>'
      + '<text x="320" y="228" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">child</text>'
      + '<text x="320" y="70" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">1 the family, first of all</text>'
      + '<path d="M 320 82 V 156"/>'
      + '<path d="M 320 164 L 310 146 L 330 146 Z" fill="currentColor" stroke="none"/>'
      + '<text x="596" y="138" font-size="16" text-anchor="end" fill="currentColor" stroke="none">2 the school</text>'
      + '<path d="M 520 150 L 374 194"/>'
      + '<path d="M 374 194 L 393 196 L 389 182 Z" fill="currentColor" stroke="none"/>'
      + '<text x="596" y="318" font-size="16" text-anchor="end" fill="currentColor" stroke="none">3 friends of the same age</text>'
      + '<path d="M 500 300 L 372 238"/>'
      + '<path d="M 372 238 L 391 240 L 385 252 Z" fill="currentColor" stroke="none"/>'
      + '<text x="44" y="318" font-size="16" text-anchor="start" fill="currentColor" stroke="none">4 the religious group</text>'
      + '<path d="M 148 300 L 270 238"/>'
      + '<path d="M 270 238 L 257 252 L 251 240 Z" fill="currentColor" stroke="none"/>'
      + '<text x="44" y="132" font-size="16" text-anchor="start" fill="#0f8a4d" stroke="none">5 the media</text>'
      + '<text x="44" y="152" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">and its share is growing</text>'
      + '<path d="M 160 172 L 264 196" stroke="#0f8a4d" stroke-width="6"/>'
      + '<path d="M 264 196 L 244 199 L 248 185 Z" fill="#0f8a4d" stroke="none"/>'
      + '<text x="320" y="366" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">when one teacher takes more of the child’s day,</text>'
      + '<text x="320" y="390" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">what is passed on changes</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Who teaches the child, in the order the child meets them',
      columns: [
        'Agent',
        'When it reaches the child',
        'What it mainly teaches',
      ],
      rows: [
        ['The family', 'From birth', 'Language, manners, right and wrong'],
        [
          'The school',
          'From the day school starts',
          'Knowledge, rules, working with others',
        ],
        [
          'Friends of the same age',
          'Once the child has friends',
          'How to get on with people outside the family',
        ],
        ['The religious group', 'Through childhood', 'Beliefs and values'],
        [
          'The media',
          'Early now, and for more hours than before',
          'Dress, music, speech and ideas from everywhere',
        ],
      ],
      note: 'The last row is the one that has changed most, which is the '
        + 'better answer to why culture is changing.',
    },
  ],
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
