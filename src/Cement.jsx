import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const recentPosts = [
  {
    title: 'EN 197-1 Cement Standards Update 2026',
    date: '08 Feb 2026',
    tag: 'Standards',
    link: '/cement',
    image: 'https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'CPR Requirements for Cement Products',
    date: '30 Jan 2026',
    tag: 'CPR',
    link: '/construction-products',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'Fire Safety Compliance for Cement',
    date: '22 Jan 2026',
    tag: 'Safety',
    link: '/cement',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'DoP Guide for Cement Manufacturers',
    date: '14 Jan 2026',
    tag: 'Compliance',
    link: '/cement',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'EU Market Access for Cement Products',
    date: '06 Jan 2026',
    tag: 'Market',
    link: '/cement',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200'
  }
]

const importancePoints = [
  { icon: 'fa-hard-hat', text: 'Ensures that the cement is safe to use for construction purposes' },
  { icon: 'fa-balance-scale', text: 'Helps to establish uniform safety standards across the EU' },
  { icon: 'fa-exchange-alt', text: 'Facilitates free movement of goods within the EU by removing trade barriers' },
  { icon: 'fa-trophy', text: 'Enhances the credibility and competitiveness of the manufacturer' }
]

const essentialRequirements = [
  {
    num: '01',
    icon: 'fa-building',
    title: 'Mechanical Resistance & Stability',
    desc: 'Cement must have sufficient mechanical resistance and stability to withstand the weight and stresses of the structures it is used to build. Cement manufacturers must ensure that their products meet the relevant European harmonized standards for mechanical resistance and stability.'
  },
  {
    num: '02',
    icon: 'fa-fire-extinguisher',
    title: 'Safety in Case of Fire',
    desc: 'Cement must meet safety requirements in case of fire, including its ability to resist fire and prevent the spread of flames. To comply with relevant European harmonized standards for fire safety, cement manufacturers must ensure that their products are tested.'
  },
  {
    num: '03',
    icon: 'fa-leaf',
    title: 'Hygiene, Health & the Environment',
    desc: 'Cement must be safe for human health and the environment. This includes its composition, production process, and the impact of its use on the environment. Manufacturers must ensure their products are tested to comply with relevant European harmonized standards.'
  }
]

const services = [
  { icon: 'fa-shield-alt', title: 'Certification & Compliance', description: 'Full scope verification for cement products against harmonized European standards (EN 197-1).' },
  { icon: 'fa-clipboard-check', title: 'Audit & Assessment', description: 'Comprehensive testing and evaluation of cement composition, strength, and performance.' },
  { icon: 'fa-chalkboard-teacher', title: 'Training & Consultancy', description: 'Expert guidance on cement quality standards and factory production control requirements.' },
  { icon: 'fa-headset', title: 'Ongoing Support', description: 'Continuous surveillance and annual audits to maintain cement product certification.' },
  { icon: 'fa-file-alt', title: 'Documentation & Reporting', description: 'Declaration of Performance (DoP) preparation and technical documentation for cement.' },
  { icon: 'fa-sync-alt', title: 'Remediation Support', description: 'Corrective actions for non-conformities in cement production and quality control.' }
]

const relatedServices = [
  { title: 'Construction Products', subtitle: 'CPR Certification', image: '/c2.png', link: '/construction-products' },
  { title: 'PED Certification', subtitle: 'Pressure Equipment', image: '/c6.png', link: '/ped' },
  { title: 'LVD / EMC', subtitle: 'CE Compliance', image: '/c8.png', link: '/lvd-emc' }
]

