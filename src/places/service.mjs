import { PlaceModel } from "./models.mjs"

export const createPlace = async (name, description, rating, city, address) => {
  return await PlaceModel.create({
    name: name, description: description, rating: rating, city: city, address: address,
  })
}
export const findAllPlace = async () => { return await PlaceModel.findAll() }
export const findPlaceById = async (id) => { return await PlaceModel.findByPk(id) }
export const updatePlace = async (id, name, description, rating, city, address) => {
  try {
    const place = await PlaceModel.update({
      name: name, description: description, rating: rating, city: city, address: address,
    }, { where: { id: id } })
    await place.save()
  } catch (error) {
    return error
  }
}
export const deletePlaceById = async (id) => { await PlaceModel.destroy({ where: { id: id } }) }