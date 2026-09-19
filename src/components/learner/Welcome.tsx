import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import type { LearnerContext } from '../../lib/education/context'
import { Skeleton, IconBook, IconPlay, IconPencil } from './ui'

/**
 * The learner's first entry.
 *
 * This screen confirms; it does not ask. The learning context is decided by the
 * school's enrolment record, so presenting a chooser here would be theatre:
 * every field resolves to exactly one value, and there is nowhere to write a
 * different answer. What the learner needs is to understand the space that has
 * been set up for them, and then to enter it.
 *
 * Everything shown comes from the resolved context. Nothing is written into
 * this file, and no figure is invented: where the platform does not hold a
 * number, the interface describes the thing instead of counting it.
 */

/**
 * The curriculum's real name.
 *
 * edu_curricula carries a human name alongside its code. The resolved context
 * exposes only the code and version, which are how the platform files a
 * curriculum rather than what a learner would call it, so the name is read
 * here. A plain read of existing data: nothing about the context engine or the
 * schema changes.
 */
function useCurriculumName(id: string | null): { name: string | null; loading: boolean } {
  const [name, setName] = useState<string | null>(null)
  const [loading, setLoading] = useState(Boolean(id))

  useEffect(() => {
    if (!id) { setName(null); setLoading(false); return }
    let live = true
    setLoading(true)
    supabase.from('edu_curricula').select('name').eq('id', id).maybeSingle()
      .then(({ data }) => { if (live) { setName(data?.name ?? null); setLoading(false) } })
    return () => { live = false }
  }, [id])

  return { name, loading }
}

/** The group, without repeating a stream its name already carries. */
function groupLabel(ctx: LearnerContext): string | null {
  const g = ctx.group
  if (!g) return ctx.programme?.name ?? null
  return g.stream && !g.name.includes(g.stream) ? `${g.name} ${g.stream}` : g.name
}

export function WelcomeScreen({ ctx, onEnter }: { ctx: LearnerContext; onEnter: () => void }) {
  const { name: curriculumName } = useCurriculumName(ctx.curriculum?.id ?? null)

  // Period is shown only when the learner's structure actually has one. A
  // rolling intake has no period concept and gets no period line.
  const timeLine = [
    ctx.academicYear,
    ctx.period ? `${ctx.period.noun} ${ctx.period.number}` : null,
  ].filter(Boolean).join(' · ')

  return (
    <div className="nb-onb">
      <header className="nb-onb-top">
        <img src="/nexacore-logo.jpg" alt="NexaCore" />
      </header>

      <main className="nb-onb-main">
        <p className="nb-onb-eyebrow">Welcome to Nexa EDU</p>
        <h1 className="nb-onb-h1">Let&rsquo;s get your learning space ready</h1>
        <p className="nb-onb-lede">
          Your school has already set up your learning context. We&rsquo;ll use it to show you the
          curriculum, subjects, lessons and learning activities that apply to you.
        </p>

        <p className="nb-onb-ready">Your learning space is ready</p>

        {/* Two columns on a desktop, one on a phone. Side by side, the whole
            sequence — context, what is inside, and the way in — fits a laptop
            viewport without the learner having to scroll to find the action. */}
        <div className="nb-onb-body">
        <div>
        {/* The resolved context, weighted so the learner reads stage, then
            level, then where they sit, then when. */}
        <section className="nb-onb-card" aria-label="Your learning context">
          {/* Who wrote the curriculum is shown by name further down, not as a
              warning badge. Nexa-authored material is real teaching content, so
              labelling it "demo" in front of a learner would be simply wrong. */}
          <div className="nb-onb-stage">{ctx.educationSystemLabel}</div>

          <p className="nb-onb-level">{ctx.levelLabel}</p>

          <div className="nb-onb-where">
            {ctx.institution && <p className="nb-onb-school">{ctx.institution.name}</p>}
            {groupLabel(ctx) && <p className="nb-onb-group">{groupLabel(ctx)}</p>}
          </div>

          {timeLine && <p className="nb-onb-when">{timeLine}</p>}

          {curriculumName && <p className="nb-onb-cur">{curriculumName}</p>}
        </section>

        {/* Stated plainly, because the learner cannot change any of it here and
            should not be left hunting for a control that does not exist. */}
        <p className="nb-onb-note">
          This learning context is provided by your school. If something looks wrong,
          your school administrator can correct it.
        </p>
        </div>

        <section className="nb-onb-what">
          <h2 className="nb-onb-h2">This is what you&rsquo;ll learn here</h2>
          <p className="nb-onb-say">
            Your learning space is personalised to your current level, school, class and curriculum.
          </p>
          <ul className="nb-onb-grid">
            {/* Described, never counted. The platform is not asked for totals
                here, so none are shown. */}
            <li>
              <span className="ico" aria-hidden="true"><IconBook /></span>
              <b>Subjects</b>
              <span>The subjects your class is taking</span>
            </li>
            <li>
              <span className="ico" aria-hidden="true"><IconPlay /></span>
              <b>Lessons and materials</b>
              <span>Lessons, readings and videos for each topic</span>
            </li>
            <li>
              <span className="ico" aria-hidden="true"><IconPencil /></span>
              <b>{ctx.workLabel}</b>
              <span>Practise and check your understanding</span>
            </li>
          </ul>
        </section>
        </div>

        <div className="nb-onb-cta">
          <button className="nb-btn p" onClick={onEnter}>Enter my learning space</button>
        </div>

        {/* The account is the person; the context is what they are studying.
            Kept visibly separate so the two are never read as one thing. */}
        <p className="nb-onb-who">
          Signed in as <b>{ctx.studentName}</b>
        </p>
      </main>
    </div>
  )
}

