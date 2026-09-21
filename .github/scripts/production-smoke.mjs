import fs from 'node:fs'
import { chromium } from 'playwright'
import AxeBuilder from '@axe-core/playwright'

const origin = 'http://127.0.0.1:4173'
const failures = []
const fail = (message) => failures.push(message)

const routes = [
  '/',
  '/solutions',
  '/solutions/skygrid',
  '/solutions/digivolt',
  '/solutions/enterprise-systems',
  '/solutions/e-management',
  '/solutions/payroll-automation',
  '/solutions/payment-systems',
  '/solutions/custom-software',
  '/industries',
  '/work',
  '/company',
  '/insights',
  '/insights/erp-solutions-nigeria',
  '/insights/payroll-solutions-nigeria',
  '/insights/payment-solutions-nigeria',
  '/insights/uav-autopilot-nigeria',
  '/contact',
  '/privacy',
]

const axeRoutes = new Set(['/', '/solutions/digivolt', '/contact'])

async function settle(page) {
  await page.locator('main#main').waitFor({ timeout: 10000 })
  await page.waitForTimeout(80)
  await page.evaluate(async () => {
    const step = Math.max(innerHeight * 0.8, 420)
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      scrollTo(0, y)
      await new Promise((resolve) => setTimeout(resolve, 12))
    }
    await Promise.all([...document.images].map((image) => image.decode().catch(() => {})))
    scrollTo(0, 0)
    await document.fonts?.ready?.catch?.(() => {})
  })
  await page.waitForTimeout(60)
}

async function inspect(page, route, label, runAxe) {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error' && !message.text().startsWith('Failed to load resource')) {
      errors.push(message.text())
    }
  })

  await page.goto(origin + route, { waitUntil: 'domcontentloaded', timeout: 20000 })
  await settle(page)

  const data = await page.evaluate(() => {
    const ids = [...document.querySelectorAll('[id]')].map((el) => el.id)
    return {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') || '',
      canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
      ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '',
      ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '',
      ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute('content') || '',
      twitterTitle: document.querySelector('meta[name="twitter:title"]')?.getAttribute('content') || '',
      h1: document.querySelectorAll('main h1').length,
      mains: document.querySelectorAll('main#main').length,
      skipLinks: document.querySelectorAll('a[href="#main"]').length,
      duplicateIds: [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))],
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      brokenImages: [...document.images].filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.currentSrc || img.src),
      missingAlt: [...document.images].filter((img) => !img.hasAttribute('alt')).map((img) => img.currentSrc || img.src),
      invalidAnchors: [...document.querySelectorAll('a')].filter((a) => {
        const href = a.getAttribute('href')
        return !href || href === '#' || /^javascript:/i.test(href)
      }).map((a) => (a.textContent || '').trim()),
      unlabeled: [...document.querySelectorAll('button,input,textarea,select')].filter((el) => {
        if (el instanceof HTMLInputElement && el.type === 'hidden') return false
        if (el.getAttribute('aria-label') || el.getAttribute('aria-labelledby')) return false
        if (el instanceof HTMLButtonElement) return !(el.textContent || '').trim()
        return !(el.labels && el.labels.length)
      }).map((el) => `${el.tagName}:${el.getAttribute('name') || ''}`),
      lang: document.documentElement.lang,
    }
  })

  const expectedCanonical = `https://digi02.org${route === '/' ? '/' : route}`
  if (!data.title.includes('Digi02')) fail(`${label}: title ${data.title}`)
  if (data.description.length < 40) fail(`${label}: short meta description`)
  if (data.robots !== 'index, follow') fail(`${label}: robots ${data.robots}`)
  if (data.canonical !== expectedCanonical) fail(`${label}: canonical ${data.canonical}`)
  if (data.ogUrl !== expectedCanonical) fail(`${label}: og:url ${data.ogUrl}`)
  if (!data.ogTitle || !data.ogDescription || !data.twitterTitle) fail(`${label}: incomplete social metadata`)
  if (data.h1 !== 1) fail(`${label}: H1 count ${data.h1}`)
  if (data.mains !== 1) fail(`${label}: main count ${data.mains}`)
  if (data.skipLinks !== 1) fail(`${label}: skip link count ${data.skipLinks}`)
  if (data.duplicateIds.length) fail(`${label}: duplicate ids ${data.duplicateIds.join(',')}`)
  if (data.scrollWidth > data.clientWidth + 1) fail(`${label}: horizontal overflow ${data.scrollWidth}/${data.clientWidth}`)
  if (data.brokenImages.length) fail(`${label}: broken images ${data.brokenImages.join(',')}`)
  if (data.missingAlt.length) fail(`${label}: missing alt ${data.missingAlt.join(',')}`)
  if (data.invalidAnchors.length) fail(`${label}: invalid anchors ${data.invalidAnchors.join(',')}`)
  if (data.unlabeled.length) fail(`${label}: unlabeled controls ${data.unlabeled.join(',')}`)
  if (data.lang !== 'en') fail(`${label}: html lang ${data.lang}`)
  if (errors.length) fail(`${label}: browser errors ${errors.join(' | ')}`)

  if (runAxe) {
    const axe = await new AxeBuilder({ page }).analyze()
    const severe = axe.violations.filter((v) => ['serious', 'critical'].includes(v.impact || ''))
    if (severe.length) fail(`${label}: axe ${severe.map((v) => `${v.id}(${v.nodes.length})`).join(',')}`)
  }
}

