/**
 * Stored lessons for SHS 2 Elective Chemistry: the descriptive half.
 * Groups 1 and 2, the halogens, the hydrocarbons, and isomerism.
 *
 * Written at about grade 10, which is inside the SHS expectation of 10 to 12.
 *
 * ── The thread through these four ────────────────────────────────────────
 *
 * The first two are the periodic table stopped being a layout and started
 * being a prediction. A group is a set of elements whose outer electrons
 * are arranged alike, so their chemistry is alike, and the way it changes
 * down the group has one cause: the outer shell gets further from the
 * nucleus and more shielded from it. That single cause runs the metals one
 * way and the halogens the other way, and a learner who sees that does not
 * have to remember two opposite trends.
 *
 * The last two begin organic chemistry, where the table is no help at all
 * and the structure is everything. Hydrocarbons are sorted by what their
 * carbon atoms do with each other, and isomerism is the discovery that the
 * molecular formula does not settle the question.
 *
 * ── What has to be written down ──────────────────────────────────────────
 *
 * Descriptive chemistry is marked on named reasons and named observations.
 * Atomic radius, shielding, nuclear attraction, the colour before and the
 * colour after, the equation with its state symbols: these are what the
 * marks hang on. "It is more reactive" with no cause is worth nothing, and
 * "the solution changed colour" without saying from what to what is worth
 * half.
 *
 * ── Apparatus a school may not own ───────────────────────────────────────
 *
 * Sodium and potassium are genuinely dangerous and many schools rightly do
 * not keep them. Those reactions are written as described demonstrations,
 * with the observations stated plainly, because the examination asks for the
 * observations and not for the handling. The bromine water test and the
 * silver nitrate tests need very little and are worth doing.
 *
 * ── Notation ─────────────────────────────────────────────────────────────
 *
 * Formulae and equations are LaTeX between dollar signs. Captions, `alt`
 * text and table cells stay in words, since those are read aloud.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── groups 1 and 2 ─────────────────────────────────────────────────────── */

