const { Payment, Transaction, sequelize } = require('../models/index');

class PaymentsController {
  static async addNewPayment(req, res, next) {
    try {
      const { order_id, amount } = req.body;

      const newPayment = await Payment.create({
        order_id,
        status: 'paid',
        amount,
      });

      const foundTransaction = await Transaction.findOne({
        where: {
          id: order_id,
        },
      });

      if (Number(amount) !== Number(foundTransaction.amount)) {
        throw { name: 'wrongAmount' };
      }

      // change order status
      await Transaction.update(
        {
          status: 'paid',
        },
        {
          where: {
            id: order_id,
          },
        }
      );

      res.status(200).json(newPayment);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PaymentsController;
