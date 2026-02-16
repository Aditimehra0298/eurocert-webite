import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from '../src/components/TopBar'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

const suspensionGrounds = [
  'The certified client has persistently or seriously failed to meet requirements of the food safety management system in accordance with the international standard ISO 22000, and it\'s the effectiveness in implementation;',
  'The certified client has not participated in the surveillance activities including on-site auditing at the required frequencies;',
  'The certified client has did not opted for renewal of certification or re-certification audit was not allow to conduct within time frame;',
  'The certified client has voluntarily requested a suspension.',
  'The certified client has not submitted corrections and corrective actions for any non conformities (NC) within the stipulated time, and/or resulting pending of review and acceptance of minor NC, review, acceptance and verification of major NC due to delay in submission of report by the certified client;',
  'Violations of contract by the certified client including outstanding dues on services provided by the EISPL;',
  'Incorrect/inappropriate use of certificate(s) and/or certification mark(s);',
  'Result of investigation conducted on a complaint against a certified client.'
]

const withdrawalGrounds = [
  'Failure to resolve the issues that have resulted in suspension within the specified time frame;',
  'In case where reduction in scope has likely impact on the entire management system, reduction shall not be permitted and in that case, the certification is eventuality withdrawn.',
  'The certified client wishes to cancel and sends formal notification;',
  'The certified client ceases to exist as a legal entity in its form as certified;'
]

const reductionGrounds = [
  'Failure to resolve those part(s) of issues that have resulted in suspension within the specified time frame;',
  'If part(s) of the scope of certification has persistently or seriously failed to meet the certification requirements;'
]

export default function ISO22000SuspensionPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/F5.png" className="w-full h-full object-cover opacity-30" alt="ISO 22000" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">ISO 22000 — Policy Document</span>
          </div>
          <h1 className="heading-font text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Policy for Suspending, Withdrawing or <span className="text-eurogold-400">Reducing Scope</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Policy governing the suspension, withdrawal, or reduction in scope of FSMS certification
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-[#f8fafc] border-b border-slate-100">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-[11px] heading-font uppercase tracking-widest">
            <Link to="/" className="text-slate-400 hover:text-euro-600 transition">Home</Link>
            <i className="fas fa-chevron-right text-[7px] text-slate-300"></i>
            <Link to="/food-certification/iso-22000" className="text-slate-400 hover:text-euro-600 transition">ISO 22000</Link>
            <i className="fas fa-chevron-right text-[7px] text-slate-300"></i>
            <span className="text-euro-600 font-bold">Suspension / Withdrawal Policy</span>
          </div>
        </div>
      </section>

      {/* Content - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">

            {/* Intro */}
            <div>
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">ISO 22000 Policy</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Policy for Suspending, Withdrawing or <span className="text-euro-600">Reducing the Scope of Certification</span>
              </h2>
            </div>

            <p className="text-slate-500 text-[15px] leading-relaxed">
              The EISPL will suspend or withdraw the FSMS certification, or reduce in the scope of certification on the following ground by giving notice to the certified client.
            </p>

            {/* Suspension Section */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <div className="bg-[#030a16] px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-eurogold-400/15 flex items-center justify-center shrink-0">
                    <i className="fas fa-pause-circle text-eurogold-400 text-sm"></i>
                  </div>
                  <h3 className="heading-font text-xl font-bold text-white uppercase tracking-widest">
                    The FSMS Certification is <span className="text-eurogold-400">Suspended</span> if:
                  </h3>
                </div>
              </div>
              <div className="p-6 space-y-3 bg-white">
                {suspensionGrounds.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-md transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-euro-600 flex items-center justify-center shrink-0">
                      <span className="heading-font text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-slate-600 text-[15px] leading-relaxed pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Withdrawal Section */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <div className="bg-[#030a16] px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center shrink-0">
                    <i className="fas fa-times-circle text-red-400 text-sm"></i>
                  </div>
                  <h3 className="heading-font text-xl font-bold text-white uppercase tracking-widest">
                    The Certification is <span className="text-red-400">Withdrawn</span> if:
                  </h3>
                </div>
              </div>
              <div className="p-6 space-y-3 bg-white">
                {withdrawalGrounds.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-md transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-red-500 flex items-center justify-center shrink-0">
                      <span className="heading-font text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-slate-600 text-[15px] leading-relaxed pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reduction Section */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <div className="bg-[#030a16] px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0">
                    <i className="fas fa-compress-arrows-alt text-amber-400 text-sm"></i>
                  </div>
                  <h3 className="heading-font text-xl font-bold text-white uppercase tracking-widest">
                    The Scope of Certification is <span className="text-amber-400">Reduced</span> if:
                  </h3>
                </div>
              </div>
              <div className="p-6 space-y-3 bg-white">
                {reductionGrounds.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-md transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center shrink-0">
                      <span className="heading-font text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-slate-600 text-[15px] leading-relaxed pt-1">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-10 bg-[#f8fafc]">
        <div className="container mx-auto px-6 text-center">
          <Link to="/food-certification/iso-22000" className="inline-flex items-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-euro-600 hover:text-euro-700 transition">
            <i className="fas fa-arrow-left text-[9px]"></i> Back to ISO 22000
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
