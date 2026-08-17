import { useState, type FormEvent, type MouseEvent } from 'react'
import skyGridHero from '../assets/skygrid/skygrid-cinematic-control-room.webp'
import { Container } from '../components/Container'
import { Digi02LocationMap } from '../components/Digi02LocationMap'
import '../styles/contact-production.css'
import '../styles/contact-reference-tuning.css'
import '../styles/contact-location-map.css'

type ContactIconName = 'response' | 'expert' | 'secure' | 'location' | 'mail' | 'phone' | 'time' | 'calendar' | 'partnership' | 'support'

function ContactIcon({ name }: { name: ContactIconName }) {
  const paths: Record<ContactIconName, React.ReactNode> = {
    response: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m8.5 12.2 2.2 2.2 4.8-5M12 3v2M21 12h-2" />
      </>
    ),
    expert: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M5 20c.8-4.2 3-6.3 7-6.3s6.2 2.1 7 6.3M4 20h16" />
      </>
    ),
    secure: (
      <>
        <path d="M12 3 19 6v5.3c0 4.2-2.4 7.5-7 9.7-4.6-2.2-7-5.5-7-9.7V6l7-3Z" />
        <path d="m9.5 12 1.8 1.8 3.4-3.7" />
      </>
    ),
    location: (
      <>
        <path d="M12 21s6-5.2 6-11A6 6 0 1 0 6 10c0 5.8 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    phone: <path d="M7 3 4 5.2c.3 6.6 4.2 12.2 10.4 14.6L18 17l-3.4-4-2.4 1.8c-2.2-1.2-3.8-2.8-5-5L9 7.4 7 3Z" />,
    time: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 10h18M8 15h3M13 15h3" />
      </>
    ),
    partnership: (
      <>
        <path d="m3 12 4-4 4 3 3-3 7 6-4 4-3-2-3 3-8-7Z" />
        <path d="m7 8 3-3 5 2" />
      </>
    ),
    support: (
      <>
        <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 12h3v6H5a1 1 0 0 1-1-1v-5ZM20 12h-3v6h2a1 1 0 0 0 1-1v-5ZM17 19c-1.1 1.3-2.8 2-5 2" />
      </>
    ),
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {paths[name]}
    </svg>
  )
}

function buildEnquiry(form: FormData) {
  const name = String(form.get('name') ?? '').trim()
  const company = String(form.get('company') ?? '').trim()
  const email = String(form.get('email') ?? '').trim()
  const projectType = String(form.get('projectType') ?? '').trim()
  const budget = String(form.get('budget') ?? '').trim()
  const timeline = String(form.get('timeline') ?? '').trim()
  const message = String(form.get('message') ?? '').trim()

  return {
    subject: `Project enquiry from ${name || 'Digi02 website visitor'}`,
    body: [
      `Name: ${name}`,
      `Company: ${company}`,
      `Work email: ${email}`,
      `Project type: ${projectType}`,
      `Budget range: ${budget || 'Not specified'}`,
      `Timeline: ${timeline || 'Not specified'}`,
      '',
      'Project / challenge:',
      message,
    ].join('\n'),
  }
}

