import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const employeeObligations = [
  {
    icon: 'fa-ban',
    title: 'Avoid Conflicts',
    text: 'Employees should avoid actions or relationships that may cause potential conflicts or create the impression of conflicts with EUROCERT\'s activity or interests.',
  },
  {
    icon: 'fa-gift',
    title: 'No Gifts or Benefits',
    text: 'Every employee should be cautious about gifts or other benefits to those who wish to cooperate with EUROCERT and not accept any object or benefit, of any value.',
  },
  {
    icon: 'fa-laptop',
    title: 'Protect Resources',
    text: 'Employees do not violate EUROCERT\'s material resources, intellectual property, time or facilities for personal gain.',
  },
  {
    icon: 'fa-handshake',
    title: 'Respect Professional Boundaries',
    text: 'Every employee shall respect and not consider any opportunity or acquaintance made on behalf of EUROCERT, as part of their cooperation and in the capacity conferred on him/her.',
  },
  {
    icon: 'fa-user-shield',
    title: 'Independence in Service',
    text: 'Those providing services on behalf of EUROCERT must be independent and avoid conflicts of interest that may create an incentive to report anything other than the actual and accurate facts gathered during the service offering.',
  },
]

export default function QualityPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/q1.png" alt="Quality Policy" className="w-full h-full object-cover object-[center_25%]" />
          <div className="absolute inset-0 bg-linear-to-t from-[#030a16] via-[#030a16]/70 to-[#030a16]/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Our Standards</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Quality <span className="text-eurogold-400">Policy</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm heading-font mt-4">
            <span className="text-white/70">Quality Policy</span>
          </div>
        </div>
      </section>

      {/* ── Independence & Impartiality — Light ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Independence & Integrity</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Third-Party <span className="text-euro-600">Excellence</span>
                </h2>
              </div>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                EUROCERT – European Inspection and Certification Company S.A. acts as a third-party inspection, auditing, certification and verification body and thus its operation depends upon the independence and integrity as well as on the impartiality and competence of its management and personnel.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                EUROCERT also declares that it understands the importance of impartiality in the audits and verifications it undertakes and commits to assure through documented procedures the conflict of interest and objectiveness of all involved in them.
              </p>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-euro-50 border border-euro-100">
                <div className="w-12 h-12 rounded-xl bg-euro-600 flex items-center justify-center shrink-0">
                  <i className="fas fa-medal text-white text-lg"></i>
                </div>
                <div>
                  <h4 className="heading-font text-sm font-bold text-slate-900 mb-1">Total Quality Commitment</h4>
                  <p className="text-slate-500 text-[15px] leading-relaxed">
                    We are all, at EUROCERT, committed to the total quality of the services provided.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 flex items-center justify-center">
              <div className="relative w-full max-w-[280px] aspect-square rounded-2xl border border-slate-100 shadow-xl bg-white flex items-center justify-center p-8">
                <img src="/eurocert logo123.png" alt="EUROCERT Logo" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Accreditations & Standards — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto space-y-8">
              <div>
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Accreditation Standards</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  Internationally <span className="text-eurogold-400">Recognised</span>
                </h2>
              </div>
              <p className="text-white/60 text-[15px] leading-relaxed">
                Our target is that all inspections, certifications and verifications we undertake are accredited in compliance to the standards: <span className="text-white/90 font-medium">ISO/IEC 17020, ISO/IEC 17021, ISO/IEC 17024, ISO/IEC 17029, ISO/IEC 17043, ISO/IEC 17065</span> and <span className="text-white/90 font-medium">EC Regulation 1221/2009 (EMAS)</span>.
              </p>
              <p className="text-white/60 text-[15px] leading-relaxed">
                EUROCERT also owns and maintains accreditation from the British Accreditation Body, <span className="text-eurogold-400 font-medium">UKAS</span>, in compliance to ISO/IEC 17065 and accreditation by the American Accreditation Body, <span className="text-eurogold-400 font-medium">SAAS</span>, in compliance to ISO/IEC 17021 and Procedure SAAS P200.
              </p>
              <p className="text-white/60 text-[15px] leading-relaxed">
                We also aim to provide inspection services in compliance to <span className="text-white/90 font-medium">MLC, 2006</span> under approval by Government Flag Administrations as well as the organisation of examinations for certification of technical professions.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                {[
                  { label: 'ISO/IEC 17020', sub: 'Inspection' },
                  { label: 'ISO/IEC 17021', sub: 'Management Systems' },
                  { label: 'ISO/IEC 17024', sub: 'Personnel Certification' },
                  { label: 'ISO/IEC 17029', sub: 'Verification' },
                  { label: 'ISO/IEC 17043', sub: 'Proficiency Testing' },
                  { label: 'ISO/IEC 17065', sub: 'Product Certification' },
                ].map((std, i) => (
                  <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/2 hover:border-eurogold-400/20 transition-all duration-300 text-center">
                    <p className="heading-font text-xs font-bold text-eurogold-400 tracking-wider mb-1">{std.label}</p>
                    <p className="text-white/40 text-[11px]">{std.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Management Commitment — Light ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            <div>
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Leadership</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Management <span className="text-euro-600">Commitment</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50/50">
                <div className="w-10 h-10 rounded-lg bg-euro-600/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-tools text-euro-600 text-sm"></i>
                </div>
                <div>
                  <h4 className="heading-font text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">Resources & Support</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    The company management is committed to provide always all the required means in order for all personnel to comprehend and apply the Quality Policy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50/50">
                <div className="w-10 h-10 rounded-lg bg-euro-600/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-gavel text-euro-600 text-sm"></i>
                </div>
                <div>
                  <h4 className="heading-font text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">Legal Compliance</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    The management of the company is committed to the observance of the legislation, including the one that concerns the employees and health and safety.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50/50">
                <div className="w-10 h-10 rounded-lg bg-euro-600/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-book text-euro-600 text-sm"></i>
                </div>
                <div>
                  <h4 className="heading-font text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">Quality System</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    All who undertake works for EUROCERT shall implement the Quality System as it is exactly written in the Quality Manual and its related Quality Procedures and Regulations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50/50">
                <div className="w-10 h-10 rounded-lg bg-euro-600/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-user-tie text-euro-600 text-sm"></i>
                </div>
                <div>
                  <h4 className="heading-font text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">Executive Responsibility</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    EUROCERT's Top Management appoints the Managing Director to be the responsible executive for the body's operation and the Quality Assurance Director to be the Management Representative for the control and implementation of EUROCERT's Quality System, Accreditations and Approvals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Employee Obligations — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Code of Conduct</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Employee Obligations</h2>
              </div>
              <div className="space-y-4">
                {employeeObligations.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/2 hover:border-eurogold-400/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-eurogold-400/10 flex items-center justify-center shrink-0 mt-0.5">
                      <i className={`fas ${item.icon} text-eurogold-400 text-sm`}></i>
                    </div>
                    <div>
                      <h4 className="heading-font text-xs font-bold text-white uppercase tracking-wider mb-1.5">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Regulatory Commitment — Light ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-4 p-6 md:p-8 rounded-2xl bg-euro-50 border border-euro-100">
              <div className="w-12 h-12 rounded-xl bg-euro-600 flex items-center justify-center shrink-0">
                <i className="fas fa-file-contract text-white text-lg"></i>
              </div>
              <div className="space-y-3">
                <h4 className="heading-font text-sm font-bold text-slate-900">Regulatory Compliance Statement</h4>
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  EUROCERT states that it is committed to execute its duties and responsibilities that flow from the compliance to the requirements of the accreditation standards, the accreditation bodies' and competent authorities' operation regulations and of the national and regulatory legislation that concerns the notified bodies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Download PDF + CTA — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-eurogold-400/10 flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-file-pdf text-eurogold-400 text-2xl"></i>
              </div>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
                Download Full <span className="text-eurogold-400">Quality Policy</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
                Access the complete EUROCERT Quality Policy document in PDF format for your records.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/quality.pdf"
                  download
                  className="inline-flex items-center justify-center gap-3 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20"
                >
                  <i className="fas fa-download text-[10px]"></i>
                  Download PDF
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white border border-white/20 rounded-full px-8 py-3.5 hover:border-eurogold-400/50 hover:text-eurogold-400 transition-all"
                >
              Contact Us <i className="fas fa-arrow-right text-[9px]"></i>
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
