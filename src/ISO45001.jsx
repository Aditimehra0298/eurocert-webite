import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const services = [
  { icon: 'fa-shield-alt', title: 'ISO 45001 Certification & Compliance', description: 'Full scope verification and certification for Occupational Health & Safety Management System requirements.' },
  { icon: 'fa-clipboard-check', title: 'Comprehensive Audit & Assessment', description: 'Thorough on-site and documentation audits to evaluate your occupational health and safety management system.' },
  { icon: 'fa-chalkboard-teacher', title: 'Training & Consultancy', description: 'Expert coaching and training for your teams on ISO 45001 implementation and workplace safety best practices.' },
  { icon: 'fa-headset', title: 'Ongoing Compliance Support', description: 'Continuous monitoring and support to maintain your ISO 45001 certification and safety standards.' },
  { icon: 'fa-file-alt', title: 'Documentation & Reporting', description: 'Professional OH&S documentation, risk assessments, and management review reporting assistance.' },
  { icon: 'fa-sync-alt', title: 'Remediation Support', description: 'Fixing non-conformities and gaps identified during the health and safety management assessment process.' }
]

const objectives = [
  { icon: 'fa-user-shield', title: 'Minimize Risk', desc: 'Minimize risk to employees and others in the workplace.' },
  { icon: 'fa-chart-line', title: 'Improve Performance', desc: 'Improve business performance through safer operations.' },
  { icon: 'fa-handshake', title: 'Responsible Image', desc: 'Assist organizations in establishing a responsible image within the marketplace.' }
]

const benefits = [
  { icon: 'fa-coins', title: 'Cost Reduction', desc: 'Cost reduction through improvement in work safety.' },
  { icon: 'fa-calendar-check', title: 'Reduced Absenteeism', desc: 'Reduction in number of accidents and absenteeism.' },
  { icon: 'fa-hard-hat', title: 'Staff Protection', desc: 'Demonstrate your commitment to the protection of staff, property and plant.' },
  { icon: 'fa-gavel', title: 'Legal Compliance', desc: 'Demonstrate legal compliance with OH&S regulations.' },
  { icon: 'fa-users', title: 'Employee Motivation', desc: 'Increase in employee motivation across the organization.' },
  { icon: 'fa-shield-alt', title: 'Safety Culture', desc: 'Improve your safety culture throughout the organization.' },
  { icon: 'fa-sync-alt', title: 'Flexible Transitions', desc: 'Increased flexibility and smoother transition to changes through more transparent processes.' },
  { icon: 'fa-bullseye', title: 'Hazard Control', desc: 'Increase control and reduction of hazards through setting of objectives, targets and evolved responsibility.' }
]

const relatedServices = [
  { title: 'ISO 9001', subtitle: 'Quality Management', image: '/m2.png', link: '/management-system/iso-9001' },
  { title: 'ISO 14001', subtitle: 'Environmental Management', image: '/m3.png', link: '/management-system/iso-14001' },
  { title: 'ISO 27001', subtitle: 'Information Security', image: '/m5.png', link: '/management-system/iso-27001' }
]

