import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F9.png',
  heroTag: 'Risk Assessment on Social Practice in Agriculture',
  heroTitle: 'GLOBALGAP',
  heroAccent: 'GRASP',
  heroDescription: 'GLOBALGAP GRASP (Risk Assessment on Social Practice) is a voluntary add-on module that assesses social practices in agricultural production, addressing worker health, safety, welfare, and fair employment conditions.',
  introTitle: 'GLOBALGAP',
  introAccent: 'GRASP',
  introDescription: 'GLOBALGAP GRASP is a voluntary add-on module to GLOBALGAP that evaluates social practices in agricultural production. It addresses worker health and safety, fair wages and working hours, accommodation standards, and access to basic services. GRASP helps producers demonstrate their commitment to responsible social practices and meet the growing expectations of retailers and consumers for ethically produced agricultural products.',
  whatIsTitle: 'What is GLOBALGAP GRASP?',
  whatIsDescription: 'GLOBALGAP GRASP (GLOBALGAP Risk Assessment on Social Practice) is a voluntary add-on module that assesses social practices in agricultural production. It covers worker health and safety, fair employment conditions, living conditions for seasonal workers, and access to grievance mechanisms. GRASP complements GLOBALGAP farm assurance by addressing the social dimension of sustainability, helping farms demonstrate good social practices and meet retailer requirements for responsible sourcing.',
  servicesTitle: 'Our GRASP',
  servicesAccent: 'Services',
  services: [
    { icon: 'fa-clipboard-check', title: 'GRASP Assessment', description: 'Comprehensive GRASP assessment to evaluate social practices in your agricultural production operations.' },
    { icon: 'fa-users', title: 'Social Practice Evaluation', description: 'Detailed evaluation of social practices including worker health, safety, welfare, and fair employment conditions.' },
    { icon: 'fa-hard-hat', title: 'Worker Welfare Verification', description: 'Verification of worker welfare standards including working conditions, accommodation, and access to basic services.' },
    { icon: 'fa-balance-scale', title: 'Social Compliance', description: 'Ensuring compliance with social responsibility standards and best practices in agricultural operations.' },
    { icon: 'fa-graduation-cap', title: 'Training Programs', description: 'Expert training and consultancy on social practices, worker welfare, and GRASP compliance requirements.' },
    { icon: 'fa-sync-alt', title: 'Ongoing Support', description: 'Continuous monitoring and support to maintain your GRASP assessment status and social practice standards.' }
  ],
  benefitsAccent: 'GRASP Assessment',
  benefits: [
    { icon: 'fa-heart', title: 'Worker Welfare', desc: 'Ensure good working conditions and welfare for farm workers across all operations.' },
    { icon: 'fa-balance-scale', title: 'Social Compliance', desc: 'Demonstrate your commitment to social responsibility and ethical practices in agriculture.' },
    { icon: 'fa-handshake', title: 'Ethical Production', desc: 'Showcase ethical production practices and attract socially conscious buyers.' },
    { icon: 'fa-store', title: 'Retailer Requirements', desc: 'Meet the requirements of socially responsible buyers and access premium markets.' },
    { icon: 'fa-award', title: 'Reputation Enhancement', desc: 'Strengthen your reputation with proven good social practices and ethical credentials.' }
  ],
  whyChooseText: 'Our experienced auditors understand GLOBALGAP GRASP requirements and the social dimensions of agricultural production. We provide thorough assessments of worker welfare and social practices, practical guidance for improvement, and support to help you achieve and maintain GRASP compliance.',
  whyEurocertText: 'Eurocert Asia offers comprehensive GLOBALGAP GRASP assessment services with expertise in social compliance and agricultural labor standards. We work collaboratively with farms to improve social practices and build long-term compliance with retailer and consumer expectations.',
  relatedServices: [
    { title: 'GLOBALGAP', subtitle: 'Farm Assurance', image: '/F2.png', link: '/food-certification/globalgap' },
    { title: 'GLOBALGAP C.O.C.', subtitle: 'Chain of Custody', image: '/F8.png', link: '/food-certification/globalgap-coc' },
    { title: 'SA 8000', subtitle: 'Social Accountability', image: '/b1.png', link: '/social-audits/sa-8000' }
  ]
}

export default function GlobalgapGrasp() {
  return <FoodPageTemplate data={data} />
}
