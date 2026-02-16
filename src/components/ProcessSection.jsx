const steps = [
  {
    num: '01',
    title: 'Consultation & Requirement Analysis',
    icon: 'fa-comments',
  },
  {
    num: '02',
    title: 'Documentation Review',
    icon: 'fa-file-alt',
  },
  {
    num: '03',
    title: 'Audit & Assessment',
    icon: 'fa-clipboard-check',
  },
  {
    num: '04',
    title: 'Non-Conformity Closure',
    icon: 'fa-tools',
  },
  {
    num: '05',
    title: 'Certification Issued',
    icon: 'fa-award',
  },
  {
    num: '06',
    title: 'Surveillance & Renewal',
    icon: 'fa-sync-alt',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">
            How It Works
          </h4>
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Our Certification <span className="text-euro-600">Process</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            A clear, structured path from initial consultation to certification — no confusion, no surprises.
          </p>
        </div>

        {/* Horizontal Arrow Steps — Desktop */}
        <div className="hidden lg:flex items-start justify-between relative">
          {/* Connecting arrow line */}
          <div className="absolute top-[38px] left-[60px] right-[60px] h-[2px] bg-gradient-to-r from-euro-600/20 via-euro-600/40 to-euro-600/20 z-0"></div>
          <div className="absolute top-[38px] left-[60px] right-[60px] z-0 flex items-center justify-between px-4">
            {[0, 1, 2, 3, 4].map((_, i) => (
              <div key={i} className="text-euro-600/30">
                <i className="fas fa-chevron-right text-[10px]"></i>
              </div>
            ))}
          </div>

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center group flex-1">
              {/* Circle with icon */}
              <div className="w-[76px] h-[76px] rounded-full bg-white border-2 border-euro-600/20 flex items-center justify-center mb-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] group-hover:border-eurogold-400 group-hover:shadow-[0_8px_30px_rgba(212,168,67,0.15)] transition-all duration-300">
                <div className="w-[58px] h-[58px] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, #D4A843 0%, #0a2463 100%)' }}>
                  <i className={`fas ${step.icon} text-white text-lg`}></i>
                </div>
              </div>

              {/* Step number */}
              <span className="heading-font text-[10px] font-bold text-eurogold-400 tracking-[0.3em] uppercase mb-1.5">
                Step {step.num}
              </span>

              {/* Title */}
              <h4 className="heading-font text-[13px] font-bold text-slate-800 uppercase tracking-wider leading-snug max-w-[140px]">
                {step.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet — Vertical with arrows */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={i}>
              <div className="flex items-center gap-5">
                {/* Circle */}
                <div className="w-16 h-16 rounded-full bg-white border-2 border-euro-600/20 flex items-center justify-center shadow-md shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #D4A843 0%, #0a2463 100%)' }}>
                    <i className={`fas ${step.icon} text-white text-base`}></i>
                  </div>
                </div>
                {/* Text */}
                <div>
                  <span className="heading-font text-[10px] font-bold text-eurogold-400 tracking-[0.3em] uppercase">
                    Step {step.num}
                  </span>
                  <h4 className="heading-font text-sm font-bold text-slate-800 uppercase tracking-wider">
                    {step.title}
                  </h4>
                </div>
              </div>
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="flex items-center ml-[30px] py-2">
                  <div className="w-[2px] h-8 bg-gradient-to-b from-euro-600/30 to-euro-600/10"></div>
                  <i className="fas fa-chevron-down text-euro-600/30 text-[8px] ml-[-5px] mt-4"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
