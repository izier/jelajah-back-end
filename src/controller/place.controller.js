const { Place, Plan, City } = require("../models");

module.exports = [
  {
    method: "POST",
    path: "/places",
    handler: async (req, res) => {
      const { name, description, cityId } = req.payload;
      try {
        return await Place.create(
          {
            name: name,
            description: description,
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
        return await Place.findAll({ include: Plan });
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
        return await Place.findByPk(id, { include: Plan });
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        });
      }
    },
  },
];
