import {
  HomeBlueprintCapabilities,
  HomeBlueprintFinalCta,
  HomeBlueprintPhilosophy,
  HomeBlueprintRegionalProof,
  HomeBlueprintSolutions,
  HomeBlueprintWork,
} from '../sections/home/HomeBlueprintContent'
import { HomeBlueprintHero } from '../sections/home/HomeBlueprintHero'
import '../styles/home-blueprint.css'

export function HomePage() {
  return (
    <div className="home-blueprint">
      <HomeBlueprintHero />
      <HomeBlueprintSolutions />
      <HomeBlueprintCapabilities />
      <HomeBlueprintPhilosophy />
      <HomeBlueprintWork />
      <HomeBlueprintRegionalProof />
      <HomeBlueprintFinalCta />
    </div>
  )
}
