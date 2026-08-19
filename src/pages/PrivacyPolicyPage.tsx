import { Container } from '../components/Container'
import '../styles/privacy-policy.css'

export function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-page">
      <section className="privacy-policy-page__hero" aria-labelledby="privacy-policy-title">
        <Container>
          <nav className="privacy-policy-page__breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>Privacy Policy</span></nav>
          <p className="privacy-policy-page__kicker">Digi02 privacy</p>
          <h1 id="privacy-policy-title">Privacy Policy</h1>
          <p className="privacy-policy-page__lead">A concise explanation of how Digi02 will handle newsletter information when the live subscription service is connected.</p>
        </Container>
      </section>

      <section className="privacy-policy-page__content" aria-label="Privacy policy details">
        <Container>
          <div className="privacy-policy-page__grid">
            <aside><p>Last updated</p><strong>19 August 2026</strong></aside>
            <div>
              <section><h2>Newsletter demonstration</h2><p>The newsletter form currently shown on this website is a demonstration. It does not submit, transmit, store, or add email addresses to a mailing list.</p></section>
              <section><h2>When the service is live</h2><p>Before Digi02 enables a live subscription service, this policy will identify the email provider, the information collected, the purpose of processing, and available unsubscribe options. Visitors will be able to choose whether to subscribe.</p></section>
              <section><h2>Contact</h2><p>For privacy questions or to request an update when the live service launches, contact <a href="mailto:info@digi02.org">info@digi02.org</a>.</p></section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
