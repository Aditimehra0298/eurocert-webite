import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const services = [
  { icon: 'fa-shield-alt', title: 'ISO 14001 Certification & Compliance', description: 'Full scope verification and certification for Environmental Management System requirements under ISO 14001.' },
  { icon: 'fa-clipboard-check', title: 'Comprehensive Audit & Assessment', description: 'Thorough on-site and documentation audits to evaluate your environmental management system effectiveness.' },
  { icon: 'fa-chalkboard-teacher', title: 'Training & Consultancy', description: 'Expert coaching and training for your teams on ISO 14001 implementation and environmental best practices.' },
  { icon: 'fa-headset', title: 'Ongoing Compliance Support', description: 'Continuous monitoring and support to maintain your ISO 14001 certification and environmental standards.' },
  { icon: 'fa-file-alt', title: 'Documentation & Reporting', description: 'Professional environmental documentation, impact assessments, and compliance reporting assistance.' },
  { icon: 'fa-sync-alt', title: 'Remediation Support', description: 'Fixing non-conformities and gaps identified during the environmental management assessment process.' }
]

const benefits = [
  { icon: 'fa-coins', title: 'Cost Reduction', desc: 'Reduction of operational and environmental cost.' },
  { icon: 'fa-trophy', title: 'Competitive Advantage', desc: 'Acquirement of competitive advantage in the market.' },
  { icon: 'fa-gavel', title: 'Legal Conformance', desc: 'Conformance with legal requirements and avoidance of authority environmental fines.' },
  { icon: 'fa-bolt', title: 'Energy Saving', desc: 'Significant energy saving through efficient resource management.' },
  { icon: 'fa-users', title: 'Employee Awareness', desc: 'Increase employees\' environmental awareness across the organization.' },
  { icon: 'fa-comments', title: 'External Communication', desc: 'Improvement of external communication with local community and interested parties.' },
  { icon: 'fa-leaf', title: 'Customer Confidence', desc: 'Address environmental concerns of customers and public effectively.' },
  { icon: 'fa-globe-europe', title: 'Sustainable Business', desc: 'Build a sustainable business model for long-term success.' }
]

const relatedServices = [
  { title: 'ISO 9001', subtitle: 'Quality Management', image: '/m2.png', link: '/management-system/iso-9001' },
  { title: 'ISO 45001', subtitle: 'OH&S Management', image: '/m4.png', link: '/management-system/iso-45001' },
  { title: 'ISO 50001', subtitle: 'Energy Management', image: '/m6.png', link: '/management-system/iso-50001' }
]

export default function ISO14001() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/m3.png" className="w-full h-full object-cover opacity-30" alt="ISO 14001 Environmental Management" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Environmental management system standard</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            ISO 14001 — Environmental Management
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Framework for effective environmental management and sustainability.
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
                  ISO 14001:2015 — <span className="text-euro-600">Environmental Management</span>
              </h2>
            </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                ISO 14001:2015 standard concerns all companies aiming at improving their environmental performance. As concern for environmental protection becomes globally more intense day by day, more companies wish to prove their environmental awareness to their clients and interested parties by adopting and implementing an Environmental Management System.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                ISO 14001:2015 is a process standard. Therefore, it can be implemented by any company, regardless of its size or activity including product manufacturers or service providers.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-leaf text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">What is ISO 14001:2015?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  ISO 14001:2015 applies to implemented Environmental Management System and sets the requirements for what the organization should do to manage processes that affect the impact of its activities to the environment. The core of the standard is to identify and control the environmental aspects and impacts of the organization.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The Plan-Do-Check-Act principle also applies to this standard. The expected outcome is the continual improvement of environmental performance by setting and achieving environmental targets and programmes. As in every management system, commitment by top management is a prerequisite and crucial.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/m3.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="ISO 14001 Environmental Management" />
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
              Benefits of ISO 14001:2015 <span className="text-euro-600">Certification</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">The basic benefits from setting and implementing an Environmental System according to the requirements of ISO 14001:2015</p>
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
              ISO 14001 <span className="text-euro-600">Services</span>
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

      {/* Why Eurocert & Benefits - Dark */}
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
                    EUROCERT possesses highly-trained and educated auditors with great expertise, knowledge of local and global environmental legislation and experience in their field.
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
                    EUROCERT has earned recognition in the field of environmental management system certification by conducting audits and awarding certificates globally according to ISO 14001, EMAS Regulation and Verification of Greenhouse Gas Emissions for many years.
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed font-medium">
                    Certification with EUROCERT means evaluation and acceptance by an accredited, well-known and well-respected third-party organization.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="p-5 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                  <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">25+</span>
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Years Experience</span>
                </div>
                <div className="p-5 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                  <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">Global</span>
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Accreditations</span>
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
                  ISO 14001:2015 helps improve your company's environmental performance and enhance your reputation in the market. Furthermore, in some companies, implementation of an Environmental Management System according to the requirements of ISO 14001:2015 or EMAS Regulation is an environmental condition stated in Permits or Licenses issued by the Ministry of Environment.
                </p>
                    </div>
              <div className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-clock text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[12px] font-bold uppercase tracking-widest text-slate-900">How long does it take to gain ISO 14001:2015 certification?</h4>
                    </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Typically 3-6 months, although this may depend on various factors. The main issue is that the company demonstrates that its management system is fully implemented and meets all the requirements of the standard. Top management and employees' level of awareness is also a crucial point to determine the necessary time for gaining certification.
                </p>
                    </div>
              <div className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-balance-scale text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[12px] font-bold uppercase tracking-widest text-slate-900">Does it substitute public authority audits?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  No. ISO 14001:2015 is a voluntary certification aiming at continual improvement and does not substitute for any public or official audit. It organizes the company however, so that it complies with all relevant applicable legislation and helps avoiding any unexpected problems or fines during these audits acting pre-cautiously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services - Light */}
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
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our environmental management experts are ready to guide your organization through ISO 14001 certification.</p>
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
