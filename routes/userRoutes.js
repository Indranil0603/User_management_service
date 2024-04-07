const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/users', userController.createUser);
router.get('/users/random', userController.getRandomUser);
router.get('/users/check-existence', userController.checkUserExistence);
router.get('/users/filter-by-age', userController.filterUsersByAge);
router.get('/users/names', userController.listUserNames);

module.exports = router;
