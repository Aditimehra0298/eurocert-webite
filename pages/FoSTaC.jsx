import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F6.png',
  heroTag: 'FSSAI Mandated Food Safety Training',
  heroTitle: 'FoSTaC',
  heroAccent: 'Training',
  heroDescription: 'Food Safety Training and Certification mandated by FSSAI India. Equip your team with essential knowledge to maintain food safety standards and achieve regulatory compliance.',
  introTitle: 'FoSTaC',
  introAccent: 'Training',
  introDescription: 'Food Safety Training and Certification (FoSTaC) is a comprehensive training program mandated by the Food Safety and Standards Authority of India (FSSAI) for all food business operators. FoSTaC ensures that food handlers, supervisors, and managers possess the necessary knowledge and skills to implement and maintain robust food safety practices across manufacturing, catering, retail, and storage operations.',
  introDescription2: 'Eurocert Asia delivers FSSAI-recognized FoSTaC training programs tailored to your sector and organizational needs. Our certified trainers combine regulatory expertise with practical industry experience to help your team achieve certification and build a strong food safety culture.',
  introImage: '/F6.png',
  whatIsTitle: 'What is FoSTaC?',
  whatIsDescription: 'FoSTaC is a mandatory training and certification scheme introduced by FSSAI under the Food Safety and Standards (Training and Certification) Regulations. It covers basic, advanced, and sector-specific modules—from food handler hygiene to HACCP-based food safety management. Successful completion leads to FSSAI-recognized certification, which is required for licensing and compliance. FoSTaC training must be refreshed periodically to stay current with evolving standards.',
  servicesTag: 'Our FoSTaC Services',
  servicesTitle: 'FoSTaC',
  servicesAccent: 'Training Programs',
  servicesSubtitle: 'Comprehensive Food Safety Training Solutions for FSSAI Compliance',
  services: [
    { icon: 'fa-book', title: 'Basic Level Training', description: 'Foundation-level food safety training covering essential hygiene practices, personal hygiene, and basic food safety management for food handlers and entry-level staff.' },
    { icon: 'fa-graduation-cap', title: 'Advanced Level Training', description: 'In-depth food safety training for supervisors and managers covering HACCP principles, food safety management systems, and regulatory compliance requirements.' },
    { icon: 'fa-industry', title: 'Specialized Sector Training', description: 'Tailored training programs for different food sectors including catering, manufacturing, storage, retail, and distribution operations.' },
    { icon: 'fa-certificate', title: 'Certification Programs', description: 'FSSAI-recognized certification upon successful completion of training, valid for food business operations and licensing requirements.' },
    { icon: 'fa-utensils', title: 'Food Handler Training', description: 'Practical training for food handlers on hygiene, cross-contamination prevention, temperature control, and safe food handling practices.' },
    { icon: 'fa-file-alt', title: 'Compliance Documentation', description: 'Support with training records, certificates, and documentation required for FSSAI licensing and regulatory audits.' }
  ],
  benefitsAccent: 'FoSTaC Training',
  benefits: [
    { icon: 'fa-gavel', title: 'FSSAI Compliance', desc: 'Meet FSSAI-mandated training requirements for food business operators and maintain valid licensing status.' },
    { icon: 'fa-users', title: 'Staff Competence', desc: 'Build a competent workforce with certified knowledge in food safety practices and hazard control.' },
    { icon: 'fa-shield-alt', title: 'Food Safety Culture', desc: 'Foster a culture of food safety awareness and continuous improvement across your organization.' },
    { icon: 'fa-balance-scale', title: 'Legal Requirement', desc: 'Satisfy legal obligations under FSSAI regulations and reduce risk of penalties or license suspension.' },
    { icon: 'fa-heart', title: 'Consumer Safety', desc: 'Protect consumers by ensuring your team follows best practices in food handling and safety.' }
  ],
  whyChooseText: 'Our FSSAI-recognized FoSTaC trainers bring extensive experience in food safety training across multiple sectors. We deliver structured, engaging programs that combine theory with practical scenarios, ensuring your team not only passes the certification exam but applies food safety principles effectively in daily operations.',
  whyEurocertText: 'Eurocert Asia offers FoSTaC training at your premises or our facilities, with flexible scheduling for minimal business disruption. We provide end-to-end support from registration to certification, and help you maintain compliance through refresher training and ongoing guidance.',
  relatedServices: [
    { title: 'HACCP', subtitle: 'Hazard Analysis', image: '/F3.png', link: '/food-certification/haccp' },
    { title: 'ISO 22000', subtitle: 'Food Safety Management', image: '/F5.png', link: '/food-certification/iso-22000' },
    { title: 'GHP', subtitle: 'Good Hygiene Practices', image: '/F18.png', link: '/food-certification/ghp' }
  ],
  ctaDescription: 'Enroll your team in FoSTaC training today. Our FSSAI-recognized trainers are ready to help you achieve certification and build a strong food safety culture.'
}

export default function FoSTaC() {
  return <FoodPageTemplate data={data} />
}
