import { chromium } from 'playwright';

const BASE = 'http://localhost:4317';
const routes = [
  '/', '/solutions', '/solutions/skygrid', '/solutions/payment-systems',
  '/solutions/payroll-automation', '/solutions/enterprise-systems',
  '/solutions/e-management', '/solutions/digivolt', '/solutions/custom-software',
  '/industries', '/work', '/company', '/insights',
  '/insights/payment-solutions-nigeria', '/insights/payroll-solutions-nigeria',
  '/insights/erp-solutions-nigeria', '/contact', '/privacy', '/nonexistent-route-xyz',
];
const viewports = [
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1440', width: 1440, height: 900 },
];

const browser = await chromium.launch({ executablePath: '/root/.cache/ms-playwright/chromium-1243/chrome-linux-arm64/chrome', args: ['--no-sandbox'] });
const results = [];
let fail = 0;

for (const vp of viewports) {
  for (const route of routes) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    const errors = [];
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 200)); });
    page.on('pageerror', (e) => errors.push('pageerror: ' + String(e).slice(0, 200)));
    const resp = await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 }).catch((e) => null);
    const status = resp ? resp.status() : -1;
    await page.waitForTimeout(900);
    await page.evaluate(async () => { await new Promise((r) => { let y = 0; const t = setInterval(() => { y += 500; window.scrollTo(0, y); if (y > document.body.scrollHeight) { clearInterval(t); r(); } }, 80); }); });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(900);
    const h1 = await page.locator('h1').count();
    const h1Text = h1 ? (await page.locator('h1').first().innerText().catch(() => '')).slice(0, 80) : '';
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    const imgs = await page.locator('img').evaluateAll((els) =>
      els.map((el) => ({ src: el.currentSrc || el.src, ok: el.complete && el.naturalWidth > 0 })),
    );
    const brokenImgs = imgs.filter((i) => !i.ok);
    const mainVisible = await page.locator('main#main').count();
    const ok = status === 200 && errors.length === 0 && h1 > 0 && overflow <= 1 && brokenImgs.length === 0 && mainVisible > 0;
    if (!ok) fail++;
    results.push({ vp: vp.name, route, status, errors: errors.length, h1: h1Text, overflow, broken: brokenImgs.length, ok });
    console.log(`${ok ? 'PASS' : 'FAIL'} [${vp.name}] ${route} status=${status} h1="${h1Text}" overflow=${overflow} brokenImgs=${brokenImgs.length} conErr=${errors.length}${errors.length ? ' :: ' + errors[0] : ''}`);
    await page.close();
  }
}

// nav interaction check on desktop
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(BASE + '/', { waitUntil: 'networkidle' });
for (const to of ['/solutions', '/company', '/contact']) {
  await page.click(`a[href="${to}"] >> nth=0`);
  await page.waitForTimeout(700);
  const url = new URL(page.url()).pathname;
  console.log(`NAV ${to} -> ${url} ${url === to ? 'PASS' : 'FAIL'}`);
  if (url !== to) fail++;
}
// mobile menu check
const m = await browser.newPage({ viewport: { width: 390, height: 844 } });
await m.goto(BASE + '/', { waitUntil: 'networkidle' });
const menuBtn = m.getByLabel(/Open menu|Close menu/);
await menuBtn.click();
await m.waitForTimeout(600);
const menuVisible = await m.locator('text=Discuss your project').count();
console.log(`MOBILE MENU ${menuVisible > 0 ? 'PASS' : 'FAIL'}`);
if (!(menuVisible > 0)) fail++;
await browser.close();

console.log(`\nTOTAL FAILURES: ${fail}`);
process.exit(fail ? 1 : 0);
