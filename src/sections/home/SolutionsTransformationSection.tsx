import { Container } from '../../components/Container'
import '../../styles/solutions-transformation.css'

const ecosystem = [
  {
    title: 'Systems',
    action: 'Connect',
    description: 'Bring the information behind everyday work into one usable context.',
  },
  {
    title: 'Workflows',
    action: 'Automate',
    description: 'Remove repeated handoffs where software can carry the operation forward.',
  },
  {
    title: 'Transactions',
    action: 'Transact',
    description: 'Keep business activity connected to the records and reporting behind it.',
  },
] as const

export function SolutionsTransformationSection() {
  return (
    <section className="operations-bridge" aria-labelledby="operations-bridge-title">
      <Container className="operations-bridge__inner">
        <header className="operations-bridge__intro">
          <p className="operations-bridge__eyebrow">What Digi02 actually does</p>
          <h2 id="operations-bridge-title">Make the operation work as one system.</h2>
          <p className="operations-bridge__summary">
            Digi02 connects the software, workflows and transactions behind the way an organization
            actually runs.
          </p>
        </header>

        <div className="operations-ecosystem" aria-label="Digi02 operational ecosystem">
          <div className="operations-ecosystem__path" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          {ecosystem.map((item) => (
            <article className="operations-ecosystem__stage" key={item.title}>
              <p className="operations-ecosystem__action">{item.action}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
