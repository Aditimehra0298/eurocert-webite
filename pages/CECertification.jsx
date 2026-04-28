import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UniverseBackground from '../components/UniverseBackground'
import NeuralCanvas from '../components/NeuralCanvas'

const directives = [
  {
    title: 'CE Certification for Construction Products',
    shortTitle: 'Construction Products (CPR)',
    description: 'Construction products must comply with the Construction Products Regulation (CPR) to be placed on the EU market. We help manufacturers achieve CE marking for construction materials, ensuring they meet all safety and performance requirements.',
    image: '/construction-products-cpr.png',
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
    image: '/lifts-directive.png',
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
    image: '/machinery-directive.png',
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
    image: '/cement-products.png',
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
    image: '/pressure-equipment-ped.png',
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
    image: '/rohs-certification.png',
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
    image: '/lvd-emc-directive.png',
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
    image: '/reach-compliance.png',
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
    image: '/atex-certification.png',
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
    image: '/pi-mark-tped.png',
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
    image: '/railway-interoperability.png',
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
    image: '/marine-equipment-med.png',
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
  <svg className="w-5 h-5 text-accent drop-shadow-[0_0_5px_rgba(0,123,167,0.5)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function CECertification() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-white">
      <UniverseBackground />
      <NeuralCanvas />
      <Header />

      {/* Page Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <img 
             src="/core-services-banner.png" 
            className="w-full h-full object-cover opacity-40 scale-105" 
            alt="CE Certification Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#f0f5fa]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block glass-panel px-6 py-2 rounded-full mb-8 border-accent/30">
            <span className="text-[9px] font-tech font-bold text-accent uppercase tracking-[0.5em]">European Compliance Node</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 tracking-wide mb-4 leading-none uppercase hero-text-shadow">
            CE Certification <br/><span className="text-accent">Services</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-500 font-tech font-bold uppercase tracking-[0.3em]">
            Enabling easy entry into European markets
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-tech font-bold uppercase tracking-[0.4em] text-xs">Technical Conformity Node</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-gray-800 leading-tight uppercase tracking-tighter">CE Certification</h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed font-sans max-w-xl">
              CE marking is a mandatory conformity marking for products sold within the European Economic Area (EEA). It indicates that a product has been assessed and deemed to meet EU safety, health, and environmental protection requirements.
            </p>
            <p className="text-gray-500 text-base font-sans">
              At <strong className="text-white font-bold">Eurocert Asia</strong>, we provide comprehensive CE certification services for a wide range of products. Our expert team guides you through the entire process, ensuring compliance with all relevant EU directives and regulations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {['Expert Guidance', 'Directive Compliance', 'Fast-track Audit', 'Global Market Support'].map((item, index) => (
                <div key={index} className="flex items-center gap-4 text-[10px] font-bold text-gray-800 uppercase font-tech tracking-widest group">
                  <CheckIcon />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-lg border border-gray-200 group h-[350px] sm:h-[450px] md:h-[550px]">
            <img 
               src="/ce-certification-process.png" 
              className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110" 
              alt="CE Certification"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* All Certification Services - Detailed Sections */}
      <section className="py-16 md:py-24 relative z-10 bg-navy-light/20 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-accent font-tech font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Comprehensive Services</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 uppercase tracking-widest leading-none">
              Our <span className="text-accent">Certifications</span>
            </h2>
          </div>

          <div className="space-y-16 md:space-y-24">
            {directives.map((directive, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className={`relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(91,141,239,0.15)] border border-gray-200 group h-[300px] sm:h-[400px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={directive.image} 
                    className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110" 
                    alt={directive.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-4 py-1.5 glass-panel text-accent text-[9px] font-bold uppercase tracking-[0.3em] rounded-full border border-accent/30 font-tech">
                      {directive.shortTitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-gray-800 leading-tight uppercase">
                    {directive.title}
                  </h3>
                  <p className="text-gray-500 text-base sm:text-lg leading-relaxed font-sans">
                    {directive.description}
                  </p>
                  <div className="pt-4">
                    <h4 className="text-accent font-tech font-bold uppercase tracking-[0.2em] text-xs mb-4">Our services cover:</h4>
                    <ul className="space-y-3">
                      {directive.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-600 text-sm sm:text-base">
                          <CheckIcon />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to="/#contact" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 text-accent font-tech font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-accent hover:text-white transition-all duration-300 border border-accent/30 mt-4"
                  >
                    Get Certified
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Annex */}
      <section className="py-16 md:py-24 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center mb-16">
          <h3 className="text-4xl font-display font-black text-gray-800 uppercase tracking-widest leading-none">
            Technical <br/><span className="text-accent">Annex</span>
          </h3>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Additional specialized certifications for welding and structural components
          </p>
        </div>
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {technicalAnnex.map((item, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 rounded-3xl border-gray-200 hover:border-accent/30 transition group"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h5 className="text-accent font-tech font-black text-sm mb-4 tracking-[0.2em] uppercase">{item.title}</h5>
              <p className="text-sm text-gray-500 leading-relaxed font-sans">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 relative z-10 bg-navy-light/20 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-display font-black text-gray-800 uppercase tracking-wide">
              Why Choose <span className="text-accent">Eurocert</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: 'Expert Team', desc: 'Highly qualified professionals with extensive industry experience' },
              { icon: '⚡', title: 'Fast Processing', desc: 'Streamlined certification process for quick market entry' },
              { icon: '🌍', title: 'Global Recognition', desc: 'Internationally recognized certifications accepted worldwide' },
              { icon: '🤝', title: 'Full Support', desc: 'End-to-end support from application to certification' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 glass-panel rounded-2xl border border-gray-200 hover:border-accent/30 transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-gray-800 font-display font-bold uppercase tracking-wide mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="glass-panel max-w-3xl mx-auto p-10 sm:p-16 rounded-[3rem] border-gray-200">
            <h3 className="text-3xl sm:text-4xl font-display font-black text-gray-800 uppercase tracking-wide mb-6">
              Ready to Get <span className="text-accent">Certified?</span>
            </h3>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Contact our team of experts today to discuss your CE certification requirements and start your journey to European market access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/#contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-tech font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-accent-bright transition-all duration-300 shadow-lg shadow-accent/25"
              >
                Get Started
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
              <a 
                href="tel:+917009007527" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-white font-tech font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-gray-200 transition-all duration-300 border border-gray-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
