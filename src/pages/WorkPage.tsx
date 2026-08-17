import { useMemo, useState } from 'react'
import digiNorthVisual from '../assets/diginorth/diginorth-community-visual.png'
import digiVoltVisual from '../assets/digivolt/digivolt-electric-mobility-showcase.png'
import enterpriseVisual from '../assets/erp-pos/erp-pos-multidevice-showcase.png'
import skyGridAnalytics from '../assets/skygrid/skygrid-mission-analytics.webp'
import skyGridOperations from '../assets/skygrid/skygrid-operations-center.webp'
import skyGridRoute from '../assets/skygrid/skygrid-route-planner.webp'
import { Container } from '../components/Container'
import '../styles/work-reference.css'

type WorkCategory = 'Energy' | 'Public Sector' | 'Mobility' | 'Finance' | 'Logistics'

type WorkItem = {
  title: string
  category: WorkCategory
  summary: string
  href: string
  image: string
  imagePosition?: string
}

const filters = ['All Work', 'Energy', 'Public Sector', 'Mobility', 'Finance', 'Logistics'] as const

type WorkFilter = (typeof filters)[number]

const workItems: readonly WorkItem[] = [
  {
    title: 'Sterling Payment Gateway',
    category: 'Finance',
    summary: 'A secure, scalable payment infrastructure designed to process high-volume transactions with clear operational visibility.',
    href: '/solutions/payment-systems',
    image: enterpriseVisual,
  },
  {
    title: 'Kaduna State e-Management System',
    category: 'Public Sector',
    summary: 'A unified digital platform for workflows, approvals, records and citizen-facing services.',
    href: '/solutions/e-management',
    image: digiNorthVisual,
    imagePosition: 'center 45%',
  },
  {
    title: 'Fleet Operations Intelligence',
    category: 'Mobility',
    summary: 'Connected visibility for vehicle activity, route progress, operational status and mobility coordination.',
    href: '/solutions/digivolt',
    image: digiVoltVisual,
    imagePosition: 'center 58%',
  },
  {
    title: 'Enterprise Systems Rollout',
    category: 'Public Sector',
    summary: 'ERP, HR, payroll and operational modules brought into one dependable enterprise environment.',
    href: '/solutions/enterprise-systems',
    image: enterpriseVisual,
  },
  {
    title: 'Logistics Command Centre',
    category: 'Logistics',
    summary: 'A mission-oriented operational view for routes, field assets, coordination and status reporting.',
    href: '/solutions/skygrid',
    image: skyGridRoute,
  },
  {
    title: 'Grid Operations & Analytics',
    category: 'Energy',
    summary: 'Operational analytics and monitoring views for inspection planning, field intelligence and infrastructure decisions.',
    href: '/solutions/skygrid',
    image: skyGridAnalytics,
  },
] as const

const proofMetrics = [
  ['100+', 'Projects delivered'],
  ['50+', 'Clients across sectors'],
  ['10+', 'States impacted'],
  ['ISO 27001', 'Security & quality standards'],
] as const

function MetricIcon({ index }: { index: number }) {
  const icons = [
    <path key="briefcase" d="M5 8h14v10H5zM9 8V5h6v3M5 11h14" />,
    <path key="people" d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8-1a2.5 2.5 0 1 0 0-5M3 19c.6-3.2 2.4-5 5-5s4.4 1.8 5 5m1-6c3 0 5 1.8 5 5" />,
    <path key="globe" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c2.4 2.4 3.6 5.4 3.6 9S14.4 18.6 12 21M12 3C9.6 5.4 8.4 8.4 8.4 12s1.2 6.6 3.6 9M3 12h18" />,
    <path key="badge" d="M12 3l6 2v5c0 4.4-2 7.5-6 11-4-3.5-6-6.6-6-11V5l6-2Zm-2 9 1.5 1.5L15 10" />,
  ]

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      {icons[index]}
    </svg>
  )
}

function AfricaMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 120" className="work-reference-footprint__mark">
      <path d="M56 9 74 14l12 12 16 4 6 14-8 13-4 15-12 8-4 18-13 14-9-7-5-18-13-6-9-15-11-7-5-16 9-16 14-7 8-11 14 0 10-8Z" />
      <path d="M35 49c17 8 32 25 38 47M28 39c22 7 43 28 55 55M49 22c11 11 23 35 27 62" />
    </svg>
  )
}

