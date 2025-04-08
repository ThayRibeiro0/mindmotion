// src/config/database.ts
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Loads environment variables from the .env file

// Checks if the essential environment variables are defined
const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_PASS', 'DB_NAME', 'DB_PORT'];
requiredEnvVars.forEach((varName) => {
  if (!process.env[varName]) {
    throw new Error(`The environment variable ${varName} is not defined.`);
  }
});

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST!,
  username: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  database: process.env.DB_NAME!,
  port: Number(process.env.DB_PORT!),
  logging: false, // Disables logging, if not needed
  dialectOptions: process.env.NODE_ENV === 'production' ? {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  } : {}
});

// Tests the connection
sequelize.authenticate()
  .then(() => console.log('Database connection established successfully!'))
  .catch((err) => console.error('Error connecting to the database:', err));

export default sequelize;
