/**
 * Stored lessons for SHS 1 Elective Geography.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── The three topics and why they come first ──────────────────────────────
 *
 * These are the foundation of the physical half of the subject. The
 * structure and movements of the Earth explain day and night, the seasons
 * and the time zones, and they are the reason a later lesson on climate can
 * talk about the overhead sun at all. Rocks and the rock cycle explain what
 * the land is made of, which is what weathering and erosion will later act
 * on. Map reading is the practical skill the paper examines directly, every
 * year, with marks for the method rather than for recognising a place.
 *
 * ── What changes at SHS ───────────────────────────────────────────────────
 *
 * JHS geography asks what a thing is. Geography at SHS asks for the cause
 * and the consequence, and in the map question it asks for working. A grid
 * reference given without the easting first, a gradient given without
 * stating the units, an area given without saying how the part squares were
 * counted: each loses marks that the correct final number cannot recover.
 * So each lesson here says which line the marking scheme pays for.
 *
 * ── Equipment ─────────────────────────────────────────────────────────────
 *
 * Map work needs a ruler, a piece of string or thread for a winding
 * distance, and a sharp pencil. A topographical sheet is ideal and an
 * extract printed in a question paper does the same job. Nothing in these
 * three topics needs apparatus a school cannot find.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── the Earth's structure and movements ────────────────────────────────── */

