import erpPosShowcase from '../../assets/erp-pos/erp-pos-multidevice-showcase.png'
import skyGridCinematic from '../../assets/skygrid/skygrid-cinematic-control-room.webp'
import skyGridLogo from '../../assets/skygrid/skygrid-logo.png'

export function HeroTechnologyComposition() {
  return (
    <figure className="hero-technology" aria-labelledby="hero-technology-caption">
      <div className="hero-technology__stage">
        <div className="hero-technology__skygrid">
          <img
            alt="Illustrative SkyGrid UAV operations environment"
            className="hero-technology__skygrid-scene"
            decoding="async"
            fetchPriority="high"
            src={skyGridCinematic}
          />

          <div className="hero-technology__skygrid-brand">
            <img alt="SkyGrid" src={skyGridLogo} />
            <span>UAV operations</span>
          </div>
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
        SkyGrid is shown with an illustrative concept environment. DigiVolt and ERP/POS are shown as product and system visualizations.
      </figcaption>
    </figure>
  )
}
