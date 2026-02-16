import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const riskAssessmentSteps = [
  { num: '01', title: 'Map Cargo/Data Flow', desc: 'Map cargo/data flow and control, identify business partners (directly or indirectly contracted) and how cargo moves throughout the supply chain including modes of transportation (air, sea, rail, or truck) and nodes (country of origin, transit points).' },
  { num: '02', title: 'Conduct Threat Assessment', desc: 'Focus on Terrorism, Contraband Smuggling, Human Smuggling, Agricultural and Public Safety Threats, Organized Crime, and conditions in a country/region which may foster such threats, and rank those threats.' },
  { num: '03', title: 'Conduct Vulnerability Assessment', desc: 'In accordance with C-TPAT Minimum Security Criteria — identify what the Partner has that a terrorist or criminal might desire (data, access to cargo, company information), then identify weaknesses in procedures that would allow access.' },
  { num: '04', title: 'Prepare Written Action Plan', desc: 'Address vulnerabilities with mechanisms to record identified weaknesses, who is responsible for addressing the issues, and due dates. Report results to appropriate company officials and employees on completed follow up and changes.' },
  { num: '05', title: 'Document the Procedure', desc: 'Document how risk assessments are conducted, including reviewing and revising the procedure periodically. The process should be reviewed and updated at least annually, and a Risk Assessment should be conducted and documented at least annually.' }
]

const newCriteria = [
  { icon: 'fa-user-shield', title: 'Management Commitment to a Culture of Security' },
  { icon: 'fa-laptop-code', title: 'Cyber Security and Protection from Social Engineering Threats' },
  { icon: 'fa-seedling', title: 'Agricultural Security' },
  { icon: 'fa-money-bill-wave', title: 'Prevention of Money Laundering and Terrorism Financing' }
]

const benefits = [
  { icon: 'fa-shield-alt', title: 'C-TPAT Validation', desc: 'Achieve validated status through U.S. Customs & Border Protection partnership.' },
  { icon: 'fa-search', title: 'Supply Chain Security Assessment', desc: 'Comprehensive assessment of your supply chain security practices and vulnerabilities.' },
  { icon: 'fa-cogs', title: 'Security Best Practices', desc: 'Implement robust security controls and best practices across your supply chain.' },
  { icon: 'fa-shipping-fast', title: 'Faster Customs Clearance', desc: 'Reduce delays and expedite customs processing at the border.' },
  { icon: 'fa-check-double', title: 'Reduced Inspections', desc: 'C-TPAT members are considered low risk and less likely to be examined at U.S. ports of entry.' },
  { icon: 'fa-star', title: 'Priority CBP Processing', desc: 'Receive priority processing for your shipments through CBP.' },
  { icon: 'fa-flag-usa', title: 'Front-of-Line Status', desc: 'Front-of-line status at U.S. border crossings for faster movement of goods.' },
  { icon: 'fa-handshake', title: 'Enhanced Trade Partnership', desc: 'Strengthen your partnership with U.S. Customs & Border Protection.' }
]

const relatedServices = [
  { title: 'ISO 28000', subtitle: 'Supply Chain Security', image: '/b10.png', link: '/social-audits/iso-28000' },
  { title: 'RMI', subtitle: 'Responsible Minerals', image: '/b8.png', link: '/social-audits/rmi' },
  { title: 'ISO 37001', subtitle: 'Anti-Bribery', image: '/b12.png', link: '/social-audits/iso-37001' }
]

