/**
 * Stored lessons for SHS 2 Elective Biology: the plant and ecology half.
 * Cell division, photosynthesis, transport in plants, reproduction in
 * flowering plants, and ecosystems.
 *
 * Written at about grade 10, which is inside the SHS expectation of 10 to 12.
 *
 * ── The thread through these five ────────────────────────────────────────
 *
 * All five are about a plant, and about the one thing a plant can do that
 * nothing else on a farm can: build food out of air, water and light. Cell
 * division is how one cell becomes a seedling and how a flower makes
 * gametes with half the chromosomes. Photosynthesis is the building itself.
 * Transport is the plumbing that carries the water in and the sugar out.
 * Reproduction is how the whole arrangement is passed on. And an ecosystem
 * is what happens to that food once an animal eats it, which is mostly that
 * it is lost as heat.
 *
 * ── What has to be written down ──────────────────────────────────────────
 *
 * Biology marking schemes pay for named structures and named processes.
 * Xylem and phloem, chromatid and centromere, haploid and diploid,
 * cohesion and transpiration pull, trophic level: these are the words the
 * marks hang on. A correct answer in everyday language scores less than a
 * candidate expects, and that is worth saying plainly rather than letting a
 * learner find out in the examination hall.
 *
 * ── Apparatus a school may not own ───────────────────────────────────────
 *
 * The photosynthesis and transpiration experiments are written so the
 * examinable version can be learned on paper, and the place where a real
 * microscope or a real potometer is needed is said plainly. A quadrat is a
 * metre of stick and some string, so the ecology practical is within reach
 * of any school.
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

/* ── cell division ──────────────────────────────────────────────────────── */

teach({
  topicId: 'cell-division-bio',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Mitosis makes two cells identical to the parent, with the full set '
      + 'of chromosomes. '
      + 'It is for growth and repair. '
      + 'Meiosis halves the number of chromosomes and shuffles them, and it '
      + 'happens only where gametes are made. '
      + 'So one keeps things the same and the other makes variety.',
    method: [
      'Ask what the cell is for: growth and repair, or making gametes.',
      'Growth and repair means mitosis, two identical cells, full chromosome number.',
      'Gametes means meiosis, four cells, half the chromosome number, all different.',
    ],
  },

  why:
    'A cassava farmer at Nkawkaw does not plant seed. '
    + 'She cuts a stem into lengths and buries them, and every plant that '
    + 'comes up is the same as the one she cut. '
    + 'Her neighbour plants maize from seed, and the plants in his field '
    + 'are plainly not all alike: some are taller, some ripen sooner, one '
    + 'or two resist a disease the rest catch. '
    + 'Both farmers started from one parent plant. '
    + 'Why does one method give copies and the other give a field of '
    + 'individuals?',

  notation:
    'A chromosome is a long thread of DNA carrying genes. '
    + 'The number of chromosomes in a body cell is written $2n$ and is '
    + 'called diploid, because they come in pairs. '
    + 'In a human $2n$ is 46, so there are 23 pairs. '
    + 'A gamete has one of each pair, written $n$ and called haploid, so a '
    + 'human gamete has 23. '
    + 'A chromatid is one half of a chromosome that has already copied '
    + 'itself, and the two chromatids are joined at a point called the '
    + 'centromere. '
    + 'Homologous chromosomes are the two members of a pair, one from each '
    + 'parent, carrying the same genes in the same order. '
    + 'The names of the stages are prophase, metaphase, anaphase and '
    + 'telophase, and they are easiest to hold by what happens in each '
    + 'rather than by the name.',

  idea:
    'A cell divides in one of two ways, and which one depends entirely on '
    + 'what the cell is for. '
    + 'Mitosis produces two daughter cells, each with the same chromosome '
    + 'number as the parent and the same genes. '
    + 'It happens in growing tissue, in the healing of a wound, and in '
    + 'every cell a plant makes at a root tip or a shoot tip. '
    + 'The chromosomes are copied, the copies line up single file across '
    + 'the middle of the cell, and one chromatid of each is pulled to each '
    + 'end. '
    + 'Meiosis produces four daughter cells, each with half the chromosome '
    + 'number and each genetically different. '
    + 'It happens only in the making of gametes: in an anther and an ovule '
    + 'in a flower, and in a testis and an ovary in an animal. '
    + 'There are two divisions rather than one. '
    + 'In the first, the homologous pairs line up side by side and are '
    + 'separated, which is what halves the number. '
    + 'While they are side by side they exchange pieces, which is called '
    + 'crossing over, and that is one source of the variety. '
    + 'The other source is that each pair is separated independently of the '
    + 'rest, so the combination each gamete receives is a fresh shuffle. '
    + 'The second division then separates the chromatids, as mitosis does, '
    + 'giving four cells in all.',

  tables: [
    {
      caption: 'Mitosis and meiosis compared on the points a question will ask about',
      columns: ['Point', 'Mitosis', 'Meiosis'],
      rows: [
        ['Number of divisions', 'One', 'Two'],
        ['Cells produced', 'Two', 'Four'],
        ['Chromosome number in each', 'The same as the parent', 'Half the parent'],
        ['Are the cells alike', 'Yes, identical to the parent', 'No, all four differ'],
        ['Where it happens', 'Growing tissue, healing, root and shoot tips',
          'Anthers and ovules, testes and ovaries'],
        ['What it is for', 'Growth and repair', 'Making gametes, and variety'],
      ],
      note: 'The last row is the one to answer from. '
        + 'Decide what the cell is for and the rest of the column follows.',
    },
    {
      caption: 'What happens at each stage, in words rather than by name',
      columns: ['Stage', 'What the chromosomes do'],
      rows: [
        ['Prophase', 'Become visible as threads, each already copied into two chromatids'],
        ['Metaphase', 'Line up across the middle of the cell'],
        ['Anaphase', 'Are pulled apart towards opposite ends'],
        ['Telophase', 'Gather at each end and a new nuclear membrane forms around them'],
      ],
      note: 'Learn the action, not the label. '
        + 'A question that shows a drawing is asking you to name the stage '
        + 'from what the chromosomes are doing in it.',
    },
  ],

  figure: {
    alt: 'Two rows of simple cell drawings. The upper row, labelled '
      + 'mitosis, shows four circles. In the first, two pairs of short '
      + 'threads are drawn inside, each thread made of two chromatids '
      + 'joined at a dot. In the second the threads are lined up single '
      + 'file across the middle of the cell. In the third the chromatids '
      + 'are being pulled apart towards the two ends, with small arrows '
      + 'showing the direction. The fourth shows two separate daughter '
      + 'cells, each with the same number of threads as the parent, '
      + 'labelled two identical cells, full chromosome number. The lower '
      + 'row, labelled meiosis, shows the same cell but with the pairs '
      + 'lined up side by side rather than single file, then separated '
      + 'into two cells each holding one of each pair, and then each of '
      + 'those dividing again into two, giving four cells, labelled four '
      + 'cells, half the chromosome number, all different.',
    svg: '<svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="20" y="40" font-size="13" fill="#0f8a4d" '
      + 'stroke="none">mitosis</text>'
      + '<circle cx="90" cy="110" r="44"/>'
      + '<line x1="72" y1="92" x2="72" y2="128" stroke="#1d4ed8"/>'
      + '<line x1="80" y1="92" x2="80" y2="128" stroke="#1d4ed8"/>'
      + '<circle cx="76" cy="110" r="3" fill="#b4531a" stroke="none"/>'
      + '<line x1="100" y1="96" x2="100" y2="124" stroke="#7c3aed"/>'
      + '<line x1="108" y1="96" x2="108" y2="124" stroke="#7c3aed"/>'
      + '<circle cx="104" cy="110" r="3" fill="#b4531a" stroke="none"/>'
      + '<circle cx="230" cy="110" r="44"/>'
      + '<line x1="230" y1="78" x2="230" y2="142" stroke-dasharray="3 3" '
      + 'stroke-opacity="0.5"/>'
      + '<line x1="222" y1="92" x2="222" y2="128" stroke="#1d4ed8"/>'
      + '<line x1="238" y1="92" x2="238" y2="128" stroke="#7c3aed"/>'
      + '<circle cx="370" cy="110" r="44"/>'
      + '<line x1="344" y1="92" x2="344" y2="128" stroke="#1d4ed8"/>'
      + '<line x1="396" y1="92" x2="396" y2="128" stroke="#7c3aed"/>'
      + '<line x1="356" y1="110" x2="332" y2="110" stroke="#b4531a"/>'
      + '<path d="M338 104 L328 110 L338 116" stroke="#b4531a"/>'
      + '<line x1="384" y1="110" x2="408" y2="110" stroke="#b4531a"/>'
      + '<path d="M402 104 L412 110 L402 116" stroke="#b4531a"/>'
      + '<circle cx="508" cy="110" r="30"/>'
      + '<circle cx="582" cy="110" r="30"/>'
      + '<line x1="500" y1="96" x2="500" y2="124" stroke="#1d4ed8"/>'
      + '<line x1="514" y1="96" x2="514" y2="124" stroke="#7c3aed"/>'
      + '<line x1="574" y1="96" x2="574" y2="124" stroke="#1d4ed8"/>'
      + '<line x1="588" y1="96" x2="588" y2="124" stroke="#7c3aed"/>'
      + '<text x="545" y="162" font-size="12" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">two identical cells</text>'
      + '<text x="545" y="178" font-size="12" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">full chromosome number</text>'
      + '<text x="20" y="236" font-size="13" fill="#b4531a" '
      + 'stroke="none">meiosis</text>'
      + '<circle cx="90" cy="300" r="44"/>'
      + '<line x1="80" y1="282" x2="80" y2="318" stroke="#1d4ed8"/>'
      + '<line x1="100" y1="282" x2="100" y2="318" stroke="#7c3aed"/>'
      + '<text x="90" y="362" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">pairs side by side</text>'
      + '<circle cx="222" cy="272" r="26"/>'
      + '<line x1="222" y1="258" x2="222" y2="286" stroke="#1d4ed8"/>'
      + '<circle cx="222" cy="332" r="26"/>'
      + '<line x1="222" y1="318" x2="222" y2="346" stroke="#7c3aed"/>'
      + '<text x="222" y="382" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">first division halves</text>'
      + '<circle cx="356" cy="250" r="22"/>'
      + '<circle cx="356" cy="300" r="22"/>'
      + '<circle cx="356" cy="350" r="22"/>'
      + '<circle cx="412" cy="300" r="22"/>'
      + '<line x1="356" y1="240" x2="356" y2="260" stroke="#1d4ed8"/>'
      + '<line x1="356" y1="290" x2="356" y2="310" stroke="#1d4ed8"/>'
      + '<line x1="356" y1="340" x2="356" y2="360" stroke="#7c3aed"/>'
      + '<line x1="412" y1="290" x2="412" y2="310" stroke="#7c3aed"/>'
      + '<text x="530" y="286" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">four cells, half the</text>'
      + '<text x="530" y="302" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">chromosome number,</text>'
      + '<text x="530" y="318" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">all different</text>'
      + '</svg>',
  },

  mechanism:
    'The two kinds of division exist because a living thing needs '
    + 'two different things from its cells, and one process cannot do '
    + 'both. Growth needs copies. A wound on your arm must be filled '
    + 'with skin cells that are skin cells, with the same genes as '
    + 'the ones around them, or the repair is not a repair. So '
    + 'mitosis is built to be faithful, and the chromosomes go single '
    + 'file across the middle precisely so that one chromatid of each '
    + 'goes to each end. Reproduction needs the opposite. If a gamete '
    + 'carried the full set, the offspring would have double, and the '
    + 'next generation double again.\n\n'
    + 'So the number has to be halved somewhere, and meiosis is '
    + 'where. This is why the pairs line up side by side in meiosis '
    + 'and single file in mitosis, and that one difference in the '
    + 'drawing is the difference between the two processes. A '
    + 'question showing a cell with pairs lying alongside each other '
    + 'is showing meiosis, and saying so is worth the mark. Now the '
    + 'two farmers. The cassava cutting grows by mitosis alone, so '
    + 'every cell in the new plant is a copy of a cell in the old '
    + 'one, and the new plant is the old plant continued.\n\n'
    + 'That is why a good variety can be kept exactly as it is, year '
    + 'after year, which is a real advantage. It is also why a '
    + 'disease that can kill one cassava plant can kill the whole '
    + 'field: they have no variety to hide behind. The maize came '
    + 'from seed, and seed came from gametes made by meiosis, where '
    + 'crossing over and independent separation give each gamete a '
    + 'fresh combination. So the field is a field of individuals, and '
    + 'when a disease comes through, some of them resist it. That '
    + 'variation is the raw material of both natural selection and '
    + 'plant breeding, and it is produced in meiosis and nowhere '
    + 'else. A full answer names both sources: crossing over, and the '
    + 'independent separation of each pair.\n\n'
    + 'Three places lose marks. The first is saying meiosis produces '
    + 'two cells. It produces four, because there are two divisions. '
    + 'Count the divisions and the number follows. The second is '
    + 'confusing a chromatid with a chromosome. Before division each '
    + 'chromosome copies itself, so it is then two chromatids joined '
    + 'at the centromere, and anaphase separates chromatids, not '
    + 'chromosomes. Using the wrong word in a description of anaphase '
    + 'is a lost mark even when the picture in the candidate’s head '
    + 'is right. The third is giving the human chromosome number as '
    + '23. A body cell has 46, which is 23 pairs, and a gamete has '
    + '23. Write the pair number and the total separately and the '
    + 'confusion cannot survive. A note on apparatus. Seeing mitosis '
    + 'properly needs a microscope and a stained root tip, usually '
    + 'onion, and a school without one cannot do it. The examination '
    + 'asks you to identify stages from drawings and to compare the '
    + 'two processes, and both can be learned from the table and the '
    + 'figure above.\n\n'
    + 'What the microscope adds, for a school that has one, is the '
    + 'surprise of seeing that in any one root tip several cells are '
    + 'caught at different stages at the same moment, which makes the '
    + 'sequence real in a way a diagram cannot.',

  recap:
    'Every living thing is made of cells, and a cell came from another '
    + 'cell dividing. '
    + 'You started as one cell and now have many millions of them. '
    + 'Inside the nucleus of each cell are chromosomes, which carry the '
    + 'instructions, and those instructions are what make you like your '
    + 'parents. '
    + 'When a cell divides, the chromosomes have to be shared out, or the '
    + 'new cells would be missing instructions. '
    + 'So the dividing is careful rather than casual. '
    + 'This lesson is about the two ways it is done, and why one living '
    + 'thing needs both.',

  method: [
    'Ask what the cell is for: growth and repair, or making gametes.',
    'For growth and repair, say mitosis, and expect two identical cells.',
    'For gametes, say meiosis, and expect four cells, all different.',
    'State the chromosome number in the product: the same, or half.',
    'In a drawing, look at how the chromosomes are lined up across the middle.',
    'Single file means mitosis; pairs side by side means meiosis.',
    'Name the stage from what the chromosomes are doing, not from memory of the word.',
    'If variety is asked about, name crossing over and independent separation.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A human body cell has 46 chromosomes. '
        + 'How many are in each cell after mitosis, and how many after '
        + 'meiosis?',
      steps: [
        'Mitosis keeps the number the same, because each daughter gets one '
        + 'chromatid of every chromosome.',
        'Meiosis halves it, because the homologous pairs are separated.',
      ],
      answer: '46 after mitosis, in each of two cells. '
        + '23 after meiosis, in each of four cells.',
    },
    {
      level: 4,
      ask: 'A drawing shows a cell in which the chromosomes lie in pairs '
        + 'alongside each other across the middle. '
        + 'Name the process and give one reason.',
      steps: [
        'In mitosis the chromosomes line up single file, one behind the '
        + 'other.',
        'Pairs lying side by side can only be homologous chromosomes '
        + 'about to be separated.',
      ],
      answer: 'Meiosis, in the first division. '
        + 'The reason to write down is that homologous chromosomes are '
        + 'paired, which happens in meiosis and not in mitosis.',
    },
    {
      level: 5,
      ask: 'Explain why a field of cassava grown from cuttings can be wiped '
        + 'out by one disease, while a field of maize grown from seed '
        + 'usually is not.',
      steps: [
        'Cuttings grow by mitosis, so every plant is genetically identical '
        + 'to the parent.',
        'If the parent has no resistance to that disease, no plant in the '
        + 'field has any.',
        'Seed comes from gametes made by meiosis, with crossing over and '
        + 'independent separation.',
        'So the maize plants differ genetically, and some carry resistance.',
      ],
      answer: 'The cassava field has no genetic variation, so a disease that '
        + 'defeats one plant defeats all of them. '
        + 'The maize field has variation, produced in meiosis, so some '
        + 'plants survive and set seed. '
        + 'Naming meiosis as the source of the variation is the mark.',
    },
    {
      level: 6,
      ask: 'An onion root tip cell has 16 chromosomes. '
        + 'State the number of chromatids present in one of its cells at '
        + 'metaphase of mitosis, and explain your answer.',
      steps: [
        'Before division each chromosome copies itself.',
        'So each of the 16 chromosomes is now two chromatids joined at the '
        + 'centromere.',
        { math: '16 \\times 2 = 32' },
        'They are still 16 chromosomes at this point, because the '
        + 'chromatids are still joined.',
      ],
      answer: '32 chromatids, carried on 16 chromosomes. '
        + 'The question is testing the difference between the two words, '
        + 'and an answer of 16 or 32 without saying which is which gets no '
        + 'credit.',
    },
  ],

  traps: [
    {
      mistake: 'Saying meiosis produces two cells.',
      why: 'There are two divisions, so there are four cells. '
        + 'Count the divisions first.',
    },
    {
      mistake: 'Using chromatid and chromosome as the same word.',
      why: 'A copied chromosome is two chromatids joined at the centromere. '
        + 'Anaphase separates chromatids.',
    },
    {
      mistake: 'Giving the human chromosome number as 23.',
      why: 'A body cell has 46, which is 23 pairs. '
        + 'A gamete has 23. '
        + 'Say which cell you mean.',
    },
    {
      mistake: 'Saying mitosis causes variation.',
      why: 'Mitosis makes copies. '
        + 'Variation comes from crossing over and independent separation in '
        + 'meiosis, and from mutation.',
    },
    {
      mistake: 'Naming a stage from memory without reading the drawing.',
      why: 'The drawing tells you. '
        + 'Lined up is metaphase, being pulled apart is anaphase.',
    },
  ],

  extension:
    'Cancer is mitosis that has stopped obeying its controls. '
    + 'A healthy cell divides when the tissue needs it and stops when it '
    + 'does not, and that control is itself written in the genes. '
    + 'Damage those genes, by tobacco smoke for instance, and the cell '
    + 'divides when nothing asked it to. '
    + 'So a tumour is not a strange new process. '
    + 'It is the ordinary process of growth with the brake broken.',

  questions: [
    {
      id: 'cd-1',
      ask: 'Mitosis is the kind of division used for:',
      kind: 'choice',
      options: [
        'Growth and repair',
        'Making gametes',
        'Producing genetic variation',
      ],
      answer: 'Growth and repair',
      teach: 'It makes identical copies, which is exactly what a repair '
        + 'needs.',
      level: 3,
    },
    {
      id: 'cd-2',
      ask: 'How many cells are produced by one meiosis?',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'Two divisions, so four cells, each with half the chromosome '
        + 'number.',
      level: 4,
    },
    {
      id: 'cd-3',
      ask: 'A cell with 20 chromosomes undergoes meiosis. '
        + 'Each daughter cell has how many chromosomes?',
      kind: 'numeric',
      options: [],
      answer: '10',
      teach: 'Meiosis halves the number, because the homologous pairs are '
        + 'separated in the first division.',
      level: 4,
    },
    {
      id: 'cd-4',
      ask: 'Genetic variation in gametes comes from:',
      kind: 'choice',
      options: [
        'Crossing over and the independent separation of each pair',
        'The copying of chromosomes before division',
        'The forming of a new nuclear membrane',
      ],
      answer: 'Crossing over and the independent separation of each pair',
      teach: 'Both are needed for a full answer. '
        + 'They happen in the first division of meiosis.',
      level: 6,
    },
  ],
})

