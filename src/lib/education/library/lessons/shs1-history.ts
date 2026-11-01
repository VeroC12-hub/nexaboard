/**
 * Stored lessons for SHS 1 Elective History.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── Why the method comes before the content ───────────────────────────────
 *
 * The first three topics here are about evidence, and they come first
 * because everything after them depends on them. A learner who has not
 * grasped that a source was written by somebody, for somebody, with
 * something at stake, will read a European trader's account of Asante as
 * though it were a photograph. The three states topics that follow are
 * then taught as arguments from evidence rather than as lists of kings:
 * what we know, how we know it, and where the evidence runs out.
 *
 * ── On contested history ──────────────────────────────────────────────────
 *
 * Several of these topics are genuinely argued about by historians:
 * when particular migrations occurred, how far oral traditions of origin
 * record movement rather than claim legitimacy, how much of Asante unity
 * was consent and how much was force. These lessons say which facts are
 * agreed, give the competing readings as readings, and leave the learner
 * to argue. A WASSCE question that says discuss or assess is marked on the
 * reasoning, so handing a learner a verdict to memorise would fail them.
 *
 * ── Dates ─────────────────────────────────────────────────────────────────
 *
 * Dates are given where they are reasonably settled and hedged where they
 * are not, because a confident wrong date is worse than an honest
 * approximation and examiners accept about and in the later part of.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── primary and secondary sources ──────────────────────────────────────── */

teach({
  topicId: 'history-sources',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A primary source comes from the time being studied. '
      + 'A secondary source was made later, from primary ones. '
      + 'The test is the date of the source, '
      + 'not whether it is written or spoken. '
      + 'Primary sources are closer to the event '
      + 'and usually narrower and more partial. '
      + 'Secondary sources give the wider picture '
      + 'and carry the writer own judgements.',
    method: [
      'Ask when the source was made, relative to the event.',
      'From the time means primary; made later means secondary.',
      'State one strength and one limitation of each.',
      'Say what question each source is good for answering.',
      'Never assume primary means reliable.',
    ],
  },

  idea:
    'A primary source comes from the time of the events. '
    + 'It may also come from somebody who took part in them. '
    + 'Written primary sources include letters and treaties. '
    + 'They also include court records, diaries, '
    + 'ships logs, newspapers of the day '
    + 'and government reports. '
    + 'Primary sources need not be written at all. '
    + 'Pottery, tools, beads, buildings and coins are primary. '
    + 'So are photographs '
    + 'and the testimony of somebody who was there. '
    + 'A secondary source was made later, from primary ones. '
    + 'A textbook is one. '
    + 'So are a biography, a journal article and a documentary. '
    + 'The test is when the source was made. '
    + 'It is not whether the source is written or spoken. '
    + 'It is not whether the source is reliable. '
    + 'A primary source has the advantage of closeness. '
    + 'It was made by somebody who was there. '
    + 'Its limitation is narrowness. '
    + 'A participant sees only part, '
    + 'and usually wants something. '
    + 'A secondary source has the advantage of perspective. '
    + 'It draws many sources together, '
    + 'and it knows how matters turned out. '
    + 'Its limitation is distance. '
    + 'It also carries the views of its own writer and time. '
    + 'Historians use both kinds. '
    + 'Checking one source against another is corroboration.',

  mechanism:
    'The error that costs most marks in this topic '
    + 'is believing that primary means true. '
    + 'It does not. '
    + 'Primary describes when a source was made, '
    + 'and says nothing about whether it is accurate. '
    + 'A soldier letter home is a primary source '
    + 'and may be wrong about everything beyond his own view. '
    + 'A treaty is a primary source '
    + 'and records what was written down, '
    + 'which may not be what either side understood. '
    + 'A European trader report of an inland kingdom '
    + 'is a primary source '
    + 'and he may never have been inland. '
    + 'So the sentence to hold is that primary sources are closer, '
    + 'not truer, '
    + 'and the proper use of a primary source '
    + 'is to ask what its maker was in a position to know. '
    + 'The second point, which separates a good candidate, '
    + 'is that a source can be primary for one question '
    + 'and secondary for another. '
    + 'A textbook written in 1960 about the Asante wars '
    + 'is a secondary source for those wars. '
    + 'It is a primary source for what was taught in Ghanaian schools '
    + 'in 1960, '
    + 'and for the views of its author generation. '
    + 'Nothing about the book changed; the question changed. '
    + 'A candidate who makes that point '
    + 'has understood that primary and secondary describe a relation '
    + 'between a source and a question, '
    + 'not a property of the document, '
    + 'and it is a top band observation. '
    + 'The third is the strength and limitation pairing, '
    + 'which examinations ask for directly '
    + 'and candidates answer vaguely. '
    + 'State them as a pair, '
    + 'and make the limitation the shadow of the strength. '
    + 'The strength of a primary source is closeness; '
    + 'the limitation that follows from closeness is narrowness. '
    + 'The strength of a secondary source is perspective; '
    + 'the limitation that follows from perspective is distance. '
    + 'Written that way the pairs are easy to remember '
    + 'because each one explains the other. '
    + 'The fourth is unwritten evidence, '
    + 'which is especially important in West African history '
    + 'and which candidates forget. '
    + 'For most of the Ghanaian past there are no local written records, '
    + 'so the primary evidence is archaeological and oral. '
    + 'Excavated pottery at Begho tells us about trade '
    + 'because the clay and the forms can be traced to their origin. '
    + 'Beads tell us about long distance exchange. '
    + 'Iron slag tells us about smelting. '
    + 'None of it was written and all of it is primary. '
    + 'A question asking for sources of Ghanaian history '
    + 'expects archaeology, oral tradition, '
    + 'written European records, and linguistic evidence, '
    + 'and an answer giving only documents '
    + 'has left out most of the available past. '
    + 'What has to be written down is the reason for the '
    + 'classification. '
    + 'Not that the treaty is a primary source, '
    + 'but that the treaty is a primary source '
    + 'because it was drawn up at the time by the parties themselves. '
    + 'The because clause is the mark.',

  recap:
    'You know that history is found out from evidence. '
    + 'This divides the evidence by when it was made, '
    + 'and asks what each kind is good for.',

  method: [
    'Identify the event and the period being studied.',
    'Ask when the source was made relative to that period.',
    'From the period means primary; later means secondary.',
    'Give the reason for the classification in a because clause.',
    'State the strength, then the limitation that follows from it.',
    'Say which question the source is good for answering.',
    'Remember archaeology and oral testimony as primary evidence.',
    'Check one source against another, which is corroboration.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Classify each as primary or secondary, with a reason: '
        + 'a treaty signed in 1874; '
        + 'a school textbook published in 2015 about 1874; '
        + 'excavated pottery from the fifteenth century.',
      steps: [
        'Ask when each was made relative to the event.',
      ],
      answer: 'The treaty is primary, '
        + 'because it was drawn up at the time by the parties involved. '
        + 'The textbook is secondary, '
        + 'because it was written much later from other sources. '
        + 'The pottery is primary, '
        + 'because it was made and used in the period being studied, '
        + 'and it is primary even though nothing is written on it.',
    },
    {
      level: 4,
      ask: 'Give one strength and one limitation of a primary source, '
        + 'and of a secondary source.',
      steps: [
        'Make each limitation follow from the strength.',
      ],
      answer: 'A primary source is close to the event, '
        + 'since it was made by somebody who was there, '
        + 'which is its strength. '
        + 'Its limitation follows from that closeness: '
        + 'a participant sees only part of what happened '
        + 'and usually has an interest in how it is recorded. '
        + 'A secondary source has perspective, '
        + 'drawing many sources together '
        + 'and knowing how matters turned out, '
        + 'which is its strength. '
        + 'Its limitation follows from that distance: '
        + 'it was not there, '
        + 'and it carries the assumptions of its own writer and time.',
    },
    {
      level: 4,
      ask: 'Name four kinds of source for the history of pre-colonial '
        + 'Ghana, '
        + 'and say what each can tell us.',
      steps: [
        'There are almost no local written records for most of the '
          + 'period.',
        'So archaeology and oral tradition carry much of the weight.',
      ],
      answer: 'Archaeological evidence such as pottery, beads, iron slag '
        + 'and building remains, '
        + 'which can show settlement, craft production and trade routes. '
        + 'Oral tradition, which preserves lines of succession, '
        + 'migrations and institutions. '
        + 'Written records left by Arab and later European visitors, '
        + 'which give dates and outside descriptions. '
        + 'Linguistic evidence, '
        + 'since relationships between languages '
        + 'indicate how populations separated and moved. '
        + 'An answer giving only documents '
        + 'leaves out most of the available evidence for the period.',
    },
    {
      level: 5,
      ask: 'Can one source be both primary and secondary? '
        + 'Explain with an example.',
      steps: [
        'The classification relates a source to a question.',
        'Change the question and the classification may change.',
      ],
      answer: 'Yes, because primary and secondary describe the relation '
        + 'between a source and the question being asked, '
        + 'not a fixed property of the document. '
        + 'A history textbook published in 1960 '
        + 'is a secondary source for the events it describes, '
        + 'since it was written long after them from other sources. '
        + 'It is a primary source for what Ghanaian schools were taught '
        + 'in 1960, '
        + 'and for the assumptions of the historians of that generation, '
        + 'because for those questions it comes from the period itself. '
        + 'Nothing about the book changed, only the question.',
    },
  ],

  traps: [
    {
      mistake: 'Treating primary as meaning reliable.',
      why: 'Primary describes when the source was made. '
        + 'A participant can be mistaken, partial or lying.',
    },
    {
      mistake: 'Thinking only written material can be a primary source.',
      why: 'Pottery, beads, iron slag and oral testimony are primary '
        + 'too, '
        + 'and for most of the Ghanaian past they are the main evidence.',
    },
    {
      mistake: 'Classifying a source without a reason.',
      why: 'The because clause is the mark. '
        + 'Say that it was drawn up at the time by the parties '
        + 'themselves.',
    },
    {
      mistake: 'Treating the classification as fixed for all questions.',
      why: 'A 1960 textbook is secondary for 1874 '
        + 'and primary for what was taught in 1960.',
    },
  ],

  extension:
    'Historians now use evidence earlier generations did not have. '
    + 'Some of it is changing old accounts. '
    + 'Studies of genetic variation across populations '
    + 'can test whether two groups split recently or long ago. '
    + 'Pollen in lake sediment can be analysed. '
    + 'It shows when forest was cleared for farming in a district, '
    + 'and so dates settlement with no document at all. '
    + 'Radiocarbon dating gives ages for excavated material. '
    + 'Oral tradition can only place such material '
    + 'in a sequence of reigns. '
    + 'None of this replaces the older evidence. '
    + 'What it gives is an independent check, '
    + 'and that is the whole purpose of corroboration.',

  questions: [
    {
      id: 'src-1',
      ask: 'A diary written during the events it describes is:',
      kind: 'choice',
      options: ['a primary source', 'a secondary source', 'neither'],
      answer: 'a primary source',
      teach: 'It comes from the period itself. '
        + 'That is the test, not whether it is accurate.',
      level: 2,
    },
    {
      id: 'src-2',
      ask: 'Excavated pottery from the fifteenth century is:',
      kind: 'choice',
      options: [
        'a primary source',
        'a secondary source',
        'not a historical source',
      ],
      answer: 'a primary source',
      teach: 'Primary sources need not be written. '
        + 'For most of the Ghanaian past they are mostly not.',
      level: 3,
    },
    {
      id: 'src-3',
      ask: 'Primary does not mean:',
      kind: 'choice',
      options: ['reliable', 'from the period', 'close to the event'],
      answer: 'reliable',
      teach: 'A participant may be mistaken or may have an interest. '
        + 'Ask what the maker was in a position to know.',
      level: 4,
    },
    {
      id: 'src-4',
      ask: 'The limitation that follows from the closeness '
        + 'of a primary source is:',
      kind: 'choice',
      options: [
        'narrowness of view',
        'lack of detail',
        'being written late',
      ],
      answer: 'narrowness of view',
      teach: 'A participant sees only part. '
        + 'Each limitation should be the shadow of the strength.',
      level: 4,
    },
    {
      id: 'src-5',
      ask: 'A 1960 textbook about 1874 is a primary source for:',
      kind: 'choice',
      options: [
        'what was taught in 1960',
        'the events of 1874',
        'nothing at all',
      ],
      answer: 'what was taught in 1960',
      teach: 'The classification relates a source to a question. '
        + 'Change the question and it can change.',
      level: 5,
    },
  ],
})

