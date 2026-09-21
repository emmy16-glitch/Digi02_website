import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("..", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

async function allSourceFiles() {
  const { execFile } = await import("node:child_process");
  const { promisify } = await import("node:util");
  const exec = promisify(execFile);
  const { stdout } = await exec("git", ["ls-files", "src", "tests", "index.html", "public/sitemap.xml"], {
    cwd: new URL("..", import.meta.url),
  });
  return stdout.split("\n").filter(Boolean);
}

test("no machine-specific absolute paths in the repository", async () => {
  const files = await allSourceFiles();
  const offenders = [];
  for (const file of files) {
    const content = await read(`./${file}`);
    if (/\/home\/ubuntu\//.test(content)) offenders.push(file);
    if (/\/root\/\.cache\/ms-playwright/.test(content)) offenders.push(file);
  }
  assert.deepEqual(offenders, [], `machine paths in ${offenders.join(", ")}`);
});

test("no stale pre-rebuild selectors in active code", async () => {
  const files = await allSourceFiles();
  const stale = ["main#main-content", ".mobile-navigation__toggle", 'href="#main-content"', "manus-storage"];
  const offenders = [];
  for (const file of files) {
    if (file === "tests/repo-hygiene.test.mjs") continue;
    const content = await read(`./${file}`);
    for (const pattern of stale) {
      if (content.includes(pattern)) offenders.push(`${file}: ${pattern}`);
    }
  }
  assert.deepEqual(offenders, [], `stale references: ${offenders.join("; ")}`);
});

test("test directory contains only the current suite", async () => {
  const entries = await readdir(new URL("./", root));
  const stale = [
    "case-study-metrics.test.mjs",
    "client-logo-credibility.test.mjs",
    "company-team-portraits.test.mjs",
    "contact-page-experience.test.mjs",
    "footer-newsletter-and-privacy.test.mjs",
    "header-theme-and-favicon.test.mjs",
    "homepage-bento-outcomes.test.mjs",
    "insight-detail-pages.test.mjs",
    "insights-editorial-purpose.test.mjs",
    "logo-operations-lockup.test.mjs",
    "premium-positioning-and-contact.test.mjs",
    "work-editorial-integrity.test.mjs",
  ];
  for (const name of stale) {
    assert.ok(!entries.includes(name), `stale test still present: ${name}`);
  }
});
