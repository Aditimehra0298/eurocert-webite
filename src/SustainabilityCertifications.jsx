import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const services = [
  { icon: 'fa-leaf', title: 'ISO 14001 Environmental Management', description: 'Certification for organizations seeking to manage their environmental responsibilities systematically, comply with regulations, and improve environmental performance continuously.' },
  { icon: 'fa-bolt', title: 'ISO 50001 Energy Management', description: 'Certification for organizations committed to improving energy performance and reducing energy consumption through a systematic energy management framework.' },
  { icon: 'fa-truck', title: 'Sustainable Supply Chain', description: 'Verification of sustainable practices throughout your supply chain including ethical sourcing, environmental impact reduction, and social responsibility standards.' },
  { icon: 'fa-solar-panel', title: 'Renewable Energy Certifications', description: 'Certification for organizations using or producing renewable energy sources such as solar, wind, hydroelectric, or biomass, demonstrating commitment to clean energy transition.' },
  { icon: 'fa-recycle', title: 'Waste Management Certifications', description: 'Certification for effective waste reduction, recycling, composting, and waste-to-energy programs, minimizing the environmental impact of waste disposal.' },
  { icon: 'fa-water', title: 'Water Management Certifications', description: 'Certification for water conservation programs, water quality management, and sustainable water use practices, ensuring responsible water resource management.' },
  { icon: 'fa-sync-alt', title: 'Circular Economy Certifications', description: 'Certification for organizations implementing circular economy principles, including product lifecycle management, material recovery, and resource optimization.' },
  { icon: 'fa-building', title: 'Green Building Certifications', description: 'Support for LEED, BREEAM, and other green building standards, helping organizations achieve sustainable building design, construction, and operation.' },
  { icon: 'fa-tag', title: 'Eco-Label Certifications', description: 'Product and service certifications for environmental performance, helping consumers and businesses identify environmentally preferable products.' },
  { icon: 'fa-chart-bar', title: 'Sustainability Reporting', description: 'Assistance with GRI, CDP, and other sustainability reporting frameworks, helping organizations communicate their environmental performance to stakeholders.' }
]

const keyCerts = [
  { title: 'ISO 14001', subtitle: 'Environmental Management System', desc: 'ISO 14001 helps organizations establish an effective environmental management system to manage environmental responsibilities, comply with regulations, and improve environmental performance continuously.' },
  { title: 'ISO 50001', subtitle: 'Energy Management System', desc: 'ISO 50001 provides a framework for organizations to develop and implement an energy management system, helping them reduce energy consumption, lower costs, and decrease greenhouse gas emissions.' },
  { title: 'Sustainable Supply Chain', subtitle: 'Supply Chain Certification', desc: 'This certification verifies that your supply chain operations meet sustainability criteria including ethical sourcing, environmental impact reduction, and social responsibility standards.' },
  { title: 'Renewable Energy', subtitle: 'Clean Energy Certifications', desc: 'Certification for organizations using renewable energy sources such as solar, wind, hydroelectric, or biomass, demonstrating commitment to clean energy transition.' },
  { title: 'Waste Management', subtitle: 'Waste Reduction Certifications', desc: 'Certification for organizations implementing effective waste reduction, recycling, composting, and waste-to-energy programs, minimizing environmental impact of waste disposal.' },
  { title: 'Water Management', subtitle: 'Water Conservation Certifications', desc: 'Certification for water conservation programs, water quality management, and sustainable water use practices, ensuring responsible water resource management.' }
]

const certProcess = [
  { step: '01', title: 'Initial Assessment', desc: 'Comprehensive review of your current environmental practices and identification of certification opportunities' },
  { step: '02', title: 'Gap Analysis', desc: 'Detailed analysis of gaps between current practices and certification requirements' },
  { step: '03', title: 'System Development', desc: 'Development and implementation of management systems and processes required for certification' },
  { step: '04', title: 'Training & Capacity Building', desc: 'Training programs for your team on sustainability standards and best practices' },
  { step: '05', title: 'Documentation Support', desc: 'Assistance with developing required documentation and records' },
  { step: '06', title: 'Certification Audit', desc: 'Independent third-party audit to verify compliance with certification requirements' },
  { step: '07', title: 'Certification Issuance', desc: 'Issuance of certification upon successful completion of audit' },
  { step: '08', title: 'Surveillance & Maintenance', desc: 'Ongoing support through surveillance audits and continuous improvement guidance' }
]

const benefits = [
  { icon: 'fa-gavel', title: 'Regulatory Compliance', desc: 'Meet and exceed environmental regulations and mandatory reporting requirements.' },
  { icon: 'fa-coins', title: 'Cost Reduction', desc: 'Identify opportunities to reduce energy, water, and material consumption, lowering operational costs.' },
  { icon: 'fa-trophy', title: 'Brand Reputation', desc: 'Enhance your brand image and demonstrate commitment to environmental responsibility.' },
  { icon: 'fa-globe-europe', title: 'Market Access', desc: 'Access new markets and customers who prioritize sustainable products and services.' },
  { icon: 'fa-shield-alt', title: 'Risk Management', desc: 'Identify and mitigate environmental risks to your business operations.' },
  { icon: 'fa-handshake', title: 'Stakeholder Confidence', desc: 'Build trust with customers, investors, employees, and regulatory bodies.' },
  { icon: 'fa-chart-line', title: 'Competitive Advantage', desc: 'Differentiate your organization in the marketplace through verified environmental performance.' },
  { icon: 'fa-cogs', title: 'Operational Efficiency', desc: 'Improve resource efficiency and reduce waste through systematic management approaches.' },
  { icon: 'fa-piggy-bank', title: 'Investor Appeal', desc: 'Attract socially responsible investors and access green financing options.' },
  { icon: 'fa-users', title: 'Employee Engagement', desc: 'Attract and retain employees who value environmental responsibility.' }
]

