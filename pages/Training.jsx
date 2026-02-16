import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UniverseBackground from '../components/UniverseBackground'
import NeuralCanvas from '../components/NeuralCanvas'
import GalaxyShader from '../components/GalaxyShader'

const heroStats = [
  { number: '500+', label: 'Programs', sublabel: 'Delivered' },
  { number: '2k+', label: 'Professionals', sublabel: 'Certified' },
  { number: '50+', label: 'Training', sublabel: 'Topics' },
  { number: '98%', label: 'Satisfaction', sublabel: 'Rate' },
]

const offerings = [
  {
    icon: '🏢',
    title: 'In-Company',
    titleLine2: 'Programs',
    description: 'Design and delivery of customized training programs tailored to your organization\'s specific technical and compliance needs.',
    items: [
      '• Customized curriculum development',
      '• On-site delivery protocols',
      '• Industry-specific content',
      '• Effectiveness measurement node',
    ],
  },
  {
    icon: '📋',
    title: 'Planning &',
    titleLine2: 'Implementation',
    description: 'Comprehensive support for training seminars from initial planning through successful knowledge transfer implementation.',
    items: [
      '• Technical needs assessment',
      '• Skill gap analysis matrix',
      '• Resource material development',
      '• Performance evaluation systems',
    ],
  },
  {
    icon: '🚛',
    title: 'ADR Dangerous',
    titleLine2: 'Goods Hub',
    description: 'Approved Official School for drivers of dangerous goods vehicles. Professional certification for hazardous materials.',
    items: [
      '• ADR Driver Certification',
      '• Hazardous handling protocols',
      '• Practical training sessions',
      '• International Recertification',
    ],
  },
  {
    icon: '🎓',
    title: 'ISO 17024',
    titleLine2: 'Certification',
    description: 'Certification of Persons, validating competence and expertise across critical specialized technical and leadership roles.',
    gridItems: [
      '• Data Protection',
      '• Supply Chain Execs',
      '• Building System Techs',
      '• Machinery Operators',
      '• Financial Cross-Border',
      '• VIP Security Escorts',
    ],
  },
  {
    icon: '📚',
    title: 'Seminars &',
    titleLine2: 'Workshops',
    description: 'Interactive sessions covering critical topics in Information Security, GDPR, Quality, and Good Agricultural Practice.',
    gridItems: [
      '• Info Security Hub',
      '• GDPR Processing',
      '• Quality Management',
      '• Food Safe Node',
      '• Health & Safety',
      '• CSR Social Protocol',
    ],
  },
  {
    icon: '⚓',
    title: 'Specialized',
    titleLine2: 'Programs',
    description: 'Advanced training for specialized maritime roles and international education opportunities through Erasmus+.',
    items: [
      '• Marine Armed Guard Security',
      '• Erasmus+ International edu',
      '• Threat Assessment Nodes',
      '• Cross-border cultural link',
    ],
  },
]

const learningFormats = [
  {
    icon: '🏢',
    title: 'In-Person Training',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600',
    features: [
      'Direct interaction with trainers',
      'Hands-on practical exercises',
      'Industrial networking hubs',
    ],
  },
  {
    icon: '💻',
    title: 'Online Training',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
    features: [
      'Flexible virtual scheduling',
      'Recorded live review nodes',
      'Cost-effective global model',
    ],
  },
  {
    icon: '🔄',
    title: 'Hybrid Matrix',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600',
    features: [
      'Blended learning methodology',
      'Customized delivery options',
      'Maximum training flexibility',
    ],
  },
]

