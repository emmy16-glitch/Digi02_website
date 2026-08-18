import fs from 'node:fs'
import { chromium } from 'playwright'

const origin = 'http://127.0.0.1:4173'
const failures = []
const fail = (message) => failures.push(message)

fs.mkdirSync('company-hero-motion-evidence', { recursive: true })
const browser = await chromium.launch({ headless: true })

async function inspectResponsiveHero(name, width, height) {
  const context = await browser.newContext({ viewport: { width, height } })
  const page = await context.newPage()
  page.on('pageerror', (error) => fail(`${name}: pageerror ${error.message}`))

  await page.goto(`${origin}/company`, { waitUntil: 'networkidle', timeout: 20000 })
  const hero = page.locator('.company-reference-hero')
  const visual = page.locator('.company-reference-hero__visual')
  await visual.waitFor({ timeout: 10000 })

  const data = await page.evaluate(() => {
    const hero = document.querySelector('.company-reference-hero')?.getBoundingClientRect()
    const visual = document.querySelector('.company-reference-hero__visual')
    const heading = document.querySelector('.company-reference-hero h1')?.getBoundingClientRect()
    const cta = document.querySelector('.company-reference-hero__cta')?.getBoundingClientRect()
    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      heroWidth: hero?.width || 0,
      heroHeight: hero?.height || 0,
      headingWidth: heading?.width || 0,
      headingHeight: heading?.height || 0,
      ctaWidth: cta?.width || 0,
      ctaHeight: cta?.height || 0,
      backgroundImage: visual ? getComputedStyle(visual).backgroundImage : '',
      rasterPainted: visual ? getComputedStyle(visual.querySelector('img')).display : '',
    }
  })

  if (!data.backgroundImage.includes('company-operations-network')) fail(`${name}: animated SVG is not the painted hero background`)
  if (data.rasterPainted !== 'none') fail(`${name}: previous raster hero is still painted`)
  if (data.scrollWidth > data.clientWidth + 1) fail(`${name}: horizontal overflow ${data.scrollWidth}/${data.clientWidth}`)
  if (data.heroWidth < width - 2 || data.heroHeight < 400) fail(`${name}: hero collapsed ${data.heroWidth}x${data.heroHeight}`)
  if (data.headingWidth < 180 || data.headingHeight < 80) fail(`${name}: hero heading collapsed`)
  if (data.ctaWidth < 100 || data.ctaHeight < 42) fail(`${name}: hero CTA collapsed`)

  await hero.screenshot({ path: `company-hero-motion-evidence/company-hero-${name}.png`, animations: 'allow' })
  await context.close()
}

await inspectResponsiveHero('1440', 1440, 900)
await inspectResponsiveHero('390', 390, 844)

{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  const page = await context.newPage()
  await page.goto(`${origin}/company`, { waitUntil: 'networkidle', timeout: 20000 })
  const visual = page.locator('.company-reference-hero__visual')
  await visual.waitFor({ timeout: 10000 })
  await page.addStyleTag({ content: '.company-reference-hero__inner{visibility:hidden!important}.site-header{visibility:hidden!important}' })
  await page.waitForTimeout(250)
  const first = await visual.screenshot({ path: 'company-hero-motion-evidence/company-hero-frame-a.png', animations: 'allow' })
  await page.waitForTimeout(1300)
  const second = await visual.screenshot({ path: 'company-hero-motion-evidence/company-hero-frame-b.png', animations: 'allow' })
  if (first.equals(second)) fail('Company hero did not change between animation frames; autonomous motion is not visible')
  await context.close()
}

await browser.close()

const summary = `Failures: ${failures.length}\n${failures.join('\n')}\n`
fs.writeFileSync('company-hero-motion-evidence/summary.txt', summary)
console.log(summary)
if (failures.length) process.exit(1)
