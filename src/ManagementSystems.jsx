import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const certifications = [
  {
    tag: 'Quality Matrix // 01',
    title: 'ISO 9001',
    subtitle: 'Quality Management System',
    description: 'The international standard for quality management systems. It helps organizations consistently provide products and services that meet customer and regulatory requirements.',
    image: '/m2.png',
    href: '/management-system/iso-9001',
    items: ['System implementation', 'Certification audits', 'Improvement support', 'Satisfaction enhancement'],
  },
  {
    tag: 'Eco Node // 02',
    title: 'ISO 14001',
    subtitle: 'Environmental Management',
    description: 'Specifies requirements for an environmental management system, helping organizations improve performance and fulfill compliance obligations.',
    image: '/m3.png',
    href: '/management-system/iso-14001',
    items: ['Environmental implementation', 'ISO 14001 certification', 'Environmental impact assessment', 'Sustainability enhancement'],
  },
  {
    tag: 'Workplace Security // 03',
    title: 'ISO 45001',
    subtitle: 'Health & Safety',
    description: 'International standard for occupational health and safety. It helps organizations provide safe workplaces and prevent work-related injury.',
    image: '/m4.png',
    href: '/management-system/iso-45001',
    items: ['OH&S system implementation', 'ISO 45001 certification', 'Workplace safety assessment', 'Risk management support'],
  },
  {
    tag: 'Data Integrity // 04',
    title: 'ISO 27001',
    subtitle: 'Information Security',
    description: 'Manage the security of assets such as financial information, intellectual property, employee details, or data entrusted by third parties.',
    image: '/m5.png',
    href: '/management-system/iso-27001',
    items: ['ISMS implementation', 'ISO 27001 certification', 'Security risk assessment', 'Data protection compliance'],
  },
  {
    tag: 'Energy Matrix // 05',
    title: 'ISO 50001',
    subtitle: 'Energy Management',
    description: 'Framework for organizations to develop a policy for more efficient energy use, fix targets, and use technical data for decisions.',
    image: '/m6.png',
    href: '/management-system/iso-50001',
    items: ['System implementation', 'Target setting & objectives', 'Efficiency assessment', 'Measured results'],
  },
  {
    tag: 'Fusion Quality // 06',
    title: 'ISO 3834',
    subtitle: 'Fusion Welding Quality',
    description: 'Quality requirements for fusion welding of metallic materials, ensuring the technical integrity of industrial products and welding operations.',
    image: '/m7.png',
    href: '/management-system/iso-3834',
    items: ['Welding management system', 'Certification', 'Process assessment', 'Welded product QA'],
  },
  {
    tag: 'Private Security // 07',
    title: 'ISO 18788',
    subtitle: 'Security Operations',
    description: 'Specifies requirements for a security operations management system for private security, ensuring responsible and professional conduct.',
    image: '/m8.png',
    href: '/management-system/iso-18788',
    items: ['Security operations management', 'ISO 18788 certification', 'Security risk management', 'Operational excellence'],
  },
  {
    tag: 'GMP Infrastructure // 08',
    title: 'ISO 22716',
    subtitle: 'Cosmetics GMP',
    description: 'Guidelines for the production, control, storage, and shipment of cosmetic products ensuring quality and safety throughout the supply chain.',
    image: '/m9.png',
    href: '/management-system/iso-22716',
    items: ['Cosmetic GMP implementation', 'ISO 22716 certification', 'Product quality assurance', 'Regulatory compliance'],
  },
  {
    tag: 'Resilience Matrix // 09',
    title: 'ISO 22301',
    subtitle: 'Business Continuity',
    description: 'Implementing and maintaining protocols to prepare for, respond to, and recover from disruptive organizational incidents.',
    image: '/m10.png',
    href: '/management-system/iso-22301',
    items: ['Continuity management system', 'ISO 22301 certification', 'Disaster recovery planning', 'Resilience enhancement'],
  },
  {
    tag: 'Asset Hub // 10',
    title: 'ISO 55001',
    subtitle: 'Asset Management',
    description: 'Manage technical assets effectively across lifecycles to achieve organizational objectives and value optimization.',
    image: '/m11.png',
    href: '/management-system/iso-55001',
    items: ['Asset management implementation', 'ISO 55001 certification', 'Asset lifecycle management', 'Value optimization'],
  },
  {
    tag: 'Traffic Intelligence // 11',
    title: 'ISO 39001',
    subtitle: 'Road Traffic Safety',
    description: 'Reducing deaths and serious injuries related to road traffic crashes through performance improvement and risk reduction strategies.',
    image: '/m12.png',
    href: '/management-system/iso-39001',
    items: ['Road traffic safety management', 'ISO 39001 certification', 'Safety performance improvement', 'Risk reduction strategies'],
  },
  {
    tag: 'IT Service Hub // 12',
    title: 'ISO 20000',
    subtitle: 'IT Service Management',
    description: 'The international standard for IT service management. It helps organizations establish, implement, and maintain IT service management systems.',
    image: '/m13.png',
    href: '/management-system/iso-20000',
    items: ['IT service management system', 'ISO 20000 certification', 'Service delivery optimization', 'ITIL alignment'],
  },
  {
    tag: 'Cloud Protocol // 13',
    title: 'ISO 27017',
    subtitle: 'Cloud Security',
    description: 'Providing guidelines for information security controls applicable to the provision and use of cloud services.',
    image: '/m14.png',
    href: '/management-system/iso-27017',
    items: ['Cloud security management', 'ISO 27017 certification', 'Cloud service security assessment'],
  },
  {
    tag: 'PII Protection // 14',
    title: 'ISO 27018',
    subtitle: 'Cloud Privacy',
    description: 'Establishing measures to protect personally identifiable information (PII) within public cloud computing environments.',
    image: '/m15.png',
    href: '/management-system/iso-27018',
    items: ['Cloud privacy protection', 'ISO 27018 certification', 'PII protection in cloud'],
  },
  {
    tag: 'Privacy Regulation // 15',
    title: 'BS 10012',
    subtitle: 'Data Protection',
    description: 'Personal information management system to comply with global data protection regulations and privacy management requirements.',
    image: '/m16.png',
    href: '/management-system/bs-10012',
    items: ['Personal info management system', 'BS 10012 certification', 'Data protection compliance'],
  },
  {
    tag: 'Translation Protocol // 16',
    title: 'EN 15038',
    subtitle: 'Translation Services',
    description: 'Quality and consistency requirements for translation service providers ensuring process standardization.',
    image: '/m17.png',
    href: '/management-system/en-15038',
    items: ['Translation quality management', 'EN 15038 certification', 'Process standardization'],
  },
  {
    tag: 'Healthcare Node // 17',
    title: 'EN 15224',
    subtitle: 'Healthcare Quality',
    description: 'Quality management systems for healthcare providers ensuring patient safety and effective care delivery.',
    image: '/m18.png',
    href: '/management-system/en-15224',
    items: ['Healthcare quality management', 'EN 15224 certification', 'Patient safety enhancement', 'Service quality'],
  },
  {
    tag: 'Food Safety // 18',
    title: 'ISO 22000',
    subtitle: 'Food Safety Management',
    description: 'International standard for food safety management systems, ensuring safe food throughout the supply chain from farm to fork.',
    image: '/b0.png',
    href: '/management-system/iso-22000',
    items: ['Food safety management system', 'ISO 22000 certification', 'HACCP integration', 'Supply chain food safety'],
  },
  {
    tag: 'Carbon Protocol // 19',
    title: 'ISO 14064',
    subtitle: 'Greenhouse Gas Verification',
    description: 'Framework for quantifying, monitoring, and reporting greenhouse gas emissions and removals at the organization level.',
    image: '/b1.png',
    href: '/management-system/iso-14064',
    items: ['GHG quantification', 'ISO 14064 verification', 'Carbon footprint assessment', 'Emissions reporting'],
  },
  {
    tag: 'Social Responsibility // 20',
    title: 'ISO 26000',
    subtitle: 'Social Responsibility',
    description: 'Guidance on social responsibility helping organizations contribute to sustainable development through ethical and transparent behaviour.',
    image: '/b2.png',
    href: '/management-system/iso-26000',
    items: ['Social responsibility guidance', 'Stakeholder engagement', 'Ethical practices', 'Community impact'],
  },
  {
    tag: 'Supply Chain // 21',
    title: 'ISO 28000',
    subtitle: 'Supply Chain Security',
    description: 'Specifies requirements for a security management system for the supply chain, protecting goods and assets throughout logistics networks.',
    image: '/b3.png',
    href: '/management-system/iso-28000',
    items: ['Supply chain security management', 'ISO 28000 certification', 'Risk assessment', 'Logistics security'],
  },
  {
    tag: 'Anti-Bribery // 22',
    title: 'ISO 37001',
    subtitle: 'Anti-Bribery Management',
    description: 'Anti-bribery management system standard designed to help organizations prevent, detect, and address bribery and corruption.',
    image: '/b4.png',
    href: '/management-system/iso-37001',
    items: ['Anti-bribery management', 'ISO 37001 certification', 'Compliance framework', 'Risk prevention'],
  }
]

