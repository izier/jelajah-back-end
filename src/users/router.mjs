import {
  getAllUserController,
  getUserByUsernameController,
  updateExpUserController
} from "./controller.mjs";

export const userRouter = [
  {
    method: 'GET',
    path: '/users',
    handler: getAllUserController
  },
  {
    method: 'GET',
    path: '/users/{username}',
    handler: getUserByUsernameController
  },
  {
    method: 'POST',
    path: '/users/{username}/level',
    options: {
      auth: 'simple'
    },
    handler: updateExpUserController
  },
]