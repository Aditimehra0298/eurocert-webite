import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '50+', label: 'Certification Types' },
  { value: '3', label: 'Continents Served' },
  { value: '1000+', label: 'Certified Clients' }
]

const accreditationsList = [
  { standard: 'SA8000:2014', desc: 'Social Accountability Standard', link: 'http://www.saasaccreditation.org/?q=node/88' },
  { standard: 'ISO 9001:2015', desc: 'Quality Management System', link: 'http://www.esyd.gr/portal/p/esyd/en/showOrgInfo.jsp?id=17589' },
  { standard: 'ISO 14001:2015', desc: 'Environmental Management System' },
  { standard: 'ISO 45001:2018', desc: 'Occupational Health and Safety Management System' },
  { standard: 'ISO 22000:2018', desc: 'Food Safety Management System' },
  { standard: 'ISO/IEC 27001:2013', desc: 'Information Security Management System' },
  { standard: 'ISO 50001:2011', desc: 'Energy Management System' },
  { standard: 'AGRO 2.1 & 2.2', desc: 'Systems of Integrated Management in Agricultural Production & Rural Environment' },
  { standard: 'ELOT 1429:2008', desc: 'Managerial Capability of Organizations Implementing Projects of Public Interest' },
  { standard: 'ELOT 1435:2009', desc: 'Management System of Companies Providing Communication Services' },
  { standard: 'E.C. Directives', desc: 'Quality Assurance Systems' },
  { standard: 'EMAS 1221:2009', desc: 'Eco Management Audit Scheme' },
  { standard: 'GHG Verification', desc: 'Verifications of Greenhouse Gases Emissions' },
  { standard: 'Proficiency Testing', desc: 'Proficiency Testing Services' },
  { standard: 'ADR', desc: 'European Agreement – Inspection of vehicles for carriage of dangerous goods by road' },
  { standard: 'Industrial Products', desc: 'Lifts, Lifting Equipment, Pressure Equipment, Machinery etc.' },
  { standard: 'ISO/IEC 22301:2012', desc: 'Business Continuity Management System' },
  { standard: 'IFS', desc: 'International Food Standard' },
  { standard: 'GlobalGAP', desc: 'Global Good Agricultural Practices' },
  { standard: 'Organic Products', desc: 'Organic Products Certification' },
  { standard: 'E.C. Directives', desc: 'Products Certification & Inspection' },
  { standard: 'ISO/IEC 20000-1:2011', desc: 'Information Technology Service Management System' },
  { standard: 'ISO 39001:2012', desc: 'Road Traffic Safety Management System' },
  { standard: 'FSSC 22000', desc: 'Food Safety Management System Certification' },
  { standard: 'ELOT EN 15224:2012', desc: 'Quality Management Systems for Healthcare' }
]

const serviceAreas = [
  { icon: 'fa-award', title: 'Social Accountability', desc: 'SA 8000, SEDEX/SMETA, Social Compliance protocols for global supply chains.', color: 'euro' },
  { icon: 'fa-seedling', title: 'Food Safety & Agri', desc: 'GlobalGAP, IFS, FSSC 22000, HACCP standards for food chain integrity.', color: 'green' },
  { icon: 'fa-lock', title: 'Information Security', desc: 'ISO 27001 ISMS and dedicated Data Protection audits to secure organizational assets.', color: 'indigo' },
  { icon: 'fa-cogs', title: 'Management Systems', desc: 'Core ISO standards including 9001 (Quality), 14001 (Environment), and 45001 (Health & Safety).', color: 'slate' },
  { icon: 'fa-stamp', title: 'CE & EU Directives', desc: 'CE Certification, PED, ATEX, and EN standards for unrestricted European market movement.', color: 'euro' },
  { icon: 'fa-leaf', title: 'Sustainability Solutions', desc: 'ISO 14064, Carbon Footprint Assessment, and environmental impact validation.', color: 'green' }
]