teach({
  topicId: 'group1-2-chem',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Group 1 metals have one outer electron and group 2 have two, so '
      + 'they lose them and form positive ions. '
      + 'Going down either group the outer shell is further from the '
      + 'nucleus and better shielded, so the electron is lost more easily '
      + 'and the metal is more reactive.',
    method: [
      'Say how many outer electrons the element has, and so what ion it forms.',
      'For a trend down the group, name atomic radius and shielding as the cause.',
      'Write the equation, with state symbols, and give the observation.',
    ],
  },

  why:
    'In a school laboratory the copper wire sits on an open shelf and '
    + 'nothing happens to it for years. '
    + 'The sodium, if the school has any, is kept in a jar under oil, and a '
    + 'piece the size of a grain of rice dropped into a trough of water '
    + 'races about and fizzes. '
    + 'Both are metals. '
    + 'Both are shiny when cut. '
    + 'So why does one of them have to be hidden from the air and the water '
    + 'that the other one ignores?',

  notation:
    'Group 1 are the alkali metals: lithium, sodium, potassium, rubidium, '
    + 'caesium. '
    + 'Group 2 are the alkaline earth metals: beryllium, magnesium, '
    + 'calcium, strontium, barium. '
    + 'Alkali means the hydroxide dissolves to give an alkaline solution, '
    + 'which is where the name comes from. '
    + 'The phrase atomic radius means the distance from the nucleus to the '
    + 'outer shell. '
    + 'Shielding means the inner electrons standing between the nucleus and '
    + 'the outer electron, weakening the pull the outer one feels. '
    + 'Ionisation energy is the energy needed to pull one electron away '
    + 'from the atom. '
    + 'Those three phrases are the ones the marks hang on, so write them '
    + 'rather than around them.',

  idea:
    'Every element in group 1 has one electron in its outer shell, and '
    + 'every element in group 2 has two. '
    + 'They lose them to reach a full shell, so group 1 forms ions of '
    + 'charge $+1$ and group 2 forms ions of charge $+2$. '
    + 'Going down a group, each element has one more shell. '
    + 'So the atomic radius grows, and the outer electrons sit further out '
    + 'with more inner electrons shielding them from the nucleus. '
    + 'The pull on the outer electron therefore weakens, the ionisation '
    + 'energy falls, and the metal becomes more reactive. '
    + 'The alkali metals react with cold water to give a hydroxide and '
    + 'hydrogen, '
    + '$$2\\mathrm{Na}(\\mathrm{s}) + '
    + '2\\mathrm{H_2O}(\\mathrm{l}) \\rightarrow '
    + '2\\mathrm{NaOH}(\\mathrm{aq}) + \\mathrm{H_2}(\\mathrm{g}),$$ '
    + 'and with oxygen to give oxides, which is why they are kept under '
    + 'oil. '
    + 'The group 2 metals do the same things less readily: magnesium needs '
    + 'steam, calcium manages cold water slowly. '
    + 'Group 2 is less reactive than group 1 in the same period because two '
    + 'electrons have to be removed instead of one, and the ion left behind '
    + 'is smaller and more highly charged. '
    + 'Their compounds also differ: group 1 hydroxides and carbonates are '
    + 'soluble, while most group 2 hydroxides are only slightly soluble and '
    + 'their carbonates are insoluble.',

  tables: [
    {
      caption: 'What each alkali metal does when a small piece is dropped on cold water',
      columns: ['Metal', 'What is seen', 'Does it catch fire'],
      rows: [
        ['Lithium', 'Fizzes steadily and floats, slowly getting smaller', 'No'],
        ['Sodium', 'Melts to a ball, races about, fizzes hard', 'Not usually, unless held still'],
        ['Potassium', 'Catches at once with a lilac flame, may spit', 'Yes'],
        ['Caesium', 'Reacts violently enough to shatter the container', 'Yes'],
      ],
      note: 'The same reaction gets fiercer down the group, and the cause is '
        + 'the same every time: the outer electron is further out and better '
        + 'shielded, so it is easier to lose.',
    },
    {
      caption: 'Group 1 compared with group 2 on the points examiners ask about',
      columns: ['Point', 'Group 1', 'Group 2'],
      rows: [
        ['Outer electrons', 'One', 'Two'],
        ['Ion formed', 'Charge of plus one', 'Charge of plus two'],
        ['Reaction with cold water', 'Vigorous, giving hydrogen',
          'Slow or needs steam'],
        ['Hydroxide in water', 'Soluble, strongly alkaline',
          'Slightly soluble, weakly alkaline'],
        ['Carbonate on heating', 'Stable, does not decompose easily',
          'Decomposes to the oxide and carbon dioxide'],
      ],
      note: 'The last row is why limestone can be burned into lime at Buipe '
        + 'while washing soda cannot be burned into anything useful.',
    },
    {
      caption: 'Flame colours used to identify these metals',
      columns: ['Metal ion', 'Flame colour'],
      rows: [
        ['Lithium', 'Crimson red'],
        ['Sodium', 'Golden yellow'],
        ['Potassium', 'Lilac'],
        ['Calcium', 'Brick red'],
        ['Barium', 'Apple green'],
      ],
      note: 'A clean wire and a hot blue flame are needed, because sodium '
        + 'is everywhere and its yellow drowns out everything else.',
    },
  ],

  figure: {
    alt: 'Three atoms of increasing size drawn in a row, labelled lithium, '
      + 'sodium and potassium from left to right. Each is shown as a small '
      + 'filled nucleus marked with a plus sign at the centre, surrounded '
      + 'by circles standing for the electron shells: lithium has two '
      + 'shells, sodium three and potassium four. In each atom a single '
      + 'outer electron is drawn as a dot on the outermost circle. A '
      + 'dashed arrow runs from the nucleus to that outer dot in each '
      + 'atom, getting longer from left to right, and the arrows are '
      + 'labelled the pull on the outer electron gets weaker. Beneath the '
      + 'row a wide arrow points right and is labelled further out, more '
      + 'inner shells in the way, so the electron is lost more easily and '
      + 'the metal is more reactive.',
    svg: '<svg viewBox="0 0 660 320" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<circle cx="100" cy="130" r="6" fill="#b4531a" stroke="none"/>'
      + '<text x="100" y="135" font-size="10" text-anchor="middle" '
      + 'fill="#ffffff" stroke="none">+</text>'
      + '<circle cx="100" cy="130" r="26" stroke-opacity="0.6"/>'
      + '<circle cx="100" cy="130" r="46" stroke-opacity="0.6"/>'
      + '<circle cx="146" cy="130" r="5" fill="#1d4ed8" stroke="none"/>'
      + '<line x1="106" y1="130" x2="140" y2="130" stroke="#0f8a4d" '
      + 'stroke-dasharray="3 3"/>'
      + '<text x="100" y="200" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">lithium</text>'
      + '<circle cx="300" cy="130" r="6" fill="#b4531a" stroke="none"/>'
      + '<text x="300" y="135" font-size="10" text-anchor="middle" '
      + 'fill="#ffffff" stroke="none">+</text>'
      + '<circle cx="300" cy="130" r="26" stroke-opacity="0.6"/>'
      + '<circle cx="300" cy="130" r="46" stroke-opacity="0.6"/>'
      + '<circle cx="300" cy="130" r="66" stroke-opacity="0.6"/>'
      + '<circle cx="366" cy="130" r="5" fill="#1d4ed8" stroke="none"/>'
      + '<line x1="306" y1="130" x2="360" y2="130" stroke="#0f8a4d" '
      + 'stroke-dasharray="3 3"/>'
      + '<text x="300" y="220" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">sodium</text>'
      + '<circle cx="530" cy="130" r="6" fill="#b4531a" stroke="none"/>'
      + '<text x="530" y="135" font-size="10" text-anchor="middle" '
      + 'fill="#ffffff" stroke="none">+</text>'
      + '<circle cx="530" cy="130" r="26" stroke-opacity="0.6"/>'
      + '<circle cx="530" cy="130" r="46" stroke-opacity="0.6"/>'
      + '<circle cx="530" cy="130" r="66" stroke-opacity="0.6"/>'
      + '<circle cx="530" cy="130" r="86" stroke-opacity="0.6"/>'
      + '<circle cx="616" cy="130" r="5" fill="#1d4ed8" stroke="none"/>'
      + '<line x1="536" y1="130" x2="610" y2="130" stroke="#0f8a4d" '
      + 'stroke-dasharray="3 3"/>'
      + '<text x="530" y="240" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">potassium</text>'
      + '<text x="330" y="36" font-size="12" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">'
      + 'the dashed pull gets longer and weaker</text>'
      + '<line x1="60" y1="282" x2="600" y2="282" stroke="#b4531a"/>'
      + '<path d="M590 274 L604 282 L590 290" stroke="#b4531a"/>'
      + '<text x="330" y="306" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">'
      + 'easier to lose the electron, so more reactive</text>'
      + '</svg>',
  },

  mechanism:
    'The trend down a group has one cause, and it is worth saying slowly '
    + 'because the same sentence explains the halogens in the next lesson '
    + 'running the opposite way. '
    + 'Going down group 1, each element has one more full shell than the '
    + 'one above. '
    + 'So two things change together. '
    + 'The outer electron is further from the nucleus, and the force '
    + 'between charges falls off with distance. '
    + 'And there are more inner electrons between the two, pushing back on '
    + 'the outer one and cancelling part of the nuclear pull, which is '
    + 'called shielding. '
    + 'Both changes weaken the hold on the outer electron, so less energy '
    + 'is needed to remove it, so the metal reacts more readily. '
    + 'That is why potassium catches fire on water and lithium only fizzes. '
    + 'It is also the answer to the opening question. '
    + 'Sodium gives up its outer electron so readily that oxygen in the air '
    + 'and water vapour take it within seconds, which is why it lives under '
    + 'oil. '
    + 'Copper holds its electrons far more tightly, so the air gets nowhere '
    + 'with it in a year. '
    + 'The nuclear charge does rise down the group, and candidates '
    + 'sometimes offer that as a reason for the opposite trend. '
    + 'It does rise, but the extra shell and the extra shielding outweigh '
    + 'it, which is a thing to state rather than to leave as an unspoken '
    + 'assumption. '
    + 'Why is group 2 less reactive than group 1 in the same period? '
    + 'Two reasons, and both should be given. '
    + 'Two electrons must be removed rather than one, and the second '
    + 'removal is always harder because it is taken from an ion that is '
    + 'already positive. '
    + 'And a group 2 atom has a larger nuclear charge with the same number '
    + 'of shells, so its atoms are a little smaller and hold their '
    + 'electrons more tightly to begin with. '
    + 'Three places lose marks. '
    + 'The first is answering a trend question with the word reactive and '
    + 'nothing else. '
    + 'The marking scheme is looking for atomic radius, shielding and '
    + 'ionisation energy, so an answer that names none of them cannot score '
    + 'however true it is. '
    + 'The second is the equation with water. '
    + 'Sodium gives sodium hydroxide and hydrogen, not sodium oxide and '
    + 'not water, and the equation needs balancing with the 2 in front of '
    + 'both the sodium and the water. '
    + 'Write the state symbols: they are often a mark. '
    + 'The third is the observation. '
    + '"It reacts" is not an observation. '
    + '"The metal melts into a ball, moves rapidly on the surface, and a '
    + 'gas is given off" is three observations and is what the question is '
    + 'buying. '
    + 'A note on apparatus. '
    + 'Sodium and potassium are genuinely hazardous and a school that does '
    + 'not keep them is being sensible, not poor. '
    + 'The observations above are what the examination asks for and they '
    + 'can be learned from the table. '
    + 'What a school can safely do is the calcium and water reaction, '
    + 'which gives the cloudy suspension of calcium hydroxide and a gas '
    + 'that pops with a lighted splint, and the flame tests, which need '
    + 'only a clean wire and a burner.',

  recap:
    'The periodic table puts elements in columns called groups. '
    + 'Elements in the same group behave alike, because they have the same '
    + 'number of electrons in their outer shell. '
    + 'A metal reacts by giving its outer electrons away and becoming a '
    + 'positive ion. '
    + 'So a metal that gives them away easily is a reactive metal. '
    + 'You met the reactivity series at JHS: potassium, sodium, calcium, '
    + 'magnesium, and so on down to copper and gold. '
    + 'This lesson explains where the top of that list comes from, and why '
    + 'it is in that order rather than any other.',

  method: [
    'State the group, and so the number of outer electrons and the ion formed.',
    'For a trend down the group, say that each element has one more shell.',
    'Name the two consequences: a larger atomic radius and more shielding.',
    'Conclude that the ionisation energy falls, so reactivity rises.',
    'Write the equation for the reaction asked for, balanced, with state symbols.',
    'Give the observations in full: what is seen, heard and felt.',
    'For a compound, say whether it is soluble and whether it decomposes on heating.',
    'For an identification, give the flame colour and say the wire must be clean.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Write the equation for the reaction of potassium with cold '
        + 'water, and give two observations.',
      steps: [
        'Potassium is in group 1, so it gives a hydroxide and hydrogen.',
        { math: '2\\mathrm{K}(\\mathrm{s}) + 2\\mathrm{H_2O}(\\mathrm{l}) \\rightarrow 2\\mathrm{KOH}(\\mathrm{aq}) + \\mathrm{H_2}(\\mathrm{g})', why: 'Balance by putting 2 in front of the metal and the water. State symbols are often a mark.' },
      ],
      answer: 'The equation above. '
        + 'Observations: the metal melts and moves rapidly on the surface, '
        + 'and it catches fire with a lilac flame while a gas is given off. '
        + 'The resulting solution turns red litmus blue.',
    },
    {
      level: 4,
      ask: 'Explain why caesium is more reactive than lithium.',
      steps: [
        'Caesium is lower in group 1, so it has more electron shells.',
        'Its outer electron is therefore further from the nucleus.',
        'There are also more inner electrons shielding it from the '
        + 'nucleus.',
        'So the pull on that electron is weaker and the ionisation energy '
        + 'is lower.',
      ],
      answer: 'Caesium has a larger atomic radius and more shielding, so '
        + 'less energy is needed to remove its outer electron, and it '
        + 'reacts more readily. '
        + 'The three named reasons are the three marks.',
    },
    {
      level: 5,
      ask: 'Magnesium does not react with cold water but does react with '
        + 'steam. '
        + 'Write both the steam reaction and the reaction of calcium with '
        + 'cold water, and account for the difference.',
      steps: [
        { math: '\\mathrm{Mg}(\\mathrm{s}) + \\mathrm{H_2O}(\\mathrm{g}) \\rightarrow \\mathrm{MgO}(\\mathrm{s}) + \\mathrm{H_2}(\\mathrm{g})', why: 'With steam the product is the oxide, not the hydroxide.' },
        { math: '\\mathrm{Ca}(\\mathrm{s}) + 2\\mathrm{H_2O}(\\mathrm{l}) \\rightarrow \\mathrm{Ca(OH)_2}(\\mathrm{aq}) + \\mathrm{H_2}(\\mathrm{g})' },
        'Calcium is below magnesium in group 2, so it has an extra shell, '
        + 'a larger radius and more shielding.',
      ],
      answer: 'Calcium loses its two outer electrons more easily than '
        + 'magnesium, because they are further out and better shielded, so '
        + 'cold water is enough for calcium and magnesium needs the extra '
        + 'energy of steam. '
        + 'Note the different products: hydroxide from cold water, oxide '
        + 'from steam.',
    },
    {
      level: 6,
      ask: 'Limestone is heated in a kiln at Buipe to make lime for cement. '
        + 'Write the equation, name the type of reaction, and explain why '
        + 'the same treatment does nothing useful to sodium carbonate.',
      steps: [
        { math: '\\mathrm{CaCO_3}(\\mathrm{s}) \\rightarrow \\mathrm{CaO}(\\mathrm{s}) + \\mathrm{CO_2}(\\mathrm{g})', why: 'Thermal decomposition: one substance broken up by heat alone.' },
        'The calcium ion is small and carries a charge of plus two, so it '
        + 'pulls strongly on the carbonate ion and distorts it.',
        'That distortion weakens the bond inside the carbonate, so it '
        + 'breaks at the temperature of a kiln.',
        'The sodium ion is larger and carries only plus one, so it '
        + 'distorts the carbonate far less.',
      ],
      answer: 'Thermal decomposition to calcium oxide and carbon dioxide. '
        + 'Group 2 carbonates decompose on strong heating because the '
        + 'small, doubly charged cation polarises the carbonate ion; group '
        + '1 carbonates are stable because their cations are larger and '
        + 'singly charged. '
        + 'That is why there is a lime kiln and not a soda kiln.',
    },
  ],

  traps: [
    {
      mistake: 'Explaining a group trend with the word reactive and nothing more.',
      why: 'The marks are for atomic radius, shielding and ionisation '
        + 'energy. '
        + 'Name all three.',
    },
    {
      mistake: 'Saying nuclear charge rises down the group, so reactivity falls.',
      why: 'It does rise, but the extra shell and the extra shielding '
        + 'outweigh it. '
        + 'Say that they outweigh it rather than ignoring the charge.',
    },
    {
      mistake: 'Giving the oxide as the product of a metal with cold water.',
      why: 'Cold water gives the hydroxide. '
        + 'Steam gives the oxide. '
        + 'The question tells you which one it is asking about.',
    },
    {
      mistake: 'Writing "it reacts vigorously" as the observation.',
      why: 'An observation is what an eye or an ear records: the metal '
        + 'melts, it moves on the surface, a gas is given off, a flame '
        + 'appears.',
    },
    {
      mistake: 'Doing a flame test on a dirty wire.',
      why: 'Sodium contamination is everywhere and its golden yellow hides '
        + 'every other colour. '
        + 'Clean the wire in acid and heat it until no colour shows.',
    },
  ],

  extension:
    'Group 2 sulphates run the other way from the hydroxides. '
    + 'Going down the group the hydroxides get more soluble and the '
    + 'sulphates get less. '
    + 'Barium sulphate is so insoluble that it is safe to swallow, which is '
    + 'why a patient drinks it before an X ray of the gut. '
    + 'The barium ion itself is poisonous, but bound in that sulphate it '
    + 'never dissolves and so never reaches the blood.',

  questions: [
    {
      id: 'g12-1',
      ask: 'Sodium is kept under oil because:',
      kind: 'choice',
      options: [
        'It loses its outer electron easily and so reacts with air and water',
        'It is too soft to handle dry',
        'Oil makes it shine',
      ],
      answer: 'It loses its outer electron easily and so reacts with air and water',
      teach: 'Copper holds its electrons tightly and needs no protection. '
        + 'The difference is ionisation energy.',
      level: 3,
    },
    {
      id: 'g12-2',
      ask: 'Going down group 1, the reactivity:',
      kind: 'choice',
      options: [
        'Increases, because the outer electron is further out and better shielded',
        'Decreases, because the nuclear charge rises',
        'Stays the same, because the outer shell always holds one electron',
      ],
      answer: 'Increases, because the outer electron is further out and better shielded',
      teach: 'The nuclear charge does rise, but the extra shell and '
        + 'shielding outweigh it.',
      level: 4,
    },
    {
      id: 'g12-3',
      ask: 'A golden yellow flame test indicates:',
      kind: 'choice',
      options: ['Sodium', 'Potassium', 'Calcium'],
      answer: 'Sodium',
      teach: 'Potassium is lilac and calcium brick red. '
        + 'Sodium is the one that hides the others, so the wire must be '
        + 'clean.',
      level: 3,
    },
    {
      id: 'g12-4',
      ask: 'Calcium carbonate decomposes on strong heating but sodium '
        + 'carbonate does not, because the calcium ion is:',
      kind: 'choice',
      options: [
        'Smaller and doubly charged, so it distorts the carbonate ion',
        'Heavier, so it falls apart faster',
        'Less reactive than sodium',
      ],
      answer: 'Smaller and doubly charged, so it distorts the carbonate ion',
      teach: 'That distortion weakens the bonds inside the carbonate. '
        + 'It is why lime is made from limestone in a kiln.',
      level: 6,
    },
  ],
})

