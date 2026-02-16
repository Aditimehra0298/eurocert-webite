const reasons = [
  {
    icon: 'fa-balance-scale',
    title: 'Independent Third-Party Certification Body',
    description: 'Fully impartial and independent assessments with no conflicts of interest — ensuring credibility and trust in every certification we issue.',
  },
  {
    icon: 'fa-globe',
    title: 'Internationally Recognized Certificates',
    description: 'Our certifications are accepted worldwide by buyers, regulators, and accreditation bodies — opening doors to global markets.',
  },
  {
    icon: 'fa-user-tie',
    title: 'Experienced Global Auditors',
    description: 'Highly qualified audit teams trained across India, Asia, and Europe — with expertise in law, management, HR, and industry compliance.',
  },
  {
    icon: 'fa-eye',
    title: 'Transparent & Ethical Audit Process',
    description: 'We follow a strict ethical code with complete transparency at every stage — building confidence in the integrity of our results.',
  },
  {
    icon: 'fa-bolt',
    title: 'Fast Turnaround Time',
    description: 'Efficient processes and responsive teams ensure your certification is completed on schedule — no unnecessary delays.',
  },
  {
    icon: 'fa-headset',
    title: 'Dedicated Compliance Support',
    description: 'End-to-end guidance throughout the certification lifecycle — from initial gap analysis to ongoing surveillance and recertification.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-[#030a16] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.04)_0%,transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">
            Trust Builder
          </h4>
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Why <span className="text-eurogold-400">Eurocert Asia?</span>
          </h2>
          <p className="text-white/40 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Why not another certification company? Here's what sets us apart.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-eurogold-400/20 bg-eurogold-400/[0.03] p-7 flex flex-col transition-all duration-400 hover:border-eurogold-400/50 hover:bg-eurogold-400/[0.06] hover:shadow-[0_0_40px_rgba(212,168,67,0.1)] hover:-translate-y-1 group"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-eurogold-400/40 to-transparent"></div>
                <div className="absolute top-0 right-0 h-[1px] w-8 bg-gradient-to-l from-eurogold-400/40 to-transparent"></div>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-eurogold-400/10 border border-eurogold-400/20 flex items-center justify-center mb-5 group-hover:bg-eurogold-400/15 group-hover:scale-110 transition-all duration-300">
                <i className={`fas ${reason.icon} text-eurogold-400 text-lg`}></i>
              </div>

              {/* Number badge */}
              <div className="absolute top-6 right-6 heading-font text-[40px] font-bold text-eurogold-400/[0.06] leading-none select-none group-hover:text-eurogold-400/[0.1] transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 className="heading-font text-base font-bold text-white uppercase tracking-wider mb-3 leading-snug">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-white/45 text-[13px] leading-relaxed flex-1 group-hover:text-white/60 transition-colors">
                {reason.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-5 h-[2px] rounded-full bg-gradient-to-r from-eurogold-400/30 via-eurogold-400/10 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,168,67,0.3)] group"
            style={{ background: 'linear-gradient(90deg, #D4A843 0%, #0a2463 100%)' }}
          >
            Get Certified Today
            <i className="fas fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
