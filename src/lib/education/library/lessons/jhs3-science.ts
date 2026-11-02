/**
 * Stored lessons for JHS 3 Integrated Science.
 *
 * Written at about grade 8, with a `brief` form on every topic.
 *
 * ── The examination year, so each lesson names the thing that is marked ───
 *
 * These ten topics carry most of the science marks in the certificate
 * examination, and in nearly every one the lost mark is the same kind of
 * thing: a unit, a direction, or a stated reason. Pressure is wrong without
 * the area it acts on. A circuit answer is wrong without saying which
 * quantity stays the same in series and which in parallel. A cycle answer is
 * wrong if it names the stores and not the processes between them.
 *
 * `machines-jhs` says plainly that no machine gives you more work than you
 * put in, because that is the misconception the whole topic exists to
 * remove, and `electricity-jhs` is written around the one thing that makes
 * series and parallel answerable: what is shared and what is not.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── acids, bases and salts ─────────────────────────────────────────────── */

teach({
  topicId: 'acids-bases-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An acid turns blue litmus red. '
      + 'A base turns red litmus blue. '
      + 'Neutralisation is an acid and a base reacting to give a salt and '
      + 'water. '
      + 'The salt is named from the metal of the base '
      + 'and the acid used.',
    method: [
      'Test with an indicator and say what changed.',
      'For neutralisation, write acid plus base gives salt plus water.',
      'Name the salt: metal from the base, ending from the acid.',
    ],
  },

  idea:
    'Acids and bases sit on opposite sides of neutral, and a handful of '
    + 'simple tests will tell you which side a substance is on. '
    + 'Neutralisation is an acid reacting with a base to give a salt '
    + 'and water, and the name of that salt can be worked out every '
    + 'time rather than remembered.',

  mechanism:
    'Naming the salt looks like memory and is a rule with two halves, '
    + 'so it can be worked out every time. '
    + 'The first word of the salt comes from the base, '
    + 'because the metal in the base is what stays. '
    + 'Sodium hydroxide gives sodium something. '
    + 'The second word comes from the acid, '
    + 'and each acid has one ending: '
    + 'hydrochloric gives chloride, sulphuric gives sulphate, '
    + 'nitric gives nitrate. '
    + 'So sodium hydroxide with hydrochloric acid gives sodium chloride, '
    + 'and you did not have to remember that particular pair. '
    + 'Neutralisation itself is worth seeing as useful rather than '
    + 'abstract, '
    + 'because the examination asks for applications. '
    + 'An acid soil is corrected with lime, which is a base. '
    + 'Indigestion is an excess of stomach acid, '
    + 'and the medicine for it is a mild base. '
    + 'A bee sting is acidic and a wasp sting alkaline, '
    + 'so the sensible treatment differs. '
    + 'In each case somebody identified which side of 7 the problem was on '
    + 'and moved it towards the middle. '
    + 'One warning about indicators. '
    + 'Litmus tells you which side of neutral you are on and nothing more. '
    + 'For how far, you need universal indicator or a pH meter, '
    + 'because litmus gives the same red for a weak acid and a dangerous '
    + 'one.',

  recap:
    'You know about elements, compounds and mixtures, '
    + 'and that atoms react through their outer electrons. '
    + 'This is one family of reactions, '
    + 'and the most useful one in daily life.',

  method: [
    'Describe the test: which indicator, and the colour change.',
    'State the pH range.',
    'For a reaction, write acid plus base gives salt plus water.',
    'Take the first name of the salt from the metal in the base.',
    'Take the second from the acid: chloride, sulphate or nitrate.',
    'Add carbon dioxide if a carbonate was used.',
    'For an application, say which side of neutral the problem is on.',
    'Then name a substance from the other side.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What does an acid do to blue litmus paper?',
      steps: [
        'Acid and blue litmus.',
      ],
      answer: 'It turns it red.',
    },
    {
      level: 4,
      ask: 'Name the salt formed when sodium hydroxide reacts with '
        + 'sulphuric acid.',
      steps: [
        'The metal in the base is sodium.',
        'Sulphuric acid gives sulphates.',
      ],
      answer: 'Sodium sulphate, with water.',
    },
    {
      level: 5,
      ask: 'A farmer’s soil is too acidic. '
        + 'What should be added, and why does it work?',
      steps: [
        'Too acidic means the pH is below 7.',
        'To raise a pH you add a base.',
        'Lime is a cheap base.',
        'The acid and the base neutralise each other.',
      ],
      answer: 'Lime, which is a base. '
        + 'It neutralises the acid in the soil, '
        + 'raising the pH towards 7.',
    },
  ],

  traps: [
    {
      mistake: 'Taking the first name of the salt from the acid.',
      why: 'It comes from the metal in the base. '
        + 'The acid gives the ending.',
    },
    {
      mistake: 'Treating litmus as a measure of strength.',
      why: 'It only says which side of neutral. '
        + 'For how far, use universal indicator.',
    },
    {
      mistake: 'Forgetting water as a product of neutralisation.',
      why: 'Acid plus base gives salt AND water. '
        + 'Both are marked.',
    },
    {
      mistake: 'Calling every base an alkali.',
      why: 'An alkali is a base that dissolves in water. '
        + 'Not all bases do.',
    },
  ],

  extension:
    'A strong acid is one that releases its hydrogen ions completely, '
    + 'and a weak acid releases only some. '
    + 'This is why a concentrated weak acid '
    + 'can be less corrosive than a dilute strong one, '
    + 'and why strength and concentration are different words.',

  figure: {
    alt: 'A pH scale from 0 to 14. Everything below 7 is marked acid, 7 '
      + 'is marked neutral and everything above 7 is marked alkali. '
      + 'Lemon sits near 2, rain near 6, pure water at 7, soap near 9 '
      + 'and lime near 13.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="22" text-anchor="middle" fill="currentColor" stroke="none">which side of 7, and how far from it</text>'
      + '<line x1="60" y1="150" x2="580" y2="150" stroke-width="5"/>'
      + '<line x1="60.0" y1="140" x2="60.0" y2="160"/>'
      + '<line x1="97.1" y1="140" x2="97.1" y2="160"/>'
      + '<line x1="134.2" y1="140" x2="134.2" y2="160"/>'
      + '<line x1="171.3" y1="140" x2="171.3" y2="160"/>'
      + '<line x1="208.4" y1="140" x2="208.4" y2="160"/>'
      + '<line x1="245.5" y1="140" x2="245.5" y2="160"/>'
      + '<line x1="282.6" y1="140" x2="282.6" y2="160"/>'
      + '<line x1="319.7" y1="140" x2="319.7" y2="160"/>'
      + '<line x1="356.8" y1="140" x2="356.8" y2="160"/>'
      + '<line x1="393.9" y1="140" x2="393.9" y2="160"/>'
      + '<line x1="431.0" y1="140" x2="431.0" y2="160"/>'
      + '<line x1="468.1" y1="140" x2="468.1" y2="160"/>'
      + '<line x1="505.2" y1="140" x2="505.2" y2="160"/>'
      + '<line x1="542.3" y1="140" x2="542.3" y2="160"/>'
      + '<line x1="579.4" y1="140" x2="579.4" y2="160"/>'
      + '<text x="60.0" y="186" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">0</text>'
      + '<text x="319.7" y="186" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">7</text>'
      + '<text x="579.4" y="186" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">14</text>'
      + '<text x="170" y="118" font-size="16" text-anchor="middle" fill="#c8433a" stroke="none">acid</text>'
      + '<text x="320" y="118" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">neutral</text>'
      + '<text x="470" y="118" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">alkali</text>'
      + '<line x1="60" y1="150" x2="260" y2="150" stroke="#c8433a" stroke-width="4"/>'
      + '<line x1="320" y1="150" x2="580" y2="150" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="134" y="222" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">lemon</text>'
      + '<line x1="134" y1="196" x2="134" y2="210"/>'
      + '<text x="245" y="222" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">rain</text>'
      + '<line x1="245" y1="196" x2="245" y2="210"/>'
      + '<text x="319" y="222" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">pure water</text>'
      + '<line x1="319" y1="196" x2="319" y2="210"/>'
      + '<text x="431" y="222" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">soap</text>'
      + '<line x1="431" y1="196" x2="431" y2="210"/>'
      + '<text x="542" y="222" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">lime</text>'
      + '<line x1="542" y1="196" x2="542" y2="210"/>'
      + '<text x="320" y="274" font-size="17" text-anchor="middle" fill="#c8433a" stroke="none">blue litmus turns red in an acid</text>'
      + '<text x="320" y="300" font-size="17" text-anchor="middle" fill="#0f8a4d" stroke="none">red litmus turns blue in an alkali</text>'
      + '<text x="320" y="344" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">but litmus gives the same red for a weak acid and a dangerous one</text>'
      + '<text x="320" y="376" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">so for how far, use universal indicator or a pH meter</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The tests that tell an acid from an alkali',
      columns: ['The test', 'Acid', 'Neutral', 'Base or alkali'],
      rows: [
        ['Taste or feel', 'Sour', 'Neither', 'Soapy'],
        ['Blue litmus', 'Turns red', 'No change', 'No change'],
        ['Red litmus', 'No change', 'No change', 'Turns blue'],
        ['pH', 'Below 7', 'Exactly 7', 'Above 7'],
      ],
      note: 'Litmus tells you which side of 7 you are on and nothing more. '
        + 'For how far, you need universal indicator or a pH meter.',
    },
    {
      caption: 'Naming the salt: the first word from the base, the second from '
        + 'the acid',
      columns: [
        'The acid',
        'The ending its salt takes',
        'With sodium hydroxide it gives',
      ],
      rows: [
        ['Hydrochloric acid', 'chloride', 'Sodium chloride'],
        ['Sulphuric acid', 'sulphate', 'Sodium sulphate'],
        ['Nitric acid', 'nitrate', 'Sodium nitrate'],
      ],
      note: 'The metal in the base is what stays, so the first word is '
        + 'always the metal. An acid with a carbonate gives off carbon '
        + 'dioxide as well as the salt and water.',
    },
  ],
  questions: [
    {
      id: 'acd-1',
      ask: 'A solution of pH 9 is:',
      kind: 'choice',
      options: ['Basic', 'Acidic', 'Neutral'],
      answer: 'Basic',
      teach: 'Below 7 is acidic, 7 is neutral, above 7 is basic.',
      level: 3,
    },
    {
      id: 'acd-2',
      ask: 'Hydrochloric acid with potassium hydroxide gives:',
      kind: 'choice',
      options: [
        'Potassium chloride and water',
        'Hydrogen chloride and water',
        'Potassium nitrate and water',
      ],
      answer: 'Potassium chloride and water',
      teach: 'The metal comes from the base and the ending from the acid.',
      level: 4,
    },
    {
      id: 'acd-3',
      ask: 'Why is universal indicator more useful than litmus?',
      kind: 'choice',
      options: [
        'It shows how far from neutral, not only which side',
        'It is cheaper',
        'It works without water',
      ],
      answer: 'It shows how far from neutral, not only which side',
      teach: 'Litmus gives the same red for a weak acid and a dangerous '
        + 'one.',
      level: 5,
    },
  ],
})

/* ── the carbon and nitrogen cycles ───────────────────────────────────── */

