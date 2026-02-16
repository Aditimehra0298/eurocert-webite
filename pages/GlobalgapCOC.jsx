import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F8.png',
  heroTag: 'Supply Chain Traceability from Farm to Consumer',
  heroTitle: 'GLOBALGAP',
  heroAccent: 'Chain of Custody',
  heroDescription: 'GLOBALGAP Chain of Custody certification ensures that certified products maintain their integrity and traceability as they move through the supply chain—from farm to packing, distribution, and consumer.',
  introTitle: 'GLOBALGAP',
  introAccent: 'C.O.C. Certification',
  introDescription: 'GLOBALGAP Chain of Custody (C.O.C.) is a certification scheme designed for supply chain operators—packers, traders, distributors, and retailers—who handle GLOBALGAP-certified products. It verifies that certified products retain their identity and certification status at every stage of handling, ensuring complete traceability and product integrity from farm to consumer.',
  whatIsTitle: 'What is GLOBALGAP C.O.C.?',
  whatIsDescription: 'GLOBALGAP Chain of Custody (C.O.C.) is a certification scheme that ensures the integrity of certified products as they move through the supply chain. It provides documented traceability from farm to consumer, verifies segregation of certified and non-certified products, and ensures that certified products maintain their identity through handling, packing, storage, and distribution. C.O.C. certification is essential for supply chain operators who wish to make GLOBALGAP claims on their products.',
  servicesTitle: 'Our C.O.C.',
  servicesAccent: 'Services',
  services: [
    { icon: 'fa-link', title: 'C.O.C. Certification', description: 'Full certification services for supply chain operators ensuring that GLOBALGAP-certified products maintain their certified status throughout the chain.' },
    { icon: 'fa-route', title: 'Supply Chain Traceability', description: 'Comprehensive verification of traceability systems ensuring products can be tracked from farm to consumer at every stage of the supply chain.' },
    { icon: 'fa-check-double', title: 'Product Integrity', description: 'Verification that certified products maintain their identity and certification status as they move through handling, packing, and distribution.' },
    { icon: 'fa-sitemap', title: 'Chain Management', description: 'Assessment and optimization of your chain of custody management systems including segregation, labeling, and documentation controls.' },
    { icon: 'fa-file-alt', title: 'Documentation Support', description: 'Expert support for documentation systems, record-keeping, and compliance paperwork required for C.O.C. certification.' },
    { icon: 'fa-sync-alt', title: 'Compliance Monitoring', description: 'Continuous monitoring and support to maintain your GLOBALGAP C.O.C. certification and adapt to evolving traceability requirements.' }
  ],
  benefitsAccent: 'C.O.C. Certification',
  benefits: [
    { icon: 'fa-route', title: 'Traceability', desc: 'Ensure complete product traceability through the supply chain from farm to consumer.' },
    { icon: 'fa-check-double', title: 'Product Integrity', desc: 'Maintain product identity and certification status at every stage of distribution.' },
    { icon: 'fa-heart', title: 'Consumer Trust', desc: 'Build consumer confidence in certified products with transparent chain of custody.' },
    { icon: 'fa-store', title: 'Market Access', desc: 'Meet requirements of buyers and retailers requiring verified traceability systems.' },
    { icon: 'fa-eye', title: 'Supply Chain Transparency', desc: 'Demonstrate full transparency and accountability across your supply chain operations.' }
  ],
  whyChooseText: 'Our experienced auditors understand GLOBALGAP C.O.C. requirements and the complexities of supply chain traceability. We provide thorough assessments of your chain of custody systems, clear guidance on segregation and documentation, and practical support to help you achieve and maintain certification.',
  whyEurocertText: 'Eurocert Asia offers comprehensive GLOBALGAP C.O.C. certification services with deep expertise in supply chain operations. We work collaboratively with packers, traders, and distributors to ensure effective chain of custody management and long-term compliance.',
  relatedServices: [
    { title: 'GLOBALGAP', subtitle: 'Farm Assurance', image: '/F2.png', link: '/food-certification/globalgap' },
    { title: 'GLOBALGAP GRASP', subtitle: 'Social Practices', image: '/F9.png', link: '/food-certification/globalgap-grasp' },
    { title: 'GLOBALGAP SPRING', subtitle: 'Sustainable Water Use', image: '/F7.png', link: '/food-certification/globalgap-spring' }
  ]
}

export default function GlobalgapCOC() {
  return <FoodPageTemplate data={data} />
}
