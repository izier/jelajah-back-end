const { Place, Plan, City, Image } = require("../models");

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
        return await Place.findAll({ include: [Plan] });
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
        return await Place.findByPk(id, { include: [Plan, Image, City] });
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        });
      }
    },
  },
];
