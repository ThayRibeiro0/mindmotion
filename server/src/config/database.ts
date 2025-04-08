import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME || 'mindmotion_db_yyzk', 
  process.env.DB_USER || 'mindmotion_db_yyzk_user',
  process.env.DB_PASS || 'HigiQDsGR9zLT1I7lw7yQbMXChrQgBjY',
  {
    host: process.env.DB_HOST || 'dpg-cvqo35emcj7s73fctdag-a',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    dialect: 'postgres',
  }
);

export default sequelize;
