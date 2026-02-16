import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F12.png',
  heroTag: 'GLOBALGAP Biodiversity Module for Sustainable Agriculture',
  heroTitle: 'Biodiversity',
  heroAccent: 'Add-On',
  heroDescription: 'The GLOBALGAP Biodiversity Add-On helps farmers assess and improve biodiversity on their farms, integrating habitat management, species conservation, and ecological practices into agricultural operations.',
  introTitle: 'Biodiversity',
  introAccent: 'Add-On',
  introDescription: 'The GLOBALGAP Biodiversity Add-On is a voluntary module that helps farmers assess, monitor, and enhance biodiversity on and around their farms. It provides a framework for integrating biodiversity conservation into agricultural practices—covering habitat management, species conservation, soil health, water management, and ecological corridor maintenance. The add-on helps producers meet growing retailer and consumer demand for biodiversity-friendly agricultural products.',
  whatIsTitle: 'What is the Biodiversity Add-On?',
  whatIsDescription: 'The GLOBALGAP Biodiversity Add-On is a voluntary assessment module designed to help farmers understand, monitor, and enhance biodiversity on and around their farms. It covers habitat creation and management, species conservation, soil health, water management, pollinator support, and ecological corridor maintenance. The module drives sustainable agricultural practices and enables producers to demonstrate their commitment to environmental stewardship and biodiversity conservation.',
  servicesTitle: 'Our Biodiversity',
  servicesAccent: 'Services',
  services: [
    { icon: 'fa-globe', title: 'Biodiversity Assessment', description: 'Comprehensive on-farm biodiversity assessment to evaluate current biodiversity levels, habitats, and ecological footprint.' },
    { icon: 'fa-certificate', title: 'Biodiversity Certification', description: 'Full certification services for the GLOBALGAP Biodiversity Add-On, ensuring compliance with biodiversity conservation requirements.' },
    { icon: 'fa-clipboard-check', title: 'Improvement Plans', description: 'Development of actionable biodiversity improvement plans covering habitat creation, species conservation, and ecological management.' },
    { icon: 'fa-tree', title: 'Environmental Impact', description: 'Detailed evaluation of environmental impact including soil health, water management, pollinator support, and ecological corridors.' },
    { icon: 'fa-graduation-cap', title: 'Training Programs', description: 'Training programs for farm managers and workers on biodiversity conservation practices and sustainable agriculture.' },
    { icon: 'fa-sync-alt', title: 'Monitoring Support', description: 'Continuous monitoring of biodiversity indicators and ongoing support to maintain certification and improve ecological outcomes.' }
  ],
  benefitsAccent: 'Biodiversity Add-On',
  benefits: [
    { icon: 'fa-leaf', title: 'Conservation', desc: 'Actively contribute to the conservation of biodiversity and natural habitats on and around your farm.' },
    { icon: 'fa-store', title: 'Retailer Requirements', desc: 'Meet the growing demand from retailers and consumers for biodiversity-friendly agricultural products.' },
    { icon: 'fa-tree', title: 'Environmental Stewardship', desc: 'Demonstrate your commitment to environmental stewardship and sustainable farming practices.' },
    { icon: 'fa-seedling', title: 'Ecosystem Services', desc: 'Enhance ecosystem services like pollination, natural pest control, and soil fertility through biodiversity management.' },
    { icon: 'fa-tag', title: 'Market Differentiation', desc: 'Differentiate your products in the marketplace with a recognized biodiversity certification add-on.' }
  ],
  whyChooseText: 'Our experienced assessors understand biodiversity requirements within agricultural contexts. We provide thorough on-farm assessments, practical improvement recommendations tailored to your operations, and support to help you achieve and maintain the GLOBALGAP Biodiversity Add-On certification.',
  whyEurocertText: 'Eurocert Asia offers comprehensive GLOBALGAP Biodiversity Add-On certification services with expertise in agricultural ecology and biodiversity conservation. We work collaboratively with farms to integrate biodiversity practices and demonstrate environmental stewardship to buyers and markets.',
  relatedServices: [
    { title: 'GLOBALGAP', subtitle: 'Farm Assurance', image: '/F2.png', link: '/food-certification/globalgap' },
    { title: 'GLOBALGAP GRASP', subtitle: 'Social Practices', image: '/F9.png', link: '/food-certification/globalgap-grasp' },
    { title: 'EU Organic', subtitle: 'Organic Standards', image: '/F10.png', link: '/food-certification/eu-organic' }
  ]
}

export default function BiodiversityAddOn() {
  return <FoodPageTemplate data={data} />
}
