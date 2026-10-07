/**
 * The front page.
 *
 * The hero is not a claim about the product, it is the product: one thing to
 * play, and six of them to get through. Every demonstration is a real
 * interaction rather than a picture of one, and each is drawn from what that
 * stage of school actually does: counting for a child who cannot yet read, a
 * missing number for primary, algebra for JHS, a triangle for SHS, a working
 * mix for TVET, a gradient for university.
 *
 * ── Why it looks like this ──────────────────────────────────────────────────
 *
 * The first version put the six behind a tab row that advanced itself every
 * 3.6 seconds, and the page carried three promise cards, a stage caption and
 * two copies of every call to action underneath. A client called it too busy
 * and said the game was the part he liked, which is the same verdict twice:
 * everything on the page was competing with the one thing on it worth doing.
 *
 * Two consequences, and they are the whole design:
 *
 *   - Nothing moves on its own. The rotation meant a visitor who started
 *     counting mangoes had the panel slide out from under them mid tap. A
 *     demonstration of a platform that waits until you understand should not
 *     take itself away after three seconds.
 *   - Finishing one offers the next. The six were always there and nobody saw
 *     more than two, because a tab row reads as navigation to be ignored
 *     rather than as a queue with five more in it. Dots and a `next` that
 *     lights up when you are right say the same thing and get played.
 *
 * ── What was given up ──────────────────────────────────────────────────────
 *
 * The tab row was also the only place the page said "creche to university".
 * Its labels now ride on the game itself, as the caption above each one, so
 * the range is still stated, once, where somebody is already looking. That is
 * weaker than six visible labels and it is the trade the simplicity cost.
 */

import { useState } from 'react'
import '../styles/nexaedu.css'
import type { Stage } from '../lib/education/learner'

const THREADS = ['var(--gold)', 'var(--green)', 'var(--red)', 'var(--sky)']

/**
 * The kente band, woven down the binding of the book.
 *
 * The band was two horizontal strips floating in the middle of the page, which
 * after the cut had nothing left around them to belong to: a striped bar under
 * a headline reads as a loading indicator. Down the fold between two pages it
 * is the stitching that holds the thing together, which is what a binding is,
 * and it is the one loud element on a page that is otherwise ink on cream.
 *
 * It weaves itself in once on load, thread after thread. That is the only
 * motion on the page that nobody asked for.
 */
function Bind({ count = 26 }: { count?: number }) {
  return (
    <div className="ne-bind" aria-hidden>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="ne-bind-thread" style={{
          ['--blk' as string]: THREADS[i % THREADS.length],
          ['--wait' as string]: `${i * 24}ms`,
        }} />
      ))}
    </div>
  )
}

/* ── shared bits ──────────────────────────────────────────────────────────── */

/**
 * How a game hands its progress row back to the page.
 *
 * A function rather than a value because only the game knows whether it has
 * been solved, and only the page knows what comes next. Passing `foot` down
 * and calling it with `done` keeps that in one place: no duplicated win
 * condition, no effect syncing a boolean upward, and no demonstration that can
 * drift out of step with the row underneath it.
 */
type DemoProps = { foot: (done: boolean) => React.ReactNode }

function Panel({ hint, children, verdict, tone, onReset, foot }: {
  hint: string
  children: React.ReactNode
  verdict: string
  tone?: 'win' | 'tip'
  onReset?: () => void
  foot?: React.ReactNode
}) {
  return (
    <div className="ne-work">
      {/* No "TRY IT NOW" eyebrow. A tracked out capital label above a thing
          that plainly invites a tap was telling the visitor what they could
          already see, and it was the loudest text in the panel. */}
      <div className="ne-work-body">{children}</div>
      <p className={`ne-verdict${tone === 'win' ? ' is-win' : tone === 'tip' ? ' is-tip' : ''}`}>
        {verdict || hint}
      </p>
      {/* Both controls that are not part of the exercise live together along
          the bottom of the page: start this one again on the left, go on to
          the next on the right. */}
      <div className="ne-foot">
        {onReset
          ? <button className="ne-work-reset" onClick={onReset}>Start again</button>
          : <span />}
        {foot}
      </div>
    </div>
  )
}

/* ── creche and KG: counting, before reading ──────────────────────────────── */

