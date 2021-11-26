const express = require('express');
const UsersController = require('../controllers/users-controller');
const router = express.Router();

const transactions = require('./transactions-router');
const payments = require('./payments-router');
const products = require('./products-router');

const authentication = require('../middlewares/authentication');

router.post('/login', UsersController.login);
router.post('/register', UsersController.register);

router.use('/products', products);

router.use(authentication);

router.use('/transactions', transactions);
router.use('/payments', payments);

module.exports = router;
