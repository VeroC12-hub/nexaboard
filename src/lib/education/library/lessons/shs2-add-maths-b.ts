/**
 * Stored lessons for SHS 2 Additional Mathematics: sequences and series,
 * limits, differentiation, vectors, probability and counting.
 *
 * Written at about grade 10, which is inside the SHS expectation of 10 to 12.
 *
 * ── What holds these six together ────────────────────────────────────────
 *
 * Each one asks a learner to name the structure before touching the
 * arithmetic. Is the sequence arithmetic or geometric. Does substitution
 * give a number or does it give nothing. Is the expression a product, a
 * quotient or a function inside a function. Does the order of the choices
 * matter. Pick the wrong structure and every line after it is wasted, and
 * no amount of care with the figures rescues it. So the first step of every
 * method here is a question about the shape of the problem, not a
 * calculation.
 *
 * ── Notation ─────────────────────────────────────────────────────────────
 *
 * Mathematics is LaTeX between dollar signs, because lesson prose is set
 * with KaTeX. Captions and `alt` text stay in words, since those are read
 * aloud.
 *
 * `source: 'WRITTEN'` and `approved: true` because a person wrote and read
 * every line.
 */

import { teach } from '../../taught-registry'

/* ── sequences and series ───────────────────────────────────────────────── */

teach({
  topicId: 'sequences-series-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'An arithmetic progression adds the same number each time. '
      + 'A geometric progression multiplies by the same number each time. '
      + 'Test which one you have before anything else: '
      + 'subtract neighbours, then divide neighbours. '
      + 'Whichever is constant names the sequence. '
      + 'A geometric series has a sum to infinity only when $|r| < 1$.',
    method: [
      'Subtract neighbouring terms, then divide them, to name the type.',
      'Write $a$ and $d$, or $a$ and $r$, before using any formula.',
      'For a sum to infinity, check $|r| < 1$ first.',
    ],
  },

  idea:
    'A sequence is a list of numbers in order. '
    + 'A series is what you get when you add them. '
    + 'Two kinds carry almost the whole syllabus. '
    + 'In an arithmetic progression each term is the one before plus a '
    + 'fixed common difference $d$, so the $n$th term is '
    + '$$U_n = a + (n-1)d$$ '
    + 'and the sum of the first $n$ terms is '
    + '$$S_n = \\frac{n}{2}\\left[2a + (n-1)d\\right].$$ '
    + 'In a geometric progression each term is the one before times a '
    + 'fixed common ratio $r$, so '
    + '$$U_n = ar^{\\,n-1}, \\qquad S_n = \\frac{a(r^n - 1)}{r - 1}.$$ '
    + 'A geometric series carries one extra idea. '
    + 'If $|r| < 1$ the terms shrink towards nothing, the total settles, '
    + 'and that total is the sum to infinity '
    + '$$S_\\infty = \\frac{a}{1 - r}.$$ '
    + 'The series is then said to converge. '
    + 'If $|r| \\ge 1$ the terms do not shrink, nothing settles, and the '
    + 'series diverges.',

  tables: [{
    caption: 'How the two progressions compare, side by side',
    columns: ['Question', 'Arithmetic', 'Geometric'],
    rows: [
      ['What stays the same', 'The difference $d$', 'The ratio $r$'],
      ['How to find it', '$d = U_2 - U_1$', '$r = U_2 \\div U_1$'],
      ['The $n$th term', '$U_n = a + (n-1)d$', '$U_n = ar^{\\,n-1}$'],
      ['Sum of $n$ terms', '$S_n = \\frac{n}{2}[2a + (n-1)d]$',
        '$S_n = \\frac{a(r^n-1)}{r-1}$'],
      ['Sum to infinity', 'Never', 'Only when $|r| < 1$'],
    ],
    note: 'Test by subtracting and by dividing. '
      + 'One of the two comes out constant, and that is your answer.',
  }],

  figure: {
    alt: 'Two number lines. The top one shows an arithmetic progression '
      + 'starting at 3 and stepping on by 4 each time to 7, 11 and 15, '
      + 'with equal gaps. The bottom one shows a geometric progression '
      + 'starting at 3 and doubling each time to 6, 12 and 24, with gaps '
      + 'that keep widening. Underneath, a bar of length one is cut into a '
      + 'half, a quarter and an eighth to show why a shrinking geometric '
      + 'series has a finite total.',
    svg: '<svg viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="20" y="26" font-size="17" fill="currentColor" '
      + 'stroke="none">Arithmetic: add 4</text>'
      + '<line x1="40" y1="60" x2="600" y2="60"/>'
      + '<circle cx="80" cy="60" r="5" fill="currentColor"/>'
      + '<circle cx="200" cy="60" r="5" fill="currentColor"/>'
      + '<circle cx="320" cy="60" r="5" fill="currentColor"/>'
      + '<circle cx="440" cy="60" r="5" fill="currentColor"/>'
      + '<text x="80" y="84" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">3</text>'
      + '<text x="200" y="84" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">7</text>'
      + '<text x="320" y="84" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">11</text>'
      + '<text x="440" y="84" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">15</text>'
      + '<text x="140" y="46" font-size="14" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">+4</text>'
      + '<text x="260" y="46" font-size="14" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">+4</text>'
      + '<text x="380" y="46" font-size="14" text-anchor="middle" '
      + 'fill="#0f8a4d" stroke="none">+4</text>'
      + '<text x="20" y="128" font-size="17" fill="currentColor" '
      + 'stroke="none">Geometric: multiply by 2</text>'
      + '<line x1="40" y1="162" x2="600" y2="162"/>'
      + '<circle cx="70" cy="162" r="5" fill="currentColor"/>'
      + '<circle cx="110" cy="162" r="5" fill="currentColor"/>'
      + '<circle cx="190" cy="162" r="5" fill="currentColor"/>'
      + '<circle cx="350" cy="162" r="5" fill="currentColor"/>'
      + '<text x="70" y="186" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">3</text>'
      + '<text x="110" y="186" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">6</text>'
      + '<text x="190" y="186" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">12</text>'
      + '<text x="350" y="186" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">24</text>'
      + '<text x="90" y="148" font-size="14" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">x2</text>'
      + '<text x="150" y="148" font-size="14" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">x2</text>'
      + '<text x="270" y="148" font-size="14" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">x2</text>'
      + '<text x="20" y="232" font-size="17" fill="currentColor" '
      + 'stroke="none">Why a shrinking series has a total</text>'
      + '<rect x="40" y="248" width="560" height="40"/>'
      + '<line x1="320" y1="248" x2="320" y2="288"/>'
      + '<line x1="460" y1="248" x2="460" y2="288"/>'
      + '<line x1="530" y1="248" x2="530" y2="288"/>'
      + '<text x="180" y="274" font-size="16" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">one half</text>'
      + '<text x="390" y="274" font-size="14" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">quarter</text>'
      + '<text x="495" y="274" font-size="12" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">eighth</text>'
      + '<text x="320" y="312" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'the pieces never leave the bar, so the total is 1</text>'
      + '</svg>',
  },

  mechanism:
    'Marks in this topic are lost in three places, and all three can be '
    + 'closed by habit. '
    + 'The first is naming the sequence. '
    + 'A learner who sees 2, 6, 18, 54 and reaches for $d$ is finished '
    + 'before starting. '
    + 'So do both tests every time, on paper. '
    + 'Subtract neighbours: 4, 12, 36, which is not constant. '
    + 'Divide neighbours: 3, 3, 3, which is. '
    + 'It is geometric with $r = 3$. '
    + 'The two tests take one line and they decide the whole question. '
    + 'The second place is the $n-1$. '
    + 'The first term has had no step added to it yet, which is why the '
    + 'formula says $a + (n-1)d$ and not $a + nd$. '
    + 'Check it on the first term: put $n = 1$ and you must get $a$ back. '
    + 'The same reading fixes the geometric case, where $U_n = ar^{\\,n-1}$ '
    + 'because the first term has been multiplied no times. '
    + 'This single check, substituting $n = 1$, catches the commonest error '
    + 'in the topic in about five seconds. '
    + 'The third place is the sum to infinity. '
    + 'The condition $|r| < 1$ is not small print. '
    + 'If $r = 2$ the terms grow, the total runs away, and '
    + '$\\frac{a}{1-r}$ still produces a number, which is the danger. '
    + 'With $a = 3$ and $r = 2$ it gives $\\frac{3}{-1} = -3$, a negative '
    + 'answer for a sum of positive terms, which is plainly nonsense. '
    + 'So write the check down: state $|r| < 1$ beside the formula, because '
    + 'in WASSCE that statement is itself a mark. '
    + 'There is one more thing worth knowing about how these questions are '
    + 'set. '
    + 'You are usually given two terms, not $a$ and $d$. '
    + 'Then write each given term with the formula and solve the pair. '
    + 'For a geometric sequence, divide one equation by the other: the $a$ '
    + 'cancels and you are left with a power of $r$ alone. '
    + 'That division is the standard move and it is quicker than anything '
    + 'else.',

  recap:
    'You have found the rule of a number pattern and continued it. '
    + 'This gives that work its two names and its formulae, '
    + 'so you can reach the fiftieth term without writing the first forty '
    + 'nine.',

  method: [
    'Subtract neighbouring terms. Is the difference constant?',
    'Divide neighbouring terms. Is the ratio constant?',
    'Name the progression and write down $a$, and $d$ or $r$.',
    'If you are given two terms, write an equation for each.',
    'For a geometric pair, divide the equations so that $a$ cancels.',
    'Choose the formula you need: $n$th term, or sum.',
    'For a sum to infinity, state $|r| < 1$ before using it.',
    'Substitute, and check the first term by putting $n = 1$.',
  ],

  worked: [
    {
      level: 3,
      ask: 'The first term of an AP is 7 and the common difference is 4. '
        + 'Find the 12th term and the sum of the first 12 terms.',
      steps: [
        { math: 'a = 7,\\quad d = 4', why: 'Write them down before any formula.' },
        { math: 'U_{12} = 7 + (12-1)\\times 4', why: 'Eleven steps have been taken, not twelve.' },
        { math: 'U_{12} = 51' },
        { math: 'S_{12} = \\frac{12}{2}\\left[2(7) + 11(4)\\right]',
          why: 'The sum formula, with the same $n-1$ inside.' },
        { math: 'S_{12} = 6 \\times 58 = 348' },
      ],
      answer: '$U_{12} = 51$ and $S_{12} = 348$.',
    },
    {
      level: 4,
      ask: 'The third term of a GP is 12 and the sixth term is 96. '
        + 'Find the common ratio and the first term.',
      steps: [
        { math: 'ar^{2} = 12,\\qquad ar^{5} = 96',
          why: 'Write each given term with the formula.' },
        { math: '\\frac{ar^{5}}{ar^{2}} = \\frac{96}{12}',
          why: 'Divide the equations so that $a$ cancels. This is the standard move.' },
        { math: 'r^{3} = 8' },
        { math: 'r = 2' },
        { math: 'a(2)^{2} = 12 \\;\\Rightarrow\\; a = 3',
          why: 'Put $r$ back into either equation.' },
      ],
      answer: '$r = 2$ and $a = 3$. '
        + 'Check: the sequence is 3, 6, 12, 24, 48, 96.',
    },
    {
      level: 5,
      ask: 'Find the sum to infinity of $18 + 12 + 8 + \\dots$',
      steps: [
        { math: 'r = \\frac{12}{18} = \\frac{2}{3}',
          why: 'Dividing neighbours is constant, so it is geometric.' },
        { math: '|r| = \\tfrac{2}{3} < 1',
          why: 'State this. Without it there is no sum to infinity, and the statement carries a mark.' },
        { math: 'S_\\infty = \\frac{18}{1 - \\frac{2}{3}}' },
        { math: 'S_\\infty = \\frac{18}{\\frac{1}{3}} = 54' },
      ],
      answer: '$S_\\infty = 54$. '
        + 'The terms keep shrinking, so the running total settles at 54 and '
        + 'never passes it.',
    },
    {
      level: 6,
      ask: 'A trader in Techiman saves GH¢80 in the first month and '
        + 'increases the amount by GH¢25 each month. '
        + 'In which month does her total saving first pass GH¢5000?',
      steps: [
        { math: 'a = 80,\\quad d = 25', why: 'A fixed increase each month, so it is arithmetic.' },
        { math: 'S_n = \\frac{n}{2}\\left[160 + 25(n-1)\\right]' },
        { math: 'S_n = \\frac{n(25n + 135)}{2}', why: 'Tidy the bracket first; it makes the inequality easier.' },
        { math: '25n^{2} + 135n - 10000 > 0', why: 'Set the total above 5000 and double both sides.' },
        { math: 'n > 17.6\\ \\text{(positive root)}', why: 'Solve the quadratic and reject the negative root.' },
        { math: 'n = 18' },
      ],
      answer: 'In the 18th month. '
        + 'Check: $S_{17} = 4760$ and $S_{18} = 5265$, '
        + 'so the 18th month is the first one over GH¢5000.',
    },
  ],

  traps: [
    {
      mistake: 'Using $a + nd$ instead of $a + (n-1)d$.',
      why: 'The first term has had no step added yet. '
        + 'Put $n = 1$ into your formula: you must get $a$ back.',
    },
    {
      mistake: 'Using the sum to infinity when $r$ is 2 or more.',
      why: 'The formula still gives a number, which is why it is dangerous. '
        + 'A sum of growing positive terms cannot be finite.',
    },
    {
      mistake: 'Finding $d$ by subtracting the wrong way round.',
      why: '$d = U_2 - U_1$, later term take earlier. '
        + 'The other way gives the right size with the wrong sign.',
    },
    {
      mistake: 'Deciding it is geometric without testing the differences.',
      why: 'Do both tests. '
        + 'Only one of them comes out constant, and that one names the '
        + 'sequence.',
    },
  ],

  extension:
    'A recurring decimal is a geometric series in disguise. '
    + 'The number $0.272727\\dots$ is $\\frac{27}{100} + \\frac{27}{10000} '
    + '+ \\dots$, with $a = \\frac{27}{100}$ and $r = \\frac{1}{100}$, '
    + 'so the sum to infinity gives $\\frac{27}{99} = \\frac{3}{11}$ at '
    + 'once. '
    + 'That is the proof behind the trick you were taught for turning a '
    + 'recurring decimal into a fraction.',

  questions: [
    {
      id: 'seq-1',
      ask: 'In 5, 9, 13, 17 the common difference is:',
      kind: 'choice',
      options: ['4', '5', '1.8'],
      answer: '4',
      teach: 'Subtract neighbours, later term take earlier: 9 take 5 is 4.',
      level: 3,
    },
    {
      id: 'seq-2',
      ask: 'Which sequence has a sum to infinity?',
      kind: 'choice',
      options: [
        '24, 12, 6, 3',
        '2, 6, 18, 54',
        '5, 10, 15, 20',
      ],
      answer: '24, 12, 6, 3',
      teach: 'Only a geometric sequence with a ratio between minus one and '
        + 'one settles. Here the ratio is a half.',
      level: 4,
    },
    {
      id: 'seq-3',
      ask: 'To find the ratio of a GP from its 2nd and 5th terms you:',
      kind: 'choice',
      options: [
        'Divide the equations so the first term cancels',
        'Subtract the equations',
        'Add the two terms and halve',
      ],
      answer: 'Divide the equations so the first term cancels',
      teach: 'Dividing leaves a power of the ratio alone, which is the '
        + 'quickest route and the one examiners expect.',
      level: 5,
    },
    {
      id: 'seq-4',
      ask: 'The 10th term of an AP with first term 3 and difference 5 is:',
      kind: 'numeric',
      options: [],
      answer: '48',
      teach: 'Three plus nine fives. Nine steps, not ten, because the first '
        + 'term has had none.',
      level: 4,
    },
  ],
})

