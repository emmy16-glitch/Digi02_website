import { useState, type FormEvent } from 'react'
import { Container } from './Container'
import globeMark from '../assets/brand/digi02-globe-mark.png'

const mailchimpDemoEndpoint = 'https://example.list-manage.com/subscribe/post?u=digi02-demo&id=newsletter-demo'

const footerGroups = [
  {
    label: 'Solutions',
    links: [
      { href: '/solutions/skygrid', label: 'SkyGrid' },
      { href: '/solutions/digivolt', label: 'DigiVolt' },
      { href: '/solutions/enterprise-systems', label: 'Enterprise Systems' },
      { href: '/solutions', label: 'All Solutions' },
    ],
  },
  {
    label: 'Industries',
    links: [
      { href: '/industries', label: 'Government' },
      { href: '/industries', label: 'Energy & Utilities' },
      { href: '/industries', label: 'Logistics' },
      { href: '/industries', label: 'Finance' },
      { href: '/industries', label: 'More Industries' },
    ],
  },
  {
    label: 'Company',
    links: [
      { href: '/company', label: 'About Us' },
      { href: '/company', label: 'Careers' },
      { href: '/company', label: 'Partners' },
      { href: '/contact', label: 'Contact Us' },
    ],
  },
  {
    label: 'Insights',
    links: [
      { href: '/insights', label: 'Blog' },
      { href: '/work', label: 'Case Studies' },
      { href: '/insights', label: 'News' },
      { href: '/insights', label: 'Resources' },
    ],
  },
] as const

export function SiteFooter() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterError, setNewsletterError] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('')
  const [newsletterFeedback, setNewsletterFeedback] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const isNewsletterSubmitting = newsletterFeedback === 'submitting'

  async function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isNewsletterSubmitting) return

    const email = newsletterEmail.trim()

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterError('Enter a valid email address to preview the subscription flow.')
      setNewsletterStatus('')
      setNewsletterFeedback('error')
      return
    }

    setNewsletterFeedback('submitting')
    setNewsletterError('')
    setNewsletterStatus('')

    try {
      await new Promise((resolve) => window.setTimeout(resolve, 420))
      setNewsletterFeedback('success')
      setNewsletterStatus('Demo confirmation: no email was sent or stored. Add the live Mailchimp form URL before launch.')
    } catch {
      setNewsletterFeedback('error')
      setNewsletterError('The newsletter demonstration could not be completed. Please try again.')
    }
  }

  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__brand">
          <a href="/" aria-label="Digi02 home">
            <span className="digi02-brand-lockup digi02-brand-lockup--footer" aria-hidden="true">
              <span className="digi02-brand-lockup__globe"><img src={globeMark} alt="" /></span>
              <span className="digi02-brand-lockup__name">Digi<span>02</span></span>
            </span>
          </a>
          <p>Technology built for<br />real operations.</p>
        </div>

        <div className="site-footer__groups">
          {footerGroups.map((group) => (
            <nav className="site-footer__group" aria-label={`${group.label} footer navigation`} key={group.label}>
              <strong>{group.label}</strong>
              {group.links.map((link) => (
                <a href={link.href} key={`${group.label}-${link.label}`}>
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        <div className="site-footer__contact">
          <strong>Let&apos;s connect</strong>
          <a href="mailto:info@digi02.org">info@digi02.org</a>
          <a href="tel:+2348169404088">+234 (0)81 6940 4088</a>
          <span className="site-footer__address">Mando, Kaduna, Nigeria</span>
        </div>

        <section className="site-footer__newsletter" aria-labelledby="newsletter-title">
          <div className="site-footer__newsletter-copy">
            <p className="site-footer__newsletter-kicker">Digi02 updates</p>
            <h2 id="newsletter-title">Operational signals, occasionally.</h2>
            <p>Receive selected perspectives on systems, infrastructure, and practical technology delivery.</p>
          </div>
          <div className="site-footer__newsletter-action">
            <form className="site-footer__newsletter-form" action={mailchimpDemoEndpoint} method="post" noValidate onSubmit={handleNewsletterSubmit} data-mailchimp-demo-endpoint={mailchimpDemoEndpoint} aria-busy={isNewsletterSubmitting}>
              <label htmlFor="footer-newsletter-email">Email address</label>
              <div className="site-footer__newsletter-fields">
                <input id="footer-newsletter-email" name="EMAIL" type="email" autoComplete="email" inputMode="email" placeholder="you@company.com" value={newsletterEmail} onChange={(event) => { setNewsletterEmail(event.target.value); setNewsletterError(''); setNewsletterStatus(''); setNewsletterFeedback('idle') }} aria-invalid={Boolean(newsletterError)} aria-describedby="footer-newsletter-note footer-newsletter-error footer-newsletter-status" disabled={isNewsletterSubmitting} />
                <button className={isNewsletterSubmitting ? 'is-loading' : undefined} type="submit" disabled={isNewsletterSubmitting}>
                  {isNewsletterSubmitting ? <><span className="site-footer__newsletter-spinner" aria-hidden="true" />Confirming…</> : <>Subscribe <span aria-hidden="true">→</span></>}
                </button>
              </div>
            </form>
            <p className="site-footer__newsletter-consent">By selecting Subscribe, you agree to receive updates when the live form is connected. Read our <a href="/privacy">Privacy Policy</a>.</p>
            <p id="footer-newsletter-note" className="site-footer__newsletter-note">Mailchimp demonstration only. This form does not submit, transmit, or store your email.</p>
            <p id="footer-newsletter-error" className="site-footer__newsletter-error" role="status">{newsletterError}</p>
            <p id="footer-newsletter-status" className="site-footer__newsletter-status" aria-live="polite">{newsletterStatus}</p>
          </div>
        </section>

        <div className="site-footer__legal">
          <span>© {new Date().getFullYear()} Digi02 Technologies Ltd. All rights reserved.</span>
          <span className="site-footer__legal-links">
            <a href="/company">Company</a>
            <a href="/contact">Contact</a>
          </span>
        </div>
      </Container>
    </footer>
  )
}
