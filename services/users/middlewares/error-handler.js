const errorHandler = (err, req, res, next) => {
  let message;
  let code;

  switch (err.name) {
    case 'requiredValidationError':
      code = 400;
      message = 'field cannot be empty';
      break;

    case 'emailUniqueValidationError':
      code = 400;
      message = 'email must be unique';
      break;

    case 'unauthorized':
      code = 401;
      message = 'Invalid email or password';
      break;

    case 'userNotFound':
      code = 404;
      message = 'User not found';
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
