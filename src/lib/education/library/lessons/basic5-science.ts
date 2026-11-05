/**
 * Stored lessons for Basic 5 Science.
 *
 * Written at about grade 5, with a `brief` form on every topic.
 *
 * Several of these matter beyond the examination: how malaria and cholera
 * spread, and how to make water safe. Those are written to be acted on, with
 * the reason given, because a rule without its reason is forgotten and a
 * rule with one is not.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── mixtures and separating them ─────────────────────────────────────────── */

teach({
  topicId: 'mixtures-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A mixture is two or more things together that keep their own nature. '
      + 'Separate them by using a difference between them: size, weight, '
      + 'or whether they dissolve.',
    method: [
      'Find a difference between the parts.',
      'Big pieces: pick them out or sieve them.',
      'Solid in liquid: filter it. Dissolved: evaporate the liquid.',
    ],
  },

  why:
    'Your mother sends you to pick the stones out of a bowl of '
    + 'rice. '
    + 'You can see every stone, so your fingers can do the job. '
    + 'Then she tips a cup of salt into the pot of water by mistake. '
    + 'The salt is gone. '
    + 'The water still looks like water. '
    + 'How do you get that salt back out, when there is nothing left '
    + 'to see and nothing left to hold?',

  idea:
    'A mixture is two or more substances together, '
    + 'each still being itself. '
    + 'Rice and stones mixed in a bowl are still rice and still stones. '
    + 'Because nothing has changed, you can separate them again.',

  mechanism:
    'Every way of separating a mixture works by exploiting a difference. '
    + 'So the question is never "how do I separate this". '
    + 'It is "what is different about these two things", '
    + 'and the method follows from the answer.',

  recap:
    'Everything around you is a solid, a liquid or a gas. '
    + 'A stone is a solid, so it keeps its own shape. '
    + 'Water is a liquid, so it takes the shape of the cup it is in. '
    + 'Air is a gas, so it spreads out and fills the whole room. '
    + 'Heat can move a thing from one of these to the next: ice is a '
    + 'solid, and heat turns it into water, which is a liquid. '
    + 'This lesson uses those three states, and it uses heat.',

  method: [
    'Look at the mixture and name the parts.',
    'Ask what is different about them: size, weight, dissolving, magnetism.',
    'Choose the way of separating that uses that difference.',
    'Check it: if the solid dissolved, filtering will not catch it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How do you separate stones from rice?',
      steps: [
        'The difference is size and weight.',
        'Pick them out, or shake them so the heavier stones settle.',
      ],
      answer: 'By hand or by shaking, using the size and weight difference.',
    },
    {
      level: 4,
      ask: 'How do you separate sand from water?',
      steps: [
        'Sand does not dissolve, so it is a solid sitting in the liquid.',
        'Paper lets water through and holds sand back.',
      ],
      answer: 'Filter it through cloth or paper.',
    },
    {
      level: 5,
      ask: 'Salt is dissolved in water. Filtering does not work. Why, '
        + 'and what does?',
      steps: [
        'Dissolved salt passes through the paper with the water.',
        'So filtering cannot catch it.',
        'But salt does not evaporate and water does.',
      ],
      answer: 'Boil or leave the water to evaporate, '
        + 'and the salt is left behind.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking filtering removes dissolved substances.',
      why: 'Dissolved means spread right through the liquid, '
        + 'so it passes through the paper. Evaporate instead.',
    },
    {
      mistake: 'Thinking dissolving destroys the salt.',
      why: 'It is still there, which is why the water tastes salty '
        + 'and why boiling it away leaves the salt behind.',
    },
    {
      mistake: 'Looking for a method before looking for a difference.',
      why: 'The difference chooses the method. '
        + 'Find it first.',
    },
  ],

  extension:
    'Filtering removes what you can see and leaves germs behind, '
    + 'because germs are far too small for the holes in cloth. '
    + 'That is why filtered water still has to be boiled, '
    + 'and it is a point worth remembering in the lesson on clean water.',

  figure: {
    alt: 'Three ways of separating a mixture. A sieve with large pieces held '
      + 'on the mesh and small ones falling through. A funnel lined with '
      + 'paper, holding the solid back while the liquid drips into a '
      + 'beaker. A pan over a flame with steam rising and the dissolved '
      + 'solid left behind.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<polygon points="60,136 164,136 154,174 70,174"/>'
      + '<line x1="70" y1="174" x2="154" y2="174" stroke-width="3" '
      + 'stroke-dasharray="7 7"/><circle cx="86" cy="124" r="10"/>'
      + '<circle cx="112" cy="122" r="10"/>'
      + '<circle cx="138" cy="126" r="10"/>'
      + '<circle cx="90" cy="202" r="4" fill="currentColor"/>'
      + '<circle cx="112" cy="216" r="4" fill="currentColor"/>'
      + '<circle cx="134" cy="200" r="4" fill="currentColor"/>'
      + '<text x="112" y="326" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">sieve</text>'
      + '<text x="112" y="356" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">big from small</text>'
      + '<polygon points="272,132 368,132 332,192 308,192"/>'
      + '<circle cx="306" cy="152" r="6" fill="currentColor"/>'
      + '<circle cx="320" cy="146" r="6" fill="currentColor"/>'
      + '<circle cx="334" cy="154" r="6" fill="currentColor"/>'
      + '<circle cx="320" cy="208" r="4" fill="currentColor"/>'
      + '<circle cx="320" cy="226" r="4" fill="currentColor"/>'
      + '<polygon points="288,240 352,240 346,292 294,292"/>'
      + '<text x="320" y="326" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">filter</text>'
      + '<text x="320" y="356" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">solid from liquid</text>'
      + '<polygon points="482,206 578,206 568,252 492,252"/>'
      + '<path d="M 508 196 Q 496 174 510 152 Q 520 136 512 120"/>'
      + '<path d="M 552 196 Q 540 174 554 152 Q 564 136 556 120"/>'
      + '<polygon points="506,240 515,240 515,249 506,249"/>'
      + '<polygon points="524,240 533,240 533,249 524,249"/>'
      + '<polygon points="542,240 551,240 551,249 542,249"/>'
      + '<line x1="486" y1="300" x2="574" y2="300"/>'
      + '<polygon points="486,300 496,266 506,300"/>'
      + '<polygon points="520,300 530,266 540,300"/>'
      + '<polygon points="554,300 564,266 574,300"/>'
      + '<text x="530" y="326" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">boil it away</text>'
      + '<text x="530" y="356" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">dissolved from liquid</text>'
      + '</svg>',
  },
  tables: [{
    caption: 'Which difference each way of separating uses',
    columns: ['Mixture', 'What is different', 'What to do'],
    rows: [
      ['Stones in rice', 'Size and weight', 'Pick them out, or sieve'],
      ['Sand in water', 'Sand does not dissolve', 'Filter it'],
      ['Salt in water', 'Salt does not evaporate', 'Boil the water away'],
      ['Iron filings in sand', 'Iron is pulled by a magnet', 'Use a magnet'],
    ],
    note: 'Filtering cannot take out the salt, because dissolved salt goes '
      + 'through the paper with the water.',
  }],
  questions: [
    {
      id: 'mx-1',
      ask: 'How would you separate sand from water?',
      kind: 'choice',
      options: ['Filter it', 'Boil it', 'Use a magnet'],
      answer: 'Filter it',
      teach: 'Sand does not dissolve, so paper or cloth holds it back '
        + 'while the water passes through.',
      level: 3,
    },
    {
      id: 'mx-2',
      ask: 'Salt is dissolved in water. Will filtering remove it?',
      kind: 'choice',
      options: ['Yes', 'No'],
      answer: 'No',
      teach: 'Dissolved salt is spread right through the water '
        + 'and passes through the paper with it.',
      level: 4,
    },
    {
      id: 'mx-3',
      ask: 'What question should you ask before separating a mixture?',
      kind: 'choice',
      options: [
        'What is different about the parts?',
        'Which method is easiest?',
        'How much is there?',
      ],
      answer: 'What is different about the parts?',
      teach: 'Every method works by using a difference. '
        + 'Find the difference and the method follows.',
      level: 5,
    },
    {
      id: 'mx-4',
      ask: 'How would you separate stones from rice?',
      kind: 'choice',
      options: ['Filter it through paper', 'Pick them out by hand', 'Boil it'],
      answer: 'Pick them out by hand',
      teach: 'The stones are big enough to see and hold, '
        + 'so the difference in size lets your fingers do the job. '
        + 'Filtering is for a solid sitting in a liquid.',
      level: 1,
    },
    {
      id: 'mx-5',
      ask: 'How would you take iron filings out of sand?',
      kind: 'choice',
      options: ['Boil it', 'Add water', 'Use a magnet'],
      answer: 'Use a magnet',
      teach: 'Iron is pulled by a magnet and sand is not. '
        + 'That difference is the one to use.',
      level: 1,
    },
    {
      id: 'mx-6',
      ask: 'Why does a sieve separate a mixture?',
      kind: 'choice',
      options: [
        'Big pieces stay on the mesh and small ones fall through',
        'The sieve melts the small pieces',
        'The sieve pulls on iron',
      ],
      answer: 'Big pieces stay on the mesh and small ones fall through',
      teach: 'Sieving uses a difference in size. '
        + 'The holes are big enough for the small pieces '
        + 'and too small for the big ones.',
      level: 2,
    },
    {
      id: 'mx-7',
      ask: 'Why does filtering separate sand from water?',
      kind: 'choice',
      options: [
        'The sand dissolves into the paper',
        'Paper lets the water through and holds the sand back',
        'The water turns to steam in the paper',
      ],
      answer: 'Paper lets the water through and holds the sand back',
      teach: 'Sand does not dissolve, so it stays as solid bits in the water. '
        + 'The paper catches those bits and lets the liquid pass.',
      level: 2,
    },
    {
      id: 'mx-8',
      ask: 'Rice and stones are mixed in a bowl. What are they now?',
      kind: 'choice',
      options: [
        'A new substance',
        'Still rice and still stones',
        'Only rice, because the stones are hidden',
      ],
      answer: 'Still rice and still stones',
      teach: 'In a mixture each part keeps being itself. '
        + 'Nothing has changed, which is why you can separate them again.',
      level: 2,
    },
    {
      id: 'mx-9',
      ask: 'Salt has dissolved in a pot of water. How do you get the salt back?',
      kind: 'choice',
      options: [
        'Let the water evaporate, and the salt stays behind',
        'Pour it through a filter',
        'Pick the salt out with your fingers',
      ],
      answer: 'Let the water evaporate, and the salt stays behind',
      teach: 'Filtering fails because dissolved salt goes through the paper. '
        + 'Use a different difference: water evaporates and salt does not.',
      level: 3,
    },
    {
      id: 'mx-10',
      ask: 'Kofi filters muddy water through cloth until it looks clear. '
        + 'Is it safe to drink now?',
      kind: 'choice',
      options: [
        'Yes, it looks clear',
        'Yes, if he filters it twice',
        'No, germs pass through, so it must still be boiled',
      ],
      answer: 'No, germs pass through, so it must still be boiled',
      teach: 'Filtering takes out what you can see. '
        + 'Germs are far too small for the holes in cloth, '
        + 'so filtered water still has to be boiled.',
      level: 3,
    },
  ],
})

/* ── weather and climate ──────────────────────────────────────────────────── */

