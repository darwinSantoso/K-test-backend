const errorHandler = (err, req, res, next) => {
  let message;
  let code;

  switch (err.name) {
    case 'notLoggedIn':
      code = 401;
      message = 'you are not logged in';
      break;

    case 'invalidToken':
      code = 403;
      message = 'invalid token';
      break;

    default:
      code = 500;
      message = 'Internal Server Error';
      break;
  }

  res.status(code).json({
    message: message,
  });
};

module.exports = errorHandler;
