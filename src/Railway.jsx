import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const recentPosts = [
  {
    title: 'EN 15085 Welding Certification Updates',
    date: '07 Feb 2026',
    tag: 'Railway',
    link: '/railway',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'Welder Qualifications Testing Procedure',
    date: '01 Feb 2026',
    tag: 'Welding',
    link: '/welder-qualifications',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'TSI Compliance Requirements 2026',
    date: '25 Jan 2026',
    tag: 'TSI',
    link: '/railway',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'PED Certification for Pressure Equipment',
    date: '18 Jan 2026',
    tag: 'PED',
    link: '/ped',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'Construction Products Regulation',
    date: '10 Jan 2026',
    tag: 'CPR',
    link: '/construction-products',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=200'
  }
]

const en15085Benefits = [
  { icon: 'fa-shield-alt', title: 'Safety Assurance', desc: 'Demonstrates commitment to the highest quality of safety and performance in railway vehicle welding.' },
  { icon: 'fa-trophy', title: 'Competitive Advantage', desc: 'Provides a competitive edge in the marketplace — a must-have for any company taken seriously in the railway industry.' },
  { icon: 'fa-handshake', title: 'Customer Confidence', desc: 'Provides reassurance for both welders and manufacturers that their products are safe and fit for purpose.' },
  { icon: 'fa-globe-europe', title: 'Market Access', desc: 'Access to lucrative contracts in the European rail industry with certified systems and components.' },
  { icon: 'fa-certificate', title: 'Quality Demonstration', desc: 'Gives manufacturers a way to demonstrate their commitment to quality and safety to customers and regulators.' },
  { icon: 'fa-check-double', title: 'Standards Compliance', desc: 'Covers requirements for quality management, welding processes, and welder qualification in the railway industry.' }
]

const importancePoints = [
  { num: '01', text: 'EN 15085 certified welders have demonstrated their ability to produce high quality welds that meet stringent European standards, providing assurance of consistent quality.' },
  { num: '02', text: 'Certified welders can work on a variety of railway vehicles including passenger cars, freight cars, and locomotives — providing flexibility across projects.' },
  { num: '03', text: 'Certified welders have completed extensive training and passed rigorous exams, demonstrating commitment to quality and safety.' }
]

const services = [
  { icon: 'fa-shield-alt', title: 'Railway Certification & Compliance', description: 'Complete railway interoperability certification for systems, subsystems, and components under TSI requirements.' },
  { icon: 'fa-clipboard-check', title: 'Audit & Assessment', description: 'Comprehensive evaluation of railway components against Technical Specifications for Interoperability (TSI).' },
  { icon: 'fa-chalkboard-teacher', title: 'Training & Consultancy', description: 'Expert guidance on European railway standards, EN 15085 welding certification, and TSI compliance.' },
  { icon: 'fa-headset', title: 'Ongoing Support', description: 'Continuous surveillance and monitoring to maintain railway interoperability certification compliance.' },
  { icon: 'fa-file-alt', title: 'Documentation & Reporting', description: 'Technical file preparation, EC declarations, and compliance documentation for railway systems.' },
  { icon: 'fa-sync-alt', title: 'Remediation Support', description: 'Corrective actions for non-conformities in railway component manufacturing and quality systems.' }
]

const certificationSteps = [
  { num: '01', icon: 'fa-file-signature', title: 'Application', desc: 'Complete an application and submit it to the appropriate certification authority for review and approval.' },
  { num: '02', icon: 'fa-pen-fancy', title: 'Written Exam', desc: 'Pass a written exam covering welding quality management, processes, and safety requirements.' },
  { num: '03', icon: 'fa-tools', title: 'Evidence of Capability', desc: 'Provide evidence of welding capabilities through demonstrations and documented procedures.' },
  { num: '04', icon: 'fa-certificate', title: 'Certificate Issued', desc: 'Upon passing the exam and providing evidence, receive a certificate of conformity.' }
]

const relatedServices = [
  { title: 'PED Certification', subtitle: 'Pressure Equipment', image: '/pressure-equipment-ped.png', link: '/ped' },
  { title: 'Welder Qualifications', subtitle: 'Testing Procedure', image: '/hero-banner.png', link: '/welder-qualifications' },
  { title: 'Construction Products', subtitle: 'CPR Certification', image: '/construction-products-cpr.png', link: '/construction-products' }
]

