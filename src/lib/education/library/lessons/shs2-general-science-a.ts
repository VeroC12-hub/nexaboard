/**
 * Stored lessons for SHS 2 General Science: chemical change, water and
 * air, the cycles, and the life topics.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── What these eight have in common ──────────────────────────────────────
 *
 * Conservation. Nothing in any of them appears or disappears; it moves
 * and changes form, and the accounting is the whole of the reasoning. An
 * equation balances because atoms are not created in a reaction. A
 * neutralisation works because the hydrogen ions are taken up rather
 * than destroyed. A carbon cycle is a closed set of books that human
 * burning has unbalanced on one side. A pyramid of energy narrows
 * because energy left each level as heat and respiration, not because it
 * vanished. So each `mechanism` here asks the same question in a
 * different costume: where did it come from and where has it gone.
 *
 * ── How this differs from the Chemistry and Biology electives ────────────
 *
 * General Science is the course for every learner, including those who
 * will take no science further, so these lessons are written to be
 * complete in themselves rather than as a first layer under an
 * elective. Where the elective goes deeper the lesson says so and stops.
 * The mole, bonding and cell transport already have their own treatments
 * in the elective files and are not repeated here.
 *
 * ── Equipment ────────────────────────────────────────────────────────────
 *
 * Said honestly in each lesson. Balancing equations, pH reasoning,
 * tracing a cycle and drawing a food web are paper work and carry most of
 * the marks. A neutralisation needs an acid, a base, an indicator and a
 * burette, and a school without a burette can still do the chemistry
 * with a dropper and count drops, which the lesson explains. Preparing a
 * named salt needs evaporating basins and a source of heat. Hardness of
 * water can be shown with soap solution and rain water, which costs
 * nothing.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── chemical reactions and equations ──────────────────────────────────── */

teach({
  topicId: 'reactions-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'In a chemical reaction, atoms are rearranged '
      + 'and none is created or destroyed. '
      + 'So an equation must balance: '
      + 'the same number of each kind of atom on both sides. '
      + 'Balance by changing the big numbers in front, '
      + 'never the small numbers inside a formula. '
      + 'Classify a reaction by what it does: '
      + 'combination, decomposition, displacement, '
      + 'double decomposition, or neutralisation.',
    method: [
      'Write the correct formulas first, and do not change them.',
      'Count each kind of atom on both sides.',
      'Balance with big numbers in front, leaving oxygen and hydrogen last.',
    ],
  },

  idea:
    'A chemical reaction makes new substances '
    + 'from the atoms of the old ones. '
    + 'The substances you start with are the reactants '
    + 'and those you end with are the products. '
    + 'The law of conservation of mass says '
    + 'that no atoms are created or destroyed, '
    + 'so the total mass does not change. '
    + 'An equation is balanced '
    + 'when each kind of atom is present in the same number '
    + 'on both sides. '
    + 'The big number written in front of a formula '
    + 'is the coefficient, '
    + 'and it multiplies the whole formula. '
    + 'The small number inside a formula is a subscript, '
    + 'and it is part of the substance’s identity. '
    + 'Reactions are classified by what happens. '
    + 'Combination joins substances into one. '
    + 'Decomposition breaks one into several. '
    + 'Displacement has a more reactive element '
    + 'take the place of a less reactive one. '
    + 'Double decomposition swaps the partners of two compounds. '
    + 'Neutralisation is an acid and a base '
    + 'making a salt and water. '
    + 'The state of each substance is shown in brackets: '
    + 's for solid, l for liquid, g for gas, '
    + 'and aq for dissolved in water.',

  mechanism:
    'There is one rule that decides everything in balancing, '
    + 'and it is the rule learners break first. '
    + 'You may change the big numbers in front. '
    + 'You may never change the small numbers inside a formula. '
    + 'The reason is that the small numbers say what the substance is. '
    + 'Water is H2O. '
    + 'If you balance an equation by writing H2O2 '
    + 'you have not balanced it; '
    + 'you have replaced water with hydrogen peroxide, '
    + 'which is a bleach, '
    + 'and the equation now describes a different reaction. '
    + 'So the sequence is: '
    + 'write all the correct formulas first, '
    + 'then treat them as fixed, '
    + 'and balance by multiplying whole formulas. '
    + 'Writing the formulas first and separately '
    + 'also stops the commonest cascade of errors, '
    + 'where a learner invents a formula to make the counting easier. '
    + 'The practical method has an order that saves a great deal of time. '
    + 'Balance the metals first, '
    + 'then the non metals other than oxygen and hydrogen, '
    + 'then hydrogen, '
    + 'and leave oxygen for last. '
    + 'The reason is that oxygen and hydrogen appear '
    + 'in the greatest number of different products, '
    + 'so balancing them early '
    + 'is undone by every later change. '
    + 'Take the burning of propane. '
    + 'C3H8 plus O2 gives CO2 plus H2O. '
    + 'Carbon first: three on the left, '
    + 'so 3 CO2 on the right. '
    + 'Hydrogen next: eight on the left, '
    + 'and water carries two each, '
    + 'so 4 H2O on the right. '
    + 'Only now count the oxygen on the right: '
    + 'six in the carbon dioxide and four in the water, '
    + 'which is ten, '
    + 'so 5 O2 on the left. '
    + 'The final equation is '
    + 'C3H8 plus 5 O2 gives 3 CO2 plus 4 H2O. '
    + 'Done in that order it is three steps and no backtracking. '
    + 'Done with oxygen first it is a long struggle. '
    + 'The second thing to understand is why classification is asked for, '
    + 'because learners treat it as labelling and it is not. '
    + 'The class predicts the products. '
    + 'If you know a reaction is a displacement, '
    + 'and you know the reactivity series, '
    + 'you can say in advance '
    + 'whether anything will happen at all: '
    + 'zinc put into copper sulphate solution '
    + 'displaces the copper, '
    + 'because zinc is above copper in the series, '
    + 'and copper put into zinc sulphate solution does nothing. '
    + 'That is a prediction, '
    + 'and it is what the examination means '
    + 'when it asks you to classify. '
    + 'Likewise, '
    + 'knowing that an acid and a carbonate '
    + 'give a salt, water and carbon dioxide '
    + 'lets you predict the fizzing before you see it. '
    + 'Last, two habits that earn marks cheaply. '
    + 'Write the states in brackets. '
    + 'They are often a mark, '
    + 'and they carry real information: '
    + 'the s beside a product tells the reader '
    + 'that a precipitate formed, '
    + 'which is the whole observation in a double decomposition. '
    + 'And check your balanced equation by counting again, '
    + 'element by element, '
    + 'writing the two totals beside the equation. '
    + 'It takes twenty seconds '
    + 'and it is the only way to be certain, '
    + 'because an equation that looks balanced '
    + 'and is not will cost every mark that follows from it.',

  recap:
    'You know that a chemical change makes a new substance '
    + 'and cannot easily be reversed, '
    + 'and you have written word equations. '
    + 'This replaces the words with formulas '
    + 'and insists that the atoms be accounted for.',

  method: [
    'Identify the reactants and the products.',
    'Write the correct formula for each, and treat each as fixed.',
    'Draw a count of each kind of atom on both sides.',
    'Balance the metals first.',
    'Then the non metals other than oxygen and hydrogen.',
    'Then hydrogen.',
    'Leave oxygen until last.',
    'Add the state in brackets after each formula.',
    'Count every element again and write the two totals beside the equation.',
    'Name the class of reaction, and say what that class predicts.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Balance: Mg plus O2 gives MgO.',
      steps: [
        'Magnesium: one each side to begin with.',
        'Oxygen: two on the left, one on the right.',
        'Put 2 in front of MgO: now two oxygen, but two magnesium.',
        'So put 2 in front of Mg.',
      ],
      answer: '2 Mg plus O2 gives 2 MgO. '
        + 'Two magnesium and two oxygen on each side.',
    },
    {
      level: 4,
      ask: 'Balance the burning of propane: '
        + 'C3H8 plus O2 gives CO2 plus H2O.',
      steps: [
        'Carbon: three on the left, so 3 CO2.',
        'Hydrogen: eight on the left, and two per water, so 4 H2O.',
        'Oxygen on the right: 6 from CO2 plus 4 from H2O, which is 10.',
        'So 5 O2 on the left.',
      ],
      answer: 'C3H8 plus 5 O2 gives 3 CO2 plus 4 H2O. '
        + 'Oxygen was left until last, which is why it took three steps.',
    },
    {
      level: 5,
      ask: 'A learner balances hydrogen burning by writing '
        + 'H2 plus O2 gives H2O2. '
        + 'Say what is wrong and balance it properly.',
      steps: [
        'The small numbers inside a formula say what the substance is.',
        'H2O2 is hydrogen peroxide, a bleach, not water.',
        'So the equation now describes a different reaction.',
        'Keep H2O and balance with coefficients.',
      ],
      answer: 'The learner changed a subscript, '
        + 'which changed the product from water to hydrogen peroxide. '
        + 'Properly: 2 H2 plus O2 gives 2 H2O. '
        + 'Only the big numbers in front may be changed.',
    },
    {
      level: 6,
      ask: 'Zinc is put into copper sulphate solution and the blue '
        + 'colour fades while a brown solid appears. '
        + 'Write the equation with states, name the class, '
        + 'and say what the class lets you predict.',
      steps: [
        'A more reactive metal takes the place of a less reactive one.',
        'Zinc is above copper in the reactivity series.',
        'So zinc goes into solution and copper comes out as a solid.',
        'Zn(s) plus CuSO4(aq) gives ZnSO4(aq) plus Cu(s).',
      ],
      answer: 'Zn(s) plus CuSO4(aq) gives ZnSO4(aq) plus Cu(s). '
        + 'It is a displacement reaction. '
        + 'The class predicts: copper put into zinc sulphate solution '
        + 'will do nothing, '
        + 'because copper is below zinc in the series. '
        + 'That prediction is what classification is for, '
        + 'and the brown solid and fading blue are the observation it '
        + 'explains.',
    },
  ],

  traps: [
    {
      mistake: 'Changing a small number inside a formula to balance.',
      why: 'The subscripts say what the substance is. '
        + 'H2O2 is a bleach, not water. '
        + 'Only the coefficients in front may change.',
    },
    {
      mistake: 'Balancing oxygen early.',
      why: 'It appears in most products, '
        + 'so every later change undoes it. '
        + 'Metals first, oxygen last.',
    },
    {
      mistake: 'Leaving out the states.',
      why: 'They often carry a mark, '
        + 'and the s beside a product is the whole observation '
        + 'in a precipitation.',
    },
    {
      mistake: 'Treating classification as labelling.',
      why: 'The class predicts the products, '
        + 'and with the reactivity series it predicts '
        + 'whether anything will happen at all.',
    },
  ],

  extension:
    'A balanced equation is also a recipe in quantities. '
    + 'That is what makes it useful outside an examination. '
    + '2 Mg plus O2 gives 2 MgO '
    + 'says that two atoms of magnesium need one molecule of oxygen. '
    + 'So 48 grams of magnesium need 32 grams of oxygen, '
    + 'and give 80 grams of magnesium oxide. '
    + 'Notice that the masses add up. '
    + 'That is the conservation of mass in figures. '
    + 'This is the link to the mole, '
    + 'which the Chemistry elective takes further. '
    + 'It is also why balancing is not a puzzle. '
    + 'It is the first step of every calculation a chemist does.',

  figure: {
    alt: 'A balance scale drawn with the reactants on the left pan and '
      + 'the products on the right, used to show that the atoms must be '
      + 'accounted for. Each pan holds counted groups of atoms drawn as '
      + 'small circles: on the left three carbon, eight hydrogen and ten '
      + 'oxygen; on the right the same three carbon, eight hydrogen and '
      + 'ten oxygen, arranged differently into three carbon dioxide '
      + 'molecules and four waters. The beam is level. Beneath the scale '
      + 'the balancing is shown in order as four steps: write the '
      + 'formulas and fix them, balance carbon, balance hydrogen, and '
      + 'count oxygen last, with the equation C3H8 plus 5 O2 gives 3 CO2 '
      + 'plus 4 H2O written out. To the side a crossed out example shows '
      + 'a learner changing H2O to H2O2, with a note that this does not '
      + 'balance the equation but replaces water with a bleach, so the '
      + 'equation now describes a different reaction.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* balance */
      + '<path d="M320 60v30" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M140 90h360" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M320 90v120" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M280 210h80" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M140 90v30" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M500 90v30" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M80 120h120l-14 36H94Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M440 120h120l-14 36h-92Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      /* atoms left */
      + '<g fill="currentColor">'
      + '<circle cx="96" cy="136" r="5"/><circle cx="110" cy="136" r="5"/><circle cx="124" cy="136" r="5"/>'
      + '</g>'
      + '<g fill="currentColor" fill-opacity="0.5">'
      + '<circle cx="142" cy="136" r="4"/><circle cx="152" cy="136" r="4"/><circle cx="162" cy="136" r="4"/>'
      + '<circle cx="172" cy="136" r="4"/><circle cx="182" cy="136" r="4"/><circle cx="142" cy="148" r="4"/>'
      + '<circle cx="152" cy="148" r="4"/><circle cx="162" cy="148" r="4"/>'
      + '</g>'
      + '<text x="76" y="176" font-size="10" fill="currentColor">3 C, 8 H, 10 O</text>'
      + '<text x="76" y="190" font-size="10" fill="#0f8a4d">C3H8 + 5 O2</text>'
      /* atoms right */
      + '<g fill="currentColor">'
      + '<circle cx="456" cy="136" r="5"/><circle cx="470" cy="136" r="5"/><circle cx="484" cy="136" r="5"/>'
      + '</g>'
      + '<g fill="currentColor" fill-opacity="0.5">'
      + '<circle cx="502" cy="136" r="4"/><circle cx="512" cy="136" r="4"/><circle cx="522" cy="136" r="4"/>'
      + '<circle cx="532" cy="136" r="4"/><circle cx="542" cy="136" r="4"/><circle cx="502" cy="148" r="4"/>'
      + '<circle cx="512" cy="148" r="4"/><circle cx="522" cy="148" r="4"/>'
      + '</g>'
      + '<text x="436" y="176" font-size="10" fill="currentColor">3 C, 8 H, 10 O</text>'
      + '<text x="436" y="190" font-size="10" fill="#0f8a4d">3 CO2 + 4 H2O</text>'
      + '<text x="236" y="54" font-size="11" fill="currentColor">the same atoms, rearranged</text>'
      /* steps */
      + '<text x="40" y="250" font-size="11" fill="#0f8a4d">the order that avoids backtracking</text>'
      + '<text x="40" y="272" font-size="11" fill="currentColor">1  write the formulas, and treat them as fixed</text>'
      + '<text x="40" y="290" font-size="11" fill="currentColor">2  balance the metals, then the other non metals</text>'
      + '<text x="40" y="308" font-size="11" fill="currentColor">3  balance hydrogen</text>'
      + '<text x="40" y="326" font-size="11" fill="currentColor">4  count oxygen last, because it appears in most products</text>'
      /* wrong example */
      + '<rect x="380" y="240" width="220" height="100" rx="6" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="392" y="262" font-size="11" fill="currentColor">H2 + O2 gives H2O2</text>'
      + '<path d="M390 258h130" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="392" y="284" font-size="10" fill="#0f8a4d">a subscript was changed, so the</text>'
      + '<text x="392" y="298" font-size="10" fill="#0f8a4d">product is now a bleach and not</text>'
      + '<text x="392" y="312" font-size="10" fill="#0f8a4d">water: a different reaction</text>'
      + '<text x="392" y="332" font-size="10" fill="currentColor">properly: 2 H2 + O2 gives 2 H2O</text>'
      + '<text x="40" y="364" font-size="11" fill="#0f8a4d">you may change the big numbers in front; you may never change the small numbers inside</text>'
      + '<text x="40" y="392" font-size="11" fill="currentColor">then count every element again and write the two totals beside the equation</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Each class of reaction, with what it does and what it predicts',
      columns: ['Class', 'What happens', 'An example', 'What the class predicts'],
      rows: [
        ['Combination', 'Two or more become one', '2 Mg + O2 gives 2 MgO', 'A single product, often an oxide'],
        ['Decomposition', 'One becomes several', 'CaCO3 gives CaO + CO2', 'A gas released, usually on heating'],
        ['Displacement', 'A reactive element takes another’s place', 'Zn + CuSO4 gives ZnSO4 + Cu', 'Whether anything happens at all, from the reactivity series'],
        ['Double decomposition', 'Two compounds swap partners', 'AgNO3 + NaCl gives AgCl + NaNO3', 'A precipitate, so a solid appears'],
        ['Neutralisation', 'Acid and base give salt and water', 'HCl + NaOH gives NaCl + H2O', 'A salt whose name you can give in advance'],
        ['Acid on a carbonate', 'Salt, water and carbon dioxide', 'HCl + CaCO3 gives CaCl2 + H2O + CO2', 'Fizzing, before you see it'],
      ],
      note: 'The last column is why the paper asks you to classify. '
        + 'A class is a prediction, not a label.',
    },
  ],

  questions: [
    {
      id: 'rx-1',
      ask: 'In 2 Mg plus O2 gives 2 MgO, '
        + 'how many oxygen atoms are on each side?',
      kind: 'numeric',
      options: [],
      answer: '2',
      teach: 'Two in the O2 on the left, '
        + 'and one in each of the two MgO on the right.',
      level: 3,
    },
    {
      id: 'rx-2',
      ask: 'To balance an equation you may change:',
      kind: 'choice',
      options: [
        'The big numbers in front of formulas',
        'The small numbers inside formulas',
        'Either',
      ],
      answer: 'The big numbers in front of formulas',
      teach: 'The subscripts say what the substance is. '
        + 'Changing one changes the reaction.',
      level: 4,
    },
    {
      id: 'rx-3',
      ask: 'Which element is balanced last?',
      kind: 'choice',
      options: ['Oxygen', 'The metal', 'Carbon'],
      answer: 'Oxygen',
      teach: 'It appears in most products, '
        + 'so balancing it early is undone by every later change.',
      level: 5,
    },
    {
      id: 'rx-4',
      ask: 'Zn plus CuSO4 gives ZnSO4 plus Cu is which class?',
      kind: 'choice',
      options: [
        'Displacement',
        'Combination',
        'Double decomposition',
      ],
      answer: 'Displacement',
      teach: 'Zinc is above copper in the reactivity series, '
        + 'so it takes copper’s place. The reverse does nothing.',
      level: 5,
    },
    {
      id: 'rx-5',
      ask: 'In C3H8 plus O2 gives CO2 plus H2O, '
        + 'what coefficient goes in front of O2?',
      kind: 'numeric',
      options: [],
      answer: '5',
      teach: 'Three CO2 give six oxygen and four H2O give four, '
        + 'which is ten, so five O2.',
      level: 6,
    },
  ],
})

