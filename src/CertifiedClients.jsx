import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useClients } from './hooks/useClients'

export default function CertifiedClients() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const { clients } = useClients();

  const activeClients = clients.filter(c => c.status === 'Active');
  const otherClients = clients.filter(c => c.status !== 'Active');

  const statusColor = (s) => {
    if (s === 'Active') return { bg: 'bg-green-50 border-green-200 text-green-700', dot: 'bg-green-500', header: 'bg-green-400/20 text-green-100', headerDot: 'bg-green-400' };
    if (s === 'Suspended') return { bg: 'bg-amber-50 border-amber-200 text-amber-700', dot: 'bg-amber-500', header: 'bg-amber-400/20 text-amber-100', headerDot: 'bg-amber-400' };
    return { bg: 'bg-red-50 border-red-200 text-red-700', dot: 'bg-red-500', header: 'bg-red-400/20 text-red-100', headerDot: 'bg-red-400' };
  };

  function ClientCard({ client, idx }) {
    const colors = statusColor(client.status);
    return (
      <div className="rounded-2xl border-2 border-euro-600/30 bg-gradient-to-br from-euro-50 to-white shadow-xl shadow-euro-600/10">
        <div className="bg-euro-600 rounded-t-2xl px-6 py-5 flex items-center justify-between">
          <h4 className="heading-font text-sm font-bold text-white uppercase tracking-wider">S. No. {client.serialNo || idx + 1} — {client.clientName}</h4>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${colors.header} text-xs font-bold heading-font tracking-wider`}>
            <span className={`w-2 h-2 rounded-full ${colors.headerDot} animate-pulse`}></span>{client.status?.toUpperCase()}
          </span>
        </div>
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6">
            <div className="p-3 rounded-xl bg-white border border-euro-100">
              <p className="heading-font text-[10px] text-euro-600 uppercase tracking-wider font-bold mb-1.5">Client Name</p>
              <p className="text-slate-900 text-sm font-semibold">{client.clientName}</p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-euro-100">
              <p className="heading-font text-[10px] text-euro-600 uppercase tracking-wider font-bold mb-1.5">Date of Audit</p>
              <p className="text-slate-800 text-sm font-medium">{client.dateOfAudit || '—'}</p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-euro-100">
              <p className="heading-font text-[10px] text-euro-600 uppercase tracking-wider font-bold mb-1.5">Category of FSMS</p>
              <p className="text-slate-800 text-sm font-medium">{client.categoryFSMS || '—'}</p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-euro-100">
              <p className="heading-font text-[10px] text-euro-600 uppercase tracking-wider font-bold mb-1.5">Certificate No.</p>
              <p className="text-slate-800 text-sm font-medium">{client.certificateNo}</p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-euro-100">
              <p className="heading-font text-[10px] text-euro-600 uppercase tracking-wider font-bold mb-1.5">Expiry Date</p>
              <p className="text-slate-800 text-sm font-medium">{client.expiryDate || '—'}</p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-euro-100">
              <p className="heading-font text-[10px] text-euro-600 uppercase tracking-wider font-bold mb-1.5">Scheme Name</p>
              <p className="text-slate-800 text-sm font-medium">{client.schemeName}</p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-euro-100">
              <p className="heading-font text-[10px] text-euro-600 uppercase tracking-wider font-bold mb-1.5">Status</p>
              <p><span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${colors.bg} text-xs font-bold border`}><span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`}></span>{client.status}</span></p>
            </div>
            <div className="p-3 rounded-xl bg-white border border-euro-100">
              <p className="heading-font text-[10px] text-euro-600 uppercase tracking-wider font-bold mb-1.5">Remarks</p>
              <p className="text-slate-600 text-sm font-medium">{client.remarks || '—'}</p>
            </div>
          </div>
          {client.scope && (
            <div className="mt-6 p-4 rounded-xl bg-euro-600/5 border border-euro-200">
              <p className="heading-font text-[10px] text-euro-600 uppercase tracking-wider font-bold mb-2">Scope of Certification</p>
              <p className="text-slate-700 text-sm leading-relaxed">{client.scope}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <TopBar />
      <Navbar />

      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/l1.png" alt="Certified Clients" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-[#030a16] via-[#030a16]/70 to-[#030a16]/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 backdrop-blur-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Our Clients</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Certified <span className="text-eurogold-400">Clients</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm heading-font mt-4">
            <span className="text-white/70">Certified Clients</span>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Trusted Partners</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Organizations We've Certified</h2>
              <p className="text-slate-400 text-sm mt-3 max-w-2xl mx-auto">Eurocert has certified 1000+ clients across three continents, spanning diverse industries and sectors.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
              {[
                { val: clients.length > 0 ? `${clients.length}` : '1000+', label: 'Registered Clients' },
                { val: '3', label: 'Continents' },
                { val: '50+', label: 'Certification Types' },
                { val: '25+', label: 'Years Experience' },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-[#f8fafc] text-center">
                  <span className="heading-font text-2xl md:text-3xl font-bold text-euro-600 block mb-1">{stat.val}</span>
                  <span className="text-slate-400 text-[10px] uppercase tracking-[0.2em] heading-font font-bold">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* ── Certified Clients Register ── */}
            <div className="mb-10">
              <h3 className="heading-font text-xl md:text-2xl font-bold text-slate-900 mb-6">Certified Clients Register</h3>
              <div className="space-y-6">
                {activeClients.map((client, idx) => (
                  <ClientCard key={client.id} client={client} idx={idx} />
                ))}
                {otherClients.map((client, idx) => (
                  <ClientCard key={client.id} client={client} idx={activeClients.length + idx} />
                ))}
              </div>
              {clients.length === 0 && (
                <div className="p-12 text-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50">
                  <i className="fas fa-users text-slate-300 text-4xl mb-4"></i>
                  <p className="text-slate-400 text-sm">No certified clients registered yet.</p>
                </div>
              )}
            </div>

            <div className="p-8 rounded-2xl border border-euro-100 bg-euro-50/30 text-center">
              <div className="w-14 h-14 rounded-2xl bg-euro-600 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-white text-xl"></i>
              </div>
              <h3 className="heading-font text-lg font-bold text-slate-900 mb-2">Client Directory</h3>
              <p className="text-slate-400 text-sm max-w-lg mx-auto mb-6">For a detailed list of our certified clients or to verify a certification, please contact our team directly.</p>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-euro-600 rounded-full px-8 py-3.5 hover:bg-euro-700 transition-all shadow-lg">
                Request Client List <i className="fas fa-arrow-right text-[9px]"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
