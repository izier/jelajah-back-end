import { findAllUser, findByUsername, updateExpUser } from "./service.mjs"

export const getAllUserController = async (req, res) => {
  try {
    const allUser = await findAllUser()
    return res.response({
      status: 'success',
      users: allUser
    })
  } catch (error) {
    return res.response({
      status: 'error',
      messsage: error
    })
  }
}

export const getUserByUsernameController = async (req, res) => {
  try {
    const { username } = req.params
    const user = await findByUsername(username)
    return res.response({
      status: 'success',
      user
    })
  } catch (error) {
    return res.response({
      status: 'error',
      messsage: error
    })
  }
}

export const updateExpUserController = async (req, res) => {
  try {
    const id = req.auth.credentials.id
    const { exp } = req.payload
    await updateExpUser(id, exp)
    return res.response({
      status: 'success',
      messsage: 'Exp user bertambah'
    })
  } catch (error) {
    console.log(error)
    return res.response({
      status: 'error',
      messsage: error
    })
  }
}