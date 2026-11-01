/**
 * Stored lessons for SHS 1 Literature in English.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── How this differs from the English Language treatment ──────────────────
 *
 * The English lessons teach devices as something to identify in a
 * comprehension passage and comment on in a sentence. Literature asks for
 * more. Here a device is read in its context, its effect is traced, and the
 * effect is linked to the theme of the whole work. The same simile means
 * one thing in a love poem and another in an elegy, and a Literature answer
 * is marked on noticing that. So these three lessons add the categories the
 * English course does not need: the distinct capabilities of the three
 * genres, the full range of imagery and figurative language, and the
 * vocabulary of plot, character, tone and point of view that an essay has
 * to use accurately to be marked at all.
 *
 * ── On examples ───────────────────────────────────────────────────────────
 *
 * The illustrative lines in these lessons were written for the lessons.
 * They are deliberately short and plain so that a learner can see the device
 * working without the distraction of a famous passage. Set texts are named
 * by title where it helps, since a learner must be able to apply the
 * vocabulary to whatever their school has prescribed, and the methods here
 * work on any text.
 *
 * ── What has to be written down ───────────────────────────────────────────
 *
 * A Literature answer has a fixed shape and the shape is the mark
 * allocation: the point, the evidence quoted exactly, the explanation of the
 * effect, and the link to the theme. Each lesson names it again, because
 * candidates who know the text well still lose marks by writing narrative
 * instead of argument.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── genres of literature ───────────────────────────────────────────────── */

