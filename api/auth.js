const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost/rplace', { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cooldown: { type: Number, default: 5 },
  lastAction: { type: Date, default: Date.now }
}));

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (req.url === '/register') {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
      return res.status(201).json({ message: 'User Registered' });
    }

    if (req.url === '/login') {
      const user = await User.findOne({ username });
      if (!user) return res.status(400).json({ message: 'User not found' });

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) return res.status(400).json({ message: 'Invalid Password' });

      const token = jwt.sign({ _id: user._id, username: user.username }, 'secret_key');
      return res.json({ token });
    }
  }
  res.status(405).json({ message: 'Method Not Allowed' });
};