/* ── oral tradition as evidence ─────────────────────────────────────────── */

teach({
  topicId: 'oral-tradition',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Oral tradition is information passed by word of mouth '
      + 'across generations. '
      + 'It preserves some things well: '
      + 'lines of succession, institutions, migrations, '
      + 'and what a community holds about itself. '
      + 'It preserves other things badly: '
      + 'absolute dates, exact numbers, '
      + 'and anything a ruling line had reason to adjust. '
      + 'So it is used with the grain and checked against other '
      + 'evidence.',
    method: [
      'Say what kind of information is being claimed.',
      'Ask who kept the tradition and in what setting.',
      'Ask whose authority the tradition supports.',
      'Use it for sequence and institution, not for exact dates.',
      'Check it against archaeology, language or written records.',
    ],
  },

  idea:
    'Oral tradition is testimony about the past '
    + 'passed by word of mouth across generations. '
    + 'It takes several forms. '
    + 'There are narratives of origin and migration. '
    + 'There are king lists and genealogies. '
    + 'There are drum and horn texts. '
    + 'There are appellations and praise poetry. '
    + 'There are proverbs and songs, '
    + 'and the formal recitations of festivals and funerals. '
    + 'In many Ghanaian states the keeping of it was an office. '
    + 'A linguist, or okyeame, held that duty. '
    + 'In some courts a drummer or a stool keeper did. '
    + 'The holder had to pass the text on exactly, '
    + 'and apprentices learned it word for word over years. '
    + 'Where that discipline held, '
    + 'the tradition is far steadier than casual memory. '
    + 'Oral tradition is a primary source '
    + 'when it comes from somebody who took part. '
    + 'It is a transmitted source '
    + 'when it has passed through generations. '
    + 'Historians examine it as they examine a document. '
    + 'Who kept it? '
    + 'For what occasion? '
    + 'In whose interest? '
    + 'And what independent evidence agrees or disagrees?',

  mechanism:
    'The useful question about oral tradition '
    + 'is not whether it is true but what it is good at. '
    + 'Two things it preserves well, and for a reason. '
    + 'The first is sequence. '
    + 'A king list gives the order of reigns reliably '
    + 'because the order is what the list is for, '
    + 'and because a mistake in it '
    + 'would be noticed by rival lineages at once. '
    + 'The second is institution. '
    + 'How a stool is inherited, '
    + 'which lineage provides which officeholder, '
    + 'what a particular oath commits a chief to: '
    + 'these are rehearsed constantly '
    + 'because somebody acts on them every year, '
    + 'and a tradition that got them wrong '
    + 'would be corrected by the people it inconvenienced. '
    + 'Now two things it preserves badly, also for a reason. '
    + 'The first is absolute dating. '
    + 'A tradition says this happened in the reign of such a king, '
    + 'which fixes it in a sequence, '
    + 'and nobody counted the years. '
    + 'Historians convert reigns to dates '
    + 'by estimating an average reign length, '
    + 'which is a rough method and known to be rough. '
    + 'So a tradition can tell you that one event preceded another '
    + 'and cannot tell you that it happened in 1620. '
    + 'The second is numbers. '
    + 'An army of a hundred thousand in a tradition '
    + 'is a statement that the army was very large. '
    + 'Taking it as a census figure misreads the genre. '
    + 'And here is the point that earns the highest marks. '
    + 'Oral tradition is kept by somebody, '
    + 'usually at a court, '
    + 'and a court has an interest in what the tradition says. '
    + 'A tradition of origin that gives the ruling lineage '
    + 'the honour of arriving first '
    + 'is also a claim to the land. '
    + 'A tradition that makes an incorporated neighbour '
    + 'descend from a junior brother of the founder '
    + 'is also a statement about rank. '
    + 'None of this means the tradition is invented. '
    + 'It means the tradition is doing two jobs at once, '
    + 'recording and justifying, '
    + 'and the historian has to ask which parts serve which job. '
    + 'The test to apply: '
    + 'where a tradition records something '
    + 'that does not flatter whoever keeps it, '
    + 'it is likely to be recording rather than claiming, '
    + 'and that makes it strong evidence. '
    + 'Where it happens to justify exactly the present arrangement, '
    + 'it needs checking. '
    + 'Writing that distinction is what separates '
    + 'an answer that lists strengths and weaknesses '
    + 'from one that explains them. '
    + 'The last thing to know is corroboration in practice, '
    + 'because examinations ask how oral tradition can be checked. '
    + 'Four ways. '
    + 'Against archaeology: '
    + 'if a tradition says a town was founded before another, '
    + 'excavation can test the relative dates. '
    + 'Against linguistics: '
    + 'if two groups claim a common origin, '
    + 'the closeness of their languages can support or weaken it. '
    + 'Against written records: '
    + 'an Arab or European account may mention the same ruler or war. '
    + 'And against other traditions: '
    + 'a neighbouring state version of the same events, '
    + 'kept by people with a different interest, '
    + 'is the single most useful check available. '
    + 'What has to be written down is the pairing: '
    + 'what the tradition is being asked for, '
    + 'and whether that is a thing it keeps well.',

  recap:
    'You know that histories were told before they were written, '
    + 'and that elders keep accounts of the past. '
    + 'This asks how far such accounts can be trusted, '
    + 'and for which kinds of question.',

  method: [
    'State what the tradition is being used to establish.',
    'Ask who kept it and on what occasion it was performed.',
    'Ask whose position the tradition supports.',
    'Accept it readily for sequence and for institutions.',
    'Treat its dates and numbers as approximate or symbolic.',
    'Note whether it says anything unflattering to its keeper.',
    'Check it against archaeology, language, written records, '
      + 'and a neighbour version.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name three forms of oral tradition '
        + 'and say who was responsible for keeping them '
        + 'in a Ghanaian state.',
      steps: [
        'Several forms were performed at court.',
        'The keeping was an office, not a casual memory.',
      ],
      answer: 'King lists and genealogies; '
        + 'drum and horn texts and appellations; '
        + 'and narratives of origin and migration, '
        + 'with proverbs and songs as further forms. '
        + 'In many states the keeping was a formal office. '
        + 'A linguist, or okyeame, '
        + 'and in some courts a court drummer or stool keeper, '
        + 'was responsible for transmitting the text accurately, '
        + 'and apprentices learned it over years, '
        + 'which made the tradition more stable '
        + 'than ordinary remembering.',
    },
    {
      level: 4,
      ask: 'What does oral tradition preserve well, '
        + 'and what does it preserve badly? '
        + 'Give a reason in each case.',
      steps: [
        'Well: sequence and institutions, because they are used.',
        'Badly: absolute dates and numbers, because nobody counted.',
      ],
      answer: 'It preserves sequence well, '
        + 'because the order of reigns is what a king list exists for '
        + 'and an error would be challenged by rival lineages. '
        + 'It preserves institutions well, '
        + 'such as how a stool is inherited or what an oath commits a '
        + 'chief to, '
        + 'because somebody acts on them every year '
        + 'and a wrong version would be corrected. '
        + 'It preserves absolute dates badly, '
        + 'because a tradition places events in reigns and nobody counted '
        + 'years. '
        + 'It preserves numbers badly, '
        + 'since a figure such as an army of a hundred thousand '
        + 'states that the army was very large '
        + 'rather than giving a count.',
    },
    {
      level: 4,
      ask: 'Give four ways an oral tradition can be checked.',
      steps: [
        'Independent evidence of different kinds.',
      ],
      answer: 'Against archaeology, '
        + 'since excavation can test whether one settlement '
        + 'is older than another. '
        + 'Against linguistic evidence, '
        + 'since the closeness of two languages '
        + 'bears on a claim of common origin. '
        + 'Against written records left by Arab or European visitors, '
        + 'which may mention the same ruler or war '
        + 'and may carry a date. '
        + 'And against the traditions of neighbouring states, '
        + 'whose keepers had different interests, '
        + 'which is the most useful check of all.',
    },
    {
      level: 5,
      ask: 'A tradition says the ruling lineage arrived first '
        + 'and found the land empty. '
        + 'How should a historian treat this?',
      steps: [
        'Notice that the claim serves a present interest.',
        'Arriving first is a claim to the land.',
        'So the tradition is recording and justifying at once.',
        'Look for independent evidence and for other traditions.',
      ],
      answer: 'With care, because the claim is not only historical. '
        + 'To have arrived first and found the land empty '
        + 'is also a title to the land, '
        + 'so the tradition is doing two jobs at once, '
        + 'recording the past and justifying the present arrangement. '
        + 'That does not make it false. '
        + 'It means the historian must ask '
        + 'whether independent evidence supports it: '
        + 'archaeological traces of earlier occupation, '
        + 'the traditions of groups now subordinate, '
        + 'and place names or linguistic survivals '
        + 'from an earlier population. '
        + 'The general test is useful here. '
        + 'Where a tradition records something that does not flatter '
        + 'its keeper, it is likely to be recording. '
        + 'Where it justifies exactly the present arrangement, '
        + 'it needs checking.',
    },
  ],

  traps: [
    {
      mistake: 'Dismissing oral tradition as unreliable.',
      why: 'Where the keeping was a trained office '
        + 'it is stable, and it is strong on sequence and institutions. '
        + 'The question is what it is good at.',
    },
    {
      mistake: 'Taking a tradition date as exact.',
      why: 'Traditions place events in reigns, not years. '
        + 'Converting reigns to dates is an estimate and known to be '
        + 'rough.',
    },
    {
      mistake: 'Reading a large number in a tradition as a count.',
      why: 'A hundred thousand means very many. '
        + 'Taking it as a census figure misreads the genre.',
    },
    {
      mistake: 'Ignoring whose interest the tradition serves.',
      why: 'A tradition kept at a court supports that court position. '
        + 'That is the highest scoring observation in the topic.',
    },
  ],

  extension:
    'Oral tradition and written record are not two grades of evidence. '
    + 'Writing does not rank above speech. '
    + 'Assuming that it does has distorted African history badly. '
    + 'Take a European trader journal '
    + 'and an Asante court tradition. '
    + 'Both are testimony from interested parties. '
    + 'Each must be read for what its maker could know. '
    + 'The trader could not see inland politics. '
    + 'The court could not see the European market. '
    + 'Treat the journal as fact and the tradition as legend, '
    + 'and you get a West Africa described entirely from outside. '
    + 'Much of the older literature was exactly that. '
    + 'Correcting it has been a large part of the work '
    + 'of African historians since independence.',

  questions: [
    {
      id: 'ora-1',
      ask: 'In many Ghanaian states, oral tradition was kept by:',
      kind: 'choice',
      options: [
        'a trained officeholder such as a linguist',
        'anyone who remembered',
        'visiting traders',
      ],
      answer: 'a trained officeholder such as a linguist',
      teach: 'The keeping was an office with apprenticeship, '
        + 'which is why the texts are more stable than casual memory.',
      level: 3,
    },
    {
      id: 'ora-2',
      ask: 'Oral tradition is most reliable for:',
      kind: 'choice',
      options: [
        'the order of reigns',
        'the exact year of an event',
        'the size of an army',
      ],
      answer: 'the order of reigns',
      teach: 'Sequence is what a king list exists for, '
        + 'and rival lineages would challenge an error.',
      level: 4,
    },
    {
      id: 'ora-3',
      ask: 'An army of a hundred thousand in a tradition should be read '
        + 'as:',
      kind: 'choice',
      options: [
        'a statement that the army was very large',
        'an accurate count',
        'a mistake',
      ],
      answer: 'a statement that the army was very large',
      teach: 'Large numbers in traditions are expressive, '
        + 'and reading them as counts misreads the genre.',
      level: 4,
    },
    {
      id: 'ora-4',
      ask: 'The most useful check on one state oral tradition is:',
      kind: 'choice',
      options: [
        'the tradition of a neighbouring state',
        'the length of the tradition',
        'the age of the person reciting it',
      ],
      answer: 'the tradition of a neighbouring state',
      teach: 'Its keepers had different interests, '
        + 'so agreement between them is strong evidence.',
      level: 5,
    },
    {
      id: 'ora-5',
      ask: 'A tradition that records something unflattering '
        + 'to the lineage keeping it is:',
      kind: 'choice',
      options: [
        'likely to be recording rather than claiming',
        'certainly false',
        'not a historical source',
      ],
      answer: 'likely to be recording rather than claiming',
      teach: 'Nobody invents a detail against their own interest, '
        + 'so such details are comparatively strong evidence.',
      level: 5,
    },
  ],
})

