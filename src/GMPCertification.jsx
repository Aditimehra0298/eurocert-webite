import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const keyPrinciples = [
  { icon: 'fa-globe', title: 'High Feed Safety', desc: 'Ensuring a high level of feed safety worldwide across all supply chain stages.' },
  { icon: 'fa-building', title: 'Company Responsibility', desc: 'Recognizing that primary responsibility lies with the certified company.' },
  { icon: 'fa-link', title: 'Shared Responsibility', desc: 'Sharing responsibility across the entire supply chain for collective safety.' },
  { icon: 'fa-check-double', title: 'Global Standards', desc: 'Aligning with globally recognized standards for consistent quality benchmarks.' },
  { icon: 'fa-eye', title: 'Transparency', desc: 'Promoting transparency and stakeholder involvement at every level.' },
  { icon: 'fa-shield-alt', title: 'Independent Certification', desc: 'Guaranteeing independent, third-party certification for unbiased assurance.' },
]

const keyElements = [
  { icon: 'fa-industry', title: 'Good Manufacturing Practices', desc: 'GMP controls to prevent potential risks in feed production and handling.' },
  { icon: 'fa-search', title: 'HACCP Principles', desc: 'Identifying and controlling feed safety hazards through systematic analysis.' },
  { icon: 'fa-cogs', title: 'Management System', desc: 'A structured management system aligned with ISO requirements for consistency.' },
  { icon: 'fa-project-diagram', title: 'Single-Chain Approach', desc: 'Managing risks throughout the entire feed supply chain from source to end-user.' },
  { icon: 'fa-route', title: 'Traceability', desc: 'Strong traceability and early-warning systems to prevent spread of contamination.' },
]

const certBenefits = [
  'Demonstrate compliance with legal and customer requirements',
  'Gain confidence in internal processes and system performance',
  'Show evidence that all reasonable precautions for feed safety are taken',
  'Build stronger trust across the supply chain',
  'Reduce multiple customer audits and save time and resources',
]

const whyMatters = [
  { icon: 'fa-leaf', title: 'Safe & Sustainable', desc: 'Commitment to a safe and sustainable food chain for producers and consumers.' },
  { icon: 'fa-clipboard-check', title: 'Strong Control', desc: 'Strong control over compliance, sourcing, traceability, and production processes.' },
  { icon: 'fa-chart-line', title: 'Continuous Improvement', desc: 'Consistency and continuous improvement embedded in your operations.' },
  { icon: 'fa-handshake', title: 'Customer Trust', desc: 'Transparency that builds customer and consumer trust across markets.' },
  { icon: 'fa-file-invoice-dollar', title: 'Cost Reduction', desc: 'Reduced customer audits and lower management costs through recognized certification.' },
]

const relatedStandards = [
  {
    title: 'FAMI-QS',
    subtitle: 'Feed Ingredients Quality',
    desc: 'A global feed safety and quality standard for specialty feed ingredients. It focuses on chemical, bioprocessing, extraction, mixing, and formulation processes, with dedicated HACCP controls.',
    icon: 'fa-flask',
  },
  {
    title: 'FSSC 22000',
    subtitle: 'Feed Module',
    desc: 'A certification scheme based on ISO 22000 and ISO/TS 22002-6, specifically designed for feed safety and aligned with international food safety management principles.',
    icon: 'fa-certificate',
  },
]

const supportServices = [
  { icon: 'fa-chalkboard-teacher', title: 'Training & Awareness', desc: 'Comprehensive training programs to build GMP+ awareness across your organization.' },
  { icon: 'fa-search-plus', title: 'Gap Assessments', desc: 'Feed safety system reviews to identify gaps and improvement areas.' },
  { icon: 'fa-tasks', title: 'Pre-Audit Support', desc: 'Pre-audit and self-assessment support to ensure readiness for certification.' },
  { icon: 'fa-award', title: 'Certification Audits', desc: 'Independent, professional certification audits conducted by expert auditors.' },
]

