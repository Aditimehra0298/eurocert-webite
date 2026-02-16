import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const sa8000Values = [
  { icon: 'fa-child', title: 'Child Labor' },
  { icon: 'fa-lock', title: 'Forced Labor' },
  { icon: 'fa-hard-hat', title: 'Health and Safety' },
  { icon: 'fa-users', title: 'Freedom of Association & Collective Bargaining' },
  { icon: 'fa-ban', title: 'Discrimination' },
  { icon: 'fa-exclamation-triangle', title: 'Disciplinary Practices' },
  { icon: 'fa-clock', title: 'Working Hours' },
  { icon: 'fa-money-bill-wave', title: 'Remuneration' },
  { icon: 'fa-cogs', title: 'Management System' }
]

const benefits = [
  { icon: 'fa-check-circle', title: 'Global Buyer Compliance', desc: 'Meet ethical sourcing expectations of international buyers and retailers with the gold standard of social accountability.' },
  { icon: 'fa-handshake', title: 'Stakeholder Trust', desc: 'Demonstrate commitment to responsible business practices to investors, partners, and the public.' },
  { icon: 'fa-balance-scale', title: 'Fair & Ethical Workplace', desc: 'Establish systems ensuring dignity, fairness, and a needs-based wage for all workers.' },
  { icon: 'fa-hard-hat', title: 'Worker Safety & Welfare', desc: 'Enhance health, safety, and working conditions across your operations.' },
  { icon: 'fa-award', title: 'Brand Reputation', desc: 'Strengthen your brand as a globally recognized ethical and responsible organization.' },
  { icon: 'fa-globe-europe', title: 'Global Market Access', desc: 'Open doors to markets requiring verified social accountability and ethical labor practices.' },
  { icon: 'fa-shield-alt', title: 'Supply Chain Risk Reduction', desc: 'Identify and mitigate social compliance risks throughout your supply chain.' },
  { icon: 'fa-chart-line', title: 'Attract Ethical Investors', desc: 'Appeal to ESG-focused investors and brands seeking responsible investment opportunities.' }
]

const managementElements = [
  { num: '01', title: 'Policies, Procedures & Records', desc: 'Avoid redundancy, ensure regular review, and keep documentation practical and deliverable.' },
  { num: '02', title: 'Social Performance Team', desc: 'A team with worker and management members to drive social system improvements.' },
  { num: '03', title: 'Risk Assessment', desc: 'Comprehensive risk assessment covering all SA 8000 elements.' },
  { num: '04', title: 'Monitoring', desc: 'Ongoing monitoring of social performance indicators and compliance.' },
  { num: '05', title: 'Internal Involvement & Communication', desc: 'Active communication and engagement across all levels of the organization.' },
  { num: '06', title: 'Complaint Management & Resolution', desc: 'Effective systems for raising, investigating, and resolving worker complaints.' },
  { num: '07', title: 'Stakeholder Engagement', desc: 'Meaningful engagement with external and internal stakeholders.' },
  { num: '08', title: 'Corrective & Preventive Actions', desc: 'Structured processes for addressing non-conformities and preventing recurrence.' },
  { num: '09', title: 'Training & Capacity Building', desc: 'Continuous training for SPT, workers, and management on social accountability.' },
  { num: '10', title: 'Management of Subcontractors', desc: 'Extending SA 8000 compliance requirements throughout the supply chain.' }
]

const superiority = [
  'It advocates paying workers a "needs wage" rather than "minimum wage" — a needs wage is higher than the minimum wage',
  'SA 8000 standard demands a management system approach',
  'It asks for a dedicated team (SPT) to make and improve social management system',
  'SA 8000 implementation demands commitment from top management',
  'Stringent monitoring by a dedicated team of professionals and reduced number of authorized certification bodies ensures higher implementation standards'
]

const relatedServices = [
  { title: 'SEDEX/SMETA', subtitle: 'Ethical Trade Audits', image: '/b2.png', link: '/social-audits/sedex' },
  { title: 'WRAP', subtitle: 'Responsible Production', image: '/b4.png', link: '/social-audits/wrap' },
  { title: 'ISO 26000', subtitle: 'Social Responsibility', image: '/b11.png', link: '/social-audits/iso-26000' }
]

