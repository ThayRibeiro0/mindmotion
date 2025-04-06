"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_js_1 = require("../config/database.js");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
database_js_1.sequelize.define('model', {
    column: sequelize_1.DataTypes.INTEGER
});
database_js_1.sequelize.define('model', {
    uuid: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV1,
        primaryKey: true
    }
});
class User extends sequelize_1.Model {
    // Definir corretamente a tipagem para o método de comparação de senha
    comparePassword(password) {
        return bcryptjs_1.default.compare(password, this.password);
    }
}
User.init({
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: database_js_1.sequelize,
    modelName: 'User',
});
// Método para criptografar a senha antes de salvar o usuário
User.beforeCreate(async (user) => {
    const salt = await bcryptjs_1.default.genSalt(10);
    user.password = await bcryptjs_1.default.hash(user.password, salt);
});
exports.default = User;
