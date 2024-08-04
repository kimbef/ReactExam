const User = require('../models/User'); const jwt = 
require('jsonwebtoken'); const bcrypt = 
require('bcryptjs'); const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { 
    expiresIn: '30d',
  });
};
const registerUser = async (req, res) => { const { 
  username, email, password } = req.body; const 
  userExists = await User.findOne({ email }); if 
  (userExists) {
    return res.status(400).json({ message: 'User 
    already exists' });
  }
  const user = new User({ username, email, password 
  });
  await user.save(); const token = 
  generateToken(user._id); res.status(201).json({ 
  token });
};
const loginUser = async (req, res) => { const { 
  email, password } = req.body; const user = await 
  User.findOne({ email }); if (user && (await 
  bcrypt.compare(password, user.password))) {
    const token = generateToken(user._id); 
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid email 
    or password' });
  }
};
const getUserProfile = async (req, res) => { const 
  user = await 
  User.findById(req.user.id).select('-password'); 
  res.json(user);
};
module.exports = { registerUser, loginUser, 
getUserProfile };
