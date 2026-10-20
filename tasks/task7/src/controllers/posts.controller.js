// ============================================================
// CONTROLLER: posts.controller.js
// HTTP request handlers for /api/v1/posts
// ============================================================

const postModel = require("../models/posts");
const userModel = require("../models/users");
const commentModel = require("../models/comments");

const postController = {
  // GET /api/v1/posts - List all posts (optional ?tag=...)
  getAllPosts(req, res) {
    const { tag } = req.query;
    const posts = postModel.findAll(tag);

    // Enrich post with author information
    const enrichedPosts = posts.map(post => {
      const author = userModel.findById(post.userId);
      return {
        ...post,
        author: author ? { id: author.id, username: author.username, fullName: author.fullName, avatar: author.avatar } : null
      };
    });

    return res.status(200).json({
      success: true,
      count: enrichedPosts.length,
      data: enrichedPosts
    });
  },

  // GET /api/v1/posts/:id - Get single post by ID
  getPostById(req, res) {
    const { id } = req.params;
    const post = postModel.findById(id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: `Post with id ${id} not found`
      });
    }

    const author = userModel.findById(post.userId);
    const postComments = commentModel.findAll(post.id);

    return res.status(200).json({
      success: true,
      data: {
        ...post,
        author: author ? { id: author.id, username: author.username, fullName: author.fullName, avatar: author.avatar } : null,
        commentsCount: postComments.length
      }
    });
  },

  // POST /api/v1/posts - Create new post
  createPost(req, res) {
    const { userId, title, content, tags } = req.body;

    if (!userId || !title || !content) {
      return res.status(400).json({
        success: false,
        message: "Please provide userId, title, and content"
      });
    }

    const author = userModel.findById(userId);
    if (!author) {
      return res.status(404).json({
        success: false,
        message: `User with id ${userId} does not exist. Cannot create post.`
      });
    }

    const newPost = postModel.create({ userId, title, content, tags });

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: newPost
    });
  },

  // PUT / PATCH /api/v1/posts/:id - Update existing post
  updatePost(req, res) {
    const { id } = req.params;
    const { title, content, tags } = req.body;

    const existingPost = postModel.findById(id);
    if (!existingPost) {
      return res.status(404).json({
        success: false,
        message: `Post with id ${id} not found`
      });
    }

    const updatedPost = postModel.update(id, { title, content, tags });

    return res.status(200).json({
      success: true,
      message: "Post updated successfully",
      data: updatedPost
    });
  },

  // DELETE /api/v1/posts/:id - Delete post & cascade comments
  deletePost(req, res) {
    const { id } = req.params;
    const deletedPost = postModel.delete(id);

    if (!deletedPost) {
      return res.status(404).json({
        success: false,
        message: `Post with id ${id} not found`
      });
    }

    // Cascade delete associated comments
    const removedCommentsCount = commentModel.deleteByPostId(id);

    return res.status(200).json({
      success: true,
      message: "Post and its associated comments deleted successfully",
      removedCommentsCount,
      data: deletedPost
    });
  },

  // POST /api/v1/posts/:id/like - Like a post
  likePost(req, res) {
    const { id } = req.params;
    const post = postModel.like(id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: `Post with id ${id} not found`
      });
    }

    return res.status(200).json({
      success: true,
      message: "Post liked",
      likes: post.likes
    });
  },

  // GET /api/v1/posts/:id/comments - Get all comments for a post
  getPostComments(req, res) {
    const { id } = req.params;
    const post = postModel.findById(id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: `Post with id ${id} not found`
      });
    }

    const comments = commentModel.findAll(id).map(c => {
      const author = userModel.findById(c.userId);
      return {
        ...c,
        author: author ? { id: author.id, username: author.username, fullName: author.fullName, avatar: author.avatar } : null
      };
    });

    return res.status(200).json({
      success: true,
      postId: Number(id),
      count: comments.length,
      data: comments
    });
  }
};

module.exports = postController;