teach({
  topicId: 'genres-lit',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Prose tells, and can enter a mind directly. '
      + 'Drama shows, and must put everything into speech and action. '
      + 'Poetry compresses, and uses sound and line as part of the '
      + 'meaning. '
      + 'Each can do something the others cannot, '
      + 'and each pays a price for it. '
      + 'Knowing the price is how a genre question is answered.',
    method: [
      'Ask how the audience receives the work: read, watched, or heard.',
      'Ask what the form can show directly.',
      'Ask what it must convey indirectly.',
      'Name the feature, then the capability, then the limitation.',
      'Use the right vocabulary: chapter, act and scene, stanza.',
    ],
  },

  idea:
    'Literature is divided into three genres. '
    + 'Prose is written in ordinary continuous sentences '
    + 'and divided into paragraphs and chapters. '
    + 'It includes the novel, the novella and the short story, '
    + 'and it is read privately. '
    + 'Drama is written to be performed. '
    + 'It consists of dialogue and stage directions, '
    + 'divided into acts and scenes, '
    + 'and it reaches its audience through actors in a theatre. '
    + 'Poetry is written in lines and stanzas '
    + 'rather than in sentences and paragraphs, '
    + 'and it uses rhythm, sound and line breaks as part of its meaning. '
    + 'It is often meant to be heard. '
    + 'Each genre has its own vocabulary. '
    + 'In prose: narrator, chapter, point of view. '
    + 'In drama: act, scene, dialogue, soliloquy, aside, '
    + 'stage direction, protagonist. '
    + 'In poetry: line, stanza, rhyme, rhythm, metre, refrain. '
    + 'Prose and poetry may be narrative or not; '
    + 'drama is always enacted. '
    + 'African oral literature cuts across these divisions, '
    + 'since a performed folktale has narrative like prose, '
    + 'dialogue and gesture like drama, '
    + 'and song and refrain like poetry.',

  mechanism:
    'The useful way to tell the genres apart '
    + 'is not by how they look on the page. '
    + 'It is by asking what each form can do directly, '
    + 'and what it must therefore do by some other means. '
    + 'Start with the inside of a character head. '
    + 'Prose can state it: '
    + 'she smiled and thought that he was lying. '
    + 'One sentence, and the reader knows something '
    + 'no other character knows. '
    + 'Drama cannot do that. '
    + 'An actor on a stage has no way of simply reporting a thought, '
    + 'so drama must find a substitute: '
    + 'a soliloquy, where the character speaks alone and we overhear; '
    + 'an aside, spoken to the audience past the other characters; '
    + 'or, most often, '
    + 'words and actions from which the audience must infer. '
    + 'So the existence of the soliloquy '
    + 'is not a curiosity of old plays. '
    + 'It is drama solving a problem prose does not have, '
    + 'and saying that is the answer to a standard question. '
    + 'Now run the comparison the other way, '
    + 'because candidates always argue that prose is the richer form '
    + 'and the examiner is looking for the other side too. '
    + 'Drama is immediate. '
    + 'An audience sees a slap, hears a silence, '
    + 'and watches a hundred people react at the same moment, '
    + 'which prose can only describe. '
    + 'Drama is also compressed by the clock: '
    + 'a play must work in two hours, '
    + 'so every scene has to carry weight, '
    + 'and that pressure produces the concentration '
    + 'a long novel can afford to lack. '
    + 'And poetry has a resource neither of the others uses fully, '
    + 'which is sound. '
    + 'A line can slow down or speed up by its vowels and stresses. '
    + 'Consider two statements of the same fact. '
    + 'The rain came, written plainly in prose, reports an event. '
    + 'The same words set alone as a line, '
    + 'after a stanza of dry heat, '
    + 'carry the weight of the whole poem, '
    + 'because the position in the line and the pause before it '
    + 'are themselves meaning. '
    + 'Prose has no equivalent of a line break. '
    + 'Here is where marks go. '
    + 'The first error is listing surface features only. '
    + 'Prose is in paragraphs and poetry is in stanzas '
    + 'is true, and it is one mark, '
    + 'and it is the only mark such an answer gets. '
    + 'Follow every feature with what it allows. '
    + 'Drama is divided into acts and scenes, '
    + 'which lets the action jump in time and place '
    + 'between one scene and the next without explanation, '
    + 'because a change of set does the work. '
    + 'That is a feature plus a capability, and it is two marks. '
    + 'The second error is the vocabulary. '
    + 'A play has acts and scenes, not chapters. '
    + 'A poem has stanzas, not paragraphs or verses in the loose sense. '
    + 'A novel has chapters and a narrator. '
    + 'Using the wrong word suggests the candidate '
    + 'has not studied the genre, '
    + 'and examiners penalise it. '
    + 'The third is forgetting the oral tradition, '
    + 'which in a West African paper is often the most rewarding point '
    + 'available. '
    + 'A performed Anansesem has a narrator, like prose; '
    + 'the narrator takes the voices of the characters, like drama; '
    + 'the audience joins a song at intervals, like poetry; '
    + 'and the story changes with each telling, '
    + 'which no printed genre does. '
    + 'So the three way division is a description of written literature, '
    + 'and oral literature shows its limits. '
    + 'A candidate who makes that point '
    + 'has gone beyond the syllabus in the right direction. '
    + 'What has to be written down is the pairing: '
    + 'the feature of the form, '
    + 'then the thing it makes possible, '
    + 'then the thing it costs.',

  recap:
    'You have read stories, seen a play '
    + 'and learned a poem by heart. '
    + 'This asks what each of those forms is able to do '
    + 'that the others are not.',

  method: [
    'State how the work reaches its audience: read, watched or heard.',
    'Give the structural features: chapters, acts and scenes, stanzas.',
    'Say what each feature makes possible.',
    'Say what the form cannot do directly.',
    'Name the device the form uses instead.',
    'Use the vocabulary of the right genre throughout.',
    'Mention oral literature where the comparison allows it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Give three differences between prose and drama.',
      steps: [
        'Each difference should be a feature plus what it allows.',
      ],
      answer: 'Prose is written in continuous sentences and chapters '
        + 'and is read privately, '
        + 'while drama is written as dialogue and stage directions '
        + 'and is performed before an audience. '
        + 'Prose can state a character thoughts directly, '
        + 'while drama must convey them through speech and action. '
        + 'Prose can take any length, '
        + 'while a play must work within a performance, '
        + 'so its action is more compressed.',
    },
    {
      level: 4,
      ask: 'Why does drama use the soliloquy? '
        + 'What problem does it solve?',
      steps: [
        'Drama cannot report a thought directly.',
        'A thought the audience needs must reach them somehow.',
        'A soliloquy lets a character speak alone and be overheard.',
      ],
      answer: 'Because drama has no narrator '
        + 'and therefore no way of simply reporting what a character '
        + 'thinks. '
        + 'Prose can write that she believed he was lying; '
        + 'a play cannot. '
        + 'The soliloquy solves this by having the character speak alone, '
        + 'so the audience overhears the thought as speech. '
        + 'The aside does the same thing briefly, '
        + 'spoken past the other characters. '
        + 'So the soliloquy is not an old fashioned habit '
        + 'but drama answering a limitation of its own form.',
    },
    {
      level: 4,
      ask: 'What can poetry do that prose cannot? '
        + 'Illustrate with a short example.',
      steps: [
        'Poetry uses the line as a unit of meaning.',
        'A line break creates a pause that prose has no mark for.',
        'Sound and rhythm can slow or hurry the reader.',
      ],
      answer: 'Poetry can use the line itself as meaning. '
        + 'Take the words the rain came. '
        + 'In a prose paragraph they report an event and pass. '
        + 'Set alone as a short line, after a stanza describing dry heat, '
        + 'the same three words carry the weight of the whole poem, '
        + 'because the pause before them and the shortness of the line '
        + 'are part of what is being said. '
        + 'Prose has no equivalent of a line break, '
        + 'and it has no way of controlling the reader pace '
        + 'as precisely as rhythm can.',
    },
    {
      level: 5,
      ask: 'African oral literature does not fit the three genres neatly. '
        + 'Explain, and say what this shows.',
      steps: [
        'A performed folktale has narrative, like prose.',
        'The narrator takes the voices, like drama.',
        'The audience joins songs, like poetry.',
        'The text changes with each performance.',
      ],
      answer: 'A performed folktale such as an Ananse story '
        + 'has a narrator and a plot, which belongs to prose; '
        + 'the narrator takes the voices and gestures of the characters, '
        + 'which belongs to drama; '
        + 'and the audience joins in a song or refrain at intervals, '
        + 'which belongs to poetry. '
        + 'It also differs from all three in that no fixed text exists: '
        + 'the story is shaped by the audience '
        + 'and changes with each telling. '
        + 'This shows that the three genre division '
        + 'is a description of written literature '
        + 'rather than a universal law of all literature, '
        + 'and that a performance tradition '
        + 'can combine capabilities the printed forms keep separate.',
    },
  ],

  traps: [
    {
      mistake: 'Listing surface features only.',
      why: 'Prose in paragraphs and poetry in stanzas is one mark. '
        + 'Follow each feature with what it makes possible.',
    },
    {
      mistake: 'Writing chapters in a play or paragraphs in a poem.',
      why: 'A play has acts and scenes; a poem has stanzas. '
        + 'Wrong vocabulary suggests the genre was not studied.',
    },
    {
      mistake: 'Arguing that prose is simply the superior form.',
      why: 'Drama has immediacy and compression; '
        + 'poetry has sound and the line. '
        + 'Each form gains something and pays for it.',
    },
    {
      mistake: 'Ignoring oral literature in a West African answer.',
      why: 'It is often the most rewarding point available, '
        + 'because it combines all three '
        + 'and has no fixed text.',
    },
  ],

  extension:
    'The genres borrow from each other constantly, '
    + 'and the borrowings are worth noticing. '
    + 'A novel written entirely as letters, or as a diary, '
    + 'is taking drama direct voice '
    + 'and giving up the narrator ability to see everything. '
    + 'A verse play puts poetry into drama '
    + 'and gets rhythm at the cost of plainness. '
    + 'A prose poem drops the line break '
    + 'and keeps compression and image. '
    + 'In each case a writer has traded one capability for another, '
    + 'so asking what has been gained and what given up '
    + 'is a way into any unfamiliar form.',

  questions: [
    {
      id: 'gen-1',
      ask: 'A play is divided into:',
      kind: 'choice',
      options: ['acts and scenes', 'chapters', 'stanzas'],
      answer: 'acts and scenes',
      teach: 'Chapters belong to prose and stanzas to poetry. '
        + 'The vocabulary is marked.',
      level: 2,
    },
    {
      id: 'gen-2',
      ask: 'Drama uses a soliloquy mainly because it cannot:',
      kind: 'choice',
      options: [
        'report a character thoughts directly',
        'change its setting',
        'have more than one character',
      ],
      answer: 'report a character thoughts directly',
      teach: 'There is no narrator on a stage, '
        + 'so a thought must reach the audience as speech.',
      level: 4,
    },
    {
      id: 'gen-3',
      ask: 'Which resource does poetry use that prose does not?',
      kind: 'choice',
      options: [
        'the line as a unit of meaning',
        'characters',
        'a narrator',
      ],
      answer: 'the line as a unit of meaning',
      teach: 'Prose has no equivalent of a line break, '
        + 'and no comparable control of the reader pace.',
      level: 4,
    },
    {
      id: 'gen-4',
      ask: 'A performed Ananse story resembles drama in that:',
      kind: 'choice',
      options: [
        'the narrator takes the voices of the characters',
        'it has a plot',
        'the audience sings',
      ],
      answer: 'the narrator takes the voices of the characters',
      teach: 'The plot is prose like and the singing is poetry like. '
        + 'The voicing is the dramatic element.',
      level: 5,
    },
    {
      id: 'gen-5',
      ask: 'In a genre question, a feature of the form should be followed '
        + 'by:',
      kind: 'choice',
      options: [
        'what it makes possible',
        'another feature',
        'the name of a set text',
      ],
      answer: 'what it makes possible',
      teach: 'The capability is the second mark. '
        + 'A list of features earns one.',
      level: 4,
    },
  ],
})

