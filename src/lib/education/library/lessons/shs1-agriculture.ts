/**
 * Stored lessons for SHS 1 Elective Agriculture.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── How this differs from the General Science treatment ───────────────────
 *
 * General Science has one topic on soil and crop production, written so
 * that every learner can relate a soil to a crop. The Agriculture elective
 * takes the same ground further and adds the practice: identifying a soil
 * by a hand test, reading a deficiency from the leaf and its position on
 * the plant, giving the land preparation operations in order with a reason
 * for each and a spacing in metres, and matching a breed to a purpose and
 * to the local climate and disease pressure. So a learner taking both
 * subjects should read these as the working version.
 *
 * ── Figures and rates ────────────────────────────────────────────────────
 *
 * Spacings, seed rates and application rates are given in the units a
 * Ghanaian extension officer uses, because a learner who can only say that
 * maize should be spaced properly cannot plant a field. Where a figure
 * varies by variety or by region the lesson says so rather than giving one
 * number as though it were fixed.
 *
 * ── Equipment ────────────────────────────────────────────────────────────
 *
 * The hand texture test needs water and soil. The deficiency work needs a
 * growing crop, which any school with a plot has and any learner can find
 * in a nearby field. Nothing here needs a laboratory, and the lesson says
 * where a soil test would add something a hand test cannot.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── soil types and properties ────────────────────────────────────────── */

