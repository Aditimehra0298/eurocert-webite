import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceBar from './components/ServiceBar';
import SectorsSlider from './components/SectorsSlider';
import AboutSection from './components/AboutSection';
import NewsSection from './components/NewsSection';
import StandardsMarquee from './components/StandardsMarquee';
import GlobalPresenceMap from './components/GlobalPresenceMap';
import CoreServices from './components/CoreServices';
import WhyChooseUs from './components/WhyChooseUs';
import ProcessSection from './components/ProcessSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CECertification from './CECertification';
import MedicalDevices from './MedicalDevices';
import FoodCertification from './FoodCertification';
import SocialAudits from './SocialAudits';
import Sustainability from './Sustainability';
import ManagementSystems from './ManagementSystems';
import ConstructionProducts from './ConstructionProducts';
import Machinery from './Machinery';
import LVDEMC from './LVDEMC';
import ElectricalProducts from '../pages/ElectricalProducts';
import RoHS from './RoHS';
import PImark from './PImark';
import Lifts from './Lifts';
import Cement from './Cement';
import PED from './PED';
import REACH from './REACH';
import ATEX from './ATEX';
import Railway from './Railway';
import MarineEquipment from './MarineEquipment';
import WelderQualifications from './WelderQualifications';
import Accreditations from './Accreditations';
import GMPCertification from './GMPCertification';
import ContactUs from './ContactUs';
import Training from './Training';
import FSSCV6Transition from './FSSCV6Transition';
import ChildLabourPolicy from './ChildLabourPolicy';
import ForcedLabourPolicy from './ForcedLabourPolicy';
import QualityPolicy from './QualityPolicy';
import PrivacyPolicy from './PrivacyPolicy';
import CertifiedClients from './CertifiedClients';
import ProductCatalogue from './ProductCatalogue';
import Grievance from './Grievance';
import SLCPCertification from './posts/SLCPCertification';
import CTPATSecurityCriteria from './posts/CTPATSecurityCriteria';
import CTPATComplianceVsValidation from './posts/CTPATComplianceVsValidation';
import SedexSelfAssessment from './posts/SedexSelfAssessment';
import SA8000Certification from './posts/SA8000Certification';
import BecomeAssociate from './posts/BecomeAssociate';
import BenefitsAssociate from './posts/BenefitsAssociate';
import ConsentBanner from './components/ConsentBanner';
import RecentPosts from './components/RecentPosts';
import ISO3834 from './ISO3834';
import ISO9001 from './ISO9001';
import ISO14001 from './ISO14001';
import ISO14064 from './ISO14064';
import ISO18788 from './ISO18788';
import ISO20000 from './ISO20000';
import ISO22000 from './ISO22000';
import ISO22301 from './ISO22301';
import ISO22716 from './ISO22716';
import ISO26000 from './ISO26000';
import ISO27001 from './ISO27001';
import ISO27017 from './ISO27017';
import ISO27018 from './ISO27018';
import ISO28000 from './ISO28000';
import WRAP from './WRAP';
import MLC from './MLC';
import SLCP from './SLCP';
import ISO37001 from './ISO37001';
import ISO39001 from './ISO39001';
import ISO45001 from './ISO45001';
import ISO50001 from './ISO50001';
import ISO55001 from './ISO55001';
import EN15038 from './EN15038';
import EN15224 from './EN15224';
import BS10012 from './BS10012';
import SustainabilityCertifications from './SustainabilityCertifications';
import CarbonFootprint from './CarbonFootprint';
import BRSR from './BRSR';
import SA8000 from './SA8000';
import SEDEX from './SEDEX';
import RJC from './RJC';
import RMI from './RMI';
import CTPAT from './CTPAT';
import CodeOfConduct from './CodeOfConduct';
import ISO26000Social from './ISO26000Social';
import ISO28000Social from './ISO28000Social';
import ISO37001Social from './ISO37001Social';
import ASI from './ASI';
import AboutEurocert from './AboutEurocert';
import NGOList from './NGOList';
import CTPATLogin from './CTPATLogin';
import CTPATRegister from './CTPATRegister';
import CTPATForgotPassword from './CTPATForgotPassword';
import { AuthProvider } from './contexts/AuthProvider';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import ProtectedRoute from './admin/ProtectedRoute';
import DynamicPost from './admin/DynamicPost';

