import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const fields = [
  { icon: 'fa-leaf', name: 'Environmental Management', standards: 'ISO 14001' },
  { icon: 'fa-shield-alt', name: 'Information Security Management', standards: 'ISO 27001, ISO 20000' },
  { icon: 'fa-code', name: 'Software Quality Assurance', standards: 'SQUARE' },
  { icon: 'fa-utensils', name: 'Food Safety Assurance', standards: 'ISO 22000, FSMS, IFS, HACCP, GLOBALGAP' },
  { icon: 'fa-hard-hat', name: 'Occupational Health and Safety', standards: 'OHSAS' },
  { icon: 'fa-bolt', name: 'Energy Management', standards: 'ISO 50001' },
]

const expectations = [
  'Business associate would maintain NO conflict of interest and would be approved as an Auditor after training',
  'Business associates are expected to hold training events on a regular basis in their territory',
  'Business associates are expected to maintain relationship with the leads/consultants/professionals of the industry in their territory',
  'Provide database for marketing effort to the back office',
]

const weEnsure = [
  'Regular training on Eurocert Services and procedure for certification',
  'A portfolio for training events',
  'Advertising / mail campaign support for local area',
  'A regular flow of share out of our profits',
]

const benefits = [
  { icon: 'fa-user-check', text: 'Be approved as an Auditor for at least one system' },
  { icon: 'fa-chart-line', text: 'You have the opportunity to enhance your income' },
  { icon: 'fa-chalkboard-teacher', text: 'You will be promoting trainings' },
  { icon: 'fa-graduation-cap', text: 'Continuous professional development' },
  { icon: 'fa-headset', text: 'Back office support for lead generation' },
]

const relatedPosts = [
  { title: 'SLCP Certification | SLCP | Eurocert Asia', date: 'August 2, 2023', href: '/post/slcp-certification', image: '/r1.png' },
  { title: 'SA 8000 Certification', date: 'February 8, 2017', href: '/post/sa-8000-certification', image: '/r5.png' },
  { title: 'C-TPAT Compliance vs C-TPAT Validation', date: 'December 4, 2019', href: '/post/ctpat-compliance-vs-validation', image: '/r3.png' },
]

export default function BecomeAssociate() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/r6.png" alt="Become our Associate" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-[#030a16] via-[#030a16]/80 to-[#030a16]/60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1.5 heading-font text-[9px] font-bold text-eurogold-400 uppercase tracking-wider px-3 py-1 rounded-full bg-eurogold-400/10 border border-eurogold-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400"></span>
              Careers
            </span>
            <span className="text-white/30 text-xs">Posted On November 15, 2016</span>
            <span className="text-white/30 text-xs">By admin</span>
          </div>
          <h1 className="heading-font text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-3 tracking-tight max-w-4xl mx-auto leading-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Become our <span className="text-eurogold-400">Associate</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm heading-font mt-6">
            <span className="text-white/50">2016</span>
            <span>/</span>
            <span className="text-white/50">November</span>
            <span>/</span>
            <span className="text-white/70">Become our Associate</span>
          </div>
        </div>
      </section>

      {/* ── About — Light ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Join Us</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Partner with <span className="text-euro-600">Eurocert</span>
              </h2>
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed">
              We, Eurocert Inspection Services Pvt. Limited have been operational in India since 2009 and are a 100% subsidiary company of EUROCERT S.A – A Pan-European Certification body operating from Athens. Eurocert has been accredited for more than 30 standards by various accreditation boards including UKAS, ACCREDIA, ESYD and SAAS.
            </p>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              As a part of our expansion strategy in the <strong className="text-slate-900">Indian Sub-Continent</strong>, we are looking to expand into various regions of India and are looking to closely associate with quality assurance professionals through a win-win relationship.
            </p>

            {/* Eligibility */}
            <div className="p-6 rounded-2xl bg-euro-50 border border-euro-100">
              <h4 className="heading-font text-sm font-bold text-slate-900 mb-2">Who Can Apply?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                If you are <strong className="text-euro-600">aged above 30 years</strong> with at least <strong className="text-euro-600">4 years of experience</strong> in any of the below fields, you can apply to us for becoming our associate:
              </p>
            </div>

            {/* Fields */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {fields.map((item, i) => (
                <div key={i} className="p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-euro-600/10 flex items-center justify-center mb-3 group-hover:bg-euro-600 group-hover:text-white text-euro-600 transition-all">
                    <i className={`fas ${item.icon} text-sm`}></i>
                  </div>
                  <h4 className="heading-font text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">{item.name}</h4>
                  <p className="text-euro-600 text-xs font-medium">{item.standards}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Expect & Ensure — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

              {/* Expect */}
              <div className="rounded-2xl border border-white/5 bg-white/2 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                    <i className="fas fa-clipboard-list text-eurogold-400 text-sm"></i>
                  </div>
                  <h3 className="heading-font text-sm font-bold text-white uppercase tracking-wider">What We Expect</h3>
                </div>
                <div className="space-y-4">
                  {expectations.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-eurogold-400/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="heading-font text-[9px] font-bold text-eurogold-400">{i + 1}</span>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ensure */}
              <div className="rounded-2xl border border-eurogold-400/20 bg-eurogold-400/5 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-eurogold-400 flex items-center justify-center">
                    <i className="fas fa-handshake text-[#030a16] text-sm"></i>
                  </div>
                  <h3 className="heading-font text-sm font-bold text-white uppercase tracking-wider">What We Ensure</h3>
                </div>
                <div className="space-y-4">
                  {weEnsure.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-eurogold-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
                      </svg>
                      <p className="text-white/60 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits — Light ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Advantages</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Benefits of Becoming a <span className="text-euro-600">Eurocert Associate</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border-2 border-euro-600/10 bg-euro-50/30 text-center hover:border-euro-600/30 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-euro-600 flex items-center justify-center mx-auto mb-4">
                    <i className={`fas ${item.icon} text-white text-base`}></i>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mt-10 pt-8 border-t border-slate-100">
              <span className="text-slate-400 text-xs heading-font font-bold uppercase tracking-wider">Tagged:</span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs heading-font font-medium">Become Our Associate - Eurocert</span>
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
                <Link to="/post/benefits-associate" className="flex items-center gap-2 text-white/40 hover:text-eurogold-400 transition-colors group">
                  <i className="fas fa-arrow-left text-xs group-hover:-translate-x-1 transition-transform"></i>
                  <div>
                    <span className="heading-font text-[10px] font-bold uppercase tracking-wider block">Previous Post</span>
                    <span className="text-xs text-white/30">Benefits of becoming our Associate</span>
                  </div>
                </Link>
                <Link to="/post/sa-8000-certification" className="flex items-center gap-2 text-white/40 hover:text-eurogold-400 transition-colors group text-right">
                  <div>
                    <span className="heading-font text-[10px] font-bold uppercase tracking-wider block">Next Post</span>
                    <span className="text-xs text-white/30">SA 8000 Certification</span>
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
