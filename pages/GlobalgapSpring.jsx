import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F7.png',
  heroTag: 'Sustainable Water Use in Agricultural Production',
  heroTitle: 'GLOBALGAP',
  heroAccent: 'SPRING',
  heroDescription: 'GLOBALGAP SPRING (Sustainable Program for Irrigation and Groundwater Use) addresses sustainable water management in agricultural production, including irrigation practices, groundwater protection, and water stewardship.',
  introTitle: 'GLOBALGAP',
  introAccent: 'SPRING',
  introDescription: 'GLOBALGAP SPRING is a voluntary add-on module to GLOBALGAP that focuses on sustainable water use in agricultural production. It addresses irrigation efficiency, groundwater protection, water quality monitoring, and sustainable water management practices. SPRING helps producers demonstrate responsible water stewardship and meet the growing demand from retailers and consumers for water-sustainable agricultural products.',
  whatIsTitle: 'What is GLOBALGAP SPRING?',
  whatIsDescription: 'GLOBALGAP SPRING (Sustainable Program for Irrigation and Groundwater Use) is a voluntary add-on module that focuses on sustainable water management in agricultural production. It covers irrigation system efficiency, groundwater protection measures, water quality monitoring, and sustainable water use planning. SPRING helps farms reduce water waste, protect water resources, and demonstrate environmental stewardship—increasingly important for market access and regulatory compliance.',
  servicesTitle: 'Our SPRING',
  servicesAccent: 'Services',
  services: [
    { icon: 'fa-tint', title: 'SPRING Certification', description: 'Full certification services for GLOBALGAP SPRING compliance, ensuring sustainable water use in your agricultural operations.' },
    { icon: 'fa-water', title: 'Water Management Assessment', description: 'Comprehensive assessment of your water management practices to ensure sustainable and efficient water use in agriculture.' },
    { icon: 'fa-shower', title: 'Irrigation Evaluation', description: 'Detailed evaluation of irrigation systems and practices to optimize water use and reduce environmental impact.' },
    { icon: 'fa-shield-alt', title: 'Groundwater Protection', description: 'Verification of groundwater protection measures to ensure sustainable management of underground water resources.' },
    { icon: 'fa-leaf', title: 'Sustainability Planning', description: 'Development of water sustainability plans and improvement strategies tailored to your farm operations.' },
    { icon: 'fa-sync-alt', title: 'Monitoring Support', description: 'Continuous monitoring and support to maintain your GLOBALGAP SPRING certification and water sustainability standards.' }
  ],
  benefitsAccent: 'SPRING Certification',
  benefits: [
    { icon: 'fa-tint', title: 'Water Sustainability', desc: 'Demonstrate sustainable water management practices in your agricultural operations.' },
    { icon: 'fa-leaf', title: 'Environmental Stewardship', desc: 'Protect groundwater resources and promote responsible water stewardship.' },
    { icon: 'fa-recycle', title: 'Resource Efficiency', desc: 'Improve water use efficiency and reduce waste in irrigation and production.' },
    { icon: 'fa-gavel', title: 'Regulatory Compliance', desc: 'Meet water management requirements and environmental regulations effectively.' },
    { icon: 'fa-tag', title: 'Market Differentiation', desc: 'Stand out with proven sustainable water practices and attract eco-conscious buyers.' }
  ],
  whyChooseText: 'Our experienced auditors understand GLOBALGAP SPRING requirements and sustainable water management in agriculture. We provide thorough assessments of irrigation systems and water practices, practical guidance for improvement, and support to help you achieve and maintain SPRING certification.',
  whyEurocertText: 'Eurocert Asia offers comprehensive GLOBALGAP SPRING certification services with expertise in agricultural water management. We work collaboratively with farms to optimize water use, protect water resources, and demonstrate sustainability to buyers and regulators.',
  relatedServices: [
    { title: 'GLOBALGAP', subtitle: 'Farm Assurance', image: '/F2.png', link: '/food-certification/globalgap' },
    { title: 'EU Organic', subtitle: 'Organic Standards', image: '/F10.png', link: '/food-certification/eu-organic' },
    { title: 'Biodiversity Add-On', subtitle: 'GLOBALGAP Biodiversity', image: '/F12.png', link: '/food-certification/biodiversity-add-on' }
  ]
}

export default function GlobalgapSpring() {
  return <FoodPageTemplate data={data} />
}