teach({
  topicId: 'weather-climate-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Weather is what it is doing today. '
      + 'Climate is what it usually does over many years. '
      + 'One wet day does not change a climate.',
    method: [
      'Record the weather at the same time each day.',
      'Note temperature, rain, wind and cloud.',
      'After many years of records, the pattern is the climate.',
    ],
  },

  why:
    'A farmer near Techiman wants to plant his maize. '
    + 'If he plants and no rain comes for three weeks, the young '
    + 'plants die. '
    + 'Today the sky is clear and the sun is hot. '
    + 'Is this the start of the dry season, or is it one dry day '
    + 'inside the rainy season? '
    + 'Looking up at today’s sky cannot tell him which.',

  notation:
    'Temperature is written 28 °C and said “twenty-eight degrees '
    + 'Celsius”. '
    + 'The small circle is the degree sign, and the C stands for '
    + 'Celsius. '
    + 'Rain is written in millimetres, so 12 mm is said “twelve '
    + 'millimetres”, and it means rain that would stand 12 '
    + 'millimetres deep in a tin. '
    + 'Write the unit every time. '
    + 'A bare 28 does not say whether you mean the heat or the rain, '
    + 'and that is the commonest way to lose a mark here.',

  idea:
    'Weather is what the sky is doing today: hot, raining, windy. '
    + 'Climate is what it usually does in a place, '
    + 'worked out from many years of weather. '
    + 'Ghana’s south has a wet climate. '
    + 'A dry week there is still just weather.',

  mechanism:
    'The difference matters because people confuse the two constantly. '
    + 'A single cold morning does not mean the climate has changed, '
    + 'and a single hot one does not either. '
    + 'Climate is a pattern, and you can only see a pattern across years. '
    + 'This is why keeping records matters: '
    + 'nobody remembers last March accurately, '
    + 'and a written record does. '
    + 'One day is a fact. Thirty years of days is a climate.',

  recap:
    'Rain does not fall the same way everywhere in Ghana. '
    + 'Kumasi, in the south, gets rain in most months of the year. '
    + 'Bolgatanga, in the north, gets almost none from November to '
    + 'March. '
    + 'That is why cocoa grows in the south and millet grows in the '
    + 'north. '
    + 'A difference that holds for many years like this is a '
    + 'difference of climate, not a difference of weather.',

  method: [
    'Choose a time of day and keep to it.',
    'Each day, record: temperature, rain or none, wind, cloud.',
    'Write it in a table, one row per day.',
    'At the end of the week, look for a pattern.',
    'Remember a week shows weather, not climate.',
    'Compare your week with the same week a year ago if you can.',
  ],

  worked: [
    {
      level: 3,
      ask: 'It rained today. Is that weather or climate?',
      steps: [
        'It is one day.',
      ],
      answer: 'Weather.',
    },
    {
      level: 4,
      ask: 'Why record at the same time each day?',
      steps: [
        'It is cooler in the morning than at noon.',
        'Comparing a morning with a noon tells you about the time, not the '
          + 'weather.',
      ],
      answer: 'So the readings can be compared fairly with each other.',
    },
    {
      level: 5,
      ask: 'Somebody says one very hot year proves the climate has changed. '
        + 'Are they right?',
      steps: [
        'Climate is a pattern over many years.',
        'One year is one point.',
        'A pattern needs many points.',
      ],
      answer: 'Not from one year alone. '
        + 'A change in climate shows as a trend across many years.',
    },
  ],

  traps: [
    {
      mistake: 'Calling one unusual day a change in climate.',
      why: 'Weather varies all the time. '
        + 'Climate is the pattern underneath it.',
    },
    {
      mistake: 'Recording at different times of day.',
      why: 'Then you are measuring the time of day as much as the weather.',
    },
    {
      mistake: 'Trusting memory instead of records.',
      why: 'Nobody remembers the weather of a year ago accurately. '
        + 'Written records are the whole point.',
    },
  ],

  extension:
    'Climate can change, and the evidence for it is exactly this kind of '
    + 'record kept for a very long time in many places. '
    + 'It is not that any one hot year proves anything. '
    + 'It is that the average of thousands of records has moved.',

  figure: {
    alt: 'A graph of temperature against years. A jagged line jumps up and '
      + 'down from year to year, and a smooth green line drawn through it '
      + 'slopes gently upward. One high point of the jagged line is ringed '
      + 'in red and labelled one hot day, and the key under the graph says '
      + 'the green line is the pattern across many years.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="42" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">one day is a fact, many years '
      + 'are a climate</text><line x1="80" y1="80" x2="80" y2="300"/>'
      + '<line x1="80" y1="300" x2="610" y2="300"/>'
      + '<text x="80" y="72" font-size="19" text-anchor="start" '
      + 'fill="currentColor" stroke="none">temperature</text>'
      + '<text x="600" y="328" font-size="19" text-anchor="end" '
      + 'fill="currentColor" stroke="none">years</text>'
      + '<polyline points="90,235 100,250 110,213 120,216 130,182 140,190 '
      + '150,211 160,213 170,249 180,222 190,220 200,196 210,174 220,200 '
      + '230,193 240,233 250,230 260,218 270,214 280,171 290,189 300,181 '
      + '310,207 320,231 330,214 340,226 350,182 360,180 370,178 380,179 '
      + '390,221 400,209 410,227 420,201 430,175 440,180 450,160 460,201 '
      + '470,203 480,216 490,218 500,178 510,184 520,154 530,175 540,195 '
      + '550,199 560,225 570,188 580,186 590,162"/>'
      + '<line x1="90" y1="214" x2="590" y2="183" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<circle cx="280" cy="171" r="15" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<line x1="296" y1="163" x2="348" y2="131" stroke="#c8433a"/>'
      + '<text x="354" y="127" font-size="19" text-anchor="start" '
      + 'fill="#c8433a" stroke="none">one hot day</text>'
      + '<line x1="90" y1="358" x2="134" y2="358" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="142" y="364" font-size="19" text-anchor="start" '
      + 'fill="#0f8a4d" stroke="none">the pattern across many years</text>'
      + '</svg>',
  },
  questions: [
    {
      id: 'wcl-1',
      ask: 'Rain today is an example of:',
      kind: 'choice',
      options: ['Weather', 'Climate'],
      answer: 'Weather',
      teach: 'One day is weather. Climate is the pattern across many years.',
      level: 3,
    },
    {
      id: 'wcl-2',
      ask: 'Why record the weather at the same time each day?',
      kind: 'choice',
      options: [
        'So the readings can be compared fairly',
        'So you do not forget',
        'Because mornings are best',
      ],
      answer: 'So the readings can be compared fairly',
      teach: 'Morning is cooler than noon. '
        + 'Mixing the times measures the clock, not the weather.',
      level: 4,
    },
    {
      id: 'wcl-3',
      ask: 'Does one very hot year prove the climate has changed?',
      kind: 'choice',
      options: ['Yes', 'No, a pattern needs many years'],
      answer: 'No, a pattern needs many years',
      teach: 'One year is one point. '
        + 'A climate is what the average does over decades.',
      level: 5,
    },
    {
      id: 'wcl-4',
      ask: 'What is climate?',
      kind: 'choice',
      options: [
        'What the weather is doing today',
        'What the weather usually does in a place over many years',
        'The weather forecast for tomorrow',
      ],
      answer: 'What the weather usually does in a place over many years',
      teach: 'Today’s sky is weather. '
        + 'Climate is the pattern you find in many years of weather records.',
      level: 1,
    },
    {
      id: 'wcl-5',
      ask: 'Which of these belongs in a daily weather record?',
      kind: 'choice',
      options: [
        'What you ate for breakfast',
        'The names of the trees nearby',
        'Temperature, rain, wind and cloud',
      ],
      answer: 'Temperature, rain, wind and cloud',
      teach: 'A weather record notes what the sky and air are doing: '
        + 'how hot, whether it rained, the wind and the cloud.',
      level: 1,
    },
    {
      id: 'wcl-6',
      ask: 'A reading says 28 °C. What does it measure?',
      kind: 'choice',
      options: ['How much rain fell', 'How hot it is', 'How fast the wind blows'],
      answer: 'How hot it is',
      teach: '°C means degrees Celsius, the unit for temperature. '
        + 'Rain is measured in millimetres instead.',
      level: 2,
    },
    {
      id: 'wcl-7',
      ask: 'What unit is rain measured in?',
      kind: 'choice',
      options: ['Degrees Celsius', 'Kilograms', 'Millimetres'],
      answer: 'Millimetres',
      teach: '12 mm of rain means rain that would stand 12 millimetres deep '
        + 'in a tin. Always write the unit, '
        + 'or a bare number could mean heat or rain.',
      level: 2,
    },
    {
      id: 'wcl-8',
      ask: 'Abena records rain for three days: Monday 12 mm, Tuesday 0 mm, '
        + 'Wednesday 5 mm. Which day was wettest?',
      kind: 'choice',
      options: ['Tuesday', 'Wednesday', 'Monday'],
      answer: 'Monday',
      teach: 'More millimetres means deeper rain in the tin. '
        + '12 mm is more than 5 mm, and 0 mm means no rain at all.',
      level: 2,
    },
    {
      id: 'wcl-9',
      ask: 'Cocoa grows in the south of Ghana and millet in the north. '
        + 'What explains this?',
      kind: 'choice',
      options: [
        'A difference in climate',
        'One rainy day in Kumasi',
        'Last week’s weather',
      ],
      answer: 'A difference in climate',
      teach: 'The south gets rain in most months, year after year. '
        + 'The north is dry from November to March. '
        + 'A difference that holds for many years is climate.',
      level: 2,
    },
    {
      id: 'wcl-10',
      ask: 'Ama keeps a weather record for one week and no rain falls. '
        + 'She says her town has a dry climate. Is she right?',
      kind: 'choice',
      options: [
        'Yes, a week is enough',
        'No, one week shows weather, not climate',
        'Yes, if she recorded at the same time each day',
      ],
      answer: 'No, one week shows weather, not climate',
      teach: 'A dry week in a wet place is still just weather. '
        + 'Climate can only be seen in records kept across many years.',
      level: 3,
    },
  ],
})

/* ── digestion ────────────────────────────────────────────────────────────── */

