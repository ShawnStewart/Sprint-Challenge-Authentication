const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  if (username && password) {
    const newUser = new User(req.body);
    newUser
      .save()
      .then(response => {
        res.status(201).json({ user: response });
      })
      .catch(err => {
        res.status(500).json({ err: 'Error creating the new user.' });
      });
  } else {
    res.status(500).json({ err: 'You must provide a username and password.' });
  }
};

module.exports = {
  createUser
};