export default function SA8000() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/b1.png" className="w-full h-full object-cover opacity-30" alt="SA 8000 Social Accountability Certification" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">The Gold Standard for Social Accountability</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            SA 8000 — <span className="text-eurogold-400">Social Accountability</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A respected social accountability certification for producers, factories and farms based on SA 8000:2014 standard — considered the gold standard for social accountability worldwide
          </p>
        </div>
      </section>

      {/* What is SA 8000 - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Standard Overview</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  What is <span className="text-euro-600">SA 8000 Certificate?</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                SA 8000 certificate is a respected social accountability certification for producers, factories and farms. This is based on SA 8000:2014 standard. This standard has 9 clauses. Out of the 9 clauses, 8 are related to Labour welfare and the 9th clause is related to management system. Because of the management system orientation, this standard is more difficult to adopt, which is why it is more demanding in terms of efforts required to maintain certification.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                One of the other reasons it is more respected is that it asks for the <strong className="text-slate-700">Basic Needs Wage</strong> implementation. This is a significant demand from the producers and suppliers as this increases their wage bill. This is the reason it is considered the <strong className="text-slate-700">gold standard</strong> for Social Accountability.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                SA 8000 standard concerns all companies regardless of activity that aim at continuously improving labour conditions and communicate this to all relevant stakeholders and interested parties, by addressing labour issues also to sub-contractors.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-history text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">History of SA 8000:2014</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Rising public concern about inhumane working conditions in developing countries led to the creation in 1997 of the Social Accountability International Organization. Its purpose was to draw up a universal code of practice for labour conditions in manufacturing and agricultural industry. SA 8000 prescribes specific performance standards and is designed to embrace existing international agreements including ILO convention, the Universal Declaration on Human Rights, and the UN Convention on the Rights of the Child.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/b1.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="SA 8000 Social Accountability" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SA 8000 Values - 9 Areas - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">SA 8000 Values</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Nine Essential <span className="text-euro-600">Performance Areas</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-3xl mx-auto leading-relaxed">
              SA 8000 provides transparent, measurable, verifiable elements for certifying the performance of companies in nine essential areas
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {sa8000Values.map((v, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 shrink-0 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${v.icon} text-base`}></i>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-euro-600 uppercase tracking-widest heading-font">Clause {i + 1}</span>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900">{v.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Certification Benefits</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Benefits of SA 8000 <span className="text-euro-600">Certification</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-3xl mx-auto leading-relaxed">
              Many businesses have already begun to recognize the commercial advantages of adopting an ethical dimension in their employment practices. The SA 8000 standard offers a global social responsibility employment practice, which complies with UN and Human Rights Conventions and Declarations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group text-center">
                <div className="w-12 h-12 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 mx-auto group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${b.icon} text-lg`}></i>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{b.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Roadmap - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Certification Roadmap</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                How to Get <span className="text-euro-600">SA 8000 Certificate?</span>
              </h2>
              <p className="text-slate-400 text-sm mt-3 max-w-3xl mx-auto leading-relaxed">
                While the roadmap for obtaining this social certification may vary for each factory, here is a generic roadmap for new factories
              </p>
            </div>
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-euro-600 flex items-center justify-center shrink-0">
                    <span className="heading-font text-white font-bold text-lg">01</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="heading-font text-sm font-bold uppercase tracking-widest text-slate-900">Get the Management Commitment</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      While this seems to be a very easy step, this is actually the most difficult. The most common mistake is that the top management is only given the idea of certification audit cost. Not knowing all the cost aspects of SA 8000 certificate is a big mistake — they get financial shocks when they find that the cost of maintaining this certificate is actually much more than the cost of acquiring it.
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Knowing the cost is not enough. The top management should align with the principals of SA 8000 standard. This will require development of compassion for the workers. All the members of top management first have to commit to the welfare of the workers as a broad principal. This commitment is the foundation stone to all social certifications. Once this is done, rest is a piece of cake.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-euro-600 flex items-center justify-center shrink-0">
                    <span className="heading-font text-white font-bold text-lg">02</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="heading-font text-sm font-bold uppercase tracking-widest text-slate-900">Build Policies, Procedures & a Team</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      This step can take anywhere between 30 days to 90 days depending on efforts and competence of the team. A team is very important — this team is known as the <strong className="text-slate-700">Social Performance Team (SPT)</strong> by SA 8000 standard. An SPT should have worker as well as members from management, and the worker member may include worker representative.
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      The SPT should be well trained in Risk Analysis, SA 8000 standard, and Root Cause Analysis. This training should not be one time but repeated and improved. The Social Performance Team should also be involved in conducting Internal audit and in the conduct of management reviews.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="p-8 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-euro-600 flex items-center justify-center shrink-0">
                    <span className="heading-font text-white font-bold text-lg">03</span>
                  </div>
                  <div className="space-y-3">
                    <h4 className="heading-font text-sm font-bold uppercase tracking-widest text-slate-900">Apply to the Certification Body</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      If the above two steps are conducted comprehensively, then this step is very easy. The certification body does two audits — Stage 1 and Stage 2. Each audit will result in certain observations and non-conformities. The Social Performance Team should carefully study all observations and non-conformities and conduct root cause analysis for each, trying to take corrective action that will prevent recurrence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Root Cause - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* How much time */}
            <div className="p-8 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                  <i className="fas fa-clock text-white text-sm"></i>
                </div>
                <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">How Long Does It Take?</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                The certification process involves two stages and stakeholder consultation, taking around 30 days to complete. However, one should not say it takes only 30 days — it generally takes <strong className="text-slate-700">6 months of active management system implementation</strong>.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                SA 8000 auditors expect at least 6 months record of an effective management system where policies and procedures are understood and executed at least partially. It may take <strong className="text-slate-700">30 days to 9 months</strong> to get a certificate depending on the company&apos;s existing social management system.
              </p>
            </div>
            {/* Root Cause */}
            <div className="p-8 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                  <i className="fas fa-search text-white text-sm"></i>
                </div>
                <h4 className="heading-font text-euro-600 font-bold text-sm uppercase tracking-widest">Root Cause & Corrective Action</h4>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-3">
                <strong className="text-slate-700">Step 1 — Root Cause Analysis:</strong> Use a Fish Bone analysis technique to help the SPT think in specific areas. The team should meet 2-3 times with a break of 2-3 days in between, identifying root causes for each non-conformity in possible directions drawn as "branches" of the fish-bone structure.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                <strong className="text-slate-700">Step 2 — Corrective Action:</strong> Once root causes are identified, the SPT tries to identify more than one ACTION for each non-conformity. This step requires understanding of all processes and their linkages, and is the most difficult step in the improvement cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SA 8000 is Superior + SA 8000 vs ISO 26000 - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Superior Standard</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Why SA 8000 is <span className="text-eurogold-400">Superior</span>
                </h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Why Superior */}
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-trophy text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">The Gold Standard</h4>
                  </div>
                  <ul className="space-y-3">
                    {superiority.map((s, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <i className="fas fa-check text-eurogold-400 text-xs mt-1 shrink-0"></i>
                        <span className="text-white/50 text-sm leading-relaxed">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* SA 8000 vs ISO 26000 */}
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-exchange-alt text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">SA 8000 vs ISO 26000</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-3">
                    ISO 26000:2010 is a guidance standard, not a requirement standard. SA 8000 is a requirement standard with specific performance criteria and certification requirements.
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed mb-3">
                    The main difference is not in the content but in the execution and monitoring of the certification scheme. The execution and monitoring of SA 8000 is much higher than an ISO-based standard.
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed">
                    SA 8000 is the most trustworthy international standard for social responsibility. ISO 26000 is a guidance document — application of ISO 26000 is a step forward before implementing and certifying with SA 8000. Eurocert S.A, having great experience in the field, may conduct conformity audits according to ISO 26000 and issue relevant declarations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management System Elements - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Clause 9 — Management System</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Management System <span className="text-euro-600">Elements</span>
              </h2>
              <p className="text-slate-400 text-sm mt-3 max-w-3xl mx-auto leading-relaxed">
                SA 8000:2014 has a major clause about management systems with 10 subclauses, making it the biggest requirement clause of the standard
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {managementElements.map((e, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center shrink-0 group-hover:bg-euro-600 transition-all duration-300">
                    <span className="heading-font text-euro-600 font-bold text-sm group-hover:text-white transition-all duration-300">{e.num}</span>
                  </div>
                  <div>
                    <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-1">{e.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Certify with Eurocert - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Trusted Certification Partner</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Why Certify with <span className="text-eurogold-400">Eurocert S.A?</span>
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
                    Eurocert S.A is a Greek Independent Certification Body accredited by Greek and International Accreditation Bodies with offices and activity across the globe. Eurocert S.A possesses highly-trained and educated auditors with great expertise and experience in their field.
                  </p>
                </div>
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-star text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">SAAS Accredited</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    Eurocert S.A is one of the few elite accredited certification bodies for the SA 8000 standard worldwide, accredited by the <strong className="text-white/70">Social Accountability Accreditation Services (SAAS)</strong>.
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed">
                    Certification by Eurocert means evaluation and acceptance by an accredited and well-respected third-party professional organization with global recognition.
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
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Get Certified</h4>
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Start Your SA 8000 Journey</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our SAAS-accredited social accountability experts are ready to guide your organization through SA 8000 certification — the gold standard for social accountability.</p>
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
