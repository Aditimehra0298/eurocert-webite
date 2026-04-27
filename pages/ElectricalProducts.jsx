import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UniverseBackground from '../components/UniverseBackground'
import NeuralCanvas from '../components/NeuralCanvas'

const directives = [
  {
    title: 'Low Voltage Directive (LVD) 2014/35/EU',
    description: 'Ensures electrical equipment operates safely within voltage limits (50–1000V AC / 75–1500V DC).'
  },
  {
    title: 'Electromagnetic Compatibility (EMC) Directive 2014/30/EU',
    description: 'Ensures devices do not generate or are not affected by electromagnetic interference.'
  },
  {
    title: 'RoHS Directive 2011/65/EU',
    description: 'Restricts hazardous substances like lead, mercury, cadmium in electrical equipment.'
  }
]

const capabilities = [
  {
    title: 'Product Assessment & Directive Mapping',
    description: 'Identify all applicable directives and standards based on product type and usage.'
  },
  {
    title: 'Harmonized Standards Selection',
    description: 'Application of EN standards to demonstrate presumption of conformity.'
  },
  {
    title: 'Risk Assessment & Safety Analysis',
    description: 'Hazard identification and mitigation aligned with EU safety requirements.'
  },
  {
    title: 'Testing Coordination (LVD / EMC)',
    description: 'End-to-end support with accredited labs for electrical safety and EMC testing.'
  },
  {
    title: 'Technical Documentation',
    description: 'Preparation of complete Technical File including circuit diagrams, BOM, test reports, risk analysis, and design descriptions.'
  },
  {
    title: 'Declaration of Conformity (DoC)',
    description: 'Drafting and validation of EU Declaration of Conformity.'
  },
  {
    title: 'CE Marking Guidance',
    description: 'Correct affixation, labeling, and compliance marking requirements.'
  }
]

const services = [
  'Product Classification & Compliance Strategy',
  'Gap Analysis & Pre-Compliance Review',
  'Electrical Safety Testing (LVD)',
  'EMC Testing & Evaluation',
  'RoHS Material Compliance Verification',
  'Technical File Compilation',
  'Labeling & User Manual Compliance',
  'EU Declaration of Conformity (DoC)',
  'CE Marking Affixation Support',
  'Importer / Distributor Compliance Guidance',
  'Ongoing Regulatory Updates & Change Management'
]

const workflow = [
  'Product Review',
  'Applicable Directives',
  'Testing',
  'Documentation',
  'CE Marking',
  'Market Entry'
]

const products = [
  'Consumer Electronics (TVs, chargers, appliances)',
  'Industrial Electrical Equipment',
  'IT & Telecom Equipment',
  'LED Lighting & Luminaires',
  'Power Supplies & Transformers',
  'Control Panels & Automation Systems',
  'Battery-Operated Devices',
  'Smart & IoT Devices'
]

const advantages = [
  { title: 'EU Market Access', desc: 'Legally place your products across all EU member states.' },
  { title: 'Reduced Risk of Non-Compliance', desc: 'Avoid penalties, recalls, and shipment rejections.' },
  { title: 'Faster Product Launch', desc: 'Streamlined certification process with expert guidance.' },
  { title: 'Enhanced Product Safety & Reliability', desc: 'Meet internationally recognized safety standards.' },
  { title: 'Strong Brand Credibility', desc: 'Build trust with distributors, regulators, and customers.' }
]

const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
  </svg>
)

const CardIcons = [
  () => (
    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
    </svg>
  ),
  () => (
    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  ),
  () => (
    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
    </svg>
  ),
  () => (
    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
    </svg>
  ),
  () => (
    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
  ),
  () => (
    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3a1 1 0 011 1v4a1 1 0 11-2 0V4a1 1 0 011-1zM9 10v1a1 1 0 11-2 0V4a1 1 0 112 0v6a1 1 0 11-2 0V10a1 1 0 110-2h2"/>
    </svg>
  ),
  () => (
    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
    </svg>
  ),
  () => (
    <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
    </svg>
  )
]

