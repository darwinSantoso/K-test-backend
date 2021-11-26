const express = require('express');
const UsersController = require('../controllers/users-controller');
const router = express.Router();

const transactions = require('./transactions-router');
const payments = require('./payments-router');

const authentication = require('../middlewares/authentication');

router.post('/login', UsersController.login);
router.post('/register', UsersController.register);

router.use(authentication);

router.use('/transactions', transactions);

module.exports = router;
