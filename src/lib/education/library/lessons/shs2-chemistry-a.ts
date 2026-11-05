/**
 * Stored lessons for SHS 2 Elective Chemistry: the physical half.
 * Stoichiometry, solutions and titration, the gas laws, energy changes and
 * rates of reaction.
 *
 * Written at about grade 10, which is inside the SHS expectation of 10 to 12.
 *
 * ── The thread through these five ────────────────────────────────────────
 *
 * SHS 1 chemistry ended with the mole, which is the bridge from a balanced
 * equation to a balance that weighs in grams. These five are what that
 * bridge is for. Stoichiometry walks across it in both directions. A
 * titration is the same walk done with a burette instead of a balance. The
 * gas laws are the walk done by volume, which is the only way to count a
 * gas. Energy changes measure what the reaction gives out while it does
 * it, and rates measure how fast. So the whole of this file is one question
 * asked five ways: how much, and how quickly, and at what cost in heat.
 *
 * ── What has to be written down ──────────────────────────────────────────
 *
 * Chemistry marking schemes pay for named reasons and for shown working.
 * The mole ratio quoted from the equation, the limiting reagent named, the
 * temperature converted to kelvin on its own line, the sign of an enthalpy
 * change, the words frequency of collisions: these are where the marks sit,
 * and an answer that reaches the right number without them scores less than
 * a candidate expects.
 *
 * ── Apparatus a school may not own ───────────────────────────────────────
 *
 * The titration and calorimetry lessons are written so the examinable
 * calculation can be done with a pencil. Where a burette, a pipette or a
 * thermometer is genuinely needed, the lesson says so plainly instead of
 * pretending the cupboard is full.
 *
 * ── Notation ─────────────────────────────────────────────────────────────
 *
 * Mathematics and formulae are LaTeX between dollar signs. Captions, `alt`
 * text and table cells stay in words, since those are read aloud.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── stoichiometry ──────────────────────────────────────────────────────── */

teach({
  topicId: 'stoichiometry-chem',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A balanced equation is a recipe in moles, not in grams. '
      + 'So every calculation has the same three parts: turn what you were '
      + 'given into moles, use the ratio from the equation, then turn moles '
      + 'back into whatever the question asked for.',
    method: [
      'Balance the equation and write the mole ratio above it.',
      'Convert the given mass or volume to moles with $n = \\frac{m}{M}$.',
      'Multiply by the ratio, then convert back.',
    ],
  },

  why:
    'A woman in Kumasi makes soap from palm kernel oil and caustic soda. '
    + 'If she adds too little soda, the soap is soft and oily and will not '
    + 'set. '
    + 'If she adds too much, the extra soda stays in the bar and burns the '
    + 'hands of whoever buys it. '
    + 'She has a drum of oil of known weight in front of her. '
    + 'How many kilograms of soda does that exact drum need, and not one '
    + 'kilogram more?',

  notation:
    'The letter $n$ stands for the number of moles, and a mole is simply a '
    + 'counted number of particles, $6.02 \\times 10^{23}$ of them. '
    + 'The letter $M$ is the molar mass, the mass of one mole, in grams per '
    + 'mole. '
    + 'The letter $m$ is the mass you actually weighed, in grams. '
    + 'The numbers in front of the formulae in a balanced equation are '
    + 'called coefficients, and they are the mole ratio. '
    + 'They are never a mass ratio, and reading them as one is the single '
    + 'commonest error in the topic.',

  idea:
    'A balanced chemical equation states how many particles of each kind '
    + 'take part, so its coefficients are a ratio of moles. '
    + 'The three conversions that carry you in and out of moles are '
    + '$$n = \\frac{m}{M}, \\qquad n = CV, \\qquad '
    + 'n = \\frac{V_{\\text{gas}}}{22.4}$$ '
    + 'for mass in grams, for a solution with $V$ in cubic decimetres, and '
    + 'for a gas volume in cubic decimetres at standard temperature and '
    + 'pressure. '
    + 'When two reactants are both given, one of them runs out first. '
    + 'That one is the limiting reagent, it decides how much product forms, '
    + 'and it is found by dividing each reactant’s moles by its '
    + 'coefficient and taking the smaller answer. '
    + 'The product calculated this way is the theoretical yield. '
    + 'What a real flask gives is the actual yield, and '
    + '$$\\text{percentage yield} = \\frac{\\text{actual}}'
    + '{\\text{theoretical}} \\times 100.$$ '
    + 'Percentage purity works the same way, with the mass of the pure '
    + 'substance over the mass of the sample.',

  tables: [
    {
      caption: 'The four doors into moles and out again',
      columns: ['What you were given', 'To get moles', 'To go back'],
      rows: [
        ['A mass in grams', 'Divide by the molar mass', 'Multiply by the molar mass'],
        ['A volume of solution', 'Multiply concentration by volume in cubic decimetres',
          'Divide moles by the volume'],
        ['A volume of gas at standard conditions', 'Divide by 22.4 cubic decimetres',
          'Multiply by 22.4'],
        ['A number of particles', 'Divide by six times ten to the twenty three',
          'Multiply by the same number'],
      ],
      note: 'Every stoichiometry question is one of these four, then the '
        + 'mole ratio, then one of these four backwards. '
        + 'Nothing else happens.',
    },
    {
      caption: 'Finding the limiting reagent when 10 g of hydrogen meets 10 g of oxygen',
      columns: ['Reactant', 'Moles available', 'Coefficient', 'Moles divided by coefficient'],
      rows: [
        ['Hydrogen', '5.0', '2', '2.50'],
        ['Oxygen', '0.31', '1', '0.31'],
      ],
      note: 'Oxygen gives the smaller answer, so oxygen is limiting even '
        + 'though both masses are the same. '
        + 'Comparing the masses alone would have given the wrong one.',
    },
  ],

  figure: {
    alt: 'A flow chart in two rows. The upper row runs left to right from a '
      + 'box marked mass of the substance you were given, through an arrow '
      + 'labelled divide by its molar mass, into a box marked moles of that '
      + 'substance. From there an arrow labelled multiply by the mole ratio '
      + 'from the balanced equation leads right into a box marked moles of '
      + 'the substance you want. A final arrow labelled multiply by its '
      + 'molar mass leads into a box marked mass of what you want. The '
      + 'lower row shows two alternative entrances into the moles box: one '
      + 'from a box marked volume of solution with an arrow labelled '
      + 'multiply by the concentration, and one from a box marked volume of '
      + 'gas with an arrow labelled divide by twenty two point four. A note '
      + 'under the chart says that the only step that needs the equation is '
      + 'the middle one.',
    svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<rect x="20" y="40" width="110" height="56" rx="6"/>'
      + '<text x="75" y="64" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">mass you</text>'
      + '<text x="75" y="80" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">were given</text>'
      + '<line x1="130" y1="68" x2="210" y2="68" stroke="#b4531a"/>'
      + '<path d="M202 62 L214 68 L202 74" stroke="#b4531a"/>'
      + '<text x="170" y="36" font-size="11" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">divide by</text>'
      + '<text x="170" y="22" font-size="11" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">molar mass</text>'
      + '<rect x="214" y="40" width="110" height="56" rx="6" '
      + 'stroke="#1d4ed8"/>'
      + '<text x="269" y="64" font-size="12" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">moles of it</text>'
      + '<text x="269" y="80" font-size="12" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">you have</text>'
      + '<line x1="324" y1="68" x2="404" y2="68" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<path d="M396 62 L408 68 L396 74" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<text x="364" y="36" font-size="11" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">times the mole</text>'
      + '<text x="364" y="22" font-size="11" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">ratio</text>'
      + '<rect x="408" y="40" width="110" height="56" rx="6" '
      + 'stroke="#1d4ed8"/>'
      + '<text x="463" y="64" font-size="12" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">moles of what</text>'
      + '<text x="463" y="80" font-size="12" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">you want</text>'
      + '<line x1="518" y1="68" x2="580" y2="68" stroke="#b4531a"/>'
      + '<path d="M572 62 L584 68 L572 74" stroke="#b4531a"/>'
      + '<rect x="584" y="40" width="86" height="56" rx="6"/>'
      + '<text x="627" y="64" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">mass of</text>'
      + '<text x="627" y="80" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the answer</text>'
      + '<rect x="20" y="170" width="110" height="56" rx="6"/>'
      + '<text x="75" y="194" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">volume of</text>'
      + '<text x="75" y="210" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">solution</text>'
      + '<rect x="20" y="250" width="110" height="56" rx="6"/>'
      + '<text x="75" y="274" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">volume of</text>'
      + '<text x="75" y="290" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a gas</text>'
      + '<path d="M130 198 L214 110" stroke="#b4531a"/>'
      + '<path d="M206 112 L218 106 L212 118" stroke="#b4531a"/>'
      + '<text x="226" y="166" font-size="11" fill="#b4531a" '
      + 'stroke="none">times concentration</text>'
      + '<path d="M130 278 L214 120" stroke="#b4531a"/>'
      + '<path d="M208 124 L218 116 L216 130" stroke="#b4531a"/>'
      + '<text x="226" y="254" font-size="11" fill="#b4531a" '
      + 'stroke="none">divide by twenty two point four</text>'
      + '<text x="420" y="300" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'only the middle arrow needs the equation</text>'
      + '<text x="420" y="320" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'everything else is a unit change</text>'
      + '</svg>',
  },

  mechanism:
    'The whole topic rests on one sentence, and the sentence is the reason '
    + 'the mole exists at all. '
    + 'A balanced equation counts particles, and a balance weighs grams, so '
    + 'the two cannot be compared until the grams are converted into a '
    + 'count. '
    + 'Take '
    + '$2\\mathrm{H}_2 + \\mathrm{O}_2 \\rightarrow 2\\mathrm{H}_2\\mathrm{O}$. '
    + 'The equation says two particles of hydrogen to one of oxygen. '
    + 'It does not say two grams to one gram, and it is not even close: an '
    + 'oxygen molecule is sixteen times heavier than a hydrogen molecule, '
    + 'so the mass ratio that actually reacts is four grams of hydrogen to '
    + 'thirty two grams of oxygen. '
    + 'A candidate who feeds grams straight into the ratio is out by a '
    + 'factor of eight and has no way of noticing. '
    + 'So the first line of every answer in this topic is the conversion '
    + 'to moles, and it is worth a mark on its own. '
    + 'The limiting reagent is the same idea pushed one step. '
    + 'Suppose the soap maker has plenty of oil and only a little soda. '
    + 'The soda runs out, the reaction stops, and the leftover oil just '
    + 'sits there, so the soda is what decided the yield. '
    + 'To find which one runs out, do not compare the moles directly, '
    + 'because the equation may need three moles of one for every one of '
    + 'the other. '
    + 'Divide each reactant’s moles by its own coefficient, and the smaller '
    + 'answer is the limiting one. '
    + 'The table above shows why this matters: with equal masses of '
    + 'hydrogen and oxygen it is the oxygen that limits, which is the '
    + 'opposite of what the equal masses suggest. '
    + 'Then say so in words. '
    + 'An examination answer reads better and scores better for the '
    + 'sentence "oxygen is the limiting reagent, so the calculation is '
    + 'based on oxygen", because that sentence shows the decision was made '
    + 'rather than guessed. '
    + 'Three more places lose marks. '
    + 'The first is the molar mass itself: for '
    + '$\\mathrm{Ca(OH)}_2$ the two hydroxide groups give '
    + '$40 + 2(16 + 1) = 74$, and candidates who write $57$ have '
    + 'multiplied only the oxygen. '
    + 'Write the arithmetic out. '
    + 'The second is units of volume. '
    + 'A concentration in moles per cubic decimetre needs a volume in cubic '
    + 'decimetres, so $25\\ \\mathrm{cm}^3$ must become '
    + '$0.025\\ \\mathrm{dm}^3$ before it is used, and that conversion '
    + 'deserves its own line. '
    + 'The third is percentage yield upside down. '
    + 'The actual yield goes on top, because a real flask cannot beat the '
    + 'theory, so an answer above 100 per cent is a signal that the '
    + 'fraction was inverted. '
    + 'For the soap maker, the practical version of all this is called the '
    + 'saponification value, and it is printed on a drum of oil precisely '
    + 'so she does not have to do the stoichiometry herself. '
    + 'Somebody did it for her, in exactly the way set out above.',

  recap:
    'A chemical equation has to balance because atoms are not made or '
    + 'destroyed in a reaction, only rearranged. '
    + 'So the same number of each kind of atom appears on both sides. '
    + 'The mole is a way of counting particles by weighing them. '
    + 'One mole of any substance contains the same huge number of '
    + 'particles, and its mass in grams is the relative formula mass. '
    + 'One mole of water is 18 g. '
    + 'One mole of sodium hydroxide is 40 g. '
    + 'So weighing 40 g of sodium hydroxide is a way of counting out one '
    + 'mole of it without ever seeing a particle. '
    + 'This lesson uses that trick to answer questions about how much.',

  method: [
    'Write the balanced equation, and check each element on both sides.',
    'Write the mole ratio you will use above the two substances concerned.',
    'Convert what you were given into moles, on its own line.',
    'If two reactants are given, divide each by its coefficient and name the limiting one.',
    'Multiply the limiting moles by the ratio to get the moles of product.',
    'Convert back to the unit the question asked for.',
    'For yield, put the actual over the theoretical and check the answer is below 100.',
    'State the unit, and check the answer is a sensible size.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What mass of calcium oxide is formed when 50 g of calcium '
        + 'carbonate is heated completely? '
        + 'Take $\\mathrm{Ca} = 40$, $\\mathrm{C} = 12$, '
        + '$\\mathrm{O} = 16$.',
      steps: [
        { math: '\\mathrm{CaCO_3} \\rightarrow \\mathrm{CaO} + \\mathrm{CO_2}', why: 'One mole gives one mole, so the ratio is one to one.' },
        { math: 'M(\\mathrm{CaCO_3}) = 40 + 12 + 48 = 100' },
        { math: 'n = \\frac{50}{100} = 0.5\\ \\text{mol}' },
        { math: 'n(\\mathrm{CaO}) = 0.5\\ \\text{mol}' },
        { math: 'm = 0.5 \\times 56 = 28\\ \\text{g}' },
      ],
      answer: '$28$ g of calcium oxide. '
        + 'The missing $22$ g left as carbon dioxide, which is why a lime '
        + 'kiln loses weight.',
    },
    {
      level: 4,
      ask: 'What volume of carbon dioxide at standard temperature and '
        + 'pressure is produced when 25 g of calcium carbonate reacts with '
        + 'excess hydrochloric acid?',
      steps: [
        { math: '\\mathrm{CaCO_3} + 2\\mathrm{HCl} \\rightarrow \\mathrm{CaCl_2} + \\mathrm{H_2O} + \\mathrm{CO_2}' },
        { math: 'n(\\mathrm{CaCO_3}) = \\frac{25}{100} = 0.25\\ \\text{mol}' },
        'The acid is in excess, so the carbonate is limiting and the '
        + 'calculation is based on it. Say so.',
        { math: 'n(\\mathrm{CO_2}) = 0.25\\ \\text{mol}' },
        { math: 'V = 0.25 \\times 22.4 = 5.6\\ \\mathrm{dm^3}' },
      ],
      answer: '$5.6\\ \\mathrm{dm^3}$ of carbon dioxide.',
    },
    {
      level: 5,
      ask: '8.0 g of sodium hydroxide is added to 9.8 g of sulphuric acid. '
        + 'Which is limiting, and what mass of sodium sulphate forms? '
        + 'Take $\\mathrm{Na} = 23$, $\\mathrm{S} = 32$, '
        + '$\\mathrm{H} = 1$, $\\mathrm{O} = 16$.',
      steps: [
        { math: '2\\mathrm{NaOH} + \\mathrm{H_2SO_4} \\rightarrow \\mathrm{Na_2SO_4} + 2\\mathrm{H_2O}' },
        { math: 'n(\\mathrm{NaOH}) = \\frac{8.0}{40} = 0.20\\ \\text{mol}' },
        { math: 'n(\\mathrm{H_2SO_4}) = \\frac{9.8}{98} = 0.10\\ \\text{mol}' },
        { math: '\\frac{0.20}{2} = 0.10, \\qquad \\frac{0.10}{1} = 0.10', why: 'Divide each by its own coefficient. They are equal, so neither is in excess.' },
        { math: 'n(\\mathrm{Na_2SO_4}) = 0.10\\ \\text{mol}' },
        { math: 'm = 0.10 \\times 142 = 14.2\\ \\text{g}' },
      ],
      answer: 'Neither is limiting; they are mixed in exactly the ratio the '
        + 'equation wants, giving $14.2$ g of sodium sulphate. '
        + 'Saying that explicitly is what the question is testing.',
    },
    {
      level: 6,
      ask: 'A soap maker heats 50 kg of palm kernel oil, of average molar '
        + 'mass 700 g per mole, with sodium hydroxide. '
        + 'One mole of the oil needs three moles of hydroxide. '
        + 'The soda she buys is 95 per cent pure. '
        + 'What mass of that soda should she weigh out?',
      steps: [
        { math: 'n(\\text{oil}) = \\frac{50\\,000}{700} = 71.4\\ \\text{mol}', why: 'Convert kilograms to grams first.' },
        { math: 'n(\\mathrm{NaOH}) = 3 \\times 71.4 = 214\\ \\text{mol}', why: 'The mole ratio from the equation, three to one.' },
        { math: 'm = 214 \\times 40 = 8570\\ \\text{g}' },
        { math: 'm_{\\text{impure}} = \\frac{8570}{0.95} = 9020\\ \\text{g}', why: 'Only 95 per cent of what she weighs is soda, so she needs more of the bag, not less. Dividing is the check.' },
      ],
      answer: 'About $9.0$ kg of the soda she has. '
        + 'The impurity correction divides, and a candidate who multiplied '
        + 'by $0.95$ would have weighed out too little and made soft soap.',
    },
  ],

  traps: [
    {
      mistake: 'Using the coefficients as a ratio of masses.',
      why: 'They are a ratio of moles. '
        + 'Convert to moles first, every time, on its own line.',
    },
    {
      mistake: 'Picking the limiting reagent by comparing masses or moles directly.',
      why: 'Divide each reactant’s moles by its own coefficient. '
        + 'The smaller result is the limiting one.',
    },
    {
      mistake: 'Writing the molar mass of $\\mathrm{Ca(OH)_2}$ as 57.',
      why: 'The bracket covers both the oxygen and the hydrogen, so it is '
        + '$40 + 2(17) = 74$.',
    },
    {
      mistake: 'Reporting a percentage yield above 100.',
      why: 'The actual yield belongs on top. '
        + 'A value above 100 means the fraction was inverted, or the '
        + 'product was still wet.',
    },
    {
      mistake: 'Multiplying by the purity instead of dividing.',
      why: 'An impure sample has less of the substance per gram, so you '
        + 'need a bigger mass of it. '
        + 'Ask whether the answer should be larger or smaller before '
        + 'choosing.',
    },
  ],

  extension:
    'Yield answers one question: how much of my product did I get? '
    + 'Atom economy asks a harder one. '
    + 'Of all the mass I put into the pot, how much of it ended up in '
    + 'the thing I wanted? '
    + 'A reaction can give a 90 per cent yield and still waste half '
    + 'its mass as salt that nobody wants. '
    + 'Industrial chemists now design routes with both numbers in '
    + 'view, because the waste has to be paid for and carried away.',

  questions: [
    {
      id: 'st-1',
      ask: 'The coefficients in a balanced equation give the ratio of:',
      kind: 'choice',
      options: ['Moles', 'Masses in grams', 'Volumes of liquid'],
      answer: 'Moles',
      teach: 'They count particles. '
        + 'Grams have to be converted before the ratio can be used.',
      level: 3,
    },
    {
      id: 'st-2',
      ask: 'How many moles are there in 20 g of sodium hydroxide, molar '
        + 'mass 40 g per mole?',
      kind: 'numeric',
      options: [],
      answer: '0.5',
      teach: '$n = \\frac{m}{M} = \\frac{20}{40}$. '
        + 'Half a mole.',
      level: 3,
    },
    {
      id: 'st-3',
      ask: 'In $\\mathrm{N_2} + 3\\mathrm{H_2} \\rightarrow '
        + '2\\mathrm{NH_3}$, you have 1 mole of nitrogen and 2 moles of '
        + 'hydrogen. The limiting reagent is:',
      kind: 'choice',
      options: [
        'Hydrogen, because 2 divided by 3 is smaller than 1 divided by 1',
        'Nitrogen, because there is less of it',
        'Neither, they are in the right ratio',
      ],
      answer: 'Hydrogen, because 2 divided by 3 is smaller than 1 divided by 1',
      teach: 'Always divide by the coefficient before comparing. '
        + 'The reactant with fewer moles is not automatically the limiting '
        + 'one.',
      level: 5,
    },
    {
      id: 'st-4',
      ask: 'A reaction should give 20 g of product and gives 16 g. '
        + 'The percentage yield is:',
      kind: 'numeric',
      options: [],
      answer: '80',
      teach: 'Actual over theoretical, times 100. '
        + 'The answer must come out at or below 100.',
      level: 4,
    },
  ],
})