teach({
  topicId: 'earth-structure-geog',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The Earth has three layers: '
      + 'a thin crust, a thick mantle, and a core of iron and nickel. '
      + 'It rotates on its axis once in 24 hours, '
      + 'which gives day and night and the time zones. '
      + 'It revolves round the Sun once a year, '
      + 'and because its axis is tilted at 23 and a half degrees '
      + 'that revolution gives the seasons.',
    method: [
      'Name the layer, give its material, and give one fact about it.',
      'Separate rotation from revolution before explaining anything.',
      'Rotation explains day, night and time differences.',
      'Revolution plus the tilt explains the seasons.',
      'Never explain the seasons by distance from the Sun.',
    ],
  },

  idea:
    'The Earth has three main layers. '
    + 'The crust is the thin outer shell, '
    + 'about 6 km thick under the oceans '
    + 'and up to about 40 km under the continents, '
    + 'made largely of silicate rock. '
    + 'The mantle lies below it, about 2900 km thick, '
    + 'made of denser silicate rock that can flow very slowly. '
    + 'The core is at the centre, '
    + 'made mainly of iron and nickel, '
    + 'with a liquid outer core and a solid inner core, '
    + 'and it is extremely hot. '
    + 'The Earth has two movements. '
    + 'Rotation is the spin on its own axis, '
    + 'once in about 24 hours, from west to east. '
    + 'Revolution is the journey round the Sun, '
    + 'once in about 365 and a quarter days. '
    + 'The axis is not upright. '
    + 'It is tilted at 23 and a half degrees from the vertical, '
    + 'and it keeps pointing the same way all year. '
    + 'Rotation gives day and night, '
    + 'the apparent movement of the Sun across the sky, '
    + 'differences in time between places of different longitude, '
    + 'and the deflection of winds and currents. '
    + 'Revolution together with the tilt gives the seasons, '
    + 'the changing length of day through the year, '
    + 'and the equinoxes and solstices. '
    + 'Longitude is measured east and west from the Greenwich meridian, '
    + 'and 15 degrees of longitude corresponds to one hour of time.',

  mechanism:
    'The single most common error in this topic '
    + 'is explaining the seasons by distance from the Sun. '
    + 'It is wrong, and the reason it is wrong is easy to state, '
    + 'so stating it secures the mark. '
    + 'If distance caused the seasons, '
    + 'the whole Earth would have summer at the same time. '
    + 'It does not. '
    + 'When it is June and the northern hemisphere has summer, '
    + 'Australia and South Africa are in winter. '
    + 'One distance cannot produce two opposite seasons, '
    + 'so distance is not the cause. '
    + 'The cause is the tilt. '
    + 'Because the axis stays tilted the same way all year, '
    + 'in June the northern hemisphere leans towards the Sun. '
    + 'Two things follow. '
    + 'The rays strike that hemisphere more nearly overhead, '
    + 'so the same amount of energy falls on a smaller area '
    + 'and heats it more. '
    + 'And the day is longer there, '
    + 'so the heating lasts longer. '
    + 'Six months later the Earth is on the other side of its orbit, '
    + 'the axis still points the same way, '
    + 'so now the southern hemisphere leans towards the Sun '
    + 'and the seasons are reversed. '
    + 'The two mechanisms to name are the angle of the rays '
    + 'and the length of the day. '
    + 'Those are the marks, and distance earns none. '
    + 'The second thing to hold apart '
    + 'is rotation from revolution. '
    + 'They are different movements with different periods '
    + 'and different consequences, '
    + 'and candidates attribute the effects of one to the other. '
    + 'A clean test: '
    + 'if the effect happens within a day, it is rotation. '
    + 'If it takes a year to come round, it is revolution. '
    + 'Day and night, within a day, so rotation. '
    + 'Seasons, over a year, so revolution with the tilt. '
    + 'Time zones belong to rotation, '
    + 'because the Earth turns 360 degrees in 24 hours, '
    + 'which is 15 degrees an hour. '
    + 'That figure is worth knowing because the paper calculates with it. '
    + 'A place 30 degrees east of Greenwich '
    + 'is two hours ahead, '
    + 'and east is ahead because the Earth turns from west to east, '
    + 'so the Sun reaches eastern places first. '
    + 'Ghana sits on the Greenwich meridian, '
    + 'which is a useful fact: '
    + 'Ghana time is Greenwich mean time, '
    + 'so every longitude calculation in a Ghanaian paper '
    + 'can be done from zero. '
    + 'The third place marks go is the layers. '
    + 'Naming crust, mantle and core earns little. '
    + 'The marks are for a thickness or a material '
    + 'or a property with each one: '
    + 'the crust thin and silicate, '
    + 'the mantle 2900 km of rock that flows slowly, '
    + 'the core iron and nickel with a liquid outer part. '
    + 'The mantle flowing slowly is the detail that matters most, '
    + 'because it is what makes plate movement possible, '
    + 'and a later topic depends on it. '
    + 'What has to be written down in a time calculation '
    + 'is the difference in longitude, '
    + 'then the division by 15, '
    + 'then the direction, '
    + 'then the answer. '
    + 'Four lines, four marks, '
    + 'and a bare time scores one of them.',

  recap:
    'You know the Earth spins and goes round the Sun, '
    + 'and that this gives day, night and the seasons. '
    + 'This gives the layers inside, '
    + 'the figures, '
    + 'and the exact reason the seasons happen.',

  method: [
    'Name the three layers with a thickness or material for each.',
    'Note that the mantle can flow slowly.',
    'Separate rotation, within a day, from revolution, over a year.',
    'Use rotation for day, night and time zones.',
    'Use revolution with the tilt for the seasons.',
    'Explain the seasons by angle of rays and length of day.',
    'For a time calculation, find the longitude difference, '
      + 'divide by 15, then state the direction.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Describe the three layers of the Earth, '
        + 'giving one fact about each.',
      steps: [
        'A fact means a thickness, a material or a property.',
      ],
      answer: 'The crust is the thin outer shell, '
        + 'about 6 km thick under the oceans '
        + 'and up to 40 km under the continents, '
        + 'made of silicate rock. '
        + 'The mantle is about 2900 km thick, '
        + 'made of denser rock that can flow very slowly, '
        + 'which is what allows the plates above to move. '
        + 'The core is iron and nickel, '
        + 'with a liquid outer core and a solid inner core, '
        + 'and it is extremely hot.',
    },
    {
      level: 4,
      ask: 'Explain why the seasons occur, '
        + 'and say why distance from the Sun cannot be the cause.',
      steps: [
        'The axis is tilted 23 and a half degrees and stays so.',
        'In June the northern hemisphere leans towards the Sun.',
        'Rays strike more nearly overhead, and the day is longer.',
        'Distance would give the whole Earth the same season.',
      ],
      answer: 'The axis is tilted at 23 and a half degrees '
        + 'and keeps pointing the same way as the Earth revolves. '
        + 'So in June the northern hemisphere leans towards the Sun: '
        + 'the rays strike it more nearly overhead, '
        + 'concentrating the energy on a smaller area, '
        + 'and the day there is longer, '
        + 'so the heating lasts longer. '
        + 'Six months later the position is reversed. '
        + 'Distance cannot be the cause, '
        + 'because the whole Earth is the same distance from the Sun '
        + 'at any moment, '
        + 'so it could not be summer in Europe '
        + 'and winter in South Africa at the same time.',
    },
    {
      level: 4,
      ask: 'When it is 12 noon in Accra, on the Greenwich meridian, '
        + 'what is the time at a place 45 degrees east?',
      steps: [
        'The Earth turns 360 degrees in 24 hours.',
        'So 15 degrees is one hour.',
        '45 divided by 15 is 3.',
        'East is ahead, because the Earth turns west to east.',
      ],
      answer: '3 p.m. '
        + 'The longitude difference is 45 degrees, '
        + 'which at 15 degrees per hour gives 3 hours, '
        + 'and the place is east, '
        + 'so it is ahead of Accra. '
        + 'Writing the four steps earns the method marks '
        + 'even if the arithmetic slips.',
    },
    {
      level: 5,
      ask: 'State four consequences of the rotation of the Earth, '
        + 'and explain one of them fully.',
      steps: [
        'Rotation effects happen within a day.',
        'Pick the deflection of winds for the full explanation.',
      ],
      answer: 'Day and night; '
        + 'the apparent movement of the Sun from east to west; '
        + 'differences in time between places of different longitude; '
        + 'and the deflection of winds and ocean currents. '
        + 'Taking the last: because the Earth turns, '
        + 'a wind moving over its surface '
        + 'is deflected to the right in the northern hemisphere '
        + 'and to the left in the southern. '
        + 'This is the Coriolis effect, '
        + 'and it is why the trade winds reaching Ghana '
        + 'blow from the south west rather than straight from the south, '
        + 'which in turn is why the rain bearing winds '
        + 'arrive from that direction.',
    },
  ],

  traps: [
    {
      mistake: 'Explaining the seasons by distance from the Sun.',
      why: 'The whole Earth is the same distance at any moment, '
        + 'so it could not be summer in one hemisphere '
        + 'and winter in the other.',
    },
    {
      mistake: 'Attributing day and night to revolution.',
      why: 'If the effect happens within a day it is rotation. '
        + 'Revolution takes a year.',
    },
    {
      mistake: 'Naming the three layers with no detail.',
      why: 'The marks are for a thickness, a material or a property, '
        + 'especially that the mantle can flow slowly.',
    },
    {
      mistake: 'Giving a time answer with no working.',
      why: 'Longitude difference, divide by 15, then the direction. '
        + 'A bare time scores one mark of four.',
    },
  ],

  extension:
    'The tilt is not perfectly steady over long periods. '
    + 'It varies between about 22 and 24 and a half degrees '
    + 'over roughly 41000 years, '
    + 'the orbit becomes more and less elliptical, '
    + 'and the axis slowly wobbles. '
    + 'Together these are the Milankovitch cycles, '
    + 'and they change how much sunlight each latitude receives '
    + 'over tens of thousands of years. '
    + 'They are the leading explanation for the ice ages, '
    + 'which shows that the same tilt '
    + 'that gives this year its seasons '
    + 'also governs the climate over geological time.',

  questions: [
    {
      id: 'ear-1',
      ask: 'The layer of the Earth made mainly of iron and nickel is the:',
      kind: 'choice',
      options: ['core', 'mantle', 'crust'],
      answer: 'core',
      teach: 'The crust and mantle are silicate rock. '
        + 'The core is metallic.',
      level: 2,
    },
    {
      id: 'ear-2',
      ask: 'How many degrees of longitude correspond to one hour of time?',
      kind: 'numeric',
      options: [],
      answer: '15',
      teach: '360 degrees in 24 hours gives 15 degrees per hour.',
      level: 3,
    },
    {
      id: 'ear-3',
      ask: 'The seasons are caused by:',
      kind: 'choice',
      options: [
        'the tilt of the axis as the Earth revolves',
        'the changing distance from the Sun',
        'the rotation of the Earth',
      ],
      answer: 'the tilt of the axis as the Earth revolves',
      teach: 'Distance would give both hemispheres the same season. '
        + 'The tilt changes the angle of the rays and the day length.',
      level: 4,
    },
    {
      id: 'ear-4',
      ask: 'The angle of tilt of the Earth axis is about how many degrees?',
      kind: 'numeric',
      options: [],
      answer: '23.5',
      teach: '23 and a half degrees from the vertical, '
        + 'and it keeps pointing the same way all year.',
      level: 3,
    },
    {
      id: 'ear-5',
      ask: 'Which consequence belongs to rotation rather than revolution?',
      kind: 'choice',
      options: [
        'the deflection of winds',
        'the changing seasons',
        'the length of a year',
      ],
      answer: 'the deflection of winds',
      teach: 'It happens because the surface is turning, '
        + 'so it is a rotation effect, within a day.',
      level: 5,
    },
  ],
})

