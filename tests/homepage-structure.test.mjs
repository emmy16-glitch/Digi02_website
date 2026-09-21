import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("..", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("homepage follows the seven section narrative", async () => {
  const source = await read("./src/premium/pages/Home.tsx");
  for (const marker of [
    "function Hero(",
    "function Identity(",
    "function Flagships(",
    "function MoreCapabilities(",
    "function SelectedWork(",
    "function Engineering(",
    "export function GlobalCTA(",
  ]) {
    assert.ok(source.includes(marker), `missing ${marker}`);
  }
  assert.ok(source.includes("getSolution(\"skygrid\")"), "skygrid flagship");
  assert.ok(source.includes("getSolution(\"digivolt\")"), "digivolt flagship");
  assert.ok(source.includes("Built to"), "verification standard");
});

test("homepage does not repeat products or carry removed blocks", async () => {
  const source = await read("./src/premium/pages/Home.tsx");
  assert.doesNotMatch(source, /function SkyGridBand\(/);
  assert.doesNotMatch(source, /function DigiVoltSpotlight\(/);
  assert.doesNotMatch(source, /function FieldEvidence\(/);
  assert.doesNotMatch(source, /function Faq\(/);
  assert.doesNotMatch(source, /function VoiceAndInsights\(/);
  assert.doesNotMatch(source, /function Principles\(/);
  assert.doesNotMatch(source, /setInterval/);
  assert.doesNotMatch(source, /Accordion/);
});

test("every homepage photograph is used exactly once", async () => {
  const source = await read("./src/premium/pages/Home.tsx");
  const uses = [...source.matchAll(/photos\.([A-Za-z]+)/g)].map((m) => m[1]);
  const counts = {};
  for (const key of uses) counts[key] = (counts[key] || 0) + 1;
  const repeated = Object.entries(counts).filter(([, n]) => n > 1);
  assert.deepEqual(repeated, [], `repeated homepage photos: ${JSON.stringify(repeated)}`);
});
