import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from '../src/components/TopBar'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

const committeeMembers = [
  'The Director,',
  'The Scheme Manager (Food),',
  'In the absence of the Director, the Scheme Manager may make the certification decision, provided that he/she have not participated in the audit of the client under review for certification.',
  'Members of the certification committee will not audit or review the audit report of the client, whose case to be decided for certification, suspension, withdrawal or reduction of the scope of certification.',
  'The committee reviews each case and make a decision as appropriate.'
]

const reviewDocuments = [
  'Client application and its review report;',
  'Copy of the agreement with the client;',
  'Audit programme developed for the client;',
  'Audit time determination sheet;',
  'Review report by a competent person on audit report package;',
]

const auditReportPackage = [
  'Audit plan;',
  'Auditors\' note;',
  'Audit check-list;',
  'Audit report;',
  'NC report;',
  'Closing meeting\'s attendance sheet;',
  'Record each certification decision in the approved format of the EISPL.'
]

export default function ISO22000ProcessCertificate() {
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
            Process for <span className="text-eurogold-400">Certificate Issue</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            The formal process and certification committee structure governing the issuance of ISO 22000 certificates
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
            <span className="text-euro-600 font-bold">Process for Certificate Issue</span>
          </div>
        </div>
      </section>

      {/* Content - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">

            {/* Certification Committee */}
            <div>
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">ISO 22000 Certification</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Certification <span className="text-euro-600">Committee</span>
              </h2>
            </div>

            <p className="text-slate-500 text-[15px] leading-relaxed">
              The following constitute the committee on certification:
            </p>

            {/* Committee Members */}
            <div className="space-y-4">
              {committeeMembers.map((item, i) => (
                <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center shrink-0">
                      <span className="heading-font text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-slate-600 text-[15px] leading-relaxed pt-2">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Documents for Review - Section Header */}
            <div className="pt-6">
              <h3 className="heading-font text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
                Documents for <span className="text-euro-600">Committee Review</span>
              </h3>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                The certification committee reviews the following documents before making a certification decision:
              </p>
            </div>

            {/* Review Documents List */}
            <div className="space-y-3">
              {reviewDocuments.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg bg-euro-50 flex items-center justify-center shrink-0">
                    <span className="heading-font text-euro-600 font-bold text-sm">{i + 6}</span>
                  </div>
                  <p className="text-slate-600 text-[15px] leading-relaxed pt-1.5">{item}</p>
                </div>
              ))}
            </div>

            {/* Audit Report Package */}
            <div className="p-8 rounded-2xl border border-euro-100 bg-euro-50/40">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center shrink-0">
                  <span className="heading-font text-white font-bold text-sm">11</span>
                </div>
                <h4 className="heading-font text-sm font-bold uppercase tracking-widest text-slate-900">
                  Audit Report Package to Include the Following:
                </h4>
              </div>
              <div className="space-y-3 ml-[52px]">
                {auditReportPackage.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="heading-font text-euro-600 font-bold text-xs mt-1 shrink-0">
                      {String.fromCharCode(105 + i)})
                    </span>
                    <p className="text-slate-600 text-[15px] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="p-6 rounded-2xl border border-eurogold-400/30 bg-eurogold-400/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-eurogold-400/20 flex items-center justify-center shrink-0">
                  <i className="fas fa-exclamation-circle text-eurogold-400 text-sm"></i>
                </div>
                <div>
                  <h4 className="heading-font text-sm font-bold uppercase tracking-widest text-slate-900 mb-2">Note</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Copies of all relevant procedures, work instructions, formats, quality manual normative documents to be kept in handy for ready reference of the committee's member.
                  </p>
                </div>
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
