import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const benefits = [
  { icon: 'fa-ban', title: 'ISO 37001 certification', desc: 'Globally recognized certification for anti-bribery management systems.' },
  { icon: 'fa-sitemap', title: 'Anti-bribery management system', desc: 'Comprehensive framework to prevent, detect, and respond to bribery.' },
  { icon: 'fa-search', title: 'Bribery risk assessment', desc: 'Identify and evaluate bribery risks across your organization.' },
  { icon: 'fa-check-circle', title: 'Compliance verification', desc: 'Independent verification of anti-bribery compliance.' },
  { icon: 'fa-user-check', title: 'Due diligence procedures', desc: 'Robust due diligence for personnel and business associates.' },
  { icon: 'fa-coins', title: 'Financial controls implementation', desc: 'Implement financial controls to prevent bribery.' },
  { icon: 'fa-bullhorn', title: 'Whistleblowing mechanisms', desc: 'Secure channels for reporting suspected bribery.' },
  { icon: 'fa-shield-alt', title: 'Anti-corruption culture building', desc: 'Foster an organizational culture of integrity and transparency.' }
]

const relatedServices = [
  { title: 'ISO 26000', subtitle: 'Social Responsibility', image: '/b11.png', link: '/social-audits/iso-26000' },
  { title: 'SA 8000', subtitle: 'Social Accountability', image: '/b1.png', link: '/social-audits/sa-8000' },
  { title: 'Code of Conduct', subtitle: 'Brand Audits', image: '/b3.png', link: '/social-audits/code-of-conduct' }
]

export default function ISO37001Social() {
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
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Anti-Bribery Management Systems for Ethical Business Conduct</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            ISO 37001 — Anti-Bribery Management
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Prevent, detect, and respond to bribery with a certified management system.
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
                  Anti-Bribery Management — <span className="text-euro-600">ISO 37001</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                ISO 37001 specifies requirements and provides guidance for establishing, implementing, maintaining, reviewing, and improving an anti-bribery management system. It is designed to help organizations prevent, detect, and respond to bribery.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                It covers direct and indirect bribery, by or on behalf of the organization, by the organization&apos;s personnel or business associates. Applicable to all organizations regardless of type, size, or activity.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-industry text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Key Elements</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  ISO 37001 addresses bribery prevention, risk assessment, due diligence, financial controls, whistleblowing mechanisms, and anti-corruption culture — providing a comprehensive framework for ethical business conduct.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/b12.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="ISO 37001 Anti-Bribery Management" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Certification Benefits</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Benefits of ISO 37001 <span className="text-euro-600">Certification</span>
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
                  Why Certify with Eurocert?
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
                  <p className="text-white/50 text-sm leading-relaxed">
                    Eurocert is a Greek Independent Certification Body accredited by Greek and International Accreditation Bodies with offices in more than 14 countries in Europe and Asia. Eurocert possesses highly-trained and educated auditors with great expertise and experience in their field.
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
                    Eurocert has earned recognition by conducting anti-bribery audits and ISO 37001 certifications for well-known companies for many years.
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed font-medium">
                    Certification by Eurocert means evaluation and acceptance by an accredited and well-respected third-party professional organization.
                  </p>
                </div>
              </div>
              <div className="p-5 mt-8 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                <p className="text-white/60 text-sm leading-relaxed">
                  <span className="text-eurogold-400 font-bold">We are offering above services on behalf of Eurocert S.A</span> — a Pan-European Certification body operating from Athens with global reach.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-5 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                  <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">14+</span>
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Countries</span>
                </div>
                <div className="p-5 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                  <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">25+</span>
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Years Experience</span>
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

      {/* Related Services - Soft */}
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
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our anti-bribery experts are ready to guide your organization through ISO 37001 certification.</p>
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