const milestones = [
  { year: '1998', title: 'Foundation Established', desc: 'Eurocert SA was founded as an Independent Third Party Inspection and Certification Body, marking the beginning of our commitment to excellence.' },
  { year: '2000s', title: 'International Expansion', desc: 'Expanded operations across Asia, Europe, and Africa, establishing ourselves as a trusted certification partner globally.' },
  { year: '2010s', title: 'Diversified Services', desc: 'Added comprehensive services including SMETA audits, GlobalGAP, ISO certifications, and CE marking services across multiple industries.' },
  { year: '2024', title: 'Leading Certification Body', desc: 'Today, we stand as one of the most trusted and recognized certification bodies, serving clients across three continents with unwavering commitment to quality.' }
]

const globalRegions = [
  { icon: 'fa-globe-asia', title: 'Asia Region', desc: 'Extensive operations across India, China, Bangladesh, and broader Asian markets.' },
  { icon: 'fa-flag', title: 'Europe Region', desc: 'Strong presence with Eurocert SA headquarters and European market expertise.' },
  { icon: 'fa-globe-africa', title: 'Africa Region', desc: 'Growing operations providing SMETA audits and social compliance services.' },
  { icon: 'fa-globe', title: 'International', desc: 'Global recognition facilitating worldwide market access and compliance.' }
]

const whyChoose = [
  { icon: 'fa-handshake', title: 'Trust & Credibility', desc: 'Independent verification that your organization meets international standards, building global trust.' },
  { icon: 'fa-rocket', title: 'Market Access', desc: 'Unlocking European, Asian, and international markets by demonstrating compliance integrity.' },
  { icon: 'fa-chart-line', title: 'Continuous Quality', desc: 'Identifying improvement areas and enhancing operational efficiency through structured auditing.' },
  { icon: 'fa-star', title: 'Competitive Edge', desc: 'Stand out with internationally recognized certifications that demonstrate compliance excellence.' }
]

