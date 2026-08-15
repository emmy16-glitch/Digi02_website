import { Container } from '../components/Container'

const insights = [
  {
    topic: 'Enterprise systems',
    title: 'What should stay connected after a transaction?',
    summary: 'Sales, stock, approvals and reporting are easier to control when the business event and the record behind it remain part of the same system.',
    href: '/solutions/enterprise-systems',
    linkLabel: 'Explore enterprise systems',
  },
  {
    topic: 'Payroll',
    title: 'Where should payroll control sit?',
    summary: 'A dependable payroll process keeps inputs, review, approval and the completed record visible without rebuilding the workflow every month.',
    href: '/solutions/payroll-automation',
    linkLabel: 'Explore payroll automation',
  },
  {
    topic: 'Transactions',
    title: 'A payment is one event inside a wider process.',
    summary: 'Authorization matters, but so do reconciliation, the business record and the workflow that explains why the transaction happened.',
    href: '/solutions/payment-systems',
    linkLabel: 'Explore payment systems',
  },
  {
    topic: 'Autonomous systems',
    title: 'What should an operator know before, during and after a UAV mission?',
    summary: 'Mission planning, readiness, field context and review are more useful when they remain part of the same mission record.',
    href: '/solutions/skygrid',
    linkLabel: 'Explore SkyGrid',
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
            <h1>Questions worth answering before the software is built.</h1>
            <p>
              Short notes on enterprise systems, payroll, payments and UAV operations—focused on
              the decisions behind the technology.
            </p>
          </div>
        </Container>
      </section>

      <section className="insights-editorial" aria-label="Digi02 perspectives">
        <Container>
          <article className="insights-editorial__featured">
            <div className="insights-editorial__index">Featured</div>
            <div>
              <p>{featured.topic}</p>
              <h2>{featured.title}</h2>
              <p>{featured.summary}</p>
              <a href={featured.href}>
                {featured.linkLabel} <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>

          <div className="insights-editorial__secondary">
            {secondary.map((insight) => (
              <article key={insight.title}>
                <p>{insight.topic}</p>
                <h3>{insight.title}</h3>
                <p>{insight.summary}</p>
                <a href={insight.href}>
                  {insight.linkLabel} <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
