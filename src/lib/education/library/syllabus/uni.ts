/**
 * University level.
 *
 * Outlined by course rather than by year, because no two universities run the
 * same programme in the same order and pretending otherwise would be the one
 * kind of false precision this folder avoids. `year` here says Level 100 to
 * Level 400, which is the common Ghanaian convention, and a learner revising
 * gets the whole outline anyway.
 *
 * This is also the stage where a learner is most likely to have the real
 * document: a course outline handed out in the first week. When that is
 * uploaded it overrides all of this, which is exactly the upgrade path
 * `capability.ts` describes.
 */

import { register } from '../../syllabus'

const NOTE = 'A standard outline of the subject. Upload your course outline and '
  + 'the tutor will follow that instead.'

/* ── Mathematics ────────────────────────────────────────────────────────── */

register({
  subjectId: 'maths',
  stage: 'uni',
  subject: 'Mathematics',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'calculus-uni',
      name: 'Calculus and Analysis',
      purpose: 'Limits, rates and accumulation, made rigorous.',
      subStrands: [
        {
          id: 'single-variable',
          name: 'Single variable calculus',
          topics: [
            {
              id: 'limits-uni',
              title: 'Limits and continuity',
              outcome: 'Evaluate limits rigorously and apply the intermediate and mean value theorems.',
              year: 'Level 100',
            },
            {
              id: 'differentiation-uni',
              title: 'Differentiation',
              outcome: 'Differentiate implicitly and parametrically, and apply Taylor series.',
              year: 'Level 100',
              needs: ['limits-uni'],
            },
            {
              id: 'integration-uni',
              title: 'Techniques of integration',
              outcome: 'Integrate by parts, substitution and partial fractions, and handle improper integrals.',
              year: 'Level 100',
              needs: ['differentiation-uni'],
            },
            {
              id: 'sequences-series-uni',
              title: 'Sequences and series',
              outcome: 'Test a series for convergence and find radius of convergence of a power series.',
              year: 'Level 200',
              needs: ['integration-uni'],
            },
          ],
        },
        {
          id: 'multivariable',
          name: 'Multivariable calculus',
          topics: [
            {
              id: 'partial-derivatives-uni',
              title: 'Partial derivatives',
              outcome: 'Compute partial and directional derivatives, gradients and the chain rule.',
              year: 'Level 200',
              needs: ['differentiation-uni'],
            },
            {
              id: 'multiple-integrals-uni',
              title: 'Multiple integrals',
              outcome: 'Evaluate double and triple integrals, changing to polar, cylindrical or spherical.',
              year: 'Level 200',
              needs: ['partial-derivatives-uni'],
            },
            {
              id: 'vector-calculus-uni',
              title: 'Vector calculus',
              outcome: 'Use divergence and curl and apply Green’s, Stokes’ and the divergence theorem.',
              year: 'Level 200',
              needs: ['multiple-integrals-uni'],
            },
            {
              id: 'optimisation-uni',
              title: 'Optimisation and Lagrange multipliers',
              outcome: 'Classify critical points and solve constrained optimisation problems.',
              year: 'Level 200',
              needs: ['partial-derivatives-uni'],
            },
          ],
        },
        {
          id: 'analysis-uni',
          name: 'Real and complex analysis',
          topics: [
            {
              id: 'real-analysis-uni',
              title: 'Real analysis',
              outcome: 'Work with suprema, Cauchy sequences, uniform continuity and Riemann integration.',
              year: 'Level 300',
              needs: ['sequences-series-uni'],
            },
            {
              id: 'complex-analysis-uni',
              title: 'Complex analysis',
              outcome: 'Use analytic functions, Cauchy’s theorem and residues to evaluate integrals.',
              year: 'Level 300',
              needs: ['real-analysis-uni'],
            },
          ],
        },
      ],
    },
    {
      id: 'algebra-uni',
      name: 'Algebra',
      purpose: 'Structure: vectors, matrices, and the abstract objects behind them.',
      subStrands: [
        {
          id: 'linear-algebra-uni',
          name: 'Linear algebra',
          topics: [
            {
              id: 'matrices-uni',
              title: 'Matrices and linear systems',
              outcome: 'Solve systems by elimination, invert matrices, and compute determinants and rank.',
              year: 'Level 100',
            },
            {
              id: 'vector-spaces-uni',
              title: 'Vector spaces and linear maps',
              outcome: 'Work with bases, dimension, kernel and image, and change of basis.',
              year: 'Level 200',
              needs: ['matrices-uni'],
            },
            {
              id: 'eigen-uni',
              title: 'Eigenvalues and diagonalisation',
              outcome: 'Find eigenvalues and eigenvectors and diagonalise a matrix where possible.',
              year: 'Level 200',
              needs: ['vector-spaces-uni'],
            },
          ],
        },
        {
          id: 'abstract-algebra-uni',
          name: 'Abstract algebra',
          topics: [
            {
              id: 'groups-uni',
              title: 'Group theory',
              outcome: 'Work with subgroups, cosets, homomorphisms and quotient groups.',
              year: 'Level 300',
              needs: ['vector-spaces-uni'],
            },
            {
              id: 'rings-fields-uni',
              title: 'Rings and fields',
              outcome: 'Work with ideals, quotient rings and polynomial rings over a field.',
              year: 'Level 300',
              needs: ['groups-uni'],
            },
          ],
        },
      ],
    },
    {
      id: 'differential-equations-uni',
      name: 'Differential Equations and Methods',
      purpose: 'Equations that describe how things change, and how to solve them.',
      subStrands: [
        {
          id: 'odes-pdes-uni',
          name: 'Differential equations',
          topics: [
            {
              id: 'odes-uni',
              title: 'Ordinary differential equations',
              outcome: 'Solve first and second order ODEs and systems, with initial conditions.',
              year: 'Level 200',
              needs: ['integration-uni'],
            },
            {
              id: 'laplace-fourier-uni',
              title: 'Laplace and Fourier methods',
              outcome: 'Use Laplace transforms and Fourier series to solve boundary value problems.',
              year: 'Level 300',
              needs: ['odes-uni'],
            },
            {
              id: 'pdes-uni',
              title: 'Partial differential equations',
              outcome: 'Solve the heat, wave and Laplace equations by separation of variables.',
              year: 'Level 300',
              needs: ['laplace-fourier-uni'],
            },
            {
              id: 'numerical-uni',
              title: 'Numerical methods',
              outcome: 'Apply root finding, interpolation, quadrature and step methods, and bound the error.',
              year: 'Level 300',
              needs: ['odes-uni'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Physics ────────────────────────────────────────────────────────────── */

register({
  subjectId: 'physics',
  stage: 'uni',
  subject: 'Physics',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'classical-uni',
      name: 'Classical Physics',
      purpose: 'Mechanics, fields and waves at the level where the maths is honest.',
      subStrands: [
        {
          id: 'mechanics-uni',
          name: 'Mechanics',
          topics: [
            {
              id: 'newtonian-uni',
              title: 'Newtonian mechanics',
              outcome: 'Solve motion problems with variable forces, momentum and energy methods.',
              year: 'Level 100',
            },
            {
              id: 'rotational-uni',
              title: 'Rotational dynamics',
              outcome: 'Use moment of inertia, torque and angular momentum, including rigid bodies.',
              year: 'Level 100',
              needs: ['newtonian-uni'],
            },
            {
              id: 'lagrangian-uni',
              title: 'Lagrangian and Hamiltonian mechanics',
              outcome: 'Derive equations of motion from a Lagrangian and use generalised coordinates.',
              year: 'Level 300',
              needs: ['rotational-uni'],
            },
            {
              id: 'oscillations-uni',
              title: 'Oscillations and waves',
              outcome: 'Analyse damped and driven oscillators, resonance, and coupled systems.',
              year: 'Level 200',
              needs: ['newtonian-uni'],
            },
          ],
        },
        {
          id: 'em-uni',
          name: 'Electromagnetism',
          topics: [
            {
              id: 'electrostatics-uni',
              title: 'Electrostatics and magnetostatics',
              outcome: 'Use Gauss’s and Ampere’s laws, potentials, and boundary conditions.',
              year: 'Level 200',
            },
            {
              id: 'maxwell-uni',
              title: 'Maxwell’s equations and electromagnetic waves',
              outcome: 'Derive the wave equation from Maxwell’s equations and describe propagation.',
              year: 'Level 300',
              needs: ['electrostatics-uni'],
            },
            {
              id: 'circuits-uni',
              title: 'Circuit theory and electronics',
              outcome: 'Analyse a.c. circuits with phasors and analyse amplifier and logic circuits.',
              year: 'Level 200',
              needs: ['electrostatics-uni'],
            },
          ],
        },
        {
          id: 'thermal-uni',
          name: 'Thermodynamics and statistical physics',
          topics: [
            {
              id: 'thermodynamics-uni',
              title: 'Thermodynamics',
              outcome: 'Apply the laws of thermodynamics, entropy and cycles to real processes.',
              year: 'Level 200',
            },
            {
              id: 'statistical-uni',
              title: 'Statistical mechanics',
              outcome: 'Derive thermodynamic quantities from partition functions and distributions.',
              year: 'Level 300',
              needs: ['thermodynamics-uni'],
            },
          ],
        },
      ],
    },
    {
      id: 'modern-uni',
      name: 'Modern Physics',
      purpose: 'Quantum mechanics, relativity, and what they are for.',
      subStrands: [
        {
          id: 'quantum-uni',
          name: 'Quantum and relativity',
          topics: [
            {
              id: 'relativity-uni',
              title: 'Special relativity',
              outcome: 'Use Lorentz transformations and relativistic energy and momentum.',
              year: 'Level 200',
              needs: ['newtonian-uni'],
            },
            {
              id: 'quantum-intro-uni',
              title: 'Quantum mechanics',
              outcome: 'Solve the Schrodinger equation for standard potentials and interpret the results.',
              year: 'Level 300',
              needs: ['oscillations-uni'],
            },
            {
              id: 'atomic-nuclear-uni',
              title: 'Atomic and nuclear physics',
              outcome: 'Explain atomic spectra, selection rules, and nuclear binding and decay.',
              year: 'Level 300',
              needs: ['quantum-intro-uni'],
            },
            {
              id: 'solid-state-uni',
              title: 'Solid state physics',
              outcome: 'Explain band structure and the behaviour of semiconductors.',
              year: 'Level 400',
              needs: ['quantum-intro-uni', 'statistical-uni'],
            },
          ],
        },
      ],
    },
    {
      id: 'methods-uni',
      name: 'Experimental and Computational Methods',
      purpose: 'Producing a number somebody else can trust.',
      subStrands: [
        {
          id: 'lab-uni',
          name: 'Laboratory and computation',
          topics: [
            {
              id: 'error-analysis-uni',
              title: 'Measurement and error analysis',
              outcome: 'Propagate uncertainty, fit a line properly, and state a result with its error.',
              year: 'Level 100',
            },
            {
              id: 'computational-uni',
              title: 'Computational physics',
              outcome: 'Simulate a physical system numerically and check the result against theory.',
              year: 'Level 300',
              needs: ['error-analysis-uni'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Chemistry ──────────────────────────────────────────────────────────── */

register({
  subjectId: 'chemistry',
  stage: 'uni',
  subject: 'Chemistry',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'physical-uni-chem',
      name: 'Physical Chemistry',
      purpose: 'The quantitative side: energy, rate and equilibrium.',
      subStrands: [
        {
          id: 'thermo-kinetics-uni',
          name: 'Thermodynamics and kinetics',
          topics: [
            {
              id: 'chem-thermo-uni',
              title: 'Chemical thermodynamics',
              outcome: 'Use enthalpy, entropy and Gibbs energy to predict whether a reaction proceeds.',
              year: 'Level 200',
            },
            {
              id: 'chem-kinetics-uni',
              title: 'Chemical kinetics',
              outcome: 'Determine rate laws experimentally and propose a consistent mechanism.',
              year: 'Level 200',
              needs: ['chem-thermo-uni'],
            },
            {
              id: 'electrochem-uni',
              title: 'Electrochemistry',
              outcome: 'Use the Nernst equation and analyse electrochemical cells and corrosion.',
              year: 'Level 300',
              needs: ['chem-thermo-uni'],
            },
            {
              id: 'quantum-chem-uni',
              title: 'Quantum chemistry and spectroscopy',
              outcome: 'Relate orbitals and molecular spectra to structure.',
              year: 'Level 300',
              needs: ['chem-kinetics-uni'],
            },
          ],
        },
      ],
    },
    {
      id: 'organic-uni-chem',
      name: 'Organic Chemistry',
      purpose: 'Carbon chemistry by mechanism rather than by memory.',
      subStrands: [
        {
          id: 'mechanisms-uni',
          name: 'Structure and mechanism',
          topics: [
            {
              id: 'structure-bonding-org-uni',
              title: 'Structure, bonding and stereochemistry',
              outcome: 'Assign stereochemistry and explain conformational preference.',
              year: 'Level 200',
            },
            {
              id: 'reaction-mechanisms-uni',
              title: 'Reaction mechanisms',
              outcome: 'Push arrows correctly for substitution, addition and elimination and justify the pathway.',
              year: 'Level 200',
              needs: ['structure-bonding-org-uni'],
            },
            {
              id: 'aromatics-uni',
              title: 'Aromatic chemistry',
              outcome: 'Predict the products and orientation of aromatic substitution.',
              year: 'Level 300',
              needs: ['reaction-mechanisms-uni'],
            },
            {
              id: 'synthesis-uni',
              title: 'Synthesis and spectroscopic identification',
              outcome: 'Plan a multi-step synthesis and identify a product from its spectra.',
              year: 'Level 300',
              needs: ['aromatics-uni'],
            },
          ],
        },
      ],
    },
    {
      id: 'inorganic-analytical-uni',
      name: 'Inorganic and Analytical Chemistry',
      purpose: 'The rest of the periodic table, and measuring what is in a sample.',
      subStrands: [
        {
          id: 'inorganic-uni',
          name: 'Inorganic and analytical',
          topics: [
            {
              id: 'coordination-uni',
              title: 'Coordination chemistry',
              outcome: 'Use crystal field theory to explain colour, magnetism and stability of complexes.',
              year: 'Level 300',
            },
            {
              id: 'main-group-uni',
              title: 'Main group and transition metal chemistry',
              outcome: 'Account for periodic trends in structure and reactivity.',
              year: 'Level 200',
            },
            {
              id: 'analytical-uni',
              title: 'Analytical chemistry',
              outcome: 'Select and apply titrimetric, gravimetric and instrumental methods, with statistics.',
              year: 'Level 300',
              needs: ['main-group-uni'],
            },
            {
              id: 'separation-uni',
              title: 'Chromatography and separation science',
              outcome: 'Choose a chromatographic method and interpret the result quantitatively.',
              year: 'Level 400',
              needs: ['analytical-uni'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Engineering Science ────────────────────────────────────────────────── */

register({
  subjectId: 'engineering',
  stage: 'uni',
  subject: 'Engineering Science',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'mechanics-eng',
      name: 'Engineering Mechanics and Materials',
      purpose: 'Whether the thing will stand up, and out of what.',
      subStrands: [
        {
          id: 'statics-strength-eng',
          name: 'Statics and strength of materials',
          topics: [
            {
              id: 'statics-eng',
              title: 'Statics',
              outcome: 'Analyse trusses, frames and beams for reactions and internal forces.',
              year: 'Level 100',
            },
            {
              id: 'dynamics-eng',
              title: 'Dynamics',
              outcome: 'Analyse kinematics and kinetics of particles and rigid bodies.',
              year: 'Level 100',
              needs: ['statics-eng'],
            },
            {
              id: 'strength-eng',
              title: 'Strength of materials',
              outcome: 'Calculate stress, strain, torsion, bending and deflection, and size a member.',
              year: 'Level 200',
              needs: ['statics-eng'],
            },
            {
              id: 'materials-eng',
              title: 'Engineering materials',
              outcome: 'Relate microstructure to properties and select a material with justification.',
              year: 'Level 200',
              needs: ['strength-eng'],
            },
          ],
        },
      ],
    },
    {
      id: 'thermofluids-eng',
      name: 'Thermofluids',
      purpose: 'Heat and flow, which is where most engineering energy goes.',
      subStrands: [
        {
          id: 'thermo-fluids-eng',
          name: 'Thermodynamics and fluid mechanics',
          topics: [
            {
              id: 'thermodynamics-eng',
              title: 'Engineering thermodynamics',
              outcome: 'Apply the laws to cycles, and calculate work, heat and efficiency.',
              year: 'Level 200',
            },
            {
              id: 'fluid-mechanics-eng',
              title: 'Fluid mechanics',
              outcome: 'Apply continuity, Bernoulli and momentum, and compute pipe losses.',
              year: 'Level 200',
              needs: ['thermodynamics-eng'],
            },
            {
              id: 'heat-transfer-eng',
              title: 'Heat transfer',
              outcome: 'Analyse conduction, convection and radiation and size a heat exchanger.',
              year: 'Level 300',
              needs: ['fluid-mechanics-eng'],
            },
          ],
        },
      ],
    },
    {
      id: 'electrical-eng',
      name: 'Electrical and Control Systems',
      purpose: 'Circuits, signals and keeping a system where you want it.',
      subStrands: [
        {
          id: 'circuits-control-eng',
          name: 'Circuits, machines and control',
          topics: [
            {
              id: 'circuit-analysis-eng',
              title: 'Circuit analysis',
              outcome: 'Analyse d.c. and a.c. circuits with network theorems and phasors.',
              year: 'Level 100',
            },
            {
              id: 'machines-eng',
              title: 'Electrical machines and power',
              outcome: 'Analyse transformers, motors and three phase power.',
              year: 'Level 300',
              needs: ['circuit-analysis-eng'],
            },
            {
              id: 'control-eng',
              title: 'Control systems',
              outcome: 'Model a system, assess stability, and tune a controller.',
              year: 'Level 300',
              needs: ['circuit-analysis-eng'],
            },
            {
              id: 'instrumentation-eng',
              title: 'Instrumentation and measurement',
              outcome: 'Select sensors and signal conditioning and quantify measurement error.',
              year: 'Level 300',
              needs: ['control-eng'],
            },
          ],
        },
      ],
    },
    {
      id: 'practice-eng',
      name: 'Engineering Practice',
      purpose: 'Design, drawing, computation and the duty that comes with the title.',
      subStrands: [
        {
          id: 'design-eng',
          name: 'Design and professional practice',
          topics: [
            {
              id: 'engineering-drawing-eng',
              title: 'Engineering drawing and CAD',
              outcome: 'Produce and read working drawings to standard, and model in CAD.',
              year: 'Level 100',
            },
            {
              id: 'numerical-eng',
              title: 'Numerical and computational methods',
              outcome: 'Solve an engineering problem numerically and validate the solution.',
              year: 'Level 200',
              needs: ['engineering-drawing-eng'],
            },
            {
              id: 'design-project-eng',
              title: 'Engineering design and project',
              outcome: 'Take a design from requirements to a justified, costed solution.',
              year: 'Level 400',
              needs: ['numerical-eng', 'strength-eng'],
            },
            {
              id: 'ethics-eng',
              title: 'Professional ethics and safety',
              outcome: 'Apply a professional code to a real case, including when to refuse.',
              year: 'Level 400',
              needs: ['design-project-eng'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Statistics ─────────────────────────────────────────────────────────── */

register({
  subjectId: 'statistics',
  stage: 'uni',
  subject: 'Statistics',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'probability-uni-stat',
      name: 'Probability',
      purpose: 'The mathematics of uncertainty, before any data arrives.',
      subStrands: [
        {
          id: 'probability-theory-uni',
          name: 'Probability theory',
          topics: [
            {
              id: 'probability-axioms-uni',
              title: 'Probability and counting',
              outcome: 'Use the axioms, conditional probability, independence and Bayes’ theorem.',
              year: 'Level 100',
            },
            {
              id: 'random-variables-uni',
              title: 'Random variables and distributions',
              outcome: 'Work with discrete and continuous distributions, expectation and variance.',
              year: 'Level 100',
              needs: ['probability-axioms-uni'],
            },
            {
              id: 'joint-distributions-uni',
              title: 'Joint distributions and limit theorems',
              outcome: 'Handle joint and marginal distributions, covariance, and the central limit theorem.',
              year: 'Level 200',
              needs: ['random-variables-uni'],
            },
          ],
        },
      ],
    },
    {
      id: 'inference-uni',
      name: 'Statistical Inference',
      purpose: 'Saying something about a population from a sample, with an honest error.',
      subStrands: [
        {
          id: 'estimation-testing-uni',
          name: 'Estimation and hypothesis testing',
          topics: [
            {
              id: 'sampling-uni',
              title: 'Sampling and sampling distributions',
              outcome: 'Choose a sampling design and derive the distribution of a statistic.',
              year: 'Level 200',
              needs: ['joint-distributions-uni'],
            },
            {
              id: 'estimation-uni',
              title: 'Point and interval estimation',
              outcome: 'Derive estimators by maximum likelihood and construct confidence intervals.',
              year: 'Level 200',
              needs: ['sampling-uni'],
            },
            {
              id: 'hypothesis-testing-uni',
              title: 'Hypothesis testing',
              outcome: 'Construct and interpret tests, and state what a p-value does and does not mean.',
              year: 'Level 200',
              needs: ['estimation-uni'],
            },
            {
              id: 'nonparametric-uni',
              title: 'Nonparametric methods',
              outcome: 'Apply rank based tests when distributional assumptions fail.',
              year: 'Level 300',
              needs: ['hypothesis-testing-uni'],
            },
          ],
        },
      ],
    },
    {
      id: 'modelling-uni-stat',
      name: 'Statistical Modelling',
      purpose: 'Relating variables, and forecasting.',
      subStrands: [
        {
          id: 'regression-uni',
          name: 'Regression and design',
          topics: [
            {
              id: 'linear-regression-uni',
              title: 'Regression analysis',
              outcome: 'Fit and diagnose linear and multiple regression models and interpret them honestly.',
              year: 'Level 300',
              needs: ['hypothesis-testing-uni'],
            },
            {
              id: 'anova-uni',
              title: 'Analysis of variance and experimental design',
              outcome: 'Design an experiment and analyse it with ANOVA.',
              year: 'Level 300',
              needs: ['linear-regression-uni'],
            },
            {
              id: 'time-series-uni',
              title: 'Time series analysis',
              outcome: 'Decompose a series and fit an ARIMA model to forecast.',
              year: 'Level 400',
              needs: ['linear-regression-uni'],
            },
            {
              id: 'multivariate-uni',
              title: 'Multivariate methods',
              outcome: 'Apply principal components and clustering and interpret the output.',
              year: 'Level 400',
              needs: ['anova-uni'],
            },
            {
              id: 'computing-stat-uni',
              title: 'Statistical computing',
              outcome: 'Carry out an analysis in R or Python and produce a reproducible report.',
              year: 'Level 200',
              needs: ['sampling-uni'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Economics ──────────────────────────────────────────────────────────── */

register({
  subjectId: 'economics',
  stage: 'uni',
  subject: 'Economics',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'micro-uni',
      name: 'Microeconomics',
      purpose: 'Choice under constraint, derived rather than asserted.',
      subStrands: [
        {
          id: 'consumer-firm-uni',
          name: 'Consumer and firm theory',
          topics: [
            {
              id: 'consumer-theory-uni',
              title: 'Consumer theory',
              outcome: 'Derive demand from utility maximisation and decompose income and substitution effects.',
              year: 'Level 200',
            },
            {
              id: 'producer-theory-uni',
              title: 'Producer theory',
              outcome: 'Derive cost and supply from the production function and cost minimisation.',
              year: 'Level 200',
              needs: ['consumer-theory-uni'],
            },
            {
              id: 'market-structure-uni',
              title: 'Market structure and general equilibrium',
              outcome: 'Compare equilibria across market structures and assess welfare.',
              year: 'Level 300',
              needs: ['producer-theory-uni'],
            },
            {
              id: 'game-theory-uni',
              title: 'Game theory and information',
              outcome: 'Find equilibria in strategic games and analyse asymmetric information.',
              year: 'Level 300',
              needs: ['market-structure-uni'],
            },
          ],
        },
      ],
    },
    {
      id: 'macro-uni',
      name: 'Macroeconomics',
      purpose: 'Output, employment, money and growth, as a system.',
      subStrands: [
        {
          id: 'macro-models-uni',
          name: 'Macroeconomic models and policy',
          topics: [
            {
              id: 'national-accounts-uni',
              title: 'National income accounting',
              outcome: 'Construct and critique the national accounts and the identities behind them.',
              year: 'Level 100',
            },
            {
              id: 'is-lm-uni',
              title: 'Aggregate demand and supply models',
              outcome: 'Use IS-LM and AD-AS to trace the effect of a shock or a policy.',
              year: 'Level 200',
              needs: ['national-accounts-uni'],
            },
            {
              id: 'money-inflation-uni',
              title: 'Money, inflation and monetary policy',
              outcome: 'Analyse monetary transmission and the inflation and unemployment trade-off.',
              year: 'Level 300',
              needs: ['is-lm-uni'],
            },
            {
              id: 'growth-uni',
              title: 'Economic growth',
              outcome: 'Use the Solow and endogenous growth models to account for cross-country differences.',
              year: 'Level 300',
              needs: ['is-lm-uni'],
            },
            {
              id: 'open-economy-uni',
              title: 'Open economy macroeconomics',
              outcome: 'Analyse exchange rate regimes and the balance of payments.',
              year: 'Level 300',
              needs: ['money-inflation-uni'],
            },
          ],
        },
      ],
    },
    {
      id: 'quantitative-uni-econ',
      name: 'Quantitative and Applied Economics',
      purpose: 'Measuring an economic claim, and applying it to Ghana.',
      subStrands: [
        {
          id: 'econometrics-uni',
          name: 'Econometrics and applied fields',
          topics: [
            {
              id: 'math-econ-uni',
              title: 'Mathematics for economists',
              outcome: 'Use optimisation, matrix algebra and dynamics on economic problems.',
              year: 'Level 200',
            },
            {
              id: 'econometrics-basic-uni',
              title: 'Econometrics',
              outcome: 'Estimate and diagnose a regression model and defend its identification.',
              year: 'Level 300',
              needs: ['math-econ-uni'],
            },
            {
              id: 'development-econ-uni',
              title: 'Development economics',
              outcome: 'Analyse poverty, inequality and a development intervention on evidence.',
              year: 'Level 300',
              needs: ['econometrics-basic-uni'],
            },
            {
              id: 'public-econ-uni',
              title: 'Public sector economics',
              outcome: 'Analyse taxation, public goods and externalities and their incidence.',
              year: 'Level 400',
              needs: ['market-structure-uni'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Computer Science ───────────────────────────────────────────────────── */

register({
  subjectId: 'computing',
  stage: 'uni',
  subject: 'Computer Science',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'programming-uni',
      name: 'Programming and Data Structures',
      purpose: 'Writing correct programs, and knowing what they cost.',
      subStrands: [
        {
          id: 'foundations-cs-uni',
          name: 'Programming foundations',
          topics: [
            {
              id: 'programming-intro-uni',
              title: 'Programming fundamentals',
              outcome: 'Write, test and debug programs using the core constructs and functions.',
              year: 'Level 100',
            },
            {
              id: 'oop-uni',
              title: 'Object oriented programming',
              outcome: 'Design with classes, inheritance and interfaces, and justify the decomposition.',
              year: 'Level 100',
              needs: ['programming-intro-uni'],
            },
            {
              id: 'data-structures-uni',
              title: 'Data structures',
              outcome: 'Implement lists, stacks, queues, trees, heaps and hash tables and choose between them.',
              year: 'Level 200',
              needs: ['oop-uni'],
            },
            {
              id: 'algorithms-uni',
              title: 'Algorithms and complexity',
              outcome: 'Analyse complexity and apply divide and conquer, greedy and dynamic programming.',
              year: 'Level 200',
              needs: ['data-structures-uni'],
            },
          ],
        },
      ],
    },
    {
      id: 'systems-uni',
      name: 'Systems',
      purpose: 'What is underneath the program.',
      subStrands: [
        {
          id: 'systems-cs-uni',
          name: 'Architecture, operating systems and networks',
          topics: [
            {
              id: 'architecture-uni',
              title: 'Computer architecture',
              outcome: 'Explain instruction execution, pipelining, caching and memory hierarchy.',
              year: 'Level 200',
              needs: ['programming-intro-uni'],
            },
            {
              id: 'operating-systems-uni',
              title: 'Operating systems',
              outcome: 'Explain processes, scheduling, memory management and concurrency, with the hazards.',
              year: 'Level 300',
              needs: ['architecture-uni'],
            },
            {
              id: 'networks-uni',
              title: 'Computer networks',
              outcome: 'Explain the layered model, TCP/IP, routing and network security.',
              year: 'Level 300',
              needs: ['operating-systems-uni'],
            },
            {
              id: 'databases-uni',
              title: 'Database systems',
              outcome: 'Design a normalised schema, write non-trivial SQL, and reason about transactions.',
              year: 'Level 200',
              needs: ['data-structures-uni'],
            },
          ],
        },
      ],
    },
    {
      id: 'theory-uni',
      name: 'Theory and Mathematics',
      purpose: 'What can be computed at all, and how to prove a program right.',
      subStrands: [
        {
          id: 'theory-cs-uni',
          name: 'Discrete mathematics and computation',
          topics: [
            {
              id: 'discrete-maths-uni',
              title: 'Discrete mathematics',
              outcome: 'Use logic, sets, relations, induction, graphs and combinatorics in proofs.',
              year: 'Level 100',
            },
            {
              id: 'automata-uni',
              title: 'Automata and formal languages',
              outcome: 'Construct automata and grammars and classify a language.',
              year: 'Level 300',
              needs: ['discrete-maths-uni'],
            },
            {
              id: 'computability-uni',
              title: 'Computability and complexity theory',
              outcome: 'Explain undecidability and reason about P, NP and reductions.',
              year: 'Level 400',
              needs: ['automata-uni'],
            },
          ],
        },
      ],
    },
    {
      id: 'applied-cs-uni',
      name: 'Applied Computing',
      purpose: 'Building things people use, and the judgement that requires.',
      subStrands: [
        {
          id: 'applied-cs-sub',
          name: 'Software, AI and security',
          topics: [
            {
              id: 'software-engineering-uni',
              title: 'Software engineering',
              outcome: 'Work through requirements, design, testing and version control on a team project.',
              year: 'Level 300',
              needs: ['oop-uni'],
            },
            {
              id: 'web-mobile-uni',
              title: 'Web and mobile development',
              outcome: 'Build a client and server application with an API and persistence.',
              year: 'Level 300',
              needs: ['databases-uni'],
            },
            {
              id: 'ai-ml-uni',
              title: 'Artificial intelligence and machine learning',
              outcome: 'Apply search, and train and evaluate a model without fooling yourself.',
              year: 'Level 400',
              needs: ['algorithms-uni'],
            },
            {
              id: 'security-uni',
              title: 'Information security and cryptography',
              outcome: 'Explain the common attack classes and apply cryptographic primitives correctly.',
              year: 'Level 400',
              needs: ['networks-uni'],
            },
          ],
        },
      ],
    },
  ],
})
