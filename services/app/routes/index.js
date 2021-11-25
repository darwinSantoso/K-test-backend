const express = require('express');
const errorHandler = require('../middlewares/error-handler');

const router = express.Router();
const transactions = require('./transactions-router');

router.use('/transactions', transactions);

module.exports = router;