// Food & Agri individual certification pages
import IFS from '../pages/IFS';
import Globalgap from '../pages/Globalgap';
import GlobalgapCOC from '../pages/GlobalgapCOC';
import GlobalgapGrasp from '../pages/GlobalgapGrasp';
import GlobalgapSpring from '../pages/GlobalgapSpring';
import HACCP from '../pages/HACCP';
import FSSC22000 from '../pages/FSSC22000';
import FoSTaC from '../pages/FoSTaC';
import EUOrganic from '../pages/EUOrganic';
import AHDLLGrow from '../pages/AHDLLGrow';
import TescoNaturesChoice from '../pages/TescoNaturesChoice';
import NonGMOAnimalFeed from '../pages/NonGMOAnimalFeed';
import NonGMOProducts from '../pages/NonGMOProducts';
import GHPFood from '../pages/GHP';
import ISO22000Food from '../pages/ISO22000';
import ISO22000ProcessCertificate from '../pages/ISO22000ProcessCertificate';
import ISO22000SuspensionPolicy from '../pages/ISO22000SuspensionPolicy';
import ISO22000CertificationMarks from '../pages/ISO22000CertificationMarks';
import ISO22000Complaints from '../pages/ISO22000Complaints';
import ISO22000Appeals from '../pages/ISO22000Appeals';
import AlbertHeijn from '../pages/AlbertHeijn';
import BollinoBlue from '../pages/BollinoBlue';
import BiodiversityAddOn from '../pages/BiodiversityAddOn';
import PEDCertificationGuide from './blog/PED-Certification-Guide';

