/**
 * Stored lessons for SHS 1 Elective Biology.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── How this differs from the General Science treatment ───────────────────
 *
 * General Science asks what a cell contains and what the food groups are.
 * Biology asks for the mechanism and the experiment. Cell structure here
 * carries the bacterial cell as a contrast that explains why an antibiotic
 * can be selective. Movement across membranes is the topic General Science
 * does not have at all, and it is the one that explains wilting, salted
 * fish and a drip in a hospital. Biological molecules arrive with the
 * enzyme as a shaped molecule rather than as a name in a list, and with the
 * tests as procedures a learner could run. Classification is taken as far
 * as working a key and justifying each step, which is how it is examined.
 *
 * ── The thread ────────────────────────────────────────────────────────────
 *
 * Structure explains function, at every scale. An organelle has the shape
 * its job needs. A membrane lets some things through and not others
 * because of how it is built. An enzyme works on one substrate because of
 * the shape of its active site, and heat destroys it by destroying that
 * shape. A key sorts organisms by structure because structure is what is
 * inherited. So the sentence a Biology answer is built on is always of the
 * form: it has this structure, therefore it can do this.
 *
 * ── Equipment ─────────────────────────────────────────────────────────────
 *
 * The food tests need Benedict solution, iodine and Biuret reagent, and the
 * osmosis work needs visking tubing or simply fresh cassava and potato. Each
 * lesson says which parts need the reagent and which can be learned as a
 * written procedure with its colour change, because the colour change is
 * what the paper asks for.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── cell structure and function ─────────────────────────────────────────── */

