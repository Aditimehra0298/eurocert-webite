import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function ChildLabourPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <TopBar />
      <Navbar />
      
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/p0.png" className="absolute inset-0 w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-[#030a16]/75"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.08)_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(19,62,124,0.15)_0%,transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Our Commitment</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Child Labour <span className="text-eurogold-400">Policy</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm heading-font mt-4">
            <Link to="/" className="hover:text-eurogold-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/70">Child Labour Policy</span>
          </div>
        </div>
      </section>

      {/* ── Commitment 1 — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Policy Statement</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Preserving <span className="text-euro-600">Childhood</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                We are committed to preserving the happiness embodied in childhood by ensuring that child labour is not used in our supply chain and in our client's organization.
              </p>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[300px] md:h-[360px] group">
              <img src="/p1.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Preserving Childhood" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Commitment 2 — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-white/10 h-[300px] md:h-[360px] group order-2 lg:order-1">
                <img src="/p2.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Education First" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030a16]/40 via-transparent to-transparent"></div>
              </div>
              <div className="lg:col-span-3 space-y-6 order-1 lg:order-2">
                <div>
                  <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Education & Remediation</h4>
                  <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                    Proactive <span className="text-eurogold-400">Identification</span>
                  </h2>
                </div>
                <p className="text-white/50 text-[15px] leading-relaxed">
                  We are committed to proactively identifying and remediating annually in the Indian subcontinent at least 4 children deprived of education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Commitment 3 — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Engaging Organizations</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Removing <span className="text-euro-600">Bottlenecks</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                We are committed to identifying small child labour organizations and engaging with them to identify bottlenecks and engage or initiate fundraising activities oriented to reducing/removing these bottlenecks.
              </p>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[300px] md:h-[360px] group">
              <img src="/p3.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Community Action" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Commitment 4 — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-white/10 h-[300px] md:h-[360px] group order-2 lg:order-1">
                <img src="/p4.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Amplifying Voices" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030a16]/40 via-transparent to-transparent"></div>
              </div>
              <div className="lg:col-span-3 space-y-6 order-1 lg:order-2">
                <div>
                  <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Supporting NGOs</h4>
                  <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                    Publishing & <span className="text-eurogold-400">Popularising</span>
                  </h2>
                </div>
                <p className="text-white/50 text-[15px] leading-relaxed">
                  We are also committed to publishing and popularising the child labour NGOs after evaluation on our website and social media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Commitment 5 — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Impartiality</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  No Conflict of <span className="text-euro-600">Interest</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                We do NOT engage with our clients directly or indirectly on the implementation of this policy to avoid conflict of interest.
              </p>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[300px] md:h-[360px] group">
              <img src="/p5.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="No Conflict of Interest" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Summary of Commitments — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">At A Glance</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Our Commitments</h2>
              </div>
              <div className="space-y-3">
                {[
                  'Preserving the happiness embodied in childhood by ensuring child labour is not used in our supply chain and in our client\'s organization.',
                  'Proactively identifying and remediating annually in the Indian subcontinent at least 4 children deprived of education.',
                  'Identifying small child labour organizations and engaging with them to identify bottlenecks and initiate fundraising activities to reduce/remove these bottlenecks.',
                  'Publishing and popularising the child labour NGOs after evaluation on our website and social media.',
                  'We do NOT engage with our clients directly or indirectly on the implementation of this policy to avoid conflict of interest.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/2 hover:border-eurogold-400/20 transition-all duration-300">
                    <svg className="w-5 h-5 text-eurogold-400 drop-shadow-[0_0_5px_rgba(212,168,67,0.5)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
                    </svg>
                    <p className="text-white/60 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Have <span className="text-euro-600">Questions?</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
              If you have any questions about our Child Labour Policy or would like to report a concern, please reach out to us.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-euro-600 rounded-full px-8 py-3.5 hover:bg-euro-700 transition-all shadow-lg">
              Chat With Us <i className="fas fa-comments text-[9px]"></i>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
