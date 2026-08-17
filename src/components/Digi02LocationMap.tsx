import digi02LogoDark from '../assets/brand/digi02-logo-dark.png'

const OFFICE_NAME = 'Digi02 Tech Systems'
const OFFICE_ADDRESS = 'No. 2, The Hub, Industrial Area, Farin Gida, Mando, Kaduna, Nigeria'
const officeQuery = encodeURIComponent(`${OFFICE_NAME}, ${OFFICE_ADDRESS}`)

const MAP_EMBED_URL = `https://www.google.com/maps?q=${officeQuery}&z=16&output=embed`
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${officeQuery}&travelmode=driving`
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${officeQuery}`

function LocationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 21s6-5.2 6-11A6 6 0 1 0 6 10c0 5.8 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h13M14 7l5 5-5 5" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14 5h5v5M19 5l-8 8" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  )
}

export function Digi02LocationMap() {
  return (
    <section className="digi02-location" aria-labelledby="digi02-location-title">
      <div className="digi02-location__canvas">
        <iframe
          className="digi02-location__map"
          title="Interactive Google map showing the Digi02 Tech Systems office in Farin Gida, Mando, Kaduna"
          src={MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        <div className="digi02-location__identity" aria-hidden="true">
          <img src={digi02LogoDark} alt="" />
          <div>
            <strong>{OFFICE_NAME}</strong>
            <span>No. 2, The Hub · Farin Gida · Mando, Kaduna</span>
          </div>
        </div>

        <div className="digi02-location__live-chip" aria-hidden="true">
          <span /> Interactive map
        </div>

        <aside className="digi02-location__panel">
          <p className="digi02-location__kicker">Visit our office</p>
          <h2 id="digi02-location-title">Digi02 Tech Systems</h2>

          <div className="digi02-location__address">
            <LocationIcon />
            <p>
              No. 2, The Hub<br />
              Industrial Area, Farin Gida<br />
              Mando, Kaduna, Nigeria
            </p>
          </div>

          <div className="digi02-location__actions">
            <a className="digi02-location__directions" href={DIRECTIONS_URL} target="_blank" rel="noreferrer">
              <span>Get directions</span>
              <ArrowIcon />
            </a>
            <a className="digi02-location__open" href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer">
              <ExternalIcon />
              <span>Open in Google Maps</span>
            </a>
          </div>

          <p className="digi02-location__hint">Drag or zoom the map to explore the roads around our office.</p>
        </aside>
      </div>
    </section>
  )
}
