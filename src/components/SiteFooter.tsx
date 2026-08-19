import digi02OperationsLogo from '../assets/brand/digi02-logo-operations-light.png'
import { useState, type FormEvent } from 'react'
import { Container } from './Container'

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

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const email = newsletterEmail.trim()

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterError('Enter a valid email address to preview the subscription flow.')
      setNewsletterStatus('')
      return
    }

    setNewsletterError('')
    setNewsletterStatus('Demo confirmation: no email was sent or stored. Add the live Mailchimp form URL before launch.')
  }

  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__brand">
          <a href="/" aria-label="Digi02 home">
            <img src={digi02OperationsLogo} alt="Digi02 — Technology built for real operations" decoding="async" />
          </a>
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
            <form className="site-footer__newsletter-form" action={mailchimpDemoEndpoint} method="post" noValidate onSubmit={handleNewsletterSubmit} data-mailchimp-demo-endpoint={mailchimpDemoEndpoint}>
              <label htmlFor="footer-newsletter-email">Email address</label>
              <div className="site-footer__newsletter-fields">
                <input id="footer-newsletter-email" name="EMAIL" type="email" autoComplete="email" inputMode="email" placeholder="you@company.com" value={newsletterEmail} onChange={(event) => { setNewsletterEmail(event.target.value); setNewsletterError(''); setNewsletterStatus('') }} aria-invalid={Boolean(newsletterError)} aria-describedby="footer-newsletter-note footer-newsletter-error footer-newsletter-status" />
                <button type="submit">Subscribe <span aria-hidden="true">→</span></button>
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
