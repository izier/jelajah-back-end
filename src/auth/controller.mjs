import { createUser } from "../users/service.mjs"
import { validate } from "./service.mjs"

export const registerController = async (req, res) => {
  const { name, username, password } = req.payload
  try {
    createUser(name, username, password)
    return res.response({
      status: 'success',
      messsage: 'Berhasil mendaftarkan user'
    }).code(201)
  } catch (error) {
    return res.response({
      status: 'error',
      messsage: error
    })
  }
}

export const loginController = async (req, res) => {
  const { username, password } = req.payload
  try {
    const { isValid, credentials } = await validate(req, username, password)
    if (isValid) {
      return res.response({
        status: 'success',
        message: 'Login berhasil',
        credentials
      })
    }
  } catch (error) {
    return res.response({
      status: 'error',
      messsage: error
    })
  }
}