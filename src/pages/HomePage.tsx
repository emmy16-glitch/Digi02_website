import {
  HomeReferenceFinalCta,
  HomeReferenceImpact,
  HomeReferenceLightSections,
} from '../sections/home/HomeReferenceContent'
import { HomeReferenceHero } from '../sections/home/HomeReferenceHero'
import '../styles/home-visual-system-v2.css'

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
