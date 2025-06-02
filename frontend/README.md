# 📝 Personal Blog Platform

A full-stack blog application built using **Next.js 14 App Router**, **Tailwind CSS**, **Express.js**, and **MongoDB**. This platform allows users to sign up, log in, create blog posts, and view all posts.

---

## 📁 Project Structure

```bash
project-root/
├── frontend/ # Next.js 14 frontend
│ ├── app/ # App Router structure
│ │ ├── dashboard/ # Protected dashboard route
│ │ ├── login/ # Login page
│ │ ├── signup/ # Signup page
│ │ ├── page.tsx # Homepage (SSR)
│ │ └── layout.tsx # Root layout
│ ├── components/ # Reusable UI components
│ ├── lib/ # Axios client + API handlers
│ ├── middleware.ts # Route protection
│ ├── styles/ # Global styles (Tailwind)
│ ├── types/ # Shared TypeScript types
│ └── .env.local # Environment variables
├── backend/ # Express.js API (not shown here)
```

---

## 🚀 Features

- ✅ User Authentication (Signup, Login, Logout)
- ✅ Protected Dashboard Route
- ✅ Post Creation (Title & Content)
- ✅ Server-side Rendering for Post Listing
- ✅ Responsive UI with Tailwind CSS
- ✅ Cookie-based Auth (with `withCredentials` support)
- ✅ Dynamic Navbar based on login status

---

## 🧠 Tech Stack

| Frontend         | Backend        | Auth & Data       |
|------------------|----------------|-------------------|
| Next.js 14 (App Router) | Express.js       | JWT + HTTP-only cookies |
| Tailwind CSS     | MongoDB (Mongoose) | Axios (with credentials) |
| TypeScript       | CORS Middleware | REST API         |

---

## 🔐 Protected Routes

Using `middleware.ts` in the frontend, the `/dashboard` route is protected and only accessible if valid cookies are present.

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/personal-blog-platform.git
cd personal-blog-platform
```

### 2. Setup Environment Variables

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 3. Install Dependencies
```bash
# In frontend/
npm install

# In backend/
npm install
```

### 4. Run the Development Servers
```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```

---

## 🤝 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

---

## 🧑‍💻 Author
Shivank Tripathi
📧 er.shivank07@gmail.com
🌐 [LinkedIn](https://www.linkedin.com/in/shivanktripathi/)