/**
 * Stored lessons for SHS 1 Elective Economics.
 *
 * Written at about grade 9, which is inside the SHS expectation of 10 to 12.
 *
 * ── What the subject is doing ─────────────────────────────────────────────
 *
 * Economics begins from one fact and never leaves it. Wants are unlimited
 * and the means of satisfying them are not, so every use of a resource is
 * also a refusal of some other use. The whole of the first year follows
 * from that: opportunity cost is the refusal measured, an economic system
 * is a method for deciding the refusals, the factors of production are what
 * is being allocated, and demand and supply is the mechanism a market uses
 * to decide.
 *
 * ── What changes at SHS ───────────────────────────────────────────────────
 *
 * The subject is new to most learners at SHS 1, so these lessons define
 * carefully. What they will not do is let a definition stand alone. In
 * Economics a definition is worth a mark and the application is worth
 * three, so each lesson gives a Ghanaian decision to apply it to: a
 * district with one budget and two needs, a farmer choosing between maize
 * and tomatoes, a trader facing a price change she did not cause.
 *
 * ── Diagrams ──────────────────────────────────────────────────────────────
 *
 * The demand and supply lesson carries a figure, because the diagram is
 * itself examined: axes labelled, curves labelled, equilibrium marked, and
 * the distinction between a movement along a curve and a shift of the whole
 * curve. That distinction is where most of the marks in the topic are won
 * or lost, and it cannot be learned from prose alone.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── scarcity, choice and opportunity cost ──────────────────────────────── */

