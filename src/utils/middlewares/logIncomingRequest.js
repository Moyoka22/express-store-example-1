const logRequestMiddleware = (req, res, next) => {
  next();
  console.log(`${req.url} - ${req.method.toUpperCase()} - ${res.statusCode}`);
};

module.exports = logRequestMiddleware;