teach({
  topicId: 'digestion-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Food travels mouth, gullet, stomach, small intestine, large intestine. '
      + 'It is broken down so the body can absorb it. '
      + 'What is left leaves as waste.',
    method: [
      'Follow the food in order through each part.',
      'Say what happens to it at each stage.',
      'Absorbing happens mainly in the small intestine.',
    ],
  },

  why:
    'You eat a ball of kenkey at six in the morning and you feel '
    + 'full. '
    + 'By ten o’clock you are hungry again, and you have had the '
    + 'strength to walk to school and play. '
    + 'The kenkey has gone somewhere. '
    + 'Something out of it is now in your arms and your legs. '
    + 'How did a lump of kenkey get inside a muscle?',

  idea:
    'Food goes in at the mouth and travels a long tube through the body. '
    + 'Mouth, then gullet, then stomach, then small intestine, '
    + 'then large intestine. '
    + 'Along the way it is broken into pieces small enough for the body to '
    + 'take in.',

  mechanism:
    'The reason food must be broken down is simple: '
    + 'the body can only absorb very small pieces, '
    + 'and it absorbs them through the wall of the small intestine. '
    + 'A piece of yam is far too big to pass through anything. '
    + 'So chewing breaks it mechanically, '
    + 'and juices in the stomach and intestine break it chemically, '
    + 'until the useful parts are small enough to cross into the blood. '
    + 'Everything that cannot be broken down keeps going and leaves as waste. '
    + 'That is why chewing properly actually helps: '
    + 'you are doing the first stage for your stomach.',

  recap:
    'Food does three jobs in the body. '
    + 'Some food gives energy, like rice, yam and bread. '
    + 'Some food builds the body, like beans, fish and eggs. '
    + 'Some food guards the body against illness, like oranges and '
    + 'green leaves. '
    + 'None of those three jobs can start while the food is still a '
    + 'lump sitting in the bowl. '
    + 'This lesson is how the body gets at them.',

  method: [
    'Follow the food in order, from the mouth to the end of the tube.',
    'At each part, say what happens to the food there.',
    'Almost all the absorbing is in the small intestine.',
    'Whatever cannot be broken down leaves the body as waste.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which part absorbs most of the goodness from food?',
      steps: [
        'The stomach churns and breaks down.',
        'The small intestine is where absorbing happens.',
      ],
      answer: 'The small intestine.',
    },
    {
      level: 4,
      ask: 'Why does the body need to break food down at all?',
      steps: [
        'The body absorbs through the intestine wall.',
        'Only very small pieces can cross it.',
      ],
      answer: 'Because only very small pieces can pass into the blood.',
    },
    {
      level: 5,
      ask: 'Why does chewing properly help digestion?',
      steps: [
        'Chewing is the first breaking down.',
        'Smaller pieces give the juices more surface to work on.',
        'So the stomach has less to do and does it faster.',
      ],
      answer: 'It does the first stage for the stomach '
        + 'and gives the juices more surface to act on.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking the stomach does all the work.',
      why: 'It churns and breaks down, '
        + 'and most absorbing happens further along in the small intestine.',
    },
    {
      mistake: 'Thinking the small intestine is small.',
      why: 'It is narrow, not short. '
        + 'It is much longer than the large intestine.',
    },
    {
      mistake: 'Thinking all food is absorbed.',
      why: 'What cannot be broken down passes through and leaves as waste. '
        + 'That part still matters: it keeps things moving.',
    },
  ],

  extension:
    'The inside of the small intestine is folded into millions of tiny '
    + 'fingers, '
    + 'which gives it an enormous surface for absorbing. '
    + 'Spread flat it would cover far more than you would guess from the '
    + 'size of a person.',

  figure: {
    alt: 'The gut drawn as one long tube. Food enters at the mouth, goes '
      + 'down the gullet into the stomach, then through the coiled small '
      + 'intestine, then the wider large intestine, and what is left leaves '
      + 'at the end. Each part is named.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<circle cx="170" cy="60" r="22"/>'
      + '<text x="206" y="66" font-size="20" text-anchor="start" '
      + 'fill="currentColor" stroke="none">mouth</text>'
      + '<line x1="170" y1="82" x2="170" y2="146" stroke-width="13"/>'
      + '<text x="206" y="122" font-size="20" text-anchor="start" '
      + 'fill="currentColor" stroke="none">gullet</text>'
      + '<path d="M 170 146 Q 236 150 240 192 Q 242 230 190 234 Q 144 236 '
      + '142 192 Q 142 162 170 146 Z"/>'
      + '<text x="266" y="196" font-size="20" text-anchor="start" '
      + 'fill="currentColor" stroke="none">stomach</text>'
      + '<path d="M 190 234 Q 124 246 132 272 Q 142 298 206 290 Q 268 282 '
      + '270 308 Q 272 334 196 334" stroke-width="10"/>'
      + '<text x="300" y="292" font-size="20" text-anchor="start" '
      + 'fill="currentColor" stroke="none">small intestine</text>'
      + '<path d="M 196 334 Q 272 346 300 368" stroke-width="17"/>'
      + '<text x="336" y="374" font-size="20" text-anchor="start" '
      + 'fill="currentColor" stroke="none">large intestine</text>'
      + '<line x1="170" y1="24" x2="170" y2="44" stroke="#0f8a4d"/>'
      + '<polyline points="160,31 170,44 180,31" stroke="#0f8a4d"/>'
      + '<text x="170" y="20" font-size="18" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">food in</text></svg>',
  },
  tables: [{
    caption: 'What happens to food at each part of the gut',
    columns: ['Part', 'What happens there'],
    rows: [
      ['Mouth', 'Teeth break the food up and spit begins to soften it'],
      ['Gullet', 'Carries it down to the stomach'],
      ['Stomach', 'Churns it and adds juices'],
      [
        'Small intestine',
        'Breaks it down further, and takes the goodness into the blood',
      ],
      ['Large intestine', 'Takes back water from what is left'],
    ],
    note: 'Almost all the absorbing happens in the small intestine, which is '
      + 'narrow rather than short.',
  }],
  questions: [
    {
      id: 'dg-1',
      ask: 'Where does most absorbing happen?',
      kind: 'choice',
      options: ['The stomach', 'The small intestine', 'The gullet'],
      answer: 'The small intestine',
      teach: 'The stomach breaks food down. '
        + 'The small intestine takes the goodness into the blood.',
      level: 3,
    },
    {
      id: 'dg-2',
      ask: 'Why must food be broken into small pieces?',
      kind: 'choice',
      options: [
        'So it can pass through the intestine wall into the blood',
        'So it tastes better',
        'So it travels faster',
      ],
      answer: 'So it can pass through the intestine wall into the blood',
      teach: 'Absorbing happens through a wall, '
        + 'and only very small pieces can cross it.',
      level: 4,
    },
    {
      id: 'dg-3',
      ask: 'Why is the small intestine called small?',
      kind: 'choice',
      options: [
        'It is narrow, not short',
        'It is shorter than the large intestine',
        'It holds less food',
      ],
      answer: 'It is narrow, not short',
      teach: 'It is actually much longer than the large intestine. '
        + 'The name describes its width.',
      level: 5,
    },
    {
      id: 'dg-4',
      ask: 'In what order does food travel through the body?',
      kind: 'choice',
      options: [
        'Mouth, stomach, gullet, large intestine, small intestine',
        'Mouth, gullet, stomach, small intestine, large intestine',
        'Mouth, gullet, large intestine, stomach, small intestine',
      ],
      answer: 'Mouth, gullet, stomach, small intestine, large intestine',
      teach: 'The gullet comes before the stomach because it carries food down '
        + 'to it. The small intestine comes before the large one.',
      level: 1,
    },
    {
      id: 'dg-5',
      ask: 'Which part carries food from the mouth down to the stomach?',
      kind: 'choice',
      options: ['The windpipe', 'The large intestine', 'The gullet'],
      answer: 'The gullet',
      teach: 'The gullet is the food tube. '
        + 'The windpipe carries air to the lungs, a different tube.',
      level: 1,
    },
    {
      id: 'dg-6',
      ask: 'What happens to food in the mouth?',
      kind: 'choice',
      options: [
        'Teeth break it up and spit begins to soften it',
        'The goodness goes into the blood',
        'Water is taken back out of it',
      ],
      answer: 'Teeth break it up and spit begins to soften it',
      teach: 'The mouth does the first breaking down. '
        + 'Taking goodness into the blood happens later, '
        + 'in the small intestine.',
      level: 2,
    },
    {
      id: 'dg-7',
      ask: 'What does the stomach do to food?',
      kind: 'choice',
      options: [
        'Takes back water from what is left',
        'Churns it and adds juices',
        'Carries it down from the mouth',
      ],
      answer: 'Churns it and adds juices',
      teach: 'The stomach churns food and adds juices that break it down. '
        + 'Taking back water is the job of the large intestine.',
      level: 2,
    },
    {
      id: 'dg-8',
      ask: 'What does the large intestine do?',
      kind: 'choice',
      options: [
        'Takes back water from what is left',
        'Chews the food',
        'Takes most of the goodness into the blood',
      ],
      answer: 'Takes back water from what is left',
      teach: 'Most of the goodness has already been taken in by the small '
        + 'intestine. The large intestine takes back water from what remains.',
      level: 2,
    },
    {
      id: 'dg-9',
      ask: 'What happens to the parts of food that cannot be broken down?',
      kind: 'choice',
      options: [
        'They stay in the stomach for ever',
        'They go into the blood',
        'They keep going and leave the body as waste',
      ],
      answer: 'They keep going and leave the body as waste',
      teach: 'Only very small pieces can cross into the blood. '
        + 'Whatever cannot be broken down moves on and leaves as waste.',
      level: 2,
    },
    {
      id: 'dg-10',
      ask: 'How does the goodness from a ball of kenkey reach the muscles '
        + 'in your legs?',
      kind: 'choice',
      options: [
        'The stomach pushes it down into the legs',
        'It crosses the small intestine wall into the blood, '
          + 'and the blood carries it',
        'It travels down the gullet into the legs',
      ],
      answer: 'It crosses the small intestine wall into the blood, '
        + 'and the blood carries it',
      teach: 'The food is broken into tiny pieces. '
        + 'They pass through the wall of the small intestine into the blood, '
        + 'and the blood takes them all round the body.',
      level: 3,
    },
  ],
})

/* ── breathing ────────────────────────────────────────────────────────────── */

teach({
  topicId: 'breathing-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Air goes in through the nose, down the windpipe, into the lungs. '
      + 'The body takes oxygen out of it '
      + 'and puts carbon dioxide back in.',
    method: [
      'Follow the air: nose, windpipe, lungs.',
      'Oxygen crosses into the blood.',
      'Carbon dioxide crosses out and is breathed away.',
    ],
  },

  why:
    'Hold your breath and count slowly. '
    + 'Most people reach about forty and have to let go. '
    + 'You can go a whole day with no food, and a long hot morning '
    + 'with no water. '
    + 'You cannot go one minute with no air. '
    + 'So something in air is needed every minute of your life. '
    + 'What is it, and what is the body doing with it that cannot '
    + 'wait?',

  idea:
    'Air enters through the nose, travels down the windpipe '
    + 'and fills the lungs. '
    + 'The body takes oxygen out of that air. '
    + 'It puts a waste gas, carbon dioxide, back in, '
    + 'and you breathe it out.',

  mechanism:
    'Breathing is an exchange, not just a taking in. '
    + 'That is the part that is usually missed. '
    + 'The air you breathe out is not simply used up air: '
    + 'it is air that has had oxygen taken from it '
    + 'and waste gas added to it. '
    + 'Both directions happen in the same place and at the same time, '
    + 'across the thin walls inside the lungs. '
    + 'It is also why breathing through the nose is better than the mouth: '
    + 'the nose warms the air and traps dust before it reaches the lungs.',

  recap:
    'The small intestine is a long tube inside the body. '
    + 'Its wall is very thin, and there is blood on the other side of '
    + 'it. '
    + 'The goodness in food passes through that thin wall into the '
    + 'blood, and the blood carries it everywhere. '
    + 'A thin wall with blood behind it is how the body takes '
    + 'anything in at all. '
    + 'The lungs do the same thing, but with air instead of food.',

  method: [
    'Breathe in through the nose: the air is warmed and filtered.',
    'It passes down the windpipe.',
    'It fills the lungs, which spread it across a huge thin surface.',
    'Oxygen crosses into the blood.',
    'Carbon dioxide crosses out of the blood into the lungs.',
    'You breathe out, and the waste gas leaves.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What does the body take out of the air?',
      steps: [
        'Air is a mixture of gases.',
        'The body needs one of them.',
      ],
      answer: 'Oxygen.',
    },
    {
      level: 4,
      ask: 'Why is breathing through the nose better than through the mouth?',
      steps: [
        'The nose warms the air.',
        'It also traps dust in tiny hairs.',
        'The mouth does neither.',
      ],
      answer: 'Because the nose warms and filters the air first.',
    },
    {
      level: 5,
      ask: 'Is breathed out air just used up air?',
      steps: [
        'Oxygen was taken out of it.',
        'Carbon dioxide was added to it.',
        'So it has changed in two ways, not one.',
      ],
      answer: 'No. Something was removed and something else was put in. '
        + 'Breathing is an exchange.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking the lungs take in all of the air.',
      why: 'Only the oxygen is taken. '
        + 'Most of air is nitrogen, and that goes straight back out.',
    },
    {
      mistake: 'Thinking breathing out is only getting rid of old air.',
      why: 'It is carrying out a waste gas the body made. '
        + 'That is as important as taking oxygen in.',
    },
    {
      mistake: 'Thinking the windpipe goes to the stomach.',
      why: 'Food and air take different tubes. '
        + 'That is why choking happens when something goes down the wrong one.',
    },
  ],

  extension:
    'Smoke damages the tiny surfaces inside the lungs where the exchange '
    + 'happens. '
    + 'Less surface means less oxygen for the same effort, '
    + 'which is why it gets harder to climb stairs long before anything '
    + 'else shows.',

  figure: {
    alt: 'A head with the nose marked, a windpipe running down from it and '
      + 'splitting into two lungs. A green arrow points out of the lungs '
      + 'labelled oxygen into the blood, and a second arrow points into the '
      + 'lungs labelled carbon dioxide out of the blood, with a note that '
      + 'both happen at once in the same place.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<circle cx="150" cy="78" r="42"/>'
      + '<circle cx="138" cy="92" r="5" fill="currentColor"/>'
      + '<circle cx="162" cy="92" r="5" fill="currentColor"/>'
      + '<line x1="234" y1="92" x2="170" y2="92"/>'
      + '<text x="242" y="98" font-size="20" text-anchor="start" '
      + 'fill="currentColor" stroke="none">nose</text>'
      + '<line x1="150" y1="120" x2="150" y2="178" stroke-width="13"/>'
      + '<line x1="150" y1="178" x2="112" y2="208" stroke-width="11"/>'
      + '<line x1="150" y1="178" x2="188" y2="208" stroke-width="11"/>'
      + '<line x1="234" y1="148" x2="160" y2="148"/>'
      + '<text x="242" y="154" font-size="20" text-anchor="start" '
      + 'fill="currentColor" stroke="none">windpipe</text>'
      + '<path d="M 112 204 Q 62 242 70 302 Q 78 342 120 334 Q 144 328 142 '
      + '282 Q 140 234 112 204 Z"/>'
      + '<path d="M 188 204 Q 238 242 230 302 Q 222 342 180 334 Q 156 328 '
      + '158 282 Q 160 234 188 204 Z"/>'
      + '<text x="150" y="372" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">lungs</text>'
      + '<line x1="252" y1="248" x2="336" y2="248" stroke="#0f8a4d"/>'
      + '<polyline points="323,238 336,248 323,258" stroke="#0f8a4d"/>'
      + '<text x="346" y="254" font-size="19" text-anchor="start" '
      + 'fill="#0f8a4d" stroke="none">oxygen into the blood</text>'
      + '<line x1="336" y1="302" x2="252" y2="302"/>'
      + '<polyline points="265,292 252,302 265,312"/>'
      + '<text x="346" y="308" font-size="18" text-anchor="start" '
      + 'fill="currentColor" stroke="none">carbon dioxide out of the '
      + 'blood</text>'
      + '<text x="346" y="352" font-size="18" text-anchor="start" '
      + 'fill="currentColor" stroke="none">both at once, in the same '
      + 'place</text></svg>',
  },
  questions: [
    {
      id: 'br-1',
      ask: 'What gas does the body take from air?',
      kind: 'choice',
      options: ['Oxygen', 'Carbon dioxide', 'Nitrogen'],
      answer: 'Oxygen',
      teach: 'Oxygen crosses into the blood. '
        + 'Carbon dioxide is the waste gas that goes the other way.',
      level: 3,
    },
    {
      id: 'br-2',
      ask: 'Why breathe through your nose?',
      kind: 'choice',
      options: [
        'It warms and filters the air',
        'It is quieter',
        'It uses less effort',
      ],
      answer: 'It warms and filters the air',
      teach: 'Tiny hairs trap dust and the passage warms the air '
        + 'before it reaches the lungs.',
      level: 4,
    },
    {
      id: 'br-3',
      ask: 'Breathing is best described as:',
      kind: 'choice',
      options: [
        'An exchange of two gases',
        'Taking in air',
        'Getting rid of old air',
      ],
      answer: 'An exchange of two gases',
      teach: 'Oxygen comes in and carbon dioxide goes out, '
        + 'in the same place at the same time.',
      level: 5,
    },
    {
      id: 'br-4',
      ask: 'Which way does air travel when you breathe in?',
      kind: 'choice',
      options: [
        'Lungs, windpipe, nose',
        'Nose, windpipe, lungs',
        'Mouth, gullet, stomach',
      ],
      answer: 'Nose, windpipe, lungs',
      teach: 'Air comes in at the nose, goes down the windpipe and fills the '
        + 'lungs. Mouth, gullet and stomach is the road food takes.',
      level: 1,
    },
    {
      id: 'br-5',
      ask: 'Which waste gas do you breathe out?',
      kind: 'choice',
      options: ['Oxygen', 'Nitrogen', 'Carbon dioxide'],
      answer: 'Carbon dioxide',
      teach: 'The body takes oxygen in and puts carbon dioxide back into the '
        + 'lungs, to be breathed out.',
      level: 1,
    },
    {
      id: 'br-6',
      ask: 'Where does the windpipe lead?',
      kind: 'choice',
      options: ['To the stomach', 'To the lungs', 'To the small intestine'],
      answer: 'To the lungs',
      teach: 'Food and air take different tubes. '
        + 'The windpipe goes to the lungs; the gullet goes to the stomach.',
      level: 2,
    },
    {
      id: 'br-7',
      ask: 'Where do oxygen and carbon dioxide swap places?',
      kind: 'choice',
      options: [
        'Across the thin walls inside the lungs',
        'In the nose',
        'In the stomach',
      ],
      answer: 'Across the thin walls inside the lungs',
      teach: 'Inside the lungs, oxygen crosses into the blood '
        + 'and carbon dioxide crosses out, in the same place at the same time.',
      level: 2,
    },
    {
      id: 'br-8',
      ask: 'Most of the air you breathe in is nitrogen. What happens to it?',
      kind: 'choice',
      options: [
        'It goes into the blood',
        'It turns into oxygen',
        'It goes straight back out',
      ],
      answer: 'It goes straight back out',
      teach: 'The lungs do not take in all of the air. '
        + 'Only the oxygen is taken; the nitrogen is breathed out again.',
      level: 3,
    },
    {
      id: 'br-9',
      ask: 'How are the lungs like the small intestine?',
      kind: 'choice',
      options: [
        'Both take things in through a thin wall with blood behind it',
        'Both break food down',
        'Both are part of the food tube',
      ],
      answer: 'Both take things in through a thin wall with blood behind it',
      teach: 'The small intestine takes in food this way, '
        + 'and the lungs take in oxygen the same way.',
      level: 3,
    },
    {
      id: 'br-10',
      ask: 'Why does smoking make it harder to climb stairs?',
      kind: 'choice',
      options: [
        'It makes the legs heavier',
        'It damages the surfaces in the lungs, so less oxygen gets in',
        'It fills the stomach with smoke',
      ],
      answer: 'It damages the surfaces in the lungs, so less oxygen gets in',
      teach: 'Smoke harms the tiny surfaces where the exchange happens. '
        + 'Less surface means less oxygen for the same effort.',
      level: 3,
    },
  ],
})

