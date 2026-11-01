/**
 * Stored lessons for the SHS 1 life science electives: Biomedical Science,
 * Physical Education and Health (elective), and Agricultural Science.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── Why these three sit together ─────────────────────────────────────────
 *
 * Because they all turn on the same move, and it is the move that carries
 * the marks: name a structure, then say what that structure lets the thing
 * do. A ciliated cell sweeps. A hinge joint allows one plane of movement
 * and no other. A clay rich horizon holds water and starves the root of
 * air. In all three subjects a learner who names the part without naming
 * the consequence has written half an answer, and in all three the fix is
 * the same sentence pattern. So the nine lessons are built to drill it.
 *
 * ── Where they overlap Biology, and how they differ ──────────────────────
 *
 * Biology has cells, homeostasis and nutrition of its own. These lessons
 * do not repeat that treatment. Biomedical Science takes the body at the
 * level a nursing or laboratory course assumes, which means the four
 * tissue types by name and the feedback loop with its four parts labelled.
 * The PEH elective takes the same heart and lungs and asks what changes
 * under load, with the arithmetic. Agricultural Science takes soil and
 * nutrition as a system to be diagnosed in a field, which is why the
 * nutrient lesson is built around where on the plant a symptom appears
 * rather than around a list.
 *
 * ── Equipment ────────────────────────────────────────────────────────────
 *
 * Honesty matters more here than anywhere else in the library. A school
 * with no microscope cannot look at a tissue, and a school with no
 * incubator cannot culture anything. So the tissue lesson is written to be
 * learned from a labelled drawing, which is what the examination shows
 * anyway, and the laboratory safety lesson says plainly which precautions
 * a school can practise with water and a bucket and which need a cabinet
 * it will not have. The agricultural lessons need a soil pit, a hand lens
 * and a crop in a field, all of which a school with a plot has. Nothing
 * here asks a teacher to pretend.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── Biomedical Science: cells, tissues and organs ───────────────────────── */

teach({
  topicId: 'cells-tissues-bms',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Cells of one kind working together make a tissue. '
      + 'Tissues make an organ. '
      + 'Organs make a system. '
      + 'There are four main tissue types: '
      + 'epithelial, which covers and lines, '
      + 'connective, which joins and supports, '
      + 'muscle, which shortens, '
      + 'and nervous, which carries signals. '
      + 'Name the structural feature, then say what it lets the tissue do.',
    method: [
      'Name the tissue type.',
      'Name one structural feature you can see.',
      'Say what that feature lets the tissue do.',
    ],
  },

  idea:
    'The body is organised in levels. '
    + 'A cell is the smallest living unit. '
    + 'Many cells of the same kind, working together, form a tissue. '
    + 'Several tissues together form an organ, such as the stomach. '
    + 'Several organs working at one job form a system, '
    + 'such as the digestive system. '
    + 'There are four main tissue types in the human body. '
    + 'Epithelial tissue covers surfaces and lines tubes and cavities. '
    + 'Connective tissue joins, supports and separates, '
    + 'and it includes bone, cartilage, tendon, fat and blood. '
    + 'Muscle tissue shortens when it is stimulated, '
    + 'and comes as skeletal, smooth and cardiac. '
    + 'Nervous tissue carries electrical signals, '
    + 'and is made of neurones and supporting cells. '
    + 'Each type has a shape that suits its job, '
    + 'and that pairing is what the subject is about.',

  mechanism:
    'The whole of this topic is one sentence pattern, '
    + 'and an answer that does not use it loses most of its marks. '
    + 'The pattern is: this tissue has this feature, '
    + 'so it can do this. '
    + 'Take the lining of the windpipe. '
    + 'Saying it is epithelial tissue earns almost nothing. '
    + 'Saying it is ciliated columnar epithelium, '
    + 'so the cilia beat upwards '
    + 'and sweep mucus with trapped dust out of the airway, '
    + 'earns the question. '
    + 'The feature and the consequence are two separate marks, '
    + 'and most learners write the first and stop. '
    + 'Take the lining of an air sac in the lung. '
    + 'It is simple squamous epithelium, '
    + 'which is one cell thick and flat, '
    + 'so a gas crosses it in a very short distance. '
    + 'Change the feature and the function fails: '
    + 'a thick lining would slow the oxygen down, '
    + 'which is exactly what happens in a scarred lung. '
    + 'The second thing to get right is that blood is connective tissue. '
    + 'Learners refuse this because blood is liquid, '
    + 'and the examination asks it often. '
    + 'The reason is that connective tissue is cells in a matrix: '
    + 'in bone the matrix is hard, '
    + 'in cartilage it is firm and rubbery, '
    + 'and in blood it is liquid plasma. '
    + 'What makes a tissue connective is cells in a matrix, '
    + 'not how stiff the matrix is. '
    + 'Third, keep the levels straight. '
    + 'The stomach is an organ, not a tissue, '
    + 'and it is built of all four types: '
    + 'epithelium lining it, smooth muscle in its wall, '
    + 'connective tissue between the layers, '
    + 'and nerves controlling the whole. '
    + 'An examiner asking you to name the tissues of an organ '
    + 'is asking for that list, '
    + 'and a learner who answers stomach tissue has not understood '
    + 'the question.',

  recap:
    'You have met the cell and its parts, '
    + 'and the idea that an organ such as the heart does one job. '
    + 'This fills in the step between them, '
    + 'and names the four kinds of tissue an organ is built from.',

  method: [
    'Decide which level the question is about: cell, tissue, organ or system.',
    'For a tissue, name its type from the four.',
    'Name one structural feature: cell shape, number of layers, matrix, cilia.',
    'State the function that feature makes possible.',
    'Give a named place in the body where it is found.',
    'For an organ, list the tissues present rather than naming one.',
    'Check that your answer has a feature and a consequence, not just a name.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the four main tissue types and give one job for each.',
      steps: [
        'Epithelial: covers and lines.',
        'Connective: joins and supports.',
        'Muscle: shortens to produce movement.',
        'Nervous: carries signals.',
      ],
      answer: 'Epithelial, connective, muscle and nervous, '
        + 'covering, supporting, moving and signalling.',
    },
    {
      level: 4,
      ask: 'The lining of the windpipe is ciliated columnar epithelium. '
        + 'Relate its structure to its function.',
      steps: [
        'Columnar means tall cells, which hold goblet cells that make mucus.',
        'Cilia are fine hair like projections on the free surface.',
        'They beat together, in one direction, upwards.',
      ],
      answer: 'The mucus traps dust and germs, '
        + 'and the beating cilia sweep it up to the throat '
        + 'to be swallowed. '
        + 'The feature is the cilia; the function is clearance.',
    },
    {
      level: 5,
      ask: 'Explain why blood is classed as a connective tissue, '
        + 'although it is liquid.',
      steps: [
        'Connective tissue is cells scattered in a matrix.',
        'In bone the matrix is hard with mineral salts.',
        'In cartilage it is firm and rubbery.',
        'In blood the matrix is plasma, which is liquid.',
      ],
      answer: 'Because the test is cells in a matrix, '
        + 'not the stiffness of the matrix. '
        + 'Red cells, white cells and platelets sit in plasma, '
        + 'so blood meets the definition.',
    },
    {
      level: 6,
      ask: 'Name the tissues present in the wall of the stomach '
        + 'and give the job of each.',
      steps: [
        'Epithelium lines the inside and secretes acid and enzymes.',
        'Smooth muscle in the wall contracts to churn the food.',
        'Connective tissue between the layers carries vessels and holds '
          + 'the layers together.',
        'Nervous tissue controls the timing of the contractions and the '
          + 'secretion.',
      ],
      answer: 'All four types. '
        + 'The stomach is an organ, '
        + 'which is why the question can be asked at all: '
        + 'an organ is tissues working together, not one tissue.',
    },
  ],

  traps: [
    {
      mistake: 'Naming the tissue and stopping.',
      why: 'The feature and the consequence are separate marks. '
        + 'Write it has this, so it can do this.',
    },
    {
      mistake: 'Saying blood is not a tissue because it is liquid.',
      why: 'Connective tissue is cells in a matrix. '
        + 'Plasma is the matrix. Blood qualifies.',
    },
    {
      mistake: 'Calling an organ a tissue.',
      why: 'The stomach, the heart and the skin are organs built of '
        + 'several tissues. '
        + 'Asked for tissues, list them.',
    },
    {
      mistake: 'Treating all muscle as one thing.',
      why: 'Skeletal muscle is striated and under your control, '
        + 'smooth muscle is not, '
        + 'and cardiac muscle contracts on its own rhythm. '
        + 'The paper asks which.',
    },
  ],

  extension:
    'Cells of one type can change into another, which is called metaplasia, '
    + 'and it is how smoking starts to cause harm. '
    + 'The ciliated epithelium of the airway is replaced '
    + 'by flat layered epithelium, '
    + 'which survives the smoke better but has no cilia, '
    + 'so clearance stops and the cough begins. '
    + 'The structure changed, and the function went with it.',

  figure: {
    alt: 'Four panels, one for each tissue type, each drawn as cells with '
      + 'the feature that matters labelled. The epithelial panel shows a '
      + 'single row of tall cells with fine cilia along the top surface. '
      + 'The connective panel shows scattered cells with fibres running '
      + 'between them through a matrix. The muscle panel shows long '
      + 'striped fibres lying parallel. The nervous panel shows one cell '
      + 'with many short branches at one end and a single long fibre '
      + 'running away from it.',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* epithelial */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<rect x="30" y="70" width="28" height="64"/>'
      + '<rect x="58" y="70" width="28" height="64"/>'
      + '<rect x="86" y="70" width="28" height="64"/>'
      + '<rect x="114" y="70" width="28" height="64"/>'
      + '</g>'
      + '<g stroke="#0f8a4d" stroke-width="2" fill="none">'
      + '<path d="M36 70v-12"/><path d="M50 70v-12"/><path d="M64 70v-12"/>'
      + '<path d="M78 70v-12"/><path d="M92 70v-12"/><path d="M106 70v-12"/>'
      + '<path d="M120 70v-12"/><path d="M134 70v-12"/>'
      + '</g>'
      + '<text x="30" y="46" font-size="11" fill="#0f8a4d">cilia sweep upwards</text>'
      + '<text x="30" y="156" font-size="12" fill="currentColor">epithelial: tall cells,</text>'
      + '<text x="30" y="172" font-size="12" fill="currentColor">one layer, lines a tube</text>'
      /* connective */
      + '<rect x="190" y="58" width="130" height="90" stroke="currentColor" stroke-width="1" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M194 72h120"/><path d="M194 96h120"/><path d="M194 126h120"/>'
      + '</g>'
      + '<g fill="currentColor">'
      + '<circle cx="216" cy="84" r="6"/><circle cx="262" cy="110" r="6"/>'
      + '<circle cx="298" cy="80" r="6"/><circle cx="236" cy="136" r="6"/>'
      + '</g>'
      + '<text x="190" y="46" font-size="11" fill="#0f8a4d">cells in a matrix</text>'
      + '<text x="190" y="170" font-size="12" fill="currentColor">connective: few cells,</text>'
      + '<text x="190" y="186" font-size="12" fill="currentColor">fibres and matrix between</text>'
      /* muscle */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<rect x="370" y="68" width="230" height="20"/>'
      + '<rect x="370" y="94" width="230" height="20"/>'
      + '<rect x="370" y="120" width="230" height="20"/>'
      + '</g>'
      + '<g stroke="currentColor" stroke-width="1" opacity="0.6" fill="none">'
      + '<path d="M392 68v72"/><path d="M414 68v72"/><path d="M436 68v72"/>'
      + '<path d="M458 68v72"/><path d="M480 68v72"/><path d="M502 68v72"/>'
      + '<path d="M524 68v72"/><path d="M546 68v72"/><path d="M568 68v72"/>'
      + '</g>'
      + '<text x="370" y="46" font-size="11" fill="#0f8a4d">stripes along the fibre</text>'
      + '<text x="370" y="162" font-size="12" fill="currentColor">muscle: long parallel fibres</text>'
      + '<text x="370" y="178" font-size="12" fill="currentColor">that shorten together</text>'
      /* nervous */
      + '<circle cx="150" cy="290" r="22" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M134 274l-24-18"/><path d="M130 290H102"/><path d="M134 306l-24 18"/>'
      + '<path d="M146 268l-10-26"/><path d="M154 268l10-26"/>'
      + '<path d="M172 290h300"/>'
      + '</g>'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M472 290l18-14"/><path d="M472 290l18 14"/><path d="M472 290h22"/>'
      + '</g>'
      + '<text x="96" y="238" font-size="11" fill="#0f8a4d">many short branches in</text>'
      + '<text x="300" y="278" font-size="11" fill="#0f8a4d">one long fibre out</text>'
      + '<text x="96" y="344" font-size="12" fill="currentColor">nervous: carries a signal one way, over a distance</text>'
      + '<text x="30" y="382" font-size="12" fill="currentColor">in every panel the labelled feature is the reason the tissue can do its job</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The four tissue types, with the feature that explains the job',
      columns: ['Tissue', 'Feature to name', 'What that allows', 'A named place'],
      rows: [
        ['Epithelial', 'Cells packed in sheets, often one layer', 'Covering, lining, and quick exchange across it', 'Air sacs of the lung'],
        ['Connective', 'Scattered cells in a matrix with fibres', 'Joining, supporting, carrying', 'Tendon, bone, blood'],
        ['Muscle', 'Long fibres lying parallel', 'Shortening to pull', 'Biceps, stomach wall, heart'],
        ['Nervous', 'Branches in, one long fibre out', 'Carrying a signal one way, far', 'The nerve from the spinal cord to the leg'],
      ],
      note: 'The second and third columns together are the answer. '
        + 'Writing only the first column is the commonest half answer in '
        + 'this topic.',
    },
  ],

  questions: [
    {
      id: 'ct-1',
      ask: 'Which tissue type lines the inside of the windpipe?',
      kind: 'choice',
      options: ['Epithelial', 'Connective', 'Muscle', 'Nervous'],
      answer: 'Epithelial',
      teach: 'Epithelium covers surfaces and lines tubes. '
        + 'In the windpipe it is ciliated, so it sweeps mucus upwards.',
      level: 3,
    },
    {
      id: 'ct-2',
      ask: 'Blood is classed as connective tissue because:',
      kind: 'choice',
      options: [
        'It is cells in a matrix, and plasma is the matrix',
        'It connects the heart to the lungs',
        'It contains iron',
      ],
      answer: 'It is cells in a matrix, and plasma is the matrix',
      teach: 'The matrix may be hard as in bone or liquid as in blood. '
        + 'Stiffness is not the test.',
      level: 5,
    },
    {
      id: 'ct-3',
      ask: 'How many of the four tissue types are present in the stomach wall?',
      kind: 'numeric',
      options: [],
      answer: '4',
      teach: 'Epithelium, smooth muscle, connective tissue and nerves. '
        + 'An organ is tissues working together.',
      level: 5,
    },
    {
      id: 'ct-4',
      ask: 'The air sac lining is one cell thick. '
        + 'This matters because:',
      kind: 'choice',
      options: [
        'Gas crosses a short distance quickly',
        'It is cheaper for the body to build',
        'It stops dust entering',
      ],
      answer: 'Gas crosses a short distance quickly',
      teach: 'Feature, then consequence. '
        + 'A scarred, thicker lining slows oxygen down, '
        + 'which is why the patient is breathless.',
      level: 6,
    },
    {
      id: 'ct-5',
      ask: 'Muscle that is striped and under your own control is:',
      kind: 'choice',
      options: ['Skeletal', 'Smooth', 'Cardiac'],
      answer: 'Skeletal',
      teach: 'Smooth muscle is not striped and not voluntary. '
        + 'Cardiac is striped but beats on its own rhythm.',
      level: 4,
    },
  ],
})

/* ── Biomedical Science: homeostasis ─────────────────────────────────────── */

