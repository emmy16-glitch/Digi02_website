import digivoltCar from '../assets/digivolt/digivolt-car-right.webp'
import skyGridCinematic from '../assets/skygrid/skygrid-cinematic-control-room.webp'
import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'
import '../styles/solutions-page.css'

const coreSolutions = [
  {
    number: '01',
    eyebrow: 'Autonomous systems',
    title: 'SkyGrid',
    href: '#skygrid-solution',
  },
  {
    number: '02',
    eyebrow: 'Electric mobility',
    title: 'DigiVolt',
    href: '#digivolt-solution',
  },
  {
    number: '03',
    eyebrow: 'Enterprise operations',
    title: 'ERP + POS',
    href: '#enterprise-solution',
  },
] as const

const digivoltStages = ['Request', 'Match', 'Navigate', 'Charge', 'Arrive'] as const

const enterpriseFlow = [
  {
    number: '01',
    title: 'Sale captured',
    body: 'The transaction starts once and stays connected to the records behind it.',
  },
  {
    number: '02',
    title: 'Inventory updated',
    body: 'Stock movement remains part of the same operational event instead of a separate task.',
  },
  {
    number: '03',
    title: 'Transaction recorded',
    body: 'Payment and sales activity stay tied to the business record that created them.',
  },
  {
    number: '04',
    title: 'Reporting stays current',
    body: 'The same connected flow supports the information teams use to review operations.',
  },
] as const

const supportingCapabilities = [
  {
    number: '01',
    title: 'E-management',
    body: 'Centralize operational records, approvals and reporting around the way the organization actually works.',
    href: '/solutions/e-management',
  },
  {
    number: '02',
    title: 'Payroll automation',
    body: 'Reduce repeated payroll work and keep calculations, records and approvals in one controlled flow.',
    href: '/solutions/payroll-automation',
  },
  {
    number: '03',
    title: 'Payment systems',
    body: 'Connect payment activity to the transaction records, controls and workflows behind it.',
    href: '/solutions/payment-systems',
  },
  {
    number: '04',
    title: 'Custom software',
    body: 'Engineer purpose-built applications where an off-the-shelf product cannot represent the operation properly.',
    href: '/solutions/custom-software',
  },
] as const