teach({
  topicId: 'scarcity-econ',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Wants are unlimited and resources are limited. '
      + 'That is scarcity. '
      + 'Scarcity forces choice. '
      + 'Every choice gives something up. '
      + 'The opportunity cost of a decision '
      + 'is the next best thing you did not choose. '
      + 'It is the true cost, because the money price '
      + 'does not say what the money would otherwise have bought.',
    method: [
      'Name the resource and say what it is limited to.',
      'List the alternative uses.',
      'Choose one.',
      'The opportunity cost is the best of those not chosen.',
      'Name one alternative only, not all of them.',
    ],
  },

  idea:
    'Human wants are unlimited. '
    + 'The resources for meeting them are limited. '
    + 'That gap is scarcity, '
    + 'and it is the starting fact of economics. '
    + 'Because resources are scarce, choices must be made. '
    + 'Every choice has a cost that is not written on a price tag. '
    + 'The opportunity cost of any decision '
    + 'is the value of the next best alternative given up. '
    + 'It is sometimes called the real cost or the true cost. '
    + 'A free good is one with no opportunity cost, '
    + 'because taking it deprives nobody, '
    + 'and genuine examples are rare. '
    + 'An economic good is scarce, so it has an opportunity cost. '
    + 'The three central questions every society must answer '
    + 'follow from scarcity. '
    + 'What to produce, since not everything can be produced. '
    + 'How to produce it, since labour and machinery '
    + 'can be combined in different ways. '
    + 'And for whom to produce, since output must be shared out. '
    + 'A production possibility curve shows the combinations '
    + 'of two goods an economy could produce '
    + 'using all its resources efficiently. '
    + 'Moving along the curve to get more of one good '
    + 'means less of the other, '
    + 'and that trade off is opportunity cost drawn.',

  mechanism:
    'The idea that gives learners trouble '
    + 'is that opportunity cost is not money. '
    + 'So take a real decision. '
    + 'A district assembly has 400000 cedis. '
    + 'It can build a clinic or rehabilitate a feeder road. '
    + 'It builds the clinic. '
    + 'What did the clinic cost? '
    + 'A learner says 400000 cedis. '
    + 'An economist says the road. '
    + 'The money figure tells you the price. '
    + 'It does not tell you what was lost, '
    + 'because the loss depends on what the money '
    + 'would otherwise have bought. '
    + 'If the alternative had been repainting the assembly offices, '
    + 'the same 400000 cedis would have cost the district very little. '
    + 'Because the alternative was a road that farmers need '
    + 'to get produce to market, the cost was high. '
    + 'Same price, different cost. '
    + 'That is the whole idea, and it is worth stating in those words. '
    + 'Now the three errors that cost marks. '
    + 'The first is listing every alternative. '
    + 'Opportunity cost is the next best alternative forgone, '
    + 'in the singular. '
    + 'If the district could have built a road, a market shed '
    + 'or a borehole, '
    + 'the opportunity cost is whichever one it would have chosen next, '
    + 'and not the sum of all three. '
    + 'The reason is simple: the money could only have done one of them, '
    + 'so only one was actually given up. '
    + 'Learners write all three and lose the mark. '
    + 'The second is forgetting that time and labour are resources too. '
    + 'A learner who spends Saturday at a funeral '
    + 'has an opportunity cost even though nobody paid anything, '
    + 'and it is the revision, or the work, '
    + 'that the Saturday would otherwise have held. '
    + 'A question about a non-monetary decision '
    + 'is testing exactly that, '
    + 'and an answer that says the cost was nothing has missed it. '
    + 'The third is calling an abundant thing free. '
    + 'Sunlight is usually given as the free good example '
    + 'and it is a reasonable one. '
    + 'Water is not, '
    + 'even where it falls from the sky, '
    + 'because clean water delivered to a tap in Accra '
    + 'uses resources that could have gone elsewhere. '
    + 'The test for a free good is not whether it is abundant '
    + 'but whether using it deprives anybody. '
    + 'Land was once treated as free and is not now, '
    + 'which shows the category can change. '
    + 'What has to be written down in this topic '
    + 'is the alternative, named. '
    + 'Not that there was an opportunity cost, '
    + 'but that the opportunity cost of building the clinic '
    + 'was the feeder road, '
    + 'which would have reduced the cost of moving produce to market. '
    + 'The named alternative is the mark, '
    + 'and the consequence of losing it is the second mark.',

  recap:
    'You know that money runs out '
    + 'and that you cannot buy everything you want. '
    + 'This gives that the name scarcity, '
    + 'and shows how to measure what a choice really cost.',

  method: [
    'Name the scarce resource and state how much there is.',
    'List the possible uses.',
    'State the choice made.',
    'Identify the next best use that was given up.',
    'Name that one alternative, not all of them.',
    'Say what losing it means in practice.',
    'For a non-monetary decision, remember time and labour are '
      + 'resources.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Define scarcity and give one example from a Ghanaian '
        + 'household.',
      steps: [
        'Scarcity is unlimited wants against limited resources.',
      ],
      answer: 'Scarcity is the gap between unlimited human wants '
        + 'and the limited resources available to meet them. '
        + 'A household with 200 cedis for the week '
        + 'cannot both repair the roof and buy a school uniform, '
        + 'so it must choose.',
    },
    {
      level: 3,
      ask: 'A farmer has one hectare. '
        + 'He can plant maize and earn 3000 cedis, '
        + 'tomatoes and earn 5000 cedis, '
        + 'or cassava and earn 2000 cedis. '
        + 'He plants tomatoes. '
        + 'What is his opportunity cost?',
      steps: [
        'He chose the tomatoes.',
        'The next best alternative is maize at 3000 cedis.',
        'Cassava was never the next best.',
      ],
      answer: 'The maize, worth 3000 cedis. '
        + 'That is the next best alternative given up. '
        + 'It is not 5000 cedis of maize and cassava together, '
        + 'because the hectare could only have carried one of them.',
    },
    {
      level: 4,
      ask: 'A district assembly spends 400000 cedis on a clinic '
        + 'rather than a feeder road. '
        + 'State the opportunity cost and explain '
        + 'why it is a better measure of cost than the money figure.',
      steps: [
        'The alternative given up was the road.',
        'The money figure is the same whatever the alternative was.',
        'The real loss depends on what the money would have bought.',
      ],
      answer: 'The opportunity cost is the feeder road, '
        + 'and with it the lower transport costs '
        + 'that farmers would have gained in moving produce to market. '
        + 'The money figure of 400000 cedis would be the same '
        + 'whether the alternative was a road or a coat of paint '
        + 'on the assembly offices, '
        + 'so it says nothing about what was actually lost. '
        + 'The opportunity cost does, '
        + 'which is why it is called the true cost.',
    },
    {
      level: 5,
      ask: 'Is water a free good in Ghana? '
        + 'Argue your answer using the test for a free good.',
      steps: [
        'The test is whether using it deprives anybody.',
        'Rain falling on a village deprives nobody.',
        'Treated water piped to a tap uses labour, pipes, power and '
          + 'chemicals.',
        'Those resources had other uses.',
      ],
      answer: 'Rain falling on a field is close to a free good, '
        + 'because one farmer using it does not deprive another. '
        + 'But treated water delivered to a tap is not free at all, '
        + 'because the pipes, the pumping, the chemicals and the labour '
        + 'are scarce resources that could have been used elsewhere. '
        + 'So the same substance can be a free good in one form '
        + 'and an economic good in another. '
        + 'The test is not abundance but whether use by one '
        + 'deprives another, '
        + 'which is why land, once treated as free, is not free now.',
    },
  ],

  traps: [
    {
      mistake: 'Giving the money price as the opportunity cost.',
      why: 'The price is the same whatever the alternative was. '
        + 'The cost is what the money would otherwise have bought.',
    },
    {
      mistake: 'Listing every alternative given up.',
      why: 'Opportunity cost is the next best alternative, singular. '
        + 'Only one could actually have been chosen.',
    },
    {
      mistake: 'Saying a decision that cost no money had no cost.',
      why: 'Time and labour are scarce resources. '
        + 'A Saturday spent one way is a Saturday not spent another.',
    },
    {
      mistake: 'Calling anything abundant a free good.',
      why: 'The test is whether use by one deprives another. '
        + 'Piped water is abundant and not free.',
    },
  ],

  extension:
    'Economists apply opportunity cost to decisions '
    + 'that look like they have no alternative. '
    + 'Staying in school has a money cost in fees, '
    + 'and it also has an opportunity cost: '
    + 'the wages the learner could have earned in those years. '
    + 'For a learner from a poor household '
    + 'that forgone income is the real barrier, '
    + 'not the fees, '
    + 'which is why free tuition alone does not always keep children '
    + 'in school '
    + 'and why some programmes pay families to send them. '
    + 'Seeing the forgone wage as part of the cost '
    + 'explains a policy that otherwise looks like a handout.',

  questions: [
    {
      id: 'scar-1',
      ask: 'Scarcity exists because:',
      kind: 'choice',
      options: [
        'wants are unlimited and resources are limited',
        'people are poor',
        'prices are too high',
      ],
      answer: 'wants are unlimited and resources are limited',
      teach: 'Scarcity is a relation between wants and means, '
        + 'so it applies to rich societies too.',
      level: 2,
    },
    {
      id: 'scar-2',
      ask: 'The opportunity cost of a choice is:',
      kind: 'choice',
      options: [
        'the next best alternative given up',
        'the money paid',
        'all the alternatives given up',
      ],
      answer: 'the next best alternative given up',
      teach: 'One alternative, the best of those not chosen, '
        + 'since only one could have been taken.',
      level: 3,
    },
    {
      id: 'scar-3',
      ask: 'A farmer could earn 3000 from maize, 5000 from tomatoes '
        + 'or 2000 from cassava on one plot. '
        + 'He plants tomatoes. '
        + 'His opportunity cost in cedis is:',
      kind: 'numeric',
      options: [],
      answer: '3000',
      teach: 'The next best was maize at 3000. '
        + 'Cassava was never the next best.',
      level: 4,
    },
    {
      id: 'scar-4',
      ask: 'Which is the test for a free good?',
      kind: 'choice',
      options: [
        'Using it deprives nobody',
        'It is plentiful',
        'Nobody charges for it',
      ],
      answer: 'Using it deprives nobody',
      teach: 'Plenty is not the test. '
        + 'Piped water is plentiful in a city and is not free.',
      level: 5,
    },
    {
      id: 'scar-5',
      ask: 'The three central questions of any economy are '
        + 'what to produce, how to produce and:',
      kind: 'choice',
      options: [
        'for whom to produce',
        'when to produce',
        'where to produce',
      ],
      answer: 'for whom to produce',
      teach: 'Output has to be shared out, '
        + 'and how it is shared is the third question.',
      level: 3,
    },
  ],
})

/* ── economic systems ───────────────────────────────────────────────────── */

