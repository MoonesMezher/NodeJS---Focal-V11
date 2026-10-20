// ============================================================
// ROUTER: posts.routes.js
// Base: /api/v1/posts
// ============================================================

const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts.controller");

// Post Collection Routes
router.route("/")
  .get(postController.getAllPosts)
  .post(postController.createPost);

// Post Member Routes (GET: read, PUT/PATCH: update/modify, DELETE: delete)
router.route("/:id")
  .get(postController.getPostById)
  .put(postController.updatePost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

// Like Action Route
router.post("/:id/like", postController.likePost);

// Post Comments Sub-resource Route
router.get("/:id/comments", postController.getPostComments);

module.exports = router;
