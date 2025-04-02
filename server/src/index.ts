import express from "express";
import cors from "cors";
import meditationRoutes from './routes/meditation';

app.use('/api/meditations', meditationRoutes);

const app = express();
const PORT = process.env.PORT || 5000;

// Configurar CORS para aceitar requisições do front-end
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Rotas de exemplo
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
