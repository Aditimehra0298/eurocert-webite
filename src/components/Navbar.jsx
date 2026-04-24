import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const LOGO_URL =
  'https://i0.wp.com/www.eurocert.asia/wp-content/uploads/2020/06/cropped-LOGO_EUROCERT_v2-2.png?fit=12691181&ssl=1';

/* ── Sub-item lists for dropdown menus ── */
const ceSubItems = [
  { label: 'Medical Devices (EU MDR / UK MDR)', href: '/medical-devices' },
  { label: 'Electronics & Electrical Products', href: '/electrical-electronic-products' },
  { type: 'divider' },
  { label: 'Construction Products', href: '/construction-products' },
  { label: 'Lifts', href: '/lifts' },
  { label: 'Machinery', href: '/machinery' },
  { label: 'LVD/EMC', href: '/lvd-emc' },
  { label: 'Cement', href: '/cement' },
  { label: 'PED', href: '/ped' },
  { label: 'PI Mark', href: '/pi-mark' },
  { label: 'RoHS', href: '/rohs' },
  { label: 'REACH', href: '/reach' },
  { label: 'ATEX', href: '/atex' },
  { label: 'Railway Interoperability', href: '/railway' },
  { label: 'Marine Equipment', href: '/marine-equipment' },
  { label: 'Welder Qualifications', href: '/welder-qualifications' },
];

const foodSubItems = [
  { label: 'IFS', href: '/food-certification/ifs' },
  { label: 'GLOBALGAP', href: '/food-certification/globalgap', children: [
    { label: 'GLOBALGAP Certification', href: '/food-certification/globalgap' },
    { label: 'GLOBALGAP C.O.C.', href: '/food-certification/globalgap-coc' },
    { label: 'GLOBALGAP GRASP', href: '/food-certification/globalgap-grasp' },
    { label: 'GLOBALGAP SPRING', href: '/food-certification/globalgap-spring' },
    { label: 'Biodiversity Add-On', href: '/food-certification/biodiversity-add-on' },
    { label: 'AH DLL Grow Add-On', href: '/food-certification/ah-dll-grow' },
  ]},
  { label: 'HACCP', href: '/food-certification/haccp' },
  { label: 'FSSC 22000', href: '/food-certification/fssc-22000' },
  { label: 'ISO 22000', href: '/food-certification/iso-22000', children: [
    { label: 'ISO 22000 Certification', href: '/food-certification/iso-22000' },
    { label: 'Process for Certificate Issue', href: '/food-certification/iso-22000/process-certificate' },
    { label: 'Suspension / Withdrawal Policy', href: '/food-certification/iso-22000/suspension-policy' },
    { label: 'Certification Marks & Logo', href: '/food-certification/iso-22000/certification-marks' },
    { label: 'Handling Complaints', href: '/food-certification/iso-22000/complaints' },
    { label: 'Handling Appeals', href: '/food-certification/iso-22000/appeals' },
  ]},
  { label: 'FoSTaC', href: '/food-certification/fostac' },
  { label: 'BRC', href: '/food-certification/brc' },
  { label: 'EU Organic', href: '/food-certification/eu-organic' },
  { label: 'Albert Heijn', href: '/food-certification/albert-heijn' },
  { label: 'Non-GMO Products', href: '/food-certification/non-gmo-products' },
  { label: 'Non-GMO Animal Feed', href: '/food-certification/non-gmo-animal-feed' },
  { label: "Tesco Nature's Choice", href: '/food-certification/tesco-natures-choice' },
  { label: 'Bollino Blue', href: '/food-certification/bollino-blue' },
  { label: 'GHP', href: '/food-certification/ghp' },
];

const socialSubItems = [
  { label: 'SA 8000', href: '/social-audits/sa-8000' },
  { label: 'SEDEX / SMETA', href: '/social-audits/sedex' },
  { label: 'Code of Conduct', href: '/social-audits/code-of-conduct' },
  { label: 'WRAP', href: '/social-audits/wrap' },
  { label: 'MLC', href: '/social-audits/mlc' },
  { label: 'SLCP', href: '/social-audits/slcp' },
  { label: 'RJC', href: '/social-audits/rjc' },
  { label: 'RMI', href: '/social-audits/rmi' },
  { label: 'C-TPAT', href: '/social-audits/ctpat', children: [
    { label: 'C-TPAT Certification', href: '/social-audits/ctpat' },
    { label: 'CTPAT Login', href: '/ctpat-login' },
    { label: 'CTPAT Register', href: '/ctpat-register' },
  ]},
  { label: 'ISO 26000', href: '/social-audits/iso-26000' },
  { label: 'ISO 28000', href: '/social-audits/iso-28000' },
  { label: 'ISO 37001', href: '/social-audits/iso-37001' },
  { label: 'ASI', href: '/social-audits/asi' },
  { label: 'NGO List', href: '/social-audits/ngo-list' },
];