/* ── food chains ──────────────────────────────────────────────────────────── */

teach({
  topicId: 'food-chains',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A food chain shows who eats whom. '
      + 'It starts with a plant. '
      + 'The arrow points the way the energy travels, from the eaten to the '
      + 'eater.',
    method: [
      'Start with a plant.',
      'Add what eats it, then what eats that.',
      'Point each arrow from the food towards the eater.',
    ],
  },

  why:
    'A farmer at Ejura sprays his maize to kill the grasshoppers '
    + 'eating it. '
    + 'The spray works and the grasshoppers die. '
    + 'A month later the lizards and hawks that used to sit on his '
    + 'fence are gone as well, and rats have got into his store. '
    + 'He killed one insect and lost three other animals. '
    + 'Why did taking out the grasshopper change animals he never '
    + 'touched?',

  notation:
    'A food chain is written with arrows: grass → grasshopper → '
    + 'lizard → hawk. '
    + 'Each arrow is said “is eaten by”, so that line is read “grass '
    + 'is eaten by the grasshopper, which is eaten by the lizard, '
    + 'which is eaten by the hawk”. '
    + 'The arrow points the way the food goes, from the one that is '
    + 'eaten to the one that eats it. '
    + 'Turning the arrows round is the commonest way to lose a mark.',

  idea:
    'A food chain shows what eats what. '
    + 'Grass, then grasshopper, then lizard, then hawk. '
    + 'Almost every chain begins with a plant, '
    + 'because plants are the only things that make their own food.',

  mechanism:
    'The arrows are the part everybody gets wrong, '
    + 'and the rule has a reason. '
    + 'An arrow points from the grass to the grasshopper, '
    + 'which looks backwards if you think of it as "eats". '
    + 'But the arrow is not showing eating. '
    + 'It is showing where the energy goes. '
    + 'Energy moves out of the grass and into the grasshopper, '
    + 'so the arrow points that way. '
    + 'Once you read arrows as energy rather than appetite, '
    + 'they are never confusing again.',

  recap:
    'A green leaf makes the plant’s own food. '
    + 'It uses light from the sun, water from the roots, and a gas it '
    + 'takes from the air. '
    + 'No animal can do this. '
    + 'A goat cannot stand in the sun and make food, so it has to eat '
    + 'a plant that did. '
    + 'That is why every food chain starts with a plant, and why the '
    + 'sun stands behind the whole of it.',

  method: [
    'Find a plant to start with.',
    'Ask what eats it.',
    'Ask what eats that.',
    'Keep going until nothing eats the last one.',
    'Draw each arrow from the food towards the eater.',
    'Check: every arrow should point the way the energy travels.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Build a food chain starting with grass.',
      steps: [
        'Grass is eaten by a grasshopper.',
        'The grasshopper is eaten by a lizard.',
        'The lizard is eaten by a hawk.',
      ],
      answer: 'Grass, grasshopper, lizard, hawk.',
    },
    {
      level: 4,
      ask: 'Which way does the arrow point between grass and grasshopper?',
      steps: [
        'The energy is in the grass.',
        'Eating moves it into the grasshopper.',
      ],
      answer: 'From the grass to the grasshopper, '
        + 'because that is the way the energy travels.',
    },
    {
      level: 5,
      ask: 'All the grasshoppers in an area die. '
        + 'What happens to the lizards and the grass?',
      steps: [
        'Lizards lose their food, so their numbers fall.',
        'Grass is no longer eaten by grasshoppers, so it grows more.',
        'Fewer lizards means hawks have less food too.',
      ],
      answer: 'Lizards and then hawks decline, and the grass grows thicker. '
        + 'Removing one link affects the whole chain in both directions.',
    },
  ],

  traps: [
    {
      mistake: 'Drawing the arrow from the eater to the food.',
      why: 'The arrow follows the energy, which moves into the eater. '
        + 'Think "goes to", not "eats".',
    },
    {
      mistake: 'Starting a chain with an animal.',
      why: 'Something has to make the food first, '
        + 'and only plants do that.',
    },
    {
      mistake: 'Thinking a chain only affects what is above it.',
      why: 'Remove the grasshoppers and the grass changes too. '
        + 'Effects run both ways.',
    },
  ],

  extension:
    'Real habitats are webs rather than chains, '
    + 'because most animals eat several things and are eaten by several. '
    + 'A web is harder to draw and much harder to break, '
    + 'because when one food runs out there are others.',

  figure: {
    alt: 'A food chain drawn left to right as four named boxes, grass, '
      + 'grasshopper, lizard and hawk, joined by green arrows that point '
      + 'from the food towards the eater. The sun is drawn above the grass '
      + 'with a green dotted arrow down to it. Above the chain it says the '
      + 'arrow points the way the energy goes, and below it says every '
      + 'chain starts with a plant.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="44" font-size="22" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">the arrow points the way the energy '
      + 'goes</text><circle cx="77" cy="110" r="22"/>'
      + '<line x1="107" y1="110" x2="119" y2="110"/>'
      + '<line x1="98" y1="131" x2="107" y2="140"/>'
      + '<line x1="77" y1="140" x2="77" y2="152"/>'
      + '<line x1="56" y1="131" x2="47" y2="140"/>'
      + '<line x1="47" y1="110" x2="35" y2="110"/>'
      + '<line x1="56" y1="89" x2="47" y2="80"/>'
      + '<line x1="77" y1="80" x2="77" y2="68"/>'
      + '<line x1="98" y1="89" x2="107" y2="80"/>'
      + '<text x="150" y="116" font-size="18" text-anchor="start" '
      + 'fill="currentColor" stroke="none">the sun</text>'
      + '<line x1="77" y1="156" x2="77" y2="186" stroke="#0f8a4d" '
      + 'stroke-width="3" stroke-dasharray="7 7"/>'
      + '<polyline points="69,176 77,194 85,176" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<polygon points="15,200 139,200 139,270 15,270"/>'
      + '<text x="77" y="242" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">grass</text>'
      + '<polygon points="177,200 301,200 301,270 177,270"/>'
      + '<text x="239" y="242" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">grasshopper</text>'
      + '<line x1="143" y1="235" x2="173" y2="235" stroke="#0f8a4d"/>'
      + '<polyline points="160,225 173,235 160,245" stroke="#0f8a4d"/>'
      + '<polygon points="339,200 463,200 463,270 339,270"/>'
      + '<text x="401" y="242" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">lizard</text>'
      + '<line x1="305" y1="235" x2="335" y2="235" stroke="#0f8a4d"/>'
      + '<polyline points="322,225 335,235 322,245" stroke="#0f8a4d"/>'
      + '<polygon points="501,200 625,200 625,270 501,270"/>'
      + '<text x="563" y="242" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">hawk</text>'
      + '<line x1="467" y1="235" x2="497" y2="235" stroke="#0f8a4d"/>'
      + '<polyline points="484,225 497,235 484,245" stroke="#0f8a4d"/>'
      + '<text x="320" y="330" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">every chain starts with a '
      + 'plant</text></svg>',
  },
  questions: [
    {
      id: 'fc-1',
      ask: 'What does almost every food chain start with?',
      kind: 'choice',
      options: ['A plant', 'A small animal', 'The sun'],
      answer: 'A plant',
      teach: 'Only plants make their own food, '
        + 'so the chain of eating starts with them.',
      level: 3,
    },
    {
      id: 'fc-2',
      ask: 'Which way does the arrow point, grass to grasshopper or '
        + 'grasshopper to grass?',
      kind: 'choice',
      options: ['Grass to grasshopper', 'Grasshopper to grass'],
      answer: 'Grass to grasshopper',
      teach: 'The arrow follows the energy, '
        + 'which moves out of the grass and into the animal eating it.',
      level: 4,
    },
    {
      id: 'fc-3',
      ask: 'If the grasshoppers die out, what happens to the grass?',
      kind: 'choice',
      options: [
        'It grows thicker because less is eaten',
        'It dies too',
        'Nothing changes',
      ],
      answer: 'It grows thicker because less is eaten',
      teach: 'Effects run down the chain as well as up it. '
        + 'The animals above lose food and the plant below loses a grazer.',
      level: 5,
    },
    {
      id: 'fc-4',
      ask: 'In a food chain, how is the arrow → read?',
      kind: 'choice',
      options: ['"eats"', '"is eaten by"', '"is bigger than"'],
      answer: '"is eaten by"',
      teach: 'Grass → grasshopper is read "grass is eaten by the '
        + 'grasshopper". Reading it as "eats" turns the chain backwards.',
      level: 1,
    },
    {
      id: 'fc-5',
      ask: 'In grass → grasshopper → lizard → hawk, what eats the lizard?',
      kind: 'choice',
      options: ['The grasshopper', 'The hawk', 'The grass'],
      answer: 'The hawk',
      teach: 'Follow the arrow out of the lizard: it points to the hawk. '
        + 'The lizard is eaten by the hawk.',
      level: 1,
    },
    {
      id: 'fc-6',
      ask: 'Which food chain is written correctly?',
      kind: 'choice',
      options: [
        'Hawk → lizard → grasshopper → grass',
        'Grass → grasshopper → lizard → hawk',
        'Lizard → grass → hawk → grasshopper',
      ],
      answer: 'Grass → grasshopper → lizard → hawk',
      teach: 'Start with the plant and point each arrow from the food to the '
        + 'eater. The hawk-first chain has every arrow turned round.',
      level: 2,
    },
    {
      id: 'fc-7',
      ask: 'Why does almost every food chain begin with a plant?',
      kind: 'choice',
      options: [
        'Plants are the smallest living things',
        'Plants are always green',
        'Plants make their own food, and animals cannot',
      ],
      answer: 'Plants make their own food, and animals cannot',
      teach: 'A green leaf makes food from sunlight, water and a gas from the '
        + 'air. An animal has to eat a plant, or eat something that did.',
      level: 2,
    },
    {
      id: 'fc-8',
      ask: 'What does the arrow in a food chain really show?',
      kind: 'choice',
      options: [
        'Which animal is bigger',
        'Which way the animal runs',
        'Which way the energy goes',
      ],
      answer: 'Which way the energy goes',
      teach: 'Energy moves out of the food and into the eater, '
        + 'so the arrow points from the food to the eater.',
      level: 2,
    },
    {
      id: 'fc-9',
      ask: 'Where does the energy in a food chain first come from?',
      kind: 'choice',
      options: ['The hawk', 'The sun', 'The soil'],
      answer: 'The sun',
      teach: 'The plant uses light from the sun to make its food. '
        + 'So the sun stands behind the whole chain.',
      level: 3,
    },
    {
      id: 'fc-10',
      ask: 'A farmer kills all the grasshoppers on his farm. '
        + 'Later the lizards and hawks are gone too. Why?',
      kind: 'choice',
      options: [
        'The lizards lost their food, and then the hawks lost the lizards',
        'The hawks ate all the grass',
        'The lizards and hawks were afraid of the farmer',
      ],
      answer: 'The lizards lost their food, and then the hawks lost the lizards',
      teach: 'Removing one link affects the whole chain. '
        + 'With no grasshoppers, lizards go hungry, '
        + 'and with fewer lizards, hawks go hungry too.',
      level: 3,
    },
  ],
})

