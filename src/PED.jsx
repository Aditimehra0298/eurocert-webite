import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const recentPosts = [
  {
    title: 'PED 2014/68/EU: Updated Conformity Modules',
    date: '06 Feb 2026',
    tag: 'PED Update',
    link: '/ped',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'TPED Pi Marking Requirements 2026',
    date: '28 Jan 2026',
    tag: 'TPED',
    link: '/pi-mark',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'Simple Pressure Vessels: SPVD Guide',
    date: '20 Jan 2026',
    tag: 'SPVD',
    link: '/ped',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'ADR Compliance for Dangerous Goods',
    date: '12 Jan 2026',
    tag: 'Transport',
    link: '/ped',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'Welding Certification for Pressure Equipment',
    date: '05 Jan 2026',
    tag: 'Welding',
    link: '/ped',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=200'
  }
]

const additionalServices = [
  'European Union Full Service Notified Body',
  'Quality System Auditing & Assessment',
  'Material Appraisals',
  'Welding Procedures / Welder Certification',
  'EU Competent and Notified Body for many other directives'
]

const relatedServices = [
  { title: 'PI Mark — TPED', subtitle: 'Transportable Equipment', image: '/c11.png', link: '/pi-mark' },
  { title: 'Machinery CE Marking', subtitle: 'Directive 2006/42/EC', image: '/c4.png', link: '/machinery' },
  { title: 'Construction Products', subtitle: 'CPR Certification', image: '/c2.png', link: '/construction-products' }
]

