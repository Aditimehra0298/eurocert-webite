import { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';

const COLLECTION = 'clients';

export function useClients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, COLLECTION), orderBy('serialNo', 'asc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setClients(data);
      setLoading(false);
    }, () => setLoading(false));
    return unsub;
  }, []);

  return { clients, loading };
}

export async function addClient(client) {
  const snapshot = await getDocs(collection(db, COLLECTION));
  const existing = snapshot.docs.map((d) => d.data());
  const nextSerial = existing.length > 0 ? Math.max(...existing.map((c) => c.serialNo || 0)) + 1 : 1;

  const newClient = {
    clientName: client.clientName || '',
    dateOfAudit: client.dateOfAudit || '',
    categoryFSMS: client.categoryFSMS || '',
    certificateNo: client.certificateNo || '',
    expiryDate: client.expiryDate || '',
    schemeName: client.schemeName || '',
    status: client.status || 'Active',
    remarks: client.remarks || '',
    scope: client.scope || '',
    serialNo: nextSerial,
    createdAt: serverTimestamp(),
  };
  const docRef = await addDoc(collection(db, COLLECTION), newClient);
  return { id: docRef.id, ...newClient };
}

export async function updateClient(id, data) {
  const ref = doc(db, COLLECTION, id);
  await updateDoc(ref, { ...data, updatedAt: serverTimestamp() });
}

export async function deleteClient(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}