/* ── limits and continuity ──────────────────────────────────────────────── */

teach({
  topicId: 'limits-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A limit is the value a function heads towards, '
      + 'not the value it takes. '
      + 'Always substitute first. '
      + 'If you get a number, that is the limit. '
      + 'If you get $\\frac{0}{0}$, the expression has a hidden factor: '
      + 'factorise, cancel, and substitute again.',
    method: [
      'Substitute the value and see what you get.',
      'If it is $\\frac{0}{0}$, factorise and cancel the common factor.',
      'For a limit at infinity, divide every term by the highest power.',
    ],
  },

  idea:
    'The limit of $f(x)$ as $x$ approaches $a$ is the value that $f(x)$ '
    + 'gets close to as $x$ gets close to $a$, written '
    + '$$\\lim_{x \\to a} f(x).$$ '
    + 'It says nothing about $f(a)$ itself. '
    + 'The function need not even be defined there, and that gap is the '
    + 'whole point of the idea. '
    + 'A function is continuous at $x = a$ when three things are all true: '
    + '$f(a)$ exists, the limit exists, and the two are equal. '
    + 'Continuity in plain terms means you can draw the curve through that '
    + 'point without lifting your pen. '
    + 'The useful limits are $\\lim_{x\\to a} k = k$ for a constant, '
    + '$\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$ with $x$ in radians, '
    + 'and $\\lim_{x\\to\\infty} \\frac{1}{x} = 0$.',

  tables: [{
    caption: 'What substitution gives you, and what to do about it',
    columns: ['Substitution gives', 'What it means', 'What to do'],
    rows: [
      ['A number', 'The function is continuous there', 'That number is the limit'],
      ['$\\frac{0}{0}$', 'There is a common factor hiding',
        'Factorise, cancel, substitute again'],
      ['$\\frac{k}{0}$ with $k$ not zero', 'The curve shoots off',
        'The limit does not exist'],
      ['$\\frac{\\infty}{\\infty}$', 'Both parts are growing',
        'Divide every term by the highest power of $x$'],
      ['A root over zero', 'A surd is hiding the factor',
        'Multiply by the conjugate first'],
    ],
    note: 'Only the first row is an answer. '
      + 'The other four are instructions.',
  }],

  figure: {
    alt: 'The graph of a function that is a straight line rising through '
      + 'the point where x is two, except that the point itself is drawn as '
      + 'an open circle at height four. Dashed arrows come in along the '
      + 'curve from the left and from the right, both arriving at height '
      + 'four, showing that the limit is four even though the function has '
      + 'no value there.',
    svg: '<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="60" y1="300" x2="520" y2="300"/>'
      + '<line x1="60" y1="300" x2="60" y2="40"/>'
      + '<text x="528" y="305" font-size="16" fill="currentColor" '
      + 'stroke="none">x</text>'
      + '<text x="46" y="36" font-size="16" fill="currentColor" '
      + 'stroke="none">y</text>'
      + '<line x1="90" y1="270" x2="270" y2="160" stroke="#0f8a4d"/>'
      + '<line x1="290" y1="148" x2="470" y2="60" stroke="#0f8a4d"/>'
      + '<circle cx="280" cy="154" r="7" fill="none" stroke="#0f8a4d"/>'
      + '<line x1="280" y1="154" x2="280" y2="300" '
      + 'stroke-dasharray="4 4" stroke-opacity="0.5"/>'
      + '<line x1="60" y1="154" x2="280" y2="154" '
      + 'stroke-dasharray="4 4" stroke-opacity="0.5"/>'
      + '<text x="280" y="322" font-size="16" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">2</text>'
      + '<text x="42" y="159" font-size="16" text-anchor="end" '
      + 'fill="currentColor" stroke="none">4</text>'
      + '<path d="M170 215 L250 168" stroke="#b4531a" '
      + 'stroke-dasharray="5 4"/>'
      + '<path d="M244 162 L254 166 L246 174" stroke="#b4531a"/>'
      + '<path d="M390 108 L310 140" stroke="#b4531a" '
      + 'stroke-dasharray="5 4"/>'
      + '<path d="M316 134 L306 142 L316 148" stroke="#b4531a"/>'
      + '<text x="140" y="120" font-size="15" fill="currentColor" '
      + 'stroke="none">no value at x = 2,</text>'
      + '<text x="140" y="142" font-size="15" fill="currentColor" '
      + 'stroke="none">but both sides head for 4</text>'
      + '</svg>',
  },

  mechanism:
    'The sentence that unlocks this topic is that a limit is about the '
    + 'journey and not the destination. '
    + 'Take $f(x) = \\frac{x^2 - 4}{x - 2}$. '
    + 'At $x = 2$ there is no value at all, because the bottom is zero. '
    + 'Yet at $x = 1.99$ the function is $3.99$, and at $x = 2.01$ it is '
    + '$4.01$. '
    + 'Both sides are walking towards 4, so the limit is 4, and the hole in '
    + 'the graph does not stop them. '
    + 'This is why substituting and getting $\\frac{0}{0}$ is not a dead '
    + 'end. '
    + 'It is a message. '
    + 'It says the top and the bottom share a factor that is zero at that '
    + 'point, and once you cancel it the function is ordinary again: '
    + '$\\frac{(x-2)(x+2)}{x-2} = x + 2$, which at $x = 2$ is 4. '
    + 'The cancelling is legal precisely because $x$ is near 2 and not '
    + 'equal to it, so $x - 2$ is never actually zero. '
    + 'Say that in your working. '
    + 'Two other patterns come up often enough to be worth naming. '
    + 'When the limit is at infinity, divide every term by the highest '
    + 'power of $x$ in the denominator. '
    + 'Every term with $x$ underneath then goes to zero, and what is left '
    + 'is the ratio of the leading coefficients. '
    + 'When the expression has a square root over a zero, multiply top and '
    + 'bottom by the conjugate, because the difference of two squares turns '
    + 'the root into something that will cancel. '
    + 'Continuity is then just a bookkeeping question with three boxes to '
    + 'tick. '
    + 'For a piecewise function the usual examination task is to find the '
    + 'constant that makes the two pieces meet. '
    + 'Set the left hand limit equal to the right hand limit, equal to the '
    + 'value, and solve. '
    + 'The marks are for writing all three down, not just for the number at '
    + 'the end.',

  recap:
    'You can substitute a value into a function and read a graph. '
    + 'This asks a smaller and stranger question: '
    + 'where is the function going as you close in on a point, '
    + 'whether or not it ever arrives.',

  method: [
    'Substitute the value into the expression.',
    'If a number comes out, that is the limit. Stop.',
    'If $\\frac{0}{0}$ comes out, factorise top and bottom.',
    'Cancel the common factor, saying that $x$ is near $a$, not equal.',
    'Substitute again into the simplified expression.',
    'For a surd, multiply by the conjugate before factorising.',
    'For a limit at infinity, divide every term by the highest power.',
    'For continuity, check the value, the limit, and that they agree.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Evaluate $\\lim_{x \\to 3} (2x^{2} - 5)$.',
      steps: [
        { math: '2(3)^{2} - 5', why: 'Always substitute first. A polynomial is continuous everywhere.' },
        { math: '18 - 5 = 13' },
      ],
      answer: '$13$',
    },
    {
      level: 4,
      ask: 'Evaluate $\\lim_{x \\to 3} \\frac{x^{2} - 9}{x - 3}$.',
      steps: [
        { math: '\\frac{9 - 9}{3 - 3} = \\frac{0}{0}',
          why: 'Not an answer. It is a message that a factor is hiding.' },
        { math: '\\frac{(x-3)(x+3)}{x-3}', why: 'Difference of two squares on top.' },
        { math: 'x + 3', why: 'Cancel, which is allowed because $x$ is near 3, never equal to 3.' },
        { math: '3 + 3 = 6', why: 'Now substitute.' },
      ],
      answer: '$6$. '
        + 'The function has a hole at $x = 3$, and the limit fills it.',
    },
    {
      level: 5,
      ask: 'Evaluate $\\lim_{x \\to \\infty} \\frac{3x^{2} + 2x}{5x^{2} - 1}$.',
      steps: [
        { math: '\\frac{\\infty}{\\infty}', why: 'Substitution is no help, so divide through.' },
        { math: '\\frac{3 + \\frac{2}{x}}{5 - \\frac{1}{x^{2}}}',
          why: 'Divide every term by $x^{2}$, the highest power below.' },
        { math: '\\frac{2}{x} \\to 0,\\quad \\frac{1}{x^{2}} \\to 0',
          why: 'A fixed number over something huge heads for zero.' },
        { math: '\\frac{3}{5}' },
      ],
      answer: '$\\frac{3}{5}$, which is the ratio of the leading '
        + 'coefficients.',
    },
    {
      level: 6,
      ask: 'The function $f$ is $x^{2} + 1$ for $x \\le 2$ and $kx - 3$ '
        + 'for $x > 2$. Find $k$ so that $f$ is continuous at $x = 2$.',
      steps: [
        { math: 'f(2) = 2^{2} + 1 = 5', why: 'The value itself, from the first piece.' },
        { math: '\\lim_{x \\to 2^{-}} f(x) = 5', why: 'Coming from the left, along the same piece.' },
        { math: '\\lim_{x \\to 2^{+}} f(x) = 2k - 3', why: 'Coming from the right, along the second piece.' },
        { math: '2k - 3 = 5', why: 'Continuity needs all three to agree. Write this line down; it carries the mark.' },
        { math: 'k = 4' },
      ],
      answer: '$k = 4$. '
        + 'With that value the two pieces meet at the height 5 and the '
        + 'curve can be drawn without lifting the pen.',
    },
  ],

  traps: [
    {
      mistake: 'Writing $\\frac{0}{0}$ as the answer, or as zero.',
      why: 'It is not a value. '
        + 'It is the signal that top and bottom share a factor you have '
        + 'not cancelled yet.',
    },
    {
      mistake: 'Thinking the limit must equal the value of the function.',
      why: 'They agree only when the function is continuous there. '
        + 'A function with a hole has a limit and no value.',
    },
    {
      mistake: 'Cancelling without saying why it is allowed.',
      why: '$x$ approaches $a$ but never reaches it, so the factor is '
        + 'never truly zero. '
        + 'One clause earns that mark.',
    },
    {
      mistake: 'Substituting infinity as though it were a number.',
      why: 'Infinity is a direction, not a value. '
        + 'Divide through by the highest power instead.',
    },
  ],

  extension:
    'The derivative itself is a limit of exactly the $\\frac{0}{0}$ kind: '
    + '$f^{\\prime}(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$, '
    + 'where putting $h = 0$ straight away gives $\\frac{0}{0}$ every time. '
    + 'The whole of differentiation is cancelling an $h$ that was hiding, '
    + 'which is why limits are taught first.',

  questions: [
    {
      id: 'lim-1',
      ask: 'The first thing to do with any limit is:',
      kind: 'choice',
      options: [
        'Substitute the value',
        'Factorise the top',
        'Divide by the highest power',
      ],
      answer: 'Substitute the value',
      teach: 'Most limits are answered by substitution alone. '
        + 'The other methods are only for when it fails.',
      level: 3,
    },
    {
      id: 'lim-2',
      ask: 'Substituting gives zero over zero. This tells you:',
      kind: 'choice',
      options: [
        'A common factor is hiding',
        'The limit is zero',
        'The limit does not exist',
      ],
      answer: 'A common factor is hiding',
      teach: 'Factorise, cancel, and substitute again. '
        + 'The answer appears once the hidden factor is gone.',
      level: 4,
    },
    {
      id: 'lim-3',
      ask: 'A function is continuous at a point when:',
      kind: 'choice',
      options: [
        'The value and the limit both exist and are equal',
        'The limit exists',
        'The function is defined there',
      ],
      answer: 'The value and the limit both exist and are equal',
      teach: 'All three conditions. '
        + 'A hole fails the first, a jump fails the third.',
      level: 5,
    },
    {
      id: 'lim-4',
      ask: 'As x grows without bound, one over x heads towards:',
      kind: 'numeric',
      options: [],
      answer: '0',
      teach: 'A fixed number shared among more and more gives less and '
        + 'less.',
      level: 4,
    },
  ],
})

