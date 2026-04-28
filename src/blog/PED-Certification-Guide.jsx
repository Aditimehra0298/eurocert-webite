import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PEDCertificationGuide() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/ped-header-banner.png" className="w-full h-full object-cover opacity-30" alt="PED Certification" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030a16]/80 via-transparent to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-blue-400 tracking-[0.3em] uppercase font-bold">Pressure Equipment Directive</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight" style={{ textShadow: '0 0 30px rgba(59,130,246,0.3)' }}>
            What is PED Certification <span className="text-blue-400">(2014/68/EU)?</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Complete guide to PED certification process, requirements, and CE marking for pressure equipment
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="heading-font text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              What is PED Certification?
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              PED certification ensures that pressure equipment meets EU safety requirements before being placed on the market. 
              It applies to equipment with pressure greater than 0.5 bar, including:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6">
              <li>Pressure vessels (boilers, tanks)</li>
              <li>Industrial piping systems</li>
              <li>Heat exchangers</li>
              <li>Safety devices (relief valves)</li>
              <li>Pressure accessories (flanges, couplings)</li>
              <li>Assemblies (integrated systems)</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Once compliant, the product is eligible for CE Marking, allowing free trade across the European Economic Area (EEA).
            </p>
          </div>

          {/* Importance */}
          <div className="mb-12 p-8 rounded-2xl bg-blue-50 border border-blue-100">
            <h3 className="heading-font text-xl md:text-2xl font-bold text-slate-900 mb-4">
              Why is PED Certification Important?
            </h3>
            <p className="text-slate-600 mb-4">
              PED certification is not just a legal requirement—it's a market enabler. It ensures:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Compliance with EU regulations',
                'Safe operation of pressure equipment',
                'Reduced risk of failure and liability',
                'Access to European markets'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-blue-100">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h2 className="heading-font text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              PED Equipment Categories Explained
            </h2>
            <p className="text-slate-600 mb-6">
              Equipment is classified into four categories based on risk:
            </p>
            <div className="space-y-4">
              {[
                { cat: 'Category I', desc: 'Low risk (self-certification)', color: 'bg-green-50 border-green-200 text-green-800' },
                { cat: 'Category II', desc: 'Medium risk (Notified Body required)', color: 'bg-yellow-50 border-yellow-200 text-yellow-800' },
                { cat: 'Category III', desc: 'High risk (detailed assessment)', color: 'bg-orange-50 border-orange-200 text-orange-800' },
                { cat: 'Category IV', desc: 'Highest risk (full quality assurance + type examination)', color: 'bg-red-50 border-red-200 text-red-800' }
              ].map((item, i) => (
                <div key={i} className={`p-4 rounded-xl border ${item.color}`}>
                  <h4 className="font-bold mb-1">{item.cat}</h4>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-4 italic">
              Higher categories require stricter evaluation and third-party involvement.
            </p>
          </div>

          {/* Essential Requirements */}
          <div className="mb-12">
            <h2 className="heading-font text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Essential Safety Requirements (Annex I)
            </h2>
            <p className="text-slate-600 mb-6">
              To comply with PED, manufacturers must meet strict safety requirements:
            </p>
            <div className="space-y-6">
              {[
                {
                  title: 'Design',
                  items: ['Pressure calculations and safety margins', 'Compliance with EN standards', 'Consideration of operating conditions']
                },
                {
                  title: 'Materials',
                  items: ['Approved and traceable materials', 'European material standards compliance']
                },
                {
                  title: 'Manufacturing',
                  items: ['Qualified welding procedures (WPS/WPQR)', 'Certified inspection and NDT personnel', 'Pressure testing and verification']
                },
                {
                  title: 'Documentation',
                  items: ['Technical File preparation', 'Risk assessment and hazard analysis', 'Test reports and certifications', '10-year documentation retention']
                }
              ].map((section, i) => (
                <div key={i} className="p-6 rounded-xl border border-slate-200 bg-slate-50">
                  <h4 className="font-bold text-slate-800 mb-3">{section.title}</h4>
                  <ul className="list-disc list-inside text-slate-600 space-y-1">
                    {section.items.map((item, j) => (
                      <li key={j} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-12">
            <h2 className="heading-font text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Step-by-Step Process to Obtain PED Certification
            </h2>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Determine Applicability', desc: 'Confirm whether your equipment falls under PED (>0.5 bar pressure).' },
                { step: '2', title: 'Classify Equipment', desc: 'Identify the correct category (I–IV) based on pressure, volume, and fluid type.' },
                { step: '3', title: 'Select Conformity Assessment Module', desc: 'Choose the appropriate module: Module B (Type Examination), Module D (Production Quality Assurance), Module E (Product Quality Assurance), Module F (Product Verification), Module G (Unit Verification), Module H (Full Quality Assurance).' },
                { step: '4', title: 'Engage a Notified Body', desc: 'For Categories II–IV, certification must involve an EU-authorized Notified Body.' },
                { step: '5', title: 'Testing & Inspection', desc: 'Conduct required testing: Pressure testing, Non-destructive testing (NDT), Material verification.' },
                { step: '6', title: 'Prepare Technical Documentation', desc: 'Compile a complete Technical File including: Design drawings, Calculations, Risk assessments, Test reports.' },
                { step: '7', title: 'Issue EU Declaration of Conformity', desc: 'Declare compliance with PED requirements.' },
                { step: '8', title: 'Affix CE Marking', desc: 'Apply CE marking after successful certification.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Challenges */}
          <div className="mb-12 p-8 rounded-2xl bg-amber-50 border border-amber-200">
            <h3 className="heading-font text-xl md:text-2xl font-bold text-slate-900 mb-4">
              Common Challenges in PED Certification
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Complex classification rules',
                'Limited harmonized standards',
                'Welding qualification requirements',
                'Coordination with Notified Bodies',
                'Additional compliance like UKCA (UK market)'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-amber-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <h2 className="heading-font text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Benefits of PED Certification
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🌍', title: 'Seamless EU market access', desc: 'Sell across all EU member states' },
                { icon: '⚙', title: 'Harmonized safety standards', desc: 'Meet European safety requirements' },
                { icon: '⚔', title: 'Improved product reliability', desc: 'Enhanced quality and performance' },
                { icon: '🏆', title: 'Stronger global competitiveness', desc: 'Stand out in international markets' }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Help CTA */}
          <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="heading-font text-2xl font-bold mb-4">
                Get Expert Help for PED Certification
              </h3>
              <p className="mb-6 text-blue-100">
                Navigating PED requirements can be complex—especially when classification, documentation, and conformity modules vary based on your product.
              </p>
              <p className="mb-4 text-blue-200 text-sm">
                At Eurocert, we provide free consultation to help you:
              </p>
              <ul className="text-left inline-block text-blue-50 space-y-2 mb-8">
                <li>✓ Identify your correct equipment category</li>
                <li>✓ Select the right conformity assessment module</li>
                <li>✓ Prepare complete technical documentation</li>
                <li>✓ Coordinate with Notified Bodies for faster approval</li>
              </ul>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
                  Book Free Consultation <i className="fas fa-arrow-right text-sm"></i>
                </Link>
                <a href="https://www.eurocert.asia/ped/" target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-400 transition-colors">
                  Visit PED Page <i className="fas fa-external-link-alt text-sm"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            <h3 className="heading-font text-xl font-bold text-slate-900 mb-4">Conclusion</h3>
            <p className="text-slate-600 leading-relaxed">
              PED certification is essential for ensuring safety, compliance, and successful entry into the European market. 
              While the process can be technical, a structured approach combined with expert guidance makes it efficient and manageable. 
              Starting early with the right support can save significant time, cost, and effort in your certification journey.
            </p>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