/* ── acids, bases and salts ───────────────────────────────────────────── */

teach({
  topicId: 'acids-bases-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An acid releases hydrogen ions in water '
      + 'and a base accepts them. '
      + 'pH measures how many hydrogen ions are present: '
      + 'below 7 is acidic, 7 is neutral, above 7 is alkaline. '
      + 'The scale is in powers of ten, '
      + 'so pH 3 has ten times more hydrogen ions than pH 4. '
      + 'Neutralisation gives a salt and water. '
      + 'Name the salt from the acid and the metal.',
    method: [
      'Identify the acid, and the base or carbonate it meets.',
      'Write the salt from the metal and the acid’s own ending.',
      'For pH, remember each step is a factor of ten.',
    ],
  },

  idea:
    'An acid is a substance that releases hydrogen ions '
    + 'when dissolved in water. '
    + 'A base accepts hydrogen ions; '
    + 'a base that dissolves in water is called an alkali. '
    + 'pH is a measure of the concentration of hydrogen ions. '
    + 'The scale runs from about 0 to 14. '
    + 'Below 7 is acidic, 7 is neutral, '
    + 'and above 7 is alkaline. '
    + 'Each whole step is a factor of ten, '
    + 'so pH 3 is ten times more acidic than pH 4 '
    + 'and a hundred times more acidic than pH 5. '
    + 'Indicators change colour with pH: '
    + 'litmus is red in acid and blue in alkali, '
    + 'methyl orange is red in acid and yellow in alkali, '
    + 'and phenolphthalein is colourless in acid and pink in alkali. '
    + 'Universal indicator gives a range of colours '
    + 'and so gives an approximate pH. '
    + 'Neutralisation is the reaction of an acid with a base, '
    + 'giving a salt and water. '
    + 'An acid with a carbonate '
    + 'gives a salt, water and carbon dioxide. '
    + 'An acid with a reactive metal '
    + 'gives a salt and hydrogen. '
    + 'A salt is named from the metal and from the acid: '
    + 'hydrochloric acid gives chlorides, '
    + 'sulphuric acid gives sulphates, '
    + 'and nitric acid gives nitrates.',

  mechanism:
    'Three ideas carry this topic '
    + 'and the first one is the one learners are never told. '
    + 'The pH scale is logarithmic, '
    + 'which means each step is a multiplication by ten '
    + 'rather than an addition. '
    + 'This changes what a pH reading means. '
    + 'A learner thinks pH 4 and pH 6 are nearly the same, '
    + 'because 4 and 6 are close. '
    + 'They are not: '
    + 'pH 4 has a hundred times more hydrogen ions than pH 6. '
    + 'So a soil that moves from pH 6 to pH 4 '
    + 'has not changed slightly; '
    + 'it has become a hundred times more acidic, '
    + 'and that is why crops fail on it. '
    + 'The same arithmetic explains why a small spill '
    + 'of concentrated acid matters, '
    + 'and why diluting an acid tenfold '
    + 'moves the pH by only one unit. '
    + 'Say that in any answer about pH '
    + 'and it will be worth a mark '
    + 'that a numerical answer alone cannot get. '
    + 'The second is the mechanism of neutralisation itself, '
    + 'and it is a conservation argument. '
    + 'The acid has hydrogen ions. '
    + 'The alkali has hydroxide ions. '
    + 'They join to make water, '
    + 'which is neutral. '
    + 'Nothing is destroyed: '
    + 'the hydrogen ion has been taken up into a molecule '
    + 'where it is no longer free to act as an acid. '
    + 'This is why neutralisation always makes water, '
    + 'whatever acid and whatever alkali are used, '
    + 'and why the other product, the salt, '
    + 'is simply the metal from the alkali '
    + 'joined to the rest of the acid. '
    + 'Knowing that, you can name any salt in advance, '
    + 'which is the examinable skill: '
    + 'sulphuric acid and sodium hydroxide '
    + 'can only give sodium sulphate and water. '
    + 'The third is the practical preparation of a salt, '
    + 'where the examination wants a sequence. '
    + 'The sequence has a reason behind each step. '
    + 'Add the base or carbonate to the warm acid '
    + 'until a little excess remains undissolved, '
    + 'which tells you the acid is used up. '
    + 'Filter, to remove that excess solid. '
    + 'Evaporate the filtrate to the point of crystallisation, '
    + 'not to dryness, '
    + 'because boiling dry gives a powder '
    + 'and often decomposes the salt. '
    + 'Then leave it to cool so that crystals grow. '
    + 'Dry them between filter papers. '
    + 'Each step answers a question: '
    + 'how do I know the acid is finished, '
    + 'how do I remove what is left, '
    + 'and how do I get crystals rather than powder. '
    + 'A learner who can say why each step is there '
    + 'can reconstruct the method '
    + 'for a salt they have never prepared. '
    + 'Last, equipment, honestly. '
    + 'The pH reasoning and the naming of salts are paper work '
    + 'and carry most of the marks. '
    + 'A titration proper needs a burette, a pipette and a stand, '
    + 'and many schools have none. '
    + 'What a school can do with a dropper, '
    + 'two jars and a home made indicator '
    + 'from boiled red cabbage or hibiscus flowers '
    + 'is the whole chemistry of neutralisation: '
    + 'count the drops of base needed to turn the colour, '
    + 'then repeat with the acid diluted tenfold '
    + 'and watch the number of drops fall. '
    + 'That shows concentration and endpoint '
    + 'as clearly as any burette. '
    + 'What it cannot give is an accurate concentration, '
    + 'and the lesson says so rather than pretending.',

  recap:
    'You know that lime juice is sour and soap is slippery, '
    + 'and you have used litmus paper. '
    + 'This puts a number on how acidic something is, '
    + 'explains what the number means, '
    + 'and shows how an acid is cancelled.',

  method: [
    'Identify the acid and what it is reacting with.',
    'For a base, expect a salt and water.',
    'For a carbonate, expect a salt, water and carbon dioxide.',
    'For a reactive metal, expect a salt and hydrogen.',
    'Name the salt: the metal, then the ending from the acid.',
    'Write and balance the equation, with states.',
    'For pH, state that each step is a factor of ten.',
    'To prepare a salt: add solid to warm acid until a little excess remains.',
    'Filter, evaporate to the point of crystallisation, cool, and dry the crystals.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the salt formed when sulphuric acid '
        + 'reacts with sodium hydroxide, '
        + 'and give the other product.',
      steps: [
        'The metal is sodium.',
        'Sulphuric acid gives sulphates.',
        'An acid and a base always give water as well.',
      ],
      answer: 'Sodium sulphate, and water.',
    },
    {
      level: 4,
      ask: 'How many times more hydrogen ions are in a solution of '
        + 'pH 3 than in one of pH 6?',
      steps: [
        'Each whole step is a factor of ten.',
        'From 6 to 3 is three steps.',
        '10 times 10 times 10.',
      ],
      answer: 'A thousand times more. '
        + 'This is why pH 4 and pH 6 are not nearly the same, '
        + 'which is the point learners are usually never told.',
    },
    {
      level: 5,
      ask: 'Write the equation with states for hydrochloric acid '
        + 'on calcium carbonate, '
        + 'and say what you would observe.',
      steps: [
        'An acid on a carbonate gives a salt, water and carbon dioxide.',
        'The metal is calcium and the acid gives chlorides.',
        '2 HCl(aq) plus CaCO3(s) gives CaCl2(aq) plus H2O(l) plus CO2(g).',
      ],
      answer: '2 HCl(aq) plus CaCO3(s) gives CaCl2(aq) plus H2O(l) plus '
        + 'CO2(g). '
        + 'You would see fizzing as the carbon dioxide escapes, '
        + 'and the solid gradually disappearing. '
        + 'The gas turns limewater milky, which identifies it.',
    },
    {
      level: 6,
      ask: 'Describe how you would prepare crystals of copper sulphate '
        + 'from copper oxide and sulphuric acid, '
        + 'giving a reason for each step.',
      steps: [
        'Warm the dilute sulphuric acid.',
        'Add copper oxide a little at a time, stirring, '
          + 'until some remains undissolved: '
          + 'that excess shows the acid is used up.',
        'Filter, to remove the unreacted copper oxide.',
        'Evaporate the blue filtrate until it is concentrated, '
          + 'to the point of crystallisation and not to dryness.',
        'Leave it to cool slowly, so that crystals grow.',
        'Dry the crystals between filter papers.',
      ],
      answer: 'The excess solid is the signal that no acid is left, '
        + 'which matters because leftover acid would contaminate the '
        + 'crystals. '
        + 'Filtering removes that excess. '
        + 'Evaporating to dryness rather than to crystallisation '
        + 'would give a powder and may decompose the salt, '
        + 'so the solution is left to cool instead, '
        + 'and slow cooling gives larger crystals.',
    },
  ],

  traps: [
    {
      mistake: 'Treating the pH scale as evenly spaced.',
      why: 'Each step is a factor of ten, '
        + 'so pH 3 has a thousand times the hydrogen ions of pH 6.',
    },
    {
      mistake: 'Confusing a base with an alkali.',
      why: 'All alkalis are bases. '
        + 'A base that does not dissolve in water, '
        + 'such as copper oxide, is not an alkali.',
    },
    {
      mistake: 'Evaporating a salt solution to dryness.',
      why: 'That gives a powder and can decompose the salt. '
        + 'Evaporate to the point of crystallisation, then cool.',
    },
    {
      mistake: 'Forgetting the carbon dioxide when an acid meets a '
        + 'carbonate.',
      why: 'There are three products, not two, '
        + 'and the fizzing is the observation the question wants.',
    },
  ],

  extension:
    'Soil pH is the most important application of this topic in Ghana, '
    + 'because it decides what a nutrient does '
    + 'rather than whether it is present. '
    + 'Below about pH 5.5, '
    + 'phosphorus is locked up by iron and aluminium '
    + 'and the plant cannot reach it, '
    + 'however much fertiliser is applied. '
    + 'Above about pH 7.5, '
    + 'iron and zinc become unavailable '
    + 'and the young leaves go pale. '
    + 'So liming an acid soil with ground limestone '
    + 'does not feed the crop; '
    + 'it unlocks the food that was already there. '
    + 'That is a neutralisation reaction done on a field, '
    + 'and it is the clearest case '
    + 'of a chemistry lesson deciding a harvest.',

  figure: {
    alt: 'A pH scale drawn as a horizontal bar from zero to fourteen, '
      + 'with the acidic end at the left, neutral marked at seven in the '
      + 'middle, and the alkaline end at the right. Familiar substances '
      + 'are placed along it: battery acid near one, lime juice at two, '
      + 'vinegar at three, rain water at six, pure water at seven, blood '
      + 'at seven point four, soap at nine, and caustic soda at '
      + 'thirteen. Beneath the scale a second row of numbers shows the '
      + 'relative number of hydrogen ions at each pH, written as one, '
      + 'then a tenth, then a hundredth and so on, to show that each '
      + 'step is a factor of ten rather than an equal interval, with the '
      + 'gap between pH three and pH six marked as a thousandfold '
      + 'difference. To the right a small drawing shows the '
      + 'neutralisation itself: a hydrogen ion from the acid and a '
      + 'hydroxide ion from the alkali joining to make a molecule of '
      + 'water, with a note that nothing is destroyed, the hydrogen ion '
      + 'is simply taken up where it can no longer act as an acid.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* scale bar */
      + '<rect x="40" y="70" width="420" height="30" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M250 70v30" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M70 100v8"/><path d="M100 100v8"/><path d="M130 100v8"/><path d="M160 100v8"/>'
      + '<path d="M190 100v8"/><path d="M220 100v8"/><path d="M250 100v8"/><path d="M280 100v8"/>'
      + '<path d="M310 100v8"/><path d="M340 100v8"/><path d="M370 100v8"/><path d="M400 100v8"/>'
      + '<path d="M430 100v8"/>'
      + '</g>'
      + '<text x="36" y="124" font-size="10" fill="currentColor">0</text>'
      + '<text x="246" y="124" font-size="10" fill="#0f8a4d">7</text>'
      + '<text x="452" y="124" font-size="10" fill="currentColor">14</text>'
      + '<text x="40" y="62" font-size="11" fill="currentColor">acidic</text>'
      + '<text x="226" y="62" font-size="11" fill="#0f8a4d">neutral</text>'
      + '<text x="410" y="62" font-size="11" fill="currentColor">alkaline</text>'
      /* substances */
      + '<text x="56" y="146" font-size="9" fill="currentColor">battery acid</text>'
      + '<text x="96" y="160" font-size="9" fill="currentColor">lime juice</text>'
      + '<text x="126" y="146" font-size="9" fill="currentColor">vinegar</text>'
      + '<text x="200" y="160" font-size="9" fill="currentColor">rain water</text>'
      + '<text x="244" y="146" font-size="9" fill="#0f8a4d">pure water</text>'
      + '<text x="286" y="160" font-size="9" fill="currentColor">blood</text>'
      + '<text x="316" y="146" font-size="9" fill="currentColor">soap</text>'
      + '<text x="394" y="160" font-size="9" fill="currentColor">caustic soda</text>'
      /* ion count row */
      + '<path d="M40 190h420" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<text x="40" y="184" font-size="10" fill="#0f8a4d">how many hydrogen ions, relative to each other</text>'
      + '<text x="56" y="210" font-size="10" fill="currentColor">10000</text>'
      + '<text x="116" y="210" font-size="10" fill="currentColor">1000</text>'
      + '<text x="176" y="210" font-size="10" fill="currentColor">100</text>'
      + '<text x="222" y="210" font-size="10" fill="currentColor">10</text>'
      + '<text x="252" y="210" font-size="10" fill="#0f8a4d">1</text>'
      + '<text x="282" y="210" font-size="10" fill="currentColor">0.1</text>'
      + '<text x="330" y="210" font-size="10" fill="currentColor">0.01</text>'
      + '<path d="M130 230h120" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M136 224l-10 6 10 6Z" fill="#0f8a4d"/>'
      + '<path d="M244 224l10 6-10 6Z" fill="#0f8a4d"/>'
      + '<text x="120" y="250" font-size="10" fill="#0f8a4d">pH 3 to pH 6 is a thousandfold difference, not a small one</text>'
      /* neutralisation */
      + '<circle cx="520" cy="90" r="16" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="508" y="94" font-size="10" fill="currentColor">H+</text>'
      + '<circle cx="590" cy="90" r="18" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="576" y="94" font-size="10" fill="currentColor">OH-</text>'
      + '<path d="M555 120v26" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M549 138l6 10 6-10Z" fill="#0f8a4d"/>'
      + '<rect x="520" y="152" width="74" height="30" rx="6" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<text x="542" y="172" font-size="11" fill="#0f8a4d">H2O</text>'
      + '<text x="488" y="202" font-size="10" fill="currentColor">nothing is destroyed:</text>'
      + '<text x="488" y="216" font-size="10" fill="currentColor">the hydrogen ion is taken</text>'
      + '<text x="488" y="230" font-size="10" fill="currentColor">up where it cannot act</text>'
      + '<text x="488" y="244" font-size="10" fill="currentColor">as an acid</text>'
      /* salt preparation */
      + '<text x="40" y="288" font-size="11" fill="#0f8a4d">preparing a salt: each step answers a question</text>'
      + '<text x="40" y="310" font-size="10" fill="currentColor">add solid until a little remains undissolved  ->  how do I know the acid is finished?</text>'
      + '<text x="40" y="328" font-size="10" fill="currentColor">filter  ->  how do I remove what is left?</text>'
      + '<text x="40" y="346" font-size="10" fill="currentColor">evaporate to crystallisation, not to dryness  ->  how do I get crystals and not powder?</text>'
      + '<text x="40" y="364" font-size="10" fill="currentColor">cool slowly, then dry between papers  ->  how do I get them large and clean?</text>'
      + '<text x="40" y="390" font-size="11" fill="#0f8a4d">a learner who can give the reasons can reconstruct the method for a salt never prepared</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'What each acid gives, and how to name the salt before you make it',
      columns: ['Acid', 'Salts are called', 'With sodium hydroxide', 'With calcium carbonate'],
      rows: [
        ['Hydrochloric, HCl', 'Chlorides', 'Sodium chloride and water', 'Calcium chloride, water, carbon dioxide'],
        ['Sulphuric, H2SO4', 'Sulphates', 'Sodium sulphate and water', 'Calcium sulphate, water, carbon dioxide'],
        ['Nitric, HNO3', 'Nitrates', 'Sodium nitrate and water', 'Calcium nitrate, water, carbon dioxide'],
        ['Ethanoic, CH3COOH', 'Ethanoates', 'Sodium ethanoate and water', 'Calcium ethanoate, water, carbon dioxide'],
      ],
      note: 'The salt is always the metal plus the acid’s own ending, '
        + 'so every one of these can be named in advance. '
        + 'That is the examinable skill.',
    },
    {
      caption: 'The indicators and the colours to expect',
      columns: ['Indicator', 'In acid', 'In alkali', 'Use it for'],
      rows: [
        ['Litmus', 'Red', 'Blue', 'Telling acid from alkali, nothing more'],
        ['Methyl orange', 'Red', 'Yellow', 'A strong acid against a strong base'],
        ['Phenolphthalein', 'Colourless', 'Pink', 'A weak acid against a strong base'],
        ['Universal indicator', 'Red to yellow', 'Green to purple', 'An approximate pH value'],
        ['Red cabbage or hibiscus water', 'Pink to red', 'Green to yellow', 'A school with no bought indicator'],
      ],
      note: 'The last row costs nothing and works. '
        + 'It will show an endpoint, '
        + 'though not an accurate concentration.',
    },
  ],

  questions: [
    {
      id: 'ab-1',
      ask: 'A solution of pH 2 is:',
      kind: 'choice',
      options: ['Strongly acidic', 'Neutral', 'Alkaline'],
      answer: 'Strongly acidic',
      teach: 'Below 7 is acidic, and each step down is ten times more '
        + 'hydrogen ions.',
      level: 3,
    },
    {
      id: 'ab-2',
      ask: 'How many times more hydrogen ions are in pH 4 than in pH 6?',
      kind: 'numeric',
      options: [],
      answer: '100',
      teach: 'Two steps, each a factor of ten. '
        + 'The scale is not evenly spaced.',
      level: 5,
    },
    {
      id: 'ab-3',
      ask: 'Sulphuric acid and potassium hydroxide give:',
      kind: 'choice',
      options: [
        'Potassium sulphate and water',
        'Potassium chloride and water',
        'Potassium sulphate and hydrogen',
      ],
      answer: 'Potassium sulphate and water',
      teach: 'The metal plus the acid’s ending, and always water.',
      level: 4,
    },
    {
      id: 'ab-4',
      ask: 'When preparing a salt, you add the solid until a little '
        + 'remains undissolved because:',
      kind: 'choice',
      options: [
        'It shows the acid has all been used up',
        'It makes the crystals bigger',
        'It speeds up the reaction',
      ],
      answer: 'It shows the acid has all been used up',
      teach: 'Leftover acid would contaminate the crystals, '
        + 'and the excess solid is then filtered off.',
      level: 6,
    },
    {
      id: 'ab-5',
      ask: 'An acid on a carbonate gives how many products?',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'A salt, water and carbon dioxide. '
        + 'The fizzing is the observation the question wants.',
      level: 5,
    },
  ],
})

