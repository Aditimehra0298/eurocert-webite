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
    title: 'SLCP Assessment & Verification',
    description: 'Complete SLCP assessment and independent verification services using the converged assessment tool to produce reliable, shareable social and labor data.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Converged Assessment Framework',
    description: 'Implementation of the SLCP converged assessment framework, replacing multiple proprietary audit tools with a single standardized methodology.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
      </svg>
    ),
    title: 'Data Sharing & Transparency',
    description: 'Support for sharing verified assessment data with multiple stakeholders through accredited hosting platforms, maximizing the value of each assessment.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
      </svg>
    ),
    title: 'Reduction of Audit Duplication',
    description: 'Eliminate redundant social audits by enabling one verified assessment to satisfy the requirements of multiple brands, retailers, and buying organizations.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    title: 'Training on SLCP Methodology',
    description: 'Comprehensive training programs on the SLCP converged assessment tool, methodology, self-assessment process, and verification requirements.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </svg>
    ),
    title: 'Remediation Support',
    description: 'Post-assessment remediation guidance to address identified gaps and drive continuous improvement in social and labor practices at your facility.'
  }
]

const benefits = [
  { title: 'Reduce Audit Fatigue', desc: 'One assessment shared with multiple buyers eliminates the burden of repetitive social audits.' },
  { title: 'Cost Savings', desc: 'Significantly reduce the number of audits needed, lowering overall compliance costs.' },
  { title: 'Time Efficiency', desc: 'Save valuable time by avoiding duplicate assessments and streamlining the compliance process.' },
  { title: 'Improved Transparency', desc: 'Share verified data with multiple stakeholders through accredited hosting platforms.' },
  { title: 'Better Working Conditions', desc: 'Shift focus from multiple audits to actual improvement of working conditions on the ground.' }
]

const processSteps = [
  { step: '01', title: 'Assessment Preparation', desc: 'We help you understand the SLCP framework and prepare for assessment using the converged assessment tool.' },
  { step: '02', title: 'Data Collection', desc: 'Comprehensive data collection using the converged assessment tool covering all social and labor indicators.' },
  { step: '03', title: 'Verification', desc: 'Independent verification of assessment data by our qualified SLCP verifiers to ensure accuracy and reliability.' },
  { step: '04', title: 'Data Sharing', desc: 'Share verified assessment data with multiple stakeholders through accredited hosting platforms.' },
  { step: '05', title: 'Continuous Improvement', desc: 'Use assessment findings to identify gaps and improve working conditions at your facilities.' }
]

const relatedServices = [
  { title: 'SA 8000', subtitle: 'Social accountability certification', image: '/b1.png', link: '/social/sa-8000' },
  { title: 'SEDEX / SMETA', subtitle: 'Ethical trade audits', image: '/b2.png', link: '/social' },
  { title: 'WRAP', subtitle: 'Worldwide Responsible Accredited Production', image: '/b4.png', link: '/social' }
]

const CheckIcon = () => (
  <svg className="w-6 h-6 text-accent drop-shadow-[0_0_5px_rgba(0,123,167,0.5)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function SLCP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: 'SLCP Assessment',
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
    setFormData({ name: '', email: '', mobile: '', service: 'SLCP Assessment', message: '' })
  }

  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-white">
      <UniverseBackground />
      <NeuralCanvas />
      <Header />

      {/* Page Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/b6.png" className="w-full h-full object-cover opacity-20 scale-105" alt="SLCP Assessment" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#f0f5fa]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block glass-panel px-6 py-2 rounded-full mb-8 border-accent/30">
            <span className="text-[9px] font-tech font-bold text-accent uppercase tracking-[0.5em]">Converged assessment framework to reduce audit fatigue</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 tracking-wide mb-4 leading-none uppercase hero-text-shadow">
            SLCP <br/><span className="text-accent">Assessment</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-500 font-tech font-bold uppercase tracking-[0.3em]">
            Social & Labor Convergence Project
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
                SLCP <br/><span className="text-accent">Verification</span>
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed font-sans max-w-xl">
              The Social & Labor Convergence Project (SLCP) is an initiative that aims to reduce audit fatigue and improve working conditions by creating a converged assessment framework. We provide SLCP verification services to help organizations streamline their social compliance assessments.
            </p>
            <div className="glass-panel p-8 sm:p-10 rounded-[2rem] border-l-4 border-accent">
              <h4 className="text-gray-800 font-display font-bold uppercase tracking-widest text-lg mb-4">What is SLCP?</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                SLCP is a multi-stakeholder initiative that brings together brands, manufacturers, suppliers, and service providers to create a converged assessment framework. The goal is to reduce audit fatigue by allowing one assessment to be shared with multiple stakeholders, eliminating the need for redundant social audits.
              </p>
            </div>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 h-[400px] sm:h-[500px]">
            <img src="/b6.png" className="w-full h-full object-cover opacity-80" alt="SLCP Assessment" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 relative z-10 bg-navy-light/20 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 uppercase tracking-widest leading-none">
              Our SLCP <span className="text-accent">Services</span>
            </h2>
            <p className="text-gray-500 mt-6 font-tech uppercase tracking-[0.3em]">Comprehensive Converged Assessment Solutions</p>
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

      {/* Assessment Process */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-black text-gray-800 uppercase tracking-widest leading-none">
              SLCP Assessment <span className="text-accent">Process</span>
            </h2>
            <p className="text-gray-500 mt-6 font-tech uppercase tracking-[0.3em]">Your Journey Through SLCP Verification</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {processSteps.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center border border-accent/40 group-hover:bg-accent/40 transition">
                    <span className="text-accent font-tech font-black text-sm">{item.step}</span>
                  </div>
                  {index < processSteps.length - 1 && <div className="w-px h-full bg-accent/20 mt-2"></div>}
                </div>
                <div className="pb-8">
                  <h4 className="text-gray-800 font-display font-bold uppercase tracking-wide text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Why Choose Us */}
      <section className="py-16 md:py-24 relative z-10 bg-navy-light/20 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-12">
            <h3 className="text-3xl font-display font-black text-gray-800 uppercase tracking-widest border-l-4 border-accent pl-6">Benefits of SLCP</h3>
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
              Our experienced team understands the SLCP framework and can help you navigate the assessment process efficiently. We work with you to ensure successful verification and help you share your assessment data with multiple stakeholders.
            </p>
            <div className="space-y-4">
              <div className="bg-primary/20 p-6 rounded-2xl border border-gray-100">
                <span className="text-accent font-black text-4xl block mb-2 leading-none">25+</span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-[0.3em]">Years of Industrial Intelligence</span>
              </div>
              <div className="bg-primary/20 p-6 rounded-2xl border border-gray-100">
                <span className="text-accent font-black text-4xl block mb-2 leading-none">100%</span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-[0.3em]">Verification Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 relative z-10">
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
                  Start your SLCP verification journey. Our social compliance experts are ready to assist you.
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
                    <option value="SLCP Assessment">SLCP Assessment</option>
                    <option value="SA 8000">SA 8000 Certification</option>
                    <option value="SEDEX/SMETA">SEDEX / SMETA Audits</option>
                    <option value="WRAP">WRAP Certification</option>
                    <option value="Other">Other Social Audit</option>
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
