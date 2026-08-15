import digiVoltShowcase from '../../assets/digivolt/digivolt-electric-mobility-showcase.png'
import erpPosShowcase from '../../assets/erp-pos/erp-pos-multidevice-showcase.png'
import skyGridMissionPlanner from '../../assets/skygrid/skygrid-gcs-mission-planner.webp'

export function HeroTechnologyComposition() {
  return (
    <figure className="hero-technology" aria-labelledby="hero-technology-caption">
      <div className="hero-technology__stage">
        <div className="hero-technology__skygrid">
          <img
            alt="SkyGrid ground-control mission planning interface"
            decoding="async"
            fetchPriority="high"
            src={skyGridMissionPlanner}
          />
        </div>

        <div className="hero-technology__digivolt" aria-label="DigiVolt product visualization">
          <img
            alt="DigiVolt electric mobility product visualization"
            decoding="async"
            src={digiVoltShowcase}
          />
          <span>DigiVolt</span>
        </div>

        <div className="hero-technology__erp" aria-label="ERP and POS system visualization">
          <img
            alt="Digi02 ERP and POS multi-device system visualization"
            decoding="async"
            src={erpPosShowcase}
          />
          <span>ERP + POS</span>
        </div>
      </div>

      <figcaption id="hero-technology-caption">
        SkyGrid uses real product evidence. DigiVolt and ERP/POS are product and system visualizations.
      </figcaption>
    </figure>
  )
}
