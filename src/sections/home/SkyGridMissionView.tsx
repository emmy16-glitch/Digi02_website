import { useEffect, useRef, useState } from 'react'
import type { Map as MapLibreMap, StyleSpecification } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import missionPlanner from '../../assets/skygrid/skygrid-gcs-mission-planner.webp'

const KADUNA_MISSION_ROUTE = [
  [7.381, 10.571],
  [7.405, 10.557],
  [7.438, 10.566],
  [7.471, 10.548],
  [7.491, 10.519],
] as const

const missionStyle: StyleSpecification = {
  version: 8,
  sources: {
    osm: {
      type: 'raster',
      tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution: '© OpenStreetMap contributors',
      maxzoom: 19,
    },
    terrainElevation: {
      type: 'raster-dem',
      url: 'https://tiles.mapterhorn.com/tilejson.json',
    },
    terrainHillshade: {
      type: 'raster-dem',
      url: 'https://tiles.mapterhorn.com/tilejson.json',
    },
  },
  layers: [
    {
      id: 'background',
      type: 'background',
      paint: { 'background-color': '#050505' },
    },
    {
      id: 'osm',
      type: 'raster',
      source: 'osm',
      paint: {
        'raster-opacity': 0.88,
        'raster-brightness-max': 0.48,
        'raster-brightness-min': 0.04,
        'raster-contrast': 0.24,
        'raster-saturation': -0.5,
      },
    },
    {
      id: 'terrain-shading',
      type: 'hillshade',
      source: 'terrainHillshade',
      paint: {
        'hillshade-shadow-color': '#050505',
        'hillshade-highlight-color': '#aaa8a2',
        'hillshade-accent-color': '#3b0a78',
        'hillshade-exaggeration': 0.52,
      },
    },
  ],
  terrain: { source: 'terrainElevation', exaggeration: 1.45 },
}

type SkyGridMissionViewProps = {
  isActive: boolean
  shouldInitialize: boolean
}

export function SkyGridMissionView({ isActive, shouldInitialize }: SkyGridMissionViewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<MapLibreMap | null>(null)
  const [mapState, setMapState] = useState<'loading' | 'ready' | 'fallback'>('loading')

  useEffect(() => {
    if (!shouldInitialize) return

    let disposed = false
    let loadTimer: number | undefined

    async function createMap() {
      if (!containerRef.current) return

      try {
        const maplibregl = await import('maplibre-gl')
        if (disposed || !containerRef.current) return

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const isCompact = window.matchMedia('(max-width: 64rem)').matches
        const targetPitch = isCompact ? 48 : 64
        const targetBearing = isCompact ? -16 : -24
        const map = new maplibregl.Map({
          container: containerRef.current,
          style: missionStyle,
          center: [7.438, 10.545],
          zoom: 11.3,
          pitch: prefersReducedMotion ? targetPitch : 8,
          bearing: prefersReducedMotion ? targetBearing : 0,
          interactive: false,
          attributionControl: false,
          renderWorldCopies: false,
          maxPitch: 75,
        })

        mapRef.current = map
        map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right')

        loadTimer = window.setTimeout(() => {
          if (!disposed) setMapState('fallback')
        }, 8000)

        map.once('load', () => {
          if (disposed) return

          map.addSource('mission-route', {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: KADUNA_MISSION_ROUTE.map((point) => [...point]),
              },
            },
          })
          map.addSource('mission-waypoints', {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: KADUNA_MISSION_ROUTE.map((coordinates, index) => ({
                type: 'Feature',
                properties: { order: index + 1 },
                geometry: { type: 'Point', coordinates: [...coordinates] },
              })),
            },
          })
          map.addLayer({
            id: 'route-underlay',
            type: 'line',
            source: 'mission-route',
            paint: {
              'line-color': '#3b0a78',
              'line-width': 6,
              'line-opacity': 0.92,
            },
          })
          map.addLayer({
            id: 'route',
            type: 'line',
            source: 'mission-route',
            paint: {
              'line-color': '#e0bc67',
              'line-width': 1.75,
              'line-opacity': 0.9,
            },
          })
          map.addLayer({
            id: 'waypoints',
            type: 'circle',
            source: 'mission-waypoints',
            paint: {
              'circle-radius': 5.5,
              'circle-color': '#f7f6f2',
              'circle-stroke-color': '#3b0a78',
              'circle-stroke-width': 3,
            },
          })

          window.clearTimeout(loadTimer)
          setMapState('ready')

          if (!prefersReducedMotion) {
            map.easeTo({
              pitch: targetPitch,
              bearing: targetBearing,
              zoom: isCompact ? 11.65 : 11.9,
              duration: 1000,
            })
          }
        })
      } catch {
        if (!disposed) setMapState('fallback')
      }
    }

    void createMap()

    return () => {
      disposed = true
      window.clearTimeout(loadTimer)
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [shouldInitialize])

  useEffect(() => {
    const map = mapRef.current
    if (!map || !map.loaded()) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCompact = window.matchMedia('(max-width: 64rem)').matches
    const camera = isActive
      ? {
          pitch: isCompact ? 48 : 64,
          bearing: isCompact ? -16 : -24,
          zoom: isCompact ? 11.65 : 11.9,
        }
      : { pitch: isCompact ? 30 : 26, bearing: -8, zoom: 11.35 }

    if (prefersReducedMotion) map.jumpTo(camera)
    else map.easeTo({ ...camera, duration: isActive ? 900 : 650 })
  }, [isActive])

  return (
    <div className="skygrid-mission" data-map-state={mapState}>
      <img
        alt=""
        aria-hidden="true"
        className="skygrid-mission__fallback"
        decoding="async"
        src={missionPlanner}
      />
      <div className="skygrid-mission__map" ref={containerRef} aria-hidden="true" />
      <p className="skygrid-mission__label type-tech" aria-hidden="true">SkyGrid / Mission view</p>
      <p className="visually-hidden">
        An illustrative pitched terrain view of a planned UAV route near Kaduna, with five
        mission waypoints. If terrain is unavailable, the SkyGrid mission planner is shown.
      </p>
    </div>
  )
}
