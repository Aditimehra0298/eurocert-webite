import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const highlights = [
  { icon: 'fa-home', title: 'Minimum Working & Living Conditions', desc: 'Ensuring decent accommodation, food, and living standards for all seafarers aboard ships.' },
  { icon: 'fa-shield-alt', title: 'Safe & Secure Workplace', desc: 'Mandating occupational safety and health protection measures for all maritime workers.' },
  { icon: 'fa-file-contract', title: 'Fair Terms of Employment', desc: 'Regulating employment agreements, wages, hours of work, and repatriation rights.' },
  { icon: 'fa-heartbeat', title: 'Health Protection', desc: 'Access to medical care, health protection, and social security for seafarers.' },
  { icon: 'fa-hands-helping', title: 'Welfare Measures', desc: 'Shore-based welfare facilities, recreation, and communication access for crew members.' },
  { icon: 'fa-child', title: 'No Child Labor', desc: 'Strict minimum age requirements to prevent child labor in the maritime industry.' }
]

const services = [
  { icon: 'fa-ship', title: 'MLC Compliance Audits', desc: 'Comprehensive audits against MLC 2006 requirements for recruiting and shipping companies.' },
  { icon: 'fa-user-shield', title: 'Seafarer Rights Verification', desc: 'Verification of seafarer employment conditions, wages, and welfare provisions.' },
  { icon: 'fa-hard-hat', title: 'Working Conditions Assessment', desc: 'Assessment of on-board working conditions including hours, rest periods, and safety.' },
  { icon: 'fa-bed', title: 'Accommodation & Food Standards', desc: 'Inspection of living quarters, recreational facilities, and catering standards.' },
  { icon: 'fa-heartbeat', title: 'Health & Medical Care Review', desc: 'Review of medical care provisions, health protection measures, and social security.' },
  { icon: 'fa-file-contract', title: 'Employment Agreement Verification', desc: 'Verification of seafarer employment agreements and terms of service.' },
  { icon: 'fa-flag', title: 'Flag State Compliance', desc: 'Ensuring compliance with flag state requirements under MLC 2006.' },
  { icon: 'fa-anchor', title: 'Port State Inspection Readiness', desc: 'Preparing vessels and companies for port state control inspections.' }
]

const amendments2019 = [
  'Account is to be taken of the latest version of the guidance on eliminating shipboard harassment and bullying, jointly published by the International Chamber of Shipping (ICS) and the International Transport Workers\' Federation (ITF).',
  'In addition to the various health and safety matters which the MLC requires should be taken into account, there is added \'harassment and bullying\'.',
  'To the list of matters which should be considered for investigation in a health and safety context, there is added \'problems arising from harassment and bullying\'.'
]

const relatedServices = [
  { title: 'SA 8000', subtitle: 'Social Accountability', image: '/b1.png', link: '/social-audits/sa-8000' },
  { title: 'ISO 28000', subtitle: 'Supply Chain Security', image: '/b10.png', link: '/social-audits/iso-28000' },
  { title: 'WRAP', subtitle: 'Responsible Production', image: '/b4.png', link: '/social-audits/wrap' }
]

