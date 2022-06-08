const { nanoid } = require("nanoid");
const { Place, Plan, City, ImageModel } = require("../models");
const handleImageUpload = require("../utils/upload");

module.exports = [
  {
    method: "POST",
    path: "/places",
    handler: async (req, res) => {
      const { name, description, rating, cityId } = req.payload;
      try {
        return await Place.create(
          {
            name: name,
            description: description,
            rating: rating,
            cityId: cityId,
          },
          { include: City }
        );
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        });
      }
    },
  },
  {
    method: "GET",
    path: "/places",
    handler: async (req, res) => {
      try {
        return await Place.findAll({ include: [Plan, ImageModel] });
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        });
      }
    },
  },
  {
    method: "GET",
    path: "/places/{id}",
    handler: async (req, res) => {
      try {
        const { id } = req.params;
        return await Place.findByPk(id, { include: [Plan, ImageModel, City] });
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        });
      }
    },
  },
  {
    method: "POST",
    path: "/places/{id}",
    options: {
      payload: {
        multipart: true ,
      }
    },
    handler: async (req, res) => {
      try {   
        const { image } = req.payload
        const { id } = req.params;
        const response = await handleImageUpload(image, "places_" +nanoid())
        await ImageModel.create({ url: response, placeId: id }, 
          { include: Place }
        )
        return {
          status: "success",
          messsage: "upload foto berhasil",
        }
      } catch (error) {
        console.log(error)
        return res.response({
          status: "error",
          messsage: error,
        });
      }
    },
  },
];
