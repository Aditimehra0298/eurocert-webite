import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const locations = [
  { name: 'India', desc: 'Headquarters — Panchkula, Haryana', position: [30.7, 76.8], isHQ: true },
  { name: 'Greece', desc: 'Parent — Eurocert SA (est. 1998)', position: [37.9, 23.7] },
  { name: 'Italy', desc: 'Western Europe Operations', position: [41.9, 12.5] },
  { name: 'Bulgaria', desc: 'Eastern Europe Operations', position: [42.7, 25.5] },
  { name: 'China', desc: 'Asia-Pacific Operations', position: [35.9, 104.2] },
  { name: 'Bangladesh', desc: 'South Asia Operations', position: [23.7, 90.4] },
]

const hq = locations[0].position

function createIcon(isHQ) {
  const size = isHQ ? 20 : 14
  const color = isHQ ? '#3b82f6' : '#d4a843'
  const pulseSize = isHQ ? 40 : 0
  return L.divIcon({
    className: '',
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2 - 4],
    html: `
      <div style="position:relative;width:${size}px;height:${size}px;">
        ${isHQ ? `<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:${pulseSize}px;height:${pulseSize}px;border-radius:50%;background:${color};opacity:0.15;animation:mapPulse 2s ease-out infinite;"></div>
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:${pulseSize * 0.7}px;height:${pulseSize * 0.7}px;border-radius:50%;background:${color};opacity:0.1;animation:mapPulse 2s ease-out infinite 0.5s;"></div>` : ''}
        <div style="width:${size}px;height:${size}px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3),0 0 20px ${color}40;position:relative;z-index:10;"></div>
      </div>
    `,
  })
}

function getCurvedPoints(start, end, numPoints = 50) {
  const points = []
  const midLat = (start[0] + end[0]) / 2
  const midLng = (start[1] + end[1]) / 2
  const dist = Math.sqrt(Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2))
  const offsetLat = midLat + dist * 0.15
  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints
    const lat = (1 - t) * (1 - t) * start[0] + 2 * (1 - t) * t * offsetLat + t * t * end[0]
    const lng = (1 - t) * (1 - t) * start[1] + 2 * (1 - t) * t * midLng + t * t * end[1]
    points.push([lat, lng])
  }
  return points
}

function AnimatedLines() {
  const map = useMap()
  const animRef = useRef(null)
  const markersRef = useRef([])

  useEffect(() => {
    const otherLocations = locations.filter(l => !l.isHQ)
    const curves = otherLocations.map(loc => getCurvedPoints(hq, loc.position))

    markersRef.current.forEach(m => m.remove())
    markersRef.current = []

    const dotMarkers = curves.map(() => {
      const marker = L.circleMarker([0, 0], {
        radius: 4,
        fillColor: '#3b82f6',
        fillOpacity: 0.9,
        color: 'white',
        weight: 1.5,
      }).addTo(map)
      return marker
    })
    markersRef.current = dotMarkers

    let frame = 0
    function animate() {
      frame++
      dotMarkers.forEach((marker, i) => {
        const curve = curves[i]
        const speed = 80 + i * 15
        const idx = Math.floor((frame / speed) * curve.length) % curve.length
        marker.setLatLng(curve[idx])
      })
      animRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animRef.current)
      dotMarkers.forEach(m => m.remove())
    }
  }, [map])

  return null
}

export default function GlobalPresenceMap() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="py-14 lg:py-20 bg-[#030a16] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Worldwide Operations</h4>
          <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
            Global <span className="text-eurogold-400">Presence</span>
          </h2>
          <p className="text-white/50 text-sm mt-3 max-w-xl mx-auto">
            While based in India, Eurocert operates internationally through the Eurocert Group, supporting clients across industries worldwide.
          </p>
        </div>

        {/* Map */}
        <div className="relative rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(212,168,67,0.1)] overflow-hidden" style={{ height: '520px' }}>
          <style>{`
            @keyframes mapPulse {
              0% { transform: translate(-50%,-50%) scale(0.5); opacity: 0.3; }
              100% { transform: translate(-50%,-50%) scale(1.5); opacity: 0; }
            }
            .leaflet-container { font-family: system-ui, sans-serif; }
            .custom-popup .leaflet-popup-content-wrapper {
              background: #030a16;
              color: white;
              border-radius: 16px;
              box-shadow: 0 10px 40px rgba(0,0,0,0.3);
              border: 1px solid rgba(212,168,67,0.2);
              padding: 0;
            }
            .custom-popup .leaflet-popup-content {
              margin: 14px 18px;
              font-size: 13px;
              line-height: 1.4;
            }
            .custom-popup .leaflet-popup-tip {
              background: #030a16;
              border: 1px solid rgba(212,168,67,0.2);
            }
            .custom-popup .popup-name {
              font-weight: 800;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              color: #d4a843;
              margin-bottom: 4px;
            }
            .custom-popup .popup-desc {
              color: rgba(255,255,255,0.6);
              font-size: 12px;
            }
            .custom-popup .popup-hq {
              display: inline-block;
              background: rgba(59,130,246,0.15);
              color: #60a5fa;
              font-size: 9px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.15em;
              padding: 3px 8px;
              border-radius: 6px;
              border: 1px solid rgba(59,130,246,0.2);
              margin-top: 6px;
            }
            .leaflet-control-zoom a {
              background: white !important;
              color: #1e293b !important;
              border: 1px solid #e2e8f0 !important;
              border-radius: 12px !important;
              width: 36px !important;
              height: 36px !important;
              line-height: 36px !important;
              font-size: 18px !important;
              box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important;
            }
            .leaflet-control-zoom {
              border: none !important;
              border-radius: 14px !important;
              overflow: hidden;
              box-shadow: none !important;
            }
            .leaflet-control-zoom a + a {
              margin-top: 4px !important;
            }
          `}</style>

          {loaded && (
            <MapContainer
              center={[32, 55]}
              zoom={3}
              minZoom={2}
              maxZoom={18}
              scrollWheelZoom={true}
              zoomControl={true}
              style={{ height: '100%', width: '100%' }}
            >
              {/* Colorful realistic tiles (OpenStreetMap) */}
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Curved connection lines */}
              {locations.filter(l => !l.isHQ).map((loc, i) => (
                <Polyline
                  key={`curve-${i}`}
                  positions={getCurvedPoints(hq, loc.position)}
                  pathOptions={{
                    color: '#3b82f6',
                    weight: 2.5,
                    opacity: 0.5,
                    dashArray: '8 6',
                    lineCap: 'round',
                  }}
                />
              ))}

              {/* Animated dots traveling along lines */}
              <AnimatedLines />

              {/* Location markers */}
              {locations.map((loc, i) => (
                <Marker key={`marker-${i}`} position={loc.position} icon={createIcon(loc.isHQ)}>
                  <Popup className="custom-popup" closeButton={false}>
                    <div className="popup-name">{loc.name}</div>
                    <div className="popup-desc">{loc.desc}</div>
                    {loc.isHQ && <div className="popup-hq">Headquarters</div>}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>

        {/* Location cards below map */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {locations.map((loc, i) => (
            <div key={i} className={`rounded-2xl border p-4 text-center transition-all duration-300 group hover:shadow-lg ${
              loc.isHQ
                ? 'bg-eurogold-400 border-eurogold-400 shadow-md'
                : 'bg-white/5 border-white/10 hover:border-eurogold-400/40 hover:bg-white/10'
            }`}>
              <div className={`w-3 h-3 rounded-full mx-auto mb-2.5 ${
                loc.isHQ ? 'bg-[#030a16] shadow-[0_0_8px_rgba(0,0,0,0.3)]' : 'bg-eurogold-400 shadow-[0_0_8px_rgba(212,168,67,0.3)]'
              }`}></div>
              <h4 className={`heading-font text-sm font-bold uppercase tracking-wider mb-1 ${
                loc.isHQ ? 'text-[#030a16]' : 'text-white'
              }`}>{loc.name}</h4>
              <p className={`text-[11px] leading-relaxed ${
                loc.isHQ ? 'text-[#030a16]/70' : 'text-white/50'
              }`}>{loc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
