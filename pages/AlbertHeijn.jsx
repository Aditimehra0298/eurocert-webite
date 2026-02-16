import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F11.png',
  heroTag: 'Leading Dutch Supermarket Supplier Standards',
  heroTitle: 'Albert Heijn',
  heroAccent: 'Certification',
  heroDescription: 'Meet the quality and safety requirements of Albert Heijn—the Netherlands\' leading supermarket chain. Qualify as an approved supplier and access their extensive retail network.',
  introTitle: 'Albert Heijn',
  introAccent: 'Certification',
  introDescription: 'Albert Heijn is the largest supermarket chain in the Netherlands, with a strong reputation for quality and food safety. Suppliers wishing to supply Albert Heijn must meet their specific quality, safety, and sustainability requirements. These standards often build on GFSI-benchmarked schemes such as GLOBALGAP and BRC, with additional retailer-specific criteria.',
  introDescription2: 'Eurocert Asia supports suppliers seeking Albert Heijn approval with certification services, gap assessments, and compliance guidance. We help you navigate the requirements and demonstrate your capability to meet the high standards expected by one of Europe\'s leading retailers.',
  introImage: '/F11.png',
  whatIsTitle: 'What is Albert Heijn Certification?',
  whatIsDescription: 'Albert Heijn certification refers to the process of meeting and demonstrating compliance with Albert Heijn\'s supplier quality and safety standards. Requirements typically include food safety certification (e.g., BRC, IFS, FSSC 22000), quality management, traceability, and for fresh produce often GLOBALGAP with add-ons such as AH DLL Grow. Certification validates that your operation meets the retailer\'s expectations for product safety, quality, and supply chain integrity.',
  servicesTag: 'Our Albert Heijn Services',
  servicesTitle: 'Albert Heijn',
  servicesAccent: 'Certification Support',
  servicesSubtitle: 'Comprehensive Supplier Certification Solutions for Dutch Retail',
  services: [
    { icon: 'fa-certificate', title: 'Supplier Certification', description: 'Complete certification services to qualify as an approved Albert Heijn supplier, meeting all quality and safety requirements for their retail network.' },
    { icon: 'fa-check-circle', title: 'Quality Standards Compliance', description: 'Comprehensive assessment and verification of your quality management systems to ensure they meet Albert Heijn\'s stringent supplier standards.' },
    { icon: 'fa-shield-alt', title: 'Food Safety Verification', description: 'Thorough food safety verification covering production, handling, storage, and distribution to meet Albert Heijn requirements.' },
    { icon: 'fa-truck', title: 'Supply Chain Audit', description: 'Detailed supply chain audits to verify traceability, product integrity, and compliance throughout your operations.' },
    { icon: 'fa-file-alt', title: 'Documentation Support', description: 'Assistance with supplier documentation, quality records, and compliance paperwork required for approval.' },
    { icon: 'fa-sync-alt', title: 'Compliance Monitoring', description: 'Ongoing monitoring and support to maintain your Albert Heijn supplier status and adapt to evolving requirements.' }
  ],
  benefitsAccent: 'Albert Heijn Certification',
  benefits: [
    { icon: 'fa-store', title: 'Retailer Access', desc: 'Access to Albert Heijn\'s extensive retail network across the Netherlands and beyond.' },
    { icon: 'fa-award', title: 'Quality Assurance', desc: 'Meet high quality and safety standards required by one of Europe\'s leading supermarket chains.' },
    { icon: 'fa-handshake', title: 'Supply Chain Trust', desc: 'Build trust with a major retailer and strengthen your position in the European food supply chain.' },
    { icon: 'fa-chart-line', title: 'Market Expansion', desc: 'Grow your business by partnering with a retailer with significant market share and consumer loyalty.' },
    { icon: 'fa-check-circle', title: 'Brand Compliance', desc: 'Demonstrate alignment with Albert Heijn\'s brand values and quality expectations.' }
  ],
  whyChooseText: 'Our auditors understand Albert Heijn requirements and the certification schemes that support them. We provide gap assessments, implementation guidance, and certification audits to help you achieve supplier approval. We focus on practical, sustainable compliance rather than one-time fixes.',
  whyEurocertText: 'Eurocert Asia offers integrated support for Albert Heijn supplier certification, including GLOBALGAP, BRC, and AH-specific add-ons. Our European connections and local expertise ensure you receive responsive, knowledgeable support throughout your certification journey.',
  relatedServices: [
    { title: 'GLOBALGAP', subtitle: 'Farm Assurance', image: '/F2.png', link: '/food-certification/globalgap' },
    { title: 'AH DLL Grow Add-On', subtitle: 'Albert Heijn Produce', image: '/F13.png', link: '/food-certification/ah-dll-grow' },
    { title: 'BRC', subtitle: 'British Retail Consortium', image: '/F14.png', link: '/food-certification/brc' }
  ],
  ctaDescription: 'Start your Albert Heijn certification journey. Our retail certification experts are ready to help you qualify as an approved supplier.'
}

export default function AlbertHeijn() {
  return <FoodPageTemplate data={data} />
}