const sustainabilitySubItems = [
  { label: 'ISO 14064 Carbon Footprint', href: '/sustainability/carbon-footprint' },
  { label: 'ISO 14064 GHG Accounting', href: '/management-system/iso-14064' },
  { label: 'Sustainability Certifications', href: '/sustainability/certifications' },
  { label: 'BRSR Reporting', href: '/sustainability/brsr' },
];

const managementSubItems = [
  { label: 'ISO 9001 Quality', href: '/management-system/iso-9001' },
  { label: 'ISO 14001 Environment', href: '/management-system/iso-14001' },
  { label: 'ISO 45001 Health & Safety', href: '/management-system/iso-45001' },
  { label: 'ISO 27001 Information Security', href: '/management-system/iso-27001' },
  { label: 'ISO 50001 Energy', href: '/management-system/iso-50001' },
  { label: 'ISO 3834 Welding', href: '/management-system/iso-3834' },
  { label: 'ISO 18788 Security Ops', href: '/management-system/iso-18788' },
  { label: 'ISO 22716 Cosmetics GMP', href: '/management-system/iso-22716' },
  { label: 'ISO 22301 Business Continuity', href: '/management-system/iso-22301' },
  { label: 'ISO 55001 Asset Management', href: '/management-system/iso-55001' },
  { label: 'ISO 39001 Road Traffic Safety', href: '/management-system/iso-39001' },
  { label: 'ISO 20000 IT Service', href: '/management-system/iso-20000' },
  { label: 'ISO 27017 Cloud Security', href: '/management-system/iso-27017' },
  { label: 'ISO 27018 Cloud Privacy', href: '/management-system/iso-27018' },
  { label: 'BS 10012 Data Protection', href: '/management-system/bs-10012' },
  { label: 'EN 15038 Translation', href: '/management-system/en-15038' },
  { label: 'EN 15224 Healthcare', href: '/management-system/en-15224' },
];

/* ── Link definitions ── */
const leftLinks = [
  {
    label: 'CE Marking',
    href: '/ce-certification',
    sub: ceSubItems,
  },
  {
    label: 'Food & Agri',
    href: '/food-certification',
    sub: foodSubItems,
  },
  {
    label: 'Social',
    href: '/social-audits',
    sub: socialSubItems,
  },
  { label: 'Management', href: '/management-systems', sub: managementSubItems },
];

const rightLinks = [
  { label: 'GMP+', href: '/gmp-certification' },
  { label: 'Sustainability', href: '/sustainability', sub: sustainabilitySubItems },
  { label: 'Training', href: '/training', sub: [{ label: 'FSSC 22000 V-6 Transition', href: '/fssc-v6-transition' }] },
  { label: 'Accreditations', href: '/accreditations' },
  { label: 'Contact', href: '/contact' },
];

const mobileLinks = [
  { label: 'CE Marking', href: '/ce-certification', sub: ceSubItems },
  { label: 'Food & Agriculture', href: '/food-certification', sub: foodSubItems },
  { label: 'Social Responsibility', href: '/social-audits', sub: socialSubItems },
  { label: 'Management Systems', href: '/management-systems', sub: managementSubItems },
  { label: 'Sustainability', href: '/sustainability', sub: sustainabilitySubItems },
  { label: 'GMP+ Certification', href: '/gmp-certification' },
  { label: 'Training', href: '/training', sub: [{ label: 'FSSC 22000 V-6 Transition', href: '/fssc-v6-transition' }] },
  { label: 'Contact Us', href: '/contact' },
];

function NavLink({ href, className, children, onClick }) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

