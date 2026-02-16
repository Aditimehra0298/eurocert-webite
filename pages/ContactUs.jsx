import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UniverseBackground from '../components/UniverseBackground'
import NeuralCanvas from '../components/NeuralCanvas'
import GalaxyShader from '../components/GalaxyShader'

const contactCards = [
  {
    icon: '📍',
    title: 'Head Office',
    content: <p className="text-xs text-gray-500 leading-relaxed font-sans uppercase">Eurocert Inspection Services <br />Panchkula, Haryana <br />India</p>,
  },
  {
    icon: '📞',
    title: 'Signal Channel',
    content: <p className="text-xs text-gray-500 leading-relaxed font-tech font-bold tracking-widest">+91-7009007527<br />+91-9262740889</p>,
  },
  {
    icon: '📧',
    title: 'Data Address',
    content: <p className="text-xs text-gray-500 leading-relaxed font-tech font-bold tracking-widest">info@eurocert.in</p>,
  },
]

export default function ContactUs() {
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
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-white">
      {/* Global Visual Engine */}
      <UniverseBackground />
      <NeuralCanvas />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60svh] flex flex-col items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20 scale-105"
            alt="Global Support"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#f0f5fa]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block glass-panel px-6 py-2 rounded-full mb-8 border-accent/30 animate-pulse">
            <span className="text-[9px] font-tech font-bold text-accent uppercase tracking-[0.5em]">Direct Transmission Channel Active</span>
          </div>
          <h1 className="text-[clamp(2.5rem,11vw,8rem)] font-display font-black text-gray-800 tracking-[0.05em] sm:tracking-[0.1em] mb-4 leading-none uppercase">
            Contact <br /><span className="text-accent text-3xl sm:text-6xl md:text-7xl">Us</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-500 font-tech font-bold uppercase tracking-[0.3em] max-w-3xl mx-auto leading-relaxed">
            We're here to answer your questions about certification, inspection, and audits.
          </p>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="relative">
        {/* Contact Matrix */}
        <section className="py-12 sm:py-24 relative z-10 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {contactCards.map((card, index) => (
                <div key={index} className="glass-panel min-h-[180px] flex flex-col justify-center items-center p-8 text-center rounded-[2.5rem] reveal border-gray-100 group hover:border-accent transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">{card.icon}</div>
                  <h4 className="text-gray-800 font-display font-bold uppercase tracking-widest text-sm mb-3">{card.title}</h4>
                  {card.content}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Get In Touch Hub */}
        <section className="py-24 relative z-10 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-xl border border-gray-100 reveal">
              {/* Left: Info Panel (Purple) */}
              <div className="lg:w-5/12 bg-accent p-10 sm:p-20 flex flex-col justify-between relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)' }}>
                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-6xl font-display font-black text-white mb-6 tracking-tighter leading-none uppercase">
                    Get in <br />Touch
                  </h2>
                  <p className="text-white/80 text-sm leading-relaxed mb-10 max-w-sm">
                    Whether you are planning a new certification, preparing for an audit, or need guidance on regulatory requirements, our team is ready to support you.
                  </p>

                  <div className="space-y-10">
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shadow-lg border border-gray-200 shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase text-white/50 tracking-widest mb-1">Bureau Headquarters</p>
                        <p className="text-white font-tech font-bold text-xs sm:text-sm leading-relaxed">
                          Eurocert Inspection Services Pvt. Ltd.<br />Panchkula, Haryana, India
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shadow-lg border border-gray-200 shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase text-white/50 tracking-widest mb-1">Active Signal Lines</p>
                        <p className="text-white font-tech font-bold text-xs sm:text-sm tracking-widest">+91 7009007527</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 flex gap-4 relative z-10">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white hover:bg-white/20 transition">In</a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white hover:bg-white/20 transition">Tw</a>
                </div>
              </div>

              {/* Right: Form Panel */}
              <div className="lg:w-7/12 bg-white p-10 sm:p-16 relative">
                <div className="absolute inset-0 overflow-hidden" id="contact-galaxy-container">
                  <GalaxyShader containerId="contact-galaxy-container" />
                </div>
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-gray-500 tracking-widest leading-none">Your Identity *</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-800 px-4 py-3.5 rounded-xl text-sm outline-none focus:border-accent focus:bg-white transition"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-gray-500 tracking-widest leading-none">Data Address *</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-800 px-4 py-3.5 rounded-xl text-sm outline-none focus:border-accent focus:bg-white transition"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-gray-500 tracking-widest leading-none">Mobile Node *</label>
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-800 px-4 py-3.5 rounded-xl text-sm outline-none focus:border-accent focus:bg-white transition"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-gray-500 tracking-widest leading-none">Service Sector</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-800 px-4 py-3.5 rounded-xl text-sm outline-none focus:border-accent focus:bg-white transition appearance-none"
                      >
                        <option value="">Select a service</option>
                        <option value="ce-certificate">CE Certificate</option>
                        <option value="food-certification">Food Certification</option>
                        <option value="social-audits">Social Audits</option>
                        <option value="sustainability">Sustainability</option>
                        <option value="management-system">Management System</option>
                        <option value="training">Training</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-gray-500 tracking-widest leading-none">Transmission Message *</label>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Detailed technical requirement..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 text-gray-800 px-4 py-3.5 rounded-xl text-sm outline-none focus:border-accent focus:bg-white transition resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-5 bg-accent text-white font-tech font-black uppercase tracking-[0.5em] rounded-xl hover:bg-accent-bright transition-all duration-500 shadow-xl"
                  >
                    Send Message Transmission
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