/* ── reading a source critically ────────────────────────────────────────── */

teach({
  topicId: 'bias-in-sources',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Every source was made by somebody, for somebody, '
      + 'with something at stake. '
      + 'Reading critically means asking four questions: '
      + 'who made it, '
      + 'for what audience, '
      + 'what were they in a position to know, '
      + 'and what did they want. '
      + 'Bias does not make a source useless. '
      + 'It tells you what the source is good evidence of.',
    method: [
      'Identify the author and their position.',
      'Identify the intended audience.',
      'Ask what the author could actually have witnessed.',
      'Ask what the author stood to gain.',
      'State what the source is reliable evidence of.',
      'Corroborate against a source with a different interest.',
    ],
  },

  idea:
    'To read a source critically is to examine it '
    + 'rather than simply believe or reject it. '
    + 'Four questions are asked of any source. '
    + 'Who produced it, and what was their position? '
    + 'For whom was it produced? '
    + 'What were they in a position to know at first hand? '
    + 'And what interest did they have in the account '
    + 'being believed? '
    + 'Bias means a slant arising from the position or interest '
    + 'of whoever made the source. '
    + 'Common kinds in historical sources include '
    + 'national or cultural bias, '
    + 'where a writer assumes the superiority of their own society; '
    + 'commercial bias, '
    + 'where a trader describes a market so as to attract investment; '
    + 'political bias, '
    + 'where an official report justifies a decision already taken; '
    + 'and selection, '
    + 'where what has been left out matters more than what is included. '
    + 'Propaganda is material produced deliberately to persuade. '
    + 'Corroboration is the comparison of a source '
    + 'with independent evidence. '
    + 'A biased source remains useful: '
    + 'it is reliable evidence of the views and purposes of its maker, '
    + 'and often of the facts its maker had no reason to distort.',

  mechanism:
    'The instinct candidates bring to this topic '
    + 'is to divide sources into reliable and biased, '
    + 'and then to discard the biased ones. '
    + 'That is the wrong move, '
    + 'and understanding why is the whole of the topic. '
    + 'Every source is biased, '
    + 'because every source was made by somebody with a position. '
    + 'If bias disqualified a source '
    + 'there would be no history at all. '
    + 'So the question is never whether a source is biased '
    + 'but what it is therefore good evidence of. '
    + 'Work through an example. '
    + 'A European trader writes in 1700 '
    + 'that the inland kingdom is rich in gold '
    + 'and its people simple and easily dealt with. '
    + 'The trader interest is to encourage his company '
    + 'to send more ships. '
    + 'So the claim of great wealth is probably exaggerated, '
    + 'because exaggeration serves him. '
    + 'The claim about the people is worth nothing at all '
    + 'about the people '
    + 'and is excellent evidence of European attitudes in 1700. '
    + 'And here is the useful part: '
    + 'the account of where the gold came from, '
    + 'which ports he used, '
    + 'and what goods he had to offer in exchange '
    + 'is probably accurate, '
    + 'because he had no interest in getting those wrong '
    + 'and a strong interest in getting them right. '
    + 'So one source, read carefully, '
    + 'yields unreliable evidence on one point, '
    + 'useful evidence of attitudes on another, '
    + 'and reliable evidence on a third. '
    + 'That is reading critically, '
    + 'and candidates who can do it on a given extract '
    + 'reach the top band. '
    + 'Now the discipline of it. '
    + 'The four questions must each be answered '
    + 'with something specific. '
    + 'Saying the source is biased because the author was European '
    + 'is not an answer, '
    + 'because it does not say which way the bias runs '
    + 'or on what point. '
    + 'Saying the author was a company trader '
    + 'whose promotion depended on the volume of business, '
    + 'so he had reason to overstate the prospects, '
    + 'names the interest and its direction, and earns the marks. '
    + 'Then the position to know question, '
    + 'which is distinct from interest and is often decisive. '
    + 'An interest makes a person want to mislead. '
    + 'Position to know decides whether they could be right '
    + 'even if honest. '
    + 'A trader on the coast writing about events two hundred miles '
    + 'inland '
    + 'may be entirely sincere and entirely wrong, '
    + 'because he is repeating what he was told '
    + 'by people with their own purposes. '
    + 'So the two questions are separate '
    + 'and an answer should use both. '
    + 'Next, selection, which candidates rarely mention '
    + 'and which examiners reward. '
    + 'What a source leaves out is evidence. '
    + 'A colonial report on a district '
    + 'that discusses taxation, labour supply and transport, '
    + 'and never mentions what the people of the district wanted, '
    + 'has told you what the administration considered relevant. '
    + 'The silence is the finding. '
    + 'Last, the practical move the examination asks for: '
    + 'corroboration with a source of different interest. '
    + 'Two European traders agreeing proves little, '
    + 'since both wanted the same thing. '
    + 'A European trader and an Asante court tradition agreeing '
    + 'is strong, '
    + 'because their interests diverge. '
    + 'So when a question asks how the reliability of a source '
    + 'could be tested, '
    + 'the answer names a source with a different interest, '
    + 'and says why its interest differs. '
    + 'What has to be written down, on every source question, '
    + 'is a sentence of this form: '
    + 'this source is reliable evidence of X, '
    + 'and unreliable on Y, '
    + 'because the author was in a position to know X '
    + 'and had reason to misrepresent Y.',

  recap:
    'You know that people tell a story to suit themselves. '
    + 'This turns that into four questions to ask of any source, '
    + 'and shows that a slanted source is still useful.',

  method: [
    'Name the author and their position.',
    'Name the intended audience.',
    'Say what the author could have witnessed directly.',
    'Say what the author stood to gain from the account.',
    'Note what the source does not mention.',
    'State what it is reliable evidence of, and what it is not.',
    'Name a corroborating source with a different interest, '
      + 'and say why it differs.',
  ],

  worked: [
    {
      level: 3,
      ask: 'State the four questions to ask of any historical source.',
      steps: [
        'Author, audience, knowledge, interest.',
      ],
      answer: 'Who produced it, and in what position were they? '
        + 'For whom was it produced? '
        + 'What were they in a position to know at first hand? '
        + 'And what interest did they have in the account being '
        + 'believed? '
        + 'A fifth, worth adding, is what the source does not mention.',
    },
    {
      level: 4,
      ask: 'Distinguish the interest of a source '
        + 'from its position to know, '
        + 'with an example.',
      steps: [
        'Interest is about motive.',
        'Position to know is about access.',
        'A source can be honest and still wrong.',
      ],
      answer: 'Interest concerns motive: '
        + 'what the author gains if the account is believed. '
        + 'Position to know concerns access: '
        + 'whether the author could have known the thing at all. '
        + 'A coastal trader writing about a battle two hundred miles '
        + 'inland '
        + 'may have no motive to mislead '
        + 'and still be wrong, '
        + 'because he is repeating what others told him, '
        + 'and those others had purposes of their own. '
        + 'So a source can be sincere and inaccurate, '
        + 'and both questions must be asked.',
    },
    {
      level: 4,
      ask: 'A European trader in 1700 writes that an inland kingdom '
        + 'is immensely rich in gold '
        + 'and its people simple and easily dealt with. '
        + 'What is this source good evidence of?',
      steps: [
        'He wants more ships sent, so wealth is likely exaggerated.',
        'The remark about the people reflects his own assumptions.',
        'Routes and goods he had no reason to distort.',
      ],
      answer: 'It is weak evidence of the kingdom actual wealth, '
        + 'since as a company trader he gained from encouraging '
        + 'investment '
        + 'and had reason to exaggerate. '
        + 'It is excellent evidence of European attitudes in 1700, '
        + 'since the remark about the people '
        + 'tells us about the writer assumptions rather than about them. '
        + 'And it is probably reliable on the practical details '
        + 'he had no interest in distorting: '
        + 'which ports he used, '
        + 'what goods were accepted in exchange, '
        + 'and the direction the gold came from. '
        + 'One source, three different levels of reliability.',
    },
    {
      level: 5,
      ask: 'How would you test the reliability of that trader account? '
        + 'Explain why your chosen check is a good one.',
      steps: [
        'Two sources with the same interest add little.',
        'A source with a different interest is the test.',
        'Name specific alternatives.',
      ],
      answer: 'By comparing it with a source whose interest differs. '
        + 'Another European company trader agreeing would prove little, '
        + 'because both wanted the same investment '
        + 'and shared the same assumptions. '
        + 'An Asante or other local court tradition '
        + 'about the same period and place '
        + 'is a far better check, '
        + 'because its keepers had a quite different interest. '
        + 'Archaeological evidence of gold working '
        + 'and of imported goods at the sites named '
        + 'is better still, '
        + 'because it has no interest at all. '
        + 'The principle is that corroboration is only worth something '
        + 'when the second source could have disagreed.',
    },
  ],

  traps: [
    {
      mistake: 'Rejecting a source because it is biased.',
      why: 'Every source is biased. '
        + 'The question is what it is therefore good evidence of.',
    },
    {
      mistake: 'Saying a source is biased because the author was '
        + 'European.',
      why: 'That names no interest and no direction. '
        + 'Say what the author gained and on which point.',
    },
    {
      mistake: 'Treating interest and position to know as one question.',
      why: 'Interest is motive; position to know is access. '
        + 'A sincere author can still be wrong.',
    },
    {
      mistake: 'Corroborating with a source of the same interest.',
      why: 'Two traders agreeing proves little. '
        + 'Corroboration counts only if the second source '
        + 'could have disagreed.',
    },
  ],

  extension:
    'The same discipline applies to sources a learner meets today, '
    + 'and the questions do not change. '
    + 'Who made this, '
    + 'for whom, '
    + 'what were they in a position to know, '
    + 'and what did they want. '
    + 'A message forwarded on a phone '
    + 'usually fails the third question completely: '
    + 'nobody in the chain was present, '
    + 'and the original source cannot be identified at all, '
    + 'which means there is no position to know to assess. '
    + 'A source that cannot be traced to anybody '
    + 'is not a weak source, it is not a source. '
    + 'That is a historian conclusion '
    + 'and it is the most practical thing this topic teaches.',

  questions: [
    {
      id: 'bias-1',
      ask: 'A biased source should be:',
      kind: 'choice',
      options: [
        'used for what it is good evidence of',
        'discarded',
        'believed in full',
      ],
      answer: 'used for what it is good evidence of',
      teach: 'Every source is biased. '
        + 'Discarding biased sources would leave no history at all.',
      level: 3,
    },
    {
      id: 'bias-2',
      ask: 'Position to know concerns whether the author:',
      kind: 'choice',
      options: [
        'could have known the thing at all',
        'wanted to mislead',
        'wrote in his own language',
      ],
      answer: 'could have known the thing at all',
      teach: 'Wanting to mislead is interest. '
        + 'The two questions are separate and both matter.',
      level: 4,
    },
    {
      id: 'bias-3',
      ask: 'A trader report is most likely to be accurate about:',
      kind: 'choice',
      options: [
        'the goods accepted in exchange',
        'the character of the people',
        'the total wealth of the kingdom',
      ],
      answer: 'the goods accepted in exchange',
      teach: 'He had a strong interest in getting that right '
        + 'and reasons to distort the other two.',
      level: 5,
    },
    {
      id: 'bias-4',
      ask: 'What a source leaves out is:',
      kind: 'choice',
      options: [
        'evidence of what its maker thought relevant',
        'of no interest',
        'proof the source is false',
      ],
      answer: 'evidence of what its maker thought relevant',
      teach: 'The silence is a finding, '
        + 'and examiners reward candidates who notice it.',
      level: 5,
    },
    {
      id: 'bias-5',
      ask: 'Corroboration is worth most when the second source:',
      kind: 'choice',
      options: [
        'has a different interest',
        'says the same thing',
        'is longer',
      ],
      answer: 'has a different interest',
      teach: 'Agreement counts only if the second source '
        + 'could have disagreed.',
      level: 4,
    },
  ],
})

