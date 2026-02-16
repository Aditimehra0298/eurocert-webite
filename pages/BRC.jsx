import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F14.png',
  heroTag: 'British Retail Consortium Global Standard for Food Safety',
  heroTitle: 'BRC',
  heroAccent: 'Certification',
  heroDescription: 'BRCGS Global Food Safety Standard—a GFSI-benchmarked certification recognized by retailers worldwide. Demonstrate your commitment to product safety, integrity, and quality.',
  introTitle: 'BRC Global Standard',
  introAccent: 'for Food Safety',
  introDescription: 'The BRC (British Retail Consortium) Global Standard for Food Safety, now known as BRCGS, is one of the most widely recognized food safety standards in the world. Originally developed to evaluate manufacturers supplying retailer-branded products, it has evolved into a global benchmark used by over 30,000 certified sites in more than 130 countries.',
  introDescription2: 'BRCGS provides a comprehensive framework for managing product safety, integrity, legality, and quality. As a GFSI-benchmarked scheme, it is accepted by major retailers across the UK, Europe, and beyond. Eurocert Asia supports food manufacturers through gap assessment, implementation guidance, and certification audits.',
  introImage: '/F14.png',
  whatIsTitle: 'What is BRC?',
  whatIsDescription: 'BRCGS Global Standard for Food Safety sets out detailed requirements for food safety management systems, HACCP-based food safety plans, quality management, and facility standards. The standard covers senior management commitment, site standards, product control, process control, and personnel training. Certification demonstrates to retailers and customers that your operation meets internationally recognized food safety and quality requirements.',
  servicesTag: 'Key BRC Requirements',
  servicesTitle: 'BRC',
  servicesAccent: 'Certification Areas',
  servicesSubtitle: 'Comprehensive BRCGS Audit and Certification Support',
  services: [
    { icon: 'fa-users', title: 'Senior Management & Continual Improvement', description: 'Assessment of senior management commitment to food safety culture and systems for driving continual improvement across the organization.' },
    { icon: 'fa-shield-alt', title: 'HACCP-Based Food Safety Plan', description: 'Development and verification of a comprehensive HACCP-based food safety plan covering all critical control points and hazard analysis requirements.' },
    { icon: 'fa-clipboard-check', title: 'Food Safety & Quality Management', description: 'Comprehensive audit of food safety and quality management systems including documentation, internal audits, and corrective action procedures.' },
    { icon: 'fa-building', title: 'Site Standards & Facility Audit', description: 'Detailed assessment of site standards including facility layout, product flow, hygiene zones, equipment maintenance, and environmental controls.' },
    { icon: 'fa-barcode', title: 'Product Control & Traceability', description: 'Verification of product control systems including allergen management, traceability, product testing, and product integrity throughout the supply chain.' },
    { icon: 'fa-cogs', title: 'Process Control & Personnel Training', description: 'Assessment of process control measures and personnel training programs ensuring all staff are competent in food safety and quality practices.' }
  ],
  benefitsAccent: 'BRC Certification',
  benefits: [
    { icon: 'fa-globe', title: 'Global Recognition', desc: 'BRC is accepted by major retailers worldwide with over 30,000 certified sites in 130+ countries.' },
    { icon: 'fa-certificate', title: 'GFSI Benchmarked', desc: 'Meets international food safety requirements as a GFSI-benchmarked certification scheme.' },
    { icon: 'fa-store', title: 'Market Access', desc: 'Required by many UK and European retailers for food manufacturers and suppliers.' },
    { icon: 'fa-exclamation-triangle', title: 'Risk Reduction', desc: 'Comprehensive approach to food safety management that minimizes risks across operations.' },
    { icon: 'fa-chart-line', title: 'Continuous Improvement', desc: 'Drives operational excellence through structured continual improvement requirements.' }
  ],
  whyChooseText: 'Our BRCGS-qualified auditors bring extensive experience in food manufacturing and safety systems. We provide thorough audits, clear reporting, and practical guidance to help you achieve and maintain BRC certification. Our approach focuses on identifying improvement opportunities, not just compliance gaps.',
  whyEurocertText: 'Eurocert Asia offers end-to-end BRC certification support—from gap assessment and pre-audit preparation to certification audits and surveillance. Our global network and local presence ensure responsive service and ongoing compliance support for your food safety journey.',
  relatedServices: [
    { title: 'IFS', subtitle: 'International Featured Standards', image: '/F1.png', link: '/food-certification/ifs' },
    { title: 'FSSC 22000', subtitle: 'Food Safety System Certification', image: '/F4.png', link: '/food-certification/fssc-22000' },
    { title: 'HACCP', subtitle: 'Hazard Analysis', image: '/F3.png', link: '/food-certification/haccp' }
  ],
  ctaDescription: 'Start your BRC certification journey. Our BRCGS-qualified auditors are ready to guide you through the process with comprehensive support.'
}

export default function BRC() {
  return <FoodPageTemplate data={data} />
}
