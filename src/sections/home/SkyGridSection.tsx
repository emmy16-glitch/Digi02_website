import showcaseConcept from '../../assets/skygrid/skygrid-showcase-concept.png'
import missionAnalytics from '../../assets/skygrid/skygrid-mission-analytics.webp'
import { Container } from '../../components/Container'
import '../../styles/skygrid-section.css'

const missionStages = ['Plan', 'Prepare', 'Operate', 'Review'] as const

export function SkyGridSection() {
  return (
    <section className="skygrid-story" id="skygrid" aria-labelledby="skygrid-title">
      <Container className="skygrid-story__intro">
        <header className="skygrid-story__heading">
          <p>SkyGrid</p>
          <div>
            <span>UAV operations</span>
            <h2 id="skygrid-title">See more. React earlier. Operate smarter.</h2>
            <p>
              Plan missions, coordinate UAV operations and review field activity from one
              operational environment.
            </p>
            <a href="/solutions">
              Explore UAV systems <span aria-hidden="true">→</span>
            </a>
          </div>
        </header>

        <figure className="skygrid-story__cinematic">
          <img
            alt="SkyGrid mission showcase visualization"
            decoding="async"
            loading="eager"
            src={showcaseConcept}
          />
          <figcaption>Mission simulation / product visualization</figcaption>
        </figure>

        <ol className="skygrid-story__timeline" aria-label="SkyGrid mission workflow">
          {missionStages.map((stage) => (
            <li key={stage}>{stage}</li>
          ))}
        </ol>
      </Container>

      <div className="skygrid-dashboard">
        <Container className="skygrid-dashboard__inner">
          <header className="skygrid-dashboard__heading">
            <p>Mission software</p>
            <h3>Review the operation, not just the flight.</h3>
            <p>
              Return to mission history, field context and recorded operational events after the
              aircraft is back on the ground.
            </p>
          </header>

          <div className="skygrid-dashboard__visual">
            <figure className="skygrid-dashboard__screen">
              <img
                alt="SkyGrid Mission Overview showing post-flight analytics, flight summary, mission map and incident navigation"
                decoding="async"
                loading="eager"
                src={missionAnalytics}
              />
            </figure>

            <figure className="skygrid-dashboard__detail" aria-hidden="true">
              <img alt="" decoding="async" src={missionAnalytics} />
            </figure>
          </div>

          <div className="skygrid-dashboard__explanations">
            <article>
              <h4>Mission overview</h4>
              <p>Return to the recorded flight and its operational summary.</p>
            </article>
            <article>
              <h4>Field context</h4>
              <p>Inspect the mission location and the activity captured around it.</p>
            </article>
            <article>
              <h4>After-action review</h4>
              <p>Use activity and incident records to understand what happened.</p>
            </article>
          </div>
        </Container>
      </div>
    </section>
  )
}
