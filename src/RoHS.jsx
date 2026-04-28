import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const recentPosts = [
  {
    title: 'RoHS 3 Directive Updates for 2026',
    date: '09 Feb 2026',
    tag: 'Directive',
    link: '/rohs',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'Restricted Substances List Expanded',
    date: '01 Feb 2026',
    tag: 'Substances',
    link: '/rohs',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'REACH & RoHS: Combined Compliance',
    date: '22 Jan 2026',
    tag: 'Compliance',
    link: '/reach',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'Testing Labs for RoHS Certification',
    date: '14 Jan 2026',
    tag: 'Testing',
    link: '/rohs',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'Supply Chain Compliance for EEE',
    date: '06 Jan 2026',
    tag: 'Supply Chain',
    link: '/rohs',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=200'
  }
]

const restrictedSubstances = [
  { symbol: 'Pb', name: 'Lead', color: 'bg-red-500/10 text-red-400 border-red-400/20' },
  { symbol: 'Hg', name: 'Mercury', color: 'bg-amber-500/10 text-amber-400 border-amber-400/20' },
  { symbol: 'Cd', name: 'Cadmium', color: 'bg-orange-500/10 text-orange-400 border-orange-400/20' },
  { symbol: 'Cr6+', name: 'Hexavalent Chromium', color: 'bg-purple-500/10 text-purple-400 border-purple-400/20' },
  { symbol: 'PBB', name: 'Polybrominated Biphenyls', color: 'bg-pink-500/10 text-pink-400 border-pink-400/20' },
  { symbol: 'PBDE', name: 'Polybrominated Diphenyl Ethers', color: 'bg-rose-500/10 text-rose-400 border-rose-400/20' }
]

const benefitsList = [
  { icon: 'fa-check-circle', text: 'Compliance with mandatory requirements for use of hazardous substances in electrical and electronic equipment' },
  { icon: 'fa-exclamation-triangle', text: 'Avoidance of potential regulatory penalties' },
  { icon: 'fa-handshake', text: 'Improved public relations and customer confidence' },
  { icon: 'fa-chart-line', text: 'Enhanced marketability of products' },
  { icon: 'fa-trophy', text: 'A competitive edge over non-certified products' }
]

const certSteps = [
  { num: '01', title: 'Find Accredited Lab', desc: 'Find a testing laboratory accredited by your country\'s recognized accreditation body.', icon: 'fa-search' },
  { num: '02', title: 'Verify Test Capability', desc: 'Ensure the lab can perform all tests required for RoHS certification.', icon: 'fa-flask' },
  { num: '03', title: 'Submit Samples', desc: 'Send product samples along with any other required paperwork to the lab.', icon: 'fa-box' },
  { num: '04', title: 'Receive Certificate', desc: 'After tests complete, the lab will issue a certificate if your product meets all RoHS requirements.', icon: 'fa-certificate' }
]

const services = [
  { icon: 'fa-shield-alt', title: 'Compliance Testing', description: 'Comprehensive RoHS compliance testing for electrical and electronic equipment.' },
  { icon: 'fa-clipboard-check', title: 'Material Analysis', description: 'Detailed material composition analysis and hazardous substance verification.' },
  { icon: 'fa-chalkboard-teacher', title: 'Training & Consultancy', description: 'Expert guidance on RoHS requirements and substance restriction compliance.' },
  { icon: 'fa-headset', title: 'Ongoing Support', description: 'Continuous monitoring for RoHS regulation updates and product changes.' },
  { icon: 'fa-file-alt', title: 'Documentation & Reporting', description: 'Technical documentation and Declaration of Conformity for RoHS compliance.' },
  { icon: 'fa-sync-alt', title: 'Supply Chain Verification', description: 'Verification of component and material suppliers for RoHS compliance.' }
]

const relatedServices = [
  { title: 'REACH Compliance', subtitle: 'Chemical Regulation', image: '/reach-compliance.png', link: '/reach' },
  { title: 'LVD / EMC', subtitle: 'CE Marking', image: '/lvd-emc-directive.png', link: '/lvd-emc' },
  { title: 'Machinery', subtitle: 'CE Certification', image: '/machinery-directive.png', link: '/machinery' }
]

