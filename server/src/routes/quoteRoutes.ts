import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const { data } = await axios.get('https://zenquotes.io/api/random');
    res.json(data[0]);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch quote' });
  }
});

export default router;