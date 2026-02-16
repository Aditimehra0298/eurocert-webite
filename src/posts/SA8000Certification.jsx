import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const features = [
  'Improves employee recruitment, retention and productivity',
  'Drives company values into action',
  'Educate workers about core labor rights',
]

const generalBenefits = [
  'Initial evidence indicates that SA8000 certified facilities enjoy a competitive advantage and workers experience concrete benefits as the SA8000 management system and any needed corrective actions are put in place',
  'Build trust among your partners and the general public',
  'Demonstrated commitment to socially responsible business ethics',
  'Protection for your brand',
  'Enhanced reputation as a socially responsible corporate citizen',
  'Consumer confidence and positive investor perception',
  'Gain significant competitive advantages over companies that do not take an ethical approach',
  'Ensure social harmony in your production facilities',
]

const workerBenefits = [
  'Enhanced opportunities to organize trade unions and bargain collectively',
  'A tool to educate workers about core labor rights',
  'An opportunity to work directly with business on labor rights issues',
  'A way to generate public awareness of companies committed to assuring humane working conditions',
]

const businessBenefits = [
  'Drives company values into action',
  'Enhances company and brand reputation',
  'Improves employee recruitment, retention and productivity',
  'Supports better supply chain management and performance',
]

const consumerBenefits = [
  'Clear and credible assurance for ethical purchasing decisions',
  'Identification of ethically made products and companies committed to ethical sourcing',
  'Broad coverage of product categories and production geography',
]

const relatedPosts = [
  { title: 'SLCP Certification | SLCP | Eurocert Asia', date: 'August 2, 2023', href: '/post/slcp-certification', image: '/r1.png' },
  { title: 'Role of Self Assessment Questionnaire in Sedex Audit', date: 'November 13, 2019', href: '/post/sedex-self-assessment', image: '/r4.png' },
  { title: 'C-TPAT Compliance vs C-TPAT Validation', date: 'December 4, 2019', href: '/post/ctpat-compliance-vs-validation', image: '/r3.png' },
]

