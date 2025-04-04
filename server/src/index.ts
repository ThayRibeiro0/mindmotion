import express from 'express';
import cors from 'cors';
import { sequelize } from './config/database.js'; // Certifique-se de usar a extensão `.js` com ESM
import authRoutes from './routes/auth.js';
import meditationRoutes from './routes/meditation.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // Para processar JSON no corpo da requisição

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api', meditationRoutes);

// Iniciar o servidor e conectar ao banco de dados
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
    await sequelize.sync(); // Sincroniza os modelos com o banco
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  }
};

startServer();
