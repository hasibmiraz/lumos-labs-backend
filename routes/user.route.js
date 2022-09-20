const express = require('express');
const userController = require('../controllers/user.controller.js');
const { userValidator, validate } = require('../validator/userValidator.js');
const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/create', userValidator, validate, userController.createUser);
router.delete('/delete/:id', userController.deletUser);

module.exports = router;