/* ── photosynthesis ─────────────────────────────────────────────────────── */

teach({
  topicId: 'photosynthesis-bio',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Photosynthesis has two stages. '
      + 'The light stage uses light to split water, giving off oxygen and '
      + 'storing energy. '
      + 'The dark stage uses that stored energy to join carbon dioxide into '
      + 'sugar, and needs no light itself. '
      + 'A limiting factor is whichever requirement is in shortest supply.',
    method: [
      'Name the two stages and say which one needs light.',
      'For a rate question, ask which single factor is in shortest supply.',
      'Say that raising that factor raises the rate, until something else runs short.',
    ],
  },

  why:
    'A maize plant weighs a few grams when it comes up and a kilogram or '
    + 'more by harvest. '
    + 'The soil it stands in weighs no less at the end than at the start, '
    + 'and nobody carried anything to the field except water. '
    + 'So the plant has built almost its whole body out of something, and '
    + 'that something was not the soil. '
    + 'Where did the mass come from?',

  notation:
    'Chlorophyll is the green pigment that absorbs the light, and it sits '
    + 'inside structures called chloroplasts. '
    + 'The light stage is also called the light dependent stage, and the '
    + 'dark stage is also called the light independent stage, which is the '
    + 'better name: it does not need light, but it happens perfectly well '
    + 'in daylight. '
    + 'A stoma is one of the small openings in a leaf and the plural is '
    + 'stomata. '
    + 'A limiting factor is the one requirement whose shortage is holding '
    + 'the rate down at that moment. '
    + 'The overall equation is usually written '
    + '$$6\\mathrm{CO_2} + 6\\mathrm{H_2O} \\rightarrow '
    + '\\mathrm{C_6H_{12}O_6} + 6\\mathrm{O_2},$$ '
    + 'with light and chlorophyll written above the arrow rather than as '
    + 'reactants, because they are a condition and not a substance '
    + 'consumed.',

  idea:
    'Photosynthesis is the making of sugar from carbon dioxide and water, '
    + 'using light energy trapped by chlorophyll. '
    + 'It happens in two stages and they are not alike. '
    + 'In the light stage, light absorbed by chlorophyll splits water. '
    + 'The oxygen is given off as a gas, the hydrogen is held, and some of '
    + 'the light energy is stored in a chemical form the plant can spend. '
    + 'This stage needs light and stops at once in the dark. '
    + 'In the dark stage, the stored energy and the held hydrogen are used '
    + 'to join carbon dioxide molecules into a sugar. '
    + 'This stage needs no light, but it depends on the light stage for its '
    + 'supplies, so it also stops before long in darkness. '
    + 'The sugar made is used at once in respiration, converted to starch '
    + 'for storage, or built into cellulose for new cell walls. '
    + 'Four things can limit the rate: light intensity, carbon dioxide '
    + 'concentration, temperature, and water. '
    + 'Raising the one that is in shortest supply raises the rate. '
    + 'Raising any of the others does nothing at all, which is the whole '
    + 'meaning of the word limiting.',

  tables: [
    {
      caption: 'The two stages compared, and what each one needs and makes',
      columns: ['Point', 'Light stage', 'Dark stage'],
      rows: [
        ['Needs light', 'Yes, and stops at once without it', 'No, but it needs the products of the light stage'],
        ['What goes in', 'Water and light', 'Carbon dioxide, with hydrogen and energy from the light stage'],
        ['What comes out', 'Oxygen, hydrogen held, and stored energy', 'Sugar'],
        ['Where it happens', 'In the chloroplast, on its inner membranes', 'In the chloroplast, in the fluid around them'],
      ],
      note: 'A plant in the dark stops making sugar not because the dark '
        + 'stage needs light but because its supplies run out.',
    },
    {
      caption: 'The four limiting factors and how a farmer can raise each one',
      columns: ['Factor', 'When it is usually limiting', 'What can be done'],
      rows: [
        ['Light', 'Early morning, under shade, in a crowded field',
          'Space the plants properly, prune a shading tree'],
        ['Carbon dioxide', 'On a bright still day with a full canopy',
          'Very little in an open field; it is raised in a greenhouse'],
        ['Temperature', 'A cold night, or a very hot afternoon',
          'Nothing outdoors, but it explains a midday slowdown'],
        ['Water', 'Dry season, or a soil that drains too fast',
          'Irrigate, mulch, add organic matter to hold water'],
      ],
      note: 'Spacing is the factor a Ghanaian farmer actually controls, '
        + 'which is why planting distance is printed on a seed packet.',
    },
  ],

  figure: {
    alt: 'A graph with rate of photosynthesis up the vertical axis and '
      + 'light intensity along the horizontal axis. Two curves are drawn. '
      + 'The lower curve rises steeply from the origin then flattens into a '
      + 'horizontal line at a low level, labelled at a low carbon dioxide '
      + 'concentration. The upper curve rises along the same steep line at '
      + 'first then continues higher before flattening at a higher level, '
      + 'labelled at a high carbon dioxide concentration. The shared steep '
      + 'part at the left is labelled here light is the limiting factor, '
      + 'because both curves are the same whatever the carbon dioxide. The '
      + 'flat parts are labelled here light is no longer limiting, so '
      + 'something else is, and the gap between the two flat levels is '
      + 'marked with a vertical arrow labelled the difference is the carbon '
      + 'dioxide.',
    svg: '<svg viewBox="0 0 660 360" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="80" y1="290" x2="610" y2="290"/>'
      + '<line x1="80" y1="290" x2="80" y2="40"/>'
      + '<text x="60" y="36" font-size="12" text-anchor="end" '
      + 'fill="currentColor" stroke="none">rate</text>'
      + '<text x="610" y="316" font-size="12" text-anchor="end" '
      + 'fill="currentColor" stroke="none">light intensity</text>'
      + '<path d="M80 290 Q150 180 230 170 L590 170" stroke="#1d4ed8"/>'
      + '<path d="M80 290 Q170 140 300 90 L590 90" stroke="#0f8a4d"/>'
      + '<text x="420" y="160" font-size="12" fill="#1d4ed8" '
      + 'stroke="none">low carbon dioxide</text>'
      + '<text x="420" y="80" font-size="12" fill="#0f8a4d" '
      + 'stroke="none">high carbon dioxide</text>'
      + '<line x1="140" y1="320" x2="140" y2="250" stroke="#b4531a" '
      + 'stroke-dasharray="3 3"/>'
      + '<text x="150" y="338" font-size="11" fill="#b4531a" '
      + 'stroke="none">here light is limiting: the curves agree</text>'
      + '<line x1="520" y1="90" x2="520" y2="170" stroke="#b4531a"/>'
      + '<path d="M514 98 L520 86 L526 98" stroke="#b4531a"/>'
      + '<path d="M514 162 L520 174 L526 162" stroke="#b4531a"/>'
      + '<text x="534" y="134" font-size="11" fill="#b4531a" '
      + 'stroke="none">this gap is the</text>'
      + '<text x="534" y="148" font-size="11" fill="#b4531a" '
      + 'stroke="none">carbon dioxide</text>'
      + '<text x="300" y="214" font-size="11" fill="currentColor" '
      + 'stroke="none">flat: light is no longer limiting,</text>'
      + '<text x="300" y="228" font-size="11" fill="currentColor" '
      + 'stroke="none">so something else is</text>'
      + '</svg>',
  },

  mechanism:
    'The answer to the opening question is carbon dioxide, and it '
    + 'is worth dwelling on because it is the most counterintuitive '
    + 'fact in school biology. The dry mass of a maize plant is '
    + 'mostly carbon, and every carbon atom in it came out of the air '
    + 'through the stomata. The plant is built of air and water, and '
    + 'the soil supplies only the water and a small quantity of '
    + 'mineral salts. That is why a pot of soil weighs almost the '
    + 'same after growing a plant in it, an experiment first done '
    + 'four hundred years ago and still the clearest demonstration '
    + 'there is.\n\n'
    + 'The idea of a limiting factor is the examinable heart of the '
    + 'topic and it is simpler than candidates make it. Four things '
    + 'are needed. At any moment, one of them is in shortest supply, '
    + 'and that one alone is setting the rate. Adding more of any of '
    + 'the others changes nothing, because they were not what was '
    + 'holding things up. This is exactly like a kitchen: if you have '
    + 'one pot and plenty of firewood, buying more firewood will not '
    + 'cook dinner faster. Read the graph above with that in mind and '
    + 'it stops being two curves to remember. On the steep part at '
    + 'the left, both curves lie on top of each other, whatever the '
    + 'carbon dioxide. That tells you carbon dioxide is making no '
    + 'difference there, so it is not limiting, so light is. On the '
    + 'flat part, extra light makes no difference, so light is not '
    + 'limiting any more. And the two flat parts sit at different '
    + 'heights, which tells you what is limiting instead: the carbon '
    + 'dioxide.\n\n'
    + 'A candidate who can read a graph that way can answer any '
    + 'version of this question, and the answers to write are of the '
    + 'form "light is the limiting factor here, because the rate '
    + 'rises when light rises and is unaffected by the carbon '
    + 'dioxide". The because clause is the mark. Three places lose '
    + 'marks. The first is writing light as a reactant in the '
    + 'equation. Light is energy, not a substance, so it belongs '
    + 'above the arrow alongside chlorophyll, and so does the '
    + 'chlorophyll, which is a catalyst and is not consumed.\n\n'
    + 'The second is saying the dark stage happens at night. It '
    + 'happens whenever its supplies are available, which in practice '
    + 'is in daylight, and the better name is the light independent '
    + 'stage. A plant in the dark stops photosynthesising entirely '
    + 'within minutes. The third is explaining a high temperature '
    + 'slowdown as the plant getting tired. The reason is that the '
    + 'enzymes that run the dark stage are proteins, and above about '
    + '40 degrees they begin to lose their shape and stop working, '
    + 'which is called denaturing. That word is the mark. A note on '
    + 'apparatus. The classic experiments are testing a leaf for '
    + 'starch with iodine after boiling it in alcohol, and counting '
    + 'bubbles from pondweed under a lamp at different distances.\n\n'
    + 'The first needs only a burner, alcohol, iodine and a leaf, and '
    + 'is within reach of almost any school. The second needs '
    + 'pondweed, which not every town has, and a school without it '
    + 'can still learn the method, the control and the graph, which '
    + 'is what the examination asks for. What neither experiment can '
    + 'show you directly is the two stages themselves, which were '
    + 'worked out with equipment no school has, and it is honest to '
    + 'say so.',

  recap:
    'Green plants make their own food. '
    + 'Animals cannot, which is why every animal is eating a plant or '
    + 'eating something that ate a plant. '
    + 'A plant needs four things to do it: light, water, carbon dioxide '
    + 'from the air, and the green substance in its leaves called '
    + 'chlorophyll. '
    + 'What it makes is a sugar, and it gives off oxygen while doing it. '
    + 'You learned that equation at JHS. '
    + 'This lesson opens it up, because the single arrow hides two quite '
    + 'different stages, and it explains what decides how fast the whole '
    + 'thing goes.',

  method: [
    'Write the overall equation, with light and chlorophyll above the arrow.',
    'Name the two stages and say which needs light.',
    'Say the dark stage needs no light but depends on the light stage for supplies.',
    'For a rate question, list the four factors.',
    'Decide which one is in shortest supply, and say so in words.',
    'Say that raising that one raises the rate and raising the others does not.',
    'On a graph, use a flat part to show that the factor on the axis is no longer limiting.',
    'For a high temperature, say the enzymes are denatured.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Write the overall equation for photosynthesis and say where '
        + 'light belongs in it.',
      steps: [
        { math: '6\\mathrm{CO_2} + 6\\mathrm{H_2O} \\rightarrow \\mathrm{C_6H_{12}O_6} + 6\\mathrm{O_2}' },
        'Light is energy, not a substance, so it is written above the '
        + 'arrow.',
        'Chlorophyll goes there too, because it is not used up.',
      ],
      answer: 'The equation above, with light and chlorophyll written above '
        + 'the arrow rather than on the left as reactants.',
    },
    {
      level: 4,
      ask: 'A potted plant is kept in complete darkness for two days and '
        + 'its leaves are then tested with iodine. '
        + 'State and explain the result.',
      steps: [
        'In the dark the light stage stops, so the dark stage soon runs out '
        + 'of supplies and no sugar is made.',
        'The starch already stored is used up in respiration.',
        'Iodine turns blue black only where starch is present.',
      ],
      answer: 'The iodine stays brown, showing no starch. '
        + 'This is why a plant is destarched in the dark before any '
        + 'photosynthesis experiment: otherwise starch found at the end '
        + 'might have been there at the start.',
    },
    {
      level: 5,
      ask: 'A graph of rate against light intensity rises steeply and then '
        + 'becomes horizontal. '
        + 'Identify the limiting factor in each part and justify each '
        + 'answer.',
      steps: [
        'On the steep part, the rate rises as the light rises.',
        'So light is in shortest supply there and is the limiting factor.',
        'On the flat part, extra light produces no extra rate.',
        'So light is no longer limiting, and something else is: carbon '
        + 'dioxide or temperature.',
      ],
      answer: 'Light is limiting on the steep part, because the rate '
        + 'depends on it. '
        + 'On the flat part light is not limiting, because more of it '
        + 'changes nothing, so carbon dioxide concentration or temperature '
        + 'must be. '
        + 'The justification in each case is the mark, not the naming.',
    },
    {
      level: 6,
      ask: 'In a greenhouse the rate of photosynthesis rises as the '
        + 'temperature goes from 15 to 35 degrees, then falls sharply above '
        + '40. '
        + 'Account for both parts of this, naming the cause of the fall.',
      steps: [
        'The dark stage is run by enzymes, and the rate of an enzyme '
        + 'reaction rises with temperature.',
        'Warmer molecules collide more often and with more energy, so more '
        + 'collisions succeed.',
        'Above about 40 degrees the enzymes begin to lose their shape, '
        + 'which is called denaturing.',
        'A denatured enzyme cannot hold its substrate, so the reaction '
        + 'stops however warm it gets.',
      ],
      answer: 'The rise is the ordinary effect of temperature on an enzyme '
        + 'controlled reaction. '
        + 'The fall is denaturing of those enzymes, which is permanent, '
        + 'and that word is what the question is buying. '
        + 'Notice that the light stage is far less affected, because it '
        + 'depends on light absorption rather than on enzyme shape.',
    },
  ],

  traps: [
    {
      mistake: 'Writing light on the left of the equation as a reactant.',
      why: 'Light is energy and is not a substance. '
        + 'It goes above the arrow, with the chlorophyll.',
    },
    {
      mistake: 'Saying the dark stage happens at night.',
      why: 'It needs no light, but it needs the products of the light '
        + 'stage, so it runs in daylight and stops soon after dark.',
    },
    {
      mistake: 'Saying every factor raises the rate.',
      why: 'Only the one in shortest supply does. '
        + 'That is the meaning of limiting, and it is the whole topic.',
    },
    {
      mistake: 'Explaining a high temperature fall as the plant tiring.',
      why: 'The enzymes are denatured, which means they have lost the shape '
        + 'they work with. '
        + 'Use the word.',
    },
    {
      mistake: 'Omitting the destarching step in an experiment.',
      why: 'Without it, starch found at the end might have been present at '
        + 'the start, so the experiment proves nothing.',
    },
  ],

  extension:
    'Some tropical plants, maize and sugar cane among them, run a modified '
    + 'dark stage that concentrates carbon dioxide before using it. '
    + 'It costs extra energy, so it is a poor bargain in cool cloudy '
    + 'places. '
    + 'In hot bright places it is a very good one, because the plant can '
    + 'keep its stomata narrower, lose less water, and still get the carbon '
    + 'it needs. '
    + 'That is part of why maize does so well in Ghana and why it grows so '
    + 'fast in the sun.',

  questions: [
    {
      id: 'ph-1',
      ask: 'Most of the dry mass of a plant comes from:',
      kind: 'choice',
      options: [
        'Carbon dioxide taken in through the leaves',
        'Minerals taken up from the soil',
        'Water taken up by the roots',
      ],
      answer: 'Carbon dioxide taken in through the leaves',
      teach: 'The soil weighs almost the same afterwards. '
        + 'A plant is built of air and water.',
      level: 5,
    },
    {
      id: 'ph-2',
      ask: 'Oxygen is given off in:',
      kind: 'choice',
      options: [
        'The light stage, when water is split',
        'The dark stage, when sugar is made',
        'Both stages equally',
      ],
      answer: 'The light stage, when water is split',
      teach: 'The oxygen comes from the water, not from the carbon dioxide. '
        + 'That was shown with labelled oxygen atoms.',
      level: 4,
    },
    {
      id: 'ph-3',
      ask: 'On the flat part of a graph of rate against light intensity:',
      kind: 'choice',
      options: [
        'Light is no longer the limiting factor',
        'Light is the limiting factor',
        'Photosynthesis has stopped',
      ],
      answer: 'Light is no longer the limiting factor',
      teach: 'More light changes nothing, so something else is in shortest '
        + 'supply.',
      level: 5,
    },
    {
      id: 'ph-4',
      ask: 'Above about 40 degrees the rate falls because the enzymes are:',
      kind: 'choice',
      options: ['Denatured', 'Dissolved', 'Used up'],
      answer: 'Denatured',
      teach: 'They lose the shape they work with, and the change does not '
        + 'reverse on cooling.',
      level: 6,
    },
  ],
})

