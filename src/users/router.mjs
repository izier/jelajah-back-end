import {
  findAllUserController,
  findByUsernameController,
  updateExpUserController
} from "./controller.mjs";

export const userRouter = [
  {
    method: 'GET',
    path: '/users',
    handler: findAllUserController
  },
  {
    method: 'GET',
    path: '/users/{username}',
    handler: findByUsernameController
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