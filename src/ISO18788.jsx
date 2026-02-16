import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const basicRequirements = [
  'Accountability to law and respect for human rights — compliance with working hour and wages requirement of the law of the land',
  'Compliance with The International Code of Conduct for Private Security Providers (ICoC) 2010',
  'The Montreux Document on Pertinent International Obligations and Good Practices for States Related to Operations of Private Military and Security Companies During Armed Conflict, 2008',
  'Guiding Principles on Business and Human Rights, Implementing the United Nations "Protect, Respect and Remedy" Framework, 2011'
]

const conductPrinciples = [
  { icon: 'fa-crosshairs', title: 'Rules for Use of Force', desc: 'Defining the Rules for the Use of Force.' },
  { icon: 'fa-lock', title: 'Detention Procedures', desc: 'Procedure and circumstances where Detention can be used.' },
  { icon: 'fa-user-shield', title: 'Apprehension Training', desc: 'Training on how to Apprehend Persons.' },
  { icon: 'fa-ban', title: 'Prohibition of Torture', desc: 'Prohibition of Torture or any other form of Inhuman Treatment.' },
  { icon: 'fa-exclamation-triangle', title: 'Discouraging Punishment', desc: 'Procedures to discourage Punishment.' },
  { icon: 'fa-venus-mars', title: 'Preventing Exploitation', desc: 'Processes to prevent Sexual Exploitation or Gender-Based Violence.' },
  { icon: 'fa-people-carry', title: 'Human Trafficking', desc: 'Avoidance of Human Trafficking.' },
  { icon: 'fa-hand-paper', title: 'Forced Labour Prevention', desc: 'Prohibition of Slavery and Forced Labour and Child Labour in Supply Chain.' },
  { icon: 'fa-balance-scale', title: 'Anti-Discrimination', desc: 'Process to eliminate Discrimination.' }
]

const managementCommitments = [
  { icon: 'fa-user-check', title: 'Personnel Vetting', desc: 'Selection and Vetting of Personnel and Subcontractors.' },
  { icon: 'fa-file-contract', title: 'Policies & Contracts', desc: 'Company Policies and Personnel Contracts.' },
  { icon: 'fa-chalkboard-teacher', title: 'Weapons Training', desc: 'Training of Personnel in use and management of weapons.' },
  { icon: 'fa-boxes', title: 'Materiel Management', desc: 'Management of Materiel of War.' },
  { icon: 'fa-clipboard-list', title: 'Incident Reporting', desc: 'Incident Reporting procedures.' },
  { icon: 'fa-hard-hat', title: 'Safe Environment', desc: 'Safe and Healthy Working Environment.' },
  { icon: 'fa-comments', title: 'Grievance Procedure', desc: 'Prevention of Harassment and Grievance procedure.' }
]

const services = [
  { icon: 'fa-shield-alt', title: 'ISO 18788 Certification & Compliance', description: 'Full scope verification and certification for Security Operations Management System requirements under ISO 18788.' },
  { icon: 'fa-clipboard-check', title: 'Comprehensive Audit & Assessment', description: 'Thorough on-site and documentation audits to evaluate your security operations management system effectiveness.' },
  { icon: 'fa-chalkboard-teacher', title: 'Training & Consultancy', description: 'Expert coaching and training for your teams on ISO 18788 implementation and security operations best practices.' },
  { icon: 'fa-headset', title: 'Ongoing Compliance Support', description: 'Continuous monitoring and support to maintain your ISO 18788 certification and security standards.' },
  { icon: 'fa-file-alt', title: 'ICoCA Compliance Support', description: 'Assistance with ICoCA membership, code of conduct compliance, and SOMS alignment with ICoCA requirements.' },
  { icon: 'fa-sync-alt', title: 'Remediation Support', description: 'Fixing non-conformities and gaps identified during the security operations management assessment process.' }
]

