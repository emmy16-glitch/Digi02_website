import { FoundationPreviewPage } from './pages/FoundationPreviewPage'
import { SiteHeader } from './components/navigation/SiteHeader'
import { DigiVoltSection } from './sections/home/DigiVoltSection'
import { ErpPosSection } from './sections/home/ErpPosSection'
import { HeroSection } from './sections/home/HeroSection'
import { HomeFinalCtaSection } from './sections/home/HomeFinalCtaSection'
import { SkyGridSection } from './sections/home/SkyGridSection'
import { SolutionsTransformationSection } from './sections/home/SolutionsTransformationSection'
import { WhyDigi02Section } from './sections/home/WhyDigi02Section'

const FOUNDATION_PATH = '/foundation'

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  if (path === FOUNDATION_PATH) {
    return <FoundationPreviewPage />
  }

  return (
    <>
      <title>Digi02 — Precision systems</title>
      <SiteHeader currentPath={path} />
      <main>
        <HeroSection />
        <SolutionsTransformationSection />
        <SkyGridSection />
        <DigiVoltSection />
        <ErpPosSection />
        <WhyDigi02Section />
        <HomeFinalCtaSection />
      </main>
    </>
  )
}

export default App