/* ── rocks and the rock cycle ───────────────────────────────────────────── */

teach({
  topicId: 'rocks-geog',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Rocks are classified by how they formed. '
      + 'Igneous rock cooled from molten material, '
      + 'and cooling slowly underground gives large crystals '
      + 'while cooling fast at the surface gives small ones. '
      + 'Sedimentary rock was laid down in layers and compacted. '
      + 'Metamorphic rock was changed by heat or pressure. '
      + 'The rock cycle turns each into the others.',
    method: [
      'Ask how the rock formed, not what it looks like.',
      'Cooled from melt means igneous.',
      'Laid down in layers means sedimentary.',
      'Changed by heat or pressure means metamorphic.',
      'For igneous, use crystal size to say where it cooled.',
    ],
  },

  idea:
    'A rock is a natural aggregate of minerals, '
    + 'and rocks are classified by their mode of formation. '
    + 'Igneous rocks form when molten material cools and solidifies. '
    + 'Intrusive or plutonic igneous rock cools slowly deep underground, '
    + 'so its crystals grow large, as in granite. '
    + 'Extrusive or volcanic igneous rock cools quickly at the surface, '
    + 'so its crystals are small or absent, as in basalt. '
    + 'Sedimentary rocks form from material deposited in layers '
    + 'and then compacted and cemented. '
    + 'They may be mechanically formed from fragments, as sandstone '
    + 'and shale; '
    + 'organically formed from the remains of living things, '
    + 'as limestone and coal; '
    + 'or chemically formed by precipitation, as rock salt. '
    + 'Sedimentary rocks commonly show bedding planes '
    + 'and may contain fossils. '
    + 'Metamorphic rocks are existing rocks altered by heat, '
    + 'by pressure, or by both, without melting. '
    + 'Limestone becomes marble, '
    + 'shale becomes slate, '
    + 'sandstone becomes quartzite, '
    + 'and granite becomes gneiss. '
    + 'The rock cycle links all three. '
    + 'Igneous and metamorphic rock exposed at the surface '
    + 'is weathered and eroded into sediment, '
    + 'which is deposited and becomes sedimentary rock. '
    + 'Any rock buried deeply and heated or squeezed '
    + 'becomes metamorphic, '
    + 'and any rock melted becomes magma and then igneous rock again.',

  mechanism:
    'The classification is by origin, '
    + 'and that is the sentence to hold, '
    + 'because learners classify by appearance '
    + 'and appearance misleads. '
    + 'Marble and limestone are made of the same mineral '
    + 'and belong to different classes, '
    + 'because one was deposited and the other was altered. '
    + 'So the question to ask is never what does it look like '
    + 'but how did it get here. '
    + 'The most useful piece of reasoning in the topic '
    + 'is reading cooling history from crystal size, '
    + 'and it is worth following because it is a real inference '
    + 'rather than a fact to recall. '
    + 'A crystal grows while the melt is still liquid. '
    + 'Slow cooling gives each crystal a long time to grow, '
    + 'so it becomes large. '
    + 'Fast cooling stops growth early, '
    + 'so the crystals are small, '
    + 'and extremely fast cooling leaves no crystals at all, '
    + 'which is how volcanic glass forms. '
    + 'So a rock with crystals you can see with the naked eye '
    + 'cooled slowly, '
    + 'which means it cooled underground, '
    + 'which means it is intrusive. '
    + 'A rock with crystals too small to see cooled fast at the surface. '
    + 'From one observation you have recovered '
    + 'where the rock was when it solidified, '
    + 'and a question that gives a specimen description '
    + 'is asking for exactly that chain. '
    + 'Here is where marks go. '
    + 'The first error is saying granite is formed by a volcano. '
    + 'Granite is intrusive: '
    + 'it formed at depth and is seen at the surface '
    + 'only because the rock above it has been removed by erosion. '
    + 'That last clause is itself a mark '
    + 'in a question asking how granite comes to be exposed. '
    + 'The second is fossils. '
    + 'Fossils are found in sedimentary rock '
    + 'and almost never in igneous or metamorphic rock, '
    + 'and the reason should be given rather than the fact: '
    + 'molten rock would destroy any remains, '
    + 'and the heat and pressure of metamorphism '
    + 'deform them beyond recognition. '
    + 'Only quiet deposition in layers preserves a shape. '
    + 'So a rock containing a shell is sedimentary, '
    + 'and that single observation settles the class. '
    + 'The third is treating the rock cycle as a one way sequence. '
    + 'It is a cycle, and every route is possible. '
    + 'A sedimentary rock can be metamorphosed, '
    + 'melted, recooled as igneous, '
    + 'eroded, and deposited as sediment again. '
    + 'A question asking how a sedimentary rock '
    + 'could become an igneous one '
    + 'wants that path named step by step: '
    + 'burial, melting to magma, cooling and solidifying. '
    + 'Drawing the cycle with arrows both ways '
    + 'between each pair of boxes is the clearest answer, '
    + 'and arrows are marked. '
    + 'The fourth is the Ghanaian application, '
    + 'which strengthens any answer. '
    + 'The Birimian rocks of southern Ghana '
    + 'are largely metamorphosed volcanic and sedimentary rocks, '
    + 'and they carry the gold. '
    + 'Limestone at Nauli and Buipe supplies the cement industry. '
    + 'Granite is quarried for building stone. '
    + 'The Voltaian basin is sedimentary sandstone and shale. '
    + 'Naming one of these in an answer '
    + 'shows the classification has been connected to the country. '
    + 'What has to be written down is the mode of formation first, '
    + 'then the class, then the example. '
    + 'In that order the answer cannot be circular.',

  recap:
    'You know that some rocks come from volcanoes '
    + 'and some are made of layers. '
    + 'This classifies all rocks by how they formed, '
    + 'and shows how each kind becomes another.',

  method: [
    'Ask how the rock formed.',
    'Cooled from a melt: igneous.',
    'Deposited in layers and compacted: sedimentary.',
    'Altered by heat or pressure without melting: metamorphic.',
    'For an igneous rock, read the cooling rate from the crystal size.',
    'Large visible crystals mean slow cooling at depth, so intrusive.',
    'Use fossils or bedding planes as evidence of sedimentary origin.',
    'For the cycle, name each step of the path asked for.',
    'Give a Ghanaian example where you can.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Classify rocks by origin, '
        + 'giving one example of each class.',
      steps: [
        'Three classes, each by how it formed.',
      ],
      answer: 'Igneous rocks cooled from molten material: granite, basalt. '
        + 'Sedimentary rocks were deposited in layers and compacted: '
        + 'sandstone, limestone, shale. '
        + 'Metamorphic rocks were altered by heat or pressure '
        + 'without melting: marble, slate, quartzite, gneiss.',
    },
    {
      level: 4,
      ask: 'A specimen is igneous and has large crystals '
        + 'visible to the naked eye. '
        + 'Where did it solidify? '
        + 'Explain your reasoning.',
      steps: [
        'Crystals grow while the melt is liquid.',
        'Large crystals mean a long growth time.',
        'A long time means slow cooling.',
        'Slow cooling happens where heat is lost slowly, at depth.',
      ],
      answer: 'It solidified deep underground, '
        + 'so it is an intrusive or plutonic rock such as granite. '
        + 'Crystals grow while the material is still molten, '
        + 'so large crystals mean a long period of growth, '
        + 'which means slow cooling, '
        + 'and cooling is slow at depth '
        + 'because the surrounding rock insulates the melt. '
        + 'Small or absent crystals would instead indicate '
        + 'rapid cooling at the surface.',
    },
    {
      level: 4,
      ask: 'Why are fossils found almost only in sedimentary rock?',
      steps: [
        'Igneous rock was molten.',
        'Metamorphic rock was heated and squeezed.',
        'Both destroy remains.',
        'Quiet deposition in layers buries and preserves them.',
      ],
      answer: 'Because the other two processes destroy remains. '
        + 'Igneous rock was molten, '
        + 'so anything in it would have been burned away. '
        + 'Metamorphic rock was subjected to great heat and pressure, '
        + 'which deforms any fossil beyond recognition. '
        + 'Sedimentary rock forms by the quiet deposition of layers, '
        + 'which can bury an organism gently and preserve its shape. '
        + 'So a rock containing a shell is sedimentary, '
        + 'and the observation alone settles the class.',
    },
    {
      level: 5,
      ask: 'Describe the path by which a sedimentary rock '
        + 'could become an igneous rock, '
        + 'and then become sedimentary again.',
      steps: [
        'Burial deepens and heat increases.',
        'Sufficient heat melts the rock to magma.',
        'Magma cools and solidifies as igneous rock.',
        'Uplift exposes it; weathering and erosion break it down.',
        'Transport and deposition form new sediment, which is compacted.',
      ],
      answer: 'The sedimentary rock is buried more deeply, '
        + 'and as temperature rises it is first metamorphosed '
        + 'and then melts to magma. '
        + 'The magma cools and solidifies, '
        + 'as intrusive rock if it cools at depth '
        + 'or as extrusive rock if it reaches the surface, '
        + 'and either way it is now igneous. '
        + 'Uplift and the removal of the rock above '
        + 'expose it at the surface, '
        + 'where weathering and erosion break it into fragments. '
        + 'Rivers transport those fragments and deposit them in layers, '
        + 'and compaction and cementation make them '
        + 'sedimentary rock once more. '
        + 'This is the rock cycle, '
        + 'and it runs in every direction rather than one.',
    },
  ],

  traps: [
    {
      mistake: 'Classifying a rock by what it looks like.',
      why: 'Limestone and marble share a mineral and differ in class. '
        + 'The classification is by how the rock formed.',
    },
    {
      mistake: 'Saying granite is thrown out by a volcano.',
      why: 'Granite is intrusive, formed at depth, '
        + 'and exposed only because the rock above was eroded away.',
    },
    {
      mistake: 'Stating that fossils occur in sedimentary rock '
        + 'without the reason.',
      why: 'The reason is the mark: '
        + 'melting and metamorphism destroy remains, '
        + 'and quiet deposition preserves them.',
    },
    {
      mistake: 'Drawing the rock cycle with arrows in one direction.',
      why: 'Every route is possible, '
        + 'and the arrows are marked. '
        + 'A sedimentary rock can become igneous and back again.',
    },
  ],

  extension:
    'The rocks of a region decide much of its economy, '
    + 'and Ghana is a clear case. '
    + 'The Birimian rocks of the south west '
    + 'are metamorphosed volcanic and sedimentary rocks, '
    + 'and the gold occurs in them, '
    + 'which is why Obuasi and Tarkwa are where they are. '
    + 'The Voltaian basin is sandstone and shale, '
    + 'which weather to poorer soils '
    + 'and hold less mineral wealth. '
    + 'Limestone at Nauli and Buipe feeds the cement industry. '
    + 'So a geological map of Ghana '
    + 'predicts where the mines, the quarries and the cement works are, '
    + 'and it does so better than any economic map would.',

  questions: [
    {
      id: 'rck-1',
      ask: 'A rock formed from cooled molten material is:',
      kind: 'choice',
      options: ['igneous', 'sedimentary', 'metamorphic'],
      answer: 'igneous',
      teach: 'The word means formed by fire. '
        + 'Classification is always by how the rock formed.',
      level: 2,
    },
    {
      id: 'rck-2',
      ask: 'Large visible crystals in an igneous rock indicate:',
      kind: 'choice',
      options: [
        'slow cooling at depth',
        'rapid cooling at the surface',
        'great pressure',
      ],
      answer: 'slow cooling at depth',
      teach: 'Crystals grow while the material is molten, '
        + 'so a long cooling time gives large crystals.',
      level: 4,
    },
    {
      id: 'rck-3',
      ask: 'Limestone altered by heat and pressure becomes:',
      kind: 'choice',
      options: ['marble', 'slate', 'quartzite'],
      answer: 'marble',
      teach: 'Shale becomes slate and sandstone becomes quartzite.',
      level: 3,
    },
    {
      id: 'rck-4',
      ask: 'Fossils are almost never found in igneous rock because:',
      kind: 'choice',
      options: [
        'the molten material would have destroyed any remains',
        'igneous rock is too hard',
        'organisms avoid volcanoes',
      ],
      answer: 'the molten material would have destroyed any remains',
      teach: 'Metamorphism deforms fossils for the same kind of reason. '
        + 'Only quiet deposition preserves them.',
      level: 4,
    },
    {
      id: 'rck-5',
      ask: 'In Ghana, gold occurs mainly in which rocks?',
      kind: 'choice',
      options: [
        'the Birimian rocks of the south west',
        'the Voltaian sandstones',
        'coastal limestone',
      ],
      answer: 'the Birimian rocks of the south west',
      teach: 'They are metamorphosed volcanic and sedimentary rocks, '
        + 'which is why Obuasi and Tarkwa are sited there.',
      level: 5,
    },
  ],
})

