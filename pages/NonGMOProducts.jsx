import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F16.png',
  heroTag: 'Verified Non-Genetically Modified Product Certification',
  heroTitle: 'Non-GMO',
  heroAccent: 'Products',
  heroDescription: 'Non-GMO product verification certification provides independent third-party assurance that products and ingredients are produced without genetic engineering, meeting growing consumer demand for transparency and natural food choices.',
  introTitle: 'Non-GMO',
  introAccent: 'Products Certification',
  introDescription: 'Non-GMO certification verifies that products and their ingredients are produced without genetic engineering and that proper segregation practices are maintained throughout the supply chain. With growing consumer demand for transparency and natural food choices, Non-GMO certification has become increasingly important for food manufacturers, retailers, and ingredient suppliers seeking to meet market expectations.',
  whatIsTitle: 'What is Non-GMO Product Certification?',
  whatIsDescription: 'Non-GMO (Genetically Modified Organism) certification is an independent verification process that confirms products do not contain genetically modified ingredients. The certification involves rigorous testing, traceability verification, and supply chain audits to ensure that non-GMO integrity is maintained from farm to finished product, typically meeting the EU threshold of less than 0.9% GMO content.',
  servicesTitle: 'Our',
  servicesAccent: 'Services',
  services: [
    { icon: 'fa-certificate', title: 'Product Certification', description: 'Complete product certification services verifying that finished products meet non-GMO standards through testing and documentation review.' },
    { icon: 'fa-link', title: 'Supply Chain Verification', description: 'Rigorous verification of supply chain integrity ensuring non-GMO status is maintained from raw material sourcing through manufacturing.' },
    { icon: 'fa-flask', title: 'Testing & Analysis', description: 'GMO testing of raw materials and finished products using accredited laboratories to verify compliance with non-GMO thresholds.' },
    { icon: 'fa-tag', title: 'Labeling Compliance', description: 'Assessment and verification of labeling compliance for non-GMO claims across target markets and regulatory requirements.' },
    { icon: 'fa-file-alt', title: 'Documentation Support', description: 'Support in developing and maintaining traceability documentation, segregation protocols, and compliance records.' },
    { icon: 'fa-sync-alt', title: 'Ongoing Monitoring', description: 'Continuous monitoring and surveillance programs including periodic audits and testing to maintain certification status.' },
  ],
  benefitsAccent: "Certification",
  benefits: [
    { icon: 'fa-users', title: 'Consumer Demand', desc: 'Meet the growing consumer preference for non-GMO products with independent third-party verification that builds trust.' },
    { icon: 'fa-tag', title: 'Market Differentiation', desc: 'Stand out in the marketplace with verified non-GMO claims that resonate with health-conscious consumers.' },
    { icon: 'fa-check-circle', title: 'Label Credibility', desc: 'Build consumer confidence with independent verification of your non-GMO claims and product integrity.' },
    { icon: 'fa-handshake', title: 'Supply Chain Trust', desc: 'Strengthen relationships with retailers and buyers through verified supply chain transparency.' },
    { icon: 'fa-chart-line', title: 'Premium Positioning', desc: 'Non-GMO certified products often command premium prices in health-conscious and natural market segments.' },
  ],
  whyChooseText: "Our certification team brings extensive experience in GMO testing, supply chain verification, and non-GMO standards. We provide thorough audits, clear guidance on segregation protocols, and practical support to help you achieve and maintain non-GMO certification across your product portfolio.",
  whyEurocertText: "Eurocert Asia offers comprehensive Non-GMO verification services with rigorous testing and audit protocols. Our certification is recognized internationally and helps you demonstrate commitment to product integrity while meeting regulatory requirements in the EU and other markets.",
  relatedServices: [
    { title: 'Non-GMO Animal Feed', subtitle: 'GMO-Free Feed Certification', image: '/F17.png', link: '/food-certification/non-gmo-animal-feed' },
    { title: 'EU Organic', subtitle: 'Organic Certification', image: '/F10.png', link: '/food-certification/eu-organic' },
    { title: 'ISO 22000', subtitle: 'Food Safety Management', image: '/F5.png', link: '/food-certification/iso-22000' },
  ],
}

export default function NonGMOProducts() {
  return <FoodPageTemplate data={data} />
}
