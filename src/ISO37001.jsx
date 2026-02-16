import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const services = [
  { icon: 'fa-shield-alt', title: 'ISO 37001 Certification', description: 'Complete ISO 37001 certification services covering all requirements for establishing, implementing, and maintaining an anti-bribery management system within your organization.' },
  { icon: 'fa-cogs', title: 'Anti-Bribery Management System Implementation', description: 'Expert guidance on designing and implementing an anti-bribery management system tailored to your organization\'s size, structure, risk profile, and operational context.' },
  { icon: 'fa-search', title: 'Bribery Risk Assessment', description: 'Systematic identification, analysis, and evaluation of bribery risks across your organization, including third-party relationships, transactions, and operational activities.' },
  { icon: 'fa-clipboard-check', title: 'Compliance Verification', description: 'Independent verification of your anti-bribery controls, policies, and procedures to ensure they effectively prevent, detect, and respond to bribery within your operations.' },
  { icon: 'fa-chalkboard-teacher', title: 'Training & Awareness Programs', description: 'Comprehensive anti-bribery training programs for leadership, management, and employees covering policies, procedures, red flags, reporting mechanisms, and ethical conduct.' },
  { icon: 'fa-headset', title: 'Ongoing Compliance Support', description: 'Continuous support to maintain ISO 37001 compliance including surveillance audit preparation, management review facilitation, and ongoing anti-bribery improvement guidance.' }
]

const benefits = [
  { icon: 'fa-ban', title: 'Bribery Prevention', desc: 'Establish robust systems and controls to prevent bribery within your organization and across your business relationships.' },
  { icon: 'fa-shield-alt', title: 'Risk Mitigation', desc: 'Systematically identify and reduce bribery risks through structured risk assessment and targeted mitigation measures.' },
  { icon: 'fa-balance-scale', title: 'Legal Compliance', desc: 'Meet anti-bribery legal requirements including the UK Bribery Act, US FCPA, and other international anti-corruption laws.' },
  { icon: 'fa-star', title: 'Reputation Protection', desc: 'Protect your organization\'s reputation by demonstrating a proactive commitment to ethical business practices.' },
  { icon: 'fa-users', title: 'Stakeholder Confidence', desc: 'Build confidence with stakeholders, investors, and partners through independently certified anti-bribery management.' }
]

const relatedServices = [
  { title: 'ISO 26000', subtitle: 'Social Accountability', image: '/b11.png', link: '/social/iso-26000' },
  { title: 'ISO 9001', subtitle: 'Quality Management', image: '/m2.png', link: '/management-system/iso-9001' },
  { title: 'SA 8000', subtitle: 'Social accountability', image: '/b1.png', link: '/social/sa-8000' }
]

export default function ISO37001() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/b12.png" className="w-full h-full object-cover opacity-30" alt="ISO 37001 Anti-Bribery Management" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Anti-Bribery Management Systems</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            ISO 37001 — Anti-Bribery Management
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Establish, implement, and improve an anti-bribery management system.
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
                  ISO 37001 — <span className="text-euro-600">Anti-Bribery Management</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">We provide comprehensive ISO 37001 certification and compliance services to help your organization prevent, detect, and respond to bribery.</p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-info-circle text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">What is ISO 37001?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">ISO 37001 is an international standard that specifies requirements and provides guidance for establishing, implementing, maintaining, reviewing, and improving an anti-bribery management system. It can be used by any organization, large or small, whether in the public, private, or not-for-profit sector.</p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/b12.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="ISO 37001 Anti-Bribery Management" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Services</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              ISO 37001 <span className="text-euro-600">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
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

      {/* Benefits & Why Eurocert - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
              <div className="lg:col-span-3">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Key Advantages</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
                  Why Get ISO 37001 Certified?
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-eurogold-400/10 flex items-center justify-center shrink-0">
                        <i className={`fas ${b.icon} text-eurogold-400 text-xs`}></i>
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-xs uppercase tracking-wide heading-font mb-1">{b.title}</h5>
                        <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 p-8 rounded-2xl border border-white/5 bg-white/2 flex flex-col justify-center">
                <h3 className="heading-font text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">Why Eurocert?</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-6">Our experienced professionals understand anti-bribery requirements and can guide you through the certification process.</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                    <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">25+</span>
                    <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Years Experience</span>
                  </div>
                  <div className="p-4 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                    <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">100%</span>
                    <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Success Rate</span>
                  </div>
                </div>
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
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our anti-bribery management experts are ready to guide your organization through ISO 37001 certification.</p>
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
