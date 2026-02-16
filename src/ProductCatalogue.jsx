import { Link } from 'react-router-dom'
import { useEffect, useState, useMemo } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { addContact } from './hooks/useContacts'

const catalogueData = [
  {
    category: 'Management System Certifications',
    icon: 'fa-cogs',
    items: [
      { code: 'ISO 9001', name: 'Quality Management System' },
      { code: 'ISO 14001', name: 'Environmental Management System' },
      { code: 'ISO 22716', name: 'Good Industrial Practices - Cosmetic Products' },
      { code: 'ISO 22301', name: 'Business Continuity Management' },
      { code: 'EN 15038', name: 'Translation Services' },
      { code: 'EN 15224', name: 'Quality of Health Services' },
      { code: 'ISO 28000', name: 'Supply Chain Security Management Systems' },
      { code: 'ISO 18788', name: 'Management System for Private Security Agencies' },
      { code: 'ISO 55001', name: 'Asset Management System' },
      { code: 'ISO 3834', name: 'Welding Fabrication Management Certification' },
      { code: 'ISO 45001', name: 'Health and Safety Management System' },
      { code: 'ISO 39001', name: 'Road Safety Management System' },
    ],
  },
  {
    category: 'Information Security',
    icon: 'fa-shield-alt',
    items: [
      { code: 'ISO 27001', name: 'Information Security Management System' },
      { code: 'ISO 20000', name: 'IT Service Management' },
      { code: 'ISO 27017', name: 'Cloud Security' },
      { code: 'ISO 27018', name: 'Cloud Security Management System' },
      { code: 'BS 10012', name: 'Data Protection' },
    ],
  },
  {
    category: 'Food Safety',
    icon: 'fa-utensils',
    items: [
      { code: 'ISO 22000', name: 'Food Safety Management System' },
      { code: 'GLOBAL GAP', name: 'Good Agricultural Practices' },
      { code: 'TESCO NURTURE', name: 'Tesco Nurture Scheme' },
      { code: 'IFS', name: 'International Featured Standards' },
      { code: 'FSSC 22000', name: 'Food Safety System Certification' },
      { code: 'GLOBAL GAP C.O.C', name: 'Chain of Custody' },
      { code: 'GLOBALGAP GRASP', name: 'Risk Assessment on Social Practice' },
      { code: 'EU ORGANIC', name: 'European Organic Certification' },
    ],
  },
  {
    category: 'Product Certifications',
    icon: 'fa-stamp',
    items: [
      { code: 'CE MARKING', name: 'Machinery' },
      { code: 'CE MARKING', name: 'PED / TPED / SPV' },
      { code: 'PI MARK', name: 'Transportable Pressure Equipment' },
      { code: 'CE MARKING', name: 'Construction Product Regulation' },
      { code: 'ATEX', name: 'Equipment for Explosive Atmospheres' },
      { code: 'RoHS', name: 'Restriction of Hazardous Substances' },
      { code: 'REACH', name: 'REACH Compliance' },
      { code: 'MED', name: 'Marine Equipment Directive' },
      { code: 'RID', name: 'Railway Interoperability Directive' },
      { code: 'CE MARKING', name: 'Lifts' },
      { code: 'CE MARKING LVD/EMC', name: 'LVD / EMC' },
    ],
  },
  {
    category: 'Sustainability',
    icon: 'fa-leaf',
    items: [
      { code: 'ASI', name: 'Aluminium Stewardship Initiative' },
      { code: 'CORSIA', name: 'Carbon Offsetting and Reduction Scheme' },
      { code: 'GHG', name: 'GHG Verification' },
      { code: 'ISO 14064', name: 'Greenhouse Gas Accounting & Verification' },
      { code: 'SEDEX', name: 'Supplier Ethical Data Exchange' },
      { code: 'SA 8000', name: 'Social Accountability' },
      { code: 'ISO 26000', name: 'Social Responsibility' },
      { code: 'EPD', name: 'Environment Product Declaration' },
      { code: 'ISO 50001', name: 'Energy Management System' },
      { code: 'WC', name: 'Water Conservation' },
    ],
  },
]

