import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const directives = [
  {
    title: 'CE Certification for Construction Products',
    shortTitle: 'Construction Products (CPR)',
    description: 'Construction products must comply with the Construction Products Regulation (CPR) to be placed on the EU market. We help manufacturers achieve CE marking for construction materials, ensuring they meet all safety and performance requirements.',
    image: '/c2.png',
    items: [
      'Building materials and components',
      'Structural elements',
      'Insulation materials',
      'Roofing and flooring products',
      'Windows and doors'
    ]
  },
  {
    title: 'CE Certification for Lifts',
    shortTitle: 'Lifts Directive (2014/33/EU)',
    description: 'Lifts and lifting equipment must comply with the Lifts Directive (2014/33/EU) to be sold in the EU. We provide comprehensive certification services for all types of lifts and lifting equipment.',
    image: '/c3.png',
    items: [
      'Passenger lifts',
      'Goods lifts',
      'Service lifts',
      'Lifting platforms',
      'Safety components for lifts'
    ]
  },
  {
    title: 'CE Marking for Machinery',
    shortTitle: 'Machinery Directive (2006/42/EC)',
    description: 'The Machinery Directive (2006/42/EC) requires that machinery placed on the EU market must be CE marked. We assist manufacturers in achieving compliance for all types of machinery and equipment.',
    image: '/c4.png',
    items: [
      'Industrial machinery',
      'Agricultural machinery',
      'Construction machinery',
      'Food processing equipment',
      'Packaging machinery'
    ]
  },
  {
    title: 'CE Marking for Cement',
    shortTitle: 'Cement Products',
    description: 'Cement products must comply with harmonized European standards to receive CE marking. We provide certification services for various types of cement products.',
    image: '/c5.png',
    items: [
      'Portland cement',
      'Composite cement',
      'Specialized cement products',
      'Performance testing and assessment'
    ]
  },
  {
    title: 'PED Certification (2014/68/EU)',
    shortTitle: 'Pressure Equipment Directive',
    description: 'The Pressure Equipment Directive (PED) applies to pressure equipment and assemblies with a maximum allowable pressure greater than 0.5 bar. We provide comprehensive PED certification services.',
    image: '/c6.png',
    items: [
      'Pressure vessels',
      'Steam generators',
      'Piping systems',
      'Safety accessories',
      'Pressure accessories'
    ]
  },
  {
    title: 'RoHS Certification',
    shortTitle: 'Restriction of Hazardous Substances',
    description: 'The RoHS Directive restricts the use of certain hazardous substances in electrical and electronic equipment. We help manufacturers ensure compliance with RoHS requirements.',
    image: '/c7.png',
    items: [
      'RoHS compliance testing',
      'Material analysis',
      'Documentation support',
      'Supply chain verification'
    ]
  },
  {
    title: 'CE Marking LVD/EMC',
    shortTitle: 'Low Voltage & EMC Directive',
    description: 'The Low Voltage Directive (LVD) and Electromagnetic Compatibility (EMC) Directive are essential for electrical and electronic equipment sold in the EU. We provide comprehensive CE marking services for LVD and EMC compliance.',
    image: '/c8.png',
    items: [
      'LVD compliance assessment',
      'EMC testing and certification',
      'Technical documentation preparation',
      'CE marking support'
    ]
  },
  {
    title: 'REACH Compliance',
    shortTitle: 'Chemical Substances Regulation',
    description: 'REACH (Registration, Evaluation, Authorisation and Restriction of Chemicals) is a European Union regulation addressing the production and use of chemical substances. We provide REACH compliance services to help manufacturers and importers meet regulatory requirements.',
    image: '/c9.png',
    items: [
      'REACH compliance assessment',
      'Chemical substance registration support',
      'Restricted substance verification',
      'Supply chain compliance'
    ]
  },
  {
    title: 'ATEX Certification',
    shortTitle: 'Explosive Atmospheres',
    description: 'ATEX (Atmosphères Explosibles) certification is required for equipment and protective systems intended for use in potentially explosive atmospheres. We provide comprehensive ATEX certification services.',
    image: '/c10.png',
    items: [
      'ATEX equipment certification',
      'Explosive atmosphere risk assessment',
      'Protective systems certification',
      'Zone classification support'
    ]
  },
  {
    title: 'PI Mark - Transportable Pressure Equipment',
    shortTitle: 'TPED Directive',
    description: 'The PI (Periodic Inspection) Mark is required for transportable pressure equipment in accordance with the Transportable Pressure Equipment Directive (TPED). We provide PI Mark certification services.',
    image: '/c11.png',
    items: [
      'PI Mark certification',
      'Transportable pressure equipment inspection',
      'TPED compliance verification',
      'Periodic inspection services'
    ]
  },
  {
    title: 'Railway Interoperability Certification',
    shortTitle: 'Railway Systems & Components',
    description: 'Railway Interoperability certification ensures that railway systems, subsystems, and components meet European standards for safe and efficient cross-border railway operations. We provide comprehensive railway interoperability certification services.',
    image: '/c12.png',
    items: [
      'Railway interoperability certification',
      'TSI (Technical Specifications for Interoperability) compliance',
      'Railway component certification',
      'EN 15085 welding certification'
    ]
  },
  {
    title: 'Marine Equipment Directive Certification',
    shortTitle: 'MED Wheel Mark',
    description: 'The Marine Equipment Directive (MED) ensures that marine equipment meets safety and environmental protection standards for use on EU ships. We provide MED certification services.',
    image: '/c13.png',
    items: [
      'Marine Equipment Directive certification',
      'MED wheel mark certification',
      'Marine equipment type approval',
      'Ship safety equipment certification'
    ]
  }
]

