import { startServer } from './server/src/index.js';

const createAccessServer = async () => {
  const port = process.env.PORT || 3000; // Usa a variável de ambiente PORT ou 3000 como fallback
  await startServer({
    port: port,
    host: '0.0.0.0',
    cors: {
      origin: 'http://localhost:5173',
      credentials: true,
    },
  });
  console.log(`Servidor iniciado na porta ${port}!`);
};

createAccessServer();
