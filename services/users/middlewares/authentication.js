const { verifyToken } = require('../helpers/jwt');
const { User } = require('../models/index');

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    if (!access_token) {
      throw { name: 'notLoggedIn' };
    }

    const payload = verifyToken(access_token);

    const foundUser = await User.findOne({
      where: {
        id: payload.id,
        name: payload.name,
        email: payload.email,
      },
    });

    if (!foundUser) {
      throw { name: 'invalidToken' };
    }

    req.user = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
    };

    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = authentication;
