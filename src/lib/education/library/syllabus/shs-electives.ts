/**
 * Senior High School electives.
 *
 * Eleven subjects, each outlined to the topic areas it is actually built from.
 * These are shorter per subject than the core four on purpose: an elective is
 * chosen, so a learner arriving here has already decided the subject matters to
 * them, and the tutor's job is to teach a named topic well rather than to sell
 * the subject. Depth per topic comes from the tutor, not from this file.
 *
 * As everywhere in this folder: no indicator codes, no claims about papers or
 * marks. Those belong to a document nobody has uploaded yet.
 */

import { register } from '../../syllabus'

const NOTE = 'A standard SHS outline, until your school adds its own.'

/* ── Elective Mathematics ────────────────────────────────────────────────── */

register({
  subjectId: 'add-maths',
  stage: 'shs',
  subject: 'Additional Mathematics',
  source: 'MODEL',
  note: NOTE + ' It assumes Core Mathematics is secure.',
  strands: [
    {
      id: 'algebra-elective',
      name: 'Algebra',
      purpose: 'Algebra taken past solving, into structure.',
      subStrands: [
        {
          id: 'polynomials',
          name: 'Polynomials and equations',
          topics: [
            {
              id: 'polynomials-e',
              title: 'Polynomials',
              outcome: 'Divide polynomials and use the remainder and factor theorems.',
              year: 'SHS 1',
            },
            {
              id: 'partial-fractions',
              title: 'Partial fractions',
              outcome: 'Resolve a rational expression into partial fractions.',
              year: 'SHS 2',
              needs: ['polynomials-e'],
            },
            {
              id: 'binomial-theorem',
              title: 'The binomial theorem',
              outcome: 'Expand a binomial and find a particular term without expanding fully.',
              year: 'SHS 2',
              needs: ['polynomials-e'],
            },
            {
              id: 'sequences-series-e',
              title: 'Sequences and series',
              outcome: 'Handle AP, GP, sum to infinity, and decide whether a series converges.',
              year: 'SHS 2',
            },
            {
              id: 'surds-logs-e',
              title: 'Indices, surds and logarithms',
              outcome: 'Solve exponential and logarithmic equations, including simultaneous ones.',
              year: 'SHS 1',
            },
            {
              id: 'inequalities-e',
              title: 'Inequalities',
              outcome: 'Solve quadratic and rational inequalities and represent the solution set.',
              year: 'SHS 2',
              needs: ['polynomials-e'],
            },
          ],
        },
        {
          id: 'logic-sets-e',
          name: 'Logic and sets',
          topics: [
            {
              id: 'logic-e',
              title: 'Logic',
              outcome: 'Build truth tables, and test an argument for validity.',
              year: 'SHS 1',
            },
            {
              id: 'mappings-e',
              title: 'Functions and mappings',
              outcome: 'Classify mappings, compose functions, and find an inverse.',
              year: 'SHS 1',
            },
          ],
        },
      ],
    },
    {
      id: 'coordinate-geometry-e',
      name: 'Coordinate Geometry',
      purpose: 'Geometry done with equations rather than compasses.',
      subStrands: [
        {
          id: 'lines-circles-e',
          name: 'Lines, circles and conics',
          topics: [
            {
              id: 'straight-line-e',
              title: 'The straight line',
              outcome: 'Find equations, angles between lines, and distance from a point to a line.',
              year: 'SHS 1',
            },
            {
              id: 'circle-e',
              title: 'The circle',
              outcome: 'Find the equation of a circle and of a tangent to it.',
              year: 'SHS 2',
              needs: ['straight-line-e'],
            },
            {
              id: 'conics-e',
              title: 'The parabola and other loci',
              outcome: 'Find the equation of a locus from its defining condition.',
              year: 'SHS 3',
              needs: ['circle-e'],
            },
          ],
        },
      ],
    },
    {
      id: 'trigonometry-e',
      name: 'Trigonometry',
      purpose: 'Trigonometry as identities and equations, not just triangles.',
      subStrands: [
        {
          id: 'identities-e',
          name: 'Identities and equations',
          topics: [
            {
              id: 'trig-identities-e',
              title: 'Trigonometric identities',
              outcome: 'Prove identities and use the compound and double angle formulae.',
              year: 'SHS 2',
            },
            {
              id: 'trig-equations-e',
              title: 'Trigonometric equations',
              outcome: 'Solve trigonometric equations over a given range, finding every solution.',
              year: 'SHS 2',
              needs: ['trig-identities-e'],
            },
            {
              id: 'radians-e',
              title: 'Circular measure',
              outcome: 'Work in radians, and find arc length and sector area.',
              year: 'SHS 1',
            },
          ],
        },
      ],
    },
    {
      id: 'calculus-e',
      name: 'Calculus',
      purpose: 'Rates of change, and areas under curves.',
      subStrands: [
        {
          id: 'differentiation-e',
          name: 'Differentiation',
          topics: [
            {
              id: 'limits-e',
              title: 'Limits and continuity',
              outcome: 'Evaluate limits and say where a function fails to be continuous.',
              year: 'SHS 2',
              needs: ['mappings-e'],
            },
            {
              id: 'derivatives-e',
              title: 'Differentiation',
              outcome: 'Differentiate using the product, quotient and chain rules.',
              year: 'SHS 2',
              needs: ['limits-e'],
            },
            {
              id: 'applications-diff-e',
              title: 'Applications of differentiation',
              outcome: 'Find gradients, turning points, and solve a maximum or minimum problem.',
              year: 'SHS 3',
              needs: ['derivatives-e'],
            },
          ],
        },
        {
          id: 'integration-e',
          name: 'Integration',
          topics: [
            {
              id: 'integration-e-t',
              title: 'Integration',
              outcome: 'Integrate standard functions and use substitution.',
              year: 'SHS 3',
              needs: ['derivatives-e'],
            },
            {
              id: 'definite-integrals-e',
              title: 'Definite integrals and area',
              outcome: 'Find the area under a curve and between two curves.',
              year: 'SHS 3',
              needs: ['integration-e-t'],
            },
          ],
        },
      ],
    },
    {
      id: 'mechanics-e',
      name: 'Vectors and Mechanics',
      purpose: 'Vectors, and the motion of bodies described with them.',
      subStrands: [
        {
          id: 'vectors-e',
          name: 'Vectors',
          topics: [
            {
              id: 'vector-algebra-e',
              title: 'Vector algebra',
              outcome: 'Add vectors, find the scalar product, and the angle between two vectors.',
              year: 'SHS 2',
            },
            {
              id: 'statics-e',
              title: 'Statics',
              outcome: 'Resolve forces and solve an equilibrium problem, including moments.',
              year: 'SHS 3',
              needs: ['vector-algebra-e'],
            },
            {
              id: 'dynamics-e',
              title: 'Dynamics',
              outcome: 'Apply Newton’s laws, momentum and impulse to motion in a line.',
              year: 'SHS 3',
              needs: ['statics-e'],
            },
            {
              id: 'projectiles-e',
              title: 'Projectiles and relative velocity',
              outcome: 'Solve projectile problems and handle relative velocity.',
              year: 'SHS 3',
              needs: ['dynamics-e'],
            },
          ],
        },
      ],
    },
    {
      id: 'statistics-e',
      name: 'Statistics and Probability',
      purpose: 'Distributions, and inference from a sample.',
      subStrands: [
        {
          id: 'stats-e',
          name: 'Statistics and probability',
          topics: [
            {
              id: 'descriptive-e',
              title: 'Descriptive statistics',
              outcome: 'Compute and interpret measures of location and dispersion for grouped data.',
              year: 'SHS 1',
            },
            {
              id: 'probability-e',
              title: 'Probability',
              outcome: 'Use conditional probability, independence and the laws of probability.',
              year: 'SHS 2',
              needs: ['descriptive-e'],
            },
            {
              id: 'permutations-e',
              title: 'Permutations and combinations',
              outcome: 'Count arrangements and selections, and tell which the problem wants.',
              year: 'SHS 2',
            },
            {
              id: 'distributions-e',
              title: 'Binomial and normal distributions',
              outcome: 'Use the binomial and normal distributions to find a probability.',
              year: 'SHS 3',
              needs: ['probability-e', 'permutations-e'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Physics ─────────────────────────────────────────────────────────────── */

register({
  subjectId: 'physics',
  stage: 'shs',
  subject: 'Physics',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'mechanics-physics',
      name: 'Mechanics',
      purpose: 'Motion and the forces that cause it.',
      subStrands: [
        {
          id: 'motion-physics',
          name: 'Motion, forces and energy',
          topics: [
            {
              id: 'measurement-physics',
              title: 'Physical quantities and measurement',
              outcome: 'Use SI units, dimensions and significant figures, and estimate error.',
              year: 'SHS 1',
            },
            {
              id: 'kinematics-physics',
              title: 'Kinematics',
              outcome: 'Use the equations of motion and interpret motion graphs.',
              year: 'SHS 1',
              needs: ['measurement-physics'],
            },
            {
              id: 'newton-physics',
              title: 'Newton’s laws and momentum',
              outcome: 'Apply the three laws and conservation of momentum to collisions.',
              year: 'SHS 1',
              needs: ['kinematics-physics'],
            },
            {
              id: 'energy-physics',
              title: 'Work, energy and power',
              outcome: 'Apply conservation of energy, including with friction present.',
              year: 'SHS 2',
              needs: ['newton-physics'],
            },
            {
              id: 'circular-gravitation',
              title: 'Circular motion and gravitation',
              outcome: 'Use centripetal force and Newton’s law of gravitation on orbits.',
              year: 'SHS 3',
              needs: ['energy-physics'],
            },
            {
              id: 'equilibrium-physics',
              title: 'Equilibrium and moments',
              outcome: 'Solve equilibrium problems with the conditions on force and moment.',
              year: 'SHS 2',
              needs: ['newton-physics'],
            },
            {
              id: 'fluids-physics',
              title: 'Pressure and fluids',
              outcome: 'Use pressure in fluids, upthrust and Archimedes’ principle.',
              year: 'SHS 2',
            },
            {
              id: 'elasticity-physics',
              title: 'Elasticity and surface tension',
              outcome: 'Use Hooke’s law and explain surface tension and capillarity.',
              year: 'SHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'heat-physics',
      name: 'Thermal Physics',
      purpose: 'Heat, temperature and the behaviour of gases.',
      subStrands: [
        {
          id: 'thermal-physics',
          name: 'Heat and gases',
          topics: [
            {
              id: 'temperature-physics',
              title: 'Temperature and thermometry',
              outcome: 'Explain temperature scales and how a thermometer is calibrated.',
              year: 'SHS 1',
            },
            {
              id: 'heat-capacity-physics',
              title: 'Heat capacity and latent heat',
              outcome: 'Solve calorimetry problems including changes of state.',
              year: 'SHS 2',
              needs: ['temperature-physics'],
            },
            {
              id: 'gas-laws-physics',
              title: 'Gas laws and kinetic theory',
              outcome: 'Use the gas laws and explain them by the motion of molecules.',
              year: 'SHS 2',
              needs: ['heat-capacity-physics'],
            },
            {
              id: 'heat-transfer-physics',
              title: 'Heat transfer',
              outcome: 'Compare conduction, convection and radiation quantitatively where possible.',
              year: 'SHS 1',
            },
          ],
        },
      ],
    },
    {
      id: 'waves-physics',
      name: 'Waves and Optics',
      purpose: 'Anything that travels without carrying matter with it.',
      subStrands: [
        {
          id: 'wave-motion',
          name: 'Waves, sound and light',
          topics: [
            {
              id: 'wave-basics-physics',
              title: 'Wave motion',
              outcome: 'Use the wave equation and describe interference, diffraction and polarisation.',
              year: 'SHS 2',
            },
            {
              id: 'sound-physics',
              title: 'Sound',
              outcome: 'Explain resonance in pipes and strings and calculate the speed of sound.',
              year: 'SHS 2',
              needs: ['wave-basics-physics'],
            },
            {
              id: 'reflection-refraction-physics',
              title: 'Reflection and refraction',
              outcome: 'Use the mirror and lens formulae and Snell’s law, with ray diagrams.',
              year: 'SHS 2',
              needs: ['wave-basics-physics'],
            },
            {
              id: 'optical-instruments',
              title: 'Optical instruments and the eye',
              outcome: 'Explain how the eye, camera, microscope and telescope form images.',
              year: 'SHS 3',
              needs: ['reflection-refraction-physics'],
            },
          ],
        },
      ],
    },
    {
      id: 'electricity-physics',
      name: 'Electricity and Magnetism',
      purpose: 'Charge at rest, charge in motion, and the fields around it.',
      subStrands: [
        {
          id: 'circuits-physics',
          name: 'Electrostatics, circuits and fields',
          topics: [
            {
              id: 'electrostatics-physics',
              title: 'Electrostatics',
              outcome: 'Use Coulomb’s law, describe fields, and explain capacitance.',
              year: 'SHS 2',
            },
            {
              id: 'dc-circuits-physics',
              title: 'Current electricity',
              outcome: 'Use Ohm’s law and Kirchhoff’s rules on a multi-loop circuit.',
              year: 'SHS 2',
              needs: ['electrostatics-physics'],
            },
            {
              id: 'magnetism-physics',
              title: 'Magnetic fields and forces',
              outcome: 'Find the force on a current in a field and explain how a motor turns.',
              year: 'SHS 3',
              needs: ['dc-circuits-physics'],
            },
            {
              id: 'induction-physics',
              title: 'Electromagnetic induction',
              outcome: 'Apply Faraday’s and Lenz’s laws to a generator and a transformer.',
              year: 'SHS 3',
              needs: ['magnetism-physics'],
            },
            {
              id: 'ac-physics',
              title: 'Alternating current',
              outcome: 'Handle rms values and reactance in a simple a.c. circuit.',
              year: 'SHS 3',
              needs: ['induction-physics'],
            },
          ],
        },
      ],
    },
    {
      id: 'modern-physics',
      name: 'Modern Physics',
      purpose: 'Where classical physics stops working.',
      subStrands: [
        {
          id: 'atomic-nuclear-physics',
          name: 'Atomic and nuclear physics',
          topics: [
            {
              id: 'electronics-physics',
              title: 'Basic electronics',
              outcome: 'Explain conduction in semiconductors and the action of a diode and transistor.',
              year: 'SHS 3',
              needs: ['dc-circuits-physics'],
            },
            {
              id: 'photoelectric-physics',
              title: 'The photoelectric effect and atomic models',
              outcome: 'Use the photoelectric equation and explain why the wave model fails.',
              year: 'SHS 3',
              needs: ['wave-basics-physics'],
            },
            {
              id: 'nuclear-physics',
              title: 'Radioactivity and nuclear energy',
              outcome: 'Use half life, write nuclear equations, and compare fission with fusion.',
              year: 'SHS 3',
              needs: ['photoelectric-physics'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Chemistry ───────────────────────────────────────────────────────────── */

register({
  subjectId: 'chemistry',
  stage: 'shs',
  subject: 'Chemistry',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'physical-chemistry',
      name: 'Physical Chemistry',
      purpose: 'Why reactions go, how fast, and how far.',
      subStrands: [
        {
          id: 'structure-chem',
          name: 'Atomic structure and bonding',
          topics: [
            {
              id: 'atomic-structure-chem',
              title: 'Atomic structure',
              outcome: 'Write electron configurations and explain the evidence for the nuclear atom.',
              year: 'SHS 1',
            },
            {
              id: 'periodicity-chem',
              title: 'Periodicity',
              outcome: 'Explain trends in size, ionisation energy and electronegativity across a period.',
              year: 'SHS 1',
              needs: ['atomic-structure-chem'],
            },
            {
              id: 'bonding-chem',
              title: 'Chemical bonding and shapes',
              outcome: 'Explain ionic, covalent and metallic bonding and predict a molecule’s shape.',
              year: 'SHS 1',
              needs: ['periodicity-chem'],
            },
          ],
        },
        {
          id: 'quantitative-chem',
          name: 'Quantitative chemistry',
          topics: [
            {
              id: 'mole-chem',
              title: 'The mole concept',
              outcome: 'Convert between mass, moles and particles, and find an empirical formula.',
              year: 'SHS 1',
              needs: ['atomic-structure-chem'],
            },
            {
              id: 'stoichiometry-chem',
              title: 'Stoichiometry',
              outcome: 'Calculate from a balanced equation, including limiting reagent and yield.',
              year: 'SHS 2',
              needs: ['mole-chem'],
            },
            {
              id: 'solutions-chem',
              title: 'Solutions and titration',
              outcome: 'Prepare a standard solution and calculate a concentration from a titration.',
              year: 'SHS 2',
              needs: ['stoichiometry-chem'],
            },
            {
              id: 'gas-laws-chem',
              title: 'Gas laws',
              outcome: 'Use the gas equation and the molar volume in a calculation.',
              year: 'SHS 2',
              needs: ['mole-chem'],
            },
          ],
        },
        {
          id: 'energetics-chem',
          name: 'Energetics, kinetics and equilibrium',
          topics: [
            {
              id: 'thermochemistry-chem',
              title: 'Energy changes',
              outcome: 'Distinguish exothermic from endothermic and use enthalpy changes.',
              year: 'SHS 2',
              needs: ['stoichiometry-chem'],
            },
            {
              id: 'kinetics-chem',
              title: 'Rates of reaction',
              outcome: 'Explain the effect of each factor on rate using collision theory.',
              year: 'SHS 2',
              needs: ['thermochemistry-chem'],
            },
            {
              id: 'equilibrium-chem',
              title: 'Chemical equilibrium',
              outcome: 'Apply Le Chatelier’s principle and write an equilibrium constant.',
              year: 'SHS 3',
              needs: ['kinetics-chem'],
            },
            {
              id: 'acids-bases-chem',
              title: 'Acids, bases and pH',
              outcome: 'Calculate pH, explain buffers, and interpret a titration curve.',
              year: 'SHS 3',
              needs: ['solutions-chem'],
            },
            {
              id: 'redox-chem',
              title: 'Redox and electrochemistry',
              outcome: 'Assign oxidation numbers, balance redox equations, and explain electrolysis.',
              year: 'SHS 3',
              needs: ['equilibrium-chem'],
            },
          ],
        },
      ],
    },
    {
      id: 'inorganic-chem',
      name: 'Inorganic Chemistry',
      purpose: 'The elements themselves, group by group.',
      subStrands: [
        {
          id: 'groups-chem',
          name: 'The groups and their compounds',
          topics: [
            {
              id: 'group1-2-chem',
              title: 'Groups 1 and 2',
              outcome: 'Describe the reactions of the alkali and alkaline earth metals and their trends.',
              year: 'SHS 2',
              needs: ['periodicity-chem'],
            },
            {
              id: 'halogens-chem',
              title: 'The halogens',
              outcome: 'Describe halogen reactivity, displacement and their common compounds.',
              year: 'SHS 2',
              needs: ['periodicity-chem'],
            },
            {
              id: 'nitrogen-sulphur-chem',
              title: 'Nitrogen, sulphur and their compounds',
              outcome: 'Describe ammonia and sulphuric acid manufacture and the uses of each.',
              year: 'SHS 3',
              needs: ['equilibrium-chem'],
            },
            {
              id: 'metals-extraction-chem',
              title: 'Extraction of metals',
              outcome: 'Relate an extraction method to the metal’s reactivity, using Ghanaian examples.',
              year: 'SHS 3',
              needs: ['redox-chem'],
            },
            {
              id: 'qualitative-analysis-chem',
              title: 'Qualitative analysis',
              outcome: 'Identify cations and anions from their reactions and record observations properly.',
              year: 'SHS 3',
              needs: ['acids-bases-chem'],
            },
          ],
        },
      ],
    },
    {
      id: 'organic-chem',
      name: 'Organic Chemistry',
      purpose: 'Carbon compounds, which is most of what is alive or burns.',
      subStrands: [
        {
          id: 'organic-families',
          name: 'Families of organic compounds',
          topics: [
            {
              id: 'hydrocarbons-chem',
              title: 'Alkanes, alkenes and alkynes',
              outcome: 'Name and draw hydrocarbons and describe their characteristic reactions.',
              year: 'SHS 2',
              needs: ['bonding-chem'],
            },
            {
              id: 'isomerism-chem',
              title: 'Isomerism',
              outcome: 'Draw structural isomers and explain why they differ in properties.',
              year: 'SHS 2',
              needs: ['hydrocarbons-chem'],
            },
            {
              id: 'alcohols-acids-chem',
              title: 'Alcohols, acids and esters',
              outcome: 'Describe the reactions of alcohols and carboxylic acids, including esterification.',
              year: 'SHS 3',
              needs: ['hydrocarbons-chem'],
            },
            {
              id: 'polymers-chem',
              title: 'Polymers and macromolecules',
              outcome: 'Distinguish addition from condensation polymerisation and name everyday polymers.',
              year: 'SHS 3',
              needs: ['alcohols-acids-chem'],
            },
            {
              id: 'petroleum-chem',
              title: 'Petroleum and its products',
              outcome: 'Describe fractional distillation and cracking and what each fraction is used for.',
              year: 'SHS 3',
              needs: ['hydrocarbons-chem'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Biology ─────────────────────────────────────────────────────────────── */

register({
  subjectId: 'biology',
  stage: 'shs',
  subject: 'Biology',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'cells-bio',
      name: 'Cell Biology and Diversity',
      purpose: 'The unit all life is built from, and the variety built out of it.',
      subStrands: [
        {
          id: 'cell-bio',
          name: 'Cells and cell processes',
          topics: [
            {
              id: 'cell-structure-bio',
              title: 'Cell structure and function',
              outcome: 'Relate each organelle to its job and compare plant, animal and bacterial cells.',
              year: 'SHS 1',
            },
            {
              id: 'transport-cell-bio',
              title: 'Movement across membranes',
              outcome: 'Distinguish diffusion, osmosis and active transport, and design a test for osmosis.',
              year: 'SHS 1',
              needs: ['cell-structure-bio'],
            },
            {
              id: 'cell-division-bio',
              title: 'Cell division',
              outcome: 'Describe mitosis and meiosis and say why each exists.',
              year: 'SHS 2',
              needs: ['cell-structure-bio'],
            },
            {
              id: 'biomolecules-bio',
              title: 'Biological molecules and enzymes',
              outcome: 'Test for the food groups and explain how an enzyme works and what stops it.',
              year: 'SHS 1',
              needs: ['cell-structure-bio'],
            },
          ],
        },
        {
          id: 'diversity-bio',
          name: 'Classification',
          topics: [
            {
              id: 'classification-bio',
              title: 'Classification of living things',
              outcome: 'Classify to phylum using a key, and justify each choice.',
              year: 'SHS 1',
            },
          ],
        },
      ],
    },
    {
      id: 'physiology-bio',
      name: 'Physiology',
      purpose: 'How bodies actually run, in plants and animals.',
      subStrands: [
        {
          id: 'plant-physiology',
          name: 'Plant physiology',
          topics: [
            {
              id: 'photosynthesis-bio',
              title: 'Photosynthesis',
              outcome: 'Describe the light and dark stages and investigate a limiting factor.',
              year: 'SHS 2',
              needs: ['biomolecules-bio'],
            },
            {
              id: 'transport-plant-bio',
              title: 'Transport in plants',
              outcome: 'Explain transpiration pull and translocation, with the tissues named.',
              year: 'SHS 2',
              needs: ['transport-cell-bio'],
            },
            {
              id: 'plant-responses-bio',
              title: 'Plant responses and hormones',
              outcome: 'Explain tropisms and the role of auxin.',
              year: 'SHS 3',
              needs: ['transport-plant-bio'],
            },
          ],
        },
        {
          id: 'animal-physiology',
          name: 'Animal physiology',
          topics: [
            {
              id: 'nutrition-bio',
              title: 'Nutrition and digestion',
              outcome: 'Describe digestion and absorption and relate gut structure to diet.',
              year: 'SHS 2',
              needs: ['biomolecules-bio'],
            },
            {
              id: 'respiration-bio',
              title: 'Respiration',
              outcome: 'Compare aerobic and anaerobic respiration and account for the energy yield.',
              year: 'SHS 2',
              needs: ['biomolecules-bio'],
            },
            {
              id: 'circulation-bio',
              title: 'Transport in animals',
              outcome: 'Describe the double circulation and the composition and roles of blood.',
              year: 'SHS 2',
              needs: ['respiration-bio'],
            },
            {
              id: 'excretion-bio',
              title: 'Excretion and homeostasis',
              outcome: 'Explain how the nephron works and how the body holds conditions steady.',
              year: 'SHS 3',
              needs: ['circulation-bio'],
            },
            {
              id: 'coordination-bio',
              title: 'Nervous and endocrine coordination',
              outcome: 'Trace a reflex arc and compare nervous with hormonal control.',
              year: 'SHS 3',
              needs: ['excretion-bio'],
            },
            {
              id: 'support-movement-bio',
              title: 'Support and movement',
              outcome: 'Relate skeleton and muscle to movement, including antagonistic pairs.',
              year: 'SHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'genetics-bio',
      name: 'Reproduction, Genetics and Evolution',
      purpose: 'How life continues, and how it changes while continuing.',
      subStrands: [
        {
          id: 'reproduction-bio',
          name: 'Reproduction and development',
          topics: [
            {
              id: 'reproduction-plants-bio',
              title: 'Reproduction in flowering plants',
              outcome: 'Describe pollination, fertilisation, and seed and fruit formation.',
              year: 'SHS 2',
              needs: ['cell-division-bio'],
            },
            {
              id: 'reproduction-humans-bio',
              title: 'Reproduction in humans',
              outcome: 'Describe gametogenesis, the menstrual cycle, fertilisation and development.',
              year: 'SHS 2',
              needs: ['cell-division-bio'],
            },
          ],
        },
        {
          id: 'heredity-bio',
          name: 'Genetics and evolution',
          topics: [
            {
              id: 'mendelian-bio',
              title: 'Mendelian genetics',
              outcome: 'Solve monohybrid and dihybrid crosses and interpret the ratios.',
              year: 'SHS 3',
              needs: ['reproduction-humans-bio'],
            },
            {
              id: 'dna-bio',
              title: 'DNA and protein synthesis',
              outcome: 'Describe DNA structure, replication, and how a gene becomes a protein.',
              year: 'SHS 3',
              needs: ['mendelian-bio'],
            },
            {
              id: 'variation-evolution-bio',
              title: 'Variation and evolution',
              outcome: 'Explain natural selection and the evidence offered for evolution.',
              year: 'SHS 3',
              needs: ['mendelian-bio'],
            },
          ],
        },
      ],
    },
    {
      id: 'ecology-bio',
      name: 'Ecology and Applied Biology',
      purpose: 'Organisms in their place, and biology put to work.',
      subStrands: [
        {
          id: 'ecology-bio-sub',
          name: 'Ecology',
          topics: [
            {
              id: 'ecosystems-bio',
              title: 'Ecosystems and energy flow',
              outcome: 'Sample a habitat, build a food web, and explain the loss between trophic levels.',
              year: 'SHS 2',
              needs: ['classification-bio'],
            },
            {
              id: 'population-bio',
              title: 'Populations and their interactions',
              outcome: 'Explain competition, predation, symbiosis and what limits a population.',
              year: 'SHS 3',
              needs: ['ecosystems-bio'],
            },
            {
              id: 'conservation-bio',
              title: 'Conservation and human impact',
              outcome: 'Evaluate a Ghanaian conservation problem and a response to it.',
              year: 'SHS 3',
              needs: ['population-bio'],
            },
          ],
        },
        {
          id: 'applied-bio',
          name: 'Applied biology',
          topics: [
            {
              id: 'disease-immunity-bio',
              title: 'Disease and immunity',
              outcome: 'Explain pathogens, the immune response, and how vaccines produce immunity.',
              year: 'SHS 3',
              needs: ['circulation-bio'],
            },
            {
              id: 'biotechnology-bio',
              title: 'Biotechnology',
              outcome: 'Describe fermentation and genetic modification, with the arguments on each side.',
              year: 'SHS 3',
              needs: ['dna-bio'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Economics ───────────────────────────────────────────────────────────── */

register({
  subjectId: 'economics',
  stage: 'shs',
  subject: 'Economics',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'basic-concepts-econ',
      name: 'Basic Economic Concepts',
      purpose: 'Scarcity, choice, and what every decision costs.',
      subStrands: [
        {
          id: 'foundations-econ',
          name: 'Foundations',
          topics: [
            {
              id: 'scarcity-econ',
              title: 'Scarcity, choice and opportunity cost',
              outcome: 'Identify the opportunity cost of a real decision and why it is the true cost.',
              year: 'SHS 1',
            },
            {
              id: 'systems-econ',
              title: 'Economic systems',
              outcome: 'Compare market, planned and mixed economies and place Ghana among them.',
              year: 'SHS 1',
              needs: ['scarcity-econ'],
            },
            {
              id: 'production-econ',
              title: 'Production and the factors of production',
              outcome: 'Explain the factors, their rewards, and division of labour.',
              year: 'SHS 1',
              needs: ['scarcity-econ'],
            },
          ],
        },
      ],
    },
    {
      id: 'microeconomics-econ',
      name: 'Microeconomics',
      purpose: 'Individual markets, and the firms and households in them.',
      subStrands: [
        {
          id: 'markets-econ',
          name: 'Demand, supply and markets',
          topics: [
            {
              id: 'demand-supply-econ',
              title: 'Demand and supply',
              outcome: 'Explain the laws, shift the curves correctly, and find equilibrium.',
              year: 'SHS 1',
              needs: ['scarcity-econ'],
            },
            {
              id: 'elasticity-econ',
              title: 'Elasticity',
              outcome: 'Calculate elasticity and use it to predict what a price change does to revenue.',
              year: 'SHS 2',
              needs: ['demand-supply-econ'],
            },
            {
              id: 'price-controls-econ',
              title: 'Price controls and market failure',
              outcome: 'Analyse a price ceiling or floor and explain why a market can fail.',
              year: 'SHS 2',
              needs: ['demand-supply-econ'],
            },
            {
              id: 'costs-revenue-econ',
              title: 'Costs, revenue and the firm',
              outcome: 'Distinguish the cost curves and find where profit is maximised.',
              year: 'SHS 2',
              needs: ['production-econ'],
            },
            {
              id: 'market-structures-econ',
              title: 'Market structures',
              outcome: 'Compare perfect competition, monopoly and oligopoly on price and output.',
              year: 'SHS 3',
              needs: ['costs-revenue-econ'],
            },
          ],
        },
      ],
    },
    {
      id: 'macroeconomics-econ',
      name: 'Macroeconomics',
      purpose: 'The whole economy: output, money, jobs and prices.',
      subStrands: [
        {
          id: 'national-econ',
          name: 'National income, money and policy',
          topics: [
            {
              id: 'national-income-econ',
              title: 'National income',
              outcome: 'Define GDP and GNP, explain the three approaches, and the difficulties of measurement.',
              year: 'SHS 2',
            },
            {
              id: 'money-banking-econ',
              title: 'Money and banking',
              outcome: 'Explain the functions of money and what a central bank does.',
              year: 'SHS 2',
              needs: ['national-income-econ'],
            },
            {
              id: 'inflation-econ',
              title: 'Inflation and unemployment',
              outcome: 'Distinguish the types and causes of each and their effects on a household.',
              year: 'SHS 2',
              needs: ['money-banking-econ'],
            },
            {
              id: 'public-finance-econ',
              title: 'Public finance',
              outcome: 'Explain taxation, the budget, and the consequences of public debt.',
              year: 'SHS 3',
              needs: ['inflation-econ'],
            },
            {
              id: 'trade-econ',
              title: 'International trade and the balance of payments',
              outcome: 'Explain comparative advantage, exchange rates and the balance of payments.',
              year: 'SHS 3',
              needs: ['public-finance-econ'],
            },
            {
              id: 'development-econ',
              title: 'Economic development and planning',
              outcome: 'Distinguish growth from development and evaluate a Ghanaian policy.',
              year: 'SHS 3',
              needs: ['trade-econ'],
            },
            {
              id: 'agriculture-econ',
              title: 'Agriculture and industry in Ghana',
              outcome: 'Explain the role and problems of agriculture and industry in Ghana’s economy.',
              year: 'SHS 3',
              needs: ['development-econ'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Geography ───────────────────────────────────────────────────────────── */

register({
  subjectId: 'geography',
  stage: 'shs',
  subject: 'Geography',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'physical-geog',
      name: 'Physical Geography',
      purpose: 'The Earth itself, and the processes shaping it.',
      subStrands: [
        {
          id: 'earth-geog',
          name: 'The Earth and its processes',
          topics: [
            {
              id: 'earth-structure-geog',
              title: 'The Earth’s structure and movements',
              outcome: 'Describe the internal structure, rotation and revolution, and their consequences.',
              year: 'SHS 1',
            },
            {
              id: 'rocks-geog',
              title: 'Rocks and the rock cycle',
              outcome: 'Classify rocks by origin and describe how each type forms.',
              year: 'SHS 1',
              needs: ['earth-structure-geog'],
            },
            {
              id: 'landforms-geog',
              title: 'Weathering, erosion and landforms',
              outcome: 'Explain how river, coastal and wind processes produce named landforms.',
              year: 'SHS 2',
              needs: ['rocks-geog'],
            },
            {
              id: 'plate-tectonics-geog',
              title: 'Earthquakes, volcanoes and plate movement',
              outcome: 'Relate earthquakes and volcanoes to plate boundaries.',
              year: 'SHS 2',
              needs: ['earth-structure-geog'],
            },
            {
              id: 'climate-geog',
              title: 'Weather, climate and climatic regions',
              outcome: 'Read weather instruments and account for the main climatic regions.',
              year: 'SHS 2',
            },
            {
              id: 'vegetation-soil-geog',
              title: 'Vegetation and soils',
              outcome: 'Relate vegetation belts and soil types to climate, with Ghanaian examples.',
              year: 'SHS 2',
              needs: ['climate-geog'],
            },
          ],
        },
      ],
    },
    {
      id: 'map-geog',
      name: 'Map Reading and Practical Geography',
      purpose: 'The skills the subject is actually tested on.',
      subStrands: [
        {
          id: 'maps-geog',
          name: 'Maps and statistics',
          topics: [
            {
              id: 'map-reading-geog',
              title: 'Map reading and interpretation',
              outcome: 'Give grid references, calculate distance, gradient and area, and read relief.',
              year: 'SHS 1',
            },
            {
              id: 'map-drawing-geog',
              title: 'Cross sections and sketch maps',
              outcome: 'Draw a cross section from contours and a sketch map from a topographic sheet.',
              year: 'SHS 2',
              needs: ['map-reading-geog'],
            },
            {
              id: 'statistics-geog',
              title: 'Statistical methods in geography',
              outcome: 'Present data as graphs and maps and interpret what they show.',
              year: 'SHS 2',
              needs: ['map-reading-geog'],
            },
          ],
        },
      ],
    },
    {
      id: 'human-geog',
      name: 'Human and Regional Geography',
      purpose: 'People, where they live, and how they use the land.',
      subStrands: [
        {
          id: 'population-settlement-geog',
          name: 'Population, settlement and economy',
          topics: [
            {
              id: 'population-geog',
              title: 'Population',
              outcome: 'Interpret population pyramids and explain distribution, growth and migration.',
              year: 'SHS 2',
            },
            {
              id: 'settlement-geog',
              title: 'Settlement',
              outcome: 'Explain settlement patterns, functions and urban problems.',
              year: 'SHS 3',
              needs: ['population-geog'],
            },
            {
              id: 'agriculture-geog',
              title: 'Agriculture',
              outcome: 'Compare farming systems and explain the location of a named crop.',
              year: 'SHS 2',
              needs: ['vegetation-soil-geog'],
            },
            {
              id: 'industry-geog',
              title: 'Mining, industry and energy',
              outcome: 'Explain the location of an industry and evaluate mining’s effects in Ghana.',
              year: 'SHS 3',
              needs: ['settlement-geog'],
            },
            {
              id: 'transport-trade-geog',
              title: 'Transport, trade and tourism',
              outcome: 'Assess Ghana’s transport network and the contribution of trade and tourism.',
              year: 'SHS 3',
              needs: ['industry-geog'],
            },
            {
              id: 'regional-geog',
              title: 'Regional geography of Ghana and Africa',
              outcome: 'Describe a region’s physical and human geography and compare it with another.',
              year: 'SHS 3',
              needs: ['transport-trade-geog'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Government ──────────────────────────────────────────────────────────── */

register({
  subjectId: 'government',
  stage: 'shs',
  subject: 'Government',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'concepts-gov',
      name: 'Basic Concepts',
      purpose: 'The vocabulary of politics, used precisely.',
      subStrands: [
        {
          id: 'political-concepts',
          name: 'Political concepts',
          topics: [
            {
              id: 'state-nation-gov',
              title: 'State, nation and sovereignty',
              outcome: 'Distinguish state from nation and explain what sovereignty means in practice.',
              year: 'SHS 1',
            },
            {
              id: 'power-authority-gov',
              title: 'Power, authority and legitimacy',
              outcome: 'Distinguish the three and explain how a government becomes legitimate.',
              year: 'SHS 1',
              needs: ['state-nation-gov'],
            },
            {
              id: 'ideologies-gov',
              title: 'Political ideologies',
              outcome: 'Compare liberalism, socialism and conservatism on the role of the state.',
              year: 'SHS 2',
              needs: ['power-authority-gov'],
            },
          ],
        },
      ],
    },
    {
      id: 'systems-gov',
      name: 'Systems and Organs of Government',
      purpose: 'How states are arranged, and who does what.',
      subStrands: [
        {
          id: 'organs-gov',
          name: 'Constitutions and organs',
          topics: [
            {
              id: 'constitutions-gov',
              title: 'Constitutions and constitutionalism',
              outcome: 'Classify constitutions and explain what constitutionalism requires beyond a document.',
              year: 'SHS 1',
            },
            {
              id: 'separation-powers-gov',
              title: 'Separation of powers and checks and balances',
              outcome: 'Explain the doctrine and identify checks in Ghana’s system.',
              year: 'SHS 2',
              needs: ['constitutions-gov'],
            },
            {
              id: 'legislature-gov',
              title: 'The legislature',
              outcome: 'Describe how Parliament is composed and how a bill becomes law.',
              year: 'SHS 2',
              needs: ['separation-powers-gov'],
            },
            {
              id: 'executive-gov',
              title: 'The executive',
              outcome: 'Describe the executive’s powers and compare presidential with parliamentary systems.',
              year: 'SHS 2',
              needs: ['separation-powers-gov'],
            },
            {
              id: 'judiciary-gov',
              title: 'The judiciary',
              outcome: 'Describe the court structure and explain judicial independence and review.',
              year: 'SHS 2',
              needs: ['separation-powers-gov'],
            },
            {
              id: 'federal-unitary-gov',
              title: 'Unitary, federal and confederal systems',
              outcome: 'Compare the three and say which Ghana has and why.',
              year: 'SHS 1',
              needs: ['constitutions-gov'],
            },
            {
              id: 'local-government-gov',
              title: 'Local government and decentralisation',
              outcome: 'Describe the district assembly system and assess decentralisation in Ghana.',
              year: 'SHS 3',
              needs: ['executive-gov'],
            },
            {
              id: 'civil-service-gov',
              title: 'The civil service and public corporations',
              outcome: 'Explain the role of the bureaucracy and its relationship to ministers.',
              year: 'SHS 3',
              needs: ['executive-gov'],
            },
          ],
        },
      ],
    },
    {
      id: 'ghana-politics-gov',
      name: 'Political History and Participation',
      purpose: 'How Ghana got here, and how citizens take part.',
      subStrands: [
        {
          id: 'history-gov',
          name: 'Ghana’s political development',
          topics: [
            {
              id: 'colonial-gov',
              title: 'Pre-colonial and colonial administration',
              outcome: 'Describe indirect rule and the political systems it was imposed on.',
              year: 'SHS 2',
            },
            {
              id: 'nationalism-gov',
              title: 'Nationalism and independence',
              outcome: 'Explain the rise of nationalism and the path to independence.',
              year: 'SHS 2',
              needs: ['colonial-gov'],
            },
            {
              id: 'republics-gov',
              title: 'The republics and military interventions',
              outcome: 'Trace Ghana’s constitutional history and account for the coups.',
              year: 'SHS 3',
              needs: ['nationalism-gov'],
            },
          ],
        },
        {
          id: 'participation-gov',
          name: 'Participation and international relations',
          topics: [
            {
              id: 'parties-elections-gov',
              title: 'Political parties, elections and pressure groups',
              outcome: 'Explain electoral systems and the role of parties and pressure groups.',
              year: 'SHS 3',
              needs: ['republics-gov'],
            },
            {
              id: 'international-gov',
              title: 'International organisations',
              outcome: 'Describe the aims of the AU, ECOWAS, Commonwealth and UN and assess one.',
              year: 'SHS 3',
              needs: ['parties-elections-gov'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Literature in English ───────────────────────────────────────────────── */

register({
  subjectId: 'literature',
  stage: 'shs',
  subject: 'Literature in English',
  source: 'MODEL',
  note: NOTE + ' Which set texts you study is your school’s choice, so the '
    + 'tutor will ask before teaching a text.',
  strands: [
    {
      id: 'concepts-lit',
      name: 'Literary Concepts and Devices',
      purpose: 'The tools needed before any text can be discussed properly.',
      subStrands: [
        {
          id: 'devices-lit',
          name: 'Terms and devices',
          topics: [
            {
              id: 'genres-lit',
              title: 'Genres of literature',
              outcome: 'Distinguish prose, drama and poetry by what each can and cannot do.',
              year: 'SHS 1',
            },
            {
              id: 'figures-lit',
              title: 'Figures of speech and imagery',
              outcome: 'Identify a device and explain its effect on the reader, not just its name.',
              year: 'SHS 1',
              needs: ['genres-lit'],
            },
            {
              id: 'literary-terms-lit',
              title: 'Literary terms',
              outcome: 'Use plot, theme, character, setting, irony, tone and point of view accurately.',
              year: 'SHS 1',
              needs: ['genres-lit'],
            },
          ],
        },
      ],
    },
    {
      id: 'poetry-lit',
      name: 'Poetry',
      purpose: 'Compressed language, read closely.',
      subStrands: [
        {
          id: 'reading-poetry',
          name: 'Reading poetry',
          topics: [
            {
              id: 'form-poetry-lit',
              title: 'Form, rhythm and rhyme',
              outcome: 'Describe a poem’s form and say what the form contributes to the meaning.',
              year: 'SHS 2',
              needs: ['figures-lit'],
            },
            {
              id: 'african-poetry-lit',
              title: 'African and non-African poetry',
              outcome: 'Analyse a poem’s theme and technique and support the reading with quotation.',
              year: 'SHS 2',
              needs: ['form-poetry-lit'],
            },
          ],
        },
      ],
    },
    {
      id: 'drama-lit',
      name: 'Drama',
      purpose: 'Text written to be performed, which changes how it must be read.',
      subStrands: [
        {
          id: 'reading-drama',
          name: 'Reading drama',
          topics: [
            {
              id: 'tragedy-comedy-lit',
              title: 'Tragedy and comedy',
              outcome: 'Distinguish the forms and explain tragic flaw, conflict and resolution.',
              year: 'SHS 2',
              needs: ['literary-terms-lit'],
            },
            {
              id: 'drama-analysis-lit',
              title: 'Analysing a play',
              outcome: 'Discuss plot, character, conflict and dramatic technique in a play you have studied.',
              year: 'SHS 3',
              needs: ['tragedy-comedy-lit'],
            },
          ],
        },
      ],
    },
    {
      id: 'prose-lit',
      name: 'Prose',
      purpose: 'The novel and short story, and how they manage time and voice.',
      subStrands: [
        {
          id: 'reading-prose',
          name: 'Reading prose',
          topics: [
            {
              id: 'narrative-technique-lit',
              title: 'Narrative technique',
              outcome: 'Analyse point of view, structure and characterisation in a novel.',
              year: 'SHS 2',
              needs: ['literary-terms-lit'],
            },
            {
              id: 'african-prose-lit',
              title: 'African and non-African prose',
              outcome: 'Discuss theme and social context in a novel you have studied.',
              year: 'SHS 3',
              needs: ['narrative-technique-lit'],
            },
          ],
        },
      ],
    },
    {
      id: 'writing-lit',
      name: 'Critical Writing',
      purpose: 'Turning a reading into an argument somebody can mark.',
      subStrands: [
        {
          id: 'essay-lit',
          name: 'The literary essay',
          topics: [
            {
              id: 'lit-essay-lit',
              title: 'Writing a literature essay',
              outcome: 'Answer the question asked, argue a thesis, and evidence it with quotation.',
              year: 'SHS 3',
              needs: ['narrative-technique-lit'],
            },
            {
              id: 'unseen-lit',
              title: 'Unseen passage and poem',
              outcome: 'Analyse a text you have never read under time pressure.',
              year: 'SHS 3',
              needs: ['figures-lit'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Financial Accounting ────────────────────────────────────────────────── */

register({
  subjectId: 'accounting',
  stage: 'shs',
  subject: 'Financial Accounting',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'foundations-acc',
      name: 'Foundations of Accounting',
      purpose: 'Why the books balance, and what they are for.',
      subStrands: [
        {
          id: 'principles-acc',
          name: 'Principles and the accounting equation',
          topics: [
            {
              id: 'purpose-acc',
              title: 'The purpose of accounting',
              outcome: 'Say who uses accounts and what each user needs from them.',
              year: 'SHS 1',
            },
            {
              id: 'equation-acc',
              title: 'The accounting equation',
              outcome: 'Show that every transaction keeps assets equal to capital plus liabilities.',
              year: 'SHS 1',
              needs: ['purpose-acc'],
            },
            {
              id: 'concepts-acc',
              title: 'Accounting concepts and conventions',
              outcome: 'Apply accrual, prudence, consistency and going concern to a real decision.',
              year: 'SHS 1',
              needs: ['equation-acc'],
            },
          ],
        },
      ],
    },
    {
      id: 'bookkeeping-acc',
      name: 'Double Entry and the Books',
      purpose: 'Recording transactions so nothing is lost.',
      subStrands: [
        {
          id: 'double-entry-acc',
          name: 'Double entry',
          topics: [
            {
              id: 'ledger-acc',
              title: 'Double entry and the ledger',
              outcome: 'Post transactions to the ledger, and say why each has two sides.',
              year: 'SHS 1',
              needs: ['equation-acc'],
            },
            {
              id: 'books-original-acc',
              title: 'Books of original entry',
              outcome: 'Use the day books and the cash book, including discounts.',
              year: 'SHS 2',
              needs: ['ledger-acc'],
            },
            {
              id: 'trial-balance-acc',
              title: 'The trial balance and correcting errors',
              outcome: 'Extract a trial balance, and correct errors with a suspense account.',
              year: 'SHS 2',
              needs: ['books-original-acc'],
            },
            {
              id: 'bank-reconciliation-acc',
              title: 'Bank reconciliation',
              outcome: 'Reconcile the cash book with the bank statement and explain each difference.',
              year: 'SHS 2',
              needs: ['books-original-acc'],
            },
            {
              id: 'control-accounts-acc',
              title: 'Control accounts',
              outcome: 'Prepare sales and purchases ledger control accounts and use them as a check.',
              year: 'SHS 3',
              needs: ['trial-balance-acc'],
            },
          ],
        },
      ],
    },
    {
      id: 'final-accounts-acc',
      name: 'Final Accounts',
      purpose: 'Turning a year of entries into a statement of how the business did.',
      subStrands: [
        {
          id: 'statements-acc',
          name: 'Financial statements',
          topics: [
            {
              id: 'sole-trader-acc',
              title: 'Final accounts of a sole trader',
              outcome: 'Prepare a trading and profit and loss account and a balance sheet with adjustments.',
              year: 'SHS 2',
              needs: ['trial-balance-acc'],
            },
            {
              id: 'depreciation-acc',
              title: 'Depreciation and bad debts',
              outcome: 'Calculate depreciation by both methods and account for bad and doubtful debts.',
              year: 'SHS 2',
              needs: ['sole-trader-acc'],
            },
            {
              id: 'adjustments-acc',
              title: 'Accruals and prepayments',
              outcome: 'Adjust for amounts owing and paid in advance and explain why accrual accounting does this.',
              year: 'SHS 2',
              needs: ['sole-trader-acc'],
            },
            {
              id: 'partnership-acc',
              title: 'Partnership accounts',
              outcome: 'Prepare appropriation and capital accounts for a partnership.',
              year: 'SHS 3',
              needs: ['depreciation-acc'],
            },
            {
              id: 'company-acc',
              title: 'Company accounts',
              outcome: 'Prepare simple company final accounts and explain share capital and reserves.',
              year: 'SHS 3',
              needs: ['partnership-acc'],
            },
            {
              id: 'nonprofit-acc',
              title: 'Not for profit organisations',
              outcome: 'Prepare receipts and payments and an income and expenditure account.',
              year: 'SHS 3',
              needs: ['sole-trader-acc'],
            },
            {
              id: 'manufacturing-acc',
              title: 'Manufacturing accounts',
              outcome: 'Prepare a manufacturing account and find the cost of production.',
              year: 'SHS 3',
              needs: ['depreciation-acc'],
            },
          ],
        },
      ],
    },
    {
      id: 'interpretation-acc',
      name: 'Interpretation and Public Sector',
      purpose: 'Reading accounts rather than only producing them.',
      subStrands: [
        {
          id: 'analysis-acc',
          name: 'Analysis and public accounts',
          topics: [
            {
              id: 'ratios-acc',
              title: 'Accounting ratios',
              outcome: 'Calculate profitability and liquidity ratios and say what each reveals.',
              year: 'SHS 3',
              needs: ['company-acc'],
            },
            {
              id: 'public-sector-acc',
              title: 'Public sector accounting',
              outcome: 'Explain how government accounting differs and name the bodies involved.',
              year: 'SHS 3',
              needs: ['nonprofit-acc'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Business Management ─────────────────────────────────────────────────── */

register({
  subjectId: 'business',
  stage: 'shs',
  subject: 'Business Management',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'business-env',
      name: 'Business and its Environment',
      purpose: 'What a business is, and what surrounds it.',
      subStrands: [
        {
          id: 'nature-business',
          name: 'Nature and forms of business',
          topics: [
            {
              id: 'business-nature',
              title: 'The nature and purpose of business',
              outcome: 'Explain what a business does and who has a stake in it.',
              year: 'SHS 1',
            },
            {
              id: 'business-forms',
              title: 'Forms of business ownership',
              outcome: 'Compare sole proprietorship, partnership, company and cooperative on liability and capital.',
              year: 'SHS 1',
              needs: ['business-nature'],
            },
            {
              id: 'business-environment',
              title: 'The business environment',
              outcome: 'Analyse how economic, legal and social factors affect a Ghanaian business.',
              year: 'SHS 2',
              needs: ['business-forms'],
            },
          ],
        },
      ],
    },
    {
      id: 'management-business',
      name: 'Management',
      purpose: 'Getting work done through other people.',
      subStrands: [
        {
          id: 'functions-management',
          name: 'Functions of management',
          topics: [
            {
              id: 'planning-business',
              title: 'Planning and objectives',
              outcome: 'Set objectives and explain why planning precedes everything else.',
              year: 'SHS 1',
              needs: ['business-nature'],
            },
            {
              id: 'organising-business',
              title: 'Organising and organisational structure',
              outcome: 'Draw an organisation chart and explain span of control and delegation.',
              year: 'SHS 2',
              needs: ['planning-business'],
            },
            {
              id: 'leading-business',
              title: 'Leadership and motivation',
              outcome: 'Compare leadership styles and apply a theory of motivation to a workplace.',
              year: 'SHS 2',
              needs: ['organising-business'],
            },
            {
              id: 'controlling-business',
              title: 'Controlling and decision making',
              outcome: 'Explain the control process and work through a management decision.',
              year: 'SHS 3',
              needs: ['leading-business'],
            },
            {
              id: 'communication-business',
              title: 'Communication in business',
              outcome: 'Choose a channel for a message and identify the barriers to it landing.',
              year: 'SHS 2',
              needs: ['organising-business'],
            },
          ],
        },
      ],
    },
    {
      id: 'functions-business',
      name: 'Business Functions',
      purpose: 'The departments, and what each is answerable for.',
      subStrands: [
        {
          id: 'operations-business',
          name: 'Production, marketing, finance and people',
          topics: [
            {
              id: 'production-business',
              title: 'Production and operations',
              outcome: 'Compare production methods and explain how quality is managed.',
              year: 'SHS 2',
            },
            {
              id: 'marketing-business',
              title: 'Marketing',
              outcome: 'Apply the marketing mix to a product and segment its market.',
              year: 'SHS 2',
              needs: ['production-business'],
            },
            {
              id: 'finance-business',
              title: 'Business finance',
              outcome: 'Compare sources of finance and judge which suits a given need.',
              year: 'SHS 3',
              needs: ['business-forms'],
            },
            {
              id: 'hr-business',
              title: 'Human resource management',
              outcome: 'Describe recruitment, training and appraisal, and why each matters.',
              year: 'SHS 3',
              needs: ['leading-business'],
            },
            {
              id: 'entrepreneurship-business',
              title: 'Entrepreneurship and the business plan',
              outcome: 'Write a business plan for a real idea, with costs and a market.',
              year: 'SHS 3',
              needs: ['finance-business', 'marketing-business'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── ICT ─────────────────────────────────────────────────────────────────── */

register({
  subjectId: 'ict',
  stage: 'shs',
  subject: 'ICT',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'systems-ict',
      name: 'Computer Systems',
      purpose: 'The machine, understood well enough to diagnose it.',
      subStrands: [
        {
          id: 'hardware-ict',
          name: 'Hardware, software and data',
          topics: [
            {
              id: 'architecture-ict',
              title: 'Computer architecture',
              outcome: 'Describe the CPU, memory and buses and how a program is actually executed.',
              year: 'SHS 1',
            },
            {
              id: 'number-systems-ict',
              title: 'Number systems and data representation',
              outcome: 'Convert between binary, denary and hexadecimal and explain how text and images are stored.',
              year: 'SHS 1',
              needs: ['architecture-ict'],
            },
            {
              id: 'software-ict',
              title: 'System and application software',
              outcome: 'Explain what an operating system does and classify software by purpose.',
              year: 'SHS 1',
              needs: ['architecture-ict'],
            },
            {
              id: 'maintenance-ict',
              title: 'Maintenance and troubleshooting',
              outcome: 'Diagnose a common fault methodically and take precautions against loss.',
              year: 'SHS 2',
              needs: ['software-ict'],
            },
          ],
        },
      ],
    },
    {
      id: 'applications-ict',
      name: 'Application Software',
      purpose: 'Producing work to a standard somebody would pay for.',
      subStrands: [
        {
          id: 'office-ict',
          name: 'Documents, spreadsheets, databases and presentations',
          topics: [
            {
              id: 'word-ict',
              title: 'Advanced word processing',
              outcome: 'Use styles, mail merge, tables of contents and references.',
              year: 'SHS 1',
            },
            {
              id: 'spreadsheet-ict',
              title: 'Spreadsheets',
              outcome: 'Use absolute references, IF, VLOOKUP and charts to build a working model.',
              year: 'SHS 2',
              needs: ['word-ict'],
            },
            {
              id: 'database-ict',
              title: 'Databases',
              outcome: 'Design tables with keys and relationships and query them.',
              year: 'SHS 2',
              needs: ['spreadsheet-ict'],
            },
            {
              id: 'graphics-ict',
              title: 'Graphics and multimedia',
              outcome: 'Edit an image and produce a short multimedia piece for a purpose.',
              year: 'SHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'networks-ict',
      name: 'Networks and the Internet',
      purpose: 'How machines communicate, and what can go wrong when they do.',
      subStrands: [
        {
          id: 'networking-ict',
          name: 'Networking and security',
          topics: [
            {
              id: 'network-types-ict',
              title: 'Networks and topologies',
              outcome: 'Compare LAN, MAN and WAN and the common topologies and media.',
              year: 'SHS 2',
              needs: ['architecture-ict'],
            },
            {
              id: 'internet-ict',
              title: 'The internet and its services',
              outcome: 'Explain IP addressing, DNS and what a browser does with a URL.',
              year: 'SHS 2',
              needs: ['network-types-ict'],
            },
            {
              id: 'security-ict',
              title: 'Security and data protection',
              outcome: 'Identify threats and apply authentication, encryption and backup appropriately.',
              year: 'SHS 3',
              needs: ['internet-ict'],
            },
            {
              id: 'ethics-ict',
              title: 'Ethics, law and health',
              outcome: 'Discuss copyright, privacy, cybercrime and safe working practice.',
              year: 'SHS 3',
              needs: ['security-ict'],
            },
          ],
        },
      ],
    },
    {
      id: 'programming-ict',
      name: 'Programming and Web Design',
      purpose: 'Making software rather than only using it.',
      subStrands: [
        {
          id: 'programming-ict-sub',
          name: 'Programming and the web',
          topics: [
            {
              id: 'algorithms-ict',
              title: 'Algorithms and problem solving',
              outcome: 'Express a solution as pseudocode and a flowchart before writing any code.',
              year: 'SHS 2',
            },
            {
              id: 'programming-basics-ict',
              title: 'Programming constructs',
              outcome: 'Use variables, selection, iteration and arrays, and trace a program by hand.',
              year: 'SHS 2',
              needs: ['algorithms-ict'],
            },
            {
              id: 'functions-ict',
              title: 'Functions and modular programming',
              outcome: 'Break a program into functions and explain why that is easier to fix.',
              year: 'SHS 3',
              needs: ['programming-basics-ict'],
            },
            {
              id: 'web-design-ict',
              title: 'Web design',
              outcome: 'Build a small site with HTML and CSS that works on a phone.',
              year: 'SHS 3',
              needs: ['programming-basics-ict'],
            },
            {
              id: 'systems-analysis-ict',
              title: 'Systems analysis and design',
              outcome: 'Work through the development life cycle for a small system.',
              year: 'SHS 3',
              needs: ['database-ict'],
            },
          ],
        },
      ],
    },
  ],
})
