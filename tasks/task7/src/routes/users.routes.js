// ============================================================
// ROUTER: users.routes.js
// Base: /api/v1/users
// ============================================================

const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

// User Collection Routes
router.route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

// User Member Routes (GET: read, PUT/PATCH: update/modify, DELETE: delete)
router.route("/:id")
  .get(userController.getUserById)
  .put(userController.updateUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

// Related Sub-resource Route
router.get("/:id/posts", userController.getUserPosts);

module.exports = router;