function CountDemo({ foot }: DemoProps) {
  const total = 6
  const [got, setGot] = useState<number[]>([])
  const done = got.length === total

  return (
    <Panel
      hint="Tap each mango to count them."
      verdict={done ? `Six mangoes. You counted them all.` : `Tap each mango to count them. ${got.length} so far.`}
      tone={done ? 'win' : undefined}
      onReset={() => setGot([])}
      foot={foot(done)}
    >
      <div className="ne-count">
        {Array.from({ length: total }, (_, i) => {
          const on = got.includes(i)
          return (
            <button key={i} className={`ne-fruit${on ? ' is-on' : ''}`}
              onClick={() => setGot(g => (g.includes(i) ? g : [...g, i]))}
              aria-label={`Mango ${i + 1}`}>
              <svg viewBox="0 0 40 40" aria-hidden>
                <ellipse cx="20" cy="23" rx="13" ry="15" />
                <path d="M20 8 q5 -5 9 -4" className="ne-stem" />
              </svg>
              {on && <span className="ne-count-num">{got.indexOf(i) + 1}</span>}
            </button>
          )
        })}
      </div>
    </Panel>
  )
}

/* ── primary: the missing number ──────────────────────────────────────────── */

function MissingDemo({ foot }: DemoProps) {
  const [v, setV] = useState(2)
  const right = v === 5
  return (
    <Panel
      hint="Make both sides the same."
      verdict={right ? 'Both sides are 12. That is the missing number.' : 'Make both sides the same.'}
      tone={right ? 'win' : undefined}
      onReset={() => setV(2)}
      foot={foot(right)}
    >
      <p className="ne-eq">7 + <span className={right ? 'ne-slot is-right' : 'ne-slot'}>{v}</span> = 12</p>
      <div className="ne-bars">
        <div className="ne-bar" style={{ width: `${(7 / 12) * 100}%`, background: 'var(--sky)' }}>7</div>
        <div className="ne-bar" style={{ width: `${(v / 12) * 100}%`, background: 'var(--gold)' }}>{v}</div>
      </div>
      <div className="ne-bars" style={{ marginTop: 6 }}>
        <div className="ne-bar" style={{ width: '100%', background: 'var(--green)' }}>12</div>
      </div>
      <div className="ne-ops">
        <button className="ne-op" onClick={() => setV(n => Math.max(0, n - 1))} disabled={v <= 0}>take 1</button>
        <button className="ne-op" onClick={() => setV(n => Math.min(12, n + 1))} disabled={v >= 12}>add 1</button>
      </div>
    </Panel>
  )
}

/* ── JHS: algebra on a balance ────────────────────────────────────────────── */

interface Side { x: number; c: number }
const L0: Side = { x: 3, c: 4 }
const R0: Side = { x: 0, c: 19 }
const weigh = (s: Side) => s.x * 5 + s.c
const say = (s: Side) => {
  const bits: string[] = []
  if (s.x) bits.push(s.x === 1 ? 'x' : `${s.x}x`)
  if (s.c || !bits.length) bits.push(String(s.c))
  return bits.join(' + ')
}

