import { useEffect, useRef } from 'react'
// No router imports needed - standalone page
import Header from './components/Header'

const ShieldCheckIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const els = root.querySelectorAll('[data-reveal]')
    els.forEach((el) => el.classList.add('scroll-hidden'))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const anim = el.dataset.reveal || 'reveal-up'
          const delay = el.dataset.revealDelay || '0'
          el.style.animationDelay = `${delay}ms`
          el.classList.remove('scroll-hidden')
          el.classList.add(anim)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.1 })
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function MedicalDevices() {
  const pageRef = useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const capabilities = [
    { icon: 'fa-chart-pie', title: 'Regulatory Strategy & Device Classification', desc: 'Define correct classification and conformity route based on MDR rules.' },
    { icon: 'fa-file-medical-alt', title: 'Technical Documentation', desc: 'Preparation of Technical File / Design Dossier per MDR structure.' },
    { icon: 'fa-user-md', title: 'Clinical Evaluation (CER)', desc: 'Comprehensive clinical data analysis and report generation.' },
    { icon: 'fa-shield-virus', title: 'Risk Management (ISO 14971)', desc: 'Structured risk analysis and hazard evaluation.' },
    { icon: 'fa-user-tie', title: 'EU Authorised Representative', desc: 'Legal representation for non-EU manufacturers.' },
    { icon: 'fa-flag-usa', title: 'UK Responsible Person', desc: 'Support for UKCA marking and MHRA registration.' }
  ]

  const services = [
    'Device Classification & Gap Analysis',
    'Quality Management System (ISO 13485) Implementation',
    'Technical File / Design Dossier Compilation',
    'Clinical Evaluation Report (CER)',
    'Biological Evaluation (ISO 10993)',
    'Software Validation (SaMD)',
    'Labeling & IFU Compliance Review',
    'Post-Market Surveillance (PMS) Setup',
    'Post-Market Clinical Follow-up (PMCF)',
    'Vigilance Reporting & Incident Handling',
    'UDI Implementation & EUDAMED Registration',
    'Notified Body Coordination & Audit Support'
  ]

  const lifecycle = ['Strategy', 'Documentation', 'Evaluation', 'Certification', 'Market Entry', 'Post-Market Monitoring']
  const advantages = ['Accelerated Time-to-Market', 'Audit-Ready Documentation', 'Reduced Regulatory Risk', 'End-to-End Ownership', 'Global Market Readiness']

  return (
    <div ref={pageRef}>
      <Header />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030a16]/70 via-[#030a16]/60 to-[#030a16]"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[80px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-28">
          <div data-reveal="reveal-up" className="inline-flex items-center gap-3 px-5 py-2.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-8">
            <span className="text-3xl">🏥</span>
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.3em]">Healthcare Compliance</span>
          </div>
          <h1 data-reveal="reveal-up" data-reveal-delay="100" className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-5 tracking-tight">
            Medical Devices <span className="text-emerald-400">(EU MDR / UK MDR)</span>
          </h1>
          <div data-reveal="reveal-scale" data-reveal-delay="200" className="w-32 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500"></div>
          <p data-reveal="reveal-up" data-reveal-delay="300" className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Precision-Driven Regulatory Solutions for Global Healthcare Access
          </p>
          <div data-reveal="reveal-up" data-reveal-delay="400" className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="#contact" className="px-8 py-4 bg-emerald-600 text-white font-semibold uppercase tracking-wider rounded-xl hover:bg-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Free Consultation
            </a>
            <a href="tel:+917009007527" className="px-8 py-4 border border-white/20 text-white font-semibold uppercase tracking-wider rounded-xl hover:bg-white/10 transition-all duration-300">
              Speak with Expert
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-reveal="reveal-left" className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What is EU MDR (2017/745)?</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                The Medical Device Regulation (EU MDR 2017/745) is a stringent regulatory framework designed to ensure the safety, clinical effectiveness, and traceability of medical devices across the European Union.
              </p>
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                <h3 className="font-bold text-slate-900 mb-4">It introduces:</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-3"><i className="fas fa-check-circle text-emerald-500"></i>Stricter clinical evidence requirements</li>
                  <li className="flex items-center gap-3"><i className="fas fa-check-circle text-emerald-500"></i>Enhanced post-market surveillance (PMS)</li>
                  <li className="flex items-center gap-3"><i className="fas fa-check-circle text-emerald-500"></i>Mandatory UDI (Unique Device Identification)</li>
                  <li className="flex items-center gap-3"><i className="fas fa-check-circle text-emerald-500"></i>Centralized database via EUDAMED</li>
                </ul>
              </div>
            </div>
            <div data-reveal="reveal-right" className="relative">
              <div className="p-10 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-100 text-center">
                <ShieldCheckIcon />
                <h3 className="text-2xl font-bold text-slate-900 mt-4 mb-2">EU MDR 2017/745</h3>
                <p className="text-slate-500 text-sm">Medical Device Regulation</p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-white rounded-xl"><div className="text-2xl font-bold text-emerald-600">Class I</div><div className="text-xs text-slate-400">Low Risk</div></div>
                  <div className="p-3 bg-white rounded-xl"><div className="text-2xl font-bold text-emerald-600">Class IIa</div><div className="text-xs text-slate-400">Medium Risk</div></div>
                  <div className="p-3 bg-white rounded-xl"><div className="text-2xl font-bold text-emerald-600">Class IIb</div><div className="text-xs text-slate-400">Medium-High</div></div>
                  <div className="p-3 bg-white rounded-xl"><div className="text-2xl font-bold text-emerald-600">Class III</div><div className="text-xs text-slate-400">High Risk</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 data-reveal="reveal-up" className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Core Capabilities</h2>
            <p data-reveal="reveal-up" data-reveal-delay="100" className="text-slate-500 text-lg max-w-2xl mx-auto">Comprehensive expertise across all aspects of medical device regulatory compliance</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <div data-reveal="reveal-right" className="relative">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" alt="Medical Device Certification" className="w-full rounded-3xl shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Devices Certified</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.slice(0, 4).map((item, index) => (
                <div key={index} data-reveal="reveal-up" data-reveal-delay={String(index * 100)} className="p-5 bg-white rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 rounded-xl mb-3">
                    <i className={`fas ${item.icon} text-emerald-600 text-lg`}></i>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {capabilities.slice(4).map((item, index) => (
              <div key={index} data-reveal="reveal-up" data-reveal-delay={String((index + 4) * 100)} className="p-5 bg-white rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 rounded-xl mb-3">
                  <i className={`fas ${item.icon} text-emerald-600 text-lg`}></i>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 data-reveal="reveal-up" className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">End-to-End Medical Device Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div key={index} data-reveal="reveal-up" data-reveal-delay={String(index * 50)} className="group p-6 bg-white rounded-2xl border border-slate-100 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-full -mr-10 -mt-10 group-hover:bg-emerald-500/10 transition-all duration-300"></div>
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-all duration-300">
                    <i className="fas fa-check text-emerald-500 group-hover:text-white transition-colors duration-300"></i>
                  </div>
                  <span className="text-slate-700 font-semibold text-sm leading-relaxed group-hover:text-emerald-700 transition-colors duration-300">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-emerald-900 to-[#030a16]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 data-reveal="reveal-up" className="text-4xl md:text-5xl font-bold text-white mb-4">Compliance Lifecycle Approach</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {lifecycle.map((step, index) => (
              <div key={index} data-reveal="reveal-up" data-reveal-delay={String(index * 100)} className="flex items-center">
                <div className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white font-semibold">
                  <span className="text-emerald-400 mr-2">{index + 1}.</span>{step}
                </div>
                {index < lifecycle.length - 1 && <i className="fas fa-arrow-right text-white/30 mx-2"></i>}
              </div>
            ))}
          </div>
          <p data-reveal="reveal-up" className="text-center text-white/60 mt-8">We don't just certify—we stay with you throughout the entire product lifecycle.</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 data-reveal="reveal-up" className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Key Advantages</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {advantages.map((adv, index) => (
              <div key={index} data-reveal="reveal-up" data-reveal-delay={String(index * 100)} className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-full shrink-0">
                  <i className="fas fa-check text-emerald-600"></i>
                </div>
                <span className="font-bold text-slate-900">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 lg:py-28 overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-transparent to-emerald-600/20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div data-reveal="reveal-right">
              <img src="https://images.unsplash.com/photo-1576091160552-20a7b753a05f?auto=format&fit=crop&q=80&w=800" alt="Medical Device Certification" className="w-full rounded-3xl shadow-2xl" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Bring Your Medical Device to Europe—Faster, Safer, Fully Compliant</h2>
              <p className="text-white/60 mb-8">Partner with experts who understand both regulations and real-world approvals.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact-form" className="px-10 py-5 bg-emerald-600 text-white font-semibold uppercase tracking-wider rounded-2xl hover:bg-emerald-500 transition-all duration-300 shadow-xl">
                  Get Free Consultation
                </a>
                <a href="tel:+917009007527" className="px-10 py-5 border border-white/20 text-white font-semibold uppercase tracking-wider rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <i className="fas fa-phone mr-2"></i>Speak with Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Request a Consultation</h2>
              <p className="text-slate-600">Get expert guidance on your MDR compliance needs</p>
            </div>
            <form className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mobile</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition" placeholder="+1 234 567 8900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition" placeholder="Company name" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition" placeholder="Tell us about your medical device and compliance requirements..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#030a16] py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="https://i0.wp.com/www.eurocert.asia/wp-content/uploads/2020/06/cropped-LOGO_EUROCERT_v2-2.png?fit=12691181&ssl=1" alt="EUROCERT" className="h-12 mb-4" />
              <p className="text-white/60">EUROCERT provides professional certification services for medical devices under EU MDR and UK MDR regulations.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-white/60 text-sm">📞 +91 7009007527</p>
              <p className="text-white/60 text-sm">✉️ info@eurocert.asia</p>
              <p className="text-white/60 text-sm">🌐 www.eurocert.asia</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Certifications</h4>
              <p className="text-white/60 text-sm">ISO 13485:2016</p>
              <p className="text-white/60 text-sm">EU MDR 2017/745</p>
              <p className="text-white/60 text-sm">UK MDR 2019</p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40 text-sm">
            © 2024 EUROCERT. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}