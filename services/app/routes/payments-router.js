const express = require('express');
const router = express.Router();

const PaymentsController = require('../controllers/payments-controller');

router.post('/', PaymentsController.addNewPayment);

module.exports = router;