teach({
  topicId: 'soil-types-ag',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Texture is the proportions of sand, silt and clay, '
      + 'and it is fixed. '
      + 'Structure is how the particles are grouped into crumbs, '
      + 'and it can be improved. '
      + 'Texture decides drainage, water holding and workability. '
      + 'Identify it by the wet feel test: '
      + 'gritty means sand, smooth means silt, sticky means clay. '
      + 'Loam is the mixture, and it suits most crops.',
    method: [
      'Take a small handful and wet it until it just holds together.',
      'Rub it between the fingers and note gritty, smooth or sticky.',
      'Try to roll it into a thread, then into a ring.',
      'Name the texture from how far it will go.',
      'Match the texture to a crop by its water and root needs.',
    ],
  },

  idea:
    'Soil is made of mineral particles, organic matter, '
    + 'water, air and living organisms. '
    + 'The mineral particles are graded by size: '
    + 'sand is the largest, from 0.05 to 2 mm; '
    + 'silt is intermediate; '
    + 'clay is the smallest, below 0.002 mm. '
    + 'Texture is the proportion of each in a soil, '
    + 'and it cannot be changed by management '
    + 'because it depends on the parent material. '
    + 'Structure is the way the particles are held together '
    + 'into crumbs, blocks or plates, '
    + 'and it can be improved or destroyed by management. '
    + 'A good crumb structure allows air and water through '
    + 'and holds together when wet. '
    + 'Texture determines the behaviour of a soil. '
    + 'A sandy soil has large pores, '
    + 'so it drains fast, holds little water, '
    + 'warms early, '
    + 'is easy to work, '
    + 'and loses nutrients by leaching. '
    + 'A clay soil has very small pores, '
    + 'so it holds water tightly, drains slowly, '
    + 'warms late, '
    + 'is heavy to work when wet and hard when dry, '
    + 'and holds nutrients well. '
    + 'A loam has a mixture of all three '
    + 'and combines adequate drainage with adequate water holding. '
    + 'Soil colour gives information: '
    + 'dark usually means organic matter, '
    + 'red or brown means well drained and iron rich, '
    + 'grey or mottled often means waterlogging. '
    + 'Soil pH affects which nutrients a root can take up, '
    + 'and most crops do best between 6 and 7.',

  mechanism:
    'The one distinction a candidate must hold '
    + 'is texture against structure, '
    + 'because the examination tests it directly '
    + 'and the practical consequence is large. '
    + 'Texture is the particle sizes, '
    + 'and it is fixed by the rock the soil came from. '
    + 'Nothing a farmer does will turn a clay into a loam. '
    + 'Structure is how those particles are grouped, '
    + 'and it is entirely a matter of management. '
    + 'Adding organic matter builds crumbs. '
    + 'Ploughing a wet clay destroys them. '
    + 'Walking or driving on a field compacts them. '
    + 'So when a question asks how a farmer can improve a soil, '
    + 'the answer is always about structure, '
    + 'never about texture, '
    + 'and a candidate who writes about changing a clay soil to a loam '
    + 'has written something impossible. '
    + 'The right answer is that the clay stays clay '
    + 'and its structure is improved '
    + 'with organic matter and careful timing of cultivation, '
    + 'so that it behaves better without becoming a different soil. '
    + 'Second, the hand texture test, '
    + 'which is the practical skill in this topic '
    + 'and is examined as a procedure. '
    + 'Take a handful, '
    + 'remove stones and roots, '
    + 'and add water a little at a time '
    + 'until it just holds together without being slippery. '
    + 'Rub it between finger and thumb. '
    + 'Gritty means sand is dominant. '
    + 'Smooth and silky means silt. '
    + 'Sticky and plastic means clay. '
    + 'Then test how far it will be worked. '
    + 'A sandy soil will not form a ball at all. '
    + 'A sandy loam forms a ball that breaks when pressed. '
    + 'A loam rolls into a thick thread that breaks when bent. '
    + 'A clay loam rolls into a thinner thread '
    + 'and bends without breaking. '
    + 'A clay rolls into a thin thread '
    + 'and can be bent into a ring without cracking. '
    + 'So the test is a sequence of attempts, '
    + 'and the texture is named by how far the soil will go. '
    + 'That is the answer to the question '
    + 'how would you identify a soil in the field, '
    + 'and it needs nothing but water. '
    + 'Third, the matching of soil to crop, '
    + 'where candidates give a preference instead of a reason. '
    + 'Each match has a cause. '
    + 'Cassava and groundnut suit a light sandy loam '
    + 'because the swollen root and the pod must expand in the soil, '
    + 'and both rot in standing water. '
    + 'Rice suits a clay '
    + 'because the poor drainage holds the water a paddy needs. '
    + 'Maize suits a well drained loam '
    + 'because it needs steady moisture '
    + 'and will not tolerate waterlogging at the roots. '
    + 'Cocoa suits a deep forest soil '
    + 'because it is a tree '
    + 'and needs depth for its roots '
    + 'and reliable moisture through a long season. '
    + 'Vegetables suit a loam high in organic matter '
    + 'because they are shallow rooted '
    + 'and need both moisture and air near the surface. '
    + 'So a soil is not good or bad. '
    + 'It is suited or unsuited to a particular crop, '
    + 'and a candidate who grades soils from best to worst '
    + 'has misread the question. '
    + 'Fourth, the signs a farmer can read in the field, '
    + 'which are worth marks and cost nothing to learn. '
    + 'Water standing on the surface a day after rain '
    + 'means poor drainage, so a heavy soil or compaction. '
    + 'Deep cracks in the dry season mean a clay '
    + 'with a high proportion of swelling clay minerals. '
    + 'Grey or mottled colour below the surface means '
    + 'the soil is waterlogged for part of the year. '
    + 'A dark topsoil over a pale subsoil '
    + 'shows where the organic matter is '
    + 'and therefore how deep the farmer can afford to plough. '
    + 'Earthworms in quantity indicate '
    + 'organic matter and reasonable structure. '
    + 'Each of those is an observation with an inference attached, '
    + 'and that is the form the answer should take. '
    + 'Fifth, where a laboratory test adds something. '
    + 'The hand test gives texture. '
    + 'It cannot give pH, '
    + 'and it cannot give the quantity of available nitrogen, '
    + 'phosphorus or potassium. '
    + 'So a soil test is worth having '
    + 'before a large investment in fertiliser, '
    + 'because applying a nutrient the soil already has '
    + 'is money wasted '
    + 'and applying lime to a soil that is not acid '
    + 'can do harm. '
    + 'A learner should know what the test adds '
    + 'and should also know '
    + 'that the examinable interpretation is simple: '
    + 'below pH 5.5 lime, above 7.5 add organic matter or sulphur, '
    + 'and most crops want 6 to 7. '
    + 'What has to be written down, for any soil, '
    + 'is the texture named from a test, '
    + 'the behaviour that follows from it, '
    + 'and the crop that behaviour suits.',

  recap:
    'You know that some soils are sandy and some are heavy, '
    + 'and that manure helps. '
    + 'This identifies a soil by a test you can do with water, '
    + 'and separates what can be changed from what cannot.',

  method: [
    'Take a handful of soil and remove stones and roots.',
    'Wet it until it just holds together.',
    'Rub it: gritty means sand, smooth means silt, sticky means clay.',
    'Try to form a ball, then a thread, then a ring.',
    'Name the texture by how far it will go.',
    'State what that texture does with water and air.',
    'Match it to a crop by that crop water and root needs.',
    'Note that texture is fixed and structure can be improved.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Distinguish soil texture from soil structure, '
        + 'and say which a farmer can change.',
      steps: [
        'Texture is the particle sizes.',
        'Structure is how they are grouped.',
      ],
      answer: 'Texture is the proportion of sand, silt and clay, '
        + 'fixed by the parent material, '
        + 'and it cannot be changed by management. '
        + 'Structure is the way the particles are held together '
        + 'into crumbs or blocks, '
        + 'and it can be improved by adding organic matter '
        + 'or destroyed by ploughing wet or by compaction. '
        + 'So a farmer improves structure '
        + 'and cannot change texture, '
        + 'which is why an answer about turning a clay into a loam '
        + 'is wrong.',
    },
    {
      level: 4,
      ask: 'Describe the hand texture test as a procedure, '
        + 'and say what each result indicates.',
      steps: [
        'Wet, rub, then roll.',
        'How far it will go names the texture.',
      ],
      answer: 'Take a handful, remove stones and roots, '
        + 'and add water a little at a time '
        + 'until it just holds together without being slippery. '
        + 'Rub it between finger and thumb: '
        + 'gritty indicates sand, '
        + 'smooth and silky indicates silt, '
        + 'sticky and plastic indicates clay. '
        + 'Then try to work it. '
        + 'If it will not form a ball at all, it is a sand. '
        + 'If the ball breaks when pressed, a sandy loam. '
        + 'If it rolls into a thick thread that breaks when bent, '
        + 'a loam. '
        + 'If the thread bends without breaking, a clay loam. '
        + 'If a thin thread bends into a ring without cracking, '
        + 'a clay.',
    },
    {
      level: 4,
      ask: 'Match cassava, rice and vegetables to a soil, '
        + 'with a reason in each case.',
      steps: [
        'Each match follows from the crop requirement.',
      ],
      answer: 'Cassava suits a light sandy loam, '
        + 'because the swollen root must expand in the soil '
        + 'and will rot in standing water. '
        + 'Rice suits a clay, '
        + 'because the slow drainage holds the water a paddy needs, '
        + 'and the property that ruins cassava is the point for rice. '
        + 'Vegetables suit a loam high in organic matter, '
        + 'because they are shallow rooted '
        + 'and need both moisture and air near the surface. '
        + 'A soil is therefore suited or unsuited to a crop '
        + 'rather than good or bad in itself.',
    },
    {
      level: 5,
      ask: 'What can a farmer learn about a soil '
        + 'by looking at it in the field, '
        + 'and what still needs a laboratory?',
      steps: [
        'Several observations carry inferences.',
        'pH and nutrient quantities need a test.',
      ],
      answer: 'In the field: water standing a day after rain '
        + 'indicates poor drainage, '
        + 'so a heavy soil or compaction. '
        + 'Deep cracks in the dry season indicate a swelling clay. '
        + 'Grey or mottled colour below the surface '
        + 'indicates waterlogging for part of the year. '
        + 'A dark topsoil over a pale subsoil '
        + 'shows how deep the organic matter goes, '
        + 'and therefore how deeply it is safe to plough. '
        + 'Earthworms in quantity indicate organic matter '
        + 'and reasonable structure. '
        + 'What still needs a test is the pH '
        + 'and the quantity of available nitrogen, phosphorus '
        + 'and potassium, '
        + 'which matters before a large purchase of fertiliser, '
        + 'since applying a nutrient the soil already has '
        + 'is money wasted '
        + 'and liming a soil that is not acid can do harm.',
    },
  ],

  traps: [
    {
      mistake: 'Saying a farmer can change a clay soil into a loam.',
      why: 'Texture is fixed by the parent material. '
        + 'Only the structure can be improved.',
    },
    {
      mistake: 'Grading soils from best to worst.',
      why: 'A soil is suited or unsuited to a particular crop. '
        + 'Clay is right for rice and wrong for cassava.',
    },
    {
      mistake: 'Naming a texture without a test.',
      why: 'The hand test is the procedure: '
        + 'wet, rub, then roll, '
        + 'and the texture is named by how far it will go.',
    },
    {
      mistake: 'Treating a field observation as the whole diagnosis.',
      why: 'The eye gives texture, drainage and organic matter. '
        + 'pH and nutrient quantities need a soil test.',
    },
  ],

  extension:
    'Compaction is the structure problem that mechanisation created, '
    + 'and it is worth understanding because it is invisible. '
    + 'A tractor or a cultivator passing repeatedly at the same depth '
    + 'presses the soil just below the working depth '
    + 'into a hard layer called a plough pan. '
    + 'Above it the soil looks well worked. '
    + 'Below it the roots cannot pass, '
    + 'water cannot drain, '
    + 'and the crop behaves as though it were growing '
    + 'in a shallow pot. '
    + 'The diagnosis is to dig a pit and push a knife into the wall, '
    + 'feeling for the hard layer. '
    + 'The remedies are subsoiling to break it, '
    + 'varying the working depth between seasons, '
    + 'and keeping machinery off wet ground. '
    + 'Hand cultivation rarely produces a pan, '
    + 'which is one real advantage '
    + 'of the hoe over the plough on a small farm.',

  questions: [
    {
      id: 'st-1',
      ask: 'Which soil property can a farmer improve?',
      kind: 'choice',
      options: ['structure', 'texture', 'parent material'],
      answer: 'structure',
      teach: 'Texture is fixed by the parent material. '
        + 'Structure responds to organic matter and to cultivation.',
      level: 3,
    },
    {
      id: 'st-2',
      ask: 'A soil that rolls into a thin thread '
        + 'and bends into a ring without cracking is a:',
      kind: 'choice',
      options: ['clay', 'loam', 'sand'],
      answer: 'clay',
      teach: 'A loam thread breaks when bent, '
        + 'and a sand will not form a ball at all.',
      level: 4,
    },
    {
      id: 'st-3',
      ask: 'A sandy soil loses nutrients mainly by:',
      kind: 'choice',
      options: ['leaching', 'evaporation', 'wind'],
      answer: 'leaching',
      teach: 'Large pores drain fast, '
        + 'carrying dissolved nutrients below the root zone.',
      level: 4,
    },
    {
      id: 'st-4',
      ask: 'Grey or mottled colour below the surface indicates:',
      kind: 'choice',
      options: [
        'waterlogging for part of the year',
        'high organic matter',
        'good drainage',
      ],
      answer: 'waterlogging for part of the year',
      teach: 'Red or brown indicates good drainage, '
        + 'and dark colour indicates organic matter.',
      level: 4,
    },
    {
      id: 'st-5',
      ask: 'Most crops grow best at a soil pH between:',
      kind: 'choice',
      options: ['6 and 7', '4 and 5', '8 and 9'],
      answer: '6 and 7',
      teach: 'Below 5.5 apply lime; '
        + 'above 7.5 add organic matter or sulphur.',
      level: 3,
    },
  ],
})

