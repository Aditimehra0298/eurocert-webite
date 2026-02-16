import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const relatedPosts = [
  { title: 'SLCP Certification | SLCP | Eurocert Asia', date: 'August 2, 2023', href: '/post/slcp-certification', image: '/r1.png' },
  { title: 'C-TPAT Compliance vs C-TPAT Validation', date: 'December 4, 2019', href: '/post/ctpat-compliance-vs-validation', image: '/r3.png' },
  { title: 'C-TPAT - The NEW Minimum Security Criteria from CBP for Manufacturers and Exports', date: 'December 4, 2019', href: '/post/ctpat-minimum-security-criteria', image: '/r2.png' },
]

export default function SedexSelfAssessment() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/r4.png" alt="Sedex Self Assessment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-[#030a16] via-[#030a16]/80 to-[#030a16]/60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1.5 heading-font text-[9px] font-bold text-eurogold-400 uppercase tracking-wider px-3 py-1 rounded-full bg-eurogold-400/10 border border-eurogold-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400"></span>
              SEDEX
            </span>
            <span className="text-white/30 text-xs">Posted On November 13, 2019</span>
            <span className="text-white/30 text-xs">By admin</span>
          </div>
          <h1 className="heading-font text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight max-w-4xl mx-auto leading-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Role of Self Assessment Questionnaire in <span className="text-eurogold-400">Sedex Audit</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm heading-font mt-6">
            <span className="text-white/50">2019</span>
            <span>/</span>
            <span className="text-white/50">November</span>
            <span>/</span>
            <span className="text-white/70">Sedex SAQ</span>
          </div>
        </div>
      </section>

      {/* ── Content — Light ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Overview</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Sedex SAQ <span className="text-euro-600">Importance</span>
              </h2>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-euro-50 border border-euro-100">
              <div className="w-12 h-12 rounded-xl bg-euro-600 flex items-center justify-center shrink-0">
                <i className="fas fa-clipboard-list text-white text-lg"></i>
              </div>
              <div>
                <h4 className="heading-font text-sm font-bold text-slate-900 mb-1">Self Assessment Questionnaire (SAQ)</h4>
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  The Sedex Self Assessment Questionnaire (SAQ) is a critical component of the Sedex audit process. It serves as the foundational document that suppliers complete to provide detailed information about their site's labour standards, health &amp; safety, environment, and business ethics practices before a SMETA audit takes place.
                </p>
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
                <span className="px-3 py-1 rounded-full bg-eurogold-400/10 text-eurogold-400 text-xs heading-font font-medium border border-eurogold-400/20">SEDEX</span>
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
                <Link to="/post/sa-8000-certification" className="flex items-center gap-2 text-white/40 hover:text-eurogold-400 transition-colors group">
                  <i className="fas fa-arrow-left text-xs group-hover:-translate-x-1 transition-transform"></i>
                  <div>
                    <span className="heading-font text-[10px] font-bold uppercase tracking-wider block">Previous Post</span>
                    <span className="text-xs text-white/30">SA 8000 Certification</span>
                  </div>
                </Link>
                <Link to="/post/ctpat-compliance-vs-validation" className="flex items-center gap-2 text-white/40 hover:text-eurogold-400 transition-colors group text-right">
                  <div>
                    <span className="heading-font text-[10px] font-bold uppercase tracking-wider block">Next Post</span>
                    <span className="text-xs text-white/30">C-TPAT Compliance vs C-TPAT Validation</span>
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
