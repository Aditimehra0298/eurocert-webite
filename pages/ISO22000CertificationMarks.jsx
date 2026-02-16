import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from '../src/components/TopBar'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

const certificationUseRules = [
  'The unaccredited FSMS certification, provided by the EISPL, have the logo of Eurocert only.',
  'The accredited FSMS certification, provided by the EISPL, have marks of accreditation body (if permitted by the body) and that of International Accreditation Forum (IAF), along with Eurocert logo.',
  'If the scope of certification does not include all products of the organization, and/or all locations/facilities of the organization, the material bearing the mark shall not suggest that all products or locations of the organization are covered by the scope of certification.',
  'The mark(s) cannot be altered or modified. However, it may be resized, provided the proportions of the entire mark are maintained and all features of the mark are clearly distinguishable. When the mark as provided includes an accreditation number, the number is part of the mark and cannot be removed from the mark.',
  'The client shall not use the certificate and/or the certification mark(s) provided by the EISPL in such in a manner that would bring the EISPL and/or the Accreditation Body and/or the certification system into disrepute and lose public trust, and shall not make any statement misleading as product or process certification.',
  'Under no conditions, the certified client shall affix the marks on product or its packaging or use in any misleading leading statement which might suggest product or process certification.',
  'Photocopies or electronic copies of original "paper" versions of the certificates may be in full color, and need to be watermarked or otherwise marked as being a copy of the original.',
  'Electronic versions of the certificates provided by the EISPL, cannot be used by the certified client for publicity/promotional and/or printing purposes without being watermarked or otherwise marked as being a copy of the original.',
  'The right to use the certification mark by the organization cannot be assigned to or acquired by any other person, entity, or corporation (including through a change of ownership of the organization) without prior consent of the EISPL.',
  'Upon a reduction of the scope of certification, the client shall amend all advertising material referring to its certification to properly reflect the reduced scope.',
  'Upon withdrawal or termination of its certification, the client shall discontinue its use of all advertising material that contains a reference to certification, and take actions as required by the certification scheme and any other required measures as directed by the EISPL.',
  'Correct use of the certificate, certification mark or accreditation mark is a contractual obligation and will be monitored at surveillance and certificate renewal assessments.',
  'Any misuse of the certificate, certification mark or accreditation by the client may result in suspension or withdrawal of the certification by the EISPL.',
]

const misuseActions = [
  { label: 'a', text: 'Inadvertent misuse of certification or logo by the organization will be required to immediately rectified or the EISPL will suspend certification until the misuse is rectified.' },
  { label: 'b', text: 'Repeated inadvertent misuse will not be tolerated by the EISPL and this will be cause for withdrawal of certification.' },
  { label: 'c', text: 'Fraud: with an activity considered' },
  { label: 'd', text: 'Any fraudulent or premeditated activity on the part of the organization, the EISPL will withdraw certification and publish notices to that effect in the directory of certified organisations.' },
]

const logoRules = [
  'The certificate holder can only publish those certification marks / logos that are concerning the valid issued Certificate, and does not make or permit any misleading statement regarding its certification, nor imply that the certification applies to activities that are outside the scope of certification.',
  'The certificate holder can request the EISPL for the specimen copy of the Eurocert logo which is affixed at FSMS certificate for their use.',
  'The certification logos can be used in full colour, or in black and white.',
  'The certificate holder can use the certification logos on letterheads, brochures and other promotion material.',
  'It is not allowed to use the logo on products, packaging, samples or any other declarations concerning a product.',
  'It is not allowed to use the logo on laboratory tests, calibration or inspection reports or certificates.',
  'It is allowed to reproduce the logo in any other size with the appropriate font, and size and the certificate holder shall ensure that the design of logo is not distorted.',
  'The logo needs to be reproduced completely (in one piece) always.',
  'When the certificate holder does not oblige to follow these rules, should stop use of marks/logo immediately.',
]

const logoEnforcementActions = [
  { label: 'a', text: 'Suspense or withdraw of the certification' },
  { label: 'b', text: 'Publicly notify of action taken' },
  { label: 'c', text: 'Juridical action' },
]

const additionalLogoRules = [
  { num: 11, text: 'The action taken is depending on the severity of the non-compliance, the results of the non-compliance, and if the non-compliance was made intentionally.' },
  { num: 12, text: 'Irrespective of the measures taken as per article 8, the decision of the EISPL will in all cases will final and binding for the client.' },
  { num: 13, text: 'In case the validity of the certificate is ended, for whatever reason, the certificate holder has to stop use and / or distribution of promotion material on which the certification logo is printed.' },
  { num: 14, text: 'The certified client shall not place the NABCB accreditation mark in isolation from the Eurocert logo.' },
  { num: 15, text: 'Neither the Eurocert logo nor the NABCB\'s symbol shall be used on the packaging of a product, labels, publicity material, written announcements, etc. that in any way suggests that the EISPL or NABCB have certified or approved any product or process of the certified client.' },
  { num: 16, text: 'The mark shall not be displayed on buildings and flags, visiting cards or on vehicles except in publicity material like part of a large advertisement.' },
  { num: 17, text: 'Incorrect reference to the Registration Logo, or misleading use of certificates found in advertisements, catalogs, etc. shall be dealt with by suitable action. This could include corrective action, publication of the transgression, and if necessary, legal action.' },
]

