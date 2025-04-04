import { Sequelize } from 'sequelize';
require('dotenv').config(); 


export const sequelize = new Sequelize(
  process.env.DB_NAME || 'default_db_name', 
  process.env.DB_USER || 'default_user',
  process.env.DB_PASS || 'default_password',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    dialect: 'postgres',
  }
);

module.exports = sequelize;