teach({
  topicId: 'homeostasis-bms',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Homeostasis is keeping the internal conditions of the body '
      + 'close to a set point. '
      + 'It works by negative feedback: '
      + 'a receptor detects the change, '
      + 'a control centre compares it with the set point, '
      + 'and an effector acts to oppose the change. '
      + 'Opposes is the word that carries the mark. '
      + 'Temperature and blood glucose are the two worked cases.',
    method: [
      'Name the variable and its set point.',
      'Name receptor, control centre and effector.',
      'Say in which direction the response pushes the variable.',
    ],
  },

  idea:
    'Homeostasis is the keeping of the internal conditions of the body '
    + 'within a narrow range, '
    + 'whatever is happening outside. '
    + 'Core temperature is held near 37 degrees Celsius. '
    + 'Blood glucose is held near 5 millimoles per litre. '
    + 'The value aimed at is the set point, '
    + 'and the control works by negative feedback, '
    + 'which has three named parts. '
    + 'A receptor detects the change in the variable. '
    + 'A control centre, usually in the brain or a gland, '
    + 'compares the reading with the set point and decides. '
    + 'An effector, a muscle or a gland, carries out the response. '
    + 'The response always pushes the variable back the other way, '
    + 'and that is why it is called negative. '
    + 'Positive feedback is the opposite and is rare: '
    + 'the response increases the change, '
    + 'as in the contractions of childbirth, which build on each other.',

  mechanism:
    'The marks in this topic are given for the loop, '
    + 'and the loop has to be written with the direction stated. '
    + 'Consider getting too hot while weeding a farm at noon. '
    + 'Receptors in the skin and in the hypothalamus detect a rise. '
    + 'The control centre is the hypothalamus. '
    + 'The effectors are the sweat glands and the blood vessels of the skin. '
    + 'Sweating cools, because evaporating water takes heat from the skin, '
    + 'and the vessels widen, '
    + 'so more warm blood reaches the surface and loses heat. '
    + 'The sentence that earns the mark is the last clause: '
    + 'the response lowers the temperature, '
    + 'which is the direction opposite to the change. '
    + 'A learner who writes the person sweats '
    + 'has described an observation, not a mechanism. '
    + 'Now glucose, which is the harder case '
    + 'because two hormones oppose each other. '
    + 'After a bowl of banku, glucose rises. '
    + 'Cells in the pancreas detect it '
    + 'and release insulin. '
    + 'Insulin makes liver and muscle cells take glucose in '
    + 'and store it as glycogen, '
    + 'so blood glucose falls. '
    + 'Hours later, or during hard work, glucose drops. '
    + 'The pancreas releases glucagon instead, '
    + 'the liver breaks glycogen back down, '
    + 'and glucose rises. '
    + 'Two hormones, opposite effects, one set point. '
    + 'The reason to learn it this way is that it explains the disease. '
    + 'In type 1 diabetes the insulin is not made, '
    + 'so after a meal nothing tells the cells to take glucose in, '
    + 'and it stays high in the blood. '
    + 'The loop is broken at the effector signal, '
    + 'and naming where a loop is broken '
    + 'is a question the paper asks directly. '
    + 'Last, two cautions. '
    + 'Negative feedback does not hold a value exactly; '
    + 'it corrects after a change, '
    + 'so the real value swings slightly above and below the set point '
    + 'for ever. '
    + 'Drawing that swing, rather than a flat line, '
    + 'shows you understand that the correction comes after the error. '
    + 'And do not confuse negative with harmful. '
    + 'Negative here means opposing, and it is what keeps you alive.',

  recap:
    'You have met the idea that the body keeps its temperature steady '
    + 'by sweating and shivering. '
    + 'This gives that a general shape, with three named parts, '
    + 'and applies the same shape to the sugar in your blood.',

  method: [
    'Name the variable being controlled and its set point.',
    'State the change: has it risen or fallen.',
    'Name the receptor that detects it.',
    'Name the control centre.',
    'Name the effector and the response it makes.',
    'State the direction: the response pushes the variable back down, or back up.',
    'Close the loop by saying the receptor now detects the corrected value.',
    'If the question is about a disease, say which part of the loop has failed.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the three parts of a negative feedback loop, in order.',
      steps: [
        'Something must detect the change.',
        'Something must compare it with the set point.',
        'Something must act.',
      ],
      answer: 'Receptor, control centre, effector.',
    },
    {
      level: 4,
      ask: 'A learner runs in the sun and her temperature rises. '
        + 'Give the loop that corrects it.',
      steps: [
        'Receptors in the skin and hypothalamus detect the rise.',
        'The hypothalamus compares it with 37 degrees.',
        'Effectors: sweat glands secrete sweat, '
          + 'and skin blood vessels widen.',
        'Sweat evaporates and takes heat away; '
          + 'widened vessels bring warm blood to the surface to lose heat.',
      ],
      answer: 'Temperature falls back towards 37 degrees. '
        + 'The response is in the opposite direction to the change, '
        + 'which is what negative feedback means.',
    },
    {
      level: 5,
      ask: 'Blood glucose rises after a meal of banku. '
        + 'Trace the correction, naming the hormone and the organ.',
      steps: [
        'Cells in the pancreas detect the rise.',
        'The pancreas releases insulin into the blood.',
        'Liver and muscle cells take glucose in and store it as glycogen.',
        'Blood glucose falls back towards the set point.',
      ],
      answer: 'Insulin from the pancreas lowers blood glucose '
        + 'by causing cells to take it up and store it as glycogen.',
    },
    {
      level: 6,
      ask: 'In type 1 diabetes, blood glucose stays high after a meal. '
        + 'Say which part of the loop has failed, and why the usual '
        + 'response cannot happen.',
      steps: [
        'The receptor still detects the rise.',
        'The pancreas cannot make insulin, '
          + 'because the cells that make it have been destroyed.',
        'So no signal reaches the liver and muscle.',
        'The effectors are healthy but untold, '
          + 'so no glucose is taken up and stored.',
      ],
      answer: 'The loop is broken at the signal from the control centre. '
        + 'Detection works and the effectors work, '
        + 'but with no insulin there is nothing to carry the instruction, '
        + 'so the glucose stays in the blood. '
        + 'Injected insulin replaces the missing signal.',
    },
  ],

  traps: [
    {
      mistake: 'Describing the response without saying which way it pushes.',
      why: 'Opposing the change is the whole definition. '
        + 'Write: so the temperature falls, or so the glucose rises.',
    },
    {
      mistake: 'Taking negative to mean bad.',
      why: 'It means opposite in direction. '
        + 'Negative feedback is what keeps the value near the set point.',
    },
    {
      mistake: 'Drawing the controlled variable as a flat line.',
      why: 'The correction comes after the error, '
        + 'so the real value swings slightly either side of the set point.',
    },
    {
      mistake: 'Saying insulin turns glucose into glycogen in the blood.',
      why: 'Insulin is a signal, not an enzyme for that. '
        + 'It makes liver and muscle cells take glucose in, '
        + 'and the storing happens inside them.',
    },
  ],

  extension:
    'A set point can itself be moved. '
    + 'Fever is the clearest example. '
    + 'Chemicals made during an infection '
    + 'raise the set point in the hypothalamus above 37. '
    + 'The same loop now defends the higher value. '
    + 'So the patient shivers and feels cold at 39 degrees, '
    + 'because the body believes it is below target. '
    + 'That is why a person with fever piles on blankets. '
    + 'When the set point comes back down, '
    + 'the shivering stops and the sweating begins.',

  figure: {
    alt: 'Two drawings. On the left, a negative feedback loop as a ring: '
      + 'a box labelled receptor feeds a box labelled control centre, '
      + 'which feeds a box labelled effector, whose response arrow '
      + 'returns to the variable and is marked as opposing the change. '
      + 'On the right, a graph of the controlled variable against time, '
      + 'with a dashed horizontal line marked set point and the real '
      + 'value drawn as a wave crossing it repeatedly, showing that the '
      + 'correction always arrives after the error.',
    svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* loop on the left */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<rect x="30" y="40" width="110" height="46" rx="6"/>'
      + '<rect x="170" y="40" width="110" height="46" rx="6"/>'
      + '<rect x="170" y="150" width="110" height="46" rx="6"/>'
      + '<rect x="30" y="150" width="110" height="46" rx="6"/>'
      + '</g>'
      + '<text x="42" y="60" font-size="12" fill="currentColor">receptor</text>'
      + '<text x="42" y="78" font-size="10" fill="currentColor">detects the change</text>'
      + '<text x="182" y="60" font-size="12" fill="currentColor">control centre</text>'
      + '<text x="182" y="78" font-size="10" fill="currentColor">compares with set point</text>'
      + '<text x="182" y="170" font-size="12" fill="currentColor">effector</text>'
      + '<text x="182" y="188" font-size="10" fill="currentColor">muscle or gland acts</text>'
      + '<text x="42" y="170" font-size="12" fill="currentColor">the variable</text>'
      + '<text x="42" y="188" font-size="10" fill="currentColor">pushed back the other way</text>'
      + '<path d="M140 63h22" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M156 57l10 6-10 6Z" fill="#0f8a4d"/>'
      + '<path d="M225 86v56" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M219 134l6 10 6-10Z" fill="#0f8a4d"/>'
      + '<path d="M170 173h-22" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M154 167l-10 6 10 6Z" fill="#0f8a4d"/>'
      + '<path d="M85 150V94" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M79 102l6-10 6 10Z" fill="#0f8a4d"/>'
      + '<text x="26" y="234" font-size="11" fill="#0f8a4d">the response opposes the change</text>'
      /* graph on the right */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M340 220V50"/><path d="M340 220h260"/>'
      + '</g>'
      + '<path d="M340 135h260" stroke="currentColor" stroke-width="1" stroke-dasharray="6 5" fill="none"/>'
      + '<path d="M340 160c22-60 44 54 66-6 22-58 44 48 66-4 22-50 44 40 66-2" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<text x="604" y="139" font-size="11" fill="currentColor">set</text>'
      + '<text x="604" y="152" font-size="11" fill="currentColor">point</text>'
      + '<text x="348" y="44" font-size="11" fill="currentColor">value</text>'
      + '<text x="566" y="238" font-size="11" fill="currentColor">time</text>'
      + '<text x="340" y="268" font-size="11" fill="#0f8a4d">the real value swings either side, because the correction comes after the error</text>'
      + '<text x="26" y="306" font-size="12" fill="currentColor">a flat line would mean the body knew about the change before it happened</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'The same loop, filled in for the two cases the paper asks about',
      columns: ['Part of the loop', 'Body temperature too high', 'Blood glucose too high'],
      rows: [
        ['Variable and set point', 'Core temperature, near 37 degrees', 'Blood glucose, near 5 millimoles per litre'],
        ['Receptor', 'Skin receptors and the hypothalamus', 'Cells in the pancreas'],
        ['Control centre', 'The hypothalamus', 'The pancreas'],
        ['Effector', 'Sweat glands and skin blood vessels', 'Liver and muscle cells'],
        ['Response', 'Sweating and widened vessels lose heat', 'Glucose taken in and stored as glycogen'],
        ['Direction', 'Temperature falls', 'Glucose falls'],
      ],
      note: 'The last row is the one that earns the mark, '
        + 'and it is the row most often left out.',
    },
  ],

  questions: [
    {
      id: 'hs-1',
      ask: 'In negative feedback, the response:',
      kind: 'choice',
      options: [
        'Opposes the change',
        'Increases the change',
        'Has no effect on the variable',
      ],
      answer: 'Opposes the change',
      teach: 'Negative means opposite in direction, not harmful.',
      level: 3,
    },
    {
      id: 'hs-2',
      ask: 'Which organ is the control centre for blood glucose?',
      kind: 'choice',
      options: ['The pancreas', 'The liver', 'The hypothalamus'],
      answer: 'The pancreas',
      teach: 'The liver is an effector. '
        + 'The pancreas detects and signals with insulin or glucagon.',
      level: 4,
    },
    {
      id: 'hs-3',
      ask: 'Blood glucose falls during hard work. '
        + 'The hormone released is:',
      kind: 'choice',
      options: ['Glucagon', 'Insulin', 'Adrenaline only'],
      answer: 'Glucagon',
      teach: 'Glucagon makes the liver break glycogen down, '
        + 'so glucose rises back towards the set point.',
      level: 5,
    },
    {
      id: 'hs-4',
      ask: 'In type 1 diabetes, the part of the loop that has failed is:',
      kind: 'choice',
      options: [
        'The signal from the control centre',
        'The receptor',
        'The effector cells themselves',
      ],
      answer: 'The signal from the control centre',
      teach: 'Detection and the effectors are intact. '
        + 'With no insulin there is nothing to carry the instruction.',
      level: 6,
    },
    {
      id: 'hs-5',
      ask: 'Core body temperature is held near how many degrees Celsius?',
      kind: 'numeric',
      options: [],
      answer: '37',
      teach: 'Near 37, with small swings either side '
        + 'because each correction follows an error.',
      level: 3,
    },
  ],
})

/* ── Biomedical Science: microorganisms and pathogens ────────────────────── */