const CheckIcon = () => (
  <svg className="w-5 h-5 text-eurogold-400 drop-shadow-[0_0_5px_rgba(212,168,67,0.5)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function PED() {
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
          <img src="/c6.png" className="w-full h-full object-cover opacity-30" alt="Pressure Equipment" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">PED 2014/68/EU</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Pressure Equipments
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Pressure equipment means vessels, piping, safety accessories and pressure accessories, including elements attached to pressurized parts such as flanges, nozzles, couplings, supports, lifting lugs.
          </p>
          <div className="mt-8">
            <Link to="/#contact" className="inline-flex items-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20">
              Click For Free Consultation <i className="fas fa-arrow-right text-[9px]"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Types of Certification Heading — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">EU Directive</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              PED Certification 2014/68/EU
            </h2>
          </div>

          {/* ── PED 2014/68/EU ── */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="mb-6">
              <h3 className="heading-font text-xl md:text-2xl font-bold text-slate-900 tracking-tight">CE Certification under Pressure Equipment (PED)</h3>
              <span className="text-[10px] font-bold text-euro-600 uppercase tracking-[0.2em] heading-font">Directive 2014/68/EU</span>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-3">
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                  The European Pressure Equipment Directive (PED) 2014/68/EU provides mandatory guidance for the design, manufacturing and conformity assessment of pressure equipment with a maximum allowable pressure above 0.5 bar. Compliance with this Directive is required for designers and manufacturers looking to sell their equipment to the EU Economic Area.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Pressure equipment covered by the PED includes pressure vessels, pressure accessories, piping, steam boilers, safety accessories and assemblies etc.
                </p>
                <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                      <i className="fas fa-clipboard-list text-white text-xs"></i>
                    </div>
                    <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Conformity Assessment Procedure for PED</h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The conformity assessment procedure for PED is determined by the category of the pressure equipment (I to IV), based on rising level of hazard. Each category requires specific modules for design examination, type examination, production quality assurance, and final assessment.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[280px] md:h-[340px] group">
                <img src="/c6.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="PED Certification" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why PED is Necessary — Soft BG ── */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Legal Requirement</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Why is PED Certification <span className="text-euro-600">Necessary?</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-5 gap-8 items-start mb-10">
              <div className="lg:col-span-3 space-y-5">
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  Compliance to the Pressure Equipment Directive (PED) is mandatory as a legal requirement for all manufacturers of pressure equipment who wish to export to the EU. The PED certification is based on compliance to Essential Safety Requirements (ESRs) as determined by the PED directive 2014/68/EU.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl border border-euro-100 bg-white">
                    <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-3">
                      <i className="fas fa-drafting-compass text-base"></i>
                    </div>
                    <h5 className="heading-font text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">Design</h5>
                    <p className="text-slate-400 text-xs leading-relaxed">Requirements governing the design of pressure equipment</p>
                  </div>
                  <div className="p-5 rounded-2xl border border-euro-100 bg-white">
                    <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-3">
                      <i className="fas fa-industry text-base"></i>
                    </div>
                    <h5 className="heading-font text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">Manufacturing</h5>
                    <p className="text-slate-400 text-xs leading-relaxed">Standards for manufacturing processes and quality control</p>
                  </div>
                  <div className="p-5 rounded-2xl border border-euro-100 bg-white">
                    <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-3">
                      <i className="fas fa-search text-base"></i>
                    </div>
                    <h5 className="heading-font text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">Inspection</h5>
                    <p className="text-slate-400 text-xs leading-relaxed">Inspection requirements for pressure equipment components</p>
                  </div>
                  <div className="p-5 rounded-2xl border border-euro-100 bg-white">
                    <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-3">
                      <i className="fas fa-vial text-base"></i>
                    </div>
                    <h5 className="heading-font text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">Testing</h5>
                    <p className="text-slate-400 text-xs leading-relaxed">Testing protocols for pressure equipment verification</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-eurogold-200 bg-eurogold-50/30 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-eurogold-400 flex items-center justify-center shrink-0">
                    <i className="fas fa-exclamation-triangle text-white text-xs"></i>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    <span className="font-semibold">Important:</span> PED affects most equipment that are designed for pressures above 0.5 bar.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[420px] group">
                <img src="/2.webp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="PED Certification Documentation" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Steps to Get PED Certified & ESR Compliance — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              {/* Steps */}
              <div className="mb-12">
                <div className="text-center mb-10">
                  <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Certification Process</h4>
                  <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Steps to Get PED Certification</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {[
                    { num: '01', icon: 'fa-file-signature', title: 'Application', desc: 'Submit your application with product details to a Notified Body for PED assessment.' },
                    { num: '02', icon: 'fa-drafting-compass', title: 'Design Review', desc: 'Technical design review to ensure compliance with Essential Safety Requirements.' },
                    { num: '03', icon: 'fa-vial', title: 'Testing & Inspection', desc: 'Product testing, inspection, and conformity assessment by the Notified Body.' },
                    { num: '04', icon: 'fa-certificate', title: 'PED Certificate', desc: 'Upon compliance, receive your PED certificate enabling EU market access.' }
                  ].map((step) => (
                    <div key={step.num} className="p-5 rounded-2xl border border-white/5 bg-white/2 text-center">
                      <div className="w-10 h-10 rounded-full bg-eurogold-400/10 flex items-center justify-center mx-auto mb-3">
                        <span className="heading-font text-eurogold-400 font-bold text-sm">{step.num}</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-eurogold-400/5 flex items-center justify-center mx-auto mb-3">
                        <i className={`fas ${step.icon} text-eurogold-400 text-sm`}></i>
                      </div>
                      <h4 className="heading-font text-[10px] font-bold text-white uppercase tracking-widest mb-2">{step.title}</h4>
                      <p className="text-white/45 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ESR Compliance */}
              <div>
                <div className="text-center mb-8">
                  <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Manufacturer Requirements</h4>
                  <h2 className="heading-font text-2xl md:text-3xl font-bold text-white tracking-tight">Comply with ESR of PED 2014/68/EU</h2>
                  <p className="text-white/40 text-sm mt-3 max-w-2xl mx-auto">At minimum, a manufacturer must ensure the following to comply with the Essential Safety Requirements:</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: 'fa-drafting-compass', title: 'Harmonised Design', desc: 'Ensure design is as per applicable Harmonised Standard.' },
                    { icon: 'fa-user-check', title: 'Qualified Welders', desc: 'Ensure welders are qualified to required standards.' },
                    { icon: 'fa-file-alt', title: 'Qualified WPS', desc: 'Ensure qualified Welding Procedure Specifications are used.' },
                    { icon: 'fa-cubes', title: 'Compliant Materials', desc: 'Ensure materials are as per applicable Harmonised Standard.' },
                    { icon: 'fa-cogs', title: 'ISO 9001 QMS', desc: 'Ensure Quality Management System is compliant with ISO 9001.' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/2">
                      <div className="w-9 h-9 rounded-lg bg-eurogold-400/10 flex items-center justify-center shrink-0">
                        <i className={`fas ${item.icon} text-eurogold-400 text-xs`}></i>
                      </div>
                      <div>
                        <h5 className="heading-font text-[10px] font-bold text-white uppercase tracking-widest mb-1">{item.title}</h5>
                        <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CE after PED & Routes to Apply — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-question-circle text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">CE Marking After PED</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Yes, you can apply CE marking on your pressure equipment once you have got a PED certificate from any Notified Body. However, you must ensure that all applicable Directives on your products are also complied with before you apply the CE marking.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-eurogold-100 bg-eurogold-50/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-eurogold-400 flex items-center justify-center">
                    <i className="fas fa-route text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Routes to Apply for PED</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Multiple conformity assessment routes are available depending on your equipment category (I–IV). Our experts help you identify the optimal route based on your specific product type, pressure rating, and intended use.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-eurogold-100 bg-eurogold-50/20 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-eurogold-400 flex items-center justify-center shrink-0">
                <i className="fas fa-handshake text-white text-sm"></i>
              </div>
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest mb-1">On Behalf of Eurocert S.A</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We are offering all PED certification services on behalf of Eurocert S.A. Our team provides end-to-end support from initial application through to final certification and ongoing compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Eurocert — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
              <div className="lg:col-span-3">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Notified Body</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  Why Choose Eurocert?
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">
                  As a Notified Body, Eurocert partners with you during all phases of the compliance process. This may include documentation and design reviews, product testing, system evaluation, and certification. Eurocert group holds all necessary accreditations for type approval and certification in accordance with all relevant national and international regulations.
                </p>
                <h4 className="heading-font text-[11px] text-eurogold-400 font-bold uppercase tracking-widest mb-4">Additional Services</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {additionalServices.map((service, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-white/2">
                      <CheckIcon />
                      <p className="text-white/55 text-xs leading-relaxed">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 p-8 rounded-2xl border border-white/5 bg-white/2 flex flex-col justify-center">
                <h3 className="heading-font text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                  Our Expertise
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  Our experienced auditors understand pressure equipment requirements under the PED directive and guide you through the entire certification process.
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

      {/* ── Related Certifications — Light ── */}
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
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Initiate Pressure Equipment Compliance</h4>
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Quick Inquiry</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
                Our pressure equipment experts are ready to guide your organization through PED compliance and certification.
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
