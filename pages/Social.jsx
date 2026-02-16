import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UniverseBackground from '../components/UniverseBackground'
import NeuralCanvas from '../components/NeuralCanvas'

const certifications = [
  {
    number: '01',
    tag: 'Social Accountability',
    title: 'SA 8000',
    subtitle: 'Social Accountability Standard',
    description: 'SA 8000 is an internationally recognized social accountability standard focusing on labor safety, worker welfare, and living wages. It helps organizations demonstrate their commitment to ethical workplace practices.',
    items: ['Compliance with global buyer requirements', 'Build stakeholder trust', 'Promote fair and ethical workplace practices', 'Improve worker conditions and safety', 'Enhance brand reputation'],
    image: '/b1.png',
    imageAlt: 'SA 8000 Social Accountability',
    btnText: 'Learn More SA 8000',
    gridCols: true,
  },
  {
    number: '02',
    tag: 'Ethical Trade',
    title: 'SEDEX / SMETA',
    subtitle: 'Ethical Trade Audits',
    description: 'We help you demonstrate ethical business practices through SEDEX (Supplier Ethical Data Exchange) compliance and SMETA (Sedex Members Ethical Trade Audit) audits. Our audits check for labor standards, health and safety, business ethics, and environmental compliance.',
    items: ['SMETA 2-Pillar audits', 'SMETA 4-Pillar audits', 'SEDEX platform registration support', 'Comprehensive ethical trade assessments', 'Remediation support'],
    image: '/b2.png',
    imageAlt: 'SEDEX SMETA Ethical Audit',
    btnText: 'Learn More SEDEX',
    gridCols: true,
  },
  {
    number: '03',
    tag: 'Compliance Verification',
    title: 'Code of Conduct',
    subtitle: 'Brand & Retailer Audits',
    description: 'Code of Conduct audits verify that suppliers and manufacturers comply with specific ethical standards set by brands and retailers. We conduct comprehensive audits to ensure compliance with various codes of conduct.',
    items: ['Brand-specific code of conduct audits', 'Retailer code compliance verification', 'Labor standards assessment', 'Environmental compliance checks', 'Corrective action planning'],
    image: '/b3.png',
    imageAlt: 'Code of Conduct Audit',
    btnText: 'Learn More CoC',
    gridCols: true,
  },
  {
    number: '04',
    tag: 'Responsible Production',
    title: 'WRAP',
    subtitle: 'Worldwide Responsible Accredited Production',
    description: 'WRAP is an independent, objective, non-profit team of global social compliance experts dedicated to promoting safe, lawful, humane, and ethical manufacturing around the world.',
    items: ['WRAP certification audits', 'Compliance with WRAP principles', 'Labor and human rights verification', 'Environmental compliance'],
    image: '/b4.png',
    imageAlt: 'WRAP Certification',
    btnText: 'Learn More WRAP',
    gridCols: false,
  },
  {
    number: '05',
    tag: 'Maritime Labor',
    title: 'MLC',
    subtitle: 'Marine Labour Convention',
    description: 'The Maritime Labour Convention (MLC) sets minimum standards for working and living conditions for seafarers. We provide MLC certification services to ensure compliance with international maritime labor standards.',
    items: ['MLC compliance audits', 'Seafarer rights verification', 'Working conditions assessment', 'Certification support'],
    image: '/b5.png',
    imageAlt: 'MLC Maritime Labour',
    btnText: 'Learn More MLC',
    gridCols: false,
  },
  {
    number: '06',
    tag: 'Social Convergence',
    title: 'SLCP',
    subtitle: 'Social & Labor Convergence Project',
    description: 'The Social & Labor Convergence Project (SLCP) is an initiative that aims to reduce audit fatigue and improve working conditions by creating a converged assessment framework. We provide SLCP verification services to help organizations streamline their social compliance assessments.',
    items: ['SLCP assessment and verification', 'Converged assessment framework implementation', 'Data sharing and transparency support', 'Reduction of audit duplication'],
    image: '/b6.png',
    imageAlt: 'SLCP Assessment',
    btnText: 'Learn More SLCP',
    gridCols: false,
  },
  {
    number: '07',
    tag: 'Jewellery Ethics',
    title: 'RJC',
    subtitle: 'Responsible Jewellery Council',
    description: 'The Responsible Jewellery Council (RJC) is an international not-for-profit standards and certification organization. RJC certification demonstrates commitment to responsible business practices in the jewelry supply chain.',
    items: ['RJC Code of Practices certification', 'Chain of Custody certification', 'Responsible sourcing verification', 'Supply chain transparency'],
    image: '/b7.png',
    imageAlt: 'RJC Responsible Jewellery',
    btnText: 'Learn More RJC',
    gridCols: false,
  },
  {
    number: '08',
    tag: 'Mineral Sourcing',
    title: 'RMI',
    subtitle: 'Responsible Minerals Initiative',
    description: 'The Responsible Minerals Initiative (RMI) provides tools and resources for companies to make informed choices about responsible sourcing of minerals. We provide RMI audit and assessment services to help organizations ensure responsible mineral sourcing.',
    items: ['RMI audit and assessment', 'Responsible mineral sourcing verification', 'Supply chain due diligence', 'Conflict-free sourcing certification'],
    image: '/b8.png',
    imageAlt: 'RMI Responsible Minerals',
    btnText: 'Learn More RMI',
    gridCols: false,
  },
  {
    number: '09',
    tag: 'Supply Chain Security',
    title: 'C-TPAT',
    subtitle: 'Customs-Trade Partnership Against Terrorism',
    description: 'C-TPAT is a voluntary supply chain security program led by U.S. Customs and Border Protection. We provide C-TPAT validation and certification services to help organizations enhance their supply chain security and facilitate faster customs clearance.',
    items: ['C-TPAT validation and certification', 'Supply chain security assessment', 'Security best practices implementation', 'Customs clearance facilitation'],
    image: '/b9.png',
    imageAlt: 'C-TPAT Supply Chain Security',
    btnText: 'Learn More C-TPAT',
    gridCols: false,
  },
  {
    number: '10',
    tag: 'Supply Chain Safety',
    title: 'ISO 28000',
    subtitle: 'Safety in the Supply Chain',
    description: 'ISO 28000 is an international standard for security management systems in the supply chain. It helps organizations establish, implement, maintain, and improve security management systems to protect supply chain operations.',
    items: ['ISO 28000 certification', 'Supply chain security management', 'Risk assessment and mitigation', 'Security system implementation'],
    image: '/b10.png',
    imageAlt: 'ISO 28000 Supply Chain',
    btnText: 'Learn More ISO 28000',
    gridCols: false,
  },
  {
    number: '11',
    tag: 'Social Responsibility',
    title: 'ISO 26000',
    subtitle: 'Social Accountability',
    description: 'ISO 26000 provides guidance on social responsibility. It helps organizations understand and implement social responsibility practices, contributing to sustainable development and stakeholder trust.',
    items: ['ISO 26000 guidance implementation', 'Social responsibility assessment', 'Sustainable development practices', 'Stakeholder engagement support'],
    image: '/b11.png',
    imageAlt: 'ISO 26000 Social Responsibility',
    btnText: 'Learn More ISO 26000',
    gridCols: false,
  },
  {
    number: '12',
    tag: 'Anti-Bribery',
    title: 'ISO 37001',
    subtitle: 'Anti-Bribery Management Systems',
    description: 'ISO 37001 specifies requirements and provides guidance for establishing, implementing, maintaining, reviewing, and improving an anti-bribery management system. It helps organizations prevent, detect, and respond to bribery.',
    items: ['ISO 37001 certification', 'Anti-bribery management system implementation', 'Bribery risk assessment', 'Compliance verification'],
    image: '/b12.png',
    imageAlt: 'ISO 37001 Anti-Bribery',
    btnText: 'Learn More ISO 37001',
    gridCols: false,
  },
]