const CheckIcon = () => (
  <svg className="w-5 h-5 text-eurogold-400 drop-shadow-[0_0_5px_rgba(212,168,67,0.5)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function RoHS() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Recent Posts Sidebar ── */}
      <aside className={`fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in-out hidden xl:block ${sidebarOpen ? 'right-0' : '-right-[280px]'}`}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="absolute -left-9 top-1/2 -translate-y-1/2 w-9 h-20 bg-euro-600 hover:bg-euro-700 text-white rounded-l-xl flex items-center justify-center transition-colors shadow-lg">
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
          <img src="/rohs-certification.png" className="w-full h-full object-cover opacity-30" alt="RoHS" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Directive 2011/65/EU</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            RoHS Certification
          </h1>
          <h3 className="heading-font text-white/70 text-base md:text-lg uppercase tracking-[0.3em] mb-4">
            Restriction of Hazardous Substances
          </h3>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            The process of demonstrating that a product or material meets the Restriction of Hazardous Substances Directive, prohibiting certain hazardous substances in electrical and electronic equipment.
          </p>
          <div className="mt-8">
            <Link to="/#contact" className="inline-flex items-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20">
              Click For Free Consultation <i className="fas fa-arrow-right text-[9px]"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── What is RoHS — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Understanding RoHS</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  What is <span className="text-euro-600">RoHS Certification?</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                RoHS certification is the process of demonstrating that a product or material meets the Restriction of Hazardous Substances (RoHS) Directive. The Directive prohibits the use of certain hazardous substances in electrical and electronic equipment, placing restrictions on the maximum concentrations permitted.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                To obtain RoHS certification, manufacturers must provide evidence through test reports from independent laboratories, declarations of conformity, or certificates issued by third-party certification bodies. The RoHS Directive applies to all EEE placed on the EU market, regardless of origin. Non-compliant manufacturers may face fines and product recalls.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-boxes text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">What Products Need RoHS?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The directive covers products such as computers, televisions, digital cameras, and mobile phones. Manufacturers must ensure products carry the CE mark and comply with all relevant EU law provisions before placing them on the market. Compliance is achieved through self-certification.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[420px] group">
              <img src="/rohs-certification.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="RoHS Certification" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Restricted Substances — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Since July 1, 2006</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Six Restricted Substances</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {restrictedSubstances.map((sub, i) => (
                  <div key={i} className={`p-5 rounded-2xl border ${sub.color} text-center`}>
                    <span className="heading-font font-bold text-3xl block mb-1">{sub.symbol}</span>
                    <span className="text-white/50 text-xs leading-relaxed">{sub.name}</span>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="text-center mb-8">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Why It Matters</h4>
                <h2 className="heading-font text-2xl md:text-3xl font-bold text-white tracking-tight">Benefits of RoHS Certification</h2>
              </div>

              <div className="space-y-3">
                {benefitsList.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/2">
                    <div className="w-8 h-8 rounded-lg bg-eurogold-400/10 flex items-center justify-center shrink-0">
                      <i className={`fas ${benefit.icon} text-eurogold-400 text-xs`}></i>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Get Certified — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Step by Step</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">How to Get RoHS Certified</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {certSteps.map((step) => (
                <div key={step.num} className="relative p-6 rounded-2xl border border-euro-100 bg-linear-to-br from-euro-50/60 to-white text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-euro-600 flex items-center justify-center">
                    <span className="heading-font text-white text-xs font-bold">{step.num}</span>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mx-auto mt-3 mb-3">
                    <i className={`fas ${step.icon} text-base`}></i>
                  </div>
                  <h4 className="heading-font text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Conclusion + Eurocert SA */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-lightbulb text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Conclusion</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  RoHS certification ensures products are safe for the environment. Compliant manufacturing protects health and the planet by reducing hazardous substances. Companies should always strive to meet or exceed RoHS requirements for customer safety and reputation as a responsible manufacturer.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-eurogold-100 bg-eurogold-50/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-eurogold-400 flex items-center justify-center">
                    <i className="fas fa-handshake text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">On Behalf of Eurocert S.A</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We are offering above services on behalf of Eurocert S.A. With our knowledge, consumers can make informed decisions about which products best suit their needs without having to worry about potential harm from harmful chemicals or materials.
                </p>
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
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">RoHS Certification Services</h2>
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
                  Our experienced auditors understand RoHS requirements and guide you through the certification process. We work with you to ensure successful certification and ongoing compliance for all your electrical and electronic equipment.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { icon: 'fa-check-circle', title: 'Regulatory Compliance', desc: 'Meet all RoHS directive requirements.' },
                    { icon: 'fa-globe-europe', title: 'EU Market Access', desc: 'Access European markets for EEE.' },
                    { icon: 'fa-leaf', title: 'Environmental Responsibility', desc: 'Reduce hazardous substances.' },
                    { icon: 'fa-trophy', title: 'Competitive Edge', desc: 'Stand out as RoHS-compliant.' },
                    { icon: 'fa-shield-alt', title: 'Risk Management', desc: 'Avoid penalties and product recalls.' }
                  ].map((b, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-white/2">
                      <div className="w-7 h-7 rounded-lg bg-eurogold-400/10 flex items-center justify-center shrink-0">
                        <i className={`fas ${b.icon} text-eurogold-400 text-[10px]`}></i>
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-[10px] uppercase tracking-wide heading-font mb-0.5">{b.title}</h5>
                        <p className="text-white/40 text-[11px] leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 p-8 rounded-2xl border border-white/5 bg-white/2 flex flex-col justify-center">
                <h3 className="heading-font text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">Our Expertise</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  We ensure successful RoHS certification and ongoing compliance, protecting both your business and the environment.
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

      {/* ── Related Certifications ── */}
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

      {/* ── CTA ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto p-10 sm:p-12 rounded-2xl border border-white/5 bg-white/2">
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Initiate RoHS Compliance</h4>
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Quick Inquiry</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
                Our RoHS compliance experts are ready to guide your organization through hazardous substance certification for electrical and electronic equipment.
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