/* ── water and air ────────────────────────────────────────────────────── */

teach({
  topicId: 'water-air-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Dry air is about 78 per cent nitrogen '
      + 'and 21 per cent oxygen, '
      + 'with argon, carbon dioxide and water vapour making up the rest. '
      + 'Hard water contains dissolved calcium and magnesium salts, '
      + 'which waste soap and leave a scale. '
      + 'Temporary hardness is removed by boiling; '
      + 'permanent hardness is not. '
      + 'Water treatment is a sequence: '
      + 'screen, coagulate, settle, filter, then chlorinate.',
    method: [
      'Give the composition of air with its figures.',
      'Test hardness with soap solution and count the shakes to a lather.',
      'Give the treatment steps in order, with the job of each.',
    ],
  },

  idea:
    'Air is a mixture, not a compound, '
    + 'which is why its parts can be separated '
    + 'by physical means and why the proportions vary a little. '
    + 'Dry air is about 78 per cent nitrogen by volume, '
    + 'about 21 per cent oxygen, '
    + 'about 0.9 per cent argon, '
    + 'and about 0.04 per cent carbon dioxide, '
    + 'with traces of other gases. '
    + 'Water vapour varies from almost nothing '
    + 'to several per cent. '
    + 'Hard water contains dissolved salts of calcium and magnesium, '
    + 'picked up as the water passes through limestone or chalk. '
    + 'It wastes soap, '
    + 'because the soap reacts with those salts to make a scum '
    + 'before it can lather. '
    + 'Temporary hardness is caused by hydrogen carbonates '
    + 'and is removed by boiling, '
    + 'which drives off carbon dioxide '
    + 'and leaves the carbonate as a deposit, the scale. '
    + 'Permanent hardness is caused by sulphates '
    + 'and is not removed by boiling. '
    + 'Treatment of water for a town has a fixed sequence: '
    + 'screening to remove large objects, '
    + 'coagulation with alum to clump the fine particles, '
    + 'sedimentation to let the clumps settle, '
    + 'filtration through sand, '
    + 'and chlorination to kill the organisms.',

  mechanism:
    'Three mechanisms matter here, '
    + 'and each one answers a question '
    + 'that a learner can check against daily life. '
    + 'The first is why hard water wastes soap, '
    + 'because the answer explains the scum '
    + 'that everybody has seen in a bath or a bucket. '
    + 'Soap only lathers when it is free in the water. '
    + 'The calcium and magnesium ions react with it first, '
    + 'making an insoluble scum '
    + 'that floats and sticks to the sides. '
    + 'So the first portion of soap is consumed '
    + 'in removing the hardness, '
    + 'and only after all the calcium and magnesium are used up '
    + 'does the next soap begin to lather. '
    + 'That gives a test anybody can do: '
    + 'add soap solution drop by drop to a sample, '
    + 'shaking after each drop, '
    + 'and count the drops needed to get a lasting lather. '
    + 'Hard water needs many; '
    + 'rain water needs very few. '
    + 'Then boil the hard sample and test again: '
    + 'if the number of drops falls, '
    + 'the hardness was temporary; '
    + 'if it does not, it was permanent. '
    + 'That one experiment, '
    + 'needing nothing but soap, water and a bottle, '
    + 'answers the whole examinable part of the topic. '
    + 'The second is why boiling removes one kind of hardness '
    + 'and not the other, '
    + 'and it is a chemical reason worth giving. '
    + 'Temporary hardness is calcium hydrogen carbonate, '
    + 'which is soluble. '
    + 'Heating it drives off carbon dioxide '
    + 'and turns it into calcium carbonate, which is not soluble, '
    + 'so it falls out of solution as the scale '
    + 'you see in a kettle or on an electric element. '
    + 'The hardness has not been destroyed; '
    + 'it has been moved from the water onto the metal, '
    + 'which is why the kettle furs up as the water softens. '
    + 'Permanent hardness is calcium sulphate, '
    + 'and heating does nothing to it, '
    + 'because there is no carbon dioxide to drive off. '
    + 'Removing it needs washing soda, '
    + 'which precipitates the calcium as a carbonate, '
    + 'or an ion exchange resin. '
    + 'The third is the water treatment sequence, '
    + 'and the examinable point is that the order cannot be changed. '
    + 'Each step prepares the next. '
    + 'Screening comes first because a leaf or a fish '
    + 'would block everything downstream. '
    + 'Coagulation comes before sedimentation '
    + 'because the fine clay particles '
    + 'that make the water cloudy '
    + 'are too small to settle in any reasonable time on their own; '
    + 'alum makes them clump together into larger lumps '
    + 'that fall quickly. '
    + 'Sedimentation comes before filtration '
    + 'because sending cloudy water straight onto a sand bed '
    + 'would clog it in hours. '
    + 'Chlorination comes last, '
    + 'and this is the step whose order matters most: '
    + 'chlorinating first would waste most of the chlorine '
    + 'on reacting with the mud and organic matter, '
    + 'leaving too little to kill the bacteria, '
    + 'and it would also form unwanted compounds. '
    + 'So the chlorine goes in when the water is already clear. '
    + 'A learner who can give one reason '
    + 'for the position of each step '
    + 'has the full answer to the commonest question in this topic, '
    + 'which is not list the steps but explain why that order. '
    + 'One honest note on the household scale. '
    + 'In a Ghanaian home without piped treated water, '
    + 'the usual methods are boiling, '
    + 'which kills organisms but does not remove chemicals or sediment, '
    + 'and filtering through cloth or a ceramic filter, '
    + 'which removes sediment and some organisms '
    + 'but not dissolved chemicals, '
    + 'and chemical treatment with a sachet '
    + 'that does both coagulation and chlorination. '
    + 'Saying which method removes what '
    + 'is more useful than saying water should be purified, '
    + 'and it is what an examination question about household water '
    + 'is looking for.',

  recap:
    'You know that air is a mixture of gases '
    + 'and that water can be boiled to make it safe. '
    + 'This gives the proportions, '
    + 'explains why some water will not lather, '
    + 'and sets out how a town treats its supply.',

  method: [
    'For air, give the figures: about 78 per cent nitrogen, 21 oxygen.',
    'Name argon and carbon dioxide, and say that water vapour varies.',
    'To test hardness, add soap solution drop by drop and count to a lather.',
    'Boil a sample and test again; a fall means the hardness was temporary.',
    'Explain scum as soap used up by calcium and magnesium before it can lather.',
    'For treatment, give the five steps in order.',
    'For each step, give one reason why it is in that place.',
    'For a household, say which method removes which kind of impurity.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give the composition of dry air, with figures.',
      steps: [
        'Nitrogen is much the largest part.',
        'Oxygen is most of the rest.',
      ],
      answer: 'About 78 per cent nitrogen, '
        + 'about 21 per cent oxygen, '
        + 'about 0.9 per cent argon, '
        + 'and about 0.04 per cent carbon dioxide, '
        + 'with traces of other gases. '
        + 'Water vapour varies and is not counted in dry air.',
    },
    {
      level: 4,
      ask: 'Explain why hard water wastes soap, '
        + 'and describe a test for hardness using soap only.',
      steps: [
        'Soap lathers only when free in the water.',
        'Calcium and magnesium ions react with it first, making a scum.',
        'Only when they are used up does lather appear.',
        'So count the soap needed.',
      ],
      answer: 'The first soap added is consumed in making scum '
        + 'with the calcium and magnesium, '
        + 'so none is left to lather until they are gone. '
        + 'Test: add soap solution drop by drop, shaking after each, '
        + 'and count the drops to a lasting lather. '
        + 'Hard water needs many; rain water needs few.',
    },
    {
      level: 5,
      ask: 'Why does boiling remove temporary hardness and not permanent '
        + 'hardness, and where does the hardness go?',
      steps: [
        'Temporary hardness is calcium hydrogen carbonate, soluble.',
        'Heating drives off carbon dioxide '
          + 'and leaves calcium carbonate, which is insoluble.',
        'That falls out as scale on the kettle.',
        'Permanent hardness is calcium sulphate, '
          + 'with no carbon dioxide to drive off.',
      ],
      answer: 'Boiling converts the soluble hydrogen carbonate '
        + 'into insoluble carbonate, '
        + 'which leaves the water as scale, '
        + 'so the hardness is moved onto the metal rather than '
        + 'destroyed. '
        + 'That is why a kettle furs up as the water softens. '
        + 'Sulphates are unaffected by heat, '
        + 'so permanent hardness needs washing soda or ion exchange.',
    },
    {
      level: 6,
      ask: 'Give the five steps of town water treatment in order, '
        + 'and explain why chlorination must be last.',
      steps: [
        'Screening, to remove large objects that would block everything '
          + 'downstream.',
        'Coagulation with alum, to clump the fine clay that would never '
          + 'settle on its own.',
        'Sedimentation, to let the clumps fall.',
        'Filtration through sand, which would clog if the water were '
          + 'still cloudy.',
        'Chlorination, to kill the organisms.',
      ],
      answer: 'Screen, coagulate, settle, filter, chlorinate. '
        + 'Chlorination is last because chlorine added to dirty water '
        + 'is used up reacting with the mud and organic matter, '
        + 'leaving too little to kill the bacteria, '
        + 'and because it forms unwanted compounds with that matter. '
        + 'Chlorine added to already clear water '
        + 'does the job it was put in for. '
        + 'Every step prepares the next, '
        + 'which is why the order cannot be changed.',
    },
  ],

  traps: [
    {
      mistake: 'Calling air a compound.',
      why: 'It is a mixture, '
        + 'which is why the proportions vary '
        + 'and the parts can be separated physically.',
    },
    {
      mistake: 'Saying boiling softens all hard water.',
      why: 'It removes temporary hardness only. '
        + 'Sulphates are unaffected, because there is no carbon dioxide '
        + 'to drive off.',
    },
    {
      mistake: 'Listing the treatment steps without the reasons.',
      why: 'The question is usually why that order. '
        + 'Each step prepares the next.',
    },
    {
      mistake: 'Saying boiling makes water pure.',
      why: 'It kills organisms. '
        + 'It removes no sediment and no dissolved chemical, '
        + 'and it concentrates what is dissolved as the water goes off '
        + 'as steam.',
    },
  ],

  extension:
    'Hard water is not simply a nuisance. '
    + 'The calcium in it is useful in the diet, '
    + 'and areas with hard water '
    + 'have slightly lower rates of some heart conditions, '
    + 'which is a real finding and not a folk belief. '
    + 'Against that, '
    + 'hardness costs money in soap, '
    + 'and the scale it leaves in a boiler or an electric kettle '
    + 'is an insulator, '
    + 'so a furred element uses more electricity '
    + 'to heat the same water '
    + 'and eventually burns out. '
    + 'So the sensible treatment depends on the use: '
    + 'soften the water going to a boiler, '
    + 'and leave the drinking water alone.',

  figure: {
    alt: 'Two drawings. On the left a pie chart of dry air divided into '
      + 'its parts, with nitrogen taking about three quarters and '
      + 'labelled seventy eight per cent, oxygen taking about a fifth '
      + 'and labelled twenty one per cent, and a thin remaining slice '
      + 'drawn enlarged beside it to show argon at zero point nine per '
      + 'cent and carbon dioxide at zero point zero four per cent, with '
      + 'a note that water vapour varies and is not counted in dry air. '
      + 'On the right the water treatment works drawn as five stages '
      + 'left to right, each a labelled tank or bed, with the water '
      + 'flowing through them in order: a screen catching leaves and '
      + 'rubbish, a tank where alum is added and fine particles clump, a '
      + 'wide settling tank where the clumps fall to the bottom, a sand '
      + 'bed, and a final tank where chlorine is added. Beneath each '
      + 'stage is the reason it sits in that place, and the chlorination '
      + 'stage carries a note that chlorine added earlier would be used '
      + 'up on the mud and leave too little to kill bacteria.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* pie */
      + '<circle cx="110" cy="110" r="70" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M110 110L110 40A70 70 0 0 1 166 138Z" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/>'
      + '<path d="M110 110L166 138A70 70 0 0 1 110 180Z" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="2"/>'
      + '<text x="118" y="80" font-size="10" fill="currentColor">nitrogen</text>'
      + '<text x="118" y="94" font-size="10" fill="#0f8a4d">78%</text>'
      + '<text x="118" y="160" font-size="10" fill="currentColor">oxygen</text>'
      + '<text x="118" y="174" font-size="10" fill="#0f8a4d">21%</text>'
      + '<path d="M110 110L110 180A70 70 0 0 1 110 40" stroke="currentColor" stroke-width="2" fill="none"/>'
      /* enlarged sliver */
      + '<path d="M40 212h150v30H40Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M40 212v30" stroke="#0f8a4d" stroke-width="4" fill="none"/>'
      + '<text x="40" y="206" font-size="10" fill="#0f8a4d">the last 1%, enlarged</text>'
      + '<text x="46" y="232" font-size="9" fill="currentColor">argon 0.9%</text>'
      + '<text x="120" y="232" font-size="9" fill="currentColor">CO2 0.04%</text>'
      + '<text x="40" y="262" font-size="10" fill="currentColor">water vapour varies and is</text>'
      + '<text x="40" y="276" font-size="10" fill="currentColor">not counted in dry air</text>'
      /* treatment */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<rect x="250" y="60" width="56" height="54"/>'
      + '<rect x="316" y="60" width="56" height="54"/>'
      + '<rect x="382" y="60" width="86" height="54"/>'
      + '<rect x="478" y="60" width="56" height="54"/>'
      + '<rect x="544" y="60" width="56" height="54"/>'
      + '</g>'
      + '<g stroke="#0f8a4d" stroke-width="2" fill="none">'
      + '<path d="M306 86h10"/><path d="M372 86h10"/><path d="M468 86h10"/><path d="M534 86h10"/>'
      + '</g>'
      /* screen bars */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M262 60v54"/><path d="M276 60v54"/><path d="M290 60v54"/>'
      + '</g>'
      /* settling */
      + '<path d="M382 104h86" stroke="currentColor" stroke-width="3" fill="none"/>'
      /* sand bed */
      + '<g fill="currentColor" fill-opacity="0.4">'
      + '<rect x="478" y="92" width="56" height="22"/>'
      + '</g>'
      + '<text x="248" y="132" font-size="9" fill="currentColor">screen</text>'
      + '<text x="314" y="132" font-size="9" fill="currentColor">alum added</text>'
      + '<text x="396" y="132" font-size="9" fill="currentColor">settling</text>'
      + '<text x="484" y="132" font-size="9" fill="currentColor">sand bed</text>'
      + '<text x="540" y="132" font-size="9" fill="currentColor">chlorine</text>'
      + '<text x="248" y="156" font-size="9" fill="#0f8a4d">a leaf would block</text>'
      + '<text x="248" y="168" font-size="9" fill="#0f8a4d">everything after it</text>'
      + '<text x="314" y="180" font-size="9" fill="#0f8a4d">fine clay clumps, so</text>'
      + '<text x="314" y="192" font-size="9" fill="#0f8a4d">that it can settle at all</text>'
      + '<text x="396" y="156" font-size="9" fill="#0f8a4d">clumps fall, so the</text>'
      + '<text x="396" y="168" font-size="9" fill="#0f8a4d">sand will not clog</text>'
      + '<text x="478" y="204" font-size="9" fill="#0f8a4d">the last of the fine</text>'
      + '<text x="478" y="216" font-size="9" fill="#0f8a4d">matter is trapped</text>'
      + '<text x="478" y="240" font-size="9" fill="#0f8a4d">chlorine added earlier</text>'
      + '<text x="478" y="252" font-size="9" fill="#0f8a4d">is used up on the mud,</text>'
      + '<text x="478" y="264" font-size="9" fill="#0f8a4d">leaving too little to</text>'
      + '<text x="478" y="276" font-size="9" fill="#0f8a4d">kill the bacteria</text>'
      + '<text x="40" y="314" font-size="11" fill="currentColor">every stage prepares the next, which is why the order cannot be changed</text>'
      + '<text x="40" y="340" font-size="11" fill="#0f8a4d">hardness test with soap alone: count the drops to a lasting lather, boil, and count again</text>'
      + '<text x="40" y="366" font-size="11" fill="currentColor">a fall in the count means the hardness was temporary; no change means it was permanent</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The two kinds of hardness, and what removes each',
      columns: ['', 'Temporary hardness', 'Permanent hardness'],
      rows: [
        ['Caused by', 'Calcium and magnesium hydrogen carbonates', 'Calcium and magnesium sulphates'],
        ['Removed by boiling', 'Yes', 'No'],
        ['Why', 'Heating drives off carbon dioxide, leaving insoluble carbonate', 'There is no carbon dioxide to drive off'],
        ['Where the hardness goes', 'Onto the kettle, as scale', 'Nowhere; it stays dissolved'],
        ['Other treatment', 'Washing soda, or ion exchange', 'Washing soda, or ion exchange'],
      ],
      note: 'The fourth row is the point. '
        + 'Boiling does not destroy the hardness; '
        + 'it moves it from the water onto the metal, '
        + 'which is why a kettle furs up as the water softens.',
    },
    {
      caption: 'Household water methods, and what each one does and does not remove',
      columns: ['Method', 'Kills organisms', 'Removes sediment', 'Removes dissolved chemicals'],
      rows: [
        ['Boiling', 'Yes', 'No', 'No; it concentrates them as steam leaves'],
        ['Cloth filtering', 'Some, with the larger particles', 'Yes, the coarse part', 'No'],
        ['Ceramic filter', 'Most', 'Yes', 'Only a little'],
        ['Treatment sachet, alum with chlorine', 'Yes', 'Yes, by coagulation', 'Some'],
        ['Letting it stand', 'No', 'The heavy part only', 'No'],
      ],
      note: 'Saying which method removes what '
        + 'is more useful than saying water should be purified, '
        + 'and it is what the question is asking for.',
    },
  ],

  questions: [
    {
      id: 'wa-1',
      ask: 'What percentage of dry air is nitrogen, to the nearest whole '
        + 'number?',
      kind: 'numeric',
      options: [],
      answer: '78',
      teach: 'With about 21 per cent oxygen and about 1 per cent '
        + 'everything else.',
      level: 3,
    },
    {
      id: 'wa-2',
      ask: 'Hard water wastes soap because:',
      kind: 'choice',
      options: [
        'Calcium and magnesium react with the soap first, making scum',
        'The water is too warm',
        'Soap does not dissolve in it',
      ],
      answer: 'Calcium and magnesium react with the soap first, making scum',
      teach: 'Only when they are used up does lather begin, '
        + 'which is why counting the drops to a lather is a test.',
      level: 4,
    },
    {
      id: 'wa-3',
      ask: 'Boiling removes:',
      kind: 'choice',
      options: [
        'Temporary hardness only',
        'All hardness',
        'Permanent hardness only',
      ],
      answer: 'Temporary hardness only',
      teach: 'It turns soluble hydrogen carbonate into insoluble '
        + 'carbonate, which is the scale on the kettle.',
      level: 5,
    },
    {
      id: 'wa-4',
      ask: 'Chlorination comes last in water treatment because:',
      kind: 'choice',
      options: [
        'Chlorine in dirty water is used up on the mud',
        'It is the cheapest step',
        'The sand would absorb it',
      ],
      answer: 'Chlorine in dirty water is used up on the mud',
      teach: 'Too little would be left to kill the bacteria, '
        + 'and unwanted compounds would form.',
      level: 6,
    },
    {
      id: 'wa-5',
      ask: 'Alum is added in water treatment to:',
      kind: 'choice',
      options: [
        'Make fine particles clump so they can settle',
        'Kill bacteria',
        'Soften the water',
      ],
      answer: 'Make fine particles clump so they can settle',
      teach: 'Fine clay would never settle in a reasonable time on its '
        + 'own, and cloudy water would clog the sand bed.',
      level: 5,
    },
  ],
})

