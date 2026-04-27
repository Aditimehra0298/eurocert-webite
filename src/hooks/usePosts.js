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
    image: '/o1.webp',
    href: '/post/new-iso-9001',
    excerpt: 'We are now offering ISO 9001:2015 certification services.',
  },
  {
    id: '2', 
    title: 'CTPAT Membership Benefits',
    tag: 'Update',
    date: '2025-01-10',
    image: '/o2.webp',
    href: '/post/ctpat-benefits',
    excerpt: 'Learn about the benefits of CTPAT membership.',
  },
  {
    id: '3',
    title: 'FSSC 22000 Version 6 Transition',
    tag: 'Alert',
    date: '2025-01-05',
    image: '/o3.webp',
    href: '/fssc-v6-transition',
    excerpt: 'Important information about FSSC 22000 v6 transition.',
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
  return DEMO_POSTS.find(p => p.href === slug || p.href === '/post/' + slug) || null;
}