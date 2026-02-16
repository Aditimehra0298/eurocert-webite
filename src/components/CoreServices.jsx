import { Link } from 'react-router-dom'

const coreServices = [
  {
    icon: 'fa-certificate',
    title: 'ISO Certifications',
    description: 'Internationally recognized management system certifications including ISO 9001, ISO 14001, ISO 45001, ISO 27001, ISO 50001 and more.',
    link: '/management-systems',
    color: 'euro',
    image: '/ad2.webp',
  },
  {
    icon: 'fa-stamp',
    title: 'CE Marking & Product Compliance',
    description: 'Conformity assessments for products entering the European market — machinery, construction materials, lifts, pressure equipment and more.',
    link: '/ce-certification',
    color: 'blue',
    image: '/Gemini_Generated_Image_84ibid84ibid84ib.png',
  },
  {
    icon: 'fa-handshake',
    title: 'Social & Ethical Audits',
    description: 'Independent social compliance audits covering SEDEX/SMETA, SA8000, WRAP, SLCP, and brand-specific Code of Conduct.',
    link: '/social-audits',
    color: 'violet',
    image: '/ad3.webp',
  },
  {
    icon: 'fa-utensils',
    title: 'Food Safety Certifications',
    description: 'Comprehensive food safety certifications including FSSC 22000, HACCP, GLOBALGAP, IFS, ISO 22000, and BRC.',
    link: '/food-certification',
    color: 'emerald',
    image: '/ad4.jpg',
  },
  {
    icon: 'fa-leaf',
    title: 'Environmental & Sustainability',
    description: 'Sustainability certifications and ESG assessments including carbon footprint verification, BRSR reporting, and ISO 14064.',
    link: '/sustainability',
    color: 'amber',
    image: '/ad1.jpg',
  },
  {
    icon: 'fa-search',
    title: 'Inspection & Testing Services',
    description: 'Third-party inspection and testing services for products, processes, and systems — ensuring international compliance.',
    link: '/accreditations',
    color: 'rose',
    image: '/a1.png',
  },
]

const colorMap = {
  euro: {
    iconBg: 'bg-euro-600/10',
    iconText: 'text-euro-600',
    hoverBorder: 'hover:border-euro-300',
    btnBg: 'bg-euro-600',
    btnHover: 'hover:bg-euro-700',
    accent: '#3b82f6',
  },
  blue: {
    iconBg: 'bg-blue-500/10',
    iconText: 'text-blue-500',
    hoverBorder: 'hover:border-blue-300',
    btnBg: 'bg-blue-500',
    btnHover: 'hover:bg-blue-600',
    accent: '#3b82f6',
  },
  violet: {
    iconBg: 'bg-violet-500/10',
    iconText: 'text-violet-500',
    hoverBorder: 'hover:border-violet-300',
    btnBg: 'bg-violet-500',
    btnHover: 'hover:bg-violet-600',
    accent: '#8b5cf6',
  },
  emerald: {
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-500',
    hoverBorder: 'hover:border-emerald-300',
    btnBg: 'bg-emerald-500',
    btnHover: 'hover:bg-emerald-600',
    accent: '#10b981',
  },
  amber: {
    iconBg: 'bg-amber-500/10',
    iconText: 'text-amber-500',
    hoverBorder: 'hover:border-amber-300',
    btnBg: 'bg-amber-500',
    btnHover: 'hover:bg-amber-600',
    accent: '#f59e0b',
  },
  rose: {
    iconBg: 'bg-rose-500/10',
    iconText: 'text-rose-500',
    hoverBorder: 'hover:border-rose-300',
    btnBg: 'bg-rose-500',
    btnHover: 'hover:bg-rose-600',
    accent: '#f43f5e',
  },
}

export default function CoreServices() {
  return (
    <section className="py-16 lg:py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">
            Services Snapshot
          </h4>
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our Core <span className="text-euro-600">Services</span>
          </h2>
          <p className="text-slate-400 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            Comprehensive certification, audit, and inspection services trusted by businesses worldwide
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, i) => {
            const colors = colorMap[service.color]
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${colors.hoverBorder} group`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl ${colors.iconBg} backdrop-blur-sm border border-white/20 flex items-center justify-center`}>
                    <i className={`fas ${service.icon} ${colors.iconText} text-sm`}></i>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="heading-font text-base font-bold text-slate-900 uppercase tracking-wider mb-2">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-[13px] leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 self-start heading-font text-[10px] font-bold uppercase tracking-[0.2em] text-white px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(212,168,67,0.3)] group/btn"
                    style={{ background: 'linear-gradient(90deg, #D4A843 0%, #0a2463 100%)' }}
                  >
                    Learn More
                    <i className="fas fa-arrow-right text-[8px] transition-transform group-hover/btn:translate-x-1"></i>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
