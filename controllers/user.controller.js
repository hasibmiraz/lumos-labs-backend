const User = require('../models/users.schema.js');

exports.get = async (req, res) => {
  const users = await User.find();
  res.status(201).json(users);
};
