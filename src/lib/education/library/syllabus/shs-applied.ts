/**
 * Senior High School electives: agriculture, health, the arts and PE.
 *
 * ── Why these were empty, and what is assumed here ────────────────────────
 *
 * Eight more subjects `subjects.ts` listed with nothing behind them.
 *
 * Agriculture and Agricultural Science are both listed, which looks like a
 * duplicate and is not: schools offer a general Agriculture course and, in
 * the science electives, a separate Agricultural Science. They are outlined
 * differently on purpose. Agriculture is written around the farm as a
 * business and a practice. Agricultural Science is written around the
 * biology and chemistry underneath it, and assumes Chemistry or Biology
 * alongside.
 *
 * Art and Design Foundation and Art and Design Studio are the same pair of
 * ideas: the Foundation course is the seeing, drawing and colour that
 * everything else needs, and the Studio course is a body of work in a chosen
 * medium, taken to a finish.
 *
 * Physical Education and Health is registered twice because the subject list
 * has both a core and an elective id. The core outline is the one every
 * learner meets, so it is shorter and practical. The elective adds the
 * anatomy, training theory and coaching that a specialist needs.
 *
 * As everywhere in this folder: no indicator codes, and no claims about
 * papers or marks.
 */

import { register } from '../../syllabus'

const NOTE = 'A standard SHS outline, until your school adds its own.'

/* ── Agriculture ─────────────────────────────────────────────────────────── */

