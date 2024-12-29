const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rplace', { useNewUrlParser: true, useUnifiedTopology: true });

const Pixel = mongoose.model('Pixel', new mongoose.Schema({
  x: Number,
  y: Number,
  color: String
}));

const User = mongoose.model('User', new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  cooldown: { type: Number, default: 5 },
  lastAction: { type: Date, default: Date.now }
}));

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const pixels = await Pixel.find();
    return res.status(200).json(pixels);
  }

  if (req.method === 'POST') {
    const { x, y, color, token } = req.body;

    if (!token) return res.status(403).json({ message: 'Token required' });

    const decoded = jwt.verify(token, 'secret_key');
    const user = await User.findById(decoded._id);

    // Check cooldown
    const timeElapsed = (Date.now() - user.lastAction) / 1000;
    if (timeElapsed < user.cooldown) {
      return res.status(400).json({ message: `You need to wait ${user.cooldown - Math.floor(timeElapsed)} seconds` });
    }

    // Update cooldown and last action time
    user.cooldown += 2; // Stack cooldown
    user.lastAction = Date.now();
    await user.save();

    // Save pixel
    const newPixel = new Pixel({ x, y, color });
    await newPixel.save();

    res.status(200).json({ message: 'Pixel Placed' });
  }
  res.status(405).json({ message: 'Method Not Allowed' });
};
