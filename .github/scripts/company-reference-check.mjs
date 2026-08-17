import fs from 'node:fs'
import { chromium } from 'playwright'

const origin = 'http://127.0.0.1:4173'
const failures = []
const fail = (message) => failures.push(message)

const expectedNames = [
  'John Okojere',
  'Covenant Iregbeyen',
  'Kosisochukwu Ugwubma',
  'Abraham Salifu',
  'Ini Esiset',
]

const expectedRoles = [
  'Ecosystem Lead',
  'Software Development Lead',
  'UI/UX Lead',
  'Cybersecurity Lead',
  'AI/Data Lead',
]

async function inspect(page, label, screenshot, isDesktop) {
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
    const teamSection = document.querySelector('.company-reference-team')?.getBoundingClientRect()
    const heroImage = document.querySelector('.company-reference-hero__visual img')
    const logo = document.querySelector('.site-header__wordmark')
    const cta = document.querySelector('.company-reference-cta__inner > a')
    const cards = [...document.querySelectorAll('.company-reference-team__card')]
    const portraits = [...document.querySelectorAll('.company-reference-team__portrait img')]

    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      h1: document.querySelectorAll('main h1').length,
      heading: (document.querySelector('.company-reference-hero h1')?.textContent || '').replace(/\s+/g, ' ').trim(),
      heroWidth: hero?.width || 0,
      heroHeight: hero?.height || 0,
      teamWidth: teamSection?.width || 0,
      teamHeight: teamSection?.height || 0,
      teamCardCount: cards.length,
      teamNames: cards.map((card) => (card.querySelector('h3')?.textContent || '').trim()),
      teamRoles: cards.map((card) => (card.querySelector('.company-reference-team__role')?.textContent || '').trim()),
      teamRects: cards.map((card) => {
        const rect = card.getBoundingClientRect()
        return { top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right, width: rect.width }
      }),
      portraitSizes: portraits.map((image) => image instanceof HTMLImageElement ? [image.naturalWidth, image.naturalHeight] : [0, 0]),
      oldCultureCount: document.querySelectorAll('.company-reference-culture').length,
      directionCount: document.querySelectorAll('.company-reference-direction article').length,
      timelineCount: document.querySelectorAll('.company-reference-timeline li').length,
      proofCount: document.querySelectorAll('.company-reference-proof__metrics > div').length,
      principleCount: document.querySelectorAll('.company-reference-about__principles > div').length,
      logoHref: logo?.getAttribute('href') || '',
      ctaHref: cta?.getAttribute('href') || '',
      heroImage: heroImage instanceof HTMLImageElement ? [heroImage.naturalWidth, heroImage.naturalHeight] : [0, 0],
      brokenImages: [...document.images]
        .filter((image) => !image.complete || image.naturalWidth === 0)
        .map((image) => image.currentSrc || image.src),
    }
  })

  if (data.scrollWidth > data.clientWidth + 1) fail(`${label}: horizontal overflow ${data.scrollWidth}/${data.clientWidth}`)
  if (data.h1 !== 1) fail(`${label}: H1 count ${data.h1}`)
  if (data.heading !== 'Built in Kaduna. Building for Africa.') fail(`${label}: heading ${data.heading}`)
  if (data.heroWidth < 300 || data.heroHeight < 300) fail(`${label}: hero collapsed ${data.heroWidth}x${data.heroHeight}`)
  if (data.teamWidth < 300 || data.teamHeight < 400) fail(`${label}: team section collapsed ${data.teamWidth}x${data.teamHeight}`)
  if (data.teamCardCount !== 5) fail(`${label}: team card count ${data.teamCardCount}`)
  if (JSON.stringify(data.teamNames) !== JSON.stringify(expectedNames)) fail(`${label}: team names ${JSON.stringify(data.teamNames)}`)
  if (JSON.stringify(data.teamRoles) !== JSON.stringify(expectedRoles)) fail(`${label}: team roles ${JSON.stringify(data.teamRoles)}`)
  if (data.oldCultureCount !== 0) fail(`${label}: old culture section still present`)
  if (data.directionCount !== 4) fail(`${label}: direction blocks ${data.directionCount}`)
  if (data.timelineCount !== 7) fail(`${label}: timeline entries ${data.timelineCount}`)
  if (data.proofCount !== 5) fail(`${label}: proof metrics ${data.proofCount}`)
  if (data.principleCount !== 4) fail(`${label}: principle count ${data.principleCount}`)
  if (data.logoHref !== '/') fail(`${label}: logo href ${data.logoHref}`)
  if (data.ctaHref !== '/contact') fail(`${label}: CTA href ${data.ctaHref}`)
  if (data.heroImage[0] < 500 || data.heroImage[1] < 250) fail(`${label}: hero image missing ${data.heroImage.join('x')}`)
  if (data.portraitSizes.length !== 5 || data.portraitSizes.some(([width, height]) => width < 200 || height < 200)) {
    fail(`${label}: portrait images missing/too small ${JSON.stringify(data.portraitSizes)}`)
  }
  if (data.brokenImages.length) fail(`${label}: broken images ${data.brokenImages.join(',')}`)

  if (isDesktop && data.teamRects.length === 5) {
    const firstRow = data.teamRects.slice(0, 3)
    const secondRow = data.teamRects.slice(3)
    const firstTop = firstRow[0].top
    const secondTop = secondRow[0].top
    if (firstRow.some((rect) => Math.abs(rect.top - firstTop) > 3)) fail(`${label}: first team row misaligned`)
    if (secondRow.some((rect) => Math.abs(rect.top - secondTop) > 3)) fail(`${label}: second team row misaligned`)
    if (!(secondRow[0].left > firstRow[0].left && secondRow[1].right < firstRow[2].right)) {
      fail(`${label}: second team row is not centered`)
    }
  }

  if (!isDesktop && data.teamRects.length === 5) {
    if (data.teamRects.some((rect) => rect.width < 280)) fail(`${label}: mobile team cards too narrow`)
    for (let index = 1; index < data.teamRects.length; index += 1) {
      if (data.teamRects[index].top < data.teamRects[index - 1].bottom - 2) {
        fail(`${label}: mobile team cards overlap at ${index}`)
      }
    }
  }

  if (isDesktop) {
    const card = page.locator('.company-reference-team__card').first()
    const portrait = card.locator('.company-reference-team__portrait img')
    const before = await card.boundingBox()
    await card.hover()
    await page.waitForTimeout(360)
    const after = await card.boundingBox()
    const portraitTransform = await portrait.evaluate((image) => getComputedStyle(image).transform)
    if (before && after && after.y >= before.y - 2) fail(`${label}: team hover card does not lift`)
    if (!portraitTransform || portraitTransform === 'none') fail(`${label}: team hover portrait does not zoom`)
  }

  await page.screenshot({ path: screenshot, fullPage: true, animations: 'disabled' })
}

fs.mkdirSync('company-reference-evidence', { recursive: true })
const browser = await chromium.launch({ headless: true })

for (const [name, width, height] of [['390', 390, 844], ['1440', 1440, 1000]]) {
  const context = await browser.newContext({ viewport: { width, height } })
  const page = await context.newPage()
  await inspect(page, `chromium ${name}`, `company-reference-evidence/company-${name}.png`, width >= 1024)
  await context.close()
}

await browser.close()

const summary = `Failures: ${failures.length}\n${failures.join('\n')}\n`
fs.writeFileSync('company-reference-evidence/summary.txt', summary)
console.log(summary)
if (failures.length) process.exit(1)
