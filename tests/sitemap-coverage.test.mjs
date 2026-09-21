import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("..", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

function sectionSlugs(source, startMarker, endMarkers) {
  const start = source.indexOf(startMarker);
  assert.notEqual(start, -1, `missing ${startMarker}`);
  let end = source.length;
  for (const marker of endMarkers) {
    const i = source.indexOf(marker, start + startMarker.length);
    if (i !== -1 && i < end) end = i;
  }
  const section = source.slice(start, end);
  return [...section.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
}

test("sitemap covers every indexable route", async () => {
  const [sitemap, robots, content] = await Promise.all([
    read("./public/sitemap.xml"),
    read("./public/robots.txt"),
    read("./src/premium/data/content.ts"),
  ]);
  const solutionSlugs = sectionSlugs(content, "export const solutions", [
    "export const getSolution",
    "export const work",
  ]);
  const insightSlugs = sectionSlugs(content, "export const insights", [
    "export const getInsight",
  ]);
  assert.ok(solutionSlugs.length >= 7, "expected all solutions");
  assert.ok(insightSlugs.length >= 4, "expected all insights");
  const expected = [
    "https://digi02.org/",
    "https://digi02.org/solutions",
    ...solutionSlugs.map((s) => `https://digi02.org/solutions/${s}`),
    "https://digi02.org/industries",
    "https://digi02.org/work",
    "https://digi02.org/company",
    "https://digi02.org/insights",
    ...insightSlugs.map((s) => `https://digi02.org/insights/${s}`),
    "https://digi02.org/contact",
    "https://digi02.org/privacy",
  ];
  for (const url of expected) {
    assert.ok(sitemap.includes(`<loc>${url}</loc>`), `sitemap missing ${url}`);
  }
  assert.match(robots, /Sitemap: https:\/\/digi02\.org\/sitemap\.xml/);
});
