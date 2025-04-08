// src/config/database.js
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'teste',
  database: process.env.DB_NAME || 'mindmotion_db',
  port: Number(process.env.DB_PORT) || 5432,
  logging: false, // Disable logging if you don't need it
});

// You can also handle any connection issues in this file if needed
sequelize.authenticate()
  .then(() => console.log('Database connected!'))
  .catch((err) => console.error('Database connection error:', err));

export default sequelize;