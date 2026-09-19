import { useEffect, useState, type ReactNode } from 'react'
import {
  practiceForObjective, submitAnswer,
  type PracticeQuestion, type Marked,
} from '../../lib/education/practice'

/**
 * Rendering for authored teaching content.
 *
 * Lesson bodies are written as prose with paragraph breaks and **bold** terms,
 * because that is how a teacher writes an explanation. This turns that into
 * readable typography rather than a wall of text in a database field.
 *
 * The diagrams are drawn here rather than loaded as images: they are part of
 * the explanation, they scale to any screen, and they carry text alternatives
 * so a learner using a screen reader is taught the same thing.
 */

/** Splits on blank lines and renders **bold** runs. Deliberately minimal. */
export function Prose({ text }: { text: string }) {
  return (
    <>
      {text.split(/\n\n+/).map((para, i) => (
        <p key={i} className="nb-prose">
          {para.split(/(\*\*[^*]+\*\*)/g).map((bit, j) =>
            bit.startsWith('**') && bit.endsWith('**')
              ? <strong key={j}>{bit.slice(2, -2)}</strong>
              : <span key={j}>{bit}</span>,
          )}
        </p>
      ))}
    </>
  )
}

/* --------------------------------------------------------------- diagrams -- */

export const LABEL = { fontSize: 11, fill: 'var(--ink-2)', fontWeight: 600 } as const
export const LEAD = { stroke: 'var(--faint)', strokeWidth: 1 } as const

export function Frame({ title, desc, children }: { title: string; desc: string; children: ReactNode }) {
  return (
    <figure className="nb-figure">
      <svg viewBox="0 0 420 260" role="img" aria-label={desc} style={{ width: '100%', height: 'auto' }}>
        <title>{title}</title>
        {children}
      </svg>
      <figcaption>{title}</figcaption>
    </figure>
  )
}

/** An animal cell, labelled with the parts taught in the lesson. */
export function AnimalCell() {
  return (
    <Frame
      title="An animal cell"
      desc="A rounded animal cell showing the cell membrane around the outside, cytoplasm filling it, a round nucleus, several mitochondria and small ribosomes."
    >
      <ellipse cx="185" cy="130" rx="120" ry="95" fill="#eaf7e3" stroke="var(--brand)" strokeWidth="2.5" />
      <ellipse cx="165" cy="120" rx="34" ry="30" fill="#c9e9b8" stroke="var(--brand-700)" strokeWidth="2" />
      <circle cx="165" cy="120" r="9" fill="var(--brand-700)" opacity=".45" />
      <ellipse cx="235" cy="165" rx="26" ry="13" fill="#fff" stroke="var(--ink-2)" strokeWidth="1.6" transform="rotate(-18 235 165)" />
      <ellipse cx="120" cy="180" rx="24" ry="12" fill="#fff" stroke="var(--ink-2)" strokeWidth="1.6" transform="rotate(12 120 180)" />
      {[[210, 95], [140, 168], [232, 118], [112, 108]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.4" fill="var(--ink-2)" />
      ))}
      <line x1="305" y1="60" x2="268" y2="86" {...LEAD} />
      <text x="308" y="58" style={LABEL}>Cell membrane</text>
      <line x1="118" y1="44" x2="152" y2="92" {...LEAD} />
      <text x="88" y="38" style={LABEL}>Nucleus</text>
      <line x1="330" y1="188" x2="258" y2="172" {...LEAD} />
      <text x="333" y="192" style={LABEL}>Mitochondrion</text>
      <line x1="60" y1="222" x2="112" y2="190" {...LEAD} />
      <text x="18" y="236" style={LABEL}>Mitochondrion</text>
      <line x1="292" y1="230" x2="214" y2="196" {...LEAD} />
      <text x="288" y="244" style={LABEL}>Cytoplasm</text>
      <line x1="330" y1="112" x2="240" y2="117" {...LEAD} />
      <text x="333" y="116" style={LABEL}>Ribosomes</text>
    </Frame>
  )
}

/** A plant cell, emphasising the three parts animals do not have. */
export function PlantCell() {
  return (
    <Frame
      title="A plant cell"
      desc="A box-shaped plant cell with a rigid cell wall outside the cell membrane, green chloroplasts, a large central vacuole and a nucleus pushed to one side."
    >
      <rect x="58" y="34" width="256" height="190" rx="10" fill="#dff3d2" stroke="var(--brand-700)" strokeWidth="4" />
      <rect x="66" y="42" width="240" height="174" rx="7" fill="#eaf7e3" stroke="var(--brand)" strokeWidth="2" />
      <rect x="104" y="76" width="164" height="108" rx="12" fill="#cfeaf7" stroke="#4a90b8" strokeWidth="2" />
      <ellipse cx="92" cy="176" rx="26" ry="23" fill="#c9e9b8" stroke="var(--brand-700)" strokeWidth="2" />
      <circle cx="92" cy="176" r="7" fill="var(--brand-700)" opacity=".45" />
      {[[88, 62], [140, 58], [252, 62], [286, 120], [286, 186], [196, 200]].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="11" ry="7" fill="#5ab82e" stroke="#3f8f1f" strokeWidth="1.2" />
      ))}
      <line x1="330" y1="40" x2="312" y2="46" {...LEAD} />
      <text x="332" y="38" style={LABEL}>Cell wall</text>
      <line x1="330" y1="150" x2="272" y2="130" {...LEAD} />
      <text x="333" y="154" style={LABEL}>Vacuole</text>
      <line x1="330" y1="112" x2="296" y2="119" {...LEAD} />
      <text x="333" y="112" style={LABEL}>Chloroplast</text>
      <line x1="36" y1="238" x2="80" y2="198" {...LEAD} />
      <text x="14" y="252" style={LABEL}>Nucleus</text>
    </Frame>
  )
}

