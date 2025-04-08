// src/config/database.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); 

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
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
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso!'))
  .catch((err) => console.error('Erro ao conectar ao banco de dados:', err));

export default sequelize;
