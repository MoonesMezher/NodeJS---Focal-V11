// ============================================================
// MODEL: posts.js
// Interacts with in-memory posts array
// ============================================================

const posts = require("../data/posts");

let nextPostId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;

const postModel = {
  // Find all posts (with optional tag filtering)
  findAll(tag = null) {
    if (tag) {
      return posts.filter(p => Array.isArray(p.tags) && p.tags.includes(tag.toLowerCase()));
    }
    return posts;
  },

  // Find post by ID
  findById(id) {
    const numericId = Number(id);
    return posts.find(p => p.id === numericId) || null;
  },

  // Find posts by User ID
  findByUserId(userId) {
    const numericUserId = Number(userId);
    return posts.filter(p => p.userId === numericUserId);
  },

  // Create new post
  create(postData) {
    const newPost = {
      id: nextPostId++,
      userId: Number(postData.userId),
      title: postData.title.trim(),
      content: postData.content.trim(),
      tags: Array.isArray(postData.tags) ? postData.tags.map(t => t.toLowerCase()) : [],
      likes: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    posts.unshift(newPost);
    return newPost;
  },

  // Update post by ID (PUT / PATCH)
  update(id, updateData) {
    const numericId = Number(id);
    const index = posts.findIndex(p => p.id === numericId);
    if (index === -1) return null;

    posts[index] = {
      ...posts[index],
      title: updateData.title !== undefined ? updateData.title.trim() : posts[index].title,
      content: updateData.content !== undefined ? updateData.content.trim() : posts[index].content,
      tags: updateData.tags !== undefined ? (Array.isArray(updateData.tags) ? updateData.tags.map(t => t.toLowerCase()) : posts[index].tags) : posts[index].tags,
      updatedAt: new Date().toISOString()
    };

    return posts[index];
  },

  // Toggle or increment like count
  like(id) {
    const numericId = Number(id);
    const post = posts.find(p => p.id === numericId);
    if (!post) return null;

    post.likes = (post.likes || 0) + 1;
    return post;
  },

  // Delete post by ID
  delete(id) {
    const numericId = Number(id);
    const index = posts.findIndex(p => p.id === numericId);
    if (index === -1) return null;

    const [deletedPost] = posts.splice(index, 1);
    return deletedPost;
  }
};

module.exports = postModel;
