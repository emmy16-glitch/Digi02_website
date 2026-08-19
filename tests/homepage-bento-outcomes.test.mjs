import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('..', import.meta.url)
const homePage = await readFile(new URL('./src/pages/HomePage.tsx', root), 'utf8')
const homeContent = await readFile(new URL('./src/sections/home/HomeBlueprintContent.tsx', root), 'utf8')
const bentoStyles = await readFile(new URL('./src/styles/home-capability-bento.css', root), 'utf8')
const hero = await readFile(new URL('./src/sections/home/HomeBlueprintHero.tsx', root), 'utf8')
const heroStyles = await readFile(new URL('./src/styles/home-hero-interaction.css', root), 'utf8')
const revealStyles = await readFile(new URL('./src/styles/home-scroll-reveal.css', root), 'utf8')

test('integrates the operational capability bento into the Digi02 homepage', () => {
  assert.match(homePage, /HomeBlueprintOperationalBento/)
  assert.match(homeContent, /Autonomous Systems/)
  assert.match(homeContent, /Enterprise Platforms/)
  assert.match(homeContent, /Digital Infrastructure/)
  assert.match(homeContent, /Operational Intelligence/)
  assert.match(bentoStyles, /home-blueprint-bento__grid/)
  assert.match(bentoStyles, /home-blueprint-bento-card:hover/)
  assert.match(bentoStyles, /prefers-reduced-motion: reduce/)
})

test('places only client-approved outcome metrics before the credibility and homepage Work sections', () => {
  assert.match(homePage, /HomeSectionReveal timing=\{revealCadence\.outcomes\}><HomeBlueprintOutcomes \/><\/HomeSectionReveal>\s*<HomeSectionReveal timing=\{revealCadence\.contexts\}><HomeBlueprintSelectedWorkContexts \/><\/HomeSectionReveal>\s*<HomeSectionReveal timing=\{revealCadence\.work\}><HomeBlueprintWork/)
  assert.match(homeContent, /30%/)
  assert.match(homeContent, /15%/)
  assert.match(homeContent, /40%/)
  assert.match(homeContent, /efficiency increase/)
  assert.match(homeContent, /error reduction/)
  assert.match(homeContent, /faster workflow/)
})

test('connects each homepage project card directly to its corresponding case study', () => {
  assert.match(homeContent, /href: '\/work\/thermal-plant-inspection-automation'/)
  assert.match(homeContent, /href: '\/work\/sterling-payment-gateway'/)
  assert.match(homeContent, /href: '\/work\/kaduna-state-e-management-system'/)
  assert.match(homeContent, /href=\{item\.href\}/)
})

test('adds a user-controllable operational motion treatment to the homepage hero', () => {
  assert.match(hero, /const \[isMotionPaused, setIsMotionPaused\] = useState\(false\)/)
  assert.match(hero, /data-motion=\{isMotionPaused \? 'paused' : 'active'\}/)
  assert.match(hero, /aria-pressed=\{isMotionPaused\}/)
  assert.match(hero, /Pause visual movement/)
  assert.match(hero, /From complex work/)
  assert.match(heroStyles, /@keyframes home-hero-scan/)
  assert.match(heroStyles, /@keyframes home-hero-signal/)
  assert.match(heroStyles, /\[data-motion='paused'\]/)
  assert.match(heroStyles, /prefers-reduced-motion: reduce/)
})

test('connects live hero signals to selected case studies', () => {
  assert.match(hero, /Field capture/)
  assert.match(hero, /Workflow context/)
  assert.match(hero, /Secure review/)
  assert.match(hero, /\/work\/thermal-plant-inspection-automation/)
  assert.match(hero, /\/work\/kaduna-state-e-management-system/)
  assert.match(hero, /\/work\/sterling-payment-gateway/)
  assert.match(hero, /aria-label="Selected Digi02 case studies"/)
  assert.match(hero, /home-blueprint-hero__mobile-signal-chips/)
  assert.match(heroStyles, /\.home-blueprint-hero__signal-links > a/)
  assert.match(heroStyles, /\.home-blueprint-hero__mobile-signal-chips > a/)
})

test('adds an interactive hero project-map entry point with accessible selected-work nodes', () => {
  assert.match(hero, /home-blueprint-hero__project-map-trigger/)
  assert.match(hero, /aria-haspopup="dialog"/)
  assert.match(hero, /projectMapDialogRef/)
  assert.match(hero, /dialog\.showModal\(\)/)
  assert.match(hero, /id="home-project-map-dialog"/)
  assert.match(hero, /This map groups selected work by operational signal/)
  assert.match(heroStyles, /\.home-blueprint-project-map__node/)
  assert.match(heroStyles, /\.home-blueprint-project-map::backdrop/)
})

test('reveals homepage sections on scroll while keeping reduced-motion content immediately visible', () => {
  assert.match(homePage, /function HomeSectionReveal/)
  assert.match(homePage, /IntersectionObserver/)
  assert.match(homePage, /prefers-reduced-motion: reduce/)
  assert.match(homePage, /window\.addEventListener\('scroll', revealWhenReached, \{ passive: true \}\)/)
  assert.match(homePage, /const revealCadence/)
  assert.match(homePage, /revealCadence\.bento/)
  assert.match(homePage, /revealCadence\.cta/)
  assert.match(revealStyles, /\.home-section-reveal\.is-revealed/)
  assert.match(revealStyles, /--home-reveal-duration/)
  assert.match(revealStyles, /--home-reveal-offset/)
  assert.match(revealStyles, /prefers-reduced-motion: reduce/)
})
