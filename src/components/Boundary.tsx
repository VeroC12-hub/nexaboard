/**
 * What a learner sees when a screen throws.
 *
 * ── Why this exists ────────────────────────────────────────────────────────
 *
 * Until now, nothing caught a render error anywhere in the app, so a thrown
 * exception unmounted the whole tree and left a white page. That is the worst
 * failure a web application has, and the reason is not that it looks bad: it
 * is unreportable. A learner cannot tell you what went wrong, a teacher
 * cannot tell whether the app is broken or the network is, and a screenshot
 * of it contains nothing. The `NotFound` route carries the same note about
 * the same problem for addresses, and this is its other half.
 *
 * ── What it does, and what it deliberately does not ────────────────────────
 *
 * It shows the error, in plain words, with the one piece of information that
 * makes a report useful, which is what the person was doing. It offers the
 * two recoveries that actually work: try the screen again, and go back to
 * safety. It does not reload the page automatically, because a crash loop
 * that reloads itself is how a learner loses work they had typed.
 *
 * It sends nothing anywhere. There is no error reporting service configured
 * on this project yet, and inventing one here would mean a decision about
 * where a Ghanaian child's data goes, taken quietly, inside a component. The
 * hook for it is `report`, one function, so wiring a service later is a
 * change in one place rather than a search through the tree.
 */

import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  /** Named so the message can say which part failed, for example "the lesson". */
  what?: string
}

interface State {
  error: Error | null
}

/**
 * Where a crash goes.
 *
 * The console, for now, which is at least visible to anybody debugging on a
 * real device. When an error service is chosen this is the single place it
 * is called from, and the thing to carry across is the component stack: a
 * bare message tells you a lesson threw, the stack tells you which piece of
 * the lesson did.
 */
function report(error: Error, info: ErrorInfo) {
  console.error('[crash]', error.message, info.componentStack)
}

export default class Boundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    report(error, info)
  }

  private retry = () => { this.setState({ error: null }) }

  render() {
    const { error } = this.state
    if (!error) return this.props.children

    const what = this.props.what ?? 'this screen'

    return (
      <div className="nx-crash" role="alert">
        <h1 className="nx-crash-head">Something went wrong</h1>
        <p className="nx-crash-body">
          {what.charAt(0).toUpperCase() + what.slice(1)} stopped working.
          Nothing you have saved is lost, and the rest of the app still works.
        </p>
        {/* The message verbatim. A learner will not read it and the person
            they send a photograph to will, and an exact string is worth more
            than any summary of it. */}
        <p className="nx-crash-detail">{error.message || String(error)}</p>
        <div className="nx-crash-actions">
          <button type="button" className="nx-crash-btn" onClick={this.retry}>
            Try again
          </button>
          <a className="nx-crash-btn is-quiet" href="/">
            Go to the start
          </a>
        </div>
      </div>
    )
  }
}
