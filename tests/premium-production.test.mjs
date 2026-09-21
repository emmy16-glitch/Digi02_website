import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('../', import.meta.url)
const read = (path) => readFile(new URL(path, root), 'utf8')

const [app, layout, contact, solutions, content, sitemap, pkgText] = await Promise.all([
  read('src/App.tsx'),
  read('src/premium/components/layout.tsx'),
  read('src/premium/pages/Contact.tsx'),
  read('src/premium/pages/Solutions.tsx'),
  read('src/premium/data/content.ts'),
  read('public/sitemap.xml'),
  read('package.json'),
])

test('uses a Vite 8 compatible Tailwind plugin', () => {
  const pkg = JSON.parse(pkgText)
  assert.match(pkg.devDependencies.vite, /^\^8\./)
  assert.match(pkg.dependencies['@tailwindcss/vite'], /^\^4\.[3-9]/)
  assert.match(pkg.dependencies.tailwindcss, /^\^4\.[3-9]/)
})

test('current app owns routing, SEO and invalid-route noindex behavior', () => {
  assert.match(app, /<main id="main">/)
  assert.match(app, /href="#main"/)
  assert.match(app, /noindex, nofollow/)
  assert.match(app, /link\[rel="canonical"\]/)
  assert.match(app, /og:title/)
  assert.match(app, /twitter:description/)
  assert.match(app, /getSolution\(slug\) \? <SolutionDetailPage/)
  assert.match(app, /getInsight\(slug\) \? <InsightArticlePage/)
  assert.doesNotMatch(app, /main-content/)
})

test('mobile navigation supports Escape and exposes its controlled panel', () => {
  assert.match(layout, /menuButtonRef/)
  assert.match(layout, /event\.key !== "Escape"/)
  assert.match(layout, /aria-controls="mobile-navigation-panel"/)
  assert.match(layout, /id="mobile-navigation-panel"/)
  assert.match(layout, /aria-hidden=!\{open\}|aria-hidden=\{!open\}/)
})

test('contact page is the current mailto-based implementation', () => {
  assert.match(contact, /window\.location\.href = mailto/)
  assert.match(contact, /Nothing is stored on/)
  assert.match(contact, /Prepare enquiry/)
  assert.match(contact, /type="email"/)
  assert.doesNotMatch(contact, /contact-reference-form/)
})

test('DigiVolt store actions and current product status are wired into the premium site', () => {
  assert.match(content, /slug: "digivolt"[\s\S]*?status: "Built product"/)
  assert.match(solutions, /com\.digi02\.digivolt/)
  assert.match(solutions, /com\.digi02\.digivolt\.driver/)
  assert.match(solutions, /Get the rider app/)
  assert.match(solutions, /Get the driver app/)
})

test('sitemap covers every premium solution and insight slug', () => {
  const solutionBlock = content.match(/export const solutions:[\s\S]*?export const getSolution/)?.[0] ?? ''
  const insightBlock = content.match(/export const insights:[\s\S]*?export const getInsight/)?.[0] ?? ''
  const solutionSlugs = [...solutionBlock.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1])
  const insightSlugs = [...insightBlock.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1])

  assert.ok(solutionSlugs.length >= 7)
  assert.ok(insightSlugs.length >= 4)
  for (const slug of solutionSlugs) assert.match(sitemap, new RegExp('<loc>https://digi02\\.org/solutions/' + slug + '</loc>'))
  for (const slug of insightSlugs) assert.match(sitemap, new RegExp('<loc>https://digi02\\.org/insights/' + slug + '</loc>'))
  assert.match(sitemap, /<loc>https:\/\/digi02\.org\/privacy<\/loc>/)
})

test('active production/test files contain no pre-rebuild selector or machine-specific path', async () => {
  const paths = [
    'src/App.tsx',
    'src/premium/components/layout.tsx',
    'src/premium/pages/Contact.tsx',
    '.github/workflows/ci.yml',
  ]
  for (const path of paths) {
    const text = await read(path)
    assert.doesNotMatch(text, /main#main-content/)
    assert.doesNotMatch(text, /\/home\/ubuntu\/Digi02_website-reference/)
  }

  const testFiles = (await readdir(new URL('./', import.meta.url))).filter((name) => name.endsWith('.test.mjs'))
  assert.deepEqual(testFiles.sort(), ['premium-production.test.mjs'])
})
