const mongodb = require('mongodb');
const { getDatabase } = require('../config/mongo');
const { hashPassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');

class UsersModel {
  static async register(reqBody) {
    const { name, email, password } = reqBody;
    const db = getDatabase();
    const usersCollection = db.collection('users');

    const user = await usersCollection.insertOne({
      name,
      email,
      password: hashPassword(password),
    });

    return user;
  }

  static async findUserByEmail(email) {
    const db = getDatabase();
    const usersCollection = db.collection('users');

    const response = await usersCollection.findOne({
      email,
    });

    return response;
  }

  static async getLastInsertedUser() {
    const db = getDatabase();
    const usersCollection = db.collection('users');
    const user = await usersCollection
      .find({})
      .sort({ _id: -1 })
      .limit(1)
      .toArray();

    return user;
  }
}

module.exports = UsersModel;
