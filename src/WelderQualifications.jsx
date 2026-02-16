import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const recentPosts = [
  {
    title: 'EN ISO 9606-1 Welder Qualification Updates',
    date: '07 Feb 2026',
    tag: 'Standards',
    link: '/welder-qualifications',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'Arc Welding Safety Best Practices',
    date: '30 Jan 2026',
    tag: 'Safety',
    link: '/welder-qualifications',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'ISO 3834 Fusion Welding Quality',
    date: '20 Jan 2026',
    tag: 'ISO 3834',
    link: '/management-systems',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'PED Welding Certification Requirements',
    date: '12 Jan 2026',
    tag: 'PED',
    link: '/ped',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=200'
  },
  {
    title: 'EN 15085 Railway Welding Certification',
    date: '05 Jan 2026',
    tag: 'Railway',
    link: '/railway',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=200'
  }
]

const weldingTypes = [
  {
    title: 'Arc Welding',
    icon: 'fa-bolt',
    desc: 'Uses an electric arc to create heat for melting metal. Produces clean welds with minimal slag buildup — commonly used where aesthetics are important. Can be difficult to achieve consistent results and is not recommended for large projects requiring high precision.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Gas Welding',
    icon: 'fa-fire',
    desc: 'Uses oxygen and fuel gas (usually acetylene) to create heat for melting metal. Commonly used where speed is more important than aesthetics. Can be dangerous if not done properly due to the risk of explosion.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Resistance Welding',
    icon: 'fa-plug',
    desc: 'Joins metals by applying pressure and passing current through the metal area to be joined. Commonly used in automotive and manufacturing industries for spot welding and seam welding applications.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400'
  }
]

const qualificationCategories = [
  { num: '01', title: 'Structural Steel Welding', icon: 'fa-building', desc: 'Qualification for welding structural steel components used in buildings, bridges, and infrastructure.' },
  { num: '02', title: 'Piping Welding', icon: 'fa-water', desc: 'Qualification for welding piping systems used in oil & gas, chemical, and process industries.' },
  { num: '03', title: 'Pressure Vessel Welding', icon: 'fa-database', desc: 'Qualification for welding pressure vessels subject to internal pressure and high temperatures.' }
]

const testingSteps = [
  { num: '01', title: 'Equipment Setup', desc: 'Set up the power source, select the appropriate welding electrode, and set the welding parameters.', icon: 'fa-cogs' },
  { num: '02', title: 'Test Coupon Welding', desc: 'The welder is given a test coupon (piece of metal) to weld and must produce a weld meeting all specified requirements.', icon: 'fa-fire' },
  { num: '03', title: 'Weld Inspection', desc: 'The completed weld is inspected for visual defects, dimensional accuracy, and penetration.', icon: 'fa-search' },
  { num: '04', title: 'Pass or Fail', desc: 'The welder receives a pass or fail based on performance. If passed, they are qualified for that material and thickness.', icon: 'fa-check-double' }
]

const services = [
  { icon: 'fa-user-check', title: 'Welder Qualification Testing', description: 'Complete welder qualification testing per EN ISO 9606 and ASME standards.' },
  { icon: 'fa-clipboard-check', title: 'Welding Procedure Approval', description: 'Welding Procedure Specification (WPS) and Procedure Qualification Record (PQR) approval.' },
  { icon: 'fa-chalkboard-teacher', title: 'Welder Training', description: 'Comprehensive welder training programs for various welding processes and materials.' },
  { icon: 'fa-certificate', title: 'Welder Certification', description: 'Issue welder certificates upon successful completion of qualification tests.' },
  { icon: 'fa-file-alt', title: 'Documentation Review', description: 'Review of welding documentation, procedures, and quality records.' },
  { icon: 'fa-industry', title: 'On-site Supervision', description: 'On-site welding supervision and inspection during production welding.' }
]

const relatedServices = [
  { title: 'PED Certification', subtitle: 'Pressure Equipment', image: '/c6.png', link: '/ped' },
  { title: 'Construction Products', subtitle: 'CPR Certification', image: '/c2.png', link: '/construction-products' },
  { title: 'Railway Interoperability', subtitle: 'EN 15085 Welding', image: '/c10.png', link: '/railway' }
]

const CheckIcon = () => (
  <svg className="w-5 h-5 text-eurogold-400 drop-shadow-[0_0_5px_rgba(212,168,67,0.5)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L9 10.586l3.293-3.293a1 1 0 111.414 1.414z"/>
  </svg>
)