/** The onboarding shape, while the context is still resolving. */
export function WelcomeSkeleton() {
  return (
    <div className="nb-onb">
      <header className="nb-onb-top">
        <img src="/nexacore-logo.jpg" alt="NexaCore" />
      </header>
      <main className="nb-onb-main" role="status" aria-live="polite" aria-busy="true">
        <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
          Loading your learning space
        </span>
        <Skeleton w="46%" h={11} />
        <div style={{ height: 18 }} />
        <Skeleton w="78%" h={30} />
        <div style={{ height: 14 }} />
        <Skeleton w="94%" h={13} />
        <div style={{ height: 7 }} />
        <Skeleton w="66%" h={13} />
        <div style={{ height: 28 }} />
        <div className="nb-onb-card">
          <Skeleton w="30%" h={11} />
          <div style={{ height: 14 }} />
          <Skeleton w="42%" h={26} />
          <div style={{ height: 16 }} />
          <Skeleton w="58%" h={13} />
          <div style={{ height: 8 }} />
          <Skeleton w="44%" h={13} />
          <div style={{ height: 16 }} />
          <Skeleton w="36%" h={12} />
        </div>
        <div style={{ height: 26 }} />
        <Skeleton w="190px" h={40} r={9} />
      </main>
    </div>
  )
}

/**
 * No enrolment, so no learning context.
 *
 * Nothing is defaulted or invented here. A learner with no active enrolment has
 * no level, and showing an empty curriculum or guessing a level would both be
 * worse than saying so.
 */
export function NoContextScreen({ onSignOut }: { onSignOut: () => void }) {
  return (
    <div className="nb-onb">
      <header className="nb-onb-top">
        <img src="/nexacore-logo.jpg" alt="NexaCore" />
      </header>
      <main className="nb-onb-main nb-onb-narrow">
        <h1 className="nb-onb-h1">Your learning space isn&rsquo;t set up yet</h1>
        <p className="nb-onb-lede">
          Your account is ready, but we couldn&rsquo;t find an active school enrolment for you yet.
        </p>
        <p className="nb-onb-lede">
          Please contact your school administrator to complete your learner setup.
        </p>
        <div className="nb-onb-cta">
          <button className="nb-btn g" onClick={onSignOut}>Sign out</button>
        </div>
      </main>
    </div>
  )
}

/** Context resolution failed. The underlying message stays in the console. */
export function ContextErrorScreen({ detail, onRetry }: { detail?: unknown; onRetry: () => void }) {
  if (detail !== undefined && detail !== null) console.error('[learner context]', detail)
  return (
    <div className="nb-onb">
      <header className="nb-onb-top">
        <img src="/nexacore-logo.jpg" alt="NexaCore" />
      </header>
      <main className="nb-onb-main nb-onb-narrow" role="alert">
        <h1 className="nb-onb-h1">We couldn&rsquo;t load your learning space</h1>
        <p className="nb-onb-lede">
          Something went wrong while loading your learner information. Your learning and your
          progress are safe.
        </p>
        <div className="nb-onb-cta">
          <button className="nb-btn p" onClick={onRetry}>Try again</button>
        </div>
      </main>
    </div>
  )
}