function BalanceDemo({ foot }: DemoProps) {
  const [left, setLeft] = useState<Side>(L0)
  const [right, setRight] = useState<Side>(R0)
  const [broke, setBroke] = useState(false)
  const solved = Math.abs(weigh(left) - weigh(right)) < 1e-9 && left.x === 1 && left.c === 0
  const tilt = Math.max(-12, Math.min(12, (weigh(left) - weigh(right)) * 0.55))
  const both = (f: (s: Side) => Side) => { setLeft(f); setRight(f) }

  return (
    <Panel
      hint="Take 4 from both sides, then divide both by 3."
      verdict={solved ? 'Level, and x stands alone. x = 5.'
        : broke ? 'It tipped. Change one side and it stops being the same equation.'
        : 'Take 4 from both sides, then divide both by 3. Keep it level.'}
      tone={solved ? 'win' : broke ? 'tip' : undefined}
      onReset={() => { setLeft(L0); setRight(R0); setBroke(false) }}
      foot={foot(solved)}
    >
      <svg viewBox="0 0 400 150" className="ne-scale" role="img"
        aria-label={`Balance showing ${say(left)} equals ${say(right)}`}>
        <g style={{
          transform: `rotate(${tilt}deg)`, transformOrigin: '200px 46px',
          transition: 'transform 560ms cubic-bezier(.2,.8,.3,1)',
        }}>
          <line x1="52" y1="46" x2="348" y2="46" className="ne-beam" />
          <line x1="52" y1="46" x2="52" y2="74" className="ne-string" />
          <line x1="348" y1="46" x2="348" y2="74" className="ne-string" />
          {([[52, left], [348, right]] as [number, Side][]).map(([cx, s]) => (
            <g key={cx}>
              <path d={`M ${cx - 50} 74 L ${cx + 50} 74 L ${cx + 36} 102 L ${cx - 36} 102 Z`} className="ne-pan" />
              <text x={cx} y={93} className="ne-pan-txt">{say(s)}</text>
            </g>
          ))}
        </g>
        <path d="M 200 46 L 178 132 L 222 132 Z" className="ne-stand" />
        <rect x="146" y="132" width="108" height="9" rx="4.5" className="ne-stand" />
      </svg>
      <p className="ne-eq">{say(left)} = {say(right)}</p>
      <div className="ne-ops">
        <button className="ne-op" onClick={() => both(s => ({ ...s, c: s.c - 4 }))} disabled={broke || solved}>take 4</button>
        <button className="ne-op" onClick={() => both(s => ({ x: s.x / 3, c: s.c / 3 }))}
          disabled={broke || solved || left.x % 3 !== 0}>÷ 3</button>
        <button className="ne-op ne-op-bad" onClick={() => { setLeft(s => ({ ...s, c: s.c - 4 })); setBroke(true) }}
          disabled={broke || solved}>left only</button>
      </div>
    </Panel>
  )
}

/* ── SHS: a triangle you can stretch ──────────────────────────────────────── */

function TriangleDemo({ foot }: DemoProps) {
  const [b, setB] = useState(4)
  const a = 3
  const h = Math.sqrt(a * a + b * b)
  const nice = Math.abs(h - Math.round(h)) < 1e-9
  const k = 26
  return (
    <Panel
      hint="Drag the base. The longest side follows."
      verdict={nice ? `A ${a}, ${b}, ${h} triangle. The squares match exactly.`
        : `${a}² + ${b}² = ${(a * a + b * b)}, so the longest side is √${a * a + b * b} ≈ ${h.toFixed(2)}.`}
      tone={nice ? 'win' : undefined}
      onReset={() => setB(4)}
      foot={foot(nice)}
    >
      <svg viewBox="0 0 400 160" className="ne-scale" role="img"
        aria-label={`Right angled triangle with sides ${a} and ${b}`}>
        <g transform="translate(70,132)">
          <path d={`M 0 0 L ${b * k} 0 L 0 ${-a * k} Z`} className="ne-tri" />
          <path d="M 0 -12 L 12 -12 L 12 0" className="ne-right-angle" />
          <text x={(b * k) / 2} y="22" className="ne-dim">{b}</text>
          <text x="-16" y={(-a * k) / 2} className="ne-dim">{a}</text>
          <text x={(b * k) / 2 + 12} y={(-a * k) / 2 - 6} className="ne-dim is-hyp">
            {nice ? h : h.toFixed(2)}
          </text>
        </g>
      </svg>
      <div className="ne-slider-row">
        <input className="ne-slider" type="range" min={1} max={9} step={1}
          value={b} onChange={e => setB(Number(e.target.value))} aria-label="Base length" />
      </div>
    </Panel>
  )
}

/* ── TVET: a mix that has to be right ─────────────────────────────────────── */

function MixDemo({ foot }: DemoProps) {
  const [sand, setSand] = useState(2)
  const right = sand === 4
  return (
    <Panel
      hint="Set the mix for a floor screed."
      verdict={right ? 'One part cement to four parts sand. That is the mix.'
        : `One part cement to ${sand} part${sand === 1 ? '' : 's'} sand. A floor screed wants 1 : 4.`}
      tone={right ? 'win' : undefined}
      onReset={() => setSand(2)}
      foot={foot(right)}
    >
      <div className="ne-mix">
        <span className="ne-mix-block is-cement">cement</span>
        {Array.from({ length: sand }, (_, i) => (
          <span key={i} className="ne-mix-block is-sand" />
        ))}
      </div>
      <p className="ne-eq">1 : {sand}</p>
      <div className="ne-slider-row">
        <input className="ne-slider" type="range" min={1} max={7} step={1}
          value={sand} onChange={e => setSand(Number(e.target.value))} aria-label="Parts of sand" />
      </div>
    </Panel>
  )
}

