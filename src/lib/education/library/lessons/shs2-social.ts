/**
 * Stored lessons for SHS 2 Core Social Studies.
 * Democracy and elections, human rights and the rule of law, development
 * and underdevelopment, population and urbanisation, and family, marriage
 * and inheritance.
 *
 * Written at about grade 10, which is inside the SHS expectation of 10 to 12.
 *
 * ── Why these five belong together ───────────────────────────────────────
 *
 * SHS 1 Social Studies described Ghana: its environment, its constitution,
 * its resources, its culture. These five ask whether the arrangements work,
 * and that is a different kind of question. An election can be held and
 * still not be credible. A right can be written in a constitution and still
 * be denied. A country can grow and still not develop. A city can gain
 * people and lose services. A marriage can be real to a family and have no
 * standing in a court. So every lesson here separates the form of a thing
 * from the substance of it, because that distinction is what the paper is
 * actually testing.
 *
 * ── What has to be written down ──────────────────────────────────────────
 *
 * Social Studies is marked on named institutions, named laws and reasoned
 * judgements. The Electoral Commission, Chapter Five, CHRAJ, the Human
 * Development Index, the dependency ratio, PNDCL 111: these are the words
 * the marks hang on. An answer that says corruption is bad or that
 * development means progress earns almost nothing, and the lessons say so
 * rather than letting a learner find out in the hall.
 *
 * Where a question asks for a judgement, the mark is for the reason and not
 * for the side taken. So the worked answers here give a position and then
 * the ground for it, which is the shape an examiner is looking for.
 *
 * ── Pictures and tables ──────────────────────────────────────────────────
 *
 * Social Studies has been the worst served subject in this library for
 * figures, and most of what it teaches is a process with stages or a set of
 * things compared. Both belong in a diagram or a table rather than in a
 * paragraph, so every lesson here carries one of each at least.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── democracy, elections and political parties ─────────────────────────── */

teach({
  topicId: 'democracy-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Democracy is rule by the people, exercised in Ghana through '
      + 'representatives chosen in periodic elections. '
      + 'Holding an election is not the same as holding a credible one. '
      + 'What makes it credible is the secret ballot, an independent '
      + 'commission, a public count, and a loser who accepts the result.',
    method: [
      'Separate the form from the substance: was there a vote, and was it a real one.',
      'Name the institution responsible for each stage.',
      'Judge credibility against stated conditions, not against who won.',
    ],
  },

  why:
    'On an election day in a village in the Central Region the ballot box '
    + 'is kept in full view of everyone, the counting happens at the '
    + 'polling station itself in front of a crowd, and the figures are '
    + 'written on a sheet that an agent of every party signs before it '
    + 'leaves. '
    + 'None of that is quick, and all of it could in principle be done '
    + 'faster in an office in Accra. '
    + 'So why is the count held in the open at the station, and whose '
    + 'problem is it solving?',

  notation:
    'Suffrage means the right to vote, and universal adult suffrage means '
    + 'every adult citizen has it. '
    + 'A constituency is the area that elects one member of Parliament. '
    + 'First past the post means the candidate with the most votes wins, '
    + 'even without half of them. '
    + 'The Electoral Commission, usually written EC, is the body that runs '
    + 'elections in Ghana and is independent of the government by the 1992 '
    + 'Constitution. '
    + 'A polling agent is a party’s representative watching at a station. '
    + 'The pink sheet is the form on which a station’s results are '
    + 'recorded and signed. '
    + 'Collation is the adding up of station results. '
    + 'Turnout is the share of registered voters who actually voted.',

  idea:
    'Democracy means government by the people. '
    + 'Direct democracy, where citizens vote on each decision '
    + 'themselves, works only in a very small community. '
    + 'Representative democracy is what Ghana practises under the '
    + '1992 Constitution. '
    + 'Citizens choose people to decide for them, and can remove '
    + 'those people at the next election. '
    + 'Elections are held every four years for President and for '
    + 'Parliament. '
    + 'Every citizen of eighteen and above may vote, which is '
    + 'universal adult suffrage. '
    + 'A political party organises people around a programme and '
    + 'selects candidates, so a voter is offered more than a choice '
    + 'between individuals. '
    + 'Ghana has a multi party system. '
    + 'The governing party has changed hands several times since 1992 '
    + 'without the state breaking down. '
    + 'That peaceful change of hands is the test political scientists '
    + 'use, rather than the holding of a vote. '
    + 'An election is credible when the register is accurate, the '
    + 'ballot is secret, the commission is independent, the count is '
    + 'public and witnessed, the media are free, security is neutral, '
    + 'and the result is accepted or challenged in court rather than '
    + 'in the street.',

  tables: [
    {
      caption: 'What makes an election credible, and what each condition prevents',
      columns: ['Condition', 'What it prevents'],
      rows: [
        ['An accurate voters register', 'Voting by people who do not exist or who vote twice'],
        ['A secret ballot', 'Buying a vote or punishing a voter, since neither can be verified'],
        ['An independent commission', 'The sitting government arranging its own result'],
        ['Counting at the station, in public', 'Figures being altered between the station and the capital'],
        ['Party agents signing the result sheet', 'A later dispute about what the station actually recorded'],
        ['A free press and neutral security', 'One side campaigning while the other is silenced'],
      ],
      note: 'Each line answers a specific way an election can be stolen. '
        + 'None of them is ceremony, and a question asking why one exists '
        + 'wants the thing it prevents.',
    },
    {
      caption: 'Three party systems compared',
      columns: ['System', 'How many parties can win', 'Strength', 'Weakness'],
      rows: [
        ['One party', 'One, by law', 'Decisions are quick',
          'No lawful way to remove a bad government'],
        ['Two party', 'Two in practice', 'A clear choice and a clear winner',
          'Views outside the two have no voice'],
        ['Multi party', 'Several', 'More views represented',
          'Coalitions can be unstable and slow'],
      ],
      note: 'Ghana is formally multi party and in practice dominated by two '
        + 'large parties, which is worth saying in an answer because it is '
        + 'both at once.',
    },
  ],

  figure: {
    alt: 'A flow chart of one election day, drawn as seven boxes connected '
      + 'by arrows down the page. The first box is register before the '
      + 'election, with a note that the name must be on the list. The '
      + 'second is verification at the station, with a note on checking '
      + 'the name and the thumb. The third is the secret ballot, drawn as '
      + 'a screened booth, with a note that nobody can see how you voted '
      + 'and that is why a vote cannot be bought with certainty. The '
      + 'fourth is the box, in full view of the crowd and the agents. The '
      + 'fifth is the count at the station, in public. The sixth is the '
      + 'result sheet, signed by an agent of every party, with a note that '
      + 'each party now holds a copy of the same figures. The seventh is '
      + 'collation and declaration, with a note that a dispute goes to '
      + 'court and not to the street. Beside the third and sixth boxes, '
      + 'two short labels point out that these are the two steps that make '
      + 'the rest trustworthy.',
    svg: '<svg viewBox="0 0 660 560" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<rect x="160" y="20" width="240" height="44" rx="6"/>'
      + '<text x="280" y="48" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">1. register, before the day</text>'
      + '<line x1="280" y1="64" x2="280" y2="86"/>'
      + '<path d="M274 78 L280 90 L286 78"/>'
      + '<rect x="160" y="90" width="240" height="44" rx="6"/>'
      + '<text x="280" y="118" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">2. verified at the station</text>'
      + '<line x1="280" y1="134" x2="280" y2="156"/>'
      + '<path d="M274 148 L280 160 L286 148"/>'
      + '<rect x="160" y="160" width="240" height="56" rx="6" '
      + 'stroke="#1d4ed8" stroke-width="3"/>'
      + '<text x="280" y="184" font-size="13" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">3. secret ballot, behind a screen</text>'
      + '<text x="280" y="202" font-size="11" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">nobody can check how you voted</text>'
      + '<text x="414" y="192" font-size="11" fill="#1d4ed8" '
      + 'stroke="none">so a vote cannot be</text>'
      + '<text x="414" y="206" font-size="11" fill="#1d4ed8" '
      + 'stroke="none">bought with certainty</text>'
      + '<line x1="280" y1="216" x2="280" y2="238"/>'
      + '<path d="M274 230 L280 242 L286 230"/>'
      + '<rect x="160" y="242" width="240" height="44" rx="6"/>'
      + '<text x="280" y="270" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">4. box in full view all day</text>'
      + '<line x1="280" y1="286" x2="280" y2="308"/>'
      + '<path d="M274 300 L280 312 L286 300"/>'
      + '<rect x="160" y="312" width="240" height="44" rx="6"/>'
      + '<text x="280" y="340" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">5. counted at the station</text>'
      + '<line x1="280" y1="356" x2="280" y2="378"/>'
      + '<path d="M274 370 L280 382 L286 370"/>'
      + '<rect x="160" y="382" width="240" height="56" rx="6" '
      + 'stroke="#0f8a4d" stroke-width="3"/>'
      + '<text x="280" y="406" font-size="13" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">6. result sheet signed by all agents</text>'
      + '<text x="280" y="424" font-size="11" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">every party holds the same figures</text>'
      + '<text x="414" y="414" font-size="11" fill="#0f8a4d" '
      + 'stroke="none">so nothing can be</text>'
      + '<text x="414" y="428" font-size="11" fill="#0f8a4d" '
      + 'stroke="none">altered on the way</text>'
      + '<line x1="280" y1="438" x2="280" y2="460"/>'
      + '<path d="M274 452 L280 464 L286 452"/>'
      + '<rect x="160" y="464" width="240" height="56" rx="6"/>'
      + '<text x="280" y="488" font-size="13" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">7. collated and declared</text>'
      + '<text x="280" y="506" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a dispute goes to court</text>'
      + '<text x="280" y="546" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'steps 3 and 6 are what make the other five worth anything</text>'
      + '</svg>',
  },

  mechanism:
    'The answer to the opening question is that the public count at the '
    + 'station solves a problem of trust, and it solves it by removing the '
    + 'need for trust. '
    + 'Consider what an election has to achieve. '
    + 'Millions of people who will never meet each other have to end the '
    + 'day agreeing on a number, including the people who lost. '
    + 'That agreement cannot rest on anybody’s word, because the parties do '
    + 'not trust each other and have no reason to. '
    + 'So the process is designed so that no single person or office ever '
    + 'holds the figures alone. '
    + 'The votes are counted where they were cast, in front of the people '
    + 'who cast them. '
    + 'The figures are written on a sheet, and an agent of every party '
    + 'signs it and takes a copy away. '
    + 'From that moment each party can add up the whole country for itself '
    + 'from its own copies, and any difference between that total and the '
    + 'declared one can be pointed to, station by station. '
    + 'An office in Accra could add faster. '
    + 'What it could not do is prove to a losing party that it had added '
    + 'honestly, and the proof is the point. '
    + 'The secret ballot does the same work from the other direction. '
    + 'Because nobody can discover how an individual voted, nobody can pay '
    + 'for a vote with any certainty of getting it, and nobody can punish a '
    + 'village for voting the wrong way. '
    + 'A voter can accept the money and vote as they please, which is '
    + 'exactly why vote buying is a weaker tool than it looks. '
    + 'So a question asking why the ballot is secret should not be answered '
    + 'with privacy. '
    + 'It should be answered with the thing secrecy prevents: inducement '
    + 'and intimidation, neither of which can work on a vote that cannot be '
    + 'checked. '
    + 'That is the general shape of every answer in this topic. '
    + 'Name the safeguard, then name the specific abuse it blocks. '
    + 'Three places lose marks. '
    + 'The first is treating an election as proof of democracy. '
    + 'Elections have been held by governments that had no intention of '
    + 'losing, and a candidate who writes that a country is democratic '
    + 'because it votes has not answered the question. '
    + 'The better test is whether power has actually changed hands '
    + 'peacefully, and in Ghana it has, which is a fact worth citing. '
    + 'The second is confusing the roles of the institutions. '
    + 'The Electoral Commission runs the election. '
    + 'The courts settle disputes about it. '
    + 'Parliament makes the law under which it is held. '
    + 'The police keep order and take no side. '
    + 'Mixing those up costs marks in the institutional questions, which '
    + 'are common. '
    + 'The third is describing first past the post without its '
    + 'consequence. '
    + 'The candidate with the most votes wins the seat even with well under '
    + 'half of them, so a party can hold many seats on a minority of votes '
    + 'and a party with support spread thinly everywhere can win nothing. '
    + 'That is an argument both for the system, because it produces clear '
    + 'winners and a local member for every area, and against it, because '
    + 'it wastes the votes of everybody who backed a loser. '
    + 'A question asking you to evaluate it wants both sides and then a '
    + 'position. '
    + 'One honest difficulty should be named. '
    + 'The safeguards above are about counting, and counting is the part of '
    + 'an election that Ghana now does well. '
    + 'The harder problems sit before polling day: the cost of running, the '
    + 'advantage a sitting government has in state resources and airtime, '
    + 'and the money that reaches voters in the weeks before. '
    + 'A candidate who raises one of those in an evaluation question is '
    + 'showing the judgement the paper asks for.',

  recap:
    'Ghana is governed under the 1992 Constitution, which you met in SHS 1. '
    + 'It sets out three arms of government and says that the people choose '
    + 'the President and Parliament. '
    + 'Choosing is done by voting, and every citizen of eighteen and above '
    + 'may vote. '
    + 'You will have seen an election: the queue before dawn, the thumb '
    + 'print, the ink on the finger. '
    + 'What this lesson adds is why each of those steps exists. '
    + 'Almost every part of the process was put there to stop a particular '
    + 'way of cheating, and knowing which is the difference between '
    + 'describing an election and understanding one.',

  method: [
    'Define democracy, and say whether the case is direct or representative.',
    'Name the institution responsible for the stage in question.',
    'For a safeguard, name the abuse it prevents, not just what it is.',
    'For credibility, work through stated conditions one at a time.',
    'Judge the election by the process, never by which party won.',
    'For an evaluation, give both sides and then take a position with a reason.',
    'Cite a Ghanaian fact where you can, such as power changing hands since 1992.',
    'Keep the roles of the commission, the courts and Parliament separate.',
  ],

  worked: [
    {
      level: 3,
      ask: 'State three features of a democratic government.',
      steps: [
        'Think about how power is obtained, how it is limited, and how it '
        + 'is lost.',
      ],
      answer: 'Power is obtained through periodic free elections under '
        + 'universal adult suffrage. '
        + 'It is limited by a constitution and by courts that can rule '
        + 'against the government. '
        + 'And it can be lost, so a government that loses an election '
        + 'leaves office. '
        + 'A fourth, freedom of speech and association, is worth adding '
        + 'since without it an election is not a real choice.',
    },
    {
      level: 4,
      ask: 'Explain why the ballot in a Ghanaian election is secret.',
      steps: [
        'Ask what could be done if a voter’s choice were known.',
        'A candidate could pay for a vote and check that it was '
        + 'delivered.',
        'A powerful person could punish a voter or a village for voting the '
        + 'wrong way.',
        'Secrecy makes both impossible to carry out reliably.',
      ],
      answer: 'So that no vote can be bought or punished. '
        + 'Because nobody can discover how an individual voted, a payment '
        + 'cannot be enforced and intimidation cannot be targeted. '
        + 'A voter may take the money and vote as they please. '
        + 'Saying only that voting is private is a weaker answer, because '
        + 'it names no abuse.',
    },
    {
      level: 5,
      ask: 'A party claims the national result was altered after the count. '
        + 'Describe the features of the Ghanaian process that make such a '
        + 'claim testable.',
      steps: [
        'Votes are counted at each polling station, in public.',
        'The figures are entered on a result sheet at the station.',
        'An agent of each party signs that sheet and keeps a copy.',
        'So each party can total the country from its own copies and '
        + 'compare, station by station.',
      ],
      answer: 'The station level count and the signed result sheets. '
        + 'Because every party holds its own copy of each station’s '
        + 'figures, the claim can be checked against the declared total '
        + 'rather than merely asserted, and the evidence can be put before '
        + 'a court. '
        + 'The design means no single office ever holds the figures alone, '
        + 'which is the whole purpose of counting in the open.',
    },
    {
      level: 6,
      ask: 'In a constituency, candidate A wins 40 per cent of the votes, '
        + 'B wins 35 and C wins 25. '
        + 'State who takes the seat, and evaluate the system that produces '
        + 'that outcome.',
      steps: [
        'Ghana uses first past the post for parliamentary seats.',
        'A has the most votes, so A takes the seat with 40 per cent.',
        'The 60 per cent who voted for B and C are represented by somebody '
        + 'they did not choose.',
        'Against that, the system gives a clear single winner and a local '
        + 'member for every area.',
      ],
      answer: 'Candidate A takes the seat. '
        + 'The system is simple, produces a decisive result, and gives each '
        + 'area one identifiable member, which matters for local '
        + 'accountability. '
        + 'Its cost is that a majority of voters in this constituency are '
        + 'unrepresented, and nationally a party can hold many seats on a '
        + 'minority of total votes. '
        + 'On balance the choice is between decisiveness and '
        + 'proportionality, and an answer should say which it prefers and '
        + 'why, since the mark is for the reason rather than the side.',
    },
  ],

  traps: [
    {
      mistake: 'Treating the holding of an election as proof of democracy.',
      why: 'Governments with no intention of losing have held elections. '
        + 'The better test is whether power has changed hands peacefully.',
    },
    {
      mistake: 'Answering why the ballot is secret with the word privacy.',
      why: 'Name the abuse it prevents: a vote cannot be bought or '
        + 'punished if it cannot be checked.',
    },
    {
      mistake: 'Confusing the Electoral Commission with the courts.',
      why: 'The commission runs the election and the courts settle '
        + 'disputes about it. '
        + 'Parliament makes the law it is held under.',
    },
    {
      mistake: 'Describing first past the post without its consequence.',
      why: 'A candidate can win with far less than half the votes, so most '
        + 'of a constituency may be unrepresented. '
        + 'That is the point of any evaluation question.',
    },
    {
      mistake: 'Judging an election by which party won.',
      why: 'Credibility is a property of the process. '
        + 'Work through the conditions and say which were met.',
    },
  ],

  extension:
    'Turnout is worth watching as closely as the result. '
    + 'A government elected on a very low turnout holds office lawfully but '
    + 'speaks for fewer people than the figures suggest. '
    + 'Low turnout among young voters is the pattern in many countries, '
    + 'Ghana included, and it has a cost that is easy to miss. '
    + 'A party that knows the young do not vote has little reason to put '
    + 'their concerns in its manifesto, and the less it does, the less '
    + 'reason the young have to vote.',

  questions: [
    {
      id: 'dm-1',
      ask: 'The body that conducts elections in Ghana is the:',
      kind: 'choice',
      options: [
        'Electoral Commission',
        'Supreme Court',
        'Parliament',
      ],
      answer: 'Electoral Commission',
      teach: 'The courts settle disputes about an election and Parliament '
        + 'makes the law. '
        + 'The commission runs it, and is independent by the '
        + 'Constitution.',
      level: 3,
    },
    {
      id: 'dm-2',
      ask: 'Votes are counted at the polling station rather than in the '
        + 'capital mainly because:',
      kind: 'choice',
      options: [
        'The figures cannot then be altered on the way',
        'It is faster than collating centrally',
        'The law requires a crowd to be present',
      ],
      answer: 'The figures cannot then be altered on the way',
      teach: 'And every party signs and keeps a copy, so each can add up '
        + 'the country for itself.',
      level: 5,
    },
    {
      id: 'dm-3',
      ask: 'Under first past the post, a candidate with 40 per cent of the '
        + 'votes against 35 and 25:',
      kind: 'choice',
      options: [
        'Wins the seat, although most voters chose someone else',
        'Must face a second round of voting',
        'Loses, because 40 is below half',
      ],
      answer: 'Wins the seat, although most voters chose someone else',
      teach: 'That is both the strength of the system, a clear winner, and '
        + 'its weakness, an unrepresented majority.',
      level: 5,
    },
    {
      id: 'dm-4',
      ask: 'The strongest single sign that a democracy is working is:',
      kind: 'choice',
      options: [
        'Power has changed hands peacefully after an election',
        'A very large number of parties exist',
        'Elections are held on time',
      ],
      answer: 'Power has changed hands peacefully after an election',
      teach: 'It is the one thing an unwilling government will not do, '
        + 'which is why it is the test that cannot be faked.',
      level: 6,
    },
  ],
})

