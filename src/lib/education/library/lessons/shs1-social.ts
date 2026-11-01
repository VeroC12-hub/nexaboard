/**
 * Stored lessons for SHS 1 Social Studies.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── What changes at SHS in this subject ───────────────────────────────────
 *
 * JHS Social Studies rewards knowing. SHS Social Studies rewards arguing,
 * and the marks are spread across the parts of an argument rather than
 * sitting on the conclusion. A question that says analyse the causes,
 * effects and management of galamsey is three questions with three mark
 * allocations, and an answer that gives six causes and nothing else scores
 * a third of what was available however good the causes are.
 *
 * So the mechanism of every lesson here is partly about the content and
 * partly about the shape of an answer: how many points the mark allocation
 * is asking for, what counts as evidence rather than assertion, where a
 * named example is required, and how a two sided question is answered
 * without sitting on the fence.
 *
 * ── Named examples ────────────────────────────────────────────────────────
 *
 * Every claim in this subject is worth more with a place attached. The
 * Volta, Obuasi, Keta, Agbogbloshie, Dormaa, Tamale: an examiner can see
 * whether a learner knows the country they are writing about. Each lesson
 * names real places and real figures, because a learner who can only argue
 * in general terms is capped at the lower marks.
 *
 * ── Honesty about contested matters ───────────────────────────────────────
 *
 * Some of these topics are argued about in Ghana right now: galamsey,
 * chieftaincy and the courts, what counts as development. These lessons
 * give the competing arguments as arguments, say which facts are agreed,
 * and do not hand the learner a verdict to copy. An examination question
 * asking for a considered response is marked on the reasoning.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── Ghana's physical environment ────────────────────────────────────────── */

teach({
  topicId: 'ghana-env-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Ghana is mostly low lying, under 500 m, '
      + 'with highlands at Akwapim, Kwahu, the Gambaga scarp '
      + 'and the Akwapim Togo ranges. '
      + 'Almost all its rivers drain to the Volta or straight to the sea. '
      + 'Rainfall falls from over 2000 mm in the south west '
      + 'to under 1000 mm in the north east, '
      + 'and the vegetation follows the rain: '
      + 'rainforest, then savanna, then coastal scrub. '
      + 'Settlement follows water, soil and the trade route.',
    method: [
      'Describe the relief by height and by named feature.',
      'Describe the drainage by basin, not by listing rivers.',
      'Describe the climate by rainfall total and by season.',
      'Match the vegetation to the rainfall.',
      'Explain settlement by what people need from the land.',
    ],
  },

  idea:
    'Ghana is a low lying country. '
    + 'About half of it is under 150 m above sea level, '
    + 'and very little rises above 500 m. '
    + 'The main highlands are the Akwapim Togo ranges in the south east, '
    + 'which carry Mount Afadjato at about 885 m, '
    + 'the Kwahu plateau in the centre, '
    + 'and the Gambaga scarp in the north. '
    + 'The Volta basin covers about two thirds of the country, '
    + 'drained by the Black Volta, the White Volta and the Oti, '
    + 'which meet behind the Akosombo dam in Lake Volta. '
    + 'The remaining rivers, the Pra, the Ankobra, the Tano and the Densu, '
    + 'run south directly to the sea. '
    + 'The climate is tropical, with two rainy seasons in the south '
    + 'and one in the north. '
    + 'Rainfall is heaviest in the south west, over 2000 mm a year at Axim, '
    + 'and lightest in the north east and on the Accra plains, '
    + 'under 1000 mm. '
    + 'The harmattan, a dry dusty wind from the Sahara, '
    + 'blows from December to February and is felt most in the north. '
    + 'Vegetation follows the rainfall: '
    + 'tropical rainforest in the south west, '
    + 'then a forest savanna transition, '
    + 'then Guinea and Sudan savanna northwards, '
    + 'with mangrove along the lagoons '
    + 'and coastal scrub on the dry Accra plains.',

  mechanism:
    'The examination does not reward a list of rivers and mountains. '
    + 'It rewards the chain from the physical facts to how people live, '
    + 'and that chain always runs in the same direction: '
    + 'rainfall decides vegetation, '
    + 'vegetation and soil decide farming, '
    + 'and farming plus water plus trade route decide settlement. '
    + 'Work it through for the south west. '
    + 'Over 2000 mm of rain gives rainforest. '
    + 'Forest soils with that rainfall suit cocoa, oil palm and rubber, '
    + 'which are tree crops needing a long wet season. '
    + 'Tree crops need a settled population '
    + 'because a cocoa tree takes years to bear, '
    + 'so settlements are permanent and dense, '
    + 'and the towns of Ashanti and the Western Region grew on that. '
    + 'Now the north east. '
    + 'Under 1000 mm, with one rainy season, gives savanna. '
    + 'That suits millet, sorghum, groundnut and cattle, '
    + 'all of which tolerate a dry season, '
    + 'and it forces a single planting season, '
    + 'so there is a long dry period with no farm work, '
    + 'which is why seasonal migration southwards has been a feature '
    + 'of northern Ghana for a century. '
    + 'The physical fact explains the social fact, '
    + 'and the explanation is the mark. '
    + 'Here is where answers lose marks. '
    + 'The first is describing relief without numbers or names. '
    + 'Ghana has highlands and lowlands earns nothing. '
    + 'About half the country lies below 150 m, '
    + 'with the Akwapim Togo ranges rising to 885 m at Afadjato, '
    + 'is worth two or three. '
    + 'Put a height and a name in every sentence. '
    + 'The second is listing rivers instead of describing drainage. '
    + 'The expected answer names the Volta basin, '
    + 'says it covers about two thirds of the country, '
    + 'names its three main feeders, '
    + 'and then distinguishes the shorter southern rivers '
    + 'that reach the sea directly. '
    + 'That is a description of a drainage pattern. '
    + 'A list of nine river names is not. '
    + 'The third is treating the Accra plains as an exception to be '
    + 'ignored. '
    + 'They are a favourite question precisely because they break the '
    + 'pattern: '
    + 'they lie in the south, where the rain should be heavy, '
    + 'and they receive under 800 mm. '
    + 'The accepted explanation is that the coast there runs '
    + 'roughly parallel to the rain bearing south west winds '
    + 'rather than across them, '
    + 'so the air is not forced to rise and shed its moisture. '
    + 'A learner who can explain the dry Accra plains '
    + 'has shown they understand the mechanism '
    + 'rather than having memorised a map. '
    + 'The fourth is forgetting that the Volta is now a lake. '
    + 'Akosombo flooded about 8500 square kilometres, '
    + 'moved about 80000 people, '
    + 'and created both the electricity supply and a fishing industry. '
    + 'Any question about the Volta basin '
    + 'should mention the dam and at least one consequence of it. '
    + 'What has to be written down is the figure and the name. '
    + 'Rainfall totals, heights, the proportion of the country in a basin: '
    + 'these are what separate a candidate who knows Ghana '
    + 'from one who knows the shape of the argument only.',

  recap:
    'You know the regions of Ghana and that the north is drier than the '
    + 'south. '
    + 'This gives the figures behind that, '
    + 'and asks you to explain how people live from the land they have.',

  method: [
    'State the relief with heights and named features.',
    'Describe the drainage by basin and give the proportion of the '
      + 'country.',
    'Give rainfall totals and the number of rainy seasons.',
    'Name the vegetation belt that follows each rainfall band.',
    'Name the crops that belt supports.',
    'Explain the settlement pattern from the crops, the water and the '
      + 'routes.',
    'Mention a named exception, such as the dry Accra plains, if it fits.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Describe the relief of Ghana in a way that would earn full '
        + 'marks.',
      steps: [
        'Give the general picture with a number.',
        'Name the highlands and give a height.',
        'Name the plains.',
      ],
      answer: 'Ghana is generally low lying, '
        + 'with about half the country below 150 m above sea level '
        + 'and very little above 500 m. '
        + 'The chief highlands are the Akwapim Togo ranges in the south '
        + 'east, '
        + 'rising to about 885 m at Mount Afadjato, '
        + 'the Kwahu plateau in the centre, '
        + 'and the Gambaga scarp in the north. '
        + 'The coastal plains, the Accra plains and the Volta basin '
        + 'make up the lowland.',
    },
    {
      level: 4,
      ask: 'Explain why cocoa is grown in the south west '
        + 'and cattle kept in the north east.',
      steps: [
        'South west: over 2000 mm of rain, two rainy seasons.',
        'That gives rainforest and deep forest soils.',
        'Cocoa is a tree crop needing high and reliable rainfall.',
        'North east: under 1000 mm, one rainy season.',
        'That gives savanna grassland.',
        'Grass supports cattle, and the drier air reduces tsetse fly.',
      ],
      answer: 'The south west receives over 2000 mm of rain '
        + 'in two rainy seasons, '
        + 'giving rainforest and deep forest soils. '
        + 'Cocoa is a tree crop that needs high and reliable rainfall '
        + 'and shade when young, so it thrives there. '
        + 'The north east receives under 1000 mm in a single season, '
        + 'giving savanna grassland that supports grazing, '
        + 'and the drier conditions reduce the tsetse fly '
        + 'that spreads disease among cattle in the forest zone.',
    },
    {
      level: 4,
      ask: 'Describe the drainage of Ghana.',
      steps: [
        'Name the dominant basin and its share of the country.',
        'Name its main feeders.',
        'Name the dam and the lake.',
        'Distinguish the southern rivers.',
      ],
      answer: 'The Volta basin drains about two thirds of Ghana. '
        + 'Its main feeders are the Black Volta, the White Volta and the '
        + 'Oti, '
        + 'which join and are held behind the Akosombo dam '
        + 'in Lake Volta, one of the largest man made lakes in the world. '
        + 'The rest of the country is drained by shorter rivers '
        + 'flowing south directly into the sea: '
        + 'the Pra, Ankobra, Tano and Densu. '
        + 'Many of these are seasonal in the north '
        + 'and reduced in the dry season.',
    },
    {
      level: 5,
      ask: 'The Accra plains lie in southern Ghana '
        + 'yet receive under 800 mm of rain a year. '
        + 'Explain this, and give two consequences for the people there.',
      steps: [
        'The rain bearing winds come from the south west.',
        'Near Accra the coast runs roughly parallel to those winds.',
        'The air is not forced to rise, so it does not cool and shed '
          + 'moisture.',
        'Low rainfall means grassland and scrub, not forest.',
        'Farming must suit a dry climate; water must be brought in.',
      ],
      answer: 'The rain bearing south west monsoon winds '
        + 'strike the coast near Accra almost parallel to it '
        + 'rather than across it, '
        + 'so the air is not forced to rise, cool and release its moisture, '
        + 'and the rainfall is low. '
        + 'As a consequence the vegetation is coastal scrub and grassland '
        + 'rather than forest, '
        + 'and farming is limited to drought tolerant crops such as cassava '
        + 'and to irrigated vegetable growing. '
        + 'Water for Accra has to be brought from the Densu and the Volta, '
        + 'which is one reason the city has a chronic water supply '
        + 'problem.',
    },
  ],

  traps: [
    {
      mistake: 'Describing relief without heights or named features.',
      why: 'Ghana has highlands and lowlands earns nothing. '
        + 'Put a figure and a name in every sentence.',
    },
    {
      mistake: 'Listing rivers in place of describing drainage.',
      why: 'The answer wanted is the basin, its share of the country, '
        + 'its feeders and the contrast with the direct southern rivers.',
    },
    {
      mistake: 'Assuming all of southern Ghana is wet.',
      why: 'The Accra plains receive under 800 mm, '
        + 'because the coast there lies parallel to the rain bearing '
        + 'winds.',
    },
    {
      mistake: 'Discussing the Volta basin without mentioning Akosombo.',
      why: 'The dam flooded about 8500 square kilometres '
        + 'and moved about 80000 people. '
        + 'It is the main fact about that basin today.',
    },
  ],

  extension:
    'Relief and drainage decided where the roads and railways went, '
    + 'and those decided which towns grew. '
    + 'The railway was built from Sekondi to Kumasi '
    + 'to carry gold and then cocoa out through the ports, '
    + 'so the towns along it grew and those off it did not. '
    + 'The Volta, being dammed, '
    + 'became a barrier across the middle of the country as well as a '
    + 'resource, '
    + 'which is why the Adomi bridge and the ferries matter so much '
    + 'to the eastern districts. '
    + 'A map of Ghana towns is largely a map of its physical geography '
    + 'with a century of economic decisions drawn on top.',

  questions: [
    {
      id: 'genv-1',
      ask: 'About what fraction of Ghana is drained by the Volta basin?',
      kind: 'choice',
      options: ['two thirds', 'one quarter', 'one tenth'],
      answer: 'two thirds',
      teach: 'The Black Volta, White Volta and Oti together '
        + 'drain most of the country into Lake Volta.',
      level: 3,
    },
    {
      id: 'genv-2',
      ask: 'The highest point in Ghana, Mount Afadjato, is about how many '
        + 'metres?',
      kind: 'numeric',
      options: [],
      answer: '885',
      teach: 'About 885 m, in the Akwapim Togo ranges. '
        + 'Even the highest point shows how low lying Ghana is.',
      level: 3,
    },
    {
      id: 'genv-3',
      ask: 'Cocoa grows in the south west mainly because that zone has:',
      kind: 'choice',
      options: [
        'high and reliable rainfall with forest soils',
        'the flattest land',
        'the best roads',
      ],
      answer: 'high and reliable rainfall with forest soils',
      teach: 'Cocoa is a tree crop needing over about 1200 mm of rain '
        + 'and shade when young.',
      level: 4,
    },
    {
      id: 'genv-4',
      ask: 'The Accra plains are unusually dry because:',
      kind: 'choice',
      options: [
        'the coast there lies parallel to the rain bearing winds',
        'they are far from the sea',
        'they are very high',
      ],
      answer: 'the coast there lies parallel to the rain bearing winds',
      teach: 'The air is not forced to rise, '
        + 'so it does not cool and release its moisture.',
      level: 5,
    },
    {
      id: 'genv-5',
      ask: 'The harmattan blows from:',
      kind: 'choice',
      options: [
        'the Sahara, between December and February',
        'the Atlantic, between June and August',
        'the Gulf of Guinea, all year',
      ],
      answer: 'the Sahara, between December and February',
      teach: 'It is a dry dusty wind from the north east, '
        + 'felt most strongly in northern Ghana.',
      level: 3,
    },
  ],
})

