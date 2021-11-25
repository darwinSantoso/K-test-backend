const express = require('express');
const router = express.Router();

const TransactionsController = require('../controllers/transactions-controller');

router.post('/', TransactionsController.addNewTransaction);

module.exports = router;