const serviceOptions = [
  'SA 8000 - Social Accountability',
  'SEDEX / SMETA - Ethical Trade',
  'Code of Conduct Audits',
  'WRAP Certification',
  'MLC - Marine Labour',
  'SLCP Assessment',
  'RJC Certification',
  'RMI Assessment',
  'C-TPAT Validation',
  'ISO 28000 - Supply Chain',
  'ISO 26000 - Social Responsibility',
  'ISO 37001 - Anti-Bribery',
]

export default function Social() {
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
    console.log('Social audit inquiry submitted:', formData)
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
            src="/b0.png"
            className="w-full h-full object-cover opacity-40"
            alt="Social & Ethical Audits"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block glass-panel px-6 py-2 rounded-full mb-8 border-accent/30">
            <span className="text-[9px] font-tech font-bold text-accent uppercase tracking-[0.5em]">Demonstrating ethical business practices through comprehensive audits</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 tracking-wide mb-4 leading-none uppercase">
            Social & Ethical <br />
            <span className="text-accent">Audits</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-500 font-tech font-bold uppercase tracking-[0.3em] max-w-4xl mx-auto">
            Comprehensive social accountability audits and ethical compliance certifications
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
                    Initiate Social Audit
                  </span>
                  <h2 className="text-4xl sm:text-6xl font-display font-black text-gray-800 mb-8 tracking-tighter leading-none uppercase text-left">
                    Quick <br /><span className="text-navy">Inquiry</span>
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed mb-12 max-w-sm font-sans text-left">
                    Our social compliance experts are ready to support your organization's ethical business practices and global compliance mission.
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
                          Eurocert Inspection Services <br />Panchkula, Haryana, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shadow-lg border border-gray-200 shrink-0">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-navy/70 tracking-widest mb-1 font-tech leading-none font-bold">
                          Contact
                        </p>
                        <p className="text-white font-tech font-bold text-xs leading-relaxed uppercase tracking-wider text-left">
                          +91 7009007527
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
                      <option value="">Select audit type</option>
                      {serviceOptions.map((option, i) => (
                        <option key={i} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell us about your social compliance needs..."
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