export default function MLC() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/b5.png" className="w-full h-full object-cover opacity-30" alt="MLC Maritime Labour Convention" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">The Seafarers&apos; Bill of Rights</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            MLC — <span className="text-eurogold-400">Maritime Labour Convention</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            International agreement of the ILO setting out seafarers&apos; rights to decent conditions of work — ratified by 90 countries covering over 91% of the world&apos;s shipping fleet
          </p>
        </div>
      </section>

      {/* What is MLC - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Convention Overview</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  What is <span className="text-euro-600">MLC 2006?</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                The Maritime Labour Convention 2006 (MLC) is an international agreement of the International Labour Organisation (ILO) which sets out seafarers&apos; rights to decent conditions of work. It is sometimes called the <strong className="text-slate-700">&quot;Seafarers&apos; Bill of Rights&quot;</strong>. It applies to all seafarers, including those with jobs in hotel and other passenger services on cruise ships and commercial yachts.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                As of January 2019, a total of <strong className="text-slate-700">90 countries</strong> had ratified the MLC 2006, which has resulted in more than <strong className="text-slate-700">91% of the world&apos;s shipping fleet</strong> being regulated by this convention.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-anchor text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Eurocert&apos;s MLC Experience</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Eurocert S.A has been doing MLC audits for recruiting companies and shipping companies against compliance of MLC. Our experienced maritime auditors ensure thorough assessment of all MLC requirements for your operations.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/b5.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="MLC Maritime Labour Convention" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights of MLC 2006 - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Convention Highlights</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Highlights of <span className="text-euro-600">MLC 2006</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {highlights.map((h, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group text-center">
                <div className="w-12 h-12 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 mx-auto group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${h.icon} text-lg`}></i>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{h.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates / 2019 Amendments - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Latest Updates</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  2019 <span className="text-eurogold-400">Amendments</span>
                </h3>
                <p className="text-white/40 text-sm mt-3 max-w-3xl mx-auto leading-relaxed">
                  A second set of amendments to the Maritime Labour Convention (MLC) for improving crew safety and welfare came into force on 8 January 2019
                </p>
              </div>
              <div className="space-y-4 mb-8">
                {amendments2019.map((a, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/2">
                    <div className="w-8 h-8 rounded-lg bg-eurogold-400/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="heading-font text-eurogold-400 font-bold text-xs">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 rounded-2xl border border-eurogold-400/20 bg-eurogold-400/5">
                <div className="flex items-start gap-3">
                  <i className="fas fa-exclamation-circle text-eurogold-400 text-sm mt-0.5 shrink-0"></i>
                  <p className="text-white/50 text-sm leading-relaxed">
                    <strong className="text-eurogold-400">Important:</strong> Bullying and harassment, including sexual harassment, is an abuse of human rights and living on a ship offers limited alternatives to avoid it. Although these changes are non-mandatory, flag states must give due consideration to implementing them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Services</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              MLC Audit <span className="text-euro-600">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${s.icon} text-base`}></i>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Eurocert - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Trusted Audit Partner</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Why Choose <span className="text-euro-600">Eurocert?</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-building text-white text-sm"></i>
                  </div>
                  <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">About Eurocert</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Eurocert S.A is a Greek Independent Certification Body accredited by Greek and International Accreditation Bodies with offices in more than 14 countries in Europe and Asia. Eurocert possesses highly-trained and educated auditors with great expertise and experience in maritime compliance.
                </p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-ship text-white text-sm"></i>
                  </div>
                  <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">Maritime Expertise</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  Eurocert S.A has been doing MLC audits for recruiting companies and shipping companies against compliance of MLC. Our auditors bring deep understanding of maritime labour standards and international conventions.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Certification by Eurocert means evaluation and acceptance by an accredited and well-respected third-party professional organization with global reach across 14+ countries.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="p-5 bg-white rounded-xl border border-euro-100 text-center">
                <span className="heading-font text-euro-600 font-bold text-3xl block mb-1 leading-none">90</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] heading-font">Countries Ratified</span>
              </div>
              <div className="p-5 bg-white rounded-xl border border-euro-100 text-center">
                <span className="heading-font text-euro-600 font-bold text-3xl block mb-1 leading-none">91%</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] heading-font">Fleet Regulated</span>
              </div>
              <div className="p-5 bg-white rounded-xl border border-euro-100 text-center">
                <span className="heading-font text-euro-600 font-bold text-3xl block mb-1 leading-none">14+</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] heading-font">Eurocert Countries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Explore More</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Related Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {relatedServices.map((s, i) => (
              <Link key={i} to={s.link} className="group relative h-[280px] rounded-2xl overflow-hidden border border-slate-200 hover:border-euro-300 shadow-md hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${s.image}')` }} />
                <div className="absolute inset-0 bg-linear-to-t from-[#030a16]/80 via-[#030a16]/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <h4 className="text-white text-sm heading-font font-bold uppercase tracking-widest mb-1">{s.title}</h4>
                  <span className="text-[9px] font-bold uppercase text-eurogold-400 tracking-[0.2em] heading-font">{s.subtitle}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto p-10 sm:p-12 rounded-2xl border border-white/5 bg-white/2">
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Get Compliant</h4>
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Start Your MLC Compliance</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our MLC compliance experts are ready to guide your recruiting or shipping company through Maritime Labour Convention audit requirements.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20">
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
