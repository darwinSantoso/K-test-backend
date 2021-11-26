const { paymentsAPI } = require('../lib/apis');

class PaymentsController {
  static async addNewPayment(req, res, next) {
    try {
      const { data: newPayment } = await paymentsAPI({
        method: 'POST',
        url: '/payments',
        data: req.body,
      });

      res.status(200).json(newPayment);
    } catch (err) {
      res.status(err.response.status).json(err.response.data);
    }
  }
}

module.exports = PaymentsController;
