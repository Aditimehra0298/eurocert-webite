import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const securityControls = [
  { icon: 'fa-shield-alt', title: 'Security Procedures and Controls', desc: 'Comprehensive security procedures governing all aspects of manufacturing and shipping operations.' },
  { icon: 'fa-truck', title: 'Container and Trailer Security', desc: 'Rigorous inspection and sealing protocols for all containers and trailers to prevent unauthorized access.' },
  { icon: 'fa-door-open', title: 'Physical Access Controls', desc: 'Controlled entry and exit points with proper identification, logging, and monitoring systems.' },
  { icon: 'fa-user-lock', title: 'Personnel Security', desc: 'Background checks, verification processes, and ongoing monitoring of all personnel with access to cargo.' },
  { icon: 'fa-clipboard-check', title: 'Procedural Security', desc: 'Documented procedures for shipping, receiving, and handling cargo with proper chain of custody controls.' },
  { icon: 'fa-laptop-code', title: 'Information Technology Security', desc: 'Protection of IT systems, data integrity, and cybersecurity measures to safeguard supply chain information.' },
  { icon: 'fa-chalkboard-teacher', title: 'Security Training and Threat Awareness', desc: 'Regular training programs to educate employees on security threats, awareness, and response protocols.' },
]

const relatedPosts = [
  { title: 'C-TPAT Compliance vs C-TPAT Validation', date: 'December 4, 2019', href: '/post/ctpat-compliance-vs-validation', image: '/r3.png' },
  { title: 'SLCP Certification | SLCP | Eurocert Asia', date: 'August 2, 2023', href: '/post/slcp-certification', image: '/r1.png' },
  { title: 'SA 8000 Certification', date: 'February 8, 2017', href: '/post/sa-8000-certification', image: '/r5.png' },
]

export default function CTPATSecurityCriteria() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/r2.png" alt="C-TPAT Security Criteria" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-[#030a16] via-[#030a16]/80 to-[#030a16]/60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1.5 heading-font text-[9px] font-bold text-eurogold-400 uppercase tracking-wider px-3 py-1 rounded-full bg-eurogold-400/10 border border-eurogold-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400"></span>
              C-TPAT
            </span>
            <span className="text-white/30 text-xs">Posted On July 15, 2023</span>
            <span className="text-white/30 text-xs">By admin</span>
          </div>
          <h1 className="heading-font text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight max-w-4xl mx-auto leading-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            C-TPAT — The NEW Minimum Security Criteria from <span className="text-eurogold-400">CBP</span> for Manufacturers and Exports
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm heading-font mt-6">
            <span className="text-white/50">Posts</span>
            <span>/</span>
            <span className="text-white/70">C-TPAT Minimum Security Criteria</span>
          </div>
        </div>
      </section>

      {/* ── Overview — Light ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Overview</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Minimum Security <span className="text-euro-600">Criteria</span>
              </h2>
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed">
              These minimum security criteria are fundamentally designed to be the building blocks for foreign manufacturers to institute effective security practices designed to optimize supply chain performance to mitigate the risk of loss, theft, and contraband smuggling that could potentially introduce terrorists and implements of terrorism into the global supply chain.
            </p>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              The determination and scope of criminal elements targeting world commerce through internal conspiracies requires companies, and in particular, foreign manufacturers to elevate their security practices.
            </p>
          </div>
        </div>
      </section>

      {/* ── Security Controls — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Key Areas</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Security Procedures &amp; <span className="text-eurogold-400">Controls</span>
                </h2>
              </div>
              <div className="space-y-4">
                {securityControls.map((item, i) => (
                  <div key={i} className="flex items-start gap-5 p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-eurogold-400/20 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-eurogold-400/10 flex items-center justify-center shrink-0 group-hover:bg-eurogold-400/20 transition-all">
                      <i className={`fas ${item.icon} text-eurogold-400 text-base`}></i>
                    </div>
                    <div>
                      <h4 className="heading-font text-xs font-bold text-white uppercase tracking-wider mb-1.5">{item.title}</h4>
                      <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Posts + Navigation — Light ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mb-10 pb-8 border-b border-slate-100">
              <span className="text-slate-400 text-xs heading-font font-bold uppercase tracking-wider">Category:</span>
              <span className="px-3 py-1 rounded-full bg-euro-50 text-euro-600 text-xs heading-font font-medium">C-TPAT</span>
            </div>

            {/* Related */}
            <h3 className="heading-font text-xl font-bold text-slate-900 mb-6">Related Posts</h3>
            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {relatedPosts.map((post, i) => (
                <Link key={i} to={post.href} className="rounded-xl border border-slate-100 bg-slate-50/50 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group block overflow-hidden">
                  <div className="h-32 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="text-slate-400 text-[10px] mb-1.5">{post.date}</p>
                    <p className="text-slate-700 text-sm leading-relaxed group-hover:text-euro-600 transition-colors">{post.title}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Post Navigation */}
            <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
              <Link to="/post/ctpat-compliance-vs-validation" className="flex items-center gap-2 text-slate-400 hover:text-euro-600 transition-colors group">
                <i className="fas fa-arrow-left text-xs group-hover:-translate-x-1 transition-transform"></i>
                <div>
                  <span className="heading-font text-[10px] font-bold uppercase tracking-wider block">Previous Post</span>
                  <span className="text-xs text-slate-500">C-TPAT Compliance vs C-TPAT Validation</span>
                </div>
              </Link>
              <Link to="/post/slcp-certification" className="flex items-center gap-2 text-slate-400 hover:text-euro-600 transition-colors group text-right">
                <div>
                  <span className="heading-font text-[10px] font-bold uppercase tracking-wider block">Next Post</span>
                  <span className="text-xs text-slate-500">SLCP Certification | SLCP | Eurocert Asia</span>
                </div>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