/* ── solutions and titration ────────────────────────────────────────────── */

teach({
  topicId: 'solutions-chem',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Concentration is the moles of solute in each cubic decimetre of '
      + 'solution. '
      + 'A titration finds a concentration you do not know. '
      + 'Run in a solution you do know, until the reaction is just '
      + 'complete. '
      + 'Note the volume that took. '
      + 'Then use the mole ratio from the equation.',
    method: [
      'Find the moles in the solution you know, with $n = CV$ and $V$ in cubic decimetres.',
      'Use the mole ratio from the balanced equation to get the moles of the unknown.',
      'Divide those moles by the unknown’s volume in cubic decimetres.',
    ],
  },

  why:
    'A trader at Kaneshie sells caustic soda solution from a drum, by the '
    + 'bottle, for soap makers. '
    + 'Two drums look exactly the same and both are labelled caustic soda. '
    + 'One has been standing open and has taken in water and air. '
    + 'A soap maker who uses the weak one by mistake gets soft soap, and '
    + 'the loss is hers. '
    + 'Nothing about the look, the weight or the smell separates the two '
    + 'drums. '
    + 'How do you find out how strong a solution is?',

  notation:
    'Concentration is written $C$ and has units of moles per cubic '
    + 'decimetre, written $\\mathrm{mol\\ dm^{-3}}$ and often said '
    + '"molar". '
    + 'One cubic decimetre is one litre, and it is 1000 cubic centimetres. '
    + 'A concentration can also be given in grams per cubic decimetre, and '
    + 'the two are connected by the molar mass: '
    + '$\\mathrm{g\\ dm^{-3}} = C \\times M$. '
    + 'A standard solution is one whose concentration is accurately known. '
    + 'The titre is the volume run out of the burette. '
    + 'Concordant titres are readings that agree within '
    + '$0.1\\ \\mathrm{cm^3}$, and only those are averaged. '
    + 'An aliquot is the fixed volume delivered by the pipette into the '
    + 'flask.',

  idea:
    'A solution is a solute dissolved in a solvent. '
    + 'Its concentration is $$C = \\frac{n}{V},$$ with $n$ in moles '
    + 'and $V$ in cubic decimetres. '
    + 'A standard solution is one made up carefully, so its '
    + 'concentration is known. '
    + 'You weigh the solute, dissolve it, and make it up to the mark '
    + 'in a volumetric flask. '
    + 'Diluting adds solvent but adds no solute. '
    + 'So the moles do not change, and $$C_1V_1 = C_2V_2. '
    + '$$ In a titration, a measured volume of one solution goes into '
    + 'a conical flask with a few drops of indicator. '
    + 'The other solution is run in from a burette. '
    + 'The end point is where the indicator just changes colour. '
    + 'At that moment the two have reacted in exactly the ratio the '
    + 'equation gives. '
    + 'So $$\\frac{C_aV_a}{C_bV_b} = \\frac{n_a}{n_b},$$ where $n_a$ '
    + 'and $n_b$ are the coefficients of the acid and the base. '
    + 'The indicator is chosen to change in the pH range where that '
    + 'end point falls.',

  tables: [
    {
      caption: 'Which indicator to use, and the colour change to watch for',
      columns: ['Indicator', 'Colour in acid', 'Colour in alkali', 'Best used for'],
      rows: [
        ['Methyl orange', 'Red', 'Yellow', 'Strong acid with weak base'],
        ['Phenolphthalein', 'Colourless', 'Pink', 'Weak acid with strong base'],
        ['Litmus', 'Red', 'Blue', 'Rough testing only, not titration'],
        ['Screened methyl orange', 'Red', 'Green', 'Strong acid with strong base'],
      ],
      note: 'Litmus is in the table to be ruled out: its change is too '
        + 'gradual to see an end point, which is why no titration uses it.',
    },
    {
      caption: 'What each piece of apparatus is for, and the error it guards against',
      columns: ['Apparatus', 'What it measures', 'Why that one'],
      rows: [
        ['Volumetric flask', 'One fixed total volume, very accurately',
          'Making up a standard solution to the mark'],
        ['Pipette', 'One fixed volume, very accurately',
          'The aliquot has to be the same every time'],
        ['Burette', 'Any volume, read to a tenth of a cubic centimetre',
          'The titre is unknown until you find it'],
        ['Measuring cylinder', 'A volume roughly', 'Never used in a titration'],
      ],
      note: 'The last row is the one examiners ask about. '
        + 'A measuring cylinder is not accurate enough for any part of a '
        + 'titration.',
    },
  ],

  figure: {
    alt: 'A titration set up drawn from the front. A tall burette is held '
      + 'in a clamp on a stand, its tap at the bottom, with the scale '
      + 'marked zero at the top and fifty at the bottom and a note saying '
      + 'the burette holds the solution of known concentration. Below it '
      + 'sits a conical flask on a white tile, containing liquid, labelled '
      + 'twenty five cubic centimetres delivered by pipette, with a note '
      + 'saying the white tile makes the colour change easier to see. A '
      + 'pipette with a bulb in the middle is drawn beside the stand and '
      + 'labelled as the tool that delivered the fixed aliquot. An arrow '
      + 'from the burette tap down into the flask is labelled run in slowly '
      + 'near the end point, drop by drop.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="60" y1="370" x2="200" y2="370" stroke-width="4"/>'
      + '<line x1="80" y1="370" x2="80" y2="40"/>'
      + '<line x1="80" y1="90" x2="150" y2="90"/>'
      + '<rect x="150" y="50" width="26" height="190"/>'
      + '<line x1="163" y1="240" x2="163" y2="262"/>'
      + '<path d="M156 262 L170 262 L163 274 Z" stroke="currentColor"/>'
      + '<line x1="150" y1="70" x2="160" y2="70"/>'
      + '<line x1="150" y1="110" x2="160" y2="110"/>'
      + '<line x1="150" y1="150" x2="160" y2="150"/>'
      + '<line x1="150" y1="190" x2="160" y2="190"/>'
      + '<line x1="150" y1="230" x2="160" y2="230"/>'
      + '<text x="184" y="56" font-size="11" fill="currentColor" '
      + 'stroke="none">0</text>'
      + '<text x="184" y="244" font-size="11" fill="currentColor" '
      + 'stroke="none">50</text>'
      + '<text x="196" y="150" font-size="12" fill="#1d4ed8" '
      + 'stroke="none">burette: the solution</text>'
      + '<text x="196" y="166" font-size="12" fill="#1d4ed8" '
      + 'stroke="none">whose strength you know</text>'
      + '<line x1="163" y1="280" x2="163" y2="300" stroke="#b4531a"/>'
      + '<path d="M157 292 L163 304 L169 292" stroke="#b4531a"/>'
      + '<text x="196" y="298" font-size="12" fill="#b4531a" '
      + 'stroke="none">add drop by drop near the end</text>'
      + '<path d="M136 310 L163 356 L190 310 Z"/>'
      + '<path d="M146 328 L163 356 L180 328 Z" fill="#f0b5c8" '
      + 'fill-opacity="0.6" stroke="none"/>'
      + '<line x1="156" y1="304" x2="170" y2="304" stroke-width="3"/>'
      + '<rect x="120" y="356" width="86" height="10" fill="none"/>'
      + '<text x="214" y="344" font-size="12" fill="currentColor" '
      + 'stroke="none">flask: 25 cubic centimetres</text>'
      + '<text x="214" y="360" font-size="12" fill="currentColor" '
      + 'stroke="none">from the pipette, plus indicator</text>'
      + '<text x="214" y="378" font-size="12" fill="currentColor" '
      + 'stroke="none">on a white tile, to see the change</text>'
      + '<line x1="470" y1="40" x2="470" y2="120"/>'
      + '<line x1="484" y1="40" x2="484" y2="120"/>'
      + '<path d="M470 120 Q450 160 470 200" />'
      + '<path d="M484 120 Q504 160 484 200" />'
      + '<path d="M470 200 Q450 240 470 280" />'
      + '<path d="M484 200 Q504 240 484 280" />'
      + '<line x1="470" y1="280" x2="470" y2="330"/>'
      + '<line x1="484" y1="280" x2="484" y2="330"/>'
      + '<path d="M470 330 L477 346 L484 330" />'
      + '<line x1="462" y1="150" x2="492" y2="150" stroke-dasharray="3 3" '
      + 'stroke-opacity="0.6"/>'
      + '<text x="516" y="154" font-size="12" fill="currentColor" '
      + 'stroke="none">the mark</text>'
      + '<text x="520" y="250" font-size="12" fill="currentColor" '
      + 'stroke="none">pipette: one</text>'
      + '<text x="520" y="266" font-size="12" fill="currentColor" '
      + 'stroke="none">fixed volume only</text>'
      + '</svg>',
  },

  mechanism:
    'A titration is not really a volume measurement. '
    + 'It is a way of counting moles that you cannot weigh, and seeing it '
    + 'that way settles every step of the method. '
    + 'You know the concentration of one solution exactly, so you know how '
    + 'many moles are in any volume of it. '
    + 'You run it in until the reaction is just complete. '
    + 'At that moment the moles that went in and the moles that were '
    + 'waiting in the flask stand in exactly the ratio the balanced '
    + 'equation demands, which is the only reason the calculation works. '
    + 'So the three lines of the answer are always the same: moles of the '
    + 'known, times the ratio, divided by the volume of the unknown. '
    + 'Why a pipette for the flask and a burette for the drip? '
    + 'Because the aliquot has to be identical in every run, so an '
    + 'instrument that delivers one fixed volume very accurately is right, '
    + 'while the titre is the thing being discovered, so it needs an '
    + 'instrument that can measure any volume. '
    + 'A measuring cylinder can do neither job well and has no place in the '
    + 'experiment. '
    + 'Four places lose marks. '
    + 'The first is the volume unit. '
    + '$25.0\\ \\mathrm{cm^3}$ is $0.0250\\ \\mathrm{dm^3}$, and a '
    + 'candidate who forgets the thousand is out by a factor of a thousand '
    + 'in a question where the right answer is usually about one. '
    + 'Put the conversion on its own line. '
    + 'The second is the mole ratio. '
    + 'Sulphuric acid is dibasic, so '
    + '$\\mathrm{H_2SO_4} + 2\\mathrm{NaOH} \\rightarrow '
    + '\\mathrm{Na_2SO_4} + 2\\mathrm{H_2O}$ '
    + 'needs two moles of alkali for every one of acid. '
    + 'Treating it like hydrochloric acid halves or doubles the answer, and '
    + 'it is the mistake examiners build the question around. '
    + 'The third is averaging the titres. '
    + 'The first run is a rough one and is discarded, and only readings '
    + 'within $0.1\\ \\mathrm{cm^3}$ of each other are averaged. '
    + 'Averaging a rough titre in with concordant ones pulls the answer '
    + 'off, and a question asking why the first titre is ignored wants the '
    + 'word rough. '
    + 'The fourth is rinsing. '
    + 'The burette is rinsed with the solution it will hold, because water '
    + 'left inside would dilute it; the conical flask may be rinsed with '
    + 'water, because adding water to the flask does not change the number '
    + 'of moles sitting in it. '
    + 'That asymmetry is a favourite question and the reason for it is '
    + 'exactly the sentence just given. '
    + 'A note on apparatus. '
    + 'A burette, a pipette and a volumetric flask are the heart of this '
    + 'topic and a school without them cannot do the practical. '
    + 'The calculation, the choice of indicator, the reasons for rinsing '
    + 'and the reading of a results table can all be learned from paper, '
    + 'and past question tables of titres are the right way to practise. '
    + 'What paper cannot teach is the hand that turns the tap, and the '
    + 'judgement of the single drop that turns the flask faintly pink and '
    + 'stays.',

  recap:
    'When sugar dissolves in water the sugar is the solute and the water '
    + 'is the solvent, and together they are a solution. '
    + 'Two spoons of sugar in the same cup makes a stronger solution than '
    + 'one spoon. '
    + 'Strength measured properly is called concentration, and in '
    + 'chemistry it is measured in moles of solute per cubic decimetre of '
    + 'solution. '
    + 'You also know that an acid and an alkali cancel each other out, '
    + 'which is called neutralisation, and that an indicator changes colour '
    + 'to show which one is winning. '
    + 'This lesson uses that colour change as a signal to measure by.',

  method: [
    'Write the balanced equation and note the mole ratio of acid to base.',
    'Convert every volume from cubic centimetres to cubic decimetres.',
    'Find the moles in the solution whose concentration you know, with $n = CV$.',
    'Multiply by the ratio to get the moles of the unknown.',
    'Divide by the volume of the unknown to get its concentration.',
    'If grams per cubic decimetre is wanted, multiply by the molar mass.',
    'Discard the rough titre and average only the concordant ones.',
    'Quote the answer to three significant figures, with its unit.',
  ],

  worked: [
    {
      level: 3,
      ask: 'What is the concentration of a solution made by dissolving '
        + '4.0 g of sodium hydroxide in water and making up to '
        + '$250\\ \\mathrm{cm^3}$?',
      steps: [
        { math: 'n = \\frac{4.0}{40} = 0.10\\ \\text{mol}' },
        { math: 'V = \\frac{250}{1000} = 0.250\\ \\mathrm{dm^3}', why: 'Convert before dividing, as its own line.' },
        { math: 'C = \\frac{0.10}{0.250} = 0.40\\ \\mathrm{mol\\ dm^{-3}}' },
      ],
      answer: '$0.40\\ \\mathrm{mol\\ dm^{-3}}$.',
    },
    {
      level: 4,
      ask: '$25.0\\ \\mathrm{cm^3}$ of sodium hydroxide needed '
        + '$20.0\\ \\mathrm{cm^3}$ of $0.100\\ \\mathrm{mol\\ dm^{-3}}$ '
        + 'hydrochloric acid to neutralise it. '
        + 'Find the concentration of the alkali.',
      steps: [
        { math: '\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H_2O}', why: 'One mole to one mole.' },
        { math: 'n(\\mathrm{HCl}) = 0.100 \\times 0.0200 = 2.00 \\times 10^{-3}\\ \\text{mol}' },
        { math: 'n(\\mathrm{NaOH}) = 2.00 \\times 10^{-3}\\ \\text{mol}' },
        { math: 'C = \\frac{2.00 \\times 10^{-3}}{0.0250} = 0.0800\\ \\mathrm{mol\\ dm^{-3}}' },
      ],
      answer: '$0.0800\\ \\mathrm{mol\\ dm^{-3}}$.',
    },
    {
      level: 5,
      ask: '$25.0\\ \\mathrm{cm^3}$ of sodium hydroxide needed '
        + '$15.0\\ \\mathrm{cm^3}$ of $0.100\\ \\mathrm{mol\\ dm^{-3}}$ '
        + 'sulphuric acid. '
        + 'Find the concentration of the alkali in moles per cubic '
        + 'decimetre and in grams per cubic decimetre.',
      steps: [
        { math: '\\mathrm{H_2SO_4} + 2\\mathrm{NaOH} \\rightarrow \\mathrm{Na_2SO_4} + 2\\mathrm{H_2O}', why: 'Sulphuric acid is dibasic, so the ratio is one to two. This is the whole point of the question.' },
        { math: 'n(\\mathrm{H_2SO_4}) = 0.100 \\times 0.0150 = 1.50 \\times 10^{-3}\\ \\text{mol}' },
        { math: 'n(\\mathrm{NaOH}) = 2 \\times 1.50 \\times 10^{-3} = 3.00 \\times 10^{-3}\\ \\text{mol}' },
        { math: 'C = \\frac{3.00 \\times 10^{-3}}{0.0250} = 0.120\\ \\mathrm{mol\\ dm^{-3}}' },
        { math: '0.120 \\times 40 = 4.80\\ \\mathrm{g\\ dm^{-3}}', why: 'Multiply by the molar mass to change the unit.' },
      ],
      answer: '$0.120\\ \\mathrm{mol\\ dm^{-3}}$, which is '
        + '$4.80\\ \\mathrm{g\\ dm^{-3}}$. '
        + 'Forgetting the factor of two would have given $0.0600$, half the '
        + 'true value.',
    },
    {
      level: 6,
      ask: 'A trader’s caustic soda is too strong to titrate directly, so '
        + '$25.0\\ \\mathrm{cm^3}$ of it is made up to '
        + '$250\\ \\mathrm{cm^3}$ with water. '
        + '$25.0\\ \\mathrm{cm^3}$ of the diluted solution then needs '
        + '$22.5\\ \\mathrm{cm^3}$ of '
        + '$0.100\\ \\mathrm{mol\\ dm^{-3}}$ hydrochloric acid. '
        + 'Find the concentration of the original drum.',
      steps: [
        { math: 'n(\\mathrm{HCl}) = 0.100 \\times 0.0225 = 2.25 \\times 10^{-3}\\ \\text{mol}' },
        { math: 'C_{\\text{dilute}} = \\frac{2.25 \\times 10^{-3}}{0.0250} = 0.0900\\ \\mathrm{mol\\ dm^{-3}}' },
        { math: 'C_1V_1 = C_2V_2', why: 'Dilution adds water, not solute, so the moles are unchanged.' },
        { math: 'C_1 \\times 25.0 = 0.0900 \\times 250' },
        { math: 'C_1 = 0.900\\ \\mathrm{mol\\ dm^{-3}}' },
      ],
      answer: '$0.900\\ \\mathrm{mol\\ dm^{-3}}$, ten times the diluted '
        + 'value, because the dilution was ten fold. '
        + 'Checking that the factor matches the dilution is the quickest '
        + 'way to catch an inverted calculation.',
    },
  ],

  traps: [
    {
      mistake: 'Leaving a volume in cubic centimetres.',
      why: 'Concentration is per cubic decimetre, so divide by 1000 first, '
        + 'on its own line.',
    },
    {
      mistake: 'Using a one to one ratio for sulphuric acid.',
      why: 'It is dibasic: one mole needs two moles of a monobasic alkali. '
        + 'Write the equation before the arithmetic.',
    },
    {
      mistake: 'Averaging the rough titre with the concordant ones.',
      why: 'The first run overshoots on purpose, to find the region. '
        + 'Discard it and average only readings within '
        + '$0.1\\ \\mathrm{cm^3}$.',
    },
    {
      mistake: 'Rinsing the burette with water and leaving it wet.',
      why: 'Water left in the burette dilutes the solution it will hold. '
        + 'Rinse the burette with that solution. '
        + 'Water in the conical flask is harmless, because it adds no '
        + 'moles.',
    },
    {
      mistake: 'Using litmus as the indicator.',
      why: 'Its change is too gradual to fix an end point. '
        + 'Use methyl orange or phenolphthalein, chosen for the pair being '
        + 'titrated.',
    },
  ],

  extension:
    'Not every titration is an acid against a base. '
    + 'A redox titration measures iron with potassium manganate. '
    + 'The manganate is deep purple and turns colourless as it '
    + 'reacts, so it acts as its own indicator and none need be '
    + 'added. '
    + 'This is how the iron in a water sample or in a tablet is '
    + 'measured. '
    + 'The arithmetic is exactly the arithmetic of this lesson. '
    + 'Only the mole ratio is different, because it comes from a '
    + 'redox equation, and that is the SHS 3 work.',

  questions: [
    {
      id: 'sol-1',
      ask: 'A volume of $50\\ \\mathrm{cm^3}$ expressed in cubic '
        + 'decimetres is:',
      kind: 'numeric',
      options: [],
      answer: '0.05',
      teach: 'Divide by 1000. '
        + 'Doing this on its own line prevents the commonest error in the '
        + 'topic.',
      level: 3,
    },
    {
      id: 'sol-2',
      ask: 'The burette is rinsed with the solution it will contain rather '
        + 'than with water because:',
      kind: 'choice',
      options: [
        'Water left inside would dilute that solution',
        'Water would react with it',
        'The glass must be dry to read the scale',
      ],
      answer: 'Water left inside would dilute that solution',
      teach: 'Water in the conical flask is harmless, because it adds no '
        + 'moles to what is already measured out there.',
      level: 5,
    },
    {
      id: 'sol-3',
      ask: 'How many moles are in $20\\ \\mathrm{cm^3}$ of '
        + '$0.5\\ \\mathrm{mol\\ dm^{-3}}$ solution?',
      kind: 'numeric',
      options: [],
      answer: '0.01',
      teach: '$n = CV = 0.5 \\times 0.020$. '
        + 'Convert the volume first.',
      level: 4,
    },
    {
      id: 'sol-4',
      ask: 'One mole of sulphuric acid neutralises how many moles of sodium '
        + 'hydroxide?',
      kind: 'numeric',
      options: [],
      answer: '2',
      teach: 'Sulphuric acid is dibasic, so it supplies two moles of '
        + 'hydrogen ions per mole of acid.',
      level: 5,
    },
  ],
})

