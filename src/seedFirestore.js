/**
 * Run this ONCE after setting up Firebase to seed your default data.
 * Usage: Open the browser console on your site and run:
 *   import('/src/seedFirestore.js').then(m => m.seedAll())
 *
 * Or call seedAll() from a temporary button in your app.
 */
import { db } from './firebase';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';

const defaultPosts = [
  {
    date: '2023-08-02',
    title: 'SLCP Certification | SLCP | Eurocert Asia',
    tag: 'Social Audits',
    href: '/post/slcp-certification',
    image: '/r1.png',
  },
  {
    date: '2023-07-15',
    title: 'C-TPAT - The NEW Minimum Security Criteria from CBP for Manufacturers and Exports',
    tag: 'C-TPAT',
    href: '/post/ctpat-minimum-security-criteria',
    image: '/r2.png',
  },
  {
    date: '2023-06-20',
    title: 'C-TPAT Compliance vs C-TPAT Validation',
    tag: 'C-TPAT',
    href: '/post/ctpat-compliance-vs-validation',
    image: '/r3.png',
  },
  {
    date: '2023-05-10',
    title: 'Role of Self Assessment Questionnaire in Sedex Audit',
    tag: 'SEDEX',
    href: '/post/sedex-self-assessment',
    image: '/r4.png',
  },
  {
    date: '2017-02-08',
    title: 'SA 8000 Certification',
    tag: 'SA 8000',
    href: '/post/sa-8000-certification',
    image: '/r5.png',
  },
  {
    date: '2016-11-15',
    title: 'Become our Associate',
    tag: 'Careers',
    href: '/post/become-associate',
    image: '/r6.png',
  },
  {
    date: '2016-11-04',
    title: 'Benefits of Becoming our Associate',
    tag: 'Careers',
    href: '/post/benefits-associate',
    image: '/r7.png',
  },
];

const defaultClients = [
  {
    serialNo: 1,
    clientName: 'Titins Nutritions Pvt. Ltd',
    dateOfAudit: '12-13/08/2024',
    categoryFSMS: 'CIV & CI',
    certificateNo: '001.2024',
    expiryDate: '2027-09-25',
    schemeName: 'ISO 22000',
    status: 'Active',
    remarks: 'Unaccredited Certificate',
    scope: 'Manufacture of Skimmed Milk Powder (pasteurization, evaporation and drying); Manufacture of Beverage Whitener and Non-Dairy Creamer (blending, sieving) and Manufacture of Ice cream and Frozen Desserts (pasteurization, freezing).',
  },
];

async function seedCollection(name, items) {
  const ref = collection(db, name);
  const existing = await getDocs(ref);
  if (!existing.empty) {
    console.log(`⏭️  "${name}" already has ${existing.size} docs — skipping.`);
    return;
  }
  for (const item of items) {
    await addDoc(ref, { ...item, createdAt: serverTimestamp() });
  }
  console.log(`✅  Seeded ${items.length} docs into "${name}".`);
}

export async function seedAll() {
  console.log('🔄 Seeding Firestore...');
  await seedCollection('posts', defaultPosts);
  await seedCollection('clients', defaultClients);
  console.log('🎉 Done! Refresh the page to see data.');
}