export default function WelderQualifications() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Recent Posts Sidebar ── */}
      <aside className={`fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in-out hidden xl:block ${sidebarOpen ? 'right-0' : '-right-[280px]'}`}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="absolute -left-9 top-1/2 -translate-y-1/2 w-9 h-20 bg-euro-600 hover:bg-euro-700 text-white rounded-l-xl flex items-center justify-center transition-colors shadow-lg">
          <i className={`fas fa-chevron-${sidebarOpen ? 'right' : 'left'} text-[10px]`}></i>
        </button>
        <div className="w-[280px] max-h-[80vh] bg-white/95 backdrop-blur-xl border border-slate-200 border-r-0 rounded-l-2xl shadow-2xl overflow-hidden flex flex-col">
          <div className="px-5 py-4 border-b border-slate-100 bg-euro-600">
            <div className="flex items-center gap-2">
              <i className="fas fa-newspaper text-eurogold-400 text-xs"></i>
              <h3 className="heading-font text-[11px] text-white font-bold uppercase tracking-[0.2em]">Recent Posts</h3>
            </div>
          </div>
          <div className="overflow-y-auto flex-1 divide-y divide-slate-100">
            {recentPosts.map((post, i) => (
              <Link key={i} to={post.link} className="flex gap-3 px-4 py-3 hover:bg-euro-50/60 transition-colors group">
                <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-euro-500 heading-font">{post.tag}</span>
                  <h4 className="text-[11px] font-semibold text-slate-800 leading-tight mt-0.5 line-clamp-2 group-hover:text-euro-600 transition-colors">{post.title}</h4>
                  <span className="text-[9px] text-slate-400 mt-1 block">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-slate-100 bg-slate-50">
            <Link to="/" className="flex items-center justify-center gap-2 heading-font text-[9px] font-bold uppercase tracking-[0.2em] text-euro-600 hover:text-euro-800 transition-colors">
              View All Posts <i className="fas fa-arrow-right text-[8px]"></i>
            </Link>
          </div>
        </div>
      </aside>

      {/* ── Hero ── */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/1.png" className="w-full h-full object-cover opacity-30" alt="Welding" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">EN ISO 9606 &bull; ASME IX</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Welder Qualifications
          </h1>
          <h3 className="heading-font text-white/70 text-base md:text-lg uppercase tracking-[0.3em] mb-4">
            Testing Procedure
          </h3>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Comprehensive welder qualification testing and certification to ensure welders have the required skills and knowledge for safe, effective welding projects.
          </p>
          <div className="mt-8">
            <Link to="/#contact" className="inline-flex items-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20">
              Click For Free Consultation <i className="fas fa-arrow-right text-[9px]"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── What is Welding — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Fundamentals</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  What is <span className="text-euro-600">Welding?</span>
                </h2>
              </div>
              <p className="text-slate-500 text-[15px] leading-relaxed">
                Welding is a process of joining two pieces of material together by heating them until they melt and then cooling them so that they form a strong bond. There are many types of welding, and the most common is arc welding.
              </p>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/40">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-bolt text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">How Arc Welding Works</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Arc welding uses an electric current to create an arc between two pieces of metal. The heat from the arc melts the metal and creates a pool of molten metal called a weld pool. As the weld pool cools down, it forms a strong joint between the two pieces of metal.
                </p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Welding is distinguished from other joining processes, such as brazing and soldering, which do not melt the base metal. Numerous welding processes are available, including arc welding, gas welding, and resistance welding — each with its own advantages, strength, appearance, and cost characteristics.
              </p>
            </div>
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 h-[320px] md:h-[420px] group">
              <img src="/1.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Welding Process" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Types of Welding — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Welding Processes</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Types of Welding</h2>
              </div>

              <div className="grid lg:grid-cols-3 gap-5">
                {weldingTypes.map((type, i) => (
                  <div key={i} className="rounded-2xl border border-white/5 bg-white/2 overflow-hidden group">
                    <div className="h-40 overflow-hidden">
                      <img src={type.image} alt={type.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-eurogold-400/10 flex items-center justify-center">
                          <i className={`fas ${type.icon} text-eurogold-400 text-xs`}></i>
                        </div>
                        <h4 className="heading-font text-[11px] text-eurogold-400 font-bold uppercase tracking-widest">{type.title}</h4>
                      </div>
                      <p className="text-white/50 text-xs leading-relaxed">{type.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Welding Qualifications — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Certification Categories</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Qualifications for Welding</h2>
            </div>

            <p className="text-slate-500 text-[15px] leading-relaxed text-center max-w-3xl mx-auto mb-8">
              To become a certified welder, one must pass a welding examination. A welder must have two years of experience in their particular category and pass both a written examination and a practical test.
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mb-8">
              {qualificationCategories.map((cat) => (
                <div key={cat.num} className="relative p-6 rounded-2xl border border-euro-100 bg-linear-to-br from-euro-50/60 to-white text-center">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-euro-600 flex items-center justify-center">
                    <span className="heading-font text-white text-xs font-bold">{cat.num}</span>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mx-auto mt-3 mb-3">
                    <i className={`fas ${cat.icon} text-base`}></i>
                  </div>
                  <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{cat.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-pen text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Written Examination</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Tests the welder's knowledge of safety, shop math, blueprint reading, and weld symbols.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-euro-100 bg-euro-50/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-tools text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Practical Examination</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The welder must demonstrate proper weld bead location, width, height, penetration, and fusion on plate and pipe specimens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testing Procedure — Dark ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Step by Step</h4>
                <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight">Testing Procedure</h2>
                <p className="text-white/45 text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
                  Welding qualifications testing evaluates a welder's ability to produce quality welds. Variables include the type and thickness of metal, welding process used, and the welder's experience and skill level.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {testingSteps.map((step) => (
                  <div key={step.num} className="p-5 rounded-2xl border border-white/5 bg-white/2 text-center">
                    <div className="w-10 h-10 rounded-full bg-eurogold-400/10 flex items-center justify-center mx-auto mb-3">
                      <span className="heading-font text-eurogold-400 font-bold text-sm">{step.num}</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/5 flex items-center justify-center mx-auto mb-3">
                      <i className={`fas ${step.icon} text-eurogold-400 text-sm`}></i>
                    </div>
                    <h4 className="heading-font text-[10px] font-bold text-white uppercase tracking-widest mb-2">{step.title}</h4>
                    <p className="text-white/45 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services — Soft BG ── */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Services</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Welder Qualification Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl border border-slate-100 hover:border-euro-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-euro-50 flex items-center justify-center text-euro-600 mb-4 group-hover:bg-euro-600 group-hover:text-white transition-all duration-300">
                  <i className={`fas ${service.icon} text-base`}></i>
                </div>
                <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-2">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Conclusion & Eurocert SA — Light ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center">
                    <i className="fas fa-lightbulb text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">Conclusion</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Welder qualifications testing procedures are important for ensuring that welders have the required skills and knowledge to safely and effectively complete their welding projects. It is essential to ensure that all welders meet necessary industry standards or regulations. By following these guidelines, companies can ensure they are hiring qualified, experienced welders who deliver quality work on time.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-eurogold-100 bg-eurogold-50/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-eurogold-400 flex items-center justify-center">
                    <i className="fas fa-handshake text-white text-xs"></i>
                  </div>
                  <h4 className="heading-font text-[11px] text-euro-600 font-bold uppercase tracking-widest">On Behalf of Eurocert S.A</h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We are offering welder qualification testing and certification services on behalf of Eurocert S.A. Our team ensures compliance with all relevant international welding standards including EN ISO 9606, ASME IX, and ISO 3834.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Certifications ── */}
      <section className="py-14 lg:py-18 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Explore More</h4>
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Related Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {relatedServices.map((service, index) => (
              <Link key={index} to={service.link} className="group relative h-[280px] rounded-2xl overflow-hidden border border-slate-200 hover:border-euro-300 shadow-md hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${service.image}')` }} />
                <div className="absolute inset-0 bg-linear-to-t from-[#030a16]/80 via-[#030a16]/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <h4 className="text-white text-sm heading-font font-bold uppercase tracking-widest mb-1">{service.title}</h4>
                  <span className="text-[9px] font-bold uppercase text-eurogold-400 tracking-[0.2em] heading-font">{service.subtitle}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto p-10 sm:p-12 rounded-2xl border border-white/5 bg-white/2">
              <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">Initiate Welder Qualification</h4>
              <h2 className="heading-font text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Quick Inquiry</h2>
              <p className="text-white/45 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
                Our welding experts are ready to guide your organization through welder qualification testing and certification.
              </p>
              <div className="flex items-center justify-center gap-2 text-white/25 text-[10px] heading-font tracking-widest uppercase mb-6">
                <i className="fas fa-map-marker-alt text-eurogold-400/60"></i>
                <span>Eurocert Inspection Services, Panchkula, Haryana</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/#contact" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-[#030a16] bg-eurogold-400 rounded-full px-8 py-3.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20">
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
