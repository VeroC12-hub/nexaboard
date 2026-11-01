/**
 * Reading generated lessons before any child is taught from them.
 *
 * ── Why this screen exists at all ───────────────────────────────────────────
 *
 * `taughtFor` refuses an unapproved lesson, and `generated.ts` refuses to let
 * a model approve its own. Both of those are refusals, and refusals alone
 * would mean generated material is never served. This is the only thing in the
 * platform that can say yes, and a person has to be looking at it to do so.
 *
 * ── Why it shows the parts rather than a preview of one learner's lesson ────
 *
 * A reviewer is not checking what one child sees. They are checking material
 * that will be cut a dozen different ways by `assemble`: the mechanism will be
 * removed for some learners, the recap added for others, the figure moved to
 * the front for a third. So every part is shown, labelled with who gets it and
 * when, because a part that reads well in one arrangement and badly in another
 * is exactly what a reviewer is here to catch.
 *
 * ── Who approves ───────────────────────────────────────────────────────────
 *
 * The school's own teachers, for their own subjects. That is what lets this
 * scale past the people who built the app. The name they type is stored with
 * the approval, because an approval nobody signed is one nobody is answerable
 * for.
 */

import { useMemo, useState } from 'react'
import { useSchoolAuth } from '../lib/school/useSchoolAuth'
import { can } from '../lib/school/permissions'
import type { Profile } from '../lib/school/api'
import {
  approve, awaitingReview, reject, reviewed, type Pending,
} from '../lib/education/generated-store'
import { assemble } from '../lib/education/taught'
import { cleanSvg } from '../lib/education/visuals'
import type { Taught } from '../lib/education/taught'
import '../styles/tokens.css'

/** What a reviewer needs to know about each part before they judge it. */
const WHO: Record<string, string> = {
  idea: 'Everybody sees this',
  mechanism: 'Removed for a strong learner who prefers doing',
  recap: 'Added for a learner catching up, or shaky here',
  method: 'Everybody sees this',
  worked: 'One is shown, the one nearest their level',
  traps: 'Everybody. Retitled "What loses marks" for an exam goal',
  extension: 'Only for a learner who asked not to be held back',
  figure: 'Moved to the front for a learner who learns by watching',
  questions: 'Only for a learner who learns by doing',
}

function Part({ name, children }: { name: string, children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 18 }}>
      <h3 style={{ margin: '0 0 2px', fontSize: 15, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
        {name}
      </h3>
      <p style={{ margin: '0 0 8px', fontSize: 13, color: 'var(--nx-ink-3)' }}>
        {WHO[name] ?? ''}
      </p>
      {children}
    </section>
  )
}