export function SolutionsPage() {
  return (
    <div className="solutions-page">
      <section className="solutions-page__hero" aria-labelledby="solutions-page-title">
        <Container className="solutions-page__hero-grid">
          <div className="solutions-page__hero-copy">
            <p className="solutions-page__eyebrow">Solutions</p>
            <h1 id="solutions-page-title">Technology built around the operation.</h1>
            <p className="solutions-page__lead">
              Digi02 designs systems for field operations, mobility, enterprise workflows and
              transactions — then connects them to the way people actually work.
            </p>
            <PrimaryButton href="/contact">
              Discuss your system <span aria-hidden="true">→</span>
            </PrimaryButton>
          </div>

          <nav className="solutions-page__index" aria-label="Core Digi02 solutions">
            <p>Core systems</p>
            {coreSolutions.map((solution) => (
              <a href={solution.href} key={solution.title}>
                <span className="solutions-page__index-number">{solution.number}</span>
                <span className="solutions-page__index-copy">
                  <small>{solution.eyebrow}</small>
                  <strong>{solution.title}</strong>
                </span>
                <span className="solutions-page__index-arrow" aria-hidden="true">
                  ↓
                </span>
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <section
        className="solutions-product solutions-product--skygrid"
        id="skygrid-solution"
        aria-labelledby="skygrid-solution-title"
      >
        <Container className="solutions-product__grid solutions-product__grid--media-first">
          <figure className="solutions-product__media solutions-product__media--skygrid">
            <img
              alt="SkyGrid concept visualization showing UAV operations in a control-room environment"
              decoding="async"
              loading="lazy"
              src={skyGridCinematic}
            />
            <div className="solutions-product__skygrid-route" aria-hidden="true">
              <svg viewBox="0 0 720 430" preserveAspectRatio="none">
                <path d="M64 334 C168 278 220 315 306 232 C392 148 463 224 548 145 C600 96 650 104 682 72" />
                <circle cx="64" cy="334" r="5" />
                <circle cx="306" cy="232" r="5" />
                <circle cx="548" cy="145" r="5" />
                <circle className="is-active" cx="682" cy="72" r="7" />
              </svg>
            </div>
            <figcaption>SkyGrid concept visualization / not a photographed deployment</figcaption>
          </figure>

          <div className="solutions-product__copy">
            <p className="solutions-product__number">01 / Autonomous systems</p>
            <h2 id="skygrid-solution-title">Mission work stays connected from plan to review.</h2>
            <p>
              SkyGrid brings UAV mission planning, operational coordination and field-data
              workflows into one system designed around demanding flight operations.
            </p>
            <ol className="solutions-product__sequence" aria-label="SkyGrid operating sequence">
              <li>
                <span>01</span>
                <strong>Plan</strong>
              </li>
              <li>
                <span>02</span>
                <strong>Control</strong>
              </li>
              <li>
                <span>03</span>
                <strong>Review</strong>
              </li>
            </ol>
            <a className="solutions-product__link" href="/solutions/skygrid">
              Explore SkyGrid <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Container>
      </section>

      <section
        className="solutions-product solutions-product--digivolt"
        id="digivolt-solution"
        aria-labelledby="digivolt-solution-title"
      >
        <Container>
          <div className="solutions-product__intro solutions-product__intro--split">
            <div>
              <p className="solutions-product__number">02 / Electric mobility</p>
              <h2 id="digivolt-solution-title">One visible journey from request to arrival.</h2>
            </div>
            <div>
              <p>
                DigiVolt connects ride requests, vehicle assignment, route progress and charging
                without turning each stage into a separate experience.
              </p>
              <a className="solutions-product__link" href="/solutions/digivolt">
                Explore DigiVolt <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div
            className="digivolt-preview"
            aria-label="Illustrative DigiVolt journey from request through charging to arrival"
          >
            <div className="digivolt-preview__surface" aria-hidden="true">
              <svg className="digivolt-preview__map" viewBox="0 0 1120 410" preserveAspectRatio="none">
                <g className="digivolt-preview__contours">
                  <path d="M15 82 C145 35 258 72 373 47 C503 20 622 60 755 31 C893 3 1005 38 1112 18" />
                  <path d="M3 135 C129 96 252 127 364 102 C505 72 620 119 747 91 C882 63 997 99 1117 70" />
                  <path d="M12 348 C150 308 255 350 384 320 C519 291 635 335 768 302 C900 270 1008 304 1118 276" />
                </g>
                <path
                  className="digivolt-preview__road-edge"
                  d="M44 298 C171 306 202 235 322 230 C451 223 470 125 589 143 C704 160 688 273 813 245 C912 222 930 137 1073 107"
                />
                <path
                  className="digivolt-preview__road"
                  d="M44 298 C171 306 202 235 322 230 C451 223 470 125 589 143 C704 160 688 273 813 245 C912 222 930 137 1073 107"
                />
                <path
                  className="digivolt-preview__route-complete"
                  d="M44 298 C171 306 202 235 322 230 C451 223 470 125 589 143 C628 149 655 166 674 189"
                />
              </svg>

              <img className="digivolt-preview__car" src={digivoltCar} alt="" />

              <div className="digivolt-preview__charger">
                <span aria-hidden="true">⚡</span>
                <strong>Charge</strong>
              </div>
            </div>

            <ol className="digivolt-preview__stages">
              {digivoltStages.map((stage, index) => (
                <li className={index === 2 ? 'is-current' : ''} key={stage}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{stage}</strong>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section
        className="solutions-product solutions-product--enterprise"
        id="enterprise-solution"
        aria-labelledby="enterprise-solution-title"
      >
        <Container>
          <div className="solutions-product__intro solutions-product__intro--split">
            <div>
              <p className="solutions-product__number">03 / Enterprise operations</p>
              <h2 id="enterprise-solution-title">Business activity should update the system once.</h2>
            </div>
            <div>
              <p>
                ERP + POS connects sales, inventory, transactions and reporting so day-to-day
                activity stays part of one operational record.
              </p>
              <a className="solutions-product__link solutions-product__link--dark" href="/solutions/enterprise-systems">
                Explore ERP + POS <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <ol className="enterprise-flow" aria-label="Illustrative connected enterprise workflow">
            {enterpriseFlow.map((step) => (
              <li key={step.title}>
                <div className="enterprise-flow__marker">
                  <span>{step.number}</span>
                </div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="enterprise-flow__note">Illustrative operating flow — not live business data.</p>
        </Container>
      </section>

      <section className="solutions-capabilities" aria-labelledby="solutions-capabilities-title">
        <Container className="solutions-capabilities__grid">
          <header className="solutions-capabilities__intro">
            <p>Supporting capabilities</p>
            <h2 id="solutions-capabilities-title">The systems around the product matter too.</h2>
            <p>
              Digi02 also engineers the workflow, automation and transaction layers that keep an
              organization coordinated behind the visible interface.
            </p>
          </header>

          <div className="solutions-capabilities__list">
            {supportingCapabilities.map((capability) => (
              <a href={capability.href} key={capability.title}>
                <span className="solutions-capabilities__number">{capability.number}</span>
                <span className="solutions-capabilities__copy">
                  <strong>{capability.title}</strong>
                  <small>{capability.body}</small>
                </span>
                <span className="solutions-capabilities__arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="solutions-page__closing" aria-labelledby="solutions-closing-title">
        <Container className="solutions-page__closing-inner">
          <div>
            <p>Need a system that does not fit a product box?</p>
            <h2 id="solutions-closing-title">Start with the operation.</h2>
          </div>
          <PrimaryButton href="/contact">
            Discuss your system <span aria-hidden="true">→</span>
          </PrimaryButton>
        </Container>
      </section>
    </div>
  )
}