teach({
  topicId: 'microorganisms-bms',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Bacteria are single cells with no nucleus, '
      + 'and they can live and multiply on their own. '
      + 'A virus is not a cell at all: '
      + 'it is genetic material in a protein coat '
      + 'and it can only multiply inside a host cell. '
      + 'Fungi have a nucleus and a cell wall of chitin. '
      + 'Protozoa are single celled with a nucleus, and many can move. '
      + 'Antibiotics attack bacterial structures, '
      + 'so they cannot work on a virus.',
    method: [
      'Ask whether it is a cell at all.',
      'If it is, ask whether it has a nucleus.',
      'Match the group to its diseases and its treatment.',
    ],
  },

  idea:
    'A microorganism is a living thing too small to see without a microscope. '
    + 'A pathogen is one that causes disease. '
    + 'Bacteria are single cells with no nucleus, '
    + 'so their genetic material lies loose in the cell. '
    + 'They have a cell wall, they are about one micrometre across, '
    + 'and they divide on their own, every twenty minutes in good conditions. '
    + 'Viruses are not cells. '
    + 'Each is genetic material inside a protein coat, '
    + 'about a hundred times smaller than a bacterium, '
    + 'and it can do nothing until it enters a living cell, '
    + 'which it then makes produce more virus. '
    + 'Fungi have a nucleus and a cell wall made of chitin. '
    + 'They grow as yeasts, which are single cells, '
    + 'or as moulds, which grow in threads. '
    + 'Protozoa are single celled, with a nucleus, '
    + 'and many move with cilia, flagella or a flowing body. '
    + 'Antibiotics work on bacteria. '
    + 'Antivirals, antifungals and antiprotozoal drugs '
    + 'each work on their own group.',

  mechanism:
    'The question that matters in Ghana, '
    + 'and the one the paper asks in several disguises, '
    + 'is why an antibiotic does nothing for a cold or for measles. '
    + 'The answer is structural, and it has to be given that way. '
    + 'An antibiotic works by attacking something a bacterium has '
    + 'and the patient does not: '
    + 'penicillin breaks the building of the bacterial cell wall, '
    + 'and others jam the bacterial ribosome, '
    + 'which is a different shape from ours. '
    + 'A virus has no cell wall and no ribosome of its own. '
    + 'It borrows the ribosomes of your cell. '
    + 'So there is nothing for the drug to attack '
    + 'that is not also yours. '
    + 'That is the whole answer, '
    + 'and it is worth more than a statement that antibiotics do not '
    + 'work on viruses. '
    + 'The practical consequence is serious. '
    + 'A chemist seller who hands out an antibiotic for a cold '
    + 'has not helped the patient at all, '
    + 'and has given every bacterium already in that person '
    + 'a dose large enough to kill the weak ones '
    + 'and small enough to let the resistant ones survive and multiply. '
    + 'That is how resistance is bred, '
    + 'and it is why a course once begun is finished. '
    + 'The second thing to fix is which group causes what, '
    + 'because the commonest error in Ghanaian scripts '
    + 'is calling malaria a virus. '
    + 'Malaria is caused by Plasmodium, which is a protozoan, '
    + 'carried by the female Anopheles mosquito. '
    + 'The treatment is an antimalarial, not an antibiotic and not an '
    + 'antiviral, '
    + 'and knowing the group is what tells you that. '
    + 'Cholera and tuberculosis are bacterial. '
    + 'Measles, polio and the common cold are viral. '
    + 'Ringworm and candidiasis are fungal. '
    + 'Third, size is worth holding in the head '
    + 'because it explains the laboratory work. '
    + 'A bacterium at about one micrometre '
    + 'can be seen with a school light microscope and stained. '
    + 'A virus at about a hundred nanometres cannot, '
    + 'which is why viral diagnosis is done by looking for the body’s '
    + 'response or for the genetic material, '
    + 'never by looking down an ordinary microscope.',

  recap:
    'You have learned that germs cause disease, '
    + 'and that washing hands and boiling water prevent it. '
    + 'This divides germs into four groups '
    + 'and shows why the treatment for one does nothing for another.',

  method: [
    'Ask first whether the organism is a cell.',
    'If it is not a cell, it is a virus, and it needs a host cell to multiply.',
    'If it is a cell, ask whether it has a nucleus.',
    'No nucleus means a bacterium.',
    'A nucleus with a chitin wall means a fungus.',
    'A nucleus, single celled and often moving, means a protozoan.',
    'Name a disease of that group, and the kind of drug used.',
    'If asked why a drug fails, name the structure the drug attacks.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Which group has no nucleus, and which is not a cell at all?',
      steps: [
        'Bacteria are cells, but their genetic material is not in a nucleus.',
        'A virus has no cell structure at all.',
      ],
      answer: 'Bacteria have no nucleus. '
        + 'A virus is not a cell.',
    },
    {
      level: 4,
      ask: 'Name the group that causes each: cholera, measles, ringworm, '
        + 'malaria.',
      steps: [
        'Cholera is caused by Vibrio cholerae, a bacterium.',
        'Measles is caused by a virus.',
        'Ringworm is a fungal infection of the skin.',
        'Malaria is caused by Plasmodium, a protozoan.',
      ],
      answer: 'Bacterium, virus, fungus, protozoan. '
        + 'Malaria is the one most often got wrong: it is not a virus.',
    },
    {
      level: 5,
      ask: 'A patient with a cold is given an antibiotic and does not '
        + 'improve. Explain why, in terms of structure.',
      steps: [
        'A cold is caused by a virus.',
        'Antibiotics attack a bacterial cell wall or a bacterial ribosome.',
        'A virus has neither; it uses the ribosomes of the host cell.',
        'So the drug has no target that is not also the patient’s own.',
      ],
      answer: 'There is nothing for the antibiotic to attack. '
        + 'Worse, the dose kills the weak bacteria already in the patient '
        + 'and leaves the resistant ones to multiply.',
    },
    {
      level: 6,
      ask: 'Explain why a school microscope can show a bacterium '
        + 'but not a virus, and say how a viral infection is identified '
        + 'instead.',
      steps: [
        'A bacterium is about one micrometre across.',
        'A light microscope can resolve to about 0.2 micrometres, '
          + 'so a stained bacterium is visible.',
        'A virus is about 0.1 micrometres, below that limit.',
        'So the virus is found indirectly: '
          + 'by detecting antibodies the patient has made, '
          + 'by detecting a viral protein, '
          + 'or by copying and detecting its genetic material.',
      ],
      answer: 'The virus is smaller than the resolving limit of light. '
        + 'It is identified by the body’s response or by its genetic '
        + 'material, not by being seen.',
    },
  ],

  traps: [
    {
      mistake: 'Calling malaria a viral disease.',
      why: 'It is caused by Plasmodium, a protozoan, '
        + 'carried by the female Anopheles mosquito. '
        + 'The treatment is an antimalarial.',
    },
    {
      mistake: 'Saying antibiotics do not work on viruses, and stopping.',
      why: 'The mark is in the reason: '
        + 'a virus has no cell wall and no ribosome of its own, '
        + 'so the drug has no target.',
    },
    {
      mistake: 'Stopping a course of antibiotics when you feel better.',
      why: 'The survivors are the most resistant ones. '
        + 'Finishing the course is how resistance is not bred.',
    },
    {
      mistake: 'Calling every microorganism a germ.',
      why: 'Most are harmless and many are useful: '
        + 'the bacteria in a fermenting dough for kenkey, '
        + 'and the yeast in pito. '
        + 'A pathogen is the subset that causes disease.',
    },
  ],

  extension:
    'Some bacteria form a spore, '
    + 'a tough resting stage that survives boiling and drying for years. '
    + 'This is why tetanus lives in soil '
    + 'and why a wound from a farm tool is treated seriously, '
    + 'and it is why hospital instruments are autoclaved '
    + 'at 121 degrees under pressure rather than simply boiled. '
    + 'The spore is also the reason a canned food that was underheated '
    + 'can be dangerous although it looks and smells clean.',

  figure: {
    alt: 'A size comparison drawn to a rough scale. A large circle at the '
      + 'left stands for a human red blood cell at seven micrometres '
      + 'across. Inside the same field a much smaller rod stands for a '
      + 'bacterium at one micrometre, and a tiny hexagon stands for a '
      + 'virus at one tenth of a micrometre, with a dashed line marking '
      + 'the limit of what a school light microscope can resolve, which '
      + 'falls between the bacterium and the virus.',
    svg: '<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* red cell */
      + '<circle cx="130" cy="130" r="70" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<circle cx="130" cy="130" r="30" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" fill="none"/>'
      + '<text x="72" y="226" font-size="12" fill="currentColor">red blood cell</text>'
      + '<text x="84" y="244" font-size="11" fill="currentColor">7 micrometres</text>'
      /* bacterium */
      + '<rect x="300" y="118" width="40" height="18" rx="9" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="278" y="226" font-size="12" fill="currentColor">bacterium</text>'
      + '<text x="276" y="244" font-size="11" fill="currentColor">1 micrometre</text>'
      + '<text x="276" y="262" font-size="11" fill="#0f8a4d">visible when stained</text>'
      /* virus */
      + '<path d="M478 126l8-6 8 6v10l-8 6-8-6Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="452" y="226" font-size="12" fill="currentColor">virus</text>'
      + '<text x="430" y="244" font-size="11" fill="currentColor">0.1 micrometre</text>'
      + '<text x="430" y="262" font-size="11" fill="#0f8a4d">below the limit of light</text>'
      /* resolving limit line */
      + '<path d="M400 50v170" stroke="#0f8a4d" stroke-width="2" stroke-dasharray="7 5" fill="none"/>'
      + '<text x="300" y="44" font-size="11" fill="#0f8a4d">limit a school light microscope can resolve</text>'
      + '<text x="408" y="62" font-size="11" fill="#0f8a4d">about 0.2 micrometres</text>'
      + '<text x="60" y="300" font-size="12" fill="currentColor">a bacterium can be seen and stained; a virus is found by its genetic material or by the antibodies made against it</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'How to tell the four groups apart, and what each is treated with',
      columns: ['Group', 'Is it a cell', 'Nucleus', 'A disease in Ghana', 'Treated with'],
      rows: [
        ['Bacteria', 'Yes', 'No', 'Cholera, tuberculosis', 'An antibiotic'],
        ['Viruses', 'No', 'Not applicable', 'Measles, hepatitis B', 'An antiviral, or prevention by vaccine'],
        ['Fungi', 'Yes', 'Yes', 'Ringworm, candidiasis', 'An antifungal'],
        ['Protozoa', 'Yes', 'Yes', 'Malaria, amoebic dysentery', 'An antiprotozoal, such as an antimalarial'],
      ],
      note: 'Read the row for malaria carefully: protozoan, not viral. '
        + 'That single row accounts for a great many lost marks.',
    },
  ],

  questions: [
    {
      id: 'mo-1',
      ask: 'Which of these is not a cell?',
      kind: 'choice',
      options: ['A virus', 'A bacterium', 'A yeast'],
      answer: 'A virus',
      teach: 'It is genetic material in a protein coat, '
        + 'and it can only multiply inside a host cell.',
      level: 3,
    },
    {
      id: 'mo-2',
      ask: 'Malaria is caused by:',
      kind: 'choice',
      options: ['A protozoan', 'A virus', 'A bacterium', 'A fungus'],
      answer: 'A protozoan',
      teach: 'Plasmodium, carried by the female Anopheles mosquito. '
        + 'So an antimalarial is used, not an antibiotic.',
      level: 4,
    },
    {
      id: 'mo-3',
      ask: 'An antibiotic cannot work on a virus because the virus has no:',
      kind: 'choice',
      options: [
        'Cell wall or ribosome of its own',
        'Genetic material',
        'Protein',
      ],
      answer: 'Cell wall or ribosome of its own',
      teach: 'Those are the structures the drug attacks. '
        + 'A virus borrows the ribosomes of your cells.',
      level: 5,
    },
    {
      id: 'mo-4',
      ask: 'Which group has a cell wall made of chitin?',
      kind: 'choice',
      options: ['Fungi', 'Bacteria', 'Protozoa'],
      answer: 'Fungi',
      teach: 'Bacteria have a wall too, but not of chitin. '
        + 'Protozoa have no cell wall.',
      level: 5,
    },
    {
      id: 'mo-5',
      ask: 'Stopping an antibiotic course early is dangerous because:',
      kind: 'choice',
      options: [
        'The surviving bacteria are the most resistant ones',
        'The drug becomes poisonous',
        'The infection becomes viral',
      ],
      answer: 'The surviving bacteria are the most resistant ones',
      teach: 'They then multiply, and the next patient has a strain '
        + 'the drug cannot touch.',
      level: 6,
    },
  ],
})

/* ── Biomedical Science: laboratory safety and handling specimens ────────── */

teach({
  topicId: 'lab-safety-bms',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Treat every specimen as infectious. '
      + 'You cannot tell by looking which one is. '
      + 'That one rule is called standard precautions. '
      + 'Every other rule follows from it. '
      + 'Wear gloves and a coat. '
      + 'Never pipette by mouth. '
      + 'Put sharps straight into the box, and never recap a needle. '
      + 'Keep the specimen in a labelled pot that does not leak. '
      + 'Wash your hands on leaving, gloves or no gloves.',
    method: [
      'Name the hazard before you touch anything.',
      'State the precaution that blocks that route of entry.',
      'Say what happens if the precaution is left out.',
    ],
  },

  idea:
    'A specimen is a sample taken from a patient '
    + 'for testing: blood, urine, stool, sputum or a swab. '
    + 'Standard precautions means handling every specimen '
    + 'as though it carried an infection, '
    + 'because a request form does not tell you '
    + 'whether the patient has hepatitis B or HIV, '
    + 'and often the patient does not know either. '
    + 'The routes a germ can take into you are few: '
    + 'through broken skin or a puncture, '
    + 'through the mouth, '
    + 'through the eyes, '
    + 'and through breathing in a fine spray, called an aerosol. '
    + 'Each precaution blocks one route. '
    + 'Gloves and a buttoned laboratory coat block the skin route. '
    + 'A mechanical pipette filler blocks the mouth route. '
    + 'Goggles or a face shield block the eye route. '
    + 'Working in a cabinet, or at least not making a spray, '
    + 'blocks the breathing route. '
    + 'A sharps box blocks the puncture route. '
    + 'Hand washing catches what the gloves missed.',

  mechanism:
    'The reason to learn the hazard before the rule '
    + 'is that an examination asks why, '
    + 'and a learner who has only memorised the list '
    + 'cannot answer a question about a situation the list does not cover. '
    + 'Take the one rule that saves most laboratory workers: '
    + 'never recap a used needle. '
    + 'It sounds wrong, because a capped needle looks safer. '
    + 'But recapping means bringing your other hand '
    + 'towards a sharp point you cannot see the end of, '
    + 'and the commonest needle stick injury in any hospital '
    + 'happens at exactly that moment. '
    + 'So the needle goes straight into a rigid sharps box, '
    + 'uncapped, point first, '
    + 'and nothing is ever pushed down into a full box. '
    + 'The hazard is a puncture that injects blood under your skin; '
    + 'the precaution is to remove the step where a hand meets the point; '
    + 'and without it the consequence is hepatitis B, '
    + 'which survives on a surface for days '
    + 'and needs a far smaller dose than HIV to infect. '
    + 'Second, the aerosol, '
    + 'because this is the hazard learners never see. '
    + 'Pulling a stopper out quickly, '
    + 'squirting the last drop out of a pipette, '
    + 'or opening a centrifuge before it has stopped, '
    + 'all throw a fine invisible spray into the air '
    + 'that hangs there and is breathed in. '
    + 'This is how tuberculosis is caught in a laboratory. '
    + 'So liquids are let down the wall of the tube, '
    + 'stoppers are opened slowly inside a cloth, '
    + 'and a centrifuge is left to stop by itself '
    + 'and then left closed for several minutes. '
    + 'Third, the spill, '
    + 'because the wrong first move makes it worse. '
    + 'Do not mop a spill. '
    + 'Cover it with paper towel, '
    + 'pour disinfectant from the outside edge inwards, '
    + 'leave it the full contact time, '
    + 'then lift it and wash. '
    + 'Pouring from the middle outwards spreads the spill, '
    + 'and wiping makes an aerosol of it. '
    + 'Last, the honest part. '
    + 'Most Ghanaian senior high schools have no biological safety cabinet, '
    + 'and should not be handling patient specimens at all. '
    + 'What a school can practise, and should, '
    + 'is the whole of the discipline on safe material: '
    + 'labelling and leak proof transport with water, '
    + 'glove removal without touching the outside with bare skin, '
    + 'the spill routine with a dye instead of blood, '
    + 'and the sharps box with blunt needles. '
    + 'The examination tests the reasoning and the sequence, '
    + 'which is exactly what that practice builds. '
    + 'The cabinet, the autoclave and real specimens '
    + 'belong to the training laboratory, '
    + 'and the lesson is better for saying so.',

  recap:
    'You have been told to wash your hands before eating '
    + 'and not to drink from a stream. '
    + 'This takes the same idea into a laboratory, '
    + 'where the dose is concentrated '
    + 'and where you handle other people’s infections on purpose.',

  method: [
    'Before touching anything, name what could get into you and how.',
    'Put on the coat and gloves, and tie back long hair.',
    'Check the container is labelled, closed and not leaking.',
    'Never pipette by mouth; use a filler or a bulb.',
    'Work low and slowly to avoid making a spray.',
    'Put every sharp straight into the sharps box, uncapped.',
    'Disinfect the bench before and after, with the full contact time.',
    'Remove gloves without touching their outside, then wash your hands.',
    'Record and report any splash, cut or needle stick at once.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give the one rule that all the others follow from, '
        + 'and say why.',
      steps: [
        'A request form does not say whether the specimen is infectious.',
        'Neither does its appearance.',
        'Often the patient does not know either.',
      ],
      answer: 'Treat every specimen as infectious. '
        + 'You cannot tell which one is, '
        + 'so a precaution used only sometimes is a precaution not used.',
    },
    {
      level: 4,
      ask: 'Why must a used needle never be recapped?',
      steps: [
        'Recapping brings a hand towards an exposed point.',
        'The point is hidden by the cap you are aiming at.',
        'That moment is when most needle stick injuries happen.',
      ],
      answer: 'Because the recapping step is itself the injury. '
        + 'Put it straight into a rigid sharps box, uncapped, '
        + 'and never push anything into a full box.',
    },
    {
      level: 5,
      ask: 'A tube of sputum is spilled on the bench. '
        + 'Give the sequence, and say why mopping it is wrong.',
      steps: [
        'Warn others and keep them back.',
        'Cover the spill with paper towel.',
        'Pour disinfectant from the outer edge inwards.',
        'Leave it for the full contact time on the label.',
        'Lift the towel into a bag for autoclaving, then wash the bench.',
      ],
      answer: 'Mopping spreads the liquid and throws a fine spray into '
        + 'the air, which can be breathed in. '
        + 'Covering first contains it, and pouring inwards stops it '
        + 'running wider.',
    },
    {
      level: 6,
      ask: 'A school has no safety cabinet. '
        + 'Say what of this topic can still be taught properly, '
        + 'and what cannot.',
      steps: [
        'Reasoning about hazard and route of entry needs no equipment.',
        'Labelling, leak proof transport and the spill sequence can be '
          + 'practised with water and a dye.',
        'Glove removal and hand washing can be practised exactly as done.',
        'A sharps box with blunt needles teaches the habit.',
        'What cannot be done is handling any real patient specimen, '
          + 'or any culture, '
          + 'because containing an aerosol needs a cabinet and an '
          + 'autoclave.',
      ],
      answer: 'All the examinable reasoning and all the handling '
        + 'discipline can be taught on safe material. '
        + 'Real specimens and cultures cannot, and should not be '
        + 'attempted, because there is no way to contain an aerosol '
        + 'or to make the waste safe afterwards.',
    },
  ],

  traps: [
    {
      mistake: 'Recapping a needle to make it safe.',
      why: 'The recapping movement is the commonest cause of needle '
        + 'stick injury. '
        + 'Uncapped, straight into the sharps box.',
    },
    {
      mistake: 'Wiping or mopping a spill first.',
      why: 'It spreads the liquid and raises an aerosol. '
        + 'Cover, then pour disinfectant inwards, then wait.',
    },
    {
      mistake: 'Treating gloves as a reason not to wash.',
      why: 'Gloves tear, and the outside is contaminated when you remove '
        + 'them. '
        + 'Wash on leaving, every time.',
    },
    {
      mistake: 'Opening a centrifuge as soon as the timer ends.',
      why: 'A cracked tube has filled the bowl with aerosol. '
        + 'Let it stop by itself and leave it closed a few minutes.',
    },
  ],

  extension:
    'Laboratories are graded by containment level, from one to four, '
    + 'and the grading is about the organism, not the building. '
    + 'Level one is material known to be harmless. '
    + 'Level two, which is the ordinary hospital laboratory, '
    + 'handles things like hepatitis B and salmonella '
    + 'on an open bench with standard precautions. '
    + 'Level three adds a sealed room with air flowing inwards '
    + 'for organisms that spread by air, such as tuberculosis. '
    + 'Level four, for Ebola and the like, '
    + 'adds a suit with its own air supply, '
    + 'and there are very few of them in the world.',

  figure: {
    alt: 'A bench laid out as it should be, seen from above. The left '
      + 'third is marked the clean zone and holds the request forms and '
      + 'a pen. The middle is the working zone with a rack of labelled '
      + 'closed tubes and a pipette with a mechanical filler. The right '
      + 'third is the contaminated zone with a rigid sharps box, a '
      + 'discard jar of disinfectant and a bag for autoclaving. An arrow '
      + 'runs across the bench in one direction only, from clean to '
      + 'contaminated, and a hand wash basin is drawn at the exit.',
    svg: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* bench */
      + '<rect x="30" y="60" width="540" height="190" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M210 60v190" stroke="currentColor" stroke-width="1" stroke-dasharray="6 5"/>'
      + '<path d="M390 60v190" stroke="currentColor" stroke-width="1" stroke-dasharray="6 5"/>'
      + '<text x="48" y="52" font-size="12" fill="#0f8a4d">clean zone</text>'
      + '<text x="248" y="52" font-size="12" fill="currentColor">working zone</text>'
      + '<text x="408" y="52" font-size="12" fill="#0f8a4d">contaminated zone</text>'
      /* clean zone contents */
      + '<rect x="56" y="96" width="110" height="70" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="62" y="186" font-size="11" fill="currentColor">request forms, pen</text>'
      + '<text x="62" y="204" font-size="11" fill="currentColor">nothing wet comes here</text>'
      /* working zone: rack of tubes */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<rect x="232" y="110" width="120" height="30"/>'
      + '<rect x="240" y="80" width="16" height="30"/>'
      + '<rect x="264" y="80" width="16" height="30"/>'
      + '<rect x="288" y="80" width="16" height="30"/>'
      + '<rect x="312" y="80" width="16" height="30"/>'
      + '</g>'
      + '<text x="226" y="166" font-size="11" fill="currentColor">labelled, closed,</text>'
      + '<text x="226" y="184" font-size="11" fill="currentColor">leak proof tubes</text>'
      + '<path d="M240 206h70" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<rect x="236" y="198" width="14" height="16" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="226" y="234" font-size="11" fill="currentColor">pipette with a filler, never the mouth</text>'
      /* contaminated zone */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<rect x="408" y="86" width="60" height="70"/>'
      + '<rect x="486" y="100" width="48" height="56"/>'
      + '</g>'
      + '<path d="M418 86h40l-6-14h-28Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="404" y="176" font-size="11" fill="currentColor">sharps box,</text>'
      + '<text x="404" y="194" font-size="11" fill="currentColor">rigid, never refilled</text>'
      + '<text x="478" y="176" font-size="11" fill="currentColor">discard jar</text>'
      + '<text x="478" y="194" font-size="11" fill="currentColor">and autoclave bag</text>'
      /* one way arrow */
      + '<path d="M60 278h470" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M522 272l12 6-12 6Z" fill="#0f8a4d"/>'
      + '<text x="60" y="300" font-size="12" fill="#0f8a4d">work flows one way only, clean to contaminated, and never back</text>'
      /* basin */
      + '<path d="M560 290h50v24h-50Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="548" y="334" font-size="11" fill="currentColor">wash on leaving</text>'
      + '<text x="60" y="334" font-size="11" fill="currentColor">a specimen that has crossed to the right is never carried back to the left</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Each precaution, the route it blocks, and what happens without it',
      columns: ['Precaution', 'Route it blocks', 'Without it'],
      rows: [
        ['Gloves and a buttoned coat', 'Broken skin', 'A cut or graze takes in blood'],
        ['Mechanical pipette filler', 'The mouth', 'A mouthful of the specimen'],
        ['Goggles or a face shield', 'The eyes', 'A splash into the eye infects through it'],
        ['Work low and slowly, use a cabinet', 'Breathing in a fine spray', 'Tuberculosis from an invisible aerosol'],
        ['Sharps box, no recapping', 'A puncture', 'Hepatitis B from a needle stick'],
        ['Hand washing on leaving', 'Everything the gloves missed', 'The infection is carried out of the room'],
      ],
      note: 'The third column is why the rule exists. '
        + 'A learner who knows it can answer about a situation the list '
        + 'does not mention.',
    },
  ],

  questions: [
    {
      id: 'ls-1',
      ask: 'Standard precautions means:',
      kind: 'choice',
      options: [
        'Treat every specimen as infectious',
        'Treat only labelled specimens as infectious',
        'Use gloves only for blood',
      ],
      answer: 'Treat every specimen as infectious',
      teach: 'You cannot tell which one is, '
        + 'so a precaution used sometimes is not a precaution.',
      level: 3,
    },
    {
      id: 'ls-2',
      ask: 'A used needle should be:',
      kind: 'choice',
      options: [
        'Put uncapped into a rigid sharps box',
        'Recapped and then binned',
        'Bent and put in the waste bag',
      ],
      answer: 'Put uncapped into a rigid sharps box',
      teach: 'The recapping movement is itself the commonest injury.',
      level: 4,
    },
    {
      id: 'ls-3',
      ask: 'The first move with a spilled specimen is to:',
      kind: 'choice',
      options: [
        'Cover it with paper towel',
        'Mop it up quickly',
        'Spray disinfectant over it',
      ],
      answer: 'Cover it with paper towel',
      teach: 'Then pour disinfectant from the outside inwards '
        + 'and leave the full contact time. '
        + 'Mopping spreads it and raises a spray.',
      level: 5,
    },
    {
      id: 'ls-4',
      ask: 'Why is a centrifuge left closed for some minutes after it '
        + 'stops?',
      kind: 'choice',
      options: [
        'A cracked tube may have filled the bowl with an aerosol',
        'The motor is still hot',
        'The tubes must cool',
      ],
      answer: 'A cracked tube may have filled the bowl with an aerosol',
      teach: 'The spray is invisible and is breathed in. '
        + 'Waiting lets it settle.',
      level: 6,
    },
    {
      id: 'ls-5',
      ask: 'Hands are washed on leaving even when gloves were worn because:',
      kind: 'choice',
      options: [
        'Gloves tear, and their outside is contaminated on removal',
        'Soap strengthens the skin',
        'It is only a formality',
      ],
      answer: 'Gloves tear, and their outside is contaminated on removal',
      teach: 'Remove them without touching the outside, then wash. '
        + 'The two steps are one habit.',
      level: 5,
    },
  ],
})

