# 📝 Personal Blog Platform

A full-stack blog platform built using **Next.js 14 (App Router)** on the frontend and **Express.js + MongoDB** on the backend. It supports user authentication, protected routes, and post creation with persistent storage.

---

## 📁 Project Structure

```bash
project-root/
├── frontend/ # Next.js 14 app with App Router, SSR, client components
├── backend/ # Express.js server with MongoDB, RESTful APIs
├── README.md # 🔹 You're here
```

---

## ✨ Features

### ✅ User Auth & Session
- Sign up, log in, and log out flows
- Session-based auth using cookies
- Protected dashboard route (only for logged-in users)

### 📝 Blog Functionality
- Create blog posts
- List all posts on the homepage (server-side rendered)
- Author tracking and display

### 🎨 UI/UX
- Responsive layout using Tailwind CSS
- Clean dark theme with animated navbar and mobile sidebar
- Custom fonts via Geist

---

## 📦 Tech Stack

| Layer      | Technology               |
|------------|--------------------------|
| Frontend   | Next.js 14, Tailwind CSS |
| Backend    | Express.js, MongoDB      |
| Auth       | JWT & HTTP-only cookies  |
| API Comm   | Axios                    |
| DB         | MongoDB with Mongoose    |

---

## 🛡️ Route Overview

### Frontend Routes
| Route        | Description                  |
| ------------ | ---------------------------- |
| `/`          | Homepage - all blog posts    |
| `/login`     | User login                   |
| `/signup`    | User registration            |
| `/dashboard` | Protected post creation page |

### Backend Routes
| Method | Route         | Description       |
| ------ | ------------- | ----------------- |
| POST   | `/api/signup` | Register new user |
| POST   | `/api/login`  | User login        |
| POST   | `/api/logout` | Logout user       |
| POST   | `/api/post`   | Create a new post |
| GET    | `/api/posts`  | Fetch all posts   |

---

## 📂 Detailed READMEs
```bash
/frontend/README.md – for UI & Next.js setup
/backend/README.md – for API, MongoDB, and auth
```

---

### 👨‍💻 Author
Shivank Tripathi
B.Tech @ IIIT Ranchi | Full-stack Developer | Passionate about DSA & Web