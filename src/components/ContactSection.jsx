import { useState } from 'react';
import { addContact } from '../hooks/useContacts';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'CE Certification',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await addContact({ ...formData, source: 'Home Contact Form' });
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: 'CE Certification', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Info */}
          <div className="lg:w-1/3">
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-5 font-bold">
              Get a Quote
            </h4>
            <h2 className="heading-font text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Connect with Our Team
            </h2>
            <p className="text-slate-500 mb-8 text-lg leading-relaxed">
              Ready to certify your business? Reach out for a comprehensive consultation today.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-euro-50 flex items-center justify-center text-euro-600 shrink-0 shadow-sm">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Location
                  </div>
                  <div className="text-slate-900 font-bold">Panchkula, Haryana, India</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-euro-50 flex items-center justify-center text-euro-600 shrink-0 shadow-sm">
                  <i className="fas fa-phone text-xl"></i>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Phone
                  </div>
                  <div className="text-slate-900 font-bold">+91-7009007527</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-euro-50 flex items-center justify-center text-euro-600 shrink-0 shadow-sm">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                    Email
                  </div>
                  <div className="text-slate-900 font-bold">info@eurocert.in</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:w-2/3 bg-white border border-slate-100 shadow-[0_32px_80px_-15px_rgba(0,0,0,0.1)] rounded-[3rem] p-8 md:p-14">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                  <i className="fas fa-check-circle text-emerald-500 text-4xl"></i>
                </div>
                <h3 className="heading-font text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                <p className="text-slate-500 max-w-sm">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                <div className="col-span-1">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="John Doe"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="name@company.com"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                    Service Type *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="form-input appearance-none"
                  >
                    <option>CE Certification</option>
                    <option>ISO Certifications</option>
                    <option>Social Responsibility</option>
                    <option>Food Safety Audits</option>
                    <option>Sustainability & ESG</option>
                    <option>Inspection & Testing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-span-full">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-input"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <div className="col-span-full pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto px-12 py-4 bg-euro-600 text-white heading-font text-xs font-bold rounded-2xl hover:bg-euro-700 transition shadow-2xl uppercase tracking-widest disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
