import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { addContact } from './hooks/useContacts'

const heroStats = [
  { icon: 'fa-graduation-cap', val: '500+', sub: 'Programs Delivered' },
  { icon: 'fa-users', val: '2k+', sub: 'Professionals Certified' },
  { icon: 'fa-book-open', val: '50+', sub: 'Training Topics' },
  { icon: 'fa-star', val: '98%', sub: 'Satisfaction Rate' },
]

const offerings = [
  {
    icon: 'fa-building',
    title: 'In-Company Programs',
    desc: 'Design and delivery of customized training programs tailored to your organization\'s specific technical and compliance needs.',
    items: ['Customized curriculum development', 'On-site delivery protocols', 'Industry-specific content', 'Effectiveness measurement'],
  },
  {
    icon: 'fa-clipboard-list',
    title: 'Planning & Implementation',
    desc: 'Comprehensive support for training seminars from initial planning through successful knowledge transfer implementation.',
    items: ['Technical needs assessment', 'Skill gap analysis', 'Resource material development', 'Performance evaluation systems'],
  },
  {
    icon: 'fa-truck',
    title: 'ADR Dangerous Goods',
    desc: 'Approved Official School for drivers of dangerous goods vehicles. Professional certification for hazardous materials.',
    items: ['ADR Driver Certification', 'Hazardous handling protocols', 'Practical training sessions', 'International Recertification'],
  },
  {
    icon: 'fa-id-card',
    title: 'ISO 17024 Certification',
    desc: 'Certification of Persons, validating competence and expertise across critical specialized technical and leadership roles.',
    items: ['Data Protection Officers', 'Supply Chain Executives', 'Building System Technicians', 'Machinery Operators'],
  },
  {
    icon: 'fa-chalkboard-teacher',
    title: 'Seminars & Workshops',
    desc: 'Interactive sessions covering critical topics in Information Security, GDPR, Quality, and Good Agricultural Practice.',
    items: ['Information Security', 'GDPR & Data Privacy', 'Quality Management', 'Health & Safety'],
  },
  {
    icon: 'fa-anchor',
    title: 'Specialized Programs',
    desc: 'Advanced training for specialized maritime roles and international education opportunities through Erasmus+.',
    items: ['Marine Armed Guard Security', 'Erasmus+ International Programs', 'Threat Assessment Training', 'Cross-border cultural programs'],
  },
]

const learningFormats = [
  {
    icon: 'fa-building',
    title: 'In-Person Training',
    desc: 'Direct interaction with expert trainers through hands-on practical exercises and industrial networking.',
    features: ['Direct interaction with trainers', 'Hands-on practical exercises', 'Industrial networking opportunities'],
  },
  {
    icon: 'fa-laptop',
    title: 'Online Training',
    desc: 'Flexible virtual scheduling with recorded sessions and cost-effective global delivery model.',
    features: ['Flexible virtual scheduling', 'Recorded session reviews', 'Cost-effective global model'],
  },
  {
    icon: 'fa-sync-alt',
    title: 'Hybrid Learning',
    desc: 'Blended learning methodology combining in-person and online formats for maximum flexibility.',
    features: ['Blended learning methodology', 'Customized delivery options', 'Maximum training flexibility'],
  },
]

const benefits = [
  { icon: 'fa-user-tie', title: 'Expert Trainers', desc: 'Learn from industry experts with years of practical experience and deep domain knowledge.' },
  { icon: 'fa-certificate', title: 'Recognized Certification', desc: 'Receive internationally recognized certifications validating technical and compliance competence.' },
  { icon: 'fa-bullseye', title: 'Practical Focus', desc: 'Emphasis on real-world scenarios for immediate workplace implementation and skill development.' },
  { icon: 'fa-globe', title: 'Global Recognition', desc: 'Opening doors to international career opportunities and professional growth across global markets.' },
  { icon: 'fa-briefcase', title: 'Career Advancement', desc: 'Enhance your professional profile with certifications demonstrating commitment to excellence.' },
  { icon: 'fa-handshake', title: 'Network Building', desc: 'Connect with professionals across various industries and exchange expertise and best practices.' },
]

const programOptions = [
  'In-Company Training Programs',
  'Training Planning & Development',
  'ADR - Dangerous Goods Vehicles',
  'ISO 17024 - Professional Certification',
  'Seminars & Workshops',
  'Marine Armed Guards',
  'European Program Erasmus+',
  'Other Services',
]

