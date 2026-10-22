import { useEffect } from 'react'
import { leaveAttendance, pingAttendance, startAttendance } from '../lib/attendance'

const PING_MS = 60_000

/**
 * Record this student's time in the class: open a stay on arrival, heartbeat
 * once a minute, close it on leaving. The server stamps every time, so the
 * minutes cannot be edited from the browser.
 *
 * A laptop that sleeps misses heartbeats; the server then closes the stay at
 * the last heartbeat and the next ping returns false, so a fresh stay begins.
 * If the database has not been migrated yet, start returns null and this does
 * nothing at all.
 */
export function useAttendance(participantId: string | null, active: boolean) {
  useEffect(() => {
    if (!participantId || !active) return
    let stay: string | null = null
    let stopped = false

    const open = async () => {
      stay = await startAttendance(participantId)
      if (stopped && stay) { leaveAttendance(stay); stay = null }
    }
    open()

    const timer = setInterval(async () => {
      if (!stay) return
      const ok = await pingAttendance(stay)
      if (!ok && !stopped) open()
    }, PING_MS)

    // A tab coming back from the background pings at once rather than
    // waiting up to a minute, which matters after a phone screen lock.
    const onVisible = async () => {
      if (document.visibilityState !== 'visible' || !stay) return
      const ok = await pingAttendance(stay)
      if (!ok && !stopped) open()
    }
    const onHide = () => { if (stay) leaveAttendance(stay); stay = null }
    // Back from the browser's back/forward cache: the old stay was closed.
    const onShow = (e: PageTransitionEvent) => { if (e.persisted && !stay && !stopped) open() }
    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('pagehide', onHide)
    window.addEventListener('pageshow', onShow)

    return () => {
      stopped = true
      clearInterval(timer)
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('pagehide', onHide)
      window.removeEventListener('pageshow', onShow)
      if (stay) leaveAttendance(stay)
    }
  }, [participantId, active])
}
