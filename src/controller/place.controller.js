const {  Places } = require("../dummy");

module.exports = [
  {
    method: "GET",
    path: "/places",
    handler: async (req, res) => {
      try {
        return Places;
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
        return found = Places.find(element => element.id == id);
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        }).code(202);
      }
    },
  },
];