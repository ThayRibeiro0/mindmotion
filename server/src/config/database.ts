import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

console.log('DB_USER:', process.env.DB_USER);

export const sequelize = new Sequelize(
  process.env.DB_NAME || 'mindmotion_db', 
  process.env.DB_USER || 'postgres',
  process.env.DB_PASS || 'teste',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    dialect: 'postgres',
  }
);

export default sequelize;