/* ── differentiation ────────────────────────────────────────────────────── */

teach({
  topicId: 'derivatives-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'The derivative is the gradient of the curve at a point. '
      + 'Before differentiating, name the shape of the expression: '
      + 'a product, a quotient, or a function inside a function. '
      + 'The shape chooses the rule. '
      + 'Picking the rule is the examined skill; '
      + 'applying it is bookkeeping.',
    method: [
      'Name the shape: product, quotient, or chain.',
      'Write down $u$, $v$ and their derivatives before you start.',
      'Substitute into the rule, then simplify.',
    ],
  },

  idea:
    'The derivative $\\frac{dy}{dx}$ is the gradient of the curve at a '
    + 'point, and also the rate at which $y$ changes as $x$ changes. '
    + 'For a power, $\\frac{d}{dx}\\left(x^{n}\\right) = nx^{\\,n-1}$, '
    + 'which holds for every $n$, including negative and fractional ones. '
    + 'Three rules handle everything built from those. '
    + 'For a product $y = uv$, '
    + '$$\\frac{dy}{dx} = u\\frac{dv}{dx} + v\\frac{du}{dx}.$$ '
    + 'For a quotient $y = \\frac{u}{v}$, '
    + '$$\\frac{dy}{dx} = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^{2}}.$$ '
    + 'For a function inside a function, the chain rule says '
    + '$$\\frac{dy}{dx} = \\frac{dy}{du} \\times \\frac{du}{dx}.$$ '
    + 'The trigonometric derivatives to know are '
    + '$\\frac{d}{dx}(\\sin x) = \\cos x$ and '
    + '$\\frac{d}{dx}(\\cos x) = -\\sin x$, with $x$ in radians.',

  tables: [{
    caption: 'Which rule the shape of the expression asks for',
    columns: ['What you see', 'Example', 'Rule to use'],
    rows: [
      ['A single power', '$x^{5}$', 'Power rule'],
      ['Terms added', '$x^{3} + 4x$', 'Differentiate term by term'],
      ['Two things multiplied', '$x^{2}\\sin x$', 'Product rule'],
      ['One thing over another', '$\\frac{2x+1}{x-3}$', 'Quotient rule'],
      ['A bracket raised to a power', '$(3x+1)^{7}$', 'Chain rule'],
      ['A function of a function', '$\\sin(x^{2})$', 'Chain rule'],
    ],
    note: 'Decide the row before you write anything. '
      + 'Most lost marks here are the right rule applied to the wrong shape.',
  }],

  figure: {
    alt: 'A curve with a fixed point P on it and a second point Q further '
      + 'along. A straight chord joins P to Q, and a small right angled '
      + 'triangle under the chord is labelled with a horizontal step and a '
      + 'rise. Two fainter chords show Q sliding back towards P, and the '
      + 'last line through P alone is labelled as the tangent, whose '
      + 'gradient is the derivative.',
    svg: '<svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="60" y1="300" x2="520" y2="300"/>'
      + '<line x1="60" y1="300" x2="60" y2="40"/>'
      + '<path d="M80 290 Q 260 300, 360 150 T 500 60" stroke="#0f8a4d"/>'
      + '<circle cx="250" cy="266" r="5" fill="currentColor"/>'
      + '<text x="236" y="288" font-size="16" fill="currentColor" '
      + 'stroke="none">P</text>'
      + '<circle cx="400" cy="122" r="5" fill="currentColor"/>'
      + '<text x="408" y="116" font-size="16" fill="currentColor" '
      + 'stroke="none">Q</text>'
      + '<line x1="250" y1="266" x2="400" y2="122" stroke="#b4531a"/>'
      + '<line x1="250" y1="266" x2="400" y2="266" '
      + 'stroke-dasharray="4 4" stroke-opacity="0.6"/>'
      + '<line x1="400" y1="266" x2="400" y2="122" '
      + 'stroke-dasharray="4 4" stroke-opacity="0.6"/>'
      + '<text x="325" y="286" font-size="14" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">step across</text>'
      + '<text x="412" y="200" font-size="14" '
      + 'fill="currentColor" stroke="none">rise</text>'
      + '<line x1="250" y1="266" x2="340" y2="182" stroke="#b4531a" '
      + 'stroke-opacity="0.45"/>'
      + '<line x1="250" y1="266" x2="300" y2="224" stroke="#b4531a" '
      + 'stroke-opacity="0.3"/>'
      + '<line x1="170" y1="330" x2="390" y2="178" stroke="#1d4ed8"/>'
      + '<text x="200" y="150" font-size="15" fill="currentColor" '
      + 'stroke="none">as Q slides back to P</text>'
      + '<text x="200" y="172" font-size="15" fill="currentColor" '
      + 'stroke="none">the chord becomes the tangent</text>'
      + '</svg>',
  },

  mechanism:
    'Everything in this topic turns on one decision made before any writing: '
    + 'what shape is the expression. '
    + 'A learner who applies the product rule to a quotient has lost the '
    + 'question in the first line, and the arithmetic afterwards is perfect '
    + 'and worthless. '
    + 'So read the expression as a whole and ask what the last operation is. '
    + 'In $x^{2}\\sin x$ the last thing done is a multiplication, so it is a '
    + 'product. '
    + 'In $(3x+1)^{7}$ the last thing done is raising to a power, and what '
    + 'is being raised is not $x$ but a bracket, so it is a chain. '
    + 'In $\\frac{2x+1}{x-3}$ the last thing is a division, so it is a '
    + 'quotient. '
    + 'Once the shape is named, write $u$ and $v$ and their derivatives in a '
    + 'little column of their own before you touch the rule. '
    + 'That column is worth method marks on its own in WASSCE, and it is '
    + 'also what stops the commonest slip in the quotient rule. '
    + 'The quotient rule is not symmetric. '
    + 'The top is $v\\frac{du}{dx} - u\\frac{dv}{dx}$, in that order, and '
    + 'swapping the two terms changes the sign of the whole answer. '
    + 'The product rule, by contrast, is symmetric, so there is nothing to '
    + 'remember about the order there. '
    + 'The way to hold the quotient rule is to notice the bottom function '
    + 'leads: $v$ comes first on top, and $v^{2}$ is underneath. '
    + 'The chain rule has its own single point of failure, which is '
    + 'forgetting the inside derivative. '
    + 'Differentiating $(3x+1)^{7}$ as $7(3x+1)^{6}$ is wrong by a factor of '
    + '3, and it is wrong in a way that looks finished, which is why it '
    + 'survives a check. '
    + 'The guard is to say the rule out in words: differentiate the outside, '
    + 'leave the inside alone, then multiply by the derivative of the '
    + 'inside. '
    + 'Three clauses, three things to write. '
    + 'One more habit. '
    + 'Tidy before you differentiate when you can. '
    + '$\\frac{x^{3} + 2x}{x}$ is a quotient, but it is also $x^{2} + 2$, '
    + 'and the second form takes one line where the first takes five. '
    + 'Looking for that simplification first is not laziness, it is the '
    + 'shortest correct route, and fewer lines means fewer places to slip.',

  recap:
    'You have found the gradient of a straight line as rise over step. '
    + 'A curve has a different gradient at every point, '
    + 'and the derivative is the formula that gives it.',

  method: [
    'Simplify the expression first if it will divide out.',
    'Ask what the last operation is: times, divide, or a function inside.',
    'Name the rule that shape calls for.',
    'Write $u$, $v$, $\\frac{du}{dx}$ and $\\frac{dv}{dx}$ in a column.',
    'For a quotient keep the order: $v$ times $du$ first, then subtract.',
    'For a chain, multiply by the derivative of the inside.',
    'Substitute into the rule and simplify.',
    'Factorise the answer where a common factor appears.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Differentiate $y = 4x^{3} - \\frac{2}{x}$.',
      steps: [
        { math: 'y = 4x^{3} - 2x^{-1}', why: 'Write every term as a power before using the power rule.' },
        { math: '\\frac{dy}{dx} = 12x^{2} + 2x^{-2}',
          why: 'The second term: $-2 \\times -1 = +2$, and the index drops to $-2$.' },
        { math: '\\frac{dy}{dx} = 12x^{2} + \\frac{2}{x^{2}}' },
      ],
      answer: '$\\frac{dy}{dx} = 12x^{2} + \\frac{2}{x^{2}}$',
    },
    {
      level: 4,
      ask: 'Differentiate $y = (3x + 1)^{7}$.',
      steps: [
        { math: 'u = 3x + 1,\\quad y = u^{7}', why: 'A bracket raised to a power, so this is the chain rule.' },
        { math: '\\frac{dy}{du} = 7u^{6},\\quad \\frac{du}{dx} = 3' },
        { math: '\\frac{dy}{dx} = 7u^{6} \\times 3', why: 'Never leave out the inside derivative. This is the mark most often lost.' },
        { math: '\\frac{dy}{dx} = 21(3x+1)^{6}' },
      ],
      answer: '$21(3x+1)^{6}$',
    },
    {
      level: 5,
      ask: 'Differentiate $y = \\frac{2x + 1}{x - 3}$.',
      steps: [
        { math: 'u = 2x+1,\\quad v = x-3', why: 'A quotient. Write the column before the rule.' },
        { math: '\\frac{du}{dx} = 2,\\quad \\frac{dv}{dx} = 1' },
        { math: '\\frac{dy}{dx} = \\frac{(x-3)(2) - (2x+1)(1)}{(x-3)^{2}}',
          why: 'Bottom times derivative of top FIRST, then subtract. The order matters.' },
        { math: '\\frac{dy}{dx} = \\frac{2x - 6 - 2x - 1}{(x-3)^{2}}',
          why: 'Watch the minus sign across the whole second bracket.' },
        { math: '\\frac{dy}{dx} = \\frac{-7}{(x-3)^{2}}' },
      ],
      answer: '$\\frac{-7}{(x-3)^{2}}$. '
        + 'The gradient is negative everywhere, so the curve always falls.',
    },
    {
      level: 6,
      ask: 'Differentiate $y = x^{2}\\sin x$, and find the gradient at '
        + '$x = 0$.',
      steps: [
        { math: 'u = x^{2},\\quad v = \\sin x', why: 'Two things multiplied, so it is the product rule.' },
        { math: '\\frac{du}{dx} = 2x,\\quad \\frac{dv}{dx} = \\cos x' },
        { math: '\\frac{dy}{dx} = x^{2}\\cos x + 2x\\sin x',
          why: 'First times derivative of second, plus second times derivative of first.' },
        { math: '\\frac{dy}{dx}\\Big|_{x=0} = 0 + 0 = 0',
          why: 'Both terms carry a factor of $x$.' },
      ],
      answer: '$\\frac{dy}{dx} = x^{2}\\cos x + 2x\\sin x$, '
        + 'and the gradient at the origin is $0$.',
    },
  ],

  traps: [
    {
      mistake: 'Leaving out the inside derivative in the chain rule.',
      why: 'The answer looks complete, which is why it survives checking. '
        + 'Say the rule in words every time: outside, inside unchanged, '
        + 'times inside derivative.',
    },
    {
      mistake: 'Swapping the two terms on top of the quotient rule.',
      why: 'It is not symmetric. '
        + 'Bottom times derivative of top comes first, and swapping flips '
        + 'the sign of the whole answer.',
    },
    {
      mistake: 'Differentiating top and bottom separately.',
      why: 'There is no such rule. '
        + 'A quotient needs the quotient rule, or a tidy up into separate '
        + 'terms first.',
    },
    {
      mistake: 'Treating $\\frac{2}{x}$ as a constant.',
      why: 'It is $2x^{-1}$, so it has a derivative. '
        + 'Write every term as a power before you start.',
    },
  ],

  extension:
    'Implicit differentiation extends the chain rule to curves that are '
    + 'not written as $y$ in terms of $x$, such as $x^{2} + y^{2} = 25$. '
    + 'Differentiate both sides with respect to $x$, remembering that any '
    + 'term in $y$ brings a factor of $\\frac{dy}{dx}$ with it, then make '
    + '$\\frac{dy}{dx}$ the subject.',

  questions: [
    {
      id: 'dif-1',
      ask: 'The derivative of x to the power 5 is:',
      kind: 'choice',
      options: ['5x to the power 4', 'x to the power 4', '5x to the power 5'],
      answer: '5x to the power 4',
      teach: 'Bring the index down in front, then reduce it by one.',
      level: 3,
    },
    {
      id: 'dif-2',
      ask: 'Which rule does a bracket raised to a power need?',
      kind: 'choice',
      options: ['The chain rule', 'The product rule', 'The quotient rule'],
      answer: 'The chain rule',
      teach: 'There is a function inside a function, '
        + 'so multiply by the derivative of the inside.',
      level: 4,
    },
    {
      id: 'dif-3',
      ask: 'On top of the quotient rule, which product is written first?',
      kind: 'choice',
      options: [
        'Bottom times the derivative of the top',
        'Top times the derivative of the bottom',
        'Either, the order does not matter',
      ],
      answer: 'Bottom times the derivative of the top',
      teach: 'The rule is not symmetric. '
        + 'Swapping the terms changes the sign of the whole answer.',
      level: 5,
    },
    {
      id: 'dif-4',
      ask: 'Differentiate 3x squared and give the value at x = 2.',
      kind: 'numeric',
      options: [],
      answer: '12',
      teach: 'The derivative is 6x, and at x = 2 that is 12.',
      level: 4,
    },
  ],
})

