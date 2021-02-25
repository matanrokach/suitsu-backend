const _ = require('lodash');
const mongoose = require('../models/mongoose.mock');
const jwt = require('jsonwebtoken');
const User = mongoose.model('users');
const keys = require('../config/keys');
const bcrypt = require('bcrypt');

const createToken = (userFound) => {
  const userToSend = {
    _id: userFound.id,
    name: userFound.name,
    email: userFound.email,
  };
  const token = jwt.sign(JSON.stringify(userToSend), keys.cookieKey);

  return token;
};

const signUp = async (req, res) => {
  try {
    const { email, password, name, lastName, phone, country } = req.body;

    // const isEmailAlreadyExist = await User.findOne({ email });
    // if (isEmailAlreadyExist) {
    //   return res.status(400).json({ message: 'This email is already exist' });
    // }

    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ message: 'Mandatory fields must be filled' });
    }

    const encryptedPassword = await bcrypt.hash(
      password,
      Number(keys.saltRounds)
    );

    const user = {
      email,
      name,
      password: encryptedPassword,
      id: '1234567890',
    };

    // const user = await new User({
    //   email,
    //   password: encryptedPassword,
    //   name,
    // }).save();

    if (!user) {
      return res.status(500).json({ message: 'Something went wrong' });
    }

    _.omit(user, ['password']);

    return res.send({ user });
  } catch (e) {
    console.log('e', e);
  }
};

const login = async (req, res) => {
  try {
    console.log('LOGIN');

    const isTest = true;

    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Both username and password are necessary' });
    }

    const userFound = await User.findOne({ email });

    if (!userFound) {
      return res.status(401).json({ message: 'Something went wrong' });
    }

    const isPasswordCorrect =
      (await bcrypt.compare(password, userFound.password)) || isTest;

    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ message: 'username or password is incorrect' });
    }

    const token = createToken(userFound);
    res.send({ token });
  } catch (e) {
    console.log('e', e);
  }
};

const logout = (req, res) => {
  console.log('logout');
  res.send(req.params);
};

const extractAuthToken = async (authorization) => {
  let token = '';

  if (authorization) {
    const authArr = authorization.split(' ');

    if (authArr[0] === 'Bearer') {
      token = authArr[1];
    }
    if (token && jwt.verify(token, keys.cookieKey)) {
      const user = jwt.decode(token);
      const userFromDB = await User.findOne({ email: user.email });

      return {
        id: userFromDB.id,
        email: userFromDB.email,
        name: userFromDB.name,
      };
    }
  }

  return null;
};

const getCurrentUser = async (req, res) => {
  try {
    const { authorization } = req.headers;

    const details = await extractAuthToken(authorization);

    if (details) {
      return res.send(details);
    } else {
      return res.send({});
    }
  } catch (e) {
    console.log('e', e);
    res.status(500).send(e.message);
  }
};

module.exports = {
  login,
  logout,
  getCurrentUser,
  signUp,
};