/* ── university: the gradient at a point ──────────────────────────────────── */

function TangentDemo({ foot }: DemoProps) {
  const [a, setA] = useState(-1.4)
  const flat = Math.abs(a) < 0.06
  // y = x^2 mapped into the panel, x from -3 to 3
  const px = (x: number) => 200 + x * 52
  const py = (y: number) => 138 - y * 14
  const curve = Array.from({ length: 61 }, (_, i) => {
    const x = -3 + (i * 6) / 60
    return `${i ? 'L' : 'M'} ${px(x).toFixed(1)} ${py(x * x).toFixed(1)}`
  }).join(' ')
  const m = 2 * a
  const tx1 = a - 1.5, tx2 = a + 1.5
  const ty = (x: number) => a * a + m * (x - a)

  return (
    <Panel
      hint="Slide the point. The tangent turns with it."
      verdict={flat ? 'At the bottom the gradient is 0. The curve is momentarily flat.'
        : `At x = ${a.toFixed(1)} the gradient is 2x, which is ${m.toFixed(1)}.`}
      tone={flat ? 'win' : undefined}
      onReset={() => setA(-1.4)}
      foot={foot(flat)}
    >
      <svg viewBox="0 0 400 160" className="ne-scale" role="img"
        aria-label={`Curve y equals x squared with a tangent at x equals ${a.toFixed(1)}`}>
        <line x1="30" y1="138" x2="370" y2="138" className="ne-axis" />
        <line x1="200" y1="14" x2="200" y2="150" className="ne-axis" />
        <path d={curve} className="ne-curve" />
        <line x1={px(tx1)} y1={py(ty(tx1))} x2={px(tx2)} y2={py(ty(tx2))} className="ne-tangent" />
        <circle cx={px(a)} cy={py(a * a)} r="6" className="ne-dot" />
      </svg>
      <p className="ne-eq">y = x²</p>
      <div className="ne-slider-row">
        <input className="ne-slider" type="range" min={-2.6} max={2.6} step={0.1}
          value={a} onChange={e => setA(Number(e.target.value))} aria-label="Point on the curve" />
      </div>
    </Panel>
  )
}

/* ── the six ──────────────────────────────────────────────────────────────── */

/**
 * In school order, youngest first.
 *
 * `label` is doing the job the deleted tab row used to do: it is the only
 * place the page says this platform runs from creche to university, so it
 * names the level rather than the game. `asks` names the game, because a
 * visitor part way through the queue wants to know what the next one is.
 */
const ALL = [
  { key: 'creche', tab: 'KG', label: 'Creche & KG', asks: 'Counting', demo: CountDemo },
  { key: 'primary', tab: 'Primary', label: 'Primary', asks: 'The missing number', demo: MissingDemo },
  { key: 'jhs', tab: 'JHS', label: 'JHS', asks: 'Solving for x', demo: BalanceDemo },
  { key: 'shs', tab: 'SHS', label: 'SHS', asks: 'Pythagoras', demo: TriangleDemo },
  { key: 'tvet', tab: 'TVET', label: 'TVET', asks: 'Mixing a screed', demo: MixDemo },
  { key: 'uni', tab: 'Uni', label: 'University', asks: 'Gradients', demo: TangentDemo },
] as const

/**
 * Levels written, working, and deliberately not shown on the front page yet.
 *
 * Held back rather than deleted. Both exercises work and are reached from
 * inside the platform; what they do not yet have is the depth of content
 * behind them that KG through SHS have, and a front page that advertises six
 * levels while two of them are thin is a promise the product cannot keep to
 * the first visitor who taps one.
 *
 * Taking a key out of this list is all that is needed to show it again.
 */
const HIDDEN: readonly string[] = ['tvet', 'uni']

const GAMES = ALL.filter(g => !HIDDEN.includes(g.key))