teach({
  topicId: 'carbon-nitrogen',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A cycle is a set of processes, not a set of places. '
      + 'Carbon enters living things by photosynthesis '
      + 'and returns by respiration, decay and burning. '
      + 'Nitrogen in the air is useless to plants until it is fixed, '
      + 'and it returns to the air by denitrification.',
    method: [
      'Name the process on each arrow, not just the store at each end.',
      'For carbon, ask what takes it in and what gives it back.',
      'For nitrogen, start from the fact that the gas itself cannot be '
        + 'used.',
    ],
  },

  idea:
    'In the carbon cycle, '
    + 'plants take carbon dioxide from the air by photosynthesis. '
    + 'Animals get carbon by eating plants. '
    + 'Respiration in plants and animals returns carbon dioxide to the air. '
    + 'When things die, decomposers break them down and release it too. '
    + 'Burning fuel and wood releases it, '
    + 'and so does burning fossil fuels, '
    + 'which had held carbon out of the cycle for millions of years. '
    + 'In the nitrogen cycle, '
    + 'the air is mostly nitrogen gas that plants cannot use. '
    + 'Nitrogen fixing bacteria, some living in the roots of legumes, '
    + 'and lightning, turn it into nitrates. '
    + 'Plants take up nitrates and make protein. '
    + 'Animals get nitrogen by eating plants. '
    + 'Decay returns it to the soil as ammonia, '
    + 'which nitrifying bacteria convert back to nitrates, '
    + 'while denitrifying bacteria return nitrogen to the air.',

  mechanism:
    'Learners draw these cycles as circles of boxes '
    + 'and lose the marks, '
    + 'because a cycle is its arrows and the arrows are processes. '
    + 'Air, plant, animal and soil are stores, '
    + 'and knowing where carbon sits explains nothing. '
    + 'What matters is what MOVES it: '
    + 'photosynthesis in one direction and respiration in the other, '
    + 'with decay and combustion as further returns. '
    + 'So label every arrow with a process '
    + 'and the diagram answers the question. '
    + 'The nitrogen cycle has one fact that makes it make sense, '
    + 'and it is strange enough to be worth stating alone: '
    + 'nearly four fifths of the air is nitrogen, '
    + 'and a plant standing in it can starve of nitrogen. '
    + 'The gas is unusable because its two atoms are held together too '
    + 'tightly, '
    + 'so something has to break them apart first. '
    + 'That is what fixing means, '
    + 'and only bacteria, lightning and factories can do it. '
    + 'Once you know that, the rest follows. '
    + 'It explains why farmers plant legumes in rotation, '
    + 'because the bacteria in their root nodules fix nitrogen into the '
    + 'soil. '
    + 'It explains why nitrogen fertiliser exists and costs energy to '
    + 'make. '
    + 'And it explains why denitrifying bacteria matter: '
    + 'without something returning nitrogen to the air '
    + 'the cycle would not be a cycle. '
    + 'The carbon cycle has a parallel point worth making. '
    + 'It was roughly balanced for a long time, '
    + 'and burning fossil fuel adds carbon '
    + 'that had been out of circulation for millions of years, '
    + 'which is why the balance has shifted.',

  recap:
    'You know photosynthesis and respiration as opposite reactions, '
    + 'and you know decomposers break down dead matter. '
    + 'This follows the same atoms round, '
    + 'through living things, soil and air.',

  method: [
    'Draw the stores: air, plants, animals, soil, fossil fuel.',
    'Draw arrows between them.',
    'Label every arrow with the process, not the substance.',
    'For carbon: photosynthesis in, respiration, decay and burning out.',
    'For nitrogen: start by saying the gas cannot be used directly.',
    'Name fixing, by bacteria and by lightning.',
    'Name nitrification and denitrification.',
    'Say what each kind of bacterium does.',
    'For an application, link it to farming.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which process takes carbon dioxide out of the air?',
      steps: [
        'Something must use it as a raw material.',
      ],
      answer: 'Photosynthesis.',
    },
    {
      level: 4,
      ask: 'Why do farmers plant legumes such as beans in a rotation?',
      steps: [
        'Nitrogen gas cannot be used by plants.',
        'Legumes have nitrogen fixing bacteria in their root nodules.',
        'Those bacteria turn nitrogen into nitrates.',
      ],
      answer: 'Because bacteria in their root nodules fix nitrogen from '
        + 'the air into the soil as nitrates, '
        + 'which the next crop can use.',
    },
    {
      level: 5,
      ask: 'The air is nearly four fifths nitrogen, '
        + 'yet plants can be short of nitrogen. Explain.',
      steps: [
        'Nitrogen gas has its two atoms held together very tightly.',
        'A plant cannot break that bond.',
        'So the gas is useless to it until something else does.',
        'Bacteria and lightning fix it into nitrates.',
      ],
      answer: 'Because the two atoms in nitrogen gas are bound too tightly '
        + 'for a plant to use. '
        + 'It must first be fixed into nitrates, '
        + 'by bacteria or by lightning.',
    },
  ],

  traps: [
    {
      mistake: 'Drawing the cycle as boxes with unlabelled arrows.',
      why: 'The arrows are the processes, and they carry the marks.',
    },
    {
      mistake: 'Saying plants absorb nitrogen from the air.',
      why: 'They absorb nitrates from the soil. '
        + 'The gas is unusable to them.',
    },
    {
      mistake: 'Confusing nitrogen fixing with nitrifying bacteria.',
      why: 'Fixing turns the gas into a usable form. '
        + 'Nitrifying converts ammonia from decay into nitrates.',
    },
    {
      mistake: 'Treating denitrification as damage.',
      why: 'It completes the cycle. '
        + 'Without a return to the air it would not be a cycle at all.',
    },
  ],

  extension:
    'The water cycle, the carbon cycle and the nitrogen cycle '
    + 'all work because what one organism discards another needs. '
    + 'The reason a closed system can keep going at all '
    + 'is that there is no such thing as waste in it.',

  figure: {
    alt: 'The nitrogen cycle drawn as four stores joined by labelled '
      + 'arrows: nitrogen in the air becomes nitrates in the soil by '
      + 'fixing, the nitrates are taken up by roots and built into '
      + 'protein, decay returns it to the soil as ammonia, nitrifying '
      + 'bacteria turn that back into nitrates, and denitrifying '
      + 'bacteria return nitrogen to the air.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">a cycle is its arrows, and every arrow is a process</text>'
      + '<path d="M 240 56 H 400 V 104 H 240 Z"/>'
      + '<text x="320" y="86" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">nitrogen in the air</text>'
      + '<path d="M 40 170 H 210 V 218 H 40 Z"/>'
      + '<text x="125" y="194" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">nitrates</text>'
      + '<text x="125" y="212" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">in the soil</text>'
      + '<path d="M 430 170 H 600 V 218 H 430 Z"/>'
      + '<text x="515" y="194" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">protein</text>'
      + '<text x="515" y="212" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">in plants and animals</text>'
      + '<path d="M 240 288 H 400 V 336 H 240 Z"/>'
      + '<text x="320" y="312" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">ammonia</text>'
      + '<text x="320" y="330" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">in the soil</text>'
      + '<line x1="250" y1="100" x2="152" y2="166"/>'
      + '<line x1="152" y1="166" x2="156.2" y2="156.9"/>'
      + '<line x1="152" y1="166" x2="162.0" y2="165.5"/>'
      + '<text x="268" y="126" font-size="13" text-anchor="start" fill="currentColor" stroke="none">fixing, by bacteria</text>'
      + '<text x="268" y="146" font-size="13" text-anchor="start" fill="currentColor" stroke="none">and by lightning</text>'
      + '<line x1="214" y1="186" x2="426" y2="186" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="426" y1="186" x2="417.4" y2="191.2" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="426" y1="186" x2="417.4" y2="180.8" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="320" y="170" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">taken up by roots, and built into protein</text>'
      + '<line x1="502" y1="222" x2="400" y2="300"/>'
      + '<line x1="400" y1="300" x2="403.7" y2="290.7"/>'
      + '<line x1="400" y1="300" x2="409.9" y2="298.9"/>'
      + '<text x="498" y="268" font-size="13" text-anchor="start" fill="currentColor" stroke="none">decay, by decomposers</text>'
      + '<line x1="252" y1="306" x2="160" y2="222"/>'
      + '<line x1="160" y1="222" x2="169.8" y2="224.0"/>'
      + '<line x1="160" y1="222" x2="162.9" y2="231.6"/>'
      + '<text x="152" y="272" font-size="13" text-anchor="end" fill="currentColor" stroke="none">nitrifying bacteria</text>'
      + '<line x1="70" y1="166" x2="70" y2="82" stroke="#c8433a" stroke-width="4"/>'
      + '<line x1="70" y1="82" x2="234" y2="82" stroke="#c8433a" stroke-width="4"/>'
      + '<line x1="234" y1="82" x2="225.4" y2="87.2" stroke="#c8433a" stroke-width="4"/>'
      + '<line x1="234" y1="82" x2="225.4" y2="76.8" stroke="#c8433a" stroke-width="4"/>'
      + '<text x="152" y="68" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">denitrifying bacteria</text>'
      + '<text x="320" y="376" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">four fifths of the air is nitrogen, and a plant can still starve of it</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Every arrow of the carbon cycle, and the process that drives '
        + 'it',
      columns: ['From', 'To', 'The process'],
      rows: [
        ['The air', 'Plants', 'Photosynthesis'],
        ['Plants', 'Animals', 'Eating'],
        ['Plants and animals', 'The air', 'Respiration'],
        ['Dead plants and animals', 'The air', 'Decay, by decomposers'],
        ['Wood, and fossil fuel', 'The air', 'Burning'],
      ],
      note: 'The last row is the one that shifted the balance, because '
        + 'fossil fuel had held its carbon out of the cycle for millions '
        + 'of years.',
    },
    {
      caption: 'Every arrow of the nitrogen cycle, and the process that drives '
        + 'it',
      columns: ['From', 'To', 'The process'],
      rows: [
        [
          'Nitrogen in the air',
          'Nitrates in the soil',
          'Fixing, by bacteria and by lightning',
        ],
        ['Nitrates in the soil', 'Protein in plants', 'Taken up by the roots'],
        ['Protein in plants', 'Protein in animals', 'Eating'],
        ['Dead plants and animals', 'Ammonia in the soil', 'Decay'],
        ['Ammonia in the soil', 'Nitrates in the soil', 'Nitrifying bacteria'],
        ['Nitrates in the soil', 'Nitrogen in the air', 'Denitrifying bacteria'],
      ],
      note: 'The first row is the one that makes the rest make sense. '
        + 'Nitrogen gas is held together too tightly for a plant to use, '
        + 'so something must break it apart, and only bacteria, lightning '
        + 'and factories can.',
    },
  ],
  questions: [
    {
      id: 'cyc-1',
      ask: 'Which process returns carbon dioxide to the air?',
      kind: 'choice',
      options: ['Respiration', 'Photosynthesis', 'Fixing'],
      answer: 'Respiration',
      teach: 'Decay and burning also return it.',
      level: 3,
    },
    {
      id: 'cyc-2',
      ask: 'In what form do plants take up nitrogen?',
      kind: 'choice',
      options: ['Nitrates from the soil', 'Nitrogen gas', 'Ammonia gas'],
      answer: 'Nitrates from the soil',
      teach: 'The gas must be fixed before a plant can use it.',
      level: 4,
    },
    {
      id: 'cyc-3',
      ask: 'What must be labelled on a cycle diagram?',
      kind: 'choice',
      options: [
        'The process on each arrow',
        'The colour of each store',
        'The amount in each store',
      ],
      answer: 'The process on each arrow',
      teach: 'A cycle is its processes, not its places.',
      level: 5,
    },
  ],
})

/* ── excretion ──────────────────────────────────────────────────────── */

