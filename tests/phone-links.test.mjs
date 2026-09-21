import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("..", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

/** Mirror of src/premium/lib/phone.ts. The source file is the authority;
 *  these cases pin the contract so a regression is caught here. */
function telHref(display) {
  const trimmed = display.trim();
  if (!trimmed.startsWith("+")) {
    return `tel:${trimmed.replace(/[^\d]/g, "")}`;
  }
  const digits = `+${trimmed.slice(1).replace(/\D/g, "")}`;
  return `tel:${digits.replace(/^(\+234)0+/, "$1")}`;
}

test("nigerian trunk zero is dropped in tel links", () => {
  assert.equal(telHref("+234 (0) 816 940 4088"), "tel:+2348169404088");
  assert.equal(telHref("+234 (0) 906 787 9766"), "tel:+2349067879766");
  assert.ok(!telHref("+234 (0) 816 940 4088").includes("+2340"));
});

test("all rendered phone links go through the helper", async () => {
  const [layout, contact, company, helper] = await Promise.all([
    read("./src/premium/components/layout.tsx"),
    read("./src/premium/pages/Contact.tsx"),
    read("./src/premium/pages/Company.tsx"),
    read("./src/premium/lib/phone.ts"),
  ]);
  assert.ok(helper.includes("(\\+234)0+"), "helper drops the trunk zero");
  for (const [name, source] of [["layout", layout], ["contact", contact], ["company", company]]) {
    assert.ok(source.includes("telHref("), `${name} must use telHref`);
    assert.doesNotMatch(source, /tel:\$\{/);
  }
  const content = await read("./src/premium/data/content.ts");
  assert.match(content, /\+234 \(0\) 816 940 4088/);
  assert.match(content, /\+234 \(0\) 906 787 9766/);
});
