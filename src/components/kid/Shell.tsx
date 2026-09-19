/**
 * The frame every kid screen sits in: a scene, a header, and two tabs.
 *
 * ── Two tabs, not five ──────────────────────────────────────────────────────
 *
 * It had five: Home, Learn, Games, Rewards, Profile. Four too many for
 * somebody who cannot read a label, and two of them did not earn a place.
 * `Learn` showed the same subject tiles already on Home. `Profile` is a grown
 * up's screen, and it was taking a fifth of a four year old's navigation.
 *
 * So Home and Play. Rewards is reached by tapping your own stars, which is a
 * more natural gesture for a child than reading a tab, and the grown up's door
 * sits in the header with the other adult controls.
 *
 * ── The counters used to do nothing ─────────────────────────────────────────
 *
 * The points and the days were inert chips shaped exactly like buttons. A
 * number on screen that looks pressable and is not is worse than no number,
 * and neither said what it counted: "4" answers nothing. They are buttons now,
 * they go to Rewards where both are written out in words, and the flame says
 * "4 days" rather than "4".
 *
 * ── The mute switch used to do nothing either ───────────────────────────────
 *
 * It wrote the preference to storage and this component held no state, so it
 * never re-rendered and the icon never changed. Pressing it looked broken
 * because it was.
 */

import { useEffect, useState } from 'react'
import { Icon, Sky, TabIcon } from './art'
import { canSpeak, say, stop } from '../../lib/education/speak'
import '../../styles/kid.css'

/** Where a learner can be. Only the first two are tabs. */
export type KidTab = 'home' | 'play' | 'rewards' | 'profile'

const TABS: Array<{ key: 'home' | 'play', name: string }> = [
  { key: 'home', name: 'Home' },
  { key: 'play', name: 'Play' },
]

export function KidShell({
  tab, onTab, reads, xp, days, children,
}: {
  tab: KidTab
  onTab: (t: KidTab) => void
  /**
   * What this screen says, if somebody asks it to.
   *
   * One control that reads the screen you are on, rather than a speaker beside
   * every line. Never on arrival: a screen that starts talking by itself is
   * startling, and an adult who wants quiet should not have to race it to the
   * mute button.
   */
  reads: () => string
  xp: number
  days: number
  children: React.ReactNode
}) {
  /**
   * Whether it is reading right now, so the button can offer to stop.
   *
   * Recorded as *which screen* was being read rather than as a bare flag, and
   * then derived. Moving to another screen cancels the speech, and a flag
   * would have to be cleared in the effect that does the cancelling, which is
   * a setState inside an effect and a cascading render. Reading it back
   * against the current tab gets the same answer for free.
   */
  const [said, setSaid] = useState<KidTab | null>(null)
  const talking = said === tab

  /* Nothing should still be talking after they leave, or when they move
     between screens: two screens reading over each other is unusable. */
  useEffect(() => () => stop(), [])
  useEffect(() => { stop() }, [tab])

  return (
    <div className="kid">
      <Sky />

      <header className="kid-bar-top">
        <button
          className="kid-stat is-xp"
          onClick={() => onTab('rewards')}
          title="Your points. Tap to see what you have earned.">
          <Icon mark="star" size={17} /> {xp}
        </button>
        <button
          className="kid-stat is-days"
          onClick={() => onTab('rewards')}
          title="Days you have learned this week. Tap to see more.">
          <Icon mark="flame" size={17} /> {days} {days === 1 ? 'day' : 'days'}
        </button>

        <span className="kid-gap" />

        {/* One speaker, not two.

            There used to be a "read this page" button and a voice on/off
            toggle side by side, drawn with the same speaker at the same size,
            and with the voice off the pair read as one control rendered twice.
            Nobody could tell which of them did what.

            So this reads the page, and tapping it again stops. Whether the
            *games* narrate themselves is a standing preference rather than an
            action, so it moved to the grown up's screen, where the person who
            actually wants to set it is. */}
        {canSpeak() && (
          <button
            className={`kid-icon${talking ? ' is-on' : ''}`}
            aria-label={talking ? 'Stop reading' : 'Read this page'}
            title={talking ? 'Stop reading' : 'Read this page'}
            onClick={() => {
              if (talking) { stop(); setSaid(null); return }
              setSaid(tab)
              say(reads(), { asked: true, onEnd: () => setSaid(null) })
            }}>
            <Icon mark={talking ? 'mute' : 'speak'} size={21} />
          </button>
        )}

        {/* The grown up's door. In the header with the other adult controls
            rather than occupying a fifth of a child's navigation. */}
        <button
          className={`kid-icon${tab === 'profile' ? ' is-on' : ''}`}
          aria-label="For a grown up"
          title="For a grown up"
          onClick={() => onTab('profile')}>
          <Icon mark="grown" size={21} />
        </button>
      </header>

      <div className="kid-page">{children}</div>

      <nav className="kid-tabs" aria-label="Main">
        {TABS.map(t => (
          <button
            key={t.key}
            className={`kid-tab${tab === t.key ? ' is-on' : ''}`}
            aria-current={tab === t.key ? 'page' : undefined}
            onClick={() => onTab(t.key)}>
            <TabIcon tab={t.key} on={tab === t.key} />
            <span className="kid-tab-name">{t.name}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

/** A heading with an optional action beside it. */
export function KidHead({ title, onMore, moreLabel = 'See all' }: {
  title: string
  onMore?: () => void
  moreLabel?: string
}) {
  return (
    <div className="kid-head">
      <h2>{title}</h2>
      {onMore && <button className="kid-more" onClick={onMore}>{moreLabel}</button>}
    </div>
  )
}

/**
 * A progress bar with its numbers.
 *
 * "8 of 10" rather than a percentage: a six year old can be told it out loud
 * and can check it. Hidden entirely when nothing has been done, because an
 * empty bar over "0 of 10" is noise on a topic nobody has opened.
 */
export function KidBar({ done, total }: { done: number, total: number }) {
  if (done <= 0) return null
  const part = total > 0 ? Math.min(1, done / total) : 0
  return (
    <>
      <span className="kid-row-bar" aria-hidden>
        <i style={{ width: `${Math.round(part * 100)}%` }} />
      </span>
      <span className="kid-row-count">{done} of {total}</span>
    </>
  )
}
