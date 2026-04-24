import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CertificationCard from './components/CertificationCard'
import Modal from './components/Modal'
import { certificationData, specializedStandards } from './data/certificationData'

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
)

function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const els = root.querySelectorAll('[data-reveal]')
    els.forEach((el) => el.classList.add('scroll-hidden'))

    const observer = new IntersectionObserver(
      (entries) => {
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
      },
      { threshold: 0.1 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}

export default function CECertification() {
  const pageRef = useScrollReveal()
  const [selectedCert, setSelectedCert] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const benefits = [
    { icon: '🔬', title: 'Expert Guidance', desc: 'Industry-certified professionals' },
    { icon: '⚖️', title: 'Directive Compliance', desc: 'Full EU standards adherence' },
    { icon: '⚡', title: 'Fast-track Audit', desc: 'Quick certification process' },
    { icon: '🌐', title: 'Global Market Support', desc: 'Worldwide recognition' }
  ]

  const whyChoose = [
    { icon: 'fa-user-tie', title: 'Expert Team', desc: '15+ years of industry experience', color: 'blue' },
    { icon: 'fa-rocket', title: 'Fast Processing', desc: 'Quick market entry', color: 'emerald' },
    { icon: 'fa-globe-americas', title: 'Global Recognition', desc: 'International certifications', color: 'violet' },
    { icon: 'fa-hand-holding-heart', title: 'Full Support', desc: 'End-to-end assistance', color: 'rose' }
  ]

  return (
    <div ref={pageRef}>
      <TopBar />
      <Navbar />
      <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)} certification={selectedCert} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/technical-conformity-ce-certification-make-an-imag.jpeg" className="w-full h-full object-cover" alt="CE" />
          <div className="absolute inset-0 bg-[#030a16]/85"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center py-32">
          <div data-reveal="reveal-up" className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-blue-400/30 rounded-full mb-10">
            <div className="w-8 h-8 flex items-center justify-center bg-blue-500/30 rounded-lg">
              <ShieldIcon />
            </div>
            <span className="text-blue-300 text-xs font-semibold uppercase tracking-[0.3em]">European Compliance</span>
          </div>
          
          <h1 data-reveal="reveal-up" data-reveal-delay="100" className="heading-font text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-5 tracking-tight drop-shadow-lg">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">Conformity</span>
          </h1>
          
          <h2 data-reveal="reveal-up" data-reveal-delay="200" className="heading-font text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
            CE Certification
          </h2>
          
          <div data-reveal="reveal-scale" data-reveal-delay="300" className="w-40 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400"></div>
          
          <p data-reveal="reveal-up" data-reveal-delay="400" className="text-white/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Comprehensive CE certification services ensuring your products meet all EU directives and standards for seamless market access across Europe
          </p>

          <div data-reveal="reveal-up" data-reveal-delay="500" className="flex flex-wrap justify-center gap-4 mt-10">
            <Link to="/contact#contact-form" className="px-8 py-4 bg-blue-500 text-white font-semibold uppercase tracking-wider rounded-xl hover:bg-blue-400 transition-all duration-300 shadow-lg shadow-blue-900/50 hover:shadow-xl hover:-translate-y-0.5">
              Get Certified
            </Link>
            <a href="tel:+917009007527" className="px-8 py-4 border border-white/40 text-white font-semibold uppercase tracking-wider rounded-xl hover:bg-white/20 transition-all duration-300">
              Call Now
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-reveal="reveal-left" className="space-y-8">
              <div>
                <h4 className="heading-font text-xs text-blue-600 font-bold uppercase tracking-[0.4em] mb-4">Technical Conformity</h4>
                <h2 className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">CE Certification</h2>
              </div>
              
              <p className="text-slate-500 text-lg leading-relaxed">
                CE marking is the mandatory conformity marking for products sold within the European Economic Area (EEA). It demonstrates that your products meet EU safety, health, and environmental protection requirements.
              </p>
              
              <p className="text-slate-500 text-base leading-relaxed">
                At <strong className="text-slate-900">Eurocert Asia</strong>, our expert team guides you through the entire certification process, ensuring full compliance with all relevant EU directives and standards.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">{item.title}</h5>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal="reveal-right" data-reveal-delay="200" className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-100 h-[450px] lg:h-[550px] group">
                <img src="/Gemini_Generated_Image_doy2sldoy2sldoy2.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="CE" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/90 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Certified Excellence</h4>
                      <p className="text-white/60 text-sm">1000+ certifications delivered</p>
                    </div>
                    <div className="w-14 h-14 flex items-center justify-center bg-emerald-500/20 rounded-2xl border border-emerald-500/30">
                      <CheckCircleIcon />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 rounded-3xl shadow-2xl flex items-center justify-center animate-pulse">
                <span className="text-white text-3xl font-bold">CE</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                <i className="fas fa-award text-2xl text-blue-600"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h4 data-reveal="reveal-up" className="heading-font text-xs text-blue-600 font-bold uppercase tracking-[0.4em] mb-4">Comprehensive Services</h4>
            <h2 data-reveal="reveal-up" data-reveal-delay="100" className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Our Certifications</h2>
            <p data-reveal="reveal-up" data-reveal-delay="200" className="text-slate-500 text-lg max-w-2xl mx-auto">Choose from our wide range of CE certification services tailored to your industry needs</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificationData.map((cert, index) => (
              <CertificationCard key={cert.id} certification={cert} onKnowMore={setSelectedCert} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Standards */}
      <section className="relative py-24 lg:py-32 bg-[#030a16] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h4 data-reveal="reveal-up" className="heading-font text-xs text-blue-400 font-bold uppercase tracking-[0.4em] mb-4">Additional Services</h4>
            <h2 data-reveal="reveal-up" data-reveal-delay="100" className="heading-font text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Specialized Standards</h2>
            <p data-reveal="reveal-up" data-reveal-delay="200" className="text-white/50 text-lg max-w-xl mx-auto">Advanced certifications for welding, structural, and specialized components</p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x scrollbar-hide">
            {specializedStandards.map((standard, index) => (
              <div key={standard.id} data-reveal="reveal-up" data-reveal-delay={String(index * 100)} className="flex-shrink-0 w-80 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 snap-center">
                <div className="w-14 h-14 flex items-center justify-center bg-blue-500/20 rounded-2xl mb-5">
                  <i className={`fas ${standard.icon} text-blue-400 text-xl`}></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{standard.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Eurocert */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="heading-font text-xs text-blue-600 font-bold uppercase tracking-[0.4em] mb-4">Our Advantage</h4>
            <h2 className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Why Choose Eurocert</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group">
                <div className="w-18 h-18 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${item.icon} text-2xl text-blue-600 group-hover:text-white`}></i>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Devices Section - Light Theme */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div data-reveal="reveal-up" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full mb-6">
              <span className="text-2xl">🏥</span>
              <span className="text-emerald-600 text-xs font-bold uppercase tracking-[0.3em]">Healthcare Compliance</span>
            </div>
            <h2 data-reveal="reveal-up" data-reveal-delay="100" className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Medical Devices <span className="text-emerald-600">(EU MDR / UK MDR)</span></h2>
            <p data-reveal="reveal-up" data-reveal-delay="200" className="text-slate-500 text-lg max-w-3xl mx-auto">End-to-end regulatory support for safe and compliant entry into European and UK healthcare markets.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div data-reveal="reveal-left" className="p-8 rounded-3xl border border-emerald-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-emerald-100 rounded-lg">
                    <i className="fas fa-info-circle text-emerald-600 text-sm"></i>
                  </span>
                  What is EU MDR (2017/745)?
                </h3>
                <p className="text-slate-600 leading-relaxed">The Medical Device Regulation (EU MDR 2017/745) governs the safety, performance, and market access of medical devices in the EU.</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div data-reveal="reveal-up" data-reveal-delay="100" className="p-4 bg-white rounded-2xl border border-emerald-100 text-center hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <i className="fas fa-chart-pie text-emerald-600 text-xl mb-2"></i>
                  <p className="text-sm font-bold text-slate-900">Regulatory Strategy</p>
                </div>
                <div data-reveal="reveal-up" data-reveal-delay="150" className="p-4 bg-white rounded-2xl border border-emerald-100 text-center hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <i className="fas fa-file-medical-alt text-emerald-600 text-xl mb-2"></i>
                  <p className="text-sm font-bold text-slate-900">Technical Docs</p>
                </div>
                <div data-reveal="reveal-up" data-reveal-delay="200" className="p-4 bg-white rounded-2xl border border-emerald-100 text-center hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <i className="fas fa-user-md text-emerald-600 text-xl mb-2"></i>
                  <p className="text-sm font-bold text-slate-900">Clinical Eval</p>
                </div>
                <div data-reveal="reveal-up" data-reveal-delay="250" className="p-4 bg-white rounded-2xl border border-emerald-100 text-center hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <i className="fas fa-shield-virus text-emerald-600 text-xl mb-2"></i>
                  <p className="text-sm font-bold text-slate-900">Risk Mgmt</p>
                </div>
                <div data-reveal="reveal-up" data-reveal-delay="300" className="p-4 bg-white rounded-2xl border border-emerald-100 text-center hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <i className="fas fa-user-tie text-emerald-600 text-xl mb-2"></i>
                  <p className="text-sm font-bold text-slate-900">EU REP</p>
                </div>
                <div data-reveal="reveal-up" data-reveal-delay="350" className="p-4 bg-white rounded-2xl border border-emerald-100 text-center hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <i className="fas fa-flag-usa text-emerald-600 text-xl mb-2"></i>
                  <p className="text-sm font-bold text-slate-900">UKRP</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 data-reveal="reveal-right" className="text-xl font-bold text-slate-900 mb-6">Our Medical Device Services</h3>
              <div className="space-y-3">
                <div data-reveal="reveal-up" data-reveal-delay="100" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300"><i className="fas fa-check text-emerald-500"></i><span className="text-slate-700">Regulatory Strategy & Classification</span></div>
                <div data-reveal="reveal-up" data-reveal-delay="150" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300"><i className="fas fa-check text-emerald-500"></i><span className="text-slate-700">Technical Documentation</span></div>
                <div data-reveal="reveal-up" data-reveal-delay="200" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300"><i className="fas fa-check text-emerald-500"></i><span className="text-slate-700">Clinical Evaluation (CER)</span></div>
                <div data-reveal="reveal-up" data-reveal-delay="250" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300"><i className="fas fa-check text-emerald-500"></i><span className="text-slate-700">Risk Management (ISO 14971)</span></div>
                <div data-reveal="reveal-up" data-reveal-delay="300" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300"><i className="fas fa-check text-emerald-500"></i><span className="text-slate-700">EU Authorised Representative</span></div>
                <div data-reveal="reveal-up" data-reveal-delay="350" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300"><i className="fas fa-check text-emerald-500"></i><span className="text-slate-700">UK Responsible Person (UKRP)</span></div>
                <div data-reveal="reveal-up" data-reveal-delay="400" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300"><i className="fas fa-check text-emerald-500"></i><span className="text-slate-700">Post-Market Surveillance (PMS)</span></div>
                <div data-reveal="reveal-up" data-reveal-delay="450" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300"><i className="fas fa-check text-emerald-500"></i><span className="text-slate-700">UDI & EUDAMED Registration</span></div>
              </div>
              <div data-reveal="reveal-up" data-reveal-delay="500" className="p-6 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl hover:shadow-xl transition-all duration-300">
                <h4 className="text-white font-bold mb-3">Key Advantages</h4>
                <div className="grid grid-cols-2 gap-2 text-white text-sm">
                  <div><i className="fas fa-check mr-2"></i>Access EU & UK markets</div>
                  <div><i className="fas fa-check mr-2"></i>Faster approvals</div>
                  <div><i className="fas fa-check mr-2"></i>Reduced regulatory risks</div>
                  <div><i className="fas fa-check mr-2"></i>Strong compliance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electronics Section - Light Theme */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div data-reveal="reveal-up" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
              <span className="text-2xl">⚡</span>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em]">Electronics Compliance</span>
            </div>
            <h2 data-reveal="reveal-up" data-reveal-delay="100" className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Electronics <span className="text-blue-600">& Electrical Products</span></h2>
            <p data-reveal="reveal-up" data-reveal-delay="200" className="text-slate-500 text-lg max-w-3xl mx-auto">Ensure your electronic products meet EU safety, electromagnetic compatibility, and environmental standards.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div data-reveal="reveal-left" className="p-8 rounded-3xl border border-blue-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-lg">
                    <i className="fas fa-gavel text-blue-600 text-sm"></i>
                  </span>
                  Applicable Directives
                </h3>
                <div className="space-y-4">
                  <div data-reveal="reveal-up" data-reveal-delay="100" className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all duration-300">
                    <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 font-bold rounded-lg">1</span>
                    <div><p className="font-bold text-slate-900">Low Voltage Directive (LVD) 2014/35/EU</p><p className="text-xs text-slate-500">Electrical safety</p></div>
                  </div>
                  <div data-reveal="reveal-up" data-reveal-delay="150" className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all duration-300">
                    <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 font-bold rounded-lg">2</span>
                    <div><p className="font-bold text-slate-900">EMC Directive 2014/30/EU</p><p className="text-xs text-slate-500">Electromagnetic interference</p></div>
                  </div>
                  <div data-reveal="reveal-up" data-reveal-delay="200" className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all duration-300">
                    <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 font-bold rounded-lg">3</span>
                    <div><p className="font-bold text-slate-900">RoHS Directive 2011/65/EU</p><p className="text-xs text-slate-500">Restriction of hazardous substances</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 data-reveal="reveal-right" className="text-xl font-bold text-slate-900 mb-6">Our Electronics Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div data-reveal="reveal-up" data-reveal-delay="100" className="p-4 bg-white rounded-2xl border border-blue-100 text-center hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <i className="fas fa-search text-blue-600 text-xl mb-2"></i>
                  <p className="font-bold text-slate-900 text-sm">Product Assessment</p>
                </div>
                <div data-reveal="reveal-up" data-reveal-delay="150" className="p-4 bg-white rounded-2xl border border-blue-100 text-center hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <i className="fas fa-vial text-blue-600 text-xl mb-2"></i>
                  <p className="font-bold text-slate-900 text-sm">Testing Support</p>
                </div>
                <div data-reveal="reveal-up" data-reveal-delay="200" className="p-4 bg-white rounded-2xl border border-blue-100 text-center hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <i className="fas fa-folder-open text-blue-600 text-xl mb-2"></i>
                  <p className="font-bold text-slate-900 text-sm">Technical File</p>
                </div>
                <div data-reveal="reveal-up" data-reveal-delay="250" className="p-4 bg-white rounded-2xl border border-blue-100 text-center hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <i className="fas fa-file-signature text-blue-600 text-xl mb-2"></i>
                  <p className="font-bold text-slate-900 text-sm">Declaration (DoC)</p>
                </div>
                <div data-reveal="reveal-up" data-reveal-delay="300" className="p-4 bg-white rounded-2xl border border-blue-100 text-center hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <i className="fas fa-tag text-blue-600 text-xl mb-2"></i>
                  <p className="font-bold text-slate-900 text-sm">CE Marking</p>
                </div>
                <div data-reveal="reveal-up" data-reveal-delay="350" className="p-4 bg-white rounded-2xl border border-blue-100 text-center hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <i className="fas fa-leaf text-blue-600 text-xl mb-2"></i>
                  <p className="font-bold text-slate-900 text-sm">RoHS Compliance</p>
                </div>
                <div data-reveal="reveal-up" data-reveal-delay="400" className="p-4 bg-white rounded-2xl border border-blue-100 text-center hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <i className="fas fa-sync-alt text-blue-600 text-xl mb-2"></i>
                  <p className="font-bold text-slate-900 text-sm">Ongoing Support</p>
                </div>
              </div>
              <div data-reveal="reveal-up" data-reveal-delay="450" className="p-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl hover:shadow-xl transition-all duration-300">
                <h4 className="text-white font-bold mb-3">Key Advantages</h4>
                <div className="grid grid-cols-2 gap-2 text-white text-sm">
                  <div><i className="fas fa-check mr-2"></i>Legal EU market access</div>
                  <div><i className="fas fa-check mr-2"></i>Avoid recalls</div>
                  <div><i className="fas fa-check mr-2"></i>Improved reliability</div>
                  <div><i className="fas fa-check mr-2"></i>Faster launches</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-blue-600/20"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center p-12 lg:p-16 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-[3rem]">
            <h4 className="heading-font text-xs text-blue-400 font-bold uppercase tracking-[0.4em] mb-4">Ready to Begin</h4>
            <h2 className="heading-font text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Start Your CE Certification Today</h2>
            <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">Contact our experts to begin your journey to European market access with comprehensive CE certification support.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact#contact-form" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 text-white font-semibold uppercase tracking-wider rounded-2xl hover:bg-blue-500 transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-2xl">
                Get Started
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:+917009007527" className="inline-flex items-center justify-center gap-3 px-10 py-5 border border-white/20 text-white font-semibold uppercase tracking-wider rounded-2xl hover:bg-white/10 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}