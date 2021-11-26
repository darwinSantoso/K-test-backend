const { Transaction, sequelize } = require('../models/index');

class TransactionsController {
  static async addNewTransaction(req, res, next) {
    try {
      const { user_id, product_id, amount } = req.body;

      const newTransaction = await Transaction.create({
        user_id,
        product_id,
        amount,
        status: 'pending',
      });

      res.status(200).json(newTransaction);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = TransactionsController;
