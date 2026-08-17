import { useMemo, useState } from 'react'
import digiNorthVisual from '../assets/diginorth/diginorth-community-visual.png'
import digiVoltVisual from '../assets/digivolt/digivolt-electric-mobility-showcase.png'
import emergingTechVisual from '../assets/emerging-tech/emerging-tech-learning-visual.png'
import enterpriseVisual from '../assets/erp-pos/erp-pos-multidevice-showcase.png'
import skyGridAnalytics from '../assets/skygrid/skygrid-mission-analytics.webp'
import skyGridRoutePlanner from '../assets/skygrid/skygrid-route-planner.webp'
import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'
import '../styles/insights-reference.css'

type InsightCategory = 'All' | 'Autonomous' | 'Enterprise' | 'Mobility' | 'Engineering' | 'Community'

type InsightItem = {
  category: Exclude<InsightCategory, 'All'>
  eyebrow: string
  title: string
  summary: string
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

const insights: readonly InsightItem[] = [
  {
    category: 'Enterprise',
    eyebrow: 'Enterprise systems',
    title: 'What should stay connected after a transaction?',
    summary:
      'Sales, stock, approvals and reporting are easier to control when the business event and the record behind it remain part of the same operating system.',
    href: '/solutions/enterprise-systems',
    linkLabel: 'Explore enterprise systems',
    image: enterpriseVisual,
    imageAlt: 'Enterprise operations interface visualization',
  },
  {
    category: 'Mobility',
    eyebrow: 'Mobility systems',
    title: 'Designing mobility software around the operation, not just the trip.',
    summary:
      'A useful mobility platform has to connect the rider journey with assignment, operational visibility and the systems that keep the service understandable.',
    href: '/solutions/digivolt',
    linkLabel: 'Explore DigiVolt',
    image: digiVoltVisual,
    imageAlt: 'DigiVolt electric mobility product visualization',
  },
  {
    category: 'Engineering',
    eyebrow: 'Engineering practice',
    title: 'When should custom software replace a workaround?',
    summary:
      'The important question is not whether software can be built. It is whether the workflow, ownership and information around the work are clear enough to engineer well.',
    href: '/solutions/custom-software',
    linkLabel: 'Explore custom software',
    image: emergingTechVisual,
    imageAlt: 'Digi02 engineering and learning pathway visualization',
  },
  {
    category: 'Community',
    eyebrow: 'Technology community',
    title: 'Why local context still matters when the engineering standard is global.',
    summary:
      'Technology has to fit the people, constraints and operating environment around it. Local understanding and disciplined engineering are not competing ideas.',
    href: '/company',
    linkLabel: 'About Digi02',
    image: digiNorthVisual,
    imageAlt: 'DigiNorth community editorial visualization',
  },
  {
    category: 'Autonomous',
    eyebrow: 'Mission data',
    title: 'The mission is not finished when the aircraft lands.',
    summary:
      'Review, evidence and operational records are part of the mission system too. The value of collected data depends on how clearly teams can understand and act on it.',
    href: '/solutions/skygrid',
    linkLabel: 'Explore SkyGrid',
    image: skyGridAnalytics,
    imageAlt: 'SkyGrid mission analytics interface',
  },
]

export function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<InsightCategory>('All')

  const visibleInsights = useMemo(
    () =>
      activeCategory === 'All'
        ? insights
        : insights.filter((insight) => insight.category === activeCategory),
    [activeCategory],
  )

  return (
    <div className="insights-reference-page">
      <section className="insights-reference-hero" aria-labelledby="insights-reference-title">
        <div className="insights-reference-hero__media" aria-hidden="true">
          <img src={skyGridAnalytics} alt="" decoding="async" fetchPriority="high" />
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
            <p>Featured perspective / Autonomous systems</p>
            <h2 id="featured-insight-title">What should an operator know before, during and after a UAV mission?</h2>
            <p>
              Mission planning, readiness, field context and review are more useful when they remain part of the same mission record.
            </p>
            <a href="/solutions/skygrid">Explore SkyGrid <span aria-hidden="true">→</span></a>
          </article>
        </Container>
      </section>

      <section className="insights-reference-filter" aria-label="Filter insights">
        <Container className="insights-reference-filter__inner">
          <div className="insights-reference-filter__buttons">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? 'is-active' : undefined}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category === 'All' ? 'All insights' : category}
              </button>
            ))}
          </div>
          <span>{visibleInsights.length} perspectives</span>
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
                  <p>{insight.eyebrow}</p>
                  <h3>{insight.title}</h3>
                  <p>{insight.summary}</p>
                  <a href={insight.href}>{insight.linkLabel} <span aria-hidden="true">→</span></a>
                </div>
              </article>
            ))}
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