/* ── gas laws ───────────────────────────────────────────────────────────── */

teach({
  topicId: 'gas-laws-chem',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'For a fixed mass of gas, '
      + '$\\frac{PV}{T}$ stays constant, with $T$ in kelvin always. '
      + 'And one mole of any gas occupies the same volume under the same '
      + 'conditions, $22.4\\ \\mathrm{dm^3}$ at standard temperature and '
      + 'pressure, which is how a gas is counted.',
    method: [
      'Convert every temperature to kelvin by adding 273, on its own line.',
      'Put the two states either side of $\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$.',
      'For moles, divide the volume at standard conditions by 22.4.',
    ],
  },

  why:
    'A driver leaving Tema in the early morning pumps his tyres to the '
    + 'right pressure. '
    + 'By midday, after three hours on the motorway in the sun, the gauge '
    + 'reads noticeably higher, and he has added no air at all. '
    + 'The same afternoon a gas cylinder left lying in the sun behind a '
    + 'chop bar is a thing every cook is warned about. '
    + 'Nothing has been added to the tyre or the cylinder. '
    + 'So what has the heat done, and can you work out how much?',

  notation:
    'Pressure $P$ may be given in atmospheres, in pascals, or in '
    + 'millimetres of mercury, and the units only have to match on the two '
    + 'sides of the equation. '
    + 'Volume $V$ is usually in cubic decimetres or cubic centimetres, and '
    + 'again the two sides must match. '
    + 'Temperature $T$ is different: it must be in kelvin, and there is no '
    + 'choice about it. '
    + 'To convert, add 273 to a Celsius temperature. '
    + 'A kelvin is written K with no degree sign, so 300 K and not 300 '
    + 'degrees K. '
    + 'Standard temperature and pressure, written s.t.p., means 273 K and '
    + 'one atmosphere, where the molar volume is '
    + '$22.4\\ \\mathrm{dm^3}$. '
    + 'Room temperature and pressure, r.t.p., means about 298 K, where the '
    + 'molar volume is about $24\\ \\mathrm{dm^3}$, and a question will say '
    + 'which it wants.',

  idea:
    'Boyle’s law says that at constant temperature the volume of a fixed '
    + 'mass of gas is inversely proportional to its pressure, so '
    + '$P_1V_1 = P_2V_2$. '
    + 'Charles’s law says that at constant pressure the volume is directly '
    + 'proportional to the absolute temperature, so '
    + '$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$. '
    + 'The pressure law says that at constant volume the pressure is '
    + 'directly proportional to the absolute temperature. '
    + 'Putting all three together gives the general gas equation '
    + '$$\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2},$$ '
    + 'and with the mole it becomes the ideal gas equation '
    + '$$PV = nRT,$$ '
    + 'where $R$ is $8.31\\ \\mathrm{J\\ K^{-1}\\ mol^{-1}}$ with pressure '
    + 'in pascals and volume in cubic metres. '
    + 'Avogadro’s law says equal volumes of gases under the same '
    + 'conditions hold equal numbers of molecules, which is why one mole of '
    + 'any gas fills $22.4\\ \\mathrm{dm^3}$ at s.t.p. '
    + 'That single number turns a measured volume of gas into a count of '
    + 'moles, and that is what the gas laws are for in chemistry.',

  tables: [
    {
      caption: 'The three gas laws, what is held fixed in each, and the graph each gives',
      columns: ['Law', 'Held constant', 'Relationship', 'Straight line graph'],
      rows: [
        ['Boyle', 'Temperature', 'Volume falls as pressure rises',
          'Volume against one over pressure'],
        ['Charles', 'Pressure', 'Volume rises with absolute temperature',
          'Volume against temperature in kelvin'],
        ['Pressure law', 'Volume', 'Pressure rises with absolute temperature',
          'Pressure against temperature in kelvin'],
      ],
      note: 'Each graph is a straight line only when the axis is the right '
        + 'one. '
        + 'Volume against pressure is a curve, and volume against degrees '
        + 'Celsius does not pass through the origin.',
    },
    {
      caption: 'Converting between Celsius and kelvin for temperatures that appear in questions',
      columns: ['Degrees Celsius', 'Kelvin', 'Where it comes up'],
      rows: [
        ['Minus 273', '0', 'Absolute zero, where a gas would have no volume'],
        ['0', '273', 'Standard temperature, s.t.p.'],
        ['25', '298', 'Room temperature, r.t.p.'],
        ['27', '300', 'A convenient number examiners like'],
        ['100', '373', 'Boiling water'],
      ],
      note: 'Add 273 and never subtract it. '
        + 'A temperature that has not been converted is the error that '
        + 'spoils more gas law answers than all the others together.',
    },
  ],

  figure: {
    alt: 'Two graphs side by side. The left graph has volume up the '
      + 'vertical axis and one over pressure along the horizontal axis, '
      + 'with a straight line through the origin, labelled Boyle’s law '
      + 'gives a straight line only when plotted against one over '
      + 'pressure, and a small inset curve beside it shows volume against '
      + 'pressure as a falling curve that never touches either axis. The '
      + 'right graph has volume up the vertical axis and temperature along '
      + 'the horizontal axis, marked in degrees Celsius from minus three '
      + 'hundred to one hundred, with a straight line drawn through the '
      + 'measured points and extended backwards as a dashed line that '
      + 'reaches zero volume at minus two hundred and seventy three '
      + 'degrees, labelled absolute zero, with a note saying this is why '
      + 'the kelvin scale starts there.',
    svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="50" y1="250" x2="290" y2="250"/>'
      + '<line x1="50" y1="250" x2="50" y2="50"/>'
      + '<line x1="50" y1="250" x2="260" y2="80" stroke="#1d4ed8"/>'
      + '<text x="30" y="46" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">V</text>'
      + '<text x="300" y="256" font-size="12" fill="currentColor" '
      + 'stroke="none">1 over P</text>'
      + '<text x="170" y="286" font-size="12" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">Boyle: straight through</text>'
      + '<text x="170" y="302" font-size="12" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">the origin on these axes</text>'
      + '<line x1="176" y1="140" x2="176" y2="212"/>'
      + '<line x1="176" y1="212" x2="266" y2="212"/>'
      + '<path d="M186 146 Q206 206 262 208" stroke="#b4531a"/>'
      + '<text x="222" y="134" font-size="11" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">V against P</text>'
      + '<line x1="390" y1="250" x2="660" y2="250"/>'
      + '<line x1="470" y1="250" x2="470" y2="50"/>'
      + '<line x1="390" y1="250" x2="640" y2="80" stroke="#0f8a4d" '
      + 'stroke-dasharray="5 4"/>'
      + '<line x1="500" y1="189" x2="640" y2="80" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<circle cx="510" cy="181" r="3" fill="#0f8a4d" stroke="none"/>'
      + '<circle cx="560" cy="142" r="3" fill="#0f8a4d" stroke="none"/>'
      + '<circle cx="610" cy="103" r="3" fill="#0f8a4d" stroke="none"/>'
      + '<circle cx="390" cy="250" r="4" stroke="#b4531a"/>'
      + '<text x="450" y="46" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">V</text>'
      + '<text x="470" y="270" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">0</text>'
      + '<text x="390" y="270" font-size="11" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">minus 273</text>'
      + '<text x="648" y="270" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">100</text>'
      + '<text x="560" y="286" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">temperature in degrees Celsius</text>'
      + '<text x="500" y="302" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">the dashed line reaches zero volume at absolute zero</text>'
      + '</svg>',
  },

  mechanism:
    'Every gas law is one sentence about molecules, and once you can say '
    + 'that sentence you do not have to remember which law is which. '
    + 'Pressure is caused by molecules hitting the walls, so the pressure '
    + 'depends on how often they hit and how hard. '
    + 'Squeeze the gas into half the space and each molecule has half as '
    + 'far to travel between walls, so it hits twice as often and the '
    + 'pressure doubles, which is Boyle’s law. '
    + 'Heat the gas and the molecules move faster, so they hit more often '
    + 'and harder, and either the pressure rises or the gas must expand to '
    + 'keep it the same, which is Charles’s law and the pressure law. '
    + 'That is the tyre and the cylinder. '
    + 'The tyre cannot expand much, so the sun’s heat shows up almost '
    + 'entirely as pressure, and the gauge reads higher. '
    + 'The cylinder cannot expand at all, which is exactly why it is '
    + 'dangerous in the sun, and a calculation can show how dangerous: a '
    + 'rise from 300 K to 330 K is a tenth more absolute temperature and '
    + 'therefore a tenth more pressure on a wall that was designed with a '
    + 'margin, not with a free gift. '
    + 'Why must the temperature be in kelvin? '
    + 'Because the law says volume is proportional to temperature, and '
    + 'proportional means doubling one doubles the other. '
    + 'Twenty degrees Celsius is not twice ten degrees Celsius in any '
    + 'physical sense, because the zero of that scale was chosen for the '
    + 'convenience of water, not for the molecules. '
    + 'Plot volume against degrees Celsius, as the right hand graph above '
    + 'does, and the straight line misses the origin and cuts the axis at '
    + 'minus 273. '
    + 'That intercept is absolute zero: the temperature at which the '
    + 'molecules would have no energy and the gas no volume at all. '
    + 'Move the zero of the scale to that point and the line passes through '
    + 'the origin, and the law becomes a true proportion. '
    + 'So the kelvin scale is not an extra conversion imposed on learners. '
    + 'It is the scale on which the law is actually true. '
    + 'This is the one place where a candidate who understands the reason '
    + 'simply never makes the mistake. '
    + 'Three other places lose marks. '
    + 'The first is mixing units across the equation: pressure in '
    + 'atmospheres on the left and pascals on the right. '
    + 'They need not be SI units, but they must be the same units. '
    + 'The second is using $22.4\\ \\mathrm{dm^3}$ at room temperature. '
    + 'That number belongs to s.t.p.; at r.t.p. it is about '
    + '$24\\ \\mathrm{dm^3}$, and a question that says room conditions is '
    + 'testing whether you noticed. '
    + 'The third is applying the molar volume to a liquid or a solid. '
    + 'It is a property of gases only, and it holds because the molecules '
    + 'of a gas are so far apart that their own size does not matter, which '
    + 'is also the reason the laws begin to fail at very high pressure.',

  recap:
    'A gas has no shape of its own. '
    + 'It fills whatever container it is in, and it can be squeezed into a '
    + 'smaller space, which a liquid cannot. '
    + 'That is because its particles are far apart and moving fast in all '
    + 'directions. '
    + 'They hit the walls of the container constantly, and the force of '
    + 'all those hits spread over the area of the wall is what we call '
    + 'pressure. '
    + 'Heat a gas and its particles move faster. '
    + 'Squeeze it and they are closer together. '
    + 'This lesson turns those two sentences into equations you can '
    + 'calculate with.',

  method: [
    'List the pressure, volume and temperature in each of the two states.',
    'Convert both temperatures to kelvin by adding 273, on its own line.',
    'Check that pressures match each other, and volumes match each other.',
    'Cancel anything held constant, then substitute into $\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$.',
    'Make the unknown the subject before putting numbers in.',
    'For moles of a gas, divide its volume by 22.4 at s.t.p. or 24 at r.t.p.',
    'For $PV = nRT$, use pascals and cubic metres.',
    'Check the direction: hotter should mean bigger volume or higher pressure.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A gas occupies $300\\ \\mathrm{cm^3}$ at 2 atmospheres. '
        + 'What volume will it occupy at 3 atmospheres, the temperature '
        + 'being unchanged?',
      steps: [
        { math: 'P_1V_1 = P_2V_2', why: 'Temperature is constant, so this is Boyle’s law.' },
        { math: '2 \\times 300 = 3 \\times V_2' },
        { math: 'V_2 = 200\\ \\mathrm{cm^3}' },
      ],
      answer: '$200\\ \\mathrm{cm^3}$. '
        + 'More pressure gives a smaller volume, which is the check.',
    },
    {
      level: 4,
      ask: 'A tyre holds air at 2.0 atmospheres at 27 degrees Celsius in '
        + 'the morning. '
        + 'By midday the air inside is at 57 degrees Celsius. '
        + 'The volume is unchanged. '
        + 'Find the new pressure.',
      steps: [
        { math: 'T_1 = 27 + 273 = 300\\ \\text{K}, \\quad T_2 = 57 + 273 = 330\\ \\text{K}', why: 'Convert first. Using 27 and 57 would give a completely wrong ratio.' },
        { math: '\\frac{P_1}{T_1} = \\frac{P_2}{T_2}', why: 'Volume is constant, so this is the pressure law.' },
        { math: 'P_2 = 2.0 \\times \\frac{330}{300}' },
        { math: 'P_2 = 2.2\\ \\text{atm}' },
      ],
      answer: '$2.2$ atmospheres. '
        + 'Ten per cent more, from a thirty degree rise, and the gauge '
        + 'shows it.',
    },
    {
      level: 5,
      ask: '$400\\ \\mathrm{cm^3}$ of a gas at 27 degrees Celsius and '
        + '700 mm of mercury is brought to s.t.p. '
        + 'Find its new volume.',
      steps: [
        { math: 'T_1 = 300\\ \\text{K}, \\quad T_2 = 273\\ \\text{K}' },
        { math: '\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}' },
        { math: 'V_2 = \\frac{P_1V_1T_2}{T_1P_2} = \\frac{700 \\times 400 \\times 273}{300 \\times 760}', why: 'Standard pressure is 760 mm of mercury, so both pressures are in the same unit.' },
        { math: 'V_2 = 335\\ \\mathrm{cm^3}' },
      ],
      answer: 'About $335\\ \\mathrm{cm^3}$. '
        + 'Both the cooling and the higher pressure shrink it, so a smaller '
        + 'answer was expected.',
    },
    {
      level: 6,
      ask: 'Excess hydrochloric acid is added to 5.0 g of calcium '
        + 'carbonate. '
        + 'Find the volume of carbon dioxide collected at 27 degrees '
        + 'Celsius and one atmosphere. '
        + 'Take the molar volume at s.t.p. as '
        + '$22.4\\ \\mathrm{dm^3}$.',
      steps: [
        { math: 'n(\\mathrm{CaCO_3}) = \\frac{5.0}{100} = 0.050\\ \\text{mol}' },
        { math: 'n(\\mathrm{CO_2}) = 0.050\\ \\text{mol}', why: 'One mole of carbonate gives one mole of gas.' },
        { math: 'V_{\\text{s.t.p.}} = 0.050 \\times 22.4 = 1.12\\ \\mathrm{dm^3}' },
        { math: 'V_2 = 1.12 \\times \\frac{300}{273}', why: 'Pressure is unchanged, so only Charles’s law is needed to move from 273 K to 300 K.' },
        { math: 'V_2 = 1.23\\ \\mathrm{dm^3}' },
      ],
      answer: 'About $1.23\\ \\mathrm{dm^3}$. '
        + 'This is the standard WASSCE shape: stoichiometry to get the '
        + 'moles, the molar volume to get a volume, then the gas equation '
        + 'to move it to the stated conditions.',
    },
  ],

  traps: [
    {
      mistake: 'Leaving the temperature in degrees Celsius.',
      why: 'The laws are proportions, and they are only true on a scale '
        + 'whose zero is absolute zero. '
        + 'Add 273 on its own line.',
    },
    {
      mistake: 'Mixing atmospheres with millimetres of mercury in one equation.',
      why: 'The units need not be SI, but they must match on both sides. '
        + 'Convert one of them.',
    },
    {
      mistake: 'Using 22.4 cubic decimetres at room temperature.',
      why: 'That is the s.t.p. value. '
        + 'At room conditions it is about 24, and the question will say '
        + 'which conditions apply.',
    },
    {
      mistake: 'Subtracting 273 instead of adding it.',
      why: 'Kelvin numbers are always bigger than Celsius ones for '
        + 'ordinary temperatures. '
        + 'If your kelvin value is negative, you subtracted.',
    },
  ],

  extension:
    'Real gases obey these laws only approximately, and they fail most at '
    + 'high pressure and low temperature. '
    + 'The reason is in the two assumptions behind the ideal picture: that '
    + 'the molecules have no size of their own, and that they do not '
    + 'attract one another. '
    + 'Squeeze a gas hard enough and the molecules occupy a real fraction '
    + 'of the space, so the volume cannot keep falling. '
    + 'Cool it enough and the attractions take hold and it becomes a '
    + 'liquid, which is how the cooking gas in a cylinder is stored as a '
    + 'liquid in the first place.',

  questions: [
    {
      id: 'gl-1',
      ask: 'A temperature of 27 degrees Celsius in kelvin is:',
      kind: 'numeric',
      options: [],
      answer: '300',
      teach: 'Add 273. '
        + 'Every gas law calculation starts with this line.',
      level: 3,
    },
    {
      id: 'gl-2',
      ask: 'A gas at 1 atmosphere occupies $500\\ \\mathrm{cm^3}$. '
        + 'At 2 atmospheres and the same temperature its volume in cubic '
        + 'centimetres is:',
      kind: 'numeric',
      options: [],
      answer: '250',
      teach: 'Boyle’s law: double the pressure, half the volume.',
      level: 4,
    },
    {
      id: 'gl-3',
      ask: 'A gas cylinder is dangerous in the sun because:',
      kind: 'choice',
      options: [
        'Its volume cannot change, so the heat raises the pressure instead',
        'The gas becomes poisonous when warm',
        'Sunlight makes the gas react',
      ],
      answer: 'Its volume cannot change, so the heat raises the pressure instead',
      teach: 'At constant volume, pressure is proportional to absolute '
        + 'temperature, so there is nowhere for the extra energy to go but '
        + 'into pressure.',
      level: 5,
    },
    {
      id: 'gl-4',
      ask: 'How many moles are there in $11.2\\ \\mathrm{dm^3}$ of a gas at '
        + 's.t.p.?',
      kind: 'numeric',
      options: [],
      answer: '0.5',
      teach: 'Divide by the molar volume, $22.4\\ \\mathrm{dm^3}$. '
        + 'This works for any gas, which is Avogadro’s law.',
      level: 4,
    },
  ],
})

