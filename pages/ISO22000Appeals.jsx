import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from '../src/components/TopBar'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

const appealProcess = [
  'If the complainants disagree with decision or unsatisfied with the resolution of their grievance, they are entitled to appeal within 14 days of intimation of outcome of complaint investigation process.',
  'The appeal can be made through e-mail.',
  'Every appeal is required to be investigated and intimated to the appellant within 30 calendar days.',
  'An interim progress report is required to be sent to the appellant, if investigation take more than 30 days.',
  'The Director shall first try to resolve the matter, as 1st line of resolution.',
  'The appellant shall be apprised about investigation is being taken up on their appeal.',
  'The outcome of the investigation and decision shall be informed to the appellant by on conclusion of investigation.',
  'If the outcome of this first line resolution (or review), still be unacceptable to the appellant, they have recourse to the appeals for 2nd line of resolution.',
  'When the appellant files for re-appeal, the Director shall refer the matter to Appeals Committee.',
  'The appellant is informed about composition of the appeal committee immediately.',
  'The appellant can have the right to object inclusion of any member including chairperson in the constituted committee. Such objections shall be communicated within three days to the EISPL.',
  'In event of objection from the appellant on inclusion of any member including chairperson in the constituted committee, a new committee is formed immediately.',
  'The appeal committee shall meet immediately after issue of notification of the constitution.',
  'The committee shall inform the appellant about venue, date and time of hearing and shall give reasonable time to the appellant to appear and respondent(s).',
  'The decision of the committee is based on the majority of the committee and the Chairman shall declare the decision within 3 days.',
  'The decision is not binding on the appellant, and if not satisfied, can approach the Accreditation Body for review.',
  'The EISPL is required to take corrective action as outlined in this procedure.',
]

const appealCostRules = [
  'The EISPL reserves the right to charge the Appellant, reasonable costs for this second line of independent appeals resolution through invoicing as defined in paragraphs.',
  'Levy of charges to be notified in advance at the time of second line resolution and may be charged to the appellant ahead of any review commencing.',
  'Approval of the Director to be obtained on the charges to be invoiced.',
  'Under no circumstances, the EISPL or its employees or agents be liable for any losses or damages, except where costs arise as a result of the gross negligence or willful default of such persons.',
]

export default function ISO22000Appeals() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/F5.png" className="w-full h-full object-cover opacity-30" alt="ISO 22000" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">ISO 22000 — Process Document</span>
          </div>
          <h1 className="heading-font text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Process for Handling <span className="text-eurogold-400">Appeals</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Appeals against the decision of the EISPL can be addressed below
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
            <span className="text-euro-600 font-bold">Handling Appeals</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Section Header */}
            <div>
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Appeals Process</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Processing of <span className="text-euro-600">Appeals</span>
              </h2>
            </div>

            {/* Appeal Process Steps (1–17) */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <div className="bg-[#030a16] px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-euro-600/20 flex items-center justify-center shrink-0">
                    <i className="fas fa-balance-scale text-eurogold-400 text-sm"></i>
                  </div>
                  <h3 className="heading-font text-lg font-bold text-white uppercase tracking-widest">
                    Appeal <span className="text-eurogold-400">Procedure</span>
                  </h3>
                </div>
              </div>
              <div className="p-6 space-y-3 bg-white">
                {appealProcess.map((item, i) => {
                  const isFirstLine = i < 7
                  const isSecondLine = i >= 7
                  return (
                    <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${
                      isSecondLine
                        ? 'border-amber-100 bg-amber-50/30 hover:border-amber-200'
                        : 'border-slate-100 bg-[#f8fafc] hover:border-euro-200'
                    }`}>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isSecondLine ? 'bg-amber-500' : 'bg-euro-600'
                      }`}>
                        <span className="heading-font text-white font-bold text-sm">{i + 1}</span>
                      </div>
                      <div className="pt-1">
                        {i === 0 && <span className="heading-font text-[9px] text-euro-600 tracking-[0.3em] uppercase font-bold block mb-1">1st Line of Resolution</span>}
                        {i === 7 && <span className="heading-font text-[9px] text-amber-600 tracking-[0.3em] uppercase font-bold block mb-1">2nd Line of Resolution — Appeals Committee</span>}
                        <p className="text-slate-600 text-[15px] leading-relaxed">{item}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-slate-200"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-eurogold-400/40"></div>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            {/* Appeal Cost Rules (18–22) */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <div className="bg-[#030a16] px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0">
                    <i className="fas fa-file-invoice-dollar text-emerald-400 text-sm"></i>
                  </div>
                  <h3 className="heading-font text-lg font-bold text-white uppercase tracking-widest">
                    Rules for <span className="text-emerald-400">Appeal Cost</span>
                  </h3>
                </div>
              </div>
              <div className="p-6 space-y-3 bg-white">
                {appealCostRules.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-md transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0">
                      <span className="heading-font text-white font-bold text-sm">{i + 19}</span>
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
