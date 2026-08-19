import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type MouseEvent } from 'react'
import skyGridHero from '../assets/skygrid/skygrid-cinematic-control-room.webp'
import { Container } from '../components/Container'
import { Digi02LocationMap } from '../components/Digi02LocationMap'
import '../styles/contact-production.css'
import '../styles/contact-reference-tuning.css'
import '../styles/contact-location-map.css'
import '../styles/contact-modernisation.css'

type ContactIconName = 'response' | 'expert' | 'secure' | 'location' | 'mail' | 'phone' | 'time' | 'calendar' | 'partnership' | 'support' | 'linkedin'
type FieldName = 'name' | 'company' | 'email' | 'projectType' | 'budget' | 'timeline' | 'message' | 'consent'
type ContactValues = Record<FieldName, string | boolean>
type FieldErrors = Partial<Record<FieldName, string>>

const maxMessageLength = 1500
const initialValues: ContactValues = {
  name: '', company: '', email: '', projectType: '', budget: '', timeline: '', message: '', consent: false,
}
const requiredFields: FieldName[] = ['name', 'company', 'email', 'projectType', 'message', 'consent']
const contactFaqs = [
  {
    question: 'How quickly will Digi02 respond to my enquiry?',
    answer: 'We aim to respond within 24 hours on business days. Sharing your organisation, project type, and a clear challenge helps the right team prepare for the conversation.',
  },
  {
    question: 'What happens after I prepare an enquiry?',
    answer: 'The form prepares an email brief for you to review and send from your own email application. Once received, the Digi02 team will review the context and advise on the appropriate next step.',
  },
  {
    question: 'Can I visit the Kaduna office?',
    answer: 'Yes. Visits and on-site meetings are arranged in advance. Share your preferred date and time, and the team will confirm office availability before you travel.',
  },
  {
    question: 'Will our project information be handled confidentially?',
    answer: 'Use the enquiry form to share a concise project overview. If a deeper discussion is required, Digi02 can agree the appropriate confidentiality process before detailed information is exchanged.',
  },
  {
    question: 'Where can I get support for an existing Digi02 solution?',
    answer: 'Use the Support contact path below the map for help with an existing solution. For new projects, use the enquiry form so the request can be directed to the right team.',
  },
] as const

function ContactIcon({ name }: { name: ContactIconName }) {
  const paths: Record<ContactIconName, React.ReactNode> = {
    response: <><circle cx="12" cy="12" r="8" /><path d="m8.5 12.2 2.2 2.2 4.8-5M12 3v2M21 12h-2" /></>,
    expert: <><circle cx="12" cy="8" r="3" /><path d="M5 20c.8-4.2 3-6.3 7-6.3s6.2 2.1 7 6.3M4 20h16" /></>,
    secure: <><path d="M12 3 19 6v5.3c0 4.2-2.4 7.5-7 9.7-4.6-2.2-7-5.5-7-9.7V6l7-3Z" /><path d="m9.5 12 1.8 1.8 3.4-3.7" /></>,
    location: <><path d="M12 21s6-5.2 6-11A6 6 0 1 0 6 10c0 5.8 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    phone: <path d="M7 3 4 5.2c.3 6.6 4.2 12.2 10.4 14.6L18 17l-3.4-4-2.4 1.8c-2.2-1.2-3.8-2.8-5-5L9 7.4 7 3Z" />,
    time: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4M17 3v4M3 10h18M8 15h3M13 15h3" /></>,
    partnership: <><path d="m3 12 4-4 4 3 3-3 7 6-4 4-3 2-3 3-8-7Z" /><path d="m7 8 3-3 5 2" /></>,
    support: <><path d="M4 13v-2a8 8 0 0 1 16 0v2" /><path d="M4 12h3v6H5a1 1 0 0 1-1-1v-5ZM20 12h-3v6h2a1 1 0 0 1 1-1v-5ZM17 19c-1.1 1.3-2.8 2-5 2" /></>,
    linkedin: <path d="M5.2 3.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM3.8 8.5h2.8V20H3.8V8.5Zm4.6 0H11v1.57h.04c.36-.7 1.25-1.92 3.1-1.92 3.3 0 3.91 2.17 3.91 4.99V20h-2.8v-6.1c0-1.46-.03-3.33-2.03-3.33-2.04 0-2.35 1.59-2.35 3.22V20H8.4V8.5Z" fill="currentColor" />,
  }

  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[name]}</svg>
}

