import fs from 'node:fs'
import { chromium } from 'playwright'

const origin = 'http://127.0.0.1:4173'
const failures = []
const fail = (message) => failures.push(message)

fs.mkdirSync('home-system-refinement-evidence', { recursive: true })

const expectedSections = ['H01', 'H02', 'H03', 'H04', 'H05', 'H06', 'H07', 'H08']
const viewports = [
  ['1440', 1440, 1000],
  ['1280', 1280, 900],
  ['1024', 1024, 900],
  ['768', 768, 1024],
  ['430', 430, 932],
  ['390', 390, 844],
  ['360', 360, 800],
]

function overlap(a, b) {
  const x = Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left))
  const y = Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top))
  return x > 3 && y > 3
}

const browser = await chromium.launch({ headless: true })

for (const [name, width, height] of viewports) {
  const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' })
  const page = await context.newPage()
  page.on('pageerror', (error) => fail(`${name}: pageerror ${error.message}`))

  await page.goto(`${origin}/`, { waitUntil: 'networkidle', timeout: 20000 })
  await page.locator('.home-blueprint').waitFor({ timeout: 10000 })

  const data = await page.evaluate(() => {
    const rects = (selector) =>
      [...document.querySelectorAll(selector)]
        .map((element) => element.getBoundingClientRect())
        .filter((rect) => rect.width > 0 && rect.height > 0)
        .map((rect) => ({ top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right, width: rect.width, height: rect.height }))

    const heroVisual = document.querySelector('.home-blueprint-hero__visual')
    const titleGold = document.querySelector('.home-blueprint-hero h1 span')
    const primary = document.querySelector('.home-blueprint-button--primary')
    const solutions = document.querySelector('.home-blueprint-solutions')

    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      h1Count: document.querySelectorAll('main h1').length,
      heading: (document.querySelector('.home-blueprint-hero h1')?.textContent || '').replace(/\s+/g, ' ').trim(),
      sections: [...document.querySelectorAll('[data-home-section]')].map((element) => element.getAttribute('data-home-section')),
      heroRects: rects('.home-blueprint-hero__content'),
      proofRects: rects('.home-blueprint-proof__item'),
      solutionRects: rects('.home-blueprint-info-card'),
      featureRects: rects('.home-blueprint-feature'),
      featureWorkflowRects: rects('.home-blueprint-feature__workflow i'),
      capabilityRects: rects('.home-blueprint-capability-card'),
      philosophyRects: rects('.home-blueprint-philosophy'),
      workRects: rects('.home-blueprint-work-card'),
      regionalMetricRects: rects('.home-blueprint-regional__metric'),
      ctaRects: rects('.home-blueprint-cta'),
      workVisualCount: document.querySelectorAll('.home-blueprint-work-card .home-blueprint-work-visual').length,
      featureVisualCount: document.querySelectorAll('.home-blueprint-feature .home-blueprint-work-visual').length,
      rasterCount: document.querySelectorAll('.home-blueprint img').length,
      heroBackground: heroVisual ? getComputedStyle(heroVisual).backgroundImage : '',
      titleGold: titleGold ? getComputedStyle(titleGold).color : '',
      primaryBackground: primary ? getComputedStyle(primary).backgroundColor : '',
      solutionsBackground: solutions ? getComputedStyle(solutions).backgroundColor : '',
      philosophyText: (document.querySelector('.home-blueprint-philosophy h2')?.textContent || '').replace(/\s+/g, ' ').trim(),
      watermarkText: (document.querySelector('.home-blueprint')?.textContent || '').toLowerCase(),
      brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.currentSrc || image.src),
    }
  })

  if (data.scrollWidth > data.clientWidth + 1) fail(`${name}: horizontal overflow ${data.scrollWidth}/${data.clientWidth}`)
  if (data.h1Count !== 1) fail(`${name}: H1 count ${data.h1Count}`)
  if (data.heading !== 'Technology built for real operations.') fail(`${name}: hero heading ${data.heading}`)
  if (JSON.stringify(data.sections) !== JSON.stringify(expectedSections)) fail(`${name}: section sequence ${JSON.stringify(data.sections)}`)
  if (!data.heroBackground.includes('home-operations-room')) fail(`${name}: approved hero SVG not painted`)
  if (data.rasterCount !== 0) fail(`${name}: homepage renders ${data.rasterCount} img elements; blueprint uses SVG/HTML visuals`)
  if (data.proofRects.length !== 4) fail(`${name}: H02 proof metrics ${data.proofRects.length}`)
  if (data.solutionRects.length !== 3) fail(`${name}: H03 solution cards ${data.solutionRects.length}`)
  if (data.featureRects.length !== 1) fail(`${name}: H03 featured case study ${data.featureRects.length}`)
  if (data.featureWorkflowRects.length !== 3) fail(`${name}: H03 workflow steps ${data.featureWorkflowRects.length}`)
  if (data.capabilityRects.length !== 4) fail(`${name}: H04 capability cards ${data.capabilityRects.length}`)
  if (data.philosophyRects.length !== 1) fail(`${name}: H05 philosophy section ${data.philosophyRects.length}`)
  if (data.workRects.length !== 3) fail(`${name}: H06 work cards ${data.workRects.length}`)
  if (data.regionalMetricRects.length !== 4) fail(`${name}: H07 regional metrics ${data.regionalMetricRects.length}`)
  if (data.ctaRects.length !== 1) fail(`${name}: H08 CTA ${data.ctaRects.length}`)
  if (data.workVisualCount !== 3) fail(`${name}: work vector visuals ${data.workVisualCount}`)
  if (data.featureVisualCount !== 1) fail(`${name}: featured vector visual ${data.featureVisualCount}`)
  if (data.philosophyText !== 'Technology should fit the operation — not force the operation to fit the technology.') fail(`${name}: H05 statement mismatch`)
  if (data.watermarkText.includes('watermelon') || data.watermarkText.includes('melon ui')) fail(`${name}: reference branding leaked into homepage`)
  if (data.brokenImages.length) fail(`${name}: broken images ${data.brokenImages.join(',')}`)

  if (data.titleGold !== 'rgb(201, 163, 74)') fail(`${name}: locked gold heading ${data.titleGold}`)
  if (data.primaryBackground !== 'rgb(201, 163, 74)') fail(`${name}: locked primary gold ${data.primaryBackground}`)
  if (data.solutionsBackground !== 'rgb(247, 246, 242)') fail(`${name}: locked warm-white surface ${data.solutionsBackground}`)

  if (!data.heroRects.length || data.heroRects[0].height < 500) fail(`${name}: hero content collapsed`)

  for (const [label, items] of [
    ['solutions', data.solutionRects],
    ['capabilities', data.capabilityRects],
    ['work', data.workRects],
    ['regional metrics', data.regionalMetricRects],
  ]) {
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        if (overlap(items[i], items[j])) fail(`${name}: ${label} overlap`)
      }
    }
  }

  if (width >= 1024 && data.proofRects.length === 4) {
    const tops = data.proofRects.map((rect) => rect.top)
    if (Math.max(...tops) - Math.min(...tops) > 3) fail(`${name}: proof strip is not one row`)
  }

  if (width <= 430 && data.proofRects.length === 4) {
    const [a, b, c, d] = data.proofRects
    if (Math.abs(a.top - b.top) > 3 || Math.abs(c.top - d.top) > 3 || c.top <= a.top + 20) fail(`${name}: proof strip is not a clean 2x2 grid`)
  }

  if (name === '1440' || name === '390') {
    await page.screenshot({ path: `home-system-refinement-evidence/home-${name}.png`, fullPage: true, animations: 'disabled' })
  }

  await context.close()
}

await browser.close()

const summary = `Failures: ${failures.length}\n${failures.join('\n')}\n`
fs.writeFileSync('home-system-refinement-evidence/summary.txt', summary)
console.log(summary)
if (failures.length) process.exit(1)
