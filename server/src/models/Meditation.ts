import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class Meditation extends Model {}

Meditation.init(
  {
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mood: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Meditation',
    tableName: 'meditations',
  }
);

export default Meditation;
