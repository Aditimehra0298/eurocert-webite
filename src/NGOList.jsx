import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const ngoData = [
  {
    sn: 1,
    name: 'CHILDREN, WOMEN - WELFARE AND EDUCATIONAL ORGANIZATION CWWEO TRUST',
    emails: ['cwweotrusttirupur@gmail.com', 'crevathi83@gmail.com'],
    contact: '7339021899',
    address: 'No.8, Rakkiapalayam 1st Street, Kangayam Road, Tirupur - 641606.'
  },
  {
    sn: 2,
    name: 'PARAM SEVA SANSTHAN',
    emails: ['parmk104@gmail.com'],
    contact: '9899126741',
    address: 'New Vijay Nagar Colony, F-Block, Sector 9, Vijay Nagar, Ghaziabad, Uttar Pradesh 201009'
  }
]

export default function NGOList() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero - Dark */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/b16.png" className="w-full h-full object-cover opacity-20" alt="NGO List" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,67,0.08)_0%,transparent_60%)]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">Partner Organizations for Social Compliance</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            NGO <span className="text-eurogold-400">List</span>
          </h1>
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Our partner NGOs working towards social welfare, ethical practices, and community development
          </p>
        </div>
      </section>

      {/* NGO Table - Light */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Directory</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                NGO <span className="text-euro-600">Directory</span>
              </h2>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-euro-600 text-white">
                    <th className="heading-font text-[10px] font-bold uppercase tracking-widest py-4 px-5 text-left w-[60px]">S.N.</th>
                    <th className="heading-font text-[10px] font-bold uppercase tracking-widest py-4 px-5 text-left">NGO Name</th>
                    <th className="heading-font text-[10px] font-bold uppercase tracking-widest py-4 px-5 text-left">Email</th>
                    <th className="heading-font text-[10px] font-bold uppercase tracking-widest py-4 px-5 text-left w-[130px]">Contact</th>
                    <th className="heading-font text-[10px] font-bold uppercase tracking-widest py-4 px-5 text-left">Address</th>
                  </tr>
                </thead>
                <tbody>
                  {ngoData.map((ngo, i) => (
                    <tr key={i} className={`border-t border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'} hover:bg-euro-50/50 transition-colors duration-200`}>
                      <td className="py-4 px-5 text-center">
                        <span className="heading-font text-euro-600 font-bold text-sm">{ngo.sn}</span>
                      </td>
                      <td className="py-4 px-5">
                        <span className="text-slate-800 text-sm font-semibold leading-snug">{ngo.name}</span>
                      </td>
                      <td className="py-4 px-5">
                        <div className="space-y-1">
                          {ngo.emails.map((email, j) => (
                            <a key={j} href={`mailto:${email}`} className="block text-euro-600 text-sm hover:underline break-all">{email}</a>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-5">
                        <a href={`tel:+91${ngo.contact}`} className="text-slate-600 text-sm hover:text-euro-600 transition-colors">
                          <i className="fas fa-phone text-[10px] mr-1.5 text-euro-600"></i>{ngo.contact}
                        </a>
                      </td>
                      <td className="py-4 px-5">
                        <span className="text-slate-500 text-sm leading-relaxed">{ngo.address}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-5">
              {ngoData.map((ngo, i) => (
                <div key={i} className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-100 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-euro-600 flex items-center justify-center shrink-0">
                      <span className="heading-font text-white font-bold text-sm">{ngo.sn}</span>
                    </div>
                    <h4 className="text-slate-800 text-sm font-bold leading-snug">{ngo.name}</h4>
                  </div>
                  <div className="space-y-2 pl-12">
                    <div>
                      <span className="heading-font text-[9px] text-euro-600 font-bold uppercase tracking-widest block mb-1">Email</span>
                      {ngo.emails.map((email, j) => (
                        <a key={j} href={`mailto:${email}`} className="block text-euro-600 text-sm hover:underline break-all">{email}</a>
                      ))}
                    </div>
                    <div>
                      <span className="heading-font text-[9px] text-euro-600 font-bold uppercase tracking-widest block mb-1">Contact</span>
                      <a href={`tel:+91${ngo.contact}`} className="text-slate-600 text-sm">{ngo.contact}</a>
                    </div>
                    <div>
                      <span className="heading-font text-[9px] text-euro-600 font-bold uppercase tracking-widest block mb-1">Address</span>
                      <span className="text-slate-500 text-sm leading-relaxed">{ngo.address}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
