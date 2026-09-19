/**
 * A parent's or a school's page: everyone they look after, in one place.
 *
 * Each learner keeps their own dedicated page, their own identity and their own
 * history. This is a window onto them, not a container holding them, which is
 * why a row shows what the child is actually finding hard rather than a score
 * out of ten. A parent can act on "counting back from ten keeps going wrong".
 * They can do nothing at all with "68%".
 *
 * ── The ordering is the feature ─────────────────────────────────────────────
 *
 * A parent with four children and three minutes reads the first two rows. So
 * whoever needs help most is first, then whoever has not been seen for
 * longest. A list in the order the children were added is a list nobody
 * finishes.
 *
 * ── What this used to get wrong ─────────────────────────────────────────────
 *
 * Every child's progress was computed against `MATHS_JHS2`, the one course
 * written out in full, whatever they were actually studying. So a KG child's
 * page reported how they were doing on JHS 2 Mathematics, which is to say it
 * reported nothing, and the list of what they were finding hard was a list of
 * objectives they had never been shown.
 *
 * Now each child is read against **their own** subjects for their own year,
 * from the syllabus layer, the same way their own screens are.
 */

import { useMemo, useState } from 'react'
import '../styles/guardian.css'
import type { Account } from '../lib/education/accounts'
import { QUIET_DAYS, byNeed, readOf, type Read } from '../lib/education/roll'
import type { LearnerProfile } from '../lib/education/learner'

/**
 * What the grown-up sees about one learner, worked out from their own work
 * against their own year.
 *
 * The reading itself lives in `roll.ts`, because the school console needs the
 * same answer and the two copies of it had already drifted: this page read a
 * child against their own syllabus and the school page read every class
 * against JHS 2 Mathematics.
 */
function useRead(learners: LearnerProfile[]): Read[] {
  /* The clock is read once, when the page opens. Inside the memo it would make
     the memo impure, and "3 days ago" does not need to tick. */
  const [now] = useState(() => Date.now())
  return useMemo(() => learners.map(l => readOf(l, now)), [learners, now])
}

/* ── the ring ─────────────────────────────────────────────────────────────── */

/**
 * Progress as an arc with the number inside it.
 *
 * For a handful of children this reads faster than a row of bars: the eye
 * compares arcs without reading any of the labels, which is the whole point of
 * a page somebody checks between other things.
 */
function Ring({ part, label, tone }: {
  part: number
  label: string
  tone: 'blue' | 'warn' | 'grey'
}) {
  const r = 34
  const c = 2 * Math.PI * r
  const on = Math.max(0, Math.min(1, part))
  const stroke = tone === 'warn'
    ? 'var(--nx-red)'
    : tone === 'grey' ? 'var(--nx-ink-3)' : 'var(--nx-green)'

  return (
    <svg width="86" height="86" viewBox="0 0 86 86" role="img"
      aria-label={`${Math.round(on * 100)} per cent`}>
      <circle cx="43" cy="43" r={r} fill="none" stroke="var(--nx-line)" strokeWidth="9" />
      {/* Drawn only when there is something to draw.

          A round line cap on a zero length arc still paints a dot, so every
          child who had not started anything got a small grey mark at twelve
          o'clock that read as a rendering defect rather than as nought. */}
      {on > 0 && (
        <circle
          cx="43" cy="43" r={r} fill="none" stroke={stroke} strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={`${c * on} ${c}`}
          /* Started from the top rather than from three o'clock, because a
             ring that begins at the side reads as a pie chart. */
          transform="rotate(-90 43 43)" />
      )}
      <text x="43" y="41" textAnchor="middle" fontSize="19" fontWeight="800" fill="var(--nx-ink)">
        {label}
      </text>
      <text x="43" y="55" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--nx-ink-2)">
        topics
      </text>
    </svg>
  )
}

/* ── the page ─────────────────────────────────────────────────────────────── */