/* ── traditions of origin and migration ─────────────────────────────────── */

teach({
  topicId: 'migration-traditions',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Most Ghanaian groups keep traditions of having come '
      + 'from somewhere else, '
      + 'usually from the north or north east. '
      + 'The Akan traditions point to the savanna and to Techiman; '
      + 'the Ga Dangme to the east, towards Nigeria and Benin; '
      + 'the Ewe to Notsie in Togo; '
      + 'the Mole Dagbani to the Lake Chad region. '
      + 'The evidence is oral, linguistic and archaeological, '
      + 'and the dates are approximate.',
    method: [
      'State the tradition as the group itself tells it.',
      'Name the claimed place of origin and the route.',
      'Give the evidence that supports it.',
      'Say what the evidence cannot settle.',
      'Note what the tradition also claims in the present.',
    ],
  },

  idea:
    'The peoples of Ghana keep traditions of where they came from. '
    + 'Take the Akan first. '
    + 'They include the Asante, Fante, Akyem, Akwapim and Bono. '
    + 'Their traditions trace a movement from the savanna '
    + 'southwards into the forest. '
    + 'Bono Manso and Techiman are named as early centres, '
    + 'and Adansi and Asantemanso as early settlements. '
    + 'Ga and Dangme traditions describe arrival from the east. '
    + 'The route ran through what is now Benin and Nigeria. '
    + 'They settled on the Accra plains and along the coast, '
    + 'with Ayawaso and later Accra as centres. '
    + 'Ewe traditions begin at Ketu, in present day Benin. '
    + 'From there the people moved to Notsie, in Togo. '
    + 'Then they dispersed westwards into the Volta region. '
    + 'The dispersal is linked to an escape '
    + 'from a king remembered as Agokoli. '
    + 'The Mole Dagbani groups include the Dagomba, '
    + 'the Mamprusi and the Nanumba. '
    + 'They trace their ruling lines to horsemen from the east, '
    + 'often placed in the Lake Chad region. '
    + 'Those horsemen settled over populations already there. '
    + 'The Guan are held to be among the earliest settled groups. '
    + 'They were widely scattered, '
    + 'and later arrivals often absorbed them. '
    + 'Three kinds of evidence support all this. '
    + 'There is the oral tradition itself. '
    + 'There are links between languages, '
    + 'which show how closely groups are related. '
    + 'And there is archaeology, '
    + 'which dates settlement and reveals trade. '
    + 'Most of the movements are placed '
    + 'between about the thirteenth and the seventeenth centuries. '
    + 'Those dates are estimates.',

  mechanism:
    'The question an examiner is really asking in this topic '
    + 'is how we know, '
    + 'and the honest answer has two halves. '
    + 'Take the Ewe tradition of Notsie, '
    + 'which is the clearest case because it is so detailed. '
    + 'The tradition describes a walled town, '
    + 'an oppressive king, '
    + 'and an escape in which the people went out backwards '
    + 'so their footprints would seem to lead inward, '
    + 'and dispersed in three groups. '
    + 'What can the historian do with it? '
    + 'The first half: a good deal. '
    + 'Notsie exists and can be visited. '
    + 'The three main Ewe groupings do correspond '
    + 'to the three directions of dispersal in the tradition. '
    + 'The dialects of Ewe are close enough '
    + 'to be consistent with a relatively recent common origin. '
    + 'And the sequence, a period at Notsie followed by dispersal, '
    + 'is agreed among groups '
    + 'that have had no reason to coordinate their accounts. '
    + 'So the tradition is doing real historical work. '
    + 'The second half: it cannot settle a date, '
    + 'it cannot tell us how many people moved, '
    + 'and the details of the escape '
    + 'have the shape of a story told to be remembered '
    + 'rather than a report. '
    + 'A candidate who says both halves '
    + 'is doing history rather than reciting, '
    + 'and that is the top band. '
    + 'Now the second thing the examination rewards, '
    + 'and it is the harder one. '
    + 'A tradition of origin is also a claim in the present. '
    + 'Consider the Mole Dagbani traditions '
    + 'in which ruling lines descend from horsemen who came from the '
    + 'east. '
    + 'That tradition explains the political arrangement of Dagbon: '
    + 'a ruling line distinct in origin from the earth priests '
    + 'who hold ritual authority over the land. '
    + 'The tradition is therefore the constitution of the state '
    + 'as well as its history, '
    + 'and it would be kept whether or not the migration happened '
    + 'exactly as told. '
    + 'The same logic applies to any tradition '
    + 'of having found the land empty, '
    + 'which is also a title to it. '
    + 'So the discipline is: '
    + 'describe the tradition, give the evidence, '
    + 'and then ask what the tradition secures for its keepers today. '
    + 'None of this is scepticism for its own sake. '
    + 'The historical core of these traditions '
    + 'is widely accepted: '
    + 'that the present populations of Ghana '
    + 'are largely the result of movements from the north and east '
    + 'over several centuries, '
    + 'that the forest was settled comparatively late, '
    + 'and that the movements were usually gradual '
    + 'rather than single mass marches. '
    + 'That last point is worth making '
    + 'because the traditions themselves, '
    + 'which compress generations into one journey, '
    + 'suggest otherwise. '
    + 'Archaeological evidence of settlement '
    + 'spread over long periods, '
    + 'and the presence of absorbed earlier populations '
    + 'such as the Guan, '
    + 'both point to slow movement in small groups, '
    + 'with later arrivals establishing authority '
    + 'over people already there. '
    + 'Here is where marks are lost. '
    + 'The first is the single mass migration picture, '
    + 'answered above. '
    + 'The second is confident dates. '
    + 'Write about the fifteenth century, or around the sixteenth '
    + 'century, '
    + 'and never 1483. '
    + 'The third is treating the groups as fixed and separate '
    + 'through the whole period. '
    + 'They were not: '
    + 'groups absorbed others, split, took new names, '
    + 'and adopted the language of neighbours, '
    + 'which is why linguistic and traditional evidence '
    + 'sometimes point different ways. '
    + 'The fourth is leaving out the people already present. '
    + 'A migration account that describes arrival '
    + 'and never mentions whom the arrivals met '
    + 'has omitted half the history, '
    + 'and in Ghana the Guan are the standard example '
    + 'of an earlier population absorbed. '
    + 'What has to be written down is the pairing '
    + 'of tradition with evidence. '
    + 'The tradition says this; '
    + 'the linguistic or archaeological evidence supports it in this '
    + 'respect; '
    + 'and it cannot settle that.',

  recap:
    'You know the main ethnic groups of Ghana and roughly where they '
    + 'live. '
    + 'This gives the accounts each keeps of how it got there, '
    + 'and asks how far the accounts can be tested.',

  method: [
    'Name the group and state its tradition of origin.',
    'Name the claimed place of origin, the route and the main centres.',
    'Give the supporting evidence: oral, linguistic, archaeological.',
    'State what the evidence cannot establish, especially dates.',
    'Say whether the movement is better seen as gradual than as one '
      + 'march.',
    'Mention the populations already present and what became of them.',
    'Note what the tradition secures for its keepers in the present.',
  ],

  worked: [
    {
      level: 3,
      ask: 'State the traditions of origin of the Akan, the Ga Dangme '
        + 'and the Ewe.',
      steps: [
        'Each names a direction and a centre.',
      ],
      answer: 'The Akan traditions describe movement from the savanna '
        + 'southwards into the forest, '
        + 'with Bono Manso and Techiman as early centres '
        + 'and Adansi and Asantemanso as early settlements. '
        + 'The Ga and Dangme traditions describe arrival from the east, '
        + 'through present day Benin and Nigeria, '
        + 'settling on the Accra plains, with Ayawaso as a centre. '
        + 'The Ewe traditions describe a movement from Ketu to Notsie '
        + 'in Togo, '
        + 'and a dispersal westwards into the Volta region '
        + 'after escaping the rule of a king remembered as Agokoli.',
    },
    {
      level: 4,
      ask: 'What evidence supports the Ewe tradition of Notsie, '
        + 'and what can it not establish?',
      steps: [
        'Supporting: Notsie exists; three groups match three '
          + 'directions; dialects are close; neighbours agree.',
        'Cannot establish: dates, numbers, the details of the escape.',
      ],
      answer: 'In support: Notsie is a real town that can be visited; '
        + 'the three main Ewe groupings correspond '
        + 'to the three directions of dispersal in the tradition; '
        + 'the dialects of Ewe are close enough '
        + 'to be consistent with a fairly recent common origin; '
        + 'and groups with no reason to coordinate their accounts '
        + 'agree on the sequence of a period at Notsie followed by '
        + 'dispersal. '
        + 'It cannot establish when the movement occurred, '
        + 'how many people were involved, '
        + 'or whether the details of the escape happened as told, '
        + 'since those have the shape of a story '
        + 'formed to be remembered rather than a report.',
    },
    {
      level: 4,
      ask: 'Why do historians think these movements were gradual '
        + 'rather than single mass migrations?',
      steps: [
        'Traditions compress generations into one journey.',
        'Archaeology shows settlement spread over long periods.',
        'Earlier populations were absorbed rather than displaced.',
      ],
      answer: 'Because the evidence points that way '
        + 'even though the traditions suggest otherwise. '
        + 'Archaeological evidence shows settlement '
        + 'accumulating over long periods '
        + 'rather than appearing all at once. '
        + 'Earlier populations such as the Guan '
        + 'were absorbed rather than removed, '
        + 'which implies arrivals in groups small enough '
        + 'to be accommodated. '
        + 'And a tradition naturally compresses '
        + 'the experience of many generations '
        + 'into one remembered journey, '
        + 'because that is what makes it tellable.',
    },
    {
      level: 5,
      ask: 'The Mole Dagbani traditions trace ruling lines '
        + 'to horsemen from the east. '
        + 'Discuss what this tradition does '
        + 'besides recording a migration.',
      steps: [
        'It distinguishes the ruling line from the earth priests.',
        'So it explains the division of authority in the state.',
        'It would be preserved for that reason alone.',
        'That does not make it false.',
      ],
      answer: 'It also states the constitution of the state. '
        + 'In Dagbon and the related states '
        + 'political authority is held by a ruling line '
        + 'while ritual authority over the land '
        + 'is held by earth priests drawn from the earlier population. '
        + 'A tradition of rulers who came from elsewhere '
        + 'explains and legitimises exactly that division, '
        + 'so it would be preserved carefully '
        + 'whether or not the migration happened as described. '
        + 'That does not make it untrue. '
        + 'It means the historian should look for independent support, '
        + 'such as linguistic differences between the ruling line '
        + 'and the general population, '
        + 'or archaeological evidence of the arrival of horses '
        + 'and of new political centres, '
        + 'and should treat the agreement of several states traditions '
        + 'as stronger than any one of them alone.',
    },
  ],

  traps: [
    {
      mistake: 'Describing a migration as one mass movement of a whole '
        + 'people.',
      why: 'The evidence indicates gradual movement in small groups. '
        + 'Traditions compress generations into one journey.',
    },
    {
      mistake: 'Giving a precise year for a migration.',
      why: 'The dates are estimates. '
        + 'Write about the fifteenth century, not 1483.',
    },
    {
      mistake: 'Leaving out the populations already present.',
      why: 'The Guan are the standard example of an earlier population '
        + 'absorbed, '
        + 'and omitting them leaves out half the history.',
    },
    {
      mistake: 'Treating a tradition of origin as history only.',
      why: 'It is usually also a claim about land or rank today, '
        + 'which is why it was kept so carefully.',
    },
  ],

  extension:
    'Language offers a check on migration traditions. '
    + 'It works whatever anybody remembers. '
    + 'Languages with a recent common ancestor '
    + 'differ in limited and predictable ways. '
    + 'The more they differ, the longer they have been apart. '
    + 'The Ewe dialects are close. '
    + 'That fits a fairly recent dispersal. '
    + 'Akan and Ga are far apart, '
    + 'which implies a much longer separation. '
    + 'The method has a limit. '
    + 'A group can take up a neighbour language completely, '
    + 'and the record is then erased. '
    + 'That is one reason the Guan are hard to trace. '
    + 'Even so, set beside tradition and archaeology, '
    + 'language is a third voice '
    + 'with no interest in the outcome.',

  questions: [
    {
      id: 'mig-1',
      ask: 'Ewe traditions name which town as the place of dispersal?',
      kind: 'choice',
      options: ['Notsie', 'Techiman', 'Ayawaso'],
      answer: 'Notsie',
      teach: 'Techiman is an early Akan centre '
        + 'and Ayawaso an early Ga centre.',
      level: 3,
    },
    {
      id: 'mig-2',
      ask: 'Ga and Dangme traditions describe arrival from the:',
      kind: 'choice',
      options: ['east', 'north west', 'south'],
      answer: 'east',
      teach: 'Through present day Benin and Nigeria '
        + 'to the Accra plains.',
      level: 3,
    },
    {
      id: 'mig-3',
      ask: 'Which group is generally regarded as among the earliest '
        + 'settled, '
        + 'and widely absorbed by later arrivals?',
      kind: 'choice',
      options: ['the Guan', 'the Asante', 'the Dagomba'],
      answer: 'the Guan',
      teach: 'They were widely scattered '
        + 'and often absorbed, which is why they are hard to trace.',
      level: 4,
    },
    {
      id: 'mig-4',
      ask: 'Historians regard the migrations as:',
      kind: 'choice',
      options: [
        'gradual movements of small groups',
        'single mass marches',
        'entirely legendary',
      ],
      answer: 'gradual movements of small groups',
      teach: 'Archaeology shows settlement accumulating slowly, '
        + 'and earlier populations were absorbed rather than removed.',
      level: 4,
    },
    {
      id: 'mig-5',
      ask: 'A Mole Dagbani tradition of ruling lines from the east also:',
      kind: 'choice',
      options: [
        'explains the division between chiefs and earth priests',
        'fixes the date of settlement',
        'denies that anyone lived there before',
      ],
      answer: 'explains the division between chiefs and earth priests',
      teach: 'The tradition is the constitution of the state '
        + 'as well as its history.',
      level: 5,
    },
  ],
})