/* ── soil fertility and nutrients ─────────────────────────────────────── */

teach({
  topicId: 'soil-fertility-ag',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Plants need nitrogen, phosphorus and potassium in quantity, '
      + 'and calcium, magnesium and sulphur in smaller amounts, '
      + 'with trace elements in very small amounts. '
      + 'Each deficiency has a visible sign, '
      + 'and the position of the sign on the plant '
      + 'is part of the diagnosis. '
      + 'A mobile nutrient shows on the old leaves, '
      + 'an immobile one on the new.',
    method: [
      'Look at the whole plant, not one leaf.',
      'Note whether the oldest or the newest leaves are affected.',
      'Note the pattern: whole leaf, between the veins, or at the '
        + 'edges.',
      'Match that pattern to a nutrient.',
      'Check the soil pH before concluding the nutrient is absent.',
    ],
  },

  idea:
    'Soil fertility is the capacity of a soil '
    + 'to supply the nutrients a crop needs, '
    + 'in the right amounts and in a form the roots can take up. '
    + 'Plants need sixteen or so elements. '
    + 'Carbon, hydrogen and oxygen come from air and water. '
    + 'The macronutrients come from the soil in quantity. '
    + 'Nitrogen is needed for chlorophyll and protein, '
    + 'and therefore for leaf and stem growth. '
    + 'Phosphorus is needed for root development, '
    + 'flowering and seed formation, '
    + 'and for energy transfer within the plant. '
    + 'Potassium is needed for the movement of sugars, '
    + 'for water regulation, '
    + 'and for resistance to disease and lodging. '
    + 'The secondary nutrients are calcium, magnesium and sulphur. '
    + 'The micronutrients, needed in very small amounts, '
    + 'include iron, zinc, boron, manganese, copper and molybdenum. '
    + 'Nutrients differ in mobility within the plant. '
    + 'Nitrogen, phosphorus, potassium and magnesium are mobile, '
    + 'so the plant can move them from old leaves to new ones. '
    + 'Calcium, iron, boron and zinc are immobile '
    + 'and cannot be moved once deposited. '
    + 'Soil pH changes availability: '
    + 'phosphorus becomes unavailable in strongly acid '
    + 'and strongly alkaline soils, '
    + 'and iron, zinc and manganese become unavailable '
    + 'as the soil becomes alkaline. '
    + 'Fertility is maintained by organic matter, '
    + 'by fertiliser, '
    + 'by legumes in rotation that fix nitrogen, '
    + 'and by fallowing.',

  mechanism:
    'Reading a deficiency from a plant '
    + 'is a diagnosis, and it follows one rule '
    + 'that candidates are rarely taught '
    + 'and that answers most of the questions in the topic: '
    + 'a mobile nutrient shows its deficiency on the old leaves, '
    + 'and an immobile one on the new leaves. '
    + 'The reason is simple and worth stating. '
    + 'When nitrogen runs short, '
    + 'the plant moves what it has '
    + 'out of the older leaves and into the growing points, '
    + 'because the new growth is what matters for survival. '
    + 'So the old leaves go pale first '
    + 'while the new ones stay green for a while. '
    + 'Calcium cannot be moved once it is laid down in a cell wall. '
    + 'So when calcium runs short '
    + 'the old leaves keep what they already have '
    + 'and the new growth is deformed or dies. '
    + 'From that one rule a learner can halve the field of answers '
    + 'before looking at any other symptom: '
    + 'bottom leaves affected means a mobile nutrient, '
    + 'so nitrogen, potassium or magnesium; '
    + 'growing points affected means an immobile one, '
    + 'so calcium, boron, iron or zinc. '
    + 'That is the single most useful thing in this lesson. '
    + 'Second, the pattern on the leaf, '
    + 'which narrows it further. '
    + 'Nitrogen: the whole older leaf pales uniformly, '
    + 'from the tip back, '
    + 'and the plant is stunted and spindly. '
    + 'Phosphorus: the plant is stunted '
    + 'with dark green or purplish older leaves, '
    + 'poor roots and delayed maturity, '
    + 'and the purpling is the distinctive sign. '
    + 'Potassium: the older leaves scorch and dry at the margins '
    + 'and at the tips, '
    + 'while the centre stays green, '
    + 'and stems are weak so the crop lodges. '
    + 'Magnesium: the older leaves yellow between the veins '
    + 'while the veins themselves stay green, '
    + 'which is called interveinal chlorosis. '
    + 'Iron: the same interveinal yellowing '
    + 'but on the young leaves, '
    + 'because iron is immobile. '
    + 'So magnesium and iron produce the same pattern '
    + 'and are distinguished only by which leaves show it, '
    + 'which is exactly why the mobility rule is needed. '
    + 'A question showing interveinal chlorosis '
    + 'and asking for the nutrient '
    + 'cannot be answered without it. '
    + 'Third, the trap that catches candidates '
    + 'who have learned the symptoms properly. '
    + 'A deficiency symptom does not prove the nutrient is absent '
    + 'from the soil. '
    + 'It proves the plant is not getting it, '
    + 'and that can happen for three reasons. '
    + 'The nutrient may be absent. '
    + 'The pH may have made it unavailable, '
    + 'which is why phosphorus deficiency is common '
    + 'in strongly acid soils that contain plenty of phosphorus. '
    + 'Or the roots may be unable to work, '
    + 'as in waterlogged soil where there is no oxygen '
    + 'for the active transport of ions. '
    + 'So the correct response to a deficiency symptom '
    + 'is not automatically to apply that nutrient. '
    + 'Check the pH and the drainage first. '
    + 'Applying phosphate to an acid soil without liming it '
    + 'wastes the phosphate, '
    + 'because it will be locked up as fast as it is applied. '
    + 'A candidate who writes that sentence '
    + 'has understood fertility rather than memorised symptoms, '
    + 'and it is the top band answer. '
    + 'Fourth, maintaining fertility, '
    + 'which the examination asks about as a comparison. '
    + 'Fertiliser supplies nutrients in a known quantity, '
    + 'acts quickly, '
    + 'is easy to transport, '
    + 'and adds no organic matter at all, '
    + 'so it feeds the crop and not the soil. '
    + 'Organic manure supplies nutrients slowly and in unknown '
    + 'quantity, '
    + 'is bulky and heavy to move, '
    + 'and adds organic matter, '
    + 'which improves structure and water holding '
    + 'and feeds the soil organisms. '
    + 'So the honest answer is that they do different jobs '
    + 'and the best practice uses both: '
    + 'manure for the soil and fertiliser for the crop. '
    + 'A learner who says only that manure is better, '
    + 'or only that fertiliser is better, '
    + 'has answered half the question. '
    + 'Fifth, the legume, '
    + 'which is the cheapest fertility measure available '
    + 'and should be named precisely. '
    + 'Legumes such as cowpea, groundnut and soya bean '
    + 'carry bacteria in nodules on their roots '
    + 'that fix nitrogen from the air into a form the plant can use, '
    + 'and some of it remains in the soil '
    + 'when the residues are left and ploughed in. '
    + 'That last clause matters: '
    + 'if the whole plant is harvested and removed, '
    + 'much less nitrogen stays behind. '
    + 'So the benefit depends on the residues being returned, '
    + 'and saying so is worth a mark. '
    + 'What has to be written down, for any deficiency, '
    + 'is which leaves are affected, '
    + 'the pattern on them, '
    + 'the nutrient, '
    + 'and the check on pH and drainage before treating it.',

  recap:
    'You know that plants need nutrients '
    + 'and that NPK supplies three of them. '
    + 'This reads a shortage from the plant itself, '
    + 'and asks why the plant is not getting the nutrient.',

  method: [
    'Look at the whole plant.',
    'Note whether the oldest or the newest leaves show the symptom.',
    'Old leaves means a mobile nutrient; new leaves means an immobile '
      + 'one.',
    'Note the pattern: uniform paling, purpling, '
      + 'edge scorch, or yellowing between the veins.',
    'Name the nutrient from the two pieces of information together.',
    'Before treating, check the soil pH and the drainage.',
    'Choose manure to feed the soil and fertiliser to feed the crop.',
    'For a legume benefit, return the residues to the soil.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the three macronutrients and one function of each.',
      steps: [
        'Nitrogen, phosphorus, potassium.',
      ],
      answer: 'Nitrogen is needed for chlorophyll and protein, '
        + 'and therefore for leaf and stem growth. '
        + 'Phosphorus is needed for root development, '
        + 'flowering and seed formation. '
        + 'Potassium is needed for moving sugars within the plant, '
        + 'for water regulation, '
        + 'and for strength and disease resistance.',
    },
    {
      level: 4,
      ask: 'A maize plant shows yellowing between the veins, '
        + 'with the veins still green. '
        + 'Name two possible nutrients '
        + 'and say how you would tell which it is.',
      steps: [
        'Interveinal chlorosis fits magnesium and iron.',
        'Magnesium is mobile; iron is not.',
        'So the position on the plant decides.',
      ],
      answer: 'Magnesium or iron, '
        + 'since both produce yellowing between the veins '
        + 'with the veins remaining green. '
        + 'They are distinguished by which leaves are affected. '
        + 'Magnesium is mobile within the plant, '
        + 'so the plant moves it from the old leaves to the new, '
        + 'and the symptom appears on the older lower leaves. '
        + 'Iron is immobile and cannot be moved once deposited, '
        + 'so its deficiency appears on the young upper leaves. '
        + 'Looking at the position on the plant '
        + 'therefore settles it, '
        + 'and that is why the mobility rule matters.',
    },
    {
      level: 4,
      ask: 'Compare fertiliser with organic manure.',
      steps: [
        'Fertiliser: known quantity, fast, no organic matter.',
        'Manure: slow, bulky, adds organic matter.',
      ],
      answer: 'Fertiliser supplies nutrients in a known quantity, '
        + 'acts quickly, '
        + 'and is easy to transport, '
        + 'but it adds no organic matter, '
        + 'so it feeds the crop and not the soil. '
        + 'Organic manure releases nutrients slowly '
        + 'and in an unknown quantity, '
        + 'and it is bulky and heavy to move, '
        + 'but it adds organic matter, '
        + 'which improves structure and water holding '
        + 'and feeds the soil organisms. '
        + 'They do different jobs, '
        + 'so good practice uses both: '
        + 'manure to feed the soil and fertiliser to feed the crop.',
    },
    {
      level: 5,
      ask: 'A soil test shows plenty of phosphorus, '
        + 'and the crop shows phosphorus deficiency. '
        + 'Explain, and say what you would do.',
      steps: [
        'A symptom shows the plant is not getting the nutrient.',
        'pH can make phosphorus unavailable.',
        'So correct the pH rather than adding more phosphate.',
      ],
      answer: 'Because a deficiency symptom shows '
        + 'that the plant is not getting the nutrient, '
        + 'not that the nutrient is absent. '
        + 'In a strongly acid soil phosphorus is locked up '
        + 'in forms the roots cannot take up, '
        + 'so a soil may contain plenty '
        + 'and the crop still starve. '
        + 'Waterlogging produces the same result by another route, '
        + 'since without oxygen the roots cannot carry out '
        + 'the active transport of ions. '
        + 'So the first step is to test the pH '
        + 'and check the drainage. '
        + 'If the soil is acid, apply lime, '
        + 'which will release the phosphorus already present. '
        + 'Adding more phosphate without liming '
        + 'wastes it, '
        + 'because it will be locked up as fast as it is applied.',
    },
  ],

  traps: [
    {
      mistake: 'Naming a nutrient without saying which leaves are '
        + 'affected.',
      why: 'Magnesium and iron give the same pattern. '
        + 'Only the position on the plant distinguishes them.',
    },
    {
      mistake: 'Concluding from a symptom that the nutrient is absent.',
      why: 'It may be present and unavailable because of pH, '
        + 'or the roots may be unable to work because of waterlogging.',
    },
    {
      mistake: 'Saying manure is simply better than fertiliser.',
      why: 'They do different jobs. '
        + 'Manure feeds the soil and fertiliser feeds the crop.',
    },
    {
      mistake: 'Claiming a legume adds nitrogen whatever is done with '
        + 'it.',
      why: 'The benefit depends on the residues being returned. '
        + 'If the whole plant is removed, much less remains.',
    },
  ],

  extension:
    'The law of the minimum explains a puzzle. '
    + 'Why does adding more of a nutrient sometimes do nothing? '
    + 'A crop yield is limited by one nutrient at a time: '
    + 'whichever is in shortest supply relative to need. '
    + 'Add any of the others and nothing changes '
    + 'until that one is corrected. '
    + 'So a farmer may apply nitrogen year after year '
    + 'to a soil short of phosphorus. '
    + 'He sees no gain, '
    + 'and concludes that fertiliser does not work. '
    + 'This is the limiting factor idea from photosynthesis. '
    + 'It has the same practical lesson. '
    + 'Find out what is actually short before spending money. '
    + 'That is the argument for soil testing '
    + 'on a farm large enough to be worth the cost, '
    + 'and for a trial strip on a farm that is not.',

  questions: [
    {
      id: 'sf-1',
      ask: 'Pale yellow older leaves with stunted growth indicate a '
        + 'shortage of:',
      kind: 'choice',
      options: ['nitrogen', 'potassium', 'calcium'],
      answer: 'nitrogen',
      teach: 'Nitrogen is mobile, '
        + 'so the plant moves it to the new growth '
        + 'and the old leaves pale first.',
      level: 3,
    },
    {
      id: 'sf-2',
      ask: 'Scorching at the margins of older leaves indicates:',
      kind: 'choice',
      options: ['potassium', 'nitrogen', 'iron'],
      answer: 'potassium',
      teach: 'The centre stays green and the stems are weak, '
        + 'so the crop lodges.',
      level: 4,
    },
    {
      id: 'sf-3',
      ask: 'A deficiency showing on the newest leaves '
        + 'indicates a nutrient that is:',
      kind: 'choice',
      options: ['immobile in the plant', 'mobile in the plant', 'absent '
        + 'from the soil'],
      answer: 'immobile in the plant',
      teach: 'It cannot be moved from the old leaves, '
        + 'so the new growth suffers first. '
        + 'Calcium, iron, boron and zinc behave this way.',
      level: 5,
    },
    {
      id: 'sf-4',
      ask: 'Phosphorus can be present in a soil and still unavailable '
        + 'because of:',
      kind: 'choice',
      options: ['pH', 'texture', 'colour'],
      answer: 'pH',
      teach: 'In strongly acid or strongly alkaline soils '
        + 'it is locked into forms the roots cannot take up.',
      level: 5,
    },
    {
      id: 'sf-5',
      ask: 'The nitrogen benefit of a legume depends on:',
      kind: 'choice',
      options: [
        'the residues being returned to the soil',
        'the crop being harvested early',
        'the soil being sandy',
      ],
      answer: 'the residues being returned to the soil',
      teach: 'If the whole plant is removed, '
        + 'much less nitrogen stays behind.',
      level: 4,
    },
  ],
})

