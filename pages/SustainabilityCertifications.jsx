import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UniverseBackground from '../components/UniverseBackground'
import NeuralCanvas from '../components/NeuralCanvas'

const services = [
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'ISO 14001 Environmental Management',
    description: 'Certification for organizations seeking to manage their environmental responsibilities systematically, comply with regulations, and improve environmental performance continuously.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: 'ISO 50001 Energy Management',
    description: 'Certification for organizations committed to improving energy performance and reducing energy consumption through a systematic energy management framework.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
      </svg>
    ),
    title: 'Sustainable Supply Chain',
    description: 'Verification of sustainable practices throughout your supply chain including ethical sourcing, environmental impact reduction, and social responsibility standards.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>
    ),
    title: 'Renewable Energy Certifications',
    description: 'Certification for organizations using or producing renewable energy sources such as solar, wind, hydroelectric, or biomass, demonstrating commitment to clean energy transition.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
      </svg>
    ),
    title: 'Waste Management Certifications',
    description: 'Certification for effective waste reduction, recycling, composting, and waste-to-energy programs, minimizing the environmental impact of waste disposal.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
      </svg>
    ),
    title: 'Water Management Certifications',
    description: 'Certification for water conservation programs, water quality management, and sustainable water use practices, ensuring responsible water resource management.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </svg>
    ),
    title: 'Circular Economy Certifications',
    description: 'Certification for organizations implementing circular economy principles, including product lifecycle management, material recovery, and resource optimization.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    title: 'Green Building Certifications',
    description: 'Support for LEED, BREEAM, and other green building standards, helping organizations achieve sustainable building design, construction, and operation.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
      </svg>
    ),
    title: 'Eco-Label Certifications',
    description: 'Product and service certifications for environmental performance, helping consumers and businesses identify environmentally preferable products.'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
    title: 'Sustainability Reporting',
    description: 'Assistance with GRI, CDP, and other sustainability reporting frameworks, helping organizations communicate their environmental performance to stakeholders.'
  }
]

const keyCerts = [
  {
    title: 'ISO 14001',
    subtitle: 'Environmental Management System',
    desc: 'ISO 14001 helps organizations establish an effective environmental management system to manage environmental responsibilities, comply with regulations, and improve environmental performance continuously.'
  },
  {
    title: 'ISO 50001',
    subtitle: 'Energy Management System',
    desc: 'ISO 50001 provides a framework for organizations to develop and implement an energy management system, helping them reduce energy consumption, lower costs, and decrease greenhouse gas emissions.'
  },
  {
    title: 'Sustainable Supply Chain',
    subtitle: 'Supply Chain Certification',
    desc: 'This certification verifies that your supply chain operations meet sustainability criteria including ethical sourcing, environmental impact reduction, and social responsibility standards.'
  },
  {
    title: 'Renewable Energy',
    subtitle: 'Clean Energy Certifications',
    desc: 'Certification for organizations using renewable energy sources such as solar, wind, hydroelectric, or biomass, demonstrating commitment to clean energy transition.'
  },
  {
    title: 'Waste Management',
    subtitle: 'Waste Reduction Certifications',
    desc: 'Certification for organizations implementing effective waste reduction, recycling, composting, and waste-to-energy programs, minimizing environmental impact of waste disposal.'
  },
  {
    title: 'Water Management',
    subtitle: 'Water Conservation Certifications',
    desc: 'Certification for water conservation programs, water quality management, and sustainable water use practices, ensuring responsible water resource management.'
  }
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
  { title: 'Regulatory Compliance', desc: 'Meet and exceed environmental regulations and mandatory reporting requirements.' },
  { title: 'Cost Reduction', desc: 'Identify opportunities to reduce energy, water, and material consumption, lowering operational costs.' },
  { title: 'Brand Reputation', desc: 'Enhance your brand image and demonstrate commitment to environmental responsibility.' },
  { title: 'Market Access', desc: 'Access new markets and customers who prioritize sustainable products and services.' },
  { title: 'Risk Management', desc: 'Identify and mitigate environmental risks to your business operations.' },
  { title: 'Stakeholder Confidence', desc: 'Build trust with customers, investors, employees, and regulatory bodies.' },
  { title: 'Competitive Advantage', desc: 'Differentiate your organization in the marketplace through verified environmental performance.' },
  { title: 'Operational Efficiency', desc: 'Improve resource efficiency and reduce waste through systematic management approaches.' },
  { title: 'Investor Appeal', desc: 'Attract socially responsible investors and access green financing options.' },
  { title: 'Employee Engagement', desc: 'Attract and retain employees who value environmental responsibility.' }
]

const relatedServices = [
  { title: 'Carbon Footprint', subtitle: 'GHG Assessment Services', image: '/s2.png', link: '/sustainability/carbon-footprint' },
  { title: 'ISO 14064', subtitle: 'GHG Quantification & Verification', image: '/s3.png', link: '/sustainability/iso-14064' },
  { title: 'ISO 14001', subtitle: 'Environmental Management', image: '/m3.png', link: '/management-system/iso-14001' }
]

