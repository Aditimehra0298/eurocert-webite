import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const relatedPosts = [
  { title: 'SA 8000 Certification', date: 'February 8, 2017', href: '/post/sa-8000-certification', image: '/r5.png' },
  { title: 'C-TPAT - The NEW Minimum Security Criteria from CBP for Manufacturers and Exports', date: 'July 15, 2023', href: '/post/ctpat-minimum-security-criteria', image: '/r2.png' },
  { title: 'C-TPAT Compliance vs C-TPAT Validation', date: 'June 20, 2023', href: '/post/ctpat-compliance-vs-validation', image: '/r3.png' },
]

const advantages = [
  {
    icon: 'fa-sync-alt',
    title: 'Reduced Audit Fatigue',
    desc: 'The SLCP uses a single, harmonized assessment framework, which means that facilities do not have to undergo multiple audits by different organisations. This can save time and money, and it can also help to reduce the stress and burden on workers.',
  },
  {
    icon: 'fa-check-double',
    title: 'Enhanced Data Credibility',
    desc: 'The SLCP verification process is rigorous and independent, which helps to ensure that the data collected is accurate and reliable. This can be used by brands and other stakeholders to make informed decisions about their supply chains.',
  },
  {
    icon: 'fa-eye',
    title: 'Improved Transparency',
    desc: 'The SLCP data is shared through a secure online platform, which allows brands and other stakeholders to access and compare data from different facilities. This can help to identify areas where there are gaps in compliance, and it can also help to promote continuous improvement.',
  },
  {
    icon: 'fa-handshake',
    title: 'Collaborative Approach',
    desc: 'The SLCP is a collaborative initiative, which means that brands, manufacturers, and other stakeholders work together to improve working conditions. This can help to build trust and cooperation, and it can also help to ensure that the SLCP is effective in achieving its goals.',
  },
]

const additionalAdvantages = [
  { icon: 'fa-sliders-h', title: 'Flexibility', desc: 'The SLCP framework is flexible enough to accommodate different company sizes and business models.' },
  { icon: 'fa-certificate', title: 'Credibility', desc: 'The SLCP is overseen by a Verification Oversight Organization (VOO) that ensures the quality and integrity of the verification process.' },
  { icon: 'fa-database', title: 'Facility Ownership', desc: 'Facilities own their data and control how it is shared.' },
]

