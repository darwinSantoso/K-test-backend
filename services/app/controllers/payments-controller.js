const { Payment, sequelize } = require('../models/index');

class PaymentsController {
  static async addNewPayment(req, res, next) {
    try {
      const { order_id, amount } = req.body;

      const newPayment = await Payment.create({
        order_id,
        status: 'paid',
        amount,
      });

      res.status(200).json(newPayment);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PaymentsController;
