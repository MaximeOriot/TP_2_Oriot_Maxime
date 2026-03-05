const logger = (req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`);
  });

  next();
};

module.exports = logger;