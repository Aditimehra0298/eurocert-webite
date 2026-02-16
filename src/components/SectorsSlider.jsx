const slides = [
  {
    img: '/l1.jpeg',
    alt: 'Construction Products & Services',
    category: 'CE Marking',
    title: 'Construction Products & Services',
  },
  {
    img: '/l2.jpeg',
    alt: 'Food & Agriculture Ecosystem',
    category: 'Food Safety',
    title: 'Food & Agriculture Ecosystem',
  },
  {
    img: '/l3.webp',
    alt: 'Social Accountability Bureau',
    category: 'Social Audits',
    title: 'Social Accountability Bureau',
  },
  {
    img: '/l4.jpeg',
    alt: 'Sustainability & ESG Protocol',
    category: 'ESG & Sustainability',
    title: 'Sustainability & ESG Protocol',
  },
];

export default function SectorsSlider() {
  return (
    <section className="slider-section">
      <div className="container mx-auto px-6 mb-8 text-center md:text-left">
        <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">
          Featured Sectors
        </h4>
        <h2 className="heading-font text-4xl font-bold text-slate-900 tracking-tight">
          Global Impact &amp; Expertise
        </h2>
      </div>
      <div className="relative group">
        <div className="slider-container" id="mainSlider">
          {slides.map((slide) => (
            <div key={slide.category} className="rect-slide">
              <img src={slide.img} alt={slide.alt} />
              <div className="rect-overlay">
                <div className="text-[10px] font-extrabold text-euro-600 mb-2 heading-font tracking-widest uppercase">
                  {slide.category}
                </div>
                <div className="text-lg font-black uppercase text-slate-900 leading-tight">
                  {slide.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
