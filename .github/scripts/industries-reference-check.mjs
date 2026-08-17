import fs from 'node:fs'
import { chromium } from 'playwright'

const origin = 'http://127.0.0.1:4173'
const failures = []
const fail = (message) => failures.push(message)

function hasOverlap(rects) {
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

  await page.goto(`${origin}/industries`, { waitUntil: 'domcontentloaded', timeout: 20000 })
  await page.locator('main#main-content').waitFor({ timeout: 10000 })
  await page.evaluate(async () => {
    scrollTo(0, document.documentElement.scrollHeight)
    await new Promise((resolve) => setTimeout(resolve, 180))
    await Promise.all([...document.images].map((image) => image.decode().catch(() => {})))
    scrollTo(0, 0)
  })
  await page.waitForTimeout(100)

  const data = await page.evaluate(() => {
    const sectors = [...document.querySelectorAll('.industries-reference-sector')]
      .map((element) => element.getBoundingClientRect())
      .filter((rect) => rect.width > 0 && rect.height > 0)
    const hero = document.querySelector('.industries-reference-hero')?.getBoundingClientRect()
    const heroImage = document.querySelector('.industries-reference-hero__media img')
    const logo = document.querySelector('.site-header__wordmark')

    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      h1: document.querySelectorAll('main h1').length,
      heading: (document.querySelector('.industries-reference-hero h1')?.textContent || '').replace(/\s+/g, ' ').trim(),
      sectors,
      railCount: document.querySelectorAll('.industries-reference-rail__inner > a').length,
      heroWidth: hero?.width || 0,
      heroHeight: hero?.height || 0,
      heroImageWidth: heroImage instanceof HTMLImageElement ? heroImage.naturalWidth : 0,
      heroImageHeight: heroImage instanceof HTMLImageElement ? heroImage.naturalHeight : 0,
      logoHref: logo?.getAttribute('href') || '',
      logoLabel: logo?.getAttribute('aria-label') || '',
      ctaHref: document.querySelector('.industries-reference-cta__button')?.getAttribute('href') || '',
      relatedHrefs: [...document.querySelectorAll('.industries-reference-sector__content > a')].map((link) => link.getAttribute('href')),
      brokenImages: [...document.images]
        .filter((image) => !image.complete || image.naturalWidth === 0)
        .map((image) => image.currentSrc || image.src),
    }
  })

  if (data.scrollWidth > data.clientWidth + 1) fail(`${label}: horizontal overflow ${data.scrollWidth}/${data.clientWidth}`)
  if (data.h1 !== 1) fail(`${label}: H1 count ${data.h1}`)
  if (data.heading !== 'Different environments. Systems engineered to fit.') fail(`${label}: heading ${data.heading}`)
  if (data.sectors.length !== 6) fail(`${label}: sectors ${data.sectors.length}`)
  if (data.railCount !== 5) fail(`${label}: rail links ${data.railCount}`)
  if (data.heroWidth < 300 || data.heroHeight < 300) fail(`${label}: hero collapsed ${data.heroWidth}x${data.heroHeight}`)
  if (data.heroImageWidth < 400 || data.heroImageHeight < 200) fail(`${label}: hero image ${data.heroImageWidth}x${data.heroImageHeight}`)
  if (data.logoHref !== '/') fail(`${label}: logo href ${data.logoHref}`)
  if (data.logoLabel !== 'Digi02 home') fail(`${label}: logo label ${data.logoLabel}`)
  if (data.ctaHref !== '/contact') fail(`${label}: CTA ${data.ctaHref}`)
  if (data.relatedHrefs.length !== 6 || data.relatedHrefs.some((href) => !href?.startsWith('/solutions/'))) fail(`${label}: related routes`)
  if (data.brokenImages.length) fail(`${label}: broken images ${data.brokenImages.join(',')}`)
  if (hasOverlap(data.sectors)) fail(`${label}: sector overlap`)

  await page.screenshot({ path: screenshot, fullPage: true, animations: 'disabled' })
}

fs.mkdirSync('industries-reference-evidence', { recursive: true })
const browser = await chromium.launch({ headless: true })

for (const [name, width, height] of [['390', 390, 844], ['1440', 1440, 1000]]) {
  const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' })
  const page = await context.newPage()
  await inspect(page, `chromium ${name}`, `industries-reference-evidence/industries-${name}.png`)
  await context.close()
}

await browser.close()
const summary = `Failures: ${failures.length}\n${failures.join('\n')}\n`
fs.writeFileSync('industries-reference-evidence/summary.txt', summary)
console.log(summary)
if (failures.length) process.exit(1)
