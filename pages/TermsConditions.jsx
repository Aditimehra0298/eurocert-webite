import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UniverseBackground from '../components/UniverseBackground'

export default function TermsConditions() {
  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-white">
      <UniverseBackground />
      <Header />
      
      <main className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/" className="text-accent hover:text-accent transition text-sm">
              ← Back to Home
            </Link>
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-gray-800 mb-4 uppercase tracking-wide">
              Terms & Conditions
            </h1>
            <p className="text-gray-500">Last updated: January 2024</p>
          </div>

          {/* Content */}
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-gray-200 space-y-8 text-gray-600">
            
            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using the services of Eurocert Inspection Services Pvt. Ltd. ("Eurocert," "we," "our," or "us"), 
                you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, 
                please do not use our services or website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">2. Services</h2>
              <p className="leading-relaxed mb-4">Eurocert provides the following services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Third-party certification audits and assessments</li>
                <li>Quality and compliance inspections</li>
                <li>Social accountability audits (SA 8000, SEDEX/SMETA)</li>
                <li>ISO certifications and management system audits</li>
                <li>CE marking and product certifications</li>
                <li>Sustainability and ESG certifications</li>
                <li>Training and consultation services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">3. Client Obligations</h2>
              <p className="leading-relaxed mb-4">As a client, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information required for audits and certifications</li>
                <li>Grant access to premises, personnel, and documentation as needed</li>
                <li>Comply with all applicable laws, regulations, and standards</li>
                <li>Pay all fees and charges in accordance with agreed terms</li>
                <li>Not misuse or misrepresent certification marks or audit results</li>
                <li>Notify us promptly of any changes affecting certification status</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">4. Certification Process</h2>
              <p className="leading-relaxed mb-4">
                The certification process follows established procedures and standards:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Application review and contract agreement</li>
                <li>Document review and audit planning</li>
                <li>On-site audit and assessment</li>
                <li>Nonconformity identification and corrective action</li>
                <li>Certification decision by competent personnel</li>
                <li>Certificate issuance (upon successful completion)</li>
                <li>Surveillance and recertification audits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">5. Fees and Payment</h2>
              <p className="leading-relaxed mb-4">
                Payment terms are outlined in individual service agreements. General conditions include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fees are based on the scope and complexity of services</li>
                <li>Payment is due as per the agreed schedule</li>
                <li>Late payments may incur additional charges</li>
                <li>Cancellation or rescheduling may be subject to fees</li>
                <li>Travel and accommodation expenses are charged separately when applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">6. Confidentiality</h2>
              <p className="leading-relaxed">
                We maintain strict confidentiality of all client information obtained during the certification process. 
                Information will only be disclosed to third parties with client consent, except where required by law 
                or accreditation body requirements. Our personnel are bound by confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">7. Impartiality and Independence</h2>
              <p className="leading-relaxed">
                Eurocert is committed to impartial and objective assessment. We do not provide consultancy services 
                to the same organization for which we provide certification. Our auditors are free from any conflicts 
                of interest and are selected based on competence and objectivity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">8. Use of Certification Marks</h2>
              <p className="leading-relaxed mb-4">
                Certified organizations may use Eurocert certification marks subject to the following conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Marks may only be used while certification is valid</li>
                <li>Marks must be used in accordance with our guidelines</li>
                <li>Marks must not be misleading or imply product certification when only the management system is certified</li>
                <li>Unauthorized use will result in corrective action or withdrawal of certification</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">9. Suspension and Withdrawal</h2>
              <p className="leading-relaxed mb-4">
                Certification may be suspended or withdrawn under the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Failure to address nonconformities within agreed timeframes</li>
                <li>Misuse of certification or marks</li>
                <li>Non-payment of fees</li>
                <li>Failure to allow scheduled audits</li>
                <li>Voluntary request for withdrawal</li>
                <li>Significant changes affecting the certified system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">10. Appeals and Complaints</h2>
              <p className="leading-relaxed">
                We have established procedures for handling appeals and complaints. Any appeals against certification 
                decisions or complaints about our services should be submitted in writing. All appeals and complaints 
                will be investigated impartially and resolved in a timely manner.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">11. Limitation of Liability</h2>
              <p className="leading-relaxed">
                Eurocert's liability is limited to the fees paid for the specific service in question. We shall not 
                be liable for any indirect, incidental, consequential, or special damages. Certification does not 
                guarantee compliance with all applicable requirements or the quality of specific products or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">12. Intellectual Property</h2>
              <p className="leading-relaxed">
                All intellectual property rights in our certification marks, audit reports, and materials remain with 
                Eurocert. Clients receive a limited license to use certification marks as permitted under these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">13. Force Majeure</h2>
              <p className="leading-relaxed">
                Neither party shall be liable for delays or failures in performance resulting from circumstances 
                beyond their reasonable control, including natural disasters, pandemics, government actions, or 
                civil unrest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">14. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. 
                Any disputes shall be subject to the exclusive jurisdiction of the courts in the relevant jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">15. Amendments</h2>
              <p className="leading-relaxed">
                Eurocert reserves the right to modify these Terms and Conditions at any time. Changes will be effective 
                upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">16. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                For questions or concerns regarding these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2">
                <p><strong className="text-white">Eurocert Inspection Services Pvt. Ltd.</strong></p>
                <p>Email: <a href="mailto:info@eurocert.in" className="text-accent hover:underline">info@eurocert.in</a></p>
                <p>Phone: <a href="tel:+917009007527" className="text-accent hover:underline">+91 7009007527</a></p>
                <p>Phone: <a href="tel:+919316012883" className="text-accent hover:underline">+91 9316012883</a></p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
