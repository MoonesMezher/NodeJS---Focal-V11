// ============================================================
// CONTROLLER: comments.controller.js
// HTTP request handlers for /api/v1/comments
// ============================================================

const commentModel = require("../models/comments");
const postModel = require("../models/posts");
const userModel = require("../models/users");

const commentController = {
  // GET /api/v1/comments - List all comments (optional ?postId=...)
  getAllComments(req, res) {
    const { postId } = req.query;
    const comments = commentModel.findAll(postId);

    const enrichedComments = comments.map(c => {
      const author = userModel.findById(c.userId);
      return {
        ...c,
        author: author ? { id: author.id, username: author.username, fullName: author.fullName, avatar: author.avatar } : null
      };
    });

    return res.status(200).json({
      success: true,
      count: enrichedComments.length,
      data: enrichedComments
    });
  },

  // GET /api/v1/comments/:id - Get single comment
  getCommentById(req, res) {
    const { id } = req.params;
    const comment = commentModel.findById(id);

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: `Comment with id ${id} not found`
      });
    }

    const author = userModel.findById(comment.userId);

    return res.status(200).json({
      success: true,
      data: {
        ...comment,
        author: author ? { id: author.id, username: author.username, fullName: author.fullName, avatar: author.avatar } : null
      }
    });
  },

  // POST /api/v1/comments - Create new comment
  createComment(req, res) {
    const { postId, userId, text } = req.body;

    if (!postId || !userId || !text) {
      return res.status(400).json({
        success: false,
        message: "Please provide postId, userId, and text"
      });
    }

    const post = postModel.findById(postId);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: `Post with id ${postId} does not exist`
      });
    }

    const user = userModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: `User with id ${userId} does not exist`
      });
    }

    const newComment = commentModel.create({ postId, userId, text });

    return res.status(201).json({
      success: true,
      message: "Comment added successfully",
      data: newComment
    });
  },

  // PUT / PATCH /api/v1/comments/:id - Update comment
  updateComment(req, res) {
    const { id } = req.params;
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Please provide text to update"
      });
    }

    const updatedComment = commentModel.update(id, text);
    if (!updatedComment) {
      return res.status(404).json({
        success: false,
        message: `Comment with id ${id} not found`
      });
    }

    return res.status(200).json({
      success: true,
      message: "Comment updated successfully",
      data: updatedComment
    });
  },

  // DELETE /api/v1/comments/:id - Delete comment
  deleteComment(req, res) {
    const { id } = req.params;
    const deletedComment = commentModel.delete(id);

    if (!deletedComment) {
      return res.status(404).json({
        success: false,
        message: `Comment with id ${id} not found`
      });
    }

    return res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
      data: deletedComment
    });
  }
};

module.exports = commentController;
