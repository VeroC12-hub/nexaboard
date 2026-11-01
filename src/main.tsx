import './styles/tokens.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { loadApproved, mergeFromServer } from './lib/education/generated-store'
import { loadCurricula, mergeCurricula } from './lib/education/curriculum-store'
import { flushReview, pullReview } from './lib/education/review-sync'

/**
 * Put approved generated curriculum back into the registries.
 *
 * Before the first render, and before anything asks for a lesson. Without it,
 * material a teacher approved would be served until the tab closed and then
 * quietly disappear, which looks to a school like the app forgetting rather
 * than like a bug.
 *
 * It only reads this device's own storage, so it is instant and cannot fail in
 * a way that should stop the app starting.
 */
/* Curricula first. An approved outline names the curriculum it belongs to, so
   if the curriculum is not defined yet the outline registers under a name
   nothing can resolve, and the school's subject silently does not appear. */
loadCurricula()
loadApproved()

/**
 * Then catch up with whatever this account did on its other devices.
 *
 * Deliberately after the render has been allowed to start, and deliberately
 * not awaited. The device already holds everything it knew a moment ago, so
 * there is nothing to wait for and nothing to show a spinner over: a school
 * with no connection gets exactly the app it got before this existed.
 *
 * What arrives is merged rather than substituted, and the registries are
 * loaded again afterwards so an approval made on the staff room laptop is in
 * use on the phone without anybody reloading the page. `mergeFromServer`
 * never deletes, because a row the server has not got is indistinguishable
 * from a row deleted somewhere else and only one of those readings is safe.
 *
 * `flushReview` is called in the same breath for the other direction: an
 * approval made while the connection was down is still in the outbox, and
 * nothing else would think to send it until the next write.
 */
void (async () => {
  try {
    void flushReview()
    const pulled = await pullReview()
    if (!pulled) return
    /* Curricula first, for the reason given above: an outline that names a
       curriculum nothing has defined registers under a name that cannot be
       resolved, and the school's subject silently does not appear. */
    mergeCurricula(pulled.curricula)
    mergeFromServer(pulled.lessons, pulled.outlines)
    loadCurricula()
    loadApproved()
  } catch { /* The app is already running on what the device held. */ }
})()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
