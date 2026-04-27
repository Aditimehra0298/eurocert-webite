import { useEffect, useRef } from 'react'
import { useState } from 'react'

const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
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

export default function ElectricalProducts() {
  const pageRef = useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', service: 'Electronics & Electrical Products', message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', email: '', mobile: '', service: 'Electronics & Electrical Products', message: '' })
  }

  const directives = [
    { title: 'Low Voltage Directive (LVD) 2014/35/EU', description: 'Ensures electrical equipment operates safely within voltage limits (50–1000V AC / 75–1500V DC).' },
    { title: 'Electromagnetic Compatibility (EMC) Directive 2014/30/EU', description: 'Ensures devices do not generate or are not affected by electromagnetic interference.' },
    { title: 'RoHS Directive 2011/65/EU', description: 'Restricts hazardous substances like lead, mercury, cadmium in electrical equipment.' }
  ]

  const capabilities = [
    { title: 'Product Assessment & Directive Mapping', description: 'Identify all applicable directives and standards based on product type and usage.' },
    { title: 'Harmonized Standards Selection', description: 'Application of EN standards to demonstrate presumption of conformity.' },
    { title: 'Risk Assessment & Safety Analysis', description: 'Hazard identification and mitigation aligned with EU safety requirements.' },
    { title: 'Testing Coordination (LVD / EMC)', description: 'End-to-end support with accredited labs for electrical safety and EMC testing.' },
    { title: 'Technical Documentation', description: 'Preparation of complete Technical File including circuit diagrams, BOM, test reports, risk analysis.' },
    { title: 'Declaration of Conformity (DoC)', description: 'Drafting and validation of EU Declaration of Conformity.' }
  ]

  const services = [
    'Product Classification & Compliance Strategy', 'Gap Analysis & Pre-Compliance Review', 'Electrical Safety Testing (LVD)', 'EMC Testing & Evaluation',
    'RoHS Material Compliance Verification', 'Technical File Compilation', 'Labeling & User Manual Compliance', 'EU Declaration of Conformity (DoC)',
    'CE Marking Affixation Support', 'Importer / Distributor Compliance Guidance', 'Ongoing Regulatory Updates & Change Management'
  ]

  const workflow = ['Product Review', 'Applicable Directives', 'Testing', 'Documentation', 'CE Marking', 'Market Entry']
  const products = [
    'Consumer Electronics (TVs, chargers, appliances)', 'Industrial Electrical Equipment', 'IT & Telecom Equipment', 'LED Lighting & Luminaires',
    'Power Supplies & Transformers', 'Control Panels & Automation Systems', 'Battery-Operated Devices', 'Smart & IoT Devices'
  ]
  const advantages = [
    { title: 'EU Market Access', desc: 'Legally place your products across all EU member states.' },
    { title: 'Reduced Risk of Non-Compliance', desc: 'Avoid penalties, recalls, and shipment rejections.' },
    { title: 'Faster Product Launch', desc: 'Streamlined certification process with expert guidance.' },
    { title: 'Enhanced Product Safety & Reliability', desc: 'Meet internationally recognized safety standards.' },
    { title: 'Strong Brand Credibility', desc: 'Build trust with distributors, regulators, and customers.' }
  ]

  return (
    <div ref={pageRef}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030a16]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <img src="https://i0.wp.com/www.eurocert.asia/wp-content/uploads/2020/06/cropped-LOGO_EUROCERT_v2-2.png?fit=12691181&ssl=1" alt="EUROCERT" className="h-12" />
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="#hero" className="text-white/80 hover:text-blue-400 transition">Home</a>
            <a href="#directives" className="text-white/80 hover:text-blue-400 transition">Directives</a>
            <a href="#services" className="text-white/80 hover:text-blue-400 transition">Services</a>
            <a href="#contact" className="text-white/80 hover:text-blue-400 transition">Contact</a>
          </nav>
          <a href="#contact" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-500 transition">Get Consultation</a>
        </div>
      </header>

      <section id="hero" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#030a16] pt-32 pb-16">
        <div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-gradient-to-t from-[#030a16] via-[#030a16]/50 to-transparent"></div></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block px-6 py-2 rounded-full mb-8 border border-white/30 bg-white/5 backdrop-blur-sm">
            <span className="text-white text-xs font-bold uppercase tracking-[0.5em]">CE Marking (LVD / EMC / RoHS)</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-none">Electrical & <span className="text-blue-300">Electronic Products</span></h1>
          <p className="text-white/80 text-sm md:text-xl font-bold uppercase tracking-[0.3em]">Power Your Products into the European Market—Safely & Compliantly</p>
        </div>
      </section>

      <section id="directives" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-4">Overview of EU Directives</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">Electrical and electronic products placed in the EU must comply with multiple directives ensuring safety, performance, and environmental responsibility.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {directives.map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-blue-200/50 hover:border-blue-600/40 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-4">Our Core Capabilities</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white/80 rounded-xl border border-gray-200/50">
                <CheckIcon />
                <div><h3 className="font-bold text-slate-900 mb-2">{item.title}</h3><p className="text-slate-600 text-sm">{item.description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-4">End-to-End Compliance Services</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white/60 rounded-lg border border-gray-100">
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                <span className="text-slate-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-4">Compliance Workflow</h2><p className="text-slate-600">A structured process to ensure zero compliance gaps.</p></div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0">
            {workflow.map((step, idx) => (
              <div key={idx} className="flex items-center">
                <div className="px-6 py-4 bg-blue-50 rounded-xl border border-blue-200/50 bg-white/80">
                  <span className="text-blue-700 font-bold">{idx + 1}</span>
                  <span className="ml-2 text-slate-800 font-medium">{step}</span>
                </div>
                {idx < workflow.length - 1 && <div className="hidden md:block w-8 h-0.5 bg-blue-300/50 mx-2"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-4">Products We Cover</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white/60 rounded-lg border border-gray-100">
                <svg className="w-5 h-5 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
                <span className="text-slate-800 font-medium">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-4">Key Advantages</h2></div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {advantages.map((adv, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{adv.title}</h3>
                <p className="text-slate-600 text-sm">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 uppercase mb-6">Ready to Launch Your Electrical Product in Europe?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">Ensure full compliance with LVD, EMC & RoHS—without delays or risks.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact-form" className="px-8 py-4 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-800 hover:shadow-xl transition-all duration-300">Get Free Consultation</a>
            <a href="#contact-form" className="px-8 py-4 bg-transparent border-2 border-blue-700 text-blue-700 font-bold rounded-full hover:bg-blue-50 transition-all duration-300">Speak with Compliance Expert</a>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 uppercase mb-2">Request a Consultation</h2>
              <p className="text-slate-600">Get expert guidance on your compliance needs</p>
            </div>
            <form onSubmit={handleSubmit} className="p-8 bg-white rounded-2xl border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div><label className="block text-sm font-medium text-slate-700 mb-2">Name</label><input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="Your name" /></div>
                <div><label className="block text-sm font-medium text-slate-700 mb-2">Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="your@email.com" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div><label className="block text-sm font-medium text-slate-700 mb-2">Mobile</label><input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="+1 234 567 8900" /></div>
                <div><label className="block text-sm font-medium text-slate-700 mb-2">Service</label><select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition"><option>Electronics & Electrical Products</option><option>LVD/EMC Certification</option><option>RoHS Compliance</option><option>CE Marking</option></select></div>
              </div>
              <div className="mb-6"><label className="block text-sm font-medium text-slate-700 mb-2">Message</label><textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="Tell us about your product and compliance requirements..."></textarea></div>
              <button type="submit" className="w-full py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors duration-300">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#030a16] py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div><img src="https://i0.wp.com/www.eurocert.asia/wp-content/uploads/2020/06/cropped-LOGO_EUROCERT_v2-2.png?fit=12691181&ssl=1" alt="EUROCERT" className="h-12 mb-4" /><p className="text-white/60">EUROCERT provides professional CE certification services for electrical and electronic products.</p></div>
            <div><h4 className="text-white font-bold mb-4">Contact</h4><p className="text-white/60 text-sm">📞 +91 7009007527</p><p className="text-white/60 text-sm">✉️ info@eurocert.asia</p><p className="text-white/60 text-sm">🌐 www.eurocert.asia</p></div>
            <div><h4 className="text-white font-bold mb-4">Directives</h4><p className="text-white/60 text-sm">LVD 2014/35/EU</p><p className="text-white/60 text-sm">EMC 2014/30/EU</p><p className="text-white/60 text-sm">RoHS 2011/65/EU</p></div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40 text-sm">© 2024 EUROCERT. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}