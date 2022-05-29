import { Database } from "../db.mjs";
import { DataTypes } from "sequelize";

export const ImageModel = Database.define('image', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
})
