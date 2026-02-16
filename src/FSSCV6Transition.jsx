import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { addContact } from './hooks/useContacts'

const overviewChanges = [
  'Food chain categories realigned to align with updated guidelines of ISO 22003-1:2022',
  'Scheme expanded to include Trading and Brokering (FII) while removing Farming and FSSC 22000-Quality',
  'Integration of food safety and quality culture requirements implemented',
  'New requirements for quality control, food loss and waste, and equipment management introduced',
  'Existing additional requirements strengthened, including allergen management and environmental monitoring',
  'Certification Process modified and clarified to enhance and streamline requirements',
  'FSSC 22000 certificates now include a QR Code for enhanced traceability purposes',
]

const revisionReasons = [
  { icon: 'fa-file-alt', title: 'ISO 22003-1:2022', desc: 'Scheme updated to incorporate specific requirements outlined in ISO 22003-1:2022.' },
  { icon: 'fa-globe-americas', title: 'UN SDGs Support', desc: 'Stronger requirements to support organizations in achieving the UN Sustainable Development Goals.' },
  { icon: 'fa-chart-line', title: 'Continuous Improvement', desc: 'Editorial changes and amendments as part of the scheme\'s continuous improvement process.' },
]

const whoShouldAttend = [
  'Food Safety Consultants',
  'Food Safety Managers',
  'Quality Assurance and Compliance Teams',
  'Internal Auditors',
  'All employees with basic awareness of food safety principles and their role in ensuring food safety',
]

const learningObjectives = [
  'Understand FSSC 22000 Version 6 updates and changes',
  'Recognize FSSC 22000 Version 6 structure and requirements',
  'Apply risk-based thinking in food safety',
  'Ensure compliance with regulations',
  'Enhance food safety culture and communication',
  'Prepare for FSSC 22000 certification',
  'Contribute to food safety improvement',
]

const services = [
  { icon: 'fa-laptop-code', title: 'DMS', desc: 'Software that improves the quality management of the organisation by enhancing process and task management.' },
  { icon: 'fa-chalkboard-teacher', title: 'Training', desc: 'An overview of the food safety management system and FSSC 22000 Version 6.0 with practical implementation guidance.' },
  { icon: 'fa-award', title: 'Certification', desc: 'Certificate that demonstrates your credibility and helps in career advancement with internationally recognized credentials.' },
]