/* ── environmental problems ──────────────────────────────────────────────── */

teach({
  topicId: 'env-problems-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Analyse an environmental problem in three parts: '
      + 'causes, effects and management. '
      + 'Four are named in examinations. '
      + 'They are deforestation, soil erosion, '
      + 'water pollution from galamsey, and poor waste disposal. '
      + 'Each has physical causes and human causes. '
      + 'Only the human ones can be managed.',
    method: [
      'Name the problem and a place where it occurs.',
      'Separate physical causes from human causes.',
      'Give effects on the land, on people and on the economy.',
      'Give management under three heads: law, technical measure, '
        + 'and education.',
      'Say why a named measure has not fully worked.',
    ],
  },

  idea:
    'An environmental problem is damage to the natural world '
    + 'that makes it less useful to people and to other living things. '
    + 'Four come up again and again in Ghana. '
    + 'The first is deforestation. '
    + 'Forest is cleared for farms, timber, fuelwood, charcoal '
    + 'and houses, '
    + 'and most of the original forest cover has gone. '
    + 'The second is soil erosion. '
    + 'Water or wind strips the topsoil. '
    + 'It is worst on cleared slopes '
    + 'and on overgrazed land in the savanna. '
    + 'The third is water pollution. '
    + 'Small scale illegal mining, called galamsey, '
    + 'puts silt and mercury into the Pra, the Ankobra and the Birim. '
    + 'Factory and household waste add to it. '
    + 'The fourth is poor waste disposal. '
    + 'Rubbish fills gutters and chokes drains. '
    + 'At Agbogbloshie in Accra, '
    + 'burning electronic waste for copper gives off lead and dioxins. '
    + 'Management works in three ways. '
    + 'There is law and enforcement, '
    + 'such as the Environmental Protection Agency '
    + 'and the mining and forestry laws. '
    + 'There are technical measures, '
    + 'such as contour ploughing, planting trees, '
    + 'bunding and proper landfill. '
    + 'And there is education, '
    + 'which reaches behaviour the law cannot.',

  mechanism:
    'The marks in this topic are allocated by section, '
    + 'and the commonest failure is an answer that is strong on causes '
    + 'and almost silent on management. '
    + 'A question worth fifteen marks that says '
    + 'discuss the causes, effects and management of deforestation in Ghana '
    + 'is giving roughly five marks to each, '
    + 'so a learner who writes eight causes and one line on management '
    + 'has scored five out of ten on two thirds of the question. '
    + 'Count the parts of the question and divide your page accordingly, '
    + 'before you start writing. '
    + 'That single habit is worth more than any extra fact. '
    + 'The second habit is separating physical from human causes, '
    + 'because the division organises the whole answer. '
    + 'Soil erosion in the Upper East has physical causes: '
    + 'intense rainfall falling in a short season, '
    + 'sparse vegetation cover, and a long dry season '
    + 'that leaves the soil loose. '
    + 'It has human causes: overgrazing by too many cattle, '
    + 'bush burning before the rains, '
    + 'continuous cropping without fallow, '
    + 'and cultivation of slopes without terracing. '
    + 'Notice what the division does. '
    + 'The physical causes cannot be managed; the human ones can. '
    + 'So the management section writes itself '
    + 'by taking the human causes one at a time '
    + 'and giving the measure that addresses it. '
    + 'Overgrazing is met by controlling stock numbers, '
    + 'bush burning by fire belts and by law, '
    + 'continuous cropping by rotation and manuring, '
    + 'slope cultivation by contour ridges and terraces. '
    + 'An answer built this way cannot be thin on management, '
    + 'and it reads as analysis rather than as two lists. '
    + 'The third thing the examination rewards, '
    + 'and the thing that marks out a top answer, '
    + 'is explaining why a measure has not worked. '
    + 'Galamsey is the clearest case, '
    + 'and it is contested in Ghana, so state the positions fairly. '
    + 'The facts most people agree on: '
    + 'the rivers are badly silted and carry mercury; '
    + 'treating that water for drinking has become far more expensive; '
    + 'farmland and cocoa farms have been dug up; '
    + 'and operations have continued despite bans and task forces. '
    + 'Why the bans have not held is where the argument is. '
    + 'One position stresses enforcement: '
    + 'the operators have protection, the fines are small '
    + 'compared with the money, and the sites are remote. '
    + 'Another stresses livelihood: '
    + 'galamsey employs a very large number of young people '
    + 'in districts with little other paid work, '
    + 'so removing it without an alternative moves the problem '
    + 'rather than solving it. '
    + 'A third stresses land rights, '
    + 'arguing that communities who gain nothing from a large concession '
    + 'have no reason to protect it. '
    + 'A good answer gives at least two of those '
    + 'and then takes a position with a reason. '
    + 'What it must not do is stop at galamsey is bad and should be '
    + 'stopped, '
    + 'which answers none of the question. '
    + 'Last, the place name. '
    + 'Every claim in this topic should be attached to somewhere. '
    + 'The Pra and the Ankobra for mining pollution. '
    + 'Agbogbloshie for electronic waste. '
    + 'The Upper East for erosion. '
    + 'The Atewa and Achimota forest reserves for the pressure on protected '
    + 'land. '
    + 'A general answer about pollution could have been written '
    + 'about any country, and it is marked as though it were.',

  recap:
    'You know that cutting trees and dumping rubbish cause harm. '
    + 'This organises that into causes, effects and management, '
    + 'and asks you to say why the management has not fully worked.',

  method: [
    'Read the question and count its parts.',
    'Divide your answer so each part gets its share of the space.',
    'Name the problem and a specific place.',
    'List the physical causes.',
    'List the human causes.',
    'Give effects on the land, on health and on the economy.',
    'For each human cause, give the measure that addresses it.',
    'Name the body or law responsible.',
    'Explain why one named measure has not fully succeeded.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give three causes of deforestation in Ghana.',
      steps: [
        'Think of the uses the land or the wood is put to.',
      ],
      answer: 'Clearing land for farming, especially shifting cultivation '
        + 'and cocoa expansion; '
        + 'logging for timber, both legal and illegal; '
        + 'and cutting for fuelwood and charcoal, '
        + 'which supply most household energy in rural Ghana. '
        + 'Mining and settlement expansion are two more.',
    },
    {
      level: 4,
      ask: 'Analyse soil erosion in the Upper East Region '
        + 'under physical causes, human causes and management.',
      steps: [
        'Physical: short intense rainy season, sparse cover, long dry '
          + 'season.',
        'Human: overgrazing, bush burning, continuous cropping, slope '
          + 'farming.',
        'Management: take each human cause and give its measure.',
      ],
      answer: 'Physical causes: rainfall arrives intensely in one short '
        + 'season, '
        + 'vegetation cover is sparse, '
        + 'and the long dry season leaves the topsoil loose and exposed. '
        + 'Human causes: overgrazing by too many cattle, '
        + 'burning the bush before the rains, '
        + 'cropping the same land without fallow, '
        + 'and cultivating slopes without terracing. '
        + 'Management: control stock numbers and provide dry season fodder; '
        + 'cut fire belts and enforce the law against burning; '
        + 'rotate crops and add manure to restore the soil; '
        + 'build contour ridges and plant cover crops on slopes; '
        + 'and plant trees as windbreaks. '
        + 'The physical causes cannot be managed, '
        + 'which is why every measure addresses a human one.',
    },
    {
      level: 5,
      ask: 'Galamsey has been banned and task forces deployed, '
        + 'yet it continues. '
        + 'Give two explanations and argue a position.',
      steps: [
        'State what is agreed: silted rivers, mercury, higher treatment '
          + 'costs.',
        'Explanation one: enforcement is weak and the money is large.',
        'Explanation two: it is the main paid work in some districts.',
        'Take a position and give a reason.',
      ],
      answer: 'It is agreed that the Pra, Ankobra and Birim are heavily '
        + 'silted '
        + 'and carry mercury, '
        + 'that treating the water has become far more expensive, '
        + 'and that farmland has been destroyed. '
        + 'One explanation is enforcement: '
        + 'the sites are remote, the operators are often protected, '
        + 'and the penalties are small beside the money to be made. '
        + 'Another is livelihood: '
        + 'galamsey is the main source of cash income '
        + 'for many young people in districts with little other paid work, '
        + 'so a ban with no alternative simply moves the activity. '
        + 'A defensible position is that enforcement alone will not hold '
        + 'unless an alternative income exists, '
        + 'so licensing and regulating small scale mining, '
        + 'with community monitoring of river quality, '
        + 'is more likely to work than repeated bans. '
        + 'Whichever position is taken, it must be argued, '
        + 'because the marks are for the reasoning and not for the verdict.',
    },
    {
      level: 5,
      ask: 'A fifteen mark question asks you to discuss the causes, '
        + 'effects and management of water pollution in Ghana. '
        + 'How should the answer be organised?',
      steps: [
        'Three named parts, so roughly five marks each.',
        'Five marks usually means four or five developed points.',
        'Each point needs a place or an example.',
      ],
      answer: 'In three clearly headed sections of about equal length, '
        + 'with four or five developed points in each. '
        + 'Causes: galamsey silt and mercury in the Pra and Ankobra, '
        + 'industrial effluent, domestic sewage, '
        + 'waste dumped in drains, and farm chemicals washed into streams. '
        + 'Effects: unsafe drinking water and disease, '
        + 'higher water treatment costs, '
        + 'loss of fish, damage to farmland, and loss of tourism. '
        + 'Management: enforcement by the Environmental Protection Agency, '
        + 'licensing and regulating small scale mining, '
        + 'treatment plants and proper waste collection, '
        + 'buffer zones along river banks, '
        + 'and public education. '
        + 'An answer with twelve causes and one line of management '
        + 'cannot score more than about a third, '
        + 'however good the causes are.',
    },
  ],

  traps: [
    {
      mistake: 'Writing many causes and almost no management.',
      why: 'The marks are divided between the named parts of the question. '
        + 'Count the parts and divide the page before writing.',
    },
    {
      mistake: 'Mixing physical and human causes together.',
      why: 'The division organises the answer, '
        + 'and only the human causes can be managed, '
        + 'so it also writes the management section for you.',
    },
    {
      mistake: 'Answering that galamsey is bad and must be stopped.',
      why: 'The question asks why it continues despite the bans. '
        + 'Give the competing explanations, then take a reasoned position.',
    },
    {
      mistake: 'Writing without a single place name.',
      why: 'The answer could then be about any country. '
        + 'Name the Pra, Agbogbloshie, the Upper East, Atewa.',
    },
  ],

  extension:
    'Environmental problems are often shifted rather than solved, '
    + 'and noticing that is a mark of real analysis. '
    + 'Banning charcoal production in one district '
    + 'moves the cutting to the next. '
    + 'Clearing Agbogbloshie moves the burning somewhere less visible. '
    + 'Closing a galamsey site sends the operators upriver. '
    + 'The test of a measure is therefore not whether the problem '
    + 'disappeared from where it was being watched, '
    + 'but whether the activity that caused it '
    + 'became unnecessary or unprofitable. '
    + 'That is why almost every lasting solution in this topic '
    + 'includes an alternative livelihood.',

  questions: [
    {
      id: 'envp-1',
      ask: 'Which of these is a human cause of soil erosion?',
      kind: 'choice',
      options: ['overgrazing', 'intense rainfall', 'a long dry season'],
      answer: 'overgrazing',
      teach: 'The other two are physical causes, '
        + 'which cannot be managed. '
        + 'Management always addresses a human cause.',
      level: 3,
    },
    {
      id: 'envp-2',
      ask: 'Galamsey pollution is most associated with which rivers?',
      kind: 'choice',
      options: [
        'the Pra, Ankobra and Birim',
        'the Densu only',
        'the Oti and the White Volta',
      ],
      answer: 'the Pra, Ankobra and Birim',
      teach: 'These drain the gold bearing areas of the south west '
        + 'and carry silt and mercury.',
      level: 4,
    },
    {
      id: 'envp-3',
      ask: 'Agbogbloshie in Accra is known for:',
      kind: 'choice',
      options: [
        'electronic waste',
        'illegal gold mining',
        'cocoa processing',
      ],
      answer: 'electronic waste',
      teach: 'Burning cables for copper releases lead and dioxins, '
        + 'which is the health problem there.',
      level: 3,
    },
    {
      id: 'envp-4',
      ask: 'In a question on causes, effects and management, '
        + 'roughly what share of the marks goes to management?',
      kind: 'choice',
      options: ['about a third', 'about a tenth', 'all of them'],
      answer: 'about a third',
      teach: 'Three named parts means the marks are divided roughly '
        + 'equally. '
        + 'Divide your page the same way.',
      level: 4,
    },
    {
      id: 'envp-5',
      ask: 'Why do many environmental measures in Ghana include '
        + 'an alternative livelihood?',
      kind: 'choice',
      options: [
        'Otherwise the activity simply moves elsewhere',
        'Because the law requires it',
        'To reduce the cost of enforcement only',
      ],
      answer: 'Otherwise the activity simply moves elsewhere',
      teach: 'A ban removes the activity from where it is watched. '
        + 'Only an alternative income removes the reason for it.',
      level: 5,
    },
  ],
})