/* ── vector algebra ─────────────────────────────────────────────────────── */

teach({
  topicId: 'vector-algebra-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A vector has size and direction, so it is handled component by '
      + 'component. '
      + 'Add by adding the components. '
      + 'The magnitude comes from Pythagoras. '
      + 'The scalar product multiplies matching components and adds, '
      + 'and it gives a number, not a vector, '
      + 'which is how it reaches the angle between two vectors.',
    method: [
      'Write every vector in component form first.',
      'Add or subtract component by component.',
      'For an angle, use $\\mathbf{a}\\cdot\\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos\\theta$.',
    ],
  },

  idea:
    'A vector has both magnitude and direction; a scalar has magnitude '
    + 'only. '
    + 'Written in components, $\\mathbf{a} = x\\mathbf{i} + y\\mathbf{j}$, '
    + 'where $\\mathbf{i}$ and $\\mathbf{j}$ are one unit east and one unit '
    + 'north. '
    + 'Addition and subtraction work component by component. '
    + 'Multiplying by a scalar stretches a vector without turning it, '
    + 'unless the scalar is negative, which reverses it. '
    + 'The magnitude is '
    + '$$|\\mathbf{a}| = \\sqrt{x^{2} + y^{2}},$$ '
    + 'straight from Pythagoras. '
    + 'The unit vector in the direction of $\\mathbf{a}$ is '
    + '$\\frac{\\mathbf{a}}{|\\mathbf{a}|}$. '
    + 'The scalar product is '
    + '$$\\mathbf{a}\\cdot\\mathbf{b} = x_1x_2 + y_1y_2 '
    + '= |\\mathbf{a}||\\mathbf{b}|\\cos\\theta,$$ '
    + 'and it produces a number. '
    + 'Two vectors are perpendicular exactly when their scalar product is '
    + 'zero, because $\\cos 90^\\circ = 0$.',

  tables: [{
    caption: 'What each vector operation does and what sort of thing comes out',
    columns: ['Operation', 'How it is done', 'Result is'],
    rows: [
      ['Add', 'Add matching components', 'A vector'],
      ['Subtract', 'Subtract matching components', 'A vector'],
      ['Times a scalar', 'Multiply both components', 'A vector'],
      ['Magnitude', 'Square, add, square root', 'A number'],
      ['Scalar product', 'Multiply matching components and add', 'A number'],
    ],
    note: 'The last two give numbers. '
      + 'Writing $\\mathbf{i}$ and $\\mathbf{j}$ in an answer that should '
      + 'be a number is a sign the wrong operation was used.',
  }],

  figure: {
    alt: 'A grid with two arrows drawn from the origin. One goes three '
      + 'units east and four units north and is labelled vector a. The '
      + 'other goes five units east and one unit north and is labelled '
      + 'vector b. A dashed right angled triangle under the first arrow '
      + 'shows the three across and the four up that give its length of '
      + 'five by Pythagoras, and the angle between the two arrows is '
      + 'marked theta.',
    svg: '<svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<line x1="70" y1="310" x2="520" y2="310"/>'
      + '<line x1="70" y1="310" x2="70" y2="40"/>'
      + '<text x="528" y="315" font-size="15" fill="currentColor" '
      + 'stroke="none">x</text>'
      + '<text x="56" y="36" font-size="15" fill="currentColor" '
      + 'stroke="none">y</text>'
      + '<line x1="70" y1="310" x2="250" y2="70" stroke="#0f8a4d"/>'
      + '<path d="M238 86 L252 68 L230 68" stroke="#0f8a4d"/>'
      + '<text x="252" y="60" font-size="16" fill="#0f8a4d" '
      + 'stroke="none">a</text>'
      + '<line x1="70" y1="310" x2="430" y2="250" stroke="#b4531a"/>'
      + '<path d="M414 242 L434 250 L416 260" stroke="#b4531a"/>'
      + '<text x="440" y="250" font-size="16" fill="#b4531a" '
      + 'stroke="none">b</text>'
      + '<line x1="70" y1="310" x2="250" y2="310" '
      + 'stroke-dasharray="4 4" stroke-opacity="0.6"/>'
      + '<line x1="250" y1="310" x2="250" y2="70" '
      + 'stroke-dasharray="4 4" stroke-opacity="0.6"/>'
      + '<text x="160" y="332" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">3 across</text>'
      + '<text x="262" y="200" font-size="15" '
      + 'fill="currentColor" stroke="none">4 up</text>'
      + '<text x="120" y="160" font-size="15" '
      + 'fill="currentColor" stroke="none">length 5</text>'
      + '<path d="M140 258 A 90 90 0 0 1 148 288" stroke="#1d4ed8"/>'
      + '<text x="158" y="266" font-size="16" fill="#1d4ed8" '
      + 'stroke="none">angle</text>'
      + '</svg>',
  },

  mechanism:
    'The reason vectors are worth a topic of their own is that they carry '
    + 'direction, and direction cannot be added like a number. '
    + 'Walking 3 km east then 4 km north does not put you 7 km from home; '
    + 'it puts you 5 km from home. '
    + 'Components are the device that makes this manageable. '
    + 'Once a vector is split into its east part and its north part, the '
    + 'two parts never interfere, so each can be added on its own, and the '
    + 'direction is rebuilt at the end from the pair. '
    + 'That is the whole method, and it is why the first line of every '
    + 'solution here is: write everything in components. '
    + 'The scalar product is the part learners find strange, so it is worth '
    + 'saying plainly what it is for. '
    + 'It takes two vectors and gives a number, and that number is large '
    + 'when the vectors point the same way, zero when they are '
    + 'perpendicular, and negative when they point against each other. '
    + 'It is a measure of agreement in direction. '
    + 'There are two formulae for it and the question of which to use is '
    + 'settled by what you are given. '
    + 'If you have components, $x_1x_2 + y_1y_2$ gives you the number. '
    + 'If you want the angle, set that number equal to '
    + '$|\\mathbf{a}||\\mathbf{b}|\\cos\\theta$ and solve for $\\cos\\theta$. '
    + 'In practice you almost always use both in one question: the left '
    + 'hand side from components, the right hand side to release the angle. '
    + 'Two errors cost most of the marks. '
    + 'The first is answering a magnitude or a scalar product with a vector. '
    + 'Both are numbers, so an $\\mathbf{i}$ in the answer is a sign that '
    + 'something has gone wrong, and it is a sign you can spot yourself. '
    + 'The second is sign loss when subtracting. '
    + '$\\mathbf{a} - \\mathbf{b}$ needs the minus applied to both '
    + 'components of $\\mathbf{b}$, and a bracket written round '
    + '$\\mathbf{b}$ before subtracting prevents it. '
    + 'Last, the perpendicular test is free marks and is often not seen. '
    + 'If a question asks you to show two vectors are at right angles, you '
    + 'do not need an angle at all: show the scalar product is zero, and '
    + 'say that $\\cos 90^\\circ = 0$ is the reason.',

  recap:
    'You have used Pythagoras and bearings. '
    + 'A vector holds a distance and a direction in one object, '
    + 'so those two tools become arithmetic you can do on paper.',

  method: [
    'Write every vector in component form.',
    'For addition or subtraction, work component by component.',
    'Put a bracket round a vector before subtracting it.',
    'For magnitude, square the components, add, take the square root.',
    'For a unit vector, divide the vector by its magnitude.',
    'For a scalar product, multiply matching components and add.',
    'For an angle, set that number equal to $|\\mathbf{a}||\\mathbf{b}|\\cos\\theta$.',
    'For perpendicularity, show the scalar product is zero and say why.',
  ],

  worked: [
    {
      level: 3,
      ask: 'Given $\\mathbf{a} = 3\\mathbf{i} + 4\\mathbf{j}$ and '
        + '$\\mathbf{b} = 5\\mathbf{i} - \\mathbf{j}$, find '
        + '$\\mathbf{a} + \\mathbf{b}$ and $|\\mathbf{a}|$.',
      steps: [
        { math: '\\mathbf{a} + \\mathbf{b} = (3+5)\\mathbf{i} + (4-1)\\mathbf{j}',
          why: 'Components never mix.' },
        { math: '\\mathbf{a} + \\mathbf{b} = 8\\mathbf{i} + 3\\mathbf{j}' },
        { math: '|\\mathbf{a}| = \\sqrt{3^{2} + 4^{2}}', why: 'Pythagoras on the components.' },
        { math: '|\\mathbf{a}| = 5' },
      ],
      answer: '$\\mathbf{a} + \\mathbf{b} = 8\\mathbf{i} + 3\\mathbf{j}$ '
        + 'and $|\\mathbf{a}| = 5$. '
        + 'The magnitude is a number, with no $\\mathbf{i}$ or '
        + '$\\mathbf{j}$ in it.',
    },
    {
      level: 4,
      ask: 'Show that $2\\mathbf{i} + 6\\mathbf{j}$ and '
        + '$9\\mathbf{i} - 3\\mathbf{j}$ are perpendicular.',
      steps: [
        { math: '\\mathbf{a}\\cdot\\mathbf{b} = (2)(9) + (6)(-3)',
          why: 'Multiply matching components and add.' },
        { math: '= 18 - 18 = 0' },
        { math: '|\\mathbf{a}||\\mathbf{b}|\\cos\\theta = 0 \\Rightarrow \\cos\\theta = 0',
          why: 'Neither magnitude is zero, so the cosine must be.' },
        { math: '\\theta = 90^\\circ' },
      ],
      answer: 'The scalar product is zero, and since neither vector is '
        + 'zero this forces $\\cos\\theta = 0$, so they are perpendicular. '
        + 'Writing that last reason is what earns the mark.',
    },
    {
      level: 5,
      ask: 'Find the angle between $\\mathbf{a} = 4\\mathbf{i} + '
        + '3\\mathbf{j}$ and $\\mathbf{b} = \\mathbf{i} + 2\\mathbf{j}$, '
        + 'to the nearest degree.',
      steps: [
        { math: '\\mathbf{a}\\cdot\\mathbf{b} = (4)(1) + (3)(2) = 10',
          why: 'Components give the number on the left.' },
        { math: '|\\mathbf{a}| = \\sqrt{16+9} = 5' },
        { math: '|\\mathbf{b}| = \\sqrt{1+4} = \\sqrt{5}' },
        { math: '\\cos\\theta = \\frac{10}{5\\sqrt{5}}',
          why: 'The other formula releases the angle.' },
        { math: '\\cos\\theta = 0.8944' },
        { math: '\\theta = 27^\\circ' },
      ],
      answer: 'About $27^\\circ$.',
    },
    {
      level: 6,
      ask: 'A boat in the Volta estuary is steered at '
        + '$6\\mathbf{i} + 8\\mathbf{j}$ km per hour while the current '
        + 'runs at $2\\mathbf{i} - 3\\mathbf{j}$ km per hour. '
        + 'Find the resultant velocity, its speed, and the unit vector '
        + 'along it.',
      steps: [
        { math: '\\mathbf{v} = (6+2)\\mathbf{i} + (8-3)\\mathbf{j}',
          why: 'The resultant is the vector sum, which is why the boat does not go where it points.' },
        { math: '\\mathbf{v} = 8\\mathbf{i} + 5\\mathbf{j}' },
        { math: '|\\mathbf{v}| = \\sqrt{64 + 25} = \\sqrt{89}' },
        { math: '|\\mathbf{v}| = 9.43', why: 'Speed is the magnitude, so it is a number with no direction.' },
        { math: '\\hat{\\mathbf{v}} = \\frac{8\\mathbf{i} + 5\\mathbf{j}}{\\sqrt{89}}',
          why: 'Dividing by the magnitude leaves the direction and a length of one.' },
      ],
      answer: 'Resultant $8\\mathbf{i} + 5\\mathbf{j}$, speed about '
        + '$9.43$ km per hour, and unit vector '
        + '$\\frac{1}{\\sqrt{89}}(8\\mathbf{i} + 5\\mathbf{j})$.',
    },
  ],

  traps: [
    {
      mistake: 'Adding magnitudes instead of adding vectors.',
      why: '3 km east then 4 km north is 5 km from home, not 7. '
        + 'Add the components, then find the magnitude at the end.',
    },
    {
      mistake: 'Giving a scalar product as a vector.',
      why: 'It is a number. '
        + 'An $\\mathbf{i}$ in that answer means components were added '
        + 'rather than multiplied and summed.',
    },
    {
      mistake: 'Losing a sign when subtracting a vector.',
      why: 'The minus applies to both components. '
        + 'Bracket the vector before subtracting it.',
    },
    {
      mistake: 'Hunting for the angle when asked to show perpendicularity.',
      why: 'A zero scalar product is the whole proof, '
        + 'provided you say that $\\cos 90^\\circ = 0$.',
    },
  ],

  extension:
    'In three dimensions nothing changes except that there is a third '
    + 'component $\\mathbf{k}$: '
    + '$|\\mathbf{a}| = \\sqrt{x^{2}+y^{2}+z^{2}}$ and '
    + '$\\mathbf{a}\\cdot\\mathbf{b} = x_1x_2 + y_1y_2 + z_1z_2$. '
    + 'That is the strength of the component method. '
    + 'It does not care how many directions there are.',

  questions: [
    {
      id: 'vec-1',
      ask: 'The magnitude of the vector 6i + 8j is:',
      kind: 'numeric',
      options: [],
      answer: '10',
      teach: 'Square the components, add to get 100, then take the square '
        + 'root.',
      level: 3,
    },
    {
      id: 'vec-2',
      ask: 'Two vectors are perpendicular when their scalar product is:',
      kind: 'choice',
      options: ['Zero', 'One', 'Equal to the product of the magnitudes'],
      answer: 'Zero',
      teach: 'Because the cosine of ninety degrees is zero.',
      level: 4,
    },
    {
      id: 'vec-3',
      ask: 'The scalar product of two vectors is:',
      kind: 'choice',
      options: ['A number', 'A vector', 'An angle'],
      answer: 'A number',
      teach: 'That is what scalar means here. '
        + 'A vector in the answer is a warning sign.',
      level: 4,
    },
    {
      id: 'vec-4',
      ask: 'To get a unit vector in the direction of a, you:',
      kind: 'choice',
      options: [
        'Divide a by its magnitude',
        'Subtract one from each component',
        'Square each component',
      ],
      answer: 'Divide a by its magnitude',
      teach: 'Dividing by the length keeps the direction and makes the '
        + 'length one.',
      level: 5,
    },
  ],
})

