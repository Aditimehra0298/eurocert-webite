import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const services = [
  { icon: 'fa-globe-europe', title: 'Comprehensive GHG Inventory', description: 'Complete assessment of all direct and indirect greenhouse gas emissions across your organization\'s operations, facilities, and value chain activities.' },
  { icon: 'fa-chart-bar', title: 'Scope 1, 2 & 3 Emissions', description: 'Detailed analysis of direct emissions (Scope 1), indirect emissions from purchased energy (Scope 2), and other indirect emissions from your entire value chain (Scope 3).' },
  { icon: 'fa-box-open', title: 'Product Carbon Footprint', description: 'Life cycle assessment of individual products or services to determine their total carbon impact from raw materials through manufacturing, use, and end-of-life disposal.' },
  { icon: 'fa-building', title: 'Organizational Carbon Footprint', description: 'Company-wide assessment covering all facilities, operations, and activities to provide a complete picture of your organization\'s greenhouse gas emissions profile.' },
  { icon: 'fa-chart-line', title: 'Emission Reduction Strategies', description: 'Development of customized, data-driven action plans to reduce your carbon footprint with prioritized initiatives, timelines, and measurable reduction targets.' },
  { icon: 'fa-shield-alt', title: 'ISO 14064 Compliance', description: 'Assessment conducted in accordance with ISO 14064 standards for GHG quantification and reporting, ensuring internationally recognized and credible results.' },
  { icon: 'fa-check-circle', title: 'Verification & Validation', description: 'Third-party verification of your carbon footprint data for credibility and transparency, ensuring stakeholder confidence in your environmental reporting.' },
  { icon: 'fa-sync-alt', title: 'Carbon Offsetting Guidance', description: 'Expert advice on carbon offset programs, renewable energy certificates, and other mechanisms to achieve carbon neutrality and meet your net-zero commitments.' }
]

const methodologies = [
  { title: 'ISO 14064-1', desc: 'Specification for organization-level GHG inventories' },
  { title: 'GHG Protocol', desc: 'Corporate Standard for GHG accounting and reporting' },
  { title: 'ISO 14067', desc: 'Carbon footprint of products' },
  { title: 'PAS 2050', desc: 'Specification for product carbon footprint assessment' },
  { title: 'Industry Guidelines', desc: 'Industry-specific guidelines and best practices' }
]

const benefits = [
  { icon: 'fa-gavel', title: 'Regulatory Compliance', desc: 'Meet mandatory reporting requirements and stay ahead of evolving environmental regulations.' },
  { icon: 'fa-piggy-bank', title: 'Cost Reduction', desc: 'Identify energy inefficiencies and opportunities to reduce operational costs through emission reduction.' },
  { icon: 'fa-award', title: 'Brand Reputation', desc: 'Demonstrate your commitment to environmental responsibility to customers, investors, and stakeholders.' },
  { icon: 'fa-trophy', title: 'Competitive Advantage', desc: 'Access new markets and customers who prioritize sustainable business practices.' },
  { icon: 'fa-shield-alt', title: 'Risk Management', desc: 'Understand and mitigate climate-related risks to your business operations and supply chain.' },
  { icon: 'fa-users', title: 'Stakeholder Engagement', desc: 'Transparent reporting builds trust with customers, employees, and investors.' },
  { icon: 'fa-bullseye', title: 'Strategic Planning', desc: 'Data-driven insights for long-term sustainability planning and goal setting.' }
]

const relatedCertifications = [
  { title: 'ISO 14064', subtitle: 'GHG Quantification & Verification', image: '/s2.png', link: '/management-system/iso-14064' },
  { title: 'Sustainability Certifications', subtitle: 'Environmental Certifications', image: '/s3.png', link: '/sustainability/certifications' },
  { title: 'ISO 14001', subtitle: 'Environmental Management', image: '/m3.png', link: '/management-system/iso-14001' }
]

export default function CarbonFootprint() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/s2.png" className="w-full h-full object-cover opacity-30" alt="Carbon Footprint Assessment" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Measure, manage, and reduce your organization's environmental impact</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Carbon Footprint <span className="text-eurogold-400">Assessment</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            GHG Emissions Measurement & Reduction
          </p>
        </div>
      </section>

      {/* Intro + What Is - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Service Overview</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  Carbon Footprint <span className="text-euro-600">Assessment</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                At Eurocert Asia, we provide comprehensive carbon footprint assessment services to help organizations measure, understand, and reduce their greenhouse gas (GHG) emissions. Our expert team uses internationally recognized methodologies to calculate your carbon footprint accurately and develop actionable strategies for emission reduction.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-leaf text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">What is Carbon Footprint?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  A carbon footprint is the total amount of greenhouse gases (including carbon dioxide, methane, nitrous oxide, and others) produced directly and indirectly by an individual, organization, event, or product. Measuring your carbon footprint is the first critical step toward understanding your environmental impact and implementing effective sustainability strategies.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/s2.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Carbon Footprint Assessment" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Services</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Our Assessment <span className="text-euro-600">Services</span>
            </h2>
            <p className="text-slate-500 mt-2 text-sm">Comprehensive Carbon Footprint Solutions</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${s.icon} text-base`}></i>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Standards & Frameworks</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Our <span className="text-euro-600">Methodology</span>
            </h2>
            <p className="text-slate-500 mt-2 text-sm">Internationally recognized standards and frameworks</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {methodologies.map((item, index) => (
              <div key={index} className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group text-center relative overflow-hidden">
                <span className="text-5xl heading-font font-bold text-euro-100 absolute -top-1 left-1/2 -translate-x-1/2 group-hover:text-euro-200 transition">{String(index + 1).padStart(2, '0')}</span>
                <div className="relative z-10 pt-6">
                  <h4 className="text-euro-600 heading-font font-bold uppercase text-sm mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Why Assess</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                Benefits of Carbon Footprint <span className="text-eurogold-400">Assessment</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {benefits.map((b, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-eurogold-400/20 transition-all duration-300 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-eurogold-400/10 flex items-center justify-center shrink-0">
                    <i className={`fas ${b.icon} text-eurogold-400 text-base`}></i>
                  </div>
                  <div>
                    <h4 className="heading-font text-white font-bold text-sm uppercase tracking-widest mb-2">{b.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Certifications - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Explore More</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Related Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {relatedCertifications.map((s, i) => (
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
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Start Your Carbon Footprint Assessment</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our environmental experts are ready to help you measure, manage, and reduce your organization's carbon footprint.</p>
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
