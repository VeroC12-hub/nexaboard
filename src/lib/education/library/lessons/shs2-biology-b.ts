/**
 * Stored lessons for SHS 2 Elective Biology: the animal half.
 * Nutrition and digestion, respiration, transport in animals, support and
 * movement, and reproduction in humans.
 *
 * Written at about grade 10, which is inside the SHS expectation of 10 to 12.
 *
 * ── The thread through these five ────────────────────────────────────────
 *
 * An animal cannot make its own food, so everything here follows from
 * having to fetch it. Digestion breaks food small enough to absorb.
 * Respiration releases the energy from it. Circulation carries both the
 * food and the oxygen to cells that are nowhere near the gut or the lungs.
 * Muscle and bone are what the energy is spent on, since fetching food
 * means moving. And reproduction is the one piece of work an animal does
 * for the next generation rather than for itself.
 *
 * Each lesson is written so the structure explains the job rather than
 * sitting beside it: a villus is long and thin because absorption needs
 * surface, a left ventricle is thick because it pumps to the toes, a muscle
 * pulls and never pushes because of what a muscle cell can do.
 *
 * ── What has to be written down ──────────────────────────────────────────
 *
 * Villus, lacteal, antagonistic pair, double circulation, tendon, ligament,
 * oestrogen, implantation: these are the words the marks hang on. An answer
 * in everyday language about the heart pumping blood round earns almost
 * nothing, and it is kinder to say so here than to let a learner discover it
 * in the hall.
 *
 * ── Apparatus a school may not own ───────────────────────────────────────
 *
 * The enzyme and food test practicals need very little, and the lesson says
 * which reagents matter. Dissection and a model heart are not available
 * everywhere, so the examinable diagrams are written to be learned from the
 * figures.
 *
 * ── Notation ─────────────────────────────────────────────────────────────
 *
 * Equations are LaTeX between dollar signs. Captions, `alt` text and table
 * cells stay in words, since those are read aloud.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── nutrition and digestion ────────────────────────────────────────────── */

teach({
  topicId: 'nutrition-bio',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Digestion breaks large food molecules into small ones that can pass '
      + 'through a gut wall into the blood. '
      + 'Each class of food has its own enzyme, and each enzyme has the '
      + 'conditions it needs. '
      + 'Absorption then happens in the small intestine, whose whole '
      + 'structure exists to give surface area.',
    method: [
      'Name the food class, then its enzyme, then the products.',
      'Say where in the gut it happens and what the pH there is.',
      'For absorption, name the villus and the feature that gives surface.',
    ],
  },

  why:
    'A bowl of banku and okro stew weighs about half a kilogram and goes '
    + 'into the stomach as a lump. '
    + 'A few hours later the person who ate it is walking about on the '
    + 'energy from it, and nothing of the lump remains. '
    + 'But the wall of the gut is a solid sheet of cells, with no holes a '
    + 'grain of maize could pass through. '
    + 'So how does half a kilogram of food get out of the gut and into the '
    + 'body?',

  notation:
    'An enzyme is a protein that speeds up one particular reaction, and '
    + 'the ending ase names most of them: amylase, protease, lipase. '
    + 'A substrate is what an enzyme acts on. '
    + 'The small intestine has two parts worth naming, the duodenum first '
    + 'and the ileum after it. '
    + 'A villus is one of the finger shaped folds of the ileum wall, and '
    + 'the plural is villi. '
    + 'A lacteal is the lymph vessel in the centre of a villus, and it '
    + 'takes the fat. '
    + 'Egestion is the passing out of undigested material and is not the '
    + 'same as excretion, which is the removal of waste made by the body '
    + 'itself. '
    + 'Using one word for the other is a lost mark every year.',

  idea:
    'Food has to be broken down because the molecules in it are too large '
    + 'to cross a cell membrane. '
    + 'Digestion is that breaking down, and it is both mechanical and '
    + 'chemical. '
    + 'The teeth and the churning of the stomach do the mechanical part, '
    + 'which matters because it increases the surface the enzymes can work '
    + 'on. '
    + 'The chemical part is done by enzymes, each acting on one class of '
    + 'food. '
    + 'Starch is broken by amylase to maltose and then by maltase to '
    + 'glucose. '
    + 'Protein is broken by pepsin in the acid of the stomach and by '
    + 'trypsin in the alkaline duodenum, to peptides and then to amino '
    + 'acids. '
    + 'Fat is emulsified by bile, which is not an enzyme, and then broken '
    + 'by lipase to fatty acids and glycerol. '
    + 'Each enzyme works best at a particular pH, which is why the stomach '
    + 'is acid and the duodenum is alkaline, and bile neutralises the acid '
    + 'arriving from the stomach so that the intestinal enzymes can work. '
    + 'Absorption happens in the ileum, through the villi. '
    + 'Glucose and amino acids pass into the blood capillaries and go to '
    + 'the liver in the hepatic portal vein; fatty acids and glycerol pass '
    + 'into the lacteal. '
    + 'Water is absorbed in the colon, and what is left is egested.',

  tables: [
    {
      caption: 'Each food class, its enzyme, where it acts, and what it becomes',
      columns: ['Food', 'Enzyme', 'Where', 'Conditions', 'Products'],
      rows: [
        ['Starch', 'Amylase', 'Mouth and duodenum', 'Slightly alkaline', 'Maltose'],
        ['Maltose', 'Maltase', 'Ileum', 'Alkaline', 'Glucose'],
        ['Protein', 'Pepsin', 'Stomach', 'Strongly acid', 'Peptides'],
        ['Peptides', 'Trypsin and peptidase', 'Duodenum and ileum', 'Alkaline', 'Amino acids'],
        ['Fat', 'Lipase, after bile emulsifies it', 'Duodenum', 'Alkaline',
          'Fatty acids and glycerol'],
      ],
      note: 'Bile is in the table on purpose and is not an enzyme. '
        + 'It breaks the fat into droplets, which gives the lipase more '
        + 'surface, and it neutralises the stomach acid.',
    },
    {
      caption: 'How a villus is built for absorption, feature by feature',
      columns: ['Feature', 'What it does'],
      rows: [
        ['Finger shape, in millions', 'Multiplies the surface area enormously'],
        ['Wall one cell thick', 'A short distance for the food to cross'],
        ['Dense network of capillaries', 'Carries absorbed food away, keeping the gradient steep'],
        ['A lacteal in the centre', 'Takes the fatty acids and glycerol'],
        ['Microscopic folds on each cell', 'Multiplies the surface again'],
      ],
      note: 'Every row is the same argument: make the surface large and the '
        + 'distance short. '
        + 'A question asking how the ileum is adapted wants three of these '
        + 'with their reasons.',
    },
    {
      caption: 'The food tests, and what a positive result looks like',
      columns: ['Food', 'Test', 'Positive result'],
      rows: [
        ['Starch', 'Add iodine solution', 'Brown to blue black'],
        ['Glucose', 'Add Benedict’s solution and heat', 'Blue to orange or brick red'],
        ['Protein', 'Add sodium hydroxide then copper sulphate', 'Blue to purple'],
        ['Fat', 'Rub on paper, or shake with ethanol then water',
          'A translucent spot, or a white emulsion'],
      ],
      note: 'Say the colour before and the colour after. '
        + '"It turned positive" is not an observation and earns nothing.',
    },
  ],

  figure: {
    alt: 'A single villus drawn large, shaped like a finger standing up from '
      + 'the gut wall. Its outer surface is drawn as a single row of cells, '
      + 'labelled wall one cell thick, short distance to cross. Inside it a '
      + 'network of small vessels is drawn and labelled blood capillaries, '
      + 'which take glucose and amino acids away, and in the centre a '
      + 'single wider vessel is labelled lacteal, which takes the fatty '
      + 'acids and glycerol. Arrows point from the gut cavity outside the '
      + 'villus into its wall, labelled digested food absorbed here. To '
      + 'one side a smaller sketch shows the whole ileum wall carrying many '
      + 'such villi side by side, labelled millions of these, which is '
      + 'where the surface area comes from, and a note says the surface of '
      + 'the small intestine is about the area of a badminton court.',
    svg: '<svg viewBox="0 0 680 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<path d="M150 360 L150 150 Q150 90 215 90 Q280 90 280 150 L280 360" '
      + 'stroke-width="3"/>'
      + '<path d="M168 360 L168 152 Q168 108 215 108 Q262 108 262 152 L262 360" '
      + 'stroke-dasharray="2 3" stroke-opacity="0.7"/>'
      + '<text x="300" y="104" font-size="12" fill="currentColor" '
      + 'stroke="none">wall one cell thick:</text>'
      + '<text x="300" y="120" font-size="12" fill="currentColor" '
      + 'stroke="none">a short distance to cross</text>'
      + '<path d="M196 350 Q188 260 200 180 Q210 140 215 130" '
      + 'stroke="#b4531a"/>'
      + '<path d="M234 350 Q242 260 230 180 Q220 140 215 130" '
      + 'stroke="#b4531a"/>'
      + '<path d="M200 300 Q215 290 230 300" stroke="#b4531a"/>'
      + '<path d="M200 240 Q215 230 230 240" stroke="#b4531a"/>'
      + '<text x="300" y="300" font-size="12" fill="#b4531a" '
      + 'stroke="none">blood capillaries take</text>'
      + '<text x="300" y="316" font-size="12" fill="#b4531a" '
      + 'stroke="none">glucose and amino acids</text>'
      + '<line x1="215" y1="350" x2="215" y2="150" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<text x="300" y="214" font-size="12" fill="#0f8a4d" '
      + 'stroke="none">lacteal takes the fatty</text>'
      + '<text x="300" y="230" font-size="12" fill="#0f8a4d" '
      + 'stroke="none">acids and glycerol</text>'
      + '<line x1="100" y1="160" x2="142" y2="160" stroke="#7c3aed"/>'
      + '<path d="M134 154 L146 160 L134 166" stroke="#7c3aed"/>'
      + '<line x1="100" y1="230" x2="142" y2="230" stroke="#7c3aed"/>'
      + '<path d="M134 224 L146 230 L134 236" stroke="#7c3aed"/>'
      + '<line x1="100" y1="300" x2="142" y2="300" stroke="#7c3aed"/>'
      + '<path d="M134 294 L146 300 L134 306" stroke="#7c3aed"/>'
      + '<text x="36" y="196" font-size="12" fill="#7c3aed" '
      + 'stroke="none">digested</text>'
      + '<text x="36" y="212" font-size="12" fill="#7c3aed" '
      + 'stroke="none">food in</text>'
      + '<text x="36" y="228" font-size="12" fill="#7c3aed" '
      + 'stroke="none">the gut</text>'
      + '<line x1="470" y1="370" x2="650" y2="370"/>'
      + '<path d="M484 370 Q484 338 496 338 Q508 338 508 370"/>'
      + '<path d="M516 370 Q516 338 528 338 Q540 338 540 370"/>'
      + '<path d="M548 370 Q548 338 560 338 Q572 338 572 370"/>'
      + '<path d="M580 370 Q580 338 592 338 Q604 338 604 370"/>'
      + '<path d="M612 370 Q612 338 624 338 Q636 338 636 370"/>'
      + '<text x="560" y="402" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">millions of these side by side</text>'
      + '<text x="560" y="40" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the surface of the small</text>'
      + '<text x="560" y="56" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">intestine is about the area</text>'
      + '<text x="560" y="72" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">of a badminton court</text>'
      + '</svg>',
  },

  mechanism:
    'The answer to the opening question is that the food is taken '
    + 'apart into molecules small enough to cross a membrane, and '
    + 'that is the only reason digestion exists. A starch molecule is '
    + 'a long chain of glucose units and cannot pass. A glucose unit '
    + 'can. So digestion is not about making food soft or making it '
    + 'palatable; it is about size. Saying that sentence in an answer '
    + 'about why digestion is necessary is worth the mark, and saying '
    + 'food must be made smaller to be absorbed is better still '
    + 'because it names the destination.\n\n'
    + 'Two things follow. First, mechanical digestion is useful even '
    + 'though it breaks no molecules. Chewing and churning cut the '
    + 'food into smaller pieces, which gives the enzymes more surface '
    + 'to attack, exactly as powdering a solid speeds a chemical '
    + 'reaction. Bile does the same job for fat, breaking a large '
    + 'drop into many small ones, which is called emulsifying. A very '
    + 'common error is to call bile an enzyme. It is not: it digests '
    + 'nothing, it simply gives the lipase a far larger surface and '
    + 'neutralises the acid that arrived from the stomach. Both of '
    + 'those are marks and both are usually missed. Second, every '
    + 'enzyme has conditions, and the gut is built to supply '
    + 'different conditions in different places. Pepsin works in '
    + 'strong acid, so the stomach makes hydrochloric acid, which '
    + 'also kills most bacteria in the food. Trypsin works in alkali, '
    + 'so bile and pancreatic juice are alkaline and the mixture '
    + 'leaving the stomach is neutralised on arrival in the duodenum. '
    + 'A question asking why the stomach is acid wants both pepsin '
    + 'and the bacteria; a question asking why the duodenum is '
    + 'alkaline wants the enzymes named.\n\n'
    + 'Absorption is the second half of the topic and it is one idea '
    + 'applied five times. To absorb a great deal quickly you want a '
    + 'large surface and a short distance. The ileum is folded, the '
    + 'folds carry millions of villi, and each villus cell carries '
    + 'microscopic folds of its own, so the surface is multiplied '
    + 'three times over and comes to something like the area of a '
    + 'badminton court. The villus wall is one cell thick, so the '
    + 'distance is as short as it can be. And a dense capillary '
    + 'network carries the absorbed food away at once, which keeps '
    + 'the concentration inside the villus low and so keeps the '
    + 'gradient steep. That last point is the one strong candidates '
    + 'include and others leave out.\n\n'
    + 'Three further places lose marks. The first is egestion and '
    + 'excretion. Faeces are mostly undigested material that never '
    + 'entered the body, so passing them out is egestion. Urine is '
    + 'made from waste the body itself produced, so passing it out is '
    + 'excretion. The second is saying food is absorbed in the '
    + 'stomach. Very little is: the stomach digests, and the ileum '
    + 'absorbs. The third is the food tests. Benedict’s solution must '
    + 'be heated and the colour change is blue to brick red; the '
    + 'protein test needs sodium hydroxide first and then copper '
    + 'sulphate, and the change is blue to purple. Give both colours '
    + 'in every case. A note on apparatus. The food tests need '
    + 'iodine, Benedict’s solution, sodium hydroxide and copper '
    + 'sulphate, and are within reach of most schools; they are also '
    + 'the most likely practical in the examination. An enzyme '
    + 'experiment can be done with amylase from saliva, starch '
    + 'solution and iodine, taking a drop every minute to watch the '
    + 'blue black fade, which needs nothing more than a tile and a '
    + 'dropper.\n\n'
    + 'What a school without a microscope cannot do is see a villus, '
    + 'so the figure above has to do that work.',

  recap:
    'Food gives you energy and the material to grow. '
    + 'You know the classes: carbohydrates, proteins, fats, vitamins, '
    + 'mineral salts, water and roughage, and a balanced diet has all of '
    + 'them in the right proportion. '
    + 'You also know that food travels a long tube from the mouth to the '
    + 'anus, and that something happens to it on the way, because what goes '
    + 'in is not what comes out. '
    + 'What happens is that it is taken apart. '
    + 'This lesson follows that taking apart, enzyme by enzyme, and then '
    + 'asks how the pieces actually get into the blood.',

  method: [
    'Name the class of food in question.',
    'Name its enzyme, and the part of the gut where that enzyme works.',
    'State the conditions there: acid in the stomach, alkaline in the duodenum.',
    'Give the products of the digestion.',
    'For absorption, say the ileum and name the villus.',
    'Give the features that provide surface area and a short distance.',
    'Say where each product goes: capillary for glucose and amino acids, lacteal for fat.',
    'Keep egestion and excretion apart, and say which one you mean.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the enzyme that digests starch, say where it acts, and '
        + 'give the product.',
      steps: [
        'Starch is a carbohydrate, so the enzyme is amylase.',
        'It is secreted in saliva and again by the pancreas into the '
        + 'duodenum.',
      ],
      answer: 'Amylase, in the mouth and in the duodenum, giving maltose. '
        + 'Maltase in the ileum then breaks the maltose into glucose, so '
        + 'two enzymes are involved in all.',
    },
    {
      level: 4,
      ask: 'Explain why bile is important in the digestion of fat, although '
        + 'it is not an enzyme.',
      steps: [
        'Fat arrives as large drops, and lipase can only work at the '
        + 'surface of a drop.',
        'Bile breaks the large drops into many small ones, which is '
        + 'emulsifying.',
        'Many small drops have a far greater total surface than one large '
        + 'one.',
        'Bile is also alkaline, so it neutralises the acid arriving from '
        + 'the stomach.',
      ],
      answer: 'Bile emulsifies the fat, greatly increasing the surface '
        + 'available to lipase, and it neutralises the stomach acid so '
        + 'that the intestinal enzymes can work. '
        + 'Saying it is not an enzyme and digests nothing is part of the '
        + 'answer.',
    },
    {
      level: 5,
      ask: 'Describe three ways in which the ileum is adapted for '
        + 'absorption, giving a reason for each.',
      steps: [
        'Millions of villi, each a finger shaped projection: this '
        + 'multiplies the surface area.',
        'A wall one cell thick: this shortens the distance the food has to '
        + 'cross.',
        'A dense network of capillaries just inside: this carries absorbed '
        + 'food away and keeps the concentration gradient steep.',
      ],
      answer: 'The three above, each with its reason. '
        + 'The reasons are the marks: large surface, short distance, steep '
        + 'gradient. '
        + 'A fourth, the lacteal for fat, is worth adding if the question '
        + 'asks for more.',
    },
    {
      level: 6,
      ask: 'A patient has had the gall bladder removed and is advised to '
        + 'avoid fatty meals. '
        + 'Explain the advice in terms of digestion, and say which food '
        + 'tests would still give a positive result on the faeces.',
      steps: [
        'The gall bladder stores bile and releases it when a fatty meal '
        + 'arrives.',
        'Without that store, only a trickle of bile reaches the duodenum.',
        'So fat is poorly emulsified, lipase has little surface to work '
        + 'on, and much of the fat is not digested.',
        'Undigested fat cannot be absorbed and leaves in the faeces.',
      ],
      answer: 'A large fatty meal cannot be emulsified quickly enough '
        + 'without a store of bile, so the fat is poorly digested and '
        + 'poorly absorbed. '
        + 'The faeces would give a positive fat test, by the grease spot on '
        + 'paper or by the emulsion test. '
        + 'Note that this is egestion, not excretion, because the fat never '
        + 'entered the body.',
    },
  ],

  traps: [
    {
      mistake: 'Calling bile an enzyme.',
      why: 'It digests nothing. '
        + 'It emulsifies fat to give lipase more surface, and it '
        + 'neutralises stomach acid.',
    },
    {
      mistake: 'Saying food is absorbed in the stomach.',
      why: 'The stomach digests protein and churns. '
        + 'Absorption is in the ileum, through the villi.',
    },
    {
      mistake: 'Using excretion for the passing out of faeces.',
      why: 'That is egestion, of material that never entered the body. '
        + 'Excretion is of waste the body itself made.',
    },
    {
      mistake: 'Giving the Benedict’s test without heating it.',
      why: 'No heat, no colour change, and the test fails. '
        + 'State the heating and give both colours.',
    },
    {
      mistake: 'Listing villus features without giving a reason for each.',
      why: 'The reason is the mark. '
        + 'Large surface, short distance, steep gradient.',
    },
  ],

  extension:
    'A ruminant such as a cow eats grass, which is mostly cellulose, and no '
    + 'mammal makes an enzyme that digests cellulose. '
    + 'The cow does not digest it either. '
    + 'Bacteria in the rumen do, and the cow lives on the products, '
    + 'including the bacteria themselves. '
    + 'So a cow is not really a grass eater; it is a bacteria farmer with a '
    + 'grass fed culture vessel in its front stomach. '
    + 'The same trick, on a smaller scale, is why humans benefit from gut '
    + 'bacteria at all.',

  questions: [
    {
      id: 'nu-1',
      ask: 'Food must be digested mainly because:',
      kind: 'choice',
      options: [
        'Its molecules are too large to pass through a gut wall',
        'It needs to be made softer',
        'It has to be made to taste better',
      ],
      answer: 'Its molecules are too large to pass through a gut wall',
      teach: 'Digestion is about size. '
        + 'Starch cannot cross a membrane; glucose can.',
      level: 3,
    },
    {
      id: 'nu-2',
      ask: 'Bile acts on fat by:',
      kind: 'choice',
      options: [
        'Breaking large drops into small ones, giving lipase more surface',
        'Digesting it into fatty acids and glycerol',
        'Absorbing it into the lacteal',
      ],
      answer: 'Breaking large drops into small ones, giving lipase more surface',
      teach: 'Bile is not an enzyme. '
        + 'The lipase does the digesting, and bile makes its job possible.',
      level: 4,
    },
    {
      id: 'nu-3',
      ask: 'Protein digestion begins in the stomach because pepsin needs:',
      kind: 'choice',
      options: ['Acid conditions', 'Alkaline conditions', 'Neutral conditions'],
      answer: 'Acid conditions',
      teach: 'Hence the hydrochloric acid, which also kills most bacteria '
        + 'in the food. '
        + 'Trypsin, later, needs the opposite.',
      level: 4,
    },
    {
      id: 'nu-4',
      ask: 'Fatty acids and glycerol absorbed from a villus enter the:',
      kind: 'choice',
      options: ['Lacteal', 'Blood capillary', 'Hepatic portal vein'],
      answer: 'Lacteal',
      teach: 'Glucose and amino acids take the capillary and go to the '
        + 'liver in the hepatic portal vein. '
        + 'Fat takes the lacteal.',
      level: 5,
    },
  ],
})

