import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database.js';
import bcrypt from 'bcryptjs';
sequelize.define('model', {
    column: DataTypes.INTEGER
});
sequelize.define('model', {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    }
});
class User extends Model {
    // Definir corretamente a tipagem para o método de comparação de senha
    comparePassword(password) {
        return bcrypt.compare(password, this.password);
    }
}
User.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'User',
});
// Método para criptografar a senha antes de salvar o usuário
User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});
export default User;
