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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
    ),
    title: 'Personal Hygiene Assessment',
    description: 'Evaluation of personal hygiene practices of food handlers including handwashing, protective clothing, and illness reporting procedures.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    ),
    title: 'Cleaning & Sanitation Verification',
    description: 'Comprehensive review of cleaning and sanitation procedures, schedules, and verification methods to ensure hygienic food production environments.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    title: 'Facility Design & Maintenance',
    description: 'Assessment of facility layout, design, and maintenance practices to ensure they support hygienic food production and prevent contamination.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: 'Water Quality & Pest Control',
    description: 'Verification of water quality management, supply systems, waste management protocols, and integrated pest control measures.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
    title: 'Temperature & Cold Chain Control',
    description: 'Assessment of temperature control systems and cold chain management to ensure food safety throughout storage and distribution.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    title: 'Training & Cross-Contamination Prevention',
    description: 'Staff training and awareness programs along with cross-contamination prevention measures for raw material handling and storage.'
  }
]

const benefits = [
  { title: 'Food Safety Foundation', desc: 'Establish the basics for a robust food safety system upon which HACCP and ISO 22000 are built.' },
  { title: 'Regulatory Compliance', desc: 'Meet local and international hygiene regulations based on Codex Alimentarius guidelines.' },
  { title: 'Consumer Protection', desc: 'Reduce risk of foodborne illness and protect consumers through verified hygiene standards.' },
  { title: 'Prerequisite for HACCP', desc: 'Build the essential foundation for advanced food safety certifications like HACCP and ISO 22000.' },
  { title: 'Staff Awareness', desc: 'Improve hygiene culture across the organization with trained and aware personnel.' },
  { title: 'Market Confidence', desc: 'Demonstrate commitment to food safety standards and build confidence with buyers and partners.' }
]

const relatedServices = [
  { title: 'HACCP', subtitle: 'Hazard Analysis', image: '/F3.png', link: '/food' },
  { title: 'ISO 22000', subtitle: 'Food Safety Management', image: '/F5.png', link: '/food' },
  { title: 'FSSC 22000', subtitle: 'Food Safety System Certification', image: '/F4.png', link: '/food/fssc-22000' }
]

const CheckIcon = () => (
  <svg className="w-6 h-6 text-accent drop-shadow-[0_0_5px_rgba(0,123,167,0.5)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function GHP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: 'GHP Certification',
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
    setFormData({ name: '', email: '', mobile: '', service: 'GHP Certification', message: '' })
  }

  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-white">
      <UniverseBackground />
      <NeuralCanvas />
      <Header />

      {/* Page Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/F18.png" className="w-full h-full object-cover opacity-20 scale-105" alt="Good Hygiene Practices" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#f0f5fa]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block glass-panel px-6 py-2 rounded-full mb-8 border-accent/30">
            <span className="text-[9px] font-tech font-bold text-accent uppercase tracking-[0.5em]">Fundamental hygiene standards for safe food production</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 tracking-wide mb-4 leading-none uppercase hero-text-shadow">
            Good Hygiene <br/><span className="text-accent">Practices (GHP)</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-500 font-tech font-bold uppercase tracking-[0.3em]">
            Foundation for Food Safety Systems
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
                Good Hygiene <br/><span className="text-accent">Practices (GHP)</span>
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed font-sans max-w-xl">
              Good Hygiene Practices (GHP) certification ensures that food businesses follow fundamental hygiene principles necessary for producing safe food. GHP forms the foundation upon which other food safety systems like HACCP and ISO 22000 are built.
            </p>
            <div className="glass-panel p-8 sm:p-10 rounded-[2rem] border-l-4 border-accent">
              <h4 className="text-gray-800 font-display font-bold uppercase tracking-widest text-lg mb-4">What are Good Hygiene Practices?</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Good Hygiene Practices (GHP) are a set of basic conditions and activities necessary to maintain a hygienic environment throughout the food chain. They cover all aspects of food production, from raw material handling to finished product distribution. GHP is based on Codex Alimentarius guidelines and is a prerequisite program for all food safety management systems.
              </p>
            </div>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 h-[400px] sm:h-[500px]">
            <img src="/F18.png" className="w-full h-full object-cover opacity-80" alt="Good Hygiene Practices" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 relative z-10 bg-navy-light/20 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 uppercase tracking-widest leading-none">
              Key <span className="text-accent">Requirements</span>
            </h2>
            <p className="text-gray-500 mt-6 font-tech uppercase tracking-[0.3em]">Comprehensive Hygiene Assessment Areas</p>
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
            <h3 className="text-3xl font-display font-black text-gray-800 uppercase tracking-widest border-l-4 border-accent pl-6">Benefits of GHP Certification</h3>
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
              Eurocert Asia provides thorough GHP assessments and certification services. Our food safety experts help organizations implement effective hygiene practices and achieve certification, paving the way for more advanced food safety standards like HACCP and ISO 22000.
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
                  Start your GHP certification journey. Our food safety and hygiene experts are ready to assist you.
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
                    <option value="GHP Certification">GHP Certification</option>
                    <option value="HACCP">HACCP Certification</option>
                    <option value="ISO 22000">ISO 22000 Certification</option>
                    <option value="FSSC 22000">FSSC 22000 Certification</option>
                    <option value="Other">Other Food Certification</option>
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