/* ── respiration ────────────────────────────────────────────────────────── */

teach({
  topicId: 'respiration-bio',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Respiration releases energy from glucose inside every living cell. '
      + 'With oxygen it goes all the way to carbon dioxide and water and '
      + 'yields a great deal of energy. '
      + 'Without oxygen it stops part way, at lactic acid in a muscle or '
      + 'at ethanol in yeast, and yields very little.',
    method: [
      'Decide whether oxygen is available.',
      'Write the right equation, and say where in the cell it happens.',
      'Account for the energy difference by how far the glucose was broken down.',
    ],
  },

  why:
    'A footballer sprints the length of the pitch and afterwards stands '
    + 'bent over, breathing hard, with aching legs. '
    + 'He was breathing hard during the sprint too, yet he kept running, '
    + 'and he goes on breathing hard for a minute after he has stopped '
    + 'moving at all. '
    + 'The running is over, so the muscles need no more energy. '
    + 'Why is he still gasping, and what is the ache?',

  notation:
    'Aerobic means with oxygen and anaerobic means without it. '
    + 'The energy released is stored briefly in a molecule called ATP, '
    + 'which the cell spends on whatever work it is doing, so a figure '
    + 'given in ATP molecules is a count of useful energy. '
    + 'A mitochondrion is the part of the cell where aerobic respiration '
    + 'is completed, and the plural is mitochondria. '
    + 'Fermentation is the name for anaerobic respiration in yeast, and '
    + 'its product in Ghana is pito, akpeteshie and the rise in a loaf of '
    + 'bread. '
    + 'Oxygen debt is the oxygen a body still owes after anaerobic work, '
    + 'needed to deal with the lactic acid afterwards. '
    + 'Note that respiration is not breathing. '
    + 'Breathing moves air; respiration releases energy inside cells, and '
    + 'confusing the two is the single commonest error in this topic.',

  idea:
    'Respiration is the release of energy from food inside living '
    + 'cells. '
    + 'It goes on in every cell of every living thing, at all times. '
    + 'In aerobic respiration the glucose is broken down completely, '
    + '$$\\mathrm{C_6H_{12}O_6} + 6\\mathrm{O_2} \\rightarrow '
    + '6\\mathrm{CO_2} + 6\\mathrm{H_2O} + \\text{energy},$$ '
    + 'releasing about 2900 kilojoules per mole. '
    + 'That is enough for around 38 molecules of ATP. '
    + 'The first stage happens in the cytoplasm and needs no oxygen. '
    + 'The rest happens in the mitochondria and does. '
    + 'In anaerobic respiration there is no oxygen, so the breakdown '
    + 'stops part way and the products still hold most of the energy. '
    + 'In a muscle the product is lactic acid, '
    + '$$\\mathrm{C_6H_{12}O_6} \\rightarrow 2\\mathrm{C_3H_6O_3} + '
    + '\\text{energy},$$ which releases only about 150 kilojoules per '
    + 'mole, enough for 2 ATP. '
    + 'In yeast the products are ethanol and carbon dioxide, '
    + '$$\\mathrm{C_6H_{12}O_6} \\rightarrow 2\\mathrm{C_2H_5OH} + '
    + '2\\mathrm{CO_2} + \\text{energy}. '
    + '$$ So the anaerobic route is a poor bargain in energy. '
    + 'But it is fast, and it needs no oxygen, so it keeps a muscle '
    + 'working when the blood cannot deliver oxygen quickly enough. '
    + 'The lactic acid that builds up has to be oxidised afterwards, '
    + 'and the oxygen needed for that is the oxygen debt.',

  tables: [
    {
      caption: 'Aerobic and anaerobic respiration compared',
      columns: ['Point', 'Aerobic', 'Anaerobic in muscle', 'Anaerobic in yeast'],
      rows: [
        ['Oxygen needed', 'Yes', 'No', 'No'],
        ['Products', 'Carbon dioxide and water', 'Lactic acid',
          'Ethanol and carbon dioxide'],
        ['Energy per mole of glucose', 'About 2900 kJ', 'About 150 kJ', 'About 210 kJ'],
        ['Glucose fully broken down', 'Yes', 'No', 'No'],
        ['Where in the cell', 'Cytoplasm then mitochondria', 'Cytoplasm only',
          'Cytoplasm only'],
      ],
      note: 'The energy row and the fully broken down row are the same '
        + 'fact. '
        + 'Lactic acid and ethanol still contain most of the energy of the '
        + 'glucose, which is exactly why they can be burned as fuel.',
    },
    {
      caption: 'Why respiration and breathing are not the same thing',
      columns: ['Point', 'Breathing', 'Respiration'],
      rows: [
        ['What it is', 'Moving air in and out of the lungs', 'Releasing energy from glucose'],
        ['Where it happens', 'In the chest', 'In every cell'],
        ['Does a plant do it', 'No', 'Yes, day and night'],
        ['Needs oxygen', 'It supplies oxygen', 'Only the aerobic kind does'],
      ],
      note: 'A plant respires all the time, including at night when it is '
        + 'not photosynthesising, and that is why a sealed room full of '
        + 'plants grows short of oxygen by morning.',
    },
  ],

  figure: {
    alt: 'A branching diagram. At the top is a box labelled glucose in the '
      + 'cytoplasm. One arrow leads down from it to a box labelled first '
      + 'stage, no oxygen needed, small amount of energy, which is drawn '
      + 'small. From that box the path splits. The left branch, labelled '
      + 'oxygen present, leads into a large oval labelled mitochondrion, '
      + 'and out of it to a box labelled carbon dioxide and water, with a '
      + 'wide bar beside it standing for about 2900 kilojoules per mole. '
      + 'The right branch, labelled no oxygen, splits again into a box '
      + 'labelled lactic acid in muscle and a box labelled ethanol and '
      + 'carbon dioxide in yeast, each with a very short bar beside it '
      + 'standing for about 150 and 210 kilojoules. A note at the bottom '
      + 'says the short bars are short because the glucose was not broken '
      + 'all the way down, so most of its energy is still locked in the '
      + 'product.',
    svg: '<svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<rect x="270" y="20" width="140" height="40" rx="6"/>'
      + '<text x="340" y="45" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">glucose</text>'
      + '<line x1="340" y1="60" x2="340" y2="90"/>'
      + '<path d="M334 82 L340 94 L346 82"/>'
      + '<rect x="250" y="94" width="180" height="46" rx="6" '
      + 'stroke="#7c3aed"/>'
      + '<text x="340" y="114" font-size="12" text-anchor="middle" '
      + 'fill="#7c3aed" stroke="none">first stage, in the cytoplasm:</text>'
      + '<text x="340" y="130" font-size="12" text-anchor="middle" '
      + 'fill="#7c3aed" stroke="none">no oxygen needed</text>'
      + '<line x1="300" y1="140" x2="190" y2="188" stroke="#0f8a4d"/>'
      + '<path d="M196 180 L184 190 L198 194" stroke="#0f8a4d"/>'
      + '<text x="178" y="166" font-size="12" text-anchor="end" '
      + 'fill="#0f8a4d" stroke="none">oxygen present</text>'
      + '<line x1="380" y1="140" x2="490" y2="188" stroke="#b4531a"/>'
      + '<path d="M484 180 L496 190 L482 194" stroke="#b4531a"/>'
      + '<text x="504" y="172" font-size="12" fill="#b4531a" '
      + 'stroke="none">no oxygen</text>'
      + '<ellipse cx="140" cy="222" rx="60" ry="26" stroke="#0f8a4d"/>'
      + '<text x="140" y="227" font-size="12" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">mitochondrion</text>'
      + '<line x1="140" y1="248" x2="140" y2="278" stroke="#0f8a4d"/>'
      + '<path d="M134 270 L140 282 L146 270" stroke="#0f8a4d"/>'
      + '<rect x="60" y="282" width="160" height="42" rx="6" '
      + 'stroke="#0f8a4d"/>'
      + '<text x="140" y="300" font-size="12" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">carbon dioxide</text>'
      + '<text x="140" y="316" font-size="12" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">and water</text>'
      + '<rect x="40" y="340" width="200" height="22" fill="#0f8a4d" '
      + 'fill-opacity="0.3" stroke="#0f8a4d"/>'
      + '<text x="140" y="382" font-size="12" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">about 2900 kJ per mole</text>'
      + '<rect x="400" y="202" width="130" height="42" rx="6" '
      + 'stroke="#b4531a"/>'
      + '<text x="465" y="220" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">lactic acid</text>'
      + '<text x="465" y="236" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">in muscle</text>'
      + '<rect x="400" y="262" width="130" height="42" rx="6" '
      + 'stroke="#b4531a"/>'
      + '<text x="465" y="280" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">ethanol and gas</text>'
      + '<text x="465" y="296" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">in yeast</text>'
      + '<rect x="400" y="340" width="12" height="22" fill="#b4531a" '
      + 'fill-opacity="0.4" stroke="#b4531a"/>'
      + '<rect x="430" y="340" width="16" height="22" fill="#b4531a" '
      + 'fill-opacity="0.4" stroke="#b4531a"/>'
      + '<text x="480" y="356" font-size="12" fill="#b4531a" '
      + 'stroke="none">150 and 210 kJ</text>'
      + '<text x="340" y="408" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'the short bars are short because the glucose was not broken all the way down</text>'
      + '</svg>',
  },

  mechanism:
    'The energy figures are the heart of this topic, and they are '
    + 'not arbitrary numbers to be learned. They follow from how far '
    + 'the glucose was taken apart. Aerobic respiration breaks '
    + 'glucose all the way down to carbon dioxide and water, which '
    + 'are about as low in energy as carbon and hydrogen can get, so '
    + 'almost everything the glucose held is released. Anaerobic '
    + 'respiration stops at lactic acid or at ethanol, and both of '
    + 'those are still rich in energy. The proof is that you can burn '
    + 'ethanol: akpeteshie will light.\n\n'
    + 'So the glucose is not giving up much of its energy, and the '
    + 'cell gets about 2 ATP where aerobic respiration gets about 38. '
    + 'An answer that says anaerobic respiration releases less energy '
    + 'because the glucose is incompletely broken down has given the '
    + 'reason and will score; an answer that just states the two '
    + 'numbers has not. Why then does a body ever use the poor route? '
    + 'Because it needs no oxygen and it is quick. A sprinting '
    + 'footballer’s leg muscles are using energy far faster than his '
    + 'lungs and heart can deliver oxygen, however hard he breathes. '
    + 'The muscles make up the shortfall by respiring anaerobically, '
    + 'which lets them keep working, and the price is lactic acid '
    + 'accumulating in the tissue. Lactic acid is what makes the legs '
    + 'ache and what eventually forces him to stop. And when he does '
    + 'stop, the lactic acid is still there. It has to be oxidised, '
    + 'which needs oxygen, and that is why he goes on breathing hard '
    + 'after the running is over.\n\n'
    + 'The oxygen he still owes is the oxygen debt, and repaying it '
    + 'is the whole explanation of the gasping. That answer, in that '
    + 'order, is worth four marks in most years: oxygen could not be '
    + 'supplied fast enough, so anaerobic respiration occurred, so '
    + 'lactic acid accumulated, so extra oxygen is needed afterwards '
    + 'to remove it. Three places lose marks. The first, and it is by '
    + 'far the largest, is confusing respiration with breathing. '
    + 'Breathing is the movement of air and happens in the chest; '
    + 'respiration is a chemical process and happens inside every '
    + 'cell. A plant respires and does not breathe. A candidate who '
    + 'writes that respiration takes place in the lungs has lost the '
    + 'question before starting it.\n\n'
    + 'The second is saying plants respire only at night. They '
    + 'respire all the time, day and night, in every cell. What '
    + 'happens by day is that photosynthesis is also going on and is '
    + 'faster, so the net movement of gas is the other way, and the '
    + 'plant appears to be only taking in carbon dioxide. The word '
    + 'net is doing the work there and it is the mark. The third is '
    + 'the yeast equation. Yeast gives ethanol and carbon dioxide, '
    + 'not lactic acid, and the carbon dioxide is the point of the '
    + 'whole industry: it is what raises bread and what bubbles in '
    + 'fermenting pito. A note on apparatus.\n\n'
    + 'Two experiments are cheap and both are examinable. Yeast, '
    + 'sugar and warm water in a bottle with a delivery tube into '
    + 'limewater shows anaerobic respiration producing carbon '
    + 'dioxide, and the limewater turning milky is the observation. '
    + 'Germinating beans in a vacuum flask with a thermometer show '
    + 'that respiration releases heat, provided a flask of boiled '
    + 'beans is run beside it as a control. That control is itself a '
    + 'mark, because without it a candidate cannot say the heat came '
    + 'from the living seeds. What a school cannot show without a '
    + 'microscope is the mitochondrion, so the figure has to stand in '
    + 'for it.',

  recap:
    'Food contains energy, and your body gets that energy out of it. '
    + 'The process is called respiration, and it happens inside your cells '
    + 'rather than in your lungs. '
    + 'For it to go fully, oxygen is needed, which is why you breathe. '
    + 'The waste products are carbon dioxide and water, which is why you '
    + 'breathe out carbon dioxide and why the breath fogs a cold mirror. '
    + 'You also know that yeast makes bread rise and makes pito ferment, '
    + 'and that it does so without any air reaching it. '
    + 'This lesson explains both of those, and why the second one releases '
    + 'so much less energy than the first.',

  method: [
    'Decide whether oxygen is available to the cell.',
    'With oxygen, write the full equation to carbon dioxide and water.',
    'Without oxygen, write lactic acid for a muscle or ethanol for yeast.',
    'State where in the cell each stage happens.',
    'Give the energy yield, and explain it by how far the glucose was broken down.',
    'For exercise, name the oxygen debt and say what it is for.',
    'Keep respiration and breathing apart in every sentence.',
    'For an experiment, name the control and say what it rules out.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Write the equation for aerobic respiration of glucose and name '
        + 'the two products.',
      steps: [
        { math: '\\mathrm{C_6H_{12}O_6} + 6\\mathrm{O_2} \\rightarrow 6\\mathrm{CO_2} + 6\\mathrm{H_2O} + \\text{energy}' },
        'Energy is written as a word, not as a substance, because it is '
        + 'not a molecule.',
      ],
      answer: 'The products are carbon dioxide and water, and energy is '
        + 'released. '
        + 'This is the reverse of the photosynthesis equation, which is '
        + 'worth noticing but is not the same process.',
    },
    {
      level: 4,
      ask: 'Yeast is mixed with sugar solution and kept warm in a stoppered '
        + 'flask with a tube leading into limewater. '
        + 'State what is seen and name the process.',
      steps: [
        'The flask is stoppered, so the yeast soon uses up the oxygen and '
        + 'respires anaerobically.',
        'Anaerobic respiration in yeast gives ethanol and carbon dioxide.',
        'Carbon dioxide turns limewater milky.',
      ],
      answer: 'Bubbles appear and the clear limewater turns milky, showing '
        + 'carbon dioxide. '
        + 'The process is anaerobic respiration, also called fermentation, '
        + 'and the ethanol stays in the flask where it can be smelled.',
    },
    {
      level: 5,
      ask: 'Explain why a sprinter continues to breathe deeply for some '
        + 'time after stopping.',
      steps: [
        'During the sprint, oxygen could not be delivered as fast as the '
        + 'muscles were using energy.',
        'So the muscles respired anaerobically to make up the shortfall.',
        'Lactic acid accumulated in the muscle tissue.',
        'After the sprint, oxygen is needed to oxidise that lactic acid.',
      ],
      answer: 'He is repaying an oxygen debt: the extra oxygen needed to '
        + 'remove the lactic acid that built up during anaerobic '
        + 'respiration. '
        + 'The four steps above are four marks, and the phrase oxygen debt '
        + 'is one of them.',
    },
    {
      level: 6,
      ask: 'Aerobic respiration of one mole of glucose releases about '
        + '2900 kJ and anaerobic respiration in muscle about 150 kJ. '
        + 'Calculate the percentage released anaerobically and explain the '
        + 'difference.',
      steps: [
        { math: '\\frac{150}{2900} \\times 100 = 5.2\\%' },
        'Anaerobic respiration stops at lactic acid, which is still a '
        + 'large molecule rich in energy.',
        'Aerobic respiration breaks the glucose all the way to carbon '
        + 'dioxide and water.',
        'The difference stays locked in the lactic acid, which is why that '
        + 'acid can itself be oxidised later.',
      ],
      answer: 'About $5$ per cent. '
        + 'The remaining energy is still held in the lactic acid, because '
        + 'the glucose was not completely broken down. '
        + 'That sentence is the explanation the question wants, and it also '
        + 'explains why the lactic acid is worth oxidising afterwards '
        + 'rather than discarding.',
    },
  ],

  traps: [
    {
      mistake: 'Saying respiration happens in the lungs.',
      why: 'That is breathing. '
        + 'Respiration is a chemical process in every cell, and plants do '
        + 'it without lungs.',
    },
    {
      mistake: 'Saying plants respire only at night.',
      why: 'They respire all the time. '
        + 'By day photosynthesis is faster, so the net gas movement is the '
        + 'other way.',
    },
    {
      mistake: 'Giving lactic acid as the product of fermentation in yeast.',
      why: 'Yeast gives ethanol and carbon dioxide. '
        + 'Lactic acid is the muscle product.',
    },
    {
      mistake: 'Quoting the energy figures without explaining them.',
      why: 'The reason is that anaerobic respiration breaks the glucose '
        + 'only part way, so most of its energy stays in the product.',
    },
    {
      mistake: 'Running a respiration experiment with no control.',
      why: 'Boiled seeds beside living ones are what let you say the heat '
        + 'came from respiration and not from anything else in the flask.',
    },
  ],

  extension:
    'Lactic acid is useful in a kitchen as well as a nuisance in a leg. '
    + 'Bacteria respiring anaerobically on the sugars in cassava or in '
    + 'milk produce it on purpose, and the acid they make preserves the '
    + 'food by stopping other organisms growing. '
    + 'That is what sours the dough for banku and kenkey, and what makes '
    + 'nunu and yoghurt. '
    + 'The process that spoils a sprint is the same process that keeps a '
    + 'staple food edible for days without a fridge.',

  questions: [
    {
      id: 'rs-1',
      ask: 'Respiration takes place:',
      kind: 'choice',
      options: [
        'In every living cell',
        'In the lungs only',
        'In the blood',
      ],
      answer: 'In every living cell',
      teach: 'Breathing is in the chest. '
        + 'Respiration is chemistry inside cells, and a plant does it too.',
      level: 3,
    },
    {
      id: 'rs-2',
      ask: 'The products of anaerobic respiration in yeast are:',
      kind: 'choice',
      options: [
        'Ethanol and carbon dioxide',
        'Lactic acid only',
        'Carbon dioxide and water',
      ],
      answer: 'Ethanol and carbon dioxide',
      teach: 'The carbon dioxide raises bread and bubbles in pito. '
        + 'Lactic acid is the muscle product.',
      level: 4,
    },
    {
      id: 'rs-3',
      ask: 'Anaerobic respiration releases far less energy than aerobic '
        + 'respiration because:',
      kind: 'choice',
      options: [
        'The glucose is not completely broken down',
        'It happens more slowly',
        'It produces no carbon dioxide',
      ],
      answer: 'The glucose is not completely broken down',
      teach: 'Lactic acid and ethanol still hold most of the energy, which '
        + 'is why ethanol will burn.',
      level: 5,
    },
    {
      id: 'rs-4',
      ask: 'An oxygen debt is:',
      kind: 'choice',
      options: [
        'The extra oxygen needed afterwards to remove lactic acid',
        'The oxygen a muscle stores before exercise',
        'Oxygen lost in the breath during exercise',
      ],
      answer: 'The extra oxygen needed afterwards to remove lactic acid',
      teach: 'It is why a sprinter keeps gasping after the race has '
        + 'finished.',
      level: 5,
    },
  ],
})