teach({
  topicId: 'systems-econ',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An economic system is how a society decides '
      + 'what to produce, how, and for whom. '
      + 'In a market economy prices decide, '
      + 'and the means of production are privately owned. '
      + 'In a planned economy the state decides and owns. '
      + 'A mixed economy uses both, '
      + 'with private firms and a state that regulates '
      + 'and provides some services. '
      + 'Ghana is a mixed economy.',
    method: [
      'Ask who owns the means of production.',
      'Ask who decides what is produced.',
      'Prices and private owners mean a market system.',
      'The state deciding and owning means a planned system.',
      'Both together mean mixed, and say where each operates.',
    ],
  },

  idea:
    'An economic system is how a society answers '
    + 'its three questions. '
    + 'What to produce, how to produce it, and for whom. '
    + 'Take the free market or capitalist system first. '
    + 'The means of production are privately owned, '
    + 'and prices make the decisions. '
    + 'A rising price says more is wanted, '
    + 'and it draws producers in. '
    + 'A falling price does the opposite. '
    + 'The system rewards efficiency. '
    + 'It also tends to produce inequality, '
    + 'and it underprovides goods nobody can charge for. '
    + 'Next the planned or command system. '
    + 'The state owns the means of production, '
    + 'and it decides output by a plan instead of by prices. '
    + 'It can send resources to chosen priorities, '
    + 'and it can reduce inequality. '
    + 'But it has no price signals to tell it what people want, '
    + 'so shortages and surpluses are common. '
    + 'A mixed economy joins the two. '
    + 'Most production is private and guided by prices. '
    + 'The state regulates, taxes, '
    + 'provides what the market underprovides, '
    + 'and sometimes owns key firms. '
    + 'Ghana is a mixed economy. '
    + 'Farms, shops and most firms are privately owned. '
    + 'The state runs much of education and health, '
    + 'regulates through bodies such as the Bank of Ghana, '
    + 'and holds stakes in electricity and petroleum.',

  mechanism:
    'The question worth answering first '
    + 'is what a price actually does, '
    + 'because that is the difference between the two pure systems. '
    + 'A price is a piece of information. '
    + 'When tomatoes become scarce the price rises, '
    + 'and that single number tells every farmer in the country '
    + 'that tomatoes are wanted, '
    + 'without anybody having to survey the farmers or write a plan. '
    + 'It also tells every buyer to use tomatoes more sparingly. '
    + 'One number, two messages, no administration. '
    + 'That is the strength of a market, '
    + 'and it is why a planned economy finds the same job so hard: '
    + 'a planner must gather by survey and by report '
    + 'what a price conveys automatically, '
    + 'and the information arrives late and incomplete. '
    + 'Saying that in an answer is worth more '
    + 'than a list of advantages, '
    + 'because it explains why the advantages exist. '
    + 'Now the other side, which an answer must also give. '
    + 'A price only registers the wants of people who have money. '
    + 'A market will supply a mobile phone to somebody who can pay '
    + 'and will not supply a mosquito net '
    + 'to somebody who cannot, '
    + 'however badly it is needed. '
    + 'And some goods cannot be charged for at all. '
    + 'Street lighting serves whoever walks under it, '
    + 'so no firm can sell it, '
    + 'so no firm will provide it, '
    + 'though everybody wants it. '
    + 'The same is true of national defence, '
    + 'flood drains and immunisation. '
    + 'These are public goods, '
    + 'and their existence is the economic argument for the state, '
    + 'not a political preference. '
    + 'A learner who can name one public good '
    + 'and say why a market will not supply it '
    + 'has the central justification for a mixed economy. '
    + 'Here is where marks go. '
    + 'The first error is describing the systems '
    + 'and never placing Ghana. '
    + 'Almost every question in this topic ends '
    + 'by asking where Ghana fits, '
    + 'and the answer is mixed, with examples on both sides. '
    + 'Private: farms, trading, banks, telecommunications, '
    + 'the great majority of employment. '
    + 'State: basic education and public health, '
    + 'regulation by the Bank of Ghana '
    + 'and the Public Utilities Regulatory Commission, '
    + 'and holdings in electricity and petroleum. '
    + 'Two examples each side and the mark is secure. '
    + 'The second error is treating mixed as a halfway position '
    + 'with nothing to say for it. '
    + 'The case for a mixed economy is specific: '
    + 'use prices where they work, '
    + 'which is most production, '
    + 'and use the state where prices fail, '
    + 'which is public goods, '
    + 'natural monopolies such as water pipes, '
    + 'and services where leaving people out is unacceptable. '
    + 'That is an argument rather than a compromise. '
    + 'The third error is loading one system with all the virtues. '
    + 'An answer saying the market is efficient '
    + 'and the planned economy failed '
    + 'has not noticed that planned economies achieved '
    + 'rapid industrialisation and near universal literacy '
    + 'in several countries, '
    + 'nor that market economies produce '
    + 'serious inequality and recurring crises. '
    + 'Give each system its strength and its weakness, '
    + 'then judge. '
    + 'What has to be written down is ownership and decision making, '
    + 'as two separate questions. '
    + 'A system can be described wrongly '
    + 'by answering only one of them.',

  recap:
    'You know some things are sold in a market '
    + 'and some are provided by government. '
    + 'This says what each method is good at, '
    + 'and why almost every country uses both.',

  method: [
    'State who owns the means of production.',
    'State who decides what is produced.',
    'Name the system from those two answers.',
    'Give one strength and one weakness.',
    'Name a public good and say why a market will not supply it.',
    'Place Ghana as mixed, with two private and two state examples.',
    'Make the case for mixing as an argument, not a compromise.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Distinguish a market economy from a planned economy '
        + 'on ownership and decision making.',
      steps: [
        'Two questions: who owns, and who decides.',
      ],
      answer: 'In a market economy the means of production '
        + 'are privately owned, '
        + 'and what is produced is decided through prices: '
        + 'a rising price attracts producers and discourages buyers. '
        + 'In a planned economy the state owns the means of production '
        + 'and decides output through a plan. '
        + 'Both questions must be answered, '
        + 'because a system can be misdescribed '
        + 'by answering only one.',
    },
    {
      level: 4,
      ask: 'Explain how a rise in the price of tomatoes '
        + 'coordinates producers and buyers '
        + 'without anybody giving instructions.',
      steps: [
        'A higher price makes tomato growing more profitable.',
        'So more farmers plant tomatoes.',
        'The same higher price makes buyers use fewer.',
        'Both responses reduce the shortage.',
      ],
      answer: 'The higher price makes growing tomatoes more profitable, '
        + 'so farmers plant more of them, '
        + 'which increases supply. '
        + 'The same higher price makes buyers '
        + 'use tomatoes more sparingly or substitute something else, '
        + 'which reduces demand. '
        + 'Both responses close the shortage, '
        + 'and neither required a survey, a plan or an instruction. '
        + 'The single number carried the information to everybody at '
        + 'once.',
    },
    {
      level: 4,
      ask: 'Why will a free market not supply street lighting? '
        + 'What follows?',
      steps: [
        'Lighting serves whoever passes under it.',
        'A firm cannot charge only those who benefit.',
        'So no firm can make money providing it.',
        'But everybody wants it.',
      ],
      answer: 'Street lighting serves everybody who passes under it, '
        + 'and a firm cannot exclude those who have not paid, '
        + 'so it cannot charge for it and cannot profit from it. '
        + 'A market therefore will not supply it, '
        + 'even though everybody wants it. '
        + 'This is a public good, '
        + 'and it is the economic argument for the state '
        + 'providing some goods out of taxation. '
        + 'Flood drains, defence and immunisation are the same case.',
    },
    {
      level: 5,
      ask: 'Place Ghana among the economic systems, '
        + 'with evidence, and argue whether the balance is right.',
      steps: [
        'Private sector examples.',
        'State sector examples.',
        'So the system is mixed.',
        'Give an argument on each side of the balance.',
      ],
      answer: 'Ghana is a mixed economy. '
        + 'The private sector holds farming, trading, banking '
        + 'and telecommunications, '
        + 'and employs the great majority of workers. '
        + 'The state provides basic education and public health, '
        + 'regulates through the Bank of Ghana '
        + 'and the Public Utilities Regulatory Commission, '
        + 'and holds interests in electricity and petroleum. '
        + 'On the balance, one argument is that the state should do less, '
        + 'since state enterprises have often run at a loss '
        + 'and the money could reduce borrowing. '
        + 'The other is that the state should do more '
        + 'in areas the market underserves, '
        + 'such as rural health and feeder roads, '
        + 'where private provision has not appeared. '
        + 'Either position can score full marks if it is argued '
        + 'and the evidence on both sides is given first.',
    },
  ],

  traps: [
    {
      mistake: 'Describing the systems without placing Ghana.',
      why: 'Almost every question ends there. '
        + 'Say mixed, and give two examples on each side.',
    },
    {
      mistake: 'Treating a mixed economy as a compromise with no case.',
      why: 'The case is specific: '
        + 'prices where they work, the state where prices fail.',
    },
    {
      mistake: 'Saying a market supplies whatever people need.',
      why: 'It supplies what people can pay for. '
        + 'A public good cannot be charged for at all.',
    },
    {
      mistake: 'Giving one system all the virtues.',
      why: 'Markets produce inequality and crises; '
        + 'planned economies achieved fast industrialisation. '
        + 'Give each a strength and a weakness.',
    },
  ],

  extension:
    'Ghana has tried both ends of the range within living memory. '
    + 'In the 1960s the state built factories '
    + 'and set up marketing boards, '
    + 'in a deliberately planned direction. '
    + 'From the mid 1980s the structural adjustment programmes '
    + 'moved sharply the other way, '
    + 'selling state enterprises and removing price controls. '
    + 'Neither period settled the argument. '
    + 'What it does show is that the mix is a policy choice '
    + 'that a country revisits, '
    + 'not a permanent category it belongs to, '
    + 'and that the cost of each shift '
    + 'falls on particular people who can be named.',

  questions: [
    {
      id: 'sys-1',
      ask: 'In a market economy, decisions about what to produce '
        + 'are made mainly by:',
      kind: 'choice',
      options: ['prices', 'a government plan', 'the largest firm'],
      answer: 'prices',
      teach: 'A price carries information to producers and buyers '
        + 'at the same time.',
      level: 3,
    },
    {
      id: 'sys-2',
      ask: 'A public good is one that:',
      kind: 'choice',
      options: [
        'cannot be withheld from those who do not pay',
        'the government happens to provide',
        'is cheap to produce',
      ],
      answer: 'cannot be withheld from those who do not pay',
      teach: 'That is why no firm can charge for it, '
        + 'and why the market will not supply it.',
      level: 5,
    },
    {
      id: 'sys-3',
      ask: 'Ghana is best described as having:',
      kind: 'choice',
      options: [
        'a mixed economy',
        'a planned economy',
        'a pure market economy',
      ],
      answer: 'a mixed economy',
      teach: 'Most production is private, '
        + 'while the state regulates and provides key services.',
      level: 3,
    },
    {
      id: 'sys-4',
      ask: 'The main weakness of a planned economy is that it lacks:',
      kind: 'choice',
      options: [
        'price signals showing what people want',
        'any form of ownership',
        'workers',
      ],
      answer: 'price signals showing what people want',
      teach: 'A planner must gather by survey what a price conveys '
        + 'automatically, and the information arrives late.',
      level: 4,
    },
    {
      id: 'sys-5',
      ask: 'To describe an economic system fully you must say who owns '
        + 'the means of production and who:',
      kind: 'choice',
      options: [
        'decides what is produced',
        'pays the taxes',
        'sets the exchange rate',
      ],
      answer: 'decides what is produced',
      teach: 'Ownership and decision making are two separate questions, '
        + 'and both are needed.',
      level: 4,
    },
  ],
})

