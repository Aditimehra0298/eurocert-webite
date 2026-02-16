import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const relatedPosts = [
  { title: 'C-TPAT - The NEW Minimum Security Criteria from CBP for Manufacturers and Exports', date: 'December 4, 2019', href: '/post/ctpat-minimum-security-criteria', image: '/r2.png' },
  { title: 'SLCP Certification | SLCP | Eurocert Asia', date: 'August 2, 2023', href: '/post/slcp-certification', image: '/r1.png' },
  { title: 'Role of Self Assessment Questionnaire in Sedex Audit', date: 'May 10, 2023', href: '/post/sedex-self-assessment', image: '/r4.png' },
]

export default function CTPATComplianceVsValidation() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/r3.png" alt="C-TPAT Compliance vs Validation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-[#030a16] via-[#030a16]/80 to-[#030a16]/60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1.5 heading-font text-[9px] font-bold text-eurogold-400 uppercase tracking-wider px-3 py-1 rounded-full bg-eurogold-400/10 border border-eurogold-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400"></span>
              C-TPAT
            </span>
            <span className="text-white/30 text-xs">Posted On December 4, 2019</span>
            <span className="text-white/30 text-xs">By admin</span>
          </div>
          <h1 className="heading-font text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight max-w-4xl mx-auto leading-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            C-TPAT <span className="text-eurogold-400">Compliance</span> vs C-TPAT <span className="text-eurogold-400">Validation</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm heading-font mt-6">
            <span className="text-white/50">2019</span>
            <span>/</span>
            <span className="text-white/50">December</span>
            <span>/</span>
            <span className="text-white/70">C-TPAT Compliance vs C-TPAT Validation</span>
          </div>
        </div>
      </section>

      {/* ── Comparison — Light ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">

              {/* Validation */}
              <div className="rounded-2xl border-2 border-euro-600/20 overflow-hidden shadow-xl shadow-euro-600/5">
                <div className="bg-euro-600 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                      <i className="fas fa-stamp text-white text-sm"></i>
                    </div>
                    <h3 className="heading-font text-sm font-bold text-white uppercase tracking-wider">C-TPAT Validation</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    A C-TPAT validation is a process through which the <strong className="text-slate-900">U.S. Customs and Border Protection (CBP)</strong> C-TPAT program meets with company representatives and visits elected domestic and foreign sites to verify supply chain security measures contained in the C-TPAT participant's security profile are accurate and are being followed.
                  </p>
                  <div className="mt-5 pt-5 border-t border-slate-100 space-y-3">
                    <div className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-euro-600 text-xs mt-1"></i>
                      <span className="text-slate-500 text-sm">Conducted by CBP directly</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-euro-600 text-xs mt-1"></i>
                      <span className="text-slate-500 text-sm">On-site visits to domestic &amp; foreign sites</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-euro-600 text-xs mt-1"></i>
                      <span className="text-slate-500 text-sm">Verifies security profile accuracy</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance */}
              <div className="rounded-2xl border-2 border-eurogold-400/20 overflow-hidden shadow-xl shadow-eurogold-400/5">
                <div className="bg-eurogold-400 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center">
                      <i className="fas fa-clipboard-check text-[#030a16] text-sm"></i>
                    </div>
                    <h3 className="heading-font text-sm font-bold text-[#030a16] uppercase tracking-wider">C-TPAT Compliance</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-[15px] leading-relaxed">
                    A C-TPAT Compliance is an <strong className="text-slate-900">independent verification by a competent auditor</strong> for an exporter existing outside America to see its compliance against C-TPAT security criteria or guidelines jointly developed by CBP and the trade community.
                  </p>
                  <div className="mt-5 pt-5 border-t border-slate-100 space-y-3">
                    <div className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-eurogold-400 text-xs mt-1"></i>
                      <span className="text-slate-500 text-sm">Independent third-party verification</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-eurogold-400 text-xs mt-1"></i>
                      <span className="text-slate-500 text-sm">For exporters outside America</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-eurogold-400 text-xs mt-1"></i>
                      <span className="text-slate-500 text-sm">Against CBP &amp; trade community guidelines</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Related Posts + Navigation — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Tags */}
              <div className="flex items-center gap-2 flex-wrap mb-10 pb-8 border-b border-white/5">
                <span className="text-white/30 text-xs heading-font font-bold uppercase tracking-wider">Category:</span>
                <span className="px-3 py-1 rounded-full bg-eurogold-400/10 text-eurogold-400 text-xs heading-font font-medium border border-eurogold-400/20">C-TPAT</span>
              </div>

              {/* Related */}
              <h3 className="heading-font text-xl font-bold text-white mb-6">Related Posts</h3>
              <div className="grid sm:grid-cols-3 gap-5 mb-10">
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
              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <Link to="/post/sedex-self-assessment" className="flex items-center gap-2 text-white/40 hover:text-eurogold-400 transition-colors group">
                  <i className="fas fa-arrow-left text-xs group-hover:-translate-x-1 transition-transform"></i>
                  <div>
                    <span className="heading-font text-[10px] font-bold uppercase tracking-wider block">Previous Post</span>
                    <span className="text-xs text-white/30">Role of Self Assessment Questionnaire in Sedex Audit</span>
                  </div>
                </Link>
                <Link to="/post/ctpat-minimum-security-criteria" className="flex items-center gap-2 text-white/40 hover:text-eurogold-400 transition-colors group text-right">
                  <div>
                    <span className="heading-font text-[10px] font-bold uppercase tracking-wider block">Next Post</span>
                    <span className="text-xs text-white/30">C-TPAT Minimum Security Criteria</span>
                  </div>
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
