import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F2.png',
  heroTag: 'Leading Farm Assurance Program Worldwide',
  heroTitle: 'GLOBALGAP',
  heroAccent: 'Certification',
  heroDescription: 'Good Agricultural Practices — the leading farm assurance program for safe and sustainable agriculture, covering crop production, livestock, aquaculture, and supply chain integrity',
  introTitle: "Eurocert's",
  introAccent: 'GLOBALGAP Certification',
  introDescription: 'GLOBALGAP is a leading farm assurance program that sets voluntary standards for the certification of agricultural products worldwide. It ensures safe and sustainable agricultural practices with respect for workers, animal welfare, and the environment.',
  whatIsTitle: 'What is GLOBALGAP?',
  whatIsDescription: 'GLOBALGAP is a private sector body that sets voluntary standards for the certification of agricultural products around the globe. It ensures that certified products are produced safely and sustainably, with respect for workers\' health and safety, animal welfare, and the environment.',
  servicesTag: 'Farm Assurance Solutions',
  servicesTitle: 'Our GLOBALGAP',
  servicesAccent: 'Services',
  servicesSubtitle: 'Comprehensive farm assurance certification for crop production, livestock, aquaculture, and supply chain',
  services: [
    { icon: 'fa-seedling', title: 'Crop Production Standards', description: 'Certification for crop production covering integrated pest management, soil management, water use, and sustainable farming practices.' },
    { icon: 'fa-horse', title: 'Livestock Standards', description: 'Comprehensive certification for livestock production ensuring animal welfare, feed safety, and responsible farming operations.' },
    { icon: 'fa-fish', title: 'Aquaculture Standards', description: 'Certification for aquaculture operations covering sustainable fish farming, environmental impact, and responsible production methods.' },
    { icon: 'fa-link', title: 'Chain of Custody', description: 'Traceability certification ensuring that GLOBALGAP-certified products maintain their certified status throughout the entire supply chain.' },
    { icon: 'fa-search', title: 'Gap Analysis & Preparation', description: 'Pre-audit gap analysis and preparation support to help your farm achieve GLOBALGAP certification readiness.' },
    { icon: 'fa-chalkboard-teacher', title: 'Training & Consultancy', description: 'Expert training programs and consultancy services to prepare your farm for GLOBALGAP certification and maintain compliance.' }
  ],
  benefitsAccent: 'GLOBALGAP Certification',
  benefits: [
    { icon: 'fa-globe', title: 'Global Recognition', desc: 'Internationally recognized farm assurance standard trusted by retailers and buyers worldwide.' },
    { icon: 'fa-store', title: 'Market Access', desc: 'Meet requirements of major retailers worldwide and gain access to premium agricultural markets.' },
    { icon: 'fa-users', title: 'Consumer Confidence', desc: 'Build consumer trust with verified safe and sustainable production practices.' },
    { icon: 'fa-leaf', title: 'Sustainable Agriculture', desc: 'Demonstrate sustainable agricultural practices that protect the environment and conserve resources.' },
    { icon: 'fa-link', title: 'Supply Chain Integrity', desc: 'Ensure traceability and integrity of certified products throughout the supply chain.' }
  ],
  whyChooseText: 'Our experienced auditors understand GLOBALGAP requirements across crop, livestock, and aquaculture sectors. We guide you through the certification process and help you maintain compliance with evolving standard requirements.',
  whyEurocertText: 'Eurocert Asia provides comprehensive GLOBALGAP certification services with expertise in agricultural production systems. Our collaborative approach ensures successful certification and long-term support for farms of all sizes.',
  relatedServices: [
    { title: 'GLOBALGAP GRASP', subtitle: 'Social Practices', image: '/F9.png', link: '/food-certification/globalgap-grasp' },
    { title: 'GLOBALGAP SPRING', subtitle: 'Sustainable Water Use', image: '/F7.png', link: '/food-certification/globalgap-spring' },
    { title: 'GLOBALGAP C.O.C.', subtitle: 'Chain of Custody', image: '/F8.png', link: '/food-certification/globalgap-coc' }
  ],
  ctaDescription: 'Our GLOBALGAP certification experts are ready to guide your farm or operation through the certification process with comprehensive support.'
}

export default function Globalgap() {
  return <FoodPageTemplate data={data} />
}