/* ── transport in plants ────────────────────────────────────────────────── */

teach({
  topicId: 'transport-plant-bio',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Xylem carries water and minerals up from the root, pulled by water '
      + 'evaporating from the leaves. '
      + 'Phloem carries sugar from the leaves to wherever it is needed, '
      + 'and it can go either way. '
      + 'So one pipe is a one way pull and the other is a two way '
      + 'delivery.',
    method: [
      'Say which substance is moving, and in which direction.',
      'Water and minerals upward means xylem; sugar in either direction means phloem.',
      'For water movement, name transpiration pull, cohesion and the root pressure behind it.',
    ],
  },

  why:
    'A mango tree in a compound stands twenty metres high, and on a hot '
    + 'afternoon its topmost leaves are not wilted. '
    + 'Water is reaching them from roots in the ground, against gravity, '
    + 'all day, and the tree has no pump and no moving parts. '
    + 'A hand pump at a borehole needs somebody working the handle to lift '
    + 'water ten metres. '
    + 'So what is lifting the tree’s water, twice as far, with nothing '
    + 'that moves?',

  notation:
    'Xylem is said "ZY-lem" and carries water. '
    + 'Phloem is said "FLOH-em" and carries food. '
    + 'The word transpiration means the loss of water vapour from a plant, '
    + 'mostly through the stomata of the leaves. '
    + 'Transpiration pull is the suction that loss creates in the xylem. '
    + 'Cohesion means water molecules sticking to one another, and adhesion '
    + 'means water sticking to the walls of the vessel. '
    + 'Translocation is the movement of sugar in the phloem, and the word '
    + 'is used for that and nothing else. '
    + 'A source is a part of the plant making or releasing sugar, and a '
    + 'sink is a part using or storing it, so a leaf is a source and a '
    + 'growing cassava tuber is a sink.',

  idea:
    'A plant has two separate transport tissues and they do different '
    + 'jobs. '
    + 'Xylem is made of dead, hollow, lignified cells joined end to end '
    + 'into continuous tubes. '
    + 'It carries water and dissolved mineral salts from the root to the '
    + 'leaves, and the flow is one way, upwards. '
    + 'The driving force is transpiration. '
    + 'Water evaporates from the moist cell walls inside the leaf and '
    + 'escapes through the stomata, and as each molecule leaves it pulls on '
    + 'the ones behind it. '
    + 'Because water molecules cohere strongly, the whole column in the '
    + 'xylem is pulled up as one thread, and because they also adhere to '
    + 'the vessel walls the column does not break. '
    + 'Root pressure, from water entering the root by osmosis, helps from '
    + 'below but cannot account for the height of a tree by itself. '
    + 'Phloem is made of living cells with perforated end walls, and it '
    + 'carries sugar and amino acids from a source to a sink, which may be '
    + 'up or down. '
    + 'Translocation uses energy from the plant, so it is an active '
    + 'process, while transpiration pull uses the sun’s energy and costs '
    + 'the plant nothing directly. '
    + 'Transpiration is raised by heat, wind, dry air and bright light, and '
    + 'lowered by humidity, stillness and the closing of the stomata.',

  tables: [
    {
      caption: 'Xylem and phloem compared on the points examiners ask about',
      columns: ['Point', 'Xylem', 'Phloem'],
      rows: [
        ['What it carries', 'Water and mineral salts', 'Sugar and amino acids'],
        ['Direction', 'Upwards only', 'Up or down, source to sink'],
        ['Are the cells alive', 'No, dead and hollow', 'Yes, living'],
        ['What drives it', 'Transpiration pull, from the sun’s heat',
          'Energy from the plant, so it is active'],
        ['Also does', 'Supports the stem, because of the lignin',
          'Nothing structural'],
      ],
      note: 'The living and dead row is the quickest way to tell them apart '
        + 'under a microscope, and the energy row is the one that explains '
        + 'why only one of them stops when the plant is poisoned.',
    },
    {
      caption: 'What raises and lowers the rate of transpiration, and why',
      columns: ['Condition', 'Effect on the rate', 'Why'],
      rows: [
        ['Hot', 'Raises it', 'Molecules evaporate faster'],
        ['Windy', 'Raises it', 'Moist air is carried away, so the leaf stays surrounded by dry air'],
        ['Humid', 'Lowers it', 'The air outside is already full of vapour'],
        ['Dark', 'Lowers it', 'The stomata close'],
        ['Many leaves', 'Raises it', 'More surface and more stomata'],
      ],
      note: 'A harmattan afternoon is hot, windy and dry all at once, which '
        + 'is why plants wilt then and why a newly planted seedling is '
        + 'shaded.',
    },
  ],

  figure: {
    alt: 'A tall plant drawn in outline from root to leaf, cut open to show '
      + 'two pipes side by side running the whole height. The left pipe is '
      + 'labelled xylem and has upward arrows all the way along it, with a '
      + 'note at the root saying water enters by osmosis and a note at the '
      + 'leaf saying water evaporates out through the stomata, and the '
      + 'arrows at the top are labelled transpiration pull. The right pipe '
      + 'is labelled phloem and has arrows pointing both up and down, with '
      + 'the leaf end labelled source, where sugar is made, and two sinks '
      + 'labelled, one a growing shoot at the top and one a storage root at '
      + 'the bottom. A short note between the pipes says the xylem cells '
      + 'are dead and hollow and the phloem cells are alive.',
    svg: '<svg viewBox="0 0 660 440" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="200" y1="80" x2="200" y2="340"/>'
      + '<line x1="230" y1="80" x2="230" y2="340"/>'
      + '<line x1="270" y1="80" x2="270" y2="340"/>'
      + '<line x1="300" y1="80" x2="300" y2="340"/>'
      + '<text x="215" y="66" font-size="13" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">xylem</text>'
      + '<text x="285" y="66" font-size="13" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">phloem</text>'
      + '<line x1="215" y1="330" x2="215" y2="100" stroke="#1d4ed8" '
      + 'stroke-width="3"/>'
      + '<path d="M209 112 L215 96 L221 112" stroke="#1d4ed8" '
      + 'stroke-width="3"/>'
      + '<path d="M209 200 L215 186 L221 200" stroke="#1d4ed8" '
      + 'stroke-width="3"/>'
      + '<path d="M209 280 L215 266 L221 280" stroke="#1d4ed8" '
      + 'stroke-width="3"/>'
      + '<line x1="285" y1="140" x2="285" y2="100" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<path d="M279 112 L285 96 L291 112" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<line x1="285" y1="180" x2="285" y2="320" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<path d="M279 308 L285 324 L291 308" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<path d="M200 80 Q130 40 70 70 Q120 110 200 90 Z" '
      + 'fill="#9ecfb0" fill-opacity="0.4"/>'
      + '<path d="M300 80 Q370 40 430 70 Q380 110 300 90 Z" '
      + 'fill="#9ecfb0" fill-opacity="0.4"/>'
      + '<line x1="120" y1="60" x2="104" y2="30" stroke="#b4531a"/>'
      + '<path d="M100 42 L102 26 L112 36" stroke="#b4531a"/>'
      + '<text x="30" y="22" font-size="12" fill="#b4531a" '
      + 'stroke="none">water vapour leaves</text>'
      + '<text x="30" y="36" font-size="12" fill="#b4531a" '
      + 'stroke="none">through the stomata</text>'
      + '<text x="446" y="64" font-size="12" fill="#0f8a4d" '
      + 'stroke="none">source: sugar made here</text>'
      + '<text x="320" y="110" font-size="12" fill="#0f8a4d" '
      + 'stroke="none">sink: growing shoot</text>'
      + '<path d="M250 340 Q190 390 150 420" />'
      + '<path d="M250 340 Q310 390 350 420" />'
      + '<ellipse cx="320" cy="396" rx="26" ry="16" fill="#e0c18a" '
      + 'fill-opacity="0.6"/>'
      + '<text x="364" y="400" font-size="12" fill="#0f8a4d" '
      + 'stroke="none">sink: storage root</text>'
      + '<text x="60" y="384" font-size="12" fill="#1d4ed8" '
      + 'stroke="none">water enters</text>'
      + '<text x="60" y="398" font-size="12" fill="#1d4ed8" '
      + 'stroke="none">by osmosis</text>'
      + '<text x="250" y="238" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">xylem dead,</text>'
      + '<text x="250" y="252" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">phloem alive</text>'
      + '</svg>',
  },

  mechanism:
    'The lifting of water up a tree is done by the sun, and the '
    + 'tree spends nothing on it. That is the answer to the opening '
    + 'question and it is worth building carefully, because it is the '
    + 'best piece of physics in the biology syllabus. Inside a leaf '
    + 'the cell walls are wet, and water evaporates from them into '
    + 'the air spaces and escapes through the stomata. Each molecule '
    + 'that leaves is held to the one behind it by cohesion, so as it '
    + 'goes it tugs. The water in the xylem is one unbroken thread '
    + 'from the leaf to the root, so a tug at the top is felt at the '
    + 'bottom, exactly as a pull on a rope is. Millions of molecules '
    + 'leaving every second add up to a steady tension, and that '
    + 'tension is the transpiration pull. The xylem is suited to '
    + 'carrying it: the cells are dead and hollow, so there is '
    + 'nothing in the way, and their walls are thickened with lignin, '
    + 'so they do not collapse inwards under the suction.\n\n'
    + 'Both of those facts are marks in a question about why xylem is '
    + 'suited to its job. Adhesion keeps the water clinging to those '
    + 'walls, which is why the thread does not fall away in the '
    + 'middle of a tall trunk. Root pressure does exist and can be '
    + 'shown, by the sap that oozes from a cut stem, but it is far '
    + 'too weak to raise water twenty metres. So a full answer says '
    + 'that root pressure pushes from below and transpiration pull '
    + 'does the main work from above. Phloem is a different kind of '
    + 'system and the differences follow from its job. Sugar has to '
    + 'go wherever the plant needs it: up to a growing shoot in the '
    + 'morning, down to a swelling cassava tuber later in the season, '
    + 'into a maize cob as it fills. A one way pull could not do '
    + 'that, so translocation is driven by the plant using energy to '
    + 'load sugar into the phloem at the source and unload it at the '
    + 'sink.\n\n'
    + 'Two consequences are examinable. Because it needs energy, '
    + 'translocation stops if the plant is deprived of oxygen or '
    + 'poisoned, while water will keep moving up a dead stem as long '
    + 'as the thread is intact. And because sugar moves source to '
    + 'sink rather than up or down, a ring of bark cut from a tree, '
    + 'which removes the phloem but leaves the xylem, kills the tree '
    + 'slowly from below while the leaves stay green for a while. '
    + 'That experiment is called ringing or girdling and it is the '
    + 'classic proof that the two tissues are separate.\n\n'
    + 'Three places lose marks. The first is swapping the two '
    + 'tissues, and the way to never do it is to fix one fact: phloem '
    + 'carries food, and both words have an o. The second is saying '
    + 'transpiration is the plant breathing, or that it is wasteful. '
    + 'It is the unavoidable cost of having stomata open for carbon '
    + 'dioxide, and the plant gets the water lifting free as a side '
    + 'effect, so an answer should present it as a trade rather than '
    + 'a fault. The third is explaining wind as drying the leaf.\n\n'
    + 'What wind actually does is carry away the humid layer of air '
    + 'sitting against the leaf surface, so the air next to the '
    + 'stomata stays dry and evaporation continues at full speed. '
    + 'Naming that layer is the better answer. A note on apparatus. A '
    + 'potometer is the proper instrument for measuring transpiration '
    + 'and many schools do not have one, but the examinable part is '
    + 'the method and the fair test, not the glassware. Two '
    + 'experiments need almost nothing: standing a cut stem of balsam '
    + 'or a white flower in red ink and seeing the dye rise in the '
    + 'xylem, and weighing a potted plant in a sealed bag against a '
    + 'plant whose leaves have been removed. Both make the point, and '
    + 'the second one has a built in control, which is itself worth '
    + 'discussing.',

  recap:
    'A plant takes in water through its roots, by osmosis, because the '
    + 'soil water is more dilute than the sap in the root hair cells. '
    + 'It makes food in its leaves, which are usually at the top. '
    + 'So two things have to travel the length of the plant, in opposite '
    + 'directions: water going up and food going down. '
    + 'A plant has no heart and no muscles, so neither journey can be '
    + 'pumped the way blood is. '
    + 'Instead it has two sets of tubes running the whole length of root, '
    + 'stem and leaf. '
    + 'This lesson is about which tube does which job, and what makes '
    + 'things move in each.',

  method: [
    'Name the substance that is moving and the direction it goes.',
    'Water and minerals upward: xylem. '
      + 'Sugar in either direction: phloem.',
    'For water, start at the leaf: evaporation through the stomata.',
    'Say that cohesion transmits the pull down an unbroken thread of water.',
    'Add adhesion to the vessel walls, and root pressure from below.',
    'Say why xylem suits the job: dead and hollow, with lignified walls.',
    'For sugar, name the source and the sink, and say the process needs energy.',
    'For a rate of transpiration, name the condition and explain it through evaporation.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A cut stem of a white flower is stood in red ink. '
        + 'After some hours the petals are streaked red. '
        + 'Name the tissue the ink travelled in and give one reason.',
      steps: [
        'The ink moved upwards, with the water.',
        'Water and dissolved substances travel in the xylem.',
      ],
      answer: 'Xylem. '
        + 'A cross section of the stem would show the dye only in the '
        + 'xylem vessels, which is the usual next part of the question.',
    },
    {
      level: 4,
      ask: 'Explain why transpiration is faster on a windy day than on a '
        + 'still one.',
      steps: [
        'A layer of humid air normally collects against the leaf surface.',
        'That layer slows evaporation, because the air next to the stomata '
        + 'is already moist.',
        'Wind carries the layer away.',
      ],
      answer: 'Wind removes the humid layer of air at the leaf surface, so '
        + 'the air next to the stomata stays dry and water continues to '
        + 'evaporate quickly. '
        + 'Saying wind dries the leaf is not the mechanism and scores less.',
    },
    {
      level: 5,
      ask: 'A ring of bark is removed all the way round the trunk of a '
        + 'young tree. '
        + 'Describe and explain what happens above and below the ring.',
      steps: [
        'Bark removal takes the phloem but leaves the xylem, which is '
        + 'deeper in.',
        'Water can still reach the leaves, so they stay green for a '
        + 'while.',
        'Sugar can no longer pass down the trunk.',
        'So the roots are starved and the swelling above the ring is sugar '
        + 'that cannot get past.',
      ],
      answer: 'Above the ring the tree stays green at first and a swelling '
        + 'forms where sugar accumulates. '
        + 'Below it the roots are starved of sugar and the tree eventually '
        + 'dies. '
        + 'This proves that water and sugar travel in different tissues, '
        + 'which is what the question is for.',
    },
    {
      level: 6,
      ask: 'Water reaches the top of a twenty metre tree although root '
        + 'pressure can raise it only a few metres. '
        + 'Explain fully how the water gets there, naming the properties of '
        + 'water involved.',
      steps: [
        'Water evaporates from the wet cell walls in the leaf and leaves '
        + 'through the stomata.',
        'Cohesion holds the water molecules to each other, so each one '
        + 'leaving pulls on the next.',
        'The water in the xylem is one unbroken column, so the pull is '
        + 'transmitted all the way to the root.',
        'Adhesion holds the column to the lignified walls, so it does not '
        + 'break away.',
        'The xylem vessels are dead, hollow and thickened, so they neither '
        + 'obstruct the flow nor collapse under the tension.',
      ],
      answer: 'Transpiration pull, carried by cohesion along an unbroken '
        + 'column and supported by adhesion to the vessel walls, with root '
        + 'pressure assisting from below. '
        + 'The energy comes from the sun, not from the tree, which is why a '
        + 'tree can do for nothing what a hand pump needs a person for. '
        + 'The three named properties, cohesion, adhesion and the lignified '
        + 'wall, are three separate marks.',
    },
  ],

  traps: [
    {
      mistake: 'Saying phloem carries water and xylem carries food.',
      why: 'Phloem carries food, and both words contain an o. '
        + 'Fix that one fact and the pair is never swapped.',
    },
    {
      mistake: 'Explaining wind by saying it dries the leaf out.',
      why: 'Wind removes the humid layer of air at the surface. '
        + 'Naming that layer is the mechanism the mark is for.',
    },
    {
      mistake: 'Giving root pressure as the main cause of water rising in a tree.',
      why: 'It is far too weak for a tall tree. '
        + 'Transpiration pull does the main work, with root pressure '
        + 'helping from below.',
    },
    {
      mistake: 'Calling transpiration a waste of water.',
      why: 'It is the unavoidable cost of open stomata, and the plant gets '
        + 'water transport free from it. '
        + 'Present it as a trade.',
    },
    {
      mistake: 'Saying translocation needs no energy because the xylem flow does not.',
      why: 'They are different systems. '
        + 'Translocation is active and stops when the plant is poisoned; '
        + 'water will rise in a dead stem.',
    },
  ],

  extension:
    'A plant has a standing conflict to manage. '
    + 'Stomata must be open to let carbon dioxide in for photosynthesis, '
    + 'and open stomata lose water. '
    + 'Most plants close them at midday in the dry season, accepting less '
    + 'photosynthesis to survive, and reopen them in the cooler afternoon. '
    + 'Desert plants go further and open their stomata only at night, '
    + 'storing the carbon dioxide until morning. '
    + 'Every leaf is a settlement of that one argument.',

  questions: [
    {
      id: 'tp-1',
      ask: 'Sugar is carried in the:',
      kind: 'choice',
      options: ['Phloem', 'Xylem', 'Root hairs'],
      answer: 'Phloem',
      teach: 'Phloem carries food, and both words have an o in them.',
      level: 3,
    },
    {
      id: 'tp-2',
      ask: 'The main force lifting water up a tall tree is:',
      kind: 'choice',
      options: [
        'Transpiration pull from the leaves',
        'Root pressure from below',
        'The plant pumping with its stem',
      ],
      answer: 'Transpiration pull from the leaves',
      teach: 'Root pressure helps but is far too weak alone. '
        + 'The energy comes from the sun.',
      level: 5,
    },
    {
      id: 'tp-3',
      ask: 'Xylem vessels are suited to their job because they are:',
      kind: 'choice',
      options: [
        'Dead, hollow and thickened with lignin',
        'Living, with perforated end walls',
        'Filled with sugar solution',
      ],
      answer: 'Dead, hollow and thickened with lignin',
      teach: 'Hollow so nothing obstructs the flow, and thickened so they '
        + 'do not collapse under the tension.',
      level: 4,
    },
    {
      id: 'tp-4',
      ask: 'Transpiration is slower in humid air because:',
      kind: 'choice',
      options: [
        'The air outside is already full of water vapour',
        'The stomata open wider',
        'The xylem is blocked',
      ],
      answer: 'The air outside is already full of water vapour',
      teach: 'Evaporation needs somewhere for the vapour to go. '
        + 'Humid air gives it nowhere.',
      level: 4,
    },
  ],
})

