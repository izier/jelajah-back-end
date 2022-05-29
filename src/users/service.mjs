import bcrypt from 'bcrypt'
import { UserModel } from "./model.mjs"

export const createUser = async (name, username, password) => await UserModel.create({
  name: name,
  username: username,
  password: await bcrypt.hash(password, 10)
})



export const findByUsername = async (username) => await UserModel.findOne({
  where: { username: username }
})

export const findAllUser = async () => await UserModel.findAll()

export const updateExpUser = async (id, exp) => {
  const user = await UserModel.findByPk(id)
  user.exp += exp
  return await user.save()
}