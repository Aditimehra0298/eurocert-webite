import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const keyStandards = [
  { icon: 'fa-handshake', title: 'Code of Practices (COP)', desc: 'Focuses on ethical business practices, ensuring jewelry businesses follow fair labor practices, offer safe working conditions, and avoid child or forced labor.' },
  { icon: 'fa-link', title: 'Chain of Custody (CoC)', desc: 'Ensures all materials used in jewelry — gold, diamonds, gemstones — come from ethical, legal, and conflict-free sources. Tracks materials from the mine or supplier to the final product.' },
  { icon: 'fa-flask', title: 'Laboratory Grown Materials (LGMS)', desc: 'Applies to businesses using laboratory-grown materials such as lab-grown diamonds or synthetic gemstones, ensuring they are created in an environmentally friendly way.' }
]

const whoCanCertify = [
  { icon: 'fa-ring', title: 'Jewelry Manufacturers', desc: 'Those who make jewelry — whether rings, necklaces, or other accessories.' },
  { icon: 'fa-store', title: 'Retailers & Wholesalers', desc: 'If you sell jewelry, either in bulk or directly to customers.' },
  { icon: 'fa-mountain', title: 'Miners & Refiners', desc: 'Those who extract or refine precious metals like gold, silver, or diamonds.' },
  { icon: 'fa-truck', title: 'Suppliers & Service Providers', desc: 'If you provide services related to the jewelry industry such as packaging, transportation, etc.' }
]

const whyCertify = [
  { icon: 'fa-certificate', title: 'Show Your Commitment', desc: 'RJC accreditation improves your standing with stakeholders and customers by offering concrete evidence of your dedication to moral and sustainable business practices.' },
  { icon: 'fa-chart-line', title: 'Get a Competitive Edge', desc: 'Being certified gives you a clear advantage in the market by opening doors to new markets and clients who value sustainability and ethical sourcing.' },
  { icon: 'fa-heart', title: 'Encourage Loyalty & Trust', desc: 'Consumers are looking for brands that share their values more and more. Certification fosters loyalty and trust, resulting in stronger customer relationships.' }
]

const whyEurocert = [
  { icon: 'fa-user-tie', title: 'Certification Expertise', desc: 'With a wealth of RJC auditing experience, our team offers in-depth industry knowledge and customized assistance to help you through the certification process.' },
  { icon: 'fa-hands-helping', title: 'Complete Support', desc: 'From the first tests to ongoing compliance, we provide end-to-end support to make sure your path to certification is smooth and successful.' },
  { icon: 'fa-arrow-up', title: 'Continuous Improvement', desc: 'Eurocert is committed to helping you identify opportunities for expansion, operational effectiveness, and sustainability beyond compliance.' },
  { icon: 'fa-globe', title: 'Global Reach', desc: 'With a presence in multiple countries, our auditors understand local regulations and cultural nuances, providing relevant insights and recommendations.' }
]

const applicationSteps = [
  { num: '01', title: 'Certification Scope', desc: 'Clearly outline the scope of your certification, including contact details and addresses of all facilities involved.' },
  { num: '02', title: 'Workforce Information', desc: 'Indicate the number of employees and contractors at each facility relevant to the Code of Practices (COP).' },
  { num: '03', title: 'Related Parties', desc: 'List any contractors, business partners, or affiliated companies associated with your operations.' },
  { num: '04', title: 'Existing Certifications', desc: 'Detail any certifications you currently hold from other recognized frameworks.' },
  { num: '05', title: 'Future Changes', desc: 'Note any anticipated changes to your certification scope, such as expansions, acquisitions, or divestments.' },
  { num: '06', title: 'Self-Assessed Non-Conformances', desc: 'Identify any self-assessed non-conformances and outline the actions you are taking to address them.' }
]

const relatedServices = [
  { title: 'RMI', subtitle: 'Responsible Minerals', image: '/b8.png', link: '/social-audits/rmi' },
  { title: 'SA 8000', subtitle: 'Social Accountability', image: '/b1.png', link: '/social-audits/sa-8000' },
  { title: 'ISO 37001', subtitle: 'Anti-Bribery', image: '/b12.png', link: '/social-audits/iso-37001' }
]

