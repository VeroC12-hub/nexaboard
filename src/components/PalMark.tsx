/**
 * The Learning-Pal mark, drawn and animated.
 *
 * ── Why the helper needed one ───────────────────────────────────────────────
 *
 * The button that opens the tutor was a white question mark on a navy disc.
 * A question mark is the universal sign for "help with this website", which is
 * exactly the wrong promise: this is the one thing on the screen that can
 * teach you, not a link to a support page. A learner stuck on indices has no
 * reason to press it.
 *
 * So it carries the product's own mark. The wordmark is already two colours
 * and a hyphen, "Learning in the blue of the left page, Pal in the orange of
 * the right", which describes an open book, so the mark is that book: a blue
 * left page, an orange right page, a spine between them.
 *
 * ── Why it moves ───────────────────────────────────────────────────────────
 *
 * A control that never changes is furniture, and furniture is not pressed.
 * The pages turn, slowly, the way a book does when somebody is reading it.
 * It is the slowest animation in the app on purpose: anything quicker in a
 * fixed corner competes with the lesson for attention, and the lesson must
 * win.
 *
 * Every motion is wrapped in `prefers-reduced-motion`, in `helper.css`. For a
 * learner who has asked their device for stillness this is a static book.
 */

export default function PalMark({ size = 30 }: { size?: number }) {
  return (
    <svg
      className="pal-mark"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden>
      {/* The leaf behind, standing in for the pages already turned. It is
          what gives the flip somewhere to come from. */}
      <path
        className="pal-leaf"
        d="M24 13 C31 8 39 8 43 10 L43 36 C39 34 31 34 24 39 Z"
        fill="var(--lp-orange-deep, #c96f1f)" />

      {/* Left page: Learning, in the blue. */}
      <path
        className="pal-left"
        d="M24 13 C17 8 9 8 5 10 L5 36 C9 34 17 34 24 39 Z"
        fill="var(--lp-blue, #2f88be)" />

      {/* Right page: Pal, in the orange. */}
      <path
        className="pal-right"
        d="M24 13 C31 8 39 8 43 10 L43 36 C39 34 31 34 24 39 Z"
        fill="var(--lp-orange, #ec8833)" />

      {/* The spine. Thin, and lighter than either page, so the two halves
          read as one book rather than two cards side by side. */}
      <path
        d="M24 13 L24 39"
        stroke="rgba(255,255,255,0.75)"
        strokeWidth="1.6"
        strokeLinecap="round" />

      {/* Lines of writing. They appear a word at a time, which is the whole
          idea of the product in two seconds. */}
      <g
        className="pal-words"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="2"
        strokeLinecap="round">
        <path className="pal-word pal-word-1" d="M10.5 18 h8" />
        <path className="pal-word pal-word-2" d="M10.5 23.5 h10" />
        <path className="pal-word pal-word-3" d="M29.5 18 h8" />
        <path className="pal-word pal-word-4" d="M29.5 23.5 h6" />
      </g>
    </svg>
  )
}
