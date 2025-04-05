import express from 'express';
import cors from 'cors';
import { sequelize } from './config/database.js';
import authRoutes from './routes/auth.js';
import meditationRoutes from './routes/meditation.js';
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // to acess the req.body
// Routes to the application
app.use('/api/auth', authRoutes);
app.use('/api', meditationRoutes);
// Initialize the database connection and start the server
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
        await sequelize.sync(); // sicronyze the database
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    }
    catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
};
startServer();
export default app;