teach({
  topicId: 'excretory-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Excretion removes the waste the body’s own reactions made. '
      + 'The kidneys filter the blood and remove urea, '
      + 'excess water and salts. '
      + 'The skin removes water and salts in sweat, '
      + 'and the lungs remove carbon dioxide. '
      + 'Egestion is not excretion.',
    method: [
      'Say which organ and which waste.',
      'Say what reaction produced that waste.',
      'Explain why leaving it in the body would be harmful.',
    ],
  },

  idea:
    'Excretion is the removal of waste produced by the body’s own '
    + 'reactions. '
    + 'Three organs do it, each removing a different waste, and the '
    + 'kidneys also control how much water the blood holds. '
    + 'Egestion, the removal of undigested food in faeces, '
    + 'is not excretion, '
    + 'because that material was never part of the body’s reactions.',

  mechanism:
    'The distinction between excretion and egestion '
    + 'is the one the examination tests, '
    + 'and it is easy once you ask where the waste came from. '
    + 'Urea was made inside you, '
    + 'by your liver, from protein you had already absorbed. '
    + 'Carbon dioxide was made inside your cells by respiration. '
    + 'Both are products of your own chemistry, '
    + 'and getting rid of them is excretion. '
    + 'The fibre in faeces was never absorbed at all. '
    + 'It passed through the gut, '
    + 'which is in a sense a tube running through you rather than part of '
    + 'you, '
    + 'so removing it is egestion. '
    + 'The other thing worth understanding is why any of this is urgent. '
    + 'These wastes are not merely useless, they are poisonous. '
    + 'Urea in the blood above a certain level damages tissue, '
    + 'and carbon dioxide dissolves to make the blood acidic, '
    + 'which stops enzymes working. '
    + 'That is why kidney failure kills within days without dialysis, '
    + 'while a person can live a long time with a poor appetite. '
    + 'The kidneys do a second job that is just as important, '
    + 'and learners often miss it: '
    + 'they regulate water. '
    + 'Drink a lot and you produce a lot of dilute urine. '
    + 'Drink little, or sweat heavily, '
    + 'and the kidneys hold water back, so urine is dark and concentrated. '
    + 'So the colour of urine is a reading of your water balance, '
    + 'and that is the practical use of this lesson.',

  recap:
    'You know respiration happens in every cell '
    + 'and that digestion absorbs food into the blood. '
    + 'This removes what those processes leave behind.',

  method: [
    'Name the organ.',
    'Name the waste it removes.',
    'Say which process produced that waste.',
    'Say what harm it would do if it stayed.',
    'For the kidneys, mention water regulation as well as urea.',
    'Keep excretion and egestion separate.',
    'Link sweating to temperature control as a second function.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which organ removes carbon dioxide from the body?',
      steps: [
        'Carbon dioxide is a gas.',
      ],
      answer: 'The lungs.',
    },
    {
      level: 4,
      ask: 'Why is urine darker when you have drunk very little?',
      steps: [
        'The kidneys control the water in the blood.',
        'With little water in, they hold water back.',
        'The same wastes leave in less water.',
      ],
      answer: 'Because the kidneys conserve water, '
        + 'so the same wastes are passed in a smaller volume, '
        + 'making the urine more concentrated.',
    },
    {
      level: 5,
      ask: 'Why is passing faeces not excretion?',
      steps: [
        'Excretion removes waste from the body’s own reactions.',
        'Faeces is mostly undigested food.',
        'It was never absorbed into the body.',
      ],
      answer: 'Because the material in faeces was never part of the '
        + 'body’s reactions. '
        + 'It passed through the gut without being absorbed, '
        + 'so removing it is egestion.',
    },
  ],

  traps: [
    {
      mistake: 'Calling egestion excretion.',
      why: 'Ask where the waste was made. '
        + 'Undigested food was never part of you.',
    },
    {
      mistake: 'Saying the kidneys make urea.',
      why: 'The liver makes it from excess amino acids. '
        + 'The kidneys remove it.',
    },
    {
      mistake: 'Forgetting that the kidneys regulate water.',
      why: 'It is half their job, '
        + 'and it explains the colour of urine.',
    },
    {
      mistake: 'Treating these wastes as merely useless.',
      why: 'They are poisonous, '
        + 'which is why kidney failure is quickly fatal.',
    },
  ],

  extension:
    'Dialysis does the kidneys’ job outside the body, '
    + 'by passing blood along a membrane '
    + 'with a fluid on the other side that has the right concentrations. '
    + 'Wastes diffuse out and what should stay does not, '
    + 'which is diffusion put to work.',

  figure: {
    alt: 'A body with the gut drawn as a tube running straight through '
      + 'it from top to bottom, so what is inside the tube was never '
      + 'part of the body. Inside the body, the liver makes urea and '
      + 'the kidney removes it, which is excretion, while what leaves '
      + 'down the tube is egestion.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="32" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">where was the waste made?</text>'
      + '<ellipse cx="200" cy="210" rx="110" ry="140"/>'
      + '<line x1="116" y1="120" x2="88" y2="108"/>'
      + '<text x="84" y="104" font-size="14" text-anchor="end" fill="currentColor" stroke="none">the body</text>'
      + '<path d="M 176 96 H 224 V 326 H 176 Z" stroke="#c8433a"/>'
      + '<line x1="200" y1="330" x2="200" y2="354" stroke="#c8433a"/>'
      + '<line x1="200" y1="354" x2="194.8" y2="345.4" stroke="#c8433a"/>'
      + '<line x1="200" y1="354" x2="205.2" y2="345.4" stroke="#c8433a"/>'
      + '<text x="200" y="376" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">the gut, a tube running through you</text>'
      + '<circle cx="140" cy="170" r="24" stroke="#0f8a4d"/>'
      + '<text x="140" y="175" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">liver</text>'
      + '<circle cx="260" cy="240" r="24" stroke="#0f8a4d"/>'
      + '<text x="260" y="245" font-size="12" text-anchor="middle" fill="#0f8a4d" stroke="none">kidney</text>'
      + '<line x1="158" y1="186" x2="240" y2="228" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="240" y1="228" x2="230.0" y2="228.7" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="240" y1="228" x2="234.7" y2="219.5" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="330" y="196" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">urea, made inside you</text>'
      + '<text x="330" y="216" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">so removing it is excretion</text>'
      + '<text x="330" y="288" font-size="13" text-anchor="start" fill="#c8433a" stroke="none">the fibre was never absorbed</text>'
      + '<text x="330" y="308" font-size="13" text-anchor="start" fill="#c8433a" stroke="none">so removing it is egestion</text>'
      + '<text x="320" y="394" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">excretion is your own chemistry, egestion is what passed through</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Each organ, what it removes, and where that waste was made',
      columns: ['Organ', 'What it removes', 'Where that waste came from'],
      rows: [
        [
          'Kidneys',
          'Urea, excess water and excess salts, as urine',
          'Urea is made in the liver out of excess amino acids',
        ],
        [
          'Lungs',
          'Carbon dioxide, and some water vapour',
          'Made in every cell by respiration',
        ],
        [
          'Skin',
          'Water and salts, in sweat',
          'From the blood, and the sweating cools you as well',
        ],
      ],
      note: 'The kidneys do a second job that is just as important: they '
        + 'control how much water the blood holds, which is why urine is '
        + 'dark and concentrated when you have drunk little.',
    },
    {
      caption: 'Excretion and egestion, which the examination keeps apart',
      columns: ['The question', 'Excretion', 'Egestion'],
      rows: [
        [
          'What is removed',
          'Urea, carbon dioxide, excess salts',
          'Undigested food, as faeces',
        ],
        [
          'Where it was made',
          'Inside you, by your own reactions',
          'Nowhere. It was never made by you',
        ],
        [
          'Was it ever part of you',
          'Yes, it was carried in your blood',
          'No, it passed down the gut',
        ],
        [
          'What happens if it stays',
          'It poisons you within days',
          'It is uncomfortable, and not poisonous',
        ],
      ],
      note: 'Urea above a certain level in the blood damages tissue, and '
        + 'carbon dioxide dissolves to make the blood acidic, which stops '
        + 'enzymes working. That is why kidney failure kills so quickly '
        + 'without dialysis.',
    },
  ],
  questions: [
    {
      id: 'exc-1',
      ask: 'Which waste do the kidneys remove?',
      kind: 'choice',
      options: ['Urea', 'Carbon dioxide', 'Fibre'],
      answer: 'Urea',
      teach: 'The lungs remove carbon dioxide; fibre is egested.',
      level: 3,
    },
    {
      id: 'exc-2',
      ask: 'Where is urea made?',
      kind: 'choice',
      options: ['In the liver', 'In the kidneys', 'In the bladder'],
      answer: 'In the liver',
      teach: 'From excess amino acids. The kidneys then remove it.',
      level: 4,
    },
    {
      id: 'exc-3',
      ask: 'What is the test of whether something is excretion?',
      kind: 'choice',
      options: [
        'Whether the waste came from the body’s own reactions',
        'Whether it is a liquid',
        'Whether it leaves daily',
      ],
      answer: 'Whether the waste came from the body’s own reactions',
      teach: 'Undigested food never entered the body, so it is egested.',
      level: 5,
    },
  ],
})

/* ── transport in plants ──────────────────────────────────────────── */

