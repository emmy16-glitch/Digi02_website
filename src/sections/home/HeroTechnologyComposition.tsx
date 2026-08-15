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

        <div className="hero-technology__digivolt" aria-label="DigiVolt mobility journey">
          <span>DigiVolt</span>
          <div className="hero-technology__mobility-route" aria-hidden="true">
            <i />
            <b>EV</b>
            <i />
          </div>
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
        SkyGrid uses real product evidence. DigiVolt and ERP/POS are presented as product and system visualization.
      </figcaption>
    </figure>
  )
}