const technicalAnnex = [
  {
    title: 'EN 15085 Railway Welding',
    description: 'Specialized certification for fusion welding of railway vehicles and components according to the international EN 15085 standard.'
  },
  {
    title: 'EN 1090 Structural',
    description: 'CE marking for structural steel and aluminum components, ensuring structural integrity and mechanical resistance protocols.'
  },
  {
    title: 'ISO 3834 Fusion Quality',
    description: 'Quality requirements for fusion welding of metallic materials, securing fabrication integrity across industrial sectors.'
  }
]

const CheckIcon = () => (
  <svg className="w-5 h-5 text-eurogold-400 drop-shadow-[0_0_5px_rgba(212,168,67,0.5)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

/* Hook: observes all [data-reveal] children inside a container */
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

export default function CECertification() {
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
            src="/Gemini_Generated_Image_84ibid84ibid84ib.png"
            className="w-full h-full object-cover opacity-30"
            alt="CE Certification Hero"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/80 via-transparent to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-24">
          <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-6 font-bold">
            European Compliance Node
          </h4>
          <h1 data-reveal="reveal-up" data-reveal-delay="150" className="heading-font text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight" style={{ textShadow: '0 0 20px rgba(212,168,67,0.4)' }}>
            CE Certification
          </h1>
          <div data-reveal="reveal-scale" data-reveal-delay="300" className="w-24 h-0.5 bg-eurogold-400 mx-auto mb-6 shadow-[0_0_15px_rgba(212,168,67,0.6)]"></div>
          <p data-reveal="reveal-up" data-reveal-delay="400" className="heading-font text-white/70 text-xs md:text-sm uppercase tracking-[0.3em]">
            Enabling easy entry into European markets
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div data-reveal="reveal-left">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">
                Technical Conformity
              </h4>
              <h2 className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                CE Certification
              </h2>
            </div>
            <p data-reveal="reveal-left" data-reveal-delay="150" className="text-slate-500 text-lg leading-relaxed">
              CE marking is a mandatory conformity marking for products sold within the European Economic Area (EEA). It indicates that a product has been assessed and deemed to meet EU safety, health, and environmental protection requirements.
            </p>
            <p data-reveal="reveal-left" data-reveal-delay="250" className="text-slate-500 text-base leading-relaxed">
              At <strong className="text-slate-900 font-bold">Eurocert Asia</strong>, we provide comprehensive CE certification services for a wide range of products. Our expert team guides you through the entire process, ensuring compliance with all relevant EU directives and regulations.
            </p>
            <div data-reveal="reveal-up" data-reveal-delay="350" className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {['Expert Guidance', 'Directive Compliance', 'Fast-track Audit', 'Global Market Support'].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-[10px] font-bold text-slate-800 uppercase heading-font tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal="reveal-right" data-reveal-delay="200" className="relative rounded-3xl overflow-hidden shadow-[0_32px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-100 h-[350px] sm:h-[450px] md:h-[550px] group">
            <img
              src="/Gemini_Generated_Image_doy2sldoy2sldoy2.png"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="CE Certification"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Certification Services — Alternating layout */}
      <section className="py-16 lg:py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">
              Comprehensive Services
            </h4>
            <h2 data-reveal="reveal-up" data-reveal-delay="150" className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Our Certifications
            </h2>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {directives.map((directive, index) => (
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
                    src={directive.image}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt={directive.title}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#030a16]/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-eurogold-400 text-[9px] font-bold uppercase tracking-[0.3em] rounded-full border border-eurogold-400/30 heading-font">
                      {directive.shortTitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  data-reveal={index % 2 === 0 ? 'reveal-right' : 'reveal-left'}
                  data-reveal-delay="200"
                  className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                >
                  <h3 className="heading-font text-2xl sm:text-3xl font-bold text-slate-900 leading-tight tracking-tight">
                    {directive.title}
                  </h3>
                  <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
                    {directive.description}
                  </p>
                  <div className="pt-2">
                    <h4 className="heading-font text-[10px] text-euro-600 font-bold uppercase tracking-[0.3em] mb-4">
                      Our services cover:
                    </h4>
                    <ul className="space-y-3">
                      {directive.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600 text-sm sm:text-base">
                          <CheckIcon />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-euro-600 text-white heading-font text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-euro-700 transition shadow-xl mt-2"
                  >
                    Get Certified
                    <i className="fas fa-arrow-right text-[9px]"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Annex — Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08)_0%,transparent_60%)]"></div>

        <div className="relative z-10 py-16 lg:py-20">
          <div className="container mx-auto px-6 text-center mb-10">
            <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">
              Specialized Standards
            </h4>
            <h2 data-reveal="reveal-up" data-reveal-delay="150" className="heading-font text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Technical Annex
            </h2>
            <p data-reveal="reveal-up" data-reveal-delay="250" className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Additional specialized certifications for welding and structural components
            </p>
          </div>

          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalAnnex.map((item, index) => (
              <div
                key={index}
                data-reveal="reveal-up"
                data-reveal-delay={String(index * 200)}
                className="p-8 rounded-3xl border border-white/5 bg-white/2 hover:border-eurogold-400/30 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-eurogold-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-eurogold-400/20 transition">
                  <i className="fas fa-certificate text-eurogold-400"></i>
                </div>
                <h5 className="heading-font text-[11px] text-eurogold-400 font-bold tracking-[0.2em] uppercase mb-4">
                  {item.title}
                </h5>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">
              Our Advantage
            </h4>
            <h2 data-reveal="reveal-up" data-reveal-delay="150" className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Why Choose Eurocert
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fa-trophy', title: 'Expert Team', desc: 'Highly qualified professionals with extensive industry experience' },
              { icon: 'fa-bolt', title: 'Fast Processing', desc: 'Streamlined certification process for quick market entry' },
              { icon: 'fa-globe', title: 'Global Recognition', desc: 'Internationally recognized certifications accepted worldwide' },
              { icon: 'fa-handshake', title: 'Full Support', desc: 'End-to-end support from application to certification' }
            ].map((item, index) => (
              <div
                key={index}
                data-reveal="reveal-up"
                data-reveal-delay={String(index * 150)}
                className="text-center p-10 bg-white rounded-3xl border border-slate-100 hover:border-euro-200 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-euro-50 flex items-center justify-center text-euro-600 mb-6 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${item.icon} text-xl`}></i>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>

        <div className="relative z-10 py-16 lg:py-20">
          <div className="container mx-auto px-6 text-center">
            <div data-reveal="reveal-scale" className="max-w-3xl mx-auto p-12 sm:p-16 rounded-[3rem] border border-white/5 bg-white/2">
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-4 font-bold">
                Get Started Today
              </h4>
              <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Ready to Get Certified?
              </h2>
              <p className="text-white/50 mb-8 max-w-xl mx-auto leading-relaxed">
                Contact our team of experts today to discuss your CE certification requirements and start your journey to European market access.
              </p>
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