const relatedServices = [
  { title: 'ISO 9001', subtitle: 'Quality Management', image: '/m2.png', link: '/management-system/iso-9001' },
  { title: 'ISO 45001', subtitle: 'OH&S Management', image: '/m4.png', link: '/management-system/iso-45001' },
  { title: 'ISO 27001', subtitle: 'Information Security', image: '/m5.png', link: '/management-system/iso-27001' }
]

export default function ISO18788() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/m8.png" className="w-full h-full object-cover opacity-30" alt="ISO 18788 Security Operations Management" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Security operations management system</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            ISO 18788 — Security Operations
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Management systems for private security service providers ensuring quality, compliance, and human rights.
          </p>
        </div>
      </section>

      {/* Intro + What Is - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Standard Overview</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  What is <span className="text-euro-600">ISO 18788</span> Certification?
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                ISO 18788:2015 certification ensures that a security service provider has a management system that monitors and improves critical factors that define the quality of service for a security operation management.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Security Operation Management Systems (SOMS) provides a framework for due diligence, risk assessment and identifying processes and their corresponding KPIs for delivering reliable and compliant services for security.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-clipboard-list text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Basic Requirements for ICoCA Compliant Certification</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">Most important requirements related to ISO 18788 certified SOMS provider are:</p>
                <ul className="space-y-2.5">
                  {basicRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-500 text-sm leading-relaxed">
                      <i className="fas fa-check-circle text-euro-600 text-xs mt-1 shrink-0"></i>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/m8.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="ISO 18788 Security Operations Management" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ICoCA Compliant Certification - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">ICoCA Compliance</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                What is ICoCA Compliant <span className="text-euro-600">ISO 18788 SOMS</span> Certification?
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <div className="p-8 rounded-2xl border border-euro-100 bg-white flex items-center">
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  ICoCA is a multi-stakeholder initiative formed in 2013 to ensure that providers of private security services respect human rights and humanitarian law. ICoCA has developed a code of conduct which members have to comply with. So all ISO 18788 certifications which are ICoCA compliant have to become an ICoCA member and undertake to comply with the ICoCA code.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 group">
                <img src="/05.webp" className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" alt="ICoCA Compliant SOMS ISO 18788 Certification" />
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="heading-font text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Main Steps for <span className="text-euro-600">ICoCA Code</span> Compliance
              </h3>
              <p className="text-slate-400 text-sm mt-2">ICoCA code has two main elements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Regarding Conduct - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-euro-200 bg-euro-50 mb-4">
                <span className="heading-font text-[10px] text-euro-600 tracking-[0.3em] uppercase font-bold">Element 1</span>
              </div>
              <h3 className="heading-font text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Principles Regarding the <span className="text-euro-600">Conduct of Personnel</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {conductPrinciples.map((p, i) => (
                <div key={i} className="p-5 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-3 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${p.icon} text-base`}></i>
                  </div>
                  <h4 className="heading-font text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-1.5">{p.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management & Governance - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-euro-200 bg-euro-50 mb-4">
                <span className="heading-font text-[10px] text-euro-600 tracking-[0.3em] uppercase font-bold">Element 2</span>
              </div>
              <h3 className="heading-font text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Specific Commitments Regarding <span className="text-euro-600">Management & Governance</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {managementCommitments.map((m, i) => (
                <div key={i} className="p-5 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-3 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${m.icon} text-base`}></i>
                  </div>
                  <h4 className="heading-font text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-1.5">{m.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{m.desc}</p>
                </div>
              ))}
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
              ISO 18788 <span className="text-euro-600">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${s.icon} text-base`}></i>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-10 p-5 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
            <p className="text-slate-600 text-sm leading-relaxed">
              <span className="text-eurogold-500 font-bold">We are offering above services on behalf of Eurocert</span> — a Pan-European Certification body with global reach and accredited expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
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
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Get Certified</h4>
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Quick Inquiry</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our security management experts are ready to guide your organization through ISO 18788 and ICoCA compliant certification.</p>
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