/* ── human rights and the rule of law ───────────────────────────────────── */

teach({
  topicId: 'rights-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Fundamental human rights are set out in Chapter Five of the 1992 '
      + 'Constitution and belong to a person because they are a person. '
      + 'The rule of law means nobody is above the law, including the '
      + 'government. '
      + 'A right written on paper is only worth the procedure that '
      + 'enforces it.',
    method: [
      'Name the right, and say where it comes from.',
      'State its limitation, because almost every right has one.',
      'Name the institution or procedure that enforces it.',
    ],
  },

  why:
    'A young man is picked up in a market after a theft is reported and '
    + 'held in a cell at the station. '
    + 'Nobody tells him what he is accused of, and four days pass before '
    + 'anybody takes him anywhere. '
    + 'His family are told to wait. '
    + 'Nothing unusual has happened by the standards of the station, and no '
    + 'single officer has decided to do him harm. '
    + 'But something has gone wrong, and the Constitution says exactly '
    + 'what. '
    + 'What was he owed, and by when?',

  notation:
    'Chapter Five of the 1992 Constitution is the part that lists '
    + 'fundamental human rights and freedoms, and it is worth naming in an '
    + 'answer. '
    + 'Due process means the steps the law requires before a person can be '
    + 'punished. '
    + 'Habeas corpus is an order from a court requiring that a detained '
    + 'person be produced, so that the court can rule on whether the '
    + 'detention is lawful. '
    + 'CHRAJ is the Commission on Human Rights and Administrative Justice, '
    + 'which investigates complaints against public bodies. '
    + 'The judiciary means the courts, and judicial independence means a '
    + 'judge can rule against the government without losing their post. '
    + 'A derogation or limitation is a lawful restriction on a right.',

  idea:
    'A human right is a claim a person has simply by being human. '
    + 'It does not come from the government, which is why a '
    + 'government cannot properly take it away. '
    + 'Chapter Five of the 1992 Constitution sets out the rights '
    + 'Ghana guarantees. '
    + 'They include life, personal liberty, dignity, a fair trial, '
    + 'freedom of speech, assembly, association, movement and '
    + 'religion, the right to property, and freedom from '
    + 'discrimination, torture and slavery. '
    + 'It also guarantees procedure. '
    + 'A person arrested must be told the reason. '
    + 'They must be allowed a lawyer and allowed to inform the '
    + 'family. '
    + 'And they must be brought before a court within forty eight '
    + 'hours. '
    + 'Most rights carry a limit, because rights collide. '
    + 'Freedom of speech does not cover defamation. '
    + 'Freedom of assembly does not cover a riot. '
    + 'Freedom of movement can be restricted in a quarantine. '
    + 'The rule of law is the principle that everyone is subject to '
    + 'the same law and the same courts, including the President, a '
    + 'minister and a police officer. '
    + 'It requires that laws be known in advance, applied equally, '
    + 'and enforced by judges who are independent. '
    + 'It requires too that nobody be punished except by a court '
    + 'after a fair hearing. '
    + 'Rights are enforced through the High Court and through CHRAJ, '
    + 'and in practice through a free press and an active civil '
    + 'society.',

  tables: [
    {
      caption: 'Rights in the Constitution, each with its lawful limit',
      columns: ['Right', 'Lawful limitation'],
      rows: [
        ['Freedom of speech and expression',
          'Does not protect defamation, or incitement to violence'],
        ['Freedom of assembly and procession',
          'Notice may be required, and a procession may be redirected for public safety'],
        ['Freedom of movement', 'May be restricted in a quarantine or by a court order'],
        ['Right to property', 'The state may acquire land in the public interest, with compensation'],
        ['Personal liberty', 'A person may be arrested on reasonable suspicion, but only on the terms the Constitution sets'],
      ],
      note: 'A question asking whether a right is absolute is almost always '
        + 'answered no, with the limitation named. '
        + 'The limitation is the mark.',
    },
    {
      caption: 'What the rule of law requires, and the abuse each requirement blocks',
      columns: ['Requirement', 'What it prevents'],
      rows: [
        ['The law is known in advance', 'Punishing somebody for an act that was lawful when done'],
        ['Everyone is equally subject to it', 'An official who cannot be prosecuted'],
        ['Only a court may punish', 'Beating or detaining a suspect as a penalty'],
        ['A judge is independent', 'A ruling arranged by whoever appointed the judge'],
        ['A hearing is fair and public', 'A conviction nobody can examine'],
      ],
      note: 'The rule of law is not the same as having many laws. '
        + 'A government that obeys none of these can pass laws all day.',
    },
    {
      caption: 'Where a person can go when a right has been breached',
      columns: ['Body', 'What it can do'],
      rows: [
        ['The High Court', 'Enforce a right directly, and order a detained person produced'],
        ['CHRAJ', 'Investigate a complaint against a public body and recommend a remedy'],
        ['Legal Aid', 'Provide a lawyer to somebody who cannot pay'],
        ['The press and civil society', 'Make the breach public, which often ends it'],
      ],
      note: 'The last row is not a legal remedy and belongs in an answer '
        + 'anyway, because in practice it is often the fastest one.',
    },
  ],

  figure: {
    alt: 'A timeline of a lawful arrest, drawn left to right with five '
      + 'marked points. The first point is the arrest itself, labelled '
      + 'reasonable suspicion required. Immediately after it a box reads '
      + 'told the reason, in a language he understands. Next to that a box '
      + 'reads allowed to inform family and to see a lawyer. A heavy '
      + 'vertical line stands at the forty eight hour mark, labelled must '
      + 'be brought before a court within forty eight hours. Past that '
      + 'line the path splits into two branches: one labelled charged, '
      + 'then bail or remand, then trial, then appeal, and one labelled '
      + 'released. Beneath the forty eight hour line a note reads beyond '
      + 'this point, further detention without a court is unlawful, and '
      + 'the court can be asked to produce him.',
    svg: '<svg viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="40" y1="180" x2="640" y2="180"/>'
      + '<circle cx="70" cy="180" r="7" fill="#b4531a" stroke="none"/>'
      + '<text x="70" y="212" font-size="12" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">arrest</text>'
      + '<text x="70" y="228" font-size="11" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">reasonable</text>'
      + '<text x="70" y="242" font-size="11" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">suspicion</text>'
      + '<rect x="110" y="100" width="130" height="50" rx="6"/>'
      + '<text x="175" y="122" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">told the reason,</text>'
      + '<text x="175" y="138" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">in a language he knows</text>'
      + '<line x1="175" y1="150" x2="175" y2="174"/>'
      + '<rect x="256" y="100" width="150" height="50" rx="6"/>'
      + '<text x="331" y="122" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">may inform family</text>'
      + '<text x="331" y="138" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">and see a lawyer</text>'
      + '<line x1="331" y1="150" x2="331" y2="174"/>'
      + '<line x1="450" y1="60" x2="450" y2="300" stroke="#1d4ed8" '
      + 'stroke-width="4"/>'
      + '<text x="450" y="46" font-size="13" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">48 hours</text>'
      + '<text x="450" y="328" font-size="11" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">must be brought before a court</text>'
      + '<text x="450" y="344" font-size="11" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">by this point</text>'
      + '<path d="M450 180 L520 130" stroke="#0f8a4d"/>'
      + '<path d="M512 132 L524 126 L518 140" stroke="#0f8a4d"/>'
      + '<text x="534" y="118" font-size="11" fill="#0f8a4d" '
      + 'stroke="none">charged, then bail</text>'
      + '<text x="534" y="132" font-size="11" fill="#0f8a4d" '
      + 'stroke="none">or remand, then trial,</text>'
      + '<text x="534" y="146" font-size="11" fill="#0f8a4d" '
      + 'stroke="none">then appeal</text>'
      + '<path d="M450 180 L520 240" stroke="#7c3aed"/>'
      + '<path d="M512 238 L526 246 L512 252" stroke="#7c3aed"/>'
      + '<text x="534" y="248" font-size="11" fill="#7c3aed" '
      + 'stroke="none">or released</text>'
      + '<text x="220" y="372" font-size="12" fill="currentColor" '
      + 'stroke="none">'
      + 'detention past the line without a court is unlawful</text>'
      + '</svg>',
  },

  mechanism:
    'The young man in the market was owed three things and got none of '
    + 'them, and the Constitution names all three. '
    + 'He was owed the reason for his arrest, in a language he understands, '
    + 'at the time he was arrested. '
    + 'He was owed the chance to tell his family and to speak to a lawyer. '
    + 'And he was owed appearance before a court within forty eight hours, '
    + 'so that a judge rather than a police officer could decide whether he '
    + 'should be held any longer. '
    + 'Four days in a cell with no charge is not a grey area; it is '
    + 'unlawful detention, and the remedy is an application to the High '
    + 'Court requiring that he be produced. '
    + 'Notice what makes the forty eight hour rule effective, because this '
    + 'is the real lesson of the topic. '
    + 'It is not a statement of good intentions. '
    + 'It is a deadline, given to a specific institution, with a '
    + 'consequence attached. '
    + 'A right phrased as a feeling, such as everybody should be treated '
    + 'fairly, cannot be enforced by anybody. '
    + 'A right phrased as a procedure with a clock on it can be, by a court '
    + 'that simply asks what day the arrest was made. '
    + 'So the sentence to carry away is that a right is worth the procedure '
    + 'that enforces it, and in an answer about whether rights are '
    + 'protected in Ghana, the strong material is the procedures and the '
    + 'institutions, not the list in Chapter Five. '
    + 'The second idea is the rule of law, and candidates regularly '
    + 'misunderstand it as meaning that there are many laws and people obey '
    + 'them. '
    + 'That is rule by law, and a very oppressive government can satisfy '
    + 'it. '
    + 'The rule of law means something narrower and harder: that the '
    + 'government is itself inside the law. '
    + 'A minister can be sued. '
    + 'A police officer who beats a suspect has committed an assault. '
    + 'The state loses cases in its own courts, and when it does, it '
    + 'complies. '
    + 'The clearest way to say this in an examination is that under the '
    + 'rule of law there is no person and no office above the law, and that '
    + 'an independent judiciary is what makes the claim more than words. '
    + 'Independence is specific: a judge’s salary and tenure are protected '
    + 'so that ruling against the government does not cost them their job. '
    + 'Third, the limitations. '
    + 'A learner who thinks rights are absolute will write an answer that '
    + 'falls apart on the first example. '
    + 'My freedom of speech ends where it becomes incitement to kill '
    + 'somebody, and my freedom of assembly does not entitle me to block a '
    + 'hospital gate. '
    + 'Rights collide, and a constitution has to say which yields. '
    + 'The honest formulation is that a right may be limited only by law, '
    + 'only for a stated reason such as public safety or the rights of '
    + 'others, and only as far as is necessary. '
    + 'Those three tests are what separates a lawful limitation from an '
    + 'excuse, and a question about a curfew or a banned procession is '
    + 'asking you to apply them. '
    + 'Three places lose marks. '
    + 'The first is listing rights with no limitation and no enforcement. '
    + 'The second is confusing CHRAJ with a court. '
    + 'CHRAJ investigates and recommends; the High Court orders. '
    + 'Both matter and they do different things. '
    + 'The third is writing about human rights as a foreign idea imposed on '
    + 'Ghana. '
    + 'The rights in Chapter Five were written into a Ghanaian '
    + 'constitution by Ghanaians who had lived under governments that '
    + 'denied them, and the detail of the detention rules is there because '
    + 'of what had happened to people. '
    + 'Saying that is better history and a better answer.',

  recap:
    'You learned in SHS 1 that Ghana is governed under a written '
    + 'constitution, and that it divides power between an executive, a '
    + 'Parliament and a judiciary. '
    + 'The same document does something else as well. '
    + 'It lists things that may not be done to a person at all, whoever is '
    + 'in power: they may not be tortured, held without being charged, or '
    + 'punished without a trial. '
    + 'These are called fundamental human rights. '
    + 'You also know that laws apply to everybody, and that a person who '
    + 'breaks one is tried in court. '
    + 'This lesson asks what happens when the person breaking the law is '
    + 'the government, and what a citizen can actually do about it.',

  method: [
    'Name the right and say that it is in Chapter Five of the 1992 Constitution.',
    'State who holds it: every person, not only every citizen, for most rights.',
    'State the lawful limitation, and the reason the limitation exists.',
    'Name the procedure that protects it, with any time limit.',
    'Name the institution a person goes to: High Court, CHRAJ, Legal Aid.',
    'For the rule of law, say that no person or office is above the law.',
    'Add that an independent judiciary is what makes that enforceable.',
    'For a judgement question, apply the three tests: by law, for a stated reason, no further than necessary.',
  ],

  worked: [
    {
      level: 3,
      ask: 'State four fundamental human rights guaranteed by the 1992 '
        + 'Constitution of Ghana.',
      steps: [
        'Take them from different families: life and body, liberty, '
        + 'expression, and equality.',
      ],
      answer: 'The right to life; the right to personal liberty; the right '
        + 'to a fair trial; and freedom from discrimination. '
        + 'Freedom of speech, of assembly, of movement and of religion are '
        + 'equally acceptable. '
        + 'Naming Chapter Five as the source is worth adding.',
    },
    {
      level: 4,
      ask: 'A police officer arrests a woman and holds her for three days '
        + 'without charge. '
        + 'State what the Constitution requires and what she can do.',
      steps: [
        'She must be told the reason for her arrest at the time.',
        'She must be allowed to inform her family and to see a lawyer.',
        'She must be brought before a court within forty eight hours.',
        'Three days exceeds that, so the detention has become unlawful.',
      ],
      answer: 'The forty eight hour rule has been broken, so she is now '
        + 'unlawfully detained. '
        + 'An application can be made to the High Court requiring that she '
        + 'be produced and for the court to rule on the detention, and a '
        + 'complaint can be made to CHRAJ. '
        + 'The time limit is what makes the right enforceable, so it must '
        + 'be stated.',
    },
    {
      level: 5,
      ask: 'Explain the difference between the rule of law and simply '
        + 'having laws, using one Ghanaian example.',
      steps: [
        'Any government can pass laws and enforce them on the people.',
        'The rule of law requires that the government itself be bound.',
        'So a citizen must be able to sue the state, and the state must '
        + 'comply when it loses.',
        'An independent judiciary is what makes that possible.',
      ],
      answer: 'Having laws means the people are governed by rules. '
        + 'The rule of law means the government is too, so that a minister '
        + 'can be sued, a police officer who assaults a suspect has '
        + 'committed a crime, and the state obeys a judgement against it. '
        + 'In Ghana, cases brought against the state in the Supreme Court '
        + 'and complied with are the evidence for it, and judicial '
        + 'independence, protected by security of tenure and salary, is '
        + 'what makes those judgements possible.',
    },
    {
      level: 6,
      ask: 'During a public health emergency the state restricts movement '
        + 'between regions. '
        + 'A trader argues that this breaches her right to freedom of '
        + 'movement. '
        + 'Assess the argument.',
      steps: [
        'Freedom of movement is guaranteed, so the restriction does touch '
        + 'a right.',
        'But most rights may be limited, so the question is whether this '
        + 'limitation is lawful.',
        'Apply the three tests: is it imposed by law, for a stated '
        + 'legitimate reason, and no further than necessary.',
        'A restriction under a public health law, for a stated period, and '
        + 'with exceptions for essential movement, would pass; an '
        + 'indefinite one imposed by announcement would not.',
      ],
      answer: 'The right is genuinely engaged, but it is not absolute. '
        + 'If the restriction is made under a law, for the protection of '
        + 'public health, limited in time and no wider than necessary, it '
        + 'is a lawful limitation and her argument fails. '
        + 'If it rests on no law, has no end date, or goes further than '
        + 'the health purpose requires, it is unlawful however good the '
        + 'intention. '
        + 'The mark here is for applying the tests rather than for the '
        + 'conclusion.',
    },
  ],

  traps: [
    {
      mistake: 'Listing rights without their limitations.',
      why: 'Almost no right is absolute, because rights collide. '
        + 'The limitation is usually a separate mark.',
    },
    {
      mistake: 'Treating the rule of law as meaning that laws exist and are obeyed.',
      why: 'That is rule by law, and an oppressive government can satisfy '
        + 'it. '
        + 'The rule of law binds the government itself.',
    },
    {
      mistake: 'Confusing CHRAJ with a court.',
      why: 'CHRAJ investigates and recommends. '
        + 'The High Court orders, and can require a detained person to be '
        + 'produced.',
    },
    {
      mistake: 'Giving the detention limit as a week, or leaving it vague.',
      why: 'The Constitution says forty eight hours. '
        + 'A right with a deadline can be enforced; a vague one cannot.',
    },
    {
      mistake: 'Writing about human rights as an idea imported into Ghana.',
      why: 'Chapter Five was written by Ghanaians after governments that '
        + 'denied those rights. '
        + 'The detail exists because of what had happened to people.',
    },
  ],

  extension:
    'The Constitution holds a second family of rights, drafted in a '
    + 'different way. '
    + 'They are the directive principles of state policy, and they '
    + 'cover work, health, education and a decent standard of living. '
    + 'These are not enforced like the rights in Chapter Five. '
    + 'A court can order a person released from a cell. '
    + 'It cannot order a clinic into existence without a budget. '
    + 'Whether such principles should be enforceable is a live '
    + 'argument in Ghanaian law, and it is a good one to be able to '
    + 'put from both sides.',

  questions: [
    {
      id: 'hr-1',
      ask: 'Fundamental human rights in Ghana are set out in:',
      kind: 'choice',
      options: [
        'Chapter Five of the 1992 Constitution',
        'An Act of Parliament passed each year',
        'The rules of the police service',
      ],
      answer: 'Chapter Five of the 1992 Constitution',
      teach: 'Naming the chapter is worth a mark, and it also makes the '
        + 'point that the rights do not depend on the government of the '
        + 'day.',
      level: 3,
    },
    {
      id: 'hr-2',
      ask: 'An arrested person must be brought before a court within how '
        + 'many hours?',
      kind: 'numeric',
      options: [],
      answer: '48',
      teach: 'The deadline is what makes the right enforceable, because a '
        + 'court need only ask the date of the arrest.',
      level: 4,
    },
    {
      id: 'hr-3',
      ask: 'The rule of law means above all that:',
      kind: 'choice',
      options: [
        'No person or office, including the government, is above the law',
        'There are many laws and they are strictly enforced',
        'The police can arrest anyone who breaks a law',
      ],
      answer: 'No person or office, including the government, is above the law',
      teach: 'The second option is rule by law, which an oppressive '
        + 'government satisfies easily.',
      level: 5,
    },
    {
      id: 'hr-4',
      ask: 'A lawful limitation on a right must be:',
      kind: 'choice',
      options: [
        'Imposed by law, for a stated reason, and no wider than necessary',
        'Announced publicly by a minister',
        'Agreed to by the person whose right is limited',
      ],
      answer: 'Imposed by law, for a stated reason, and no wider than necessary',
      teach: 'Those three tests are what separate a limitation from an '
        + 'excuse, and applying them is the mark in a judgement question.',
      level: 6,
    },
  ],
})

