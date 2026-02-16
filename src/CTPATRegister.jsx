import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { addContact } from './hooks/useContacts'

export default function CTPATRegister() {
  const [formData, setFormData] = useState({
    userType: 'Manufacturer',
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addContact({ name: formData.name, email: formData.email, phone: '', service: `CTPAT Registration (${formData.userType})`, message: `New ${formData.userType} registration request`, source: 'CTPAT Register' })
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
          <p className="text-white/40 text-sm mt-3 tracking-wide uppercase">Create Your Account</p>
        </div>
      </section>

      {/* Register Form */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-8 md:p-10">
              <div className="mb-6">
                <img src="/Untitled design (19).png" alt="CTPAT-ISO 28000 Exchange Platform" className="h-14 object-contain" />
              </div>

              <h2 className="heading-font text-2xl font-bold text-slate-900 tracking-tight mb-1">Register CTPAT</h2>
              <p className="text-slate-400 text-sm mb-8">Create an account to access the exchange platform</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* User Type */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">Account Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, userType: 'Manufacturer' })}
                      className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest border-2 transition-all duration-300 ${
                        formData.userType === 'Manufacturer'
                          ? 'border-eurogold-500 bg-eurogold-50 text-eurogold-700'
                          : 'border-slate-200 bg-[#f8fafc] text-slate-400 hover:border-slate-300'
                      }`}
                    >
                      <svg className="w-5 h-5 mx-auto mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                      Manufacturer
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, userType: 'Buyer' })}
                      className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest border-2 transition-all duration-300 ${
                        formData.userType === 'Buyer'
                          ? 'border-euro-500 bg-euro-50 text-euro-700'
                          : 'border-slate-200 bg-[#f8fafc] text-slate-400 hover:border-slate-300'
                      }`}
                    >
                      <svg className="w-5 h-5 mx-auto mb-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                      </svg>
                      Buyer
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">{formData.userType}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f8fafc] text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-euro-500/30 focus:border-euro-500 transition placeholder:text-slate-300"
                    placeholder={`Enter ${formData.userType.toLowerCase()} name`}
                  />
                </div>

                {/* Email */}
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

                {/* Password */}
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
                      placeholder="Create a password"
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

                {/* Confirm Password */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">Confirm Password</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#f8fafc] text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-euro-500/30 focus:border-euro-500 transition placeholder:text-slate-300 pr-12"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                    >
                      {showConfirmPassword ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Register Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#030a16] text-white font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl mt-2"
                >
                  Register
                </button>

                {/* Sign In Link */}
                <div className="text-center pt-3">
                  <p className="text-slate-400 text-sm">
                    Already have an account?{' '}
                    <Link to="/ctpat-login" className="text-euro-600 font-semibold hover:text-euro-700 transition">
                      Sign In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
