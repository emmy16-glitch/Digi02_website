import fs from 'node:fs'
import { chromium } from 'playwright'

const origin = 'http://127.0.0.1:4173'
const failures = []
const fail = (message) => failures.push(message)

fs.mkdirSync('company-hero-motion-evidence', { recursive: true })

const browser = await chromium.launch({ headless: true })
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await context.newPage()

page.on('pageerror', (error) => fail(`pageerror: ${error.message}`))

await page.goto(`${origin}/company`, { waitUntil: 'networkidle', timeout: 20000 })
await page.locator('.company-reference-hero__visual').waitFor({ timeout: 10000 })

const hero = page.locator('.company-reference-hero__visual')
const background = await hero.evaluate((element) => getComputedStyle(element).backgroundImage)
if (!background.includes('company-operations-network')) {
  fail(`animated SVG is not the painted Company hero background: ${background}`)
}

await page.addStyleTag({ content: '.company-reference-hero__inner{visibility:hidden!important}.site-header{visibility:hidden!important}' })
await page.waitForTimeout(250)
const first = await hero.screenshot({ path: 'company-hero-motion-evidence/company-hero-frame-a.png', animations: 'allow' })
await page.waitForTimeout(1300)
const second = await hero.screenshot({ path: 'company-hero-motion-evidence/company-hero-frame-b.png', animations: 'allow' })

if (first.equals(second)) {
  fail('Company hero did not change between animation frames; autonomous motion is not visible')
}

await browser.close()

const summary = `Failures: ${failures.length}\n${failures.join('\n')}\n`
fs.writeFileSync('company-hero-motion-evidence/summary.txt', summary)
console.log(summary)
if (failures.length) process.exit(1)