/* ── Nested sub-menu (flyout) ── */
function NestedSubMenu({ label, href, children }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const enter = () => { clearTimeout(timeoutRef.current); setOpen(true); };
  const leave = () => { timeoutRef.current = setTimeout(() => setOpen(false), 150); };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <NavLink
        href={href}
        className="flex items-center justify-between px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70 hover:text-eurogold-400 hover:bg-white/5 transition-all duration-150 whitespace-nowrap heading-font"
      >
        {label}
        <svg className={`w-3 h-3 ml-2 transition-transform duration-200 ${open ? 'rotate-0' : '-rotate-90'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </NavLink>
      <div className={`absolute left-full top-0 pl-2 z-1200 transition-all duration-200 ${open ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-2 pointer-events-none'}`}>
        <div className="min-w-[200px] bg-[#060e1f]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 py-2">
          {children.map((child) => (
            <NavLink
              key={child.label}
              href={child.href}
              className="block px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70 hover:text-eurogold-400 hover:bg-white/5 transition-all duration-150 whitespace-nowrap heading-font"
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Desktop nav item with optional dropdown ── */
function DesktopNavItem({ link }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const enter = () => { clearTimeout(timeoutRef.current); setOpen(true); };
  const leave = () => { timeoutRef.current = setTimeout(() => setOpen(false), 150); };

  if (!link.sub) {
    return (
      <NavLink href={link.href} className="nav-item">
        {link.label}
      </NavLink>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <NavLink href={link.href} className="nav-item inline-flex items-center gap-1">
        {link.label}
        <svg className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </NavLink>

      {/* Dropdown — single column (straight line) */}
      <div
        className={`absolute top-full left-0 pt-3 z-1200 transition-all duration-200 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      >
        <div className="min-w-[220px] bg-[#060e1f]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl shadow-black/50 py-2">
          {link.sub.map((item) => {
            if (item.type === 'divider') {
              return <div key="divider" className="my-2 border-t border-white/10"></div>;
            }
            const label = typeof item === 'string' ? item : item.label;
            const href = typeof item === 'string' ? link.href : item.href;
            const children = typeof item === 'object' ? item.children : null;
            if (children) {
              return <NestedSubMenu key={label} label={label} href={href} children={children} />;
            }
            return (
              <NavLink
                key={label}
                href={href}
                className="block px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70 hover:text-eurogold-400 hover:bg-white/5 transition-all duration-150 whitespace-nowrap heading-font"
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Mobile nested sub-menu ── */
function MobileNestedMenu({ label, children, onClose }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="text-sm text-white/60 hover:text-eurogold-400 heading-font tracking-wider transition w-full text-left flex items-center justify-between"
        onClick={() => setOpen((p) => !p)}
      >
        {label}
        <svg className={`w-3 h-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="mt-2 ml-3 flex flex-col gap-2 border-l border-white/10 pl-3">
          {children.map((child) => (
            <NavLink
              key={child.label}
              href={child.href}
              className="text-xs text-white/50 hover:text-eurogold-400 heading-font tracking-wider transition"
              onClick={onClose}
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Mobile accordion item ── */
function MobileNavItem({ link, onClose }) {
  const [expanded, setExpanded] = useState(false);

  if (!link.sub) {
    return (
      <NavLink
        href={link.href}
        className="text-2xl font-bold heading-font hover:text-eurogold-400 transition"
        onClick={onClose}
      >
        {link.label}
      </NavLink>
    );
  }

  return (
    <div>
      <button
        className="text-2xl font-bold heading-font hover:text-eurogold-400 transition w-full text-left flex items-center justify-between"
        onClick={() => setExpanded((p) => !p)}
      >
        {link.label}
        <svg className={`w-5 h-5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <div className="mt-3 ml-4 flex flex-col gap-3 border-l border-white/10 pl-4">
          <NavLink
            href={link.href}
            className="text-sm font-bold uppercase tracking-widest text-eurogold-400 heading-font hover:text-eurogold-300 transition"
            onClick={onClose}
          >
            View All &rarr;
          </NavLink>
          {link.sub.map((item) => {
            if (item.type === 'divider') {
              return <div key="divider" className="my-2 border-t border-white/10"></div>;
            }
            const label = typeof item === 'string' ? item : item.label;
            const href = typeof item === 'string' ? link.href : item.href;
            const children = typeof item === 'object' ? item.children : null;
            if (children) {
              return (
                <MobileNestedMenu key={label} label={label} href={href} children={children} onClose={onClose} />
              );
            }
            return (
              <NavLink
                key={label}
                href={href}
                className="text-sm text-white/60 hover:text-eurogold-400 heading-font tracking-wider transition"
                onClick={onClose}
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      <nav className="nav-glass px-4 h-24 flex items-center relative">
        <div className="container mx-auto flex justify-between items-center h-full">
          {/* Left Side Nav */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 flex-1">
            {leftLinks.map((link) => (
              <DesktopNavItem key={link.label} link={link} />
            ))}
          </div>

          {/* Center Logo */}
          <div className="shrink-0 flex justify-center items-center h-full px-6">
            <div className="logo-wrapper">
              <Link to="/">
                <img src={LOGO_URL} alt="EUROCERT Official Logo" className="logo-img" />
              </Link>
            </div>
          </div>

          {/* Right Side Nav */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 flex-1 justify-end">
            {rightLinks.map((link) => (
              <DesktopNavItem key={link.label} link={link} />
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-3xl absolute right-6 text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="flex justify-between items-center mb-16">
            <Link to="/" onClick={toggleMenu}>
              <img
                src={LOGO_URL}
                alt="EUROCERT Logo"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <button onClick={toggleMenu} aria-label="Close menu">
              <i className="fas fa-times text-4xl"></i>
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            {mobileLinks.map((link) => (
              <MobileNavItem key={link.label} link={link} onClose={toggleMenu} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
