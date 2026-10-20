// ============================================================
// MIDDLEWARE: Request Logger
// Logs every incoming HTTP request with timestamp, method, url & IP
// ============================================================

const requestLogger = (req, res, next) => {
  const startTime = Date.now();
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl || req.url;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || req.ip || "127.0.0.1";

  // Hook into response finish event to record duration and status
  res.on("finish", () => {
    const duration = Date.now() - startTime;
    const statusCode = res.statusCode;
    const color = statusCode >= 500 ? "\x1b[31m" : statusCode >= 400 ? "\x1b[33m" : "\x1b[32m";
    const reset = "\x1b[0m";

    console.log(
      `[${timestamp}] ${color}${method}${reset} ${url} - ${color}${statusCode}${reset} (${duration}ms) - IP: ${ip}`
    );
  });

  next();
};

module.exports = requestLogger;
