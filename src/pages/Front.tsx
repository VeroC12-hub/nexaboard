/**
 * The front page.
 *
 * The hero is not a claim about the product, it is the product. And because
 * this platform runs from creche to university, one demonstration would have
 * quietly told five of the six audiences that it was not for them. So the
 * visitor picks their level and the demonstration changes to match.
 *
 * That choice is the argument. The whole promise is that the platform adapts
 * to who is using it, and here it does exactly that before anyone has signed
 * up for anything, in the first few seconds, with no explanation needed.
 *
 * Every demonstration is a real interaction rather than a picture of one, and
 * each is drawn from what that stage of school actually does: counting for a
 * child who cannot yet read, a missing number for primary, algebra for JHS, a
 * triangle for SHS, a working mix for TVET, a gradient for university.
 */

import { useEffect, useRef, useState } from 'react'
import '../styles/nexaedu.css'
import type { Stage } from '../lib/education/learner'

const THREADS = ['var(--gold)', 'var(--green)', 'var(--red)', 'var(--sky)']

function Weave({ count = 28, tall = false }: { count?: number; tall?: boolean }) {
  return (
    <div className={`ne-weave${tall ? ' is-tall' : ''}`} aria-hidden>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="ne-weave-block" style={{
          ['--blk' as string]: THREADS[i % THREADS.length],
          ['--wait' as string]: `${i * 45}ms`,
        }} />
      ))}
    </div>
  )
}

/* ── shared bits ──────────────────────────────────────────────────────────── */

function Panel({ hint, children, verdict, tone, onReset }: {
  hint: string
  children: React.ReactNode
  verdict: string
  tone?: 'win' | 'tip'
  onReset?: () => void
}) {
  return (
    <div className="ne-live">
      <div className="ne-live-head">
        <span className="ne-mono">Try it now</span>
        {onReset && (
          <button className="ne-mono" onClick={onReset}
            style={{ background: 'none', border: 0, cursor: 'pointer', color: 'inherit', textDecoration: 'underline' }}>
            Reset
          </button>
        )}
      </div>
      {children}
      <p className={`ne-verdict${tone === 'win' ? ' is-win' : tone === 'tip' ? ' is-tip' : ''}`}>
        {verdict || hint}
      </p>
    </div>
  )
}

/* ── creche and KG: counting, before reading ──────────────────────────────── */