/* ── reproduction in flowering plants ───────────────────────────────────── */

teach({
  topicId: 'reproduction-plants-bio',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A flower is a reproductive organ. '
      + 'Pollination moves pollen from an anther to a stigma. '
      + 'Fertilisation happens afterwards, when a nucleus from the pollen '
      + 'grain joins the egg inside the ovule. '
      + 'The ovule then becomes the seed and the ovary becomes the fruit.',
    method: [
      'Name the part and say whether it is male or female.',
      'Keep pollination and fertilisation separate: one is a journey, the other is a joining.',
      'After fertilisation, ovule becomes seed and ovary becomes fruit.',
    ],
  },

  why:
    'A cocoa farmer at Suhum has trees covered in flowers and very little '
    + 'pod set, perhaps three pods for every hundred flowers. '
    + 'A neighbouring maize field, with no flowers anyone would call '
    + 'flowers, fills nearly every cob. '
    + 'Both crops flowered. '
    + 'Both had rain and sun. '
    + 'So why does one of them need something extra to happen before it can '
    + 'set fruit, and what is that something?',

  notation:
    'The stamen is the male part and consists of an anther on a filament. '
    + 'The anther makes the pollen. '
    + 'The carpel, sometimes called the pistil, is the female part and '
    + 'consists of a stigma, a style and an ovary. '
    + 'Inside the ovary are one or more ovules, and inside each ovule is '
    + 'the egg cell. '
    + 'Pollination is the transfer of pollen from anther to stigma, and it '
    + 'is a journey. '
    + 'Fertilisation is the fusion of a male nucleus with the egg nucleus, '
    + 'and it is a joining. '
    + 'Self pollination means pollen reaching a stigma on the same plant, '
    + 'and cross pollination means pollen reaching a different plant of the '
    + 'same kind. '
    + 'Keep these two words apart, because using one for the other is the '
    + 'commonest single error in the whole topic.',

  idea:
    'A flower holds the reproductive organs of the plant. '
    + 'The sepals protect the bud, the petals attract or let the wind '
    + 'through, the stamens make pollen, and the carpel holds the ovules. '
    + 'Pollination is the transfer of pollen from an anther to a stigma, '
    + 'carried by an insect, by the wind, or occasionally by water or a '
    + 'bird. '
    + 'The flower is built for whichever carrier it uses, and the whole '
    + 'structure can be read off from that. '
    + 'After pollination the pollen grain grows a tube down the style to '
    + 'the ovule. '
    + 'A male nucleus travels down that tube and fuses with the egg '
    + 'nucleus, and that fusion is fertilisation. '
    + 'In flowering plants a second male nucleus fuses with another nucleus '
    + 'in the ovule to form the food store of the seed, which is why the '
    + 'process is called double fertilisation. '
    + 'The fertilised ovule becomes the seed, with an embryo and a food '
    + 'store inside a protective coat. '
    + 'The ovary wall becomes the fruit, which protects the seed and often '
    + 'helps to disperse it. '
    + 'The petals, stamens, stigma and style have done their work and '
    + 'usually wither away.',

  tables: [
    {
      caption: 'How an insect pollinated flower differs from a wind pollinated one',
      columns: ['Part', 'Insect pollinated', 'Wind pollinated'],
      rows: [
        ['Petals', 'Large, coloured, often scented', 'Small, green or absent'],
        ['Nectar', 'Present', 'Absent'],
        ['Pollen', 'Sticky or spiky, and little of it', 'Light and smooth, and a great deal of it'],
        ['Anthers', 'Inside the flower, where an insect must brush them',
          'Hanging outside, loose on long filaments'],
        ['Stigma', 'Small and sticky, inside the flower',
          'Large and feathery, hanging outside'],
      ],
      note: 'Every row is the same argument twice. '
        + 'An insect must be attracted and then made to touch the right '
        + 'parts; the wind must be given the largest possible chance of a '
        + 'hit.',
    },
    {
      caption: 'What each part of the flower becomes after fertilisation',
      columns: ['Before', 'After'],
      rows: [
        ['Ovule', 'Seed'],
        ['Ovary', 'Fruit'],
        ['Ovary wall', 'Fruit wall, the part that is eaten in a mango'],
        ['Egg nucleus fused with a male nucleus', 'Embryo'],
        ['Petals, stamens, style', 'Wither and fall'],
      ],
      note: 'Two lines of this table answer a great many examination '
        + 'questions: ovule to seed, ovary to fruit.',
    },
    {
      caption: 'Self and cross pollination weighed against each other',
      columns: ['Point', 'Self pollination', 'Cross pollination'],
      rows: [
        ['Pollen comes from', 'The same plant', 'A different plant of the same kind'],
        ['Variation in the offspring', 'Little', 'Much'],
        ['Needs a carrier', 'Not necessarily', 'Yes, insect or wind'],
        ['Advantage', 'Certain, even when no carrier comes', 'Offspring better able to meet change and disease'],
      ],
      note: 'Many plants have features that prevent self pollination, such '
        + 'as anthers and stigmas ripening at different times, and that is '
        + 'evidence of how much the variation is worth.',
    },
  ],

  figure: {
    alt: 'A flower drawn in section, cut down the middle. At the bottom are '
      + 'two sepals, then two petals spreading outwards, both labelled. In '
      + 'the middle stands a stamen with a long filament and an anther at '
      + 'the top, labelled anther, makes pollen. Beside it stands the '
      + 'carpel: a swollen ovary at the base containing two small circles '
      + 'labelled ovules, a style rising from it, and a stigma at the top '
      + 'labelled stigma, receives pollen. A grain of pollen is drawn '
      + 'resting on the stigma, with a dotted line running from it down '
      + 'through the style into one of the ovules, labelled pollen tube '
      + 'grows down to the ovule. An arrow from the anther across to the '
      + 'stigma is labelled pollination, a journey, and a short arrow at '
      + 'the ovule is labelled fertilisation, a joining. Below the drawing '
      + 'a line says the ovule becomes the seed and the ovary becomes the '
      + 'fruit.',
    svg: '<svg viewBox="0 0 660 420" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<path d="M300 340 Q240 330 210 300" stroke="#0f8a4d"/>'
      + '<path d="M360 340 Q420 330 450 300" stroke="#0f8a4d"/>'
      + '<text x="180" y="296" font-size="12" text-anchor="end" '
      + 'fill="#0f8a4d" stroke="none">sepal</text>'
      + '<path d="M300 330 Q210 260 140 220" stroke="#b4531a"/>'
      + '<path d="M300 330 Q220 300 150 290" stroke="#b4531a"/>'
      + '<path d="M360 330 Q450 260 520 220" stroke="#b4531a"/>'
      + '<path d="M360 330 Q440 300 510 290" stroke="#b4531a"/>'
      + '<text x="130" y="212" font-size="12" text-anchor="end" '
      + 'fill="#b4531a" stroke="none">petal</text>'
      + '<line x1="250" y1="330" x2="250" y2="140"/>'
      + '<ellipse cx="250" cy="124" rx="18" ry="12" fill="#e0c18a" '
      + 'fill-opacity="0.7"/>'
      + '<text x="226" y="104" font-size="12" text-anchor="end" '
      + 'fill="currentColor" stroke="none">anther,</text>'
      + '<text x="226" y="118" font-size="12" text-anchor="end" '
      + 'fill="currentColor" stroke="none">makes pollen</text>'
      + '<path d="M300 340 Q300 290 330 286 Q360 290 360 340 Z" '
      + 'fill="#cfd8e8" fill-opacity="0.5"/>'
      + '<circle cx="320" cy="316" r="7" fill="#1d4ed8" fill-opacity="0.5" '
      + 'stroke="#1d4ed8"/>'
      + '<circle cx="342" cy="316" r="7" fill="#1d4ed8" fill-opacity="0.5" '
      + 'stroke="#1d4ed8"/>'
      + '<text x="394" y="320" font-size="12" fill="#1d4ed8" '
      + 'stroke="none">ovules, inside the ovary</text>'
      + '<line x1="330" y1="286" x2="330" y2="120"/>'
      + '<text x="346" y="214" font-size="12" fill="currentColor" '
      + 'stroke="none">style</text>'
      + '<ellipse cx="330" cy="110" rx="20" ry="9" fill="#f0b5c8" '
      + 'fill-opacity="0.7"/>'
      + '<text x="356" y="96" font-size="12" fill="currentColor" '
      + 'stroke="none">stigma, receives pollen</text>'
      + '<circle cx="330" cy="100" r="5" fill="#b4531a" stroke="none"/>'
      + '<path d="M268 116 L310 104" stroke="#b4531a"/>'
      + '<path d="M300 98 L314 103 L302 110" stroke="#b4531a"/>'
      + '<text x="252" y="64" font-size="12" fill="#b4531a" '
      + 'stroke="none">pollination: a journey</text>'
      + '<line x1="330" y1="106" x2="330" y2="310" stroke="#7c3aed" '
      + 'stroke-dasharray="4 3"/>'
      + '<path d="M324 300 L330 314 L336 300" stroke="#7c3aed"/>'
      + '<text x="374" y="250" font-size="12" fill="#7c3aed" '
      + 'stroke="none">pollen tube grows down</text>'
      + '<text x="374" y="266" font-size="12" fill="#7c3aed" '
      + 'stroke="none">fertilisation: a joining</text>'
      + '<line x1="310" y1="340" x2="310" y2="372"/>'
      + '<text x="330" y="398" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'ovule becomes the seed, ovary becomes the fruit</text>'
      + '</svg>',
  },

  mechanism:
    'Nearly every mark in this topic depends on one distinction, so '
    + 'it is worth stating before anything else. Pollination is a '
    + 'journey and fertilisation is a joining. Pollen landing on a '
    + 'stigma is pollination and nothing more has happened yet: the '
    + 'pollen is on the outside of the flower, nowhere near the egg. '
    + 'Fertilisation is a separate event, later, when a nucleus from '
    + 'that pollen grain has travelled down a tube through the style '
    + 'and fused with the egg nucleus inside the ovule. Hours or days '
    + 'may pass between the two, and pollination can happen without '
    + 'fertilisation ever following, which is exactly the cocoa '
    + 'farmer’s problem. A candidate who writes that pollination is '
    + 'the fusion of gametes has lost the mark whatever else the '
    + 'answer contains. The structure of a flower can be worked out '
    + 'rather than memorised, once you ask what the carrier is. An '
    + 'insect has to be attracted, so the flower is large, coloured, '
    + 'scented and holds nectar. It has to be made to touch the '
    + 'anther and then the stigma, so both sit inside the flower '
    + 'where the insect must brush past them.\n\n'
    + 'And since the insect carries the pollen directly, only a '
    + 'little pollen is needed, and it is sticky or spiky so it holds '
    + 'on. Wind is a careless carrier. It cannot be attracted, so '
    + 'there is no point in petals, scent or nectar, and maize has '
    + 'none. It cannot be aimed, so the only strategy is quantity and '
    + 'exposure: anthers hang outside on long filaments so the pollen '
    + 'is caught by the slightest breeze, the pollen is light and '
    + 'smooth so it carries far, there is a great deal of it, and the '
    + 'stigma is large and feathery to catch whatever drifts past. '
    + 'The tassel at the top of a maize plant and the silk on the cob '
    + 'are exactly those two things.\n\n'
    + 'So a question that gives a flower’s features and asks how it '
    + 'is pollinated is answerable by reasoning, and a question that '
    + 'asks for two features with reasons is asking for this argument '
    + 'in short. Now the cocoa. A cocoa flower is small, faces '
    + 'downwards, and is pollinated by tiny midges that breed in damp '
    + 'litter on the forest floor. It is also built to resist self '
    + 'pollination. So a flower that is not visited by the right '
    + 'midge at the right hour is never fertilised, withers and '
    + 'drops, and a plantation with the litter layer swept clean has '
    + 'very few midges.\n\n'
    + 'That is why pod set is low, why shade trees and leaf litter '
    + 'are part of good cocoa husbandry, and why some growers hand '
    + 'pollinate with a brush. Maize, pollinated by wind over a whole '
    + 'field at once, has no such bottleneck. Three further places '
    + 'lose marks. The first is the ovule and ovary pair. The ovule '
    + 'becomes the seed and the ovary becomes the fruit, and getting '
    + 'them the wrong way round turns a mango stone into a mango. Say '
    + 'the words to yourself with the drawing in front of you: the '
    + 'small thing inside becomes the small thing inside.\n\n'
    + 'The second is self pollination described as useless. It '
    + 'produces little variation, which is a real disadvantage, but '
    + 'it is certain, and a plant growing where no insect comes is '
    + 'better off with seeds than with none. A balanced answer gives '
    + 'one advantage and one disadvantage of each. The third is '
    + 'forgetting that a fruit can form from an ovary that held '
    + 'several ovules, which is why a pawpaw has many seeds and a '
    + 'mango one. A note on apparatus. This is the one topic in the '
    + 'syllabus that needs no equipment at all. A hibiscus flower, '
    + 'which grows in most compounds in Ghana, can be opened with a '
    + 'razor blade and every part named in this lesson can be seen '
    + 'with the naked eye. A maize tassel and a cob with its silk '
    + 'make the wind pollinated comparison just as plainly. Any '
    + 'school can do the whole practical for the cost of walking '
    + 'outside.',

  recap:
    'A flower is not decoration. '
    + 'It is how a plant makes seed. '
    + 'Inside it are the male parts, which make pollen, and the female '
    + 'parts, which hold the eggs. '
    + 'Pollen has to get from one to the other, and since a plant cannot '
    + 'walk, something else has to carry it: usually an insect or the wind. '
    + 'After that the seed forms, and around the seed the fruit forms. '
    + 'You have eaten the proof many times: every mango has a stone in it, '
    + 'and that stone is a seed. '
    + 'This lesson names the parts, and follows the pollen from the anther '
    + 'to the egg.',

  method: [
    'Name each part of the flower and say whether it is male or female.',
    'Say what the carrier is, and read the flower’s features from that.',
    'Describe pollination as a transfer, from anther to stigma.',
    'Describe fertilisation separately, as a fusion of nuclei inside the ovule.',
    'Mention the pollen tube growing down the style between the two events.',
    'After fertilisation, say ovule becomes seed and ovary becomes fruit.',
    'For self against cross pollination, give one advantage of each.',
    'Use the plant’s real name where you can, because a named example earns credit.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the male and the female parts of a flower, and say what '
        + 'each one does.',
      steps: [
        'The male part is the stamen, made of an anther on a filament.',
        'The female part is the carpel, made of a stigma, a style and an '
        + 'ovary.',
      ],
      answer: 'The stamen is male: its anther makes pollen. '
        + 'The carpel is female: its stigma receives pollen and its ovary '
        + 'holds the ovules, which contain the eggs.',
    },
    {
      level: 4,
      ask: 'A flower has small green petals, no scent, anthers hanging on '
        + 'long filaments outside the flower, and a large feathery stigma. '
        + 'State how it is pollinated and give two reasons.',
      steps: [
        'There is nothing to attract an insect: no colour, no scent, no '
        + 'nectar.',
        'The anthers hang outside, where moving air can carry the pollen '
        + 'away.',
        'The feathery stigma has a large surface for catching drifting '
        + 'pollen.',
      ],
      answer: 'It is wind pollinated. '
        + 'Two reasons: the exposed anthers release pollen into the air, '
        + 'and the large feathery stigma is built to catch pollen from the '
        + 'air. '
        + 'The absence of petals and scent supports this, since neither '
        + 'would be of any use to the wind.',
    },
    {
      level: 5,
      ask: 'Distinguish clearly between pollination and fertilisation, and '
        + 'describe what happens between them.',
      steps: [
        'Pollination is the transfer of pollen from an anther to a stigma.',
        'The pollen grain then grows a pollen tube down through the style.',
        'A male nucleus travels down the tube to the ovule.',
        'Fertilisation is the fusion of that male nucleus with the egg '
        + 'nucleus.',
      ],
      answer: 'Pollination is a transfer and happens outside; fertilisation '
        + 'is a fusion of nuclei and happens inside the ovule. '
        + 'Between them the pollen tube grows down the style. '
        + 'Pollination can occur without fertilisation following, and that '
        + 'is why the two words cannot be swapped.',
    },
    {
      level: 6,
      ask: 'A cocoa farmer finds that fewer than five flowers in a hundred '
        + 'set pods, although the trees flower heavily. '
        + 'Suggest two biological reasons and one practical response for '
        + 'each.',
      steps: [
        'Cocoa is pollinated by small midges that breed in damp leaf '
        + 'litter on the ground.',
        'If the plantation floor is swept bare, the midge population '
        + 'collapses and most flowers are never pollinated.',
        'Cocoa flowers are also largely self incompatible, so pollen from '
        + 'the same tree often fails to fertilise.',
        'So a block of trees all raised from one parent will set poorly '
        + 'even when midges are present.',
      ],
      answer: 'First, too few pollinating midges, because the leaf litter '
        + 'they breed in has been cleared; the response is to leave litter '
        + 'and keep shade trees. '
        + 'Second, self incompatibility, so pollen from genetically '
        + 'identical neighbours fails; the response is to interplant '
        + 'different compatible varieties, or to hand pollinate. '
        + 'Note that the flowers were pollinated in neither case, so the '
        + 'failure is at pollination or at fertilisation, and the answer '
        + 'should say which.',
    },
  ],

  traps: [
    {
      mistake: 'Defining pollination as the fusion of gametes.',
      why: 'That is fertilisation. '
        + 'Pollination is a journey from anther to stigma, and nothing has '
        + 'fused yet.',
    },
    {
      mistake: 'Saying the ovary becomes the seed.',
      why: 'The ovule becomes the seed and the ovary becomes the fruit. '
        + 'The small thing inside becomes the small thing inside.',
    },
    {
      mistake: 'Describing self pollination as simply a disadvantage.',
      why: 'It gives little variation, but it is certain without a '
        + 'carrier. '
        + 'Give one advantage and one disadvantage of each kind.',
    },
    {
      mistake: 'Giving a wind pollinated flower large coloured petals.',
      why: 'The wind cannot be attracted, so petals would be a waste. '
        + 'Every feature follows from the carrier.',
    },
    {
      mistake: 'Forgetting the pollen tube.',
      why: 'It is how the male nucleus reaches the ovule, and a '
        + 'description of fertilisation without it skips the whole journey.',
    },
  ],

  extension:
    'A banana has no seeds, and a seedless orange has none either. '
    + 'Both are fruits whose ovary developed without fertilisation, which '
    + 'is why there is nothing inside. '
    + 'That means a banana plant cannot be grown from seed and every '
    + 'banana plant in a plantation is a cutting of another one. '
    + 'So the whole crop is genetically identical, with the same weakness '
    + 'as a field of cassava cuttings, and a single disease can threaten '
    + 'the world’s supply of a variety. '
    + 'This has already happened once, in the middle of the last century.',

  questions: [
    {
      id: 'rp-1',
      ask: 'Pollination is:',
      kind: 'choice',
      options: [
        'The transfer of pollen from anther to stigma',
        'The fusion of a male nucleus with the egg',
        'The growth of the seed inside the fruit',
      ],
      answer: 'The transfer of pollen from anther to stigma',
      teach: 'A journey, not a joining. '
        + 'Fertilisation is the fusion, and it comes later.',
      level: 3,
    },
    {
      id: 'rp-2',
      ask: 'After fertilisation, the ovule becomes the:',
      kind: 'choice',
      options: ['Seed', 'Fruit', 'Flower'],
      answer: 'Seed',
      teach: 'And the ovary becomes the fruit. '
        + 'These two lines answer a great many questions.',
      level: 3,
    },
    {
      id: 'rp-3',
      ask: 'A large feathery stigma hanging outside the flower suggests '
        + 'pollination by:',
      kind: 'choice',
      options: ['Wind', 'Insects', 'Water'],
      answer: 'Wind',
      teach: 'It is a large surface for catching drifting pollen, which is '
        + 'the only strategy available against a carrier that cannot be '
        + 'aimed.',
      level: 4,
    },
    {
      id: 'rp-4',
      ask: 'Cross pollination is valuable mainly because it:',
      kind: 'choice',
      options: [
        'Produces offspring with more genetic variation',
        'Needs no insect to carry the pollen',
        'Produces more seeds per flower',
      ],
      answer: 'Produces offspring with more genetic variation',
      teach: 'Variation is what lets a population meet disease and change. '
        + 'Self pollination has the opposite strength: certainty.',
      level: 5,
    },
  ],
})

