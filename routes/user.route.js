const express = require('express');
const userController = require('../controllers/user.controller.js');
const router = express.Router();

router.get('/users', userController.get);

module.exports = router;