/* ── transport in animals ───────────────────────────────────────────────── */

teach({
  topicId: 'circulation-bio',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Blood passes through the heart twice on one circuit of the body, '
      + 'once to the lungs and once to the rest. '
      + 'That is double circulation, and it lets the blood be pushed to '
      + 'the lungs gently and to the toes hard. '
      + 'Every structure in the system follows from the pressure it has to '
      + 'carry.',
    method: [
      'Trace the blood in order, naming each chamber and vessel.',
      'Say whether the blood in each is oxygenated or not.',
      'Explain a structure by the pressure it must take: thick wall, valve, thin wall.',
    ],
  },

  why:
    'Put two fingers on the inside of your wrist and you feel a pulse. '
    + 'Put them on the back of your hand and you feel none, although the '
    + 'blood is flowing there too. '
    + 'A nurse taking blood pushes the needle into a vein on the back of '
    + 'the hand, never into the artery at the wrist. '
    + 'Both carry the same blood round the same circuit. '
    + 'So what is different about the two vessels, and why does it decide '
    + 'where the needle goes?',

  notation:
    'An artery carries blood away from the heart and a vein carries it '
    + 'back, and that is the definition: it is about direction, not about '
    + 'oxygen. '
    + 'The pulmonary artery is therefore an artery although its blood is '
    + 'deoxygenated, because it leads away from the heart. '
    + 'Pulmonary means to do with the lungs and systemic means to do with '
    + 'the rest of the body. '
    + 'The atria are the two upper chambers, singular atrium, and the '
    + 'ventricles are the two lower ones. '
    + 'Plasma is the liquid part of blood. '
    + 'The aorta is the largest artery and the vena cava the largest vein. '
    + 'Remember that a diagram of a heart is always drawn as though you are '
    + 'facing the person, so the left side of the heart appears on the '
    + 'right of the page.',

  idea:
    'A mammal has a closed double circulation. '
    + 'Blood leaves the right ventricle in the pulmonary artery, passes '
    + 'through the lungs where it takes up oxygen, and returns to the left '
    + 'atrium in the pulmonary vein. '
    + 'It then passes to the left ventricle and leaves in the aorta for the '
    + 'whole body, returning deoxygenated to the right atrium in the vena '
    + 'cava. '
    + 'So it passes through the heart twice on one complete circuit, which '
    + 'is what double means. '
    + 'Valves between the atria and ventricles, and at the base of each '
    + 'artery, keep the flow one way. '
    + 'Arteries have thick muscular elastic walls and a narrow lumen, '
    + 'because they carry blood at high pressure in surges. '
    + 'Veins have thin walls, a wide lumen and valves along their length, '
    + 'because the pressure in them is low and the blood needs help '
    + 'returning. '
    + 'Capillaries are one cell thick, so substances can pass between the '
    + 'blood and the tissue. '
    + 'Blood itself is plasma carrying red cells, white cells and '
    + 'platelets. '
    + 'The red cells carry oxygen bound to haemoglobin, have no nucleus so '
    + 'they can hold more of it, and are shaped as biconcave discs so they '
    + 'have more surface. '
    + 'White cells defend against disease and platelets begin clotting. '
    + 'Plasma carries dissolved food, carbon dioxide, hormones, urea and '
    + 'heat.',

  tables: [
    {
      caption: 'Artery, vein and capillary compared on structure and pressure',
      columns: ['Point', 'Artery', 'Vein', 'Capillary'],
      rows: [
        ['Direction of flow', 'Away from the heart', 'Towards the heart', 'Through the tissue'],
        ['Pressure of the blood', 'High, in surges', 'Low and steady', 'Falling'],
        ['Wall', 'Thick, muscular and elastic', 'Thin', 'One cell thick'],
        ['Lumen', 'Narrow', 'Wide', 'Just wide enough for a red cell'],
        ['Valves along it', 'None', 'Many', 'None'],
      ],
      note: 'Every row of this table is the pressure row in another form. '
        + 'A thick elastic wall is for taking a surge; valves are for blood '
        + 'that has almost no push left.',
    },
    {
      caption: 'What is in blood, and what each part is for',
      columns: ['Part', 'What it does', 'How it is suited to that'],
      rows: [
        ['Red cell', 'Carries oxygen', 'Full of haemoglobin, no nucleus, biconcave for surface'],
        ['White cell', 'Defends against disease', 'Can change shape and engulf bacteria, or make antibodies'],
        ['Platelet', 'Starts a clot', 'Releases the substances that begin clotting at a wound'],
        ['Plasma', 'Carries everything dissolved', 'A liquid, so food, carbon dioxide, urea, hormones and heat all travel in it'],
      ],
      note: 'The red cell row has three adaptations in it, and a question '
        + 'asking how a red cell is suited to its job wants all three.',
    },
    {
      caption: 'A drop of blood traced through one full circuit, in order',
      columns: ['Step', 'Where it is', 'Oxygenated'],
      rows: [
        ['1', 'Right atrium, arriving from the body in the vena cava', 'No'],
        ['2', 'Right ventricle', 'No'],
        ['3', 'Pulmonary artery, to the lungs', 'No'],
        ['4', 'Lungs, where it takes up oxygen', 'Becomes yes'],
        ['5', 'Pulmonary vein, to the left atrium', 'Yes'],
        ['6', 'Left ventricle, then the aorta to the body', 'Yes'],
      ],
      note: 'Steps 3 and 5 are the two that catch candidates: an artery '
        + 'carrying deoxygenated blood and a vein carrying oxygenated '
        + 'blood. '
        + 'The names are about direction, not oxygen.',
    },
  ],

  figure: {
    alt: 'The heart drawn as four chambers in a block, with the body on the '
      + 'right of the page and the lungs on the left. The upper two '
      + 'chambers are labelled right atrium and left atrium and the lower '
      + 'two right ventricle and left ventricle, with the left ventricle '
      + 'drawn with a noticeably thicker wall and labelled thickest wall, '
      + 'because it pumps to the whole body. Valves are drawn between each '
      + 'atrium and its ventricle and at the base of each outgoing vessel. '
      + 'On the left a loop runs from the right ventricle through a shape '
      + 'labelled lungs and back to the left atrium, labelled pulmonary '
      + 'circuit, short and at low pressure. On the right a loop runs from '
      + 'the left ventricle through a shape labelled body and back to the '
      + 'right atrium, labelled systemic circuit, long and at high '
      + 'pressure. A note says the blood passes through the heart twice on '
      + 'one circuit, which is what double circulation means.',
    svg: '<svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<rect x="280" y="120" width="60" height="70" stroke="#1d4ed8"/>'
      + '<rect x="340" y="120" width="60" height="70" stroke="#b4531a"/>'
      + '<rect x="280" y="190" width="60" height="110" stroke="#1d4ed8"/>'
      + '<rect x="340" y="190" width="60" height="110" stroke="#b4531a" '
      + 'stroke-width="6"/>'
      + '<text x="310" y="150" font-size="11" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">right</text>'
      + '<text x="310" y="164" font-size="11" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">atrium</text>'
      + '<text x="370" y="150" font-size="11" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">left</text>'
      + '<text x="370" y="164" font-size="11" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">atrium</text>'
      + '<text x="310" y="240" font-size="11" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">right</text>'
      + '<text x="310" y="254" font-size="11" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">ventricle</text>'
      + '<text x="370" y="240" font-size="11" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">left</text>'
      + '<text x="370" y="254" font-size="11" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">ventricle</text>'
      + '<text x="370" y="284" font-size="10" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">thickest wall</text>'
      + '<path d="M294 190 L310 198 L326 190" stroke="currentColor"/>'
      + '<path d="M354 190 L370 198 L386 190" stroke="currentColor"/>'
      + '<path d="M280 240 L200 240 L200 120 L110 120" stroke="#1d4ed8"/>'
      + '<path d="M118 114 L104 120 L118 126" stroke="#1d4ed8"/>'
      + '<ellipse cx="80" cy="150" rx="40" ry="48" stroke="#0f8a4d"/>'
      + '<text x="80" y="155" font-size="12" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">lungs</text>'
      + '<path d="M80 198 L80 240 L200 240" stroke="#b4531a" '
      + 'stroke-dasharray="0"/>'
      + '<path d="M200 240 L200 160 L340 160" stroke="#b4531a"/>'
      + '<path d="M332 154 L346 160 L332 166" stroke="#b4531a"/>'
      + '<text x="150" y="262" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">pulmonary circuit:</text>'
      + '<text x="150" y="276" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">short, low pressure</text>'
      + '<path d="M400 240 L480 240 L480 120 L570 120" stroke="#b4531a"/>'
      + '<path d="M562 114 L576 120 L562 126" stroke="#b4531a"/>'
      + '<ellipse cx="610" cy="160" rx="46" ry="58" stroke="#7c3aed"/>'
      + '<text x="610" y="165" font-size="12" text-anchor="middle" '
      + 'fill="#7c3aed" stroke="none">body</text>'
      + '<path d="M610 218 L610 250 L480 250" stroke="#1d4ed8"/>'
      + '<path d="M480 250 L480 150 L340 150" stroke="#1d4ed8"/>'
      + '<path d="M348 144 L334 150 L348 156" stroke="#1d4ed8"/>'
      + '<text x="530" y="276" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">systemic circuit:</text>'
      + '<text x="530" y="290" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">long, high pressure</text>'
      + '<text x="340" y="348" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'the blood passes through the heart twice on one circuit</text>'
      + '<text x="340" y="366" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'which is what double circulation means</text>'
      + '<text x="340" y="394" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'drawn facing the person, so the left side is on the right of the page</text>'
      + '</svg>',
  },

  mechanism:
    'Double circulation exists because the lungs and the body need '
    + 'very different pressures, and one pump could not supply both. '
    + 'A lung is a delicate thing full of capillaries one cell thick, '
    + 'and blood forced into it at the pressure needed to reach a toe '
    + 'would damage it and push fluid into the air spaces. The rest '
    + 'of the body is the opposite problem: the blood has to be '
    + 'driven down to the feet and back up again. So the heart is '
    + 'really two pumps side by side. The right side sends blood a '
    + 'short distance to the lungs at low pressure, and the left side '
    + 'sends it right round the body at high pressure. From that '
    + 'single fact the whole structure of the heart can be predicted, '
    + 'and a question asking why the left ventricle wall is thicker '
    + 'than the right is answered by it: the left ventricle has to '
    + 'generate enough pressure for the systemic circuit, and the '
    + 'right only for the lungs. Candidates who answer that the left '
    + 'ventricle is bigger because it holds more blood have missed '
    + 'it; the two ventricles hold about the same volume, and it is '
    + 'the wall thickness and not the capacity that differs.\n\n'
    + 'Another consequence is worth stating. In a fish, blood passes '
    + 'through the heart once per circuit, so it leaves the gills and '
    + 'goes straight on to the body with its pressure already spent '
    + 'in the gill capillaries. That is a single circulation and it '
    + 'limits how fast a fish can deliver oxygen. Double circulation '
    + 'is one of the reasons a mammal can sustain a high rate of '
    + 'activity, and that comparison is a favourite examination '
    + 'question. Now the wrist and the back of the hand. An artery '
    + 'carries blood that has just left the ventricle, so it arrives '
    + 'in surges at high pressure, and that is what you feel as a '
    + 'pulse. Its wall is thick, muscular and elastic to withstand '
    + 'and smooth those surges, and its lumen is narrow. By the time '
    + 'the blood has crossed the capillary beds the pressure is '
    + 'nearly gone, so a vein needs no thick wall, has a wide lumen, '
    + 'and carries valves to stop the blood falling back. The return '
    + 'is helped by the squeeze of the muscles the vein runs between, '
    + 'which is why standing still for a long time makes the feet '
    + 'swell and why soldiers on parade are told to flex their '
    + 'calves.\n\n'
    + 'A needle goes into a vein because a vein is close to the '
    + 'surface, thin walled, easy to enter, and at low pressure so it '
    + 'does not spurt and seals easily afterwards. Puncturing an '
    + 'artery at that pressure is dangerous and hard to stop. So the '
    + 'nurse’s choice is a direct consequence of the table above. '
    + 'Three places lose marks. The first is defining an artery as a '
    + 'vessel carrying oxygenated blood. It is not: it is a vessel '
    + 'carrying blood away from the heart. The pulmonary artery '
    + 'carries deoxygenated blood and the pulmonary vein carries '
    + 'oxygenated blood, and examiners test those two every few years '
    + 'precisely because the wrong definition fails on them.\n\n'
    + 'The second is tracing the circuit in the wrong order or '
    + 'skipping the atria. Learn the six steps in the table and name '
    + 'every chamber. The third is the red cell. It has no nucleus, '
    + 'which leaves room for more haemoglobin, and it is a biconcave '
    + 'disc, which gives more surface for oxygen to enter. Both of '
    + 'those are adaptations with reasons, and listing them without '
    + 'reasons earns half. A note on apparatus. A sheep or goat heart '
    + 'from the market is cheap, and cutting one open shows the four '
    + 'chambers, the valves and the difference in wall thickness '
    + 'better than any diagram. For a school that cannot do that, the '
    + 'figure above carries the examinable content. A blood smear '
    + 'under a microscope shows the red cells, but their biconcave '
    + 'shape is hard to see without good staining, so it is honest to '
    + 'teach the shape from a drawing and say why.',

  recap:
    'Every cell in your body needs oxygen and food, and every cell '
    + 'produces waste. '
    + 'Most of your cells are nowhere near your lungs or your gut, so '
    + 'something has to carry those things to and from them. '
    + 'That is what blood does, and the heart is the pump that keeps it '
    + 'moving. '
    + 'You know the three kinds of vessel, and that blood is red because '
    + 'of the cells in it. '
    + 'What is new here is the route the blood actually takes, which is not '
    + 'one loop but two, and why the structure of each vessel is exactly '
    + 'what its part of the route requires.',

  method: [
    'Start at the vena cava and trace the blood in order through all four chambers.',
    'Name each vessel and say whether its blood is oxygenated.',
    'Define an artery by direction, away from the heart, not by oxygen.',
    'For a structure question, name the pressure that structure has to cope with.',
    'Thick elastic wall means high pressure; valves mean low pressure.',
    'For a cell in the blood, give the adaptation and the reason together.',
    'For double circulation, say the blood passes through the heart twice per circuit.',
    'Compare with a fish if the question asks about the advantage.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the blood vessel that carries blood from the heart to the '
        + 'lungs, and say whether that blood is oxygenated.',
      steps: [
        'A vessel leaving the heart is an artery, whatever its blood '
        + 'carries.',
        'Blood going to the lungs has not yet picked up oxygen.',
      ],
      answer: 'The pulmonary artery, carrying deoxygenated blood. '
        + 'This is the standard example that an artery is defined by '
        + 'direction and not by oxygen.',
    },
    {
      level: 4,
      ask: 'Explain why the wall of the left ventricle is thicker than that '
        + 'of the right.',
      steps: [
        'The right ventricle pumps blood only as far as the lungs, which '
        + 'are close and delicate.',
        'The left ventricle pumps blood to the whole body, including the '
        + 'feet.',
        'A greater pressure is needed for the longer circuit, so more '
        + 'muscle is needed.',
      ],
      answer: 'The left ventricle must generate a much higher pressure, '
        + 'because its blood has to reach the whole body, so its wall '
        + 'carries more muscle. '
        + 'The two ventricles hold about the same volume, so the answer is '
        + 'about pressure and not about capacity.',
    },
    {
      level: 5,
      ask: 'Give three structural differences between an artery and a vein, '
        + 'and relate each one to the pressure of the blood it carries.',
      steps: [
        'An artery has a thick muscular elastic wall; a vein has a thin '
        + 'wall.',
        'An artery has a narrow lumen; a vein has a wide one.',
        'A vein has valves along its length; an artery has none.',
      ],
      answer: 'The artery’s thick elastic wall withstands and smooths the '
        + 'high pressure surges from the ventricle. '
        + 'The vein’s thin wall is enough for low pressure blood, and its '
        + 'wide lumen offers little resistance to a slow flow. '
        + 'Its valves prevent backflow, which matters only because the '
        + 'pressure is too low to keep the blood moving forward by itself. '
        + 'Each difference needs its pressure reason attached.',
    },
    {
      level: 6,
      ask: 'Compare the circulation of a fish with that of a mammal, and '
        + 'state one advantage of the mammalian arrangement.',
      steps: [
        'In a fish the blood passes through the heart once per circuit: '
        + 'heart, gills, body, heart.',
        'So blood leaving the gills travels on to the body with its '
        + 'pressure already lost in the gill capillaries.',
        'In a mammal the blood returns to the heart after the lungs and is '
        + 'pumped again.',
        'So it enters the systemic circuit at full pressure.',
      ],
      answer: 'A fish has a single circulation and a mammal a double one. '
        + 'The advantage is that blood can be delivered to the body at high '
        + 'pressure while the lungs are supplied at a low one, so oxygen '
        + 'reaches the tissues faster and a high rate of activity can be '
        + 'maintained. '
        + 'Saying that the lungs would be damaged by systemic pressure is '
        + 'worth adding, because it explains why one pump would not do.',
    },
  ],

  traps: [
    {
      mistake: 'Defining an artery as carrying oxygenated blood.',
      why: 'It carries blood away from the heart. '
        + 'The pulmonary artery is the counterexample examiners use.',
    },
    {
      mistake: 'Saying the left ventricle is bigger because it holds more blood.',
      why: 'The two hold about the same volume. '
        + 'The left wall is thicker because it must generate more '
        + 'pressure.',
    },
    {
      mistake: 'Skipping the atria when tracing the circuit.',
      why: 'Blood enters an atrium before its ventricle, on both sides. '
        + 'Name all four chambers.',
    },
    {
      mistake: 'Listing red cell features without reasons.',
      why: 'No nucleus leaves room for more haemoglobin; the biconcave '
        + 'shape gives more surface. '
        + 'The reasons are the marks.',
    },
    {
      mistake: 'Drawing the left side of the heart on the left of the page.',
      why: 'A heart diagram is drawn facing the person, so their left is '
        + 'your right. '
        + 'Label from the person, not from the page.',
    },
  ],

  extension:
    'Blood pressure is written as two numbers, such as 120 over 80, and '
    + 'the two are the pressures when the ventricle contracts and when it '
    + 'relaxes. '
    + 'Persistently high values make the left ventricle work harder, and '
    + 'like any muscle it thickens, which in time makes it less efficient '
    + 'rather than more. '
    + 'This is why hypertension is treated even when the person feels well, '
    + 'and why it is common enough in Ghanaian towns to be checked at '
    + 'almost every clinic visit.',

  questions: [
    {
      id: 'ci-1',
      ask: 'An artery is a vessel that carries blood:',
      kind: 'choice',
      options: [
        'Away from the heart',
        'That is always oxygenated',
        'Towards the heart',
      ],
      answer: 'Away from the heart',
      teach: 'The pulmonary artery proves it: it leaves the heart carrying '
        + 'deoxygenated blood.',
      level: 3,
    },
    {
      id: 'ci-2',
      ask: 'How many times does blood pass through the heart in one '
        + 'complete circuit of a mammal’s body?',
      kind: 'numeric',
      options: [],
      answer: '2',
      teach: 'Once on the way to and from the lungs, once on the way round '
        + 'the body. '
        + 'That is double circulation.',
      level: 4,
    },
    {
      id: 'ci-3',
      ask: 'Veins have valves because:',
      kind: 'choice',
      options: [
        'The blood pressure in them is too low to prevent backflow by itself',
        'They carry deoxygenated blood',
        'Their walls are too thick to bend',
      ],
      answer: 'The blood pressure in them is too low to prevent backflow by itself',
      teach: 'Arteries need none, because the surge from the ventricle '
        + 'keeps the blood moving one way.',
      level: 5,
    },
    {
      id: 'ci-4',
      ask: 'A red blood cell has no nucleus, which:',
      kind: 'choice',
      options: [
        'Leaves more room for haemoglobin',
        'Lets it divide more often',
        'Makes it lighter so it flows faster',
      ],
      answer: 'Leaves more room for haemoglobin',
      teach: 'It also means the cell cannot repair itself, which is why a '
        + 'red cell lasts only about four months.',
      level: 5,
    },
  ],
})

