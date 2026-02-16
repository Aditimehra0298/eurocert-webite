import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F3.png',
  heroTag: 'Systematic Preventive Approach to Food Safety',
  heroTitle: 'HACCP',
  heroAccent: 'Certification',
  heroDescription: 'Hazard Analysis and Critical Control Points — a systematic preventive approach that identifies, evaluates, and controls food safety hazards from production to consumption',
  introTitle: "Eurocert's",
  introAccent: 'HACCP Certification',
  introDescription: 'Hazard Analysis and Critical Control Points (HACCP) is a systematic preventive approach to food safety that identifies, evaluates, and controls hazards in food production. HACCP certification demonstrates your commitment to science-based food safety management.',
  whatIsTitle: 'What is HACCP?',
  whatIsDescription: 'HACCP is a management system in which food safety is addressed through the analysis and control of biological, chemical, and physical hazards from raw material production, procurement, and handling, to manufacturing, distribution, and consumption of the finished product.',
  servicesTag: 'Food Safety Solutions',
  servicesTitle: 'Our HACCP',
  servicesAccent: 'Services',
  servicesSubtitle: 'Comprehensive HACCP implementation, training, and certification support',
  services: [
    { icon: 'fa-clipboard-check', title: 'HACCP System Development', description: 'Complete development and implementation of HACCP systems tailored to your food production processes, covering all seven HACCP principles.' },
    { icon: 'fa-graduation-cap', title: 'HACCP Training & Certification', description: 'Comprehensive training programs for your team on HACCP principles, hazard analysis, critical control points, and food safety management.' },
    { icon: 'fa-shield-alt', title: 'HACCP Audits & Verification', description: 'Thorough HACCP audits and verification activities to ensure your food safety system is functioning effectively and meeting all requirements.' },
    { icon: 'fa-flask', title: 'Food Safety Regulatory Compliance', description: 'Expert guidance on meeting local and international food safety regulations through a robust HACCP-based management system.' },
    { icon: 'fa-chalkboard-teacher', title: 'Training & Consultancy', description: 'Expert consultancy and staff training programs to build internal capability for developing and maintaining effective HACCP systems.' },
    { icon: 'fa-sync-alt', title: 'Ongoing Compliance Support', description: 'Continuous monitoring and support to maintain your HACCP certification and adapt to evolving food safety standards and regulations.' }
  ],
  benefitsAccent: 'HACCP Certification',
  benefits: [
    { icon: 'fa-utensils', title: 'Food Safety', desc: 'Ensure food safety throughout production with systematic hazard analysis and control measures.' },
    { icon: 'fa-gavel', title: 'Regulatory Compliance', desc: 'Meet local and international food safety regulatory requirements with a recognized system.' },
    { icon: 'fa-exclamation-triangle', title: 'Risk Management', desc: 'Identify and control biological, chemical, and physical food safety hazards proactively.' },
    { icon: 'fa-users', title: 'Customer Confidence', desc: 'Build customer confidence in your products with a proven food safety management approach.' },
    { icon: 'fa-store', title: 'Market Access', desc: 'Meet requirements of food safety-conscious buyers and access premium markets worldwide.' }
  ],
  whyChooseText: 'Our experienced auditors understand HACCP requirements and can guide you through the implementation and certification process. We work with you to ensure effective food safety management based on the seven HACCP principles.',
  whyEurocertText: 'Eurocert Asia provides comprehensive HACCP certification services with deep expertise in hazard analysis and food safety systems. Our collaborative approach ensures successful implementation and long-term compliance support.',
  relatedServices: [
    { title: 'ISO 22000', subtitle: 'Food Safety Management', image: '/F5.png', link: '/food-certification/iso-22000' },
    { title: 'FSSC 22000', subtitle: 'Food Safety Certification', image: '/F4.png', link: '/food-certification/fssc-22000' },
    { title: 'IFS', subtitle: 'Food Safety Standards', image: '/F1.png', link: '/food-certification/ifs' }
  ],
  ctaDescription: 'Our HACCP certification experts are ready to guide your organization through implementation and certification with comprehensive support.'
}

export default function HACCP() {
  return <FoodPageTemplate data={data} />
}
