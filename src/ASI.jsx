import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const objectives = [
  { icon: 'fa-globe', title: 'Define Global Standards', desc: 'Define global standards for sustainability for the aluminium industry across the entire value chain.' },
  { icon: 'fa-chart-line', title: 'Promote Continual Improvements', desc: 'Promote measurable and continual improvements in the key impactful areas in Aluminium supply chain.' },
  { icon: 'fa-certificate', title: 'Credible Assurance System', desc: 'Develop a credible assurance and certification system for responsible aluminium production.' }
]

const standards = [
  {
    icon: 'fa-industry',
    title: 'ASI Performance Standard',
    desc: 'Covers critical issues for the entire aluminium value chain, including greenhouse gas emissions, waste management, material stewardship, biodiversity and human rights.',
    color: 'euro-600'
  },
  {
    icon: 'fa-link',
    title: 'ASI Chain of Custody (CoC) Standard',
    desc: 'Links responsible production with responsible sourcing and increases the emphasis on sustainability issues in procurement practices. The primary purpose is to drive implementation of the performance requirements defined in the ASI Performance Standard.',
    color: 'euro-600'
  }
]

const certificationSteps = [
  { num: '01', title: 'Self Assessment', desc: 'Conduct an internal self-assessment against the applicable ASI standard requirements.' },
  { num: '02', title: 'Certification Audit', desc: 'An accredited certification body like Eurocert S.A conducts a thorough certification audit.' },
  { num: '03', title: 'Audit Report', desc: 'A comprehensive audit report is prepared documenting findings and conformity status.' },
  { num: '04', title: 'Certification Issued', desc: 'Upon successful completion, ASI certification is issued for the applicable standard.' },
  { num: '05', title: 'Periodic Reviews', desc: 'Ongoing periodic reviews to ensure continued compliance and drive improvement.' }
]

const performanceAreas = [
  { icon: 'fa-smog', title: 'Greenhouse Gas Emissions' },
  { icon: 'fa-recycle', title: 'Waste Management' },
  { icon: 'fa-cubes', title: 'Material Stewardship' },
  { icon: 'fa-tree', title: 'Biodiversity' },
  { icon: 'fa-fist-raised', title: 'Human Rights' },
  { icon: 'fa-water', title: 'Water Stewardship' }
]

const relatedServices = [
  { title: 'RJC', subtitle: 'Responsible Jewellery Council', image: '/b7.png', link: '/social-audits/rjc' },
  { title: 'RMI', subtitle: 'Responsible Minerals', image: '/b8.png', link: '/social-audits/rmi' },
  { title: 'ISO 14001', subtitle: 'Environmental Management', image: '/m4.png', link: '/management-system/iso-14001' }
]

