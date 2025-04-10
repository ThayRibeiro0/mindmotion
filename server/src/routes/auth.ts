import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Route of Signup
router.post('/register', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { username, email, password } = req.body;

    // Verifica se o usuário já existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: 'Usuário já existe!' });
      return;
    }

    // Create a new user
    await User.create({ username, email, password });
    res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
});

// Route of Login
router.post('/login',  async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Verify if the user exists
    const user = await User.findOne({ where: { email } });
    
    // Verify if the user has the method comparePassword
    if (!user || typeof user.comparePassword !== 'function') {
      res.status(400).json({ message: 'Usuário ou senha inválidos!' });
      return;
    }

    // Compare the password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(400).json({ message: 'Senha incorreta!' });
      return;
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });

    res.json({ message: 'Login bem-sucedido!', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao realizar login' });
  }
});

export default router;