export default function Front({ onStart, onArrive }: {
  onStart: (stage: Stage) => void
  onArrive: () => void
}) {
  /* Starts at the youngest and only moves when somebody moves it. The first
     version advanced itself every 3.6 seconds, which took the exercise away
     from anybody halfway through one. */
  const [at, setAt] = useState(() => {
    /* ?at=2 opens straight on the third exercise, in development only.
 
       Checking a layout at phone width means driving a headless browser, and a
       headless browser cannot tap a tab. Without this the only exercise that
       could ever be photographed on a phone was the first one, and the widest
       of them, the balance, was the one that needed looking at. */
    if (!import.meta.env.DEV) return 0
    const asked = Number(new URLSearchParams(window.location.search).get('at'))
    return Number.isInteger(asked) && asked >= 0 ? asked : 0
  })
  /* Which levels have been finished, so a tab can show it. A set rather than a
     count because the tabs let you jump about, and finishing SHS first should
     colour SHS rather than KG. */
  const [done, setDone] = useState<string[]>([])

  const current = GAMES[at % GAMES.length]
  const Demo = current.demo
  const next = GAMES[(at + 1) % GAMES.length]

  /* The exercise reports whether it is solved by calling this; only the
     exercise knows, and only the page can act on it. Recording it here is what
     fills the tab in. */
  const foot = (solved: boolean) => {
    if (solved && !done.includes(current.key)) {
      /* Queued out of the render pass, because this runs while the exercise is
         rendering and setting state during a render of a child is the one way
         React will loop for ever. */
      queueMicrotask(() => setDone(d => (d.includes(current.key) ? d : [...d, current.key])))
    }
    return (
      <button className={`ne-next${solved ? ' is-ready' : ''}`}
        onClick={() => setAt(i => (i + 1) % GAMES.length)}>
        {solved ? 'Next' : next.asks}
      </button>
    )
  }

  return (
    <div className="ne ne-front">
      <div className="ne-desk">
        <header className="ne-top">
          <span className="ne-wordmark">NEXA<i>•</i>EDU</span>
          <button className="ne-quiet-link" style={{ marginLeft: 'auto' }} onClick={onArrive}>
            I already have an ID
          </button>
        </header>

        {/* An exercise book, opened. Notes on the left page, the working on the
            right, kente woven down the binding, and a tab for each level out
            of the fore edge.
 
            The tabs are the stage switcher that was cut for being busy, put
            back as part of an object rather than as a row of pills under the
            headline. As a row they read as navigation and were ignored; as
            tabs on the edge of a book they read as somewhere to go. They also
            carry the progress, so the woven band in the footer could go: one
            thing saying where you are is enough. */}
        <div className="ne-spread">
          <div className="ne-leaf is-notes">
            {/* Set narrow rather than merely large. Bricolage Grotesque has a
                width axis that nothing in this project had ever used. The gold
                highlighter behind one word is gone: a single accented word in
                a headline is the commonest tell there is. */}
            <h1 className="ne-slab">Learn it until you actually know it.</h1>
            <p className="ne-lede">
              One platform from creche to university. It watches how you work,
              notices what keeps going wrong, and changes what it gives you next.
            </p>

            <div className="ne-task">
              <span className="ne-task-level">{current.label}</span>
              <span className="ne-task-asks">{current.asks}</span>
            </div>

            <button className="ne-btn ne-btn-go" onClick={() => onStart(current.key as Stage)}>
              Start learning
            </button>
            <p className="ne-foot-note">
              Built for Ghanaian classrooms. Works on a shared phone.
            </p>
          </div>

          <Bind />

          {/* Keyed on the game so each one mounts fresh and arrives unsolved
              rather than carrying the last one's state. */}
          <div key={current.key} className="ne-leaf is-work">
            <Demo foot={foot} />
          </div>

          <nav className="ne-tabs" aria-label="Choose your level">
            {GAMES.map((g, i) => (
              <button key={g.key}
                className={`ne-tab${i === at % GAMES.length ? ' is-on' : ''}${done.includes(g.key) ? ' is-done' : ''}`}
                style={{ ['--blk' as string]: THREADS[i % THREADS.length] }}
                aria-current={i === at % GAMES.length ? 'true' : undefined}
                onClick={() => setAt(i)}>
                {g.tab}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