function Lesson({ t }: { t: Taught }) {
  const svg = t.figure ? cleanSvg(t.figure.svg) : null

  return (
    <div style={{ fontSize: 16, lineHeight: 1.6 }}>
      <Part name="idea"><p style={{ margin: 0 }}>{t.idea}</p></Part>

      {t.mechanism && (
        <Part name="mechanism"><p style={{ margin: 0 }}>{t.mechanism}</p></Part>
      )}

      {t.recap && <Part name="recap"><p style={{ margin: 0 }}>{t.recap}</p></Part>}

      <Part name="method">
        <ol style={{ margin: 0, paddingLeft: 22 }}>
          {t.method.map((m, i) => <li key={i}>{m}</li>)}
        </ol>
      </Part>

      {t.worked?.length ? (
        <Part name="worked">
          {t.worked.map((w, i) => (
            <div key={i} style={{ marginBottom: 12 }}>
              <p style={{ margin: '0 0 4px', fontWeight: 700 }}>
                Level {w.level}. {w.ask}
              </p>
              <ol style={{ margin: '0 0 4px', paddingLeft: 22 }}>
                {w.steps.map((s, j) => (
                  <li key={j}>{typeof s === 'string' ? s : `${s.math}${s.why ? `  (${s.why})` : ''}`}</li>
                ))}
              </ol>
              <p style={{ margin: 0 }}>{w.answer}</p>
            </div>
          ))}
        </Part>
      ) : null}

      {t.traps?.length ? (
        <Part name="traps">
          <ul style={{ margin: 0, paddingLeft: 22 }}>
            {t.traps.map((x, i) => (
              <li key={i}><b>{x.mistake}</b> {x.why}</li>
            ))}
          </ul>
        </Part>
      ) : null}

      {t.extension && (
        <Part name="extension"><p style={{ margin: 0 }}>{t.extension}</p></Part>
      )}

      {t.figure && (
        <Part name="figure">
          {svg ? (
            <figure style={{ margin: 0 }}>
              <div
                role="img"
                aria-label={t.figure.alt}
                style={{ maxWidth: 520 }}
                dangerouslySetInnerHTML={{ __html: svg }}
              />
              <figcaption style={{ fontSize: 13, color: 'var(--nx-ink-3)', marginTop: 6 }}>
                Alt text: {t.figure.alt}
              </figcaption>
            </figure>
          ) : (
            <p style={{ margin: 0, color: 'var(--nx-red)' }}>
              The drawing could not be read, so no picture would be shown.
            </p>
          )}
        </Part>
      )}

      {t.questions?.length ? (
        <Part name="questions">
          {t.questions.map(q => (
            <div key={q.id} style={{ marginBottom: 12 }}>
              <p style={{ margin: '0 0 4px', fontWeight: 700 }}>{q.ask}</p>
              {q.options?.length ? (
                <ul style={{ margin: '0 0 4px', paddingLeft: 22 }}>
                  {q.options.map(o => (
                    <li key={o} style={o === q.answer ? { fontWeight: 700 } : undefined}>
                      {o}{o === q.answer ? '  (the answer)' : ''}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ margin: '0 0 4px' }}>Answer: {q.answer}</p>
              )}
              <p style={{ margin: 0, fontSize: 14, color: 'var(--nx-ink-2)' }}>
                When it is wrong: {q.teach}
              </p>
            </div>
          ))}
        </Part>
      ) : null}
    </div>
  )
}

/** A page that says why it will not open, rather than a blank or a redirect. */
function Shut({ heading, body }: { heading: string, body: string }) {
  return (
    <div className="nx" style={{ minHeight: '100dvh', background: 'var(--nx-paper)' }}>
      <div style={{ maxWidth: 560, margin: '0 auto', padding: '80px 20px' }}>
        <h1 style={{ margin: '0 0 10px', fontSize: 26 }}>{heading}</h1>
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--nx-ink-2)' }}>
          {body}
        </p>
      </div>
    </div>
  )
}

/**
 * Who may open this screen.
 *
 * ── Why the route was guarded before launch ─────────────────────────────────
 *
 * It was not. Anybody who knew the address could approve a generated lesson
 * into the app, including a learner, and approving is the one act in the
 * platform that puts unreviewed material in front of a child. The four
 * refusals elsewhere all funnel into this one yes, so this is the only place
 * where a missing check actually costs something.
 *
 * ── What this gate is, and is not ───────────────────────────────────────────
 *
 * It is a UI gate, and `permissions.ts` is blunt that a UI gate enforces
 * nothing: hiding a screen stops nobody who opens dev tools. It is honest here
 * only because approvals are held in this device's own storage, so the reach
 * of defeating it is that one browser rather than the school. The moment
 * approvals sync, this needs the same check server side, in RLS, and that is
 * owed work rather than done work.
 */
function Gate({ children }: { children: (profile: Profile) => React.ReactNode }) {
  const { state } = useSchoolAuth()

  if (state.status === 'loading') {
    return <Shut heading="One moment" body="Checking who you are." />
  }
  if (state.status === 'signed-out') {
    return (
      <Shut
        heading="Please sign in"
        body={'This screen approves lessons that children will be taught from, '
          + 'so it needs to know who you are. Sign in with your school account '
          + 'and come back.'}
      />
    )
  }
  if (state.status === 'no-schema' || state.status === 'error') {
    return <Shut heading="Not available" body={state.message} />
  }
  if (!can(state.profile.role, 'curriculum.approve')) {
    return (
      <Shut
        heading="Not for this account"
        body={'Approving a lesson is for teachers and heads, because the '
          + 'person who approves it is answerable for what a class is taught. '
          + 'Your account is signed in as ' + state.profile.role.replace(/_/g, ' ')
          + '. Ask a teacher at your school to read it.'}
      />
    )
  }

  return <>{children(state.profile)}</>
}

export default function Review() {
  return (
    <Gate>
      {profile => <ReviewDesk signedInAs={profile.full_name ?? ''} />}
    </Gate>
  )
}

