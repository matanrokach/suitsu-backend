const express = require('express');
const weatherController = require('../controllers/weather.controller');

const router = express.Router();

router.route('/suggestion').get(weatherController.suggestion);

router.route('/history').get(weatherController.weatherHistory);

module.exports = router;