const CheckIcon = () => (
  <svg className="w-5 h-5 text-eurogold-400 drop-shadow-[0_0_5px_rgba(212,168,67,0.5)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function GMPCertification() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/g2.png" className="absolute inset-0 w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-[#030a16]/75"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.08)_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(19,62,124,0.15)_0%,transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Feed Safety Assurance</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            GMP+ <span className="text-eurogold-400">Certification</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
            Professional and independent auditing services for the GMP+ Feed Safety Assurance scheme — ensuring safety throughout the entire animal feed supply chain.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: 'fa-shield-alt', val: 'GMP+ FSA', sub: 'Certified' },
              { icon: 'fa-globe', val: 'Global', sub: 'Recognition' },
              { icon: 'fa-link', val: 'Full Chain', sub: 'Coverage' },
              { icon: 'fa-award', val: 'Since 1992', sub: 'Established' },
            ].map((item, i) => (
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

      {/* ── About GMP+ ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">About GMP+</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Feed Safety <span className="text-euro-600">Assurance</span>
                </h2>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] heading-font mt-1">Internationally Recognized Certification System</p>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                GMP+ FSA is an internationally recognized certification system designed to ensure the safety of animal feed throughout the entire supply chain — including production, distribution, transportation, storage, and monitoring.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Developed in 1992 after several major feed-related incidents, GMP+ helps the feed and food industry maintain strong safety, quality, and traceability controls. It applies to all feed sector organizations, including manufacturers, traders, transporters, and storage providers.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: 'fa-industry', title: 'Production', sub: 'Manufacturing controls' },
                  { icon: 'fa-truck', title: 'Transport', sub: 'Safe distribution' },
                  { icon: 'fa-warehouse', title: 'Storage', sub: 'Controlled facilities' },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl border border-euro-100 bg-euro-50/30 text-center">
                    <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center mx-auto mb-2">
                      <i className={`fas ${item.icon} text-white text-xs`}></i>
                    </div>
                    <h5 className="heading-font text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-0.5">{item.title}</h5>
                    <p className="text-slate-400 text-xs">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[340px] md:h-[440px] group">
              <img src="/g1.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="GMP+ Certification" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Principles — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Core Framework</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Key Principles of GMP+ FSA</h2>
                <p className="text-white/40 text-sm mt-3 max-w-2xl mx-auto">
                  The GMP+ system is built on six core principles that all certified companies must follow.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {keyPrinciples.map((item, i) => (
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

      {/* ── Key Elements — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">System Components</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Key Elements of a GMP+ System</h2>
              <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto">
                A robust GMP+ Feed Safety Management System includes these essential components.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {keyElements.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${item.icon} text-base`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Certification Matters — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">The Value</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Why GMP+ Certification Matters</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {whyMatters.map((item, i) => (
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

      {/* ── Related Standards — Light ── */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Related Standards</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Standards We Also Audit</h2>
              <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto">
                In addition to GMP+, Eurocert supports organizations with these complementary feed safety standards.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {relatedStandards.map((item, i) => (
                <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-euro-50 flex items-center justify-center text-euro-600 mb-5 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${item.icon} text-xl`}></i>
                  </div>
                  <h3 className="heading-font text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="heading-font text-[10px] font-bold text-euro-600 uppercase tracking-[0.2em] mb-3">{item.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Certification Advantages</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Benefits of Certification</h2>
                <p className="text-white/40 text-sm mt-3 max-w-2xl">
                  By achieving GMP+, FAMI-QS, or FSSC 22000 certification, companies can unlock these advantages.
                </p>
              </div>

              <div className="grid lg:grid-cols-5 gap-8 items-center">
                {/* Left — Benefits List */}
                <div className="lg:col-span-3 space-y-3">
                  {certBenefits.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/2 hover:border-eurogold-400/20 transition-all duration-300">
                      <CheckIcon />
                      <p className="text-white/60 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Right — Image */}
                <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-white/10 h-[300px] md:h-[380px] group">
                  <img src="/g3.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="GMP+ Certification Benefits" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030a16]/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-eurogold-400/10 border border-eurogold-400/20 backdrop-blur-sm">
                      <i className="fas fa-certificate text-eurogold-400 text-xs"></i>
                      <span className="heading-font text-[9px] text-eurogold-400 tracking-[0.2em] uppercase font-bold">GMP+ Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Eurocert Support — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Services</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">How Eurocert Can Support You</h2>
              <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto">
                Eurocert provides end-to-end support for your GMP+ certification journey, ensuring a smooth and efficient process.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {supportServices.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-lg transition-all duration-300 group text-center">
                  <div className="w-12 h-12 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mx-auto mb-4 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${item.icon} text-base`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.08)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Ready for <span className="text-eurogold-400">GMP+ Certification?</span>
              </h2>
              <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
                We ensure a smooth, transparent, and efficient certification process so your organization can achieve and maintain GMP+ compliance with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                <Link to="/#contact" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-euro-600 rounded-full px-8 py-3.5 hover:bg-euro-700 transition-all shadow-lg">
                  Contact Us <i className="fas fa-arrow-right text-[9px]"></i>
                </Link>
                <Link to="/food-certification" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white border border-white/20 rounded-full px-8 py-3.5 hover:bg-white/5 transition-all">
                  Food & Agri Services
                </Link>
              </div>
              <div className="flex items-center justify-center gap-3 text-white/40 text-[10px] heading-font tracking-widest uppercase">
                <i className="fas fa-map-marker-alt text-eurogold-400"></i>
                <span>Eurocert Inspection Services, Panchkula, Haryana</span>
              </div>
              <a href="tel:+917009007527" className="inline-flex items-center gap-2 text-eurogold-400 heading-font text-sm font-bold mt-3 hover:text-eurogold-300 transition-colors">
                <i className="fas fa-phone text-xs"></i> +91 7009007527
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse ml-1"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