register({
  subjectId: 'agriculture',
  stage: 'shs',
  subject: 'Agriculture',
  source: 'MODEL',
  note: NOTE + ' The farm is treated as a practice and a business.',
  strands: [
    {
      id: 'ag-land',
      name: 'Soil, land and water',
      purpose: 'What the crop actually grows in, and how it is kept able to.',
      subStrands: [
        {
          id: 'ag-soil',
          name: 'Soil and its management',
          topics: [
            {
              id: 'soil-types-ag',
              title: 'Soil types and properties',
              outcome: 'Identify a soil by texture and structure and say what it suits.',
              year: 'SHS 1',
            },
            {
              id: 'soil-fertility-ag',
              title: 'Soil fertility and nutrients',
              outcome: 'Name the major plant nutrients and the sign of each deficiency.',
              year: 'SHS 1',
              needs: ['soil-types-ag'],
            },
            {
              id: 'erosion-conservation-ag',
              title: 'Erosion and conservation',
              outcome: 'Explain how soil is lost and evaluate a measure for holding it.',
              year: 'SHS 2',
            },
            {
              id: 'irrigation-ag',
              title: 'Water and irrigation',
              outcome: 'Compare irrigation methods for cost, water used and the crop grown.',
              year: 'SHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'ag-crops',
      name: 'Crop production',
      purpose: 'Growing a crop from the land preparation to the store.',
      subStrands: [
        {
          id: 'ag-crop-practice',
          name: 'Crop husbandry',
          topics: [
            {
              id: 'crop-establishment',
              title: 'Land preparation and planting',
              outcome: 'Give the operations in order with a reason for each, including spacing.',
              year: 'SHS 1',
            },
            {
              id: 'weeds-pests-ag',
              title: 'Weeds, pests and diseases',
              outcome: 'Identify a named pest or disease and choose a control, stating its cost.',
              year: 'SHS 2',
              needs: ['crop-establishment'],
            },
            {
              id: 'fertiliser-use-ag',
              title: 'Manure and fertiliser',
              outcome: 'Choose between manure and fertiliser and calculate an application rate.',
              year: 'SHS 2',
              needs: ['soil-fertility-ag'],
            },
            {
              id: 'harvest-storage-ag',
              title: 'Harvesting and storage',
              outcome: 'Judge the harvest stage and explain what storage must prevent.',
              year: 'SHS 2',
            },
            {
              id: 'cash-crops-ghana',
              title: 'Ghana’s main crops',
              outcome: 'Describe the production of cocoa, maize, cassava or oil palm and its economics.',
              year: 'SHS 3',
            },
          ],
        },
      ],
    },
    {
      id: 'ag-animals',
      name: 'Animal production',
      purpose: 'Keeping livestock so that they produce rather than survive.',
      subStrands: [
        {
          id: 'ag-livestock',
          name: 'Livestock husbandry',
          topics: [
            {
              id: 'livestock-types-ag',
              title: 'Farm animals and their uses',
              outcome: 'Match a species and breed to a purpose and a local condition.',
              year: 'SHS 1',
            },
            {
              id: 'feeding-ag',
              title: 'Feeds and feeding',
              outcome: 'Compose a ration for a stated animal and stage.',
              year: 'SHS 2',
              needs: ['livestock-types-ag'],
            },
            {
              id: 'animal-health-ag',
              title: 'Animal health and disease',
              outcome: 'Describe a named disease, its spread and its prevention, and argue for prevention.',
              year: 'SHS 2',
            },
            {
              id: 'breeding-ag',
              title: 'Breeding and improvement',
              outcome: 'Explain selection and crossing and what each is for.',
              year: 'SHS 3',
            },
            {
              id: 'housing-ag',
              title: 'Housing and handling',
              outcome: 'State what housing must provide and why handling affects yield.',
              year: 'SHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'ag-business',
      name: 'The farm as a business',
      purpose: 'Whether the farming is actually paying, and how you would know.',
      subStrands: [
        {
          id: 'ag-economics',
          name: 'Farm economics and records',
          topics: [
            {
              id: 'farm-records-ag',
              title: 'Farm records and accounts',
              outcome: 'Keep records of inputs and sales and work out whether a season made money.',
              year: 'SHS 2',
            },
            {
              id: 'farm-costing-ag',
              title: 'Costing and marketing',
              outcome: 'Cost a crop or batch including labour, and judge a selling decision.',
              year: 'SHS 3',
              needs: ['farm-records-ag'],
            },
            {
              id: 'agric-extension',
              title: 'Extension, credit and cooperatives',
              outcome: 'Explain what extension and a cooperative each provide a small farmer.',
              year: 'SHS 3',
            },
            {
              id: 'agribusiness-ag',
              title: 'Value addition and agribusiness',
              outcome: 'Identify a processing step that would keep more value in Ghana, with its requirements.',
              year: 'SHS 3',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Agricultural Science ────────────────────────────────────────────────── */

register({
  subjectId: 'agricultural-science',
  stage: 'shs',
  subject: 'Agricultural Science',
  source: 'MODEL',
  note: NOTE
    + ' The science under the practice; it assumes Biology or Chemistry alongside.',
  strands: [
    {
      id: 'agsci-soil',
      name: 'Soil science',
      purpose: 'Soil as a physical and chemical system rather than as dirt.',
      subStrands: [
        {
          id: 'agsci-soil-science',
          name: 'Soil physics and chemistry',
          topics: [
            {
              id: 'soil-formation',
              title: 'Soil formation and profile',
              outcome: 'Explain how soil forms and describe a profile from a named horizon.',
              year: 'SHS 1',
            },
            {
              id: 'soil-ph-agsci',
              title: 'Soil pH and nutrient availability',
              outcome: 'Explain how pH changes which nutrients a plant can take up, and how it is corrected.',
              year: 'SHS 2',
              needs: ['soil-formation'],
            },
            {
              id: 'soil-water-agsci',
              title: 'Soil water and air',
              outcome: 'Explain field capacity and why a waterlogged soil starves a root of air.',
              year: 'SHS 2',
            },
            {
              id: 'soil-organisms',
              title: 'Soil organisms and organic matter',
              outcome: 'Explain what organisms do for soil structure and nutrient release.',
              year: 'SHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'agsci-plant',
      name: 'Crop science',
      purpose: 'The plant physiology that decides a yield.',
      subStrands: [
        {
          id: 'agsci-plant-science',
          name: 'Plant growth and protection',
          topics: [
            {
              id: 'plant-nutrition-agsci',
              title: 'Plant nutrition',
              outcome: 'Relate each major and minor nutrient to its function and its deficiency symptom.',
              year: 'SHS 1',
            },
            {
              id: 'photosynthesis-agsci',
              title: 'Photosynthesis and yield',
              outcome: 'Explain how light, water, carbon dioxide and spacing limit yield.',
              year: 'SHS 2',
              needs: ['plant-nutrition-agsci'],
            },
            {
              id: 'propagation-agsci',
              title: 'Propagation and plant breeding',
              outcome: 'Compare seed and vegetative propagation and explain why a variety is bred.',
              year: 'SHS 2',
            },
            {
              id: 'pest-biology-agsci',
              title: 'The biology of pests and disease',
              outcome: 'Describe a pest life cycle and choose a control that breaks it.',
              year: 'SHS 3',
              needs: ['propagation-agsci'],
            },
          ],
        },
      ],
    },
    {
      id: 'agsci-animal',
      name: 'Animal science',
      purpose: 'The physiology behind feeding, growth and reproduction.',
      subStrands: [
        {
          id: 'agsci-animal-science',
          name: 'Animal physiology and management',
          topics: [
            {
              id: 'digestion-livestock',
              title: 'Digestion in ruminants and non-ruminants',
              outcome: 'Compare the two digestive systems and explain why their feeds differ.',
              year: 'SHS 2',
            },
            {
              id: 'reproduction-livestock',
              title: 'Reproduction in farm animals',
              outcome: 'Describe the reproductive cycle and what decides a successful service.',
              year: 'SHS 3',
            },
            {
              id: 'genetics-livestock',
              title: 'Genetics and selection',
              outcome: 'Apply simple inheritance to a breeding decision.',
              year: 'SHS 3',
              needs: ['reproduction-livestock'],
            },
            {
              id: 'nutrition-livestock',
              title: 'Animal nutrition',
              outcome: 'Balance a ration for energy, protein, minerals and water.',
              year: 'SHS 2',
              needs: ['digestion-livestock'],
            },
          ],
        },
      ],
    },
    {
      id: 'agsci-environment',
      name: 'Agriculture and the environment',
      purpose: 'What farming does to the land it depends on.',
      subStrands: [
        {
          id: 'agsci-sustainability',
          name: 'Sustainable practice',
          topics: [
            {
              id: 'rotation-agsci',
              title: 'Rotation, intercropping and fallow',
              outcome: 'Explain why each works, in terms of nutrients and pest cycles.',
              year: 'SHS 2',
            },
            {
              id: 'agrochemicals-agsci',
              title: 'Agrochemicals and their effects',
              outcome: 'Weigh the yield gained against the harm done, for a named chemical.',
              year: 'SHS 3',
            },
            {
              id: 'climate-agric',
              title: 'Climate and farming systems',
              outcome: 'Relate Ghana’s rainfall pattern to its farming systems and the risk each carries.',
              year: 'SHS 1',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Biomedical Science ──────────────────────────────────────────────────── */

register({
  subjectId: 'biomedical-science',
  stage: 'shs',
  subject: 'Biomedical Science',
  source: 'MODEL',
  note: NOTE
    + ' A pre-clinical elective; it assumes Biology and Chemistry alongside.',
  strands: [
    {
      id: 'bio-body',
      name: 'The human body',
      purpose: 'Structure and function, at the level a clinical course assumes.',
      subStrands: [
        {
          id: 'bio-systems',
          name: 'Systems of the body',
          topics: [
            {
              id: 'cells-tissues-bms',
              title: 'Cells, tissues and organs',
              outcome: 'Relate a tissue’s structure to its function and name the four main types.',
              year: 'SHS 1',
            },
            {
              id: 'homeostasis-bms',
              title: 'Homeostasis',
              outcome: 'Explain negative feedback and apply it to temperature and blood glucose.',
              year: 'SHS 1',
              needs: ['cells-tissues-bms'],
            },
            {
              id: 'circulation-bms',
              title: 'Blood and circulation',
              outcome: 'Describe the blood components and trace the double circulation.',
              year: 'SHS 2',
            },
            {
              id: 'immunity-bms',
              title: 'Immunity and immunisation',
              outcome: 'Distinguish the innate and adaptive responses and explain how a vaccine works.',
              year: 'SHS 2',
              needs: ['circulation-bms'],
            },
            {
              id: 'endocrine-bms',
              title: 'Hormones and the endocrine system',
              outcome: 'Name the major glands and the effect of one named hormone.',
              year: 'SHS 2',
              needs: ['homeostasis-bms'],
            },
          ],
        },
      ],
    },
    {
      id: 'bio-disease',
      name: 'Disease and diagnosis',
      purpose: 'What goes wrong, and how it is found out.',
      subStrands: [
        {
          id: 'bio-pathology',
          name: 'Pathogens and pathology',
          topics: [
            {
              id: 'microorganisms-bms',
              title: 'Microorganisms and pathogens',
              outcome: 'Distinguish bacteria, viruses, fungi and protozoa and name a disease of each.',
              year: 'SHS 1',
            },
            {
              id: 'transmission-bms',
              title: 'Transmission and epidemiology',
              outcome: 'Trace a route of transmission and explain how an outbreak is contained.',
              year: 'SHS 2',
              needs: ['microorganisms-bms'],
            },
            {
              id: 'ncd-bms',
              title: 'Non-communicable disease',
              outcome: 'Distinguish a risk factor from a cause and explain a named condition.',
              year: 'SHS 2',
            },
            {
              id: 'diagnosis-bms',
              title: 'Laboratory diagnosis',
              outcome: 'Describe how a named test works and why a result needs a reference range.',
              year: 'SHS 3',
              needs: ['transmission-bms'],
            },
            {
              id: 'drugs-resistance-bms',
              title: 'Medicines and resistance',
              outcome: 'Explain how an antibiotic works and how resistance arises and spreads.',
              year: 'SHS 3',
              needs: ['microorganisms-bms'],
            },
          ],
        },
        {
          id: 'bio-practice',
          name: 'Laboratory practice and ethics',
          topics: [
            {
              id: 'lab-safety-bms',
              title: 'Laboratory safety and handling specimens',
              outcome: 'State the precautions for handling a specimen and why each exists.',
              year: 'SHS 1',
            },
            {
              id: 'microscopy-bms',
              title: 'Microscopy and staining',
              outcome: 'Prepare and examine a slide, and explain what a stain reveals.',
              year: 'SHS 2',
            },
            {
              id: 'ethics-bms',
              title: 'Consent, confidentiality and ethics',
              outcome: 'Explain informed consent and why a result is confidential.',
              year: 'SHS 3',
            },
            {
              id: 'public-health-ghana',
              title: 'Public health in Ghana',
              outcome: 'Describe a named public health programme and evaluate what it achieved.',
              year: 'SHS 3',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Art and Design Foundation ───────────────────────────────────────────── */

register({
  subjectId: 'art-design-foundation',
  stage: 'shs',
  subject: 'Art and Design Foundation',
  source: 'MODEL',
  note: NOTE + ' The seeing and the drawing that every medium depends on.',
  strands: [
    {
      id: 'adf-seeing',
      name: 'Drawing and seeing',
      purpose: 'Recording what is actually in front of you, rather than what you remember.',
      subStrands: [
        {
          id: 'adf-drawing',
          name: 'Observational drawing',
          topics: [
            {
              id: 'line-shape-adf',
              title: 'Line, shape and proportion',
              outcome: 'Draw from observation with proportions measured rather than guessed.',
              year: 'SHS 1',
            },
            {
              id: 'tone-form-adf',
              title: 'Tone, light and form',
              outcome: 'Use tone to make a flat drawing read as a solid object.',
              year: 'SHS 1',
              needs: ['line-shape-adf'],
            },
            {
              id: 'perspective-adf',
              title: 'Perspective',
              outcome: 'Use one and two point perspective to draw a space convincingly.',
              year: 'SHS 2',
              needs: ['line-shape-adf'],
            },
            {
              id: 'figure-adf',
              title: 'Drawing the figure',
              outcome: 'Draw a figure in proportion and in a pose that holds together.',
              year: 'SHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'adf-elements',
      name: 'Elements and principles of design',
      purpose: 'The vocabulary for saying why a composition works.',
      subStrands: [
        {
          id: 'adf-principles',
          name: 'Composition and colour',
          topics: [
            {
              id: 'elements-design-adf',
              title: 'The elements of design',
              outcome: 'Identify line, shape, texture, space, form and colour in a given work.',
              year: 'SHS 1',
            },
            {
              id: 'principles-design-adf',
              title: 'The principles of design',
              outcome: 'Analyse a composition for balance, rhythm, contrast, emphasis and unity.',
              year: 'SHS 2',
              needs: ['elements-design-adf'],
            },
            {
              id: 'colour-theory-adf',
              title: 'Colour theory',
              outcome: 'Mix colours deliberately and explain a scheme in terms of hue, value and intensity.',
              year: 'SHS 1',
            },
            {
              id: 'lettering-adf',
              title: 'Lettering and layout',
              outcome: 'Set out lettering and a layout that can be read at the distance intended.',
              year: 'SHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'adf-context',
      name: 'Art in context',
      purpose: 'Where the work comes from, in Ghana and beyond.',
      subStrands: [
        {
          id: 'adf-history',
          name: 'Traditions and appreciation',
          topics: [
            {
              id: 'ghanaian-art-adf',
              title: 'Ghanaian art traditions',
              outcome: 'Describe a named tradition, such as adinkra, kente or carving, and its meanings.',
              year: 'SHS 1',
            },
            {
              id: 'african-art-adf',
              title: 'African art and its influence',
              outcome: 'Explain how African forms influenced modern art elsewhere.',
              year: 'SHS 2',
            },
            {
              id: 'appreciation-adf',
              title: 'Appreciating and criticising a work',
              outcome: 'Describe, analyse, interpret and judge a work, in that order, with evidence.',
              year: 'SHS 3',
              needs: ['principles-design-adf'],
            },
          ],
        },
      ],
    },
  ],
})

/* ── Art and Design Studio ───────────────────────────────────────────────── */

register({
  subjectId: 'art-design-studio',
  stage: 'shs',
  subject: 'Art and Design Studio',
  source: 'MODEL',
  note: NOTE
    + ' A body of work in a chosen medium, taken to a finish; it assumes the Foundation course.',
  strands: [
    {
      id: 'ads-media',
      name: 'Working in a medium',
      purpose: 'Learning what a material will and will not do.',
      subStrands: [
        {
          id: 'ads-two-d',
          name: 'Two dimensional media',
          topics: [
            {
              id: 'painting-ads',
              title: 'Painting',
              outcome: 'Prepare a ground and build a painting in layers in a chosen medium.',
              year: 'SHS 1',
            },
            {
              id: 'printmaking-ads',
              title: 'Printmaking',
              outcome: 'Cut and print a block in an edition, and register a second colour.',
              year: 'SHS 2',
            },
            {
              id: 'textiles-ads',
              title: 'Textiles',
              outcome: 'Produce a designed textile by a named method such as tie dye, batik or weaving.',
              year: 'SHS 2',
            },
            {
              id: 'graphic-ads',
              title: 'Graphic design',
              outcome: 'Design for a stated audience and purpose, and justify the choices.',
              year: 'SHS 3',
            },
          ],
        },
        {
          id: 'ads-three-d',
          name: 'Three dimensional media',
          topics: [
            {
              id: 'ceramics-ads',
              title: 'Ceramics',
              outcome: 'Make by pinch, coil or slab, and explain drying and firing.',
              year: 'SHS 1',
            },
            {
              id: 'sculpture-ads',
              title: 'Sculpture',
              outcome: 'Model, carve or construct a form that works from every side.',
              year: 'SHS 2',
            },
            {
              id: 'basketry-leather-ads',
              title: 'Basketry and leatherwork',
              outcome: 'Produce an article by a traditional method and finish it properly.',
              year: 'SHS 2',
            },
            {
              id: 'bead-jewellery-ads',
              title: 'Beadwork and jewellery',
              outcome: 'Design and make an article, with the joins strong enough to wear.',
              year: 'SHS 3',
            },
          ],
        },
      ],
    },
    {
      id: 'ads-practice',
      name: 'Studio practice',
      purpose: 'Working like somebody whose work will be seen.',
      subStrands: [
        {
          id: 'ads-professional',
          name: 'From idea to exhibition',
          topics: [
            {
              id: 'sketchbook-ads',
              title: 'The sketchbook and development',
              outcome: 'Show a line of development from first idea to resolved piece.',
              year: 'SHS 1',
            },
            {
              id: 'studio-safety-ads',
              title: 'Studio safety and materials care',
              outcome: 'State the hazard of each material used and the precaution it needs.',
              year: 'SHS 1',
            },
            {
              id: 'exhibition-ads',
              title: 'Mounting and exhibiting work',
              outcome: 'Mount, label and hang work so that it can be seen as intended.',
              year: 'SHS 3',
              needs: ['sketchbook-ads'],
            },
            {
              id: 'art-business-ads',
              title: 'Pricing and selling work',
              outcome: 'Cost a piece including your own time, and set a price you can defend.',
              year: 'SHS 3',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Performing Arts ─────────────────────────────────────────────────────── */

register({
  subjectId: 'performing-arts',
  stage: 'shs',
  subject: 'Performing Arts',
  source: 'MODEL',
  note: NOTE + ' Music, dance and drama, with performance as the deliverable.',
  strands: [
    {
      id: 'pa-music',
      name: 'Music',
      purpose: 'Reading, making and understanding sound that is organised.',
      subStrands: [
        {
          id: 'pa-music-skills',
          name: 'Musicianship',
          topics: [
            {
              id: 'rhythm-pa',
              title: 'Rhythm and metre',
              outcome: 'Read, clap and notate rhythms, including the cross rhythms of Ghanaian music.',
              year: 'SHS 1',
            },
            {
              id: 'notation-pa',
              title: 'Pitch and notation',
              outcome: 'Read and write staff notation and name intervals and scales.',
              year: 'SHS 1',
              needs: ['rhythm-pa'],
            },
            {
              id: 'harmony-pa',
              title: 'Harmony and part writing',
              outcome: 'Harmonise a simple melody and explain each chord choice.',
              year: 'SHS 3',
              needs: ['notation-pa'],
            },
            {
              id: 'instruments-pa',
              title: 'Instruments and ensembles',
              outcome: 'Classify instruments and describe the role of each part in an ensemble.',
              year: 'SHS 2',
            },
            {
              id: 'ghana-music-pa',
              title: 'Ghanaian musical traditions',
              outcome: 'Describe a named tradition, its instruments and the occasion it belongs to.',
              year: 'SHS 2',
            },
          ],
        },
      ],
    },
    {
      id: 'pa-dance-drama',
      name: 'Dance and drama',
      purpose: 'Performance built on purpose rather than on energy.',
      subStrands: [
        {
          id: 'pa-dance',
          name: 'Dance',
          topics: [
            {
              id: 'dance-elements-pa',
              title: 'Elements of dance',
              outcome: 'Use body, space, time and energy deliberately in a short sequence.',
              year: 'SHS 1',
            },
            {
              id: 'traditional-dance-pa',
              title: 'Traditional dances of Ghana',
              outcome: 'Perform a named dance and explain its occasion and its meaning.',
              year: 'SHS 2',
              needs: ['dance-elements-pa'],
            },
            {
              id: 'choreography-pa',
              title: 'Choreography',
              outcome: 'Compose a short piece for a stated idea, and explain the structure.',
              year: 'SHS 3',
              needs: ['traditional-dance-pa'],
            },
          ],
        },
        {
          id: 'pa-drama',
          name: 'Drama and theatre',
          topics: [
            {
              id: 'acting-pa',
              title: 'Acting and characterisation',
              outcome: 'Build a character from what they want, and hold it through a scene.',
              year: 'SHS 1',
            },
            {
              id: 'voice-movement-pa',
              title: 'Voice and movement',
              outcome: 'Project, articulate and move so that the back of the hall receives it.',
              year: 'SHS 2',
              needs: ['acting-pa'],
            },
            {
              id: 'playmaking-pa',
              title: 'Devising and scripting',
              outcome: 'Devise a short play with a conflict that drives it.',
              year: 'SHS 3',
            },
            {
              id: 'production-pa',
              title: 'Production and stagecraft',
              outcome: 'Plan a production: set, lighting, sound, costume and a rehearsal schedule.',
              year: 'SHS 3',
              needs: ['playmaking-pa'],
            },
            {
              id: 'theatre-ghana-pa',
              title: 'Theatre in Ghana',
              outcome: 'Describe the concert party and modern Ghanaian theatre and their audiences.',
              year: 'SHS 2',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Physical Education and Health (core) ───────────────────────────────── */

register({
  subjectId: 'core-peh',
  stage: 'shs',
  subject: 'Physical Education and Health',
  source: 'MODEL',
  note: NOTE + ' The core course every learner takes; practical and short.',
  strands: [
    {
      id: 'peh-fitness',
      name: 'Fitness and movement',
      purpose: 'Being able to use your own body, and keeping it usable.',
      subStrands: [
        {
          id: 'peh-components',
          name: 'Fitness and skills',
          topics: [
            {
              id: 'fitness-components',
              title: 'Components of fitness',
              outcome: 'Name the components of fitness and a test for each.',
              year: 'SHS 1',
            },
            {
              id: 'warm-up-injury',
              title: 'Warming up and avoiding injury',
              outcome: 'Lead a warm up and explain what each part prevents.',
              year: 'SHS 1',
            },
            {
              id: 'athletics-peh',
              title: 'Athletics',
              outcome: 'Perform a track and a field event with the correct technique and rules.',
              year: 'SHS 1',
            },
            {
              id: 'games-peh',
              title: 'Team games',
              outcome: 'Play a named game applying its rules, positions and basic tactics.',
              year: 'SHS 2',
              needs: ['warm-up-injury'],
            },
          ],
        },
      ],
    },
    {
      id: 'peh-health',
      name: 'Health',
      purpose: 'The decisions that decide how healthy you are.',
      subStrands: [
        {
          id: 'peh-health-topics',
          name: 'Health and wellbeing',
          topics: [
            {
              id: 'nutrition-peh',
              title: 'Nutrition and a balanced diet',
              outcome: 'Plan a balanced day’s meals to a budget and justify it.',
              year: 'SHS 1',
            },
            {
              id: 'hygiene-disease-peh',
              title: 'Personal hygiene and disease prevention',
              outcome: 'Match a prevention measure to the route a named disease travels.',
              year: 'SHS 1',
            },
            {
              id: 'first-aid-peh',
              title: 'First aid',
              outcome: 'Give first aid for bleeding, a burn, a sprain and choking, in the right order.',
              year: 'SHS 2',
            },
            {
              id: 'substance-peh',
              title: 'Drugs, alcohol and tobacco',
              outcome: 'Explain dependence as the body adjusting, and name the long term harms.',
              year: 'SHS 2',
            },
            {
              id: 'mental-health-peh',
              title: 'Mental health and stress',
              outcome: 'Recognise signs of stress and depression and name where help can be found.',
              year: 'SHS 3',
            },
            {
              id: 'sexual-health-peh',
              title: 'Sexual and reproductive health',
              outcome: 'State the facts about transmission and prevention, accurately and without exaggeration.',
              year: 'SHS 3',
            },
          ],
        },
      ],
    },
  ],
})

/* ── Physical Education and Health (elective) ───────────────────────────── */

register({
  subjectId: 'peh-elective',
  stage: 'shs',
  subject: 'Physical Education and Health',
  source: 'MODEL',
  note: NOTE
    + ' The elective adds the anatomy, training theory and coaching a specialist needs.',
  strands: [
    {
      id: 'pehe-science',
      name: 'The science of movement',
      purpose: 'What is happening in the body while it works.',
      subStrands: [
        {
          id: 'pehe-anatomy',
          name: 'Anatomy and physiology',
          topics: [
            {
              id: 'skeleton-muscles-pehe',
              title: 'The skeleton and the muscles',
              outcome: 'Name the major bones and muscles and the joint action each produces.',
              year: 'SHS 1',
            },
            {
              id: 'heart-lungs-pehe',
              title: 'The heart, lungs and exercise',
              outcome: 'Explain what changes in circulation and breathing during exercise, and why.',
              year: 'SHS 1',
              needs: ['skeleton-muscles-pehe'],
            },
            {
              id: 'energy-systems-pehe',
              title: 'Energy systems',
              outcome: 'Distinguish aerobic from anaerobic work and match each to an event.',
              year: 'SHS 2',
              needs: ['heart-lungs-pehe'],
            },
            {
              id: 'biomechanics-pehe',
              title: 'Biomechanics of a skill',
              outcome: 'Analyse a skill as levers, force and balance, and suggest a correction.',
              year: 'SHS 3',
            },
          ],
        },
      ],
    },
    {
      id: 'pehe-training',
      name: 'Training and coaching',
      purpose: 'Improving a performance on purpose rather than by effort alone.',
      subStrands: [
        {
          id: 'pehe-training-theory',
          name: 'Training theory and practice',
          topics: [
            {
              id: 'training-principles-pehe',
              title: 'Principles of training',
              outcome: 'Apply overload, progression, specificity and reversibility to a plan.',
              year: 'SHS 2',
            },
            {
              id: 'training-methods-pehe',
              title: 'Methods of training',
              outcome: 'Choose a training method for a named event and justify it.',
              year: 'SHS 2',
              needs: ['training-principles-pehe'],
            },
            {
              id: 'programme-design-pehe',
              title: 'Designing a training programme',
              outcome: 'Write a programme with a measurable goal, progression and rest built in.',
              year: 'SHS 3',
              needs: ['training-methods-pehe'],
            },
            {
              id: 'coaching-pehe',
              title: 'Coaching and officiating',
              outcome: 'Teach a skill in progressive steps, and officiate a game by its rules.',
              year: 'SHS 3',
            },
            {
              id: 'sports-injury-pehe',
              title: 'Sports injury and rehabilitation',
              outcome: 'Manage a common injury and explain a return to play decision.',
              year: 'SHS 3',
            },
            {
              id: 'sport-society-pehe',
              title: 'Sport, society and ethics',
              outcome: 'Argue a position on doping, money or inclusion in sport, with evidence.',
              year: 'SHS 2',
            },
          ],
        },
      ],
    },
  ],
})
