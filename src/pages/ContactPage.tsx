import { useState, type FormEvent } from 'react'
import { Container } from '../components/Container'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const organization = String(form.get('organization') ?? '').trim()
    const project = String(form.get('project') ?? '').trim()

    const subject = encodeURIComponent(`Project enquiry from ${name || 'Digi02 website visitor'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${organization}\n\nProject / operational challenge:\n${project}`,
    )

    setSubmitted(true)
    window.location.href = `mailto:info@digi02.org?subject=${subject}&body=${body}`
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

            <label>
              <span>Organization</span>
              <input name="organization" autoComplete="organization" />
            </label>

            <label>
              <span>What are you trying to improve?</span>
              <textarea name="project" rows={7} required />
            </label>

            <div className="contact-form__submit">
              <button className="button button--primary" type="submit">
                Prepare email <span aria-hidden="true">→</span>
              </button>
              <p>
                {submitted
                  ? 'Your email application should open with the project brief prepared.'
                  : 'Submitting prepares the enquiry in your email application; nothing is sent automatically.'}
              </p>
            </div>
          </form>
        </Container>
      </section>
    </div>
  )
}
