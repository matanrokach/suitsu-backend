const Model = function (modelName, mockData) {
    const find = () => new Promise((resolve) => resolve(mockData));
    const findOne = () => new Promise((resolve) => resolve(mockData[0]));

    return {
        find,
        findOne,
    }
}

module.exports = Model;