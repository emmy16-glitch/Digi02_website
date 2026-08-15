import { Container } from '../../components/Container'
import '../../styles/solutions-transformation.css'

const stages = [
  {
    title: 'Connect',
    description: 'Bring the systems and information behind the operation into one working context.',
  },
  {
    title: 'Automate',
    description: 'Remove repeatable handoffs so routine work can move without unnecessary delay.',
  },
  {
    title: 'Transact',
    description: 'Carry activity through to the records and financial events that complete the work.',
  },
] as const

export function SolutionsTransformationSection() {
  return (
    <section className="operations-system" aria-labelledby="operations-system-title">
      <Container className="operations-system__inner">
        <header className="operations-system__intro">
          <p>Operating philosophy</p>
          <h2 id="operations-system-title">
            Work breaks down when its parts stop working together.
          </h2>
          <p>
            Digi02 connects software, workflows and transactions so the operation can move as one
            system instead of a collection of disconnected tools.
          </p>
        </header>

        <div className="operations-system__body">
          <div
            className="operations-system__visual"
            role="img"
            aria-label="Sales, inventory, finance and reporting connected through the operation"
          >
            <svg aria-hidden="true" viewBox="0 0 760 500">
              <path className="operations-system__connection" d="M150 105 C270 105 275 215 380 250" />
              <path className="operations-system__connection" d="M610 105 C490 105 485 215 380 250" />
              <path className="operations-system__connection" d="M150 395 C270 395 275 285 380 250" />
              <path className="operations-system__connection" d="M610 395 C490 395 485 285 380 250" />
              <path className="operations-system__connection operations-system__connection--through" d="M150 105 C310 180 450 320 610 395" />

              <g className="operations-system__node" transform="translate(150 105)">
                <circle r="8" />
                <text y="-24" textAnchor="middle">Sales</text>
              </g>

              <g className="operations-system__node" transform="translate(610 105)">
                <circle r="8" />
                <text y="-24" textAnchor="middle">Inventory</text>
              </g>

              <g className="operations-system__node operations-system__node--core" transform="translate(380 250)">
                <circle r="12" />
                <text y="-30" textAnchor="middle">Operations</text>
              </g>

              <g className="operations-system__node" transform="translate(150 395)">
                <circle r="8" />
                <text y="34" textAnchor="middle">Finance</text>
              </g>

              <g className="operations-system__node" transform="translate(610 395)">
                <circle r="8" />
                <text y="34" textAnchor="middle">Reporting</text>
              </g>
            </svg>
          </div>

          <div className="operations-system__stages" aria-label="Digi02 operating approach">
            {stages.map((stage) => (
              <article key={stage.title}>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
