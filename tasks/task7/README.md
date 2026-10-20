# 🌐 SocialSphere — Social Media REST API

> **JavaScript & Web Development: Node.js & Express.js — From JavaScript to HTTP Server**  
> Focal X Node.js Bootcamp V11

---

## 💡 Core Concepts from the Guide

### 1. What is Node.js?
A runtime that lets JavaScript run **OUTSIDE** the browser (on your computer/server).

### 2. What is Express?
A fast, minimalist framework for building HTTP servers & APIs in Node.js. Simplifies routing, middleware, & requests.

### 3. The Request Lifecycle 🔄
```
Client (Browser) ──[HTTP Request]──> Express Middleware ──> Route Handler ──[HTTP Response]──> Client
```

### 4. Basic Server Code 💻
```javascript
const express = require('express');
const app = express();

app.use(express.json()); // parses JSON

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => console.log('Server running!'));
```

### 5. HTTP Methods 🚦
| Method | Indicator | Purpose |
|---|---|---|
| **`GET`** | 🟢 | Read / Get data |
| **`POST`** | 🟡 | Create / Send data |
| **`PATCH`** | 🔵 | Update / Modify data |
| **`DELETE`** | 🔴 | Delete data |

### 6. Full Stack Architecture 🌐
```
Client (Frontend) ⇄ Server (Express) ⇄ Database (Data / In-memory Arrays)
```

---

## 📁 Typical Project Structure

```
task7/
├── src/
│   ├── app.js               # Entry point (Express setup, middlewares & listen)
│   ├── routes/              # Endpoints (/api/v1/users, posts, comments)
│   │   ├── users.routes.js
│   │   ├── posts.routes.js
│   │   └── comments.routes.js
│   ├── controllers/         # Business logic
│   │   ├── users.controller.js
│   │   ├── posts.controller.js
│   │   └── comments.controller.js
│   ├── models/              # Data schemas & in-memory arrays
│   │   ├── users.js
│   │   ├── posts.js
│   │   └── comments.js
│   ├── data/
│   │   ├── users.js         # Users array
│   │   ├── posts.js         # Posts array
│   │   └── comments.js      # Comments array
│   └── middlewares/
│       ├── logger.js        # Custom request logger
│       └── errorHandler.js  # 404 & global error handling
├── .env / .env.example      # Environment variables (PORT=3000)
├── .gitignore
├── package.json
└── README.md
```

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env

# 3. Start development server
npm run dev
# Server running at http://localhost:3000
```

---

## 📡 REST API Endpoints

### 👥 Users (`/api/v1/users`)
- `GET /api/v1/users` 🟢 — List all users
- `GET /api/v1/users/:id` 🟢 — Get single user by ID
- `POST /api/v1/users` 🟡 — Create user (`username`, `fullName`, `email`, `bio`)
- `PATCH /api/v1/users/:id` 🔵 — Update / modify user data
- `DELETE /api/v1/users/:id` 🔴 — Delete user
- `GET /api/v1/users/:id/posts` 🟢 — Get all posts by user

### 📝 Posts (`/api/v1/posts`)
- `GET /api/v1/posts` 🟢 — List all posts (supports `?tag=`)
- `GET /api/v1/posts/:id` 🟢 — Get post details + author
- `POST /api/v1/posts` 🟡 — Create new post (`userId`, `title`, `content`, `tags`)
- `PATCH /api/v1/posts/:id` 🔵 — Update / modify post
- `DELETE /api/v1/posts/:id` 🔴 — Delete post (cascades comments)
- `POST /api/v1/posts/:id/like` 🟡 — Like post
- `GET /api/v1/posts/:id/comments` 🟢 — Get comments for post

### 💬 Comments (`/api/v1/comments`)
- `GET /api/v1/comments` 🟢 — List all comments (`?postId=`)
- `GET /api/v1/comments/:id` 🟢 — Get comment by ID
- `POST /api/v1/comments` 🟡 — Add new comment (`postId`, `userId`, `text`)
- `PATCH /api/v1/comments/:id` 🔵 — Update / modify comment text
- `DELETE /api/v1/comments/:id` 🔴 — Delete comment
