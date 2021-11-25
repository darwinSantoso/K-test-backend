const express = require('express');
// const UsersController = require('../controllers/users-controller');
const router = express.Router();

// const users = require('./users-router');

router.post('/register');
router.post('/login');

// router.use('/users', users);

module.exports = router;
