import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const InfoIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export default function CertificationCard({ certification, onKnowMore, index }) {
  return (
    <div 
      className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={certification.image}
          alt={certification.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
        
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-blue-600 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
            CE Certified
          </span>
        </div>

        {/* Hover Overlay Icon */}
        <div className="absolute inset-0 flex items-center justify-center bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-300">
          <div className="w-14 h-14 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
          {certification.shortTitle}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2">
          {certification.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-2.5">
          <button
            onClick={() => onKnowMore(certification)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <InfoIcon />
            Know More
          </button>
          <Link
            to={`/${certification.id}`}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
          >
            <ArrowIcon />
            Details
          </Link>
        </div>
      </div>

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20"></div>
      </div>
    </div>
  )
}