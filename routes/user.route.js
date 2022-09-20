const express = require('express');
const userController = require('../controllers/user.controller.js');
const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/create', userController.createUser);
router.delete('/delete/:id', userController.deletUser);

module.exports = router;
