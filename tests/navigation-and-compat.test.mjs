import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("..", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("mobile menu is labelled and associated with its panel", async () => {
  const source = await read("./src/premium/components/layout.tsx");
  assert.match(source, /aria-label=\{open \? "Close menu" : "Open menu"\}/);
  assert.match(source, /aria-expanded=\{open\}/);
  assert.match(source, /aria-controls="mobile-navigation-panel"/);
  assert.match(source, /id="mobile-navigation-panel"/);
});

test("escape closes the menu and returns focus to the trigger", async () => {
  const source = await read("./src/premium/components/layout.tsx");
  assert.match(source, /useRef<HTMLButtonElement>/);
  assert.match(source, /e\.key === "Escape"/);
  assert.match(source, /menuButtonRef\.current\?\.focus\(\)/);
});

test("menu closes on navigation and locks body scroll while open", async () => {
  const source = await read("./src/premium/components/layout.tsx");
  assert.match(source, /setOpen\(false\)/);
  assert.match(source, /document\.body\.style\.overflow = open \? "hidden" : ""/);
});

test("internal router preserves native browser behaviors", async () => {
  const source = await read("./src/premium/lib/router.ts");
  assert.match(source, /e\.metaKey/);
  assert.match(source, /e\.ctrlKey/);
  assert.match(source, /e\.shiftKey/);
  assert.match(source, /e\.altKey/);
  assert.match(source, /e\.button !== 0/);
});

test("tailwind and vite versions are compatible", async () => {
  const pkg = JSON.parse(await read("./package.json"));
  const tw = pkg.dependencies["tailwindcss"];
  const plugin = pkg.dependencies["@tailwindcss/vite"];
  assert.ok(tw, "tailwindcss declared");
  assert.ok(plugin, "@tailwindcss/vite declared");
  const minor = (range) => {
    const m = range.match(/(\d+)\.(\d+)\.\d+/);
    return [Number(m[1]), Number(m[2])];
  };
  const [twMajor, twMinor] = minor(tw);
  assert.ok(twMajor > 4 || (twMajor === 4 && twMinor >= 3), "tailwind 4.3+ supports vite 8");
  assert.equal(plugin.replace("^", "").split(".")[0], "4");
});
