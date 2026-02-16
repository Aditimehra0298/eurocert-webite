import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const CheckIcon = () => (
  <svg className="w-5 h-5 text-eurogold-400 drop-shadow-[0_0_5px_rgba(212,168,67,0.5)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
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
      { threshold: 0.15 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

const services = [
  { icon: 'fa-shield-alt', title: 'MED Certification', description: 'Full scope MED Wheel Mark certification for marine equipment.' },
  { icon: 'fa-clipboard-check', title: 'Type Approval', description: 'Comprehensive marine equipment type approval and testing services.' },
  { icon: 'fa-chalkboard-teacher', title: 'Training & Consultancy', description: 'Expert guidance on MED requirements and marine safety standards.' },
  { icon: 'fa-headset', title: 'Ongoing Support', description: 'Continuous monitoring for MED regulation updates and equipment changes.' },
  { icon: 'fa-file-alt', title: 'Documentation & Reporting', description: 'Technical documentation and MED Wheel Mark certification records.' },
  { icon: 'fa-sync-alt', title: 'Safety Verification', description: 'Verification of marine safety equipment compliance and performance.' }
]

const benefits = [
  { title: 'Regulatory Compliance', desc: 'Meet all MED requirements for marine equipment on EU ships.' },
  { title: 'Market Access', desc: 'Access to European maritime markets with MED certified equipment.' },
  { title: 'Safety Assurance', desc: 'Demonstrate commitment to marine safety standards.' },
  { title: 'Competitive Advantage', desc: 'Stand out as a MED-certified marine equipment manufacturer.' },
  { title: 'Risk Management', desc: 'Reduce risks through proper marine equipment compliance.' }
]

const relatedServices = [
  { title: 'PED', subtitle: 'Pressure Equipment', image: '/c6.png', link: '/ped' },
  { title: 'Machinery', subtitle: 'CE Certification', image: '/c4.png', link: '/machinery' },
  { title: 'Railway', subtitle: 'Interoperability', image: '/c12.png', link: '/railway' }
]

export default function MarineEquipment() {
  const pageRef = useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div ref={pageRef}>
      <TopBar />
      <Navbar />

      {/* Hero — Dark */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/c13.png" className="w-full h-full object-cover opacity-25" alt="Marine Equipment Directive" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/80 via-transparent to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-24">
          <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-6 font-bold">MED Wheel Mark Certification</h4>
          <h1 data-reveal="reveal-up" data-reveal-delay="150" className="heading-font text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight" style={{ textShadow: '0 0 20px rgba(212,168,67,0.4)' }}>Marine Equipment<br />Directive</h1>
          <h3 data-reveal="reveal-up" data-reveal-delay="250" className="heading-font text-white/80 text-base md:text-xl uppercase tracking-[0.3em] mb-4">(2014/90/EU)</h3>
          <div data-reveal="reveal-scale" data-reveal-delay="350" className="w-24 h-0.5 bg-eurogold-400 mx-auto mb-6 shadow-[0_0_15px_rgba(212,168,67,0.6)]"></div>
          <p data-reveal="reveal-up" data-reveal-delay="450" className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">Marine equipment directive certification for EU maritime safety</p>
        </div>
      </section>

      {/* Intro — Light */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div data-reveal="reveal-left">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">Standard Overview</h4>
              <h2 className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">Marine Equipment Directive<br /><span className="text-euro-600">Certification</span></h2>
            </div>
            <p data-reveal="reveal-left" data-reveal-delay="150" className="text-slate-500 text-lg leading-relaxed">We provide comprehensive Marine Equipment Directive certification services to ensure marine equipment meets EU safety and environmental protection standards.</p>
            <div data-reveal="reveal-left" data-reveal-delay="250" className="p-8 rounded-3xl border border-euro-200 bg-euro-50/50">
              <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest mb-4">What is MED?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">The Marine Equipment Directive (MED 2014/90/EU) ensures that marine equipment placed on EU ships meets safety and environmental protection standards. It covers life-saving appliances, fire protection equipment, navigation equipment, and other marine safety equipment requiring the MED Wheel Mark.</p>
            </div>
          </div>
          <div data-reveal="reveal-right" data-reveal-delay="200" className="relative rounded-3xl overflow-hidden shadow-[0_32px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-100 h-[350px] sm:h-[450px] md:h-[550px] group">
            <img src="/c13.png" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Marine Equipment Directive" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Grid — Light */}
      <section className="py-16 lg:py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">Comprehensive Services</h4>
            <h2 data-reveal="reveal-up" data-reveal-delay="150" className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Service Nodes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} data-reveal="reveal-up" data-reveal-delay={String(index * 100)} className="text-center p-10 bg-white rounded-3xl border border-slate-100 hover:border-euro-200 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-euro-50 flex items-center justify-center text-euro-600 mb-6 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${service.icon} text-xl`}></i>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Why Choose Us — Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-16 lg:py-20">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Key Advantages</h4>
              <h3 data-reveal="reveal-up" data-reveal-delay="100" className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight mb-10">Benefits Protocol</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} data-reveal="reveal-left" data-reveal-delay={String(index * 100)} className="flex gap-4 group">
                    <CheckIcon />
                    <div>
                      <h5 className="text-white font-bold text-sm uppercase tracking-wide heading-font">{benefit.title}</h5>
                      <p className="text-white/50 text-sm mt-1 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal="reveal-right" data-reveal-delay="200" className="p-10 sm:p-12 rounded-[3rem] border border-white/5 bg-white/[0.02] flex flex-col justify-center">
              <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">Why Eurocert Asia?</h3>
              <p className="text-white/50 text-lg leading-relaxed mb-10">Our experienced auditors understand Marine Equipment Directive requirements and can guide you through the Wheel Mark certification process.</p>
              <div className="space-y-4">
                <div className="p-6 rounded-2xl border border-eurogold-400/20 bg-eurogold-400/5">
                  <span className="heading-font text-eurogold-400 font-bold text-4xl block mb-2 leading-none">25+</span>
                  <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.3em] heading-font">Years of Industrial Intelligence</span>
                </div>
                <div className="p-6 rounded-2xl border border-eurogold-400/20 bg-eurogold-400/5">
                  <span className="heading-font text-eurogold-400 font-bold text-4xl block mb-2 leading-none">100%</span>
                  <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.3em] heading-font">Technical Directive Accuracy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Protocols — Light */}
      <section className="py-16 lg:py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">Explore More</h4>
            <h2 data-reveal="reveal-up" data-reveal-delay="150" className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Related Protocols</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <Link key={index} to={service.link} data-reveal="reveal-up" data-reveal-delay={String(index * 150)} className="group relative h-[380px] rounded-3xl overflow-hidden border border-slate-200 hover:border-euro-300 shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${service.image}')` }} />
                <div className="absolute inset-0 bg-linear-to-t from-[#030a16]/80 via-[#030a16]/30 to-transparent"></div>
                <div className="absolute bottom-8 left-6 right-6 z-20">
                  <h4 className="text-white text-sm heading-font font-bold uppercase tracking-widest mb-2">{service.title}</h4>
                  <span className="text-[9px] font-bold uppercase text-eurogold-400 tracking-[0.2em] heading-font">{service.subtitle}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-16 lg:py-20">
          <div className="container mx-auto px-6 text-center">
            <div data-reveal="reveal-scale" className="max-w-3xl mx-auto p-12 sm:p-16 rounded-[3rem] border border-white/5 bg-white/[0.02]">
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-4 font-bold">Initiate MED Compliance</h4>
              <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Quick Inquiry</h2>
              <p className="text-white/50 mb-8 max-w-xl mx-auto leading-relaxed">Our marine equipment experts are ready to guide your organization through MED compliance and Wheel Mark certification.</p>
              <div className="flex items-center justify-center gap-3 text-white/30 text-xs heading-font tracking-widest uppercase mb-8">
                <i className="fas fa-map-marker-alt text-eurogold-400/60"></i>
                <span>Bureau headquarters &mdash; Eurocert Inspection Services, Panchkula, Haryana</span>
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link to="/#contact" className="inline-flex items-center justify-center gap-3 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-10 py-5 hover:bg-eurogold-300 transition-all shadow-xl shadow-eurogold-400/20">
                  Get Started <i className="fas fa-arrow-right text-[10px]"></i>
                </Link>
                <a href="tel:+917009007527" className="inline-flex items-center justify-center gap-3 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white border border-white/20 rounded-full px-10 py-5 hover:bg-white/5 transition-all">
                  <i className="fas fa-phone text-[10px]"></i> Call Us Now
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
