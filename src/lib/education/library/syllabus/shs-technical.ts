/**
 * Senior High School electives: the technical and engineering subjects.
 *
 * ── Why these are outlined together ───────────────────────────────────────
 *
 * Seven subjects that `subjects.ts` listed with nothing behind them. They
 * belong in one file because they share a spine: a drawing that somebody else
 * can build from, a measurement to a stated tolerance, a material chosen for
 * a reason, and a safety rule paired with the injury it prevents. Each
 * subject then adds its own matter on top of that spine.
 *
 * ── On the newer subjects ─────────────────────────────────────────────────
 *
 * Robotics, Aviation and Aerospace and Manufacturing Engineering are recent
 * additions to the SHS offering, and a school teaching them may have very
 * little equipment. So each outline is written so that the examinable part
 * can be learned on paper: a control algorithm can be traced by hand, a
 * process plan can be written, an aerofoil can be reasoned about. Where a
 * topic genuinely needs the machine, the outcome says so rather than
 * pretending otherwise.
 *
 * As everywhere in this folder: no indicator codes, and no claims about
 * papers or marks.
 */

import { register } from '../../syllabus'

const NOTE = 'A standard SHS outline, until your school adds its own.'
const PAPER = NOTE
  + ' Written so the examinable part can be learned without a workshop.'

/* ── Design and Communication Technology ─────────────────────────────────── */

