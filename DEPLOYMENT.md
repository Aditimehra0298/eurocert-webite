# Eurocert Asia — Deployment Guide

## Project Overview

**Eurocert Asia** is a React-based corporate website for Eurocert Inspection Services Pvt. Ltd. — a third-party certification, compliance, audit, and inspection body.

| Item | Detail |
|------|--------|
| **Framework** | React 19 + Vite 7 |
| **Styling** | Tailwind CSS 4 |
| **Routing** | React Router v7 |
| **Backend** | Firebase (Auth + Firestore) |
| **Maps** | React Leaflet |
| **Build Output** | Static files (`dist/` folder) |

---

## Tech Stack

- **Frontend:** React 19, Tailwind CSS 4, Vite 7
- **Authentication:** Firebase Authentication (Email/Password)
- **Database:** Firebase Cloud Firestore (NoSQL)
- **Hosting Options:** Netlify, Vercel, Firebase Hosting, or any static file server (Nginx, Apache)

---

## Prerequisites

- Node.js >= 18.x
- npm >= 9.x
- Firebase project (`eurocert-admin`) already configured

---

## Environment Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Configuration

Firebase config is located in `src/firebase.js`. The current project uses:

| Key | Value |
|-----|-------|
| Project ID | `eurocert-admin` |
| Auth Domain | `eurocert-admin.firebaseapp.com` |
| Storage Bucket | `eurocert-admin.firebasestorage.app` |

> **Note:** Firebase config keys are safe to expose in frontend code. They are not secrets — Firebase security is enforced by Firestore Security Rules and Authentication.

### 3. Firebase Services Used

| Service | Purpose |
|---------|---------|
| **Authentication** | Admin login (Email/Password) |
| **Firestore** | Stores posts, contact submissions, certified clients |

---

## Build & Deploy

### Build for Production

```bash
npm run build
```

This generates a `dist/` folder with static HTML/CSS/JS files.

### Preview Locally

```bash
npm run preview
```

### Development Server

```bash
npm run dev
```

---

## Deployment Options

### Option A: Netlify (Recommended)

1. Push code to a Git repository (GitHub/GitLab)
2. Connect the repo to Netlify
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Add a `_redirects` file in `public/` folder (already present):
   ```
   /*    /index.html   200
   ```

### Option B: Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

### Option C: Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select "dist" as public directory
# Configure as single-page app: Yes
firebase deploy
```

### Option D: Traditional Server (Nginx/Apache)

1. Run `npm run build`
2. Upload `dist/` folder contents to the web server
3. Configure URL rewriting for SPA:

**Nginx config:**
```nginx
server {
    listen 80;
    server_name eurocert.asia;
    root /var/www/eurocert/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Apache `.htaccess`:**
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## Firebase Setup (If Starting Fresh)

### 1. Create Firebase Project

- Go to https://console.firebase.google.com
- Create project named `eurocert-admin`

### 2. Enable Authentication

- Go to **Build > Authentication > Sign-in method**
- Enable **Email/Password**
- Add admin user:
  - Email: `admin@eurocert.in`
  - Password: `Eurocert@2025`

### 3. Enable Firestore

- Go to **Build > Firestore Database**
- Create database in **asia-south1 (Mumbai)**
- Apply security rules (see below)

### 4. Firestore Security Rules

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /contacts/{contactId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
    match /clients/{clientId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### 5. Seed Default Data

After first deployment, visit `/admin`, log in, and click the **"Seed Data"** button to populate default posts and client records.

---

## Firestore Collections

| Collection | Purpose | Public Read | Public Write |
|-----------|---------|------------|-------------|
| `posts` | Blog posts / news | Yes | No (admin only) |
| `contacts` | Form submissions from all website forms | No | Yes (create only) |
| `clients` | Certified clients register | Yes | No (admin only) |

---

## Admin Panel

**URL:** `/admin`

**Credentials:**
- Email: `admin@eurocert.in`
- Password: `Eurocert@2025`

### Features

| Tab | Function |
|-----|----------|
| **Posts** | Add, edit, delete blog posts. Posts appear on home page & Recent Posts sidebar |
| **Contacts** | View all form submissions (Contact Us, Grievance, Training, CTPAT, etc.) |
| **Certified Clients** | Manage certified clients displayed on the Certified Clients page |

---

## Project Structure

```
eurocert1/
├── public/                  # Static assets (images, videos, fonts)
├── pages/                   # Certification sub-pages (ISO, FSSC, etc.)
├── src/
│   ├── admin/               # Admin panel components
│   │   ├── AdminLogin.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── DynamicPost.jsx
│   │   └── ProtectedRoute.jsx
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── TopBar.jsx
│   │   ├── NewsSection.jsx
│   │   ├── RecentPosts.jsx
│   │   ├── GlobalPresenceMap.jsx
│   │   ├── CoreServices.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── ProcessSection.jsx
│   │   ├── Testimonials.jsx
│   │   ├── StandardsMarquee.jsx
│   │   └── SectorsSlider.jsx
│   ├── contexts/
│   │   └── AuthContext.jsx   # Firebase Auth context
│   ├── hooks/
│   │   ├── usePosts.js       # Firestore: posts CRUD
│   │   ├── useContacts.js    # Firestore: contacts CRUD
│   │   └── useClients.js     # Firestore: clients CRUD
│   ├── firebase.js           # Firebase config & initialization
│   ├── seedFirestore.js      # One-time data seeder
│   ├── App.jsx               # Main app with routes
│   └── main.jsx              # Entry point
├── firestore.rules           # Firestore security rules reference
├── package.json
└── vite.config.js
```

---

## Forms That Store Data to Firestore

All form submissions are stored in the `contacts` collection with a `source` field:

| Form Location | Source Tag |
|--------------|-----------|
| Home page contact section | `Home Contact Form` |
| Contact Us page | `Contact Us Page` |
| Footer quick callback | `Footer Callback` |
| Grievance page | `Grievance` |
| Training page | `Training` |
| FSSC V6 Transition page | `FSSC V6 Transition` |
| Product Catalogue page | `Product Catalogue` |
| CTPAT Login page | `CTPAT Login` |
| CTPAT Register page | `CTPAT Register` |

---

## Key Notes for Server Team

1. **This is a static site (SPA)** — only the `dist/` folder needs to be served. No Node.js server is needed in production.
2. **All backend logic runs on Firebase** — no separate API server required.
3. **URL rewriting is mandatory** — all routes must fall back to `index.html` (React Router handles client-side routing).
4. **Firebase free tier (Spark plan)** is sufficient for current usage:
   - 50K reads/day, 20K writes/day, 1 GiB storage
5. **To change admin password**, go to Firebase Console > Authentication > Users > edit the user.
6. **Images and videos** are served from the `public/` folder as static assets (not from Firebase Storage).

---

## Contact

For any questions about the codebase or deployment:
- **Developer:** Aditi Mehra
- **Firebase Project:** eurocert-admin
- **Firebase Console:** https://console.firebase.google.com/project/eurocert-admin
