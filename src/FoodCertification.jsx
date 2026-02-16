import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const certifications = [
  {
    tag: 'Food Safety Matrix // 01',
    title: 'IFS',
    subtitle: 'Certification',
    description: 'The International Featured Standards (IFS) are food safety and quality standards recognized by the Global Food Safety Initiative (GFSI). IFS certification demonstrates your commitment to food safety and quality management.',
    image: '/F1.png',
    items: [
      'IFS Food Standard for food manufacturers',
      'IFS Logistics for logistics companies',
      'IFS Broker for brokers and traders',
      'Comprehensive audit and certification services'
    ],
    cta: 'Learn More IFS',
    link: '/food-certification/ifs'
  },
  {
    tag: 'Farm Assurance // 02',
    title: 'GLOBALGAP',
    subtitle: 'Certification',
    description: 'GLOBALGAP is a leading farm assurance program that sets voluntary standards for the certification of agricultural products worldwide. It ensures safe and sustainable agricultural practices.',
    image: '/F2.png',
    items: [
      'Crop production standards',
      'Livestock standards',
      'Aquaculture standards',
      'Chain of custody certification'
    ],
    cta: 'Learn More GLOBALGAP',
    link: '/food-certification/globalgap'
  },
  {
    tag: 'Hazard Control // 03',
    title: 'HACCP',
    subtitle: 'Certification',
    description: 'Hazard Analysis and Critical Control Points (HACCP) is a systematic preventive approach to food safety that identifies, evaluates, and controls hazards in food production.',
    image: '/F3.png',
    items: [
      'HACCP system development and implementation',
      'HACCP training and certification',
      'HACCP audits and verification',
      'Compliance with food safety regulations'
    ],
    cta: 'Learn More HACCP',
    link: '/food-certification/haccp'
  },
  {
    tag: 'GFSI Recognized // 04',
    title: 'FSSC 22000',
    subtitle: 'Certification',
    description: 'FSSC 22000 is a GFSI-recognized food safety management system certification scheme based on ISO 22000. It provides a framework for managing food safety risks.',
    image: '/F4.png',
    items: [
      'FSSC 22000 for food manufacturing',
      'FSSC 22000 for packaging manufacturing',
      'FSSC 22000 for storage and distribution',
      'Comprehensive audit and certification services'
    ],
    cta: 'Learn More FSSC 22000',
    link: '/food-certification/fssc-22000'
  },
  {
    tag: 'Food Safety Standard // 05',
    title: 'ISO 22000',
    subtitle: 'Certification',
    description: 'ISO 22000 is an international standard that specifies requirements for a food safety management system. It helps organizations in the food chain ensure food safety.',
    image: '/F5.png',
    items: [
      'Food safety management system implementation',
      'ISO 22000 certification audits',
      'Training and consultancy services',
      'Continuous improvement support'
    ],
    cta: 'Learn More ISO 22000',
    link: '/food-certification/iso-22000'
  },
  {
    tag: 'FSSAI Mandated // 06',
    title: 'FoSTaC',
    subtitle: 'Training',
    description: 'Food Safety Training and Certification (FoSTaC) is a training program mandated by FSSAI (Food Safety and Standards Authority of India) for food business operators. We provide comprehensive FoSTaC training programs.',
    image: '/F6.png',
    items: [
      'Basic Level FoSTaC training',
      'Advanced Level FoSTaC training',
      'Specialized training for different food sectors',
      'Certification upon successful completion'
    ],
    cta: 'Learn More FoSTaC',
    link: '/food-certification/fostac'
  },
  {
    tag: 'Water Sustainability // 07',
    title: 'GLOBALGAP',
    subtitle: 'SPRING',
    description: 'GLOBALGAP SPRING (Sustainable Program for Irrigation and Groundwater Use) is a module that addresses sustainable water use in agricultural production. We provide certification services for GLOBALGAP SPRING compliance.',
    image: '/F7.png',
    items: [
      'GLOBALGAP SPRING certification',
      'Sustainable water management assessment',
      'Irrigation system evaluation',
      'Groundwater protection verification'
    ],
    cta: 'Learn More SPRING',
    link: '/food-certification/globalgap-spring'
  },
  {
    tag: 'Supply Chain Traceability // 08',
    title: 'GLOBALGAP',
    subtitle: 'Chain of Custody',
    description: 'GLOBALGAP Chain of Custody certification ensures that certified products can be traced through the supply chain from farm to consumer. We provide GLOBALGAP C.O.C. certification services for supply chain operators.',
    image: '/F8.png',
    items: [
      'GLOBALGAP C.O.C. certification',
      'Supply chain traceability verification',
      'Product integrity assurance',
      'Chain of custody management'
    ],
    cta: 'Learn More C.O.C.',
    link: '/food-certification/globalgap-coc'
  },
  {
    tag: 'Social Practice // 09',
    title: 'GLOBALGAP',
    subtitle: 'GRASP',
    description: 'GLOBALGAP GRASP (GLOBALGAP Risk Assessment on Social Practice) is a voluntary module that assesses social practices in agricultural production. We provide GRASP assessment and certification services.',
    image: '/F9.png',
    items: [
      'GLOBALGAP GRASP assessment',
      'Social practice evaluation',
      'Worker welfare verification',
      'Social responsibility compliance'
    ],
    cta: 'Learn More GRASP',
    link: '/food-certification/globalgap-grasp'
  },
  {
    tag: 'Organic Standards // 10',
    title: 'EU Organic',
    subtitle: 'Certification',
    description: "EU Organic certification ensures that products meet the European Union's organic farming standards. We provide EU Organic certification services to help producers access European organic markets.",
    image: '/F10.png',
    items: [
      'EU Organic certification',
      'Organic farming standards compliance',
      'Organic product verification',
      'EU market access support'
    ],
    cta: 'Learn More EU Organic',
    link: '/food-certification/eu-organic'
  },
  {
    tag: 'Retail Standards // 11',
    title: 'Albert Heijn',
    subtitle: 'Certification',
    description: 'Albert Heijn is a leading Dutch supermarket chain with specific quality and safety requirements for suppliers. We provide Albert Heijn certification services to help suppliers meet their standards and access this important market.',
    image: '/F11.png',
    items: [
      'Albert Heijn supplier certification',
      'Quality standards compliance',
      'Food safety verification',
      'Supply chain audit services'
    ],
    cta: 'Learn More Albert Heijn',
    link: '/food-certification/albert-heijn'
  },
  {
    tag: 'Biodiversity Module // 12',
    title: 'Biodiversity Add-On',
    subtitle: 'Global G.A.P',
    description: 'The Biodiversity Add-On for GLOBALGAP is a voluntary module that helps farmers assess and improve biodiversity on their farms. We provide certification services for the Biodiversity Add-On compliance.',
    image: '/F12.png',
    items: [
      'Biodiversity assessment services',
      'Farm biodiversity improvement plans',
      'GLOBALGAP Biodiversity certification',
      'Environmental impact evaluation'
    ],
    cta: 'Learn More Biodiversity',
    link: '/food-certification/biodiversity-add-on'
  },
  {
    tag: 'Retail Add-On // 13',
    title: 'AH DLL Grow Add-On',
    subtitle: 'Global G.A.P',
    description: 'The AH DLL Grow Add-On for GLOBALGAP is a specific module addressing Albert Heijn and DLL requirements for sustainable agricultural growth. We provide certification services for this add-on.',
    image: '/F13.png',
    items: [
      'AH DLL Grow Add-On certification',
      'Sustainable growth assessment',
      'Supplier compliance verification',
      'Agricultural quality standards'
    ],
    cta: 'Learn More AH DLL Grow',
    link: '/food-certification/ah-dll-grow'
  },
  {
    tag: 'Food Safety Standard // 14',
    title: 'BRC',
    subtitle: 'Certification',
    description: 'BRC (British Retail Consortium) Global Standard for Food Safety is a GFSI-recognized standard for food safety management. We provide BRC certification services to help manufacturers meet global food safety requirements.',
    image: '/F14.png',
    items: [
      'BRC food safety certification',
      'Comprehensive audit services',
      'Gap analysis and preparation',
      'Ongoing compliance support'
    ],
    cta: 'Learn More BRC',
    link: '/food-certification/brc'
  },
  {
    tag: 'Retail Assurance // 15',
    title: "Tesco Nature's",
    subtitle: 'Choice',
    description: "Tesco Nature's Choice is a quality assurance scheme for fresh produce suppliers to Tesco. We provide certification services to help suppliers meet Tesco's specific quality and safety requirements.",
    image: '/F15.png',
    items: [
      "Tesco Nature's Choice certification",
      'Fresh produce quality assurance',
      'Supplier compliance assessment',
      'Environmental management compliance'
    ],
    cta: "Learn More Tesco Nature's Choice",
    link: '/food-certification/tesco-natures-choice'
  },
  {
    tag: 'Non-GMO Verification // 16',
    title: 'Non-GMO',
    subtitle: 'Products',
    description: 'Non-GMO Products certification verifies that products are produced without genetically modified organisms. We provide Non-GMO certification services to help manufacturers meet consumer demand for non-GMO products.',
    image: '/F16.png',
    items: [
      'Non-GMO product certification',
      'Supply chain verification',
      'Testing and analysis services',
      'Labeling compliance support'
    ],
    cta: 'Learn More Non-GMO',
    link: '/food-certification/non-gmo-products'
  },
  {
    tag: 'Feed Safety // 17',
    title: 'Non-GMO',
    subtitle: 'Animal Feed',
    description: 'Non-GMO Animal Feed certification ensures that animal feed products are free from genetically modified ingredients. We provide certification services for animal feed manufacturers and suppliers.',
    image: '/F17.png',
    items: [
      'Non-GMO animal feed certification',
      'Feed ingredient verification',
      'Supply chain traceability',
      'Compliance documentation support'
    ],
    cta: 'Learn More Non-GMO Feed',
    link: '/food-certification/non-gmo-animal-feed'
  },
  {
    tag: 'Italian Quality Mark // 18',
    title: 'Bollino Blue',
    subtitle: 'Certification',
    description: 'Bollino Blue is an Italian quality certification mark for products meeting specific quality and safety standards. We provide Bollino Blue certification services to help manufacturers access the Italian market.',
    image: '/F18.png',
    items: [
      'Bollino Blue certification',
      'Quality standards compliance',
      'Product safety verification',
      'Italian market access support'
    ],
    cta: 'Learn More Bollino Blue',
    link: '/food-certification/bollino-blue'
  },
  {
    tag: 'Hygiene Standards // 19',
    title: 'Good Hygiene',
    subtitle: 'Practices',
    description: 'Good Hygiene Practices (GHP) certification ensures that food businesses maintain proper hygiene standards throughout their operations. We provide GHP assessment and certification services.',
    image: '/F19.png',
    items: [
      'GHP assessment and certification',
      'Hygiene management systems',
      'Staff training and awareness',
      'Compliance monitoring support'
    ],
    cta: 'Learn More GHP',
    link: '/food-certification/ghp'
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

export default function FoodCertification() {
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
            src="/ad4.jpg"
            className="w-full h-full object-cover opacity-25"
            alt="Food Certification Hero"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/80 via-transparent to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-24">
          <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-6 font-bold">
            Food Safety Excellence Nodes Active
          </h4>
          <h1 data-reveal="reveal-up" data-reveal-delay="150" className="heading-font text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight" style={{ textShadow: '0 0 20px rgba(212,168,67,0.4)' }}>
            Food Certification
          </h1>
          <h3 data-reveal="reveal-up" data-reveal-delay="250" className="heading-font text-white/80 text-base md:text-xl uppercase tracking-[0.3em] mb-4">
            Services
          </h3>
          <div data-reveal="reveal-scale" data-reveal-delay="350" className="w-24 h-0.5 bg-eurogold-400 mx-auto mb-6 shadow-[0_0_15px_rgba(212,168,67,0.6)]"></div>
          <p data-reveal="reveal-up" data-reveal-delay="450" className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Ensuring food safety and quality through comprehensive certification programs
          </p>
        </div>
      </section>

      {/* All Certification Services */}
      <section className="py-16 lg:py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">
              Comprehensive Programs
            </h4>
            <h2 data-reveal="reveal-up" data-reveal-delay="150" className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Our Food Certifications
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
                    to={cert.link}
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
                Initiate Food Safety Matrix
              </h4>
              <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Quick Inquiry
              </h2>
              <p className="text-white/50 mb-8 max-w-xl mx-auto leading-relaxed">
                Our food safety consultants are ready to support your organization's food certification and compliance journey.
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
