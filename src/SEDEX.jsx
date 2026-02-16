import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const twoPillar = [
  { icon: 'fa-users', title: 'Labour Standards' },
  { icon: 'fa-hard-hat', title: 'Health & Safety' }
]

const twoPillarAdditional = [
  { icon: 'fa-cogs', title: 'Management Systems' },
  { icon: 'fa-id-card', title: 'Entitlement to Work' },
  { icon: 'fa-project-diagram', title: 'Subcontracting & Homeworking' },
  { icon: 'fa-leaf', title: 'Environment (Abridged)' }
]

const fourPillarExtra = [
  { icon: 'fa-tree', title: 'Environment (Extended)', desc: 'Replaces the Environment shortened version with comprehensive environmental assessment.' },
  { icon: 'fa-handshake', title: 'Business Ethics', desc: 'Assessment of business ethics practices including anti-bribery and corruption measures.' }
]

const auditAreas = [
  { num: '01', title: 'Labour Standards' },
  { num: '02', title: 'Health & Safety' },
  { num: '03', title: 'Environment' },
  { num: '04', title: 'Business Ethics' },
  { num: '05', title: 'Management System' },
  { num: '06', title: 'Code Implementation' },
  { num: '07', title: 'Entitlement to Work' },
  { num: '08', title: 'Subcontracting' },
  { num: '09', title: 'Home Working' }
]

const rootCauseTypes = [
  { icon: 'fa-chalkboard-teacher', title: 'Training', desc: 'Lack of adequate training for workers or management on specific requirements.' },
  { icon: 'fa-cogs', title: 'Systems', desc: 'A very prominent root cause — placing a system of process and communication can prevent recurrence.' },
  { icon: 'fa-money-bill-wave', title: 'Costs', desc: 'Financial constraints preventing proper implementation of required standards.' },
  { icon: 'fa-user-minus', title: 'Lack of Workers', desc: 'Insufficient workforce to meet compliance and operational requirements.' },
  { icon: 'fa-question-circle', title: 'Other', desc: 'Additional root causes specific to the nature of the non-conformity found.' }
]

const directoryBenefits = [
  'Site health check report',
  'Industry benchmarking and inherent risk score',
  'Direct links to track and improve performance',
  'See customer Member Directory profile views'
]

const relatedServices = [
  { title: 'SA 8000', subtitle: 'Social Accountability', image: '/b1.png', link: '/social-audits/sa-8000' },
  { title: 'SLCP', subtitle: 'Social & Labor Convergence', image: '/b6.png', link: '/social-audits/slcp' },
  { title: 'Code of Conduct', subtitle: 'Brand & Retailer Audits', image: '/b3.png', link: '/social-audits/code-of-conduct' }
]