/* ── PEH elective: the skeleton and the muscles ──────────────────────────── */

teach({
  topicId: 'skeleton-muscles-pehe',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Bones give shape, protect organs and work as levers. '
      + 'A joint is where two bones meet, '
      + 'and the type of joint decides which movements are possible. '
      + 'A muscle can only pull, never push, '
      + 'so muscles work in antagonistic pairs: '
      + 'one flexes, the other extends. '
      + 'Name the movement with its proper word: '
      + 'flexion, extension, abduction, adduction, rotation.',
    method: [
      'Name the joint and its type.',
      'Name the movement with the proper term.',
      'Name the muscle that pulls to produce it, and its partner.',
    ],
  },

  idea:
    'The skeleton has about 206 bones in an adult. '
    + 'It gives the body shape, '
    + 'protects the brain, heart and lungs, '
    + 'stores calcium, '
    + 'makes blood cells in its marrow, '
    + 'and gives muscles something to pull against. '
    + 'The bones to know are the skull, '
    + 'the vertebrae of the spine, '
    + 'the ribs and sternum, '
    + 'the clavicle and scapula at the shoulder, '
    + 'the humerus, radius and ulna in the arm, '
    + 'the pelvis, '
    + 'the femur, tibia and fibula in the leg, '
    + 'and the patella at the knee. '
    + 'A joint is where bones meet. '
    + 'A hinge joint, as at the elbow and knee, allows one plane only. '
    + 'A ball and socket joint, at the shoulder and hip, '
    + 'allows movement in every direction and rotation. '
    + 'A pivot joint, at the top of the neck, allows rotation. '
    + 'A gliding joint, in the wrist, allows small sliding movements. '
    + 'The movement words are flexion, which closes a joint, '
    + 'extension, which opens it, '
    + 'abduction, which moves a limb away from the midline, '
    + 'adduction, which brings it back, '
    + 'and rotation, which turns it about its own axis. '
    + 'Muscles to know are the biceps and triceps at the elbow, '
    + 'the quadriceps and hamstrings at the knee, '
    + 'the deltoid at the shoulder, '
    + 'the gastrocnemius in the calf, '
    + 'the gluteus maximus in the buttock, '
    + 'and the abdominals.',

  mechanism:
    'Everything in this topic follows from one fact about muscle: '
    + 'it can shorten and it can relax, '
    + 'and that is all. '
    + 'It cannot lengthen itself. '
    + 'So a muscle can pull a bone but can never push it back, '
    + 'and every joint therefore needs at least two muscles '
    + 'pulling in opposite directions. '
    + 'That pair is called antagonistic. '
    + 'At the elbow, the biceps crosses the front. '
    + 'When it shortens, the forearm is pulled up, which is flexion, '
    + 'and in that movement the biceps is called the agonist, '
    + 'or prime mover, '
    + 'while the triceps is the antagonist and relaxes. '
    + 'To straighten the arm the roles swap: '
    + 'the triceps crosses the back, '
    + 'it shortens, the forearm is pulled down, which is extension, '
    + 'and now the triceps is the agonist. '
    + 'Writing the pair with the roles named, '
    + 'and the word agonist and antagonist used for a stated movement, '
    + 'is what earns a full answer. '
    + 'A learner who writes the biceps bends the arm and the triceps '
    + 'straightens it has the facts but not the vocabulary, '
    + 'and in this subject the vocabulary is the marks. '
    + 'The second mechanism is the lever. '
    + 'The joint is the fulcrum, the muscle supplies the effort, '
    + 'and the weight in the hand is the load. '
    + 'At the elbow, the biceps attaches very close to the joint, '
    + 'perhaps 4 centimetres along, '
    + 'while the load in the hand is maybe 32 centimetres away. '
    + 'So the muscle is pulling with a lever arm eight times shorter '
    + 'than the load’s, '
    + 'which means it must produce about eight times the force of the load. '
    + 'Holding a 5 kilogram bucket needs the biceps to pull with about '
    + '400 newtons. '
    + 'That is the arithmetic behind why the arm tires so fast, '
    + 'and why carrying a load close to the body is easier: '
    + 'you have shortened the load’s lever arm. '
    + 'A head pan carried on the head, '
    + 'which Ghanaian market traders use all day, '
    + 'is the extreme case: '
    + 'the load sits almost directly over the spine, '
    + 'so the lever arm is nearly zero and the muscles do very little. '
    + 'Third, name the joint type before naming the movement, '
    + 'because the type rules out the wrong answers. '
    + 'A knee is a hinge, so it does flexion and extension and nothing else. '
    + 'A question that asks for rotation at the knee '
    + 'is asking you to say that the joint does not permit it, '
    + 'and that forcing it is how a footballer tears a ligament.',

  recap:
    'You have named the main bones and felt your elbow bend. '
    + 'This adds the proper words for each movement, '
    + 'and the reason muscles come in pairs.',

  method: [
    'Name the joint where the movement happens.',
    'State the joint type, and therefore which movements are possible.',
    'Name the movement with its proper term.',
    'Name the agonist, the muscle that shortens to cause it.',
    'Name the antagonist, which relaxes.',
    'For the reverse movement, swap the two roles and say so.',
    'If force is asked for, treat the joint as the fulcrum and compare lever arms.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the joint type at the elbow and at the shoulder, '
        + 'and give one movement each allows.',
      steps: [
        'The elbow is a hinge, so one plane only.',
        'The shoulder is a ball and socket, so every direction.',
      ],
      answer: 'Elbow: hinge, allowing flexion and extension. '
        + 'Shoulder: ball and socket, allowing flexion, extension, '
        + 'abduction, adduction and rotation.',
    },
    {
      level: 4,
      ask: 'A learner lifts a bucket by bending the elbow. '
        + 'Name the movement, the agonist and the antagonist.',
      steps: [
        'Bending the elbow closes the joint, so it is flexion.',
        'The biceps crosses the front and shortens.',
        'The triceps crosses the back and relaxes.',
      ],
      answer: 'Flexion at the elbow. '
        + 'Agonist: biceps. '
        + 'Antagonist: triceps. '
        + 'On lowering the bucket the roles swap.',
    },
    {
      level: 5,
      ask: 'Explain why a muscle cannot push, and what the body does '
        + 'about it.',
      steps: [
        'A muscle shortens when stimulated and relaxes when not.',
        'Relaxing is not the same as lengthening itself.',
        'So it can pull a bone one way only.',
        'Another muscle on the other side of the joint pulls it back.',
      ],
      answer: 'Because contraction only shortens the muscle. '
        + 'The body solves it with antagonistic pairs: '
        + 'at the elbow the biceps and triceps pull in opposite '
        + 'directions, and each stretches the other.',
    },
    {
      level: 6,
      ask: 'The biceps attaches 4 centimetres from the elbow '
        + 'and a 5 kilogram load is held 32 centimetres from it. '
        + 'Estimate the muscle force, taking the weight of 5 kilograms '
        + 'as 50 newtons, and say why carrying a load close in is easier.',
      steps: [
        'Take moments about the elbow, which is the fulcrum.',
        'Load moment: 50 newtons times 0.32 metres, which is 16 newton metres.',
        'Muscle moment must match it: force times 0.04 metres equals 16.',
        'Force equals 16 divided by 0.04, which is 400 newtons.',
      ],
      answer: 'About 400 newtons, which is eight times the load. '
        + 'The muscle has a much shorter lever arm, so it must pull harder. '
        + 'Bringing the load closer shortens its lever arm and cuts the '
        + 'muscle force in proportion, '
        + 'which is why a head pan over the spine is carried so easily.',
    },
  ],

  traps: [
    {
      mistake: 'Writing bends and straightens instead of flexion and '
        + 'extension.',
      why: 'The proper terms are the marks in this subject. '
        + 'Use flexion, extension, abduction, adduction and rotation.',
    },
    {
      mistake: 'Saying the triceps pushes the arm straight.',
      why: 'No muscle pushes. '
        + 'The triceps pulls on the back of the forearm, '
        + 'which opens the joint.',
    },
    {
      mistake: 'Giving rotation as a movement of the knee or elbow.',
      why: 'Both are hinge joints and allow one plane only. '
        + 'Forced rotation at the knee is how ligaments tear.',
    },
    {
      mistake: 'Naming an agonist without naming the movement.',
      why: 'The roles depend on the movement. '
        + 'The biceps is the agonist in flexion and the antagonist in '
        + 'extension, so the movement has to be stated first.',
    },
  ],

  extension:
    'A muscle pulls hardest in the middle of its range '
    + 'and weakly at the ends. '
    + 'That is why a press up is hardest at the bottom. '
    + 'It is also why a coach starts a learner on a half range movement. '
    + 'A muscle can work in three ways. '
    + 'Shortening under load is concentric. '
    + 'Holding a length under load is isometric. '
    + 'Lengthening under load while resisting is eccentric. '
    + 'The eccentric one causes most of the soreness two days later. '
    + 'That is why running downhill hurts more than running up.',

  figure: {
    alt: 'The arm drawn as a lever. The elbow is marked as the fulcrum, '
      + 'the biceps is drawn crossing the front of the joint and '
      + 'attaching only four centimetres along the forearm, with an '
      + 'upward effort arrow at that point, and a bucket hangs from the '
      + 'hand thirty two centimetres from the elbow with a downward load '
      + 'arrow. The two lever arms are dimensioned beneath, showing the '
      + 'muscle arm as one eighth of the load arm. The triceps is drawn '
      + 'on the back of the joint and labelled as the antagonist, '
      + 'relaxed during this movement.',
    svg: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* upper arm and forearm */
      + '<path d="M90 60v110" stroke="currentColor" stroke-width="5" fill="none"/>'
      + '<path d="M90 170h420" stroke="currentColor" stroke-width="5" fill="none"/>'
      + '<circle cx="90" cy="170" r="10" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="36" y="196" font-size="12" fill="currentColor">elbow:</text>'
      + '<text x="30" y="212" font-size="12" fill="currentColor">the fulcrum</text>'
      + '<text x="60" y="52" font-size="12" fill="currentColor">humerus</text>'
      /* biceps */
      + '<path d="M86 80q28 40 58 84" stroke="#0f8a4d" stroke-width="4" fill="none"/>'
      + '<text x="128" y="112" font-size="12" fill="#0f8a4d">biceps, the agonist</text>'
      + '<path d="M146 164V120" stroke="#0f8a4d" stroke-width="2" fill="none"/>'
      + '<path d="M140 128l6-10 6 10Z" fill="#0f8a4d"/>'
      + '<text x="152" y="146" font-size="11" fill="#0f8a4d">effort, about 400 N</text>'
      /* triceps */
      + '<path d="M96 90q24 48 44 86" stroke="currentColor" stroke-width="3" stroke-dasharray="6 4" fill="none" opacity="0.6"/>'
      + '<text x="106" y="252" font-size="12" fill="currentColor">triceps, the antagonist, relaxed</text>'
      /* bucket */
      + '<path d="M486 176h48l-6 36h-36Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M510 176V214" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M504 206l6 10 6-10Z" fill="currentColor"/>'
      + '<text x="470" y="232" font-size="11" fill="currentColor">load, 50 N</text>'
      /* dimensions */
      + '<g stroke="currentColor" stroke-width="1" fill="none">'
      + '<path d="M90 286v22"/><path d="M146 286v22"/><path d="M510 286v22"/>'
      + '<path d="M90 298h56"/><path d="M90 316h420"/>'
      + '</g>'
      + '<text x="98" y="292" font-size="11" fill="#0f8a4d">4 cm</text>'
      + '<text x="240" y="336" font-size="11" fill="currentColor">32 cm</text>'
      + '<text x="30" y="352" font-size="11" fill="#0f8a4d">the muscle arm is one eighth of the load arm, so the muscle pulls with eight times the force</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Each joint with its type, its movements and the muscle pair',
      columns: ['Joint', 'Type', 'Movements it allows', 'Agonist in the first movement', 'Antagonist'],
      rows: [
        ['Elbow', 'Hinge', 'Flexion, extension', 'Biceps', 'Triceps'],
        ['Knee', 'Hinge', 'Flexion, extension', 'Hamstrings', 'Quadriceps'],
        ['Shoulder', 'Ball and socket', 'All, including rotation', 'Deltoid in abduction', 'Latissimus dorsi'],
        ['Hip', 'Ball and socket', 'All, including rotation', 'Gluteus maximus in extension', 'Hip flexors'],
        ['Ankle', 'Hinge', 'Plantar flexion, dorsiflexion', 'Gastrocnemius', 'Tibialis anterior'],
      ],
      note: 'The two hinge rows allow no rotation at all. '
        + 'A question offering rotation at the knee is asking you to '
        + 'reject it.',
    },
  ],

  questions: [
    {
      id: 'sm-1',
      ask: 'Closing a joint, as in bending the elbow, is called:',
      kind: 'choice',
      options: ['Flexion', 'Extension', 'Abduction'],
      answer: 'Flexion',
      teach: 'Extension opens it. '
        + 'Abduction moves a limb away from the midline.',
      level: 3,
    },
    {
      id: 'sm-2',
      ask: 'When the elbow is extended, the agonist is the:',
      kind: 'choice',
      options: ['Triceps', 'Biceps', 'Deltoid'],
      answer: 'Triceps',
      teach: 'The roles swap with the movement. '
        + 'In flexion the biceps is the agonist.',
      level: 4,
    },
    {
      id: 'sm-3',
      ask: 'Why must muscles work in antagonistic pairs?',
      kind: 'choice',
      options: [
        'A muscle can only pull, never push',
        'One muscle would tire too quickly',
        'Joints need two tendons',
      ],
      answer: 'A muscle can only pull, never push',
      teach: 'Contraction only shortens it. '
        + 'A second muscle on the other side pulls the bone back.',
      level: 5,
    },
    {
      id: 'sm-4',
      ask: 'A muscle attaches 5 centimetres from a joint and the load is '
        + '40 centimetres away. The muscle force is how many times '
        + 'the load?',
      kind: 'numeric',
      options: [],
      answer: '8',
      teach: '40 divided by 5 is 8. '
        + 'Moments about the joint must balance, '
        + 'so the shorter arm needs the larger force.',
      level: 6,
    },
    {
      id: 'sm-5',
      ask: 'Which joint type allows rotation?',
      kind: 'choice',
      options: ['Ball and socket', 'Hinge', 'Gliding'],
      answer: 'Ball and socket',
      teach: 'The shoulder and hip rotate. '
        + 'A hinge, such as the knee, does not.',
      level: 4,
    },
  ],
})