/* ── probability ────────────────────────────────────────────────────────── */

teach({
  topicId: 'probability-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'Probability is favourable over total, for equally likely outcomes. '
      + 'Add for or, multiply for and. '
      + 'But subtract the overlap when adding, '
      + 'and ask whether the first event changed the second before '
      + 'multiplying. '
      + 'Without replacement, it did.',
    method: [
      'Write the total number of outcomes down first.',
      'For "or", add and subtract the overlap.',
      'For "and", multiply, checking whether the second probability changed.',
    ],
  },

  idea:
    'For equally likely outcomes, the probability of an event is the '
    + 'number of favourable outcomes over the total. '
    + 'Every probability lies between 0 and 1, and '
    + '$P(\\text{not } A) = 1 - P(A)$. '
    + 'For two events, '
    + '$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B),$$ '
    + 'where the overlap is subtracted because adding counted it twice. '
    + 'Events are mutually exclusive when they cannot both happen, so '
    + '$P(A \\cap B) = 0$. '
    + 'Conditional probability is '
    + '$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)},$$ '
    + 'the probability of $A$ given that $B$ has happened. '
    + 'Rearranged it gives the multiplication law '
    + '$P(A \\cap B) = P(B)\\,P(A \\mid B)$. '
    + 'Events are independent when one happening does not change the other, '
    + 'and then and only then '
    + '$P(A \\cap B) = P(A)\\,P(B)$.',

  tables: [{
    caption: 'Two pairs of words that sound alike and mean different things',
    columns: ['Term', 'What it means', 'The rule it gives', 'Can both happen?'],
    rows: [
      ['Mutually exclusive', 'They cannot both happen',
        '$P(A \\cap B) = 0$', 'No'],
      ['Independent', 'One does not affect the other',
        '$P(A \\cap B) = P(A)P(B)$', 'Yes'],
      ['With replacement', 'The item goes back',
        'The second probability is unchanged', 'Yes'],
      ['Without replacement', 'The item is kept out',
        'The second probability changes', 'Yes'],
    ],
    note: 'Two events that are mutually exclusive are never independent, '
      + 'because the first one happening makes the second impossible.',
  }],

  figure: {
    alt: 'A tree diagram for drawing two beads from a bag holding five red '
      + 'and three blue, without replacement. The first pair of branches '
      + 'is five over eight for red and three over eight for blue. Each of '
      + 'those splits again, and the second set of fractions has seven '
      + 'underneath instead of eight, because one bead has already been '
      + 'taken out. The path red then red is labelled five over eight '
      + 'times four over seven.',
    svg: '<svg viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<circle cx="70" cy="180" r="5" fill="currentColor"/>'
      + '<line x1="76" y1="176" x2="250" y2="90"/>'
      + '<line x1="76" y1="186" x2="250" y2="270"/>'
      + '<text x="150" y="112" font-size="15" text-anchor="middle" '
      + 'fill="#b4531a" stroke="none">5 over 8</text>'
      + '<text x="150" y="252" font-size="15" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">3 over 8</text>'
      + '<text x="258" y="94" font-size="16" fill="#b4531a" '
      + 'stroke="none">Red</text>'
      + '<text x="258" y="276" font-size="16" fill="#1d4ed8" '
      + 'stroke="none">Blue</text>'
      + '<line x1="310" y1="86" x2="470" y2="40"/>'
      + '<line x1="310" y1="96" x2="470" y2="140"/>'
      + '<line x1="310" y1="266" x2="470" y2="220"/>'
      + '<line x1="310" y1="276" x2="470" y2="320"/>'
      + '<text x="478" y="44" font-size="15" fill="#b4531a" '
      + 'stroke="none">Red  4 over 7</text>'
      + '<text x="478" y="146" font-size="15" fill="#1d4ed8" '
      + 'stroke="none">Blue  3 over 7</text>'
      + '<text x="478" y="224" font-size="15" fill="#b4531a" '
      + 'stroke="none">Red  5 over 7</text>'
      + '<text x="478" y="326" font-size="15" fill="#1d4ed8" '
      + 'stroke="none">Blue  2 over 7</text>'
      + '<text x="300" y="186" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'seven left, not eight</text>'
      + '<text x="300" y="208" font-size="15" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">'
      + 'because one is already out</text>'
      + '</svg>',
  },

  mechanism:
    'Almost every lost mark in probability comes from one of two confusions, '
    + 'and both can be settled by a question asked before any arithmetic. '
    + 'The first question is whether the word in the problem is "or" or '
    + '"and". '
    + 'Or means add; and means multiply. '
    + 'That much is easy, but each half has a catch. '
    + 'When you add, you may have counted something twice. '
    + 'Of 40 pupils, 18 play football and 15 play volleyball, and 6 play '
    + 'both. '
    + 'The chance a pupil plays at least one is not '
    + '$\\frac{18}{40} + \\frac{15}{40}$, because the 6 are inside both '
    + 'counts. '
    + 'It is $\\frac{18 + 15 - 6}{40} = \\frac{27}{40}$. '
    + 'That subtraction is the whole of the addition law, and it is a '
    + 'correction, not a formula to memorise. '
    + 'The second question is whether the first event changed the second, '
    + 'and this is where most of the marks actually go. '
    + 'A bag holds 5 red and 3 blue beads. '
    + 'Drawing two with replacement, the chance of two reds is '
    + '$\\frac{5}{8} \\times \\frac{5}{8}$, because the bag is restored. '
    + 'Drawing two without replacement, it is '
    + '$\\frac{5}{8} \\times \\frac{4}{7}$: one red has gone, so both the '
    + 'reds and the total have dropped by one. '
    + 'Learners who write $\\frac{5}{8} \\times \\frac{5}{8}$ for the '
    + 'second case have not misread the arithmetic, they have missed that '
    + 'the second draw happens in a changed world. '
    + 'So the habit to build is to redraw the bag after the first draw, in '
    + 'words, before writing the second fraction. '
    + 'A tree diagram does this for you, which is why it is the tool to '
    + 'reach for whenever there are two stages. '
    + 'The branches at each node must add to 1, which is a free check that '
    + 'catches a wrong denominator immediately. '
    + 'One more distinction is worth holding on to, because examiners test '
    + 'it directly. '
    + 'Mutually exclusive and independent are not the same idea and are '
    + 'almost opposites. '
    + 'Mutually exclusive means that if one happens the other cannot, so '
    + 'the first tells you everything about the second. '
    + 'Independent means the first tells you nothing about the second. '
    + 'Two events with real probabilities cannot be both, and saying why '
    + 'is a common examination question.',

  recap:
    'You have found simple probabilities by counting favourable outcomes '
    + 'over total outcomes. '
    + 'This handles two events at once, '
    + 'where the hard part is whether the first one changes the second.',

  method: [
    'List or count the total number of equally likely outcomes.',
    'Decide whether the question says or, and, or given that.',
    'For or, add the probabilities and subtract the overlap.',
    'For and, multiply, but first ask what changed.',
    'Without replacement, reduce both the favourable count and the total.',
    'Draw a tree for a two stage problem and check each node adds to 1.',
    'For given that, divide by the probability of what is given.',
    'Check the answer lies between 0 and 1.',
  ],

  worked: [
    {
      level: 3,
      ask: 'A fair die is rolled. Find the probability of an even number '
        + 'or a 5.',
      steps: [
        { math: 'P(\\text{even}) = \\tfrac{3}{6}', why: '2, 4 and 6.' },
        { math: 'P(5) = \\tfrac{1}{6}' },
        { math: 'P(\\text{even} \\cap 5) = 0', why: '5 is not even, so these are mutually exclusive and there is no overlap to remove.' },
        { math: 'P = \\tfrac{3}{6} + \\tfrac{1}{6} = \\tfrac{4}{6} = \\tfrac{2}{3}' },
      ],
      answer: '$\\frac{2}{3}$',
    },
    {
      level: 4,
      ask: 'A bag holds 5 red and 3 blue beads. Two are drawn without '
        + 'replacement. Find the probability that both are red.',
      steps: [
        { math: 'P(\\text{first red}) = \\tfrac{5}{8}' },
        { math: 'P(\\text{second red} \\mid \\text{first red}) = \\tfrac{4}{7}',
          why: 'One red has gone, so 4 reds remain out of 7 beads. Redraw the bag before writing this.' },
        { math: 'P = \\tfrac{5}{8} \\times \\tfrac{4}{7}' },
        { math: 'P = \\tfrac{20}{56} = \\tfrac{5}{14}' },
      ],
      answer: '$\\frac{5}{14}$. '
        + 'With replacement it would have been '
        + '$\\frac{25}{64}$, which is larger, as it should be.',
    },
    {
      level: 5,
      ask: 'In a class of 40, 18 play football, 15 play volleyball and 6 '
        + 'play both. A pupil is chosen at random. Find the probability '
        + 'that the pupil plays at least one game, and the probability '
        + 'that a footballer also plays volleyball.',
      steps: [
        { math: 'P(F \\cup V) = \\tfrac{18}{40} + \\tfrac{15}{40} - \\tfrac{6}{40}',
          why: 'The 6 sit inside both counts, so one copy comes off.' },
        { math: 'P(F \\cup V) = \\tfrac{27}{40}' },
        { math: 'P(V \\mid F) = \\frac{P(V \\cap F)}{P(F)} = \\frac{6/40}{18/40}',
          why: 'Given that the pupil plays football, the class has shrunk to the 18 footballers.' },
        { math: 'P(V \\mid F) = \\tfrac{1}{3}' },
      ],
      answer: '$\\frac{27}{40}$ play at least one game, and '
        + '$\\frac{1}{3}$ of the footballers also play volleyball.',
    },
    {
      level: 6,
      ask: 'A farmer near Wenchi says his maize germinates with '
        + 'probability 0.8 and, separately, his cowpea with probability '
        + '0.6. Find the probability that at least one crop germinates, '
        + 'and explain why these events are independent but not mutually '
        + 'exclusive.',
      steps: [
        { math: 'P(\\text{neither}) = (1-0.8)(1-0.6)',
          why: 'Easier through the complement: at least one is everything except neither.' },
        { math: 'P(\\text{neither}) = 0.2 \\times 0.4 = 0.08',
          why: 'Multiplying is allowed only because the two are independent.' },
        { math: 'P(\\text{at least one}) = 1 - 0.08 = 0.92' },
      ],
      answer: '$0.92$. '
        + 'They are independent because one crop germinating does not '
        + 'change the chance for the other. '
        + 'They are not mutually exclusive because both can germinate in '
        + 'the same season, and indeed that is the likeliest outcome.',
    },
  ],

  traps: [
    {
      mistake: 'Keeping the same denominator on the second draw.',
      why: 'Without replacement one item has gone, so both the favourable '
        + 'count and the total drop. '
        + 'Redraw the bag in words first.',
    },
    {
      mistake: 'Adding probabilities without removing the overlap.',
      why: 'Anything in both events has been counted twice. '
        + 'Subtract one copy.',
    },
    {
      mistake: 'Treating mutually exclusive and independent as the same.',
      why: 'Mutually exclusive means the first decides the second. '
        + 'Independent means it tells you nothing. '
        + 'They are almost opposites.',
    },
    {
      mistake: 'Giving a probability above 1.',
      why: 'It is a sign that two events were added when they should have '
        + 'been multiplied. '
        + 'Check the range before writing the answer down.',
    },
  ],

  extension:
    'Reversing a conditional probability is the start of Bayes thinking. '
    + 'The chance a test is positive given a disease is not the chance of '
    + 'the disease given a positive test, and the two can differ wildly '
    + 'when the disease is rare. '
    + 'Both come from the same multiplication law read in opposite '
    + 'directions.',

  questions: [
    {
      id: 'prb-1',
      ask: 'A card is drawn from 52. The probability it is a heart is:',
      kind: 'choice',
      options: ['One quarter', 'One thirteenth', 'One half'],
      answer: 'One quarter',
      teach: 'Thirteen hearts out of fifty two cards.',
      level: 3,
    },
    {
      id: 'prb-2',
      ask: 'Drawing two beads without replacement, the second denominator:',
      kind: 'choice',
      options: [
        'Is one less than the first',
        'Stays the same',
        'Is doubled',
      ],
      answer: 'Is one less than the first',
      teach: 'One bead has been taken out and not put back, so the bag is '
        + 'smaller.',
      level: 4,
    },
    {
      id: 'prb-3',
      ask: 'For mutually exclusive events, the probability of both is:',
      kind: 'numeric',
      options: [],
      answer: '0',
      teach: 'They cannot happen together, which is what the words mean.',
      level: 4,
    },
    {
      id: 'prb-4',
      ask: 'Why subtract the overlap when adding two probabilities?',
      kind: 'choice',
      options: [
        'Outcomes in both were counted twice',
        'To keep the answer small',
        'Because the events are independent',
      ],
      answer: 'Outcomes in both were counted twice',
      teach: 'The subtraction is a correction to double counting, not a '
        + 'formula to memorise.',
      level: 5,
    },
  ],
})