export default function SEDEX() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/b2.png" className="w-full h-full object-cover opacity-30" alt="SEDEX SMETA Ethical Trade Audits" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Supplier Ethical Data Exchange & Members Ethical Trade Audit</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            SEDEX / SMETA — <span className="text-eurogold-400">Ethical Trade Audits</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Sedex Audit — Step by Step. An approved auditing company authorized to conduct Sedex audits with quality reports easily understood by buyers and suppliers.
          </p>
        </div>
      </section>

      {/* What is Sedex - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Audit Overview</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  What is <span className="text-euro-600">Sedex?</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                The full form of Sedex is <strong className="text-slate-700">Supplier Ethical Data Exchange</strong>. It is a platform for sharing ethical data about factories and producers. There is no difference between Sedex and SMETA from a user&apos;s standpoint. Sedex uses Ethical Trade Initiative (ETI) code of conduct as a basis for audits. SEDEX is a non-profit organization that works by the secure online database for the improvement of ethical and responsible business practices.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                The supplier members of Sedex can share and manage information related to Labour Standards. Producer or Supplier members of Sedex are committed for enhancement in their labour standards. The main role of Sedex is continuous improvement in working conditions.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Now, more and more brands and buyers are using Sedex audit to reduce and monitor their supply chain risks. Popularity of SMETA audit is increasing not only in international trade but also in national trade. As compliances for business increase day by day and supply chains get more distributed and shorter, risks in the supply chain are passed on to the main business. This is where a SMETA audit comes as an important tool for Buyers and Businesses.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-info-circle text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Important Note</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Sedex is <strong className="text-slate-700">not a certification</strong>. SMETA audits result in an audit report and not a certificate. Though it covers sustainability aspects in its audit, you cannot use a Sedex Logo on your product, as it is not a sustainability certification. The Sedex Logo cannot be used by any non-member, nor on products or marketing literature. The only claim a member can make is that they are a member of Sedex using the appropriate logo for their membership type.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/b2.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="SEDEX SMETA Ethical Trade Audits" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is SMETA + Difference - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                  <i className="fas fa-clipboard-check text-white text-sm"></i>
                </div>
                <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">What is SMETA Audit?</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                There is no difference between a Sedex Audit and SMETA audit — they are both the same thing. <strong className="text-slate-700">SMETA (Sedex Members Ethical Trade Audit)</strong> is the audit methodology created by the Sedex members to provide a protocol which is shared with a feel of self-assurance.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                SMETA Audit is based on Ethical Trade Initiative Base Code and local laws. It can use other codes based on conventions of ILO (International Labour Organization). It is not a new methodology but a new audit process which compiles good practices in an ethical way. The audit report format of SMETA is easily understandable for all.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                  <i className="fas fa-file-alt text-white text-sm"></i>
                </div>
                <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">What is SMETA 6.1?</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                Full form of SMETA is <strong className="text-slate-700">Sedex Members Ethical Trade Audit</strong>. It is an audit methodology. The digit &quot;6.1&quot; refers to the version of the three main components of this audit methodology:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <i className="fas fa-check text-euro-600 text-xs shrink-0"></i>
                  <span className="text-slate-500 text-sm">Best Practice Guidance</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check text-euro-600 text-xs shrink-0"></i>
                  <span className="text-slate-500 text-sm">Report Format</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="fas fa-check text-euro-600 text-xs shrink-0"></i>
                  <span className="text-slate-500 text-sm">CAPR Format</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2-Pillar & 4-Pillar Audit - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Audit Methodology</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                What Does a Sedex Auditor <span className="text-euro-600">Check?</span>
              </h2>
              <p className="text-slate-400 text-sm mt-3 max-w-3xl mx-auto leading-relaxed">
                A SMETA Audit comprises of Two-Pillar and Four-Pillar options based on ETI Base Code
              </p>
            </div>

            {/* 2 Pillar */}
            <div className="mb-8">
              <h3 className="heading-font text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center text-white text-xs font-bold">2P</span>
                SMETA Two-Pillar Audit
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {twoPillar.map((p, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-euro-50/40 rounded-2xl border border-euro-100">
                    <div className="w-11 h-11 rounded-xl bg-euro-600 flex items-center justify-center shrink-0">
                      <i className={`fas ${p.icon} text-white text-sm`}></i>
                    </div>
                    <h4 className="heading-font text-[12px] font-bold uppercase tracking-widest text-slate-900">{p.title}</h4>
                  </div>
                ))}
              </div>
              <p className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest mb-3">Additional Elements:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {twoPillarAdditional.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-[#f8fafc] rounded-xl border border-slate-100">
                    <div className="w-9 h-9 rounded-lg bg-euro-50 flex items-center justify-center text-euro-600 shrink-0">
                      <i className={`fas ${a.icon} text-sm`}></i>
                    </div>
                    <span className="heading-font text-[10px] font-bold uppercase tracking-widest text-slate-700">{a.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Pillar */}
            <div>
              <h3 className="heading-font text-lg font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center text-white text-xs font-bold">4P</span>
                SMETA Four-Pillar Audit (Additionally Covers)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fourPillarExtra.map((p, i) => (
                  <div key={i} className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-3 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                      <i className={`fas ${p.icon} text-base`}></i>
                    </div>
                    <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{p.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mt-4 p-4 bg-euro-50/40 rounded-xl border border-euro-100">
                <i className="fas fa-info-circle text-euro-600 mr-2"></i>
                Though these pillars are a new addition, Eurocert is particularly equipped to add value in these pillars because of our experience with other sustainability initiatives which focus on recycling of material and reuse monitoring of material.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Sedex Audit - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Audit Scope</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Areas of <span className="text-euro-600">Sedex Audit</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {auditAreas.map((a, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center shrink-0 group-hover:bg-euro-600 transition-all duration-300">
                    <span className="heading-font text-euro-600 font-bold text-sm group-hover:text-white transition-all duration-300">{a.num}</span>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900">{a.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SMETA Report & CAPR - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Reports & Compliance</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                SMETA Audit <span className="text-euro-600">Reports & CAPR</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                      <i className="fas fa-file-alt text-white text-xs"></i>
                    </div>
                    <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">What Does a SMETA Report Look Like?</h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-2">
                    A SMETA audit report format can change from time to time. It is best to check with the Sedex platform for the latest version. A SMETA Audit report has more than 80 pages, but the most important things to look for are:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check text-euro-600 text-xs mt-1 shrink-0"></i>
                      <span className="text-slate-500 text-sm"><strong className="text-slate-700">Version Number</strong> — found at the first page of the report</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check text-euro-600 text-xs mt-1 shrink-0"></i>
                      <span className="text-slate-500 text-sm"><strong className="text-slate-700">Audit Team</strong> — whether they are an APSCA member</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                      <i className="fas fa-calendar-alt text-white text-xs"></i>
                    </div>
                    <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Report Validity</h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    There is no validity mentioned on the SMETA audit report. It is generally considered to be <strong className="text-slate-700">one year from the date of audit</strong>. It depends more on the buyer if they are accepting an older report.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                      <i className="fas fa-eye-slash text-white text-xs"></i>
                    </div>
                    <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Unable to See SMETA Report?</h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Many producers forget to <strong className="text-slate-700">publish their report</strong> after it has been uploaded by the Sedex Approved Authorized Auditing Company like Eurocert. This is an additional step to be done by each producer. Once you publish it, you will also get links to upload the proof of corrective action.
                  </p>
                </div>
                <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                      <i className="fas fa-search text-white text-xs"></i>
                    </div>
                    <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Where to Find SMETA Reports?</h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    A buyer should always look for SMETA CAPR and SMETA Audit reports on the <strong className="text-slate-700">Sedex platform</strong>. It is not a good practice to ask for separate CAPR reports or SMETA Audit reports in PDF format as there is a possibility of getting manipulated reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Root Cause & CAPR - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">SMETA CAPR</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Root Cause & <span className="text-eurogold-400">Corrective Action</span>
                </h3>
                <p className="text-white/40 text-sm mt-3 max-w-3xl mx-auto leading-relaxed">
                  Every SMETA audit will probably result in non-conformities. These non-conformities will have root causes. SMETA CAPR report identifies the following main types of root causes:
                </p>
              </div>
              <div className="grid lg:grid-cols-[1fr,420px] gap-8">
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {rootCauseTypes.map((r, i) => (
                      <div key={i} className="p-5 rounded-2xl border border-white/5 bg-white/2 text-center">
                        <div className="w-11 h-11 rounded-xl bg-eurogold-400/10 flex items-center justify-center mx-auto mb-3">
                          <i className={`fas ${r.icon} text-eurogold-400 text-sm`}></i>
                        </div>
                        <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-white mb-2">{r.title}</h4>
                        <p className="text-white/40 text-xs leading-relaxed">{r.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
                    <p className="text-white/50 text-sm leading-relaxed mb-3">
                      It is very common to identify more than one root cause for any non-conformity. A <strong className="text-white/70">&quot;system&quot; root cause</strong> is a very prominent root cause that may or may not be identified by the auditor. As a factory management, you should always try to find out if the recurrence of this type of non-conformity can be avoided by placing a system.
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      A system is a combination of process and communication of the result of process. For example, a &quot;monitoring process&quot; and the result of this monitoring process should be communicated in a simple and direct way. A &quot;system&quot; root cause will force the management to come up with a system for monitoring — for example, monitoring of status of escape routes on a daily basis. The next important step is to communicate this monitoring effort and report it in a way that is visible to all stakeholders.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(212,168,67,0.1)]">
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/XHVNe6bEgD8"
                      title="SMETA Root Cause & Corrective Action"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-white/30 text-xs text-center mt-3 font-medium uppercase tracking-widest">Watch: SMETA CAPR Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMETA Checklist & Sedex Advance - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                  <i className="fas fa-list-alt text-white text-sm"></i>
                </div>
                <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">SMETA Audit Checklist</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                The easiest and most straightforward way to make your own SMETA audit checklist is to start with your <strong className="text-slate-700">SAQ (Self Assessment Questionnaire)</strong>, which is available to all manufacturers when they register and pay their annual membership fee.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Add to this the legal requirements of your local area regarding environment, health and safety, and labour law. This gives you an initial format for SMETA audit checklist. Please note this is just a small checklist which you have to further develop.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                  <i className="fas fa-laptop text-white text-sm"></i>
                </div>
                <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">Sedex Advance Platform</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                <strong className="text-slate-700">Sedex Advance</strong> is the name of the software platform developed by Sedex. This is used by its members to share their ethical data in the form of Sedex audit reports and Sedex CAPR.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                It has many features and is continuously updated with more features for its users. Members can register, manage their profiles, share audit reports, and track corrective actions all within the platform.
              </p>
            </div>
          </div>

          {/* Sedex Member Directory */}
          <div className="max-w-5xl mx-auto mt-8 p-8 bg-white rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                <i className="fas fa-address-book text-white text-sm"></i>
              </div>
              <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">Sedex Member Directory</h4>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Sedex Member Directory is a feature available to Supplier members at an additional cost of GBP 150 per year on top of Sedex membership fees. It gives more exposure to your company and site in the international market where buyers are looking for a sustainable supply chain.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {directoryBenefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-[#f8fafc] rounded-xl border border-slate-100">
                  <i className="fas fa-check-circle text-euro-600 text-sm shrink-0"></i>
                  <span className="text-slate-600 text-sm font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Become Auditor + Membership - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">
            <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center mb-4">
                <i className="fas fa-user-tie text-white text-sm"></i>
              </div>
              <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-3">How to Become a Sedex Auditor?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                You need to be an <strong className="text-slate-700">APSCA member</strong> to become a Sedex auditor. You have to be associated with an APSCA member firm. To become a CSCA, you have to complete three Exams of APSCA.
              </p>
            </div>
            <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center mb-4">
                <i className="fas fa-sync-alt text-white text-sm"></i>
              </div>
              <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-3">Membership Renewal</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                The Sedex membership fee is paid annually. You can log in and get your Sedex membership renewed by paying online through the Sedex Advance platform.
              </p>
            </div>
            <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center mb-4">
                <i className="fas fa-building text-white text-sm"></i>
              </div>
              <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-3">New Factory Steps</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Register as a Supplier Member on Sedex Advance platform, complete your SAQ, pay your annual membership fee, and prepare for your audit by reviewing ETI Base Code and local legal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eurocert - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Approved Auditing Company</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Why Use <span className="text-eurogold-400">Eurocert</span> for Sedex Audits?
                </h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-shield-alt text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">Dedicated Expertise</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-3">
                    Eurocert&apos;s dedicated team of social audit professionals is a preferred choice for managing not just Sedex 2-Pillar audit but also 4-Pillar audits. We are equipped to conduct surveys of suppliers and use anonymous surveys for identifying issues that could potentially become problems for brands and online retailers alike.
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Eurocert has a dedicated back office that reviews the Sedex reports for readability, consistency, and quality issues.
                  </p>
                </div>
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-chart-line text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">Supply Chain Excellence</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-3">
                    The experience and expertise of Eurocert in analyzing sustainable initiatives for the supply chain and also executing these initiatives makes Eurocert a preferred choice for conducting social audits, vendor audits, as well as SMETA audits across the supply chain.
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Our dedicated and professional programming team is also available to design dashboards and customize dashboards for clients.
                  </p>
                </div>
              </div>
              <div className="p-5 mt-8 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                <p className="text-white/60 text-sm leading-relaxed">
                  <span className="text-eurogold-400 font-bold">We are an Approved Auditing Company authorized to conduct Sedex Audits.</span> Eurocert (group companies) provides quality Sedex Audit reports which are easy to understand by buyers and suppliers.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-5 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                  <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">14+</span>
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Countries</span>
                </div>
                <div className="p-5 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                  <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">25+</span>
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Years Experience</span>
                </div>
                <div className="p-5 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                  <span className="heading-font text-eurogold-400 font-bold text-3xl block mb-1 leading-none">100%</span>
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services - Soft */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Explore More</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Related Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {relatedServices.map((s, i) => (
              <Link key={i} to={s.link} className="group relative h-[280px] rounded-2xl overflow-hidden border border-slate-200 hover:border-euro-300 shadow-md hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${s.image}')` }} />
                <div className="absolute inset-0 bg-linear-to-t from-[#030a16]/80 via-[#030a16]/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <h4 className="text-white text-sm heading-font font-bold uppercase tracking-widest mb-1">{s.title}</h4>
                  <span className="text-[9px] font-bold uppercase text-eurogold-400 tracking-[0.2em] heading-font">{s.subtitle}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto p-10 sm:p-12 rounded-2xl border border-white/5 bg-white/2">
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Get Started</h4>
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Start Your SMETA Audit</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our approved Sedex auditors are ready to guide your organization through SMETA 2-Pillar or 4-Pillar audits with quality reports.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20">
                  Get Started <i className="fas fa-arrow-right text-[9px]"></i>
                </Link>
                <a href="tel:+919316012883" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white border border-white/15 rounded-full px-8 py-3.5 hover:bg-white/5 transition-all">
                  <i className="fas fa-phone text-[9px]"></i> Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