register({
  subjectId: 'dct',
  stage: 'shs',
  subject: 'Design and Communication Technology',
  source: 'MODEL',
  note: NOTE + ' The drawing is the deliverable, so accuracy is the subject.',
  strands: [
    {
      id: 'dct-drawing',
      name: 'Technical drawing',
      purpose: 'Producing a drawing somebody else can build from without asking you.',
      subStrands: [
        {
          id: 'dct-basics',
          name: 'Instruments, lines and construction',
          topics: [
            {
              id: 'lines-lettering-dct',
              title: 'Line types, lettering and layout',
              outcome: 'Use the standard line types and set out a sheet with border and title block.',
              year: 'SHS 1',
            },
            {
              id: 'geometric-construction-dct',
              title: 'Geometric construction',
              outcome: 'Construct plane figures, tangents and equal divisions with compasses alone.',
              year: 'SHS 1',
            },
            {
              id: 'loci-dct',
              title: 'Loci of points and mechanisms',
              outcome: 'Plot the locus of a point on a moving mechanism.',
              year: 'SHS 2',
              needs: ['geometric-construction-dct'],
            },
          ],
        },
        {
          id: 'dct-projection',
          name: 'Projection',
          topics: [
            {
              id: 'orthographic-dct',
              title: 'Orthographic projection',
              outcome: 'Produce first and third angle views in projection, and state which you used.',
              year: 'SHS 1',
              needs: ['lines-lettering-dct'],
            },
            {
              id: 'pictorial-dct',
              title: 'Isometric and oblique drawing',
              outcome: 'Produce a pictorial view and say why its lengths cannot be measured.',
              year: 'SHS 1',
            },
            {
              id: 'sections-dct',
              title: 'Sectional views and conventions',
              outcome: 'Cut a section, hatch it correctly, and use the standard conventions.',
              year: 'SHS 2',
              needs: ['orthographic-dct'],
            },
            {
              id: 'development-dct',
              title: 'Development of surfaces',
              outcome: 'Develop the surface of a prism, cylinder and cone into a flat pattern.',
              year: 'SHS 2',
            },
            {
              id: 'interpenetration-dct',
              title: 'Interpenetration of solids',
              outcome: 'Draw the curve where two solids meet.',
              year: 'SHS 3',
              needs: ['development-dct'],
            },
          ],
        },
      ],
    },
    {
      id: 'dct-design',
      name: 'Design',
      purpose: 'Turning a need into something that can be made.',
      subStrands: [
        {
          id: 'dct-process',
          name: 'The design process',
          topics: [
            {
              id: 'design-brief-dct',
              title: 'Brief, research and specification',
              outcome: 'Write a brief stating what the article must do and for whom.',
              year: 'SHS 1',
            },
            {
              id: 'ideas-selection-dct',
              title: 'Generating and choosing ideas',
              outcome: 'Produce several ideas and justify the one chosen against the brief.',
              year: 'SHS 2',
              needs: ['design-brief-dct'],
            },
            {
              id: 'materials-dct',
              title: 'Materials and their properties',
              outcome: 'Choose a material from its properties and the way it will be worked.',
              year: 'SHS 2',
            },
            {
              id: 'cad-dct',
              title: 'Computer aided drawing',
              outcome: 'Produce a dimensioned drawing with CAD, or describe its advantages over hand drawing.',
              year: 'SHS 3',
            },
            {
              id: 'presentation-dct',
              title: 'Presenting a design',
              outcome: 'Present a design with drawings, a model or render, and a stated evaluation.',
              year: 'SHS 3',
              needs: ['ideas-selection-dct'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Applied Technology ──────────────────────────────────────────────────── */

register({
  subjectId: 'applied-technology',
  stage: 'shs',
  subject: 'Applied Technology',
  source: 'MODEL',
  note: PAPER,
  strands: [
    {
      id: 'at-materials',
      name: 'Materials and processes',
      purpose: 'What things are made of, and what can be done to them.',
      subStrands: [
        {
          id: 'at-material-choice',
          name: 'Materials',
          topics: [
            {
              id: 'wood-metal-plastic',
              title: 'Wood, metal and plastics',
              outcome: 'Name the common materials and match each to a job from its properties.',
              year: 'SHS 1',
            },
            {
              id: 'material-testing',
              title: 'Testing a material',
              outcome: 'Describe tests for hardness, strength and ductility and what each shows.',
              year: 'SHS 2',
              needs: ['wood-metal-plastic'],
            },
            {
              id: 'joining-methods',
              title: 'Joining and fastening',
              outcome: 'Choose between a temporary and a permanent joint and justify it.',
              year: 'SHS 2',
            },
            {
              id: 'finishing-protection',
              title: 'Finishing and protection',
              outcome: 'Choose a finish that suits the material and the conditions it will meet.',
              year: 'SHS 2',
            },
          ],
        },
        {
          id: 'at-workshop',
          name: 'Workshop practice',
          topics: [
            {
              id: 'marking-measuring-at',
              title: 'Marking out and measuring',
              outcome: 'Mark from one face and edge, and work to a stated tolerance.',
              year: 'SHS 1',
            },
            {
              id: 'hand-tools-at',
              title: 'Hand tools and their use',
              outcome: 'Use each tool for its own purpose and give the safety rule it carries.',
              year: 'SHS 1',
            },
            {
              id: 'machine-safety-at',
              title: 'Machine tools and safety',
              outcome: 'State the guards, procedures and stop positions a machine requires.',
              year: 'SHS 2',
              needs: ['hand-tools-at'],
            },
          ],
        },
      ],
    },
    {
      id: 'at-systems',
      name: 'Technological systems',
      purpose: 'How energy and motion are moved about and controlled.',
      subStrands: [
        {
          id: 'at-mechanisms',
          name: 'Mechanisms and energy',
          topics: [
            {
              id: 'mechanisms-at',
              title: 'Levers, gears, pulleys and linkages',
              outcome: 'Calculate mechanical advantage and velocity ratio and explain efficiency.',
              year: 'SHS 2',
            },
            {
              id: 'electrical-basics-at',
              title: 'Electrical circuits and components',
              outcome: 'Read a circuit diagram and calculate current, voltage and resistance.',
              year: 'SHS 2',
            },
            {
              id: 'pneumatics-hydraulics',
              title: 'Pneumatics and hydraulics',
              outcome: 'Explain how a fluid system multiplies a force, and read its symbols.',
              year: 'SHS 3',
              needs: ['mechanisms-at'],
            },
            {
              id: 'energy-sources-at',
              title: 'Energy sources and conversion',
              outcome: 'Trace energy through a system and account for where it is lost.',
              year: 'SHS 3',
            },
            {
              id: 'project-at',
              title: 'A made project',
              outcome: 'Take a project from brief and drawing through to a finished, evaluated article.',
              year: 'SHS 3',
              needs: ['marking-measuring-at'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Engineering ─────────────────────────────────────────────────────────── */

register({
  subjectId: 'engineering',
  stage: 'shs',
  subject: 'Engineering',
  source: 'MODEL',
  note: PAPER + ' It assumes Core Mathematics and Physics alongside.',
  strands: [
    {
      id: 'eng-science',
      name: 'Engineering science',
      purpose: 'The physics an engineer uses daily, in the form they use it.',
      subStrands: [
        {
          id: 'eng-statics',
          name: 'Forces and materials',
          topics: [
            {
              id: 'forces-moments-eng',
              title: 'Forces, moments and equilibrium',
              outcome: 'Resolve forces and apply the conditions for equilibrium to a structure.',
              year: 'SHS 1',
            },
            {
              id: 'stress-strain-eng',
              title: 'Stress, strain and elasticity',
              outcome: 'Calculate stress and strain and read a stress strain graph.',
              year: 'SHS 2',
              needs: ['forces-moments-eng'],
            },
            {
              id: 'beams-trusses',
              title: 'Beams and simple trusses',
              outcome: 'Find the reactions at supports and the force in a member.',
              year: 'SHS 3',
              needs: ['stress-strain-eng'],
            },
            {
              id: 'friction-eng',
              title: 'Friction and lubrication',
              outcome: 'Calculate friction forces and explain what a lubricant changes.',
              year: 'SHS 2',
            },
          ],
        },
        {
          id: 'eng-thermal-fluid',
          name: 'Thermal and fluid systems',
          topics: [
            {
              id: 'heat-engines-eng',
              title: 'Heat, work and engines',
              outcome: 'Describe an engine cycle and account for its efficiency.',
              year: 'SHS 3',
            },
            {
              id: 'fluids-eng',
              title: 'Fluid pressure and flow',
              outcome: 'Use pressure in a fluid and explain flow through a pipe.',
              year: 'SHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'eng-practice',
      name: 'Engineering practice',
      purpose: 'How an engineering job is actually specified, made and checked.',
      subStrands: [
        {
          id: 'eng-making',
          name: 'Drawing, measuring and making',
          topics: [
            {
              id: 'eng-drawing',
              title: 'Engineering drawing and tolerance',
              outcome: 'Produce a dimensioned drawing with tolerances and read somebody else’s.',
              year: 'SHS 1',
            },
            {
              id: 'metrology-eng',
              title: 'Measurement and instruments',
              outcome: 'Use a vernier and a micrometer, and state the uncertainty of a reading.',
              year: 'SHS 1',
            },
            {
              id: 'machining-eng',
              title: 'Machining and fabrication processes',
              outcome: 'Choose a process for a given part and justify it against cost and accuracy.',
              year: 'SHS 2',
              needs: ['eng-drawing'],
            },
            {
              id: 'maintenance-eng',
              title: 'Maintenance and failure',
              outcome: 'Distinguish planned from breakdown maintenance and explain a named failure mode.',
              year: 'SHS 3',
            },
            {
              id: 'eng-ethics-safety',
              title: 'Safety, standards and responsibility',
              outcome: 'Explain why a standard exists and what an engineer is answerable for.',
              year: 'SHS 3',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Manufacturing Engineering ───────────────────────────────────────────── */

register({
  subjectId: 'manufacturing-engineering',
  stage: 'shs',
  subject: 'Manufacturing Engineering',
  source: 'MODEL',
  note: PAPER + ' The subject is how a thing is made in quantity, not once.',
  strands: [
    {
      id: 'man-processes',
      name: 'Manufacturing processes',
      purpose: 'The ways material is turned into parts, and what each one is good for.',
      subStrands: [
        {
          id: 'man-forming',
          name: 'Forming and removing',
          topics: [
            {
              id: 'casting-moulding',
              title: 'Casting and moulding',
              outcome: 'Describe sand casting and injection moulding and what each suits.',
              year: 'SHS 1',
            },
            {
              id: 'forming-processes',
              title: 'Forming and shaping',
              outcome: 'Explain rolling, forging, bending and extrusion and the change each makes to the material.',
              year: 'SHS 2',
            },
            {
              id: 'machining-man',
              title: 'Material removal',
              outcome: 'Describe turning, milling, drilling and grinding and select one for a feature.',
              year: 'SHS 2',
            },
            {
              id: 'joining-man',
              title: 'Welding and joining',
              outcome: 'Choose a joining process and state its effect on the parent material.',
              year: 'SHS 2',
            },
            {
              id: 'additive-man',
              title: 'Additive manufacturing',
              outcome: 'Explain how a part is built up in layers and when that beats machining.',
              year: 'SHS 3',
            },
          ],
        },
        {
          id: 'man-planning',
          name: 'Planning and control',
          topics: [
            {
              id: 'process-planning',
              title: 'Process planning',
              outcome: 'Write the sequence of operations for a part, with the datum stated.',
              year: 'SHS 2',
              needs: ['machining-man'],
            },
            {
              id: 'jigs-fixtures',
              title: 'Jigs, fixtures and repeatability',
              outcome: 'Explain how a fixture makes the hundredth part the same as the first.',
              year: 'SHS 3',
              needs: ['process-planning'],
            },
            {
              id: 'quality-control-man',
              title: 'Quality control and inspection',
              outcome: 'Distinguish inspection from process control and interpret a simple control chart.',
              year: 'SHS 3',
            },
            {
              id: 'costing-man',
              title: 'Costing a manufactured part',
              outcome: 'Cost a part from material, labour, overheads and tooling, and find the break even quantity.',
              year: 'SHS 3',
            },
            {
              id: 'automation-man',
              title: 'Automation and CNC',
              outcome: 'Explain what a CNC machine is told to do, and where automation pays.',
              year: 'SHS 3',
            },
            {
              id: 'lean-waste',
              title: 'Waste and lean thinking',
              outcome: 'Identify waste in a described process and propose one change with its cost.',
              year: 'SHS 3',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Robotics ────────────────────────────────────────────────────────────── */

register({
  subjectId: 'robotics',
  stage: 'shs',
  subject: 'Robotics',
  source: 'MODEL',
  note: PAPER
    + ' Control logic can be traced on paper, which is where most of the marks are.',
  strands: [
    {
      id: 'rob-parts',
      name: 'What a robot is made of',
      purpose: 'Sensing, deciding and moving, which is all a robot ever does.',
      subStrands: [
        {
          id: 'rob-hardware',
          name: 'Sensors, actuators and controllers',
          topics: [
            {
              id: 'robot-definition',
              title: 'What makes something a robot',
              outcome: 'Distinguish a robot from a machine, by the sense, decide, act loop.',
              year: 'SHS 1',
            },
            {
              id: 'sensors-rob',
              title: 'Sensors',
              outcome: 'Choose a sensor for a stated job and say what it actually measures.',
              year: 'SHS 1',
              needs: ['robot-definition'],
            },
            {
              id: 'actuators-rob',
              title: 'Motors and actuators',
              outcome: 'Choose between a DC motor, a servo and a stepper for a given movement.',
              year: 'SHS 1',
            },
            {
              id: 'microcontroller-rob',
              title: 'The microcontroller',
              outcome: 'Describe how a controller reads an input and drives an output.',
              year: 'SHS 2',
              needs: ['sensors-rob'],
            },
            {
              id: 'power-rob',
              title: 'Power and electrical safety',
              outcome: 'Calculate the current a drive needs and state the protection required.',
              year: 'SHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'rob-control',
      name: 'Control and programming',
      purpose: 'Telling the machine what to do, exactly, including when things go wrong.',
      subStrands: [
        {
          id: 'rob-logic',
          name: 'Logic and algorithms',
          topics: [
            {
              id: 'flowchart-rob',
              title: 'Algorithms and flowcharts for control',
              outcome: 'Write a control algorithm and trace every path to a stop.',
              year: 'SHS 1',
            },
            {
              id: 'conditions-loops-rob',
              title: 'Selection and repetition in control',
              outcome: 'Use conditions and loops, and predict the behaviour by tracing.',
              year: 'SHS 2',
              needs: ['flowchart-rob'],
            },
            {
              id: 'feedback-rob',
              title: 'Open and closed loop control',
              outcome: 'Explain what feedback adds, and what happens without it.',
              year: 'SHS 2',
              needs: ['conditions-loops-rob'],
            },
            {
              id: 'calibration-rob',
              title: 'Calibration and error',
              outcome: 'Explain why a sensor reading must be calibrated and how drift is handled.',
              year: 'SHS 3',
              needs: ['feedback-rob'],
            },
            {
              id: 'rob-project',
              title: 'A built or simulated robot',
              outcome: 'Specify, build or simulate a robot for a task and evaluate it honestly.',
              year: 'SHS 3',
            },
            {
              id: 'robots-work',
              title: 'Robots, work and responsibility',
              outcome: 'Argue a position on automation and jobs, using evidence rather than assertion.',
              year: 'SHS 3',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Aviation and Aerospace Engineering ──────────────────────────────────── */

register({
  subjectId: 'aviation-aerospace',
  stage: 'shs',
  subject: 'Aviation and Aerospace Engineering',
  source: 'MODEL',
  note: PAPER + ' Flight can be reasoned about from forces, which is how it is taught here.',
  strands: [
    {
      id: 'av-flight',
      name: 'How flight works',
      purpose: 'The four forces, and what a pilot or designer can do to each.',
      subStrands: [
        {
          id: 'av-forces',
          name: 'Forces and aerofoils',
          topics: [
            {
              id: 'four-forces',
              title: 'Lift, weight, thrust and drag',
              outcome: 'Explain steady flight as a balance of four forces and what changes each.',
              year: 'SHS 1',
            },
            {
              id: 'aerofoil',
              title: 'The aerofoil and angle of attack',
              outcome: 'Explain how a wing generates lift and what happens past the stall angle.',
              year: 'SHS 1',
              needs: ['four-forces'],
            },
            {
              id: 'drag-types',
              title: 'Types of drag',
              outcome: 'Distinguish induced from parasite drag and say how each is reduced.',
              year: 'SHS 2',
              needs: ['aerofoil'],
            },
            {
              id: 'stability-control',
              title: 'Stability and control surfaces',
              outcome: 'Name the three axes and the surface that controls each.',
              year: 'SHS 2',
            },
          ],
        },
        {
          id: 'av-atmosphere',
          name: 'Atmosphere and propulsion',
          topics: [
            {
              id: 'atmosphere-av',
              title: 'The atmosphere and altitude',
              outcome: 'Explain how pressure, density and temperature change with height, and what that does to performance.',
              year: 'SHS 2',
            },
            {
              id: 'propulsion-av',
              title: 'Propellers and jet engines',
              outcome: 'Describe how each produces thrust and where each is efficient.',
              year: 'SHS 2',
            },
            {
              id: 'rockets-space',
              title: 'Rockets and spaceflight',
              outcome: 'Explain why a rocket needs no air, and what an orbit actually is.',
              year: 'SHS 3',
              needs: ['propulsion-av'],
            },
          ],
        },
      ],
    },
    {
      id: 'av-practice',
      name: 'Aircraft, airspace and safety',
      purpose: 'The industry the engineering sits inside.',
      subStrands: [
        {
          id: 'av-systems',
          name: 'Structures, systems and operations',
          topics: [
            {
              id: 'structures-av',
              title: 'Aircraft structures and materials',
              outcome: 'Explain why aircraft materials are chosen for strength against weight.',
              year: 'SHS 2',
            },
            {
              id: 'instruments-av',
              title: 'Instruments and navigation',
              outcome: 'Explain what the basic instruments measure and how a course is set.',
              year: 'SHS 3',
            },
            {
              id: 'maintenance-av',
              title: 'Maintenance and airworthiness',
              outcome: 'Explain why maintenance is scheduled by hours and cycles rather than by fault.',
              year: 'SHS 3',
            },
            {
              id: 'safety-culture-av',
              title: 'Safety culture and incident investigation',
              outcome: 'Explain why incidents are investigated without blame, and what that achieves.',
              year: 'SHS 3',
            },
            {
              id: 'aviation-ghana',
              title: 'Aviation in Ghana',
              outcome: 'Describe Ghana’s aviation sector and the careers in it.',
              year: 'SHS 1',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Computing (elective) ────────────────────────────────────────────────── */

register({
  subjectId: 'computing',
  stage: 'shs',
  subject: 'Computing',
  source: 'MODEL',
  note: NOTE
    + ' This is the programming elective; ICT covers the applications course.',
  strands: [
    {
      id: 'comp-programming',
      name: 'Programming',
      purpose: 'Writing something that works, and finding out why when it does not.',
      subStrands: [
        {
          id: 'comp-foundations',
          name: 'Foundations of programming',
          topics: [
            {
              id: 'variables-types',
              title: 'Variables, types and expressions',
              outcome: 'Declare variables of the right type and evaluate an expression by hand.',
              year: 'SHS 1',
            },
            {
              id: 'control-structures',
              title: 'Sequence, selection and repetition',
              outcome: 'Use conditions and loops, and predict output by tracing line by line.',
              year: 'SHS 1',
              needs: ['variables-types'],
            },
            {
              id: 'functions-comp',
              title: 'Functions and parameters',
              outcome: 'Write a function with parameters and a return value, and say why that is better than repeating code.',
              year: 'SHS 1',
              needs: ['control-structures'],
            },
            {
              id: 'arrays-lists',
              title: 'Arrays and lists',
              outcome: 'Store and process a collection, including searching and summing it.',
              year: 'SHS 2',
              needs: ['control-structures'],
            },
            {
              id: 'strings-comp',
              title: 'Strings and text processing',
              outcome: 'Manipulate text, including splitting, joining and searching.',
              year: 'SHS 2',
            },
            {
              id: 'files-comp',
              title: 'Reading and writing files',
              outcome: 'Read data from a file, process it, and write the result back.',
              year: 'SHS 2',
              needs: ['arrays-lists'],
            },
            {
              id: 'debugging-comp',
              title: 'Testing and debugging',
              outcome: 'Locate a fault by finding the last point known to be correct.',
              year: 'SHS 2',
            },
          ],
        },
        {
          id: 'comp-algorithms',
          name: 'Algorithms and data',
          topics: [
            {
              id: 'searching-sorting',
              title: 'Searching and sorting',
              outcome: 'Trace a linear and a binary search, and one sorting algorithm, and compare their work.',
              year: 'SHS 3',
              needs: ['arrays-lists'],
            },
            {
              id: 'efficiency-comp',
              title: 'Efficiency of an algorithm',
              outcome: 'Say how the work grows with the size of the input, and why that matters more than speed of machine.',
              year: 'SHS 3',
              needs: ['searching-sorting'],
            },
            {
              id: 'data-structures-shs',
              title: 'Stacks, queues and records',
              outcome: 'Choose a structure for a stated problem and justify it.',
              year: 'SHS 3',
            },
          ],
        },
      ],
    },
    {
      id: 'comp-systems',
      name: 'Systems and data',
      purpose: 'What the machine is doing underneath, and how data is kept.',
      subStrands: [
        {
          id: 'comp-machine',
          name: 'The machine and its data',
          topics: [
            {
              id: 'number-systems-comp',
              title: 'Binary, hexadecimal and data representation',
              outcome: 'Convert between bases and explain how text, images and sound are stored.',
              year: 'SHS 1',
            },
            {
              id: 'logic-gates-comp',
              title: 'Logic gates and truth tables',
              outcome: 'Build a truth table for a combination of gates and simplify a simple expression.',
              year: 'SHS 2',
              needs: ['number-systems-comp'],
            },
            {
              id: 'architecture-comp',
              title: 'Computer architecture',
              outcome: 'Describe the fetch, decode, execute cycle and the role of memory.',
              year: 'SHS 2',
            },
            {
              id: 'databases-comp',
              title: 'Databases and queries',
              outcome: 'Design a table with a sensible key and query it for an answer.',
              year: 'SHS 2',
            },
            {
              id: 'web-comp',
              title: 'Web technologies',
              outcome: 'Build a page with structured markup and explain what the browser and server each do.',
              year: 'SHS 3',
            },
            {
              id: 'security-comp',
              title: 'Security and privacy',
              outcome: 'Explain how an account is attacked and defended, and what encryption does.',
              year: 'SHS 3',
            },
            {
              id: 'ai-comp',
              title: 'Artificial intelligence and its limits',
              outcome: 'Explain in outline how a model is trained, and name two things it cannot be trusted with.',
              year: 'SHS 3',
            },
          ],
        },
      ],
    },
  ],
})
