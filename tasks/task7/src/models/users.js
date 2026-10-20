// ============================================================
// MODEL: users.js
// Interacts with in-memory users array
// ============================================================

const users = require("../data/users");

let nextUserId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;

const userModel = {
  // Find all users
  findAll() {
    return users;
  },

  // Find user by ID
  findById(id) {
    const numericId = Number(id);
    return users.find(u => u.id === numericId) || null;
  },

  // Find user by email
  findByEmail(email) {
    return users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
  },

  // Find user by username
  findByUsername(username) {
    return users.find(u => u.username.toLowerCase() === username.toLowerCase()) || null;
  },

  // Create new user
  create(userData) {
    const newUser = {
      id: nextUserId++,
      username: userData.username.trim(),
      fullName: userData.fullName.trim(),
      email: userData.email.trim(),
      bio: userData.bio || "",
      avatar: userData.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${userData.username}`,
      role: userData.role || "member",
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    return newUser;
  },

  // Update user by ID (PUT / PATCH)
  update(id, updateData) {
    const numericId = Number(id);
    const index = users.findIndex(u => u.id === numericId);
    if (index === -1) return null;

    users[index] = {
      ...users[index],
      fullName: updateData.fullName !== undefined ? updateData.fullName.trim() : users[index].fullName,
      bio: updateData.bio !== undefined ? updateData.bio : users[index].bio,
      avatar: updateData.avatar !== undefined ? updateData.avatar : users[index].avatar,
      role: updateData.role !== undefined ? updateData.role : users[index].role
    };

    return users[index];
  },

  // Delete user by ID
  delete(id) {
    const numericId = Number(id);
    const index = users.findIndex(u => u.id === numericId);
    if (index === -1) return null;

    const [deletedUser] = users.splice(index, 1);
    return deletedUser;
  }
};

module.exports = userModel;
