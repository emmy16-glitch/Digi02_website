import { DigiVoltSection } from '../sections/home/DigiVoltSection'
import { ErpPosSection } from '../sections/home/ErpPosSection'
import { HeroSection } from '../sections/home/HeroSection'
import { SkyGridSection } from '../sections/home/SkyGridSection'
import { SolutionsTransformationSection } from '../sections/home/SolutionsTransformationSection'
import { TechnologyProofSection } from '../sections/home/TechnologyProofSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TechnologyProofSection />
      <SolutionsTransformationSection />
      <SkyGridSection />
      <DigiVoltSection />
      <ErpPosSection />
    </>
  )
}
