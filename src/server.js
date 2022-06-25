const Hapi = require('@hapi/hapi');
const cityController = require('./controller/city.controller');
const missionController = require('./controller/mission.controller');
const placeController = require('./controller/place.controller');
const planController = require('./controller/plan.controller');
const userController = require('./controller/user.controller');
const { database } = require('./models');

(async () => {
  const server = new Hapi.Server({
    host: 'localhost',
    port: 3000,
  });

  try {
    await database.sync({ force: true });
    console.log('Database Initialized');
  } catch (error) {
    console.log(error);
  }

  await server.register(require('@hapi/basic'));
  await server.register(require('@hapi/inert'));

  server.route(
    [
      {
        method: 'GET',
        path: '/',
        handler: async () => ({ message: 'Server sedang berjalan' }),
      },
      {
        method: 'GET',
        path: '/images/{file*}',
        handler: {
          directory: {
            path: 'public'
          }
        }
      }
    ].concat(
      userController,
      cityController,
      placeController,
      planController,
      missionController
    )
  );

  await server.start();
  console.log('Server running on %s', server.info.uri);
})();
