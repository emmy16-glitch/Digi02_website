import fs from 'node:fs'
import { chromium } from 'playwright'

const origin = 'http://127.0.0.1:4173'
const failures = []
const fail = (message) => failures.push(message)
const close = (a, b, tolerance = 3) => Math.abs(a - b) <= tolerance

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

    const capabilityGrid = document.querySelector('.reference-home-hero__capability-grid')?.getBoundingClientRect()
    const titleGold = document.querySelector('.reference-home-hero__title span')
    const primary = document.querySelector('.reference-home__button--primary')
    const heroBadge = document.querySelector('.reference-home-hero__capability-icon')?.getBoundingClientRect()
    const capabilityBadge = document.querySelector('.reference-home-capability-card__icon')?.getBoundingClientRect()
    const capabilityBadgeStyle = document.querySelector('.reference-home-capability-card__icon')
    const light = document.querySelector('.reference-home-light')

    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      hudRects: visibleRects('.reference-home-hud'),
      pillarRects: visibleRects('.reference-home-hero__capability'),
      solutionRects: visibleRects('.reference-home-solution-card'),
      workRects: visibleRects('.reference-home-work-card'),
      trustCount: document.querySelectorAll('.reference-home-hero__trust-mark').length,
      capabilityGrid: capabilityGrid
        ? { left: capabilityGrid.left, right: capabilityGrid.right, width: capabilityGrid.width }
        : null,
      titleGold: titleGold ? getComputedStyle(titleGold).color : '',
      primaryBackground: primary ? getComputedStyle(primary).backgroundColor : '',
      lightBackground: light ? getComputedStyle(light).backgroundColor : '',
      heroBadge: heroBadge ? { width: heroBadge.width, height: heroBadge.height } : null,
      capabilityBadge: capabilityBadge ? { width: capabilityBadge.width, height: capabilityBadge.height } : null,
      capabilityBadgeRadius: capabilityBadgeStyle ? getComputedStyle(capabilityBadgeStyle).borderRadius : '',
      heroRasterCount: document.querySelectorAll('.reference-home-hero__media img').length,
      flagshipRasterCount: document.querySelectorAll('.reference-home-solution-card img').length,
      workRasterCount: document.querySelectorAll('.reference-home-work-card img').length,
      heroVectorCount: document.querySelectorAll('.reference-home-hero__media .home-vector-visual').length,
      flagshipVectorCount: document.querySelectorAll('.reference-home-solution-card .home-vector-visual').length,
      workVectorCount: document.querySelectorAll('.reference-home-work-card .home-vector-visual').length,
      ghostCount: document.querySelectorAll('.reference-home-light__ghost').length,
    }
  })

  if (data.scrollWidth > data.clientWidth + 1) fail(`${name}: horizontal overflow ${data.scrollWidth}/${data.clientWidth}`)
  if (data.trustCount !== 5) fail(`${name}: trust marks ${data.trustCount}`)
  if (data.solutionRects.length !== 3) fail(`${name}: flagship cards ${data.solutionRects.length}`)
  if (data.workRects.length !== 3) fail(`${name}: selected-work cards ${data.workRects.length}`)

  if (data.heroRasterCount !== 0) fail(`${name}: old hero raster still rendered (${data.heroRasterCount})`)
  if (data.flagshipRasterCount !== 0) fail(`${name}: old flagship raster images still rendered (${data.flagshipRasterCount})`)
  if (data.workRasterCount !== 0) fail(`${name}: old selected-work raster images still rendered (${data.workRasterCount})`)
  if (data.ghostCount !== 0) fail(`${name}: old light-section ghost image still rendered`)
  if (data.heroVectorCount !== 1) fail(`${name}: hero vector count ${data.heroVectorCount}`)
  if (data.flagshipVectorCount !== 3) fail(`${name}: flagship vector count ${data.flagshipVectorCount}`)
  if (data.workVectorCount !== 3) fail(`${name}: work vector count ${data.workVectorCount}`)

  if (data.titleGold !== 'rgb(217, 163, 78)') fail(`${name}: title gold ${data.titleGold}`)
  if (data.primaryBackground !== 'rgb(217, 163, 78)') fail(`${name}: primary button gold ${data.primaryBackground}`)
  if (data.lightBackground !== 'rgb(244, 242, 237)') fail(`${name}: light proof surface ${data.lightBackground}`)

  if (!data.heroBadge || !data.capabilityBadge) {
    fail(`${name}: shared icon badges missing`)
  } else {
    if (!close(data.heroBadge.width, data.capabilityBadge.width, 2) || !close(data.heroBadge.height, data.capabilityBadge.height, 2)) {
      fail(`${name}: icon badge sizes diverge`)
    }
    if (data.capabilityBadgeRadius !== '50%') fail(`${name}: capability badge is not circular (${data.capabilityBadgeRadius})`)
  }

  if (width >= 1000) {
    if (data.hudRects.length !== 2) fail(`${name}: visible hero HUDs ${data.hudRects.length}`)
    if (data.pillarRects.length !== 5) fail(`${name}: service pillars ${data.pillarRects.length}`)
    if (data.pillarRects.length === 5 && data.capabilityGrid) {
      const [a, b, c, d, e] = data.pillarRects
      if (!close(a.top, b.top) || !close(b.top, c.top)) fail(`${name}: first pillar row is not 3-up`)
      if (!close(d.top, e.top) || d.top <= a.top + 20) fail(`${name}: second pillar row is not a distinct 2-up row`)
      const lowerCenter = (d.left + e.right) / 2
      const gridCenter = (data.capabilityGrid.left + data.capabilityGrid.right) / 2
      if (!close(lowerCenter, gridCenter, 5)) fail(`${name}: lower pillar row is not centered`)
    }
    const heights = data.solutionRects.map((rect) => rect.height)
    if (heights.length === 3 && Math.max(...heights) - Math.min(...heights) > 3) fail(`${name}: flagship card heights diverge`)
  } else {
    if (data.hudRects.length > 2) fail(`${name}: too many visible hero HUDs ${data.hudRects.length}`)
    if (data.pillarRects.length !== 5) fail(`${name}: service pillars ${data.pillarRects.length}`)
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