export default function CTPAT() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/b9.png" className="w-full h-full object-cover opacity-30" alt="C-TPAT Customs-Trade Partnership Against Terrorism" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Voluntary Supply Chain Security Program by U.S. Customs & Border Protection</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            C-TPAT — <span className="text-eurogold-400">Customs-Trade Partnership Against Terrorism</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Strengthen your supply chain security, reduce inspections, and improve border clearance with the CBP partnership program
          </p>
        </div>
      </section>

      {/* What is C-TPAT - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Program Overview</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  What is <span className="text-euro-600">C-TPAT?</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                U.S. Customs and Border Protection (CBP) listened to the recommendations made by the Advisory Committee on Commercial Operations (COAC), which encouraged the creation of the C-TPAT Exporter Entity. CBP introduced an exporter entity to C-TPAT to support export growth and increase the competitiveness of the U.S. business community, as outlined by President Obama&apos;s National Export Initiative.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                CBP is also interested in providing the U.S. business community with benefits currently enjoyed by foreign importers through Mutual Recognition Arrangements (MRA). This is an opportunity to align with the programs of foreign customs under the World Customs Organization&apos;s (WCO) Framework of Standards to Secure and Facilitate Global Trade (SAFE Framework).
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-handshake text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">How C-TPAT Works</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  When an entity joins C-TPAT, an agreement is made to work with CBP to protect the supply chain, identify security gaps, and implement specific security measures and best practices. Applicants must address a broad range of security topics and present security profiles that list action plans to align security throughout the supply chain. <strong className="text-slate-700">C-TPAT members are considered to be of low risk</strong>, and are therefore less likely to be examined at a U.S. port of entry.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/b9.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="C-TPAT Customs-Trade Partnership" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Risk Assessment - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Risk Assessment</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                The Five Step <span className="text-euro-600">Risk Assessment Process</span>
              </h2>
            </div>
            <div className="space-y-4">
              {riskAssessmentSteps.map((s, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-euro-600 flex items-center justify-center shrink-0">
                      <span className="heading-font text-white font-bold text-sm">{s.num}</span>
                    </div>
                    <div>
                      <h4 className="heading-font text-sm font-bold uppercase tracking-widest text-slate-900 mb-2">{s.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* C-TPAT Validation FAQ - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Understanding Validation</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  C-TPAT <span className="text-eurogold-400">Validation FAQs</span>
                </h3>
              </div>
              <div className="space-y-5">
                <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-question text-eurogold-400 text-xs"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-[11px] uppercase tracking-widest">What is a C-TPAT Validation?</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    A C-TPAT validation is a process through which the U.S. Customs and Border Protection (CBP) C-TPAT program meets with company representatives and visits selected domestic and foreign sites to verify supply chain security measures contained in the C-TPAT participant&apos;s security profile are accurate and are being followed.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-bullseye text-eurogold-400 text-xs"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-[11px] uppercase tracking-widest">What is the Goal of a C-TPAT Validation?</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    The principal goal for CBP is to ensure that the company&apos;s C-TPAT security profile is reliable, accurate, and effective. However, validations also provide a forum through which CBP and a C-TPAT participant can build a stronger partnership by discussing supply chain security issues, sharing &quot;best practices,&quot; and cooperatively developing solutions to address potential vulnerabilities. The face-to-face nature encourages both CBP and the C-TPAT participant to better understand the role each plays in securing borders against international terrorism.
                  </p>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-not-equal text-eurogold-400 text-xs"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-[11px] uppercase tracking-widest">Is a C-TPAT Validation an Audit?</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    <strong className="text-eurogold-400">No.</strong> A validation is not an audit. Whereas CBP routinely performs audits in a variety of operational and regulatory areas (e.g. trade compliance, NAFTA), C-TPAT validations do not measure a company&apos;s adherence to existing government rules and regulations. Instead, the validation is focused on the verification of supply chain security processes and procedures that a company voluntarily agrees to verify or perform under the auspices of the C-TPAT program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Criteria - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Updated Requirements</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                C-TPAT <span className="text-euro-600">New Criteria</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {newCriteria.map((c, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 shrink-0 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${c.icon} text-lg`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900">{c.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Membership Benefits</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Benefits of C-TPAT <span className="text-euro-600">Membership</span>
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
                  Why Get Audited by <span className="text-eurogold-400">Eurocert?</span>
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
                    Eurocert is a Greek Independent Certification Body accredited by Greek and International Accreditation Bodies with offices in more than 14 countries in Europe and Asia. Eurocert possesses highly-trained and educated auditors with great expertise and experience in supply chain security.
                  </p>
                </div>
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-shield-alt text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">C-TPAT Expertise</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-3">
                    Eurocert Inspection Services provides methods, audits, and reviews to better manage and improve shipment-related data, and can help businesses achieve C-TPAT status. With a potential for fines, maintaining compliance is important.
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed">
                    We perform supply chain security audits against all Customs-Trade Partnership Against Terrorism (C-TPAT) global and regional requirements, including the updated Minimum Security Requirements.
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

      {/* CTPAT-ISO 28000 Exchange Platform CTA */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-100 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/CTPAT.webp" alt="C-TPAT Logo" className="h-11 object-contain" />
                  <div className="w-px h-9 bg-slate-200"></div>
                  <img src="/ISO-28000-Logo-1.webp" alt="ISO 28000 Logo" className="h-11 object-contain" />
                </div>
                <h3 className="heading-font text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                  CTPAT Audits - ISO 28000 <span className="text-euro-600">Exchange Platform</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Access our secure exchange platform to manage C-TPAT audit reports, share ISO 28000 compliance data, and connect buyers with certified manufacturers.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/ctpat-login" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-euro-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-euro-700 transition-all duration-300 shadow-md">
                    Login to Platform
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                  <Link to="/ctpat-register" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-euro-200 text-euro-600 text-xs font-bold uppercase tracking-widest hover:bg-euro-50 transition-all duration-300">
                    Register Now
                  </Link>
                </div>
              </div>
              <div className="bg-[#f8fafc] p-8 md:p-12 flex flex-col justify-center gap-5 border-l border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center shrink-0">
                    <i className="fas fa-shopping-bag text-euro-600 text-sm"></i>
                  </div>
                  <div>
                    <h5 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-1">For Buyers</h5>
                    <p className="text-slate-400 text-xs leading-relaxed">Access audit reports, manage supply chain compliance, and connect with certified manufacturers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-eurogold-50 flex items-center justify-center shrink-0">
                    <i className="fas fa-industry text-eurogold-600 text-sm"></i>
                  </div>
                  <div>
                    <h5 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-1">For Manufacturers</h5>
                    <p className="text-slate-400 text-xs leading-relaxed">Showcase your C-TPAT compliance, share ISO 28000 results, and connect with global buyers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                    <i className="fas fa-shield-alt text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <h5 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-1">Secure & Trusted</h5>
                    <p className="text-slate-400 text-xs leading-relaxed">Enterprise-grade security for all your supply chain compliance data and audit reports.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services - Soft */}
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
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Get Compliant</h4>
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Start Your C-TPAT Journey</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our supply chain security experts are ready to guide your organization through C-TPAT validation and compliance with all global and regional requirements.</p>
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