teach({
  topicId: 'transport-plants',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Water enters the roots by osmosis '
      + 'and rises through xylem to the leaves, '
      + 'pulled up by water evaporating from the leaf surface. '
      + 'Food made in the leaf travels in phloem to wherever it is needed. '
      + 'Xylem goes up only; phloem goes both ways.',
    method: [
      'Say which tissue, which substance and which direction.',
      'Explain the rise of water by the pull from the leaves.',
      'Remember that a plant has no pump.',
    ],
  },

  idea:
    'Water and dissolved minerals enter root hair cells from the soil, '
    + 'the water by osmosis. '
    + 'They travel up the stem in xylem vessels, '
    + 'which are dead, hollow and strengthened, '
    + 'and reach the leaves. '
    + 'Transpiration is the evaporation of water from the leaves, '
    + 'mostly through the stomata, '
    + 'and it is what pulls the column of water up. '
    + 'Food made in the leaves by photosynthesis '
    + 'is carried in phloem tissue '
    + 'to growing points, roots, fruits and stores, '
    + 'which is called translocation. '
    + 'The two tissues do opposite jobs, and keeping them apart is '
    + 'most of this topic.',

  mechanism:
    'The question that makes this topic interesting '
    + 'is how water gets to the top of a tall tree with no pump, '
    + 'and the answer is that it is pulled rather than pushed. '
    + 'Water evaporates from the leaf surface. '
    + 'Each molecule that leaves is attached to the one behind it, '
    + 'because water molecules cling together, '
    + 'so the whole column in the xylem is dragged up a little. '
    + 'With millions of molecules leaving every second, '
    + 'the pull is continuous and strong enough to reach the top of a tree. '
    + 'Three things follow at once, '
    + 'and all three are examination answers. '
    + 'Transpiration is faster in heat, wind and dry air, '
    + 'because all three make evaporation faster, '
    + 'so a plant takes up more water on a hot windy day. '
    + 'A plant wilts when the pull continues '
    + 'and the roots cannot supply enough, '
    + 'so the cells lose their firmness. '
    + 'And closing the stomata saves water '
    + 'but also stops carbon dioxide entering, '
    + 'which is why a plant short of water also stops growing. '
    + 'The two tissues are worth keeping apart deliberately. '
    + 'Xylem is dead, hollow and one way: '
    + 'it is plumbing. '
    + 'Phloem is living and goes either way, '
    + 'because sugar made in a leaf '
    + 'may be needed in a root below or a fruit above, '
    + 'and that changes through the year.',

  recap:
    'You know what photosynthesis makes and where, '
    + 'and you know osmosis moves water across a membrane. '
    + 'This moves both water and food around the whole plant.',

  method: [
    'Name the tissue: xylem for water, phloem for food.',
    'Name the substance it carries.',
    'Give the direction, and say whether it is one way.',
    'For water, start at the root hair and work upwards.',
    'Explain the rise by evaporation pulling the column.',
    'Name the conditions that speed transpiration and say why.',
    'For food, say it goes to wherever it is needed, up or down.',
    'Link wilting and stomatal closing to the same mechanism.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which tissue carries water up a stem?',
      steps: [
        'Two tissues; one is for water.',
      ],
      answer: 'Xylem.',
    },
    {
      level: 4,
      ask: 'Why does a plant take up more water on a hot, windy day?',
      steps: [
        'Heat and wind both speed evaporation.',
        'Faster evaporation from the leaves pulls harder.',
        'So more water is drawn up through the roots.',
      ],
      answer: 'Because transpiration is faster, '
        + 'so the pull on the water column is greater '
        + 'and more is drawn in at the roots.',
    },
    {
      level: 5,
      ask: 'How does water reach the top of a tall tree with no pump?',
      steps: [
        'Water evaporates from the leaf surface.',
        'Water molecules cling to one another.',
        'So each one leaving drags the next up behind it.',
        'Millions leaving every second give a continuous pull.',
      ],
      answer: 'It is pulled, not pushed. '
        + 'Evaporation from the leaves drags the whole connected column of '
        + 'water up the xylem, '
        + 'because water molecules cling together.',
    },
  ],

  traps: [
    {
      mistake: 'Saying the roots push water up.',
      why: 'There is no pump. '
        + 'Evaporation at the top pulls it.',
    },
    {
      mistake: 'Saying phloem carries water.',
      why: 'Phloem carries food. Xylem carries water.',
    },
    {
      mistake: 'Treating phloem as one way.',
      why: 'Food goes to wherever it is needed, up or down.',
    },
    {
      mistake: 'Calling transpiration a waste of water.',
      why: 'It is what moves the water and the minerals at all, '
        + 'and it cools the leaf.',
    },
  ],

  extension:
    'A ring of bark cut round a tree kills it slowly, '
    + 'because the phloem is in the bark '
    + 'while the xylem is deeper. '
    + 'Water still rises, so the leaves live for a while, '
    + 'but no food can reach the roots.',

  figure: {
    alt: 'A plant with two tubes drawn up its stem. The xylem carries '
      + 'water one way only, from the roots to the leaves, where it '
      + 'evaporates away and drags the whole column up behind it. The '
      + 'phloem beside it carries food either up or down, to wherever '
      + 'it is needed.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">water is pulled up, not pushed</text>'
      + '<path d="M 300 330 L 300 120"/>'
      + '<path d="M 340 330 L 340 120"/>'
      + '<path d="M 300 120 Q 230 60 170 110 Q 240 150 300 128 Z"/>'
      + '<path d="M 340 120 Q 410 60 470 110 Q 400 150 340 128 Z"/>'
      + '<line x1="300" y1="330" x2="240" y2="376"/>'
      + '<line x1="340" y1="330" x2="400" y2="376"/>'
      + '<line x1="320" y1="330" x2="320" y2="380"/>'
      + '<text x="320" y="396" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">root hairs take water in by osmosis</text>'
      + '<line x1="310" y1="310" x2="310" y2="130" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="260" y="240" font-size="13" text-anchor="end" fill="#0f8a4d" stroke="none">xylem</text>'
      + '<line x1="258" y1="236" x2="304" y2="230"/>'
      + '<line x1="330" y1="310" x2="330" y2="130" stroke-width="4"/>'
      + '<text x="386" y="268" font-size="13" text-anchor="start" fill="currentColor" stroke="none">phloem</text>'
      + '<line x1="384" y1="264" x2="336" y2="258"/>'
      + '<line x1="220" y1="98" x2="180" y2="62" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="180" y1="62" x2="189.8" y2="63.9" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="180" y1="62" x2="182.9" y2="71.6" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="420" y1="98" x2="460" y2="62" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="460" y1="62" x2="457.1" y2="71.6" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="460" y1="62" x2="450.2" y2="63.9" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="320" y="54" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">water evaporates away, and drags the column up</text>'
      + '<line x1="310" y1="150" x2="310" y2="112" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="310" y1="112" x2="315.2" y2="120.6" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="310" y1="112" x2="304.8" y2="120.6" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="330" y1="190" x2="330" y2="150"/>'
      + '<line x1="330" y1="150" x2="335.2" y2="158.6"/>'
      + '<line x1="330" y1="150" x2="324.8" y2="158.6"/>'
      + '<line x1="330" y1="230" x2="330" y2="270"/>'
      + '<line x1="330" y1="270" x2="324.8" y2="261.4"/>'
      + '<line x1="330" y1="270" x2="335.2" y2="261.4"/>'
      + '<text x="470" y="200" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">xylem goes up only</text>'
      + '<text x="470" y="222" font-size="13" text-anchor="start" fill="currentColor" stroke="none">phloem goes either way</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Xylem and phloem, which do opposite jobs',
      columns: ['The question', 'Xylem', 'Phloem'],
      rows: [
        [
          'What it carries',
          'Water, and the minerals dissolved in it',
          'Food made in the leaves',
        ],
        ['Which way', 'Upwards only', 'Up or down, to wherever it is needed'],
        ['Living or dead', 'Dead, hollow and strengthened', 'Living'],
        ['What the movement is called', 'The transpiration stream', 'Translocation'],
      ],
      note: 'Xylem is plumbing. Phloem is delivery, and where the sugar is '
        + 'wanted changes through the year, which is why it has to go '
        + 'both ways.',
    },
    {
      caption: 'What makes transpiration faster, and what follows for the '
        + 'plant',
      columns: ['The condition', 'Why it speeds evaporation up', 'What the plant does'],
      rows: [
        ['Heat', 'Warm water evaporates faster', 'Takes up more water from the soil'],
        [
          'Wind',
          'Moist air is carried away from the leaf',
          'Takes up more water from the soil',
        ],
        [
          'Dry air',
          'There is more room in it for vapour',
          'Takes up more water from the soil',
        ],
        [
          'Not enough water at the roots',
          'The pull continues whatever the roots can supply',
          'Wilts, and closes its stomata, so it also stops growing',
        ],
      ],
      note: 'Closing the stomata saves water and shuts carbon dioxide out '
        + 'at the same time, which is why a plant short of water stops '
        + 'growing as well as wilting.',
    },
  ],
  questions: [
    {
      id: 'trp-1',
      ask: 'Transpiration is:',
      kind: 'choice',
      options: [
        'evaporation of water from the leaves',
        'water entering the roots',
        'food moving in phloem',
      ],
      answer: 'evaporation of water from the leaves',
      teach: 'And it is what pulls the water column up.',
      level: 3,
    },
    {
      id: 'trp-2',
      ask: 'Which tissue carries food, and in which direction?',
      kind: 'choice',
      options: [
        'Phloem, either way',
        'Phloem, upwards only',
        'Xylem, downwards only',
      ],
      answer: 'Phloem, either way',
      teach: 'Food goes to whichever part needs it.',
      level: 4,
    },
    {
      id: 'trp-3',
      ask: 'Why does a plant short of water also stop growing?',
      kind: 'choice',
      options: [
        'Closing the stomata also keeps carbon dioxide out',
        'It cannot absorb minerals',
        'The phloem collapses',
      ],
      answer: 'Closing the stomata also keeps carbon dioxide out',
      teach: 'Saving water costs it the raw material for photosynthesis.',
      level: 5,
    },
  ],
})

/* ── pressure ─────────────────────────────────────────────────────── */