export default function ProductCatalogue() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const [search, setSearch] = useState('')
  const [showQuote, setShowQuote] = useState(false)
  const [quoteService, setQuoteService] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const filtered = useMemo(() => {
    if (!search.trim()) return catalogueData
    const q = search.toLowerCase()
    return catalogueData
      .map(cat => ({
        ...cat,
        items: cat.items.filter(
          item => item.code.toLowerCase().includes(q) || item.name.toLowerCase().includes(q) || cat.category.toLowerCase().includes(q)
        ),
      }))
      .filter(cat => cat.items.length > 0)
  }, [search])

  const openQuote = (service = '') => {
    setQuoteService(service)
    setFormData({ name: '', email: '', phone: '', company: '', message: service ? `I am interested in ${service} certification.` : '' })
    setSubmitted(false)
    setShowQuote(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addContact({ name: formData.name, email: formData.email, phone: formData.phone, service: 'Product Catalogue Request', message: formData.message || `Company: ${formData.company}`, source: 'Product Catalogue' })
    setSubmitted(true)
  }

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/l2.png" alt="Product Catalogue" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-[#030a16] via-[#030a16]/70 to-[#030a16]/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Our Services</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Product <span className="text-eurogold-400">Catalogue</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm heading-font mt-4">
            <span className="text-white/70">Product Catalogue</span>
          </div>
        </div>
      </section>

      {/* ── Search + Get a Quote Header ── */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:max-w-md">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-sm"></i>
              <input
                type="text"
                placeholder="Search certifications (e.g. ISO 9001, ATEX, Food...)"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-euro-600 focus:ring-2 focus:ring-euro-600/10 transition-all"
              />
            </div>
            <button
              onClick={() => openQuote()}
              className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20 shrink-0"
            >
              <i className="fas fa-file-invoice text-[10px]"></i>
              Get a Quotation
            </button>
          </div>
        </div>
      </section>

      {/* ── Catalogue Sections ── */}
      {filtered.map((cat, ci) => (
        <section key={ci} className={ci % 2 === 0 ? 'py-12 lg:py-16 bg-white' : 'relative overflow-hidden'}>
          {ci % 2 !== 0 && (
            <>
              <div className="absolute inset-0 bg-[#030a16]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
            </>
          )}
          <div className={ci % 2 !== 0 ? 'relative z-10 py-12 lg:py-16' : ''}>
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${ci % 2 === 0 ? 'bg-euro-600 text-white' : 'bg-eurogold-400/10 text-eurogold-400'}`}>
                    <i className={`fas ${cat.icon} text-sm`}></i>
                  </div>
                  <h2 className={`heading-font text-2xl md:text-3xl font-bold tracking-tight ${ci % 2 === 0 ? 'text-slate-900' : 'text-white'}`}>
                    {cat.category}
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item, ii) => (
                    <div
                      key={ii}
                      className={`group flex items-start gap-4 p-5 rounded-xl border transition-all duration-300 ${
                        ci % 2 === 0
                          ? 'border-slate-100 bg-slate-50/50 hover:border-euro-200 hover:shadow-lg'
                          : 'border-white/5 bg-white/2 hover:border-eurogold-400/20'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className={`heading-font text-xs font-bold uppercase tracking-wider mb-1 ${ci % 2 === 0 ? 'text-euro-600' : 'text-eurogold-400'}`}>
                          {item.code}
                        </p>
                        <p className={`text-sm leading-relaxed ${ci % 2 === 0 ? 'text-slate-500' : 'text-white/50'}`}>
                          {item.name}
                        </p>
                      </div>
                      <button
                        onClick={() => openQuote(`${item.code} - ${item.name}`)}
                        className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          ci % 2 === 0
                            ? 'bg-euro-50 text-euro-600 group-hover:bg-euro-600 group-hover:text-white'
                            : 'bg-white/5 text-white/30 group-hover:bg-eurogold-400/20 group-hover:text-eurogold-400'
                        }`}
                        title="Get a Quotation"
                      >
                        <i className="fas fa-arrow-right text-[10px]"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {filtered.length === 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-search text-slate-300 text-xl"></i>
            </div>
            <h3 className="heading-font text-lg font-bold text-slate-900 mb-2">No results found</h3>
            <p className="text-slate-400 text-sm">Try a different search term or browse all categories.</p>
            <button onClick={() => setSearch('')} className="mt-4 heading-font text-xs text-euro-600 font-bold hover:underline">
              Clear Search
            </button>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className={`py-14 lg:py-18 ${filtered.length % 2 === 0 ? 'bg-white' : 'bg-white'}`}>
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Need a <span className="text-euro-600">Custom Solution?</span></h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-lg mx-auto">Contact us for tailored certification packages suited to your industry and requirements.</p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-euro-600 rounded-full px-8 py-3.5 hover:bg-euro-700 transition-all shadow-lg">
              Contact Us <i className="fas fa-arrow-right text-[9px]"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quote Modal ── */}
      {showQuote && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowQuote(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="bg-euro-600 rounded-t-2xl px-6 py-5 flex items-center justify-between">
              <div>
                <h3 className="heading-font text-sm font-bold text-white uppercase tracking-wider">Get a Quotation</h3>
                {quoteService && <p className="text-white/60 text-xs mt-1">{quoteService}</p>}
              </div>
              <button onClick={() => setShowQuote(false)} className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all">
                <i className="fas fa-times text-sm"></i>
              </button>
            </div>

            <div className="p-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="heading-font text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1.5 block">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-euro-600 focus:ring-2 focus:ring-euro-600/10 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="heading-font text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1.5 block">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-euro-600 focus:ring-2 focus:ring-euro-600/10 transition-all"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="heading-font text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1.5 block">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-euro-600 focus:ring-2 focus:ring-euro-600/10 transition-all"
                        placeholder="+91 000 000 0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="heading-font text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1.5 block">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-euro-600 focus:ring-2 focus:ring-euro-600/10 transition-all"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="heading-font text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1.5 block">Message</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-euro-600 focus:ring-2 focus:ring-euro-600/10 transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-euro-600 rounded-xl px-6 py-3.5 hover:bg-euro-700 transition-all shadow-lg"
                  >
                    Submit Request
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-check text-green-500 text-2xl"></i>
                  </div>
                  <h4 className="heading-font text-lg font-bold text-slate-900 mb-2">Request Submitted!</h4>
                  <p className="text-slate-400 text-sm mb-6">We'll get back to you with a quotation shortly.</p>
                  <button
                    onClick={() => setShowQuote(false)}
                    className="heading-font text-xs text-euro-600 font-bold hover:underline"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
