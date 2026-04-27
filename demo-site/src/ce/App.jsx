import { useEffect, useRef } from 'react'
import { useState } from 'react'

const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const els = root.querySelectorAll('[data-reveal]')
    els.forEach((el) => el.classList.add('scroll-hidden'))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const anim = el.dataset.reveal || 'reveal-up'
          const delay = el.dataset.revealDelay || '0'
          el.style.animationDelay = `${delay}ms`
          el.classList.remove('scroll-hidden')
          el.classList.add(anim)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.1 })
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function CECertification() {
  const pageRef = useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', service: 'CE Certification', message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', email: '', mobile: '', service: 'CE Certification', message: '' })
  }

  const directives = [
    { title: 'CE Certification for Construction Products', shortTitle: 'Construction Products (CPR)', description: 'Construction products must comply with the Construction Products Regulation (CPR) to be placed on the EU market.', items: ['Building materials', 'Structural elements', 'Insulation materials', 'Roofing products', 'Windows and doors'] },
    { title: 'CE Certification for Lifts', shortTitle: 'Lifts Directive (2014/33/EU)', description: 'Lifts and lifting equipment must comply with the Lifts Directive to be sold in the EU.', items: ['Passenger lifts', 'Goods lifts', 'Service lifts', 'Lifting platforms', 'Safety components'] },
    { title: 'CE Marking for Machinery', shortTitle: 'Machinery Directive (2006/42/EC)', description: 'The Machinery Directive requires machinery placed on the EU market to be CE marked.', items: ['Industrial machinery', 'Agricultural machinery', 'Construction machinery', 'Food processing equipment', 'Packaging machinery'] },
    { title: 'PED Certification (2014/68/EU)', shortTitle: 'Pressure Equipment Directive', description: 'The Pressure Equipment Directive applies to pressure equipment with maximum allowable pressure greater than 0.5 bar.', items: ['Pressure vessels', 'Steam generators', 'Piping systems', 'Safety accessories', 'Pressure accessories'] }
  ]

  const technicalAnnex = [
    { title: 'EN 15085 Railway Welding', description: 'Specialized certification for fusion welding of railway vehicles and components.' },
    { title: 'EN 1090 Structural', description: 'CE marking for structural steel and aluminum components.' },
    { title: 'ISO 3834 Fusion Quality', description: 'Quality requirements for fusion welding of metallic materials.' }
  ]

  return (
    <div ref={pageRef}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img src="https://i0.wp.com/www.eurocert.asia/wp-content/uploads/2020/06/cropped-LOGO_EUROCERT_v2-2.png?fit=12691181&ssl=1" alt="EUROCERT" className="h-12" />
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="#hero" className="text-slate-600 hover:text-accent transition">Home</a>
            <a href="#services" className="text-slate-600 hover:text-accent transition">Services</a>
            <a href="#annex" className="text-slate-600 hover:text-accent transition">Technical Annex</a>
            <a href="#contact" className="text-slate-600 hover:text-accent transition">Contact</a>
          </nav>
          <a href="#contact" className="px-6 py-2 bg-accent text-white rounded-lg font-medium hover:bg-blue-600 transition">Get Consultation</a>
        </div>
      </header>

      <section id="hero" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-100 to-white pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block px-6 py-2 rounded-full mb-8 border border-accent/30 bg-accent/5">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.5em]">European Compliance Node</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-800 mb-4 leading-none">CE Certification <span className="text-accent">Services</span></h1>
          <p className="text-slate-500 text-sm md:text-xl font-bold uppercase tracking-[0.3em]">Enabling easy entry into European markets</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs">Technical Conformity Node</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 uppercase">CE Certification</h2>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed">CE marking is a mandatory conformity marking for products sold within the European Economic Area (EEA). It indicates that a product has been assessed and deemed to meet EU safety, health, and environmental protection requirements.</p>
            <p className="text-slate-500">At <strong className="text-slate-800 font-semibold">Eurocert Asia</strong>, we provide comprehensive CE certification services for a wide range of products.</p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {['Expert Guidance', 'Directive Compliance', 'Fast-track Audit', 'Global Market Support'].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-800 font-semibold"><CheckIcon />{item}</div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-lg h-[350px] md:h-[450px]">
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="CE Certification" />
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-slate-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Comprehensive Services</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 uppercase">Our <span className="text-accent">Certifications</span></h2>
          </div>
          <div className="space-y-16 md:space-y-24">
            {directives.map((directive, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`relative rounded-[2rem] overflow-hidden shadow-lg h-[300px] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt={directive.title} />
                </div>
                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <span className="px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.3em] rounded-full">{directive.shortTitle}</span>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 uppercase">{directive.title}</h3>
                  <p className="text-slate-500 text-base">{directive.description}</p>
                  <div>
                    <h4 className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4">Our services cover:</h4>
                    <ul className="space-y-2">
                      {directive.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600"><CheckIcon />{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="annex" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-black text-slate-800 uppercase">Technical <span className="text-accent">Annex</span></h3>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Additional specialized certifications for welding and structural components</p>
        </div>
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {technicalAnnex.map((item, index) => (
            <div key={index} className="p-8 bg-slate-50 rounded-2xl border border-gray-200 hover:border-accent/30 transition group">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h5 className="text-accent font-bold text-sm mb-4 tracking-[0.2em] uppercase">{item.title}</h5>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-slate-800 uppercase">Why Choose <span className="text-accent">Eurocert</span></h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: 'Expert Team', desc: 'Highly qualified professionals with extensive industry experience' },
              { icon: '⚡', title: 'Fast Processing', desc: 'Streamlined certification process for quick market entry' },
              { icon: '🌍', title: 'Global Recognition', desc: 'Internationally recognized certifications accepted worldwide' },
              { icon: '🤝', title: 'Full Support', desc: 'End-to-end support from application to certification' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:border-accent/30 transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-slate-800 font-bold uppercase tracking-wide mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto p-10 sm:p-16 bg-slate-50 rounded-[3rem] border border-gray-200">
            <h3 className="text-3xl sm:text-4xl font-black text-slate-800 uppercase mb-6">Ready to Get <span className="text-accent">Certified?</span></h3>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto">Contact our team of experts today to discuss your CE certification requirements.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg">Get Started</a>
              <a href="tel:+917009007527" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-slate-600 font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-gray-200 transition-all duration-300 border border-gray-200">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="p-8 bg-white rounded-2xl border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div><label className="block text-sm font-medium text-slate-700 mb-2">Name</label><input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition" placeholder="Your name" /></div>
                <div><label className="block text-sm font-medium text-slate-700 mb-2">Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition" placeholder="your@email.com" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div><label className="block text-sm font-medium text-slate-700 mb-2">Mobile</label><input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition" placeholder="+1 234 567 8900" /></div>
                <div><label className="block text-sm font-medium text-slate-700 mb-2">Certification Type</label><select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"><option>CE Certification</option><option>Machinery Directive</option><option>Pressure Equipment (PED)</option><option>Lifts Directive</option></select></div>
              </div>
              <div className="mb-6"><label className="block text-sm font-medium text-slate-700 mb-2">Message</label><textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition" placeholder="Tell us about your certification requirements..."></textarea></div>
              <button type="submit" className="w-full py-4 bg-accent text-white font-bold rounded-lg hover:bg-blue-600 transition-colors">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div><img src="https://i0.wp.com/www.eurocert.asia/wp-content/uploads/2020/06/cropped-LOGO_EUROCERT_v2-2.png?fit=12691181&ssl=1" alt="EUROCERT" className="h-12 mb-4" /><p className="text-slate-400">EUROCERT provides professional CE certification services for products exported to European markets.</p></div>
            <div><h4 className="text-white font-bold mb-4">Contact</h4><p className="text-slate-400 text-sm">📞 +91 7009007527</p><p className="text-slate-400 text-sm">✉️ info@eurocert.asia</p><p className="text-slate-400 text-sm">🌐 www.eurocert.asia</p></div>
            <div><h4 className="text-white font-bold mb-4">Certifications</h4><p className="text-slate-400 text-sm">CE Marking</p><p className="text-slate-400 text-sm">ISO 9001</p><p className="text-slate-400 text-sm">ISO 14001</p></div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">© 2024 EUROCERT. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}