// Run the tutor worker against the live site instead of a local dev server.
//
//   npm run tutor:prod
//
// ── Why this file rather than a flag ────────────────────────────────────────
//
// `.env` holds EDU_SITE=http://localhost:5173, which is right for development
// and wrong for everything else: with it, the worker answers only the lessons
// opened on this machine, and a learner on the deployed site waits for ever
// while the laptop that could serve them sits idle one line of configuration
// away. That failure is silent on both ends, which is what makes it worth a
// dedicated entry point rather than a thing to remember.
//
// An env prefix (`EDU_SITE=... npm run tutor`) would do the same job on a Mac
// and does nothing on Windows, where npm runs scripts through cmd. This works
// the same everywhere, which matters because this is the command that has to
// be run every day.
//
// The assignment happens here, after --env-file has already loaded .env, so it
// wins over the development value rather than being quietly overridden by it.
process.env.EDU_SITE = process.env.EDU_SITE_PROD || 'https://nexaboard-ten.vercel.app';

await import('./tutor-worker.mjs');
