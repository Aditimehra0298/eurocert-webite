import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const certifications = [
  {
    tag: 'Carbon Intelligence // 01',
    title: 'ISO 14064',
    subtitle: 'Carbon Footprint Assessment',
    description: 'ISO 14064 provides a framework for quantifying, monitoring, reporting, and verifying greenhouse gas emissions. We help organizations measure and reduce their carbon footprint through comprehensive assessments.',
    image: '/s2.png',
    href: '/sustainability/carbon-footprint',
    items: [
      'Greenhouse gas inventory development',
      'Carbon footprint calculation',
      'ISO 14064 certification',
      'Emission reduction strategies',
      'Verification and validation services'
    ],
    cta: 'Learn More Carbon'
  },
  {
    tag: 'GHG Protocol // 02',
    title: 'ISO 14064',
    subtitle: 'GHG Accounting & Verification',
    description: 'ISO 14064 is an international standard for greenhouse gas accounting and verification. It helps organizations quantify, monitor, and report their greenhouse gas emissions and removals.',
    image: '/s3.png',
    href: '/management-system/iso-14064',
    items: [
      'ISO 14064-1: Organization-level GHG inventory',
      'ISO 14064-2: Project-level GHG quantification',
      'ISO 14064-3: Verification and validation',
      'Comprehensive GHG management'
    ],
    cta: 'Learn More GHG'
  },
  {
    tag: 'Eco Certification Hub // 03',
    title: 'Sustainability',
    subtitle: 'Certifications Overview',
    description: 'We provide comprehensive sustainability certification services to help organizations demonstrate their commitment to environmental responsibility and sustainable business practices.',
    image: '/h4.png',
    href: '/sustainability/certifications',
    items: [
      'Environmental management systems',
      'Sustainable supply chain certification',
      'Renewable energy certifications',
      'Waste management certifications',
      'Water management certifications'
    ],
    cta: 'Learn More Sustainability'
  },
  {
    tag: 'ESG Compliance // 04',
    title: 'BRSR',
    subtitle: 'Business Responsibility & Sustainability Reporting',
    description: 'BRSR reporting and verification services to help listed companies comply with SEBI mandates, disclose ESG performance, and gain third-party assurance on sustainability indicators.',
    image: '/bb1.png',
    href: '/sustainability/brsr',
    items: [
      'Essential & Leadership Indicators verification',
      'Transition & Combined Score verification',
      'General, Management & Individual disclosures',
      'Scope 1, 2 & 3 emissions assessment',
      'Green Credits valuation'
    ],
    cta: 'Learn More BRSR'
  }
]

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

export default function Sustainability() {
  const pageRef = useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div ref={pageRef}>
      <TopBar />
      <Navbar />

      {/* Page Hero — Dark */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img
            src="/ad1.jpg"
            className="w-full h-full object-cover opacity-20"
            alt="Sustainability Hero"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/80 via-transparent to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-24">
          <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-6 font-bold">
            Environmental Compliance Node Active
          </h4>
          <h1 data-reveal="reveal-up" data-reveal-delay="150" className="heading-font text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight" style={{ textShadow: '0 0 20px rgba(212,168,67,0.4)' }}>
            Sustainability
          </h1>
          <h3 data-reveal="reveal-up" data-reveal-delay="250" className="heading-font text-white/80 text-base md:text-xl uppercase tracking-[0.3em] mb-4">
            Certifications
          </h3>
          <div data-reveal="reveal-scale" data-reveal-delay="350" className="w-24 h-0.5 bg-eurogold-400 mx-auto mb-6 shadow-[0_0_15px_rgba(212,168,67,0.6)]"></div>
          <p data-reveal="reveal-up" data-reveal-delay="450" className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Promoting sustainable business practices through comprehensive environmental certifications
          </p>
        </div>
      </section>

      {/* All Certification Services */}
      <section className="py-16 lg:py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">
              Green Standards
            </h4>
            <h2 data-reveal="reveal-up" data-reveal-delay="150" className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Our Sustainability Certifications
            </h2>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Image */}
                <div
                  data-reveal={index % 2 === 0 ? 'reveal-left' : 'reveal-right'}
                  className={`relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-200 group h-[280px] sm:h-[360px] ${index % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <img
                    src={cert.image}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt={cert.title}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#030a16]/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-eurogold-400 text-[9px] font-bold uppercase tracking-[0.3em] rounded-full border border-eurogold-400/30 heading-font">
                      {cert.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  data-reveal={index % 2 === 0 ? 'reveal-right' : 'reveal-left'}
                  data-reveal-delay="200"
                  className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                >
                  <div>
                    <h3 className="heading-font text-3xl sm:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="heading-font text-euro-600 text-sm font-bold uppercase tracking-widest mt-1">
                      {cert.subtitle}
                    </p>
                  </div>
                  <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="pt-2">
                    <ul className="space-y-3">
                      {cert.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600 text-sm sm:text-base">
                          <CheckIcon />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={cert.href}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-euro-600 text-white heading-font text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-euro-700 transition shadow-xl mt-2"
                  >
                    {cert.cta}
                    <i className="fas fa-arrow-right text-[9px]"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Quick Inquiry — Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>

        <div className="relative z-10 py-16 lg:py-20">
          <div className="container mx-auto px-6 text-center">
            <div data-reveal="reveal-scale" className="max-w-3xl mx-auto p-12 sm:p-16 rounded-[3rem] border border-white/5 bg-white/2">
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-4 font-bold">
                Initiate Sustainability Matrix
              </h4>
              <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Quick Inquiry
              </h2>
              <p className="text-white/50 mb-8 max-w-xl mx-auto leading-relaxed">
                Our sustainability consultants are ready to support your organization's environmental compliance and green certification journey.
              </p>
              <div className="flex items-center justify-center gap-3 text-white/30 text-xs heading-font tracking-widest uppercase mb-8">
                <i className="fas fa-map-marker-alt text-eurogold-400/60"></i>
                <span>Bureau headquarters &mdash; Eurocert Inspection Services, Panchkula, Haryana</span>
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center gap-3 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-10 py-5 hover:bg-eurogold-300 transition-all shadow-xl shadow-eurogold-400/20"
                >
                  Get Started
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </Link>
                <a
                  href="tel:+917009007527"
                  className="inline-flex items-center justify-center gap-3 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white border border-white/20 rounded-full px-10 py-5 hover:bg-white/5 transition-all"
                >
                  <i className="fas fa-phone text-[10px]"></i>
                  Call Us Now
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