/* ── light and shadows ────────────────────────────────────────────────────── */

teach({
  topicId: 'light-and-shadow',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Light travels in straight lines. '
      + 'A shadow is where an object blocks it. '
      + 'Move the light closer and the shadow grows.',
    method: [
      'Put an object between a light and a wall.',
      'Move the light closer: the shadow grows.',
      'Move it further: the shadow shrinks.',
    ],
  },

  why:
    'At seven in the morning your shadow on the school compound is '
    + 'longer than you are tall. '
    + 'By noon it is a short dark patch under your feet. '
    + 'By four o’clock it is long again, and it falls on the other '
    + 'side. '
    + 'Nobody moved the sun, and you did not change height. '
    + 'So why did your own shadow change length and swap sides?',

  idea:
    'Light travels in straight lines. '
    + 'When something solid gets in the way, '
    + 'the light cannot bend round it, '
    + 'so there is a dark patch behind it. '
    + 'That patch is a shadow.',

  mechanism:
    'Everything about shadows follows from light going straight. '
    + 'A shadow has the shape of the object because the blocked rays '
    + 'form the same outline. '
    + 'Move the light closer and the rays spread more steeply past the edges, '
    + 'so the shadow grows. '
    + 'Move it further away and the rays arrive more nearly parallel, '
    + 'so the shadow shrinks towards the object’s real size. '
    + 'You can predict any of this without an experiment '
    + 'once you believe the straight lines.',

  recap:
    'The sun does not travel across the sky. '
    + 'The Earth turns, once every day, and we turn round with it. '
    + 'In the morning we face the sun from one side, at noon from '
    + 'underneath, and in the evening from the other side. '
    + 'So the sun seems to rise, cross over and set, while what is '
    + 'really moving is us. '
    + 'That turning is why a shadow outdoors moves and changes its '
    + 'length all day.',

  method: [
    'Set up a light, an object and a wall in a line.',
    'Look at the shadow: it has the outline of the object.',
    'Move the light closer and watch the shadow grow.',
    'Move it further and watch it shrink.',
    'Move the light to the side and watch the shadow move the other way.',
    'Outdoors, the sun does this across the day as the Earth turns.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Why is there a shadow behind an object?',
      steps: [
        'Light goes in straight lines.',
        'It cannot bend round the object.',
      ],
      answer: 'Because the object blocks the light and it cannot bend round.',
    },
    {
      level: 4,
      ask: 'You move a torch closer to a cup. What happens to the shadow?',
      steps: [
        'Closer light means the rays spread more steeply past the edges.',
      ],
      answer: 'The shadow gets bigger.',
    },
    {
      level: 5,
      ask: 'Why is your shadow long in the early morning and short at midday?',
      steps: [
        'In the morning the sun is low, so light comes in at a shallow angle.',
        'A shallow angle throws the shadow far along the ground.',
        'At midday the sun is high and the light comes down steeply.',
      ],
      answer: 'Because the sun’s angle changes as the Earth turns, '
        + 'and a low sun throws a long shadow.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking light bends round corners.',
      why: 'It travels straight, which is exactly why shadows exist at all.',
    },
    {
      mistake: 'Thinking a shadow is a reflection.',
      why: 'A reflection is light bouncing back. '
        + 'A shadow is light that never arrived.',
    },
    {
      mistake: 'Expecting the shadow to be the same size as the object.',
      why: 'It depends on how far the light is. '
        + 'Only a very distant light gives a shadow close to true size.',
    },
  ],

  extension:
    'Before clocks, people told the time by the length and direction of a '
    + 'shadow, using a sundial. '
    + 'It works anywhere the sun shines and needs no parts, '
    + 'and it fails at night and under cloud, '
    + 'which is the whole history of timekeeping in one sentence.',

  figure: {
    alt: 'A lamp, an upright object and a wall in a line. Straight rays from '
      + 'the far lamp just graze the top and bottom of the object and mark '
      + 'a shadow on the wall. Dotted green rays from a second lamp placed '
      + 'nearer the object spread more steeply and mark a taller green '
      + 'shadow. Under it says move the light closer and the shadow grows.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<line x1="560" y1="56" x2="560" y2="344" stroke-width="4"/>'
      + '<text x="596" y="70" font-size="19" text-anchor="end" '
      + 'fill="currentColor" stroke="none">wall</text>'
      + '<polygon points="324,160 338,160 338,240 324,240"/>'
      + '<text x="331" y="268" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">object</text>'
      + '<circle cx="70" cy="200" r="18"/>'
      + '<line x1="94" y1="200" x2="106" y2="200"/>'
      + '<line x1="87" y1="217" x2="95" y2="225"/>'
      + '<line x1="70" y1="224" x2="70" y2="236"/>'
      + '<line x1="53" y1="217" x2="45" y2="225"/>'
      + '<line x1="46" y1="200" x2="34" y2="200"/>'
      + '<line x1="53" y1="183" x2="45" y2="175"/>'
      + '<line x1="70" y1="176" x2="70" y2="164"/>'
      + '<line x1="87" y1="183" x2="95" y2="175"/>'
      + '<line x1="70" y1="200" x2="560" y2="125"/>'
      + '<line x1="70" y1="200" x2="560" y2="275"/>'
      + '<text x="96" y="258" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">lamp far away</text>'
      + '<line x1="556" y1="125" x2="556" y2="275" stroke-width="9"/>'
      + '<circle cx="200" cy="200" r="15" stroke="#0f8a4d" '
      + 'stroke-width="3"/><line x1="221" y1="200" x2="231" y2="200"/>'
      + '<line x1="215" y1="215" x2="222" y2="222"/>'
      + '<line x1="200" y1="221" x2="200" y2="231"/>'
      + '<line x1="185" y1="215" x2="178" y2="222"/>'
      + '<line x1="179" y1="200" x2="169" y2="200"/>'
      + '<line x1="185" y1="185" x2="178" y2="178"/>'
      + '<line x1="200" y1="179" x2="200" y2="169"/>'
      + '<line x1="215" y1="185" x2="222" y2="178"/>'
      + '<line x1="200" y1="200" x2="560" y2="89" stroke="#0f8a4d" '
      + 'stroke-width="2" stroke-dasharray="7 7"/>'
      + '<line x1="200" y1="200" x2="560" y2="311" stroke="#0f8a4d" '
      + 'stroke-width="2" stroke-dasharray="7 7"/>'
      + '<text x="200" y="252" font-size="19" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">lamp near</text>'
      + '<line x1="572" y1="89" x2="572" y2="311" stroke="#0f8a4d" '
      + 'stroke-width="9"/>'
      + '<text x="320" y="376" font-size="22" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">move the light closer and the shadow '
      + 'grows</text></svg>',
  },
  questions: [
    {
      id: 'ls-1',
      ask: 'Why does an object cast a shadow?',
      kind: 'choice',
      options: [
        'It blocks light, which travels in straight lines',
        'It absorbs all light',
        'It reflects light backwards',
      ],
      answer: 'It blocks light, which travels in straight lines',
      teach: 'Light cannot bend round the object, '
        + 'so the area behind it gets none.',
      level: 3,
    },
    {
      id: 'ls-2',
      ask: 'Moving a torch closer to an object makes the shadow:',
      kind: 'choice',
      options: ['Bigger', 'Smaller', 'The same'],
      answer: 'Bigger',
      teach: 'The rays spread more steeply past the edges when the light is '
        + 'near.',
      level: 4,
    },
    {
      id: 'ls-3',
      ask: 'Why is your shadow longest early and late in the day?',
      kind: 'choice',
      options: [
        'The sun is low, so light comes in at a shallow angle',
        'You are taller in the morning',
        'The air is cooler',
      ],
      answer: 'The sun is low, so light comes in at a shallow angle',
      teach: 'A shallow angle throws the shadow far along the ground. '
        + 'At midday the light comes down steeply.',
      level: 5,
    },
    {
      id: 'ls-4',
      ask: 'How does light travel?',
      kind: 'choice',
      options: ['In curves round corners', 'In straight lines', 'In circles'],
      answer: 'In straight lines',
      teach: 'Light goes straight and cannot bend round an object. '
        + 'That is why there is a dark patch behind it.',
      level: 1,
    },
    {
      id: 'ls-5',
      ask: 'What shape is the shadow of an object?',
      kind: 'choice',
      options: [
        'Always a circle',
        'The shape of the light',
        'The outline of the object',
      ],
      answer: 'The outline of the object',
      teach: 'The blocked rays form the same outline as the object, '
        + 'so the shadow has its shape.',
      level: 1,
    },
    {
      id: 'ls-6',
      ask: 'Moving a torch further away from an object makes the shadow:',
      kind: 'choice',
      options: ['Bigger', 'Smaller', 'Disappear'],
      answer: 'Smaller',
      teach: 'Further away, the rays arrive more nearly side by side, '
        + 'so the shadow shrinks towards the object’s real size.',
      level: 2,
    },
    {
      id: 'ls-7',
      ask: 'What is your shadow like at noon?',
      kind: 'choice',
      options: [
        'Longer than you are tall',
        'Short, because the sun is high',
        'Long, because the sun is low',
      ],
      answer: 'Short, because the sun is high',
      teach: 'At noon the light comes down steeply, '
        + 'so the shadow is a short patch under your feet. '
        + 'Long shadows come in the morning and evening, when the sun is low.',
      level: 2,
    },
    {
      id: 'ls-8',
      ask: 'Why does the sun seem to move across the sky each day?',
      kind: 'choice',
      options: [
        'The Earth turns, and we turn with it',
        'The sun travels round the Earth',
        'The wind pushes the sun',
      ],
      answer: 'The Earth turns, and we turn with it',
      teach: 'The sun does not travel across the sky. '
        + 'The Earth turns once a day, which makes the sun seem to rise and set.',
      level: 2,
    },
    {
      id: 'ls-9',
      ask: 'A torch shines on a cup from the left. '
        + 'You move the torch further to the left side. '
        + 'Which way does the shadow move?',
      kind: 'choice',
      options: ['To the left', 'It does not move', 'To the right'],
      answer: 'To the right',
      teach: 'Light goes straight, so the shadow always falls on the side away '
        + 'from the light. Move the light one way and the shadow moves '
        + 'the other way.',
      level: 3,
    },
    {
      id: 'ls-10',
      ask: 'What is the difference between a shadow and a reflection?',
      kind: 'choice',
      options: [
        'A shadow is light that never arrived; a reflection is light '
          + 'bouncing back',
        'They are the same thing',
        'A shadow is light bouncing back; a reflection is light that never '
          + 'arrived',
      ],
      answer: 'A shadow is light that never arrived; a reflection is light '
        + 'bouncing back',
      teach: 'A mirror sends light back to you. '
        + 'A shadow is the place the light could not reach '
        + 'because something blocked it.',
      level: 3,
    },
  ],
})

/* ── heat ─────────────────────────────────────────────────────────────────── */

