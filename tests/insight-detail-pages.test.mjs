import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = '/home/ubuntu/Digi02_website-reference'
const [data, index, detail, app, styles] = await Promise.all([
  readFile(`${root}/src/data/insights.ts`, 'utf8'),
  readFile(`${root}/src/pages/InsightsPage.tsx`, 'utf8'),
  readFile(`${root}/src/pages/InsightDetailPage.tsx`, 'utf8'),
  readFile(`${root}/src/App.tsx`, 'utf8'),
  readFile(`${root}/src/styles/insight-detail.css`, 'utf8'),
])

test('defines six evidence-safe named-byline insight articles with individual slugs', () => {
  const slugs = [...data.matchAll(/slug: '([^']+)'/g)].map((match) => match[1])
  assert.equal(slugs.length, 6)
  assert.equal(new Set(slugs).size, 6)
  assert.match(data, /Digi02 Insights Desk/)
  assert.match(data, /Operational technology editorial team/)
  assert.match(data, /relatedSlugs/)
})

test('links featured and library cards to individual Insight routes while keeping related capabilities on detail pages', () => {
  assert.match(index, /href=\{`\/insights\/\$\{featuredInsight\.slug\}`\}/)
  assert.match(index, /href=\{`\/insights\/\$\{insight\.slug\}`\}/)
  assert.match(detail, /insight\.relatedCapability\.href/)
  assert.match(detail, /More from the Insights desk/)
})

test('registers SEO-aware Insight routes and preserves responsive reduced-motion-safe article presentation', () => {
  assert.match(app, /const insightRoutes = insights\.reduce/)
  assert.match(app, /\.\.\.insightRoutes/)
  assert.match(detail, /insight\.author\.name/)
  assert.match(styles, /@media \(max-width: 48rem\)/)
  assert.match(styles, /prefers-reduced-motion: reduce/)
})
