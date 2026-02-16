import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F15.png',
  heroTag: "Quality Assurance for Fresh Produce Suppliers",
  heroTitle: "Tesco Nature's",
  heroAccent: 'Choice',
  heroDescription: "Tesco Nature's Choice is a comprehensive quality assurance scheme developed by Tesco to ensure fresh produce suppliers meet rigorous standards for sustainable farming, environmental responsibility, and product quality.",
  introTitle: "Tesco Nature's",
  introAccent: "Choice Certification",
  introDescription: "Tesco Nature's Choice is a certification scheme developed by Tesco, one of the world's largest retailers, to ensure that fresh produce supplied to its stores is grown in an environmentally responsible and sustainable manner. The scheme covers fruit, vegetables, salads, and flowers, requiring suppliers to demonstrate integrated crop management practices that protect the environment, conserve natural resources, and uphold worker welfare.",
  whatIsTitle: "What is Tesco Nature's Choice?",
  whatIsDescription: "Nature's Choice is Tesco's own integrated crop management standard. It requires suppliers of fresh produce to demonstrate responsible farming practices covering environmental protection, efficient use of natural resources, and worker welfare. The scheme ensures products meet Tesco's high standards for sustainability and provides a pathway to supplying one of the world's leading retail chains.",
  servicesTitle: "Our",
  servicesAccent: "Services",
  services: [
    { icon: 'fa-certificate', title: 'Certification Services', description: 'Complete certification support for Tesco Nature\'s Choice, from gap analysis through to final audit and certificate issuance.' },
    { icon: 'fa-check-circle', title: 'Quality Assurance', description: 'Comprehensive quality assurance assessments ensuring your produce meets Tesco\'s stringent quality and sustainability criteria.' },
    { icon: 'fa-clipboard-check', title: 'Supplier Compliance', description: 'Evaluation and verification of supplier compliance with all Nature\'s Choice requirements across your supply chain.' },
    { icon: 'fa-leaf', title: 'Environmental Management', description: 'Assessment of environmental management practices including biodiversity, water use, and pollution prevention.' },
    { icon: 'fa-seedling', title: 'Fresh Produce Standards', description: 'Verification of fresh produce standards covering crop protection, soil management, and sustainable farming practices.' },
    { icon: 'fa-sync-alt', title: 'Monitoring Support', description: 'Ongoing monitoring and surveillance audits to maintain certification status and continuous improvement.' },
  ],
  benefitsAccent: "Certification",
  benefits: [
    { icon: 'fa-store', title: 'Tesco Market Access', desc: 'Qualify as an approved fresh produce supplier to one of the world\'s largest retail chains with access to premium shelf space.' },
    { icon: 'fa-award', title: 'Quality Recognition', desc: 'Products carry Tesco\'s sustainability endorsement, building consumer confidence and brand trust.' },
    { icon: 'fa-tree', title: 'Environmental Compliance', desc: 'Demonstrate sustainable and environmentally responsible farming practices to stakeholders and regulators.' },
    { icon: 'fa-handshake', title: 'Supply Chain Trust', desc: 'Build trust with retailers and buyers through verified compliance with internationally recognized standards.' },
    { icon: 'fa-chart-line', title: 'Competitive Edge', desc: 'Differentiate your products in the market and access premium retail supply chains.' },
  ],
  whyChooseText: "Our experienced agricultural auditors understand Tesco Nature's Choice requirements thoroughly. We provide comprehensive gap analysis, pre-audit support, and efficient certification processes to help producers achieve compliance and maintain their supplier status with Tesco.",
  whyEurocertText: "Eurocert Asia provides expert audit and certification services for Tesco Nature's Choice. With deep expertise in retail standards and fresh produce supply chains, we help producers navigate the certification process efficiently and achieve sustainable market access.",
  relatedServices: [
    { title: 'GLOBALGAP', subtitle: 'Good Agricultural Practices', image: '/F2.png', link: '/food-certification/globalgap' },
    { title: 'Albert Heijn', subtitle: 'Retail Quality Standards', image: '/F11.png', link: '/food-certification/albert-heijn' },
    { title: 'BRC', subtitle: 'British Retail Consortium', image: '/F14.png', link: '/food-certification/brc' },
  ],
}

export default function TescoNaturesChoice() {
  return <FoodPageTemplate data={data} />
}
