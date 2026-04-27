import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function PED() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-[#030a16] to-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="/ped-header.png" className="w-full h-full object-cover opacity-40" alt="Pressure Equipment" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[80px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-28">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-500/20 border border-blue-500/30 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-blue-400 text-xs font-bold uppercase tracking-[0.3em]">Pressure Equipment Directive</span>
          </div>
          <h1 className="heading-font text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-5 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">PED Certification</span>
          </h1>
          <p className="text-blue-200 text-lg md:text-xl mb-2">Pressure Equipment Directive 2014/68/EU</p>
          <p className="text-white/80 text-sm max-w-2xl mx-auto mb-8">
            Eurotech Assessment And Certification Services Private Limited
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact#contact-form" className="group px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-wider rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1">
              Get Free Consultation
              <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview of PED Certification */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-4">Overview</span>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 mb-4">PED Certification</h2>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
                The Pressure Equipment Directive (PED) 2014/68/EU governs the design, manufacture, and conformity assessment of pressure equipment and assemblies placed on the European market. It entered into force on 20 July 2016, fully replacing the earlier Directive 97/23/EC.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8 items-stretch">
              <div className="rounded-2xl border border-slate-200 shadow-lg bg-white overflow-x-auto flex flex-col">
                <table className="w-full text-xs">
                  <thead className="bg-gradient-to-r from-blue-600 to-blue-700">
                    <tr>
                      <th className="text-left px-2 py-1.5 font-bold text-white border-b">Aspect</th>
                      <th className="text-left px-2 py-1.5 font-bold text-white border-b">Previous</th>
                      <th className="text-left px-2 py-1.5 font-bold text-white border-b">Current</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="px-2 py-1 font-medium">Reference Directive</td><td className="px-2 py-1">97/23/EC</td><td className="px-2 py-1 font-semibold text-blue-600">2014/68/EU</td></tr>
                    <tr className="border-b bg-slate-50"><td className="px-2 py-1 font-medium">In Force Since</td><td className="px-2 py-1">30 May 2002</td><td className="px-2 py-1 font-semibold text-blue-600">20 July 2016</td></tr>
                    <tr className="border-b"><td className="px-2 py-1 font-medium">Date of Transposition</td><td className="px-2 py-1">29 Nov 1999</td><td className="px-2 py-1">19 Jan 2016</td></tr>
                    <tr className="border-b bg-slate-50"><td className="px-2 py-1 font-medium">Status</td><td className="px-2 py-1 text-slate-400">Superseded</td><td className="px-2 py-1 font-semibold text-green-600">Currently Applicable</td></tr>
                    <tr className="border-b"><td className="px-2 py-1 font-medium">Simple Vessels Directive</td><td className="px-2 py-1">2009/105/EC</td><td className="px-2 py-1">2014/29/EU</td></tr>
                    <tr className="border-b bg-slate-50"><td className="px-2 py-1 font-medium">Transportable PED</td><td className="px-2 py-1">99/36/EC</td><td className="px-2 py-1">2010/35/EU</td></tr>
                    <tr className="border-b"><td className="px-2 py-1 font-medium">Conformity Modules</td><td className="px-2 py-1">B, D, E, F, G, H</td><td className="px-2 py-1">B, D, E, F, G, H</td></tr>
                    <tr className="bg-slate-50"><td className="px-2 py-1 font-medium">Category Classification</td><td className="px-2 py-1">I to IV</td><td className="px-2 py-1">I to IV</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent z-10"></div>
                <img src="/real.jpeg" alt="PED Overview" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <p className="text-white font-semibold">Ensuring Safety & Free Trade</p>
                  <p className="text-white/70 text-sm">Across all EU member states</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope and Application */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#030a16] via-[#0a1628] to-[#030a16] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500 text-white text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-4">
                <i className="fas fa-search"></i> Scope
              </span>
              <h2 className="heading-font text-4xl md:text-5xl font-bold text-white">Scope and Application</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {[
                { icon: 'fa-industry', title: 'Pressure vessels', subtitle: 'Tanks, boilers, heat exchangers', color: 'from-amber-500 to-amber-600' },
                { icon: 'fa-plug', title: 'Industrial piping', subtitle: 'Pipeline assemblies', color: 'from-yellow-500 to-yellow-600' },
                { icon: 'fa-shield-alt', title: 'Safety accessories', subtitle: 'Relief valves, safety devices', color: 'from-amber-500 to-amber-600' },
                { icon: 'fa-cogs', title: 'Pressure accessories', subtitle: 'Fittings, flanges, couplings', color: 'from-amber-600 to-amber-700' },
                { icon: 'fa-layer-group', title: 'Assemblies', subtitle: 'Combined equipment systems', color: 'from-yellow-600 to-amber-600' }
              ].map((item, idx) => (
                <div key={idx} className="group p-6 bg-white/5 rounded-2xl border border-amber-200/30 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`fas ${item.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.subtitle}</p>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <h3 className="text-center text-amber-400 font-medium mb-4">Industries Covered</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['Oil & Gas', 'Chemical', 'Pharmaceuticals', 'Food & Beverage', 'Energy', 'HVAC', 'Plastics', 'Glass'].map((item, idx) => (
                  <span key={idx} className="px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold border border-amber-400/30">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                  <i className="fas fa-book text-white text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Related Directives</h3>
                  <p className="text-blue-200">Companion legislation framework</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                  <h4 className="text-white font-semibold mb-2">Simple Pressure Vessels</h4>
                  <p className="text-blue-200 text-sm">Directive 2014/29/EU</p>
                </div>
                <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                  <h4 className="text-white font-semibold mb-2">Transportable PED</h4>
                  <p className="text-blue-200 text-sm">Directive 2010/35/EU</p>
                </div>
                <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                  <h4 className="text-white font-semibold mb-2">Aerosol Dispensers</h4>
                  <p className="text-blue-200 text-sm">Directive 75/324/EEC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classification */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-4">Classification</span>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900">Equipment Categories</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {[
                { cat: 'I', level: 'Lowest', desc: 'Self-certification' },
                { cat: 'II', level: 'Low-Medium', desc: 'Notified Body required' },
                { cat: 'III', level: 'Medium-High', desc: 'Detailed assessment' },
                { cat: 'IV', level: 'Highest', desc: 'Full QMS + Type exam' }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 text-center group">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xl">{item.cat}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">Category {item.cat}</h3>
                  <p className="text-blue-600 text-sm font-medium">{item.level}</p>
                  <p className="text-slate-500 text-xs mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Essential Safety Requirements */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#030a16] via-[#0a1628] to-[#030a16] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-4 shadow-lg">
                <i className="fas fa-shield-alt"></i> Requirements
              </span>
              <h2 className="heading-font text-4xl md:text-5xl font-bold text-white mb-3">Essential Safety Requirements</h2>
              <p className="text-white/70 max-w-2xl mx-auto">Annex I of PED 2014/68/EU specifies essential safety requirements for all covered pressure equipment.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                { icon: 'fa-drafting-compass', title: 'Design', subtitle: 'Planning & Calculations', color: 'amber', items: ['EN standards compliance', 'Design margins for pressure', 'Foreseeable operating conditions'] },
                { icon: 'fa-industry', title: 'Manufacturing', subtitle: 'Production & Quality', color: 'yellow', items: ['Qualified welding procedures', 'Approved NDT personnel', 'Pressure testing & inspection'] },
                { icon: 'fa-cubes', title: 'Materials', subtitle: 'Raw Materials', color: 'orange', items: ['EN material specifications', 'European Material Approval', 'Material manufacturer QMS'] },
                { icon: 'fa-certificate', title: 'Documentation', subtitle: 'Compliance Records', color: 'amber', items: ['CE marking & EU DoC', 'Technical documentation', '10-year record retention'] }
              ].map((item, idx) => (
                <div key={idx} className="group relative p-7 bg-white/5 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-amber-200/30 hover:border-amber-400">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600`}></div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <i className={`fas ${item.icon} text-white text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className={`text-${item.color}-400 text-xs font-medium mb-4`}>{item.subtitle}</p>
                  <ul className="space-y-2.5">
                    {item.items.map((i, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-white/70 text-sm">
                        <span className={`w-5 h-5 rounded-full bg-${item.color}-500/20 flex items-center justify-center shrink-0 mt-0.5`}>
                          <i className={`fas fa-check text-${item.color}-400 text-[8px]`}></i>
                        </span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img src="/ped.png" alt="Safety Requirements" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                      <i className="fas fa-clipboard-check text-white text-xl"></i>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Safety Requirements</p>
                      <p className="text-white/70 text-sm">PED 2014/68/EU Annex I</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                    <i className="fas fa-info-circle text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Key Compliance Areas</h3>
                    <p className="text-blue-100">What manufacturers must ensure</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'CE Marking', value: 'Mandatory' },
                    { label: 'Documentation', value: '10 Years' },
                    { label: 'Notified Body', value: 'Categories II-IV' },
                    { label: 'Conformity', value: 'Required' }
                  ].map((stat, idx) => (
                    <div key={idx} className="p-4 bg-white/10 rounded-xl border border-white/20 text-center">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-blue-200 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conformity Assessment */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-4">Assessment</span>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900">Conformity Assessment Procedures</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {['Module B', 'Module D', 'Module E', 'Module F', 'Module G', 'Module H'].map((item, idx) => (
                <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-xl text-center hover:bg-amber-50 hover:border-amber-300 transition-all">
                  <span className="text-amber-600 font-bold">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl">
              <p className="text-center text-slate-700"><i className="fas fa-info-circle mr-2"></i> CE marking is issued only after successful conformity assessment for Categories II, III, IV</p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#030a16] via-[#0a1628] to-[#030a16]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-white">Manufacturer Obligations</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Meet essential safety requirements',
                'Correct category classification',
                'Appropriate conformity assessment',
                'EU Declaration of Conformity',
                'CE marking affixation',
                '10-year documentation',
                'Instructions for use',
                'Market surveillance cooperation',
                'Corrective action'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-amber-200/30 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10 transition-all">
                  <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-sm font-bold shrink-0">{idx + 1}</div>
                  <span className="text-white text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 mb-4">Benefits & Challenges</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center gap-2"><i className="fas fa-check-circle"></i> Key Advantages</h3>
                <div className="space-y-3">
                  {['Free trade across EU/EEA', 'Harmonised safety requirements', 'Free choice of Notified Body', 'Proportionate regulatory burden', 'Standardized documentation'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <i className="fas fa-check text-green-600"></i>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-amber-600 mb-4 flex items-center gap-2"><i className="fas fa-exclamation-triangle"></i> Challenges</h3>
                <div className="space-y-3">
                  {['Varying Notified Body experience', 'Not all EN standards available', 'UKCA marking for GB', 'Welding qualification time'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                      <i className="fas fa-exclamation-triangle text-amber-600"></i>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-4">
              <i className="fas fa-hands-helping"></i> Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Eurotech Can Help</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Comprehensive PED certification support including gap analysis, classification guidance, documentation preparation, and Notified Body coordination.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact#contact-form" className="px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-wider rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Contact us <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
            <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg border border-slate-200">
              <p className="font-bold text-slate-900 mb-1">Eurotech Assessment And Certification Services Private Limited</p>
              <p className="text-blue-600">www.eurotechworld.net</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Eurotech Assessment And Certification Services Private Limited</h3>
          <p className="text-white/60">www.eurotechworld.net</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}