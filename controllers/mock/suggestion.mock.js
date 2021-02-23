const moment = require('moment');
const { WeatherStatus, Clothes } = require('../constants');

const suggestion = {
	weather: {
		date: moment().toDate(),
		temp: 30,
		weather: WeatherStatus.Sunny,
	},
	suggestion: [
		Clothes.TShirt,
		Clothes.Shorts,
		Clothes.Shoe,
		Clothes.Cap,
		Clothes.Glasses,
	],
};
	

module.exports = suggestion;