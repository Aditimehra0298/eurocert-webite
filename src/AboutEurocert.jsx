import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const services = [
  {
    category: 'Social & Ethical Audits',
    icon: 'fa-handshake',
    items: [
      { title: 'SEDEX / SMETA Audits', desc: 'Ethical supply-chain audits focusing on labour standards, working conditions, health & safety, and environmental compliance.' },
      { title: 'SA8000 Certification', desc: 'An internationally recognized standard for social accountability, ensuring fair labour practices and worker welfare.' },
    ]
  },
  {
    category: 'Quality, Safety & Product Certifications',
    icon: 'fa-shield-alt',
    items: [
      { title: 'CE Marking Certification', desc: 'For products such as machinery, construction materials, lifts, pressure equipment, EN 1090, PED, ATEX and more.' },
      { title: 'ISO Management System Certifications', desc: 'Including ISO 9001, ISO 14001, ISO 45001, ISO 50001, ISO 27001, and others.' },
    ]
  },
  {
    category: 'Sustainability & Sector-Specific Standards',
    icon: 'fa-leaf',
    items: [
      { title: 'Food Safety & Agriculture', desc: 'FSSC 22000, HACCP, GLOBALGAP, IFS certifications for food safety and agricultural standards.' },
      { title: 'Social & Sustainability Standards', desc: 'WRAP, RMI, SLCP, RJC — social and sustainability certifications.' },
      { title: 'Environmental Compliance', desc: 'Carbon footprint & environmental compliance certifications.' },
    ]
  }
]

const strengths = [
  'Impartial and transparent certification services — based on a strict ethical code.',
  'Globally accepted certificates and audits — trusted by international buyers and regulators.',
  'Custom guidance & support throughout the certification lifecycle.',
  'Professional and experienced audit teams trained internationally.',
  'Fast, reliable processes and responsive customer service.',
]

const locations = [
  { name: 'India', desc: 'Headquarters — Panchkula', x: 67.5, y: 48, isHQ: true },
  { name: 'Greece', desc: 'Parent — Eurocert SA (est. 1998)', x: 52.5, y: 38 },
  { name: 'Italy', desc: 'Western Europe Operations', x: 49.5, y: 36 },
  { name: 'Bulgaria', desc: 'Eastern Europe Operations', x: 53.5, y: 35 },
  { name: 'China', desc: 'Asia-Pacific Operations', x: 77, y: 40 },
  { name: 'Bangladesh', desc: 'South Asia Operations', x: 72, y: 46 },
]

