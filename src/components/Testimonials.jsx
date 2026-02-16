const testimonials = [
  {
    quote: 'Eurocert Asia helped us achieve CE certification smoothly and professionally. Their team guided us through every step with clarity and expertise.',
    name: 'Manufacturing Client',
    role: 'CE Marking — Machinery Division',
    location: 'India',
    rating: 5,
  },
  {
    quote: 'The SEDEX/SMETA audit process was transparent and efficient. Eurocert\'s auditors were knowledgeable and helped us strengthen our social compliance framework.',
    name: 'Apparel Exporter',
    role: 'Social Compliance — SMETA Audit',
    location: 'Bangladesh',
  },
  {
    quote: 'We received our FSSC 22000 certification ahead of schedule. The support from Eurocert Asia was outstanding from gap analysis to final certification.',
    name: 'Food Processing Company',
    role: 'Food Safety — FSSC 22000',
    location: 'India',
    rating: 5,
  },
  {
    quote: 'Their ISO 45001 certification process was seamless. Eurocert\'s team understood our industry challenges and provided practical recommendations.',
    name: 'Construction Firm',
    role: 'ISO Management Systems',
    location: 'Europe',
  },
]

const clientLogos = [
  'image copy 1.png',
  'image copy 5.png',
  'image copy 8.png',
  'image copy 12.png',
  'image copy 16.png',
  'image copy 20.png',
  'image copy 24.png',
  'image copy 28.png',
]

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/51559-465226590_medium.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#030a16]/85"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">
            Client Trust
          </h4>
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            What Our Clients <span className="text-eurogold-400">Say</span>
          </h2>
          <p className="text-white/50 text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Trusted by manufacturers, exporters, and service providers across the globe.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-7 md:p-8 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-eurogold-400/30 hover:bg-white/10 group relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-7">
                <i className="fas fa-quote-right text-3xl text-eurogold-400/10 group-hover:text-eurogold-400/20 transition-colors"></i>
              </div>

              {/* Stars */}
              {t.rating && (
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, s) => (
                    <i key={s} className="fas fa-star text-eurogold-400 text-xs"></i>
                  ))}
                </div>
              )}

              {/* Quote */}
              <p className="text-white/70 text-[15px] leading-relaxed mb-6 flex-1 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #D4A843 0%, #0a2463 100%)' }}>
                  <i className="fas fa-user text-white text-sm"></i>
                </div>
                <div>
                  <p className="heading-font text-sm font-bold text-white uppercase tracking-wider">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-white/40">{t.role} • {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div>
          <p className="text-center heading-font text-[11px] text-white/40 tracking-[0.4em] uppercase font-bold mb-8">
            Trusted Certifications We Provide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {clientLogos.map((logo, i) => (
              <div
                key={i}
                className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-sm flex items-center justify-center p-3 hover:shadow-[0_8px_30px_rgba(212,168,67,0.15)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <img
                  src={`/${logo}`}
                  alt={`Certification ${i + 1}`}
                  className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
