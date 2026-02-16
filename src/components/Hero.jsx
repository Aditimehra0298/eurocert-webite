import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero-section text-center">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/1472765_People_Industry_3840x2160.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="hero-content max-w-5xl w-full">
        <h2 className="heading-font text-eurogold-400 text-[11px] md:text-xs mb-4 tracking-[0.7em] uppercase">
          Certification &amp; Inspection Excellence
        </h2>
        <h1 className="heading-font text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-bold mb-2 hero-title">
          EUROCERT
        </h1>
        <h3 className="heading-font text-white text-base md:text-xl lg:text-2xl mb-1 tracking-[0.3em] uppercase">
          The Future of Inspection
        </h3>
        <div className="divider-line"></div>
        <p className="text-white/80 text-xs md:text-lg font-light mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          A leading independent certification and inspection body helping businesses meet global
          standards with trusted audits and internationally recognised certifications.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/contact" className="btn-portal heading-font text-sm">Get Certified</Link>
          <Link to="/about" className="heading-font text-xs tracking-[0.2em] border-b border-white/30 hover:border-eurogold-400 py-2 transition text-white/90">
            View Accreditations <i className="fas fa-arrow-right ml-2 text-[10px]"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
