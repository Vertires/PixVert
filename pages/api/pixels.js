let pixels = {}; // Store the pixels (keyed by coordinates)
let cooldowns = {}; // Store cooldowns for users (keyed by user ID or session)
const COOLDOWN_TIME = 5 * 1000; // Cooldown in milliseconds (5 seconds)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { x, y, color, userId } = req.body;

    if (!x || !y || !color || !userId) {
      return res.status(400).json({ error: 'Missing parameters' });
    }

    // Check if the user is on cooldown
    const lastPlaced = cooldowns[userId];
    if (lastPlaced && Date.now() - lastPlaced < COOLDOWN_TIME) {
      return res.status(403).json({ error: 'You must wait before placing another pixel' });
    }

    // Update the cooldown timestamp
    cooldowns[userId] = Date.now();

    // Store the pixel
    pixels[`${x},${y}`] = color;

    return res.status(200).json({ message: 'Pixel placed' });
  } else if (req.method === 'GET') {
    // Return all pixels
    return res.status(200).json(pixels);
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
