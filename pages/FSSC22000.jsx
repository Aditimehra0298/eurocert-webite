import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F4.png',
  heroTag: 'GFSI-Recognized Food Safety Management System',
  heroTitle: 'FSSC 22000',
  heroAccent: 'Certification',
  heroDescription: 'Food Safety System Certification — GFSI-recognized scheme combining ISO 22000 with sector-specific requirements for food manufacturers, packaging, and distribution',
  introTitle: "Eurocert's",
  introAccent: 'FSSC 22000 Certification',
  introDescription: 'FSSC 22000 is a GFSI-recognized food safety management system certification scheme based on ISO 22000. It provides a comprehensive framework for managing food safety risks across the food supply chain.',
  whatIsTitle: 'What is FSSC 22000?',
  whatIsDescription: 'FSSC 22000 is a complete certification scheme for food safety management systems that is recognized by the Global Food Safety Initiative (GFSI). It combines ISO 22000 with additional requirements specific to food safety, including sector-specific PRPs.',
  servicesTag: 'Food Safety Certification',
  servicesTitle: 'Our FSSC 22000',
  servicesAccent: 'Services',
  servicesSubtitle: 'Comprehensive FSSC 22000 certification for food manufacturing, packaging, and distribution',
  services: [
    { icon: 'fa-industry', title: 'Food Manufacturing Certification', description: 'Complete FSSC 22000 certification for food manufacturers, ensuring GFSI-recognized food safety management across production processes.' },
    { icon: 'fa-box', title: 'Packaging Manufacturing', description: 'Certification services for packaging manufacturers to ensure food contact materials meet the highest safety standards.' },
    { icon: 'fa-warehouse', title: 'Storage & Distribution', description: 'Certification for storage and distribution operations ensuring food safety throughout the logistics chain.' },
    { icon: 'fa-search', title: 'Gap Analysis & Preparation', description: 'Pre-audit gap analysis and preparation support to help your organization achieve FSSC 22000 certification readiness.' },
    { icon: 'fa-graduation-cap', title: 'Training & Consultancy', description: 'Expert coaching and training for your teams on FSSC 22000 implementation and food safety best practices.' },
    { icon: 'fa-sync-alt', title: 'Ongoing Compliance', description: 'Continuous monitoring and support to maintain your FSSC 22000 certification and food safety standards.' }
  ],
  benefitsAccent: 'FSSC 22000 Certification',
  benefits: [
    { icon: 'fa-globe', title: 'GFSI Recognition', desc: 'FSSC 22000 is recognized by the Global Food Safety Initiative, ensuring international credibility.' },
    { icon: 'fa-certificate', title: 'International Standard', desc: 'Based on ISO 22000 with sector-specific requirements for comprehensive food safety.' },
    { icon: 'fa-link', title: 'Supply Chain Safety', desc: 'Ensure food safety throughout the entire supply chain from production to distribution.' },
    { icon: 'fa-chart-line', title: 'Continuous Improvement', desc: 'Structured approach to continual improvement of your food safety management system.' },
    { icon: 'fa-store', title: 'Market Access', desc: 'Meet the requirements of major retailers and food industry partners worldwide.' }
  ],
  whyChooseText: 'Our experienced auditors understand FSSC 22000 requirements and can guide you through the certification process. We work with you to ensure successful certification and ongoing compliance with all scheme requirements.',
  whyEurocertText: 'Eurocert Asia provides comprehensive FSSC 22000 certification services with deep expertise in food manufacturing and supply chain safety. Our collaborative approach ensures smooth certification processes and long-term compliance support.',
  relatedServices: [
    { title: 'ISO 22000', subtitle: 'Food Safety Management', image: '/F5.png', link: '/food-certification/iso-22000' },
    { title: 'IFS', subtitle: 'Food Safety Standards', image: '/F1.png', link: '/food-certification/ifs' },
    { title: 'BRC', subtitle: 'Brand Reputation Compliance', image: '/F14.png', link: '/food-certification/brc' }
  ],
  ctaDescription: 'Our FSSC 22000 certification experts are ready to guide your organization through the certification process with comprehensive support.'
}

export default function FSSC22000() {
  return <FoodPageTemplate data={data} />
}
