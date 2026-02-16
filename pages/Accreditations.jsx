import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UniverseBackground from '../components/UniverseBackground'
import NeuralCanvas from '../components/NeuralCanvas'
import GalaxyShader from '../components/GalaxyShader'

const stats = [
  { number: '25+', label: 'Years of Excellence' },
  { number: '50+', label: 'Certification Types' },
  { number: '3', label: 'Continents Served' },
  { number: '1000+', label: 'Certified Clients' },
]

const heroStats = [
  { emoji: '🏆', title: '25+ Years', subtitle: 'Excellence' },
  { emoji: '🌍', title: 'Global', subtitle: 'Reach' },
  { emoji: '✓', title: 'Accredited', subtitle: 'Verified' },
  { emoji: '🔒', title: 'Trusted', subtitle: 'Intelligence' },
]

const milestones = [
  {
    year: '1998',
    title: 'Foundation established',
    description: 'Eurocert SA was founded as an Independent Third Party Inspection and Certification Body, marking the beginning of our commitment to excellence.',
  },
  {
    year: '2000s',
    title: 'International expansion',
    description: 'Expanded operations across Asia, Europe, and Africa, establishing ourselves as a trusted certification partner globally.',
  },
  {
    year: '2010s',
    title: 'Diversified services',
    description: 'Added comprehensive services including SMETA audits, GlobalGAP, ISO certifications, and CE marking services across multiple industries.',
  },
  {
    year: '2024',
    title: 'Leading Certification Body',
    description: 'Today, we stand as one of the most trusted and recognized certification bodies, serving clients across three continents with unwavering commitment to quality and integrity.',
    isLast: true,
  },
]

const accreditationCards = [
  {
    icon: '🏆',
    title: 'Social Accountability',
    description: 'SA 8000, SEDEX/SMETA, Social Compliance protocols for global supply chains.',
  },
  {
    icon: '🌾',
    title: 'Food Safety & Agri',
    description: 'GlobalGAP, IFS, FSSC 22000, HACCP standards for food chain integrity.',
  },
  {
    icon: '🔒',
    title: 'Information Security',
    description: 'ISO 27001 ISMS and dedicated Data Protection audits to secure organizational assets in the digital ecosystem.',
  },
  {
    icon: '⚙️',
    title: 'Management Systems',
    description: 'Core ISO standards including 9001 (Quality), 14001 (Environment), and 45001 (Health & Safety).',
  },
  {
    icon: '🇪🇺',
    title: 'CE & EU Directives',
    description: 'CE Certification, PED, ATEX, and EN standards for unrestricted European market movement.',
  },
  {
    icon: '🌍',
    title: 'Sustainability Solutions',
    description: 'ISO 14064, Carbon Footprint Assessment, and environmental impact validation for future-ready industries.',
  },
]

const globalPresence = [
  {
    emoji: '🌏',
    title: 'Asia Region',
    description: 'Extensive operations across India, China, Bangladesh, and broader Asian markets.',
  },
  {
    emoji: '🇪🇺',
    title: 'Europe Region',
    description: 'Strong presence with Eurocert SA headquarters and European market expertise node.',
  },
  {
    emoji: '🌍',
    title: 'Africa Region',
    description: 'Growing operations providing SMETA audits and social compliance services.',
  },
  {
    emoji: '🌐',
    title: 'International',
    description: 'Global recognition facilitating worldwide market access.',
  },
]

const whyChooseUs = [
  {
    icon: '🤝',
    title: 'Trust & Credibility',
    description: 'Independent verification that your organization meets international standards, building global trust.',
  },
  {
    icon: '🚀',
    title: 'Market Access',
    description: 'Unlocking European, Asian, and international markets by demonstrating compliance node integrity.',
  },
  {
    icon: '📈',
    title: 'Continuous Quality',
    description: 'Identifying improvement nodes and enhancing operational efficiency through structured auditing.',
  },
  {
    icon: '⭐',
    title: 'Competitive Edge',
    description: 'Stand out with internationally recognized certifications that demonstrate compliance excellence.',
  },
]