export function ContactPage() {
  const [status, setStatus] = useState('')
  const [messageLength, setMessageLength] = useState(0)
  const maxMessageLength = 1500

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const enquiry = buildEnquiry(new FormData(event.currentTarget))
    const mailto = `mailto:hello@digi02.com?subject=${encodeURIComponent(enquiry.subject)}&body=${encodeURIComponent(enquiry.body)}`

    setStatus('Your project brief is ready. Your email application should open next so you can review and send it.')
    window.location.href = mailto
  }

  function scrollToForm(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.querySelector('#contact-form')?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="contact-reference-page">
      <section className="contact-reference-hero" aria-labelledby="contact-reference-title">
        <div className="contact-reference-hero__media" aria-hidden="true">
          <img src={skyGridHero} alt="" decoding="async" fetchPriority="high" />
        </div>

        <Container className="contact-reference-hero__inner">
          <div className="contact-reference-hero__copy">
            <p className="contact-reference-kicker">Contact Digi02</p>
            <h1 id="contact-reference-title">
              <span className="contact-reference-hero__line">Let’s build technology{' '}</span>
              <span className="contact-reference-hero__line">that <em>drives real impact.</em></span>
            </h1>
            <p className="contact-reference-hero__lead">
              Whether you’re optimizing operations, modernizing infrastructure, or building something new, we’re here to help. Share your goals and our team will get back to you.
            </p>

            <div className="contact-reference-benefits" aria-label="Contact benefits">
              <div>
                <span className="contact-reference-benefits__icon"><ContactIcon name="response" /></span>
                <p><strong>Fast response</strong><small>Within 24 hours</small></p>
              </div>
              <div>
                <span className="contact-reference-benefits__icon"><ContactIcon name="expert" /></span>
                <p><strong>Expert team</strong><small>Ready to help</small></p>
              </div>
              <div>
                <span className="contact-reference-benefits__icon"><ContactIcon name="secure" /></span>
                <p><strong>Secure &amp; Confidential</strong><small>Your data is safe</small></p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="contact-reference-main" aria-label="Contact Digi02">
        <Container>
          <div className="contact-reference-layout">
            <form id="contact-form" className="contact-reference-form" onSubmit={handleSubmit}>
              <header>
                <h2>Send us a message</h2>
                <p>Tell us about your project or challenge and we’ll be in touch.</p>
              </header>

              <div className="contact-reference-form__grid">
                <label>
                  <span>Full name <b aria-hidden="true">*</b></span>
                  <span className="contact-reference-field">
                    <ContactIcon name="expert" />
                    <input name="name" autoComplete="name" placeholder="Your full name" required />
                  </span>
                </label>

                <label>
                  <span>Company <b aria-hidden="true">*</b></span>
                  <span className="contact-reference-field contact-reference-field--building">
                    <span aria-hidden="true">▥</span>
                    <input name="company" autoComplete="organization" placeholder="Your company name" required />
                  </span>
                </label>

                <label>
                  <span>Work email <b aria-hidden="true">*</b></span>
                  <span className="contact-reference-field">
                    <ContactIcon name="mail" />
                    <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
                  </span>
                </label>

                <label>
                  <span>Project type <b aria-hidden="true">*</b></span>
                  <span className="contact-reference-field contact-reference-field--select">
                    <span aria-hidden="true">⌘</span>
                    <select name="projectType" defaultValue="" required>
                      <option value="" disabled>Select project type</option>
                      <option>Autonomous systems / UAV</option>
                      <option>Electric mobility</option>
                      <option>Enterprise systems</option>
                      <option>Payment systems</option>
                      <option>E-Management</option>
                      <option>Payroll automation</option>
                      <option>Custom software</option>
                    </select>
                  </span>
                </label>

                <label>
                  <span>Budget range</span>
                  <span className="contact-reference-field contact-reference-field--select">
                    <span aria-hidden="true">▥</span>
                    <select name="budget" defaultValue="">
                      <option value="">Select budget range</option>
                      <option>Under ₦5m</option>
                      <option>₦5m – ₦20m</option>
                      <option>₦20m – ₦50m</option>
                      <option>₦50m+</option>
                      <option>Not sure yet</option>
                    </select>
                  </span>
                </label>

                <label>
                  <span>Timeline</span>
                  <span className="contact-reference-field contact-reference-field--select">
                    <ContactIcon name="calendar" />
                    <select name="timeline" defaultValue="">
                      <option value="">Select timeline</option>
                      <option>Immediately</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>6+ months</option>
                      <option>Exploring options</option>
                    </select>
                  </span>
                </label>
              </div>

              <label className="contact-reference-form__message">
                <span>Message <b aria-hidden="true">*</b></span>
                <textarea
                  name="message"
                  rows={6}
                  maxLength={maxMessageLength}
                  required
                  placeholder="Tell us about your project, goals, and how we can help..."
                  onChange={(event) => setMessageLength(event.currentTarget.value.length)}
                />
              </label>

              <div className="contact-reference-form__agreement">
                <label>
                  <input type="checkbox" name="consent" required />
                  <span>I agree to Digi02’s <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Service</a>.</span>
                </label>
                <span>{messageLength} / {maxMessageLength}</span>
              </div>

              <button className="contact-reference-submit" type="submit">
                Send message <span aria-hidden="true">→</span>
              </button>
              <p className="contact-reference-form__status" aria-live="polite">{status}</p>
            </form>

            <aside className="contact-reference-side">
              <section className="contact-reference-info" aria-labelledby="contact-info-title">
                <h2 id="contact-info-title">Contact information</h2>

                <div className="contact-reference-info__item">
                  <span><ContactIcon name="location" /></span>
                  <div>
                    <strong>Head Office – Kaduna</strong>
                    <p>Digi02 Tech Systems.<br />No. 2, The Hub,<br />Industrial Area, Farin Gida,<br />Mando, Kaduna, Nigeria.</p>
                  </div>
                </div>

                <div className="contact-reference-info__item">
                  <span><ContactIcon name="mail" /></span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:hello@digi02.com">hello@digi02.com</a>
                  </div>
                </div>

                <div className="contact-reference-info__item">
                  <span><ContactIcon name="phone" /></span>
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:+2347001230202">+234 700 123 0202</a>
                  </div>
                </div>

                <div className="contact-reference-info__item">
                  <span><ContactIcon name="time" /></span>
                  <div>
                    <strong>Response time</strong>
                    <p>We respond within 24 hours<br />on business days.</p>
                  </div>
                </div>
              </section>
            </aside>
          </div>

          <Digi02LocationMap />

          <div className="contact-reference-paths" aria-label="More ways to contact Digi02">
            <article>
              <span className="contact-reference-paths__icon"><ContactIcon name="calendar" /></span>
              <div>
                <h3>Book a call</h3>
                <p>Schedule a 30-minute call with our experts to discuss your needs.</p>
                <a href="mailto:hello@digi02.com?subject=Schedule%20a%20Digi02%20project%20call">Schedule now <span aria-hidden="true">→</span></a>
              </div>
            </article>
            <article>
              <span className="contact-reference-paths__icon"><ContactIcon name="partnership" /></span>
              <div>
                <h3>Partnerships</h3>
                <p>Explore partnership and collaboration opportunities with Digi02.</p>
                <a href="mailto:hello@digi02.com?subject=Digi02%20partnership%20enquiry">Explore partnerships <span aria-hidden="true">→</span></a>
              </div>
            </article>
            <article>
              <span className="contact-reference-paths__icon"><ContactIcon name="support" /></span>
              <div>
                <h3>Support</h3>
                <p>Need help with an existing solution? Our support team is here.</p>
                <a href="mailto:support@digi02.org">Get support <span aria-hidden="true">→</span></a>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="contact-reference-cta" aria-labelledby="contact-reference-cta-title">
        <Container className="contact-reference-cta__inner">
          <div>
            <h2 id="contact-reference-cta-title">Have a project in mind?</h2>
            <p>Let’s build technology that drives real results.</p>
          </div>
          <a href="#contact-form" onClick={scrollToForm}>
            Discuss your project <span aria-hidden="true">→</span>
          </a>
        </Container>
      </section>
    </div>
  )
}
