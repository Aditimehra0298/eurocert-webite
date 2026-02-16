import FoodPageTemplate from '../components/FoodPageTemplate'

const data = {
  heroImage: '/F13.png',
  heroTag: 'Albert Heijn & DLL Sustainable Agricultural Growth',
  heroTitle: 'AH DLL Grow',
  heroAccent: 'Add-On',
  heroDescription: 'The AH DLL Grow Add-On is a supplementary module to GLOBALGAP certification developed to meet the sustainability and sourcing requirements of Albert Heijn and Dutch retailers through the DLL GROW program.',
  introTitle: 'AH DLL Grow',
  introAccent: 'Add-On',
  introDescription: 'The AH DLL Grow Add-On is a supplementary module to GLOBALGAP Integrated Farm Assurance (IFA) specifically developed to meet the sustainability and sourcing requirements of Albert Heijn (AH) and Dutch retailers through the DLL (Dutch retail) GROW program. It addresses additional criteria beyond base GLOBALGAP—including environmental sustainability, worker welfare, water stewardship, and responsible sourcing—enabling producers to supply directly to Albert Heijn and participating Dutch retail markets.',
  whatIsTitle: 'What is AH DLL Grow Add-On?',
  whatIsDescription: 'AH DLL Grow is an add-on to GLOBALGAP IFA that addresses additional sustainability criteria required by Albert Heijn and Dutch retailers. It covers environmental management enhancement, water stewardship and conservation, worker welfare and fair labor practices, and responsible sourcing. Producers must hold valid GLOBALGAP IFA certification as a prerequisite. The add-on enables access to Albert Heijn and Dutch retail supply chains with recognized sustainability credentials.',
  servicesTitle: 'Our AH DLL Grow',
  servicesAccent: 'Services',
  services: [
    { icon: 'fa-certificate', title: 'Add-On Certification', description: 'Full certification services for the AH DLL Grow Add-On, ensuring compliance with Albert Heijn and Dutch retailer sustainability requirements.' },
    { icon: 'fa-seedling', title: 'Sustainable Growth Assessment', description: 'Comprehensive assessment of sustainable agricultural growth practices beyond base GLOBALGAP requirements.' },
    { icon: 'fa-check-circle', title: 'Supplier Compliance', description: 'Verification and support to meet Albert Heijn supplier compliance and responsible sourcing criteria.' },
    { icon: 'fa-leaf', title: 'Agricultural Quality', description: 'Assessment of agricultural quality standards and environmental management practices for Dutch retail markets.' },
    { icon: 'fa-file-alt', title: 'Documentation Support', description: 'Expert support for documentation, record-keeping, and compliance paperwork required for AH DLL Grow certification.' },
    { icon: 'fa-sync-alt', title: 'Compliance Monitoring', description: 'Continuous monitoring and support to maintain your AH DLL Grow certification and meet evolving sustainability criteria.' }
  ],
  benefitsAccent: 'AH DLL Grow Add-On',
  benefits: [
    { icon: 'fa-store', title: 'Retailer Compliance', desc: 'Supply directly to Albert Heijn and Dutch retail markets with recognized certification.' },
    { icon: 'fa-chart-line', title: 'Sustainable Growth', desc: 'Structured approach to achieving and exceeding sustainability goals on your farm.' },
    { icon: 'fa-award', title: 'Quality Standards', desc: 'Demonstrate commitment to responsible sourcing and meet premium market quality standards.' },
    { icon: 'fa-truck', title: 'Supply Chain Access', desc: 'Gain access to Albert Heijn and Dutch retailer supply chains with proven sustainability credentials.' },
    { icon: 'fa-tag', title: 'Market Differentiation', desc: 'Differentiate your products in European markets with recognized sustainability add-on certification.' }
  ],
  whyChooseText: 'Our team has deep expertise in GLOBALGAP add-on certifications and the specific requirements of Albert Heijn and Dutch retailers. We guide producers through every step of the AH DLL Grow certification process—from gap analysis and prerequisite verification to successful audit completion and ongoing compliance.',
  whyEurocertText: 'Eurocert Asia provides comprehensive AH DLL Grow certification services with expertise in Dutch retail requirements. Our collaborative approach ensures producers are well-prepared for certification and can maintain long-term access to Albert Heijn and Dutch retail markets.',
  relatedServices: [
    { title: 'Albert Heijn', subtitle: 'AH Certification', image: '/F11.png', link: '/food-certification/albert-heijn' },
    { title: 'GLOBALGAP', subtitle: 'Farm Assurance', image: '/F2.png', link: '/food-certification/globalgap' },
    { title: 'Biodiversity Add-On', subtitle: 'GLOBALGAP Biodiversity', image: '/F12.png', link: '/food-certification/biodiversity-add-on' }
  ]
}

export default function AHDLLGrow() {
  return <FoodPageTemplate data={data} />
}
