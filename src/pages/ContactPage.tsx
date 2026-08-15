import { useState, type FormEvent } from 'react'
import { Container } from '../components/Container'
import '../styles/contact-production.css'

function buildEnquiry(form: FormData) {
  const name = String(form.get('name') ?? '').trim()
  const email = String(form.get('email') ?? '').trim()
  const organization = String(form.get('organization') ?? '').trim()
  const phone = String(form.get('phone') ?? '').trim()
  const area = String(form.get('area') ?? '').trim()
  const project = String(form.get('project') ?? '').trim()

  return {
    name,
    subject: `Project enquiry from ${name || 'Digi02 website visitor'}`,
    body: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${organization || 'Not provided'}`,
      `Phone: ${phone || 'Not provided'}`,
      `Area of interest: ${area}`,
      '',
      'Project / operational challenge:',
      project,
    ].join('\n'),
  }
}

export function ContactPage() {
  const [preparedBrief, setPreparedBrief] = useState('')
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const enquiry = buildEnquiry(new FormData(event.currentTarget))
    const mailto = `mailto:info@digi02.org?subject=${encodeURIComponent(enquiry.subject)}&body=${encodeURIComponent(enquiry.body)}`

    setPreparedBrief(`${enquiry.subject}\n\n${enquiry.body}`)
    setStatus('Your enquiry is prepared. Your email application should open next; nothing has been sent automatically.')
    window.location.href = mailto
  }

  async function handleCopy() {
    if (!preparedBrief) return

    try {
      await navigator.clipboard.writeText(preparedBrief)
      setStatus('The prepared enquiry has been copied to your clipboard.')
    } catch {
      setStatus('Copying was blocked by the browser. You can still use the email links beside the form.')
    }
  }

  return (
    <div className="interior-page interior-page--contact">
      <section className="contact-intro">
        <Container className="contact-intro__grid">
          <div>
            <p>Contact Digi02</p>
            <h1>Tell us what needs to work better.</h1>
          </div>
          <p>
            Start with the operation, the constraint or the system that is failing to connect. We
            can discuss the right technical approach from there.
          </p>
        </Container>
      </section>

      <section className="contact-body">
        <Container className="contact-body__grid">
          <div className="contact-details">
            <div>
              <span>Email</span>
              <a href="mailto:info@digi02.org">info@digi02.org</a>
              <a href="mailto:support@digi02.org">support@digi02.org</a>
            </div>
            <div>
              <span>Call</span>
              <a href="tel:+2348169404088">+234 (0)81 6940 4088</a>
              <a href="tel:+2349067879766">+234 (0)90 6787 9766</a>
            </div>
            <div>
              <span>Office</span>
              <p>No. 2, The Hub, Industrial Area, Farin Gida, Mando, Kaduna, Nigeria.</p>
            </div>
            <div>
              <span>Opening hours</span>
              <p>Monday–Friday, 9 AM–6 PM<br />Saturday, 10 AM–4 PM</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <label>
                <span>Your name</span>
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                <span>Work email</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>

            <div className="contact-form__row">
              <label>
                <span>Organization</span>
                <input name="organization" autoComplete="organization" />
              </label>
              <label>
                <span>Phone</span>
                <input name="phone" type="tel" autoComplete="tel" inputMode="tel" />
              </label>
            </div>

            <label>
              <span>What does this relate to?</span>
              <select name="area" defaultValue="" required>
                <option value="" disabled>Select an area</option>
                <option>SkyGrid / UAV systems</option>
                <option>DigiVolt / electric mobility</option>
                <option>ERP, POS or e-management</option>
                <option>Payroll automation</option>
                <option>Payment systems</option>
                <option>Custom software or integration</option>
                <option>Other / not sure yet</option>
              </select>
            </label>

            <label>
              <span>What are you trying to improve?</span>
              <textarea
                name="project"
                rows={7}
                required
                placeholder="Describe the operation, workflow, constraint or existing system."
              />
            </label>

            <div className="contact-form__submit">
              <button className="button button--primary" type="submit">
                Prepare enquiry <span aria-hidden="true">→</span>
              </button>
              <p>
                This form prepares an email to Digi02. It does not transmit or store your information on this website.
              </p>
            </div>

            {preparedBrief ? (
              <div className="contact-form__prepared">
                <p aria-live="polite">{status}</p>
                <button className="contact-form__copy" type="button" onClick={handleCopy}>
                  Copy prepared enquiry
                </button>
              </div>
            ) : (
              <p className="contact-form__status" aria-live="polite">{status}</p>
            )}
          </form>
        </Container>
      </section>
    </div>
  )
}
