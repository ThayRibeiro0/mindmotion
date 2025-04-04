import express from 'express';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

// Rota protegida para logs de meditação
router.post('/meditation/log', authMiddleware, (req, res) => {
  const { meditationData } = req.body;
    
  console.log('Received meditation data:', meditationData);
  res.json({ message: 'Log de meditação salvo com sucesso!', data: meditationData });
});

export default router;
