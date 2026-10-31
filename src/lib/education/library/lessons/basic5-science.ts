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

  idea:
    'A mixture is two or more substances together, '
    + 'each still being itself. '
    + 'Rice and stones mixed in a bowl are still rice and still stones. '
    + 'Because nothing has changed, you can separate them again.',

  mechanism:
    'Every way of separating a mixture works by exploiting a difference. '
    + 'Sieving uses a difference in size. '
    + 'Filtering uses the fact that a liquid passes through paper and a '
    + 'solid does not. '
    + 'Evaporating uses the fact that water becomes a gas and salt does not. '
    + 'So the question is never "how do I separate this". '
    + 'It is "what is different about these two things", '
    + 'and the method follows from the answer.',

  recap:
    'You know solids, liquids and gases, '
    + 'and that heat moves things between those states. '
    + 'Both are used here.',

  method: [
    'Look at the mixture and name the parts.',
    'Ask what is different about them.',
    'Different size: sieve, or pick by hand.',
    'Solid floating in a liquid: filter it.',
    'Solid dissolved in a liquid: boil the liquid away.',
    'Iron mixed in: use a magnet.',
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
    'You know that Ghana’s south is wetter than its north, '
    + 'and that this changes what grows. '
    + 'That difference is a difference of climate, not of weather.',

  method: [
    'Choose a time of day and keep to it.',
    'Each day, record: temperature, rain or none, wind, cloud.',
    'Write it in a table, one row per day.',
    'At the end of the week, look for a pattern.',
    'Remember a week shows weather, not climate.',
    'Compare your week with the same week last year if you can.',
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
      why: 'Nobody remembers last year’s weather accurately. '
        + 'Written records are the whole point.',
    },
  ],

  extension:
    'Climate can change, and the evidence for it is exactly this kind of '
    + 'record kept for a very long time in many places. '
    + 'It is not that any one hot year proves anything. '
    + 'It is that the average of thousands of records has moved.',

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
    'You know that food does three jobs: energy, building and protecting. '
    + 'This is how the body gets at those.',

  method: [
    'Start at the mouth: teeth break food up, spit begins to soften it.',
    'The gullet carries it down to the stomach.',
    'The stomach churns it and adds juices.',
    'The small intestine breaks it down further and absorbs the goodness.',
    'The large intestine takes back water from what is left.',
    'The rest leaves the body as waste.',
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
    'You know that digestion takes goodness from food through a thin wall. '
    + 'The lungs do the same job with air.',

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
    'You know that leaves make the plant’s food using light. '
    + 'That is where every food chain starts, '
    + 'which is why the sun is at the back of all of this.',

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
    'You know that the Earth turns and that the sun stays put. '
    + 'That is why a shadow outdoors moves and changes length through the day.',

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

  idea:
    'Heat moves from the hotter thing to the cooler one, always. '
    + 'Put a metal spoon in hot soup and the handle warms. '
    + 'A wooden spoon does not. '
    + 'Metal is a good conductor of heat. '
    + 'Wood, plastic and air are poor ones, called insulators.',

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
    'You know that heat changes ice to water and water to steam. '
    + 'This is about how heat gets from one place to another.',

  method: [
    'Decide which thing is hotter.',
    'Heat will move from it to the cooler thing.',
    'To move heat quickly, use a conductor: metal.',
    'To stop heat moving, use an insulator: wood, plastic, cloth, air.',
    'Remember that still air is a good insulator, '
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
    + 'Malaria travels by mosquito, '
    + 'so a net over the bed cuts the route at the moment of biting, '
    + 'and emptying standing water cuts it earlier by preventing the '
    + 'mosquito existing. '
    + 'Cholera travels from waste to mouth, '
    + 'so safe toilets cut it at the start, '
    + 'treating water cuts it in the middle, '
    + 'and washing hands cuts it at the end. '
    + 'Find the route and you find every point where it can be broken.',

  recap:
    'You know that germs travel from a surface to the hand to the mouth, '
    + 'and that mosquitoes breed in standing water. '
    + 'Both of those are routes, and this lesson is about routes.',

  method: [
    'Name the disease.',
    'Ask how it travels from one person to another.',
    'List every point along that route.',
    'At each point, ask what would break it.',
    'Choose the ones that are possible where you live.',
    'For malaria: sleep under a treated net and empty standing water.',
    'For cholera: drink safe water, use a toilet, wash hands with soap.',
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

  idea:
    'Water becomes unsafe when waste, animals or run off get into it. '
    + 'The danger is germs, and germs cannot be seen. '
    + 'So clear water is not the same as safe water. '
    + 'To make water safe you have to kill what is in it, not just remove '
    + 'the dirt.',

  mechanism:
    'This is the most important distinction in the topic, '
    + 'and it kills people who get it wrong. '
    + 'Filtering through cloth removes mud, leaves and grit, '
    + 'which makes water look clean. '
    + 'Germs are far smaller than the holes in any cloth, '
    + 'so they pass straight through. '
    + 'Boiling does the opposite: it leaves the water looking the same '
    + 'and kills the germs. '
    + 'You usually want both, in that order: '
    + 'filter so the water is clear, then boil so it is safe.',

  recap:
    'You know that filtering separates a solid from a liquid, '
    + 'and you know how cholera travels. '
    + 'This lesson sits exactly where those two meet.',

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

  idea:
    'Soil is more than dirt. '
    + 'It holds water, it holds air, and it holds the substances a plant '
    + 'needs to grow. '
    + 'Sandy soil lets water run straight through. '
    + 'Clay soil holds water and goes hard. '
    + 'Loam is a mixture of both and suits most crops.',

  mechanism:
    'A plant needs two things from soil that pull against each other: '
    + 'water, and air at the roots. '
    + 'Sand gives plenty of air and loses the water. '
    + 'Clay holds the water and squeezes out the air. '
    + 'Loam is good precisely because it does both adequately '
    + 'rather than either perfectly. '
    + 'There is a second idea underneath: '
    + 'a crop takes substances out of the soil, '
    + 'and if nothing puts them back the soil grows poorer each year. '
    + 'That is why compost, manure and resting a field are not optional '
    + 'extras.',

  recap:
    'You know that roots drink and hold the plant down, '
    + 'and that plants make their food in the leaves using light. '
    + 'What they draw from soil is water and the substances in it.',

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
  ],
})