/* ── development and underdevelopment ───────────────────────────────────── */

teach({
  topicId: 'development-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Growth is more output. '
      + 'Development is a better life, which includes health, schooling '
      + 'and the spread of the gains. '
      + 'So a country can grow without developing, and the measure you '
      + 'choose decides which answer you get.',
    method: [
      'Say which measure is being used, and what it leaves out.',
      'Compare at least two measures before judging.',
      'For an obstacle, trace it to the thing it actually blocks.',
    ],
  },

  why:
    'Ghana’s recorded output grew sharply after oil production began at '
    + 'Jubilee in 2010, and the national figures for those years look '
    + 'strong. '
    + 'In the same period a family in a village in the Upper West may have '
    + 'seen no clinic open, no new road, and no change in what their farm '
    + 'earned. '
    + 'Both things are true at once, and neither figure is a lie. '
    + 'So what is the national number measuring, and what is it failing to '
    + 'measure?',

  notation:
    'Gross domestic product, GDP, is the value of everything produced '
    + 'inside a country in a year. '
    + 'GDP per capita is that figure divided by the population, so it is '
    + 'an average and says nothing about the spread. '
    + 'Real GDP is GDP with inflation taken out, and nominal GDP is not, '
    + 'which is why only real figures can be compared across years. '
    + 'The Human Development Index, HDI, combines life expectancy, years '
    + 'of schooling and income into one number between 0 and 1. '
    + 'Primary production means producing a raw material such as cocoa '
    + 'beans or crude oil. '
    + 'Value addition means processing it further, into chocolate or '
    + 'refined fuel, which is where most of the money is made. '
    + 'Terms of trade means the price of what a country sells compared with '
    + 'the price of what it buys.',

  idea:
    'Economic growth is an increase in the output of a country, measured '
    + 'as a rise in real GDP. '
    + 'Development is wider. '
    + 'It means a rise in living standards: longer and healthier lives, '
    + 'more schooling, clean water, electricity, decent work, and a say in '
    + 'how the country is run. '
    + 'The two usually move together but they can come apart, and they come '
    + 'apart in a particular way: output can rise in one sector, owned by '
    + 'few people, while most people’s lives are unchanged. '
    + 'So development is measured by several indicators rather than one. '
    + 'GDP per capita gives average income. '
    + 'The Human Development Index adds health and education. '
    + 'The poverty rate counts the people below a line. '
    + 'Access figures count households with water, electricity and '
    + 'sanitation. '
    + 'Ghana’s obstacles are well known and they are connected rather than '
    + 'separate. '
    + 'The export base is narrow and mostly unprocessed, so earnings swing '
    + 'with world prices the country does not set. '
    + 'Infrastructure is uneven, so a crop can rot for want of a road. '
    + 'Debt service takes revenue that could build the road. '
    + 'Rapid population growth means services must expand simply to stand '
    + 'still. '
    + 'And corruption raises the cost of everything the state builds.',

  tables: [
    {
      caption: 'Growth and development compared',
      columns: ['Point', 'Economic growth', 'Development'],
      rows: [
        ['What it measures', 'More output', 'A better life'],
        ['Usual indicator', 'Real GDP, or GDP per capita', 'HDI, poverty rate, access to services'],
        ['Can it happen without the other', 'Yes, if the gains reach few people',
          'Rarely, since it usually needs resources'],
        ['Says anything about the spread', 'No, it is a total or an average', 'Yes, that is part of the point'],
      ],
      note: 'The third row is the examinable one. '
        + 'Growth without development is the normal pattern of an economy '
        + 'whose new output is a mineral or an oil field.',
    },
    {
      caption: 'What each measure of development tells you, and what it hides',
      columns: ['Measure', 'What it shows', 'What it hides'],
      rows: [
        ['GDP per capita', 'Average output per person',
          'Inequality, unpaid work, and whether the income is spent on anything useful'],
        ['Human Development Index', 'Health, schooling and income together',
          'Inequality within the country, and freedom'],
        ['Poverty rate', 'How many are below a line', 'How far below, and who they are'],
        ['Access to water and electricity', 'Whether a service reaches a household',
          'Whether it works reliably, and at what price'],
      ],
      note: 'No single measure is enough, which is why the answer to a '
        + 'question about Ghana’s development has to use more than one.',
    },
    {
      caption: 'Where the value in a bar of chocolate goes',
      columns: ['Stage', 'Roughly what share of the final price', 'Where it happens'],
      rows: [
        ['Growing the cocoa', 'A small share, often under a tenth', 'Ghana'],
        ['Shipping and trading the beans', 'A small share', 'Mostly abroad'],
        ['Processing, manufacture and branding', 'The largest share', 'Mostly abroad'],
        ['Retailing', 'A substantial share', 'Abroad'],
      ],
      note: 'This is the whole argument for value addition in one table. '
        + 'Ghana grows a large share of the world’s cocoa and earns a small '
        + 'share of the world’s chocolate money.',
    },
  ],

  figure: {
    alt: 'Two bars drawn one above the other for the same country over the '
      + 'same ten years. The upper bar, labelled recorded output, is '
      + 'divided into two parts: a wide part labelled oil and mining, '
      + 'growing, and a narrow part labelled agriculture and small '
      + 'business, flat. An arrow beside it points up and is labelled GDP '
      + 'rises. The lower bar, labelled how most households live, is '
      + 'divided into three parts labelled households with a clinic within '
      + 'reach, households with electricity, and households above the '
      + 'poverty line, each with a short arrow beside it that is almost '
      + 'flat. A note between the two bars says the same decade can show a '
      + 'steep line and a flat one, and that whether it is development '
      + 'depends on which line you were asked about.',
    svg: '<svg viewBox="0 0 680 400" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="40" y="40" font-size="13" fill="currentColor" '
      + 'stroke="none">recorded output over ten years</text>'
      + '<rect x="40" y="56" width="420" height="46" fill="#1d4ed8" '
      + 'fill-opacity="0.25" stroke="#1d4ed8"/>'
      + '<text x="250" y="84" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">oil and mining, growing fast</text>'
      + '<rect x="460" y="56" width="110" height="46" fill="#0f8a4d" '
      + 'fill-opacity="0.2" stroke="#0f8a4d"/>'
      + '<text x="515" y="78" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">farming and</text>'
      + '<text x="515" y="92" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">small business</text>'
      + '<line x1="600" y1="100" x2="636" y2="54" stroke="#1d4ed8" '
      + 'stroke-width="3"/>'
      + '<path d="M626 56 L640 48 L636 64" stroke="#1d4ed8" '
      + 'stroke-width="3"/>'
      + '<text x="610" y="124" font-size="12" fill="#1d4ed8" '
      + 'stroke="none">GDP</text>'
      + '<text x="606" y="138" font-size="12" fill="#1d4ed8" '
      + 'stroke="none">rises</text>'
      + '<text x="40" y="200" font-size="13" fill="currentColor" '
      + 'stroke="none">how most households live, over the same ten years</text>'
      + '<rect x="40" y="216" width="240" height="34" fill="#7c3aed" '
      + 'fill-opacity="0.2" stroke="#7c3aed"/>'
      + '<text x="160" y="238" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">a clinic within reach</text>'
      + '<line x1="300" y1="234" x2="340" y2="228" stroke="#7c3aed"/>'
      + '<path d="M332 224 L344 228 L334 236" stroke="#7c3aed"/>'
      + '<rect x="40" y="262" width="300" height="34" fill="#7c3aed" '
      + 'fill-opacity="0.2" stroke="#7c3aed"/>'
      + '<text x="190" y="284" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">electricity in the house</text>'
      + '<line x1="360" y1="280" x2="400" y2="272" stroke="#7c3aed"/>'
      + '<path d="M392 268 L404 272 L394 280" stroke="#7c3aed"/>'
      + '<rect x="40" y="308" width="270" height="34" fill="#7c3aed" '
      + 'fill-opacity="0.2" stroke="#7c3aed"/>'
      + '<text x="175" y="330" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">above the poverty line</text>'
      + '<line x1="330" y1="326" x2="370" y2="320" stroke="#7c3aed"/>'
      + '<path d="M362 316 L374 320 L364 328" stroke="#7c3aed"/>'
      + '<text x="340" y="382" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'one decade, a steep line and three flat ones: which were you asked about</text>'
      + '</svg>',
  },

  mechanism:
    'The national figure in the opening question is measuring output, and '
    + 'it is failing to measure two things: who received it, and what it '
    + 'was spent on. '
    + 'Both failures are built into the arithmetic rather than being '
    + 'mistakes. '
    + 'GDP adds up the value of what was produced inside the country. '
    + 'Oil produced offshore by a company counts in full, whoever owns the '
    + 'company and wherever the profit goes afterwards. '
    + 'And GDP per capita divides that total by the whole population, which '
    + 'is an average, and an average is silent about the spread. '
    + 'If one new sector earns a great deal and employs few people, GDP per '
    + 'capita rises and almost nobody’s income does. '
    + 'That is not a flaw in the country; it is a flaw in the measure, and '
    + 'naming it precisely is what an examiner is looking for. '
    + 'The honest way to put it is that GDP per capita measures the size of '
    + 'the cake divided by the number of people in the room, and says '
    + 'nothing about how the cake was cut. '
    + 'The Human Development Index exists because of exactly this. '
    + 'It adds two things money cannot hide: how long people live and how '
    + 'long they stay in school. '
    + 'A country cannot raise life expectancy without clinics, clean water '
    + 'and food actually reaching people, so health is a measure that has '
    + 'to be earned broadly rather than in one sector. '
    + 'That makes HDI a better single measure of development than income '
    + 'alone, and saying why, rather than just naming it, is the mark. '
    + 'It is still incomplete: it is an average too, it says nothing about '
    + 'freedom or security, and two countries with the same HDI can be very '
    + 'different places to be poor in. '
    + 'The strongest answers in this topic therefore use two or three '
    + 'measures and say what each adds. '
    + 'Now the obstacles, and here the trick is to connect them rather than '
    + 'list them. '
    + 'Take the cocoa table. '
    + 'Ghana grows a very large share of the world’s cocoa and earns a '
    + 'small share of the world’s chocolate money, because almost all the '
    + 'processing, branding and retailing happens elsewhere. '
    + 'That single fact produces several of the other obstacles. '
    + 'Export earnings depend on a world price Ghana does not set, so the '
    + 'budget swings with it. '
    + 'When the price falls the government borrows, and debt service then '
    + 'takes the revenue that would have built the feeder road that would '
    + 'have let the next harvest reach a market. '
    + 'Meanwhile the processing jobs that would have employed the young are '
    + 'in another country. '
    + 'So a candidate who writes that Ghana depends on primary exports has '
    + 'named one obstacle; a candidate who traces it through to the road '
    + 'and the job has explained three, which is what an explain question '
    + 'pays for. '
    + 'Value addition is not a slogan either, and an answer that recommends '
    + 'it should say what it requires: reliable power, a port that works, '
    + 'skilled labour, access to credit, and a market willing to buy a '
    + 'Ghanaian brand. '
    + 'Naming the requirements is what separates a recommendation from a '
    + 'wish. '
    + 'Three places lose marks. '
    + 'The first is using growth and development as the same word. '
    + 'They are not, and most questions in this topic turn on the '
    + 'difference. '
    + 'The second is comparing nominal figures across years. '
    + 'A GDP that rose ten per cent while prices rose twelve has fallen in '
    + 'real terms, and the word real is the mark. '
    + 'The third is listing obstacles with no mechanism, which reads as a '
    + 'memorised list. '
    + 'Pick two, and explain how each one blocks something specific.',

  recap:
    'Some countries are richer than others, and within one country some '
    + 'districts are plainly better off than others. '
    + 'You can see it in the things that are there: a tarred road, a clinic '
    + 'with a nurse in it, a school with a roof, water from a tap. '
    + 'In SHS 1 you looked at Ghana’s resources and its exports, and saw '
    + 'that the country sells mainly raw materials. '
    + 'This lesson asks how we decide whether a country is developing at '
    + 'all, which turns out to depend on what you choose to measure, and '
    + 'then asks what is standing in the way.',

  method: [
    'Define growth as more output and development as a better life.',
    'Name the measure in question and say what it shows.',
    'Say what that measure leaves out, especially inequality.',
    'Bring in a second measure, and say what it adds.',
    'Use real figures rather than nominal ones when comparing years.',
    'For obstacles, choose two and explain the mechanism of each.',
    'Trace one obstacle through to a second one, since they are connected.',
    'For a recommendation, state what it would require to work.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Distinguish between economic growth and development.',
      steps: [
        'Growth is about output and is measured by real GDP.',
        'Development is about living standards and is measured more '
        + 'widely.',
      ],
      answer: 'Growth is an increase in a country’s output, measured as a '
        + 'rise in real GDP. '
        + 'Development is an improvement in people’s lives, including '
        + 'health, education, water, electricity and the spread of income, '
        + 'and is measured by indicators such as the Human Development '
        + 'Index and the poverty rate. '
        + 'A country can grow without developing, which is the point of '
        + 'the distinction.',
    },
    {
      level: 4,
      ask: 'Why is GDP per capita an incomplete measure of development?',
      steps: [
        'It is a total divided by a population, so it is an average.',
        'An average says nothing about how the income is distributed.',
        'It also counts output regardless of who owns it or what it is '
        + 'spent on.',
      ],
      answer: 'Because it is an average and hides inequality. '
        + 'If a new sector earns a great deal and employs few people, GDP '
        + 'per capita rises while most incomes do not. '
        + 'It also ignores health, schooling, and unpaid work, which is why '
        + 'the Human Development Index was created alongside it.',
    },
    {
      level: 5,
      ask: 'Ghana grows a large share of the world’s cocoa but earns a '
        + 'small share of the value of chocolate. '
        + 'Explain this and state two things that would be needed to change '
        + 'it.',
      steps: [
        'Most of the value in chocolate is added in processing, '
        + 'manufacture, branding and retail.',
        'Almost all of those stages happen outside Ghana.',
        'So the country sells the cheapest part of the chain.',
        'Changing it means doing more of those stages here.',
      ],
      answer: 'Because Ghana exports a primary product and the value is '
        + 'added elsewhere, so the country captures only the farm gate '
        + 'share of the final price. '
        + 'Two requirements for changing it: reliable and affordable '
        + 'electricity for processing plants, and access to credit together '
        + 'with a market that will buy a Ghanaian branded product. '
        + 'A third, skilled labour and working port logistics, is worth '
        + 'adding. '
        + 'Naming the requirements is what distinguishes a recommendation '
        + 'from a wish.',
    },
    {
      level: 6,
      ask: 'A country records 6 per cent growth in nominal GDP in a year in '
        + 'which prices rose 9 per cent, and its HDI is unchanged. '
        + 'Assess whether the country developed that year.',
      steps: [
        { math: '6\\% - 9\\% = -3\\%', why: 'Real GDP fell, because prices rose faster than output value.' },
        'So there was no real growth at all, and the nominal figure is '
        + 'misleading.',
        'An unchanged HDI means life expectancy, schooling and income '
        + 'together did not improve.',
        'Neither measure supports a claim of development.',
      ],
      answer: 'No. '
        + 'Real output fell by about 3 per cent once inflation is taken '
        + 'out, so there was not even growth, and the unchanged HDI shows '
        + 'no improvement in health, schooling or income. '
        + 'The 6 per cent figure is nominal and should not be quoted '
        + 'without the inflation rate beside it. '
        + 'A full answer notes that one year is also too short a period to '
        + 'judge development, which moves slowly.',
    },
  ],

  traps: [
    {
      mistake: 'Using growth and development as the same word.',
      why: 'Growth is output and development is living standards. '
        + 'Most questions in this topic turn on the difference.',
    },
    {
      mistake: 'Quoting a nominal GDP rise as if it were real growth.',
      why: 'Subtract inflation first. '
        + 'A 6 per cent rise with 9 per cent inflation is a fall.',
    },
    {
      mistake: 'Treating GDP per capita as a measure of how people live.',
      why: 'It is an average and hides the spread entirely. '
        + 'Bring in HDI or the poverty rate.',
    },
    {
      mistake: 'Listing obstacles with no mechanism.',
      why: 'Choose two and explain what each one actually blocks. '
        + 'A list reads as memorised and scores as memorised.',
    },
    {
      mistake: 'Recommending value addition without saying what it needs.',
      why: 'Power, credit, skills, logistics and a market. '
        + 'Without those the recommendation is a wish.',
    },
  ],

  extension:
    'There is an argument that a country rich in one valuable '
    + 'mineral can be worse off for having it. '
    + 'It is called the resource curse, and the ways it works are '
    + 'specific. '
    + 'Export earnings push up the currency, which makes every other '
    + 'export too dear to sell. '
    + 'The government stops needing to tax its people, so it stops '
    + 'needing to answer to them. '
    + 'And the revenue is large enough to be worth capturing, so '
    + 'people try to capture it. '
    + 'Not every country with a resource suffers this. '
    + 'Botswana escaped it by saving the diamond money and spending '
    + 'it on schools rather than on consumption.',

  questions: [
    {
      id: 'dv-1',
      ask: 'Economic growth is measured by:',
      kind: 'choice',
      options: [
        'A rise in real GDP',
        'A rise in the Human Development Index',
        'A fall in the poverty rate',
      ],
      answer: 'A rise in real GDP',
      teach: 'The other two are measures of development, which is the '
        + 'wider idea.',
      level: 3,
    },
    {
      id: 'dv-2',
      ask: 'The Human Development Index combines income with:',
      kind: 'choice',
      options: [
        'Life expectancy and years of schooling',
        'Exports and imports',
        'Employment and inflation',
      ],
      answer: 'Life expectancy and years of schooling',
      teach: 'Both of those have to be earned broadly, which is why HDI is '
        + 'harder to raise with one profitable sector.',
      level: 4,
    },
    {
      id: 'dv-3',
      ask: 'Nominal GDP rises 6 per cent while prices rise 9 per cent. '
        + 'Real GDP has:',
      kind: 'choice',
      options: ['Fallen by about 3 per cent', 'Risen by 6 per cent', 'Stayed the same'],
      answer: 'Fallen by about 3 per cent',
      teach: 'Always take inflation out before comparing years. '
        + 'The word real is the mark.',
      level: 5,
    },
    {
      id: 'dv-4',
      ask: 'Ghana earns a small share of the value of chocolate mainly '
        + 'because:',
      kind: 'choice',
      options: [
        'The processing, branding and retail happen abroad',
        'Ghanaian cocoa is of poor quality',
        'Too little cocoa is grown',
      ],
      answer: 'The processing, branding and retail happen abroad',
      teach: 'That is the case for value addition, and an answer should '
        + 'also say what value addition would require.',
      level: 5,
    },
  ],
})