/* ── the forest states and Asante ───────────────────────────────────────── */

teach({
  topicId: 'forest-states',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Small Akan states in the forest were drawn together '
      + 'by Osei Tutu and Okomfo Anokye at the end of the '
      + 'seventeenth century, '
      + 'and threw off the overlordship of Denkyira at Feyiase '
      + 'in about 1701. '
      + 'The Golden Stool gave the union a symbol of common soul. '
      + 'A standing army, a road system, '
      + 'and offices filled by appointment rather than birth '
      + 'held it together.',
    method: [
      'State what existed before the union and what the problem was.',
      'Name the founders and the decisive battle.',
      'Give the unifying institutions, one at a time.',
      'For each, say what problem of union it solved.',
      'Distinguish consent from force in holding the empire together.',
    ],
  },

  idea:
    'The Akan forest once held many small states. '
    + 'Among them were Kwaman, Juaben, Bekwai, '
    + 'Mampong, Nsuta and Kokofu. '
    + 'Each had its own chief. '
    + 'Most paid tribute to Denkyira, which was powerful. '
    + 'Late in the seventeenth century this changed. '
    + 'Osei Tutu, chief of Kwaman, '
    + 'with the priest Okomfo Anokye, '
    + 'brought the small states into one union. '
    + 'Kumasi was its centre. '
    + 'Tradition holds that Okomfo Anokye brought down '
    + 'the Golden Stool, the Sika Dwa Kofi. '
    + 'He declared it the soul of the united nation. '
    + 'The chiefs then placed their own war stools beneath it. '
    + 'The union met Denkyira at Feyiase, '
    + 'in about 1701, and won. '
    + 'That ended the overlordship of Denkyira. '
    + 'It also opened the way to the coastal trade. '
    + 'Through the eighteenth century Asante expanded, '
    + 'by conquest and by alliance, '
    + 'under Opoku Ware, Osei Kwadwo and others. '
    + 'Bono, Gonja and Dagbon were among those absorbed. '
    + 'So the state had two parts. '
    + 'At the core were the states of the original union. '
    + 'Beyond them lay provinces that paid tribute. '
    + 'Five things held it together. '
    + 'The Golden Stool was its symbol. '
    + 'The Odwira festival renewed allegiance each year. '
    + 'A standing army was organised in wings. '
    + 'Great roads ran out from Kumasi. '
    + 'And under Osei Kwadwo a reform filled many offices '
    + 'by appointment on merit rather than by birth.',

  mechanism:
    'The examination question on Asante is nearly always '
    + 'how the union was held together, '
    + 'and the way to answer it is to treat each institution '
    + 'as the solution to a problem. '
    + 'The problem of union is always the same: '
    + 'why should a chief who has his own state, '
    + 'his own army and his own ancestors '
    + 'accept the authority of another chief? '
    + 'Every Asante institution answers part of that. '
    + 'Take the Golden Stool first. '
    + 'In Akan thought a stool holds the soul of the state, '
    + 'so a chief cannot simply be told to submit: '
    + 'his stool is his people identity. '
    + 'The Golden Stool solved this '
    + 'by creating a stool above the others '
    + 'that belonged to nobody and to everybody. '
    + 'The chiefs did not submit to Kumasi; '
    + 'they submitted together to a common soul, '
    + 'and the Asantehene was its custodian rather than its owner. '
    + 'That is why the Golden Stool is never sat upon '
    + 'and why the war against the British in 1900 '
    + 'was fought over a demand to sit on it. '
    + 'A candidate who explains the stool in those terms '
    + 'is explaining an institution rather than describing an object. '
    + 'Next, the Odwira festival. '
    + 'A symbol accepted once will be forgotten. '
    + 'Odwira brought the chiefs to Kumasi annually '
    + 'to renew allegiance in public, '
    + 'before each other, '
    + 'which made loyalty visible and defection conspicuous. '
    + 'It also allowed the Asantehene to settle disputes '
    + 'and to take account of tribute. '
    + 'So the festival was administration as well as religion, '
    + 'and saying so earns the mark. '
    + 'Then the army. '
    + 'The Asante army was organised in wings, '
    + 'with contingents from each state '
    + 'under an overall command, '
    + 'which meant that no single state army '
    + 'could act alone against Kumasi '
    + 'and that military success belonged to the union '
    + 'rather than to any member. '
    + 'The roads matter for the same reason. '
    + 'Great roads radiated from Kumasi to the provinces, '
    + 'maintained and patrolled, '
    + 'with officials along them. '
    + 'Their purpose was trade '
    + 'and also the movement of armies and messages, '
    + 'which is how a central authority reaches a distant province '
    + 'before a revolt is established. '
    + 'And Osei Kwadwo appointments reform '
    + 'answered the deepest problem of all. '
    + 'In a state where office is inherited, '
    + 'a chief owes his position to his lineage '
    + 'and not to the centre. '
    + 'Filling offices by appointment on ability '
    + 'created a class of officials who owed their position '
    + 'to the Asantehene '
    + 'and could be removed by him, '
    + 'which is the beginning of a bureaucracy '
    + 'rather than a confederation of lineages. '
    + 'Now the part the best answers include: '
    + 'the empire was not held together by consent alone. '
    + 'The metropolitan states were partners in the union '
    + 'and the conquered provinces were not. '
    + 'Gonja, Dagbon and others paid tribute under compulsion, '
    + 'provided troops, '
    + 'and sometimes revolted. '
    + 'So the honest account distinguishes two relationships: '
    + 'union by consent at the core, '
    + 'and domination at the periphery, '
    + 'and it is the periphery that fell away first '
    + 'when Asante military power weakened in the nineteenth century. '
    + 'A candidate who writes only about the Golden Stool '
    + 'has described how the core held '
    + 'and has not explained the empire. '
    + 'On dates, be careful and be approximate. '
    + 'Feyiase is conventionally dated about 1701 '
    + 'and the union formed in the years just before it. '
    + 'The details of Okomfo Anokye and the stool '
    + 'come from oral tradition, '
    + 'and the proper way to write them '
    + 'is that tradition holds that, '
    + 'which is honest and costs nothing. '
    + 'What has to be written down, for each institution, '
    + 'is the problem it solved. '
    + 'The institution alone is one mark; '
    + 'the institution with its function is two or three.',

  recap:
    'You know Asante was a powerful kingdom with Kumasi as its capital. '
    + 'This asks how a set of separate small states became one, '
    + 'and what kept them together afterwards.',

  method: [
    'Describe the position before the union: small states under '
      + 'Denkyira.',
    'Name Osei Tutu and Okomfo Anokye and the founding of the union.',
    'Name the battle of Feyiase and date it approximately.',
    'Take each unifying institution in turn.',
    'For each, state the problem of union it addressed.',
    'Distinguish the metropolitan core from the tributary provinces.',
    'Say which relationship rested on consent and which on force.',
    'Attribute traditional material to tradition.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Describe the position of the Akan forest states '
        + 'before the Asante union, '
        + 'and name the battle that ended it.',
      steps: [
        'Many small states, each with its own chief.',
        'Most paid tribute to Denkyira.',
        'The union defeated Denkyira at Feyiase.',
      ],
      answer: 'The forest held many small Akan states, '
        + 'among them Kwaman, Juaben, Bekwai, Mampong, Nsuta and Kokofu, '
        + 'each under its own chief, '
        + 'and most of them paying tribute to Denkyira, '
        + 'which also controlled their access to the coastal trade. '
        + 'The union formed under Osei Tutu '
        + 'defeated Denkyira at Feyiase, '
        + 'conventionally dated to about 1701, '
        + 'which ended that overlordship '
        + 'and gave Asante direct access to the coast.',
    },
    {
      level: 4,
      ask: 'Explain the role of the Golden Stool in uniting Asante.',
      steps: [
        'A stool holds the soul of a state in Akan thought.',
        'So a chief cannot be asked to give up his stool.',
        'The Golden Stool stood above all the stools.',
        'The chiefs submitted together to a common soul.',
      ],
      answer: 'In Akan thought a stool holds the soul of its state, '
        + 'so no chief could be asked simply to submit '
        + 'without giving up his people identity. '
        + 'Tradition holds that Okomfo Anokye brought down the Golden '
        + 'Stool '
        + 'and declared it the soul of the whole nation, '
        + 'and that the chiefs placed their war stools beneath it. '
        + 'This allowed them to submit not to Kumasi '
        + 'but to a common soul of which the Asantehene '
        + 'was custodian rather than owner. '
        + 'That is why the stool is never sat upon, '
        + 'and why a British demand to sit on it in 1900 '
        + 'was understood as an attack on the nation itself.',
    },
    {
      level: 4,
      ask: 'Apart from the Golden Stool, '
        + 'give three institutions that held the Asante state together, '
        + 'and say what each achieved.',
      steps: [
        'Each institution answered a problem of union.',
      ],
      answer: 'The Odwira festival brought the chiefs to Kumasi each year '
        + 'to renew allegiance publicly, '
        + 'which made loyalty visible and defection conspicuous, '
        + 'and allowed disputes to be settled and tribute accounted for. '
        + 'The army was organised in wings with contingents from each '
        + 'state '
        + 'under one command, '
        + 'so no member state could act alone against Kumasi '
        + 'and victory belonged to the union. '
        + 'The great roads radiating from Kumasi '
        + 'carried trade, armies and messages, '
        + 'which allowed the centre to reach a distant province '
        + 'before a revolt could establish itself. '
        + 'Osei Kwadwo reform, filling offices by appointment on merit, '
        + 'created officials who owed their position to the Asantehene '
        + 'rather than to a lineage.',
    },
    {
      level: 5,
      ask: 'How far was the Asante empire held together by consent? '
        + 'Discuss.',
      steps: [
        'Distinguish the metropolitan core from the provinces.',
        'The core joined the union and shared in the Golden Stool.',
        'The provinces were conquered and paid tribute.',
        'The provinces revolted when Asante weakened.',
      ],
      answer: 'The question has two answers, '
        + 'because the empire had two kinds of relationship. '
        + 'The metropolitan states of the original union '
        + 'had joined it, shared in the Golden Stool, '
        + 'sent contingents to a common army '
        + 'and attended Odwira as partners, '
        + 'so their adherence rested largely on consent '
        + 'reinforced by shared success. '
        + 'The outer provinces, including Gonja and Dagbon, '
        + 'had been conquered. '
        + 'They paid tribute under compulsion, '
        + 'supplied troops, '
        + 'and had no share in the Golden Stool, '
        + 'so their adherence rested on Asante military power. '
        + 'The test is what happened when that power weakened '
        + 'in the nineteenth century: '
        + 'the provinces fell away first '
        + 'while the core held much longer. '
        + 'So a defensible judgement is that the core was a union '
        + 'and the periphery an empire, '
        + 'and that an answer discussing only the Golden Stool '
        + 'explains the first and not the second.',
    },
  ],

  traps: [
    {
      mistake: 'Describing the Golden Stool as an object '
        + 'rather than an institution.',
      why: 'Its function was to let chiefs submit to a common soul '
        + 'rather than to Kumasi. '
        + 'The function carries the marks.',
    },
    {
      mistake: 'Treating the whole empire as a voluntary union.',
      why: 'The conquered provinces paid tribute under compulsion '
        + 'and revolted when Asante weakened.',
    },
    {
      mistake: 'Listing institutions without saying what each achieved.',
      why: 'Each answered a problem of union. '
        + 'Name the problem and the mark doubles.',
    },
    {
      mistake: 'Stating traditional material as established fact.',
      why: 'Write that tradition holds that Okomfo Anokye brought down '
        + 'the stool. '
        + 'It is honest and costs nothing.',
    },
  ],

  extension:
    'Osei Kwadwo appointed officials on merit. '
    + 'It is the most modern looking thing in Asante government. '
    + 'Why did it matter? '
    + 'Every state built on lineage meets the same limit. '
    + 'An officeholder who inherited his place cannot be dismissed. '
    + 'His claim comes from his ancestors, not from the centre. '
    + 'Appointing officials who can be removed changes that. '
    + 'The centre now has a staff that depends on it. '
    + 'That is what lets a large territory be administered '
    + 'rather than merely dominated. '
    + 'Many expanding states have made the same reform, '
    + 'each on its own. '
    + 'It tends to appear at one point: '
    + 'when a kingdom grows too large for personal rule.',

  questions: [
    {
      id: 'for-1',
      ask: 'The Asante union defeated which state at Feyiase?',
      kind: 'choice',
      options: ['Denkyira', 'Gonja', 'Fante'],
      answer: 'Denkyira',
      teach: 'Denkyira had held overlordship over the small forest '
        + 'states '
        + 'and controlled their access to the coast.',
      level: 3,
    },
    {
      id: 'for-2',
      ask: 'The battle of Feyiase is conventionally dated to about:',
      kind: 'numeric',
      options: [],
      answer: '1701',
      teach: 'About 1701. '
        + 'Write about or around, since the dating is conventional.',
      level: 3,
    },
    {
      id: 'for-3',
      ask: 'The Golden Stool allowed the chiefs to:',
      kind: 'choice',
      options: [
        'submit to a common soul rather than to Kumasi',
        'keep their own armies',
        'avoid paying tribute',
      ],
      answer: 'submit to a common soul rather than to Kumasi',
      teach: 'A stool holds the soul of a state, '
        + 'so a chief could not be asked simply to give his up.',
      level: 4,
    },
    {
      id: 'for-4',
      ask: 'The Odwira festival served an administrative purpose by:',
      kind: 'choice',
      options: [
        'bringing chiefs to Kumasi to renew allegiance publicly',
        'training the army',
        'collecting gold from Europeans',
      ],
      answer: 'bringing chiefs to Kumasi to renew allegiance publicly',
      teach: 'It made loyalty visible and defection conspicuous, '
        + 'and allowed disputes and tribute to be dealt with.',
      level: 4,
    },
    {
      id: 'for-5',
      ask: 'When Asante military power weakened in the nineteenth '
        + 'century, '
        + 'which part fell away first?',
      kind: 'choice',
      options: [
        'the conquered outer provinces',
        'the metropolitan states',
        'Kumasi itself',
      ],
      answer: 'the conquered outer provinces',
      teach: 'Their adherence rested on force, '
        + 'while the core shared in the union and the Golden Stool.',
      level: 5,
    },
  ],
})