/* ── the constitution and separation of powers ───────────────────────────── */

teach({
  topicId: 'constitution-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The 1992 Constitution is the supreme law of Ghana. '
      + 'Power is divided among three arms: '
      + 'the legislature makes law, the executive carries it out, '
      + 'and the judiciary interprets it and settles disputes. '
      + 'Each arm checks the others, '
      + 'so that no one of them can act alone. '
      + 'Entrenched clauses can be changed only by a referendum.',
    method: [
      'Name the arm, say what it does, and name who holds it.',
      'For a check, say which arm acts on which, and how.',
      'Give the article or the body by name where you can.',
      'Distinguish an entrenched clause from an ordinary one.',
      'For an evaluation, give a strength and a weakness with an example.',
    ],
  },

  idea:
    'A constitution is the body of rules setting out '
    + 'how a state is governed and what limits the government. '
    + 'Ghana has been governed under the Fourth Republican Constitution '
    + 'since 1993, having approved it by referendum in April 1992. '
    + 'It is written, rigid and supreme: '
    + 'any law or act inconsistent with it is void. '
    + 'Power is separated among three arms. '
    + 'The legislature is Parliament, which makes laws '
    + 'and approves taxes and the budget. '
    + 'The executive is the President, the Vice President and ministers, '
    + 'who carry out the law and run the administration. '
    + 'The judiciary is the courts, headed by the Supreme Court, '
    + 'which interpret the law, try cases '
    + 'and determine whether an act is constitutional. '
    + 'Each arm limits the others, which is called checks and balances. '
    + 'Parliament approves ministerial appointments and can impeach the '
    + 'President. '
    + 'The President assents to bills and appoints judges, '
    + 'subject to approval. '
    + 'The courts can declare an act of Parliament or of the executive '
    + 'unconstitutional. '
    + 'Some provisions are entrenched, '
    + 'including the ones creating the Republic '
    + 'and protecting fundamental human rights, '
    + 'and these can be amended only by a referendum '
    + 'passed by at least 40 per cent of registered voters '
    + 'with 75 per cent voting in favour. '
    + 'Other provisions can be amended by Parliament alone, '
    + 'by a two thirds majority.',

  mechanism:
    'The reason power is separated is worth stating plainly, '
    + 'because an answer that states it scores and one that assumes it '
    + 'does not. '
    + 'If the same body made the law, enforced it and judged disputes '
    + 'under it, '
    + 'it could pass a law to suit itself, '
    + 'apply it only to its opponents, '
    + 'and acquit itself when accused. '
    + 'Separating the three means each must persuade the others, '
    + 'and that friction is the protection. '
    + 'So the purpose of separation is not efficiency; '
    + 'it is deliberately the opposite of efficiency, '
    + 'and saying so shows the point has been understood. '
    + 'Now the error that costs the most marks in this topic. '
    + 'A question asks for the checks and balances, '
    + 'and the answer describes the three arms again. '
    + 'Those are different questions. '
    + 'Describing the arms is who does what. '
    + 'A check is a specific power that one named arm '
    + 'exercises over another named arm. '
    + 'So the answer must have a direction in it. '
    + 'Parliament over the executive: '
    + 'it approves the budget, vets ministerial appointments, '
    + 'summons ministers to answer questions, '
    + 'and can impeach the President. '
    + 'The judiciary over Parliament: '
    + 'the Supreme Court can declare a statute unconstitutional and void. '
    + 'The executive over the judiciary: '
    + 'the President appoints judges, '
    + 'though with the advice of the Judicial Council '
    + 'and the approval of Parliament. '
    + 'The judiciary over the executive: '
    + 'the courts can quash an administrative decision '
    + 'and order the state to act lawfully. '
    + 'Write each as arm A does this to arm B, '
    + 'and every line is a mark. '
    + 'The second error is confusing separation of powers '
    + 'with the absence of any connection. '
    + 'In Ghana the President appoints ministers, '
    + 'and the Constitution requires that the majority of them '
    + 'come from Parliament. '
    + 'So the executive and the legislature overlap in membership, '
    + 'which is a real weakness in the separation '
    + 'and a standard examination point. '
    + 'A candidate who writes that Ghana has a complete separation of '
    + 'powers '
    + 'has described a textbook rather than the country. '
    + 'The honest answer is that the separation is partial, '
    + 'and that the overlap weakens Parliament as a check, '
    + 'because a minister who is also a member of Parliament '
    + 'is being asked to hold his own government to account. '
    + 'The third is the entrenched clause. '
    + 'It is not simply an important clause. '
    + 'It is a clause listed in article 290 '
    + 'that cannot be amended by Parliament at all, '
    + 'only by a national referendum with the stated thresholds. '
    + 'The reason the thresholds are high '
    + 'is that these provisions are the ones '
    + 'a government might most want to change for its own benefit, '
    + 'such as the length of a presidential term, '
    + 'so the Constitution puts them beyond the reach '
    + 'of whoever happens to hold a majority. '
    + 'What has to be written down is the name. '
    + 'Parliament, not the lawmakers. '
    + 'The Supreme Court, not the courts. '
    + 'The Judicial Council, the Council of State, '
    + 'the Electoral Commission, the Commission on Human Rights '
    + 'and Administrative Justice: '
    + 'each has a defined role, '
    + 'and naming the right body is reliably worth a mark '
    + 'where describing it vaguely is not.',

  recap:
    'You know Ghana has a President, a Parliament and courts. '
    + 'This says what each is for, '
    + 'how each limits the others, '
    + 'and which parts of the Constitution are hardest to change.',

  method: [
    'Name the arm and the body that holds it.',
    'State its main function in one clause.',
    'For a check, write arm A does this to arm B.',
    'Name the specific power: budget approval, impeachment, judicial '
      + 'review.',
    'Name the relevant body or article where you know it.',
    'For an evaluation, give one strength and one weakness, each with an '
      + 'example.',
    'Distinguish entrenched from ordinary provisions and give the '
      + 'procedure.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the three arms of government in Ghana '
        + 'and state the main function of each.',
      steps: [
        'Who makes law, who carries it out, who interprets it.',
      ],
      answer: 'The legislature, which is Parliament, makes the laws '
        + 'and approves taxation and the budget. '
        + 'The executive, which is the President, Vice President and '
        + 'ministers, '
        + 'carries out the laws and administers the state. '
        + 'The judiciary, headed by the Supreme Court, '
        + 'interprets the laws, tries cases '
        + 'and decides whether an act is constitutional.',
    },
    {
      level: 4,
      ask: 'Give four checks and balances in the 1992 Constitution.',
      steps: [
        'Each answer must name the arm acting and the arm acted upon.',
      ],
      answer: 'Parliament must approve the national budget, '
        + 'so the executive cannot spend without its consent. '
        + 'Parliament vets ministerial appointments '
        + 'and may impeach the President. '
        + 'The Supreme Court may declare an Act of Parliament '
        + 'unconstitutional and therefore void. '
        + 'The courts may quash an unlawful administrative decision '
        + 'of the executive. '
        + 'The President assents to bills and appoints judges, '
        + 'though on the advice of the Judicial Council '
        + 'and with the approval of Parliament. '
        + 'Each line names who checks whom, which is what the question '
        + 'asks.',
    },
    {
      level: 4,
      ask: 'What is an entrenched provision, '
        + 'and how may one be amended?',
      steps: [
        'It is a provision listed in article 290.',
        'Parliament alone cannot change it.',
        'A referendum with stated thresholds is required.',
      ],
      answer: 'An entrenched provision is one listed in article 290 '
        + 'of the Constitution, '
        + 'including the provisions creating the Republic '
        + 'and protecting fundamental human rights. '
        + 'It cannot be amended by Parliament alone. '
        + 'A referendum is required, '
        + 'in which at least 40 per cent of registered voters take part '
        + 'and at least 75 per cent of those voting approve. '
        + 'Ordinary provisions may be amended by Parliament '
        + 'with a two thirds majority. '
        + 'The high threshold exists because these are the provisions '
        + 'a government might most wish to change for its own advantage.',
    },
    {
      level: 5,
      ask: 'Evaluate the separation of powers in Ghana, '
        + 'giving one strength and one weakness with an example of each.',
      steps: [
        'Strength: judicial review is real and has been exercised.',
        'Weakness: the executive and legislature overlap in membership.',
        'Explain why the overlap matters.',
      ],
      answer: 'A strength is that judicial review is genuine: '
        + 'the Supreme Court has heard and decided cases '
        + 'on the constitutionality of government action, '
        + 'including election petitions, '
        + 'and its rulings have been complied with, '
        + 'so the judiciary is a real check on the other two arms. '
        + 'A weakness is that the Constitution requires '
        + 'the majority of ministers to be appointed from Parliament, '
        + 'so the executive and the legislature overlap in membership. '
        + 'A member of Parliament who is also a minister '
        + 'is being asked to hold his own government to account, '
        + 'which weakens Parliament as a check. '
        + 'So the separation in Ghana is partial rather than complete, '
        + 'and an answer claiming it is complete '
        + 'describes a textbook rather than the country.',
    },
  ],

  traps: [
    {
      mistake: 'Answering a checks and balances question '
        + 'by describing the three arms.',
      why: 'A check has a direction. '
        + 'Write arm A does this specific thing to arm B.',
    },
    {
      mistake: 'Saying Ghana has a complete separation of powers.',
      why: 'Most ministers must be members of Parliament, '
        + 'so the executive and legislature overlap. '
        + 'The separation is partial.',
    },
    {
      mistake: 'Treating an entrenched clause as merely an important one.',
      why: 'It is a clause listed in article 290 '
        + 'that only a referendum can change, '
        + 'with 40 per cent turnout and 75 per cent approval.',
    },
    {
      mistake: 'Writing the lawmakers and the courts instead of naming '
        + 'bodies.',
      why: 'Parliament, the Supreme Court, the Judicial Council, '
        + 'the Council of State. '
        + 'The correct name is reliably worth a mark.',
    },
  ],

  extension:
    'Separation of powers is not the only safeguard in the '
    + 'Constitution. '
    + 'It also sets up bodies that sit outside all three arms. '
    + 'Their heads have security of tenure, '
    + 'so no arm can easily remove them. '
    + 'They include the Electoral Commission, '
    + 'the Commission on Human Rights and Administrative Justice, '
    + 'the Auditor General '
    + 'and the National Commission for Civic Education. '
    + 'These are sometimes called the fourth arm. '
    + 'The argument for them is simple. '
    + 'Some jobs cannot be done by anybody '
    + 'who has an interest in the result, '
    + 'and running an election is one of them.',

  questions: [
    {
      id: 'const-1',
      ask: 'Which arm of government interprets the laws?',
      kind: 'choice',
      options: ['the judiciary', 'the legislature', 'the executive'],
      answer: 'the judiciary',
      teach: 'Parliament makes the law, the executive carries it out, '
        + 'and the courts interpret it.',
      level: 2,
    },
    {
      id: 'const-2',
      ask: 'In which year did Ghana approve the Fourth Republican '
        + 'Constitution by referendum?',
      kind: 'numeric',
      options: [],
      answer: '1992',
      teach: 'Approved by referendum in April 1992 '
        + 'and brought into force in January 1993.',
      level: 3,
    },
    {
      id: 'const-3',
      ask: 'Which of these is a check by the judiciary on Parliament?',
      kind: 'choice',
      options: [
        'declaring an Act unconstitutional',
        'approving the budget',
        'appointing judges',
      ],
      answer: 'declaring an Act unconstitutional',
      teach: 'Budget approval is Parliament over the executive, '
        + 'and appointing judges is the executive over the judiciary.',
      level: 4,
    },
    {
      id: 'const-4',
      ask: 'An entrenched provision can be amended only by:',
      kind: 'choice',
      options: [
        'a referendum',
        'a two thirds majority in Parliament',
        'a presidential order',
      ],
      answer: 'a referendum',
      teach: 'With at least 40 per cent turnout '
        + 'and at least 75 per cent of those voting in favour.',
      level: 4,
    },
    {
      id: 'const-5',
      ask: 'Why does the overlap between ministers and members of '
        + 'Parliament '
        + 'weaken the separation of powers?',
      kind: 'choice',
      options: [
        'A minister is asked to hold his own government to account',
        'Ministers have too much work',
        'Parliament becomes too large',
      ],
      answer: 'A minister is asked to hold his own government to account',
      teach: 'The check depends on the two arms having separate interests. '
        + 'Shared membership reduces that.',
      level: 5,
    },
  ],
})

