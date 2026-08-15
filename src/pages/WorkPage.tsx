import { Container } from '../components/Container'

const workItems = [
  {
    area: 'Autonomous systems',
    title: 'SkyGrid',
    statement: 'Mission planning and UAV field operations.',
    detail: 'Mission context, aircraft readiness, route progression and review are presented as one connected operational sequence.',
    href: '/solutions/skygrid',
  },
  {
    area: 'Mobility',
    title: 'DigiVolt',
    statement: 'A connected journey from request to arrival.',
    detail: 'Mobility states are presented as a clear operational sequence: request, assignment, route progress and completed arrival.',
    href: '/solutions/digivolt',
  },
  {
    area: 'Enterprise operations',
    title: 'ERP + POS',
    statement: 'The sale stays connected to the system behind it.',
    detail: 'A transactional workspace that links products, stock, payment choice, sale completion and receipt state in one coherent operational flow.',
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
            <h1>Systems are easier to trust when you can understand how they work.</h1>
            <p>
              Selected Digi02 work shown through the operational problem, the system logic and the
              experience built around it.
            </p>
          </div>
        </Container>
      </section>

      <section className="work-index" aria-label="Selected Digi02 work">
        <Container>
          {workItems.map((item, index) => (
            <article className="work-index__item" key={item.title}>
              <div className="work-index__meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item.area}</p>
              </div>
              <div className="work-index__title">
                <h2>{item.title}</h2>
                <p>{item.statement}</p>
              </div>
              <div className="work-index__detail">
                <p>{item.detail}</p>
                <a href={item.href}>Explore the system <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </div>
  )
}