/* ── the northern states ────────────────────────────────────────────────── */

teach({
  topicId: 'northern-states',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Dagbon, Mamprugu and Nanun trace their ruling lines '
      + 'to one ancestor, remembered as Tohazie. '
      + 'Gonja traces its own to cavalry from Mande. '
      + 'In each case a ruling line settled '
      + 'over a population already there. '
      + 'The earth priests of that population '
      + 'kept ritual authority over the land. '
      + 'So political and ritual authority were held apart. '
      + 'That division is the key to how these states worked.',
    method: [
      'Name the state, its capital and its ruler title.',
      'State the tradition of the ruling line origin.',
      'Name the authority held by the earlier population.',
      'Explain how the two authorities divided the work.',
      'Say how succession worked and what disputes it caused.',
    ],
  },

  idea:
    'Northern Ghana held several centralised states '
    + 'before colonial rule. '
    + 'Dagbon has its capital at Yendi. '
    + 'Its ruler is the Ya Na. '
    + 'Mamprugu has its capital at Nalerigu. '
    + 'Its ruler is the Nayiri. '
    + 'Nanun has its capital at Bimbilla. '
    + 'Its ruler is the Bimbilla Na. '
    + 'The traditions of these three relate them closely. '
    + 'All trace their ruling lines to one ancestry. '
    + 'It is linked to a figure remembered as Tohazie, '
    + 'the red hunter, '
    + 'and to his descendants, among them Na Gbewaa. '
    + 'After his death, tradition says, the three states parted. '
    + 'Gonja has centres at Yagbum and Salaga. '
    + 'Its ruler is the Yagbonwura. '
    + 'Its traditions trace the ruling line to cavalry '
    + 'from the Mande region to the north west, '
    + 'who settled there in the sixteenth century. '
    + 'In all these states the ruling line differed in origin '
    + 'from much of the population it governed. '
    + 'The earlier inhabitants kept ritual authority over the land. '
    + 'Among the Dagomba these are the Tendana, or earth priests, '
    + 'and other states have officers like them. '
    + 'They conduct the rites that secure fertility, '
    + 'and they deal with offences against the earth. '
    + 'Government ran through a hierarchy of chiefs. '
    + 'They hold skins, not stools. '
    + 'They are drawn from the royal lineage, '
    + 'and promoted from lesser skins to greater ones. '
    + 'Islam reached these states through trade. '
    + 'Many courts adopted it. '
    + 'Muslim scholars served there as advisers and record keepers, '
    + 'beside the religious offices that already existed.',

  mechanism:
    'The thing to understand about these states, '
    + 'and the thing most answers miss, '
    + 'is why authority was divided '
    + 'between chiefs and earth priests '
    + 'rather than concentrated. '
    + 'The reason is in how the states were formed. '
    + 'A ruling line arriving from outside '
    + 'can take political power by force, '
    + 'and it cannot take ritual authority over the land, '
    + 'because that authority belongs to those '
    + 'whose ancestors are buried in it. '
    + 'In the religious understanding of the earlier population, '
    + 'the earth is approached through the people who came first. '
    + 'So a newcomer who tried to seize that role '
    + 'would be claiming something nobody would accept, '
    + 'and he would also be making enemies '
    + 'of exactly the people he needed to govern quietly. '
    + 'The solution, reached in Dagbon and elsewhere, '
    + 'was a settlement: '
    + 'the ruling line takes political and military authority, '
    + 'the Tendana keep the earth, '
    + 'and each needs the other. '
    + 'A chief cannot secure a good harvest; '
    + 'an earth priest cannot raise an army. '
    + 'That is a stable arrangement '
    + 'because neither side can do without the other, '
    + 'and it is why the division survived for centuries '
    + 'rather than being resolved by one side winning. '
    + 'A candidate who explains it that way '
    + 'has explained the constitution of a northern state '
    + 'and is in the top band. '
    + 'The second thing to get right is the skin, '
    + 'and candidates reliably write stool. '
    + 'In the north the symbol of office is a skin, '
    + 'and the states are described as skins, '
    + 'as Yendi is the paramount skin of Dagbon. '
    + 'It is not a trivial difference of vocabulary: '
    + 'it marks a different political tradition from the Akan, '
    + 'with its own rules of succession, '
    + 'and using the Akan word '
    + 'suggests the candidate has assumed '
    + 'that northern states were like southern ones. '
    + 'Which brings the third point, '
    + 'and it is the most examined. '
    + 'Succession in Dagbon works by promotion through skins. '
    + 'A prince holds a lesser skin, '
    + 'then a more important one, '
    + 'and the most senior skins, notably Mion, Savelugu and Karaga, '
    + 'are the gates through which the Yendi skin is reached. '
    + 'This has a clear advantage: '
    + 'a candidate for the paramount skin '
    + 'has already governed, '
    + 'and has been seen to govern, '
    + 'so the state is not handed to an untried man. '
    + 'It has a clear disadvantage too, '
    + 'and it is the source of the long running Dagbon chieftaincy '
    + 'dispute: '
    + 'where more than one line has a claim '
    + 'and the order of rotation is contested, '
    + 'the succession has no agreed arbiter, '
    + 'and each party can cite tradition. '
    + 'A good answer states both sides. '
    + 'It is also right to be careful here: '
    + 'the Dagbon dispute is a live matter in Ghana, '
    + 'and the examinable content is the system and its vulnerability, '
    + 'not a verdict on who should hold the skin. '
    + 'Fourth, the comparison with Asante, '
    + 'which is a favourite question. '
    + 'Both were centralised states with a paramount ruler, '
    + 'a hierarchy of chiefs, '
    + 'tribute and an army. '
    + 'The differences are worth four marks. '
    + 'Asante united existing states that kept their own stools '
    + 'under a Golden Stool; '
    + 'Dagbon was built by a ruling line over a dispersed population. '
    + 'Asante office was tied to lineage and to the stool of a state; '
    + 'Dagbon office was reached by promotion through skins. '
    + 'In Asante the Asantehene held ritual as well as political '
    + 'authority; '
    + 'in Dagbon ritual authority over the land stayed with the '
    + 'Tendana. '
    + 'And Islam was present at the northern courts '
    + 'in a way it was not at Kumasi, '
    + 'through the trans-Saharan trade. '
    + 'What has to be written down is the division of authority. '
    + 'Any answer about a northern state '
    + 'that does not mention the earth priests '
    + 'has described the chiefs and missed the state.',

  recap:
    'You know that northern Ghana has paramount chiefs '
    + 'such as the Ya Na at Yendi. '
    + 'This gives the traditions behind those offices, '
    + 'and shows how authority was shared '
    + 'with the priests of the land.',

  method: [
    'Name the state, the capital and the title of the ruler.',
    'State the tradition of origin of the ruling line.',
    'Name the earlier population and its ritual office.',
    'Explain why political and ritual authority were separated.',
    'Say how each side depended on the other.',
    'Describe succession by promotion through skins.',
    'Give one advantage and one weakness of that system.',
    'Use the word skin, not stool, for northern office.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the capital and the title of the ruler '
        + 'of Dagbon, Mamprugu and Gonja.',
      steps: [
        'Each state has a capital and a paramount title.',
      ],
      answer: 'Dagbon has its capital at Yendi and is ruled by the Ya Na. '
        + 'Mamprugu has its capital at Nalerigu '
        + 'and is ruled by the Nayiri. '
        + 'Gonja has centres at Yagbum and Salaga '
        + 'and is ruled by the Yagbonwura. '
        + 'Nanun, a fourth, has Bimbilla as its capital.',
    },
    {
      level: 4,
      ask: 'Why was ritual authority over the land '
        + 'left with the earth priests '
        + 'rather than taken by the ruling line?',
      steps: [
        'A newcomer can take political power by force.',
        'Ritual authority belongs to those whose ancestors lie in the '
          + 'land.',
        'Claiming it would not be accepted.',
        'And the newcomers needed the earlier population to be quiet.',
      ],
      answer: 'Because it could not be taken. '
        + 'In the religious understanding of the earlier population, '
        + 'the earth is approached through the people who settled first '
        + 'and whose ancestors are buried in it, '
        + 'so a newly arrived ruling line '
        + 'had no standing to perform those rites '
        + 'and would not have been accepted if it tried. '
        + 'Attempting it would also have antagonised '
        + 'precisely the people the newcomers needed to govern '
        + 'peacefully. '
        + 'So a settlement was reached: '
        + 'the ruling line took political and military authority '
        + 'and the earth priests kept the land. '
        + 'The arrangement held for centuries '
        + 'because neither side could do the other work: '
        + 'a chief cannot secure a harvest '
        + 'and an earth priest cannot raise an army.',
    },
    {
      level: 4,
      ask: 'Describe succession to the Yendi skin, '
        + 'and give one advantage and one weakness of the system.',
      steps: [
        'Promotion runs through a series of skins.',
        'The senior gate skins lead to Yendi.',
        'Advantage: the candidate has governed already.',
        'Weakness: competing lines and contested rotation.',
      ],
      answer: 'A prince holds a lesser skin, '
        + 'then is promoted to a more important one, '
        + 'and the most senior skins, among them Mion, Savelugu and '
        + 'Karaga, '
        + 'are the gates through which the Yendi skin is reached. '
        + 'The advantage is that a candidate for the paramount skin '
        + 'has already governed and been seen to govern, '
        + 'so the state is not handed to an untried man. '
        + 'The weakness is that where more than one line has a claim '
        + 'and the order of rotation is disputed, '
        + 'there is no agreed arbiter '
        + 'and each party can cite tradition, '
        + 'which has produced long running succession disputes.',
    },
    {
      level: 5,
      ask: 'Compare the government of Dagbon with that of Asante.',
      steps: [
        'Similarities: paramount ruler, chief hierarchy, tribute, army.',
        'Differences: how the state was formed.',
        'Differences: how office is reached.',
        'Differences: where ritual authority lies.',
        'Differences: the place of Islam.',
      ],
      answer: 'Both were centralised states with a paramount ruler, '
        + 'a hierarchy of subordinate chiefs, '
        + 'tribute from the provinces and an organised army. '
        + 'They differ in formation: '
        + 'Asante united existing states which kept their own stools '
        + 'beneath a Golden Stool, '
        + 'while Dagbon was built by a ruling line '
        + 'establishing itself over a dispersed population. '
        + 'They differ in office: '
        + 'Asante office was tied to the stool of a particular state, '
        + 'while in Dagbon a prince is promoted through a series of '
        + 'skins. '
        + 'They differ in authority: '
        + 'the Asantehene held ritual as well as political authority, '
        + 'while in Dagbon ritual authority over the land '
        + 'remained with the Tendana. '
        + 'And Islam was established at the northern courts '
        + 'through the trans-Saharan trade '
        + 'in a way it was not at Kumasi.',
    },
  ],

  traps: [
    {
      mistake: 'Writing stool for a northern office.',
      why: 'Northern office is held by a skin. '
        + 'The word marks a different political tradition '
        + 'with its own succession rules.',
    },
    {
      mistake: 'Describing a northern state without the earth priests.',
      why: 'The division of authority is the constitution of the state. '
        + 'An answer about chiefs alone has missed it.',
    },
    {
      mistake: 'Treating succession by promotion as simply inheritance.',
      why: 'A prince must hold lesser skins first, '
        + 'so a candidate has already governed. '
        + 'The rotation is also what makes disputes possible.',
    },
    {
      mistake: 'Assuming northern states worked like Asante.',
      why: 'Formation, office, ritual authority and the place of Islam '
        + 'all differ, and those differences are the marks.',
    },
  ],

  extension:
    'Islam arrived in these states as a side effect of trade. '
    + 'How it was received is instructive. '
    + 'It was not usually imposed. '
    + 'It did not usually replace the religious offices in place. '
    + 'Muslim scholars at a court could read and write. '
    + 'They kept records and drafted letters. '
    + 'They also linked the court to trade across the Sahara. '
    + 'All of that was useful to a ruler. '
    + 'So Islam was added at the top, '
    + 'while the earth priests continued below. '
    + 'In several states the ruler observed both. '
    + 'Historians call this a court Islam '
    + 'living alongside local religion. '
    + 'It is one reason these states could be tied closely '
    + 'to the Muslim world '
    + 'while most of their people did not change religion.',

  questions: [
    {
      id: 'nor-1',
      ask: 'The ruler of Dagbon holds which title?',
      kind: 'choice',
      options: ['the Ya Na', 'the Nayiri', 'the Yagbonwura'],
      answer: 'the Ya Na',
      teach: 'The Nayiri rules Mamprugu and the Yagbonwura Gonja.',
      level: 3,
    },
    {
      id: 'nor-2',
      ask: 'In northern Ghana, the symbol of chiefly office is a:',
      kind: 'choice',
      options: ['skin', 'stool', 'staff'],
      answer: 'skin',
      teach: 'Skins in the north, stools among the Akan. '
        + 'The difference marks two political traditions.',
      level: 3,
    },
    {
      id: 'nor-3',
      ask: 'Ritual authority over the land in Dagbon was held by the:',
      kind: 'choice',
      options: ['Tendana or earth priests', 'Ya Na', 'Muslim scholars'],
      answer: 'Tendana or earth priests',
      teach: 'They came from the earlier population, '
        + 'and that authority could not be taken by a newcomer.',
      level: 4,
    },
    {
      id: 'nor-4',
      ask: 'An advantage of succession by promotion through skins is '
        + 'that:',
      kind: 'choice',
      options: [
        'the candidate has already governed',
        'the eldest son always succeeds',
        'disputes are impossible',
      ],
      answer: 'the candidate has already governed',
      teach: 'He has held lesser skins and been seen to rule. '
        + 'The weakness is contested rotation between lines.',
      level: 4,
    },
    {
      id: 'nor-5',
      ask: 'Muslim scholars were valued at northern courts partly '
        + 'because they:',
      kind: 'choice',
      options: [
        'could read, write and keep records',
        'commanded the army',
        'controlled the earth shrines',
      ],
      answer: 'could read, write and keep records',
      teach: 'They also linked the court to trans-Saharan trading '
        + 'networks, '
        + 'while the earth priests continued their own role.',
      level: 5,
    },
  ],
})

