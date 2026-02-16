import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UniverseBackground from '../components/UniverseBackground'

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-gray-500">Last updated: January 2024</p>
          </div>

          {/* Content */}
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-gray-200 space-y-8 text-gray-600">
            
            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Eurocert Inspection Services Pvt. Ltd. ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website or use our certification and inspection services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">We may collect information about you in various ways, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Personal Data:</strong> Name, email address, phone number, company name, and job title when you fill out forms or contact us.</li>
                <li><strong className="text-white">Business Information:</strong> Company details required for certification audits and inspections.</li>
                <li><strong className="text-white">Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, and pages visited.</li>
                <li><strong className="text-white">Communication Data:</strong> Records of correspondence when you contact us.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, operate, and maintain our certification and inspection services</li>
                <li>Process your requests, inquiries, and applications</li>
                <li>Send you service-related communications and updates</li>
                <li>Improve our website and services</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">4. Information Sharing</h2>
              <p className="leading-relaxed mb-4">We may share your information in the following situations:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">With Accreditation Bodies:</strong> As required for certification processes</li>
                <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong className="text-white">Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets</li>
                <li><strong className="text-white">With Your Consent:</strong> For any other purpose with your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">6. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in 
                this Privacy Policy, unless a longer retention period is required by law. Certification records 
                are maintained as per accreditation body requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">7. Your Rights</h2>
              <p className="leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">8. Cookies</h2>
              <p className="leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. 
                You can set your browser to refuse cookies, but some features of our website may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">9. Third-Party Links</h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices of these websites and encourage you to read their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">10. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-800 mb-4">11. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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
