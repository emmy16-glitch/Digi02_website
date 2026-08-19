import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const footer = await readFile(new URL('../src/components/SiteFooter.tsx', import.meta.url), 'utf8')
const footerStyles = await readFile(new URL('../src/styles/reference-tuning.css', import.meta.url), 'utf8')
const companyPage = await readFile(new URL('../src/pages/CompanyPage.tsx', import.meta.url), 'utf8')
const teamStyles = await readFile(new URL('../src/styles/company-team.css', import.meta.url), 'utf8')
const app = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')
const privacy = await readFile(new URL('../src/pages/PrivacyPolicyPage.tsx', import.meta.url), 'utf8')

test('adds a transparent Mailchimp demonstration footer form with consent and local success state', () => {
  assert.match(footer, /mailchimpDemoEndpoint/)
  assert.match(footer, /example\.list-manage\.com/)
  assert.match(footer, /event\.preventDefault\(\)/)
  assert.match(footer, /Demo confirmation: no email was sent or stored/)
  assert.match(footer, /Mailchimp demonstration only/)
  assert.match(footer, /href="\/privacy"/)
  assert.match(footer, /aria-live="polite"/)
  assert.ok(footer.indexOf('site-footer__newsletter-consent') < footer.indexOf('site-footer__newsletter-note'))
  assert.match(footerStyles, /site-footer__newsletter/)
  assert.match(footerStyles, /prefers-reduced-motion: reduce/)
})

test('provides a Privacy Policy route and clear pending biographies with smooth team-card feedback', () => {
  assert.match(app, /'\/privacy'/)
  assert.match(privacy, /Privacy Policy/)
  assert.match(privacy, /does not submit, transmit, store, or add email addresses/)
  assert.match(companyPage, /Approved biography pending/)
  assert.match(teamStyles, /company-reference-team__card:hover[\s\S]*translateY\(-6px\)/)
  assert.match(teamStyles, /company-reference-team__card:hover \.company-reference-team__linkedin/)
  assert.match(teamStyles, /translateX\(0\.2rem\)/)
  assert.match(teamStyles, /transition: color 160ms/)
})
