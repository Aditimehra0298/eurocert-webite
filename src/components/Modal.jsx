import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export default function Modal({ isOpen, onClose, certification }) {
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      modalRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen || !certification) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md animate-fadeIn" onClick={onClose} />

      {/* Modal Content */}
      <div ref={modalRef} tabIndex={-1} className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-all duration-300 hover:rotate-90"
        >
          <CloseIcon />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Hero Image */}
          <div className="relative h-48 overflow-hidden">
            <img src={certification.image} alt={certification.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                CE Certification
              </span>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{certification.title}</h2>
            <p className="text-slate-500 leading-relaxed mb-8">{certification.description}</p>

            {/* Services Covered */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-xl">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Services Covered
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certification.details.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                    <CheckIcon />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/#contact"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white font-semibold uppercase tracking-wider rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/20"
              >
                Get Certified
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to={`/${certification.id}`}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-slate-200 text-slate-700 font-semibold uppercase tracking-wider rounded-2xl hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
              >
                View Details
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}