function validateField(name: FieldName, values: ContactValues) {
  const value = values[name]
  if (name === 'consent') return value ? '' : 'Please accept the privacy and terms notice to continue.'
  if (name === 'email') {
    if (!String(value).trim()) return 'Enter your work email address.'
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value)) ? '' : 'Enter a valid email address.'
  }
  if (name === 'message') {
    if (!String(value).trim()) return 'Tell us a little about your project or challenge.'
    return String(value).trim().length >= 20 ? '' : 'Add at least 20 characters so we can understand your enquiry.'
  }
  if (name === 'name') return String(value).trim() ? '' : 'Enter your full name.'
  if (name === 'company') return String(value).trim() ? '' : 'Enter your organisation name.'
  if (name === 'projectType') return String(value).trim() ? '' : 'Select a project type.'
  return ''
}

function validateForm(values: ContactValues) {
  return requiredFields.reduce<FieldErrors>((errors, name) => {
    const error = validateField(name, values)
    if (error) errors[name] = error
    return errors
  }, {})
}

function buildEnquiry(values: ContactValues) {
  const subject = `Project enquiry from ${String(values.name).trim() || 'Digi02 website visitor'}`
  const body = [
    `Name: ${String(values.name).trim()}`,
    `Company: ${String(values.company).trim()}`,
    `Work email: ${String(values.email).trim()}`,
    `Project type: ${String(values.projectType).trim()}`,
    `Budget range: ${String(values.budget).trim() || 'Not specified'}`,
    `Timeline: ${String(values.timeline).trim() || 'Not specified'}`,
    '',
    'Project / challenge:',
    String(values.message).trim(),
  ].join('\n')

  return `mailto:hello@digi02.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function FieldError({ id, error }: { id: string; error?: string }) {
  return error ? <span id={id} className="contact-reference-field-error" role="status">{error}</span> : null
}

export function ContactPage() {
  const [values, setValues] = useState<ContactValues>(initialValues)
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})
  const [errors, setErrors] = useState<FieldErrors>({})
  const [formStatus, setFormStatus] = useState('')
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const successDialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isSuccessModalOpen) return
    successDialogRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsSuccessModalOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isSuccessModalOpen])

  function updateField(name: FieldName, value: string | boolean) {
    const nextValues = { ...values, [name]: value }
    setValues(nextValues)
    if (touched[name]) setErrors((current) => ({ ...current, [name]: validateField(name, nextValues) }))
    if (formStatus) setFormStatus('')
  }

  function handleChange(name: FieldName) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      updateField(name, event.currentTarget instanceof HTMLInputElement && event.currentTarget.type === 'checkbox' ? event.currentTarget.checked : event.currentTarget.value)
    }
  }

  function handleBlur(name: FieldName) {
    return () => {
      setTouched((current) => ({ ...current, [name]: true }))
      setErrors((current) => ({ ...current, [name]: validateField(name, values) }))
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateForm(values)
    setTouched(requiredFields.reduce<Partial<Record<FieldName, boolean>>>((all, name) => ({ ...all, [name]: true }), {}))
    setErrors(nextErrors)

    const firstInvalid = requiredFields.find((name) => nextErrors[name])
    if (firstInvalid) {
      setFormStatus('Please review the highlighted fields before preparing your enquiry.')
      requestAnimationFrame(() => document.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus())
      return
    }

    setFormStatus('')
    setIsSuccessModalOpen(true)
  }

  function openEmailDraft() {
    window.location.href = buildEnquiry(values)
    setIsSuccessModalOpen(false)
  }

  function scrollToForm(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.querySelector('#contact-form')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }

  const fieldClass = (name: FieldName) => `contact-reference-form__label${touched[name] && errors[name] ? ' is-invalid' : ''}`

  return (
    <div className="contact-reference-page">
      <section className="contact-reference-hero" aria-labelledby="contact-reference-title">
        <div className="contact-reference-hero__media" aria-hidden="true"><img src={skyGridHero} alt="" decoding="async" fetchPriority="high" /></div>
        <Container className="contact-reference-hero__inner">
          <div className="contact-reference-hero__copy">
            <p className="contact-reference-kicker">Contact Digi02</p>
            <h1 id="contact-reference-title"><span className="contact-reference-hero__line">Let’s build technology </span><span className="contact-reference-hero__line">that <em>drives real impact.</em></span></h1>
            <p className="contact-reference-hero__lead">Whether you’re optimizing operations, modernizing infrastructure, or building something new, we’re here to help. Share your goals and our team will get back to you.</p>
            <div className="contact-reference-benefits" aria-label="Contact benefits">
              <div><span className="contact-reference-benefits__icon"><ContactIcon name="response" /></span><p><strong>Fast response</strong><small>Within 24 hours</small></p></div>
              <div><span className="contact-reference-benefits__icon"><ContactIcon name="expert" /></span><p><strong>Expert team</strong><small>Ready to help</small></p></div>
              <div><span className="contact-reference-benefits__icon"><ContactIcon name="secure" /></span><p><strong>Secure &amp; Confidential</strong><small>Your data is safe</small></p></div>
            </div>
          </div>
        </Container>
      </section>

      <section className="contact-reference-main" aria-label="Contact Digi02">
        <Container>
          <div className="contact-reference-layout">
            <form id="contact-form" className="contact-reference-form" noValidate onSubmit={handleSubmit} aria-describedby="contact-form-status">
              <header><p className="contact-reference-form__eyebrow">Start a conversation</p><h2>Send us a message</h2><p>Tell us about your project or challenge and we’ll prepare an enquiry brief for you to review and send.</p></header>
              <p className="contact-reference-form__required-note"><span aria-hidden="true">*</span> Required fields</p>

              <div className="contact-reference-form__grid">
                <label className={fieldClass('name')}><span>Full name <b aria-hidden="true">*</b></span><span className="contact-reference-field"><ContactIcon name="expert" /><input name="name" autoComplete="name" placeholder="Your full name" value={String(values.name)} onChange={handleChange('name')} onBlur={handleBlur('name')} aria-invalid={Boolean(touched.name && errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} /></span><FieldError id="name-error" error={touched.name ? errors.name : undefined} /></label>
                <label className={fieldClass('company')}><span>Company <b aria-hidden="true">*</b></span><span className="contact-reference-field contact-reference-field--building"><span aria-hidden="true">▥</span><input name="company" autoComplete="organization" placeholder="Your company name" value={String(values.company)} onChange={handleChange('company')} onBlur={handleBlur('company')} aria-invalid={Boolean(touched.company && errors.company)} aria-describedby={errors.company ? 'company-error' : undefined} /></span><FieldError id="company-error" error={touched.company ? errors.company : undefined} /></label>
                <label className={fieldClass('email')}><span>Work email <b aria-hidden="true">*</b></span><span className="contact-reference-field"><ContactIcon name="mail" /><input name="email" type="email" autoComplete="email" placeholder="you@company.com" value={String(values.email)} onChange={handleChange('email')} onBlur={handleBlur('email')} aria-invalid={Boolean(touched.email && errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} /></span><FieldError id="email-error" error={touched.email ? errors.email : undefined} /></label>
                <label className={fieldClass('projectType')}><span>Project type <b aria-hidden="true">*</b></span><span className="contact-reference-field contact-reference-field--select"><span aria-hidden="true">⌘</span><select name="projectType" value={String(values.projectType)} onChange={handleChange('projectType')} onBlur={handleBlur('projectType')} aria-invalid={Boolean(touched.projectType && errors.projectType)} aria-describedby={errors.projectType ? 'project-type-error' : undefined}><option value="" disabled>Select project type</option><option>Autonomous systems / UAV</option><option>Electric mobility</option><option>Enterprise systems</option><option>Payment systems</option><option>E-Management</option><option>Payroll automation</option><option>Custom software</option></select></span><FieldError id="project-type-error" error={touched.projectType ? errors.projectType : undefined} /></label>
                <label className={fieldClass('budget')}><span>Budget range</span><span className="contact-reference-field contact-reference-field--select"><span aria-hidden="true">▥</span><select name="budget" value={String(values.budget)} onChange={handleChange('budget')} onBlur={handleBlur('budget')}><option value="">Select budget range</option><option>Under ₦5m</option><option>₦5m – ₦20m</option><option>₦20m – ₦50m</option><option>₦50m+</option><option>Not sure yet</option></select></span></label>
                <label className={fieldClass('timeline')}><span>Timeline</span><span className="contact-reference-field contact-reference-field--select"><ContactIcon name="calendar" /><select name="timeline" value={String(values.timeline)} onChange={handleChange('timeline')} onBlur={handleBlur('timeline')}><option value="">Select timeline</option><option>Immediately</option><option>1–3 months</option><option>3–6 months</option><option>6+ months</option><option>Exploring options</option></select></span></label>
              </div>

              <label className={`${fieldClass('message')} contact-reference-form__message`}><span>Message <b aria-hidden="true">*</b></span><textarea name="message" rows={6} maxLength={maxMessageLength} placeholder="Tell us about your project, goals, and how we can help..." value={String(values.message)} onChange={handleChange('message')} onBlur={handleBlur('message')} aria-invalid={Boolean(touched.message && errors.message)} aria-describedby={errors.message ? 'message-error' : 'message-count'} /><FieldError id="message-error" error={touched.message ? errors.message : undefined} /></label>

              <div className="contact-reference-form__agreement">
                <label className={fieldClass('consent')}><input type="checkbox" name="consent" checked={Boolean(values.consent)} onChange={handleChange('consent')} onBlur={handleBlur('consent')} aria-invalid={Boolean(touched.consent && errors.consent)} aria-describedby={errors.consent ? 'consent-error' : undefined} /><span>I agree to Digi02’s <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Service</a>.</span><FieldError id="consent-error" error={touched.consent ? errors.consent : undefined} /></label>
                <span id="message-count">{String(values.message).length} / {maxMessageLength}</span>
              </div>

              <button className="contact-reference-submit" type="submit">Prepare enquiry <span aria-hidden="true">→</span></button>
              <p id="contact-form-status" className="contact-reference-form__status" aria-live="polite">{formStatus}</p>
            </form>

            <section className="contact-reference-faq" aria-labelledby="contact-faq-title">
              <header>
                <p>Before you reach out</p>
                <h2 id="contact-faq-title">Common questions</h2>
                <span>Quick guidance on enquiries, office visits, and existing support.</span>
              </header>
              <div className="contact-reference-faq__items">
                {contactFaqs.map((faq) => (
                  <details key={faq.question}>
                    <summary><span>{faq.question}</span><b aria-hidden="true">+</b></summary>
                    <div><p>{faq.answer}</p></div>
                  </details>
                ))}
              </div>
            </section>

            <aside className="contact-reference-side">
              <section className="contact-reference-info" aria-labelledby="contact-info-title">
                <h2 id="contact-info-title">Contact information</h2>
                <div className="contact-reference-info__item"><span><ContactIcon name="location" /></span><div><strong>Head Office – Kaduna</strong><p>Digi02 Tech Systems.<br />No. 2, The Hub,<br />Industrial Area, Farin Gida,<br />Mando, Kaduna, Nigeria.</p></div></div>
                <div className="contact-reference-info__item"><span><ContactIcon name="mail" /></span><div><strong>Email</strong><a href="mailto:hello@digi02.com">hello@digi02.com</a></div></div>
                <div className="contact-reference-info__item"><span><ContactIcon name="phone" /></span><div><strong>Phone</strong><a href="tel:+2347001230202">+234 700 123 0202</a></div></div>
              </section>

              <section className="contact-reference-hours" aria-labelledby="contact-hours-title">
                <header><span><ContactIcon name="time" /></span><div><p>Plan a visit</p><h2 id="contact-hours-title">Office availability</h2></div></header>
                <div className="contact-reference-hours__availability"><strong>Visits and on-site meetings are arranged in advance.</strong><p>Contact Digi02 with your preferred date and time. Our team will confirm office availability before you travel.</p></div>
                <p className="contact-reference-hours__note">Official opening hours will be published once confirmed.</p>
              </section>

              <section className="contact-reference-connect" aria-labelledby="contact-connect-title">
                <header><p>Connect online</p><h2 id="contact-connect-title">Stay in the loop</h2></header>
                <div><a href="https://ng.linkedin.com/company/digi02" target="_blank" rel="noreferrer"><ContactIcon name="linkedin" /><span><strong>LinkedIn</strong><small>Company updates</small></span><b aria-hidden="true">↗</b></a><a href="mailto:hello@digi02.com"><ContactIcon name="mail" /><span><strong>Email Digi02</strong><small>Start a conversation</small></span><b aria-hidden="true">↗</b></a><a href="/insights"><ContactIcon name="calendar" /><span><strong>Insights</strong><small>Read our latest thinking</small></span><b aria-hidden="true">→</b></a></div>
              </section>
            </aside>
          </div>

          <Digi02LocationMap />

          <div className="contact-reference-paths" aria-label="More ways to contact Digi02">
            <article><span className="contact-reference-paths__icon"><ContactIcon name="calendar" /></span><div><h3>Book a call</h3><p>Schedule a 30-minute call with our experts to discuss your needs.</p><a href="mailto:hello@digi02.com?subject=Schedule%20a%20Digi02%20project%20call">Schedule now <span aria-hidden="true">→</span></a></div></article>
            <article><span className="contact-reference-paths__icon"><ContactIcon name="partnership" /></span><div><h3>Partnerships</h3><p>Explore partnership and collaboration opportunities with Digi02.</p><a href="mailto:hello@digi02.com?subject=Digi02%20partnership%20enquiry">Explore partnerships <span aria-hidden="true">→</span></a></div></article>
            <article><span className="contact-reference-paths__icon"><ContactIcon name="support" /></span><div><h3>Support</h3><p>Need help with an existing solution? Our support team is here.</p><a href="mailto:support@digi02.org">Get support <span aria-hidden="true">→</span></a></div></article>
          </div>
        </Container>
      </section>

      <section className="contact-reference-cta" aria-labelledby="contact-reference-cta-title"><Container className="contact-reference-cta__inner"><div><h2 id="contact-reference-cta-title">Have a project in mind?</h2><p>Let’s build technology that drives real results.</p></div><a href="#contact-form" onClick={scrollToForm}>Discuss your project <span aria-hidden="true">→</span></a></Container></section>

      {isSuccessModalOpen && <div className="contact-reference-modal-backdrop" role="presentation" onMouseDown={() => setIsSuccessModalOpen(false)}><div className="contact-reference-modal" role="dialog" aria-modal="true" aria-labelledby="contact-success-title" aria-describedby="contact-success-description" ref={successDialogRef} tabIndex={-1} onMouseDown={(event) => event.stopPropagation()}><span className="contact-reference-modal__mark"><ContactIcon name="response" /></span><p className="contact-reference-modal__eyebrow">Enquiry ready</p><h2 id="contact-success-title">Your project brief is ready.</h2><p id="contact-success-description">We’ve formatted your enquiry for an email draft. Review it, add anything else you need, and send it from your email application.</p><div className="contact-reference-modal__actions"><button type="button" className="contact-reference-modal__primary" onClick={openEmailDraft}>Open email draft <span aria-hidden="true">→</span></button><button type="button" className="contact-reference-modal__secondary" onClick={() => setIsSuccessModalOpen(false)}>Continue browsing</button></div></div></div>}
    </div>
  )
}