fs.mkdirSync('production-evidence', { recursive: true })
const browser = await chromium.launch({ headless: true })

for (const [viewportName, width, height] of [
  ['phone', 390, 844],
  ['desktop', 1440, 1000],
]) {
  const context = await browser.newContext({ viewport: { width, height } })
  for (const route of routes) {
    const page = await context.newPage()
    await inspect(page, route, `${route} @ ${viewportName}`, viewportName === 'desktop' && axeRoutes.has(route))
    if ((route === '/' || route === '/contact') && viewportName === 'phone') {
      await page.screenshot({ path: `production-evidence/${route === '/' ? 'home' : 'contact'}-phone.png`, fullPage: true, animations: 'disabled' })
    }
    await page.close()
  }
  await context.close()
}

{
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } })
  const page = await context.newPage()
  for (const route of ['/definitely-not-a-route', '/solutions/not-a-solution', '/insights/not-an-article']) {
    await page.goto(origin + route, { waitUntil: 'domcontentloaded' })
    await settle(page)
    const data = await page.evaluate(() => ({
      robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') || '',
      title: document.title,
      h1: document.querySelectorAll('main h1').length,
    }))
    if (data.robots !== 'noindex, nofollow') fail(`${route}: robots ${data.robots}`)
    if (!/not found/i.test(data.title)) fail(`${route}: title ${data.title}`)
    if (data.h1 !== 1) fail(`${route}: H1 count ${data.h1}`)
  }
  await context.close()
}

{
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } })
  const page = await context.newPage()
  await page.goto(origin, { waitUntil: 'domcontentloaded' })
  const toggle = page.locator('button[aria-controls="mobile-navigation-panel"]')
  if (await toggle.getAttribute('aria-expanded') !== 'false') fail('mobile nav: initial aria-expanded')
  await toggle.click()
  if (await toggle.getAttribute('aria-expanded') !== 'true') fail('mobile nav: did not open')
  if (await page.locator('#mobile-navigation-panel').getAttribute('aria-hidden') !== 'false') fail('mobile nav: panel remained hidden')
  if (await page.locator('body').evaluate((body) => body.style.overflow) !== 'hidden') fail('mobile nav: body scroll not locked')
  await page.keyboard.press('Escape')
  await page.waitForTimeout(80)
  if (await toggle.getAttribute('aria-expanded') !== 'false') fail('mobile nav: Escape did not close')
  if (!(await toggle.evaluate((el) => document.activeElement === el))) fail('mobile nav: focus not restored')
  await context.close()
}

{
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } })
  const page = await context.newPage()
  await page.goto(origin + '/solutions/digivolt', { waitUntil: 'domcontentloaded' })
  const rider = page.locator('a[href="https://play.google.com/store/apps/details?id=com.digi02.digivolt"]')
  const driver = page.locator('a[href="https://play.google.com/store/apps/details?id=com.digi02.digivolt.driver"]')
  if ((await rider.count()) < 1) fail('DigiVolt: rider store link missing')
  if ((await driver.count()) < 1) fail('DigiVolt: driver store link missing')
  await context.close()
}

{
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' })
  const page = await context.newPage()
  await page.goto(origin, { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(250)
  const longRunning = await page.evaluate(() => document.getAnimations().filter((animation) => {
    const timing = animation.effect?.getComputedTiming()
    return animation.playState === 'running' && Number(timing?.duration || 0) > 250
  }).length)
  if (longRunning) fail(`reduced motion: ${longRunning} long-running animations`)
  await context.close()
}

await browser.close()

const summary = `Routes checked: ${routes.length * 2}\nFailures: ${failures.length}\n${failures.map((f) => 'FAIL ' + f).join('\n')}\n`
fs.writeFileSync('production-evidence/summary.txt', summary)
console.log(summary)
if (failures.length) process.exit(1)
