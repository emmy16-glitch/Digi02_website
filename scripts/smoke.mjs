import { readFile } from "node:fs/promises";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const BASE = process.env.SMOKE_BASE ?? "http://127.0.0.1:4173";

function sitemapRoutes() {
  return readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8").then((xml) =>
    [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname),
  );
}

const INVALID = ["/definitely-not-a-route", "/solutions/not-a-solution", "/insights/not-an-article"];
const MOBILE_PAGES = ["/", "/solutions", "/solutions/digivolt", "/company", "/contact"];
const AXE_PAGES = ["/", "/solutions/digivolt", "/contact"];

let failures = 0;
function check(name, cond, extra = "") {
  console.log(`${cond ? "PASS" : "FAIL"} ${name}${extra}`);
  if (!cond) failures++;
}

async function pageErrors(page) {
  const errors = [];
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text().slice(0, 160));
  });
  page.on("pageerror", (e) => errors.push(`pageerror: ${String(e).slice(0, 160)}`));
  return errors;
}

async function checkValid(browser, route, vp) {
  const page = await browser.newPage({ viewport: vp });
  const errors = await pageErrors(page);
  const resp = await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 30000 }).catch(() => null);
  const status = resp ? resp.status() : -1;
  await page.waitForTimeout(600);
  const tag = `desktop route ${route} status=${status}`;
  check(tag, status === 200, ` [${vp.width}x${vp.height}]`);

  const main = await page.locator("main#main").count();
  check(`single main#main on ${route}`, main === 1, ` got=${main}`);
  const h1 = await page.locator("h1").count();
  check(`h1 present on ${route}`, h1 >= 1, ` got=${h1}`);
  check(`no console/page errors on ${route}`, errors.length === 0, errors.length ? ` :: ${errors[0]}` : "");

  const imgCount = await page.locator("img").count();
  for (let i = 0; i < imgCount; i++) {
    await page.locator("img").nth(i).evaluate((el) => el.scrollIntoView({ block: "center" })).catch(() => {});
    await page.waitForTimeout(250);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  const imgs = await page.locator("img").evaluateAll((els) =>
    els.map((el) => ({ ok: el.complete && el.naturalWidth > 0, alt: el.getAttribute("alt") })),
  );
  check(`no broken images on ${route}`, imgs.every((i) => i.ok), ` total=${imgs.length}`);
  check(`images have alt on ${route}`, imgs.every((i) => i.alt !== null), "");

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  check(`no horizontal overflow on ${route}`, overflow <= 1, ` overflow=${overflow}`);

  const title = await page.title();
  check(`title mentions Digi02 on ${route}`, title.includes("Digi02"), ` "${title.slice(0, 60)}"`);
  const desc = await page.locator('meta[name="description"]').getAttribute("content").catch(() => null);
  check(`description present on ${route}`, !!desc && desc.length > 20, "");
  const canonical = await page.locator('link[rel="canonical"]').getAttribute("href").catch(() => null);
  const expectedCanonical = `https://digi02.org${route === "/" ? "/" : route}`;
  check(`canonical correct on ${route}`, canonical === expectedCanonical, ` got=${canonical}`);
  const robots = await page.locator('meta[name="robots"]').getAttribute("content").catch(() => null);
  check(`robots indexable on ${route}`, robots === "index, follow", ` got=${robots}`);
  for (const sel of ['meta[property="og:title"]', 'meta[property="og:description"]', 'meta[property="og:url"]', 'meta[name="twitter:card"]']) {
    const present = (await page.locator(sel).count()) > 0;
    check(`${sel} on ${route}`, present, "");
  }
  await page.close();
}

async function checkInvalid(browser, route) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await pageErrors(page);
  await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 30000 }).catch(() => null);
  await page.waitForTimeout(600);
  const h1 = await page.locator("h1").first().innerText().catch(() => "");
  check(`404 UI on ${route}`, /not\s+part of the system/i.test(h1), ` h1="${h1.slice(0, 50)}"`);
  const title = await page.title();
  check(`404 title on ${route}`, /not found/i.test(title), ` "${title.slice(0, 50)}"`);
  const robots = await page.locator('meta[name="robots"]').getAttribute("content").catch(() => null);
  check(`404 noindex on ${route}`, robots === "noindex, nofollow", ` got=${robots}`);
  await page.close();
}

async function checkMobile(browser) {
  for (const route of MOBILE_PAGES) {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    const errors = await pageErrors(page);
    await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 30000 }).catch(() => null);
    await page.waitForTimeout(500);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    check(`mobile no overflow on ${route}`, overflow <= 1, ` overflow=${overflow}`);
    check(`mobile no errors on ${route}`, errors.length === 0, errors.length ? ` :: ${errors[0]}` : "");
    await page.close();
  }

  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  const toggle = page.getByLabel(/Open menu|Close menu/);
  check("menu toggle starts collapsed", (await toggle.getAttribute("aria-expanded")) === "false", "");
  await toggle.click();
  await page.waitForTimeout(500);
  check("menu toggle expands", (await toggle.getAttribute("aria-expanded")) === "true", "");
  check("panel associated", (await toggle.getAttribute("aria-controls")) === "mobile-navigation-panel", "");
  const panelVisible = await page.locator("#mobile-navigation-panel").isVisible();
  check("panel visible when open", panelVisible, "");
  const locked = await page.evaluate(() => document.body.style.overflow);
  check("body scroll locked when open", locked === "hidden", ` got=${locked}`);
  await page.keyboard.press("Escape");
  await page.waitForTimeout(400);
  check("escape closes menu", (await toggle.getAttribute("aria-expanded")) === "false", "");
  const focused = await page.evaluate(() => document.activeElement?.getAttribute("aria-label") ?? "");
  check("focus returns to trigger", /menu/i.test(focused), ` got=${focused}`);
  await toggle.click();
  await page.waitForTimeout(500);
  await page.click('#mobile-navigation-panel a[href="/solutions"] >> nth=0');
  await page.waitForTimeout(700);
  const url = new URL(page.url()).pathname;
  check("menu navigation works", url === "/solutions", ` got=${url}`);
  await page.close();
}

async function checkReducedMotion(browser) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  const h1 = await page.locator("h1").count();
  const main = await page.locator("main#main").count();
  check("reduced motion content visible", h1 >= 1 && main === 1, "");
  await ctx.close();
}

async function checkAxe(browser) {
  for (const route of AXE_PAGES) {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
    const page = await ctx.newPage();
    await page.goto(BASE + route, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
    const bad = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
    check(`axe serious/critical on ${route}`, bad.length === 0, bad.length ? ` :: ${bad.map((v) => v.id).join(",")}` : "");
    await ctx.close();
  }
}

const browser = await chromium.launch();
try {
  const routes = await sitemapRoutes();
  console.log(`smoke: ${routes.length} sitemap routes against ${BASE}`);
  const desktop = { width: 1440, height: 1000 };
  const tablet = { width: 768, height: 1024 };
  for (const route of routes) {
    await checkValid(browser, route, desktop);
    await checkValid(browser, route, tablet);
  }
  for (const route of INVALID) await checkInvalid(browser, route);
  await checkMobile(browser);
  await checkReducedMotion(browser);
  await checkAxe(browser);
} finally {
  await browser.close();
}

console.log(`\nSMOKE FAILURES: ${failures}`);
process.exit(failures ? 1 : 0);