/* ── carbon, nitrogen and water cycles ───────────────────────────────── */

teach({
  topicId: 'nutrient-cycles-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A cycle moves the same atoms round '
      + 'between the air, the living and the soil, '
      + 'and nothing is lost. '
      + 'Carbon enters life by photosynthesis '
      + 'and returns by respiration, decay and burning. '
      + 'Nitrogen enters by fixation, '
      + 'passes through plants and animals, '
      + 'and returns by decay and denitrification. '
      + 'Water evaporates, condenses and falls. '
      + 'Human activity interrupts a cycle by adding to one side faster '
      + 'than the other side can take it away.',
    method: [
      'Draw the cycle as boxes for stores and arrows for processes.',
      'Name the process on every arrow.',
      'Find the arrow human activity has made larger, and say what builds up.',
    ],
  },

  idea:
    'A nutrient cycle is the movement of the same atoms '
    + 'between stores: the air, the soil, water, '
    + 'and the bodies of living things. '
    + 'In the carbon cycle, '
    + 'carbon dioxide is taken from the air by photosynthesis '
    + 'and built into sugars. '
    + 'It passes along food chains. '
    + 'It returns to the air by respiration in plants and animals, '
    + 'by decay when they die, '
    + 'and by combustion when wood or fuel is burned. '
    + 'Some is locked away for long ages '
    + 'as coal, oil, gas and limestone. '
    + 'In the nitrogen cycle, '
    + 'nitrogen gas is unusable by most living things '
    + 'and must first be fixed into nitrates, '
    + 'by bacteria in the soil and in the root nodules of legumes, '
    + 'and by lightning. '
    + 'Plants take up nitrates and build proteins. '
    + 'Animals eat the plants. '
    + 'Decay returns nitrogen to the soil as ammonia, '
    + 'which nitrifying bacteria turn back into nitrates. '
    + 'Denitrifying bacteria return some to the air as nitrogen gas. '
    + 'In the water cycle, '
    + 'water evaporates from the sea and from plants, '
    + 'which is transpiration, '
    + 'condenses into cloud, '
    + 'falls as rain, '
    + 'and runs back or soaks in as groundwater.',

  mechanism:
    'The idea that makes all three cycles one idea '
    + 'is that a cycle is a set of books that balance. '
    + 'Each store has arrows in and arrows out. '
    + 'If the arrows in and out are equal, '
    + 'the store stays the same size, '
    + 'however fast the atoms are moving. '
    + 'So a steady cycle is not a still one. '
    + 'It is one where the rates match. '
    + 'And that gives the single question '
    + 'to ask about any human interruption: '
    + 'which arrow has been made larger, '
    + 'and what is therefore building up in the store at the other end. '
    + 'Apply it to carbon. '
    + 'For most of history, '
    + 'respiration and decay returned carbon to the air '
    + 'at about the rate photosynthesis removed it, '
    + 'and the amount in the air stayed nearly constant. '
    + 'Burning coal, oil and gas adds a new arrow into the air '
    + 'from a store that was locked away for millions of years. '
    + 'Clearing forest makes the photosynthesis arrow smaller. '
    + 'So the air store grows, '
    + 'and it grows whether or not anybody intends it, '
    + 'because the books no longer balance. '
    + 'That is the whole mechanism of the rise in carbon dioxide, '
    + 'and it can be stated in two sentences '
    + 'without any argument about politics. '
    + 'Apply it to nitrogen. '
    + 'Fertiliser factories fix nitrogen from the air '
    + 'on an enormous scale, '
    + 'and that nitrogen goes onto fields. '
    + 'More is applied than crops can take up, '
    + 'so the surplus washes into streams. '
    + 'There it does exactly what it does on a field: '
    + 'it feeds plant growth, '
    + 'in this case algae, '
    + 'which multiply, cover the water, '
    + 'then die and decay. '
    + 'The decay uses the dissolved oxygen, '
    + 'and the fish suffocate. '
    + 'That process is called eutrophication, '
    + 'and it is a cycle question rather than a pollution question: '
    + 'the nitrogen was not poisonous, '
    + 'it was simply put into the wrong store. '
    + 'Apply it to water. '
    + 'The total water does not change, '
    + 'but where it is and how fast it moves does. '
    + 'Clear the trees from a catchment '
    + 'and the transpiration arrow shrinks '
    + 'while the run off arrow grows, '
    + 'so the same rain arrives in the river faster, '
    + 'in a flood instead of a flow, '
    + 'and less soaks down to the groundwater '
    + 'that the dry season depends on. '
    + 'This is why deforestation in a headwater '
    + 'causes both flooding in the wet season '
    + 'and dry wells in the dry one, '
    + 'which sounds contradictory '
    + 'until you see that only the arrows moved. '
    + 'The second mechanism, '
    + 'and it is the one most often asked about in Ghana, '
    + 'is nitrogen fixation by legumes. '
    + 'Bacteria living in nodules on the roots of cowpea, '
    + 'groundnut and soya bean '
    + 'take nitrogen gas from the air in the soil '
    + 'and turn it into a form the plant can use. '
    + 'The plant feeds the bacteria with sugars in exchange. '
    + 'When the residues are ploughed in, '
    + 'some of that nitrogen stays in the soil '
    + 'for the next crop. '
    + 'So maize after groundnut yields better than maize after maize, '
    + 'and the reason is a bacterium, not a tradition. '
    + 'This is the whole argument for rotation '
    + 'on a farm that cannot buy fertiliser, '
    + 'and it is a cycle lesson with a yield attached to it. '
    + 'Last, what to draw. '
    + 'In an examination, '
    + 'draw the cycle as boxes for stores and arrows for processes, '
    + 'and name the process on every arrow. '
    + 'An unlabelled arrow earns nothing. '
    + 'The names are the marks: '
    + 'photosynthesis, respiration, decay, combustion, '
    + 'fixation, nitrification, denitrification, '
    + 'evaporation, transpiration, condensation, precipitation.',

  recap:
    'You have met photosynthesis and respiration '
    + 'as opposite processes, '
    + 'and you know that rain comes from evaporated water. '
    + 'This joins them into closed cycles, '
    + 'and asks what happens when one arrow is made larger '
    + 'than the others.',

  method: [
    'Draw a box for each store: the air, the living, the soil, the water.',
    'Draw an arrow for each process that moves the element.',
    'Write the name of the process on every arrow.',
    'Check that each store has at least one arrow in and one out.',
    'To find a human interruption, ask which arrow has grown or shrunk.',
    'Name the store that therefore grows, and say what follows from that.',
    'For nitrogen, name the bacteria at each step.',
    'For water, remember that the total does not change; only the rates do.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the process that takes carbon dioxide out of the air '
        + 'and the three that put it back.',
      steps: [
        'Only one process removes it in quantity.',
        'Three return it.',
      ],
      answer: 'Photosynthesis removes it. '
        + 'Respiration, decay and combustion return it.',
    },
    {
      level: 4,
      ask: 'Why can most plants not use the nitrogen in the air, '
        + 'and what makes it available?',
      steps: [
        'Nitrogen gas is very unreactive.',
        'It must be turned into nitrates first.',
        'That is fixation.',
      ],
      answer: 'Nitrogen gas is too unreactive for a plant to use, '
        + 'so it must first be fixed into nitrates. '
        + 'That is done by bacteria in the soil, '
        + 'by bacteria in the root nodules of legumes, '
        + 'and by lightning.',
    },
    {
      level: 5,
      ask: 'Explain why clearing the forest from a river’s headwaters '
        + 'causes flooding in the wet season '
        + 'and dry wells in the dry season.',
      steps: [
        'The total water does not change; the arrows do.',
        'Without trees, less water is taken up and transpired.',
        'Run off increases, so the rain reaches the river faster.',
        'Less soaks down into the groundwater.',
      ],
      answer: 'The rain that fell is the same. '
        + 'With the trees gone, '
        + 'the run off arrow grows and the infiltration arrow shrinks, '
        + 'so the water arrives in the river as a flood '
        + 'instead of spread over weeks, '
        + 'and the groundwater store that feeds wells in the dry season '
        + 'is not refilled. '
        + 'The two effects sound opposite '
        + 'and are the same change in the cycle.',
    },
    {
      level: 6,
      ask: 'A stream below a heavily fertilised farm '
        + 'turns green and the fish die. '
        + 'Explain the sequence, name it, '
        + 'and say what it shows about cycles.',
      steps: [
        'Nitrates not taken up by the crop wash into the stream.',
        'In the water they feed algae, which multiply.',
        'The algae cover the surface, then die.',
        'Decay bacteria multiply on the dead algae '
          + 'and use the dissolved oxygen.',
        'The oxygen falls and the fish suffocate.',
      ],
      answer: 'This is eutrophication. '
        + 'The nitrate was not poisonous; '
        + 'it did in the stream exactly what it does on a field, '
        + 'which is to feed plant growth. '
        + 'The fish died of a shortage of oxygen '
        + 'caused by the decay of that growth. '
        + 'It shows that a cycle problem '
        + 'is usually a matter of the wrong store '
        + 'rather than of a harmful substance.',
    },
  ],

  traps: [
    {
      mistake: 'Drawing a cycle with unlabelled arrows.',
      why: 'The names of the processes are the marks. '
        + 'An arrow with no name earns nothing.',
    },
    {
      mistake: 'Saying plants take nitrogen from the air.',
      why: 'Only after it has been fixed into nitrates. '
        + 'Legumes do it through bacteria in their nodules, '
        + 'not directly.',
    },
    {
      mistake: 'Treating a steady cycle as one where nothing moves.',
      why: 'It is one where the rates in and out match. '
        + 'An interruption is a change of rate, not of substance.',
    },
    {
      mistake: 'Calling eutrophication poisoning.',
      why: 'The nitrate fed growth, '
        + 'and the decay of that growth used the oxygen. '
        + 'The fish suffocated.',
    },
  ],

  extension:
    'The carbon locked in coal, oil and gas '
    + 'came out of the air by photosynthesis '
    + 'hundreds of millions of years ago, '
    + 'and was buried before it could decay. '
    + 'So burning fossil fuel '
    + 'is returning to the air, in two centuries, '
    + 'carbon that the cycle took out over geological time. '
    + 'That is why the comparison with natural emissions '
    + 'misses the point. '
    + 'A volcano and a forest fire '
    + 'return carbon that was recently in the air. '
    + 'A coal fire returns carbon from a store '
    + 'that the rest of the cycle has no way of putting back quickly. '
    + 'Stating it that way '
    + 'is a cycle argument and not a political one.',

  figure: {
    alt: 'The carbon cycle drawn as four boxes joined by named arrows. A '
      + 'box at the top holds carbon dioxide in the air. An arrow down '
      + 'from it to a box of green plants is labelled photosynthesis. An '
      + 'arrow from the plants across to a box of animals is labelled '
      + 'feeding. Arrows return from both the plants and the animals to '
      + 'the air, labelled respiration. A fourth box at the bottom holds '
      + 'dead matter and soil, fed by arrows from the plants and animals '
      + 'labelled death, and returning an arrow to the air labelled '
      + 'decay. A fifth box to the side, drawn with a thicker outline, '
      + 'holds coal, oil and gas, with a thin arrow into it labelled '
      + 'burial over geological time and a thick arrow out of it to the '
      + 'air labelled combustion. The thick arrow is marked as the one '
      + 'human activity has made large, with a note that the store in '
      + 'the air therefore grows because the books no longer balance.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* air box */
      + '<rect x="200" y="30" width="200" height="44" rx="6" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="222" y="58" font-size="12" fill="currentColor">carbon dioxide in the air</text>'
      /* plants */
      + '<rect x="90" y="150" width="140" height="44" rx="6" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="112" y="178" font-size="12" fill="currentColor">green plants</text>'
      /* animals */
      + '<rect x="300" y="150" width="130" height="44" rx="6" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="330" y="178" font-size="12" fill="currentColor">animals</text>'
      /* soil */
      + '<rect x="160" y="280" width="220" height="44" rx="6" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="180" y="308" font-size="12" fill="currentColor">dead matter and soil</text>'
      /* fossil */
      + '<rect x="470" y="200" width="140" height="56" rx="6" stroke="currentColor" stroke-width="4" fill="none"/>'
      + '<text x="490" y="224" font-size="11" fill="currentColor">coal, oil and gas</text>'
      + '<text x="486" y="242" font-size="10" fill="currentColor">a store locked away</text>'
      /* arrows */
      + '<path d="M230 74L160 146" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M158 136l-4 14 14-4Z" fill="#0f8a4d"/>'
      + '<text x="100" y="116" font-size="10" fill="#0f8a4d">photosynthesis</text>'
      + '<path d="M230 172h66" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M288 166l10 6-10 6Z" fill="currentColor"/>'
      + '<text x="240" y="164" font-size="10" fill="currentColor">feeding</text>'
      + '<path d="M180 150L250 78" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M246 88l4-14-14 4Z" fill="#0f8a4d"/>'
      + '<text x="188" y="134" font-size="10" fill="#0f8a4d">respiration</text>'
      + '<path d="M360 150L350 78" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M344 88l6-12 8 12Z" fill="#0f8a4d"/>'
      + '<text x="364" y="120" font-size="10" fill="#0f8a4d">respiration</text>'
      + '<path d="M160 194L220 274" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M212 266l10 12-14 2Z" fill="currentColor"/>'
      + '<text x="134" y="244" font-size="10" fill="currentColor">death</text>'
      + '<path d="M360 194L320 274" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M318 262l4 14 10-8Z" fill="currentColor"/>'
      + '<text x="348" y="244" font-size="10" fill="currentColor">death</text>'
      + '<path d="M270 280V80" stroke="#0f8a4d" stroke-width="2" stroke-dasharray="6 4" fill="none"/>'
      + '<path d="M264 90l6-12 6 12Z" fill="#0f8a4d"/>'
      + '<text x="276" y="240" font-size="10" fill="#0f8a4d">decay</text>'
      /* fossil arrows */
      + '<path d="M390 300C460 300 500 282 520 262" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<path d="M516 272l8-10-12-2Z" fill="currentColor"/>'
      + '<text x="396" y="320" font-size="9" fill="currentColor">burial, over geological time: a thin arrow</text>'
      + '<path d="M500 200C470 150 440 100 404 62" stroke="#0f8a4d" stroke-width="5" fill="none"/>'
      + '<path d="M398 76l6-16 10 10Z" fill="#0f8a4d"/>'
      + '<text x="430" y="130" font-size="11" fill="#0f8a4d">combustion:</text>'
      + '<text x="430" y="144" font-size="11" fill="#0f8a4d">a thick arrow,</text>'
      + '<text x="430" y="158" font-size="11" fill="#0f8a4d">made large by us</text>'
      + '<text x="30" y="364" font-size="11" fill="currentColor">a steady cycle is not a still one: it is one where the rates in and out match</text>'
      + '<text x="30" y="388" font-size="11" fill="#0f8a4d">so ask which arrow was made larger, and the store at the other end is what builds up</text>'
      + '<text x="30" y="410" font-size="11" fill="currentColor">name the process on every arrow: an unlabelled arrow earns nothing</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The three cycles, with the process on each arrow and where we interrupt them',
      columns: ['Cycle', 'Into the living', 'Back out again', 'The arrow we changed', 'What builds up'],
      rows: [
        ['Carbon', 'Photosynthesis', 'Respiration, decay, combustion', 'Combustion of fossil fuel, and less forest', 'Carbon dioxide in the air'],
        ['Nitrogen', 'Fixation, then uptake of nitrates', 'Decay, then denitrification', 'Industrial fixation for fertiliser', 'Nitrate in streams, causing eutrophication'],
        ['Water', 'Uptake by roots', 'Transpiration, evaporation', 'Run off, after clearing trees', 'Flood water in the wet season, and empty wells in the dry'],
      ],
      note: 'The fourth and fifth columns are the examinable part. '
        + 'The question is rarely draw the cycle; '
        + 'it is say where human activity interrupts it.',
    },
    {
      caption: 'The bacteria of the nitrogen cycle, and what each one does',
      columns: ['Bacteria', 'What they do', 'Where they live', 'Why it matters'],
      rows: [
        ['Nitrogen fixing', 'Turn nitrogen gas into usable compounds', 'Soil, and nodules on legume roots', 'Maize after groundnut yields better'],
        ['Decay bacteria', 'Break dead matter into ammonia', 'Soil and compost', 'Returns nitrogen that would otherwise be lost'],
        ['Nitrifying', 'Turn ammonia into nitrates', 'Soil, with air present', 'Nitrate is the form a root can take up'],
        ['Denitrifying', 'Turn nitrates back into nitrogen gas', 'Waterlogged soil, with no air', 'Why a flooded field loses its fertiliser'],
      ],
      note: 'The last row explains a practical fact: '
        + 'nitrogen fertiliser applied to a waterlogged field '
        + 'is partly lost to the air.',
    },
  ],

  questions: [
    {
      id: 'nc-1',
      ask: 'Which process takes carbon dioxide out of the air?',
      kind: 'choice',
      options: ['Photosynthesis', 'Respiration', 'Combustion'],
      answer: 'Photosynthesis',
      teach: 'The other two put it back, along with decay.',
      level: 3,
    },
    {
      id: 'nc-2',
      ask: 'Nitrogen gas must first be turned into nitrates. '
        + 'This is called:',
      kind: 'choice',
      options: ['Fixation', 'Nitrification', 'Denitrification'],
      answer: 'Fixation',
      teach: 'Nitrification turns ammonia into nitrates; '
        + 'denitrification returns nitrogen to the air.',
      level: 4,
    },
    {
      id: 'nc-3',
      ask: 'Maize grows better after groundnut because:',
      kind: 'choice',
      options: [
        'Bacteria in the groundnut nodules fixed nitrogen into the soil',
        'Groundnut loosens the soil',
        'Groundnut uses no nitrogen',
      ],
      answer: 'Bacteria in the groundnut nodules fixed nitrogen into the soil',
      teach: 'Some of it stays when the residues are ploughed in. '
        + 'That is the argument for rotation.',
      level: 5,
    },
    {
      id: 'nc-4',
      ask: 'Fish die in a stream greened by fertiliser run off because:',
      kind: 'choice',
      options: [
        'Decay of the algae uses up the dissolved oxygen',
        'The nitrate poisons them',
        'The water becomes too warm',
      ],
      answer: 'Decay of the algae uses up the dissolved oxygen',
      teach: 'This is eutrophication. '
        + 'The nitrate was not poisonous; it fed growth.',
      level: 6,
    },
    {
      id: 'nc-5',
      ask: 'In a cycle, a store stays the same size when:',
      kind: 'choice',
      options: [
        'The rates in and out are equal',
        'Nothing is moving',
        'The store is full',
      ],
      answer: 'The rates in and out are equal',
      teach: 'So an interruption is a change of rate. '
        + 'Ask which arrow grew.',
      level: 5,
    },
  ],
})

