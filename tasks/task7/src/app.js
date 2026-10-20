// ============================================================
// JS NODE.JS & EXPRESS.JS — FROM JAVASCRIPT TO HTTP SERVER
// Single entry point: src/app.js (without server.js)
// Dependencies: express, morgan, nodemon, dotenv
// ============================================================

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { notFoundHandler, globalErrorHandler } = require("./middlewares/errorHandler");

const userRoutes = require("./routes/users.routes");
const postRoutes = require("./routes/posts.routes");
const commentRoutes = require("./routes/comments.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Middlewares
app.use(express.json()); // parses JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // HTTP request logger

// 2. Base Route (from guide)
app.get("/", (req, res) => {
  res.send("Hello World! Welcome to SocialSphere API");
});

// 3. Mount Resource Routes directly (/api/v1)
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/comments", commentRoutes);

// 4. Error Handling Middlewares
app.use(notFoundHandler);
app.use(globalErrorHandler);

// 5. Start HTTP Server directly from src/app.js
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 Endpoints:`);
  console.log(`   - Home:     http://localhost:${PORT}/`);
  console.log(`   - Users:    http://localhost:${PORT}/api/v1/users`);
  console.log(`   - Posts:    http://localhost:${PORT}/api/v1/posts`);
  console.log(`   - Comments: http://localhost:${PORT}/api/v1/comments`);
  console.log(`====================================================`);
});

module.exports = app;