/* ── ecosystems and energy flow ─────────────────────────────────────────── */

teach({
  topicId: 'ecosystems-bio',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Energy enters an ecosystem through producers and is passed along a '
      + 'food chain. '
      + 'At each step most of it is lost, mainly as heat from respiration, '
      + 'so only about a tenth reaches the next level. '
      + 'That loss is why food chains are short and why there are few top '
      + 'predators.',
    method: [
      'Draw the food chain with arrows pointing the way the energy goes.',
      'Name each trophic level: producer, primary consumer, secondary consumer.',
      'For a quantity, take about ten per cent across each arrow and say where the rest went.',
    ],
  },

  why:
    'A fisherman on the Volta can fill a canoe with small fish in a '
    + 'morning. '
    + 'Catching a canoe load of the big predatory fish that eat them takes '
    + 'far longer, and everyone knows the large ones are scarce. '
    + 'The lake is the same lake and the sun falls on all of it equally. '
    + 'So why are there always far fewer big fish than small ones, in every '
    + 'lake and every forest, and never the other way round?',

  notation:
    'A producer makes its own food by photosynthesis, so every green plant '
    + 'and every alga is a producer. '
    + 'A consumer eats something else. '
    + 'The first consumer in a chain is the primary consumer, the one that '
    + 'eats it is the secondary consumer, and so on. '
    + 'A trophic level is a step in the chain, counted from the producer. '
    + 'A decomposer breaks down dead material and releases the minerals in '
    + 'it. '
    + 'An arrow in a food chain always points in the direction the energy '
    + 'travels, so grass points to goat and never the reverse. '
    + 'Biomass means the total dry mass of living material at a level. '
    + 'A quadrat is a square frame of known area used for sampling, and a '
    + 'transect is a line along which samples are taken.',

  idea:
    'An ecosystem is a community of living things together with the '
    + 'non living surroundings they depend on. '
    + 'Energy enters it as sunlight and is captured by producers in '
    + 'photosynthesis. '
    + 'It then passes along food chains as one organism eats another, and '
    + 'the chains cross to make a food web, which is what a real community '
    + 'looks like. '
    + 'At every step most of the energy is lost. '
    + 'Some of what was eaten is never digested and leaves in the faeces, '
    + 'some is lost in urine, and most of what is absorbed is spent in '
    + 'respiration and leaves as heat. '
    + 'Only the part built into new body tissue is available to the next '
    + 'level, and that is roughly ten per cent. '
    + 'Two consequences follow. '
    + 'Food chains are short, usually four or five levels, because after '
    + 'that there is too little energy left to support anything. '
    + 'And a pyramid of biomass narrows sharply upwards, which is why top '
    + 'predators are always few. '
    + 'Decomposers feed on dead matter at every level and release the '
    + 'minerals back to the soil, so minerals cycle round while energy '
    + 'passes through once and leaves as heat.',

  tables: [
    {
      caption: 'What happens to the energy a primary consumer takes in',
      columns: ['Where it goes', 'Roughly how much', 'Why'],
      rows: [
        ['Not eaten at all', 'A large share of the plant', 'Roots, bark and wood are left behind'],
        ['Passed out in faeces', 'A quarter or more of what was eaten',
          'Cellulose and other material that cannot be digested'],
        ['Lost in urine', 'A small share', 'Waste from breaking down protein'],
        ['Used in respiration, lost as heat', 'The largest single share',
          'Movement, warmth and all the work of staying alive'],
        ['Built into new tissue', 'About a tenth', 'This is the only part the next level can eat'],
      ],
      note: 'The fourth row is the one candidates leave out, and it is '
        + 'usually the mark. '
        + 'Energy is not destroyed; it leaves the ecosystem as heat.',
    },
    {
      caption: 'A food chain from a Ghanaian farm, named at every level',
      columns: ['Level', 'Organism', 'What it is called'],
      rows: [
        ['First', 'Maize plant', 'Producer'],
        ['Second', 'Grasshopper', 'Primary consumer, a herbivore'],
        ['Third', 'Lizard', 'Secondary consumer, a carnivore'],
        ['Fourth', 'Hawk', 'Tertiary consumer, a top carnivore'],
        ['At every level', 'Fungi and bacteria in the soil', 'Decomposers'],
      ],
      note: 'A named local chain scores better than a general one, and the '
        + 'arrows between these organisms point upwards through the table, '
        + 'the way the energy goes.',
    },
  ],

  figure: {
    alt: 'A pyramid of four stacked horizontal bars, widest at the bottom '
      + 'and narrowest at the top, drawn to scale so each bar is about a '
      + 'tenth as long as the one below it. The bottom bar is labelled '
      + 'producers, maize, with one hundred thousand units of energy. The '
      + 'next is labelled primary consumers, grasshoppers, ten thousand '
      + 'units. The next is labelled secondary consumers, lizards, one '
      + 'thousand units. The top, very short, is labelled tertiary '
      + 'consumer, one hawk, one hundred units. Beside each bar an arrow '
      + 'points away to the right, labelled lost as heat in respiration, '
      + 'in faeces and in urine, and a note at the bottom says about nine '
      + 'tenths is lost at every step, which is why the chain cannot go on '
      + 'much further.',
    svg: '<svg viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<rect x="60" y="280" width="400" height="48" fill="#0f8a4d" '
      + 'fill-opacity="0.25"/>'
      + '<text x="70" y="310" font-size="13" fill="currentColor" '
      + 'stroke="none">producers: maize, 100 000 units</text>'
      + '<rect x="60" y="214" width="200" height="48" fill="#1d4ed8" '
      + 'fill-opacity="0.25"/>'
      + '<text x="70" y="244" font-size="13" fill="currentColor" '
      + 'stroke="none">grasshoppers, 10 000</text>'
      + '<rect x="60" y="148" width="110" height="48" fill="#7c3aed" '
      + 'fill-opacity="0.25"/>'
      + '<text x="70" y="178" font-size="13" fill="currentColor" '
      + 'stroke="none">lizards, 1000</text>'
      + '<rect x="60" y="82" width="56" height="48" fill="#b4531a" '
      + 'fill-opacity="0.3"/>'
      + '<text x="126" y="112" font-size="13" fill="currentColor" '
      + 'stroke="none">one hawk, 100</text>'
      + '<line x1="470" y1="304" x2="560" y2="304" stroke="#b4531a"/>'
      + '<path d="M552 298 L564 304 L552 310" stroke="#b4531a"/>'
      + '<line x1="270" y1="238" x2="360" y2="238" stroke="#b4531a"/>'
      + '<path d="M352 232 L364 238 L352 244" stroke="#b4531a"/>'
      + '<line x1="180" y1="172" x2="270" y2="172" stroke="#b4531a"/>'
      + '<path d="M262 166 L274 172 L262 178" stroke="#b4531a"/>'
      + '<text x="580" y="290" font-size="11" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">heat from</text>'
      + '<text x="580" y="304" font-size="11" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">respiration,</text>'
      + '<text x="580" y="318" font-size="11" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">faeces, urine</text>'
      + '<text x="380" y="232" font-size="11" fill="#b4531a" '
      + 'stroke="none">the same losses again</text>'
      + '<text x="290" y="166" font-size="11" fill="#b4531a" '
      + 'stroke="none">and again</text>'
      + '<line x1="40" y1="330" x2="40" y2="80" stroke="#0f8a4d"/>'
      + '<path d="M34 92 L40 76 L46 92" stroke="#0f8a4d"/>'
      + '<text x="24" y="214" font-size="11" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none" transform="rotate(-90 24 214)">'
      + 'energy passes up</text>'
      + '<text x="340" y="360" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'about nine tenths is lost at every step, so the chain cannot go much further</text>'
      + '</svg>',
  },

  mechanism:
    'The whole of this topic follows from one fact, and it is a '
    + 'fact about respiration rather than about ecology. Every living '
    + 'thing respires all day, and respiration turns stored food into '
    + 'work and heat. The heat leaves the body and the ecosystem and '
    + 'is gone: it cannot be eaten. So when a goat eats grass, most '
    + 'of the energy in the grass is spent on being a goat, moving, '
    + 'keeping warm, pumping blood, and only what is left over gets '
    + 'built into goat flesh. That leftover is all a leopard can ever '
    + 'obtain by eating the goat. Add the material that was never '
    + 'eaten, the roots and the woody stems, and the material that '
    + 'passed straight through as faeces, and the share that moves up '
    + 'a level comes to roughly a tenth.\n\n'
    + 'Now the answers fall out. Why are food chains short? Because a '
    + 'tenth of a tenth of a tenth is a thousandth, and a fifth or '
    + 'sixth level would have almost nothing to live on. Why are '
    + 'there few big fish? Because each big fish needs many small '
    + 'fish behind it, and each of those needs a great deal of '
    + 'plankton behind it. The lake can support a large mass of '
    + 'plankton, a smaller mass of small fish, and only a very small '
    + 'mass of large ones, and no amount of fishing effort changes '
    + 'that arithmetic.\n\n'
    + 'This is also the honest argument about diet. A hectare of land '
    + 'planted with maize feeds far more people directly than the '
    + 'same hectare does by feeding the maize to cattle and then '
    + 'eating the cattle, because the second route throws away about '
    + 'nine tenths of the energy on the way. An examination question '
    + 'that asks why it is more efficient to eat plants than animals '
    + 'is asking for exactly that, and the answer should give the '
    + 'figure and name the loss. Note what is not lost. Minerals are '
    + 'not destroyed by being eaten, and decomposers return them to '
    + 'the soil where a plant can take them up again.\n\n'
    + 'So minerals cycle round and round, while energy passes through '
    + 'once and leaves. Saying that sentence correctly is worth two '
    + 'marks in most years, and candidates who say energy is recycled '
    + 'lose both. Three further places lose marks. The first is the '
    + 'direction of the arrows. An arrow means is eaten by, so it '
    + 'points the way the energy goes: maize to grasshopper to '
    + 'lizard. Drawing them towards the food is a common and '
    + 'expensive slip. The second is confusing a food chain with a '
    + 'food web. A chain is one line; a web is the set of crossing '
    + 'chains in a real community, and a question that gives several '
    + 'organisms usually wants the web.\n\n'
    + 'The third is sampling. A quadrat must be placed at random, '
    + 'using coordinates from a table of random numbers or paces in a '
    + 'random direction, because a student who chooses where to put '
    + 'it will choose an interesting spot and the result will not '
    + 'represent the field. The number to report is the mean of '
    + 'several quadrats, and the estimate for the whole area is that '
    + 'mean multiplied up by the ratio of the areas. A note on '
    + 'apparatus. This is the ecology practical and it needs almost '
    + 'nothing. A quadrat is four sticks and some string, a transect '
    + 'is a long rope with knots at intervals, and a school field or '
    + 'a patch of bush behind the compound is the habitat.\n\n'
    + 'What a school cannot do without a balance is measure biomass, '
    + 'so a pyramid of numbers can be built from counts while a '
    + 'pyramid of biomass has to be discussed rather than measured. '
    + 'Saying which one you have drawn is itself part of a good '
    + 'answer, because a pyramid of numbers can come out the wrong '
    + 'shape, with one large tree supporting thousands of insects, '
    + 'and a pyramid of biomass never does.',

  recap:
    'Living things depend on each other for food. '
    + 'Grass is eaten by a goat, and the goat may be eaten by something '
    + 'else. '
    + 'Writing that out with arrows gives a food chain, and you drew some '
    + 'at JHS. '
    + 'Green plants are at the start of every chain, because they are the '
    + 'only ones that can make food from sunlight. '
    + 'When anything dies, small organisms in the soil break it down, which '
    + 'is why a dead leaf does not lie there for ever. '
    + 'This lesson follows the energy rather than the eating, and once you '
    + 'count the energy, several things that look like accidents of nature '
    + 'turn out to be arithmetic.',

  method: [
    'List the organisms and decide which one makes its own food.',
    'Draw the chain with arrows pointing from the eaten to the eater.',
    'Label each trophic level: producer, primary consumer, secondary consumer.',
    'Join the chains into a web if several organisms are given.',
    'For energy, take about ten per cent across each arrow.',
    'Say where the other ninety went: not eaten, faeces, urine, and heat from respiration.',
    'Say that energy passes through once while minerals cycle.',
    'For sampling, place quadrats at random, take several, and use the mean.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Draw the food chain for maize, grasshopper, lizard and hawk, '
        + 'and name the trophic level of the lizard.',
      steps: [
        'Maize makes its own food, so it is the producer and comes first.',
        'Arrows point from the eaten to the eater.',
      ],
      answer: 'Maize to grasshopper to lizard to hawk. '
        + 'The lizard is the secondary consumer, at the third trophic '
        + 'level. '
        + 'The arrows show the direction the energy travels.',
    },
    {
      level: 4,
      ask: 'A crop captures 50 000 kJ of energy in a field. '
        + 'Estimate how much reaches a secondary consumer, taking the '
        + 'transfer as ten per cent at each step.',
      steps: [
        { math: '50\\,000 \\times \\tfrac{10}{100} = 5000\\ \\text{kJ}', why: 'To the primary consumer.' },
        { math: '5000 \\times \\tfrac{10}{100} = 500\\ \\text{kJ}', why: 'To the secondary consumer.' },
      ],
      answer: 'About $500$ kJ, one hundredth of what the crop captured. '
        + 'The rest was never eaten, or left in faeces and urine, or was '
        + 'lost as heat in respiration.',
    },
    {
      level: 5,
      ask: 'Explain why a hectare of land feeds more people if the maize is '
        + 'eaten directly than if it is fed to cattle first.',
      steps: [
        'Energy is lost at every transfer between trophic levels.',
        'Most of it goes as heat from the cattle’s respiration, and some in '
        + 'faeces and urine.',
        'Only about a tenth of the maize energy ends up as beef.',
        'Eating the maize directly keeps the learner at the second trophic '
        + 'level instead of the third.',
      ],
      answer: 'Because about ninety per cent of the energy is lost at the '
        + 'extra step, chiefly as heat from respiration. '
        + 'Eating at a lower trophic level wastes less, which is the '
        + 'biological argument and not a moral one. '
        + 'The figure and the named loss are the marks.',
    },
    {
      level: 6,
      ask: 'A student uses a $0.5$ m by $0.5$ m quadrat to estimate the '
        + 'number of a weed in a field of 200 square metres. '
        + 'Ten quadrats give a total of 60 plants. '
        + 'Estimate the population, and state one precaution and one source '
        + 'of error.',
      steps: [
        { math: '\\text{area of one quadrat} = 0.5 \\times 0.5 = 0.25\\ \\mathrm{m^2}' },
        { math: '\\text{mean per quadrat} = \\frac{60}{10} = 6' },
        { math: '\\text{per square metre} = \\frac{6}{0.25} = 24' },
        { math: '24 \\times 200 = 4800\\ \\text{plants}' },
      ],
      answer: 'About $4800$ plants. '
        + 'The precaution is that the quadrats must be placed at random, '
        + 'by random coordinates, because a chosen spot will not represent '
        + 'the field. '
        + 'A source of error is that ten quadrats cover only two and a half '
        + 'square metres of two hundred, so a patchy distribution will '
        + 'bias the estimate; taking more quadrats reduces it.',
    },
  ],

  traps: [
    {
      mistake: 'Drawing the arrows in a food chain towards the food.',
      why: 'An arrow means is eaten by, so it points the way the energy '
        + 'goes. '
        + 'Maize points to grasshopper.',
    },
    {
      mistake: 'Saying energy is recycled in an ecosystem.',
      why: 'Minerals cycle; energy passes through once and leaves as heat. '
        + 'Getting this the wrong way round loses two marks.',
    },
    {
      mistake: 'Explaining the loss between levels without naming respiration.',
      why: 'Respiration as heat is the largest single loss. '
        + 'Faeces and uneaten material are the others.',
    },
    {
      mistake: 'Placing the quadrat where the plants look interesting.',
      why: 'That is not sampling, it is choosing. '
        + 'Use random coordinates and take the mean of several.',
    },
    {
      mistake: 'Calling a single line of organisms a food web.',
      why: 'One line is a chain. '
        + 'A web is the crossing chains of a real community.',
    },
  ],

  extension:
    'Some substances do the opposite of energy. '
    + 'They get more concentrated at each level, not less. '
    + 'Think of a pesticide the body cannot break down. '
    + 'It stays in the fat of every fish that is eaten, so a predator '
    + 'at the top of a chain carries the load of everything below it. '
    + 'This is called bioaccumulation. '
    + 'It is why a chemical that looks harmless in a river, at a very '
    + 'low level, can still be found doing damage in the largest fish '
    + 'and in the birds that eat them.',

  questions: [
    {
      id: 'ec-1',
      ask: 'In a food chain, an arrow points:',
      kind: 'choice',
      options: [
        'From the organism eaten to the organism that eats it',
        'From the eater to its food',
        'In either direction, since it only links them',
      ],
      answer: 'From the organism eaten to the organism that eats it',
      teach: 'The arrow shows where the energy goes. '
        + 'Grass points to goat.',
      level: 3,
    },
    {
      id: 'ec-2',
      ask: 'A producer captures 20 000 kJ. '
        + 'Taking ten per cent transfer, how many kilojoules reach the '
        + 'primary consumer?',
      kind: 'numeric',
      options: [],
      answer: '2000',
      teach: 'One tenth crosses each arrow. '
        + 'The rest is uneaten, excreted, or lost as heat.',
      level: 4,
    },
    {
      id: 'ec-3',
      ask: 'The largest single loss of energy between one trophic level and '
        + 'the next is:',
      kind: 'choice',
      options: [
        'Heat from respiration',
        'Material lost in urine',
        'Energy used in growth',
      ],
      answer: 'Heat from respiration',
      teach: 'Every organism respires all day, and the heat leaves the '
        + 'ecosystem. '
        + 'Growth is the part that is passed on, not lost.',
      level: 5,
    },
    {
      id: 'ec-4',
      ask: 'In an ecosystem:',
      kind: 'choice',
      options: [
        'Minerals cycle but energy passes through once',
        'Both minerals and energy cycle',
        'Both minerals and energy pass through once',
      ],
      answer: 'Minerals cycle but energy passes through once',
      teach: 'Decomposers return the minerals to the soil. '
        + 'Nothing returns the heat.',
      level: 5,
    },
  ],
})
