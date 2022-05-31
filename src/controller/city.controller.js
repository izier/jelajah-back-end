const { City, Place } = require("../models");

module.exports = [
  {
    method: "POST",
    path: "/cities",
    handler: async (req, res) => {
      const { name, description } = req.payload;
      try {
        return await City.create({
          name: name,
          description: description,
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
];