/* ── reproduction and growth ─────────────────────────────────────────── */

teach({
  topicId: 'reproduction-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Asexual reproduction needs one parent '
      + 'and gives offspring identical to it. '
      + 'Sexual reproduction needs two sex cells, '
      + 'which join at fertilisation, '
      + 'and gives offspring that differ from both parents. '
      + 'That difference is the whole advantage, '
      + 'because a varied population can survive a change '
      + 'that would kill an identical one. '
      + 'In a flower the pollen nucleus joins the egg in the ovule; '
      + 'in humans the sperm joins the egg in the oviduct.',
    method: [
      'Count the parents: one means asexual, two means sexual.',
      'Name the two sex cells and the place they join.',
      'Say what happens to the fertilised cell afterwards.',
    ],
  },

  idea:
    'Reproduction makes new individuals. '
    + 'Asexual reproduction uses one parent only. '
    + 'The offspring are genetically identical to the parent, '
    + 'and it happens by binary fission in bacteria, '
    + 'by budding in yeast, '
    + 'by spores in fungi and ferns, '
    + 'and by vegetative propagation in plants, '
    + 'such as cassava stem cuttings, '
    + 'yam setts, '
    + 'plantain suckers and sweet potato vines. '
    + 'Sexual reproduction uses two sex cells, called gametes. '
    + 'Each carries half the usual number of chromosomes. '
    + 'Fertilisation is the joining of the two nuclei '
    + 'to make a zygote with the full number. '
    + 'In a flowering plant, '
    + 'the anther makes pollen and the ovary holds ovules. '
    + 'Pollination carries pollen to the stigma; '
    + 'then a pollen tube grows down the style '
    + 'and the male nucleus reaches the egg in the ovule. '
    + 'The fertilised ovule becomes a seed '
    + 'and the ovary becomes the fruit. '
    + 'In humans, '
    + 'the testes make sperm and the ovaries release an egg each month. '
    + 'Fertilisation happens in the oviduct, '
    + 'and the zygote divides as it travels to the uterus, '
    + 'where it implants in the lining. '
    + 'Growth is an increase in size and in the number of cells; '
    + 'development is the change in form that goes with it.',

  mechanism:
    'The question in this topic is almost always a comparison, '
    + 'and it is won by one idea rather than by a long list. '
    + 'The idea is that identical offspring '
    + 'are an advantage in a steady world '
    + 'and a danger in a changing one. '
    + 'Asexual reproduction is quick, '
    + 'needs no partner, '
    + 'and copies a parent that was evidently able to survive there. '
    + 'So a farmer planting cassava cuttings '
    + 'gets a field of plants with exactly the qualities '
    + 'of the plant he chose, '
    + 'which is why cassava and plantain are grown that way '
    + 'and not from seed. '
    + 'But every plant in that field '
    + 'has the same resistance and the same weakness. '
    + 'So a disease that can kill one '
    + 'can kill all of them, '
    + 'and that has happened: '
    + 'cassava mosaic disease spreads through a field of identical '
    + 'plants '
    + 'with nothing to stop it. '
    + 'Sexual reproduction is slower and needs a partner, '
    + 'and it produces offspring '
    + 'none of which is quite like either parent. '
    + 'Most of that variation is useless. '
    + 'Some of it is the only reason the population survives '
    + 'a new disease, a drier season or a new pest. '
    + 'So when a question asks for the advantage of sexual '
    + 'reproduction, '
    + 'the answer is variation, '
    + 'and the mark is for saying what variation is for. '
    + 'That is the whole comparison, '
    + 'and everything else in the table follows from it. '
    + 'The second mechanism is where fertilisation happens, '
    + 'because learners routinely put it in the wrong place '
    + 'in both plants and humans. '
    + 'In a plant, pollination and fertilisation are two events, '
    + 'not one. '
    + 'Pollination is the arrival of pollen on the stigma, '
    + 'carried by wind, insect or hand. '
    + 'Fertilisation happens later and lower down: '
    + 'the pollen grain grows a tube '
    + 'through the style, into the ovary, and into the ovule, '
    + 'and only there does the male nucleus join the egg. '
    + 'So a flower can be pollinated and still not fertilised, '
    + 'which is exactly what happens '
    + 'when the pollen is from the wrong species '
    + 'or the stigma is dry. '
    + 'In humans, fertilisation happens in the oviduct, '
    + 'not in the uterus. '
    + 'The uterus is where the zygote implants afterwards, '
    + 'several days later, '
    + 'having divided on the way. '
    + 'Both errors cost the same mark '
    + 'and both are avoided by naming the place in the answer. '
    + 'The third mechanism worth stating '
    + 'is why the gametes carry half the chromosomes. '
    + 'If each gamete carried the full number, '
    + 'the zygote would have double, '
    + 'and the next generation double again. '
    + 'Halving in the making of the gametes '
    + 'and doubling at fertilisation '
    + 'keeps the number constant down the generations, '
    + 'and it is the halving that allows the mixing: '
    + 'which half of each parent’s chromosomes a gamete gets '
    + 'is a matter of chance, '
    + 'and that chance is where the variation comes from. '
    + 'So the halving is not bookkeeping. '
    + 'It is the mechanism of the variation '
    + 'that the whole comparison rests on, '
    + 'and a learner who says that '
    + 'has joined the two halves of the topic.',

  recap:
    'You know that plants grow from seeds '
    + 'and that cassava is planted from cuttings, '
    + 'and you have met the parts of a flower. '
    + 'This asks what the difference between those two ways of planting '
    + 'actually is, '
    + 'and what each one costs.',

  method: [
    'Count the parents involved.',
    'One parent and identical offspring means asexual.',
    'Two gametes joining means sexual.',
    'Name the male gamete and the female gamete.',
    'Name the place where they join, exactly.',
    'Say what the fertilised cell becomes.',
    'For a comparison, lead with variation and say what variation is for.',
    'For a plant, keep pollination and fertilisation as two separate events.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name three Ghanaian crops grown by asexual reproduction, '
        + 'and say what part is planted.',
      steps: [
        'Vegetative propagation uses a part of the parent plant.',
      ],
      answer: 'Cassava, from stem cuttings. '
        + 'Yam, from setts, which are pieces of tuber. '
        + 'Plantain, from suckers. '
        + 'Sweet potato is another, from vine cuttings.',
    },
    {
      level: 4,
      ask: 'Where does fertilisation happen in a flowering plant, '
        + 'and how does pollination differ from it?',
      steps: [
        'Pollination is the arrival of pollen on the stigma.',
        'Then a pollen tube grows down the style.',
        'Fertilisation happens inside the ovule.',
      ],
      answer: 'Fertilisation happens in the ovule, inside the ovary, '
        + 'when the male nucleus from the pollen tube joins the egg. '
        + 'Pollination is the earlier and separate event '
        + 'of pollen reaching the stigma. '
        + 'A flower can be pollinated and not fertilised.',
    },
    {
      level: 5,
      ask: 'A farmer plants a whole field from cuttings of one '
        + 'good cassava plant. '
        + 'Give the advantage and the risk.',
      steps: [
        'Every plant is identical to the chosen parent.',
        'So every plant has its good qualities.',
        'And every plant has its weaknesses too.',
      ],
      answer: 'Advantage: every plant has exactly the qualities '
        + 'of the plant he chose, and it is quick and needs no seed. '
        + 'Risk: they are identical, '
        + 'so a disease that can kill one can kill all of them. '
        + 'Cassava mosaic disease spreads through such a field '
        + 'with nothing to stop it.',
    },
    {
      level: 6,
      ask: 'Why do gametes carry half the usual number of chromosomes, '
        + 'and what has that to do with variation?',
      steps: [
        'If each gamete carried the full number the zygote would have '
          + 'double.',
        'And the next generation double again.',
        'Halving then doubling keeps the number constant.',
        'Which half each gamete receives is a matter of chance.',
      ],
      answer: 'Halving in the gametes and doubling at fertilisation '
        + 'keeps the chromosome number constant down the generations. '
        + 'But the halving also mixes: '
        + 'which half of each parent’s chromosomes a gamete gets '
        + 'is chance, '
        + 'so no two offspring are alike. '
        + 'That is where the variation comes from, '
        + 'and variation is the whole advantage '
        + 'of sexual reproduction.',
    },
  ],

  traps: [
    {
      mistake: 'Treating pollination and fertilisation as the same event.',
      why: 'Pollination is pollen reaching the stigma. '
        + 'Fertilisation happens later, inside the ovule.',
    },
    {
      mistake: 'Saying human fertilisation happens in the uterus.',
      why: 'It happens in the oviduct. '
        + 'The uterus is where the zygote implants days later.',
    },
    {
      mistake: 'Listing advantages of sexual reproduction without saying '
        + 'what variation is for.',
      why: 'The mark is in the consequence: '
        + 'a varied population can survive a change '
        + 'that would kill an identical one.',
    },
    {
      mistake: 'Calling asexual reproduction primitive or inferior.',
      why: 'It is quick, needs no partner, '
        + 'and copies a parent that survived there. '
        + 'It is how cassava and plantain are grown on purpose.',
    },
  ],

  extension:
    'Many plants do both, '
    + 'and that is a sensible strategy rather than a muddle. '
    + 'A plantain produces suckers, '
    + 'which fill the ground nearby with copies that will certainly '
    + 'grow, '
    + 'and it also flowers, '
    + 'which offers the chance of something new '
    + 'and of spreading further. '
    + 'The two methods answer two different problems: '
    + 'holding the ground you have, '
    + 'and surviving a change you cannot predict. '
    + 'A farmer who plants only from suckers '
    + 'has chosen the first and given up the second, '
    + 'and that is a reasonable choice '
    + 'so long as it is a choice '
    + 'and the whole district has not made it at once.',

  figure: {
    alt: 'Two drawings. The left one shows asexual reproduction as one '
      + 'parent plant with three offspring below it, all drawn '
      + 'identically and shaded the same, labelled identical to the '
      + 'parent, with a note that a disease able to kill one can kill '
      + 'all of them. The right one shows sexual reproduction as two '
      + 'parents, each shaded differently, with three offspring below '
      + 'them each shaded differently again and none matching either '
      + 'parent, labelled all different, with a note that some of that '
      + 'variation may survive a change that kills the rest. Beneath '
      + 'both, a flower is drawn in section with the two events marked '
      + 'separately: pollination, where a grain lands on the stigma at '
      + 'the top, and fertilisation, where a pollen tube has grown down '
      + 'the style into the ovary and the male nucleus joins the egg '
      + 'inside an ovule, with a note that a flower can be pollinated '
      + 'and still not fertilised.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* asexual */
      + '<circle cx="90" cy="50" r="20" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>'
      + '<g stroke="#0f8a4d" stroke-width="2" fill="none">'
      + '<path d="M90 70v20"/><path d="M90 90h-60"/><path d="M90 90h60"/>'
      + '<path d="M30 90v16"/><path d="M90 90v16"/><path d="M150 90v16"/>'
      + '</g>'
      + '<g fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2">'
      + '<circle cx="30" cy="124" r="16"/><circle cx="90" cy="124" r="16"/><circle cx="150" cy="124" r="16"/>'
      + '</g>'
      + '<text x="24" y="36" font-size="11" fill="currentColor">one parent</text>'
      + '<text x="20" y="158" font-size="10" fill="#0f8a4d">identical to the parent</text>'
      + '<text x="20" y="174" font-size="10" fill="currentColor">a disease that can kill</text>'
      + '<text x="20" y="188" font-size="10" fill="currentColor">one can kill all of them</text>'
      /* sexual */
      + '<circle cx="400" cy="50" r="20" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/>'
      + '<circle cx="490" cy="50" r="20" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="2"/>'
      + '<g stroke="#0f8a4d" stroke-width="2" fill="none">'
      + '<path d="M400 70L445 86"/><path d="M490 70L445 86"/>'
      + '<path d="M445 86v8"/><path d="M385 94h120"/>'
      + '<path d="M385 94v12"/><path d="M445 94v12"/><path d="M505 94v12"/>'
      + '</g>'
      + '<circle cx="385" cy="124" r="16" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>'
      + '<circle cx="445" cy="124" r="16" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-width="2"/>'
      + '<circle cx="505" cy="124" r="16" fill="currentColor" fill-opacity="0.05" stroke="currentColor" stroke-width="2"/>'
      + '<text x="384" y="36" font-size="11" fill="currentColor">two parents</text>'
      + '<text x="370" y="158" font-size="10" fill="#0f8a4d">all different, and none like either parent</text>'
      + '<text x="370" y="174" font-size="10" fill="currentColor">some of that variation may survive</text>'
      + '<text x="370" y="188" font-size="10" fill="currentColor">a change that kills the rest</text>'
      /* flower */
      + '<path d="M300 400V300" stroke="currentColor" stroke-width="3" fill="none"/>'
      + '<path d="M300 300q-30 -40 -60 -30q20 36 60 30Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M300 300q30 -40 60 -30q-20 36 -60 30Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M300 300v-70" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<ellipse cx="300" cy="226" rx="12" ry="7" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<ellipse cx="300" cy="308" rx="24" ry="18" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="300" cy="308" r="7" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="286" cy="214" r="5" fill="#0f8a4d"/>'
      + '<path d="M296 232v68" stroke="#0f8a4d" stroke-width="2" stroke-dasharray="4 3" fill="none"/>'
      + '<path d="M290 290l6 10 6-10Z" fill="#0f8a4d"/>'
      + '<text x="188" y="214" font-size="10" fill="#0f8a4d">1 pollination:</text>'
      + '<text x="188" y="228" font-size="10" fill="#0f8a4d">pollen lands on the stigma</text>'
      + '<text x="330" y="262" font-size="10" fill="#0f8a4d">the pollen tube grows</text>'
      + '<text x="330" y="276" font-size="10" fill="#0f8a4d">down the style</text>'
      + '<text x="330" y="312" font-size="10" fill="#0f8a4d">2 fertilisation: inside</text>'
      + '<text x="330" y="326" font-size="10" fill="#0f8a4d">the ovule, in the ovary</text>'
      + '<text x="188" y="368" font-size="10" fill="currentColor">two separate events, so a flower can be</text>'
      + '<text x="188" y="382" font-size="10" fill="currentColor">pollinated and still not fertilised</text>'
      + '<text x="20" y="412" font-size="11" fill="currentColor">in humans the same point: fertilisation is in the oviduct, and the uterus is where it implants later</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Asexual against sexual reproduction, and what each one costs',
      columns: ['', 'Asexual', 'Sexual'],
      rows: [
        ['Parents needed', 'One', 'Two, or one plant with both parts'],
        ['Offspring', 'Identical to the parent', 'Different from both parents'],
        ['Speed', 'Fast, and no partner to find', 'Slower, and a partner or pollinator is needed'],
        ['Advantage', 'Copies a parent that survived there', 'Variation, so some may survive a change'],
        ['Risk', 'One disease can take the whole field', 'The offspring may be worse than the parent'],
        ['Ghanaian examples', 'Cassava cuttings, yam setts, plantain suckers', 'Maize, cowpea, tomato from seed'],
      ],
      note: 'The advantage row is the one the examination wants, '
        + 'and the mark is for saying what variation is for: '
        + 'surviving a change that would kill an identical population.',
    },
  ],

  questions: [
    {
      id: 'rp-1',
      ask: 'Plantain grown from suckers is an example of:',
      kind: 'choice',
      options: [
        'Asexual reproduction',
        'Sexual reproduction',
        'Pollination',
      ],
      answer: 'Asexual reproduction',
      teach: 'One parent, and offspring identical to it.',
      level: 3,
    },
    {
      id: 'rp-2',
      ask: 'In a flowering plant, fertilisation happens in the:',
      kind: 'choice',
      options: ['Ovule', 'Stigma', 'Anther'],
      answer: 'Ovule',
      teach: 'Pollination is pollen reaching the stigma; '
        + 'fertilisation is later and lower down.',
      level: 4,
    },
    {
      id: 'rp-3',
      ask: 'In humans, fertilisation happens in the:',
      kind: 'choice',
      options: ['Oviduct', 'Uterus', 'Ovary'],
      answer: 'Oviduct',
      teach: 'The zygote divides on the way and implants in the uterus '
        + 'days later.',
      level: 4,
    },
    {
      id: 'rp-4',
      ask: 'The main advantage of sexual reproduction is that it gives:',
      kind: 'choice',
      options: [
        'Variation, so some offspring may survive a change',
        'More offspring',
        'Faster growth',
      ],
      answer: 'Variation, so some offspring may survive a change',
      teach: 'The mark is in saying what variation is for, '
        + 'not simply naming it.',
      level: 5,
    },
    {
      id: 'rp-5',
      ask: 'Gametes carry half the usual chromosome number so that:',
      kind: 'choice',
      options: [
        'The zygote has the full number, and the count stays constant',
        'They are smaller',
        'They can move faster',
      ],
      answer: 'The zygote has the full number, and the count stays constant',
      teach: 'And the halving mixes which chromosomes go into each '
        + 'gamete, which is where the variation comes from.',
      level: 6,
    },
  ],
})

