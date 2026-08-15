import { Container } from '../components/Container'

const insights = [
  {
    topic: 'Enterprise systems',
    title: 'ERP solutions for Nigerian enterprises',
    summary: 'How centralized operational data and reporting can improve visibility across business functions.',
    href: 'https://www.digi02.org/blog/erp-solutions-nigeria.html',
  },
  {
    topic: 'Payroll',
    title: 'Secure payroll systems for Nigerian companies',
    summary: 'A practical look at reducing payroll errors, improving control and supporting compliance workflows.',
    href: 'https://www.digi02.org/blog/payroll-solutions-nigeria.html',
  },
  {
    topic: 'Transactions',
    title: 'Building reliable payment solutions for Nigerian businesses',
    summary: 'Why transaction security, reconciliation and integration matter to the wider operating system.',
    href: 'https://www.digi02.org/blog/payment-solutions-nigeria.html',
  },
  {
    topic: 'Autonomous systems',
    title: 'UAV AutoPilot software and field operations',
    summary: 'How mission planning, autonomous control and data collection fit into operational UAV workflows.',
    href: 'https://www.digi02.org/blog/uav-autopilot-nigeria.html',
  },
] as const

export function InsightsPage() {
  const [featured, ...secondary] = insights

  return (
    <div className="interior-page interior-page--insights">
      <section className="interior-hero interior-hero--light">
        <Container className="interior-hero__grid">
          <p className="interior-hero__kicker">Insights</p>
          <div className="interior-hero__statement">
            <h1>Ideas from the systems we build around.</h1>
            <p>
              Enterprise operations, payroll, payments and autonomous systems — explained through
              the practical problems organizations are trying to solve.
            </p>
          </div>
        </Container>
      </section>

      <section className="insights-editorial" aria-label="Digi02 insights">
        <Container>
          <article className="insights-editorial__featured">
            <div className="insights-editorial__index">Featured</div>
            <div>
              <p>{featured.topic}</p>
              <h2>{featured.title}</h2>
              <p>{featured.summary}</p>
              <a href={featured.href} target="_blank" rel="noreferrer">
                Read the insight <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <div className="insights-editorial__secondary">
            {secondary.map((insight) => (
              <article key={insight.title}>
                <p>{insight.topic}</p>
                <h3>{insight.title}</h3>
                <p>{insight.summary}</p>
                <a href={insight.href} target="_blank" rel="noreferrer">
                  Read article <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
