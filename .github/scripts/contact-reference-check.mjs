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

  await page.goto(`${origin}/contact`, { waitUntil: 'networkidle', timeout: 20000 })
  await page.locator('main#main-content').waitFor({ timeout: 10000 })

  await page.evaluate(async () => {
    const step = Math.max(innerHeight * 0.78, 420)
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      scrollTo(0, y)
      await new Promise((resolve) => setTimeout(resolve, 18))
    }
    await Promise.all([...document.images].map((image) => image.decode().catch(() => {})))
    scrollTo(0, 0)
  })
  await page.waitForTimeout(120)

  const data = await page.evaluate(() => {
    const hero = document.querySelector('.contact-reference-hero')?.getBoundingClientRect()
    const form = document.querySelector('.contact-reference-form')?.getBoundingClientRect()
    const info = document.querySelector('.contact-reference-info')?.getBoundingClientRect()
    const map = document.querySelector('.digi02-location__canvas')?.getBoundingClientRect()
    const paths = [...document.querySelectorAll('.contact-reference-paths article')]
      .map((element) => element.getBoundingClientRect())
      .filter((rect) => rect.width > 0 && rect.height > 0)
    const heroImage = document.querySelector('.contact-reference-hero__media img')
    const logo = document.querySelector('.site-header__wordmark')
    const officeLogo = document.querySelector('.digi02-location__identity img')
    const mapFrame = document.querySelector('.digi02-location__map')

    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      h1: document.querySelectorAll('main h1').length,
      heading: (document.querySelector('.contact-reference-hero h1')?.textContent || '').replace(/\s+/g, ' ').trim(),
      heroWidth: hero?.width || 0,
      heroHeight: hero?.height || 0,
      formWidth: form?.width || 0,
      formHeight: form?.height || 0,
      infoWidth: info?.width || 0,
      infoHeight: info?.height || 0,
      mapWidth: map?.width || 0,
      mapHeight: map?.height || 0,
      paths,
      fieldCount: document.querySelectorAll('.contact-reference-form input, .contact-reference-form select, .contact-reference-form textarea').length,
      requiredCount: document.querySelectorAll('.contact-reference-form [required]').length,
      logoHref: logo?.getAttribute('href') || '',
      heroImageWidth: heroImage instanceof HTMLImageElement ? heroImage.naturalWidth : 0,
      heroImageHeight: heroImage instanceof HTMLImageElement ? heroImage.naturalHeight : 0,
      officeLogoWidth: officeLogo instanceof HTMLImageElement ? officeLogo.naturalWidth : 0,
      mapSrc: mapFrame instanceof HTMLIFrameElement ? mapFrame.src : '',
      brokenImages: [...document.images]
        .filter((image) => !image.complete || image.naturalWidth === 0)
        .map((image) => image.currentSrc || image.src),
      directionHref: document.querySelector('.digi02-location__directions')?.getAttribute('href') || '',
      openMapsHref: document.querySelector('.digi02-location__open')?.getAttribute('href') || '',
      callHref: document.querySelector('.contact-reference-paths article:first-child a')?.getAttribute('href') || '',
    }
  })

  if (data.scrollWidth > data.clientWidth + 1) fail(`${label}: horizontal overflow ${data.scrollWidth}/${data.clientWidth}`)
  if (data.h1 !== 1) fail(`${label}: H1 count ${data.h1}`)
  if (data.heading !== 'Let’s build technology that drives real impact.') fail(`${label}: heading ${data.heading}`)
  if (data.heroWidth < 300 || data.heroHeight < 250) fail(`${label}: hero collapsed ${data.heroWidth}x${data.heroHeight}`)
  if (data.formWidth < 280 || data.formHeight < 500) fail(`${label}: form collapsed ${data.formWidth}x${data.formHeight}`)
  if (data.infoWidth < 250 || data.infoHeight < 260) fail(`${label}: contact info collapsed ${data.infoWidth}x${data.infoHeight}`)
  if (data.mapWidth < 250 || data.mapHeight < 200) fail(`${label}: map collapsed ${data.mapWidth}x${data.mapHeight}`)
  if (data.paths.length !== 3) fail(`${label}: contact path cards ${data.paths.length}`)
  if (data.fieldCount !== 8) fail(`${label}: form fields ${data.fieldCount}`)
  if (data.requiredCount < 6) fail(`${label}: required fields ${data.requiredCount}`)
  if (data.logoHref !== '/') fail(`${label}: logo href ${data.logoHref}`)
  if (data.heroImageWidth < 400 || data.heroImageHeight < 200) fail(`${label}: hero image missing ${data.heroImageWidth}x${data.heroImageHeight}`)
  if (data.officeLogoWidth < 100) fail(`${label}: office map logo missing ${data.officeLogoWidth}`)
  if (!data.mapSrc.includes('google.com/maps')) fail(`${label}: map source ${data.mapSrc}`)
  if (data.brokenImages.length) fail(`${label}: broken images ${data.brokenImages.join(',')}`)
  if (!data.directionHref.includes('google.com/maps/dir')) fail(`${label}: directions link ${data.directionHref}`)
  if (!data.openMapsHref.includes('google.com/maps/search')) fail(`${label}: open maps link ${data.openMapsHref}`)
  if (!data.callHref.startsWith('mailto:')) fail(`${label}: call link ${data.callHref}`)
  if (overlaps(data.paths)) fail(`${label}: contact path cards overlap`)

  const message = page.locator('textarea[name="message"]')
  await message.fill('A strict contact form interaction check.')
  const counter = (await page.locator('.contact-reference-form__agreement > span').textContent())?.trim() || ''
  if (counter !== '40 / 1500') fail(`${label}: character counter ${counter}`)
  await message.fill('')

  await page.evaluate(() => scrollTo(0, 0))
  await page.waitForTimeout(60)
  await page.screenshot({ path: screenshot, fullPage: true, animations: 'disabled' })
}

fs.mkdirSync('contact-reference-evidence', { recursive: true })
const browser = await chromium.launch({ headless: true })

for (const [name, width, height] of [['390', 390, 844], ['1440', 1440, 1000]]) {
  const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' })
  const page = await context.newPage()
  await inspect(page, `chromium ${name}`, `contact-reference-evidence/contact-${name}.png`)
  await context.close()
}

await browser.close()

const summary = `Failures: ${failures.length}\n${failures.join('\n')}\n`
fs.writeFileSync('contact-reference-evidence/summary.txt', summary)
console.log(summary)
if (failures.length) process.exit(1)
