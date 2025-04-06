import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import Meditation from '../models/Meditation.js';

const meditationRouter = express.Router();

// Tipagem personalizada do Express Request
declare global {
  namespace Express {
    interface Request {
      user?: { id: string };
    }
  }
}

// Rota protegida para criar log de meditação
meditationRouter.post('/meditation/log', authMiddleware, async (req, res) => {
  try {
    const { duration, mood, notes } = req.body;
    const user_id = req.user?.id;

    const newLog = Meditation.create({ user_id, duration, mood, notes });
    res.json({ message: 'Log created successfully!', data: newLog });
  } catch (error) {
    console.error("Error creating meditation log:", error);
    res.status(500).json({ error: "Erro ao criar o log de meditação." });
  }
});

// Rota protegida para buscar logs do usuário
meditationRouter.get("/meditation/logs", authMiddleware, async (req, res) => {
  try {
    const user_id = req.user?.id ?? null;
    const logs = Meditation.findAll({ where: { user_id } });

    res.json(logs);
  } catch (error) {
    console.error("Error fetching meditation logs:", error);
    res.status(500).json({ error: "Erro ao buscar os logs de meditação." });
  }
});

export default meditationRouter;