export default function SLCPCertification() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/r1.png" alt="SLCP Certification" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-[#030a16] via-[#030a16]/80 to-[#030a16]/60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1.5 heading-font text-[9px] font-bold text-eurogold-400 uppercase tracking-wider px-3 py-1 rounded-full bg-eurogold-400/10 border border-eurogold-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400"></span>
              Social Audits
            </span>
            <span className="text-white/30 text-xs">Posted On August 2, 2023</span>
            <span className="text-white/30 text-xs">By admin</span>
          </div>
          <h1 className="heading-font text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight max-w-4xl mx-auto leading-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            SLCP Certification | <span className="text-eurogold-400">SLCP</span> | Eurocert Asia
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm heading-font mt-6">
            <span className="text-white/50">2023</span>
            <span>/</span>
            <span className="text-white/50">August</span>
            <span>/</span>
            <span className="text-white/70">SLCP Certification</span>
          </div>
        </div>
      </section>

      {/* ── What is SLCP ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Overview</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                What is SLCP Audit <span className="text-euro-600">Certification?</span>
              </h2>
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed">
              The Social & Labor Convergence Program (SLCP) is a multi-stakeholder initiative that aims to improve working conditions in the apparel and footwear industry by streamlining the auditing process. The SLCP has a number of advantages, including:
            </p>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-euro-50 border border-euro-100">
              <div className="w-12 h-12 rounded-xl bg-euro-600 flex items-center justify-center shrink-0">
                <i className="fas fa-globe-europe text-white text-lg"></i>
              </div>
              <div>
                <h4 className="heading-font text-sm font-bold text-slate-900 mb-1">Eurocert — Approved Verifying Body</h4>
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  Eurocert is a third-party certification and auditing and inspection body based out of Europe and active all over the world. <strong className="text-euro-600">Eurocert is an approved training provider and Verifying Body for SLCP.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Advantages — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Key Benefits</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Advantages of <span className="text-eurogold-400">SLCP</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {advantages.map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-eurogold-400/20 transition-all duration-300 group">
                    <div className="w-11 h-11 rounded-xl bg-eurogold-400/10 flex items-center justify-center mb-4 group-hover:bg-eurogold-400/20 transition-all">
                      <i className={`fas ${item.icon} text-eurogold-400 text-base`}></i>
                    </div>
                    <h4 className="heading-font text-xs font-bold text-white uppercase tracking-wider mb-2">{item.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Summary + Additional Advantages — Light ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <p className="text-slate-600 text-[15px] leading-relaxed">
              Overall, the SLCP is a valuable tool for improving working conditions in the apparel and footwear industry. It can help to reduce audit fatigue, enhance data credibility, improve transparency, and promote a collaborative approach to social responsibility.
            </p>

            <div>
              <h3 className="heading-font text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-6">
                Additional <span className="text-euro-600">Advantages</span>
              </h3>
              <div className="grid sm:grid-cols-3 gap-5">
                {additionalAdvantages.map((item, i) => (
                  <div key={i} className="p-5 rounded-xl border border-slate-100 bg-slate-50/50 text-center">
                    <div className="w-10 h-10 rounded-lg bg-euro-600/10 flex items-center justify-center mx-auto mb-3">
                      <i className={`fas ${item.icon} text-euro-600 text-sm`}></i>
                    </div>
                    <h4 className="heading-font text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-slate-500 text-[15px] leading-relaxed">
              The SLCP is a relatively new initiative, but it has already gained significant traction in the apparel and footwear industry.
            </p>

            {/* CTA */}
            <div className="p-8 rounded-2xl bg-linear-to-br from-euro-50 to-white border-2 border-euro-600/20 shadow-xl shadow-euro-600/5">
              <h3 className="heading-font text-xl font-bold text-slate-900 mb-3">
                Interested in SLCP Certification in <span className="text-euro-600">India?</span>
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                Visit the Eurocert website for more information or contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="https://www.eurocert.asia/slcp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-euro-600 rounded-full px-8 py-3.5 hover:bg-euro-700 transition-all shadow-lg"
                >
                  Visit Website <i className="fas fa-external-link-alt text-[9px]"></i>
                </a>
                <a href="tel:+919316012883" className="inline-flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-eurogold-400/10 flex items-center justify-center group-hover:bg-eurogold-400/20 transition-all">
                    <i className="fas fa-phone text-eurogold-400 text-sm"></i>
                  </div>
                  <div>
                    <p className="heading-font text-[10px] text-slate-400 uppercase tracking-wider font-bold">Call Us Now</p>
                    <p className="text-slate-900 text-sm font-semibold">+91-9316012883</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-slate-100">
              <span className="text-slate-400 text-xs heading-font font-bold uppercase tracking-wider">Tagged:</span>
              {['SLCP', 'SLCP Certification', 'SLCP Certification in India'].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs heading-font font-medium">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Posts — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h3 className="heading-font text-xl font-bold text-white mb-6">Related Posts</h3>
              <div className="grid sm:grid-cols-3 gap-5">
                {relatedPosts.map((post, i) => (
                  <Link key={i} to={post.href} className="rounded-xl border border-white/5 bg-white/2 hover:border-eurogold-400/20 transition-all duration-300 group block overflow-hidden">
                    <div className="h-32 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <p className="text-white/25 text-[10px] mb-1.5">{post.date}</p>
                      <p className="text-white/70 text-sm leading-relaxed group-hover:text-eurogold-400 transition-colors">{post.title}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Post Navigation */}
              <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                <Link to="/post/ctpat-minimum-security-criteria" className="flex items-center gap-2 text-white/40 hover:text-eurogold-400 transition-colors group">
                  <i className="fas fa-arrow-left text-xs group-hover:-translate-x-1 transition-transform"></i>
                  <span className="heading-font text-[10px] font-bold uppercase tracking-wider">Previous Post</span>
                </Link>
                <Link to="/" className="flex items-center gap-2 text-white/40 hover:text-eurogold-400 transition-colors group">
                  <span className="heading-font text-[10px] font-bold uppercase tracking-wider">Next Post</span>
                  <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
