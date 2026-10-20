// ============================================================
// MODEL: comments.js
// Interacts with in-memory comments array
// ============================================================

const comments = require("../data/comments");

let nextCommentId = comments.length > 0 ? Math.max(...comments.map(c => c.id)) + 1 : 1;

const commentModel = {
  // Find all comments (with optional postId filter)
  findAll(postId = null) {
    if (postId) {
      const numericPostId = Number(postId);
      return comments.filter(c => c.postId === numericPostId);
    }
    return comments;
  },

  // Find comment by ID
  findById(id) {
    const numericId = Number(id);
    return comments.find(c => c.id === numericId) || null;
  },

  // Find comments by User ID
  findByUserId(userId) {
    const numericUserId = Number(userId);
    return comments.filter(c => c.userId === numericUserId);
  },

  // Create new comment
  create(commentData) {
    const newComment = {
      id: nextCommentId++,
      postId: Number(commentData.postId),
      userId: Number(commentData.userId),
      text: commentData.text.trim(),
      createdAt: new Date().toISOString()
    };
    comments.push(newComment);
    return newComment;
  },

  // Update comment text (PUT / PATCH)
  update(id, text) {
    const numericId = Number(id);
    const index = comments.findIndex(c => c.id === numericId);
    if (index === -1) return null;

    comments[index] = {
      ...comments[index],
      text: text.trim(),
      updatedAt: new Date().toISOString()
    };

    return comments[index];
  },

  // Delete comment
  delete(id) {
    const numericId = Number(id);
    const index = comments.findIndex(c => c.id === numericId);
    if (index === -1) return null;

    const [deletedComment] = comments.splice(index, 1);
    return deletedComment;
  },

  // Delete all comments associated with a post (cascade cleanup)
  deleteByPostId(postId) {
    const numericPostId = Number(postId);
    const initialCount = comments.length;
    for (let i = comments.length - 1; i >= 0; i--) {
      if (comments[i].postId === numericPostId) {
        comments.splice(i, 1);
      }
    }
    return initialCount - comments.length;
  }
};

module.exports = commentModel;
