import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'

const workItems = [
  {
    area: 'Autonomous systems',
    title: 'SkyGrid',
    statement: 'Mission planning and UAV field operations.',
    detail: 'Plan the mission, prepare the aircraft, follow the operation and review what happened without breaking the work into unrelated views.',
    href: '/solutions/skygrid',
  },
  {
    area: 'Mobility',
    title: 'DigiVolt',
    statement: 'A connected journey from request to arrival.',
    detail: 'Keep the trip request, vehicle assignment, route progress and arrival inside one understandable mobility flow.',
    href: '/solutions/digivolt',
  },
  {
    area: 'Enterprise systems',
    title: 'ERP + POS',
    statement: 'Keep the sale connected to the business behind it.',
    detail: 'Products, stock, payment choice, sale completion and receipt state remain part of the same transaction record.',
    href: '/solutions/enterprise-systems',
  },
] as const

export function WorkPage() {
  return (
    <div className="interior-page interior-page--work">
      <section className="interior-hero">
        <Container className="interior-hero__grid">
          <p className="interior-hero__kicker">Our Work</p>
          <div className="interior-hero__statement">
            <h1>Selected systems, shown in context.</h1>
            <p>
              A view into autonomous systems, electric mobility and enterprise software—and the
              operational problems each system is designed to support.
            </p>
          </div>
        </Container>
      </section>

      <section className="work-index" aria-label="Selected Digi02 work">
        <Container>
          {workItems.map((item) => (
            <article className="work-index__item" key={item.title}>
              <div className="work-index__meta">
                <span>{item.area}</span>
              </div>
              <div className="work-index__title">
                <h2>{item.title}</h2>
                <p>{item.statement}</p>
              </div>
              <div className="work-index__detail">
                <p>{item.detail}</p>
                <a href={item.href}>View {item.title} <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="page-cta page-cta--dark">
        <Container className="page-cta__inner">
          <div>
            <p>Have a similar challenge?</p>
            <h2>Show us the workflow, system or field problem.</h2>
          </div>
          <PrimaryButton href="/contact">Discuss a project <span aria-hidden="true">→</span></PrimaryButton>
        </Container>
      </section>
    </div>
  )
}