function CountDemo() {
  const total = 6
  const [got, setGot] = useState<number[]>([])
  const done = got.length === total

  return (
    <Panel
      hint="Tap each mango to count them."
      verdict={done ? `Six mangoes. You counted them all.` : `Tap each mango to count them. ${got.length} so far.`}
      tone={done ? 'win' : undefined}
      onReset={() => setGot([])}
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

function MissingDemo() {
  const [v, setV] = useState(2)
  const right = v === 5
  return (
    <Panel
      hint="Make both sides the same."
      verdict={right ? 'Both sides are 12. That is the missing number.' : 'Make both sides the same.'}
      tone={right ? 'win' : undefined}
      onReset={() => setV(2)}
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

function BalanceDemo() {
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

function TriangleDemo() {
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

function MixDemo() {
  const [sand, setSand] = useState(2)
  const right = sand === 4
  return (
    <Panel
      hint="Set the mix for a floor screed."
      verdict={right ? 'One part cement to four parts sand. That is the mix.'
        : `One part cement to ${sand} part${sand === 1 ? '' : 's'} sand. A floor screed wants 1 : 4.`}
      tone={right ? 'win' : undefined}
      onReset={() => setSand(2)}
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

function TangentDemo() {
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

/* ── the levels ───────────────────────────────────────────────────────────── */

const STAGES = [
  { key: 'creche', label: 'Creche & KG', line: 'Counting, shapes and first words, before reading starts.', demo: CountDemo },
  { key: 'primary', label: 'Primary', line: 'Number, reading and the habits that everything later rests on.', demo: MissingDemo },
  { key: 'jhs', label: 'JHS', line: 'The core subjects, worked properly, all the way to BECE.', demo: BalanceDemo },
  { key: 'shs', label: 'SHS', line: 'Electives taken seriously, with WASSCE in view.', demo: TriangleDemo },
  { key: 'tvet', label: 'TVET', line: 'Competence you can show, judged on the work itself.', demo: MixDemo },
  { key: 'uni', label: 'University', line: 'Course by course, at the depth a degree actually asks for.', demo: TangentDemo },
] as const

/** How long each stage holds before the page moves itself on. */
const HOLD_MS = 3600

export default function Front({ onStart, onArrive }: {
  onStart: (stage: Stage) => void
  onArrive: () => void
}) {
  // Starts at the youngest and walks up, so a visitor who does nothing at all
  // still sees the whole range. Most people will not click to find out what a
  // product covers, and a page that needs to be operated before it explains
  // itself has already lost them.
  const [stage, setStage] = useState(0)
  // The moment anyone touches it, the page stops moving and they are driving.
  // Something that keeps sliding out from under your hand is worse than
  // something static.
  const [taken, setTaken] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    if (taken) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    timer.current = window.setInterval(
      () => setStage(i => (i + 1) % STAGES.length), HOLD_MS)
    return () => { if (timer.current) window.clearInterval(timer.current) }
  }, [taken])

  const takeOver = (i?: number) => {
    setTaken(true)
    if (typeof i === 'number') setStage(i)
  }

  const current = STAGES[stage]
  const Demo = current.demo

  return (
    <div className="ne">
      <div className="ne-shell">
        <header className="ne-top">
          <span className="ne-wordmark">NEXA<i>•</i>EDU</span>
          <span className="ne-mono" style={{ color: 'var(--ink-3)' }}>Ghana</span>
          <button className="ne-quiet-link" style={{ marginLeft: 'auto' }} onClick={onArrive}>
            I already have an ID
          </button>
          <button className="ne-btn ne-btn-quiet" style={{ padding: '10px 22px', fontSize: 15 }}
            onClick={() => onStart(current.key as Stage)}>
            Start learning
          </button>
        </header>

        <div className="ne-rise ne-rise-1"><Weave /></div>

        <section className="ne-hero">
          <div>
            <h1 className="ne-display ne-h1 ne-rise ne-rise-1">
              Learn it until<br />you <span className="ne-mark-gold">actually</span><br />know it.
            </h1>
            <p className="ne-lede ne-rise ne-rise-2">
              One platform from creche to university. It watches how you work,
              notices what keeps going wrong, and changes what it gives you next.
            </p>

            {/* Choosing a stage changes the demonstration, which is the whole
                promise of the platform performed rather than described. */}
            <div className="ne-stages ne-rise ne-rise-2" role="tablist" aria-label="Choose your stage">
              {STAGES.map((s, i) => (
                <button key={s.key} role="tab" aria-selected={i === stage}
                  className={`ne-stage${i === stage ? ' is-on' : ''}`}
                  onClick={() => takeOver(i)}>
                  {s.label}
                  {i === stage && !taken && (
                    <span key={stage} className="ne-stage-hold"
                      style={{ animationDuration: `${HOLD_MS}ms` }} />
                  )}
                </button>
              ))}
            </div>
            <p className="ne-stage-line ne-rise ne-rise-3">{current.line}</p>

            <div className="ne-cta-row ne-rise ne-rise-3">
              <button className="ne-btn ne-btn-go" onClick={() => onStart(current.key as Stage)}>Start learning</button>
              <span className="ne-fineprint">Free. No sign-up. Works offline.</span>
              <button className="ne-quiet-link" onClick={onArrive}>
                Already have an ID?
              </button>
            </div>
          </div>

          {/* Keyed on the stage so each demonstration mounts fresh and plays
              its own entrance rather than morphing out of the last one. */}
          <div key={current.key} className="ne-rise ne-rise-2"
            onPointerDown={() => takeOver()}>
            <Demo />
          </div>
        </section>

        <div className="ne-rise ne-rise-4"><Weave tall /></div>

        <section className="ne-three">
          {[
            { c: 'var(--red)', n: '01', h: 'It notices',
              p: 'Every answer is remembered. Get something wrong twice and it stops moving you on, because the syllabus order does not care that you are stuck.' },
            { c: 'var(--green)', n: '02', h: 'It explains',
              p: 'Not the answer again, louder. It names the thinking that led you to the wrong answer, then teaches the method that works on the next question too.' },
            { c: 'var(--sky)', n: '03', h: 'It comes back',
              p: 'What you secured last month gets checked before it is lost. Cheap to check, expensive to relearn.' },
          ].map((x, i) => (
            <article key={x.n} className={`ne-promise ne-rise ne-rise-${i + 2}`}>
              <span className="ne-chip" style={{ background: x.c }}>{x.n}</span>
              <h3 className="ne-display">{x.h}</h3>
              <p>{x.p}</p>
            </article>
          ))}
        </section>

        <footer style={{ padding: '30px 0 60px', color: 'var(--ink-3)', fontSize: 15 }}>
          Built for Ghanaian classrooms. Works on a shared phone, on a weak connection.
        </footer>
      </div>
    </div>
  )
}
