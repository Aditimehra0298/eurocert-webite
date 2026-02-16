import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { addContact } from './hooks/useContacts'

const steps = [
  { step: '01', title: 'Submit Grievance', desc: 'Use the form below or email us with details of your concern. All submissions are treated confidentially.' },
  { step: '02', title: 'Acknowledgement', desc: 'We will acknowledge receipt of your grievance within 3 business days and assign a case number.' },
  { step: '03', title: 'Investigation', desc: 'An impartial review will be conducted by a designated team member who was not involved in the original matter.' },
  { step: '04', title: 'Resolution', desc: 'We will communicate the findings and proposed resolution within 30 business days of acknowledgement.' },
]

const reportCategories = [
  'Quality Issue',
  'Service Complaint',
  'Certification Dispute',
  'Appeal',
  'Sensitive Issue',
  'Suggestion',
  'Other',
]

export default function Grievance() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', category: 'Quality Issue', description: '', anonymous: false })
  const [evidence, setEvidence] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUploading(true)
    setError('')

    try {
      let attachmentData = ''
      let fileName = ''

      if (evidence) {
        if (evidence.size > 512000) {
          setError('File too large (max 500 KB). Submitting without attachment.')
        } else {
          try {
            attachmentData = await readFileAsBase64(evidence)
            fileName = evidence.name
          } catch (err) {
            console.error('File read failed:', err)
          }
        }
      }

      await addContact({
        name: formData.anonymous ? 'Anonymous' : formData.name,
        email: formData.anonymous ? '' : formData.email,
        phone: formData.anonymous ? '' : formData.phone,
        service: formData.category,
        message: formData.description,
        anonymous: formData.anonymous,
        source: 'Grievance',
        attachmentUrl: attachmentData,
        attachmentName: fileName,
      })

      setUploading(false)
      setSubmitted(true)
    } catch (err) {
      console.error('Submission failed:', err)
      setUploading(false)
      setError('Submission failed: ' + (err.message || 'Please check your Firebase configuration.'))
    }
  }

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#030a16]">
        <div className="absolute inset-0 z-0">
          <img src="/l3.png" alt="Grievance Redressal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-[#030a16] via-[#030a16]/70 to-[#030a16]/40"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-eurogold-400/30 bg-eurogold-400/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400 animate-pulse"></span>
            <span className="heading-font text-[10px] text-eurogold-400 tracking-[0.3em] uppercase font-bold">We Listen</span>
          </div>
          <h1 className="heading-font text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight" style={{ textShadow: '0 0 30px rgba(212,168,67,0.3)' }}>
            Grievance <span className="text-eurogold-400">Redressal</span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/40 text-sm heading-font mt-4">
            <span className="text-white/70">Grievance</span>
          </div>
        </div>
      </section>

      {/* ── Download Complaint Appeals Documents ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Documents</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Complaint &amp; Appeals Documents</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/q2.pdf"
                download
                className="group flex items-center gap-5 p-6 rounded-2xl border-2 border-slate-100 bg-slate-50/50 hover:border-euro-600/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-all">
                  <i className="fas fa-file-pdf text-red-500 text-2xl"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="heading-font text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Complaint Appeals Document</h4>
                  <p className="text-slate-400 text-sm">Eurocert S.A.</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center shrink-0 group-hover:bg-euro-600 group-hover:text-white text-euro-600 transition-all">
                  <i className="fas fa-download text-sm"></i>
                </div>
              </a>

              <a
                href="/q3.pdf"
                download
                className="group flex items-center gap-5 p-6 rounded-2xl border-2 border-slate-100 bg-slate-50/50 hover:border-euro-600/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-all">
                  <i className="fas fa-file-pdf text-red-500 text-2xl"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="heading-font text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Complaint Appeal Document</h4>
                  <p className="text-slate-400 text-sm">Eurocert Inspection</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-euro-50 flex items-center justify-center shrink-0 group-hover:bg-euro-600 group-hover:text-white text-euro-600 transition-all">
                  <i className="fas fa-download text-sm"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Complaints / Suggestion / Sensitive Issues Form ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030a16]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.05)_0%,transparent_60%)]"></div>
        <div className="relative z-10 py-14 lg:py-18">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-10 items-start">

              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="heading-font text-[11px] text-eurogold-400 tracking-[0.5em] uppercase mb-2 font-bold">Report</h4>
                  <h2 className="heading-font text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                    Complaints / Suggestion / <span className="text-eurogold-400">Sensitive Issues</span>
                  </h2>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">All complaints, suggestions and sensitive issues are handled confidentially and impartially. We are committed to resolving your concerns fairly and promptly.</p>

                <div className="p-5 rounded-2xl border border-eurogold-400/20 bg-eurogold-400/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center">
                      <i className="fas fa-exclamation-triangle text-eurogold-400 text-sm"></i>
                    </div>
                    <p className="heading-font text-xs font-bold text-eurogold-400 uppercase tracking-wider">It's everyone's responsibility to report a Grievance</p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center shrink-0">
                      <i className="fas fa-phone text-eurogold-400 text-sm"></i>
                    </div>
                    <div>
                      <h5 className="heading-font text-[10px] font-bold text-white uppercase tracking-widest mb-1">India</h5>
                      <a href="tel:+917009007527" className="text-white/50 text-sm hover:text-eurogold-400 transition-colors">+91 7009007527</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center shrink-0">
                      <i className="fas fa-phone text-eurogold-400 text-sm"></i>
                    </div>
                    <div>
                      <h5 className="heading-font text-[10px] font-bold text-white uppercase tracking-widest mb-1">Greece</h5>
                      <a href="tel:+306978184999" className="text-white/50 text-sm hover:text-eurogold-400 transition-colors">+30 697 818 4999</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-eurogold-400/10 flex items-center justify-center shrink-0">
                      <i className="fas fa-envelope text-eurogold-400 text-sm"></i>
                    </div>
                    <div>
                      <h5 className="heading-font text-[10px] font-bold text-white uppercase tracking-widest mb-1">Email</h5>
                      <a href="mailto:info@eurocert.in" className="text-white/50 text-sm hover:text-eurogold-400 transition-colors">info@eurocert.in</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="bg-white border border-white/10 shadow-[0_32px_80px_-15px_rgba(0,0,0,0.3)] rounded-3xl p-8 md:p-10">
                  {!submitted ? (
                    <form className="space-y-5" onSubmit={handleSubmit}>
                      {error && (
                        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                          <i className="fas fa-exclamation-circle mr-2"></i>{error}
                        </div>
                      )}
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                            Full Name {!formData.anonymous && <span className="text-red-400">*</span>}
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            required={!formData.anonymous}
                            disabled={formData.anonymous}
                            className="form-input disabled:opacity-40 disabled:cursor-not-allowed"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                            Email Address {!formData.anonymous && <span className="text-red-400">*</span>}
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            required={!formData.anonymous}
                            disabled={formData.anonymous}
                            className="form-input disabled:opacity-40 disabled:cursor-not-allowed"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          disabled={formData.anonymous}
                          className="form-input disabled:opacity-40 disabled:cursor-not-allowed"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>

                      {/* Description */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                          Complaints / Suggestion / Sensitive Issues <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          rows="4"
                          required
                          value={formData.description}
                          onChange={e => setFormData({ ...formData, description: e.target.value })}
                          className="form-input"
                          placeholder="Please describe your complaint, suggestion or sensitive issue in detail..."
                        ></textarea>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Report Category <span className="text-red-400">*</span></label>
                          <select
                            value={formData.category}
                            onChange={e => setFormData({ ...formData, category: e.target.value })}
                            className="form-input appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-position-[center_right_1rem]"
                          >
                            {reportCategories.map(cat => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Anonymous</label>
                          <div className="flex items-center gap-3 h-[50px]">
                            <button
                              type="button"
                              onClick={() => setFormData({ ...formData, anonymous: !formData.anonymous, ...(formData.anonymous ? {} : { name: '', email: '', phone: '' }) })}
                              className={`relative w-12 h-6 rounded-full transition-all duration-300 ${formData.anonymous ? 'bg-euro-600' : 'bg-slate-200'}`}
                            >
                              <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-300 ${formData.anonymous ? 'left-6.5' : 'left-0.5'}`}></span>
                            </button>
                            <span className="text-slate-500 text-sm">{formData.anonymous ? 'Yes — identity hidden' : 'No'}</span>
                          </div>
                        </div>
                      </div>

                      {/* File Upload */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Add Evidence</label>
                        <div
                          onClick={() => fileRef.current?.click()}
                          className="flex items-center gap-4 p-4 rounded-xl border-2 border-dashed border-slate-200 hover:border-euro-600/30 transition-all cursor-pointer bg-slate-50/50"
                        >
                          <div className="w-10 h-10 rounded-lg bg-euro-50 flex items-center justify-center shrink-0">
                            <i className="fas fa-cloud-upload-alt text-euro-600 text-sm"></i>
                          </div>
                          <div className="flex-1 min-w-0">
                            {evidence ? (
                              <p className="text-slate-700 text-sm font-medium truncate">{evidence.name}</p>
                            ) : (
                              <p className="text-slate-400 text-sm">Click to upload file (PDF, Image, Document — max 500 KB)</p>
                            )}
                          </div>
                          {evidence && (
                            <button
                              type="button"
                              onClick={(e) => { e.stopPropagation(); setEvidence(null); if (fileRef.current) fileRef.current.value = '' }}
                              className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-400 hover:bg-red-100 transition-all"
                            >
                              <i className="fas fa-times text-xs"></i>
                            </button>
                          )}
                        </div>
                        <input
                          ref={fileRef}
                          type="file"
                          className="hidden"
                          onChange={e => setEvidence(e.target.files?.[0] || null)}
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                        />
                      </div>

                      <button type="submit" disabled={uploading} className="w-full md:w-auto px-12 py-4 bg-euro-600 text-white heading-font text-xs font-bold rounded-2xl hover:bg-euro-700 transition shadow-2xl uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-60">
                        {uploading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-paper-plane text-[10px]"></i>
                            Submit Report
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-check text-green-500 text-2xl"></i>
                      </div>
                      <h4 className="heading-font text-lg font-bold text-slate-900 mb-2">Report Submitted!</h4>
                      <p className="text-slate-400 text-sm mb-6">We'll acknowledge your report within 3 business days.</p>
                      <button
                        onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', category: 'Quality Issue', description: '', anonymous: false }); setEvidence(null) }}
                        className="heading-font text-xs text-euro-600 font-bold hover:underline"
                      >
                        Submit Another Report
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-2 font-bold">Our Process</h4>
              <h2 className="heading-font text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Grievance Redressal Process</h2>
            </div>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-euro-100 hidden md:block"></div>
              <div className="space-y-6">
                {steps.map((m, i) => (
                  <div key={i} className="flex gap-5 items-start md:pl-4">
                    <div className="w-12 h-12 rounded-full bg-euro-50 border-2 border-euro-200 flex items-center justify-center shrink-0 relative z-10">
                      <span className="heading-font text-euro-600 font-bold text-xs">{m.step}</span>
                    </div>
                    <div className="p-5 rounded-2xl border border-slate-100 bg-[#f8fafc] flex-1 hover:shadow-lg transition-all duration-300">
                      <h4 className="heading-font text-[11px] font-bold text-slate-900 uppercase tracking-widest mb-2">{m.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