const CheckIcon = () => (
  <svg className="w-5 h-5 text-eurogold-400 drop-shadow-[0_0_5px_rgba(212,168,67,0.5)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

const CheckBlue = () => (
  <svg className="w-4 h-4 text-euro-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function FSSCV6Transition() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addContact({ name: formData.name, email: formData.email, phone: formData.phone, service: 'FSSC V6 Transition', message: formData.message, source: 'FSSC V6 Transition' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/j1.png" className="absolute inset-0 w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-[#030a16]/75"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.08)_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(19,62,124,0.15)_0%,transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Get New Heights With Eurocert</span>
          </div>
          <h1 className="heading-font text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            FSSC 22000 <span className="text-eurogold-400">Transition Training</span>
          </h1>
          <p className="heading-font text-white/60 text-sm md:text-lg font-bold mb-2">From Version 5.1 to Version 6</p>
          <p className="text-white/40 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
            FSSC 22000 is an internationally recognized certification scheme that ensures food products' safety and quality. The latest version, FSSC 22000 Version 6, was published at the beginning of April 2023.
          </p>

          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-10">
            {[
              { icon: 'fa-clock', val: '1 Day', sub: '8 Hours' },
              { icon: 'fa-laptop', val: 'Online', sub: 'Mode' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-2xl border border-white/5 bg-white/2 text-center">
                <div className="w-9 h-9 rounded-xl bg-eurogold-400/10 flex items-center justify-center mx-auto mb-2">
                  <i className={`fas ${item.icon} text-eurogold-400 text-xs`}></i>
                </div>
                <p className="heading-font text-white font-bold text-sm">{item.val}</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest heading-font">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="inline-block p-4 rounded-2xl border border-eurogold-400/20 bg-eurogold-400/5">
            <p className="text-white/50 text-xs heading-font uppercase tracking-widest">
              <i className="fas fa-info-circle text-eurogold-400 mr-2"></i>
              12-month transition period: <span className="text-eurogold-400 font-bold">1 April 2023 – 31 March 2024</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Our FSSC 22000 Services — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">What We Offer</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Our FSSC 22000 Services</h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {services.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-lg transition-all duration-300 group text-center">
                  <div className="w-12 h-12 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mx-auto mb-4 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${item.icon} text-lg`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview of Changes — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">What's New</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Overview of Changes</h2>
              </div>

              <div className="grid lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 space-y-3">
                  {overviewChanges.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/2 hover:border-eurogold-400/20 transition-all duration-300">
                      <CheckIcon />
                      <p className="text-white/60 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-white/10 group self-stretch">
                  <img src="/f2.webp" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" alt="FSSC 22000 Overview" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reason of Revision — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Why The Update</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Reason of Revision</h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {revisionReasons.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${item.icon} text-base`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who Should Attend + Learning Objectives — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
              {/* Who Should Attend */}
              <div>
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Audience</h4>
                <h2 className="heading-font text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">Who Should Attend?</h2>
                <p className="text-white/40 text-sm mb-5">This training will significantly interest those already certified with FSSC 22000 Version 5.1</p>
                <div className="space-y-3">
                  {whoShouldAttend.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-white/2 hover:border-eurogold-400/20 transition-all duration-300">
                      <CheckIcon />
                      <p className="text-white/60 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Objectives */}
              <div>
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Outcomes</h4>
                <h2 className="heading-font text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">Learning Objectives</h2>
                <p className="text-white/40 text-sm mb-5">By the end of this training, participants will be able to:</p>
                <div className="space-y-3">
                  {learningObjectives.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-white/2 hover:border-eurogold-400/20 transition-all duration-300">
                      <CheckIcon />
                      <p className="text-white/60 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact / Enquiry Form — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-10 items-start">
              {/* Left Info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Enrol Now</h4>
                  <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                    Register for <span className="text-euro-600">Training</span>
                  </h2>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Get in touch to reserve your seat for the FSSC 22000 V-6 Transition Training. Our team will confirm your registration and share all session details.
                </p>

                <div className="space-y-5 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 shrink-0">
                      <i className="fas fa-clock text-sm"></i>
                    </div>
                    <div>
                      <h5 className="heading-font text-[10px] font-bold text-slate-900 uppercase tracking-widest">Duration</h5>
                      <p className="text-slate-400 text-xs">1 Day — 8 Hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 shrink-0">
                      <i className="fas fa-laptop text-sm"></i>
                    </div>
                    <div>
                      <h5 className="heading-font text-[10px] font-bold text-slate-900 uppercase tracking-widest">Mode</h5>
                      <p className="text-slate-400 text-xs">Online — Virtual Classroom</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 shrink-0">
                      <i className="fas fa-phone text-sm"></i>
                    </div>
                    <div>
                      <h5 className="heading-font text-[10px] font-bold text-slate-900 uppercase tracking-widest">Contact</h5>
                      <p className="text-slate-400 text-xs">+91 7009007527</p>
                      <p className="text-slate-400 text-xs">info@eurocert.in</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="lg:col-span-3">
                <div className="bg-white border border-slate-100 shadow-[0_32px_80px_-15px_rgba(0,0,0,0.08)] rounded-3xl p-8 md:p-10">
                  {submitted && (
                    <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center gap-3">
                      <i className="fas fa-check-circle text-green-500"></i>
                      <p className="text-green-700 text-sm font-medium">Registration submitted! We'll confirm your seat shortly.</p>
                    </div>
                  )}

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Your Name <span className="text-red-400">*</span></label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-input" placeholder="Full Name" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Contact No. <span className="text-red-400">*</span></label>
                        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="form-input" placeholder="Mobile Number" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Your Email <span className="text-red-400">*</span></label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="form-input" placeholder="Email Address" />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Your Message <span className="text-slate-300">(optional)</span></label>
                      <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="form-input" placeholder="Any specific questions or requirements..."></textarea>
                    </div>

                    <button type="submit" className="w-full md:w-auto px-12 py-4 bg-euro-600 text-white heading-font text-xs font-bold rounded-2xl hover:bg-euro-700 transition shadow-2xl uppercase tracking-widest flex items-center justify-center gap-2">
                      <i className="fas fa-paper-plane text-[10px]"></i>
                      Register Now
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