/* ── the halogens ───────────────────────────────────────────────────────── */

teach({
  topicId: 'halogens-chem',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The halogens have seven outer electrons, so they gain one and form '
      + 'ions of charge $-1$. '
      + 'Reactivity falls going down the group, which is the opposite of '
      + 'the metals, and for the same reason: the incoming electron is '
      + 'further from the nucleus and better shielded.',
    method: [
      'Say that the halogen gains an electron, so it is looking for one.',
      'For a trend, say the atom is bigger down the group, so it attracts an electron less.',
      'For a displacement, put the more reactive halogen above the less reactive one.',
    ],
  },

  why:
    'Ghana Water adds a little chlorine to the supply at the treatment '
    + 'works, and a cup of it will kill the bacteria in a bucket of river '
    + 'water. '
    + 'In a shop on the same street, bleach for washing clothes is sold by '
    + 'the bottle and it is made from the same element. '
    + 'And the salt in the kitchen is labelled iodised, with iodine added '
    + 'on purpose because leaving it out causes goitre. '
    + 'One element kills, one bleaches, and one is added to food to keep '
    + 'people well. '
    + 'What do they have in common, and why are they not '
    + 'interchangeable?',

  notation:
    'The group 7 elements are called the halogens, which means salt '
    + 'former. '
    + 'They are fluorine, chlorine, bromine, iodine and astatine. '
    + 'Each exists as a molecule of two atoms, so chlorine gas is '
    + '$\\mathrm{Cl_2}$ and never $\\mathrm{Cl}$. '
    + 'The ion formed is called a halide and carries a charge of $-1$: '
    + 'chloride, bromide, iodide. '
    + 'Note the spelling carefully, because chlorine and chloride are '
    + 'different substances and an examiner reads which one you wrote. '
    + 'Displacement means a more reactive halogen pushing a less reactive '
    + 'one out of its salt. '
    + 'Electron affinity is the energy change when an atom gains an '
    + 'electron, and it is the quantity that falls down this group.',

  idea:
    'Every halogen has seven outer electrons, one short of a full shell. '
    + 'So a halogen reacts by gaining one electron, becoming an ion of '
    + 'charge $-1$. '
    + 'Going down the group the atom has one more shell, so the incoming '
    + 'electron would sit further from the nucleus and behind more '
    + 'shielding. '
    + 'The attraction for it is therefore weaker, and reactivity falls down '
    + 'the group. '
    + 'This is the same cause as in group 1 producing the opposite trend, '
    + 'because here the atom wants to pull an electron in rather than push '
    + 'one out. '
    + 'The physical states change down the group too, from gases to a '
    + 'liquid to a solid, because the molecules get bigger and the forces '
    + 'between them get stronger. '
    + 'A more reactive halogen displaces a less reactive one from a '
    + 'solution of its salt, '
    + '$$\\mathrm{Cl_2}(\\mathrm{aq}) + '
    + '2\\mathrm{KBr}(\\mathrm{aq}) \\rightarrow '
    + '2\\mathrm{KCl}(\\mathrm{aq}) + \\mathrm{Br_2}(\\mathrm{aq}).$$ '
    + 'Chlorine in water makes a mixture of hydrochloric and chloric acids '
    + 'which bleaches, and chlorine in cold dilute alkali makes the '
    + 'hypochlorite that is sold as bleach. '
    + 'Halide ions in solution are identified with silver nitrate: '
    + 'chloride gives a white precipitate, bromide a cream one and iodide a '
    + 'yellow one.',

  tables: [
    {
      caption: 'The halogens at room temperature, going down the group',
      columns: ['Halogen', 'State', 'Colour', 'Reactivity'],
      rows: [
        ['Fluorine', 'Gas', 'Pale yellow', 'Most reactive of all elements'],
        ['Chlorine', 'Gas', 'Greenish yellow', 'Very reactive'],
        ['Bromine', 'Liquid', 'Red brown', 'Less reactive than chlorine'],
        ['Iodine', 'Solid', 'Grey black, violet vapour', 'Least reactive of the four'],
      ],
      note: 'Two trends run down this table at once. '
        + 'The melting point rises, because the molecules get bigger, and '
        + 'the reactivity falls, because the atoms attract an electron less '
        + 'strongly.',
    },
    {
      caption: 'Which halogen displaces which, and what is seen when it does',
      columns: ['Added to', 'Chlorine water', 'Bromine water', 'Iodine solution'],
      rows: [
        ['Potassium chloride', 'No change', 'No change', 'No change'],
        ['Potassium bromide', 'Turns orange: bromine set free', 'No change', 'No change'],
        ['Potassium iodide', 'Turns brown: iodine set free',
          'Turns brown: iodine set free', 'No change'],
      ],
      note: 'The pattern is a staircase. '
        + 'A halogen displaces every halide below it and none above it, '
        + 'which is the whole of the evidence for the order of reactivity.',
    },
    {
      caption: 'Testing a solution for a halide ion with silver nitrate',
      columns: ['Halide present', 'Precipitate with silver nitrate', 'In ammonia solution'],
      rows: [
        ['Chloride', 'White', 'Dissolves in dilute ammonia'],
        ['Bromide', 'Cream', 'Dissolves only in concentrated ammonia'],
        ['Iodide', 'Pale yellow', 'Does not dissolve'],
      ],
      note: 'The three colours are close, so the ammonia step is what '
        + 'settles a doubtful case. '
        + 'Dilute nitric acid is added first, to destroy any carbonate that '
        + 'would also give a white precipitate.',
    },
  ],

  figure: {
    alt: 'Two test tubes drawn side by side, each holding a colourless '
      + 'solution of potassium bromide labelled underneath. Above the left '
      + 'tube a dropper is adding chlorine water, and an arrow leads to a '
      + 'third tube on the right showing the same liquid now shaded orange '
      + 'and labelled bromine has been set free. Between them a line of '
      + 'text gives the ionic equation in words: chlorine takes the '
      + 'electrons from the bromide ions, so bromide becomes bromine and '
      + 'chlorine becomes chloride. Below the tubes a vertical arrow runs '
      + 'down a short list of the halogens, fluorine at the top and iodine '
      + 'at the bottom, labelled reactivity falls downwards because the '
      + 'atom attracts an incoming electron less strongly.',
    svg: '<svg viewBox="0 0 660 360" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<path d="M90 60 L90 160 Q90 184 112 184 Q134 184 134 160 L134 60"/>'
      + '<path d="M90 110 L90 160 Q90 184 112 184 Q134 184 134 160 L134 110 Z" '
      + 'fill="#cfd8e8" fill-opacity="0.5" stroke="none"/>'
      + '<text x="112" y="212" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">potassium</text>'
      + '<text x="112" y="228" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">bromide</text>'
      + '<path d="M196 40 L196 76 L190 86 L202 86 L196 76" stroke="#b4531a"/>'
      + '<line x1="196" y1="92" x2="196" y2="112" stroke="#b4531a"/>'
      + '<path d="M190 104 L196 116 L202 104" stroke="#b4531a"/>'
      + '<text x="238" y="68" font-size="12" fill="#b4531a" '
      + 'stroke="none">chlorine water added</text>'
      + '<line x1="260" y1="150" x2="340" y2="150"/>'
      + '<path d="M332 144 L344 150 L332 156"/>'
      + '<path d="M400 60 L400 160 Q400 184 422 184 Q444 184 444 160 L444 60"/>'
      + '<path d="M400 110 L400 160 Q400 184 422 184 Q444 184 444 160 L444 110 Z" '
      + 'fill="#e08a3c" fill-opacity="0.7" stroke="none"/>'
      + '<text x="422" y="212" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">orange: bromine</text>'
      + '<text x="422" y="228" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">has been set free</text>'
      + '<text x="330" y="268" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'chlorine takes the electrons from the bromide ions</text>'
      + '<line x1="556" y1="60" x2="556" y2="190" stroke="#0f8a4d"/>'
      + '<path d="M550 182 L556 194 L562 182" stroke="#0f8a4d"/>'
      + '<text x="572" y="66" font-size="12" fill="currentColor" '
      + 'stroke="none">fluorine</text>'
      + '<text x="572" y="106" font-size="12" fill="currentColor" '
      + 'stroke="none">chlorine</text>'
      + '<text x="572" y="146" font-size="12" fill="currentColor" '
      + 'stroke="none">bromine</text>'
      + '<text x="572" y="186" font-size="12" fill="currentColor" '
      + 'stroke="none">iodine</text>'
      + '<text x="330" y="312" font-size="12" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">'
      + 'reactivity falls downwards: a bigger atom attracts</text>'
      + '<text x="330" y="330" font-size="12" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">'
      + 'an incoming electron less strongly</text>'
      + '</svg>',
  },

  mechanism:
    'The halogens are the best test of whether a learner has understood '
    + 'group trends or memorised one. '
    + 'The cause is identical to group 1: down a group the outer shell is '
    + 'further out and better shielded. '
    + 'But the halogens are doing the opposite job. '
    + 'A metal is trying to push an electron away, and a weaker hold helps '
    + 'it, so reactivity rises down the group. '
    + 'A halogen is trying to pull an electron in, and a weaker hold hurts '
    + 'it, so reactivity falls down the group. '
    + 'One cause, two opposite trends, and the reason they are opposite is '
    + 'the direction the electron is travelling. '
    + 'A candidate who can say that sentence does not need to remember '
    + 'either trend separately. '
    + 'Displacement is how we know the order, and it is worth seeing as a '
    + 'competition for electrons. '
    + 'Chlorine water added to potassium bromide turns orange. '
    + 'What happened is that chlorine, having the stronger pull, took the '
    + 'electrons off the bromide ions. '
    + 'The bromide became bromine, which is the orange colour, and the '
    + 'chlorine became chloride, which is colourless and invisible. '
    + 'So the ionic equation is '
    + '$\\mathrm{Cl_2} + 2\\mathrm{Br}^- \\rightarrow '
    + '2\\mathrm{Cl}^- + \\mathrm{Br_2}$, '
    + 'and the potassium is a spectator that takes no part. '
    + 'Writing the ionic equation without the potassium is often its own '
    + 'mark, because it shows which particles actually changed. '
    + 'The reverse does not happen: bromine added to potassium chloride '
    + 'gives no change, because bromine has the weaker pull and cannot take '
    + 'the electrons. '
    + 'Those two sentences together, the change and the no change, are what '
    + 'proves the order. '
    + 'One result follows that surprises learners. '
    + 'The melting and boiling points rise down the group while the '
    + 'reactivity falls, so the two trends run opposite ways in the same '
    + 'table. '
    + 'They are not in conflict, because they are about different things. '
    + 'Reactivity is about the pull of one nucleus on one electron. '
    + 'Melting point is about the forces between whole molecules, and '
    + 'bigger molecules attract each other more, which is why iodine is a '
    + 'solid and chlorine a gas. '
    + 'Four places lose marks. '
    + 'The first is writing $\\mathrm{Cl}$ for chlorine gas. '
    + 'It is $\\mathrm{Cl_2}$, a molecule of two atoms, and the balancing '
    + 'depends on it. '
    + 'The second is confusing chlorine with chloride. '
    + 'Chlorine is the greenish gas that bleaches and kills; chloride is '
    + 'the harmless ion in table salt. '
    + 'The third is giving the colour change without saying what it was '
    + 'before. '
    + '"The solution turned brown" is half an observation; "the colourless '
    + 'solution turned brown" is the whole one. '
    + 'The fourth is the silver nitrate test without the nitric acid. '
    + 'A carbonate in the sample would also give a white precipitate, so '
    + 'dilute nitric acid is added first to destroy it, and a question '
    + 'asking why wants exactly that. '
    + 'Back to the opening question. '
    + 'All three uses rest on the same property, the hunger for an '
    + 'electron. '
    + 'Chlorine kills bacteria and bleaches dye because it oxidises them, '
    + 'that is, takes their electrons, and it is reactive enough to do so '
    + 'at the tiny concentration left in drinking water. '
    + 'Iodine is far gentler, which is exactly why a trace of iodide can '
    + 'sit in salt and be eaten: the body needs it to make a thyroid '
    + 'hormone, and without it the gland swells into a goitre. '
    + 'So they are not interchangeable because their place in the group '
    + 'sets how violently each one acts. '
    + 'A note on apparatus. '
    + 'Chlorine gas should only be made in a fume cupboard and a school '
    + 'without one should not try. '
    + 'The displacement tests, however, can be done with bromine water and '
    + 'potassium iodide solution in a test tube rack with no special '
    + 'equipment, and the silver nitrate tests need only a dropper and '
    + 'three solutions. '
    + 'Those are the experiments the examination actually asks about.',

  recap:
    'The periodic table has a column near the right hand side whose '
    + 'elements are not metals at all. '
    + 'They are group 7, and they are coloured, poisonous and useful. '
    + 'You know two of them already. '
    + 'Chlorine is the smell of a swimming pool and of bleach, and it is '
    + 'what makes treated water safe to drink. '
    + 'Iodine is the brown liquid once painted on cuts, and it is added to '
    + 'salt. '
    + 'A non metal reacts by taking electrons rather than by giving them '
    + 'away, which is the opposite of a metal. '
    + 'This lesson follows what that difference does to the whole group.',

  method: [
    'State that the halogen has seven outer electrons and gains one.',
    'Write the element as a molecule of two atoms, never as a single atom.',
    'For a trend, say the atom is larger and better shielded down the group.',
    'Conclude that the attraction for an incoming electron is weaker, so reactivity falls.',
    'For a displacement, check that the added halogen is above the halide in the group.',
    'Write the ionic equation, leaving out the spectator ion.',
    'Give the colour before and the colour after, not just the change.',
    'For a halide test, acidify with dilute nitric acid first, then add silver nitrate.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Chlorine water is added to a colourless solution of potassium '
        + 'iodide. '
        + 'State what is seen and write the equation.',
      steps: [
        'Chlorine is above iodine in group 7, so it is the more reactive '
        + 'and will displace the iodine.',
        { math: '\\mathrm{Cl_2}(\\mathrm{aq}) + 2\\mathrm{KI}(\\mathrm{aq}) \\rightarrow 2\\mathrm{KCl}(\\mathrm{aq}) + \\mathrm{I_2}(\\mathrm{aq})' },
      ],
      answer: 'The colourless solution turns brown, because iodine has been '
        + 'set free. '
        + 'Naming the colour before and after is what makes it an '
        + 'observation.',
    },
    {
      level: 4,
      ask: 'Write the ionic equation for the reaction of bromine with '
        + 'potassium iodide solution, and explain why the reverse reaction '
        + 'does not happen.',
      steps: [
        { math: '\\mathrm{Br_2} + 2\\mathrm{I}^- \\rightarrow 2\\mathrm{Br}^- + \\mathrm{I_2}', why: 'The potassium ion takes no part, so it is left out of the ionic equation.' },
        'Bromine is above iodine, so it attracts electrons more strongly '
        + 'and takes them from the iodide ions.',
        'Iodine is below bromine, so it cannot take electrons from bromide '
        + 'ions.',
      ],
      answer: 'The ionic equation above. '
        + 'Iodine added to potassium bromide gives no change, because '
        + 'iodine has the weaker attraction for electrons. '
        + 'The change in one direction and the no change in the other are '
        + 'together the evidence for the order.',
    },
    {
      level: 5,
      ask: 'An unknown solution gives a cream precipitate with silver '
        + 'nitrate, which dissolves only in concentrated ammonia. '
        + 'Identify the ion and describe the full test, including one '
        + 'precaution.',
      steps: [
        'A cream precipitate with silver nitrate indicates a bromide.',
        'Add dilute nitric acid first, to destroy any carbonate, which '
        + 'would also give a precipitate.',
        'Then add silver nitrate solution and note the colour.',
        'Add dilute ammonia: a bromide precipitate does not dissolve. '
        + 'Add concentrated ammonia: it does.',
      ],
      answer: 'The ion is bromide. '
        + 'The precaution is acidifying with dilute nitric acid before '
        + 'adding the silver nitrate, because a carbonate in the sample '
        + 'would otherwise give a white precipitate and be mistaken for a '
        + 'chloride.',
    },
    {
      level: 6,
      ask: 'Explain why iodine is a solid and chlorine a gas at room '
        + 'temperature, although chlorine is the more reactive of the two.',
      steps: [
        'Reactivity is about the pull of the nucleus on one incoming '
        + 'electron, which weakens down the group.',
        'Melting and boiling points are about the forces between whole '
        + 'molecules, which is a different question.',
        'An iodine molecule has far more electrons than a chlorine '
        + 'molecule, so the forces between iodine molecules are much '
        + 'stronger.',
        'More energy is therefore needed to separate iodine molecules.',
      ],
      answer: 'The two trends run opposite ways because they are about '
        + 'different forces. '
        + 'Chlorine is more reactive because its atom attracts an electron '
        + 'more strongly; iodine is a solid because its larger molecules '
        + 'attract each other more strongly. '
        + 'Saying that they are different forces is the mark.',
    },
  ],

  traps: [
    {
      mistake: 'Writing chlorine gas as $\\mathrm{Cl}$.',
      why: 'It is $\\mathrm{Cl_2}$. '
        + 'Every balanced equation in the topic depends on the two.',
    },
    {
      mistake: 'Using chlorine and chloride as though they meant the same thing.',
      why: 'Chlorine is the greenish gas that bleaches. '
        + 'Chloride is the ion in table salt. '
        + 'The examiner reads which word you wrote.',
    },
    {
      mistake: 'Expecting reactivity to rise down the group as it does for metals.',
      why: 'A halogen gains an electron, so a bigger, better shielded atom '
        + 'is worse at its job, not better.',
    },
    {
      mistake: 'Omitting the dilute nitric acid before the silver nitrate.',
      why: 'A carbonate would also give a white precipitate. '
        + 'The acid destroys it first, so the test means what it says.',
    },
    {
      mistake: 'Reporting a colour change without the starting colour.',
      why: '"Turned brown" could be from anything. '
        + '"The colourless solution turned brown" is the observation that '
        + 'scores.',
    },
  ],

  extension:
    'Chlorine in drinking water is a judgement, not a free gift. '
    + 'Too little and the bacteria survive. '
    + 'Too much and the chlorine reacts with natural matter in the water to '
    + 'form compounds that are themselves unwelcome in large amounts. '
    + 'So a treatment works aims at a small residual, enough to keep the '
    + 'pipes safe all the way to the tap and no more. '
    + 'That is why treated water smells faintly of chlorine and should.',

  questions: [
    {
      id: 'hal-1',
      ask: 'A halogen atom reacts by:',
      kind: 'choice',
      options: [
        'Gaining one electron to form an ion of charge minus one',
        'Losing one electron to form an ion of charge plus one',
        'Sharing all seven of its outer electrons',
      ],
      answer: 'Gaining one electron to form an ion of charge minus one',
      teach: 'Seven outer electrons means one short of a full shell. '
        + 'That is the whole of group 7 chemistry.',
      level: 3,
    },
    {
      id: 'hal-2',
      ask: 'Chlorine water added to potassium bromide solution turns it:',
      kind: 'choice',
      options: [
        'Orange, because bromine has been displaced',
        'Colourless, because chlorine is colourless',
        'There is no change',
      ],
      answer: 'Orange, because bromine has been displaced',
      teach: 'Chlorine is above bromine, so it takes the electrons from the '
        + 'bromide ions and bromine is set free.',
      level: 4,
    },
    {
      id: 'hal-3',
      ask: 'A white precipitate with silver nitrate, which dissolves in '
        + 'dilute ammonia, indicates:',
      kind: 'choice',
      options: ['Chloride', 'Bromide', 'Iodide'],
      answer: 'Chloride',
      teach: 'Bromide is cream and needs concentrated ammonia; iodide is '
        + 'yellow and does not dissolve at all.',
      level: 5,
    },
    {
      id: 'hal-4',
      ask: 'Reactivity falls down group 7 but rises down group 1 because:',
      kind: 'choice',
      options: [
        'A weaker hold on the outer shell helps a metal lose an electron and hinders a halogen gaining one',
        'Group 7 elements have no shielding',
        'The nuclear charge falls down group 7',
      ],
      answer: 'A weaker hold on the outer shell helps a metal lose an electron and hinders a halogen gaining one',
      teach: 'One cause, two opposite trends, and the difference is which '
        + 'way the electron is travelling.',
      level: 6,
    },
  ],
})

