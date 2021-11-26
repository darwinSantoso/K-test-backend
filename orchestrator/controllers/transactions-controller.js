const { transactionsAPI } = require('../lib/apis');

class TransactionsController {
  static async addNewTransaction(req, res, next) {
    try {
      console.log(req.user);
      const { product_id, amount } = req.body;

      const { data: newTransaction } = await transactionsAPI({
        method: 'POST',
        url: '/transactions',
        data: {
          user_id: req.user.id,
          product_id,
          amount,
        },
      });

      res.status(200).json(newTransaction);
    } catch (err) {
      console.log(err.response.data);
      res.status(err.response.status).json(err.response.data);
    }
  }
}

module.exports = TransactionsController;