teach({
  topicId: 'pressure-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Pressure is force divided by area. '
      + 'The same force on a smaller area gives more pressure, '
      + 'which is why a sharp knife cuts and a blunt one does not. '
      + 'In a liquid, pressure increases with depth '
      + 'and acts in all directions.',
    method: [
      'Write the force and the area with their units.',
      'Divide force by area.',
      'For a comparison, ask what changed: the force or the area.',
    ],
  },

  idea:
    'Pressure is the force acting on each unit of area: '
    + 'force divided by area, '
    + 'measured in newtons per square metre, called pascals. '
    + 'The same force spread over a larger area gives less pressure, '
    + 'and concentrated on a smaller area gives more. '
    + 'A liquid presses too, and how hard depends on how deep you are '
    + 'and on what the liquid is. '
    + 'The atmosphere exerts pressure too, '
    + 'which is why a sucker sticks and a drinking straw works.',

  mechanism:
    'Pressure explains a long list of everyday things '
    + 'because the force is often fixed and the area is a design choice. '
    + 'A sharp knife and a blunt one, pressed with the same hand, '
    + 'apply the same force. '
    + 'The sharp one concentrates it on a tiny area along its edge, '
    + 'so the pressure there is enormous and the material gives way. '
    + 'The blunt one spreads the same force over a wider edge, '
    + 'so the pressure is too low to cut. '
    + 'Nothing about the force changed. '
    + 'The same reasoning runs the other way: '
    + 'a tractor has wide tyres '
    + 'so that its weight is spread and the pressure on soft ground is low '
    + 'enough '
    + 'not to sink, '
    + 'and a nail has a point for one reason and a wide head for the '
    + 'opposite reason. '
    + 'So when a question asks why something is shaped as it is, '
    + 'ask whether the designer wanted high pressure or low, '
    + 'and the area explains itself. '
    + 'Liquid pressure has its own useful fact. '
    + 'It increases with depth, '
    + 'because the deeper you are the more liquid is above you, '
    + 'which is why a dam wall is thicker at the bottom '
    + 'and why water sprays further from a lower hole in a tin. '
    + 'And it acts in all directions, not just downwards, '
    + 'which is why a diver feels it on every side '
    + 'and why water pushes outwards on the dam wall at all.',

  recap:
    'You know what a force is and how to find an area. '
    + 'Pressure is the first of those divided by the second, '
    + 'and that one division explains a surprising number of designs.',

  method: [
    'Write down the force in newtons.',
    'Write down the area in square metres.',
    'Convert units before dividing if they do not match.',
    'Divide force by area.',
    'Give the answer in pascals.',
    'For a design question, ask whether high or low pressure was wanted.',
    'For a liquid, note that pressure rises with depth and acts in all '
      + 'directions.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A force of 200 N acts on 4 square metres. Find the pressure.',
      steps: [
        'Pressure is force over area.',
        '200 divided by 4.',
      ],
      answer: '50 pascals.',
    },
    {
      level: 4,
      ask: 'Why does a tractor have wide tyres?',
      steps: [
        'Its weight is fixed.',
        'Wide tyres spread it over a larger area.',
        'Larger area means lower pressure.',
      ],
      answer: 'To lower the pressure on the ground, '
        + 'so that it does not sink into soft soil.',
    },
    {
      level: 5,
      ask: 'Why does a sharp knife cut more easily than a blunt one, '
        + 'if you press just as hard?',
      steps: [
        'The force is the same in both cases.',
        'The sharp edge has a much smaller area.',
        'Pressure is force over area.',
        'So the pressure under the sharp edge is far higher.',
      ],
      answer: 'Because the same force acts on a much smaller area, '
        + 'so the pressure is far higher and the material gives way. '
        + 'The force did not change; the area did.',
    },
  ],

  traps: [
    {
      mistake: 'Using pressure and force as the same word.',
      why: 'The same force gives different pressures on different areas.',
    },
    {
      mistake: 'Mixing square centimetres with newtons and giving pascals.',
      why: 'Pascals need square metres. Convert first.',
    },
    {
      mistake: 'Thinking liquid pressure acts only downwards.',
      why: 'It acts equally in all directions at a given depth.',
    },
    {
      mistake: 'Thinking the shape of a container changes the pressure at '
        + 'a depth.',
      why: 'Only the depth and the density matter, not the width.',
    },
  ],

  extension:
    'A hydraulic brake uses liquid pressure to multiply a force. '
    + 'A small force pushes on a small piston. '
    + 'The pressure is the same all through the liquid. '
    + 'So a larger piston feels the same pressure on a bigger area, '
    + 'and that gives a larger force.',

  figure: {
    alt: 'The same hand pressing with 20 newtons on two blades. The '
      + 'sharp blade concentrates that force on a tiny area along its '
      + 'edge, so the pressure is enormous and it cuts. The blunt blade '
      + 'spreads the same force over a wide edge, so the pressure is '
      + 'low and it does not.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">the same force, and a different area</text>'
      + '<line x1="160" y1="70" x2="160" y2="110"/>'
      + '<line x1="160" y1="110" x2="154.8" y2="101.4"/>'
      + '<line x1="160" y1="110" x2="165.2" y2="101.4"/>'
      + '<text x="160" y="56" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the same hand, 20 N</text>'
      + '<path d="M 120 114 L 200 114 L 170 170 L 150 170 Z"/>'
      + '<line x1="150" y1="170" x2="170" y2="170" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="160" y="198" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">a sharp edge</text>'
      + '<text x="160" y="222" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">a tiny area</text>'
      + '<text x="160" y="244" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">so the pressure is enormous</text>'
      + '<text x="160" y="268" font-size="14" text-anchor="middle" fill="#0f8a4d" stroke="none">it cuts</text>'
      + '<line x1="470" y1="70" x2="470" y2="110"/>'
      + '<line x1="470" y1="110" x2="464.8" y2="101.4"/>'
      + '<line x1="470" y1="110" x2="475.2" y2="101.4"/>'
      + '<text x="470" y="56" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the same hand, 20 N</text>'
      + '<path d="M 420 114 L 520 114 L 506 170 L 434 170 Z"/>'
      + '<line x1="434" y1="170" x2="506" y2="170" stroke="#c8433a" stroke-width="4"/>'
      + '<text x="470" y="198" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">a blunt edge</text>'
      + '<text x="470" y="222" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">a wide area</text>'
      + '<text x="470" y="244" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">so the pressure is low</text>'
      + '<text x="470" y="268" font-size="14" text-anchor="middle" fill="#c8433a" stroke="none">it does not cut</text>'
      + '<text x="320" y="324" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">nothing about the force changed</text>'
      + '<text x="320" y="354" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">pressure is force divided by area, so the area did it</text>'
      + '<text x="320" y="390" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">ask whether the designer wanted high pressure or low</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'What the designer wanted, and how the area delivers it',
      columns: ['The thing', 'High pressure or low', 'How the area does it'],
      rows: [
        ['A knife edge', 'High', 'A tiny area along the edge'],
        [
          'A drawing pin',
          'High at the point, low under the thumb',
          'A point one end and a wide top the other',
        ],
        [
          'A nail',
          'High at the point, low at the head',
          'A point to enter the wood, a wide head to take the hammer',
        ],
        ['A tractor tyre', 'Low', 'Wide, so the weight is spread and it does not sink'],
        ['The foot of a camel', 'Low', 'Broad, so it does not sink in sand'],
      ],
      note: 'The force is usually fixed and the area is the design choice, '
        + 'so when a question asks why something is shaped as it is, the '
        + 'area explains itself.',
    },
    {
      caption: 'Pressure in a liquid, and what each fact explains',
      columns: ['The fact', 'Why it is true', 'What it explains'],
      rows: [
        [
          'It increases with depth',
          'More liquid lies above you',
          'A dam wall is thicker at the bottom, and water sprays further from a lower hole',
        ],
        [
          'It acts in every direction',
          'Not only downwards',
          'Water pushes outwards on the dam, and a diver feels it on every side',
        ],
        [
          'It depends on the density of the liquid',
          'A denser liquid weighs more for the same depth',
          'The sea presses harder than fresh water at the same depth',
        ],
      ],
      note: 'The atmosphere presses too, which is why a sucker sticks and '
        + 'why a drinking straw works at all.',
    },
  ],
  questions: [
    {
      id: 'prs-1',
      ask: 'Pressure is:',
      kind: 'choice',
      options: [
        'force divided by area',
        'force times area',
        'area divided by force',
      ],
      answer: 'force divided by area',
      teach: 'Measured in newtons per square metre, called pascals.',
      level: 3,
    },
    {
      id: 'prs-2',
      ask: 'Why is a dam wall thicker at the bottom?',
      kind: 'choice',
      options: [
        'Water pressure increases with depth',
        'The ground is softer there',
        'It looks stronger',
      ],
      answer: 'Water pressure increases with depth',
      teach: 'There is more water above, so the pressure is greater.',
      level: 4,
    },
    {
      id: 'prs-3',
      ask: 'Two shoes press with the same force. '
        + 'Which gives more pressure on the floor?',
      kind: 'choice',
      options: [
        'The one with the smaller sole',
        'The one with the larger sole',
        'They are the same',
      ],
      answer: 'The one with the smaller sole',
      teach: 'Same force on a smaller area means higher pressure.',
      level: 5,
    },
  ],
})

/* ── simple machines ────────────────────────────────────────────── */

teach({
  topicId: 'machines-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A machine lets a small force move a large load, '
      + 'and it does not reduce the work. '
      + 'Mechanical advantage is load over effort. '
      + 'Velocity ratio is effort distance over load distance. '
      + 'Efficiency is work out over work in, always under 100 per cent.',
    method: [
      'Write the load, the effort and the two distances.',
      'Mechanical advantage is load over effort.',
      'Remember that the effort always moves further than the load.',
    ],
  },

  idea:
    'A simple machine makes work easier '
    + 'by letting a smaller force act over a longer distance. '
    + 'A lever has a fulcrum, a load and an effort. '
    + 'A pulley system changes the direction of a force '
    + 'and can divide it between several ropes. '
    + 'An inclined plane, a wedge and a screw '
    + 'all let a load rise gradually. '
    + 'Three numbers describe how well a machine does it, one about '
    + 'the forces, one about the distances, and one about how much is '
    + 'wasted on the way.',

  mechanism:
    'The misconception this topic exists to remove '
    + 'is that a machine reduces the work. '
    + 'It does not, and it cannot. '
    + 'Work is force times distance, '
    + 'and a machine trades one against the other. '
    + 'Lift a 200 newton load one metre with a pulley system '
    + 'and you might pull with only 50 newtons, '
    + 'which feels like a gain of four times, '
    + 'but you will have to pull four metres of rope through your hands. '
    + '50 times 4 is 200, '
    + 'which is exactly 200 times 1. '
    + 'The work is the same, '
    + 'and the machine has only changed how it is parcelled out: '
    + 'less force, more distance. '
    + 'That is why the effort always moves further than the load, '
    + 'in every machine there has ever been, '
    + 'and it is a check you can run on any answer. '
    + 'In reality you must pull a little harder than the ideal, '
    + 'because some of your work goes into friction and into lifting the '
    + 'machine itself, '
    + 'and that is what efficiency measures. '
    + 'Efficiency is always below 100 per cent, '
    + 'and a claim of 100 per cent, or more, '
    + 'is a sign of an arithmetic error rather than a good machine. '
    + 'Keeping mechanical advantage and velocity ratio apart is worth the '
    + 'care. '
    + 'Mechanical advantage is about the forces, '
    + 'velocity ratio is about the distances, '
    + 'and efficiency is the first divided by the second.',

  recap:
    'You know what a force is, and that work is force times distance. '
    + 'A machine rearranges those two '
    + 'without changing their product.',

  method: [
    'Identify the machine: lever, pulley, inclined plane.',
    'Mark the load, the effort and the fulcrum.',
    'Write the load and effort forces.',
    'Write the distance each moves.',
    'Mechanical advantage: load over effort.',
    'Velocity ratio: effort distance over load distance.',
    'Efficiency: mechanical advantage over velocity ratio, times 100.',
    'Check the efficiency is below 100 per cent.',
    'Check the effort moved further than the load.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A machine lifts a 300 N load with an effort of 100 N. '
        + 'Find the mechanical advantage.',
      steps: [
        'Load over effort.',
        '300 divided by 100.',
      ],
      answer: '3.',
    },
    {
      level: 4,
      ask: 'The effort moves 5 m while the load rises 1 m. '
        + 'Find the velocity ratio.',
      steps: [
        'Effort distance over load distance.',
        '5 divided by 1.',
      ],
      answer: '5.',
    },
    {
      level: 5,
      ask: 'A pulley lets you lift 200 N with 50 N of effort. '
        + 'Why is this not getting something for nothing?',
      steps: [
        'Work is force times distance.',
        'To raise the load 1 m you must pull about 4 m of rope.',
        '50 times 4 is 200.',
        '200 times 1 is also 200.',
      ],
      answer: 'Because you must pull four times as far. '
        + 'The force is divided by four and the distance multiplied by '
        + 'four, '
        + 'so the work is the same. '
        + 'In practice it is slightly more, because of friction.',
    },
  ],

  traps: [
    {
      mistake: 'Saying a machine reduces the work done.',
      why: 'It trades force against distance. '
        + 'The work is the same, or slightly more.',
    },
    {
      mistake: 'An efficiency of 100 per cent or above.',
      why: 'Impossible. Friction always takes some. '
        + 'Check the arithmetic.',
    },
    {
      mistake: 'Confusing mechanical advantage with velocity ratio.',
      why: 'One is about forces and the other about distances.',
    },
    {
      mistake: 'Forgetting that the effort moves further than the load.',
      why: 'It always does. '
        + 'If your answer says otherwise, something is wrong.',
    },
  ],

  extension:
    'Oiling a machine raises its efficiency '
    + 'without changing its velocity ratio at all, '
    + 'because the ratio is fixed by the geometry '
    + 'and the efficiency depends on friction. '
    + 'That is a clean way to see that the two are different quantities.',

  figure: {
    alt: 'A pulley system written as two sides of a sum. You pull with '
      + '50 newtons through 4 metres, which is 200, and the load of 200 '
      + 'newtons rises 1 metre, which is also 200. The work is the same '
      + 'on both sides: the machine has only traded force against '
      + 'distance.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">a machine never reduces the work</text>'
      + '<path d="M 60 70 H 290 V 210 H 60 Z" stroke="#0f8a4d"/>'
      + '<text x="175" y="98" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">you pull</text>'
      + '<text x="175" y="130" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">50 N</text>'
      + '<text x="175" y="166" font-size="16" text-anchor="middle" fill="#0f8a4d" stroke="none">through</text>'
      + '<text x="175" y="196" font-size="24" text-anchor="middle" fill="#0f8a4d" stroke="none">4 metres</text>'
      + '<path d="M 350 70 H 580 V 210 H 350 Z"/>'
      + '<text x="465" y="98" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">the load rises</text>'
      + '<text x="465" y="130" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">200 N</text>'
      + '<text x="465" y="166" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">through</text>'
      + '<text x="465" y="196" font-size="24" text-anchor="middle" fill="currentColor" stroke="none">1 metre</text>'
      + '<text x="175" y="256" font-size="18" text-anchor="middle" fill="#0f8a4d" stroke="none">50 × 4 is 200</text>'
      + '<text x="465" y="256" font-size="18" text-anchor="middle" fill="currentColor" stroke="none">200 × 1 is 200</text>'
      + '<line x1="60" y1="278" x2="580" y2="278"/>'
      + '<text x="320" y="312" font-size="20" text-anchor="middle" fill="currentColor" stroke="none">the work is exactly the same</text>'
      + '<text x="320" y="346" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">less force, and more distance, is the whole of it</text>'
      + '<text x="320" y="382" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">so the effort always moves further than the load</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The three numbers, what each is about, and how to find it',
      columns: ['Quantity', 'What it is about', 'How to find it'],
      rows: [
        ['Mechanical advantage', 'The forces', 'The load divided by the effort'],
        [
          'Velocity ratio',
          'The distances',
          'How far the effort moves, divided by how far the load moves',
        ],
        [
          'Efficiency',
          'How much is wasted',
          'The mechanical advantage divided by the velocity ratio, as a percentage',
        ],
      ],
      note: 'Efficiency is always below 100 per cent, because some of your '
        + 'work goes into friction and into lifting the machine itself. A '
        + 'claim of 100, or more, is an arithmetic error rather than a '
        + 'good machine.',
    },
    {
      caption: 'Each simple machine, what it gives you and what it costs',
      columns: ['Machine', 'What it does for you', 'What it costs you'],
      rows: [
        [
          'Lever',
          'A small effort moves a large load',
          'The effort moves much further than the load',
        ],
        [
          'Pulley system',
          'Divides the force between several ropes',
          'You pull that many metres of rope through your hands',
        ],
        [
          'Inclined plane',
          'The load rises gradually',
          'The load travels a much longer path',
        ],
        [
          'Wedge',
          'Turns a push along into a split sideways',
          'It must travel in for the split to widen',
        ],
        [
          'Screw',
          'An inclined plane wrapped round and round',
          'Many turns for a small rise',
        ],
      ],
      note: 'Every row trades the same way, because work is force times '
        + 'distance and a machine can only move the trade, never win it.',
    },
  ],
  questions: [
    {
      id: 'mch-1',
      ask: 'Mechanical advantage is:',
      kind: 'choice',
      options: [
        'load divided by effort',
        'effort divided by load',
        'work out over work in',
      ],
      answer: 'load divided by effort',
      teach: 'The last one is efficiency.',
      level: 3,
    },
    {
      id: 'mch-2',
      ask: 'Can a machine be 100 per cent efficient?',
      kind: 'choice',
      options: [
        'No, friction always takes some work',
        'Yes, if it is well made',
        'Yes, if it is oiled',
      ],
      answer: 'No, friction always takes some work',
      teach: 'An answer of 100 or more means an arithmetic error.',
      level: 4,
    },
    {
      id: 'mch-3',
      ask: 'What does a machine actually do?',
      kind: 'choice',
      options: [
        'Trades a smaller force for a longer distance',
        'Reduces the work needed',
        'Creates energy',
      ],
      answer: 'Trades a smaller force for a longer distance',
      teach: 'Which is why the effort always moves further than the load.',
      level: 5,
    },
  ],
})

