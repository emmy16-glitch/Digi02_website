import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("..", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("production entry renders the single premium frontend", async () => {
  const [main, app] = await Promise.all([
    read("./src/main.tsx"),
    read("./src/App.tsx"),
  ]);
  assert.match(main, /from 'react-dom\/client'/);
  assert.match(main, /createRoot/);
  assert.match(main, /premium\/index\.css/);
  assert.match(main, /from '\.\/App\.tsx'/);
  assert.match(app, /@\/premium\/pages\/Home/);
  assert.match(app, /@\/premium\/components\/layout/);
  assert.match(app, /<main id="main">/);
});

test("premium implementation does not depend on the legacy tree", async () => {
  const [layout, home, contact] = await Promise.all([
    read("./src/premium/components/layout.tsx"),
    read("./src/premium/pages/Home.tsx"),
    read("./src/premium/pages/Contact.tsx"),
  ]);
  for (const source of [layout, home, contact]) {
    assert.doesNotMatch(source, /@\/pages\//);
    assert.doesNotMatch(source, /@\/sections\//);
    assert.doesNotMatch(source, /@\/data\//);
    assert.doesNotMatch(source, /\.\.\/pages\//);
    assert.doesNotMatch(source, /\.\.\/sections\//);
  }
});

test("document shell has root mount and module entry", async () => {
  const html = await read("./index.html");
  assert.match(html, /<div id="root"><\/div>/);
  assert.match(html, /src="\/src\/main\.tsx"/);
  assert.match(html, /<html lang="en">/);
});