/* ── transport and respiration ───────────────────────────────────────── */

teach({
  topicId: 'transport-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Blood carries oxygen from the lungs and food from the gut, '
      + 'and carries carbon dioxide and waste away. '
      + 'The human circulation is double: '
      + 'the right side pumps to the lungs '
      + 'and the left side pumps to the body. '
      + 'Gas exchange happens by diffusion '
      + 'across a surface that is thin, moist and very large. '
      + 'Aerobic respiration uses oxygen '
      + 'and releases far more energy; '
      + 'anaerobic respiration does not, '
      + 'and leaves lactic acid or alcohol behind.',
    method: [
      'Trace a drop of blood through both circuits, naming each vessel.',
      'Explain exchange by diffusion down a concentration gradient.',
      'Compare the two kinds of respiration by oxygen, products and energy.',
    ],
  },

  idea:
    'The circulatory system is the heart, '
    + 'the blood vessels and the blood. '
    + 'Arteries carry blood away from the heart '
    + 'and have thick muscular walls. '
    + 'Veins return blood to the heart, '
    + 'have thinner walls and carry valves to stop backflow. '
    + 'Capillaries are one cell thick '
    + 'and are where exchange with the tissues happens. '
    + 'The human circulation is double, '
    + 'which means the blood passes through the heart twice '
    + 'in one complete journey. '
    + 'The right side receives blood from the body '
    + 'and pumps it to the lungs; '
    + 'the left side receives it from the lungs '
    + 'and pumps it to the body. '
    + 'In the lungs, '
    + 'air reaches millions of small sacs called alveoli. '
    + 'Oxygen diffuses from the air into the blood '
    + 'and carbon dioxide diffuses the other way. '
    + 'Respiration is the release of energy from food inside cells. '
    + 'Aerobic respiration uses oxygen '
    + 'and gives carbon dioxide, water and a large amount of energy. '
    + 'Anaerobic respiration happens without oxygen: '
    + 'in human muscle it gives lactic acid, '
    + 'and in yeast it gives alcohol and carbon dioxide, '
    + 'which is fermentation. '
    + 'Both release far less energy than aerobic respiration.',

  mechanism:
    'Three mechanisms matter, '
    + 'and the first explains why the heart has four chambers '
    + 'rather than two. '
    + 'A double circulation means the blood is pumped twice. '
    + 'The reason is pressure. '
    + 'The lungs are delicate, '
    + 'and their capillaries would burst '
    + 'under the pressure needed to reach the feet, '
    + 'so the right side pumps gently to the lungs only. '
    + 'The blood then comes back to the heart '
    + 'and is pumped again, hard, by the left side, '
    + 'which is why the left wall is much thicker. '
    + 'The gain is that blood reaches the body '
    + 'at full pressure and fully oxygenated, '
    + 'so a mammal can sustain a high rate of activity. '
    + 'A fish has a single circulation, '
    + 'in which the blood loses pressure in the gills '
    + 'before travelling on to the body, '
    + 'and that is one reason a fish cannot sustain '
    + 'the activity a mammal can. '
    + 'Answering with that comparison '
    + 'turns a list of chambers into an explanation. '
    + 'The second is why an exchange surface looks as it does, '
    + 'and this one idea covers lung, gill, root and gut. '
    + 'Diffusion is the movement of a substance '
    + 'from where there is more of it to where there is less, '
    + 'and its rate depends on three things: '
    + 'the area of the surface, '
    + 'the thinness of the barrier, '
    + 'and the difference in concentration across it. '
    + 'So every good exchange surface has the same three features. '
    + 'It is large: the alveoli of two human lungs '
    + 'together have the area of a small room. '
    + 'It is thin: one cell thick, '
    + 'so the distance is as short as it can be. '
    + 'And the gradient is kept steep, '
    + 'by breathing to replace the air '
    + 'and by the blood flowing on to carry the oxygen away. '
    + 'That third point is the one learners leave out, '
    + 'and it is the one that explains the breathing: '
    + 'if the air were not changed, '
    + 'the oxygen in the alveolus would fall to match the blood '
    + 'and diffusion would stop. '
    + 'So breathing and circulation exist to maintain the gradient, '
    + 'not to carry the gas across. '
    + 'The gas crosses on its own. '
    + 'The third is the comparison of the two kinds of respiration, '
    + 'where the numbers tell the story. '
    + 'Aerobic respiration of one glucose molecule '
    + 'releases around twenty times as much usable energy '
    + 'as anaerobic respiration of the same molecule. '
    + 'The reason is that anaerobic respiration '
    + 'does not finish the job: '
    + 'it leaves the glucose only partly broken down, '
    + 'as lactic acid or as alcohol, '
    + 'and both of those still contain most of the energy. '
    + 'You can prove it: alcohol burns. '
    + 'So anaerobic respiration is not a different way '
    + 'of getting the same energy; '
    + 'it is a way of getting a little energy quickly '
    + 'and leaving the rest behind. '
    + 'That explains everything about it. '
    + 'A sprinter uses it because it needs no oxygen '
    + 'and starts instantly, '
    + 'and it is why a sprint can only last seconds: '
    + 'the lactic acid builds up and the muscle fails. '
    + 'Afterwards the runner keeps breathing hard '
    + 'to supply the oxygen needed '
    + 'to deal with the lactic acid that was left, '
    + 'which is the oxygen debt. '
    + 'And a brewer or a baker uses yeast '
    + 'precisely because its anaerobic products '
    + 'are useful: alcohol in pito and in palm wine, '
    + 'and carbon dioxide to raise bread.',

  recap:
    'You have met the heart as a pump and the lungs as the place '
    + 'where air is taken in, '
    + 'and you know that respiration releases energy from food. '
    + 'This asks why the heart is double, '
    + 'why a lung looks as it does, '
    + 'and what happens when the oxygen runs out.',

  method: [
    'For a circulation question, start in a named chamber and go round.',
    'Name each vessel and say whether the blood in it is oxygenated.',
    'Note that the blood passes through the heart twice in one journey.',
    'For exchange, state the three features: large area, thin barrier, steep gradient.',
    'Say what maintains the gradient, which is breathing and blood flow.',
    'For respiration, write the word equation for the aerobic form.',
    'Compare the two forms by oxygen needed, products and energy released.',
    'Explain an oxygen debt as the oxygen later needed to deal with the lactic acid.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give the word equation for aerobic respiration.',
      steps: [
        'Glucose and oxygen go in.',
        'Carbon dioxide, water and energy come out.',
      ],
      answer: 'Glucose plus oxygen gives carbon dioxide plus water '
        + 'plus energy.',
    },
    {
      level: 4,
      ask: 'Name the three features of a good gas exchange surface, '
        + 'and give one for the alveolus.',
      steps: [
        'Area, thinness, and a steep concentration gradient.',
      ],
      answer: 'A large surface area: '
        + 'millions of alveoli together have the area of a small room. '
        + 'A thin barrier: the wall is one cell thick. '
        + 'A steep gradient: '
        + 'breathing replaces the air and the blood flows on, '
        + 'so the difference in concentration is kept up.',
    },
    {
      level: 5,
      ask: 'Why does the human heart pump the blood twice '
        + 'in one circuit, and which side is thicker?',
      steps: [
        'The lung capillaries are delicate.',
        'They would burst at the pressure needed to reach the feet.',
        'So the right side pumps gently, to the lungs only.',
        'The blood returns and is pumped again, hard, by the left side.',
      ],
      answer: 'Because the pressure needed for the body '
        + 'would damage the lungs. '
        + 'The right side sends blood to the lungs at low pressure, '
        + 'and the left side sends it to the body at high pressure, '
        + 'which is why the left wall is much thicker. '
        + 'The gain is blood reaching the body '
        + 'both fully oxygenated and at full pressure.',
    },
    {
      level: 6,
      ask: 'A sprinter runs 100 metres and then breathes hard for '
        + 'several minutes. '
        + 'Explain, naming the kind of respiration and its products, '
        + 'and say why so much less energy was released.',
      steps: [
        'During the sprint the muscles need energy faster than oxygen '
          + 'can be delivered.',
        'They respire anaerobically, producing lactic acid.',
        'Lactic acid builds up and the muscle begins to fail.',
        'Afterwards oxygen is needed to deal with the lactic acid: '
          + 'the oxygen debt.',
        'Anaerobic respiration leaves the glucose only partly broken '
          + 'down.',
      ],
      answer: 'Anaerobic respiration in the muscle, '
        + 'giving lactic acid and a little energy, '
        + 'followed by heavy breathing to repay the oxygen debt. '
        + 'Far less energy was released '
        + 'because the glucose was not fully broken down: '
        + 'most of its energy is still in the lactic acid, '
        + 'which is the same reason alcohol, '
        + 'the anaerobic product in yeast, '
        + 'will burn.',
    },
  ],

  traps: [
    {
      mistake: 'Saying breathing pushes the oxygen into the blood.',
      why: 'The gas crosses by diffusion on its own. '
        + 'Breathing maintains the concentration gradient, '
        + 'which is what keeps diffusion going.',
    },
    {
      mistake: 'Giving two features of an exchange surface and stopping.',
      why: 'There are three: large area, thin barrier, '
        + 'and a gradient that is kept steep. '
        + 'The third is the one usually left out.',
    },
    {
      mistake: 'Treating anaerobic respiration as another route to the '
        + 'same energy.',
      why: 'It leaves the glucose part broken, '
        + 'so most of the energy remains in the lactic acid or alcohol.',
    },
    {
      mistake: 'Saying all arteries carry oxygenated blood.',
      why: 'The pulmonary artery carries deoxygenated blood '
        + 'to the lungs. '
        + 'An artery is defined by direction, away from the heart, '
        + 'not by its contents.',
    },
  ],

  extension:
    'Fermentation by yeast is anaerobic respiration '
    + 'put to work, '
    + 'and Ghana uses it in several forms. '
    + 'Pito and palm wine are made '
    + 'by yeasts turning sugars into alcohol and carbon dioxide. '
    + 'Bread rises because the carbon dioxide '
    + 'is trapped in the dough as bubbles, '
    + 'and the alcohol boils off in the oven. '
    + 'Kenkey and other fermented maize foods '
    + 'rely on bacteria as well as yeasts, '
    + 'and the acid they produce '
    + 'is part of why the food keeps: '
    + 'the organisms that would spoil it '
    + 'cannot grow at that pH. '
    + 'So a process taught as a limitation of respiration '
    + 'is also one of the oldest food technologies there is.',

  figure: {
    alt: 'Two drawings. On the left the double circulation drawn as a '
      + 'figure of eight: the heart in the middle divided into four '
      + 'chambers, with the right side connected by the pulmonary artery '
      + 'up to the lungs and back by the pulmonary vein, and the left '
      + 'side connected by the aorta out to the body and back by the '
      + 'vena cava. The lung circuit is marked low pressure and the body '
      + 'circuit high pressure, with the left wall drawn visibly thicker '
      + 'and a note that the lung capillaries would burst at the '
      + 'pressure needed to reach the feet. On the right a single '
      + 'alveolus is drawn beside a capillary, the wall of each one cell '
      + 'thick, with oxygen arrows crossing into the blood and carbon '
      + 'dioxide arrows crossing out. Three labels name the three '
      + 'features of a good exchange surface: large area, shown by many '
      + 'small sacs; thin barrier, shown by the single cell wall; and a '
      + 'steep gradient, shown by a fresh air arrow in and a blood flow '
      + 'arrow on, with a note that these two keep the gradient up and '
      + 'that without them diffusion would stop.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* heart */
      + '<rect x="110" y="150" width="100" height="110" rx="10" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M160 150v110" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M110 205h50" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<path d="M160 205h50" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<path d="M160 150v110" stroke="currentColor" stroke-width="6" fill="none"/>'
      + '<text x="116" y="146" font-size="10" fill="currentColor">right</text>'
      + '<text x="176" y="146" font-size="10" fill="currentColor">left</text>'
      + '<text x="116" y="280" font-size="9" fill="#0f8a4d">thin wall</text>'
      + '<text x="172" y="280" font-size="9" fill="#0f8a4d">thick wall</text>'
      /* lungs */
      + '<ellipse cx="160" cy="60" rx="70" ry="34" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="138" y="64" font-size="11" fill="currentColor">lungs</text>'
      + '<path d="M130 150C100 120 100 90 110 74" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M104 86l6-12 8 10Z" fill="#0f8a4d"/>'
      + '<path d="M196 74C210 92 206 124 186 150" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M180 140l6 12 8-10Z" fill="currentColor"/>'
      + '<text x="36" y="106" font-size="9" fill="#0f8a4d">pulmonary artery</text>'
      + '<text x="212" y="106" font-size="9" fill="currentColor">pulmonary vein</text>'
      + '<text x="96" y="30" font-size="9" fill="#0f8a4d">low pressure: the lung capillaries are delicate</text>'
      /* body */
      + '<ellipse cx="160" cy="356" rx="70" ry="34" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="142" y="360" font-size="11" fill="currentColor">body</text>'
      + '<path d="M196 260C214 292 206 320 188 340" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M182 330l6 12 8-10Z" fill="#0f8a4d"/>'
      + '<path d="M124 340C104 318 100 290 128 260" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M122 270l6-12 8 10Z" fill="currentColor"/>'
      + '<text x="206" y="306" font-size="9" fill="#0f8a4d">aorta</text>'
      + '<text x="40" y="306" font-size="9" fill="currentColor">vena cava</text>'
      + '<text x="100" y="406" font-size="9" fill="#0f8a4d">high pressure: it has to reach the feet</text>'
      /* alveolus */
      + '<circle cx="430" cy="120" r="54" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="396" y="60" font-size="10" fill="currentColor">one alveolus</text>'
      + '<path d="M484 120h60" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M484 150h60" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="500" y="142" font-size="9" fill="currentColor">capillary</text>'
      + '<path d="M470 110h40" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M502 104l10 6-10 6Z" fill="#0f8a4d"/>'
      + '<text x="470" y="100" font-size="9" fill="#0f8a4d">oxygen in</text>'
      + '<path d="M510 162h-40" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M478 156l-10 6 10 6Z" fill="currentColor"/>'
      + '<text x="470" y="180" font-size="9" fill="currentColor">carbon dioxide out</text>'
      /* three features */
      + '<text x="380" y="214" font-size="10" fill="#0f8a4d">1 large area: many small sacs</text>'
      + '<text x="380" y="230" font-size="10" fill="#0f8a4d">2 thin barrier: one cell thick</text>'
      + '<text x="380" y="246" font-size="10" fill="#0f8a4d">3 steep gradient: fresh air in,</text>'
      + '<text x="394" y="260" font-size="10" fill="#0f8a4d">and the blood flows on</text>'
      + '<text x="380" y="286" font-size="10" fill="currentColor">the gas crosses by diffusion on its own</text>'
      + '<text x="380" y="300" font-size="10" fill="currentColor">breathing and blood flow keep the</text>'
      + '<text x="380" y="314" font-size="10" fill="currentColor">gradient up; without them diffusion</text>'
      + '<text x="380" y="328" font-size="10" fill="currentColor">would stop</text>'
      + '<text x="380" y="356" font-size="10" fill="#0f8a4d">the third feature is the one learners</text>'
      + '<text x="380" y="370" font-size="10" fill="#0f8a4d">leave out, and it explains the breathing</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Aerobic against anaerobic respiration',
      columns: ['', 'Aerobic', 'Anaerobic in muscle', 'Anaerobic in yeast'],
      rows: [
        ['Oxygen needed', 'Yes', 'No', 'No'],
        ['Products', 'Carbon dioxide and water', 'Lactic acid', 'Alcohol and carbon dioxide'],
        ['Energy released', 'A large amount', 'A small amount', 'A small amount'],
        ['Why so little', 'Glucose fully broken down', 'Glucose only part broken: the rest is in the lactic acid', 'The rest is in the alcohol, which is why alcohol burns'],
        ['Where it matters', 'Almost all the time, in all cells', 'A sprint, and the oxygen debt afterwards', 'Pito, palm wine, bread, kenkey'],
      ],
      note: 'Read the fourth row. '
        + 'Anaerobic respiration is not another route to the same '
        + 'energy; it is a way of getting a little quickly '
        + 'and leaving the rest behind.',
    },
    {
      caption: 'The blood vessels, and the one point learners get wrong',
      columns: ['Vessel', 'Direction', 'Wall', 'Blood it carries'],
      rows: [
        ['Artery', 'Away from the heart', 'Thick and muscular', 'Oxygenated, except the pulmonary artery'],
        ['Vein', 'Towards the heart', 'Thinner, with valves', 'Deoxygenated, except the pulmonary vein'],
        ['Capillary', 'Through a tissue', 'One cell thick', 'Changing from one to the other as it goes'],
      ],
      note: 'An artery is defined by its direction, not by its contents, '
        + 'which is why the two exceptions exist and are examined.',
    },
  ],

  questions: [
    {
      id: 'tr-1',
      ask: 'How many times does blood pass through the human heart '
        + 'in one complete circuit?',
      kind: 'numeric',
      options: [],
      answer: '2',
      teach: 'Once on the way to the lungs and once on the way to the '
        + 'body. That is what double circulation means.',
      level: 3,
    },
    {
      id: 'tr-2',
      ask: 'Which vessel carries deoxygenated blood away from the heart?',
      kind: 'choice',
      options: [
        'The pulmonary artery',
        'The aorta',
        'The pulmonary vein',
      ],
      answer: 'The pulmonary artery',
      teach: 'An artery is defined by direction, not contents, '
        + 'which is why this exception exists.',
      level: 5,
    },
    {
      id: 'tr-3',
      ask: 'Breathing keeps gas exchange going by:',
      kind: 'choice',
      options: [
        'Maintaining the concentration gradient',
        'Pushing oxygen across the wall',
        'Warming the air',
      ],
      answer: 'Maintaining the concentration gradient',
      teach: 'The gas crosses by diffusion on its own. '
        + 'Without fresh air the gradient would disappear.',
      level: 5,
    },
    {
      id: 'tr-4',
      ask: 'Anaerobic respiration in human muscle produces:',
      kind: 'choice',
      options: ['Lactic acid', 'Alcohol', 'Carbon dioxide and water'],
      answer: 'Lactic acid',
      teach: 'Yeast produces alcohol and carbon dioxide instead.',
      level: 4,
    },
    {
      id: 'tr-5',
      ask: 'Anaerobic respiration releases far less energy because:',
      kind: 'choice',
      options: [
        'The glucose is only partly broken down',
        'It happens more slowly',
        'It uses no glucose',
      ],
      answer: 'The glucose is only partly broken down',
      teach: 'Most of the energy stays in the lactic acid or the '
        + 'alcohol, which is why alcohol will burn.',
      level: 6,
    },
  ],
})

