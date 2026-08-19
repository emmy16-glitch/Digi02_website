import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const companyPage = await readFile(new URL('../src/pages/CompanyPage.tsx', import.meta.url), 'utf8')
const teamStyles = await readFile(new URL('../src/styles/company-team.css', import.meta.url), 'utf8')
const heroStyles = await readFile(new URL('../src/styles/company-animated-hero.css', import.meta.url), 'utf8')

test('uses the supplied leadership portrait assignments in the Company team section', () => {
  assert.match(companyPage, /john-okojere\.webp/)
  assert.match(companyPage, /covenant-iregbeyen\.jpg/)
  assert.match(companyPage, /kosisochukwu-ugwubma\.webp/)
  assert.match(companyPage, /abraham-salifu\.webp/)
  assert.match(companyPage, /ini-esiset\.webp/)
  assert.match(companyPage, /id="meet-our-team"/)
  assert.match(companyPage, /Placeholder biography/)
  assert.match(companyPage, /Public LinkedIn summary/)
  assert.match(companyPage, /https:\/\/ng\.linkedin\.com\/in\/okojere/)
  assert.match(companyPage, /https:\/\/ng\.linkedin\.com\/in\/covenantayo/)
  assert.match(companyPage, /Technical Lead/)
  assert.match(companyPage, /Tech-Driven Solutions Specialist/)
  assert.match(companyPage, /target="_blank"/)
  assert.match(companyPage, /rel="noreferrer"/)
  assert.match(companyPage, /View LinkedIn profile/)
  assert.match(companyPage, /Request LinkedIn profile/)
  assert.match(companyPage, /\/contact\?enquiry=linkedin-profile/)
  assert.match(companyPage, /company-reference-team__role-reveal/)
  assert.match(companyPage, /tabIndex=\{0\}/)
  assert.match(companyPage, /IntersectionObserver/)
  assert.match(companyPage, /--team-card-delay/)
  assert.doesNotMatch(companyPage, /people-behind-digi02/)
})

test('keeps portrait crops editorial and provides a reduced-motion hero fallback', () => {
  assert.match(teamStyles, /aspect-ratio: 4 \/ 5/)
  assert.match(teamStyles, /company-reference-team__role-reveal/)
  assert.match(teamStyles, /card:hover \.company-reference-team__role-reveal/)
  assert.match(teamStyles, /card:focus \.company-reference-team__role-reveal/)
  assert.match(teamStyles, /company-reference-team__card\.is-revealed/)
  assert.match(teamStyles, /opacity: 0/)
  assert.match(teamStyles, /prefers-reduced-motion: no-preference/)
  assert.match(heroStyles, /background-image: none/)
  assert.match(heroStyles, /hero__visual > img[\s\S]*display: block/)
})
