import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { addContact } from './hooks/useContacts'

const services = [
  'CE Certification',
  'ISO Certifications',
  'FSSC 22000',
  'SA 8000',
  'Environmental Certifications',
  'Social Audits',
  'Sustainability Certifications',
  'GMP+ Certification',
  'Food Safety Audits',
  'Other',
]

export default function ContactUs() {
  const [captchaVal, setCaptchaVal] = useState('')
  const [captchaA, setCaptchaA] = useState(0)
  const [captchaB, setCaptchaB] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  useEffect(() => {
    window.scrollTo(0, 0)
    generateCaptcha()
  }, [])

  function generateCaptcha() {
    setCaptchaA(Math.floor(Math.random() * 10) + 1)
    setCaptchaB(Math.floor(Math.random() * 10) + 1)
    setCaptchaVal('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (parseInt(captchaVal) !== captchaA + captchaB) {
      alert('Captcha verification failed. Please try again.')
      generateCaptcha()
      return
    }
    await addContact({ ...formData, source: 'Contact Us Page' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    generateCaptcha()
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    setCaptchaVal('')
  }

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/g4.png" className="absolute inset-0 w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-[#030a16]/75"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.08)_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(19,62,124,0.15)_0%,transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Get In Touch</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Contact <span className="text-eurogold-400">Us</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm heading-font">
            <Link to="/" className="hover:text-eurogold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Contact Us</span>
          </div>
        </div>
      </section>

      {/* ── About Eurocert Asia ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Who We Are</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  About <span className="text-euro-600">Eurocert Asia</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Eurocert Asia, a part of the prestigious Eurocert Group based in Athens, Greece, is a leading certification body located in Panchkula, Haryana, India. We specialize in providing essential certifications for businesses aiming to operate in the European market.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                With a strong focus on compliance with international standards and fostering sustainable business practices, Eurocert Asia helps organizations enhance their credibility, meet regulatory requirements, and improve overall environmental and social performance.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our expert team provides comprehensive guidance throughout the certification process, ensuring that businesses thrive in the global marketplace. At Eurocert Asia, we are dedicated to delivering high-quality service, integrity, and customer satisfaction — making us your trusted partner in achieving certification success.
              </p>

              <div className="pt-2">
                <h5 className="heading-font text-[11px] font-bold text-slate-900 uppercase tracking-widest mb-4">Our Services Include</h5>
                <div className="grid sm:grid-cols-2 gap-2">
                  {['CE Certification', 'ISO Certifications', 'FSSC 22000', 'SA 8000', 'Environmental Certifications', 'Social Audits', 'Sustainability Certifications'].map((s, i) => (
                    <div key={i} className="flex items-center gap-2.5 py-2">
                      <svg className="w-4 h-4 text-euro-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
                      </svg>
                      <span className="text-slate-600 text-sm font-medium">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="lg:col-span-2 space-y-5">
              <div className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc] shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-building text-white text-sm"></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold text-slate-900 uppercase tracking-widest">Office Address</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Eurocert Inspection Services Pvt. Ltd.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mt-1">
                  304, Mid Town Tower, Peer Muchalla,<br />
                  Panchkula, Haryana – 134109, India
                </p>
                <div className="mt-5 pt-5 border-t border-slate-100 space-y-3">
                  <a href="tel:+919316012883" className="flex items-center gap-3 text-sm text-slate-600 hover:text-euro-600 transition-colors">
                    <i className="fas fa-phone text-euro-600 text-xs w-5 text-center"></i>
                    <span>+91 9316012883</span>
                  </a>
                  <a href="mailto:info@eurocert.in" className="flex items-center gap-3 text-sm text-slate-600 hover:text-euro-600 transition-colors">
                    <i className="fas fa-envelope text-euro-600 text-xs w-5 text-center"></i>
                    <span>info@eurocert.in</span>
                  </a>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-[220px]">
                <iframe
                  title="Eurocert Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5!2d76.78!3d30.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPanchkula%2C+Haryana!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Info Cards — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Reach Us</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Contact Eurocert Asia</h2>
                <p className="text-white/40 text-sm mt-3 max-w-2xl mx-auto">
                  We're here to answer your questions about certification, inspection, and audits.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Head Office */}
                <div className="p-6 rounded-2xl border border-white/5 bg-white/2 group hover:border-eurogold-400/20 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-eurogold-400/10 flex items-center justify-center mb-4 group-hover:bg-eurogold-400/20 transition-all">
                    <i className="fas fa-map-marker-alt text-eurogold-400 text-base"></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold text-white uppercase tracking-widest mb-2">Head Office</h4>
                  <p className="text-white/50 text-sm leading-relaxed">Eurocert Inspection Services</p>
                  <p className="text-white/45 text-sm leading-relaxed">Panchkula, Haryana, India</p>
                </div>

                {/* Active Signal Lines */}
                <div className="p-6 rounded-2xl border border-white/5 bg-white/2 group hover:border-eurogold-400/20 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-eurogold-400/10 flex items-center justify-center mb-4 group-hover:bg-eurogold-400/20 transition-all">
                    <i className="fas fa-phone-alt text-eurogold-400 text-base"></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold text-white uppercase tracking-widest mb-2">Active Signal Lines</h4>
                  <a href="tel:+917009007527" className="text-white/50 text-sm leading-relaxed block hover:text-eurogold-400 transition-colors">+91 7009007527</a>
                  <a href="tel:+919262740889" className="text-white/50 text-sm leading-relaxed block hover:text-eurogold-400 transition-colors">+91 9262740889</a>
                  <span className="inline-flex items-center gap-1.5 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-green-400/70 text-[10px] heading-font uppercase tracking-widest font-bold">Available Now</span>
                  </span>
                </div>

                {/* Data Address */}
                <div className="p-6 rounded-2xl border border-white/5 bg-white/2 group hover:border-eurogold-400/20 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-eurogold-400/10 flex items-center justify-center mb-4 group-hover:bg-eurogold-400/20 transition-all">
                    <i className="fas fa-envelope text-eurogold-400 text-base"></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold text-white uppercase tracking-widest mb-2">Data Address</h4>
                  <a href="mailto:info@eurocert.in" className="text-white/50 text-sm leading-relaxed block hover:text-eurogold-400 transition-colors">info@eurocert.in</a>
                  <p className="text-white/30 text-xs mt-2">Typically responds within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form — Light ── */}
      <section className="py-14 lg:py-18 bg-white" id="contact-form">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-10 items-start">
              {/* Left Intro */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Send a Message</h4>
                  <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                    Get in <span className="text-euro-600">Touch</span>
                  </h2>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Whether you are planning a new certification, preparing for an audit, or need guidance on regulatory requirements, our team is ready to support you.
                </p>

                <div className="space-y-4 pt-2">
                  {[
                    { icon: 'fa-certificate', title: 'New Certification', desc: 'Start your certification journey' },
                    { icon: 'fa-clipboard-check', title: 'Audit Preparation', desc: 'Get ready for upcoming audits' },
                    { icon: 'fa-balance-scale', title: 'Regulatory Guidance', desc: 'Navigate compliance requirements' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 shrink-0">
                        <i className={`fas ${item.icon} text-sm`}></i>
                      </div>
                      <div>
                        <h5 className="heading-font text-[10px] font-bold text-slate-900 uppercase tracking-widest">{item.title}</h5>
                        <p className="text-slate-400 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Form */}
              <div className="lg:col-span-3">
                <div className="bg-white border border-slate-100 shadow-[0_32px_80px_-15px_rgba(0,0,0,0.08)] rounded-3xl p-8 md:p-10">
                  {submitted && (
                    <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center gap-3">
                      <i className="fas fa-check-circle text-green-500"></i>
                      <p className="text-green-700 text-sm font-medium">Message sent successfully! We'll get back to you shortly.</p>
                    </div>
                  )}

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                          Your Identity <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="form-input"
                          placeholder="Full Name"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                          Data Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="form-input"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                          Mobile Node <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="form-input"
                          placeholder="Mobile Number"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                          Service Sector
                        </label>
                        <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="form-input appearance-none">
                          <option value="">Select a Service</option>
                          {services.map((s, i) => (
                            <option key={i} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                        Transmission Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        rows="5"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-input"
                        placeholder="Detailed technical requirement..."
                      ></textarea>
                    </div>

                    {/* Captcha */}
                    <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-100">
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                        <i className="fas fa-robot text-euro-600 mr-1"></i> Verify You Are Human
                      </label>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-slate-200">
                          <span className="heading-font text-lg font-bold text-slate-700">{captchaA}</span>
                          <span className="text-slate-400 font-bold">+</span>
                          <span className="heading-font text-lg font-bold text-slate-700">{captchaB}</span>
                          <span className="text-slate-400 font-bold">=</span>
                        </div>
                        <input
                          type="number"
                          required
                          value={captchaVal}
                          onChange={(e) => setCaptchaVal(e.target.value)}
                          className="form-input !w-24 text-center"
                          placeholder="?"
                        />
                        <button
                          type="button"
                          onClick={generateCaptcha}
                          className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 hover:text-euro-600 hover:bg-euro-50 transition-all"
                          title="Refresh captcha"
                        >
                          <i className="fas fa-sync-alt text-xs"></i>
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-auto px-12 py-4 bg-euro-600 text-white heading-font text-xs font-bold rounded-2xl hover:bg-euro-700 transition shadow-2xl uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      <i className="fas fa-paper-plane text-[10px]"></i>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