const CheckIcon = () => (
  <svg className="w-5 h-5 text-eurogold-400 drop-shadow-[0_0_5px_rgba(212,168,67,0.5)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function Accreditations() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/Video_Generation_From_Image.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#030a16]/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.08)_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(19,62,124,0.15)_0%,transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Internationally Recognized</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Accredited <span className="text-eurogold-400">Excellence</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
            Internationally recognized certifications that validate our commitment to quality, integrity, and professional excellence across global markets.
          </p>

          {/* Hero Mini Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: 'fa-trophy', val: '25+ Years', sub: 'Excellence' },
              { icon: 'fa-globe', val: 'Global', sub: 'Reach' },
              { icon: 'fa-check-circle', val: 'Accredited', sub: 'Verified' },
              { icon: 'fa-lock', val: 'Trusted', sub: 'Intelligence' }
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-2xl border border-white/5 bg-white/2 text-center">
                <div className="w-9 h-9 rounded-xl bg-eurogold-400/10 flex items-center justify-center mx-auto mb-2">
                  <i className={`fas ${item.icon} text-eurogold-400 text-xs`}></i>
                </div>
                <p className="heading-font text-white font-bold text-sm">{item.val}</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest heading-font">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-euro-600 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <span className="heading-font text-white font-bold text-3xl md:text-4xl block mb-1">{stat.value}</span>
                <span className="text-white/70 text-[10px] uppercase tracking-[0.2em] heading-font font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Authority / About ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Technical Authority</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Our <span className="text-euro-600">Foundation</span>
                </h2>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] heading-font mt-1">Independent Third-Party Certification Body</p>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Eurocert Inspection Services Pvt. Ltd. is affiliated with Eurocert SA, an accredited Certification Body founded in 1998. With over 25 years of experience, Eurocert SA operates with a National, European & International range of activities across scientific disciplines.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our accreditations demonstrate a commitment to the highest standards of quality and professional excellence. We provide unbiased, objective assessments that help organizations achieve compliance, improve operations, and gain access to global markets.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: 'fa-bullseye', title: 'Unbiased Assessment', sub: 'Independent evaluations' },
                  { icon: 'fa-check-double', title: 'Quality Standards', sub: 'International benchmarks' },
                  { icon: 'fa-globe', title: 'Global Recognition', sub: 'Worldwide market access' }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl border border-euro-100 bg-euro-50/30 text-center">
                    <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center mx-auto mb-2">
                      <i className={`fas ${item.icon} text-white text-xs`}></i>
                    </div>
                    <h5 className="heading-font text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-0.5">{item.title}</h5>
                    <p className="text-slate-400 text-xs">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[340px] md:h-[440px] group">
              <img src="/a1.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Eurocert Accreditations" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline / Milestones — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Our Journey</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Milestones of Excellence</h2>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
                <div className="space-y-6">
                  {milestones.map((m, i) => (
                    <div key={i} className="flex gap-5 items-start md:pl-4">
                      <div className="w-12 h-12 rounded-full bg-eurogold-400/10 border-2 border-eurogold-400/30 flex items-center justify-center shrink-0 relative z-10">
                        <span className="heading-font text-eurogold-400 font-bold text-xs">{m.year.slice(-2)}</span>
                      </div>
                      <div className="p-5 rounded-2xl border border-white/5 bg-white/2 flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="heading-font text-eurogold-400 font-bold text-lg">{m.year}</span>
                          <div className="h-px bg-white/10 flex-1"></div>
                        </div>
                        <h4 className="heading-font text-[11px] font-bold text-white uppercase tracking-widest mb-2">{m.title}</h4>
                        <p className="text-white/45 text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Accreditation Areas — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Recognized Excellence</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Our Accreditation Areas</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {serviceAreas.map((area, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${area.icon} text-base`}></i>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{area.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Accreditations List — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Complete Registry</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Accreditations of Eurocert S.A</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {accreditationsList.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/2 hover:border-eurogold-400/20 transition-all duration-300 group">
                    <CheckIcon />
                    <div className="min-w-0">
                      <h5 className="heading-font text-[10px] font-bold text-eurogold-400 uppercase tracking-widest mb-0.5">{item.standard}</h5>
                      <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[9px] text-euro-400 hover:text-eurogold-400 mt-1 heading-font uppercase tracking-widest transition-colors">
                          Verify <i className="fas fa-external-link-alt text-[7px]"></i>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Presence — Light ── */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Worldwide Operations</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Global Presence</h2>
              <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto">
                Eurocert operates with a National, European & International range of activities, providing certification services across multiple continents.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {globalRegions.map((region, i) => (
                <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-white text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mx-auto mb-3 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${region.icon} text-base`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-1">{region.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{region.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl border border-euro-100 bg-euro-50/30 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <i className="fas fa-users text-euro-600 text-sm"></i>
                <h5 className="heading-font text-[11px] font-bold text-euro-600 uppercase tracking-widest">Expert Team</h5>
              </div>
              <p className="text-slate-500 text-sm">Trained in <span className="font-semibold">India, China, Bangladesh, Bulgaria,</span> and <span className="font-semibold">Italy</span>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">The Value</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Why Choose Accredited Certification</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {whyChoose.map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/2 group hover:border-eurogold-400/20 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-eurogold-400/10 flex items-center justify-center mb-4 group-hover:bg-eurogold-400/20 transition-all">
                      <i className={`fas ${item.icon} text-eurogold-400 text-base`}></i>
                    </div>
                    <h4 className="heading-font text-[11px] font-bold text-white uppercase tracking-widest mb-2">{item.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Ready to Get <span className="text-euro-600">Certified?</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
              Partner with an accredited certification body trusted by organizations worldwide. Contact us to learn how we can help you achieve your compliance goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-euro-600 rounded-full px-8 py-3.5 hover:bg-euro-700 transition-all shadow-lg">
                Contact Us <i className="fas fa-arrow-right text-[9px]"></i>
              </Link>
              <Link to="/ce-certification" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-euro-600 border border-euro-200 rounded-full px-8 py-3.5 hover:bg-euro-50 transition-all">
                View Services
              </Link>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-400 text-[10px] heading-font tracking-widest uppercase">
              <i className="fas fa-map-marker-alt text-euro-500"></i>
              <span>Eurocert Inspection Services, Panchkula, Haryana</span>
            </div>
            <a href="tel:+917009007527" className="inline-flex items-center gap-2 text-euro-600 heading-font text-sm font-bold mt-3 hover:text-euro-800 transition-colors">
              <i className="fas fa-phone text-xs"></i> +91 7009007527
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse ml-1"></span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
