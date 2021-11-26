const { comparePassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');

const UsersModel = require('../models/users-model');

class UsersController {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        throw { name: 'requiredValidationError' };
      }

      const foundUser = await UsersModel.findUserByEmail(email);

      if (foundUser) {
        throw { name: 'emailUniqueValidationError' };
      }

      await UsersModel.register(req.body);

      const registeredUser = await UsersModel.getLastInsertedUser();

      res.status(200).json({
        id: registeredUser[0]._id,
        username: registeredUser[0].username,
        email: registeredUser[0].email,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw { name: 'requiredValidationError' };
      }

      const loginResponse = await UsersModel.login(req.body);

      if (!loginResponse) {
        throw { name: 'unauthorized' };
      }

      if (!comparePassword(password, loginResponse.password)) {
        throw { name: 'unauthorized' };
      }

      const payload = {
        id: loginResponse._id,
        name: loginResponse.name,
        email: loginResponse.email,
      };

      const token = createToken(payload);

      res.status(200).json({
        access_token: token,
      });
    } catch (err) {
      next(err);
    }
  }

  static async findUser(req, res, next) {
    try {
      const { email } = req.params;

      const foundUser = await UsersModel.findUserByEmail(email);

      console.log(foundUser);

      res.status(200).json(foundUser);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UsersController;