teach({
  topicId: 'heat-transfer-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Heat always moves from hotter to cooler. '
      + 'Metals carry heat well and are called conductors. '
      + 'Wood, plastic and air carry it poorly and are insulators.',
    method: [
      'Find which side is hotter.',
      'Heat moves from there to the cooler side.',
      'Metal speeds it up, wood and air slow it down.',
    ],
  },

  why:
    'You are stirring hot soup on a coal pot with a metal spoon. '
    + 'You stand the spoon in the pot and go to fetch salt. '
    + 'When you come back and take hold of the spoon, it burns your '
    + 'hand. '
    + 'The fire never touched the handle. '
    + 'The handle was never down in the soup. '
    + 'So how did the heat get all the way up there?',

  idea:
    'Heat moves from the hotter thing to the cooler one, always. '
    + 'Put a metal spoon in hot soup and the handle warms. '
    + 'A wooden spoon does not.',

  mechanism:
    'Heat moving from hot to cold is the rule with no exceptions, '
    + 'and it explains something that sounds wrong. '
    + 'A metal bench feels colder than a wooden one on the same morning, '
    + 'even though both are the same temperature. '
    + 'The metal is not colder. '
    + 'It is pulling heat out of your hand faster, '
    + 'because it conducts well. '
    + 'What you feel is not temperature. '
    + 'It is how quickly heat is leaving you.',

  recap:
    'Heat is what makes a thing hot. '
    + 'Put heat into ice and it turns into water. '
    + 'Put more heat into that water and it turns into steam. '
    + 'So heat going into a thing changes the thing. '
    + 'This lesson asks a different question: how does the heat get '
    + 'from one place to another in the first place?',

  method: [
    'Decide which thing is hotter.',
    'Heat will move from it to the cooler thing.',
    'To move heat quickly use a conductor. To stop it use an insulator.',
    'Still air is a good insulator, '
      + 'which is why loose cloth keeps you warm.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Why does a metal spoon in hot soup get hot at the handle?',
      steps: [
        'The soup is hotter than the spoon.',
        'Heat moves from hot to cold.',
        'Metal carries it quickly along the spoon.',
      ],
      answer: 'Because metal is a good conductor and carries the heat up it.',
    },
    {
      level: 4,
      ask: 'Why are cooking pot handles often wood or plastic?',
      steps: [
        'The pot must conduct heat into the food.',
        'The handle must not conduct heat into your hand.',
      ],
      answer: 'Because those are insulators, so the handle stays cool enough '
        + 'to hold.',
    },
    {
      level: 5,
      ask: 'A metal bench and a wooden bench are the same temperature. '
        + 'Why does the metal feel colder?',
      steps: [
        'Your hand is warmer than both.',
        'Heat flows out of your hand into each.',
        'Metal takes it away much faster.',
      ],
      answer: 'Because metal pulls heat from your hand faster. '
        + 'You are feeling the rate of loss, not the temperature.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking cold moves into things.',
      why: 'There is no such thing as cold moving. '
        + 'Heat moves out, and what is left feels cold.',
    },
    {
      mistake: 'Thinking something that feels colder is colder.',
      why: 'It may just be conducting better. '
        + 'A thermometer settles it and your hand does not.',
    },
    {
      mistake: 'Thinking air is nothing, so it cannot insulate.',
      why: 'Still air is one of the best insulators there is, '
        + 'which is why blankets and loose clothing work.',
    },
  ],

  extension:
    'A vacuum flask works by removing almost everything heat could travel '
    + 'through: '
    + 'a gap with no air between two walls, and shiny surfaces to turn back '
    + 'radiated heat. '
    + 'It keeps hot things hot and cold things cold by the same trick, '
    + 'because both are just slowing heat down.',

  figure: {
    alt: 'A bowl of hot soup with two spoons standing in it. A green arrow '
      + 'runs up the metal spoon to its handle, labelled the handle gets '
      + 'hot. The wooden spoon has no arrow and is labelled the handle '
      + 'stays cool. Under it says heat always moves from the hotter thing '
      + 'to the cooler one.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<polygon points="200,234 440,234 410,300 230,300"/>'
      + '<path d="M 282 226 Q 270 204 284 182 Q 294 166 286 150"/>'
      + '<path d="M 360 226 Q 348 204 362 182 Q 372 166 364 150"/>'
      + '<text x="320" y="330" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">hot soup</text>'
      + '<line x1="300" y1="272" x2="212" y2="142" stroke-width="9"/>'
      + '<ellipse cx="206" cy="134" rx="15" ry="10"/>'
      + '<line x1="272" y1="236" x2="226" y2="168" stroke="#0f8a4d" '
      + 'stroke-width="5"/>'
      + '<polyline points="228,184 222,162 242,166" stroke="#0f8a4d" '
      + 'stroke-width="5"/>'
      + '<text x="176" y="180" font-size="20" text-anchor="end" '
      + 'fill="currentColor" stroke="none">metal</text>'
      + '<text x="176" y="206" font-size="18" text-anchor="end" '
      + 'fill="#0f8a4d" stroke="none">it gets hot</text>'
      + '<line x1="340" y1="272" x2="428" y2="142" stroke-width="11"/>'
      + '<ellipse cx="434" cy="134" rx="15" ry="10"/>'
      + '<text x="464" y="180" font-size="20" text-anchor="start" '
      + 'fill="currentColor" stroke="none">wood</text>'
      + '<text x="464" y="206" font-size="18" text-anchor="start" '
      + 'fill="currentColor" stroke="none">it stays cool</text>'
      + '<text x="320" y="376" font-size="22" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">heat moves from the hotter thing to '
      + 'the cooler one</text></svg>',
  },
  tables: [{
    caption: 'Which materials carry heat and which hold it back',
    columns: ['Material', 'Carries heat', 'So it is used for'],
    rows: [
      ['Metal', 'Very well', 'Cooking pots, and spoons for stirring'],
      ['Wood', 'Poorly', 'Handles that have to be held'],
      ['Plastic', 'Poorly', 'Kettle handles and cool box lids'],
      ['Still air', 'Poorly', 'Loose cloth and a blanket'],
    ],
    note: 'A material that carries heat well is a conductor. One that holds '
      + 'it back is an insulator.',
  }],
  questions: [
    {
      id: 'ht-1',
      ask: 'Which way does heat move?',
      kind: 'choice',
      options: ['From hotter to cooler', 'From cooler to hotter'],
      answer: 'From hotter to cooler',
      teach: 'Always. There is no such thing as cold moving in.',
      level: 3,
    },
    {
      id: 'ht-2',
      ask: 'Which is a good insulator?',
      kind: 'choice',
      options: ['Wood', 'Iron', 'Aluminium'],
      answer: 'Wood',
      teach: 'Wood carries heat poorly, '
        + 'which is why pot handles are often made of it.',
      level: 4,
    },
    {
      id: 'ht-3',
      ask: 'Why does metal feel colder than wood at the same temperature?',
      kind: 'choice',
      options: [
        'It takes heat from your hand faster',
        'It really is colder',
        'It holds more cold',
      ],
      answer: 'It takes heat from your hand faster',
      teach: 'Your hand feels the rate heat leaves it, not the temperature. '
        + 'A thermometer would show both the same.',
      level: 5,
    },
    {
      id: 'ht-4',
      ask: 'Which of these is a good conductor of heat?',
      kind: 'choice',
      options: ['Wood', 'Metal', 'Plastic'],
      answer: 'Metal',
      teach: 'Metal carries heat very well, so it is a conductor. '
        + 'Wood and plastic carry it poorly.',
      level: 1,
    },
    {
      id: 'ht-5',
      ask: 'What is a material that holds heat back called?',
      kind: 'choice',
      options: ['A conductor', 'A thermometer', 'An insulator'],
      answer: 'An insulator',
      teach: 'A conductor carries heat well. '
        + 'An insulator holds it back, like wood, plastic or still air.',
      level: 1,
    },
    {
      id: 'ht-6',
      ask: 'Why are cooking pots made of metal?',
      kind: 'choice',
      options: [
        'Metal carries heat from the fire into the food',
        'Metal keeps the food cool',
        'Metal holds heat back',
      ],
      answer: 'Metal carries heat from the fire into the food',
      teach: 'The pot has to conduct heat into the food, '
        + 'so it is made of a good conductor.',
      level: 2,
    },
    {
      id: 'ht-7',
      ask: 'Why are pot handles often made of wood or plastic?',
      kind: 'choice',
      options: [
        'They carry heat quickly to your hand',
        'They are insulators, so the handle stays cool enough to hold',
        'They make the pot heat faster',
      ],
      answer: 'They are insulators, so the handle stays cool enough to hold',
      teach: 'The pot must conduct and the handle must not. '
        + 'Wood and plastic carry heat poorly, so your hand is safe.',
      level: 2,
    },
    {
      id: 'ht-8',
      ask: 'A metal bench feels colder than a wooden one. '
        + 'How can you find out which is really colder?',
      kind: 'choice',
      options: ['Touch both again', 'Look at them', 'Use a thermometer'],
      answer: 'Use a thermometer',
      teach: 'Your hand feels how fast heat leaves it, not the temperature. '
        + 'A thermometer measures the temperature itself.',
      level: 2,
    },
    {
      id: 'ht-9',
      ask: 'You hold a piece of ice in your hand. Which way does heat move?',
      kind: 'choice',
      options: [
        'From your hand into the ice',
        'From the ice into your hand',
        'Cold moves from the ice into your hand',
      ],
      answer: 'From your hand into the ice',
      teach: 'Heat always moves from hotter to cooler. Your hand is warmer, '
        + 'so heat leaves it, and that is why your hand feels cold. '
        + 'Cold does not move.',
      level: 3,
    },
    {
      id: 'ht-10',
      ask: 'Why does a blanket keep you warm on a harmattan night?',
      kind: 'choice',
      options: [
        'It makes heat of its own',
        'It holds still air, which slows heat leaving your body',
        'It pushes the cold away',
      ],
      answer: 'It holds still air, which slows heat leaving your body',
      teach: 'Still air is a poor conductor, so it is a good insulator. '
        + 'The blanket traps it and slows the heat leaving you.',
      level: 3,
    },
  ],
})

/* ── common diseases and how they spread ──────────────────────────────────── */

teach({
  topicId: 'diseases-primary',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Malaria spreads by mosquito bite. '
      + 'Cholera spreads through water or food with waste in it. '
      + 'Each is prevented by breaking the way it travels.',
    method: [
      'Ask how the disease travels.',
      'Malaria: nets, and no standing water for breeding.',
      'Cholera: safe water, clean hands, safe toilets.',
    ],
  },

  why:
    'Two children in one house fall sick in the same week. '
    + 'One has malaria and one has cholera. '
    + 'Their mother boils every drop of drinking water from then on. '
    + 'The cholera does not come back. '
    + 'The malaria comes back anyway. '
    + 'She did one careful thing and it saved one child only. '
    + 'Why did the same care stop one disease and not the other?',

  idea:
    'Malaria is spread by the bite of an infected mosquito. '
    + 'Cholera is spread by drinking water or eating food '
    + 'that has had human waste in it. '
    + 'Two different diseases, two different roads, '
    + 'so two different ways of stopping them.',

  mechanism:
    'Every infectious disease has a route, '
    + 'and the way to prevent it is to cut the route rather than to fight '
    + 'the germ. '
    + 'A net cuts the malaria route at the moment of biting, '
    + 'and emptying standing water cuts the same route earlier, '
    + 'by preventing the mosquito existing at all. '
    + 'That is the shape of it: '
    + 'one route, several places to cut, '
    + 'and the one to choose is whichever is possible where you are. '
    + 'Find the route and you find every point where it can be broken.',

  recap:
    'A germ is a living thing far too small to see. '
    + 'Touch a dirty table, then put your fingers in your mouth, and '
    + 'the germs from that table are now inside you. '
    + 'Table, then hand, then mouth: that path is called a route. '
    + 'A mosquito has a route of its own. '
    + 'It lays eggs in standing water, the young grow in that water, '
    + 'and the grown mosquito flies out and bites. '
    + 'Every disease travels along a route like these, and routes are '
    + 'what this lesson is about.',

  method: [
    'Name the disease.',
    'Ask how it travels from one person to another.',
    'List every point along that route.',
    'At each point, ask what would break it.',
    'Choose the ones that are possible where you live.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How does malaria get from one person to another?',
      steps: [
        'A mosquito bites an infected person.',
        'The same mosquito later bites somebody else.',
      ],
      answer: 'Through the bite of a mosquito.',
    },
    {
      level: 4,
      ask: 'Why does sleeping under a net help, '
        + 'when mosquitoes are around all evening?',
      steps: [
        'The mosquitoes that carry malaria mostly bite at night.',
        'A net covers exactly those hours.',
      ],
      answer: 'Because it protects during the hours when the biting mostly '
        + 'happens.',
    },
    {
      level: 5,
      ask: 'Name three different points where the cholera route can be broken.',
      steps: [
        'At the start: safe disposal of waste.',
        'In the middle: treating or boiling the water.',
        'At the end: washing hands before eating.',
      ],
      answer: 'Safe toilets, safe water, and clean hands. '
        + 'Breaking any one of them stops that journey.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking malaria comes from dirty water directly.',
      why: 'Standing water breeds the mosquito. '
        + 'The mosquito carries the disease. '
        + 'Drinking it does not give you malaria.',
    },
    {
      mistake: 'Thinking cholera is caught from the air.',
      why: 'It travels through what you swallow. '
        + 'That is why water and hands are where it is stopped.',
    },
    {
      mistake: 'Thinking one measure is enough.',
      why: 'Routes have several points. '
        + 'Breaking more than one is much safer than relying on a single '
        + 'habit.',
    },
  ],

  extension:
    'This way of thinking works for any infectious disease, '
    + 'including ones nobody has met yet. '
    + 'Ask how it travels, list the points on the route, '
    + 'and break as many as you can. '
    + 'That is what public health is, and it is mostly not about medicine.',

  figure: {
    alt: 'Two roads drawn one above the other. The malaria road runs from '
      + 'standing water to a mosquito to a person. The cholera road runs '
      + 'from human waste to water or food to the mouth. Under them it says '
      + 'find the road and you find every place it can be cut.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="40" y="88" font-size="20" text-anchor="start" '
      + 'fill="#0f8a4d" stroke="none">malaria</text>'
      + '<text x="40" y="228" font-size="20" text-anchor="start" '
      + 'fill="#0f8a4d" stroke="none">cholera</text>'
      + '<polygon points="40,100 190,100 190,170 40,170"/>'
      + '<text x="115" y="142" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">standing water</text>'
      + '<polygon points="240,100 390,100 390,170 240,170"/>'
      + '<text x="315" y="142" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a mosquito</text>'
      + '<line x1="196" y1="135" x2="234" y2="135"/>'
      + '<polyline points="221,125 234,135 221,145"/>'
      + '<polygon points="440,100 590,100 590,170 440,170"/>'
      + '<text x="515" y="142" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a person</text>'
      + '<line x1="396" y1="135" x2="434" y2="135"/>'
      + '<polyline points="421,125 434,135 421,145"/>'
      + '<polygon points="40,240 190,240 190,310 40,310"/>'
      + '<text x="115" y="282" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">human waste</text>'
      + '<polygon points="240,240 390,240 390,310 240,310"/>'
      + '<text x="315" y="282" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">water or food</text>'
      + '<line x1="196" y1="275" x2="234" y2="275"/>'
      + '<polyline points="221,265 234,275 221,285"/>'
      + '<polygon points="440,240 590,240 590,310 440,310"/>'
      + '<text x="515" y="282" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the mouth</text>'
      + '<line x1="396" y1="275" x2="434" y2="275"/>'
      + '<polyline points="421,265 434,275 421,285"/>'
      + '<text x="320" y="358" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">find the road and you find every '
      + 'place it can be cut</text></svg>',
  },
  tables: [{
    caption: 'How each disease travels, and where its road can be cut',
    columns: ['Disease', 'How it travels', 'Where to cut the road'],
    rows: [
      [
        'Malaria',
        'The bite of an infected mosquito',
        'Sleep under a treated net, and empty standing water',
      ],
      [
        'Cholera',
        'Human waste reaching food or water',
        'Use a toilet, treat the water, wash hands with soap',
      ],
    ],
    note: 'Cutting the road works at any point along it, so the one to '
      + 'choose is whichever is possible where you live.',
  }],
  questions: [
    {
      id: 'dis-1',
      ask: 'How does malaria spread?',
      kind: 'choice',
      options: [
        'By mosquito bite',
        'By drinking dirty water',
        'Through the air',
      ],
      answer: 'By mosquito bite',
      teach: 'Standing water breeds mosquitoes, and the mosquito carries it. '
        + 'Drinking the water does not give you malaria.',
      level: 3,
    },
    {
      id: 'dis-2',
      ask: 'How does cholera spread?',
      kind: 'choice',
      options: [
        'Through water or food with waste in it',
        'By mosquito bite',
        'By touching a sick person',
      ],
      answer: 'Through water or food with waste in it',
      teach: 'It travels from waste to mouth, '
        + 'which is why toilets, water treatment and handwashing all help.',
      level: 4,
    },
    {
      id: 'dis-3',
      ask: 'What is the best way to prevent an infectious disease?',
      kind: 'choice',
      options: [
        'Break the route it travels by',
        'Take medicine every day',
        'Avoid everybody',
      ],
      answer: 'Break the route it travels by',
      teach: 'Find how it travels, list the points, and cut as many as you '
        + 'can. That works even for a disease nobody has met yet.',
      level: 5,
    },
    {
      id: 'dis-4',
      ask: 'What is a germ?',
      kind: 'choice',
      options: [
        'A kind of insect',
        'A dirty spot you can see',
        'A living thing far too small to see',
      ],
      answer: 'A living thing far too small to see',
      teach: 'Germs are alive and far too small to see. '
        + 'That is why something can look clean and still carry them.',
      level: 1,
    },
    {
      id: 'dis-5',
      ask: 'Which of these helps to stop cholera?',
      kind: 'choice',
      options: [
        'Sleeping under a net',
        'Washing hands with soap before eating',
        'Wearing a hat',
      ],
      answer: 'Washing hands with soap before eating',
      teach: 'Cholera travels from waste to the mouth. '
        + 'Clean hands break that route. A net cuts the malaria route instead.',
      level: 1,
    },
    {
      id: 'dis-6',
      ask: 'Where do mosquitoes lay their eggs?',
      kind: 'choice',
      options: ['In dry sand', 'In standing water', 'In cooked food'],
      answer: 'In standing water',
      teach: 'The young grow in standing water and fly out as grown mosquitoes. '
        + 'Emptying old tins and pots of water stops them being born.',
      level: 1,
    },
    {
      id: 'dis-7',
      ask: 'Why does sleeping under a treated net protect against malaria?',
      kind: 'choice',
      options: [
        'The mosquitoes that carry malaria mostly bite at night',
        'The net keeps cholera germs out',
        'The net keeps the room cool',
      ],
      answer: 'The mosquitoes that carry malaria mostly bite at night',
      teach: 'The net covers the hours when most of the biting happens, '
        + 'so it cuts the malaria route at the bite.',
      level: 2,
    },
    {
      id: 'dis-8',
      ask: 'Yaw empties old tyres and tins that hold rainwater. '
        + 'Which disease does this help prevent?',
      kind: 'choice',
      options: ['Cholera', 'Neither', 'Malaria'],
      answer: 'Malaria',
      teach: 'Standing water is where mosquitoes breed. '
        + 'No water, no young mosquitoes, so fewer malaria bites.',
      level: 2,
    },
    {
      id: 'dis-9',
      ask: 'A mother boils all the drinking water. Cholera stops, '
        + 'but malaria comes back. Why?',
      kind: 'choice',
      options: [
        'Malaria travels by mosquito bite, not by drinking water',
        'She did not boil the water long enough',
        'Boiling makes malaria stronger',
      ],
      answer: 'Malaria travels by mosquito bite, not by drinking water',
      teach: 'Each disease has its own route. '
        + 'Boiling cuts the cholera route. '
        + 'Malaria needs a net or no standing water.',
      level: 3,
    },
    {
      id: 'dis-10',
      ask: 'Why is it safer to break the cholera route in more than one place?',
      kind: 'choice',
      options: [
        'Breaking one place never works',
        'If one habit slips, another still stops the disease',
        'It is not safer',
      ],
      answer: 'If one habit slips, another still stops the disease',
      teach: 'Any one break stops that journey. '
        + 'But people forget, so safe toilets, safe water and clean hands '
        + 'together are much safer than one habit alone.',
      level: 3,
    },
  ],
})

