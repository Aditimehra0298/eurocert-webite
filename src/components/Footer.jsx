import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addContact } from '../hooks/useContacts';

const LOGO_URL = 'https://i0.wp.com/www.eurocert.asia/wp-content/uploads/2020/06/cropped-LOGO_EUROCERT_v2-2.png?fit=12691181&ssl=1';

const expertiseLinks = [
  { label: 'CE Certification', href: '/ce-certification' },
  { label: 'Social Responsibility', href: '/social-audits' },
  { label: 'Food Safety', href: '/food-certification' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'GMP+ Certification', href: '/gmp-certification' },
  { label: 'Training', href: '/training' },
];

const policyLinks = [
  { label: 'Child Labour Policy', href: '/child-labour-policy' },
  { label: 'Forced Labour Policy', href: '/forced-labour-policy' },
  { label: 'Quality Policy', href: '/quality-policy' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Clients', href: '/certified-clients' },
  { label: 'Product Catalogue', href: '/product-catalogue' },
  { label: 'Grievance', href: '/grievance' },
];

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-50 flex flex-col gap-3 transition-all duration-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <a
        href="mailto:info@eurocert.in"
        className="w-12 h-12 rounded-xl bg-[#030a16] border border-white/15 flex items-center justify-center shadow-[0_0_20px_rgba(212,168,67,0.3)] hover:shadow-[0_0_30px_rgba(212,168,67,0.6)] hover:border-eurogold-400/50 transition-all duration-400 group cursor-pointer"
        aria-label="Send email"
      >
        <i className="fas fa-envelope text-white/70 group-hover:text-eurogold-400 transition-colors text-sm"></i>
      </a>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-12 h-12 rounded-xl bg-[#030a16] border border-white/15 flex items-center justify-center shadow-[0_0_20px_rgba(212,168,67,0.3)] hover:shadow-[0_0_30px_rgba(212,168,67,0.6)] hover:border-eurogold-400/50 transition-all duration-400 group cursor-pointer"
        aria-label="Scroll to top"
      >
        <i className="fas fa-chevron-up text-white/70 group-hover:text-eurogold-400 transition-colors text-sm"></i>
      </button>
    </div>
  );
}

function CallbackForm() {
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    await addContact({ name: 'Callback Request', phone, email: '', service: 'Quick Callback', message: 'Requested a callback', source: 'Footer Callback' });
    setPhone('');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }
  if (sent) return <p className="text-emerald-400 text-sm"><i className="fas fa-check-circle mr-2"></i>We'll call you back!</p>;
  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="Your Phone" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:border-eurogold-400 transition text-white" />
      <button type="submit" className="w-full bg-eurogold-400 text-black heading-font text-[11px] font-bold py-5 rounded-2xl uppercase tracking-widest hover:bg-white transition shadow-xl">Submit</button>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="footer-premium">
      <ScrollToTopButton />
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block group">
              <img
                src={LOGO_URL}
                alt="EUROCERT Logo"
                className="h-24 w-auto mx-auto md:mx-0 mb-8 drop-shadow-[0_0_15px_rgba(212,168,67,0.4)] group-hover:drop-shadow-[0_0_25px_rgba(212,168,67,0.7)] transition-all duration-500 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-white mb-10">
              Expertise
            </h4>
            <ul className="space-y-5">
              {expertiseLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/50 hover:text-eurogold-400 text-sm transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Resources */}
          <div>
            <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-white mb-10">
              Policies & Resources
            </h4>
            <ul className="space-y-5">
              {policyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/50 hover:text-eurogold-400 text-sm transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-white mb-10">
              Connect
            </h4>
            <ul className="space-y-6 text-sm text-white/50">
              <li className="flex items-start justify-center md:justify-start gap-5">
                <i className="fas fa-map-marker-alt text-eurogold-400 mt-1"></i>
                Panchkula, Haryana, India
              </li>
              <li className="flex items-center justify-center md:justify-start gap-5">
                <i className="fas fa-phone text-eurogold-400"></i>
                +91 9316012883
              </li>
              <li className="flex items-center justify-center md:justify-start gap-5">
                <i className="fas fa-envelope text-eurogold-400"></i>
                info@eurocert.in
              </li>
            </ul>
          </div>

          {/* Quick Callback */}
          <div>
            <h4 className="heading-font text-[11px] font-bold uppercase tracking-widest text-white mb-10">
              Quick Callback
            </h4>
            <CallbackForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-28 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] uppercase tracking-widest text-white/20">
          <div>&copy; 2024 Eurocert Inspection Services Pvt. Ltd.</div>
          <div className="flex space-x-10">
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/quality-policy" className="hover:text-white transition">
              Quality Policy
            </Link>
            <Link to="/grievance" className="hover:text-white transition">
              Grievance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