/* ── production and the factors of production ───────────────────────────── */

teach({
  topicId: 'production-econ',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Production is any activity that creates value, '
      + 'including services. '
      + 'It uses four factors. '
      + 'Land earns rent. '
      + 'Labour earns wages. '
      + 'Capital earns interest. '
      + 'The entrepreneur earns profit, '
      + 'and bears the risk. '
      + 'Division of labour splits a job into parts '
      + 'so each worker repeats one, '
      + 'which raises output and narrows the worker.',
    method: [
      'Name the factor and its reward.',
      'Classify the resource by what it is, not by who owns it.',
      'For capital, check it is man made and used to produce.',
      'For division of labour, give a gain and a cost.',
      'Distinguish the entrepreneur from the manager.',
    ],
  },

  idea:
    'Production is any activity that creates value '
    + 'or satisfies a want, '
    + 'so it includes growing maize, assembling a radio, '
    + 'carrying goods to a market and cutting hair. '
    + 'Four factors of production are combined to do it. '
    + 'Land means all natural resources: '
    + 'the soil, minerals, rivers, forests and the sea. '
    + 'Its reward is rent. '
    + 'Labour means all human effort, physical and mental. '
    + 'Its reward is wages or salary. '
    + 'Capital means man made goods used to produce further goods: '
    + 'tools, machines, vehicles, buildings, stock in trade. '
    + 'Its reward is interest. '
    + 'The entrepreneur organises the other three, '
    + 'decides what to produce, and carries the risk of loss. '
    + 'The reward is profit, '
    + 'and unlike the other three it is not guaranteed. '
    + 'Division of labour is the splitting of a task into parts '
    + 'so that each worker performs one of them repeatedly. '
    + 'It raises output per worker, '
    + 'because the worker becomes skilled at one operation, '
    + 'loses no time changing tools, '
    + 'and can use a machine made for that one step. '
    + 'Its costs are monotony, '
    + 'the risk that a worker trained in one step '
    + 'cannot easily do another, '
    + 'and the dependence of the whole line on every step.',

  mechanism:
    'The classification looks easy and is where most marks are lost, '
    + 'because learners classify by who owns a thing '
    + 'instead of by what it is. '
    + 'Ask what the item is, every time. '
    + 'Is a lorry land, labour or capital? '
    + 'Capital, because it is man made '
    + 'and used to produce further goods or services. '
    + 'Is a river capital? '
    + 'No, it is land, because it is a natural resource, '
    + 'even though a company may own the rights to it. '
    + 'Is a trained nurse capital? '
    + 'No. She is labour, '
    + 'though economists speak of her training as human capital, '
    + 'which is a separate and later idea. '
    + 'Is money capital? '
    + 'This is the one that catches everybody. '
    + 'Money is not a factor of production, '
    + 'because money produces nothing by itself. '
    + 'It buys the machine, and the machine produces. '
    + 'Economists distinguish money capital, '
    + 'which is funds, '
    + 'from real capital, '
    + 'which is the machines and buildings. '
    + 'When a question asks for the factors of production '
    + 'the answer is land, labour, capital and the entrepreneur, '
    + 'and writing money loses the mark. '
    + 'The second place marks go is the reward matching. '
    + 'Each factor has one reward and they must be paired correctly: '
    + 'land with rent, labour with wages, '
    + 'capital with interest, enterprise with profit. '
    + 'The reason profit is different is worth stating, '
    + 'because it is often asked. '
    + 'Rent, wages and interest are agreed in advance '
    + 'and must be paid whether the business succeeds or not. '
    + 'Profit is what remains after they have been paid, '
    + 'so it may be large, small or negative. '
    + 'That is why the entrepreneur is described as bearing the risk, '
    + 'and it is why profit is a reward rather than a cost. '
    + 'A manager who is paid a salary is not an entrepreneur: '
    + 'he receives wages and carries no risk. '
    + 'The distinction is examined and it is easy to state. '
    + 'The third is division of labour, '
    + 'where answers give the gains and forget the costs. '
    + 'Take a kenkey business in Accra. '
    + 'One woman doing everything '
    + 'grinds, ferments, wraps, boils and sells. '
    + 'Split those five among five women '
    + 'and output rises sharply: '
    + 'each becomes fast at her step, '
    + 'nobody wastes time switching, '
    + 'and a grinding mill can be bought for the one who grinds. '
    + 'Now the costs. '
    + 'The wrapper is now dependent on the grinder arriving. '
    + 'If the one who sells falls ill, '
    + 'the other four have produced for nothing. '
    + 'And the wrapper has learned only wrapping, '
    + 'so if the business closes '
    + 'she is less able to start her own than the woman who did all five. '
    + 'Those are real costs and they are worth marks. '
    + 'A full answer also notes that division of labour '
    + 'requires a large enough market, '
    + 'since five specialists are only worth having '
    + 'if enough kenkey can be sold. '
    + 'That last point is the link to the next topic. '
    + 'What has to be written down is the pairing. '
    + 'Factor, reward, and one example of the factor '
    + 'drawn from somewhere real.',

  recap:
    'You know that farming needs land, seed, tools and work. '
    + 'This names the four things every kind of production uses, '
    + 'what each is paid, '
    + 'and why splitting a job up raises output.',

  method: [
    'Identify the item in question.',
    'Ask what it is: natural, human effort, man made aid, or '
      + 'organisation.',
    'Classify by that, not by who owns it.',
    'Match the factor to its reward.',
    'For the entrepreneur, note that the reward is not guaranteed.',
    'For division of labour, give at least one gain and one cost.',
    'Mention that it needs a market large enough to absorb the output.',
  ],

  worked: [
    {
      level: 2,
      ask: 'Name the four factors of production and the reward of each.',
      steps: [
        'Each factor has exactly one reward.',
      ],
      answer: 'Land earns rent. '
        + 'Labour earns wages or salary. '
        + 'Capital earns interest. '
        + 'The entrepreneur earns profit.',
    },
    {
      level: 3,
      ask: 'Classify each as land, labour, capital or enterprise: '
        + 'a river, a tractor, a trained teacher, '
        + 'the person who decides to open a bakery.',
      steps: [
        'Ask what each thing is.',
      ],
      answer: 'A river is land, because it is a natural resource. '
        + 'A tractor is capital, because it is man made '
        + 'and used to produce. '
        + 'A trained teacher is labour, being human effort. '
        + 'The person who decides to open the bakery '
        + 'and risks her own money is the entrepreneur.',
    },
    {
      level: 4,
      ask: 'Is money a factor of production? '
        + 'Explain.',
      steps: [
        'Ask what money itself produces.',
        'Money buys the machine.',
        'The machine produces.',
      ],
      answer: 'No. '
        + 'Money by itself produces nothing. '
        + 'It is used to buy the machinery, materials and labour '
        + 'that do the producing. '
        + 'Economists distinguish money capital, which is funds, '
        + 'from real capital, which is the machines, tools and buildings. '
        + 'Only real capital is a factor of production, '
        + 'so a question asking for the four factors '
        + 'is answered with land, labour, capital and the entrepreneur.',
    },
    {
      level: 5,
      ask: 'A woman making kenkey alone takes on four helpers '
        + 'and gives each one step of the work. '
        + 'Analyse the gains and the costs.',
      steps: [
        'Gains: skill at one step, no time lost switching, '
          + 'machines can be bought for one step.',
        'Costs: dependence on every other step, '
          + 'monotony, narrow skills.',
        'Condition: the market must be large enough.',
      ],
      answer: 'Gains: each worker becomes fast and skilled at one step, '
        + 'no time is lost changing between tasks, '
        + 'and a machine suited to one operation, such as a grinding '
        + 'mill, '
        + 'becomes worth buying. '
        + 'Output per worker therefore rises. '
        + 'Costs: each worker now depends on all the others, '
        + 'so if the one who sells falls ill '
        + 'the rest have produced for nothing; '
        + 'the work is monotonous; '
        + 'and a worker who has learned only one step '
        + 'is less able to set up on her own than the woman '
        + 'who could do all five. '
        + 'The arrangement also requires a market large enough '
        + 'to absorb the extra output, '
        + 'since five specialists are only worth having '
        + 'if the kenkey can be sold.',
    },
  ],

  traps: [
    {
      mistake: 'Listing money as a factor of production.',
      why: 'Money produces nothing by itself. '
        + 'It buys the real capital, which is the factor.',
    },
    {
      mistake: 'Classifying a resource by who owns it.',
      why: 'A river owned by a company is still land, '
        + 'because classification follows what the thing is.',
    },
    {
      mistake: 'Calling a salaried manager an entrepreneur.',
      why: 'He receives wages and bears no risk. '
        + 'The entrepreneur takes the risk and receives whatever is left.',
    },
    {
      mistake: 'Giving the gains of division of labour and no costs.',
      why: 'Dependence on every step, monotony and narrow skills '
        + 'are examinable, and so is the need for a large market.',
    },
  ],

  extension:
    'Division of labour is limited by the size of the market, '
    + 'and that limit shapes Ghanaian businesses. '
    + 'A village workshop with a few customers a week '
    + 'cannot employ five specialists, '
    + 'so one person does everything '
    + 'and output per worker stays low. '
    + 'A workshop on a busy road in Kumasi can specialise, '
    + 'so its output per worker is higher '
    + 'and it can afford better equipment. '
    + 'The two are not differently skilled; '
    + 'they face different markets. '
    + 'This is one argument for roads, '
    + 'since a road enlarges the market a workshop can reach '
    + 'and so allows the specialisation that raises productivity.',

  questions: [
    {
      id: 'prod-1',
      ask: 'The reward to capital is:',
      kind: 'choice',
      options: ['interest', 'rent', 'profit'],
      answer: 'interest',
      teach: 'Rent goes to land and profit to the entrepreneur.',
      level: 2,
    },
    {
      id: 'prod-2',
      ask: 'A tractor is classified as:',
      kind: 'choice',
      options: ['capital', 'land', 'labour'],
      answer: 'capital',
      teach: 'It is man made and used to produce further goods.',
      level: 3,
    },
    {
      id: 'prod-3',
      ask: 'Money is not a factor of production because it:',
      kind: 'choice',
      options: [
        'produces nothing by itself',
        'is not scarce',
        'belongs to the bank',
      ],
      answer: 'produces nothing by itself',
      teach: 'It buys the real capital. '
        + 'Only the real capital produces.',
      level: 4,
    },
    {
      id: 'prod-4',
      ask: 'Profit differs from the other rewards because it is:',
      kind: 'choice',
      options: [
        'not guaranteed',
        'always larger',
        'paid first',
      ],
      answer: 'not guaranteed',
      teach: 'Rent, wages and interest are agreed in advance. '
        + 'Profit is what is left, and it may be negative.',
      level: 4,
    },
    {
      id: 'prod-5',
      ask: 'Division of labour is limited mainly by the:',
      kind: 'choice',
      options: [
        'size of the market',
        'number of workers available',
        'price of land',
      ],
      answer: 'size of the market',
      teach: 'Specialists are only worth employing '
        + 'if the extra output can be sold.',
      level: 5,
    },
  ],
})

