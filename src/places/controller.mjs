import { createPlace, deletePlaceById, findAllPlace, findPlaceById, updatePlace } from "./service.mjs"

export const createPlaceController = async (req, res) => {
  try {
    const { name, description, rating, city, address } = req.payload
    await createPlace(name, description, rating, city, address)
    return res.response({
      status: 'success',
      users: 'berhasil menambahkan tempat wisata baru'
    })
  } catch (error) {
    return res.response({
      status: 'error',
      messsage: error
    })
  }
}

export const getAllPlaceController = async (req, res) => {
  try {
    const places = await findAllPlace()
    return res.response({
      status: 'success',
      users: places
    })
  } catch (error) {
    return res.response({
      status: 'error',
      messsage: error
    })
  }
}

export const getPlaceByID = async (req, res) => {
  try {
    const { id } = req.params
    const place = await findPlaceById(id)
    return res.response({
      status: 'success',
      place
    })
  } catch (error) {
    return res.response({
      status: 'error',
      messsage: error
    })
  }
}

export const updatePlaceController = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, rating, city, address } = req.payload
    await updatePlace(id, name, description, rating, city, address)
    return res.response({
      status: 'success',
      messsage: 'berhasil mengubah data tempat wisata'
    })
  } catch (error) {
    console.log(error)
    return res.response({
      status: 'error',
      messsage: error
    })
  }
}

export const deletePlaceController = async (req, res) => {
  try {
    const { id } = req.params
    await deletePlaceById(id)
    return res.response({
      status: 'success',
      messsage: 'berhasil menghapus tempat wisata'
    })
  } catch (error) {
    console.log(error)
    return res.response({
      status: 'error',
      messsage: error
    })
  }
}