import fs from 'node:fs'
import { chromium } from 'playwright'

const origin = 'http://127.0.0.1:4173'
const failures = []
const fail = (message) => failures.push(message)

function overlaps(rects) {
  for (let i = 0; i < rects.length; i += 1) {
    for (let j = i + 1; j < rects.length; j += 1) {
      const x = Math.max(0, Math.min(rects[i].right, rects[j].right) - Math.max(rects[i].left, rects[j].left))
      const y = Math.max(0, Math.min(rects[i].bottom, rects[j].bottom) - Math.max(rects[i].top, rects[j].top))
      if (x * y > 1) return true
    }
  }
  return false
}

async function inspect(page, label, screenshot) {
  page.on('pageerror', (error) => fail(`${label}: pageerror ${error.message}`))
  page.on('console', (message) => {
    if (message.type() === 'error' && !message.text().startsWith('Failed to load resource')) {
      fail(`${label}: console ${message.text()}`)
    }
  })

  await page.goto(`${origin}/insights`, { waitUntil: 'networkidle', timeout: 20000 })
  await page.locator('main#main-content').waitFor({ timeout: 10000 })
  await page.evaluate(async () => {
    const step = Math.max(innerHeight * 0.8, 420)
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      scrollTo(0, y)
      await new Promise((resolve) => setTimeout(resolve, 18))
    }
    scrollTo(0, 0)
    await Promise.all([...document.images].map((image) => image.decode().catch(() => {})))
  })
  await page.waitForTimeout(100)

  const data = await page.evaluate(() => {
    const cards = [...document.querySelectorAll('.insights-reference-card')]
      .map((element) => element.getBoundingClientRect())
      .filter((rect) => rect.width > 0 && rect.height > 0)
    const hero = document.querySelector('.insights-reference-hero')?.getBoundingClientRect()
    const featured = document.querySelector('.insights-reference-featured__visual')?.getBoundingClientRect()
    const logo = document.querySelector('.site-header__wordmark')
    const cta = document.querySelector('.insights-reference-cta__inner > a')

    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      h1: document.querySelectorAll('main h1').length,
      heading: (document.querySelector('.insights-reference-hero h1')?.textContent || '').replace(/\s+/g, ' ').trim(),
      cards,
      filterCount: document.querySelectorAll('.insights-reference-filter button').length,
      activeFilter: (document.querySelector('.insights-reference-filter button.is-active')?.textContent || '').trim(),
      heroWidth: hero?.width || 0,
      heroHeight: hero?.height || 0,
      featuredWidth: featured?.width || 0,
      featuredHeight: featured?.height || 0,
      logoHref: logo?.getAttribute('href') || '',
      ctaHref: cta?.getAttribute('href') || '',
      brokenImages: [...document.images]
        .filter((image) => !image.complete || image.naturalWidth === 0)
        .map((image) => image.currentSrc || image.src),
    }
  })

  if (data.scrollWidth > data.clientWidth + 1) fail(`${label}: horizontal overflow ${data.scrollWidth}/${data.clientWidth}`)
  if (data.h1 !== 1) fail(`${label}: H1 count ${data.h1}`)
  if (data.heading !== 'Ideas for systems that have to work.') fail(`${label}: heading ${data.heading}`)
  if (data.cards.length !== 5) fail(`${label}: insight cards ${data.cards.length}`)
  if (data.filterCount !== 6) fail(`${label}: filter count ${data.filterCount}`)
  if (data.activeFilter !== 'All insights') fail(`${label}: default filter ${data.activeFilter}`)
  if (data.heroWidth < 300 || data.heroHeight < 260) fail(`${label}: hero collapsed ${data.heroWidth}x${data.heroHeight}`)
  if (data.featuredWidth < 280 || data.featuredHeight < 260) fail(`${label}: featured visual collapsed ${data.featuredWidth}x${data.featuredHeight}`)
  if (data.logoHref !== '/') fail(`${label}: logo href ${data.logoHref}`)
  if (data.ctaHref !== '/contact') fail(`${label}: CTA href ${data.ctaHref}`)
  if (data.brokenImages.length) fail(`${label}: broken images ${data.brokenImages.join(',')}`)
  if (overlaps(data.cards)) fail(`${label}: insight cards overlap`)

  await page.getByRole('button', { name: 'Engineering', exact: true }).click()
  await page.waitForTimeout(80)
  const engineeringCount = await page.locator('.insights-reference-card').count()
  if (engineeringCount !== 1) fail(`${label}: Engineering filter returned ${engineeringCount} cards`)

  await page.getByRole('button', { name: 'All insights', exact: true }).click()
  await page.waitForTimeout(80)
  await page.evaluate(() => scrollTo(0, 0))
  await page.waitForTimeout(80)

  await page.screenshot({ path: screenshot, fullPage: true, animations: 'disabled' })
}

fs.mkdirSync('insights-reference-evidence', { recursive: true })
const browser = await chromium.launch({ headless: true })

for (const [name, width, height] of [['390', 390, 844], ['1440', 1440, 1000]]) {
  const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' })
  const page = await context.newPage()
  await inspect(page, `chromium ${name}`, `insights-reference-evidence/insights-${name}.png`)
  await context.close()
}

await browser.close()

const summary = `Failures: ${failures.length}\n${failures.join('\n')}\n`
fs.writeFileSync('insights-reference-evidence/summary.txt', summary)
console.log(summary)
if (failures.length) process.exit(1)
