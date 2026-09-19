/**
 * Technical and vocational training.
 *
 * Outlined differently from the academic stages on purpose. A TVET learner is
 * training for a trade, so every outcome here ends in something done to a
 * material or a machine, to a tolerance, safely. Trade Calculations is not
 * Mathematics with workshop pictures on it: the quantity being calculated is
 * always one somebody has to cut, mix, bill or order.
 *
 * `api/prompt.js` already carries this instruction for the trade-calc subject,
 * so the tutor keeps every worked example to a real workshop quantity.
 *
 * Years are labelled Year 1 to Year 3, since TVET programmes are counted that
 * way rather than by form.
 */

import { register } from '../../syllabus'

const NOTE = 'A standard trade training outline, until your institution adds its own.'

/* ── Trade Calculations ──────────────────────────────────────────────────── */

register({
  subjectId: 'trade-calc',
  stage: 'tvet',
  subject: 'Trade Calculations',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'arithmetic-trade',
      name: 'Workshop Arithmetic',
      purpose: 'The number work a job actually demands, done quickly and right.',
      subStrands: [
        {
          id: 'basic-trade',
          name: 'Number and measurement',
          topics: [
            {
              id: 'units-trade',
              title: 'Units and conversion',
              outcome: 'Convert between mm, cm, m, and between grams and kilograms, without slipping a decimal.',
              year: 'Year 1',
            },
            {
              id: 'measuring-trade',
              title: 'Reading measuring instruments',
              outcome: 'Read a rule, tape, vernier caliper and micrometer to their stated precision.',
              year: 'Year 1',
              needs: ['units-trade'],
            },
            {
              id: 'fractions-decimals-trade',
              title: 'Fractions and decimals on the job',
              outcome: 'Work in fractions of an inch and in decimals, and convert between them.',
              year: 'Year 1',
              needs: ['units-trade'],
            },
            {
              id: 'tolerance-trade',
              title: 'Tolerance and allowance',
              outcome: 'Read a tolerance, decide whether a finished piece is within it, and allow for saw kerf.',
              year: 'Year 2',
              needs: ['measuring-trade'],
            },
            {
              id: 'percentage-trade',
              title: 'Percentage, waste and efficiency',
              outcome: 'Add a wastage allowance to a material order and calculate efficiency.',
              year: 'Year 2',
              needs: ['fractions-decimals-trade'],
            },
          ],
        },
        {
          id: 'ratio-trade',
          name: 'Ratio, proportion and mixing',
          topics: [
            {
              id: 'mix-ratios-trade',
              title: 'Mix ratios',
              outcome: 'Batch concrete or mortar to a given ratio and scale it to the volume needed.',
              year: 'Year 1',
              needs: ['units-trade'],
            },
            {
              id: 'scale-trade',
              title: 'Scale and drawing scales',
              outcome: 'Convert between a drawing at a stated scale and the real dimension.',
              year: 'Year 2',
              needs: ['mix-ratios-trade'],
            },
            {
              id: 'gear-pulley-trade',
              title: 'Gear and pulley ratios',
              outcome: 'Calculate output speed through a gear train or pulley drive.',
              year: 'Year 3',
              needs: ['scale-trade'],
            },
          ],
        },
      ],
    },
    {
      id: 'mensuration-trade',
      name: 'Mensuration and Materials',
      purpose: 'How much material a job takes, and what it will cost.',
      subStrands: [
        {
          id: 'quantities-trade',
          name: 'Quantities and costing',
          topics: [
            {
              id: 'length-area-trade',
              title: 'Length and area of materials',
              outcome: 'Calculate board feet, sheet area and the number of blocks for a wall.',
              year: 'Year 1',
              needs: ['units-trade'],
            },
            {
              id: 'volume-trade',
              title: 'Volume and capacity',
              outcome: 'Calculate concrete volume, tank capacity and the mass of a material from its density.',
              year: 'Year 2',
              needs: ['length-area-trade'],
            },
            {
              id: 'costing-trade',
              title: 'Costing and estimating',
              outcome: 'Price a job from materials, labour and overhead, and add a margin.',
              year: 'Year 2',
              needs: ['volume-trade', 'percentage-trade'],
            },
            {
              id: 'bill-quantities-trade',
              title: 'Taking off quantities',
              outcome: 'Take quantities off a drawing and produce an orderable materials list.',
              year: 'Year 3',
              needs: ['costing-trade'],
            },
          ],
        },
      ],
    },
    {
      id: 'applied-trade',
      name: 'Applied Geometry and Mechanics',
      purpose: 'The geometry and physics a trade uses daily, with numbers.',
      subStrands: [
        {
          id: 'geometry-trade',
          name: 'Trade geometry',
          topics: [
            {
              id: 'right-angles-trade',
              title: 'Squaring and setting out',
              outcome: 'Set out a right angle on site using the 3, 4, 5 method and check the diagonals.',
              year: 'Year 1',
              needs: ['length-area-trade'],
            },
            {
              id: 'trig-trade',
              title: 'Trigonometry for angles and slopes',
              outcome: 'Find a roof pitch, rafter length or pipe offset using trigonometry.',
              year: 'Year 2',
              needs: ['right-angles-trade'],
            },
            {
              id: 'pipe-sheet-development',
              title: 'Development of pipes and sheet metal',
              outcome: 'Mark out a pattern for a duct, cone or elbow from its dimensions.',
              year: 'Year 3',
              needs: ['trig-trade'],
            },
          ],
        },
        {
          id: 'mechanics-trade',
          name: 'Forces and power',
          topics: [
            {
              id: 'force-machines-trade',
              title: 'Levers, pulleys and mechanical advantage',
              outcome: 'Calculate mechanical advantage and the effort a lift actually needs.',
              year: 'Year 2',
              needs: ['units-trade'],
            },
            {
              id: 'electrical-calc-trade',
              title: 'Electrical calculations',
              outcome: 'Use Ohm’s law and the power formula to size a cable or check a load.',
              year: 'Year 3',
              needs: ['force-machines-trade'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Technical Drawing ──────────────────────────────────────────────────── */

register({
  subjectId: 'tech-drawing',
  stage: 'tvet',
  subject: 'Technical Drawing',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'basics-td',
      name: 'Drawing Practice',
      purpose: 'Drawing to a convention, so anybody in the trade reads it the same way.',
      subStrands: [
        {
          id: 'conventions-td',
          name: 'Instruments and conventions',
          topics: [
            {
              id: 'instruments-td',
              title: 'Instruments, lines and lettering',
              outcome: 'Use the instruments correctly and apply the standard line types and lettering.',
              year: 'Year 1',
            },
            {
              id: 'dimensioning-td',
              title: 'Dimensioning and scales',
              outcome: 'Dimension a drawing to convention, without ambiguity or repetition.',
              year: 'Year 1',
              needs: ['instruments-td'],
            },
            {
              id: 'geometric-construction-td',
              title: 'Geometric construction',
              outcome: 'Bisect, divide, and construct polygons and tangents accurately.',
              year: 'Year 1',
              needs: ['instruments-td'],
            },
          ],
        },
      ],
    },
    {
      id: 'projection-td',
      name: 'Projection',
      purpose: 'Showing a three dimensional object on flat paper.',
      subStrands: [
        {
          id: 'views-td',
          name: 'Orthographic and pictorial projection',
          topics: [
            {
              id: 'orthographic-td',
              title: 'Orthographic projection',
              outcome: 'Draw first and third angle views of an object and label the projection used.',
              year: 'Year 1',
              needs: ['dimensioning-td'],
            },
            {
              id: 'pictorial-td',
              title: 'Isometric and oblique drawing',
              outcome: 'Produce an isometric drawing from given orthographic views.',
              year: 'Year 2',
              needs: ['orthographic-td'],
            },
            {
              id: 'sections-td',
              title: 'Sectional views',
              outcome: 'Draw a section, hatch it correctly, and choose where to cut.',
              year: 'Year 2',
              needs: ['orthographic-td'],
            },
            {
              id: 'auxiliary-td',
              title: 'Auxiliary views and true shape',
              outcome: 'Project an auxiliary view to show the true shape of an inclined face.',
              year: 'Year 3',
              needs: ['sections-td'],
            },
          ],
        },
        {
          id: 'development-td',
          name: 'Developments and intersections',
          topics: [
            {
              id: 'surface-development-td',
              title: 'Development of surfaces',
              outcome: 'Develop the surface of a prism, cylinder, cone or transition piece.',
              year: 'Year 3',
              needs: ['auxiliary-td'],
            },
            {
              id: 'interpenetration-td',
              title: 'Intersection of solids',
              outcome: 'Draw the curve of intersection where two solids meet.',
              year: 'Year 3',
              needs: ['surface-development-td'],
            },
          ],
        },
      ],
    },
    {
      id: 'applied-td',
      name: 'Applied and Computer Aided Drawing',
      purpose: 'Working drawings that a workshop or site can actually build from.',
      subStrands: [
        {
          id: 'working-drawings-td',
          name: 'Working drawings and CAD',
          topics: [
            {
              id: 'assembly-td',
              title: 'Assembly and detail drawings',
              outcome: 'Produce an assembly drawing with a parts list and fits and clearances shown.',
              year: 'Year 3',
              needs: ['sections-td'],
            },
            {
              id: 'building-drawings-td',
              title: 'Building drawings',
              outcome: 'Read and produce a plan, elevation and section of a simple building.',
              year: 'Year 2',
              needs: ['orthographic-td'],
            },
            {
              id: 'cad-td',
              title: 'Computer aided drawing',
              outcome: 'Produce a dimensioned drawing in CAD and plot it to scale.',
              year: 'Year 3',
              needs: ['assembly-td'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Workshop Practice ──────────────────────────────────────────────────── */

register({
  subjectId: 'workshop',
  stage: 'tvet',
  subject: 'Workshop Practice',
  source: 'MODEL',
  note: NOTE + ' Safety is the first topic for a reason and is not optional.',
  strands: [
    {
      id: 'safety-ws',
      name: 'Safety and the Workshop',
      purpose: 'Going home with the same number of fingers you arrived with.',
      subStrands: [
        {
          id: 'safety-practice-ws',
          name: 'Safety and organisation',
          topics: [
            {
              id: 'workshop-safety-ws',
              title: 'Workshop safety and protective equipment',
              outcome: 'Identify hazards, use the right protective equipment, and state the rule behind each.',
              year: 'Year 1',
            },
            {
              id: 'first-aid-ws',
              title: 'First aid and emergency procedure',
              outcome: 'Deal with a cut, burn or shock correctly and know the reporting procedure.',
              year: 'Year 1',
              needs: ['workshop-safety-ws'],
            },
            {
              id: 'housekeeping-ws',
              title: 'Workshop organisation and care of tools',
              outcome: 'Store, clean and maintain tools, and keep a work area that does not cause accidents.',
              year: 'Year 1',
              needs: ['workshop-safety-ws'],
            },
          ],
        },
      ],
    },
    {
      id: 'handtools-ws',
      name: 'Hand and Machine Tools',
      purpose: 'Using each tool for what it is for, competently.',
      subStrands: [
        {
          id: 'tools-ws',
          name: 'Tools and processes',
          topics: [
            {
              id: 'marking-out-ws',
              title: 'Measuring and marking out',
              outcome: 'Mark out work accurately from a drawing using the right marking tools.',
              year: 'Year 1',
              needs: ['housekeeping-ws'],
            },
            {
              id: 'cutting-ws',
              title: 'Cutting, filing and finishing',
              outcome: 'Cut and file to a line within tolerance and finish a surface properly.',
              year: 'Year 1',
              needs: ['marking-out-ws'],
            },
            {
              id: 'drilling-ws',
              title: 'Drilling and threading',
              outcome: 'Drill to size and cut an internal and external thread.',
              year: 'Year 2',
              needs: ['cutting-ws'],
            },
            {
              id: 'machine-tools-ws',
              title: 'Machine tools',
              outcome: 'Set up and operate a lathe or drilling machine safely for a simple job.',
              year: 'Year 2',
              needs: ['drilling-ws'],
            },
          ],
        },
      ],
    },
    {
      id: 'joining-ws',
      name: 'Joining and Fabrication',
      purpose: 'Making two pieces into one, so it holds.',
      subStrands: [
        {
          id: 'joining-processes-ws',
          name: 'Joining processes',
          topics: [
            {
              id: 'welding-ws',
              title: 'Welding and brazing',
              outcome: 'Produce a sound joint by arc or gas welding and identify a defective weld.',
              year: 'Year 2',
              needs: ['workshop-safety-ws'],
            },
            {
              id: 'fasteners-ws',
              title: 'Mechanical fasteners',
              outcome: 'Select and use bolts, rivets and adhesives appropriately for a joint.',
              year: 'Year 2',
              needs: ['drilling-ws'],
            },
            {
              id: 'wood-joints-ws',
              title: 'Wood joints',
              outcome: 'Cut and fit common joints so they close without gaps.',
              year: 'Year 2',
              needs: ['cutting-ws'],
            },
            {
              id: 'sheet-metal-ws',
              title: 'Sheet metal work',
              outcome: 'Mark out, cut, bend and seam sheet metal into an article.',
              year: 'Year 3',
              needs: ['fasteners-ws'],
            },
          ],
        },
      ],
    },
    {
      id: 'project-ws',
      name: 'Materials and Project Work',
      purpose: 'Taking a job from brief to a finished, inspected article.',
      subStrands: [
        {
          id: 'materials-project-ws',
          name: 'Materials and projects',
          topics: [
            {
              id: 'materials-ws',
              title: 'Engineering materials',
              outcome: 'Choose a material for a job from its properties and say what you traded away.',
              year: 'Year 2',
            },
            {
              id: 'heat-treatment-ws',
              title: 'Heat treatment and finishing',
              outcome: 'Harden, temper or anneal a steel part and apply a protective finish.',
              year: 'Year 3',
              needs: ['materials-ws'],
            },
            {
              id: 'maintenance-ws',
              title: 'Maintenance and fault finding',
              outcome: 'Carry out planned maintenance and trace a fault to its cause.',
              year: 'Year 3',
              needs: ['machine-tools-ws'],
            },
            {
              id: 'project-work-ws',
              title: 'Project work',
              outcome: 'Plan, cost, make and inspect a project against its drawing.',
              year: 'Year 3',
              needs: ['heat-treatment-ws', 'sheet-metal-ws'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Applied Science ────────────────────────────────────────────────────── */

register({
  subjectId: 'applied-science',
  stage: 'tvet',
  subject: 'Applied Science',
  source: 'MODEL',
  note: NOTE,
  strands: [
    {
      id: 'matter-as',
      name: 'Matter and Materials',
      purpose: 'Why materials behave the way the workshop finds them behaving.',
      subStrands: [
        {
          id: 'properties-as',
          name: 'Properties of materials',
          topics: [
            {
              id: 'structure-as',
              title: 'Structure of matter',
              outcome: 'Explain solids, liquids and gases by particle arrangement, and relate it to strength.',
              year: 'Year 1',
            },
            {
              id: 'mechanical-properties-as',
              title: 'Mechanical properties',
              outcome: 'Define strength, hardness, ductility and toughness and say which a job needs.',
              year: 'Year 1',
              needs: ['structure-as'],
            },
            {
              id: 'corrosion-as',
              title: 'Corrosion and protection',
              outcome: 'Explain rusting as a chemical process and evaluate methods of prevention.',
              year: 'Year 2',
              needs: ['mechanical-properties-as'],
            },
            {
              id: 'acids-bases-as',
              title: 'Acids, bases and solutions',
              outcome: 'Handle workshop chemicals safely and explain pH and neutralisation.',
              year: 'Year 2',
              needs: ['structure-as'],
            },
          ],
        },
      ],
    },
    {
      id: 'energy-as',
      name: 'Energy, Heat and Electricity',
      purpose: 'The physics behind the machines being operated.',
      subStrands: [
        {
          id: 'physics-as',
          name: 'Heat, mechanics and electricity',
          topics: [
            {
              id: 'heat-as',
              title: 'Heat and expansion',
              outcome: 'Calculate expansion and explain why it must be allowed for in a structure.',
              year: 'Year 1',
              needs: ['structure-as'],
            },
            {
              id: 'forces-as',
              title: 'Forces, moments and equilibrium',
              outcome: 'Resolve forces and calculate a moment to check a structure or a lift.',
              year: 'Year 2',
              needs: ['heat-as'],
            },
            {
              id: 'energy-work-as',
              title: 'Work, energy, power and efficiency',
              outcome: 'Calculate power and efficiency for a real machine and account for the loss.',
              year: 'Year 2',
              needs: ['forces-as'],
            },
            {
              id: 'electricity-as',
              title: 'Electricity and magnetism',
              outcome: 'Use Ohm’s law, explain earthing and fuses, and describe how a motor works.',
              year: 'Year 3',
              needs: ['energy-work-as'],
            },
            {
              id: 'fluids-as',
              title: 'Fluids, pressure and hydraulics',
              outcome: 'Use pressure in fluids and explain a hydraulic or pneumatic system.',
              year: 'Year 3',
              needs: ['forces-as'],
            },
          ],
        },
      ],
    },
    {
      id: 'health-env-as',
      name: 'Health, Safety and Environment',
      purpose: 'The science behind the safety rules, so they are followed for a reason.',
      subStrands: [
        {
          id: 'safety-science-as',
          name: 'Occupational health and environment',
          topics: [
            {
              id: 'hazards-as',
              title: 'Chemical and physical hazards',
              outcome: 'Read a safety data sheet and explain the harm a named hazard does.',
              year: 'Year 2',
              needs: ['acids-bases-as'],
            },
            {
              id: 'waste-as',
              title: 'Waste, pollution and disposal',
              outcome: 'Dispose of workshop waste lawfully and explain the environmental reason.',
              year: 'Year 3',
              needs: ['hazards-as'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Entrepreneurship ───────────────────────────────────────────────────── */

register({
  subjectId: 'entrepreneurship',
  stage: 'tvet',
  subject: 'Entrepreneurship',
  source: 'MODEL',
  note: NOTE + ' Aimed at running your own workshop rather than at an examination.',
  strands: [
    {
      id: 'idea-ent',
      name: 'Opportunity and the Business Idea',
      purpose: 'Finding work worth doing, and proving somebody will pay for it.',
      subStrands: [
        {
          id: 'opportunity-ent',
          name: 'Opportunity',
          topics: [
            {
              id: 'entrepreneur-ent',
              title: 'The entrepreneur',
              outcome: 'Describe what entrepreneurs do and assess your own readiness honestly.',
              year: 'Year 1',
            },
            {
              id: 'opportunity-id-ent',
              title: 'Identifying an opportunity',
              outcome: 'Find an unmet need your trade could serve in your own community.',
              year: 'Year 1',
              needs: ['entrepreneur-ent'],
            },
            {
              id: 'market-research-ent',
              title: 'Market research',
              outcome: 'Ask real potential customers the right questions and act on the answers.',
              year: 'Year 2',
              needs: ['opportunity-id-ent'],
            },
          ],
        },
      ],
    },
    {
      id: 'running-ent',
      name: 'Setting Up and Running',
      purpose: 'The practical machinery of a small business.',
      subStrands: [
        {
          id: 'operations-ent',
          name: 'Setting up and operating',
          topics: [
            {
              id: 'registration-ent',
              title: 'Registering and legal requirements',
              outcome: 'Describe how to register a business in Ghana and what licences a trade needs.',
              year: 'Year 2',
              needs: ['market-research-ent'],
            },
            {
              id: 'costing-pricing-ent',
              title: 'Costing and pricing',
              outcome: 'Cost a job properly, including your own time, and price it to make a profit.',
              year: 'Year 2',
              needs: ['market-research-ent'],
            },
            {
              id: 'records-ent',
              title: 'Records and cash flow',
              outcome: 'Keep books for a small workshop and forecast whether cash will run out.',
              year: 'Year 3',
              needs: ['costing-pricing-ent'],
            },
            {
              id: 'finance-ent',
              title: 'Raising finance',
              outcome: 'Compare savings, susu, a bank loan and a grant, and prepare what a lender asks for.',
              year: 'Year 3',
              needs: ['records-ent'],
            },
            {
              id: 'marketing-ent',
              title: 'Marketing and customer care',
              outcome: 'Win and keep customers, including how to handle a complaint.',
              year: 'Year 2',
              needs: ['costing-pricing-ent'],
            },
            {
              id: 'business-plan-ent',
              title: 'Writing a business plan',
              outcome: 'Write a plan for your own trade business with real numbers in it.',
              year: 'Year 3',
              needs: ['finance-ent', 'marketing-ent'],
            },
          ],
        },
      ],
    },
  ],
})
