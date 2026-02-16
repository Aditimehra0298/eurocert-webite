import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const principles = [
  { num: '01', icon: 'fa-gavel', title: 'Adherence to Legal Requirements', desc: 'Adherence to Legal Requirements and Workplace Regulations' },
  { num: '02', icon: 'fa-lock-open', title: 'Elimination of Forced Labor', desc: 'Elimination of Forced Labor' },
  { num: '03', icon: 'fa-child', title: 'Prevention of Child Labor', desc: 'Prevention of Child Labor' },
  { num: '04', icon: 'fa-hand-paper', title: 'Prevention of Harassment', desc: 'Prevention of Harassment and Abuse' },
  { num: '05', icon: 'fa-coins', title: 'Fair Compensation', desc: 'Fair Compensation and Benefits' },
  { num: '06', icon: 'fa-clock', title: 'Reasonable Working Hours', desc: 'Reasonable Working Hours' },
  { num: '07', icon: 'fa-ban', title: 'Eradication of Discrimination', desc: 'Eradication of Discrimination' },
  { num: '08', icon: 'fa-hard-hat', title: 'Health and Safety', desc: 'Ensuring Health and Safety' },
  { num: '09', icon: 'fa-users', title: 'Freedom of Association', desc: 'Upholding Freedom of Association and Collective Bargaining' },
  { num: '10', icon: 'fa-leaf', title: 'Environmental Responsibility', desc: 'Environmental Responsibility' },
  { num: '11', icon: 'fa-box', title: 'Customs Compliance', desc: 'Compliance with Customs Regulations' },
  { num: '12', icon: 'fa-shield-alt', title: 'Ensuring Security', desc: 'Ensuring Security' }
]

const advantages = [
  { icon: 'fa-award', title: 'Globally Recognized', desc: 'The WRAP certificate is a globally recognized emblem of your pledge to uphold social and ethical standards.' },
  { icon: 'fa-handshake', title: 'Buyer Confidence', desc: 'A powerful statement to potential buyers, signifying your unwavering dedication to ethical and responsible business practices.' },
  { icon: 'fa-balance-scale', title: 'Legal Compliance', desc: 'Underlines your commitment to complying with your country\'s laws and treating employees with dignity and respect.' },
  { icon: 'fa-leaf', title: 'Environmental Awareness', desc: 'Demonstrates a keen awareness of your operation\'s environmental impact and responsible stewardship.' },
  { icon: 'fa-chart-line', title: 'Competitive Edge', desc: 'Provides a competitive edge in a global marketplace that increasingly values responsible production.' },
  { icon: 'fa-globe-europe', title: 'Fair Labor Practices', desc: 'Showcases your commitment to fair labor practices, legal adherence, and responsible environmental stewardship.' }
]

const related = [
  { title: 'SA 8000', subtitle: 'Social Accountability', image: '/b1.png', link: '/social-audits/sa-8000' },
  { title: 'SEDEX / SMETA', subtitle: 'Ethical Trade Audits', image: '/b2.png', link: '/social-audits/sedex' },
  { title: 'Code of Conduct', subtitle: 'Brand & Retailer Audits', image: '/b3.png', link: '/social-audits/code-of-conduct' }
]

