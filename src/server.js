const Hapi = require("@hapi/hapi");
const cityController = require("./controller/city.controller");
const missionController = require("./controller/mission.controller");
const placeController = require("./controller/place.controller");
const planController = require("./controller/plan.controller");
const userController = require("./controller/user.controller");
const { database } = require("./models");

(async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  try {
    await database.sync({ force: true });
    console.log("Database Initialized");
  } catch (error) {
    console.log(error);
  }

  await server.register(require("@hapi/basic"));

  server.route(
    [
      {
        method: "GET",
        path: "/",
        handler: async () => ({ message: "Server sedang berjalan" }),
      },
    ].concat(
      userController,
      cityController,
      placeController,
      planController,
      missionController
    )
  );

  await server.start();
  console.log("Server running on %s", server.info.uri);
})();