const benefits = [
  { icon: '👨‍🏫', title: 'Expert Trainers', description: 'Learn from industry experts with years of practical experience and deep knowledge hubs.' },
  { icon: '📜', title: 'Recognized Certification', description: 'Receive internationally recognized certifications validating technical and compliance competence.' },
  { icon: '🎯', title: 'Practical Focus', description: 'Emphasis on real-world scenarios for immediate workplace implementation and skill utility.' },
  { icon: '🌍', title: 'Global Recognition', description: 'Opening doors to international career opportunities and professional growth across global markets.' },
  { icon: '💼', title: 'Career Advancement', description: 'Enhance your professional profile with certifications demonstrating commitment to technical excellence.' },
  { icon: '🤝', title: 'Network Building', description: 'Connect with professionals across various industries and exchange knowledge nodes.' },
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

export default function Training() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    program: '',
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
    console.log('Training inquiry submitted:', formData)
  }

  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-white text-gray-200">
      {/* Global Visual Engine */}
      <UniverseBackground />
      <NeuralCanvas />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90svh] flex flex-col items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20 scale-105"
            alt="Learning Network"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#f0f5fa]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block glass-panel px-6 py-2 rounded-full mb-8 border-accent/30 animate-pulse">
            <span className="text-[9px] font-tech font-bold text-accent uppercase tracking-[0.5em]">Global Professional Development Node Active</span>
          </div>
          <h1 className="text-[clamp(2.2rem,11vw,8rem)] font-display font-black text-gray-800 tracking-[0.05em] sm:tracking-[0.1em] mb-4 leading-none uppercase">
            Professional <br /><span className="text-accent text-3xl sm:text-6xl md:text-7xl">Training Programs</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-500 font-tech font-bold uppercase tracking-[0.3em] max-w-4xl mx-auto leading-relaxed">
            Comprehensive training solutions to enhance your team's expertise, compliance knowledge, and professional development.
          </p>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-24 max-w-5xl mx-auto">
            {heroStats.map((stat, index) => (
              <div key={index} className="glass-panel min-h-[130px] flex flex-col justify-center items-center p-6 text-center rounded-[2rem] group hover:border-accent hover:bg-accent/5 transition-all duration-500">
                <span className="text-3xl sm:text-4xl mb-2 font-display font-black text-gray-800">{stat.number}</span>
                <span className="text-[9px] sm:text-[10px] font-tech font-bold text-accent uppercase tracking-[0.2em] leading-tight">
                  {stat.label} <br />{stat.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="relative">
        {/* Intro Section */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal space-y-10 text-center lg:text-left">
              <div className="space-y-4">
                <span className="text-accent font-tech font-bold uppercase tracking-[0.4em] text-xs">Technical Capability Node</span>
                <h2 className="text-4xl sm:text-6xl font-display font-black text-gray-800 leading-tight uppercase tracking-tighter">Our Training <span className="text-accent">Services</span></h2>
                <p className="text-sm text-gray-500 font-tech uppercase tracking-[0.2em]">Comprehensive Training Solutions</p>
              </div>
              <div className="space-y-6 text-gray-500 font-sans text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 text-left">
                <p>Eurocert offers a wide range of professional training programs designed to enhance skills, knowledge, and compliance capabilities across various industries and specializations.</p>
                <p>Our training methodology combines theoretical knowledge with practical application, ensuring participants gain actionable insights they can immediately implement in their professional roles.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-left">
                <ul className="space-y-4 text-[11px] font-bold text-gray-800 uppercase font-tech tracking-widest">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0" style={{ filter: 'drop-shadow(0 0 5px rgba(91, 141, 239, 0.8))' }} fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z" /></svg>
                    Global Certifications
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0" style={{ filter: 'drop-shadow(0 0 5px rgba(91, 141, 239, 0.8))' }} fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z" /></svg>
                    Industry Expert Trainers
                  </li>
                </ul>
                <ul className="space-y-4 text-[11px] font-bold text-gray-800 uppercase font-tech tracking-widest">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0" style={{ filter: 'drop-shadow(0 0 5px rgba(91, 141, 239, 0.8))' }} fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z" /></svg>
                    Flexible Formats
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0" style={{ filter: 'drop-shadow(0 0 5px rgba(91, 141, 239, 0.8))' }} fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z" /></svg>
                    Ongoing Support Node
                  </li>
                </ul>
              </div>
            </div>
            <div className="reveal relative rounded-[2rem] sm:rounded-[4.5rem] overflow-hidden shadow-[0_0_120px_rgba(91,141,239,0.25)] border border-gray-200 h-[400px] sm:h-[600px] group">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110"
                alt="Bureau Training"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy"></div>
            </div>
          </div>
        </section>

        {/* Training Offerings Grid */}
        <section className="py-24 relative z-10 bg-white/40 border-y border-gray-100 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden" id="training-galaxy-container">
            <GalaxyShader containerId="training-galaxy-container" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="reveal text-4xl sm:text-7xl font-display font-black text-gray-800 uppercase tracking-widest leading-none">Our Training <span className="text-accent">Offerings</span></h2>
              <p className="text-gray-500 mt-6 font-tech uppercase tracking-[0.4em]">Comprehensive Professional Matrix</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerings.map((offering, index) => (
                <div key={index} className="glass-panel glass-panel-hover p-10 rounded-[2.5rem] reveal border-gray-100 flex flex-col group">
                  <div className="space-y-6">
                    <span className="text-4xl block group-hover:rotate-12 transition">{offering.icon}</span>
                    <h3 className="text-2xl font-display font-bold text-gray-800 uppercase leading-tight">
                      {offering.title} <br />{offering.titleLine2}
                    </h3>
                    <p className="text-sm text-gray-500 font-sans leading-relaxed">{offering.description}</p>
                    {offering.items && (
                      <ul className="text-[9px] font-bold text-accent uppercase tracking-[0.2em] space-y-2 font-tech">
                        {offering.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {offering.gridItems && (
                      <div className="pt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-[8px] font-bold text-accent uppercase tracking-widest font-tech">
                        {offering.gridItems.map((item, i) => (
                          <span key={i}>{item}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flexible Learning Matrix */}
        <section className="py-24 relative z-10 bg-navy-light/40 border-y border-gray-100 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="text-center mb-24">
              <h2 className="reveal text-4xl sm:text-6xl font-display font-black text-gray-800 uppercase tracking-tighter leading-tight">Flexible <span className="text-accent">Learning Matrix</span></h2>
              <p className="text-gray-500 mt-4 font-tech uppercase tracking-[0.3em]">Formats & Delivery Intel</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {learningFormats.map((format, index) => (
                <div key={index} className="glass-panel p-8 rounded-3xl reveal border-gray-200 hover:border-accent transition group flex flex-col">
                  <h6 className="text-gray-800 font-display font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-3">
                    <span className="text-2xl">{format.icon}</span> {format.title}
                  </h6>

                  {/* Card Video Node */}
                  <div className="relative w-full aspect-video bg-black/40 border border-gray-200 rounded-[1.25rem] overflow-hidden mb-6 cursor-pointer group/video">
                    <img
                      src={format.image}
                      className="w-full h-full object-cover opacity-40 group-hover/video:scale-105 transition-transform duration-700"
                      alt={format.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent flex items-center justify-center group-hover/video:bg-accent/30 transition">
                      <div className="w-[50px] h-[50px] bg-accent/90 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(91,141,239,0.5)] group-hover/video:scale-110 group-hover/video:bg-white group-hover/video:text-accent transition-all duration-300">
                        <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4.516 7.548c0-.493.539-.796.933-.503l3.995 2.974c.316.235.316.712 0 .947l-3.995 2.974c-.394.293-.933-.009-.933-.503V7.548z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <ul className="text-[11px] text-gray-500 space-y-3 font-tech font-bold uppercase tracking-widest">
                    {format.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span>✓</span> <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits / Academy Advantage */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-20">
              <h2 className="reveal text-4xl sm:text-6xl font-display font-black text-gray-800 uppercase tracking-tighter leading-tight">The <span className="text-accent">Academy Advantage</span></h2>
              <p className="text-gray-500 mt-4 font-tech uppercase tracking-[0.3em]">Why Choose Eurocert Training?</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className={`glass-panel p-8 rounded-[2rem] border-gray-100 space-y-4 ${index === benefits.length - 1 ? 'text-center flex flex-col items-center justify-center' : ''}`}>
                  <span className="text-3xl">{benefit.icon}</span>
                  <h6 className="text-white font-bold uppercase text-[10px] tracking-widest">{benefit.title}</h6>
                  <p className="text-[10px] text-gray-500 uppercase leading-relaxed font-tech">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Hub */}
        <section id="contact" className="py-24 relative z-10 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row rounded-[2rem] sm:rounded-[4.5rem] overflow-hidden shadow-[0_0_120px_rgba(91,141,239,0.25)] border border-gray-200 reveal">
              {/* Left: Purple Panel */}
              <div className="lg:w-5/12 bg-accent p-10 sm:p-20 flex flex-col justify-between relative overflow-hidden text-left" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 100%)' }}>
                <div className="relative z-10">
                  <span className="text-[10px] font-tech font-black text-gray-800/60 uppercase tracking-[0.5em] mb-4 block leading-none">Get Started Now</span>
                  <h2 className="text-4xl sm:text-6xl font-display font-black text-gray-800 mb-8 tracking-tighter leading-none uppercase">
                    Request <br /><span className="text-navy">Intel</span>
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed mb-12 max-w-sm font-sans">
                    Our technical academy consultants are ready to identify the right training programs for your team's global mission.
                  </p>

                  <div className="space-y-10">
                    <div className="flex items-start gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shadow-lg border border-gray-200 shrink-0">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-navy/70 tracking-widest mb-1 leading-none">Academy Coordinates</p>
                        <p className="text-white font-tech font-bold text-xs leading-relaxed tracking-wider">Panchkula, Haryana Hub<br />India Industrial Cluster</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shadow-lg border border-gray-200 shrink-0">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-navy/70 tracking-widest mb-1 leading-none">Mission Signal</p>
                        <p className="text-white font-tech font-black text-xs sm:text-sm tracking-[0.1em] leading-tight">+91 7009007527<br />+91 9262740889</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:w-7/12 bg-white p-10 sm:p-20 relative text-left">
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-tech font-black uppercase text-gray-500 tracking-[0.4em] leading-none">Identity Node</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Identity Name *"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-white px-4 py-3.5 rounded-xl text-sm outline-none focus:border-accent focus:bg-gray-100 focus:shadow-[0_0_15px_rgba(91,141,239,0.2)] transition"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-tech font-black uppercase text-gray-500 tracking-[0.4em] leading-none">Data Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email access *"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-white px-4 py-3.5 rounded-xl text-sm outline-none focus:border-accent focus:bg-gray-100 focus:shadow-[0_0_15px_rgba(91,141,239,0.2)] transition"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-tech font-black uppercase text-gray-500 tracking-[0.4em] leading-none">Signal Node</label>
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number *"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-white px-4 py-3.5 rounded-xl text-sm outline-none focus:border-accent focus:bg-gray-100 focus:shadow-[0_0_15px_rgba(91,141,239,0.2)] transition"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-tech font-black uppercase text-gray-500 tracking-[0.4em] leading-none">Academy Sector</label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-white px-4 py-3.5 rounded-xl text-sm outline-none focus:border-accent focus:bg-gray-100 focus:shadow-[0_0_15px_rgba(91,141,239,0.2)] transition appearance-none"
                      >
                        <option value="">Select a training program</option>
                        {programOptions.map((option, i) => (
                          <option key={i} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-tech font-black uppercase text-gray-500 tracking-[0.4em] leading-none">Mission Brief</label>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Learning objectives summary protocol..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 text-white px-4 py-3.5 rounded-xl text-sm outline-none focus:border-accent focus:bg-gray-100 focus:shadow-[0_0_15px_rgba(91,141,239,0.2)] transition resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-5 bg-accent text-white font-tech font-black uppercase tracking-[0.5em] rounded-2xl hover:bg-accent hover:text-white transition-all duration-700 shadow-2xl"
                  >
                    Send Inquiry Transmission
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
