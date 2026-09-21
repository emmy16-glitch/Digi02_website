import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("..", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("single route metadata source of truth exists", async () => {
  const seo = await read("./src/premium/lib/seo.ts");
  assert.match(seo, /export function isKnownRoute/);
  assert.match(seo, /export function getRouteMeta/);
  assert.match(seo, /export function applyRouteMeta/);
  assert.match(seo, /https:\/\/digi02\.org/);
  assert.match(seo, /export function solutionSlugs/);
  assert.match(seo, /export function insightSlugs/);
});

test("unknown routes are noindex and render the site 404", async () => {
  const [seo, app] = await Promise.all([
    read("./src/premium/lib/seo.ts"),
    read("./src/App.tsx"),
  ]);
  assert.match(seo, /noindex, nofollow/);
  assert.match(app, /isKnownRoute\(path\)/);
  assert.match(app, /<NotFound \/>/);
  assert.match(app, /applyRouteMeta\(getRouteMeta\(path\)\)/);
  assert.doesNotMatch(app, /const TITLES/);
  assert.doesNotMatch(app, /const DESCRIPTIONS/);
});

test("detail metadata derives from content data, not a second slug list", async () => {
  const seo = await read("./src/premium/lib/seo.ts");
  assert.match(seo, /getSolution\(/);
  assert.match(seo, /getInsight\(/);
  assert.match(seo, /\| Digi02 Insights/);
});

test("index shell carries canonical, social meta and organization data", async () => {
  const html = await read("./index.html");
  assert.match(html, /rel="canonical" href="https:\/\/digi02\.org\/"/);
  assert.match(html, /og:title/);
  assert.match(html, /og:description/);
  assert.match(html, /og:url/);
  assert.match(html, /twitter:title/);
  assert.match(html, /twitter:description/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type": "Organization"/);
  assert.match(html, /Digi02 Software Solutions/);
  assert.match(html, /info@digi02\.org/);
  assert.match(html, /\/images\/brand\/digi02-logo-/);
});
