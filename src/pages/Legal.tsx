/**
 * The privacy notice and the terms.
 *
 * ── Why these are a page in the app and not a PDF ──────────────────────────
 *
 * Because a learner has to be able to read them at the moment they are asked
 * to agree, on the phone they are holding, offline, in the same type as
 * everything else. A link to a document in a drive is a link most people do
 * not open.
 *
 * ── What is written here, and what is not ──────────────────────────────────
 *
 * Everything in the privacy notice is a description of what this code
 * actually does: the stores are the real localStorage keys, the tables are
 * the real tables, and the third parties are the ones the code genuinely
 * calls. It was written by reading the repository rather than by adapting a
 * template, which is the only way a privacy notice is worth anything.
 *
 * What is NOT here is anything only the owner can state: the legal entity,
 * the address, the contact address for a data request, and whether the
 * business is registered with Ghana's Data Protection Commission. Those are
 * marked below and must be filled in before launch. They are deliberately
 * left visible rather than guessed, because a privacy notice that states a
 * registration nobody made is worse than having none.
 *
 * This is a draft for a lawyer to check, not legal advice.
 */

import { Link } from 'react-router-dom'
import '../styles/legal.css'

/** Fill these in before launch. Each one appears in both documents. */
const ENTITY = '[LEGAL ENTITY NAME]'
const ADDRESS = '[REGISTERED ADDRESS, GHANA]'
const CONTACT = '[CONTACT EMAIL]'
const UPDATED = '1 November 2026'

function Page({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <main className="lg-page">
      <nav className="lg-nav">
        <Link to="/">Back to the app</Link>
        <span className="lg-sep">·</span>
        <Link to="/privacy">Privacy</Link>
        <span className="lg-sep">·</span>
        <Link to="/terms">Terms</Link>
      </nav>
      <h1 className="lg-title">{title}</h1>
      <p className="lg-updated">Last updated {UPDATED}</p>
      {children}
    </main>
  )
}

export function Privacy() {
  return (
    <Page title="Privacy notice">
      <p className="lg-lead">
        This explains what we hold about you and your child, why, where it
        goes, and how to get it back or have it deleted. It describes what the
        software actually does.
      </p>

      <h2>Who is responsible</h2>
      <p>
        {ENTITY}, of {ADDRESS}, is the data controller. Write to {CONTACT} for
        anything in this notice, including a request to see or delete your
        data.
      </p>

      <h2>What we hold</h2>
      <p>
        <strong>Your account.</strong> A name, a chosen handle, and an email
        address if you gave one. A password, which we never see: it is handled
        by our hosting provider and stored only as a hash.
      </p>
      <p>
        <strong>Each learner.</strong> A first name or nickname, the stage and
        year they are in, and how they prefer to be taught: whether they want
        the short or the full version, whether they would rather be shown or
        told, and whether they are catching up or going ahead. A learner is
        not required to use their real name, and we recommend a first name
        only.
      </p>
      <p>
        <strong>Their work.</strong> The questions they answered, whether each
        was right, whether a hint was used, and which kind of material it came
        through. This is what decides what is taught next. Answers are never
        edited or deleted by a parent or a school, because the teaching is
        built on them.
      </p>
      <p>
        <strong>What a school approves.</strong> Where a school uses the
        platform, the lessons its teachers generate and approve, and who
        approved them.
      </p>
      <p>
        <strong>Questions asked of the tutor.</strong> What a learner types to
        the tutor, with the topic and the learner profile, so the answer fits
        them.
      </p>
      <p>
        We do not collect a date of birth, a home address, a phone number, a
        photograph, or location. There is no advertising, no advertising
        identifier, and no third party analytics.
      </p>

      <h2>Where it is kept</h2>
      <p>
        Most of it is on the device, in the browser's own storage, which is
        why the app works with no connection. If you create an account, the
        same information is also kept on our hosted database so that it
        survives a lost phone and appears on a second device. Signing out does
        not erase the copy on the device; clearing the browser's site data
        does.
      </p>

      <h2>Who else sees it</h2>
      <p>
        <strong>Supabase</strong> hosts the database and handles sign in.
      </p>
      <p>
        <strong>Vercel</strong> serves the application.
      </p>
      <p>
        <strong>Anthropic</strong> receives what is sent to the tutor: the
        question, the topic, and the learner's teaching preferences. It is
        used to produce the answer, and under Anthropic's terms for business
        customers it is not used to train their models.
      </p>
      <p>
        Those providers run outside Ghana, so this data is transferred abroad.
        Nobody else receives it. We do not sell it, and we do not share it with
        advertisers.
      </p>
      <p>
        A school account can see the work of the learners it holds. A parent
        account can see the work of the children it holds. Neither can see any
        other learner.
      </p>

      <h2>Children</h2>
      <p>
        This platform is for children, including children well under thirteen.
        An account for a child under eighteen must be created by a parent,
        guardian or school, and the person creating it confirms that at sign
        up. A learner's record is deliberately not owned by the account that
        created it: deleting a parent's account removes the link, not the
        child's record, so that a child who changes school or later signs in
        for themselves keeps their own history.
      </p>

      <h2>How long we keep it</h2>
      <p>
        An account and its learners are kept until you ask us to delete them.
        Write to {CONTACT} and we will delete the account, its learners and
        their work from our database. Material a school approved stays with
        the school, because it belongs to the school rather than to the child.
      </p>

      <h2>Your rights</h2>
      <p>
        Under the Data Protection Act, 2012 (Act 843) you may ask to see what
        we hold, to correct it, to have it deleted, and to complain to the
        Data Protection Commission of Ghana. Write to {CONTACT} and we will
        answer within thirty days.
      </p>
      <p className="lg-todo">
        [BEFORE LAUNCH: state here whether {ENTITY} is registered as a data
        controller with the Data Protection Commission, and give the
        registration number. Do not publish this page claiming a registration
        that has not been made.]
      </p>

      <h2>Changes</h2>
      <p>
        If this notice changes in a way that affects what we do with your
        data, we will say so in the app rather than only changing this page.
      </p>
    </Page>
  )
}

