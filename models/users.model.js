const Model = require('./model.mock');
const usersMock = require('../mocks/users.mock');

const users = new Model('users', usersMock);

module.exports = users;