import Header from '../components/Header'
import Footer from '../components/Footer'
import UniverseBackground from '../components/UniverseBackground'
import NeuralCanvas from '../components/NeuralCanvas'
import Hero from '../components/Hero'
import ServiceCircles from '../components/ServiceCircles'
import ISMBanner from '../components/ISMBanner'
import ServiceCards from '../components/ServiceCards'
import WhoWeAre from '../components/WhoWeAre'
import LatestNews from '../components/LatestNews'
import CertificationsMatrix from '../components/CertificationsMatrix'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div className="font-sans antialiased selection:bg-accent selection:text-white">
      {/* Global Visual Engine */}
      <UniverseBackground />
      <NeuralCanvas />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Universe Themed Wrapper */}
      <div className="relative">
        {/* Strategic Sectors - 8 Circle Grid */}
        <ServiceCircles />

        {/* ISM Banner Section */}
        <ISMBanner />

        {/* 4 Square Service Cards */}
        <ServiceCards />

        {/* Who We Are Section */}
        <WhoWeAre />

        {/* Latest News Section */}
        <LatestNews />

        {/* Certifications Matrix Section */}
        <CertificationsMatrix />

        {/* Get a Quote Section */}
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
