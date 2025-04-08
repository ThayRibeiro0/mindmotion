import express from 'express';
import cors from 'cors';
import path from 'path'; // Import the 'path' module
import sequelize from './config/database.js';
import authRoutes from './routes/auth.js';
import meditationRoutes from './routes/meditation.js';

const app = express();
const PORT = parseInt(process.env.PORT || '10000', 10); // Use the default Render port

app.use(cors({ origin: "http://localhost:5173" })); // Adjust origin as needed for production
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(process.cwd(), 'public')));

// Defina as rotas da API
app.use('/api/auth', authRoutes);
app.use('/api/meditation', meditationRoutes);

// Optional: Serve the index.html for all other routes to enable client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

// Função para iniciar o servidor
const startServer = async (_p0: { port: string | number; host: string; cors: { origin: string; credentials: boolean; }; }) => {
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