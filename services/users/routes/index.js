const express = require('express');
const UsersController = require('../controllers/users-controller');
const router = express.Router();

// const users = require('./users-router');

router.post('/register', UsersController.register);
router.post('/login', UsersController.login);
router.get('/users/:email', UsersController.findUser);

// router.use('/users', users);

module.exports = router;
