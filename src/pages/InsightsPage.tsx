import { useMemo, useState } from 'react'
import insightsHero from '../assets/editorial/insights/insights-african-tech-roundtable.jpg'
import { Container } from '../components/Container'
import { PrimaryButton } from '../components/PrimaryButton'
import { getFeaturedInsight, insightCategories, insightFormats, insights, type InsightCategory, type InsightFormat } from '../data/insights'
import '../styles/insights-reference.css'

const featuredInsight = getFeaturedInsight()
const libraryInsights = insights.filter((insight) => !insight.featured)

export function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | InsightCategory>('All')
  const [activeFormat, setActiveFormat] = useState<'All' | InsightFormat>('All')
  const [query, setQuery] = useState('')

  const visibleInsights = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return libraryInsights.filter((insight) => {
      const matchesTopic = activeCategory === 'All' || insight.category === activeCategory
      const matchesFormat = activeFormat === 'All' || insight.format === activeFormat
      const searchableText = [insight.category, insight.format, insight.eyebrow, insight.title, insight.summary, insight.takeaway].join(' ').toLowerCase()
      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery)
      return matchesTopic && matchesFormat && matchesQuery
    })
  }, [activeCategory, activeFormat, query])

  return (
    <div className="insights-reference-page">
      <section className="insights-reference-hero" aria-labelledby="insights-reference-title"><div className="insights-reference-hero__media" aria-hidden="true"><img src={insightsHero} alt="" decoding="async" fetchPriority="high" /></div><Container className="insights-reference-hero__inner"><div className="insights-reference-hero__copy"><nav className="insights-reference-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><span>Insights</span></nav><p className="insights-reference-hero__label">Digi02 Insights / Practical operating knowledge</p><h1 id="insights-reference-title">Perspectives from the work <br />that keeps systems <span>moving.</span></h1><p className="insights-reference-hero__lead">Insights is Digi02&apos;s working library for practical lessons, field perspectives and case-study learning on the systems that help organisations operate with clarity.</p></div><div className="insights-reference-hero__signals" aria-label="Editorial themes"><div><span>01</span><strong>Field lessons</strong><small>Start with the operation.</small></div><div><span>02</span><strong>System decisions</strong><small>Make trade-offs visible.</small></div><div><span>03</span><strong>Case-study learning</strong><small>Share what delivery teaches.</small></div></div></Container></section>

      {featuredInsight ? <section className="insights-reference-featured" aria-labelledby="featured-insight-title"><Container className="insights-reference-featured__grid"><div className="insights-reference-featured__visual"><img src={featuredInsight.image} alt={featuredInsight.imageAlt} decoding="async" /><span>Editorial {featuredInsight.format.toLowerCase()} / {featuredInsight.eyebrow}</span></div><article className="insights-reference-featured__copy"><p>Featured {featuredInsight.format.toLowerCase()} / {featuredInsight.eyebrow} / {featuredInsight.readingTime}</p><h2 id="featured-insight-title">{featuredInsight.title}</h2><p>{featuredInsight.summary}</p><p className="insights-reference-featured__note">{featuredInsight.takeaway}</p><a href={`/insights/${featuredInsight.slug}`}>Read the field note <span aria-hidden="true">→</span></a></article></Container></section> : null}

      <section className="insights-reference-filter" aria-label="Filter insights"><Container className="insights-reference-filter__inner"><div className="insights-reference-filter__controls"><label className="insights-reference-search"><span className="sr-only">Search insights</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search ideas, systems, or topics" />{query ? <button type="button" onClick={() => setQuery('')} aria-label="Clear insight search">Clear</button> : null}</label><div className="insights-reference-filter__group" aria-label="Filter insights by topic"><span>Topic</span><div className="insights-reference-filter__buttons">{insightCategories.map((category) => <button className={activeCategory === category ? 'is-active' : undefined} key={category} onClick={() => setActiveCategory(category)} type="button">{category === 'All' ? 'All insights' : category}</button>)}</div></div><div className="insights-reference-filter__group" aria-label="Filter insights by format"><span>Format</span><div className="insights-reference-filter__buttons">{insightFormats.map((format) => <button className={activeFormat === format ? 'is-active' : undefined} key={format} onClick={() => setActiveFormat(format)} type="button">{format === 'All' ? 'All formats' : format}</button>)}</div></div></div><span>{visibleInsights.length} {visibleInsights.length === 1 ? 'perspective' : 'perspectives'}</span></Container></section>

      <section className="insights-reference-library" aria-labelledby="insights-library-title"><Container><header className="insights-reference-library__heading"><p>Browse Insights</p><h2 id="insights-library-title">Practical perspectives from the work behind the work.</h2></header><div className="insights-reference-library__grid" aria-live="polite">{visibleInsights.map((insight) => <article className="insights-reference-card" key={insight.slug}><div className="insights-reference-card__media"><img src={insight.image} alt={insight.imageAlt} loading="lazy" decoding="async" /></div><div className="insights-reference-card__body"><p>{insight.eyebrow} <span aria-hidden="true">/</span> {insight.format} <span aria-hidden="true">/</span> {insight.readingTime}</p><h3>{insight.title}</h3><p>{insight.summary}</p><p className="insights-reference-card__takeaway"><strong>Field note:</strong> {insight.takeaway}</p><a href={`/insights/${insight.slug}`}>Read the Insight <span aria-hidden="true">→</span></a></div></article>)}{visibleInsights.length === 0 ? <div className="insights-reference-empty"><p>No perspectives match this search.</p><button type="button" onClick={() => { setQuery(''); setActiveCategory('All'); setActiveFormat('All') }}>Reset filters</button></div> : null}</div></Container></section>

      <section className="insights-reference-principles" aria-labelledby="insights-principles-title"><Container className="insights-reference-principles__grid"><div><p>How we think</p><h2 id="insights-principles-title">Clarity before complexity.</h2></div><div className="insights-reference-principles__list"><article><span>01</span><h3>Explain the operation</h3><p>Technology makes more sense when the work, responsibility and constraints are visible first.</p></article><article><span>02</span><h3>Show the system</h3><p>Architecture, product evidence and workflow should do more of the explaining than marketing language.</p></article><article><span>03</span><h3>Connect to outcomes</h3><p>Every technical decision should be traceable to something the organization needs to operate, control or understand.</p></article></div></Container></section>
      <section className="insights-reference-cta" aria-labelledby="insights-reference-cta-title"><Container className="insights-reference-cta__inner"><div><p>Have a system question?</p><h2 id="insights-reference-cta-title">Bring us the real workflow and constraints.</h2></div><PrimaryButton href="/contact">Start a project brief <span aria-hidden="true">→</span></PrimaryButton></Container></section>
    </div>
  )
}
