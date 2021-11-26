const { login } = require('../../services/users/models/users-model');
const { usersAPI } = require('../lib/apis');

class UsersController {
  static async login(req, res, next) {
    try {
      const { data: loginResponse } = await usersAPI({
        method: 'POST',
        url: '/login',
        data: req.body,
      });

      res.status(200).json(loginResponse);
    } catch (err) {
      res.status(err.response.status).json(err.response.data);
    }
  }

  static async register(req, res, next) {
    try {
      const { data: response } = await usersAPI({
        method: 'POST',
        url: '/register',
        data: req.body,
      });

      res.status(200).json(response);
    } catch (err) {
      res.status(err.response.status).json(err.response.data);
    }
  }
}

module.exports = UsersController;
