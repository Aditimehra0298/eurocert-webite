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
  where,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';

const COLLECTION = 'contacts';

export function useContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, COLLECTION), orderBy('submittedAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setContacts(data);
      setLoading(false);
    }, () => setLoading(false));
    return unsub;
  }, []);

  return { contacts, loading };
}

export async function addContact(contact) {
  const newContact = {
    name: contact.name || '',
    email: contact.email || '',
    phone: contact.phone || '',
    service: contact.service || '',
    message: contact.message || '',
    source: contact.source || 'Website',
    read: false,
    submittedAt: serverTimestamp(),
  };
  if (contact.anonymous !== undefined) newContact.anonymous = contact.anonymous;
  if (contact.attachmentUrl) newContact.attachmentUrl = contact.attachmentUrl;
  if (contact.attachmentName) newContact.attachmentName = contact.attachmentName;
  const docRef = await addDoc(collection(db, COLLECTION), newContact);
  return { id: docRef.id, ...newContact };
}

export async function markAsRead(id) {
  const ref = doc(db, COLLECTION, id);
  await updateDoc(ref, { read: true });
}

export async function deleteContact(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function getUnreadCount() {
  const q = query(collection(db, COLLECTION), where('read', '==', false));
  const snapshot = await getDocs(q);
  return snapshot.size;
}
