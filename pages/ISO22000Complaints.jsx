import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from '../src/components/TopBar'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

const personnelComplaints = [
  'The complaint is received by mail (info@eurocert.in), or in the EISPL website (Eurocert Asia).',
  'On receiving a complaint, the relevant details are recorded.',
  'Based on the appraisal of the complaint details, an investigation officer (IO) is designated within 3 days.',
  'Resources, if required to carry out are the investigation are allocated to the IO.',
  'The investigation to establish a trail of events using following methods:',
  'Identify the cause of the problem;',
  'Gather all necessary information for verifying the chain of events;',
  'Record of statements of the EISPL personnel (the subject of complaint);',
  'Record of statements of complainants.',
  'The IO to find out the root-cause of the complaint within minimum possible time.',
  'No deadline is fixed for completing investigation, considering that a transparent and fair investigation may require detailed analysis of various issues.',
  'Upon completion of investigation, IO upload submit report to the Director.',
  'The Director have discretionary power to accept and implement recommendations in to or in partial.',
  'Approved recommendations form the basis for course of redressal and future course of preventive actions.',
  'Root cause accepted, correction and corrective action is recorded.',
  'Intimate the complainant action taken (or to be taken) to resolve the grievance.',
  'Inform the complainant, that there is provision to appeal, if not satisfied resolution of their grievance.',
]

const certifiedClientComplaints = [
  'The Director reviews the significance of complaint and then appoints a Investigation Officer.',
  'The method and resources allocated to the investigation is left to the discretion of Director.',
  'The certified client which is the subject of a complaint, may be informed about the complaint and the outcome of the investigation.',
  'Degree and type of information given to a third-party is governed by policy of the EISPL relating to confidentiality.',
  'Identity of the complainant is not be disclosed without permission of the complainant.',
  'Once required action has been implemented, the complaint list is updated on root cause accepted, correction and corrective action.',
  'Intimate the complainant action taken (or to be taken) to resolve the grievance.',
  'Inform the complainant, that there is provision to appeal, if not satisfied resolution of their grievance.',
  'The continuity of the effectiveness of the food safety management system of the certified client in question to be verified.',
]

export default function ISO22000Complaints() {
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
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">ISO 22000 — Process Document</span>
          </div>
          <h1 className="heading-font text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Process for Handling <span className="text-eurogold-400">Complaints</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            In case of any complaint related to the functioning of EISPL, the following processes can be followed
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
            <span className="text-euro-600 font-bold">Handling Complaints</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* ── Section 1: Complaints about EISPL Personnel & Services ── */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <div className="bg-[#030a16] px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-euro-600/20 flex items-center justify-center shrink-0">
                    <i className="fas fa-user-shield text-euro-400 text-sm"></i>
                  </div>
                  <div>
                    <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold block mb-0.5">Section 1</span>
                    <h3 className="heading-font text-lg font-bold text-white uppercase tracking-widest">
                      Complaints about EISPL <span className="text-eurogold-400">Personnel &amp; Services</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-3 bg-white">
                {personnelComplaints.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-md transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-euro-600 flex items-center justify-center shrink-0">
                      <span className="heading-font text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-slate-600 text-[15px] leading-relaxed pt-1">{item}</p>
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

            {/* ── Section 2: Complaints on Certified Clients ── */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200">
              <div className="bg-[#030a16] px-8 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center shrink-0">
                    <i className="fas fa-building text-amber-400 text-sm"></i>
                  </div>
                  <div>
                    <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold block mb-0.5">Section 2</span>
                    <h3 className="heading-font text-lg font-bold text-white uppercase tracking-widest">
                      Complaints on <span className="text-amber-400">Certified Clients</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-3 bg-white">
                {certifiedClientComplaints.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-[#f8fafc] hover:border-euro-200 hover:shadow-md transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center shrink-0">
                      <span className="heading-font text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-slate-600 text-[15px] leading-relaxed pt-1">{item}</p>
                  </div>
                ))}
              </div>
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
