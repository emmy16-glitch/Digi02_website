import fs from 'node:fs'
import { chromium } from 'playwright'

const origin = 'http://127.0.0.1:4173'
const failures = []
const fail = (message) => failures.push(message)

async function inspect(page, label, screenshot) {
  page.on('pageerror', (error) => fail(`${label}: pageerror ${error.message}`))
  page.on('console', (message) => {
    if (message.type() === 'error' && !message.text().startsWith('Failed to load resource')) {
      fail(`${label}: console ${message.text()}`)
    }
  })

  await page.goto(`${origin}/company`, { waitUntil: 'networkidle', timeout: 20000 })
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
    const hero = document.querySelector('.company-reference-hero')?.getBoundingClientRect()
    const culture = document.querySelector('.company-reference-culture')?.getBoundingClientRect()
    const heroImage = document.querySelector('.company-reference-hero__visual img')
    const cultureImage = document.querySelector('.company-reference-culture__visual img')
    const logo = document.querySelector('.site-header__wordmark')
    const cta = document.querySelector('.company-reference-cta__inner > a')

    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      h1: document.querySelectorAll('main h1').length,
      heading: (document.querySelector('.company-reference-hero h1')?.textContent || '').replace(/\s+/g, ' ').trim(),
      heroWidth: hero?.width || 0,
      heroHeight: hero?.height || 0,
      cultureWidth: culture?.width || 0,
      cultureHeight: culture?.height || 0,
      directionCount: document.querySelectorAll('.company-reference-direction article').length,
      timelineCount: document.querySelectorAll('.company-reference-timeline li').length,
      proofCount: document.querySelectorAll('.company-reference-proof__metrics > div').length,
      principleCount: document.querySelectorAll('.company-reference-about__principles > div').length,
      logoHref: logo?.getAttribute('href') || '',
      ctaHref: cta?.getAttribute('href') || '',
      heroImage: heroImage instanceof HTMLImageElement ? [heroImage.naturalWidth, heroImage.naturalHeight] : [0, 0],
      cultureImage: cultureImage instanceof HTMLImageElement ? [cultureImage.naturalWidth, cultureImage.naturalHeight] : [0, 0],
      brokenImages: [...document.images]
        .filter((image) => !image.complete || image.naturalWidth === 0)
        .map((image) => image.currentSrc || image.src),
    }
  })

  if (data.scrollWidth > data.clientWidth + 1) fail(`${label}: horizontal overflow ${data.scrollWidth}/${data.clientWidth}`)
  if (data.h1 !== 1) fail(`${label}: H1 count ${data.h1}`)
  if (data.heading !== 'Built in Kaduna. Building for Africa.') fail(`${label}: heading ${data.heading}`)
  if (data.heroWidth < 300 || data.heroHeight < 300) fail(`${label}: hero collapsed ${data.heroWidth}x${data.heroHeight}`)
  if (data.cultureWidth < 300 || data.cultureHeight < 180) fail(`${label}: culture section collapsed ${data.cultureWidth}x${data.cultureHeight}`)
  if (data.directionCount !== 4) fail(`${label}: direction blocks ${data.directionCount}`)
  if (data.timelineCount !== 7) fail(`${label}: timeline entries ${data.timelineCount}`)
  if (data.proofCount !== 5) fail(`${label}: proof metrics ${data.proofCount}`)
  if (data.principleCount !== 4) fail(`${label}: principle count ${data.principleCount}`)
  if (data.logoHref !== '/') fail(`${label}: logo href ${data.logoHref}`)
  if (data.ctaHref !== '/contact') fail(`${label}: CTA href ${data.ctaHref}`)
  if (data.heroImage[0] < 500 || data.heroImage[1] < 250) fail(`${label}: hero image missing ${data.heroImage.join('x')}`)
  if (data.cultureImage[0] < 500 || data.cultureImage[1] < 250) fail(`${label}: culture image missing ${data.cultureImage.join('x')}`)
  if (data.brokenImages.length) fail(`${label}: broken images ${data.brokenImages.join(',')}`)

  await page.screenshot({ path: screenshot, fullPage: true, animations: 'disabled' })
}

fs.mkdirSync('company-reference-evidence', { recursive: true })
const browser = await chromium.launch({ headless: true })

for (const [name, width, height] of [['390', 390, 844], ['1440', 1440, 1000]]) {
  const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' })
  const page = await context.newPage()
  await inspect(page, `chromium ${name}`, `company-reference-evidence/company-${name}.png`)
  await context.close()
}

await browser.close()

const summary = `Failures: ${failures.length}\n${failures.join('\n')}\n`
fs.writeFileSync('company-reference-evidence/summary.txt', summary)
console.log(summary)
if (failures.length) process.exit(1)