/* ── support and movement ───────────────────────────────────────────────── */

teach({
  topicId: 'support-movement-bio',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A muscle can only pull, never push. '
      + 'So muscles work in pairs with opposite effects, and a joint is '
      + 'moved one way by one of them and back by the other. '
      + 'The skeleton gives them something rigid to pull against, and the '
      + 'arrangement is a system of levers.',
    method: [
      'Name the joint and the movement asked about.',
      'Name the muscle that contracts and the one that relaxes.',
      'Say that the pair is antagonistic, because a muscle cannot push.',
    ],
  },

  why:
    'Hold your arm out and feel the front of it while you bend the elbow. '
    + 'The muscle there hardens and shortens, and the arm comes up. '
    + 'Now straighten the arm again. '
    + 'The front muscle softens, but something must have straightened the '
    + 'arm, because a muscle that has gone soft cannot have pushed it. '
    + 'Nothing is pushing from anywhere you can see. '
    + 'So what straightened the arm, and why can one muscle not do both '
    + 'jobs?',

  notation:
    'A tendon joins a muscle to a bone and is tough and inelastic, because '
    + 'a stretchy tendon would waste the pull. '
    + 'A ligament joins bone to bone at a joint and is slightly elastic, '
    + 'so the joint can move but not come apart. '
    + 'Confusing those two is a lost mark every year, so fix it with the '
    + 'words: tendon to a tug, ligament to a link. '
    + 'Antagonistic means working against each other, and an antagonistic '
    + 'pair is two muscles with opposite effects on the same joint. '
    + 'Flexion is bending a joint and extension is straightening it, so the '
    + 'biceps is a flexor and the triceps an extensor. '
    + 'Cartilage is the smooth covering on the ends of bones in a joint, '
    + 'and synovial fluid is the liquid that lubricates it.',

  idea:
    'The skeleton does three things: it supports the body, it protects the '
    + 'organs, and it provides a rigid framework for muscles to pull '
    + 'against. '
    + 'It also makes blood cells in the marrow of some bones. '
    + 'A joint is where two bones meet. '
    + 'A hinge joint, such as the elbow or the knee, allows movement in one '
    + 'plane only. '
    + 'A ball and socket joint, such as the shoulder or the hip, allows '
    + 'movement in every direction. '
    + 'The bone ends are covered in cartilage and the joint cavity holds '
    + 'synovial fluid, so the surfaces slide without wearing, and ligaments '
    + 'hold the bones together. '
    + 'Muscles are attached to bones by tendons. '
    + 'A muscle can contract, which pulls, and relax, which simply stops '
    + 'pulling. '
    + 'It cannot push. '
    + 'So every movement that has to be reversed needs two muscles: one to '
    + 'move the joint and another, on the opposite side, to move it back. '
    + 'Such a pair is antagonistic. '
    + 'At the elbow the biceps contracts to bend the arm while the triceps '
    + 'relaxes, and the triceps contracts to straighten it while the '
    + 'biceps relaxes. '
    + 'The bones and joints together act as levers, with the joint as the '
    + 'pivot, the muscle supplying the effort, and the weight carried as '
    + 'the load.',

  tables: [
    {
      caption: 'Tendon, ligament and cartilage: what each joins and why it is built as it is',
      columns: ['Structure', 'Joins', 'Property', 'Reason'],
      rows: [
        ['Tendon', 'Muscle to bone', 'Tough and inelastic',
          'A stretchy tendon would absorb the pull instead of moving the bone'],
        ['Ligament', 'Bone to bone', 'Strong and slightly elastic',
          'The joint must move freely but not come apart'],
        ['Cartilage', 'Covers the bone ends', 'Smooth and slightly compressible',
          'Reduces friction and absorbs shock'],
      ],
      note: 'Tendon to a tug, ligament to a link. '
        + 'The reason column is where the marks are, not the joins column.',
    },
    {
      caption: 'Two kinds of joint compared',
      columns: ['Point', 'Hinge joint', 'Ball and socket joint'],
      rows: [
        ['Examples', 'Elbow, knee', 'Shoulder, hip'],
        ['Movement allowed', 'One plane only, bending and straightening',
          'All directions, including rotation'],
        ['Stability', 'More stable', 'Less stable, dislocates more easily'],
        ['Muscles needed', 'One antagonistic pair', 'Several groups'],
      ],
      note: 'The stability row is the trade: the shoulder can do far more '
        + 'than the elbow and is far easier to put out of joint, which is '
        + 'why a footballer dislocates a shoulder and not an elbow.',
    },
    {
      caption: 'The antagonistic pair at the elbow, movement by movement',
      columns: ['Movement', 'Biceps', 'Triceps'],
      rows: [
        ['Bending the arm', 'Contracts', 'Relaxes'],
        ['Straightening the arm', 'Relaxes', 'Contracts'],
        ['Holding a load still', 'Partly contracted', 'Partly contracted'],
      ],
      note: 'The third row is the one candidates never think of, and it is '
        + 'why your arm shakes when you hold something heavy for a long '
        + 'time.',
    },
  ],

  figure: {
    alt: 'The arm drawn twice, as two bones meeting at the elbow. In the '
      + 'left drawing the arm is bent: the muscle on the inside of the '
      + 'upper arm is drawn short and fat, labelled biceps, contracted, '
      + 'and the muscle behind it is drawn long and thin, labelled triceps, '
      + 'relaxed. An arrow shows the forearm moving up. In the right '
      + 'drawing the arm is straight: the biceps is now long and thin and '
      + 'labelled relaxed, while the triceps is short and fat and labelled '
      + 'contracted, with an arrow showing the forearm moving down. In both '
      + 'drawings the ends of the muscles are shown as narrow cords '
      + 'attached to the bones, labelled tendons, and the joint itself is '
      + 'marked with a dot labelled the pivot of the lever. A note at the '
      + 'bottom says a muscle can only pull, so it takes two of them to '
      + 'move a joint and bring it back.',
    svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="60" y1="60" x2="60" y2="180" stroke-width="6"/>'
      + '<line x1="60" y1="180" x2="170" y2="110" stroke-width="6"/>'
      + '<circle cx="60" cy="180" r="6" fill="#b4531a" stroke="none"/>'
      + '<text x="34" y="206" font-size="11" fill="#b4531a" '
      + 'stroke="none">pivot</text>'
      + '<path d="M62 80 Q96 110 110 140" stroke="#1d4ed8"/>'
      + '<path d="M62 80 Q116 104 110 140" stroke="#1d4ed8"/>'
      + '<text x="128" y="96" font-size="11" fill="#1d4ed8" '
      + 'stroke="none">biceps:</text>'
      + '<text x="128" y="110" font-size="11" fill="#1d4ed8" '
      + 'stroke="none">contracted</text>'
      + '<path d="M56 80 Q30 130 40 170" stroke="#0f8a4d"/>'
      + '<path d="M56 80 Q40 130 40 170" stroke="#0f8a4d"/>'
      + '<text x="4" y="254" font-size="11" fill="#0f8a4d" '
      + 'stroke="none">triceps: relaxed</text>'
      + '<line x1="150" y1="118" x2="190" y2="92" stroke="#7c3aed"/>'
      + '<path d="M182 90 L194 88 L188 100" stroke="#7c3aed"/>'
      + '<text x="150" y="290" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">arm bending</text>'
      + '<line x1="420" y1="60" x2="420" y2="180" stroke-width="6"/>'
      + '<line x1="420" y1="180" x2="420" y2="300" stroke-width="6"/>'
      + '<circle cx="420" cy="180" r="6" fill="#b4531a" stroke="none"/>'
      + '<path d="M422 80 Q436 130 426 170" stroke="#1d4ed8"/>'
      + '<path d="M422 80 Q444 130 426 170" stroke="#1d4ed8"/>'
      + '<text x="452" y="124" font-size="11" fill="#1d4ed8" '
      + 'stroke="none">biceps: relaxed</text>'
      + '<path d="M416 80 Q372 110 390 160" stroke="#0f8a4d"/>'
      + '<path d="M416 80 Q392 120 390 160" stroke="#0f8a4d"/>'
      + '<text x="300" y="96" font-size="11" text-anchor="end" '
      + 'fill="#0f8a4d" stroke="none">triceps:</text>'
      + '<text x="300" y="110" font-size="11" text-anchor="end" '
      + 'fill="#0f8a4d" stroke="none">contracted</text>'
      + '<line x1="446" y1="230" x2="446" y2="276" stroke="#7c3aed"/>'
      + '<path d="M440 268 L446 280 L452 268" stroke="#7c3aed"/>'
      + '<text x="420" y="330" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">arm straightening</text>'
      + '<line x1="110" y1="140" x2="124" y2="152" stroke-width="3" '
      + 'stroke="#b4531a"/>'
      + '<text x="190" y="156" font-size="11" fill="#b4531a" '
      + 'stroke="none">tendon to the bone</text>'
      + '<text x="285" y="214" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a muscle can only pull,</text>'
      + '<text x="285" y="230" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">so it takes two</text>'
      + '</svg>',
  },

  mechanism:
    'Everything in this topic comes out of one limitation. A muscle '
    + 'shortens when it contracts, and that is all it can do. '
    + 'Relaxing is not the opposite of contracting in any useful '
    + 'sense; it is simply letting go. A rope can pull a load and '
    + 'cannot push it, and a muscle is a rope that can shorten '
    + 'itself. So the answer to the opening question is that the '
    + 'triceps straightened the arm. The biceps did not push it down, '
    + 'because no muscle pushes anything. This is why muscles come in '
    + 'antagonistic pairs, and the word antagonistic is the mark: it '
    + 'means the two have opposite effects on the same joint, so that '
    + 'whatever one of them does can be undone by the other. The full '
    + 'answer to any question of this kind names both muscles and '
    + 'says what each is doing, because a marking scheme wants '
    + 'contracts and relaxes as separate statements. Saying the '
    + 'biceps contracts is half an answer.\n\n'
    + 'The second idea is the lever, and it explains the proportions '
    + 'of a limb. The joint is the pivot, the muscle supplies the '
    + 'effort through its tendon, and the load is whatever the hand '
    + 'is holding. Notice where the biceps tendon attaches: very '
    + 'close to the elbow, only a few centimetres from the pivot, '
    + 'while the load in the hand is thirty centimetres away. So the '
    + 'muscle is working at a large mechanical disadvantage and has '
    + 'to pull with many times the weight of the load. In return, a '
    + 'small shortening of the muscle swings the hand a long way and '
    + 'quickly. That is the trade the arm is built around: strength '
    + 'given up for speed and range, which is the right bargain for '
    + 'throwing and carrying rather than for crushing. A question '
    + 'asking why the biceps must exert a force far greater than the '
    + 'load is asking for exactly this, and the arithmetic is the '
    + 'moment arithmetic from physics.\n\n'
    + 'Three structural points are examinable and each has a reason. '
    + 'A tendon is inelastic because any stretch in it would be taken '
    + 'up before the bone moved, wasting the contraction. A ligament '
    + 'is slightly elastic because a joint has to move, but it must '
    + 'not allow the bones to separate, and a torn ligament is '
    + 'exactly what a sprained ankle is. Cartilage and synovial fluid '
    + 'together reduce friction and absorb shock, which is why an old '
    + 'joint whose cartilage has worn grates and aches. Two places '
    + 'lose marks beyond the tendon and ligament confusion.\n\n'
    + 'The first is saying a muscle relaxes by lengthening of its own '
    + 'accord. It is lengthened, by its antagonist or by the weight '
    + 'of the limb. The second is forgetting that both muscles of a '
    + 'pair can be partly contracted at once. Holding a bucket of '
    + 'water still at a fixed angle needs both the biceps and the '
    + 'triceps working, and that is why the arm begins to shake: the '
    + 'two are holding the joint steady against each other, and both '
    + 'tire. A note on apparatus. This is a topic learned on your own '
    + 'arm, and a learner should be told to do it: hold the upper arm '
    + 'with the other hand, bend and straighten, and feel which '
    + 'muscle hardens each time. A chicken wing from the market, '
    + 'which costs very little, can be skinned to show the tendons, '
    + 'the cartilage on the bone ends and the two muscle groups, and '
    + 'pulling one tendon with a pair of tweezers moves the joint, '
    + 'which makes the whole lesson concrete. No school needs a '
    + 'laboratory for any of this.',

  recap:
    'Your body has a skeleton of bones inside it. '
    + 'It holds you up, it protects the soft parts, and it gives you a '
    + 'shape. '
    + 'Where two bones meet you can bend, and that place is a joint. '
    + 'You also have muscles, and you know that a muscle gets hard and '
    + 'short when you use it, because you can feel it happen. '
    + 'Movement comes from muscles pulling on bones. '
    + 'This lesson asks a question that sounds too simple to be worth '
    + 'asking, which is how a bone gets pulled back again, and the answer '
    + 'turns out to explain the way every limb in the body is arranged.',

  method: [
    'Name the joint and say what kind it is, hinge or ball and socket.',
    'Name the movement: bending, which is flexion, or straightening, which is extension.',
    'Name the muscle that contracts for that movement.',
    'Name its antagonist and say that it relaxes.',
    'Say that the pair is antagonistic, because a muscle can only pull.',
    'Name the tendon as the attachment to bone and the ligament as bone to bone.',
    'For a lever question, mark the pivot at the joint, the effort at the tendon and the load at the hand.',
    'Give a reason with every structure, not just its name.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the structure that joins a muscle to a bone and the one '
        + 'that joins bone to bone, and give one property of each.',
      steps: [
        'Muscle to bone is a tendon.',
        'Bone to bone at a joint is a ligament.',
      ],
      answer: 'A tendon joins muscle to bone and is tough and inelastic. '
        + 'A ligament joins bone to bone and is strong but slightly '
        + 'elastic. '
        + 'Tendon to a tug, ligament to a link.',
    },
    {
      level: 4,
      ask: 'Describe what the biceps and the triceps each do when the arm '
        + 'is straightened, and name the kind of pair they form.',
      steps: [
        'Straightening is extension, and the triceps is the extensor.',
        'The triceps contracts and pulls the forearm down.',
        'The biceps must relax, or it would oppose the movement.',
      ],
      answer: 'The triceps contracts and the biceps relaxes. '
        + 'They form an antagonistic pair, because a muscle can only pull '
        + 'and so a second muscle is needed to reverse the movement. '
        + 'Both statements, contracts and relaxes, are needed.',
    },
    {
      level: 5,
      ask: 'Explain why a tendon is inelastic while a ligament is slightly '
        + 'elastic.',
      steps: [
        'A tendon transmits the pull of the muscle to the bone.',
        'If it stretched, the muscle would shorten without moving the '
        + 'bone, and the contraction would be wasted.',
        'A ligament holds two bones together at a joint that must still '
        + 'move.',
        'So it has to allow some movement while preventing separation.',
      ],
      answer: 'An inelastic tendon passes on the whole of the muscle’s '
        + 'contraction to the bone. '
        + 'A slightly elastic ligament allows the joint to move through its '
        + 'range while holding the bones together, and overstretching one '
        + 'is what a sprain is.',
    },
    {
      level: 6,
      ask: 'The biceps tendon is attached 4 cm from the elbow joint, and a '
        + 'load of 20 N is held in the hand 32 cm from the joint. '
        + 'Find the force the biceps must exert, and comment on what the '
        + 'arm has gained in exchange.',
      steps: [
        { math: 'F \\times 4 = 20 \\times 32', why: 'Moments about the elbow balance, with the joint as the pivot.' },
        { math: 'F = \\frac{640}{4} = 160\\ \\text{N}' },
        'The muscle pulls with eight times the load, so the arm is a lever '
        + 'at a mechanical disadvantage.',
        'In return, a shortening of 1 cm at the tendon moves the hand 8 cm.',
      ],
      answer: '$160$ N, eight times the load. '
        + 'What the arm gains is speed and range: a small contraction '
        + 'produces a large, fast movement of the hand. '
        + 'That is the right bargain for throwing and reaching, and it is '
        + 'why a human arm is built for dexterity rather than for '
        + 'crushing.',
    },
  ],

  traps: [
    {
      mistake: 'Using tendon and ligament as though they were the same.',
      why: 'A tendon joins muscle to bone and a ligament joins bone to '
        + 'bone. '
        + 'Tendon to a tug, ligament to a link.',
    },
    {
      mistake: 'Saying one muscle both bends and straightens a joint.',
      why: 'A muscle can only pull. '
        + 'A second muscle on the other side is needed to reverse the '
        + 'movement, and the pair is antagonistic.',
    },
    {
      mistake: 'Writing only that the biceps contracts.',
      why: 'The marking scheme wants both halves: one contracts and the '
        + 'other relaxes. '
        + 'Name both muscles.',
    },
    {
      mistake: 'Saying a relaxed muscle lengthens itself.',
      why: 'It is lengthened by its antagonist or by the weight of the '
        + 'limb. '
        + 'Relaxing is only letting go.',
    },
    {
      mistake: 'Treating the shoulder as more stable than the elbow because it is larger.',
      why: 'A ball and socket joint trades stability for freedom of '
        + 'movement, which is why shoulders dislocate and elbows rarely '
        + 'do.',
    },
  ],

  extension:
    'Exercise does not give a muscle more fibres. '
    + 'It makes the fibres already there thicker, and it increases the '
    + 'number of mitochondria and capillaries in them, so the muscle can '
    + 'respire aerobically for longer before it has to fall back on the '
    + 'anaerobic route. '
    + 'That is why a trained runner reaches an oxygen debt later than an '
    + 'untrained one, and the two topics are really one.',

  questions: [
    {
      id: 'sm-1',
      ask: 'A muscle moves a bone by:',
      kind: 'choice',
      options: [
        'Contracting and pulling on it',
        'Pushing against it',
        'Becoming longer and stiffer',
      ],
      answer: 'Contracting and pulling on it',
      teach: 'A muscle can only pull, which is the reason antagonistic '
        + 'pairs exist at all.',
      level: 3,
    },
    {
      id: 'sm-2',
      ask: 'When the arm bends at the elbow:',
      kind: 'choice',
      options: [
        'The biceps contracts and the triceps relaxes',
        'Both contract together',
        'The triceps contracts and the biceps relaxes',
      ],
      answer: 'The biceps contracts and the triceps relaxes',
      teach: 'And the reverse when the arm straightens. '
        + 'Name both muscles and what each is doing.',
      level: 4,
    },
    {
      id: 'sm-3',
      ask: 'A tendon is inelastic because:',
      kind: 'choice',
      options: [
        'Any stretch would waste the muscle’s contraction',
        'It must hold two bones together',
        'It has to absorb shock at the joint',
      ],
      answer: 'Any stretch would waste the muscle’s contraction',
      teach: 'Holding bones together is the ligament’s job and absorbing '
        + 'shock is the cartilage’s.',
      level: 5,
    },
    {
      id: 'sm-4',
      ask: 'The elbow is a hinge joint, which means it:',
      kind: 'choice',
      options: [
        'Moves in one plane only',
        'Moves in all directions',
        'Cannot move at all',
      ],
      answer: 'Moves in one plane only',
      teach: 'The shoulder is the ball and socket that moves in all '
        + 'directions, and it dislocates far more easily as a result.',
      level: 4,
    },
  ],
})

