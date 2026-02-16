import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { addContact } from './hooks/useContacts'

export default function CTPATLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addContact({ name: formData.email, email: formData.email, phone: '', service: 'CTPAT Login', message: 'User attempted to login', source: 'CTPAT Login' })
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
          <p className="text-white/40 text-sm mt-3 tracking-wide uppercase">Secure Supply Chain Compliance Portal</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">

            {/* Login Form */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-8 md:p-10">
              <div className="mb-8">
                <img src="/Untitled design (19).png" alt="CTPAT-ISO 28000 Exchange Platform" className="h-14 object-contain" />
              </div>
              <h2 className="heading-font text-2xl font-bold text-slate-900 tracking-tight mb-2">LOGIN</h2>
              <p className="text-slate-400 text-sm mb-8">Access your CTPAT-ISO 28000 Exchange Platform account</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f8fafc] text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-euro-500/30 focus:border-euro-500 transition placeholder:text-slate-300"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f8fafc] text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-euro-500/30 focus:border-euro-500 transition placeholder:text-slate-300 pr-12"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#030a16] text-white font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Login
                </button>

                <div className="flex items-center justify-between pt-2">
                  <Link to="/ctpat-forgot-password" className="text-euro-600 text-xs font-semibold hover:text-euro-700 transition">Forgot Password</Link>
                  <Link to="/ctpat-register" className="text-eurogold-600 text-xs font-semibold hover:text-eurogold-700 transition">Register</Link>
                </div>
              </form>
            </div>

            {/* Registration CTA Cards */}
            <div className="space-y-6">
              {/* Buyer Card */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-euro-600"></div>
                <div className="p-8 md:p-10 pl-10">
                  <div className="w-14 h-14 rounded-2xl bg-euro-50 flex items-center justify-center mb-6 group-hover:bg-euro-600 transition-all duration-300">
                    <svg className="w-7 h-7 text-euro-600 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                  </div>
                  <h3 className="heading-font text-xl font-bold text-slate-900 uppercase tracking-wide mb-2">If You Are a Buyer..</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Register to access audit reports, manage your supply chain compliance, and connect with certified manufacturers on the platform.
                  </p>
                  <Link
                    to="/ctpat-register"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-euro-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-euro-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Register Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                  <p className="text-slate-300 text-[11px] mt-3 uppercase tracking-widest font-medium">Get your login details</p>
                </div>
              </div>

              {/* Manufacturer Card */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-eurogold-500"></div>
                <div className="p-8 md:p-10 pl-10">
                  <div className="w-14 h-14 rounded-2xl bg-eurogold-50 flex items-center justify-center mb-6 group-hover:bg-eurogold-500 transition-all duration-300">
                    <svg className="w-7 h-7 text-eurogold-600 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  </div>
                  <h3 className="heading-font text-xl font-bold text-slate-900 uppercase tracking-wide mb-2">If You Are a Manufacturer..</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Register to showcase your CTPAT compliance, share ISO 28000 audit results, and connect with global buyers seeking certified supply chain partners.
                  </p>
                  <Link
                    to="/ctpat-register"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#030a16] text-eurogold-400 text-xs font-bold uppercase tracking-widest hover:bg-slate-800 transition-all duration-300 shadow-md hover:shadow-lg border border-eurogold-400/20"
                  >
                    Register Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                  <p className="text-slate-300 text-[11px] mt-3 uppercase tracking-widest font-medium">Get your login details</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