/* ── PEH elective: the heart, lungs and exercise ─────────────────────────── */

teach({
  topicId: 'heart-lungs-pehe',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Working muscle needs more oxygen and makes more carbon dioxide, '
      + 'so the body delivers more blood and moves more air. '
      + 'Cardiac output equals heart rate times stroke volume, '
      + 'and both rise. '
      + 'Breathing rate and the depth of each breath both rise. '
      + 'Blood is also redirected: '
      + 'vessels to the muscles widen '
      + 'and those to the gut narrow. '
      + 'Write the chain, not just the first link.',
    method: [
      'State the demand: more oxygen in, more carbon dioxide out.',
      'Give cardiac output as heart rate times stroke volume.',
      'Name the redistribution, and the recovery after.',
    ],
  },

  idea:
    'At rest a heart beats about 70 times a minute '
    + 'and pushes about 70 millilitres with each beat. '
    + 'The volume pumped in a minute is the cardiac output, '
    + 'and it is heart rate times stroke volume, '
    + 'so about 4900 millilitres, near 5 litres a minute. '
    + 'In hard exercise the rate may reach 180 '
    + 'and the stroke volume 120 millilitres, '
    + 'giving over 21 litres a minute. '
    + 'Breathing changes in the same two ways: '
    + 'the rate rises from about 14 breaths a minute to 40 or more, '
    + 'and the volume of each breath, the tidal volume, '
    + 'rises from about 500 millilitres to 2 litres or more. '
    + 'The product of those two is the minute ventilation. '
    + 'Blood is also redirected. '
    + 'Vessels supplying the working muscles widen, '
    + 'which is vasodilation, '
    + 'and those supplying the gut and the skin at first narrow, '
    + 'which is vasoconstriction, '
    + 'so a larger share of a larger output reaches the muscle. '
    + 'After exercise the rate falls back, '
    + 'and how fast it falls is the recovery rate, '
    + 'which is a good measure of fitness.',

  mechanism:
    'The question in this topic is almost always why, '
    + 'and the answer has to be a chain with every link in it. '
    + 'A one link answer, the heart beats faster to give more oxygen, '
    + 'earns one mark out of four. '
    + 'The full chain runs like this. '
    + 'Working muscle uses oxygen and glucose '
    + 'and produces carbon dioxide. '
    + 'The rising carbon dioxide makes the blood slightly more acid. '
    + 'Receptors in the aorta and the carotid arteries detect that, '
    + 'and the brain stem responds by raising the heart rate, '
    + 'raising the force of each beat, '
    + 'and raising the rate and depth of breathing. '
    + 'The result is more oxygen delivered '
    + 'and more carbon dioxide removed. '
    + 'Notice what drives it: '
    + 'the rise in carbon dioxide, not a fall in oxygen. '
    + 'That is the step learners miss, '
    + 'and it is a mark in its own right, '
    + 'because it explains why holding your breath becomes unbearable '
    + 'long before you are short of oxygen. '
    + 'The second mechanism is the product, '
    + 'and it has to be written as a product. '
    + 'Cardiac output equals heart rate times stroke volume. '
    + 'Two numbers can rise, not one, '
    + 'and a trained athlete is trained mostly in the second. '
    + 'A village farmer who walks and carries loads daily '
    + 'may have a resting heart rate of 50 '
    + 'while an untrained classmate sits at 75, '
    + 'and both have the same cardiac output at rest, '
    + 'because the fitter heart is larger and stronger '
    + 'and pushes more with each beat. '
    + 'The same 5 litres, fewer beats. '
    + 'Writing that sentence is how the question about a low resting '
    + 'pulse is answered. '
    + 'Third, the redistribution, '
    + 'which explains two practical things a learner has felt. '
    + 'Because blood is drawn away from the gut during hard work, '
    + 'running soon after a heavy meal gives cramp and nausea. '
    + 'And because the skin vessels are needed for cooling, '
    + 'the body ends up competing with itself on a hot afternoon: '
    + 'blood for the muscles and blood for the skin. '
    + 'That competition is why performance falls in heat '
    + 'and why water matters, '
    + 'since sweating takes fluid out of the very blood that must '
    + 'be pumped. '
    + 'Last, what to write when a graph is given. '
    + 'Name the three phases: '
    + 'the rise at the start of work, '
    + 'the steady state where delivery matches demand, '
    + 'and the recovery, which falls quickly at first and then slowly. '
    + 'The slow tail is the body repaying what it borrowed, '
    + 'and a learner who labels the three phases '
    + 'has answered most of the question before saying anything else.',

  recap:
    'You know that you breathe harder and your heart pounds when you run. '
    + 'This says what is actually changing, by how much, '
    + 'and what the body is responding to.',

  method: [
    'State the demand of the working muscle: oxygen in, carbon dioxide out.',
    'Name the stimulus: rising carbon dioxide and a small fall in pH.',
    'Name the receptors and the control centre in the brain stem.',
    'Give cardiac output as heart rate times stroke volume, and say both rise.',
    'Give ventilation as breathing rate times tidal volume, and say both rise.',
    'Name the redistribution: muscle vessels widen, gut vessels narrow.',
    'For a graph, label the rise, the steady state and the recovery.',
    'If fitness is asked about, use stroke volume and recovery rate.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give the cardiac output when the heart rate is 70 beats a '
        + 'minute and the stroke volume is 70 millilitres.',
      steps: [
        'Cardiac output equals heart rate times stroke volume.',
        '70 times 70 is 4900 millilitres.',
      ],
      answer: '4900 millilitres a minute, which is about 5 litres.',
    },
    {
      level: 4,
      ask: 'In hard work the rate reaches 180 and the stroke volume 120 '
        + 'millilitres. Give the output and the increase on rest.',
      steps: [
        '180 times 120 is 21600 millilitres.',
        'That is 21.6 litres a minute.',
        'Resting output was about 4.9 litres.',
        '21.6 divided by 4.9 is about 4.4.',
      ],
      answer: 'About 21.6 litres a minute, '
        + 'which is more than four times the resting value. '
        + 'Both factors rose, which is why the product rose so much.',
    },
    {
      level: 5,
      ask: 'A farmer who carries loads daily has a resting pulse of 50, '
        + 'and a classmate has 75. Explain, using the product.',
      steps: [
        'Both need about the same 5 litres a minute at rest.',
        'Cardiac output is heart rate times stroke volume.',
        'The trained heart is larger and stronger, '
          + 'so each beat pushes more blood.',
        'A larger stroke volume means fewer beats are needed '
          + 'for the same output.',
      ],
      answer: 'The farmer’s stroke volume is larger, '
        + 'so the same output is reached with fewer beats. '
        + 'A low resting pulse is a sign of a strong heart, '
        + 'not of a weak one.',
    },
    {
      level: 6,
      ask: 'Explain why running hard soon after a heavy meal of fufu '
        + 'causes cramp, and why performance falls on a hot afternoon.',
      steps: [
        'During hard work vessels to the muscles widen '
          + 'and vessels to the gut narrow.',
        'So blood needed for digestion is taken away, '
          + 'and the undigested meal sits in a gut with a poor supply.',
        'In heat, the skin also needs blood, for cooling.',
        'Muscle and skin now compete for the same output, '
          + 'and sweating removes fluid from the blood itself.',
      ],
      answer: 'Both are problems of distribution, not of the heart. '
        + 'Blood is redirected away from the gut, which causes the cramp, '
        + 'and in heat the demand for skin flow competes with the demand '
        + 'from the muscles, while sweating reduces the blood volume '
        + 'available to pump.',
    },
  ],

  traps: [
    {
      mistake: 'Answering only that the heart beats faster.',
      why: 'Stroke volume rises too, '
        + 'and the output is the product of both. '
        + 'A one link answer earns one mark.',
    },
    {
      mistake: 'Saying a fall in oxygen drives the change.',
      why: 'The main stimulus is the rise in carbon dioxide '
        + 'and the small fall in pH. '
        + 'That is why holding your breath becomes unbearable early.',
    },
    {
      mistake: 'Treating a low resting pulse as unfitness.',
      why: 'It usually means a large stroke volume, '
        + 'so fewer beats deliver the same output.',
    },
    {
      mistake: 'Confusing tidal volume with breathing rate.',
      why: 'Rate is breaths a minute; tidal volume is the size of one '
        + 'breath. '
        + 'Ventilation is the two multiplied.',
    },
  ],

  extension:
    'For the first minute of hard work, '
    + 'delivery has not caught up with demand. '
    + 'So the muscle works for a while without enough oxygen. '
    + 'What it borrows must be repaid later. '
    + 'That is why breathing stays heavy for minutes after you stop. '
    + 'The name for it is excess post exercise oxygen consumption. '
    + 'It is also why a warm up matters. '
    + 'A warm up raises the heart rate '
    + 'and opens the muscle vessels before the hard work starts. '
    + 'So less is borrowed, and less has to be repaid.',

  figure: {
    alt: 'A graph of heart rate in beats a minute against time in '
      + 'minutes, with three phases labelled. The line begins flat near '
      + 'seventy at rest, rises steeply when exercise starts, levels off '
      + 'near one hundred and seventy in a phase marked steady state '
      + 'where delivery matches demand, then falls after exercise stops, '
      + 'quickly at first and then slowly, with the slow tail marked as '
      + 'repaying what was borrowed. A dashed line marks the resting '
      + 'rate so that the recovery can be seen returning towards it.',
    svg: '<svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M70 290V40"/><path d="M70 290h520"/>'
      + '</g>'
      /* axis labels */
      + '<text x="22" y="46" font-size="11" fill="currentColor">180</text>'
      + '<text x="28" y="172" font-size="11" fill="currentColor">120</text>'
      + '<text x="34" y="246" font-size="11" fill="currentColor">70</text>'
      + '<text x="70" y="26" font-size="11" fill="currentColor">heart rate, beats a minute</text>'
      + '<text x="520" y="312" font-size="11" fill="currentColor">time</text>'
      /* resting dashed line */
      + '<path d="M70 240h520" stroke="currentColor" stroke-width="1" stroke-dasharray="6 5" fill="none"/>'
      + '<text x="500" y="234" font-size="11" fill="currentColor">resting rate</text>'
      /* curve */
      + '<path d="M70 240h60" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M130 240C160 240 170 70 210 62" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M210 62h150" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M360 62C390 62 396 180 430 206C470 236 520 238 590 240" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      /* phase markers */
      + '<path d="M130 290V40" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>'
      + '<path d="M360 290V40" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/>'
      + '<text x="76" y="330" font-size="11" fill="currentColor">rest</text>'
      + '<text x="148" y="330" font-size="11" fill="currentColor">rise, then steady state: delivery matches demand</text>'
      + '<text x="372" y="330" font-size="11" fill="currentColor">recovery</text>'
      + '<text x="140" y="104" font-size="11" fill="#0f8a4d">both rate and stroke volume rise</text>'
      + '<text x="398" y="186" font-size="11" fill="#0f8a4d">fast fall, then</text>'
      + '<text x="398" y="202" font-size="11" fill="#0f8a4d">a slow tail: repaying</text>'
      + '<text x="398" y="218" font-size="11" fill="#0f8a4d">what was borrowed</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'What changes between rest and hard exercise, and why',
      columns: ['Measure', 'At rest', 'In hard work', 'Why it changes'],
      rows: [
        ['Heart rate', 'About 70 a minute', 'Up to 180', 'The brain stem speeds the heart as carbon dioxide rises'],
        ['Stroke volume', 'About 70 millilitres', 'Up to 120', 'The heart fills more and contracts harder'],
        ['Cardiac output', 'About 5 litres a minute', 'Over 21 litres', 'It is the two above multiplied'],
        ['Breathing rate', 'About 14 a minute', 'Over 40', 'To clear carbon dioxide faster'],
        ['Tidal volume', 'About 500 millilitres', 'Over 2 litres', 'Deeper breaths use more of the lung'],
        ['Blood to the gut', 'A large share', 'A small share', 'Vessels narrow so muscle gets the larger share'],
      ],
      note: 'Two rows multiply into a third twice over. '
        + 'That is why an answer naming only the heart rate is a quarter '
        + 'of an answer.',
    },
  ],

  questions: [
    {
      id: 'hl-1',
      ask: 'Cardiac output is:',
      kind: 'choice',
      options: [
        'Heart rate times stroke volume',
        'Heart rate plus stroke volume',
        'Stroke volume divided by heart rate',
      ],
      answer: 'Heart rate times stroke volume',
      teach: 'Both factors rise in exercise, '
        + 'which is why the output can quadruple.',
      level: 3,
    },
    {
      id: 'hl-2',
      ask: 'Heart rate 80, stroke volume 75 millilitres. '
        + 'Give the cardiac output in millilitres a minute.',
      kind: 'numeric',
      options: [],
      answer: '6000',
      teach: '80 times 75 is 6000 millilitres, which is 6 litres.',
      level: 4,
    },
    {
      id: 'hl-3',
      ask: 'The main stimulus for breathing harder during exercise is:',
      kind: 'choice',
      options: [
        'A rise in carbon dioxide',
        'A fall in oxygen',
        'A rise in temperature',
      ],
      answer: 'A rise in carbon dioxide',
      teach: 'It makes the blood slightly more acid, '
        + 'which the receptors detect. '
        + 'This is why breath holding becomes unbearable early.',
      level: 5,
    },
    {
      id: 'hl-4',
      ask: 'A trained person has a low resting pulse because:',
      kind: 'choice',
      options: [
        'The stroke volume is larger, so fewer beats give the same output',
        'The body needs less oxygen at rest',
        'The heart is smaller',
      ],
      answer: 'The stroke volume is larger, so fewer beats give the same output',
      teach: 'Same output, fewer beats. '
        + 'Recovery rate after work is the other good fitness measure.',
      level: 6,
    },
    {
      id: 'hl-5',
      ask: 'During hard work, vessels supplying the gut:',
      kind: 'choice',
      options: ['Narrow', 'Widen', 'Do not change'],
      answer: 'Narrow',
      teach: 'So a larger share reaches the muscle. '
        + 'It is also why running after a heavy meal causes cramp.',
      level: 5,
    },
  ],
})

