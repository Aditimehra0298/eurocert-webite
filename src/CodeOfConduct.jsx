import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const benefits = [
  { icon: 'fa-file-contract', title: 'Brand-Specific Code Audits', desc: 'Comprehensive audits against specific ethical codes set by major global brands and retailers.' },
  { icon: 'fa-store', title: 'Retailer Code Compliance', desc: 'Verification of compliance with retailer-specific standards covering labor, safety, and ethics.' },
  { icon: 'fa-users', title: 'Labor Standards Assessment', desc: 'Thorough evaluation of labor practices including wages, working hours, and worker rights.' },
  { icon: 'fa-leaf', title: 'Environmental Compliance', desc: 'Assessment of environmental practices and compliance with brand environmental requirements.' },
  { icon: 'fa-tasks', title: 'Corrective Action Planning', desc: 'Development of actionable remediation plans to address identified non-conformities.' },
  { icon: 'fa-globe-europe', title: 'Global Supply Chain Assurance', desc: 'End-to-end supply chain verification ensuring ethical standards are met across all tiers.' },
  { icon: 'fa-handshake', title: 'Stakeholder Trust', desc: 'Build confidence among brands, retailers, and consumers through verified ethical compliance.' },
  { icon: 'fa-chart-line', title: 'Continuous Improvement', desc: 'Ongoing monitoring and support to continuously improve ethical performance and compliance.' }
]

const services = [
  { icon: 'fa-clipboard-check', title: 'Brand Code Audits', description: 'Comprehensive audits against brand-specific codes of conduct covering all ethical, social, and environmental requirements.' },
  { icon: 'fa-search', title: 'Compliance Assessment', description: 'Detailed gap analysis between current practices and specific code of conduct requirements from brands and retailers.' },
  { icon: 'fa-tools', title: 'Corrective Action Planning', description: 'Development of prioritized corrective action plans with timelines and responsible parties to address findings.' },
  { icon: 'fa-chalkboard-teacher', title: 'Training & Awareness', description: 'Training programs for management and workers on code of conduct requirements, rights, and responsibilities.' },
  { icon: 'fa-file-alt', title: 'Documentation Support', description: 'Assistance with developing and maintaining required documentation, policies, and procedures.' },
  { icon: 'fa-sync-alt', title: 'Follow-Up Audits', description: 'Verification audits to confirm corrective actions have been effectively implemented and sustained.' },
  { icon: 'fa-headset', title: 'Ongoing Support', description: 'Continuous advisory support to maintain compliance and prepare for scheduled and unannounced audits.' },
  { icon: 'fa-chart-bar', title: 'Performance Reporting', description: 'Comprehensive reporting on compliance status, trends, and improvement recommendations.' }
]

const relatedServices = [
  { title: 'SA 8000', subtitle: 'Social Accountability', image: '/b1.png', link: '/social-audits/sa-8000' },
  { title: 'SEDEX / SMETA', subtitle: 'Ethical Trade Audits', image: '/b2.png', link: '/social-audits/sedex' },
  { title: 'WRAP', subtitle: 'Responsible Production', image: '/b4.png', link: '/social-audits/wrap' }
]

export default function CodeOfConduct() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/b3.png" className="w-full h-full object-cover opacity-30" alt="Code of Conduct Audits" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Ethical Compliance Verification for Global Supply Chains</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Code of Conduct <span className="text-eurogold-400">Audits</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Brand & Retailer Compliance Verification
          </p>
        </div>
      </section>

      {/* Intro - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Service Overview</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Code of Conduct — <span className="text-euro-600">Brand & Retailer Audits</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Code of Conduct audits verify that suppliers and manufacturers comply with specific ethical standards set by brands and retailers. We conduct comprehensive audits covering labor rights, working conditions, environmental impact, and business ethics to ensure compliance with various codes of conduct from major global brands.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Our experienced auditors are trained on multiple brand-specific codes and deliver thorough, unbiased assessments that help suppliers meet the expectations of their buyers while improving their own operations and worker welfare.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-file-contract text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">What is a Code of Conduct Audit?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  A Code of Conduct audit is a third-party assessment that evaluates a supplier's or manufacturer's compliance with the ethical, social, and environmental standards defined by a specific brand or retailer. These audits typically cover labor practices, health & safety, environmental management, business ethics, and sub-contracting controls.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/b3.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Code of Conduct Audits" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Key Benefits</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Benefits of Code of Conduct <span className="text-euro-600">Audits</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group text-center">
                <div className="w-12 h-12 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 mx-auto group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${b.icon} text-lg`}></i>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{b.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Services</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Code of Conduct <span className="text-euro-600">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
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
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Trusted Audit Partner</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Why Choose <span className="text-eurogold-400">Eurocert?</span>
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
                    Eurocert is a Greek Independent Certification Body accredited by Greek and International Accreditation Bodies with offices in more than 14 countries in Europe and Asia. Our auditors are trained on multiple brand-specific codes of conduct.
                  </p>
                </div>
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-award text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">Our Expertise</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Our team has extensive experience conducting Code of Conduct audits for major international brands and retailers across diverse industries and geographies.
                  </p>
                </div>
              </div>
              <div className="p-5 mt-8 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                <p className="text-white/60 text-sm leading-relaxed">
                  <span className="text-eurogold-400 font-bold">We are offering above services on behalf of Eurocert S.A</span> — a Pan-European Certification body operating from Athens with global reach.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
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
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Get Audited</h4>
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Start Your Compliance Journey</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our social compliance experts are ready to help you meet brand and retailer code of conduct requirements.</p>
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