/* ── electricity and magnetism ────────────────────────────────── */

teach({
  topicId: 'electricity-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Current is the flow of charge, measured in amperes. '
      + 'Voltage is the push driving it. '
      + 'Resistance opposes it, and V = IR connects the three. '
      + 'In series the current is the same everywhere. '
      + 'In parallel the voltage is the same across each branch.',
    method: [
      'Draw the circuit and mark which quantity is shared.',
      'Series: same current. Parallel: same voltage.',
      'Use V = IR on one component at a time.',
    ],
  },

  idea:
    'An electric current is a flow of charge round a complete circuit, '
    + 'measured in amperes with an ammeter placed in the circuit. '
    + 'Voltage, or potential difference, is the push that drives it, '
    + 'measured in volts with a voltmeter placed across a component. '
    + 'Resistance, in ohms, opposes the current, '
    + 'and $V = IR$ relates the three. '
    + 'A circuit is wired either in series, with one path, or in '
    + 'parallel, with a branch for each component, and which one it is '
    + 'decides what is shared and what divides. '
    + 'A current in a wire makes a magnetic field, '
    + 'and a coil round an iron core makes an electromagnet, '
    + 'which can be switched off.',

  mechanism:
    'Series and parallel questions are answerable the moment you know '
    + 'which quantity is shared, '
    + 'and guesswork otherwise. '
    + 'In series there is one path, '
    + 'so every charge that passes one component passes all of them, '
    + 'which means the current is the same everywhere. '
    + 'The push from the supply is used up along the way, '
    + 'so the voltages across the components add to the supply voltage. '
    + 'In parallel each branch is connected directly across the supply, '
    + 'so each one gets the full voltage, '
    + 'while the charge divides between the branches, '
    + 'so the branch currents add to the total. '
    + 'Say those two sentences before any calculation '
    + 'and the rest is V = IR applied to one component at a time. '
    + 'This also explains two things learners are asked about. '
    + 'House lights are wired in parallel '
    + 'so that each gets the full mains voltage '
    + 'and so that one failing does not break the path for the others, '
    + 'which is exactly what happens in a series string of lamps. '
    + 'And a fuse is placed in series, '
    + 'because it must carry the whole current to be able to break it. '
    + 'The electromagnet is worth understanding as a trade. '
    + 'A permanent magnet is always magnetic. '
    + 'An electromagnet is magnetic only while current flows, '
    + 'which is a disadvantage that turns out to be the whole point: '
    + 'it can be switched, '
    + 'which is why it is in bells, relays, motors and scrapyard cranes.',

  recap:
    'You have met simple circuits and know a magnet attracts iron. '
    + 'This measures what flows in a circuit, '
    + 'and connects electricity to magnetism.',

  method: [
    'Draw the circuit with correct symbols.',
    'Say whether it is series or parallel.',
    'Series: the current is the same everywhere; the voltages add.',
    'Parallel: the voltage is the same across each branch; the currents '
      + 'add.',
    'Use V = IR on one component at a time.',
    'Place an ammeter in the circuit and a voltmeter across a component.',
    'Give every answer with its unit.',
    'For an electromagnet, say what strengthens it: more turns, more '
      + 'current, an iron core.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A 12 V supply drives 3 A through a resistor. '
        + 'Find the resistance.',
      steps: [
        'V = IR, so R = V over I.',
        '12 divided by 3.',
      ],
      answer: '4 ohms.',
    },
    {
      level: 4,
      ask: 'Two lamps are in series on a 12 V supply, '
        + 'and 4 V is measured across the first. '
        + 'What is across the second?',
      steps: [
        'In series the voltages add to the supply.',
        '12 - 4 = 8.',
      ],
      answer: '8 volts.',
    },
    {
      level: 5,
      ask: 'Why are the lights in a house wired in parallel?',
      steps: [
        'Each lamp needs the full mains voltage.',
        'In parallel each branch gets the full supply.',
        'In series the voltage would be shared and all would be dim.',
        'Also, in series one failure breaks the single path.',
      ],
      answer: 'So that each lamp gets the full supply voltage, '
        + 'and so that one lamp failing does not break the circuit for the '
        + 'others, '
        + 'which is what happens in series.',
    },
  ],

  traps: [
    {
      mistake: 'Adding currents in a series circuit.',
      why: 'There is one path, so the current is the same everywhere. '
        + 'It is the voltages that add.',
    },
    {
      mistake: 'Sharing the voltage between parallel branches.',
      why: 'Each branch is across the supply, so each gets all of it. '
        + 'It is the currents that divide.',
    },
    {
      mistake: 'Connecting a voltmeter in the circuit.',
      why: 'A voltmeter goes across a component; '
        + 'an ammeter goes in the circuit.',
    },
    {
      mistake: 'Treating an electromagnet as weaker than a permanent '
        + 'magnet.',
      why: 'It can be far stronger, '
        + 'and its real feature is that it can be switched off.',
    },
  ],

  extension:
    'A motor uses the force on a current carrying wire in a magnetic '
    + 'field, '
    + 'and a generator works the reverse way, '
    + 'making a current by moving a wire in a field. '
    + 'The two are the same relationship run in opposite directions.',

  figure: {
    alt: 'Two circuits. The series circuit has one path through both '
      + 'lamps, so the current is the same everywhere and the voltages '
      + 'across the lamps add to the supply. The parallel circuit has a '
      + 'branch for each lamp, each one straight across the supply, so '
      + 'each lamp gets the full voltage.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">ask which quantity is shared, then use V = IR</text>'
      + '<path d="M 50 90 H 290 V 220 H 50 Z"/>'
      + '<line x1="156" y1="90" x2="166" y2="90"/>'
      + '<line x1="166" y1="76" x2="166" y2="104"/>'
      + '<line x1="174" y1="83" x2="174" y2="97"/>'
      + '<line x1="174" y1="90" x2="184" y2="90"/>'
      + '<circle cx="110" cy="220" r="14"/>'
      + '<line x1="100" y1="210" x2="120" y2="230"/>'
      + '<line x1="120" y1="210" x2="100" y2="230"/>'
      + '<circle cx="230" cy="220" r="14"/>'
      + '<line x1="220" y1="210" x2="240" y2="230"/>'
      + '<line x1="240" y1="210" x2="220" y2="230"/>'
      + '<text x="170" y="68" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">series</text>'
      + '<text x="170" y="254" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">one path, so the current</text>'
      + '<text x="170" y="274" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">is the same everywhere</text>'
      + '<text x="170" y="300" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">and the voltages add up</text>'
      + '<text x="170" y="330" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">one lamp fails and both</text>'
      + '<text x="170" y="350" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">go out</text>'
      + '<path d="M 360 90 H 580 V 220 H 360 Z"/>'
      + '<line x1="456" y1="90" x2="466" y2="90"/>'
      + '<line x1="466" y1="76" x2="466" y2="104"/>'
      + '<line x1="474" y1="83" x2="474" y2="97"/>'
      + '<line x1="474" y1="90" x2="484" y2="90"/>'
      + '<line x1="420" y1="90" x2="420" y2="220"/>'
      + '<line x1="520" y1="90" x2="520" y2="220"/>'
      + '<circle cx="420" cy="155" r="14"/>'
      + '<line x1="410" y1="145" x2="430" y2="165"/>'
      + '<line x1="430" y1="145" x2="410" y2="165"/>'
      + '<circle cx="520" cy="155" r="14"/>'
      + '<line x1="510" y1="145" x2="530" y2="165"/>'
      + '<line x1="530" y1="145" x2="510" y2="165"/>'
      + '<text x="470" y="68" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">parallel</text>'
      + '<text x="470" y="254" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">each branch is straight</text>'
      + '<text x="470" y="274" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">across the supply, so each</text>'
      + '<text x="470" y="294" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">gets the full voltage</text>'
      + '<text x="470" y="330" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">one lamp fails and the</text>'
      + '<text x="470" y="350" font-size="13" text-anchor="middle" fill="#0f8a4d" stroke="none">other keeps working</text>'
      + '<text x="320" y="392" font-size="16" text-anchor="middle" fill="currentColor" stroke="none">which is why house lights are wired in parallel</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Series and parallel, and which quantity is shared in each',
      columns: ['The question', 'Series', 'Parallel'],
      rows: [
        ['How many paths are there', 'One', 'One for every branch'],
        [
          'The current',
          'The same everywhere, because every charge passes everything',
          'It divides, so the branch currents add to the total',
        ],
        [
          'The voltage',
          'It is used up along the way, so the voltages add to the supply',
          'Each branch gets the full supply voltage',
        ],
        [
          'If one lamp fails',
          'The path breaks and everything goes out',
          'The other branches keep working',
        ],
        [
          'Where you meet it',
          'A fuse, which must carry the whole current to break it',
          'House lights, and every socket in a building',
        ],
      ],
      note: 'Say which quantity is shared before any calculation, and the '
        + 'rest is $V = IR$ applied to one component at a time.',
    },
    {
      caption: 'The three quantities, their units and their meters',
      columns: ['Quantity', 'Unit', 'How it is measured', 'Where it goes'],
      rows: [
        [
          'Current',
          'Ampere',
          'An ammeter',
          'In the circuit, so the current passes through it',
        ],
        [
          'Voltage',
          'Volt',
          'A voltmeter',
          'Across the component, between its two ends',
        ],
        [
          'Resistance',
          'Ohm',
          'Worked out, as voltage divided by current',
          'Not measured directly in this syllabus',
        ],
      ],
      note: 'An ammeter goes in the path and a voltmeter goes across it. '
        + 'Swapping them is the commonest wiring mistake in a practical.',
    },
  ],
  questions: [
    {
      id: 'ele-1',
      ask: 'In a series circuit, what is the same everywhere?',
      kind: 'choice',
      options: ['The current', 'The voltage', 'The resistance'],
      answer: 'The current',
      teach: 'There is one path, so all the charge passes through '
        + 'everything.',
      level: 3,
    },
    {
      id: 'ele-2',
      ask: 'A 6 V supply drives 2 A. The resistance is:',
      kind: 'choice',
      options: ['3 ohms', '12 ohms', '0.33 ohms'],
      answer: '3 ohms',
      teach: 'R = V over I.',
      level: 4,
    },
    {
      id: 'ele-3',
      ask: 'What is the real advantage of an electromagnet?',
      kind: 'choice',
      options: [
        'It can be switched off',
        'It is lighter',
        'It never weakens',
      ],
      answer: 'It can be switched off',
      teach: 'Which is why it is used in bells, relays and cranes.',
      level: 5,
    },
  ],
})

