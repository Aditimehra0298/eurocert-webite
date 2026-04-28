import { useState, useEffect } from 'react';

let db = null;
try {
  const firebase = require('../firebase');
  db = firebase.db;
} catch (e) {
  console.warn('Firebase not initialized');
}

const COLLECTION = 'posts';

const DEMO_POSTS = [
  {
    id: '1',
    title: 'New ISO 9001:2015 Certification Available',
    tag: 'News',
    date: '2025-01-15',
    image: '/news-iso-9001.png',
    href: '/post/new-iso-9001',
    excerpt: 'We are now offering ISO 9001:2015 certification services.',
  },
  {
    id: '2', 
    title: 'CTPAT Membership Benefits',
    tag: 'Update',
    date: '2025-01-10',
    image: '/news-ctpat-benefits.png',
    href: '/post/ctpat-benefits',
    excerpt: 'Learn about the benefits of CTPAT membership.',
  },
  {
    id: '3',
    title: 'FSSC 22000 Version 6 Transition',
    tag: 'Alert',
    date: '2025-01-05',
    image: '/news-fssc-22000.png',
    href: '/fssc-v6-transition',
    excerpt: 'Important information about FSSC 22000 v6 transition.',
  },
  {
    id: '4',
    title: 'What is PED Certification? Process, Requirements & CE Marking Guide',
    tag: 'Guide',
    date: '2026-04-28',
    image: '/ped-header-banner.png',
    href: '/post/ped-certification-guide',
    excerpt: 'Learn what PED certification is, its categories, requirements, and step-by-step process to obtain CE marking for pressure equipment in the EU.',
  }
];

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function usePosts() {
  const [posts, setPosts] = useState(DEMO_POSTS);
  const [loading, setLoading] = useState(false);

  if (!db) {
    return { posts: DEMO_POSTS, loading: false };
  }

  return { posts: DEMO_POSTS, loading: false };
}

export async function addPost(post) {
  console.warn('addPost requires Firebase configuration');
  return { id: 'demo', ...post };
}

export async function updatePost(id, data) {
  console.warn('updatePost requires Firebase configuration');
}

export async function deletePost(id) {
  console.warn('deletePost requires Firebase configuration');
}

export async function getAllPosts() {
  return DEMO_POSTS;
}

export async function getPostBySlug(slug) {
  return DEMO_POSTS.find(p => p.href === slug || p.href === '/post/' + slug) || 
    (slug === 'ped-certification-guide' ? DEMO_POSTS.find(p => p.id === '4') : null);
}