teach({
  topicId: 'cell-structure-bio',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Each organelle has the structure its job needs. '
      + 'The nucleus holds the chromosomes. '
      + 'Mitochondria release energy. '
      + 'Ribosomes build protein. '
      + 'Chloroplasts trap light. '
      + 'A plant cell adds a cellulose wall, chloroplasts and a large '
      + 'vacuole. '
      + 'A bacterial cell has no nucleus and no membrane bound organelles.',
    method: [
      'Name the organelle, then its job, joined by so that or because.',
      'For plant against animal, check wall, chloroplast and vacuole.',
      'For a specialised cell, ask what it does and which organelle it '
        + 'needs most.',
      'For magnification, put image and real size in the same unit, then '
        + 'divide.',
    ],
  },

  idea:
    'A cell is the smallest unit that carries out all the processes of '
    + 'life. '
    + 'The cell membrane surrounds it and controls what enters and leaves. '
    + 'The cytoplasm is where most reactions happen. '
    + 'The nucleus holds the chromosomes, which carry the genetic '
    + 'instructions, '
    + 'and it is surrounded by its own membrane. '
    + 'Mitochondria release energy from glucose in aerobic respiration, '
    + 'and their inner membrane is deeply folded to give a large surface. '
    + 'Ribosomes are the sites where proteins are assembled. '
    + 'The endoplasmic reticulum is a system of membranes '
    + 'that transports materials through the cell. '
    + 'Lysosomes hold enzymes that break down worn out structures. '
    + 'A plant cell has three further features: '
    + 'a cell wall of cellulose, which gives shape and resists bursting; '
    + 'chloroplasts, which hold chlorophyll and carry out photosynthesis; '
    + 'and one large permanent vacuole of sap, '
    + 'which keeps the cell firm by pressing outwards. '
    + 'A bacterial cell is different in kind. '
    + 'It has no nucleus and no membrane bound organelles. '
    + 'Its genetic material lies free in the cytoplasm, '
    + 'it has ribosomes, '
    + 'and its wall is made not of cellulose but of a different material, '
    + 'peptidoglycan. '
    + 'Cells with a true nucleus are called eukaryotic '
    + 'and cells without one are prokaryotic.',

  mechanism:
    'The question this topic is really asking is why a cell '
    + 'is divided into compartments at all. '
    + 'The answer is that reactions need different conditions, '
    + 'and a membrane lets a cell hold two conditions at once. '
    + 'A lysosome holds enzymes that would digest the cell itself, '
    + 'so it keeps them behind a membrane and at a lower pH. '
    + 'A mitochondrion maintains a difference in concentration '
    + 'across its inner membrane, '
    + 'and that difference is what drives the energy release. '
    + 'Neither is possible in an open bag of cytoplasm, '
    + 'which is exactly why a bacterium, '
    + 'which has no such compartments, '
    + 'is limited in what it can do and in how large it can grow. '
    + 'That comparison is the one examiners use, '
    + 'and it has a practical consequence worth knowing. '
    + 'Penicillin works by interfering with the building '
    + 'of the bacterial cell wall. '
    + 'Human cells have no wall at all, '
    + 'so the drug damages the bacterium and leaves the patient alone. '
    + 'The selectivity comes directly from a structural difference, '
    + 'and that is the kind of sentence a Biology answer is made of. '
    + 'Now the places marks are lost. '
    + 'The first is the list. '
    + 'A question says relate the structure of the mitochondrion '
    + 'to its function, '
    + 'and the answer says mitochondria release energy. '
    + 'That earns one mark where three were available. '
    + 'The marks are for the structure, the consequence, and the function: '
    + 'the inner membrane is folded into cristae, '
    + 'which gives a large surface area for the reactions of respiration, '
    + 'so more energy can be released per mitochondrion. '
    + 'Write the chain, not the conclusion. '
    + 'The second is the specialised cell. '
    + 'A root hair cell is long and thin to give a large surface '
    + 'for absorbing water, '
    + 'and has many mitochondria '
    + 'because active transport of mineral ions needs energy. '
    + 'A red blood cell has no nucleus, '
    + 'which leaves more room for haemoglobin. '
    + 'A sperm cell has a tail and many mitochondria, '
    + 'because swimming costs energy. '
    + 'Each of these is one structure paired with one demand, '
    + 'and a question giving an unfamiliar cell '
    + 'is asking you to make that pairing from first principles '
    + 'rather than recall it. '
    + 'The third is the bacterial cell. '
    + 'Saying it has a small nucleus is wrong: it has none. '
    + 'Saying it has no cell wall is wrong: it has one, '
    + 'but not of cellulose. '
    + 'Both errors are common and both are easy to avoid '
    + 'by learning the bacterium as a list of absences and one presence: '
    + 'no nucleus, no mitochondria, no chloroplasts, '
    + 'but a wall, and that wall is not cellulose. '
    + 'The fourth is the magnification sum, '
    + 'which is arithmetic and still goes wrong. '
    + 'Magnification is image size divided by actual size, '
    + 'with both in the same unit, '
    + 'and it has no unit of its own because it is a ratio. '
    + 'A cell drawn 40 mm across that is really 0.08 mm across '
    + 'is magnified 500 times. '
    + 'If the two are given in different units, '
    + 'convert before dividing and show that line, '
    + 'because that is where the mark sits. '
    + 'What has to be written down, always, '
    + 'is the structure and then the function joined by a word of '
    + 'consequence. '
    + 'Where a school has no microscope, '
    + 'the examinable work is the labelled diagram, '
    + 'the structure to function pairing, and the magnification '
    + 'calculation, '
    + 'all of which can be done from a printed photograph with a scale bar.',

  recap:
    'You know the cell and a few of its parts. '
    + 'This asks what each part is shaped like and why that shape suits its '
    + 'job, '
    + 'and sets the bacterial cell against the other two.',

  method: [
    'Name the organelle.',
    'Describe one feature of its structure.',
    'Say what that feature makes possible.',
    'State the function, joined to the structure by so or therefore.',
    'For plant against animal, check wall, chloroplast and vacuole.',
    'For a bacterial cell, state what is absent as well as what is '
      + 'present.',
    'For a specialised cell, start from the job and work back to the '
      + 'structure.',
    'For magnification, convert to one unit, divide, and give no unit.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Relate the structure of the mitochondrion to its function.',
      steps: [
        'Its inner membrane is folded into cristae.',
        'Folding increases the surface area.',
        'The reactions of respiration happen on that surface.',
      ],
      answer: 'The inner membrane is folded into cristae, '
        + 'which gives a large surface area '
        + 'for the enzymes and reactions of aerobic respiration, '
        + 'so more energy can be released from glucose. '
        + 'Saying only that it releases energy earns one mark of three.',
    },
    {
      level: 4,
      ask: 'Give three ways a bacterial cell differs from a plant cell.',
      steps: [
        'Check for a nucleus.',
        'Check for membrane bound organelles.',
        'Check the material of the wall.',
      ],
      answer: 'A bacterial cell has no nucleus; '
        + 'its genetic material lies free in the cytoplasm. '
        + 'It has no mitochondria or chloroplasts, '
        + 'or any other membrane bound organelle. '
        + 'It has a cell wall, but of peptidoglycan rather than cellulose. '
        + 'Saying it has no cell wall at all would be wrong.',
    },
    {
      level: 4,
      ask: 'A root hair cell is long and thin and contains many '
        + 'mitochondria. '
        + 'Explain both features.',
      steps: [
        'Its job is to absorb water and mineral ions.',
        'Absorption depends on surface area.',
        'Mineral ions are taken in against a gradient.',
        'Moving a substance against a gradient needs energy.',
      ],
      answer: 'Being long and thin gives a large surface area, '
        + 'so water and ions can be absorbed faster. '
        + 'The many mitochondria release the energy needed '
        + 'for the active transport of mineral ions '
        + 'into the cell against a concentration gradient.',
    },
    {
      level: 5,
      ask: 'Penicillin kills many bacteria without harming human cells. '
        + 'Explain how a structural difference makes this possible.',
      steps: [
        'Penicillin interferes with the making of the bacterial cell wall.',
        'Without an intact wall the bacterium cannot resist bursting.',
        'Human cells have no cell wall.',
        'So the drug has no target in a human cell.',
      ],
      answer: 'Penicillin prevents the bacterial cell wall '
        + 'from being built properly, '
        + 'and without an intact wall the bacterium bursts '
        + 'as water enters it. '
        + 'Human cells have no cell wall at all, '
        + 'so the drug has nothing to act on in them. '
        + 'The selectivity comes from a difference in structure, '
        + 'which is why a drug can be chosen to attack one cell type '
        + 'and not another.',
    },
  ],

  traps: [
    {
      mistake: 'Answering a structure and function question with the '
        + 'function alone.',
      why: 'The marks are for the chain. '
        + 'Name the structural feature, what it makes possible, '
        + 'then the function.',
    },
    {
      mistake: 'Saying a bacterial cell has a small nucleus.',
      why: 'It has none. '
        + 'Its genetic material is free in the cytoplasm, with no membrane '
        + 'round it.',
    },
    {
      mistake: 'Saying a bacterial cell has no cell wall.',
      why: 'It has one, of peptidoglycan rather than cellulose, '
        + 'and that difference is why penicillin is selective.',
    },
    {
      mistake: 'Giving a magnification with a unit.',
      why: 'It is a ratio of two lengths, so the units cancel. '
        + 'Write 500 times.',
    },
  ],

  extension:
    'Mitochondria and chloroplasts have their own small loops of DNA '
    + 'and their own ribosomes, '
    + 'and they divide by splitting in two, '
    + 'which is how a bacterium divides. '
    + 'The accepted explanation is that both began '
    + 'as free living bacteria taken inside a larger cell '
    + 'and kept rather than digested. '
    + 'This is the endosymbiotic theory. '
    + 'It also explains why mitochondrial DNA is inherited '
    + 'only from the mother: '
    + 'the egg contributes the cytoplasm, and the mitochondria are in it.',

  questions: [
    {
      id: 'cellb-1',
      ask: 'Proteins are assembled at the:',
      kind: 'choice',
      options: ['ribosomes', 'lysosomes', 'vacuole'],
      answer: 'ribosomes',
      teach: 'Ribosomes build protein. '
        + 'Lysosomes break material down.',
      level: 2,
    },
    {
      id: 'cellb-2',
      ask: 'The folds of the inner mitochondrial membrane are useful '
        + 'because they:',
      kind: 'choice',
      options: [
        'increase the surface area for respiration',
        'make the mitochondrion stronger',
        'store glucose',
      ],
      answer: 'increase the surface area for respiration',
      teach: 'The reactions happen on the membrane, '
        + 'so more membrane means more reaction in the same space.',
      level: 4,
    },
    {
      id: 'cellb-3',
      ask: 'A cell with no nucleus and no mitochondria is:',
      kind: 'choice',
      options: ['prokaryotic', 'eukaryotic', 'a plant cell'],
      answer: 'prokaryotic',
      teach: 'Prokaryotic means before a nucleus. '
        + 'Bacteria are the example.',
      level: 4,
    },
    {
      id: 'cellb-4',
      ask: 'A cell 0.04 mm wide is drawn 20 mm wide. '
        + 'The magnification is:',
      kind: 'numeric',
      options: [],
      answer: '500',
      teach: '20 divided by 0.04. '
        + 'Both were already in millimetres, so no conversion was needed.',
      level: 4,
    },
    {
      id: 'cellb-5',
      ask: 'Penicillin does not harm human cells because human cells have '
        + 'no:',
      kind: 'choice',
      options: ['cell wall', 'cell membrane', 'ribosomes'],
      answer: 'cell wall',
      teach: 'Penicillin blocks the building of the bacterial wall. '
        + 'A cell with no wall has no target.',
      level: 5,
    },
  ],
})

