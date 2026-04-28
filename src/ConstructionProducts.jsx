import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const recentPosts = [
  {
    title: 'Updated CPR Guidelines for 2026',
    date: '08 Feb 2026',
    tag: 'Regulation',
    link: '/construction-products',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'CE Marking Changes for Steel Products',
    date: '02 Feb 2026',
    tag: 'CE Update',
    link: '/construction-products',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'Harmonized Standards: EN 197-1 Revision',
    date: '25 Jan 2026',
    tag: 'Standards',
    link: '/cement',
    image: 'https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'DoP Best Practices for Manufacturers',
    date: '18 Jan 2026',
    tag: 'Compliance',
    link: '/construction-products',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'New AVCP System Updates',
    date: '10 Jan 2026',
    tag: 'Industry',
    link: '/construction-products',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200'
  }
]

const services = [
  { icon: 'fa-shield-alt', title: 'Certification & Compliance', description: 'Full scope verification for CPR requirements and CE marking.' },
  { icon: 'fa-clipboard-check', title: 'Audit & Assessment', description: 'On-site and technical file assessments for structural integrity.' },
  { icon: 'fa-chalkboard-teacher', title: 'Training & Consultancy', description: 'Expert coaching on CPR-specific technical documentation.' },
  { icon: 'fa-headset', title: 'Ongoing Support', description: 'Dedicated monitoring and compliance updates for production cycles.' },
  { icon: 'fa-file-alt', title: 'Documentation & Reporting', description: 'Technical reporting and Declaration of Performance assistance.' },
  { icon: 'fa-sync-alt', title: 'Remediation Support', description: 'Fixing non-conformities discovered during assessment phases.' }
]

const benefits = [
  { icon: 'fa-check-circle', title: 'Regulatory Compliance', desc: 'Meet all CPR requirements seamlessly.' },
  { icon: 'fa-globe-europe', title: 'Market Access', desc: 'Unlock European construction markets.' },
  { icon: 'fa-award', title: 'Quality Assurance', desc: 'Demonstrate structural safety commitment.' },
  { icon: 'fa-trophy', title: 'Competitive Edge', desc: 'Stand out as a verified tier-one supplier.' },
  { icon: 'fa-shield-alt', title: 'Risk Management', desc: 'Reduce compliance risks and liability.' }
]

const relatedServices = [
  { title: 'Machinery CE Marking', subtitle: 'Directive 2006/42/EC', image: '/machinery-directive.png', link: '/machinery' },
  { title: 'LVD / EMC Compliance', subtitle: 'CE Directive', image: '/lvd-emc-directive.png', link: '/lvd-emc' },
  { title: 'PED Certification', subtitle: 'Pressure Equipment', image: '/pressure-equipment-ped.png', link: '/ped' }
]