/* ── the trans-Saharan trade ────────────────────────────────────────────── */

teach({
  topicId: 'trans-saharan',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Across the Sahara, West Africa sent gold, '
      + 'and later kola, leather, ivory and captives, '
      + 'and received salt, cloth, horses, copper, beads and books. '
      + 'The trade worked because the camel made the crossing possible '
      + 'and because the two sides had what the other lacked. '
      + 'It made the savanna states rich, '
      + 'brought Islam and literacy, '
      + 'and shifted power to whoever controlled the routes.',
    method: [
      'Name what went north and what came south.',
      'Explain why each side wanted what it got.',
      'Name the routes and the terminal towns.',
      'Give the effects under three heads: economic, political, '
        + 'cultural.',
      'Say what ended or redirected the trade.',
    ],
  },

  idea:
    'For many centuries goods crossed the Sahara '
    + 'between West and North Africa. '
    + 'Gold went north. '
    + 'Much of it came from the Akan forest '
    + 'and from the Bambuk and Bure fields. '
    + 'Kola nuts, ivory, leather, pepper, gum '
    + 'and captives went north too. '
    + 'Salt came south, '
    + 'mined at Taghaza and Taoudenni. '
    + 'With it came cloth, horses, copper and brassware, '
    + 'beads, weapons, paper and books. '
    + 'The trade depended on the camel. '
    + 'A camel carries a heavy load, '
    + 'goes several days without water, '
    + 'and walks on sand. '
    + 'It depended on the oases too, '
    + 'which marked the stages of the crossing. '
    + 'Caravans moved in large groups for safety. '
    + 'Guides who knew the route led them. '
    + 'A crossing took two to three months. '
    + 'Three routes mattered most. '
    + 'One ran from Sijilmasa to Taghaza and on to Timbuktu. '
    + 'One ran from Tunis through Ghadames to Gao. '
    + 'One ran from Tripoli through the Fezzan to Kanem Bornu. '
    + 'The southern ends were market towns at the desert edge. '
    + 'Timbuktu, Gao, Jenne, Kano and Katsina were among them. '
    + 'Later Begho and Salaga grew '
    + 'at the northern edge of the forest. '
    + 'The states that held those southern ends grew rich. '
    + 'Ancient Ghana came first, then Mali, then Songhai. '
    + 'In the central Sudan it was Kanem Bornu '
    + 'and the Hausa states. '
    + 'Islam travelled with the trade. '
    + 'Merchants carried it, not armies. '
    + 'Arabic literacy came with it, '
    + 'and so did scholarship and law.',

  mechanism:
    'The first question to answer is why anybody '
    + 'would cross a desert for two months. '
    + 'The answer is that each side had in abundance '
    + 'what the other could not get at all, '
    + 'and both goods were worth carrying. '
    + 'The south had gold and no rock salt. '
    + 'The north had salt and wanted gold. '
    + 'Salt sounds like the weaker half of that bargain '
    + 'and it is not. '
    + 'In a hot climate people and animals lose salt constantly '
    + 'and must replace it, '
    + 'there is no local source in the savanna, '
    + 'and salt is also the means of preserving meat and fish '
    + 'where there is no other way to keep food. '
    + 'So salt was not a luxury; '
    + 'it was a necessity with no substitute, '
    + 'and at times it exchanged weight for weight with gold '
    + 'at the desert edge. '
    + 'Writing that salt was essential and locally unobtainable '
    + 'is the explanation the marking scheme wants, '
    + 'and candidates who merely list salt and gold '
    + 'have not given it. '
    + 'The camel is the second part of the mechanism '
    + 'and deserves a sentence of its own. '
    + 'Before the camel was in general use in the Sahara, '
    + 'in roughly the early centuries of the common era, '
    + 'crossing was possible and not commercially practical. '
    + 'The camel changed the arithmetic: '
    + 'a large load, several days without water, '
    + 'and feet suited to sand. '
    + 'So a technology made a trade route, '
    + 'and the route then made several states, '
    + 'which is a causal chain worth stating in that order. '
    + 'Now the effects, which carry most of the marks '
    + 'and should be organised under three heads. '
    + 'Economically, the trade created wealth '
    + 'and concentrated it where the routes ended. '
    + 'Rulers taxed the caravans, '
    + 'which gave them revenue independent of farming, '
    + 'and with revenue they could keep cavalry and officials. '
    + 'Towns grew at the terminals, '
    + 'and specialised crafts grew in the towns. '
    + 'Politically, control of a route became worth fighting for, '
    + 'and the rise and fall of ancient Ghana, Mali and Songhai '
    + 'tracks the control of the gold and salt routes. '
    + 'A state that lost its route lost its revenue. '
    + 'Cavalry, bought with trade wealth and imported from the north, '
    + 'gave the savanna states a military advantage '
    + 'over their neighbours, '
    + 'which is also why those states could not easily expand '
    + 'into the forest, '
    + 'where horses sickened and died of trypanosomiasis '
    + 'carried by the tsetse fly. '
    + 'That constraint is a good point to know, '
    + 'because it explains a political boundary '
    + 'by a biological fact. '
    + 'Culturally, Islam spread along the routes, '
    + 'and the manner of its spreading matters. '
    + 'It came with traders, '
    + 'was adopted first at courts and in towns, '
    + 'and spread into the countryside slowly or not at all, '
    + 'which is why a ruler could be Muslim '
    + 'while most of his people were not. '
    + 'With Islam came Arabic writing, '
    + 'and with writing came records, correspondence and scholarship, '
    + 'so that Timbuktu became a centre of learning '
    + 'with a substantial trade in books. '
    + 'That is also why West African history '
    + 'has written sources from this period at all, '
    + 'and the connection is worth making: '
    + 'the trade that brought the salt brought the documents '
    + 'that historians now use. '
    + 'Here is where marks are lost. '
    + 'The first is treating the trade as European. '
    + 'It was not. '
    + 'This was trade between West and North Africa, '
    + 'conducted by Berber and Arab and West African merchants, '
    + 'for centuries before any European ship reached the Guinea coast. '
    + 'The second is forgetting what happened when those ships arrived. '
    + 'From the fifteenth century '
    + 'Europeans bought gold on the coast directly, '
    + 'which meant Akan gold could go south in days '
    + 'instead of north in months. '
    + 'The trans-Saharan routes did not vanish, '
    + 'and they were weakened, '
    + 'and the states at the desert edge declined '
    + 'as the trade reoriented towards the Atlantic. '
    + 'That shift is a standard essay question, '
    + 'and the answer is about direction rather than disappearance. '
    + 'The third is the captives. '
    + 'People were traded across the Sahara as well as goods, '
    + 'over a very long period, '
    + 'and an account that omits it is incomplete. '
    + 'What has to be written down is always the reason. '
    + 'Not that salt came south, '
    + 'but that salt came south because it was essential, '
    + 'had no local source, '
    + 'and was the only means of preserving food.',

  recap:
    'You know that Ghana takes its name from an old empire '
    + 'that traded in gold. '
    + 'This explains what was traded across the desert, '
    + 'why both sides wanted it, '
    + 'and what the trade did to the states involved.',

  method: [
    'List what went north and what came south.',
    'Explain why each side needed what it received.',
    'Name the camel and say what it made possible.',
    'Name the routes and the terminal towns.',
    'Give the economic effects: revenue, towns, crafts.',
    'Give the political effects: control of routes, cavalry, limits.',
    'Give the cultural effects: Islam, Arabic literacy, scholarship.',
    'Explain the redirection of trade towards the Atlantic coast.',
  ],

  worked: [
    {
      level: 3,
      ask: 'List the main goods traded in each direction '
        + 'across the Sahara.',
      steps: [
        'South to north, then north to south.',
      ],
      answer: 'Northwards from West Africa went gold, kola nuts, ivory, '
        + 'leather, pepper, gum and captives. '
        + 'Southwards came salt, cloth, horses, copper and brassware, '
        + 'beads, weapons, paper and books.',
    },
    {
      level: 4,
      ask: 'Why was salt worth carrying across a desert, '
        + 'sometimes exchanging weight for weight with gold?',
      steps: [
        'People and animals lose salt in a hot climate.',
        'The savanna has no rock salt source.',
        'Salt is also the means of preserving food.',
        'So there was no substitute.',
      ],
      answer: 'Because it was a necessity with no local source '
        + 'and no substitute. '
        + 'In a hot climate people and livestock lose salt constantly '
        + 'and must replace it, '
        + 'and the savanna has no rock salt deposits. '
        + 'Salt was also the principal means of preserving meat and fish '
        + 'where no other method existed. '
        + 'A commodity that is essential, '
        + 'unobtainable locally '
        + 'and irreplaceable '
        + 'will bear a very high price, '
        + 'which is why it could exchange against gold near the desert '
        + 'edge.',
    },
    {
      level: 4,
      ask: 'Give the effects of the trans-Saharan trade '
        + 'under economic, political and cultural heads.',
      steps: [
        'Economic: revenue, towns, crafts.',
        'Political: control of routes, cavalry, a limit at the forest.',
        'Cultural: Islam, Arabic literacy, scholarship.',
      ],
      answer: 'Economically it created wealth at the ends of the routes. '
        + 'Rulers taxed the caravans, '
        + 'which gave revenue independent of farming, '
        + 'market towns such as Timbuktu, Gao and Jenne grew, '
        + 'and specialised crafts developed in them. '
        + 'Politically, control of a route became worth fighting for, '
        + 'so the rise of ancient Ghana, Mali and Songhai '
        + 'follows the control of the gold and salt routes, '
        + 'and the horses bought with trade wealth '
        + 'gave those states a cavalry advantage, '
        + 'though one that stopped at the forest '
        + 'where horses died of disease carried by the tsetse fly. '
        + 'Culturally, Islam spread along the routes with the merchants, '
        + 'bringing Arabic literacy, written records, '
        + 'law and scholarship, '
        + 'so that Timbuktu became a centre of learning '
        + 'with its own trade in books.',
    },
    {
      level: 5,
      ask: 'What happened to the trans-Saharan trade '
        + 'after Europeans reached the Guinea coast? '
        + 'Discuss.',
      steps: [
        'Europeans bought gold directly on the coast from the fifteenth '
          + 'century.',
        'The journey south was days rather than months.',
        'So gold was redirected, not stopped.',
        'The savanna states lost revenue and declined.',
      ],
      answer: 'The trade was redirected rather than ended. '
        + 'From the fifteenth century Europeans bought gold '
        + 'directly on the Guinea coast, '
        + 'so Akan gold could reach a buyer in days '
        + 'instead of crossing the desert in two or three months, '
        + 'with the losses and tolls that involved. '
        + 'A growing share of the gold therefore went south '
        + 'instead of north. '
        + 'The trans-Saharan routes continued, '
        + 'particularly in kola, salt, cloth and captives, '
        + 'but they carried less of the most valuable commodity, '
        + 'and the states at the southern desert edge '
        + 'lost the revenue on which their power rested. '
        + 'Over time the centre of commercial gravity in West Africa '
        + 'moved from the savanna to the coast, '
        + 'and the political consequences followed the money. '
        + 'So the correct account is about a change of direction '
        + 'and of relative importance, '
        + 'not about a trade disappearing.',
    },
  ],

  traps: [
    {
      mistake: 'Treating the trans-Saharan trade as European trade.',
      why: 'It was between West and North Africa, '
        + 'conducted by Berber, Arab and West African merchants, '
        + 'for centuries before Europeans reached the coast.',
    },
    {
      mistake: 'Listing salt and gold without explaining the exchange.',
      why: 'Salt was essential, locally unobtainable '
        + 'and the only means of preserving food. '
        + 'That reason is the mark.',
    },
    {
      mistake: 'Saying the Atlantic trade ended the Saharan trade.',
      why: 'It redirected it. '
        + 'The routes continued with other goods '
        + 'while the savanna states lost revenue and declined.',
    },
    {
      mistake: 'Omitting captives from the list of goods.',
      why: 'People were traded across the Sahara over a long period, '
        + 'and an account that leaves it out is incomplete.',
    },
  ],

  extension:
    'The tsetse fly set a limit on empire in West Africa. '
    + 'It is a fine example of geography shaping politics. '
    + 'The savanna states built their power on cavalry, '
    + 'paid for out of trade revenue. '
    + 'South of the savanna lies the forest and its fringes. '
    + 'There the tsetse fly carries trypanosomiasis, '
    + 'and the disease kills horses. '
    + 'So the savanna states could not reach into the forest. '
    + 'The forest states that later rose, Asante among them, '
    + 'grew up without cavalry. '
    + 'They fought on foot, '
    + 'with firearms bought on the coast. '
    + 'Two military traditions, divided by an insect. '
    + 'The boundary between them shows on the political map '
    + 'for centuries.',

  questions: [
    {
      id: 'sah-1',
      ask: 'Which animal made the Saharan crossing commercially '
        + 'practical?',
      kind: 'choice',
      options: ['the camel', 'the horse', 'the donkey'],
      answer: 'the camel',
      teach: 'A heavy load, several days without water, '
        + 'and feet suited to sand.',
      level: 2,
    },
    {
      id: 'sah-2',
      ask: 'Salt commanded a very high price in the savanna because it '
        + 'was:',
      kind: 'choice',
      options: [
        'essential and locally unobtainable',
        'a luxury for the rich',
        'used as currency only',
      ],
      answer: 'essential and locally unobtainable',
      teach: 'People and animals lose salt in heat, '
        + 'and salt was also the means of preserving food.',
      level: 4,
    },
    {
      id: 'sah-3',
      ask: 'Islam reached the savanna states mainly through:',
      kind: 'choice',
      options: ['traders', 'invading armies', 'European missionaries'],
      answer: 'traders',
      teach: 'It was adopted first at courts and in towns, '
        + 'which is why a ruler could be Muslim '
        + 'while most of his people were not.',
      level: 4,
    },
    {
      id: 'sah-4',
      ask: 'Savanna cavalry could not be used in the forest because:',
      kind: 'choice',
      options: [
        'horses died of disease carried by the tsetse fly',
        'the forest states had better cavalry',
        'horses were too expensive',
      ],
      answer: 'horses died of disease carried by the tsetse fly',
      teach: 'Trypanosomiasis set a biological limit '
        + 'on how far savanna power could reach.',
      level: 5,
    },
    {
      id: 'sah-5',
      ask: 'The arrival of Europeans on the Guinea coast:',
      kind: 'choice',
      options: [
        'redirected much of the gold trade southwards',
        'ended the Saharan trade at once',
        'had no effect on the savanna states',
      ],
      answer: 'redirected much of the gold trade southwards',
      teach: 'Gold could reach a buyer in days instead of months, '
        + 'so the savanna states lost revenue and declined.',
      level: 5,
    },
  ],
})
