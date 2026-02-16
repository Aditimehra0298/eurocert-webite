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
  where,
  serverTimestamp,
} from 'firebase/firestore';

const COLLECTION = 'posts';

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setPosts(data);
      setLoading(false);
    }, () => setLoading(false));
    return unsub;
  }, []);

  return { posts, loading };
}

export async function addPost(post) {
  const slug = post.href || '/post/' + generateSlug(post.title);
  const newPost = {
    title: post.title || '',
    tag: post.tag || '',
    date: post.date || new Date().toISOString().split('T')[0],
    image: post.image || '',
    href: slug,
    excerpt: post.excerpt || '',
    body: post.body || '',
    gallery: post.gallery || [],
    isCustom: !post.href,
    createdAt: serverTimestamp(),
  };
  const docRef = await addDoc(collection(db, COLLECTION), newPost);
  return { id: docRef.id, ...newPost };
}

export async function updatePost(id, data) {
  const ref = doc(db, COLLECTION, id);
  await updateDoc(ref, { ...data, updatedAt: serverTimestamp() });
}

export async function deletePost(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}

export async function getAllPosts() {
  const q = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getPostBySlug(slug) {
  const q1 = query(collection(db, COLLECTION), where('href', '==', slug));
  const snap1 = await getDocs(q1);
  if (!snap1.empty) return { id: snap1.docs[0].id, ...snap1.docs[0].data() };

  const q2 = query(collection(db, COLLECTION), where('href', '==', '/post/' + slug));
  const snap2 = await getDocs(q2);
  if (!snap2.empty) return { id: snap2.docs[0].id, ...snap2.docs[0].data() };

  return null;
}
