const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.route('/login').put(authController.login);

// router.route('/logout').get(authController.logout);

router.route('/current-user').get(authController.getCurrentUser);

router.route('/signup').put(authController.signUp);

module.exports = router;