/* ── map reading and interpretation ─────────────────────────────────────── */

teach({
  topicId: 'map-reading-geog',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A grid reference gives the easting first, then the northing. '
      + 'Distance is measured with a ruler for a straight line '
      + 'and a thread for a winding one, then converted by the scale. '
      + 'Area is counted in full squares plus part squares. '
      + 'Gradient is the rise over the run, in the same unit. '
      + 'Relief is read from the spacing and pattern of the contours.',
    method: [
      'For a grid reference, read along the bottom first, then up.',
      'For distance, measure, then multiply by the scale.',
      'For area, count whole squares, then estimate the parts.',
      'For gradient, convert both the rise and the run to metres.',
      'For relief, read contour spacing: close means steep.',
    ],
  },

  idea:
    'A topographical map shows the ground to scale, '
    + 'with a grid of numbered lines. '
    + 'The vertical lines are eastings, numbered from west to east, '
    + 'and the horizontal lines are northings, '
    + 'numbered from south to north. '
    + 'A grid reference always gives the easting first '
    + 'and then the northing. '
    + 'A four figure reference names a square; '
    + 'a six figure reference locates a point within it '
    + 'by dividing each side of the square into ten. '
    + 'The scale states the relation of map distance to ground distance, '
    + 'as a ratio such as 1 to 50000, '
    + 'which means 1 cm on the map is 50000 cm, that is 0.5 km, '
    + 'on the ground. '
    + 'A straight line distance is measured with a ruler '
    + 'and a winding one with a thread laid along the feature. '
    + 'Area is found by counting the full grid squares '
    + 'inside the feature, '
    + 'then estimating the part squares, '
    + 'commonly by counting those at least half covered as whole '
    + 'and ignoring the rest, '
    + 'and multiplying by the area of one square. '
    + 'Contours are lines joining points of equal height, '
    + 'and the vertical interval is the height difference between them. '
    + 'Closely spaced contours mean a steep slope '
    + 'and widely spaced contours a gentle one. '
    + 'Gradient is the vertical rise divided by the horizontal distance, '
    + 'both in the same unit, '
    + 'and it is written as a ratio such as 1 in 20.',

  mechanism:
    'Almost every mark in map work is a method mark, '
    + 'and that changes how the question should be answered. '
    + 'A correct number with no working '
    + 'collects one mark where four were on offer. '
    + 'So the rule is to write the measurement, '
    + 'the conversion, and the answer with its unit, '
    + 'on three separate lines, every time. '
    + 'Start with the grid reference, '
    + 'where the error is almost universal and entirely avoidable. '
    + 'Easting first, northing second. '
    + 'The way to remember it is that you read along the corridor '
    + 'before you go up the stairs, '
    + 'and that phrase has rescued more marks than any other '
    + 'in the subject. '
    + 'For a six figure reference, '
    + 'the square is divided mentally into ten parts each way. '
    + 'A point four tenths across and seven tenths up '
    + 'from the corner of square 23 by 45 '
    + 'is 234457. '
    + 'Reversing the pair gives a point in quite the wrong place, '
    + 'and the examiner cannot award anything for it. '
    + 'Next, distance, where the scale conversion is the mark. '
    + 'On a 1 to 50000 map, 1 cm is 0.5 km. '
    + 'A road measuring 8.4 cm along a thread '
    + 'is therefore 4.2 km. '
    + 'The line to write is: '
    + 'measured length 8.4 cm, scale 1 cm to 0.5 km, '
    + 'so distance is 8.4 times 0.5 which is 4.2 km. '
    + 'That shows the method even if the ruler slipped. '
    + 'For a winding feature a ruler is wrong by a large margin, '
    + 'so use a thread or the edge of a strip of paper '
    + 'turned at each bend, and say that you did. '
    + 'Now the gradient, which is the calculation most often '
    + 'got wrong, '
    + 'and always for the same reason: mixed units. '
    + 'Gradient is rise over run with both in the same unit. '
    + 'Suppose the rise is 60 m and the horizontal distance is 1.5 km. '
    + 'Convert the run to metres: 1500 m. '
    + 'Then 60 over 1500 is 1 over 25, '
    + 'so the gradient is 1 in 25. '
    + 'Dividing 60 by 1.5 gives 40, which is meaningless, '
    + 'and that is the commonest answer seen. '
    + 'Convert first, on its own line. '
    + 'The gradient is also conventionally written '
    + 'with 1 as the first number, '
    + 'so reduce the ratio rather than leaving it as 60 to 1500. '
    + 'For area, the marks are for stating the rule used. '
    + 'On a 1 to 50000 map with a 2 cm grid, '
    + 'each square is 1 km by 1 km, so 1 square kilometre. '
    + 'Count the whole squares inside the feature. '
    + 'Then deal with the part squares, '
    + 'and say which convention you applied: '
    + 'counting those half covered or more as whole '
    + 'and discarding the rest, '
    + 'or pairing part squares to make whole ones. '
    + 'An area given with no statement of the method '
    + 'cannot be checked and is marked as a guess. '
    + 'Last, relief, where description is examined '
    + 'and candidates write far too little. '
    + 'Do not write that the land is high in the north. '
    + 'Write the pattern: '
    + 'the land rises from about 60 m in the south east '
    + 'to over 300 m in the north west; '
    + 'the contours are closely spaced on the western side, '
    + 'indicating a steep slope, '
    + 'and widely spaced in the east, indicating gentle slopes; '
    + 'a ridge runs roughly north to south through the centre; '
    + 'and the drainage is radial from the high ground. '
    + 'Heights, directions, contour spacing, named features. '
    + 'Each is a mark. '
    + 'What has to be written down, in every part of this topic, '
    + 'is the measurement, the scale or conversion, '
    + 'and the answer with its unit.',

  recap:
    'You have used a map to find a place '
    + 'and seen a scale bar. '
    + 'This gives the exact methods: '
    + 'how to name a point, '
    + 'measure a distance, '
    + 'and calculate a slope.',

  method: [
    'For a grid reference, read along the bottom first, then up the side.',
    'For six figures, divide each side of the square into ten.',
    'For a straight distance, use a ruler; for a winding one, use a '
      + 'thread.',
    'Write the measured length, then the scale, then the answer with its '
      + 'unit.',
    'For gradient, convert the rise and the run to the same unit first.',
    'Reduce the gradient to a ratio beginning with 1.',
    'For area, find the area of one square, count whole squares, '
      + 'then state the convention used for part squares.',
    'For relief, give heights, directions, contour spacing and named '
      + 'features.',
  ],

  worked: [
    {
      level: 3,
      ask: 'On a 1 to 50000 map a straight road measures 6 cm. '
        + 'Find the ground distance.',
      steps: [
        '1 to 50000 means 1 cm represents 50000 cm.',
        '50000 cm is 0.5 km.',
        'So 6 cm represents 6 times 0.5 km.',
      ],
      answer: '3 km. '
        + 'Write the three lines: measured 6 cm; '
        + '1 cm represents 0.5 km; '
        + 'distance equals 3 km. '
        + 'The conversion line is a mark on its own.',
    },
    {
      level: 4,
      ask: 'Give the six figure grid reference of a point '
        + 'four tenths east and seven tenths north '
        + 'of the corner of the square whose easting is 23 '
        + 'and whose northing is 45.',
      steps: [
        'Easting first: 23 then the four tenths gives 234.',
        'Northing second: 45 then the seven tenths gives 457.',
        'Write them together, easting first.',
      ],
      answer: '234457. '
        + 'Easting before northing, always: '
        + 'read along the corridor before going up the stairs. '
        + 'Writing 457234 places the point somewhere else entirely '
        + 'and earns nothing.',
    },
    {
      level: 4,
      ask: 'Two points are 1.5 km apart horizontally '
        + 'and differ in height by 60 m. '
        + 'Find the gradient.',
      steps: [
        'Convert the run to metres: 1.5 km is 1500 m.',
        'Gradient is rise over run: 60 over 1500.',
        'Reduce: divide both by 60.',
      ],
      answer: '1 in 25. '
        + 'Both quantities must be in the same unit before dividing. '
        + 'Dividing 60 by 1.5 gives 40, '
        + 'which is the commonest wrong answer '
        + 'and has no meaning.',
    },
    {
      level: 5,
      ask: 'Describe the relief of a map extract '
        + 'in a way that would earn full marks.',
      steps: [
        'Give the overall range of height, with figures.',
        'Give the direction of the slope.',
        'Use contour spacing to describe steepness.',
        'Name any ridge, valley or plateau.',
        'Relate the drainage to the relief.',
      ],
      answer: 'The land rises from about 60 m in the south east '
        + 'to over 300 m in the north west. '
        + 'The contours are closely spaced on the western side, '
        + 'showing a steep slope there, '
        + 'and widely spaced in the east, showing gentle slopes. '
        + 'A ridge runs roughly north to south through the centre, '
        + 'with a broad valley to its east. '
        + 'The rivers flow outwards from the high ground, '
        + 'giving a radial drainage pattern. '
        + 'Heights with figures, directions, contour spacing '
        + 'and named features are each worth a mark, '
        + 'which is why the land is high in the north '
        + 'earns almost nothing.',
    },
  ],

  traps: [
    {
      mistake: 'Giving the northing before the easting.',
      why: 'Easting always comes first. '
        + 'Read along the corridor before going up the stairs.',
    },
    {
      mistake: 'Dividing a rise in metres by a run in kilometres.',
      why: 'Convert both to metres first. '
        + '60 m over 1.5 km is 1 in 25, not 40.',
    },
    {
      mistake: 'Measuring a winding road with a ruler.',
      why: 'It understates the length badly. '
        + 'Use a thread or a paper edge turned at each bend, '
        + 'and say so.',
    },
    {
      mistake: 'Giving an area with no statement of how part squares were '
        + 'treated.',
      why: 'The convention is the mark, '
        + 'because without it the number cannot be checked.',
    },
  ],

  extension:
    'Map reading is how a settlement pattern is explained '
    + 'rather than merely noticed, '
    + 'and that is what the harder map questions ask. '
    + 'Settlements cluster where contours are widely spaced, '
    + 'because flat land is easier to build and farm on. '
    + 'They sit near a river or a spring line for water, '
    + 'and at a route junction where tracks converge. '
    + 'They avoid steep slopes and marshy ground, '
    + 'which the map shows by close contours '
    + 'and by marsh symbols. '
    + 'So a question asking why a town grew at a particular point '
    + 'is answered from the map itself, '
    + 'using relief, drainage and routes, '
    + 'and never from knowing the place.',

  questions: [
    {
      id: 'map-1',
      ask: 'In a grid reference, which is given first?',
      kind: 'choice',
      options: ['the easting', 'the northing', 'either order'],
      answer: 'the easting',
      teach: 'Read along the corridor before going up the stairs.',
      level: 2,
    },
    {
      id: 'map-2',
      ask: 'On a 1 to 50000 map, 1 cm represents how many kilometres?',
      kind: 'numeric',
      options: [],
      answer: '0.5',
      teach: '50000 cm is 500 m, which is 0.5 km.',
      level: 3,
    },
    {
      id: 'map-3',
      ask: 'Closely spaced contours indicate:',
      kind: 'choice',
      options: ['a steep slope', 'a gentle slope', 'flat ground'],
      answer: 'a steep slope',
      teach: 'The same height difference is crossed '
        + 'in a shorter horizontal distance.',
      level: 3,
    },
    {
      id: 'map-4',
      ask: 'A rise of 40 m over a horizontal distance of 800 m '
        + 'gives a gradient of 1 in:',
      kind: 'numeric',
      options: [],
      answer: '20',
      teach: '40 over 800 reduces to 1 over 20. '
        + 'Both quantities were already in metres.',
      level: 4,
    },
    {
      id: 'map-5',
      ask: 'A winding river should be measured with:',
      kind: 'choice',
      options: [
        'a thread laid along its course',
        'a ruler between its ends',
        'the grid squares it crosses',
      ],
      answer: 'a thread laid along its course',
      teach: 'A straight ruler understates a winding length badly, '
        + 'and saying which method you used is itself a mark.',
      level: 4,
    },
  ],
})
