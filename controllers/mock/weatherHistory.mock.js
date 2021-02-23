const moment = require('moment');
const { WeatherStatus, Clothes } = require('../constants');

const weatherHistory = [
	{
		date: moment().subtract(1, 'days').toDate(),
		temp: 35,
		weather: WeatherStatus.Sunny,
		suggestion: [Clothes.Pants, Clothes.Scarf, Clothes.TShirt],
	},
	{
		date: moment().subtract(2, 'days').toDate(),
		temp: 28,
		weather: WeatherStatus.Sunny,
		suggestion: [Clothes.Sandals, Clothes.TShirt, Clothes.Shorts, Clothes.Hat],
	},
	{
		date: moment().subtract(3, 'days').toDate(),
		temp: 23,
		weather: WeatherStatus.PartlyCloudy,
		suggestion: [
			Clothes.Sneakers,
			Clothes.Sweatshirt,
			Clothes.WinterHat,
			Clothes.Pants,
		],
	},
	{
		date: moment().subtract(4, 'days').toDate(),

		temp: 23,
		weather: WeatherStatus.Fog,
		suggestion: [
			Clothes.Sneakers,
			Clothes.Sweatshirt,
			Clothes.Coat,
			Clothes.Pants,
		],
	},
];

module.exports = weatherHistory;
