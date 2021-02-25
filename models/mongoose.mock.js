const usersModel = require('./users.model');

const models = {
    users: usersModel,
};

const mongoose = {
    model: (modelName) => {
        return models[modelName];
    }
}

module.exports = mongoose;