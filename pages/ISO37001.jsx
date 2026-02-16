import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UniverseBackground from '../components/UniverseBackground'
import NeuralCanvas from '../components/NeuralCanvas'

const services = [
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'ISO 37001 Certification',
    description: 'Complete ISO 37001 certification services covering all requirements for establishing, implementing, and maintaining an anti-bribery management system within your organization.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Anti-Bribery Management System Implementation',
    description: 'Expert guidance on designing and implementing an anti-bribery management system tailored to your organization\'s size, structure, risk profile, and operational context.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
    ),
    title: 'Bribery Risk Assessment',
    description: 'Systematic identification, analysis, and evaluation of bribery risks across your organization, including third-party relationships, transactions, and operational activities.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
      </svg>
    ),
    title: 'Compliance Verification',
    description: 'Independent verification of your anti-bribery controls, policies, and procedures to ensure they effectively prevent, detect, and respond to bribery within your operations.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    title: 'Training & Awareness Programs',
    description: 'Comprehensive anti-bribery training programs for leadership, management, and employees covering policies, procedures, red flags, reporting mechanisms, and ethical conduct.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </svg>
    ),
    title: 'Ongoing Compliance Support',
    description: 'Continuous support to maintain ISO 37001 compliance including surveillance audit preparation, management review facilitation, and ongoing anti-bribery improvement guidance.'
  }
]

const benefits = [
  { title: 'Bribery Prevention', desc: 'Establish robust systems and controls to prevent bribery within your organization and across your business relationships.' },
  { title: 'Risk Mitigation', desc: 'Systematically identify and reduce bribery risks through structured risk assessment and targeted mitigation measures.' },
  { title: 'Legal Compliance', desc: 'Meet anti-bribery legal requirements including the UK Bribery Act, US FCPA, and other international anti-corruption laws.' },
  { title: 'Reputation Protection', desc: 'Protect your organization\'s reputation by demonstrating a proactive commitment to ethical business practices.' },
  { title: 'Stakeholder Confidence', desc: 'Build confidence with stakeholders, investors, and partners through independently certified anti-bribery management.' }
]

const relatedServices = [
  { title: 'ISO 26000', subtitle: 'Social Accountability', image: '/b11.png', link: '/social/iso-26000' },
  { title: 'ISO 9001', subtitle: 'Quality Management', image: '/m2.png', link: '/management-system/iso-9001' },
  { title: 'SA 8000', subtitle: 'Social accountability', image: '/b1.png', link: '/social/sa-8000' }
]

