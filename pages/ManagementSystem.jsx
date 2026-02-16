import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UniverseBackground from '../components/UniverseBackground'
import NeuralCanvas from '../components/NeuralCanvas'

const certifications = [
  {
    number: '01',
    tag: 'Quality Matrix',
    title: 'ISO 9001',
    subtitle: 'Quality Management System',
    description: 'The international standard for quality management systems. It helps organizations consistently provide products and services that meet customer and regulatory requirements.',
    items: ['System implementation', 'Certification audits', 'Improvement support', 'Satisfaction enhancement'],
    image: '/m2.png',
    imageAlt: 'ISO 9001 Quality',
    btnText: 'Learn More Intelligence',
    gridCols: true,
  },
  {
    number: '02',
    tag: 'Eco Node',
    title: 'ISO 14001',
    subtitle: 'Environmental System',
    description: 'Specifies requirements for an environmental management system, helping organizations improve performance and fulfill compliance obligations node.',
    items: ['Environmental implementation', 'ISO 14001 certification', 'Environmental impact assessment', 'Sustainability enhancement'],
    image: '/m3.png',
    imageAlt: 'ISO 14001 Environment',
    btnText: 'Learn More Eco-Node',
    gridCols: false,
  },
  {
    number: '03',
    tag: 'Workplace Security',
    title: 'ISO 45001',
    subtitle: 'Health & Safety',
    description: 'International standard for occupational health and safety. It helps organizations provide safe workplaces and prevent work-related injury.',
    items: ['OH&S system implementation', 'ISO 45001 certification', 'Workplace safety assessment', 'Risk management support'],
    image: '/m4.png',
    imageAlt: 'ISO 45001 Health Safety',
    btnText: 'Learn More Safety-Matrix',
    gridCols: true,
  },
  {
    number: '04',
    tag: 'Data Integrity',
    title: 'ISO 27001',
    subtitle: 'Information Security',
    description: 'Manage the security of assets such as financial information, intellectual property, employee details, or data entrusted by third party technical nodes.',
    items: ['ISMS implementation matrix', 'ISO 27001 certification', 'Security risk assessment', 'Data protection compliance'],
    image: '/m5.png',
    imageAlt: 'ISO 27001 ISMS',
    btnText: 'Learn More ISMS',
    gridCols: false,
  },
  {
    number: '05',
    tag: 'Energy Matrix',
    title: 'ISO 50001',
    subtitle: 'Energy Management',
    description: 'Framework for organizations to develop a policy for more efficient energy use, fix targets, and use technical data for decisions nodes.',
    items: ['System implementation', 'Target setting & objectives', 'Efficiency assessment', 'Measured results link'],
    image: '/m6.png',
    imageAlt: 'ISO 50001 Energy',
    btnText: 'Learn More EnMS',
    gridCols: true,
  },
  {
    number: '06',
    tag: 'Fusion Quality',
    title: 'ISO 3834',
    subtitle: 'Fusion Welding Quality',
    description: 'Quality requirements for fusion welding of metallic materials, ensuring the technical integrity of industrial products and welding operations node.',
    items: ['Welding management system', 'Certification link', 'Process assessment protocol', 'Welded product QA'],
    image: '/m7.png',
    imageAlt: 'ISO 3834 Welding',
    btnText: 'Learn More Fusion',
    gridCols: false,
  },
  {
    number: '07',
    tag: 'Private Security Node',
    title: 'ISO 18788',
    subtitle: 'Security Operations',
    description: 'Specifies requirements for a security operations management system for private security nodes, ensuring responsible technical excellence protocols.',
    items: ['Security operations management', 'ISO 18788 certification node', 'Security risk management', 'Technical operational excellence'],
    image: '/m8.png',
    imageAlt: 'ISO 18788 Security',
    btnText: 'Learn More Security Ops',
    gridCols: true,
  },
  {
    number: '08',
    tag: 'GMP Infrastructure',
    title: 'ISO 22716',
    subtitle: 'Cosmetics GMP',
    description: 'Guidelines for the production, control, storage, and shipment of cosmetic products ensuring quality and safety throughout the supply chain.',
    items: ['Cosmetic GMP technical implementation', 'ISO 22716 certification link', 'Product quality assurance hub', 'Regulatory compliance matrix'],
    image: '/m9.png',
    imageAlt: 'ISO 22716 Cosmetics',
    btnText: 'Learn More GMP',
    gridCols: false,
  },
  {
    number: '09',
    tag: 'Resilience Matrix',
    title: 'ISO 22301',
    subtitle: 'Business Continuity',
    description: 'Implementing and maintaining protocols to prepare for, respond to, and recover from disruptive organizational incidents link.',
    items: ['Continuity management system', 'ISO 22301 certification node', 'Disaster recovery planning', 'Resilience enhancement node'],
    image: '/m10.png',
    imageAlt: 'ISO 22301 Business',
    btnText: 'Learn More Resilience',
    gridCols: true,
  },
  {
    number: '10',
    tag: 'Asset Hub',
    title: 'ISO 55001',
    subtitle: 'Asset Management',
    description: 'Manage technical assets effectively across lifecycles to achieve technical organizational objectives and value optimization matrix node.',
    items: ['Asset management implementation', 'ISO 55001 certification node', 'Asset lifecycle management', 'Value optimization protocol'],
    image: '/m11.png',
    imageAlt: 'ISO 55001 Assets',
    btnText: 'Learn More Assets',
    gridCols: false,
  },
  {
    number: '11',
    tag: 'Traffic Intelligence',
    title: 'ISO 39001',
    subtitle: 'Road Traffic Safety',
    description: 'Reducing deaths and serious injuries related to road traffic crashes through technical performance improvement and risk reduction strategies node.',
    items: ['Road traffic safety management', 'ISO 39001 certification link', 'Safety performance improvement', 'Risk reduction strategies node'],
    image: '/m12.png',
    imageAlt: 'ISO 39001 Road',
    btnText: 'Learn More Traffic Safety',
    gridCols: true,
  },
  {
    number: '12',
    tag: 'IT Service Hub',
    title: 'ISO 20000',
    subtitle: 'IT Service Management',
    description: 'The international standard for IT service management. It helps organizations establish, implement, and maintain a technical IT service management system node.',
    items: ['IT service management system', 'ISO 20000 certification node', 'Service delivery optimization', 'ITIL alignment protocol'],
    image: '/m13.png',
    imageAlt: 'ISO 20000 IT',
    btnText: 'Learn More ITSM',
    gridCols: false,
  },
  {
    number: '13',
    tag: 'Cloud Protocol',
    title: 'ISO 27017',
    subtitle: 'Cloud Security Control',
    description: 'Providing guidelines for information security controls applicable to the provision and use of cloud services. Securing cloud-based information systems nodes.',
    items: ['Cloud security management hub', 'ISO 27017 certification matrix', 'Cloud service security assessment'],
    image: '/m14.png',
    imageAlt: 'Cloud Security',
    btnText: 'Learn More Cloud-Sec',
    gridCols: false,
  },
  {
    number: '14',
    tag: 'PII Protection',
    title: 'ISO 27018',
    subtitle: 'Cloud Security Management',
    description: 'Establishing measures to protect personally identifiable information (PII) within public cloud computing environment protocols node.',
    items: ['Cloud privacy protection node', 'ISO 27018 certification link', 'PII protection in cloud hubs'],
    image: '/m15.png',
    imageAlt: 'Cloud Privacy',
    btnText: 'Learn More Cloud-Privacy',
    gridCols: false,
  },
  {
    number: '15',
    tag: 'Privacy Regulation',
    title: 'BS 10012',
    subtitle: 'Data Protection',
    description: 'Personal information management system to comply with global technical data protection regulations and privacy management nodes.',
    items: ['Personal info management system', 'BS 10012 certification node', 'Data protection compliance matrix'],
    image: '/m16.png',
    imageAlt: 'Data Protection',
    btnText: 'Learn More Privacy Hub',
    gridCols: false,
  },
  {
    number: '16',
    tag: 'Translation Protocol',
    title: 'EN 15038',
    subtitle: 'Translation Services',
    description: 'Quality and consistency requirements for translation service providers ensuring technical process standardization nodes.',
    items: ['Translation quality management', 'EN 15038 certification node', 'Process standardization matrix'],
    image: '/m17.png',
    imageAlt: 'Translation Hub',
    btnText: 'Learn More Translation',
    gridCols: false,
  },
  {
    number: '17',
    tag: 'Healthcare Node',
    title: 'EN 15224',
    subtitle: 'Healthcare Quality',
    description: 'Quality management systems for healthcare providers ensuring patient safety and effective care delivery nodes.',
    items: ['Healthcare quality management', 'EN 15224 certification link', 'Patient safety enhancement', 'Technical service quality'],
    image: '/m18.png',
    imageAlt: 'Healthcare Systems',
    btnText: 'Learn More Healthcare',
    gridCols: true,
  },
]