/* ── ecosystems and energy flow ──────────────────────────────────────── */

teach({
  topicId: 'ecology-shs-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An ecosystem is the living things of a place '
      + 'together with their surroundings. '
      + 'Energy enters as sunlight, '
      + 'is captured by producers, '
      + 'and passes along a food chain with the arrows pointing '
      + 'the way the energy goes, '
      + 'which is towards the eater. '
      + 'Only about a tenth passes to the next level, '
      + 'because the rest left as heat, respiration and waste. '
      + 'That is why a pyramid of energy narrows, '
      + 'and why food chains are short.',
    method: [
      'Draw arrows from the eaten to the eater, following the energy.',
      'Name each organism’s trophic level.',
      'Account for the loss at each step: respiration, heat, and uneaten parts.',
    ],
  },

  idea:
    'An ecosystem is a community of living things '
    + 'together with the non living conditions of their place. '
    + 'A habitat is where an organism lives. '
    + 'A population is all the individuals of one kind there, '
    + 'and a community is all the populations together. '
    + 'Producers make their own food by photosynthesis '
    + 'and are the first trophic level. '
    + 'Herbivores eat producers and are the second. '
    + 'Carnivores that eat herbivores are the third, '
    + 'and so on. '
    + 'Decomposers break down dead matter at every level. '
    + 'A food chain shows one path of energy, '
    + 'with arrows pointing from the eaten to the eater, '
    + 'because the arrow follows the energy. '
    + 'A food web shows all the chains of a place together, '
    + 'which is what really happens, '
    + 'since most animals eat more than one thing. '
    + 'A pyramid of numbers counts the individuals at each level. '
    + 'A pyramid of biomass weighs the living material at each level. '
    + 'A pyramid of energy measures the energy passing through each '
    + 'level, '
    + 'and it always narrows upwards.',

  mechanism:
    'The single most important number in this topic is a tenth, '
    + 'and understanding where the other nine tenths went '
    + 'answers almost every question that can be asked. '
    + 'A cow eats grass holding a certain amount of energy. '
    + 'Only about a tenth of it ends up as cow '
    + 'that something else could eat. '
    + 'The rest went in four ways, '
    + 'and naming all four is the full answer. '
    + 'Most of it was respired: '
    + 'the cow used it to move, to keep warm, '
    + 'to pump blood and to repair itself, '
    + 'and that energy left as heat. '
    + 'Some left in the faeces, undigested. '
    + 'Some left in urine. '
    + 'And some of the grass was never eaten at all: '
    + 'the roots, the dead stems, the parts trampled. '
    + 'A learner who writes only that energy is lost as heat '
    + 'has one of the four. '
    + 'Now the consequences, '
    + 'because they are what the question usually asks for. '
    + 'First, this is why a pyramid of energy narrows '
    + 'and can never be any other shape. '
    + 'Each level has only what the level below passed on, '
    + 'and that is always less. '
    + 'Second, it is why food chains are short, '
    + 'rarely more than four or five levels. '
    + 'After four steps, '
    + 'a thousandth or less of the original energy is left, '
    + 'which cannot support a population of anything. '
    + 'Third, it explains a real argument about food. '
    + 'A hectare of land planted with maize '
    + 'feeds far more people '
    + 'than a hectare used to graze cattle, '
    + 'because eating the maize takes the energy '
    + 'at the second level instead of the third, '
    + 'and so collects ten times as much of it. '
    + 'That is not an argument against keeping cattle, '
    + 'which turn grass that people cannot eat '
    + 'into milk and meat that they can, '
    + 'and which graze land too poor to crop. '
    + 'But it does explain '
    + 'why a country short of land grows more grain than beef, '
    + 'and it is a good answer to a question '
    + 'about feeding a growing population. '
    + 'The second mechanism is the direction of the arrows, '
    + 'which sounds trivial and is marked. '
    + 'The arrow in a food chain '
    + 'points from the organism eaten to the organism eating it, '
    + 'because the arrow shows where the energy goes. '
    + 'Grass, arrow, grasshopper, arrow, lizard, arrow, hawk. '
    + 'Learners draw them backwards, '
    + 'reading the chain as who eats whom, '
    + 'and lose the mark for the whole diagram. '
    + 'Say it to yourself as you draw: '
    + 'the arrow follows the energy. '
    + 'The third is the difference between the three pyramids, '
    + 'and why only the energy one is always a pyramid. '
    + 'A pyramid of numbers can be the wrong way up: '
    + 'one large tree supports thousands of insects, '
    + 'so the second level is far more numerous than the first. '
    + 'A pyramid of biomass is usually right way up '
    + 'but can be inverted in water, '
    + 'where a small mass of fast growing plankton '
    + 'is eaten and replaced many times over '
    + 'and supports a larger standing mass of animals. '
    + 'A pyramid of energy can never be inverted, '
    + 'because it measures the energy passing through over time '
    + 'rather than what is standing there at one moment, '
    + 'and no level can pass on more than it received. '
    + 'That is the answer to why the energy pyramid is preferred, '
    + 'and it is a question the paper sets directly.',

  recap:
    'You have drawn food chains and met producers and consumers. '
    + 'This asks what happens to the energy at each step, '
    + 'and why that answer limits how long a chain can be.',

  method: [
    'List the organisms of the place.',
    'Identify the producers, which make their own food.',
    'Draw arrows from the eaten to the eater, following the energy.',
    'Join the chains into a web, since most animals eat more than one thing.',
    'Label the trophic level of each organism.',
    'For a pyramid, make each bar about a tenth of the one below it.',
    'When asked about loss, give all four: respiration, heat, faeces and urine, and the parts never eaten.',
    'Explain the shortness of chains from the repeated tenfold loss.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Draw the chain for grass, hawk, lizard and grasshopper, '
        + 'and say which way the arrows point.',
      steps: [
        'The producer comes first.',
        'Then the herbivore, then its predator, then the top predator.',
        'The arrow follows the energy.',
      ],
      answer: 'Grass, arrow, grasshopper, arrow, lizard, arrow, hawk. '
        + 'The arrows point from the eaten to the eater, '
        + 'because that is the direction the energy travels.',
    },
    {
      level: 4,
      ask: 'If the grass in a field holds 10000 units of energy, '
        + 'about how much reaches the lizards, '
        + 'two levels up from the grass?',
      steps: [
        'About a tenth passes at each step.',
        'Grass to grasshopper: 1000.',
        'Grasshopper to lizard: 100.',
      ],
      answer: 'About 100 units. '
        + 'Two steps have each cost about nine tenths, '
        + 'which is why the figure falls so fast.',
    },
    {
      level: 5,
      ask: 'Where does the energy go that does not pass to the next '
        + 'level? Give all four routes.',
      steps: [
        'Most is used by the animal itself and leaves as heat.',
        'Some leaves undigested.',
        'Some leaves in urine.',
        'Some of the food was never eaten at all.',
      ],
      answer: 'Respiration, with the energy leaving as heat; '
        + 'faeces, which is undigested food; '
        + 'urine; '
        + 'and the parts of the organism below '
        + 'that were never eaten, such as roots and dead stems. '
        + 'Writing only heat gives one route of four.',
    },
    {
      level: 6,
      ask: 'Why is a pyramid of energy always a pyramid, '
        + 'while a pyramid of numbers sometimes is not?',
      steps: [
        'A pyramid of numbers counts individuals at one moment.',
        'One tree can support thousands of insects, '
          + 'so that pyramid is inverted.',
        'A pyramid of biomass weighs what is standing there, '
          + 'which can also invert in water.',
        'A pyramid of energy measures energy passing through over time.',
        'No level can pass on more than it received.',
      ],
      answer: 'Because energy passing through a level over time '
        + 'can never exceed what that level received, '
        + 'so each bar must be smaller than the one below. '
        + 'Numbers and biomass measure what is standing there at one '
        + 'moment, '
        + 'so a single large producer or a fast growing one '
        + 'can support more individuals or more mass above it. '
        + 'That is why the energy pyramid is the one ecologists prefer.',
    },
  ],

  traps: [
    {
      mistake: 'Drawing the food chain arrows towards the food.',
      why: 'The arrow follows the energy, '
        + 'so it points from the eaten to the eater. '
        + 'Backwards arrows lose the whole diagram.',
    },
    {
      mistake: 'Saying only that energy is lost as heat.',
      why: 'There are four routes: respiration and heat, faeces, '
        + 'urine, and the parts never eaten.',
    },
    {
      mistake: 'Expecting every pyramid to be the right way up.',
      why: 'Numbers can invert, with one tree and many insects. '
        + 'Only the energy pyramid cannot.',
    },
    {
      mistake: 'Calling the energy lost destroyed.',
      why: 'It left the chain as heat, which is still energy. '
        + 'It is unavailable to the next level, not gone.',
    },
  ],

  extension:
    'The tenfold loss also explains why a poison '
    + 'can be harmless in water and lethal in a fish eagle. '
    + 'A chemical that is not broken down '
    + 'and is not excreted '
    + 'stays in the body of whatever took it in. '
    + 'So when a bird eats a hundred fish over a season, '
    + 'it takes in the poison from all hundred '
    + 'and keeps nearly all of it. '
    + 'The concentration therefore rises at each level, '
    + 'which is the exact mirror of the energy falling, '
    + 'and it is called bioaccumulation. '
    + 'This is the mechanism behind the mercury '
    + 'in fish from rivers used for unlicensed gold mining: '
    + 'the water may test low '
    + 'and the fish at the top of the chain can still be dangerous '
    + 'to eat.',

  figure: {
    alt: 'Two drawings. On the left a pyramid of energy drawn as four '
      + 'stacked bars narrowing upwards, with the producers at the '
      + 'bottom labelled ten thousand units, the herbivores above '
      + 'labelled one thousand, the first carnivores labelled one '
      + 'hundred, and the top carnivores labelled ten. Beside each step '
      + 'an arrow leaves the pyramid sideways carrying the nine tenths '
      + 'that did not pass on, and those arrows are labelled with the '
      + 'four routes: respiration and heat, faeces, urine, and the parts '
      + 'never eaten. A note says the chain stops after four or five '
      + 'levels because there is nothing left to support a population. '
      + 'On the right a small food web shows grass, maize and a shrub as '
      + 'producers, with a grasshopper, a goat and a rat feeding on '
      + 'them, a lizard and a snake above those, and a hawk at the top, '
      + 'with every arrow pointing from the organism eaten to the '
      + 'organism eating it and a note that the arrow follows the '
      + 'energy.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* pyramid */
      + '<g stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.18">'
      + '<path d="M30 300h220l-24 -40H54Z"/>'
      + '<path d="M54 260h172l-24 -40H78Z"/>'
      + '<path d="M78 220h124l-24 -40H102Z"/>'
      + '<path d="M102 180h76l-24 -40h-28Z"/>'
      + '</g>'
      + '<text x="60" y="288" font-size="10" fill="currentColor">producers: 10000 units</text>'
      + '<text x="84" y="248" font-size="10" fill="currentColor">herbivores: 1000</text>'
      + '<text x="106" y="208" font-size="10" fill="currentColor">carnivores: 100</text>'
      + '<text x="112" y="168" font-size="10" fill="currentColor">top: 10</text>'
      /* loss arrows */
      + '<g stroke="#0f8a4d" stroke-width="2" fill="none">'
      + '<path d="M250 280h60"/><path d="M226 240h84"/><path d="M202 200h108"/>'
      + '</g>'
      + '<g fill="#0f8a4d">'
      + '<path d="M302 274l10 6-10 6Z"/><path d="M302 234l10 6-10 6Z"/><path d="M302 194l10 6-10 6Z"/>'
      + '</g>'
      + '<text x="316" y="196" font-size="9" fill="#0f8a4d">nine tenths leaves at every step:</text>'
      + '<text x="316" y="210" font-size="9" fill="#0f8a4d">respiration, and the energy as heat</text>'
      + '<text x="316" y="224" font-size="9" fill="#0f8a4d">faeces, undigested</text>'
      + '<text x="316" y="238" font-size="9" fill="#0f8a4d">urine</text>'
      + '<text x="316" y="252" font-size="9" fill="#0f8a4d">and the parts never eaten at all</text>'
      + '<text x="30" y="328" font-size="10" fill="currentColor">after four or five levels there is nothing left to support a population,</text>'
      + '<text x="30" y="342" font-size="10" fill="currentColor">which is why food chains are short</text>'
      /* web */
      + '<text x="420" y="36" font-size="11" fill="#0f8a4d">a food web: the arrow follows the energy</text>'
      + '<g fill="currentColor">'
      + '<circle cx="400" cy="140" r="5"/><circle cx="470" cy="140" r="5"/><circle cx="540" cy="140" r="5"/>'
      + '<circle cx="410" cy="100" r="5"/><circle cx="480" cy="100" r="5"/><circle cx="550" cy="100" r="5"/>'
      + '<circle cx="440" cy="70" r="5"/><circle cx="520" cy="70" r="5"/>'
      + '<circle cx="480" cy="46" r="5"/>'
      + '</g>'
      + '<text x="378" y="156" font-size="9" fill="currentColor">grass</text>'
      + '<text x="454" y="156" font-size="9" fill="currentColor">maize</text>'
      + '<text x="528" y="156" font-size="9" fill="currentColor">shrub</text>'
      + '<text x="378" y="94" font-size="9" fill="currentColor">hopper</text>'
      + '<text x="468" y="94" font-size="9" fill="currentColor">goat</text>'
      + '<text x="546" y="94" font-size="9" fill="currentColor">rat</text>'
      + '<text x="414" y="64" font-size="9" fill="currentColor">lizard</text>'
      + '<text x="510" y="64" font-size="9" fill="currentColor">snake</text>'
      + '<text x="470" y="38" font-size="9" fill="currentColor">hawk</text>'
      + '<g stroke="#0f8a4d" stroke-width="1" fill="none">'
      + '<path d="M400 134L410 108"/><path d="M470 134L414 106"/><path d="M470 134L478 108"/>'
      + '<path d="M540 134L548 108"/><path d="M540 134L486 106"/>'
      + '<path d="M410 94L436 76"/><path d="M480 94L444 76"/><path d="M550 94L524 76"/>'
      + '<path d="M440 64L474 52"/><path d="M520 64L486 52"/>'
      + '</g>'
      + '<text x="380" y="182" font-size="9" fill="#0f8a4d">most animals eat more than one thing,</text>'
      + '<text x="380" y="196" font-size="9" fill="#0f8a4d">which is why a web is the truth and a</text>'
      + '<text x="380" y="210" font-size="9" fill="#0f8a4d">chain is one path through it</text>'
      + '<text x="30" y="372" font-size="11" fill="#0f8a4d">the energy lost is not destroyed: it left the chain as heat, and is simply unavailable above</text>'
      + '<text x="30" y="398" font-size="11" fill="currentColor">a hectare of maize feeds more people than a hectare of cattle, because it collects the energy a level lower</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The three pyramids, and why only one of them cannot be inverted',
      columns: ['Pyramid', 'What it measures', 'When it is', 'Can it invert'],
      rows: [
        ['Numbers', 'Individuals at each level, at one moment', 'Quick to count', 'Yes: one tree and thousands of insects'],
        ['Biomass', 'Mass of living material at one moment', 'More honest than numbers', 'Yes, in water, where plankton are eaten and replaced fast'],
        ['Energy', 'Energy passing through a level over time', 'The one ecologists prefer', 'No: a level cannot pass on more than it received'],
      ],
      note: 'The last column is the examination question. '
        + 'A pyramid of energy is always a pyramid '
        + 'because of what it measures, not because of the organisms.',
    },
  ],

  questions: [
    {
      id: 'ec-1',
      ask: 'In a food chain, the arrows point:',
      kind: 'choice',
      options: [
        'From the eaten to the eater',
        'From the eater to the eaten',
        'Either way',
      ],
      answer: 'From the eaten to the eater',
      teach: 'Because the arrow follows the energy. '
        + 'Backwards arrows lose the whole diagram.',
      level: 3,
    },
    {
      id: 'ec-2',
      ask: 'About what fraction of the energy passes to the next trophic '
        + 'level? Give the denominator.',
      kind: 'numeric',
      options: [],
      answer: '10',
      teach: 'About a tenth, so nine tenths leaves by other routes.',
      level: 4,
    },
    {
      id: 'ec-3',
      ask: 'Food chains are short because:',
      kind: 'choice',
      options: [
        'After four steps almost no energy is left',
        'Animals cannot find each other',
        'There are not enough species',
      ],
      answer: 'After four steps almost no energy is left',
      teach: 'A tenth of a tenth of a tenth of a tenth '
        + 'cannot support a population.',
      level: 5,
    },
    {
      id: 'ec-4',
      ask: 'Which pyramid can never be inverted?',
      kind: 'choice',
      options: ['Energy', 'Numbers', 'Biomass'],
      answer: 'Energy',
      teach: 'It measures energy passing through over time, '
        + 'and no level can pass on more than it received.',
      level: 6,
    },
    {
      id: 'ec-5',
      ask: 'A hectare of maize feeds more people than a hectare of cattle '
        + 'because:',
      kind: 'choice',
      options: [
        'Eating the maize collects the energy one level lower',
        'Maize contains more energy than beef',
        'Cattle eat other animals',
      ],
      answer: 'Eating the maize collects the energy one level lower',
      teach: 'So about ten times as much of it is collected. '
        + 'Cattle still turn grass people cannot eat into food they can.',
      level: 6,
    },
  ],
})