export default function RJC() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/b7.png" className="w-full h-full object-cover opacity-30" alt="RJC Responsible Jewellery Council" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Ethical Sourcing, Transparency & Environmental Responsibility</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            RJC — <span className="text-eurogold-400">Responsible Jewellery Council</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Promoting moral and environmentally friendly jewelry industry practices — ensuring businesses meet high standards for ethical sourcing, transparency, and environmental responsibility
          </p>
        </div>
      </section>

      {/* What is RJC - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">About Eurocert & RJC</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  What is the <span className="text-euro-600">Responsible Jewellery Council?</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Promoting moral and environmentally friendly jewelry industry practices is our mission at Eurocert. We provide professional advice and assistance to companies dedicated to operational excellence and responsible sourcing as an authorized certifying body for the Responsible Jewellery Council (RJC). Our goal is to assist you in becoming certified by RJC and improving your supply chain.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                <strong className="text-slate-700">RJC (Responsible Jewellery Council)</strong> is an organization that ensures jewelry businesses meet high standards for ethical sourcing, transparency, and environmental responsibility. If a jewelry business is RJC certified, it means they are following global best practices in sourcing materials and manufacturing their products in a responsible way.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-gem text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Authorized Certifying Body</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Eurocert is an authorized certifying body for RJC. Our experienced auditors provide end-to-end support from initial assessment through ongoing compliance, helping you achieve and maintain RJC certification.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/b7.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="RJC Responsible Jewellery Council" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Standards - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Certification Standards</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Key Standards for <span className="text-euro-600">RJC Certification</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {keyStandards.map((s, i) => (
                <div key={i} className="p-7 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${s.icon} text-lg`}></i>
                  </div>
                  <h4 className="heading-font text-[12px] font-bold uppercase tracking-widest text-slate-900 mb-3">{s.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Get Certified - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Eligibility</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Who Can Get <span className="text-euro-600">RJC Certified?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whoCanCertify.map((w, i) => (
                <div key={i} className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group text-center">
                  <div className="w-12 h-12 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 mx-auto group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${w.icon} text-lg`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{w.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Opt for RJC - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Certification Value</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Why Opt for <span className="text-euro-600">RJC Certification?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {whyCertify.map((w, i) => (
                <div key={i} className="p-7 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${w.icon} text-lg`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-3">{w.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Certification Process</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  How to Request <span className="text-eurogold-400">RJC Certification</span>
                </h3>
              </div>

              {/* Process Steps */}
              <div className="space-y-5 mb-8">
                <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center shrink-0">
                      <span className="heading-font text-eurogold-400 font-bold text-sm">01</span>
                    </div>
                    <div>
                      <h4 className="heading-font text-white font-bold text-[11px] uppercase tracking-widest mb-2">Contact Eurocert</h4>
                      <p className="text-white/50 text-sm leading-relaxed">Contact us directly to access the necessary application form and complete your registration through the Eurocert Company Registration portal.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center shrink-0">
                      <span className="heading-font text-eurogold-400 font-bold text-sm">02</span>
                    </div>
                    <div>
                      <h4 className="heading-font text-white font-bold text-[11px] uppercase tracking-widest mb-2">Complete the Application Form</h4>
                      <p className="text-white/50 text-sm leading-relaxed mb-3">Fill out the Eurocert Application Form ensuring comprehensive information including:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {applicationSteps.map((a, i) => (
                          <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-white/2">
                            <span className="heading-font text-eurogold-400 font-bold text-xs mt-0.5">{a.num}</span>
                            <div>
                              <span className="text-white/60 text-xs font-bold block mb-0.5">{a.title}</span>
                              <span className="text-white/40 text-xs leading-relaxed">{a.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center shrink-0">
                      <span className="heading-font text-eurogold-400 font-bold text-sm">03</span>
                    </div>
                    <div>
                      <h4 className="heading-font text-white font-bold text-[11px] uppercase tracking-widest mb-2">Review by Eurocert</h4>
                      <p className="text-white/50 text-sm leading-relaxed">The application form will be reviewed by the B.O. Administrator or the Scheme Manager, who will check the validity of Eurocert&apos;s RJC approval for your sector and country, as well as the availability of RJC-approved auditors in your region.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center shrink-0">
                      <span className="heading-font text-eurogold-400 font-bold text-sm">04</span>
                    </div>
                    <div>
                      <h4 className="heading-font text-white font-bold text-[11px] uppercase tracking-widest mb-2">Preliminary Investigation</h4>
                      <p className="text-white/50 text-sm leading-relaxed">Eurocert conducts a preliminary investigation of your employment site using information from web research and other methods, which will be documented in the KYC form.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Frequently Asked Questions</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                RJC Certification <span className="text-euro-600">FAQs</span>
              </h2>
            </div>
            <div className="space-y-5">
              <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-question text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">What is the RJC Certification Process?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The RJC certification process involves several key steps, including an application, a self-assessment, an audit, and continuous compliance. At Eurocert, we guide you through each stage to ensure a smooth experience.
                </p>
              </div>
              <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-money-bill-wave text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">How Much Does RJC Certification Cost?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Costs can vary based on factors like the size of your organization, the complexity of your operations, and the scope of certification. After reviewing your application, we will provide a detailed quotation tailored to your specific needs.
                </p>
              </div>
              <div className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-clipboard-check text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">What Are the Ongoing Obligations After Certification?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Once certified, companies must maintain compliance with RJC standards, undergo regular audits, and report any significant changes in operations that may affect their certification status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with Eurocert - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Authorized Certifying Body</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Why Partner with <span className="text-euro-600">Eurocert?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {whyEurocert.map((w, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group text-center">
                  <div className="w-12 h-12 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 mx-auto group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${w.icon} text-lg`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{w.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-5 mt-8 rounded-xl border border-euro-100 bg-euro-50/40 text-center">
              <p className="text-slate-500 text-sm leading-relaxed">
                <span className="text-euro-600 font-bold">We are offering above services on behalf of Eurocert S.A</span> — a Pan-European Certification body operating from Athens with global reach across 14+ countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-14 lg:py-18 bg-white">
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
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Start Your RJC Certification</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Strengthen your brand&apos;s dedication to sustainability. Contact Eurocert to find out how we can help you reach your certification objectives.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20">
                  Get Started <i className="fas fa-arrow-right text-[9px]"></i>
                </Link>
                <a href="tel:+917009007526" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white border border-white/15 rounded-full px-8 py-3.5 hover:bg-white/5 transition-all">
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