export default function ISO22000CertificationMarks() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/F5.png" className="w-full h-full object-cover opacity-30" alt="ISO 22000" />
          <div className="absolute inset-0 bg-linear-to-b from-[#030a16]/70 via-[#030a16]/40 to-[#030a16]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">ISO 22000 — Policy Document</span>
          </div>
          <h1 className="heading-font text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Use of Certification and <span className="text-eurogold-400">Marks or Logo</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Guidelines governing the proper use of FSMS certification, certification marks, and the Eurocert logo
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-[#f8fafc] border-b border-slate-100">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-[11px] heading-font uppercase tracking-widest">
            <Link to="/" className="text-slate-400 hover:text-euro-600 transition">Home</Link>
            <i className="fas fa-chevron-right text-[7px] text-slate-300"></i>
            <Link to="/food-certification/iso-22000" className="text-slate-400 hover:text-euro-600 transition">ISO 22000</Link>
            <i className="fas fa-chevron-right text-[7px] text-slate-300"></i>
            <span className="text-euro-600 font-bold">Certification Marks &amp; Logo</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* ── Section 1: Use of FSMS Certification ── */}
            <div>
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Section 1</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Use of <span className="text-euro-600">FSMS Certification</span>
              </h2>
            </div>

            {/* Rules 1-13 */}
            <div className="space-y-3">
              {certificationUseRules.map((rule, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg bg-euro-600 flex items-center justify-center shrink-0">
                    <span className="heading-font text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-slate-600 text-[15px] leading-relaxed pt-1">{rule}</p>
                </div>
              ))}
            </div>

            {/* Rule 14 — Misuse actions (special layout) */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <div className="bg-[#030a16] px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center shrink-0">
                    <i className="fas fa-exclamation-triangle text-red-400 text-sm"></i>
                  </div>
                  <h3 className="heading-font text-lg font-bold text-white uppercase tracking-widest">
                    14. Actions for <span className="text-red-400">Misuse of Certification</span>
                  </h3>
                </div>
              </div>
              <div className="p-6 space-y-3 bg-white">
                <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
                  The following action by the certified client may lead to suspension or withdrawal:
                </p>
                {misuseActions.map((action, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-red-100 bg-red-50/40 hover:border-red-200 hover:shadow-md transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-red-500 flex items-center justify-center shrink-0">
                      <span className="heading-font text-white font-bold text-sm">{action.label}</span>
                    </div>
                    <p className="text-slate-600 text-[15px] leading-relaxed pt-1">{action.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-slate-200"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-eurogold-400/40"></div>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            {/* ── Section 2: Use of Logo ── */}
            <div>
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Section 2</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Use of <span className="text-euro-600">Logo</span>
              </h2>
            </div>

            {/* Logo Rules 1–9 */}
            <div className="space-y-3">
              {logoRules.map((rule, i) => (
                <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${
                  i === 4 || i === 5
                    ? 'border-amber-200 bg-amber-50/40 hover:border-amber-300'
                    : 'border-slate-100 bg-[#f8fafc] hover:border-euro-200'
                }`}>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    i === 4 || i === 5 ? 'bg-amber-500' : 'bg-euro-600'
                  }`}>
                    <span className="heading-font text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <p className="text-slate-600 text-[15px] leading-relaxed pt-1">{rule}</p>
                </div>
              ))}
            </div>

            {/* Rule 10 — Enforcement actions (special layout) */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <div className="bg-[#030a16] px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0">
                    <i className="fas fa-gavel text-amber-400 text-sm"></i>
                  </div>
                  <h3 className="heading-font text-lg font-bold text-white uppercase tracking-widest">
                    10. Besides the actions mentioned, <span className="text-amber-400">EISPL may take:</span>
                  </h3>
                </div>
              </div>
              <div className="p-6 space-y-3 bg-white">
                {logoEnforcementActions.map((action, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/40 hover:border-amber-200 hover:shadow-md transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center shrink-0">
                      <span className="heading-font text-white font-bold text-sm">{action.label}</span>
                    </div>
                    <p className="text-slate-600 text-[15px] leading-relaxed pt-1">{action.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo Rules 11–17 */}
            <div className="space-y-3">
              {additionalLogoRules.map((rule, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-lg bg-euro-600 flex items-center justify-center shrink-0">
                    <span className="heading-font text-white font-bold text-sm">{rule.num}</span>
                  </div>
                  <p className="text-slate-600 text-[15px] leading-relaxed pt-1">{rule.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-10 bg-[#f8fafc]">
        <div className="container mx-auto px-6 text-center">
          <Link to="/food-certification/iso-22000" className="inline-flex items-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-euro-600 hover:text-euro-700 transition">
            <i className="fas fa-arrow-left text-[9px]"></i> Back to ISO 22000
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
