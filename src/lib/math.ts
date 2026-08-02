import katex from 'katex'

// ── KaTeX rendering ───────────────────────────────────────────────────────────
// Fonts and CSS ship with the katex package (imported in index.css), so equations
// render offline with no CDN.

export interface RenderResult {
  html: string
  error: string | null
}

/**
 * Render LaTeX to HTML. Never throws — a malformed equation comes back with an
 * `error` message so the caller can show the raw source instead of blowing up
 * the whole editor.
 */
// Zero-width and non-breaking characters that copy along with chat text.
const INVISIBLE = new RegExp('[\\u200B-\\u200D\\uFEFF\\u2060]', 'g')
const NBSP = new RegExp('\\u00A0', 'g')

const SUBSCRIPTS = '₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎'
const SUPERSCRIPTS = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾'
const SCRIPT_VALUES = '0123456789+-=()'

/**
 * Clean up maths pasted from somewhere else. Text copied out of a chat or a PDF
 * arrives full of characters KaTeX cannot read: real subscript glyphs, a minus
 * sign that is not a hyphen, times and divide signs. Convert them rather than
 * making the teacher retype the whole thing.
 */
export function normaliseMathPaste(text: string): string {
  let out = ''
  for (const ch of text) {
    const sub = SUBSCRIPTS.indexOf(ch)
    if (sub !== -1) { out += `_${SCRIPT_VALUES[sub]}`; continue }
    const sup = SUPERSCRIPTS.indexOf(ch)
    if (sup !== -1) { out += `^${SCRIPT_VALUES[sup]}`; continue }
    out += ch
  }
  return out
    // Chat and PDF copies are littered with invisible characters. KaTeX has no
    // glyph for them and complains, so they go first.
    .replace(INVISIBLE, '')
    .replace(NBSP, ' ')
    // A chat often breaks a subscript onto its own line: "A" then "1".
    // Pull a lone digit or index back onto the line above.
    .replace(/\n[ \t]*([0-9]{1,2})[ \t]*(?=\n|$)/g, '_$1')
    .replace(/−/g, '-')       // real minus sign
    .replace(/[×]/g, '\\times')
    .replace(/[÷]/g, '\\div')
    .replace(/±/g, '\\pm')
    .replace(/≈/g, '\\approx')
    .replace(/≠/g, '\\neq')
    .replace(/≤/g, '\\leq')
    .replace(/≥/g, '\\geq')
    .replace(/√/g, '\\sqrt')
    .replace(/π/g, '\\pi')
    .replace(/∑/g, '\\sum')
    .replace(/∫/g, '\\int')
    .replace(/∞/g, '\\infty')
    .replace(/°/g, '^\\circ')
    // Thousands separators would otherwise break the parse: 72,000 -> 72000
    .replace(/(\d),(\d{3})\b/g, '$1$2')
    // Collapse the blank lines a chat paste leaves behind
    .replace(/\n{2,}/g, '\n')
    .split('\n').map(line => line.trim()).filter(Boolean)
    // A wrapped equation continues on the next line. Anything starting with an
    // operator belongs to the line above, not to a new line of working.
    .reduce<string[]>((lines, line) => {
      if (lines.length && /^[+\-*/=×÷]/.test(line)) lines[lines.length - 1] += ` ${line}`
      else lines.push(line)
      return lines
    }, [])
    .join('\n')
}

/**
 * Several lines become one aligned block, so a whole piece of working can go up
 * at once instead of one equation at a time. Lines are lined up on their `=`.
 */
function buildAligned(source: string): string {
  const lines = source.split('\n').map(l => l.trim()).filter(Boolean)
  if (lines.length < 2) return source
  const rows = lines.map(line =>
    line.includes('&') ? line : line.replace('=', '&='),
  )
  return `\\begin{aligned}${rows.join(' \\\\ ')}\\end{aligned}`
}

export function renderMath(latex: string, displayMode = false): RenderResult {
  const trimmed = latex.trim()
  if (!trimmed) return { html: '', error: null }
  // Multi-line input is laid out as an aligned block rather than rejected.
  const source = trimmed.includes('\n') ? buildAligned(trimmed) : trimmed
  try {
    const html = katex.renderToString(source, {
      displayMode,
      throwOnError: true,
      strict: false,
      trust: false,
      output: 'htmlAndMathml',
    })
    return { html, error: null }
  } catch (err) {
    const raw = err instanceof Error ? err.message : 'Invalid equation'
    return { html: '', error: raw.replace(/^KaTeX parse error:\s*/, '') }
  }
}

