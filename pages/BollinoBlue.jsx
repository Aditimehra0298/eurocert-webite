import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F18.png',
  heroTag: 'Italian Quality Certification Mark',
  heroTitle: 'Bollino Blue',
  heroAccent: 'Certification',
  heroDescription: 'The Italian quality mark for fresh produce and agricultural products. Demonstrate compliance with integrated production standards and access Italian retail markets.',
  introTitle: 'Bollino Blue',
  introAccent: 'Certification',
  introDescription: 'Bollino Blue (Blue Label) is an Italian quality certification scheme primarily used for fresh produce, particularly fruits and vegetables. It certifies that products have been produced following strict quality protocols, integrated pest management practices, responsible use of plant protection products, and proper post-harvest handling. The certification is widely recognized in Italian retail markets and provides assurance to consumers and retailers about product quality and safety.',
  introDescription2: 'Eurocert Asia, affiliated with Eurocert SA, provides Bollino Blue certification services to producers seeking to access Italian and European markets. Our experienced auditors understand the scheme requirements and support you through the certification process.',
  introImage: '/F18.png',
  whatIsTitle: 'What is Bollino Blue?',
  whatIsDescription: 'Bollino Blue is a voluntary quality certification program used in the Italian agricultural sector. It focuses on integrated production management, responsible plant protection, product quality and freshness, traceability, and post-harvest handling. Certified products carry the blue label, signaling to buyers that they meet defined quality and safety standards. The scheme complements GLOBALGAP and other farm assurance programs, and is valued by Italian retailers and consumers.',
  servicesTag: 'Our Bollino Blue Services',
  servicesTitle: 'Bollino Blue',
  servicesAccent: 'Certification',
  servicesSubtitle: 'Comprehensive Italian Quality Certification Support',
  services: [
    { icon: 'fa-certificate', title: 'Quality Certification', description: 'Complete Bollino Blue certification services ensuring your products meet Italian quality and integrated production standards.' },
    { icon: 'fa-check-circle', title: 'Standards Compliance', description: 'Comprehensive assessment and verification of integrated production practices and quality protocols.' },
    { icon: 'fa-shield-alt', title: 'Product Safety Verification', description: 'Verification of product safety, residue compliance, and quality parameters throughout the supply chain.' },
    { icon: 'fa-globe-europe', title: 'Italian Market Support', description: 'Expert guidance to help producers access Italian retail markets and meet buyer requirements.' },
    { icon: 'fa-flask', title: 'Testing & Analysis', description: 'Support with residue testing, quality analysis, and compliance verification as required by the scheme.' },
    { icon: 'fa-file-alt', title: 'Compliance Documentation', description: 'Assistance with documentation, records, and traceability systems required for Bollino Blue certification.' }
  ],
  benefitsAccent: 'Bollino Blue',
  benefits: [
    { icon: 'fa-globe-europe', title: 'Italian Market Access', desc: 'Meet the requirements of Italian retailers and distributors for certified fresh produce.' },
    { icon: 'fa-award', title: 'Quality Recognition', desc: 'Demonstrate commitment to product quality and safety through independent third-party verification.' },
    { icon: 'fa-heart', title: 'Consumer Confidence', desc: 'Bollino Blue is a trusted and recognized quality mark among Italian consumers.' },
    { icon: 'fa-tag', title: 'Product Differentiation', desc: 'Differentiate your products in the competitive European fresh produce market.' },
    { icon: 'fa-gavel', title: 'Regulatory Compliance', desc: 'Align with Italian and European quality and safety expectations for fresh produce.' }
  ],
  whyChooseText: 'Our auditors bring expertise in agricultural certification and Italian market requirements. We provide thorough assessments, clear guidance on compliance, and practical support to help you achieve Bollino Blue certification. We understand the integration with GLOBALGAP and other schemes that many Italian buyers expect.',
  whyEurocertText: 'Eurocert Asia, affiliated with Eurocert SA, provides Bollino Blue certification with European connections and local support. Our experienced team ensures a smooth certification process aligned with Italian market requirements and buyer expectations.',
  relatedServices: [
    { title: 'EU Organic', subtitle: 'Organic Certification', image: '/F10.png', link: '/food-certification/eu-organic' },
    { title: 'BRC', subtitle: 'British Retail Consortium', image: '/F14.png', link: '/food-certification/brc' },
    { title: 'GHP', subtitle: 'Good Hygiene Practices', image: '/F18.png', link: '/food-certification/ghp' }
  ],
  ctaDescription: 'Start your Bollino Blue certification journey. Our agricultural certification experts are ready to help you access Italian markets.'
}

export default function BollinoBlue() {
  return <FoodPageTemplate data={data} />
}
