const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.route('/login').post(authController.login);

router.route('/current-user').get(authController.currentUser);

router.route('/logout').get(authController.logout);

module.exports = router;