const User = require('../models/users.schema.js');

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.status(201).send({ success: true, users: users });
};

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const oldUser = await User.findOne({ email });
  if (oldUser) {
    return res
      .status(401)
      .send({ success: false, message: 'This email is already in use' });
  }

  const newUser = new User({ name, email, password });
  await newUser.save();
  return res
    .status(201)
    .send({ success: true, message: 'User created successfully' });
};