const serviceOptions = [
  'ISO 9001 - Quality',
  'ISO 14001 - Environmental',
  'ISO 45001 - Health & Safety',
  'ISO 27001 - Info Security',
  'Specialized ISO node',
]

export default function ManagementSystem() {
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
    console.log('Management System inquiry submitted:', formData)
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
            src="/m1.png"
            className="w-full h-full object-contain opacity-40"
            alt="Management System Certifications"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block glass-panel px-6 py-2 rounded-full mb-8 border-accent/30">
            <span className="text-[9px] font-tech font-bold text-accent uppercase tracking-[0.5em]">Performance Excellence Nodes Active</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 tracking-wide mb-4 leading-none uppercase">
            Management System <br />
            <span className="text-accent">Certifications</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-500 font-tech font-bold uppercase tracking-[0.3em] max-w-4xl mx-auto">
            Comprehensive management system certifications to enhance organizational performance and compliance
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
                  <a
                    href="#contact"
                    className="inline-block mt-8 px-8 py-3 border border-accent/40 rounded-xl font-tech font-bold text-[11px] uppercase tracking-[0.2em] text-white bg-gray-50 backdrop-blur-[10px] hover:bg-accent hover:border-accent hover:shadow-[0_0_20px_rgba(91,141,239,0.4)] hover:-translate-y-[3px] transition-all duration-400"
                  >
                    {cert.btnText}
                  </a>
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
                    Initiate Certification Matrix
                  </span>
                  <h2 className="text-4xl sm:text-6xl font-display font-black text-gray-800 mb-8 tracking-tighter leading-none uppercase text-left">
                    Quick <br /><span className="text-navy">Inquiry</span>
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed mb-12 max-w-sm font-sans text-left">
                    Our technical bureau consultants are ready to support your organization's global compliance mission.
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
                      placeholder="Identity Name *"
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
                      placeholder="Mobile Number node *"
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
                      <option value="">Select standard sector</option>
                      {serviceOptions.map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Certification mission objective summary protocol..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-white px-4 py-4 rounded-xl text-sm outline-none focus:border-accent focus:bg-gray-100 focus:shadow-[0_0_15px_rgba(91,141,239,0.2)] transition resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-5 bg-accent text-white font-tech font-black uppercase tracking-[0.5em] rounded-2xl hover:bg-accent hover:text-white transition-all duration-700 shadow-2xl"
                  >
                    Send Inquiry Transmission
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