const CheckIcon = () => (
  <svg className="w-6 h-6 text-accent drop-shadow-[0_0_5px_rgba(0,123,167,0.5)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function ISO37001() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: 'ISO 37001 Certification',
    message: ''
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', email: '', mobile: '', service: 'ISO 37001 Certification', message: '' })
  }

  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-white">
      <UniverseBackground />
      <NeuralCanvas />
      <Header />

      {/* Page Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/b12.png" className="w-full h-full object-cover opacity-20 scale-105" alt="ISO 37001 Anti-Bribery" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#f0f5fa]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block glass-panel px-6 py-2 rounded-full mb-8 border-accent/30">
            <span className="text-[9px] font-tech font-bold text-accent uppercase tracking-[0.5em]">Anti-bribery management system to prevent, detect, and respond to bribery</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 tracking-wide mb-4 leading-none uppercase hero-text-shadow">
            ISO 37001 <br/><span className="text-accent">Anti-Bribery</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-500 font-tech font-bold uppercase tracking-[0.3em]">
            Anti-Bribery Management Systems
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-accent font-tech font-bold uppercase tracking-[0.4em] text-xs">Standard Overview</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-gray-800 leading-tight uppercase tracking-tighter">
                ISO 37001 <br/><span className="text-accent">Certification</span>
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed font-sans max-w-xl">
              ISO 37001 specifies requirements and provides guidance for establishing, implementing, maintaining, reviewing, and improving an anti-bribery management system. It helps organizations prevent, detect, and respond to bribery.
            </p>
            <div className="glass-panel p-8 sm:p-10 rounded-[2rem] border-l-4 border-accent">
              <h4 className="text-gray-800 font-display font-bold uppercase tracking-widest text-lg mb-4">What is ISO 37001?</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                ISO 37001 is an international standard that specifies requirements and provides guidance for establishing, implementing, maintaining, reviewing, and improving an anti-bribery management system. It can be used by any organization, large or small, whether in the public, private, or not-for-profit sector.
              </p>
            </div>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 h-[400px] sm:h-[500px]">
            <img src="/b12.png" className="w-full h-full object-cover opacity-80" alt="ISO 37001 Anti-Bribery" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 relative z-10 bg-navy-light/20 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 uppercase tracking-widest leading-none">
              Our ISO 37001 <span className="text-accent">Services</span>
            </h2>
            <p className="text-gray-500 mt-6 font-tech uppercase tracking-[0.3em]">Comprehensive Anti-Bribery Management Solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-panel p-8 sm:p-10 rounded-[2rem] group hover:bg-white/[0.08] hover:border-accent hover:shadow-[0_0_40px_rgba(91,141,239,0.3)] hover:-translate-y-2 transition-all duration-400">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-8 border border-accent/30 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-gray-800 mb-4 uppercase">{service.title}</h4>
                <p className="text-sm text-gray-500 font-sans leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Why Choose Us */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-12">
            <h3 className="text-3xl font-display font-black text-gray-800 uppercase tracking-widest border-l-4 border-accent pl-6">Benefits of ISO 37001</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-6 group">
                  <CheckIcon />
                  <div>
                    <h5 className="text-white font-bold uppercase text-sm tracking-wide">{benefit.title}</h5>
                    <p className="text-xs text-gray-500 mt-1">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel p-10 sm:p-12 rounded-[3rem] border border-accent/20 flex flex-col justify-center text-center sm:text-left">
            <h3 className="text-3xl font-display font-black text-gray-800 uppercase tracking-widest mb-8 leading-tight">
              Why <br className="hidden sm:block"/>Eurocert Asia?
            </h3>
            <p className="text-gray-500 text-lg leading-relaxed font-sans mb-10">
              Our experienced auditors understand ISO 37001 requirements and can guide you through the certification process. We work with you to ensure successful certification and ongoing compliance.
            </p>
            <div className="space-y-4">
              <div className="bg-primary/20 p-6 rounded-2xl border border-gray-100">
                <span className="text-accent font-black text-4xl block mb-2 leading-none">25+</span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-[0.3em]">Years of Industrial Intelligence</span>
              </div>
              <div className="bg-primary/20 p-6 rounded-2xl border border-gray-100">
                <span className="text-accent font-black text-4xl block mb-2 leading-none">100%</span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-[0.3em]">Certification Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 relative z-10 border-t border-gray-100 bg-navy-light/40">
        <div className="container mx-auto px-4 sm:px-6 mb-16 text-center lg:text-left">
          <h2 className="text-4xl font-display font-black text-gray-800 uppercase tracking-widest">
            Related <span className="text-accent">Services</span>
          </h2>
        </div>
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <Link key={index} to={service.link} className="group relative h-[380px] rounded-3xl overflow-hidden border border-gray-200 glass-panel">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${service.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent z-10"></div>
              <div className="absolute bottom-8 left-6 right-6 z-20">
                <h4 className="text-gray-800 text-xs sm:text-sm font-display font-bold uppercase tracking-widest mb-4">{service.title}</h4>
                <span className="text-[9px] font-black uppercase text-accent group-hover:text-white transition tracking-[0.2em]">{service.subtitle}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Inquiry Form */}
      <section id="contact" className="py-16 md:py-24 relative z-10 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(91,141,239,0.2)] border border-gray-100">
            <div className="lg:w-5/12 bg-accent p-10 sm:p-16 flex flex-col justify-between" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)' }}>
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-gray-800 mb-6 tracking-tighter leading-none uppercase">
                  Quick <br/>Inquiry
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-sm">
                  Start your ISO 37001 certification journey. Our anti-bribery management experts are ready to assist you.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-gray-200 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Base coordinates</p>
                      <p className="text-white font-tech font-bold text-sm uppercase">Panchkula, Haryana, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-gray-200 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Signal channel</p>
                      <p className="text-white font-tech font-bold text-sm">+91 7009007527</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-12">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-xs text-white hover:bg-gray-200 transition">In</a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-xs text-white hover:bg-gray-200 transition">Tw</a>
              </div>
            </div>
            <div className="lg:w-7/12 bg-white p-10 sm:p-16 relative">
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent/50 focus:bg-gray-100 transition" />
                  <input type="email" name="email" placeholder="Your Email *" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent/50 focus:bg-gray-100 transition" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="tel" name="mobile" placeholder="Mobile Number *" value={formData.mobile} onChange={handleChange} required className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent/50 focus:bg-gray-100 transition" />
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 text-sm focus:outline-none focus:border-accent/50 focus:bg-gray-100 transition appearance-none">
                    <option value="ISO 37001 Certification">ISO 37001 Certification</option>
                    <option value="ISO 26000">ISO 26000 Social Accountability</option>
                    <option value="ISO 9001">ISO 9001 Quality Management</option>
                    <option value="SA 8000">SA 8000 Certification</option>
                    <option value="Other">Other Certification</option>
                  </select>
                </div>
                <textarea name="message" rows={4} placeholder="Your Message *" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent/50 focus:bg-gray-100 transition resize-none" />
                <button type="submit" className="w-full py-5 bg-accent text-white font-tech font-black uppercase tracking-[0.5em] rounded-xl hover:bg-accent hover:text-white transition-all duration-500 shadow-2xl">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
