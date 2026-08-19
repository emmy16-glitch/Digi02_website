import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('..', import.meta.url)
const homePage = await readFile(new URL('./src/pages/HomePage.tsx', root), 'utf8')
const homeContent = await readFile(new URL('./src/sections/home/HomeBlueprintContent.tsx', root), 'utf8')
const bentoStyles = await readFile(new URL('./src/styles/home-capability-bento.css', root), 'utf8')
const hero = await readFile(new URL('./src/sections/home/HomeBlueprintHero.tsx', root), 'utf8')
const heroStyles = await readFile(new URL('./src/styles/home-hero-interaction.css', root), 'utf8')

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

test('places only client-approved outcome metrics before the homepage Work section', () => {
  assert.match(homePage, /HomeBlueprintOutcomes\s*\/>\s*<HomeBlueprintWork/)
  assert.match(homeContent, /30%/)
  assert.match(homeContent, /15%/)
  assert.match(homeContent, /40%/)
  assert.match(homeContent, /efficiency increase/)
  assert.match(homeContent, /error reduction/)
  assert.match(homeContent, /faster workflow/)
})

test('adds a user-controllable operational motion treatment to the homepage hero', () => {
  assert.match(hero, /const \[isMotionPaused, setIsMotionPaused\] = useState\(false\)/)
  assert.match(hero, /data-motion=\{isMotionPaused \? 'paused' : 'active'\}/)
  assert.match(hero, /aria-pressed=\{isMotionPaused\}/)
  assert.match(hero, /Pause visual movement/)
  assert.match(hero, /From field signals/)
  assert.match(heroStyles, /@keyframes home-hero-scan/)
  assert.match(heroStyles, /@keyframes home-hero-signal/)
  assert.match(heroStyles, /\[data-motion='paused'\]/)
  assert.match(heroStyles, /prefers-reduced-motion: reduce/)
})