/* ── land preparation and planting ────────────────────────────────────── */

teach({
  topicId: 'crop-establishment',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The operations run in order: '
      + 'clear, stump where necessary, plough, harrow, '
      + 'ridge or make beds, then plant. '
      + 'Each one has a purpose, '
      + 'and doing them out of order wastes the work. '
      + 'Spacing is set by the size the mature plant will reach '
      + 'and decides the plant population per hectare. '
      + 'Depth of sowing is set by the size of the seed.',
    method: [
      'Clear the land and decide what to do with the trash.',
      'Plough to the depth the crop roots need.',
      'Harrow to break clods and level the surface.',
      'Ridge or make beds where drainage or the crop requires it.',
      'Mark out the spacing before planting, and sow at the right '
        + 'depth.',
    ],
  },

  idea:
    'Land preparation is the sequence of operations '
    + 'that puts a field in a state to receive seed. '
    + 'Clearing removes the existing vegetation. '
    + 'Trash may be burned, which is quick '
    + 'and destroys organic matter and kills soil organisms, '
    + 'or slashed and left as a mulch, '
    + 'which conserves moisture and adds organic matter '
    + 'but takes longer and can harbour pests. '
    + 'Stumping removes tree stumps '
    + 'where machinery will be used. '
    + 'Ploughing, by tractor, by bullock or by hoe, '
    + 'loosens the soil to the depth the roots will need, '
    + 'buries weeds and trash, '
    + 'and allows water and air to enter. '
    + 'Harrowing breaks the clods left by ploughing '
    + 'and levels the surface, '
    + 'producing a tilth fine enough for small seeds '
    + 'to make contact with the soil. '
    + 'Ridging heaps soil into ridges, '
    + 'which improves drainage, '
    + 'gives depth for root and tuber crops, '
    + 'and makes weeding easier. '
    + 'Beds are raised flat areas used for vegetables. '
    + 'Planting may be by seed sown direct, '
    + 'by seedlings raised in a nursery and transplanted, '
    + 'or by vegetative material such as cassava cuttings '
    + 'or plantain suckers. '
    + 'Spacing is the distance between rows '
    + 'and between plants within a row. '
    + 'Common Ghanaian spacings are '
    + '80 cm by 40 cm for maize with two seeds per hole, '
    + 'or 80 by 25 with one, '
    + 'giving about 60000 plants per hectare; '
    + 'about 1 m by 1 m for cassava; '
    + 'and 60 by 20 cm for groundnut. '
    + 'Sowing depth is about two to three times the seed diameter.',

  mechanism:
    'The reason the operations have an order '
    + 'is that each one prepares for the next, '
    + 'and a candidate who can say what each prepares for '
    + 'has answered the standard question. '
    + 'Clearing comes first because you cannot plough standing bush. '
    + 'Ploughing comes before harrowing '
    + 'because harrowing breaks the clods that ploughing makes, '
    + 'and harrowing unploughed ground does nothing. '
    + 'Ridging comes after harrowing '
    + 'because a ridge built from cloddy soil collapses. '
    + 'And planting comes last '
    + 'because every earlier operation would destroy the seed. '
    + 'So the order is not a convention: '
    + 'each step is impossible or useless '
    + 'until the one before it is done. '
    + 'Stating that is worth more than listing the steps. '
    + 'Second, the burning question, '
    + 'which is examined because it is genuinely argued about. '
    + 'Burning is quick, it clears completely, '
    + 'it kills some pests and weed seeds, '
    + 'and the ash supplies a little potassium '
    + 'and raises the pH slightly. '
    + 'Against that, it destroys the organic matter '
    + 'that would have become humus, '
    + 'it kills the soil organisms in the top layer, '
    + 'it leaves the surface bare and so exposed to erosion '
    + 'until the crop covers it, '
    + 'and the nitrogen in the vegetation is lost to the air. '
    + 'So the honest answer is that burning buys labour '
    + 'and spends soil, '
    + 'which is a reasonable trade for a farmer '
    + 'short of labour and time '
    + 'and a poor one on a field that is already losing structure. '
    + 'A candidate who gives both sides and then takes a position '
    + 'is answering the question as set. '
    + 'Third, spacing, '
    + 'where the examination wants a number and a reason. '
    + 'The reason is competition. '
    + 'Plants too close compete for light, water and nutrients, '
    + 'so each one yields less, '
    + 'and in maize the cobs are small or absent. '
    + 'Plants too far apart leave ground uncovered, '
    + 'so light falls on bare soil and is wasted, '
    + 'weeds grow in the gaps, '
    + 'and the yield per hectare is below what the land could give. '
    + 'So there is an optimum, '
    + 'and it depends on the size the mature plant reaches: '
    + 'cassava is spaced about a metre each way '
    + 'because the plant is large, '
    + 'and groundnut at 60 by 20 cm '
    + 'because it is small. '
    + 'The calculation that follows is examinable '
    + 'and candidates get it wrong. '
    + 'Plant population per hectare '
    + 'is 10000 square metres divided by the area each plant occupies. '
    + 'At 80 cm by 40 cm, '
    + 'each stand occupies 0.8 times 0.4, which is 0.32 square metres, '
    + 'so there are about 31250 stands per hectare, '
    + 'and with two seeds per hole that is about 62500 plants. '
    + 'The error is to forget to convert centimetres to metres, '
    + 'which gives an answer out by a factor of ten thousand. '
    + 'Convert first, on its own line. '
    + 'Fourth, sowing depth, '
    + 'which has a rule and a reason. '
    + 'The rule is two to three times the diameter of the seed. '
    + 'The reason is that a seed has a fixed food store, '
    + 'and the shoot must reach the light before it is used up. '
    + 'A large seed such as maize has a large store '
    + 'and can be sown deeper, about 5 cm. '
    + 'A small seed such as a vegetable seed '
    + 'has almost none '
    + 'and must be barely covered, '
    + 'or it exhausts itself underground and never emerges. '
    + 'Too shallow is also a fault: '
    + 'the seed dries out, or is eaten by birds, '
    + 'or germinates and the roots cannot anchor. '
    + 'So depth is a balance, '
    + 'and the seed size is the guide. '
    + 'Fifth, why transplanting at all, '
    + 'which is a question candidates answer vaguely. '
    + 'A nursery lets a farmer raise seedlings '
    + 'on a small area that can be watered, shaded and protected, '
    + 'which is impossible across a whole field. '
    + 'It lets weak seedlings be discarded, '
    + 'so only strong plants occupy the field. '
    + 'It saves seed, '
    + 'because germination can be managed. '
    + 'And it shortens the time the main field is occupied, '
    + 'which matters where two crops a year are wanted. '
    + 'The cost is the labour of transplanting '
    + 'and the check to growth the seedling suffers, '
    + 'which is why transplanting is done '
    + 'in the evening or on a dull day, '
    + 'and watered immediately. '
    + 'What has to be written down, '
    + 'for every operation in a land preparation answer, '
    + 'is the purpose it serves, '
    + 'and for every spacing a figure and the reason for it.',

  recap:
    'You know that land is cleared and ploughed before planting. '
    + 'This gives the operations in order with the reason for each, '
    + 'and the spacings that decide how many plants a hectare carries.',

  method: [
    'Clear the vegetation and decide between burning and mulching.',
    'Stump if machinery is to be used.',
    'Plough to the depth the crop roots need.',
    'Harrow to break clods and make a tilth.',
    'Ridge or make beds if drainage or the crop requires it.',
    'Mark out the spacing before planting.',
    'Sow at two to three times the seed diameter.',
    'Calculate plant population by dividing 10000 by the area per '
      + 'stand.',
    'Convert centimetres to metres before calculating.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give the operations of land preparation in order, '
        + 'with the purpose of each.',
      steps: [
        'Each step prepares for the next.',
      ],
      answer: 'Clearing removes the vegetation, '
        + 'because standing bush cannot be ploughed. '
        + 'Stumping removes stumps where machinery will work. '
        + 'Ploughing loosens the soil to root depth, '
        + 'buries weeds and trash, '
        + 'and lets in air and water. '
        + 'Harrowing breaks the clods that ploughing made '
        + 'and levels the surface to a tilth. '
        + 'Ridging improves drainage, '
        + 'gives depth for roots and tubers, '
        + 'and eases weeding. '
        + 'Planting comes last, '
        + 'because every earlier operation would destroy the seed.',
    },
    {
      level: 4,
      ask: 'Discuss burning the cleared vegetation.',
      steps: [
        'For: quick, clears fully, kills pests, ash gives potassium.',
        'Against: destroys organic matter and organisms, '
          + 'exposes soil, loses nitrogen.',
      ],
      answer: 'In favour: it is quick and clears the land completely, '
        + 'it kills some pests and weed seeds, '
        + 'and the ash supplies a little potassium '
        + 'and raises the pH slightly. '
        + 'Against: it destroys the organic matter '
        + 'that would have become humus, '
        + 'kills the soil organisms in the top layer, '
        + 'leaves the surface bare and exposed to erosion '
        + 'until the crop covers it, '
        + 'and loses the nitrogen in the vegetation to the air. '
        + 'So burning buys labour and spends soil. '
        + 'That is a reasonable trade for a farmer short of labour '
        + 'and a poor one on land already losing structure.',
    },
    {
      level: 4,
      ask: 'Maize is planted at 80 cm by 40 cm '
        + 'with two seeds per hole. '
        + 'Find the number of stands and of plants per hectare.',
      steps: [
        'Convert to metres: 0.8 by 0.4.',
        'Area per stand is 0.32 square metres.',
        'A hectare is 10000 square metres.',
        '10000 divided by 0.32.',
      ],
      answer: 'Each stand occupies 0.8 times 0.4, '
        + 'which is 0.32 square metres. '
        + 'A hectare is 10000 square metres, '
        + 'so 10000 divided by 0.32 gives about 31250 stands. '
        + 'With two seeds per hole that is about 62500 plants per '
        + 'hectare. '
        + 'The usual error is to forget to convert '
        + 'the centimetres to metres, '
        + 'which puts the answer out by a factor of ten thousand.',
    },
    {
      level: 5,
      ask: 'Why is a small vegetable seed barely covered '
        + 'while maize is sown about 5 cm deep?',
      steps: [
        'A seed has a fixed food store.',
        'The shoot must reach light before it is used up.',
        'A small seed has almost no store.',
      ],
      answer: 'Because a seed carries a fixed food store, '
        + 'and the shoot must reach the light '
        + 'and begin photosynthesising '
        + 'before that store is exhausted. '
        + 'Maize has a large seed with a large store, '
        + 'so it can push up through 5 cm of soil. '
        + 'A small vegetable seed has almost no store, '
        + 'so sown deep it exhausts itself underground '
        + 'and never emerges. '
        + 'The rule is two to three times the seed diameter. '
        + 'Too shallow is also a fault, '
        + 'since the seed may dry out, be eaten by birds, '
        + 'or germinate without anchoring, '
        + 'so the depth is a balance '
        + 'with the seed size as the guide.',
    },
  ],

  traps: [
    {
      mistake: 'Listing the operations without their purposes.',
      why: 'The marks are for the reason. '
        + 'Each step is useless until the one before it is done.',
    },
    {
      mistake: 'Treating burning as simply bad or simply convenient.',
      why: 'It buys labour and spends soil. '
        + 'Give both sides, then take a position.',
    },
    {
      mistake: 'Calculating plant population from centimetres.',
      why: 'Convert to metres first. '
        + 'A hectare is 10000 square metres, '
        + 'and the error is a factor of ten thousand.',
    },
    {
      mistake: 'Sowing a small seed at the depth suited to maize.',
      why: 'A small seed has almost no food store '
        + 'and exhausts itself before reaching the light.',
    },
  ],

  extension:
    'Minimum tillage reverses an old assumption. '
    + 'A field need not be thoroughly worked before planting. '
    + 'The previous crop residues are left on the surface. '
    + 'Weeds are controlled without turning the soil. '
    + 'Seed is placed in a slot or a hole. '
    + 'The arguments for it are real. '
    + 'The residues shield the surface from erosion '
    + 'and reduce evaporation. '
    + 'The structure is not broken up each season. '
    + 'Organic matter builds up. '
    + 'And the labour of ploughing is saved. '
    + 'The arguments against are real too. '
    + 'Weed control is harder and may need herbicide. '
    + 'The soil warms more slowly under a mulch. '
    + 'And some pests shelter in the residues. '
    + 'So it is a genuine choice, not an improvement. '
    + 'Parts of Ghana are adopting it, '
    + 'above all where erosion is the pressing problem.',

  questions: [
    {
      id: 'ce-1',
      ask: 'Harrowing follows ploughing because it:',
      kind: 'choice',
      options: [
        'breaks the clods that ploughing made',
        'buries the weeds',
        'makes the ridges',
      ],
      answer: 'breaks the clods that ploughing made',
      teach: 'Harrowing unploughed ground does nothing. '
        + 'Each operation prepares for the next.',
      level: 3,
    },
    {
      id: 'ce-2',
      ask: 'Burning cleared vegetation loses which nutrient to the air?',
      kind: 'choice',
      options: ['nitrogen', 'potassium', 'calcium'],
      answer: 'nitrogen',
      teach: 'The ash retains some potassium. '
        + 'The nitrogen in the vegetation is lost.',
      level: 4,
    },
    {
      id: 'ce-3',
      ask: 'Maize at 80 cm by 40 cm gives about how many stands per '
        + 'hectare?',
      kind: 'numeric',
      options: [],
      answer: '31250',
      teach: '10000 divided by 0.32 square metres per stand. '
        + 'Convert the centimetres to metres first.',
      level: 5,
    },
    {
      id: 'ce-4',
      ask: 'Sowing depth should be about how many times the seed '
        + 'diameter?',
      kind: 'choice',
      options: ['two to three', 'ten', 'half'],
      answer: 'two to three',
      teach: 'The shoot must reach light before the seed food store '
        + 'runs out.',
      level: 4,
    },
    {
      id: 'ce-5',
      ask: 'Plants spaced too far apart reduce yield per hectare '
        + 'because:',
      kind: 'choice',
      options: [
        'light falls on bare soil and weeds fill the gaps',
        'the plants compete for water',
        'the soil becomes compacted',
      ],
      answer: 'light falls on bare soil and weeds fill the gaps',
      teach: 'Too close is competition; too far apart is waste. '
        + 'There is an optimum set by the mature plant size.',
      level: 4,
    },
  ],
})

