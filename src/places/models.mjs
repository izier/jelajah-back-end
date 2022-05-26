import { Database } from "../db.mjs";
import { DataTypes } from "sequelize";

export const PlaceModel = Database.define('place', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  missions: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
})
