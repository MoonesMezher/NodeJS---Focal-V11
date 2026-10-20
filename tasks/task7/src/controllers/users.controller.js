// ============================================================
// CONTROLLER: users.controller.js
// HTTP request handlers for /api/v1/users
// ============================================================

const userModel = require("../models/users");
const postModel = require("../models/posts");

const userController = {
  // GET /api/v1/users - List all users
  getAllUsers(req, res) {
    const users = userModel.findAll();
    return res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  },

  // GET /api/v1/users/:id - Get single user
  getUserById(req, res) {
    const { id } = req.params;
    const user = userModel.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with id ${id} not found`
      });
    }

    return res.status(200).json({
      success: true,
      data: user
    });
  },

  // POST /api/v1/users - Create new user
  createUser(req, res) {
    const { username, fullName, email, bio, avatar, role } = req.body;

    if (!username || !fullName || !email) {
      return res.status(400).json({
        success: false,
        message: "Please provide username, fullName, and email"
      });
    }

    if (userModel.findByEmail(email)) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered"
      });
    }

    if (userModel.findByUsername(username)) {
      return res.status(409).json({
        success: false,
        message: "Username is already taken"
      });
    }

    const newUser = userModel.create({ username, fullName, email, bio, avatar, role });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser
    });
  },

  // PUT / PATCH /api/v1/users/:id - Update user
  updateUser(req, res) {
    const { id } = req.params;
    const { fullName, bio, avatar, role } = req.body;

    const existingUser = userModel.findById(id);
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: `User with id ${id} not found`
      });
    }

    const updatedUser = userModel.update(id, { fullName, bio, avatar, role });

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser
    });
  },

  // DELETE /api/v1/users/:id - Delete user
  deleteUser(req, res) {
    const { id } = req.params;
    const deletedUser = userModel.delete(id);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: `User with id ${id} not found`
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser
    });
  },

  // GET /api/v1/users/:id/posts - Get all posts authored by a user
  getUserPosts(req, res) {
    const { id } = req.params;
    const user = userModel.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with id ${id} not found`
      });
    }

    const userPosts = postModel.findByUserId(id);

    return res.status(200).json({
      success: true,
      author: user.fullName,
      count: userPosts.length,
      data: userPosts
    });
  }
};

module.exports = userController;
