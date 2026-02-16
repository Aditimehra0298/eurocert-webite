import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UniverseBackground from '../components/UniverseBackground'
import NeuralCanvas from '../components/NeuralCanvas'

const certifications = [
  {
    number: '01',
    tag: 'Carbon Intelligence',
    title: 'ISO 14064',
    subtitle: 'Carbon Footprint Assessment',
    description: 'ISO 14064 provides a framework for quantifying, monitoring, reporting, and verifying greenhouse gas emissions. We help organizations measure and reduce their carbon footprint through comprehensive assessments.',
    items: ['Greenhouse gas inventory development', 'Carbon footprint calculation', 'ISO 14064 certification', 'Emission reduction strategies', 'Verification and validation services'],
    image: '/s2.png',
    imageAlt: 'Wind turbines and solar panels representing sustainable energy and reduced emissions',
    btnText: 'Learn More Carbon',
    gridCols: true,
  },
  {
    number: '02',
    tag: 'GHG Protocol',
    title: 'ISO 14064',
    subtitle: 'GHG Accounting & Verification',
    description: 'ISO 14064 is an international standard for greenhouse gas accounting and verification. It helps organizations quantify, monitor, and report their greenhouse gas emissions and removals.',
    items: ['ISO 14064-1: Organization-level GHG inventory', 'ISO 14064-2: Project-level GHG quantification', 'ISO 14064-3: Verification and validation', 'Comprehensive GHG management'],
    image: '/s3.png',
    imageAlt: 'ISO 14064 Certification',
    btnText: 'Learn More GHG',
    gridCols: false,
  },
  {
    number: '03',
    tag: 'Eco Certification Hub',
    title: 'Sustainability',
    subtitle: 'Certifications Overview',
    description: 'We provide comprehensive sustainability certification services to help organizations demonstrate their commitment to environmental responsibility and sustainable business practices.',
    items: ['Environmental management systems', 'Sustainable supply chain certification', 'Renewable energy certifications', 'Waste management certifications', 'Water management certifications'],
    image: '/h4.png',
    imageAlt: 'Sustainability Certifications',
    btnText: 'Learn More Sustainability',
    gridCols: true,
  },
]

const serviceOptions = [
  'ISO 14064 - Carbon Footprint',
  'ISO 14001 - Environmental',
  'ISO 50001 - Energy Management',
  'Sustainability Certification',
  'Other Sustainability Service',
]

export default function Sustainability() {
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
    console.log('Sustainability inquiry submitted:', formData)
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
            src="/h0.png"
            className="w-full h-full object-cover object-top opacity-40"
            alt="Sustainability Certifications"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block glass-panel px-6 py-2 rounded-full mb-8 border-accent/30">
            <span className="text-[9px] font-tech font-bold text-accent uppercase tracking-[0.5em]">Environmental Excellence Nodes Active</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 tracking-wide mb-4 leading-none uppercase">
            Sustainability <br />
            <span className="text-accent">Certifications</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-500 font-tech font-bold uppercase tracking-[0.3em] max-w-4xl mx-auto">
            Promoting sustainable business practices through comprehensive environmental certifications
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
                    Initiate Sustainability Matrix
                  </span>
                  <h2 className="text-4xl sm:text-6xl font-display font-black text-gray-800 mb-8 tracking-tighter leading-none uppercase text-left">
                    Quick <br /><span className="text-navy">Inquiry</span>
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed mb-12 max-w-sm font-sans text-left">
                    Our sustainability consultants are ready to support your organization's environmental compliance and green certification journey.
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
                      <option value="">Select service</option>
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