/* ── population and urbanisation ────────────────────────────────────────── */

teach({
  topicId: 'population-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A population is described by its size, its growth and its '
      + 'structure, and structure matters most. '
      + 'Ghana has a young population, so a large share is dependent on a '
      + 'smaller working share. '
      + 'Migration moves people to cities faster than cities can build '
      + 'for them, and that gap is what urban problems are made of.',
    method: [
      'Read the structure first, from a pyramid or from the shares by age.',
      'Work out the dependency ratio before saying anything about pressure on services.',
      'For migration, separate push factors from pull factors.',
    ],
  },

  why:
    'Walk through Nima or Agbogbloshie in Accra and you will meet people '
    + 'from every region of Ghana, most of them young, many of them living '
    + 'four or five to a room and working in the street. '
    + 'The city did not plan for them and has not built for them. '
    + 'Yet they came on purpose, and if you ask, almost none of them wants '
    + 'to go back. '
    + 'So why do people move to a place that has nowhere to put them, and '
    + 'why does the city keep growing anyway?',

  notation:
    'A census is the official count of a population, taken in Ghana every '
    + 'ten years. '
    + 'Birth rate and death rate are given per thousand people per year. '
    + 'Natural increase is birth rate minus death rate, and it is the '
    + 'growth that happens without any migration. '
    + 'Emigration is leaving a country and immigration is entering one; '
    + 'internal migration is moving within one country, which is what '
    + 'rural to urban movement is. '
    + 'A population pyramid is a graph of the population by age and sex, '
    + 'and its shape is the whole story. '
    + 'The dependency ratio is the number of people under 15 and over 64 '
    + 'for every hundred people aged 15 to 64. '
    + 'Urbanisation is the rising share of a population living in towns, '
    + 'which is not the same as a town getting bigger.',

  idea:
    'A population changes by births, deaths and migration, and nothing '
    + 'else. '
    + 'Natural increase is the birth rate minus the death rate. '
    + 'Ghana’s death rate fell through the twentieth century as medicine, '
    + 'water and food improved, while the birth rate fell more slowly, so '
    + 'the population grew quickly and became young. '
    + 'That is why a population pyramid for Ghana has a broad base and '
    + 'narrow top. '
    + 'The consequence is a high dependency ratio: a large number of '
    + 'children to be fed, schooled and treated by a smaller working group, '
    + 'so the same revenue has to be spread further. '
    + 'Migration adds a second movement. '
    + 'People leave the countryside because of push factors: small '
    + 'landholdings, poor soil, no electricity, no secondary school, few '
    + 'paid jobs. '
    + 'They go to the city because of pull factors: work, however '
    + 'insecure, schools, hospitals, electricity and the belief that '
    + 'something will turn up. '
    + 'Since the movers are mostly young adults, the countryside loses the '
    + 'people who would have farmed it and the city gains people of '
    + 'childbearing age, so the city then grows from births as well. '
    + 'Rapid urban growth strains housing, sanitation, water, drainage, '
    + 'transport and schools, and the strain shows as slums, refuse, '
    + 'flooding, traffic and crowded classrooms.',

  tables: [
    {
      caption: 'Why people leave the village and why they choose the city',
      columns: ['Push factors, from the village', 'Pull factors, to the city'],
      rows: [
        ['Land divided too small to live on', 'Paid work, even if casual'],
        ['Poor soils and unreliable rain', 'Senior high schools and training'],
        ['No electricity or piped water', 'Electricity, water and health care'],
        ['No secondary school nearby', 'Entertainment, and the company of other young people'],
        ['Few paid jobs of any kind', 'The example of somebody who went and succeeded'],
      ],
      note: 'The last pull factor is the strongest and the least often '
        + 'named. '
        + 'One person who sends money home convinces a whole village that '
        + 'the move works.',
    },
    {
      caption: 'Rapid urban growth: what gets strained, and what it looks like',
      columns: ['What is strained', 'What is actually seen'],
      rows: [
        ['Housing', 'Slums, and several families to a room'],
        ['Sanitation and drainage', 'Choked gutters, refuse heaps, flooding in the rains'],
        ['Water supply', 'Standpipes, water sold by the bucket at a high price'],
        ['Transport', 'Traffic, long commutes, accidents'],
        ['Schools and clinics', 'Large classes and long queues'],
        ['Employment', 'Street hawking and other insecure work'],
      ],
      note: 'None of these is caused by the migrants. '
        + 'They are caused by people arriving faster than services are '
        + 'built, which is a planning and revenue problem.',
    },
    {
      caption: 'A young population and an old one compared',
      columns: ['Point', 'Young population, broad base', 'Ageing population, narrow base'],
      rows: [
        ['Main dependent group', 'Children', 'Older people'],
        ['Pressure falls on', 'Schools, child health, food', 'Pensions and hospitals'],
        ['Labour force in twenty years', 'Large and growing', 'Shrinking'],
        ['Policy that helps', 'Schooling, jobs for school leavers, family planning',
          'Later retirement, immigration'],
      ],
      note: 'A young population is a cost now and an opportunity later, but '
        + 'only if the children are schooled and the jobs exist when they '
        + 'finish.',
    },
  ],

  figure: {
    alt: 'A population pyramid drawn as horizontal bars stacked in age '
      + 'bands, with males on the left of a central line and females on '
      + 'the right. The bands are labelled from nought to four at the '
      + 'bottom up to sixty five and over at the top. The lowest bars are '
      + 'much the longest and each band above is shorter, giving a broad '
      + 'triangle. A bracket on the left spans the bands from nought to '
      + 'fourteen and is labelled dependent, children. A bracket spans the '
      + 'bands from fifteen to sixty four and is labelled working age. A '
      + 'short bracket at the top spans sixty five and over and is '
      + 'labelled dependent, older people. A note beside the pyramid says '
      + 'that the broad base means a high dependency ratio, so every '
      + 'hundred workers support a large number of dependants, and a '
      + 'second note says the base also means that a large number of '
      + 'school places and then jobs will be needed in the next twenty '
      + 'years.',
    svg: '<svg viewBox="0 0 680 420" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="300" y1="40" x2="300" y2="360" stroke-dasharray="3 3" '
      + 'stroke-opacity="0.5"/>'
      + '<text x="200" y="32" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">males</text>'
      + '<text x="400" y="32" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">females</text>'
      + '<rect x="180" y="330" width="120" height="26" fill="#1d4ed8" '
      + 'fill-opacity="0.25" stroke="#1d4ed8"/>'
      + '<rect x="300" y="330" width="118" height="26" fill="#b4531a" '
      + 'fill-opacity="0.25" stroke="#b4531a"/>'
      + '<text x="150" y="348" font-size="11" text-anchor="end" '
      + 'fill="currentColor" stroke="none">0 to 4</text>'
      + '<rect x="196" y="300" width="104" height="26" fill="#1d4ed8" '
      + 'fill-opacity="0.25" stroke="#1d4ed8"/>'
      + '<rect x="300" y="300" width="102" height="26" fill="#b4531a" '
      + 'fill-opacity="0.25" stroke="#b4531a"/>'
      + '<text x="150" y="318" font-size="11" text-anchor="end" '
      + 'fill="currentColor" stroke="none">5 to 9</text>'
      + '<rect x="212" y="270" width="88" height="26" fill="#1d4ed8" '
      + 'fill-opacity="0.25" stroke="#1d4ed8"/>'
      + '<rect x="300" y="270" width="86" height="26" fill="#b4531a" '
      + 'fill-opacity="0.25" stroke="#b4531a"/>'
      + '<text x="150" y="288" font-size="11" text-anchor="end" '
      + 'fill="currentColor" stroke="none">10 to 14</text>'
      + '<rect x="228" y="240" width="72" height="26" fill="#1d4ed8" '
      + 'fill-opacity="0.18" stroke="#1d4ed8"/>'
      + '<rect x="300" y="240" width="74" height="26" fill="#b4531a" '
      + 'fill-opacity="0.18" stroke="#b4531a"/>'
      + '<text x="150" y="258" font-size="11" text-anchor="end" '
      + 'fill="currentColor" stroke="none">15 to 24</text>'
      + '<rect x="240" y="210" width="60" height="26" fill="#1d4ed8" '
      + 'fill-opacity="0.18" stroke="#1d4ed8"/>'
      + '<rect x="300" y="210" width="62" height="26" fill="#b4531a" '
      + 'fill-opacity="0.18" stroke="#b4531a"/>'
      + '<text x="150" y="228" font-size="11" text-anchor="end" '
      + 'fill="currentColor" stroke="none">25 to 39</text>'
      + '<rect x="256" y="180" width="44" height="26" fill="#1d4ed8" '
      + 'fill-opacity="0.18" stroke="#1d4ed8"/>'
      + '<rect x="300" y="180" width="46" height="26" fill="#b4531a" '
      + 'fill-opacity="0.18" stroke="#b4531a"/>'
      + '<text x="150" y="198" font-size="11" text-anchor="end" '
      + 'fill="currentColor" stroke="none">40 to 54</text>'
      + '<rect x="272" y="150" width="28" height="26" fill="#1d4ed8" '
      + 'fill-opacity="0.18" stroke="#1d4ed8"/>'
      + '<rect x="300" y="150" width="30" height="26" fill="#b4531a" '
      + 'fill-opacity="0.18" stroke="#b4531a"/>'
      + '<text x="150" y="168" font-size="11" text-anchor="end" '
      + 'fill="currentColor" stroke="none">55 to 64</text>'
      + '<rect x="284" y="120" width="16" height="26" fill="#0f8a4d" '
      + 'fill-opacity="0.25" stroke="#0f8a4d"/>'
      + '<rect x="300" y="120" width="18" height="26" fill="#0f8a4d" '
      + 'fill-opacity="0.25" stroke="#0f8a4d"/>'
      + '<text x="150" y="138" font-size="11" text-anchor="end" '
      + 'fill="currentColor" stroke="none">65 and over</text>'
      + '<line x1="446" y1="270" x2="446" y2="356" stroke="#1d4ed8" '
      + 'stroke-width="3"/>'
      + '<text x="456" y="300" font-size="11" fill="#1d4ed8" '
      + 'stroke="none">dependent:</text>'
      + '<text x="456" y="314" font-size="11" fill="#1d4ed8" '
      + 'stroke="none">children</text>'
      + '<line x1="446" y1="150" x2="446" y2="266" stroke="currentColor" '
      + 'stroke-width="3"/>'
      + '<text x="456" y="208" font-size="11" fill="currentColor" '
      + 'stroke="none">working age</text>'
      + '<line x1="446" y1="120" x2="446" y2="146" stroke="#0f8a4d" '
      + 'stroke-width="3"/>'
      + '<text x="456" y="136" font-size="11" fill="#0f8a4d" '
      + 'stroke="none">dependent: older</text>'
      + '<text x="340" y="390" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'a broad base means a high dependency ratio now</text>'
      + '<text x="340" y="408" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'and a great many school places and jobs needed soon</text>'
      + '</svg>',
  },

  mechanism:
    'The reason people move to a city that has nowhere to put them is that '
    + 'they are not comparing the city with a good village. '
    + 'They are comparing it with their village. '
    + 'A young man with a quarter of an acre of tired land, no electricity, '
    + 'and no paid work within walking distance is not weighing a slum '
    + 'against a comfortable farm. '
    + 'He is weighing a slum with casual work against no work at all, and '
    + 'on those terms the move is rational. '
    + 'That is the correct way to answer a question about rural to urban '
    + 'migration, and it is better than a list, because it explains why the '
    + 'movement continues after everybody knows the city is crowded. '
    + 'It also explains the strongest pull factor, which is the one '
    + 'candidates leave out: somebody from the village already went and '
    + 'sends money home. '
    + 'That person is proof, and proof beats any amount of official '
    + 'discouragement. '
    + 'The second mechanism is the structure of the population, and this is '
    + 'where the arithmetic earns marks. '
    + 'Ghana’s death rate fell long before its birth rate did, and that gap '
    + 'is what produced both rapid growth and a young population. '
    + 'A young population means a high dependency ratio, and the ratio is '
    + 'worth calculating rather than described, because the number makes '
    + 'the argument. '
    + 'If 40 people in a hundred are under 15 and 4 are over 64, then 56 '
    + 'are of working age, and the dependency ratio is 44 over 56 times a '
    + 'hundred, which is about 79. '
    + 'So every hundred workers are supporting about seventy nine '
    + 'dependants. '
    + 'In a country where many of those hundred workers are themselves in '
    + 'insecure work, that number is the whole explanation of why schools '
    + 'are crowded and why a tax base is thin. '
    + 'The third mechanism is the one that makes urban problems a planning '
    + 'question rather than a migration question. '
    + 'A city gaining four per cent of its population every year must '
    + 'build four per cent more drains, classrooms and water connections '
    + 'every year simply to stay where it is. '
    + 'Nobody builds at that rate, so the shortfall accumulates, and the '
    + 'accumulation is what a slum is. '
    + 'This matters because it decides what a sensible policy answer looks '
    + 'like. '
    + 'Trying to stop people moving does not work and has been tried in '
    + 'many countries. '
    + 'What does work is making the village worth staying in, by putting '
    + 'secondary schools, electricity, feeder roads and processing work '
    + 'there, and at the same time planning the city for the arrivals who '
    + 'will come anyway: serviced land, drains, and transport. '
    + 'A question asking how to reduce rural to urban migration wants that '
    + 'two sided answer, and the word to use is decentralisation. '
    + 'Three places lose marks. '
    + 'The first is blaming migrants for urban problems. '
    + 'The problems come from services not keeping pace, and saying so is '
    + 'both fairer and better analysis. '
    + 'The second is confusing urbanisation with urban growth. '
    + 'Urbanisation is a rising share of the population in towns; a town '
    + 'can grow while the share stays the same if the countryside is '
    + 'growing just as fast. '
    + 'The third is forgetting that migration changes the village too. '
    + 'The people who leave are the young and able, so the village is left '
    + 'with children and the old, less labour for farming, and a higher '
    + 'dependency ratio of its own. '
    + 'A question about the effects of migration has two halves, and '
    + 'candidates reliably answer only the urban one.',

  recap:
    'Ghana counts its people in a census, and the count has risen with '
    + 'every one. '
    + 'More people need more food, more schools, more clinics and more '
    + 'water, so the size of a population matters to a government. '
    + 'You also know from your own family that people move: somebody has '
    + 'gone to Accra or Kumasi for work, and perhaps sends money back. '
    + 'Towns in Ghana have grown very fast and villages in some districts '
    + 'have not. '
    + 'This lesson looks at the shape of the population as well as its '
    + 'size, because the shape is what decides how much pressure a country '
    + 'is under, and then follows the people who move.',

  method: [
    'State the population size and growth if given, and say what drives the growth.',
    'Read the structure from the pyramid: broad base means young.',
    'Calculate the dependency ratio and interpret the number.',
    'For migration, list push factors and pull factors separately.',
    'Name the age group that moves, and say what that does to both places.',
    'For urban problems, say that services have not kept pace with arrivals.',
    'Keep urbanisation and urban growth distinct.',
    'For a policy answer, give both sides: improve the village and plan the city.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A country has a birth rate of 30 per thousand and a death rate '
        + 'of 8 per thousand. '
        + 'Find its rate of natural increase.',
      steps: [
        { math: '30 - 8 = 22\\ \\text{per thousand}' },
        'That is 2.2 per cent a year, before any migration is counted.',
      ],
      answer: '22 per thousand, or 2.2 per cent a year. '
        + 'At that rate the population doubles in about thirty two years, '
        + 'which is why a falling death rate with a high birth rate '
        + 'produces rapid growth.',
    },
    {
      level: 4,
      ask: 'In a population of 100 people, 40 are under 15, 4 are over 64 '
        + 'and the rest are of working age. '
        + 'Find the dependency ratio and say what it means.',
      steps: [
        { math: '100 - 40 - 4 = 56\\ \\text{of working age}' },
        { math: '\\frac{40 + 4}{56} \\times 100 = 79' },
      ],
      answer: 'About 79. '
        + 'Every hundred people of working age are supporting about seventy '
        + 'nine dependants, which is why schools and child health take so '
        + 'large a share of public spending and why the tax base is thin.',
    },
    {
      level: 5,
      ask: 'Explain why young people continue to move to Accra although '
        + 'everybody knows housing there is scarce and expensive.',
      steps: [
        'The comparison they make is not between Accra and a comfortable '
        + 'village.',
        'It is between Accra and the village they actually live in.',
        'In that village there may be no paid work, no electricity and no '
        + 'senior high school.',
        'And somebody who already went is sending money home, which is '
        + 'proof that the move can work.',
      ],
      answer: 'Because the alternative is worse, not because the city is '
        + 'good. '
        + 'Casual work in a crowded room beats no work at all, and the '
        + 'success of an earlier migrant is visible evidence to the whole '
        + 'village. '
        + 'That is why discouragement does not change the flow and why '
        + 'improving the village is the only policy that does.',
    },
    {
      level: 6,
      ask: 'A city grows by 4 per cent a year. '
        + 'Explain why slums expand even though the city authority builds '
        + 'new housing every year, and suggest a two sided policy '
        + 'response.',
      steps: [
        'A 4 per cent rise means the city needs 4 per cent more housing, '
        + 'drains, water and classrooms each year simply to stand still.',
        'Building is almost never that fast, so a shortfall is added every '
        + 'year.',
        'The accumulated shortfall is what a slum consists of.',
        'So a response must act on both the arrivals and the village they '
        + 'come from.',
      ],
      answer: 'Because the shortfall is cumulative: anything less than 4 '
        + 'per cent a year adds to the backlog, and the backlog is the '
        + 'slum. '
        + 'A two sided response is needed. '
        + 'In the city, service land ahead of settlement, with drains, '
        + 'water and transport, so arrivals build on planned plots rather '
        + 'than on gutters. '
        + 'In the regions, decentralise: secondary schools, electricity, '
        + 'feeder roads and crop processing, so that staying is a real '
        + 'choice. '
        + 'A policy that only tries to stop people moving has been tried '
        + 'elsewhere and does not work.',
    },
  ],

  traps: [
    {
      mistake: 'Blaming migrants for urban problems.',
      why: 'The problems come from services not keeping pace with '
        + 'arrivals. '
        + 'That is a planning and revenue failure, not a failure of the '
        + 'people who moved.',
    },
    {
      mistake: 'Using urbanisation and urban growth as the same thing.',
      why: 'Urbanisation is a rising share of the population in towns. '
        + 'A town can grow without the share changing.',
    },
    {
      mistake: 'Answering a migration question with only the urban effects.',
      why: 'The village loses its young and able workers, so it is left '
        + 'with a higher dependency ratio and less farm labour. '
        + 'Both halves are needed.',
    },
    {
      mistake: 'Describing a pyramid without calculating the dependency ratio.',
      why: 'The number is the argument. '
        + 'Work it out and then interpret it.',
    },
    {
      mistake: 'Treating a young population as purely a burden.',
      why: 'It is a cost now and a large labour force later, but only if '
        + 'the children are schooled and jobs exist when they finish.',
    },
  ],

  extension:
    'A falling birth rate opens a window that economists call the '
    + 'demographic dividend. '
    + 'For a few decades the children already born have reached '
    + 'working age, while fewer are being born behind them. '
    + 'So the dependency ratio falls and the working share of the '
    + 'population is unusually large. '
    + 'Several Asian countries grew fastest during exactly that '
    + 'window. '
    + 'The window is not a gift. '
    + 'It pays only if there are jobs and schooling for the people '
    + 'passing through it, and a country that wastes it ends up with '
    + 'an older population and nothing saved.',

  questions: [
    {
      id: 'pp-1',
      ask: 'Natural increase in a population is:',
      kind: 'choice',
      options: [
        'Birth rate minus death rate',
        'Births plus immigration',
        'Total population divided by area',
      ],
      answer: 'Birth rate minus death rate',
      teach: 'It is the growth that happens with no migration at all. '
        + 'The last option is population density.',
      level: 3,
    },
    {
      id: 'pp-2',
      ask: 'In a group of 100 people, 44 are dependants and 56 are of '
        + 'working age. The dependency ratio is about:',
      kind: 'numeric',
      options: [],
      answer: '79',
      teach: '44 divided by 56, times 100. '
        + 'It means 79 dependants for every 100 workers.',
      level: 4,
    },
    {
      id: 'pp-3',
      ask: 'A population pyramid with a very broad base shows a population '
        + 'that is:',
      kind: 'choice',
      options: [
        'Young, with a high dependency ratio',
        'Ageing, with a pension burden',
        'Shrinking',
      ],
      answer: 'Young, with a high dependency ratio',
      teach: 'It also means a large number of school places and then jobs '
        + 'will be needed within twenty years.',
      level: 4,
    },
    {
      id: 'pp-4',
      ask: 'Slums expand in a fast growing city mainly because:',
      kind: 'choice',
      options: [
        'Services are built more slowly than people arrive, so the shortfall accumulates',
        'Migrants prefer to live cheaply',
        'City authorities build no housing at all',
      ],
      answer: 'Services are built more slowly than people arrive, so the shortfall accumulates',
      teach: 'A city growing four per cent a year needs four per cent more '
        + 'of everything each year just to stand still.',
      level: 6,
    },
  ],
})