/* ── demand and supply ──────────────────────────────────────────────────── */

teach({
  topicId: 'demand-supply-econ',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The law of demand: the higher the price, '
      + 'the less is demanded, other things equal. '
      + 'The law of supply: the higher the price, '
      + 'the more is supplied. '
      + 'Equilibrium is where the two are equal, '
      + 'and that fixes the price and the quantity. '
      + 'A price change moves you along a curve. '
      + 'Anything else shifts the whole curve.',
    method: [
      'Draw price on the vertical axis and quantity on the horizontal.',
      'Label both curves and mark the equilibrium.',
      'Ask what changed.',
      'If it was the price of this good, move along the curve.',
      'If it was anything else, shift the whole curve, and say which way.',
    ],
  },

  idea:
    'Demand is the quantity of a good '
    + 'that buyers are willing and able to buy at a given price. '
    + 'Willing and able are both required: '
    + 'wanting a thing without the means to pay is not demand. '
    + 'The law of demand states that, other things being equal, '
    + 'a higher price brings a smaller quantity demanded, '
    + 'so the demand curve slopes downwards. '
    + 'Supply is the quantity producers are willing to offer '
    + 'at a given price. '
    + 'The law of supply states that a higher price '
    + 'brings a larger quantity supplied, '
    + 'so the supply curve slopes upwards. '
    + 'Equilibrium is the price at which quantity demanded '
    + 'equals quantity supplied, '
    + 'and the market clears. '
    + 'Above that price there is a surplus, '
    + 'and sellers cut the price. '
    + 'Below it there is a shortage, '
    + 'and buyers bid the price up. '
    + 'A change in the price of the good itself '
    + 'causes a movement along the curve, '
    + 'called an extension or a contraction. '
    + 'A change in any other condition shifts the whole curve. '
    + 'Demand shifts with income, '
    + 'the price of substitutes and complements, '
    + 'tastes, population, '
    + 'and expectations about future prices. '
    + 'Supply shifts with the cost of inputs, '
    + 'technology, taxes and subsidies, '
    + 'weather in the case of crops, '
    + 'and the number of producers.',

  mechanism:
    'One distinction carries most of the marks in this topic, '
    + 'and it is the difference between a movement along a curve '
    + 'and a shift of the curve. '
    + 'Get it clear with a test you can apply in one second. '
    + 'Ask what changed. '
    + 'If the price of the good itself changed, '
    + 'you move along the existing curve, '
    + 'because the curve already shows '
    + 'what happens at every price. '
    + 'If anything else changed, '
    + 'the curve itself moves, '
    + 'because a different quantity is now wanted '
    + 'or offered at the same price as before. '
    + 'Apply it to tomatoes. '
    + 'The price of tomatoes falls, so people buy more: '
    + 'that is a movement along the demand curve, '
    + 'an extension of demand. '
    + 'Incomes rise, so people buy more tomatoes '
    + 'at every price including the old one: '
    + 'that is a shift of the demand curve to the right, '
    + 'an increase in demand. '
    + 'The two look similar in words and are drawn quite differently, '
    + 'and the examination draws them. '
    + 'The phrase to use is exact: '
    + 'an increase in demand means the curve shifted; '
    + 'an extension of demand means a movement along it. '
    + 'Learners who use increase for both lose marks '
    + 'they could have kept by learning two phrases. '
    + 'Now the diagram, which is marked as a diagram. '
    + 'Price goes on the vertical axis and quantity on the horizontal, '
    + 'always, '
    + 'and swapping them loses a mark before anything is drawn. '
    + 'Both axes must be labelled with the variable and the unit. '
    + 'Both curves must be labelled D and S. '
    + 'The equilibrium must be marked, '
    + 'with dashed lines down to the price '
    + 'and across to the quantity. '
    + 'When a curve shifts, '
    + 'the new curve is labelled D1 or S1 '
    + 'and the old one is left on the diagram, '
    + 'because the comparison is the point. '
    + 'A new equilibrium is then marked. '
    + 'Those are separate marks and they are easy ones. '
    + 'The third thing to get right is the direction of a shift, '
    + 'which learners reverse under pressure. '
    + 'More demand means the curve moves right, '
    + 'towards a larger quantity. '
    + 'Think of the horizontal axis: '
    + 'right is more, so more demand goes right. '
    + 'A better harvest means more supply, so S moves right '
    + 'and the price falls. '
    + 'A new tax on producers raises their costs, '
    + 'so supply moves left and the price rises. '
    + 'Check every answer against common sense at the end: '
    + 'a good harvest should make tomatoes cheaper, '
    + 'and if your diagram says dearer, '
    + 'the curve went the wrong way. '
    + 'Fourth, a point of care about substitutes and complements. '
    + 'If the price of rice rises, '
    + 'the demand for yam rises too, '
    + 'because yam is a substitute. '
    + 'Note what shifted: '
    + 'the demand curve for yam, not for rice. '
    + 'For rice there was a movement along its own curve. '
    + 'One price change, two different effects on two goods, '
    + 'and a question will ask for both. '
    + 'Complements work the other way: '
    + 'if the price of bread rises, '
    + 'the demand for margarine falls, '
    + 'because they are used together. '
    + 'What has to be written down is the sequence. '
    + 'What changed; which curve it affects; '
    + 'which direction it shifts or moves; '
    + 'what happens to the equilibrium price; '
    + 'what happens to the equilibrium quantity. '
    + 'Five steps, and an answer that gives them in order '
    + 'cannot easily go wrong.',

  recap:
    'You have seen prices in a market rise and fall '
    + 'and noticed people buying less when something is dear. '
    + 'This turns that into two curves, '
    + 'and shows how they settle on one price.',

  method: [
    'Draw price on the vertical axis and quantity on the horizontal.',
    'Label both axes with variable and unit.',
    'Draw and label D and S, and mark the equilibrium.',
    'Ask what has changed.',
    'If the price of the good changed, move along the curve.',
    'If anything else changed, shift the curve and label it D1 or S1.',
    'Shift right for more, left for less.',
    'Mark the new equilibrium and read off the new price and quantity.',
    'Check the answer against common sense.',
  ],

  figure: {
    alt: 'A demand and supply diagram with price on the vertical axis and '
      + 'quantity on the horizontal, a downward sloping demand curve and '
      + 'an upward sloping supply curve crossing at an equilibrium point, '
      + 'with dashed lines to the equilibrium price and quantity, and a '
      + 'second demand curve shifted to the right giving a higher price '
      + 'and quantity',
    svg: '<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" '
      + 'font-family="ui-sans-serif, system-ui, sans-serif">'
      /* axes */
      + '<g stroke="currentColor" stroke-width="2" fill="none">'
      + '<path d="M90 340h470"/>'
      + '<path d="M90 340V40"/>'
      + '</g>'
      /* supply curve */
      + '<path d="M120 320L480 80" stroke="#0f8a4d" stroke-width="3" fill="none"/>'
      /* original demand curve */
      + '<path d="M120 90L430 320" stroke="currentColor" stroke-width="3" fill="none"/>'
      /* shifted demand curve */
      + '<path d="M220 90L530 320" stroke="currentColor" stroke-width="2" stroke-dasharray="7 5" fill="none"/>'
      /* equilibrium one */
      + '<g stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" fill="none">'
      + '<path d="M90 211H266"/><path d="M266 211V340"/>'
      + '<path d="M90 171H326"/><path d="M326 171V340"/>'
      + '</g>'
      + '<circle cx="266" cy="211" r="5" fill="currentColor"/>'
      + '<circle cx="326" cy="171" r="5" fill="currentColor"/>'
      /* labels */
      + '<text x="36" y="48" font-size="14" fill="currentColor">price</text>'
      + '<text x="470" y="366" font-size="14" fill="currentColor">quantity</text>'
      + '<text x="430" y="76" font-size="15" fill="#0f8a4d">S</text>'
      + '<text x="420" y="330" font-size="15" fill="currentColor">D</text>'
      + '<text x="528" y="330" font-size="15" fill="currentColor">D1</text>'
      + '<text x="54" y="216" font-size="13" fill="currentColor">P</text>'
      + '<text x="50" y="176" font-size="13" fill="currentColor">P1</text>'
      + '<text x="258" y="362" font-size="13" fill="currentColor">Q</text>'
      + '<text x="316" y="362" font-size="13" fill="currentColor">Q1</text>'
      + '</svg>',
  },

  worked: [
    {
      level: 3,
      ask: 'State the law of demand and the law of supply, '
        + 'and say which way each curve slopes.',
      steps: [
        'Both laws hold other things equal.',
      ],
      answer: 'The law of demand: other things being equal, '
        + 'the higher the price of a good, '
        + 'the smaller the quantity demanded. '
        + 'So the demand curve slopes downwards from left to right. '
        + 'The law of supply: other things being equal, '
        + 'the higher the price, the greater the quantity supplied. '
        + 'So the supply curve slopes upwards. '
        + 'The phrase other things being equal matters, '
        + 'because it is what allows everything else to be held still.',
    },
    {
      level: 4,
      ask: 'The price of rice rises. '
        + 'State the effect on the market for rice '
        + 'and on the market for yam, '
        + 'naming the curve that moves in each case.',
      steps: [
        'For rice, the price of rice itself changed.',
        'So it is a movement along the rice demand curve.',
        'For yam, the price of a substitute changed.',
        'So the whole yam demand curve shifts.',
      ],
      answer: 'In the market for rice there is a contraction of demand, '
        + 'which is a movement upwards along the existing demand curve '
        + 'for rice, '
        + 'since it was the price of rice itself that changed. '
        + 'In the market for yam there is an increase in demand, '
        + 'which is a shift of the whole yam demand curve to the right, '
        + 'because yam is a substitute '
        + 'and more yam is now wanted at every price. '
        + 'The yam price and quantity both rise. '
        + 'One price change, two different kinds of effect.',
    },
    {
      level: 4,
      ask: 'Heavy rain destroys part of the tomato crop. '
        + 'Explain the effect on the market, in order.',
      steps: [
        'What changed: the weather, not the price.',
        'Which curve: supply.',
        'Which direction: left, since less is offered at every price.',
        'Equilibrium price rises; equilibrium quantity falls.',
      ],
      answer: 'The weather changed, not the price, '
        + 'so the supply curve shifts rather than a movement along it. '
        + 'Less is offered at every price, '
        + 'so supply shifts to the left, to S1. '
        + 'At the old price there is now a shortage, '
        + 'so buyers bid the price up. '
        + 'The new equilibrium has a higher price '
        + 'and a smaller quantity. '
        + 'The check against common sense passes: '
        + 'a ruined crop should make tomatoes dearer and scarcer.',
    },
    {
      level: 5,
      ask: 'Incomes rise and at the same time '
        + 'a new tax is placed on producers of a good. '
        + 'What happens to price and quantity?',
      steps: [
        'Higher incomes shift demand right.',
        'A tax raises producer costs, shifting supply left.',
        'Both changes push the price up.',
        'The two changes push quantity in opposite directions.',
      ],
      answer: 'Higher incomes shift the demand curve to the right. '
        + 'The tax raises producers costs, '
        + 'so the supply curve shifts to the left. '
        + 'Both shifts raise the equilibrium price, '
        + 'so the price certainly rises. '
        + 'The effect on quantity is uncertain: '
        + 'the demand shift raises it '
        + 'and the supply shift lowers it, '
        + 'so the outcome depends on which shift is larger. '
        + 'Saying that the quantity cannot be determined '
        + 'without knowing the relative sizes of the shifts '
        + 'is the full answer, '
        + 'and guessing one direction loses the mark.',
    },
  ],

  traps: [
    {
      mistake: 'Using increase in demand for a movement along the curve.',
      why: 'An increase is a shift of the whole curve. '
        + 'A movement along it is an extension or a contraction.',
    },
    {
      mistake: 'Putting quantity on the vertical axis.',
      why: 'Price is always vertical and quantity horizontal. '
        + 'The mark is lost before anything is drawn.',
    },
    {
      mistake: 'Shifting a curve left when more is wanted.',
      why: 'Right on the horizontal axis means more. '
        + 'More demand or more supply shifts right.',
    },
    {
      mistake: 'Giving one direction for quantity '
        + 'when both curves have shifted.',
      why: 'If the two shifts push quantity opposite ways, '
        + 'the outcome depends on their relative size, '
        + 'and saying so is the answer.',
    },
  ],

  extension:
    'A market only settles at equilibrium if the price can move. '
    + 'Where a government fixes a maximum price below equilibrium, '
    + 'the shortage does not clear, '
    + 'because the signal that would attract more supply is blocked. '
    + 'What appears instead is queueing, rationing '
    + 'and a parallel market at a higher price. '
    + 'Ghana has seen this with fuel and with controlled food prices. '
    + 'The lesson is not that price controls are always wrong, '
    + 'since there are reasons to protect buyers, '
    + 'but that a controlled price '
    + 'has to be accompanied by a plan for the shortage it creates, '
    + 'and the shortage follows from the diagram.',

  questions: [
    {
      id: 'ds-1',
      ask: 'The demand curve slopes:',
      kind: 'choice',
      options: ['downwards', 'upwards', 'horizontally'],
      answer: 'downwards',
      teach: 'A higher price brings a smaller quantity demanded. '
        + 'The supply curve slopes upwards.',
      level: 2,
    },
    {
      id: 'ds-2',
      ask: 'A fall in the price of a good causes:',
      kind: 'choice',
      options: [
        'a movement along the demand curve',
        'a shift of the demand curve',
        'a shift of the supply curve',
      ],
      answer: 'a movement along the demand curve',
      teach: 'The curve already shows what happens at every price, '
        + 'so a price change moves you along it.',
      level: 4,
    },
    {
      id: 'ds-3',
      ask: 'A rise in incomes shifts the demand curve:',
      kind: 'choice',
      options: ['to the right', 'to the left', 'not at all'],
      answer: 'to the right',
      teach: 'More is wanted at every price, '
        + 'and right on the quantity axis means more.',
      level: 4,
    },
    {
      id: 'ds-4',
      ask: 'At a price above equilibrium there is:',
      kind: 'choice',
      options: ['a surplus', 'a shortage', 'equilibrium'],
      answer: 'a surplus',
      teach: 'Quantity supplied exceeds quantity demanded, '
        + 'so sellers cut the price.',
      level: 3,
    },
    {
      id: 'ds-5',
      ask: 'If demand shifts right and supply shifts left, '
        + 'the equilibrium quantity:',
      kind: 'choice',
      options: [
        'cannot be determined without knowing the sizes of the shifts',
        'definitely rises',
        'definitely falls',
      ],
      answer: 'cannot be determined without knowing the sizes of the '
        + 'shifts',
      teach: 'The price certainly rises, '
        + 'but the two shifts push quantity in opposite directions.',
      level: 5,
    },
  ],
})
