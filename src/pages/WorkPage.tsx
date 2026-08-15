import { Container } from '../components/Container'

const workItems = [
  {
    area: 'Autonomous systems',
    title: 'SkyGrid',
    statement: 'Mission planning and UAV field operations.',
    detail: 'A mission moves from planning and readiness through flight activity and review without relying on disconnected views of the work.',
    href: '/solutions/skygrid',
  },
  {
    area: 'Mobility',
    title: 'DigiVolt',
    statement: 'A connected journey from request to arrival.',
    detail: 'The mobility flow keeps request, assignment, route progress and arrival in one understandable journey.',
    href: '/solutions/digivolt',
  },
  {
    area: 'Enterprise operations',
    title: 'ERP + POS',
    statement: 'The sale stays connected to the system behind it.',
    detail: 'Products, stock, payment choice, sale completion and receipt state remain part of the same transaction flow.',
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
            <h1>See the system through the work it has to support.</h1>
            <p>
              Selected Digi02 products shown through their operating context, the decisions they
              support and the way information moves through them.
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
    </div>
  )
}