/* ── movement across membranes ───────────────────────────────────────────── */

teach({
  topicId: 'transport-cell-bio',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Diffusion is the net movement of particles '
      + 'from a high to a low concentration, and it needs no energy. '
      + 'Osmosis is the movement of water '
      + 'through a partially permeable membrane '
      + 'from a dilute to a concentrated solution. '
      + 'Active transport moves a substance against its gradient '
      + 'and needs energy from respiration.',
    method: [
      'Ask what is moving: any particle, or water only.',
      'Ask which way the gradient runs.',
      'Down the gradient and no energy needed means diffusion or osmosis.',
      'Against the gradient means active transport, so energy is required.',
      'For an experiment, weigh or measure before and after, '
        + 'and keep every other condition the same.',
    ],
  },

  idea:
    'Particles in a liquid or a gas move about at random. '
    + 'Diffusion is the net movement that results '
    + 'when there are more particles on one side than the other: '
    + 'the substance spreads from where it is concentrated '
    + 'to where it is dilute, until it is evenly spread. '
    + 'It is passive, meaning it needs no energy from the cell. '
    + 'Osmosis is a special case about water. '
    + 'A partially permeable membrane lets water through '
    + 'but not the dissolved solute. '
    + 'Water therefore moves through it '
    + 'from the more dilute solution to the more concentrated one, '
    + 'which is from high water potential to low water potential. '
    + 'Osmosis is also passive. '
    + 'Active transport moves a substance across a membrane '
    + 'against its concentration gradient, '
    + 'using carrier proteins and energy released by respiration. '
    + 'A plant cell that has taken in water becomes turgid, '
    + 'pressing against its wall. '
    + 'One that has lost water becomes flaccid, and the plant wilts. '
    + 'If it loses much more, the cytoplasm pulls away from the wall, '
    + 'which is plasmolysis. '
    + 'An animal cell has no wall, '
    + 'so in pure water it swells and may burst, which is haemolysis '
    + 'in a red blood cell, '
    + 'and in a concentrated solution it shrinks and becomes crenated. '
    + 'The rate of diffusion rises with a steeper gradient, '
    + 'a larger surface area, a shorter distance '
    + 'and a higher temperature.',

  mechanism:
    'Osmosis confuses people because the water appears to move '
    + 'towards the sugar, as if attracted. '
    + 'Nothing is attracting it. '
    + 'Think about the water alone and ignore the solute. '
    + 'On the dilute side there is more water per unit volume, '
    + 'so more water molecules strike the membrane each second '
    + 'and more get through. '
    + 'On the concentrated side there is less water, '
    + 'so fewer cross the other way. '
    + 'The net flow is therefore towards the concentrated solution, '
    + 'and it is ordinary diffusion of water '
    + 'down the water gradient. '
    + 'Once that is seen, osmosis needs no separate explanation, '
    + 'and the phrase from high water potential to low water potential '
    + 'becomes a statement rather than a formula. '
    + 'Now the distinction that carries the marks. '
    + 'How do you know a process is active transport and not diffusion? '
    + 'Two tests, and a question will give you one of them. '
    + 'First, direction: if the substance moves from low concentration '
    + 'to high, no passive process can do it. '
    + 'Second, energy: if the process stops '
    + 'when the cell is deprived of oxygen or poisoned with cyanide, '
    + 'it depended on respiration, '
    + 'so it was active. '
    + 'A root that stops absorbing mineral ions in waterlogged soil '
    + 'is the standard example, '
    + 'and the explanation is that the roots cannot respire aerobically '
    + 'in the absence of air spaces, '
    + 'so there is no energy for active transport. '
    + 'Here is where marks are lost. '
    + 'The first is saying that water moves from a low to a high '
    + 'concentration, '
    + 'without saying concentration of what. '
    + 'Water moves from a high concentration of water '
    + 'to a low concentration of water, '
    + 'which is the same as from dilute solution to concentrated solution. '
    + 'The sentence must name which substance the concentration refers to, '
    + 'or it says the opposite of what was meant. '
    + 'The second is using the word osmosis for the movement of anything '
    + 'other than water. '
    + 'Sugar does not move by osmosis. '
    + 'The third is the design of the experiment. '
    + 'A question asking you to show that osmosis has occurred '
    + 'wants a measurement before and after, '
    + 'not an observation that the piece of cassava looks different. '
    + 'Weigh the cylinder of cassava, blot it dry, '
    + 'leave it in the solution for a stated time, '
    + 'blot it again in the same way, and reweigh. '
    + 'The percentage change in mass is the result, '
    + 'and the percentage matters because the cylinders '
    + 'will not have started at the same mass. '
    + 'A control in distilled water is needed, '
    + 'and the blotting must be identical each time, '
    + 'because surface water would otherwise be measured as uptake. '
    + 'Those details are the marks. '
    + 'This experiment needs no special apparatus: '
    + 'fresh cassava or potato, a knife, salt or sugar, and a balance. '
    + 'Where there is no balance, '
    + 'the change in length or in firmness can be recorded instead, '
    + 'and the lesson of the experiment survives, '
    + 'though a measured mass is better and should be said to be better. '
    + 'What has to be written down is the name of the process, '
    + 'the direction of movement with both substances named, '
    + 'and whether energy was required.',

  recap:
    'You know that a smell spreads through a room '
    + 'and that a wilted plant recovers when watered. '
    + 'This names the processes behind both, '
    + 'and separates the two that are free from the one that costs energy.',

  method: [
    'Identify what is moving.',
    'If it is water through a partially permeable membrane, it is osmosis.',
    'If it is any particle moving down its gradient, it is diffusion.',
    'If it moves against its gradient, it is active transport.',
    'State the direction with both concentrations named.',
    'Say whether energy from respiration is needed.',
    'For an experiment, measure before and after and keep conditions '
      + 'constant.',
    'Use percentage change in mass, and include a control in distilled '
      + 'water.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Explain why a cylinder of fresh cassava left in strong salt '
        + 'solution '
        + 'becomes limp.',
      steps: [
        'The salt solution is more concentrated than the cell sap.',
        'So the water potential outside is lower.',
        'Water leaves the cells by osmosis.',
        'The cells lose turgor.',
      ],
      answer: 'The salt solution is more concentrated than the cell sap, '
        + 'so water leaves the cells by osmosis '
        + 'through their partially permeable membranes. '
        + 'The cells lose turgor and become flaccid, '
        + 'so the cylinder becomes limp.',
    },
    {
      level: 4,
      ask: 'A red blood cell placed in distilled water bursts, '
        + 'while a plant cell in the same water does not. '
        + 'Explain.',
      steps: [
        'Both take in water by osmosis.',
        'A plant cell has a strong cellulose wall.',
        'The wall resists the outward pressure.',
        'A red blood cell has only a membrane.',
      ],
      answer: 'Both gain water by osmosis, '
        + 'because distilled water has a higher water potential than the '
        + 'cell contents. '
        + 'The plant cell is held by its cellulose wall, '
        + 'which resists the pressure, so it becomes turgid and stops. '
        + 'The red blood cell has no wall, '
        + 'so it swells until the membrane bursts.',
    },
    {
      level: 4,
      ask: 'Describe an experiment to show that osmosis takes place, '
        + 'using cassava and salt solution.',
      steps: [
        'Cut several cylinders of the same size from one cassava root.',
        'Blot each and weigh it.',
        'Place them in solutions of different concentration, '
          + 'with one in distilled water as a control.',
        'Leave for a fixed time at the same temperature.',
        'Blot each in the same way and reweigh.',
        'Find the percentage change in mass.',
      ],
      answer: 'Cut equal cylinders from one root, blot and weigh each, '
        + 'then leave them for a fixed time '
        + 'in salt solutions of different concentration, '
        + 'with one in distilled water as the control. '
        + 'Blot them in the same way and reweigh. '
        + 'Cylinders in dilute solutions gain mass '
        + 'and those in concentrated solutions lose it. '
        + 'The percentage change is used rather than the change in grams, '
        + 'since the cylinders do not all start at the same mass, '
        + 'and the blotting must be identical '
        + 'or surface water would be counted as uptake.',
    },
    {
      level: 5,
      ask: 'A root absorbs nitrate ions even though the concentration '
        + 'inside the root is already higher than in the soil. '
        + 'Name the process, and explain why the root stops absorbing '
        + 'them in waterlogged soil.',
      steps: [
        'Movement from low to high concentration cannot be passive.',
        'So it must be active transport, using carrier proteins.',
        'Active transport needs energy from aerobic respiration.',
        'Waterlogged soil has no air spaces, so no oxygen reaches the '
          + 'roots.',
      ],
      answer: 'Active transport, '
        + 'because the ions move against their concentration gradient, '
        + 'which no passive process can do. '
        + 'It requires energy released by aerobic respiration in the root '
        + 'cells. '
        + 'In waterlogged soil water fills the air spaces, '
        + 'so oxygen cannot reach the roots, '
        + 'aerobic respiration slows, '
        + 'and without energy the active transport stops. '
        + 'This is why a flooded farm yellows '
        + 'even though the soil holds plenty of nitrate.',
    },
  ],

  traps: [
    {
      mistake: 'Saying water moves from low concentration to high '
        + 'concentration.',
      why: 'Name the substance. '
        + 'Water moves from a high concentration of water to a low one, '
        + 'which is dilute to concentrated solution.',
    },
    {
      mistake: 'Calling the movement of sugar into a cell osmosis.',
      why: 'Osmosis is about water only. '
        + 'A solute moves by diffusion or by active transport.',
    },
    {
      mistake: 'Reporting the change in grams in an osmosis experiment.',
      why: 'The cylinders do not start at the same mass. '
        + 'Use the percentage change.',
    },
    {
      mistake: 'Saying active transport is faster than diffusion.',
      why: 'The difference is direction and energy, not speed. '
        + 'Active transport can move a substance against its gradient; '
        + 'diffusion cannot.',
    },
  ],

  extension:
    'A saline drip in a hospital is this topic made practical. '
    + 'The fluid is made to the same concentration as blood plasma, '
    + 'which is called isotonic, '
    + 'so there is no net osmosis into or out of the red blood cells '
    + 'and they neither burst nor shrink. '
    + 'Pure water would be fatal: '
    + 'it would enter the cells by osmosis until they burst. '
    + 'The same principle preserves food. '
    + 'Salted fish and sugared fruit keep '
    + 'because any bacterium landing on them '
    + 'loses water by osmosis to the concentrated surface and cannot grow. '
    + 'The method is ancient and the explanation is osmosis.',

  questions: [
    {
      id: 'trans-1',
      ask: 'Osmosis is the movement of:',
      kind: 'choice',
      options: [
        'water through a partially permeable membrane',
        'any particle down its gradient',
        'ions against their gradient',
      ],
      answer: 'water through a partially permeable membrane',
      teach: 'Osmosis is about water only. '
        + 'The second is diffusion and the third is active transport.',
      level: 3,
    },
    {
      id: 'trans-2',
      ask: 'Which process requires energy from respiration?',
      kind: 'choice',
      options: ['active transport', 'diffusion', 'osmosis'],
      answer: 'active transport',
      teach: 'Only active transport goes against the gradient, '
        + 'and only that needs energy.',
      level: 3,
    },
    {
      id: 'trans-3',
      ask: 'A plant cell in distilled water does not burst because it has '
        + 'a:',
      kind: 'choice',
      options: ['cellulose cell wall', 'large vacuole', 'thicker membrane'],
      answer: 'cellulose cell wall',
      teach: 'The wall resists the outward pressure. '
        + 'A red blood cell has no wall, so it bursts.',
      level: 4,
    },
    {
      id: 'trans-4',
      ask: 'In an osmosis experiment with cassava cylinders, '
        + 'why is percentage change in mass used?',
      kind: 'choice',
      options: [
        'The cylinders do not all start at the same mass',
        'Percentages are easier to calculate',
        'Mass cannot be measured accurately',
      ],
      answer: 'The cylinders do not all start at the same mass',
      teach: 'A gain of 1 g means more to a small cylinder than a large '
        + 'one. '
        + 'The percentage makes them comparable.',
      level: 5,
    },
    {
      id: 'trans-5',
      ask: 'A waterlogged root stops absorbing nitrate because:',
      kind: 'choice',
      options: [
        'there is no oxygen for respiration, so no energy for active '
          + 'transport',
        'the nitrate has been washed away',
        'osmosis stops in water',
      ],
      answer: 'there is no oxygen for respiration, so no energy for active '
        + 'transport',
      teach: 'Water fills the air spaces, so aerobic respiration slows, '
        + 'and active transport has no energy supply.',
      level: 5,
    },
  ],
})