const CheckIcon = () => (
  <svg className="w-5 h-5 text-eurogold-400 drop-shadow-[0_0_5px_rgba(212,168,67,0.5)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function ConstructionProducts() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Recent Posts Sidebar — Desktop only ── */}
      <aside
        className={`fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in-out hidden xl:block ${
          sidebarOpen ? 'right-0' : '-right-[280px]'
        }`}
      >
        {/* Toggle tab */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute -left-9 top-1/2 -translate-y-1/2 w-9 h-20 bg-euro-600 hover:bg-euro-700 text-white rounded-l-xl flex items-center justify-center transition-colors shadow-lg"
          title={sidebarOpen ? 'Hide recent posts' : 'Show recent posts'}
        >
          <i className={`fas fa-chevron-${sidebarOpen ? 'right' : 'left'} text-[10px]`}></i>
        </button>

        {/* Panel */}
        <div className="w-[280px] max-h-[80vh] bg-white/95 backdrop-blur-xl border border-slate-200 border-r-0 rounded-l-2xl shadow-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="px-5 py-4 border-b border-slate-100 bg-euro-600">
            <div className="flex items-center gap-2">
              <i className="fas fa-newspaper text-eurogold-400 text-xs"></i>
              <h3 className="heading-font text-[11px] text-white font-bold uppercase tracking-[0.2em]">Recent Posts</h3>
            </div>
          </div>

          {/* Posts list */}
          <div className="overflow-y-auto flex-1 divide-y divide-slate-100">
            {recentPosts.map((post, i) => (
              <Link
                key={i}
                to={post.link}
                className="flex gap-3 px-4 py-3 hover:bg-euro-50/60 transition-colors group"
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-euro-500 heading-font">{post.tag}</span>
                  <h4 className="text-[11px] font-semibold text-slate-800 leading-tight mt-0.5 line-clamp-2 group-hover:text-euro-600 transition-colors">
                    {post.title}
                  </h4>
                  <span className="text-[9px] text-slate-400 mt-1 block">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer */}
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
          <img src="/construction-products-cpr.png" className="w-full h-full object-cover opacity-30" alt="Construction Products" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">CPR — Regulation 305/2011</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Construction Products
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Comprehensive CPR compliance and CE marking for construction materials and components entering European markets.
          </p>
        </div>
      </section>

      {/* ── Intro + What is CPR — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Left: Text — 3 cols */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Standard Overview</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  CE Certification for <span className="text-euro-600">Construction Products</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                We provide comprehensive Construction Products certification and compliance services to help your organization meet regulatory requirements and industry standards across the EU.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-info-circle text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">What is CPR?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The Construction Products Regulation ensures reliable performance information is available to professionals, authorities, and consumers — helping demonstrate compliance with regulatory requirements and industry best practices.
                </p>
              </div>
            </div>
            {/* Right: Image — 2 cols */}
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/construction-products-cpr.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Construction Products" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CPR Regulation Detail — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>

        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            {/* Section heading */}
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Regulation 305/2011</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                How to Get CE Certificate for Construction Products
              </h2>
            </div>

            {/* Two-column layout */}
            <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
              {/* What is a Construction Product */}
              <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                    <i className="fas fa-building text-eurogold-400 text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-eurogold-400 font-bold uppercase tracking-widest">What is a Construction Product?</h4>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  Any product or combination of products produced and marketed for permanent incorporation in construction works, whose performance affects the performance of construction products in relation to the basic requirements for construction works.
                </p>
              </div>

              {/* The CPR */}
              <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                    <i className="fas fa-gavel text-eurogold-400 text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-eurogold-400 font-bold uppercase tracking-widest">The CPR (305/2011)</h4>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  Replaced Directive 89/106/EEC, laying down conditions for marketing construction products by establishing harmonized rules for expressing performance and CE marking. It simplifies and clarifies the existing framework using a "common technical language" through harmonized European standards.
                </p>
              </div>
            </div>

            {/* Common Technical Language + Regulation Aims side by side */}
            <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
                <h4 className="heading-font text-[11px] text-eurogold-400 font-bold uppercase tracking-widest mb-4">
                  Common Technical Language — Implemented By
                </h4>
                <div className="space-y-3">
                  {[
                    { num: '01', text: 'Manufacturers when declaring the performance of their products' },
                    { num: '02', text: 'Member State authorities in defining their requirements' },
                    { num: '03', text: 'Users (architects, engineers, builders) when choosing products for intended use' }
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-3">
                      <span className="heading-font text-eurogold-400 font-bold text-sm shrink-0 w-6 h-6 rounded-lg bg-eurogold-400/10 flex items-center justify-center">{item.num}</span>
                      <p className="text-white/55 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
                <h4 className="heading-font text-[11px] text-eurogold-400 font-bold uppercase tracking-widest mb-4">
                  The Regulation Aims At
                </h4>
                <div className="space-y-3">
                  {[
                    'Clarification of key concepts and the use of CE marking',
                    'Simplification of procedures to reduce costs for businesses, especially SMEs',
                    'Increased reliability of the entire system'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <p className="text-white/55 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CE Marking & Declaration of Performance — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Compliance Framework</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              CE Marking &amp; Declaration of Performance
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Two cards side-by-side */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="relative p-6 rounded-2xl border border-euro-100 bg-linear-to-br from-euro-50/60 to-white overflow-hidden">
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-euro-600/3 flex items-center justify-center pointer-events-none">
                  <i className="fas fa-certificate text-euro-100 text-4xl"></i>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-certificate text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">CE Marking</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  The CE marking allows products to be legally marketed across Member States. It indicates compliance with the declaration of performance as designed by the manufacturer.
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Note: CE marking does not necessarily mean the product is suitable for all end uses in all Member States — it varies with the harmonized technical specification.
                </p>
              </div>

              <div className="relative p-6 rounded-2xl border border-euro-100 bg-linear-to-br from-euro-50/60 to-white overflow-hidden">
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-euro-600/3 flex items-center justify-center pointer-events-none">
                  <i className="fas fa-file-signature text-euro-100 text-4xl"></i>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center shrink-0">
                    <i className="fas fa-file-signature text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Declaration of Performance</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  Manufacturers must draw up a DoP when marketing products covered by harmonized standards. By doing so, they assume responsibility for compliance with declared performance.
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Member States shall presume the DoP drawn up by the manufacturer to be accurate and reliable in the absence of objective evidence to the contrary.
                </p>
              </div>
            </div>

            {/* Performance Information — compact 3-column */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center">
                  <i className="fas fa-chart-bar text-white text-xs"></i>
                </div>
                <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Performance Information — Three Ways</h4>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Three ways information may be presented for each relevant feature. Decision-makers must understand the performance requirements for the product.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { num: '01', title: 'Threshold', desc: 'Achievement of minimum service threshold' },
                  { num: '02', title: 'Declared Value', desc: 'Actual performance through a declared value' },
                  { num: '03', title: 'Class of Service', desc: 'A particular class of service achieved' }
                ].map((item) => (
                  <div key={item.num} className="text-center p-4 bg-white rounded-xl border border-slate-100 hover:border-euro-200 transition-colors">
                    <span className="heading-font text-eurogold-500 font-bold text-xl block mb-1">{item.num}</span>
                    <h5 className="heading-font text-[10px] font-bold text-slate-900 uppercase tracking-widest mb-1">{item.title}</h5>
                    <p className="text-slate-400 text-[11px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
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
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Construction Products Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
               
               
                className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group"
              >
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

      {/* ── Benefits & Why Choose Us — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>

        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
              {/* Benefits — 3 cols */}
              <div className="lg:col-span-3">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Key Advantages</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
                  Why Get CPR Certified?
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                     
                     
                      className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-eurogold-400/10 flex items-center justify-center shrink-0">
                        <i className={`fas ${benefit.icon} text-eurogold-400 text-xs`}></i>
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-xs uppercase tracking-wide heading-font mb-1">{benefit.title}</h5>
                        <p className="text-white/40 text-xs leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Eurocert — 2 cols */}
              <div className="lg:col-span-2 p-8 rounded-2xl border border-white/5 bg-white/2 flex flex-col justify-center">
                <h3 className="heading-font text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                  Why Eurocert?
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  Our experienced auditors understand CPR requirements and guide you through the entire certification process to ensure ongoing compliance.
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

      {/* ── Related Services — Light ── */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Explore More</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Related Certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {relatedServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
               
               
                className="group relative h-[280px] rounded-2xl overflow-hidden border border-slate-200 hover:border-euro-300 shadow-md hover:shadow-xl transition-all duration-500"
              >
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

      {/* ── CTA — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>

        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto p-10 sm:p-12 rounded-2xl border border-white/5 bg-white/2">
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Initiate CPR Compliance</h4>
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Quick Inquiry</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
                Our construction products experts are ready to guide your organization through CPR compliance and CE marking certification.
              </p>
              <div className="flex items-center justify-center gap-2 text-white/25 text-[10px] heading-font tracking-widest uppercase mb-6">
                <i className="fas fa-map-marker-alt text-eurogold-400/60"></i>
                <span>Eurocert Inspection Services, Panchkula, Haryana</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20"
                >
                  Get Started <i className="fas fa-arrow-right text-[9px]"></i>
                </Link>
                <a
                  href="tel:+917009007527"
                  className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white border border-white/15 rounded-full px-8 py-3.5 hover:bg-white/5 transition-all"
                >
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