export function Terms() {
  return (
    <Page title="Terms of use">
      <p className="lg-lead">
        These are the terms on which you may use the platform. By creating an
        account you agree to them.
      </p>

      <h2>Who we are</h2>
      <p>
        The service is provided by {ENTITY}, of {ADDRESS}. Contact: {CONTACT}.
      </p>

      <h2>Accounts</h2>
      <p>
        You must be eighteen or older to create an account. An account for a
        child must be created by their parent, guardian, or their school
        acting with the parents' knowledge. You are responsible for what
        happens under your account and for keeping your password to yourself.
      </p>

      <h2>What the service is</h2>
      <p>
        Lessons following the Ghanaian curriculum, and a tutor that answers
        questions. Written lessons have been read by a person. Material
        produced by the tutor on request has not, unless a teacher has
        approved it, and the app says which is which on the page.
      </p>
      <p>
        The tutor can be wrong. It is a teaching aid and not a substitute for
        a teacher, and nothing it produces should be relied on as examination
        guidance, medical, legal or financial advice. Check anything that
        matters.
      </p>

      <h2>Paying</h2>
      <p className="lg-todo">
        [BEFORE LAUNCH: payment is not implemented yet. When it is, state here
        the price, the billing period, how to cancel, what happens to access
        at the end of a paid period, and the refund position. Ghanaian
        consumers paying by mobile money will expect a clear cancellation
        route.]
      </p>

      <h2>Fair use</h2>
      <p>
        Use the service for teaching and learning. Do not resell it, do not
        attempt to extract the lesson library wholesale, do not use it to
        produce material for anybody other than your own learners, and do not
        try to break, overload or circumvent the limits on the tutor.
      </p>

      <h2>What belongs to whom</h2>
      <p>
        The lessons, the software and the designs remain ours. Work a learner
        produces remains theirs. A lesson generated for you is yours to use
        for your own teaching and learning, and not to republish as your own
        product.
      </p>

      <h2>Availability</h2>
      <p>
        We will try to keep the service running and we do not promise that it
        always will be. Lessons already on a device keep working with no
        connection; the tutor does not, because it needs one.
      </p>

      <h2>Ending it</h2>
      <p>
        You may stop using the service and ask us to delete your account at
        any time, by writing to {CONTACT}. We may suspend an account that
        breaks these terms, and will say why.
      </p>

      <h2>Liability</h2>
      <p>
        Nothing here limits liability that cannot be limited by law. Beyond
        that, our liability to you is limited to what you have paid us in the
        twelve months before the claim.
      </p>

      <h2>Law</h2>
      <p>
        These terms are governed by the laws of Ghana, and the courts of Ghana
        have jurisdiction.
      </p>
    </Page>
  )
}
