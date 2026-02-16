import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UniverseBackground from '../components/UniverseBackground'
import NeuralCanvas from '../components/NeuralCanvas'

const certifications = [
  {
    number: '01',
    tag: 'Food Safety Matrix',
    title: 'IFS',
    subtitle: 'Certification',
    description: 'The International Featured Standards (IFS) are food safety and quality standards recognized by the Global Food Safety Initiative (GFSI). IFS certification demonstrates your commitment to food safety and quality management.',
    items: ['IFS Food Standard for food manufacturers', 'IFS Logistics for logistics companies', 'IFS Broker for brokers and traders', 'Comprehensive audit and certification services'],
    image: '/F1.png',
    imageAlt: 'Quality inspection of packaged food products on a production line',
    btnText: 'Learn More IFS',
    link: '/food-certification/ifs',
    gridCols: true,
  },
  {
    number: '02',
    tag: 'Farm Assurance',
    title: 'GLOBALGAP',
    subtitle: 'Certification',
    description: 'GLOBALGAP is a leading farm assurance program that sets voluntary standards for the certification of agricultural products worldwide. It ensures safe and sustainable agricultural practices.',
    items: ['Crop production standards', 'Livestock standards', 'Aquaculture standards', 'Chain of custody certification'],
    image: '/F2.png',
    imageAlt: 'GLOBALGAP agricultural certification',
    btnText: 'Learn More GLOBALGAP',
    link: '/food-certification/globalgap',
    gridCols: true,
  },
  {
    number: '03',
    tag: 'Hazard Control',
    title: 'HACCP',
    subtitle: 'Certification',
    description: 'Hazard Analysis and Critical Control Points (HACCP) is a systematic preventive approach to food safety that identifies, evaluates, and controls hazards in food production.',
    items: ['HACCP system development and implementation', 'HACCP training and certification', 'HACCP audits and verification', 'Compliance with food safety regulations'],
    image: '/F3.png',
    imageAlt: 'HACCP food safety certification',
    btnText: 'Learn More HACCP',
    link: '/food-certification/haccp',
    gridCols: true,
  },
  {
    number: '04',
    tag: 'GFSI Recognized',
    title: 'FSSC 22000',
    subtitle: 'Certification',
    description: 'FSSC 22000 is a GFSI-recognized food safety management system certification scheme based on ISO 22000. It provides a framework for managing food safety risks.',
    items: ['FSSC 22000 for food manufacturing', 'FSSC 22000 for packaging manufacturing', 'FSSC 22000 for storage and distribution', 'Comprehensive audit and certification services'],
    image: '/F4.png',
    imageAlt: 'FSSC 22000 food safety management',
    btnText: 'Learn More FSSC 22000',
    link: '/food-certification/fssc-22000',
    gridCols: true,
  },
  {
    number: '05',
    tag: 'Food Safety Standard',
    title: 'ISO 22000',
    subtitle: 'Certification',
    description: 'ISO 22000 is an international standard that specifies requirements for a food safety management system. It helps organizations in the food chain ensure food safety.',
    items: ['Food safety management system implementation', 'ISO 22000 certification audits', 'Training and consultancy services', 'Continuous improvement support'],
    image: '/F5.png',
    imageAlt: 'ISO 22000 food safety standard',
    btnText: 'Learn More ISO 22000',
    link: '/food-certification/iso-22000',
    gridCols: true,
  },
  {
    number: '06',
    tag: 'FSSAI Mandated',
    title: 'FoSTaC',
    subtitle: 'Training',
    description: 'Food Safety Training and Certification (FoSTaC) is a training program mandated by FSSAI (Food Safety and Standards Authority of India) for food business operators. We provide comprehensive FoSTaC training programs.',
    items: ['Basic Level FoSTaC training', 'Advanced Level FoSTaC training', 'Specialized training for different food sectors', 'Certification upon successful completion'],
    image: '/F6.png',
    imageAlt: 'FoSTaC food safety training',
    btnText: 'Learn More FoSTaC',
    link: '/food-certification/fostac',
    gridCols: true,
  },
  {
    number: '07',
    tag: 'Water Sustainability',
    title: 'GLOBALGAP',
    subtitle: 'SPRING',
    description: 'GLOBALGAP SPRING (Sustainable Program for Irrigation and Groundwater Use) is a module that addresses sustainable water use in agricultural production. We provide certification services for GLOBALGAP SPRING compliance.',
    items: ['GLOBALGAP SPRING certification', 'Sustainable water management assessment', 'Irrigation system evaluation', 'Groundwater protection verification'],
    image: '/F7.png',
    imageAlt: 'GLOBALGAP SPRING sustainable water management',
    btnText: 'Learn More SPRING',
    link: '/food-certification/globalgap-spring',
    gridCols: true,
  },
  {
    number: '08',
    tag: 'Supply Chain Traceability',
    title: 'GLOBALGAP',
    subtitle: 'Chain of Custody',
    description: 'GLOBALGAP Chain of Custody certification ensures that certified products can be traced through the supply chain from farm to consumer. We provide GLOBALGAP C.O.C. certification services for supply chain operators.',
    items: ['GLOBALGAP C.O.C. certification', 'Supply chain traceability verification', 'Product integrity assurance', 'Chain of custody management'],
    image: '/F8.png',
    imageAlt: 'GLOBALGAP Chain of Custody certification',
    btnText: 'Learn More C.O.C.',
    link: '/food-certification/globalgap-coc',
    gridCols: true,
  },
  {
    number: '09',
    tag: 'Social Practice',
    title: 'GLOBALGAP',
    subtitle: 'GRASP',
    description: 'GLOBALGAP GRASP (GLOBALGAP Risk Assessment on Social Practice) is a voluntary module that assesses social practices in agricultural production. We provide GRASP assessment and certification services.',
    items: ['GLOBALGAP GRASP assessment', 'Social practice evaluation', 'Worker welfare verification', 'Social responsibility compliance'],
    image: '/F9.png',
    imageAlt: 'GLOBALGAP GRASP social practice assessment',
    btnText: 'Learn More GRASP',
    link: '/food-certification/globalgap-grasp',
    gridCols: true,
  },
  {
    number: '10',
    tag: 'Organic Standards',
    title: 'EU Organic',
    subtitle: 'Certification',
    description: 'EU Organic certification ensures that products meet the European Union\'s organic farming standards. We provide EU Organic certification services to help producers access European organic markets.',
    items: ['EU Organic certification', 'Organic farming standards compliance', 'Organic product verification', 'EU market access support'],
    image: '/F10.png',
    imageAlt: 'EU Organic certification for farming',
    btnText: 'Learn More EU Organic',
    link: '/food-certification/eu-organic',
    gridCols: true,
  },
  {
    number: '11',
    tag: 'Retail Standards',
    title: 'Albert Heijn',
    subtitle: 'Certification',
    description: 'Albert Heijn is a leading Dutch supermarket chain with specific quality and safety requirements for suppliers. We provide Albert Heijn certification services to help suppliers meet their standards and access this important market.',
    items: ['Albert Heijn supplier certification', 'Quality standards compliance', 'Food safety verification', 'Supply chain audit services'],
    image: '/F11.png',
    imageAlt: 'Albert Heijn supplier certification',
    btnText: 'Learn More Albert Heijn',
    link: '/food-certification/albert-heijn',
    gridCols: true,
  },
  {
    number: '12',
    tag: 'Biodiversity Module',
    title: 'Biodiversity Add-On',
    subtitle: 'Global G.A.P',
    description: 'The Biodiversity Add-On for GLOBALGAP is a voluntary module that helps farmers assess and improve biodiversity on their farms. We provide certification services for the Biodiversity Add-On compliance.',
    items: ['Biodiversity assessment services', 'Farm biodiversity improvement plans', 'GLOBALGAP Biodiversity certification', 'Environmental impact evaluation'],
    image: '/F12.png',
    imageAlt: 'Biodiversity Add-On Global GAP certification',
    btnText: 'Learn More Biodiversity',
    link: '/food-certification/biodiversity-add-on',
    gridCols: true,
  },
  {
    number: '13',
    tag: 'Retail Add-On',
    title: 'AH DLL Grow Add-On',
    subtitle: 'Global G.A.P',
    description: 'The AH DLL Grow Add-On for GLOBALGAP is a specific module addressing Albert Heijn and DLL requirements for sustainable agricultural growth. We provide certification services for this add-on.',
    items: ['AH DLL Grow Add-On certification', 'Sustainable growth assessment', 'Supplier compliance verification', 'Agricultural quality standards'],
    image: '/F13.png',
    imageAlt: 'AH DLL Grow Add-On Global GAP',
    btnText: 'Learn More AH DLL Grow',
    link: '/food-certification/ah-dll-grow',
    gridCols: true,
  },
  {
    number: '14',
    tag: 'Food Safety Standard',
    title: 'BRC',
    subtitle: 'Certification',
    description: 'BRC (British Retail Consortium) Global Standard for Food Safety is a GFSI-recognized standard for food safety management. We provide BRC certification services to help manufacturers meet global food safety requirements.',
    items: ['BRC food safety certification', 'Comprehensive audit services', 'Gap analysis and preparation', 'Ongoing compliance support'],
    image: '/F14.png',
    imageAlt: 'BRC food safety certification',
    btnText: 'Learn More BRC',
    link: '/food-certification/brc',
    gridCols: true,
  },
  {
    number: '15',
    tag: 'Retail Assurance',
    title: "Tesco Nature's",
    subtitle: 'Choice',
    description: "Tesco Nature's Choice is a quality assurance scheme for fresh produce suppliers to Tesco. We provide certification services to help suppliers meet Tesco's specific quality and safety requirements.",
    items: ["Tesco Nature's Choice certification", 'Fresh produce quality assurance', 'Supplier compliance assessment', 'Environmental management compliance'],
    image: '/F15.png',
    imageAlt: "Tesco Nature's Choice certification",
    btnText: "Learn More Tesco Nature's Choice",
    link: '/food-certification/tesco-natures-choice',
    gridCols: true,
  },
  {
    number: '16',
    tag: 'Non-GMO Verification',
    title: 'Non-GMO',
    subtitle: 'Products',
    description: 'Non-GMO Products certification verifies that products are produced without genetically modified organisms. We provide Non-GMO certification services to help manufacturers meet consumer demand for non-GMO products.',
    items: ['Non-GMO product certification', 'Supply chain verification', 'Testing and analysis services', 'Labeling compliance support'],
    image: '/F16.png',
    imageAlt: 'Non-GMO Products certification',
    btnText: 'Learn More Non-GMO',
    link: '/food-certification/non-gmo-products',
    gridCols: true,
  },
  {
    number: '17',
    tag: 'Feed Safety',
    title: 'Non-GMO',
    subtitle: 'Animal Feed',
    description: 'Non-GMO Animal Feed certification ensures that animal feed products are free from genetically modified ingredients. We provide certification services for animal feed manufacturers and suppliers.',
    items: ['Non-GMO animal feed certification', 'Feed ingredient verification', 'Supply chain traceability', 'Compliance documentation support'],
    image: '/F17.png',
    imageAlt: 'Non-GMO Animal Feed certification',
    btnText: 'Learn More Non-GMO Feed',
    link: '/food-certification/non-gmo-animal-feed',
    gridCols: true,
  },
  {
    number: '18',
    tag: 'Italian Quality Mark',
    title: 'Bollino Blue',
    subtitle: 'Certification',
    description: 'Bollino Blue is an Italian quality certification mark for products meeting specific quality and safety standards. We provide Bollino Blue certification services to help manufacturers access the Italian market.',
    items: ['Bollino Blue certification', 'Quality standards compliance', 'Product safety verification', 'Italian market access support'],
    image: '/F18.png',
    imageAlt: 'Bollino Blue certification',
    btnText: 'Learn More Bollino Blue',
    link: '/food-certification/bollino-blue',
    gridCols: true,
  },
  {
    number: '19',
    tag: 'Hygiene Standards',
    title: 'Good Hygiene',
    subtitle: 'Practices',
    description: 'Good Hygiene Practices (GHP) certification ensures that food businesses maintain proper hygiene standards throughout their operations. We provide GHP assessment and certification services.',
    items: ['GHP assessment and certification', 'Hygiene management systems', 'Staff training and awareness', 'Compliance monitoring support'],
    image: '/F19.png',
    imageAlt: 'Good Hygiene Practices certification',
    btnText: 'Learn More GHP',
    link: '/food-certification/ghp',
    gridCols: true,
  },
]

