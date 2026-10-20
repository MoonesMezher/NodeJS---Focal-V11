// ============================================================
// ROUTER: comments.routes.js
// Base: /api/v1/comments
// ============================================================

const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comments.controller");

// Comment Collection Routes
router.route("/")
  .get(commentController.getAllComments)
  .post(commentController.createComment);

// Comment Member Routes (GET: read, PUT/PATCH: update/modify, DELETE: delete)
router.route("/:id")
  .get(commentController.getCommentById)
  .put(commentController.updateComment)
  .patch(commentController.updateComment)
  .delete(commentController.deleteComment);

module.exports = router;