export default function SA8000Certification() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/r5.png" alt="SA 8000 Certification" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-[#030a16] via-[#030a16]/80 to-[#030a16]/60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1.5 heading-font text-[9px] font-bold text-eurogold-400 uppercase tracking-wider px-3 py-1 rounded-full bg-eurogold-400/10 border border-eurogold-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400"></span>
              SA 8000
            </span>
            <span className="text-white/30 text-xs">Posted On February 8, 2017</span>
            <span className="text-white/30 text-xs">By admin</span>
          </div>
          <h1 className="heading-font text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-3 tracking-tight max-w-4xl mx-auto leading-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            SA 8000 <span className="text-eurogold-400">Certification</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm heading-font mt-6">
            <span className="text-white/50">2017</span>
            <span>/</span>
            <span className="text-white/50">February</span>
            <span>/</span>
            <span className="text-white/70">SA 8000 Certification</span>
          </div>
        </div>
      </section>

      {/* ── About — Light ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Overview</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                SA 8000 Certification <span className="text-euro-600">Services</span>
              </h2>
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed">
              Eurocert SA is one of the renowned service providers of SA 8000 Certification Services. These services are offered in accordance with the industry standards and norms. Eurocert offer these services with the assistance of our expert professionals so as to stand tall on the expectations of our esteemed clients. The entire services are offered to ensure the social and ethical aspects of business.
            </p>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Eurocert Inspection Services Pvt. Ltd. is a sister concern of EUROCERT S.A. and is engaged in facilitating its customers with SA 8000 Certification Service. These services are rendered in adherence with the global social accountability standards. Our services enable a firm to be able to implement and maintain legal requirements and important environmental conditions.
            </p>

            {/* Features */}
            <div className="p-6 rounded-2xl bg-euro-50 border border-euro-100">
              <h4 className="heading-font text-sm font-bold text-slate-900 mb-4">Features of SA 8000 Certification</h4>
              <div className="space-y-3">
                {features.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-euro-600 flex items-center justify-center shrink-0 mt-0.5">
                      <i className="fas fa-check text-white text-[9px]"></i>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── General Benefits — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Key Advantages</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Benefits of SA 8000 <span className="text-eurogold-400">Certification</span>
                </h2>
              </div>
              <div className="space-y-3">
                {generalBenefits.map((item, i) => (
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

      {/* ── Stakeholder Benefits — Light ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">

              {/* Workers */}
              <div className="rounded-2xl border border-slate-100 overflow-hidden shadow-lg">
                <div className="bg-euro-600 px-5 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <i className="fas fa-hard-hat text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[10px] font-bold text-white uppercase tracking-wider">Workers & NGOs</h4>
                </div>
                <div className="p-5 space-y-3">
                  {workerBenefits.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-euro-600 text-[10px] mt-1 shrink-0"></i>
                      <p className="text-slate-500 text-xs leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business */}
              <div className="rounded-2xl border border-slate-100 overflow-hidden shadow-lg">
                <div className="bg-eurogold-400 px-5 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center">
                    <i className="fas fa-building text-[#030a16] text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[10px] font-bold text-[#030a16] uppercase tracking-wider">Business</h4>
                </div>
                <div className="p-5 space-y-3">
                  {businessBenefits.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-eurogold-400 text-[10px] mt-1 shrink-0"></i>
                      <p className="text-slate-500 text-xs leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consumers & Investors */}
              <div className="rounded-2xl border border-slate-100 overflow-hidden shadow-lg">
                <div className="bg-[#030a16] px-5 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <i className="fas fa-user-tie text-eurogold-400 text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[10px] font-bold text-white uppercase tracking-wider">Consumers & Investors</h4>
                </div>
                <div className="p-5 space-y-3">
                  {consumerBenefits.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-euro-600 text-[10px] mt-1 shrink-0"></i>
                      <p className="text-slate-500 text-xs leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── CTA + Contact — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-font text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                Get <span className="text-eurogold-400">SA 8000 Certified</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
                Tell us what you want to know and one of our team will be in touch to discuss your needs. Simply fill in the form below, or get in touch by calling or emailing us.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <a href="tel:+919316012883" className="inline-flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-eurogold-400/10 flex items-center justify-center group-hover:bg-eurogold-400/20 transition-all">
                    <i className="fas fa-phone text-eurogold-400 text-sm"></i>
                  </div>
                  <span className="text-white/70 text-sm group-hover:text-eurogold-400 transition-colors">+91-9316012883</span>
                </a>
                <a href="mailto:info@eurocert.in" className="inline-flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-eurogold-400/10 flex items-center justify-center group-hover:bg-eurogold-400/20 transition-all">
                    <i className="fas fa-envelope text-eurogold-400 text-sm"></i>
                  </div>
                  <span className="text-white/70 text-sm group-hover:text-eurogold-400 transition-colors">info@eurocert.in</span>
                </a>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20">
                  Contact Us <i className="fas fa-arrow-right text-[9px]"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Posts — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mb-10 pb-8 border-b border-slate-100">
              <span className="text-slate-400 text-xs heading-font font-bold uppercase tracking-wider">Category:</span>
              <span className="px-3 py-1 rounded-full bg-euro-50 text-euro-600 text-xs heading-font font-medium">SA 8000</span>
            </div>

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
              <div className="text-slate-300 text-xs heading-font uppercase tracking-wider">
                <i className="fas fa-arrow-left text-xs mr-2"></i> No Previous Post
              </div>
              <Link to="/post/sedex-self-assessment" className="flex items-center gap-2 text-slate-400 hover:text-euro-600 transition-colors group text-right">
                <div>
                  <span className="heading-font text-[10px] font-bold uppercase tracking-wider block">Next Post</span>
                  <span className="text-xs text-slate-500">Role of Self Assessment Questionnaire in Sedex Audit</span>
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