/* ── figures of speech and imagery ──────────────────────────────────────── */

teach({
  topicId: 'figures-lit',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Imagery is language that calls on the senses, '
      + 'and it is not only visual: '
      + 'there is sound, touch, smell, taste and movement. '
      + 'A figure of speech departs from literal statement '
      + 'to make a comparison, a substitution or a contradiction. '
      + 'Naming it earns one mark. '
      + 'The effect earns the rest, '
      + 'and the link to the theme earns the top band.',
    method: [
      'Quote the words exactly.',
      'Name the device precisely.',
      'Say which sense or idea it engages.',
      'Say what it makes the reader feel or understand.',
      'Link that to the theme of the whole work.',
    ],
  },

  idea:
    'Imagery is language that appeals to the senses. '
    + 'Visual imagery appeals to sight. '
    + 'Auditory imagery appeals to hearing. '
    + 'Tactile imagery appeals to touch. '
    + 'Olfactory imagery appeals to smell '
    + 'and gustatory imagery to taste. '
    + 'Kinaesthetic imagery appeals to movement. '
    + 'A figure of speech departs from plain statement. '
    + 'Some figures compare. '
    + 'A simile compares using like or as. '
    + 'A metaphor says one thing is another. '
    + 'Personification gives human qualities '
    + 'to something not human. '
    + 'Some figures substitute. '
    + 'Metonymy names a thing by something tied to it, '
    + 'as the crown for the monarchy. '
    + 'Synecdoche names the whole by a part, '
    + 'as hands for workers. '
    + 'Some figures contradict. '
    + 'An oxymoron joins two opposite words, '
    + 'as a bitter sweetness. '
    + 'A paradox states something that seems to contradict itself '
    + 'and proves true on thought. '
    + 'Irony says one thing and means another. '
    + 'Dramatic irony is when the audience knows '
    + 'what a character does not. '
    + 'Hyperbole exaggerates and litotes understates. '
    + 'Euphemism puts a mild word for a harsh one. '
    + 'Apostrophe addresses somebody absent, '
    + 'or something abstract. '
    + 'A symbol stands for an idea beyond itself. '
    + 'Unlike a metaphor it recurs, and gathers meaning as it goes. '
    + 'The sound devices are alliteration, assonance, '
    + 'consonance and onomatopoeia.',

  mechanism:
    'The marking of this topic is unusually predictable, '
    + 'so it is worth stating the shape of a full answer '
    + 'before any device is discussed. '
    + 'Four parts. '
    + 'Quote the words. '
    + 'Name the device. '
    + 'Explain the effect. '
    + 'Link it to the theme. '
    + 'One mark, one mark, two marks, and the top band. '
    + 'A candidate who writes the writer uses a metaphor '
    + 'has written the second part only '
    + 'and has one mark from five. '
    + 'The part that distinguishes Literature from English Language '
    + 'is the fourth. '
    + 'In a comprehension paper it is enough to say '
    + 'that the metaphor makes the market sound unbearably hot. '
    + 'In Literature the answer continues: '
    + 'and the heat belongs to a pattern of images of burning '
    + 'that runs through the work, '
    + 'which keeps the reader aware '
    + 'that the pressure on the character is not only financial. '
    + 'That final clause is what the top band is for, '
    + 'and it cannot be written by a candidate '
    + 'who has prepared devices without reading the text. '
    + 'Now the explaining itself, which is where candidates stall. '
    + 'The way to explain a comparison '
    + 'is to ask what the two things have in common '
    + 'and what else the second thing brings with it. '
    + 'Take a plain example written for this lesson. '
    + 'His promises were harmattan rain. '
    + 'What do promises and harmattan rain share? '
    + 'Harmattan is the dry season, '
    + 'so rain then is rare and brief. '
    + 'So the promises are rare and brief. '
    + 'But notice what else the image brings: '
    + 'harmattan rain is also longed for, '
    + 'and it raises hope before it stops. '
    + 'So the metaphor says more than that the promises were few. '
    + 'It says the people believed them each time. '
    + 'That extra meaning is the effect, '
    + 'and finding it is the skill being examined. '
    + 'A simile with like would have done less, '
    + 'because like keeps the two things separate '
    + 'and admits the comparison is only a comparison, '
    + 'while the metaphor asserts the identity and is therefore stronger. '
    + 'If a question asks why the writer chose a metaphor '
    + 'rather than a simile, that is the answer. '
    + 'Here is where marks are lost. '
    + 'The first is treating imagery as a synonym for visual description. '
    + 'A question asking for examples of imagery in a poem '
    + 'expects more than pictures. '
    + 'The clang of the gate is auditory imagery. '
    + 'The sticky heat of the room is tactile. '
    + 'The smell of the harbour is olfactory. '
    + 'Finding three senses rather than one '
    + 'turns a two mark answer into a five mark one. '
    + 'The second is confusing a symbol with a metaphor. '
    + 'A metaphor is local: it occurs in one place and does its work. '
    + 'A symbol recurs, '
    + 'and each appearance adds to what it carries, '
    + 'so by the end it means more than it did at first. '
    + 'A broken gate mentioned once is a detail. '
    + 'A broken gate returned to in four chapters '
    + 'has become a symbol of the family decline, '
    + 'and the evidence for calling it a symbol is the recurrence. '
    + 'Say that it recurs. '
    + 'The third is confusing metonymy with synecdoche, '
    + 'and the test is simple. '
    + 'Is the substitute part of the thing? '
    + 'Hands for workers is synecdoche, '
    + 'because hands are part of a worker. '
    + 'The crown for the monarchy is metonymy, '
    + 'because a crown is associated with a monarch '
    + 'and is not part of one. '
    + 'The fourth is irony. '
    + 'Candidates label anything unfortunate as irony. '
    + 'Irony requires a gap between what is said and what is meant, '
    + 'or between what is expected and what occurs. '
    + 'A man drowning is a misfortune. '
    + 'A champion swimmer drowning in shallow water '
    + 'is irony, '
    + 'because the outcome reverses what his skill led us to expect. '
    + 'Name the gap, and the mark is secure. '
    + 'What has to be written down, every time, '
    + 'is the quotation. '
    + 'An effect discussed without the words in front of the examiner '
    + 'cannot be credited, '
    + 'and the quotation must be exact and in quotation marks.',

  recap:
    'You can spot a simile and a metaphor '
    + 'and say what they compare. '
    + 'This widens the range of devices, '
    + 'and asks you to carry the effect through to the theme.',

  method: [
    'Quote the words exactly, in quotation marks.',
    'Name the device precisely.',
    'For imagery, say which sense is engaged.',
    'For a comparison, say what the two things share.',
    'Say what else the image brings with it.',
    'State the effect on the reader.',
    'Link the effect to the theme of the whole work.',
    'For a symbol, say that it recurs, which is the evidence.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Identify the imagery in these lines, written for this lesson, '
        + 'and name the sense engaged: '
        + 'the gate clanged; the air was thick and sticky; '
        + 'the yard smelt of wet earth.',
      steps: [
        'Clanged appeals to hearing.',
        'Thick and sticky appeals to touch.',
        'Smelt of wet earth appeals to smell.',
      ],
      answer: 'Clanged is auditory imagery. '
        + 'Thick and sticky is tactile imagery. '
        + 'The smell of wet earth is olfactory imagery. '
        + 'Naming three different senses rather than calling all of it '
        + 'description '
        + 'is what earns the marks, '
        + 'because imagery is not only visual.',
    },
    {
      level: 4,
      ask: 'Explain the effect of the metaphor '
        + 'his promises were harmattan rain, '
        + 'and say why a metaphor was chosen rather than a simile.',
      steps: [
        'Harmattan is the dry season, so rain then is rare and brief.',
        'So the promises were rare and brief.',
        'Harmattan rain is also longed for and raises hope.',
        'So the people believed the promises each time.',
        'A metaphor asserts identity; a simile only compares.',
      ],
      answer: 'Harmattan is the dry season, '
        + 'so rain in it is rare and soon over, '
        + 'and the metaphor therefore says the promises '
        + 'were few and short lived. '
        + 'But harmattan rain is also longed for, '
        + 'and it raises hope before it stops, '
        + 'so the image also tells us the people believed him each time, '
        + 'which is the sharper point. '
        + 'A metaphor was chosen rather than a simile '
        + 'because a simile with like would keep the two things apart '
        + 'and admit that the comparison is only a comparison, '
        + 'while the metaphor states the identity outright '
        + 'and so carries more force.',
    },
    {
      level: 4,
      ask: 'Distinguish a metaphor from a symbol, '
        + 'and say what evidence proves something is a symbol.',
      steps: [
        'A metaphor is local and does its work once.',
        'A symbol recurs and accumulates meaning.',
        'The evidence is the recurrence.',
      ],
      answer: 'A metaphor occurs in one place '
        + 'and makes its comparison there. '
        + 'A symbol is an object or image that recurs through a work, '
        + 'gathering meaning with each appearance, '
        + 'so that by the end it stands for an idea '
        + 'larger than itself. '
        + 'A broken gate mentioned once is a detail. '
        + 'A broken gate returned to in four chapters, '
        + 'each time at a moment of loss, '
        + 'has become a symbol of the family decline. '
        + 'The evidence for calling it a symbol is the recurrence, '
        + 'and an answer must point to it.',
    },
    {
      level: 5,
      ask: 'A champion swimmer drowns in shallow water. '
        + 'Is this irony? '
        + 'Explain, and name the gap involved.',
      steps: [
        'Irony needs a gap, not merely misfortune.',
        'Here the expectation is set by his skill.',
        'The outcome reverses that expectation.',
        'So the gap is between expectation and event.',
      ],
      answer: 'Yes, it is irony, specifically situational irony. '
        + 'Irony is not simply misfortune: '
        + 'a man drowning is sad but not ironic. '
        + 'Here his being a champion swimmer '
        + 'creates the expectation that water is the one danger '
        + 'he is safe from, '
        + 'and the shallowness of the water strengthens that expectation '
        + 'further. '
        + 'The outcome reverses it completely, '
        + 'and the gap between what was expected and what occurred '
        + 'is where the irony lies. '
        + 'Naming the gap is what secures the mark, '
        + 'because candidates who simply label every sad event as irony '
        + 'cannot be credited.',
    },
  ],

  traps: [
    {
      mistake: 'Treating imagery as visual description only.',
      why: 'There is auditory, tactile, olfactory, gustatory '
        + 'and kinaesthetic imagery. '
        + 'Finding three senses multiplies the marks.',
    },
    {
      mistake: 'Calling a single mention a symbol.',
      why: 'A symbol recurs and accumulates meaning. '
        + 'The recurrence is the evidence and must be pointed to.',
    },
    {
      mistake: 'Confusing metonymy with synecdoche.',
      why: 'Ask whether the substitute is part of the thing. '
        + 'Hands for workers is synecdoche; '
        + 'the crown for the monarchy is metonymy.',
    },
    {
      mistake: 'Labelling any misfortune as irony.',
      why: 'Irony needs a gap between what is said and meant, '
        + 'or expected and occurring. '
        + 'Name the gap.',
    },
  ],

  extension:
    'A pattern of images running through a work '
    + 'is called a motif, '
    + 'and tracing one is the most reliable way '
    + 'to write about a text as a whole rather than scene by scene. '
    + 'Choose an image that recurs, '
    + 'such as drought, or doors, or the sound of drums. '
    + 'Note each place it appears and what is happening there. '
    + 'The pattern usually turns out to track a change: '
    + 'the image appears in one sense early '
    + 'and in an altered sense late, '
    + 'and the alteration is the argument of the work. '
    + 'An essay built this way has a thesis '
    + 'rather than a summary, '
    + 'which is the difference between the top two bands.',

  questions: [
    {
      id: 'fig-1',
      ask: 'The clang of a gate is an example of:',
      kind: 'choice',
      options: [
        'auditory imagery',
        'visual imagery',
        'tactile imagery',
      ],
      answer: 'auditory imagery',
      teach: 'It appeals to hearing. '
        + 'Imagery is not only visual, and naming the sense earns the '
        + 'mark.',
      level: 3,
    },
    {
      id: 'fig-2',
      ask: 'Hands for workers is an example of:',
      kind: 'choice',
      options: ['synecdoche', 'metonymy', 'personification'],
      answer: 'synecdoche',
      teach: 'Hands are part of a worker. '
        + 'Metonymy substitutes something merely associated, '
        + 'like the crown for the monarchy.',
      level: 4,
    },
    {
      id: 'fig-3',
      ask: 'What proves that an image is functioning as a symbol?',
      kind: 'choice',
      options: [
        'it recurs and gathers meaning',
        'it is very vivid',
        'it appears in the title',
      ],
      answer: 'it recurs and gathers meaning',
      teach: 'A single mention is a detail or a metaphor. '
        + 'The recurrence is the evidence.',
      level: 5,
    },
    {
      id: 'fig-4',
      ask: 'A metaphor is stronger than a simile because it:',
      kind: 'choice',
      options: [
        'asserts that one thing is the other',
        'is shorter',
        'uses more senses',
      ],
      answer: 'asserts that one thing is the other',
      teach: 'Like or as keeps the two apart '
        + 'and admits the comparison is only a comparison.',
      level: 4,
    },
    {
      id: 'fig-5',
      ask: 'How many marks does naming a device usually earn '
        + 'in a five mark question?',
      kind: 'numeric',
      options: [],
      answer: '1',
      teach: 'One. '
        + 'The quotation is one, the effect two, '
        + 'and the link to the theme carries the top band.',
      level: 4,
    },
  ],
})