const relatedServices = [
  { title: 'ISO 14064', subtitle: 'GHG Quantification & Verification', image: '/s3.png', link: '/management-system/iso-14064' },
  { title: 'Carbon Footprint', subtitle: 'GHG Assessment Services', image: '/s2.png', link: '/sustainability/carbon-footprint' },
  { title: 'ISO 14001', subtitle: 'Environmental Management', image: '/m3.png', link: '/management-system/iso-14001' }
]

export default function SustainabilityCertifications() {
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
          <img src="/s3.png" className="w-full h-full object-cover opacity-30" alt="Sustainability Certifications" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Comprehensive environmental certifications for sustainable business practices</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Sustainability <span className="text-eurogold-400">Certifications</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Environmental Responsibility & Sustainable Practices
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
                  Sustainability <span className="text-euro-600">Certifications</span>
              </h2>
            </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
              At Eurocert Asia, we provide comprehensive sustainability certification services to help organizations demonstrate their commitment to environmental responsibility and sustainable business practices. Our certifications cover a wide range of environmental aspects including resource management, waste reduction, renewable energy, and sustainable supply chains.
            </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-leaf text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">What are Sustainability Certifications?</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                Sustainability certifications are third-party verified credentials that demonstrate an organization's commitment to environmental stewardship, resource efficiency, and sustainable operations. These certifications help businesses reduce their environmental impact, improve operational efficiency, meet regulatory requirements, and enhance their reputation among stakeholders who value environmental responsibility.
              </p>
            </div>
          </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[400px] group">
              <img src="/h4.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Sustainability Certifications" />
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
              Our Certification <span className="text-euro-600">Services</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">Comprehensive Sustainability Solutions</p>
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

      {/* Key Certifications - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Core Certifications</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Key <span className="text-euro-600">Certifications</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">Core sustainability certifications we offer</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {keyCerts.map((cert, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <span className="absolute -top-2 -right-2 heading-font text-5xl font-bold text-euro-100 group-hover:text-euro-200 transition">{String(i + 1).padStart(2, '0')}</span>
                <div className="relative z-10">
                  <h4 className="heading-font text-[11px] font-bold text-euro-600 uppercase tracking-widest mb-1">{cert.title}</h4>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-3">{cert.subtitle}</span>
                  <p className="text-slate-500 text-sm leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process - Soft BG */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Approach</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Certification <span className="text-euro-600">Process</span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">Thorough, efficient, and supportive approach</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {certProcess.map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <span className="heading-font text-2xl font-bold text-euro-400 group-hover:text-euro-600 transition leading-none shrink-0">{item.step}</span>
                  <div>
                    <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
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
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Why Certify</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">
                Benefits of Sustainability <span className="text-eurogold-400">Certifications</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto">
              {benefits.map((b, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-eurogold-400/20 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center shrink-0 group-hover:bg-eurogold-400/20 transition">
                      <i className={`fas ${b.icon} text-eurogold-400 text-sm`}></i>
                    </div>
                    <h4 className="heading-font text-white font-bold text-[11px] uppercase tracking-widest">{b.title}</h4>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 max-w-3xl mx-auto p-8 rounded-2xl border border-eurogold-400/20 bg-eurogold-400/5">
              <h4 className="heading-font text-white font-bold text-lg uppercase tracking-widest mb-4 text-center">Why Eurocert Asia?</h4>
              <p className="text-white/50 text-sm leading-relaxed text-center mb-6">
                Our team of experienced environmental auditors and sustainability consultants has extensive expertise across various industries and sustainability standards. We understand the complexities of environmental management and can help you navigate the certification process effectively.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                  <span className="heading-font text-eurogold-400 font-bold text-2xl block mb-1">25+</span>
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Years of Industrial Intelligence</span>
          </div>
                <div className="p-4 rounded-xl border border-eurogold-400/20 bg-eurogold-400/5 text-center">
                  <span className="heading-font text-eurogold-400 font-bold text-2xl block mb-1">100%</span>
                  <span className="text-[9px] font-bold text-white/50 uppercase tracking-[0.2em] heading-font">Certification Success Rate</span>
              </div>
              </div>
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
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Start Your Sustainability Journey</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">Our environmental experts are ready to assist you with comprehensive sustainability certifications.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20">
                  Get Started <i className="fas fa-arrow-right text-[9px]"></i>
                </Link>
                <a href="tel:+917009007527" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white border border-white/15 rounded-full px-8 py-3.5 hover:bg-white/5 transition-all">
                  <i className="fas fa-phone text-[9px]"></i> Call Us
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
