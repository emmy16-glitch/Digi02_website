import {
  HomeBlueprintCapabilities,
  HomeBlueprintFinalCta,
  HomeBlueprintOperationalBento,
  HomeBlueprintOutcomes,
  HomeBlueprintPhilosophy,
  HomeBlueprintRegionalProof,
  HomeBlueprintSolutions,
  HomeBlueprintWork,
} from '../sections/home/HomeBlueprintContent'
import { HomeBlueprintHero } from '../sections/home/HomeBlueprintHero'
import '../styles/home-blueprint.css'
import '../styles/home-capability-bento.css'
import '../styles/home-hero-interaction.css'

export function HomePage() {
  return (
    <div className="home-blueprint">
      <HomeBlueprintHero />
      <HomeBlueprintSolutions />
      <HomeBlueprintCapabilities />
      <HomeBlueprintOperationalBento />
      <HomeBlueprintPhilosophy />
      <HomeBlueprintOutcomes />
      <HomeBlueprintWork />
      <HomeBlueprintRegionalProof />
      <HomeBlueprintFinalCta />
    </div>
  )
}