export default function WRAP() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/b4.png" className="w-full h-full object-cover opacity-30" alt="WRAP Certification" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Lawful, Ethical & Secure Manufacturing Worldwide</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            WRAP <span className="text-eurogold-400">Certification</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Worldwide Responsible Accredited Production — The world's largest independent certification program focused on apparel, footwear & sewn products
          </p>
        </div>
      </section>

      {/* Intro + What Is - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Certification Overview</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Eurocert's <span className="text-euro-600">WRAP Certification</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Eurocert's WRAP certification is a non-profit, independent organization committed to advancing the cause of lawful, ethical, and secure manufacturing worldwide through the certification of social compliance. Focusing on apparel, sewn products, and footwear, Eurocert's WRAP certification is an essential tool to confirm your commitment to responsible manufacturing.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Eurocert takes a collaborative approach to social compliance certification, ensuring that your facility adheres to the 12 Principles that form the foundation of WRAP certification.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-globe text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">International Standards Alignment</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Eurocert's adherence to the WRAP 12 Principles aligns with widely recognized international workplace norms, local legal requirements, and workplace regulations. These principles also encompass the principles and language of significant agreements from respected entities such as the International Labor Organization (ILO), the United Nations Guiding Principles on Business and Human Rights, and the Organization for Economic Cooperation and Development (OECD)'s Guidelines for Multinational Enterprises.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/b4.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="WRAP Certification" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 Principles - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Core Framework</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              The <span className="text-euro-600">12 Principles</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">Your active participation in the certification process is crucial, and it is imperative to uphold robust management systems to consistently meet compliance requirements.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {principles.map((p, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <span className="absolute -top-1 -right-1 heading-font text-4xl font-bold text-euro-50 group-hover:text-euro-100 transition">{p.num}</span>
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                    <i className={`fas ${p.icon} text-base`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{p.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The WRAP Advantage - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Why WRAP Matters</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              The WRAP <span className="text-euro-600">Advantage</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-3xl mx-auto leading-relaxed">
              Earning a Eurocert WRAP certification is a powerful statement to potential buyers, signifying your unwavering dedication to ethical and responsible business practices. This certification underlines your commitment to complying with your country's laws, treating your employees with dignity and respect, and demonstrating a keen awareness of your operation's environmental impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {advantages.map((a, i) => (
              <div key={i} className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group text-center">
                <div className="w-12 h-12 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 mx-auto group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${a.icon} text-lg`}></i>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{a.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">How It Works</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Certification <span className="text-euro-600">Process</span>
              </h2>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                WRAP is the world's largest independent certification program focused on the apparel, footwear, and sewn products sectors.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                Eurocert stands as the preeminent independent certification program globally, with a special emphasis on the apparel, footwear, and sewn products industries. Achieving WRAP certification transcends the mere completion of an audit; it is an interactive process underpinned by collaboration.
              </p>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Eurocert partners with certified facilities to ensure their sustained alignment with our 12 Principles. This collaborative approach necessitates active involvement from all facilities, making it imperative for them to uphold robust management systems to consistently fulfill compliance obligations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Eurocert - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Trusted Certification Partner</h4>
                <h3 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Why Choose Eurocert for <span className="text-eurogold-400">WRAP Audits?</span>
                </h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-certificate text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">Why Choose Eurocert</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    Choosing Eurocert for your WRAP audits is a decision grounded in trust, expertise, and excellence. Our track record of being a global authority in certification and compliance speaks for itself.
                  </p>
                  <p className="text-white/45 text-sm leading-relaxed">
                    When you opt for Eurocert, you're choosing a partner with a deep commitment to ethical and responsible manufacturing practices, as reflected in the rigorous WRAP certification process.
                  </p>
                </div>
                <div className="p-8 rounded-2xl border border-white/5 bg-white/2">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-user-tie text-eurogold-400 text-sm"></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest">Expert Auditors</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Our team of auditors comprises seasoned professionals who possess a profound understanding of the apparel and manufacturing industry. They conduct thorough, on-the-ground assessments to ensure that your facility not only complies with WRAP's 12 Principles but also upholds the highest standards of social responsibility and ethical conduct.
                  </p>
                </div>
              </div>

              {/* Why Eurocert Asia */}
              <div className="mt-8 p-8 rounded-2xl border border-eurogold-400/20 bg-eurogold-400/5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                    <i className="fas fa-globe-asia text-eurogold-400 text-sm"></i>
                  </div>
                  <h4 className="heading-font text-eurogold-400 font-bold text-sm uppercase tracking-widest">Why Eurocert Asia?</h4>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  When it comes to choosing a certification partner for your WRAP certification, Eurocert stands out as the clear choice. Our commitment to excellence and integrity is unmatched, and we bring a wealth of expertise to the table. With a global reputation for quality and a vast network of offices and laboratories, Eurocert ensures that the certification process is not just a box to tick, but a transformative journey for your business.
                </p>
                <p className="text-white/45 text-sm leading-relaxed">
                  What sets Eurocert apart is our dedication to going beyond the basics. Our team of experienced auditors takes a hands-on approach, providing you with an in-depth, on-the-ground perspective of your facility's operations. We don't just certify; we guide and support you in achieving and maintaining the highest standards of social compliance.
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

      {/* Related Services - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Explore More</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Related Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {related.map((s, i) => (
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
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Start Your WRAP Journey</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our WRAP certification experts are ready to guide your facility toward ethical and responsible manufacturing compliance.</p>
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
