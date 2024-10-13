const globalErrorHandler = (err, _req, res, _next) => {
  let statusCode = err.status || 500;
  if (err.name === "ValidationError") {
    statusCode = 400;
  } else if (err.name === "Unauthorized") {
    statusCode = 401;
  } else if (err.name === "ForbiddenError") {
    statusCode = 403;
  }

  res.status(statusCode).json({ msg: err.message });
};

module.exports = { globalErrorHandler };
