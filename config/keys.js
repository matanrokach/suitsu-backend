if (process.env.NODE_ENV === 'production') {
    // PRODUCTION
    module.exports = require('./prod');
} else {
    // DEVELOPEMENT
    module.exports = require('./dev');
}