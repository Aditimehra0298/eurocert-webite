import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const sections = [
  { icon: 'fa-database', title: 'Information We Collect', desc: 'We collect personal information such as name, email, phone number, and company details when you contact us, request services, or register for training programs.' },
  { icon: 'fa-cogs', title: 'How We Use Information', desc: 'Your information is used to provide certification and audit services, communicate about our offerings, process inquiries, and improve our services.' },
  { icon: 'fa-lock', title: 'Data Security', desc: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.' },
  { icon: 'fa-share-alt', title: 'Information Sharing', desc: 'We do not sell or rent your personal information. Data may be shared with accreditation bodies or regulatory authorities only as required by law.' },
  { icon: 'fa-cookie-bite', title: 'Cookies & Tracking', desc: 'Our website may use cookies to enhance user experience. You can control cookie preferences through your browser settings at any time.' },
  { icon: 'fa-user-shield', title: 'Your Rights', desc: 'You have the right to access, correct, or delete your personal data. Contact us to exercise these rights or for any privacy-related queries.' },
]

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/pp1.png" alt="Privacy Policy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-[#030a16] via-[#030a16]/70 to-[#030a16]/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Data Protection</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Privacy <span className="text-eurogold-400">Policy</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm heading-font mt-4">
            <span className="text-white/70">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* ── Consent & Data Processing Notice ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            <div>
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Data Processing</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Your Consent <span className="text-euro-600">Matters</span>
              </h2>
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed">
              We and our partners store or access information on devices, such as cookies and process personal data, such as unique identifiers and standard information sent by a device for the purposes described below. You may click to consent to our and our 824 partners' processing for such purposes. Alternatively, you may click to refuse to consent, or access more detailed information and change your preferences before consenting.
            </p>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Your preferences will apply to this website only. Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing.
            </p>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-euro-50 border border-euro-100">
              <div className="w-12 h-12 rounded-xl bg-euro-600 flex items-center justify-center shrink-0">
                <i className="fas fa-envelope text-white text-lg"></i>
              </div>
              <div>
                <h4 className="heading-font text-sm font-bold text-slate-900 mb-1">Data Protection Officer</h4>
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  For more information please contact our Data Protection Officer by email at{' '}
                  <a href="mailto:info@eurocert.in" className="text-euro-600 font-medium hover:underline">info@eurocert.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Protect Your Data ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Your Privacy Matters</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">How We Protect Your Data</h2>
                <p className="text-white/40 text-sm mt-3 max-w-2xl mx-auto">Eurocert is committed to protecting the privacy and security of your personal information.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {sections.map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-eurogold-400/20 transition-all duration-300 group">
                    <div className="w-11 h-11 rounded-xl bg-eurogold-400/10 flex items-center justify-center text-eurogold-400 mb-4 group-hover:bg-eurogold-400/20 transition-all duration-300">
                      <i className={`fas ${item.icon} text-base`}></i>
                    </div>
                    <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-white mb-2">{item.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Privacy <span className="text-euro-600">Concerns?</span></h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-lg mx-auto">Contact our team for any data privacy questions or to exercise your rights under applicable data protection laws.</p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-euro-600 rounded-full px-8 py-3.5 hover:bg-euro-700 transition-all shadow-lg">
              Contact Us <i className="fas fa-arrow-right text-[9px]"></i>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