/* ── Agricultural Science: soil formation and profile ────────────────────── */

teach({
  topicId: 'soil-formation',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Soil forms when parent rock is broken down '
      + 'and mixed with decayed plant and animal matter. '
      + 'The breaking down is weathering, '
      + 'and it is physical, chemical or biological. '
      + 'Five factors control the result: '
      + 'parent material, climate, organisms, relief and time. '
      + 'Water then moves fine clay and iron downwards, '
      + 'which is what gives a soil its layers, called horizons.',
    method: [
      'Name the parent material and the weathering acting on it.',
      'Dig or read a profile and name each horizon from the top.',
      'Read drainage and fertility from what each horizon contains.',
    ],
  },

  idea:
    'Soil is weathered rock mixed with organic matter, '
    + 'water, air and living things. '
    + 'Weathering is the breaking down of rock in place. '
    + 'Physical weathering breaks rock without changing it chemically: '
    + 'heating by day and cooling by night cracks it, '
    + 'and water in a crack prises it apart. '
    + 'Chemical weathering changes the minerals: '
    + 'rain water with dissolved carbon dioxide is slightly acid '
    + 'and attacks them, '
    + 'and in the hot wet south of Ghana it works deeply and fast. '
    + 'Biological weathering is done by living things: '
    + 'roots widen cracks, '
    + 'and lichens and bacteria produce acids. '
    + 'Five factors decide what soil results. '
    + 'Parent material sets the minerals available. '
    + 'Climate sets how fast weathering and leaching happen. '
    + 'Organisms add and mix organic matter. '
    + 'Relief decides whether water runs off or collects. '
    + 'Time decides how far the whole process has gone. '
    + 'A vertical cut through soil shows horizons, '
    + 'named from the top: '
    + 'O for the litter layer, '
    + 'A for the dark topsoil, '
    + 'B for the subsoil, '
    + 'C for weathered parent material, '
    + 'and R for solid rock.',

  mechanism:
    'The idea that makes a profile readable, rather than a list to recite, '
    + 'is that water moves material downwards. '
    + 'Rain soaking through the A horizon '
    + 'dissolves and carries away bases such as calcium and potassium, '
    + 'which is leaching, '
    + 'and it also carries fine clay particles and iron oxides down '
    + 'to be deposited in the B horizon. '
    + 'That is why a B horizon is usually heavier, '
    + 'stickier and redder or more yellow than the A above it. '
    + 'Once you know that, the profile tells you things '
    + 'nobody wrote on it. '
    + 'A thin A horizon over a dense clay B '
    + 'means water will sit on that clay after heavy rain, '
    + 'so the field needs ridges or drains '
    + 'and will not suit a crop that rots in wet ground. '
    + 'Grey or blue grey mottling in the B horizon '
    + 'means the soil has spent long periods waterlogged, '
    + 'because iron with no air turns from red to grey, '
    + 'and that colour is a record of drainage over years, '
    + 'which a single visit cannot otherwise reveal. '
    + 'A deep red profile with no mottles, '
    + 'the forest ochrosols of the Ashanti and Eastern regions, '
    + 'means free drainage and deep weathering. '
    + 'That is the reasoning a question is really asking for '
    + 'when it says describe the profile and comment on its suitability. '
    + 'The second mechanism worth stating is why the A horizon is the '
    + 'one that matters and the one that is lost. '
    + 'Nearly all the organic matter, '
    + 'the nutrients held on it, '
    + 'and the biological life of the soil '
    + 'are in the top 15 to 25 centimetres. '
    + 'It took centuries to accumulate. '
    + 'Burning the bush before planting destroys the organic matter '
    + 'at the surface in an hour, '
    + 'and the first heavy rain on bare, unprotected soil '
    + 'carries the loosened topsoil downhill. '
    + 'So the practices that sound like mere advice, '
    + 'mulching, planting across the slope, '
    + 'leaving crop residues, planting a cover crop, '
    + 'are all one idea: '
    + 'keep the A horizon covered and in place, '
    + 'because the B horizon underneath it will not grow a crop. '
    + 'Third, the honest note about equipment. '
    + 'A profile is read from a pit about 1.5 metres deep, '
    + 'and a school with a plot can dig one '
    + 'with a cutlass, a hoe and a shovel in an afternoon. '
    + 'What a school cannot do is measure the chemistry: '
    + 'exchangeable bases and organic carbon need a laboratory. '
    + 'So learn colour, depth, texture by the feel test, '
    + 'structure by crumbling a clod, '
    + 'and mottling, '
    + 'all of which are examinable, '
    + 'and say where a soil test would add what the eye cannot see.',

  recap:
    'You have met soil as the thing crops grow in, '
    + 'and sand, clay and loam as its types. '
    + 'This asks where it came from, '
    + 'and why a soil is not the same all the way down.',

  method: [
    'Identify the parent material if it can be seen at the bottom.',
    'Name the weathering processes acting on it.',
    'Dig or read a profile to about 1.5 metres.',
    'Name each horizon from the top: O, A, B, C, R.',
    'Record the depth, colour and texture of each.',
    'Look for mottling, which records past waterlogging.',
    'Read drainage from the clay content and the colour of the B horizon.',
    'State what crop it suits, and what the farmer must do about its fault.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the three kinds of weathering and give one example '
        + 'of each.',
      steps: [
        'Physical: heating by day and cooling by night cracks the rock.',
        'Chemical: slightly acid rain water attacks the minerals.',
        'Biological: a root widens a crack.',
      ],
      answer: 'Physical, chemical and biological weathering.',
    },
    {
      level: 4,
      ask: 'Name the horizons of a soil profile from the top, '
        + 'and say what each is.',
      steps: [
        'O: the litter of leaves and stems on the surface.',
        'A: the dark topsoil, with the organic matter and the roots.',
        'B: the subsoil, with clay and iron washed down from above.',
        'C: weathered parent material, still recognisable as rock.',
        'R: the solid rock itself.',
      ],
      answer: 'O, A, B, C and R. '
        + 'The A horizon is where nearly all the fertility is.',
    },
    {
      level: 5,
      ask: 'A profile shows a thin dark A horizon over a heavy red clay '
        + 'B horizon with grey mottles. '
        + 'Say what this tells a farmer.',
      steps: [
        'A thin A horizon means little organic matter and low fertility.',
        'A heavy clay B horizon will hold water and drain slowly.',
        'Grey mottles mean the soil has been waterlogged for long periods, '
          + 'because iron with no air turns grey.',
        'So the field floods in the wet season.',
      ],
      answer: 'Poor drainage, and little fertility at the surface. '
        + 'It suits rice in a valley bottom rather than cassava, '
        + 'which rots in wet ground, '
        + 'and it needs ridging or drains '
        + 'and organic matter added to the topsoil.',
    },
    {
      level: 6,
      ask: 'Explain why burning the bush before planting '
        + 'costs more than it gains, in terms of the profile.',
      steps: [
        'Almost all the organic matter and nutrient holding capacity '
          + 'sits in the top 15 to 25 centimetres.',
        'Burning destroys the organic matter and leaves ash, '
          + 'which gives a flush of potassium but no organic matter.',
        'The surface is left bare, with no cover against raindrops.',
        'The first heavy rain detaches and carries the loosened topsoil '
          + 'downhill.',
        'The B horizon exposed beneath has clay and iron but almost no '
          + 'nutrients or life.',
      ],
      answer: 'The ash gives one good season, '
        + 'then the A horizon it came from is gone. '
        + 'Since the B horizon will not grow a crop, '
        + 'the farmer moves on and the land takes decades to recover. '
        + 'Mulching, residues and planting across the slope '
        + 'all do the same job: keep the A horizon covered and in place.',
    },
  ],

  traps: [
    {
      mistake: 'Naming the horizons without saying what is in them.',
      why: 'The letters earn little. '
        + 'The marks are in the organic matter in A '
        + 'and the washed down clay and iron in B.',
    },
    {
      mistake: 'Treating the B horizon as spare topsoil.',
      why: 'It has clay and iron but almost no organic matter or life. '
        + 'Scraping the A horizon off does not reveal more soil, '
        + 'it reveals a poor one.',
    },
    {
      mistake: 'Ignoring mottling.',
      why: 'Grey mottles record months of waterlogging in past years, '
        + 'which a dry season visit would never show.',
    },
    {
      mistake: 'Saying soil is just weathered rock.',
      why: 'Without organic matter it is regolith, not soil. '
        + 'The mixing in of decayed plant and animal matter '
        + 'is part of the definition.',
    },
  ],

  extension:
    'Soil forms very slowly. '
    + 'The usual figure is 2 to 3 centimetres of topsoil a century '
    + 'under natural cover. '
    + 'One heavy storm on a bare slope can take more than that. '
    + 'So policy treats soil as a resource '
    + 'that cannot be renewed in a human lifetime. '
    + 'That is the argument behind the rules against farming '
    + 'in the headwaters of a river. '
    + 'It is also why contour planting is pressed '
    + 'on the slopes of the Kwahu scarp.',

  figure: {
    alt: 'A soil profile drawn as a vertical cut from the surface to '
      + 'solid rock, with five labelled horizons. At the top a thin O '
      + 'horizon of leaf litter, then a dark A horizon about twenty '
      + 'centimetres thick marked as holding the organic matter and most '
      + 'of the roots, then a thicker B horizon marked as receiving the '
      + 'clay and iron washed down from above, then a C horizon of '
      + 'broken weathered rock, and at the bottom solid rock marked R. '
      + 'A downward arrow drawn alongside is labelled leaching, showing '
      + 'the direction fine clay and dissolved bases travel, and a depth '
      + 'scale in centimetres runs up the left side.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* horizons */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<rect x="120" y="40" width="300" height="22"/>'
      + '<rect x="120" y="62" width="300" height="66"/>'
      + '<rect x="120" y="128" width="300" height="110"/>'
      + '<rect x="120" y="238" width="300" height="70"/>'
      + '<rect x="120" y="308" width="300" height="46"/>'
      + '</g>'
      /* texture hints */
      + '<g stroke="currentColor" stroke-width="1" opacity="0.5" fill="none">'
      + '<path d="M130 52h20"/><path d="M170 48h24"/><path d="M220 54h20"/><path d="M280 50h26"/><path d="M340 53h22"/>'
      + '</g>'
      + '<g fill="currentColor" opacity="0.55">'
      + '<circle cx="150" cy="84" r="3"/><circle cx="196" cy="100" r="3"/><circle cx="248" cy="78" r="3"/>'
      + '<circle cx="300" cy="104" r="3"/><circle cx="358" cy="88" r="3"/><circle cx="392" cy="112" r="3"/>'
      + '</g>'
      + '<g stroke="currentColor" stroke-width="1" opacity="0.4" fill="none">'
      + '<path d="M130 160h280"/><path d="M130 186h280"/><path d="M130 212h280"/>'
      + '</g>'
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M140 256l24 14"/><path d="M200 284l26-16"/><path d="M270 258l22 16"/><path d="M340 286l26-18"/>'
      + '</g>'
      /* roots in A */
      + '<g stroke="#0f8a4d" stroke-width="2" fill="none">'
      + '<path d="M176 62v54"/><path d="M176 84l-16 14"/><path d="M176 96l18 16"/>'
      + '<path d="M318 62v48"/><path d="M318 88l16 14"/>'
      + '</g>'
      /* labels */
      + '<text x="430" y="56" font-size="12" fill="currentColor">O: leaf litter on the surface</text>'
      + '<text x="430" y="92" font-size="12" fill="currentColor">A: dark topsoil, the organic</text>'
      + '<text x="430" y="108" font-size="12" fill="currentColor">matter and most of the roots</text>'
      + '<text x="430" y="172" font-size="12" fill="currentColor">B: subsoil, receives the clay</text>'
      + '<text x="430" y="188" font-size="12" fill="currentColor">and iron washed down, so it is</text>'
      + '<text x="430" y="204" font-size="12" fill="currentColor">heavier and often redder</text>'
      + '<text x="430" y="272" font-size="12" fill="currentColor">C: weathered broken rock</text>'
      + '<text x="430" y="336" font-size="12" fill="currentColor">R: solid parent rock</text>'
      /* leaching arrow */
      + '<path d="M86 66v226" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M80 284l6 12 6-12Z" fill="#0f8a4d"/>'
      + '<text x="30" y="160" font-size="11" fill="#0f8a4d">leaching</text>'
      + '<text x="24" y="176" font-size="11" fill="#0f8a4d">carries bases</text>'
      + '<text x="24" y="192" font-size="11" fill="#0f8a4d">and fine clay</text>'
      + '<text x="24" y="208" font-size="11" fill="#0f8a4d">downwards</text>'
      /* depth scale */
      + '<text x="120" y="34" font-size="11" fill="currentColor">surface</text>'
      + '<text x="120" y="378" font-size="11" fill="currentColor">about 150 cm down</text>'
      + '<text x="24" y="406" font-size="12" fill="currentColor">the A horizon took centuries to build and one bare rainy season to lose</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Each horizon, what is in it, and what it means to a farmer',
      columns: ['Horizon', 'What it is', 'Look for', 'What it tells you'],
      rows: [
        ['O', 'Litter of leaves and stems', 'Thickness, how rotted', 'How much organic matter is being returned'],
        ['A', 'Dark topsoil', 'Depth and darkness', 'Nearly all the fertility; thin means poor'],
        ['B', 'Subsoil', 'Clay, colour, mottles', 'Drainage; grey mottles mean waterlogging'],
        ['C', 'Weathered rock', 'Pieces still shaped like rock', 'What minerals the soil started from'],
        ['R', 'Solid rock', 'Depth at which it is met', 'How deep a root can go at all'],
      ],
      note: 'The third and fourth columns are what a profile pit is dug '
        + 'for. The letters alone earn very little.',
    },
    {
      caption: 'The five factors of soil formation, with a Ghanaian example of each',
      columns: ['Factor', 'What it decides', 'Example'],
      rows: [
        ['Parent material', 'Which minerals are present at all', 'Granite gives a sandier soil than shale'],
        ['Climate', 'How fast weathering and leaching work', 'Deep red soils in the wet south, shallower in the north'],
        ['Organisms', 'How much organic matter is added and mixed', 'Termites and earthworms bringing soil up'],
        ['Relief', 'Whether water runs off or collects', 'Thin soil on the Kwahu scarp, deep in the valley below'],
        ['Time', 'How far the whole process has gone', 'A young soil on a recent river deposit'],
      ],
    },
  ],

  questions: [
    {
      id: 'sf-1',
      ask: 'Which horizon holds nearly all the organic matter?',
      kind: 'choice',
      options: ['A', 'B', 'C', 'R'],
      answer: 'A',
      teach: 'It is the dark topsoil, the top 15 to 25 centimetres, '
        + 'and it is the layer erosion takes first.',
      level: 3,
    },
    {
      id: 'sf-2',
      ask: 'Clay and iron in the B horizon came from:',
      kind: 'choice',
      options: [
        'Washing down from the A horizon above',
        'Rising up from the rock below',
        'Being blown in by wind',
      ],
      answer: 'Washing down from the A horizon above',
      teach: 'Water moves material downwards, '
        + 'which is why the B horizon is heavier and often redder.',
      level: 5,
    },
    {
      id: 'sf-3',
      ask: 'Grey mottles in a subsoil are a record of:',
      kind: 'choice',
      options: [
        'Long periods of waterlogging',
        'Recent burning',
        'A sandy parent rock',
      ],
      answer: 'Long periods of waterlogging',
      teach: 'Iron with no air turns from red to grey. '
        + 'A dry season visit would show nothing else.',
      level: 6,
    },
    {
      id: 'sf-4',
      ask: 'How many factors of soil formation are usually named?',
      kind: 'numeric',
      options: [],
      answer: '5',
      teach: 'Parent material, climate, organisms, relief and time.',
      level: 4,
    },
    {
      id: 'sf-5',
      ask: 'Weathering by a root widening a crack is:',
      kind: 'choice',
      options: ['Biological', 'Physical', 'Chemical'],
      answer: 'Biological',
      teach: 'Done by a living thing. '
        + 'Physical would be heating and cooling; '
        + 'chemical would be acid rain water attacking minerals.',
      level: 3,
    },
  ],
})