/* ── clean water ──────────────────────────────────────────────────────────── */

teach({
  topicId: 'water-and-sanitation',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Water gets dirty from waste, animals and run off. '
      + 'Clear water can still be unsafe. '
      + 'Boiling kills germs. Filtering alone does not.',
    method: [
      'Filter or settle the water to remove what you can see.',
      'Then boil it, or treat it, to kill what you cannot.',
      'Store it covered, and take it out with a clean cup.',
    ],
  },

  why:
    'You fetch water from the stream and it comes up brown. '
    + 'You pour it through a clean cloth and now it looks as clear as '
    + 'sachet water. '
    + 'Your small brother wants to drink it. '
    + 'It looks exactly as clean as the water you buy. '
    + 'How can you tell whether clear water is safe to drink, when '
    + 'the thing that makes people ill cannot be seen at all?',

  idea:
    'Water becomes unsafe when waste, animals or run off get into it. '
    + 'The danger is germs, and germs cannot be seen. '
    + 'So clear water is not the same as safe water. '
    + 'To make water safe you have to kill what is in it, not just remove '
    + 'the dirt.',

  mechanism:
    'This is the most important distinction in the topic, '
    + 'and it kills people who get it wrong. '
    + 'Germs are far smaller than the holes in any cloth, '
    + 'so straining cannot catch them however clear the water looks. '
    + 'That is why the two steps are not alternatives. '
    + 'You want both, in that order: '
    + 'strain so the water is clear, then boil so it is safe.',

  recap:
    'Filtering means pouring a mixture through cloth or paper. '
    + 'The liquid runs through and the solid pieces stay behind, so '
    + 'the sand is caught and the water comes out clear. '
    + 'Cholera travels a different way. '
    + 'Human waste gets into water, a person drinks that water, and '
    + 'the germs go into them. '
    + 'Filtering catches the sand. '
    + 'It does not catch the cholera germ, and the gap between those '
    + 'two is what this lesson is about.',

  method: [
    'Let the water settle, or strain it through clean cloth.',
    'That removes what you can see.',
    'Now boil it: bring it to a rolling boil for about a minute.',
    'Or use a water treatment product as its instructions say.',
    'Let it cool covered.',
    'Store it in a covered container.',
    'Pour it out, or use a clean dipper. Do not dip hands or a used cup.',
  ],

  worked: [
    {
      level: 3,
      ask: 'The water looks clear. Is it safe to drink?',
      steps: [
        'Germs cannot be seen.',
      ],
      answer: 'Not necessarily. Clear is not the same as safe.',
    },
    {
      level: 4,
      ask: 'Why is filtering through cloth not enough?',
      steps: [
        'Cloth catches mud and grit.',
        'Germs are far smaller than the gaps in cloth.',
      ],
      answer: 'Because germs pass straight through. '
        + 'Filtering makes it clear, not safe.',
    },
    {
      level: 5,
      ask: 'Water was boiled properly, then stored in an open bucket '
        + 'and taken out with a used cup. What went wrong?',
      steps: [
        'The boiling worked.',
        'The open bucket let dust and insects in.',
        'The used cup put germs back from somebody’s hands.',
      ],
      answer: 'It was made safe and then made unsafe again in storage. '
        + 'Treating water is only half the job.',
    },
  ],

  traps: [
    {
      mistake: 'Believing clear water is safe water.',
      why: 'Germs are invisible. '
        + 'How it looks tells you nothing about what is in it.',
    },
    {
      mistake: 'Filtering and stopping there.',
      why: 'Filtering removes what you can see. '
        + 'Boiling removes what you cannot.',
    },
    {
      mistake: 'Dipping a used cup into stored water.',
      why: 'That puts germs straight back into water you just made safe. '
        + 'Pour, or use a clean dipper.',
    },
  ],

  extension:
    'Sunlight can also disinfect water: '
    + 'a clear bottle left in strong sun for several hours '
    + 'kills many germs. '
    + 'It is slower and less certain than boiling, '
    + 'and it costs no fuel, which matters when fuel is scarce.',

  figure: {
    alt: 'On the left, water poured through a cloth: the lumps of dirt are '
      + 'held on top while tiny germs pass straight through into the jar '
      + 'below. On the right, the same water boiling over a flame with the '
      + 'germs inside it crossed out in red. Under it says strain it until '
      + 'it is clear, then boil it until it is safe.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">clear water is not the same as '
      + 'safe water</text>'
      + '<line x1="80" y1="152" x2="240" y2="152" stroke-width="3" '
      + 'stroke-dasharray="7 7"/>'
      + '<text x="74" y="148" font-size="18" text-anchor="end" '
      + 'fill="currentColor" stroke="none">cloth</text>'
      + '<circle cx="130" cy="139" r="9"/><circle cx="154" cy="135" r="9"/>'
      + '<circle cx="178" cy="141" r="9"/>'
      + '<circle cx="126" cy="176" r="3" fill="currentColor"/>'
      + '<circle cx="158" cy="190" r="3" fill="currentColor"/>'
      + '<circle cx="190" cy="172" r="3" fill="currentColor"/>'
      + '<circle cx="140" cy="206" r="3" fill="currentColor"/>'
      + '<circle cx="176" cy="210" r="3" fill="currentColor"/>'
      + '<polygon points="120,222 200,222 194,292 126,292"/>'
      + '<text x="160" y="320" font-size="19" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the dirt stops</text>'
      + '<text x="160" y="346" font-size="19" text-anchor="middle" '
      + 'fill="#c8433a" stroke="none">the germs go through</text>'
      + '<polygon points="408,198 532,198 520,262 420,262"/>'
      + '<circle cx="432" cy="212" r="6"/><circle cx="464" cy="206" r="6"/>'
      + '<circle cx="500" cy="212" r="6"/>'
      + '<line x1="414" y1="302" x2="526" y2="302"/>'
      + '<polygon points="414,302 424,268 434,302"/>'
      + '<polygon points="460,302 470,268 480,302"/>'
      + '<polygon points="506,302 516,268 526,302"/>'
      + '<line x1="431" y1="231" x2="449" y2="249" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<line x1="449" y1="231" x2="431" y2="249" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<line x1="461" y1="223" x2="479" y2="241" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<line x1="479" y1="223" x2="461" y2="241" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<line x1="491" y1="233" x2="509" y2="251" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<line x1="509" y1="233" x2="491" y2="251" stroke="#c8433a" '
      + 'stroke-width="3"/>'
      + '<text x="470" y="336" font-size="19" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">boiling kills them</text>'
      + '<text x="320" y="382" font-size="21" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">strain it until it is clear, then '
      + 'boil it until it is safe</text></svg>',
  },
  tables: [{
    caption: 'What straining does to water and what boiling does',
    columns: ['What you do', 'Takes out what you can see', 'Kills the germs'],
    rows: [
      ['Let it settle, or strain it through clean cloth', 'Yes', 'No'],
      ['Boil it for about a minute', 'No', 'Yes'],
    ],
    note: 'Germs are far smaller than the holes in any cloth, which is why '
      + 'clear water can still make you ill.',
  }],
  questions: [
    {
      id: 'ws-1',
      ask: 'Is clear water always safe to drink?',
      kind: 'choice',
      options: ['Yes', 'No'],
      answer: 'No',
      teach: 'Germs cannot be seen. '
        + 'Clear tells you about mud, not about safety.',
      level: 3,
    },
    {
      id: 'ws-2',
      ask: 'What does boiling do that filtering does not?',
      kind: 'choice',
      options: [
        'Kills germs',
        'Removes mud',
        'Improves the taste',
      ],
      answer: 'Kills germs',
      teach: 'Filtering removes what you can see. '
        + 'Boiling deals with what you cannot.',
      level: 4,
    },
    {
      id: 'ws-3',
      ask: 'Why should you not dip a used cup into stored drinking water?',
      kind: 'choice',
      options: [
        'It puts germs back into water you made safe',
        'It wastes water',
        'It makes the water cold',
      ],
      answer: 'It puts germs back into water you made safe',
      teach: 'Treating the water is only half the job. '
        + 'Storing and serving it cleanly is the other half.',
      level: 5,
    },
    {
      id: 'ws-4',
      ask: 'How does water get dirty?',
      kind: 'choice',
      options: [
        'Waste, animals and run off get into it',
        'It is stored in a covered container',
        'The sun shines on it',
      ],
      answer: 'Waste, animals and run off get into it',
      teach: 'Water becomes unsafe when waste, animals or run off reach it. '
        + 'Covering stored water helps keep it safe.',
      level: 1,
    },
    {
      id: 'ws-5',
      ask: 'How should you store water after boiling it?',
      kind: 'choice',
      options: [
        'In an open bucket',
        'In a covered container',
        'In a used cup left outside',
      ],
      answer: 'In a covered container',
      teach: 'An open bucket lets dust and insects back in. '
        + 'Keep it covered and pour it out cleanly.',
      level: 1,
    },
    {
      id: 'ws-6',
      ask: 'Why can germs pass through a cloth filter?',
      kind: 'choice',
      options: [
        'Cloth feeds the germs',
        'Germs can jump over the cloth',
        'Germs are far smaller than the holes in the cloth',
      ],
      answer: 'Germs are far smaller than the holes in the cloth',
      teach: 'Cloth catches mud and grit. '
        + 'Germs are so small they slip straight through the gaps.',
      level: 2,
    },
    {
      id: 'ws-7',
      ask: 'Water from the stream is brown. What is the right order to make '
        + 'it safe?',
      kind: 'choice',
      options: [
        'Strain it only',
        'Boil it only, and drink it brown',
        'Strain it until clear, then boil it',
      ],
      answer: 'Strain it until clear, then boil it',
      teach: 'The two steps are not choices; you want both. '
        + 'Straining makes it clear. Boiling makes it safe.',
      level: 2,
    },
    {
      id: 'ws-8',
      ask: 'For how long should water be kept at a rolling boil?',
      kind: 'choice',
      options: ['About one second', 'About a minute', 'About a week'],
      answer: 'About a minute',
      teach: 'Bring it to a rolling boil, with big bubbles, '
        + 'and keep it there for about a minute to kill the germs.',
      level: 2,
    },
    {
      id: 'ws-9',
      ask: 'Besides boiling, which is a way to make water safe to drink?',
      kind: 'choice',
      options: [
        'Pour it through cloth twice',
        'Use a water treatment product as its instructions say',
        'Leave it in an open bucket overnight',
      ],
      answer: 'Use a water treatment product as its instructions say',
      teach: 'Straining twice still lets germs through. '
        + 'Boiling or a water treatment product kills them.',
      level: 3,
    },
  ],
})

