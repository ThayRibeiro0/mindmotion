import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const MeditationLog = sequelize.define("MeditationLog", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  mood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default MeditationLog;