/**
 * An address that matches no route.
 *
 * Exists because the alternative is a blank page. Without a catch-all, React
 * Router renders nothing at all for an unknown path, and a white screen is the
 * one failure a visitor cannot report and nobody can diagnose from a
 * screenshot: it looks identical whether the site is broken, the link was
 * mistyped, or the network dropped the bundle.
 *
 * So it names the address that was asked for. That single detail is what turns
 * "your site is broken" into "that link has a typo" or "that page is not
 * deployed yet", without anybody needing to open developer tools.
 *
 * Deliberately plain, and deliberately not styled like any one part of the
 * product: it can be reached from the whiteboard, the school console or the
 * learner app, and dressing it as one of them would be a small lie about where
 * the visitor is.
 */

import { Link, useLocation } from 'react-router-dom'

export default function NotFound() {
  const { pathname } = useLocation()

  return (
    <main
      style={{
        minHeight: '60vh',
        display: 'grid',
        placeContent: 'center',
        padding: '40px 20px',
        textAlign: 'center',
        fontFamily: 'system-ui, sans-serif',
        color: '#1f2937',
      }}
    >
      <h1 style={{ margin: '0 0 10px', fontSize: '1.5rem', fontWeight: 650 }}>
        There is nothing at this address
      </h1>

      {/* The path, because this is the whole reason the page exists. */}
      <p style={{ margin: '0 0 6px', color: '#6b7280' }}>
        Nothing is published at{' '}
        <code style={{
          padding: '2px 6px',
          background: '#f3f4f6',
          borderRadius: 4,
          fontSize: '0.95em',
        }}>{pathname}</code>
      </p>

      <p style={{ margin: '0 0 22px', color: '#6b7280', fontSize: '0.95em' }}>
        The link may be mistyped, or that part of the site may not be live yet.
      </p>

      <p style={{ margin: 0 }}>
        <Link to="/" style={{ color: '#2563eb', fontWeight: 600 }}>
          Go to the home page
        </Link>
      </p>
    </main>
  )
}
