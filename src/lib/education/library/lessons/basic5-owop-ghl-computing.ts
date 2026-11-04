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

  why:
    'Somebody from Tamale is coming to your house for the first '
    + 'time. '
    + 'You draw them a map on a sheet of paper, with your house, the '
    + 'school and the big road on it. '
    + 'They telephone from the junction. '
    + 'They cannot tell which way to turn, and they want to know how '
    + 'much further it is. '
    + 'Your map is correct and it still did not help them. '
    + 'What is missing from it?',

  notation:
    'A scale is written like 1 cm to 10 km and said “one centimetre '
    + 'to ten kilometres”. '
    + 'It means one centimetre measured on the paper is ten '
    + 'kilometres on the ground. '
    + 'The key, which some maps call the legend, is the box that says '
    + 'what each symbol stands for. '
    + 'The compass, or north arrow, shows which way the map is '
    + 'turned, and north is almost always up the page. '
    + 'Measure a distance and leave the answer in centimetres instead '
    + 'of turning it into kilometres, and that is the commonest way '
    + 'to lose a mark.',

  idea:
    'A map of Ghana uses symbols. '
    + 'A dot is a town. '
    + 'A line is a river. '
    + 'A different line is a road or a border. '
    + 'Around the edge of the map sit the parts that tell you '
    + 'how to read those symbols. '
    + 'They also tell you which way the map is turned. '
    + 'And they tell you what a distance on the paper '
    + 'means on the ground.',

  mechanism:
    'The key is the part people skip and the part that matters most, '
    + 'because the same symbol means different things on different maps. '
    + 'A thick line may be a main road on one map and a regional border on '
    + 'another. '
    + 'Reading the map without the key is guessing, '
    + 'and it is confident guessing, which is worse. '
    + 'North is the other anchor: once north is found on the map, '
    + 'the other three directions follow, and nothing else needs explaining.',

  recap:
    'A map is a drawing of a place as it looks from above, the way '
    + 'a bird looking down would see it. '
    + 'Draw your own school from above and the classroom blocks '
    + 'become rectangles and the football field becomes a bigger one. '
    + 'Ghana on a map is wide at the top and narrower at the bottom. '
    + 'The sea runs all along the bottom edge, the south, which is '
    + 'why Takoradi and Tema are ports and Bolgatanga is not. '
    + 'This lesson adds the tools that let a stranger read a map you '
    + 'have drawn.',

  method: [
    'Read the key first. Learn what each symbol means on this map.',
    'Find the north arrow.',
    'With north found, the other three directions follow from it.',
    'Find a place you can name, to get your bearings.',
    'To find a new place, take its direction from a place you can '
      + 'already name.',
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
      mistake: 'Taking a symbol to mean what it meant on another map.',
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

  figure: {
    alt: 'A map on the left holding a wavy line, a thick straight line, a '
      + 'broken line, two dots for towns and a north arrow. A key on the '
      + 'right lists the same four symbols and says what each one means on '
      + 'this map: a town, a river, a road, a border. Underneath, a note '
      + 'that the same symbol means something else on the next map.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="26" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Read the key before the map</text>'
      + '<rect x="20" y="46" width="380" height="252"/>'
      + '<path d="M 40 96 Q 100 74 160 104 Q 220 134 280 114 Q 334 98 388 124"/>'
      + '<line x1="40" y1="212" x2="388" y2="190" stroke-width="6"/>'
      + '<line x1="210" y1="56" x2="236" y2="288" stroke-dasharray="10 8"/>'
      + '<circle cx="120" cy="156" r="7" fill="currentColor"/>'
      + '<text x="120" y="182" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">Town</text>'
      + '<circle cx="312" cy="248" r="7" fill="currentColor"/>'
      + '<text x="312" y="274" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">Town</text>'
      + '<line x1="66" y1="282" x2="66" y2="250"/>'
      + '<polygon points="66,238 58,256 74,256" fill="currentColor" stroke="none"/>'
      + '<text x="66" y="228" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">N</text>'
      + '<rect x="420" y="46" width="200" height="252" stroke="#0f8a4d"/>'
      + '<text x="520" y="76" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">key</text>'
      + '<circle cx="444" cy="108" r="7" fill="currentColor"/>'
      + '<text x="468" y="113" font-size="14" text-anchor="start" fill="currentColor" stroke="none">a town</text>'
      + '<path d="M 434 152 Q 444 140 454 152 Q 464 164 474 152"/>'
      + '<text x="486" y="157" font-size="14" text-anchor="start" fill="currentColor" stroke="none">a river</text>'
      + '<line x1="434" y1="196" x2="474" y2="196" stroke-width="6"/>'
      + '<text x="486" y="201" font-size="14" text-anchor="start" fill="currentColor" stroke="none">a road</text>'
      + '<line x1="434" y1="240" x2="474" y2="240" stroke-dasharray="10 8"/>'
      + '<text x="486" y="245" font-size="14" text-anchor="start" fill="currentColor" stroke="none">a border</text>'
      + '<text x="520" y="282" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">on this map only</text>'
      + '<text x="320" y="340" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">The same symbol means something else</text>'
      + '<text x="320" y="370" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">on the next map.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Once you have found north, the other three directions follow',
    columns: [
      'Direction',
      'Where it is, with north up',
      'Travelling that way in Ghana',
    ],
    rows: [
      ['North', 'Up the page', 'Towards Tamale and Bolgatanga'],
      ['South', 'Down the page', 'Towards Accra and the sea'],
      ['East', 'To the right', 'Towards Ho and the Togo border'],
      [
        'West',
        'To the left',
        'Towards Sunyani and the Ivorian border',
      ],
    ],
    note: 'Direction is always from somewhere. Kumasi is north of Accra '
      + 'and south of Tamale, both at the same time.',
  }],

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

  why:
    'Every 6 March the schools march, the flag goes up, and nobody '
    + 'has to go to class. '
    + 'Your grandmother says that when she was small the money in her '
    + 'hand carried a picture of the Queen of England, and the men '
    + 'who ran the town were sent out from London. '
    + 'Now the money carries Ghanaian faces and the people who run '
    + 'the town are Ghanaian. '
    + 'Something changed, on one particular day. '
    + 'What happened on that day, and who made it happen?',

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
    'The flag of Ghana has three bands and one black star in the '
    + 'middle of the gold one. '
    + 'Red stands for the blood of those who died in the struggle. '
    + 'Gold stands for the wealth of the land, and green for its '
    + 'forests and farms. '
    + 'The black star stands for the freedom of African people. '
    + 'This lesson is the event that star was put there for.',

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
      why: 'A government changing hands is one thing changing. '
        + 'Everything else was work that began the next morning.',
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

  figure: {
    alt: 'A long line with five marks along it, labelled newspapers, '
      + 'parties, strikes, elections and negotiation, gathered under a '
      + 'bracket that reads years of organising, by very many people. At '
      + 'the far end of the line a larger mark reads 6 March 1957, with '
      + 'Britain no longer governs beneath it. Underneath, a note that '
      + 'people disagree about how much credit belongs to whom, and that '
      + 'the disagreement is what history is.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Not one act, and not one person</text>'
      + '<line x1="60" y1="200" x2="600" y2="200"/>'
      + '<line x1="95" y1="190" x2="95" y2="210"/>'
      + '<text x="95" y="174" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">newspapers</text>'
      + '<line x1="180" y1="190" x2="180" y2="210"/>'
      + '<text x="180" y="232" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">parties</text>'
      + '<line x1="265" y1="190" x2="265" y2="210"/>'
      + '<text x="265" y="174" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">strikes</text>'
      + '<line x1="350" y1="190" x2="350" y2="210"/>'
      + '<text x="350" y="232" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">elections</text>'
      + '<line x1="435" y1="190" x2="435" y2="210"/>'
      + '<text x="435" y="174" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">negotiation</text>'
      + '<circle cx="545" cy="200" r="11" fill="#0f8a4d" stroke="#0f8a4d"/>'
      + '<text x="545" y="162" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">6 March 1957</text>'
      + '<text x="545" y="234" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">Britain no longer governs</text>'
      + '<polyline points="95,258 95,272 435,272 435,258"/>'
      + '<line x1="265" y1="272" x2="265" y2="284"/>'
      + '<text x="265" y="306" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">years of organising, by very many people</text>'
      + '<text x="320" y="352" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">People disagree about how much credit belongs to whom.</text>'
      + '<text x="320" y="380" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">That disagreement is what history is.</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What independence changed on the day, and what it did not',
      columns: ['Thing', 'Changed that day?', 'What was actually so'],
      rows: [
        ['Who governed', 'Yes', 'Britain no longer did'],
        [
          'The name of the country',
          'Yes',
          'The Gold Coast became Ghana',
        ],
        ['The flag and the anthem', 'Yes', 'Both were new'],
        [
          'The roads and the schools',
          'No',
          'The same ones, the next morning',
        ],
        ['How much money people had', 'No', 'Poverty was still there'],
        [
          'What the rest of Africa did',
          'Not yet',
          'Many followed within ten years',
        ],
      ],
      note: 'The first three happened in one day. The rest was work that '
        + 'started on the second day and is not finished.',
    },
    {
      caption: 'The six men detained in 1948, known since as the Big Six',
      columns: ['Name', 'Worth knowing'],
      rows: [
        ['Kwame Nkrumah', 'Led the first government after 1957'],
        [
          'J. B. Danquah',
          'A lawyer, and among those who gave the country its name',
        ],
        ['Ako Adjei', 'Invited Nkrumah back to the Gold Coast'],
        [
          'Edward Akufo-Addo',
          'Later a chief justice, and then president',
        ],
        ['Emmanuel Obetsebi-Lamptey', 'A lawyer and organiser in Accra'],
        ['William Ofori Atta', 'An organiser, and later a minister'],
      ],
      note: 'Their faces are on the cedi notes. Very many more people '
        + 'worked for independence and were never named at all.',
    },
  ],

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

  why:
    'An elder is settling a quarrel between two brothers over their '
    + 'father’s land. '
    + 'He does not tell either of them that he is being greedy. '
    + 'He says one sentence about a single broomstick and a bundle of '
    + 'broomsticks. '
    + 'Both brothers go quiet, and then they agree. '
    + 'He never mentioned the land, the brothers or the quarrel. '
    + 'Why did one sentence about brooms end an argument about land?',

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
    'A folktale is a story told aloud, like the Ananse stories. '
    + 'A folktale never finishes by saying “be careful who you '
    + 'trust”. '
    + 'It shows that instead, by letting Ananse trick somebody and '
    + 'then get caught himself. '
    + 'The listener works the lesson out from what happened in the '
    + 'story. '
    + 'A proverb does the same job as a whole folktale, in one '
    + 'sentence.',

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
        'Using one well shows a deep hold on the language.',
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

  figure: {
    alt: 'Two boxes, one above the other. The top box is the picture a '
      + 'proverb paints, a river, a goat, a drum. An arrow runs down from '
      + 'it labelled stands for, into the bottom box, which is the '
      + 'situation it is used in, and which is the whole point. '
      + 'Underneath, a note that describing the top box only has explained '
      + 'nothing.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">A proverb has two layers</text>'
      + '<rect x="110" y="50" width="420" height="88"/>'
      + '<text x="320" y="80" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the picture it paints</text>'
      + '<text x="320" y="116" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">a river, a goat, a drum</text>'
      + '<line x1="320" y1="150" x2="320" y2="192"/>'
      + '<polygon points="320,206 312,188 328,188" fill="currentColor" stroke="none"/>'
      + '<text x="340" y="182" font-size="15" text-anchor="start" fill="currentColor" stroke="none">stands for</text>'
      + '<rect x="110" y="214" width="420" height="88" stroke="#0f8a4d"/>'
      + '<text x="320" y="244" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">the situation it is used in</text>'
      + '<text x="320" y="280" font-size="21" text-anchor="middle" fill="#0f8a4d" stroke="none">which is the whole point</text>'
      + '<text x="320" y="348" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">Describe the top box only,</text>'
      + '<text x="320" y="376" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">and you have explained nothing.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Five things somebody might say about one proverb, and how '
      + 'far each one gets',
    columns: ['What you say about it', 'Which layer', 'Explained yet?'],
    rows: [
      ['It mentions a river', 'The picture', 'No'],
      [
        'Rivers are deep and move fast',
        'Still the picture',
        'No',
      ],
      ['It is about being patient', 'The meaning, in part', 'Nearly'],
      [
        'You say it to somebody rushing a job',
        'The situation',
        'Yes',
      ],
      [
        'Here is somebody using it, and why',
        'The situation',
        'Yes, and they can copy it',
      ],
    ],
    note: 'The first two rows are where most explanations stop, which is '
      + 'exactly why most explanations fail.',
  }],

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

  why:
    'Your teacher asks for a composition in your own language about '
    + 'market day. '
    + 'You could talk about market day for ten minutes without '
    + 'stopping. '
    + 'You sit down to write it and get three lines out, and two of '
    + 'the words look wrong on the page even though they sound right '
    + 'in your mouth. '
    + 'Saying it was easy. '
    + 'Writing it was not. '
    + 'What does writing make you decide that speaking never asks of '
    + 'you?',

  notation:
    'Ghanaian languages use the ordinary letters and a few extra '
    + 'ones. '
    + 'ɛ is said like the e in “bed”, and ɔ like the o in “pot”. '
    + 'ŋ is the sound at the end of “sing”. '
    + 'Each of those is a letter in its own right, not an e or an o '
    + 'with a mark added to it. '
    + 'Write e for ɛ, or o for ɔ, and you have written another word, '
    + 'which is the commonest way to lose a mark in a composition.',

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
    'Ghanaian languages are written with the ordinary letters and a '
    + 'few extra ones, such as ɛ, ɔ and ŋ. '
    + 'Those extra letters are not decorations: “sɛ” and “se” are two '
    + 'different words. '
    + 'A paragraph is a group of sentences about one idea. '
    + 'A plan is the list of those ideas, written down before you '
    + 'start. '
    + 'Plan first, then write one paragraph for each idea on the '
    + 'list. '
    + 'This lesson puts the proper letters and the planning together.',

  method: [
    'Read the title and decide what you will say.',
    'Write three or four points in the order you will make them.',
    'Write one paragraph for each, with an opening and a closing around '
      + 'them.',
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

  figure: {
    alt: 'Two boxes on the left hold the letters open e and open o, under '
      + 'the heading what you meant. An arrow leads to two boxes on the '
      + 'right holding plain e and plain o, under the heading what your '
      + 'hand wrote. Underneath, a note that years of English make the '
      + 'hand reach for the familiar letter, that your eye skims straight '
      + 'past it because your eye made the mistake, and that reading aloud '
      + 'catches it because your ear did not.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">What your hand does while you think</text>'
      + '<text x="160" y="64" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">what you meant</text>'
      + '<rect x="70" y="80" width="80" height="80"/>'
      + '<text x="110" y="138" font-size="44" text-anchor="middle" fill="currentColor" stroke="none">ɛ</text>'
      + '<rect x="170" y="80" width="80" height="80"/>'
      + '<text x="210" y="138" font-size="44" text-anchor="middle" fill="currentColor" stroke="none">ɔ</text>'
      + '<line x1="272" y1="120" x2="336" y2="120"/>'
      + '<polygon points="348,120 330,112 330,128" fill="currentColor" stroke="none"/>'
      + '<text x="480" y="64" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">what your hand wrote</text>'
      + '<rect x="390" y="80" width="80" height="80" stroke="#c8433a"/>'
      + '<text x="430" y="138" font-size="44" text-anchor="middle" fill="#c8433a" stroke="none">e</text>'
      + '<rect x="490" y="80" width="80" height="80" stroke="#c8433a"/>'
      + '<text x="530" y="138" font-size="44" text-anchor="middle" fill="#c8433a" stroke="none">o</text>'
      + '<text x="320" y="212" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Years of English make the hand reach</text>'
      + '<text x="320" y="238" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">for the familiar letter.</text>'
      + '<text x="320" y="288" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Your eye skims straight past it,</text>'
      + '<text x="320" y="314" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">because your eye made the mistake.</text>'
      + '<text x="320" y="364" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">So read it aloud. Your ear did not.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'What each paragraph of a composition is for',
    columns: ['Paragraph', 'What it does', 'How you know it went wrong'],
    rows: [
      [
        'The opening',
        'Says what the piece is about',
        'The reader still does not know the topic',
      ],
      ['Point one', 'Makes your first point', 'It makes two points'],
      ['Point two', 'Makes your second point', 'It repeats the first'],
      [
        'Point three',
        'Makes your third point',
        'It has wandered off the title',
      ],
      [
        'The closing',
        'Ties the points together',
        'It introduces something new',
      ],
    ],
    note: 'Write the middle paragraphs from your plan. If a paragraph is '
      + 'not one of your points, it should not be there at all.',
  }],

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

  why:
    'Two pupils hand in a report on keeping the town clean. '
    + 'They typed almost the same words. '
    + 'One is a single block of text from the top of the page to the '
    + 'bottom. '
    + 'The other has a title in large bold letters, a heading over '
    + 'each part, and a picture. '
    + 'The teacher reads the second one properly and only glances at '
    + 'the first. '
    + 'The words were the same. '
    + 'Why did the way it looked change what happened to it?',

  idea:
    'Formatting is how a document is laid out: '
    + 'headings, bold text, spacing, and pictures. '
    + 'It is done to help the reader find things and follow the structure.',

  mechanism:
    'The rule that explains all the others is that formatting works by '
    + 'contrast. '
    + 'Each thing you add is a signal, '
    + 'and a signal only works when it is rare. '
    + 'This is why a document with six fonts and four colours is harder to '
    + 'read than a plain one, even though more effort went into it.',

  recap:
    'Typing with both hands means the left hand keeps to the left '
    + 'half of the keyboard and the right hand to the right half, so '
    + 'the fingers never cross over. '
    + 'Saving a file means telling the computer to keep it: you '
    + 'choose Save, give the file a name, and choose a folder to put '
    + 'it in. '
    + 'Without that, the work is gone when the machine goes off. '
    + 'Typing puts the words in and saving keeps them. '
    + 'This lesson is about something else: what the document looks '
    + 'like once the words are there.',

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

  figure: {
    alt: 'Two pages side by side. The first has one thick heading line, '
      + 'plain body lines and two words thickened, and is labelled one '
      + 'heading, two bold words. The second has every line thickened and '
      + 'is labelled everything emphasised. Underneath, a note that on the '
      + 'left your eye goes straight to the heading and on the right it '
      + 'has nowhere to go.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">A signal only works when it is rare</text>'
      + '<rect x="30" y="48" width="260" height="252" stroke="#0f8a4d"/>'
      + '<line x1="50" y1="80" x2="200" y2="80" stroke="#0f8a4d" stroke-width="8"/>'
      + '<line x1="50" y1="116" x2="270" y2="116" stroke-width="2"/>'
      + '<line x1="50" y1="140" x2="270" y2="140" stroke-width="2"/>'
      + '<line x1="50" y1="164" x2="270" y2="164" stroke-width="2"/>'
      + '<line x1="50" y1="188" x2="118" y2="188" stroke="#0f8a4d" stroke-width="7"/>'
      + '<line x1="126" y1="188" x2="270" y2="188" stroke-width="2"/>'
      + '<line x1="50" y1="212" x2="270" y2="212" stroke-width="2"/>'
      + '<line x1="50" y1="236" x2="270" y2="236" stroke-width="2"/>'
      + '<line x1="50" y1="260" x2="206" y2="260" stroke-width="2"/>'
      + '<text x="160" y="288" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">one heading, two bold words</text>'
      + '<rect x="350" y="48" width="260" height="252" stroke="#c8433a"/>'
      + '<line x1="370" y1="80" x2="520" y2="80" stroke="#c8433a" stroke-width="8"/>'
      + '<line x1="370" y1="116" x2="590" y2="116" stroke-width="7"/>'
      + '<line x1="370" y1="140" x2="590" y2="140" stroke="#c8433a" stroke-width="7"/>'
      + '<line x1="370" y1="164" x2="590" y2="164" stroke-width="7"/>'
      + '<line x1="370" y1="188" x2="590" y2="188" stroke="#c8433a" stroke-width="7"/>'
      + '<line x1="370" y1="212" x2="590" y2="212" stroke-width="7"/>'
      + '<line x1="370" y1="236" x2="590" y2="236" stroke="#c8433a" stroke-width="7"/>'
      + '<line x1="370" y1="260" x2="526" y2="260" stroke-width="7"/>'
      + '<text x="480" y="288" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">everything emphasised</text>'
      + '<text x="320" y="342" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">On the left, your eye goes straight to the heading.</text>'
      + '<text x="320" y="372" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">On the right, it has nowhere to go.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Each formatting tool, what it signals, and what too much of '
      + 'it does',
    columns: ['Tool', 'What it signals', 'Too much of it'],
    rows: [
      ['A heading', 'A new part begins here', 'The parts stop being parts'],
      ['Bold', 'These few words matter most', 'Nothing matters most'],
      ['A blank line', 'One idea has ended', 'The page falls apart'],
      [
        'A second font',
        'This text is a different kind',
        'It stops looking like one document',
      ],
      ['A colour', 'Look here', 'Nowhere is worth looking'],
      [
        'A picture',
        'Here is what words cannot show',
        'It takes attention from what does',
      ],
    ],
    note: 'The middle column is why you format after typing. You cannot '
      + 'tell what matters most until it is all there.',
  }],

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

  why:
    'You are given homework on how many people live in Ghana. '
    + 'You search, and the first page says 28 million. '
    + 'The third page says 34 million. '
    + 'Both look like proper websites, with headings and photographs. '
    + 'They cannot both be right. '
    + 'You cannot go out and count the people yourself. '
    + 'So how do you choose between two pages that look equally '
    + 'serious?',

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
    'Personal information is anything that tells a stranger who you '
    + 'are or where to find you: your full name, your house, your '
    + 'school, your phone number, a photograph of you in uniform. '
    + 'None of that goes into a website or to somebody you have not '
    + 'met. '
    + 'There is also nobody guarding what goes online. '
    + 'Anybody with a phone can put up a page saying anything at all, '
    + 'and no one checks it first. '
    + 'This lesson is the other side of that: how to decide what to '
    + 'believe.',

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
      why: 'Then you cannot answer "where did this come from", '
        + 'and you cannot check it later.',
    },
  ],

  extension:
    'Two pages agreeing only counts if they are independent. '
    + 'If both copied the same original, '
    + 'you have one source twice, not two sources. '
    + 'Checking where each got it from is the next step up in this skill.',

  figure: {
    alt: 'A page you found on the left, with arrows leading it through '
      + 'three boxes in turn. The first asks who wrote it, noting that a '
      + 'ministry is answerable and nobody is not. The second asks when, '
      + 'noting that out of date is not wrong and is harder to spot. The '
      + 'third asks who agrees, noting that two independent sources beat '
      + 'one confident one. Underneath, a note that none of this needs '
      + 'expertise, it needs the habit of asking, and that appearing in a '
      + 'search result proves nothing.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Three questions before you believe it</text>'
      + '<rect x="16" y="130" width="130" height="70"/>'
      + '<text x="81" y="160" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">a page</text>'
      + '<text x="81" y="182" font-size="14" text-anchor="middle" fill="currentColor" stroke="none">you found</text>'
      + '<line x1="150" y1="165" x2="166" y2="165"/>'
      + '<polygon points="176,165 162,158 162,172" fill="currentColor" stroke="none"/>'
      + '<rect x="180" y="110" width="130" height="112"/>'
      + '<text x="245" y="144" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">who wrote it?</text>'
      + '<text x="245" y="174" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">a ministry is</text>'
      + '<text x="245" y="192" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">answerable,</text>'
      + '<text x="245" y="210" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">nobody is not</text>'
      + '<line x1="314" y1="165" x2="330" y2="165"/>'
      + '<polygon points="340,165 326,158 326,172" fill="currentColor" stroke="none"/>'
      + '<rect x="344" y="110" width="130" height="112"/>'
      + '<text x="409" y="144" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">when?</text>'
      + '<text x="409" y="174" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">out of date is</text>'
      + '<text x="409" y="192" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">not wrong, and</text>'
      + '<text x="409" y="210" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">harder to spot</text>'
      + '<line x1="478" y1="165" x2="494" y2="165"/>'
      + '<polygon points="504,165 490,158 490,172" fill="currentColor" stroke="none"/>'
      + '<rect x="508" y="110" width="118" height="112"/>'
      + '<text x="567" y="144" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">who agrees?</text>'
      + '<text x="567" y="174" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">two independent</text>'
      + '<text x="567" y="192" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">sources beat</text>'
      + '<text x="567" y="210" font-size="12" text-anchor="middle" fill="currentColor" stroke="none">one sure one</text>'
      + '<text x="320" y="288" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">None of this needs expertise.</text>'
      + '<text x="320" y="318" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">It needs the habit of asking.</text>'
      + '<text x="320" y="366" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">Appearing in a search result proves nothing.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Two pages giving different figures, put through the three '
      + 'questions',
    columns: ['The question', 'Page A', 'Page B'],
    rows: [
      ['Who wrote it?', 'A statistical service', 'No author given'],
      ['When was it written?', 'Last year', 'No date given'],
      [
        'Who else says it?',
        'Two other sources agree',
        'Nothing else says it',
      ],
      [
        'So what do you do?',
        'Use it, and say where from',
        'Treat it as a lead, not a source',
      ],
    ],
    note: 'Page B is not necessarily wrong. It is something you have no '
      + 'way to judge, which is a different problem and still a reason '
      + 'not to use it.',
  }],

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

  why:
    'You send your younger brother to buy bread and he comes back '
    + 'with bread. '
    + 'You give a robot the same words and it stands still, because '
    + 'you never said which direction, how far, or what to do when it '
    + 'reaches the door. '
    + 'Your brother filled in everything you left out. '
    + 'The robot filled in nothing. '
    + 'So what exactly do you have to say to something that fills in '
    + 'nothing?',

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
    'Instructions have to be in the right order, with one action in '
    + 'each step. '
    + '“Boil the water, then pour it into the cup” works. '
    + 'Turn those two round, and you are pouring cold water and '
    + 'boiling an empty kettle. '
    + 'A computer also fills in nothing of its own. '
    + 'Ask a person to make tea and they will fetch a cup without '
    + 'being told. '
    + 'Ask a computer, and it will do nothing at all that you did not '
    + 'write down.',

  method: [
    'Decide what you want to happen, in order.',
    'Drag the blocks into that order.',
    'Run it and watch.',
    'Something you repeat? Replace the copies with a repeat block.',
    'When it misbehaves, do not guess. Find the first surprise, fix that '
      + 'one thing, and run it again.',
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
      why: 'Then you do not know which change helped, '
        + 'and you have probably added a second fault.',
    },
    {
      mistake: 'Copying blocks instead of using repeat.',
      why: 'It works until you need to change it, '
        + 'and then you must find every copy.',
    },
    {
      mistake: 'Deleting it all and starting again when it misbehaves.',
      why: 'You lose the working parts along with the broken one, '
        + 'and the same fault comes back next time.',
    },
  ],

  extension:
    'Everything you do with blocks has a written equivalent in languages '
    + 'like Python, '
    + 'and a repeat block becomes a loop. '
    + 'The blocks are not a toy version. '
    + 'They are the same ideas with the typing removed, '
    + 'so you can think about the logic instead of the spelling.',

  figure: {
    alt: 'Two ways of drawing a square. On the left, eight blocks in a '
      + 'column alternating move 100 and turn 90. On the right, three '
      + 'blocks: a repeat 4 times block holding one move 100 and one turn '
      + '90. A note says that to make a pentagon instead you change the 4 '
      + 'to a 5 on the right, and all eight blocks on the left.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="28" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">Say it once</text>'
      + '<rect x="20" y="46" width="270" height="276" stroke="#c8433a"/>'
      + '<text x="155" y="72" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">eight blocks</text>'
      + '<rect x="55" y="84" width="200" height="24"/>'
      + '<text x="155" y="101" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">move 100</text>'
      + '<rect x="55" y="112" width="200" height="24"/>'
      + '<text x="155" y="129" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">turn 90</text>'
      + '<rect x="55" y="140" width="200" height="24"/>'
      + '<text x="155" y="157" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">move 100</text>'
      + '<rect x="55" y="168" width="200" height="24"/>'
      + '<text x="155" y="185" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">turn 90</text>'
      + '<rect x="55" y="196" width="200" height="24"/>'
      + '<text x="155" y="213" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">move 100</text>'
      + '<rect x="55" y="224" width="200" height="24"/>'
      + '<text x="155" y="241" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">turn 90</text>'
      + '<rect x="55" y="252" width="200" height="24"/>'
      + '<text x="155" y="269" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">move 100</text>'
      + '<rect x="55" y="280" width="200" height="24"/>'
      + '<text x="155" y="297" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">turn 90</text>'
      + '<rect x="350" y="46" width="270" height="276" stroke="#0f8a4d"/>'
      + '<text x="485" y="72" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">three blocks</text>'
      + '<rect x="380" y="90" width="210" height="112" stroke="#0f8a4d"/>'
      + '<text x="485" y="116" font-size="15" text-anchor="middle" fill="#0f8a4d" stroke="none">repeat 4 times</text>'
      + '<rect x="400" y="128" width="170" height="24"/>'
      + '<text x="485" y="145" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">move 100</text>'
      + '<rect x="400" y="160" width="170" height="24"/>'
      + '<text x="485" y="177" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">turn 90</text>'
      + '<text x="485" y="240" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">Want a pentagon instead?</text>'
      + '<text x="485" y="270" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">Change the 4 to a 5.</text>'
      + '<text x="485" y="300" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">On the left, change all eight.</text>'
      + '<text x="320" y="364" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">Copies are where mistakes hide. You always miss one.</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Four things you could do when a program misbehaves',
    columns: ['What you could do', 'What you learn', 'What it costs'],
    rows: [
      [
        'Guess, and change three blocks',
        'Nothing, even if it works',
        'You cannot tell which one mattered',
      ],
      [
        'Delete it all and start again',
        'Nothing at all',
        'The working parts go too',
      ],
      [
        'Run it slowly and watch',
        'Where the first surprise is',
        'A minute',
      ],
      [
        'Change one block and run it',
        'Whether that block was it',
        'A minute',
      ],
    ],
    note: 'The bottom two rows are slower for one minute and faster for '
      + 'the rest of the afternoon.',
  }],

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