/* ── soil and growing food ────────────────────────────────────────────────── */

teach({
  topicId: 'soil-and-farming',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Soil holds water, air and the substances plants need. '
      + 'Sandy soil drains fast, clay holds too much, loam is best for most '
      + 'crops.',
    method: [
      'Wet a handful and squeeze it.',
      'Falls apart: sandy. Stays in a sticky lump: clay. Holds loosely: loam.',
      'Put goodness back with compost or manure after harvest.',
    ],
  },

  why:
    'Two farmers in one village plant tomatoes on the same day, on '
    + 'plots side by side. '
    + 'After the rains, one plot gives basket after basket. '
    + 'The other gives thin yellow plants and almost no fruit. '
    + 'Same seed, same seller, same rain, same sun. '
    + 'The only thing that differs is the ground they stand in. '
    + 'What is different about that ground, and how would you find '
    + 'out before you plant?',

  idea:
    'Soil is more than dirt. '
    + 'It holds water, it holds air, and it holds the substances a plant '
    + 'needs to grow. '
    + 'Which of those it does well depends on what it is made of, '
    + 'and you can tell by squeezing a wet handful of it.',

  mechanism:
    'A plant needs two things from soil that pull against each other: '
    + 'water, and air at the roots. '
    + 'Hold the water and you squeeze out the air; '
    + 'let the air in and the water drains away. '
    + 'That is the whole of why loam is wanted: '
    + 'it does both adequately rather than either perfectly. '
    + 'There is a second idea underneath: '
    + 'a crop takes substances out of the soil, '
    + 'and if nothing puts them back the soil grows poorer each year. '
    + 'That is why compost, manure and resting a field are not optional '
    + 'extras.',

  recap:
    'A plant has roots down under the ground. '
    + 'The roots do two jobs. '
    + 'They hold the plant so the wind cannot push it over, and they '
    + 'drink water. '
    + 'The leaves do a different job: they make the plant’s food, '
    + 'using light from the sun. '
    + 'So a plant gets its food from above and its water from below. '
    + 'What the roots pull out of soil is water, and the substances '
    + 'dissolved in that water.',

  method: [
    'Take a handful of soil and wet it slightly.',
    'Squeeze it. Falls apart at once? Sandy.',
    'Stays in a sticky lump? Clay.',
    'Holds together loosely and crumbles? Loam.',
    'For growing, loam is the easiest.',
    'After harvest, add compost or manure to put goodness back.',
    'Or rest the field, or plant something that restores it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which soil lets water run through fastest?',
      steps: [
        'Sand has large grains with big gaps between.',
      ],
      answer: 'Sandy soil.',
    },
    {
      level: 4,
      ask: 'Why is loam better than clay for most crops?',
      steps: [
        'Clay holds water and squeezes out the air.',
        'Roots need air as well as water.',
        'Loam holds some water and still lets air in.',
      ],
      answer: 'Because it gives roots both water and air, '
        + 'where clay gives water and almost no air.',
    },
    {
      level: 5,
      ask: 'A field grows a good crop for several years and then a poor one, '
        + 'with the same seed and the same rain. Why?',
      steps: [
        'Each crop takes substances out of the soil.',
        'Nothing has put them back.',
        'The soil has grown poorer.',
      ],
      answer: 'The soil has been used up. '
        + 'It needs compost, manure or a rest.',
    },
  ],

  traps: [
    {
      mistake: 'Thinking more water always means better growing.',
      why: 'Waterlogged soil has no air, and roots drown. '
        + 'Draining matters as much as watering.',
    },
    {
      mistake: 'Thinking soil cannot be used up.',
      why: 'Every harvest removes something. '
        + 'Put it back or the yield falls.',
    },
    {
      mistake: 'Judging soil by its colour alone.',
      why: 'Colour is a hint. '
        + 'Squeezing a wet handful tells you far more.',
    },
  ],

  extension:
    'Planting beans or groundnuts in a field restores some of what other '
    + 'crops take out, '
    + 'because those plants work together with tiny living things at their '
    + 'roots. '
    + 'Farmers rotated crops for that reason long before anybody could '
    + 'explain it.',

  figure: {
    alt: 'The squeeze test on three handfuls of wet soil. The first has '
      + 'fallen apart into loose grains and is labelled sandy. The second '
      + 'has stayed as one sticky lump and is labelled clay. The third has '
      + 'broken into a few crumbs and is labelled loam. Under it says loam '
      + 'holds water and still lets air in.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="46" font-size="26" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">squeeze a wet handful</text>'
      + '<circle cx="64" cy="156" r="6" fill="currentColor"/>'
      + '<circle cx="80" cy="186" r="6" fill="currentColor"/>'
      + '<circle cx="96" cy="144" r="6" fill="currentColor"/>'
      + '<circle cx="104" cy="176" r="6" fill="currentColor"/>'
      + '<circle cx="118" cy="160" r="6" fill="currentColor"/>'
      + '<circle cx="124" cy="192" r="6" fill="currentColor"/>'
      + '<circle cx="136" cy="150" r="6" fill="currentColor"/>'
      + '<circle cx="144" cy="180" r="6" fill="currentColor"/>'
      + '<circle cx="156" cy="166" r="6" fill="currentColor"/>'
      + '<circle cx="72" cy="200" r="6" fill="currentColor"/>'
      + '<circle cx="112" cy="204" r="6" fill="currentColor"/>'
      + '<circle cx="152" cy="202" r="6" fill="currentColor"/>'
      + '<text x="110" y="248" font-size="21" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">falls apart</text>'
      + '<text x="110" y="286" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">sandy</text>'
      + '<polygon points="282,190 278,158 300,138 336,138 358,160 352,192 '
      + '320,206"/><path d="M 300 156 Q 309 172 300 188"/>'
      + '<path d="M 318 156 Q 327 172 318 188"/>'
      + '<path d="M 336 156 Q 345 172 336 188"/>'
      + '<text x="320" y="248" font-size="21" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a sticky lump</text>'
      + '<text x="320" y="286" font-size="24" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">clay</text>'
      + '<polygon points="486,184 492,158 518,152 526,176 508,192"/>'
      + '<polygon points="532,182 542,156 568,162 564,188 540,194"/>'
      + '<polygon points="502,202 528,196 542,212 518,224 500,218"/>'
      + '<text x="530" y="248" font-size="21" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">crumbles</text>'
      + '<text x="530" y="286" font-size="24" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">loam</text>'
      + '<text x="320" y="350" font-size="22" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">loam holds water and still lets air '
      + 'in</text></svg>',
  },
  tables: [{
    caption: 'What each kind of soil does with water and with air',
    columns: [
      'Soil',
      'What it does with water',
      'Air at the roots',
      'What that means',
    ],
    rows: [
      ['Sandy', 'Runs straight through', 'Plenty', 'It dries out fast'],
      ['Clay', 'Held, and the soil goes hard', 'Little', 'It waterlogs'],
      ['Loam', 'Held, but it still drains', 'Enough', 'It suits most crops'],
    ],
    note: 'Loam is a mixture of the other two, which is why it does both '
      + 'adequately rather than either perfectly.',
  }],
  questions: [
    {
      id: 'sf-1',
      ask: 'Which soil drains fastest?',
      kind: 'choice',
      options: ['Sandy', 'Clay', 'Loam'],
      answer: 'Sandy',
      teach: 'Large grains leave big gaps, so water runs straight through.',
      level: 3,
    },
    {
      id: 'sf-2',
      ask: 'Why do roots need air as well as water?',
      kind: 'choice',
      options: [
        'Roots need both, and waterlogged soil has no air',
        'Air makes the soil lighter',
        'They do not need air',
      ],
      answer: 'Roots need both, and waterlogged soil has no air',
      teach: 'That is exactly why clay is hard to grow in and loam is easier.',
      level: 4,
    },
    {
      id: 'sf-3',
      ask: 'Why does a field give poorer crops after several years?',
      kind: 'choice',
      options: [
        'The soil has been used up and needs goodness put back',
        'The seeds get tired',
        'The rain changes',
      ],
      answer: 'The soil has been used up and needs goodness put back',
      teach: 'Every harvest removes substances. '
        + 'Compost, manure or a rest restores them.',
      level: 5,
    },
    {
      id: 'sf-4',
      ask: 'You squeeze a wet handful of soil and it stays in a sticky lump. '
        + 'What kind of soil is it?',
      kind: 'choice',
      options: ['Sandy', 'Loam', 'Clay'],
      answer: 'Clay',
      teach: 'Sandy soil falls apart at once. Loam holds loosely and crumbles. '
        + 'A sticky lump is clay.',
      level: 1,
    },
    {
      id: 'sf-5',
      ask: 'A wet handful holds together loosely and then crumbles. '
        + 'What kind of soil is it?',
      kind: 'choice',
      options: ['Loam', 'Clay', 'Sandy'],
      answer: 'Loam',
      teach: 'Loam is a mix of sand and clay, '
        + 'so it holds together a little and still breaks into crumbs.',
      level: 1,
    },
    {
      id: 'sf-6',
      ask: 'What do a plant’s roots take from the soil?',
      kind: 'choice',
      options: [
        'Water, and the substances dissolved in it',
        'Ready made food',
        'Sunlight',
      ],
      answer: 'Water, and the substances dissolved in it',
      teach: 'The leaves make the plant’s food using sunlight. '
        + 'The roots take water, with substances dissolved in it, '
        + 'from the soil.',
      level: 2,
    },
    {
      id: 'sf-7',
      ask: 'Where does a plant make its food?',
      kind: 'choice',
      options: ['In the soil', 'In the leaves, using sunlight', 'In the roots'],
      answer: 'In the leaves, using sunlight',
      teach: 'A plant gets its food from above and its water from below. '
        + 'The soil does not hand it food ready made.',
      level: 2,
    },
    {
      id: 'sf-8',
      ask: 'How can a farmer put goodness back into the soil after harvest?',
      kind: 'choice',
      options: [
        'Add compost or manure',
        'Water it more every day',
        'Plant the same crop faster',
      ],
      answer: 'Add compost or manure',
      teach: 'Each crop takes substances out of the soil. '
        + 'Compost, manure or resting the field puts them back.',
      level: 2,
    },
    {
      id: 'sf-9',
      ask: 'Why does clay soil waterlog?',
      kind: 'choice',
      options: [
        'It has large grains with big gaps',
        'It holds the water and squeezes out the air',
        'It has too much air',
      ],
      answer: 'It holds the water and squeezes out the air',
      teach: 'Big gaps belong to sandy soil, which drains fast. '
        + 'Clay holds water so tightly that there is little room for air.',
      level: 3,
    },
    {
      id: 'sf-10',
      ask: 'Abena waters her tomatoes in clay soil many times a day, '
        + 'and they start to die. Why?',
      kind: 'choice',
      options: [
        'Too much water makes them grow too fast',
        'Clay soil holds no water',
        'The soil is waterlogged, so the roots get no air',
      ],
      answer: 'The soil is waterlogged, so the roots get no air',
      teach: 'More water is not always better. '
        + 'Roots need air as well as water, '
        + 'and soggy clay squeezes the air out.',
      level: 3,
    },
  ],
})
