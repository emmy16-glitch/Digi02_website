import {
  HomeReferenceFinalCta,
  HomeReferenceImpact,
  HomeReferenceLightSections,
} from '../sections/home/HomeReferenceContent'
import { HomeReferenceHero } from '../sections/home/HomeReferenceHero'

export function HomePage() {
  return (
    <div className="reference-home">
      <HomeReferenceHero />
      <HomeReferenceLightSections />
      <HomeReferenceImpact />
      <HomeReferenceFinalCta />
    </div>
  )
}