/* ── disease and immunity ───────────────────────────────────────────── */

teach({
  topicId: 'disease-core',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A disease spreads by a route, '
      + 'and the route decides the prevention. '
      + 'Cholera and typhoid travel in water, '
      + 'so the answer is clean water and sanitation. '
      + 'Malaria travels in a mosquito, '
      + 'so the answer is the net and the breeding site. '
      + 'Tuberculosis travels in the air. '
      + 'A vaccine shows the body a harmless form of the germ '
      + 'so that memory cells are made in advance. '
      + 'Resistance arises because the survivors breed.',
    method: [
      'Name the pathogen and the route it travels by.',
      'Choose the prevention that blocks that route.',
      'For a vaccine, name the memory cells and say what they do later.',
    ],
  },

  idea:
    'A pathogen is an organism that causes disease. '
    + 'Transmission is how it gets from one person to the next. '
    + 'The routes are few. '
    + 'By water or food, as with cholera and typhoid. '
    + 'By air, in droplets, as with tuberculosis and influenza. '
    + 'By a vector, which is an animal that carries it, '
    + 'as the female Anopheles mosquito carries malaria. '
    + 'By contact, including sexual contact. '
    + 'And by blood, as with hepatitis B and HIV. '
    + 'The body defends itself in two ways. '
    + 'The innate defences act against anything '
    + 'and include the skin, the acid of the stomach, '
    + 'mucus, and white cells that engulf invaders. '
    + 'The adaptive response is specific: '
    + 'white cells called lymphocytes make antibodies '
    + 'that fit one pathogen only. '
    + 'Some of those lymphocytes remain afterwards as memory cells. '
    + 'Vaccination introduces a harmless form of the pathogen, '
    + 'killed, weakened, or just a part of it, '
    + 'so that the adaptive response happens '
    + 'and the memory cells are made '
    + 'without the person having the disease.',

  mechanism:
    'The organising idea is that the route of transmission '
    + 'decides the prevention, '
    + 'and it is more useful than any list of diseases. '
    + 'If a disease travels in water, '
    + 'then boiling the water, '
    + 'keeping latrines away from wells, '
    + 'and washing hands after the latrine '
    + 'will stop it, '
    + 'and a vaccine is a secondary measure. '
    + 'If it travels in a mosquito, '
    + 'then nothing about water purity helps at all, '
    + 'and the measures are the net at night, '
    + 'clearing standing water where the larvae grow, '
    + 'and treating cases so there is less in the blood to pick up. '
    + 'If it travels in the air, '
    + 'then ventilation and covering a cough matter, '
    + 'and crowding is the risk. '
    + 'So the first line of any answer '
    + 'is the route, '
    + 'and the prevention follows from it rather than being remembered. '
    + 'A learner who writes that cholera is prevented by sleeping under '
    + 'a net '
    + 'has not made a factual slip so much as skipped the reasoning. '
    + 'The second mechanism is vaccination, '
    + 'and the full answer has four steps '
    + 'that must be in order. '
    + 'A harmless form of the pathogen is introduced. '
    + 'The lymphocytes recognise it '
    + 'and make antibodies specific to it. '
    + 'The response is slow this first time, '
    + 'taking a week or two. '
    + 'Memory cells remain afterwards. '
    + 'Then, if the real pathogen arrives, '
    + 'the memory cells recognise it at once '
    + 'and the antibody response is far faster and far larger, '
    + 'so the person does not become ill. '
    + 'That last clause is the mark: '
    + 'the vaccine does not kill the pathogen later, '
    + 'and it does not put antibodies into the body to last a lifetime. '
    + 'It leaves behind the ability to respond quickly. '
    + 'This also explains two things learners ask about. '
    + 'It explains why some vaccines need a booster: '
    + 'the memory can fade, and a second showing strengthens it. '
    + 'And it explains herd immunity, '
    + 'which is worth stating because it is the reason '
    + 'vaccination is a public and not only a private matter. '
    + 'If most people in a town are immune, '
    + 'the pathogen cannot find enough new hosts to spread, '
    + 'so even the few who cannot be vaccinated, '
    + 'the newborn and the ill, '
    + 'are protected by everybody else. '
    + 'The third mechanism is resistance, '
    + 'and it is the one most often explained wrongly. '
    + 'Bacteria do not learn to resist a drug, '
    + 'and an individual bacterium does not become resistant '
    + 'because it was exposed. '
    + 'What happens is selection. '
    + 'In any large population of bacteria '
    + 'a few already differ slightly, '
    + 'and one or two of those differences '
    + 'happen to make the drug less effective against them. '
    + 'Give the drug, and the ordinary ones die. '
    + 'The few that survive are the resistant ones, '
    + 'and they now have the patient to themselves '
    + 'and multiply. '
    + 'The population is now resistant, '
    + 'although no individual ever changed. '
    + 'From that mechanism the rules follow directly, '
    + 'which is why it is worth getting right. '
    + 'Finish a course of antibiotics, '
    + 'because stopping early leaves exactly the hardiest survivors '
    + 'and kills the competition they would have had. '
    + 'Do not take an antibiotic for a viral illness, '
    + 'because it cannot help and it selects among the bacteria '
    + 'you are already carrying. '
    + 'And the same reasoning applies to the mosquito and the '
    + 'insecticide, '
    + 'and to the malaria parasite and the antimalarial, '
    + 'which is why Ghana changed its first line malaria treatment '
    + 'when the old drug stopped working: '
    + 'the parasites that survived it had bred.',

  recap:
    'You know that germs cause disease '
    + 'and that immunisation protects a child. '
    + 'This asks how each disease actually travels, '
    + 'what a vaccine leaves behind, '
    + 'and why a drug that worked can stop working.',

  method: [
    'Name the pathogen and which of the four groups it belongs to.',
    'Name the route of transmission.',
    'Choose the prevention that blocks that route.',
    'For a vaccine, give the four steps in order, ending with the memory cells.',
    'Say that the second response is faster and larger, so the person is not ill.',
    'For resistance, describe selection: the survivors breed.',
    'Give the rule that follows: finish the course, and do not use an antibiotic on a virus.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the route of transmission for cholera, malaria '
        + 'and tuberculosis.',
      steps: [
        'Each travels by a different route.',
      ],
      answer: 'Cholera travels in water and food. '
        + 'Malaria travels in the female Anopheles mosquito. '
        + 'Tuberculosis travels in the air, in droplets.',
    },
    {
      level: 4,
      ask: 'Why does sleeping under a treated net '
        + 'do nothing to prevent cholera?',
      steps: [
        'A net blocks the mosquito.',
        'Cholera does not travel by mosquito.',
        'It travels in water and food.',
      ],
      answer: 'Because the net blocks the wrong route. '
        + 'Cholera is prevented by clean water, '
        + 'latrines sited away from wells, '
        + 'and hand washing. '
        + 'The route decides the prevention.',
    },
    {
      level: 5,
      ask: 'Explain how a vaccine protects a person, in order.',
      steps: [
        'A harmless form of the pathogen is introduced.',
        'Lymphocytes recognise it and make specific antibodies, slowly.',
        'Memory cells remain afterwards.',
        'If the real pathogen arrives, they recognise it at once.',
      ],
      answer: 'The vaccine causes the adaptive response to happen '
        + 'without the disease, '
        + 'and leaves memory cells behind. '
        + 'When the real pathogen arrives, '
        + 'those memory cells recognise it and the antibody response '
        + 'is far faster and larger, '
        + 'so the person does not become ill. '
        + 'The vaccine leaves an ability to respond, '
        + 'not a stock of antibodies.',
    },
    {
      level: 6,
      ask: 'A drug that cured an infection in a village '
        + 'no longer works. '
        + 'Explain how resistance arose, '
        + 'and give two rules that follow from the explanation.',
      steps: [
        'In a large bacterial population, a few already differ.',
        'One or two of those differences happen to resist the drug.',
        'The drug kills the ordinary ones.',
        'The resistant few survive, with no competition, and multiply.',
        'The population is now resistant although no individual changed.',
      ],
      answer: 'By selection, not by learning: '
        + 'the drug killed the ordinary bacteria '
        + 'and left the few that happened to resist it, '
        + 'which then multiplied without competition. '
        + 'Two rules follow. '
        + 'Finish a prescribed course, '
        + 'because stopping early leaves exactly the hardiest survivors. '
        + 'And never take an antibiotic for a viral illness, '
        + 'because it cannot help '
        + 'and it selects among the bacteria you already carry.',
    },
  ],

  traps: [
    {
      mistake: 'Matching a prevention to a disease by memory.',
      why: 'Name the route first, '
        + 'and the prevention follows from it. '
        + 'A net does nothing for cholera.',
    },
    {
      mistake: 'Saying a vaccine puts antibodies into the body to last.',
      why: 'It leaves memory cells, '
        + 'which make antibodies quickly when the real pathogen arrives.',
    },
    {
      mistake: 'Saying bacteria learn to resist a drug.',
      why: 'No individual changes. '
        + 'The drug kills the rest and the resistant few multiply. '
        + 'That is selection.',
    },
    {
      mistake: 'Calling malaria viral.',
      why: 'It is caused by Plasmodium, a protozoan, '
        + 'which is why an antimalarial and not an antibiotic is used.',
    },
  ],

  extension:
    'Herd immunity is worth understanding. '
    + 'It turns vaccination from a private choice into a public one. '
    + 'Suppose enough people in a town are immune. '
    + 'A pathogen arriving cannot then find new hosts fast enough '
    + 'to keep spreading, and it dies out. '
    + 'So the newborn, too young to be vaccinated, are protected. '
    + 'So are those whose immune systems cannot respond. '
    + 'Everybody around them is the protection. '
    + 'The fraction needed depends on how easily the disease spreads. '
    + 'Measles spreads very easily, '
    + 'so the figure is above nine in ten. '
    + 'That is why measles returns to a district '
    + 'when coverage slips even a little, '
    + 'and it is the argument for a national programme.',

  figure: {
    alt: 'Two drawings. The upper one shows four routes of transmission '
      + 'as four separate paths from an infected person to a well one, '
      + 'each with the prevention that blocks it drawn as a barrier '
      + 'across the path. The water route runs through a well and is '
      + 'blocked by boiling and by siting the latrine away from the '
      + 'well. The vector route runs through a mosquito and is blocked '
      + 'by a treated net and by clearing standing water. The air route '
      + 'runs through droplets and is blocked by ventilation and '
      + 'covering a cough. The blood route is blocked by sterile needles '
      + 'and screened blood. A note says the route decides the '
      + 'prevention, so a net does nothing for cholera. The lower '
      + 'drawing is a graph of antibody level against time, with two '
      + 'exposures marked. After the first, the vaccine, the curve rises '
      + 'slowly to a low peak over about two weeks and then falls, with '
      + 'memory cells marked as remaining. After the second, the real '
      + 'pathogen, the curve rises very steeply to a much higher peak '
      + 'within days, marked as too fast for the person to become ill.',
    svg: '<svg viewBox="0 0 640 440" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* routes */
      + '<circle cx="50" cy="110" r="20" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="24" y="150" font-size="10" fill="currentColor">infected</text>'
      + '<circle cx="560" cy="110" r="20" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="540" y="150" font-size="10" fill="currentColor">well</text>'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M72 96C180 40 420 40 538 96"/>'
      + '<path d="M72 104C180 80 420 80 538 104"/>'
      + '<path d="M72 118C180 140 420 140 538 118"/>'
      + '<path d="M72 126C180 178 420 178 538 126"/>'
      + '</g>'
      + '<text x="200" y="46" font-size="9" fill="currentColor">water and food: cholera, typhoid</text>'
      + '<text x="200" y="76" font-size="9" fill="currentColor">a vector: malaria, in the mosquito</text>'
      + '<text x="200" y="152" font-size="9" fill="currentColor">air, in droplets: tuberculosis</text>'
      + '<text x="200" y="190" font-size="9" fill="currentColor">blood: hepatitis B, HIV</text>'
      /* barriers */
      + '<g stroke="#0f8a4d" stroke-width="4" fill="none">'
      + '<path d="M305 36v22"/><path d="M305 72v20"/><path d="M305 128v22"/><path d="M305 162v24"/>'
      + '</g>'
      + '<text x="316" y="34" font-size="9" fill="#0f8a4d">boil it; site the latrine away from the well</text>'
      + '<text x="316" y="64" font-size="9" fill="#0f8a4d">a treated net; clear standing water</text>'
      + '<text x="316" y="168" font-size="9" fill="#0f8a4d">ventilation; cover a cough</text>'
      + '<text x="316" y="206" font-size="9" fill="#0f8a4d">sterile needles; screened blood</text>'
      + '<text x="24" y="226" font-size="10" fill="#0f8a4d">the route decides the prevention, so a net does nothing at all for cholera</text>'
      /* graph */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M60 400V260"/><path d="M60 400h520"/>'
      + '</g>'
      + '<text x="66" y="254" font-size="10" fill="currentColor">antibody level</text>'
      + '<text x="540" y="418" font-size="10" fill="currentColor">time</text>'
      + '<path d="M120 400C160 398 190 356 220 360C250 364 270 388 320 394" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M380 400C392 396 400 282 414 278C430 274 450 360 520 390" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="2" stroke-dasharray="4 4" fill="none">'
      + '<path d="M120 400v-28"/><path d="M380 400v-110"/>'
      + '</g>'
      + '<text x="88" y="366" font-size="9" fill="currentColor">the vaccine</text>'
      + '<text x="150" y="344" font-size="9" fill="#0f8a4d">slow, and a low peak</text>'
      + '<text x="248" y="382" font-size="9" fill="#0f8a4d">memory cells remain</text>'
      + '<text x="346" y="280" font-size="9" fill="currentColor">the real pathogen</text>'
      + '<text x="430" y="268" font-size="9" fill="#0f8a4d">fast, and far higher: too fast</text>'
      + '<text x="430" y="282" font-size="9" fill="#0f8a4d">for the person to become ill</text>'
      + '<text x="24" y="432" font-size="10" fill="currentColor">a vaccine leaves an ability to respond, not a stock of antibodies</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Each disease by its route, and the prevention that blocks that route',
      columns: ['Disease', 'Pathogen group', 'Route', 'Prevention that works', 'Prevention that does not'],
      rows: [
        ['Cholera', 'Bacterium', 'Water and food', 'Boil water; latrines away from wells; wash hands', 'A mosquito net'],
        ['Typhoid', 'Bacterium', 'Water and food', 'The same, plus vaccination', 'A mosquito net'],
        ['Malaria', 'Protozoan', 'Female Anopheles mosquito', 'Treated net; clear standing water; treat cases', 'Boiling drinking water'],
        ['Tuberculosis', 'Bacterium', 'Air, in droplets', 'Ventilation; cover a cough; treat cases fully', 'Clean water alone'],
        ['Measles', 'Virus', 'Air, in droplets', 'Vaccination, with high coverage', 'Antibiotics'],
        ['Hepatitis B', 'Virus', 'Blood and body fluids', 'Vaccination; sterile needles; screened blood', 'Boiling drinking water'],
      ],
      note: 'The last column is the point of the table. '
        + 'Naming the route first makes the prevention follow, '
        + 'and makes a wrong answer impossible.',
    },
  ],

  questions: [
    {
      id: 'di-1',
      ask: 'Cholera is transmitted by:',
      kind: 'choice',
      options: ['Water and food', 'Mosquitoes', 'The air'],
      answer: 'Water and food',
      teach: 'So the prevention is clean water, sanitation and hand '
        + 'washing, not a net.',
      level: 3,
    },
    {
      id: 'di-2',
      ask: 'A vaccine protects a person by leaving behind:',
      kind: 'choice',
      options: [
        'Memory cells, which respond quickly later',
        'A lifelong stock of antibodies',
        'A weakened pathogen in the body',
      ],
      answer: 'Memory cells, which respond quickly later',
      teach: 'It leaves an ability to respond. '
        + 'That is why the second response is faster and larger.',
      level: 5,
    },
    {
      id: 'di-3',
      ask: 'Antibiotic resistance arises because:',
      kind: 'choice',
      options: [
        'The drug kills the rest and the resistant few multiply',
        'Bacteria learn to resist the drug',
        'The drug becomes weaker over time',
      ],
      answer: 'The drug kills the rest and the resistant few multiply',
      teach: 'No individual changes. '
        + 'That is selection, and the rules about finishing a course '
        + 'follow from it.',
      level: 6,
    },
    {
      id: 'di-4',
      ask: 'Tuberculosis spreads mainly by:',
      kind: 'choice',
      options: ['Air, in droplets', 'Water', 'A vector'],
      answer: 'Air, in droplets',
      teach: 'So ventilation and crowding are what matter, '
        + 'along with treating cases fully.',
      level: 4,
    },
    {
      id: 'di-5',
      ask: 'Herd immunity protects a newborn because:',
      kind: 'choice',
      options: [
        'The pathogen cannot find enough new hosts to keep spreading',
        'Antibodies pass through the air',
        'Newborns are naturally immune',
      ],
      answer: 'The pathogen cannot find enough new hosts to keep spreading',
      teach: 'Which is why coverage has to be high, '
        + 'and why measles returns when it slips.',
      level: 6,
    },
  ],
})
