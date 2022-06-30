const { Cities } = require("../dummy");

module.exports = [
  {
    method: "GET",
    path: "/cities",
    handler: async (req, res) => {
      try {
        return Cities;
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
    path: "/cities/{id}",
    handler: async (req, res) => {
      try {
        const { id } = req.params;
        return found = Cities.find(element => element.id == id);
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        }).code(202);
      }
    },
  },
];