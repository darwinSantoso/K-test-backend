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
      console.log(err);
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

  static async getUserCredentials(req, res, next) {
    try {
      res.status(200).json(req.user);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = UsersController;
