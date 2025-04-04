import express from 'express';
import User  from '../models/User';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Rota de Signup
router.post('/signup', async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { username, email, password } = req.body;

    // Verifica se o usuário já existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: 'Usuário já existe!' });
      return;
    }

    // Cria um novo usuário
    await User.create({ username, email, password });
    res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar usuário' });
  }
});

// Rota de Login
router.post('/login',  async (req: express.Request, res: express.Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Verifica se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(400).json({ message: 'Usuário não encontrado!' });
    }

    // Verifica se o usuário foi encontrado e se o método comparePassword está definido
    if (!user || typeof user.comparePassword !== 'function') {
      res.status(400).json({ message: 'Usuário ou método inválido!' });
    }

    // Compara a senha
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

    // Gera um JWT Token
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
