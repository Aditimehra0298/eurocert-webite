import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F1.png',
  heroTag: 'GFSI-Recognized Food Safety & Quality Standards',
  heroTitle: 'IFS',
  heroAccent: 'Certification',
  heroDescription: 'International Featured Standards — GFSI-recognized food safety and quality certification for food manufacturers, logistics, and brokers',
  introTitle: "Eurocert's",
  introAccent: 'IFS Certification',
  introDescription: 'The International Featured Standards (IFS) are food safety and quality standards recognized by the Global Food Safety Initiative (GFSI). IFS certification demonstrates your commitment to food safety and quality management.',
  whatIsTitle: 'What is IFS?',
  whatIsDescription: 'IFS standards are uniform food safety and quality standards that are recognized by the Global Food Safety Initiative (GFSI). They help ensure that certified companies produce safe products that meet customer specifications.',
  servicesTag: 'Comprehensive Solutions',
  servicesTitle: 'Our IFS',
  servicesAccent: 'Services',
  servicesSubtitle: 'Comprehensive food safety certification solutions for manufacturers, logistics, and brokers',
  services: [
    { icon: 'fa-shield-alt', title: 'IFS Food Standard', description: 'Complete IFS Food certification for food manufacturers, ensuring compliance with GFSI-recognized food safety and quality standards.' },
    { icon: 'fa-truck', title: 'IFS Logistics', description: 'IFS Logistics certification for logistics companies handling food and non-food products, ensuring safe transportation and storage.' },
    { icon: 'fa-handshake', title: 'IFS Broker', description: 'IFS Broker certification for brokers and traders who buy and sell food products, ensuring supply chain integrity.' },
    { icon: 'fa-clipboard-check', title: 'Comprehensive Audit & Assessment', description: 'Thorough on-site and documentation audits to evaluate your food safety management system effectiveness.' },
    { icon: 'fa-graduation-cap', title: 'Training & Consultancy', description: 'Expert coaching and training for your teams on IFS implementation and food safety best practices.' },
    { icon: 'fa-sync-alt', title: 'Ongoing Compliance Support', description: 'Continuous monitoring and support to maintain your IFS certification and food safety standards.' }
  ],
  benefitsAccent: 'IFS Certification',
  benefits: [
    { icon: 'fa-globe', title: 'GFSI Recognition', desc: 'IFS is recognized by the Global Food Safety Initiative, ensuring international credibility.' },
    { icon: 'fa-store', title: 'Market Access', desc: 'Meet the requirements of major European and global retailers for food safety.' },
    { icon: 'fa-utensils', title: 'Food Safety', desc: 'Ensure food safety throughout the entire supply chain from production to distribution.' },
    { icon: 'fa-award', title: 'Quality Assurance', desc: 'Demonstrate your commitment to consistent food quality and safety management.' },
    { icon: 'fa-chart-line', title: 'Competitive Advantage', desc: 'Stand out in the food industry with internationally recognized IFS certification.' }
  ],
  whyChooseText: 'Our experienced auditors understand IFS requirements and can guide you through the certification process. We work with you to ensure successful certification and ongoing compliance with all IFS standards.',
  whyEurocertText: 'Eurocert Asia provides comprehensive IFS certification services with deep expertise in food manufacturing and supply chain safety. Our collaborative approach ensures smooth certification processes and long-term compliance support.',
  relatedServices: [
    { title: 'ISO 22000', subtitle: 'Food Safety Management', image: '/F5.png', link: '/food-certification/iso-22000' },
    { title: 'FSSC 22000', subtitle: 'Food Safety Certification', image: '/F4.png', link: '/food-certification/fssc-22000' },
    { title: 'HACCP', subtitle: 'Hazard Analysis', image: '/F3.png', link: '/food-certification/haccp' }
  ],
  ctaDescription: 'Our IFS certification experts are ready to guide your organization through the certification process with comprehensive support.'
}

export default function IFS() {
  return <FoodPageTemplate data={data} />
}
