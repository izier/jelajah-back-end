const { Plans } = require("../dummy");

module.exports = [
  {
    method: "GET",
    path: "/plans",
    handler: async (req, res) => {
      try {
        return Plans;
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
        return found = Plans.find(element => element.id == id);
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        }).code(202);
      }
    },
  },
];