/* ── drug use and abuse ─────────────────────────────────────── */

teach({
  topicId: 'drugs-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A drug changes how the body works. '
      + 'Abuse is using one in a way or amount it was not meant for. '
      + 'Dependence forms because the body adjusts to the drug, '
      + 'so it needs the drug to feel normal, '
      + 'and needs more of it for the same effect.',
    method: [
      'Name the drug and what it does to the body.',
      'Separate the immediate effect from the long term one.',
      'Explain dependence by the body adjusting, not by weakness.',
    ],
  },

  idea:
    'A drug is any substance that changes how the body works. '
    + 'Medicines are drugs used properly. '
    + 'Drug abuse is use in the wrong amount, for the wrong reason, '
    + 'or without prescription. '
    + 'Drugs are grouped by what they do to the nervous system, and '
    + 'three words describe what long use does to a person: tolerance, '
    + 'dependence and withdrawal.',

  mechanism:
    'Dependence is usually explained as weakness, '
    + 'and that explanation is both unkind and useless, '
    + 'because it does not predict anything. '
    + 'The biological account does. '
    + 'The body works hard to keep its internal conditions steady. '
    + 'When a drug pushes one of those conditions in a direction, '
    + 'the body adjusts to push back, '
    + 'so that with the drug present things feel normal again. '
    + 'Two consequences follow, '
    + 'and they are exactly what users describe. '
    + 'First, the same dose now does less, '
    + 'because the body is working against it, '
    + 'which is tolerance, '
    + 'so more is needed. '
    + 'Second, when the drug is removed, '
    + 'the body’s adjustment is still there with nothing to push against, '
    + 'so the person feels the opposite of the drug’s effect '
    + 'and feels ill until the adjustment unwinds. '
    + 'That is withdrawal, '
    + 'and it is why stopping is physically hard '
    + 'and not merely a matter of deciding. '
    + 'This also explains why dependence is a trap rather than a choice '
    + 'repeated: '
    + 'the first use is a decision, '
    + 'and after the adjustment the drug is being taken to feel normal '
    + 'rather than to feel good. '
    + 'The practical conclusion is unglamorous and true. '
    + 'The decision that matters is the first one, '
    + 'because it is the only one made by a body that has not yet '
    + 'adjusted.',

  recap:
    'You know about communicable and non-communicable disease, '
    + 'and about how the body keeps its conditions steady. '
    + 'This is a case where a substance disturbs that steadiness '
    + 'and the body adjusts around it.',

  method: [
    'Name the drug and its class: stimulant, depressant, narcotic.',
    'Say what it does to the nervous system or the organs.',
    'Separate the immediate effect from the long term damage.',
    'Explain tolerance as the body adjusting.',
    'Explain dependence and withdrawal from the same adjustment.',
    'Name the social effects: school, work, family, money, crime.',
    'Give the prevention: refusal skills, and who to tell.',
    'Name where help exists.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What kind of drug is alcohol?',
      steps: [
        'Does it speed up or slow down the nervous system?',
      ],
      answer: 'A depressant.',
    },
    {
      level: 4,
      ask: 'What is tolerance, and why does it develop?',
      steps: [
        'The body adjusts to push back against the drug.',
        'So the same dose has less effect.',
      ],
      answer: 'Tolerance is needing more of a drug for the same effect. '
        + 'It develops because the body adjusts to counteract the drug.',
    },
    {
      level: 5,
      ask: 'Why is withdrawal physically hard '
        + 'rather than just a matter of deciding to stop?',
      steps: [
        'The body adjusted itself to oppose the drug.',
        'With the drug gone, that adjustment is still in place.',
        'So the person feels the opposite of the drug’s effect.',
        'They feel ill until the adjustment unwinds.',
      ],
      answer: 'Because the body’s adjustment remains after the drug stops, '
        + 'with nothing to push against, '
        + 'so the person feels ill until it unwinds. '
        + 'That is a physical state, not a lack of will.',
    },
  ],

  traps: [
    {
      mistake: 'Explaining dependence as weakness of character.',
      why: 'It predicts nothing. '
        + 'The body adjusting explains tolerance and withdrawal together.',
    },
    {
      mistake: 'Saying medicines are not drugs.',
      why: 'They are drugs used properly. '
        + 'Abuse is the wrong amount or the wrong reason.',
    },
    {
      mistake: 'Treating tobacco and alcohol as not drugs because they are '
        + 'legal.',
      why: 'Legality is not pharmacology. '
        + 'Both change how the body works and both cause dependence.',
    },
    {
      mistake: 'Listing effects with no distinction of time.',
      why: 'The immediate effect and the long term damage '
        + 'are different answers to different questions.',
    },
  ],

  extension:
    'Dependence can be in the mind as well as in the body. '
    + 'The part in the mind often lasts longer. '
    + 'So a person can be past withdrawal and still at risk. '
    + 'The risk comes from the place and the company '
    + 'where the habit was formed.',

  figure: {
    alt: 'A line marked normal. Before the drug, the body sits on it. '
      + 'The drug pushes the body above the line, and the body adjusts '
      + 'to push back down, so the same dose does less, which is '
      + 'tolerance. When the drug stops, the adjustment is still '
      + 'pushing with nothing to push against, so the person drops '
      + 'below normal and feels ill, which is withdrawal.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">the body pushes back, and that is the whole of it</text>'
      + '<line x1="60" y1="150" x2="580" y2="150"/>'
      + '<text x="60" y="142" font-size="13" text-anchor="start" fill="currentColor" stroke="none">normal</text>'
      + '<circle cx="130" cy="150" r="10" fill="currentColor"/>'
      + '<text x="130" y="240" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">before</text>'
      + '<text x="130" y="266" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">nothing pushing</text>'
      + '<line x1="300" y1="150" x2="300" y2="108" stroke="#c8433a" stroke-width="4"/>'
      + '<line x1="300" y1="108" x2="305.2" y2="116.6" stroke="#c8433a" stroke-width="4"/>'
      + '<line x1="300" y1="108" x2="294.8" y2="116.6" stroke="#c8433a" stroke-width="4"/>'
      + '<circle cx="300" cy="104" r="10" fill="#c8433a" stroke="#c8433a"/>'
      + '<text x="300" y="86" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">pushed up</text>'
      + '<line x1="336" y1="104" x2="336" y2="146" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="336" y1="146" x2="330.8" y2="137.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="336" y1="146" x2="341.2" y2="137.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<text x="352" y="112" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">the body adjusts</text>'
      + '<text x="352" y="132" font-size="13" text-anchor="start" fill="#0f8a4d" stroke="none">and pushes back</text>'
      + '<text x="300" y="240" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the drug arrives</text>'
      + '<text x="300" y="266" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">so the same dose now does less</text>'
      + '<text x="300" y="286" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">which is tolerance</text>'
      + '<line x1="500" y1="150" x2="500" y2="190" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="500" y1="190" x2="494.8" y2="181.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<line x1="500" y1="190" x2="505.2" y2="181.4" stroke="#0f8a4d" stroke-width="4"/>'
      + '<circle cx="500" cy="196" r="10" fill="#0f8a4d" stroke="#0f8a4d"/>'
      + '<text x="500" y="240" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">the drug stops</text>'
      + '<text x="500" y="266" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">the adjustment is still there</text>'
      + '<text x="500" y="286" font-size="13" text-anchor="middle" fill="currentColor" stroke="none">with nothing to push against</text>'
      + '<text x="500" y="308" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">which is withdrawal</text>'
      + '<text x="320" y="344" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">so the person feels the opposite of what the drug did</text>'
      + '<text x="320" y="370" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">and feels ill until the adjustment unwinds</text>'
      + '<text x="320" y="394" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">which is why stopping is physically hard, and not merely deciding</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'The kinds of drug, and what each one does',
      columns: [
        'Kind',
        'What it does to the nervous system',
        'Examples',
        'What it harms most',
      ],
      rows: [
        [
          'Stimulants',
          'Speeds it up',
          'Cocaine, amphetamines',
          'The heart, sleep and mental health',
        ],
        [
          'Depressants',
          'Slows it down',
          'Alcohol',
          'The liver, judgement, and an unborn child',
        ],
        [
          'Narcotics',
          'Dulls pain, and causes strong dependence',
          'Heroin',
          'Breathing, and almost every part of a life',
        ],
        [
          'Tobacco',
          'Nicotine is a stimulant, and strongly addictive',
          'Cigarettes',
          'The lungs, the heart and the circulation',
        ],
        [
          'Cannabis',
          'Alters how things are perceived',
          'Cannabis',
          'Memory, concentration and mental health',
        ],
      ],
      note: 'Medicines are drugs used properly. Drug abuse is use in the '
        + 'wrong amount, for the wrong reason, or without a prescription.',
    },
    {
      caption: 'Tolerance, dependence and withdrawal, and why each one happens',
      columns: ['The word', 'What it means', 'Why it happens'],
      rows: [
        [
          'Tolerance',
          'More is needed for the same effect',
          'The body has adjusted to push back, so the same dose does less',
        ],
        [
          'Dependence',
          'The body or the mind needs it to work normally',
          'With the adjustment in place, the drug is what makes things feel normal',
        ],
        [
          'Withdrawal',
          'Feeling ill when it stops',
          'The adjustment is still there with nothing to push against',
        ],
      ],
      note: 'After the adjustment, the drug is being taken to feel normal '
        + 'rather than to feel good. The decision that matters is the '
        + 'first one, because it is the only one made by a body that has '
        + 'not yet adjusted.',
    },
  ],
  questions: [
    {
      id: 'drg-1',
      ask: 'Drug abuse means:',
      kind: 'choice',
      options: [
        'Using a drug in the wrong amount or for the wrong reason',
        'Using any medicine',
        'Using a drug once',
      ],
      answer: 'Using a drug in the wrong amount or for the wrong reason',
      teach: 'Medicines used properly are drugs used properly.',
      level: 3,
    },
    {
      id: 'drg-2',
      ask: 'Why does a user need more of a drug over time?',
      kind: 'choice',
      options: [
        'The body has adjusted to counteract it',
        'The drug gets weaker',
        'They forget the earlier doses',
      ],
      answer: 'The body has adjusted to counteract it',
      teach: 'That adjustment is what tolerance is.',
      level: 4,
    },
    {
      id: 'drg-3',
      ask: 'Which decision about a drug matters most?',
      kind: 'choice',
      options: [
        'The first one, before the body has adjusted',
        'The decision to stop',
        'The decision about the amount',
      ],
      answer: 'The first one, before the body has adjusted',
      teach: 'After the adjustment, the drug is taken to feel normal.',
      level: 5,
    },
  ],
})

