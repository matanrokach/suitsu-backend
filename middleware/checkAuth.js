const _ = require('lodash');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const mongoose = require('../models/mongoose.mock');
const users = mongoose.model('users');

const extractToken = async (authorization) => {
  if (!authorization) {
    return null;
  }

  const authArr = authorization.split(' ');

  if (authArr[0] !== 'Bearer') {
    return null;
  }

  const token = authArr[1];

  if (!token || !jwt.verify(token, keys.cookieKey)) {
    return null;
  }

  const user = jwt.decode(token);
  const userFromDb = await users.findOne({ id: user.id, email: user.email });

  if (!userFromDb) {
    return null;
  }

  return userFromDb;
};

const checkAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const user = await extractToken(authorization);

    if (_.isEmpty(user)) {
      return res.status(401).json({ message: 'Auth failed' });
    }

    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed',
    });
  }
};

module.exports = checkAuth;
