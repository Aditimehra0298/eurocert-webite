import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const services = [
  { icon: 'fa-shield-alt', title: 'ISO 50001 Certification & Compliance', description: 'Full scope verification and certification for Energy Management System requirements under ISO 50001.' },
  { icon: 'fa-clipboard-check', title: 'Comprehensive Audit & Assessment', description: 'Thorough on-site and documentation audits to evaluate your energy management system effectiveness and efficiency.' },
  { icon: 'fa-chalkboard-teacher', title: 'Training & Consultancy', description: 'Expert coaching and training for your teams on ISO 50001 implementation and energy efficiency best practices.' },
  { icon: 'fa-headset', title: 'Ongoing Compliance Support', description: 'Continuous monitoring and support to maintain your ISO 50001 certification and energy performance targets.' },
  { icon: 'fa-file-alt', title: 'Documentation & Reporting', description: 'Professional energy documentation, baseline reporting, and energy performance indicator (EnPI) tracking assistance.' },
  { icon: 'fa-sync-alt', title: 'Remediation Support', description: 'Fixing non-conformities and gaps identified during the energy management assessment process.' }
]

const benefits = [
  { icon: 'fa-coins', title: 'Energy Cost Saving', desc: 'Significant energy cost saving across operations.' },
  { icon: 'fa-industry', title: 'Reduced Operations Cost', desc: 'Reduction of operation and production cost.' },
  { icon: 'fa-smog', title: 'Lower Emissions', desc: 'Reduction of greenhouse gas emissions.' },
  { icon: 'fa-shoe-prints', title: 'Carbon Footprint', desc: 'Improvement of carbon & energy footprint.' },
  { icon: 'fa-bolt', title: 'Energy Efficiency', desc: 'Improvement of Energy Efficiency by adopting Best Available Techniques.' },
  { icon: 'fa-gavel', title: 'Legal Compliance', desc: 'Compliance with legal requirements.' },
  { icon: 'fa-leaf', title: 'Green Image', desc: 'Improvement of corporate image (green company).' },
  { icon: 'fa-users', title: 'Energy Awareness', desc: 'Increase of energy awareness among personnel.' }
]

const relatedServices = [
  { title: 'ISO 9001', subtitle: 'Quality Management', image: '/m2.png', link: '/management-system/iso-9001' },
  { title: 'ISO 14001', subtitle: 'Environmental Management', image: '/m3.png', link: '/management-system/iso-14001' },
  { title: 'ISO 45001', subtitle: 'OH&S Management', image: '/m4.png', link: '/management-system/iso-45001' }
]

export default function ISO50001() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/m6.png" className="w-full h-full object-cover opacity-30" alt="ISO 50001 Energy Management" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Energy management system standard</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            ISO 50001 — Energy Management
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Framework for efficient energy use, targets, data-driven decisions, and measurable results.
          </p>
        </div>
      </section>

      {/* Intro + What Is - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Standard Overview</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  ISO 50001:2011 — <span className="text-euro-600">Energy Management</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Standard ISO 50001:2011 concerns all companies aiming at reducing their energy consumption and improving their energy efficiency. Emphasis must be given to heavy industries that may have intense energy consumption or are involved in the European Trading Scheme according to 2003/87/EC.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                The standard, however, also applies to any other public or private organization that implements energy saving procedures and aims to improve energy efficiency of its buildings and its total operation.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Taking into consideration the above, Energy Management Systems can be implemented by all companies regardless of their activity and especially by those already certified with ISO 9001, 14001 and 18001. According to EU Guidelines, all member states should commit to an annual reduction of their energy consumption.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-bolt text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">About ISO 50001:2011</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  Under the EU framework, ISO has issued the ISO 50001:2011, an energy management standard, according to which an initial energy review takes place, energy aspects are identified and energy saving action plans are implemented aiming at improving the energy footprint.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The Plan-Do-Check-Act principle also applies to this standard. Furthermore, the ISO 50001:2011 structure is similar to that of ISO 14001:2004, so that it can be easily integrated with Environmental Management or Quality Management Systems.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/m6.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="ISO 50001 Energy Management" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Certification - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Certification Benefits</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Benefits of ISO 50001:2011 <span className="text-euro-600">Certification</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group text-center">
                <div className="w-12 h-12 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 mx-auto group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${b.icon} text-lg`}></i>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{b.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Services</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              ISO 50001 <span className="text-euro-600">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${s.icon} text-base`}></i>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Eurocert - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Trusted Certification Partner</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Why Certify with Eurocert SA?
                </h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-building text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">About Eurocert</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    EUROCERT S A is a Greek Independent Certification Body accredited by Greek and International Accreditation Bodies with offices and activity in Greece and abroad.
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    EUROCERT S A possesses highly-trained and educated auditors with great expertise, knowledge of local and global environmental legislation and experience in their field.
                  </p>
                </div>
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-award text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">Our Expertise</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    EUROCERT S A has earned recognition in the field of environmental management system certification by conducting audits and awarding certificates globally according to ISO 14001, EMAS Regulation and Verification of Greenhouse Gas Emissions for many years.
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed font-medium">
                    EUROCERT S A is one of the first certification bodies in Greece having gained accreditation by ESYD to certify energy management systems according to ISO 50001:2011. Certification with EUROCERT S A means evaluation and acceptance by an accredited, well-known and well-respected third-party organization.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="p-5 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                  <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">25+</span>
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Years Experience</span>
                </div>
                <div className="p-5 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                  <span className="heading-font text-eurogold-400 font-bold text-2xl block mb-1 leading-none">ESYD</span>
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Accredited</span>
                </div>
                <div className="p-5 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                  <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">100%</span>
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Have Questions?</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Frequently Asked <span className="text-euro-600">Questions</span>
              </h2>
            </div>
            <div className="space-y-5">
              <div className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-question text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[12px] font-bold uppercase tracking-widest text-slate-900">Why certify?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  ISO 50001:2011 helps improve the energy performance of a company and enhance its reputation in the market. Furthermore, reduction in energy consumption is likely to become a regulatory requirement in the near future, if not already compulsory.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-building text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[12px] font-bold uppercase tracking-widest text-slate-900">Does ISO 50001:2011 apply only to buildings?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  No, it does not apply only to buildings. Energy balance will be conducted to all points of energy usage so that significant energy aspects are identified, energy consumption is measured and energy objectives are set. Naturally, this energy review includes company buildings.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-chart-bar text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[12px] font-bold uppercase tracking-widest text-slate-900">What is an energy baseline?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  An energy baseline is a quantitative reference providing a basis for comparison of energy performance. It is determined during the energy review and reflects a specific time period. It may be normalised using variables affecting energy use or consumption and is used for calculating real energy cost savings after the implementation of energy action plans as well as to compare energy consumption trends over the years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Certifications - Light */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
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
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Quick Inquiry</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our energy management experts are ready to guide your organization through ISO 50001 certification.</p>
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
