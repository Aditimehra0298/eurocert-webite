import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function CTPATForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <TopBar />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-12 bg-[#030a16] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,123,167,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-6 mb-6">
            <img src="/CTPAT.webp" alt="C-TPAT Logo" className="h-16 md:h-20 object-contain" />
            <div className="w-px h-14 bg-white/20"></div>
            <img src="/ISO-28000-Logo-1.webp" alt="ISO 28000 Logo" className="h-16 md:h-20 object-contain" />
          </div>
          <h1 className="heading-font text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            CTPAT AUDITS - ISO 28000 <span className="text-eurogold-400">Exchange Platform</span>
          </h1>
          <p className="text-white/40 text-sm mt-3 tracking-wide uppercase">Password Recovery</p>
        </div>
      </section>

      {/* Forgot Password Form */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-8 md:p-10">
              <div className="mb-6">
                <img src="/Untitled design (19).png" alt="CTPAT-ISO 28000 Exchange Platform" className="h-14 object-contain" />
              </div>

              {!submitted ? (
                <>
                  <h2 className="heading-font text-2xl font-bold text-slate-900 tracking-tight mb-1">Forgot Password</h2>
                  <p className="text-slate-400 text-sm mb-8">Enter your email address and we'll send you a link to reset your password.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f8fafc] text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-euro-500/30 focus:border-euro-500 transition placeholder:text-slate-300"
                        placeholder="Enter your registered email"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#030a16] text-white font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Reset Password
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h2 className="heading-font text-xl font-bold text-slate-900 tracking-tight mb-2">Check Your Email</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    We've sent a password reset link to <strong className="text-slate-600">{email}</strong>. Please check your inbox and follow the instructions.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setEmail('') }}
                    className="text-euro-600 text-xs font-semibold hover:text-euro-700 transition uppercase tracking-widest"
                  >
                    Try a different email
                  </button>
                </div>
              )}

              <div className="text-center pt-6 mt-6 border-t border-slate-100">
                <p className="text-slate-400 text-sm">
                  Remember your password?{' '}
                  <Link to="/ctpat-login" className="text-euro-600 font-semibold hover:text-euro-700 transition">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
