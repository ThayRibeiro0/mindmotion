"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log('postgres', process.env.DB_USER);
exports.sequelize = new sequelize_1.Sequelize(process.env.DB_NAME || 'mindmotion_db', process.env.DB_USER || 'postgres', process.env.DB_PASS || 'teste', {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    dialect: 'postgres',
});
exports.default = exports.sequelize;
