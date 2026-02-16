import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const dataToolSections = [
  { num: '01', title: 'Facility Profile' },
  { num: '02', title: 'Recruitment and Hiring' },
  { num: '03', title: 'Working Hours' },
  { num: '04', title: 'Wages and Benefits' },
  { num: '05', title: 'Worker Treatment' },
  { num: '06', title: 'Worker Involvement' },
  { num: '07', title: 'Health and Safety' },
  { num: '08', title: 'Termination' },
  { num: '09', title: 'Management Systems' },
  { num: '10', title: 'Above and Beyond' }
]

const stepOptions = [
  { step: '1', label: 'Essential', color: 'euro-600', desc: 'Covers key social & labor compliance questions, mostly connected to International Labor Standards (ILS) and National Labor Law (NLL).' },
  { step: '2', label: 'Progressive', color: 'euro-600', desc: 'Focuses on management systems and supportive social & labor compliance questions often found in social industry and certification standards. Includes all Step 1 questions.' },
  { step: '3', label: 'Advanced', color: 'euro-600', desc: 'Covers questions that go above and beyond social responsibility industry standards, seeking to elevate workplace well-being and community impact. Includes all Step 1 and Step 2 questions.' }
]

const selfAssessmentBenefits = [
  'Gives facilities a better understanding of where gaps might be',
  'Helps facilities understand how they can best improve working conditions',
  'Empowers facilities to take ownership and control over the improvement of workers\' working conditions'
]

const facilityResponsibilities = [
  'Completing the self/joint-assessment and attaching documentation through the Accredited Host platform',
  'Providing necessary information for cost estimation to the Verifier Body, including whether the facility wishes to include virtual verification activities',
  'Working together with the Verifier Body/Verifier to schedule the verification over consecutive days',
  'Support the Verifier during on-site verification — providing access to the facility, showing all relevant documentation and sites, introducing appropriate personnel including for worker interviews',
  'Ironing out any concerns or questions about the verification ideally while the Verifier is on-site or latest 48 hours after the on-site verification ends'
]

const virtualActivities = [
  'Pre-verification meetings',
  'Opening meetings',
  'Documentation reviews',
  'Virtual interviews to further understand documents shared',
  'Virtual walk-throughs',
  'Partial wage and hours records review'
]

const relatedServices = [
  { title: 'SEDEX/SMETA', subtitle: 'Ethical Trade Audits', image: '/b2.png', link: '/social-audits/sedex' },
  { title: 'SA 8000', subtitle: 'Social Accountability', image: '/b1.png', link: '/social-audits/sa-8000' },
  { title: 'Code of Conduct', subtitle: 'Brand & Retailer Audits', image: '/b3.png', link: '/social-audits/code-of-conduct' }
]

