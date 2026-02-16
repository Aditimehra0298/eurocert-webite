import { useState, useEffect } from 'react'

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('eurocert_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('eurocert_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('eurocert_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-9999 p-4 md:p-6">
      <div className="max-w-5xl mx-auto bg-[#030a16] border border-white/10 rounded-2xl shadow-[0_-10px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl p-6 md:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-eurogold-400/10 flex items-center justify-center shrink-0">
                <i className="fas fa-cookie-bite text-eurogold-400 text-sm"></i>
              </div>
              <h4 className="heading-font text-xs font-bold text-white uppercase tracking-wider">Cookie Consent</h4>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              We and our partners store or access information on devices, such as cookies, and process personal data, such as unique identifiers and standard information sent by a device. You may click to consent to our processing for such purposes, or click to refuse. Your preferences will apply to this website only.
            </p>
            <p className="text-white/40 text-xs mt-2">
              For more information, please contact our Data Protection Officer at{' '}
              <a href="mailto:info@eurocert.in" className="text-eurogold-400 hover:underline">info@eurocert.in</a>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={decline}
              className="heading-font text-[10px] font-bold uppercase tracking-[0.15em] text-white/60 border border-white/10 rounded-full px-6 py-2.5 hover:border-white/30 hover:text-white transition-all"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="heading-font text-[10px] font-bold uppercase tracking-[0.15em] text-[#030a16] bg-eurogold-400 rounded-full px-6 py-2.5 hover:bg-eurogold-300 transition-all shadow-lg shadow-eurogold-400/20"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
