import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import MeditationLog from '../models/Meditation.js';

const router = express.Router();
declare global {
  namespace Express {
    interface Request {
      user?: { id: string };
    }
  }
}
// Route protected by authMiddleware
router.post('/meditation/log', authMiddleware, async (req, res) => {
  try {
    const { duration, mood, notes } = req.body;
    const user_id = req.user?.id; // Get the authenticated user's ID from the request object

    const newLog = await MeditationLog.create({ user_id, duration, mood, notes });
  res.json({ message: 'Log created successfully!', data: newLog });
  } catch (error) {
    console.error("Error creating meditation log:", error);
    res.status(500).json({ error: "Erro ao criar o log de meditação." });
  }
});

// Get all meditation logs for the authenticated user
router.get("/meditation/logs", authMiddleware, async (req, res) => {
  try {
    const user_id = req.user?.id ?? null; /// Get the authenticated user's ID from the request object
    const logs = await MeditationLog.findAll({ where: { user_id } });

    res.json(logs);
  } catch (error) {
    console.error("Error fetching meditation logs:", error);
    res.status(500).json({ error: "Erro ao buscar os logs de meditação." });
  }
});

export default router;