/* ── resources and the economy ───────────────────────────────────────────── */

teach({
  topicId: 'resources-shs-social',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A resource is anything useful that can be obtained from the '
      + 'environment. '
      + 'Ghana exports mainly gold, cocoa, oil and timber, '
      + 'all of them raw or barely processed. '
      + 'Its economy therefore depends on prices it does not set. '
      + 'Adding value before export, and widening the range of exports, '
      + 'are the two standard answers to that dependence.',
    method: [
      'Classify the resource: renewable or non-renewable, '
        + 'human or natural.',
      'Say where in Ghana it is found.',
      'State what is done with it, and in what form it leaves the '
        + 'country.',
      'Explain how that form affects what Ghana earns.',
      'For a solution, say what adding value would change.',
    ],
  },

  idea:
    'A resource is anything in the environment '
    + 'that people can use to satisfy a want. '
    + 'Natural resources include minerals, land, water, forest and fish. '
    + 'Human resources are the people themselves, '
    + 'their numbers, skills, health and education. '
    + 'A renewable resource, such as forest or fish, '
    + 'replaces itself if it is not taken faster than it grows. '
    + 'A non-renewable resource, such as gold or oil, does not. '
    + 'Ghana has gold at Obuasi, Tarkwa and Ahafo; '
    + 'bauxite at Awaso and Nyinahin; '
    + 'manganese at Nsuta; '
    + 'diamonds at Akwatia; '
    + 'oil and gas offshore at the Jubilee and TEN fields; '
    + 'cocoa through the forest belt; '
    + 'timber in the high forest; '
    + 'and fish along the coast and in Lake Volta. '
    + 'The economy has three sectors. '
    + 'The primary sector takes resources from the environment: '
    + 'farming, mining, forestry and fishing. '
    + 'The secondary sector processes them. '
    + 'The tertiary sector provides services. '
    + 'Most Ghanaians work in the primary sector, '
    + 'and most export earnings come from gold, oil, cocoa and timber, '
    + 'which leave the country raw or lightly processed. '
    + 'Imports are largely manufactured goods, fuel and some food.',

  mechanism:
    'The central idea in this topic is that it matters '
    + 'in what form a resource leaves the country, '
    + 'and the example everybody can check is cocoa. '
    + 'Ghana grows a large share of the world cocoa crop '
    + 'and earns a small share of the money made from chocolate. '
    + 'A bean exported raw is sold at a price set on an exchange '
    + 'in London or New York. '
    + 'The grinding, the cocoa butter, the chocolate, the brand '
    + 'and the retail margin all happen elsewhere, '
    + 'and each of those steps adds more value than growing the bean did. '
    + 'So the farmer at Dormaa sells into a market where '
    + 'he sets no price and holds no processing. '
    + 'That is what economists mean by exporting raw materials '
    + 'and importing manufactured goods, '
    + 'and the whole of the argument about diversification '
    + 'and adding value follows from it. '
    + 'A learner who can explain that one chain can answer most of the '
    + 'questions in this topic. '
    + 'Two consequences are examined repeatedly. '
    + 'The first is price instability. '
    + 'A country whose earnings come from four commodities '
    + 'is exposed to prices it cannot influence. '
    + 'When the world cocoa price or the gold price falls, '
    + 'government revenue falls with it, '
    + 'the currency weakens, '
    + 'imported goods become dearer, '
    + 'and the budget has to be cut or borrowed against. '
    + 'The answer is not to grow less cocoa; '
    + 'it is to earn from more things, '
    + 'so that a fall in one is cushioned by the others. '
    + 'That is diversification, and it has to be explained rather than '
    + 'named. '
    + 'The second is employment. '
    + 'Mining is capital intensive: '
    + 'a large mine produces a great deal of value with few workers, '
    + 'so gold can dominate exports '
    + 'while employing a small fraction of the workforce. '
    + 'Processing, by contrast, employs people. '
    + 'This is the strongest argument for value addition '
    + 'in a country with many young people seeking work, '
    + 'and it is more persuasive than the argument about price alone. '
    + 'Now the errors. '
    + 'The first is confusing a resource with a product. '
    + 'Cocoa beans are a resource; chocolate is a product. '
    + 'Bauxite is a resource; aluminium is a product. '
    + 'The distinction is the whole point of the topic, '
    + 'so getting it wrong in the first line is costly. '
    + 'The second is calling a resource renewable or non-renewable '
    + 'without the condition. '
    + 'Forest and fish are renewable only if the harvest '
    + 'does not exceed the rate of replacement. '
    + 'Ghanaian fish stocks have fallen sharply, '
    + 'which is a renewable resource being used as though it were '
    + 'inexhaustible, '
    + 'and that example is worth having. '
    + 'The third is forgetting human resources. '
    + 'A question about Ghana resources '
    + 'that lists only minerals has missed half the mark allocation. '
    + 'An educated and healthy population is a resource, '
    + 'and it is the only one that improves with use. '
    + 'The fourth is the figure. '
    + 'Say that Ghana is among the two largest cocoa producers in the '
    + 'world, '
    + 'that gold is its largest single export earner, '
    + 'that commercial oil production began in 2010 at the Jubilee field. '
    + 'Those are the specifics that distinguish an answer about Ghana '
    + 'from an answer about developing countries in general.',

  recap:
    'You know Ghana produces gold and cocoa and sells them abroad. '
    + 'This asks what form they are sold in, '
    + 'who sets the price, '
    + 'and what the country could do differently.',

  method: [
    'Name the resource and classify it.',
    'Say where in Ghana it is found.',
    'Name the sector of the economy it belongs to.',
    'Say in what form it is exported.',
    'Explain who sets the price and why that matters.',
    'For a solution, state what processing would add '
      + 'and how many would be employed.',
    'Include human resources where the question allows it.',
    'Use a named figure or a named place in each point.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Classify these as renewable or non-renewable, '
        + 'and state where each is found in Ghana: '
        + 'gold, timber, oil, fish.',
      steps: [
        'Ask whether the resource replaces itself.',
      ],
      answer: 'Gold is non-renewable, mined at Obuasi, Tarkwa and Ahafo. '
        + 'Timber is renewable if replanted, from the high forest zone. '
        + 'Oil is non-renewable, from the Jubilee and TEN fields offshore. '
        + 'Fish is renewable if not overharvested, '
        + 'from the coastal waters and Lake Volta. '
        + 'Timber and fish are renewable only on condition '
        + 'that the harvest does not exceed replacement.',
    },
    {
      level: 4,
      ask: 'Explain why Ghana earns much less from cocoa '
        + 'than the chocolate industry earns from Ghanaian cocoa.',
      steps: [
        'Ghana exports the raw bean.',
        'The price of the raw bean is set on a world exchange.',
        'Grinding, butter, chocolate making and branding happen elsewhere.',
        'Each of those steps adds more value than growing did.',
      ],
      answer: 'Ghana exports cocoa mainly as raw beans, '
        + 'whose price is set on world commodity exchanges '
        + 'rather than by the producer. '
        + 'The processing steps that add most of the value, '
        + 'grinding the bean, making cocoa butter and chocolate, '
        + 'branding and retailing, '
        + 'are carried out abroad, '
        + 'so the greater part of the final price is earned there. '
        + 'The grower therefore receives a small share '
        + 'of what the bean ultimately sells for as chocolate.',
    },
    {
      level: 4,
      ask: 'Gold is Ghana largest export earner '
        + 'but employs few people. '
        + 'Explain, and say what follows for policy.',
      steps: [
        'Large scale mining is capital intensive.',
        'Machinery does the work, so few workers produce much value.',
        'So export earnings and employment are not the same thing.',
        'Processing is more labour intensive than extraction.',
      ],
      answer: 'Large scale gold mining is capital intensive: '
        + 'the value is produced by heavy machinery '
        + 'rather than by large numbers of workers, '
        + 'so a mine can dominate export earnings '
        + 'while employing a small fraction of the workforce. '
        + 'It follows that export earnings alone '
        + 'are a poor measure of how much a sector helps the population. '
        + 'A policy aimed at jobs has to favour '
        + 'activities that employ people, such as processing '
        + 'and manufacturing, '
        + 'rather than extraction alone.',
    },
    {
      level: 5,
      ask: 'Argue for and against the view that Ghana should process '
        + 'more of its cocoa at home before export.',
      steps: [
        'For: value added stays in Ghana; jobs; less exposure to bean '
          + 'prices.',
        'Against: processing needs reliable power and capital; '
          + 'buyers hold the brands and the markets; '
          + 'competition with established grinders.',
        'Reach a position with a reason.',
      ],
      answer: 'In favour: processing keeps within Ghana the value added '
        + 'by grinding and by making butter and chocolate; '
        + 'it creates far more jobs than growing or exporting beans; '
        + 'and it reduces exposure to a single commodity price. '
        + 'Against: processing needs a reliable and cheap electricity '
        + 'supply, '
        + 'which has been a persistent constraint; '
        + 'it needs capital and technical skills; '
        + 'and the established grinders and chocolate brands '
        + 'already hold the customers, '
        + 'so a Ghanaian processor must find a market as well as a factory. '
        + 'A defensible position is that processing should be expanded '
        + 'but that it depends on solving the power supply first, '
        + 'since a factory that cannot run reliably '
        + 'adds no value at all. '
        + 'Either position can score full marks if it is argued.',
    },
  ],

  traps: [
    {
      mistake: 'Treating cocoa beans and chocolate as the same thing.',
      why: 'One is a resource and the other a product. '
        + 'The difference between their prices is the whole topic.',
    },
    {
      mistake: 'Calling fish or timber renewable with no condition '
        + 'attached.',
      why: 'They renew only if the harvest does not exceed replacement. '
        + 'Ghanaian fish stocks have fallen sharply.',
    },
    {
      mistake: 'Listing only minerals in an answer about Ghana resources.',
      why: 'Human resources are part of the answer, '
        + 'and they are the only resource that improves with use.',
    },
    {
      mistake: 'Equating export earnings with employment.',
      why: 'Gold earns most and employs few, '
        + 'because large scale mining is capital intensive.',
    },
  ],

  extension:
    'Economists call heavy dependence on one mineral '
    + 'the resource curse. '
    + 'The mechanism is worth knowing. '
    + 'A large mineral income raises the value of the currency. '
    + 'That makes every other export dearer abroad '
    + 'and every import cheaper at home. '
    + 'So farming and factories shrink '
    + 'just when the mineral is most profitable. '
    + 'Then the mineral price falls, '
    + 'and the other sectors have already gone. '
    + 'Botswana avoided this. '
    + 'It saved much of the mineral income in a fund '
    + 'instead of spending it. '
    + 'That is also the argument for the Ghana petroleum funds.',

  questions: [
    {
      id: 'res-1',
      ask: 'Which of these is a non-renewable resource?',
      kind: 'choice',
      options: ['bauxite', 'timber', 'fish'],
      answer: 'bauxite',
      teach: 'A mineral does not replace itself. '
        + 'Timber and fish renew if harvested within their replacement '
        + 'rate.',
      level: 2,
    },
    {
      id: 'res-2',
      ask: 'Mining and farming belong to which sector of the economy?',
      kind: 'choice',
      options: ['primary', 'secondary', 'tertiary'],
      answer: 'primary',
      teach: 'The primary sector takes resources from the environment. '
        + 'Processing them is secondary.',
      level: 3,
    },
    {
      id: 'res-3',
      ask: 'Ghana earns a small share of chocolate revenue mainly because '
        + 'it:',
      kind: 'choice',
      options: [
        'exports the raw bean rather than the processed product',
        'grows too little cocoa',
        'has poor quality beans',
      ],
      answer: 'exports the raw bean rather than the processed product',
      teach: 'Grinding, chocolate making and branding add most of the '
        + 'value, '
        + 'and all happen abroad.',
      level: 4,
    },
    {
      id: 'res-4',
      ask: 'In which year did commercial oil production begin in Ghana?',
      kind: 'numeric',
      options: [],
      answer: '2010',
      teach: 'At the Jubilee field offshore. '
        + 'A named date strengthens any answer in this topic.',
      level: 4,
    },
    {
      id: 'res-5',
      ask: 'Why is diversification recommended for Ghana?',
      kind: 'choice',
      options: [
        'A fall in one commodity price is cushioned by other earnings',
        'Cocoa is no longer profitable',
        'Mining is illegal',
      ],
      answer: 'A fall in one commodity price is cushioned by other earnings',
      teach: 'Four commodities means exposure to prices Ghana does not '
        + 'set. '
        + 'Earning from more things spreads that risk.',
      level: 5,
    },
  ],
})