/* ── reproduction in humans ─────────────────────────────────────────────── */

teach({
  topicId: 'reproduction-humans-bio',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Gametes are made by meiosis, so each carries half the chromosomes. '
      + 'In a woman one egg is released about every 28 days, and the '
      + 'lining of the uterus is prepared for it by hormones. '
      + 'If the egg is fertilised it implants and develops; if not, the '
      + 'lining is shed and the cycle begins again.',
    method: [
      'Say which gamete, and that it was made by meiosis and is haploid.',
      'For the cycle, count days from the first day of bleeding, and put ovulation near day 14.',
      'Name the hormone and the organ that released it before saying what it does.',
    ],
  },

  why:
    'At a clinic in Koforidua a midwife asks a pregnant woman one question '
    + 'before anything else: the date her last period began. '
    + 'From that single date she writes down an expected date of delivery '
    + 'about nine months ahead, and books the visits around it. '
    + 'She has not examined anything yet and she does not know the date of '
    + 'conception. '
    + 'How can a date in the past, about bleeding, predict a birth nine '
    + 'months in the future?',

  notation:
    'A gamete is a sex cell: the sperm in a man and the ovum, or egg, in a '
    + 'woman. '
    + 'Haploid means carrying one of each pair of chromosomes, so a human '
    + 'gamete has 23. '
    + 'Diploid means carrying both, so a body cell has 46. '
    + 'The testis makes sperm and the ovary makes ova, and both processes '
    + 'are called gametogenesis. '
    + 'Ovulation is the release of an ovum from the ovary. '
    + 'The oviduct, also called the fallopian tube, carries the ovum '
    + 'towards the uterus, and fertilisation normally happens in it. '
    + 'Implantation is the sinking of the early embryo into the lining of '
    + 'the uterus. '
    + 'The placenta is the organ that forms between the embryo and the '
    + 'uterus wall for exchange. '
    + 'Gestation is the length of the pregnancy, about 40 weeks in a '
    + 'human.',

  idea:
    'Human reproduction is sexual, so it begins with gametes made by '
    + 'meiosis. '
    + 'A testis makes sperm continuously from puberty onwards, in very '
    + 'large numbers, and each sperm is small, motile and carries little '
    + 'but a nucleus. '
    + 'An ovary contains all its potential ova from before birth and '
    + 'releases one about every 28 days from puberty to the menopause. '
    + 'An ovum is much larger than a sperm, is not motile, and carries a '
    + 'food store. '
    + 'Both are haploid, with 23 chromosomes, so the zygote formed when '
    + 'they fuse has 46. '
    + 'The menstrual cycle is counted from the first day of bleeding. '
    + 'In the first half a follicle in the ovary ripens, and the oestrogen '
    + 'it secretes thickens the lining of the uterus. '
    + 'Ovulation happens around day 14. '
    + 'In the second half the remains of the follicle secrete '
    + 'progesterone, which maintains that lining. '
    + 'If no fertilised egg implants, the progesterone falls, the lining '
    + 'breaks down, and menstruation begins, which is day one of the next '
    + 'cycle. '
    + 'If fertilisation does occur, in the oviduct, the zygote divides as '
    + 'it travels and implants in the prepared lining. '
    + 'A placenta then develops, through which oxygen, glucose, amino '
    + 'acids and antibodies pass from the mother to the fetus, and carbon '
    + 'dioxide and urea pass back. '
    + 'The two blood supplies do not mix.',

  tables: [
    {
      caption: 'The sperm and the ovum compared',
      columns: ['Point', 'Sperm', 'Ovum'],
      rows: [
        ['Relative size', 'Very small', 'Much larger, the largest human cell'],
        ['Can it move itself', 'Yes, it has a tail', 'No, it is carried by the oviduct'],
        ['Food store', 'Almost none', 'A food store for the first days'],
        ['Numbers released', 'Many millions at a time', 'Usually one per cycle'],
        ['Made from', 'Puberty onwards, continuously', 'All present before birth, released one at a time'],
      ],
      note: 'Each difference follows from the job. '
        + 'One gamete has to travel and is built light; the other has to '
        + 'feed an embryo for several days and is built heavy.',
    },
    {
      caption: 'The menstrual cycle in four stages, counted from the first day of bleeding',
      columns: ['Days', 'In the ovary', 'In the uterus', 'Main hormone'],
      rows: [
        ['1 to 5', 'A follicle begins to ripen', 'The old lining is shed as menstruation',
          'All hormones low'],
        ['6 to 13', 'The follicle ripens further', 'The lining thickens again', 'Oestrogen rising'],
        ['14', 'The ovum is released: ovulation', 'The lining is at its thickest',
          'Oestrogen peaks'],
        ['15 to 28', 'The follicle remains become a secreting body',
          'The lining is maintained, ready for implantation', 'Progesterone high'],
      ],
      note: 'Day 1 is the first day of bleeding, not the last. '
        + 'Every date in the topic is counted from there, which is what '
        + 'makes a midwife’s arithmetic possible.',
    },
    {
      caption: 'What crosses the placenta, in each direction',
      columns: ['Direction', 'What passes'],
      rows: [
        ['Mother to fetus', 'Oxygen, glucose, amino acids, water, mineral salts, antibodies'],
        ['Fetus to mother', 'Carbon dioxide, urea'],
        ['Does not cross normally', 'Blood cells, because the two circulations stay separate'],
        ['Crosses although it should not', 'Alcohol, nicotine, some drugs, some viruses'],
      ],
      note: 'The last row is why a pregnant woman is advised about what she '
        + 'takes. '
        + 'The placenta is a filter, not a wall.',
    },
  ],

  figure: {
    alt: 'A timeline of a 28 day cycle drawn as a horizontal bar marked in '
      + 'days from 1 to 28, with day 1 labelled first day of bleeding. '
      + 'Above the bar two curves are drawn. The first, labelled '
      + 'oestrogen, rises from day 5 and peaks just before day 14. The '
      + 'second, labelled progesterone, rises after day 14, stays high '
      + 'through the twenties and falls sharply at the end. A vertical '
      + 'dashed line at day 14 is labelled ovulation. Below the bar the '
      + 'state of the uterus lining is drawn as a shaded strip: thin and '
      + 'breaking away at days 1 to 5, thickening through the middle, and '
      + 'at its thickest from day 14 to the end before breaking away '
      + 'again. A note says if an embryo implants, the progesterone does '
      + 'not fall and the lining is kept, so no bleeding happens, and that '
      + 'is the first sign of pregnancy.',
    svg: '<svg viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="60" y1="230" x2="620" y2="230"/>'
      + '<text x="60" y="252" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">day 1</text>'
      + '<text x="340" y="252" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">day 14</text>'
      + '<text x="620" y="252" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">day 28</text>'
      + '<line x1="340" y1="60" x2="340" y2="310" stroke-dasharray="4 4" '
      + 'stroke="#b4531a"/>'
      + '<text x="348" y="74" font-size="12" fill="#b4531a" '
      + 'stroke="none">ovulation</text>'
      + '<path d="M60 220 Q160 210 240 150 Q300 110 330 100 Q350 112 380 160 '
      + 'Q420 200 500 206 L620 210" stroke="#1d4ed8"/>'
      + '<text x="200" y="134" font-size="12" fill="#1d4ed8" '
      + 'stroke="none">oestrogen</text>'
      + '<path d="M340 222 Q400 200 440 140 L540 136 Q580 140 600 216 L620 226" '
      + 'stroke="#0f8a4d"/>'
      + '<text x="452" y="124" font-size="12" fill="#0f8a4d" '
      + 'stroke="none">progesterone</text>'
      + '<rect x="60" y="280" width="60" height="8" fill="#b4531a" '
      + 'fill-opacity="0.4" stroke="none"/>'
      + '<rect x="120" y="276" width="60" height="14" fill="#f0b5c8" '
      + 'fill-opacity="0.7" stroke="none"/>'
      + '<rect x="180" y="272" width="80" height="20" fill="#f0b5c8" '
      + 'fill-opacity="0.7" stroke="none"/>'
      + '<rect x="260" y="266" width="80" height="30" fill="#f0b5c8" '
      + 'fill-opacity="0.7" stroke="none"/>'
      + '<rect x="340" y="262" width="240" height="36" fill="#f0b5c8" '
      + 'fill-opacity="0.7" stroke="none"/>'
      + '<rect x="580" y="280" width="40" height="8" fill="#b4531a" '
      + 'fill-opacity="0.4" stroke="none"/>'
      + '<text x="60" y="318" font-size="11" fill="#b4531a" '
      + 'stroke="none">lining shed</text>'
      + '<text x="200" y="318" font-size="11" fill="currentColor" '
      + 'stroke="none">lining thickening</text>'
      + '<text x="420" y="318" font-size="11" fill="currentColor" '
      + 'stroke="none">lining maintained for implantation</text>'
      + '<text x="340" y="352" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'if an embryo implants, the progesterone does not fall and the lining is kept</text>'
      + '<text x="340" y="370" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'so no bleeding happens, and that is the first sign of pregnancy</text>'
      + '</svg>',
  },

  mechanism:
    'The menstrual cycle is the part of this topic that carries the '
    + 'marks, and it is best understood as one preparation repeated. '
    + 'Each month the uterus builds a lining that an embryo could '
    + 'sink into, and each month it either uses it or throws it away. '
    + 'The hormones are the instructions for that building. '
    + 'Oestrogen, from the ripening follicle, says build. '
    + 'Progesterone, from what is left of the follicle after '
    + 'ovulation, says keep it. So the whole cycle follows from one '
    + 'rule: while progesterone is high, the lining stays; when it '
    + 'falls, the lining goes. That rule answers several questions at '
    + 'once.\n\n'
    + 'Why does menstruation happen at all? Because no embryo '
    + 'implanted, so the follicle remains stop secreting '
    + 'progesterone, and the lining is no longer maintained. Why does '
    + 'a pregnant woman not menstruate? Because an implanted embryo '
    + 'keeps the progesterone up, so the instruction to keep the '
    + 'lining is never withdrawn. And how does a contraceptive pill '
    + 'work? By supplying hormones that keep the body from ripening '
    + 'and releasing a follicle in the first place. One rule, three '
    + 'answers, and in every case the answer names the hormone and '
    + 'the gland or structure that made it, because a hormone without '
    + 'its source is usually only half a mark.\n\n'
    + 'Now the midwife. Day one of the cycle is the first day of '
    + 'bleeding, which is a date the woman can remember, and '
    + 'ovulation is about day 14, which she cannot observe. Since a '
    + 'human gestation runs about 280 days from that first day, the '
    + 'expected date of delivery is 280 days, or roughly nine months '
    + 'and a week, from the start of the last period. The midwife is '
    + 'not guessing: she is using the one date in the whole process '
    + 'that is reliably known, and accepting that it is about two '
    + 'weeks earlier than conception. That is also why the estimate '
    + 'is approximate, and why a cycle that is not 28 days long '
    + 'shifts it. Fertilisation itself is worth stating precisely. It '
    + 'happens in the oviduct, not in the uterus, and only one sperm '
    + 'enters the ovum, after which the membrane changes so no other '
    + 'can. The zygote is diploid, with 23 chromosomes from each '
    + 'parent, and it divides by mitosis as it travels down the '
    + 'oviduct, arriving at the uterus as a ball of cells which then '
    + 'implants.\n\n'
    + 'A candidate who says fertilisation happens in the uterus has '
    + 'lost a mark that costs nothing to keep. The placenta deserves '
    + 'one careful sentence. The mother’s blood and the fetus’s blood '
    + 'do not mix; they run close together across a very large '
    + 'surface, and substances diffuse between them. Keeping them '
    + 'separate matters because the two may have different blood '
    + 'groups and because the fetal circulation could not take the '
    + 'mother’s blood pressure. The placenta is a filter rather than '
    + 'a wall, though, and alcohol, nicotine and some viruses cross '
    + 'it, which is the biological basis of the advice a clinic '
    + 'gives.\n\n'
    + 'Three further places lose marks. The first is counting day one '
    + 'as the last day of bleeding. It is the first. The second is '
    + 'saying the ovaries make eggs each month. The potential ova are '
    + 'all present before birth; what happens monthly is that one '
    + 'ripens and is released. The third is confusing the oviduct '
    + 'with the uterus in any part of the description. A note on '
    + 'apparatus. This topic needs none. What it needs is accuracy '
    + 'and a plain register, because a learner who is given vague '
    + 'language here will not have the words to ask a nurse a '
    + 'question later.\n\n'
    + 'The examinable content is the structures, the cycle with its '
    + 'days and hormones, the site of fertilisation, and the '
    + 'placenta, and all four can be learned from the figure and the '
    + 'tables above.',

  recap:
    'A new human being begins when a sperm from a man joins an egg from a '
    + 'woman. '
    + 'That joining is called fertilisation, and the single cell it makes '
    + 'divides again and again to become a baby. '
    + 'You know that this is sexual reproduction, and that it needs two '
    + 'parents, which is why a child resembles both. '
    + 'You also know that a woman’s body works on a monthly cycle from '
    + 'puberty onwards. '
    + 'This lesson sets out where the gametes come from, what that monthly '
    + 'cycle is actually preparing for, and what happens in the weeks '
    + 'after fertilisation.',

  method: [
    'Name the gamete and say it was made by meiosis and is haploid.',
    'Give the number of chromosomes: 23 in a gamete, 46 in the zygote.',
    'For the cycle, count from day one, the first day of bleeding.',
    'Put ovulation at about day 14 and say what the lining is doing.',
    'Name the hormone and the structure that secreted it, then what it does.',
    'Say fertilisation happens in the oviduct, and implantation in the uterus.',
    'For the placenta, name what crosses each way and say the bloods do not mix.',
    'Use the proper terms throughout, because the marks are attached to them.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How many chromosomes are there in a human sperm, in a human '
        + 'ovum, and in the zygote they form?',
      steps: [
        'Both gametes are made by meiosis, so both are haploid.',
        { math: '23 + 23 = 46' },
      ],
      answer: '23 in the sperm, 23 in the ovum, and 46 in the zygote. '
        + 'That is why the chromosome number does not double with every '
        + 'generation.',
    },
    {
      level: 4,
      ask: 'State two ways in which an ovum differs from a sperm, and '
        + 'relate each difference to its function.',
      steps: [
        'A sperm must travel to the ovum, so it is small and has a tail.',
        'An ovum must support the embryo for several days before '
        + 'implantation, so it is large and carries a food store.',
      ],
      answer: 'The ovum is much larger and carries a food store, because it '
        + 'has to feed the dividing embryo until it implants; the sperm is '
        + 'small and motile, because it has to reach the ovum. '
        + 'The reasons are the marks, not the differences.',
    },
    {
      level: 5,
      ask: 'Explain why menstruation does not occur if the ovum is '
        + 'fertilised and implants.',
      steps: [
        'After ovulation the follicle remains secrete progesterone, which '
        + 'maintains the lining of the uterus.',
        'If no embryo implants, that secretion stops, progesterone falls, '
        + 'and the lining breaks down.',
        'An implanted embryo causes the progesterone to be maintained.',
        'So the instruction to keep the lining is never withdrawn.',
      ],
      answer: 'Because progesterone stays high, so the uterus lining '
        + 'continues to be maintained instead of breaking down. '
        + 'The missed period is therefore the first sign of pregnancy, and '
        + 'the hormone must be named for the mark.',
    },
    {
      level: 6,
      ask: 'A woman’s last period began on 10 March and her cycle is 28 '
        + 'days. '
        + 'Estimate the date of ovulation and the expected date of '
        + 'delivery, and state one reason the second estimate may be '
        + 'wrong.',
      steps: [
        'Day 1 is 10 March, the first day of bleeding.',
        { math: '10\\ \\text{March} + 13\\ \\text{days} = 23\\ \\text{March}', why: 'Ovulation is about day 14, so thirteen days after day one.' },
        { math: '280\\ \\text{days from 10 March}', why: 'A human gestation is about 40 weeks counted from the first day of the last period.' },
        'That falls in the middle of December.',
      ],
      answer: 'Ovulation about 23 March, and delivery about 15 December. '
        + 'The second estimate can be wrong because the calculation assumes '
        + 'a 28 day cycle and ovulation on day 14, and a woman whose cycle '
        + 'is longer or shorter will have conceived at a different point. '
        + 'That is why the date is called an expected date and not a fixed '
        + 'one.',
    },
  ],

  traps: [
    {
      mistake: 'Counting day one of the cycle as the last day of bleeding.',
      why: 'It is the first day. '
        + 'Every date in the topic, including a delivery date, is counted '
        + 'from there.',
    },
    {
      mistake: 'Saying fertilisation happens in the uterus.',
      why: 'It happens in the oviduct. '
        + 'The embryo reaches the uterus some days later and implants '
        + 'there.',
    },
    {
      mistake: 'Saying the ovaries make a new egg every month.',
      why: 'The potential ova are all present before birth. '
        + 'One ripens and is released each cycle.',
    },
    {
      mistake: 'Saying the mother’s blood flows into the fetus.',
      why: 'The two circulations stay separate and substances diffuse '
        + 'across the placenta. '
        + 'Their blood groups may differ, and the fetal vessels could not '
        + 'take her pressure.',
    },
    {
      mistake: 'Naming a hormone without naming what secreted it.',
      why: 'Oestrogen from the ripening follicle, progesterone from the '
        + 'follicle remains. '
        + 'The source is usually a separate mark.',
    },
  ],

  extension:
    'Twins come in two kinds and the difference is which process produced '
    + 'them. '
    + 'Identical twins come from one zygote that split in two early on, so '
    + 'they are genetically the same and always the same sex. '
    + 'Fraternal twins come from two ova released in the same cycle and '
    + 'fertilised by two sperm, so they are no more alike than any other '
    + 'two children of the same parents. '
    + 'A midwife can often tell which kind is expected from whether there '
    + 'is one placenta or two.',

  questions: [
    {
      id: 'rh-1',
      ask: 'A human gamete contains how many chromosomes?',
      kind: 'numeric',
      options: [],
      answer: '23',
      teach: 'Half of 46, because gametes are made by meiosis. '
        + 'The zygote has 46 again.',
      level: 3,
    },
    {
      id: 'rh-2',
      ask: 'Fertilisation in a human normally takes place in the:',
      kind: 'choice',
      options: ['Oviduct', 'Uterus', 'Ovary'],
      answer: 'Oviduct',
      teach: 'The embryo travels down to the uterus afterwards and implants '
        + 'there some days later.',
      level: 4,
    },
    {
      id: 'rh-3',
      ask: 'Ovulation in a 28 day cycle happens at about day:',
      kind: 'numeric',
      options: [],
      answer: '14',
      teach: 'Counted from the first day of bleeding, which is day one.',
      level: 4,
    },
    {
      id: 'rh-4',
      ask: 'The uterus lining is maintained after ovulation by:',
      kind: 'choice',
      options: [
        'Progesterone from the follicle remains',
        'Oestrogen from the uterus',
        'Progesterone from the placenta only',
      ],
      answer: 'Progesterone from the follicle remains',
      teach: 'When that progesterone falls, the lining breaks down and '
        + 'menstruation begins. '
        + 'Name the hormone and its source.',
      level: 5,
    },
  ],
})