export function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>('All Work')
  const [sort, setSort] = useState<'featured' | 'title'>('featured')

  const visibleWork = useMemo(() => {
    const filtered = activeFilter === 'All Work'
      ? [...workItems]
      : workItems.filter((item) => item.category === activeFilter)

    if (sort === 'title') {
      return filtered.sort((a, b) => a.title.localeCompare(b.title))
    }

    return filtered
  }, [activeFilter, sort])

  return (
    <div className="work-reference-page">
      <section className="work-reference-hero" aria-labelledby="work-reference-title">
        <Container className="work-reference-hero__grid">
          <div className="work-reference-hero__copy">
            <p className="work-reference-kicker">Our Work</p>
            <h1 id="work-reference-title">
              Selected work that <span>delivers operational impact.</span>
            </h1>
            <p>
              Explore how Digi02 partners with organisations across sectors to solve complex challenges,
              modernise operations, and deliver technology built around real work.
            </p>
          </div>

          <div className="work-reference-hero__proof" aria-label="Digi02 delivery indicators">
            {proofMetrics.map(([value, label], index) => (
              <div key={label}>
                <MetricIcon index={index} />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <main className="work-reference-main">
        <section className="work-reference-controls" aria-label="Filter selected work">
          <Container className="work-reference-controls__inner">
            <div className="work-reference-filters" role="group" aria-label="Work categories">
              {filters.map((filter) => (
                <button
                  className={activeFilter === filter ? 'is-active' : ''}
                  key={filter}
                  type="button"
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <label className="work-reference-sort">
              <span className="sr-only">Sort work</span>
              <select value={sort} onChange={(event) => setSort(event.target.value as 'featured' | 'title')}>
                <option value="featured">Sort by: Featured</option>
                <option value="title">Sort by: Title</option>
              </select>
            </label>
          </Container>
        </section>

        {(activeFilter === 'All Work' || activeFilter === 'Energy') && (
          <section className="work-reference-featured" aria-labelledby="featured-case-study-title">
            <Container>
              <article className="work-reference-featured__card">
                <div className="work-reference-featured__visual">
                  <img
                    src={skyGridOperations}
                    alt="Digi02 field operations and inspection system interface"
                    decoding="async"
                    fetchPriority="high"
                  />
                  <div className="work-reference-featured__overlay">
                    <p>Featured case study</p>
                    <span>Energy</span>
                    <h2 id="featured-case-study-title">Thermal Plant Inspection Automation</h2>
                    <p>
                      An inspection workflow that brings mission planning, field capture and operational review into one coordinated system.
                    </p>
                    <a href="/solutions/skygrid">View full case study <span aria-hidden="true">→</span></a>
                  </div>
                </div>

                <div className="work-reference-featured__story">
                  <div>
                    <span>01</span>
                    <h3>The challenge</h3>
                    <p>Manual inspection processes created fragmented records, slow review cycles and limited visibility across the operation.</p>
                  </div>
                  <div>
                    <span>02</span>
                    <h3>Our solution</h3>
                    <p>Digi02 connected mission planning, autonomous capture, inspection workflows and reporting into one operational flow.</p>
                  </div>
                  <div className="work-reference-featured__impact">
                    <span>03</span>
                    <h3>The impact</h3>
                    <strong>Faster</strong><p>inspection review</p>
                    <strong>Clearer</strong><p>operational records</p>
                    <strong>Safer</strong><p>field coordination</p>
                  </div>
                  <div className="work-reference-featured__tags" aria-label="Technologies used">
                    <span>AI / ML</span>
                    <span>Computer Vision</span>
                    <span>IoT</span>
                    <span>Cloud</span>
                  </div>
                </div>
              </article>
            </Container>
          </section>
        )}

        <section className="work-reference-grid-section" aria-live="polite" aria-label="Selected Digi02 projects">
          <Container>
            {visibleWork.length ? (
              <div className="work-reference-grid">
                {visibleWork.map((item) => (
                  <article className="work-reference-card" key={item.title}>
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                    />
                    <div className="work-reference-card__shade" aria-hidden="true" />
                    <div className="work-reference-card__content">
                      <span>{item.category}</span>
                      <h2>{item.title}</h2>
                      <p>{item.summary}</p>
                      <a href={item.href}>View case study <span aria-hidden="true">→</span></a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="work-reference-empty">No selected work is listed for this category yet.</p>
            )}
          </Container>
        </section>

        <section className="work-reference-footprint" aria-labelledby="work-footprint-title">
          <Container className="work-reference-footprint__grid">
            <div className="work-reference-footprint__intro">
              <AfricaMark />
              <div>
                <h2 id="work-footprint-title">Built in Nigeria.<br />Building for Africa.</h2>
                <p>Digi02 brings software, autonomous systems and operational technology together around the realities of organisations working across Africa.</p>
              </div>
            </div>

            <div className="work-reference-footprint__metrics">
              {proofMetrics.map(([value, label], index) => (
                <div key={label}>
                  <MetricIcon index={index} />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="work-reference-cta">
          <Container className="work-reference-cta__inner">
            <div>
              <h2>Have a project in mind?</h2>
              <p>Let&apos;s build technology that drives real results.</p>
            </div>
            <a href="/contact">Discuss your project <span aria-hidden="true">→</span></a>
          </Container>
        </section>
      </main>
    </div>
  )
}
