import { startServer } from './server/src/index';

const createAccessServer = async () => {
  await startServer();
  console.log('Servidor iniciado com sucesso!');
};

createAccessServer();