/* ── biological molecules and enzymes ────────────────────────────────────── */

teach({
  topicId: 'biomolecules-bio',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Carbohydrates are made of sugar units, '
      + 'proteins of amino acids, and fats of fatty acids and glycerol. '
      + 'Each has its own test: '
      + 'iodine turns blue black with starch, '
      + 'Benedict goes brick red with a reducing sugar on heating, '
      + 'Biuret goes purple with protein. '
      + 'An enzyme is a protein whose active site fits one substrate, '
      + 'which is why it is specific '
      + 'and why heat and extreme pH destroy it.',
    method: [
      'Name the reagent, the treatment and the colour change.',
      'For an enzyme question, start from the shape of the active site.',
      'For temperature, rise to the optimum, then fall to zero as it '
        + 'denatures.',
      'Use the word denatured, and say the shape of the active site '
        + 'has changed.',
    ],
  },

  idea:
    'Carbohydrates are made of sugar units. '
    + 'A single unit such as glucose is a monosaccharide, '
    + 'two joined is a disaccharide such as maltose or sucrose, '
    + 'and many joined is a polysaccharide such as starch, glycogen or '
    + 'cellulose. '
    + 'Proteins are chains of amino acids '
    + 'folded into a particular three dimensional shape. '
    + 'Fats and oils are made of fatty acids joined to glycerol. '
    + 'Each group has a food test. '
    + 'Iodine solution turns from brown to blue black with starch. '
    + 'Benedict solution, heated with a reducing sugar, '
    + 'turns from blue through green and orange to brick red. '
    + 'Biuret reagent turns from blue to purple with protein. '
    + 'A fat leaves a translucent mark on paper, '
    + 'and gives a white emulsion when shaken with ethanol and then water. '
    + 'An enzyme is a biological catalyst, and it is a protein. '
    + 'It speeds a reaction up without being used up. '
    + 'Each enzyme has an active site, '
    + 'a region whose shape fits one particular substrate, '
    + 'which is why an enzyme is specific to one reaction. '
    + 'The rate rises with temperature up to an optimum, '
    + 'about 37 degrees Celsius for a human enzyme, '
    + 'and then falls sharply as the enzyme is denatured. '
    + 'Each enzyme also has an optimum pH: '
    + 'about 2 for pepsin and about 8 for trypsin.',

  mechanism:
    'The whole of enzyme behaviour follows from one fact: '
    + 'the enzyme works because of its shape. '
    + 'The active site fits the substrate the way a key fits a lock, '
    + 'and that fit is what holds the substrate in position '
    + 'so the reaction can happen at body temperature '
    + 'instead of needing a flame. '
    + 'Every property of an enzyme is this fact seen from another side. '
    + 'Why is an enzyme specific? '
    + 'Because only one substrate shape fits the site. '
    + 'Why does amylase not digest protein? '
    + 'Same reason. '
    + 'Why does heat destroy an enzyme? '
    + 'Because the shape is held by weak bonds within the folded protein, '
    + 'and heat breaks them, '
    + 'so the chain unfolds and the active site no longer fits. '
    + 'That is what denatured means, '
    + 'and the word carries a mark. '
    + 'Why does extreme pH destroy it? '
    + 'The same unfolding, caused by charges rather than by heat. '
    + 'Hold the lock and key and nothing in this topic has to be '
    + 'remembered separately. '
    + 'Now the error that costs the most marks in the whole of SHS '
    + 'Biology. '
    + 'Saying an enzyme is killed by heat. '
    + 'An enzyme is a molecule and was never alive, '
    + 'so it cannot be killed. '
    + 'It is denatured. '
    + 'Examiners mark the word, '
    + 'and it is the easiest mark in the subject to secure and to lose. '
    + 'The second error is the shape of the temperature graph. '
    + 'The rate rises to the optimum and then falls to zero. '
    + 'It does not level off, '
    + 'and it does not fall halfway and stay there. '
    + 'The rise and the fall have different causes, '
    + 'and both must be given: '
    + 'the rise is because the molecules move faster '
    + 'and collide with the active site more often, '
    + 'and the fall is because the enzyme is denatured '
    + 'and the active site no longer fits. '
    + 'Saying only that high temperature is bad for enzymes '
    + 'answers neither half. '
    + 'Denaturing is also permanent, '
    + 'so cooling a denatured enzyme does not restore activity, '
    + 'and a question asking what happens on cooling '
    + 'is testing exactly that. '
    + 'The third error is in the tests. '
    + 'Benedict solution must be heated, '
    + 'and an answer that omits the heating omits the mark. '
    + 'Benedict detects a reducing sugar, '
    + 'so sucrose gives a negative result even though it is a sugar, '
    + 'which is a favourite question. '
    + 'And the colour named must be the final colour: '
    + 'brick red for a high concentration, '
    + 'while green or orange shows a lower one, '
    + 'so the test is also roughly quantitative. '
    + 'For the emulsion test, the order matters: '
    + 'ethanol first to dissolve the fat, then water to precipitate it. '
    + 'Water first gives nothing. '
    + 'Where a school lacks Benedict solution or Biuret reagent, '
    + 'the examinable material is the written procedure and the colour '
    + 'change, '
    + 'and those can be learned and answered in full from the page. '
    + 'The iodine test and the grease spot test need almost nothing '
    + 'and should be done. '
    + 'The enzyme work can be done with fresh pawpaw or pineapple juice, '
    + 'which contain protein digesting enzymes, '
    + 'and milk or gelatin as the substrate, '
    + 'using a kettle and a thermometer for the temperatures. '
    + 'What has to be written down in an enzyme answer '
    + 'is the active site, the fit, '
    + 'and for any loss of activity the word denatured '
    + 'with a statement that the shape of the active site has changed.',

  recap:
    'You know the food groups and that digestion needs enzymes. '
    + 'This says what each food group is built from, '
    + 'how to test for it, '
    + 'and why an enzyme stops working when it is heated.',

  method: [
    'For a food test, name the reagent, '
      + 'state any heating, '
      + 'and give the colour before and after.',
    'For starch, add iodine and look for blue black.',
    'For reducing sugar, add Benedict and heat, and look for brick red.',
    'For protein, add Biuret and look for purple.',
    'For fat, rub on paper for a translucent mark, '
      + 'or add ethanol then water for a white emulsion.',
    'For an enzyme, begin from the active site and its fit to the '
      + 'substrate.',
    'For a temperature effect, give the rise and the fall separate '
      + 'reasons.',
    'Use the word denatured, and say the active site has changed shape.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Give the test for starch and the test for protein, '
        + 'with the colour change in each.',
      steps: [
        'Starch is detected with iodine solution.',
        'Protein is detected with Biuret reagent.',
      ],
      answer: 'For starch, add iodine solution: '
        + 'it changes from brown to blue black. '
        + 'For protein, add Biuret reagent: '
        + 'it changes from blue to purple.',
    },
    {
      level: 3,
      ask: 'A learner adds Benedict solution to a sugar solution '
        + 'and sees no change. '
        + 'Give two possible reasons.',
      steps: [
        'Benedict only reacts on heating.',
        'Benedict detects reducing sugars only.',
      ],
      answer: 'Either the mixture was not heated, '
        + 'since Benedict solution gives no colour change in the cold, '
        + 'or the sugar is not a reducing sugar. '
        + 'Sucrose, for example, gives a negative Benedict test '
        + 'although it is a sugar.',
    },
    {
      level: 4,
      ask: 'Explain the shape of a graph of enzyme activity '
        + 'against temperature, from 0 to 80 degrees Celsius.',
      steps: [
        'From 0 upwards, the molecules gain kinetic energy.',
        'More collisions with the active site, so the rate rises.',
        'At the optimum, about 37 degrees for a human enzyme, '
          + 'the rate is highest.',
        'Above it, the weak bonds holding the folded shape break.',
        'The active site changes shape, so the substrate no longer fits.',
      ],
      answer: 'The rate rises to an optimum of about 37 degrees Celsius, '
        + 'because the enzyme and substrate molecules move faster '
        + 'and collide with the active site more often. '
        + 'Above the optimum the rate falls sharply to zero, '
        + 'because the enzyme is denatured: '
        + 'the bonds holding its folded shape break '
        + 'and the active site no longer fits the substrate. '
        + 'The change is permanent, '
        + 'so cooling the mixture does not restore the activity.',
    },
    {
      level: 5,
      ask: 'Explain why pepsin works in the stomach and trypsin does not, '
        + 'although both digest protein.',
      steps: [
        'The stomach has a pH of about 2.',
        'An enzyme has an optimum pH.',
        'Pepsin has an optimum of about 2.',
        'Trypsin has an optimum of about 8.',
        'Away from its optimum the enzyme shape is altered.',
      ],
      answer: 'Both digest protein but their active sites '
        + 'hold their working shape at different pH values. '
        + 'Pepsin has an optimum pH of about 2, '
        + 'which is the pH of the stomach, so it works there. '
        + 'Trypsin has an optimum of about 8, '
        + 'so in the stomach the acid alters the shape of its active site '
        + 'and it is denatured. '
        + 'Trypsin works in the small intestine, '
        + 'where pancreatic juice has made the contents slightly alkaline.',
    },
  ],

  traps: [
    {
      mistake: 'Saying an enzyme is killed by heat.',
      why: 'An enzyme is a molecule and was never alive. '
        + 'It is denatured, and the word is the mark.',
    },
    {
      mistake: 'Omitting the heating from the Benedict test.',
      why: 'Benedict solution gives no change in the cold. '
        + 'The heating is part of the procedure and part of the answer.',
    },
    {
      mistake: 'Saying activity returns when a denatured enzyme is cooled.',
      why: 'Denaturing is permanent. '
        + 'The folded shape does not come back.',
    },
    {
      mistake: 'Explaining the temperature graph with one reason.',
      why: 'The rise and the fall have different causes: '
        + 'more collisions on the way up, '
        + 'denaturing on the way down.',
    },
  ],

  extension:
    'Industry uses enzymes for the reason a cell does. '
    + 'They do at low temperature what would otherwise need heat. '
    + 'A biological washing powder holds protease and lipase. '
    + 'So it lifts blood and oil stains in cool water, '
    + 'and saves the power a hot wash would use. '
    + 'In brewing and baking, enzymes turn starch into sugar '
    + 'for the yeast to ferment. '
    + 'In Ghana, pawpaw latex and pineapple juice tenderise meat. '
    + 'Both hold enzymes that digest protein, '
    + 'so they start breaking the muscle down before it is cooked.',

  questions: [
    {
      id: 'bio-1',
      ask: 'Biuret reagent added to protein turns:',
      kind: 'choice',
      options: ['purple', 'brick red', 'blue black'],
      answer: 'purple',
      teach: 'Brick red is Benedict on reducing sugar; '
        + 'blue black is iodine on starch.',
      level: 2,
    },
    {
      id: 'bio-2',
      ask: 'The Benedict test requires:',
      kind: 'choice',
      options: [
        'heating the mixture',
        'adding acid first',
        'leaving it overnight',
      ],
      answer: 'heating the mixture',
      teach: 'No colour change happens in the cold, '
        + 'so the heating must appear in the answer.',
      level: 3,
    },
    {
      id: 'bio-3',
      ask: 'An enzyme is specific because:',
      kind: 'choice',
      options: [
        'its active site fits only one substrate shape',
        'it is made of protein',
        'it works at 37 degrees',
      ],
      answer: 'its active site fits only one substrate shape',
      teach: 'The fit between active site and substrate '
        + 'is what makes the enzyme selective.',
      level: 4,
    },
    {
      id: 'bio-4',
      ask: 'The correct word for what high temperature does to an enzyme '
        + 'is:',
      kind: 'choice',
      options: ['denatured', 'killed', 'dissolved'],
      answer: 'denatured',
      teach: 'An enzyme is a molecule and cannot be killed. '
        + 'Heat unfolds it, so the active site no longer fits.',
      level: 4,
    },
    {
      id: 'bio-5',
      ask: 'What is the approximate optimum pH of pepsin?',
      kind: 'numeric',
      options: [],
      answer: '2',
      teach: 'About pH 2, the acid of the stomach. '
        + 'Trypsin has an optimum of about 8.',
      level: 5,
    },
  ],
})