function HomePage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <ServiceBar />
      <SectorsSlider />
      <AboutSection />
      <CoreServices />
      <GlobalPresenceMap />
      <NewsSection />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <StandardsMarquee />
      <ContactSection />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <ConsentBanner />
      <RecentPosts />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ce-certification" element={<CECertification />} />
        <Route path="/medical-devices" element={<MedicalDevices />} />
        <Route path="/food-certification" element={<FoodCertification />} />
        <Route path="/social-audits" element={<SocialAudits />} />
        <Route path="/social-audits/wrap" element={<WRAP />} />
        <Route path="/social-audits/mlc" element={<MLC />} />
        <Route path="/social-audits/slcp" element={<SLCP />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/sustainability/certifications" element={<SustainabilityCertifications />} />
        <Route path="/sustainability/carbon-footprint" element={<CarbonFootprint />} />
        <Route path="/sustainability/brsr" element={<BRSR />} />
        <Route path="/management-systems" element={<ManagementSystems />} />
        <Route path="/management-system/iso-3834" element={<ISO3834 />} />
        <Route path="/management-system/iso-9001" element={<ISO9001 />} />
        <Route path="/management-system/iso-14001" element={<ISO14001 />} />
        <Route path="/management-system/iso-14064" element={<ISO14064 />} />
        <Route path="/management-system/iso-18788" element={<ISO18788 />} />
        <Route path="/management-system/iso-20000" element={<ISO20000 />} />
        <Route path="/management-system/iso-22000" element={<ISO22000 />} />
        <Route path="/management-system/iso-22301" element={<ISO22301 />} />
        <Route path="/management-system/iso-22716" element={<ISO22716 />} />
        <Route path="/management-system/iso-26000" element={<ISO26000 />} />
        <Route path="/management-system/iso-27001" element={<ISO27001 />} />
        <Route path="/management-system/iso-27017" element={<ISO27017 />} />
        <Route path="/management-system/iso-27018" element={<ISO27018 />} />
        <Route path="/management-system/iso-28000" element={<ISO28000 />} />
        <Route path="/management-system/iso-37001" element={<ISO37001 />} />
        <Route path="/management-system/iso-39001" element={<ISO39001 />} />
        <Route path="/management-system/iso-45001" element={<ISO45001 />} />
        <Route path="/management-system/iso-50001" element={<ISO50001 />} />
        <Route path="/management-system/iso-55001" element={<ISO55001 />} />
        <Route path="/management-system/en-15038" element={<EN15038 />} />
        <Route path="/management-system/en-15224" element={<EN15224 />} />
        <Route path="/management-system/bs-10012" element={<BS10012 />} />
        <Route path="/construction-products" element={<ConstructionProducts />} />
        <Route path="/machinery" element={<Machinery />} />
        <Route path="/lvd-emc" element={<LVDEMC />} />
        <Route path="/electrical-electronic-products" element={<ElectricalProducts />} />
        <Route path="/rohs" element={<RoHS />} />
        <Route path="/pi-mark" element={<PImark />} />
        <Route path="/lifts" element={<Lifts />} />
        <Route path="/cement" element={<Cement />} />
        <Route path="/ped" element={<PED />} />
        <Route path="/reach" element={<REACH />} />
        <Route path="/atex" element={<ATEX />} />
        <Route path="/railway" element={<Railway />} />
        <Route path="/marine-equipment" element={<MarineEquipment />} />
        <Route path="/welder-qualifications" element={<WelderQualifications />} />
        <Route path="/accreditations" element={<Accreditations />} />
        <Route path="/gmp-certification" element={<GMPCertification />} />
        <Route path="/about" element={<AboutEurocert />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/training" element={<Training />} />
        <Route path="/fssc-v6-transition" element={<FSSCV6Transition />} />
        <Route path="/child-labour-policy" element={<ChildLabourPolicy />} />
        <Route path="/forced-labour-policy" element={<ForcedLabourPolicy />} />
        <Route path="/quality-policy" element={<QualityPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/certified-clients" element={<CertifiedClients />} />
        <Route path="/product-catalogue" element={<ProductCatalogue />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/post/slcp-certification" element={<SLCPCertification />} />
        <Route path="/post/ctpat-minimum-security-criteria" element={<CTPATSecurityCriteria />} />
        <Route path="/post/ctpat-compliance-vs-validation" element={<CTPATComplianceVsValidation />} />
        <Route path="/post/sedex-self-assessment" element={<SedexSelfAssessment />} />
        <Route path="/post/sa-8000-certification" element={<SA8000Certification />} />
        <Route path="/post/become-associate" element={<BecomeAssociate />} />
        <Route path="/post/benefits-associate" element={<BenefitsAssociate />} />
        <Route path="/post/ped-certification-guide" element={<PEDCertificationGuide />} />
        <Route path="/social-audits/sa-8000" element={<SA8000 />} />
        <Route path="/social-audits/sedex" element={<SEDEX />} />
        <Route path="/social-audits/rjc" element={<RJC />} />
        <Route path="/social-audits/rmi" element={<RMI />} />
        <Route path="/social-audits/ctpat" element={<CTPAT />} />
        <Route path="/social-audits/code-of-conduct" element={<CodeOfConduct />} />
        <Route path="/social-audits/iso-26000" element={<ISO26000Social />} />
        <Route path="/social-audits/iso-28000" element={<ISO28000Social />} />
        <Route path="/social-audits/iso-37001" element={<ISO37001Social />} />
        <Route path="/social-audits/asi" element={<ASI />} />
        <Route path="/social-audits/ngo-list" element={<NGOList />} />
        <Route path="/ctpat-login" element={<CTPATLogin />} />
        <Route path="/ctpat-register" element={<CTPATRegister />} />
        <Route path="/ctpat-forgot-password" element={<CTPATForgotPassword />} />

        {/* Food & Agri Certification Pages */}
        <Route path="/food-certification/ifs" element={<IFS />} />
        <Route path="/food-certification/globalgap" element={<Globalgap />} />
        <Route path="/food-certification/globalgap-coc" element={<GlobalgapCOC />} />
        <Route path="/food-certification/globalgap-grasp" element={<GlobalgapGrasp />} />
        <Route path="/food-certification/globalgap-spring" element={<GlobalgapSpring />} />
        <Route path="/food-certification/haccp" element={<HACCP />} />
        <Route path="/food-certification/fssc-22000" element={<FSSC22000 />} />
        <Route path="/food-certification/fostac" element={<FoSTaC />} />
        <Route path="/food-certification/eu-organic" element={<EUOrganic />} />
        <Route path="/food-certification/ah-dll-grow" element={<AHDLLGrow />} />
        <Route path="/food-certification/tesco-natures-choice" element={<TescoNaturesChoice />} />
        <Route path="/food-certification/non-gmo-animal-feed" element={<NonGMOAnimalFeed />} />
        <Route path="/food-certification/non-gmo-products" element={<NonGMOProducts />} />
        <Route path="/food-certification/ghp" element={<GHPFood />} />
        <Route path="/food-certification/iso-22000" element={<ISO22000Food />} />
        <Route path="/food-certification/iso-22000/process-certificate" element={<ISO22000ProcessCertificate />} />
        <Route path="/food-certification/iso-22000/suspension-policy" element={<ISO22000SuspensionPolicy />} />
        <Route path="/food-certification/iso-22000/certification-marks" element={<ISO22000CertificationMarks />} />
        <Route path="/food-certification/iso-22000/complaints" element={<ISO22000Complaints />} />
        <Route path="/food-certification/iso-22000/appeals" element={<ISO22000Appeals />} />
        <Route path="/food-certification/albert-heijn" element={<AlbertHeijn />} />
        <Route path="/food-certification/bollino-blue" element={<BollinoBlue />} />
        <Route path="/food-certification/brc" element={<BRC />} />
        <Route path="/food-certification/biodiversity-add-on" element={<BiodiversityAddOn />} />

        {/* Dynamic Post Route */}
        <Route path="/post/:slug" element={<DynamicPost />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
