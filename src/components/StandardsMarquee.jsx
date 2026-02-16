const allLogos = [
  'image copy -1.png',
  'image copy 0.png',
  'image copy 1.png',
  'image copy 2.png',
  'image copy 3.png',
  'image copy 4.png',
  'image copy 5.png',
  'image copy 6.png',
  'image copy 7.png',
  'image copy 8.png',
  'image copy 9.png',
  'image copy 10.png',
  'image copy 11.png',
  'image copy 12.png',
  'image copy 13.png',
  'image copy 14.png',
  'image copy 15.png',
  'image copy 16.png',
  'image copy 17.png',
  'image copy 18.png',
  'image copy 19.png',
  'image copy 20.png',
  'image copy 21.png',
  'image copy 22.png',
  'image copy 23.png',
  'image copy 24.png',
  'image copy 25.png',
  'image copy 26.png',
  'image copy 27.png',
  'image copy 28.png',
  'image copy 29.png',
  'image copy 30.png',
  'image copy 31.png',
  'image copy 32.png',
  'image copy 33.png',
];

const row1 = allLogos.slice(0, 12);
const row2 = allLogos.slice(12, 24);
const row3 = allLogos.slice(24);

function MarqueeRow({ logos, direction = 'left', duration = 35 }) {
  const animationClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  const items = [...logos, ...logos];

  return (
    <div className="overflow-hidden relative py-4">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#030a16] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#030a16] to-transparent pointer-events-none"></div>

      <div
        className={`flex gap-6 items-center w-max ${animationClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((logo, i) => (
          <div
            key={`${logo}-${i}`}
            className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center p-4 hover:shadow-[0_8px_30px_rgba(212,168,67,0.15)] hover:border-eurogold-400/20 transition-all duration-300 group"
          >
            <img
              src={`/${logo}`}
              alt={logo}
              className="max-w-full max-h-full object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StandardsMarquee() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#030a16]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,168,67,0.06)_0%,transparent_60%)]"></div>

      <div className="relative z-10 py-16 lg:py-20">
        {/* Header */}
        <div className="container mx-auto px-6 text-center mb-10">
          <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-3 font-bold">
            Global Standards Spectrum
          </h4>
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Certifications &amp; Standards
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Internationally recognized certifications and standards we provide to help your
            business succeed globally.
          </p>
        </div>

        {/* Marquee rows */}
        <div className="space-y-4">
          <MarqueeRow logos={row1} direction="left" duration={40} />
          <MarqueeRow logos={row2} direction="right" duration={35} />
          <MarqueeRow logos={row3} direction="left" duration={38} />
        </div>
      </div>
    </section>
  );
}
