import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('..', import.meta.url)
const page = await readFile(new URL('./src/pages/InsightsPage.tsx', root), 'utf8')
const styles = await readFile(new URL('./src/styles/insights-reference.css', root), 'utf8')

test('positions Insights as Digi02 practical operating-technology knowledge hub', () => {
  assert.match(page, /Digi02 Insights \/ Practical operating knowledge/)
  assert.match(page, /Insights is Digi02&apos;s working library for practical lessons/)
  assert.match(page, /Perspectives from the work/)
  assert.match(page, /Field lessons/)
  assert.match(page, /Case-study learning/)
  assert.match(page, /Practical perspectives from the work behind the work/)
})

test('uses distinct real-people editorial image assets for every Insights visual', () => {
  const assetImports = [...page.matchAll(/\.\.\/assets\/editorial\/insights\/([^']+)/g)].map((match) => match[1])
  assert.equal(assetImports.length, 7)
  assert.equal(new Set(assetImports).size, 7)
  assert.ok(assetImports.every((asset) => asset.startsWith('insights-african-')))
  assert.doesNotMatch(page, /assets\/(generated\/insights|diginorth|digivolt|emerging-tech|erp-pos|skygrid)\//)
  assert.match(styles, /object-fit: cover/)
  assert.match(page, /Black African technology professionals/)
  assert.match(page, /Black African software developers/)
  assert.match(page, /Black African electronics engineers/)
})

test('preserves Insights discovery controls after the editorial redesign', () => {
  assert.match(page, /const \[activeCategory, setActiveCategory\] = useState<InsightCategory>\('All'\)/)
  assert.match(page, /const \[activeFormat, setActiveFormat\] = useState<InsightFormat>\('All'\)/)
  assert.match(page, /const \[query, setQuery\] = useState\(''\)/)
  assert.match(page, /matchesTopic/)
  assert.match(page, /matchesFormat/)
  assert.match(page, /matchesQuery/)
  assert.match(page, /aria-label="Filter insights by topic"/)
  assert.match(page, /aria-label="Filter insights by format"/)
  assert.match(page, /Reset filters/)
})