const CheckIcon = () => (
  <svg className="w-4 h-4 text-eurogold-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function Training() {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', program: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addContact({ name: formData.name, email: formData.email, phone: formData.mobile, service: formData.program || 'Training Inquiry', message: formData.message, source: 'Training' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', mobile: '', program: '', message: '' })
  }

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-[#030a16]/75"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.08)_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(19,62,124,0.15)_0%,transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Professional Development</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Training <span className="text-eurogold-400">Programs</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
            Comprehensive training solutions to enhance your team's expertise, compliance knowledge, and professional development across industries.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {heroStats.map((item, i) => (
              <div key={i} className="p-4 rounded-2xl border border-white/5 bg-white/2 text-center">
                <div className="w-9 h-9 rounded-xl bg-eurogold-400/10 flex items-center justify-center mx-auto mb-2">
                  <i className={`fas ${item.icon} text-eurogold-400 text-xs`}></i>
                </div>
                <p className="heading-font text-white font-bold text-sm">{item.val}</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest heading-font">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Our Training — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Expertise</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Our Training <span className="text-euro-600">Services</span>
                </h2>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] heading-font mt-1">Comprehensive Training Solutions</p>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Eurocert offers a wide range of professional training programs designed to enhance skills, knowledge, and compliance capabilities across various industries and specializations.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our training methodology combines theoretical knowledge with practical application, ensuring participants gain actionable insights they can immediately implement in their professional roles.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {['Global Certifications', 'Industry Expert Trainers', 'Flexible Formats', 'Ongoing Support'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-2">
                    <svg className="w-4 h-4 text-euro-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
                    </svg>
                    <span className="text-slate-600 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[340px] md:h-[440px] group">
              <img src="/t2.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Eurocert Training" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Training Offerings — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">What We Offer</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Our Training Offerings</h2>
                <p className="text-white/40 text-sm mt-3 max-w-2xl mx-auto">Comprehensive professional programs covering all aspects of certification, compliance, and industry training.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {offerings.map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/2 group hover:border-eurogold-400/20 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-eurogold-400/10 flex items-center justify-center mb-4 group-hover:bg-eurogold-400/20 transition-all">
                      <i className={`fas ${item.icon} text-eurogold-400 text-base`}></i>
                    </div>
                    <h4 className="heading-font text-[11px] font-bold text-white uppercase tracking-widest mb-2">{item.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed mb-4">{item.desc}</p>
                    <div className="space-y-2">
                      {item.items.map((sub, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckIcon />
                          <span className="text-white/50 text-xs">{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Flexible Learning — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Delivery Formats</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Flexible Learning Formats</h2>
              <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto">Choose the training delivery format that best fits your team's schedule and learning preferences.</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {learningFormats.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${item.icon} text-base`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="space-y-2">
                    {item.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-euro-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
                        </svg>
                        <span className="text-slate-500 text-xs">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Academy Advantage — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Why Choose Us</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">The Academy Advantage</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {benefits.map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/2 group hover:border-eurogold-400/20 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-eurogold-400/10 flex items-center justify-center mb-4 group-hover:bg-eurogold-400/20 transition-all">
                      <i className={`fas ${item.icon} text-eurogold-400 text-base`}></i>
                    </div>
                    <h4 className="heading-font text-[11px] font-bold text-white uppercase tracking-widest mb-2">{item.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Registration Form — Light ── */}
      <section className="py-14 lg:py-18 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-10 items-start">
              {/* Left Info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Get Started</h4>
                  <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                    Request <span className="text-euro-600">Training</span>
                  </h2>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Our training consultants are ready to identify the right programs for your team's professional development goals.
                </p>

                <div className="space-y-5 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 shrink-0">
                      <i className="fas fa-map-marker-alt text-sm"></i>
                    </div>
                    <div>
                      <h5 className="heading-font text-[10px] font-bold text-slate-900 uppercase tracking-widest">Academy Location</h5>
                      <p className="text-slate-400 text-xs">Panchkula, Haryana, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 shrink-0">
                      <i className="fas fa-phone text-sm"></i>
                    </div>
                    <div>
                      <h5 className="heading-font text-[10px] font-bold text-slate-900 uppercase tracking-widest">Contact Lines</h5>
                      <p className="text-slate-400 text-xs">+91 7009007527</p>
                      <p className="text-slate-400 text-xs">+91 9262740889</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 shrink-0">
                      <i className="fas fa-envelope text-sm"></i>
                    </div>
                    <div>
                      <h5 className="heading-font text-[10px] font-bold text-slate-900 uppercase tracking-widest">Email</h5>
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
                      <p className="text-green-700 text-sm font-medium">Inquiry sent successfully! We'll get back to you shortly.</p>
                    </div>
                  )}

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Full Name <span className="text-red-400">*</span></label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-input" placeholder="Your Name" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Email <span className="text-red-400">*</span></label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="form-input" placeholder="Email Address" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Mobile <span className="text-red-400">*</span></label>
                        <input type="tel" name="mobile" required value={formData.mobile} onChange={handleChange} className="form-input" placeholder="Mobile Number" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Training Program</label>
                        <select name="program" value={formData.program} onChange={handleChange} className="form-input appearance-none">
                          <option value="">Select a program</option>
                          {programOptions.map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Message</label>
                      <textarea name="message" rows="5" value={formData.message} onChange={handleChange} className="form-input" placeholder="Tell us about your training requirements..."></textarea>
                    </div>

                    <button type="submit" className="w-full md:w-auto px-12 py-4 bg-euro-600 text-white heading-font text-xs font-bold rounded-2xl hover:bg-euro-700 transition shadow-2xl uppercase tracking-widest flex items-center justify-center gap-2">
                      <i className="fas fa-paper-plane text-[10px]"></i>
                      Send Inquiry
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
