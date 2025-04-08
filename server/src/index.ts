// src/config/database.ts
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Carrega as variáveis do arquivo .env

// Verifica se as variáveis de ambiente essenciais estão definidas
const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_PASS', 'DB_NAME', 'DB_PORT'];
requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    throw new Error(`The ${varName} environment variable is not set.`);
  }
});

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST!,
  username: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  database: process.env.DB_NAME!,
  port: Number(process.env.DB_PORT!),
  logging: false, // Desativa o logging, se não necessário
  dialectOptions: process.env.NODE_ENV === 'production' ? {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  } : {}
});

// Testa a conexão
sequelize.authenticate()
  .then(() => console.log('Conection to database established successfully.'))
  .catch((err) => console.error('Error connecting to the database:', err));

export default sequelize;
