const express = require('express');
const UsersController = require('../controllers/users-controller');
const router = express.Router();

router.post('/login', UsersController.login);
router.post('/register', UsersController.register);

module.exports = router;
