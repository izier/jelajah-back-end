const { Place, Plan, City, ImageModel } = require("../models");

module.exports = [
  {
    method: "POST",
    path: "/places",
    handler: async (req, res) => {
      const { name, description, coverImage, rating, cityId } = req.payload;
      try {
        return await Place.create(
          {
            name: name,
            description: description,
            coverImage: coverImage,
            rating: rating,
            cityId: cityId,
          },
          { include: City }
        );
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        }).code(202);
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
        }).code(202);
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
        }).code(202);
      }
    },
  },
];
