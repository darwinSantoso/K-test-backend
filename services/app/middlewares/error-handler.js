const errorHandler = (err, req, res, next) => {
  let message;
  let code;

  switch (err.name) {
    case 'wrongAmount':
      code = 401;
      message = 'the amount you inputted is wrong';
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
