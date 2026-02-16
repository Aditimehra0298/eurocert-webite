import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const memberBenefits = [
  { icon: 'fa-clipboard-check', title: 'RMAP Verification', desc: 'The Responsible Minerals Assurance Process (RMAP) provides an independent third-party verification of responsible mineral sourcing practices.' },
  { icon: 'fa-book-open', title: 'Resource Library', desc: 'A comprehensive online library of resources on responsible minerals sourcing to support your compliance journey.' },
  { icon: 'fa-chalkboard-teacher', title: 'Training Programs', desc: 'Training and capacity building programs on responsible minerals sourcing for your teams and supply chain partners.' },
  { icon: 'fa-users', title: 'Stakeholder Engagement', desc: 'Engagement with key stakeholders in the minerals sector, including governments, NGOs, and industry associations.' }
]

const services = [
  { icon: 'fa-mountain', title: 'RMI Audit & Assessment', desc: 'Comprehensive audits and assessments against responsible sourcing standards for smelters, refiners, and supply chain participants.' },
  { icon: 'fa-check-circle', title: 'Responsible Sourcing Verification', desc: 'Verify that minerals are sourced from conflict-free and responsible suppliers across your entire value chain.' },
  { icon: 'fa-search', title: 'Supply Chain Due Diligence', desc: 'Implement robust due diligence across your mineral supply chain in line with OECD guidance.' },
  { icon: 'fa-certificate', title: 'Conflict-Free Certification', desc: 'Demonstrate commitment to conflict-free mineral sourcing with recognized certification.' },
  { icon: 'fa-industry', title: 'RMAP Smelter/Refiner Audits', desc: 'Support for Responsible Minerals Assurance Process audits at smelter and refiner level.' },
  { icon: 'fa-gavel', title: 'Dodd-Frank Compliance', desc: 'Meet U.S. Dodd-Frank Act Section 1502 requirements for conflict minerals reporting.' },
  { icon: 'fa-globe-europe', title: 'EU Conflict Minerals Regulation', desc: 'Comply with EU regulations on responsible mineral sourcing from conflict-affected areas.' },
  { icon: 'fa-file-alt', title: 'Stakeholder Reporting', desc: 'Provide transparent, credible reporting to stakeholders on your mineral sourcing practices.' }
]

const relatedServices = [
  { title: 'RJC', subtitle: 'Responsible Jewellery Council', image: '/b7.png', link: '/social-audits/rjc' },
  { title: 'ISO 28000', subtitle: 'Supply Chain Security', image: '/b10.png', link: '/social-audits/iso-28000' },
  { title: 'C-TPAT', subtitle: 'Supply Chain Security', image: '/b9.png', link: '/social-audits/ctpat' }
]

export default function RMI() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/b8.png" className="w-full h-full object-cover opacity-30" alt="RMI Responsible Minerals Initiative" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Responsible Mineral Sourcing & Supply Chain Due Diligence</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            RMI — <span className="text-eurogold-400">Responsible Minerals Initiative</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A global effort to promote responsible sourcing of minerals and drive transparency and accountability in mineral supply chains
          </p>
        </div>
      </section>

      {/* Intro + What Is - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Initiative Overview</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  What is <span className="text-euro-600">RMI?</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                The RMI (Responsible Minerals Initiative) is a multi-stakeholder effort to improve the responsible sourcing of minerals from conflict-affected and high-risk areas. The initiative seeks to address the link between minerals and armed conflict or violence as well as contribute to peace and security.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                The RMI was launched in 2009 by the Responsible Business Alliance (formerly the Conflict-Free Sourcing Initiative) with support from U.S. State Department's Bureau of Democracy, Human Rights, and Labor. The initiative is now managed by an independent secretariat based in Washington, D.C.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                RMI members include companies across the mineral value chain, NGOs, government entities, and other thought leaders committed to improving responsible mineral sourcing practices throughout global supply chains. Members represent a broad range of industries including electronics, jewelry, and steel manufacturing among others.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-tools text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Tools & Resources</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Working together, RMI members have developed tools and resources to support responsible mineral sourcing including a Framework for Responsible Mineral Supply Chains that provides guidance on due diligence practices. It includes an online self-assessment tool for companies to measure their progress on implementing best practices, country profiles with information on risk factors related to specific regions, and case studies highlighting lessons learned from real-world experiences.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/b8.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="RMI Responsible Minerals Initiative" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals & How RMI Helps - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                  <i className="fas fa-bullseye text-white text-sm"></i>
                </div>
                <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">Goals of RMI</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                The goals of the Responsible Minerals Initiative (RMI) are to promote responsible sourcing of minerals from conflict-affected and high-risk areas, and to build capacity within the mineral supply chain to support responsible practices.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                The initiative also aims to engage with key stakeholders, including governments, industry, civil society organizations, and communities affected by mining activities.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                  <i className="fas fa-link text-white text-sm"></i>
                </div>
                <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">How RMI Helps</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                RMI works with companies to help them better understand and manage their risks in the minerals sector. It provides tools and resources to help them make informed decisions about sourcing minerals.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                RMI's efforts help ensure that minerals are sourced responsibly, from conflict-free areas and in a way that supports local communities. RMI's ultimate goal is to contribute to a more responsible minerals trade that supports peace and prosperity for all involved.
              </p>
            </div>
          </div>

          {/* Who are the members */}
          <div className="max-w-5xl mx-auto mt-8 p-8 bg-white rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                <i className="fas fa-users text-white text-sm"></i>
              </div>
              <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">Who are the Members of RMI?</h4>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              The RMI is an industry-wide effort to ensure that minerals used in products are sourced responsibly from regions of conflict and high risk. Members of RMI include companies throughout the mineral supply chain, including miners, smelters, refiners, manufacturers, and retailers. RMI also works with civil society organizations and governments to promote responsible sourcing practices and develop policies that support them.
            </p>
          </div>
        </div>
      </section>

      {/* RMI Image - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-slate-100">
            <img src="/b8.png" className="w-full h-auto object-cover" alt="RMI Responsible Minerals Initiative" />
          </div>
        </div>
      </section>

      {/* Member Benefits - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Membership Value</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Benefits of Being an <span className="text-euro-600">RMI Member</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-3xl mx-auto leading-relaxed">
              RMI is a not-for-profit initiative that brings companies together to drive responsible minerals sourcing throughout their supply chains. By working with RMI, companies can demonstrate their commitment to responsible sourcing and help to build a more sustainable minerals sector.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {memberBenefits.map((b, i) => (
              <div key={i} className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group text-center">
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

      {/* Services - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Services</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              RMI <span className="text-euro-600">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
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
                    Eurocert is a Greek Independent Certification Body accredited by Greek and International Accreditation Bodies with offices in more than 14 countries in Europe and Asia. Eurocert possesses highly-trained and educated auditors with great expertise and experience in responsible mineral sourcing.
                  </p>
                </div>
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-award text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">Meaningful Contribution</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    The RMI has provided companies with necessary guidelines and frameworks to ensure that their supply chains are free from conflict minerals and are fully compliant with global standards.
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed">
                    By investing in suppliers who have adopted the RMI protocol, businesses around the world will be able to make a meaningful contribution towards improving human rights globally.
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
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Get Started</h4>
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Start Your RMI Journey</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our responsible minerals experts are ready to guide your organization through RMI compliance and responsible sourcing verification.</p>
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
