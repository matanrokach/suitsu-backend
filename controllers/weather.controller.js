const weatherHistoryMock = require('./mock/weatherHistory.mock');
const suggestionMock = require('./mock/suggestion.mock');

const suggestion = (req, res) => {
	try {
		console.log('suggestion');

		const suggestion = suggestionMock;
		res.send({ suggestion });
	} catch (error) {
		res.status(error.status).send({ message: error.message });
	}
}

const weatherHistory = (req, res) => {
	try {
		console.log('weatherHistory');

		const weatherHistory = weatherHistoryMock;
		res.send({ results: weatherHistory, count: weatherHistory.length });
	} catch (error) {
		res.status(error.status).send({ message: error.message });
	}
}

module.exports = {
	suggestion,
	weatherHistory,
};