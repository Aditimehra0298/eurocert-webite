import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const implementationSteps = [
  { step: '01', title: 'Build ISMS Team', desc: 'Build a team responsible for ISMS. It should be from all relevant departments.' },
  { step: '02', title: 'Identify All Assets', desc: 'Identify all assets and assign a value to each — acquisition value or loss value. Identify owner of each asset. Assets include Information Assets, Hardware Assets, People Assets, Building Assets, and Software Assets.' },
  { step: '03', title: 'Risk Analysis Technique', desc: 'Identify and finalize a risk analysis technique. Train your ISMS team in this risk analysis technique.' },
  { step: '04', title: 'Conduct Risk Analysis', desc: 'Conduct a risk analysis and evaluate risks to all assets.' },
  { step: '05', title: 'Select & Apply Controls', desc: 'Select controls and apply them to mitigate identified risks.' },
  { step: '06', title: 'Internal Audit', desc: 'Conduct Internal Audit to verify the effectiveness of implemented controls.' },
  { step: '07', title: 'Management Review', desc: 'Conduct management review to ensure the ISMS meets organizational objectives.' }
]

const certificationSteps = [
  { step: '01', title: 'Pre-Assessment', desc: 'Eurocert provides competent ISO 27001 auditors and performs a pre-assessment of the Information Security Management System.' },
  { step: '02', title: 'Documentation Review', desc: 'Eurocert checks the completeness of system documentation (manual, procedures, instructions, forms, etc.) and implementation (Archives) under the International Standard ISO 27001.' },
  { step: '03', title: 'Gap Identification', desc: 'Gaps are identified by the audit team. The company then defines the appropriate period of time within which the necessary corrective actions will take place.' },
  { step: '04', title: 'Certification Audit', desc: 'After corrective actions are taken, the certification audit takes place. In this audit, the whole system is audited and effectiveness of all corrective actions is checked.' },
  { step: '05', title: 'Certification Issued', desc: 'If the Assessment inspection does not record any non-compliances to the ISO 27001 standard then Eurocert issues the ISO 27001 Certification. In case of recorded non-compliances, further corrective actions are required.' }
]

const relatedStandards = [
  'ISO 27000: ISMS – Vocabulary',
  'ISO 27001: Minimum Requirements for ISMS (Certification Standard)',
  'ISO 27002: Code of Practice for Information Security Controls',
  'ISO 27017: Code of Practice for ISMS for Cloud Services',
  'ISO 27010: Intersector and Inter-organization Communication',
  'ISO 27039: Preventing and Detecting Cyber Attacks',
  'ISO 27013: Integrated Solution for Services',
  'ISO 27011: Code of Practice for Telecommunication Organizations',
  'ISO 27019: IS Controls for Energy Utility Industry',
  'ISO 27014: Governance of Information Security',
  'ISO 27018: Code of Practice for PII in Public Clouds'
]

const importanceBenefits = [
  'Improving overall information security and availability of systems',
  'Getting more contracts from customers',
  'External aspects to continuously monitor and force improvement in ISMS',
  'More sensitivity towards small information security incidents',
  'More awareness of staff',
  'A stronger system for employee due diligence',
  'A system to ensure business continuity',
  'All assets are traced, organized and mapped to their owners',
  'Risk of asset is reviewed on an ongoing basis',
  'Division of responsibility for key tasks'
]

const isControls = [
  { icon: 'fa-file-alt', title: 'Information Security Policy', desc: 'Well documented IS policies give direction to management for taking decisions. It also establishes expectations from employees. All IS policies should be reviewed for adequacy, clarity and appropriateness.' },
  { icon: 'fa-sitemap', title: 'Organization for IS', desc: 'Includes defining IS roles and responsibilities, segregation of duties, defined contact for authorities and special interest groups, and defining IS objectives in project management.' },
  { icon: 'fa-mobile-alt', title: 'Mobile Devices & Teleworking', desc: 'Controls for managing security of mobile devices and remote working arrangements.' },
  { icon: 'fa-user-shield', title: 'Human Resource Security', desc: 'Security considerations before, during and after employment.' },
  { icon: 'fa-boxes', title: 'Asset Management', desc: 'Includes asset list and ownership, information classification, and media handling (especially removable media).' },
  { icon: 'fa-key', title: 'Access Control', desc: 'Physical and logical access control mechanisms.' },
  { icon: 'fa-lock', title: 'Cryptography', desc: 'Encryption and cryptographic controls for data protection.' },
  { icon: 'fa-cogs', title: 'Operations Security', desc: 'Operational procedures and responsibilities for secure operations.' },
  { icon: 'fa-network-wired', title: 'Communications Security', desc: 'Security controls for network and information transfer.' },
  { icon: 'fa-code', title: 'System Development', desc: 'Security in system acquisition, development and maintenance.' },
  { icon: 'fa-handshake', title: 'Supplier Relationships', desc: 'Managing information security in supplier agreements.' },
  { icon: 'fa-exclamation-triangle', title: 'Incident Management', desc: 'IS incident management and response procedures.' }
]

