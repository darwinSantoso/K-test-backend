const errorHandler = (err, req, res, next) => {
  let message;
  let code;

  switch (err.name) {
    case 'wrongAmount':
      code = 401;
      message = 'the amount you inputted is wrong';
      break;

    case 'productNotFound':
      code = 404;
      message = 'the product does not exist';
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