export default function ASI() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/b15.png" className="w-full h-full object-cover opacity-30" alt="Aluminium Stewardship Initiative Certification" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Improving Sustainability in the Aluminium Value Chain</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            ASI — <span className="text-eurogold-400">Aluminium Stewardship Initiative</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A global non-profit standards setting and certification organisation making responsible production in the Aluminium industry a reality
          </p>
        </div>
      </section>

      {/* About ASI - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Initiative Overview</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  What is <span className="text-euro-600">Aluminium Stewardship Initiative?</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                The Aluminium Stewardship Initiative (ASI) is a global non-profit standards setting and certification organisation. It is making standards and taking initiatives to make responsible production in the Aluminium industry. Most of Aluminium Stewardship standards are freely downloadable.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Any organization which is interested in Aluminium supply chain or is a part of Aluminium supply chain can become a member of ASI. The <strong className="text-slate-700">Performance Standard</strong> is what you should first adopt and get certified for before moving to the Chain of Custody standard.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-check-double text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Eurocert — Accredited for ASI</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Eurocert S.A is accredited for performing certification audits for both ASI standards — the Performance Standard and the Chain of Custody Standard. Our experienced auditors provide comprehensive support throughout the certification process.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/b15.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Aluminium Stewardship Initiative" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ASI Objectives - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">ASI Objectives</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Core <span className="text-euro-600">Objectives</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {objectives.map((o, i) => (
                <div key={i} className="p-7 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group text-center">
                  <div className="w-12 h-12 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 mx-auto group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${o.icon} text-lg`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-3">{o.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Main Standards - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">ASI Standards</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Two Main <span className="text-euro-600">Standards</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {standards.map((s, i) => (
                <div key={i} className="p-8 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-5 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${s.icon} text-lg`}></i>
                  </div>
                  <h4 className="heading-font text-sm font-bold uppercase tracking-widest text-slate-900 mb-3">{s.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Performance Areas - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Performance Standard</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Key <span className="text-euro-600">Performance Areas</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {performanceAreas.map((a, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 shrink-0 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${a.icon} text-base`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900">{a.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Certification Process</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  ASI <span className="text-eurogold-400">Certification Process</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                {certificationSteps.map((s, i) => (
                  <div key={i} className="p-5 rounded-2xl border border-white/5 bg-white/2 text-center">
                    <div className="w-11 h-11 rounded-xl bg-eurogold-400/10 flex items-center justify-center mx-auto mb-3">
                      <span className="heading-font text-eurogold-400 font-bold text-sm">{s.num}</span>
                    </div>
                    <h4 className="heading-font text-[10px] font-bold uppercase tracking-widest text-white mb-2">{s.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">FAQs</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Frequently Asked <span className="text-euro-600">Questions</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-question text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">How Can a Manufacturing Company Join ASI?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Any organization which is interested in Aluminium supply chain or is a part of Aluminium supply chain can become a member of ASI. Membership is open to companies across the entire value chain.
                </p>
              </div>
              <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-question text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Which ASI Standard Should I First Adopt?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The <strong className="text-slate-700">Performance Standard</strong> of ASI is what you should first adopt and get certified for before you move to the Chain of Custody standard. The Performance Standard is the foundation for responsible aluminium production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eurocert - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Accredited Certification Body</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Why Choose <span className="text-euro-600">Eurocert?</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-building text-white text-sm"></i>
                  </div>
                  <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">About Eurocert</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Eurocert S.A is a Greek Independent Certification Body accredited by Greek and International Accreditation Bodies with offices in more than 14 countries in Europe and Asia. Eurocert possesses highly-trained and educated auditors with great expertise in sustainability and aluminium industry standards.
                </p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-certificate text-white text-sm"></i>
                  </div>
                  <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">ASI Accredited</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  Eurocert S.A is <strong className="text-slate-700">accredited for performing certification audits for both ASI standards</strong> — the Performance Standard and the Chain of Custody Standard.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Certification by Eurocert means evaluation and acceptance by an accredited and well-respected third-party professional organization with global reach across 14+ countries.
                </p>
              </div>
            </div>
            <div className="p-5 mt-8 rounded-xl border border-euro-100 bg-euro-50/40 text-center">
              <p className="text-slate-500 text-sm leading-relaxed">
                <span className="text-euro-600 font-bold">We are offering above services on behalf of Eurocert S.A</span> — a Pan-European Certification body operating from Athens with global reach.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="p-5 bg-white rounded-xl border border-euro-100 text-center">
                <span className="heading-font text-euro-600 font-bold text-3xl block mb-1 leading-none">14+</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] heading-font">Countries</span>
              </div>
              <div className="p-5 bg-white rounded-xl border border-euro-100 text-center">
                <span className="heading-font text-euro-600 font-bold text-3xl block mb-1 leading-none">25+</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] heading-font">Years Experience</span>
              </div>
              <div className="p-5 bg-white rounded-xl border border-euro-100 text-center">
                <span className="heading-font text-euro-600 font-bold text-3xl block mb-1 leading-none">100%</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] heading-font">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Explore More</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Related Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {relatedServices.map((s, i) => (
              <Link key={i} to={s.link} className="group relative h-[280px] rounded-2xl overflow-hidden border border-slate-200 hover:border-euro-300 shadow-md hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${s.image}')` }} />
                <div className="absolute inset-0 bg-linear-to-t from-[#030a16]/80 via-[#030a16]/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <h4 className="text-white text-sm heading-font font-bold uppercase tracking-widest mb-1">{s.title}</h4>
                  <span className="text-[9px] font-bold uppercase text-eurogold-400 tracking-[0.2em] heading-font">{s.subtitle}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto p-10 sm:p-12 rounded-2xl border border-white/5 bg-white/2">
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Get Certified</h4>
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Start Your ASI Certification</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our ASI-accredited auditors are ready to guide your organization through Aluminium Stewardship certification for both Performance and Chain of Custody standards.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20">
                  Get Started <i className="fas fa-arrow-right text-[9px]"></i>
                </Link>
                <a href="tel:+917009007527" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white border border-white/15 rounded-full px-8 py-3.5 hover:bg-white/5 transition-all">
                  <i className="fas fa-phone text-[9px]"></i> Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