const costHeads = [
  { icon: 'fa-graduation-cap', title: 'Training Cost', desc: 'Training your team on ISO 27001 requirements and implementation.' },
  { icon: 'fa-tools', title: 'Controls Implementation', desc: 'Acquiring and implementing necessary security controls.' },
  { icon: 'fa-chart-line', title: 'Monitoring Costs', desc: 'Ongoing monitoring and maintenance of the ISMS.' },
  { icon: 'fa-certificate', title: 'Certification Costs', desc: 'Fees for the certification audit and certificate issuance.' }
]

const relatedServices = [
  { title: 'ISO 27017', subtitle: 'Cloud Security', image: '/m14.png', link: '/management-system/iso-27017' },
  { title: 'ISO 27018', subtitle: 'Cloud Privacy', image: '/m15.png', link: '/management-system/iso-27018' },
  { title: 'BS 10012', subtitle: 'Data Protection', image: '/m16.png', link: '/management-system/bs-10012' }
]

export default function ISO27001() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    { q: 'How much time does it take to get ISMS certificate?', a: 'It can take anywhere between 30 days to 6 months to implement ISO 27001. The most important factor is the competence and training of the IS team.' },
    { q: 'What is Statement of Applicability?', a: 'The statement of applicability is the list of selected and applied controls. It is unique for each organization. SOA is a dynamic document that has to be updated regularly.' },
    { q: 'Shall we use all controls listed in ISO 27002?', a: 'No, it is not necessary to use all controls listed in ISO 27002. The list of controls is very big. Not all controls may be useful for the organization. Every organization is unique and has unique threats and knowledge. Sometimes it is better to choose simple controls rather than complex controls.' },
    { q: 'What are Special Interest Groups?', a: 'Special interest groups are people or organizations important for any organization\'s ISMS. They focus on specific issues related to information security and generally provide free information. Common agencies include CERT-IN, OWASP, and National Cybercrime Reporting Portal.' },
    { q: 'How to become a ISO 27001 Lead Auditor?', a: 'Get at least 4 years of experience in Information Security, obtain an Internal Auditor certificate for ISO 27001, apply for Lead Auditor course, get exposure to ISMS audits as an observer, then apply with a 3rd party certification body such as Eurocert.' }
  ]

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/m5.png" className="w-full h-full object-cover opacity-30" alt="ISO 27001 Information Security" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Information security management system</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            ISO 27001 — Information Security
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Systematic approach to managing sensitive company information securely.
          </p>
        </div>
      </section>

      {/* Intro + What Is - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Standard Overview</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  What is <span className="text-euro-600">ISO 27001</span> Certificate?
              </h2>
            </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                ISO 27001 ensures that a certified organization's information security is under explicit management control. The standard is based on «Plan-Do-Check-Act». It can be implemented by all types of organizations irrespective of their size and activity.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-shield-alt text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Benefits of Implementing ISO 27001</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  By implementing ISO 27001, organizations can identify risks and put controls in place to manage or reduce them. It is helpful in gaining customer trust. Customers feel safe about protection of their data.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  It helps demonstrate to the public the organization's continuous commitment to excellence. The third party inspection process by Certification body is required to get ISO 27001 certificate — a necessary step that helps find further gaps that may have been missed.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/m5.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="ISO 27001 Information Security" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Steps - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Step by Step</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                How to Implement <span className="text-euro-600">ISMS</span> in Your Organization
            </h2>
              <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">Following is a generic process for implementing a ISO 27001 based ISMS</p>
            </div>
            <div className="space-y-4">
              {implementationSteps.map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-euro-600 flex items-center justify-center shrink-0 group-hover:bg-eurogold-400 transition-colors duration-300">
                    <span className="heading-font text-white font-bold text-sm">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
                </div>
              ))}
              </div>
          </div>
        </div>
      </section>

      {/* Certification Process - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Certification Journey</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                ISO 27001 <span className="text-euro-600">Certification Process</span>
              </h2>
              <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">ISO 27001 Certification is provided by Eurocert — a Certification Body accredited by ESYD, a European accreditation board.</p>
            </div>
            <div className="space-y-4">
              {certificationSteps.map((item, i) => (
                <div key={i} className="flex gap-5 p-5 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-euro-600 flex items-center justify-center shrink-0 group-hover:bg-eurogold-400 transition-colors duration-300">
                    <span className="heading-font text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="heading-font text-[12px] font-bold uppercase tracking-widest text-slate-900 mb-1.5">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Standards + Required Documents + Validity - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Related Standards */}
            <div className="p-7 rounded-2xl border border-slate-100 bg-white">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                  <i className="fas fa-layer-group text-white text-sm"></i>
                </div>
                <h3 className="heading-font text-sm font-bold text-slate-900 tracking-tight uppercase">ISO 27001 Related Standards</h3>
              </div>
              <ul className="space-y-2.5">
                {relatedStandards.map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-500 text-xs leading-relaxed">
                    <i className="fas fa-chevron-right text-euro-600 text-[8px] mt-1 shrink-0"></i>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Required Documents */}
            <div className="p-7 rounded-2xl border border-euro-100 bg-euro-50/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-euro-600 flex items-center justify-center">
                  <i className="fas fa-file-alt text-white text-sm"></i>
                </div>
                <h3 className="heading-font text-sm font-bold text-slate-900 tracking-tight uppercase">Required Documents</h3>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">In a certification audit, auditor will at least check the following:</p>
              <ul className="space-y-3">
                {['License of the Company and accompanying documents', 'Other permits required', 'Organizational Structure / Chart', 'Objectives', 'Procedures', 'Instructions for External Documents (eg Legislation)'].map((doc, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm">
                    <div className="w-5 h-5 rounded-md bg-euro-600/10 flex items-center justify-center shrink-0 mt-0.5">
                      <i className="fas fa-check text-euro-600 text-[8px]"></i>
                    </div>
                    {doc}
                  </li>
                ))}
              </ul>
          </div>

            {/* Certificate Validity */}
            <div className="p-7 rounded-2xl border border-eurogold-400/20 bg-eurogold-400/5">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-eurogold-400 flex items-center justify-center">
                  <i className="fas fa-certificate text-[#030a16] text-sm"></i>
                </div>
                <h3 className="heading-font text-sm font-bold text-slate-900 tracking-tight uppercase">Certificate Validity</h3>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                After a successful certification audit, ISO 27001 certificate is issued.
              </p>
              <div className="p-5 rounded-xl bg-white border border-eurogold-400/15 text-center mb-4">
                <span className="heading-font text-eurogold-500 font-bold text-4xl block mb-1">3 Years</span>
                <span className="text-slate-400 text-xs heading-font font-bold uppercase tracking-widest">Certificate Validity Period</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                During this time <strong className="text-slate-700">two annual surveillance audits</strong> must take place to maintain the certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ISO 27001 is Important - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Key Advantages</h4>
              <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
                Why ISO 27001 Certification is Important?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {importanceBenefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-eurogold-400/10 flex items-center justify-center shrink-0">
                      <i className="fas fa-check text-eurogold-400 text-[10px]"></i>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Security Controls - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">ISO 27002 Controls</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Information Security <span className="text-euro-600">Controls</span>
          </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">Information security controls are actions to increase security of assets. IS controls can be chosen from the lists in ISO 27002 standard.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {isControls.map((c, i) => (
              <div key={i} className="p-5 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-3 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${c.icon} text-base`}></i>
        </div>
                <h4 className="heading-font text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-1.5">{c.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{c.desc}</p>
              </div>
          ))}
          </div>
        </div>
      </section>

      {/* Cost of Certification - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Investment</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Cost of Getting <span className="text-euro-600">ISO 27001</span> Certificate
                </h2>
              <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">There are four types of cost heads in getting ISO 27001 certificate</p>
                    </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {costHeads.map((c, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group text-center">
                  <div className="w-14 h-14 rounded-xl bg-euro-600 flex items-center justify-center text-white mb-4 mx-auto group-hover:bg-eurogold-400 group-hover:text-[#030a16] transition-all duration-300">
                    <i className={`fas ${c.icon} text-xl`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{c.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
                    </div>
              ))}
                    </div>
                  </div>
                </div>
      </section>

      {/* FAQs - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Have Questions?</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Frequently Asked <span className="text-euro-600">Questions</span>
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-slate-100 bg-[#f8fafc] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center shrink-0">
                        <i className="fas fa-question text-white text-xs"></i>
                      </div>
                      <h4 className="heading-font text-[12px] font-bold uppercase tracking-widest text-slate-900">{faq.q}</h4>
                    </div>
                    <i className={`fas fa-chevron-down text-euro-600 text-xs transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}></i>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-slate-500 text-sm leading-relaxed pl-11">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services - Soft BG */}
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
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Quick Inquiry</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our information security experts are ready to guide your organization through ISO 27001 certification.</p>
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