/** The levels of organisation, as a progression. */
export function Organisation() {
  const steps = ['Cell', 'Tissue', 'Organ', 'Organ system', 'Organism']
  return (
    <Frame
      title="Levels of organisation"
      desc="Five steps increasing in size: cell, then tissue, then organ, then organ system, then organism."
    >
      {steps.map((s, i) => {
        const x = 14 + i * 80
        const h = 34 + i * 22
        return (
          <g key={s}>
            <rect x={x} y={200 - h} width="66" height={h} rx="7"
                  fill="#eaf7e3" stroke="var(--brand)" strokeWidth="2" />
            <text x={x + 33} y={220} textAnchor="middle" style={LABEL}>{s}</text>
          </g>
        )
      })}
      <line x1="14" y1="238" x2="394" y2="238" stroke="var(--faint)" strokeWidth="1.4" />
      <polygon points="394,238 386,234 386,242" fill="var(--faint)" />
      <text x="204" y="254" textAnchor="middle" style={{ ...LABEL, fill: 'var(--muted)' }}>
        increasing complexity
      </text>
    </Frame>
  )
}

import { EXTRA } from './Diagrams'

/** Picks the authored diagram a lesson step asks for, if any. */
export function Diagram({ name }: { name: string | undefined }) {
  if (name === 'animal_cell') return <AnimalCell />
  if (name === 'plant_cell') return <PlantCell />
  if (name === 'organisation') return <Organisation />
  const extra = EXTRA[name ?? '']
  if (extra) return extra()
  return null
}

/* ---------------------------------------------------------------- check -- */

/**
 * A knowledge check inside the lesson.
 *
 * The question comes from the same objective the lesson teaches, served and
 * marked by the existing practice engine. Nothing here decides correctness, and
 * the explanation shown afterwards is the one the question actually stores, so
 * the feedback teaches rather than just scoring.
 */
export function InlineCheck({ objectiveId }: { objectiveId: string }) {
  const [q, setQ] = useState<PracticeQuestion | null>(null)
  const [loading, setLoading] = useState(true)
  const [answer, setAnswer] = useState<unknown>(null)
  const [marked, setMarked] = useState<Marked | null>(null)
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    let live = true
    setLoading(true); setQ(null); setAnswer(null); setMarked(null)
    practiceForObjective(objectiveId)
      .then(list => { if (live) { setQ(list.find(x => x.autoMarkable) ?? list[0] ?? null); setLoading(false) } })
      .catch(() => { if (live) setLoading(false) })
    return () => { live = false }
  }, [objectiveId])

  if (loading) return <p className="nb-say" style={{ marginTop: 14 }}>Loading the question</p>
  if (!q) return <p className="nb-say" style={{ marginTop: 14 }}>No question has been written for this objective yet.</p>

  const answered = marked !== null
  const check = async () => {
    if (answered || busy) return
    setBusy(true)
    try { setMarked(await submitAnswer(q.id, answer)) } finally { setBusy(false) }
  }

  return (
    <div className="nb-check">
      <p className="nb-check-q">{q.stem}</p>

      <div className="nb-check-opts">
        {q.kind === 'MULTIPLE_CHOICE' && q.options.map(o => (
          <button key={o.key} className="nb-opt" disabled={answered}
                  aria-pressed={answer === o.key}
                  data-state={answered && answer === o.key ? (marked?.isCorrect ? 'right' : 'wrong') : undefined}
                  onClick={() => setAnswer(o.key)}>
            <b>{o.key}</b> {o.text}
          </button>
        ))}

        {q.kind === 'SHORT_ANSWER' && (
          <input className="nb-input" disabled={answered}
                 placeholder={q.placeholder ?? 'Type your answer'}
                 value={answer === null ? '' : String(answer)}
                 onChange={e => setAnswer(e.target.value)} />
        )}
      </div>

      {!answered ? (
        <button className="nb-btn p" style={{ marginTop: 12 }}
                disabled={answer === null || answer === '' || busy}
                onClick={check}>
          {busy ? 'Checking' : 'Check my answer'}
        </button>
      ) : (
        <div className={`nb-feedback ${marked?.isCorrect ? 'right' : marked?.needsReview ? 'review' : 'wrong'}`}
             role="status">
          <b>
            {marked?.needsReview ? 'Answer recorded'
              : marked?.isCorrect ? 'Correct' : 'Not quite'}
          </b>
          {/* Only what the question stores. Nothing is generated. */}
          <p>{marked?.explanation ?? 'No explanation has been recorded for this question yet.'}</p>
        </div>
      )}
    </div>
  )
}