const CheckIcon = () => (
  <svg className="w-6 h-6 text-accent drop-shadow-[0_0_5px_rgba(0,123,167,0.5)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function SustainabilityCertifications() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: 'Sustainability Certifications',
    message: ''
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', email: '', mobile: '', service: 'Sustainability Certifications', message: '' })
  }

  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-white">
      <UniverseBackground />
      <NeuralCanvas />
      <Header />

      {/* Page Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <img src="/s3.png" className="w-full h-full object-cover opacity-20 scale-105" alt="Sustainability Certifications" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#f0f5fa]"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-block glass-panel px-6 py-2 rounded-full mb-8 border-accent/30">
            <span className="text-[9px] font-tech font-bold text-accent uppercase tracking-[0.5em]">Comprehensive environmental certifications for sustainable business practices</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 tracking-wide mb-4 leading-none uppercase hero-text-shadow">
            Sustainability <br/><span className="text-accent">Certifications</span>
          </h1>
          <p className="text-sm md:text-xl text-gray-500 font-tech font-bold uppercase tracking-[0.3em]">
            Environmental Responsibility & Sustainable Practices
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-accent font-tech font-bold uppercase tracking-[0.4em] text-xs">Service Overview</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-gray-800 leading-tight uppercase tracking-tighter">
                Sustainability <br/><span className="text-accent">Certifications</span>
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed font-sans max-w-xl">
              At Eurocert Asia, we provide comprehensive sustainability certification services to help organizations demonstrate their commitment to environmental responsibility and sustainable business practices. Our certifications cover a wide range of environmental aspects including resource management, waste reduction, renewable energy, and sustainable supply chains.
            </p>
            <div className="glass-panel p-8 sm:p-10 rounded-[2rem] border-l-4 border-accent">
              <h4 className="text-gray-800 font-display font-bold uppercase tracking-widest text-lg mb-4">What are Sustainability Certifications?</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Sustainability certifications are third-party verified credentials that demonstrate an organization's commitment to environmental stewardship, resource efficiency, and sustainable operations. These certifications help businesses reduce their environmental impact, improve operational efficiency, meet regulatory requirements, and enhance their reputation among stakeholders who value environmental responsibility.
              </p>
            </div>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 h-[400px] sm:h-[500px]">
            <img src="/h4.png" className="w-full h-full object-cover opacity-80" alt="Sustainability Certifications" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 relative z-10 bg-navy-light/20 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-gray-800 uppercase tracking-widest leading-none">
              Our Certification <span className="text-accent">Services</span>
            </h2>
            <p className="text-gray-500 mt-6 font-tech uppercase tracking-[0.3em]">Comprehensive Sustainability Solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <div key={index} className="glass-panel p-6 rounded-[2rem] group hover:bg-white/[0.08] hover:border-accent hover:shadow-[0_0_40px_rgba(91,141,239,0.3)] hover:-translate-y-2 transition-all duration-400">
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center mb-5 border border-accent/30 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h4 className="text-sm font-display font-bold text-gray-800 mb-2 uppercase">{service.title}</h4>
                <p className="text-xs text-gray-500 font-sans leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Certifications */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-gray-800 uppercase tracking-widest leading-none">
              Key <span className="text-accent">Certifications</span>
            </h2>
            <p className="text-gray-500 mt-6 font-tech uppercase tracking-[0.3em]">Core sustainability certifications we offer</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyCerts.map((cert, index) => (
              <div key={index} className="glass-panel p-8 sm:p-10 rounded-[2rem] border-t-4 border-accent/40 hover:border-accent hover:shadow-[0_0_40px_rgba(91,141,239,0.3)] hover:-translate-y-2 transition-all duration-400 relative overflow-hidden group">
                <span className="text-7xl font-display font-black text-accent/5 absolute -top-2 -right-2 group-hover:text-accent/10 transition">{String(index + 1).padStart(2, '0')}</span>
                <div className="relative z-10">
                  <h4 className="text-xl font-display font-bold text-accent mb-1 uppercase">{cert.title}</h4>
                  <span className="text-xs text-gray-500 font-tech uppercase tracking-widest">{cert.subtitle}</span>
                  <p className="text-sm text-gray-500 font-sans leading-relaxed mt-4">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="py-16 md:py-24 relative z-10 bg-navy-light/20 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-gray-800 uppercase tracking-widest leading-none">
              Certification <span className="text-accent">Process</span>
            </h2>
            <p className="text-gray-500 mt-6 font-tech uppercase tracking-[0.3em]">Thorough, efficient, and supportive approach</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certProcess.map((item, index) => (
              <div key={index} className="glass-panel p-6 rounded-2xl group hover:border-accent/50 transition-all duration-300 relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-display font-black text-accent/30 group-hover:text-accent/60 transition leading-none">{item.step}</span>
                  <div>
                    <h4 className="text-gray-800 font-display font-bold uppercase text-sm mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Why Choose Us */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-12">
            <h3 className="text-3xl font-display font-black text-gray-800 uppercase tracking-widest border-l-4 border-accent pl-6">Benefits of Sustainability Certifications</h3>
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-6 group">
                  <CheckIcon />
                  <div>
                    <h5 className="text-white font-bold uppercase text-sm tracking-wide">{benefit.title}</h5>
                    <p className="text-xs text-gray-500 mt-1">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel p-10 sm:p-12 rounded-[3rem] border border-accent/20 flex flex-col justify-center text-center sm:text-left">
            <h3 className="text-3xl font-display font-black text-gray-800 uppercase tracking-widest mb-8 leading-tight">
              Why <br className="hidden sm:block"/>Eurocert Asia?
            </h3>
            <p className="text-gray-500 text-lg leading-relaxed font-sans mb-10">
              Our team of experienced environmental auditors and sustainability consultants has extensive expertise across various industries and sustainability standards. We understand the complexities of environmental management and can help you navigate the certification process effectively. Our services are designed to be practical, cost-effective, and aligned with your business objectives while ensuring compliance with international standards.
            </p>
            <div className="space-y-4">
              <div className="bg-primary/20 p-6 rounded-2xl border border-gray-100">
                <span className="text-accent font-black text-4xl block mb-2 leading-none">25+</span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-[0.3em]">Years of Industrial Intelligence</span>
              </div>
              <div className="bg-primary/20 p-6 rounded-2xl border border-gray-100">
                <span className="text-accent font-black text-4xl block mb-2 leading-none">100%</span>
                <span className="text-[10px] font-bold text-gray-800 uppercase tracking-[0.3em]">Certification Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 relative z-10 border-t border-gray-100 bg-navy-light/40">
        <div className="container mx-auto px-4 sm:px-6 mb-16 text-center lg:text-left">
          <h2 className="text-4xl font-display font-black text-gray-800 uppercase tracking-widest">
            Related <span className="text-accent">Services</span>
          </h2>
        </div>
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <Link key={index} to={service.link} className="group relative h-[380px] rounded-3xl overflow-hidden border border-gray-200 glass-panel">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${service.image}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent z-10"></div>
              <div className="absolute bottom-8 left-6 right-6 z-20">
                <h4 className="text-gray-800 text-xs sm:text-sm font-display font-bold uppercase tracking-widest mb-4">{service.title}</h4>
                <span className="text-[9px] font-black uppercase text-accent group-hover:text-white transition tracking-[0.2em]">{service.subtitle}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Inquiry Form */}
      <section id="contact" className="py-16 md:py-24 relative z-10 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(91,141,239,0.2)] border border-gray-100">
            <div className="lg:w-5/12 bg-accent p-10 sm:p-16 flex flex-col justify-between" style={{ backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%)' }}>
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-gray-800 mb-6 tracking-tighter leading-none uppercase">
                  Quick <br/>Inquiry
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-sm">
                  Start your sustainability certification journey. Our environmental experts are ready to assist you.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-gray-200 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Base coordinates</p>
                      <p className="text-white font-tech font-bold text-sm uppercase">Panchkula, Haryana, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-gray-200 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Signal channel</p>
                      <p className="text-white font-tech font-bold text-sm">+91 7009007527</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-12">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-xs text-white hover:bg-gray-200 transition">In</a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-xs text-white hover:bg-gray-200 transition">Tw</a>
              </div>
            </div>
            <div className="lg:w-7/12 bg-white p-10 sm:p-16 relative">
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent/50 focus:bg-gray-100 transition" />
                  <input type="email" name="email" placeholder="Your Email *" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent/50 focus:bg-gray-100 transition" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="tel" name="mobile" placeholder="Mobile Number *" value={formData.mobile} onChange={handleChange} required className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent/50 focus:bg-gray-100 transition" />
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 text-sm focus:outline-none focus:border-accent/50 focus:bg-gray-100 transition appearance-none">
                    <option value="Sustainability Certifications">Sustainability Certifications</option>
                    <option value="ISO 14001">ISO 14001 Environmental</option>
                    <option value="ISO 50001">ISO 50001 Energy Management</option>
                    <option value="Supply Chain">Sustainable Supply Chain</option>
                    <option value="Renewable Energy">Renewable Energy Certification</option>
                    <option value="Waste Management">Waste Management Certification</option>
                    <option value="Water Management">Water Management Certification</option>
                    <option value="Green Building">Green Building Certification</option>
                    <option value="Other">Other Certification</option>
                  </select>
                </div>
                <textarea name="message" rows={4} placeholder="Your Message *" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent/50 focus:bg-gray-100 transition resize-none" />
                <button type="submit" className="w-full py-5 bg-accent text-white font-tech font-black uppercase tracking-[0.5em] rounded-xl hover:bg-accent hover:text-white transition-all duration-500 shadow-2xl">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