/* ── farm animals and their uses ──────────────────────────────────────── */

teach({
  topicId: 'livestock-types-ag',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A species is chosen for a purpose '
      + 'and a breed is chosen for the conditions. '
      + 'Cattle give meat, milk and draught; '
      + 'sheep and goats meat and some milk; '
      + 'pigs meat; '
      + 'poultry eggs and meat. '
      + 'In Ghana the decisive local conditions '
      + 'are heat, feed availability '
      + 'and disease, '
      + 'particularly trypanosomiasis in the forest zone.',
    method: [
      'State the purpose: meat, milk, eggs, draught, or more than one.',
      'Choose the species that serves it.',
      'State the local conditions: climate, feed, disease, market.',
      'Choose a breed that tolerates those conditions.',
      'Say what the choice gives up.',
    ],
  },

  idea:
    'Livestock are kept for identifiable products and services. '
    + 'Cattle provide beef, milk, hides, manure '
    + 'and draught power for ploughing and carting. '
    + 'Sheep and goats provide meat, skins, manure '
    + 'and some milk, '
    + 'and are kept widely because they need less feed '
    + 'and less capital than cattle. '
    + 'Pigs provide pork '
    + 'and convert feed to meat efficiently. '
    + 'Poultry provide eggs and meat, '
    + 'with the fastest return on investment of any livestock. '
    + 'Rabbits and grasscutters are kept for meat on a small scale. '
    + 'Within a species, breeds differ. '
    + 'Among cattle, the indigenous West African Shorthorn '
    + 'and the Ghana Sanga are small, hardy '
    + 'and tolerant of trypanosomiasis, '
    + 'while the Sanga and the Zebu are larger '
    + 'and suited to the drier north. '
    + 'Exotic dairy breeds such as the Friesian '
    + 'give far more milk and suffer badly in heat '
    + 'and from local disease, '
    + 'so crosses are used. '
    + 'Among poultry, layers such as the Lohmann '
    + 'are bred for eggs, '
    + 'broilers for rapid meat growth, '
    + 'and local fowl are hardy, '
    + 'scavenge their own feed '
    + 'and lay far fewer eggs. '
    + 'Systems of keeping range from extensive, '
    + 'where animals range and scavenge, '
    + 'through semi intensive, '
    + 'to intensive, where animals are housed and fully fed. '
    + 'Trypanosomiasis, carried by the tsetse fly, '
    + 'limits cattle keeping in the forest zone, '
    + 'which is why most Ghanaian cattle are in the north.',

  mechanism:
    'The question in this topic is always a matching question, '
    + 'and it has two halves that candidates run together. '
    + 'The species is chosen for the purpose. '
    + 'The breed is chosen for the conditions. '
    + 'So if a farmer wants eggs, the species is poultry, '
    + 'and that part is easy. '
    + 'Which poultry is the harder question, '
    + 'and it is answered from the conditions: '
    + 'can he buy feed reliably, '
    + 'can he house the birds, '
    + 'can he reach a market for a large volume of eggs, '
    + 'and can he get veterinary advice and vaccines? '
    + 'If yes, an improved layer strain '
    + 'will give over 250 eggs a year '
    + 'and earn its feed. '
    + 'If no, the same bird will die or lay badly, '
    + 'and a local fowl laying perhaps 60 eggs a year '
    + 'but scavenging its own feed '
    + 'and resisting disease '
    + 'will earn more than the improved bird that failed. '
    + 'So the answer to which breed '
    + 'is not the breed with the best figures. '
    + 'It is the breed whose requirements the farmer can meet, '
    + 'and a candidate who says that '
    + 'has understood the topic. '
    + 'Second, the trade off, '
    + 'which has to be named in every answer. '
    + 'An improved breed gives more product '
    + 'and demands more: '
    + 'better feed, housing, water, '
    + 'veterinary care and management. '
    + 'An indigenous breed gives less '
    + 'and tolerates more: '
    + 'heat, poor feed, walking long distances, '
    + 'and local disease. '
    + 'Neither is better in general. '
    + 'The crossbred animal is the usual compromise, '
    + 'combining some of the yield of the exotic parent '
    + 'with some of the hardiness of the local one, '
    + 'and it is the standard recommendation '
    + 'for a farmer who can improve management partly but not fully. '
    + 'Third, trypanosomiasis, '
    + 'which explains the map of Ghanaian livestock '
    + 'and is therefore worth knowing properly. '
    + 'The tsetse fly lives in the forest and in riverine bush, '
    + 'and it carries a parasite '
    + 'that causes trypanosomiasis in cattle, '
    + 'which is usually fatal to an exotic animal. '
    + 'Indigenous West African breeds have a degree of tolerance, '
    + 'called trypanotolerance, '
    + 'which lets them survive where others cannot. '
    + 'So cattle keeping is concentrated in the north, '
    + 'where the tsetse pressure is lower, '
    + 'and in the forest zone the livestock are mostly '
    + 'small ruminants and poultry. '
    + 'That is a biological fact producing an economic pattern, '
    + 'and a candidate who explains the distribution that way '
    + 'is doing better than one who merely states it. '
    + 'Fourth, why small ruminants are so widely kept, '
    + 'which the examination asks about '
    + 'and which has a clear answer. '
    + 'A goat costs a fraction of what a cow costs, '
    + 'so the capital needed is small '
    + 'and a loss is survivable. '
    + 'It eats browse and crop residues '
    + 'that nothing else will use. '
    + 'It breeds young and often, '
    + 'so a flock rebuilds quickly after a loss. '
    + 'It can be sold in small units '
    + 'when cash is needed, '
    + 'which a cow cannot. '
    + 'And it needs no special housing. '
    + 'So goats and sheep function as savings '
    + 'as well as as meat, '
    + 'which is why they are kept by households '
    + 'that are not primarily livestock farmers at all. '
    + 'Fifth, poultry and the speed of return, '
    + 'which decides who can afford to start. '
    + 'A broiler reaches market weight in about six to eight weeks. '
    + 'A layer begins laying at about five months. '
    + 'A goat is ready for sale in about a year. '
    + 'A cow takes two to three years. '
    + 'So the capital tied up and the time before any income '
    + 'rise together, '
    + 'which is why a young farmer with little money '
    + 'starts with poultry '
    + 'and not with cattle, '
    + 'and that reasoning is a strong answer '
    + 'to a question about choosing an enterprise. '
    + 'What has to be written down '
    + 'is the purpose, the species, the conditions, the breed, '
    + 'and what the choice gives up.',

  recap:
    'You know that farmers keep cattle, goats and chickens. '
    + 'This asks which animal for which purpose, '
    + 'and which breed for the place it will be kept.',

  method: [
    'State the purpose the farmer wants served.',
    'Choose the species that serves it.',
    'List the local conditions: heat, feed, water, disease, market.',
    'Ask what management the farmer can actually provide.',
    'Choose the breed whose requirements can be met.',
    'Name what the choice gives up.',
    'Consider a cross where management is partly improved.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name four products or services obtained from cattle.',
      steps: [
        'More than meat.',
      ],
      answer: 'Beef, milk, hides and draught power for ploughing '
        + 'and carting, '
        + 'with manure as a fifth, '
        + 'which is valuable where fertiliser is expensive.',
    },
    {
      level: 4,
      ask: 'A farmer with no reliable feed supply, no housing '
        + 'and no vet wants eggs. '
        + 'Which breed, and why?',
      steps: [
        'The species is poultry.',
        'The conditions decide the breed.',
        'An improved layer cannot be supported.',
      ],
      answer: 'A local fowl, or a cross with a little local blood. '
        + 'An improved layer strain will lay over 250 eggs a year '
        + 'and it requires bought feed, housing, clean water, '
        + 'vaccination and management. '
        + 'Without those it will lay badly or die, '
        + 'and the investment is lost. '
        + 'A local fowl lays perhaps 60 eggs a year, '
        + 'scavenges much of its own feed, '
        + 'resists local disease '
        + 'and needs no special housing, '
        + 'so it will earn more than an improved bird that failed. '
        + 'The right breed is the one whose requirements '
        + 'the farmer can meet, '
        + 'not the one with the best figures.',
    },
    {
      level: 4,
      ask: 'Why are most Ghanaian cattle kept in the north?',
      steps: [
        'The tsetse fly lives in forest and riverine bush.',
        'It carries trypanosomiasis, fatal to exotic cattle.',
        'Pressure is lower in the drier north.',
      ],
      answer: 'Because of trypanosomiasis. '
        + 'The tsetse fly, which lives in forest and riverine bush, '
        + 'carries a parasite causing a disease '
        + 'that is usually fatal to cattle, '
        + 'particularly to exotic breeds. '
        + 'Tsetse pressure is lower in the drier northern savanna, '
        + 'so cattle can be kept there, '
        + 'and the open grassland also provides grazing. '
        + 'In the forest zone the livestock '
        + 'are mostly goats, sheep and poultry. '
        + 'Indigenous West African cattle have some tolerance, '
        + 'called trypanotolerance, '
        + 'which is why the few forest zone cattle are local breeds.',
    },
    {
      level: 5,
      ask: 'A young farmer with little capital asks '
        + 'whether to start with cattle or poultry. '
        + 'Advise, with reasons.',
      steps: [
        'Compare capital required and time to income.',
        'Broilers: six to eight weeks.',
        'Cattle: two to three years.',
      ],
      answer: 'Poultry, and the reason is the time before any income. '
        + 'A broiler reaches market weight in about six to eight weeks '
        + 'and a layer begins laying at about five months, '
        + 'while a cow takes two to three years '
        + 'to be ready for sale '
        + 'and costs many times as much to buy. '
        + 'So poultry ties up little capital '
        + 'and returns it quickly, '
        + 'which lets the farmer learn, '
        + 'absorb a loss, '
        + 'and reinvest. '
        + 'The costs of the choice should be stated: '
        + 'poultry needs bought feed, '
        + 'which is the largest expense and must be budgeted, '
        + 'and a disease outbreak can take a whole flock at once, '
        + 'so vaccination and biosecurity matter more '
        + 'than with grazing animals. '
        + 'Goats would be an intermediate option, '
        + 'cheap to start and saleable in a year.',
    },
  ],

  traps: [
    {
      mistake: 'Recommending the breed with the best production '
        + 'figures.',
      why: 'An improved breed demands feed, housing and veterinary care. '
        + 'The right breed is the one whose requirements can be met.',
    },
    {
      mistake: 'Choosing a breed before stating the conditions.',
      why: 'The species follows the purpose and the breed follows the '
        + 'conditions. '
        + 'Both halves are needed.',
    },
    {
      mistake: 'Explaining cattle distribution by rainfall alone.',
      why: 'Trypanosomiasis carried by the tsetse fly '
        + 'is the limiting factor in the forest zone.',
    },
    {
      mistake: 'Omitting what a choice gives up.',
      why: 'An indigenous breed trades yield for hardiness, '
        + 'and an exotic one the reverse. '
        + 'Naming the trade is the mark.',
    },
  ],

  extension:
    'Crossbreeding is the usual middle way '
    + 'between an indigenous and an exotic animal. '
    + 'The first generation behaves better than either parent. '
    + 'A cross between two lines is often more vigorous '
    + 'than the average of its parents. '
    + 'It grows faster and resists disease better. '
    + 'That effect is called heterosis, or hybrid vigour. '
    + 'So a first cross suits a farmer '
    + 'who is improving management gradually. '
    + 'There is a catch. '
    + 'The advantage does not breed on. '
    + 'Offspring of two crossbred animals vary widely, '
    + 'and some are worse than either original. '
    + 'So a farmer using crosses '
    + 'must keep returning to the pure parent lines. '
    + 'That is why crossbreeding depends '
    + 'on a reliable source of breeding stock.',

  questions: [
    {
      id: 'lv-1',
      ask: 'The species is chosen for the purpose, '
        + 'and the breed is chosen for:',
      kind: 'choice',
      options: [
        'the local conditions',
        'the highest yield available',
        'the lowest price',
      ],
      answer: 'the local conditions',
      teach: 'Heat, feed supply, disease and market '
        + 'decide which breed can actually be kept.',
      level: 3,
    },
    {
      id: 'lv-2',
      ask: 'Cattle keeping is limited in the forest zone mainly by:',
      kind: 'choice',
      options: ['trypanosomiasis', 'low rainfall', 'lack of market'],
      answer: 'trypanosomiasis',
      teach: 'The tsetse fly carries it, '
        + 'and it is usually fatal to exotic cattle.',
      level: 4,
    },
    {
      id: 'lv-3',
      ask: 'Goats are widely kept partly because they:',
      kind: 'choice',
      options: [
        'can be sold in small units when cash is needed',
        'produce the most milk',
        'need the least water',
      ],
      answer: 'can be sold in small units when cash is needed',
      teach: 'They also eat browse nothing else uses, '
        + 'breed young, and need little capital.',
      level: 4,
    },
    {
      id: 'lv-4',
      ask: 'A broiler reaches market weight in about how many weeks?',
      kind: 'choice',
      options: ['six to eight', 'twenty', 'fifty'],
      answer: 'six to eight',
      teach: 'A layer begins at about five months '
        + 'and a cow takes two to three years, '
        + 'which is why poultry suits a farmer with little capital.',
      level: 3,
    },
    {
      id: 'lv-5',
      ask: 'The extra vigour of a first cross is called:',
      kind: 'choice',
      options: ['heterosis', 'trypanotolerance', 'selection'],
      answer: 'heterosis',
      teach: 'Also called hybrid vigour. '
        + 'It does not breed on, '
        + 'so the pure parent lines must be returned to.',
      level: 5,
    },
  ],
})