export default function SLCP() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/b6.png" className="w-full h-full object-cover opacity-30" alt="SLCP Social & Labor Convergence Program" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Converged Assessment Framework for Social & Labor Conditions</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            SLCP — <span className="text-eurogold-400">Social & Labor Convergence Program</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A simple, unified and effective industry-wide assessment framework to objectively assess social and labor conditions and replace proprietary tools
          </p>
        </div>
      </section>

      {/* About SLCP - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">About SLCP</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  What is <span className="text-euro-600">SLCP?</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                SLCP has developed a simple, unified and effective industry-wide assessment framework. This has resulted in a descriptive (standard-agnostic) tool and verification methodology to collect relevant and essential data with the intent to objectively assess social and labor conditions and replace current proprietary tools.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                <strong className="text-slate-700">SLCP is not a standard and does not provide certification.</strong> The Converged Assessment Framework is a descriptive (standard-agnostic) tool and verification methodology to collect relevant and essential data with the intent to objectively assess social and labor conditions.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-check-double text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Eurocert — Approved Verifier Body</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Eurocert is an approved training provider and an Approved Verifying Body for SLCP. Our verified assessments help facilities demonstrate social and labor compliance to multiple stakeholders through a single assessment.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/b6.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="SLCP Social & Labor Convergence Program" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Questions - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center mb-4">
                <i className="fas fa-server text-white text-sm"></i>
              </div>
              <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-3">What is an Accredited Host?</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                There are two types of Accredited Hosts: <strong className="text-slate-700">active and passive</strong>. The active Accredited Hosts include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-euro-600 text-xs shrink-0"></i>
                  <span className="text-slate-600 text-sm font-medium">Fair Factories Clearinghouse</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check text-euro-600 text-xs shrink-0"></i>
                  <span className="text-slate-600 text-sm font-medium">Higg Co</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center mb-4">
                <i className="fas fa-user-check text-white text-sm"></i>
              </div>
              <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-3">Who Does the Verification?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                SLCP approved Verifier Body selects the verifier who will do the verification. Eurocert is an approved Verifying Body authorized to conduct SLCP verifications.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center mb-4">
                <i className="fas fa-database text-white text-sm"></i>
              </div>
              <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-3">Who Owns the Data?</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                <strong className="text-slate-700">The facility owns the verified data</strong> and they can decide whom to share it with. This puts facilities in control of their own compliance information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Self Assessment - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Assessment Process</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                What is <span className="text-euro-600">Self Assessment in SLCP?</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-5">
                <p className="text-slate-500 text-[15px] leading-relaxed">
                  SLCP asks facilities to do a self/joint-assessment first. Not only does it allow for a full understanding of their working conditions, it also:
                </p>
                <ul className="space-y-3">
                  {selfAssessmentBenefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 bg-[#f8fafc] rounded-xl border border-slate-100">
                      <div className="w-7 h-7 rounded-lg bg-euro-600 flex items-center justify-center shrink-0 mt-0.5">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                      <span className="text-slate-600 text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-500 text-sm leading-relaxed">
                  After the self/joint-assessment, an SLCP approved verifier is sent to verify its accuracy and create a complete and validated set of data. Then, the facility can decide with whom they want to share their verified data.
                </p>
              </div>
              <div className="p-8 bg-[#f8fafc] rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-tasks text-white text-sm"></i>
                  </div>
                  <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">How to Do the Self Assessment?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  Facilities need to gather data from the <strong className="text-slate-700">previous 12 months</strong> to answer the Data Collection Tool&apos;s questions.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  In general, completing a self/joint-assessment takes around <strong className="text-slate-700">two weeks</strong> the first time. With experience this can be done faster. The Facility Guidance document is key to complete the assessment efficiently and with high quality.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Using the online platform for data collection, facilities can attach applicable photographs/documents for every question on the Tool. Note that all attachments are included in the verified assessment report shared with end users, so you should not include records that you do not want them to see.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Tool Sections - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Data Collection Tool</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                10 Sections of <span className="text-euro-600">SLCP Data Tool</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {dataToolSections.map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-9 h-9 rounded-lg bg-euro-50 flex items-center justify-center shrink-0 group-hover:bg-euro-600 transition-all duration-300">
                    <span className="heading-font text-euro-600 font-bold text-xs group-hover:text-white transition-all duration-300">{s.num}</span>
                  </div>
                  <span className="heading-font text-[10px] font-bold uppercase tracking-widest text-slate-900">{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started - Steps - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Getting Started</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                How to Start the <span className="text-euro-600">SLCP Process?</span>
              </h2>
            </div>

            {/* First Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="p-5 bg-[#f8fafc] rounded-2xl border border-slate-100 text-center">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center mx-auto mb-3">
                  <span className="heading-font text-white font-bold text-sm">01</span>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">Register</h4>
                <p className="text-slate-400 text-sm">Register and create your profile on the Gateway</p>
              </div>
              <div className="p-5 bg-[#f8fafc] rounded-2xl border border-slate-100 text-center">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center mx-auto mb-3">
                  <span className="heading-font text-white font-bold text-sm">02</span>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">Link Host</h4>
                <p className="text-slate-400 text-sm">Link to an Accredited Host</p>
              </div>
              <div className="p-5 bg-[#f8fafc] rounded-2xl border border-slate-100 text-center">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center mx-auto mb-3">
                  <span className="heading-font text-white font-bold text-sm">03</span>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">Create Profile</h4>
                <p className="text-slate-400 text-sm">Create your profile on the Accredited Host</p>
              </div>
            </div>

            {/* Step Options */}
            <div className="text-center mb-6">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Assessment Levels</h4>
              <h3 className="heading-font text-2xl font-bold text-slate-900 tracking-tight">
                Choose Your <span className="text-euro-600">Step Level</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {stepOptions.map((s, i) => (
                <div key={i} className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                      <span className="heading-font text-white font-bold text-sm">{s.step}</span>
                    </div>
                    <h4 className="heading-font text-sm font-bold uppercase tracking-widest text-slate-900">{s.label}</h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facility Responsibility & Verification - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Verification Process</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Facility&apos;s <span className="text-eurogold-400">Responsibility</span>
                </h3>
                <p className="text-white/40 text-sm mt-3 max-w-3xl mx-auto leading-relaxed">
                  The facility is responsible for facilitating a successful verification
                </p>
              </div>
              <div className="space-y-3 mb-8">
                {facilityResponsibilities.map((r, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-white/5 bg-white/2">
                    <div className="w-8 h-8 rounded-lg bg-eurogold-400/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="heading-font text-eurogold-400 font-bold text-xs">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">{r}</p>
                  </div>
                ))}
              </div>
              <div className="p-5 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5">
                <div className="flex items-start gap-3">
                  <i className="fas fa-exclamation-circle text-eurogold-400 text-sm mt-0.5 shrink-0"></i>
                  <p className="text-white/50 text-sm leading-relaxed">
                    <strong className="text-eurogold-400">Note:</strong> If a facility does not support the verification, e.g. denies a Verifier access to information, sites or workers, the Verifier needs to make note of this in the Verification Details section.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Verification & Disputes - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Virtual Verification */}
            <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                  <i className="fas fa-video text-white text-sm"></i>
                </div>
                <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">Virtual Verification</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                SLCP permits Verifiers to conduct virtual verification activities in order to reduce the time spent on-site. Virtual verifications can include:
              </p>
              <ul className="space-y-2 mb-4">
                {virtualActivities.map((v, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <i className="fas fa-check text-euro-600 text-xs shrink-0"></i>
                    <span className="text-slate-500 text-sm">{v}</span>
                  </li>
                ))}
              </ul>
              <div className="p-3 bg-euro-50/40 rounded-xl border border-euro-100">
                <p className="text-slate-500 text-xs leading-relaxed">
                  <strong className="text-slate-700">Requirements:</strong> All virtual activities must be completed before on-site verification begins. The same Verifier(s) must be involved in both. It is always the facility&apos;s decision to permit virtual activities.
                </p>
              </div>
            </div>

            {/* Disputes & Subcontracting */}
            <div className="space-y-6">
              <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-gavel text-white text-sm"></i>
                  </div>
                  <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">Can a Factory Dispute?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-2">
                  A facility can dispute the outcome of the verification on the Accredited Host platform if there are quality and/or integrity issues related to the Verifier&apos;s conduct or if the verification did not follow the Verification Protocol. Disputes cannot be raised at question level.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Once disputed, the Verification Oversight Organization (VOO) is notified and will begin an investigation, hearing all parties involved to come to a ruling.
                </p>
              </div>
              <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-project-diagram text-white text-sm"></i>
                  </div>
                  <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">Subcontracting in SLCP</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-2">
                  A &quot;subcontractor&quot; is an entity or person not part of the facility but used to complete part or all of the production process. A subcontractor is NOT a labor recruiter/agency, service provider, or materials supplier.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  If subcontractors are working in the facility, the facility is subject to questions related to subcontractors. If they work in production, they are considered within the scope of &quot;production worker&quot;.
                </p>
              </div>
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
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Approved Verifying Body</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Why Choose <span className="text-eurogold-400">Eurocert?</span>
                </h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-building text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">About Eurocert</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Eurocert is a Greek Independent Certification Body accredited by Greek and International Accreditation Bodies with offices in more than 14 countries in Europe and Asia. Eurocert possesses highly-trained and educated auditors with great expertise in social and labor compliance verification.
                  </p>
                </div>
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-certificate text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">SLCP Approved</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-3">
                    Eurocert is an <strong className="text-white/70">approved training provider</strong> and an <strong className="text-white/70">Approved Verifying Body</strong> for SLCP.
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed">
                    Our verified assessments help facilities streamline social compliance, reduce audit fatigue, and share one assessment across multiple stakeholders.
                  </p>
                </div>
              </div>
              <div className="p-5 mt-8 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                <p className="text-white/60 text-sm leading-relaxed">
                  <span className="text-eurogold-400 font-bold">We are offering above services on behalf of Eurocert S.A</span> — a Pan-European Certification body operating from Athens with global reach.
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
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Get Verified</h4>
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Start Your SLCP Verification</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our SLCP-approved verification experts are ready to help you streamline social compliance assessments and eliminate audit fatigue.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20">
                  Get Started <i className="fas fa-arrow-right text-[9px]"></i>
                </Link>
                <a href="tel:+917009007527" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white border border-white/15 rounded-full px-8 py-3.5 hover:bg-white/5 transition-all">
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
