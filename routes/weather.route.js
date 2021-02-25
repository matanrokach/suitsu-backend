const express = require('express');
const weatherController = require('../controllers/weather.controller');
const checkAuth = require('../middleware/checkAuth');

const router = express.Router();

router.route('/suggestion').get(checkAuth, weatherController.suggestion);

router.route('/history').get(checkAuth, weatherController.weatherHistory);

module.exports = router;