const CheckIcon = () => (
  <svg className="w-5 h-5 text-eurogold-400 drop-shadow-[0_0_5px_rgba(212,168,67,0.5)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function Railway() {
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
          <img src="/railway-interoperability.png" className="w-full h-full object-cover opacity-25" alt="Railway Vehicles Welding" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">EN 15085 &bull; TSI Compliance</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            EN 15085
          </h1>
          <h3 className="heading-font text-white/70 text-base md:text-lg uppercase tracking-[0.3em] mb-4">
            Railway Vehicles Welding Certification
          </h3>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Internationally recognized standard ensuring the highest quality of safety and performance for welding on railway vehicles.
          </p>
          <div className="mt-8">
            <Link to="/#contact" className="inline-flex items-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20">
              Click For Free Consultation <i className="fas fa-arrow-right text-[9px]"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── What is EN 15085 — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Understanding the Standard</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  What is <span className="text-euro-600">EN 15085?</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                EN 15085 railway vehicles welding certification is a voluntary European standard for the welding of railway vehicles. First published in 2003 and revised in 2007, the standard covers the design, manufacture and testing of welded components and assemblies for use in railway vehicles. EN 15085 certification is granted by an independent third-party certification body.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-bullseye text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Purpose & Scope</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The standard is designed to improve the safety, quality and reliability of railway vehicles. It covers the welding of all types of materials used in railway vehicles, including metals, plastics and composites. EN 15085 certification requires that welders are qualified to international standards, welding procedures are approved by an independent body, and welded components are tested to ensure they meet required strength and durability standards.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-eurogold-100 bg-eurogold-50/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-eurogold-400 flex items-center justify-center">
                    <i className="fas fa-user-check text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">For Welders & Manufacturers</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Welders certified to EN 15085 can be confident that they have the skills and knowledge to produce high quality welds that meet safety requirements for railway vehicles. Manufacturers can be confident that components produced by certified welders will meet the required standards.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[480px] group">
              <img src="/railway-interoperability.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Railway Vehicles Welding" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits of EN 15085 — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Key Advantages</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Benefits of EN 15085 Certification</h2>
                <p className="text-white/45 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
                  EN 15085 certification is not required by law, but it is becoming increasingly common for manufacturers to seek it out due to the many benefits it provides.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {en15085Benefits.map((b, i) => (
                  <div key={i} className="p-5 rounded-2xl border border-white/5 bg-white/2 group hover:border-eurogold-400/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center mb-3 group-hover:bg-eurogold-400/20 transition-all">
                      <i className={`fas ${b.icon} text-eurogold-400 text-sm`}></i>
                    </div>
                    <h4 className="heading-font text-[10px] font-bold text-white uppercase tracking-widest mb-2">{b.title}</h4>
                    <p className="text-white/45 text-xs leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why EN 15085 is Important — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Industry Standard</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Why is EN 15085 Important?</h2>
            </div>

            <div className="space-y-5">
              {importancePoints.map((point) => (
                <div key={point.num} className="flex gap-5 p-5 rounded-2xl border border-euro-100 bg-linear-to-br from-euro-50/40 to-white items-start">
                  <div className="w-10 h-10 rounded-full bg-euro-600 flex items-center justify-center shrink-0">
                    <span className="heading-font text-white text-xs font-bold">{point.num}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certification Process — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Step by Step</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">How to Obtain EN 15085 Certification</h2>
                <p className="text-white/45 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
                  In order to obtain EN 15085 certification, welding companies must follow a structured process from application through to certificate issuance.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {certificationSteps.map((step) => (
                  <div key={step.num} className="p-5 rounded-2xl border border-white/5 bg-white/2 text-center relative">
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
          </div>
        </div>
      </section>

      {/* ── Services — Soft BG ── */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Services</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Railway Certification Services</h2>
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

      {/* ── Why Choose Eurocert — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Expertise</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Why Choose <span className="text-euro-600">Eurocert?</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Our experienced auditors understand railway welding requirements and can guide you through the EN 15085 certification process. We work with you to ensure successful certification and ongoing compliance.
              </p>
              <ul className="space-y-3">
                {[
                  'European Union Full Service Notified Body',
                  'Quality System Auditing & Assessment',
                  'EN 15085 Welding Certification',
                  'Welder Qualification Testing (EN ISO 9606)',
                  'Welding Procedures / Welder Certification',
                  'TSI Compliance Assessments',
                  'EU Competent and Notified Body for multiple directives'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-slate-500 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 space-y-4">
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/30 text-center">
                <span className="heading-font text-euro-600 font-bold text-4xl block mb-1">25+</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] heading-font">Years of Industrial Experience</span>
              </div>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/30 text-center">
                <span className="heading-font text-euro-600 font-bold text-4xl block mb-1">100%</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] heading-font">Technical Directive Accuracy</span>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-[200px] group">
                <img src="/railway-interoperability.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Railway Welding" />
                <div className="absolute inset-0 bg-linear-to-t from-euro-900/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conclusion & Eurocert SA ── */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl border border-slate-100 bg-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                  <i className="fas fa-lightbulb text-white text-xs"></i>
                </div>
                <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Conclusion</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                EN 15085 certification is an important requirement for welding railway vehicles. It ensures that welders have the necessary skills and knowledge to correctly perform the job, ensuring a safe and reliable product. By undergoing EN 15085 certification, companies not only demonstrate their commitment to safety but also gain access to lucrative contracts in the rail industry.
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
                We are offering EN 15085 railway vehicles welding certification services on behalf of Eurocert S.A. Our team provides comprehensive support from application through to ongoing compliance and surveillance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Certifications ── */}
      <section className="py-14 lg:py-18 bg-white">
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
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Initiate Railway Certification</h4>
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Quick Inquiry</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
                Our railway welding experts are ready to guide your organization through EN 15085 certification and TSI compliance.
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