/* ── culture, socialisation and change ──────────────────────────────────── */

teach({
  topicId: 'culture-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Culture is the whole way of life of a people: '
      + 'what they believe, how they behave, and what they make. '
      + 'It is learned, not inherited, '
      + 'and socialisation is how it is passed on. '
      + 'The family, the school, the peer group, religion '
      + 'and the media are the agents. '
      + 'Culture changes through contact, education, technology '
      + 'and migration, '
      + 'and some change is resisted because it touches identity.',
    method: [
      'Separate material culture from non-material culture.',
      'Name the agent of socialisation and say what it teaches.',
      'For change, name the cause and the specific practice affected.',
      'Distinguish a change in form from a change in meaning.',
      'For a resisted change, say what interest or value is at stake.',
    ],
  },

  idea:
    'Culture is the entire way of life of a people: '
    + 'their beliefs, values, language, customs, laws and arts, '
    + 'together with the objects they make and use. '
    + 'Material culture is the objects: '
    + 'kente cloth, adinkra symbols, drums, tools, buildings, food. '
    + 'Non-material culture is what cannot be touched: '
    + 'language, beliefs, values, norms and customs. '
    + 'Culture is learned rather than inherited. '
    + 'A child born in Ghana and raised in Japan '
    + 'would speak Japanese and hold Japanese customs, '
    + 'which proves that culture is acquired. '
    + 'Socialisation is the process by which a person learns the culture '
    + 'of the group. '
    + 'Primary socialisation happens in the family in early childhood, '
    + 'and it is where language, basic values and respect are learned. '
    + 'Secondary socialisation happens later, '
    + 'through the school, the peer group, religious bodies, '
    + 'the workplace and the media. '
    + 'Norms are the expected ways of behaving, '
    + 'and sanctions are the rewards and punishments that enforce them. '
    + 'Culture changes over time. '
    + 'The main causes are contact with other cultures, '
    + 'formal education, new technology, urbanisation, '
    + 'migration, religion and law. '
    + 'Cultural diffusion is the spread of a practice from one group to '
    + 'another; '
    + 'acculturation is the adoption of another culture through contact.',

  mechanism:
    'The sentence that matters most in this topic '
    + 'is that culture is learned. '
    + 'Everything else follows from it. '
    + 'If culture were inherited it could not change, '
    + 'could not be taught, '
    + 'and could not differ between two children of the same parents '
    + 'raised in different places. '
    + 'Because it is learned, '
    + 'it must be transmitted, which is why socialisation exists; '
    + 'it can be transmitted imperfectly, which is why it changes; '
    + 'and it can be transmitted by somebody outside the group, '
    + 'which is why contact changes it. '
    + 'A learner who begins an answer with culture is learned '
    + 'has the organising idea of the whole topic in one line. '
    + 'Now the distinction that earns the marks in a change question, '
    + 'and it is a subtle one. '
    + 'A change in form is not the same as a change in meaning. '
    + 'Take the naming ceremony. '
    + 'In many Ghanaian families it is still held on the eighth day, '
    + 'still involves the giving of a name by an elder, '
    + 'and still uses water and drink to teach truth telling. '
    + 'What has changed is the scale, the dress, the photography, '
    + 'and that it may now be held in a church hall '
    + 'rather than in a family compound. '
    + 'The form has changed considerably '
    + 'and the meaning, which is admitting the child to the family and the '
    + 'community, '
    + 'has not. '
    + 'Compare that with a practice where the meaning has gone '
    + 'and only the form survives, '
    + 'such as a greeting performed without the deference it once '
    + 'expressed. '
    + 'A good answer says which of the two has happened, '
    + 'and that is what separates a described example '
    + 'from an analysed one. '
    + 'Here is where answers lose marks. '
    + 'The first is treating culture as only the visible things. '
    + 'An answer that gives kente, drumming, festivals and food, '
    + 'and stops, has given material culture alone '
    + 'and left out the larger half: '
    + 'language, values, norms, beliefs, and the system of inheritance. '
    + 'Always give both kinds, labelled. '
    + 'The second is naming the agents of socialisation '
    + 'without saying what each teaches. '
    + 'The family teaches language and basic values. '
    + 'The school teaches literacy and also punctuality, '
    + 'queueing and obedience to a timetable, '
    + 'which are not on any syllabus and are learned anyway. '
    + 'The peer group teaches cooperation and conformity, '
    + 'and it is the agent whose influence rises most sharply in '
    + 'adolescence. '
    + 'The media teaches by showing what is normal and admired. '
    + 'The marks are for the pairing, not the list. '
    + 'The third is treating all cultural change as loss, '
    + 'or all of it as progress. '
    + 'Both are positions a candidate may argue, '
    + 'and neither can be asserted. '
    + 'Take the extended family. '
    + 'Urban living has weakened it: '
    + 'a couple in Accra cannot call on twenty relatives next door, '
    + 'so childcare and old age support have become harder '
    + 'and in some cases are now bought. '
    + 'The same move has given individuals more freedom '
    + 'to choose work, marriage and religion. '
    + 'An answer that gives both sides, with examples, '
    + 'and then takes a view, '
    + 'is doing what the question asks. '
    + 'The fourth is forgetting that some change is resisted '
    + 'for reasons that can be stated. '
    + 'Resistance is not simply ignorance. '
    + 'A practice may be defended because it marks identity, '
    + 'because somebody benefits from it, '
    + 'because the alternative is unfamiliar and therefore risky, '
    + 'or because it is tied to a religious belief. '
    + 'Naming which of those is at stake in a particular case '
    + 'is an analytical answer. '
    + 'Saying people are conservative is not.',

  recap:
    'You know that different peoples have different customs '
    + 'and that children learn from their families. '
    + 'This names the two parts of culture, '
    + 'the agents that transmit it, '
    + 'and the forces that change it.',

  method: [
    'Define culture as the whole way of life.',
    'Separate material from non-material culture and give examples of '
      + 'both.',
    'State that culture is learned, and give the evidence.',
    'Name each agent of socialisation with what it teaches.',
    'For change, name the cause and the exact practice affected.',
    'Say whether the form, the meaning, or both have changed.',
    'Give both a gain and a loss before taking a position.',
    'Where change is resisted, name the interest or value at stake.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Distinguish material from non-material culture, '
        + 'with two Ghanaian examples of each.',
      steps: [
        'Material is what can be touched.',
        'Non-material is what cannot.',
      ],
      answer: 'Material culture is the physical objects a people make and '
        + 'use, '
        + 'such as kente cloth and the talking drum. '
        + 'Non-material culture is what cannot be touched, '
        + 'such as the Akan or Dagbani language '
        + 'and the value placed on respect for elders. '
        + 'Both are part of culture, '
        + 'and an answer that gives only objects has given half the '
        + 'topic.',
    },
    {
      level: 4,
      ask: 'Name four agents of socialisation '
        + 'and state what each teaches a Ghanaian child.',
      steps: [
        'Each agent needs a specific contribution.',
      ],
      answer: 'The family teaches language, basic values, '
        + 'and the forms of respect owed to elders and to kin. '
        + 'The school teaches literacy and numeracy, '
        + 'and also punctuality, obedience to a timetable '
        + 'and cooperation with strangers, '
        + 'none of which appears on the syllabus. '
        + 'The peer group teaches cooperation, loyalty and conformity, '
        + 'and its influence rises sharply in adolescence. '
        + 'Religious bodies teach moral rules '
        + 'and a view of what a person is for. '
        + 'The media teaches by showing what is normal and admired. '
        + 'The marks are for pairing each agent with what it teaches.',
    },
    {
      level: 4,
      ask: 'Explain how urbanisation has changed the extended family in '
        + 'Ghana, '
        + 'giving a gain and a loss.',
      steps: [
        'Urban living separates relatives geographically.',
        'Loss: childcare and old age support no longer shared.',
        'Gain: more individual freedom in work, marriage and religion.',
      ],
      answer: 'Moving to a city separates a household from its wider kin, '
        + 'so the extended family no longer shares daily life. '
        + 'The loss is that childcare, support in illness '
        + 'and care for the old are no longer spread among many relatives, '
        + 'so they fall on one household or have to be paid for. '
        + 'The gain is that individuals have greater freedom '
        + 'to choose their work, their marriage partner and their religion, '
        + 'since the approval of a large family group is no longer '
        + 'immediate. '
        + 'An answer must give both before taking a view.',
    },
    {
      level: 5,
      ask: 'A naming ceremony today may be held in a hall, '
        + 'with photographs and printed invitations. '
        + 'Has the culture changed? '
        + 'Argue your answer.',
      steps: [
        'Identify what has changed: venue, scale, dress, record keeping.',
        'Identify what has not: the eighth day, the elder, '
          + 'the water and drink, the purpose.',
        'Distinguish a change of form from a change of meaning.',
      ],
      answer: 'The form has changed and the meaning largely has not. '
        + 'The venue, the scale, the printed invitations and the '
        + 'photography '
        + 'are new, and come from urban living and from money. '
        + 'But the ceremony is still held on the eighth day, '
        + 'a name is still given by an elder, '
        + 'water and drink are still used to teach the child '
        + 'to tell truth from falsehood, '
        + 'and the purpose is still to admit the child '
        + 'to the family and the community. '
        + 'So this is cultural change in form rather than in substance. '
        + 'Where a practice keeps its form but loses its meaning, '
        + 'the opposite has happened, '
        + 'and saying which of the two it is '
        + 'is what turns a described example into an analysed one.',
    },
  ],

  traps: [
    {
      mistake: 'Giving only kente, drumming and festivals as culture.',
      why: 'That is material culture alone. '
        + 'Language, values, norms and beliefs are the larger half.',
    },
    {
      mistake: 'Listing agents of socialisation without what each teaches.',
      why: 'The marks are for the pairing. '
        + 'Say that the school teaches punctuality as well as literacy.',
    },
    {
      mistake: 'Treating all cultural change as loss.',
      why: 'Give a gain and a loss before taking a position. '
        + 'Urbanisation weakened the extended family '
        + 'and widened individual choice.',
    },
    {
      mistake: 'Explaining resistance to change by saying people are '
        + 'conservative.',
      why: 'Name the interest or value at stake: '
        + 'identity, benefit to someone, unfamiliarity, or religious '
        + 'belief.',
    },
  ],

  extension:
    'Cultural change is rarely even across a society. '
    + 'The gap is worth studying in itself. '
    + 'A practice may be dropped in Accra, '
    + 'kept in the home town, '
    + 'and brought back by the same family at a funeral. '
    + 'So one person holds two versions of the culture '
    + 'and moves between them. '
    + 'Sociologists call this situational behaviour. '
    + 'It explains why survey answers about custom '
    + 'often do not match what people do. '
    + 'It also explains a puzzle. '
    + 'A festival can grow just as the daily practice behind it fades, '
    + 'because the festival has become '
    + 'the place where the identity is kept.',

  questions: [
    {
      id: 'cult-1',
      ask: 'Which of these is non-material culture?',
      kind: 'choice',
      options: ['language', 'kente cloth', 'a talking drum'],
      answer: 'language',
      teach: 'Non-material culture cannot be touched: '
        + 'language, values, norms, beliefs.',
      level: 2,
    },
    {
      id: 'cult-2',
      ask: 'Culture is best described as:',
      kind: 'choice',
      options: ['learned', 'inherited', 'fixed at birth'],
      answer: 'learned',
      teach: 'A Ghanaian child raised in Japan '
        + 'would hold Japanese customs. '
        + 'That is the evidence.',
      level: 3,
    },
    {
      id: 'cult-3',
      ask: 'Primary socialisation takes place mainly in the:',
      kind: 'choice',
      options: ['family', 'school', 'workplace'],
      answer: 'family',
      teach: 'The family teaches language and basic values first. '
        + 'School and work are secondary socialisation.',
      level: 3,
    },
    {
      id: 'cult-4',
      ask: 'Which agent of socialisation has the sharpest rise in '
        + 'influence '
        + 'during adolescence?',
      kind: 'choice',
      options: ['the peer group', 'the family', 'the workplace'],
      answer: 'the peer group',
      teach: 'This is why peer pressure is treated as a topic of its own '
        + 'in Social Studies.',
      level: 4,
    },
    {
      id: 'cult-5',
      ask: 'A naming ceremony held in a hall with photographs, '
        + 'still on the eighth day and still naming the child, '
        + 'shows a change in:',
      kind: 'choice',
      options: ['form but not meaning', 'meaning but not form', 'neither'],
      answer: 'form but not meaning',
      teach: 'The venue and the scale are new; '
        + 'the day, the elder and the purpose are unchanged.',
      level: 5,
    },
  ],
})