const CheckIcon = () => (
  <svg className="w-5 h-5 text-eurogold-400 drop-shadow-[0_0_5px_rgba(212,168,67,0.5)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function Cement() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Recent Posts Sidebar — Desktop only ── */}
      <aside className={`fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in-out hidden xl:block ${sidebarOpen ? 'right-0' : '-right-[280px]'}`}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="absolute -left-9 top-1/2 -translate-y-1/2 w-9 h-20 bg-euro-600 hover:bg-euro-700 text-white rounded-l-xl flex items-center justify-center transition-colors shadow-lg" title={sidebarOpen ? 'Hide recent posts' : 'Show recent posts'}>
          <i className={`fas fa-chevron-${sidebarOpen ? 'right' : 'left'} text-[10px]`}></i>
        </button>
        <div className="w-[280px] max-h-[80vh] bg-white/95 backdrop-blur-xl border border-slate-200 border-r-0 rounded-l-2xl shadow-2xl overflow-hidden flex flex-col">
          <div className="px-5 py-4 border-b border-slate-100 bg-euro-600">
            <div className="flex items-center gap-2">
              <i className="fas fa-newspaper text-eurogold-400 text-xs"></i>
              <h3 className="heading-font text-[11px] text-white font-bold uppercase tracking-[0.2em]">Recent Posts</h3>
            </div>
          </div>
          <div className="overflow-y-auto flex-1 divide-y divide-slate-100">
            {recentPosts.map((post, i) => (
              <Link key={i} to={post.link} className="flex gap-3 px-4 py-3 hover:bg-euro-50/60 transition-colors group">
                <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-euro-500 heading-font">{post.tag}</span>
                  <h4 className="text-[11px] font-semibold text-slate-800 leading-tight mt-0.5 line-clamp-2 group-hover:text-euro-600 transition-colors">{post.title}</h4>
                  <span className="text-[9px] text-slate-400 mt-1 block">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-slate-100 bg-slate-50">
            <Link to="/" className="flex items-center justify-center gap-2 heading-font text-[9px] font-bold uppercase tracking-[0.2em] text-euro-600 hover:text-euro-800 transition-colors">
              View All Posts <i className="fas fa-arrow-right text-[8px]"></i>
            </Link>
          </div>
        </div>
      </aside>

      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/c5.png" className="w-full h-full object-cover opacity-30" alt="Cement" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Construction Products Regulation</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            CE Marking for Cement
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            CE marking is a declaration of conformity that enables manufacturers to demonstrate that their cement products meet the essential requirements of the applicable EU regulations.
          </p>
          <div className="mt-8">
            <Link to="/#contact" className="inline-flex items-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20">
              Click For Free Consultation <i className="fas fa-arrow-right text-[9px]"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Importance of CE Marking — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Why It Matters</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Importance of CE Marking <span className="text-euro-600">for Cement</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                CE marking is a declaration of conformity that enables manufacturers to demonstrate that their product meets the essential requirements of the applicable EU regulations. It is important for cement manufacturers because it:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {importancePoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-euro-100 bg-euro-50/30">
                    <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center shrink-0">
                      <i className={`fas ${point.icon} text-white text-xs`}></i>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[420px] group">
              <img src="/c5.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Cement CE Marking" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scope of CE Marking — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-bullseye text-eurogold-400 text-xs"></i>
                    </div>
                    <h4 className="heading-font text-[11px] text-eurogold-400 font-bold uppercase tracking-widest">Scope of CE Marking for Cement</h4>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed mb-3">
                    CE marking for cement is required under the Construction Products Regulation (CPR) of the EU. It applies to all construction products intended to be used for construction purposes in the EU.
                  </p>
                  <p className="text-white/45 text-xs leading-relaxed">
                    Any cement intended for sale within the EEA must carry the CE marking.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-book text-eurogold-400 text-xs"></i>
                    </div>
                    <h4 className="heading-font text-[11px] text-eurogold-400 font-bold uppercase tracking-widest">Annex I — Essential Requirements</h4>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">
                    Annex I of the CPR outlines the essential requirements for CE marking of cement. These requirements are designed to ensure that cement is safe to use and complies with EU regulations.
                  </p>
                </div>
              </div>

              {/* Essential Requirements */}
              <div className="text-center mb-8">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Annex I — CPR</h4>
                <h2 className="heading-font text-2xl md:text-3xl font-bold text-white tracking-tight">Essential Requirements for CE Marking of Cement</h2>
              </div>

              <div className="space-y-4">
                {essentialRequirements.map((req) => (
                  <div key={req.num} className="p-6 rounded-2xl border border-white/5 bg-white/2">
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center gap-2 shrink-0">
                        <span className="heading-font text-eurogold-400 font-bold text-sm w-8 h-8 rounded-lg bg-eurogold-400/10 flex items-center justify-center">{req.num}</span>
                        <div className="w-8 h-8 rounded-lg bg-eurogold-400/5 flex items-center justify-center">
                          <i className={`fas ${req.icon} text-eurogold-400/60 text-xs`}></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="heading-font text-[11px] text-eurogold-400 font-bold uppercase tracking-widest mb-2">{req.title}</h4>
                        <p className="text-white/55 text-sm leading-relaxed">{req.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CE Marking Process — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Step by Step</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">CE Marking Process for Cement</h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {[
                { num: '01', title: 'Identify Standards', desc: 'Identify the relevant harmonized standards for your cement product.', icon: 'fa-search' },
                { num: '02', title: 'Testing & Assessment', desc: 'Carry out necessary testing and assessment to ensure compliance with standards.', icon: 'fa-flask' },
                { num: '03', title: 'Affix CE Marking', desc: 'Affix CE marking along with manufacturer info and product identification number.', icon: 'fa-certificate' }
              ].map((step) => (
                <div key={step.num} className="relative p-6 rounded-2xl border border-euro-100 bg-linear-to-br from-euro-50/60 to-white text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-euro-600 flex items-center justify-center">
                    <span className="heading-font text-white text-xs font-bold">{step.num}</span>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mx-auto mt-3 mb-3">
                    <i className={`fas ${step.icon} text-base`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-eurogold-400 flex items-center justify-center shrink-0">
                  <i className="fas fa-handshake text-white text-sm"></i>
                </div>
                <div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest mb-2">On Behalf of Eurocert S.A</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    We are offering above services on behalf of Eurocert S.A. Manufacturers must affix the CE marking to cement intended for sale within the EEA, which ensures the cement's safety and compliance with the relevant harmonized standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid — Soft BG ── */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Services</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Cement Certification Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${service.icon} text-base`}></i>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Eurocert — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
              <div className="lg:col-span-3">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Why Choose Us</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Why Eurocert?</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  Manufacturers must follow the CE marking process to ensure their cement product meets EU requirements and can be sold across the EEA. Our experienced auditors understand cement certification requirements and guide you through the entire process.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { icon: 'fa-check-circle', title: 'Regulatory Compliance', desc: 'Meet all CPR requirements for cement.' },
                    { icon: 'fa-globe-europe', title: 'Market Access', desc: 'CE marked cement for European markets.' },
                    { icon: 'fa-award', title: 'Quality Assurance', desc: 'Demonstrate cement quality and safety.' },
                    { icon: 'fa-trophy', title: 'Competitive Edge', desc: 'Stand out as a certified manufacturer.' },
                    { icon: 'fa-shield-alt', title: 'Risk Management', desc: 'Reduce compliance risks and liability.' }
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-white/2">
                      <div className="w-7 h-7 rounded-lg bg-eurogold-400/10 flex items-center justify-center shrink-0">
                        <i className={`fas ${benefit.icon} text-eurogold-400 text-[10px]`}></i>
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-[10px] uppercase tracking-wide heading-font mb-0.5">{benefit.title}</h5>
                        <p className="text-white/40 text-[11px] leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 p-8 rounded-2xl border border-white/5 bg-white/2 flex flex-col justify-center">
                <h3 className="heading-font text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">Our Expertise</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  We work with you to ensure successful certification and ongoing compliance for all your cement products across European markets.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                    <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">25+</span>
                    <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Years Experience</span>
                  </div>
                  <div className="p-4 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                    <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">100%</span>
                    <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Directive Accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Certifications — Soft BG ── */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Explore More</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Related Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {relatedServices.map((service, index) => (
              <Link key={index} to={service.link} className="group relative h-[280px] rounded-2xl overflow-hidden border border-slate-200 hover:border-euro-300 shadow-md hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${service.image}')` }} />
                <div className="absolute inset-0 bg-linear-to-t from-[#030a16]/80 via-[#030a16]/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <h4 className="text-white text-sm heading-font font-bold uppercase tracking-widest mb-1">{service.title}</h4>
                  <span className="text-[9px] font-bold uppercase text-eurogold-400 tracking-[0.2em] heading-font">{service.subtitle}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto p-10 sm:p-12 rounded-2xl border border-white/5 bg-white/2">
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Initiate Cement CE Marking</h4>
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Quick Inquiry</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
                Our cement certification experts are ready to guide your organization through CE marking compliance for cement products.
              </p>
              <div className="flex items-center justify-center gap-2 text-white/25 text-[10px] heading-font tracking-widest uppercase mb-6">
                <i className="fas fa-map-marker-alt text-eurogold-400/60"></i>
                <span>Eurocert Inspection Services, Panchkula, Haryana</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/#contact" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20">
                  Get Started <i className="fas fa-arrow-right text-[9px]"></i>
                </Link>
                <a href="tel:+917009007527" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white border border-white/15 rounded-full px-8 py-3.5 hover:bg-white/5 transition-all">
                  <i className="fas fa-phone text-[9px]"></i> Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