/** Payload for the `math-edit` window event that opens the equation editor. */
export interface MathEditDetail {
  latex: string
  display: boolean
  apply: (latex: string, display: boolean) => void
  remove: () => void
}

// ── Symbol palette ────────────────────────────────────────────────────────────

export interface MathItem {
  /** What gets inserted into the editor. `{}` pairs become cursor stops. */
  latex: string
  /** What the button shows, if different from what gets inserted. */
  preview?: string
  title: string
}

export interface MathGroup {
  name: string
  items: MathItem[]
}

export const MATH_GROUPS: MathGroup[] = [
  {
    name: 'Basic',
    items: [
      { latex: '\\frac{}{}', preview: '\\frac{a}{b}', title: 'Fraction' },
      { latex: '^{}', preview: 'x^{n}', title: 'Power / superscript' },
      { latex: '_{}', preview: 'x_{n}', title: 'Subscript' },
      { latex: '^{2}', preview: 'x^{2}', title: 'Squared' },
      { latex: '^{3}', preview: 'x^{3}', title: 'Cubed' },
      { latex: '\\sqrt{}', preview: '\\sqrt{x}', title: 'Square root' },
      { latex: '\\sqrt[]{}', preview: '\\sqrt[n]{x}', title: 'Nth root' },
      { latex: '\\times', title: 'Multiply' },
      { latex: '\\div', title: 'Divide' },
      { latex: '\\cdot', title: 'Dot product' },
      { latex: '\\pm', title: 'Plus or minus' },
      { latex: '\\mp', title: 'Minus or plus' },
      { latex: '=', title: 'Equals' },
      { latex: '\\neq', title: 'Not equal' },
      { latex: '\\approx', title: 'Approximately' },
      { latex: '\\equiv', title: 'Identical to' },
      { latex: '<', title: 'Less than' },
      { latex: '>', title: 'Greater than' },
      { latex: '\\leq', title: 'Less than or equal' },
      { latex: '\\geq', title: 'Greater than or equal' },
      { latex: '\\propto', title: 'Proportional to' },
      { latex: '\\infty', title: 'Infinity' },
      { latex: '\\%', preview: '\\%', title: 'Percent' },
      { latex: '^{\\circ}', preview: '90^{\\circ}', title: 'Degrees' },
    ],
  },
  {
    name: 'Greek',
    items: [
      { latex: '\\alpha', title: 'alpha' },
      { latex: '\\beta', title: 'beta' },
      { latex: '\\gamma', title: 'gamma' },
      { latex: '\\delta', title: 'delta' },
      { latex: '\\epsilon', title: 'epsilon' },
      { latex: '\\varepsilon', title: 'varepsilon' },
      { latex: '\\zeta', title: 'zeta' },
      { latex: '\\eta', title: 'eta' },
      { latex: '\\theta', title: 'theta' },
      { latex: '\\iota', title: 'iota' },
      { latex: '\\kappa', title: 'kappa' },
      { latex: '\\lambda', title: 'lambda' },
      { latex: '\\mu', title: 'mu' },
      { latex: '\\nu', title: 'nu' },
      { latex: '\\xi', title: 'xi' },
      { latex: '\\pi', title: 'pi' },
      { latex: '\\rho', title: 'rho' },
      { latex: '\\sigma', title: 'sigma' },
      { latex: '\\tau', title: 'tau' },
      { latex: '\\upsilon', title: 'upsilon' },
      { latex: '\\phi', title: 'phi' },
      { latex: '\\varphi', title: 'varphi' },
      { latex: '\\chi', title: 'chi' },
      { latex: '\\psi', title: 'psi' },
      { latex: '\\omega', title: 'omega' },
      { latex: '\\Gamma', title: 'Gamma' },
      { latex: '\\Delta', title: 'Delta' },
      { latex: '\\Theta', title: 'Theta' },
      { latex: '\\Lambda', title: 'Lambda' },
      { latex: '\\Xi', title: 'Xi' },
      { latex: '\\Pi', title: 'Pi' },
      { latex: '\\Sigma', title: 'Sigma' },
      { latex: '\\Phi', title: 'Phi' },
      { latex: '\\Psi', title: 'Psi' },
      { latex: '\\Omega', title: 'Omega' },
    ],
  },
  {
    name: 'Calculus',
    items: [
      { latex: '\\sum_{}^{}', preview: '\\sum_{i=1}^{n}', title: 'Summation' },
      { latex: '\\prod_{}^{}', preview: '\\prod_{i=1}^{n}', title: 'Product' },
      { latex: '\\int_{}^{}', preview: '\\int_{a}^{b}', title: 'Definite integral' },
      { latex: '\\int', title: 'Integral' },
      { latex: '\\iint', title: 'Double integral' },
      { latex: '\\oint', title: 'Contour integral' },
      { latex: '\\lim_{ \\to }', preview: '\\lim_{x \\to 0}', title: 'Limit' },
      { latex: '\\frac{d}{dx}', preview: '\\frac{d}{dx}', title: 'Derivative' },
      { latex: '\\frac{d^{2}}{dx^{2}}', preview: '\\frac{d^2}{dx^2}', title: 'Second derivative' },
      { latex: '\\frac{\\partial}{\\partial x}', preview: '\\frac{\\partial}{\\partial x}', title: 'Partial derivative' },
      { latex: '\\partial', title: 'Partial' },
      { latex: '\\nabla', title: 'Nabla / del' },
      { latex: '\\Delta', title: 'Change in' },
      { latex: '\\to', title: 'Tends to' },
      { latex: '\\dot{}', preview: '\\dot{x}', title: 'Time derivative' },
      { latex: '\\ddot{}', preview: '\\ddot{x}', title: 'Second time derivative' },
    ],
  },
  {
    name: 'Functions',
    items: [
      { latex: '\\sin', title: 'sine' },
      { latex: '\\cos', title: 'cosine' },
      { latex: '\\tan', title: 'tangent' },
      { latex: '\\csc', title: 'cosecant' },
      { latex: '\\sec', title: 'secant' },
      { latex: '\\cot', title: 'cotangent' },
      { latex: '\\arcsin', title: 'arcsine' },
      { latex: '\\arccos', title: 'arccosine' },
      { latex: '\\arctan', title: 'arctangent' },
      { latex: '\\sinh', title: 'hyperbolic sine' },
      { latex: '\\cosh', title: 'hyperbolic cosine' },
      { latex: '\\tanh', title: 'hyperbolic tangent' },
      { latex: '\\log', title: 'log' },
      { latex: '\\log_{}', preview: '\\log_{10}', title: 'log to a base' },
      { latex: '\\ln', title: 'natural log' },
      { latex: '\\exp', title: 'exponential' },
      { latex: '\\min', title: 'minimum' },
      { latex: '\\max', title: 'maximum' },
      { latex: '\\gcd', title: 'greatest common divisor' },
      { latex: '\\bmod', preview: 'a \\bmod b', title: 'modulo' },
      { latex: 'f(x)', title: 'function of x' },
      { latex: '\\left| \\right|', preview: '|x|', title: 'Absolute value' },
    ],
  },
  {
    name: 'Sets & Logic',
    items: [
      { latex: '\\in', title: 'element of' },
      { latex: '\\notin', title: 'not an element of' },
      { latex: '\\subset', title: 'subset of' },
      { latex: '\\subseteq', title: 'subset or equal' },
      { latex: '\\supset', title: 'superset of' },
      { latex: '\\cup', title: 'union' },
      { latex: '\\cap', title: 'intersection' },
      { latex: '\\setminus', title: 'set difference' },
      { latex: '\\emptyset', title: 'empty set' },
      { latex: '\\mathbb{N}', title: 'natural numbers' },
      { latex: '\\mathbb{Z}', title: 'integers' },
      { latex: '\\mathbb{Q}', title: 'rationals' },
      { latex: '\\mathbb{R}', title: 'real numbers' },
      { latex: '\\mathbb{C}', title: 'complex numbers' },
      { latex: '\\forall', title: 'for all' },
      { latex: '\\exists', title: 'there exists' },
      { latex: '\\nexists', title: 'there does not exist' },
      { latex: '\\neg', title: 'not' },
      { latex: '\\land', title: 'and' },
      { latex: '\\lor', title: 'or' },
      { latex: '\\implies', title: 'implies' },
      { latex: '\\iff', title: 'if and only if' },
      { latex: '\\therefore', title: 'therefore' },
      { latex: '\\because', title: 'because' },
    ],
  },
  {
    name: 'Geometry',
    items: [
      { latex: '\\angle', title: 'angle' },
      { latex: '\\measuredangle', title: 'measured angle' },
      { latex: '\\triangle', title: 'triangle' },
      { latex: '\\square', title: 'square' },
      { latex: '\\perp', title: 'perpendicular to' },
      { latex: '\\parallel', title: 'parallel to' },
      { latex: '\\cong', title: 'congruent to' },
      { latex: '\\sim', title: 'similar to' },
      { latex: '\\overline{}', preview: '\\overline{AB}', title: 'Line segment' },
      { latex: '\\vec{}', preview: '\\vec{v}', title: 'Vector' },
      { latex: '\\overrightarrow{}', preview: '\\overrightarrow{AB}', title: 'Ray / vector AB' },
      { latex: '\\hat{}', preview: '\\hat{n}', title: 'Unit vector / hat' },
      { latex: '\\bar{}', preview: '\\bar{x}', title: 'Mean / bar' },
      { latex: '\\rightarrow', title: 'right arrow' },
      { latex: '\\leftarrow', title: 'left arrow' },
      { latex: '\\leftrightarrow', title: 'left-right arrow' },
      { latex: '\\mapsto', title: 'maps to' },
      { latex: '\\pi r^{2}', preview: '\\pi r^2', title: 'Area of a circle' },
      { latex: '\\ldots', title: 'ellipsis' },
      { latex: '\\cdots', title: 'centred ellipsis' },
    ],
  },
  {
    name: 'Layout',
    items: [
      {
        latex: '\\begin{pmatrix} & \\\\ & \\end{pmatrix}',
        preview: '\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}',
        title: '2×2 matrix',
      },
      {
        latex: '\\begin{pmatrix} & & \\\\ & & \\\\ & & \\end{pmatrix}',
        preview: '\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}',
        title: '3×3 matrix',
      },
      {
        latex: '\\begin{vmatrix} & \\\\ & \\end{vmatrix}',
        preview: '\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}',
        title: 'Determinant',
      },
      {
        latex: '\\begin{bmatrix} \\\\ \\end{bmatrix}',
        preview: '\\begin{bmatrix} x \\\\ y \\end{bmatrix}',
        title: 'Column vector',
      },
      {
        latex: '\\begin{cases} & \\text{if } \\\\ & \\text{if } \\end{cases}',
        preview: '\\begin{cases} 1 & x > 0 \\\\ 0 & x \\le 0 \\end{cases}',
        title: 'Piecewise / cases',
      },
      {
        latex: '\\binom{}{}',
        preview: '\\binom{n}{k}',
        title: 'Binomial coefficient',
      },
      { latex: '\\left( \\right)', preview: '\\left( x \\right)', title: 'Auto-sized brackets' },
      { latex: '\\left[ \\right]', preview: '\\left[ x \\right]', title: 'Auto-sized square brackets' },
      { latex: '\\left\\{ \\right\\}', preview: '\\left\\{ x \\right\\}', title: 'Auto-sized braces' },
      { latex: '\\text{}', preview: '\\text{words}', title: 'Plain text inside an equation' },
      { latex: '\\, ', preview: 'a \\, b', title: 'Small space' },
      { latex: '\\quad ', preview: 'a \\quad b', title: 'Wide space' },
    ],
  },
]

/** Ready-made equations teachers reach for constantly. */
export const MATH_TEMPLATES: MathItem[] = [
  { latex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', title: 'Quadratic formula' },
  { latex: 'a^2 + b^2 = c^2', title: 'Pythagoras' },
  { latex: 'y = mx + c', title: 'Straight line' },
  { latex: '\\frac{a}{b} = \\frac{c}{d}', title: 'Proportion' },
  { latex: '\\sum_{i=1}^{n} x_i', title: 'Sum of a series' },
  { latex: '\\int_{a}^{b} f(x)\\,dx', title: 'Definite integral' },
  { latex: '\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1', title: 'Standard limit' },
  { latex: '\\frac{d}{dx}\\left( x^n \\right) = n x^{n-1}', title: 'Power rule' },
  { latex: '\\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i', title: 'Mean' },
  { latex: 'P(A \\cap B) = P(A)\\,P(B)', title: 'Independent events' },
  { latex: 'E = mc^2', title: 'Mass–energy equivalence' },
  { latex: 'F = ma', title: "Newton's second law" },
]
