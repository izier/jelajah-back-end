const { Place, Plan, Mission } = require("../models");

module.exports = [
  {
    method: "POST",
    path: "/plans",
    handler: async (req, res) => {
      const { name, description, placeId } = req.payload;
      try {
        return await Plan.create(
          {
            name: name,
            description: description,
            placeId: placeId,
          },
          { include: Place }
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
    path: "/plans",
    handler: async (req, res) => {
      try {
        return await Plan.findAll({ include: [Mission] });
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
    path: "/plans/{id}",
    handler: async (req, res) => {
      try {
        const { id } = req.params;
        return await Plan.findByPk(id, { include: Mission });
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        }).code(202);
      }
    },
  },
];
