import fs from 'node:fs'
import { chromium } from 'playwright'

const origin = 'http://127.0.0.1:4173'
const failures = []
const fail = (message) => failures.push(message)

fs.mkdirSync('home-system-refinement-evidence', { recursive: true })

const browser = await chromium.launch({ headless: true })

async function inspect(name, width, height) {
  const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' })
  const page = await context.newPage()
  page.on('pageerror', (error) => fail(`${name}: pageerror ${error.message}`))

  await page.goto(`${origin}/`, { waitUntil: 'networkidle', timeout: 20000 })
  await page.locator('.reference-home').waitFor({ timeout: 10000 })

  const data = await page.evaluate(() => {
    const visibleRects = (selector) =>
      [...document.querySelectorAll(selector)]
        .map((element) => element.getBoundingClientRect())
        .filter((rect) => rect.width > 0 && rect.height > 0)
        .map((rect) => ({ top: rect.top, left: rect.left, right: rect.right, width: rect.width, height: rect.height }))

    const titleGold = document.querySelector('.reference-home-hero__title span')
    const primary = document.querySelector('.reference-home__button--primary')
    const light = document.querySelector('.reference-home-light')
    const heroStage = document.querySelector('.reference-home-hero__stage')?.getBoundingClientRect()
    const heroVisual = document.querySelector('.home-hero-cinematic')?.getBoundingClientRect()

    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      metricRects: visibleRects('.reference-home-hero__metric'),
      solutionRects: visibleRects('.reference-home-solution-card'),
      workRects: visibleRects('.reference-home-work-card'),
      featureCaseRects: visibleRects('.reference-home-feature-case'),
      featureImpactRects: visibleRects('.reference-home-feature-case__impact i'),
      solutionIconCount: document.querySelectorAll('.reference-home-solution-card--compact .reference-home-solution-card__icon').length,
      originCount: document.querySelectorAll('.reference-home-hero__origin').length,
      hudCount: document.querySelectorAll('.reference-home-hud').length,
      trustCount: document.querySelectorAll('.reference-home-hero__trust-mark').length,
      oldPillarCount: document.querySelectorAll('.reference-home-hero__capability').length,
      titleGold: titleGold ? getComputedStyle(titleGold).color : '',
      primaryBackground: primary ? getComputedStyle(primary).backgroundColor : '',
      lightBackground: light ? getComputedStyle(light).backgroundColor : '',
      heroRasterCount: document.querySelectorAll('.reference-home-hero__media img').length,
      flagshipRasterCount: document.querySelectorAll('.reference-home-solution-card img').length,
      workRasterCount: document.querySelectorAll('.reference-home-work-card img').length,
      heroVectorCount: document.querySelectorAll('.reference-home-hero__media .home-hero-cinematic').length,
      workVectorCount: document.querySelectorAll('.reference-home-work-card .home-vector-visual').length,
      featureVectorCount: document.querySelectorAll('.reference-home-feature-case .home-vector-visual').length,
      ghostCount: document.querySelectorAll('.reference-home-light__ghost').length,
      heroStage: heroStage ? { width: heroStage.width, height: heroStage.height } : null,
      heroVisual: heroVisual ? { width: heroVisual.width, height: heroVisual.height } : null,
      dashboardLabels: [...document.querySelectorAll('.home-hero-cinematic text')].map((node) => (node.textContent || '').trim()),
    }
  })

  if (data.scrollWidth > data.clientWidth + 1) fail(`${name}: horizontal overflow ${data.scrollWidth}/${data.clientWidth}`)
  if (data.solutionRects.length !== 3) fail(`${name}: solution cards ${data.solutionRects.length}`)
  if (data.workRects.length !== 3) fail(`${name}: selected-work cards ${data.workRects.length}`)
  if (data.metricRects.length !== 4) fail(`${name}: hero proof metrics ${data.metricRects.length}`)
  if (data.featureCaseRects.length !== 1) fail(`${name}: featured case study ${data.featureCaseRects.length}`)
  if (data.featureImpactRects.length !== 3) fail(`${name}: featured case impact metrics ${data.featureImpactRects.length}`)
  if (data.solutionIconCount !== 3) fail(`${name}: compact solution icons ${data.solutionIconCount}`)
  if (data.originCount !== 1) fail(`${name}: Kaduna origin line ${data.originCount}`)
  if (data.hudCount !== 0) fail(`${name}: legacy HUD cards still present ${data.hudCount}`)
  if (data.trustCount !== 0) fail(`${name}: legacy trust row still present ${data.trustCount}`)
  if (data.oldPillarCount !== 0) fail(`${name}: legacy hero capability strip still present ${data.oldPillarCount}`)

  if (data.heroRasterCount !== 0) fail(`${name}: old hero raster still rendered (${data.heroRasterCount})`)
  if (data.flagshipRasterCount !== 0) fail(`${name}: old solution raster images still rendered (${data.flagshipRasterCount})`)
  if (data.workRasterCount !== 0) fail(`${name}: old selected-work raster images still rendered (${data.workRasterCount})`)
  if (data.ghostCount !== 0) fail(`${name}: old light-section ghost image still rendered`)
  if (data.heroVectorCount !== 1) fail(`${name}: cinematic hero visual count ${data.heroVectorCount}`)
  if (data.workVectorCount !== 3) fail(`${name}: work vector count ${data.workVectorCount}`)
  if (data.featureVectorCount !== 1) fail(`${name}: featured case visual count ${data.featureVectorCount}`)

  if (data.titleGold !== 'rgb(217, 163, 78)') fail(`${name}: title gold ${data.titleGold}`)
  if (data.primaryBackground !== 'rgb(217, 163, 78)') fail(`${name}: primary button gold ${data.primaryBackground}`)
  if (data.lightBackground !== 'rgb(244, 242, 237)') fail(`${name}: light proof surface ${data.lightBackground}`)

  if (!data.heroStage || !data.heroVisual) {
    fail(`${name}: cinematic hero stage missing`)
  } else {
    if (data.heroStage.height < 520) fail(`${name}: hero too short ${data.heroStage.height}`)
    if (data.heroVisual.width < data.heroStage.width - 2) fail(`${name}: hero visual narrower than stage ${data.heroVisual.width}/${data.heroStage.width}`)
    if (data.heroVisual.height < data.heroStage.height - 2) fail(`${name}: hero visual collapsed ${data.heroVisual.height}/${data.heroStage.height}`)
  }

  for (const label of ['OPERATIONS OVERVIEW', 'LOGISTICS MAP', 'ASSET TRACKING', 'PERFORMANCE', 'ALERTS']) {
    if (!data.dashboardLabels.includes(label)) fail(`${name}: hero dashboard label missing ${label}`)
  }

  if (width >= 1000) {
    const tops = data.metricRects.map((rect) => rect.top)
    if (tops.length === 4 && Math.max(...tops) - Math.min(...tops) > 3) fail(`${name}: proof metrics are not one row`)
    const heights = data.solutionRects.map((rect) => rect.height)
    if (heights.length === 3 && Math.max(...heights) - Math.min(...heights) > 3) fail(`${name}: compact solution card heights diverge`)
  } else if (data.metricRects.length === 4) {
    const [a, b, c, d] = data.metricRects
    if (Math.abs(a.top - b.top) > 3 || Math.abs(c.top - d.top) > 3 || c.top <= a.top + 20) fail(`${name}: proof metrics are not a clean 2x2 grid`)
  }

  await page.screenshot({ path: `home-system-refinement-evidence/home-${name}.png`, fullPage: true, animations: 'disabled' })
  await context.close()
}

await inspect('1440', 1440, 1000)
await inspect('390', 390, 844)
await browser.close()

const summary = `Failures: ${failures.length}\n${failures.join('\n')}\n`
fs.writeFileSync('home-system-refinement-evidence/summary.txt', summary)
console.log(summary)
if (failures.length) process.exit(1)
