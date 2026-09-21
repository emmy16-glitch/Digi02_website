import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("..", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("contact form is honestly mailto based", async () => {
  const [source, content] = await Promise.all([
    read("./src/premium/pages/Contact.tsx"),
    read("./src/premium/data/content.ts"),
  ]);
  assert.match(source, /Nothing is stored on/);
  assert.match(source, /opens your email application/);
  assert.match(source, /mailto:\$\{company\.emails\[0\]\}/);
  assert.match(source, /company\.emails\[0\]/);
  assert.match(content, /info@digi02\.org/);
  assert.doesNotMatch(source, /fetch\(/);
});

test("contact inputs carry accessible semantics", async () => {
  const source = await read("./src/premium/pages/Contact.tsx");
  for (const id of ["contact-name", "contact-email", "contact-org", "contact-interest", "contact-message"]) {
    assert.ok(source.includes(`id="${id}"`), `missing ${id}`);
  }
  assert.match(source, /type="email"/);
  assert.match(source, /autoComplete="email"/);
  assert.match(source, /autoComplete="name"/);
  assert.match(source, /role="alert"/);
  assert.match(source, /aria-describedby="contact-error"/);
});