export default function ISO45001() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/m4.png" className="w-full h-full object-cover opacity-30" alt="ISO 45001 Health & Safety" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Occupational health and safety management</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            ISO 45001 — Health & Safety
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Framework for managing occupational health and safety risks and providing safe workplaces.
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
                  ISO 45001 — <span className="text-euro-600">Occupational Health & Safety</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                ISO 45001 can be adopted by any organization wishing to implement a formal procedure to reduce the risks associated with health and safety in the working environment for employees, customers and the general public.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">The OHSAS specification is applicable to any organisation that wishes to:</p>
              <ul className="space-y-2 pl-1">
                <li className="flex items-start gap-3 text-slate-500 text-[15px] leading-relaxed">
                  <i className="fas fa-check-circle text-euro-600 text-sm mt-1 shrink-0"></i>
                  Establish an OH&S management system to eliminate or minimize risk to employees and other interested parties who may be exposed to OH&S risks associated with its activities.
                </li>
                <li className="flex items-start gap-3 text-slate-500 text-[15px] leading-relaxed">
                  <i className="fas fa-check-circle text-euro-600 text-sm mt-1 shrink-0"></i>
                  Implement, maintain and continually improve an OH&S management system.
                </li>
              </ul>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-hard-hat text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">What is ISO 45001:2018?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  ISO 45001:2018 is an international standard giving requirements related to health and safety management systems. It is designed to help organizations control occupational health and safety risks. It enables an organization to have control over, and knowledge of, all relevant hazards resulting from normal operations and abnormal situations, and improve its performance.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  OHSAS uses the prevention concept instead of cure. OHSAS 18001 has been designed to be compatible with ISO 9001 and ISO 14001, to help your organization meet their health and safety obligations in an efficient manner.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/m4.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="ISO 45001 Health & Safety" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope & Objectives - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Scope & Objectives</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Scope & Benefits of <span className="text-euro-600">ISO 45001:2018</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">The standard has three core objectives</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
            {objectives.map((o, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group text-center">
                <div className="w-14 h-14 rounded-xl bg-euro-600 flex items-center justify-center text-white mb-4 mx-auto group-hover:bg-eurogold-400 group-hover:text-[#030a16] transition-all duration-300">
                  <i className={`fas ${o.icon} text-xl`}></i>
                </div>
                <h4 className="heading-font text-[12px] font-bold uppercase tracking-widest text-slate-900 mb-2">{o.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mb-8">
            <h3 className="heading-font text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Main <span className="text-euro-600">Benefits</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className="p-5 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-3 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${b.icon} text-base`}></i>
                </div>
                <h4 className="heading-font text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-1.5">{b.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Services</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              ISO 45001 <span className="text-euro-600">Services</span>
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
        </div>
      </section>

      {/* Why Eurocert - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Trusted Certification Partner</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Why Certify with Eurocert SA?
                </h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-building text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">About Eurocert</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Eurocert S A is a Greek Independent Certification Body accredited by Greek and International Accreditation Bodies with offices in more than 14 countries in Europe and Asia. Eurocert S A possesses highly-trained and educated auditors with great expertise and experience in their field.
                  </p>
                </div>
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-award text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">Our Expertise</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    Eurocert has earned recognition in the field of OHSAS certification by conducting audits according to OHSAS 18001 for many years.
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed font-medium">
                    Certification with Eurocert SA means evaluation and acceptance by an accredited and well-respected third-party professional organization.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="p-5 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                  <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">14+</span>
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Countries</span>
                </div>
                <div className="p-5 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                  <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">25+</span>
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Years Experience</span>
                </div>
                <div className="p-5 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                  <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">100%</span>
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Have Questions?</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Frequently Asked <span className="text-euro-600">Questions</span>
              </h2>
            </div>
            <div className="space-y-5">
              <div className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-clock text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[12px] font-bold uppercase tracking-widest text-slate-900">How long does it take to gain an ISO 45001:2018 certificate?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Typically between 6-12 months, although this depends on many factors. The company must demonstrate that the management system is fully implemented and meets all the requirements of the standard.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-balance-scale text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[12px] font-bold uppercase tracking-widest text-slate-900">Does it substitute public audits?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  ISO 45001:2018 is a voluntary certification aiming at continual improvement which cannot replace public or official audits. By organizing the company however, ISO 45001:2018 ensures that the company complies with all relevant legislation and helps prevent any unexpected problems or fines during official audits.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-link text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[12px] font-bold uppercase tracking-widest text-slate-900">Is it compatible with other standards?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  ISO 45001:2018 has been developed to be compatible with the ISO 9001 and ISO 14001.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Certifications - Light */}
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
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our health & safety experts are ready to guide your organization through ISO 45001 certification.</p>
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