const serviceOptions = [
  'IFS Certification',
  'GLOBALGAP Certification',
  'HACCP Certification',
  'FSSC 22000 Certification',
  'ISO 22000 Certification',
  'FoSTaC Training',
  'Biodiversity Add-On Global G.A.P',
  'AH DLL Grow Add-On-Global G.A.P',
  'BRC Certification',
  "Tesco Nature's Choice",
  'Non-GMO Products',
  'Non-GMO Animal Feed',
  'Bollino Blue',
  'Good Hygiene Practices',
  'EU Organic Certification',
  'Albert Heijn Certification',
  'Other Food Certification',
]

export default function Food() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    message: '',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Food certification inquiry submitted:', formData)
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', email: '', mobile: '', service: '', message: '' })
  }

  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-white text-gray-200">
      {/* Global Visual Engine */}
      <UniverseBackground />
      <NeuralCanvas />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/F0.png"
            className="w-full h-full object-cover object-top opacity-40"
            alt="Food Certification Services"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block glass-panel px-6 py-2 rounded-full mb-8 border-accent/30">
            <span className="text-[9px] font-tech font-bold text-accent uppercase tracking-[0.5em]">Food Safety Excellence Nodes Active</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 tracking-wide mb-4 leading-none uppercase">
            Food Certification <br />
            <span className="text-accent">Services</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-500 font-tech font-bold uppercase tracking-[0.3em] max-w-4xl mx-auto">
            Ensuring food safety and quality through comprehensive certification programs
          </p>
        </div>
      </section>

      {/* Alternating Certification Blocks */}
      <div className="relative">
        {certifications.map((cert, index) => {
          const isImageLeft = index % 2 === 0
          const hasDarkBg = index % 2 !== 0

          return (
            <section
              key={index}
              className={`py-24 relative z-10 border-b border-gray-100 ${hasDarkBg ? 'bg-navy-light/20' : ''}`}
            >
              <div className={`container mx-auto px-4 sm:px-6 flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="w-full h-[320px] md:h-[480px] rounded-[2.5rem] overflow-hidden border border-gray-200 bg-black/40 relative shadow-[0_0_50px_rgba(91,141,239,0.1)] group">
                    <img
                      src={cert.image}
                      alt={cert.imageAlt}
                      className="w-full h-full object-cover opacity-75 transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 space-y-6 text-left">
                  <div className="space-y-4">
                    <span className="text-accent font-tech font-bold uppercase tracking-[0.4em] text-[10px]">
                      {cert.tag} // {cert.number}
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-display font-black text-gray-800 leading-tight uppercase">
                      {cert.title} <br />
                      <span className="text-accent text-2xl sm:text-4xl font-black uppercase">{cert.subtitle}</span>
                    </h2>
                  </div>
                  <p className="text-gray-500 text-base leading-relaxed font-sans text-left">{cert.description}</p>
                  {cert.gridCols ? (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[10px] font-bold text-gray-800 uppercase font-tech tracking-widest text-left">
                      {cert.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-accent">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="space-y-3 text-[10px] font-bold text-gray-800 uppercase font-tech tracking-widest text-left">
                      {cert.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-accent">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    to={cert.link}
                    className="inline-block mt-8 px-8 py-3 border border-accent/40 rounded-xl font-tech font-bold text-[11px] uppercase tracking-[0.2em] text-white bg-gray-50 backdrop-blur-[10px] hover:bg-accent hover:border-accent hover:shadow-[0_0_20px_rgba(91,141,239,0.4)] hover:-translate-y-[3px] transition-all duration-400"
                  >
                    {cert.btnText}
                  </Link>
                </div>
              </div>
            </section>
          )
        })}

        {/* Registration Hub (Inquiry Form) */}
        <section id="contact" className="py-24 relative z-10 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row rounded-[2rem] sm:rounded-[4.5rem] overflow-hidden shadow-[0_0_120px_rgba(91,141,239,0.25)] border border-gray-200">
              {/* Left: Purple Panel */}
              <div
                className="lg:w-5/12 bg-accent p-10 sm:p-20 flex flex-col justify-between relative overflow-hidden text-left"
                style={{ backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 100%)' }}
              >
                <div className="relative z-10">
                  <span className="text-[10px] font-tech font-black text-gray-800/60 uppercase tracking-[0.5em] mb-4 block leading-none">
                    Initiate Food Safety Matrix
                  </span>
                  <h2 className="text-4xl sm:text-6xl font-display font-black text-gray-800 mb-8 tracking-tighter leading-none uppercase text-left">
                    Quick <br /><span className="text-navy">Inquiry</span>
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed mb-12 max-w-sm font-sans text-left">
                    Our food safety consultants are ready to support your organization's food certification and compliance journey.
                  </p>

                  <div className="space-y-10">
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shadow-lg border border-gray-200 shrink-0">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-navy/70 tracking-widest mb-1 font-tech leading-none font-bold">
                          Bureau headquarters
                        </p>
                        <p className="text-white font-tech font-bold text-xs leading-relaxed uppercase tracking-wider text-left">
                          Eurocert Inspection Services <br />Panchkula, Haryana Hub active
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:w-7/12 bg-white p-10 sm:p-20 relative text-left">
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 text-white px-4 py-4 rounded-xl text-sm outline-none focus:border-accent focus:bg-gray-100 focus:shadow-[0_0_15px_rgba(91,141,239,0.2)] transition"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 text-white px-4 py-4 rounded-xl text-sm outline-none focus:border-accent focus:bg-gray-100 focus:shadow-[0_0_15px_rgba(91,141,239,0.2)] transition"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number *"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 text-white px-4 py-4 rounded-xl text-sm outline-none focus:border-accent focus:bg-gray-100 focus:shadow-[0_0_15px_rgba(91,141,239,0.2)] transition"
                      required
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 text-white px-4 py-4 rounded-xl text-sm outline-none focus:border-accent focus:bg-gray-100 focus:shadow-[0_0_15px_rgba(91,141,239,0.2)] transition appearance-none"
                    >
                      <option value="">Select certification</option>
                      {serviceOptions.map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-white px-4 py-4 rounded-xl text-sm outline-none focus:border-accent focus:bg-gray-100 focus:shadow-[0_0_15px_rgba(91,141,239,0.2)] transition resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-5 bg-accent text-white font-tech font-black uppercase tracking-[0.5em] rounded-2xl hover:bg-accent hover:text-white transition-all duration-700 shadow-2xl"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