/* ── energy changes ─────────────────────────────────────────────────────── */

teach({
  topicId: 'thermochemistry-chem',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Breaking bonds takes energy in and making bonds gives energy out. '
      + 'Whichever is bigger decides the sign. '
      + 'An exothermic reaction gives heat out and has a negative enthalpy '
      + 'change; an endothermic one takes heat in and has a positive one.',
    method: [
      'Decide whether the surroundings got hotter or colder.',
      'Hotter means heat came out, so the sign is negative.',
      'Use $Q = mc\\Delta T$ for the heat, then divide by the moles to get it per mole.',
    ],
  },

  why:
    'A soap maker stirs caustic soda into a bucket of water and the bucket '
    + 'becomes hot enough that she has to stand back from the steam, '
    + 'although she has lit no fire. '
    + 'In the same market a trader sells a packet of powder that a '
    + 'footballer snaps and presses to a swollen ankle, and it goes cold in '
    + 'his hands, although nothing has been put in a fridge. '
    + 'Both are just a solid meeting water. '
    + 'Where did the heat in the bucket come from, and where did the heat '
    + 'in the cold pack go?',

  notation:
    'The symbol $\\Delta H$ is said "delta H" and means the enthalpy '
    + 'change, which is the heat taken in or given out at constant '
    + 'pressure. '
    + 'The delta means change, so it is always a final value minus an '
    + 'initial one. '
    + 'Its unit is kilojoules per mole, written '
    + '$\\mathrm{kJ\\ mol^{-1}}$, and the per mole matters: a value '
    + 'without it is only the heat from that one experiment. '
    + 'A negative $\\Delta H$ means exothermic, heat out. '
    + 'A positive $\\Delta H$ means endothermic, heat in. '
    + 'The sign is not decoration and a missing sign loses the mark even '
    + 'when the number is right. '
    + 'In $Q = mc\\Delta T$, $Q$ is in joules, $m$ is the mass of the '
    + 'solution in grams, $c$ is the specific heat capacity, about '
    + '$4.2\\ \\mathrm{J\\ g^{-1}\\ K^{-1}}$ for water, and $\\Delta T$ is '
    + 'the temperature change in degrees, which is the same number in '
    + 'Celsius or kelvin because it is a difference.',

  idea:
    'Every reaction breaks some bonds and makes others. '
    + 'Breaking a bond always needs energy put in. '
    + 'Making a bond always gives energy back. '
    + 'So the enthalpy change is $$\\Delta H = \\text{energy to break '
    + 'bonds} - \\text{energy released making bonds}. '
    + '$$ Suppose making gives back more than breaking cost. '
    + 'The surplus leaves as heat, the surroundings warm, and '
    + '$\\Delta H$ is negative. '
    + 'That reaction is exothermic. '
    + 'Suppose breaking costs more. '
    + 'The shortfall is taken from the surroundings, which cool, and '
    + '$\\Delta H$ is positive. '
    + 'That one is endothermic. '
    + 'Standard enthalpy changes are quoted per mole, for named '
    + 'processes: the enthalpy of combustion, of neutralisation, of '
    + 'solution, and of formation. '
    + 'The heat measured in an experiment is $$Q = mc\\Delta T. '
    + '$$ Divide it by the moles that reacted and you have $\\Delta '
    + 'H$ per mole. '
    + 'The sign is put in by hand, from the way the temperature went. '
    + 'An energy level diagram shows the reactants and the products '
    + 'as two levels. '
    + 'The products sit lower for an exothermic reaction and higher '
    + 'for an endothermic one. '
    + 'The hump between them is the activation energy.',

  tables: [
    {
      caption: 'Telling an exothermic change from an endothermic one',
      columns: ['Point', 'Exothermic', 'Endothermic'],
      rows: [
        ['Heat', 'Given out to the surroundings', 'Taken in from the surroundings'],
        ['The flask feels', 'Hot', 'Cold'],
        ['Sign of the enthalpy change', 'Negative', 'Positive'],
        ['Products on a level diagram', 'Lower than the reactants', 'Higher than the reactants'],
        ['Everyday example', 'Caustic soda dissolving, charcoal burning',
          'A cold pack, photosynthesis, dissolving ammonium nitrate'],
      ],
      note: 'The row that carries the mark is the third one. '
        + 'Hot means negative, which feels backwards until you remember the '
        + 'sign describes the reaction and not the hand holding the flask.',
    },
    {
      caption: 'Four named enthalpy changes and what each one is measured for',
      columns: ['Name', 'What one mole of what does', 'Usual sign'],
      rows: [
        ['Combustion', 'One mole of a fuel burns completely in oxygen', 'Always negative'],
        ['Neutralisation', 'One mole of water forms from acid and alkali', 'Always negative'],
        ['Solution', 'One mole of a solute dissolves completely', 'Either, depending on the solute'],
        ['Formation', 'One mole of a compound forms from its elements', 'Usually negative'],
      ],
      note: 'The solution row is the only one that can go either way, and '
        + 'it is why caustic soda heats a bucket while ammonium nitrate '
        + 'cools one.',
    },
  ],

  figure: {
    alt: 'Two energy level diagrams side by side, each with energy up the '
      + 'vertical axis and progress of reaction along the horizontal axis. '
      + 'In the left diagram, labelled exothermic, the reactants sit on a '
      + 'high level on the left, the path rises over a hump labelled '
      + 'activation energy, and comes down to a products level that is '
      + 'lower than the reactants, with a downward arrow between the two '
      + 'levels labelled enthalpy change is negative, heat given out. In '
      + 'the right diagram, labelled endothermic, the reactants sit on a '
      + 'low level, the path rises over a hump, and settles on a products '
      + 'level higher than the reactants, with an upward arrow between the '
      + 'levels labelled enthalpy change is positive, heat taken in.',
    svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="40" y1="270" x2="300" y2="270"/>'
      + '<line x1="40" y1="270" x2="40" y2="40"/>'
      + '<text x="22" y="36" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">E</text>'
      + '<line x1="60" y1="120" x2="120" y2="120" stroke-width="3"/>'
      + '<text x="88" y="110" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">reactants</text>'
      + '<path d="M120 120 Q160 50 200 200" stroke="#1d4ed8"/>'
      + '<line x1="200" y1="200" x2="270" y2="200" stroke-width="3"/>'
      + '<text x="236" y="222" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">products</text>'
      + '<line x1="150" y1="120" x2="150" y2="66" stroke="#b4531a" '
      + 'stroke-dasharray="3 3"/>'
      + '<text x="158" y="86" font-size="11" fill="#b4531a" '
      + 'stroke="none">activation</text>'
      + '<text x="158" y="100" font-size="11" fill="#b4531a" '
      + 'stroke="none">energy</text>'
      + '<line x1="286" y1="120" x2="286" y2="194" stroke="#0f8a4d"/>'
      + '<path d="M280 186 L286 198 L292 186" stroke="#0f8a4d"/>'
      + '<text x="170" y="296" font-size="12" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">exothermic: negative, heat out</text>'
      + '<line x1="380" y1="270" x2="650" y2="270"/>'
      + '<line x1="380" y1="270" x2="380" y2="40"/>'
      + '<text x="362" y="36" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">E</text>'
      + '<line x1="400" y1="210" x2="460" y2="210" stroke-width="3"/>'
      + '<text x="430" y="232" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">reactants</text>'
      + '<path d="M460 210 Q500 60 540 130" stroke="#1d4ed8"/>'
      + '<line x1="540" y1="130" x2="620" y2="130" stroke-width="3"/>'
      + '<text x="580" y="120" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">products</text>'
      + '<line x1="490" y1="210" x2="490" y2="76" stroke="#b4531a" '
      + 'stroke-dasharray="3 3"/>'
      + '<text x="498" y="96" font-size="11" fill="#b4531a" '
      + 'stroke="none">activation</text>'
      + '<text x="498" y="110" font-size="11" fill="#b4531a" '
      + 'stroke="none">energy</text>'
      + '<line x1="636" y1="210" x2="636" y2="136" stroke="#7c3aed"/>'
      + '<path d="M630 144 L636 132 L642 144" stroke="#7c3aed"/>'
      + '<text x="515" y="296" font-size="12" text-anchor="middle" '
      + 'fill="#7c3aed" stroke="none">endothermic: positive, heat in</text>'
      + '</svg>',
  },

  mechanism:
    'The sign convention is the whole of this topic and it is the one '
    + 'thing candidates reliably get backwards, so it is worth getting the '
    + 'reason straight rather than the rule. '
    + 'The enthalpy change describes the chemicals, not the person holding '
    + 'the flask. '
    + 'If the flask feels hot, the chemicals have given energy away, so '
    + 'they have less than they started with, and a loss is negative. '
    + 'Hot flask, negative $\\Delta H$. '
    + 'Say it to yourself in that order, from the flask to the sign, and '
    + 'it does not reverse. '
    + 'Underneath is bond accounting. '
    + 'Breaking a bond is like pulling two magnets apart: it always costs '
    + 'energy. '
    + 'Making a bond is like letting them snap together: it always gives '
    + 'energy back. '
    + 'So a reaction is a trade, and the sign tells you which way the trade '
    + 'went. '
    + 'Burning charcoal makes strong bonds in carbon dioxide and gets back '
    + 'much more than it spent breaking the carbon and oxygen apart, so '
    + 'the surplus pours out as heat, which is what cooks the food. '
    + 'Now the bucket and the cold pack. '
    + 'Dissolving has two steps that pull in opposite directions: the '
    + 'lattice has to be pulled apart, which costs energy, and the freed '
    + 'ions are then surrounded by water molecules, which gives energy '
    + 'back. '
    + 'For caustic soda the hydration gives back more than the lattice '
    + 'cost, so the bucket gets hot. '
    + 'For ammonium nitrate the lattice costs more than the hydration gives '
    + 'back, so the difference is taken out of the water and the pack goes '
    + 'cold. '
    + 'That is one explanation covering both, and a question asking why '
    + 'some solids warm water and others cool it wants exactly those two '
    + 'competing steps named. '
    + 'Four places lose marks. '
    + 'The first is the sign, already covered, and it is worth a mark on '
    + 'its own in nearly every question. '
    + 'The second is the mass in $Q = mc\\Delta T$. '
    + 'It is the mass of the solution that changed temperature, not the '
    + 'mass of the solid that dissolved, because it is the water whose '
    + 'temperature you measured. '
    + 'Mixing $25\\ \\mathrm{cm^3}$ of acid with '
    + '$25\\ \\mathrm{cm^3}$ of alkali gives $50$ g to put into the '
    + 'formula, taking the density of the solution as that of water. '
    + 'The third is the per mole step. '
    + '$Q$ comes out in joules for the experiment you did; '
    + '$\\Delta H$ is per mole, so it must be divided by the moles that '
    + 'actually reacted and then converted to kilojoules. '
    + 'A candidate who stops at $Q$ has done the practical and not the '
    + 'chemistry. '
    + 'The fourth is confusing enthalpy change with activation energy. '
    + 'They are different heights on the same diagram: $\\Delta H$ is the '
    + 'step between the two levels, and the activation energy is the hump '
    + 'that has to be climbed to get from one to the other. '
    + 'An exothermic reaction can still have a large hump, which is why '
    + 'petrol does not catch fire while you are pouring it. '
    + 'A note on apparatus. '
    + 'A proper calorimeter is a vacuum flask with a lid and a stirrer, and '
    + 'a school without one can get a usable result with a polystyrene cup '
    + 'inside a beaker, which is itself a decent insulator. '
    + 'The examinable calculation needs no apparatus at all, only the four '
    + 'numbers. '
    + 'What a cup cannot give you is an accurate value, because heat leaks '
    + 'to the air and into the cup itself, and the standard answer to why '
    + 'the measured value is below the book value is exactly that: heat '
    + 'lost to the surroundings and to the apparatus.',

  recap:
    'Burning charcoal gives out heat. '
    + 'You can feel it, and it is why charcoal is sold for cooking. '
    + 'Some changes do the opposite and take heat in. '
    + 'Put your hand in water and blow on it and it feels cold, because '
    + 'evaporating water takes heat from your skin. '
    + 'So a chemical or physical change can either give heat to its '
    + 'surroundings or take heat from them. '
    + 'The first kind is called exothermic and the second endothermic. '
    + 'This lesson explains where that heat comes from, which is the bonds '
    + 'between the atoms, and puts a number and a sign on it.',

  method: [
    'Note whether the temperature of the mixture rose or fell.',
    'A rise means exothermic and a negative sign; a fall means endothermic and a positive one.',
    'Find the mass of solution that changed temperature, in grams.',
    'Work out $Q = mc\\Delta T$ in joules, with $c$ as 4.2 for aqueous solutions.',
    'Find the number of moles that actually reacted.',
    'Divide $Q$ by those moles, then divide by 1000 to get kilojoules per mole.',
    'Attach the sign by hand, from the direction of the temperature change.',
    'State the answer with its unit and its sign, and say exothermic or endothermic in words.',
  ],

  worked: [
    {
      level: 3,
      ask: 'When magnesium is added to dilute hydrochloric acid the '
        + 'mixture becomes warm. '
        + 'Is the reaction exothermic or endothermic, and what is the sign '
        + 'of its enthalpy change?',
      steps: [
        'The mixture became warm, so heat left the chemicals and entered '
        + 'the surroundings.',
        'A reaction that loses energy has less at the end than at the '
        + 'start.',
        'A loss is written as a negative change.',
      ],
      answer: 'Exothermic, with a negative $\\Delta H$. '
        + 'Hot flask, negative sign, in that order.',
    },
    {
      level: 4,
      ask: '$50\\ \\mathrm{cm^3}$ of water is heated and its temperature '
        + 'rises by 8.0 degrees. '
        + 'Find the heat absorbed. '
        + 'Take $c$ as $4.2\\ \\mathrm{J\\ g^{-1}\\ K^{-1}}$.',
      steps: [
        { math: 'm = 50\\ \\text{g}', why: 'One cubic centimetre of water has a mass of one gram.' },
        { math: 'Q = mc\\Delta T = 50 \\times 4.2 \\times 8.0' },
        { math: 'Q = 1680\\ \\text{J}' },
      ],
      answer: '$1680$ J, which is $1.68$ kJ.',
    },
    {
      level: 5,
      ask: '$25\\ \\mathrm{cm^3}$ of '
        + '$1.0\\ \\mathrm{mol\\ dm^{-3}}$ hydrochloric acid is mixed with '
        + '$25\\ \\mathrm{cm^3}$ of '
        + '$1.0\\ \\mathrm{mol\\ dm^{-3}}$ sodium hydroxide. '
        + 'The temperature rises by 6.8 degrees. '
        + 'Find the enthalpy of neutralisation.',
      steps: [
        { math: 'm = 25 + 25 = 50\\ \\text{g}', why: 'The mass is the whole solution whose temperature changed, not one of the two.' },
        { math: 'Q = 50 \\times 4.2 \\times 6.8 = 1428\\ \\text{J}' },
        { math: 'n = 1.0 \\times 0.025 = 0.025\\ \\text{mol}', why: 'Both are 0.025 mol and the ratio is one to one, so 0.025 mol of water forms.' },
        { math: '\\frac{1428}{0.025} = 57\\,120\\ \\mathrm{J\\ mol^{-1}}' },
        { math: '\\Delta H = -57.1\\ \\mathrm{kJ\\ mol^{-1}}', why: 'Negative because the temperature rose. The sign is put in by hand.' },
      ],
      answer: '$\\Delta H = -57.1\\ \\mathrm{kJ\\ mol^{-1}}$, exothermic. '
        + 'The book value for a strong acid with a strong alkali is about '
        + '$-57$, so a measured value a little smaller than that is '
        + 'explained by heat lost to the cup and the air.',
    },
    {
      level: 6,
      ask: '2.0 g of ammonium nitrate, molar mass 80 g per mole, is '
        + 'dissolved in $100\\ \\mathrm{cm^3}$ of water and the temperature '
        + 'falls by 1.6 degrees. '
        + 'Find the enthalpy of solution.',
      steps: [
        { math: 'Q = mc\\Delta T = 102 \\times 4.2 \\times 1.6', why: 'The mass is the water plus the dissolved solid, 100 plus 2 grams.' },
        { math: 'Q = 685\\ \\text{J}' },
        { math: 'n = \\frac{2.0}{80} = 0.025\\ \\text{mol}' },
        { math: '\\frac{685}{0.025} = 27\\,400\\ \\mathrm{J\\ mol^{-1}}' },
        { math: '\\Delta H = +27.4\\ \\mathrm{kJ\\ mol^{-1}}', why: 'Positive, because the temperature fell: the solution took heat from itself to break the lattice.' },
      ],
      answer: '$\\Delta H = +27.4\\ \\mathrm{kJ\\ mol^{-1}}$, endothermic. '
        + 'The lattice cost more to pull apart than the hydration of the '
        + 'ions gave back, and the difference came out of the water, which '
        + 'is why the cold pack works.',
    },
  ],

  traps: [
    {
      mistake: 'Writing a positive enthalpy change for a reaction that warmed the flask.',
      why: 'The sign describes the chemicals, which lost energy. '
        + 'Hot flask, negative $\\Delta H$.',
    },
    {
      mistake: 'Using the mass of the solid instead of the mass of the solution.',
      why: 'It is the solution whose temperature you measured, so it is the '
        + 'solution whose mass goes into $Q = mc\\Delta T$.',
    },
    {
      mistake: 'Giving the answer in joules without dividing by the moles.',
      why: 'An enthalpy change is per mole. '
        + 'Divide by the moles reacted, then convert to kilojoules.',
    },
    {
      mistake: 'Calling the activation energy the enthalpy change.',
      why: 'The enthalpy change is the step between the two levels. '
        + 'The activation energy is the hump in between, and a reaction can '
        + 'be exothermic with a large hump.',
    },
  ],

  extension:
    'Hess’s law says the heat change between a given start and a '
    + 'given finish is always the same. '
    + 'The route taken makes no difference. '
    + 'That is because enthalpy belongs to the state of the '
    + 'chemicals, not to the journey between states. '
    + 'The law is useful for a reaction nobody can measure in a '
    + 'flask. '
    + 'You go down to the elements by one route and back up by '
    + 'another, and add the steps. '
    + 'This is worked properly in the SHS 3 lessons, on the same '
    + 'accounting as here.',

  questions: [
    {
      id: 'th-1',
      ask: 'A reaction that makes its container feel hot has an enthalpy '
        + 'change that is:',
      kind: 'choice',
      options: [
        'Negative, because the chemicals lost energy',
        'Positive, because heat was produced',
        'Zero, because energy is conserved',
      ],
      answer: 'Negative, because the chemicals lost energy',
      teach: 'The sign describes the chemicals, not your hand. '
        + 'Hot flask, negative sign.',
      level: 4,
    },
    {
      id: 'th-2',
      ask: 'Find the heat absorbed when 100 g of water rises by 5 degrees. '
        + 'Take $c$ as 4.2, and give the answer in joules.',
      kind: 'numeric',
      options: [],
      answer: '2100',
      teach: '$Q = mc\\Delta T = 100 \\times 4.2 \\times 5$.',
      level: 4,
    },
    {
      id: 'th-3',
      ask: 'Breaking a chemical bond:',
      kind: 'choice',
      options: [
        'Always requires energy to be supplied',
        'Always releases energy',
        'Releases energy if the bond is strong',
      ],
      answer: 'Always requires energy to be supplied',
      teach: 'Breaking costs, making gives back. '
        + 'The sign of a reaction is which of the two was bigger.',
      level: 5,
    },
    {
      id: 'th-4',
      ask: 'A cold pack goes cold when the solid dissolves because:',
      kind: 'choice',
      options: [
        'Breaking the lattice costs more than hydrating the ions gives back',
        'The solid is already cold before it is used',
        'Water always cools when something dissolves',
      ],
      answer: 'Breaking the lattice costs more than hydrating the ions gives back',
      teach: 'Two steps pull opposite ways. '
        + 'Caustic soda is the other case, where hydration wins and the '
        + 'bucket gets hot.',
      level: 6,
    },
  ],
})