/* ── Agricultural Science: plant nutrition ───────────────────────────────── */

teach({
  topicId: 'plant-nutrition-agsci',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A plant needs sixteen or so elements. '
      + 'The macronutrients, needed in quantity, '
      + 'are nitrogen, phosphorus, potassium, calcium, magnesium and sulphur. '
      + 'The micronutrients, needed in traces, include iron, zinc, '
      + 'manganese, boron, copper and molybdenum. '
      + 'Diagnose a deficiency from where on the plant it shows: '
      + 'a mobile nutrient shows on the old leaves, '
      + 'an immobile one on the young leaves.',
    method: [
      'Note which leaves show the symptom, old or young.',
      'Note the pattern: whole leaf, between the veins, or the edges.',
      'Match the two together to name the nutrient.',
    ],
  },

  idea:
    'A plant takes carbon, hydrogen and oxygen '
    + 'from the air and from water. '
    + 'The rest comes from the soil. '
    + 'Six are needed in large amounts. '
    + 'Nitrogen builds proteins and chlorophyll. '
    + 'Phosphorus builds roots and seed, and it carries energy. '
    + 'Potassium controls water, stiffens the stem and moves sugar. '
    + 'Calcium builds cell walls and growing points. '
    + 'Magnesium sits at the centre of chlorophyll. '
    + 'Sulphur goes into proteins. '
    + 'Others are needed in traces only. '
    + 'Iron and manganese help make chlorophyll. '
    + 'Zinc and copper work inside enzymes. '
    + 'Boron feeds growing points and seed set. '
    + 'Molybdenum serves the bacteria that fix nitrogen. '
    + 'A nutrient is mobile if the plant can move it about inside itself. '
    + 'Nitrogen, phosphorus, potassium and magnesium are mobile. '
    + 'It is immobile if the plant cannot. '
    + 'Calcium, iron and boron are immobile. '
    + 'A fertiliser bag carries three numbers. '
    + 'They are the per cent of nitrogen, then phosphorus, '
    + 'then potassium. '
    + 'So 15 to 15 to 15 holds 15 per cent of each.',

  mechanism:
    'The whole of practical diagnosis rests on one idea, '
    + 'and it is not a list. '
    + 'When a mobile nutrient runs short, '
    + 'the plant takes what it has out of its old leaves '
    + 'and sends it to the new growth at the top, '
    + 'because new growth is worth more to the plant than old leaves. '
    + 'So the old leaves at the bottom go yellow first, '
    + 'and the top of the plant still looks well. '
    + 'When an immobile nutrient runs short, '
    + 'the plant cannot move it at all, '
    + 'so the old leaves keep what they already fixed '
    + 'and only the new growth suffers. '
    + 'The symptom appears at the top. '
    + 'That single rule halves the problem before you look at any colour. '
    + 'In a maize field, '
    + 'bottom leaves yellowing from the tip back along the midrib, '
    + 'in a V, '
    + 'with the top of the plant still green, is nitrogen. '
    + 'The same field with the youngest leaves white or yellow '
    + 'between green veins is iron, and that one is usually not a '
    + 'shortage in the soil at all '
    + 'but a high pH locking it up. '
    + 'The second half of the diagnosis is the pattern on the leaf. '
    + 'A whole leaf yellowing evenly points to nitrogen. '
    + 'Yellowing between the veins while the veins stay green '
    + 'points to magnesium on old leaves '
    + 'and to iron on young leaves. '
    + 'Scorched, dying leaf edges point to potassium. '
    + 'A purple tinge on the stem and the underside of older leaves, '
    + 'with stunted growth, points to phosphorus, '
    + 'and it is commonest early in the season on a cold or '
    + 'waterlogged soil where roots cannot take it up. '
    + 'Dead growing points and poor seed set point to boron or calcium. '
    + 'Third, the practical reason this matters in Ghana. '
    + 'Fertiliser is expensive, and a wrong diagnosis wastes it twice: '
    + 'once in money and once in the season lost. '
    + 'Nitrogen in a bag gives a visible response in ten days '
    + 'if nitrogen was the problem, '
    + 'and nothing at all if the real problem was a pH of 5 '
    + 'locking up the phosphorus. '
    + 'So the order of work is: '
    + 'look at where the symptom is, '
    + 'look at the pattern, '
    + 'name a likely nutrient, '
    + 'then ask whether the soil is short of it '
    + 'or merely holding it where the root cannot reach. '
    + 'Last, do not diagnose from one plant. '
    + 'A deficiency affects a patch or a whole field, '
    + 'and it follows the soil: '
    + 'the top of a slope, the sandy strip, the eroded corner. '
    + 'A single sick plant among healthy ones is far more likely '
    + 'to be disease, an insect at the root, or a bad planting hole. '
    + 'Saying that in an answer is worth a mark '
    + 'and in a field it is worth a season.',

  recap:
    'You know that crops grow better when manure or fertiliser is added. '
    + 'This says which element does which job, '
    + 'and how to read from the plant itself which one is missing.',

  method: [
    'Walk the field and see whether the symptom affects a patch or one plant.',
    'If one plant only, suspect disease or an insect, not a deficiency.',
    'Note whether the symptom is on the old lower leaves or the young upper ones.',
    'Old leaves means a mobile nutrient; young leaves means an immobile one.',
    'Note the pattern: whole leaf, between the veins, or the edges.',
    'Name the likely nutrient from the two together.',
    'Ask whether the soil lacks it or the pH is locking it up.',
    'Apply the correction and look again after ten to fourteen days.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the three macronutrients given on a fertiliser bag, '
        + 'in order, and give one job of each.',
      steps: [
        'Nitrogen: proteins and chlorophyll, so leaf and stem growth.',
        'Phosphorus: roots, energy transfer and seed.',
        'Potassium: water control, stem strength and sugar transport.',
      ],
      answer: 'Nitrogen, phosphorus, potassium. '
        + 'A bag marked 15 to 15 to 15 holds 15 per cent of each.',
    },
    {
      level: 4,
      ask: 'The lower leaves of a maize plant are yellowing from the tip '
        + 'back along the midrib, while the top is still green. '
        + 'Name the nutrient and explain how you know.',
      steps: [
        'The symptom is on the old leaves, so the nutrient is mobile.',
        'The whole lower leaf is yellowing, not just between the veins.',
        'The V shaped yellowing from the tip is the maize pattern '
          + 'for nitrogen.',
      ],
      answer: 'Nitrogen. '
        + 'The plant is pulling it out of the old leaves '
        + 'and sending it to the new growth, '
        + 'which is why the top stays green and the bottom does not.',
    },
    {
      level: 5,
      ask: 'The youngest leaves of a crop are pale between green veins, '
        + 'while the old leaves are fine. '
        + 'Give the nutrient, and say why adding it to the soil may not help.',
      steps: [
        'The symptom is on new growth, so the nutrient is immobile.',
        'Yellow between green veins on young leaves is iron.',
        'Iron is abundant in most Ghanaian soils.',
        'At a high pH it forms compounds a root cannot take up.',
      ],
      answer: 'Iron. '
        + 'Adding iron to an alkaline soil mostly locks up too, '
        + 'so the fix is to correct the pH, '
        + 'or to spray a chelated iron onto the leaves, '
        + 'which bypasses the soil altogether.',
    },
    {
      level: 6,
      ask: 'A farmer sees stunted maize with purple stems early in the '
        + 'season on a low, wet part of the field, '
        + 'and applies nitrogen with no result. Diagnose and advise.',
      steps: [
        'Purple stems with stunting is the phosphorus pattern.',
        'Phosphorus is taken up slowly by roots in cold, wet soil.',
        'The low wet part of the field is exactly where that happens.',
        'So the soil may hold phosphorus the roots cannot reach.',
        'Nitrogen was the wrong element, so no response was expected.',
      ],
      answer: 'Phosphorus, and probably availability rather than total '
        + 'shortage. '
        + 'Improve the drainage of that part of the field, '
        + 'band a phosphorus fertiliser close to the root at planting '
        + 'rather than broadcasting it, '
        + 'and have the pH checked, '
        + 'since below about 5.5 phosphorus is held by iron and aluminium.',
    },
  ],

  traps: [
    {
      mistake: 'Diagnosing from the colour alone.',
      why: 'Yellow between the veins is magnesium on old leaves '
        + 'and iron on young ones. '
        + 'Position first, then pattern.',
    },
    {
      mistake: 'Diagnosing a deficiency from one sick plant.',
      why: 'Deficiency follows the soil and shows in a patch. '
        + 'One plant among healthy ones is more likely disease or an '
        + 'insect at the root.',
    },
    {
      mistake: 'Assuming a symptom means the soil has none of that '
        + 'nutrient.',
      why: 'pH can lock it up while plenty is present. '
        + 'Iron deficiency on an alkaline soil is the standard example.',
    },
    {
      mistake: 'Reading a fertiliser bag as kilograms of nutrient.',
      why: 'The three numbers are percentages. '
        + 'A 50 kilogram bag of 15 to 15 to 15 '
        + 'holds 7.5 kilograms of each.',
    },
  ],

  extension:
    'Nitrogen can be supplied without a bag, '
    + 'by growing a legume. '
    + 'Cowpea, groundnut and soya bean carry bacteria in root nodules '
    + 'that take nitrogen from the air and fix it into a form '
    + 'the plant can use, '
    + 'and some is left in the soil when the residues are ploughed in. '
    + 'This is why maize after groundnut yields better than maize after '
    + 'maize, '
    + 'and it is the whole argument for rotation '
    + 'on a farm that cannot afford fertiliser every season.',

  figure: {
    alt: 'A maize plant drawn with its leaves, used as a diagnostic key. '
      + 'The lower old leaves are shaded and labelled with the mobile '
      + 'nutrients, nitrogen, potassium and magnesium, because the plant '
      + 'moves these upwards out of old leaves so the symptom appears '
      + 'there first. The upper young leaves are labelled with the '
      + 'immobile nutrients, calcium, iron and boron, which the plant '
      + 'cannot move, so their symptoms appear in new growth. An upward '
      + 'arrow along the stem is labelled as the plant moving mobile '
      + 'nutrients to the new growth.',
    svg: '<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* stem */
      + '<path d="M300 380V60" stroke="currentColor" stroke-width="4" fill="none"/>'
      /* ground */
      + '<path d="M180 380h240" stroke="currentColor" stroke-width="2" fill="none"/>'
      /* lower leaves, shaded */
      + '<path d="M300 330q-60 -16 -110 10q60 22 110 -10Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.25"/>'
      + '<path d="M300 300q60 -16 110 10q-60 22 -110 -10Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.25"/>'
      + '<path d="M300 262q-56 -16 -104 8q56 22 104 -8Z" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.25"/>'
      /* upper leaves, clear */
      + '<path d="M300 180q56 -18 100 4q-56 22 -100 -4Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M300 140q-52 -18 -94 4q52 22 94 -4Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M300 100q48 -16 88 4q-48 20 -88 -4Z" stroke="currentColor" stroke-width="2" fill="none"/>'
      /* arrow up the stem */
      + '<path d="M332 330V110" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      + '<path d="M326 120l6-12 6 12Z" fill="#0f8a4d"/>'
      + '<text x="340" y="226" font-size="11" fill="#0f8a4d">the plant moves mobile</text>'
      + '<text x="340" y="242" font-size="11" fill="#0f8a4d">nutrients up to the</text>'
      + '<text x="340" y="258" font-size="11" fill="#0f8a4d">new growth</text>'
      /* labels */
      + '<text x="30" y="96" font-size="12" fill="currentColor">young leaves at the top:</text>'
      + '<text x="30" y="114" font-size="12" fill="currentColor">immobile nutrients show here</text>'
      + '<text x="30" y="132" font-size="12" fill="#0f8a4d">calcium, iron, boron</text>'
      + '<text x="420" y="306" font-size="12" fill="currentColor">old leaves at the bottom:</text>'
      + '<text x="420" y="324" font-size="12" fill="currentColor">mobile nutrients show here</text>'
      + '<text x="420" y="342" font-size="12" fill="#0f8a4d">nitrogen, potassium, magnesium</text>'
      + '<text x="30" y="406" font-size="12" fill="currentColor">decide old or young before you look at the colour, and the list of possible answers halves</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Each nutrient, its job, and the symptom with its position on the plant',
      columns: ['Nutrient', 'Job in the plant', 'Deficiency symptom', 'Shows first on'],
      rows: [
        ['Nitrogen', 'Proteins and chlorophyll', 'Whole leaf pale, yellowing from the tip', 'Old lower leaves'],
        ['Phosphorus', 'Roots, energy, seed', 'Stunted, purple stems and leaf undersides', 'Old leaves, whole plant small'],
        ['Potassium', 'Water control, stem strength', 'Scorched, dying leaf edges', 'Old lower leaves'],
        ['Magnesium', 'The centre of chlorophyll', 'Yellow between green veins', 'Old lower leaves'],
        ['Calcium', 'Cell walls, growing points', 'Growing point dies, poor fruit', 'Young upper leaves'],
        ['Iron', 'Chlorophyll formation', 'Pale between sharply green veins', 'Young upper leaves'],
      ],
      note: 'The last column is the key. '
        + 'Magnesium and iron give almost the same pattern, '
        + 'and only the position tells them apart.',
    },
  ],

  questions: [
    {
      id: 'pn-1',
      ask: 'A deficiency showing first on the old lower leaves means the '
        + 'nutrient is:',
      kind: 'choice',
      options: ['Mobile', 'Immobile', 'A micronutrient'],
      answer: 'Mobile',
      teach: 'The plant moved it out of the old leaves to feed the new '
        + 'growth, so the old leaves suffer first.',
      level: 4,
    },
    {
      id: 'pn-2',
      ask: 'Yellowing between green veins on the youngest leaves points to:',
      kind: 'choice',
      options: ['Iron', 'Magnesium', 'Nitrogen'],
      answer: 'Iron',
      teach: 'The same pattern on old leaves would be magnesium. '
        + 'Position decides.',
      level: 5,
    },
    {
      id: 'pn-3',
      ask: 'A 50 kilogram bag of 15 to 15 to 15 holds how many kilograms '
        + 'of nitrogen?',
      kind: 'numeric',
      options: [],
      answer: '7.5',
      teach: '15 per cent of 50 kilograms is 7.5 kilograms. '
        + 'The numbers are percentages, not weights.',
      level: 5,
    },
    {
      id: 'pn-4',
      ask: 'Scorched, dying leaf edges on older leaves point to:',
      kind: 'choice',
      options: ['Potassium', 'Nitrogen', 'Boron'],
      answer: 'Potassium',
      teach: 'Nitrogen pales the whole leaf. '
        + 'Boron kills the growing point at the top.',
      level: 5,
    },
    {
      id: 'pn-5',
      ask: 'One sick plant among healthy ones is most likely:',
      kind: 'choice',
      options: [
        'Disease or an insect at the root',
        'A nutrient deficiency',
        'A pH problem',
      ],
      answer: 'Disease or an insect at the root',
      teach: 'Deficiency follows the soil and shows in a patch, '
        + 'not in one plant.',
      level: 6,
    },
  ],
})

