import './styles/tokens.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { loadApproved } from './lib/education/generated-store'
import { loadCurricula } from './lib/education/curriculum-store'

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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
