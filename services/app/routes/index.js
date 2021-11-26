const express = require('express');
const errorHandler = require('../middlewares/error-handler');

const router = express.Router();
const transactions = require('./transactions-router');
const payments = require('./payments-router');
const products = require('./products-router');

router.use('/transactions', transactions);
router.use('/payments', payments);
router.use('/products', products);

module.exports = router;