/* ── Agricultural Science: climate and farming systems ───────────────────── */

teach({
  topicId: 'climate-agric',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Rain decides the farming. '
      + 'Southern Ghana has two rainy seasons in a year, '
      + 'so two crops are possible. '
      + 'Northern Ghana has one, from about May to October, '
      + 'so there is one chance a year. '
      + 'The length of the growing season sets what can be grown, '
      + 'and the risk is different in each pattern: '
      + 'in the north a dry spell at flowering can take the whole year.',
    method: [
      'State the rainfall pattern: one season or two.',
      'Work out the length of the growing season in days.',
      'Match the crop and the planting date to it, and name the risk.',
    ],
  },

  idea:
    'Ghana lies in the tropics, '
    + 'so temperature changes little through the year '
    + 'and rainfall is what varies. '
    + 'The rain comes with a belt of cloud and storms '
    + 'that moves north over the country and back again, '
    + 'passing twice over the south and once over the far north. '
    + 'So the south has a major season from about March to July '
    + 'and a minor one from about September to November, '
    + 'with a short dry spell between them in August. '
    + 'The north has a single season from about May to October, '
    + 'then a long dry season with the dry dusty harmattan wind '
    + 'from the north east. '
    + 'Rainfall also falls from south to north: '
    + 'over 2000 millimetres a year in the south west, '
    + 'about 1400 in the forest, '
    + 'and about 1000 in the far north. '
    + 'From this come the zones: '
    + 'the rain forest in the south west, '
    + 'the deciduous forest, '
    + 'the coastal savanna, '
    + 'the transitional zone, '
    + 'the Guinea savanna, '
    + 'and the Sudan savanna in the north east corner.',

  mechanism:
    'The number that decides everything '
    + 'is the length of the growing season, '
    + 'and it is not the same as total rainfall. '
    + 'A crop needs rain for a certain number of days to reach maturity: '
    + 'maize about 90 to 120, '
    + 'cassava 9 to 12 months, '
    + 'cowpea about 70, '
    + 'and cocoa needs rain nearly all year with no long dry spell. '
    + 'Compare that with what a place offers. '
    + 'A northern season of about 150 rainy days '
    + 'is one maize crop with time to spare, '
    + 'and it is no cocoa at all, '
    + 'whatever the total rainfall says, '
    + 'because the dry season is longer than a cocoa tree can survive. '
    + 'In the south, the major season of about 120 days '
    + 'carries a full maize crop, '
    + 'and the minor season of 60 to 75 days does not, '
    + 'which is why the minor season in the south is planted '
    + 'with the shorter crops: '
    + 'cowpea, vegetables, '
    + 'or an early maturing maize variety bred for exactly that gap. '
    + 'So the rule is to match the crop to the season length, '
    + 'and where they do not match, change the variety rather than '
    + 'hope for the rain. '
    + 'The second mechanism is the shape of the risk, '
    + 'and this is the part that is usually taught badly. '
    + 'A single season is not simply less rain; '
    + 'it is a concentrated risk. '
    + 'A northern farmer plants once. '
    + 'If the rains start three weeks late, '
    + 'or if a two week dry spell lands while the maize is tasselling, '
    + 'which is the stage when it cannot do without water, '
    + 'the yield is cut badly and there is no second chance until '
    + 'the next year. '
    + 'In the south the same dry spell in the major season is painful '
    + 'but the minor season still follows. '
    + 'That difference, one chance against two, '
    + 'is the honest reason northern farming carries more risk '
    + 'than a rainfall figure suggests, '
    + 'and it is the reason the responses in the north are what they are: '
    + 'short duration and drought tolerant varieties, '
    + 'early planting as soon as the rains are established, '
    + 'tied ridges to hold water in the field, '
    + 'and mixed cropping so that one failure is not every failure. '
    + 'Third, the planting date, '
    + 'because this is where a learner can show real understanding. '
    + 'Plant too early, on the first rain, '
    + 'and a dry spell kills the seedlings '
    + 'and the seed is bought twice. '
    + 'Plant too late and the crop is still filling grain '
    + 'when the rains stop. '
    + 'The rule extension officers give is to plant '
    + 'when the rains are established, '
    + 'which usually means after about 20 millimetres have fallen '
    + 'within a few days, '
    + 'and then to count forward and check that the crop will mature '
    + 'before the rains end. '
    + 'Last, say what climate change is doing, '
    + 'because the paper now asks. '
    + 'The reported change in Ghana is not mainly less rain '
    + 'but less reliable rain: '
    + 'a later and more variable start, '
    + 'heavier storms with longer gaps between them. '
    + 'That hurts a farmer in the north far more than a change in '
    + 'the annual total would, '
    + 'because the decision that matters, when to plant, '
    + 'is the decision made hardest.',

  recap:
    'You know Ghana has a rainy season and a dry season, '
    + 'and that the north is drier than the south. '
    + 'This turns that into the number a farmer actually uses, '
    + 'the length of the growing season, '
    + 'and shows what it rules in and out.',

  method: [
    'Name the place and its zone.',
    'State whether rainfall comes in one season or two.',
    'Give the months of each season.',
    'Estimate the growing season in days.',
    'List the crops whose maturity fits inside it.',
    'Choose a planting date: when the rains are established.',
    'Count forward to check maturity falls before the rains end.',
    'Name the main risk of that pattern and one practice that reduces it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'How many rainy seasons does southern Ghana have, '
        + 'and how many does the far north have?',
      steps: [
        'The rain belt passes twice over the south.',
        'It reaches the far north once and turns back.',
      ],
      answer: 'The south has two, a major and a minor. '
        + 'The far north has one.',
    },
    {
      level: 4,
      ask: 'A southern minor season gives about 70 rainy days. '
        + 'Maize needs 90 to 120 days and cowpea about 70. '
        + 'What should be planted, and why?',
      steps: [
        'Compare each crop’s requirement with the 70 days available.',
        'Maize needs more days than the season has.',
        'Cowpea fits.',
      ],
      answer: 'Cowpea, or an early maturing maize variety bred for a '
        + 'short season. '
        + 'Ordinary maize would still be filling grain when the rains '
        + 'stopped.',
    },
    {
      level: 5,
      ask: 'Explain why a two week dry spell in August is worse for a '
        + 'farmer in Bolgatanga than for one in Koforidua.',
      steps: [
        'Bolgatanga is in the Sudan savanna with one season only.',
        'In August that single crop is at or near tasselling, '
          + 'which is the stage most sensitive to water.',
        'There is no second season to fall back on.',
        'Koforidua is in the forest zone with two seasons.',
        'A loss in the major season can be partly made up in the minor.',
      ],
      answer: 'Because the northern farmer has one chance a year '
        + 'and the dry spell hits it at its most sensitive stage. '
        + 'The risk is concentrated, not merely larger.',
    },
    {
      level: 6,
      ask: 'Advise a farmer in the Guinea savanna who lost a crop by '
        + 'planting on the first rain. '
        + 'Give the rule and three practices.',
      steps: [
        'The first rain is often followed by a dry spell '
          + 'that kills young seedlings.',
        'The rule is to plant when the rains are established, '
          + 'usually after about 20 millimetres within a few days.',
        'Then count forward to check maturity falls before the rains end.',
        'Practices: a short duration or drought tolerant variety; '
          + 'tied ridges to hold rain where it falls; '
          + 'mixed cropping so one failure is not total.',
      ],
      answer: 'Plant on established rains, not on the first shower, '
        + 'and check the maturity date against the end of the season. '
        + 'Then reduce the remaining risk with a short duration variety, '
        + 'tied ridges, and a mixed stand such as maize with cowpea, '
        + 'so a bad year costs part of the harvest instead of all of it.',
    },
  ],

  traps: [
    {
      mistake: 'Treating annual rainfall total as the thing that matters.',
      why: 'The length of the growing season, and how reliable it is, '
        + 'decide what can be grown. '
        + 'The same total split differently grows a different crop.',
    },
    {
      mistake: 'Saying the north is simply drier.',
      why: 'It also has one season instead of two, '
        + 'so a failure cannot be made up. '
        + 'The risk is concentrated.',
    },
    {
      mistake: 'Planting on the first rain.',
      why: 'A dry spell after it kills the seedlings and the seed is '
        + 'bought twice. '
        + 'Wait for established rains.',
    },
    {
      mistake: 'Saying climate change means less rain in Ghana.',
      why: 'The reported change is mainly less reliable rain: '
        + 'a later, more variable start and heavier storms with longer '
        + 'gaps. That is harder to farm than a smaller total.',
    },
  ],

  extension:
    'The same two season pattern is why cocoa grows where it does. '
    + 'Cocoa needs rain spread through the year '
    + 'with no dry spell longer than about three months, '
    + 'and shade when young. '
    + 'That is satisfied in the forest zones of Ashanti, '
    + 'the Western, Eastern and Central regions, '
    + 'and nowhere north of the transitional zone, '
    + 'whatever the annual total. '
    + 'As the start of the rains becomes less reliable '
    + 'the northern edge of the cocoa belt is the first place to feel it, '
    + 'which is why that boundary is watched.',

  figure: {
    alt: 'Two bar charts of monthly rainfall side by side, from January '
      + 'to December. The southern station shows two peaks, a tall one '
      + 'from March to July and a smaller one from September to '
      + 'November, with a dip in August, and is labelled two seasons so '
      + 'two crops are possible. The northern station shows a single '
      + 'broad peak from May to October with almost nothing from '
      + 'November to March, and is labelled one season so one crop a '
      + 'year, with the dry harmattan months marked.',
    svg: '<svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* southern chart */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M40 200V60"/><path d="M40 200h250"/>'
      + '</g>'
      + '<g fill="currentColor" fill-opacity="0.45">'
      + '<rect x="46" y="186" width="14" height="14"/>'
      + '<rect x="66" y="178" width="14" height="22"/>'
      + '<rect x="86" y="146" width="14" height="54"/>'
      + '<rect x="106" y="116" width="14" height="84"/>'
      + '<rect x="126" y="86" width="14" height="114"/>'
      + '<rect x="146" y="78" width="14" height="122"/>'
      + '<rect x="166" y="140" width="14" height="60"/>'
      + '<rect x="186" y="172" width="14" height="28"/>'
      + '<rect x="206" y="138" width="14" height="62"/>'
      + '<rect x="226" y="128" width="14" height="72"/>'
      + '<rect x="246" y="152" width="14" height="48"/>'
      + '<rect x="266" y="184" width="14" height="16"/>'
      + '</g>'
      + '<text x="40" y="52" font-size="12" fill="currentColor">a southern station</text>'
      + '<text x="40" y="218" font-size="10" fill="currentColor">J F M A M J J A S O N D</text>'
      + '<text x="96" y="68" font-size="11" fill="#0f8a4d">major</text>'
      + '<text x="206" y="118" font-size="11" fill="#0f8a4d">minor</text>'
      + '<text x="176" y="236" font-size="11" fill="currentColor">August dip</text>'
      + '<text x="40" y="258" font-size="12" fill="#0f8a4d">two seasons, so two crops a year</text>'
      /* northern chart */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M350 200V60"/><path d="M350 200h250"/>'
      + '</g>'
      + '<g fill="currentColor" fill-opacity="0.45">'
      + '<rect x="356" y="198" width="14" height="2"/>'
      + '<rect x="376" y="196" width="14" height="4"/>'
      + '<rect x="396" y="186" width="14" height="14"/>'
      + '<rect x="416" y="162" width="14" height="38"/>'
      + '<rect x="436" y="132" width="14" height="68"/>'
      + '<rect x="456" y="110" width="14" height="90"/>'
      + '<rect x="476" y="80" width="14" height="120"/>'
      + '<rect x="496" y="74" width="14" height="126"/>'
      + '<rect x="516" y="104" width="14" height="96"/>'
      + '<rect x="536" y="156" width="14" height="44"/>'
      + '<rect x="556" y="194" width="14" height="6"/>'
      + '<rect x="576" y="199" width="14" height="1"/>'
      + '</g>'
      + '<text x="350" y="52" font-size="12" fill="currentColor">a northern station</text>'
      + '<text x="350" y="218" font-size="10" fill="currentColor">J F M A M J J A S O N D</text>'
      + '<text x="446" y="64" font-size="11" fill="#0f8a4d">one season, May to October</text>'
      + '<path d="M552 230h44" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<path d="M350 230h50" stroke="currentColor" stroke-width="2" fill="none"/>'
      + '<text x="350" y="248" font-size="11" fill="currentColor">dry, harmattan</text>'
      + '<text x="350" y="276" font-size="12" fill="#0f8a4d">one season, so one chance a year</text>'
      + '<text x="40" y="320" font-size="12" fill="currentColor">the risk is not only less rain: a dry spell at tasselling in the north cannot be made up</text>'
      + '<text x="40" y="344" font-size="12" fill="currentColor">in the south the minor season still follows a poor major one</text>'
      + '</svg>',
  },

  tables: [
    {
      caption: 'Each zone with its rainfall, its crops and the risk it carries',
      columns: ['Zone', 'Rain a year', 'Pattern', 'Main crops', 'Main risk'],
      rows: [
        ['Rain forest, south west', 'Over 2000 mm', 'Two seasons', 'Cocoa, oil palm, plantain', 'Too wet for grain to dry; disease'],
        ['Deciduous forest', 'About 1400 mm', 'Two seasons', 'Cocoa, cassava, maize, cocoyam', 'A long August dip in a bad year'],
        ['Coastal savanna', 'About 800 mm', 'Two short seasons', 'Cassava, maize, vegetables, livestock', 'Both seasons short and unreliable'],
        ['Transitional', 'About 1300 mm', 'Two merging seasons', 'Maize, yam, cashew', 'An unclear start to the season'],
        ['Guinea savanna', 'About 1100 mm', 'One season', 'Maize, sorghum, yam, groundnut', 'A dry spell at flowering, with no second chance'],
        ['Sudan savanna, north east', 'About 1000 mm', 'One short season', 'Millet, sorghum, cowpea, livestock', 'A late start and a long harmattan'],
      ],
      note: 'Compare the pattern column with the risk column. '
        + 'One season is where the risk concentrates, '
        + 'whatever the rainfall figure says.',
    },
  ],

  questions: [
    {
      id: 'ca-1',
      ask: 'How many rainy seasons does the far north of Ghana have?',
      kind: 'numeric',
      options: [],
      answer: '1',
      teach: 'From about May to October. '
        + 'The south has two, because the rain belt passes twice.',
      level: 3,
    },
    {
      id: 'ca-2',
      ask: 'The number that decides which crops a place can grow is:',
      kind: 'choice',
      options: [
        'The length of the growing season',
        'The annual rainfall total',
        'The average temperature',
      ],
      answer: 'The length of the growing season',
      teach: 'A crop needs rain for a set number of days. '
        + 'The same total split differently grows a different crop.',
      level: 5,
    },
    {
      id: 'ca-3',
      ask: 'A minor season gives 70 rainy days. Maize needs 90 to 120. '
        + 'The farmer should:',
      kind: 'choice',
      options: [
        'Plant cowpea or an early maturing variety',
        'Plant the usual maize and hope',
        'Leave the land bare',
      ],
      answer: 'Plant cowpea or an early maturing variety',
      teach: 'Match the crop to the season length. '
        + 'Change the variety rather than hope for the rain.',
      level: 5,
    },
    {
      id: 'ca-4',
      ask: 'Why should a farmer not plant on the first rain?',
      kind: 'choice',
      options: [
        'A dry spell may follow and kill the seedlings',
        'The soil is too soft',
        'Seeds rot in wet soil',
      ],
      answer: 'A dry spell may follow and kill the seedlings',
      teach: 'Wait for established rains, '
        + 'usually about 20 millimetres within a few days.',
      level: 6,
    },
    {
      id: 'ca-5',
      ask: 'Cocoa cannot be grown in the Guinea savanna mainly because:',
      kind: 'choice',
      options: [
        'The dry season is longer than the tree can survive',
        'The soil is sandy',
        'The temperature is too high',
      ],
      answer: 'The dry season is longer than the tree can survive',
      teach: 'Cocoa needs rain spread through the year '
        + 'with no dry spell much longer than three months.',
      level: 6,
    },
  ],
})
