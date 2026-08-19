import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = '/home/ubuntu/Digi02_website-reference'
const [app, homeHero, homeContent, solutions, company, contact, desktopNav, mobileNav, footer] = await Promise.all([
  readFile(`${root}/src/App.tsx`, 'utf8'),
  readFile(`${root}/src/sections/home/HomeBlueprintHero.tsx`, 'utf8'),
  readFile(`${root}/src/sections/home/HomeBlueprintContent.tsx`, 'utf8'),
  readFile(`${root}/src/pages/SolutionsPage.tsx`, 'utf8'),
  readFile(`${root}/src/pages/CompanyPage.tsx`, 'utf8'),
  readFile(`${root}/src/pages/ContactPage.tsx`, 'utf8'),
  readFile(`${root}/src/components/navigation/DesktopNavigation.tsx`, 'utf8'),
  readFile(`${root}/src/components/navigation/MobileNavigation.tsx`, 'utf8'),
  readFile(`${root}/src/components/SiteFooter.tsx`, 'utf8'),
])

test('expresses the operation-to-system delivery promise across shared entry points', () => {
  assert.match(app, /Kaduna-rooted operational technology partner/)
  assert.match(homeHero, /From operating problem to durable system/)
  assert.match(homeHero, /Understand the operation/)
  assert.match(homeContent, /Kaduna-rooted\. Operational by design/)
  assert.match(homeContent, /Start with the operation you need to improve/)
  assert.match(solutions, /One delivery partner/)
  assert.match(solutions, /Start with the operation/)
  assert.match(company, /A clear discipline for complex work/)
  assert.match(footer, /Operational technology/)
})

test('uses a consistent project-brief conversion action in desktop and mobile navigation', () => {
  assert.match(desktopNav, /Start a project brief/)
  assert.match(mobileNav, /Start a project brief/)
  assert.match(solutions, /Start a project brief/)
})

test('keeps Contact evidence-safe and internally consistent', () => {
  assert.match(contact, /info@digi02\.org/)
  assert.match(contact, /\+234 \(0\)81 6940 4088/)
  assert.match(contact, /local email draft for my review/)
  assert.doesNotMatch(contact, /Within 24 hours/)
  assert.doesNotMatch(contact, /privacy and terms notice/)
  assert.doesNotMatch(contact, /hello@digi02\.com/)
  assert.doesNotMatch(contact, /href="\/terms"/)
})

test('removes unsupported aggregate proof and partner claims from the Company proof area', () => {
  assert.match(company, /Context before code/)
  assert.match(company, /Systems, not features/)
  assert.match(company, /Evidence in use/)
  assert.doesNotMatch(company, /99\.9%/)
  assert.doesNotMatch(company, /Trusted by partners/)
  assert.doesNotMatch(homeContent, /100\+|50\+|10\+|ISO 27001/)
})
