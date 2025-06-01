# 📰 Blog Platform Backend

This is the backend for the **Personal Blog Platform** built with **Node.js**, **Express**, and **MongoDB**. It provides secure authentication via JWT, and supports posting, retrieving, and filtering blog articles by author.


---


## 📁 Folder Structure

```bash
backend/
│
├── config/ # App config and DB connection
│ ├── config.js
│ └── database.js
│
├── controllers/ # Business logic for routes
│ ├── authController.js
│ └── postController.js
│
├── middlewares/ # Custom Express middlewares
│ ├── globalErrorHandler.js
│ └── tokenVerification.js
│
├── models/ # Mongoose schemas
│ ├── userModel.js
│ └── postModel.js
│
├── routes/ # API endpoint definitions
│ ├── authRoutes.js
│ └── postRoutes.js
│
├── .env # Environment variables (ignored in git)
├── .gitignore # Ignored files and folders
├── app.js # Entry point of the application
```

---


## ⚙️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT for Authentication**
- **Bcrypt for Password Hashing**
- **dotenv for Environment Variables**
- **cookie-parser for Cookie Management**
- **http-errors for Standardized Error Handling**


---


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/devilshiv-07/BlogPlatform-AC.git
cd backend
```

### 2. Install Dependencies

``` bash
npm install
```

### 3. Create a .env file

```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_jwt_key
NODE_ENV=development
```

### 4. Start the server

```bash
npm run dev
```


---


## 📌 API Endpoints

🔐 Auth
| Method | Endpoint      | Description                |
| ------ | ------------- | -------------------------- |
| POST   | `/api/signup` | Register a new user        |
| POST   | `/api/login`  | Authenticate and get token |

📝 Posts
| Method | Endpoint                     | Description                        |
| ------ | ---------------------------- | ---------------------------------- |
| POST   | `/api/post`                  | Create a new post (requires login) |
| GET    | `/api/posts`                 | Get all posts                      |
| GET    | `/api/posts?author=<userId>` | Get posts by a specific author     |


---


## 🔐 Authentication Flow

```bash
• JWT is signed on login and stored in a secure HTTP-only cookie.
• Protected routes use the isVerifiedUser middleware.
• On each request, the middleware:
  → Reads the cookie
  → Verifies the token
  → Adds req.user with the user payload
```


---


## 🧪 Error Handling

```bash
• All errors are passed to a global error handler middleware.
• Error responses include:
  → Status code
  → Message
  → Stack trace (in development mode only)
```


---


📄 License

This project is part of a Full Stack Task for Attack Capital and is not licensed for public use.


---


## 🙋‍♂️ Author

**Shivank Tripathi**  
[GitHub](https://github.com/devilshiv-07) | [LinkedIn](https://www.linkedin.com/in/shivanktripathi/)