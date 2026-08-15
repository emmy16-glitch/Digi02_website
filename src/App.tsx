import { FoundationPreviewPage } from './pages/FoundationPreviewPage'
import { SiteHeader } from './components/navigation/SiteHeader'
import { DigiVoltSection } from './sections/home/DigiVoltSection'
import { ErpPosSection } from './sections/home/ErpPosSection'
import { HeroSection } from './sections/home/HeroSection'
import { SkyGridSection } from './sections/home/SkyGridSection'
import { SolutionsTransformationSection } from './sections/home/SolutionsTransformationSection'
import { TechnologyProofSection } from './sections/home/TechnologyProofSection'

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
        <TechnologyProofSection />
        <SolutionsTransformationSection />
        <SkyGridSection />
        <DigiVoltSection />
        <ErpPosSection />
      </main>
    </>
  )
}

export default App
