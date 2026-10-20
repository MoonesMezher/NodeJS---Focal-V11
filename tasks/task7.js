// ============================================================
// TASK 7: SOCIAL MEDIA REST API (EXPRESS.JS + MVC)
// Bootcamp: Focal X - Node.js V11
// Period: 20/10/2026 -> 24/10/2026
// ============================================================
// Requirements:
// 1. Create three in-memory JavaScript arrays for a social media app:
//    - users
//    - posts
//    - comments
// 2. Build a backend server using Express.js.
// 3. Follow the MVC structure (Models, Views/Responses, Controllers, Routes).
// 4. Implement CRUD operations for all resources.
// 5. Use custom request logger middleware & dotenv configuration.
// ============================================================

// --- 1. THREE JAVASCRIPT ARRAYS (SEED DATA) ---

const users = [
  {
    id: 1,
    username: "karim_tech",
    fullName: "Karim Mansour",
    email: "karim@example.com",
    bio: "Full-stack JavaScript engineer & open-source contributor",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
    role: "author",
    createdAt: "2026-01-15T09:30:00.000Z"
  },
  {
    id: 2,
    username: "nour_designer",
    fullName: "Nour Al-Huda",
    email: "nour@example.com",
    bio: "UI/UX Designer passionate about minimal web interfaces",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    role: "author",
    createdAt: "2026-02-10T14:15:00.000Z"
  },
  {
    id: 3,
    username: "tariq_dev",
    fullName: "Tariq Ziad",
    email: "tariq@example.com",
    bio: "Node.js & Cloud enthusiast building scalable distributed systems",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150",
    role: "member",
    createdAt: "2026-03-01T11:45:00.000Z"
  },
  {
    id: 4,
    username: "sara_ai",
    fullName: "Sara Mahmoud",
    email: "sara@example.com",
    bio: "AI researcher & Pythonista learning modern Node backends",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
    role: "member",
    createdAt: "2026-03-20T16:00:00.000Z"
  }
];

const posts = [
  {
    id: 1,
    userId: 1,
    title: "Mastering Express.js & MVC Architecture",
    content: "Separating routes, controllers, and models creates a clean codebase that scales effortlessly as your project grows.",
    tags: ["nodejs", "express", "backend", "architecture"],
    likes: 24,
    createdAt: "2026-10-18T10:00:00.000Z",
    updatedAt: "2026-10-18T10:00:00.000Z"
  },
  {
    id: 2,
    userId: 2,
    title: "Designing Intuitive Developer APIs",
    content: "Consistent naming conventions, standard HTTP status codes, and clear JSON payloads make life easier for frontend teams.",
    tags: ["design", "api", "rest", "dx"],
    likes: 42,
    createdAt: "2026-10-19T13:20:00.000Z",
    updatedAt: "2026-10-19T13:20:00.000Z"
  },
  {
    id: 3,
    userId: 3,
    title: "Why In-Memory Mocking Accelerates Bootcamp Learning",
    content: "Before introducing database complexity and migrations, mastering array manipulations with filter, find, and map builds solid fundamentals.",
    tags: ["javascript", "arrays", "bootcamp"],
    likes: 18,
    createdAt: "2026-10-20T08:45:00.000Z",
    updatedAt: "2026-10-20T08:45:00.000Z"
  }
];

const comments = [
  {
    id: 1,
    postId: 1,
    userId: 2,
    text: "Great summary Karim! MVC pattern really keeps things organized.",
    createdAt: "2026-10-18T11:15:00.000Z"
  },
  {
    id: 2,
    postId: 1,
    userId: 3,
    text: "Especially love the separation between routes and business controllers.",
    createdAt: "2026-10-18T12:00:00.000Z"
  },
  {
    id: 3,
    postId: 2,
    userId: 1,
    text: "Agree 100%! REST predictability is gold for any client app.",
    createdAt: "2026-10-19T14:30:00.000Z"
  },
  {
    id: 4,
    postId: 3,
    userId: 4,
    text: "Practicing with arrays first gave me a much clearer mental model for CRUD.",
    createdAt: "2026-10-20T09:10:00.000Z"
  }
];

module.exports = {
  users,
  posts,
  comments
};