export default function Accreditations() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-white">
      {/* Global Visual Engine */}
      <UniverseBackground />
      <NeuralCanvas />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[95svh] flex flex-col items-center justify-center overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-24">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20 scale-105"
          >
            <source src="/Video_Generation_From_Image.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#f0f5fa]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block glass-panel px-6 py-2 rounded-full mb-8 border-accent/30 animate-pulse">
            <span className="text-[9px] font-tech font-bold text-accent uppercase tracking-[0.5em]">Accredited Excellence Since 1998</span>
          </div>
          
          <h1 className="text-[clamp(2.2rem,11vw,8rem)] font-display font-black text-gray-800 tracking-[0.05em] sm:tracking-[0.1em] mb-4 leading-none uppercase">
            Accredited <br /><span className="text-accent">Excellence</span>
          </h1>
          
          <p className="text-sm md:text-xl text-gray-500 font-tech font-bold uppercase tracking-[0.3em] max-w-4xl mx-auto leading-relaxed">
            Internationally recognized certifications that validate our commitment to quality, integrity, and professional excellence across global markets
          </p>

          {/* Hero Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-20 max-w-5xl mx-auto">
            {heroStats.map((stat, index) => (
              <div key={index} className="glass-panel min-h-[130px] sm:min-h-[160px] flex flex-col justify-center items-center p-4 sm:p-6 text-center rounded-[2rem] group hover:border-accent hover:bg-accent/5 transition-all duration-500">
                <span className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform duration-500">{stat.emoji}</span>
                <span className="text-[9px] sm:text-[11px] font-display font-black text-gray-800 uppercase tracking-[0.2em] leading-tight">
                  {stat.title} <br /><span className="text-accent opacity-60">{stat.subtitle}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="relative">
        {/* Statistics Banner */}
        <section className="py-12 sm:py-24 relative z-10 bg-accent/5 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="reveal">
                <span className="text-4xl md:text-7xl font-display font-black text-gray-800 block mb-1 leading-none">{stat.number}</span>
                <span className="text-[8px] sm:text-[11px] font-tech font-bold text-accent uppercase tracking-[0.4em]">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Our Foundation */}
        <section className="py-20 sm:py-32 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div className="reveal space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-accent font-tech font-bold uppercase tracking-[0.4em] text-xs">Technical Authority</span>
                <h2 className="text-4xl sm:text-6xl font-display font-black text-gray-800 leading-tight uppercase tracking-tighter">Our <span className="text-accent">Foundation</span></h2>
                <p className="text-sm text-gray-500 font-tech uppercase tracking-[0.2em]">Independent Third-Party Certification Body</p>
              </div>
              <div className="space-y-6 text-gray-500 font-sans text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <p>
                  <strong className="text-white font-bold">Eurocert Inspection Services Pvt. Ltd.</strong> is affiliated with Eurocert SA, an accredited Certification Body founded in <strong className="text-accent">1998</strong>.
                </p>
                <p>
                  With over 25 years of experience, Eurocert SA operates with a National, European & International range of activities across scientific disciplines. Our accreditations demonstrate a commitment to the highest standards of quality and professional excellence.
                </p>
                <p>
                  We provide unbiased, objective assessments that help organizations achieve compliance, improve operations, and gain access to global markets.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 shadow-[0_0_20px_rgba(91,141,239,0.1)] flex items-center justify-center text-2xl">🎯</div>
                  <h6 className="text-[10px] font-bold text-gray-800 uppercase tracking-widest font-tech leading-tight">Unbiased Assessment</h6>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest">Independent evaluations</p>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 shadow-[0_0_20px_rgba(91,141,239,0.1)] flex items-center justify-center text-2xl">✅</div>
                  <h6 className="text-[10px] font-bold text-gray-800 uppercase tracking-widest font-tech leading-tight">Quality Standards</h6>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest">International benchmarks</p>
                </div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 shadow-[0_0_20px_rgba(91,141,239,0.1)] flex items-center justify-center text-2xl">🌐</div>
                  <h6 className="text-[10px] font-bold text-gray-800 uppercase tracking-widest font-tech leading-tight">Global Recognition</h6>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest">Worldwide market access</p>
                </div>
              </div>
            </div>
            <div className="reveal relative rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden shadow-xl border border-gray-200 group h-[350px] sm:h-[500px] lg:h-[600px] order-1 lg:order-2">
              <img src="/a1.png" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" alt="Foundation Hub" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="py-24 relative z-10 bg-navy-light/20 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24">
            <div className="text-center mb-24">
              <h2 className="reveal text-4xl sm:text-7xl font-display font-black text-gray-800 uppercase tracking-widest">Our <span className="text-accent">Journey</span></h2>
              <p className="text-gray-500 mt-4 font-tech uppercase tracking-[0.3em]">Milestones of Excellence</p>
            </div>
            
            <div className="max-w-4xl mx-auto px-4">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`reveal relative pl-10 md:pl-16 border-l-2 border-accent/20 ${milestone.isLast ? 'border-none pb-0' : 'pb-12 md:pb-20'}`}
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_#5b8def]"></div>
                  <span className="text-accent font-tech font-black text-2xl tracking-widest mb-2 block">{milestone.year}</span>
                  <h4 className="text-xl font-display font-bold text-gray-800 mb-4 uppercase leading-tight">{milestone.title}</h4>
                  <p className="text-sm text-gray-500 font-sans leading-relaxed">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recognitions & Accreditations Grid */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-24">
              <h2 className="reveal text-4xl sm:text-7xl font-display font-black text-gray-800 uppercase tracking-widest leading-none">Our <span className="text-accent">Accreditations</span></h2>
              <p className="text-gray-500 mt-4 font-tech uppercase tracking-[0.3em]">Recognized Excellence Across Industries</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accreditationCards.map((card, index) => (
                <div key={index} className="glass-panel glass-panel-hover p-10 rounded-[2.5rem] reveal border-gray-100 group">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 shadow-[0_0_20px_rgba(91,141,239,0.1)] flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition">{card.icon}</div>
                  <h4 className="text-xl font-display font-bold text-gray-800 mb-4 uppercase leading-tight" dangerouslySetInnerHTML={{ __html: card.title.replace(' ', ' <br />') }}></h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-sans">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence Matrix */}
        <section className="py-24 relative z-10 bg-navy-light/40 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="reveal space-y-10 text-center lg:text-left">
                <h2 className="text-4xl sm:text-6xl font-display font-black text-gray-800 uppercase tracking-tighter leading-tight">Global <span className="text-accent">Presence</span></h2>
                <p className="text-gray-500 text-lg font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Eurocert operates with a National, European & International range of activities, providing certification services across multiple continents.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-2xl mx-auto lg:mx-0">
                  {globalPresence.map((region, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-3xl">{region.emoji}</span>
                      <div>
                        <h6 className="text-white font-bold uppercase text-[10px] tracking-widest mb-1">{region.title}</h6>
                        <p className="text-xs text-gray-500">{region.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] font-tech leading-relaxed">
                    Expert Team: Trained in India, China, Bangladesh, Bulgaria, and Italy.
                  </p>
                </div>
              </div>
              <div className="reveal relative rounded-[3rem] overflow-hidden border border-gray-200 group h-[350px] sm:h-[450px] lg:h-[550px]">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
                  <source src="/51559-465226590_medium.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 relative z-10 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-24">
              <h2 className="reveal text-4xl sm:text-7xl font-display font-black text-gray-800 uppercase tracking-widest leading-none">Why <span className="text-accent">Choose Us</span></h2>
              <p className="text-gray-500 mt-6 font-tech uppercase tracking-[0.3em]">The Value of Accredited Certification</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="glass-panel p-8 rounded-3xl reveal border-gray-200 text-center flex flex-col items-center group hover:border-accent transition">
                  <div className="text-3xl mb-6 group-hover:scale-110 transition">{item.icon}</div>
                  <h5 className="text-gray-800 font-display font-bold uppercase mb-4 text-sm tracking-widest leading-tight">{item.title}</h5>
                  <p className="text-xs text-gray-500 font-sans leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative z-10 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden shadow-xl border border-gray-100 reveal">
              {/* Left Content Panel */}
              <div className="lg:w-7/12 bg-white p-10 sm:p-20 relative order-2 lg:order-1">
                <div className="absolute inset-0 overflow-hidden">
                  <GalaxyShader />
                </div>
                <div className="relative z-10 text-center lg:text-left">
                  <h2 className="text-4xl sm:text-7xl font-display font-black text-gray-800 mb-6 tracking-tighter leading-none uppercase">Ready to get <br /><span className="text-accent">Certified?</span></h2>
                  <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 font-sans">Partner with an accredited certification body trusted by organizations worldwide. Contact us to learn more about how we can help you achieve your compliance goals.</p>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                    <Link to="/#contact" className="px-10 py-5 bg-accent text-white rounded-2xl font-tech font-black uppercase tracking-[0.4em] hover:bg-white hover:text-navy transition shadow-xl text-xs sm:text-sm border border-gray-200">Contact Mission Hub</Link>
                    <Link to="/ce-certification" className="px-10 py-5 glass-panel text-white rounded-2xl font-tech font-black uppercase tracking-[0.4em] hover:bg-accent transition text-xs sm:text-sm">View Services</Link>
                  </div>
                </div>
              </div>
              {/* Right Info Panel */}
              <div className="lg:w-5/12 bg-accent p-10 sm:p-20 flex flex-col justify-center text-center sm:text-left order-1 lg:order-2" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)' }}>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-gray-800 uppercase mb-10 leading-tight">Bureau Access Point <br />Global Node</h3>
                <p className="text-3xl sm:text-4xl font-tech font-black text-gray-800 tracking-widest mb-4 leading-none">+91 7009007527</p>
                <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-[0.5em] font-tech font-bold">Secure Signal Channel Active</p>
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