function ReviewDesk({ signedInAs }: { signedInAs: string }) {
  const [waiting, setWaiting] = useState<Pending[]>(() => awaitingReview())
  const [done, setDone] = useState(() => reviewed().length)
  /* Prefilled from the signed in account, because an approval signed with a
     name somebody typed is weaker than one signed with the account that was
     actually open. Still editable: a teacher reviewing on the school's shared
     laptop should be able to put their own name on their own reading. */
  const [who, setWho] = useState(signedInAs)
  const [open, setOpen] = useState(0)

  const current = waiting[open] ?? null

  /* What the learner would actually be given, so a reviewer can see the
     ordering decision as well as the parts. Built for a learner with no
     preferences, which is the plainest arrangement. */
  const shape = useMemo(() => {
    if (!current) return null
    try {
      return assemble(current.taught, {
        id: 'review', name: '', version: 6, results: [],
        stage: current.taught.topicId ? 'primary' : 'primary',
        level: current.year, forChild: false,
        goal: 'KEEP_UP', approach: 'IDEA_FIRST', diet: 'MIX',
        footing: 'OK', whenStuck: 'HINT', aiNotes: {},
      } as never)
    } catch { return null }
  }, [current])

  function onApprove() {
    if (!current || !who.trim()) return
    approve(current.taught.topicId, who.trim())
    setWaiting(awaitingReview())
    setDone(reviewed().length)
    setOpen(0)
  }

  function onReject() {
    if (!current) return
    reject(current.taught.topicId)
    setWaiting(awaitingReview())
    setOpen(0)
  }

  return (
    <div className="nx" style={{ minHeight: '100dvh', background: 'var(--nx-paper)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '28px 20px 60px' }}>

        <h1 style={{ margin: '0 0 6px', fontSize: 30 }}>Lessons waiting to be read</h1>
        <p style={{ margin: '0 0 24px', color: 'var(--nx-ink-2)', maxWidth: '60ch' }}>
          Nothing here has been taught to anybody. A lesson is only served once
          somebody has read it and said so, and the name you give is stored with
          the approval.
        </p>

        <p style={{ margin: '0 0 24px', fontWeight: 700 }}>
          {waiting.length} waiting, {done} already approved.
        </p>

        {!current ? (
          <p style={{ color: 'var(--nx-ink-2)' }}>
            Nothing is waiting. Generated lessons appear here as they are written.
          </p>
        ) : (
          <>
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center',
              marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid var(--nx-line)',
            }}>
              <span style={{ fontWeight: 800, fontSize: 18 }}>{current.taught.topicId}</span>
              <span style={{ color: 'var(--nx-ink-3)' }}>{current.year}</span>
              <span style={{ color: 'var(--nx-ink-3)' }}>{current.curriculum}</span>
              <span style={{ flexGrow: 1 }} />
              {waiting.length > 1 && (
                <button
                  type="button"
                  className="nx-btn"
                  onClick={() => setOpen((open + 1) % waiting.length)}>
                  Next one
                </button>
              )}
            </div>

            {shape && (
              <p style={{
                margin: '0 0 20px', fontSize: 14, color: 'var(--nx-ink-2)',
                background: 'var(--nx-green-soft)', padding: '10px 14px', borderRadius: 10,
              }}>
                {shape.because}
              </p>
            )}

            <Lesson t={current.taught} />

            <div style={{
              marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--nx-line)',
              display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'flex-end',
            }}>
              <label style={{ display: 'block' }}>
                <span style={{ display: 'block', fontSize: 14, marginBottom: 4 }}>
                  Your name
                </span>
                <input
                  className="nx-field"
                  value={who}
                  onChange={e => setWho(e.target.value)}
                  placeholder="Who read this"
                  style={{ minWidth: 220 }}
                />
              </label>
              <button
                type="button"
                className="nx-btn nx-btn-primary"
                disabled={!who.trim()}
                onClick={onApprove}>
                This may be taught
              </button>
              <button type="button" className="nx-btn" onClick={onReject}>
                Throw it away
              </button>
            </div>
            <p style={{ marginTop: 10, fontSize: 13, color: 'var(--nx-ink-3)' }}>
              Thrown away means the topic falls back to the live tutor, exactly
              as if nothing had been generated.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