export default function ElectricalProducts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: 'Electronics & Electrical Products',
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
    setFormData({ name: '', email: '', mobile: '', service: 'Electronics & Electrical Products', message: '' })
  }

  return (
    <div className="font-sans antialiased selection:bg-blue-700 selection:text-white">
      <UniverseBackground />
      <NeuralCanvas />
      <Header />

      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#030a16] pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="/c21.png" 
            className="w-full h-full object-cover opacity-40" 
            alt="Electrical & Electronic Products"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030a16] via-[#030a16]/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block glass-panel px-6 py-2 rounded-full mb-8 border-white/30">
            <span className="text-[9px] font-tech font-bold text-white uppercase tracking-[0.5em]">CE Marking (LVD / EMC / RoHS)</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-wide mb-4 leading-none uppercase hero-text-shadow">
            Electrical & <span className="text-blue-300">Electronic Products</span>
          </h1>
          <p className="text-sm md:text-xl text-white/80 font-tech font-bold uppercase tracking-[0.3em]">
            Power Your Products into the European Market—Safely & Compliantly
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 uppercase mb-4">
              Overview of EU Directives
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Electrical and electronic products placed in the EU must comply with multiple directives ensuring safety, performance, and environmental responsibility.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {directives.map((item, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl border border-amber-200/50 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-[#030a16] via-[#0a1628] to-[#030a16] relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase mb-4">
              Our Core Capabilities
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-amber-200/30 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
                      {CardIcons[idx % CardIcons.length]()}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="/ss.png" alt="Core Capabilities" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 uppercase mb-4">
              End-to-End Compliance Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive solutions to ensure your electrical products meet all EU regulatory requirements</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative">
                <img src="/ee.png" alt="Compliance Services" className="w-full h-[500px] object-cover rounded-2xl shadow-2xl" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 to-transparent rounded-b-2xl">
                  <h3 className="text-white font-display font-bold text-lg">Compliance Services</h3>
                  <p className="text-white/70 text-sm">Complete CE marking solutions</p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, idx) => (
                <div key={idx} className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-amber-200 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shrink-0">
                    <i className="fas fa-check"></i>
                  </div>
                  <span className="text-slate-800 font-medium text-sm leading-relaxed group-hover:text-amber-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-[#030a16] via-[#0a1628] to-[#030a16] relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase mb-4">
              Compliance Workflow
            </h2>
            <p className="text-white/70">A structured process to ensure zero compliance gaps.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0">
            {workflow.map((step, idx) => (
              <div key={idx} className="flex items-center">
                <div className="glass-card px-6 py-4 rounded-xl border border-amber-200/30 bg-white/5">
                  <span className="text-amber-400 font-display font-bold">{idx + 1}</span>
                  <span className="ml-2 text-white font-medium">{step}</span>
                </div>
                {idx < workflow.length - 1 && (
                  <div className="hidden md:block w-8 h-0.5 bg-amber-400/30 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 uppercase mb-4">
              Products We Cover
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white/60 rounded-lg border border-gray-100">
                <svg className="w-5 h-5 text-blue-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
                <span className="text-slate-800 font-medium">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-[#030a16] via-[#0a1628] to-[#030a16] relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase mb-4">
              Key Advantages
            </h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {advantages.map((adv, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white mb-2">{adv.title}</h3>
                <p className="text-white/70 text-sm">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 uppercase mb-4">
              Who We Support
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Electronics Manufacturers & Exporters', 'OEM / ODM Companies', 'Startups launching new electronic products', 'Importers & Distributors in EU markets'].map((item, idx) => (
              <span key={idx} className="px-6 py-3 bg-blue-100 text-blue-800 font-medium rounded-full">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-[#030a16] via-[#0a1628] to-[#030a16] relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase mb-6">
            Ready to Launch Your Electrical Product in Europe?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Ensure full compliance with LVD, EMC & RoHS—without delays or risks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-amber-500 text-white font-display font-bold rounded-full hover:bg-amber-600 hover:shadow-xl transition-all duration-300">
              Get Free Consultation
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-400 font-display font-bold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300">
              Speak with Compliance Expert
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-blue-50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-black text-slate-900 uppercase mb-2">
                Request a Consultation
              </h2>
              <p className="text-slate-600">Get expert guidance on your compliance needs</p>
            </div>
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl border border-gray-200/50">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mobile</label>
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="+1 234 567 8900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Service</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition">
                    <option>Electronics & Electrical Products</option>
                    <option>LVD/EMC Certification</option>
                    <option>RoHS Compliance</option>
                    <option>CE Marking</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none transition" placeholder="Tell us about your product and compliance requirements..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-blue-700 text-white font-display font-bold rounded-lg hover:bg-blue-800 transition-colors duration-300">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}