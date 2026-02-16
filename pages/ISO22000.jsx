import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F5.png',
  heroTag: 'International Food Safety Management Standard',
  heroTitle: 'ISO 22000',
  heroAccent: 'Certification',
  heroDescription: 'International standard for food safety management systems — a framework for organizations in the food chain to ensure food safety from farm to fork',
  introTitle: "Eurocert's",
  introAccent: 'ISO 22000 Certification',
  introDescription: 'ISO 22000 is an international standard that specifies requirements for a food safety management system. It helps organizations in the food chain ensure food safety through a systematic, risk-based approach.',
  whatIsTitle: 'What is ISO 22000?',
  whatIsDescription: 'ISO 22000 is an international standard that specifies requirements for a food safety management system. It helps organizations in the food chain ensure food safety by providing a framework for managing food safety risks, combining the HACCP principles with prerequisite programs.',
  servicesTag: 'Food Safety Management',
  servicesTitle: 'Our ISO 22000',
  servicesAccent: 'Services',
  servicesSubtitle: 'Comprehensive ISO 22000 implementation and certification support',
  services: [
    { icon: 'fa-cogs', title: 'FSMS Implementation', description: 'Complete implementation of ISO 22000-compliant food safety management systems tailored to your organization\'s processes and food chain position.' },
    { icon: 'fa-clipboard-check', title: 'Certification Audits', description: 'Thorough certification audits conducted by experienced food safety auditors to verify compliance with all ISO 22000 requirements.' },
    { icon: 'fa-graduation-cap', title: 'Internal Auditor Training', description: 'Comprehensive training programs to build internal competence in food safety management and ISO 22000 auditing.' },
    { icon: 'fa-search', title: 'Gap Analysis', description: 'Pre-audit gap analysis to identify areas for improvement and prepare your organization for certification.' },
    { icon: 'fa-file-alt', title: 'Documentation Support', description: 'Expert guidance on developing and maintaining the documentation required for ISO 22000 compliance.' },
    { icon: 'fa-sync-alt', title: 'Surveillance & Recertification', description: 'Ongoing surveillance audits and recertification support to maintain your ISO 22000 certification.' }
  ],
  benefitsAccent: 'ISO 22000 Certification',
  benefits: [
    { icon: 'fa-globe', title: 'International Recognition', desc: 'Globally recognized standard for food safety management systems.' },
    { icon: 'fa-project-diagram', title: 'Systematic Approach', desc: 'Structured framework for hazard analysis and risk-based food safety management.' },
    { icon: 'fa-gavel', title: 'Regulatory Compliance', desc: 'Meet local and international food safety regulatory requirements.' },
    { icon: 'fa-handshake', title: 'Stakeholder Confidence', desc: 'Build confidence among customers, regulators, and supply chain partners.' },
    { icon: 'fa-chart-line', title: 'Continuous Improvement', desc: 'Drive continual improvement of your food safety performance.' }
  ],
  whyChooseText: 'Our experienced auditors understand ISO 22000 requirements and can guide you through the certification process. We work with you to ensure successful implementation and ongoing compliance with the standard.',
  whyEurocertText: 'Eurocert Asia provides comprehensive ISO 22000 certification services with deep expertise in food safety management systems. Our collaborative approach ensures smooth certification processes and long-term compliance support.',
  relatedServices: [
    { title: 'FSSC 22000', subtitle: 'Food Safety Certification', image: '/F4.png', link: '/food-certification/fssc-22000' },
    { title: 'HACCP', subtitle: 'Hazard Analysis', image: '/F3.png', link: '/food-certification/haccp' },
    { title: 'IFS', subtitle: 'Food Safety Standards', image: '/F1.png', link: '/food-certification/ifs' }
  ],
  ctaDescription: 'Our ISO 22000 certification experts are ready to guide your organization through the certification process with comprehensive support.'
}

export default function ISO22000() {
  return <FoodPageTemplate data={data} />
}
