const renderErrorHandler = (res, err) => {
  return res.status(500).json({
    message: err.message || "Something went wrong!",
  });
};

module.exports = renderErrorHandler;