/* ── adolescent problems and responsible living ─────────────────────────── */

teach({
  topicId: 'adolescent-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Adolescence is the change from child to adult, '
      + 'physical, emotional and social at once. '
      + 'The pressures that follow from it '
      + 'are peer pressure, early sexual activity, substance use, '
      + 'and the strain of school and money. '
      + 'A considered response names the pressure, '
      + 'states the likely consequence, '
      + 'and gives a decision with a reason that would survive being '
      + 'questioned.',
    method: [
      'Name the pressure precisely, not as bad company.',
      'Say who is applying it and what they offer.',
      'State the consequences, short term and long term.',
      'Give the response, and the reason behind it.',
      'Say what support exists and who can be approached.',
    ],
  },

  idea:
    'Adolescence is the change from child to adult. '
    + 'It begins with puberty. '
    + 'The physical changes come from hormones. '
    + 'The body grows, '
    + 'the reproductive system develops, '
    + 'and the secondary sexual characters appear. '
    + 'The emotional changes are strong and less predictable feelings, '
    + 'worry about appearance, '
    + 'and a wish to decide things for oneself. '
    + 'The social changes move attachment from the family to the peers, '
    + 'and bring the first interest in relationships. '
    + 'The syllabus names several problems. '
    + 'One is peer pressure. '
    + 'Another is early sex with no protection, '
    + 'which risks teenage pregnancy '
    + 'and infection, including HIV. '
    + 'Others are the use of alcohol, tobacco and tramadol, '
    + 'examination stress and fear of failure, '
    + 'poverty and the need to earn, '
    + 'and harmful material and strangers online. '
    + 'Responsible living means three things. '
    + 'Decide by the likely result, not by the feeling of the moment. '
    + 'Know where to get help. '
    + 'And be able to say no in a way you can hold to. '
    + 'Assertiveness is stating your position clearly '
    + 'without being aggressive. '
    + 'Abstinence is choosing not to have sex. '
    + 'It is the only method with no risk '
    + 'of pregnancy or infection.',

  mechanism:
    'The examination question in this topic is almost always the same '
    + 'shape: '
    + 'here is a pressure a young person faces, '
    + 'analyse it and argue a considered response. '
    + 'The word considered is the instruction. '
    + 'It means the answer must survive being argued against, '
    + 'so a bare rule does not qualify. '
    + 'Say no to bad friends earns almost nothing, '
    + 'because it names no pressure, gives no reason, '
    + 'and would not help anybody actually under pressure. '
    + 'A full answer has four parts, and they are the mark allocation. '
    + 'First, name the pressure precisely. '
    + 'Not bad company, but: three classmates who have money '
    + 'and offer to include me if I take tramadol with them. '
    + 'Second, say what makes it a pressure. '
    + 'The offer is not really the drug; '
    + 'it is belonging, and status, and not being the one left out. '
    + 'That is why the pressure works, '
    + 'and an answer that does not see it '
    + 'is answering a different question. '
    + 'Third, give the consequence, in both time frames. '
    + 'Short term: the risk of harm from the drug itself, '
    + 'and of being caught and punished. '
    + 'Long term: dependence, '
    + 'the money it begins to require, '
    + 'the effect on school work, '
    + 'and the difficulty of leaving a group '
    + 'whose shared activity is the thing you want to stop. '
    + 'Fourth, give the response with its reason, '
    + 'and make the response something a person could actually do. '
    + 'Deciding in advance is the practical core of it: '
    + 'a decision made before the moment '
    + 'is far easier to keep than one made in front of the group, '
    + 'because in the moment the cost of refusing is at its highest. '
    + 'So the response is to decide now, '
    + 'to have a short answer ready, '
    + 'to have one friend who has made the same decision, '
    + 'and to tell one adult. '
    + 'The reason is that those four reduce the cost of saying no, '
    + 'which is the only thing that makes saying no possible. '
    + 'That is a considered answer. '
    + 'Now a point about honesty that earns marks '
    + 'and is often got wrong. '
    + 'On sexual activity the syllabus expects abstinence '
    + 'to be stated as the only method with no risk '
    + 'of pregnancy or of infection, and that is true. '
    + 'It is also true that a young person who is already sexually active '
    + 'needs to know where to get accurate information and health care. '
    + 'A good answer can hold both, '
    + 'and it should name the sources: '
    + 'a clinic or health centre, a trained teacher or counsellor, '
    + 'a parent or trusted adult. '
    + 'Naming where help exists is a scoring point, '
    + 'and an answer that offers only a warning has not finished the job. '
    + 'Two further errors. '
    + 'The first is moralising instead of analysing. '
    + 'Writing that young people today have no discipline '
    + 'is an assertion, it carries no evidence, '
    + 'and it answers none of the question. '
    + 'The second is leaving out the structural pressures. '
    + 'A girl who leaves school because of pregnancy, '
    + 'or a boy who leaves to earn, '
    + 'is not simply making a poor decision; '
    + 'the alternatives available to each matter. '
    + 'An answer that mentions the cost of school, '
    + 'the distance to the nearest senior high school, '
    + 'or the absence of paid work in the district '
    + 'is more realistic and scores better than one that treats every '
    + 'outcome '
    + 'as the result of character alone. '
    + 'What has to be written down is the four part structure: '
    + 'the pressure named, why it works, '
    + 'the consequence in both time frames, '
    + 'and the response with its reason and its named source of help.',

  recap:
    'You have been taught about puberty and about saying no. '
    + 'This asks you to analyse a particular pressure '
    + 'and to argue a response that would stand up to being questioned.',

  method: [
    'Name the pressure specifically, including who applies it.',
    'Say what it actually offers: belonging, status, money, affection.',
    'State the short term consequences.',
    'State the long term consequences.',
    'Give the response, and the reason it would work.',
    'Include deciding in advance, and having an answer ready.',
    'Name a source of help: clinic, counsellor, teacher, trusted adult.',
    'Mention any structural pressure that is part of the situation.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give three changes that take place during adolescence, '
        + 'one of each kind.',
      steps: [
        'Physical, emotional, social.',
      ],
      answer: 'Physically, hormones cause rapid growth '
        + 'and the development of the reproductive system. '
        + 'Emotionally, feelings become stronger and less predictable, '
        + 'and self consciousness about appearance increases. '
        + 'Socially, attachment shifts from the family towards the peer '
        + 'group, '
        + 'and the wish to make decisions for oneself grows.',
    },
    {
      level: 4,
      ask: 'A learner is pressed by classmates to take tramadol. '
        + 'Analyse the pressure and give a considered response.',
      steps: [
        'Name the pressure and who applies it.',
        'Say what it really offers.',
        'Short term and long term consequences.',
        'A response that could actually be carried out.',
      ],
      answer: 'The pressure comes from classmates whose company he values, '
        + 'and what is being offered is not really the drug '
        + 'but inclusion and status. '
        + 'That is why the pressure works. '
        + 'In the short term the risks are harm from the drug itself, '
        + 'including breathing problems and overdose, '
        + 'and being caught and punished. '
        + 'In the long term there is dependence, '
        + 'the cost of maintaining it, '
        + 'the effect on school work, '
        + 'and the difficulty of leaving a group '
        + 'whose shared activity is the thing to be stopped. '
        + 'The considered response is to decide before the moment arrives, '
        + 'because refusing is hardest in front of the group; '
        + 'to have a short reply ready rather than an argument; '
        + 'to keep at least one friend who has decided the same; '
        + 'and to tell a teacher or a trusted adult, '
        + 'so that the decision is not being held alone.',
    },
    {
      level: 4,
      ask: 'Why is deciding in advance more effective '
        + 'than deciding at the moment of pressure?',
      steps: [
        'At the moment, the cost of refusing is highest.',
        'The group is present and the reward is immediate.',
        'A decision already made needs no reasoning in the moment.',
      ],
      answer: 'At the moment of pressure the cost of refusing is at its '
        + 'highest: '
        + 'the group is present, the reward is immediate, '
        + 'and the consequences are distant and uncertain. '
        + 'A decision made in advance does not have to be reasoned out '
        + 'under those conditions. '
        + 'It only has to be stated, '
        + 'which is why having a short prepared reply '
        + 'works better than having good arguments.',
    },
    {
      level: 5,
      ask: 'Teenage pregnancy ends the schooling of many girls in Ghana. '
        + 'Analyse the causes and argue what would reduce it.',
      steps: [
        'Causes at the individual level: lack of accurate information, '
          + 'pressure, early sexual activity.',
        'Causes at the structural level: poverty, '
          + 'transactional relationships, distance to school, '
          + 'weak support at home.',
        'Measures: information, access to health services, '
          + 'keeping girls in school, re entry policy, male '
          + 'responsibility.',
        'Take a position with a reason.',
      ],
      answer: 'At the individual level the causes include '
        + 'inaccurate or absent information about reproduction, '
        + 'pressure from older partners, '
        + 'and early sexual activity without any protection. '
        + 'At the structural level they include poverty, '
        + 'which makes a relationship with someone who provides money '
        + 'an economic decision as well as a personal one; '
        + 'long distances to the nearest senior high school; '
        + 'and the absence of an adult at home able to discuss it. '
        + 'Measures that would reduce it: '
        + 'accurate reproductive health education, '
        + 'including that abstinence carries no risk '
        + 'of pregnancy or infection; '
        + 'accessible health services where a young person '
        + 'can ask without shame; '
        + 'keeping girls in school, since each year of schooling '
        + 'is associated with later childbearing; '
        + 'a working re entry policy so that pregnancy '
        + 'does not end schooling permanently; '
        + 'and holding men responsible, since the responsibility '
        + 'and the consequence currently fall very unequally. '
        + 'A defensible position is that information alone is insufficient '
        + 'where the economic pressure is real, '
        + 'so the measures that keep a girl in school and able to return '
        + 'do more than education campaigns by themselves.',
    },
  ],

  traps: [
    {
      mistake: 'Answering with say no to bad friends.',
      why: 'It names no pressure and gives no reason, '
        + 'and it would not help anyone actually under pressure.',
    },
    {
      mistake: 'Moralising about young people having no discipline.',
      why: 'It is an assertion with no evidence '
        + 'and it answers none of the question.',
    },
    {
      mistake: 'Giving only a warning, with no source of help.',
      why: 'Naming a clinic, counsellor, teacher or trusted adult '
        + 'is a scoring point and completes the answer.',
    },
    {
      mistake: 'Treating every outcome as a failure of character.',
      why: 'The cost of school, the distance to one, '
        + 'and the absence of paid work are part of the situation '
        + 'and belong in the analysis.',
    },
  ],

  extension:
    'The skill this topic is really teaching is making a decision '
    + 'before you are in the situation that requires it, '
    + 'and it is used far beyond adolescence. '
    + 'A nurse decides in advance what she will do '
    + 'if a colleague asks her to falsify a record. '
    + 'An accountant decides in advance '
    + 'what he will do if his manager asks him to move a figure. '
    + 'In both cases the decision is easy to make months ahead '
    + 'and very hard to make in the room, '
    + 'for exactly the reason peer pressure works: '
    + 'the cost of refusing is immediate and the cost of agreeing is '
    + 'distant. '
    + 'Deciding early is not a lesson for the young only. '
    + 'It is how people who keep their integrity manage to keep it.',

  questions: [
    {
      id: 'adol-1',
      ask: 'Adolescence begins with:',
      kind: 'choice',
      options: ['puberty', 'the first job', 'leaving school'],
      answer: 'puberty',
      teach: 'It is the change from child to adult, '
        + 'and it begins with the hormonal changes of puberty.',
      level: 2,
    },
    {
      id: 'adol-2',
      ask: 'Peer pressure works mainly because what is offered is:',
      kind: 'choice',
      options: [
        'belonging and status',
        'money only',
        'better school results',
      ],
      answer: 'belonging and status',
      teach: 'The substance or the act is not the real offer. '
        + 'Seeing that is what makes an analysis rather than a warning.',
      level: 4,
    },
    {
      id: 'adol-3',
      ask: 'Which method carries no risk of pregnancy or infection?',
      kind: 'choice',
      options: ['abstinence', 'withdrawal', 'the safe period'],
      answer: 'abstinence',
      teach: 'Only abstinence has no risk. '
        + 'A full answer also says where accurate health advice can be '
        + 'got.',
      level: 3,
    },
    {
      id: 'adol-4',
      ask: 'Why is deciding in advance more effective than deciding in the '
        + 'moment?',
      kind: 'choice',
      options: [
        'The cost of refusing is highest in the moment',
        'There is more time to consult friends',
        'The consequences change over time',
      ],
      answer: 'The cost of refusing is highest in the moment',
      teach: 'The group is present and the reward is immediate. '
        + 'A decision already made only has to be stated.',
      level: 5,
    },
    {
      id: 'adol-5',
      ask: 'An analysis of teenage pregnancy should include:',
      kind: 'choice',
      options: [
        'both individual and structural causes',
        'individual causes only',
        'a moral judgement only',
      ],
      answer: 'both individual and structural causes',
      teach: 'Poverty, distance to school and absent support '
        + 'are part of the situation, '
        + 'and an answer that omits them is incomplete.',
      level: 5,
    },
  ],
})
