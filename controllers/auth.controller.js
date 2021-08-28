const weatherHistoryMock = require('./mock/weatherHistory.mock');
const suggestionMock = require('./mock/suggestion.mock');

const login = (req, res) => {
	try {
		console.log('LOGIN');

		res.send({ message: 'ok' });
	} catch (error) {
		res.status(error.status).send({ message: error.message });
	}
}

const currentUser = (req, res) => {
	try {
		console.log('LOGIN');

		res.send({ name: 'Matan Rokach', id: '123456789', email: 'mtn.rkh@gmail.com' });
	} catch (error) {
		res.status(error.status).send({ message: error.message });
	}
}

const logout = (req, res) => {
	try {
		console.log('LOGOUT');

		res.send({ message: 'ok' });
	} catch (error) {
		res.status(error.status).send({ message: error.message });
	}
}

module.exports = {
	login,
	currentUser,
	logout,
};