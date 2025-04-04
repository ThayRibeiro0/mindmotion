import express from 'express';
import User  from '../models/User';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Route of Signup
router.post('/signup', async (req: express.Request, res: express.Response): Promise<void> => {
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
    if (!user) {
      res.status(400).json({ message: 'Usuário não encontrado!' });
    }

    // Verify if the user has the method comparePassword
    if (!user || typeof user.comparePassword !== 'function') {
      res.status(400).json({ message: 'Usuário ou método inválido!' });
    }

    // Compare the password
    if (!user) {
      res.status(400).json({ message: 'Usuário não encontrado!' });
      return;
    }

    if (typeof user.comparePassword !== 'function') {
      res.status(400).json({ message: 'Método comparePassword não definido!' });
      return;
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      res.status(400).json({ message: 'Senha incorreta!' });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user.id }, 'your-secret-key', {
      expiresIn: '1h',
    });

    res.json({ message: 'Login bem-sucedido!', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao realizar login' });
  }
});

export default router;
