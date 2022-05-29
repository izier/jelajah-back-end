import { Database } from "../db.mjs";
import { DataTypes } from "sequelize";

export const UserModel = Database.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  exp: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
})
