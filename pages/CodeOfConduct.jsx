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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
      </svg>
    ),
    title: 'Brand-Specific Code of Conduct Audits',
    description: 'Comprehensive audits tailored to individual brand codes of conduct, ensuring your facilities meet the specific ethical, social, and environmental standards required by each buyer.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'Retailer Code Compliance Verification',
    description: 'Independent verification of compliance with retailer-specific codes covering labor practices, workplace safety, environmental standards, and ethical business conduct requirements.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    ),
    title: 'Labor Standards Assessment',
    description: 'Thorough evaluation of labor practices including working hours, wages, freedom of association, child labor prevention, forced labor elimination, and non-discrimination policies.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Environmental Compliance Checks',
    description: 'Assessment of environmental practices including waste management, chemical handling, emissions control, water usage, and overall environmental management system effectiveness.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
      </svg>
    ),
    title: 'Corrective Action Planning',
    description: 'Development of detailed corrective action plans (CAPs) addressing non-conformances identified during audits, with clear timelines, responsibilities, and measurable improvement targets.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </svg>
    ),
    title: 'Follow-Up Audit Services',
    description: 'Scheduled follow-up audits to verify implementation of corrective actions, track continuous improvement, and ensure sustained compliance with code of conduct requirements.'
  }
]

const benefits = [
  { title: 'Meet Buyer Requirements', desc: 'Comply with brand and retailer code of conduct requirements to maintain and grow business relationships.' },
  { title: 'Maintain Business Relationships', desc: 'Keep strong relationships with buyers by demonstrating ongoing commitment to ethical compliance.' },
  { title: 'Improve Working Conditions', desc: 'Enhance workplace conditions for employees, leading to better productivity and lower turnover.' },
  { title: 'Risk Mitigation', desc: 'Reduce compliance risks and protect your business from reputational damage and legal issues.' },
  { title: 'Market Access', desc: 'Access markets and buyers that require verified code of conduct compliance from their supply chain.' }
]

const relatedServices = [
  { title: 'SA 8000', subtitle: 'Social accountability', image: '/b1.png', link: '/social/sa-8000' },
  { title: 'SEDEX / SMETA', subtitle: 'Ethical trade audits', image: '/b2.png', link: '/social' },
  { title: 'WRAP', subtitle: 'Worldwide Responsible Production', image: '/b4.png', link: '/social' }
]

const CheckIcon = () => (
  <svg className="w-6 h-6 text-accent drop-shadow-[0_0_5px_rgba(0,123,167,0.5)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function CodeOfConduct() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: 'Code of Conduct Audits',
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
    setFormData({ name: '', email: '', mobile: '', service: 'Code of Conduct Audits', message: '' })
  }

  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-white">
      <UniverseBackground />
      <NeuralCanvas />
      <Header />

      {/* Page Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/b3.png" className="w-full h-full object-cover opacity-20 scale-105" alt="Code of Conduct Audits" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#f0f5fa]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block glass-panel px-6 py-2 rounded-full mb-8 border-accent/30">
            <span className="text-[9px] font-tech font-bold text-accent uppercase tracking-[0.5em]">Brand and retailer specific code compliance verification</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 tracking-wide mb-4 leading-none uppercase hero-text-shadow">
            Code of Conduct <br/><span className="text-accent">Audits</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-500 font-tech font-bold uppercase tracking-[0.3em]">
            Ethical Compliance Verification
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-accent font-tech font-bold uppercase tracking-[0.4em] text-xs">Audit Overview</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-gray-800 leading-tight uppercase tracking-tighter">
                Code of Conduct <br/><span className="text-accent">Audits</span>
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed font-sans max-w-xl">
              Code of Conduct audits verify that suppliers and manufacturers comply with specific ethical standards set by brands and retailers. We conduct comprehensive audits to ensure compliance with various codes of conduct.
            </p>
            <div className="glass-panel p-8 sm:p-10 rounded-[2rem] border-l-4 border-accent">
              <h4 className="text-gray-800 font-display font-bold uppercase tracking-widest text-lg mb-4">What are Code of Conduct Audits?</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Code of Conduct audits are assessments that verify compliance with specific ethical standards set by brands and retailers. These audits typically cover labor standards, health and safety, environmental compliance, and business ethics.
              </p>
            </div>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 h-[400px] sm:h-[500px]">
            <img src="/b3.png" className="w-full h-full object-cover opacity-80" alt="Code of Conduct Audits" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 relative z-10 bg-navy-light/20 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 uppercase tracking-widest leading-none">
              Our Audit <span className="text-accent">Services</span>
            </h2>
            <p className="text-gray-500 mt-6 font-tech uppercase tracking-[0.3em]">Comprehensive Code of Conduct Verification</p>
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
            <h3 className="text-3xl font-display font-black text-gray-800 uppercase tracking-widest border-l-4 border-accent pl-6">Benefits of Code of Conduct Compliance</h3>
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
              Our experienced auditors understand various code of conduct requirements and can conduct comprehensive audits. We work with you to ensure compliance and help you address any non-conformances.
            </p>
            <div className="space-y-4">
              <div className="bg-primary/20 p-6 rounded-2xl border border-gray-100">
                <span className="text-accent font-black text-4xl block mb-2 leading-none">25+</span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-[0.3em]">Years of Industrial Intelligence</span>
              </div>
              <div className="bg-primary/20 p-6 rounded-2xl border border-gray-100">
                <span className="text-accent font-black text-4xl block mb-2 leading-none">100%</span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-[0.3em]">Audit Success Rate</span>
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
                  Start your Code of Conduct audit process. Our social compliance experts are ready to assist you.
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
                    <option value="Code of Conduct Audits">Code of Conduct Audits</option>
                    <option value="SA 8000">SA 8000 Certification</option>
                    <option value="SEDEX/SMETA">SEDEX / SMETA Audits</option>
                    <option value="WRAP">WRAP Certification</option>
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
