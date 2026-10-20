// ============================================================
// MIDDLEWARE: Error Handling
// Handles 404 Route Not Found and Global Uncaught Errors
// ============================================================

// 404 Not Found Middleware
const notFoundHandler = (req, res, next) => {
  return res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`
  });
};

// Global Error Handler Middleware
const globalErrorHandler = (err, req, res, next) => {
  console.error("❌ Global Error Handler:", err);

  const statusCode = err.statusCode || err.status || 500;
  return res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined
  });
};

module.exports = {
  notFoundHandler,
  globalErrorHandler
};
