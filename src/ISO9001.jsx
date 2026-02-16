import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const services = [
  { icon: 'fa-shield-alt', title: 'ISO 9001 Certification & Compliance', description: 'Full scope verification and certification for Quality Management System requirements under ISO 9001.' },
  { icon: 'fa-clipboard-check', title: 'Comprehensive Audit & Assessment', description: 'Thorough on-site and documentation audits to evaluate your quality management system effectiveness.' },
  { icon: 'fa-chalkboard-teacher', title: 'Training & Consultancy', description: 'Expert coaching and training for your teams on ISO 9001 implementation and quality best practices.' },
  { icon: 'fa-headset', title: 'Ongoing Compliance Support', description: 'Continuous monitoring and support to maintain your ISO 9001 certification and quality standards.' },
  { icon: 'fa-file-alt', title: 'Documentation & Reporting', description: 'Professional quality documentation, process mapping, and management review reporting assistance.' },
  { icon: 'fa-sync-alt', title: 'Remediation Support', description: 'Fixing non-conformities and gaps identified during the quality management assessment process.' }
]

const benefits = [
  { icon: 'fa-check-circle', title: 'Regulatory Compliance', desc: 'Meet all regulatory requirements for quality management systems.' },
  { icon: 'fa-globe-europe', title: 'Market Access', desc: 'Access markets requiring ISO 9001 certification worldwide.' },
  { icon: 'fa-award', title: 'Quality Assurance', desc: 'Demonstrate commitment to consistent product and service quality.' },
  { icon: 'fa-trophy', title: 'Competitive Advantage', desc: 'Stand out in your industry with internationally recognized certification.' },
  { icon: 'fa-shield-alt', title: 'Risk Management', desc: 'Reduce compliance risks and improve operational efficiency.' }
]

const relatedServices = [
  { title: 'ISO 14001', subtitle: 'Environmental Management', image: '/m3.png', link: '/management-system/iso-14001' },
  { title: 'ISO 45001', subtitle: 'OH&S Management', image: '/m4.png', link: '/management-system/iso-45001' },
  { title: 'ISO 27001', subtitle: 'Information Security', image: '/m5.png', link: '/management-system/iso-27001' }
]