/* ── alkanes, alkenes and alkynes ───────────────────────────────────────── */

teach({
  topicId: 'hydrocarbons-chem',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A hydrocarbon has carbon and hydrogen only. '
      + 'Alkanes have single bonds and are $\\mathrm{C}_n\\mathrm{H}_{2n+2}$. '
      + 'Alkenes have one double bond and are '
      + '$\\mathrm{C}_n\\mathrm{H}_{2n}$. '
      + 'Alkynes have a triple bond and are '
      + '$\\mathrm{C}_n\\mathrm{H}_{2n-2}$. '
      + 'The single bonds substitute; the multiple bonds add.',
    method: [
      'Count the carbon atoms to get the stem: meth, eth, prop, but, pent.',
      'Look at the bonds between carbons to get the ending: ane, ene or yne.',
      'For a reaction, ask whether the molecule is saturated, and so whether it adds or substitutes.',
    ],
  },

  why:
    'A trader wants a bunch of plantain ripe for market on Friday, not the '
    + 'following Tuesday. '
    + 'She buries a lump of grey carbide in the middle of the bunch, and by '
    + 'Friday the skins have turned. '
    + 'In the same market the cooking gas comes in a cylinder, the lamp '
    + 'burns kerosene, and the candle on the table is wax. '
    + 'All of these are made of nothing but carbon and hydrogen. '
    + 'So how can the same two elements give a gas, a liquid, a solid and '
    + 'something that ripens fruit?',

  notation:
    'A homologous series is a family of compounds with the same general '
    + 'formula, whose members differ by $\\mathrm{CH_2}$ and whose '
    + 'chemistry is therefore alike. '
    + 'The stem of a name counts the carbons: meth for one, eth for two, '
    + 'prop for three, but for four, pent for five, hex for six. '
    + 'The ending names the bonding: ane for all single bonds, ene for a '
    + 'double bond, yne for a triple bond. '
    + 'So propene has three carbons and one double bond. '
    + 'Saturated means every carbon to carbon bond is a single bond, so no '
    + 'more atoms can be taken in. '
    + 'Unsaturated means there is a double or triple bond, so more atoms '
    + 'can be added. '
    + 'Ethyne is the gas the carbide makes, and its older name is '
    + 'acetylene.',

  idea:
    'A hydrocarbon contains carbon and hydrogen and nothing else. '
    + 'The alkanes are saturated, with general formula '
    + '$\\mathrm{C}_n\\mathrm{H}_{2n+2}$: methane, ethane, propane, '
    + 'butane. '
    + 'They are unreactive. '
    + 'Both the carbon to carbon single bond and the carbon to '
    + 'hydrogen bond are strong, and neither has any electrical bias, '
    + 'so nothing is drawn to them. '
    + 'Alkanes have two reactions worth knowing. '
    + 'They burn completely to carbon dioxide and water. '
    + 'And they substitute with a halogen in ultraviolet light, where '
    + 'a halogen atom takes the place of a hydrogen. '
    + 'The alkenes have one carbon to carbon double bond and the '
    + 'formula $\\mathrm{C}_n\\mathrm{H}_{2n}$: ethene, propene, '
    + 'butene. '
    + 'A double bond is crowded with electrons, so anything looking '
    + 'for electrons goes to it. '
    + 'Alkenes therefore react by addition. '
    + 'Both carbons take on a new atom, and the double bond becomes a '
    + 'single one: $$\\mathrm{C_2H_4} + \\mathrm{Br_2} \\rightarrow '
    + '\\mathrm{C_2H_4Br_2}. '
    + '$$ That reaction is also the test for unsaturation. '
    + 'The red brown bromine water loses its colour at once, with no '
    + 'heating needed. '
    + 'Alkenes also add hydrogen over a nickel catalyst, add water to '
    + 'give an alcohol, and join to one another to form polymers. '
    + 'The alkynes have a triple bond and the formula '
    + '$\\mathrm{C}_n\\mathrm{H}_{2n-2}$. '
    + 'The first is ethyne, and they add in the same way, but twice '
    + 'over.',

  tables: [
    {
      caption: 'The three series compared on the points that identify them',
      columns: ['Series', 'General formula', 'Bond between carbons',
        'First three members', 'Characteristic reaction'],
      rows: [
        ['Alkanes', 'C n H two n plus two', 'Single', 'Methane, ethane, propane',
          'Substitution, and burning'],
        ['Alkenes', 'C n H two n', 'One double', 'Ethene, propene, butene',
          'Addition across the double bond'],
        ['Alkynes', 'C n H two n minus two', 'One triple', 'Ethyne, propyne, butyne',
          'Addition, twice over'],
      ],
      note: 'A formula alone tells you the series. '
        + 'Four carbons with ten hydrogens is an alkane; four with eight is '
        + 'an alkene.',
    },
    {
      caption: 'Why the first members of the alkanes are gases and the later ones are not',
      columns: ['Alkane', 'Carbons', 'State at room temperature', 'Everyday use'],
      rows: [
        ['Methane', '1', 'Gas', 'Natural gas, biogas from a digester'],
        ['Propane and butane', '3 and 4', 'Gas under pressure, liquid in the cylinder',
          'Cooking gas'],
        ['Octane and its neighbours', 'About 8', 'Liquid', 'Petrol'],
        ['Kerosene range', 'About 12', 'Liquid', 'Lamp and stove fuel'],
        ['Wax range', 'Over 20', 'Solid', 'Candles'],
      ],
      note: 'Longer molecules attract each other more, so more heat is '
        + 'needed to separate them. '
        + 'That single sentence explains the whole column.',
    },
  ],

  figure: {
    alt: 'Three molecules drawn side by side as letters joined by lines. On '
      + 'the left is ethane, with two carbon atoms joined by one single '
      + 'line and three hydrogen atoms on each carbon, labelled ethane, '
      + 'saturated, six hydrogens. In the middle is ethene, with two '
      + 'carbons joined by two parallel lines standing for the double bond '
      + 'and two hydrogens on each carbon, labelled ethene, unsaturated, '
      + 'four hydrogens. On the right is ethyne, with two carbons joined '
      + 'by three parallel lines and one hydrogen on each carbon, labelled '
      + 'ethyne, unsaturated, two hydrogens. Beneath the three a line of '
      + 'text says that each extra bond between the carbons costs two '
      + 'hydrogens, and a second line says bromine water loses its colour '
      + 'with the middle and right molecules and not with the left one.',
    svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="70" y="130" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<text x="150" y="130" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<line x1="84" y1="124" x2="136" y2="124"/>'
      + '<line x1="70" y1="112" x2="70" y2="84"/>'
      + '<text x="70" y="76" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">H</text>'
      + '<line x1="70" y1="136" x2="70" y2="162"/>'
      + '<text x="70" y="180" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">H</text>'
      + '<line x1="58" y1="124" x2="34" y2="124"/>'
      + '<text x="24" y="130" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">H</text>'
      + '<line x1="150" y1="112" x2="150" y2="84"/>'
      + '<text x="150" y="76" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">H</text>'
      + '<line x1="150" y1="136" x2="150" y2="162"/>'
      + '<text x="150" y="180" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">H</text>'
      + '<line x1="162" y1="124" x2="186" y2="124"/>'
      + '<text x="196" y="130" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">H</text>'
      + '<text x="110" y="222" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">ethane: one bond</text>'
      + '<text x="110" y="240" font-size="13" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">saturated, six H</text>'
      + '<text x="300" y="130" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<text x="380" y="130" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<line x1="314" y1="118" x2="366" y2="118" stroke="#b4531a"/>'
      + '<line x1="314" y1="130" x2="366" y2="130" stroke="#b4531a"/>'
      + '<line x1="300" y1="112" x2="300" y2="84"/>'
      + '<text x="300" y="76" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">H</text>'
      + '<line x1="288" y1="130" x2="264" y2="146"/>'
      + '<text x="254" y="158" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">H</text>'
      + '<line x1="380" y1="112" x2="380" y2="84"/>'
      + '<text x="380" y="76" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">H</text>'
      + '<line x1="392" y1="130" x2="416" y2="146"/>'
      + '<text x="426" y="158" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">H</text>'
      + '<text x="340" y="222" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">ethene: double bond</text>'
      + '<text x="340" y="240" font-size="13" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">unsaturated, four H</text>'
      + '<text x="540" y="130" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<text x="620" y="130" font-size="20" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<line x1="554" y1="112" x2="606" y2="112" stroke="#7c3aed"/>'
      + '<line x1="554" y1="124" x2="606" y2="124" stroke="#7c3aed"/>'
      + '<line x1="554" y1="136" x2="606" y2="136" stroke="#7c3aed"/>'
      + '<line x1="528" y1="124" x2="504" y2="124"/>'
      + '<text x="494" y="130" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">H</text>'
      + '<line x1="632" y1="124" x2="656" y2="124"/>'
      + '<text x="666" y="130" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">H</text>'
      + '<text x="580" y="222" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">ethyne: triple bond</text>'
      + '<text x="580" y="240" font-size="13" text-anchor="middle" '
      + 'fill="#7c3aed" stroke="none">unsaturated, two H</text>'
      + '<text x="340" y="282" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'each extra bond between the carbons costs two hydrogens</text>'
      + '<text x="340" y="302" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'bromine water loses its colour with the middle and the right, not the left</text>'
      + '</svg>',
  },

  mechanism:
    'One idea runs through the whole of this topic: a double or triple '
    + 'bond is a weak point, and a single bond is not. '
    + 'The carbon to carbon single bond in an alkane is strong and has no '
    + 'electrical bias, so nothing is attracted to it and an alkane sits '
    + 'there doing nothing. '
    + 'That is why alkanes are good fuels and poor chemicals: they burn '
    + 'when you force them to and otherwise ignore the world. '
    + 'To make an alkane react at all you need ultraviolet light to break '
    + 'a bond first, and then a halogen atom takes the place of a hydrogen, '
    + 'which is substitution: one thing swapped for another, with a small '
    + 'molecule like hydrogen chloride leaving. '
    + 'A double bond is different. '
    + 'It holds four electrons between the same two carbons instead of two, '
    + 'so it is a crowded, exposed region, and anything looking for '
    + 'electrons goes straight for it. '
    + 'The reaction is addition: the second bond opens, both carbons take '
    + 'on a new atom, and nothing leaves. '
    + 'So the test of whether a reaction is substitution or addition is '
    + 'simply whether a small molecule was expelled. '
    + 'Ethene plus bromine gives dibromoethane and nothing else, so it is '
    + 'addition. '
    + 'Ethane plus bromine gives bromoethane and hydrogen bromide, so it is '
    + 'substitution. '
    + 'This is the distinction examiners test most often in the topic and '
    + 'it is worth being able to state in one sentence. '
    + 'The bromine water test follows from it directly, and the conditions '
    + 'are part of the answer. '
    + 'Shake an unknown hydrocarbon with bromine water. '
    + 'If the red brown colour disappears immediately, in the cold and in '
    + 'the dark, the compound is unsaturated, because an addition across a '
    + 'double bond needs nothing to start it. '
    + 'If the colour stays, the compound is saturated. '
    + 'An alkane will eventually react with bromine, but only in '
    + 'ultraviolet light, and that is why the words cold and dark belong in '
    + 'the answer: they are what rule the alkane out. '
    + 'Now the plantain. '
    + 'Calcium carbide and water give ethyne, '
    + '$\\mathrm{CaC_2} + 2\\mathrm{H_2O} \\rightarrow '
    + '\\mathrm{Ca(OH)_2} + \\mathrm{C_2H_2}$, '
    + 'and the moisture in the bunch is enough to start it. '
    + 'Ethyne behaves rather like ethene, which is the gas a ripening fruit '
    + 'makes for itself and which signals the rest of the bunch to ripen '
    + 'too. '
    + 'So the trader is not adding a chemical that colours the skin; she is '
    + 'imitating the plant’s own signal and bringing the whole bunch '
    + 'forward at once. '
    + 'Whether it is safe is a separate question and depends on what else '
    + 'is in industrial carbide, which is why the practice is restricted in '
    + 'some countries. '
    + 'Three places lose marks. '
    + 'The first is naming. '
    + 'Count the carbons for the stem and look at the bond for the ending, '
    + 'in that order, and the name comes out. '
    + 'Butene has four carbons, so a candidate who writes butene for '
    + '$\\mathrm{C_3H_6}$ has counted wrongly before thinking about the '
    + 'bond. '
    + 'The second is giving the bromine water test without its conditions. '
    + 'Decolourised in the cold and in the dark is the full answer, and the '
    + 'conditions carry the second mark. '
    + 'The third is writing combustion products carelessly. '
    + 'Complete combustion gives carbon dioxide and water only; incomplete '
    + 'combustion, with too little air, gives carbon monoxide and soot, '
    + 'which is why a kerosene lamp with a badly trimmed wick smokes and '
    + 'why a charcoal pot in a closed room kills. '
    + 'Both equations are examinable and they are not the same equation. '
    + 'A note on apparatus. '
    + 'Bromine water is the one reagent worth having for this topic and '
    + 'very little is needed. '
    + 'Ethene can be made from ethanol and concentrated sulphuric acid, '
    + 'which is not a safe demonstration without a fume cupboard, so a '
    + 'school without one should learn the equations and watch the test '
    + 'done with bromine water on cooking oil instead, which is '
    + 'unsaturated and decolourises it.',

  recap:
    'Carbon is unusual because one of its atoms can join to four others, '
    + 'including to other carbon atoms. '
    + 'So carbon atoms can form chains, and the chains can be short or very '
    + 'long. '
    + 'A compound of carbon and hydrogen only is called a hydrocarbon. '
    + 'You have met several without naming them: cooking gas, petrol, '
    + 'kerosene, candle wax. '
    + 'All of them came out of crude oil, and they differ mainly in how '
    + 'long their chains are. '
    + 'This lesson sorts hydrocarbons into three families, by what their '
    + 'carbon atoms do with each other, and that sorting predicts how each '
    + 'family reacts.',

  method: [
    'Count the carbon atoms and write the stem: meth, eth, prop, but, pent.',
    'Look at the carbon to carbon bonds and add the ending: ane, ene or yne.',
    'Check the formula against the general formula for that series.',
    'Decide whether the molecule is saturated or unsaturated.',
    'A saturated molecule substitutes, and needs ultraviolet light to do it.',
    'An unsaturated molecule adds, in the cold, and nothing leaves.',
    'For a test, say bromine water is decolourised in the cold and in the dark.',
    'For combustion, say whether the air supply is enough, and give the right products.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the hydrocarbon $\\mathrm{C_3H_6}$ and state whether it is '
        + 'saturated.',
      steps: [
        'Three carbons, so the stem is prop.',
        { math: '\\mathrm{C}_n\\mathrm{H}_{2n}\\ \\text{with}\\ n = 3\\ \\text{gives}\\ \\mathrm{C_3H_6}', why: 'It fits the alkene formula, so there is one double bond.' },
      ],
      answer: 'Propene, and it is unsaturated. '
        + 'The matching alkane would be $\\mathrm{C_3H_8}$, propane, with '
        + 'two more hydrogens.',
    },
    {
      level: 4,
      ask: 'Write the equation for the complete combustion of ethane, and '
        + 'say what changes if the air supply is limited.',
      steps: [
        { math: '2\\mathrm{C_2H_6} + 7\\mathrm{O_2} \\rightarrow 4\\mathrm{CO_2} + 6\\mathrm{H_2O}', why: 'Balance the carbons, then the hydrogens, then the oxygens last.' },
        'With too little air the carbon cannot be fully oxidised.',
      ],
      answer: 'The equation above for complete combustion. '
        + 'With a limited air supply the products include carbon monoxide '
        + 'and soot instead of carbon dioxide alone, which is why a smoky '
        + 'flame is a sign of poor ventilation and a real danger indoors.',
    },
    {
      level: 5,
      ask: 'Two colourless gases, one ethane and one ethene, are in '
        + 'unlabelled jars. '
        + 'Describe a test to tell them apart, with the observation and the '
        + 'equation.',
      steps: [
        'Shake a little bromine water with a sample of each, in the cold '
        + 'and out of direct sunlight.',
        { math: '\\mathrm{C_2H_4} + \\mathrm{Br_2} \\rightarrow \\mathrm{C_2H_4Br_2}', why: 'Addition across the double bond, with nothing expelled.' },
        'Ethane does not react under these conditions, because it is '
        + 'saturated and substitution needs ultraviolet light.',
      ],
      answer: 'The jar whose bromine water loses its red brown colour at '
        + 'once holds ethene. '
        + 'The other, where the colour stays, holds ethane. '
        + 'The words in the cold and in the dark are part of the answer, '
        + 'because they are what rules out the alkane.',
    },
    {
      level: 6,
      ask: 'Calcium carbide is buried in a bunch of plantain to ripen it. '
        + 'Write the equation for the gas produced, name the gas, and '
        + 'explain in terms of bonding why it reacts with bromine water '
        + 'twice over.',
      steps: [
        { math: '\\mathrm{CaC_2} + 2\\mathrm{H_2O} \\rightarrow \\mathrm{Ca(OH)_2} + \\mathrm{C_2H_2}', why: 'The moisture in the bunch is enough to start it.' },
        'The gas is ethyne, formerly called acetylene, with a triple bond '
        + 'between its two carbons.',
        'A triple bond can open once to take on two bromine atoms, leaving '
        + 'a double bond.',
        'That double bond can open again to take on two more.',
      ],
      answer: 'Ethyne, $\\mathrm{C_2H_2}$. '
        + 'It adds bromine twice because the triple bond opens in two '
        + 'stages, giving first $\\mathrm{C_2H_2Br_2}$ and then '
        + '$\\mathrm{C_2H_2Br_4}$. '
        + 'Ethyne works on the fruit because it mimics ethene, which is '
        + 'the gas a ripening plantain gives off for itself.',
    },
  ],

  traps: [
    {
      mistake: 'Naming $\\mathrm{C_3H_6}$ butene.',
      why: 'Count the carbons for the stem before thinking about the bond. '
        + 'Three carbons is prop, so it is propene.',
    },
    {
      mistake: 'Giving the bromine water test without saying in the cold and in the dark.',
      why: 'An alkane will react with bromine in ultraviolet light. '
        + 'The conditions are what make the test mean unsaturated.',
    },
    {
      mistake: 'Calling an addition reaction a substitution.',
      why: 'In addition nothing leaves the molecule. '
        + 'In substitution a small molecule such as hydrogen bromide is '
        + 'expelled.',
    },
    {
      mistake: 'Writing carbon dioxide as the product of burning in a poor air supply.',
      why: 'Incomplete combustion gives carbon monoxide and soot. '
        + 'The two equations are different and both are examinable.',
    },
    {
      mistake: 'Expecting an alkane to decolourise bromine water on standing.',
      why: 'It is saturated, so there is no double bond to open. '
        + 'Nothing is attracted to a strong, non polar single bond.',
    },
  ],

  extension:
    'Addition is also how plastic is made. '
    + 'Thousands of ethene molecules open their double bonds and join end '
    + 'to end into one very long chain, which is polyethene, the material '
    + 'of a water sachet and a market bag. '
    + 'The chain is unreactive for the same reason an alkane is '
    + 'unreactive, and that is both the use and the problem: a bag that '
    + 'nothing attacks lasts in a gutter for decades.',

  questions: [
    {
      id: 'hc-1',
      ask: 'The general formula of the alkenes is:',
      kind: 'choice',
      options: ['C n H two n', 'C n H two n plus two', 'C n H two n minus two'],
      answer: 'C n H two n',
      teach: 'The alkanes have two more hydrogens and the alkynes two '
        + 'fewer. '
        + 'Each extra bond between carbons costs two hydrogens.',
      level: 3,
    },
    {
      id: 'hc-2',
      ask: 'How many carbon atoms are there in a molecule of butane?',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'But means four. '
        + 'Meth one, eth two, prop three, but four, pent five.',
      level: 3,
    },
    {
      id: 'hc-3',
      ask: 'A gas decolourises bromine water at once, in the cold and in '
        + 'the dark. The gas is:',
      kind: 'choice',
      options: [
        'Unsaturated, so an alkene or an alkyne',
        'Saturated, so an alkane',
        'Not a hydrocarbon at all',
      ],
      answer: 'Unsaturated, so an alkene or an alkyne',
      teach: 'Addition across a multiple bond needs no light and no heat. '
        + 'An alkane would need ultraviolet light.',
      level: 4,
    },
    {
      id: 'hc-4',
      ask: 'In an addition reaction, unlike a substitution:',
      kind: 'choice',
      options: [
        'No small molecule is expelled',
        'A halogen replaces a hydrogen',
        'Ultraviolet light is always needed',
      ],
      answer: 'No small molecule is expelled',
      teach: 'That is the test. '
        + 'Ethene plus bromine gives one product; ethane plus bromine also '
        + 'gives hydrogen bromide.',
      level: 5,
    },
  ],
})