/* ── literary terms ─────────────────────────────────────────────────────── */

teach({
  topicId: 'literary-terms-lit',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Plot is the arranged sequence of events, '
      + 'and it is not the same as the story. '
      + 'Theme is what the work is about, stated as an idea. '
      + 'Character is who acts, and characterisation is how we learn it. '
      + 'Setting is the time and place, and it does work. '
      + 'Tone is the attitude of the writer. '
      + 'Point of view is who tells it, and it limits what can be known.',
    method: [
      'State a theme as a full idea, not a single word.',
      'Separate plot from story: plot is the arrangement.',
      'For character, give the evidence as well as the trait.',
      'For point of view, say what the chosen teller cannot know.',
      'For tone, name the attitude and quote the words that carry it.',
    ],
  },

  idea:
    'Plot is the sequence of events as the writer arranges them, '
    + 'which may not be the order in which they happened. '
    + 'Its usual parts are exposition, which sets the situation; '
    + 'rising action; climax, the point of greatest tension; '
    + 'falling action; and resolution or denouement. '
    + 'Conflict drives a plot, '
    + 'and it may be between characters, '
    + 'between a character and society, '
    + 'between a character and nature, '
    + 'or within a character. '
    + 'Theme is the idea the work explores. '
    + 'It is stated as a proposition, not as a topic word. '
    + 'Character means the people in the work. '
    + 'The protagonist is the central character '
    + 'and the antagonist opposes. '
    + 'A round character is complex and may change; '
    + 'a flat character has few traits and does not. '
    + 'Characterisation is the means by which a writer reveals character: '
    + 'direct statement, speech, action, '
    + 'the opinion of other characters, '
    + 'and appearance. '
    + 'Setting is the time, place and social conditions of the work. '
    + 'Tone is the attitude of the writer or speaker '
    + 'towards the subject, '
    + 'and mood is the feeling created in the reader. '
    + 'Point of view is the position from which the story is told: '
    + 'first person, where a character narrates as I; '
    + 'third person limited, following one character knowledge; '
    + 'or third person omniscient, knowing everything. '
    + 'Style is the characteristic way a writer uses language. '
    + 'Suspense is uncertainty deliberately maintained, '
    + 'and foreshadowing is an early hint of what is to come.',

  mechanism:
    'Three of these terms are regularly used wrongly, '
    + 'and each error has a clean correction '
    + 'that is worth more than knowing the definition. '
    + 'The first is theme. '
    + 'Candidates write that the theme is corruption. '
    + 'That is a topic, not a theme. '
    + 'A theme is what the work says about the topic, '
    + 'so it must be a full idea with a verb in it: '
    + 'that corruption survives because the people who could end it '
    + 'benefit from it, '
    + 'or that corruption degrades the person who submits to it '
    + 'as much as the one who demands it. '
    + 'Those can be argued about and supported from the text, '
    + 'which is why they earn marks. '
    + 'The one word answer cannot be supported '
    + 'because it does not claim anything. '
    + 'The test is whether somebody could disagree with it. '
    + 'If nobody could, it is not a theme. '
    + 'The second is plot against story. '
    + 'The story is what happened, in the order it happened. '
    + 'The plot is how the writer chose to arrange it. '
    + 'A novel that opens with a funeral '
    + 'and then goes back twenty years '
    + 'has the same story as one told in order '
    + 'and a quite different plot, '
    + 'and the difference is a choice with effects. '
    + 'Opening at the funeral means the reader '
    + 'knows the ending from the first page, '
    + 'so the interest shifts from what happened to why, '
    + 'and every scene is read in the shadow of what it leads to. '
    + 'A question asking about the structure of a work '
    + 'is asking for exactly that reasoning, '
    + 'and retelling the events in order answers the wrong question. '
    + 'So the commonest failure in a Literature essay '
    + 'is narration where argument was wanted. '
    + 'If a paragraph could be summarised as and then this happened, '
    + 'it is narrative and it is wasting the page. '
    + 'The third is point of view, '
    + 'which candidates identify correctly and then say nothing about. '
    + 'The reason point of view is examined '
    + 'is that it decides what the reader can and cannot know, '
    + 'and that limitation shapes everything. '
    + 'A first person narrator can be mistaken, '
    + 'can lie, '
    + 'and cannot report what happens in another room. '
    + 'So a work told in the first person '
    + 'can produce a particular effect: '
    + 'the reader gradually realises '
    + 'that the narrator is not to be trusted, '
    + 'which is impossible with an omniscient narrator. '
    + 'Third person limited restricts the reader to one character '
    + 'knowledge, '
    + 'which creates suspense '
    + 'because the reader is as much in the dark as she is. '
    + 'Omniscient narration can tell us '
    + 'what two characters each privately believe, '
    + 'which lets the reader see a misunderstanding '
    + 'that neither character can see, '
    + 'and that is one source of dramatic irony in prose. '
    + 'So the answer to why did the writer choose this point of view '
    + 'is always about what it allows and what it withholds. '
    + 'Characterisation has its own discipline. '
    + 'State the trait, then give the evidence, '
    + 'and prefer evidence from action over evidence from statement, '
    + 'because what a character does is harder to argue with '
    + 'than what the narrator says of him. '
    + 'If a character is said to be generous '
    + 'and then refuses his brother money, '
    + 'the action governs, '
    + 'and noticing the contradiction is a strong point '
    + 'rather than a confusion. '
    + 'Tone is the term most often left vague. '
    + 'Do not write that the tone is interesting or good. '
    + 'Name the attitude with an adjective that could be wrong: '
    + 'bitter, resigned, affectionate, mocking, detached. '
    + 'Then quote the words that produce it, '
    + 'because tone is carried by word choice '
    + 'and an unquoted claim about tone cannot be checked. '
    + 'What has to be written down in any essay in this subject '
    + 'is the point, the evidence, the explanation and the link. '
    + 'Four parts to every paragraph. '
    + 'A paragraph missing the explanation '
    + 'is a quotation with no argument, '
    + 'and a paragraph missing the evidence '
    + 'is an assertion the examiner cannot credit.',

  recap:
    'You have described a story and said who the characters were. '
    + 'This gives the exact words for talking about a text, '
    + 'and shows what each term is for.',

  method: [
    'For a theme, write a full idea with a verb, '
      + 'and check that somebody could disagree with it.',
    'For plot, describe the arrangement and its effect, '
      + 'not the order of events.',
    'For character, state the trait and then give the evidence.',
    'Prefer evidence from action over narrator statement.',
    'For point of view, say what it allows and what it withholds.',
    'For tone, name the attitude with a precise adjective and quote the '
      + 'words.',
    'Build every paragraph as point, evidence, explanation, link.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A candidate writes that the theme of a novel is poverty. '
        + 'Why is that not a theme, and how should it be written?',
      steps: [
        'Poverty is a topic.',
        'A theme says something about the topic.',
        'It must be arguable.',
      ],
      answer: 'Poverty is a topic, not a theme, '
        + 'because it makes no claim '
        + 'and so nothing in the text can support or contradict it. '
        + 'A theme is a full idea: '
        + 'that poverty narrows a person choices '
        + 'until the wrong choice becomes the only one available, '
        + 'or that poverty is sustained by the respectability '
        + 'of those who profit from it. '
        + 'Each of those could be disagreed with, '
        + 'which is why each can be argued and marked.',
    },
    {
      level: 4,
      ask: 'Distinguish plot from story, '
        + 'and explain the effect of a novel that opens with a funeral '
        + 'and then goes back twenty years.',
      steps: [
        'Story is the events in their actual order.',
        'Plot is the arrangement chosen by the writer.',
        'Opening at the end reveals the outcome.',
        'So the reader interest moves from what to why.',
      ],
      answer: 'The story is what happened, in the order it happened. '
        + 'The plot is how the writer arranged it. '
        + 'A novel that opens with a funeral and then goes back '
        + 'has the same story as one told in sequence '
        + 'but a different plot. '
        + 'Its effect is that the reader knows the outcome '
        + 'from the first page, '
        + 'so the interest shifts from what will happen to why it '
        + 'happened, '
        + 'and every later scene is read in the knowledge '
        + 'of where it leads, '
        + 'which gives ordinary moments a weight '
        + 'they would not otherwise carry.',
    },
    {
      level: 4,
      ask: 'What does a first person point of view allow a writer to do '
        + 'that an omniscient narrator cannot?',
      steps: [
        'A first person narrator may be mistaken or lying.',
        'The reader can be led to doubt the narrator.',
        'An omniscient narrator is assumed reliable.',
        'But first person cannot report another room.',
      ],
      answer: 'It allows the narrator to be unreliable. '
        + 'Because the account comes from inside the story, '
        + 'the narrator may be mistaken, self serving, or lying, '
        + 'and the reader can be led to notice the gaps '
        + 'and to form a view of events '
        + 'different from the one being told. '
        + 'An omniscient narrator is taken as reliable, '
        + 'so this effect is not available. '
        + 'The cost is that a first person narrator '
        + 'cannot report what happens where she is not present, '
        + 'so the writer must find another way '
        + 'to bring that information in.',
    },
    {
      level: 5,
      ask: 'A character is described as generous, '
        + 'and later refuses his brother a small loan. '
        + 'How should an essay treat this?',
      steps: [
        'Note the contradiction rather than choosing one side.',
        'Prefer the evidence of action.',
        'Ask who said he was generous, and why.',
        'Link it to characterisation and perhaps to theme.',
      ],
      answer: 'The contradiction is the point and should be written about '
        + 'rather than resolved away. '
        + 'Action is stronger evidence than statement, '
        + 'so the refusal tells us more than the description. '
        + 'The essay should also ask who called him generous: '
        + 'if it was the narrator, the narrator may be limited or ironic; '
        + 'if it was another character, '
        + 'it may show how he is seen rather than how he is, '
        + 'which is itself characterisation. '
        + 'Either way the gap between reputation and conduct '
        + 'is likely to carry a theme, '
        + 'and a paragraph that names the gap, '
        + 'quotes both the description and the refusal, '
        + 'explains the discrepancy '
        + 'and links it to the theme '
        + 'has all four parts a Literature paragraph needs.',
    },
  ],

  traps: [
    {
      mistake: 'Giving a theme as a single word such as corruption.',
      why: 'That is a topic. '
        + 'A theme is a full idea with a verb, '
        + 'and somebody must be able to disagree with it.',
    },
    {
      mistake: 'Retelling the events when asked about structure.',
      why: 'Plot is the arrangement and its effect. '
        + 'If a paragraph reads as and then this happened, '
        + 'it is narrative and earns little.',
    },
    {
      mistake: 'Naming the point of view and stopping.',
      why: 'The reason it matters is what it allows and withholds. '
        + 'First person permits an unreliable narrator; '
        + 'omniscience permits dramatic irony.',
    },
    {
      mistake: 'Describing a tone as interesting or good.',
      why: 'Name an attitude that could be wrong: '
        + 'bitter, resigned, mocking, detached, '
        + 'and quote the words that carry it.',
    },
  ],

  extension:
    'The strongest essays in this subject are built on a tension '
    + 'rather than on a list. '
    + 'Instead of giving four themes, '
    + 'find two things in the work that pull against each other: '
    + 'a character whose virtue causes the harm, '
    + 'a setting that is both home and trap, '
    + 'a narrator whose sympathy the reader comes to distrust. '
    + 'State the tension in the introduction '
    + 'and let each paragraph develop one side of it, '
    + 'with the conclusion saying what the tension amounts to. '
    + 'An essay organised this way has an argument that could be wrong, '
    + 'which is the condition of its being worth making.',

  questions: [
    {
      id: 'lit-1',
      ask: 'Which is a theme rather than a topic?',
      kind: 'choice',
      options: [
        'that tradition protects a community and also confines it',
        'tradition',
        'village life',
      ],
      answer: 'that tradition protects a community and also confines it',
      teach: 'A theme is a full idea somebody could disagree with. '
        + 'The other two are subjects, not claims.',
      level: 4,
    },
    {
      id: 'lit-2',
      ask: 'The arrangement of events as the writer presents them is the:',
      kind: 'choice',
      options: ['plot', 'story', 'setting'],
      answer: 'plot',
      teach: 'The story is what happened in order. '
        + 'The plot is the chosen arrangement, and it has effects.',
      level: 3,
    },
    {
      id: 'lit-3',
      ask: 'The point of greatest tension in a plot is the:',
      kind: 'choice',
      options: ['climax', 'exposition', 'resolution'],
      answer: 'climax',
      teach: 'Exposition sets the situation and resolution settles it.',
      level: 2,
    },
    {
      id: 'lit-4',
      ask: 'An unreliable narrator is possible mainly with which point of '
        + 'view?',
      kind: 'choice',
      options: [
        'first person',
        'third person omniscient',
        'none of them',
      ],
      answer: 'first person',
      teach: 'The account comes from inside the story, '
        + 'so it can be mistaken or self serving. '
        + 'An omniscient narrator is taken as reliable.',
      level: 5,
    },
    {
      id: 'lit-5',
      ask: 'A Literature paragraph should contain point, evidence, '
        + 'explanation and:',
      kind: 'choice',
      options: [
        'a link to the theme',
        'a summary of the chapter',
        'the name of the author',
      ],
      answer: 'a link to the theme',
      teach: 'Four parts. '
        + 'The link is what lifts a paragraph into the top band.',
      level: 4,
    },
  ],
})
