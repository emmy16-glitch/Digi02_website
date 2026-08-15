import skyGridCinematic from '../assets/skygrid/skygrid-cinematic-control-room.webp'
import skyGridLogo from '../assets/skygrid/skygrid-logo.png'
import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

const lifecycle = [
  ['Plan', 'Define the operating area, route and mission intent before the aircraft moves.'],
  ['Prepare', 'Bring aircraft readiness, people and pre-flight checks into the same mission context.'],
  ['Operate', 'Keep route, field context and mission progression visible while the operation is active.'],
  ['Review', 'Return to the mission path, observations and operational events after the flight.'],
] as const

export function SkyGridPage() {
  return (
    <div className="product-page product-page--skygrid">
      <section className="product-hero product-hero--skygrid">
        <Container className="product-hero__grid">
          <div className="product-hero__identity">
            <img className="product-hero__product-logo" src={skyGridLogo} alt="SkyGrid" />
            <p>UAV operations by Digi02</p>
          </div>

          <div className="product-hero__statement">
            <h1>See more. React earlier. Operate smarter.</h1>
            <p>
              SkyGrid brings mission planning, aircraft readiness, field context and review into a
              single operational story for UAV work.
            </p>
            <PrimaryButton href="/contact">Discuss UAV operations <span aria-hidden="true">→</span></PrimaryButton>
          </div>
        </Container>

        <Container>
          <figure className="product-cinematic">
            <img src={skyGridCinematic} alt="SkyGrid UAV operations concept visualization" />
            <figcaption>SkyGrid concept visualization — not a photographed Digi02 deployment.</figcaption>
          </figure>
        </Container>
      </section>

      <section className="skygrid-capability-story" aria-labelledby="skygrid-capability-title">
        <Container className="skygrid-capability-story__grid">
          <div className="skygrid-capability-story__intro">
            <p>Mission capability</p>
            <h2 id="skygrid-capability-title">One mission context from planning to review.</h2>
          </div>

          <div className="skygrid-capability-story__visual" aria-label="Illustrative UAV mission path">
            <svg viewBox="0 0 900 560" aria-hidden="true">
              <path className="product-route product-route--base" d="M95 430 C180 320 260 350 335 250 C415 145 520 180 605 118 C675 66 756 90 812 150" />
              <path className="product-route product-route--active" d="M95 430 C180 320 260 350 335 250 C415 145 520 180 605 118 C675 66 756 90 812 150" />
            </svg>
            <span className="mission-point mission-point--one">Launch</span>
            <span className="mission-point mission-point--two">Mission area</span>
            <span className="mission-point mission-point--three">Return</span>
            <div className="mission-aircraft" aria-hidden="true">UAV</div>
          </div>
        </Container>
      </section>

      <section className="product-lifecycle" aria-labelledby="skygrid-lifecycle-title">
        <Container>
          <header className="section-heading section-heading--split">
            <p>Mission lifecycle</p>
            <h2 id="skygrid-lifecycle-title">The operation stays connected as its state changes.</h2>
          </header>

          <div className="product-lifecycle__list">
            {lifecycle.map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="product-outcome product-outcome--light">
        <Container className="product-outcome__grid">
          <div>
            <p>Operational objective</p>
            <h2>Make the mission easier to understand before, during and after flight.</h2>
          </div>
          <div>
            <p>
              SkyGrid is being developed around mission planning, readiness, field context and review.
              Final operating scope depends on the aircraft, environment and mission requirements.
            </p>
            <a href="/contact">Talk to Digi02 about SkyGrid <span aria-hidden="true">→</span></a>
          </div>
        </Container>
      </section>
    </div>
  )
}