export default function ISO9001() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/m2.png" className="w-full h-full object-cover opacity-30" alt="ISO 9001 Quality Management" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">International standard for quality management</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            ISO 9001 — Quality Management System
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Framework for consistent quality in products and services.
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
                  ISO 9001:2015 — <span className="text-euro-600">Quality Management System</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                ISO 9001:2015 is one of the most popular standards. The purpose of ISO 9001:2015 is to organize and create an operating framework for the Company in order to enable the Company to provide products and / or services based on customer needs. The ISO 9001:2015 standard is based on the Deming cycle and the concept of continuous improvement methodology known as «Plan-Do-Check-Act».
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                ISO 9001:2015 can be implemented by all types of enterprises and organizations irrespective of their size and activity.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-bullseye text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Objectives & Benefits of Inspection</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  Quality Management Systems Certification ensures that the company's ongoing effort for continuous improvement in reducing potential risks in food importing and/or during the manufacturing process is publicly recognized. Certified companies have smoother business transactions and are in an advantageous position as far as competition is concerned.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Furthermore, the inspection process, a necessary step for certification, benefits companies by offering valuable insight in their processes which can encourage growth and improvement through remedial measures.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/m2.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="ISO 9001 Quality Management" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Step by Step</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Certification <span className="text-euro-600">Process</span>
              </h2>
              <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">ISO 9001:2015 Certification is provided by a Certification Body accredited to this standard.</p>
            </div>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Application', desc: 'The Company must decide on the type of certification and apply for it.' },
                { step: '02', title: 'Pre-Assessment Inspection', desc: 'The Certification Body provides an appropriate inspection team and performs a pre-assessment on-site inspection of the Quality Management System.' },
                { step: '03', title: 'Documentation Review', desc: 'During the pre-assessment inspection, the Certification Body checks the completeness of system documentation (manual, procedures, instructions, forms, etc.) and implementation (Archives) under the International Standard ISO 9001:2015.' },
                { step: '04', title: 'Corrective Actions', desc: 'Deviations are recorded and the Company defines the appropriate period of time within which the necessary corrective actions will take place.' },
                { step: '05', title: 'Assessment Audit', desc: 'Once the corrective actions have been taken, the Assessment inspection takes place, during which the system is audited as a whole and the completion of all corrective actions is checked.' },
                { step: '06', title: 'Certification Issued', desc: 'If the Assessment inspection does not record any non-compliances to the standard ISO 9001:2015 then the Certification Body issues the ISO 9001:2015 Certification. In the case of recorded non-compliances the Company must take further corrective actions.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 p-5 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-euro-600 flex items-center justify-center shrink-0 group-hover:bg-eurogold-400 transition-colors duration-300">
                    <span className="heading-font text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="heading-font text-[12px] font-bold uppercase tracking-widest text-slate-900 mb-1.5">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents + Certificate Validity - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Required Documents */}
            <div className="p-8 rounded-2xl border border-euro-100 bg-euro-50/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                  <i className="fas fa-file-alt text-white text-sm"></i>
                </div>
                <h3 className="heading-font text-xl font-bold text-slate-900 tracking-tight">Required Documents</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">During the Audit all the below are checked:</p>
              <ul className="space-y-3">
                {[
                  'License of the Company and the accompanying documents',
                  'Other permits required',
                  'Organizational Structure / Chart',
                  'Objectives',
                  'Procedures',
                  'Instructions for External Documents (eg Legislation)'
                ].map((doc, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <div className="w-6 h-6 rounded-lg bg-euro-600/10 flex items-center justify-center shrink-0 mt-0.5">
                      <i className="fas fa-check text-euro-600 text-[9px]"></i>
                    </div>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certificate Validity */}
            <div className="p-8 rounded-2xl border border-eurogold-400/20 bg-eurogold-400/5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-eurogold-400 flex items-center justify-center">
                  <i className="fas fa-certificate text-[#030a16] text-sm"></i>
                </div>
                <h3 className="heading-font text-xl font-bold text-slate-900 tracking-tight">Certificate Validity</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Provided that the Assessment Audit of the Organization's / Company's Quality Management System is successful, the Certificate is issued shortly.
              </p>
              <div className="p-5 rounded-xl bg-white border border-eurogold-400/15 text-center">
                <span className="heading-font text-eurogold-500 font-bold text-4xl block mb-1">3 Years</span>
                <span className="text-slate-400 text-xs heading-font font-bold uppercase tracking-widest">Certificate Validity Period</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mt-4">
                During the three-year validity period, <strong className="text-slate-700">two annual surveillance audits</strong> must take place to maintain the certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Services</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              ISO 9001 <span className="text-euro-600">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
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

      {/* Benefits & Why - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
              <div className="lg:col-span-3">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Key Advantages</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
                  Why Get ISO 9001 Certified?
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-eurogold-400/10 flex items-center justify-center shrink-0">
                        <i className={`fas ${b.icon} text-eurogold-400 text-xs`}></i>
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-xs uppercase tracking-wide heading-font mb-1">{b.title}</h5>
                        <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 p-8 rounded-2xl border border-white/5 bg-white/2 flex flex-col justify-center">
                <h3 className="heading-font text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">Why Eurocert?</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-6">Our experienced auditors understand ISO 9001 requirements and can guide you through the certification process.</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                    <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">25+</span>
                    <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Years Experience</span>
                  </div>
                  <div className="p-4 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                    <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">100%</span>
                    <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services - Light */}
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
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our quality management experts are ready to guide your organization through ISO 9001 certification.</p>
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