const CheckIcon = () => (
  <svg className="w-5 h-5 text-eurogold-400 drop-shadow-[0_0_5px_rgba(212,168,67,0.5)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

function useScrollReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const els = root.querySelectorAll('[data-reveal]')
    els.forEach((el) => el.classList.add('scroll-hidden'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const anim = el.dataset.reveal || 'reveal-up'
            const delay = el.dataset.revealDelay || '0'
            el.style.animationDelay = `${delay}ms`
            el.classList.remove('scroll-hidden')
            el.classList.add(anim)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}

export default function ManagementSystems() {
  const pageRef = useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div ref={pageRef}>
      <TopBar />
      <Navbar />

      {/* Page Hero — Dark */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img
            src="/ad2.webp"
            className="w-full h-full object-cover opacity-20"
            alt="Management Systems Hero"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/80 via-transparent to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-24">
          <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-6 font-bold">
            Performance Excellence Nodes Active
          </h4>
          <h1 data-reveal="reveal-up" data-reveal-delay="150" className="heading-font text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight" style={{ textShadow: '0 0 20px rgba(212,168,67,0.4)' }}>
            Management System
          </h1>
          <h3 data-reveal="reveal-up" data-reveal-delay="250" className="heading-font text-white/80 text-base md:text-xl uppercase tracking-[0.3em] mb-4">
            Certifications
          </h3>
          <div data-reveal="reveal-scale" data-reveal-delay="350" className="w-24 h-0.5 bg-eurogold-400 mx-auto mb-6 shadow-[0_0_15px_rgba(212,168,67,0.6)]"></div>
          <p data-reveal="reveal-up" data-reveal-delay="450" className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive management system certifications to enhance organizational performance and compliance
          </p>
        </div>
      </section>

      {/* All Certification Services */}
      <section className="py-16 lg:py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">
              System Standards
            </h4>
            <h2 data-reveal="reveal-up" data-reveal-delay="150" className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Our Management Certifications
            </h2>
          </div>

          <div className="space-y-16 lg:space-y-20">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Image */}
                <div
                  data-reveal={index % 2 === 0 ? 'reveal-left' : 'reveal-right'}
                  className={`relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-200 group h-[280px] sm:h-[360px] ${index % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <img
                    src={cert.image}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    alt={cert.title}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#030a16]/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md text-eurogold-400 text-[9px] font-bold uppercase tracking-[0.3em] rounded-full border border-eurogold-400/30 heading-font">
                      {cert.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  data-reveal={index % 2 === 0 ? 'reveal-right' : 'reveal-left'}
                  data-reveal-delay="200"
                  className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}
                >
                  <div>
                    <h3 className="heading-font text-3xl sm:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
                      {cert.title}
                    </h3>
                    <p className="heading-font text-euro-600 text-sm font-bold uppercase tracking-widest mt-1">
                      {cert.subtitle}
                    </p>
                  </div>
                  <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="pt-2">
                    <ul className="space-y-3">
                      {cert.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600 text-sm sm:text-base">
                          <CheckIcon />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={cert.href}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-euro-600 text-white heading-font text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-euro-700 transition shadow-xl mt-2"
                  >
                    Learn More
                    <i className="fas fa-arrow-right text-[9px]"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Quick Inquiry — Dark */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>

        <div className="relative z-10 py-16 lg:py-20">
          <div className="container mx-auto px-6 text-center">
            <div data-reveal="reveal-scale" className="max-w-3xl mx-auto p-12 sm:p-16 rounded-[3rem] border border-white/5 bg-white/2">
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-4 font-bold">
                Initiate Certification Matrix
              </h4>
              <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Quick Inquiry
              </h2>
              <p className="text-white/50 mb-8 max-w-xl mx-auto leading-relaxed">
                Our management system experts are ready to support your organization's certification and performance excellence journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center gap-3 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-10 py-5 hover:bg-eurogold-300 transition-all shadow-xl shadow-eurogold-400/20"
                >
                  Get Started
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </Link>
                <a
                  href="tel:+917009007527"
                  className="inline-flex items-center justify-center gap-3 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white border border-white/20 rounded-full px-10 py-5 hover:bg-white/5 transition-all"
                >
                  <i className="fas fa-phone text-[10px]"></i>
                  Call Us Now
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