/* ── permutations and combinations ──────────────────────────────────────── */

teach({
  topicId: 'permutations-e',
  source: 'WRITTEN',
  approved: true,

  brief: {
    idea:
      'A permutation is an arrangement, where order matters. '
      + 'A combination is a selection, where it does not. '
      + 'Ask one question: if I swap two of the chosen items, '
      + 'is it a different answer? '
      + 'If yes it is a permutation, if no it is a combination. '
      + '$^nC_r$ is $^nP_r$ divided by $r!$, '
      + 'because each selection was counted once for every ordering.',
    method: [
      'Ask whether swapping two chosen items changes the outcome.',
      'Order matters means $^nP_r$; order does not means $^nC_r$.',
      'Deal with any restriction first, then count the rest.',
    ],
  },

  idea:
    'Counting problems divide into two kinds. '
    + 'A permutation is an arrangement, and the order of the chosen items '
    + 'matters: '
    + '$$^nP_r = \\frac{n!}{(n-r)!}.$$ '
    + 'A combination is a selection, and the order does not matter: '
    + '$$^nC_r = \\frac{n!}{r!\\,(n-r)!}.$$ '
    + 'Here $n!$ means $n \\times (n-1) \\times \\dots \\times 1$, and '
    + '$0! = 1$ by definition. '
    + 'The two are related by '
    + '$^nC_r = \\frac{^nP_r}{r!}$, because every selection of $r$ items '
    + 'can be ordered in $r!$ ways, so the permutation count has counted '
    + 'each selection $r!$ times over. '
    + 'The number of arrangements of $n$ items of which some are alike is '
    + '$\\frac{n!}{p!\\,q!}$, where $p$ and $q$ are the sizes of the '
    + 'repeated groups.',

  tables: [{
    caption: 'Telling an arrangement from a selection by the words in the question',
    columns: ['Words in the question', 'Order matters?', 'Use'],
    rows: [
      ['Arrange, line up, seat in a row', 'Yes', '$^nP_r$'],
      ['Code, password, number plate', 'Yes', '$^nP_r$'],
      ['President, secretary, treasurer', 'Yes', '$^nP_r$'],
      ['Choose, select, a committee of', 'No', '$^nC_r$'],
      ['A team of five, a hand of cards', 'No', '$^nC_r$'],
      ['Shake hands, draw a line between', 'No', '$^nC_r$'],
    ],
    note: 'Named roles make order matter. '
      + 'A committee with no named posts does not.',
  }],

  figure: {
    alt: 'Three letters A, B and C. On the left they are shown in all six '
      + 'orders, ABC, ACB, BAC, BCA, CAB and CBA, under the heading '
      + 'arrangements, with the count six. On the right the same three '
      + 'letters appear once inside a single ring under the heading '
      + 'selection, with the count one, and an arrow between the two sides '
      + 'is labelled divide by three factorial, which is six.',
    svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" '
      + 'fill="none" stroke="currentColor" stroke-width="2">'
      + '<text x="30" y="34" font-size="17" fill="currentColor" '
      + 'stroke="none">Arrangements: order matters</text>'
      + '<text x="30" y="74" font-size="19" fill="currentColor" '
      + 'stroke="none">A B C</text>'
      + '<text x="30" y="108" font-size="19" fill="currentColor" '
      + 'stroke="none">A C B</text>'
      + '<text x="30" y="142" font-size="19" fill="currentColor" '
      + 'stroke="none">B A C</text>'
      + '<text x="30" y="176" font-size="19" fill="currentColor" '
      + 'stroke="none">B C A</text>'
      + '<text x="30" y="210" font-size="19" fill="currentColor" '
      + 'stroke="none">C A B</text>'
      + '<text x="30" y="244" font-size="19" fill="currentColor" '
      + 'stroke="none">C B A</text>'
      + '<text x="30" y="284" font-size="17" fill="#b4531a" '
      + 'stroke="none">six of them</text>'
      + '<line x1="170" y1="40" x2="170" y2="290" stroke-opacity="0.3"/>'
      + '<text x="400" y="34" font-size="17" fill="currentColor" '
      + 'stroke="none">Selection: order does not matter</text>'
      + '<ellipse cx="470" cy="150" rx="110" ry="54" stroke="#0f8a4d"/>'
      + '<text x="470" y="158" font-size="22" text-anchor="middle" '
      + 'fill="currentColor" stroke="none">A B C</text>'
      + '<text x="400" y="284" font-size="17" fill="#0f8a4d" '
      + 'stroke="none">just one of them</text>'
      + '<path d="M200 150 L340 150" stroke="#1d4ed8" '
      + 'stroke-dasharray="6 4"/>'
      + '<path d="M332 143 L344 150 L332 157" stroke="#1d4ed8"/>'
      + '<text x="270" y="134" font-size="15" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">divide by</text>'
      + '<text x="270" y="190" font-size="15" text-anchor="middle" '
      + 'fill="#1d4ed8" stroke="none">three factorial</text>'
      + '</svg>',
  },

  mechanism:
    'The entire topic rests on one question, and a learner who asks it '
    + 'every time will rarely be wrong: if I swap two of the items I have '
    + 'chosen, have I got a different answer? '
    + 'Choosing Ama, Kofi and Yaw for a committee is the same committee '
    + 'however you say the names, so order does not matter and it is a '
    + 'combination. '
    + 'Choosing Ama as president, Kofi as secretary and Yaw as treasurer is '
    + 'a different arrangement from Kofi as president, so order does matter '
    + 'and it is a permutation. '
    + 'The words that give it away are worth collecting, and the table '
    + 'above does that, but the swap test works even when the words are '
    + 'unfamiliar. '
    + 'The relationship between the two formulae is the thing worth '
    + 'understanding rather than memorising, because it explains the '
    + 'division. '
    + 'Suppose you pick 3 pupils from 10 and line them up. '
    + 'There are $^{10}P_3 = 720$ ways. '
    + 'But the same three pupils account for $3! = 6$ of those 720, one for '
    + 'each order they could stand in. '
    + 'So if the order is irrelevant, each genuine selection has been '
    + 'counted 6 times, and $\\frac{720}{6} = 120$ is the number of '
    + 'different groups. '
    + 'That is exactly $^{10}C_3$. '
    + 'The $r!$ in the combination formula is a correction for over '
    + 'counting, in the same way that subtracting the overlap in the union '
    + 'of two sets is a correction for double counting, and seeing the two '
    + 'as the same kind of fix makes both stick. '
    + 'Restrictions are where the harder marks are, and there is one rule: '
    + 'satisfy the restriction first, then count what is left freely. '
    + 'If two particular people must sit together, tie them into a single '
    + 'block, arrange the blocks, then multiply by 2 for the two ways they '
    + 'can sit inside their block. '
    + 'If a committee must have at least one girl, do not try to count the '
    + 'cases one by one. '
    + 'Count all committees and take away those with no girl, because the '
    + 'complement is almost always the shorter route when the phrase "at '
    + 'least" appears. '
    + 'Last, repeated letters. '
    + 'The word BOOK has $4!$ orderings of four distinct objects, but the '
    + 'two O symbols are not distinct, so swapping them gives nothing new '
    + 'and each real arrangement has been counted twice: '
    + '$\\frac{4!}{2!} = 12$. '
    + 'Again the pattern is the same, a count followed by a division for '
    + 'what was counted more than once.',

  recap:
    'You have listed outcomes and counted them, '
    + 'and you have used the idea that two choices made one after another '
    + 'multiply. '
    + 'This gives you formulae for when listing them all would take all '
    + 'day.',

  method: [
    'Ask: does swapping two chosen items give a different outcome?',
    'If yes, it is a permutation. If no, it is a combination.',
    'Write down $n$ and $r$ before reaching for a formula.',
    'Deal with any restriction first, before counting anything else.',
    'For items that must stay together, tie them into one block.',
    'For "at least", count everything and subtract the cases you do not want.',
    'For repeated items, divide by the factorial of each repeat.',
    'Check the size: a selection count is always smaller than the matching arrangement count.',
  ],

  worked: [
    {
      level: 3,
      ask: 'In how many ways can 3 prefects be chosen from 8 pupils for '
        + 'the posts of head, deputy and secretary?',
      steps: [
        { math: '\\text{Swap two: different posts, so order matters.}',
          why: 'Named posts always make it a permutation.' },
        { math: '^{8}P_{3} = \\frac{8!}{5!}' },
        { math: '= 8 \\times 7 \\times 6' },
        { math: '= 336' },
      ],
      answer: '$336$ ways.',
    },
    {
      level: 4,
      ask: 'A committee of 3 is chosen from the same 8 pupils, with no '
        + 'posts. How many committees are possible?',
      steps: [
        { math: '\\text{Swap two: the same committee, so order does not matter.}' },
        { math: '^{8}C_{3} = \\frac{8 \\times 7 \\times 6}{3!}',
          why: 'Each committee was counted $3! = 6$ times by the permutation count.' },
        { math: '= \\frac{336}{6}' },
        { math: '= 56' },
      ],
      answer: '$56$ committees. '
        + 'Six times fewer than the 336 above, which is the $3!$ orderings '
        + 'being removed.',
    },
    {
      level: 5,
      ask: 'How many different arrangements are there of the letters of '
        + 'the word ACCRA?',
      steps: [
        { math: '5\\ \\text{letters, so } 5! = 120',
          why: 'This is the count if all five were different.' },
        { math: 'A\\ \\text{appears twice},\\quad C\\ \\text{appears twice}' },
        { math: '\\frac{5!}{2!\\,2!}',
          why: 'Swapping the two A symbols changes nothing, and the same for the two C symbols, so each real arrangement was counted four times.' },
        { math: '= \\frac{120}{4} = 30' },
      ],
      answer: '$30$ different arrangements.',
    },
    {
      level: 6,
      ask: 'A school team of 5 is chosen from 6 boys and 4 girls. '
        + 'How many teams contain at least one girl?',
      steps: [
        { math: '^{10}C_{5} = 252', why: 'All possible teams, ignoring the restriction.' },
        { math: '^{6}C_{5} = 6', why: 'Teams with no girl at all: all five from the 6 boys.' },
        { math: '252 - 6 = 246',
          why: 'At least one means everything except none, which is shorter than counting one girl, two girls, three and four separately.' },
      ],
      answer: '$246$ teams. '
        + 'Counting the four cases one by one gives the same answer with '
        + 'four times the work and four times the risk.',
    },
  ],

  traps: [
    {
      mistake: 'Using $^nP_r$ for a committee with no named posts.',
      why: 'Swapping two members gives the same committee. '
        + 'Order does not matter, so divide by $r!$.',
    },
    {
      mistake: 'Counting "at least one" case by case.',
      why: 'It is longer and every case is a chance to slip. '
        + 'Count everything and subtract the none case.',
    },
    {
      mistake: 'Forgetting to divide by the repeats in a word.',
      why: 'Swapping two identical letters produces nothing new, '
        + 'so each arrangement was counted more than once.',
    },
    {
      mistake: 'Counting freely and applying the restriction afterwards.',
      why: 'Place the restricted items first, then fill the remaining '
        + 'places. '
        + 'The other order cannot be corrected at the end.',
    },
  ],

  extension:
    'The binomial coefficient in the expansion of $(a+b)^n$ is the same '
    + '$^nC_r$. '
    + 'That is not a coincidence: the term in $a^{n-r}b^{r}$ counts how '
    + 'many ways you can pick the $b$ from $r$ of the $n$ brackets, '
    + 'which is a selection with order ignored.',

  questions: [
    {
      id: 'pc-1',
      ask: 'Choosing a committee of 4 from 10 pupils, with no posts, uses:',
      kind: 'choice',
      options: ['A combination', 'A permutation', 'A factorial alone'],
      answer: 'A combination',
      teach: 'Swapping two members leaves the same committee, '
        + 'so order does not matter.',
      level: 3,
    },
    {
      id: 'pc-2',
      ask: 'The value of 5 factorial is:',
      kind: 'numeric',
      options: [],
      answer: '120',
      teach: 'Five times four times three times two times one.',
      level: 3,
    },
    {
      id: 'pc-3',
      ask: 'Why is nCr smaller than nPr?',
      kind: 'choice',
      options: [
        'Each selection was counted once for every ordering',
        'Fewer items are chosen',
        'The formula uses a smaller n',
      ],
      answer: 'Each selection was counted once for every ordering',
      teach: 'Dividing by r factorial removes the orderings, '
        + 'which is why the two formulae differ by exactly that factor.',
      level: 5,
    },
    {
      id: 'pc-4',
      ask: 'For an "at least one" question the quickest route is:',
      kind: 'choice',
      options: [
        'Count everything and subtract the none case',
        'Add the cases one at a time',
        'Use a permutation instead',
      ],
      answer: 'Count everything and subtract the none case',
      teach: 'The complement is one subtraction instead of several counts, '
        + 'and fewer steps means fewer slips.',
      level: 5,
    },
  ],
})