/* ── rates of reaction ──────────────────────────────────────────────────── */

teach({
  topicId: 'kinetics-chem',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A reaction happens when particles collide hard enough and the right '
      + 'way round. '
      + 'So anything that makes collisions more frequent, or makes a '
      + 'larger share of them energetic enough, speeds the reaction up. '
      + 'Every explanation in this topic has to be given in those terms.',
    method: [
      'Name the factor the question has changed.',
      'Say whether it changes how often particles collide, or how energetic the collisions are.',
      'Then say what that does to the rate, and give the units.',
    ],
  },

  why:
    'A woman lighting a coal pot starts with shavings and small sticks, '
    + 'not with a whole log, even though the log is the same wood. '
    + 'In the same kitchen, milk left on the table turns sour by evening '
    + 'while the same milk in the fridge keeps for days. '
    + 'The wood is the same wood and the milk is the same milk. '
    + 'So what is it about a shaving and a cold shelf that changes how '
    + 'fast a chemical change goes?',

  notation:
    'Rate means a change divided by the time it took, so it always has a '
    + '"per second" or "per minute" in its unit. '
    + 'A rate measured by gas collected is in cubic centimetres per '
    + 'second. '
    + 'A rate measured by concentration is in moles per cubic decimetre '
    + 'per second. '
    + 'Activation energy, written $E_a$, is the least energy a colliding '
    + 'pair must have for the reaction to happen, in kilojoules per mole. '
    + 'A catalyst is a substance that speeds a reaction and is itself '
    + 'unchanged at the end, which is the part of the definition candidates '
    + 'leave out. '
    + 'The phrase that carries marks throughout this topic is "frequency of '
    + 'collisions", and the phrase "the reaction is faster because there is '
    + 'more of it" carries none.',

  idea:
    'The rate of a reaction is how much reactant is used, or product '
    + 'formed, in a given time. '
    + 'Collision theory explains it: particles must collide, and a '
    + 'collision only leads to reaction if the pair has at least the '
    + 'activation energy and strikes in a suitable orientation. '
    + 'Most collisions achieve nothing. '
    + 'So the rate depends on two things only, the frequency of collisions '
    + 'and the fraction of them that are energetic enough. '
    + 'Raising the concentration of a solution, or the pressure of a gas, '
    + 'puts more particles in the same space, so collisions are more '
    + 'frequent. '
    + 'Breaking a solid into powder exposes far more surface, so more '
    + 'particles are available to be struck at the same moment. '
    + 'Raising the temperature does both, but mainly the second: the '
    + 'particles move faster, so they collide more often, and far more of '
    + 'them now carry the activation energy. '
    + 'A catalyst provides an alternative path with a lower activation '
    + 'energy, so a larger fraction of the existing collisions succeed. '
    + 'The rate is fastest at the start, when the reactants are most '
    + 'concentrated, and falls to zero as they are used up, which is why a '
    + 'graph of product against time is a curve that flattens.',

  tables: [
    {
      caption: 'Each factor, what it changes about the collisions, and what the rate does',
      columns: ['Factor raised', 'Collisions more frequent', 'More collisions energetic enough', 'Rate'],
      rows: [
        ['Concentration of a solution', 'Yes', 'No', 'Faster'],
        ['Pressure of a gas', 'Yes', 'No', 'Faster'],
        ['Surface area, by powdering', 'Yes', 'No', 'Faster'],
        ['Temperature', 'Yes', 'Yes, and this is the main effect', 'Much faster'],
        ['A catalyst added', 'No', 'Yes, by lowering the activation energy', 'Faster'],
      ],
      note: 'Only temperature ticks both columns, which is why ten degrees '
        + 'can roughly double a rate while doubling a concentration only '
        + 'doubles it.',
    },
    {
      caption: 'How to measure a rate, matched to the kind of reaction',
      columns: ['What the reaction does', 'What to measure', 'Apparatus'],
      rows: [
        ['Gives off a gas', 'Volume of gas against time', 'Gas syringe or inverted measuring cylinder'],
        ['Loses mass as gas escapes', 'Mass against time', 'Balance, flask left open'],
        ['Forms a precipitate', 'Time for a cross below the flask to disappear', 'Flask, paper with a cross, stopwatch'],
        ['Changes colour', 'Time for the colour to appear or go', 'Stopwatch and a white background'],
      ],
      note: 'The cross method is the cheapest experiment in the syllabus '
        + 'and needs nothing a school does not have.',
    },
  ],

  figure: {
    alt: 'Two graphs side by side. The left graph has volume of gas '
      + 'collected up the vertical axis and time along the horizontal '
      + 'axis, with three curves all rising from the origin and flattening '
      + 'to the same final height: the steepest is labelled powdered '
      + 'solid, the middle one labelled small lumps, and the shallowest '
      + 'labelled large lumps, with a note saying the same mass of solid '
      + 'gives the same total gas however fast it reacts. The right graph '
      + 'is an energy level diagram with energy up the vertical axis and '
      + 'progress of reaction along the horizontal axis, showing one path '
      + 'over a tall hump labelled without a catalyst and a second path '
      + 'over a lower hump labelled with a catalyst, both starting at the '
      + 'same reactant level and finishing at the same product level, with '
      + 'a note saying the catalyst lowers the hump and does not change '
      + 'either level.',
    svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="50" y1="250" x2="300" y2="250"/>'
      + '<line x1="50" y1="250" x2="50" y2="50"/>'
      + '<line x1="50" y1="80" x2="300" y2="80" stroke-dasharray="4 4" '
      + 'stroke-opacity="0.5"/>'
      + '<path d="M50 250 Q90 90 160 80 L300 80" stroke="#0f8a4d"/>'
      + '<path d="M50 250 Q130 110 210 84 L300 80" stroke="#1d4ed8"/>'
      + '<path d="M50 250 Q180 150 300 82" stroke="#b4531a"/>'
      + '<text x="30" y="46" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">gas</text>'
      + '<text x="300" y="270" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">time</text>'
      + '<text x="166" y="104" font-size="11" fill="#0f8a4d" '
      + 'stroke="none">powder</text>'
      + '<text x="216" y="124" font-size="11" fill="#1d4ed8" '
      + 'stroke="none">small lumps</text>'
      + '<text x="200" y="196" font-size="11" fill="#b4531a" '
      + 'stroke="none">large lumps</text>'
      + '<text x="175" y="294" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">same mass, so the same total gas</text>'
      + '<line x1="390" y1="250" x2="660" y2="250"/>'
      + '<line x1="390" y1="250" x2="390" y2="40"/>'
      + '<text x="372" y="36" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">E</text>'
      + '<line x1="410" y1="150" x2="460" y2="150" stroke-width="3"/>'
      + '<text x="426" y="142" font-size="11" fill="currentColor" '
      + 'stroke="none">reactants</text>'
      + '<path d="M460 150 Q520 50 580 210" stroke="#b4531a"/>'
      + '<path d="M460 150 Q520 104 580 210" stroke="#0f8a4d"/>'
      + '<line x1="580" y1="210" x2="640" y2="210" stroke-width="3"/>'
      + '<text x="606" y="230" font-size="11" fill="currentColor" '
      + 'stroke="none">products</text>'
      + '<text x="500" y="64" font-size="11" fill="#b4531a" '
      + 'stroke="none">without a catalyst</text>'
      + '<text x="532" y="118" font-size="11" fill="#0f8a4d" '
      + 'stroke="none">with a catalyst</text>'
      + '<text x="520" y="294" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the hump is lower, the two levels are not moved</text>'
      + '</svg>',
  },

  mechanism:
    'Collision theory is short enough to state in two sentences, and '
    + 'almost every mark in this topic is for applying those two sentences '
    + 'rather than for knowing them. '
    + 'Particles must meet, and when they meet they must bring at least the '
    + 'activation energy. '
    + 'So there are exactly two ways to speed anything up: make meetings '
    + 'more frequent, or make a larger share of the meetings energetic '
    + 'enough. '
    + 'The reason this matters is that a candidate who writes "the '
    + 'reaction is faster because the acid is stronger" has said nothing a '
    + 'marker can pay for, while "a more concentrated acid has more '
    + 'particles in the same volume, so collisions are more frequent" earns '
    + 'the mark with the same amount of ink. '
    + 'Take the coal pot. '
    + 'A log and a pile of shavings of the same wood have the same '
    + 'chemistry, but burning happens only where wood meets oxygen, which '
    + 'is at the surface. '
    + 'Splitting the log multiplies that surface many times over, so there '
    + 'are far more places where a collision can happen at any instant, and '
    + 'the fire takes hold. '
    + 'Notice what does not change: the total heat the wood can give is the '
    + 'same, because the amount of wood is the same. '
    + 'That is the point of the left hand graph above. '
    + 'All three curves flatten at the same height, because the same mass '
    + 'of carbonate must give the same total gas; what changes is how soon '
    + 'they get there. '
    + 'Candidates lose marks by drawing a powdered curve that ends higher, '
    + 'and it is an easy mark to protect once you see why. '
    + 'The milk is the temperature effect, and this is the one worth '
    + 'understanding properly because examiners press on it. '
    + 'Heating does make the particles move faster, so collisions are more '
    + 'frequent, but that effect alone is modest: a ten degree rise near '
    + 'room temperature raises the average speed by about two per cent. '
    + 'Yet a ten degree rise roughly doubles many rates. '
    + 'The reason is the second effect. '
    + 'At any temperature only a small fraction of particles carry the '
    + 'activation energy, and warming shifts a disproportionate number of '
    + 'them over that line. '
    + 'So the full answer is that heating increases both the frequency and '
    + 'the energy of collisions, and that the energy effect is the larger. '
    + 'An answer that says only "the particles move faster" is incomplete, '
    + 'and that is precisely where the second mark goes. '
    + 'A fridge runs the argument backwards: cold milk still has bacteria '
    + 'and still has sugar, but far fewer collisions clear the activation '
    + 'energy, so the souring crawls. '
    + 'The catalyst is the fourth idea and the most misdescribed. '
    + 'It does not give the particles energy and it does not move the '
    + 'products. '
    + 'It offers a different route with a lower hump, so a larger share of '
    + 'the collisions already happening are now enough. '
    + 'The two level diagram on the right says this better than a paragraph '
    + 'can: the start and the finish are untouched and only the hump '
    + 'between them comes down. '
    + 'It follows that a catalyst cannot change the amount of product, only '
    + 'the time taken to get it, and that it is recovered unchanged at the '
    + 'end, which is why a little of it serves for a long time. '
    + 'Manganese dioxide on hydrogen peroxide is the standard school '
    + 'example and it needs very little apparatus: the peroxide fizzes '
    + 'gently on its own and vigorously with a spatula of the black powder, '
    + 'which can be filtered off afterwards and weighed to show it is all '
    + 'still there. '
    + 'That last step is the one that proves the definition, and it is '
    + 'usually skipped.',

  recap:
    'Some changes are quick and some are slow. '
    + 'Petrol burns in an instant. '
    + 'An iron roofing sheet rusts over years. '
    + 'Both are chemical reactions, so clearly a reaction has a speed of '
    + 'its own. '
    + 'You already know things that change it from the kitchen: food cooks '
    + 'faster in smaller pieces, and faster still in a pressure cooker, '
    + 'and keeps longer when it is cold. '
    + 'You also know that a reaction needs the substances to actually '
    + 'touch, which is why you stir. '
    + 'This lesson explains all of that with one picture, of particles '
    + 'colliding, and gives the words an examiner is paying for.',

  method: [
    'Identify what has been changed: concentration, pressure, surface area, temperature or a catalyst.',
    'Say whether that change makes collisions more frequent.',
    'Say whether it makes a larger share of collisions energetic enough.',
    'For temperature, say both, and that the energy effect is the larger.',
    'For a catalyst, say it lowers the activation energy and is unchanged at the end.',
    'State what happens to the rate, and to the total product, which usually does not change.',
    'If a graph is wanted, draw the steeper curve flattening at the same height.',
    'Give any calculated rate with its unit, including the per second.',
  ],

  worked: [
    {
      level: 3,
      ask: '$48\\ \\mathrm{cm^3}$ of hydrogen is collected in 20 seconds. '
        + 'Find the average rate of reaction.',
      steps: [
        { math: '\\text{rate} = \\frac{\\text{volume}}{\\text{time}} = \\frac{48}{20}' },
        { math: '\\text{rate} = 2.4\\ \\mathrm{cm^3\\ s^{-1}}', why: 'The unit must carry the per second, or the answer is not a rate.' },
      ],
      answer: '$2.4\\ \\mathrm{cm^3\\ s^{-1}}$.',
    },
    {
      level: 4,
      ask: 'Explain, in terms of collisions, why marble powder reacts with '
        + 'acid faster than the same mass of marble chips.',
      steps: [
        'The reaction happens only where the solid meets the acid, which '
        + 'is at the surface.',
        'Powdering the same mass exposes a far greater total surface.',
        'So more acid particles can collide with solid at the same moment, '
        + 'and the frequency of successful collisions rises.',
      ],
      answer: 'The powder has a much larger surface area, so collisions '
        + 'between acid particles and the solid are more frequent and the '
        + 'rate is higher. '
        + 'The total gas produced is the same, because the mass of marble '
        + 'is the same.',
    },
    {
      level: 5,
      ask: 'A reaction takes 50 seconds at 20 degrees Celsius. '
        + 'The temperature is raised to 40 degrees. '
        + 'Estimate the new time, taking a ten degree rise to double the '
        + 'rate, and explain the effect in terms of collisions.',
      steps: [
        { math: '20\\ \\text{degrees rise} = 2 \\times 10\\ \\text{degrees}' },
        { math: '\\text{rate} \\times 2 \\times 2 = 4\\ \\text{times faster}' },
        { math: 't = \\frac{50}{4} = 12.5\\ \\text{s}' },
        'The particles move faster, so collisions are more frequent; and '
        + 'far more of them now carry the activation energy, which is the '
        + 'larger of the two effects.',
      ],
      answer: 'About $12.5$ seconds. '
        + 'The answer in words must name both effects, because the second '
        + 'one carries its own mark.',
    },
    {
      level: 6,
      ask: 'Hydrogen peroxide decomposes slowly on its own and quickly when '
        + 'manganese dioxide is added. '
        + 'Explain this, and say what happens to the total volume of oxygen '
        + 'collected and to the manganese dioxide.',
      steps: [
        'Manganese dioxide is a catalyst: it provides an alternative '
        + 'reaction path with a lower activation energy.',
        'A larger fraction of the collisions already happening now have '
        + 'enough energy, so the rate rises.',
        'The reactant level and the product level are unchanged, so the '
        + 'enthalpy change and the amount of product are unchanged.',
        'The catalyst is not consumed and can be filtered off, dried and '
        + 'weighed at the end.',
      ],
      answer: 'The catalyst lowers the activation energy, so the same '
        + 'collisions succeed more often and the oxygen comes off faster. '
        + 'The total volume of oxygen is the same, because the amount of '
        + 'peroxide is the same, and the manganese dioxide is recovered '
        + 'unchanged in mass. '
        + 'Those last two statements are the ones that distinguish a full '
        + 'answer.',
    },
  ],

  traps: [
    {
      mistake: 'Saying a reaction is faster because there is more acid, without saying why.',
      why: 'The mark is for the mechanism. '
        + 'Say that more particles in the same volume make collisions more '
        + 'frequent.',
    },
    {
      mistake: 'Drawing the faster curve finishing higher than the slower one.',
      why: 'The same mass of reactant gives the same total product. '
        + 'A faster reaction reaches the same height sooner.',
    },
    {
      mistake: 'Explaining temperature only by saying the particles move faster.',
      why: 'That is one of two effects, and the smaller one. '
        + 'The larger is that many more collisions now carry the activation '
        + 'energy.',
    },
    {
      mistake: 'Saying a catalyst gives the particles extra energy.',
      why: 'It lowers the activation energy by offering another path. '
        + 'It adds nothing and is recovered unchanged.',
    },
    {
      mistake: 'Giving a rate with no time in the unit.',
      why: 'A rate is a change per unit time. '
        + 'Cubic centimetres is a volume; cubic centimetres per second is a '
        + 'rate.',
    },
  ],

  extension:
    'Enzymes are the catalysts of living things. '
    + 'They are why dough rises, and why cassava can be left to '
    + 'ferment into gari. '
    + 'They work in the way this lesson describes, by lowering an '
    + 'activation energy. '
    + 'But an enzyme is a protein, and it works only while it holds '
    + 'its shape. '
    + 'Heat it too far, or put it in the wrong pH, and the shape is '
    + 'lost and the enzyme stops. '
    + 'So a graph of rate against temperature for an enzyme rises, '
    + 'peaks and then falls away. '
    + 'No ordinary catalyst does that.',

  questions: [
    {
      id: 'ki-1',
      ask: 'A reaction speeds up when a solid is powdered because:',
      kind: 'choice',
      options: [
        'The surface area is greater, so collisions are more frequent',
        'The powder has more mass',
        'The powder is chemically different',
      ],
      answer: 'The surface area is greater, so collisions are more frequent',
      teach: 'Reaction happens at the surface. '
        + 'The mass and the total product are unchanged.',
      level: 3,
    },
    {
      id: 'ki-2',
      ask: '$30\\ \\mathrm{cm^3}$ of gas is collected in 15 s. '
        + 'The average rate in cubic centimetres per second is:',
      kind: 'numeric',
      options: [],
      answer: '2',
      teach: 'Volume divided by time. '
        + 'Keep the per second in the unit.',
      level: 3,
    },
    {
      id: 'ki-3',
      ask: 'A catalyst works by:',
      kind: 'choice',
      options: [
        'Lowering the activation energy',
        'Raising the temperature of the mixture',
        'Increasing the amount of product',
      ],
      answer: 'Lowering the activation energy',
      teach: 'It offers an easier path. '
        + 'The two energy levels, and so the amount of product, are '
        + 'untouched.',
      level: 5,
    },
    {
      id: 'ki-4',
      ask: 'Milk keeps longer in a fridge mainly because:',
      kind: 'choice',
      options: [
        'Fewer collisions carry the activation energy at a low temperature',
        'There are no bacteria in a fridge',
        'Cold milk is more concentrated',
      ],
      answer: 'Fewer collisions carry the activation energy at a low temperature',
      teach: 'Cooling reduces both the frequency and the energy of '
        + 'collisions, and the energy effect is the larger one.',
      level: 5,
    },
  ],
})
