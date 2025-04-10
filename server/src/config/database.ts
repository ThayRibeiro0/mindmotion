import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME || '',
  process.env.DB_USER || '',
  process.env.DB_PASS || '',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    dialect: 'postgres',
  }
);

sequelize.authenticate()
  .then(() => console.log('✅ Database connected successfully.'))
  .catch(err => console.error('❌ Unable to connect to the database:', err));

export default sequelize;
