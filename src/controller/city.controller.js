const { nanoid } = require("nanoid");
const { City, Place } = require("../models");
const handleImageUpload = require("../utils/upload");

module.exports = [
  {
    method: "POST",
    path: "/cities",
    handler: async (req, res) => {
      const { name, description } = req.payload;
      try {
        return await City.create({
          name: name,
          description: description
        });
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
    path: "/cities",
    handler: async (req, res) => {
      try {
        return await City.findAll({ include: Place });
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
    path: "/cities/{id}",
    handler: async (req, res) => {
      try {
        const { id } = req.params;
        return await City.findByPk(id, { include: Place });
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
    path: "/cities/{id}",
    options: {
      payload: {
        multipart: true ,
      }
    },
    handler: async (req, res) => {
      try {   
        const { image } = req.payload
        const { id } = req.params;
        const response = await handleImageUpload(image, "cities_" + id)
        await City.update({ imageUrl: response }, {
          where: {
            id: id
          }
        })
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
