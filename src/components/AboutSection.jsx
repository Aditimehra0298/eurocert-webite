import { Link } from 'react-router-dom';

const highlights = [
  'Social accountability audits (SA 8000, SEDEX/SMETA)',
  'Quality and compliance inspections',
  'ISO certifications, CE marking, and sustainability certifications',
];

export default function AboutSection() {
  return (
    <section className="about-section relative overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#030a16]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08)_0%,transparent_60%)]"></div>

      <div className="container mx-auto px-6 relative z-10 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* LEFT — All content */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full border border-eurogold-400/30 flex items-center justify-center">
                <i className="fas fa-users text-eurogold-400 text-sm"></i>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-eurogold-400">
                  Eurocert Team
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
                  Established 1998
                </div>
              </div>
            </div>

            <h2 className="heading-font text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              Who We Are
            </h2>

            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
              Eurocert Inspection Services Pvt. Ltd., affiliated with Eurocert SA (established
              1998), is a leading independent third-party certification and inspection body.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-6">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-eurogold-400/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-eurogold-400/20 transition">
                    <i className="fas fa-check text-eurogold-400 text-[10px]"></i>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Auditor note */}
            <div className="mb-6 p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-euro-400/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-user-tie text-euro-400 text-xs"></i>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  Our auditors are highly qualified professionals with backgrounds in{' '}
                  <span className="text-white/80 font-semibold">
                    law, MBA, human resources, and the apparel industry.
                  </span>
                </p>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-3 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-eurogold-400 border border-eurogold-400/30 rounded-full px-8 py-4 hover:bg-eurogold-400/10 transition-all group"
            >
              Learn More
              <i className="fas fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>

          {/* RIGHT — Video */}
          <div className="lg:w-1/2">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(212,168,67,0.12)] relative">
              <video
                className="w-full aspect-[4/3] object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/Image_to_Moving_Emotion_Video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#030a16]/50 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 rounded-3xl border border-eurogold-400/5 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