/* ── pollution and conservation ─────────────────────────────── */

teach({
  topicId: 'environment-jhs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Pollution is a harmful substance put where it does damage. '
      + 'Name the pollutant, its source, and the harm it does. '
      + 'Then judge a response by asking whether it changes what people '
      + 'have reason to do, '
      + 'and whether it can be enforced.',
    method: [
      'Name the pollutant and the source, not just the problem.',
      'Trace the harm to people and to other living things.',
      'Judge a response on whether it changes behaviour, and at what cost.',
    ],
  },

  idea:
    'Pollution in Ghana comes in three kinds, of the water, the air and '
    + 'the land, and each has its own sources and its own way of '
    + 'reaching people. '
    + 'Conservation is the other side of it: using a resource so that '
    + 'it continues. '
    + 'Evaluating a response means saying what it would actually change, '
    + 'what it would cost, '
    + 'and whether it could be enforced.',

  mechanism:
    'The examination asks you to evaluate a response, '
    + 'and that word means more than describing it. '
    + 'An evaluation needs three judgements. '
    + 'First, would it change what anybody does? '
    + 'A rule that forbids something already forbidden changes nothing. '
    + 'Second, what does it cost and who pays? '
    + 'Banning plastic bags moves a cost onto traders and shoppers, '
    + 'and a response that ignores that gets abandoned quietly. '
    + 'Third, can it be enforced where it has to work? '
    + 'A law that needs an inspector at every riverbank at night '
    + 'is not a law, it is an intention. '
    + 'Judged that way, responses sort themselves out. '
    + 'A deposit refunded when a bottle is returned '
    + 'changes behaviour without any inspector at all, '
    + 'because it pays the person who returns it. '
    + 'A protected reserve with a community that earns from it standing '
    + 'is defended by people who live there. '
    + 'Tree planting with nobody responsible for watering the trees '
    + 'produces a photograph and a field of dead seedlings, '
    + 'which is worth saying plainly because it happens. '
    + 'The other thing to get right is the chain of harm. '
    + 'A pollutant is rarely harmful where it is put. '
    + 'Mercury enters a river, passes into fish, '
    + 'and reaches a person who never went near a mine. '
    + 'Smoke from burning waste reaches the lungs of children in the next '
    + 'street. '
    + 'Naming that chain is what turns a list of pollutants '
    + 'into an answer about why pollution matters.',

  recap:
    'You explained galamsey and deforestation in Social Studies, '
    + 'and you know how a disease travels by a route. '
    + 'Pollution travels by routes too, '
    + 'and this traces them.',

  method: [
    'Name the pollutant.',
    'Name its source.',
    'Trace the route it travels: water, air, soil, food chain.',
    'Say who or what is harmed, and how.',
    'Name a response.',
    'Ask whether it changes what anybody has reason to do.',
    'Ask what it costs and who pays.',
    'Ask whether it can be enforced where it matters.',
    'Give a judgement, with the reason.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name two sources of water pollution in Ghana.',
      steps: [
        'Think what enters rivers and lagoons.',
      ],
      answer: 'Mercury and silt from galamsey, '
        + 'and sewage or waste dumped into gutters and lagoons.',
    },
    {
      level: 4,
      ask: 'How does mercury from a mine reach somebody who never went '
        + 'near it?',
      steps: [
        'It enters the river.',
        'Fish take it in and it builds up in them.',
        'People eat the fish, or drink the water.',
      ],
      answer: 'It washes into the river, '
        + 'builds up in the fish, '
        + 'and reaches people who eat the fish or drink the water '
        + 'far downstream.',
    },
    {
      level: 5,
      ask: 'Evaluate a tree planting day as a response to deforestation.',
      steps: [
        'Does it change what anybody has reason to do? Not by itself.',
        'What does it cost? Little, which is why it is popular.',
        'Can it be enforced? There is nothing to enforce.',
        'The weakness is that nobody is responsible afterwards.',
      ],
      answer: 'It is cheap and popular and usually achieves little, '
        + 'because nobody is responsible for watering the seedlings '
        + 'or for the land being cleared again. '
        + 'It works only where somebody gains from the trees surviving.',
    },
  ],

  traps: [
    {
      mistake: 'Naming a pollutant without its source.',
      why: 'The source is where any response has to act.',
    },
    {
      mistake: 'Describing a response instead of evaluating it.',
      why: 'An evaluation judges whether it would work, '
        + 'what it costs, and whether it can be enforced.',
    },
    {
      mistake: 'Treating a law as a solution.',
      why: 'Much of this is already illegal. '
        + 'A law that cannot be enforced changes nothing.',
    },
    {
      mistake: 'Stopping at the pollutant’s first location.',
      why: 'The harm usually happens somewhere else, '
        + 'to somebody who was not involved.',
    },
  ],

  extension:
    'A response that pays the person who does the right thing '
    + 'needs no enforcement: '
    + 'a deposit refunded on a returned bottle '
    + 'is collected by people who were never asked to care about litter. '
    + 'Designing responses that way is the most useful idea in the topic.',

  figure: {
    alt: 'A chain of four boxes. Mercury leaves a mine, enters the '
      + 'river, passes into the fish, and reaches a person who never '
      + 'went near a mine. The harm arrives a long way from where the '
      + 'pollutant was put.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="3">'
      + '<text x="320" y="30" font-size="21" text-anchor="middle" fill="currentColor" stroke="none">a pollutant is rarely harmful where it is put</text>'
      + '<path d="M 40 90 H 170 V 150 H 40 Z" stroke="#c8433a"/>'
      + '<text x="105" y="116" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">a mine</text>'
      + '<text x="105" y="138" font-size="13" text-anchor="middle" fill="#c8433a" stroke="none">mercury</text>'
      + '<line x1="174" y1="120" x2="216" y2="120" stroke="#c8433a"/>'
      + '<line x1="216" y1="120" x2="207.4" y2="125.2" stroke="#c8433a"/>'
      + '<line x1="216" y1="120" x2="207.4" y2="114.8" stroke="#c8433a"/>'
      + '<path d="M 220 90 H 350 V 150 H 220 Z" stroke="#c8433a"/>'
      + '<text x="285" y="124" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">the river</text>'
      + '<line x1="354" y1="120" x2="396" y2="120" stroke="#c8433a"/>'
      + '<line x1="396" y1="120" x2="387.4" y2="125.2" stroke="#c8433a"/>'
      + '<line x1="396" y1="120" x2="387.4" y2="114.8" stroke="#c8433a"/>'
      + '<path d="M 400 90 H 530 V 150 H 400 Z" stroke="#c8433a"/>'
      + '<text x="465" y="124" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">the fish</text>'
      + '<path d="M 220 230 H 420 V 290 H 220 Z" stroke="#c8433a"/>'
      + '<line x1="465" y1="154" x2="424" y2="226" stroke="#c8433a"/>'
      + '<line x1="424" y1="226" x2="423.8" y2="216.0" stroke="#c8433a"/>'
      + '<line x1="424" y1="226" x2="432.7" y2="221.1" stroke="#c8433a"/>'
      + '<text x="320" y="256" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">a person who never</text>'
      + '<text x="320" y="278" font-size="15" text-anchor="middle" fill="#c8433a" stroke="none">went near a mine</text>'
      + '<text x="320" y="336" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">naming that chain is what turns a list of pollutants</text>'
      + '<text x="320" y="364" font-size="17" text-anchor="middle" fill="currentColor" stroke="none">into an answer about why pollution matters</text>'
      + '<text x="320" y="394" font-size="15" text-anchor="middle" fill="currentColor" stroke="none">and the same chain runs from burning waste to a child’s lungs</text>'
      + '</svg>',
  },
  tables: [
    {
      caption: 'Pollution in Ghana, where it comes from, and who it reaches',
      columns: ['Kind', 'Where it comes from', 'Who it reaches, and how'],
      rows: [
        [
          'Water',
          'Mercury and silt from galamsey, sewage, waste tipped into gutters and lagoons',
          'Anybody eating fish from that river, however far away',
        ],
        [
          'Air',
          'Smoke from burning waste and bush, vehicle exhaust, dust',
          'The lungs of children in the next street',
        ],
        [
          'Land',
          'Plastic that does not rot, and chemicals from careless dumping',
          'Crops grown in it, and gutters that block and then flood',
        ],
      ],
      note: 'Conservation is using a resource so that it continues: '
        + 'protected forest reserves, closed seasons on fishing, tree '
        + 'planting, reclaiming mined land, and reducing, reusing and '
        + 'recycling waste.',
    },
    {
      caption: 'Judging a response by three questions rather than describing '
        + 'it',
      columns: [
        'The response',
        'Would it change what anybody does',
        'What does it cost, and who pays',
        'Can it be enforced',
      ],
      rows: [
        [
          'A deposit refunded when a bottle is returned',
          'Yes, because it pays the person who returns it',
          'A small amount at purchase, given back',
          'It needs no inspector at all',
        ],
        [
          'A reserve that the community beside it earns from',
          'Yes, the people living there defend it',
          'Setting it up, and income afterwards',
          'Enforced by the people who benefit',
        ],
        [
          'Banning plastic bags',
          'Yes, if there is a substitute',
          'A cost moved onto traders and shoppers',
          'Hard, unless that cost is accepted',
        ],
        [
          'Tree planting with nobody responsible for watering',
          'No',
          'Cheap, and wasted',
          'There is nothing to enforce, and nothing survives',
        ],
        [
          'A rule forbidding what is already forbidden',
          'No',
          'Nothing',
          'It was not being enforced before either',
        ],
      ],
      note: 'A law that needs an inspector at every riverbank at night is '
        + 'not a law, it is an intention.',
    },
  ],
  questions: [
    {
      id: 'pol-1',
      ask: 'What does conservation mean?',
      kind: 'choice',
      options: [
        'Using a resource so that it continues',
        'Never using a resource',
        'Replacing a resource with another',
      ],
      answer: 'Using a resource so that it continues',
      teach: 'Closed seasons and protected reserves are examples.',
      level: 3,
    },
    {
      id: 'pol-2',
      ask: 'Why is plastic waste a particular problem on land?',
      kind: 'choice',
      options: [
        'It does not rot',
        'It is poisonous to touch',
        'It burns easily',
      ],
      answer: 'It does not rot',
      teach: 'So it accumulates, and blocks gutters and drains.',
      level: 4,
    },
    {
      id: 'pol-3',
      ask: 'What makes a response to pollution likely to work?',
      kind: 'choice',
      options: [
        'It changes what people have reason to do',
        'It is announced publicly',
        'It is written into law',
      ],
      answer: 'It changes what people have reason to do',
      teach: 'A deposit on a bottle needs no inspector at all.',
      level: 5,
    },
  ],
})
