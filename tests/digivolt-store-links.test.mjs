import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("..", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("digivolt store links exist with safe external attributes", async () => {
  const [home, solutions] = await Promise.all([
    read("./src/premium/pages/Home.tsx"),
    read("./src/premium/pages/Solutions.tsx"),
  ]);
  const rider = "https://play.google.com/store/apps/details?id=com.digi02.digivolt";
  const driver = "https://play.google.com/store/apps/details?id=com.digi02.digivolt.driver";
  for (const [name, source] of [["home", home], ["solutions", solutions]]) {
    assert.ok(source.includes(rider), `${name} must link the rider app`);
    assert.ok(source.includes(driver), `${name} must link the driver app`);
  }
  assert.match(home, /target="_blank"/);
  assert.match(home, /rel="noreferrer"/);
});

test("built product status is only used where the data supports it", async () => {
  const content = await read("./src/premium/data/content.ts");
  assert.match(content, /slug: "digivolt"[\s\S]{0,400}status: "Built product"/);
  assert.match(content, /slug: "skygrid"[\s\S]{0,400}status: "Built product"/);
});
