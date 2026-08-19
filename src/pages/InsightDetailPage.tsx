import { Container } from '../components/Container'
import { getInsight, getRelatedInsights } from '../data/insights'
import '../styles/insight-detail.css'

export function InsightDetailPage({ slug }: { slug: string }) {
  const insight = getInsight(slug)

  if (!insight) {
    return <section className="insight-detail-missing"><Container><p>Insight not found.</p><a href="/insights">Back to Insights →</a></Container></section>
  }

  const relatedInsights = getRelatedInsights(insight)

  return (
    <article className="insight-detail-page">
      <header className="insight-detail-page__hero"><Container><nav className="insight-detail-page__breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><a href="/insights">Insights</a><span aria-hidden="true">›</span><span>{insight.eyebrow}</span></nav><p className="insight-detail-page__eyebrow">{insight.eyebrow} <span aria-hidden="true">/</span> {insight.format}</p><h1>{insight.title}</h1><p className="insight-detail-page__summary">{insight.summary}</p><div className="insight-detail-page__byline"><span>By</span><strong>{insight.author.name}</strong><small>{insight.author.role} <span aria-hidden="true">·</span> {insight.readingTime}</small></div></Container></header>

      <section className="insight-detail-page__article" aria-label="Insight article"><Container className="insight-detail-page__article-grid"><aside className="insight-detail-page__aside"><p>Practical takeaway</p><strong>{insight.takeaway}</strong><a href={insight.relatedCapability.href}>{insight.relatedCapability.label} <span aria-hidden="true">→</span></a></aside><div className="insight-detail-page__body">{insight.sections.map((section, index) => <section key={section.heading}><p className="insight-detail-page__section-number">{String(index + 1).padStart(2, '0')}</p><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div></Container></section>

      <section className="insight-detail-page__related" aria-labelledby="related-insights-title"><Container><p>Continue reading</p><h2 id="related-insights-title">More from the Insights desk.</h2><div>{relatedInsights.map((item) => <a href={`/insights/${item.slug}`} key={item.slug}><span>{item.eyebrow} <i aria-hidden="true">/</i> {item.readingTime}</span><strong>{item.title}</strong><b aria-hidden="true">→</b></a>)}</div><a className="insight-detail-page__back" href="/insights">Back to all Insights <span aria-hidden="true">↑</span></a></Container></section>
    </article>
  )
}
