const { verifyToken } = require('../helpers/jwt');
const { usersAPI } = require('../lib/apis');

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    if (!access_token) {
      throw { name: 'notLoggedIn' };
    }

    const payload = verifyToken(access_token);

    console.log(payload);

    const { data: foundUser } = await usersAPI({
      method: 'GET',
      url: `/users/${payload.email}`,
    });

    if (!foundUser) {
      throw { name: 'invalidToken' };
    }

    req.user = {
      id: foundUser._id,
      name: foundUser.name,
      email: foundUser.email,
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
