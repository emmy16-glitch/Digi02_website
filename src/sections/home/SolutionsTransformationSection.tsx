import { Container } from '../../components/Container'
import '../../styles/solutions-transformation.css'

const principles = [
  {
    number: '01',
    title: 'Connect',
    description: 'Bring systems and information into the same working context.',
  },
  {
    number: '02',
    title: 'Automate',
    description: 'Remove repeated manual steps where the workflow does not need them.',
  },
  {
    number: '03',
    title: 'Transact',
    description: 'Keep business activity connected to the records and reporting behind it.',
  },
] as const

export function SolutionsTransformationSection() {
  return (
    <section className="operations-bridge" aria-labelledby="operations-bridge-title">
      <Container className="operations-bridge__inner">
        <div className="operations-bridge__intro">
          <p className="operations-bridge__eyebrow type-tech">
            Digi02 / Operational challenges
          </p>

          <h2 id="operations-bridge-title">
            Work breaks down when its parts stop working together.
          </h2>

          <p className="operations-bridge__summary">
            Digi02 connects the systems, workflows and transactions behind everyday operations.
          </p>
        </div>

        <div
          className="operations-bridge__principles"
          aria-label="How Digi02 approaches connected operations"
        >
          {principles.map((principle) => (
            <div className="operations-bridge__principle" key={principle.title}>
              <div className="operations-bridge__principle-heading">
                <span className="operations-bridge__number type-tech">
                  {principle.number}
                </span>
                <h3>{principle.title}</h3>
              </div>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
