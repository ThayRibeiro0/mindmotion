import express from 'express';
import { MeditationLog } from '../models/MeditationLog'; // adjust path as needed
import auth from '../middleware/auth'; // your JWT middleware

const router = express.Router();

router.get('/stats', auth, async (req, res) => {
  try {
    const logs = await MeditationLog.findAll({
      where: { user_id: req.user.id },
      order: [['created_at', 'DESC']]
    });

    const today = new Date().toISOString().split('T')[0];
    const todayCount = logs.filter(log =>
      new Date(log.created_at).toISOString().split('T')[0] === today
    ).length;

    res.json({
      total: logs.length,
      todayCount,
      logs
    });
  } catch (err) {
    res.status(500).json({ message: 'Could not fetch stats' });
  }
});

export default router;