/* ── classification of living things ─────────────────────────────────────── */

teach({
  topicId: 'classification-bio',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Organisms are grouped by shared structural features. '
      + 'The order runs kingdom, phylum, class, order, family, genus, '
      + 'species. '
      + 'A dichotomous key offers pairs of statements, '
      + 'and following the one that fits leads to the group. '
      + 'A justification names the feature used at each step, '
      + 'not just the final answer.',
    method: [
      'Read both statements of the pair before choosing.',
      'Pick the one that matches the specimen.',
      'Write down the feature you used.',
      'Go to the step the key sends you to.',
      'Name the group, and give the route as your justification.',
    ],
  },

  idea:
    'Classification sorts living things into groups '
    + 'by the features they share. '
    + 'The groups nest inside one another. '
    + 'From largest to smallest they are kingdom, phylum, class, '
    + 'order, family, genus and species. '
    + 'A species is a group whose members can breed '
    + 'and have young that can breed in turn. '
    + 'Each species has a two word name. '
    + 'The genus takes a capital and the species does not, '
    + 'and the name is underlined when written by hand. '
    + 'Four phyla of animals matter most here. '
    + 'Annelids are segmented worms with no legs. '
    + 'Molluscs have a soft body, often with a shell. '
    + 'Arthropods have a hard outer skeleton and jointed legs. '
    + 'Chordates have a backbone. '
    + 'The arthropods are then split by their legs. '
    + 'An insect has three pairs and a body in three parts. '
    + 'An arachnid has four pairs and a body in two parts. '
    + 'A crustacean has many pairs and two pairs of antennae. '
    + 'A myriapod has many segments, each bearing legs. '
    + 'The chordates split into fish, amphibians, reptiles, '
    + 'birds and mammals. '
    + 'Each class is known by its skin, how it breathes, '
    + 'whether it is warm or cold blooded, '
    + 'and how its young are born and fed. '
    + 'A key names an unknown specimen through paired statements. '
    + 'Each pair sends you to the next step, or names the group.',

  mechanism:
    'The purpose of a key is that it replaces recognition with a '
    + 'procedure. '
    + 'You do not have to have seen the animal before. '
    + 'You answer a question about the specimen in front of you, '
    + 'the key sends you somewhere, and you answer the next. '
    + 'So the skill being tested is not memory, '
    + 'and a learner who tries to recall the answer '
    + 'instead of working the key is doing the wrong task. '
    + 'This is why a WASSCE question gives specimens labelled A to E '
    + 'rather than named animals. '
    + 'Now the discipline that earns the marks. '
    + 'At every step, write down the feature you used, '
    + 'not merely the number you went to. '
    + 'Step 1, jointed legs present, so go to 2. '
    + 'Step 2, four pairs of legs, so go to 3. '
    + 'Step 3, body in two parts, so Arachnida. '
    + 'That route is the justification, '
    + 'and a question that says justify your answer '
    + 'is asking for exactly those three lines. '
    + 'Writing only Arachnida scores one mark out of four. '
    + 'The marks are in the route, '
    + 'and this is the single most important habit in the topic. '
    + 'The second discipline is reading both halves of a pair. '
    + 'A key pair is written so that exactly one of the two fits. '
    + 'Choosing the first because it sounds plausible, '
    + 'without checking that the second does not fit, '
    + 'is how a learner goes down the wrong branch, '
    + 'and once wrong the key cannot recover: '
    + 'every later step is answered about the wrong group. '
    + 'So read both, then choose. '
    + 'The third is the error of classifying by habitat or by habit. '
    + 'A whale swims, a bat flies, a tadpole has gills. '
    + 'None of those decides a class. '
    + 'The whale has lungs, hair and milk, so it is a mammal. '
    + 'The bat likewise. '
    + 'The tadpole is an amphibian at a stage of its life cycle, '
    + 'which is why amphibian is defined by the life cycle '
    + 'and not by where the animal happens to be. '
    + 'Structure is inherited and habit is not, '
    + 'which is the reason classification uses structure, '
    + 'and that reason is worth stating in an answer. '
    + 'The fourth is the binomial convention. '
    + 'Homo sapiens is correct. '
    + 'Homo Sapiens and homo sapiens are both marked wrong, '
    + 'and so is a name left without an underline in a handwritten script. '
    + 'The rule exists so that the name is recognisable '
    + 'in a journal in any language, '
    + 'which is the point of using Latin at all. '
    + 'What has to be written down is therefore always the same: '
    + 'the feature, then the group it places the specimen in. '
    + 'The specimens themselves need no purchase. '
    + 'A millipede, a grasshopper, a spider, a snail, an earthworm '
    + 'and a lizard can be collected from any school compound in Ghana, '
    + 'and between them they cover four phyla and most of the arthropod '
    + 'classes. '
    + 'A key written for those six, '
    + 'and tested by a classmate on a specimen you did not choose, '
    + 'teaches the topic better than any diagram.',

  recap:
    'You can sort animals into familiar groups '
    + 'and you know what a species is. '
    + 'This adds the full hierarchy, the phyla below the animal kingdom, '
    + 'and the discipline of working a key and recording the route.',

  method: [
    'Examine the specimen and list its visible features.',
    'Start at step 1 of the key.',
    'Read both statements of the pair.',
    'Choose the one that fits, and write down the feature you used.',
    'Follow the key to the step it names.',
    'Repeat until a group is named.',
    'Give the group, with the route of features as your justification.',
    'Write any species name with a capital genus, small species, '
      + 'and an underline.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Give the seven taxonomic groups in order from the largest.',
      steps: [
        'Begin with the widest grouping and narrow it.',
      ],
      answer: 'Kingdom, phylum, class, order, family, genus, species.',
    },
    {
      level: 3,
      ask: 'A specimen has a soft unsegmented body and a single hard shell, '
        + 'and no legs. '
        + 'Name its phylum and justify the answer.',
      steps: [
        'No jointed legs, so it is not an arthropod.',
        'No segments, so it is not an annelid.',
        'A soft body with a shell fits Mollusca.',
      ],
      answer: 'Mollusca. '
        + 'The body is soft and unsegmented, '
        + 'which rules out Annelida, '
        + 'and there are no jointed legs, '
        + 'which rules out Arthropoda. '
        + 'A soft body bearing a shell is the feature of Mollusca. '
        + 'It is a snail.',
    },
    {
      level: 4,
      ask: 'Use this key on a specimen with jointed legs, '
        + 'four pairs of them, and a body in two parts. '
        + '1: jointed legs present, go to 2; absent, go to 5. '
        + '2: three pairs of legs, Insecta; more than three pairs, go to 3. '
        + '3: four pairs of legs, go to 4; many pairs, Myriapoda. '
        + '4: body in two parts, Arachnida; body in one part, other.',
      steps: [
        'Step 1: jointed legs present, so go to 2.',
        'Step 2: more than three pairs, so go to 3.',
        'Step 3: four pairs, so go to 4.',
        'Step 4: body in two parts, so Arachnida.',
      ],
      answer: 'Arachnida, so the specimen is a spider or a scorpion. '
        + 'The justification is the route: '
        + 'jointed legs present, more than three pairs, '
        + 'four pairs exactly, body in two parts. '
        + 'Writing Arachnida alone would score one mark of four, '
        + 'because the marks are for the features used at each step.',
    },
    {
      level: 5,
      ask: 'Explain why a whale is classified as a mammal and not a fish, '
        + 'and say why classification uses structure '
        + 'rather than habitat.',
      steps: [
        'Fish have scales, gills, and are cold blooded.',
        'The whale has lungs, some hair, and is warm blooded.',
        'It gives birth to live young and feeds them on milk.',
        'Structure is inherited; where an animal lives is not.',
      ],
      answer: 'The whale has lungs rather than gills, '
        + 'is warm blooded, has some hair, '
        + 'and feeds its young on milk, '
        + 'which are the defining features of the mammals. '
        + 'Living in water is a habitat and not a structural feature. '
        + 'Classification uses structure because structure is inherited, '
        + 'so it records how closely two organisms are related, '
        + 'while habitat only records where an organism happens to live '
        + 'and can be shared by quite unrelated groups.',
    },
  ],

  traps: [
    {
      mistake: 'Naming the group without giving the route through the key.',
      why: 'The marks are for the features used at each step. '
        + 'Write the feature, then where it sent you.',
    },
    {
      mistake: 'Choosing one half of a key pair without reading the other.',
      why: 'Exactly one of the two fits. '
        + 'Once you take the wrong branch the key cannot recover.',
    },
    {
      mistake: 'Classifying by habitat, so a whale becomes a fish.',
      why: 'Habitat is not inherited. '
        + 'Classification uses structure, which is.',
    },
    {
      mistake: 'Writing Homo Sapiens or homo sapiens.',
      why: 'Capital genus, small species, '
        + 'and the whole name underlined when handwritten.',
    },
  ],

  extension:
    'Keys are only as good as the features they use, '
    + 'and that is why DNA sequencing has changed some groupings. '
    + 'Two organisms can look alike because they live alike, '
    + 'which is convergent evolution, '
    + 'and a key built on appearance will group them together wrongly. '
    + 'Comparing the order of bases in a shared gene '
    + 'measures relatedness directly, '
    + 'and it has moved several groups, '
    + 'including some fungi once classed with plants. '
    + 'The principle has not changed at all: '
    + 'classify by what the organism is, '
    + 'and the DNA is the deepest available statement of that.',

  questions: [
    {
      id: 'clb-1',
      ask: 'An animal with jointed legs and three pairs of them belongs to:',
      kind: 'choice',
      options: ['Insecta', 'Arachnida', 'Myriapoda'],
      answer: 'Insecta',
      teach: 'Three pairs and a body in three parts is an insect. '
        + 'Four pairs would be an arachnid.',
      level: 3,
    },
    {
      id: 'clb-2',
      ask: 'A dichotomous key works by:',
      kind: 'choice',
      options: [
        'offering pairs of statements, one of which fits',
        'listing every known species',
        'comparing the specimen with a photograph',
      ],
      answer: 'offering pairs of statements, one of which fits',
      teach: 'Each pair sends you on. '
        + 'That is why a key works on a specimen you have never seen.',
      level: 3,
    },
    {
      id: 'clb-3',
      ask: 'In a question that says justify your classification, '
        + 'you must give:',
      kind: 'choice',
      options: [
        'the feature used at each step of the key',
        'the name of the species',
        'the habitat of the organism',
      ],
      answer: 'the feature used at each step of the key',
      teach: 'The route is the mark. '
        + 'The group alone earns very little.',
      level: 4,
    },
    {
      id: 'clb-4',
      ask: 'How many pairs of legs does an arachnid have?',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'Four pairs, so eight legs, with the body in two parts.',
      level: 3,
    },
    {
      id: 'clb-5',
      ask: 'Classification uses structure rather than habitat because '
        + 'structure:',
      kind: 'choice',
      options: [
        'is inherited, so it shows how closely organisms are related',
        'is easier to see',
        'never changes',
      ],
      answer: 'is inherited, so it shows how closely organisms are related',
      teach: 'Unrelated animals can share a habitat. '
        + 'Only inherited features record ancestry.',
      level: 5,
    },
  ],
})
