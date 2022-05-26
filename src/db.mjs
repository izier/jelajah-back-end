import { Sequelize } from "sequelize"

export const Database = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})