/* ── family, marriage and inheritance ───────────────────────────────────── */

teach({
  topicId: 'family-marriage-shs',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Ghana recognises three forms of marriage: customary, Islamic and '
      + 'marriage under the Ordinance. '
      + 'They differ in what they require and in what rights they give. '
      + 'Inheritance under customary law follows the lineage, matrilineal '
      + 'or patrilineal, while the Intestate Succession Law gives the '
      + 'spouse and children the greater part.',
    method: [
      'Identify which form of marriage is in question.',
      'State what that form requires and whether it is registered.',
      'For inheritance, ask first whether there is a will.',
    ],
  },

  why:
    'A man dies in Kumasi without leaving a will. '
    + 'He had a house, a shop and a bank account, a wife of twenty years, '
    + 'four children, and a large extended family. '
    + 'Within a week his relatives have arrived, taken the keys and told '
    + 'his widow that the house belongs to the family, as it would have '
    + 'done in his grandfather’s time. '
    + 'She believes the house is hers and the children’s. '
    + 'Both sides are sure they are right, and both are describing a real '
    + 'rule. '
    + 'Which rule actually applies, and why did it change?',

  notation:
    'A nuclear family is parents and their children; an extended family '
    + 'includes grandparents, aunts, uncles and cousins. '
    + 'A lineage is the line of descent through which a person belongs to '
    + 'a family group. '
    + 'Matrilineal means descent and inheritance traced through the mother, '
    + 'as among the Akan; patrilineal means through the father, as among '
    + 'the Ewe, Ga, Dagomba and most northern groups. '
    + 'Monogamy is marriage to one spouse and polygamy to more than one; '
    + 'polygyny, a man with more than one wife, is the form practised in '
    + 'Ghana. '
    + 'Testate means dying having left a valid will; intestate means dying '
    + 'without one. '
    + 'PNDCL 111 is the Intestate Succession Law of 1985, which is the law '
    + 'examined at this level. '
    + 'Marriage under the Ordinance means marriage under the Marriage Act, '
    + 'registered and monogamous.',

  idea:
    'The family is the first institution a person belongs to. '
    + 'It feeds, teaches and socialises its members before any school '
    + 'or any state does. '
    + 'In Ghana the extended family is still strong. '
    + 'It holds property, settles disputes, pays for funerals and '
    + 'supports members in difficulty. '
    + 'Three forms of marriage are recognised by law. '
    + 'A customary marriage is contracted between two families, '
    + 'according to the custom of the community, with drinks and '
    + 'bride wealth presented and witnesses present, and it permits a '
    + 'man more than one wife. '
    + 'An Islamic marriage is contracted under Islamic law and is '
    + 'also potentially polygynous. '
    + 'A marriage under the Ordinance is contracted before a '
    + 'registrar or a licensed place of worship. '
    + 'It is strictly monogamous and it is registered. '
    + 'All three are valid marriages. '
    + 'A customary marriage may also be registered, which makes it '
    + 'far easier to prove later. '
    + 'Inheritance then has two possible routes. '
    + 'If there is a valid will, the property goes as the will '
    + 'directs. '
    + 'If the person dies without one, the Intestate Succession Law '
    + 'applies. '
    + 'The household goods and one house go to the surviving spouse '
    + 'and the children. '
    + 'The rest is divided among the spouse, the children, the '
    + 'surviving parents and the customary family, in shares the law '
    + 'fixes. '
    + 'Before that law, customary rules sent even self acquired '
    + 'property to the lineage. '
    + 'In a matrilineal system that meant a man’s sister’s children '
    + 'rather than his own.',

  tables: [
    {
      caption: 'The three forms of marriage recognised in Ghana',
      columns: ['Form', 'How it is contracted', 'More than one spouse',
        'Registered'],
      rows: [
        ['Customary', 'Between two families, with drinks, bride wealth and witnesses',
          'Permitted for a man', 'May be registered, and should be'],
        ['Islamic', 'Under Islamic law, before witnesses', 'Permitted, up to four',
          'May be registered'],
        ['Ordinance', 'Before a registrar or a licensed place of worship',
          'Not permitted, strictly monogamous', 'Always registered'],
      ],
      note: 'All three are valid. '
        + 'Registration does not make a marriage real; it makes it '
        + 'provable, which matters in a dispute over property or a '
        + 'pension.',
    },
    {
      caption: 'Matrilineal and patrilineal inheritance under customary law',
      columns: ['Point', 'Matrilineal, as among the Akan', 'Patrilineal, as among the Ewe and Ga'],
      rows: [
        ['Descent traced through', 'The mother', 'The father'],
        ['A man’s customary heir', 'His sister’s son', 'His own son'],
        ['A woman’s children belong to', 'Her own lineage', 'Her husband’s lineage'],
        ['Who is a close relative', 'Mother’s brother, sister’s children', 'Father’s brother, own children'],
      ],
      note: 'In neither system does a widow inherit under the old customary '
        + 'rule, which is the reason a statute was needed.',
    },
    {
      caption: 'What happens to property when a person dies, under the two routes',
      columns: ['Situation', 'What governs it', 'Who takes'],
      rows: [
        ['A valid will was made', 'The will', 'Whoever the will names'],
        ['No will, after 1985', 'The Intestate Succession Law',
          'Spouse and children take the house and chattels and the greater part of the rest'],
        ['No will, under old customary rule', 'Customary law of the lineage',
          'The lineage heir, not the widow or children'],
      ],
      note: 'The middle row is the law now. '
        + 'The bottom row is what many families still believe, and the gap '
        + 'between the two is where most inheritance disputes in Ghana come '
        + 'from.',
    },
  ],

  figure: {
    alt: 'Two family trees side by side, each showing the same three '
      + 'generations with squares for men and circles for women. On the '
      + 'left, labelled matrilineal, the man who has died is marked with a '
      + 'cross, and a thick arrow runs from him sideways to his sister and '
      + 'down to her son, labelled customary heir under matrilineal law: '
      + 'the sister’s son. A thin dotted line runs down to his own wife '
      + 'and children, labelled took nothing under the old rule. On the '
      + 'right, labelled patrilineal, the same man is marked with a cross '
      + 'and a thick arrow runs straight down to his own son, labelled '
      + 'customary heir under patrilineal law: his own son, with a dotted '
      + 'line to the widow labelled still took nothing. Below both trees a '
      + 'single wide box reads: since 1985, where there is no will, the '
      + 'Intestate Succession Law gives the house and household goods to '
      + 'the spouse and children, whichever lineage system the family '
      + 'follows.',
    svg: '<svg viewBox="0 0 680 440" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="150" y="30" font-size="13" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">matrilineal</text>'
      + '<rect x="120" y="100" width="34" height="34"/>'
      + '<line x1="124" y1="104" x2="150" y2="130" stroke="#b4531a"/>'
      + '<line x1="150" y1="104" x2="124" y2="130" stroke="#b4531a"/>'
      + '<text x="96" y="122" font-size="11" text-anchor="end" '
      + 'fill="currentColor" stroke="none">the man</text>'
      + '<text x="96" y="136" font-size="11" text-anchor="end" '
      + 'fill="currentColor" stroke="none">who died</text>'
      + '<circle cx="230" cy="117" r="18"/>'
      + '<text x="230" y="92" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">his sister</text>'
      + '<line x1="154" y1="117" x2="212" y2="117"/>'
      + '<line x1="230" y1="135" x2="230" y2="176" stroke="#1d4ed8" '
      + 'stroke-width="4"/>'
      + '<path d="M223 168 L230 182 L237 168" stroke="#1d4ed8" '
      + 'stroke-width="4"/>'
      + '<rect x="213" y="186" width="34" height="34" stroke="#1d4ed8"/>'
      + '<text x="258" y="200" font-size="11" fill="#1d4ed8" '
      + 'stroke="none">her son:</text>'
      + '<text x="258" y="214" font-size="11" fill="#1d4ed8" '
      + 'stroke="none">the heir</text>'
      + '<circle cx="80" cy="200" r="18" stroke-dasharray="3 3"/>'
      + '<line x1="130" y1="134" x2="92" y2="186" stroke-dasharray="3 3"/>'
      + '<rect x="40" y="260" width="28" height="28" stroke-dasharray="3 3"/>'
      + '<rect x="80" y="260" width="28" height="28" stroke-dasharray="3 3"/>'
      + '<line x1="80" y1="218" x2="80" y2="256" stroke-dasharray="3 3"/>'
      + '<text x="20" y="312" font-size="11" fill="currentColor" '
      + 'stroke="none">his wife and children:</text>'
      + '<text x="20" y="326" font-size="11" fill="currentColor" '
      + 'stroke="none">nothing, under the old rule</text>'
      + '<text x="500" y="30" font-size="13" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">patrilineal</text>'
      + '<rect x="470" y="100" width="34" height="34"/>'
      + '<line x1="474" y1="104" x2="500" y2="130" stroke="#b4531a"/>'
      + '<line x1="500" y1="104" x2="474" y2="130" stroke="#b4531a"/>'
      + '<text x="446" y="122" font-size="11" text-anchor="end" '
      + 'fill="currentColor" stroke="none">the man</text>'
      + '<text x="446" y="136" font-size="11" text-anchor="end" '
      + 'fill="currentColor" stroke="none">who died</text>'
      + '<line x1="487" y1="134" x2="487" y2="176" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<path d="M480 168 L487 182 L494 168" stroke="#0f8a4d" '
      + 'stroke-width="4"/>'
      + '<rect x="470" y="186" width="34" height="34" stroke="#0f8a4d"/>'
      + '<text x="516" y="200" font-size="11" fill="#0f8a4d" '
      + 'stroke="none">his own son:</text>'
      + '<text x="516" y="214" font-size="11" fill="#0f8a4d" '
      + 'stroke="none">the heir</text>'
      + '<circle cx="600" cy="117" r="18" stroke-dasharray="3 3"/>'
      + '<line x1="504" y1="117" x2="582" y2="117" stroke-dasharray="3 3"/>'
      + '<text x="626" y="150" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">the widow:</text>'
      + '<text x="626" y="164" font-size="11" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">still nothing</text>'
      + '<rect x="40" y="356" width="600" height="64" rx="8" '
      + 'stroke="#7c3aed" stroke-width="3"/>'
      + '<text x="340" y="380" font-size="12" text-anchor="middle" '
      + 'fill="#7c3aed" stroke="none">'
      + 'since 1985, where there is no will, the Intestate Succession Law gives the house</text>'
      + '<text x="340" y="398" font-size="12" text-anchor="middle" '
      + 'fill="#7c3aed" stroke="none">'
      + 'and the household goods to the spouse and the children,</text>'
      + '<text x="340" y="414" font-size="12" text-anchor="middle" '
      + 'fill="#7c3aed" stroke="none">'
      + 'whichever lineage system the family follows</text>'
      + '</svg>',
  },

  mechanism:
    'Both sides in the opening dispute are describing a real rule, and '
    + 'that is exactly why the dispute happens. '
    + 'The relatives are describing customary law, under which a man’s self '
    + 'acquired property passed to his lineage. '
    + 'In a matrilineal Akan family the lineage runs through the mother, so '
    + 'the heir was his sister’s son and not his own son, and his widow was '
    + 'not a member of his lineage at all. '
    + 'The system was not designed to be cruel. '
    + 'It made sense when property was lineage land rather than a house '
    + 'built from a salary, when the lineage fed and housed the widow and '
    + 'children in return, and when a woman’s own lineage was obliged to '
    + 'support her. '
    + 'What changed was not the morality but the facts. '
    + 'Men began acquiring property by their own earnings in towns far from '
    + 'their lineage, marriages became more often between people from '
    + 'different lineages and places, and the lineage’s obligation to '
    + 'maintain the widow weakened while its claim on the property did not. '
    + 'The result was widows and children evicted from houses they had '
    + 'helped to build. '
    + 'That is the problem the Intestate Succession Law of 1985 was passed '
    + 'to solve, and it solved it in a specific way: where there is no '
    + 'will, the household chattels and one house go to the surviving '
    + 'spouse and the children, and the rest is divided among the spouse, '
    + 'the children, the surviving parents and the customary family in '
    + 'shares the statute sets. '
    + 'So the answer to the dispute is that the statute applies and the '
    + 'relatives are describing a rule the law replaced. '
    + 'A candidate who can say both halves of that, the old rule and the '
    + 'statute that displaced it, has the question. '
    + 'Two practical points follow and they are worth more than any amount '
    + 'of description. '
    + 'The first is the will. '
    + 'None of this difficulty arises where a valid will exists, because '
    + 'the will governs and the Intestate Succession Law applies only on '
    + 'intestacy. '
    + 'A will is a short document, needs two witnesses, and settles the '
    + 'matter before it can become a quarrel at a funeral. '
    + 'That is a sentence worth carrying out of this lesson into life. '
    + 'The second is registration. '
    + 'A customary marriage is a real marriage whether registered or not, '
    + 'and the law does not doubt it. '
    + 'But a widow claiming under the statute has to prove she was the '
    + 'spouse, and in a contested case a registered marriage is proved with '
    + 'a certificate while an unregistered one has to be proved with the '
    + 'memory of witnesses, some of whom may be on the other side. '
    + 'So registration does not create the marriage; it protects the person '
    + 'who will one day have to establish it. '
    + 'Three places lose marks. '
    + 'The first is treating customary marriage as inferior or informal. '
    + 'It is one of three legally recognised forms, and the difference that '
    + 'matters in law is monogamy and proof, not validity. '
    + 'The second is saying that matrilineal means women inherit. '
    + 'It does not. '
    + 'It means descent is traced through women, and the heir is still '
    + 'usually a man, the sister’s son. '
    + 'This is the single commonest error in the topic. '
    + 'The third is forgetting the will. '
    + 'A question beginning with a death should always be answered by '
    + 'asking first whether there was a will, because that one fact decides '
    + 'which rules are even relevant. '
    + 'One honest note on the law. '
    + 'Statutes in this area are reviewed from time to time and the '
    + 'detailed shares have been debated and amended, so an answer is '
    + 'safest if it states the principle, that the spouse and children take '
    + 'the greater part where there is no will, and names PNDCL 111 as the '
    + 'law that established it. '
    + 'The principle is what is examined; the fractions are the part most '
    + 'likely to change.',

  recap:
    'You belong to a family, and in Ghana that usually means more than '
    + 'your parents and your brothers and sisters. '
    + 'Aunts, uncles, cousins and grandparents are family in a way that '
    + 'carries real duties: funerals are paid for together, school fees are '
    + 'helped with, and disputes are settled by elders. '
    + 'You also know that people marry in different ways, in church, at a '
    + 'registry, in a mosque, or by the two families meeting and presenting '
    + 'drinks. '
    + 'What you may not know is that those differences matter in law, and '
    + 'that they decide what happens to a house when somebody dies. '
    + 'This lesson is about those rules and about why one of them was '
    + 'changed by Parliament.',

  method: [
    'Identify the kind of family or the form of marriage in question.',
    'State how that form is contracted and whether more than one spouse is allowed.',
    'Say whether it is registered, and why registration matters for proof.',
    'For an inheritance question, ask first whether there is a valid will.',
    'If there is a will, the will governs and the statute does not apply.',
    'If there is no will, apply the Intestate Succession Law and name it.',
    'If customary law is being described, say whether the system is matrilineal or patrilineal.',
    'Explain any change in the law by the change in circumstances that caused it.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Name the three forms of marriage recognised in Ghana and state '
        + 'one difference between them.',
      steps: [
        'Customary, Islamic, and marriage under the Ordinance.',
        'The clearest legal difference is the number of spouses allowed.',
      ],
      answer: 'Customary marriage, Islamic marriage, and marriage under the '
        + 'Ordinance. '
        + 'The Ordinance form is strictly monogamous, while the other two '
        + 'permit a man more than one wife. '
        + 'All three are valid marriages in Ghanaian law.',
    },
    {
      level: 4,
      ask: 'Explain the difference between a matrilineal and a patrilineal '
        + 'system of inheritance, with a Ghanaian example of each.',
      steps: [
        'Matrilineal means descent is traced through the mother.',
        'So a man’s customary heir is his sister’s son, not his own son.',
        'Patrilineal means descent is traced through the father.',
        'So a man’s customary heir is his own son.',
      ],
      answer: 'In a matrilineal system, as among the Akan, descent and '
        + 'inheritance pass through the mother, so a man’s customary heir '
        + 'is his sister’s son. '
        + 'In a patrilineal system, as among the Ewe, Ga and the northern '
        + 'groups, descent passes through the father and the heir is his '
        + 'own son. '
        + 'Note that matrilineal does not mean women inherit: the heir is '
        + 'usually still a man.',
    },
    {
      level: 5,
      ask: 'A man dies intestate. '
        + 'His relatives claim his house under customary law and his widow '
        + 'disputes it. '
        + 'State which rule applies and why the law was changed.',
      steps: [
        'He left no will, so the Intestate Succession Law applies.',
        'Under that law the house and the household goods go to the '
        + 'surviving spouse and children.',
        'Under the earlier customary rule the property went to the '
        + 'lineage, and a widow was not a member of her husband’s '
        + 'lineage.',
        'That rule was workable while the lineage also maintained the '
        + 'widow, and it stopped being workable when men acquired property '
        + 'by their own earnings away from the lineage.',
      ],
      answer: 'The Intestate Succession Law applies, so the widow and the '
        + 'children take the house and the household goods, and the '
        + 'remainder is shared in the statutory shares. '
        + 'The law was passed because widows and children were being '
        + 'evicted from property they had helped build, once the lineage '
        + 'kept its claim on property without keeping its obligation to '
        + 'maintain them. '
        + 'Both halves, the rule and the reason for the change, are needed '
        + 'for full marks.',
    },
    {
      level: 6,
      ask: 'A woman married by customary rites thirty years ago, never '
        + 'registered, is contesting her late husband’s estate against his '
        + 'family, who deny she was ever his wife. '
        + 'Assess her position and state what would have made it stronger.',
      steps: [
        'A customary marriage is valid in law whether registered or not, '
        + 'so her claim is good in principle.',
        'But the statute gives rights to a spouse, and she must prove she '
        + 'was the spouse.',
        'Without registration, proof depends on witnesses to the rites and '
        + 'evidence of how the couple lived.',
        'Some of those witnesses are the very family contesting her '
        + 'claim.',
      ],
      answer: 'Her marriage is legally valid, so if she can prove it she '
        + 'takes as a spouse under the Intestate Succession Law. '
        + 'Her difficulty is evidential rather than legal: she must '
        + 'establish the marriage by witnesses to the customary rites and '
        + 'by evidence of cohabitation and public recognition, and the '
        + 'people best placed to give that evidence are on the other side. '
        + 'Registration of the customary marriage would have given her a '
        + 'certificate and removed the question entirely, and a will would '
        + 'have removed the dispute altogether. '
        + 'That is the practical lesson of the topic and it is worth '
        + 'stating as the conclusion.',
    },
  ],

  traps: [
    {
      mistake: 'Saying matrilineal means women inherit.',
      why: 'It means descent is traced through the mother. '
        + 'The customary heir is usually still a man, the sister’s son.',
    },
    {
      mistake: 'Treating customary marriage as informal or not a real marriage.',
      why: 'It is one of three legally recognised forms. '
        + 'What registration adds is proof, not validity.',
    },
    {
      mistake: 'Applying the Intestate Succession Law where there is a will.',
      why: 'The statute governs intestacy only. '
        + 'Ask first whether there is a valid will.',
    },
    {
      mistake: 'Describing the old customary rule as simply unjust.',
      why: 'It worked while the lineage also maintained the widow and '
        + 'children. '
        + 'The reform answered a change in circumstances, and saying so is '
        + 'better analysis.',
    },
    {
      mistake: 'Quoting exact statutory fractions with confidence.',
      why: 'The principle, that spouse and children take the greater part, '
        + 'is what is examined. '
        + 'The detailed shares are the part most liable to amendment.',
    },
  ],

  extension:
    'Marriage under the Ordinance has one effect that surprises '
    + 'people. '
    + 'It is strictly monogamous. '
    + 'So a person already married under the Ordinance who goes '
    + 'through a second ceremony commits bigamy, which is a crime, '
    + 'and the second union is void. '
    + 'The reverse case is more common and harder. '
    + 'A man is married by custom to one wife, and then marries '
    + 'another woman under the Ordinance. '
    + 'Ghanaian courts have had to untangle households like that, and '
    + 'the untangling shows what happens when two systems of law '
    + 'reach the same family.',

  questions: [
    {
      id: 'fm-1',
      ask: 'Which form of marriage in Ghana is strictly monogamous?',
      kind: 'choice',
      options: [
        'Marriage under the Ordinance',
        'Customary marriage',
        'Islamic marriage',
      ],
      answer: 'Marriage under the Ordinance',
      teach: 'The other two permit a man more than one wife. '
        + 'All three are valid marriages.',
      level: 3,
    },
    {
      id: 'fm-2',
      ask: 'In a matrilineal system, a man’s customary heir is:',
      kind: 'choice',
      options: [
        'His sister’s son',
        'His own son',
        'His wife',
      ],
      answer: 'His sister’s son',
      teach: 'Descent is traced through the mother, so his own children '
        + 'belong to their mother’s lineage, not to his.',
      level: 4,
    },
    {
      id: 'fm-3',
      ask: 'Where a person dies leaving a valid will, the estate is '
        + 'distributed according to:',
      kind: 'choice',
      options: [
        'The will',
        'The Intestate Succession Law',
        'The custom of the lineage',
      ],
      answer: 'The will',
      teach: 'The statute applies only on intestacy. '
        + 'Always ask first whether there is a will.',
      level: 4,
    },
    {
      id: 'fm-4',
      ask: 'Registering a customary marriage mainly:',
      kind: 'choice',
      options: [
        'Makes the marriage easier to prove later',
        'Makes the marriage legally valid',
        'Converts it into an Ordinance marriage',
      ],
      answer: 'Makes the marriage easier to prove later',
      teach: 'It was already valid. '
        + 'The certificate matters on the day somebody has to establish '
        + 'the marriage in a dispute.',
      level: 6,
    },
  ],
})
