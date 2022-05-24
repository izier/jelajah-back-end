const {
  addUserHandler,
  getUserByUsernameHandler,
} = require('./handlers');

const routes = [
  {
    method: 'POST',
    path: '/users',
    handler: addUserHandler,
  },
  {
    menthod: 'GET',
    path: '/users/{username}',
    handler: getUserByUsernameHandler,
  },
];

module.exports = routes;
