import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const certifications = [
  {
    tag: 'Social Accountability // 01',
    title: 'SA 8000',
    subtitle: 'Social Accountability Standard',
    description: 'SA 8000 is an internationally recognized social accountability standard focusing on labor safety, worker welfare, and living wages. It helps organizations demonstrate their commitment to ethical workplace practices.',
    image: '/b1.png',
    items: [
      'Compliance with global buyer requirements',
      'Build stakeholder trust',
      'Promote fair and ethical workplace practices',
      'Improve worker conditions and safety',
      'Enhance brand reputation'
    ],
    cta: 'Learn More SA 8000',
    href: '/social-audits/sa-8000'
  },
  {
    tag: 'Ethical Trade // 02',
    title: 'SEDEX / SMETA',
    subtitle: 'Ethical Trade Audits',
    description: 'We help you demonstrate ethical business practices through SEDEX (Supplier Ethical Data Exchange) compliance and SMETA (Sedex Members Ethical Trade Audit) audits. Our audits check for labor standards, health and safety, business ethics, and environmental compliance.',
    image: '/b2.png',
    items: [
      'SMETA 2-Pillar audits',
      'SMETA 4-Pillar audits',
      'SEDEX platform registration support',
      'Comprehensive ethical trade assessments',
      'Remediation support'
    ],
    cta: 'Learn More SEDEX',
    href: '/social-audits/sedex'
  },
  {
    tag: 'Compliance Verification // 03',
    title: 'Code of Conduct',
    subtitle: 'Brand & Retailer Audits',
    description: 'Code of Conduct audits verify that suppliers and manufacturers comply with specific ethical standards set by brands and retailers. We conduct comprehensive audits to ensure compliance with various codes of conduct.',
    image: '/b3.png',
    items: [
      'Brand-specific code of conduct audits',
      'Retailer code compliance verification',
      'Labor standards assessment',
      'Environmental compliance checks',
      'Corrective action planning'
    ],
    cta: 'Learn More CoC',
    href: '/social-audits/code-of-conduct'
  },
  {
    tag: 'Responsible Production // 04',
    title: 'WRAP',
    subtitle: 'Worldwide Responsible Accredited Production',
    description: 'WRAP is an independent, objective, non-profit team of global social compliance experts dedicated to promoting safe, lawful, humane, and ethical manufacturing around the world.',
    image: '/b4.png',
    items: [
      'WRAP certification audits',
      'Compliance with WRAP principles',
      'Labor and human rights verification',
      'Environmental compliance'
    ],
    cta: 'Learn More WRAP',
    href: '/social-audits/wrap'
  },
  {
    tag: 'Maritime Labor // 05',
    title: 'MLC',
    subtitle: 'Marine Labour Convention',
    description: 'The Maritime Labour Convention (MLC) sets minimum standards for working and living conditions for seafarers. We provide MLC certification services to ensure compliance with international maritime labor standards.',
    image: '/b5.png',
    items: [
      'MLC compliance audits',
      'Seafarer rights verification',
      'Working conditions assessment',
      'Certification support'
    ],
    cta: 'Learn More MLC',
    href: '/social-audits/mlc'
  },
  {
    tag: 'Social Convergence // 06',
    title: 'SLCP',
    subtitle: 'Social & Labor Convergence Project',
    description: 'The Social & Labor Convergence Project (SLCP) is an initiative that aims to reduce audit fatigue and improve working conditions by creating a converged assessment framework. We provide SLCP verification services to help organizations streamline their social compliance assessments.',
    image: '/b6.png',
    items: [
      'SLCP assessment and verification',
      'Converged assessment framework implementation',
      'Data sharing and transparency support',
      'Reduction of audit duplication'
    ],
    cta: 'Learn More SLCP',
    href: '/social-audits/slcp'
  },
  {
    tag: 'Jewellery Ethics // 07',
    title: 'RJC',
    subtitle: 'Responsible Jewellery Council',
    description: 'The Responsible Jewellery Council (RJC) is an international not-for-profit standards and certification organization. RJC certification demonstrates commitment to responsible business practices in the jewelry supply chain.',
    image: '/b7.png',
    items: [
      'RJC Code of Practices certification',
      'Chain of Custody certification',
      'Responsible sourcing verification',
      'Supply chain transparency'
    ],
    cta: 'Learn More RJC',
    href: '/social-audits/rjc'
  },
  {
    tag: 'Mineral Sourcing // 08',
    title: 'RMI',
    subtitle: 'Responsible Minerals Initiative',
    description: 'The Responsible Minerals Initiative (RMI) provides tools and resources for companies to make informed choices about responsible sourcing of minerals. We provide RMI audit and assessment services to help organizations ensure responsible mineral sourcing.',
    image: '/b8.png',
    items: [
      'RMI audit and assessment',
      'Responsible mineral sourcing verification',
      'Supply chain due diligence',
      'Conflict-free sourcing certification'
    ],
    cta: 'Learn More RMI',
    href: '/social-audits/rmi'
  },
  {
    tag: 'Supply Chain Security // 09',
    title: 'C-TPAT',
    subtitle: 'Customs-Trade Partnership Against Terrorism',
    description: 'C-TPAT is a voluntary supply chain security program led by U.S. Customs and Border Protection. We provide C-TPAT validation and certification services to help organizations enhance their supply chain security and facilitate faster customs clearance.',
    image: '/b9.png',
    items: [
      'C-TPAT validation and certification',
      'Supply chain security assessment',
      'Security best practices implementation',
      'Customs clearance facilitation'
    ],
    cta: 'Learn More C-TPAT',
    href: '/social-audits/ctpat'
  },
  {
    tag: 'Supply Chain Safety // 10',
    title: 'ISO 28000',
    subtitle: 'Safety in the Supply Chain',
    description: 'ISO 28000 is an international standard for security management systems in the supply chain. It helps organizations establish, implement, maintain, and improve security management systems to protect supply chain operations.',
    image: '/b10.png',
    items: [
      'ISO 28000 certification',
      'Supply chain security management',
      'Risk assessment and mitigation',
      'Security system implementation'
    ],
    cta: 'Learn More ISO 28000',
    href: '/social-audits/iso-28000'
  },
  {
    tag: 'Social Responsibility // 11',
    title: 'ISO 26000',
    subtitle: 'Social Accountability',
    description: 'ISO 26000 provides guidance on social responsibility. It helps organizations understand and implement social responsibility practices, contributing to sustainable development and stakeholder trust.',
    image: '/b11.png',
    items: [
      'ISO 26000 guidance implementation',
      'Social responsibility assessment',
      'Sustainable development practices',
      'Stakeholder engagement support'
    ],
    cta: 'Learn More ISO 26000',
    href: '/social-audits/iso-26000'
  },
  {
    tag: 'Anti-Bribery // 12',
    title: 'ISO 37001',
    subtitle: 'Anti-Bribery Management Systems',
    description: 'ISO 37001 specifies requirements and provides guidance for establishing, implementing, maintaining, reviewing, and improving an anti-bribery management system. It helps organizations prevent, detect, and respond to bribery.',
    image: '/b12.png',
    items: [
      'ISO 37001 certification',
      'Anti-bribery management system implementation',
      'Bribery risk assessment',
      'Compliance verification'
    ],
    cta: 'Learn More ISO 37001',
    href: '/social-audits/iso-37001'
  },
  {
    tag: 'Aluminium Sustainability // 13',
    title: 'ASI',
    subtitle: 'Aluminium Stewardship Initiative',
    description: 'The Aluminium Stewardship Initiative (ASI) is a global non-profit standards setting and certification organisation making responsible production in the Aluminium industry. ASI defines global standards for sustainability covering greenhouse gas emissions, waste management, material stewardship, biodiversity and human rights.',
    image: '/b15.png',
    items: [
      'ASI Performance Standard certification',
      'ASI Chain of Custody certification',
      'Greenhouse gas emissions & waste management',
      'Biodiversity & human rights assessment'
    ],
    cta: 'Learn More ASI',
    href: '/social-audits/asi'
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

export default function SocialAudits() {
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
            src="/ad3.webp"
            className="w-full h-full object-cover opacity-20"
            alt="Social Audits Hero"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/80 via-transparent to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-24">
          <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-6 font-bold">
            Ethical Compliance Node Active
          </h4>
          <h1 data-reveal="reveal-up" data-reveal-delay="150" className="heading-font text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight" style={{ textShadow: '0 0 20px rgba(212,168,67,0.4)' }}>
            Social &amp; Ethical
          </h1>
          <h3 data-reveal="reveal-up" data-reveal-delay="250" className="heading-font text-white/80 text-base md:text-xl uppercase tracking-[0.3em] mb-4">
            Audits
          </h3>
          <div data-reveal="reveal-scale" data-reveal-delay="350" className="w-24 h-0.5 bg-eurogold-400 mx-auto mb-6 shadow-[0_0_15px_rgba(212,168,67,0.6)]"></div>
          <p data-reveal="reveal-up" data-reveal-delay="450" className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive social accountability audits and ethical compliance certifications
          </p>
        </div>
      </section>

      {/* All Certification Services */}
      <section className="py-16 lg:py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 data-reveal="reveal-up" className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">
              Ethical Standards
            </h4>
            <h2 data-reveal="reveal-up" data-reveal-delay="150" className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Our Social Certifications
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
                    {cert.cta}
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
                Initiate Social Audit
              </h4>
              <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Quick Inquiry
              </h2>
              <p className="text-white/50 mb-8 max-w-xl mx-auto leading-relaxed">
                Our social compliance experts are ready to support your organization's ethical business practices and global compliance mission.
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