export default function Learners({ account, learners, onOpen, onAdd, onSignOut }: {
  account: Account
  learners: LearnerProfile[]
  onOpen: (id: string) => void
  onAdd: () => void
  onSignOut: () => void
}) {
  const rows = useRead(learners)
  /* Kept because the wording differs, and because a school account is one
     routing decision away in `Study.tsx`, which sends `kind === 'school'` to
     the console. If that ever changes, this page already says "student". */
  const isSchool = account.kind === 'school'
  const who = isSchool ? 'student' : 'child'

  /* Whoever is struggling most comes first, then whoever has not been seen for
     longest. Shared with the console, so both pages order the same way. */
  const sorted = useMemo(() => byNeed(rows), [rows])

  /* Worth saying something about: struggling, or gone quiet. */
  const attention = sorted.filter(r => r.hardest || (r.days !== null && r.days >= QUIET_DAYS))

  if (!learners.length) {
    return (
      <div className="gd">
        <Bar isSchool={isSchool} count={0} onAdd={onAdd} onSignOut={onSignOut} who={who} />
        <div className="gd-main">
          <div className="gd-panel gd-empty">
            <h2>Nobody here yet</h2>
            <p className="gd-none">
              Add your first {who} and their work will appear here as they do it.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="gd">
      <Bar
        isSchool={isSchool} count={learners.length}
        onAdd={onAdd} onSignOut={onSignOut} who={who} />

      <div className="gd-main">
        <div className="gd-grid">
          <div>
            <div className="gd-panel">
              <div className="gd-panel-top">
                <h2>Worth a look</h2>
                <span className="gd-count">{attention.length}</span>
              </div>

              {/* Named difficulties first, because that is the only thing on
                  this page a parent can actually act on tonight. */}
              {attention.length === 0 ? (
                <p className="gd-none">
                  Nothing needs chasing. Everybody has been working and nothing
                  is going badly.
                </p>
              ) : attention.map(r => (
                <button
                  key={r.learner.id}
                  className={`gd-item${r.hardest ? ' is-warn' : ''}`}
                  onClick={() => onOpen(r.learner.id)}>
                  <span className="gd-dot" aria-hidden>
                    {(r.learner.name.trim()[0] ?? '?').toUpperCase()}
                  </span>
                  <span className="gd-item-body">
                    <span className="gd-item-name">{r.learner.name || 'Unnamed'}</span>
                    <span className="gd-item-why">
                      {r.hardest
                        ? `${r.hardest.topic.title} keeps going wrong, in ${r.hardest.subject}.`
                        : r.days === null
                          ? 'Has not started anything yet.'
                          : `Nothing for ${r.days} days.`}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="gd-panel">
              <div className="gd-panel-top">
                <h2>Everyone</h2>
                <span className="gd-count">
                  {learners.length} {learners.length === 1
                    ? who
                    : isSchool ? 'students' : 'children'}
                </span>
              </div>

              <div className="gd-rings">
                {sorted.map(r => (
                  <button
                    key={r.learner.id}
                    className={`gd-ring-card${r.hardest ? ' is-warn' : ''}`}
                    onClick={() => onOpen(r.learner.id)}>
                    <Ring
                      part={r.total ? r.started / r.total : 0}
                      label={`${r.started}`}
                      tone={r.hardest ? 'warn' : r.started ? 'blue' : 'grey'} />
                    <span className="gd-ring-name">{r.learner.name || 'Unnamed'}</span>
                    <span className="gd-ring-sub">{r.learner.level}</span>
                    <span className="gd-ring-open">Open</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* The table spans both columns.

            Inside the right column it left the whole lower half of the left
            column empty: "Worth a look" is short by design, so on a 1280px
            screen a parent with four children got a page that was blank from
            the middle down. The table is about everybody, so it belongs across
            the page rather than in one lane of it. */}
        <div className="gd-wide">
            <div className="gd-panel">
              <div className="gd-panel-top"><h2>The detail</h2></div>
              <div className="gd-scroll">
                <table className="gd-table">
                  <thead>
                    <tr>
                      <th>{isSchool ? 'Student' : 'Child'}</th>
                      <th>Year</th>
                      <th>Topics</th>
                      <th>Answered</th>
                      <th>Right</th>
                      <th>Last seen</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map(r => (
                      <tr key={r.learner.id}>
                        <td className="gd-name">{r.learner.name || 'Unnamed'}</td>
                        <td className="gd-soft">{r.learner.level}</td>
                        <td className="gd-soft">{r.started} of {r.total}</td>
                        <td className="gd-soft">{r.answered}</td>
                        <td>
                          {/* A rate only where there is enough to mean
                              anything. A percentage from three answers is a
                              number a parent will believe. */}
                          {r.accuracy === null
                            ? <span className="gd-soft">too early</span>
                            : (
                              <span className={`gd-pill ${r.accuracy >= 0.6 ? 'is-good' : 'is-warn'}`}>
                                {Math.round(r.accuracy * 100)}%
                              </span>
                            )}
                        </td>
                        <td>
                          {r.days === null
                            ? <span className="gd-pill is-idle">never</span>
                            : r.days === 0
                              ? <span className="gd-pill is-good">today</span>
                              : r.days >= QUIET_DAYS
                                ? <span className="gd-pill is-warn">{r.days} days</span>
                                : <span className="gd-soft">{r.days} days</span>}
                        </td>
                        <td>
                          <button className="gd-open" onClick={() => onOpen(r.learner.id)}>
                            Open
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

function Bar({ isSchool, count, who, onAdd, onSignOut }: {
  isSchool: boolean
  count: number
  who: string
  onAdd: () => void
  onSignOut: () => void
}) {
  return (
    <div className="gd-bar">
      <div className="gd-bar-in">
        <span className="gd-wordmark">NEXA<i>·</i>EDU</span>
        <span className="gd-role">{isSchool ? 'School' : 'Parent'}</span>
        {count > 0 && <span className="gd-role">{count} in your care</span>}
        <span className="gd-bar-spacer" />
        <button className="gd-bar-btn is-solid" onClick={onAdd}>
          Add a {who}
        </button>
        <button className="gd-bar-btn" onClick={onSignOut}>Sign out</button>
      </div>
    </div>
  )
}
