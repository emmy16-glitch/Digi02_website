import { useMemo, useState } from 'react'
import digiNorthVisual from '../assets/diginorth/diginorth-community-visual.png'
import digiVoltVisual from '../assets/digivolt/digivolt-electric-mobility-showcase.png'
import emergingTechVisual from '../assets/emerging-tech/emerging-tech-learning-visual.png'
import enterpriseVisual from '../assets/erp-pos/erp-pos-multidevice-showcase.png'
import skyGridAnalytics from '../assets/skygrid/skygrid-mission-analytics.webp'
import skyGridRoutePlanner from '../assets/skygrid/skygrid-route-planner.webp'
import insightsHero from '../assets/generated/insights/insights-hero.png'
import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'
import '../styles/insights-reference.css'

type InsightCategory = 'All' | 'Autonomous' | 'Enterprise' | 'Mobility' | 'Engineering' | 'Community'
type InsightFormat = 'All' | 'Field note' | 'Perspective'

type InsightItem = {
  category: Exclude<InsightCategory, 'All'>
  format: Exclude<InsightFormat, 'All'>
  eyebrow: string
  readingTime: string
  title: string
  summary: string
  takeaway: string
  href: string
  linkLabel: string
  image: string
  imageAlt: string
}

const categories: readonly InsightCategory[] = [
  'All',
  'Autonomous',
  'Enterprise',
  'Mobility',
  'Engineering',
  'Community',
]

const formats: readonly InsightFormat[] = ['All', 'Field note', 'Perspective']

const insights: readonly InsightItem[] = [
  {
    category: 'Enterprise',
    format: 'Field note',
    eyebrow: 'Enterprise systems',
    readingTime: '4 min read',
    title: 'What should stay connected after a transaction?',
    summary:
      'Sales, stock, approvals and reporting are easier to control when the business event and the record behind it remain part of the same operating system.',
    takeaway: 'A transaction is only useful when its surrounding context remains visible to the people responsible for the next decision.',
    href: '/solutions/enterprise-systems',
    linkLabel: 'Explore enterprise systems',
    image: enterpriseVisual,
    imageAlt: 'Enterprise operations interface visualization',
  },
  {
    category: 'Mobility',
    format: 'Perspective',
    eyebrow: 'Mobility systems',
    readingTime: '5 min read',
    title: 'Designing mobility software around the operation, not just the trip.',
    summary:
      'A useful mobility platform has to connect the rider journey with assignment, operational visibility and the systems that keep the service understandable.',
    takeaway: 'The ride is one moment. The operating system must also make dispatch, exceptions, handoffs and review clear.',
    href: '/solutions/digivolt',
    linkLabel: 'Explore DigiVolt',
    image: digiVoltVisual,
    imageAlt: 'DigiVolt electric mobility product visualization',
  },
  {
    category: 'Engineering',
    format: 'Field note',
    eyebrow: 'Engineering practice',
    readingTime: '3 min read',
    title: 'When should custom software replace a workaround?',
    summary:
      'The important question is not whether software can be built. It is whether the workflow, ownership and information around the work are clear enough to engineer well.',
    takeaway: 'Before writing code, define the decision, the owner, the record and the point at which a team needs to act.',
    href: '/solutions/custom-software',
    linkLabel: 'Explore custom software',
    image: emergingTechVisual,
    imageAlt: 'Digi02 engineering and learning pathway visualization',
  },
  {
    category: 'Community',
    format: 'Perspective',
    eyebrow: 'Technology community',
    readingTime: '4 min read',
    title: 'Why local context still matters when the engineering standard is global.',
    summary:
      'Technology has to fit the people, constraints and operating environment around it. Local understanding and disciplined engineering are not competing ideas.',
    takeaway: 'Strong engineering becomes more useful when it starts with the realities of the people and institutions it is meant to serve.',
    href: '/company',
    linkLabel: 'About Digi02',
    image: digiNorthVisual,
    imageAlt: 'DigiNorth community editorial visualization',
  },
  {
    category: 'Autonomous',
    format: 'Field note',
    eyebrow: 'Mission data',
    readingTime: '6 min read',
    title: 'The mission is not finished when the aircraft lands.',
    summary:
      'Review, evidence and operational records are part of the mission system too. The value of collected data depends on how clearly teams can understand and act on it.',
    takeaway: 'The most valuable output of a mission is a record that gives the next operator enough context to decide with confidence.',
    href: '/solutions/skygrid',
    linkLabel: 'Explore SkyGrid',
    image: skyGridAnalytics,
    imageAlt: 'SkyGrid mission analytics interface',
  },
]

