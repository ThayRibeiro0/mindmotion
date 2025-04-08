import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import authRoutes from './routes/auth.js';
import meditationRoutes from './routes/meditation.js';

const app = express();
const PORT = parseInt(process.env.PORT || '5000', 10);

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Defina as rotas
app.use('/api/auth', authRoutes);
app.use('/api/meditation', meditationRoutes);

// Função para iniciar o servidor
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
    await sequelize.sync();
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  }
};

export { app, startServer };