export default function AboutEurocert() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/h0.png" className="w-full h-full object-cover opacity-30" alt="About Eurocert Asia" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Established 1998 — Global Certification Network</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            About <span className="text-eurogold-400">Eurocert Asia</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A leading independent third-party certification, compliance, audit, and inspection body
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3 space-y-6">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase font-bold">Who We Are</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Eurocert Inspection <span className="text-euro-600">Services Pvt. Ltd.</span>
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Eurocert Asia — officially operating as Eurocert Inspection Services Pvt. Ltd. — is a leading independent third-party certification, compliance, audit, and inspection body headquartered in Panchkula, Haryana, India. It is part of the global Eurocert network, whose parent certification body (Eurocert SA) was established in 1998 in Athens, Greece.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Eurocert Asia helps businesses of all sizes meet international regulatory, quality, social accountability, and sustainability standards — enabling access to new markets, stronger reputation, and continued growth. Its team comprises highly qualified auditors and specialists trained across India, Asia, and Europe in fields such as law, management, human resources, and industry compliance.
              </p>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/a1.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Eurocert Asia" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">Our Services</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              What We <span className="text-euro-600">Do</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">Comprehensive certification and compliance services supporting organizations in demonstrating conformity with global standards</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((group, gi) => (
              <div key={gi} className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#030a16] px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/15 flex items-center justify-center shrink-0">
                      <i className={`fas ${group.icon} text-eurogold-400 text-sm`}></i>
                    </div>
                    <h3 className="heading-font text-sm font-bold text-white uppercase tracking-widest">{group.category}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-5">
                  {group.items.map((item, ii) => (
                    <div key={ii}>
                      <h4 className="heading-font text-sm font-bold text-slate-800 uppercase tracking-wider mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-[13px] leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Eurocert Asia */}
      <section className="py-14 lg:py-18 bg-[#030a16] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Why Us</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-8">
                Why Choose <span className="text-eurogold-400">Eurocert Asia</span>
              </h2>
              <p className="text-white/50 text-[15px] leading-relaxed mb-8">
                Eurocert Asia partners with companies that want credible, globally recognized certification and independent audit reports. These qualities make Eurocert Asia a strategic partner for manufacturers, exporters, and service providers seeking international marketplace entry and compliance assurance.
              </p>
              <div className="space-y-4">
                {strengths.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-eurogold-400/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-eurogold-400/20 transition">
                      <i className="fas fa-check text-eurogold-400 text-[10px]"></i>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(212,168,67,0.1)] h-[350px] md:h-[420px] group flex items-center justify-center bg-white/5">
              <img src="/Untitled design (19).png" className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105" alt="Why Eurocert" />
              <div className="absolute inset-0 bg-linear-to-t from-[#030a16]/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-euro-600/10 flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-bullseye text-euro-600 text-xl"></i>
            </div>
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">Our Purpose</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Our <span className="text-euro-600">Mission</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              To empower businesses with clear guidance, fair and transparent audits, and globally recognized certifications — so they can build trust with clients, win contracts, and expand without barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence — Light Theme with Map */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">Worldwide Operations</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Global <span className="text-euro-600">Presence</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto">While based in India, Eurocert operates internationally through the Eurocert Group, supporting clients across industries worldwide.</p>
          </div>

          {/* Map */}
          <div className="relative bg-[#f8fafc] rounded-3xl border border-slate-100 shadow-sm overflow-hidden p-4 md:p-8">
            <svg viewBox="0 0 100 60" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* World Map Simplified Continents */}
              <defs>
                <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e2e8f0" />
                  <stop offset="100%" stopColor="#cbd5e1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="0.4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* North America */}
              <path d="M5,12 Q8,8 15,10 Q18,9 20,12 Q22,10 24,13 Q23,16 22,20 Q20,24 18,26 Q16,28 14,27 Q12,30 10,28 Q8,26 7,22 Q5,18 5,15 Z" fill="url(#landGrad)" opacity="0.6" />
              {/* South America */}
              <path d="M18,32 Q20,30 22,32 Q24,34 25,38 Q24,42 23,46 Q22,50 20,52 Q18,50 17,46 Q16,42 16,38 Q17,35 18,32 Z" fill="url(#landGrad)" opacity="0.6" />
              {/* Europe */}
              <path d="M44,12 Q46,10 48,11 Q50,10 52,12 Q54,11 56,13 Q55,16 54,18 Q52,20 50,22 Q48,24 46,22 Q44,20 43,18 Q42,15 44,12 Z" fill="url(#landGrad)" opacity="0.7" />
              {/* Africa */}
              <path d="M46,26 Q48,24 50,25 Q53,24 55,27 Q56,30 57,34 Q56,38 55,42 Q53,46 51,48 Q49,46 48,42 Q46,38 45,34 Q44,30 46,26 Z" fill="url(#landGrad)" opacity="0.6" />
              {/* Asia */}
              <path d="M56,10 Q60,8 65,10 Q70,9 75,12 Q80,10 84,14 Q86,18 85,22 Q83,26 80,28 Q76,30 72,32 Q68,34 65,32 Q62,34 60,30 Q58,26 56,22 Q55,18 56,14 Z" fill="url(#landGrad)" opacity="0.7" />
              {/* India subcontinent detail */}
              <path d="M64,32 Q66,30 68,31 Q70,30 72,33 Q71,36 70,40 Q69,44 67,46 Q65,44 64,40 Q63,36 64,32 Z" fill="url(#landGrad)" opacity="0.7" />
              {/* Southeast Asia / Indonesia */}
              <path d="M76,34 Q78,33 80,35 Q82,34 84,36 Q86,38 85,40 Q82,42 80,40 Q78,38 76,36 Z" fill="url(#landGrad)" opacity="0.5" />
              {/* Australia */}
              <path d="M80,44 Q83,42 86,44 Q88,46 89,48 Q88,50 86,52 Q84,52 82,50 Q80,48 80,44 Z" fill="url(#landGrad)" opacity="0.5" />

              {/* Connection lines from HQ (India) to all locations */}
              {locations.filter(l => !l.isHQ).map((loc, i) => (
                <line
                  key={`line-${i}`}
                  x1={locations[0].x} y1={locations[0].y}
                  x2={loc.x} y2={loc.y}
                  stroke="#3b82f6"
                  strokeWidth="0.15"
                  strokeDasharray="0.6 0.4"
                  opacity="0.5"
                />
              ))}

              {/* Animated pulses along connection lines */}
              {locations.filter(l => !l.isHQ).map((loc, i) => (
                <circle key={`pulse-${i}`} r="0.3" fill="#3b82f6" opacity="0.6">
                  <animateMotion
                    dur={`${3 + i * 0.5}s`}
                    repeatCount="indefinite"
                    path={`M${locations[0].x},${locations[0].y} L${loc.x},${loc.y}`}
                  />
                </circle>
              ))}

              {/* Location dots */}
              {locations.map((loc, i) => (
                <g key={`loc-${i}`}>
                  {/* Outer pulse ring for HQ */}
                  {loc.isHQ && (
                    <circle cx={loc.x} cy={loc.y} r="1.8" fill="none" stroke="#3b82f6" strokeWidth="0.15" opacity="0.4">
                      <animate attributeName="r" from="1" to="2.5" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}
                  {/* Dot glow */}
                  <circle cx={loc.x} cy={loc.y} r={loc.isHQ ? '1' : '0.7'} fill={loc.isHQ ? '#3b82f6' : '#d4a843'} filter="url(#glow)" opacity="0.3" />
                  {/* Main dot */}
                  <circle cx={loc.x} cy={loc.y} r={loc.isHQ ? '0.7' : '0.5'} fill={loc.isHQ ? '#3b82f6' : '#d4a843'} />
                  {/* Inner white dot */}
                  <circle cx={loc.x} cy={loc.y} r={loc.isHQ ? '0.25' : '0.18'} fill="white" />
                </g>
              ))}
            </svg>

            {/* Location Labels — positioned over the map */}
            <div className="absolute inset-0 pointer-events-none">
              {/* We'll use the grid below for labels */}
            </div>
          </div>

          {/* Location cards below map */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {locations.map((loc, i) => (
              <div key={i} className={`rounded-2xl border p-4 text-center transition-all duration-300 group hover:shadow-lg ${
                loc.isHQ
                  ? 'bg-euro-600 border-euro-600 shadow-md'
                  : 'bg-white border-slate-100 hover:border-eurogold-400/40'
              }`}>
                <div className={`w-3 h-3 rounded-full mx-auto mb-2.5 ${
                  loc.isHQ ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'bg-eurogold-400 shadow-[0_0_8px_rgba(212,168,67,0.3)]'
                }`}></div>
                <h4 className={`heading-font text-sm font-bold uppercase tracking-wider mb-1 ${
                  loc.isHQ ? 'text-white' : 'text-slate-800'
                }`}>{loc.name}</h4>
                <p className={`text-[11px] leading-relaxed ${
                  loc.isHQ ? 'text-white/70' : 'text-slate-400'
                }`}>{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Headquarters */}
      <section className="py-14 lg:py-18 bg-[#030a16] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Get In Touch</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-8">
              Contact &amp; <span className="text-eurogold-400">Headquarters</span>
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 space-y-5">
              <p className="text-white/80 text-base font-semibold">Eurocert Inspection Services Pvt. Ltd.</p>
              <p className="text-white/50 text-sm leading-relaxed">304-Midtown Tower, Peer Muchalla,<br />Panchkula, Haryana 134109, India</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2">
                <a href="tel:+919316012883" className="flex items-center gap-3 text-eurogold-400 hover:text-eurogold-300 transition">
                  <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                    <i className="fas fa-phone-alt text-eurogold-400 text-sm"></i>
                  </div>
                  <span className="heading-font text-sm font-bold">+91-9316012883</span>
                </a>
                <a href="mailto:info@eurocert.in" className="flex items-center gap-3 text-eurogold-400 hover:text-eurogold-300 transition">
                  <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                    <i className="fas fa-envelope text-eurogold-400 text-sm"></i>
                  </div>
                  <span className="heading-font text-sm font-bold">info@eurocert.in</span>
                </a>
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-3 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-eurogold-400 border border-eurogold-400/30 rounded-full px-8 py-4 hover:bg-eurogold-400/10 transition-all group mt-8">
              Contact Us <i className="fas fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