/* ── isomerism ──────────────────────────────────────────────────────────── */

teach({
  topicId: 'isomerism-chem',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Isomers have the same molecular formula and a different '
      + 'arrangement of atoms. '
      + 'So the formula does not settle what a compound is. '
      + 'Because the arrangement is different, the properties are '
      + 'different, and that is why isomerism matters rather than being a '
      + 'curiosity.',
    method: [
      'Draw the longest straight chain first, and count the hydrogens.',
      'Shorten the chain by one carbon and attach it as a branch, in every place it can go.',
      'Check each drawing is really new, by comparing longest chains and branch positions.',
    ],
  },

  why:
    'Two cylinders of cooking gas sit side by side. '
    + 'Both are labelled with the formula '
    + '$\\mathrm{C_4H_{10}}$, so by the formula they hold the same '
    + 'substance. '
    + 'Yet one of them boils at about minus half a degree and the other at '
    + 'about minus twelve, so on a cold morning in Bolgatanga one keeps '
    + 'feeding the burner and the other does not. '
    + 'Nothing has been added and nothing taken away. '
    + 'How can the same formula describe two substances with different '
    + 'boiling points?',

  notation:
    'Isomer comes from Greek words meaning equal parts. '
    + 'A molecular formula counts the atoms, as $\\mathrm{C_4H_{10}}$ '
    + 'does. '
    + 'A structural formula shows which atom is joined to which, as '
    + '$\\mathrm{CH_3CH_2CH_2CH_3}$ does. '
    + 'Isomers share the first and differ in the second. '
    + 'A branch of one carbon on a chain is called a methyl group. '
    + 'The number in a name says which carbon the branch or the double bond '
    + 'is on, counted from whichever end gives the smaller number, so '
    + 'but-1-ene and never but-3-ene. '
    + 'Cis means two groups on the same side of a double bond, and trans '
    + 'means on opposite sides.',

  idea:
    'Two compounds are isomers if they have the same molecular '
    + 'formula and different structures. '
    + 'Structural isomerism takes three forms. '
    + 'Chain isomerism is a difference in the skeleton. '
    + 'Butane is a chain of four, while 2-methylpropane is a chain of '
    + 'three with one carbon hung off the middle. '
    + 'Position isomerism is the same skeleton with a bond or a group '
    + 'in a different place. '
    + 'But-1-ene has its double bond at the end, and but-2-ene has it '
    + 'in the middle. '
    + 'Functional group isomerism is a difference in the kind of '
    + 'compound altogether. '
    + '$\\mathrm{C_2H_6O}$ is either ethanol, which is an alcohol and '
    + 'a liquid, or methoxymethane, which is an ether and a gas. '
    + 'Geometric isomerism is different again. '
    + 'A double bond stops the ends of a molecule from turning, so '
    + 'the groups are locked either on the same side, cis, or on '
    + 'opposite sides, trans. '
    + 'A single bond lets the ends spin freely. '
    + 'So there is no geometric isomerism without a double bond. '
    + 'Isomers differ in physical properties too. '
    + 'The general rule is that a branched molecule boils lower than '
    + 'its straight chain isomer, because branching keeps the '
    + 'molecules from lying close together.',

  tables: [
    {
      caption: 'The two isomers of the cooking gas formula, and how they differ',
      columns: ['Isomer', 'Shape of the skeleton', 'Boiling point', 'Why'],
      rows: [
        ['Butane', 'A straight chain of four carbons', 'About minus half a degree',
          'The chains lie alongside one another and attract along their length'],
        ['2-methylpropane', 'Three carbons with one branch on the middle',
          'About minus twelve degrees',
          'The branch holds the molecules apart, so they attract less'],
      ],
      note: 'Same formula, same atoms, a difference of eleven degrees. '
        + 'That is the whole case for why structure and not formula decides '
        + 'what a substance is.',
    },
    {
      caption: 'The three kinds of structural isomerism, with an example of each',
      columns: ['Kind', 'What differs', 'Example pair'],
      rows: [
        ['Chain', 'The shape of the carbon skeleton', 'Butane and 2-methylpropane'],
        ['Position', 'Where a bond or a group sits on the same skeleton',
          'But-1-ene and but-2-ene'],
        ['Functional group', 'The kind of compound altogether',
          'Ethanol and methoxymethane'],
      ],
      note: 'The third kind is the one that surprises learners, because the '
        + 'two substances are not even in the same family, yet their '
        + 'formulae are identical.',
    },
    {
      caption: 'How many chain isomers each alkane has, and why the count rises so fast',
      columns: ['Alkane', 'Carbons', 'Number of isomers'],
      rows: [
        ['Propane', '3', '1'],
        ['Butane', '4', '2'],
        ['Pentane', '5', '3'],
        ['Hexane', '6', '5'],
        ['Decane', '10', '75'],
      ],
      note: 'Below four carbons there is no room to branch, which is why '
        + 'the count starts at butane. '
        + 'An examination will not ask beyond hexane.',
    },
  ],

  figure: {
    alt: 'Two groups of drawings. The upper group shows the two isomers of '
      + 'the four carbon alkane: on the left four carbon letters in a '
      + 'straight horizontal row joined by single lines, labelled butane, '
      + 'and on the right three carbons in a row with a fourth carbon '
      + 'joined above the middle one, labelled 2-methylpropane, with a '
      + 'note that both have ten hydrogens which are left off the drawing '
      + 'for clearness. The lower group shows geometric isomerism: on the '
      + 'left two carbons joined by a double bond with a methyl group '
      + 'drawn above each carbon, labelled cis, both on the same side, and '
      + 'on the right the same double bond with one methyl group above the '
      + 'left carbon and the other below the right carbon, labelled trans, '
      + 'on opposite sides. A note says the double bond cannot turn, which '
      + 'is why these two cannot change into each other.',
    svg: '<svg viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="40" y="76" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<text x="100" y="76" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<text x="160" y="76" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<text x="220" y="76" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<line x1="52" y1="70" x2="88" y2="70"/>'
      + '<line x1="112" y1="70" x2="148" y2="70"/>'
      + '<line x1="172" y1="70" x2="208" y2="70"/>'
      + '<text x="130" y="116" font-size="13" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">butane: a straight chain of four</text>'
      + '<text x="400" y="76" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<text x="460" y="76" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<text x="520" y="76" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<line x1="412" y1="70" x2="448" y2="70"/>'
      + '<line x1="472" y1="70" x2="508" y2="70"/>'
      + '<text x="460" y="30" font-size="18" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">C</text>'
      + '<line x1="460" y1="40" x2="460" y2="60" stroke="#b4531a"/>'
      + '<text x="460" y="116" font-size="13" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">2-methylpropane: three with a branch</text>'
      + '<text x="340" y="146" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'both have ten hydrogens, left off here for clearness</text>'
      + '<text x="120" y="250" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<text x="200" y="250" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<line x1="134" y1="238" x2="186" y2="238" stroke="#7c3aed"/>'
      + '<line x1="134" y1="250" x2="186" y2="250" stroke="#7c3aed"/>'
      + '<text x="120" y="204" font-size="16" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">CH3</text>'
      + '<line x1="120" y1="212" x2="120" y2="234" stroke="#b4531a"/>'
      + '<text x="200" y="204" font-size="16" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">CH3</text>'
      + '<line x1="200" y1="212" x2="200" y2="234" stroke="#b4531a"/>'
      + '<text x="160" y="300" font-size="13" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">cis: both on the same side</text>'
      + '<text x="440" y="250" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<text x="520" y="250" font-size="18" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">C</text>'
      + '<line x1="454" y1="238" x2="506" y2="238" stroke="#7c3aed"/>'
      + '<line x1="454" y1="250" x2="506" y2="250" stroke="#7c3aed"/>'
      + '<text x="440" y="204" font-size="16" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">CH3</text>'
      + '<line x1="440" y1="212" x2="440" y2="234" stroke="#1d4ed8"/>'
      + '<text x="520" y="290" font-size="16" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">CH3</text>'
      + '<line x1="520" y1="256" x2="520" y2="276" stroke="#1d4ed8"/>'
      + '<text x="480" y="320" font-size="13" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">trans: on opposite sides</text>'
      + '<text x="340" y="356" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'the double bond cannot turn, so these two cannot swap</text>'
      + '</svg>',
  },

  mechanism:
    'The lesson of isomerism is that a molecular formula is a stock list '
    + 'and not a plan. '
    + 'Ten bags of cement and four lengths of timber can be built into more '
    + 'than one house, and which house you get decides what it is like to '
    + 'live in. '
    + 'Butane and 2-methylpropane have the same stock list and are two '
    + 'different houses. '
    + 'Why does the shape change the boiling point? '
    + 'Boiling means pulling the molecules apart from one another, so the '
    + 'boiling point measures how strongly they hold together. '
    + 'Two straight butane molecules can lie side by side along their '
    + 'whole length, touching at many points, so the weak attractions add '
    + 'up. '
    + '2-methylpropane is a stubbier shape with a branch sticking out, so '
    + 'two of them cannot get as close over as much of their surface, the '
    + 'attractions are fewer, and less heat is needed to separate them. '
    + 'Hence the lower boiling point. '
    + 'That is the general rule, and it is worth stating in those terms: '
    + 'branching reduces the contact between molecules. '
    + 'The practical consequence is the cylinder on a cold morning, and '
    + 'also the reason petrol is blended with branched molecules, which '
    + 'burn more smoothly in an engine. '
    + 'Drawing isomers is where the marks are won and lost, and there is a '
    + 'method that stops both of the usual failures. '
    + 'Start with the longest straight chain and draw it. '
    + 'Then take one carbon off the end, making the chain one shorter, and '
    + 'attach that carbon as a branch, trying it at each position along the '
    + 'shortened chain. '
    + 'Then shorten by one again, and so on. '
    + 'Working in that order means you never miss a structure, which is the '
    + 'first failure. '
    + 'The second failure is counting the same structure twice, and it '
    + 'happens because a drawing turned round or flipped over looks new and '
    + 'is not. '
    + 'There are two sure checks. '
    + 'Compare the length of the longest chain: two structures with '
    + 'different longest chains are certainly different. '
    + 'If the longest chains are the same length, compare where the '
    + 'branches sit, counting from the end that gives the smaller number. '
    + '2-methylbutane and 3-methylbutane are not two isomers; they are one '
    + 'isomer counted from opposite ends, and the correct name is the one '
    + 'with the smaller number. '
    + 'That rule about counting from the nearer end exists precisely to '
    + 'stop this, and candidates who ignore it report five isomers of '
    + 'pentane when there are three. '
    + 'Geometric isomerism has one condition and it is a physical one. '
    + 'A single bond allows the two ends of the molecule to spin, like a '
    + 'bicycle wheel on its axle, so any arrangement can turn into any '
    + 'other and there are no separate compounds to name. '
    + 'A double bond cannot spin, because turning it would mean breaking '
    + 'the second bond. '
    + 'So the groups are frozen in place: either on the same side, cis, or '
    + 'on opposite sides, trans, and the two really are different '
    + 'substances with different melting points. '
    + 'Two further points complete the condition. '
    + 'Each carbon of the double bond must carry two different groups, '
    + 'because if one carbon has two identical groups then the same '
    + 'arrangement is got by flipping, and there is nothing to distinguish. '
    + 'So but-2-ene has cis and trans forms and but-1-ene does not. '
    + 'And the reason this matters outside an examination is in the food '
    + 'cupboard: the fats in palm oil are cis and the ones created when oil '
    + 'is hardened into margarine can be trans, and the body treats the two '
    + 'differently, which is why trans fats are now printed on labels and '
    + 'limited by law in many places.',

  recap:
    'A molecular formula tells you how many atoms of each kind are in a '
    + 'molecule. '
    + 'Water is $\\mathrm{H_2O}$: two hydrogens and one oxygen. '
    + 'For small molecules there is only one sensible way to join the '
    + 'atoms, so the formula is the whole story. '
    + 'For carbon compounds that stops being true, because carbon chains '
    + 'can be arranged in more than one way. '
    + 'You also know that boiling point is a property of a substance and '
    + 'is used to identify it. '
    + 'This lesson is about what happens when two different substances '
    + 'share one formula, and why they still boil at different '
    + 'temperatures.',

  method: [
    'Write the molecular formula and check which series it belongs to.',
    'Draw the longest straight chain and fill in the hydrogens.',
    'Shorten the chain by one carbon and attach that carbon as a branch.',
    'Try the branch at every position on the shortened chain.',
    'Name each structure, counting from the end that gives the smaller number.',
    'Reject any structure whose name matches one you already have.',
    'For a double bond, check whether each of its carbons has two different groups.',
    'If so, draw and name the cis and the trans forms.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Draw and name the two isomers of $\\mathrm{C_4H_{10}}$.',
      steps: [
        'The longest straight chain of four: '
        + '$\\mathrm{CH_3CH_2CH_2CH_3}$.',
        'Shorten to three and put the spare carbon on the middle one: '
        + '$\\mathrm{CH_3CH(CH_3)CH_3}$.',
        'Putting it on an end carbon only recreates the straight chain, so '
        + 'there is nothing else.',
      ],
      answer: 'Butane, the straight chain, and 2-methylpropane, the '
        + 'branched one. '
        + 'They are chain isomers, and the branched one boils about eleven '
        + 'degrees lower.',
    },
    {
      level: 4,
      ask: 'Name the two position isomers of $\\mathrm{C_4H_8}$ that have a '
        + 'straight chain, and say which can show geometric isomerism.',
      steps: [
        'Four carbons in a chain with one double bond. '
        + 'The bond is either between carbons one and two, or between two '
        + 'and three.',
        'Counting from the nearer end gives but-1-ene and but-2-ene.',
        'In but-1-ene the first carbon carries two hydrogens, so flipping '
        + 'gives nothing new.',
        'In but-2-ene each carbon of the double bond carries a methyl and a '
        + 'hydrogen, which are different.',
      ],
      answer: 'But-1-ene and but-2-ene. '
        + 'Only but-2-ene shows geometric isomerism, as cis-but-2-ene and '
        + 'trans-but-2-ene, because each carbon of its double bond carries '
        + 'two different groups.',
    },
    {
      level: 5,
      ask: 'Draw the three isomers of $\\mathrm{C_5H_{12}}$ and explain why '
        + '3-methylbutane is not a fourth.',
      steps: [
        'Longest chain of five: pentane, '
        + '$\\mathrm{CH_3CH_2CH_2CH_2CH_3}$.',
        'Chain of four with the spare carbon on the second: '
        + '2-methylbutane.',
        'Chain of three with two spare carbons both on the middle: '
        + '2,2-dimethylpropane.',
        'Putting the branch on the third carbon of a four chain is the same '
        + 'structure as putting it on the second, counted from the other '
        + 'end.',
      ],
      answer: 'Pentane, 2-methylbutane and 2,2-dimethylpropane. '
        + '3-methylbutane is 2-methylbutane named from the wrong end, and '
        + 'the rule of counting from the end that gives the smaller number '
        + 'exists to prevent exactly this double count.',
    },
    {
      level: 6,
      ask: 'Ethanol boils at 78 degrees and methoxymethane at minus 24, '
        + 'although both are $\\mathrm{C_2H_6O}$. '
        + 'Name the kind of isomerism and account for the very large '
        + 'difference.',
      steps: [
        'Ethanol is $\\mathrm{CH_3CH_2OH}$, an alcohol, with its oxygen '
        + 'joined to a hydrogen.',
        'Methoxymethane is $\\mathrm{CH_3OCH_3}$, an ether, with its oxygen '
        + 'between two carbons.',
        'They are functional group isomers, because they belong to '
        + 'different families.',
        'The hydrogen joined to oxygen in ethanol lets its molecules '
        + 'attract each other far more strongly than the ether molecules '
        + 'can.',
      ],
      answer: 'Functional group isomerism. '
        + 'The oxygen to hydrogen bond in ethanol gives a strong attraction '
        + 'between molecules, so far more heat is needed to separate them, '
        + 'while methoxymethane has no such hydrogen and is a gas at room '
        + 'temperature. '
        + 'A hundred degrees of difference from the same nine atoms is the '
        + 'strongest argument in the topic that structure, not formula, '
        + 'decides a substance.',
    },
  ],

  traps: [
    {
      mistake: 'Counting a drawing turned round as a new isomer.',
      why: 'Compare the longest chains, then the branch positions counted '
        + 'from the nearer end. '
        + 'If the names match, it is the same compound.',
    },
    {
      mistake: 'Reporting 3-methylbutane as an isomer.',
      why: 'It is 2-methylbutane counted from the other end. '
        + 'The rule of the smaller number settles it.',
    },
    {
      mistake: 'Claiming geometric isomerism for a compound with only single bonds.',
      why: 'A single bond spins freely, so the arrangements turn into one '
        + 'another and are not separate compounds.',
    },
    {
      mistake: 'Giving cis and trans forms of but-1-ene.',
      why: 'The end carbon carries two hydrogens, which are identical, so '
        + 'flipping produces nothing new. '
        + 'Each carbon of the double bond needs two different groups.',
    },
    {
      mistake: 'Saying a branched alkane boils higher because it is more complicated.',
      why: 'It boils lower. '
        + 'The branch keeps the molecules from lying close together, so the '
        + 'attractions between them are weaker.',
    },
  ],

  extension:
    'There is a third kind of isomerism that the SHS syllabus only hints '
    + 'at, where two molecules are mirror images of each other and cannot '
    + 'be laid on top of one another, as a left hand cannot be laid on a '
    + 'right. '
    + 'It matters in medicine. '
    + 'A drug is often active in one mirror form and useless or harmful in '
    + 'the other, and separating the two is a large part of what a '
    + 'pharmaceutical factory does.',

  questions: [
    {
      id: 'iso-1',
      ask: 'Isomers have:',
      kind: 'choice',
      options: [
        'The same molecular formula and different structures',
        'Different formulae and the same structure',
        'The same formula and the same structure',
      ],
      answer: 'The same molecular formula and different structures',
      teach: 'Same stock list, different house. '
        + 'That is why their properties differ.',
      level: 3,
    },
    {
      id: 'iso-2',
      ask: 'How many chain isomers does $\\mathrm{C_5H_{12}}$ have?',
      kind: 'numeric',
      options: [],
      answer: '3',
      teach: 'Pentane, 2-methylbutane and 2,2-dimethylpropane. '
        + '3-methylbutane is the second one named from the wrong end.',
      level: 5,
    },
    {
      id: 'iso-3',
      ask: 'A branched alkane boils lower than its straight chain isomer '
        + 'because:',
      kind: 'choice',
      options: [
        'The branch keeps the molecules from lying close together',
        'The branch makes the molecule heavier',
        'Branched molecules have weaker bonds inside them',
      ],
      answer: 'The branch keeps the molecules from lying close together',
      teach: 'Boiling point is about the forces between molecules, not the '
        + 'bonds inside one. '
        + 'Less contact means weaker attraction.',
      level: 5,
    },
    {
      id: 'iso-4',
      ask: 'Geometric isomerism requires:',
      kind: 'choice',
      options: [
        'A double bond, with two different groups on each of its carbons',
        'A long carbon chain',
        'At least one branch',
      ],
      answer: 'A double bond, with two different groups on each of its carbons',
      teach: 'The double bond stops the turning, and the different groups '
        + 'are what make the two arrangements distinguishable.',
      level: 6,
    },
  ],
})
