import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const services = [
  { icon: 'fa-shield-alt', title: 'ISO 28000 Certification', description: 'Complete ISO 28000 certification services covering all requirements for establishing, implementing, and maintaining a security management system for your supply chain operations.' },
  { icon: 'fa-link', title: 'Supply Chain Security Management', description: 'Comprehensive supply chain security management solutions including threat assessment, vulnerability analysis, and implementation of robust security controls across your operations.' },
  { icon: 'fa-search', title: 'Risk Assessment & Mitigation', description: 'Systematic identification, analysis, and evaluation of security risks across your supply chain, with tailored mitigation strategies to reduce exposure to threats and vulnerabilities.' },
  { icon: 'fa-cogs', title: 'Security System Implementation', description: 'Expert guidance on designing and implementing a security management system aligned with ISO 28000 requirements, including policies, procedures, and operational controls.' },
  { icon: 'fa-chalkboard-teacher', title: 'Training & Consultancy', description: 'Comprehensive training programs on ISO 28000 requirements, supply chain security best practices, risk assessment methodologies, and security management for your teams.' },
  { icon: 'fa-headset', title: 'Ongoing Compliance Support', description: 'Continuous support to maintain ISO 28000 compliance including surveillance audit preparation, management review facilitation, and ongoing security improvement guidance.' }
]

const benefits = [
  { icon: 'fa-lock', title: 'Enhanced Security', desc: 'Improve the security of your supply chain operations with a structured, internationally recognized management system.' },
  { icon: 'fa-shield-alt', title: 'Risk Management', desc: 'Systematically identify and mitigate security risks across your entire supply chain from end to end.' },
  { icon: 'fa-balance-scale', title: 'Regulatory Compliance', desc: 'Meet security requirements and regulations applicable to your supply chain operations and trade activities.' },
  { icon: 'fa-users', title: 'Customer Confidence', desc: 'Demonstrate your commitment to supply chain security, building trust with customers and business partners.' },
  { icon: 'fa-trophy', title: 'Competitive Advantage', desc: 'Stand out as a secure and reliable business partner in the global supply chain marketplace.' }
]

const relatedServices = [
  { title: 'C-TPAT', subtitle: 'Supply Chain Security', image: '/b9.png', link: '/social/c-tpat' },
  { title: 'ISO 9001', subtitle: 'Quality Management', image: '/m2.png', link: '/management-system/iso-9001' },
  { title: 'ISO 14001', subtitle: 'Environmental Management', image: '/m3.png', link: '/management-system/iso-14001' }
]

export default function ISO28000() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/b10.png" className="w-full h-full object-cover opacity-30" alt="ISO 28000 Supply Chain Security" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Safety in the Supply Chain</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            ISO 28000 — Supply Chain Security
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Security management systems for supply chain operations.
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
                  ISO 28000 — <span className="text-euro-600">Supply Chain Security</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">We provide comprehensive ISO 28000 certification and compliance services to help your organization manage security risks in your supply chain.</p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-info-circle text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">What is ISO 28000?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">ISO 28000 specifies requirements for a security management system, including those aspects critical to security assurance of the supply chain. It helps organizations manage security risks in their supply chains and protect their operations from security threats.</p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/b10.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="ISO 28000 Supply Chain Security" />
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
              ISO 28000 <span className="text-euro-600">Services</span>
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
                  Why Get ISO 28000 Certified?
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
                <p className="text-white/45 text-sm leading-relaxed mb-6">Our experienced auditors understand supply chain security requirements and can guide you through the certification process.</p>
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
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our supply chain security experts are ready to guide your organization through ISO 28000 certification.</p>
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