export function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<InsightCategory>('All')
  const [activeFormat, setActiveFormat] = useState<InsightFormat>('All')
  const [query, setQuery] = useState('')

  const visibleInsights = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return insights.filter((insight) => {
      const matchesTopic = activeCategory === 'All' || insight.category === activeCategory
      const matchesFormat = activeFormat === 'All' || insight.format === activeFormat
      const searchableText = [insight.category, insight.format, insight.eyebrow, insight.title, insight.summary, insight.takeaway].join(' ').toLowerCase()
      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery)
      return matchesTopic && matchesFormat && matchesQuery
    })
  }, [activeCategory, activeFormat, query])

  return (
    <div className="insights-reference-page">
      <section className="insights-reference-hero" aria-labelledby="insights-reference-title">
        <div className="insights-reference-hero__media" aria-hidden="true">
          <img src={insightsHero} alt="" decoding="async" fetchPriority="high" />
        </div>
        <Container className="insights-reference-hero__inner">
          <div className="insights-reference-hero__copy">
            <nav className="insights-reference-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">›</span>
              <span>Insights</span>
            </nav>
            <p className="insights-reference-hero__label">Digi02 / Engineering perspectives</p>
            <h1 id="insights-reference-title">
              Ideas for systems{' '}
              <br />
              that have to <span>work.</span>
            </h1>
            <p className="insights-reference-hero__lead">
              Notes on architecture, operations, automation and the decisions that shape dependable technology.
            </p>
          </div>

          <div className="insights-reference-hero__signals" aria-label="Editorial themes">
            <div><span>01</span><strong>Systems thinking</strong><small>Start with the operation.</small></div>
            <div><span>02</span><strong>Engineering decisions</strong><small>Explain the trade-offs.</small></div>
            <div><span>03</span><strong>Evidence</strong><small>Show what supports the claim.</small></div>
          </div>
        </Container>
      </section>

      <section className="insights-reference-featured" aria-labelledby="featured-insight-title">
        <Container className="insights-reference-featured__grid">
          <div className="insights-reference-featured__visual">
            <img
              src={skyGridRoutePlanner}
              alt="SkyGrid route-planning interface"
              decoding="async"
            />
            <span>Real product evidence / SkyGrid</span>
          </div>
          <article className="insights-reference-featured__copy">
            <p>Featured perspective / Autonomous systems / 6 min read</p>
            <h2 id="featured-insight-title">What should an operator know before, during and after a UAV mission?</h2>
            <p>
              Mission planning, readiness, field context and review are more useful when they remain part of the same mission record.
            </p>
            <p className="insights-reference-featured__note">
              A reliable mission system does not begin with a flight plan and end with a file upload. It gives the team a shared view of the objective, the constraints, the evidence collected, and the decisions that need to follow.
            </p>
            <a href="/solutions/skygrid">Explore SkyGrid <span aria-hidden="true">→</span></a>
          </article>
        </Container>
      </section>

      <section className="insights-reference-filter" aria-label="Filter insights">
        <Container className="insights-reference-filter__inner">
          <div className="insights-reference-filter__controls">
            <label className="insights-reference-search">
              <span className="sr-only">Search insights</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search ideas, systems, or topics"
              />
              {query ? <button type="button" onClick={() => setQuery('')} aria-label="Clear insight search">Clear</button> : null}
            </label>
            <div className="insights-reference-filter__group" aria-label="Filter insights by topic">
              <span>Topic</span>
              <div className="insights-reference-filter__buttons">
                {categories.map((category) => (
                  <button
                    className={activeCategory === category ? 'is-active' : undefined}
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    type="button"
                  >
                    {category === 'All' ? 'All topics' : category}
                  </button>
                ))}
              </div>
            </div>
            <div className="insights-reference-filter__group" aria-label="Filter insights by format">
              <span>Format</span>
              <div className="insights-reference-filter__buttons">
                {formats.map((format) => (
                  <button
                    className={activeFormat === format ? 'is-active' : undefined}
                    key={format}
                    onClick={() => setActiveFormat(format)}
                    type="button"
                  >
                    {format === 'All' ? 'All formats' : format}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <span>{visibleInsights.length} {visibleInsights.length === 1 ? 'perspective' : 'perspectives'}</span>
        </Container>
      </section>

      <section className="insights-reference-library" aria-labelledby="insights-library-title">
        <Container>
          <header className="insights-reference-library__heading">
            <p>Latest thinking</p>
            <h2 id="insights-library-title">Notes from the work behind the technology.</h2>
          </header>

          <div className="insights-reference-library__grid" aria-live="polite">
            {visibleInsights.map((insight) => (
              <article className="insights-reference-card" key={insight.title}>
                <div className="insights-reference-card__media">
                  <img src={insight.image} alt={insight.imageAlt} loading="lazy" decoding="async" />
                </div>
                <div className="insights-reference-card__body">
                  <p>{insight.eyebrow} <span aria-hidden="true">/</span> {insight.format} <span aria-hidden="true">/</span> {insight.readingTime}</p>
                  <h3>{insight.title}</h3>
                  <p>{insight.summary}</p>
                  <p className="insights-reference-card__takeaway"><strong>Field note:</strong> {insight.takeaway}</p>
                  <a href={insight.href}>{insight.linkLabel} <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
            {visibleInsights.length === 0 ? (
              <div className="insights-reference-empty">
                <p>No perspectives match this search.</p>
                <button type="button" onClick={() => { setQuery(''); setActiveCategory('All'); setActiveFormat('All') }}>Reset filters</button>
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="insights-reference-principles" aria-labelledby="insights-principles-title">
        <Container className="insights-reference-principles__grid">
          <div>
            <p>How we think</p>
            <h2 id="insights-principles-title">Clarity before complexity.</h2>
          </div>
          <div className="insights-reference-principles__list">
            <article><span>01</span><h3>Explain the operation</h3><p>Technology makes more sense when the work, responsibility and constraints are visible first.</p></article>
            <article><span>02</span><h3>Show the system</h3><p>Architecture, product evidence and workflow should do more of the explaining than marketing language.</p></article>
            <article><span>03</span><h3>Connect to outcomes</h3><p>Every technical decision should be traceable to something the organization needs to operate, control or understand.</p></article>
          </div>
        </Container>
      </section>

      <section className="insights-reference-cta" aria-labelledby="insights-reference-cta-title">
        <Container className="insights-reference-cta__inner">
          <div>
            <p>Have a system question?</p>
            <h2 id="insights-reference-cta-title">Bring us the real workflow and constraints.</h2>
          </div>
          <PrimaryButton href="/contact">Discuss your project <span aria-hidden="true">→</span></PrimaryButton>
        </Container>
      </section>
    </div>
  )
}
