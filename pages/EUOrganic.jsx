import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F10.png',
  heroTag: 'European Union Organic Farming Standards',
  heroTitle: 'EU Organic',
  heroAccent: 'Certification',
  heroDescription: 'Certify your products against European Union organic farming and production standards. Access EU organic markets and demonstrate your commitment to sustainable agriculture.',
  introTitle: 'EU Organic',
  introAccent: 'Certification',
  introDescription: 'EU Organic certification ensures that agricultural products and foodstuffs meet the European Union\'s strict organic farming standards. Governed by Regulation (EU) 2018/848, the EU organic logo and certification provide assurance to consumers that products have been produced without synthetic pesticides, fertilizers, or GMOs, with emphasis on animal welfare, biodiversity, and environmental sustainability.',
  introDescription2: 'EU Organic certification covers the entire production chain—from farm inputs and cultivation to processing, packaging, and labeling. Eurocert Asia supports producers and processors seeking to access European organic markets with certification services, compliance guidance, and ongoing monitoring support.',
  introImage: '/F10.png',
  whatIsTitle: 'What is EU Organic?',
  whatIsDescription: 'EU Organic is a certification scheme that verifies compliance with European Union organic farming regulations. It covers crop production, livestock, aquaculture, and processed food. Certified products must meet strict requirements on inputs, conversion periods, traceability, and labeling. The EU organic logo is recognized across member states and in many third countries, providing market access and consumer trust for organic producers worldwide.',
  servicesTag: 'Our EU Organic Services',
  servicesTitle: 'EU Organic',
  servicesAccent: 'Certification',
  servicesSubtitle: 'Comprehensive Organic Certification Solutions for EU Market Access',
  services: [
    { icon: 'fa-leaf', title: 'Organic Certification', description: 'Complete EU Organic certification services ensuring your products meet European Union organic farming standards and regulations.' },
    { icon: 'fa-seedling', title: 'Farming Standards Compliance', description: 'Comprehensive assessment and verification of organic farming practices to ensure full compliance with EU organic standards.' },
    { icon: 'fa-check-circle', title: 'Product Verification', description: 'Thorough verification of organic products throughout the supply chain to ensure integrity and authenticity.' },
    { icon: 'fa-globe-europe', title: 'EU Market Access', description: 'Expert guidance and support to help organic producers access and navigate the European organic market.' },
    { icon: 'fa-file-alt', title: 'Documentation Support', description: 'Assistance with organic management plans, input records, traceability documentation, and certification paperwork.' },
    { icon: 'fa-sync-alt', title: 'Ongoing Monitoring', description: 'Annual surveillance and ongoing compliance support to maintain your EU Organic certification.' }
  ],
  benefitsAccent: 'EU Organic',
  benefits: [
    { icon: 'fa-globe-europe', title: 'EU Market Access', desc: 'Access to European organic markets and expand your reach to eco-conscious consumers.' },
    { icon: 'fa-heart', title: 'Consumer Trust', desc: 'Build consumer confidence in your organic products with EU-recognized certification.' },
    { icon: 'fa-tag', title: 'Premium Pricing', desc: 'Command premium prices for certified organic products in the European market.' },
    { icon: 'fa-tree', title: 'Environmental Protection', desc: 'Demonstrate your commitment to environmental protection and sustainable farming.' },
    { icon: 'fa-leaf', title: 'Sustainable Farming', desc: 'Align with sustainable agriculture principles and biodiversity conservation.' }
  ],
  whyChooseText: 'Our experienced auditors understand EU Organic requirements and the complexities of organic production systems. We provide thorough assessments, clear guidance on compliance gaps, and practical support to help you achieve and maintain certification while meeting the expectations of European buyers.',
  whyEurocertText: 'Eurocert Asia offers EU Organic certification with a collaborative approach. We work closely with producers and processors to navigate conversion periods, input approvals, and documentation requirements. Our European affiliations ensure alignment with EU standards and market expectations.',
  relatedServices: [
    { title: 'GLOBALGAP', subtitle: 'Farm Assurance', image: '/F2.png', link: '/food-certification/globalgap' },
    { title: 'Biodiversity Add-On', subtitle: 'GLOBALG.A.P Biodiversity', image: '/F12.png', link: '/food-certification/biodiversity-add-on' },
    { title: 'GHP', subtitle: 'Good Hygiene Practices', image: '/F18.png', link: '/food-certification/ghp' }
  ],
  ctaDescription: 'Start your EU Organic certification journey. Our organic certification experts are ready to help you access European markets.'
}

export default function EUOrganic() {
  return <FoodPageTemplate data={data} />
}
