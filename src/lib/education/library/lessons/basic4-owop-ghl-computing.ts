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

  why:
    'Your baby brother cries and somebody has to feed him. '
    + 'You can get your own food from the pot. '
    + 'Your grandfather can get his own food too, '
    + 'and somebody carries the heavy bucket for him. '
    + 'All three of you live in the same house '
    + 'and all three are treated differently. '
    + 'Nobody decided that this morning. '
    + 'What is it that changes, and what changes with it?',

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
    'In a house, the work is split up. '
    + 'Somebody cooks, somebody sweeps, '
    + 'somebody fetches water, somebody goes to the market. '
    + 'If one person did all of it, '
    + 'nothing would ever get finished. '
    + 'So each person has jobs, '
    + 'and the jobs are not the same for everybody. '
    + 'A small child is not sent to the market with money, '
    + 'and an old man is not sent to carry a full bucket. '
    + 'This lesson is about the biggest reason '
    + 'the jobs are different, which is age.',

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
      why: 'Look at what a child actually does in a day. '
        + 'The household depends on it.',
    },
    {
      mistake: 'Thinking elders only receive.',
      why: 'The work changes rather than stops, '
        + 'and what replaces it is harder to see.',
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

  figure: {
    alt: 'Two lines drawn across the five stages of a life, baby, child, '
      + 'young person, adult and elder. The line for care you receive '
      + 'starts high at baby, falls to its lowest at adult, and rises '
      + 'again at elder. The line for care you give starts at the bottom '
      + 'at baby, rises to its highest at adult, and comes part of the way '
      + 'down at elder. The two lines cross, and a note says that looking '
      + 'after an elder is the same care arriving back round.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Care received and care given, across one life</text>'
      + '<line x1="50" y1="76" x2="50" y2="310"/>'
      + '<line x1="50" y1="310" x2="600" y2="310"/>'
      + '<text x="42" y="86" font-size="13" text-anchor="end" fill="currentColor" stroke="none">more</text>'
      + '<text x="42" y="304" font-size="13" text-anchor="end" fill="currentColor" stroke="none">less</text>'
      + '<polyline points="90,90 205,170 320,230 435,280 550,130" stroke="#0f8a4d"/>'
      + '<polyline points="90,300 205,250 320,170 435,90 550,200"/>'
      + '<text x="76" y="68" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">care you receive</text>'
      + '<text x="380" y="68" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">care you give</text>'
      + '<text x="90" y="336" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">baby</text>'
      + '<text x="205" y="336" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">child</text>'
      + '<text x="320" y="336" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">young person</text>'
      + '<text x="435" y="336" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">adult</text>'
      + '<text x="550" y="336" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">elder</text>'
      + '<text x="320" y="376" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">Looking after an elder is the same care, arriving back round.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'The five stages, and what each one can do, needs and gives',
    columns: [
      'Stage',
      'Can do for itself',
      'Needs from others',
      'Gives to others',
    ],
    rows: [
      [
        'Baby',
        'Almost nothing',
        'Feeding, washing, carrying',
        'Nothing yet',
      ],
      [
        'Child',
        'Eats, washes, walks',
        'Teaching and guidance',
        'Water, sweeping, minding a baby',
      ],
      [
        'Young person',
        'Most things',
        'Training and a first chance',
        'Heavy work and errands',
      ],
      [
        'Adult',
        'Everything',
        'Little',
        'Earning, and care at both ends',
      ],
      [
        'Elder',
        'Most things, more slowly',
        'Help with the heavy parts',
        'Knowledge, and settling disputes',
      ],
    ],
    note: 'Read the last two columns down. They swap places, which is why '
      + 'care goes round rather than one way.',
  }],

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

  why:
    'A cousin from Tamale comes to stay in Takoradi '
    + 'for the first time. '
    + 'She says it rains too much '
    + 'and the trees never stop. '
    + 'You go to Tamale '
    + 'and you cannot believe how far you can see. '
    + 'Neither of you went to another country. '
    + 'Both of you are in Ghana. '
    + 'Why is one end of the same country wet and green '
    + 'and the other end dry and open?',

  notation:
    'A map has a small arrow with an N at the top, '
    + 'pointing north, '
    + 'so that a reader knows which way round it goes. '
    + 'It has a key, which is a small box '
    + 'showing what each sign on the map means: '
    + 'a blue line for a river, a green patch for forest. '
    + 'And it has a scale, '
    + 'saying how far one centimetre on the paper '
    + 'stands for on the ground. '
    + 'A map with no key cannot be read, '
    + 'and the key is the commonest thing left off.',

  idea:
    'Ghana has the sea along its southern edge. '
    + 'Its biggest river is the Volta, '
    + 'and the Akosombo dam across it made Lake Volta, '
    + 'one of the largest lakes made by people anywhere in the world. '
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
    'A map is a drawing of a place '
    + 'as if you were looking down on it from above. '
    + 'Draw your own community. '
    + 'Put the road in as a line, '
    + 'the school as a square beside it, '
    + 'the market as another square, '
    + 'and the stream as a wavy line. '
    + 'Anybody from your town '
    + 'can then point at their own house on your drawing. '
    + 'A map is small and the real place is large, '
    + 'so everything on it has to be in the right position '
    + 'compared with everything else. '
    + 'This lesson is that same drawing '
    + 'at the size of a whole country.',

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

  figure: {
    alt: 'A simple box standing for Ghana, divided across the middle. The '
      + 'top half is marked north, drier and more open, and lists shea, '
      + 'millet, sorghum and cattle. The bottom half is marked south, '
      + 'wetter and forested, and lists cocoa and timber. An arrow down '
      + 'the left side runs from less rain at the top to more rain at the '
      + 'bottom. A wavy line under the box is labelled the sea, along the '
      + 'south.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Rain, and what grows where</text>'
      + '<rect x="60" y="48" width="520" height="268"/>'
      + '<line x1="60" y1="182" x2="580" y2="182"/>'
      + '<text x="340" y="86" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">north</text>'
      + '<text x="340" y="116" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">drier and more open</text>'
      + '<text x="340" y="152" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">shea, millet, sorghum, cattle</text>'
      + '<text x="340" y="220" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">south</text>'
      + '<text x="340" y="250" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">wetter and forested</text>'
      + '<text x="340" y="286" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">cocoa and timber</text>'
      + '<line x1="94" y1="96" x2="94" y2="258" stroke="#0f8a4d"/>'
      + '<polygon points="94,272 86,254 102,254" fill="#0f8a4d" stroke="none"/>'
      + '<text x="110" y="104" font-size="14" text-anchor="start" fill="currentColor" stroke="none">less rain</text>'
      + '<text x="110" y="254" font-size="14" text-anchor="start" fill="#0f8a4d" stroke="none">more rain</text>'
      + '<path d="M 60 338 Q 125 352 190 338 Q 255 324 320 338 Q 385 352 450 338 Q 515 324 580 338"/>'
      + '<text x="320" y="378" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the sea, along the south</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Ghana’s main rivers and its lake, and what is worth '
      + 'knowing about each',
    columns: ['Water', 'Where in Ghana', 'Worth knowing'],
    rows: [
      [
        'The Volta',
        'Down the middle and the east',
        'The largest river in the country',
      ],
      [
        'Lake Volta',
        'Behind the Akosombo dam',
        'People made it. It is not natural',
      ],
      ['The Pra', 'The south', 'Runs through the forest to the sea'],
      ['The Ankobra', 'The south west', 'Reaches the sea near Axim'],
      ['The Tano', 'The west', 'Runs along part of the western border'],
    ],
    note: 'Every one of them ends in the sea in the south. That is the way '
      + 'water runs in Ghana.',
  }],

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

  why:
    'A big tree falls across the path to your farm. '
    + 'Your father says it is not for the head teacher to move. '
    + 'It is not for the pastor either. '
    + 'He says to go and see the assembly member. '
    + 'How did he know which one to go to?',

  idea:
    'A community has more than one leader, and they do different things. '
    + 'Each one is answerable for a different part of community life, '
    + 'and each one answers to a different set of people.',

  mechanism:
    'There is more than one leader for a reason. '
    + 'No single person should hold every kind of power. '
    + 'Each leader answers to a different set of people. '
    + 'Because of that, each one can be questioned. '
    + 'In a town where one person decided everything, '
    + 'there would be nobody left to appeal to.',

  recap:
    'A rule is an answer to a problem. '
    + 'Nobody may fetch water before six, '
    + 'because the pump used to be crowded at five. '
    + 'Somebody has to make a rule like that. '
    + 'Somebody else has to see that it is kept. '
    + 'In a town those two jobs belong to named people. '
    + 'This lesson is about who those people are, '
    + 'and what each one answers for.',

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

  figure: {
    alt: 'Two panels. In the first, one leader holds everything, with an '
      + 'arrow running down from them to the words answers to nobody, so '
      + 'there is nowhere to appeal. In the second, four leaders are shown '
      + 'in a grid, a chief, an assembly member, a head teacher and a '
      + 'faith leader, with a note that each answers to different people, '
      + 'so there is always somebody to ask. Underneath, a note to work '
      + 'out whose area a problem is in, because the right person can act '
      + 'and the wrong one cannot.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Somebody to appeal to</text>'
      + '<rect x="20" y="46" width="290" height="250" stroke="#c8433a"/>'
      + '<text x="165" y="76" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">one leader for everything</text>'
      + '<rect x="85" y="100" width="160" height="60"/>'
      + '<text x="165" y="138" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">the leader</text>'
      + '<line x1="165" y1="172" x2="165" y2="206"/>'
      + '<polygon points="165,218 157,200 173,200" fill="currentColor" stroke="none"/>'
      + '<text x="165" y="248" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">answers to nobody</text>'
      + '<text x="165" y="278" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">so nowhere to appeal</text>'
      + '<rect x="330" y="46" width="290" height="250" stroke="#0f8a4d"/>'
      + '<text x="475" y="76" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">four leaders</text>'
      + '<rect x="350" y="96" width="118" height="46"/>'
      + '<text x="409" y="125" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">chief</text>'
      + '<rect x="482" y="96" width="118" height="46"/>'
      + '<text x="541" y="125" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">assembly</text>'
      + '<rect x="350" y="152" width="118" height="46"/>'
      + '<text x="409" y="181" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">head teacher</text>'
      + '<rect x="482" y="152" width="118" height="46"/>'
      + '<text x="541" y="181" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">faith leader</text>'
      + '<text x="475" y="230" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">each answers to</text>'
      + '<text x="475" y="254" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">different people</text>'
      + '<text x="475" y="282" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">so there is always somebody to ask</text>'
      + '<text x="320" y="342" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Ask whose area the problem is in.</text>'
      + '<text x="320" y="374" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">The right person can act. The wrong one cannot.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'The leaders in a community, and what each one is answerable '
      + 'for',
    columns: ['Leader', 'Responsible for', 'Chosen by', 'Answers to'],
    rows: [
      [
        'A chief',
        'Custom, land and disputes',
        'Custom, through the royal family',
        'The elders and the people',
      ],
      [
        'An assembly member',
        'Roads, clinics, local money',
        'The people, by election',
        'The people who elected them',
      ],
      [
        'A head teacher',
        'The school',
        'The education service',
        'That service, and the parents',
      ],
      [
        'A religious leader',
        'The people of their faith',
        'Their own faith',
        'Their faith and its members',
      ],
    ],
    note: 'Read the last column down. No two of them answer to the same '
      + 'people, which is exactly why each one can be questioned.',
  }],

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

  why:
    'A boy joins your class. '
    + 'He is from Ho and he speaks Ewe at home. '
    + 'He says his family travels every year '
    + 'for a festival you have never heard of. '
    + 'You both live in Ghana '
    + 'and you both speak English at school. '
    + 'So why is his year marked out differently from yours?',

  idea:
    'Ghana is made up of many peoples. '
    + 'Each has its own language, its own festivals and its own customs. '
    + 'All of them are Ghanaian.',

  mechanism:
    'It is worth seeing what the festivals share. '
    + 'The stories are all different. '
    + 'But the same three things sit under all of them. '
    + 'They remember where the people came from. '
    + 'They give thanks. '
    + 'They gather everybody. '
    + 'That makes a festival you have never attended easier to follow.',

  recap:
    'A festival is a day or a week when a whole people stop work '
    + 'and mark something together. '
    + 'There is drumming. '
    + 'There is food. '
    + 'People come home from far away for it. '
    + 'Homowo is one. The Ga keep it. '
    + 'Aboakyir is another, kept at Winneba. '
    + 'Each festival belongs to a particular people. '
    + 'This lesson is about whose each one is.',

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

  figure: {
    alt: 'Four festivals in a row across the top, Homowo of the Ga, Odwira '
      + 'of some Akan states, Hogbetsotso of the Anlo Ewe and Damba of '
      + 'peoples of the north. Arrows run from all four into one band '
      + 'saying every one of them does three things, and from that band '
      + 'into three boxes: remember where we came from, give thanks for '
      + 'what we have, and gather everybody in one place. Underneath, a '
      + 'note that the stories are different and what is underneath them '
      + 'is not.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="24" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Different stories, three things underneath</text>'
      + '<rect x="16" y="40" width="140" height="64"/>'
      + '<text x="86" y="68" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Homowo</text>'
      + '<text x="86" y="92" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">the Ga</text>'
      + '<rect x="172" y="40" width="140" height="64"/>'
      + '<text x="242" y="68" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Odwira</text>'
      + '<text x="242" y="92" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">some Akan states</text>'
      + '<rect x="328" y="40" width="140" height="64"/>'
      + '<text x="398" y="68" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Hogbetsotso</text>'
      + '<text x="398" y="92" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">the Anlo Ewe</text>'
      + '<rect x="484" y="40" width="140" height="64"/>'
      + '<text x="554" y="68" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Damba</text>'
      + '<text x="554" y="92" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">peoples of the north</text>'
      + '<line x1="86" y1="106" x2="196" y2="158"/>'
      + '<line x1="242" y1="106" x2="268" y2="158"/>'
      + '<line x1="398" y1="106" x2="372" y2="158"/>'
      + '<line x1="554" y1="106" x2="444" y2="158"/>'
      + '<rect x="120" y="166" width="400" height="44" stroke="#0f8a4d"/>'
      + '<text x="320" y="194" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">every one of them does three things</text>'
      + '<line x1="200" y1="212" x2="124" y2="236"/>'
      + '<line x1="320" y1="212" x2="320" y2="236"/>'
      + '<line x1="440" y1="212" x2="516" y2="236"/>'
      + '<rect x="28" y="242" width="180" height="66"/>'
      + '<text x="118" y="272" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">remember</text>'
      + '<text x="118" y="296" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">where we came from</text>'
      + '<rect x="230" y="242" width="180" height="66"/>'
      + '<text x="320" y="272" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">give thanks</text>'
      + '<text x="320" y="296" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">for what we have</text>'
      + '<rect x="432" y="242" width="180" height="66"/>'
      + '<text x="522" y="272" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">gather everybody</text>'
      + '<text x="522" y="296" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">in one place</text>'
      + '<text x="320" y="348" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">The stories are different.</text>'
      + '<text x="320" y="378" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">What is underneath them is not.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Some of the peoples of Ghana, where they mostly live and a '
      + 'festival of each',
    columns: ['People', 'Mostly live', 'Language', 'A festival'],
    rows: [
      [
        'Akan',
        'The south and the middle',
        'Twi and Fante among others',
        'Odwira',
      ],
      ['Ewe', 'The south east', 'Ewe', 'Hogbetsotso'],
      ['Ga-Dangme', 'Around Accra', 'Ga and Dangme', 'Homowo'],
      ['Mole-Dagbani', 'The north', 'Dagbani among others', 'Damba'],
      [
        'Guan',
        'The middle, and parts of the south',
        'Gonja, Nkonya and others',
        'Several, by place',
      ],
      [
        'Gurma',
        'The north east',
        'Konkomba and others',
        'Several, by place',
      ],
    ],
  }],

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

  why:
    'Your grandmother tells the Ananse story '
    + 'about the pot of wisdom, '
    + 'and the whole room laughs in the same two places. '
    + 'You tell the same story to your class '
    + 'and nobody laughs anywhere. '
    + 'You left nothing out, '
    + 'and you said it in the same language. '
    + 'Something she does and you do not '
    + 'is what makes the room laugh. '
    + 'What is a story teller doing, besides saying the words?',

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
    'Two things come before a story can be told. '
    + 'The first is talking with somebody: '
    + 'you say something, they answer, '
    + 'and each of you waits for a turn. '
    + 'The second is saying written words out loud '
    + 'so that a person at the back of the room '
    + 'can hear each one, '
    + 'which means saying them slowly '
    + 'and opening your mouth. '
    + 'Try one sentence both ways: '
    + 'say it to yourself, then say it to the back wall, '
    + 'and the second one is a different thing. '
    + 'Telling a story needs both of those, and one more: '
    + 'holding the order of the events in your head '
    + 'while you are speaking.',

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
      why: 'Remember the events, and tell them in your own way.',
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

  figure: {
    alt: 'Three boxes in a row: Ananse is clever and greedy, his '
      + 'cleverness wins him something, and then it costs him more. An '
      + 'arrow runs down from them into a box that reads you work out the '
      + 'lesson, greed does not pay. Underneath, a note that the story '
      + 'never writes that line down, and that this is why you remember '
      + 'it.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">The story shows it. It never says it.</text>'
      + '<rect x="22" y="52" width="190" height="80"/>'
      + '<text x="117" y="84" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">Ananse is clever</text>'
      + '<text x="117" y="108" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">and greedy</text>'
      + '<line x1="216" y1="92" x2="217" y2="92"/>'
      + '<polygon points="224,92 210,85 210,99" fill="currentColor" stroke="none"/>'
      + '<rect x="225" y="52" width="190" height="80"/>'
      + '<text x="320" y="84" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">his cleverness wins</text>'
      + '<text x="320" y="108" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">him something</text>'
      + '<line x1="419" y1="92" x2="420" y2="92"/>'
      + '<polygon points="427,92 413,85 413,99" fill="currentColor" stroke="none"/>'
      + '<rect x="428" y="52" width="190" height="80"/>'
      + '<text x="523" y="84" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">and then it costs</text>'
      + '<text x="523" y="108" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">him more</text>'
      + '<line x1="320" y1="134" x2="320" y2="178"/>'
      + '<polygon points="320,190 312,172 328,172" fill="currentColor" stroke="none"/>'
      + '<rect x="120" y="198" width="400" height="76" stroke="#0f8a4d"/>'
      + '<text x="320" y="228" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">you work out the lesson:</text>'
      + '<text x="320" y="258" font-size="19" text-anchor="middle" fill="currentColor" stroke="none">greed does not pay</text>'
      + '<text x="320" y="320" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">The story never writes that line down.</text>'
      + '<text x="320" y="356" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">That is why you remember it.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Retelling a folktale: what has to stay the same and what is '
      + 'yours to choose',
    columns: ['Part of the story', 'Must it stay the same?', 'Why'],
    rows: [
      [
        'The order of events',
        'Yes',
        'The lesson lands because of the order',
      ],
      ['What the lesson is', 'Yes', 'It is what the story is for'],
      ['The exact words', 'No', 'Folktales were never fixed in words'],
      [
        'Your voice for each character',
        'No',
        'Every teller does that their own way',
      ],
      ['How long you take', 'No', 'A teller reads the room'],
    ],
    note: 'Keep the first two and the story still works. Change them and '
      + 'it has become a different story.',
  }],

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

  why:
    'Your teacher writes a short story in your own language on the board. '
    + 'She asks you to read it aloud and you do, '
    + 'word by word, without a mistake. '
    + 'Then she asks what the boy in the story carried to the farm. '
    + 'You cannot say. '
    + 'You were busy getting the words right '
    + 'and never took in what they meant. '
    + 'How do you read a passage so that you can answer about it too?',

  notation:
    'Ghanaian languages are written with the same letters as English, '
    + 'and a few more. '
    + 'Twi adds ɛ, said like the e in "bed", '
    + 'and ɔ, said like the o in "hot". '
    + 'Ewe adds ɖ and ƒ. '
    + 'Each extra letter stands for one sound, like all the others, '
    + 'so you read it in the same way. '
    + 'The commonest mistake is writing e where ɛ belongs, '
    + 'because that makes a different word.',

  idea:
    'Reading a passage in your own language has two parts. '
    + 'First you read it aloud so a listener can follow. '
    + 'Then you answer questions about it, '
    + 'and the answers come from the passage, '
    + 'not from what is already in your head.',

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
    'A passage is a few sentences written one after another '
    + 'about one thing. '
    + 'Here is one in Twi: "Kofi kɔɔ afuom. Ɔde akutu baa fie." '
    + 'That is two sentences. '
    + 'Kofi went to the farm, and he brought oranges home. '
    + 'Reading it means saying each word in order. '
    + 'Answering about it means finding the line the answer sits in. '
    + 'This lesson puts those two together in your own language.',

  method: [
    'Read the whole passage once, quietly, before reading it aloud.',
    'Then read it aloud at the speed you would speak.',
    'Pause where the marks tell you to.',
    'When something stops you, deal with it and read the line again.',
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
      mistake: 'Answering from what is in your head rather than from the '
        + 'passage.',
      why: 'The question is about this passage. '
        + 'If you cannot point at the line, it is a guess.',
    },
  ],

  extension:
    'Try reading a passage to an older relative '
    + 'and ask them to stop you wherever your pitch is off. '
    + 'You will learn more in ten minutes that way '
    + 'than in an hour of reading silently.',

  figure: {
    alt: 'Two panels. The first, headed the letters give you this, shows '
      + 'three boxes marked letter, each with an arrow pointing down to a '
      + 'box marked sound, under the note one letter, one sound. The '
      + 'second, headed the letters leave out this, shows a line rising '
      + 'and falling to stand for the pitch of a word, with a note that '
      + 'pitch can change what a word means and that nothing writes it '
      + 'down. Underneath, a note to read aloud to somebody who speaks the '
      + 'language, because their ear supplies what the page cannot.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Spelling, and what it leaves out</text>'
      + '<rect x="20" y="46" width="290" height="244" stroke="#0f8a4d"/>'
      + '<text x="165" y="76" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the letters give you this</text>'
      + '<rect x="50" y="96" width="60" height="50"/>'
      + '<text x="80" y="127" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">letter</text>'
      + '<rect x="135" y="96" width="60" height="50"/>'
      + '<text x="165" y="127" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">letter</text>'
      + '<rect x="220" y="96" width="60" height="50"/>'
      + '<text x="250" y="127" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">letter</text>'
      + '<line x1="80" y1="150" x2="80" y2="174"/>'
      + '<polygon points="80,186 72,168 88,168" fill="currentColor" stroke="none"/>'
      + '<line x1="165" y1="150" x2="165" y2="174"/>'
      + '<polygon points="165,186 157,168 173,168" fill="currentColor" stroke="none"/>'
      + '<line x1="250" y1="150" x2="250" y2="174"/>'
      + '<polygon points="250,186 242,168 258,168" fill="currentColor" stroke="none"/>'
      + '<rect x="50" y="194" width="60" height="50"/>'
      + '<text x="80" y="225" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">sound</text>'
      + '<rect x="135" y="194" width="60" height="50"/>'
      + '<text x="165" y="225" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">sound</text>'
      + '<rect x="220" y="194" width="60" height="50"/>'
      + '<text x="250" y="225" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">sound</text>'
      + '<text x="165" y="272" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">one letter, one sound</text>'
      + '<rect x="330" y="46" width="290" height="244" stroke="#c8433a"/>'
      + '<text x="475" y="76" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">the letters leave out this</text>'
      + '<text x="475" y="112" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the pitch of the word</text>'
      + '<polyline points="356,180 400,140 444,180 488,134 532,172 594,152" stroke="#c8433a"/>'
      + '<text x="475" y="224" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">and pitch can change</text>'
      + '<text x="475" y="248" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">what a word means</text>'
      + '<text x="475" y="276" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">nothing writes it down</text>'
      + '<text x="320" y="334" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">So read aloud to somebody who speaks it.</text>'
      + '<text x="320" y="366" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">Their ear supplies what the page cannot.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'What to do at each kind of difficulty in a passage',
    columns: ['What stopped you', 'What to do', 'Why that works'],
    rows: [
      [
        'A word you have never seen',
        'Sound it out letter by letter',
        'One letter means one sound',
      ],
      [
        'The line stopped making sense',
        'Read the whole line again',
        'The sense is in the line, not the word',
      ],
      [
        'You are unsure of the pitch',
        'Read it aloud to somebody',
        'The page cannot show pitch',
      ],
      [
        'A question you cannot answer',
        'Find its important word and hunt',
        'The answer is in the passage',
      ],
      [
        'The passage really does not say',
        'Write that it does not say',
        'Filling it in would be a guess',
      ],
    ],
    note: 'Only the last row is allowed to end without an answer, and only '
      + 'after you have hunted properly.',
  }],

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

  why:
    'You type a whole page of work on a computer. '
    + 'The light goes off. '
    + 'When the power comes back the page is empty, '
    + 'and the computer has no memory of it at all. '
    + 'Your friend typed the same page, '
    + 'pressed one thing, and hers is still there. '
    + 'Nothing was broken and nothing was stolen. '
    + 'What did she do, '
    + 'and what is the difference between where your page was '
    + 'and where hers was?',

  notation:
    'A file has a name, then a dot, '
    + 'then a few letters saying what kind of file it is, '
    + 'like report.docx or photo.jpg. '
    + 'Those letters after the dot are called the extension, '
    + 'and they tell the computer which program to open it with. '
    + 'A file inside a folder is written '
    + 'with the folder first and a stroke between, '
    + 'as Homework/report.docx. '
    + 'Changing the letters after the dot '
    + 'does not change what the file is, '
    + 'and it stops the file opening, '
    + 'which is the commonest mistake.',

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
    'A computer takes things in and puts things out. '
    + 'The keyboard and the mouse put things in, '
    + 'so they are called input devices. '
    + 'The screen and the printer bring things out, '
    + 'so they are called output devices. '
    + 'Type a letter and it goes in through the keyboard '
    + 'and comes out on the screen. '
    + 'But the screen is only showing it, '
    + 'and showing is not keeping. '
    + 'This lesson is about the part of a computer that keeps things.',

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
      why: 'The computer chose that name, not you, '
        + 'and it knows nothing about what is inside.',
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

  figure: {
    alt: 'Two boxes side by side. The first is memory, fast, and forgets '
      + 'when the power stops, and it holds your work while you type. The '
      + 'second is the disk, slower, and remembers, and it holds your work '
      + 'after you save. An arrow from the first to the second is labelled '
      + 'Save. Below, when the power goes off, an arrow under memory leads '
      + 'to memory empties and an arrow under the disk leads to the disk '
      + 'still has it. Underneath, a note that an hour of typing never '
      + 'saved was only ever in the part that forgets, so save often.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Where your work actually is</text>'
      + '<rect x="40" y="52" width="230" height="134"/>'
      + '<text x="155" y="84" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">memory</text>'
      + '<text x="155" y="112" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">fast</text>'
      + '<text x="155" y="140" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">forgets when the power stops</text>'
      + '<text x="155" y="170" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">your work while you type</text>'
      + '<line x1="282" y1="119" x2="340" y2="119" stroke="#0f8a4d"/>'
      + '<polygon points="352,119 334,111 334,127" fill="#0f8a4d" stroke="none"/>'
      + '<text x="316" y="100" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">Save</text>'
      + '<rect x="370" y="52" width="230" height="134" stroke="#0f8a4d"/>'
      + '<text x="485" y="84" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">the disk</text>'
      + '<text x="485" y="112" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">slower</text>'
      + '<text x="485" y="140" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">remembers</text>'
      + '<text x="485" y="170" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">your work after you save</text>'
      + '<text x="320" y="222" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">The power goes off:</text>'
      + '<line x1="155" y1="194" x2="155" y2="242" stroke="#c8433a"/>'
      + '<polygon points="155,254 147,236 163,236" fill="#c8433a" stroke="none"/>'
      + '<line x1="485" y1="194" x2="485" y2="242" stroke="#0f8a4d"/>'
      + '<polygon points="485,254 477,236 493,236" fill="#0f8a4d" stroke="none"/>'
      + '<text x="155" y="280" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">memory empties</text>'
      + '<text x="485" y="280" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">the disk still has it</text>'
      + '<text x="320" y="326" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">An hour of typing that was never saved</text>'
      + '<text x="320" y="352" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">was only ever in the part that forgets.</text>'
      + '<text x="320" y="386" font-size="19" text-anchor="middle" fill="#0f8a4d" stroke="none">Save often.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'File names, and whether you will know what they are in a '
      + 'month',
    columns: ['The name you gave it', 'Will you know?', 'Why'],
    rows: [
      [
        'Document1',
        'No',
        'It says nothing, and there will be several',
      ],
      ['My work', 'No', 'All of it is your work'],
      ['Untitled', 'No', 'The computer chose it, not you'],
      ['maths homework', 'Nearly', 'Which homework, and from when?'],
      [
        'maths homework fractions week 3',
        'Yes',
        'It says what is inside it',
      ],
    ],
    note: 'Put the topic and the date in. You will thank yourself in a '
      + 'month.',
  }],

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

  why:
    'Somebody messages you in a game. '
    + 'They say they are a boy of eleven in Kumasi. '
    + 'They are friendly all week. '
    + 'Then they ask which school you go to '
    + 'and what time you finish. '
    + 'Nothing they said was rude. '
    + 'Why should you still not answer?',

  idea:
    'Some things must never be put online. '
    + 'That holds however friendly the person asking seems. '
    + 'If anything online worries you, '
    + 'tell an adult you trust. '
    + 'Tell them straight away.',

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
    'Online means joined to the internet, '
    + 'so what you write can go to other machines. '
    + 'Type a message on a phone and it leaves the phone at once. '
    + 'Other people can save it. '
    + 'You cannot take it back. '
    + 'Once a thing has left, it is out of your hands for good. '
    + 'That is the fact this lesson rests on.',

  method: [
    'Before you share anything, ask: could this help somebody find me?',
    'If the answer is yes, or you are not sure, do not share it.',
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
      why: 'A picture carries things you did not mean to put in it, '
        + 'and you cannot take them back out.',
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

  figure: {
    alt: 'A screen on the left shows a message saying I am 12, and seems '
      + 'friendly. An arrow leads from it to two boxes on the right: a '
      + 'child of 12, and an adult of 40. A note says the screen cannot '
      + 'tell you which. Underneath, a note that the rule is not about who '
      + 'seems nice, it is about what would let a stranger find you or '
      + 'pretend to be you.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">You cannot tell who is on the other side</text>'
      + '<rect x="60" y="56" width="200" height="150" rx="10"/>'
      + '<text x="160" y="104" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">a message says:</text>'
      + '<text x="160" y="144" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">I am 12</text>'
      + '<text x="160" y="180" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">and seems friendly</text>'
      + '<line x1="276" y1="131" x2="326" y2="131"/>'
      + '<polygon points="338,131 320,123 320,139" fill="currentColor" stroke="none"/>'
      + '<rect x="356" y="56" width="244" height="66"/>'
      + '<text x="478" y="96" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">a child of 12</text>'
      + '<rect x="356" y="138" width="244" height="66" stroke="#c8433a"/>'
      + '<text x="478" y="178" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">an adult of 40</text>'
      + '<text x="478" y="238" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">The screen cannot tell you which.</text>'
      + '<text x="320" y="298" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">So the rule is not about who seems nice.</text>'
      + '<text x="320" y="330" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">It is about what would let a stranger</text>'
      + '<text x="320" y="358" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">find you, or pretend to be you.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'What never goes online, and what each one would give away',
    columns: ['The thing', 'Share it?', 'What it gives away'],
    rows: [
      ['Your password', 'Never', 'Somebody can then act as you'],
      ['Your full name', 'No', 'You can be looked up'],
      [
        'Your address or phone number',
        'No',
        'Somebody can reach you directly',
      ],
      ['Your school', 'No', 'Somebody can wait outside it'],
      [
        'A photograph of you in uniform',
        'No',
        'It shows your school without saying it',
      ],
      ['Your favourite colour', 'Yes', 'It leads nobody anywhere'],
    ],
    note: 'Read the last column. Every no is a no because of what it would '
      + 'let somebody do, not because of how the person seemed.',
  }],

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

  why:
    'Write down how to make tea, '
    + 'and give it to somebody who has never made tea. '
    + 'Forget to say "boil the water" '
    + 'and they will put the leaves into cold water and wait. '
    + 'Say "pour the water" before "boil the water" '
    + 'and they will pour cold water in. '
    + 'Nothing you wrote was untrue. '
    + 'The tea is still wrong. '
    + 'Why does the order of the steps matter '
    + 'as much as the steps themselves?',

  notation:
    'A set of instructions is written as a numbered list, '
    + 'one number for each step, starting at 1. '
    + 'The numbers are not decoration. '
    + 'They say the order, '
    + 'and a reader does them from the top down. '
    + 'One step holds one action, '
    + 'so "boil the water and pour it" '
    + 'should be two numbered steps and not one. '
    + 'Putting two actions on one number '
    + 'is the commonest mistake, '
    + 'because a reader does the first and forgets the second.',

  idea:
    'A set of instructions tells somebody how to do a task, '
    + 'step by step, in order. '
    + 'Making tea, washing hands, getting to school. '
    + 'The order matters, and so does leaving nothing out.',

  mechanism:
    'A person following your instructions fills in your gaps without '
    + 'noticing, because they know what you meant. '
    + 'A computer will not. '
    + 'That is why writing instructions is the beginning of programming: '
    + 'the skill is noticing the steps you were about to leave out '
    + 'because they seemed obvious.',

  recap:
    'A sentence says one clear thing. '
    + '"Open the tap." '
    + 'You can read that and do it, '
    + 'and there is nothing left to guess. '
    + '"Open and then get it and put it" '
    + 'says nothing anybody can act on. '
    + 'Each step in this lesson is one sentence of the first kind: '
    + 'one action, said plainly, nothing left to guess. '
    + 'So writing a clear sentence is where this starts.',

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
      why: 'The task is already in your own head, '
        + 'so you will step over every gap without seeing it.',
    },
  ],

  extension:
    'A list of steps in order is called an algorithm, '
    + 'and it is what every program is underneath. '
    + 'Writing clear instructions for a person is the same skill '
    + 'as writing them for a machine, with a more forgiving reader.',

  figure: {
    alt: 'Two panels of the same two instructions. In the panel headed '
      + 'wrong order the steps read boil the water, then fill the kettle, '
      + 'with a note that a person quietly fixes this for you and a '
      + 'computer boils an empty kettle. In the panel headed right order '
      + 'the steps read fill the kettle, then boil the water, with a note '
      + 'that there is one action in each step and nothing left out. '
      + 'Underneath, a note to give the steps to somebody who does not '
      + 'know the task, because every stumble is a step you left out.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">A computer does exactly what you wrote</text>'
      + '<rect x="20" y="48" width="290" height="230" stroke="#c8433a"/>'
      + '<text x="165" y="76" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">wrong order</text>'
      + '<rect x="40" y="92" width="250" height="38"/>'
      + '<text x="165" y="116" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">1. Boil the water</text>'
      + '<rect x="40" y="138" width="250" height="38"/>'
      + '<text x="165" y="162" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">2. Fill the kettle</text>'
      + '<text x="165" y="206" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">A person quietly fixes this.</text>'
      + '<text x="165" y="234" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">A computer boils an</text>'
      + '<text x="165" y="258" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">empty kettle.</text>'
      + '<rect x="330" y="48" width="290" height="230" stroke="#0f8a4d"/>'
      + '<text x="475" y="76" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">right order</text>'
      + '<rect x="350" y="92" width="250" height="38"/>'
      + '<text x="475" y="116" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">1. Fill the kettle</text>'
      + '<rect x="350" y="138" width="250" height="38"/>'
      + '<text x="475" y="162" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">2. Boil the water</text>'
      + '<text x="475" y="212" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">One action in each step.</text>'
      + '<text x="475" y="240" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">Nothing left out.</text>'
      + '<text x="320" y="326" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Give them to somebody who does not know the task.</text>'
      + '<text x="320" y="358" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Every stumble is a step you left out.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Four faults in a set of instructions, and what each one does',
    columns: ['The fault', 'What a person does', 'What a computer does'],
    rows: [
      [
        'A step in the wrong order',
        'Quietly does them the right way',
        'Does them in your order',
      ],
      [
        'A step left out',
        'Fills it in without noticing',
        'Stops, or does the next thing wrongly',
      ],
      [
        'Three actions in one step',
        'Loses their place',
        'Cannot read the step at all',
      ],
      [
        'A step that makes no sense',
        'Asks you what you meant',
        'Carries it out anyway',
      ],
    ],
    note: 'The middle column is the problem. A person being helpful hides '
      + 'every fault you made.',
  }],

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
